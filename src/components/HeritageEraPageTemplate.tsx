import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight, Phone, ArrowRight, Calendar } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { FAQSchema } from '@/components/LocalSEO/StructuredData';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import type { HeritageEraData } from '@/data/heritage';

const SITE_URL = 'https://romansbuildingservices.com';

export const HeritageEraPageTemplate = ({ data }: { data: HeritageEraData }) => {
  const canonicalUrl = `${SITE_URL}/heritage/${data.slug}`;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
    { label: data.name, href: `/heritage/${data.slug}` },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.metaTitle,
    description: data.metaDescription,
    url: canonicalUrl,
    datePublished: '2026-05-15',
    dateModified: '2026-05-29',
    author: { '@type': 'Organization', name: 'Romans Building Services' },
    reviewedBy: {
      '@type': 'Person',
      name: 'Minas Romanakis',
      jobTitle: 'Founder and stonemason',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Romans Building Services',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.png` },
    },
    about: { '@type': 'Thing', name: data.name },
  };

  return (
    <>
      <SEOHead title={data.metaTitle} description={data.metaDescription} canonical={canonicalUrl} schemaJson={articleSchema} />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={data.faqs} />

      {/* Breadcrumb strip */}
      <nav className="bg-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex flex-wrap items-center gap-x-2 text-sm text-text-muted font-body">
            {breadcrumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-x-2">
                {i > 0 && <ChevronRight className="w-4 h-4 text-text-muted/50" />}
                {i < breadcrumbs.length - 1 ? (
                  <Link to={c.href} className="hover:text-navy">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-navy">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-navy py-20 md:py-24 texture-grain">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber/15 text-amber text-xs font-body mb-6"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{data.era}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-heading text-4xl md:text-5xl text-white mb-5"
          >
            {data.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-white/80 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            {data.heroTagline}
          </motion.p>
          <div className="mt-8">
            <a
              href="tel:+61414922276"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-amber text-navy font-body font-medium hover:bg-amber-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Minas — 0414 922 276
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-amber mb-3">
            Quick answer
          </p>
          <p className="font-body text-text-secondary text-lg leading-relaxed">
            Romans Building Services restores {data.name.toLowerCase()} across Sydney with
            materials and repair methods matched to the building era, suburb and original fabric.
          </p>
          <p className="font-body text-xs text-text-muted mt-4">Last updated: 2026-05-29</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {data.intro.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body text-text-secondary text-lg leading-relaxed mb-6"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Characteristics */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl text-navy mb-6">Defining characteristics</h2>
          <p className="font-body text-text-secondary mb-8">
            What makes {data.name.toLowerCase().replace(' restoration', '')} buildings recognisable, and what each detail means for restoration:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {data.characteristics.map((c, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-text-secondary">
                <CheckCircle className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Common issues */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl text-navy mb-3">What we see most often</h2>
          <p className="font-body text-text-muted mb-8">
            The issues that come up across most {data.name.toLowerCase().replace(' restoration', '')} buildings we assess.
          </p>
          <div className="space-y-8">
            {data.commonIssues.map((issue, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-l-2 border-amber pl-5"
              >
                <h3 className="font-heading text-xl text-navy mb-2">{issue.title}</h3>
                <p className="font-body text-text-secondary leading-relaxed">{issue.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl text-navy mb-6">How we approach this work</h2>
          <ul className="space-y-3">
            {data.ourApproach.map((step, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-text-secondary">
                <span className="font-heading text-amber font-semibold flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl text-navy mb-8">Common questions</h2>
          <div className="space-y-6">
            {data.faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-heading text-lg text-navy mb-2">{faq.question}</h3>
                <p className="font-body text-text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl text-navy mb-6">Related</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.relatedServices.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="block p-5 bg-white border border-stone-200 rounded-md hover:border-amber transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading text-navy">{s.title}</span>
                  <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-amber transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy texture-grain">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Got a {data.name.toLowerCase().replace(' restoration', '')} project?
          </h2>
          <p className="font-body text-white/80 text-lg mb-8">
            Call Minas for a real assessment. 30 years of heritage work across Sydney — no rushing, no cutting corners.
          </p>
          <a
            href="tel:+61414922276"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-md bg-amber text-navy font-body font-semibold hover:bg-amber-light transition-colors"
          >
            <Phone className="w-5 h-5" />
            0414 922 276
          </a>
        </div>
      </section>
    </>
  );
};

export default HeritageEraPageTemplate;
