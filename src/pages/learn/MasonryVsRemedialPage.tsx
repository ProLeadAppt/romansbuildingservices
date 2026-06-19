import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { FAQSchema } from '@/components/LocalSEO/StructuredData';
import { HowToSchema, SpeakableSchema } from '@/components/LocalSEO/StructuredData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const faqs = [
  {
    question: 'Is masonry the same as remedial building?',
    answer:
      'No. Masonry is the trade that builds and repairs brick, block and stone. Remedial building is the repair program when a building has defects, movement, water ingress or other failures that need a broader fix.',
  },
  {
    question: 'Which one should I search for if my wall is cracked?',
    answer:
      'Start with the problem, not the label. A simple crack might be a masonry repair, a structural issue, or part of a remedial job depending on what is causing it.',
  },
  {
    question: 'Do you need remedial building for a heritage job?',
    answer:
      'Often yes, because heritage jobs commonly involve multiple failures at once — masonry, moisture, concrete, structural movement and compliance issues.',
  },
  {
    question: 'Why does this matter for SEO?',
    answer:
      'Because buyers search in different ways. Some search by trade, some by problem, and some by building type. A site that explains the difference wins more of those searches.',
  },
];

const steps = [
  {
    title: 'Start with the visible failure',
    body: 'Look at the thing that is actually wrong: cracked brickwork, loose mortar, water staining, spalling concrete, bulging walls or structural movement.',
  },
  {
    title: 'Decide whether it is local or system-wide',
    body: 'If one small section is tired, it is usually masonry. If multiple materials or systems are failing, it is probably remedial.',
  },
  {
    title: 'Match the fix to the cause',
    body: 'Good repairs solve the cause, not just the surface damage. That is the difference between a patch and a proper job.',
  },
  {
    title: 'Get the right crew on site',
    body: 'If the problem touches structure, water, concrete or heritage materials, use a team that can handle all of it in one scope.',
  },
];

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
      />
      <SpeakableSchema url="https://romansbuildingservices.com/learn/masonry-vs-remedial-building" cssSelectors={['h1', 'h2', 'p']} />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="How to tell masonry work from remedial building"
        description="A simple way to decide whether the job is a masonry repair or a broader remedial building scope."
        steps={steps}
      />

      <section className="bg-navy py-24 texture-grain">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-amber uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Learn / decision guide
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="font-heading text-4xl md:text-5xl text-white mb-5">
            Masonry vs remedial building
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-body text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Masonry is the craft. Remedial building is the broader repair scope. The right answer depends on whether you are fixing one wall, or solving a building problem.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white px-4">
        <div className="max-w-3xl mx-auto space-y-5 font-body text-text-muted text-base md:text-lg leading-relaxed">
          <p>
            If the job is mainly brick, block or stone, and the failure is localised, it is usually a masonry job. If the building has movement, water ingress, concrete damage, defects or multiple things failing together, it starts looking like remedial building.
          </p>
          <p>
            Sydney jobs often sit in the overlap. A heritage terrace might need repointing, crack stitching, sandstone repair and waterproofing in the one scope. That is not two separate jobs. That is one remedial problem with masonry at its core.
          </p>
          <p>
            The best websites do not blur the difference. They explain it cleanly so the customer can self-diagnose and the search engine can match the page to the right intent.
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
                'The damage is localised to one wall, pier, chimney or feature.',
                'You need rebuilding, repointing, patching or stone replacement.',
                'The structure is sound but the finish or surface is failing.',
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
                'A patch will not fix the underlying cause.',
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
            Start with the problem page, then move to the right service page. That is the cleanest path for both users and search.
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
