import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, Menu, X, ChevronDown, Search, 
  Building, Hammer, Shield, MapPin, Clock,
  Star, ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  mainNavigation, 
  serviceCategories, 
  serviceAreas, 
  emergencyServices,
  quickActions 
} from '@/utils/navigationData';
import { useBackgroundDetection } from '@/hooks/useBackgroundDetection';

const iconMap = {
  Building,
  Hammer, 
  Shield
};

export const ModernNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const navRef = useRef<HTMLElement>(null);
  
  // Detect background theme for dynamic styling
  const backgroundTheme = useBackgroundDetection({ 
    targetRef: navRef,
    debounceMs: 50 
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (dropdownId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdownId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const isActivePage = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  // Dynamic navigation styling based on background
  const getNavClasses = () => {
    const baseClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out";
    
    if (backgroundTheme === 'light') {
      // Light theme - dark nav for light backgrounds
      return isScrolled 
        ? `${baseClasses} bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-gray-800/20`
        : `${baseClasses} bg-gray-900/90 shadow-lg border-b border-gray-800/10`;
    } else {
      // Dark theme - light nav for dark backgrounds  
      return isScrolled 
        ? `${baseClasses} bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/20`
        : `${baseClasses} bg-white/90 shadow-lg border-b border-gray-200/10`;
    }
  };

  const getTextClasses = (isActive: boolean = false) => {
    if (backgroundTheme === 'light') {
      return isActive 
        ? "text-blue-400 bg-blue-400/10" 
        : "text-gray-100 hover:text-white hover:bg-white/10";
    } else {
      return isActive 
        ? "text-primary bg-primary/10" 
        : "text-muted-foreground hover:text-foreground hover:bg-muted/50";
    }
  };

  const getLogoClasses = () => {
    return backgroundTheme === 'light' 
      ? "text-white" 
      : "text-foreground";
  };

  return (
    <nav ref={navRef} className={getNavClasses()}>
      <div className="container mx-auto px-4">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Building className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <div className={`text-xl font-bold transition-colors ${getLogoClasses()}`}>Romans Building</div>
              <div className={`text-xs transition-colors ${backgroundTheme === 'light' ? 'text-gray-300' : 'text-muted-foreground'}`}>Services Since 1995</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <div 
                key={item.id} 
                className="relative"
                onMouseEnter={() => item.children ? handleMouseEnter(item.id) : undefined}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                    getTextClasses(isActivePage(item.href))
                  )}
                >
                  <span>{item.label}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Mega Menu for Services */}
                {item.id === 'services' && activeDropdown === 'services' && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-xl border p-6 z-50"
                      onMouseEnter={() => handleMouseEnter('services')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {serviceCategories.map((category) => {
                          const Icon = iconMap[category.icon as keyof typeof iconMap];
                          return (
                            <div key={category.id} className="space-y-3">
                              <div className="flex items-center space-x-2 pb-2 border-b">
                                <Icon className="w-5 h-5 text-primary" />
                                <h3 className="font-semibold text-sm">{category.label}</h3>
                              </div>
                              <div className="space-y-2">
                                {category.services.map((service) => (
                                  <Link
                                    key={service.id}
                                    to={service.href}
                                    className="block p-2 rounded-lg hover:bg-muted/50 transition-colors group"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-medium group-hover:text-primary">
                                        {service.label}
                                      </span>
                                      {service.badge && (
                                        <Badge variant="secondary" className="text-xs">
                                          {service.badge}
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                      {service.description}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      
                      <div className="border-t mt-6 pt-4 flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Need help choosing? Get a free consultation
                        </p>
                        <Button size="sm" variant="outline">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Expert
                        </Button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}

                {/* Areas Dropdown */}
                {item.id === 'areas' && activeDropdown === 'areas' && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-[400px] bg-white rounded-xl shadow-xl border p-6 z-50"
                      onMouseEnter={() => handleMouseEnter('areas')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {serviceAreas.map((area) => (
                          <Link
                            key={area.id}
                            to={area.href}
                            className="p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span className="font-medium text-sm group-hover:text-primary">
                                {area.label}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">
                              {area.description}
                            </p>
                            <div className="text-xs text-muted-foreground">
                              {area.suburbs.slice(0, 3).join(', ')}
                              {area.suburbs.length > 3 && '...'}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Emergency Contact - Always Visible */}
            <div className="hidden md:flex items-center space-x-3">
              <a 
                href={`tel:${emergencyServices.phone}`}
                className={cn(
                  "flex items-center space-x-2 font-semibold transition-colors",
                  backgroundTheme === 'light' 
                    ? "text-blue-400 hover:text-blue-300" 
                    : "text-primary hover:text-primary/80"
                )}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">{emergencyServices.phone}</span>
              </a>
              
              <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                Get Free Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t bg-white"
            >
              <div className="py-4 space-y-2">
                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <Button 
                    size="sm" 
                    onClick={() => window.open(`tel:${emergencyServices.phone}`)}
                    className="bg-primary"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button size="sm" variant="outline">
                    Free Quote
                  </Button>
                </div>

                {/* Navigation Links */}
                {mainNavigation.map((item) => (
                  <div key={item.id}>
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        isActivePage(item.href)
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}

                {/* Emergency Badge */}
                <div className="mt-4 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                  <div className="flex items-center space-x-2 text-destructive">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">24/7 Emergency Service</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Structural emergencies and urgent repairs
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};