'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

export default function Education() {
  return (
    <section id="education" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-purple-900/20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-gradient">Education</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Education Visualization */}
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
                    AUCA
                  </Text>
                </mesh>
              </Float>
            </Canvas>
          </div>

          {/* Education Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-purple-400">
                  <FaUniversity />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">
                    Adventist University of Central Africa
                  </h3>
                  <p className="text-gray-300 mb-4">2019 - 2024</p>
                  <div className="space-y-2">
                    <p className="text-xl text-white">
                      Bachelor of Science in Information Technology
                    </p>
                    <p className="text-purple-300">Major: Information Management</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl text-purple-400">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">
                    Key Achievements
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Graduated with honors</li>
                    <li>Led multiple tech initiatives</li>
                    <li>Developed innovative solutions for local businesses</li>
                    <li>Mentored junior students in programming</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 