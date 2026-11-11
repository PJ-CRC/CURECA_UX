# Node 서버 실행 (윈도우) — 기존 서버(guide_server.ps1, 8765)와 별개로 만드는 새 서버(기본 8766)
#  - Node.js는 설치하지 않는다(B 방식): node\NODE_VERSION의 공식 Node를 처음 한 번 nodejs.org에서 받아 PC별 폴더에 둔다
#    %LOCALAPPDATA%\UX_AI_TEST_Workbench\node\{버전}\node.exe — 받은 파일은 공식 SHASUMS256.txt로 확인한다
#  - 이미 받아 둔 버전이 있으면 받지 않는다. NODE_VERSION을 올리면 다음 실행 때 그 버전을 받는다
#  - 실행: powershell -ExecutionPolicy Bypass -File node\run_win.ps1 [-Port 8766] [-ReadOnly]
#    -ReadOnly: 쓰기 API · 깃 동기화 · 감시를 끈다(기존 서버와 같은 데이터를 읽기만 하며 비교할 때)
param([int]$Port = 8766, [switch]$ReadOnly, [switch]$NoStart)
$ErrorActionPreference = 'Stop'
$Here = $PSScriptRoot; $Root = Split-Path $Here -Parent
$Ver = ([IO.File]::ReadAllText((Join-Path $Here 'NODE_VERSION'))).Trim()
if ($Ver -notmatch '^v\d+\.\d+\.\d+$') { throw "NODE_VERSION 형식이 아닙니다: $Ver" }
$Arch = if ([Environment]::Is64BitOperatingSystem) { if ($env:PROCESSOR_ARCHITECTURE -eq 'ARM64') { 'arm64' } else { 'x64' } } else { 'x86' }
$Base = Join-Path $env:LOCALAPPDATA 'UX_AI_TEST_Workbench\node'
$Dir = Join-Path $Base $Ver
$Exe = Join-Path $Dir 'node.exe'

function Get-Node {
  $name = "node-$Ver-win-$Arch"
  $url = "https://nodejs.org/dist/$Ver/$name.zip"
  $tmp = Join-Path $Base ('_dl_' + [guid]::NewGuid().ToString('N').Substring(0, 8))
  New-Item -ItemType Directory -Force $tmp | Out-Null
  try {
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    Write-Host "  Node $Ver 받는 중(처음 한 번, 약 40MB): $url"
    $zip = Join-Path $tmp "$name.zip"
    Invoke-WebRequest -UseBasicParsing $url -OutFile $zip
    $sums = (Invoke-WebRequest -UseBasicParsing "https://nodejs.org/dist/$Ver/SHASUMS256.txt").Content
    $want = ($sums -split "`n" | Where-Object { $_ -match "\s$([regex]::Escape("$name.zip"))\s*$" } | Select-Object -First 1) -replace '\s.*$', ''
    $got = (Get-FileHash $zip -Algorithm SHA256).Hash.ToLower()
    if (-not $want -or $want.ToLower() -ne $got) { throw "받은 파일의 확인값이 공식 값과 다릅니다(받기 실패 또는 변조). 다시 실행해 주세요." }
    Expand-Archive $zip -DestinationPath $tmp -Force
    if (Test-Path $Dir) { Remove-Item $Dir -Recurse -Force }
    Move-Item (Join-Path $tmp $name) $Dir
    Write-Host "  Node $Ver 준비됨: $Dir"
  } finally { Remove-Item $tmp -Recurse -Force -ErrorAction SilentlyContinue }
}

if (-not (Test-Path $Exe)) { New-Item -ItemType Directory -Force $Base | Out-Null; Get-Node }
# 예전 버전 폴더 정리(지금 버전만 남김)
Get-ChildItem $Base -Directory -ErrorAction SilentlyContinue | Where-Object { $_.Name -ne $Ver -and $_.Name -like 'v*' } | ForEach-Object { Remove-Item $_.FullName -Recurse -Force -ErrorAction SilentlyContinue }
if ($NoStart) { & $Exe -v; return }
$args2 = @((Join-Path $Here 'server\main.js'), '--port', $Port, '--root', $Root)
if ($ReadOnly) { $args2 += '--readonly' }
& $Exe @args2
