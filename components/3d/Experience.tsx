'use client';

import { OrbitControls, Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import { BuildingModel } from './BuildingModel';

export function Experience() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[30, 20, 30]} />
      <OrbitControls 
        enablePan={false} 
        maxPolarAngle={Math.PI / 2.1} 
        minDistance={20}
        maxDistance={60}
        autoRotate
        autoRotateSpeed={0.5}
      />

      <Environment preset="night" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <ambientLight intensity={0.2} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow 
        shadow-mapSize={[1024, 1024]} 
      />

      <BuildingModel />
    </>
  );
}
