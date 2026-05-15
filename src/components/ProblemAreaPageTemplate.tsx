import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, ChevronRight, Phone, MapPin, ArrowRight } from 'lucide-react';
import type { ProblemPageProps } from '@/components/ProblemPageTemplate';
import type { AreaProfile } from '@/data/areas';
import { SEOHead } from '@/components/SEOHead';
import { FAQSchema } from '@/components/LocalSEO/StructuredData';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';

const SITE_URL = 'https://romansbuildingservices.com';

interface ProblemAreaPageProps {
  problem: ProblemPageProps;
  area: AreaProfile;
  areaNote: string;
}

const urgencyBadge = {
  low: { label: 'Usually not urgent', classes: 'bg-green-100 text-green-900 border-green-300' },
  medium: { label: 'Should be looked at soon', classes: 'bg-amber-100 text-amber-900 border-amber-300' },
  high: { label: 'Get it assessed urgently', classes: 'bg-red-100 text-red-900 border-red-300' },
};

export const ProblemAreaPageTemplate = ({ problem, area, areaNote }: ProblemAreaPageProps) => {
  const canonicalUrl = `${SITE_URL}/problems/${problem.slug}/${area.slug}`;
  const metaTitle = `${problem.name} in ${area.name} | Romans Building Services`;
  const metaDescription = `${problem.name} in ${area.name}: signs, causes specific to local housing stock, and how we fix it properly. ${problem.urgency === 'high' ? 'Urgent assessment available. ' : ''}Romans Building Services — 30 years across Sydney.`;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Problems', href: '/problems' },
    { label: problem.name, href: `/problems/${problem.slug}` },
    { label: area.name, href: canonicalUrl.replace(SITE_URL, '') },
  ];

  const urgency = urgencyBadge[problem.urgency];

  // Combined schema: WebPage + Article keyed to this combo + FAQPage with
  // a localised first question, so the same FAQs don't duplicate exactly
  // across the standalone problem page and each combo page.
  const localFaqs = [
    {
      question: `Do you fix ${problem.name.toLowerCase()} in ${area.name}?`,
      answer: `Yes. We've worked across ${area.name} for years and ${problem.name.toLowerCase()} is one of the issues we see most often here. ${areaNote.split('. ').slice(0, 2).join('. ')}.`,
    },
    ...problem.faqs.slice(0, 3),
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metaTitle,
    description: metaDescription,
    url: canonicalUrl,
    about: { '@type': 'Place', name: area.name, containedInPlace: { '@type': 'City', name: 'Sydney' } },
    mentions: area.suburbs.slice(0, 5).map((s) => ({
      '@type': 'Place',
      name: s.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    })),
    author: { '@type': 'Organization', name: 'Romans Building Services' },
    publisher: {
      '@type': 'Organization',
      name: 'Romans Building Services',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.png` },
    },
  };

  return (
    <>
      <SEOHead title={metaTitle} description={metaDescription} canonical={canonicalUrl} schemaJson={articleSchema} />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={localFaqs} />

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
            <MapPin className="w-3.5 h-3.5" />
            <span>{area.name}, Sydney</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-heading text-4xl md:text-5xl text-white mb-5"
          >
            {problem.name} in {area.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-white/80 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            {problem.heroTagline}
          </motion.p>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <span
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-body border ${urgency.classes}`}
            >
              <AlertCircle className="w-4 h-4" />
              {urgency.label}
            </span>
            <a
              href="tel:+61414922276"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber text-navy font-body font-medium hover:bg-amber-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Minas — 0414 922 276
            </a>
          </div>
        </div>
      </section>

      {/* Area-specific context — the unique content for this combo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl text-navy mb-6"
          >
            Why we see this constantly in {area.shortName}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-text-secondary text-lg leading-relaxed mb-6"
          >
            {areaNote}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-text-secondary leading-relaxed"
          >
            {area.housingProfile}
          </motion.p>
        </div>
      </section>

      {/* Quick answer — pulled from problem data so each page has the canonical explanation */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl text-navy mb-4">What is {problem.name.toLowerCase()}?</h2>
          <p className="font-body text-text-secondary text-lg leading-relaxed">{problem.quickAnswer}</p>
        </div>
      </section>

      {/* Signs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl text-navy mb-6">Signs to watch for on your property</h2>
          <ul className="space-y-3">
            {problem.signs.map((sign, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-text-secondary">
                <CheckCircle className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Suburbs covered in this area */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl text-navy mb-2">Suburbs we cover in {area.name}</h2>
          <p className="font-body text-text-muted mb-6">
            We work right across {area.name}. Click a suburb for site-specific notes on housing stock and common issues.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {area.suburbs.map((slug) => {
              const name = slug
                .split('-')
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(' ');
              return (
                <Link
                  key={slug}
                  to={`/suburbs/${slug}`}
                  className="font-body text-navy hover:text-amber px-4 py-2 rounded-md bg-white border border-stone-200 hover:border-amber transition-colors inline-flex items-center justify-between"
                >
                  <span>{name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we fix it */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl text-navy mb-6">How we fix it properly</h2>
          <ol className="space-y-6">
            {problem.howWeFixIt.map((step, i) => (
              <li key={i} className="border-l-2 border-amber pl-5">
                <h3 className="font-heading text-xl text-navy mb-2">
                  {i + 1}. {step.step}
                </h3>
                <p className="font-body text-text-secondary leading-relaxed">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related links */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl text-navy mb-6">Related</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to={`/problems/${problem.slug}`}
              className="block p-5 bg-white border border-stone-200 rounded-md hover:border-amber transition-colors"
            >
              <div className="font-heading text-navy mb-1">Full {problem.name.toLowerCase()} guide</div>
              <div className="font-body text-sm text-text-muted">Causes, fix process, costs and FAQs.</div>
            </Link>
            <Link
              to={area.href}
              className="block p-5 bg-white border border-stone-200 rounded-md hover:border-amber transition-colors"
            >
              <div className="font-heading text-navy mb-1">{area.name} area page</div>
              <div className="font-body text-sm text-text-muted">All the services we offer across {area.name}.</div>
            </Link>
            {problem.relatedServices.slice(0, 2).map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="block p-5 bg-white border border-stone-200 rounded-md hover:border-amber transition-colors"
              >
                <div className="font-heading text-navy mb-1">{s.title}</div>
                <div className="font-body text-sm text-text-muted">Service detail and how we work.</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy texture-grain">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Got {problem.name.toLowerCase()} in {area.name}?
          </h2>
          <p className="font-body text-white/80 text-lg mb-8">
            Call Minas for a real assessment. We give straight answers and proper quotes — no high-pressure sales.
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

export default ProblemAreaPageTemplate;
