import { useParams } from 'react-router-dom';
import { SuburbPageTemplate } from '@/components/SuburbPageTemplate';
import { getSuburb } from '@/data/suburbs';
import NotFound from '@/pages/NotFound';

const SuburbPage = () => {
  const { suburb } = useParams<{ suburb: string }>();
  const data = suburb ? getSuburb(suburb) : undefined;
  if (!data) return <NotFound />;
  return <SuburbPageTemplate {...data} />;
};

export default SuburbPage;
