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

if (Test-Path (Join-Path $Root '.git')) { Done $true '깃 작업 폴더(개발용)는 자동 업데이트하지 않습니다.' }
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { Done $false 'git이 없어 업데이트를 확인하지 못했습니다. (시작 안내 8단계 [깃허브 연결])' }
$url = ''; $rf = Join-Path (Join-Path $Root 'workbench') 'git_remote.txt'; if (Test-Path $rf) { $url = ([IO.File]::ReadAllText($rf)).Trim() }
if (-not $url) { Done $false '업데이트 저장소 주소가 없습니다. (workbench/git_remote.txt)' }

# 1. 배포된 버전 확인 (가볍게)
$ls = G ls-remote $url refs/heads/release
if ($code) { Done $false ('업데이트를 확인하지 못했습니다. ' + (($ls -split "`n")[-1])) }
$sha = ($ls -split '\s+')[0]
if (-not $sha) { Done $true '아직 배포된 버전이 없습니다.' }
if ($sha -eq $St.appliedSha) { Done $true '최신 버전입니다.' }

# 2. 받기
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
$St.appliedSha = $sha; $St.appliedAt = (Get-Date).ToString('yyyy-MM-ddTHH:mm:sszzz'); $St.from = $from; $St.to = (Ver)
Done $true ("v$($St.to)로 업데이트했습니다. (파일 $($n)개)")
