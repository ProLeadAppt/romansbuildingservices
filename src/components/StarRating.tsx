import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  onRatingSelect: (rating: number) => void;
  businessName?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({ 
  onRatingSelect, 
  businessName = "Romans Building Services" 
}) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);

  const handleStarClick = (rating: number) => {
    setSelectedStar(rating);
    setTimeout(() => {
      onRatingSelect(rating);
    }, 300);
  };

  const handleStarHover = (rating: number) => {
    setHoveredStar(rating);
  };

  const handleStarLeave = () => {
    setHoveredStar(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <div className="w-full max-w-md mx-auto text-center space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            How was your experience with {businessName}?
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Tap a star below to rate us.
          </p>
        </div>

        {/* Star Rating */}
        <div className="flex justify-center gap-2 md:gap-4 py-8">
          {[1, 2, 3, 4, 5].map((rating) => {
            const isActive = hoveredStar 
              ? rating <= hoveredStar 
              : selectedStar 
              ? rating <= selectedStar 
              : false;

            return (
              <button
                key={rating}
                className={cn(
                  "p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95",
                  "focus:outline-none focus:ring-2 focus:ring-primary/20",
                  "touch-manipulation", // Better mobile touch
                  selectedStar === rating && "animate-pulse"
                )}
                onClick={() => handleStarClick(rating)}
                onMouseEnter={() => handleStarHover(rating)}
                onMouseLeave={handleStarLeave}
                onFocus={() => handleStarHover(rating)}
                onBlur={handleStarLeave}
                aria-label={`Rate ${rating} star${rating !== 1 ? 's' : ''}`}
              >
                <Star
                  size={48}
                  className={cn(
                    "transition-all duration-200",
                    "md:w-12 md:h-12 w-10 h-10", // Responsive sizing
                    isActive
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-muted-foreground hover:text-yellow-300"
                  )}
                />
              </button>
            );
          })}
        </div>

        {/* Progress indicator */}
        {selectedStar && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
          </div>
        )}
      </div>
    </div>
  );
};