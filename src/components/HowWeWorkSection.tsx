import { HowToSchema } from './LocalSEO/StructuredData';

const steps = [
  {
    title: 'Show us the problem',
    body: 'Call Minas or use the quote form. A suburb, a short description and a couple of clear photos are enough to start the conversation.',
  },
  {
    title: 'Work out what is actually failing',
    body: 'If the job needs an on-site assessment, we arrange one. The aim is to separate the cause from the visible damage and define what should be repaired, retained or investigated further.',
  },
  {
    title: 'Quote the repair clearly',
    body: 'You receive a written scope covering the proposed work, materials and practical sequence. If another specialist is needed first, we tell you before the repair is priced as though the cause is known.',
  },
];

export const HowWeWorkSection = () => (
  <section data-p2-section="process" className="bg-stone-50 px-5 py-16 sm:px-6 md:py-24">
    <HowToSchema steps={steps} />
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy/80">What happens next</p>
          <h2 className="font-heading text-4xl leading-[1.05] text-navy sm:text-5xl">A clear first step, before anyone promises a solution.</h2>
        </div>
        <ol className="border-t border-navy/15">
          {steps.map((step, index) => (
            <li key={step.title} id={`howwework-step-${index + 1}`} className="grid gap-3 border-b border-navy/15 py-7 sm:grid-cols-[3.5rem_1fr]">
              <span className="text-xs font-semibold tracking-[0.2em] text-navy/80">0{index + 1}</span>
              <div>
                <h3 className="font-heading text-2xl text-navy">{step.title}</h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
