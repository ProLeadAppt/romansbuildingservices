import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
const romansLogo = '/lovable-uploads/021212_ced9a2de6c6e43478213886e0d066486~mv2_d_3024_4032_s_4_2.jpg';

export const PremiumLoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 10 + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] bg-gradient-to-br from-primary via-primary/90 to-secondary flex items-center justify-center"
      >
        <div className="text-center space-y-8 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-32 h-32 mx-auto mb-6">
              <img
                src={romansLogo}
                alt="Romans Building Services"
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
            </div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-transparent border-t-white/30 rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Romans Building Services
            </h1>
            <p className="text-white/80 text-lg">
              Loading premium experience...
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-full max-w-md mx-auto space-y-2"
          >
            <Progress 
              value={progress} 
              className="h-2 bg-white/20" 
            />
            <p className="text-white/60 text-sm">
              {Math.round(progress)}% Complete
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center space-x-6 text-white/60 text-sm"
          >
            <span>✓ 25+ Years Experience</span>
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Star Rated</span>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};