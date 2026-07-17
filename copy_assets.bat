@echo off
echo Creating assets directory...
mkdir "z:\Portfolio\assets" 2>nul
mkdir "z:\Portfolio\assets\certificates" 2>nul
mkdir "z:\Portfolio\assets\screenshots" 2>nul
mkdir "z:\Portfolio\assets\screenshots\Image recognition" 2>nul
mkdir "z:\Portfolio\assets\screenshots\Voice chatbot" 2>nul
mkdir "z:\Portfolio\assets\images" 2>nul

echo Copying certificates...
copy "C:\Users\Admin\Desktop\Zyed Dco\Certificates\*.pdf" "z:\Portfolio\assets\certificates\" /Y

echo Copying screenshots...
copy "Z:\Screenshots\Image recogonition\*.png" "z:\Portfolio\assets\screenshots\Image recognition\" /Y
copy "Z:\Screenshots\Voice chatbot\*.png" "z:\Portfolio\assets\screenshots\Voice chatbot\" /Y

echo Copying faceless robot background image...
copy "C:\Users\Admin\.gemini\antigravity-ide\brain\1b1dd1e5-07e5-49b9-84c7-6ab0cb8020c7\faceless_robot_suit_1784228924050.png" "z:\Portfolio\assets\images\robot.png" /Y

echo Done!
pause
