// Pure WebGL particle engine — floating soft orbs with scroll parallax
// Zero React/framework dependencies, ~3-4KB gzipped

const VERTEX_SHADER = `
  attribute vec2 a_position;
  attribute float a_size;
  attribute float a_speed;
  attribute float a_phase;
  attribute float a_layer;
  attribute float a_brightness;

  uniform float u_time;
  uniform float u_scroll;
  uniform vec2 u_resolution;
  uniform float u_dpr;

  varying float v_alpha;
  varying float v_brightness;

  void main() {
    float layerParallax = 0.05 + a_layer * 0.12;
    float scrollOffset = u_scroll * layerParallax;

    float driftX = sin(u_time * a_speed * 0.4 + a_phase) * 0.02;
    float driftY = cos(u_time * a_speed * 0.3 + a_phase * 1.7) * 0.015;

    float floatY = sin(u_time * 0.15 + a_phase * 2.0) * 0.008;

    vec2 pos = a_position;
    pos.x += driftX;
    pos.y += driftY + floatY - scrollOffset;

    // Wrap vertically with padding
    pos.y = mod(pos.y + 1.3, 2.6) - 1.3;

    gl_Position = vec4(pos, 0.0, 1.0);
    gl_PointSize = a_size * u_dpr;

    // Fade at edges
    float edgeFade = smoothstep(-1.2, -0.8, pos.y) * smoothstep(1.2, 0.8, pos.y);
    float layerAlpha = 0.3 + a_layer * 0.35;
    v_alpha = layerAlpha * edgeFade;
    v_brightness = a_brightness;
  }
`;

const FRAGMENT_SHADER = `
  precision mediump float;

  uniform vec3 u_color;
  uniform float u_baseOpacity;

  varying float v_alpha;
  varying float v_brightness;

  void main() {
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);

    // Soft radial gradient with smooth falloff
    float alpha = smoothstep(0.5, 0.0, dist);
    // Extra softness in the outer ring
    alpha *= smoothstep(0.5, 0.15, dist);

    vec3 color = u_color * (0.8 + v_brightness * 0.4);
    float finalAlpha = alpha * v_alpha * u_baseOpacity;

    gl_FragColor = vec4(color, finalAlpha);
  }
`;

export interface ParticleEngineOptions {
  canvas: HTMLCanvasElement;
  particleCount?: number;
  color?: [number, number, number];
  opacity?: number;
  speed?: number;
}

export interface ParticleEngine {
  start: () => void;
  updateScroll: (progress: number) => void;
  resize: () => void;
  destroy: () => void;
}

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(
  gl: WebGLRenderingContext,
  vertSrc: string,
  fragSrc: string,
): WebGLProgram | null {
  const vert = compileShader(gl, gl.VERTEX_SHADER, vertSrc);
  const frag = compileShader(gl, gl.FRAGMENT_SHADER, fragSrc);
  if (!vert || !frag) return null;

  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function createParticleEngine(
  options: ParticleEngineOptions,
): ParticleEngine | null {
  const {
    canvas,
    particleCount = 40,
    // Brand cyan: oklch(0.65 0.18 210) ≈ rgb(56, 178, 217)
    color = [0.22, 0.70, 0.85],
    opacity = 0.07,
    speed = 1.0,
  } = options;

  const maybeGl = canvas.getContext('webgl', {
    alpha: true,
    premultipliedAlpha: false,
    antialias: false,
    preserveDrawingBuffer: false,
    powerPreference: 'low-power',
  });

  if (!maybeGl) return null;
  const gl: WebGLRenderingContext = maybeGl;

  const program = createProgram(gl, VERTEX_SHADER, FRAGMENT_SHADER);
  if (!program) return null;

  // Attribute locations
  const aPosition = gl.getAttribLocation(program, 'a_position');
  const aSize = gl.getAttribLocation(program, 'a_size');
  const aSpeed = gl.getAttribLocation(program, 'a_speed');
  const aPhase = gl.getAttribLocation(program, 'a_phase');
  const aLayer = gl.getAttribLocation(program, 'a_layer');
  const aBrightness = gl.getAttribLocation(program, 'a_brightness');

  // Uniform locations
  const uTime = gl.getUniformLocation(program, 'u_time');
  const uScroll = gl.getUniformLocation(program, 'u_scroll');
  const uResolution = gl.getUniformLocation(program, 'u_resolution');
  const uDpr = gl.getUniformLocation(program, 'u_dpr');
  const uColor = gl.getUniformLocation(program, 'u_color');
  const uBaseOpacity = gl.getUniformLocation(program, 'u_baseOpacity');

  // Generate particle data
  const rand = seededRandom(42);
  const FLOATS_PER_PARTICLE = 7; // x, y, size, speed, phase, layer, brightness
  const data = new Float32Array(particleCount * FLOATS_PER_PARTICLE);

  for (let i = 0; i < particleCount; i++) {
    const offset = i * FLOATS_PER_PARTICLE;
    data[offset + 0] = rand() * 2.4 - 1.2; // x: [-1.2, 1.2]
    data[offset + 1] = rand() * 2.6 - 1.3; // y: [-1.3, 1.3]
    data[offset + 2] = 4 + rand() * 28; // size: [4, 32] px
    data[offset + 3] = 0.2 + rand() * 0.8; // speed multiplier
    data[offset + 4] = rand() * Math.PI * 2; // phase
    data[offset + 5] = Math.floor(rand() * 3); // layer: 0, 1, 2
    data[offset + 6] = 0.4 + rand() * 0.6; // brightness: [0.4, 1.0]
  }

  // Create buffer
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

  const stride = FLOATS_PER_PARTICLE * 4;

  // State
  let scrollProgress = 0;
  let rafId = 0;
  let startTime = 0;
  let destroyed = false;
  let contextLost = false;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  function setupAttributes() {
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, stride, 0);

    gl.enableVertexAttribArray(aSize);
    gl.vertexAttribPointer(aSize, 1, gl.FLOAT, false, stride, 8);

    gl.enableVertexAttribArray(aSpeed);
    gl.vertexAttribPointer(aSpeed, 1, gl.FLOAT, false, stride, 12);

    gl.enableVertexAttribArray(aPhase);
    gl.vertexAttribPointer(aPhase, 1, gl.FLOAT, false, stride, 16);

    gl.enableVertexAttribArray(aLayer);
    gl.vertexAttribPointer(aLayer, 1, gl.FLOAT, false, stride, 20);

    gl.enableVertexAttribArray(aBrightness);
    gl.vertexAttribPointer(aBrightness, 1, gl.FLOAT, false, stride, 24);
  }

  function resize() {
    if (destroyed || contextLost) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  function render(now: number) {
    if (destroyed || contextLost) return;

    // Pause when tab is hidden
    if (document.hidden) {
      rafId = requestAnimationFrame(render);
      return;
    }

    if (!startTime) startTime = now;
    const elapsed = ((now - startTime) / 1000) * speed;

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);
    setupAttributes();

    // Additive blending for soft glow
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    gl.uniform1f(uTime, elapsed);
    gl.uniform1f(uScroll, scrollProgress);
    gl.uniform2f(uResolution, canvas.width, canvas.height);
    gl.uniform1f(uDpr, dpr);
    gl.uniform3f(uColor, color[0], color[1], color[2]);
    gl.uniform1f(uBaseOpacity, opacity);

    gl.drawArrays(gl.POINTS, 0, particleCount);

    rafId = requestAnimationFrame(render);
  }

  // Context loss handling
  function onContextLost(e: Event) {
    e.preventDefault();
    contextLost = true;
    cancelAnimationFrame(rafId);
  }

  function onContextRestored() {
    contextLost = false;
    const newProgram = createProgram(gl, VERTEX_SHADER, FRAGMENT_SHADER);
    if (!newProgram) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    resize();
    startTime = 0;
    rafId = requestAnimationFrame(render);
  }

  canvas.addEventListener('webglcontextlost', onContextLost);
  canvas.addEventListener('webglcontextrestored', onContextRestored);

  return {
    start() {
      if (destroyed) return;
      resize();
      startTime = 0;
      rafId = requestAnimationFrame(render);
    },

    updateScroll(progress: number) {
      scrollProgress = progress;
    },

    resize,

    destroy() {
      destroyed = true;
      cancelAnimationFrame(rafId);
      canvas.removeEventListener('webglcontextlost', onContextLost);
      canvas.removeEventListener('webglcontextrestored', onContextRestored);

      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);

      const ext = gl.getExtension('WEBGL_lose_context');
      if (ext) ext.loseContext();
    },
  };
}
