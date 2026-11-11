import { toCanonicalPageUrl } from '@/lib/seoUrls';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { CollectionPageSchema } from '@/components/LocalSEO/StructuredData';

const steps = [
  {
    title: 'Check the joints first',
    body: 'From a safe ground-level position, photograph open joints, loose fragments and changes beside a wider view of the wall. Do not scrape, probe or rub suspect joints.',
  },
  {
    title: 'Look for moisture signs',
    body: 'Record when damp appears and whether it follows rain. Gutters, flashings, plumbing, drainage and condensation can also cause damp; mortar condition alone does not locate the source.',
  },
  {
    title: 'Check whether the bricks are failing too',
    body: 'Photograph damaged brick or stone faces without touching them. Stay away from bulging walls or loose overhead masonry, and keep others clear while arranging urgent assessment.',
  },
  {
    title: 'Get the right mortar mix',
    body: 'Ask how the existing mortar, brick or stone, exposure and joint profile will inform the mix. A sample panel can help agree colour and finish; heritage requirements may also affect the method.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Signs You Need Repointing in Sydney | Crumbling Mortar, Gaps and Water Entry',
  description: 'How to spot failed mortar before the wall gets worse. A plain-English guide to the signs you need repointing on Sydney brick and stone walls.',
  url: toCanonicalPageUrl('https://romansbuildingservices.com/learn/repointing-signs'),
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': toCanonicalPageUrl('https://romansbuildingservices.com/learn/repointing-signs'),
  },
  isPartOf: {
    '@type': 'CollectionPage',
    '@id': toCanonicalPageUrl('https://romansbuildingservices.com/learn'),
  },
  author: {
    '@type': 'Organization',
    name: 'Romans Building Services',
    url: toCanonicalPageUrl('https://romansbuildingservices.com'),
  },
  publisher: {
    '@type': 'Organization',
    name: 'Romans Building Services',
    logo: { '@type': 'ImageObject', url: 'https://romansbuildingservices.com/og-image.png' },
  },
  about: [
    { '@type': 'Thing', name: 'Repointing' },
    { '@type': 'Thing', name: 'Mortar deterioration' },
    { '@type': 'Thing', name: 'Sydney masonry' },
  ],
  keywords: ['repointing', 'mortar', 'Sydney', 'brick repair'],
};

const RepointingSignsPage = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Learn', href: '/learn' },
    { label: 'Signs you need repointing', href: '/learn/repointing-signs' },
  ];

  const relatedPages = [
    {
      name: 'Learn hub',
      url: toCanonicalPageUrl('https://romansbuildingservices.com/learn'),
      description: 'Practical guides to building defects, repair options and planning an assessment.',
    },
    {
      name: 'Repair references',
      url: 'https://romansbuildingservices.com/case-studies',
      description: 'General repair planning questions and links to related services.',
    },
    {
      name: 'Masonry vs remedial building',
      url: toCanonicalPageUrl('https://romansbuildingservices.com/learn/masonry-vs-remedial-building'),
      description: 'Useful when repointing is only part of a bigger repair scope.',
    },
    {
      name: 'Concrete cancer in Sydney',
      url: toCanonicalPageUrl('https://romansbuildingservices.com/learn/concrete-cancer-sydney'),
      description: 'Helpful when mortar failure and concrete spalling sit on the same property.',
    },
    {
      name: 'Masonry service',
      url: 'https://romansbuildingservices.com/services/masonry',
      description: 'The primary service page for repointing and brick/stone repair work.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Signs You Need Repointing in Sydney | Crumbling Mortar, Gaps and Water Entry"
        description="How to spot failed mortar before the wall gets worse. A plain-English guide to the signs you need repointing on Sydney brick and stone walls."
        canonical="/learn/repointing-signs"
        ogType="article"
        schemaJson={articleSchema}
      />
      <CollectionPageSchema
        name="Signs you need repointing — related guides and service pages"
        description="Supporting pages for mortar failure, masonry repair and remedial construction in Sydney."
        url="https://romansbuildingservices.com/learn/repointing-signs"
        items={relatedPages}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <section className="bg-navy py-24 texture-grain">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-amber uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Learn / diagnosis guide
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-5">
            Signs you need repointing
          </h1>
          <p className="font-body text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Open joints and loose mortar are reasons to arrange an assessment. Repointing may be appropriate, but damp, cracked bricks and wall movement need their causes checked before a repair is chosen.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-5 font-body text-text-muted text-base md:text-lg leading-relaxed">
          <p>
            Repointing replaces deteriorated mortar in brick or stone joints. Sound joints help manage weather exposure, but the wall also relies on details such as flashings, drainage and openings. New mortar cannot correct every source of water entry.
          </p>
          <p>
            Look for missing mortar, separation at joint edges and fallen fragments from a safe position. Some joints were built with a recessed profile, and older lime mortar can be softer than modern cement mortar. Appearance alone does not establish the depth or cause of deterioration.
          </p>
          <p>
            A repair scope should identify which joints need work, how deteriorated mortar will be removed without damaging the masonry, and the compatible mortar and curing method. Ask how adjoining brick repairs, water-entry work and any structural assessment will be sequenced.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg-light px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-7 border border-gray-100">
            <h2 className="font-heading text-2xl text-navy mb-4">The main signs</h2>
            <ul className="space-y-3 text-text-muted leading-relaxed">
              {[
                'Loose mortar fragments are visible without touching or disturbing the wall.',
                'You can see gaps or missing sections in the joints.',
                'Joints appear newly eroded or separated from the brick edge.',
                'Damp or staining appears after rain and needs its source investigated.',
                'You can see mortar crumbs on the ground or ledges below the wall.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-7 border border-gray-100">
            <h2 className="font-heading text-2xl text-navy mb-4">When repointing is not enough</h2>
            <ul className="space-y-3 text-text-muted leading-relaxed">
              {[
                'The bricks themselves are soft or spalling.',
                'The wall is bulging, moving or out of plumb.',
                'Cracks cross bricks or joints, change over time, or recur after repair.',
                'The problem is tied to leaking gutters, flashing or drainage.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-navy mb-10 text-center">How to check a wall properly</h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.title} className="bg-bg-light rounded-xl p-6 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-heading shrink-0">{index + 1}</div>
                <div>
                  <h3 className="font-heading text-xl text-text-primary mb-2">{step.title}</h3>
                  <p className="text-text-muted leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 px-4 bg-bg-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl text-navy mb-6 text-center">Related reading</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/learn/masonry-vs-remedial-building" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-navy/30 transition-colors">
              <p className="font-heading text-xl text-text-primary mb-2">Masonry vs remedial building</p>
              <p className="text-text-muted leading-relaxed">Work out whether the wall needs a masonry repair or a broader remedial scope.</p>
            </Link>
            <Link to="/learn/concrete-cancer-sydney" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-navy/30 transition-colors">
              <p className="font-heading text-xl text-text-primary mb-2">Concrete cancer in Sydney</p>
              <p className="text-text-muted leading-relaxed">Understand concrete spalling where it appears alongside masonry damage.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">If the mortar is gone, don’t wait</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Share safely taken photos, the location of the affected wall and any changes you have noticed. An assessment can establish whether repointing is suitable and what other work should come first.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:0414922276" className="inline-flex items-center gap-2 bg-white text-navy font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors">
              <Phone className="w-4 h-4" />
              Call Minas
            </a>
            <Link to="/services/masonry/repointing" className="inline-flex items-center gap-2 bg-amber text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Repointing service <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RepointingSignsPage;
