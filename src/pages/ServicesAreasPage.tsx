import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { CollectionPageSchema } from '@/components/LocalSEO/StructuredData';

const areas = [
  {
    name: 'Sydney CBD',
    description: 'Heritage buildings, commercial facades and sandstone restoration in the city centre.',
    href: '/areas/sydney-cbd',
  },
  {
    name: 'Eastern Suburbs',
    description: 'Period homes, sandstone terraces and retaining walls from Bondi to Rose Bay.',
    href: '/areas/eastern-suburbs',
  },
  {
    name: 'North Shore',
    description: 'Residential masonry, heritage homes and federation-era repairs across the lower and upper North Shore.',
    href: '/areas/north-shore',
  },
  {
    name: 'Northern Beaches',
    description: 'Coastal repairs, salt damage remediation and masonry restoration from Manly to Palm Beach.',
    href: '/areas/northern-beaches',
  },
  {
    name: 'Inner West',
    description: 'Terrace houses, brick restoration and heritage streetscapes. Our home turf.',
    href: '/areas/inner-west',
  },
  {
    name: 'Greater Sydney',
    description: 'All masonry services for commercial and residential properties across the wider metro.',
    href: '/areas/greater-sydney',
  },
];

const ServicesAreasPage = () => (
  <>
    <SEO
      title="Areas We Service | Romans Building Services"
      description="Sydney-wide coverage. Romans Building Services works across Sydney CBD, Eastern Suburbs, North Shore, Northern Beaches, Inner West and Greater Sydney."
      canonical="/areas"
    />
    <CollectionPageSchema
      name="Areas We Service"
      description="Romans Building Services covers all of Sydney. Pick an area to see the masonry, heritage and remedial work we do there."
      url="https://romansbuildingservices.com/areas"
      items={areas.map((a) => ({
        name: a.name,
        url: `https://romansbuildingservices.com${a.href}`,
        description: a.description,
      }))}
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
          Areas We Service
        </motion.h1>
        <motion.p
          className="font-body text-white/70 max-w-xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          We work right across Sydney. Pick your area to see what we do there.
        </motion.p>
      </div>
    </section>

    {/* Area cards grid */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={area.href}
                className="block bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group h-full"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-navy-light" />
                  <h2 className="font-heading text-xl text-navy">{area.name}</h2>
                </div>
                <p className="font-body text-text-secondary text-sm mb-4">
                  {area.description}
                </p>
                <span className="inline-flex items-center gap-1 text-navy-light font-body text-sm font-semibold group-hover:gap-2 transition-all">
                  View area <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-navy py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="font-heading text-3xl text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Not sure which area you fall under?
        </motion.h2>
        <motion.p
          className="font-body text-white/70 mb-8 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Give us a call or send a message. If we can get to you, we will.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/contact"
            className="inline-block bg-amber text-navy font-body font-bold px-8 py-4 rounded-lg hover:bg-amber/90 transition-colors"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </section>
  </>
);

export default ServicesAreasPage;
