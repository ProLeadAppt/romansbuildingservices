import { useRef, useCallback, useEffect } from 'react';

interface FocusManagerOptions {
  returnFocus?: boolean;
  preventScroll?: boolean;
  selectTextOnFocus?: boolean;
}

export const useFocusManager = () => {
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const skipLinkRef = useRef<HTMLAnchorElement | null>(null);

  // Store the currently focused element before opening modals/dialogs
  const storeFocus = useCallback(() => {
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement && activeElement !== document.body) {
      previouslyFocusedElementRef.current = activeElement;
    }
  }, []);

  // Return focus to previously focused element
  const returnFocus = useCallback((options: FocusManagerOptions = {}) => {
    const element = previouslyFocusedElementRef.current;
    if (element && element.isConnected) {
      try {
        element.focus({
          preventScroll: options.preventScroll || false
        });
        
        // Select text if it's an input element and option is enabled
        if (options.selectTextOnFocus && 
            (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)) {
          element.select();
        }
      } catch (error) {
        console.warn('Failed to return focus:', error);
        // Fallback to body if focus restoration fails
        document.body.focus();
      }
    }
    previouslyFocusedElementRef.current = null;
  }, []);

  // Focus first focusable element in container
  const focusFirst = useCallback((container: HTMLElement, options: FocusManagerOptions = {}) => {
    const focusableElements = getFocusableElements(container);
    if (focusableElements.length > 0) {
      focusableElements[0].focus({
        preventScroll: options.preventScroll || false
      });
      return true;
    }
    return false;
  }, []);

  // Focus last focusable element in container
  const focusLast = useCallback((container: HTMLElement, options: FocusManagerOptions = {}) => {
    const focusableElements = getFocusableElements(container);
    if (focusableElements.length > 0) {
      focusableElements[focusableElements.length - 1].focus({
        preventScroll: options.preventScroll || false
      });
      return true;
    }
    return false;
  }, []);

  // Focus element by selector or element reference
  const focusElement = useCallback((
    target: string | HTMLElement | null, 
    options: FocusManagerOptions = {}
  ) => {
    let element: HTMLElement | null = null;
    
    if (typeof target === 'string') {
      element = document.querySelector(target) as HTMLElement;
    } else {
      element = target;
    }

    if (element && element.isConnected) {
      try {
        element.focus({
          preventScroll: options.preventScroll || false
        });
        
        // Scroll element into view if not preventing scroll
        if (!options.preventScroll) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest',
            inline: 'nearest'
          });
        }
        
        return true;
      } catch (error) {
        console.warn('Failed to focus element:', error);
        return false;
      }
    }
    return false;
  }, []);

  // Announce content changes to screen readers
  const announceToScreenReader = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

  // Handle dynamic content updates with focus management
  const handleContentUpdate = useCallback((
    containerSelector: string,
    focusTarget?: string,
    announcement?: string
  ) => {
    // Wait for content to be rendered
    setTimeout(() => {
      if (focusTarget) {
        focusElement(focusTarget);
      }
      
      if (announcement) {
        announceToScreenReader(announcement);
      }
    }, 100);
  }, [focusElement, announceToScreenReader]);

  // Create and manage skip links
  const createSkipLink = useCallback((targetSelector: string, label: string) => {
    const skipLink = document.createElement('a');
    skipLink.href = `#${targetSelector.replace('#', '')}`;
    skipLink.textContent = label;
    skipLink.className = 'skip-link';
    skipLink.setAttribute('tabindex', '0');
    
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(targetSelector) as HTMLElement;
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Remove tabindex after focus
        target.addEventListener('blur', () => {
          target.removeAttribute('tabindex');
        }, { once: true });
      }
    });
    
    return skipLink;
  }, []);

  return {
    storeFocus,
    returnFocus,
    focusFirst,
    focusLast,
    focusElement,
    announceToScreenReader,
    handleContentUpdate,
    createSkipLink,
    previouslyFocusedElement: previouslyFocusedElementRef.current
  };
};

// Utility function to get all focusable elements
const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]',
    'audio[controls]',
    'video[controls]',
    'details > summary',
    'iframe'
  ].join(', ');

  const elements = Array.from(container.querySelectorAll(focusableSelectors)) as HTMLElement[];
  
  return elements.filter(element => {
    return (
      element.offsetWidth > 0 ||
      element.offsetHeight > 0 ||
      element.getClientRects().length > 0
    );
  });
};

// Hook for managing focus within a specific container (enhanced version)
export const useContainerFocus = (containerRef: React.RefObject<HTMLElement>) => {
  const focusManager = useFocusManager();

  const trapFocus = useCallback((event: KeyboardEvent) => {
    if (!containerRef.current || event.key !== 'Tab') return;

    const focusableElements = getFocusableElements(containerRef.current);
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement as HTMLElement;

    if (event.shiftKey) {
      // Shift + Tab
      if (activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab
      if (activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }, [containerRef]);

  const initializeFocus = useCallback(() => {
    if (containerRef.current) {
      focusManager.focusFirst(containerRef.current);
    }
  }, [containerRef, focusManager]);

  return {
    trapFocus,
    initializeFocus,
    ...focusManager
  };
};