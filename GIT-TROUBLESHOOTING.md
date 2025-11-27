# Git Commit & Push Troubleshooting Guide

## Common Issues and Solutions

### Issue 1: "Authentication Failed" or "Permission Denied"

**Cause:** GitHub requires authentication to push

**Solutions:**

**Option A: Use GitHub CLI (Recommended)**
```powershell
# Install GitHub CLI if not installed
winget install GitHub.cli

# Login
gh auth login

# Then try pushing again
git push origin main
```

**Option B: Use Personal Access Token**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Select scopes: `repo` (full control of private repositories)
4. Copy the token
5. When git prompts for password, paste the token (not your password)

**Option C: Use SSH Keys**
```powershell
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub: https://github.com/settings/keys
# Then change remote URL
git remote set-url origin git@github.com:ProLeadAppt/romansbuildingservices.git
```

### Issue 2: "Git user not configured"

**Error:** `Author identity unknown`

**Solution:**
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Issue 3: "Nothing to commit"

**Cause:** No changes to commit

**Solution:** This is normal if you haven't made any changes. Check with:
```powershell
git status
```

### Issue 4: "Remote branch not found"

**Cause:** Remote branch doesn't exist yet

**Solution:**
```powershell
git push -u origin main
```

### Issue 5: "Branch is behind remote"

**Cause:** Someone else pushed changes, or you need to pull first

**Solution:**
```powershell
git pull origin main
# Resolve any conflicts if needed
git push origin main
```

## Quick Fix Commands

### Check Git Status
```powershell
cd "D:\Dev\Roman Building Services"
git status
```

### Check Remote Configuration
```powershell
git remote -v
# Should show: origin  https://github.com/ProLeadAppt/romansbuildingservices.git
```

### Check Current Branch
```powershell
git branch --show-current
# Should show: main
```

### Set Up Git User (if not configured)
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Manual Commit and Push
```powershell
cd "D:\Dev\Roman Building Services"
git add .
git commit -m "Your commit message"
git push origin main
```

## Using the Scripts

### Option 1: Batch File
Double-click: `COMMIT-AND-PUSH.bat`

### Option 2: PowerShell Script
```powershell
.\deploy-to-production.ps1
```

Both scripts will:
- Check for changes
- Commit them
- Push to production
- Show any errors

## Verification

After pushing, verify:
1. Check GitHub: https://github.com/ProLeadAppt/romansbuildingservices
2. Your latest commit should appear
3. Check Netlify (if connected) - should auto-deploy

## Still Not Working?

Share the exact error message you see, and I can help fix it!

