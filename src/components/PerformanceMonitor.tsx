import { useEffect } from 'react';

export const PerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor First Contentful Paint
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            console.log(`FCP: ${entry.startTime}ms`);
          }
          if (entry.name === 'largest-contentful-paint') {
            console.log(`LCP: ${entry.startTime}ms`);
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
      } catch (e) {
        // Fallback for browsers that don't support these metrics
        console.log('Performance monitoring not supported');
      }

      // Monitor layout shifts
      const clsObserver = new PerformanceObserver((list) => {
        let cls = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            cls += entry.value;
          }
        });
        if (cls > 0) {
          console.log(`CLS: ${cls}`);
        }
      });

      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.log('Layout shift monitoring not supported');
      }

      return () => {
        observer.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return null;
};