@echo off
echo Starting index.js with pm2...
pm2 start index.js
echo Done.
echo Restarting index...
pm2 restart index
echo Done.
echo Restarting index again...
pm2 restart index
echo Done.
