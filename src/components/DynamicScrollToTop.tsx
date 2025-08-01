import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export const DynamicScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [backgroundTheme, setBackgroundTheme] = useState<'light' | 'dark'>('light');
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show after 300px scroll, hide when near bottom (within 200px of footer)
      const showButton = scrollTop > 300 && scrollTop < documentHeight - windowHeight - 200;
      setIsVisible(showButton);

      // Detect background color for contrast
      if (buttonRef.current && showButton) {
        detectBackgroundTheme();
      }
    };

    const detectBackgroundTheme = () => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Get element behind the button
      const elementBehind = document.elementFromPoint(centerX, centerY);
      if (!elementBehind) return;

      const computedStyle = window.getComputedStyle(elementBehind);
      const backgroundColor = computedStyle.backgroundColor;
      const backgroundImage = computedStyle.backgroundImage;

      // Simple heuristic: if background is dark or has dark image, use light theme
      let isDark = false;
      
      if (backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)') {
        // Parse RGB values
        const rgbMatch = backgroundColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (rgbMatch) {
          const [, r, g, b] = rgbMatch.map(Number);
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          isDark = brightness < 128;
        }
      } else if (backgroundImage && backgroundImage !== 'none') {
        // For images, assume darker theme is needed
        isDark = true;
      } else {
        // Check parent elements
        let parent = elementBehind.parentElement;
        while (parent && parent !== document.body) {
          const parentStyle = window.getComputedStyle(parent);
          const parentBg = parentStyle.backgroundColor;
          if (parentBg && parentBg !== 'rgba(0, 0, 0, 0)') {
            const rgbMatch = parentBg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
            if (rgbMatch) {
              const [, r, g, b] = rgbMatch.map(Number);
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              isDark = brightness < 128;
              break;
            }
          }
          parent = parent.parentElement;
        }
      }

      setBackgroundTheme(isDark ? 'light' : 'dark');
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
    const baseClasses = "w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm border";
    
    if (backgroundTheme === 'light') {
      return `${baseClasses} bg-gray-900/90 text-white border-gray-700/50 hover:bg-gray-800 shadow-xl`;
    } else {
      return `${baseClasses} bg-white/90 text-gray-900 border-gray-200/50 hover:bg-gray-50 shadow-xl`;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          ref={buttonRef}
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-40 ${getButtonClasses()}`}
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