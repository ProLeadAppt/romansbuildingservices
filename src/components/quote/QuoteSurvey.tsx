import { useState, useRef, useEffect, useId } from 'react';
import { useLocation } from 'react-router-dom';
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
const MAX_TOTAL_PHOTO_BYTES = 4 * 1024 * 1024;
const ALLOWED_PHOTO_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
]);

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
  companyWebsite: '',
});

interface QuoteSurveyProps {
  variant: 'modal' | 'inline';
  headingLevel: 'h2' | 'h3' | 'h4';
  onClose?: () => void;
  initialService?: QuoteService;
}

export const QuoteSurvey = ({ variant, headingLevel, onClose, initialService }: QuoteSurveyProps) => {
  const StepHeading = headingLevel;
  const fieldId = useId();
  const [step, setStep] = useState<1 | 2 | 3 | 'success'>(initialService ? 2 : 1);
  const previousStepRef = useRef(step);
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<QuoteData>(() => ({
    ...emptyData(),
    service: initialService ?? null,
  }));
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [readingPhotos, setReadingPhotos] = useState(false);
  const [failedPhotoPreviews, setFailedPhotoPreviews] = useState<Set<QuotePhoto>>(() => new Set());
  const readingPhotosRef = useRef(false);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const photoPickerRef = useRef<HTMLButtonElement>(null);
  const photoListRef = useRef<HTMLDivElement>(null);
  const removedPhotoFocusRef = useRef<number | null>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  useEffect(() => {
    trackQuoteEvent('quote_opened', { variant });
  }, [variant]);

  useEffect(() => {
    if (step !== 'success') {
      trackQuoteEvent(`quote_step_${step}`, { variant });
    }
  }, [step, variant]);

  useEffect(() => {
    if (previousStepRef.current === step) return;
    previousStepRef.current = step;
    // Preserve initial modal autofocus and focus deliberately moved elsewhere
    // while a request was pending. Removed step controls leave focus on body.
    const active = document.activeElement;
    if (active === document.body || containerRef.current?.contains(active)) {
      stepHeadingRef.current?.focus();
    }
  }, [step]);

  const selectService = (service: QuoteService) => {
    setData((d) => ({ ...d, service }));
    setStep(2);
  };

  const goNext = () => {
    if (step === 2) {
      if (readingPhotosRef.current) return;
      if (!data.suburb.trim() || !data.urgency) return;
      setStep(3);
    }
  };

  const goBack = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
  };

  const handlePhotoSelect = async (files: FileList | null) => {
    if (!files || readingPhotosRef.current) return;
    readingPhotosRef.current = true;
    setReadingPhotos(true);
    const errors: string[] = [];
    const remaining = MAX_PHOTOS - data.photos.length;
    const newOnes = Array.from(files).slice(0, remaining);
    if (files.length > remaining) errors.push('Please attach no more than 3 photos.');
    const next: QuotePhoto[] = [];
    let selectedBytes = data.photos.reduce((total, photo) => total + photo.size, 0);
    for (const file of newOnes) {
      if (!ALLOWED_PHOTO_TYPES.has(file.type)) {
        errors.push(`${file.name} is not a supported photo. Use JPG, PNG, WebP, HEIC or HEIF.`);
        continue;
      }
      if (file.size === 0) {
        errors.push(`${file.name} is empty. Choose another photo.`);
        continue;
      }
      if (file.size > MAX_PHOTO_BYTES) {
        errors.push(`${file.name} is too large. Maximum 2 MB per photo.`);
        continue;
      }
      if (selectedBytes + file.size > MAX_TOTAL_PHOTO_BYTES) {
        errors.push('Photos are too large together. Keep the total under 4 MB.');
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
        selectedBytes += file.size;
      } catch {
        errors.push(`Could not read ${file.name}.`);
      }
    }
    if (next.length) {
      setData((d) => ({ ...d, photos: [...d.photos, ...next] }));
    }
    setError(errors.length ? errors.join(' ') : null);
    readingPhotosRef.current = false;
    setReadingPhotos(false);
    if (photoInputRef.current) photoInputRef.current.value = '';
  };

  useEffect(() => {
    const index = removedPhotoFocusRef.current;
    if (index === null) return;
    removedPhotoFocusRef.current = null;
    const buttons = photoListRef.current?.querySelectorAll<HTMLButtonElement>('button');
    const target = buttons?.[Math.min(index, buttons.length - 1)] ?? photoPickerRef.current;
    target?.focus();
  }, [data.photos]);

  const removePhoto = (idx: number) => {
    if (readingPhotosRef.current) return;
    if (photoListRef.current?.contains(document.activeElement)) removedPhotoFocusRef.current = idx;
    setFailedPhotoPreviews((previous) => {
      const next = new Set(previous);
      next.delete(data.photos[idx]);
      return next;
    });
    setData((d) => ({ ...d, photos: d.photos.filter((_, i) => i !== idx) }));
  };

  const validateStep3 = () => {
    if (!data.name.trim()) return { message: 'Please enter your name.', target: nameInputRef };
    const phone = data.phone.trim();
    if (!phone) return { message: 'Please enter a phone number.', target: phoneInputRef };
    if (phone.replace(/\D/g, '').length < 8) {
      return { message: 'That phone number looks too short.', target: phoneInputRef };
    }
    if (!data.email.trim()) return { message: 'Please enter an email address.', target: emailInputRef };
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());
    if (!emailOk) return { message: 'That email address does not look right.', target: emailInputRef };
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateStep3();
    if (validationError) {
      setError(validationError.message);
      validationError.target.current?.focus();
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
      setError(result.error ?? 'Something went wrong. Please call Minas on 0414 922 276.');
    }
  };

  const reset = () => {
    setFailedPhotoPreviews(new Set());
    setData({ ...emptyData(), service: initialService ?? null });
    setStep(initialService ? 2 : 1);
    setError(null);
  };

  const isModal = variant === 'modal';
  const containerClass = isModal
    ? 'w-full max-w-2xl'
    : 'w-full max-w-2xl mx-auto';

  return (
    <div ref={containerRef} className={containerClass}>
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
          <p
            className="font-body text-xs text-text-muted"
            role="progressbar"
            aria-label="Quote progress"
            aria-valuemin={1}
            aria-valuemax={3}
            aria-valuenow={step as number}>
            Step {step} of 3 &middot; Takes about 60 seconds
          </p>
        </div>
      )}

      <div>
        {/* STEP 1 — Service */}
        {step === 1 && (
          <div
            key="step1"
          >
            <StepHeading ref={stepHeadingRef} tabIndex={-1} className="font-heading text-2xl md:text-3xl text-navy mb-2">
              What needs doing?
            </StepHeading>
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
          </div>
        )}

        {/* STEP 2 — Where, when, photos */}
        {step === 2 && (
          <div
            key="step2"
          >
            <StepHeading ref={stepHeadingRef} tabIndex={-1} className="font-heading text-2xl md:text-3xl text-navy mb-2">
              Where and when?
            </StepHeading>
            <p className="font-body text-text-muted mb-6">
              Tell us your suburb so we can check availability. Our focus is Hawkesbury and Western Sydney. Photos are optional.
            </p>

            <div className="space-y-5">
              <div>
                <label htmlFor={`${fieldId}-suburb`} className="block font-body text-sm font-semibold text-navy mb-2">
                  Suburb or postcode <span className="text-red-500">*</span>
                </label>
                <input
                  id={`${fieldId}-suburb`}
                  name="suburb"
                  type="text"
                  autoComplete="address-level2"
                  value={data.suburb}
                  onChange={(e) => setData((d) => ({ ...d, suburb: e.target.value }))}
                  placeholder="e.g. Windsor or 2756"
                  aria-required="true"
                  className="w-full border-2 border-stone-200 rounded-lg px-4 py-3 font-body text-navy focus:outline-none focus:border-navy"
                />
              </div>

              <div>
                <p className="block font-body text-sm font-semibold text-navy mb-2">
                  How soon do you need this done? <span className="text-red-500">*</span>
                </p>
                <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Job timeline" aria-required="true">
                  {URGENCY_OPTIONS.map((u) => (
                    <button
                      key={u}
                      type="button"
                      role="radio"
                      aria-checked={data.urgency === u}
                      tabIndex={data.urgency === u || (!data.urgency && u === URGENCY_OPTIONS[0]) ? 0 : -1}
                      onKeyDown={(event) => {
                        const direction = ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1
                          : ['ArrowLeft', 'ArrowUp'].includes(event.key) ? -1 : 0;
                        if (!direction) return;
                        event.preventDefault();
                        const nextIndex = (URGENCY_OPTIONS.indexOf(u) + direction + URGENCY_OPTIONS.length) % URGENCY_OPTIONS.length;
                        setData((d) => ({ ...d, urgency: URGENCY_OPTIONS[nextIndex] }));
                        const radios = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="radio"]');
                        radios?.[nextIndex]?.focus();
                      }}
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
                  Photos <span className="font-normal text-text-muted">(optional, up to 3, 4 MB total)</span>
                </p>
                <input
                  ref={photoInputRef}
                  type="file"
                  name="photos"
                  aria-label="Job photos"
                  accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
                  multiple
                  disabled={readingPhotos}
                  onChange={(e) => handlePhotoSelect(e.target.files)}
                  className="hidden"
                  id={`${fieldId}-photos`}
                />
                {data.photos.length < MAX_PHOTOS && (
                  <button
                    type="button"
                    disabled={readingPhotos}
                    ref={photoPickerRef}
                    onClick={() => photoInputRef.current?.click()}
                    aria-describedby={`${fieldId}-photo-help`}
                    className="w-full flex items-center justify-center gap-2 p-4 border-2 border-dashed border-stone-300 rounded-lg cursor-pointer hover:border-amber transition-colors text-text-muted font-body text-sm"
                  >
                    <Camera className="w-5 h-5" />
                    {readingPhotos ? 'Reading photos…' : 'Add photos of the job'}
                  </button>
                )}
                <p id={`${fieldId}-photo-help`} className="mt-2 text-sm text-text-muted">
                  JPG, PNG, WebP, HEIC or HEIF. Up to 2 MB each, 4 MB total.
                </p>
                <p role="status" aria-live="polite" className="sr-only">
                  {readingPhotos ? 'Reading photos. Please wait.' : `${data.photos.length} of 3 photos attached.`}
                </p>
                {data.photos.length > 0 && (
                  <div ref={photoListRef} className="mt-3 grid grid-cols-3 gap-2">
                    {data.photos.map((photo, i) => (
                      <div key={i} className={`relative rounded-md overflow-hidden bg-stone-100 ${failedPhotoPreviews.has(photo) ? 'min-h-36' : 'aspect-square'}`}>
                        {failedPhotoPreviews.has(photo) ? (
                          <div role="status" className="flex h-full min-h-36 flex-col items-center justify-center gap-2 px-2 pb-3 pt-12 text-center text-xs text-navy">
                            <Camera aria-hidden="true" className="h-6 w-6 shrink-0" />
                            <span className="w-full break-all">{photo.filename}</span>
                            <span>Preview unavailable; photo attached.</span>
                          </div>
                        ) : (
                          <img
                            src={photo.dataUrl}
                            alt={photo.filename}
                            onError={() => setFailedPhotoPreviews((previous) => new Set(previous).add(photo))}
                            className="w-full h-full object-cover"
                          />
                        )}
                        <button
                          type="button"
                          disabled={readingPhotos}
                          onClick={() => removePhoto(i)}
                          aria-label={`Remove photo ${i + 1}: ${photo.filename}`}
                          className="absolute top-1 right-1 w-11 h-11 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
              <p id={`${fieldId}-error`} role="alert" className="mt-4 text-red-700 font-body text-sm">{error}</p>
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
                disabled={readingPhotos || !data.suburb.trim() || !data.urgency}
                className="inline-flex items-center gap-1 px-6 py-3 bg-amber text-navy font-body font-semibold rounded-lg hover:bg-amber/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 — Contact */}
        {step === 3 && (
          <form
            key="step3"
            onSubmit={handleSubmit}
          >
            <StepHeading ref={stepHeadingRef} tabIndex={-1} className="font-heading text-2xl md:text-3xl text-navy mb-2">
              How do we reach you?
            </StepHeading>
            <p className="font-body text-text-muted mb-6">
              Leave your contact details so Minas can follow up about the job. For urgent enquiries, call directly.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor={`${fieldId}-name`} className="block font-body text-sm font-semibold text-navy mb-2">
                  Your name <span className="text-red-500">*</span>
                </label>
                <input
                  id={`${fieldId}-name`}
                  ref={nameInputRef}
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={data.name}
                  onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                  className="w-full border-2 border-stone-200 rounded-lg px-4 py-3 font-body text-navy focus:outline-none focus:border-navy"
                />
              </div>

              <div>
                <label htmlFor={`${fieldId}-phone`} className="block font-body text-sm font-semibold text-navy mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id={`${fieldId}-phone`}
                  ref={phoneInputRef}
                  name="phone"
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
                <label htmlFor={`${fieldId}-email`} className="block font-body text-sm font-semibold text-navy mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id={`${fieldId}-email`}
                  ref={emailInputRef}
                  name="email"
                  type="email"
                  required
                  inputMode="email"
                  autoComplete="email"
                  spellCheck={false}
                  value={data.email}
                  onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full border-2 border-stone-200 rounded-lg px-4 py-3 font-body text-navy focus:outline-none focus:border-navy"
                />
              </div>

              <div>
                <label htmlFor={`${fieldId}-message`} className="block font-body text-sm font-semibold text-navy mb-2">
                  Anything else we should know? <span className="font-normal text-text-muted">(optional)</span>
                </label>
                <textarea
                  id={`${fieldId}-message`}
                  name="message"
                  rows={3}
                  value={data.message}
                  onChange={(e) => setData((d) => ({ ...d, message: e.target.value }))}
                  placeholder="Access issues, deadline, anything specific…"
                  className="w-full border-2 border-stone-200 rounded-lg px-4 py-3 font-body text-navy focus:outline-none focus:border-navy resize-none"
                />
              </div>
              <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor={`${fieldId}-company-website`}>Company website</label>
                <input
                  id={`${fieldId}-company-website`}
                  name="companyWebsite"
                  type="url"
                  tabIndex={-1}
                  autoComplete="off"
                  value={data.companyWebsite}
                  onChange={(e) => setData((d) => ({ ...d, companyWebsite: e.target.value }))}
                />
              </div>
            </div>

            {error && (
              <p id={`${fieldId}-error`} role="alert" className="mt-4 text-red-700 font-body text-sm">{error}</p>
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
                    Sending…
                  </>
                ) : (
                  'Send to Minas'
                )}
              </button>
            </div>
          </form>
        )}

        {/* SUCCESS */}
        {step === 'success' && (
          <div
            key="success"
            className="text-center py-4"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber/15 mb-5">
              <CheckCircle2 className="w-9 h-9 text-amber" />
            </div>
            <h2 ref={stepHeadingRef} tabIndex={-1} className="font-heading text-2xl md:text-3xl text-navy mb-3">
              Enquiry submitted.
            </h2>
            <p className="font-body text-text-muted mb-8 max-w-md mx-auto">
              Your enquiry has been submitted with the job details. Please call if you need to check receipt or discuss timing.
            </p>
            <div className="bg-navy/5 rounded-lg p-5 max-w-md mx-auto">
              <p className="font-body text-sm text-text-muted mb-2">
                If it is urgent, call Minas directly:
              </p>
              <a
                href="tel:0414922276"
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
          </div>
        )}
      </div>
    </div>
  );
};
