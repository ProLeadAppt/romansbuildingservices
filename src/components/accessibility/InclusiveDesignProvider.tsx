import React, { createContext, useContext, useState, useEffect } from 'react';

interface InclusiveDesignPreferences {
  reduceMotion: boolean;
  highContrast: boolean;
  largeFonts: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusVisible: boolean;
  autoplayPaused: boolean;
  forcedColors: boolean;
}

interface InclusiveDesignContextType {
  preferences: InclusiveDesignPreferences;
  updatePreference: (key: keyof InclusiveDesignPreferences, value: boolean) => void;
  resetPreferences: () => void;
}

const defaultPreferences: InclusiveDesignPreferences = {
  reduceMotion: false,
  highContrast: false,
  largeFonts: false,
  screenReader: false,
  keyboardNavigation: false,
  focusVisible: true,
  autoplayPaused: false,
  forcedColors: false
};

const InclusiveDesignContext = createContext<InclusiveDesignContextType | null>(null);

export const useInclusiveDesign = () => {
  const context = useContext(InclusiveDesignContext);
  if (!context) {
    throw new Error('useInclusiveDesign must be used within an InclusiveDesignProvider');
  }
  return context;
};

interface InclusiveDesignProviderProps {
  children: React.ReactNode;
}

export const InclusiveDesignProvider: React.FC<InclusiveDesignProviderProps> = ({ children }) => {
  const [preferences, setPreferences] = useState<InclusiveDesignPreferences>(defaultPreferences);

  // Detect user preferences from system settings
  useEffect(() => {
    const detectSystemPreferences = () => {
      const updates: Partial<InclusiveDesignPreferences> = {};

      // Detect reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        updates.reduceMotion = true;
        updates.autoplayPaused = true;
      }

      // Detect high contrast preference
      if (window.matchMedia('(prefers-contrast: high)').matches) {
        updates.highContrast = true;
      }

      // Detect forced colors (Windows High Contrast Mode)
      if (window.matchMedia('(forced-colors: active)').matches) {
        updates.forcedColors = true;
        updates.highContrast = true;
      }

      // Detect screen reader usage (heuristic)
      if (navigator.userAgent.includes('NVDA') || 
          navigator.userAgent.includes('JAWS') || 
          navigator.userAgent.includes('VoiceOver')) {
        updates.screenReader = true;
      }

      // Detect keyboard navigation preference
      const hasKeyboardInteraction = () => {
        updates.keyboardNavigation = true;
        document.removeEventListener('keydown', hasKeyboardInteraction);
      };
      document.addEventListener('keydown', hasKeyboardInteraction);

      // Update preferences if any system preferences detected
      if (Object.keys(updates).length > 0) {
        setPreferences(prev => ({ ...prev, ...updates }));
      }
    };

    detectSystemPreferences();

    // Listen for changes in system preferences
    const mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-contrast: high)'),
      window.matchMedia('(forced-colors: active)')
    ];

    const handleMediaQueryChange = () => {
      detectSystemPreferences();
    };

    mediaQueries.forEach(mq => {
      mq.addEventListener('change', handleMediaQueryChange);
    });

    return () => {
      mediaQueries.forEach(mq => {
        mq.removeEventListener('change', handleMediaQueryChange);
      });
    };
  }, []);

  // Apply CSS custom properties based on preferences
  useEffect(() => {
    const root = document.documentElement;

    // Reduced motion
    root.style.setProperty(
      '--motion-duration', 
      preferences.reduceMotion ? '0.01ms' : '300ms'
    );

    // High contrast
    if (preferences.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Large fonts
    if (preferences.largeFonts) {
      root.style.setProperty('--font-size-multiplier', '1.25');
      root.classList.add('large-fonts');
    } else {
      root.style.setProperty('--font-size-multiplier', '1');
      root.classList.remove('large-fonts');
    }

    // Focus visible
    if (preferences.focusVisible) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

    // Keyboard navigation
    if (preferences.keyboardNavigation) {
      root.classList.add('keyboard-navigation');
    } else {
      root.classList.remove('keyboard-navigation');
    }

    // Screen reader optimizations
    if (preferences.screenReader) {
      root.classList.add('screen-reader');
    } else {
      root.classList.remove('screen-reader');
    }

  }, [preferences]);

  // Save preferences to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('inclusive-design-preferences', JSON.stringify(preferences));
    } catch (error) {
      console.warn('Could not save preferences to localStorage:', error);
    }
  }, [preferences]);

  // Load preferences from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('inclusive-design-preferences');
      if (saved) {
        const savedPreferences = JSON.parse(saved);
        setPreferences(prev => ({ ...prev, ...savedPreferences }));
      }
    } catch (error) {
      console.warn('Could not load preferences from localStorage:', error);
    }
  }, []);

  const updatePreference = (key: keyof InclusiveDesignPreferences, value: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
    localStorage.removeItem('inclusive-design-preferences');
  };

  return (
    <InclusiveDesignContext.Provider value={{
      preferences,
      updatePreference,
      resetPreferences
    }}>
      {children}
    </InclusiveDesignContext.Provider>
  );
};