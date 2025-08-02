import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useBackgroundDetection } from '@/hooks/useBackgroundDetection';

// Modern floating scroll-to-top button with consistent white styling

export const DynamicScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const backgroundTheme = useBackgroundDetection({ 
    targetRef: buttonRef, 
    enabled: isVisible 
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show after 300px scroll, hide when near bottom (within 200px of footer)
      const showButton = scrollTop > 300 && scrollTop < documentHeight - windowHeight - 200;
      setIsVisible(showButton);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Dynamic styling based on background theme
  const isDark = backgroundTheme === 'dark';
  
  const buttonClass = `fixed bottom-24 right-6 z-30 w-12 h-12 rounded-full backdrop-blur-xl shadow-2xl flex items-center justify-center transition-all duration-300 ${
    isDark 
      ? 'bg-black/90 border border-white/20 text-white hover:bg-black hover:text-white hover:shadow-white/20' 
      : 'bg-white/95 border border-gray-200/50 text-gray-700 hover:bg-white hover:text-gray-900'
  }`;

  const buttonStyle = isDark 
    ? {
        background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(20,20,20,0.9) 100%)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      }
    : {
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.8)'
      };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          ref={buttonRef}
          onClick={scrollToTop}
          className={buttonClass}
          style={buttonStyle}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
            duration: 0.2 
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};