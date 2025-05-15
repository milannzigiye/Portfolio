'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaCode, FaBriefcase, FaGraduationCap, FaAward, FaSmile, FaEnvelope, FaGithub } from 'react-icons/fa';
import ProfileImage from './ProfileImage';

const navItems = [
  { name: 'Home', icon: <FaHome />, href: '#home' },
  { name: 'Skills', icon: <FaCode />, href: '#skills' },
  { name: 'Projects', icon: <FaGithub />, href: '#projects' },
  { name: 'Experience', icon: <FaBriefcase />, href: '#experience' },
  { name: 'Education', icon: <FaGraduationCap />, href: '#education' },
  { name: 'Certifications', icon: <FaAward />, href: '#certifications' },
  { name: 'Useless', icon: <FaSmile />, href: '#useless' },
  { name: 'Contact', icon: <FaEnvelope />, href: '#contact' },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Profile Photo */}
              <div className="flex items-center">
                <ProfileImage />
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </motion.a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button className="text-gray-300 hover:text-purple-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
} 