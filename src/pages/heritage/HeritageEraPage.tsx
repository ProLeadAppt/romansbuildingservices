import { useParams } from 'react-router-dom';
import { HeritageEraPageTemplate } from '@/components/HeritageEraPageTemplate';
import { getHeritageEra } from '@/data/heritage';
import NotFound from '@/pages/NotFound';

const HeritageEraPage = () => {
  const { era } = useParams<{ era: string }>();
  const data = era ? getHeritageEra(era) : undefined;
  if (!data) return <NotFound />;
  return <HeritageEraPageTemplate data={data} />;
};

export default HeritageEraPage;
