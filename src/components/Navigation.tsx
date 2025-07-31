import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { name: "Masonry", href: "/services/masonry" },
  { name: "Restoration", href: "/services/restoration" },
  { name: "Remedial Building", href: "/services/remedial-building" },
  { name: "Structural Repairs", href: "/services/structural-repairs" },
  { name: "Waterproofing", href: "/services/waterproofing" },
  { name: "Concrete Repairs", href: "/services/concrete-repairs" }
];

const areas = [
  { name: "Sydney CBD", href: "/areas/sydney-cbd" },
  { name: "Eastern Suburbs", href: "/areas/eastern-suburbs" },
  { name: "Northern Beaches", href: "/areas/northern-beaches" },
  { name: "North Shore", href: "/areas/north-shore" },
  { name: "Inner West", href: "/areas/inner-west" },
  { name: "Western Sydney", href: "/areas/western-sydney" }
];

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              Romans Building Services
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white border border-border rounded-md shadow-lg z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Areas Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onMouseEnter={() => setIsAreasOpen(true)}
                onMouseLeave={() => setIsAreasOpen(false)}
              >
                <span>Areas We Service</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isAreasOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white border border-border rounded-md shadow-lg z-50"
                  onMouseEnter={() => setIsAreasOpen(true)}
                  onMouseLeave={() => setIsAreasOpen(false)}
                >
                  <div className="py-2">
                    {areas.map((area) => (
                      <Link
                        key={area.href}
                        to={area.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === "/contact" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Contact
            </Link>
          </div>

          {/* CTA Section */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:0414922276" className="flex items-center space-x-2 text-primary font-semibold">
              <Phone className="h-4 w-4" />
              <span>0414 922 276</span>
            </a>
            <Button size="sm">Get Free Assessment</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-3 py-2">
                <div className="text-base font-medium text-muted-foreground mb-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="px-3 py-2">
                <div className="text-base font-medium text-muted-foreground mb-2">Areas We Service</div>
                {areas.map((area) => (
                  <Link
                    key={area.href}
                    to={area.href}
                    className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {area.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="px-3 py-2 space-y-2">
                <a href="tel:0414922276" className="flex items-center space-x-2 text-primary font-semibold">
                  <Phone className="h-4 w-4" />
                  <span>0414 922 276</span>
                </a>
                <Button size="sm" className="w-full">Get Free Assessment</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};