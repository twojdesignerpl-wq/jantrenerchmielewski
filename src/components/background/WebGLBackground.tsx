'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

interface NavigatorExtended extends Navigator {
  deviceMemory?: number;
}

function isLowEndDevice(): boolean {
  if (typeof window === 'undefined') return false;
  const nav = navigator as NavigatorExtended;
  if (nav.hardwareConcurrency && nav.hardwareConcurrency <= 2) return true;
  if (nav.deviceMemory && nav.deviceMemory <= 2) return true;
  return false;
}

function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: coarse)').matches;
}

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Awaited<
    ReturnType<typeof import('@/lib/webgl/particles').createParticleEngine>
  > | null>(null);
  const scrollRef = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  const getScrollProgress = useCallback(() => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) return 0;
    return Math.min(1, Math.max(0, window.scrollY / scrollHeight));
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (isLowEndDevice()) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let destroyed = false;

    async function init() {
      const { createParticleEngine } = await import('@/lib/webgl/particles');

      if (destroyed || !canvas) return;

      const blobCount = isMobile() ? 8 : 14;

      const engine = createParticleEngine({
        canvas,
        blobCount,
        opacity: 0.75,
        speed: 1.0,
      });

      if (!engine || destroyed) return;

      engineRef.current = engine;
      engine.start();
    }

    init();

    function onScroll() {
      scrollRef.current = getScrollProgress();
      engineRef.current?.updateScroll(scrollRef.current);
    }

    function onResize() {
      engineRef.current?.resize();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    onScroll();

    return () => {
      destroyed = true;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      engineRef.current?.destroy();
      engineRef.current = null;
    };
  }, [prefersReducedMotion, getScrollProgress]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}
