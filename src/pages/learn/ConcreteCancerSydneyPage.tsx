import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { FAQSchema, HowToSchema, SpeakableSchema } from '@/components/LocalSEO/StructuredData';

const faqs = [
  {
    question: 'What is concrete cancer?',
    answer:
      'Concrete cancer is the breakdown of reinforced concrete when moisture and contaminants reach the steel reinforcement, causing the steel to rust and expand and the surrounding concrete to crack and spall.',
  },
  {
    question: 'Why does it happen so often in Sydney apartments?',
    answer:
      'Sydney’s coastal exposure, older apartment stock, balconies and slab edges are a common combination for corrosion and spalling if the concrete has not been maintained properly.',
  },
  {
    question: 'Can I just patch the broken bit?',
    answer:
      'Usually not. If the corrosion source is still active, a patch alone will fail again. The repair needs to address the steel, the surrounding concrete and the water pathway.',
  },
  {
    question: 'Is concrete cancer a strata issue?',
    answer:
      'Very often, yes. On apartment blocks it commonly affects balconies, facades, parapets and car parks, so strata managers usually need an assessment and a proper repair scope.',
  },
];

const steps = [
  {
    title: 'Find the spalling and rust staining',
    body: 'Look for cracked concrete, rust marks, delamination, exposed steel and chunks falling from slab edges or balcony undersides.',
  },
  {
    title: 'Check how far the corrosion has spread',
    body: 'The visible damage is often only the bit you can see. The repair has to account for the steel and concrete beyond the surface patch.',
  },
  {
    title: 'Stop the water getting back in',
    body: 'Without sealing the source — drainage, waterproofing, joints or coating — the problem usually comes back.',
  },
  {
    title: 'Repair the concrete and the steel properly',
    body: 'A proper job includes breaking out damaged concrete, treating or replacing corroded reinforcement, then reinstating the structure.',
  },
];

const ConcreteCancerSydneyPage = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Learn', href: '/learn' },
    { label: 'Concrete cancer in Sydney', href: '/learn/concrete-cancer-sydney' },
  ];

  return (
    <>
      <SEOHead
        title="Concrete Cancer in Sydney Apartments | What It Is and What to Do"
        description="A practical guide to concrete cancer in Sydney apartments and strata buildings: the warning signs, the cause, and the right repair process."
        canonical="/learn/concrete-cancer-sydney"
      />
      <SpeakableSchema url="https://romansbuildingservices.com/learn/concrete-cancer-sydney" cssSelectors={['h1', 'h2', 'p']} />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="How to deal with concrete cancer in a Sydney apartment building"
        description="A simple process for spotting concrete cancer, checking the extent of the damage and fixing it properly."
        steps={steps}
      />

      <section className="bg-navy py-24 texture-grain">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-amber uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            Learn / remediation guide
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="font-heading text-4xl md:text-5xl text-white mb-5">
            Concrete cancer in Sydney apartments
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-body text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            If the concrete is cracking, rusting or falling away from a balcony or facade, the damage is usually bigger than the patch you can see.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-5 font-body text-text-muted text-base md:text-lg leading-relaxed">
          <p>
            Concrete cancer is the name people use when reinforced concrete starts breaking down and exposing rusted steel. Once the steel expands, the concrete around it cracks and falls away. On apartment buildings and strata assets, that can show up on balconies, slab edges, parapets, staircases and car park structures.
          </p>
          <p>
            Sydney gets this problem a lot because many buildings are exposed to moisture, coastal air and older detailing that was never intended to last forever without maintenance. The visible damage is only part of the story — the steel behind it is usually what needs attention.
          </p>
          <p>
            The right response is not cosmetic patching. It is a proper assessment, a repair scope that addresses the steel and concrete, and then a way to keep water out so it does not come back.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg-light px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-7 border border-gray-100">
            <h2 className="font-heading text-2xl text-navy mb-4">Common warning signs</h2>
            <ul className="space-y-3 text-text-muted leading-relaxed">
              {[
                'Rust staining running out of cracks or slab edges.',
                'Concrete pieces spalling or dropping off balconies and facades.',
                'Exposed or bulging reinforcement steel.',
                'Hollow sounding concrete when tapped.',
                'Cracks that keep coming back after a patch.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-7 border border-gray-100">
            <h2 className="font-heading text-2xl text-navy mb-4">What a proper repair needs</h2>
            <ul className="space-y-3 text-text-muted leading-relaxed">
              {[
                'Identify the source of water and corrosion.',
                'Remove damaged concrete back to sound material.',
                'Treat, clean or replace corroded reinforcement steel.',
                'Rebuild the section with the right repair system and finish.',
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
          <h2 className="font-heading text-3xl md:text-4xl text-navy mb-10 text-center">How to deal with it properly</h2>
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
          <h2 className="font-heading text-3xl md:text-4xl mb-4">If you’re seeing spalling, get it checked</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            On apartment buildings, delay usually makes the repair bigger and more expensive. An early assessment is the cheapest way to keep the structure under control.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:0414922276" className="inline-flex items-center gap-2 bg-white text-navy font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors">
              <Phone className="w-4 h-4" />
              Call Minas
            </a>
            <Link to="/services/concrete-repairs" className="inline-flex items-center gap-2 bg-amber text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Concrete repairs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConcreteCancerSydneyPage;
