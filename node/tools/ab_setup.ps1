# 쓰기 비교 시험 준비(개발 PC 전용): 같은 데이터 사본 두 벌을 만들어 기존 서버(A, 8775)와 Node 서버(B, 8776)를 각각 띄운다
#  - 실제 데이터 · 기존 서버(8765)는 건드리지 않는다. 사본은 %TEMP%\wb_ab\{A,B}
#  - 사본에서 밖으로 나가는 일을 모두 막는다:
#    · 깃: 사본 .history의 원격(origin)을 지우고 workbench/git_remote.txt를 비운다(이력 올리기 안 됨)
#    · 백그라운드 감시: 사본의 PC별 설정(setup.json)에 autoWatch=false(Claude가 사본 요청을 처리하지 않게)
#    · 바로가기: 사본에 Figma AI Run.bat을 두지 않는다(바탕 화면 바로가기를 사본으로 바꾸지 않게)
#  - 실행: powershell -ExecutionPolicy Bypass -File node\tools\ab_setup.ps1 [-Fresh]   → 끝나면 node node\tools\ab_compare.js
param([switch]$Fresh, [string]$RealSetup = '\\localhost\c$\Users\exroc\AppData\Local\UX_AI_TEST_Workbench\setup.json')
$ErrorActionPreference = 'Stop'
$Repo = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
$Base = Join-Path $env:TEMP 'wb_ab'
$Node = Join-Path $env:LOCALAPPDATA ('UX_AI_TEST_Workbench\node\' + ([IO.File]::ReadAllText((Join-Path $Repo 'node\NODE_VERSION'))).Trim() + '\node.exe')
$U8 = New-Object Text.UTF8Encoding $false

# 떠 있던 시험 서버 끄기
Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -match 'wb_ab' -and $_.ProcessId -ne $PID } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
Start-Sleep -Milliseconds 800
if ($Fresh -and (Test-Path $Base)) { Remove-Item $Base -Recurse -Force }

foreach ($side in 'A') {
  $d = Join-Path $Base $side
  if (Test-Path $d) { Remove-Item $d -Recurse -Force }
  New-Item -ItemType Directory -Force $d | Out-Null
  # 프로그램 파일(깃에 있는 것) — 실행 파일 · 바로가기 관련은 뺀다
  Push-Location $Repo
  foreach ($f in (git ls-files)) { if ($f -in 'Figma AI Run.bat', 'Figma AI Run.exe' -or $f -like 'node/*' -or $f -like 'dist/*') { continue }; $s = Join-Path $Repo $f; $t = Join-Path $d $f; New-Item -ItemType Directory -Force (Split-Path $t -Parent) | Out-Null; Copy-Item -LiteralPath $s -Destination $t -Force }
  Pop-Location
  # 데이터: 프로젝트 · 프로토타입 · .history(깃 포함) · workbench의 데이터 파일
  & robocopy (Join-Path $Repo 'projects') (Join-Path $d 'projects') /E /NFL /NDL /NJH /NJS /NP | Out-Null
  & robocopy (Join-Path $Repo 'prototypes') (Join-Path $d 'prototypes') /E /NFL /NDL /NJH /NJS /NP | Out-Null
  & robocopy (Join-Path $Repo '.history') (Join-Path $d '.history') /E /NFL /NDL /NJH /NJS /NP | Out-Null
  foreach ($f in Get-ChildItem (Join-Path $Repo 'workbench') -File -Filter *.json) { if ($f.Name -notlike '.*') { Copy-Item $f.FullName (Join-Path $d 'workbench') -Force } }
  [IO.File]::WriteAllText((Join-Path $d 'workbench\git_remote.txt'), '', $U8)
  & git -C (Join-Path $d '.history') remote remove origin 2>$null
  # PC별 설정 사본(autoWatch 끔)
  $sd = Join-Path $Base "${side}_local\UX_AI_TEST_Workbench"; New-Item -ItemType Directory -Force $sd | Out-Null
  $s = [IO.File]::ReadAllText($RealSetup, $U8) | ConvertFrom-Json; $s | Add-Member -NotePropertyName autoWatch -NotePropertyValue $false -Force
  [IO.File]::WriteAllText((Join-Path $sd 'setup.json'), ($s | ConvertTo-Json -Depth 6), $U8)
}
# A: 기존 서버(사본의 guide_server.ps1, LOCALAPPDATA를 사본 설정으로)
$psi = New-Object Diagnostics.ProcessStartInfo 'powershell', ('-NoProfile -ExecutionPolicy Bypass -File "' + (Join-Path $Base 'A\guide_server.ps1') + '" -Port 8775')
$psi.UseShellExecute = $false; $psi.CreateNoWindow = $true; $psi.EnvironmentVariables['LOCALAPPDATA'] = (Join-Path $Base 'A_local')
[void][Diagnostics.Process]::Start($psi)
# 기존 서버는 켤 때 이력 채우기 · 작업 페이지 맞추기를 한다 → 그게 끝난 A를 그대로 B로 복사해 두 쪽 출발점을 같게
$ok = $false; for ($i = 0; $i -lt 60; $i++) { try { Invoke-WebRequest -UseBasicParsing 'http://localhost:8775/api/requests' -TimeoutSec 2 | Out-Null; $ok = $true; break } catch { Start-Sleep -Milliseconds 500 } }
Start-Sleep 2
$B = Join-Path $Base 'B'; if (Test-Path $B) { Remove-Item $B -Recurse -Force }
& robocopy (Join-Path $Base 'A') $B /E /NFL /NDL /NJH /NJS /NP | Out-Null
& robocopy (Join-Path $Base 'A_local') (Join-Path $Base 'B_local') /E /NFL /NDL /NJH /NJS /NP | Out-Null
# 출발점 기록(비교 도구가 바뀐 파일만 본다)
[IO.File]::WriteAllText((Join-Path $Base 'start.txt'), (Get-Date).ToString('o'), $U8)
# B: Node 서버(저장소의 node/server, 데이터는 사본 B)
Start-Process $Node -ArgumentList (Join-Path $Repo 'node\server\main.js'), '--port', '8776', '--root', ('"' + (Join-Path $Base 'B') + '"'), '--setup-dir', ('"' + (Join-Path $Base 'B_local\UX_AI_TEST_Workbench') + '"') -WindowStyle Hidden
foreach ($p in 8775, 8776) { $ok = $false; for ($i = 0; $i -lt 60; $i++) { try { Invoke-WebRequest -UseBasicParsing "http://localhost:$p/api/requests" -TimeoutSec 2 | Out-Null; $ok = $true; break } catch { Start-Sleep -Milliseconds 500 } }; "  :$p 준비 $ok" }
