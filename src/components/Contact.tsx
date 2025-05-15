'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useRef, useEffect } from 'react';

interface Reference {
  name: string;
  role: string;
  email: string;
}

const references: Reference[] = [
  {
    name: 'John Doe',
    role: 'Project Lead at Invisible',
    email: 'john.doe@example.com'
  },
  {
    name: 'Jane Smith',
    role: 'Team Manager at LabelBox',
    email: 'jane.smith@example.com'
  }
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const animationProps = prefersReducedMotion ? {} : {
    initial: { opacity: 0, y: 20 },
    animate: controls,
    variants: {
      visible: { opacity: 1, y: 0 }
    },
    transition: { duration: 0.8 }
  };

  return (
    <section 
      ref={ref}
      id="contact" 
      className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-black to-purple-900"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-purple-900/20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          {...animationProps}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-gradient">Get in Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            {...animationProps}
            className="space-y-8"
          >
            <div className="bg-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-2xl text-purple-400">
                    <FaEnvelope />
                  </div>
                  <a href="mailto:milannzigiye@gmail.com" className="text-gray-300 hover:text-purple-400">
                    milannzigiye@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl text-purple-400">
                    <FaPhone />
                  </div>
                  <a href="tel:+250785384235" className="text-gray-300 hover:text-purple-400">
                    +250 785 384 235
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl text-purple-400">
                    <FaMapMarkerAlt />
                  </div>
                  <span className="text-gray-300">Kigali, Rwanda</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Connect</h3>
              <div className="flex gap-6">
                <a
                  href="https://linkedin.com/in/milannzigiye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <div>
                    <FaLinkedin />
                  </div>
                </a>
                <a
                  href="https://github.com/milannzigiye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <div>
                    <FaGithub />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* References Section */}
          <motion.div
            {...animationProps}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-6">References</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {references.map((ref, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-purple-900/20 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
                >
                  <h4 className="text-xl font-semibold text-white mb-2">{ref.name}</h4>
                  <p className="text-purple-300 mb-2">{ref.role}</p>
                  <a href={`mailto:${ref.email}`} className="text-purple-400 hover:text-purple-300 transition-colors">
                    {ref.email}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Resume Download */}
        <motion.div
          {...animationProps}
          className="mt-8 text-center"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            <div className="mr-2">
              <FaDownload />
            </div>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
} 