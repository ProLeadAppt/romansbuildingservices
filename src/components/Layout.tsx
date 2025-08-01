import React from 'react';
import { ModernNavigation } from '@/components/navigation/ModernNavigation';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';

interface LayoutProps {
  children: React.ReactNode;
  showBreadcrumbs?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showBreadcrumbs = true 
}) => {
  return (
    <div className="min-h-screen">
      <ModernNavigation />
      
      {/* Main Content with proper spacing for fixed nav */}
      <main className="pt-16 lg:pt-18">
        {showBreadcrumbs && <Breadcrumbs />}
        {children}
      </main>
    </div>
  );
};