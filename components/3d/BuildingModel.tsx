'use client';

import { useRef, useState } from 'react';
import { Group, MathUtils } from 'three';
import { Html, useCursor } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

interface BuildingModelProps {
  onFloorSelect?: (floor: 'ground' | 'first') => void;
}

export function BuildingModel({ onFloorSelect }: BuildingModelProps) {
  const groupRef = useRef<Group>(null);
  const [hoveredFloor, setHoveredFloor] = useState<string | null>(null);

  // Change cursor to pointer when hovering a floor
  useCursor(!!hoveredFloor);

  // Refs for individual floor groups to animate them
  const groundFloorRef = useRef<Group>(null);
  const firstFloorRef = useRef<Group>(null);

  useFrame((state, delta) => {
    // Smoothly animate scale based on hover state
    if (groundFloorRef.current) {
        const targetScale = hoveredFloor === 'ground' ? 1.05 : 1;
        groundFloorRef.current.scale.x = MathUtils.damp(groundFloorRef.current.scale.x, targetScale, 10, delta);
        groundFloorRef.current.scale.y = MathUtils.damp(groundFloorRef.current.scale.y, targetScale, 10, delta);
        groundFloorRef.current.scale.z = MathUtils.damp(groundFloorRef.current.scale.z, targetScale, 10, delta);
    }
    if (firstFloorRef.current) {
        const targetScale = hoveredFloor === 'first' ? 1.05 : 1;
        firstFloorRef.current.scale.x = MathUtils.damp(firstFloorRef.current.scale.x, targetScale, 10, delta);
        firstFloorRef.current.scale.y = MathUtils.damp(firstFloorRef.current.scale.y, targetScale, 10, delta);
        firstFloorRef.current.scale.z = MathUtils.damp(firstFloorRef.current.scale.z, targetScale, 10, delta);
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Ground Floor: Lobby & Restaurant */}
      <group 
        ref={groundFloorRef}
        position={[0, 0, 0]}
        onPointerOver={(e) => { e.stopPropagation(); setHoveredFloor('ground'); }}
        onPointerOut={() => setHoveredFloor(null)}
        onClick={(e) => { e.stopPropagation(); onFloorSelect?.('ground'); }}
      >
        <mesh position={[0, 2, 0]} receiveShadow castShadow>
          <boxGeometry args={[15, 4, 20]} />
          <meshStandardMaterial 
            color={hoveredFloor === 'ground' ? "#d4af37" : "#2a2a2a"} 
            transparent 
            opacity={0.9} 
          />
        </mesh>
        
        {/* Label always visible or on hover */}
        {hoveredFloor === 'ground' && (
          <Html position={[10, 2, 0]} center>
            <div className="bg-charcoal/90 text-gold p-2 rounded border border-gold text-sm whitespace-nowrap pointer-events-none select-none z-10">
              Ground Floor: BkCooks & Lobby <br/>
              <span className="text-xs text-beige">Click to Explore</span>
            </div>
          </Html>
        )}
      </group>

      {/* First Floor: Meeting Rooms */}
      <group 
        ref={firstFloorRef}
        position={[0, 4, 0]}
        onPointerOver={(e) => { e.stopPropagation(); setHoveredFloor('first'); }}
        onPointerOut={() => setHoveredFloor(null)}
        onClick={(e) => { e.stopPropagation(); onFloorSelect?.('first'); }}
      >
        <mesh position={[0, 2, 0]} receiveShadow castShadow>
          <boxGeometry args={[15, 4, 20]} />
          <meshStandardMaterial 
            color={hoveredFloor === 'first' ? "#d4af37" : "#3a3a3a"} 
            transparent 
            opacity={0.9} 
          />
        </mesh>

        {hoveredFloor === 'first' && (
          <Html position={[10, 2, 0]} center>
            <div className="bg-charcoal/90 text-gold p-2 rounded border border-gold text-sm whitespace-nowrap pointer-events-none select-none z-10">
              First Floor: Meeting Rooms <br/>
              <span className="text-xs text-beige">Click to Explore</span>
            </div>
          </Html>
        )}
      </group>

      {/* Roof / Top */}
      <mesh position={[0, 8.1, 0]} receiveShadow>
        <boxGeometry args={[16, 0.2, 21]} />
        <meshStandardMaterial color="#111" />
      </mesh>

      {/* Ground Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#050505" />
      </mesh>
    </group>
  );
}
