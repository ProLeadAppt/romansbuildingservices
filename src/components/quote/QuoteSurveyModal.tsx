import { Dialog, DialogContent } from '@/components/ui/dialog';
import { QuoteSurvey } from './QuoteSurvey';
import { useQuoteModal } from './QuoteSurveyContext';

export const QuoteSurveyModal = () => {
  const { state, close } = useQuoteModal();

  return (
    <Dialog open={state.isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent
        className="max-w-2xl w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto p-6 md:p-8 bg-white border-stone-200"
        onInteractOutside={(e) => e.preventDefault()}>
        <QuoteSurvey
          variant="modal"
          onClose={close}
          initialService={state.initialService}
        />
      </DialogContent>
    </Dialog>
  );
};
