'use client';

import { Canvas } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import React from 'react';

export default function UselessVisualization() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      dpr={[1, 2]} // Limit pixel ratio for better performance
      performance={{ min: 0.5 }} // Allow frame rate to drop to maintain performance
    >
      <React.Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[6, 8, 0.2]} />
            <meshStandardMaterial
              color="#00ffff"
              metalness={0.5}
              roughness={0.2}
            />
            <Text
              position={[0, 3, 0.11]}
              fontSize={0.3}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              Useless
            </Text>
          </mesh>
        </Float>
      </React.Suspense>
    </Canvas>
  );
} 