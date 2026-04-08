'use client';

import dynamic from 'next/dynamic';

const WebGLBackground = dynamic(
  () => import('@/components/background/WebGLBackground'),
  { ssr: false },
);

export function WebGLBackgroundLoader() {
  return <WebGLBackground />;
}
