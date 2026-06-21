import { Link } from 'react-router-dom';
import { CheckCircle, ChevronRight, Phone, MapPin, ArrowRight, Hammer } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { ServiceSchema, FAQSchema } from '@/components/LocalSEO/StructuredData';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import type { ServiceAreaCombo } from '@/data/serviceAreas';
import type { AreaProfile } from '@/data/areas';
import type { ServiceCategory } from '@/data/serviceHierarchy';

const SITE_URL = 'https://romansbuildingservices.com';

interface ServiceAreaPageProps {
  combo: ServiceAreaCombo;
  service: ServiceCategory;
  area: AreaProfile;
}

export const ServiceAreaPageTemplate = ({ combo, service, area }: ServiceAreaPageProps) => {
  const canonicalUrl = `${SITE_URL}/services/${service.slug}/${area.slug}`;
  const metaTitle = `${service.title} ${area.name} | Romans`;
  const metaDescription = combo.heroLine.slice(0, 158);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.title, href: service.route },
    { label: area.name, href: `/services/${service.slug}/${area.slug}` },
  ];

  // FAQ specific to this combo — surfaces in SERP and AI answers
  const localFaqs = [
    {
      question: `Do you do ${service.title.toLowerCase()} in ${area.name}?`,
      answer: `Yes. We've worked across ${area.name} for years. ${combo.context.split('. ').slice(0, 2).join('. ')}.`,
    },
    {
      question: `What makes ${service.title.toLowerCase()} in ${area.name} different from elsewhere in Sydney?`,
      answer: `${combo.context.split('. ').slice(2, 4).join('. ')}.`,
    },
    {
      question: `Are you licenced to do ${service.title.toLowerCase()} on heritage properties?`,
      answer: `Yes. We hold the NSW Masonry Contractor Licence and have worked on heritage-listed and conservation-zone properties across Sydney for over 20 years. Council heritage approval documentation is part of the job — we handle it.`,
    },
  ];

  return (
    <>
      <SEOHead title={metaTitle} description={metaDescription} canonical={canonicalUrl} />
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        service={`${service.title} — ${area.name}`}
        description={metaDescription}
        url={canonicalUrl}
      />
      <FAQSchema faqs={localFaqs} />

      {/* Breadcrumb strip */}
      <nav className="bg-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex flex-wrap items-center gap-x-2 text-sm text-text-muted font-body">
            {breadcrumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-x-2">
                {i> 0 && <ChevronRight className="w-4 h-4 text-text-muted/50" />}
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

      {/* Hero */}
      <section className="bg-navy py-20 md:py-24 texture-grain">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber/15 text-amber text-xs font-body mb-6">
            <MapPin className="w-3.5 h-3.5" />
            <span>{area.name}, Sydney</span>
          </div>
          <h1
            className="font-heading text-4xl md:text-5xl text-white mb-5">
            {service.title} in {area.name}
          </h1>
          <p
            className="font-body text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            {combo.heroLine}
          </p>
          <div className="mt-8">
            <a
              href="tel:0414922276"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-amber text-navy font-body font-medium hover:bg-amber-light transition-colors">
              <Phone className="w-4 h-4" />
              Call Minas — 0414 922 276
            </a>
          </div>
        </div>
      </section>

      {/* Area-specific service context — unique content for this combo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2
            className="font-heading text-3xl text-navy mb-6">
            {service.title} in {area.shortName}, the way we do it
          </h2>
          <p
            className="font-body text-text-secondary text-lg leading-relaxed mb-6">
            {combo.context}
          </p>
          <p
            className="font-body text-text-secondary leading-relaxed">
            {area.housingProfile}
          </p>
        </div>
      </section>

      {/* Service scope — pulled from canonical service data */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl text-navy mb-3">What's included in {service.title.toLowerCase()}</h2>
          <p className="font-body text-text-secondary mb-6">
            Full scope of work we cover under {service.title.toLowerCase()}:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.subServices.map((sub) => (
              <Link
                key={sub.slug}
                to={`${service.route}/${sub.slug}`}
                className="flex items-center justify-between gap-3 p-4 bg-white border border-stone-200 rounded-md hover:border-amber transition-colors group">
                <span className="flex items-center gap-3 font-body text-navy">
                  <Hammer className="w-4 h-4 text-amber flex-shrink-0" />
                  {sub.title}
                </span>
                <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-amber transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Suburbs covered in this area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl text-navy mb-2">Where we work in {area.name}</h2>
          <p className="font-body text-text-muted mb-6">
            We cover {service.title.toLowerCase()} across {area.name}. Click a suburb for site-specific notes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {area.suburbs.map((slug) => {
              const name = slug
                .split('-')
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(' ');
              return (
                <Link
                  key={slug}
                  to={`/suburbs/${slug}`}
                  className="font-body text-navy hover:text-amber px-4 py-2 rounded-md bg-stone-50 border border-stone-200 hover:border-amber transition-colors inline-flex items-center justify-between">
                  <span>{name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl text-navy mb-8">Common questions</h2>
          <div className="space-y-6">
            {localFaqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-heading text-lg text-navy mb-2">{faq.question}</h3>
                <p className="font-body text-text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl text-navy mb-6">Related</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to={service.route}
              className="block p-5 bg-stone-50 border border-stone-200 rounded-md hover:border-amber transition-colors">
              <div className="font-heading text-navy mb-1">All {service.title.toLowerCase()} services</div>
              <div className="font-body text-sm text-text-muted">Full scope across Sydney — not just {area.name}.</div>
            </Link>
            <Link
              to={area.href}
              className="block p-5 bg-stone-50 border border-stone-200 rounded-md hover:border-amber transition-colors">
              <div className="font-heading text-navy mb-1">{area.name} services</div>
              <div className="font-body text-sm text-text-muted">All the services we cover across {area.name}.</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy texture-grain">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            {service.title} project in {area.name}?
          </h2>
          <p className="font-body text-white/80 text-lg mb-8">
            Call Minas for a real assessment. 30 years across Sydney — straight answers, proper quotes, no high-pressure sales.
          </p>
          <a
            href="tel:0414922276"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-md bg-amber text-navy font-body font-semibold hover:bg-amber-light transition-colors">
            <Phone className="w-5 h-5" />
            0414 922 276
          </a>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaPageTemplate;
