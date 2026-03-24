import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  'Sandstone terrace restoration',
  'Period home brick repairs',
  'Retaining wall construction and repair',
  'Heritage repointing and mortar matching',
  'Concrete cancer treatment',
  'Facade maintenance and repairs',
];

const EasternSuburbsPage = () => (
  <>
    <Helmet>
      <title>Eastern Suburbs Masonry and Building Services | Romans Building Services</title>
      <meta
        name="description"
        content="Masonry, sandstone terrace restoration and retaining wall repairs in Sydney's Eastern Suburbs. Servicing Bondi, Paddington, Woollahra, Double Bay and Rose Bay."
      />
    </Helmet>

    {/* Hero */}
    <section className="bg-navy py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="font-heading text-4xl md:text-5xl text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Eastern Suburbs
        </motion.h1>
        <motion.p
          className="font-body text-white/70 max-w-xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Period homes, sandstone terraces and retaining walls across Sydney's east.
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
            The Eastern Suburbs are full of beautiful old homes that need proper care. We work regularly across Paddington, Woollahra and Double Bay, repairing sandstone terraces, repointing brickwork and fixing retaining walls. These properties have character and they deserve tradespeople who understand heritage construction.
          </p>
          <p className="font-body text-text-secondary mb-6">
            Down in Bondi and Rose Bay, salt air takes its toll on masonry. We see a lot of spalling sandstone, crumbling mortar and rusting lintels. We fix it properly the first time so you are not calling someone back in two years.
          </p>
          <p className="font-body text-text-secondary mb-10">
            Whether it is a small repointing job on a Paddington terrace or a full retaining wall rebuild in Woollahra, we bring the same level of care. No rushing, no cutting corners.
          </p>
        </motion.div>

        {/* Services list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-heading text-2xl text-navy mb-6">What we do in the Eastern Suburbs</h2>
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
            Get a quote for Eastern Suburbs <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  </>
);

export default EasternSuburbsPage;
