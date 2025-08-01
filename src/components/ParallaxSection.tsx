import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  backgroundImage,
  children,
  className = "",
  speed = 0.5
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
      </motion.div>
      
      <motion.div className="relative z-10" style={{ opacity }}>
        {children}
      </motion.div>
    </div>
  );
};