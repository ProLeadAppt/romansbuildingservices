import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { QuoteSurvey } from './QuoteSurvey';
import { useQuoteModal } from './QuoteSurveyContext';

export const QuoteSurveyModal = () => {
  const { state, close } = useQuoteModal();

  return (
    <Dialog open={state.isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent
        className="max-w-2xl w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto p-6 md:p-8 bg-white border-stone-200"
        onCloseAutoFocus={(event) => {
          // This controlled dialog has no DialogTrigger for Radix to restore.
          event.preventDefault();
          // Do not steal focus on route unmount, a quick reopen, or when the
          // user has deliberately focused another control during dismissal.
          if (state.isOpen || document.activeElement !== document.body) return;
          if (state.returnFocusTo?.isConnected) {
            state.returnFocusTo.focus({ preventScroll: true });
          }
        }}
        onInteractOutside={(e) => e.preventDefault()}>
        <DialogTitle className="sr-only">Request a quote from Romans Building Services</DialogTitle>
        <DialogDescription className="sr-only">
          Tell us what work you need, where the property is and how Minas can contact you.
        </DialogDescription>
        <QuoteSurvey
          variant="modal"
          headingLevel="h3"
          onClose={close}
          initialService={state.initialService}
        />
      </DialogContent>
    </Dialog>
  );
};
