# Development Server Startup Script
# This script will check dependencies and start the dev server

Write-Host "=== Roman Building Services - Dev Server Setup ===" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node -v
    $npmVersion = npm -v
    Write-Host "✓ Node.js version: $nodeVersion" -ForegroundColor Green
    Write-Host "✓ npm version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Check if dependencies are installed
Write-Host "Checking dependencies..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    Write-Host "✗ Dependencies not found. Installing now..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
    Write-Host "✓ Dependencies installed successfully" -ForegroundColor Green
} else {
    Write-Host "✓ Dependencies already installed" -ForegroundColor Green
}

Write-Host ""

# Check if port 5173 is in use
Write-Host "Checking if port 5173 is available..." -ForegroundColor Yellow
$portInUse = Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue
if ($portInUse) {
    Write-Host "⚠ Port 5173 is already in use" -ForegroundColor Yellow
    Write-Host "You may need to stop the existing process or use a different port" -ForegroundColor Yellow
} else {
    Write-Host "✓ Port 5173 is available" -ForegroundColor Green
}

Write-Host ""
Write-Host "Starting development server..." -ForegroundColor Cyan
Write-Host "The server will be available at: http://localhost:5173" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Start the dev server
npm run dev

