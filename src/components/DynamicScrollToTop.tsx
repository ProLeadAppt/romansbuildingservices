import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useBackgroundDetection } from '@/hooks/useBackgroundDetection';

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

  const getButtonClasses = () => {
    const baseClasses = "w-12 h-12 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center backdrop-blur-md border-2";
    
    // Light background detected → show dark button for contrast
    if (backgroundTheme === 'light') {
      return `${baseClasses} bg-gray-900/95 text-white border-gray-600/70 hover:bg-gray-800 hover:scale-110 shadow-gray-900/50`;
    } 
    // Dark background detected → show light button for contrast
    else {
      return `${baseClasses} bg-white/95 text-gray-900 border-gray-300/70 hover:bg-gray-50 hover:scale-110 shadow-black/30`;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          ref={buttonRef}
          onClick={scrollToTop}
          className={`fixed bottom-24 right-6 z-[60] ${getButtonClasses()}`}
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