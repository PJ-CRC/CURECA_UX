# 작업 이력 공유: .history 폴더(깃 history 브랜치)를 받고(pull) 이 PC의 새 이력을 올린다(push).
#  - 서버(guide_server.ps1)가 -Loop로 숨김 실행한다. 5초마다 원격이 바뀌었는지만 가볍게 묻고(ls-remote), 바뀌었거나 이 PC에 새 이력이 있을 때만 받고 올린다
#    서버가 workbench/.history_sync_now를 만들면(이력이 생김 · [깃 동기화]) 기다리지 않고 바로 맞춘다. 서버가 꺼지면(-ServerPid) 같이 끝난다
#  - .history는 작업 폴더 저장소와 같은 원격(origin)의 history 브랜치만 받는 별도 저장소다. 작업 중인 코드 · 브랜치와 섞이지 않는다
#  - 이력은 한 건 한 파일(entries/{PC}_{요청 ID}.json, shots/)이라 여러 PC가 올려도 충돌하지 않는다
#  - 원격 주소: 모든 PC가 같은 저장소를 쓰도록 workbench/git_remote.txt (이 파일이 없을 때만 작업 폴더의 origin)
#  - 결과는 workbench/.history_sync.json {at(마지막으로 맞춘 시각), checkedAt(마지막 확인), ok, message, busy, retrying, fails}
#  - -Interactive: 시작 안내 「깃허브 로그인」에서 한 번만. 깃허브 로그인 창을 허용한다(뒤에서 도는 동기화는 창을 띄우지 않는다)
param([string]$Root = (Split-Path $PSScriptRoot -Parent), [switch]$Interactive, [switch]$Loop, [int]$ServerPid = 0, [int]$Every = 5)
$H = Join-Path $Root '.history'
$WB = Join-Path $Root 'workbench'
$StatFile = Join-Path $WB '.history_sync.json'
$NowFile = Join-Path $WB '.history_sync_now'
$LockFile = Join-Path $WB '.history_sync.lock'
# 이 PC만 동기화를 잠시 끔(workbench/.history_sync_off): 받지도 올리지도 않는다. 새 규칙 구조를 이 PC에서만 시험할 때(2026-11-12). 지우면 다시 돈다
$OffFile = Join-Path $WB '.history_sync_off'
if (Test-Path $OffFile) { exit 0 }
$Utf8 = New-Object Text.UTF8Encoding $false
# git 출력(한글 파일 이름)을 UTF-8로 읽는다(충돌 파일 목록 · 진 쪽 파일 꺼내기)
try { [Console]::OutputEncoding = $Utf8 } catch { }
$env:GIT_TERMINAL_PROMPT = '0'
if (-not $Interactive) { $env:GCM_INTERACTIVE = 'Never' }
# 서버가 뜬 뒤 git을 설치했으면 PATH에 아직 없다
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  foreach ($d in "$env:ProgramFiles\Git\cmd", "$env:LOCALAPPDATA\Programs\Git\cmd") { if (Test-Path (Join-Path $d 'git.exe')) { $env:PATH = "$d;$env:PATH"; break } }
}

#  - 잠깐 실패(연결 끊김 · 다른 PC와 올리기가 겹침)는 5초 뒤 다시 하고, 3번 연달아 실패해야 「실패」(ok:false)로 둔다.
#    그동안은 ok를 그대로 두고 retrying:true · fails(연속 실패 수)만 쓴다. 로그인 · 권한 · 주소 문제는 바로 「실패」
$MaxFails = 3
$St = [ordered]@{ at = ''; checkedAt = ''; ok = $false; message = ''; busy = $false; retrying = $false; fails = 0 }
if (Test-Path $StatFile) { try { $o = [IO.File]::ReadAllText($StatFile, $Utf8) | ConvertFrom-Json; foreach ($k in 'at', 'checkedAt', 'ok', 'message', 'retrying', 'fails') { if ($null -ne $o.$k) { $St[$k] = $o.$k } } } catch {} }
function Now { (Get-Date).ToString('yyyy-MM-ddTHH:mm:sszzz') }
# 상태 파일은 임시 파일에 다 쓴 뒤 바꿔 넣는다(서버가 반쯤 쓴 파일을 읽지 않게)
function Save-St {
  $tmp = $StatFile + '.tmp'
  try {
    [IO.File]::WriteAllText($tmp, ($St | ConvertTo-Json), $Utf8)
    if (Test-Path $StatFile) { [IO.File]::Replace($tmp, $StatFile, $null) } else { [IO.File]::Move($tmp, $StatFile) }
  } catch { try { [IO.File]::WriteAllText($StatFile, ($St | ConvertTo-Json), $Utf8) } catch {}; Remove-Item $tmp -Force -ErrorAction SilentlyContinue }
}
# 한 번 맞추기를 끝낸다(결과 기록). 반복 실행 중에도 쓰려고 exit 대신 예외로 빠져나간다
#  $hard: 다시 해도 안 될 실패(로그인 · 권한 · 설정) → 바로 「실패」
function Done($ok, $msg, [switch]$hard) {
  $St.busy = $false; $St.checkedAt = (Now)
  if ($ok) { $St.ok = $true; $St.message = $msg; $St.at = $St.checkedAt; $St.retrying = $false; $St.fails = 0 }
  else {
    $St.fails = [int]$St.fails + 1
    if ($hard -or $St.fails -ge $MaxFails -or -not $St.ok) { $St.ok = $false; $St.retrying = $false; $St.message = $msg }
    else { $St.retrying = $true; $St.message = ('다시 시도 중({0}/{1}): ' -f $St.fails, $MaxFails) + $msg }
  }
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

# 충돌(두 PC가 같은 파일을 고침): 받기(rebase)를 멈추고 합치기(merge)로 다시 한다(2026-11-13 고침).
#  - 예전(-X ours/theirs)은 부딪친 줄만 한쪽으로 골라 한 파일 안에 두 PC의 줄이 섞였다 → 충돌한 파일은 **파일 통째로** 나중에 저장한 쪽(커밋 시각이 늦은 쪽) 것을 쓴다
#  - 이름 바뀜 짐작은 끈다(no-renames). 한쪽이 지운 파일은 지운 쪽이 나중이면 지우고, 아니면 남긴다
#  - 진 쪽 파일은 버리지 않고 conflicts/kept/{시각}_{PC}/{원래 경로}에 남기고, 파일마다 누구 것으로 맞췄는지 conflicts/{PC}.log에 적는다(다음 동기화 때 올라간다)
#  $id(깃 사용자)는 부른 쪽(Sync-Once) 것을 그대로 쓴다
function Resolve-Conflict {
  G -C $H rebase --abort | Out-Null
  $o = G -C $H fetch -q origin history
  if ($code) { Done $false ('받기(fetch) 실패: ' + (Last $o)) }
  $lt = 0; $rt = 0
  try { $lt = [long](G -C $H log -1 --format=%ct HEAD); $rt = [long](G -C $H log -1 --format=%ct FETCH_HEAD) } catch { }
  $mine = ($lt -ge $rt)   # merge에서 ours(2) = 이 PC, theirs(3) = 받은 쪽
  $args3 = $id + @('-c', 'merge.renames=false', '-C', $H, 'merge', '-q', '--no-ff', '-X', 'no-renames', '-m', ('history: 충돌 맞춤 ' + [Environment]::MachineName + ' ' + (Get-Date).ToString('yyyy-MM-dd HH:mm')), 'FETCH_HEAD')
  $o = G @args3
  if (-not $code) { return }   # 줄이 부딪치지 않았으면(rebase만 실패) 그대로 합쳐짐
  $files = @((G -c core.quotePath=false -C $H diff --name-only --diff-filter=U) -split "`n" | Where-Object { $_.Trim() })
  if (-not $files.Count) { G -C $H merge --abort | Out-Null; Done $false ('받기(합치기) 실패: ' + (Last $o)) }
  $stamp = (Get-Date).ToString('yyyyMMdd-HHmmss'); $slug = ([Environment]::MachineName.ToLower() -replace '[^a-z0-9-]', '-')
  $win = if ($mine) { 2 } else { 3 }; $lose = 5 - $win
  $winWho = if ($mine) { '이 PC' } else { '다른 PC' }
  $lines = @(); $kept = @()
  foreach ($f in $files) {
    $f = $f.Trim('"')
    # 진 쪽 내용 남기기(그쪽에 파일이 있을 때만). checkout-index --temp는 바이너리도 그대로 꺼낸다
    $t = G -C $H checkout-index "--stage=$lose" --temp -- $f
    if (-not $code -and $t) {
      $tmp = Join-Path $H (($t -split "`t")[0])
      $dst = Join-Path $H ('conflicts/kept/' + $stamp + '_' + $slug + '/' + $f)
      try { New-Item -ItemType Directory -Force (Split-Path $dst -Parent) | Out-Null; Move-Item -Force $tmp $dst; $kept += $f } catch { Remove-Item -Force $tmp -ErrorAction SilentlyContinue }
    }
    # 이긴 쪽 파일 통째로(그쪽이 지웠으면 지움)
    G -C $H cat-file -e (":$win" + ':' + $f) | Out-Null
    if ($code) { G -C $H rm -q -f -- $f | Out-Null; $how = '지움' }
    else { $side = if ($mine) { '--ours' } else { '--theirs' }; G -C $H checkout $side -- $f | Out-Null; G -C $H add -- $f | Out-Null; $how = '파일 통째로' }
    $lines += ("  - $f → $winWho 것($how)" + $(if ($kept -contains $f) { ', 진 쪽: conflicts/kept/' + $stamp + '_' + $slug + '/' + $f } else { '' }))
  }
  $args4 = $id + @('-C', $H, 'commit', '-q', '--no-edit')
  $o = G @args4
  if ($code) { G -C $H merge --abort | Out-Null; Done $false ('받기(pull) 실패 · 충돌: ' + (Last $o)) }
  try {
    $cd = Join-Path $H 'conflicts'; if (-not (Test-Path $cd)) { New-Item -ItemType Directory -Force $cd | Out-Null }
    [IO.File]::AppendAllText((Join-Path $cd ($slug + '.log')), ("[$(Now)] 충돌 → 나중에 저장한 $winWho 내용으로 맞춤(파일 " + $files.Count + "개)`r`n" + ($lines -join "`r`n") + "`r`n"), $Utf8)
    [IO.File]::WriteAllText($NowFile, (Now))   # 기록 · 진 쪽 파일을 바로 올리게
  } catch { }
}

function Sync-Once {
  if (-not (Get-Command git -ErrorAction SilentlyContinue)) { Done $false 'git이 설치돼 있지 않아 이 PC에만 저장합니다.' -hard }
  foreach ($d in $H, (Join-Path $H 'entries'), (Join-Path $H 'shots')) { if (-not (Test-Path $d)) { New-Item -ItemType Directory -Force $d | Out-Null } }

  # 모든 PC가 한 저장소를 쓴다: workbench/git_remote.txt (없을 때만 작업 폴더의 origin)
  $url = ''; $rf = Join-Path $WB 'git_remote.txt'; if (Test-Path $rf) { $url = ([IO.File]::ReadAllText($rf)).Trim() }
  if (-not $url) { $url = G -C $Root remote get-url origin; if ($code) { $url = '' } }
  if (-not $url) { Done $false '공유할 깃 저장소 주소가 없어 이 PC에만 저장합니다. (workbench/git_remote.txt)' -hard }
  if (-not (Test-Path (Join-Path $H '.git'))) {
    G -C $H init -q | Out-Null
    G -C $H remote add origin $url | Out-Null
    G -C $H symbolic-ref HEAD refs/heads/history | Out-Null
  } elseif ((G -C $H remote get-url origin) -ne $url) { G -C $H remote set-url origin $url | Out-Null }

  # 원격에 history 브랜치가 있는지 (0: 있음, 2: 없음, 그 밖: 연결 실패)
  $ls = G -C $H ls-remote --exit-code --heads origin history
  $remote = $code
  if ($remote -ne 0 -and $remote -ne 2) {
    if ($ls -match 'not found|403|denied') { Done $false '저장소에 접근할 수 없습니다. 저장소 관리자에게 깃허브 아이디를 알려 초대를 받고, 메일 · 깃허브 알림에서 수락한 뒤 [깃허브 연결]을 다시 누르세요.' -hard }
    if ($ls -match 'Authentication|could not read Username|terminal prompts disabled') { Done $false '깃허브 로그인이 필요합니다. 시작 안내 6단계의 [깃허브 연결]을 누르세요.' -hard }
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

  # 받고(pull) 올린다(push). 그 사이 다른 PC가 먼저 올려 거절되면(rejected · fetch first) 바로 다시 받고 올린다(최대 3번)
  for ($try = 1; $true; $try++) {
    if ($remote -eq 0) {
      # 이름 바뀜 짐작을 끈다(no-renames): 지운 파일과 새 파일이 비슷해도 「같은 파일 이름만 바뀜」으로 보고 내용을 옮겨 합치지 않게(2026-11-13 STAgora 작업규칙 4절이 섞임)
      $args2 = $id + @('-c', 'merge.renames=false', '-C', $H, 'pull', '-q', '--rebase', '-X', 'no-renames', 'origin', 'history')
      $o = G @args2
      if ($code) { Resolve-Conflict }
    }
    $o = G -C $H push -q -u origin history
    if (-not $code) { break }
    if ($try -lt 3 -and $o -match 'rejected|fetch first|non-fast-forward|failed to push some refs') { $remote = 0; Start-Sleep -Milliseconds (300 * $try); continue }
    Done $false ('올리기(push) 실패: ' + (Last $o))
  }
  Done $true '깃과 맞췄습니다.'
}
function Run-Sync {
  $St.busy = $true; Save-St
  try { Sync-Once } catch [System.OperationCanceledException] {} catch { try { Done $false ('오류: ' + $_.Exception.Message) } catch [System.OperationCanceledException] {} }
}
# 가벼운 확인: 이 PC에 올릴 이력이 있거나 원격 history가 내 것과 다르면 맞춰야 한다
function Need-Sync {
  if (-not $St.ok -or $St.retrying -or -not (Test-Path (Join-Path $H '.git'))) { return $true }
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
  if (Test-Path $OffFile) { exit 0 }
  # 잠깐 실패(다시 시도 중)는 5초 뒤 바로, 「실패」가 된 뒤에는(로그인 필요 등) 1분에 한 번만 다시 묻는다
  $wait = $Every; if (-not $St.ok -and -not $St.retrying) { $wait = 60 }
  $until = (Get-Date).AddSeconds($wait)
  while ((Get-Date) -lt $until -and -not (Test-Path $NowFile)) { Start-Sleep -Milliseconds 500 }
  $now = Test-Path $NowFile
  if ($now) { Remove-Item $NowFile -Force -ErrorAction SilentlyContinue }
  if (Test-Path $LockFile) { continue }
  if ($now -or (Need-Sync)) { Run-Sync } else { $St.checkedAt = (Now); Save-St }
}
