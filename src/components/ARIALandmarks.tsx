import React, { useEffect } from 'react';

// ARIA Landmark Regions Manager
interface LandmarkRegion {
  role: string;
  label?: string;
  element: HTMLElement;
}

export const ARIALandmarkAuditor = () => {
  useEffect(() => {
    const auditLandmarks = () => {
      const landmarks: LandmarkRegion[] = [];
      
      // Find all landmark elements
      const landmarkSelectors = [
        'header, [role="banner"]',
        'nav, [role="navigation"]', 
        'main, [role="main"]',
        'aside, [role="complementary"]',
        'footer, [role="contentinfo"]',
        '[role="search"]',
        '[role="region"][aria-labelledby], [role="region"][aria-label]'
      ];

      landmarkSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          const role = element.getAttribute('role') || element.tagName.toLowerCase();
          const label = element.getAttribute('aria-label') || 
                       element.getAttribute('aria-labelledby') ||
                       element.querySelector('h1, h2, h3')?.textContent;
          
          landmarks.push({
            role: role === 'header' ? 'banner' : 
                  role === 'footer' ? 'contentinfo' :
                  role === 'nav' ? 'navigation' : role,
            label,
            element: element as HTMLElement
          });
        });
      });

      // Log audit results for debugging
      console.log('ARIA Landmarks Audit:', landmarks);
      
      // Announce landmarks to screen readers
      const landmarkCount = landmarks.length;
      const announcement = `Page structure loaded with ${landmarkCount} landmark regions: ${
        landmarks.map(l => `${l.role}${l.label ? ` (${l.label})` : ''}`).join(', ')
      }`;
      
      // Create announcement
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.textContent = announcement;
      document.body.appendChild(announcer);
      
      // Remove announcement after it's read
      setTimeout(() => {
        document.body.removeChild(announcer);
      }, 3000);
    };

    // Run audit after page loads
    const timer = setTimeout(auditLandmarks, 100);
    return () => clearTimeout(timer);
  }, []);

  return null;
};

// Page Structure Component
export const PageStructureManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ARIALandmarkAuditor />
      {children}
    </>
  );
};

// Enhanced Skip Navigation with landmark targeting
export const LandmarkSkipNavigation: React.FC = () => {
  const skipLinks = [
    { target: '#main-content', label: 'Skip to main content', hotkey: 'M' },
    { target: '#navigation', label: 'Skip to navigation', hotkey: 'N' },
    { target: '#services', label: 'Skip to services', hotkey: 'S' },
    { target: '#contact', label: 'Skip to contact', hotkey: 'C' },
    { target: '#footer', label: 'Skip to footer', hotkey: 'F' }
  ];

  const handleSkipClick = (target: string, event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.querySelector(target) as HTMLElement;
    if (element) {
      element.focus();
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Temporarily set tabindex for focus if needed
      if (element.tabIndex === -1) {
        element.tabIndex = -1;
        element.addEventListener('blur', () => {
          element.removeAttribute('tabindex');
        }, { once: true });
      }
    }
  };

  useEffect(() => {
    // Add keyboard shortcuts for landmark navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.shiftKey) {
        const hotkey = event.key.toUpperCase();
        const skipLink = skipLinks.find(link => link.hotkey === hotkey);
        if (skipLink) {
          event.preventDefault();
          const element = document.querySelector(skipLink.target) as HTMLElement;
          if (element) {
            element.focus();
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="skip-navigation" role="navigation" aria-label="Skip navigation links">
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50">
        <div className="bg-primary text-primary-foreground p-4 rounded-md shadow-lg space-y-2">
          <p className="font-medium mb-2">Skip to:</p>
          {skipLinks.map((link, index) => (
            <a
              key={link.target}
              href={link.target}
              onClick={(e) => handleSkipClick(link.target, e)}
              className="block px-3 py-2 rounded bg-primary-foreground text-primary hover:bg-muted focus:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {link.label} <span className="text-xs">(Alt+Shift+{link.hotkey})</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// Landmark Region Wrapper Components
interface LandmarkProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  label?: string;
  labelledBy?: string;
}

export const BannerLandmark: React.FC<LandmarkProps> = ({ 
  children, 
  className = '', 
  id,
  label,
  labelledBy 
}) => (
  <header
    role="banner"
    id={id}
    className={className}
    aria-label={label}
    aria-labelledby={labelledBy}
  >
    {children}
  </header>
);

export const NavigationLandmark: React.FC<LandmarkProps> = ({ 
  children, 
  className = '', 
  id,
  label = 'Main navigation',
  labelledBy 
}) => (
  <nav
    role="navigation"
    id={id || 'navigation'}
    className={className}
    aria-label={label}
    aria-labelledby={labelledBy}
  >
    {children}
  </nav>
);

export const MainLandmark: React.FC<LandmarkProps> = ({ 
  children, 
  className = '', 
  id,
  label,
  labelledBy 
}) => (
  <main
    role="main"
    id={id || 'main-content'}
    className={className}
    aria-label={label}
    aria-labelledby={labelledBy}
    tabIndex={-1}
  >
    {children}
  </main>
);

export const ComplementaryLandmark: React.FC<LandmarkProps> = ({ 
  children, 
  className = '', 
  id,
  label,
  labelledBy 
}) => (
  <aside
    role="complementary"
    id={id}
    className={className}
    aria-label={label}
    aria-labelledby={labelledBy}
  >
    {children}
  </aside>
);

export const ContentInfoLandmark: React.FC<LandmarkProps> = ({ 
  children, 
  className = '', 
  id,
  label,
  labelledBy 
}) => (
  <footer
    role="contentinfo"
    id={id || 'footer'}
    className={className}
    aria-label={label}
    aria-labelledby={labelledBy}
  >
    {children}
  </footer>
);

export const RegionLandmark: React.FC<LandmarkProps & { regionLabel: string }> = ({ 
  children, 
  className = '', 
  id,
  regionLabel,
  labelledBy 
}) => (
  <section
    role="region"
    id={id}
    className={className}
    aria-label={regionLabel}
    aria-labelledby={labelledBy}
  >
    {children}
  </section>
);

// Search Landmark Component
export const SearchLandmark: React.FC<LandmarkProps> = ({ 
  children, 
  className = '', 
  id,
  label = 'Search',
  labelledBy 
}) => (
  <div
    role="search"
    id={id}
    className={className}
    aria-label={label}
    aria-labelledby={labelledBy}
  >
    {children}
  </div>
);

// Landmark Navigation Component for Screen Readers
export const LandmarkNavigation: React.FC = () => {
  const [landmarks, setLandmarks] = React.useState<Array<{ id: string; label: string; type: string }>>([]);

  React.useEffect(() => {
    const findLandmarks = () => {
      const landmarkElements = document.querySelectorAll(`
        header[role="banner"], [role="banner"],
        nav[role="navigation"], [role="navigation"],
        main[role="main"], [role="main"],
        aside[role="complementary"], [role="complementary"],
        footer[role="contentinfo"], [role="contentinfo"],
        [role="search"],
        [role="region"][aria-label], [role="region"][aria-labelledby]
      `);

      const foundLandmarks = Array.from(landmarkElements).map((el, index) => {
        const role = el.getAttribute('role') || el.tagName.toLowerCase();
        const label = el.getAttribute('aria-label') || 
                     el.getAttribute('aria-labelledby') ||
                     el.querySelector('h1, h2, h3')?.textContent ||
                     `${role} ${index + 1}`;
        
        return {
          id: el.id || `landmark-${index}`,
          label: label.slice(0, 50), // Limit length
          type: role
        };
      });

      setLandmarks(foundLandmarks);
    };

    // Find landmarks after page loads
    const timer = setTimeout(findLandmarks, 500);
    return () => clearTimeout(timer);
  }, []);

  const navigateToLandmark = (id: string) => {
    const element = document.getElementById(id) || document.querySelector(`[aria-labelledby="${id}"]`);
    if (element) {
      (element as HTMLElement).focus();
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sr-only" role="navigation" aria-label="Page landmarks">
      <h2>Page Landmarks</h2>
      <ul>
        {landmarks.map((landmark) => (
          <li key={landmark.id}>
            <button
              onClick={() => navigateToLandmark(landmark.id)}
              className="text-left underline focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {landmark.type}: {landmark.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};