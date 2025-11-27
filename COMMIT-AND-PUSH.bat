@echo off
echo ========================================
echo   Production Deployment
echo ========================================
echo.

cd /d "D:\Dev\Roman Building Services"

echo Checking current branch...
git branch --show-current
if %errorlevel% neq 0 (
    echo ERROR: Not a git repository or git not found!
    pause
    exit /b 1
)
echo.

echo Checking for changes...
git status --short
echo.

echo Checking remote...
git remote -v
if %errorlevel% neq 0 (
    echo ERROR: Remote not configured!
    pause
    exit /b 1
)
echo.

set /p commitMsg="Enter commit message (or press Enter for auto): "

if "%commitMsg%"=="" (
    for /f "tokens=2-4 delims=/ " %%a in ('date /t') do set mydate=%%c-%%a-%%b
    for /f "tokens=1-2 delims=/:" %%a in ('time /t') do set mytime=%%a%%b
    set commitMsg=Update: %mydate% %mytime%
)

echo.
echo Staging all changes...
git add .
if %errorlevel% neq 0 (
    echo ERROR: git add failed!
    pause
    exit /b 1
)

echo Committing changes...
git commit -m "%commitMsg%"
if %errorlevel% neq 0 (
    echo.
    echo WARNING: Commit failed or nothing to commit!
    echo This might mean:
    echo - No changes to commit
    echo - Git user not configured
    echo - Authentication issue
    echo.
    echo Checking git config...
    git config --get user.name
    git config --get user.email
    echo.
    pause
    exit /b 1
)

echo.
echo Pushing to production (origin/main)...
git push origin main
if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   SUCCESS: Pushed to production!
    echo ========================================
    echo Repository: https://github.com/ProLeadAppt/romansbuildingservices
    echo.
) else (
    echo.
    echo ========================================
    echo   ERROR: Push failed!
    echo ========================================
    echo.
    echo Common issues:
    echo 1. Authentication required - you may need to:
    echo    - Use GitHub CLI: gh auth login
    echo    - Use Personal Access Token
    echo    - Set up SSH keys
    echo.
    echo 2. Check your git credentials:
    echo    git config --global user.name
    echo    git config --global user.email
    echo.
    echo Please check the error messages above.
    echo.
)

pause

