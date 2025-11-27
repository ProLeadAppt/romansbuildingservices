# Comprehensive fix and start script
Write-Host "=== Fixing and Starting Dev Server ===" -ForegroundColor Cyan
Write-Host ""

cd "D:\Dev\Roman Building Services"

# Stop any running Node processes
Write-Host "1. Stopping any running Node processes..." -ForegroundColor Yellow
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Check Node.js
Write-Host "2. Checking Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node -v
    $npmVersion = npm -v
    Write-Host "   Node.js: $nodeVersion" -ForegroundColor Green
    Write-Host "   npm: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "   ERROR: Node.js not found!" -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "3. Installing/updating dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "   ERROR: npm install failed!" -ForegroundColor Red
    exit 1
}
Write-Host "   Dependencies installed" -ForegroundColor Green

# Check port
Write-Host "4. Checking port 5173..." -ForegroundColor Yellow
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
}

# Start server
Write-Host ""
Write-Host "5. Starting dev server..." -ForegroundColor Green
Write-Host "   Server will be available at: http://localhost:5173" -ForegroundColor Cyan
Write-Host "   Press Ctrl+C to stop" -ForegroundColor Yellow
Write-Host ""

npm run dev

