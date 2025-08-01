import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AccessibleCarouselProps {
  items: Array<{
    id: string;
    content: React.ReactNode;
    title?: string;
    description?: string;
  }>;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  allowKeyboardNavigation?: boolean;
  className?: string;
  ariaLabel?: string;
  reducedMotion?: boolean;
}

export const AccessibleCarousel: React.FC<AccessibleCarouselProps> = ({
  items,
  autoPlay = false,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  allowKeyboardNavigation = true,
  className,
  ariaLabel = "Content carousel",
  reducedMotion = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Pause autoplay when user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const shouldAutoPlay = isPlaying && !prefersReducedMotion && !hasUserInteracted;

  // Auto-play functionality with accessibility considerations
  useEffect(() => {
    if (shouldAutoPlay && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, autoPlayInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [shouldAutoPlay, items.length, autoPlayInterval]);

  // Navigation functions with announcements
  const goToSlide = useCallback((index: number, announceChange = true) => {
    setCurrentIndex(index);
    setHasUserInteracted(true);
    
    if (announceChange) {
      // Announce slide change to screen readers
      const announcement = `Showing slide ${index + 1} of ${items.length}`;
      const currentItem = items[index];
      const fullAnnouncement = currentItem.title 
        ? `${announcement}: ${currentItem.title}`
        : announcement;
      
      // Create temporary element for screen reader announcement
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.textContent = fullAnnouncement;
      document.body.appendChild(announcer);
      
      setTimeout(() => {
        document.body.removeChild(announcer);
      }, 1000);
    }
  }, [items]);

  const nextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % items.length;
    goToSlide(nextIndex);
  }, [currentIndex, items.length, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    goToSlide(prevIndex);
  }, [currentIndex, items.length, goToSlide]);

  // Keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (!allowKeyboardNavigation) return;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        prevSlide();
        break;
      case 'ArrowRight':
        event.preventDefault();
        nextSlide();
        break;
      case 'Home':
        event.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        event.preventDefault();
        goToSlide(items.length - 1);
        break;
      case ' ':
      case 'Enter':
        if (event.target === carouselRef.current) {
          event.preventDefault();
          togglePlayPause();
        }
        break;
      case 'Escape':
        event.preventDefault();
        setIsPlaying(false);
        carouselRef.current?.blur();
        break;
    }
  }, [allowKeyboardNavigation, prevSlide, nextSlide, goToSlide, items.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    setHasUserInteracted(true);
  };

  // Skip to content functionality for screen readers
  const skipToContent = () => {
    const currentItem = itemRefs.current[currentIndex];
    if (currentItem) {
      currentItem.focus();
    }
  };

  if (items.length === 0) {
    return <div role="alert">No content available in carousel</div>;
  }

  return (
    <div className={cn("relative", className)}>
      {/* Skip to content link for screen readers */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute -top-10 left-0 z-50 opacity-0 focus:opacity-100 focus:top-0 transition-all sr-only focus:not-sr-only"
        onClick={skipToContent}
      >
        <SkipForward className="w-4 h-4 mr-2" />
        Skip to current slide content
      </Button>

      {/* Main carousel container */}
      <div
        ref={carouselRef}
        role="region"
        aria-label={ariaLabel}
        aria-describedby="carousel-instructions"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="relative overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        onMouseEnter={() => setHasUserInteracted(true)}
      >
        {/* Carousel content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              ref={(el) => (itemRefs.current[currentIndex] = el)}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 50 }}
              animate={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: reducedMotion ? 0.2 : 0.5 }}
              tabIndex={-1}
              aria-label={`Slide ${currentIndex + 1} of ${items.length}${items[currentIndex].title ? `: ${items[currentIndex].title}` : ''}`}
            >
              {items[currentIndex].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        {showControls && items.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10"
              onClick={prevSlide}
              aria-label={`Go to previous slide. Currently showing slide ${currentIndex + 1} of ${items.length}`}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10"
              onClick={nextSlide}
              aria-label={`Go to next slide. Currently showing slide ${currentIndex + 1} of ${items.length}`}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </>
        )}

        {/* Play/Pause button for autoplay */}
        {autoPlay && (
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-lg z-10"
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
        )}
      </div>

      {/* Slide indicators */}
      {showIndicators && items.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2" role="tablist" aria-label="Slide navigation">
          {items.map((item, index) => (
            <Button
              key={item.id}
              variant={index === currentIndex ? "default" : "outline"}
              size="sm"
              className={cn(
                "w-3 h-3 p-0 rounded-full transition-all",
                index === currentIndex && "scale-125"
              )}
              onClick={() => goToSlide(index)}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to slide ${index + 1}${item.title ? `: ${item.title}` : ''}`}
            />
          ))}
        </div>
      )}

      {/* Instructions for screen readers */}
      <div id="carousel-instructions" className="sr-only">
        Use arrow keys to navigate between slides, Home and End to go to first and last slides, 
        Space or Enter to toggle autoplay, and Escape to stop autoplay and remove focus.
      </div>

      {/* Current slide info for screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Slide {currentIndex + 1} of {items.length}
        {items[currentIndex].title && `: ${items[currentIndex].title}`}
        {isPlaying && ', Slideshow playing'}
      </div>
    </div>
  );
};