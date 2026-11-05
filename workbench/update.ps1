# 자동 업데이트 (윈도우): Figma AI Run을 실행할 때 서버를 띄우기 전에 부른다(workbench/launch_win.ps1)
#  - workbench/git_remote.txt 저장소의 release 브랜치(관리자가 「배포」한 버전)가 지금 적용된 것과 다르면 받아서 프로그램 파일을 바꾼다
#  - 받은 파일은 .update(숨김 저장소)에 두고, 작업 폴더로 복사한다. 개인 데이터는 이미 있으면 건드리지 않는다(아래 Keep)
#  - 인터넷 · 로그인 문제로 실패하면 지금 버전 그대로 실행한다. 결과는 workbench/.update.json
#  - 깃 작업 폴더(개발용 clone, .git 있음)는 건드리지 않는다
param([string]$Root = (Split-Path $PSScriptRoot -Parent))
$U = Join-Path $Root '.update'
$StatFile = Join-Path (Join-Path $Root 'workbench') '.update.json'
$Utf8 = New-Object Text.UTF8Encoding $false
$env:GIT_TERMINAL_PROMPT = '0'; $env:GCM_INTERACTIVE = 'Never'
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  foreach ($d in "$env:ProgramFiles\Git\cmd", "$env:LOCALAPPDATA\Programs\Git\cmd") { if (Test-Path (Join-Path $d 'git.exe')) { $env:PATH = "$d;$env:PATH"; break } }
}
# 개인 데이터: 이미 있으면 덮어쓰지 않는다(없을 때만 새로 놓는다)
$Keep = '^(workbench/(edit_requests|jobs)\.json|\.claude/.*|projects/.*|prototypes/.*)$'

$St = [ordered]@{ checkedAt = ''; ok = $false; message = ''; version = ''; appliedSha = ''; appliedAt = ''; from = ''; to = '' }
if (Test-Path $StatFile) { try { $o = [IO.File]::ReadAllText($StatFile, $Utf8) | ConvertFrom-Json; foreach ($k in @($St.Keys)) { if ($null -ne $o.$k) { $St[$k] = $o.$k } } } catch {} }
function Ver { $f = Join-Path $Root 'VERSION'; if (Test-Path $f) { return ([IO.File]::ReadAllText($f)).Trim() }; return '' }
function Done($ok, $msg) {
  $St.checkedAt = (Get-Date).ToString('yyyy-MM-ddTHH:mm:sszzz'); $St.ok = $ok; $St.message = $msg; $St.version = (Ver)
  [IO.File]::WriteAllText($StatFile, ($St | ConvertTo-Json), $Utf8)
  exit 0
}
function G { $out = & git @args 2>&1 | ForEach-Object { "$_" }; $script:code = $LASTEXITCODE; return (($out | Where-Object { $_ }) -join "`n").Trim() }
# 배포에서 빠진 파일 지우기: 개인 데이터 · 설치 폴더 밖 · 이력(.history) · 받은 저장소(.update)는 지우지 않는다
function Remove-Old([string]$rel) {
  $rel = ($rel -replace '\\', '/').Trim().TrimStart('/')
  if (-not $rel -or $rel -match '(^|/)\.\.(/|$)' -or $rel -match $Keep -or $rel -match '^(\.history|\.update|\.git|\.claude|projects|prototypes)(/|$)' -or $rel -match '^workbench/\.') { return 0 }
  $p = Join-Path $Root ($rel -replace '/', '\')
  if (Test-Path -LiteralPath $p -PathType Leaf) { try { Remove-Item -LiteralPath $p -Force; return 1 } catch {} }
  return 0
}
# workbench/removed_files.txt(배포에 들어 있음)에 적힌 파일을 지운다. 최신 버전이어도 실행할 때마다 확인
function Remove-Listed {
  $n = 0; $lf = Join-Path (Join-Path $Root 'workbench') 'removed_files.txt'
  if (Test-Path $lf) { foreach ($l in [IO.File]::ReadAllLines($lf, $Utf8)) { $r = ($l -replace '#.*$', '').Trim(); if ($r) { $n += Remove-Old $r } } }
  return $n
}

if (Test-Path (Join-Path $Root '.git')) { Done $true '깃 작업 폴더(개발용)는 자동 업데이트하지 않습니다.' }
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { Done $false 'git이 없어 업데이트를 확인하지 못했습니다. (시작 안내 8단계 [깃허브 연결])' }
$url = ''; $rf = Join-Path (Join-Path $Root 'workbench') 'git_remote.txt'; if (Test-Path $rf) { $url = ([IO.File]::ReadAllText($rf)).Trim() }
if (-not $url) { Done $false '업데이트 저장소 주소가 없습니다. (workbench/git_remote.txt)' }

# 1. 배포된 버전 확인 (가볍게)
$ls = G ls-remote $url refs/heads/release
if ($code) { Done $false ('업데이트를 확인하지 못했습니다. ' + (($ls -split "`n")[-1])) }
$sha = ($ls -split '\s+')[0]
if (-not $sha) { Done $true '아직 배포된 버전이 없습니다.' }
if ($sha -eq $St.appliedSha) { $rm = Remove-Listed; Done $true $(if ($rm) { "최신 버전입니다. (배포에서 빠진 파일 $($rm)개 지움)" } else { '최신 버전입니다.' }) }

# 2. 받기 (받기 전 버전의 파일 목록을 남겨 두었다가, 새 버전에 없는 파일을 지운다)
$oldFiles = @()
if (Test-Path (Join-Path $U '.git')) { $lsOld = G -C $U -c core.quotepath=false ls-files; if (-not $code) { $oldFiles = @($lsOld -split "`n" | Where-Object { $_ }) } }
if (-not (Test-Path (Join-Path $U '.git'))) {
  New-Item -ItemType Directory -Force $U | Out-Null
  G -C $U init -q | Out-Null; G -C $U remote add origin $url | Out-Null
} elseif ((G -C $U remote get-url origin) -ne $url) { G -C $U remote set-url origin $url | Out-Null }
$o = G -C $U fetch -q --depth 1 origin release
if ($code) { Done $false ('새 버전을 받지 못했습니다. ' + (($o -split "`n")[-1])) }
$o = G -C $U checkout -q -f -B release FETCH_HEAD
if ($code) { Done $false ('새 버전을 풀지 못했습니다. ' + (($o -split "`n")[-1])) }

# 3. 프로그램 파일 바꾸기
$from = Ver; $n = 0
$files = @((G -C $U -c core.quotepath=false ls-files) -split "`n" | Where-Object { $_ })
foreach ($rel in $files) {
  $dst = Join-Path $Root ($rel -replace '/', '\')
  if ($rel -match $Keep -and (Test-Path -LiteralPath $dst)) { continue }
  $dir = Split-Path $dst -Parent; if (-not (Test-Path -LiteralPath $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }
  try { Copy-Item -LiteralPath (Join-Path $U ($rel -replace '/', '\')) -Destination $dst -Force; $n++ } catch {}
}
# 4. 배포에서 빠진 파일 지우기: 받기 전 버전에 있고 새 버전에 없는 파일 + removed_files.txt 목록
$rm = 0
if ($files.Count -and $oldFiles.Count) { $new = @{}; foreach ($f in $files) { $new[$f] = 1 }; foreach ($f in $oldFiles) { if (-not $new.ContainsKey($f)) { $rm += Remove-Old $f } } }
$rm += Remove-Listed
$St.appliedSha = $sha; $St.appliedAt = (Get-Date).ToString('yyyy-MM-ddTHH:mm:sszzz'); $St.from = $from; $St.to = (Ver)
Done $true ("v$($St.to)로 업데이트했습니다. (파일 $($n)개" + $(if ($rm) { ", 빠진 파일 $($rm)개 지움" } else { '' }) + ')')
