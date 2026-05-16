import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Landmark,
  Hammer,
  Wrench,
  Construction,
  Shovel,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Camera,
  X,
  Loader2,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import type {
  QuoteData,
  QuoteService,
  QuoteUrgency,
  QuotePhoto,
} from './types';
import { SERVICE_LABELS, URGENCY_LABELS } from './types';
import { submitQuote, trackQuoteEvent } from './submitQuote';

const MAX_PHOTOS = 3;
const MAX_PHOTO_BYTES = 2 * 1024 * 1024;

const SERVICE_OPTIONS: Array<{ value: QuoteService; icon: typeof Hammer }> = [
  { value: 'heritage-restoration', icon: Landmark },
  { value: 'stonework', icon: Hammer },
  { value: 'brickwork-repointing', icon: Construction },
  { value: 'structural-repair', icon: Wrench },
  { value: 'concrete-repair', icon: Construction },
  { value: 'foundation', icon: Shovel },
  { value: 'not-sure', icon: HelpCircle },
];

const URGENCY_OPTIONS: QuoteUrgency[] = ['asap', 'this-month', 'next-months', 'researching'];

const emptyData = (): QuoteData => ({
  service: null,
  suburb: '',
  urgency: null,
  photos: [],
  name: '',
  phone: '',
  email: '',
  message: '',
});

interface QuoteSurveyProps {
  variant: 'modal' | 'inline';
  onClose?: () => void;
  initialService?: QuoteService;
}

export const QuoteSurvey = ({ variant, onClose, initialService }: QuoteSurveyProps) => {
  const [step, setStep] = useState<1 | 2 | 3 | 'success'>(1);
  const [data, setData] = useState<QuoteData>(() => ({
    ...emptyData(),
    service: initialService ?? null,
  }));
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  useEffect(() => {
    trackQuoteEvent('quote_opened', { variant });
  }, [variant]);

  useEffect(() => {
    if (step !== 'success') {
      trackQuoteEvent(`quote_step_${step}`, { variant });
    }
  }, [step, variant]);

  const selectService = (service: QuoteService) => {
    setData((d) => ({ ...d, service }));
    setStep(2);
  };

  const goNext = () => {
    if (step === 2) {
      if (!data.suburb.trim() || !data.urgency) return;
      setStep(3);
    }
  };

  const goBack = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
  };

  const handlePhotoSelect = async (files: FileList | null) => {
    if (!files) return;
    const remaining = MAX_PHOTOS - data.photos.length;
    const newOnes = Array.from(files).slice(0, remaining);
    const next: QuotePhoto[] = [];
    for (const file of newOnes) {
      if (file.size > MAX_PHOTO_BYTES) {
        setError(`${file.name} is too large. Max 2MB per photo.`);
        continue;
      }
      try {
        const dataUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result));
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(file);
        });
        next.push({ filename: file.name, dataUrl, size: file.size });
      } catch {
        setError(`Could not read ${file.name}.`);
      }
    }
    if (next.length) {
      setError(null);
      setData((d) => ({ ...d, photos: [...d.photos, ...next] }));
    }
    if (photoInputRef.current) photoInputRef.current.value = '';
  };

  const removePhoto = (idx: number) => {
    setData((d) => ({ ...d, photos: d.photos.filter((_, i) => i !== idx) }));
  };

  const validateStep3 = () => {
    if (!data.name.trim()) return 'Please enter your name.';
    const phone = data.phone.trim();
    if (!phone) return 'Please enter a phone number.';
    if (phone.replace(/\D/g, '').length < 8) return 'That phone number looks too short.';
    if (data.email.trim()) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());
      if (!emailOk) return 'That email address does not look right.';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateStep3();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setSubmitting(true);
    const result = await submitQuote(data, location.pathname);
    setSubmitting(false);
    if (result.ok) {
      trackQuoteEvent('quote_submitted', {
        service: data.service,
        urgency: data.urgency,
        hasPhotos: data.photos.length > 0,
      });
      setStep('success');
    } else {
      setError(result.error ?? 'Something went wrong. Please call 0414 922 276.');
    }
  };

  const reset = () => {
    setData({ ...emptyData(), service: initialService ?? null });
    setStep(initialService ? 2 : 1);
    setError(null);
  };

  const isModal = variant === 'modal';
  const containerClass = isModal
    ? 'w-full max-w-2xl'
    : 'w-full max-w-2xl mx-auto';

  return (
    <div className={containerClass}>
      {/* Progress bar */}
      {step !== 'success' && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  s <= (step as number) ? 'bg-amber' : 'bg-stone-200'
                }`}
              />
            ))}
          </div>
          <p className="font-body text-xs text-text-muted">
            Step {step} of 3 &middot; Takes about 60 seconds
          </p>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* STEP 1 — Service */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl text-navy mb-2">
              What needs doing?
            </h2>
            <p className="font-body text-text-muted mb-6">
              Pick the closest match. If nothing fits, hit Not Sure and we will work it out.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICE_OPTIONS.map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => selectService(opt.value)}
                    className="flex items-center gap-3 p-4 bg-white border-2 border-stone-200 rounded-lg hover:border-amber hover:bg-amber/5 transition-colors text-left"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-navy/5 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-navy" />
                    </div>
                    <span className="font-body text-navy">{SERVICE_LABELS[opt.value]}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* STEP 2 — Where, when, photos */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl text-navy mb-2">
              Where and when?
            </h2>
            <p className="font-body text-text-muted mb-6">
              We work right across Sydney. Photos help us quote faster but are optional.
            </p>

            <div className="space-y-5">
              <div>
                <label htmlFor="qs-suburb" className="block font-body text-sm font-semibold text-navy mb-2">
                  Suburb or postcode <span className="text-red-500">*</span>
                </label>
                <input
                  id="qs-suburb"
                  type="text"
                  value={data.suburb}
                  onChange={(e) => setData((d) => ({ ...d, suburb: e.target.value }))}
                  placeholder="e.g. Paddington or 2021"
                  className="w-full border-2 border-stone-200 rounded-lg px-4 py-3 font-body text-navy focus:outline-none focus:border-navy"
                  autoFocus
                />
              </div>

              <div>
                <p className="block font-body text-sm font-semibold text-navy mb-2">
                  How soon do you need this done? <span className="text-red-500">*</span>
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {URGENCY_OPTIONS.map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setData((d) => ({ ...d, urgency: u }))}
                      className={`p-3 rounded-lg border-2 font-body text-sm transition-colors ${
                        data.urgency === u
                          ? 'border-amber bg-amber/10 text-navy'
                          : 'border-stone-200 hover:border-amber/50 text-navy'
                      }`}
                    >
                      {URGENCY_LABELS[u]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="block font-body text-sm font-semibold text-navy mb-2">
                  Photos <span className="font-normal text-text-muted">(optional, up to 3)</span>
                </p>
                <input
                  ref={photoInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => handlePhotoSelect(e.target.files)}
                  className="hidden"
                  id="qs-photos"
                />
                {data.photos.length < MAX_PHOTOS && (
                  <label
                    htmlFor="qs-photos"
                    className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-stone-300 rounded-lg cursor-pointer hover:border-amber transition-colors text-text-muted font-body text-sm"
                  >
                    <Camera className="w-5 h-5" />
                    Add photos of the job
                  </label>
                )}
                {data.photos.length > 0 && (
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {data.photos.map((photo, i) => (
                      <div key={i} className="relative aspect-square rounded-md overflow-hidden bg-stone-100">
                        <img
                          src={photo.dataUrl}
                          alt={photo.filename}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(i)}
                          aria-label="Remove photo"
                          className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {error && (
              <p className="mt-4 text-red-600 font-body text-sm">{error}</p>
            )}

            <div className="mt-8 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center gap-1 px-4 py-3 font-body text-navy hover:text-navy/70"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={!data.suburb.trim() || !data.urgency}
                className="inline-flex items-center gap-1 px-6 py-3 bg-amber text-navy font-body font-semibold rounded-lg hover:bg-amber/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3 — Contact */}
        {step === 3 && (
          <motion.form
            key="step3"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit}
          >
            <h2 className="font-heading text-2xl md:text-3xl text-navy mb-2">
              How do we reach you?
            </h2>
            <p className="font-body text-text-muted mb-6">
              Minas will call you back within 24 hours. Email is optional.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="qs-name" className="block font-body text-sm font-semibold text-navy mb-2">
                  Your name <span className="text-red-500">*</span>
                </label>
                <input
                  id="qs-name"
                  type="text"
                  required
                  value={data.name}
                  onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                  className="w-full border-2 border-stone-200 rounded-lg px-4 py-3 font-body text-navy focus:outline-none focus:border-navy"
                  autoFocus
                />
              </div>

              <div>
                <label htmlFor="qs-phone" className="block font-body text-sm font-semibold text-navy mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="qs-phone"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  value={data.phone}
                  onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
                  placeholder="04XX XXX XXX"
                  className="w-full border-2 border-stone-200 rounded-lg px-4 py-3 font-body text-navy focus:outline-none focus:border-navy"
                />
              </div>

              <div>
                <label htmlFor="qs-email" className="block font-body text-sm font-semibold text-navy mb-2">
                  Email <span className="font-normal text-text-muted">(optional)</span>
                </label>
                <input
                  id="qs-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full border-2 border-stone-200 rounded-lg px-4 py-3 font-body text-navy focus:outline-none focus:border-navy"
                />
              </div>

              <div>
                <label htmlFor="qs-message" className="block font-body text-sm font-semibold text-navy mb-2">
                  Anything else we should know? <span className="font-normal text-text-muted">(optional)</span>
                </label>
                <textarea
                  id="qs-message"
                  rows={3}
                  value={data.message}
                  onChange={(e) => setData((d) => ({ ...d, message: e.target.value }))}
                  placeholder="Access issues, deadline, anything specific..."
                  className="w-full border-2 border-stone-200 rounded-lg px-4 py-3 font-body text-navy focus:outline-none focus:border-navy resize-none"
                />
              </div>
            </div>

            {error && (
              <p className="mt-4 text-red-600 font-body text-sm">{error}</p>
            )}

            <div className="mt-8 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={goBack}
                disabled={submitting}
                className="inline-flex items-center gap-1 px-4 py-3 font-body text-navy hover:text-navy/70 disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber text-navy font-body font-semibold rounded-lg hover:bg-amber/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  'Send to Minas'
                )}
              </button>
            </div>
          </motion.form>
        )}

        {/* SUCCESS */}
        {step === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center py-4"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber/15 mb-5">
              <CheckCircle2 className="w-9 h-9 text-amber" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-navy mb-3">
              Got it. Minas will be in touch.
            </h2>
            <p className="font-body text-text-muted mb-8 max-w-md mx-auto">
              We will call you back within 24 hours. Most jobs we can quote over the phone after a
              quick chat.
            </p>
            <div className="bg-navy/5 rounded-lg p-5 max-w-md mx-auto">
              <p className="font-body text-sm text-text-muted mb-2">
                If it is urgent, call Minas directly:
              </p>
              <a
                href="tel:+61414922276"
                onClick={() => trackQuoteEvent('quote_success_call_click', {})}
                className="inline-flex items-center gap-2 font-heading text-2xl text-navy hover:text-navy/70"
              >
                <Phone className="w-5 h-5" />
                0414 922 276
              </a>
            </div>
            {isModal && onClose && (
              <button
                type="button"
                onClick={onClose}
                className="mt-6 font-body text-sm text-text-muted hover:text-navy underline underline-offset-4"
              >
                Close
              </button>
            )}
            {!isModal && (
              <button
                type="button"
                onClick={reset}
                className="mt-6 font-body text-sm text-text-muted hover:text-navy underline underline-offset-4"
              >
                Send another enquiry
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
