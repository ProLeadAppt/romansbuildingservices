import React from 'react';
import { ModernNavigation } from '@/components/navigation/ModernNavigation';
import { Footer } from '@/components/Footer';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-navy focus:shadow-lg"
      >
        Skip to main content
      </a>
      <header>
        <ModernNavigation />
      </header>
      <main id="main-content" tabIndex={-1} className="flex-1 scroll-mt-20">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};
