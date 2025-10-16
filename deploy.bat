@echo off
echo 🚀 Harrity Law Website Deployment Script
echo =========================================

REM Check if git is initialized
if not exist ".git" (
    echo ❌ Git repository not initialized. Please run 'git init' first.
    pause
    exit /b 1
)

REM Add all files
echo 📁 Adding all files to git...
git add .

REM Check if there are changes to commit
git status --porcelain > temp_status.txt
set /p status=<temp_status.txt
del temp_status.txt

if "%status%"=="" (
    echo ✅ No changes to commit. Repository is up to date.
    pause
    exit /b 0
)

REM Get commit message from user
set /p commitMessage="💬 Enter commit message (or press Enter for default): "

if "%commitMessage%"=="" (
    for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
    set "commitMessage=Update Harrity Law website - %dt:~0,4%-%dt:~4,2%-%dt:~6,2% %dt:~8,2%:%dt:~10,2%"
)

REM Commit changes
echo 💾 Committing changes...
git commit -m "%commitMessage%"

if %errorlevel% neq 0 (
    echo ❌ Commit failed. Please check your git configuration.
    pause
    exit /b 1
)

REM Push to GitHub
echo 🚀 Pushing to GitHub...
git push origin main

if %errorlevel% neq 0 (
    echo ❌ Push failed. Please check your GitHub credentials and repository access.
    echo 💡 You may need to set up authentication:
    echo    - Personal Access Token: https://github.com/settings/tokens
    echo    - SSH Key: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
    pause
    exit /b 1
)

echo ✅ Successfully deployed to GitHub!
echo 🌐 Repository: https://github.com/NaimaNissa/HarrityLaw
echo 🎉 Your Harrity Law website is now live on GitHub!
pause
