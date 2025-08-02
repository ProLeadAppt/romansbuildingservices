import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Menu, X, ChevronDown, Search, Building, Hammer, Shield, MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mainNavigation, serviceCategories, serviceAreas, contactServices, quickActions } from '@/utils/navigationData';
import { AssessmentPopup } from '@/components/AssessmentPopup';
const iconMap = {
  Building,
  Hammer,
  Shield
};
export const ModernNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const navRef = useRef<HTMLElement>(null);
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
  return <div className="fixed top-0 left-0 right-0 z-[70] px-3 lg:px-6">
      <nav ref={navRef} className="w-full max-w-6xl mx-auto mt-3 mb-2 rounded-2xl backdrop-blur-xl transition-all duration-500 ease-out hover:shadow-2xl" style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(251,252,254,0.98) 100%)',
      boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 8px 32px rgba(59, 130, 246, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      willChange: 'transform, box-shadow',
      border: '1px solid rgba(255, 255, 255, 0.4)',
      transform: 'translateZ(0)'
    }}>
      <div className="container mx-auto px-4">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-[71px] h-[71px] sm:w-[70px] sm:h-[70px] lg:w-[69px] lg:h-[69px] bg-gray-900 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform p-2">
              <img src="/lovable-uploads/03e057ec-f76b-425e-99fd-289e0c734fa3.png" alt="Roman's Building Services" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold transition-colors text-foreground">Romans Building</div>
              <div className="text-xs transition-colors text-muted-foreground">Services Since 1995</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map(item => <div key={item.id} className="relative" onMouseEnter={() => item.children ? handleMouseEnter(item.id) : undefined} onMouseLeave={handleMouseLeave}>
                <Link to={item.href} className={cn("flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all", isActivePage(item.href) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/50")}>
                  <span>{item.label}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Mega Menu for Services */}
                {item.id === 'services' && activeDropdown === 'services' && <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-xl border p-6 z-[80] animate-fade-in" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave} style={{
                willChange: 'opacity, transform'
              }}>
                      <div className="grid grid-cols-3 gap-6">
                        {serviceCategories.map(category => {
                    const Icon = iconMap[category.icon as keyof typeof iconMap];
                    return <div key={category.id} className="space-y-3">
                              <div className="flex items-center space-x-2 pb-2 border-b">
                                <Icon className="w-5 h-5 text-primary" />
                                <h3 className="font-semibold text-sm">{category.label}</h3>
                              </div>
                              <div className="space-y-2">
                                {category.services.map(service => <Link key={service.id} to={service.href} className="block p-2 rounded-lg hover:bg-muted/50 transition-colors group" onClick={() => setActiveDropdown(null)}>
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-medium group-hover:text-primary">
                                        {service.label}
                                      </span>
                                      {service.badge && <Badge variant="secondary" className="text-xs">
                                          {service.badge}
                                        </Badge>}
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                      {service.description}
                                    </p>
                                  </Link>)}
                              </div>
                            </div>;
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
                    </div>}

                {/* Areas Dropdown */}
                {item.id === 'areas' && activeDropdown === 'areas' && <div className="absolute top-full left-0 mt-2 w-[400px] bg-white rounded-xl shadow-xl border p-6 z-[80] animate-fade-in" onMouseEnter={() => handleMouseEnter('areas')} onMouseLeave={handleMouseLeave} style={{
                willChange: 'opacity, transform'
              }}>
                      <div className="grid grid-cols-2 gap-4">
                        {serviceAreas.map(area => <Link key={area.id} to={area.href} className="p-3 rounded-lg hover:bg-muted/50 transition-colors group" onClick={() => setActiveDropdown(null)}>
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
                          </Link>)}
                      </div>
                    </div>}
              </div>)}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Contact Information - Always Visible */}
            <div className="hidden md:flex items-center space-x-3">
              <a href={`tel:${contactServices.phone}`} className="flex items-center space-x-2 font-semibold transition-colors text-primary hover:text-primary/80">
                <Phone className="w-4 h-4" />
                
              </a>
              
              <Button size="sm" className="bg-secondary hover:bg-secondary/90" onClick={() => {
                setIsMobileMenuOpen(false);
                setShowAssessmentPopup(true);
              }}>
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
          {isMobileMenuOpen && <div className="lg:hidden border-t bg-white animate-fade-in" style={{
          willChange: 'opacity, height'
        }}>
              <div className="py-4 space-y-2">
                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <Button size="sm" onClick={() => window.open(`tel:${contactServices.phone}`)} className="bg-primary">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Us
                  </Button>
              <Button size="sm" variant="outline" onClick={() => {
                setIsMobileMenuOpen(false);
                setShowAssessmentPopup(true);
              }}>
                Get Quote
              </Button>
                </div>

                {/* Navigation Links */}
                {mainNavigation.map(item => <div key={item.id}>
                    <Link to={item.href} className={cn("block px-4 py-3 rounded-lg text-base font-medium transition-colors", isActivePage(item.href) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/50")} onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </div>)}

                {/* Contact Badge */}
                <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center space-x-2 text-primary">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">Professional Building Services</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Quality construction and building maintenance
                  </p>
                </div>
              </div>
            </div>}
      </div>
      </nav>
      
      {/* Assessment Popup */}
      <AssessmentPopup isOpen={showAssessmentPopup} onClose={() => setShowAssessmentPopup(false)} />
    </div>;
};