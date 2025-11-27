# DNS Troubleshooting - WWW CNAME Record

## Issue: Can't Add WWW CNAME Record

### Common Causes:

1. **Existing A Record Conflict**
   - If there's an A record for `www.romansbuildingservices.com`, you must DELETE it first
   - You cannot have both an A record and CNAME record for the same hostname
   - Check your A records section and delete any `www` A record

2. **Incorrect Value Format**
   - The value must be the FULL domain: `romansbuildingservices.netlify.app`
   - Some DNS providers require a trailing dot: `romansbuildingservices.netlify.app.`
   - Make sure there are no spaces or typos

3. **DNS Provider Limitations**
   - Some providers have restrictions on CNAME records
   - Try using the exact format your provider expects

## Step-by-Step Fix:

### Step 1: Delete Existing WWW A Record
1. Go to your A (Host) Records section
2. Look for any record with hostname `www` or `www.romansbuildingservices.com`
3. Delete that A record (click the three dots → Delete)
4. Save changes

### Step 2: Add WWW CNAME Record
1. Go to CNAME (Aliases) Records section
2. Click "+ Add Record"
3. Enter:
   - **Host name:** `www` (just "www", not "www.romansbuildingservices.com")
   - **Value:** `romansbuildingservices.netlify.app` (full domain, no trailing dot)
   - **TTL:** `1 Hour` (or your preferred TTL)
4. Click "Save"

### Alternative: If CNAME Still Doesn't Work

If your DNS provider doesn't allow CNAME for www, use an A record instead:

**Option A - Use A Record for WWW:**
- **Host name:** `www`
- **Type:** A Record
- **Value:** `75.2.60.5` (same IP as apex domain)

**Option B - Use ALIAS/ANAME (if supported):**
- **Host name:** `www`
- **Type:** ALIAS or ANAME
- **Value:** `apex-loadbalancer.netlify.com`

## Correct Values for Netlify:

### For CNAME Record:
- **Host:** `www`
- **Type:** CNAME
- **Value:** `romansbuildingservices.netlify.app`
- **TTL:** 1 Hour (or 3600 seconds)

### Important Notes:
- The hostname should be just `www`, not `www.romansbuildingservices.com`
- The value should be the complete domain: `romansbuildingservices.netlify.app`
- Some DNS providers auto-append the domain, so you might only need to enter `www` in the host field
- Make sure there's no existing A record for www before adding the CNAME

## Verification:

After adding the record:
1. Wait a few minutes for DNS to update
2. Check with: `nslookup www.romansbuildingservices.com`
3. Should resolve to Netlify's servers
4. Visit `www.romansbuildingservices.com` in browser to verify

