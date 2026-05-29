import { motion } from 'framer-motion';
import { FAQSchema } from '@/components/LocalSEO/StructuredData';

const homeFaqs = [
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. Romans holds a full NSW builders licence and we carry public liability and workers compensation. Licence and insurance details on request before any work starts.',
  },
  {
    question: 'How much does masonry work cost?',
    answer:
      'Depends on the job. A small repointing patch can be a few hundred. A heritage chimney rebuild is usually a few thousand. A full sandstone seawall can run into tens of thousands. We give a fixed price after a site visit so you know exactly where you stand before the work starts.',
  },
  {
    question: 'Do you do small jobs or only big ones?',
    answer:
      'Both. We do back-yard garden walls, single chimney repairs, small repointing patches, and we do heritage facades, multi-storey structural work and harbour seawalls. Same standard either way.',
  },
  {
    question: 'How long until you can start?',
    answer:
      'For small jobs, usually two to four weeks out from the quote. For larger heritage or structural work it can be six to ten weeks depending on the season. We try to fit emergency work in within a week when something is failing.',
  },
  {
    question: 'Where in Sydney do you work?',
    answer:
      'Sydney metro. Our home base is Strathfield and our regular work is across the Inner West, Eastern Suburbs, North Shore, Northern Beaches, Parramatta, Burwood, Concord and Homebush. Outer fringe jobs are quoted case by case.',
  },
];

export const HomeFAQSection = () => {
  return (
    <>
      <FAQSchema faqs={homeFaqs} />
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-3">
              Common questions before you call
            </h2>
            <p className="font-body text-text-muted max-w-2xl mx-auto">
              The stuff people ask first. If yours is not here, just ring Minas.
            </p>
          </motion.div>

          <div className="space-y-4">
            {homeFaqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-bg-light p-6 rounded-md"
              >
                <h3 className="font-heading text-lg text-navy mb-2">{faq.question}</h3>
                <p className="font-body text-text-muted leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
