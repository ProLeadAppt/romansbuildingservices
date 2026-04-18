import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PlaceSchema, ServiceSchema } from '@/components/LocalSEO/StructuredData';
import { AreaSuburbsLinks } from '@/components/AreaSuburbsLinks';

const services = [
  'Salt damage repair and prevention',
  'Repointing and mortar repairs',
  'Retaining wall construction and repair',
  'Concrete cancer treatment',
  'Brick and stone repointing',
  'Structural crack repairs',
];

const NorthernBeachesPage = () => (
  <>
    <SEO
      title="Northern Beaches Masonry and Building Services | Romans Building Services"
      description="Masonry repairs and restoration across Sydney's Northern Beaches. Manly, Dee Why, Avalon and beyond. Coastal expertise for harsh conditions."
      canonical="/areas/northern-beaches"
    />
    <PlaceSchema
      name="Northern Beaches, Sydney"
      description="Coastal masonry repairs, salt damage remediation and stone restoration across Sydney's Northern Beaches."
      url="https://romansbuildingservices.com/areas/northern-beaches"
    />
    <ServiceSchema
      service="Masonry and Coastal Restoration — Northern Beaches"
      description="Salt damage repair, concrete cancer treatment, retaining wall construction and facade maintenance from Manly to Palm Beach."
      url="https://romansbuildingservices.com/areas/northern-beaches"
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
          Northern Beaches
        </motion.h1>
        <motion.p
          className="font-body text-white/70 max-w-xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Coastal repairs, salt damage remediation and masonry restoration from Manly to Palm Beach.
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
            The Northern Beaches are beautiful, but the salt air and coastal weather are hard on buildings. We work regularly from Manly up to Palm Beach, fixing the damage that ocean conditions cause to masonry, concrete and stonework. If your mortar is crumbling or your retaining wall is leaning, chances are the salt has played a big part.
          </p>
          <p className="font-body text-text-secondary mb-6">
            In Dee Why and Mona Vale we see a lot of concrete cancer on apartment blocks and older homes. The salt gets into the steel reinforcement and causes the concrete to crack and spall. We cut out the damaged sections, treat the steel and patch it back properly so it holds up long term.
          </p>
          <p className="font-body text-text-secondary mb-10">
            Around Avalon and Palm Beach, retaining walls are a big part of what we do. The hilly terrain and sandy soil mean walls need to be built right from the start. We also handle facade maintenance for homes exposed to the worst of the coastal weather.
          </p>
        </motion.div>

        {/* Services list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-heading text-2xl text-navy mb-6">What we do on the Northern Beaches</h2>
          <ul className="space-y-3 mb-12">
            {services.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green mt-0.5 shrink-0" />
                <span className="font-body text-text-secondary">{s}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <AreaSuburbsLinks parentAreaHref="/areas/northern-beaches" parentAreaName="Northern Beaches" />

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
            Get a quote for Northern Beaches <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  </>
);

export default NorthernBeachesPage;
