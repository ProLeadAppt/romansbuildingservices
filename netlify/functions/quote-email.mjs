import nodemailer from 'nodemailer';

const TO_EMAIL = process.env.QUOTE_TO_EMAIL || 'romanspropertyservices@gmail.com';
const MAX_PHOTOS = 3;
const MAX_ATTACHMENT_BYTES = 6 * 1024 * 1024;

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
  },
  body: JSON.stringify(body),
});

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const field = (value, fallback = 'Not provided') => {
  const text = typeof value === 'string' ? value.trim() : value;
  return text ? String(text) : fallback;
};

const formatSydneyTime = (iso) =>
  new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Sydney',
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(new Date(iso || Date.now()));

const parsePhoto = (photo, index) => {
  if (!photo?.dataUrl || typeof photo.dataUrl !== 'string') return null;
  const match = photo.dataUrl.match(/^data:(.+?);base64,(.+)$/);
  if (!match) return null;

  const [, contentType, base64] = match;
  const filename = field(photo.filename, `quote-photo-${index + 1}.jpg`).replace(/[^\w.\- ]+/g, '');
  const content = Buffer.from(base64, 'base64');
  if (!content.length) return null;

  return {
    filename,
    content,
    contentType,
  };
};

const buildAttachments = (photos = []) => {
  const attachments = [];
  let totalBytes = 0;

  for (const [index, photo] of photos.slice(0, MAX_PHOTOS).entries()) {
    const attachment = parsePhoto(photo, index);
    if (!attachment) continue;
    totalBytes += attachment.content.length;
    if (totalBytes > MAX_ATTACHMENT_BYTES) {
      throw new Error('Photos are too large to email. Please submit fewer or smaller photos.');
    }
    attachments.push(attachment);
  }

  return attachments;
};

const buildEmail = (lead) => {
  const submittedAt = formatSydneyTime(lead.submittedAt);
  const name = field(lead.name);
  const service = field(lead.service);
  const suburb = field(lead.suburb);
  const urgency = field(lead.urgency);
  const phone = field(lead.phone);
  const email = field(lead.email, 'Not provided');
  const message = field(lead.message, 'No extra notes.');
  const page = field(lead.pageOrigin, 'Not captured');
  const photoCount = Number(lead.photoCount || lead.photos?.length || 0);

  const subject = `New Sydney quote lead: ${service} in ${suburb}`;
  const text = [
    'New website quote lead',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    '',
    `Service: ${service}`,
    `Suburb / postcode: ${suburb}`,
    `Timeline: ${urgency}`,
    `Photos attached: ${photoCount}`,
    '',
    'Notes:',
    message,
    '',
    `Submitted: ${submittedAt}`,
    `Source page: ${page}`,
    `User agent: ${field(lead.userAgent, 'Not captured')}`,
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
          <tr><td style="padding: 8px 0; color: #66788a;">Name</td><td style="padding: 8px 0; font-weight: 700;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #66788a;">Phone</td><td style="padding: 8px 0; font-weight: 700;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #66788a;">Email</td><td style="padding: 8px 0;">${lead.email ? `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>` : escapeHtml(email)}</td></tr>
        </table>

        <h2 style="font-size: 18px; margin: 0 0 12px;">Job summary</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 22px;">
          <tr><td style="padding: 8px 0; color: #66788a;">Service</td><td style="padding: 8px 0; font-weight: 700;">${escapeHtml(service)}</td></tr>
          <tr><td style="padding: 8px 0; color: #66788a;">Suburb / postcode</td><td style="padding: 8px 0; font-weight: 700;">${escapeHtml(suburb)}</td></tr>
          <tr><td style="padding: 8px 0; color: #66788a;">Timeline</td><td style="padding: 8px 0;">${escapeHtml(urgency)}</td></tr>
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

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return json(200, { ok: true });
  if (event.httpMethod !== 'POST') return json(405, { ok: false, error: 'Method not allowed' });

  try {
    const lead = JSON.parse(event.body || '{}');

    if (!field(lead.name, '') || !field(lead.phone, '') || !field(lead.suburb, '') || !field(lead.service, '')) {
      return json(400, { ok: false, error: 'Missing required lead details.' });
    }

    const attachments = buildAttachments(lead.photos);
    const { subject, text, html } = buildEmail(lead);
    const transport = getTransport();
    const from = process.env.SMTP_FROM || `Romans Website <${process.env.SMTP_USER}>`;

    await transport.sendMail({
      from,
      to: TO_EMAIL,
      replyTo: field(lead.email, '') || undefined,
      subject,
      text,
      html,
      attachments,
    });

    return json(200, { ok: true });
  } catch (error) {
    console.error('[quote-email]', error);
    return json(500, {
      ok: false,
      error: error instanceof Error ? error.message : 'Could not send quote email.',
    });
  }
};
