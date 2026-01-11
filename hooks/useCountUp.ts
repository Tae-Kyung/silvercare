import { useEffect, useState } from 'react';

interface UseCountUpOptions {
  target: number;
  duration?: number;
  isDecimal?: boolean;
  startOnView?: boolean;
  isInView?: boolean;
}

export function useCountUp({
  target,
  duration = 2000,
  isDecimal = false,
  startOnView = true,
  isInView = false,
}: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (startOnView && !isInView) return;
    if (hasStarted) return;

    setHasStarted(true);
    const startTime = performance.now();
    const step = isDecimal ? 0.1 : 1;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = easeOutQuart * target;

      if (isDecimal) {
        setCount(Math.round(currentValue * 10) / 10);
      } else {
        setCount(Math.floor(currentValue));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, isDecimal, startOnView, isInView, hasStarted]);

  return count;
}
