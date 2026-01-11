import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'default' | 'large';
}

export function Card({
  children,
  className = '',
  hover = true,
  padding = 'default',
}: CardProps) {
  const paddingStyles = {
    default: 'p-6',
    large: 'p-8',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -4, boxShadow: '0 4px 16px rgba(0,0,0,0.12)' } : undefined}
      className={`bg-white rounded-xl border border-gray-100 shadow-sm ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
