import { useParams } from 'react-router-dom';
import { ServiceAreaPageTemplate } from '@/components/ServiceAreaPageTemplate';
import { getServiceAreaCombo, getServiceData } from '@/data/serviceAreas';
import { getArea } from '@/data/areas';
import NotFound from '@/pages/NotFound';

const ServiceAreaPage = () => {
  const { service: serviceSlug, area: areaSlug } = useParams<{ service: string; area: string }>();
  if (!serviceSlug || !areaSlug) return <NotFound />;

  const combo = getServiceAreaCombo(serviceSlug, areaSlug);
  const service = getServiceData(serviceSlug);
  const area = getArea(areaSlug);
  // Only render combos with hand-written context — anything else 404s so
  // we don't ship thin templated pages just because the URL pattern matches.
  if (!combo || !service || !area) return <NotFound />;

  return <ServiceAreaPageTemplate combo={combo} service={service} area={area} />;
};

export default ServiceAreaPage;
