import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Phone, Calendar } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { CollectionPageSchema } from '@/components/LocalSEO/StructuredData';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { getAllHeritageEras } from '@/data/heritage';

const SITE_URL = 'https://romansbuildingservices.com';

const HeritageHubPage = () => {
  const eras = getAllHeritageEras();
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
    { label: 'Heritage Eras', href: '/heritage' },
  ];

  return (
    <>
      <SEOHead
        title="Sydney Heritage Building Restoration by Era | Romans Building Services"
        description="Heritage restoration guides for Sydney's main building eras: Colonial sandstone, Victorian terraces, Federation homes, Art Deco apartments and Inter-war cottages."
        canonical="/heritage"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <CollectionPageSchema
        name="Heritage Building Restoration by Era"
        description="Restoration guides for Sydney's main heritage building eras."
        url={`${SITE_URL}/heritage`}
        items={eras.map((e) => ({ name: e.name, url: `${SITE_URL}/heritage/${e.slug}`, description: e.heroTagline }))}
      />

      <nav className="bg-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex flex-wrap items-center gap-x-2 text-sm text-text-muted font-body">
            {breadcrumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-x-2">
                {i > 0 && <ChevronRight className="w-4 h-4 text-text-muted/50" />}
                {i < breadcrumbs.length - 1 ? (
                  <Link to={c.href} className="hover:text-navy">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-navy">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <section className="bg-navy py-20 md:py-24 texture-grain">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl text-white mb-5"
          >
            Heritage building restoration, by era
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-body text-white/80 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Every era of Sydney heritage building has its own materials, construction methods and failure modes. Find the era that matches your property.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {eras.map((era, i) => (
              <motion.div
                key={era.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/heritage/${era.slug}`}
                  className="block p-6 border border-stone-200 rounded-lg hover:border-amber transition-colors h-full"
                >
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber/10 text-amber text-xs font-body mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{era.era}</span>
                  </div>
                  <h2 className="font-heading text-xl text-navy mb-2">{era.name}</h2>
                  <p className="font-body text-text-secondary text-sm mb-4">{era.heroTagline}</p>
                  <span className="font-body text-amber text-sm inline-flex items-center gap-1">
                    Read the guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy texture-grain">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">Not sure which era?</h2>
          <p className="font-body text-white/80 text-lg mb-8">
            Call Minas. We'll work out what you've got and what it needs — over the phone or on site.
          </p>
          <a
            href="tel:+61414922276"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-md bg-amber text-navy font-body font-semibold hover:bg-amber-light transition-colors"
          >
            <Phone className="w-5 h-5" />
            0414 922 276
          </a>
        </div>
      </section>
    </>
  );
};

export default HeritageHubPage;
