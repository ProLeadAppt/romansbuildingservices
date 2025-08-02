import React from 'react';
import { ModernNavigation } from '@/components/navigation/ModernNavigation';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { LeadConnectorChat } from '@/components/LeadConnectorChat';
interface LayoutProps {
  children: React.ReactNode;
  showBreadcrumbs?: boolean;
}
export const Layout: React.FC<LayoutProps> = ({
  children,
  showBreadcrumbs = true
}) => {
  return <div className="min-h-screen">
      <ModernNavigation />
      
      {/* Main Content */}
      <main>
        {showBreadcrumbs}
        {children}
      </main>
      
      {/* Chat widget loads on all pages */}
      <LeadConnectorChat />
    </div>;
};