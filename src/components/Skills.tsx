'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  {
    category: 'Technical Skills',
    items: [
      { name: 'AI Training', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Linux', level: 85 },
      { name: 'Data Annotation', level: 95 },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Communication', level: 90 },
      { name: 'Team Leadership', level: 85 },
      { name: 'Adaptability', level: 95 },
      { name: 'Creativity', level: 90 },
    ],
  },
];

function SkillCard({ skill, position }: { skill: { name: string; level: number }; position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <boxGeometry args={[2, 2, 0.2]} />
        <meshStandardMaterial
          color={hovered ? '#9333ea' : '#4c1d95'}
          metalness={0.5}
          roughness={0.2}
        />
        <Text
          position={[0, 0, 0.11]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill.name}
        </Text>
        <Text
          position={[0, -0.3, 0.11]}
          fontSize={0.15}
          color="#a855f7"
          anchorX="center"
          anchorY="middle"
        >
          {skill.level}%
        </Text>
      </mesh>
    </Float>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A blend of technical prowess and creative problem-solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gradient">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-purple-900/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Skills Visualization */}
        <div className="h-[400px] mt-20">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {skills[0].items.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                position={[
                  (index - skills[0].items.length / 2) * 2.5,
                  0,
                  0,
                ]}
              />
            ))}
          </Canvas>
        </div>
      </div>
    </section>
  );
} 