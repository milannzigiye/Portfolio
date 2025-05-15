'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import { FaBriefcase, FaProjectDiagram, FaCode } from 'react-icons/fa';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  projects: {
    name: string;
    description: string;
    technologies: string[];
  }[];
}

const experiences: Experience[] = [
  {
    company: 'Invisible Technologies',
    role: 'AI Training Specialist',
    period: '2023 - Present',
    description: 'Partnered with OpenAI via Feather on SearchGPT and collaborated with major tech companies.',
    projects: [
      {
        name: 'SearchGPT Integration',
        description: 'Developed and optimized AI training workflows for OpenAI\'s SearchGPT project.',
        technologies: ['OpenAI', 'Python', 'RAG', 'RLHF']
      },
      {
        name: 'Multi-Platform Integration',
        description: 'Led projects with Amazon Phoenix, Google Flex, xAI, Cohere, and AI21.',
        technologies: ['AWS', 'Google Cloud', 'AI Integration']
      },
      {
        name: 'Menu Digitization',
        description: 'Automated menu processing for DoorDash, UberEats, and GrubHub.',
        technologies: ['OCR', 'Data Processing', 'Automation']
      }
    ]
  },
  {
    company: 'LabelBox',
    role: 'Data Annotation Lead',
    period: '2022 - 2023',
    description: 'Managed dataset consistency and annotation for AI training.',
    projects: [
      {
        name: 'Video Annotation',
        description: 'Led video annotation project for NVIDIA VFM.',
        technologies: ['Video Processing', 'Computer Vision', 'Data Annotation']
      },
      {
        name: 'LLM Training',
        description: 'Conducted LLM math training for Meta Sphinx.',
        technologies: ['LLM', 'Mathematics', 'Training']
      },
      {
        name: 'Alignerr Development',
        description: 'Developed and maintained dataset consistency tools.',
        technologies: ['Python', 'Data Processing', 'Quality Control']
      }
    ]
  },
  {
    company: 'SmartCat AI',
    role: 'AI Integration Specialist',
    period: '2021 - 2022',
    description: 'Implemented AI tools for workflow automation.',
    projects: [
      {
        name: 'Workflow Automation',
        description: 'Designed and implemented AI-powered automation solutions.',
        technologies: ['AI Integration', 'Automation', 'Workflow']
      }
    ]
  },
  {
    company: 'Mozilla Common Voice',
    role: 'Voice Data Specialist',
    period: '2020 - 2021',
    description: 'Contributed to voice dataset annotation for NLP systems.',
    projects: [
      {
        name: 'Voice Dataset Annotation',
        description: 'Managed and processed voice data for NLP training.',
        technologies: ['NLP', 'Voice Processing', 'Data Annotation']
      }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-purple-900/20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 3D Experience Visualization */}
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
                    Experience
                  </Text>
                </mesh>
              </Float>
            </Canvas>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl text-purple-400">
                    <FaBriefcase />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-gray-300 mb-4">{exp.role} • {exp.period}</p>
                    <p className="text-gray-400 mb-6">{exp.description}</p>

                    <div className="space-y-4">
                      {exp.projects.map((project, pIndex) => (
                        <motion.div
                          key={project.name}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: pIndex * 0.1 }}
                          className="bg-purple-900/10 p-4 rounded-xl"
                        >
                          <div className="flex items-start gap-3">
                            <FaProjectDiagram className="text-purple-400 mt-1" />
                            <div>
                              <h4 className="text-lg font-semibold text-purple-300 mb-1">
                                {project.name}
                              </h4>
                              <p className="text-gray-400 text-sm mb-2">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 