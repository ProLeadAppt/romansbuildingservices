# Quote Email Setup

The website quote survey posts to `/.netlify/functions/quote-email` in production. The function sends a clear lead email to `romanspropertyservices@gmail.com` with:

- name, phone, and email
- selected service
- suburb or postcode
- requested timeframe
- optional notes
- source page
- up to three attached photos

Set these Netlify environment variables before deploying:

```text
QUOTE_TO_EMAIL=romanspropertyservices@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=romanspropertyservices@gmail.com
SMTP_PASS=<Gmail app password>
SMTP_FROM=Romans Website <romanspropertyservices@gmail.com>
```

For Gmail, use an app password, not the normal account password. The form will still work in local Vite development, but it only logs a simulated payload unless `VITE_QUOTE_WEBHOOK_URL` is explicitly set.
