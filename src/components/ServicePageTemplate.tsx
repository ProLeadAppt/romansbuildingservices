import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, ChevronRight, AlertCircle, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '@/components/LocalSEO/StructuredData';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { SEOHead } from '@/components/SEOHead';
import { RelatedLinksBlock } from '@/components/RelatedLinksBlock';
import { SERVICE_TO_PROBLEMS, SERVICE_TO_SUBURBS } from '@/data/serviceProblemMap';
import { getProblem } from '@/data/problems';
import { getSuburb } from '@/data/suburbs';
import { fadeUp, fadeUpBlur, scaleReveal, staggerContainer } from '@/utils/animations';

interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceLink {
  title: string;
  href: string;
}

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ServicePageProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string[];
  features: ServiceFeature[];
  faqs: FAQ[];
  galleryImages?: string[];
  breadcrumbs?: BreadcrumbItem[];
  parentService?: ServiceLink;
  childServices?: ServiceLink[];
  siblingServices?: ServiceLink[];
}

export const ServicePageTemplate = ({
  title,
  metaTitle,
  metaDescription,
  heroImage,
  intro,
  features,
  faqs,
  galleryImages = [],
  breadcrumbs = [],
  parentService,
  childServices = [],
  siblingServices = [],
}: ServicePageProps) => {
  const location = useLocation();

  // Cross-link to problems this service fixes + suburbs where it's most relevant
  const problemSlugs = SERVICE_TO_PROBLEMS[title] ?? [];
  const suburbSlugs = SERVICE_TO_SUBURBS[title] ?? [];
  const relatedProblems = problemSlugs
    .map((slug) => {
      const p = getProblem(slug);
      return p ? { label: p.name, href: `/problems/${slug}` } : null;
    })
    .filter((x): x is { label: string; href: string } => x !== null);
  const relatedSuburbs = suburbSlugs
    .map((slug) => {
      const s = getSuburb(slug);
      return s ? { label: s.name, href: `/suburbs/${slug}`, sublabel: s.parentAreaName } : null;
    })
    .filter((x): x is { label: string; href: string; sublabel: string } => x !== null);

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={location.pathname}
        ogImage={heroImage}
      />
      <ServiceSchema
        service={title}
        description={metaDescription}
        url={`https://romansbuildingservices.com${location.pathname}`}
      />
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      {breadcrumbs.length > 0 && <BreadcrumbSchema items={breadcrumbs} />}

      {/* Breadcrumb bar */}
      {breadcrumbs.length > 0 && (
        <div className="bg-bg-light border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm overflow-x-auto">
            <Link to="/" className="font-body text-text-muted hover:text-navy transition-colors whitespace-nowrap">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-text-muted/50 shrink-0" />
                {crumb.href ? (
                  <Link
                    to={crumb.href}
                    className="font-body text-text-muted hover:text-navy transition-colors whitespace-nowrap"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-body text-text-primary whitespace-nowrap">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover img-enhanced"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/60 to-navy/40" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4 py-24"
        >
          {parentService && (
            <Link
              to={parentService.href}
              className="inline-flex items-center gap-1 font-body text-sm text-white/60 hover:text-white/80 transition-colors mb-4"
            >
              <ArrowRight className="w-3 h-3 rotate-180" />
              {parentService.title}
            </Link>
          )}
          <h1 className="font-heading text-4xl md:text-5xl text-white text-shadow-strong">
            {title}
          </h1>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          {intro.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-body text-lg text-text-secondary mb-6 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Sub-Services Grid (Tier 1 pages only) */}
      {childServices.length > 0 && (
        <section className="py-16 bg-bg-light px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              variants={fadeUpBlur}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-heading text-3xl text-text-primary text-center mb-4"
            >
              Specialised Services
            </motion.h2>
            <p className="font-body text-text-muted text-center mb-12 max-w-xl mx-auto">
              We cover all aspects of {title.toLowerCase()}. Click through for details on each.
            </p>
            <motion.div
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {childServices.map((child) => (
                <motion.div key={child.href} variants={scaleReveal}>
                  <Link
                    to={child.href}
                    className="group flex items-center justify-between bg-white rounded-lg p-5 shadow-premium hover:shadow-premium-lg transition-shadow"
                  >
                    <span className="font-body text-sm font-medium text-text-primary group-hover:text-navy transition-colors">
                      {child.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-navy transition-colors shrink-0" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Features */}
      {features.length > 0 && (
        <section className={`py-16 ${childServices.length === 0 ? 'bg-bg-light' : ''} px-4`}>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl text-text-primary text-center mb-12">
              What We Cover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-premium"
                >
                  <feature.icon className="w-8 h-8 text-navy mb-4" />
                  <h3 className="font-body text-lg font-medium text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-text-muted">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl text-text-primary text-center mb-12">
              Recent Projects
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  variants={scaleReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-lg overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`${title} project ${i + 1}`}
                    loading="lazy"
                    className="w-full h-48 md:h-56 object-cover hover-scale img-enhanced"
                  />
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 font-body text-navy hover:text-navy-light transition-colors link-animated"
              >
                See all our work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-16 bg-bg-off-white px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl text-text-primary text-center mb-12">
              Common Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-premium"
                >
                  <h3 className="font-body text-base font-medium text-text-primary mb-2">
                    {faq.question}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Problems this service fixes (tier-1 pages) */}
      {relatedProblems.length > 0 && (
        <RelatedLinksBlock
          heading={`Problems ${title.toLowerCase()} fixes`}
          intro="If you are seeing any of these, this is the work we do. Each guide explains the signs, causes and proper repair."
          items={relatedProblems}
          icon={AlertCircle}
          columns={3}
          background="off-white"
        />
      )}

      {/* Suburbs where we do this work */}
      {relatedSuburbs.length > 0 && (
        <RelatedLinksBlock
          heading={`Where we do ${title.toLowerCase()}`}
          intro="Recent work across these Sydney suburbs. Click through for local context on the housing stock and common issues we see."
          items={relatedSuburbs}
          icon={MapPin}
          columns={3}
          background="light"
        />
      )}

      {/* Sibling Services (Tier 2 pages only) */}
      {siblingServices.length > 0 && (
        <section className="py-12 px-4 bg-bg-light">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-body text-sm font-medium text-text-muted uppercase tracking-wider text-center mb-6">
              Related Services
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {siblingServices.map((sib) => (
                <Link
                  key={sib.href}
                  to={sib.href}
                  className="font-body text-sm text-navy bg-white px-4 py-2 rounded-md shadow-premium hover:shadow-premium-lg transition-shadow link-animated"
                >
                  {sib.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy texture-grain py-16 px-4">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-heading text-3xl text-white mb-4">
            Need a quote?
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
              className="btn-premium inline-flex items-center gap-2 bg-amber text-white font-body font-medium px-6 py-3 rounded-md hover:bg-amber/90 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 px-4 bg-bg-off-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-sm text-text-muted mb-4">
            We provide {title.toLowerCase()} services across Greater Sydney
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Sydney CBD', href: '/areas/sydney-cbd' },
              { label: 'Eastern Suburbs', href: '/areas/eastern-suburbs' },
              { label: 'North Shore', href: '/areas/north-shore' },
              { label: 'Northern Beaches', href: '/areas/northern-beaches' },
              { label: 'Inner West', href: '/areas/inner-west' },
              { label: 'Greater Sydney', href: '/areas/greater-sydney' },
            ].map((area) => (
              <Link
                key={area.href}
                to={area.href}
                className="font-body text-xs text-text-muted hover:text-navy transition-colors"
              >
                {area.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
