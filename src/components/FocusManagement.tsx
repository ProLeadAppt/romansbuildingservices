import React, { useEffect, useRef } from 'react';
import { useFocusManager } from '@/hooks/useFocusManager';

// Enhanced Skip Navigation with multiple targets
export const EnhancedSkipNavigation: React.FC = () => {
  const { createSkipLink } = useFocusManager();
  const skipContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!skipContainerRef.current) return;

    const skipLinks = [
      { target: '#main-content', label: 'Skip to main content' },
      { target: '#navigation', label: 'Skip to navigation' },
      { target: '#services', label: 'Skip to services' },
      { target: '#contact', label: 'Skip to contact' }
    ];

    // Clear existing skip links
    skipContainerRef.current.innerHTML = '';

    // Create and append skip links
    skipLinks.forEach(({ target, label }) => {
      const skipLink = createSkipLink(target, label);
      skipContainerRef.current?.appendChild(skipLink);
    });
  }, [createSkipLink]);

  return (
    <div 
      ref={skipContainerRef}
      className="skip-navigation"
      aria-label="Skip navigation links"
    />
  );
};

// Focus announcement component for dynamic content
interface FocusAnnouncementProps {
  message: string;
  priority?: 'polite' | 'assertive';
  id?: string;
}

export const FocusAnnouncement: React.FC<FocusAnnouncementProps> = ({ 
  message, 
  priority = 'polite',
  id 
}) => {
  return (
    <div
      id={id}
      aria-live={priority}
      aria-atomic="true"
      className="sr-only"
      role={priority === 'assertive' ? 'alert' : 'status'}
    >
      {message}
    </div>
  );
};

// Live region for dynamic content announcements
export const LiveRegion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="false"
      className="sr-only"
      role="status"
    >
      {children}
    </div>
  );
};

// Component to manage focus on route changes
interface RouteChangeFocusManagerProps {
  routeName?: string;
  focusTarget?: string;
}

export const RouteChangeFocusManager: React.FC<RouteChangeFocusManagerProps> = ({ 
  routeName,
  focusTarget = 'h1, [role="main"], #main-content'
}) => {
  const { focusElement, announceToScreenReader } = useFocusManager();

  useEffect(() => {
    // Focus the main heading or content area when route changes
    const timer = setTimeout(() => {
      const success = focusElement(focusTarget);
      
      if (routeName && success) {
        announceToScreenReader(`Navigated to ${routeName}`, 'polite');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [routeName, focusTarget, focusElement, announceToScreenReader]);

  return null;
};

// Enhanced Modal with comprehensive focus management
interface FocusManagedModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  initialFocus?: string;
  returnFocus?: boolean;
  className?: string;
}

export const FocusManagedModal: React.FC<FocusManagedModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  initialFocus,
  returnFocus = true,
  className = ''
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { storeFocus, returnFocus: restoreFocus, focusElement, announceToScreenReader } = useFocusManager();

  // Handle focus when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      // Store current focus before opening modal
      storeFocus();
      
      // Focus the modal or specific element
      setTimeout(() => {
        if (initialFocus) {
          focusElement(initialFocus);
        } else if (modalRef.current) {
          // Focus the first focusable element in modal
          const firstFocusable = modalRef.current.querySelector(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          ) as HTMLElement;
          
          if (firstFocusable) {
            firstFocusable.focus();
          } else {
            modalRef.current.focus();
          }
        }
        
        announceToScreenReader(`${title} dialog opened`, 'assertive');
      }, 100);
    } else if (returnFocus) {
      // Return focus when modal closes
      restoreFocus();
      announceToScreenReader(`${title} dialog closed`, 'polite');
    }
  }, [isOpen, storeFocus, restoreFocus, focusElement, announceToScreenReader, title, initialFocus, returnFocus]);

  // Handle keyboard events
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }

      if (event.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div
        ref={modalRef}
        className={`relative bg-background rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto ${className}`}
        tabIndex={-1}
      >
        <div className="p-6">
          <h2 id="modal-title" className="text-xl font-semibold mb-4">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
};

// Component to manage focus on content updates
interface ContentUpdateFocusManagerProps {
  trigger: any; // Any value that changes when content updates
  focusTarget?: string;
  announcement?: string;
  children: React.ReactNode;
}

export const ContentUpdateFocusManager: React.FC<ContentUpdateFocusManagerProps> = ({
  trigger,
  focusTarget,
  announcement,
  children
}) => {
  const { handleContentUpdate } = useFocusManager();
  const prevTriggerRef = useRef(trigger);

  useEffect(() => {
    if (prevTriggerRef.current !== trigger) {
      handleContentUpdate('body', focusTarget, announcement);
      prevTriggerRef.current = trigger;
    }
  }, [trigger, focusTarget, announcement, handleContentUpdate]);

  return <>{children}</>;
};