import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  'Residential masonry repairs',
  'Heritage and federation home restoration',
  'Sandstone repointing and conservation',
  'Structural crack stitching',
  'Retaining wall repairs',
  'Brick replacement and mortar matching',
];

const NorthShorePage = () => (
  <>
    <SEO
      title="North Shore Masonry and Building Services | Romans Building Services"
      description="Masonry and heritage work across Sydney's North Shore. Mosman, Neutral Bay, Lane Cove, and Chatswood. Licensed and insured since 1995."
      canonical="/areas/north-shore"
    />

    {/* Hero */}
    <section className="bg-navy py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="font-heading text-4xl md:text-5xl text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          North Shore
        </motion.h1>
        <motion.p
          className="font-body text-white/70 max-w-xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Residential masonry, heritage homes and federation-era repairs across the North Shore.
        </motion.p>
      </div>
    </section>

    {/* Content */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-text-secondary mb-6">
            The North Shore has some of the finest residential properties in Sydney. We work across Mosman, Neutral Bay and Cremorne, looking after federation homes, sandstone features and ageing brickwork. Many of these homes were built over a hundred years ago and they need tradespeople who understand how they were put together.
          </p>
          <p className="font-body text-text-secondary mb-6">
            Further up in Chatswood and Lane Cove, we handle a mix of older residential repairs and newer structural work. Cracked walls, failing retaining walls and deteriorating mortar joints are common issues we see on the North Shore. We fix them with the right materials and techniques for the building.
          </p>
          <p className="font-body text-text-secondary mb-10">
            We take pride in doing careful work that respects the original character of each home. If your North Shore property needs masonry attention, we are happy to come out and take a look.
          </p>
        </motion.div>

        {/* Services list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-heading text-2xl text-navy mb-6">What we do on the North Shore</h2>
          <ul className="space-y-3 mb-12">
            {services.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green mt-0.5 shrink-0" />
                <span className="font-body text-text-secondary">{s}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber text-navy font-body font-bold px-8 py-4 rounded-lg hover:bg-amber/90 transition-colors"
          >
            Get a quote for North Shore <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  </>
);

export default NorthShorePage;
