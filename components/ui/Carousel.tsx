import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarousel } from '../../hooks/useCarousel';

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
}

export function Carousel({
  children,
  autoPlay = true,
  autoPlayInterval = 5000,
  showArrows = true,
  showDots = true,
  className = '',
}: CarouselProps) {
  const { currentIndex, next, prev, goTo, pause, resume } = useCarousel({
    totalItems: children.length,
    autoPlay,
    autoPlayInterval,
  });

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {showArrows && children.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#87CEEB]"
            aria-label="이전"
          >
            <ChevronLeft className="w-6 h-6 text-[#2C3E50]" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#87CEEB]"
            aria-label="다음"
          >
            <ChevronRight className="w-6 h-6 text-[#2C3E50]" />
          </button>
        </>
      )}

      {showDots && children.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#87CEEB] ${
                index === currentIndex ? 'bg-[#87CEEB]' : 'bg-gray-300'
              }`}
              aria-label={`슬라이드 ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
