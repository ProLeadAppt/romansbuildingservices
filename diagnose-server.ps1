# Diagnostic script to identify why the dev server isn't working
Write-Host "=== Dev Server Diagnostic ===" -ForegroundColor Cyan
Write-Host ""

# Check Node.js
Write-Host "1. Checking Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node -v 2>&1
    $npmVersion = npm -v 2>&1
    Write-Host "   Node.js: $nodeVersion" -ForegroundColor Green
    Write-Host "   npm: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "   ERROR: Node.js not found!" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Check dependencies
Write-Host "2. Checking dependencies..." -ForegroundColor Yellow
if (Test-Path "node_modules\vite") {
    Write-Host "   Dependencies: Installed" -ForegroundColor Green
} else {
    Write-Host "   Dependencies: MISSING - Installing now..." -ForegroundColor Red
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "   ERROR: npm install failed!" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""

# Check port
Write-Host "3. Checking port 5173..." -ForegroundColor Yellow
$portInUse = Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue
if ($portInUse) {
    Write-Host "   Port 5173: IN USE" -ForegroundColor Yellow
    Write-Host "   Process using port:" -ForegroundColor Yellow
    $portInUse | ForEach-Object {
        $proc = Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue
        if ($proc) {
            Write-Host "     - $($proc.ProcessName) (PID: $($proc.Id))" -ForegroundColor Yellow
        }
    }
} else {
    Write-Host "   Port 5173: Available" -ForegroundColor Green
}

Write-Host ""

# Try to start server and capture output
Write-Host "4. Attempting to start server..." -ForegroundColor Yellow
Write-Host "   (This will show any errors)" -ForegroundColor Gray
Write-Host ""

# Start server in foreground to see errors
npm run dev

