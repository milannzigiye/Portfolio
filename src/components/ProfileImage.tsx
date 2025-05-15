'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProfileImageProps {
  className?: string;
}

export default function ProfileImage({ className = '' }: ProfileImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative w-10 h-10 rounded-lg overflow-hidden border-2 border-purple-500 ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/profile.jpg"
          alt="Milan Nzigiye"
          fill
          sizes="(max-width: 768px) 40px, 40px"
          className="object-cover"
          priority
          onLoadingComplete={() => setIsLoading(false)}
        />
      </motion.div>
      {isLoading && (
        <div className="absolute inset-0 bg-purple-900/20 animate-pulse" />
      )}
    </div>
  );
} 