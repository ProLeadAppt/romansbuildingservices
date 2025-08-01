import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbs } from '@/utils/navigationData';
import { cn } from '@/lib/utils';

interface BreadcrumbsProps {
  className?: string;
  showHome?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  className = '', 
  showHome = true 
}) => {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location.pathname);

  // Don't show breadcrumbs on home page, main category pages, admin pages, or if only home exists
  if (location.pathname === '/' || 
      location.pathname === '/services' || 
      location.pathname === '/areas' || 
      location.pathname.startsWith('/admin') ||
      breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("py-4 border-b bg-muted/30", className)}
    >
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const isHome = crumb.id === 'home';

            return (
              <li key={crumb.id} className="flex items-center">
                {/* Separator (except for first item) */}
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />
                )}

                {/* Breadcrumb Link/Text */}
                {isLast ? (
                  <span 
                    className="font-medium text-foreground"
                    aria-current="page"
                  >
                    {isHome && showHome ? (
                      <Home className="w-4 h-4" />
                    ) : (
                      crumb.label
                    )}
                  </span>
                ) : (
                  <Link
                    to={crumb.href}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                  >
                    {isHome && showHome ? (
                      <Home className="w-4 h-4" />
                    ) : (
                      crumb.label
                    )}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
