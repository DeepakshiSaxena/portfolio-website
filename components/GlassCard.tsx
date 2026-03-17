'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  animated?: boolean;
}

export function GlassCard({
  children,
  className = '',
  delay = 0,
  hover = true,
  animated = true,
}: GlassCardProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };

  return (
    <motion.div
      variants={animated ? variants : undefined}
      initial={animated ? 'hidden' : 'visible'}
      whileInView={animated ? 'visible' : undefined}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={
        hover
          ? { y: -10, transition: { duration: 0.3 } }
          : undefined
      }
      className={`glass-effect rounded-2xl p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
