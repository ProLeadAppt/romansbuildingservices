# Test and Start Server Script
# Run this to see what errors occur

$ErrorActionPreference = 'Continue'
$VerbosePreference = 'Continue'

Write-Host "=== Testing and Starting Dev Server ===" -ForegroundColor Cyan
Write-Host ""

cd "D:\Dev\Roman Building Services"

# Check Node
Write-Host "Checking Node.js..." -ForegroundColor Yellow
node -v
npm -v
Write-Host ""

# Check dependencies
Write-Host "Checking dependencies..." -ForegroundColor Yellow
if (Test-Path "node_modules\vite") {
    Write-Host "Vite found" -ForegroundColor Green
} else {
    Write-Host "Vite NOT found - installing..." -ForegroundColor Red
    npm install
}
Write-Host ""

# Try to start server and show ALL output
Write-Host "Starting server (you'll see all output below)..." -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

npm run dev

