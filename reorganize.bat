@echo off
echo Reorganizing portfolio files into assets/ structure...

mkdir "assets" 2>nul
mkdir "assets\images" 2>nul
mkdir "assets\screenshots" 2>nul
mkdir "assets\certificates" 2>nul
mkdir "assets\resume" 2>nul
mkdir "assets\css" 2>nul
mkdir "assets\js" 2>nul

echo Moving images...
move "Img.png" "assets\images\" 2>nul

echo Moving CSS...
move "style.css" "assets\css\" 2>nul

echo Moving JS...
move "script.js" "assets\js\" 2>nul

echo Moving Certificates...
xcopy "Certificates\*" "assets\certificates\" /S /Y /I 2>nul
rmdir /S /Q "Certificates" 2>nul

echo Moving Screenshots...
xcopy "Screenshots\*" "assets\screenshots\" /S /Y /I 2>nul
rmdir /S /Q "Screenshots" 2>nul

echo Moving Resume...
xcopy "Resume\*" "assets\resume\" /S /Y /I 2>nul
rmdir /S /Q "Resume" 2>nul

echo Done! Please check that all files moved correctly.
pause
