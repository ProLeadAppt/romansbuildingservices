import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ChevronRight, Phone, Hammer } from 'lucide-react';
import {
  PlaceSchema,
  ServiceSchema,
  FAQSchema,
} from '@/components/LocalSEO/StructuredData';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { RelatedLinksBlock } from '@/components/RelatedLinksBlock';

const SUBURB_SERVICE_LINKS = [
  { label: 'Stone & Masonry', href: '/services/masonry', sublabel: 'Brick, stone, retaining walls' },
  { label: 'Heritage Restoration', href: '/services/heritage-restoration', sublabel: 'Period homes & listed buildings' },
  { label: 'Structural Repairs', href: '/services/structural-repairs', sublabel: 'Crack stitching, lintels' },
  { label: 'Concrete Repairs', href: '/services/concrete-repairs', sublabel: 'Concrete cancer, spalling' },
  { label: 'Foundation Repairs', href: '/services/foundation-repairs', sublabel: 'Underpinning, settlement' },
  { label: 'Building Restoration', href: '/services/building-restoration', sublabel: 'Full facade & interior' },
  { label: 'Remedial Building', href: '/services/remedial-building', sublabel: 'Strata & defects' },
];

export interface NearbySuburb {
  name: string;
  href: string;
}

export interface SuburbFAQ {
  question: string;
  answer: string;
}

export interface SuburbPageProps {
  name: string;
  slug: string;
  parentAreaName: string;
  parentAreaHref: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  intro: string[];
  housingContext: string;
  services: string[];
  faqs: SuburbFAQ[];
  nearbySuburbs: NearbySuburb[];
}

const SITE_URL = 'https://romansbuildingservices.com';

export const SuburbPageTemplate = ({
  name,
  slug,
  parentAreaName,
  parentAreaHref,
  metaTitle,
  metaDescription,
  heroTagline,
  intro,
  housingContext,
  services,
  faqs,
  nearbySuburbs,
}: SuburbPageProps) => {
  const canonical = `/suburbs/${slug}`;
  const fullUrl = `${SITE_URL}${canonical}`;

  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonical={canonical}
      />
      <PlaceSchema
        name={`${name}, Sydney`}
        description={metaDescription}
        url={fullUrl}
      />
      <ServiceSchema
        service={`Masonry and Building Services — ${name}`}
        description={metaDescription}
        url={fullUrl}
      />
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      <BreadcrumbSchema
        items={[
          { label: 'Areas', href: '/areas' },
          { label: parentAreaName, href: parentAreaHref },
          { label: name, href: canonical },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-bg-light border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm overflow-x-auto">
          <Link
            to="/"
            className="font-body text-text-muted hover:text-navy transition-colors whitespace-nowrap"
          >
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-text-muted/50 shrink-0" />
          <Link
            to="/areas"
            className="font-body text-text-muted hover:text-navy transition-colors whitespace-nowrap"
          >
            Areas
          </Link>
          <ChevronRight className="w-3 h-3 text-text-muted/50 shrink-0" />
          <Link
            to={parentAreaHref}
            className="font-body text-text-muted hover:text-navy transition-colors whitespace-nowrap"
          >
            {parentAreaName}
          </Link>
          <ChevronRight className="w-3 h-3 text-text-muted/50 shrink-0" />
          <span className="font-body text-text-primary whitespace-nowrap">{name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-navy py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="font-heading text-4xl md:text-5xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Masonry &amp; Restoration in {name}
          </motion.h1>
          <motion.p
            className="font-body text-white/70 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {heroTagline}
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {intro.map((paragraph, i) => (
            <motion.p
              key={i}
              className="font-body text-text-secondary mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Housing stock context */}
      <section className="py-16 bg-bg-off-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl text-navy mb-6">
              What {name} homes and buildings need
            </h2>
            <p className="font-body text-text-secondary leading-relaxed">
              {housingContext}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl text-navy mb-8">
              What we do in {name}
            </h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green mt-0.5 shrink-0" />
                  <span className="font-body text-text-secondary">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services we offer in this suburb — cross-links to every tier-1 service */}
      <RelatedLinksBlock
        heading={`Masonry & building services we offer in ${name}`}
        intro="Full scope of work Romans Building Services handles across Sydney. Click through for detail on each service."
        items={SUBURB_SERVICE_LINKS}
        icon={Hammer}
        columns={3}
        background="light"
      />

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-16 bg-bg-off-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl text-navy mb-8 text-center">
              Common Questions — {name}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-lg p-6 shadow-premium"
                >
                  <h3 className="font-body text-base font-semibold text-text-primary mb-2">
                    {faq.question}
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Nearby suburbs */}
      {nearbySuburbs.length > 0 && (
        <section className="py-12 bg-bg-light">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-body text-sm font-medium text-text-muted uppercase tracking-wider text-center mb-6">
              Nearby suburbs we also work in
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbySuburbs.map((sub) => (
                <Link
                  key={sub.href}
                  to={sub.href}
                  className="font-body text-sm text-navy bg-white px-4 py-2 rounded-md shadow-premium hover:shadow-premium-lg transition-shadow"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                to={parentAreaHref}
                className="inline-flex items-center gap-1 font-body text-sm text-navy hover:text-navy-light transition-colors"
              >
                See all of {parentAreaName} <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy texture-grain py-16">
        <div className="max-w-3xl mx-auto text-center relative z-10 px-4">
          <h2 className="font-heading text-3xl text-white mb-4">
            Need a quote in {name}?
          </h2>
          <p className="font-body text-white/70 mb-8">
            Call Minas directly or fill in the form. We will get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0414922276"
              className="btn-premium inline-flex items-center gap-2 bg-white text-navy font-body font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              0414 922 276
            </a>
            <Link
              to="/contact"
              className="btn-premium inline-flex items-center gap-2 bg-amber text-navy font-body font-bold px-6 py-3 rounded-md hover:bg-amber/90 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
