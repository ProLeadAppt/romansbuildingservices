import React from 'react';
import { CleanNavigation } from '@/components/CleanNavigation';
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
      <CleanNavigation />
      
      {/* Main Content */}
      <main>
        {showBreadcrumbs && <Breadcrumbs />}
        {children}
      </main>
      
      {/* Chat widget loads on all pages */}
      <LeadConnectorChat />
    </div>;
};