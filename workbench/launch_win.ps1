# Figma AI Run (윈도우) — 터미널 창 없이 Workbench 서버를 뒤에서 띄우고 브라우저를 연다
#  - Figma AI Run.bat(또는 바탕 화면 바로가기)이 창을 숨긴 채 이 스크립트를 부른다
#  - 실행할 때마다 떠 있던 Workbench 서버를 끄고, 새 버전이 배포됐으면 받은 뒤(update.ps1) 새로 띄운다
#  - 서버(v0.21.0~): Node 서버(node\server\main.js). Node.js는 설치하지 않고 처음 한 번 공식 사이트에서 받아 PC별 폴더에 둔다(node\run_win.ps1)
#    Node를 못 받거나 Node 서버가 뜨지 않으면 예전 서버(guide_server.ps1)로 띄운다. 예전 서버로 고정하려면 PC별 폴더에 server_mode.txt = ps
#  - 서버 끄기: 브라우저의 Workbench 탭을 모두 닫으면 3초 뒤 저절로 꺼진다(백그라운드 감시가 동작 중이면 켜 둔다)
#  - 기록: %LOCALAPPDATA%\UX_AI_TEST_Workbench\server.log (지난 실행은 server.prev.log)
param([switch]$Restarted)
$Root = Split-Path $PSScriptRoot -Parent
$Port = 8765
$LogDir = Join-Path $env:LOCALAPPDATA 'UX_AI_TEST_Workbench'
if (-not (Test-Path $LogDir)) { New-Item -ItemType Directory -Force $LogDir | Out-Null }
$Log = Join-Path $LogDir 'server.log'

# 실행 중 화면: 서버가 뜨기 전에 바로 브라우저로 pages\Loading.html(file://)을 연다. 지금 단계를 workbench\.launch_progress.js에 쓰면 그 화면이 1초마다 읽어 보여 주고,
#  서버가 응답하면 그 화면이 /start로 넘어간다(여기서 브라우저를 다시 열지 않는다)
$Prog = Join-Path $Root 'workbench\.launch_progress.js'
function Prog([string]$step, [string]$text = '', [string]$err = '') {
  $o = [ordered]@{ step = $step; text = $text; error = $err; at = (Get-Date).ToString('s') }
  try { [IO.File]::WriteAllText($Prog, 'window.WB_LAUNCH = ' + ($o | ConvertTo-Json -Compress) + ';', (New-Object Text.UTF8Encoding $false)) } catch {}
}
$Loading = Join-Path $Root 'pages\Loading.html'
if (-not $Restarted) { Prog 'stop' }
# 떠 있던 Workbench 서버(예전 PowerShell 서버 · Node 서버) 끄기 — 실행 중 화면은 끈 뒤에 연다(먼저 열면 끄기 전 서버로 넘어가 버린다)
Get-CimInstance Win32_Process -Filter "Name='powershell.exe' or Name='pwsh.exe' or Name='node.exe'" |
  Where-Object { $_.ProcessId -ne $PID -and ($_.CommandLine -like '*-File*guide_server.ps1*' -or ($_.CommandLine -like '*node*server*main.js*' -and $_.CommandLine -like "*--port $Port*")) } |
  ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
Start-Sleep -Milliseconds 500
if (-not $Restarted -and (Test-Path $Loading)) { Start-Process $Loading }

# 자동 업데이트: 관리자가 배포한 새 버전이 있으면 받아서 프로그램 파일을 바꾼다(workbench/update.ps1)
#  인터넷 · 로그인 문제로 안 되면 지금 버전으로 실행한다. 처음 받을 때만 오래 걸릴 수 있어 최대 2분 기다린다
#  업데이트로 이 스크립트가 바뀌었으면 새 스크립트로 다시 시작한다(바뀐 실행 방법이 바로 적용되게)
Prog 'update'
$me = $MyInvocation.MyCommand.Path
$h0 = (Get-FileHash $me -Algorithm SHA256).Hash
$upd = Join-Path $PSScriptRoot 'update.ps1'
if (-not $Restarted -and (Test-Path $upd)) {
  try { $u = Start-Process powershell -WindowStyle Hidden -PassThru -ArgumentList ('-NoProfile -ExecutionPolicy Bypass -File "' + $upd + '"'); if (-not $u.WaitForExit(120000)) { $u.Kill() } } catch {}
  if ((Test-Path $me) -and (Get-FileHash $me -Algorithm SHA256).Hash -ne $h0) {
    Start-Process powershell -WindowStyle Hidden -ArgumentList ('-NoProfile -ExecutionPolicy Bypass -File "' + $me + '" -Restarted'); exit 0
  }
}

function Wait-Up([int]$sec) {
  for ($i = 0; $i -lt $sec * 4; $i++) {
    Start-Sleep -Milliseconds 250
    try { $r = Invoke-WebRequest -UseBasicParsing -TimeoutSec 1 "http://localhost:$Port/api/projects"; if ($r.Content -match '"defaultKey"') { return $true } } catch {}
  }
  return $false
}
function Start-PsServer {
  Start-Process powershell -WindowStyle Hidden -ArgumentList @('-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', ('"' + (Join-Path $Root 'guide_server.ps1') + '"'), '-Port', $Port, '-LogFile', ('"' + $Log + '"'))
}

# 서버 고르기: 기본 Node. server_mode.txt = ps면 예전 서버
$mode = 'node'; $mf = Join-Path $LogDir 'server_mode.txt'
if (Test-Path $mf) { if (([IO.File]::ReadAllText($mf)).Trim().ToLower() -eq 'ps') { $mode = 'ps' } }
$runNode = Join-Path $Root 'node\run_win.ps1'
if ($mode -eq 'node' -and -not (Test-Path $runNode)) { $mode = 'ps' }

$ok = $false
if ($mode -eq 'node') {
  $ver = ([IO.File]::ReadAllText((Join-Path $Root 'node\NODE_VERSION'))).Trim()
  $exe = Join-Path $LogDir "node\$ver\node.exe"
  if (-not (Test-Path $exe)) {
    Prog 'node' '처음 한 번 받는 중(약 40MB, 1~2분)'
    try { $d = Start-Process powershell -WindowStyle Hidden -PassThru -ArgumentList ('-NoProfile -ExecutionPolicy Bypass -File "' + $runNode + '" -NoStart'); if (-not $d.WaitForExit(300000)) { $d.Kill() } } catch {}
  }
  Prog 'node'
  if (Test-Path $exe) {
    Prog 'start'
    Start-Process $exe -WindowStyle Hidden -WorkingDirectory $Root -ArgumentList @(('"' + (Join-Path $Root 'node\server\main.js') + '"'), '--port', $Port, '--root', ('"' + $Root + '"'), '--log', ('"' + $Log + '"'))
    $ok = Wait-Up 20
    if (-not $ok) {
      # Node 서버가 뜨지 않으면 끄고 예전 서버로
      Get-CimInstance Win32_Process -Filter "Name='node.exe'" | Where-Object { $_.CommandLine -like '*node*server*main.js*' -and $_.CommandLine -like "*--port $Port*" } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
      try { Add-Content -Path (Join-Path $LogDir 'launch.log') -Value ((Get-Date).ToString('s') + ' Node 서버가 20초 안에 뜨지 않아 예전 서버로 띄움') -Encoding UTF8 } catch {}
    }
  } else { try { Add-Content -Path (Join-Path $LogDir 'launch.log') -Value ((Get-Date).ToString('s') + ' Node를 받지 못해 예전 서버로 띄움') -Encoding UTF8 } catch {} }
}
if (-not $ok) { Prog 'start' '예전 서버로 시작'; Start-PsServer; $ok = Wait-Up 15 }
if ($ok) { Prog 'open'; if (-not (Test-Path $Loading)) { Start-Process "http://localhost:$Port/start" }; exit 0 }   # 실행 중 화면이 /start로 넘어간다
Prog 'start' '' ('Workbench 서버를 시작하지 못했습니다. 다시 실행해 보고, 그래도 안 되면 기록 파일을 담당자에게 보내 주세요: ' + $Log)

Add-Type -AssemblyName PresentationFramework
[System.Windows.MessageBox]::Show("Workbench 서버를 시작하지 못했습니다.`n다시 실행해 보고, 그래도 안 되면 기록 파일을 담당자에게 보내 주세요.`n`n$Log", 'Figma AI Run', 'OK', 'Warning') | Out-Null
if (Test-Path $Log) { Start-Process notepad.exe -ArgumentList ('"' + $Log + '"') }
exit 1
