# Common UX Guide local server
#  - 가이드 HTML/이미지 정적 서빙
#  - GET/POST /api/requests    : 작업 페이지 수정 요청 (workbench/edit_requests.json) {action:add|update|delete}
#  - POST /api/upload?name=    : 가이드 · 정의서 만들기 참고 파일(md · pdf · docx · 이미지 등, 20MB 미만) 임시 저장 → {tmp}. jobs add(kind guide)의 files:[{tmp, name}]
#  - POST /api/attach?ext=     : 수정 요청 첨부 이미지(10MB 미만) 임시 저장 → {tmp}. add의 images:[{tmp, small, name}]로 등록(최대 5장)
#  - POST /api/shots           : 프레임 캡처 저장 (projects/{fileKey}/shots, shots_meta.json) · PNG/JPG
#  - GET  /api/projects        : 프로젝트(Figma 파일) 목록 (projects/{fileKey}/project.json)
#  - GET/POST /api/prototypes  : 프로토타입 목록(이 PC에만, prototypes/{id}/meta.json, Figma가 바뀐 화면 stale) · 지우기 {action:delete} (prototypes/_trash로 옮김)
#  - GET/POST /api/catalog     : 프로젝트 프레임 목록 (projects/{fileKey}/catalog.json)
#  - GET/POST /api/jobs        : 작업 대기열 (workbench/jobs.json) · 캡처 받기 · 프레임 목록 만들기 · 새 UX 가이드 만들기 {action:add|take|update}
#  - GET/POST /api/guides      : UX 가이드(공유) 목록 · 이 PC의 파일별 작업 기준 가이드 {action:'apply'} (workbench/guide_apply.json, 공유 안 함) · 가이드 수정 {action:'save'}
#                                 .history/guides/{id}/ (meta.json · guide.md · images/) → 작업 이력과 함께 깃 history 브랜치로 공유. 보기: UX_Guide.html?g={id}
#  - GET/POST /api/setup       : 첫 실행 안내(Setup.html) 진행 상태 · 설치 확인 (PC별: %LOCALAPPDATA%\UX_AI_TEST_Workbench\setup.json)
#  - POST /api/setup/launch    : Figma · Claude 앱 또는 작업 폴더 열기 {app:figma|claude|folder, url}
#                                · claude-cli(Claude Code 창: 처음 로그인 · Figma 연결, 직접 작업) · agent-start · agent-stop(백그라운드 감시)
#  - GET  /start               : 안내를 끝내지 않았으면 Setup.html, 끝냈으면 가이드로 이동
#  - POST /api/alive · /api/bye : 브라우저 탭 열림(20초마다) · 닫힘 {id}. 열린 탭이 모두 닫히면 3초 뒤 서버를 끈다(묻지 않음)
#                                 (예: 서버 종료 / 아니요: Workbench 다시 열기)
#  - GET/POST /api/history     : 작업 이력(모든 작업자 공유) {action:add|sync}. 완료된 요청은 자동으로 남는다
#                                 .history/entries · shots → 깃 history 브랜치 (workbench/history_sync.ps1 -Loop가 5초마다 확인해 받고 올림)
#  - GET  /api/usage           : 토큰 사용량(모든 작업자 공유, .history/usage). 요청이 「완료」가 되면 workbench/usage.ps1이
#                                 「진행 중」이 된 시각(startedAt)부터의 사용량을 Claude 대화 기록에서 더해 남긴다
#  - POST /api/shutdown        : 서버 종료
# 실행: 윈도우 powershell -ExecutionPolicy Bypass -File guide_server.ps1 [-LogFile 경로] / 맥 pwsh -File guide_server.ps1
#  (윈도우 PowerShell 5.1과 맥 PowerShell 7 모두에서 돈다. 경로는 \ 대신 P 함수로 잇는다)
#  Figma AI Run.bat은 창 없이 띄우고(workbench/launch_win.ps1) 출력은 -LogFile에 남긴다
param([int]$Port = 8765, [string]$LogFile = '')
if ($LogFile) { try { Start-Transcript -Path $LogFile -Force | Out-Null } catch {} }

function P { [IO.Path]::Combine([string[]]$args) }
$IsMac = ($PSVersionTable.PSVersion.Major -ge 6) -and $IsMacOS
$Root = $PSScriptRoot
$ReqFile = P $Root 'workbench' 'edit_requests.json'
$JobFile = P $Root 'workbench' 'jobs.json'
$ProjRoot = P $Root 'projects'
# 기본 프로젝트는 없다. 파일 키를 안 준 요청(예: 플러그인 캡처)은 시작 안내 3단계 작업 링크의 파일로 본다
function Work-Key { return (Key-Of (Read-Setup).figmaUrl) }
$ProtoRoot = P $Root 'prototypes'   # 프로토타입(이 PC에만): prototypes/{id}/meta.json · index.html · screens/
$Utf8 = New-Object System.Text.UTF8Encoding($false)
# PC별 진행 상태: 윈도우 %LOCALAPPDATA%, 맥 ~/Library/Application Support
if ($IsMac) { $SetupDir = P $HOME 'Library' 'Application Support' 'UX_AI_TEST_Workbench' } else { $SetupDir = P $env:LOCALAPPDATA 'UX_AI_TEST_Workbench' }
$SetupFile = P $SetupDir 'setup.json'
$HeartFile = P $Root 'workbench' '.watcher.json'
$AgentFile = P $Root 'workbench' '.agent.json'
$AgentStop = P $Root 'workbench' '.agent_stop'
if ($IsMac) { $FigmaExe = '/Applications/Figma.app' } else { $FigmaExe = P $env:LOCALAPPDATA 'Figma' 'Figma.exe' }
$PluginSeen = $null
$ClaudeApp = $null
# 작업 이력(공유): 한 건 한 파일. 파일 이름의 PC 이름으로 여러 PC 이력이 겹치지 않는다
$HistDir = P $Root '.history'
$HistEntries = P $HistDir 'entries'
$HistShots = P $HistDir 'shots'
$HistUsage = P $HistDir 'usage'
# 수정 요청 첨부 이미지: 원본은 이 PC에만(workbench/req_images/{요청 ID}_{n}.{ext}), 이력에는 줄인 사본(.history/attach/{PC}_{요청 ID}_{n}.jpg)만 공유
$AttachDir = P $Root 'workbench' 'req_images'
$AttachTmp = P $AttachDir '_tmp'
$HistAttach = P $HistDir 'attach'
$AttachMax = 10MB
# 가이드 · 정의서 만들기 참고 파일(md · 문서 · 이미지 등): 이 PC에만 workbench/job_files/{작업 ID}/ (먼저 _tmp에 올리고 작업을 만들 때 옮긴다)
$UpDir = P $Root 'workbench' 'job_files'
$UpTmp = P $UpDir '_tmp'
$UpMax = 20MB; $UpMaxN = 10
$UpExt = 'md', 'markdown', 'txt', 'csv', 'tsv', 'json', 'html', 'htm', 'pdf', 'docx', 'xlsx', 'pptx', 'png', 'jpg', 'jpeg', 'gif', 'webp'
# UX 가이드(공유): .history/guides/{id}/ (meta.json · guide.md · rev/ · images/)
# 작업 기준 가이드는 PC(작업자)마다 따로 고른다: workbench/guide_apply.json {fileKey: {guideId, by, at}} (공유하지 않음)
$GuideRoot = P $HistDir 'guides'
$GuideApply = P $Root 'workbench' 'guide_apply.json'
$SyncStat = P $Root 'workbench' '.history_sync.json'
$PcName = [Environment]::MachineName
$PcSlug = ($PcName.ToLower() -replace '[^a-z0-9-]', '-')
$SyncNow = P $Root 'workbench' '.history_sync_now'
$SyncProc = $null; $SyncWant = $false; $SyncLast = [datetime]::MinValue; $LoginProc = $null

function Now { (Get-Date).ToString('yyyy-MM-ddTHH:mm:sszzz') }
# ── 프로젝트(Figma 파일) 폴더: projects/{fileKey}/project.json · catalog.json · shots/ · shots_meta.json ──
function Test-Key($k) { return ([string]$k) -match '^[A-Za-z0-9]{10,64}$' }
function Proj-Dir($k) { P $ProjRoot $k }
function Read-Proj($k) { $f = P (Proj-Dir $k) 'project.json'; if (Test-Path $f) { try { return [IO.File]::ReadAllText($f, $Utf8) | ConvertFrom-Json } catch {} }; return $null }
function Save-Proj($p) { $d = Proj-Dir $p.key; if (-not (Test-Path $d)) { New-Item -ItemType Directory -Force $d | Out-Null }; [IO.File]::WriteAllText((P $d 'project.json'), ($p | ConvertTo-Json -Depth 4), $Utf8) }
function Ensure-Proj($k, $link) {
  $p = Read-Proj $k
  if (-not $p) { $p = [pscustomobject]@{ key = $k; name = ''; link = [string]$link; editablePageId = ''; editablePageName = ''; uxGuideLink = ''; createdAt = (Now) }; Save-Proj $p }
  elseif ($link -and -not $p.link) { $p.link = [string]$link; Save-Proj $p }
  return $p
}
# 작업 링크가 바뀌면 수정 가능 페이지도 바꾼다: 링크의 node-id가 페이지면 그 페이지, 프레임이면 그 프레임이 있는 페이지(프레임 목록 기준)
#  catalog.json은 배열 모양이 바뀌지 않게 글자만 고친다(editable · editablePageId)
#  정했으면 $true, 링크에 노드가 없거나 목록에서 그 노드를 찾지 못하면 $false
function Set-EditablePage($k, $url) {
  if ([string]$url -notmatch '[?&]node-id=(\d+)[-:](\d+)') { return $false }
  $nid = $Matches[1] + ':' + $Matches[2]
  $cf = P (Proj-Dir $k) 'catalog.json'; if (-not (Test-Path $cf)) { return $false }
  $txt = [IO.File]::ReadAllText($cf, $Utf8)
  try { $cat = $txt | ConvertFrom-Json } catch { return $false }
  $pg = @($cat.pages) | Where-Object { $_.id -eq $nid } | Select-Object -First 1
  if (-not $pg) { $pg = @($cat.pages) | Where-Object { @($_.frames) | Where-Object { $_ -and $_[0] -eq $nid } } | Select-Object -First 1 }
  if (-not $pg) { return $false }
  $txt = [regex]::Replace($txt, '("editable"\s*:\s*)true', '${1}false')
  $txt = [regex]::Replace($txt, '("id"\s*:\s*"' + [regex]::Escape($pg.id) + '"(?:(?!"id"\s*:).)*?"editable"\s*:\s*)false', '${1}true', 'Singleline')
  $txt = [regex]::Replace($txt, '("editablePageId"\s*:\s*)"[^"]*"', '${1}"' + $pg.id + '"')
  [IO.File]::WriteAllText($cf, $txt, $Utf8)
  $p = Read-Proj $k
  if ($p) { $p.editablePageId = [string]$pg.id; $p.editablePageName = [string]$pg.name; Save-Proj $p }
  return $true
}
# 서버를 켤 때: 모든 프로젝트의 수정 가능 페이지를 작업 링크 기준으로 다시 맞춘다
#  (꺼져 있는 동안 플러그인 · 프레임 목록 작업이 옛 링크 기준 값을 남겼을 수 있다)
function Fix-EditablePages {
  if (-not (Test-Path $ProjRoot)) { return }
  foreach ($d in Get-ChildItem $ProjRoot -Directory) { $p = Read-Proj $d.Name; if ($p -and $p.link) { Set-EditablePage $d.Name $p.link | Out-Null } }
}
function Key-Of($url) { if ([string]$url -match 'figma\.com/(?:design|file|proto)/([A-Za-z0-9]+)') { return $Matches[1] }; return '' }
function Read-Jobs { if (Test-Path $JobFile) { try { return [IO.File]::ReadAllText($JobFile, $Utf8) | ConvertFrom-Json } catch {} }; return [pscustomobject]@{ version = 0; items = @() } }

# ── 작업 이력(공유) ──
# 그 프레임의 지금 캡처를 이력용으로 남긴다: 크기는 그대로(원본), PNG는 JPG(품질 85)로 바꿔 용량만 줄인다. 바꾸지 못하면 그대로 복사
function Copy-HistShot($key, $nid, $name) {
  if (-not $key) { return '' }
  if (-not (Test-Key $key) -or [string]$nid -notmatch '^\d+:\d+$') { return '' }
  $src = $null
  foreach ($x in 'png', 'jpg') { $f = P (Proj-Dir $key) 'shots' ($nid.Replace(':', '-') + '.' + $x); if (Test-Path $f) { $src = $f } }
  if (-not $src) { return '' }
  if (-not (Test-Path $HistShots)) { New-Item -ItemType Directory -Force $HistShots | Out-Null }
  $dst = P $HistShots ($name + '.jpg')
  try {
    Add-Type -AssemblyName System.Drawing
    $img = [System.Drawing.Image]::FromFile($src)
    try {
      $w = $img.Width; $h = $img.Height
      $bmp = New-Object System.Drawing.Bitmap $w, $h
      $g = [System.Drawing.Graphics]::FromImage($bmp)
      $g.Clear([System.Drawing.Color]::White); $g.InterpolationMode = 'HighQualityBicubic'; $g.DrawImage($img, 0, 0, $w, $h); $g.Dispose()
      $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
      $ps = New-Object System.Drawing.Imaging.EncoderParameters 1
      $ps.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), ([long]85)
      $bmp.Save($dst, $enc, $ps); $bmp.Dispose()
    } finally { $img.Dispose() }
  } catch { $dst = P $HistShots ($name + [IO.Path]::GetExtension($src)); Copy-Item $src $dst -Force }
  return 'shots/' + [IO.Path]::GetFileName($dst)
}
function Save-HistEntry($name, $e) {
  if (-not (Test-Path $HistEntries)) { New-Item -ItemType Directory -Force $HistEntries | Out-Null }
  [IO.File]::WriteAllText((P $HistEntries ($name + '.json')), ($e | ConvertTo-Json -Depth 4), $Utf8)
  $script:SyncWant = $true
}
# 요청 → 이력 한 건 ({PC}_{요청 ID}). 등록 · 상태 변경(대기 · 진행 중 · 보류 · 완료)마다 덮어쓰고, 삭제하면 지운다
#  캡처는 완료일 때만(완료 직전에 캡처를 갱신하므로) 남긴다
function Hist-FromRequest($r) {
  $name = $PcSlug + '_' + [string]$r.id
  $shot = ''; if ($r.status -eq '완료') { $shot = Copy-HistShot $r.fileKey $r.nodeId $name } else { Remove-Item (P $HistShots ($name + '.*')) -Force -ErrorAction SilentlyContinue }
  # 첨부 이미지는 줄인 사본만 이력에 둔다(처음 한 번 복사)
  $att = @(); $n = 0
  foreach ($a in @($r.images | Where-Object { $_ })) {
    $n++; $src = if ($a.small) { P $Root ([string]$a.small) } else { '' }
    if (-not $src -or -not (Test-Path $src)) { continue }
    $dst = P $HistAttach ('{0}_{1}.jpg' -f $name, $n)
    if (-not (Test-Path $dst)) { if (-not (Test-Path $HistAttach)) { New-Item -ItemType Directory -Force $HistAttach | Out-Null }; Copy-Item $src $dst -Force }
    $att += 'attach/' + [IO.Path]::GetFileName($dst)
  }
  Save-HistEntry $name ([ordered]@{
    id = $name; kind = 'request'; status = [string]$r.status; at = [string]$r.updatedAt; createdAt = [string]$r.createdAt; by = [string]$r.author; doneBy = [string]$r.updatedBy; pc = $PcName
    reqId = [string]$r.id; fileKey = [string]$r.fileKey; fileName = [string]$r.fileName; page = [string]$r.page; frame = [string]$r.frame; nodeId = [string]$r.nodeId
    type = [string]$r.type; layout = [string]$r.layout; text = [string]$r.text; note = [string]$r.note; shot = $shot; images = $att
  })
}
function Hist-Remove($id) {
  $name = $PcSlug + '_' + [string]$id
  Remove-Item (P $HistEntries ($name + '.json')), (P $HistShots ($name + '.*')), (P $HistAttach ($name + '_*')) -Force -ErrorAction SilentlyContinue
  $script:SyncWant = $true
}
# 참고 파일: 임시 파일(/api/upload)을 workbench/job_files/{작업 ID}/{원래 이름}으로 옮긴다(이름이 겹치면 앞에 번호)
function Save-Uploads($jid, $list) {
  $out = @(); $dir = P $UpDir $jid; $n = 0
  foreach ($a in @($list)) {
    $nm = ([string]$a.name -replace '[\\/:*?"<>|\x00-\x1f]', '_').Trim(); if (-not $nm) { $nm = [string]$a.tmp }
    if ($nm.Length -gt 100) { $nm = $nm.Substring($nm.Length - 100) }
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }
    $n++; if (Test-Path (P $dir $nm)) { $nm = '{0}_{1}' -f $n, $nm }
    Move-Item (P $UpTmp ([string]$a.tmp)) (P $dir $nm) -Force
    $out += [pscustomobject]@{ path = "workbench/job_files/$jid/$nm"; name = $nm; size = (Get-Item (P $dir $nm)).Length }
  }
  return ,$out
}
# 첨부 이미지: 먼저 올린 임시 파일(/api/attach)을 요청 ID 이름으로 옮긴다(최대 5장)
#  원본 workbench/req_images/{id}_{n}.{ext}, 줄인 사본(긴 변 1600 JPG, 브라우저가 만든다) {id}_{n}_s.jpg
function Save-Attach($id, $list) {
  Remove-Item (P $AttachDir ($id + '_*')) -Force -ErrorAction SilentlyContinue   # 지운 요청의 ID를 다시 쓰는 경우
  $out = @(); $n = 0
  foreach ($a in @($list | Where-Object { $_ } | Select-Object -First 5)) {
    $t = [string]$a.tmp; $s = [string]$a.small
    if ($t -notmatch '^[0-9a-f]{32}\.(png|jpg|gif|webp)$' -or -not (Test-Path (P $AttachTmp $t))) { continue }
    $n++; $f = '{0}_{1}{2}' -f $id, $n, [IO.Path]::GetExtension($t)
    Move-Item (P $AttachTmp $t) (P $AttachDir $f) -Force
    $sf = ''
    if ($s -match '^[0-9a-f]{32}\.jpg$' -and (Test-Path (P $AttachTmp $s))) { $sf = '{0}_{1}_s.jpg' -f $id, $n; Move-Item (P $AttachTmp $s) (P $AttachDir $sf) -Force }
    $nm = [string]$a.name; if ($nm.Length -gt 80) { $nm = $nm.Substring(0, 80) }
    $out += [pscustomobject]@{ file = 'workbench/req_images/' + $f; small = $(if ($sf) { 'workbench/req_images/' + $sf } else { '' }); name = $nm; size = (Get-Item (P $AttachDir $f)).Length }
  }
  return ,$out
}
# 시작할 때: 이력에 없거나 내용(상태 · 시각)이 다른 요청을 맞춘다
function Hist-Backfill {
  if (-not (Test-Path $ReqFile)) { return }
  try { $r = [IO.File]::ReadAllText($ReqFile, $Utf8) | ConvertFrom-Json } catch { return }
  foreach ($i in @($r.items | Where-Object { $_ })) {
    $f = P $HistEntries ($PcSlug + '_' + [string]$i.id + '.json'); $e = $null
    if (Test-Path $f) { try { $e = [IO.File]::ReadAllText($f, $Utf8) | ConvertFrom-Json } catch {} }
    if (-not $e -or $e.status -ne $i.status -or $e.at -ne $i.updatedAt -or ($i.createdAt -and -not $e.createdAt -and $i.status -ne '완료')) { Hist-FromRequest $i }
  }
}
function Read-Hist {
  $items = @()
  if (Test-Path $HistEntries) {
    foreach ($f in Get-ChildItem $HistEntries -Filter *.json) { try { $items += ([IO.File]::ReadAllText($f.FullName, $Utf8) | ConvertFrom-Json) } catch {} }
  }
  $st = $null; if (Test-Path $SyncStat) { try { $st = [IO.File]::ReadAllText($SyncStat, $Utf8) | ConvertFrom-Json } catch {} }
  return [ordered]@{ pc = $PcName; pcSlug = $PcSlug; syncing = (Test-Syncing $st); sync = $st; items = $items }
}
# 토큰 사용량(공유): 한 건 한 파일 .history/usage/{PC}_{요청 ID}.json
function Read-Usage {
  $items = @()
  if (Test-Path $HistUsage) {
    foreach ($f in Get-ChildItem $HistUsage -Filter *.json) { try { $items += ([IO.File]::ReadAllText($f.FullName, $Utf8) | ConvertFrom-Json) } catch {} }
  }
  $pr = $null; try { $pr = [IO.File]::ReadAllText((P $Root 'workbench' 'pricing.json'), $Utf8) | ConvertFrom-Json } catch {}
  return [ordered]@{ pc = $PcName; pcSlug = $PcSlug; pricing = $pr; items = $items }
}
# UX 가이드(공유) 목록과 이 PC의 파일별 작업 기준 가이드
function Read-Guides {
  $list = @(); $applied = [ordered]@{}
  if (Test-Path $GuideRoot) {
    foreach ($d in Get-ChildItem $GuideRoot -Directory | Where-Object { $_.Name -ne '_apply' }) {
      $mf = P $d.FullName 'meta.json'
      if (-not (Test-Path $mf)) { continue }
      try { $m = [IO.File]::ReadAllText($mf, $Utf8) | ConvertFrom-Json } catch { continue }
      # 수정본: rev/{시각}_{PC}.md (+ 같은 이름 .json {by, at, note, base}). 가장 최근 수정본이 지금 내용이다(없으면 guide.md)
      $revs = @()
      $rd = P $d.FullName 'rev'
      if (Test-Path $rd) {
        foreach ($f in Get-ChildItem $rd -Filter *.md | Sort-Object Name) {
          $info = $null; $jf = [IO.Path]::ChangeExtension($f.FullName, '.json')
          if (Test-Path $jf) { try { $info = [IO.File]::ReadAllText($jf, $Utf8) | ConvertFrom-Json } catch {} }
          $revs += [ordered]@{ rev = $f.BaseName; at = [string]$info.at; by = [string]$info.by; note = [string]$info.note; base = [string]$info.base }
        }
      }
      $last = $(if ($revs.Count) { $revs[-1] } else { $null })
      $m | Add-Member -NotePropertyName mdPath -NotePropertyValue $(if ($last) { ".history/guides/$($d.Name)/rev/$($last.rev).md" } else { ".history/guides/$($d.Name)/guide.md" }) -Force
      $m | Add-Member -NotePropertyName rev -NotePropertyValue $(if ($last) { $last.rev } else { '' }) -Force
      $m | Add-Member -NotePropertyName revs -NotePropertyValue @($revs) -Force
      if ($last -and $last.at) { $m | Add-Member -NotePropertyName updatedAt -NotePropertyValue $last.at -Force }
      $list += $m
    }
  }
  if (Test-Path $GuideApply) {
    try { $a = [IO.File]::ReadAllText($GuideApply, $Utf8) | ConvertFrom-Json; foreach ($p in $a.PSObject.Properties) { $applied[$p.Name] = $p.Value } } catch {}
  }
  return [ordered]@{ items = @($list | Sort-Object { [string]$_.updatedAt } -Descending); applied = $applied }
}
# 요청이 끝나면 그 구간의 사용량을 따로 띄운 프로세스가 남긴다(대화 기록을 읽느라 몇 초 걸릴 수 있어 서버를 막지 않는다)
function Start-Usage($id) {
  try {
    if ($IsMac) { Start-Process 'perl' -ArgumentList ('"' + (P $Root 'workbench' 'usage.pl') + '" --req ' + $id) | Out-Null }
    else { Start-Process 'powershell' -ArgumentList ('-NoProfile -ExecutionPolicy Bypass -File "' + (P $Root 'workbench' 'usage.ps1') + '" -ReqId ' + $id) -WindowStyle Hidden | Out-Null }
  } catch {}
}
function Test-Syncing($st) { return [bool](($st -and $st.busy) -or ($script:LoginProc -and -not $script:LoginProc.HasExited)) }
# 깃 받기 · 올리기는 따로 띄운 반복 프로세스(5초마다 확인, 숨김)가 한다. 죽으면 30초 뒤 다시 띄운다.
# 바로 맞춰야 할 때(이력이 생김 · [깃 동기화])는 .history_sync_now 파일로 알린다
function Sync-Tick {
  if ((-not $script:SyncProc -or $script:SyncProc.HasExited) -and ((Get-Date) - $script:SyncLast).TotalSeconds -ge 30) {
    $script:SyncLast = Get-Date
    $env:WB_USER = [string](Read-Setup).user   # 깃 사용자 설정이 없는 PC는 작업자 이름으로 커밋
    try {
      if ($IsMac) { $script:SyncProc = Start-Process '/bin/bash' -ArgumentList ('"' + (P $Root 'workbench' 'history_sync.sh') + '" --loop ' + $PID) -PassThru }
      else { $script:SyncProc = Start-Process 'powershell' -ArgumentList ('-NoProfile -ExecutionPolicy Bypass -File "' + (P $Root 'workbench' 'history_sync.ps1') + '" -Loop -ServerPid ' + $PID) -WindowStyle Hidden -PassThru }
    } catch { $script:SyncProc = $null }
  }
  if ($script:SyncWant) { $script:SyncWant = $false; try { [IO.File]::WriteAllText($SyncNow, (Now)) } catch {} }
}

function Read-Setup {
  if (Test-Path $SetupFile) { try { return [IO.File]::ReadAllText($SetupFile, $Utf8) | ConvertFrom-Json } catch {} }
  return [pscustomobject]@{ done = $false; user = ''; figmaUrl = ''; checks = [pscustomobject]@{}; updatedAt = '' }
}
# ── 계정 · 메뉴 권한 ──
#  계정 = .history/accounts/{id}.json (작업 이력과 함께 깃으로 모든 PC에 공유, 한 계정 한 파일이라 충돌이 적다)
#   {id, name, admin(최고관리자 1명), menus:[메뉴 키], salt, hash(PBKDF2-SHA256 100000회, base64), iter, active, createdAt, updatedAt, pwAt}
#  로그인은 PC마다 유지한다: setup.json의 login {id, pwAt}. 비밀번호가 바뀌면(pwAt 다름) 다시 로그인
#  계정 파일이 하나도 없으면 로그인 없이 모두 쓴다(처음 설치 · 깃 연결 전)
$AcctDir = P $HistDir 'accounts'
$Menus = @(
  [ordered]@{ key = 'setup'; label = '시작 안내'; pages = @('Setup.html'); always = $true },   # 권한 설정 없이 누구나
  [ordered]@{ key = 'guide'; label = 'UX 문서'; pages = @('Common_UX_Guide.html', 'UX_Guide.html') },
  [ordered]@{ key = 'workbench'; label = 'Figma Workbench'; pages = @('Figma_Workbench.html') },
  [ordered]@{ key = 'history'; label = '변경 이력'; pages = @('Change_History.html') },
  [ordered]@{ key = 'usage'; label = '사용량 통계'; pages = @('Usage_Stats.html') },
  [ordered]@{ key = 'proto'; label = '프로토타입'; pages = @('Prototypes.html', 'Prototype.html', 'Assay_Pack_Prototype.html') },
  [ordered]@{ key = 'accounts'; label = '계정 관리'; pages = @('Accounts.html'); admin = $true }
)
$MenuKeys = @($Menus | Where-Object { -not $_.admin -and -not $_.always } | ForEach-Object { $_.key })   # 계정마다 고르는 메뉴
$AlwaysKeys = @($Menus | Where-Object { $_.always } | ForEach-Object { $_.key })
function Pw-Hash([string]$pw, [byte[]]$salt, [int]$iter) {
  $k = New-Object Security.Cryptography.Rfc2898DeriveBytes($pw, $salt, $iter, [Security.Cryptography.HashAlgorithmName]::SHA256)
  try { return [Convert]::ToBase64String($k.GetBytes(32)) } finally { $k.Dispose() }
}
function New-Salt { $b = New-Object byte[] 16; $r = [Security.Cryptography.RandomNumberGenerator]::Create(); $r.GetBytes($b); $r.Dispose(); return $b }
function Set-Pw($a, [string]$pw) {
  $s = New-Salt; $a | Add-Member -NotePropertyName salt -NotePropertyValue ([Convert]::ToBase64String($s)) -Force
  $a | Add-Member -NotePropertyName iter -NotePropertyValue 100000 -Force
  $a | Add-Member -NotePropertyName hash -NotePropertyValue (Pw-Hash $pw $s 100000) -Force
  $a | Add-Member -NotePropertyName pwAt -NotePropertyValue (Now) -Force
}
function Test-Pw($a, [string]$pw) {
  if (-not $a -or -not $a.salt -or -not $a.hash) { return $false }
  $h = Pw-Hash $pw ([Convert]::FromBase64String([string]$a.salt)) ([int]$a.iter)
  # 길이가 같은 두 문자열을 끝까지 비교(앞에서 다르면 바로 끝나는 비교로 시간 차가 생기지 않게)
  $x = [string]$a.hash; if ($h.Length -ne $x.Length) { return $false }
  $d = 0; for ($i = 0; $i -lt $h.Length; $i++) { $d = $d -bor ([int][char]$h[$i] -bxor [int][char]$x[$i]) }
  return ($d -eq 0)
}
function Read-Accounts {
  $l = @(); if (-not (Test-Path $AcctDir)) { return $l }
  foreach ($f in Get-ChildItem $AcctDir -Filter *.json) { try { $a = [IO.File]::ReadAllText($f.FullName, $Utf8) | ConvertFrom-Json; if ($a.id) { $l += $a } } catch {} }
  return $l
}
function Read-Account([string]$id) {
  if ($id -notmatch '^[A-Za-z0-9._-]{3,32}$') { return $null }
  $f = P $AcctDir ($id.ToLower() + '.json'); if (-not (Test-Path $f)) { return $null }
  try { return [IO.File]::ReadAllText($f, $Utf8) | ConvertFrom-Json } catch { return $null }
}
function Save-Account($a) {
  if (-not (Test-Path $AcctDir)) { New-Item -ItemType Directory -Force $AcctDir | Out-Null }
  $a | Add-Member -NotePropertyName updatedAt -NotePropertyValue (Now) -Force
  [IO.File]::WriteAllText((P $AcctDir (([string]$a.id).ToLower() + '.json')), ($a | ConvertTo-Json -Depth 4), $Utf8)
  $script:SyncWant = $true   # 바로 깃으로 올린다
}
function Has-Accounts { return ((Test-Path $AcctDir) -and @(Get-ChildItem $AcctDir -Filter *.json -ErrorAction SilentlyContinue).Count -gt 0) }
# 공유 이력을 한 번이라도 받았는지(계정 정보는 이력과 함께 깃으로 온다)
function Hist-Ready {
  if ((Test-Path $HistEntries) -and @(Get-ChildItem $HistEntries -Filter *.json -ErrorAction SilentlyContinue).Count) { return $true }
  try { return [bool](([IO.File]::ReadAllText($SyncStat, $Utf8) | ConvertFrom-Json).ok) } catch { return $false }
}
# 로그인이 필요한가: 계정이 있으면 늘. 새 PC라 아직 이력(계정)을 못 받았어도 로그인 화면부터 보인다(그 화면에서 깃허브 연결 → 계정을 받은 뒤 로그인)
#  이력을 받았는데도 계정이 하나도 없으면(계정을 쓰지 않는 곳) 예전처럼 로그인 없이 쓴다
function Auth-Required { return ((Has-Accounts) -or -not (Hist-Ready)) }
# 계정 정보를 아직 받지 못한 새 PC: 로그인 화면이 깃허브 연결부터 안내한다
function Need-Sync { return (-not (Has-Accounts) -and -not (Hist-Ready)) }
# 이 PC에 로그인한 계정(사용 중이고 비밀번호가 로그인 뒤 바뀌지 않았을 때)
function Current-User {
  $s = Read-Setup; if (-not $s.login -or -not $s.login.id) { return $null }
  $a = Read-Account ([string]$s.login.id)
  if (-not $a -or $a.active -eq $false -or [string]$a.pwAt -ne [string]$s.login.pwAt) { return $null }
  return $a
}
function Pick-Menus($a) { return @(@($a.menus) | Where-Object { $MenuKeys -contains $_ }) }
function User-Menus($a) { if (-not $a) { return @() }; if ($a.admin) { return @($Menus | ForEach-Object { $_.key }) }; $p = Pick-Menus $a; return @($Menus | Where-Object { $_.always -or $p -contains $_.key } | ForEach-Object { $_.key }) }
function Me-Info {
  $req = Auth-Required; $u = $null; if ($req) { $u = Current-User }
  $allowed = if ($req) { User-Menus $u } else { @($MenuKeys) + $AlwaysKeys }
  # 처음 열 페이지: 고른 메뉴 중 첫째(없으면 시작 안내)
  $first = ''; foreach ($m in $Menus) { if (-not $m.always -and $allowed -contains $m.key) { $first = $m.pages[0]; break } }
  if (-not $first) { foreach ($m in $Menus) { if ($allowed -contains $m.key) { $first = $m.pages[0]; break } } }
  $ns = Need-Sync; $hs = $null; if ($ns) { try { $hs = [IO.File]::ReadAllText($SyncStat, $Utf8) | ConvertFrom-Json } catch {} }
  return [ordered]@{ required = $req
    needSync = $ns; syncMsg = $(if ($hs) { [string]$hs.message } else { '' }); syncBusy = $(if ($hs) { [bool]$hs.busy } else { $false })
    user =$(if ($u) { [ordered]@{ id = $u.id; name = $u.name; admin = [bool]$u.admin; menus = @($allowed) } } else { $null })
    menus = @($Menus | ForEach-Object { [ordered]@{ key = $_.key; label = $_.label; page = $_.pages[0]; pages = $_.pages; admin = [bool]$_.admin } })
    allowed = @($allowed); first = $(if ($first) { $first } else { 'Account.html' }) }
}
function Write-Login($a) {
  $s = Read-Setup
  if ($a) { $s | Add-Member -NotePropertyName login -NotePropertyValue ([ordered]@{ id = $a.id; pwAt = $a.pwAt; at = (Now) }) -Force; $s | Add-Member -NotePropertyName user -NotePropertyValue ([string]$a.name) -Force }
  else { $s.PSObject.Properties.Remove('login') }
  if (-not (Test-Path $SetupDir)) { New-Item -ItemType Directory -Path $SetupDir | Out-Null }
  [IO.File]::WriteAllText($SetupFile, ($s | ConvertTo-Json -Depth 5), $Utf8)
}
# menus는 늘 배열로: $( )로 감싸면 메뉴가 1개일 때 배열이 풀려 글자로 나간다(화면 a.menus.map 오류)
function Public-Account($a) { [ordered]@{ id = $a.id; name = $a.name; admin = [bool]$a.admin; menus = @(if ($a.admin) { User-Menus $a } else { Pick-Menus $a }); active = ($a.active -ne $false); createdAt = $a.createdAt; updatedAt = $a.updatedAt; pwAt = $a.pwAt } }
function Find-Claude {
  # Claude 데스크톱 앱: 맥 /Applications/Claude.app, 윈도우 Microsoft Store(MSIX) 또는 일반 설치
  if ($script:ClaudeApp) { return $script:ClaudeApp }
  if ($IsMac) {
    if (Test-Path '/Applications/Claude.app') { $script:ClaudeApp = '/Applications/Claude.app' }
    return $script:ClaudeApp
  }
  try {
    $p = Get-AppxPackage -Name 'Claude' -ErrorAction Stop | Select-Object -First 1
    if ($p) { $script:ClaudeApp = "shell:AppsFolder\$($p.PackageFamilyName)!Claude"; return $script:ClaudeApp }
  } catch {}
  $exe = P $env:LOCALAPPDATA 'AnthropicClaude' 'claude.exe'
  if (Test-Path $exe) { $script:ClaudeApp = $exe }
  return $script:ClaudeApp
}
# git: PATH에 없으면 기본 설치 위치(서버가 뜬 뒤 설치한 경우)
function Find-Git {
  if ($IsMac) { return [bool](& /usr/bin/xcode-select -p 2>$null) -or [bool](Get-Command brew -ErrorAction SilentlyContinue) }
  if (Get-Command git -ErrorAction SilentlyContinue) { return $true }
  foreach ($d in "$env:ProgramFiles\Git\cmd", "$env:LOCALAPPDATA\Programs\Git\cmd") { if (Test-Path (Join-Path $d 'git.exe')) { return $true } }
  return $false
}
# Claude Code 실행 파일: PATH의 claude, 없으면 Claude 데스크톱 앱에 들어 있는 것(앱의 Code 탭이 쓰는 그것)
#  %LOCALAPPDATA%\Claude-Data\claude_*\claude-code\{버전}\{해시}\claude.exe 중 가장 최근 것
function Find-ClaudeCode {
  # 시작 안내 7단계에서 직접 넣은 경로(where claude 결과)가 먼저
  $set = [string](Read-Setup).claudePath
  if ($set -and (Test-Path -LiteralPath $set -PathType Leaf)) { return $set }
  $g = Get-Command claude -ErrorAction SilentlyContinue | Select-Object -First 1
  if ($g) { return $g.Source }
  $d = Join-Path $env:LOCALAPPDATA 'Claude-Data'
  if (Test-Path $d) {
    $f = Get-ChildItem $d -Recurse -Filter claude.exe -ErrorAction SilentlyContinue | Where-Object { $_.FullName -match '\\claude-code\\' } | Sort-Object LastWriteTime -Descending | Select-Object -First 1
    if ($f) { return $f.FullName }
  }
  return $null
}
# 요청 감시 하트비트(감시 스크립트가 20초마다 씀)가 몇 초 전인지. 없으면 $null
function Watch-Age {
  if (-not (Test-Path $HeartFile)) { return $null }
  try { return ((Get-Date) - [datetime](([IO.File]::ReadAllText($HeartFile, $Utf8) | ConvertFrom-Json).at)).TotalSeconds } catch { return $null }
}
# 백그라운드 에이전트(workbench/agent.ps1 · agent.pl): 창 없이 요청을 감시하고 Claude Code CLI(-p)로 처리한다
#  상태 파일 workbench/.agent.json {at, host, pid, status, msg}을 15초~1분마다 쓴다. 150초 안에 썼고 중지 상태가 아니면 동작 중
function Agent-Info {
  $o = $null; if (Test-Path $AgentFile) { try { $o = [IO.File]::ReadAllText($AgentFile, $Utf8) | ConvertFrom-Json } catch {} }
  $stopping = Test-Path $AgentStop
  if (-not $o) { return [ordered]@{ alive = $false; stopping = $stopping; sec = $null; status = ''; msg = ''; host = '' } }
  $sec = $null; try { $sec = [int]((Get-Date) - [datetime]$o.at).TotalSeconds } catch {}
  $alive = ($null -ne $sec -and $sec -lt 150 -and [string]$o.status -ne 'stopped')
  if ($alive -and -not $IsMac -and $o.pid -and -not (Get-Process -Id ([int]$o.pid) -ErrorAction SilentlyContinue)) { $alive = $false }
  return [ordered]@{ alive = $alive; stopping = ($stopping -and $alive); sec = $sec; status = [string]$o.status; msg = [string]$o.msg; host = [string]$o.host }
}
function Start-Agent {
  $cc = Find-ClaudeCode
  if (-not $cc) { throw 'Claude Code를 찾지 못했습니다. Claude 데스크톱 앱(Code 탭)을 한 번 열거나 Claude Code를 설치해 주세요.' }
  if ((Agent-Info).alive) { throw '이미 백그라운드 감시 중입니다.' }
  if (Test-Path $AgentStop) { Remove-Item $AgentStop -Force -ErrorAction SilentlyContinue }
  if ($IsMac) { & /bin/sh -c ("nohup perl '" + (P $Root 'workbench' 'agent.pl') + "' '" + $cc + "' >/dev/null 2>&1 &") }
  else { Start-Process 'powershell' -WindowStyle Hidden -WorkingDirectory $Root -ArgumentList ('-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File "' + (P $Root 'workbench' 'agent.ps1') + '" -Claude "' + $cc + '"') }
}
# 중지: 지금 처리 중인 요청은 마치고 끝난다
function Stop-Agent { [IO.File]::WriteAllText($AgentStop, (Get-Date).ToString('o'), $Utf8) }
# 처음 한 번(또는 직접 작업할 때): Claude Code CLI 창을 이 폴더에서 연다. Figma MCP가 없으면 먼저 등록해 둔다(인증은 창에서 /mcp)
function Open-ClaudeCli {
  $cc = Find-ClaudeCode
  if (-not $cc) { throw 'Claude Code를 찾지 못했습니다. Claude 데스크톱 앱(Code 탭)을 한 번 열거나 Claude Code를 설치해 주세요.' }
  # claude.ai 계정의 Figma 커넥터가 있으면 그걸 쓴다(로그인 뒤 자동). 없을 때만 Figma MCP를 직접 등록
  try { $list = (& $cc mcp list 2>&1 | Out-String); if ($list -notmatch '(?mi)^(claude\.ai )?figma') { & $cc mcp add --transport http --scope user figma https://mcp.figma.com/mcp 2>&1 | Out-Null } } catch {}
  if ($IsMac) { & osascript -e ('tell application "Terminal" to do script "cd ' + "'" + $Root + "' && '" + $cc + "'" + '"') -e 'tell application "Terminal" to activate' }
  else { Start-Process 'powershell' -WorkingDirectory $Root -ArgumentList ('-NoExit -Command & ''' + $cc + '''') }
}
# Figma AI Run으로 켤 때마다: 백그라운드 감시가 없으면 숨김으로 시작한다
#  시작 안내 7단계의 「실행할 때 자동으로 시작」을 끄면(setup.autoWatch = false) 하지 않는다. 대화형 Claude 창이 이미 감시 중이면(하트비트 60초 이내) 겹치지 않게 시작하지 않는다
#  처음(켤 때)이 아닌 2분마다 확인에서는 사용자가 중지한 것(status stopped · 중지 중)은 다시 띄우지 않는다
function Auto-Watch([bool]$first = $true) {
  $s = Read-Setup
  if (-not $s.done -or $s.autoWatch -eq $false) { return }
  $a = Agent-Info
  if ($a.alive) { return }
  if (-not $first -and ($a.status -eq 'stopped' -or $a.stopping)) { return }
  if (-not (Find-ClaudeCode)) { return }
  $age = Watch-Age
  if ($null -ne $age -and $age -lt 60) { return }
  try { Start-Agent; Write-Host '  요청 감시를 백그라운드로 시작했습니다(창 없음). 상태는 시작 안내 7단계에서 봅니다.' -ForegroundColor Green }
  catch { Write-Host "  백그라운드 감시 시작 못 함: $($_.Exception.Message)" -ForegroundColor Yellow }
}
function Get-SetupEnv {
  $hb = $null
  $hs = $null; if (Test-Path $SyncStat) { try { $hs = [IO.File]::ReadAllText($SyncStat, $Utf8) | ConvertFrom-Json } catch {} }
  if (Test-Path $HeartFile) { try { $hb = [IO.File]::ReadAllText($HeartFile, $Utf8) | ConvertFrom-Json } catch {} }
  $ago = { param($t) if ($t) { [int]((Get-Date) - [datetime]$t).TotalSeconds } else { $null } }
  return [ordered]@{
    root = $Root
    manifest = (P $Root 'figma_plugin' 'manifest.json')
    os = $(if ($IsMac) { 'mac' } else { 'windows' })
    computer = [Environment]::MachineName
    figmaInstalled = (Test-Path $FigmaExe)
    claudeInstalled = [bool](Find-Claude)
    claudeCli = [bool](Find-ClaudeCode)
    # 7단계에 보이는 진단: 찾은 경로 · 찾아본 PATH · 직접 넣은 경로
    claudePath = [string](Find-ClaudeCode); claudeLook = [string]$env:PATH; claudeSet = [string](Read-Setup).claudePath
    pluginSeenSec = (& $ago $script:PluginSeen)
    watcherSec = $(if ($hb) { & $ago $hb.at } else { $null })
    watcherHost = $(if ($hb) { [string]$hb.host } else { '' })
    agent = (Agent-Info)
    gitInstalled = (Find-Git)
    winget = $(if ($IsMac) { $false } else { [bool](Get-Command winget -ErrorAction SilentlyContinue) })
    historySync = $hs
    historySyncing = (Test-Syncing $hs)
  }
}

function Send($c, [int]$code, [string]$type, [byte[]]$bytes) {
  $c.Response.StatusCode = $code
  $c.Response.ContentType = $type
  $c.Response.Headers.Add('Access-Control-Allow-Origin', '*')
  $c.Response.Headers.Add('Access-Control-Allow-Headers', 'Content-Type')
  $c.Response.Headers.Add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  $c.Response.Headers.Add('Cache-Control', 'no-store')
  if ($bytes) { $c.Response.OutputStream.Write($bytes, 0, $bytes.Length) }
  $c.Response.Close()
}
function SendJson($c, [int]$code, $obj) { Send $c $code 'application/json; charset=utf-8' $Utf8.GetBytes(($obj | ConvertTo-Json -Depth 10)) }

$types = @{ '.html'='text/html; charset=utf-8'; '.png'='image/png'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg'; '.gif'='image/gif'; '.webp'='image/webp';'.css'='text/css'; '.js'='application/javascript'; '.json'='application/json; charset=utf-8'; '.md'='text/plain; charset=utf-8' }
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$Port/")
try { $l.Start() } catch {
  Write-Host "  포트 $Port 를 이미 다른 프로그램(다른 서버 창)이 쓰고 있습니다. 열려 있는 서버 창을 닫고 다시 실행하세요." -ForegroundColor Red
  exit 1
}
Write-Host ''
Write-Host '  UX AI TEST Workbench 서버가 실행 중입니다.  (Workbench 탭을 모두 닫거나 이 창을 닫으면 멈춥니다)' -ForegroundColor Green
Write-Host ''
Write-Host "  시작 안내    http://localhost:$Port/Setup.html"
Write-Host "  가이드       http://localhost:$Port/"
Write-Host "  Workbench    http://localhost:$Port/Figma_Workbench.html"
Write-Host ''
Write-Host '  처음 쓰는 PC라면 브라우저에 뜬 「시작 안내」를 순서대로 따라 하세요.'
Write-Host '    1. 작업자 이름   2. Figma 앱 실행   3. 작업할 Figma 링크 붙여넣기'
Write-Host '    4. Figma 플러그인 등록   5. Claude 앱 실행 · 폴더 열기'
Write-Host '    6. Claude에 Figma 연결   7. 요청 감시 시작'
Write-Host ''
Write-Host '  종료: 브라우저의 Workbench 탭을 모두 닫으면 저절로 꺼집니다. Ctrl+C 또는 창 닫기' -ForegroundColor DarkGray
Write-Host ''

# ── 브라우저 탭: 열린 탭이 모두 닫히면(마지막 닫힘 후 3초) 묻지 않고 서버를 끈다. 새로고침 · 메뉴 이동은 그 사이 다시 연결된다 ──
$Pages = @{}; $AnyPage = $false; $EmptySince = $null
function Stop-Server($why) { Write-Host "`n  $why" -ForegroundColor Yellow; try { $l.Stop() } catch {}; if ($LogFile) { try { Stop-Transcript | Out-Null } catch {} }; exit 0 }
function Idle-Check {
  # 20초마다 알리던 탭이 150초 동안 소식이 없으면(브라우저 강제 종료 등) 닫힌 것으로 본다
  foreach ($k in @($Pages.Keys)) { if (((Get-Date) - $Pages[$k]).TotalSeconds -gt 150) { $Pages.Remove($k) } }
  if ($Pages.Count -or -not $script:AnyPage) { $script:EmptySince = $null; return }
  if (-not $script:EmptySince) { $script:EmptySince = Get-Date }
  if (((Get-Date) - $script:EmptySince).TotalSeconds -lt 3) { return }
  Stop-Server 'Workbench 탭을 모두 닫아 서버를 껐습니다.'
}

Hist-Backfill
Fix-EditablePages
$AutoWatchAt = (Get-Date).AddSeconds(5)   # 켠 지 5초 뒤: 백그라운드 감시가 꺼져 있으면 시작. 그 뒤 2분마다 확인해 죽었으면 다시 시작(사용자가 중지한 것은 제외)
$AutoWatchFirst = $true
$ar = $null
while ($l.IsListening) {
  # 1초마다 깨어나 탭 상태 · 이력 동기화를 본다
  Sync-Tick
  if ((Get-Date) -ge $AutoWatchAt) { Auto-Watch $AutoWatchFirst; $AutoWatchFirst = $false; $AutoWatchAt = (Get-Date).AddSeconds(120) }
  if (-not $ar) { $ar = $l.BeginGetContext($null, $null) }
  if (-not $ar.AsyncWaitHandle.WaitOne(1000)) { Idle-Check; continue }
  $c = $l.EndGetContext($ar); $ar = $null
  try {
    $req = $c.Request
    $path = [Uri]::UnescapeDataString($req.Url.AbsolutePath)
    if ($req.HttpMethod -eq 'OPTIONS') { Send $c 204 'text/plain' $null; continue }
    # Figma 플러그인(iframe)은 Origin이 'null'로 온다 → 플러그인 연결 확인용
    if ($req.Headers['Origin'] -eq 'null' -and $path -like '/api/*') { $PluginSeen = Get-Date }
    # 쓰기(POST)는 이 서버에서 연 페이지 · Figma 플러그인(Origin null) · Origin 없는 호출(Claude · curl)만 받는다
    #  다른 웹사이트가 작업자 브라우저로 몰래 요청 · 작업(글 수정 등)을 넣지 못하게
    if ($req.HttpMethod -eq 'POST' -and $path -like '/api/*') {
      $o = [string]$req.Headers['Origin']
      if ($o -and $o -ne 'null' -and $o -ne "http://localhost:$Port") { SendJson $c 403 @{ error = '허용되지 않은 요청입니다(다른 사이트).' }; continue }
    }

    # ── 로그인 · 메뉴 권한 ──
    #  계정 파일은 어디에도 내보내지 않는다(해시라도)
    if ($path -like '/.history/accounts*') { Send $c 404 'text/plain' $Utf8.GetBytes('not found'); continue }
    if ($path -eq '/api/me' -and $req.HttpMethod -eq 'GET') { SendJson $c 200 (Me-Info); continue }
    if ($path -eq '/api/login' -and $req.HttpMethod -eq 'POST') {
      $body = (New-Object IO.StreamReader($req.InputStream, $Utf8)).ReadToEnd() | ConvertFrom-Json
      $a = Read-Account ([string]$body.id)
      if (-not $a -or $a.active -eq $false -or -not (Test-Pw $a ([string]$body.pw))) { Start-Sleep -Milliseconds 600; throw '아이디 또는 비밀번호가 맞지 않습니다.' }
      Write-Login $a; SendJson $c 200 (Me-Info); continue
    }
    if ($path -eq '/api/logout' -and $req.HttpMethod -eq 'POST') { Write-Login $null; SendJson $c 200 @{ ok = $true }; continue }
    #  브라우저 페이지(Sec-Fetch-Site 머리글이 있고 Figma 플러그인이 아닌 것)만 막는다. Claude(curl) · 플러그인은 그대로
    $isBrowser = [bool]$req.Headers['Sec-Fetch-Site'] -and [string]$req.Headers['Origin'] -ne 'null'
    if ($path -eq '/start' -and (Auth-Required)) {
      $mi = Me-Info; $to = '/Login.html'
      if ($mi.user) { $to = '/' + $mi.first; if (-not (Read-Setup).done -and $mi.allowed -contains 'setup') { $to = '/Setup.html' } }
      $c.Response.Redirect($to); $c.Response.Close(); continue
    }
    if (($isBrowser -or $path -like '/api/accounts*' -or $path -eq '/api/me/password') -and (Auth-Required)) {
      $rel0 = $path.TrimStart('/'); if ($rel0 -eq '') { $rel0 = 'Common_UX_Guide.html' }
      # 계정 정보를 아직 못 받은 새 PC: 로그인 화면의 [깃허브 연결](/api/setup/launch)은 로그인 없이 된다
      $open = ($rel0 -in 'Login.html', 'appnav.css', 'appnav.js', 'VERSION') -or ($path -in '/api/alive', '/api/bye') -or ($path -eq '/api/setup/launch' -and (Need-Sync)) -or ($rel0 -match '\.(css|js|png|jpe?g|svg|ico|woff2?)$' -and $rel0 -notlike 'prototypes/*')
      if (-not $open) {
        $u = Current-User
        if (-not $u) {
          if ($path -like '/api/*') { SendJson $c 401 @{ error = '로그인이 필요합니다.'; login = $true }; continue }
          $c.Response.Redirect('/Login.html?next=' + [Uri]::EscapeDataString($req.Url.PathAndQuery)); $c.Response.Close(); continue
        }
        $allowed = @(User-Menus $u); $need = $null
        foreach ($m in $Menus) { if ($m.pages -contains $rel0 -or ($m.key -eq 'proto' -and $rel0 -like 'prototypes/*')) { $need = $m.key; break } }
        $api = @{ '/api/usage' = 'usage'; '/api/prototypes' = 'proto'; '/api/accounts' = 'accounts' }
        if ($api.ContainsKey($path)) { $need = $api[$path] }
        if ($need -and $allowed -notcontains $need) {
          if ($path -like '/api/*') { SendJson $c 403 @{ error = '이 메뉴를 쓸 권한이 없습니다.' }; continue }
          $c.Response.Redirect('/' + (Me-Info).first); $c.Response.Close(); continue
        }
      }
    }
    # 내 비밀번호 바꾸기 {current, next}
    if ($path -eq '/api/me/password' -and $req.HttpMethod -eq 'POST') {
      $u = Current-User; if (-not $u) { SendJson $c 401 @{ error = '로그인이 필요합니다.'; login = $true }; continue }
      $body = (New-Object IO.StreamReader($req.InputStream, $Utf8)).ReadToEnd() | ConvertFrom-Json
      if (-not (Test-Pw $u ([string]$body.current))) { Start-Sleep -Milliseconds 600; throw '지금 비밀번호가 맞지 않습니다.' }
      $nw = [string]$body.next
      if ($nw.Length -lt 8) { throw '새 비밀번호는 8자 이상이어야 합니다.' }
      if ($nw -eq [string]$body.current) { throw '지금과 다른 비밀번호를 입력해 주세요.' }
      Set-Pw $u $nw; Save-Account $u; Write-Login $u
      SendJson $c 200 @{ ok = $true }; continue
    }
    # 계정 관리(최고관리자만, 위에서 권한 확인): 목록 · 추가 · 수정 · 비밀번호 초기화 · 지우기
    if ($path -eq '/api/accounts') {
      if ($req.HttpMethod -eq 'GET') {
        # ($l은 서버 HttpListener라 쓰면 안 된다)
        $acctList = @(Read-Accounts | Sort-Object @{ e = { -not $_.admin } }, @{ e = { [string]$_.id } } | ForEach-Object { Public-Account $_ })
        SendJson $c 200 @{ items = $acctList; menus = @($Menus | Where-Object { $MenuKeys -contains $_.key } | ForEach-Object { [ordered]@{ key = $_.key; label = $_.label } }) }; continue
      }
      $body = (New-Object IO.StreamReader($req.InputStream, $Utf8)).ReadToEnd() | ConvertFrom-Json
      $id = ([string]$body.id).Trim().ToLower()
      $pickMenus = @(@($body.menus) | Where-Object { $MenuKeys -contains $_ })   # ($Menus와 이름이 같으면 PowerShell은 대소문자를 가리지 않아 전역 메뉴 목록을 덮어쓴다)
      switch ([string]$body.action) {
        'add' {
          if ($id -notmatch '^[a-z0-9._-]{3,32}$') { throw '아이디는 영문 소문자 · 숫자 · . _ - 로 3~32자입니다.' }
          if (Read-Account $id) { throw "이미 있는 아이디입니다: $id" }
          if (-not ([string]$body.name).Trim()) { throw '이름을 입력해 주세요.' }
          if (([string]$body.pw).Length -lt 8) { throw '비밀번호는 8자 이상이어야 합니다.' }
          $a = [pscustomobject]@{ id = $id; name = ([string]$body.name).Trim(); admin = $false; menus = $pickMenus; active = $true; createdAt = (Now); createdBy = (Current-User).id }
          Set-Pw $a ([string]$body.pw); Save-Account $a
        }
        'update' {
          $a = Read-Account $id; if (-not $a) { throw "계정을 찾지 못했습니다: $id" }
          if (([string]$body.name).Trim()) { $a.name = ([string]$body.name).Trim() }
          if (-not $a.admin) {
            if ($null -ne $body.menus) { $a.menus = $pickMenus }
            if ($null -ne $body.active) { $a | Add-Member -NotePropertyName active -NotePropertyValue ([bool]$body.active) -Force }
          }
          if (([string]$body.pw).Length) { if (([string]$body.pw).Length -lt 8) { throw '비밀번호는 8자 이상이어야 합니다.' }; Set-Pw $a ([string]$body.pw) }
          Save-Account $a
          # 최고관리자가 자기 비밀번호를 여기서 바꿨으면 이 PC 로그인도 새 값으로
          $me = Read-Setup; if ($me.login -and [string]$me.login.id -eq $id) { Write-Login $a }
        }
        'delete' {
          $a = Read-Account $id; if (-not $a) { throw "계정을 찾지 못했습니다: $id" }
          if ($a.admin) { throw '최고관리자 계정은 지울 수 없습니다.' }
          Remove-Item (P $AcctDir ($id + '.json')) -Force; $script:SyncWant = $true
        }
        default { throw "알 수 없는 작업: $($body.action)" }
      }
      SendJson $c 200 @{ ok = $true }; continue
    }

    # 브라우저 탭 열림 · 닫힘 (sendBeacon은 text/plain으로 온다)
    if ($path -in '/api/alive', '/api/bye' -and $req.HttpMethod -eq 'POST') {
      $id = ''; try { $id = [string]((New-Object IO.StreamReader($req.InputStream, $Utf8)).ReadToEnd() | ConvertFrom-Json).id } catch {}
      if ($id -match '^[A-Za-z0-9-]{6,64}$') {
        if ($path -eq '/api/alive') { $Pages[$id] = Get-Date; $AnyPage = $true; $EmptySince = $null } else { $Pages.Remove($id) }
      }
      SendJson $c 200 @{ ok = $true; pages = $Pages.Count }; continue
    }
    # 서버 종료. 이 서버에서 연 페이지만 허용
    if ($path -eq '/api/shutdown' -and $req.HttpMethod -eq 'POST') {
      $origin = $req.Headers['Origin']
      if ($origin -and $origin -ne "http://localhost:$Port") { throw '허용되지 않은 요청입니다.' }
      SendJson $c 200 @{ ok = $true }; Stop-Server '종료 요청으로 서버를 껐습니다.'
    }

    # 첫 실행 안내
    if ($path -eq '/start') {
      $to = '/Common_UX_Guide.html'; if (-not (Read-Setup).done) { $to = '/Setup.html' }
      $c.Response.Redirect($to); $c.Response.Close(); continue
    }
    if ($path -eq '/api/setup' -and $req.HttpMethod -eq 'GET') {
      SendJson $c 200 ([ordered]@{ state = (Read-Setup); env = (Get-SetupEnv) }); continue
    }
    if ($path -like '/api/setup*' -and $req.HttpMethod -eq 'POST') {
      # 다른 웹사이트가 로컬 앱을 띄우지 못하게 이 서버에서 연 페이지만 허용
      $origin = $req.Headers['Origin']
      if ($origin -and $origin -ne "http://localhost:$Port") { throw '허용되지 않은 요청입니다.' }
      $body = (New-Object IO.StreamReader($req.InputStream, $Utf8)).ReadToEnd() | ConvertFrom-Json
      if ($path -eq '/api/setup') {
        $s = Read-Setup
        foreach ($k in 'done', 'user', 'figmaUrl', 'autoAt', 'autoWatch') { if ($null -ne $body.$k) { $s | Add-Member -NotePropertyName $k -NotePropertyValue $body.$k -Force } }
        if ($body.checks) { $s | Add-Member -NotePropertyName checks -NotePropertyValue $body.checks -Force }
        # Claude Code 경로 직접 지정(7단계): where claude 결과(여러 줄이면 첫 줄). 빈 값이면 자동으로 찾기
        if ($null -ne $body.claudePath) {
          $cp = (([string]$body.claudePath) -split "`r?`n" | Where-Object { $_.Trim() } | Select-Object -First 1); $cp = "$cp".Trim().Trim('"')   # 빈 값이면 Select 결과가 AutomationNull이라 [string]으로 바꿔도 null
          if ($cp -and -not (Test-Path -LiteralPath $cp -PathType Leaf)) { throw "그 경로에서 Claude Code를 찾지 못했습니다: $cp (where claude 결과를 그대로 붙여 넣으세요)" }
          $s | Add-Member -NotePropertyName claudePath -NotePropertyValue $cp -Force
        }
        $s | Add-Member -NotePropertyName updatedAt -NotePropertyValue (Get-Date).ToString('yyyy-MM-ddTHH:mm:sszzz') -Force
        if (-not (Test-Path $SetupDir)) { New-Item -ItemType Directory -Path $SetupDir | Out-Null }
        [IO.File]::WriteAllText($SetupFile, ($s | ConvertTo-Json -Depth 5), $Utf8)
        # 작업 링크의 파일을 프로젝트로 등록(처음이면 폴더 생성)
        $k = Key-Of $s.figmaUrl; if (Test-Key $k) { Ensure-Proj $k $s.figmaUrl | Out-Null }
        # 링크를 바꿨으면 프로젝트 작업 링크 · 수정 가능 페이지도 그 링크로
        if ($null -ne $body.figmaUrl -and (Test-Key $k)) {
          $p = Read-Proj $k; if ($p -and $p.link -ne $s.figmaUrl) { $p.link = [string]$s.figmaUrl; Save-Proj $p }
          Set-EditablePage $k $s.figmaUrl | Out-Null
        }
        SendJson $c 200 ([ordered]@{ state = $s; env = (Get-SetupEnv) }); continue
      }
      if ($path -eq '/api/setup/launch') {
        switch ([string]$body.app) {
          'figma' {
            if (-not (Test-Path $FigmaExe)) { throw 'Figma 데스크톱 앱이 설치되어 있지 않습니다.' }
            $u = [string]$body.url; $ok = $u -match '^https://(www\.)?figma\.com/'
            if ($IsMac) { if ($ok) { & open -a Figma $u } else { & open -a Figma } }
            elseif ($ok) { Start-Process $FigmaExe -ArgumentList ('"' + $u + '"') } else { Start-Process $FigmaExe }
          }
          'claude' {
            $app = Find-Claude
            if (-not $app) { throw 'Claude 데스크톱 앱이 설치되어 있지 않습니다.' }
            if ($IsMac) { & open -a Claude } else { Start-Process $app }
          }
          'folder' { if ($IsMac) { & open $Root } else { Start-Process explorer.exe -ArgumentList ('"' + $Root + '"') } }
          # 설치: 윈도우는 winget 창(사용자가 동의 · 진행을 본다), 맥은 개발자 도구 설치 창 또는 다운로드 페이지
          'install' {
            $ids = @{ git = 'Git.Git'; figma = 'Figma.Figma'; claude = 'Anthropic.Claude' }
            $dlPages = @{ git = 'https://git-scm.com/downloads'; figma = 'https://www.figma.com/downloads/'; claude = 'https://claude.ai/download' }
            $w = [string]$body.what; if (-not $ids.ContainsKey($w)) { throw "알 수 없는 설치: $w" }
            if ($IsMac) { if ($w -eq 'git') { & /usr/bin/xcode-select --install } else { & open $dlPages[$w] } }
            elseif (Get-Command winget -ErrorAction SilentlyContinue) { Start-Process 'winget' -ArgumentList ('install --id ' + $ids[$w] + ' -e') }
            else { Start-Process $dlPages[$w] }
          }
          # 깃허브 연결: git 설치(없으면) → 브라우저 로그인 → history 브랜치 연결을 한 창에서 (workbench/github_login.ps1 · .sh)
          #  그동안 반복 동기화는 쉰다(.history_sync.lock)
          'git-login' {
            if ($script:LoginProc -and -not $script:LoginProc.HasExited) { throw '깃허브 연결 창이 이미 열려 있습니다.' }
            $env:WB_USER = [string](Read-Setup).user
            if ($IsMac) { & osascript -e ('tell application "Terminal" to do script "bash ' + "'" + (P $Root 'workbench' 'github_login.sh') + "'" + '"') -e 'tell application "Terminal" to activate' }
            else { $script:LoginProc = Start-Process 'powershell' -ArgumentList ('-NoProfile -ExecutionPolicy Bypass -File "' + (P $Root 'workbench' 'github_login.ps1') + '"') -PassThru }
          }
          # Claude Code(터미널)를 이 폴더에서 띄우고 바로 요청 감시를 시작한다 (이 PC에 로그인된 Claude 계정)
          'claude-cli' { Open-ClaudeCli }
          'agent-start' { Start-Agent }
          'agent-stop' { Stop-Agent }
          default { throw "알 수 없는 앱: $($body.app)" }
        }
        SendJson $c 200 @{ ok = $true }; continue
      }
    }

    # 프레임 캡처 저장 {fileKey, nodeId, png(base64, PNG 또는 JPG), w, h, by, name} → projects/{fileKey}/shots
    if ($path -eq '/api/shots' -and $req.HttpMethod -eq 'POST') {
      $body = (New-Object IO.StreamReader($req.InputStream, $Utf8)).ReadToEnd() | ConvertFrom-Json
      $key = [string]$body.fileKey; if (-not $key) { $key = Work-Key }
      if (-not (Test-Key $key)) { throw '잘못된 파일 키입니다.' }
      $nid = [string]$body.nodeId
      if ($nid -notmatch '^\d+:\d+$') { throw "잘못된 nodeId: $nid" }
      $bytes = [Convert]::FromBase64String([string]$body.png)
      $ext = ''
      if ($bytes.Length -ge 8 -and $bytes[0] -eq 0x89 -and $bytes[1] -eq 0x50) { $ext = 'png' }
      elseif ($bytes.Length -ge 4 -and $bytes[0] -eq 0xFF -and $bytes[1] -eq 0xD8) { $ext = 'jpg' }
      if (-not $ext) { throw 'PNG · JPG 이미지가 아닙니다.' }
      Ensure-Proj $key '' | Out-Null
      $shotDir = P (Proj-Dir $key) 'shots'
      if (-not (Test-Path $shotDir)) { New-Item -ItemType Directory -Force $shotDir | Out-Null }
      $base = $nid.Replace(':', '-')
      foreach ($x in 'png', 'jpg') { $old = P $shotDir ($base + '.' + $x); if ($x -ne $ext -and (Test-Path $old)) { Remove-Item $old -Force } }
      [IO.File]::WriteAllBytes((P $shotDir ($base + '.' + $ext)), $bytes)
      $mf = P (Proj-Dir $key) 'shots_meta.json'
      $meta = [pscustomobject]@{}
      if (Test-Path $mf) { $meta = [IO.File]::ReadAllText($mf, $Utf8) | ConvertFrom-Json }
      $entry = [pscustomobject]@{ at = (Now); w = [int]$body.w; h = [int]$body.h; by = [string]$body.by; name = [string]$body.name; ext = $ext }
      $meta | Add-Member -NotePropertyName $nid -NotePropertyValue $entry -Force
      [IO.File]::WriteAllText($mf, ($meta | ConvertTo-Json -Depth 4), $Utf8)
      SendJson $c 200 @{ ok = $true; fileKey = $key; nodeId = $nid; bytes = $bytes.Length; ext = $ext }
      continue
    }

    # 프로젝트 목록
    if ($path -eq '/api/projects' -and $req.HttpMethod -eq 'GET') {
      $list = @()
      if (Test-Path $ProjRoot) {
        foreach ($d in Get-ChildItem $ProjRoot -Directory) {
          $p = Read-Proj $d.Name; if (-not $p) { continue }
          $shots = 0; $sd = P $d.FullName 'shots'; if (Test-Path $sd) { $shots = @(Get-ChildItem $sd -File).Count }
          $list += [pscustomobject]@{ key = $p.key; name = $p.name; link = $p.link; editablePageId = $p.editablePageId; editablePageName = $p.editablePageName; uxGuideLink = $p.uxGuideLink; hasCatalog = (Test-Path (P $d.FullName 'catalog.json')); shots = $shots; isDefault = ($p.key -eq (Work-Key)) }
        }
      }
      # defaultKey: 예전 이름 그대로(Figma AI Run 실행 파일이 이 글자로 지금 서버인지 확인한다). 값은 시작 안내 작업 링크의 파일(없으면 빈 값)
      SendJson $c 200 @{ defaultKey = (Work-Key); workKey = (Work-Key); projects = @($list) }; continue
    }
    # 프로토타입 목록(이 PC에만): prototypes/{id}/meta.json + Figma가 바뀐 화면(stale)
    #  바뀐 화면 = 프로토타입을 맞춘 뒤(syncedAt) 캡처가 새로 들어온 프레임(shots_meta) · 다른 작업자가 완료한 요청(공유 이력)의 프레임
    if ($path -eq '/api/prototypes' -and $req.HttpMethod -eq 'GET') {
      $list = @()
      if (Test-Path $ProtoRoot) {
        $hist = @(); if (Test-Path $HistEntries) { foreach ($f in Get-ChildItem $HistEntries -Filter *.json) { try { $e = [IO.File]::ReadAllText($f.FullName, $Utf8) | ConvertFrom-Json; if ($e.kind -eq 'request' -and $e.status -eq '완료') { $hist += $e } } catch {} } }
        $shotMeta = @{}
        foreach ($d in Get-ChildItem $ProtoRoot -Directory | Where-Object { $_.Name -notlike '_*' }) {
          $mf = P $d.FullName 'meta.json'; if (-not (Test-Path $mf)) { continue }
          try { $m = [IO.File]::ReadAllText($mf, $Utf8) | ConvertFrom-Json } catch { continue }
          $k = [string]$m.fileKey
          if ($k -and -not $shotMeta.ContainsKey($k)) { $sm = $null; $sf = P (Proj-Dir $k) 'shots_meta.json'; if (Test-Path $sf) { try { $sm = [IO.File]::ReadAllText($sf, $Utf8) | ConvertFrom-Json } catch {} }; $shotMeta[$k] = $sm }
          $since = [datetime]::MinValue; if ($m.syncedAt) { try { $since = [datetime]$m.syncedAt } catch {} }
          $stale = @()
          foreach ($fr in @($m.frames)) {
            $why = ''; $at = ''
            $s = if ($shotMeta[$k]) { $shotMeta[$k].($fr.nodeId) } else { $null }
            if ($s -and $s.at) { try { if ([datetime]$s.at -gt $since) { $why = 'Figma 캡처가 새로 들어옴'; $at = [string]$s.at } } catch {} }
            $h = $hist | Where-Object { $_.nodeId -eq $fr.nodeId -and [string]$_.fileKey -eq $k } | Where-Object { try { [datetime]$_.at -gt $since } catch { $false } } | Select-Object -First 1
            if ($h) { $why = "$($h.by) $($h.reqId) 수정 완료"; $at = [string]$h.at }
            if ($why) { $stale += [pscustomobject]@{ nodeId = $fr.nodeId; name = $fr.name; why = $why; at = $at } }
          }
          $m | Add-Member -NotePropertyName stale -NotePropertyValue @($stale) -Force
          $m | Add-Member -NotePropertyName dir -NotePropertyValue ('prototypes/' + $d.Name) -Force
          $list += $m
        }
      }
      SendJson $c 200 @{ items = @($list | Sort-Object { [string]$_.updatedAt } -Descending) }; continue
    }
    # 프로토타입 지우기: 바로 지우지 않고 prototypes/_trash/ 로 옮긴다
    if ($path -eq '/api/prototypes' -and $req.HttpMethod -eq 'POST') {
      $body = (New-Object IO.StreamReader($req.InputStream, $Utf8)).ReadToEnd() | ConvertFrom-Json
      if ($body.action -ne 'delete') { throw '알 수 없는 작업입니다.' }
      $id = [string]$body.id; if ($id -notmatch '^[A-Za-z0-9_-]{1,64}$' -or -not (Test-Path (P $ProtoRoot $id))) { throw "프로토타입을 찾지 못했습니다: $id" }
      $tr = P $ProtoRoot '_trash'; if (-not (Test-Path $tr)) { New-Item -ItemType Directory -Force $tr | Out-Null }
      Move-Item (P $ProtoRoot $id) (P $tr ($id + '_' + (Get-Date).ToString('yyyyMMdd-HHmmss')))
      SendJson $c 200 @{ ok = $true }; continue
    }
    # 프로젝트 추가(링크) · 작업 페이지 바꾸기(Workbench 탭 · 「이 페이지를 작업 페이지로」)
    #  {action:'add', link} → 그 파일을 프로젝트로 등록(이미 있으면 그대로)
    #  {action:'editable', key, pageId} → 작업 링크의 node-id를 그 페이지로 바꾼다 = 수정 가능 페이지가 바뀐다
    if ($path -eq '/api/projects' -and $req.HttpMethod -eq 'POST') {
      $origin = $req.Headers['Origin']
      if ($origin -and $origin -ne "http://localhost:$Port") { throw '허용되지 않은 요청입니다.' }
      $body = (New-Object IO.StreamReader($req.InputStream, $Utf8)).ReadToEnd() | ConvertFrom-Json
      if ($body.action -eq 'add') {
        $k = Key-Of $body.link; if (-not (Test-Key $k)) { throw 'Figma 파일 링크가 아닙니다.' }
        $p = Ensure-Proj $k ([string]$body.link)
        if ($p.link) { Set-EditablePage $k $p.link | Out-Null }
        SendJson $c 200 @{ ok = $true; project = (Read-Proj $k) }; continue
      }
      if ($body.action -eq 'editable') {
        $k = [string]$body.key; $pgId = [string]$body.pageId
        if (-not (Test-Key $k)) { throw '잘못된 파일 키입니다.' }
        if ($pgId -notmatch '^\d+:\d+$') { throw '잘못된 페이지 id입니다.' }
        $p = Ensure-Proj $k ''
        $nid = $pgId.Replace(':', '-'); $old = [string]$p.link
        if ($old -match 'figma\.com/(?:design|file|proto)/') {
          if ($old -match '[?&]node-id=[^&#]*') { $new = [regex]::Replace($old, '([?&]node-id=)[^&#]*', '${1}' + $nid) }
          elseif ($old -match '\?') { $new = $old -replace '#.*$', ''; $new += '&node-id=' + $nid }
          else { $new = ($old -replace '#.*$', '') + '?node-id=' + $nid }
        } else { $new = "https://www.figma.com/design/$k/file?node-id=$nid" }
        # 페이지를 먼저 확인 · 반영하고 성공했을 때만 링크를 저장한다(실패하면 링크 · 수정 가능 페이지 모두 그대로)
        if (-not (Set-EditablePage $k $new)) { throw '프레임 목록에서 그 페이지를 찾지 못했습니다.' }
        $p = Read-Proj $k; $p.link = $new; Save-Proj $p
        # 시작 안내의 작업 링크가 이 파일이면 그것도 같이 바꾼다(플러그인 · Workbench 기본 프로젝트가 그 링크를 본다)
        $s = Read-Setup
        if ((Key-Of $s.figmaUrl) -eq $k) {
          $s | Add-Member -NotePropertyName figmaUrl -NotePropertyValue $new -Force
          $s | Add-Member -NotePropertyName updatedAt -NotePropertyValue (Now) -Force
          if (-not (Test-Path $SetupDir)) { New-Item -ItemType Directory -Path $SetupDir | Out-Null }
          [IO.File]::WriteAllText($SetupFile, ($s | ConvertTo-Json -Depth 5), $Utf8)
        }
        SendJson $c 200 @{ ok = $true; project = (Read-Proj $k) }; continue
      }
      throw '알 수 없는 작업입니다.'
    }

    # 프로젝트 프레임 목록 (Figma 플러그인 또는 Claude가 보냄) → projects/{fileKey}/catalog.json
    if ($path -eq '/api/catalog') {
      if ($req.HttpMethod -eq 'GET') {
        $key = [string]$req.QueryString['key']
        if (-not (Test-Key $key)) { throw '잘못된 파일 키입니다.' }
        $cf = P (Proj-Dir $key) 'catalog.json'
        if (-not (Test-Path $cf)) { SendJson $c 404 @{ error = '이 파일의 프레임 목록이 아직 없습니다.' }; continue }
        Send $c 200 'application/json; charset=utf-8' ([IO.File]::ReadAllBytes($cf)); continue
      }
      if ($req.HttpMethod -eq 'POST') {
        $raw = (New-Object IO.StreamReader($req.InputStream, $Utf8)).ReadToEnd().Trim()
        $body = $raw | ConvertFrom-Json
        $key = [string]$body.fileKey
        if (-not (Test-Key $key)) { throw '잘못된 파일 키입니다.' }
        if (-not $raw.StartsWith('{') -or -not $body.pages) { throw '프레임 목록 형식이 아닙니다.' }
        $p = Ensure-Proj $key ''
        # 배열 모양이 바뀌지 않게 받은 JSON을 그대로 두고 저장 시각만 앞에 붙인다
        $out = '{"savedAt":"' + (Now) + '",' + $raw.Substring(1)
        [IO.File]::WriteAllText((P (Proj-Dir $key) 'catalog.json'), $out, $Utf8)
        # 프로젝트 이름 · 수정 가능 페이지를 목록에서 갱신
        if ($body.fileName) { $p.name = [string]$body.fileName }
        Save-Proj $p
        # 수정 가능 페이지는 작업 링크로 정한다. 보내온 값(플러그인 · 프레임 목록 작업이 기억한 옛 링크일 수 있다)은
        #  링크에 노드가 없거나 목록에서 그 노드를 못 찾을 때만 쓴다
        if (-not (Set-EditablePage $key $p.link) -and $body.editablePageId) {
          $p.editablePageId = [string]$body.editablePageId
          $ep = @($body.pages) | Where-Object { $_.id -eq $body.editablePageId } | Select-Object -First 1
          if ($ep) { $p.editablePageName = [string]$ep.name }
          Save-Proj $p
        }
        SendJson $c 200 @{ ok = $true; fileKey = $key }; continue
      }
    }

    # 작업 대기열: 캡처 받기(capture) · 프레임 목록 만들기(catalog). 플러그인 또는 Claude가 처리한다
    if ($path -eq '/api/jobs') {
      if ($req.HttpMethod -eq 'GET') {
        $j = Read-Jobs; $items = @($j.items)
        # QueryString은 한글(예: status=대기)을 UTF-8로 풀지 않아 늘 어긋난다 → 주소를 직접 UTF-8로 푼다
        $qs = @{}; foreach ($kv in ([string]$req.Url.Query).TrimStart('?').Split('&')) { if ($kv -match '^([^=]+)=(.*)$') { $qs[$Matches[1]] = [Uri]::UnescapeDataString($Matches[2].Replace('+', ' ')) } }
        foreach ($f in 'key', 'kind', 'status') { $v = [string]$qs[$f]; if ($v) { $prop = $f; if ($f -eq 'key') { $prop = 'fileKey' }; $items = @($items | Where-Object { $_.$prop -eq $v }) } }
        SendJson $c 200 @{ version = $j.version; items = @($items) }; continue
      }
      if ($req.HttpMethod -eq 'POST') {
        $body = (New-Object IO.StreamReader($req.InputStream, $Utf8)).ReadToEnd() | ConvertFrom-Json
        $j = Read-Jobs; $items = @($j.items | Where-Object { $_ }); $now = Now; $hit = $null
        switch ([string]$body.action) {
          'add' {
            $kind = [string]$body.kind; $key = [string]$body.fileKey; $nid = [string]$body.nodeId
            if ($kind -notin 'capture', 'catalog', 'guide', 'guide-check', 'guide-edit', 'text', 'prototype', 'prototype-edit', 'prototype-sync') { throw "알 수 없는 작업: $kind" }
            # 프로토타입(이 PC에만, prototypes/{id}/): 만들기(prototype, 고른 화면 frames) · 수정 요청(prototype-edit) · Figma 바뀐 화면 맞추기(prototype-sync)
            if ($kind -eq 'prototype') {
              $nid = ''
              if (-not ([string]$body.name).Trim()) { throw '프로토타입 이름을 입력해 주세요.' }
              if (@($body.frames | Where-Object { [string]$_.nodeId -match '^\d+:\d+$' }).Count -eq 0) { throw '화면을 하나 이상 골라 주세요.' }
            }
            if ($kind -in 'prototype-edit', 'prototype-sync') {
              $nid = ''
              if ([string]$body.proto -notmatch '^[A-Za-z0-9_-]{1,64}$' -or -not (Test-Path (P $ProtoRoot ([string]$body.proto) 'meta.json'))) { throw "프로토타입을 찾지 못했습니다: $($body.proto)" }
              if ($kind -eq 'prototype-edit' -and -not ([string]$body.text).Trim()) { throw '수정 내용을 입력해 주세요.' }
            }
            # 글 수정(text): Claude가 정한 글 바꾸기 [{nodeId(TEXT), find, replace}]를 Figma 플러그인이 PC 폰트(Pretendard 등)로 반영한다
            if ($kind -eq 'text' -and @($body.items).Count -eq 0) { throw '바꿀 글(items)이 없습니다.' }
            # 가이드 수정 요청(guide-edit): 사람이 글로 적은 수정 내용대로 Claude가 가이드를 고친다(fileKey는 가이드의 기준 파일)
            # 가이드 수정 반영 확인(guide-check): 그 가이드로 작업한 파일(fileKey)에서 바뀐 규칙과 다른 화면을 Claude가 찾는다(Figma는 고치지 않음)
            if ($kind -in 'guide-check', 'guide-edit') {
              $nid = ''
              if ([string]$body.guide -notmatch '^[A-Za-z0-9_-]{1,64}$' -or -not (Test-Path (P $GuideRoot ([string]$body.guide) 'meta.json'))) { throw "가이드를 찾지 못했습니다: $($body.guide)" }
            }
            # 새 UX 가이드 만들기: 기준 Figma 링크에서 파일 키 · 노드를 읽는다. 같은 링크라도 요청마다 따로 만든다
            #  기준은 Figma 링크 · 올린 참고 파일(files, /api/upload) 중 하나 이상. 정의서는 docKind:'spec'
            if ($kind -eq 'guide') {
              $key = Key-Of $body.link; $nid = ''
              if ([string]$body.link -match '[?&]node-id=(\d+)[-:](\d+)') { $nid = $Matches[1] + ':' + $Matches[2] }
              if (-not ([string]$body.name).Trim()) { throw '이름을 입력해 주세요.' }
              $srcs = @($body.files | Where-Object { $_ -and [string]$_.tmp -match '^[0-9a-f]{32}\.[a-z0-9]{1,8}$' -and (Test-Path (P $UpTmp ([string]$_.tmp))) } | Select-Object -First $UpMaxN)
              if (-not ([string]$body.link).Trim() -and -not $srcs.Count) { throw 'Figma 링크를 넣거나 참고 파일을 올려 주세요.' }
              if (([string]$body.link).Trim() -and -not (Test-Key $key)) { throw 'Figma 링크 형식이 아닙니다.' }
            }
            # 정의서 연관 항목 찾기(guide-check, scope:'spec')는 정의서에 기준 파일이 없으면 파일 없이(문서 · 프로토타입만) 받는다
            #  문서 수정 요청(guide-edit)도 기준 파일이 없는 문서면 파일 없이 받는다
            #  참고 파일로만 만드는 가이드 · 정의서(guide, 링크 없음)도 파일 없이 받는다
            $specNoFile = -not $key -and (($kind -eq 'guide-check' -and [string]$body.scope -eq 'spec') -or $kind -in 'guide-edit', 'guide')
            if (-not (Test-Key $key) -and -not $specNoFile) { throw $(if ($kind -eq 'guide') { 'Figma 링크 형식이 아닙니다.' } else { '잘못된 파일 키입니다.' }) }
            if ($kind -in 'capture', 'text' -and $nid -notmatch '^\d+:\d+$') { throw "잘못된 nodeId: $nid" }
            if ($kind -notin 'guide', 'guide-check', 'guide-edit', 'text', 'prototype', 'prototype-edit', 'prototype-sync') { $hit = $items | Where-Object { $_.kind -eq $kind -and $_.fileKey -eq $key -and $_.nodeId -eq $nid -and $_.status -in '대기', '진행 중' } | Select-Object -First 1 }
            # 프로토타입 맞추기는 같은 프로토타입에 아직 「대기」인 것이 있으면 새로 만들지 않는다(여러 번 고쳐도 한 번에 맞춘다)
            if ($kind -eq 'prototype-sync') { $hit = $items | Where-Object { $_.kind -eq $kind -and $_.proto -eq [string]$body.proto -and $_.status -eq '대기' } | Select-Object -First 1 }
            if (-not $hit) {
              $n = 1; foreach ($i in $items) { $v = [int]([string]$i.id -replace '\D', ''); if ($v -ge $n) { $n = $v + 1 } }
              $hit = [pscustomobject]@{ id = ('J{0:000}' -f $n); kind = $kind; fileKey = $key; nodeId = $nid; name = ([string]$body.name).Trim(); link = [string]$body.link; text = ([string]$body.text).Trim(); guide = $(if ($kind -in 'guide-check', 'guide-edit') { [string]$body.guide } else { '' }); revFrom = [string]$body.revFrom; revTo = [string]$body.revTo; items = $(if ($kind -eq 'text') { , @($body.items) } else { , @() }); status = '대기'; note = ''; by = [string]$body.by; takenBy = ''; createdAt = $now; updatedAt = $now }
              # guide-check 범위: '' = 가이드(작업 기준 파일의 화면만), 'spec' = 정의서(화면 · 다른 문서 · 프로토타입)
              if ($kind -eq 'guide-check') { $hit | Add-Member -NotePropertyName scope -NotePropertyValue $(if ([string]$body.scope -eq 'spec') { 'spec' } else { '' }) }
              # 새 가이드 · 정의서: 문서 종류(docKind '' = 가이드, 'spec' = 정의서)와 올린 참고 파일(workbench/job_files/{작업 ID}/, 이 PC에만)
              if ($kind -eq 'guide') {
                $hit | Add-Member -NotePropertyName docKind -NotePropertyValue $(if ([string]$body.docKind -eq 'spec') { 'spec' } else { '' })
                $hit | Add-Member -NotePropertyName files -NotePropertyValue (Save-Uploads $hit.id $srcs)
              }
              if ($kind -like 'prototype*') {
                $hit | Add-Member -NotePropertyName proto -NotePropertyValue ([string]$body.proto)
                $hit | Add-Member -NotePropertyName frames -NotePropertyValue $(if ($kind -eq 'prototype') { , @($body.frames | Where-Object { [string]$_.nodeId -match '^\d+:\d+$' } | ForEach-Object { [pscustomobject]@{ nodeId = [string]$_.nodeId; name = [string]$_.name; page = [string]$_.page } }) } else { , @($body.frames | Where-Object { $_ }) })
                $hit | Add-Member -NotePropertyName start -NotePropertyValue ([string]$body.start)
                $hit | Add-Member -NotePropertyName env -NotePropertyValue ([string]$body.env)
              }
              $items = @($hit) + $items
            }
          }
          'take' {
            # 플러그인: 이 파일의 대기 작업 하나를 가져가 「진행 중」으로. id를 주면 그 작업이 아직 「대기」일 때만(아니면 job 없음)
            if ($body.id) { $hit = $items | Where-Object { $_.id -eq [string]$body.id -and $_.status -eq '대기' } | Select-Object -First 1 }
            else { $hit = $items | Where-Object { $_.kind -eq [string]$body.kind -and $_.fileKey -eq [string]$body.fileKey -and $_.status -eq '대기' } | Select-Object -Last 1 }
            if ($hit) { $hit.status = '진행 중'; $hit.takenBy = [string]$body.by; $hit.updatedAt = $now }
          }
          'update' {
            $hit = $items | Where-Object { $_.id -eq $body.id } | Select-Object -First 1
            if (-not $hit) { throw "작업을 찾지 못했습니다: $($body.id)" }
            if ($body.status) { $hit.status = [string]$body.status }
            if ($null -ne $body.note) { $hit.note = [string]$body.note }
            if ($body.guide) { $hit | Add-Member -NotePropertyName guide -NotePropertyValue ([string]$body.guide) -Force }   # 만든 가이드 id
            # 가이드 수정 반영 확인 결과: 고쳐야 할 화면 [{nodeId, frame, page, change}]
            # 가이드 수정 요청 결과: 바뀌기 전 · 뒤 수정본
            foreach ($f in 'revFrom', 'revTo', 'proto') { if ($body.$f) { $hit | Add-Member -NotePropertyName $f -NotePropertyValue ([string]$body.$f) -Force } }
            if ($null -ne $body.items) { $hit | Add-Member -NotePropertyName items -NotePropertyValue @($body.items) -Force }
            $hit.updatedAt = $now
          }
          default { throw "알 수 없는 action: $($body.action)" }
        }
        if ($items.Count -gt 300) { $items = $items[0..299] }
        $j = [pscustomobject]@{ version = [int]$j.version + 1; items = @($items) }
        [IO.File]::WriteAllText($JobFile, ($j | ConvertTo-Json -Depth 8), $Utf8)
        SendJson $c 200 @{ ok = $true; job = $hit }; continue
      }
    }

    # 작업 이력(공유): 목록 · 직접 남기기(요청 없이 한 작업) · 지금 동기화
    if ($path -eq '/api/history') {
      if ($req.HttpMethod -eq 'POST') {
        $body = (New-Object IO.StreamReader($req.InputStream, $Utf8)).ReadToEnd() | ConvertFrom-Json
        if ($body.action -eq 'add') {
          $title = ([string]$body.title).Trim(); $text = ([string]$body.text).Trim()
          if (-not $title -and -not $text) { throw '작업 내용을 입력해 주세요.' }
          $name = $PcSlug + '_' + (Get-Date).ToString('yyyyMMdd-HHmmss')
          Save-HistEntry $name ([ordered]@{
            id = $name; kind = 'work'; at = (Now); by = [string]$body.by; doneBy = [string]$body.doneBy; pc = $PcName
            reqId = ''; fileKey = [string]$body.fileKey; fileName = [string]$body.fileName; page = [string]$body.page; frame = [string]$body.frame; nodeId = [string]$body.nodeId
            type = [string]$body.type; text = $(if ($title) { $title } else { $text }); note = $(if ($title) { $text } else { '' }); shot = (Copy-HistShot $body.fileKey $body.nodeId $name)
          })
        } elseif ($body.action -eq 'sync') { $SyncWant = $true; Sync-Tick; Start-Sleep -Milliseconds 700 }
        else { throw "알 수 없는 action: $($body.action)" }
      }
      SendJson $c 200 (Read-Hist); continue
    }
    if ($path -eq '/api/usage' -and $req.HttpMethod -eq 'GET') { SendJson $c 200 (Read-Usage); continue }
    # UX 가이드(공유): 목록 · 이 PC의 파일별 작업 기준 가이드 · 바꾸기 {action:'apply', fileKey, guideId('' = 작업 기준 없음), by}
    if ($path -eq '/api/guides') {
      if ($req.HttpMethod -eq 'POST') {
        $body = (New-Object IO.StreamReader($req.InputStream, $Utf8)).ReadToEnd() | ConvertFrom-Json
        # 가이드 고치기: guide.md는 그대로 두고 수정본을 새 파일로 남긴다(여러 PC가 고쳐도 깃 충돌이 없다)
        if ($body.action -eq 'save') {
          $gid = [string]$body.id; $md = [string]$body.md
          if ($gid -notmatch '^[A-Za-z0-9_-]{1,64}$' -or -not (Test-Path (P $GuideRoot $gid 'meta.json'))) { throw "가이드를 찾지 못했습니다: $gid" }
          if (-not $md.Trim()) { throw '가이드 내용이 비어 있습니다.' }
          if ($md.Length -gt 2000000) { throw '가이드 내용이 너무 깁니다.' }
          $rd = P $GuideRoot $gid 'rev'; if (-not (Test-Path $rd)) { New-Item -ItemType Directory -Force $rd | Out-Null }
          $rev = (Get-Date).ToString('yyyyMMdd-HHmmss') + '_' + $PcSlug
          [IO.File]::WriteAllText((P $rd ($rev + '.md')), $md.Replace("`r`n", "`n"), $Utf8)
          [IO.File]::WriteAllText((P $rd ($rev + '.json')), ([ordered]@{ rev = $rev; by = [string]$body.by; at = (Now); note = [string]$body.note; base = [string]$body.base; pc = $PcName } | ConvertTo-Json), $Utf8)
          $SyncWant = $true
          $out = Read-Guides; $out['saved'] = $rev
          SendJson $c 200 $out; continue
        }
        if ($body.action -ne 'apply') { throw "알 수 없는 action: $($body.action)" }
        $key = [string]$body.fileKey; $gid = [string]$body.guideId
        if (-not (Test-Key $key)) { throw '잘못된 파일 키입니다.' }
        if ($gid -and ($gid -notmatch '^[A-Za-z0-9_-]{1,64}$' -or -not (Test-Path (P $GuideRoot $gid 'meta.json')))) { throw "가이드를 찾지 못했습니다: $gid" }
        # 이 PC에만 적용한다(다른 작업자는 각자 고른다)
        $a = [ordered]@{}
        if (Test-Path $GuideApply) { try { foreach ($p in ([IO.File]::ReadAllText($GuideApply, $Utf8) | ConvertFrom-Json).PSObject.Properties) { $a[$p.Name] = $p.Value } } catch {} }
        $a[$key] = [ordered]@{ fileKey = $key; guideId = $gid; by = [string]$body.by; pc = $PcName; at = (Now) }
        [IO.File]::WriteAllText($GuideApply, ($a | ConvertTo-Json -Depth 4), $Utf8)
      }
      SendJson $c 200 (Read-Guides); continue
    }

    # 작업 페이지(workbench) 수정 요청
    if ($path -eq '/api/requests' -and $req.HttpMethod -eq 'GET') {
      if (-not (Test-Path $ReqFile)) { [IO.File]::WriteAllText($ReqFile, '{"version":1,"items":[]}', $Utf8) }
      Send $c 200 'application/json; charset=utf-8' ([IO.File]::ReadAllBytes($ReqFile)); continue
    }
    # 첨부 이미지 올리기: 본문 = 이미지 바이트, ?ext=png|jpg|gif|webp → {tmp}. 요청 등록(add)의 images:[{tmp, small, name}]로 넘긴다
    if ($path -eq '/api/attach' -and $req.HttpMethod -eq 'POST') {
      $ext = ([string]$req.QueryString['ext']).ToLower(); if ($ext -eq 'jpeg') { $ext = 'jpg' }
      if ($ext -notin 'png', 'jpg', 'gif', 'webp') { throw '이미지(PNG · JPG · GIF · WEBP)만 첨부할 수 있습니다.' }
      if ($req.ContentLength64 -le 0 -or $req.ContentLength64 -ge $AttachMax) { throw '이미지는 한 장에 10MB 미만만 첨부할 수 있습니다.' }
      if (-not (Test-Path $AttachTmp)) { New-Item -ItemType Directory -Force $AttachTmp | Out-Null }
      # 등록하지 않고 남은 임시 파일은 6시간 뒤 지운다
      Get-ChildItem $AttachTmp -File | Where-Object { $_.LastWriteTime -lt (Get-Date).AddHours(-6) } | Remove-Item -Force -ErrorAction SilentlyContinue
      $ms = New-Object IO.MemoryStream; $req.InputStream.CopyTo($ms)
      if ($ms.Length -ge $AttachMax) { throw '이미지는 한 장에 10MB 미만만 첨부할 수 있습니다.' }
      $tmp = [guid]::NewGuid().ToString('N') + '.' + $ext
      [IO.File]::WriteAllBytes((P $AttachTmp $tmp), $ms.ToArray())
      SendJson $c 200 @{ tmp = $tmp }; continue
    }
    # 가이드 · 정의서 참고 파일 올리기: 본문 = 파일 바이트, ?name=원래 이름(UTF-8 주소 인코딩) → {tmp, name, size}. 만들기 작업의 files:[{tmp, name}]로 넘긴다
    if ($path -eq '/api/upload' -and $req.HttpMethod -eq 'POST') {
      $qs = @{}; foreach ($kv in ([string]$req.Url.Query).TrimStart('?').Split('&')) { if ($kv -match '^([^=]+)=(.*)$') { $qs[$Matches[1]] = [Uri]::UnescapeDataString($Matches[2].Replace('+', ' ')) } }
      $nm = [string]$qs['name']; $ext = [IO.Path]::GetExtension($nm).TrimStart('.').ToLower()
      if ($ext -notin $UpExt) { throw ('올릴 수 없는 파일 형식입니다: ' + $nm + ' (가능: ' + ($UpExt -join ', ') + ')') }
      if ($req.ContentLength64 -le 0 -or $req.ContentLength64 -ge $UpMax) { throw '파일은 하나에 20MB 미만만 올릴 수 있습니다.' }
      if (-not (Test-Path $UpTmp)) { New-Item -ItemType Directory -Force $UpTmp | Out-Null }
      # 작업으로 만들지 않고 남은 임시 파일은 6시간 뒤 지운다
      Get-ChildItem $UpTmp -File | Where-Object { $_.LastWriteTime -lt (Get-Date).AddHours(-6) } | Remove-Item -Force -ErrorAction SilentlyContinue
      $ms = New-Object IO.MemoryStream; $req.InputStream.CopyTo($ms)
      if ($ms.Length -ge $UpMax) { throw '파일은 하나에 20MB 미만만 올릴 수 있습니다.' }
      $tmp = [guid]::NewGuid().ToString('N') + '.' + $ext
      [IO.File]::WriteAllBytes((P $UpTmp $tmp), $ms.ToArray())
      SendJson $c 200 @{ tmp = $tmp; name = $nm; size = $ms.Length }; continue
    }
    if ($path -eq '/api/requests' -and $req.HttpMethod -eq 'POST') {
      $body = (New-Object IO.StreamReader($req.InputStream, $Utf8)).ReadToEnd() | ConvertFrom-Json
      if (-not (Test-Path $ReqFile)) { [IO.File]::WriteAllText($ReqFile, '{"version":1,"items":[]}', $Utf8) }
      $r = [IO.File]::ReadAllText($ReqFile, $Utf8) | ConvertFrom-Json
      $now = (Get-Date).ToString('yyyy-MM-ddTHH:mm:sszzz')
      $items = @($r.items | Where-Object { $_ })
      switch ($body.action) {
        'add' {
          $txt = ([string]$body.text).Trim()
          if (-not $txt) { throw '수정 내용을 입력해 주세요.' }
          $n = 1; foreach ($i in $items) { $v = [int]([string]$i.id -replace '\D', ''); if ($v -ge $n) { $n = $v + 1 } }
          $rid = 'R{0:000}' -f $n
          $imgs = Save-Attach $rid $body.images
          $items = @([pscustomobject]@{ id = $rid; nodeId = [string]$body.nodeId; frame = [string]$body.frame; page = [string]$body.page; fileKey = [string]$body.fileKey; fileName = [string]$body.fileName; editable = [bool]$body.editable; type = [string]$body.type; priority = [string]$body.priority; layout = [string]$body.layout; text = $txt; status = '대기'; note = ''; author = [string]$body.by; updatedBy = [string]$body.by; createdAt = $now; updatedAt = $now }) + $items
          if ($imgs.Count) { $items[0] | Add-Member -NotePropertyName images -NotePropertyValue $imgs }
          Hist-FromRequest $items[0]
        }
        'update' {
          $hit = $items | Where-Object { $_.id -eq $body.id } | Select-Object -First 1
          if (-not $hit) { throw "요청을 찾지 못했습니다: $($body.id)" }
          # 「진행 중」이 될 때마다 사용량 구간의 시작 시각을 새로 잡는다
          if ($body.status -eq '진행 중' -and $hit.status -ne '진행 중') { $hit | Add-Member -NotePropertyName startedAt -NotePropertyValue $now -Force }
          if ($body.status) { $hit.status = [string]$body.status }
          if ($null -ne $body.note) { $hit.note = [string]$body.note }
          if ($null -ne $body.text -and ([string]$body.text).Trim()) { $hit.text = ([string]$body.text).Trim() }
          $hit.updatedAt = $now
          if ($body.by) { $hit | Add-Member -NotePropertyName updatedBy -NotePropertyValue ([string]$body.by) -Force }
          Hist-FromRequest $hit
        }
        'delete' {
          $items = @($items | Where-Object { $_.id -ne $body.id }); Hist-Remove $body.id
          if ([string]$body.id -match '^R\d+$') { Remove-Item (P $AttachDir ($body.id + '_*')) -Force -ErrorAction SilentlyContinue }
        }
        default { throw "알 수 없는 action: $($body.action)" }
      }
      $r.items = $items; $r.version = [int]$r.version + 1
      [IO.File]::WriteAllText($ReqFile, ($r | ConvertTo-Json -Depth 6), $Utf8)
      if ($body.action -eq 'update' -and $body.status -eq '완료') { Start-Usage ([string]$body.id) }
      Send $c 200 'application/json; charset=utf-8' ([IO.File]::ReadAllBytes($ReqFile)); continue
    }

    $rel = $path.TrimStart('/')
    if ($rel -eq '') { $rel = 'Common_UX_Guide.html' }
    $f = Join-Path $Root $rel
    if ((Test-Path $f -PathType Leaf) -and ([IO.Path]::GetFullPath($f).StartsWith([IO.Path]::GetFullPath($Root)))) {
      $ext = [IO.Path]::GetExtension($f).ToLower()
      $ct = 'application/octet-stream'; if ($types.ContainsKey($ext)) { $ct = $types[$ext] }
      Send $c 200 $ct ([IO.File]::ReadAllBytes($f))
    } else { Send $c 404 'text/plain' $Utf8.GetBytes('not found') }
  } catch {
    try { SendJson $c 400 @{ error = $_.Exception.Message } } catch {}
  }
}
