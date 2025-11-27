# Using Wix DNS with Netlify - No Name Server Change Needed

## Important: You DON'T Need to Change Name Servers! ✅

**You can keep Wix DNS and just update the A records** (which you've already done correctly).

## Your Current Setup (Correct):

### ✅ Keep Wix Name Servers:
- **DO NOT CHANGE** your name servers
- Keep them pointing to Wix (ns8.wixdns.net, ns9.wixdns.net)
- You'll manage DNS through Wix, but point to Netlify

### ✅ A Records (Already Set Correctly):
- `romansbuildingservices.com` → `75.2.60.5` ✅ (Netlify)
- `www.romansbuildingservices.com` → `75.2.60.5` ✅ (Netlify)

### ✅ Keep Email Records:
- All MX records (Google Workspace) ✅
- All TXT records (SPF, DKIM, DMARC) ✅

## How This Works:

1. **Wix DNS** manages your DNS records
2. **A Records** point to Netlify's IP (`75.2.60.5`)
3. **Netlify** serves your website
4. **Email** continues working (MX records unchanged)

## Next Steps (No Name Server Change):

### Step 1: Verify DNS Records in Wix

Make sure in Wix DNS you have:
- ✅ `romansbuildingservices.com` → A Record → `75.2.60.5`
- ✅ `www.romansbuildingservices.com` → A Record → `75.2.60.5`
- ✅ All MX records for email (unchanged)
- ✅ All TXT records for email (unchanged)

### Step 2: Add Domain in Netlify Dashboard

**This is the critical step:**

1. Go to: https://app.netlify.com
2. Click on your site: `romansbuildingservices`
3. Go to: **Domain settings** → **Custom domains**
4. Click: **"Add custom domain"**
5. Enter: `romansbuildingservices.com`
6. Click: **"Verify"**

**Netlify will:**
- Check your DNS records
- See that `romansbuildingservices.com` points to `75.2.60.5`
- Verify the domain
- Issue SSL certificate

### Step 3: Add WWW Subdomain

After adding the apex domain:
1. Click: **"Add domain alias"**
2. Enter: `www.romansbuildingservices.com`
3. Netlify will automatically configure it

### Step 4: Wait for Verification

- **DNS Verification:** 5-60 minutes
- **SSL Certificate:** 5-60 minutes (automatic)
- **Total wait time:** Usually 10-120 minutes

## Why This Works:

- **Wix DNS** = Your DNS provider (manages records)
- **A Records** = Point to Netlify's IP
- **Netlify** = Serves your website
- **No name server change needed!**

## Common Confusion:

**❌ WRONG:** "I need to change name servers to Netlify"
**✅ CORRECT:** "I keep Wix name servers but point A records to Netlify"

## Verification:

**Check DNS (should show Netlify IP):**
```powershell
nslookup romansbuildingservices.com
# Should return: 75.2.60.5

nslookup www.romansbuildingservices.com
# Should return: 75.2.60.5
```

**Check DNS Propagation:**
- Visit: https://dnschecker.org
- Search: `romansbuildingservices.com`
- Should show: `75.2.60.5` in most locations

## Summary:

✅ **Keep Wix name servers** (don't change them)
✅ **A records point to Netlify** (already done)
✅ **Add domain in Netlify dashboard** (this is what you need to do)
✅ **Wait for verification** (5-60 minutes)

**The key step you're missing:** Adding the custom domain in the Netlify dashboard. Once you do that, Netlify will verify your DNS and issue SSL certificates.

