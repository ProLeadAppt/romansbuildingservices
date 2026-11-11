import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { CollectionPageSchema, FAQSchema } from '@/components/LocalSEO/StructuredData';
import { QuoteCTAButton } from '@/components/quote';
import { areaGuides } from '@/data/areaGuides';

const areasFaqs = [
  {
    question: 'Where is your current service focus?',
    answer: 'Our focus is Hawkesbury and Western Sydney, including North Richmond, Richmond, Kurmond, Kurrajong, Penrith, Windsor, Blacktown and surrounding areas. Existing Sydney area guides remain available. Contact Minas to discuss your suburb, repair and availability.',
  },
  {
    question: 'My suburb does not have its own page. Can I still enquire?',
    answer: 'Yes. Send your suburb and a short description of the repair. The guides are a starting point, not an exhaustive list of properties we can assess. Location, scope, access and current availability determine the next step.',
  },
  {
    question: 'Do you charge for a site assessment?',
    answer: 'Ask what the proposed assessment includes and whether there is a fee before arranging it. A quote enquiry and a diagnostic investigation can involve different work.',
  },
  {
    question: 'Can an area guide tell me what is wrong with my building?',
    answer: 'No. The guides explain considerations that may be relevant, but the condition of the actual property matters. Photographs can help start a conversation; an inspection, engineering advice or heritage advice may be needed before a repair is scoped.',
  },
];

const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Service areas', href: '/areas' }];

const ServicesAreasPage = () => (
  <>
    <SEO
      title="Hawkesbury & Sydney Service Areas | Romans"
      description="Explore Romans’ Hawkesbury and Western Sydney service focus, local enquiry guidance and existing Sydney masonry and restoration area guides."
      canonical="/areas"
    />
    <BreadcrumbSchema items={breadcrumbs} />
    <CollectionPageSchema
      name="Masonry and restoration area guides"
      description="Explore our Hawkesbury and Western Sydney service focus and existing Sydney masonry, heritage and remedial guides."
      url="https://romansbuildingservices.com/areas"
      items={areaGuides.map((area) => ({ name: area.name, url: `https://romansbuildingservices.com${area.href}`, description: area.short }))}
    />
    <FAQSchema faqs={areasFaqs} />

    <nav aria-label="Breadcrumb" className="bg-bg-light px-6 pb-4 pt-24 text-sm">
      <div className="craft-container flex flex-wrap gap-3"><Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Service areas</span></div>
    </nav>
    <section className="bg-navy craft-section">
      <div className="craft-container max-w-4xl">
        <p className="text-amber text-sm font-semibold mb-4">Hawkesbury · Western Sydney · Sydney area guides</p>
        <h1 className="text-white mb-6">A practical starting point for your local repair</h1>
        <p className="text-white/85 text-lg max-w-3xl leading-relaxed">Romans Building Services is based in The Slopes, NSW. Our current focus is Hawkesbury and Western Sydney. Start with your area, then discuss the property, access and repair with Minas.</p>
        <Link to="/areas/hawkesbury-western-sydney" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded bg-amber px-6 py-3 font-semibold text-navy">Explore our local service area <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link>
      </div>
    </section>

    <section className="craft-section" aria-labelledby="area-guides-heading">
      <div className="craft-container">
        <div className="max-w-3xl mb-10">
          <p className="craft-label">Find your area</p>
          <h2 id="area-guides-heading" className="text-navy mb-5">Local guidance, with the property in mind</h2>
          <p className="text-text-secondary text-lg leading-relaxed">A suburb does not establish why a wall has cracked or which repair it needs. These guides help you prepare an enquiry and understand relevant materials, access and approval questions. Wider Sydney enquiries can still be discussed case by case.</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {areaGuides.map((area) => (
            <Link key={area.href} to={area.href} className="craft-card flex flex-col hover:border-navy transition-colors">
              <div className="flex items-start gap-3 mb-4"><MapPin aria-hidden="true" className="w-5 h-5 mt-1 shrink-0 text-navy" /><h3 className="text-xl text-navy">{area.name}</h3></div>
              <p className="text-text-secondary text-base leading-relaxed flex-1">{area.description}</p>
              <span className="inline-flex min-h-11 items-center gap-2 mt-5 font-semibold text-navy">View area guide <ArrowRight aria-hidden="true" className="w-4 h-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="craft-section bg-bg-light" aria-labelledby="enquiry-heading">
      <div className="craft-container grid gap-10 md:grid-cols-2">
        <div><p className="craft-label">Before you get in touch</p><h2 id="enquiry-heading" className="text-navy mb-5">Send the details that help plan an assessment</h2><p className="text-text-secondary text-lg leading-relaxed">You do not need to diagnose the fault first. Take photographs only from a safe position, and avoid climbing or approaching loose or unstable masonry.</p></div>
        <div>
          <ul className="list-disc pl-5 space-y-3 text-text-secondary text-lg"><li>Your suburb and the type of building or wall</li><li>A wide view, a close view of the damage and safe access details</li><li>When the damage appeared and whether it is changing</li><li>Any existing engineering reports, heritage listing or strata requirements</li></ul>
          <Link to="/learn/brick-sandstone-repair-quotes-hawkesbury" className="mt-6 inline-flex min-h-11 items-center text-navy underline">Read the repair enquiry checklist</Link>
          <p className="mt-3"><Link to="/services" className="inline-flex min-h-11 items-center text-navy underline">Compare masonry and restoration services</Link></p>
        </div>
      </div>
    </section>

    <section className="craft-section" aria-labelledby="coverage-questions-heading">
      <div className="mx-auto max-w-4xl"><h2 id="coverage-questions-heading" className="text-navy mb-8">Questions about service coverage</h2><div className="space-y-4">{areasFaqs.map((faq) => <div key={faq.question} className="craft-card"><h3 className="text-lg text-navy mb-3">{faq.question}</h3><p className="text-text-secondary leading-relaxed">{faq.answer}</p></div>)}</div></div>
    </section>

    <section className="bg-navy craft-section">
      <div className="craft-container max-w-3xl"><h2 className="text-white mb-5">Tell us about your property</h2><p className="text-white/85 text-lg mb-7">Share your suburb and what you can see. We can discuss availability and whether the next step is an assessment or specialist advice.</p><QuoteCTAButton className="min-h-12 rounded bg-amber px-6 py-3 font-semibold text-navy">Discuss your repair</QuoteCTAButton></div>
    </section>
  </>
);

export default ServicesAreasPage;
