import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Home, Users, Wrench, Image, CheckCircle, Star, Menu, X, MapPin, FileText } from 'lucide-react';
import { SkipNavigation } from './AccessibilityEnhancements';
import { BannerLandmark, NavigationLandmark } from './ARIALandmarks';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const mainNavigation = [
  { id: 'home', label: 'Home', icon: Home, href: '/' },
  { id: 'services', label: 'Services', icon: Wrench, href: '/services' },
  { id: 'areas', label: 'Areas', icon: MapPin, href: '/service-areas' },
  { id: 'projects', label: 'Projects', icon: Image, href: '/projects' },
  { id: 'about', label: 'About', icon: Users, href: '/about' },
  { id: 'contact', label: 'Contact', icon: Phone, href: '/contact' },
];

const homePageSections = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: Users },
  { id: 'services', label: 'Services', icon: Wrench },
  { id: 'projects', label: 'Projects', icon: Image },
  { id: 'process', label: 'Process', icon: CheckCircle },
  { id: 'reviews', label: 'Reviews', icon: Star },
  { id: 'contact', label: 'Contact', icon: Phone },
];

export const CleanNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Only track sections on home page
      if (isHomePage) {
        const sectionElements = homePageSections.map(section => 
          document.getElementById(section.id)
        ).filter(Boolean);
        
        const currentSection = sectionElements.find(element => {
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        });
        
        if (currentSection) {
          setActiveSection(currentSection.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavigation = (item: typeof mainNavigation[0]) => {
    if (isHomePage && item.id === 'home') {
      scrollToSection('hero');
    } else if (isHomePage && item.id === 'services') {
      scrollToSection('services');
    } else if (isHomePage && item.id === 'about') {
      scrollToSection('about');
    } else if (isHomePage && item.id === 'contact') {
      scrollToSection('contact');
    } else {
      navigate(item.href);
    }
    setIsMobileMenuOpen(false);
  };

  const isActiveNavItem = (item: typeof mainNavigation[0]) => {
    if (isHomePage) {
      if (item.id === 'home') return activeSection === 'hero';
      if (item.id === 'services') return activeSection === 'services';
      if (item.id === 'about') return activeSection === 'about';
      if (item.id === 'contact') return activeSection === 'contact';
      return false;
    }
    return location.pathname === item.href || 
           (item.href !== '/' && location.pathname.startsWith(item.href));
  };

  return (
    <>
      <SkipNavigation />
      
      <BannerLandmark 
        id="site-header"
        label="Site header with navigation and company information"
        className={`fixed top-0 left-0 right-0 z-40 transition-smooth ${
          isScrolled 
            ? 'glass-nav shadow-lg' 
            : 'bg-white/95 backdrop-blur-md shadow-md'
        }`}
      >
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Professional Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src="/lovable-uploads/021212_ced9a2de6c6e43478213886e0d066486~mv2_d_3024_4032_s_4_2.jpg" 
                alt="Roman's Building Services" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-foreground">Roman's Building</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Since 1995</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <NavigationLandmark 
              id="main-navigation"
              label="Main site navigation"
              className="hidden md:flex items-center space-x-1"
            >
              {mainNavigation.map((item) => {
                const Icon = item.icon;
                const isActive = isActiveNavItem(item);
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item)}
                    aria-current={isActive ? 'page' : undefined}
                    aria-label={`Navigate to ${item.label}`}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                      isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-muted text-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </NavigationLandmark>

            {/* Contact Info & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-6">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  <Phone className="h-4 w-4 mr-2" />
                  0414 922 276
                </Button>
              </div>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Progress Bar - only show on home page */}
        {isHomePage && (
          <div className="absolute bottom-0 left-0 h-1 bg-primary/20">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{
                width: `${(homePageSections.findIndex(s => s.id === activeSection) / (homePageSections.length - 1)) * 100}%`
              }}
            />
          </div>
        )}
      </BannerLandmark>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <NavigationLandmark
          id="mobile-navigation"
          label="Mobile navigation menu"
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b" role="banner">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/021212_ced9a2de6c6e43478213886e0d066486~mv2_d_3024_4032_s_4_2.jpg" 
                  alt="Roman's Building Services" 
                  className="w-8 h-8 object-contain"
                />
                <h2 className="text-lg font-bold text-foreground">Roman's Building</h2>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto p-4">
              <nav className="space-y-2" aria-label="Mobile navigation menu">
                {mainNavigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = isActiveNavItem(item);
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item)}
                      aria-current={isActive ? 'page' : undefined}
                      aria-label={`Navigate to ${item.label}`}
                      className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-smooth text-left focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                        isActive 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-muted text-foreground'
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-base font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Call Button */}
            <div className="p-4 border-t">
              <Button
                onClick={() => {
                  window.open('tel:0414922276');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-base py-3"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now: 0414 922 276
              </Button>
            </div>
          </div>
        </NavigationLandmark>
      )}
    </>
  );
};