'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'AI Training Platform',
    description: 'Built a scalable platform for training and deploying AI models',
    technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
    image: '/projects/ai-platform.jpg',
    link: '#',
  },
  {
    title: 'Data Annotation Tool',
    description: 'Developed an efficient tool for large-scale data annotation',
    technologies: ['C++', 'OpenCV', 'Qt', 'SQL'],
    image: '/projects/annotation-tool.jpg',
    link: '#',
  },
  {
    title: 'Automation Framework',
    description: 'Created a framework for automating repetitive tasks',
    technologies: ['Python', 'Selenium', 'Docker', 'Jenkins'],
    image: '/projects/automation.jpg',
    link: '#',
  },
];

interface ProjectCardProps {
  project: Project;
  position: [number, number, number];
  key?: string;
}

function ProjectCard({ project, position }: ProjectCardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const texture = useTexture(project.image);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = hovered ? Math.PI / 4 : 0;
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
        <boxGeometry args={[3, 4, 0.2]} />
        <meshStandardMaterial
          map={texture}
          color={hovered ? '#9333ea' : '#4c1d95'}
          metalness={0.5}
          roughness={0.2}
        />
        <Text
          position={[0, 1.5, 0.11]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {project.title}
        </Text>
      </mesh>
    </Float>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 relative">
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
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A showcase of my most impactful work
          </p>
        </motion.div>

        {/* 3D Project Cards */}
        <div className="h-[600px] mb-20">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                position={[
                  (index - projects.length / 2) * 4,
                  0,
                  0,
                ]}
              />
            ))}
          </Canvas>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-purple-900/20 backdrop-blur-sm rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🚀</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gradient">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 