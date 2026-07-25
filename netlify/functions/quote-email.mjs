import nodemailer from 'nodemailer';

const TO_EMAIL = process.env.QUOTE_TO_EMAIL || 'romanspropertyservices@gmail.com';
const MAX_PHOTOS = 3;
// Netlify caps synchronous function requests at 6 MB. Base64 adds roughly
// one third, so 4 MB of decoded photos leaves room for JSON and lead details.
const MAX_BODY_BYTES = 5_750_000;
const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024;
const ALLOWED_PHOTO_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
]);
const SERVICE_LABELS = {
  'heritage-restoration': 'Heritage Restoration',
  stonework: 'Stonework or Stone Walls',
  'brickwork-repointing': 'Brickwork or Repointing',
  'structural-repair': 'Cracks or Structural Repair',
  'concrete-repair': 'Concrete Repair',
  foundation: 'Foundation or Settling',
  'not-sure': 'Not Sure / Something Else',
};
const URGENCY_LABELS = {
  asap: 'ASAP',
  'this-month': 'This month',
  'next-months': 'Next few months',
  researching: 'Just researching',
};

export const config = {
  path: '/api/quote',
  rateLimit: {
    windowLimit: 5,
    windowSize: 60,
    aggregateBy: ['ip', 'domain'],
  },
};

class RequestError extends Error {}

const json = (status, body) => new Response(JSON.stringify(body), {
  status,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  },
});

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const textField = (value, { name, required = false, max = 500 } = {}) => {
  const text = typeof value === 'string' ? value.trim() : '';
  if (required && !text) throw new RequestError(`${name || 'Required field'} is required.`);
  if (text.length > max) throw new RequestError(`${name || 'Field'} is too long.`);
  return text;
};

const formatSydneyTime = () =>
  new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Sydney',
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(new Date());

const parsePhoto = (photo, index) => {
  if (!photo || typeof photo !== 'object' || typeof photo.dataUrl !== 'string') {
    throw new RequestError(`Photo ${index + 1} is invalid.`);
  }

  const match = photo.dataUrl.match(/^data:([^;,]+);base64,([A-Za-z0-9+/]+={0,2})$/);
  if (!match) throw new RequestError(`Photo ${index + 1} is invalid.`);

  const [, contentType, base64] = match;
  if (!ALLOWED_PHOTO_TYPES.has(contentType.toLowerCase())) {
    throw new RequestError('Photos must be JPG, PNG, WebP, HEIC or HEIF files.');
  }

  const content = Buffer.from(base64, 'base64');
  const normalizedInput = base64.replace(/=+$/, '');
  const normalizedOutput = content.toString('base64').replace(/=+$/, '');
  if (!content.length || normalizedInput !== normalizedOutput) {
    throw new RequestError(`Photo ${index + 1} is invalid.`);
  }

  const filename = textField(photo.filename, { name: 'Photo filename', max: 120 })
    .replace(/[^\w.\- ]+/g, '') || `quote-photo-${index + 1}.jpg`;

  return { filename, content, contentType: contentType.toLowerCase() };
};

const buildAttachments = (photos = []) => {
  if (!Array.isArray(photos)) throw new RequestError('Photos must be supplied as a list.');
  if (photos.length > MAX_PHOTOS) throw new RequestError(`Please attach no more than ${MAX_PHOTOS} photos.`);

  const attachments = photos.map(parsePhoto);
  const totalBytes = attachments.reduce((sum, attachment) => sum + attachment.content.length, 0);
  if (totalBytes > MAX_ATTACHMENT_BYTES) {
    throw new RequestError('Photos are too large. Please submit fewer or smaller photos.');
  }
  return attachments;
};

const validateLead = (rawLead) => {
  if (!rawLead || typeof rawLead !== 'object' || Array.isArray(rawLead)) {
    throw new RequestError('Please send a valid quote request.');
  }

  const serviceSlug = textField(rawLead.serviceSlug, { name: 'Service', required: true, max: 40 });
  const urgencySlug = textField(rawLead.urgencySlug, { name: 'Timeline', required: true, max: 40 });
  if (!Object.hasOwn(SERVICE_LABELS, serviceSlug)) throw new RequestError('Please choose a valid service.');
  if (!Object.hasOwn(URGENCY_LABELS, urgencySlug)) throw new RequestError('Please choose a valid timeline.');

  const name = textField(rawLead.name, { name: 'Name', required: true, max: 100 });
  const phone = textField(rawLead.phone, { name: 'Phone', required: true, max: 30 });
  if (phone.replace(/\D/g, '').length < 8) throw new RequestError('Please enter a valid phone number.');

  const email = textField(rawLead.email, { name: 'Email', required: true, max: 254 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new RequestError('Please enter a valid email address.');

  return {
    name,
    phone,
    email,
    service: SERVICE_LABELS[serviceSlug],
    suburb: textField(rawLead.suburb, { name: 'Suburb or postcode', required: true, max: 120 }),
    urgency: URGENCY_LABELS[urgencySlug],
    message: textField(rawLead.message, { name: 'Notes', max: 2000 }),
    pageOrigin: textField(rawLead.pageOrigin, { name: 'Source page', max: 500 }),
    userAgent: textField(rawLead.userAgent, { name: 'User agent', max: 500 }),
    photos: rawLead.photos,
  };
};

const buildEmail = (lead, attachments) => {
  const submittedAt = formatSydneyTime();
  const message = lead.message || 'No extra notes.';
  const page = lead.pageOrigin || 'Not captured';
  const userAgent = lead.userAgent || 'Not captured';
  const photoCount = attachments.length;
  const subject = `New Sydney quote lead: ${lead.service} in ${lead.suburb}`;
  const text = [
    'New website quote lead',
    '',
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
    '',
    `Service: ${lead.service}`,
    `Suburb / postcode: ${lead.suburb}`,
    `Timeline: ${lead.urgency}`,
    `Photos attached: ${photoCount}`,
    '',
    'Notes:',
    message,
    '',
    `Submitted: ${submittedAt}`,
    `Source page: ${page}`,
    `User agent: ${userAgent}`,
  ].join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1f2933; line-height: 1.5;">
      <div style="background: #0f2742; color: #fff; padding: 20px 24px; border-radius: 10px 10px 0 0;">
        <p style="margin: 0; font-size: 13px; color: #f2c66d;">Romans Building Services</p>
        <h1 style="margin: 6px 0 0; font-size: 24px;">New Sydney quote lead</h1>
      </div>
      <div style="border: 1px solid #d9e2ec; border-top: 0; padding: 22px 24px; border-radius: 0 0 10px 10px;">
        <h2 style="font-size: 18px; margin: 0 0 12px;">Call-back details</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 22px;">
          <tr><td style="padding: 8px 0; color: #66788a;">Name</td><td style="padding: 8px 0; font-weight: 700;">${escapeHtml(lead.name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #66788a;">Phone</td><td style="padding: 8px 0; font-weight: 700;"><a href="tel:${escapeHtml(lead.phone)}">${escapeHtml(lead.phone)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #66788a;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a></td></tr>
        </table>

        <h2 style="font-size: 18px; margin: 0 0 12px;">Job summary</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 22px;">
          <tr><td style="padding: 8px 0; color: #66788a;">Service</td><td style="padding: 8px 0; font-weight: 700;">${escapeHtml(lead.service)}</td></tr>
          <tr><td style="padding: 8px 0; color: #66788a;">Suburb / postcode</td><td style="padding: 8px 0; font-weight: 700;">${escapeHtml(lead.suburb)}</td></tr>
          <tr><td style="padding: 8px 0; color: #66788a;">Timeline</td><td style="padding: 8px 0;">${escapeHtml(lead.urgency)}</td></tr>
          <tr><td style="padding: 8px 0; color: #66788a;">Photos</td><td style="padding: 8px 0;">${photoCount ? `${photoCount} attached` : 'No photos provided'}</td></tr>
        </table>

        <h2 style="font-size: 18px; margin: 0 0 12px;">Lead notes</h2>
        <div style="background: #f7f4ef; border-radius: 8px; padding: 14px 16px; white-space: pre-wrap;">${escapeHtml(message)}</div>

        <p style="margin-top: 22px; font-size: 13px; color: #66788a;">
          Submitted ${escapeHtml(submittedAt)} from ${escapeHtml(page)}.
        </p>
      </div>
    </div>
  `;

  return { subject, text, html };
};

const getTransport = () => {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    throw new Error('Email is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS in Netlify.');
  }

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user, pass },
  });
};

export default async (request) => {
  if (new URL(request.url).pathname !== config.path) {
    return json(404, { ok: false, error: 'Not found.' });
  }
  if (request.method === 'OPTIONS') return json(200, { ok: true });
  if (request.method !== 'POST') return json(405, { ok: false, error: 'Method not allowed.' });

  try {
    const body = await request.text();
    if (Buffer.byteLength(body, 'utf8') > MAX_BODY_BYTES) {
      throw new RequestError('The quote request is too large. Please attach fewer or smaller photos.');
    }

    let rawLead;
    try {
      rawLead = JSON.parse(body || '{}');
    } catch {
      throw new RequestError('Please send a valid quote request.');
    }

    if (textField(rawLead?.companyWebsite, { max: 500 })) {
      return json(200, { ok: true });
    }

    const lead = validateLead(rawLead);
    const attachments = buildAttachments(lead.photos);
    const { subject, text, html } = buildEmail(lead, attachments);
    const transport = getTransport();
    const from = process.env.SMTP_FROM || `Romans Website <${process.env.SMTP_USER}>`;

    await transport.sendMail({
      from,
      to: TO_EMAIL,
      replyTo: lead.email,
      subject,
      text,
      html,
      attachments,
    });

    return json(200, { ok: true });
  } catch (error) {
    if (error instanceof RequestError) {
      return json(400, { ok: false, error: error.message });
    }

    console.error('[quote-email]', error);
    return json(500, {
      ok: false,
      error: 'Could not send your quote right now. Please call Minas on 0414 922 276.',
    });
  }
};
