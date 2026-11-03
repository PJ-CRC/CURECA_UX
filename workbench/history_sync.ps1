# 작업 이력 공유: .history 폴더(깃 history 브랜치)를 받고(pull) 이 PC의 새 이력을 올린다(push).
#  - 서버(guide_server.ps1)가 -Loop로 숨김 실행한다. 5초마다 원격이 바뀌었는지만 가볍게 묻고(ls-remote), 바뀌었거나 이 PC에 새 이력이 있을 때만 받고 올린다
#    서버가 workbench/.history_sync_now를 만들면(이력이 생김 · [깃 동기화]) 기다리지 않고 바로 맞춘다. 서버가 꺼지면(-ServerPid) 같이 끝난다
#  - .history는 작업 폴더 저장소와 같은 원격(origin)의 history 브랜치만 받는 별도 저장소다. 작업 중인 코드 · 브랜치와 섞이지 않는다
#  - 이력은 한 건 한 파일(entries/{PC}_{요청 ID}.json, shots/)이라 여러 PC가 올려도 충돌하지 않는다
#  - 원격 주소: 모든 PC가 같은 저장소를 쓰도록 workbench/git_remote.txt (이 파일이 없을 때만 작업 폴더의 origin)
#  - 결과는 workbench/.history_sync.json {at(마지막으로 맞춘 시각), checkedAt(마지막 확인), ok, message, busy}
#  - -Interactive: 시작 안내 「깃허브 로그인」에서 한 번만. 깃허브 로그인 창을 허용한다(뒤에서 도는 동기화는 창을 띄우지 않는다)
param([string]$Root = (Split-Path $PSScriptRoot -Parent), [switch]$Interactive, [switch]$Loop, [int]$ServerPid = 0, [int]$Every = 5)
$H = Join-Path $Root '.history'
$WB = Join-Path $Root 'workbench'
$StatFile = Join-Path $WB '.history_sync.json'
$NowFile = Join-Path $WB '.history_sync_now'
$LockFile = Join-Path $WB '.history_sync.lock'
$Utf8 = New-Object Text.UTF8Encoding $false
$env:GIT_TERMINAL_PROMPT = '0'
if (-not $Interactive) { $env:GCM_INTERACTIVE = 'Never' }
# 서버가 뜬 뒤 git을 설치했으면 PATH에 아직 없다
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  foreach ($d in "$env:ProgramFiles\Git\cmd", "$env:LOCALAPPDATA\Programs\Git\cmd") { if (Test-Path (Join-Path $d 'git.exe')) { $env:PATH = "$d;$env:PATH"; break } }
}

$St = [ordered]@{ at = ''; checkedAt = ''; ok = $false; message = ''; busy = $false }
if (Test-Path $StatFile) { try { $o = [IO.File]::ReadAllText($StatFile, $Utf8) | ConvertFrom-Json; foreach ($k in 'at', 'checkedAt', 'ok', 'message') { if ($null -ne $o.$k) { $St[$k] = $o.$k } } } catch {} }
function Now { (Get-Date).ToString('yyyy-MM-ddTHH:mm:sszzz') }
function Save-St { try { [IO.File]::WriteAllText($StatFile, ($St | ConvertTo-Json), $Utf8) } catch {} }
# 한 번 맞추기를 끝낸다(결과 기록). 반복 실행 중에도 쓰려고 exit 대신 예외로 빠져나간다
function Done($ok, $msg) {
  $St.ok = $ok; $St.message = $msg; $St.busy = $false; $St.checkedAt = (Now); if ($ok) { $St.at = $St.checkedAt }
  Save-St
  throw (New-Object System.OperationCanceledException 'done')
}
# git 실행: 출력(오류 포함)을 문자열로, 종료 코드는 $script:code
function G {
  $out = & git @args 2>&1 | ForEach-Object { "$_" }
  $script:code = $LASTEXITCODE
  return (($out | Where-Object { $_ }) -join "`n").Trim()
}
function Last($s) { $l = @($s -split "`n" | Where-Object { $_.Trim() }); if ($l.Count) { return $l[-1].Trim() }; return '' }

function Sync-Once {
  if (-not (Get-Command git -ErrorAction SilentlyContinue)) { Done $false 'git이 설치돼 있지 않아 이 PC에만 저장합니다.' }
  foreach ($d in $H, (Join-Path $H 'entries'), (Join-Path $H 'shots')) { if (-not (Test-Path $d)) { New-Item -ItemType Directory -Force $d | Out-Null } }

  # 모든 PC가 한 저장소를 쓴다: workbench/git_remote.txt (없을 때만 작업 폴더의 origin)
  $url = ''; $rf = Join-Path $WB 'git_remote.txt'; if (Test-Path $rf) { $url = ([IO.File]::ReadAllText($rf)).Trim() }
  if (-not $url) { $url = G -C $Root remote get-url origin; if ($code) { $url = '' } }
  if (-not $url) { Done $false '공유할 깃 저장소 주소가 없어 이 PC에만 저장합니다. (workbench/git_remote.txt)' }
  if (-not (Test-Path (Join-Path $H '.git'))) {
    G -C $H init -q | Out-Null
    G -C $H remote add origin $url | Out-Null
    G -C $H symbolic-ref HEAD refs/heads/history | Out-Null
  } elseif ((G -C $H remote get-url origin) -ne $url) { G -C $H remote set-url origin $url | Out-Null }

  # 원격에 history 브랜치가 있는지 (0: 있음, 2: 없음, 그 밖: 연결 실패)
  $ls = G -C $H ls-remote --exit-code --heads origin history
  $remote = $code
  if ($remote -ne 0 -and $remote -ne 2) {
    if ($ls -match 'not found|403|denied') { Done $false '저장소에 접근할 수 없습니다. 저장소 관리자에게 깃허브 아이디를 알려 초대를 받고, 메일 · 깃허브 알림에서 수락한 뒤 [깃허브 연결]을 다시 누르세요.' }
    if ($ls -match 'Authentication|could not read Username|terminal prompts disabled') { Done $false '깃허브 로그인이 필요합니다. 시작 안내 8단계의 [깃허브 연결]을 누르세요.' }
    Done $false ('깃 서버에 연결하지 못했습니다. ' + (Last $ls))
  }

  G -C $H rev-parse -q --verify HEAD | Out-Null
  $hasHead = ($code -eq 0)
  if ($remote -eq 0) {
    $o = G -C $H fetch -q origin history
    if ($code) { Done $false ('받기(fetch) 실패: ' + (Last $o)) }
    # 처음 받는 PC: 원격 이력 위에서 시작한다(이 PC 파일은 그대로 남는다)
    if (-not $hasHead) { $o = G -C $H checkout -q -f -B history FETCH_HEAD; if ($code) { Done $false ('받기 실패: ' + (Last $o)) }; $hasHead = $true }
  }

  # 커밋 · pull(rebase)에 쓸 깃 사용자 (설정이 없으면 Workbench 작업자 이름 · PC 이름으로)
  $id = @()
  $who = $env:WB_USER; if (-not $who) { $who = [Environment]::MachineName }
  $n = G -C $H config user.name; if (-not $n) { $id += '-c', "user.name=$who" }
  $m = G -C $H config user.email; if (-not $m) { $id += '-c', 'user.email=workbench@localhost' }

  # 이 PC의 새 이력 커밋
  G -C $H add -A . | Out-Null
  G -C $H diff --cached --quiet | Out-Null
  if ($code) {
    $args2 = $id + @('-C', $H, 'commit', '-q', '-m', ('history: ' + [Environment]::MachineName + ' ' + (Get-Date).ToString('yyyy-MM-dd HH:mm')))
    $o = G @args2
    if ($code) { Done $false ('커밋 실패: ' + (Last $o)) }
    $hasHead = $true
  }
  if (-not $hasHead) { Done $true '깃허브에 연결했습니다. 아직 공유된 이력이 없습니다.' }

  if ($remote -eq 0) {
    $args2 = $id + @('-C', $H, 'pull', '-q', '--rebase', 'origin', 'history')
    $o = G @args2
    if ($code) { G -C $H rebase --abort | Out-Null; Done $false ('받기(pull) 실패: ' + (Last $o)) }
  }
  $o = G -C $H push -q -u origin history
  if ($code) { Done $false ('올리기(push) 실패: ' + (Last $o)) }
  Done $true '깃과 맞췄습니다.'
}
function Run-Sync {
  $St.busy = $true; Save-St
  try { Sync-Once } catch [System.OperationCanceledException] {} catch { $St.busy = $false; $St.ok = $false; $St.message = '오류: ' + $_.Exception.Message; $St.checkedAt = (Now); Save-St }
}
# 가벼운 확인: 이 PC에 올릴 이력이 있거나 원격 history가 내 것과 다르면 맞춰야 한다
function Need-Sync {
  if (-not $St.ok -or -not (Test-Path (Join-Path $H '.git'))) { return $true }
  # 공유 저장소 주소(git_remote.txt)가 바뀌었으면(저장소 이전) 새 주소로 맞춘다
  $rf = Join-Path $WB 'git_remote.txt'
  if ((Test-Path $rf) -and ([IO.File]::ReadAllText($rf)).Trim() -and (G -C $H remote get-url origin) -ne ([IO.File]::ReadAllText($rf)).Trim()) { return $true }
  if (G -C $H status --porcelain) { return $true }
  $r = G -C $H ls-remote origin refs/heads/history
  if ($code) { return $true }
  $head = G -C $H rev-parse -q --verify HEAD
  return ((($r -split '\s+')[0]) -ne $head)
}

if (-not $Loop) {
  # 한 번만 (깃허브 로그인 등). 도는 동안 반복 동기화는 쉰다
  if ($Interactive) { [IO.File]::WriteAllText($LockFile, (Now)) }
  try { Run-Sync } finally { if ($Interactive) { Remove-Item $LockFile -Force -ErrorAction SilentlyContinue }; try { [IO.File]::WriteAllText($NowFile, (Now)) } catch {} }
  exit 0
}

Remove-Item $LockFile -Force -ErrorAction SilentlyContinue
Run-Sync
while ($true) {
  if ($ServerPid -and -not (Get-Process -Id $ServerPid -ErrorAction SilentlyContinue)) { exit 0 }
  # 실패한 뒤에는(로그인 필요 등) 1분에 한 번만 다시 묻는다
  $wait = $Every; if (-not $St.ok) { $wait = 60 }
  $until = (Get-Date).AddSeconds($wait)
  while ((Get-Date) -lt $until -and -not (Test-Path $NowFile)) { Start-Sleep -Milliseconds 500 }
  $now = Test-Path $NowFile
  if ($now) { Remove-Item $NowFile -Force -ErrorAction SilentlyContinue }
  if (Test-Path $LockFile) { continue }
  if ($now -or (Need-Sync)) { Run-Sync } else { $St.checkedAt = (Now); Save-St }
}
