import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { FAQSchema, HowToSchema, SpeakableSchema } from '@/components/LocalSEO/StructuredData';

const faqs = [
  {
    question: 'What is repointing?',
    answer:
      'Repointing is the process of removing failed mortar from the joints between bricks or stone and replacing it with fresh mortar so the wall keeps water out and stays stable.',
  },
  {
    question: 'How do I know if the mortar is too far gone?',
    answer:
      'If the mortar is powdery, recessed, cracked, missing or washing out every time it rains, it is usually time to get it looked at.',
  },
  {
    question: 'Can I just seal the wall instead?',
    answer:
      'Usually no. Sealing over failed mortar traps moisture and can make the problem worse, especially on older brickwork and heritage masonry.',
  },
  {
    question: 'Do all damaged walls need repointing?',
    answer:
      'No. If the bricks themselves are spalling, if the wall is moving, or if there is a structural issue, repointing alone is not enough.',
  },
];

const steps = [
  {
    title: 'Check the joints first',
    body: 'Look for cracked, missing or powdery mortar between the bricks or stones.',
  },
  {
    title: 'Look for moisture signs',
    body: 'Staining, mould, loose paint and internal damp patches often show the mortar is letting water through.',
  },
  {
    title: 'Check whether the bricks are failing too',
    body: 'If the brick faces are crumbling, you may need brick repair as well as repointing.',
  },
  {
    title: 'Get the right mortar mix',
    body: 'Older Sydney masonry often needs softer mortar than modern bag mix. The wrong mix can damage the wall.',
  },
];

const RepointingSignsPage = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Learn', href: '/learn' },
    { label: 'Signs you need repointing', href: '/learn/repointing-signs' },
  ];

  return (
    <>
      <SEOHead
        title="Signs You Need Repointing in Sydney | Crumbling Mortar, Gaps and Water Entry"
        description="How to spot failed mortar before the wall gets worse. A plain-English guide to the signs you need repointing on Sydney brick and stone walls."
        canonical="/learn/repointing-signs"
      />
      <SpeakableSchema url="https://romansbuildingservices.com/learn/repointing-signs" cssSelectors={['h1', 'h2', 'p']} />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="How to tell if a wall needs repointing"
        description="A quick way to check whether the mortar joints are failing and the wall needs repointing."
        steps={steps}
      />

      <section className="bg-navy py-24 texture-grain">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-amber uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Learn / diagnosis guide
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="font-heading text-4xl md:text-5xl text-white mb-5">
            Signs you need repointing
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-body text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Failed mortar usually shows itself before the wall properly falls apart. The trick is spotting it early enough to fix it before water and movement do more damage.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-5 font-body text-text-muted text-base md:text-lg leading-relaxed">
          <p>
            Repointing is one of the most common masonry repairs in Sydney. When mortar gets old, it starts to crack, powder out or fall away from the joints. Once that happens, the wall loses its weather seal and the damage usually speeds up.
          </p>
          <p>
            The signs are usually easy to see. The wall might look tired, but the real clues are in the joints: gaps, loose mortar, staining, and bits of mortar on the ground after rain or wind.
          </p>
          <p>
            Good repointing is not just “smearing new mortar over the top”. The old joint needs to be cut out to the right depth, cleaned, and filled with a mortar that suits the age and material of the wall.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg-light px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-7 border border-gray-100">
            <h2 className="font-heading text-2xl text-navy mb-4">The main signs</h2>
            <ul className="space-y-3 text-text-muted leading-relaxed">
              {[
                'Mortar is powdery when you rub it with your finger.',
                'You can see gaps or missing sections in the joints.',
                'The mortar sits recessed or has pulled away from the brick edge.',
                'The wall lets water in or shows damp patches after rain.',
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
                'There are structural cracks through the wall, not just the joints.',
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

      <section className="py-16 md:py-20 px-4 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">If the mortar is gone, don’t wait</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Repointing gets more expensive once water starts coming in. If the joints are failing, get the wall assessed before the bricks start taking the damage too.
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
