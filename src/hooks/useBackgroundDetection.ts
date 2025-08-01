import { useState, useEffect, useRef } from 'react';

export type BackgroundTheme = 'light' | 'dark';

interface UseBackgroundDetectionOptions {
  targetRef?: React.RefObject<HTMLElement>;
  debounceMs?: number;
  enabled?: boolean;
}

export const useBackgroundDetection = ({
  targetRef,
  debounceMs = 100,
  enabled = true
}: UseBackgroundDetectionOptions = {}) => {
  const [backgroundTheme, setBackgroundTheme] = useState<BackgroundTheme>('light');
  const debounceRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!enabled) return;

    const detectBackgroundTheme = () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(() => {
        const element = targetRef?.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Temporarily hide the target element to get what's truly behind it
        if (element) element.style.visibility = 'hidden';
        
        // Get element behind the target element
        const elementBehind = document.elementFromPoint(centerX, centerY);
        
        // Restore visibility
        if (element) element.style.visibility = 'visible';
        
        if (!elementBehind) return;

        let isDark = false;

        // Check the element behind and its parents for background
        const checkElement = (el: Element): boolean => {
          const computedStyle = window.getComputedStyle(el);
          const backgroundColor = computedStyle.backgroundColor;
          const backgroundImage = computedStyle.backgroundImage;

          // Check background image first (usually indicates darker content)
          if (backgroundImage && backgroundImage !== 'none') {
            return true; // Assume dark background for images
          }

          // Check background color
          if (backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'transparent') {
            // Handle both rgb and rgba formats
            const rgbMatch = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
            if (rgbMatch) {
              const [, r, g, b] = rgbMatch.map(Number);
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              return brightness < 128; // Consider dark if brightness < 128
            }
          }

          return false;
        };

        // Check the element behind and traverse up the DOM tree
        let currentElement = elementBehind;
        while (currentElement && currentElement !== document.body) {
          if (checkElement(currentElement)) {
            isDark = true;
            break;
          }
          currentElement = currentElement.parentElement;
        }

        // If no specific background found, check body and html
        if (!isDark && currentElement === document.body) {
          const bodyStyle = window.getComputedStyle(document.body);
          const htmlStyle = window.getComputedStyle(document.documentElement);
          
          isDark = checkElement(document.body) || checkElement(document.documentElement);
        }

        setBackgroundTheme(isDark ? 'dark' : 'light');
      }, debounceMs);
    };

    const handleScroll = () => {
      detectBackgroundTheme();
    };

    // Initial detection
    detectBackgroundTheme();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', detectBackgroundTheme, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', detectBackgroundTheme);
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [targetRef, debounceMs, enabled]);

  return backgroundTheme;
};