import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Home, Users, Wrench, Image, CheckCircle, Star, Menu, X } from 'lucide-react';
import { SkipNavigation } from './AccessibilityEnhancements';
import { BannerLandmark, NavigationLandmark } from './ARIALandmarks';
import { AssessmentPopup } from '@/components/AssessmentPopup';
import { mainNavigation } from '@/utils/navigationData';

// Navigation items that work for both single-page and multi-page
const navigationItems = [
  { id: 'home', label: 'Home', icon: Home, href: '/', sectionId: 'hero' },
  { id: 'about', label: 'About', icon: Users, href: '/about', sectionId: 'about' },
  { id: 'services', label: 'Services', icon: Wrench, href: '/services', sectionId: 'services' },
  { id: 'projects', label: 'Projects', icon: Image, href: '/projects', sectionId: 'projects' },
  { id: 'process', label: 'Process', icon: CheckCircle, href: '/', sectionId: 'process' },
  { id: 'reviews', label: 'Reviews', icon: Star, href: '/', sectionId: 'reviews' },
  { id: 'contact', label: 'Contact', icon: Phone, href: '/contact', sectionId: 'contact' },
];

export const CleanNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAssessmentPopupOpen, setIsAssessmentPopupOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find active section only on single-page app (home page)
      if (location.pathname === '/') {
        const sectionElements = navigationItems.map(item => 
          document.getElementById(item.sectionId)
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
  }, []);

  const handleNavigation = (item: typeof navigationItems[0]) => {
    setIsMobileMenuOpen(false);
    
    if (item.href === '/') {
      // Navigate to home and scroll to section
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.getElementById(item.sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home, just scroll
        const element = document.getElementById(item.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Navigate to different page
      navigate(item.href);
    }
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
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = (location.pathname === item.href) || 
                  (location.pathname === '/' && activeSection === item.sectionId);
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item)}
                    aria-current={isActive ? 'page' : undefined}
                    aria-label={`Navigate to ${item.label} ${item.href === '/' ? 'section' : 'page'}`}
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
              <div className="hidden lg:flex items-center space-x-3">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => setIsAssessmentPopupOpen(true)}
                >
                  Get Free Quote
                </Button>
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

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-primary/20">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{
              width: location.pathname === '/' 
                ? `${(navigationItems.findIndex(s => s.sectionId === activeSection) / (navigationItems.length - 1)) * 100}%`
                : '100%'
            }}
          />
        </div>
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
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = (location.pathname === item.href) || 
                    (location.pathname === '/' && activeSection === item.sectionId);
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item)}
                      aria-current={isActive ? 'page' : undefined}
                      aria-label={`Navigate to ${item.label} ${item.href === '/' ? 'section' : 'page'}`}
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
                
                {/* Quote Button in Mobile */}
                <button
                  onClick={() => setIsAssessmentPopupOpen(true)}
                  className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-smooth text-left bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-base font-medium">Get Free Quote</span>
                </button>
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
      
      {/* Assessment Popup */}
      <AssessmentPopup 
        isOpen={isAssessmentPopupOpen} 
        onClose={() => setIsAssessmentPopupOpen(false)} 
      />
    </>
  );
};