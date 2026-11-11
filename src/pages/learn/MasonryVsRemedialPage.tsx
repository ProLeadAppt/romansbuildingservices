import { toCanonicalPageUrl } from '@/lib/seoUrls';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Start with the visible failure',
    body: 'Take photos from a safe position and record when cracks, damp or loose material appeared. Keep clear of bulging walls and falling material rather than testing them yourself.',
  },
  {
    title: 'Check what still needs investigation',
    body: 'The size of a defect does not establish its cause or urgency. A small crack near a support may need engineering advice; widespread worn mortar may still be a masonry repair.',
  },
  {
    title: 'Match the fix to the cause',
    body: 'Ask which observations support the proposed repair and what remains uncertain. Movement, moisture sources and concealed damage may need investigation before the scope can be settled.',
  },
  {
    title: 'Get the right crew on site',
    body: 'Agree who arranges engineering, heritage advice, approvals and each trade. Record the work sequence, access arrangements, inspection points and responsibility for finishing adjoining surfaces.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Masonry vs Remedial Building in Sydney | What’s the Difference?',
  description: 'Plain-English guide to the difference between masonry and remedial building in Sydney. Know which one you actually need before you call a builder.',
  url: toCanonicalPageUrl('https://romansbuildingservices.com/learn/masonry-vs-remedial-building'),
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': toCanonicalPageUrl('https://romansbuildingservices.com/learn/masonry-vs-remedial-building'),
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
    logo: {
      '@type': 'ImageObject',
      url: 'https://romansbuildingservices.com/og-image.png',
    },
  },
  about: [
    { '@type': 'Thing', name: 'Masonry' },
    { '@type': 'Thing', name: 'Remedial building' },
    { '@type': 'Thing', name: 'Sydney building repairs' },
  ],
  keywords: ['masonry', 'remedial building', 'Sydney', 'repair scope'],
};

const MasonryVsRemedialPage = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Learn', href: '/learn' },
    { label: 'Masonry vs Remedial', href: '/learn/masonry-vs-remedial-building' },
  ];

  return (
    <>
      <SEOHead
        title="Masonry vs Remedial Building in Sydney | What’s the Difference?"
        description="Plain-English guide to the difference between masonry and remedial building in Sydney. Know which one you actually need before you call a builder."
        canonical="/learn/masonry-vs-remedial-building"
        ogType="article"
        schemaJson={articleSchema}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <section className="bg-navy py-24 texture-grain">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-amber uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Learn / decision guide
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-5">
            Masonry vs remedial building
          </h1>
          <p className="font-body text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Masonry covers brick, block and stone work. Remedial building coordinates repairs to building defects, often including masonry. The cause of the problem and the work needed matter more than the label.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white px-4">
        <div className="max-w-3xl mx-auto space-y-5 font-body text-text-muted text-base md:text-lg leading-relaxed">
          <p>
            Repointing, replacing damaged bricks and repairing stone are masonry tasks. They can be stand-alone work or part of a remedial project. A small damaged area can still involve a load-bearing element or a concealed leak, so its size is not a reliable way to choose the repair.
          </p>
          <p>
            For example, staining below a window might involve a flashing repair before mortar joints are renewed. A cracked pier may need an engineer to assess its support before a mason rebuilds it. Heritage work can also require advice on compatible materials and approval conditions, even where the repair area is small.
          </p>
          <p>
            A useful quote separates investigation, design and approvals from the repair work. It should identify exclusions and who coordinates the interfaces between trades, such as a roofer fixing a leak before masonry and internal finishes are repaired.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg-light px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-7 border border-gray-100">
            <h2 className="font-heading text-2xl text-navy mb-4">Use masonry when…</h2>
            <ul className="space-y-3 text-text-muted leading-relaxed">
              {[
                'The issue is in brick, block, sandstone or mortar.',
                'Assessment has established the work needed to the wall, pier, chimney or feature.',
                'You need rebuilding, repointing, patching or stone replacement.',
                'Any support or movement concerns have been assessed before surface work starts.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-7 border border-gray-100">
            <h2 className="font-heading text-2xl text-navy mb-4">Use remedial building when…</h2>
            <ul className="space-y-3 text-text-muted leading-relaxed">
              {[
                'The problem involves movement, defects, concrete or water ingress.',
                'Several building systems are failing at the same time.',
                'You need a broader scope that coordinates structure, envelope and compliance.',
                'The repair needs several trades or specialist inspection points in an agreed sequence.',
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
          <h2 className="font-heading text-3xl md:text-4xl text-navy mb-10 text-center">How to tell the difference</h2>
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

      <section className="py-16 md:py-20 px-4 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Need the right scope?</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Describe what has changed, where it is happening and any previous repairs. Bring photos and existing reports so the first assessment can identify the next investigation and the trades involved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/services/masonry" className="inline-flex items-center gap-2 bg-white text-navy font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors">
              Masonry service <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services/remedial-building" className="inline-flex items-center gap-2 bg-amber text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Remedial building <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MasonryVsRemedialPage;
