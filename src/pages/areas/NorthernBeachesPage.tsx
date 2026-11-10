import { SEO } from '@/components/SEO';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PlaceSchema, ServiceSchema } from '@/components/LocalSEO/StructuredData';
import { AreaSuburbsLinks } from '@/components/AreaSuburbsLinks';
import { AreaProblemLinks } from '@/components/AreaProblemLinks';
import { AreaServiceLinks } from '@/components/AreaServiceLinks';
import { QuoteCTAButton } from '@/components/quote';

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
      title="Northern Beaches Masonry and Building Services | Romans"
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
        <h1
          className="font-heading text-4xl md:text-5xl text-white mb-4">
          Northern Beaches
        </h1>
        <p
          className="font-body text-white/70 max-w-xl mx-auto text-lg">
          Coastal repairs, salt damage remediation and masonry restoration from Manly to Palm Beach.
        </p>
      </div>
    </section>

    {/* Content */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div>
          <p className="font-body text-text-secondary mb-6">
            For a Northern Beaches enquiry, describe the property and the affected wall, balcony, stonework or retaining structure. Coastal exposure may be relevant, but damage should not automatically be attributed to salt. The actual condition and consequences of failure guide the next step.
          </p>
          <p className="font-body text-text-secondary mb-6">
            For loose concrete or masonry above an entrance or occupied area, keep clear and arrange professional assessment. Existing strata reports and previous repair details are useful for apartment-building enquiries in Manly, Dee Why, Mona Vale and surrounding areas.
          </p>
          <p className="font-body text-text-secondary mb-10">
            Retaining walls need assessment of the retained ground, drainage, nearby structures and access. Share the location and any existing reports with Romans to discuss the scope and availability. Engineering and any approval requirements should be resolved before repair or rebuilding.
          </p>
        </div>

        {/* Services list */}
        <div>
          <h2 className="font-heading text-2xl text-navy mb-6">What we do on the Northern Beaches</h2>
          <ul className="space-y-3 mb-12">
            {services.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green mt-0.5 shrink-0" />
                <span className="font-body text-text-secondary">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <AreaSuburbsLinks parentAreaHref="/areas/northern-beaches" parentAreaName="Northern Beaches" />

        {/* CTA */}
        <div>
          <QuoteCTAButton
            className="inline-flex items-center gap-2 bg-amber text-navy font-body font-bold px-8 py-4 rounded-lg hover:bg-amber/90 transition-colors">
            Get a quote for Northern Beaches <ArrowRight className="w-4 h-4" />
          </QuoteCTAButton>
        </div>
      </div>
    </section>

    <AreaProblemLinks areaSlug="northern-beaches" />
    <AreaServiceLinks areaSlug="northern-beaches" />
  </>
);

export default NorthernBeachesPage;
