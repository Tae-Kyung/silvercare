import { useState, useEffect, useCallback } from 'react';

interface UseCarouselOptions {
  totalItems: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function useCarousel({
  totalItems,
  autoPlay = true,
  autoPlayInterval = 5000,
}: UseCarouselOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const pause = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const resume = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(next, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, next]);

  return {
    currentIndex,
    next,
    prev,
    goTo,
    pause,
    resume,
    isAutoPlaying,
  };
}
