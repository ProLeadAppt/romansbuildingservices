import { selectArchiveImages } from '@/data/projectGallery';
import { Phone, Mail, MapPin, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QuoteCTAButton } from '@/components/quote';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Learn', to: '/learn' },
  { label: 'Repair References', to: '/case-studies' },
  { label: 'Common Problems', to: '/problems' },
  { label: 'Heritage Eras', to: '/heritage' },
  { label: 'Areas', to: '/areas' },
  { label: 'Our Work', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

// Popular suburbs — one column of high-value internal links for SEO + navigation
const popularSuburbs = [
  { label: 'Paddington', to: '/suburbs/paddington' },
  { label: 'Mosman', to: '/suburbs/mosman' },
  { label: 'Bondi', to: '/suburbs/bondi' },
  { label: 'Manly', to: '/suburbs/manly' },
  { label: 'Newtown', to: '/suburbs/newtown' },
  { label: 'Balmain', to: '/suburbs/balmain' },
  { label: 'Hawkesbury & Western Sydney', to: '/areas/hawkesbury-western-sydney' },
  { label: 'Strathfield', to: '/suburbs/strathfield' },
];

const galleryPreview = selectArchiveImages([
  'romansstone_1574104761_2180071211265247711_2394650725',
  'romansstone_1579724750_2227215093383768825_2394650725',
  'romansstone_1576440613_2199665757989086550_2394650725',
  'romansstone_1575057672_2188064802893944247_2394650725',
  'romansstone_1700556302_3240823616257706375_2394650725',
]);

export const Footer = () => {
  return (
    <footer className="bg-navy texture-grain">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <h2 className="font-heading text-2xl lg:text-3xl text-white">
              Ready to talk about your project?
            </h2>
            <p className="font-body text-white/50 mt-1">
              Call Minas directly or send us an enquiry.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:0414922276"
              className="font-heading text-xl text-white hover:text-white/80 transition">
              0414 922 276
            </a>
            <QuoteCTAButton
              className="btn-premium bg-amber text-navy font-body font-semibold px-8 py-3 rounded-md hover:bg-amber/90 transition-colors inline-flex items-center gap-2">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </QuoteCTAButton>
          </div>
        </div>
      </div>

      {/* Gallery strip */}
      <div className="border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {galleryPreview.map((image) => (
              <Link
                key={image.thumb}
                to="/gallery"
                className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
                <img
                  src={image.thumb}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div
        className="max-w-7xl mx-auto px-6 py-14 relative z-10">
        <div className="lg:grid lg:grid-cols-4 gap-12">
          {/* Column 1: Company */}
          <div>
            <Link to="/">
              <img
                src="/lovable-uploads/03e057ec-f76b-425e-99fd-289e0c734fa3.webp"
                alt="Romans Building Services"
                className="h-14 w-auto mb-4"
              />
            </Link>
            <p className="font-body text-sm text-white/40 leading-relaxed max-w-xs">
              Heritage restoration and masonry across Sydney since 1995.
              Minas Romanakis. Doing things properly from the start.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="mt-10 lg:mt-0">
            <h3 className="font-body text-xs font-medium text-white/40 uppercase tracking-[0.15em] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-white/60 hover:text-white transition link-animated">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Suburbs */}
          <div className="mt-10 lg:mt-0">
            <h3 className="font-body text-xs font-medium text-white/40 uppercase tracking-[0.15em] mb-5">
              Popular Suburbs
            </h3>
            <ul className="space-y-3">
              {popularSuburbs.map((suburb) => (
                <li key={suburb.to}>
                  <Link
                    to={suburb.to}
                    className="font-body text-sm text-white/60 hover:text-white transition link-animated">
                    {suburb.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="mt-10 lg:mt-0">
            <h3 className="font-body text-xs font-medium text-white/40 uppercase tracking-[0.15em] mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0414922276"
                  className="flex items-center gap-3 font-body text-sm text-white/60 hover:text-white transition">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  0414 922 276
                </a>
              </li>
              <li>
                <a
                  href="mailto:romanspropertyservices@gmail.com"
                  className="flex items-center gap-3 font-body text-sm text-white/60 hover:text-white transition">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  romanspropertyservices@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 font-body text-sm text-white/40">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                The Slopes, NSW — serving Hawkesbury and Western Sydney
              </li>
              <li>
                <a
                  href="https://www.instagram.com/romansstone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-sm text-white/60 hover:text-white transition">
                  <Instagram className="w-4 h-4 flex-shrink-0" />
                  @romansstone
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-7 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-2 font-body text-xs leading-relaxed text-white/65">
            <p>&copy; {new Date().getFullYear()} Romans Building Services. All rights reserved.</p>
            <p className="text-white/55">ABN: 85 004 290 080</p>
          </div>
          <a
            href="https://munyal.com.au"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Built by Munyal · Personally crafted by Tyson Kaye"
            className="group inline-flex min-h-11 max-w-full items-center border-l-2 border-amber/70 py-1 pl-4 font-body text-left transition-colors hover:border-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-4"
          >
            <span className="min-w-0">
              <span className="block text-sm leading-6 text-white/75">Built by <span className="font-heading text-lg font-semibold tracking-wide text-amber group-hover:underline underline-offset-4">Munyal</span></span>
              <span className="sr-only"> · </span>
              <span className="block text-xs leading-5 text-white/70">Personally crafted by <span className="text-white/90">Tyson Kaye</span></span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

