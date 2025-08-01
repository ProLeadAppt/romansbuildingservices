import React, { useState, useRef, useEffect } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  fallback?: React.ReactNode;
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '100px',
  fallback = null
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div ref={ref}>
      {isVisible ? children : fallback}
    </div>
  );
};