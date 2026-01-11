import React from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
  isDecimal?: boolean;
  duration?: number;
  className?: string;
}

export function Counter({
  value,
  suffix = '',
  label,
  isDecimal = false,
  duration = 2000,
  className = '',
}: CounterProps) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 });
  const count = useCountUp({
    target: value,
    duration,
    isDecimal,
    isInView,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center ${className}`}
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#87CEEB] mb-2">
        {isDecimal ? count.toFixed(1) : count.toLocaleString()}
        <span className="text-4xl md:text-5xl">{suffix}</span>
      </div>
      <p className="text-lg text-[#7F8C8D]">{label}</p>
    </motion.div>
  );
}
