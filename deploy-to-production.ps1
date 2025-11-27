# Production Deployment Script
# This script ensures your changes are committed and pushed to production

Write-Host "=== Production Deployment ===" -ForegroundColor Cyan
Write-Host ""

cd "D:\Dev\Roman Building Services"

# Check current branch
$currentBranch = git branch --show-current
Write-Host "Current branch: $currentBranch" -ForegroundColor Yellow

if ($currentBranch -ne "main") {
    Write-Host "WARNING: You are not on the 'main' branch!" -ForegroundColor Red
    Write-Host "Switching to main branch..." -ForegroundColor Yellow
    git checkout main
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Failed to switch to main branch" -ForegroundColor Red
        exit 1
    }
}

# Check for uncommitted changes
Write-Host ""
Write-Host "Checking for changes..." -ForegroundColor Yellow
$status = git status --porcelain
if ($status) {
    Write-Host "Found uncommitted changes:" -ForegroundColor Yellow
    git status --short
    
    Write-Host ""
    $commitMessage = Read-Host "Enter commit message (or press Enter for default)"
    if ([string]::IsNullOrWhiteSpace($commitMessage)) {
        $commitMessage = "Update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    }
    
    Write-Host "Staging all changes..." -ForegroundColor Yellow
    git add .
    
    Write-Host "Committing changes..." -ForegroundColor Yellow
    git commit -m $commitMessage
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Commit failed" -ForegroundColor Red
        exit 1
    }
    Write-Host "✓ Changes committed" -ForegroundColor Green
} else {
    Write-Host "No uncommitted changes found" -ForegroundColor Green
}

# Check if we're ahead of remote
Write-Host ""
Write-Host "Checking remote status..." -ForegroundColor Yellow
git fetch origin
$localCommit = git rev-parse HEAD
$remoteCommit = git rev-parse origin/main 2>$null

if ($LASTEXITCODE -ne 0) {
    Write-Host "Remote branch not found. Pushing to create it..." -ForegroundColor Yellow
} elseif ($localCommit -ne $remoteCommit) {
    Write-Host "Local and remote are different" -ForegroundColor Yellow
    $ahead = (git rev-list --count origin/main..HEAD)
    $behind = (git rev-list --count HEAD..origin/main)
    
    if ($behind -gt 0) {
        Write-Host "WARNING: Your local branch is $behind commits behind remote!" -ForegroundColor Red
        Write-Host "You should pull first: git pull origin main" -ForegroundColor Yellow
        $continue = Read-Host "Continue anyway? (y/N)"
        if ($continue -ne "y" -and $continue -ne "Y") {
            exit 1
        }
    }
    
    if ($ahead -gt 0) {
        Write-Host "You are $ahead commits ahead of remote" -ForegroundColor Green
    }
}

# Check git config
Write-Host ""
Write-Host "Checking git configuration..." -ForegroundColor Yellow
$gitUser = git config --get user.name
$gitEmail = git config --get user.email
if ($gitUser) {
    Write-Host "   Git user: $gitUser" -ForegroundColor Green
} else {
    Write-Host "   WARNING: Git user not configured!" -ForegroundColor Yellow
    Write-Host "   Run: git config --global user.name 'Your Name'" -ForegroundColor Yellow
}
if ($gitEmail) {
    Write-Host "   Git email: $gitEmail" -ForegroundColor Green
} else {
    Write-Host "   WARNING: Git email not configured!" -ForegroundColor Yellow
    Write-Host "   Run: git config --global user.email 'your.email@example.com'" -ForegroundColor Yellow
}

# Push to production
Write-Host ""
Write-Host "Pushing to production (origin/main)..." -ForegroundColor Yellow
$pushOutput = git push origin main 2>&1
$pushExitCode = $LASTEXITCODE

if ($pushExitCode -eq 0) {
    Write-Host ""
    Write-Host "✓ SUCCESS: Changes pushed to production!" -ForegroundColor Green
    Write-Host "Repository: https://github.com/ProLeadAppt/romansbuildingservices" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "If you have automatic deployment set up, your changes should be live soon." -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "✗ ERROR: Push failed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Error output:" -ForegroundColor Yellow
    $pushOutput | ForEach-Object { Write-Host "   $_" -ForegroundColor Red }
    Write-Host ""
    Write-Host "Common solutions:" -ForegroundColor Yellow
    Write-Host "1. Authentication required:" -ForegroundColor Yellow
    Write-Host "   - Use GitHub CLI: gh auth login" -ForegroundColor Cyan
    Write-Host "   - Or use Personal Access Token when prompted" -ForegroundColor Cyan
    Write-Host "   - Or set up SSH keys" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "2. Check git credentials:" -ForegroundColor Yellow
    Write-Host "   git config --global user.name 'Your Name'" -ForegroundColor Cyan
    Write-Host "   git config --global user.email 'your.email@example.com'" -ForegroundColor Cyan
    Write-Host ""
    exit 1
}

