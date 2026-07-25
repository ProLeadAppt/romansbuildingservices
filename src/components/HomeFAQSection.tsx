import { Link } from 'react-router-dom';
import { FAQSchema } from './LocalSEO/StructuredData';

const faqs = [
  {
    question: 'What kind of work should I contact Romans about?',
    answer: 'Romans focuses on brick, stone, block, concrete and the structures they form. Typical enquiries include failing mortar, sandstone deterioration, cracked brickwork, damaged chimneys, retaining walls, concrete damage and heritage masonry repairs.',
  },
  {
    question: 'Do I need to know what is causing the damage?',
    answer: 'No. Tell us what you can see and include a few clear photos if possible. The first conversation is used to decide whether the likely cause is clear, whether a site visit is needed or whether another specialist should investigate first.',
  },
  {
    question: 'Can Romans work on heritage buildings?',
    answer: 'Yes. Romans carries out heritage brick and stone repairs, repointing and restoration work. Where a heritage consultant, engineer or formal approval is required, that role remains separate and should be identified before work begins.',
  },
  {
    question: 'What should I expect in the quote?',
    answer: 'The quote should describe the repair scope, proposed materials and practical sequence for the work. Final timing and price depend on access, condition and what an assessment shows, rather than a generic online estimate.',
  },
];

export const HomeFAQSection = () => (
  <section data-p2-section="questions" className="bg-white px-5 py-16 sm:px-6 md:py-24">
    <FAQSchema faqs={faqs} />
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy/80">Before you call</p>
        <h2 className="font-heading text-4xl leading-[1.05] text-navy sm:text-5xl">Straight answers to the first questions.</h2>
        <p className="mt-5 max-w-md text-base leading-7 text-slate-600">For deeper technical guidance, the Learn hub covers common masonry, heritage and remedial problems in plain English.</p>
        <Link to="/learn" className="mt-6 inline-flex min-h-11 items-center font-semibold text-navy underline decoration-amber decoration-2 underline-offset-8">Open the Learn hub</Link>
      </div>
      <div className="border-t border-navy/15">
        {faqs.map((faq, index) => (
          <article key={faq.question} className="grid gap-3 border-b border-navy/15 py-7 sm:grid-cols-[3.5rem_1fr]">
            <span className="text-xs font-semibold tracking-[0.2em] text-navy/80">0{index + 1}</span>
            <div>
              <h3 className="font-heading text-2xl text-navy">{faq.question}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{faq.answer}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
