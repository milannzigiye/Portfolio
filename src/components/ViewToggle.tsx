'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaTabletAlt, FaMobile } from 'react-icons/fa';

type ViewMode = 'desktop' | 'tablet' | 'mobile';

export default function ViewToggle() {
  const [viewMode, setViewMode] = useState<ViewMode>('desktop');

  const handleViewChange = (mode: ViewMode) => {
    setViewMode(mode);
    const main = document.querySelector('main');
    if (main) {
      main.className = `min-h-screen view-${mode}`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 left-8 z-50 flex gap-2 p-2 rounded-full bg-purple-900/80 backdrop-blur-sm border border-purple-500/20"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleViewChange('desktop')}
        className={`p-2 rounded-full transition-colors ${
          viewMode === 'desktop' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
        }`}
        aria-label="Desktop view"
      >
        <FaLaptop className="text-xl" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleViewChange('tablet')}
        className={`p-2 rounded-full transition-colors ${
          viewMode === 'tablet' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
        }`}
        aria-label="Tablet view"
      >
        <FaTabletAlt className="text-xl" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleViewChange('mobile')}
        className={`p-2 rounded-full transition-colors ${
          viewMode === 'mobile' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
        }`}
        aria-label="Mobile view"
      >
        <FaMobile className="text-xl" />
      </motion.button>
    </motion.div>
  );
} 