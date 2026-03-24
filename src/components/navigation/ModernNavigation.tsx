import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

const serviceDropdownLinks = [
  { label: 'Masonry', href: '/services/masonry' },
  { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
  { label: 'Structural Repairs', href: '/services/structural-repairs' },
  { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
  { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
  { label: 'Remedial Building', href: '/services/remedial-building' },
  { label: 'Building Restoration', href: '/services/building-restoration' },
] as const;

const PHONE_NUMBER = '0414 922 276';
const PHONE_TEL = 'tel:0414922276';

export const ModernNavigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Shrink nav on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-navy transition-[padding] duration-200 ease-in-out ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src="/lovable-uploads/03e057ec-f76b-425e-99fd-289e0c734fa3.webp"
            alt="Romans Building Services"
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            if (link.label === 'Services') {
              return (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={link.href}
                    className={`font-body font-medium text-sm px-4 py-2 rounded-md inline-flex items-center gap-1 transition-colors ${
                      isActive(link.href)
                        ? 'text-white font-semibold'
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>

                  {/* Services dropdown */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl py-2 z-50"
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {serviceDropdownLinks.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="block px-4 py-2.5 text-sm font-body text-gray-700 hover:bg-navy/5 hover:text-navy transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`font-body font-medium text-sm px-4 py-2 rounded-md inline-block transition-colors ${
                    isActive(link.href)
                      ? 'text-white font-semibold'
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop right section */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={PHONE_TEL}
            className="font-body text-white text-sm font-medium inline-flex items-center gap-2 hover:text-white/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {PHONE_NUMBER}
          </a>
          <Link
            to="/contact"
            className="bg-amber hover:bg-amber/90 text-white font-body font-semibold text-sm px-5 py-2.5 rounded-md transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden text-white p-2 -mr-2"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 bg-navy z-40 flex flex-col lg:hidden"
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4">
              <Link to="/">
                <img
                  src="/lovable-uploads/03e057ec-f76b-425e-99fd-289e0c734fa3.webp"
                  alt="Romans Building Services"
                  className="h-10 w-auto"
                />
              </Link>
              <button
                type="button"
                className="text-white p-2 -mr-2"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-heading text-2xl font-semibold transition-colors ${
                    isActive(link.href) ? 'text-white font-semibold' : 'text-white hover:text-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile bottom section */}
            <div className="px-8 pb-10 flex flex-col gap-4">
              <a
                href={PHONE_TEL}
                className="font-body text-white text-lg font-medium inline-flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                {PHONE_NUMBER}
              </a>
              <Link
                to="/contact"
                className="bg-amber hover:bg-amber/90 text-white font-body font-semibold text-base px-5 py-3 rounded-md transition-colors text-center"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
