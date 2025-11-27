# DNS Migration to Netlify - Complete Guide

## Current Status
Your domain `romansbuildingservices.com` is currently using Wix DNS and needs to be migrated to Netlify.

## DNS Records to Update

### 1. A Records (Host Records) - UPDATE REQUIRED

**Current Configuration:**
- `romansbuildingservices.com` → `185.158.133.1` (Wix)
- `www.romansbuildingservices.com` → `185.158.133.1` (Wix)

**New Netlify Configuration:**

**Option A - Recommended (if your DNS provider supports it):**
- `romansbuildingservices.com` → **ALIAS/ANAME** → `apex-loadbalancer.netlify.com`
- `www.romansbuildingservices.com` → **CNAME** → `romansbuildingservices.netlify.app`

**Option B - Fallback (if ALIAS/ANAME not supported):**
- `romansbuildingservices.com` → **A Record** → `75.2.60.5`
- `www.romansbuildingservices.com` → **A Record** → `75.2.60.5` (or CNAME if supported)

**Action Required:**
1. Delete the existing A records pointing to `185.158.133.1`
2. Add the new records as shown above

---

### 2. CNAME Records - UPDATE REQUIRED

**Current Configuration (DELETE THESE):**
- `en.romansbuildingservices.com` → `cdn1.wixdns.net` ❌ DELETE
- `google6acb1bf31534d41...` → `google.com` ❌ DELETE (if not needed)
- `email.mail.romansbuildingservices.com` → `mailgun.org` ❌ DELETE (if not using Mailgun)

**New Netlify Configuration (ADD THESE):**
- `www.romansbuildingservices.com` → **CNAME** → `romansbuildingservices.netlify.app` ✅

**Action Required:**
1. Delete Wix-related CNAME records
2. Add the www CNAME record pointing to Netlify

---

### 3. TXT Records - KEEP MOST, UPDATE SOME

**Records to KEEP (Email & Verification):**
- `romansbuildingservices.com` → `google-site-verification=...` ✅ KEEP (Google Search Console)
- `romansbuildingservices.com` → `v=spf1 include:_spf.google.com...` ✅ KEEP (Email SPF)
- `google._domainkey.romansbuildingservices.com` → `v=DKIM1; k=rsa; p=...` ✅ KEEP (Email DKIM)
- `mail.romansbuildingservices.com` → `v=DMARC1; p=none;` ✅ KEEP (Email DMARC)
- `mail.romansbuildingservices.com` → `v=spf1 include:spf.leadcon...` ✅ KEEP (Email SPF)
- `pic._domainkey.mail.romansbuildingservices.com` → `k=rsa; p=...` ✅ KEEP (Email DKIM)
- `www.romansbuildingservices.com` → `google-site-verification=...` ✅ KEEP (if exists)

**Records to DELETE:**
- Any Wix-related verification records ❌

**Action Required:**
- Keep all email-related TXT records (SPF, DKIM, DMARC)
- Keep Google verification records
- Delete any Wix-specific records

---

### 4. MX Records - KEEP AS IS ✅

**Current Configuration (DO NOT CHANGE):**
- `romansbuildingservices.com` → `aspmx.l.google.com` (Priority: 10)
- `romansbuildingservices.com` → `alt1.aspmx.l.google.com` (Priority: 20)
- `romansbuildingservices.com` → `alt2.aspmx.l.google.com` (Priority: 30)
- `romansbuildingservices.com` → `alt3.aspmx.l.google.com` (Priority: 40)
- `romansbuildingservices.com` → `alt4.aspmx.l.google.com` (Priority: 50)

**Action Required:**
- ✅ **KEEP ALL MX RECORDS** - These are for Google Workspace email and must remain unchanged

---

### 5. NS Records - CHANGE TO NETLIFY (if using Netlify DNS)

**Current Configuration:**
- `romansbuildingservices.com` → `ns9.wixdns.net`
- `romansbuildingservices.com` → `ns8.wixdns.net`

**If Using Netlify DNS (Recommended):**
- Change name servers to Netlify's DNS servers (provided in Netlify dashboard)

**If Keeping External DNS:**
- Keep current NS records (Wix DNS) but update A/CNAME records as specified above

---

## Step-by-Step Migration Instructions

### Step 1: Update A/CNAME Records for Website

1. Log into your DNS provider (currently Wix DNS)
2. **Delete** these A records:
   - `romansbuildingservices.com` → `185.158.133.1`
   - `www.romansbuildingservices.com` → `185.158.133.1`

3. **Add** new records:
   - **If ALIAS/ANAME supported:**
     - `romansbuildingservices.com` → **ALIAS** → `apex-loadbalancer.netlify.com`
   - **If ALIAS/ANAME NOT supported:**
     - `romansbuildingservices.com` → **A Record** → `75.2.60.5`
   - `www.romansbuildingservices.com` → **A Record** → `75.2.60.5` (or CNAME to `romansbuildingservices.netlify.app` if your DNS provider supports it)

### Step 2: Clean Up CNAME Records

1. **Delete** these CNAME records:
   - `en.romansbuildingservices.com` → `cdn1.wixdns.net`
   - Any other Wix-related CNAME records

2. **Keep** the www CNAME you just added in Step 1

### Step 3: Verify TXT Records

1. **Keep all email-related TXT records:**
   - SPF records
   - DKIM records
   - DMARC records
   - Google verification records

2. **Delete** any Wix-specific verification records

### Step 4: Verify MX Records

- ✅ **DO NOT CHANGE** - All MX records should remain pointing to Google Workspace

### Step 5: Wait for DNS Propagation

- DNS changes can take up to 24-48 hours to propagate worldwide
- Use a DNS checker tool to verify propagation: https://dnschecker.org
- Check: `romansbuildingservices.com` should resolve to Netlify's IP
- Check: `www.romansbuildingservices.com` should resolve to Netlify

---

## Verification Checklist

After making changes, verify:

- [ ] `romansbuildingservices.com` resolves to Netlify (check with `nslookup` or DNS checker)
- [ ] `www.romansbuildingservices.com` resolves to Netlify
- [ ] Email still works (test sending/receiving)
- [ ] Google Search Console verification still active
- [ ] Netlify shows domain as verified in dashboard

---

## Important Notes

1. **Email Will Continue Working**: Your MX records point to Google Workspace, so email will continue to work regardless of website hosting changes.

2. **DNS Propagation Time**: Allow 24-48 hours for DNS changes to propagate globally.

3. **Netlify Verification**: After updating DNS, Netlify will automatically verify the domain. This may take a few minutes to several hours.

4. **Backup Current Records**: Before making changes, take screenshots or export your current DNS records as a backup.

5. **Test Before Going Live**: Consider testing with a subdomain first if possible.

---

## Quick Reference: Netlify DNS Values

- **Apex Domain (ALIAS/ANAME):** `apex-loadbalancer.netlify.com`
- **Apex Domain (A Record Fallback):** `75.2.60.5`
- **WWW Subdomain (CNAME):** `romansbuildingservices.netlify.app`

---

## Support

If you encounter issues:
1. Check Netlify dashboard for domain verification status
2. Use DNS propagation checker: https://dnschecker.org
3. Verify records match exactly (no typos, correct record types)
4. Wait 24-48 hours for full propagation

