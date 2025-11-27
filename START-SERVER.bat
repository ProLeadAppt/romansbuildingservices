@echo off
echo Starting Development Server...
echo.
cd /d "D:\Dev\Roman Building Services"
echo Installing dependencies if needed...
call npm install
echo.
echo Starting server on http://localhost:5173
echo Press Ctrl+C to stop the server
echo.
call npm run dev
pause

