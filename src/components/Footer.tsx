import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUp, staggerContainer } from '@/utils/animations';
import { QuoteCTAButton } from '@/components/quote';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
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
  { label: 'Strathfield', to: '/suburbs/strathfield' },
];

const galleryPreview = [
  '/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp',
  '/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp',
  '/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp',
  '/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp',
  '/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp',
];

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
              className="font-heading text-xl text-white hover:text-white/80 transition"
            >
              0414 922 276
            </a>
            <QuoteCTAButton
              className="btn-premium bg-amber text-white font-body font-medium px-8 py-3 rounded-md hover:bg-amber/90 transition-colors inline-flex items-center gap-2"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </QuoteCTAButton>
          </div>
        </div>
      </div>

      {/* Gallery strip */}
      <div className="border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {galleryPreview.map((img, i) => (
              <Link
                key={i}
                to="/gallery"
                className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden opacity-60 hover:opacity-100 transition-opacity"
              >
                <img
                  src={img}
                  alt="Project showcase"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-14 relative z-10"
      >
        <div className="lg:grid lg:grid-cols-4 gap-12">
          {/* Column 1: Company */}
          <motion.div variants={fadeUp}>
            <Link to="/">
              <img
                src="/lovable-uploads/03e057ec-f76b-425e-99fd-289e0c734fa3.webp"
                alt="Romans Building Services"
                className="h-14 w-auto mb-4"
              />
            </Link>
            <p className="font-body text-sm text-white/40 leading-relaxed max-w-xs">
              Heritage restoration and masonry across Sydney since 1995.
              Minas Romanakis. 30 years of doing things properly.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={fadeUp} className="mt-10 lg:mt-0">
            <h3 className="font-body text-xs font-medium text-white/40 uppercase tracking-[0.15em] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-white/60 hover:text-white transition link-animated"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Popular Suburbs */}
          <motion.div variants={fadeUp} className="mt-10 lg:mt-0">
            <h3 className="font-body text-xs font-medium text-white/40 uppercase tracking-[0.15em] mb-5">
              Popular Suburbs
            </h3>
            <ul className="space-y-3">
              {popularSuburbs.map((suburb) => (
                <li key={suburb.to}>
                  <Link
                    to={suburb.to}
                    className="font-body text-sm text-white/60 hover:text-white transition link-animated"
                  >
                    {suburb.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div variants={fadeUp} className="mt-10 lg:mt-0">
            <h3 className="font-body text-xs font-medium text-white/40 uppercase tracking-[0.15em] mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0414922276"
                  className="flex items-center gap-3 font-body text-sm text-white/60 hover:text-white transition"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  0414 922 276
                </a>
              </li>
              <li>
                <a
                  href="mailto:romanspropertyservices@gmail.com"
                  className="flex items-center gap-3 font-body text-sm text-white/60 hover:text-white transition"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  romanspropertyservices@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 font-body text-sm text-white/40">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Strathfield, NSW
              </li>
              <li>
                <a
                  href="https://www.instagram.com/romansstone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-sm text-white/60 hover:text-white transition"
                >
                  <Instagram className="w-4 h-4 flex-shrink-0" />
                  @romansstone
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/30">
            &copy; 2025 Romans Building Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="font-body text-xs text-white/30">
              ABN: 49 641 892 677
            </p>
            <span className="text-white/15">|</span>
            <a
              href="https://munyal.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-white/25 hover:text-white/40 transition-colors"
            >
              Built by Munyal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
