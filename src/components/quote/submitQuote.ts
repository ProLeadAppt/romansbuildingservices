import type { QuoteData } from './types';
import { SERVICE_LABELS, URGENCY_LABELS } from './types';

const WEBHOOK_URL = import.meta.env.VITE_QUOTE_WEBHOOK_URL as string | undefined;

interface SubmitResult {
  ok: boolean;
  error?: string;
}

export async function submitQuote(data: QuoteData, pageOrigin: string): Promise<SubmitResult> {
  const payload = {
    name: data.name.trim(),
    phone: data.phone.trim(),
    email: data.email.trim() || null,
    message: data.message.trim() || null,
    service: data.service ? SERVICE_LABELS[data.service] : null,
    serviceSlug: data.service,
    suburb: data.suburb.trim(),
    urgency: data.urgency ? URGENCY_LABELS[data.urgency] : null,
    urgencySlug: data.urgency,
    photoCount: data.photos.length,
    photos: data.photos.map((p) => ({
      filename: p.filename,
      dataUrl: p.dataUrl,
      sizeBytes: p.size,
    })),
    source: 'website-quote-survey',
    pageOrigin,
    submittedAt: new Date().toISOString(),
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
  };

  if (!WEBHOOK_URL) {
    if (import.meta.env.DEV) {
      console.warn('[quote] VITE_QUOTE_WEBHOOK_URL not set. Payload that would be sent:', payload);
      await new Promise((r) => setTimeout(r, 800));
      return { ok: true };
    }
    return { ok: false, error: 'Quote submission is not configured. Please call us on 0414 922 276.' };
  }

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return { ok: false, error: `Submission failed (${res.status}). Please call us on 0414 922 276.` };
    }
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: 'Could not reach our servers. Please call Minas on 0414 922 276.',
    };
  }
}

export function trackQuoteEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  };
  if (typeof w.gtag === 'function') {
    w.gtag('event', eventName, params);
  }
  if (typeof w.clarity === 'function') {
    w.clarity('event', eventName);
  }
}
