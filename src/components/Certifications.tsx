'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import { FaAward, FaGoogle, FaLinux, FaCode } from 'react-icons/fa';
import { SiCoursera } from 'react-icons/si';
import type { IconType } from 'react-icons';

interface Certification {
  title: string;
  issuer: string;
  icon: IconType;
  date: string;
  description: string;
}

const certifications: Certification[] = [
  {
    title: 'Google Data Analytics',
    issuer: 'Coursera',
    icon: FaGoogle,
    date: '2023',
    description: 'Professional certification in data analytics and visualization'
  },
  {
    title: 'EF SET English Certificate',
    issuer: 'EF Education First',
    icon: FaAward,
    date: '2023',
    description: 'C2 Proficient level certification in English language'
  },
  {
    title: 'Intro to Programming',
    issuer: 'Self-Taught',
    icon: FaCode,
    date: '2022',
    description: 'Comprehensive training in Python, HTML, and C++'
  },
  {
    title: 'NDG Linux Essentials',
    issuer: 'Cisco',
    icon: FaLinux,
    date: '2022',
    description: 'Fundamental Linux operating system skills and knowledge'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-400 mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                <p className="text-gray-300">{cert.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 h-[400px]">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <Text
                position={[0, 0, 0]}
                fontSize={1}
                color="#9333ea"
                anchorX="center"
                anchorY="middle"
              >
                Certified Excellence
              </Text>
            </Float>
          </Canvas>
        </div>
      </div>
    </section>
  );
} 