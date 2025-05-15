@echo off
echo Building portfolio...
call npm run build

echo.
echo Build complete! You can now deploy the contents of the 'out' directory to your hosting provider.
echo.
echo Deployment options:
echo 1. Vercel (recommended): https://vercel.com
echo 2. Netlify: https://netlify.com
echo 3. GitHub Pages: https://pages.github.com
echo.
echo Press any key to exit...
pause > nul 