import { useParams } from 'react-router-dom';
import { ProblemAreaPageTemplate } from '@/components/ProblemAreaPageTemplate';
import { PROBLEMS } from '@/data/problems';
import { AREAS } from '@/data/areas';
import NotFound from '@/pages/NotFound';

const ProblemAreaPage = () => {
  const { problem: problemSlug, area: areaSlug } = useParams<{ problem: string; area: string }>();
  if (!problemSlug || !areaSlug) return <NotFound />;

  const problem = PROBLEMS[problemSlug];
  const area = AREAS[areaSlug];
  if (!problem || !area) return <NotFound />;

  // Only render combos we've written area notes for — anything else is
  // either unintentional or not yet content-ready and should 404 rather
  // than serve a thin templated page.
  const areaNote = area.problemNotes[problemSlug];
  if (!areaNote) return <NotFound />;

  return <ProblemAreaPageTemplate problem={problem} area={area} areaNote={areaNote} />;
};

export default ProblemAreaPage;
