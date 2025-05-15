'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Text3D, Center } from '@react-three/drei';
import gsap from 'gsap';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Useless from '@/components/Useless';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import GitHubProjects from '@/components/GitHubProjects';
import ThemeToggle from '@/components/ThemeToggle';
import ViewToggle from '@/components/ViewToggle';

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Custom cursor
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1,
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Custom cursor */}
      <div ref={cursorRef} className="custom-cursor" />

      {/* Navbar */}
      <Navbar />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* View Toggle */}
      <ViewToggle />

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <Canvas className="absolute inset-0">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Center>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={1.5}
              height={0.2}
              curveSegments={12}
            >
              Milan Nzigiye
              <meshStandardMaterial color="#9333ea" />
            </Text3D>
          </Center>
        </Canvas>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="text-gradient">I'm Milan Nzigiye. I automate the boring, train the brilliant, and build systems that think.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            From Nyamirambo to global AI projects
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 glow"
            >
              Explore My World
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* GitHub Projects Section */}
      <GitHubProjects />

      {/* Experience Section */}
      <Experience />

      {/* Education Section */}
      <Education />

      {/* Certifications Section */}
      <Certifications />

      {/* Useless Section */}
      <Useless />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400 border-t border-purple-500/20">
        <p>© 2025 Milan Nzigiye. Powered by Useless.</p>
      </footer>
    </main>
  );
} 