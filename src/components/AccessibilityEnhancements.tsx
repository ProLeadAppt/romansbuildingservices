import React, { useEffect, useRef } from 'react';

// Skip Navigation Component
export const SkipNavigation = () => {
  return (
    <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50">
      <a
        href="#main-content"
        className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to main content
      </a>
    </div>
  );
};

// Enhanced Focus Trap Hook
export const useFocusTrap = (isActive: boolean) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    const container = containerRef.current;
    if (!container) return;

    // Store the previously focused element
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Get all focusable elements
    const getFocusableElements = () => {
      return container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]'
      ) as NodeListOf<HTMLElement>;
    };

    const focusableElements = getFocusableElements();
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus the first element
    if (firstElement) {
      firstElement.focus();
    }

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Allow parent components to handle escape
        e.stopPropagation();
      }
    };

    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('keydown', handleEscapeKey);
      
      // Restore focus to the previously focused element
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [isActive]);

  return containerRef;
};

// Enhanced Star Rating with Keyboard Support
interface AccessibleStarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  label?: string;
}

export const AccessibleStarRating: React.FC<AccessibleStarRatingProps> = ({
  rating,
  onRatingChange,
  maxRating = 5,
  size = 'md',
  disabled = false,
  label = "Rate your experience"
}) => {
  const [hoveredRating, setHoveredRating] = React.useState(0);
  const [focusedRating, setFocusedRating] = React.useState(0);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const handleKeyDown = (e: React.KeyboardEvent, starRating: number) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        onRatingChange(starRating);
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        e.preventDefault();
        setFocusedRating(Math.min(starRating + 1, maxRating));
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        e.preventDefault();
        setFocusedRating(Math.max(starRating - 1, 1));
        break;
      case 'Home':
        e.preventDefault();
        setFocusedRating(1);
        break;
      case 'End':
        e.preventDefault();
        setFocusedRating(maxRating);
        break;
    }
  };

  return (
    <div
      role="radiogroup"
      aria-labelledby="star-rating-label"
      className="flex items-center space-x-1"
    >
      <span id="star-rating-label" className="sr-only">
        {label}
      </span>
      {Array.from({ length: maxRating }, (_, index) => {
        const starRating = index + 1;
        const isActive = starRating <= (hoveredRating || focusedRating || rating);
        
        return (
          <button
            key={starRating}
            role="radio"
            tabIndex={starRating === (focusedRating || 1) ? 0 : -1}
            aria-checked={starRating === rating}
            aria-label={`${starRating} star${starRating !== 1 ? 's' : ''}`}
            disabled={disabled}
            className={`
              ${sizeClasses[size]} 
              transition-all duration-200 
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 cursor-pointer'}
              ${isActive ? 'text-yellow-400' : 'text-gray-300'}
            `}
            onMouseEnter={() => !disabled && setHoveredRating(starRating)}
            onMouseLeave={() => !disabled && setHoveredRating(0)}
            onFocus={() => setFocusedRating(starRating)}
            onBlur={() => setFocusedRating(0)}
            onKeyDown={(e) => handleKeyDown(e, starRating)}
            onClick={() => !disabled && onRatingChange(starRating)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isActive ? 'currentColor' : 'none'}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </button>
        );
      })}
      <span className="ml-2 text-sm text-muted-foreground">
        {rating > 0 ? `${rating}/${maxRating}` : 'Not rated'}
      </span>
    </div>
  );
};

// Accessible Modal Component
interface AccessibleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const AccessibleModal: React.FC<AccessibleModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = ""
}) => {
  const focusTrapRef = useFocusTrap(isOpen);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Content */}
      <div
        ref={focusTrapRef}
        className={`relative bg-background border rounded-lg shadow-lg max-w-md w-full mx-4 p-6 ${className}`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 id="modal-title" className="text-xl font-semibold">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};