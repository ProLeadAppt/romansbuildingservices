import { useState, useEffect } from 'react';

interface MobileDetectionResult {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  devicePixelRatio: number;
  screenSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  orientation: 'portrait' | 'landscape';
  isRetina: boolean;
  connectionSpeed: 'slow' | 'medium' | 'fast';
}

export const useMobileDetection = (): MobileDetectionResult => {
  const [detection, setDetection] = useState<MobileDetectionResult>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    devicePixelRatio: 1,
    screenSize: 'lg',
    orientation: 'landscape',
    isRetina: false,
    connectionSpeed: 'fast'
  });

  useEffect(() => {
    const updateDetection = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      
      // Screen size detection
      let screenSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'lg';
      if (width < 480) screenSize = 'xs';
      else if (width < 640) screenSize = 'sm';
      else if (width < 768) screenSize = 'md';
      else if (width < 1024) screenSize = 'lg';
      else if (width < 1280) screenSize = 'xl';
      else screenSize = '2xl';

      // Device type detection
      const isMobile = width <= 768;
      const isTablet = width > 768 && width <= 1024;
      const isDesktop = width > 1024;

      // Orientation
      const orientation = height > width ? 'portrait' : 'landscape';
      
      // Retina detection
      const isRetina = dpr >= 2;

      // Connection speed estimation (simplified)
      let connectionSpeed: 'slow' | 'medium' | 'fast' = 'fast';
      const connection = (navigator as any).connection;
      if (connection) {
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          connectionSpeed = 'slow';
        } else if (connection.effectiveType === '3g') {
          connectionSpeed = 'medium';
        }
      }

      setDetection({
        isMobile,
        isTablet,
        isDesktop,
        devicePixelRatio: dpr,
        screenSize,
        orientation,
        isRetina,
        connectionSpeed
      });
    };

    updateDetection();
    window.addEventListener('resize', updateDetection);
    window.addEventListener('orientationchange', updateDetection);

    return () => {
      window.removeEventListener('resize', updateDetection);
      window.removeEventListener('orientationchange', updateDetection);
    };
  }, []);

  return detection;
};