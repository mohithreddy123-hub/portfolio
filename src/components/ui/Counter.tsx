import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  value: number;
  duration?: number; // duration in ms
  decimals?: number;
}

export default function Counter({ value, duration = 1500, decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    const endValue = value;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing out quadratic progress
      const easeProgress = progress * (2 - progress);
      const currentValue = easeProgress * endValue;
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animateCount);
  }, [value, duration, isInView]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
    </span>
  );
}
