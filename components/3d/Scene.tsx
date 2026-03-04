'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Loader } from '@/components/3d/Loader';
import { Experience } from '@/components/3d/Experience';

export default function Scene() {
  return (
    <div className="h-full w-full absolute inset-0 -z-10 bg-charcoal">
      <Canvas
        shadows
        camera={{ position: [5, 5, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}
