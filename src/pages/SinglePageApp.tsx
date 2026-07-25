import { lazy, Suspense } from 'react';
import { SEO } from '@/components/SEO';
import { RomansPremiumHeroSection } from '@/components/RomansPremiumHeroSection';
import { HomeProblemNavigator } from '@/components/home/HomeProblemNavigator';
import { HomeCaseStudiesSection } from '@/components/home/HomeCaseStudiesSection';
import { HomeFounderStandardSection } from '@/components/home/HomeFounderStandardSection';
import { HomeCapabilitiesSection } from '@/components/home/HomeCapabilitiesSection';
import { HowWeWorkSection } from '@/components/HowWeWorkSection';
import { HomeFAQSection } from '@/components/HomeFAQSection';
import { LocalBusinessSchema, PersonSchema, SpeakableSchema } from '@/components/LocalSEO/StructuredData';

const ModernContactSection = lazy(() =>
  import('@/components/ModernContactSection').then((module) => ({ default: module.ModernContactSection })),
);

const SinglePageApp = () => (
  <>
    <SEO
      title="Sydney Masonry, Remedial & Heritage Construction | Romans"
      description="Sydney masonry, remedial and heritage construction by Minas Romanakis. Licenced builders for brick, stone, concrete and structural repairs across Sydney."
      canonical="/"
      ogImage="/og-image.png"
      preloadHero="/gallery/thumbs/romansstone_1572378831_2165593056404182319_2394650725.webp"
      heroPreloadAs="image"
      heroType="image/webp"
    />
    <LocalBusinessSchema />
    <SpeakableSchema url="https://romansbuildingservices.com/" cssSelectors={['h1', 'h2']} />
    <PersonSchema />

    <RomansPremiumHeroSection />
    <HomeProblemNavigator />
    <HomeCaseStudiesSection />
    <HomeFounderStandardSection />
    <HomeCapabilitiesSection />
    <HowWeWorkSection />
    <HomeFAQSection />
    <Suspense fallback={<div className="min-h-96 bg-navy" aria-hidden="true" />}>
      <ModernContactSection />
    </Suspense>
  </>
);

export default SinglePageApp;
