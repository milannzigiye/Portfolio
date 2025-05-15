'use client';

import { motion, useAnimation } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import dynamic from 'next/dynamic';
import React from 'react';

interface UselessFact {
  fact: string;
  emoji: string;
  color: string;
}

const uselessFacts: UselessFact[] = [
  {
    fact: "I can solve a Rubik's cube blindfolded",
    emoji: "🎲",
    color: "#FF6B6B"
  },
  {
    fact: "I've written code in 15 different programming languages",
    emoji: "💻",
    color: "#4ECDC4"
  },
  {
    fact: "I can recite π to 100 decimal places",
    emoji: "π",
    color: "#FFD93D"
  },
  {
    fact: "I've never broken a bone",
    emoji: "🦴",
    color: "#95E1D3"
  }
];

// Lazy load the 3D component
const UselessVisualization = dynamic(() => import('./UselessVisualization'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] flex items-center justify-center">
      <div className="text-neon-blue animate-neon-pulse">Loading...</div>
    </div>
  ),
});

function FloatingFact({ fact, position }: { fact: UselessFact; position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (meshRef.current) {
      const animate = () => {
        if (meshRef.current) {
          meshRef.current.rotation.y += 0.01;
        }
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <boxGeometry args={[3, 2, 0.2]} />
        <meshStandardMaterial
          color={fact.color}
          metalness={0.5}
          roughness={0.2}
        />
        <Text
          position={[0, 0.5, 0.11]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {fact.emoji}
        </Text>
        <Text
          position={[0, -0.5, 0.11]}
          fontSize={0.1}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
        >
          {fact.fact}
        </Text>
      </mesh>
    </Float>
  );
}

export default function Useless() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const handleKonami = (e: KeyboardEvent) => {
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let current = 0;

    if (e.key === konami[current]) {
      current++;
      if (current === konami.length) {
        setShowEasterEgg(true);
        controls.start({
          scale: [1, 1.2, 1],
          rotate: [0, 360],
          transition: { duration: 1 }
        });
        setTimeout(() => setShowEasterEgg(false), 3000);
        current = 0;
      }
    } else {
      current = 0;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKonami);
    return () => window.removeEventListener('keydown', handleKonami);
  }, []);

  useEffect(() => {
    const targetDate = new Date('2025-07-17T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-black to-neon-blue/20"
      id="useless"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-neon-blue/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-neon-blue animate-neon-pulse">Useless</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Useless Visualization */}
          <div className="h-[600px]">
            <React.Suspense fallback={
              <div className="h-full flex items-center justify-center">
                <div className="text-neon-blue animate-neon-pulse">Loading...</div>
              </div>
            }>
              <UselessVisualization />
            </React.Suspense>
          </div>

          {/* Useless Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-neon-blue/10 backdrop-blur-sm p-8 rounded-2xl border border-neon-blue/20 shadow-neon">
              <h3 className="text-2xl font-bold text-neon-blue mb-4 animate-neon-pulse">
                Useless isn't lazy. It's smart.
              </h3>
              <p className="text-gray-300 mb-6">
                We automate what drains you—so you can focus on what drives you.
              </p>

              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-neon-blue/20 p-4 rounded-xl text-center shadow-neon">
                  <div className="text-3xl font-bold text-neon-blue animate-neon-pulse">{timeLeft.days}</div>
                  <div className="text-sm text-gray-400">Days</div>
                </div>
                <div className="bg-neon-blue/20 p-4 rounded-xl text-center shadow-neon">
                  <div className="text-3xl font-bold text-neon-blue animate-neon-pulse">{timeLeft.hours}</div>
                  <div className="text-sm text-gray-400">Hours</div>
                </div>
                <div className="bg-neon-blue/20 p-4 rounded-xl text-center shadow-neon">
                  <div className="text-3xl font-bold text-neon-blue animate-neon-pulse">{timeLeft.minutes}</div>
                  <div className="text-sm text-gray-400">Minutes</div>
                </div>
                <div className="bg-neon-blue/20 p-4 rounded-xl text-center shadow-neon">
                  <div className="text-3xl font-bold text-neon-blue animate-neon-pulse">{timeLeft.seconds}</div>
                  <div className="text-sm text-gray-400">Seconds</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Easter Egg */}
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={controls}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="text-6xl animate-neon-pulse text-neon-blue">🎉</div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 