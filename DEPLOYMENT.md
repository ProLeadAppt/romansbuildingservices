# Production Deployment Guide

## Quick Start

### Option 1: Use the Batch File (Easiest)
Double-click `COMMIT-AND-PUSH.bat` in your project folder. It will:
- Check for changes
- Commit them
- Push to production (main branch)

### Option 2: Use PowerShell Script
```powershell
.\deploy-to-production.ps1
```

### Option 3: Manual Git Commands
```powershell
cd "D:\Dev\Roman Building Services"
git add .
git commit -m "Your commit message"
git push origin main
```

## Important Notes

### Branch Configuration
- **Production Branch**: `main`
- **Remote**: `origin` → `https://github.com/ProLeadAppt/romansbuildingservices.git`
- Always push to `main` branch for production deployments

### Verification Steps

1. **Check current branch:**
   ```powershell
   git branch --show-current
   ```
   Should show: `main`

2. **Check remote:**
   ```powershell
   git remote -v
   ```
   Should show: `origin  https://github.com/ProLeadAppt/romansbuildingservices.git`

3. **Verify push:**
   After pushing, check GitHub:
   https://github.com/ProLeadAppt/romansbuildingservices

## Automatic Deployment

### GitHub Actions
A GitHub Actions workflow (`.github/workflows/deploy.yml`) is configured to:
- Run on every push to `main` branch
- Build the project
- Prepare for deployment

### Hosting Services
If you have a hosting service connected (Netlify, Vercel, etc.):
- They will automatically deploy when you push to `main`
- Check your hosting dashboard for deployment status

## Troubleshooting

### Push Fails
1. Check if you're authenticated: `git config --global user.name`
2. Pull latest changes first: `git pull origin main`
3. Check for conflicts: `git status`

### Wrong Branch
If you're not on `main`:
```powershell
git checkout main
git pull origin main
```

### Verify Deployment
1. Check GitHub repository: https://github.com/ProLeadAppt/romansbuildingservices
2. Check your hosting service dashboard
3. Verify the live site is updated

## Best Practices

1. **Always test locally first** with `npm run dev`
2. **Commit meaningful messages** describing your changes
3. **Push to main only** when ready for production
4. **Verify deployment** after pushing

