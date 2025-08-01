import React from 'react';
import { ModernNavigation } from '@/components/navigation/ModernNavigation';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { LeadConnectorChat } from '@/components/LeadConnectorChat';
import { MobileOptimizedSEO } from '@/components/MobileOptimizedSEO';

interface LayoutProps {
  children: React.ReactNode;
  showBreadcrumbs?: boolean;
  title?: string;
  description?: string;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showBreadcrumbs = true,
  title,
  description
}) => {
  return (
    <div className="min-h-screen overflow-safe">
      <MobileOptimizedSEO title={title} description={description} />
      <ModernNavigation />
      
      {/* Main Content with top padding for floating nav */}
      <main className="pt-24 mobile-container">
        {showBreadcrumbs && <Breadcrumbs />}
        {children}
      </main>
      
      {/* Chat widget loads on all pages */}
      <LeadConnectorChat />
    </div>
  );
};