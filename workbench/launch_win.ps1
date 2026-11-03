# Figma AI Run (윈도우) — 터미널 창 없이 Workbench 서버를 뒤에서 띄우고 브라우저를 연다
#  - Figma AI Run.bat이 창을 숨긴 채 이 스크립트를 부른다
#  - 실행할 때마다 떠 있던 Workbench 서버(guide_server.ps1)를 끄고, 새 버전이 배포됐으면 받은 뒤(update.ps1) 새로 띄운다
#  - 서버 끄기: 브라우저의 Workbench 탭을 모두 닫으면 3초 뒤 저절로 꺼진다
#  - 기록: %LOCALAPPDATA%\UX_AI_TEST_Workbench\server.log
$Root = Split-Path $PSScriptRoot -Parent
$Port = 8765
$LogDir = Join-Path $env:LOCALAPPDATA 'UX_AI_TEST_Workbench'
if (-not (Test-Path $LogDir)) { New-Item -ItemType Directory -Force $LogDir | Out-Null }
$Log = Join-Path $LogDir 'server.log'

Get-CimInstance Win32_Process -Filter "Name='powershell.exe' or Name='pwsh.exe'" |
  Where-Object { $_.ProcessId -ne $PID -and $_.CommandLine -like '*-File*guide_server.ps1*' } |
  ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
Start-Sleep -Milliseconds 500

# 자동 업데이트: 관리자가 배포한 새 버전이 있으면 받아서 프로그램 파일을 바꾼다(workbench/update.ps1)
#  인터넷 · 로그인 문제로 안 되면 지금 버전으로 실행한다. 처음 받을 때만 오래 걸릴 수 있어 최대 2분 기다린다
$upd = Join-Path $PSScriptRoot 'update.ps1'
if (Test-Path $upd) {
  try { $u = Start-Process powershell -WindowStyle Hidden -PassThru -ArgumentList ('-NoProfile -ExecutionPolicy Bypass -File "' + $upd + '"'); if (-not $u.WaitForExit(120000)) { $u.Kill() } } catch {}
}

Start-Process powershell -WindowStyle Hidden -ArgumentList @('-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', ('"' + (Join-Path $Root 'guide_server.ps1') + '"'), '-Port', $Port, '-LogFile', ('"' + $Log + '"'))

# 서버가 응답하면 브라우저를 연다(최대 15초)
for ($i = 0; $i -lt 60; $i++) {
  Start-Sleep -Milliseconds 250
  try {
    $r = Invoke-WebRequest -UseBasicParsing -TimeoutSec 1 "http://localhost:$Port/api/projects"
    if ($r.Content -match '"defaultKey"') { Start-Process "http://localhost:$Port/start"; exit 0 }
  } catch {}
}
Add-Type -AssemblyName PresentationFramework
[System.Windows.MessageBox]::Show("Workbench 서버를 시작하지 못했습니다.`n다시 실행해 보고, 그래도 안 되면 기록 파일을 담당자에게 보내 주세요.`n`n$Log", 'Figma AI Run', 'OK', 'Warning') | Out-Null
if (Test-Path $Log) { Start-Process notepad.exe -ArgumentList ('"' + $Log + '"') }
exit 1
