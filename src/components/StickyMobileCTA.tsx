import { Phone, ClipboardList } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { QuoteCTAButton } from '@/components/quote';
import type { QuoteService } from '@/components/quote';

const quoteTypeForPath = (pathname: string): QuoteService => {
  if (pathname.includes('heritage')) return 'heritage-restoration';
  if (pathname.includes('concrete') || pathname.includes('balcon')) return 'concrete-repair';
  if (pathname.includes('foundation') || pathname.includes('underpinning') || pathname.includes('settlement')) return 'foundation';
  if (pathname.includes('brick') || pathname.includes('repoint') || pathname.includes('tuckpoint')) return 'brickwork-repointing';
  if (pathname.includes('stone') || pathname.includes('masonry')) return 'stonework';
  if (pathname.includes('structural') || pathname.includes('crack') || pathname.includes('lintel')) return 'structural-repair';
  return 'not-sure';
};

export const StickyMobileCTA = () => {
  const { pathname } = useLocation();
  const shouldShow =
    pathname.startsWith('/services') ||
    pathname.startsWith('/suburbs') ||
    pathname.startsWith('/problems');

  if (!shouldShow) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-navy/95 px-3 py-3 shadow-premium-lg backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href="tel:0414922276"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white text-sm font-semibold text-navy">
          <Phone className="h-4 w-4" />
          Call Minas
        </a>
        <QuoteCTAButton
          initialService={quoteTypeForPath(pathname)}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber text-sm font-semibold text-navy">
          <ClipboardList className="h-4 w-4" />
          Quote
        </QuoteCTAButton>
      </div>
    </div>
  );
};
