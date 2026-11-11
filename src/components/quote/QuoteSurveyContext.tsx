import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import type { QuoteService } from './types';

interface QuoteModalState {
  isOpen: boolean;
  initialService?: QuoteService;
  returnFocusTo?: HTMLElement | null;
}

interface QuoteModalContextValue {
  state: QuoteModalState;
  open: (initialService?: QuoteService, returnFocusTo?: HTMLElement) => void;
  close: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export const QuoteModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<QuoteModalState>({ isOpen: false });

  const open = useCallback((initialService?: QuoteService, returnFocusTo?: HTMLElement) => {
    setState({
      isOpen: true,
      initialService,
      returnFocusTo: returnFocusTo ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null),
    });
  }, []);

  const close = useCallback(() => {
    // Keep the opener until Radix finishes its close animation and focus cleanup.
    setState((current) => ({ ...current, isOpen: false }));
  }, []);

  const value = useMemo(() => ({ state, open, close }), [state, open, close]);

  return <QuoteModalContext.Provider value={value}>{children}</QuoteModalContext.Provider>;
};

export const useQuoteModal = () => {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) throw new Error('useQuoteModal must be used inside QuoteModalProvider');
  return ctx;
};
