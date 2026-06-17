import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { caseStudies } from '@/data/caseStudies';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { QuoteCTAButton } from '@/components/quote';

const SITE_URL = 'https://romansbuildingservices.com';

const CollectionPageSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Case Studies — Romans Building Services',
    description:
      'Real projects from Romans Building Services — heritage restoration, sandstone work, concrete repair, foundation underpinning across Sydney.',
    url: `${SITE_URL}/case-studies`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: caseStudies.map((cs, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/case-studies/${cs.slug}`,
        name: `${cs.primaryService} — ${cs.suburbName}`,
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

const CaseStudiesIndexPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Case Studies — Real Sydney Building & Restoration Projects"
        description="Real projects from Romans Building Services across Sydney — heritage church restoration, sandstone seawalls, concrete cancer repair, foundation underpinning. Each case study shows the problem, the fix, and the result."
        canonical="/case-studies"
      />
      <CollectionPageSchema />
      <BreadcrumbSchema items={[{ label: 'Case Studies', href: '/case-studies' }]} />

      {/* Hero */}
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-xs font-body mb-6 border border-white/20">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Case Studies
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              Real Sydney projects. Real problems. Real results.
            </h1>
            <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed">
              Every job below was photographed on site by the team that did the work.
              No stock photos, no AI renders. The problem, the method, and the result —
              written the way we would tell a client over the phone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.article
                key={cs.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border flex flex-col"
              >
                <Link to={`/case-studies/${cs.slug}`} className="block aspect-[4/3] overflow-hidden bg-bg-light">
                  <img
                    src={cs.hero.src}
                    alt={cs.hero.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="font-body text-xs uppercase tracking-wider text-accent mb-2">
                    {cs.primaryService}
                  </div>
                  <h2 className="font-heading text-xl font-bold text-navy mb-3 leading-tight">
                    <Link to={`/case-studies/${cs.slug}`} className="hover:text-accent transition-colors">
                      {cs.suburbName}
                    </Link>
                  </h2>
                  <p className="font-body text-text-muted text-sm mb-4 line-clamp-3">
                    {cs.clientType}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-sm font-body">
                    <div className="flex items-center gap-3 text-text-muted">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {cs.suburbName}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {cs.completedYear}
                      </span>
                    </div>
                    <Link
                      to={`/case-studies/${cs.slug}`}
                      className="text-navy hover:text-accent font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Got a project like one of these?
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Send a few photos and a short description. Minas calls back the same day.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <QuoteCTAButton
              service="not-sure"
              className="bg-accent hover:bg-accent/90 text-navy font-body font-semibold px-8 py-4 rounded transition-colors inline-flex items-center gap-2"
            >
              Get a quote
              <ArrowRight className="w-4 h-4" />
            </QuoteCTAButton>
            <a
              href="tel:0414922276"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-body font-semibold px-8 py-4 rounded transition-colors"
            >
              Call 0414 922 276
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesIndexPage;
