import React from 'react';
import { CleanNavigation } from '@/components/CleanNavigation';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { LeadConnectorChat } from '@/components/LeadConnectorChat';
import { useLocation } from 'react-router-dom';
interface LayoutProps {
  children: React.ReactNode;
  showBreadcrumbs?: boolean;
}
export const Layout: React.FC<LayoutProps> = ({
  children,
  showBreadcrumbs = true
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <div className="min-h-screen">
      <CleanNavigation />
      
      {/* Main Content */}
      <main className={isHomePage ? '' : 'pt-20'}>
        {showBreadcrumbs && !isHomePage && (
          <div className="container mx-auto px-4 py-4">
            <Breadcrumbs />
          </div>
        )}
        {children}
      </main>
      
      {/* Chat widget loads on all pages */}
      <LeadConnectorChat />
    </div>
  );
};