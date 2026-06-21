import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { SEO } from '@/components/SEO';
import { RomansPremiumHeroSection } from '@/components/RomansPremiumHeroSection';
import { OptimizedAnimatedAboutSection } from '@/components/OptimizedAnimatedAboutSection';
import { InteractiveServicesSection } from '@/components/InteractiveServicesSection';
import { SectionDivider } from '@/components/SectionDivider';
import { LocalBusinessSchema, SpeakableSchema, PersonSchema } from '@/components/LocalSEO/StructuredData';
import { RelatedLinksBlock } from '@/components/RelatedLinksBlock';

const ProjectGallerySection = lazy(() => import('@/components/ProjectGallerySection'));
const ProcessStrip = lazy(() => import('@/components/ProcessStrip'));
const HowWeWorkSection = lazy(() => import('@/components/HowWeWorkSection'));
const HomeFAQSection = lazy(() => import('@/components/HomeFAQSection'));
const ModernContactSection = lazy(() => import('@/components/ModernContactSection'));

const SinglePageApp = () => {
  return (
    <>
      <SEO
        title="Sydney Masonry, Remedial & Heritage Construction | Romans"
        description="Sydney masonry, remedial and heritage construction by Minas Romanakis. Licenced builders for brick, stone, concrete and structural repairs across Sydney."
        canonical="/"
        ogImage="/og-image.png"
      />
      <LocalBusinessSchema />
      <SpeakableSchema url="https://romansbuildingservices.com/" cssSelectors={['h1', 'h2']} />
      <PersonSchema />

      {/* Hero — full-bleed, cinematic, credential strip included */}
      <RomansPremiumHeroSection />

      <section className="bg-white py-6 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {[
            { to: '/services', label: 'All services' },
            { to: '/services/masonry', label: 'Masonry' },
            { to: '/services/heritage-restoration', label: 'Heritage restoration' },
            { to: '/services/remedial-building', label: 'Remedial building' },
            { to: '/areas', label: 'Sydney areas' },
            { to: '/case-studies', label: 'Case studies' },
            { to: '/learn', label: 'Learn hub' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="inline-flex items-center rounded-full border border-navy/15 bg-bg-light px-4 py-2 text-sm font-medium text-navy hover:border-navy/30 hover:bg-navy/5 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* About — spacious, grid-breaking, personal */}
      <OptimizedAnimatedAboutSection />

      {/* Angled transition into navy services section */}
      <SectionDivider from="#F5F5F5" to="#0A2E76" variant="angle-down" />


      <RelatedLinksBlock
        heading="Start with the main pathways"
        intro="The quickest way into the site: core services, key problem guides, service areas and the answer-first learn hub."
        items={[
          { label: 'Services', href: '/services', sublabel: 'All seven service lines' },
          { label: 'Problems', href: '/problems', sublabel: 'What the damage usually means' },
          { label: 'Areas', href: '/areas', sublabel: 'Sydney suburbs and regions' },
          { label: 'Case studies', href: '/case-studies', sublabel: 'Real jobs, real detail' },
          { label: 'Heritage hub', href: '/heritage', sublabel: 'Era-specific restoration guides' },
          { label: 'Learn hub', href: '/learn', sublabel: 'Plain-English SEO hub' },
        ]}
        columns={3}
        background="off-white"
      />

      {/* Services — tiered with photography, navy background */}
      <InteractiveServicesSection />

      {/* Angled transition out of navy into light gallery */}
      <SectionDivider from="#0A2E76" to="#F1F5F9" variant="angle-up" />

      {/* Gallery preview — horizontal portfolio carousel */}
      <Suspense fallback={null}>
        <ProjectGallerySection />
      </Suspense>

      {/* Process strip — tight, navy, breaks the rhythm */}
      <Suspense fallback={null}>
        <ProcessStrip />
      </Suspense>

      {/* How we work — detailed steps with prose */}
      <Suspense fallback={null}>
        <HowWeWorkSection />
      </Suspense>

      <section className="bg-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-navy text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="text-amber font-semibold uppercase tracking-[0.2em] text-xs mb-2">Learn hub</p>
              <h2 className="font-heading text-2xl md:text-3xl mb-2">Need the answer-first version of the site?</h2>
              <p className="text-white/80 leading-relaxed max-w-2xl">
                The Learn hub is where the site explains masonry, heritage and remedial work in plain English for Google, AI Overviews and humans.
              </p>
            </div>
            <Link
              to="/learn"
              className="inline-flex items-center gap-2 bg-amber text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shrink-0">
              Open the hub
            </Link>
          </div>
        </div>
      </section>

      {/* Common questions — homepage FAQ with schema */}
      <Suspense fallback={null}>
        <HomeFAQSection />
      </Suspense>

      {/* Contact — phone-first, trust-building */}
      <Suspense fallback={null}>
        <ModernContactSection />
      </Suspense>
    </>
  );
};

export default SinglePageApp;
