import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Hammer,
  Landmark,
  Building2,
  Wrench,
  Construction,
  Shovel,
  ClipboardCheck,
} from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Masonry',
    slug: 'masonry',
    description: 'Stone walls, brick, block, retaining walls, chimneys. New builds and repairs.',
  },
  {
    icon: Landmark,
    title: 'Heritage Restoration',
    slug: 'heritage-restoration',
    description:
      'Restoring heritage-listed buildings and period features to their original condition.',
  },
  {
    icon: Building2,
    title: 'Building Restoration',
    slug: 'building-restoration',
    description: 'Full building facade restoration, render repairs, and structural upgrades.',
  },
  {
    icon: Wrench,
    title: 'Structural Repairs',
    slug: 'structural-repairs',
    description: 'Crack stitching, lintel replacement, load-bearing wall repairs.',
  },
  {
    icon: Construction,
    title: 'Concrete Repairs',
    slug: 'concrete-repairs',
    description: 'Concrete cancer treatment, spalling repairs, render replacement.',
  },
  {
    icon: Shovel,
    title: 'Foundation Repairs',
    slug: 'foundation-repairs',
    description: 'Underpinning, restumping, foundation crack repairs.',
  },
  {
    icon: ClipboardCheck,
    title: 'Remedial Building',
    slug: 'remedial-building',
    description:
      'Structural assessments, remedial engineering, and building compliance work.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Masonry, Heritage Restoration &amp; Structural Repairs</title>
      </Helmet>

      <div className="min-h-screen font-body">
        {/* Hero Banner */}
        <section className="bg-navy py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-5xl text-white mb-4"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg max-w-2xl mx-auto"
            >
              Masonry, restoration, and structural repairs. Whatever the job, the standard is the
              same.
            </motion.p>
          </div>
        </section>

        {/* Services List */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-bg-light rounded-lg p-8"
                >
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-heading text-xl text-text-primary mb-3">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-4">{service.description}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-navy font-semibold hover:text-navy-light transition-colors"
                  >
                    Learn more &rarr;
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-bg-light py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl text-text-primary mb-6">Need a quote?</h2>
              <Link
                to="/contact"
                className="inline-block bg-amber text-white font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
