'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-purple-900/20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-gradient">About Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D About Visualization */}
          <div className="h-[600px]">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh position={[0, 0, 0]}>
                  <boxGeometry args={[6, 8, 0.2]} />
                  <meshStandardMaterial
                    color="#9333ea"
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
                    About
                  </Text>
                </mesh>
              </Float>
            </Canvas>
          </div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a self-taught builder of systems—from AI workflows to data pipelines—powered by passion and late-night problem solving. My foundation in information management meets hands-on work across OpenAI, DoorDash, Meta, and more.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20"
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                What Drives Me
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Building intelligent systems that solve real problems</li>
                <li>Automating repetitive tasks to free up creative energy</li>
                <li>Mentoring and sharing knowledge with the community</li>
                <li>Pushing the boundaries of what's possible with AI</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 