import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatItem {
  number: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

interface PremiumStatsCounterProps {
  stats: StatItem[];
  className?: string;
}

export const PremiumStatsCounter: React.FC<PremiumStatsCounterProps> = ({
  stats,
  className = ""
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const timers = stats.map((stat, index) => {
      const duration = 2000; // 2 seconds
      const startTime = Date.now();
      const startValue = 0;
      const endValue = stat.number;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOutCubic(progress);
        
        const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress);
        
        setAnimatedStats(prev => {
          const newStats = [...prev];
          newStats[index] = currentValue;
          return newStats;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      // Delay each counter slightly for staggered effect
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, index * 200);

      return null;
    });

    return () => {
      timers.forEach(timer => timer && clearTimeout(timer));
    };
  }, [isInView, stats]);

  return (
    <div ref={containerRef} className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="text-center group"
        >
          <motion.div
            className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${stat.color}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {stat.icon}
          </motion.div>
          
          <motion.div
            className="text-3xl md:text-4xl font-bold text-primary mb-2"
            initial={{ scale: 1 }}
            animate={isInView ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
          >
            {animatedStats[index].toLocaleString()}{stat.suffix}
          </motion.div>
          
          <div className="text-sm text-muted-foreground font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};