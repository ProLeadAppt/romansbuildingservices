import { forwardRef, ButtonHTMLAttributes } from 'react';
import { useQuoteModal } from './QuoteSurveyContext';
import type { QuoteService } from './types';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  initialService?: QuoteService;
};

export const QuoteCTAButton = forwardRef<HTMLButtonElement, Props>(
  ({ initialService, onClick, children, ...rest }, ref) => {
    const { open } = useQuoteModal();

    return (
      <button
        ref={ref}
        type="button"
        onClick={(e) => {
          open(initialService);
          onClick?.(e);
        }}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

QuoteCTAButton.displayName = 'QuoteCTAButton';
