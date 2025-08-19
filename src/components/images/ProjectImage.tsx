import React from 'react';
import { UniversalImage } from './UniversalImage';
import { cn } from '@/lib/utils';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  title?: string;
  description?: string;
  location?: string;
  date?: string;
  category?: 'masonry' | 'restoration' | 'structural' | 'heritage' | 'concrete' | 'general';
  beforeAfter?: 'before' | 'after';
  onClick?: () => void;
  priority?: boolean;
}

const categoryLabels = {
  masonry: 'Masonry Work',
  restoration: 'Restoration',
  structural: 'Structural Repair',
  heritage: 'Heritage Work',
  concrete: 'Concrete Work',
  general: 'Building Work'
};

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  className,
  title,
  description,
  location,
  date,
  category = 'general',
  beforeAfter,
  onClick,
  priority = false
}) => {
  // Generate SEO-optimized alt text
  const optimizedAlt = alt || `${categoryLabels[category]} ${beforeAfter ? `${beforeAfter} photo` : ''} by Roman's Building Services${location ? ` in ${location}` : ''}`;

  return (
    <div className={cn('group relative cursor-pointer', className)} onClick={onClick}>
      <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <UniversalImage
          src={src}
          alt={optimizedAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          priority={priority}
          aspectRatio="4/3"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        
        {/* Category badge */}
        {category && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded shadow-lg">
              {categoryLabels[category]}
            </span>
          </div>
        )}
        
        {/* Before/After badge */}
        {beforeAfter && (
          <div className="absolute top-3 right-3 z-10">
            <span className={cn(
              "px-2 py-1 text-xs font-semibold rounded shadow-lg",
              beforeAfter === 'before' 
                ? "bg-orange-500 text-white" 
                : "bg-green-500 text-white"
            )}>
              {beforeAfter === 'before' ? 'Before' : 'After'}
            </span>
          </div>
        )}
        
        {/* Overlay with details */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            {title && (
              <h3 className="font-semibold text-sm mb-1 line-clamp-2">{title}</h3>
            )}
            {description && (
              <p className="text-xs opacity-90 line-clamp-2 mb-2">{description}</p>
            )}
            <div className="flex items-center justify-between text-xs opacity-75">
              {location && (
                <span className="flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {location}
                </span>
              )}
              {date && (
                <span className="flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {date}
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* View icon on hover */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};