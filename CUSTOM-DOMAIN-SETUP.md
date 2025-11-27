# Custom Domain Setup - Your Site is Deployed! ✅

## Current Status:
- ✅ Site is deployed to Netlify: `https://romansbuildingservices.netlify.app/` works
- ❌ Custom domain not working: `romansbuildingservices.com` and `www.romansbuildingservices.com`

## The Problem:
Your site is live on Netlify, but the custom domain needs to be added and verified in the Netlify dashboard.

## Solution: Add Custom Domain in Netlify

### Step 1: Add Domain in Netlify Dashboard

1. **Go to Netlify Dashboard:**
   - Visit: https://app.netlify.com
   - Log into your account
   - Click on your site: `romansbuildingservices`

2. **Navigate to Domain Settings:**
   - Click on: **Domain settings** (in left sidebar)
   - Or go to: **Site configuration** → **Domain management**

3. **Add Custom Domain:**
   - Click **"Add custom domain"** button
   - Enter: `romansbuildingservices.com`
   - Click **"Verify"** or **"Add domain"**

4. **Netlify Will Check DNS:**
   - Netlify will verify your DNS records
   - It should detect that `romansbuildingservices.com` → `75.2.60.5`
   - Status will show "Pending verification" or "Verifying..."

5. **Add WWW Subdomain:**
   - After adding the apex domain, click **"Add domain alias"**
   - Enter: `www.romansbuildingservices.com`
   - Netlify will automatically configure this

### Step 2: Wait for Verification

**DNS Verification:**
- Netlify checks your DNS records
- This can take 5-60 minutes
- Status will change from "Pending" to "Verified"

**SSL Certificate:**
- After DNS verification, Netlify issues SSL certificates
- This is automatic but takes 5-60 minutes
- Your site won't work over HTTPS until SSL is ready

### Step 3: Verify DNS Records

**Your DNS should be:**
- ✅ `romansbuildingservices.com` → A Record → `75.2.60.5`
- ✅ `www.romansbuildingservices.com` → A Record → `75.2.60.5`

**Check DNS:**
```powershell
nslookup romansbuildingservices.com
# Should return: 75.2.60.5

nslookup www.romansbuildingservices.com
# Should return: 75.2.60.5
```

**Check DNS Propagation:**
- Visit: https://dnschecker.org
- Search for: `romansbuildingservices.com`
- Should show `75.2.60.5` in most/all locations

### Step 4: Test Your Domain

**After verification (wait 5-60 minutes):**

Try these URLs:
- `http://romansbuildingservices.com` (may redirect to HTTPS)
- `https://romansbuildingservices.com`
- `http://www.romansbuildingservices.com`
- `https://www.romansbuildingservices.com`

## Common Issues:

### Issue 1: "Domain Not Verified" or "Pending Verification"

**Cause:** DNS records not detected or not propagated
**Solution:**
1. Verify DNS records are correct (both should point to `75.2.60.5`)
2. Wait 24-48 hours for DNS propagation
3. Check DNS propagation: https://dnschecker.org

### Issue 2: "SSL Certificate Pending"

**Cause:** Netlify is still issuing SSL certificate
**Solution:** Wait 5-60 minutes, this is automatic

### Issue 3: Domain Works on HTTP but Not HTTPS

**Cause:** SSL certificate not issued yet
**Solution:** Wait for SSL certificate (5-60 minutes)

### Issue 4: "DNS Not Configured Correctly"

**Cause:** DNS records don't match what Netlify expects
**Solution:**
- Make sure both domains point to `75.2.60.5`
- Wait for DNS propagation
- Try removing and re-adding the domain in Netlify

## Quick Checklist:

- [x] Site deployed to Netlify ✅
- [ ] Custom domain added in Netlify dashboard
- [ ] DNS records verified (`75.2.60.5`)
- [ ] Domain verified in Netlify (status: "Verified")
- [ ] SSL certificate issued
- [ ] Test both `romansbuildingservices.com` and `www.romansbuildingservices.com`

## Next Steps:

1. **Add custom domain in Netlify dashboard** (most important!)
2. **Wait 5-60 minutes** for verification and SSL
3. **Test your domain** in browser
4. **If still not working after 24 hours**, check DNS propagation

## Important Notes:

- **DNS Propagation:** Can take 24-48 hours globally
- **Netlify Verification:** Usually 5-60 minutes
- **SSL Certificate:** Automatic, takes 5-60 minutes
- **Both domains:** Should work after setup is complete

Your site is ready - you just need to connect the custom domain in Netlify! 🚀

