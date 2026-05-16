import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Phone, Calendar } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { CollectionPageSchema, FAQSchema } from '@/components/LocalSEO/StructuredData';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { getAllHeritageEras } from '@/data/heritage';

const SITE_URL = 'https://romansbuildingservices.com';

const heritageFaqs = [
  {
    question: 'How do I work out what era my place is?',
    answer:
      "Look at the bricks first. Federation-era bricks are usually deep red and pressed. Victorian bricks are often handmade and slightly irregular. Colonial sandstone is hand-dressed and shows tool marks. If you can find the year your suburb's main street was built, that is usually a good guide. Or just ring us and send a photo.",
  },
  {
    question: 'Why does the era matter for restoration?',
    answer:
      "Materials and methods have changed every 30 to 40 years. A Victorian terrace was built with lime mortar and soft handmade brick. Repointing it with modern Portland cement traps moisture and the bricks start blowing out in a decade. Federation work used different mortar mixes, different brick sizes, different bonding. The wrong materials look wrong and fail early.",
  },
  {
    question: 'Are heritage repairs more expensive?',
    answer:
      "Usually yes. Heritage work takes longer because the materials are slower and the methods are more careful. Hand-mixed lime mortar takes hours longer than bag mix. Sandstone is hand-dressed on site. The price reflects the time, not the badge. We give a full breakdown so you can see where the hours go.",
  },
  {
    question: 'Do I need council approval for heritage work?',
    answer:
      "For listed buildings, almost always. Council heritage officers will want to see a scope of works and sometimes a heritage impact statement. We have done this enough times that we know which councils ask for what. We can prepare what is needed and work through the approval before any work starts.",
  },
  {
    question: 'What if my building is not formally listed?',
    answer:
      "Plenty of older buildings in Sydney are not listed but still sit in heritage conservation areas, which means the council still has a say in external work. Internal work usually has fewer restrictions. We check the LEP for your area as part of the quote.",
  },
];

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
        title="Sydney Heritage Restoration by Era | Federation, Victorian, Colonial | Romans Building Services"
        description="Heritage restoration guides for Sydney's main building eras. Colonial sandstone, Victorian terraces, Federation homes, Art Deco, Inter-war cottages."
        canonical="/heritage"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <CollectionPageSchema
        name="Heritage Building Restoration by Era"
        description="Restoration guides for Sydney's main heritage building eras."
        url={`${SITE_URL}/heritage`}
        items={eras.map((e) => ({ name: e.name, url: `${SITE_URL}/heritage/${e.slug}`, description: e.heroTagline }))}
      />
      <FAQSchema faqs={heritageFaqs} />

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

      {/* Lead essay */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto font-body text-text-muted space-y-5 text-base md:text-lg leading-relaxed">
          <p>
            Most heritage work in Sydney is done badly. Not from lack of trying. Most builders are
            good builders. They just learn the methods in trade school that work for the houses
            being built in the year they trained. Heritage work needs methods that were standard 80
            or 120 years ago. The materials are different, the mortar mixes are different, the
            timber sizes are different. Modern fixes on old buildings fail.
          </p>
          <p>
            Minas spent the early years of the business pulling apart bad heritage fixes and putting
            them back the right way. After 30 years there is a fairly clear pattern. The eras below
            are the ones we see most often in Sydney. Each one has its own pages with the materials
            we use, the failure modes we look for, and what a proper restoration on a building of
            that age actually involves.
          </p>
          <p>
            Read the era closest to your place. If you are not sure which era your place is, the
            questions further down the page should help. Or just ring Minas and we will work it out.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg-light">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl text-navy mb-12 text-center">
            The five main eras we work on
          </h2>
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
                  className="block p-6 bg-white border border-stone-200 rounded-lg hover:border-amber transition-colors h-full"
                >
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber/10 text-amber text-xs font-body mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{era.era}</span>
                  </div>
                  <h3 className="font-heading text-xl text-navy mb-2">{era.name}</h3>
                  <p className="font-body text-text-secondary text-sm leading-relaxed mb-4">{era.heroTagline}</p>
                  <span className="font-body text-amber text-sm inline-flex items-center gap-1">
                    Read the guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-navy mb-3 text-center">
            Questions before you start a heritage job
          </h2>
          <p className="font-body text-text-muted text-center mb-12 max-w-2xl mx-auto">
            The questions that come up on every heritage quote.
          </p>
          <div className="space-y-4">
            {heritageFaqs.map((faq) => (
              <div key={faq.question} className="bg-bg-light p-6 rounded-md">
                <h3 className="font-heading text-lg text-navy mb-2">{faq.question}</h3>
                <p className="font-body text-text-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy texture-grain">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">Not sure which era?</h2>
          <p className="font-body text-white/80 text-lg mb-8">
            Call Minas. We will work out what you have and what it needs, over the phone or on site.
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
