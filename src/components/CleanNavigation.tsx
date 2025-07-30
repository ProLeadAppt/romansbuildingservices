import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Home, Users, Wrench, Image, CheckCircle, Star, Menu, X } from 'lucide-react';

const sections = [
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find active section
      const sectionElements = sections.map(section => 
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Call Button - Clean Design */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          size="lg"
          className="rounded-full w-12 h-12 button-shadow"
          onClick={() => window.open('tel:0412345678')}
        >
          <Phone className="w-5 h-5" />
        </Button>
      </div>

      {/* Clean Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-smooth ${
          isScrolled ? 'glass-nav' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Clean Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Romans Building</h1>
                <p className="text-xs text-muted-foreground">Since 1995</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-smooth ${
                      isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-muted text-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{section.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Contact Info & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-semibold">0412 345 678</span>
                </div>
              </div>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
              width: `${(sections.findIndex(s => s.id === activeSection) / (sections.length - 1)) * 100}%`
            }}
          />
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div className="absolute inset-0 bg-black/20" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-20 right-4 left-4 bg-background border rounded-lg card-shadow p-4">
            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-smooth ${
                      isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-muted text-foreground'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
            </nav>
            <div className="mt-4 pt-4 border-t text-center">
              <Button
                onClick={() => window.open('tel:0412345678')}
                className="w-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now: 0412 345 678
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};