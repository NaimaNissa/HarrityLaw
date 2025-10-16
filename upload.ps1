Write-Host "🚀 Uploading Harrity Law Website to GitHub..." -ForegroundColor Green
Write-Host ""

git add .
git commit -m "Update Harrity Law website"
git push origin main

Write-Host ""
Write-Host "✅ Done! Your website is now on GitHub!" -ForegroundColor Green
Write-Host "🌐 Check it out: https://github.com/NaimaNissa/HarrityLaw" -ForegroundColor Cyan
Read-Host "Press Enter to continue"
