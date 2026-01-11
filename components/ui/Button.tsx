import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  onClick,
  className = '',
  href,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-[#87CEEB] text-white hover:bg-[#5BB5D8] focus:ring-[#87CEEB]',
    secondary: 'bg-white text-[#87CEEB] border-2 border-[#87CEEB] hover:bg-[#87CEEB]/10 focus:ring-[#87CEEB]',
  };

  const sizes = {
    default: 'px-6 py-3 text-base',
    large: 'px-12 py-4 text-lg min-h-[56px]',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedStyles}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
