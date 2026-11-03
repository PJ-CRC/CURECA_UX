@echo off
rem Figma AI Run - Workbench local server (no terminal window)
rem  - first run on this PC opens the setup guide (Setup.html), later runs open the guide
rem  - every run restarts the server (workbench\launch_win.ps1 stops a running guide_server.ps1 first)
rem  - the server runs hidden; when all Workbench browser tabs are closed it asks whether to quit (Yes = stop server)
rem  - log: %LOCALAPPDATA%\UX_AI_TEST_Workbench\server.log
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "%~dp0workbench\launch_win.ps1"
