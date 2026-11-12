# 토큰 사용량 기록: Claude Code 대화 기록(~/.claude/projects/{작업 폴더}/*.jsonl)에서 한 작업 구간의 사용량을 더해
#  .history/usage/{PC}_{요청 ID}.json 으로 남긴다(작업 이력처럼 깃 history 브랜치로 공유된다).
#  - 서버가 요청을 「완료」로 바꿀 때 자동으로 부른다: -ReqId R012 (구간: 그 요청이 「진행 중」이 된 시각 startedAt ~ 지금)
#  - 요청 없이 채팅으로 한 작업은 Claude가 직접: -From 시작시각 -By 작업자 -Title 작업 내용 [-Frame · -NodeId · -FileKey · -FileName · -Page]
#  - -Team 팀 id(v0.13.0): 요청이면 요청의 팀, 비우면 CURECA. 사용량 통계가 팀별로 나눠 보인다
#  - 종류별 토큰(입력 · 캐시 쓰기 · 캐시 읽기 · 출력)과 금액 환산(workbench/pricing.json 단가, 모델별)을 함께 적는다
#  - 같은 작업 폴더에서 Claude 세션을 여러 개 동시에 돌리면 그 구간의 사용량이 모두 더해진다(서브에이전트 포함)
#  - 맥은 workbench/usage.pl (같은 형식)
param([string]$ReqId = '', [string]$From = '', [string]$To = '', [string]$By = '', [string]$Title = '',
  [string]$Frame = '', [string]$NodeId = '', [string]$FileKey = '', [string]$FileName = '', [string]$Page = '',
  [string]$Team = '',   # 팀(v0.13.0): 사용량 통계가 팀별로 나눠 보인다. 요청이면 요청의 팀, 비우면 CURECA
  [string]$Root = (Split-Path $PSScriptRoot -Parent))
$Utf8 = New-Object Text.UTF8Encoding $false
function Now { (Get-Date).ToString('yyyy-MM-ddTHH:mm:sszzz') }
$PcName = [Environment]::MachineName
$PcSlug = ($PcName.ToLower() -replace '[^a-z0-9-]', '-')

# 요청이면 구간 · 정보를 요청 목록에서
$meta = [ordered]@{ kind = 'work'; reqId = ''; reqType = ''; team = $Team; by = $By; fileKey = $FileKey; fileName = $FileName; page = $Page; frame = $Frame; nodeId = $NodeId; text = $Title }
if ($ReqId) {
  $rf = Join-Path $Root 'workbench\edit_requests.json'
  $r = $null; try { $r = @(([IO.File]::ReadAllText($rf, $Utf8) | ConvertFrom-Json).items) | Where-Object { $_.id -eq $ReqId } | Select-Object -First 1 } catch {}
  if (-not $r) { Write-Output "NOREQ $ReqId"; exit 1 }
  if (-not $From) { $From = [string]$r.startedAt }
  $meta.kind = 'request'; $meta.reqId = $ReqId; $meta.reqType = [string]$r.type   # 요청 유형(케이스 1 · 2 · 3 · 질문, 예전 요청은 일반 · 텍스트 수정 …): 사용량 통계에서 거르기
  foreach ($k in 'team', 'fileKey', 'fileName', 'page', 'frame', 'nodeId', 'text') { if (-not $meta[$k]) { $meta[$k] = [string]$r.$k } }
  if (-not $meta.by) { $meta.by = [string]$r.author }
}
if (-not $From) { Write-Output 'NOSTART (요청이 「진행 중」이 된 시각이 없습니다. -From으로 시작 시각을 주세요)'; exit 1 }
$t0 = [DateTimeOffset]::Parse($From)
$t1 = if ($To) { [DateTimeOffset]::Parse($To) } else { [DateTimeOffset]::Now }

# 단가
$price = $null; try { $price = [IO.File]::ReadAllText((Join-Path $Root 'workbench\pricing.json'), $Utf8) | ConvertFrom-Json } catch {}
function Rate($model) {
  if ($price) { $p = $price.models.$model; if (-not $p) { $p = $price.models.($price.default) }; if ($p) { return $p } }
  return [pscustomobject]@{ input = 4; output = 20; cacheRead = 0.2; cacheWrite5m = 5; cacheWrite1h = 8 }
}

# 대화 기록 폴더: 작업 폴더 경로의 영문 · 숫자 밖 글자를 -로 바꾼 이름
$cfg = $env:CLAUDE_CONFIG_DIR; if (-not $cfg) { $cfg = Join-Path $env:USERPROFILE '.claude' }
$dir = Join-Path (Join-Path $cfg 'projects') ($Root.TrimEnd('\') -replace '[^A-Za-z0-9]', '-')
$msgs = @{}
if (Test-Path $dir) {
  foreach ($f in Get-ChildItem $dir -Recurse -Filter *.jsonl | Where-Object { $_.LastWriteTimeUtc -ge $t0.UtcDateTime }) {
    foreach ($l in [IO.File]::ReadLines($f.FullName, $Utf8)) {
      if (-not $l.Contains('"usage"')) { continue }
      if ($l -notmatch '"timestamp":"([^"]+)"') { continue }
      $ts = [DateTimeOffset]::Parse($Matches[1]); if ($ts -lt $t0 -or $ts -gt $t1) { continue }
      try { $o = $l | ConvertFrom-Json } catch { continue }
      if (-not $o.message.usage -or -not $o.message.id) { continue }
      $msgs[[string]$o.message.id] = $o.message   # 같은 응답이 여러 줄이면 마지막 값
    }
  }
}

$s = [ordered]@{ calls = 0; input = 0; cacheWrite = 0; cacheRead = 0; output = 0; usd = 0.0 }
$models = [ordered]@{}
foreach ($m in $msgs.Values) {
  $u = $m.usage; $rt = Rate ([string]$m.model)
  $cw = [long]$u.cache_creation_input_tokens; $w1 = [long]$u.cache_creation.ephemeral_1h_input_tokens; $w5 = $cw - $w1
  $s.calls++; $s.input += [long]$u.input_tokens; $s.cacheWrite += $cw; $s.cacheRead += [long]$u.cache_read_input_tokens; $s.output += [long]$u.output_tokens
  $s.usd += ([long]$u.input_tokens * $rt.input + $w5 * $rt.cacheWrite5m + $w1 * $rt.cacheWrite1h + [long]$u.cache_read_input_tokens * $rt.cacheRead + [long]$u.output_tokens * $rt.output) / 1e6
  $mn = [string]$m.model; if (-not $models.Contains($mn)) { $models[$mn] = 0 }; $models[$mn]++
}
if (-not $s.calls) { Write-Output "NOUSAGE $($t0.ToString('o')) ~ $($t1.ToString('o'))"; exit 0 }

$name = $PcSlug + '_' + $(if ($ReqId) { $ReqId } else { $t1.LocalDateTime.ToString('yyyyMMdd-HHmmss') })
$e = [ordered]@{
  id = $name; kind = $meta.kind; reqId = $meta.reqId; reqType = $meta.reqType; team = $(if ($meta.team) { $meta.team } else { 'cureca' }); at = $t1.ToLocalTime().ToString('yyyy-MM-ddTHH:mm:sszzz'); from = $t0.ToLocalTime().ToString('yyyy-MM-ddTHH:mm:sszzz')
  by = $meta.by; doneBy = 'Claude'; pc = $PcName; fileKey = $meta.fileKey; fileName = $meta.fileName; page = $meta.page; frame = $meta.frame; nodeId = $meta.nodeId; text = $meta.text
  models = $models; calls = $s.calls; input = $s.input; cacheWrite = $s.cacheWrite; cacheRead = $s.cacheRead; output = $s.output
  total = $s.input + $s.cacheWrite + $s.cacheRead + $s.output; usd = [math]::Round($s.usd, 4)
}
$ud = Join-Path $Root '.history\usage'; if (-not (Test-Path $ud)) { New-Item -ItemType Directory -Force $ud | Out-Null }
[IO.File]::WriteAllText((Join-Path $ud ($name + '.json')), ($e | ConvertTo-Json -Depth 4), $Utf8)
try { [IO.File]::WriteAllText((Join-Path $Root 'workbench\.history_sync_now'), (Now)) } catch {}
Write-Output ("USAGE {0} calls={1} input={2} cacheWrite={3} cacheRead={4} output={5} usd={6}" -f $name, $e.calls, $e.input, $e.cacheWrite, $e.cacheRead, $e.output, $e.usd)
