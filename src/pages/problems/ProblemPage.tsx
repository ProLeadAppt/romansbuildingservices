import { useParams } from 'react-router-dom';
import { ProblemPageTemplate } from '@/components/ProblemPageTemplate';
import { getProblem } from '@/data/problems';
import NotFound from '@/pages/NotFound';

const ProblemPage = () => {
  const { problem } = useParams<{ problem: string }>();
  const data = problem ? getProblem(problem) : undefined;
  if (!data) return <NotFound />;
  return <ProblemPageTemplate {...data} />;
};

export default ProblemPage;
