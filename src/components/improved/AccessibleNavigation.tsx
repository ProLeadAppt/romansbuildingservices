import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, Menu, X, Search, Building, Hammer, Shield, 
  MapPin, Clock, Star, ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInclusiveDesign } from '@/components/accessibility/InclusiveDesignProvider';
import { 
  mainNavigation, 
  serviceCategories, 
  serviceAreas, 
  contactServices
} from '@/utils/navigationData';

const iconMap = { Building, Hammer, Shield };

export const AccessibleNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [focusedSearchIndex, setFocusedSearchIndex] = useState(-1);
  
  const location = useLocation();
  const { preferences } = useInclusiveDesign();
  const navRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout>();
  const searchResultsRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchResults([]);
      return;
    }

    const allItems = [
      ...mainNavigation.map(item => ({ ...item, type: 'page' })),
      ...serviceCategories.flatMap(cat => 
        cat.services.map(service => ({ ...service, type: 'service', category: cat.label }))
      ),
      ...serviceAreas.map(area => ({ ...area, type: 'area' }))
    ];

    const filtered = allItems.filter(item =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    ).slice(0, 8);

    setSearchResults(filtered);
    setFocusedSearchIndex(filtered.length > 0 ? 0 : -1);
  }, [searchQuery]);

  // Dropdown management
  const handleMouseEnter = useCallback((dropdownId: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdownId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  const closeAllDropdowns = useCallback(() => {
    setActiveDropdown(null);
    setSearchQuery('');
    setSearchResults([]);
    setFocusedSearchIndex(-1);
  }, []);

  // Keyboard navigation
  const handleNavKeyDown = useCallback((event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        closeAllDropdowns();
        setIsMobileMenuOpen(false);
        break;
      
      case 'Tab':
        if (activeDropdown && !event.shiftKey) {
          // Allow tabbing into dropdown content
          break;
        }
        if (!event.shiftKey) {
          closeAllDropdowns();
        }
        break;
      
      case 'ArrowDown':
        if (searchResults.length > 0) {
          event.preventDefault();
          setFocusedSearchIndex(prev => 
            prev < searchResults.length - 1 ? prev + 1 : 0
          );
        }
        break;
      
      case 'ArrowUp':
        if (searchResults.length > 0) {
          event.preventDefault();
          setFocusedSearchIndex(prev => 
            prev > 0 ? prev - 1 : searchResults.length - 1
          );
        }
        break;
      
      case 'Enter':
        if (focusedSearchIndex >= 0 && searchResults[focusedSearchIndex]) {
          event.preventDefault();
          const result = searchResults[focusedSearchIndex];
          window.location.href = result.href;
        }
        break;
    }
  }, [activeDropdown, searchResults, focusedSearchIndex, closeAllDropdowns]);

  // Skip to main content
  const skipToMain = () => {
    const main = document.querySelector('main');
    if (main) {
      main.focus();
      main.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActivePage = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Skip to main content link */}
      <Button
        onClick={skipToMain}
        className="sr-only focus:not-sr-only fixed top-2 left-2 z-[60] bg-primary text-primary-foreground"
        tabIndex={1}
      >
        Skip to main content
      </Button>

      <nav 
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b" 
            : "bg-white shadow-sm border-b border-border"
        )}
        role="navigation"
        aria-label="Main navigation"
        onKeyDown={handleNavKeyDown}
      >
        <div className="container mx-auto px-4">
          {/* Main Navigation Bar */}
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo Section */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              aria-label="Romans Building Services - Go to homepage"
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Building className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-foreground">Romans Building</div>
                <div className="text-xs text-muted-foreground">Services Since 1995</div>
              </div>
            </Link>

            {/* Desktop Search */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8 relative">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <Input
                  ref={searchRef}
                  placeholder="Search services, areas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4"
                  aria-label="Search navigation"
                  aria-expanded={searchResults.length > 0}
                  aria-haspopup="listbox"
                  role="combobox"
                  aria-activedescendant={focusedSearchIndex >= 0 ? `search-result-${focusedSearchIndex}` : undefined}
                />
                
                {/* Search Results */}
                <AnimatePresence>
                  {searchResults.length > 0 && (
                    <motion.div
                      ref={searchResultsRef}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto"
                      role="listbox"
                      aria-label="Search results"
                    >
                      {searchResults.map((result, index) => (
                        <Link
                          key={`${result.type}-${result.id}`}
                          to={result.href}
                          id={`search-result-${index}`}
                          role="option"
                          aria-selected={index === focusedSearchIndex}
                          className={cn(
                            "block px-4 py-3 hover:bg-muted transition-colors border-b last:border-b-0",
                            index === focusedSearchIndex && "bg-muted"
                          )}
                          onClick={() => {
                            setSearchQuery('');
                            setSearchResults([]);
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">{result.label}</div>
                              {result.description && (
                                <div className="text-sm text-muted-foreground">{result.description}</div>
                              )}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {result.type}
                            </Badge>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
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
                      "flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      isActivePage(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                    aria-haspopup={item.children ? "true" : "false"}
                    aria-expanded={item.children ? activeDropdown === item.id : undefined}
                  >
                    <span>{item.label}</span>
                    {item.children && <ChevronDown className="w-4 h-4" aria-hidden="true" />}
                  </Link>

                  {/* Dropdown Menus */}
                  {item.id === 'services' && activeDropdown === 'services' && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-xl border p-6 z-50"
                        onMouseEnter={() => handleMouseEnter('services')}
                        onMouseLeave={handleMouseLeave}
                        role="menu"
                        aria-label="Services menu"
                      >
                        <div className="grid grid-cols-3 gap-6">
                          {serviceCategories.map((category) => {
                            const Icon = iconMap[category.icon as keyof typeof iconMap];
                            return (
                              <div key={category.id} className="space-y-3">
                                <div className="flex items-center space-x-2 pb-2 border-b">
                                  <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                                  <h3 className="font-semibold text-sm">{category.label}</h3>
                                </div>
                                <div className="space-y-2" role="group" aria-labelledby={`category-${category.id}`}>
                                  {category.services.map((service) => (
                                    <Link
                                      key={service.id}
                                      to={service.href}
                                      className="block p-2 rounded-lg hover:bg-muted/50 transition-colors group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                      onClick={closeAllDropdowns}
                                      role="menuitem"
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
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Contact Information */}
              <div className="hidden md:flex items-center space-x-3">
                <a 
                  href={`tel:${contactServices.phone}`}
                  className="flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label={`Contact us at ${contactServices.phone}`}
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm">{contactServices.phone}</span>
                </a>
                
                <Button 
                  size="sm" 
                  className="bg-secondary hover:bg-secondary/90"
                  asChild
                >
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                  closeAllDropdowns();
                }}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t bg-white"
                role="menu"
                aria-label="Mobile navigation menu"
              >
                <div className="py-4 space-y-2">
                  {/* Mobile Search */}
                  <div className="px-4 pb-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      <Input
                        placeholder="Search services, areas..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                        aria-label="Search navigation"
                      />
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-2 px-4 mb-4">
                    <Button 
                      size="sm" 
                      onClick={() => window.open(`tel:${contactServices.phone}`)}
                      className="bg-primary"
                    >
                      <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                      Contact Us
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      asChild
                    >
                      <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        Get Quote
                      </Link>
                    </Button>
                  </div>

                  {/* Navigation Links */}
                  {mainNavigation.map((item) => (
                    <div key={item.id} className="px-4">
                      <Link
                        to={item.href}
                        className={cn(
                          "block py-3 text-base font-medium transition-colors rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                          isActivePage(item.href)
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                        role="menuitem"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}

                  {/* Contact Badge */}
                  <div className="mx-4 mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center space-x-2 text-primary">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span className="text-sm font-semibold">Professional Building Services</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Quality construction and building maintenance
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Screen reader live region for announcements */}
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          {isMobileMenuOpen && "Mobile menu opened"}
          {activeDropdown && `${activeDropdown} menu opened`}
          {searchResults.length > 0 && `${searchResults.length} search results available`}
        </div>
      </nav>
    </>
  );
};