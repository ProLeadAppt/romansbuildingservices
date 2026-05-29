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
      <ModernNavigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};
