# Comprehensive Localhost Fix Script
Write-Host "=== Fixing Localhost Dev Server ===" -ForegroundColor Cyan
Write-Host ""

cd "D:\Dev\Roman Building Services"

# Stop any running Node processes
Write-Host "1. Stopping any running Node processes..." -ForegroundColor Yellow
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Check Node.js
Write-Host "2. Checking Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node -v 2>&1
    $npmVersion = npm -v 2>&1
    Write-Host "   Node.js: $nodeVersion" -ForegroundColor Green
    Write-Host "   npm: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "   ERROR: Node.js not found!" -ForegroundColor Red
    Write-Host "   Please install Node.js from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Check/Install dependencies
Write-Host ""
Write-Host "3. Checking dependencies..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules\vite")) {
    Write-Host "   Dependencies missing. Installing..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "   ERROR: npm install failed!" -ForegroundColor Red
        exit 1
    }
    Write-Host "   Dependencies installed" -ForegroundColor Green
} else {
    Write-Host "   Dependencies found" -ForegroundColor Green
}

# Check for TypeScript errors
Write-Host ""
Write-Host "4. Checking for compilation errors..." -ForegroundColor Yellow
$tsErrors = npx tsc --noEmit 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "   No TypeScript errors found" -ForegroundColor Green
} else {
    Write-Host "   TypeScript errors found:" -ForegroundColor Yellow
    $tsErrors | Select-Object -First 10
}

# Check port
Write-Host ""
Write-Host "5. Checking port 5173..." -ForegroundColor Yellow
$portInUse = Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue
if ($portInUse) {
    Write-Host "   Port 5173 is in use - killing process..." -ForegroundColor Yellow
    $portInUse | ForEach-Object {
        $proc = Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue
        if ($proc) {
            Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue
        }
    }
    Start-Sleep -Seconds 2
    Write-Host "   Port cleared" -ForegroundColor Green
} else {
    Write-Host "   Port 5173 is available" -ForegroundColor Green
}

# Start server
Write-Host ""
Write-Host "6. Starting dev server..." -ForegroundColor Green
Write-Host "   Server will be available at: http://localhost:5173" -ForegroundColor Cyan
Write-Host "   Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
Write-Host "   If you see errors below, please share them:" -ForegroundColor Yellow
Write-Host ""

# Start server in foreground so we can see errors
npm run dev

