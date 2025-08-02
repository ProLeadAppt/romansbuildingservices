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
  if (location.pathname === '/' || location.pathname === '/services' || location.pathname === '/areas' || location.pathname.startsWith('/admin') || breadcrumbs.length <= 1) {
    return null;
  }
  return;
};