import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { caseStudies } from '@/data/caseStudies';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { QuoteCTAButton } from '@/components/quote';

const SITE_URL = 'https://romansbuildingservices.com';

const CollectionPageSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Repair References — Romans Building Services',
    description:
      'General repair questions and related services for masonry, heritage and structural work. These reference pages are not completed-project records.',
    url: `${SITE_URL}/case-studies`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: caseStudies.length,
      itemListElement: caseStudies.map((cs, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/case-studies/${cs.slug}`,
        name: cs.metaTitle,
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
        title="Repair References | Case-Study Archive"
        description="Explore masonry, heritage and structural repair planning questions, with links to related services. General guidance, not completed-project records."
        canonical="/case-studies"
      />
      <CollectionPageSchema />
      <BreadcrumbSchema items={[{ label: 'Home', href: '/' }, { label: 'Repair References', href: '/case-studies' }]} />

      {/* Hero */}
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-xs font-body mb-6 border border-white/20">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Repair References
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              Repair questions and reference pages.
            </h1>
            <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed">
              Explore planning questions for masonry, heritage and structural repairs. These reference pages offer general guidance, not completed-project records.
            </p>
          </div>
        </div>
      </section>

      {/* Authority hubs */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { label: 'Learn hub', href: '/learn', note: 'Practical guides to masonry, heritage and building repairs.' },
              { label: 'Heritage hub', href: '/heritage', note: 'Era-led restoration pages for period homes and listed buildings.' },
              { label: 'Masonry service', href: '/services/masonry', note: 'Primary service page for brick, block, stone and repointing.' },
              { label: 'Remedial building', href: '/services/remedial-building', note: 'Information about building defects and strata repairs.' },
            ].map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="group bg-bg-light rounded-xl border border-gray-200 p-5 hover:border-navy/30 hover:shadow-sm transition-all">
                <h3 className="font-heading text-xl text-text-primary mb-2 group-hover:text-navy transition-colors">
                  {page.label}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm">{page.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <article
                key={cs.slug}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border flex flex-col">

                <div className="p-6 flex-1 flex flex-col">
                  <div className="font-body text-xs uppercase tracking-wider text-accent mb-2">
                    {cs.primaryService}
                  </div>
                  <h2 className="font-heading text-xl font-bold text-navy mb-3 leading-tight">
                    <Link to={`/case-studies/${cs.slug}`} className="hover:text-accent transition-colors">
                      {cs.metaTitle}
                    </Link>
                  </h2>
                  <p className="font-body text-text-muted text-sm mb-4 line-clamp-3">
                    {cs.metaDescription}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-sm font-body">
                    <span className="text-text-muted">Reference page</span>
                    <Link
                      to={`/case-studies/${cs.slug}`}
                      className="text-navy hover:text-accent font-semibold inline-flex items-center gap-1 transition-colors">
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Have a repair question?
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Send a few photos and a short description. Minas can discuss an assessment and practical next steps.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <QuoteCTAButton
              initialService="not-sure"
              className="bg-accent hover:bg-accent/90 text-navy font-body font-semibold px-8 py-4 rounded transition-colors inline-flex items-center gap-2">
              Get a quote
              <ArrowRight className="w-4 h-4" />
            </QuoteCTAButton>
            <a
              href="tel:0414922276"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-body font-semibold px-8 py-4 rounded transition-colors">
              Call 0414 922 276
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesIndexPage;
