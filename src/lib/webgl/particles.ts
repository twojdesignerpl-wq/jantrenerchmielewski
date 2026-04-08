// WebGL ambient background — floating gradient blobs with scroll parallax
// Fullscreen quad approach — no gl_PointSize limits, smooth large blobs
// Zero React dependencies, ~4KB gzipped

const VERTEX_SHADER = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

// Fragment shader renders all blobs in a single pass on a fullscreen quad
// Each blob is a soft radial gradient — position, size, color computed per-blob
const FRAGMENT_SHADER = `
  precision mediump float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform float u_scroll;
  uniform float u_opacity;

  // Blob data: up to 18 blobs, each with (x, y, radius, speed, phase, layer, hue_shift)
  #define MAX_BLOBS 18
  uniform vec4 u_blobs[MAX_BLOBS];       // xy = position, z = radius, w = speed
  uniform vec4 u_blobsMeta[MAX_BLOBS];   // x = phase, y = layer, z = hue_shift, w = brightness
  uniform int u_blobCount;

  // Brand cyan: oklch(0.65 0.18 210) ≈ rgb(56, 178, 217) / 255
  vec3 baseColor = vec3(0.22, 0.70, 0.85);

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float aspect = u_resolution.x / u_resolution.y;

    float totalGlow = 0.0;
    vec3 totalColor = vec3(0.0);

    for (int i = 0; i < MAX_BLOBS; i++) {
      if (i >= u_blobCount) break;

      vec4 blob = u_blobs[i];
      vec4 meta = u_blobsMeta[i];

      float phase = meta.x;
      float layer = meta.y;
      float hueShift = meta.z;
      float brightness = meta.w;

      // Parallax scroll offset per layer
      float scrollOffset = u_scroll * (0.03 + layer * 0.08);

      // Gentle drift animation
      float driftX = sin(u_time * blob.w * 0.3 + phase) * 0.04;
      float driftY = cos(u_time * blob.w * 0.25 + phase * 1.4) * 0.03;
      float breathe = sin(u_time * 0.2 + phase * 2.0) * 0.008;

      // Blob center in UV space
      vec2 center = blob.xy;
      center.x += driftX;
      center.y += driftY + breathe - scrollOffset;

      // Wrap vertically
      center.y = mod(center.y + 0.3, 1.6) - 0.3;

      // Distance with aspect ratio correction
      vec2 diff = uv - center;
      diff.x *= aspect;
      float dist = length(diff);

      // Blob radius with breathing
      float radius = blob.z * (1.0 + sin(u_time * 0.15 + phase) * 0.1);

      // Soft gaussian falloff
      float glow = exp(-dist * dist / (3.0 * radius * radius));

      // Color variation per blob — subtle hue shifts within cyan/blue range
      vec3 blobColor = baseColor;
      blobColor.r += hueShift * 0.08;
      blobColor.g += hueShift * 0.05;
      blobColor.b += (1.0 - hueShift) * 0.1;
      blobColor *= brightness;

      float layerWeight = 0.6 + layer * 0.25;
      totalGlow += glow * layerWeight;
      totalColor += blobColor * glow * layerWeight;
    }

    // Normalize color
    vec3 finalColor = totalGlow > 0.001 ? totalColor / totalGlow : baseColor;

    // Apply opacity — balanced: visible glow, dark theme preserved
    float alpha = min(totalGlow * u_opacity, 0.42);

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

export interface ParticleEngineOptions {
  canvas: HTMLCanvasElement;
  blobCount?: number;
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

function createGLProgram(
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
    blobCount = 14,
    opacity = 0.8,
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

  const program = createGLProgram(gl, VERTEX_SHADER, FRAGMENT_SHADER);
  if (!program) return null;

  // Fullscreen quad
  const quadBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW,
  );

  const aPosition = gl.getAttribLocation(program, 'a_position');

  // Uniforms
  const uResolution = gl.getUniformLocation(program, 'u_resolution');
  const uTime = gl.getUniformLocation(program, 'u_time');
  const uScroll = gl.getUniformLocation(program, 'u_scroll');
  const uOpacity = gl.getUniformLocation(program, 'u_opacity');
  const uBlobCount = gl.getUniformLocation(program, 'u_blobCount');

  // Generate blob data
  const rand = seededRandom(42);
  const count = Math.min(blobCount, 18);

  const blobsData = new Float32Array(count * 4);
  const blobsMetaData = new Float32Array(count * 4);

  for (let i = 0; i < count; i++) {
    const o = i * 4;
    blobsData[o + 0] = rand() * 1.2 - 0.1; // x: [-0.1, 1.1] (UV space)
    blobsData[o + 1] = rand() * 1.4 - 0.2; // y: [-0.2, 1.2]
    blobsData[o + 2] = 0.08 + rand() * 0.16; // radius: [0.08, 0.24] in UV
    blobsData[o + 3] = 0.3 + rand() * 0.7; // speed: [0.3, 1.0]

    blobsMetaData[o + 0] = rand() * Math.PI * 2; // phase
    blobsMetaData[o + 1] = Math.floor(rand() * 3); // layer: 0, 1, 2
    blobsMetaData[o + 2] = rand(); // hue_shift: [0, 1]
    blobsMetaData[o + 3] = 0.6 + rand() * 0.4; // brightness: [0.6, 1.0]
  }

  // Get uniform locations for arrays
  const uBlobs: (WebGLUniformLocation | null)[] = [];
  const uBlobsMeta: (WebGLUniformLocation | null)[] = [];
  for (let i = 0; i < count; i++) {
    uBlobs.push(gl.getUniformLocation(program, `u_blobs[${i}]`));
    uBlobsMeta.push(gl.getUniformLocation(program, `u_blobsMeta[${i}]`));
  }

  // State
  let scrollProgress = 0;
  let rafId = 0;
  let startTime = 0;
  let destroyed = false;
  let contextLost = false;

  function resize() {
    if (destroyed || contextLost) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  function render(now: number) {
    if (destroyed || contextLost) return;

    if (document.hidden) {
      rafId = requestAnimationFrame(render);
      return;
    }

    if (!startTime) startTime = now;
    const elapsed = ((now - startTime) / 1000) * speed;

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);

    // Fullscreen quad attributes
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    // Alpha blending (not additive — proper compositing over dark bg)
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Set uniforms
    gl.uniform2f(uResolution, canvas.width, canvas.height);
    gl.uniform1f(uTime, elapsed);
    gl.uniform1f(uScroll, scrollProgress);
    gl.uniform1f(uOpacity, opacity);
    gl.uniform1i(uBlobCount, count);

    // Set blob data
    for (let i = 0; i < count; i++) {
      const o = i * 4;
      if (uBlobs[i])
        gl.uniform4f(
          uBlobs[i],
          blobsData[o],
          blobsData[o + 1],
          blobsData[o + 2],
          blobsData[o + 3],
        );
      if (uBlobsMeta[i])
        gl.uniform4f(
          uBlobsMeta[i],
          blobsMetaData[o],
          blobsMetaData[o + 1],
          blobsMetaData[o + 2],
          blobsMetaData[o + 3],
        );
    }

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    rafId = requestAnimationFrame(render);
  }

  function onContextLost(e: Event) {
    e.preventDefault();
    contextLost = true;
    cancelAnimationFrame(rafId);
  }

  function onContextRestored() {
    contextLost = false;
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

      gl.deleteBuffer(quadBuffer);
      gl.deleteProgram(program);

      const ext = gl.getExtension('WEBGL_lose_context');
      if (ext) ext.loseContext();
    },
  };
}
