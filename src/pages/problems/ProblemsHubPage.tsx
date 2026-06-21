import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowRight, Phone } from 'lucide-react';
import { CollectionPageSchema } from '@/components/LocalSEO/StructuredData';
import { PROBLEMS_LIST } from '@/data/problems';
import { QuoteCTAButton } from '@/components/quote';

const SITE_URL = 'https://romansbuildingservices.com';

const ProblemsHubPage = () => (
  <>
    <SEO
      title="Sydney Building Problems & Repair Guides | Romans"
      description="Plain-English Sydney guides to concrete cancer, cracked walls, rising damp and retaining wall failure — signs, causes and proper fixes."
      canonical="/problems"
    />
    <CollectionPageSchema
      name="Common Building Problems"
      description="Guides to the most common masonry, concrete and structural problems we see across Sydney — what they are, why they happen, and how to fix them properly."
      url={`${SITE_URL}/problems`}
      items={PROBLEMS_LIST.map((p) => ({
        name: p.name,
        url: `${SITE_URL}/problems/${p.slug}`,
        description: p.tagline,
      }))}
    />

    {/* Hero */}
    <section className="bg-navy py-24">
      <div className="container mx-auto px-4 text-center">
        <h1
          className="font-heading text-4xl md:text-5xl text-white mb-4">
          Common Building Problems
        </h1>
        <p
          className="font-body text-white/80 max-w-2xl mx-auto text-lg">
          Straight-talking diagnosis of the most common masonry, concrete and structural issues
          we see across Sydney. Pick the problem that matches what you are seeing.
        </p>
      </div>
    </section>

    {/* Problems grid */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PROBLEMS_LIST.map((problem, i) => (
            <div
              key={problem.slug}>
              <Link
                to={`/problems/${problem.slug}`}
                className="group block bg-bg-light rounded-xl p-8 hover:shadow-premium-lg transition-shadow h-full">
                <AlertCircle className="w-6 h-6 text-amber mb-4" />
                <h2 className="font-heading text-xl text-navy mb-3 group-hover:text-navy-light transition-colors">
                  {problem.name}
                </h2>
                <p className="font-body text-text-secondary text-sm mb-4 leading-relaxed">
                  {problem.tagline}
                </p>
                <span className="inline-flex items-center gap-1 text-navy font-body text-sm font-semibold group-hover:gap-2 transition-all">
                  Read guide <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-navy texture-grain py-16">
      <div className="max-w-3xl mx-auto text-center relative z-10 px-4">
        <h2 className="font-heading text-3xl text-white mb-4">
          Not sure what you're looking at?
        </h2>
        <p className="font-body text-white/70 mb-8">
          Send a photo or call Minas directly. 30 years of Sydney masonry — he will tell you
          straight what it is and what it needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:0414922276"
            className="btn-premium inline-flex items-center gap-2 bg-white text-navy font-body font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-colors">
            <Phone className="w-4 h-4" />
            0414 922 276
          </a>
          <QuoteCTAButton
            className="btn-premium inline-flex items-center gap-2 bg-amber text-navy font-body font-bold px-6 py-3 rounded-md hover:bg-amber/90 transition-colors">
            Get it Inspected
          </QuoteCTAButton>
        </div>
      </div>
    </section>
  </>
);

export default ProblemsHubPage;
