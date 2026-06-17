import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Phone, CheckCircle2, MapPin, Calendar, ArrowRight, Quote } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { FAQSchema } from '@/components/LocalSEO/StructuredData';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { QuoteCTAButton } from '@/components/quote';
import type { CaseStudy } from '@/data/caseStudies';

const SITE_URL = 'https://romansbuildingservices.com';

const CaseStudySchema = ({ cs }: { cs: CaseStudy }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: cs.metaTitle,
    description: cs.metaDescription,
    image: [`${SITE_URL}${cs.hero.src.startsWith('/') ? cs.hero.src : `/${cs.hero.src}`}`],
    datePublished: `${cs.completedYear}-01-01`,
    dateModified: `${cs.completedYear}-12-31`,
    author: {
      '@type': 'Organization',
      name: 'Romans Building Services',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Romans Building Services',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og-image.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/case-studies/${cs.slug}`,
    },
    about: {
      '@type': 'Service',
      name: cs.primaryService,
      url: `${SITE_URL}${cs.primaryServiceHref}`,
    },
    contentLocation: {
      '@type': 'Place',
      name: `${cs.suburbName}, Sydney, NSW`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface CaseStudyTemplateProps {
  cs: CaseStudy;
}

export const CaseStudyTemplate = ({ cs }: CaseStudyTemplateProps) => {
  const canonical = `/case-studies/${cs.slug}`;
  const fullUrl = `${SITE_URL}${canonical}`;
  const allImages = [cs.hero, ...cs.gallery];

  return (
    <>
      <SEO
        title={cs.metaTitle}
        description={cs.metaDescription}
        canonical={canonical}
        ogImage={cs.hero.src.startsWith('http') ? cs.hero.src : `${SITE_URL}${cs.hero.src.startsWith('/') ? cs.hero.src : `/${cs.hero.src}`}`}
      />
      <CaseStudySchema cs={cs} />
      <FAQSchema faqs={cs.faqs} />
      <BreadcrumbSchema
        items={[
          { label: 'Case Studies', href: '/case-studies' },
          { label: cs.suburbName, href: `/suburbs/${cs.suburbSlug}` },
          { label: cs.primaryService, href: cs.primaryServiceHref },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-bg-light border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm overflow-x-auto">
          <Link to="/" className="font-body text-text-muted hover:text-navy transition-colors whitespace-nowrap">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-text-muted/50 shrink-0" />
          <Link to="/case-studies" className="font-body text-text-muted hover:text-navy transition-colors whitespace-nowrap">
            Case Studies
          </Link>
          <ChevronRight className="w-3 h-3 text-text-muted/50 shrink-0" />
          <span className="font-body text-text-primary whitespace-nowrap">{cs.suburbName}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cs.hero.src}
            alt={cs.hero.alt}
            className="w-full h-full object-cover opacity-50"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-xs font-body mb-6 border border-white/20">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Case Study
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              {cs.primaryService} — {cs.suburbName}
            </h1>
            <p className="font-body text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              {cs.metaDescription}
            </p>
            <div className="flex flex-wrap gap-4 mb-8 text-sm font-body">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{cs.suburbName}, Sydney</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded">
                <Calendar className="w-4 h-4 text-accent" />
                <span>Completed {cs.completedYear}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{cs.durationWeeks} weeks on site</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <QuoteCTAButton
                service={cs.primaryService.toLowerCase().includes('heritage')
                  ? 'heritage-restoration'
                  : cs.primaryService.toLowerCase().includes('concrete')
                  ? 'concrete-repair'
                  : cs.primaryService.toLowerCase().includes('foundation')
                  ? 'foundation'
                  : cs.primaryService.toLowerCase().includes('structural')
                  ? 'structural-repair'
                  : cs.primaryService.toLowerCase().includes('brick') || cs.primaryService.toLowerCase().includes('repoint')
                  ? 'brickwork-repointing'
                  : 'stonework'}
                className="bg-accent hover:bg-accent/90 text-navy font-body font-semibold px-6 py-3 rounded transition-colors inline-flex items-center gap-2"
              >
                Get a quote for similar work
                <ArrowRight className="w-4 h-4" />
              </QuoteCTAButton>
              <a
                href="tel:0414922276"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-body font-semibold px-6 py-3 rounded transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                0414 922 276
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project snapshot */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-navy">{cs.suburbName}</div>
              <div className="font-body text-sm text-text-muted mt-1">Location</div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-navy">{cs.clientType}</div>
              <div className="font-body text-sm text-text-muted mt-1">Client</div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-navy">{cs.durationWeeks} wks</div>
              <div className="font-body text-sm text-text-muted mt-1">Duration</div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-navy">{cs.completedYear}</div>
              <div className="font-body text-sm text-text-muted mt-1">Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block font-body text-sm text-accent uppercase tracking-wider mb-3">
              The Problem
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">
              What was wrong when we arrived
            </h2>
            <div className="space-y-5 font-body text-lg text-text-primary leading-relaxed">
              {cs.problem.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery between sections */}
      {cs.gallery.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cs.gallery.map((img, i) => (
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative overflow-hidden rounded-lg shadow-md bg-bg-light aspect-[4/3]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {img.caption && (
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white text-sm font-body p-4">
                      {img.caption}
                    </figcaption>
                  )}
                </motion.figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* The Solution */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block font-body text-sm text-accent uppercase tracking-wider mb-3">
              What We Did
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 leading-tight">
              How we fixed it
            </h2>
            <div className="space-y-5 font-body text-lg text-white/90 leading-relaxed">
              {cs.solution.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Result + Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block font-body text-sm text-accent uppercase tracking-wider mb-3">
              The Result
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">
              What the client got
            </h2>
            <div className="space-y-5 font-body text-lg text-text-primary leading-relaxed">
              {cs.result.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>

          {cs.testimonial && (
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 relative bg-bg-light border-l-4 border-accent p-8 md:p-10 rounded-r-lg"
            >
              <Quote className="absolute top-6 left-6 w-10 h-10 text-accent/20" />
              <blockquote className="relative pl-10">
                <p className="font-body text-xl md:text-2xl text-text-primary leading-relaxed italic mb-4">
                  {cs.testimonial.quote}
                </p>
                <figcaption className="font-body text-sm text-text-muted">
                  — {cs.testimonial.attribution}
                </figcaption>
              </blockquote>
            </motion.figure>
          )}
        </div>
      </section>

      {/* Related services + suburb links */}
      <section className="py-16 bg-bg-light border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8">
            Related services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cs.relatedServices.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group bg-white border border-border hover:border-accent rounded-lg p-5 transition-colors"
              >
                <div className="font-heading font-semibold text-navy group-hover:text-accent transition-colors flex items-center justify-between">
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="font-body text-text-muted">
              <Link to={`/suburbs/${cs.suburbSlug}`} className="text-navy hover:text-accent underline">
                More work we have done in {cs.suburbName}
              </Link>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 font-body text-navy hover:text-accent transition-colors"
            >
              <span>See all case studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {cs.faqs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-block font-body text-sm text-accent uppercase tracking-wider mb-3">
              FAQs
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-10 leading-tight">
              Questions about {cs.primaryService.toLowerCase()}
            </h2>
            <div className="space-y-6">
              {cs.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="border-b border-border pb-6 last:border-b-0"
                >
                  <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-body text-text-primary leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Have a job like this one?
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Send a few photos and a short description. Minas calls back the same day with either a quote, a site visit time, or an honest "not our job."
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <QuoteCTAButton
              service={cs.primaryService.toLowerCase().includes('heritage')
                ? 'heritage-restoration'
                : cs.primaryService.toLowerCase().includes('concrete')
                ? 'concrete-repair'
                : cs.primaryService.toLowerCase().includes('foundation')
                ? 'foundation'
                : cs.primaryService.toLowerCase().includes('structural')
                ? 'structural-repair'
                : cs.primaryService.toLowerCase().includes('brick') || cs.primaryService.toLowerCase().includes('repoint')
                ? 'brickwork-repointing'
                : 'stonework'}
              className="bg-accent hover:bg-accent/90 text-navy font-body font-semibold px-8 py-4 rounded transition-colors inline-flex items-center gap-2"
            >
              Get a quote
              <ArrowRight className="w-4 h-4" />
            </QuoteCTAButton>
            <a
              href="tel:0414922276"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-body font-semibold px-8 py-4 rounded transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Minas on 0414 922 276
            </a>
          </div>
          <div className="mt-8 text-sm font-body text-white/60">
            All photos on this page are from real Romans Building Services jobs. No stock images, no AI renders.
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyTemplate;
