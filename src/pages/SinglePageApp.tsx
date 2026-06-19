import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { RomansPremiumHeroSection } from '@/components/RomansPremiumHeroSection';
import { OptimizedAnimatedAboutSection } from '@/components/OptimizedAnimatedAboutSection';
import { InteractiveServicesSection } from '@/components/InteractiveServicesSection';
import { ProjectGallerySection } from '@/components/ProjectGallerySection';
import { ModernContactSection } from '@/components/ModernContactSection';
import { SectionDivider } from '@/components/SectionDivider';
import { ProcessStrip } from '@/components/ProcessStrip';
import { HowWeWorkSection } from '@/components/HowWeWorkSection';
import { HomeFAQSection } from '@/components/HomeFAQSection';
import { LocalBusinessSchema, SpeakableSchema, PersonSchema } from '@/components/LocalSEO/StructuredData';

const SinglePageApp = () => {
  return (
    <>
      <SEO
        title="Sydney Masonry & Remedial Construction | Romans Building Services"
        description="Sydney masonry and remedial construction by Minas Romanakis. 30 years of stonework, brick repairs, heritage restoration, and structural building services across Sydney."
        canonical="/"
        ogImage="/og-image.png"
      />
      <LocalBusinessSchema />
      <SpeakableSchema url="https://romansbuildingservices.com/" cssSelectors={['h1', 'h2']} />
      <PersonSchema />

      {/* Hero — full-bleed, cinematic, credential strip included */}
      <RomansPremiumHeroSection />

      {/* About — spacious, grid-breaking, personal */}
      <OptimizedAnimatedAboutSection />

      {/* Angled transition into navy services section */}
      <SectionDivider from="#F5F5F5" to="#0A2E76" variant="angle-down" />

      {/* Services — tiered with photography, navy background */}
      <InteractiveServicesSection />

      {/* Angled transition out of navy into light gallery */}
      <SectionDivider from="#0A2E76" to="#F1F5F9" variant="angle-up" />

      {/* Gallery preview — horizontal portfolio carousel */}
      <ProjectGallerySection />

      {/* Process strip — tight, navy, breaks the rhythm */}
      <ProcessStrip />

      {/* How we work — detailed steps with prose */}
      <HowWeWorkSection />

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
              className="inline-flex items-center gap-2 bg-amber text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shrink-0"
            >
              Open the hub
            </Link>
          </div>
        </div>
      </section>

      {/* Common questions — homepage FAQ with schema */}
      <HomeFAQSection />

      {/* Contact — phone-first, trust-building */}
      <ModernContactSection />
    </>
  );
};

export default SinglePageApp;
