import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  'Terrace house brick restoration',
  'Heritage streetscape repairs',
  'Sandstone and tuckpointing',
  'Structural crack stitching',
  'Retaining wall repairs',
  'Mortar matching for period brickwork',
];

const InnerWestPage = () => (
  <>
    <Helmet>
      <title>Inner West Masonry and Building Services | Romans Building Services</title>
      <meta
        name="description"
        content="Terrace house restoration, brick repairs and heritage masonry in Sydney's Inner West. Servicing Newtown, Marrickville, Leichhardt, Balmain and Strathfield."
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
          Inner West
        </motion.h1>
        <motion.p
          className="font-body text-white/70 max-w-xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Terrace houses, brick restoration and heritage streetscapes. This is our home turf.
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
            The Inner West is where we are based, and we know it inside out. From the rows of Victorian terraces in Newtown and Marrickville to the grand old homes around Strathfield, this area is full of character buildings that need proper care. We have been looking after them for over 30 years.
          </p>
          <p className="font-body text-text-secondary mb-6">
            In Leichhardt and Balmain, a lot of our work is tuckpointing and brick restoration on terraces. The original lime mortar breaks down over time and needs to be carefully raked out and replaced. We match the colour and profile of the original joints so the finished job looks as it should.
          </p>
          <p className="font-body text-text-secondary mb-10">
            Heritage streetscapes are a big part of what makes the Inner West special. We take that seriously. Whether it is a single terrace in Newtown or a row of shopfronts in Marrickville, we do the work properly and respect the history of the building.
          </p>
        </motion.div>

        {/* Services list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-heading text-2xl text-navy mb-6">What we do in the Inner West</h2>
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
            Get a quote for Inner West <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  </>
);

export default InnerWestPage;
