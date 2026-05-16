import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import type { QuoteService } from './types';

interface QuoteModalState {
  isOpen: boolean;
  initialService?: QuoteService;
}

interface QuoteModalContextValue {
  state: QuoteModalState;
  open: (initialService?: QuoteService) => void;
  close: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export const QuoteModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<QuoteModalState>({ isOpen: false });

  const open = useCallback((initialService?: QuoteService) => {
    setState({ isOpen: true, initialService });
  }, []);

  const close = useCallback(() => {
    setState({ isOpen: false });
  }, []);

  const value = useMemo(() => ({ state, open, close }), [state, open, close]);

  return <QuoteModalContext.Provider value={value}>{children}</QuoteModalContext.Provider>;
};

export const useQuoteModal = () => {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) throw new Error('useQuoteModal must be used inside QuoteModalProvider');
  return ctx;
};
