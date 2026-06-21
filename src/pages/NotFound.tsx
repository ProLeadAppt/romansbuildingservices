import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';

const NotFound = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | Romans"
        description="This page doesn't exist. Maybe it was demolished. Head back to the home page or call Minas for a quote."
        canonical="/404"
        noIndex
      />
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-heading text-5xl text-navy mb-4">404</h1>
          <p className="font-body text-lg text-text-muted mb-8">
            This page doesn't exist. Maybe it was demolished.
          </p>
          <Link
            to="/"
            className="inline-block bg-navy text-white font-body font-medium px-6 py-3 rounded-md hover:bg-navy-light transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
