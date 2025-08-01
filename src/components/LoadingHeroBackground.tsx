import React, { useState, useEffect } from 'react';
import { LoadingSpinner } from '@/components/LoadingSpinner';

interface LoadingHeroBackgroundProps {
  imageUrl: string;
  className?: string;
  fallbackColor?: string;
  children?: React.ReactNode;
}

export const LoadingHeroBackground: React.FC<LoadingHeroBackgroundProps> = ({
  imageUrl,
  className = '',
  fallbackColor = 'bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20',
  children
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = imageUrl;
  }, [imageUrl]);

  return (
    <div className={`relative ${className}`}>
      {/* Fallback background while loading */}
      {!imageLoaded && !imageError && (
        <div className={`absolute inset-0 ${fallbackColor}`}>
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <LoadingSpinner />
          </div>
        </div>
      )}
      
      {/* Error fallback */}
      {imageError && (
        <div className={`absolute inset-0 ${fallbackColor}`} />
      )}
      
      {/* Main background image */}
      {imageLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      
      {children}
    </div>
  );
};