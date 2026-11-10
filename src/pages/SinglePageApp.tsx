import { lazy, Suspense } from 'react';
import { SEO } from '@/components/SEO';
import { RomansPremiumHeroSection } from '@/components/RomansPremiumHeroSection';
import { HomeProblemNavigator } from '@/components/home/HomeProblemNavigator';
import { CraftHomeSections } from '@/components/home/CraftHomeSections';
import { HowWeWorkSection } from '@/components/HowWeWorkSection';
import { HomeFAQSection } from '@/components/HomeFAQSection';
import { LocalBusinessSchema, PersonSchema } from '@/components/LocalSEO/StructuredData';

const ModernContactSection = lazy(() =>
  import('@/components/ModernContactSection').then((module) => ({ default: module.ModernContactSection })),
);

const SinglePageApp = () => (
  <>
    <SEO
      title="Masonry & Restoration in Hawkesbury | Romans Building Services"
      description="Speak with Minas Romanakis about masonry, heritage restoration and structural repairs across Hawkesbury and Western Sydney. Based in The Slopes."
      canonical="/"
      ogImage="/og-image.png"
      preloadHero="/gallery/full/romansstone_1572378831_2165593056404182319_2394650725.webp"
      heroPreloadAs="image"
      heroType="image/webp"
    />
    <LocalBusinessSchema />
    <PersonSchema />

    <RomansPremiumHeroSection videoSrc="" />
    <CraftHomeSections />
    <HomeProblemNavigator />
    <HowWeWorkSection />
    <HomeFAQSection />
    <Suspense fallback={<div className="min-h-96 bg-navy" aria-hidden="true" />}>
      <ModernContactSection />
    </Suspense>
  </>
);

export default SinglePageApp;
