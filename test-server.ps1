# Test script to start and verify dev server
Write-Host "Starting dev server test..." -ForegroundColor Cyan
Write-Host ""

cd "D:\Dev\Roman Building Services"

# Check dependencies
if (-not (Test-Path "node_modules\vite")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
}

Write-Host "Starting server..." -ForegroundColor Green
Write-Host "Server should be available at: http://localhost:5173" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow
Write-Host ""

npm run dev

