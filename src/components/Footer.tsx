'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
    initial: { opacity: 0 },
    animate: controls,
    variants: {
      visible: { opacity: 1 }
    },
    transition: { duration: 0.5 }
  };

  return (
    <motion.footer
      ref={ref}
      {...animationProps}
      className="py-6 px-4 bg-black/80 backdrop-blur-md border-t border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400">
          © 2025 Milan Nzigiye. Powered by{' '}
          <span className="text-purple-400 hover:text-purple-300 transition-colors">
            Useless
          </span>
        </p>
      </div>
    </motion.footer>
  );
} 