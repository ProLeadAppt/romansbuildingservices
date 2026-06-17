import { useParams } from 'react-router-dom';
import { CaseStudyTemplate } from '@/components/CaseStudyTemplate';
import { getCaseStudy } from '@/data/caseStudies';
import NotFound from '@/pages/NotFound';

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getCaseStudy(slug) : undefined;
  if (!data) return <NotFound />;
  return <CaseStudyTemplate cs={data} />;
};

export default CaseStudyPage;
