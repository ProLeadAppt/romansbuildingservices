import { SEO } from '@/components/SEO';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PlaceSchema, ServiceSchema } from '@/components/LocalSEO/StructuredData';
import { AreaSuburbsLinks } from '@/components/AreaSuburbsLinks';
import { AreaProblemLinks } from '@/components/AreaProblemLinks';
import { AreaServiceLinks } from '@/components/AreaServiceLinks';
import { QuoteCTAButton } from '@/components/quote';

const services = [
  'Sandstone restoration and repointing',
  'Heritage facade repairs',
  'Commercial building remedial work',
  'Concrete cancer treatment',
  'Structural crack repairs',
  'Repointing and mortar repairs',
];

const SydneyCBDPage = () => (
  <>
    <SEO
      title="Sydney CBD Masonry and Building Services | Romans"
      description="Masonry and heritage restoration in Sydney CBD. Romans Building Services handles stone, brick, and structural work across the inner city. Call Minas."
      canonical="/areas/sydney-cbd"
    />
    <PlaceSchema
      name="Sydney CBD"
      description="Masonry, sandstone restoration and remedial building services across Sydney CBD."
      url="https://romansbuildingservices.com/areas/sydney-cbd"
    />
    <ServiceSchema
      service="Masonry and Heritage Restoration — Sydney CBD"
      description="Sandstone restoration, heritage facade repairs, concrete cancer treatment and structural crack repairs across the Sydney CBD."
      url="https://romansbuildingservices.com/areas/sydney-cbd"
    />

    {/* Hero */}
    <section className="bg-navy py-24">
      <div className="container mx-auto px-4 text-center">
        <h1
          className="font-heading text-4xl md:text-5xl text-white mb-4">
          Sydney CBD
        </h1>
        <p
          className="font-body text-white/70 max-w-xl mx-auto text-lg">
          Heritage buildings, commercial facades and sandstone restoration in the heart of the city.
        </p>
      </div>
    </section>

    {/* Content */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div>
          <p className="font-body text-text-secondary mb-6">
            For a Sydney CBD masonry enquiry, include the building type, the affected element and any existing engineering or heritage reports. A street-facing facade, warehouse conversion and commercial tenancy can involve different access and protection needs.
          </p>
          <p className="font-body text-text-secondary mb-6">
            Stone profiles, mortar joints and earlier repairs help establish what can be retained and what needs attention. Check the property’s heritage status and relevant permissions before cleaning, repointing or replacing original fabric. A careful assessment should guide the material and finish.
          </p>
          <p className="font-body text-text-secondary mb-10">
            For cracks, spalling concrete or loose facade material, keep clear of affected areas and seek appropriate safety advice. Discuss scope, loading access, neighbouring occupants and availability with Romans before arranging an assessment.
          </p>
        </div>

        {/* Services list */}
        <div>
          <h2 className="font-heading text-2xl text-navy mb-6">What we do in Sydney CBD</h2>
          <ul className="space-y-3 mb-12">
            {services.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green mt-0.5 shrink-0" />
                <span className="font-body text-text-secondary">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <AreaSuburbsLinks parentAreaHref="/areas/sydney-cbd" parentAreaName="Sydney CBD" />

        {/* CTA */}
        <div>
          <QuoteCTAButton
            className="inline-flex items-center gap-2 bg-amber text-navy font-body font-bold px-8 py-4 rounded-lg hover:bg-amber/90 transition-colors">
            Get a quote for Sydney CBD <ArrowRight className="w-4 h-4" />
          </QuoteCTAButton>
        </div>
      </div>
    </section>

    <AreaProblemLinks areaSlug="sydney-cbd" />
    <AreaServiceLinks areaSlug="sydney-cbd" />
  </>
);

export default SydneyCBDPage;
