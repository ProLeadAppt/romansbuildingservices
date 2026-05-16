import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Phone,
  ArrowRight,
  Clock,
  MapPin,
} from 'lucide-react';
import { FAQSchema } from '@/components/LocalSEO/StructuredData';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { RelatedLinksBlock } from '@/components/RelatedLinksBlock';
import { QuoteCTAButton } from '@/components/quote';
import { PROBLEM_TO_SUBURBS } from '@/data/serviceProblemMap';
import { getSuburb } from '@/data/suburbs';

type UrgencyLevel = 'low' | 'medium' | 'high';

export interface RelatedService {
  title: string;
  href: string;
}

export interface ProblemFAQ {
  question: string;
  answer: string;
}

export interface ProblemPageProps {
  name: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  quickAnswer: string;
  whatItIs: string[];
  signs: string[];
  causes: string[];
  urgency: UrgencyLevel;
  urgencyNote: string;
  howWeFixIt: Array<{ step: string; detail: string }>;
  costBand: string;
  faqs: ProblemFAQ[];
  relatedServices: RelatedService[];
}

const SITE_URL = 'https://romansbuildingservices.com';

const urgencyBadge: Record<UrgencyLevel, { label: string; classes: string }> = {
  low: {
    label: 'Usually not urgent',
    classes: 'bg-green-100 text-green-900 border-green-300',
  },
  medium: {
    label: 'Should be looked at soon',
    classes: 'bg-amber-100 text-amber-900 border-amber-300',
  },
  high: {
    label: 'Get it assessed urgently',
    classes: 'bg-red-100 text-red-900 border-red-300',
  },
};

// Map each problem slug to its canonical Wikipedia entity (if one exists).
// These `about` references give AI/Google strong topical entity signals.
const PROBLEM_ENTITY_MAP: Record<string, Array<{ name: string; sameAs: string }>> = {
  'concrete-cancer': [
    { name: 'Concrete degradation', sameAs: 'https://en.wikipedia.org/wiki/Concrete_degradation' },
    { name: 'Reinforced concrete', sameAs: 'https://en.wikipedia.org/wiki/Reinforced_concrete' },
    { name: 'Spalling', sameAs: 'https://en.wikipedia.org/wiki/Spall' },
  ],
  'cracked-brick-walls': [
    { name: 'Masonry', sameAs: 'https://en.wikipedia.org/wiki/Masonry' },
    { name: 'Settlement (structural)', sameAs: 'https://en.wikipedia.org/wiki/Settlement_(structural)' },
  ],
  'failing-retaining-walls': [
    { name: 'Retaining wall', sameAs: 'https://en.wikipedia.org/wiki/Retaining_wall' },
    { name: 'Drainage', sameAs: 'https://en.wikipedia.org/wiki/Drainage' },
  ],
  'rising-damp': [
    { name: 'Rising damp', sameAs: 'https://en.wikipedia.org/wiki/Rising_damp' },
    { name: 'Damp proofing', sameAs: 'https://en.wikipedia.org/wiki/Damp_proofing' },
    { name: 'Lime mortar', sameAs: 'https://en.wikipedia.org/wiki/Lime_mortar' },
  ],
  'spalling-render': [
    { name: 'Spalling', sameAs: 'https://en.wikipedia.org/wiki/Spall' },
    { name: 'Stucco', sameAs: 'https://en.wikipedia.org/wiki/Stucco' },
  ],
  'crumbling-mortar': [
    { name: 'Repointing', sameAs: 'https://en.wikipedia.org/wiki/Repointing' },
    { name: 'Lime mortar', sameAs: 'https://en.wikipedia.org/wiki/Lime_mortar' },
    { name: 'Tuckpointing', sameAs: 'https://en.wikipedia.org/wiki/Tuckpointing' },
  ],
  'foundation-movement': [
    { name: 'Underpinning', sameAs: 'https://en.wikipedia.org/wiki/Underpinning' },
    { name: 'Settlement (structural)', sameAs: 'https://en.wikipedia.org/wiki/Settlement_(structural)' },
    { name: 'Expansive clay', sameAs: 'https://en.wikipedia.org/wiki/Expansive_clay' },
  ],
  'chimney-cracks': [
    { name: 'Chimney', sameAs: 'https://en.wikipedia.org/wiki/Chimney' },
    { name: 'Flashing (weatherproofing)', sameAs: 'https://en.wikipedia.org/wiki/Flashing_(weatherproofing)' },
  ],
  'efflorescence-salt-damage': [
    { name: 'Efflorescence', sameAs: 'https://en.wikipedia.org/wiki/Efflorescence' },
    { name: 'Masonry', sameAs: 'https://en.wikipedia.org/wiki/Masonry' },
  ],
  'leaking-balconies': [
    { name: 'Waterproofing', sameAs: 'https://en.wikipedia.org/wiki/Waterproofing' },
    { name: 'Balcony', sameAs: 'https://en.wikipedia.org/wiki/Balcony' },
  ],
  'tuckpointing-restoration': [
    { name: 'Tuckpointing', sameAs: 'https://en.wikipedia.org/wiki/Tuckpointing' },
    { name: 'Repointing', sameAs: 'https://en.wikipedia.org/wiki/Repointing' },
    { name: 'Lime mortar', sameAs: 'https://en.wikipedia.org/wiki/Lime_mortar' },
  ],
  'sandstone-weathering': [
    { name: 'Sandstone', sameAs: 'https://en.wikipedia.org/wiki/Sandstone' },
    { name: 'Weathering', sameAs: 'https://en.wikipedia.org/wiki/Weathering' },
    { name: 'Historic preservation', sameAs: 'https://en.wikipedia.org/wiki/Historic_preservation' },
  ],
  'damaged-lintels': [
    { name: 'Lintel', sameAs: 'https://en.wikipedia.org/wiki/Lintel_(architecture)' },
    { name: 'Corrosion', sameAs: 'https://en.wikipedia.org/wiki/Corrosion' },
  ],
  'cavity-wall-tie-failure': [
    { name: 'Cavity wall', sameAs: 'https://en.wikipedia.org/wiki/Cavity_wall' },
    { name: 'Wall tie', sameAs: 'https://en.wikipedia.org/wiki/Wall_tie' },
  ],
};

const buildProblemSchema = (props: ProblemPageProps) => {
  const entities = PROBLEM_ENTITY_MAP[props.slug] ?? [];
  const aboutRefs = entities.map((e) => ({ '@type': 'Thing', name: e.name, sameAs: e.sameAs }));

  // HowTo schema for "how we fix it" — improves chances of rich results
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How we fix ${props.name.toLowerCase()}`,
    description: props.metaDescription,
    step: props.howWeFixIt.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.step,
      text: s.detail,
    })),
  };

  // Article schema — helps the page show up for informational queries
  const articleSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.metaTitle,
    description: props.metaDescription,
    url: `${SITE_URL}/problems/${props.slug}`,
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
        url: `${SITE_URL}/lovable-uploads/03e057ec-f76b-425e-99fd-289e0c734fa3.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/problems/${props.slug}`,
    },
    ...(aboutRefs.length > 0 ? { about: aboutRefs } : {}),
  };

  return [howToSchema, articleSchema];
};

export const ProblemPageTemplate = (props: ProblemPageProps) => {
  const {
    name,
    slug,
    metaTitle,
    metaDescription,
    heroTagline,
    quickAnswer,
    whatItIs,
    signs,
    causes,
    urgency,
    urgencyNote,
    howWeFixIt,
    costBand,
    faqs,
    relatedServices,
  } = props;

  const canonical = `/problems/${slug}`;
  const badge = urgencyBadge[urgency];
  const schemas = buildProblemSchema(props);

  // Suburbs where we commonly see this problem — internal cross-links
  const suburbSlugs = PROBLEM_TO_SUBURBS[slug] ?? [];
  const relatedSuburbs = suburbSlugs
    .map((s) => {
      const sub = getSuburb(s);
      return sub ? { label: sub.name, href: `/suburbs/${s}`, sublabel: sub.parentAreaName } : null;
    })
    .filter((x): x is { label: string; href: string; sublabel: string } => x !== null);

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} canonical={canonical} />
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      <BreadcrumbSchema
        items={[
          { label: 'Problems', href: '/problems' },
          { label: name, href: canonical },
        ]}
      />
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

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
          <span className="font-body text-text-muted whitespace-nowrap">Problems</span>
          <ChevronRight className="w-3 h-3 text-text-muted/50 shrink-0" />
          <span className="font-body text-text-primary whitespace-nowrap">{name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 border px-3 py-1 rounded-full text-xs font-body font-medium mb-6 ${badge.classes}`}
          >
            <AlertCircle className="w-3.5 h-3.5" />
            {badge.label}
          </motion.div>
          <motion.h1
            className="font-heading text-4xl md:text-5xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {name}
          </motion.h1>
          <motion.p
            className="font-body text-white/80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {heroTagline}
          </motion.p>
        </div>
      </section>

      {/* Quick Answer (TL;DR for AI answer engines + busy visitors) */}
      <section className="py-10 bg-bg-light border-b border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-l-4 border-amber rounded-r-lg p-6 shadow-premium"
            itemScope
            itemType="https://schema.org/Answer"
          >
            <p
              className="font-body text-sm text-text-muted uppercase tracking-wider font-semibold mb-2"
              aria-hidden="true"
            >
              Quick answer
            </p>
            <p
              className="font-body text-lg text-text-primary leading-relaxed"
              itemProp="text"
            >
              {quickAnswer}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What it is */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl text-navy mb-6">
              What is {name.toLowerCase()}?
            </h2>
            {whatItIs.map((p, i) => (
              <p
                key={i}
                className="font-body text-text-secondary mb-4 leading-relaxed"
              >
                {p}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Signs + Causes (side by side) */}
      <section className="py-16 bg-bg-off-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-premium"
            >
              <h2 className="font-heading text-xl md:text-2xl text-navy mb-5">
                Signs to look for
              </h2>
              <ul className="space-y-3">
                {signs.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber mt-0.5 shrink-0" />
                    <span className="font-body text-text-secondary">{sign}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-premium"
            >
              <h2 className="font-heading text-xl md:text-2xl text-navy mb-5">
                Why it happens
              </h2>
              <ul className="space-y-3">
                {causes.map((cause) => (
                  <li key={cause} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-navy-light mt-0.5 shrink-0" />
                    <span className="font-body text-text-secondary">{cause}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Urgency */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`border-l-4 p-6 rounded-r-lg ${
              urgency === 'high'
                ? 'bg-red-50 border-red-500'
                : urgency === 'medium'
                  ? 'bg-amber-50 border-amber'
                  : 'bg-bg-light border-navy-light'
            }`}
          >
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-navy mt-1 shrink-0" />
              <div>
                <h3 className="font-heading text-lg text-navy mb-2">
                  How urgent is this?
                </h3>
                <p className="font-body text-text-secondary leading-relaxed">
                  {urgencyNote}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How we fix it */}
      <section className="py-16 bg-bg-off-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            className="font-heading text-2xl md:text-3xl text-navy mb-8 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How we fix it properly
          </motion.h2>
          <div className="space-y-4">
            {howWeFixIt.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-lg p-6 shadow-premium flex gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-navy text-white font-heading font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-body text-base font-semibold text-text-primary mb-1">
                    {item.step}
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-white border border-border rounded-lg"
          >
            <p className="font-body text-sm text-text-muted mb-1">Typical cost range</p>
            <p className="font-heading text-xl text-navy">{costBand}</p>
            <p className="font-body text-xs text-text-muted mt-2">
              Every job is different. We give a firm quote after inspection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl text-navy mb-8 text-center">
              Common questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-bg-light rounded-lg p-6"
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

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-12 bg-bg-light">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-body text-sm font-medium text-text-muted uppercase tracking-wider text-center mb-6">
              Services that fix this
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="font-body text-sm text-navy bg-white px-4 py-2 rounded-md shadow-premium hover:shadow-premium-lg transition-shadow"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Suburbs where we commonly see this problem */}
      {relatedSuburbs.length > 0 && (
        <RelatedLinksBlock
          heading={`Where we see ${name.toLowerCase()} most often`}
          intro="Some suburbs have more of this problem than others — the local housing stock, age, and coastal exposure all play a part. Click through for the local context."
          items={relatedSuburbs}
          icon={MapPin}
          columns={3}
          background="off-white"
        />
      )}

      {/* CTA */}
      <section className="bg-navy texture-grain py-16">
        <div className="max-w-3xl mx-auto text-center relative z-10 px-4">
          <h2 className="font-heading text-3xl text-white mb-4">
            Think you might have {name.toLowerCase()}?
          </h2>
          <p className="font-body text-white/70 mb-8">
            Send a photo or call Minas directly. We will tell you straight whether it needs doing
            now, or whether it can wait.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0414922276"
              className="btn-premium inline-flex items-center gap-2 bg-white text-navy font-body font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              0414 922 276
            </a>
            <QuoteCTAButton
              className="btn-premium inline-flex items-center gap-2 bg-amber text-navy font-body font-bold px-6 py-3 rounded-md hover:bg-amber/90 transition-colors"
            >
              Get it Inspected <ArrowRight className="w-4 h-4" />
            </QuoteCTAButton>
          </div>
        </div>
      </section>
    </>
  );
};
