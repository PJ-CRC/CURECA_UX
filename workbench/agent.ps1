# 백그라운드 Claude 에이전트 (윈도우): 창 없이 Workbench 요청을 감시하고, 처리할 것이 생기면 떠 있는 Claude Code CLI 세션에 보내 처리한다
#   powershell -NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File workbench\agent.ps1 -Claude <claude.exe>
#  - 서버(guide_server.ps1)가 Figma AI Run 실행 때 숨김으로 띄운다(시작 안내 5단계(CLI)의 자동 시작). 시작 안내에서 시작 · 중지할 수 있다
#  - Claude는 **처리할 때마다 새로 띄운다**: `claude -p --input-format stream-json --output-format stream-json`(창 없음).
#    한 차례(감시 결과 하나)를 처리하면 세션을 닫는다 — 세션을 계속 두면 매 API 호출마다 앞 요청 대화를 다시 읽어 토큰의 98%가 그것이었다(2026-11-06).
#  - 한 차례 안에서 컨텍스트가 커지면 CLI가 스스로 압축한다(CLAUDE_AUTOCOMPACT_PCT_OVERRIDE)
#  - 30분 넘게 요청이 없으면 세션을 새로 띄운다(캐시도 식으므로). 세션이 죽으면 다시 띄운다. 한 요청에서 Claude 출력이 20분 넘게 없으면(멈춤) 끊고 새로 — 오래 걸리는 단계 작업(화면설계 3단계 등)은 출력이 이어지는 한 끊지 않는다(2026-11-12, 규칙 저장소 program-hurdles.md H1)
#  - 감시는 watch_requests.ps1을 짧게(1분) 반복해 돌린다(상태 갱신 · 중지 확인). PENDING · RESUME · JOBS가 나오면 세션에 보낸다
#  - Claude는 이 PC에 로그인된 Claude Code CLI 계정 · claude.ai Figma 커넥터를 쓴다. 처음 한 번 시작 안내 5단계(CLI)의 「Claude 로그인 · Figma 연결」 필요
#  - 상태: workbench/.agent.json {at, host, pid, status(idle|working|login|error|stopped), msg} — 15초~1분마다 씀(시작 안내 · 서버가 본다)
#  - 중지: workbench/.agent_stop 파일이 생기면 지금 처리를 마치고 끝낸다. 기록: workbench/.agent.log(최근 500KB)
#  - 같은 감시 결과가 3번 연달아 처리되지 않으면(요청 상태가 그대로) 10분 쉬고 status=error로 알린다(토큰 낭비 방지)
param([string]$Claude = '')
$ErrorActionPreference = 'Continue'
$WB = $PSScriptRoot; $Root = Split-Path $WB -Parent
$Utf8 = New-Object Text.UTF8Encoding $false
$StateFile = Join-Path $WB '.agent.json'; $StopFile = Join-Path $WB '.agent_stop'; $LogFile = Join-Path $WB '.agent.log'
$RenewFile = Join-Path $WB '.agent_renew'   # 서버가 「Claude 로그인 · Figma 연결」 창을 열 때 쓴다 → 떠 있는 세션을 버리고 다음 요청 때 새로(로그인 · Figma가 반영된 세션)
$CompactPct = 80; $IdleMin = 30; $TurnMin = 20
$script:St = @{ status = 'idle'; msg = '' }
$script:S = $null        # 떠 있는 세션 { p: Process, turns, last(마지막 사용 시각) }

function Now { (Get-Date).ToString('yyyy-MM-ddTHH:mm:sszzz') }
function Save-State($status, $msg) {
  if ($status) { $script:St.status = $status }; if ($null -ne $msg) { $script:St.msg = $msg }
  $o = [ordered]@{ at = (Now); host = [Environment]::MachineName; pid = $PID; status = $script:St.status; msg = $script:St.msg }
  try { [IO.File]::WriteAllText($StateFile, ($o | ConvertTo-Json -Compress), $Utf8) } catch { }
  $script:SavedAt = Get-Date
}
$script:SavedAt = Get-Date
function Log([string]$s) {
  try {
    if ((Test-Path $LogFile) -and (Get-Item $LogFile).Length -gt 500KB) { $t = [IO.File]::ReadAllText($LogFile, $Utf8); [IO.File]::WriteAllText($LogFile, $t.Substring($t.Length - 200KB), $Utf8) }
    [IO.File]::AppendAllText($LogFile, "[$(Now)] $s`r`n", $Utf8)
  } catch { }
}
# 이 설치 폴더의 에이전트는 하나만: 이름 붙은 뮤텍스를 잡지 못하면(다른 에이전트가 살아 있음) 끝낸다
#  상태 파일만 보던 때는 처리가 길어 150초 넘게 못 쓰거나 중지 신호를 한 에이전트만 가져가면 여러 개가 함께 돌았다(2026-11-06 R026을 3개가 동시에 받음)
#  뮤텍스는 프로세스가 끝나면(강제 종료 포함) 풀린다
$sha = [Security.Cryptography.SHA1]::Create()
$mxName = 'Local\UXAI_Workbench_Agent_' + (($sha.ComputeHash($Utf8.GetBytes($Root.ToLowerInvariant())) | Select-Object -First 8 | ForEach-Object { $_.ToString('x2') }) -join '')
$script:AgentMutex = New-Object Threading.Mutex($false, $mxName)
$got = $false
try { $got = $script:AgentMutex.WaitOne(0) } catch [Threading.AbandonedMutexException] { $got = $true }
if (-not $got) { exit 0 }
# (예전 방식도 함께) 다른 에이전트가 이미 돌고 있으면(상태 150초 이내 · 다른 프로세스 살아 있음) 끝낸다
try {
  $o = [IO.File]::ReadAllText($StateFile, $Utf8) | ConvertFrom-Json
  if ($o.pid -and $o.pid -ne $PID -and $o.status -ne 'stopped' -and ((Get-Date) - [datetime]$o.at).TotalSeconds -lt 150 -and (Get-Process -Id $o.pid -ErrorAction SilentlyContinue)) { exit 0 }
} catch { }
if (-not $Claude -or -not (Test-Path $Claude)) {
  $g = Get-Command claude -ErrorAction SilentlyContinue | Select-Object -First 1
  if ($g) { $Claude = $g.Source }
  else { $d = Join-Path $env:LOCALAPPDATA 'Claude-Data'; if (Test-Path $d) { $f = Get-ChildItem $d -Recurse -Filter claude.exe -ErrorAction SilentlyContinue | Where-Object { $_.FullName -like '*\claude-code\*' } | Sort-Object LastWriteTime -Descending | Select-Object -First 1; if ($f) { $Claude = $f.FullName } } }
}
if (-not $Claude) { Save-State 'error' 'Claude Code CLI를 찾지 못했습니다.'; Log 'Claude Code CLI 없음 — 종료'; exit 1 }
if (Test-Path $StopFile) { Remove-Item $StopFile -Force -ErrorAction SilentlyContinue }

# ── Claude 세션 ──
function Start-Session {
  $psi = New-Object Diagnostics.ProcessStartInfo
  $psi.FileName = $Claude; $psi.WorkingDirectory = $Root
  $psi.Arguments = '-p --input-format stream-json --output-format stream-json --verbose --permission-mode acceptEdits ' +
    '--allowedTools "Bash,PowerShell,Read,Write,Edit,Glob,Grep,TodoWrite,WebFetch,Skill,Agent,Task,mcp__figma,mcp__claude_ai_Figma"'
  $psi.UseShellExecute = $false; $psi.CreateNoWindow = $true
  $psi.RedirectStandardInput = $true; $psi.RedirectStandardOutput = $true; $psi.RedirectStandardError = $true
  $psi.StandardOutputEncoding = $Utf8; $psi.StandardErrorEncoding = $Utf8
  $psi.EnvironmentVariables['CLAUDE_AUTOCOMPACT_PCT_OVERRIDE'] = [string]$CompactPct
  $p = New-Object Diagnostics.Process; $p.StartInfo = $psi
  try { [void]$p.Start() } catch { Log "세션 시작 실패: $($_.Exception.Message)"; return $false }
  $script:S = @{ p = $p; turns = 0; last = Get-Date; err = $p.StandardError.ReadToEndAsync(); ctx = 0; win = 200000 }
  Log "세션 시작 (claude pid $($p.Id))"; return $true
}
function Stop-Session([string]$why, [switch]$KeepReady) {
  if (-not $script:S) { return }
  $p = $script:S.p
  try { $p.StandardInput.Close() } catch { }
  # 안 끝나면 Claude가 띄운 명령까지 함께 끝낸다(프로세스 트리)
  try { if (-not $p.WaitForExit(10000)) { & taskkill.exe /PID $p.Id /T /F 2>&1 | Out-Null } } catch { }
  Log "세션 종료 ($why)"; $script:S = $null
  if (-not $KeepReady) { $script:Ready = $null; $script:NextCheck = Get-Date }   # 다음 세션 전에 로그인 · Figma 연결을 다시 확인(처리를 마쳐 닫은 것이면 그대로)
}
# 사용 한도 표시: CLI가 차례마다 보내는 rate_limit_event(5시간 · 주간 사용률)를 workbench/.plan_usage.json에 쓴다(상단 메뉴 「Claude 24% · …」, appnav.js)
#  대화형 창은 get_usage로 쓰지만 백그라운드에는 그 도구가 없어, 다른 PC에서는 한도 표시가 아예 안 떴다
function Save-Usage($ri) {
  try {
    $w = $ri.unifiedWindows; if (-not $w) { return }
    $iso = { param($s) [DateTimeOffset]::FromUnixTimeSeconds([int64]$s).ToLocalTime().ToString('yyyy-MM-ddTHH:mm:sszzz') }
    $list = New-Object Collections.ArrayList
    if ($w.five_hour) { [void]$list.Add([ordered]@{ label = '5-hour limit'; percentUsed = [math]::Round(100 * [double]$w.five_hour.utilization); resetsAt = (& $iso $w.five_hour.resetsAt) }) }
    if ($w.seven_day) { [void]$list.Add([ordered]@{ label = 'Weekly · all models'; percentUsed = [math]::Round(100 * [double]$w.seven_day.utilization); resetsAt = (& $iso $w.seven_day.resetsAt) }) }
    Write-Usage $list
  } catch { }
}
function Write-Usage($list) {
  if (-not $list.Count) { return }
  $o = [ordered]@{ at = (Now); plan = ''; by = 'agent'; windows = $list.ToArray() }
  [IO.File]::WriteAllText((Join-Path $WB '.plan_usage.json'), ($o | ConvertTo-Json -Depth 5 -Compress), $Utf8)
}
# 요청이 없을 때도 5분마다 한도 확인: 아주 짧은 질문(가장 싼 모델 · 도구 없음 · 짧은 시스템 프롬프트, 한 번에 약 850토큰)을 보내
#  돌아오는 rate_limit_event(5시간 · 주간 사용률)를 읽는다. 예전에는 `claude -p /usage` 글을 읽었는데(토큰 0)
#  Claude Code 2.1.3xx부터 /usage가 사용률 %를 보여주지 않아 11-05부터 상단 표시가 멈췄다(2026-11-13)
#  CLAUDE.md를 읽지 않게 임시 폴더에서 돌린다
$UsageMin = 5
function Probe-Usage {
  $dir = Join-Path ([IO.Path]::GetTempPath()) 'uxai_usage_probe'; try { [void](New-Item -ItemType Directory -Force $dir) } catch { $dir = $Root }
  $o = Run-Cli '-p "." --model haiku --output-format stream-json --verbose --tools "" --system-prompt "Reply with one dot." --strict-mcp-config --max-turns 1' 60 $dir
  foreach ($l in ($o -split "`r?`n")) {
    if ($l -notmatch '"rate_limit_event"') { continue }
    try { $m = $l | ConvertFrom-Json; if ($m.rate_limit_info.unifiedWindows) { Save-Usage $m.rate_limit_info; return } } catch { }
  }
  $x = ($o -replace '\s+', ' '); Log ('한도 확인: 사용률을 받지 못함 ' + $x.Substring(0, [Math]::Min(160, $x.Length)))
}
# CLI 명령을 짧게 실행해 출력(표준 + 오류)을 받는다. 시간이 넘으면 끊는다
function Run-Cli([string]$cliArgs, [int]$sec, [string]$dir = '') {
  try {
    $psi = New-Object Diagnostics.ProcessStartInfo
    $psi.FileName = $Claude; $psi.Arguments = $cliArgs; $psi.WorkingDirectory = $(if ($dir) { $dir } else { $Root })
    $psi.UseShellExecute = $false; $psi.CreateNoWindow = $true; $psi.RedirectStandardOutput = $true; $psi.RedirectStandardError = $true
    $psi.StandardOutputEncoding = $Utf8; $psi.StandardErrorEncoding = $Utf8
    $p = [Diagnostics.Process]::Start($psi); $o = $p.StandardOutput.ReadToEndAsync(); $e = $p.StandardError.ReadToEndAsync()
    # 기다리는 동안 15초마다 상태를 쓴다: 확인(최대 30 + 90 + 60초)이 겹쳐 150초를 넘으면 서버가 에이전트를 죽은 것으로 보고
    #  (탭을 모두 닫았으면) 서버를 끄거나 에이전트를 하나 더 띄웠다(2026-11-10)
    $until = (Get-Date).AddSeconds($sec)
    while (-not $p.WaitForExit(15000)) {
      Save-State $null $null
      if ((Get-Date) -ge $until) { & taskkill.exe /PID $p.Id /T /F 2>&1 | Out-Null; return '' }
    }
    return $o.Result + "`n" + $e.Result
  } catch { return '' }
}
# 처리 전 준비 확인(토큰 안 씀): CLI 로그인(`claude auth status`) · Figma MCP 연결(`claude mcp list`의 figma 줄이 Connected)
#  안 되어 있으면 요청을 보내지 않는다(보내면 Claude가 Figma 없이 「보류」로 돌려 요청이 쌓였다). 상태 login · figma로 시작 안내 5단계(CLI)에 이유를 보인다
function Check-Ready {
  $a = Run-Cli 'auth status' 30
  if ($a -match '"loggedIn"\s*:\s*false') {
    Save-State 'login' 'Claude Code CLI에 로그인되어 있지 않습니다. 시작 안내 5단계(CLI) 「Claude 로그인 · Figma 연결」 창에서 /login을 하세요.'; Log '준비 확인: CLI 로그인 안 됨'; return $false
  }
  $m = Run-Cli 'mcp list' 90
  $lines = @(($m -split "`r?`n") | Where-Object { $_ -match '^\s*(claude\.ai )?figma\b[^:]*:' })
  if (@($lines | Where-Object { $_ -match 'Connected' }).Count) { Log '준비 확인: 로그인 · Figma 연결됨'; return $true }
  if (-not $m.Trim()) { Log '준비 확인: mcp list 응답 없음 — 그대로 진행'; return $true }   # 확인 자체가 안 되면 막지 않는다(처리 중 Claude가 판단)
  $why = if (-not $lines.Count) { 'Figma MCP가 등록되어 있지 않음' } elseif (@($lines | Where-Object { $_ -match 'auth' }).Count) { 'Figma 인증 필요' } else { 'Figma 연결 실패' }
  Save-State 'figma' ("Figma 연결이 안 되어 있습니다($why). 시작 안내 5단계(CLI) 「Claude 로그인 · Figma 연결」 창에서 /mcp → figma → Authenticate를 하세요. 요청은 연결될 때까지 「대기」로 둡니다.")
  Log ("준비 확인: $why`r`n" + ($lines -join "`r`n")); return $false
}
# 메시지 한 건을 보내고 result가 올 때까지 읽는다. 기다리는 동안 15초마다 상태를 쓴다
function Send-Turn([string]$text) {
  $p = $script:S.p
  $line = (@{ type = 'user'; message = @{ role = 'user'; content = $text } } | ConvertTo-Json -Compress -Depth 5) + "`n"
  try { $b = $Utf8.GetBytes($line); $p.StandardInput.BaseStream.Write($b, 0, $b.Length); $p.StandardInput.BaseStream.Flush() }
  catch { return @{ ok = $false; dead = $true; text = "보내기 실패: $($_.Exception.Message)" } }
  $until = (Get-Date).AddMinutes($TurnMin); $out = New-Object Text.StringBuilder
  $started = $false   # 이번 차례의 system/init을 본 뒤에 온 result만 이번 응답으로 본다(앞 차례에 늦게 온 줄 무시)
  while ($true) {
    $task = $p.StandardOutput.ReadLineAsync()
    while (-not $task.Wait(15000)) {
      Save-State $null $null
      if ((Get-Date) -gt $until) { return @{ ok = $false; dead = $true; text = "응답이 $TurnMin 분 넘게 없음" } }
    }
    $l = $task.Result
    if ($null -ne $l) { $until = (Get-Date).AddMinutes($TurnMin) }   # 출력이 오면 다시 20분(전체 시간이 아니라 멈춤만 끊는다)
    # 출력이 쉬지 않고 오면 위 15초 기다림에 걸리지 않아 상태를 안 썼다 → 처리 중인데 「백그라운드 연결 끊김」으로 보였다(2026-11-10 R032)
    if (((Get-Date) - $script:SavedAt).TotalSeconds -ge 15) { Save-State $null $null }
    if ($null -eq $l) { $e = ''; try { if ($script:S.err.Wait(2000)) { $e = $script:S.err.Result } } catch { }; return @{ ok = $false; dead = $true; text = ($out.ToString() + $e).Trim() } }
    $m = $null; try { $m = $l | ConvertFrom-Json } catch { [void]$out.AppendLine($l); continue }
    # 모델 응답의 사용량 = 지금 컨텍스트 크기(입력 + 캐시 읽기 + 캐시 쓰기). 컨텍스트 창은 result의 modelUsage에서(없으면 200k)
    if ($m.type -eq 'rate_limit_event') { Save-Usage $m.rate_limit_info }
    if ($m.type -eq 'system' -and $m.subtype -eq 'init') { $started = $true }
    if (-not $started -and -not ($m.type -eq 'result' -and $m.is_error)) { continue }   # 로그인 오류 등은 init 없이 올 수 있다
    if ($m.type -eq 'assistant' -and $m.message.usage) { $u = $m.message.usage; $script:S.ctx = [int64]$u.input_tokens + [int64]$u.cache_read_input_tokens + [int64]$u.cache_creation_input_tokens }
    if ($m.type -eq 'result') {
      $script:S.turns++; $script:S.last = Get-Date
      if ($m.modelUsage) { foreach ($k in $m.modelUsage.PSObject.Properties) { if ($k.Value.contextWindow) { $script:S.win = [int64]$k.Value.contextWindow } } }
      return @{ ok = -not $m.is_error; dead = $false; text = [string]$m.result; cost = $m.total_cost_usd; ms = $m.duration_ms }
    }
  }
}
function Make-Prompt([string]$out) {
  return @"
[Workbench 요청 감시 결과]
$out

먼저 규칙 문서를 Read로 읽어라(읽지 않고 처리하지 마라): PENDING · RESUME(요청 R0xx)이면 docs/claude/requests.md, JOBS(작업 J0xx)이면 GET /api/jobs에서 그 작업의 kind를 보고 CLAUDE.md 「작업별 문서」 표의 문서(guide · guide-edit · guide-check = docs/claude/ux-docs.md, prototype* = docs/claude/prototype.md, minutes · plan = docs/claude/plan.md, 그 밖 = docs/claude/jobs.md). 그 문서와 CLAUDE.md 규칙대로 위 항목만 처리하라. 너는 창 없이 떠 있는 백그라운드 Claude이고 사용자는 이 대화를 보지 않는다(기록은 한국어).
- 앞서 이 대화에서 처리한 요청과 섞지 마라. 요청 · 작업의 지금 상태를 파일 · 서버에서 다시 읽고 시작한다.
- 감시 스크립트(watch_requests)는 실행하지 마라. 처리가 끝나면 백그라운드 에이전트가 다시 감시한다.
- 사용 한도 표시(get_usage · .plan_usage.json)는 건너뛴다(이 실행에는 그 도구가 없다).
- 요청 · 작업의 team(없으면 cureca)대로 일한다: CLAUDE.md 「팀」처럼 서버 API에 ?team={team}, 다른 팀이면 .history/teams/{team}/… 폴더, 사용량은 -Team {team}, Workbench 요청의 작업 기준은 GET /api/guides?team={team}.
- 사용자에게 대화로 묻지 마라. 해석이 모호하면 「보류」로 바꾸고 note에 이유, 고를 답이 있으면 `ask`(질문 · 선택지, CLAUDE.md)를 함께 남긴다. Figma에 접근할 수 없으면 「보류」(작업은 「실패」)와 note에 이유. 요청에 `replies`(사람의 답)가 있으면 마지막 답대로 이어서 처리한다.
- 요청은 감시 결과에 적힌 순서대로(우선순위 높음 먼저 · 먼저 등록한 것부터) 한 개씩 「진행 중」 → 처리 → 「완료」 순서로 한다. 「진행 중」으로 바꿀 때 서버가 「이미 진행 중」이라고 거절하면 다른 Claude 세션이 처리 중이니 그 항목은 건너뛴다. 요청 프레임이 아닌 다른 화면 · 새 프레임을 고쳤으면 그 프레임들을 모두 캡처하고 「완료」 update에 frames:[{nodeId, name}]를 함께 보낸다. 모두 끝나면 처리 내용을 몇 줄로 요약하고 이번 차례를 끝낸다.
"@
}

Save-State 'idle' '준비 확인 중 (Claude 로그인 · Figma 연결)'; Log "시작 (pid $PID, $Claude)"
# 세션은 처리할 것이 생길 때 띄운다: 미리 띄우면 로그인 · Figma 연결 전에 뜬 세션을 계속 써서 Figma 도구 없이 처리했다
$last = ''; $repeat = 0
$script:Ready = $null; $script:NextCheck = Get-Date; $script:NextUsage = Get-Date
while ($true) {
  if (Test-Path $StopFile) { Remove-Item $StopFile -Force -ErrorAction SilentlyContinue; Stop-Session '중지'; Save-State 'stopped' '중지됨'; Log '중지'; exit 0 }
  # 한도 표시 갱신(5분마다, 약 850토큰). 로그인 전이면 실패하고 넘어간다
  if ((Get-Date) -ge $script:NextUsage) { $script:NextUsage = (Get-Date).AddMinutes($UsageMin); Probe-Usage }
  # 세션 관리: 죽었거나 · 오래 쉬었거나 · 로그인 · 연결이 바뀌었으면 버린다(다음 처리 때 새로)
  if (Test-Path $RenewFile) { Remove-Item $RenewFile -Force -ErrorAction SilentlyContinue; Stop-Session '로그인 · Figma 연결 창을 열어 새로 띄움'; $script:Ready = $null; $script:NextCheck = Get-Date }
  if ($script:S -and $script:S.p.HasExited) { Stop-Session '세션이 끝나 있음' }
  elseif ($script:S -and $script:S.turns -gt 0 -and ((Get-Date) - $script:S.last).TotalMinutes -ge $IdleMin) { Stop-Session "$IdleMin 분 쉼" }
  # 준비 확인: 세션이 없고 아직 확인 전(또는 실패 뒤 2분)이면. 안 되어 있으면 요청을 보내지 않고 2분 뒤(또는 연결 창을 열면 바로) 다시 확인
  if (-not $script:S -and $script:Ready -ne $true -and (Get-Date) -ge $script:NextCheck) {
    $script:Ready = Check-Ready; $script:NextCheck = (Get-Date).AddMinutes(2)
    if ($script:Ready) { Save-State 'idle' '요청을 기다리는 중' }
  }
  if ($script:Ready -eq $false) {
    for ($i = 0; $i -lt 8; $i++) { if ((Test-Path $StopFile) -or (Test-Path $RenewFile)) { break }; Start-Sleep -Seconds 15; Save-State $null $null }
    continue
  }
  Save-State $null $null
  $out = (& powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $WB 'watch_requests.ps1') -MaxMinutes 1 2>$null | Out-String).Trim()
  if (-not $out -or $out -eq 'TIMEOUT') { continue }
  if ($out -eq $last) { $repeat++ } else { $last = $out; $repeat = 1 }
  if ($repeat -gt 3) {
    Save-State 'error' ('같은 요청이 처리되지 않아 10분 쉽니다: ' + ($out -split "`n")[0]); Log "반복 처리 실패 — 10분 대기: $out"
    for ($i = 0; $i -lt 40; $i++) { if (Test-Path $StopFile) { break }; Start-Sleep -Seconds 15; Save-State $null $null }
    $repeat = 0; continue
  }
  if (-not $script:S) { [void](Start-Session) }
  if (-not $script:S) { Save-State 'error' 'Claude 세션을 띄우지 못했습니다. 기록: workbench/.agent.log'; Start-Sleep -Seconds 30; continue }
  Save-State 'working' ('처리 중: ' + (($out -split "`n") -join ' · ')); Log "처리 시작: $out"
  $r = Send-Turn (Make-Prompt $out)
  Log ("처리 끝 (ok $($r.ok)" + $(if ($r.ms) { ", $([math]::Round($r.ms / 1000))초" } else { '' }) + ")`r`n" + $r.text)
  if ($r.text -match 'Not logged in|Please run /login|Invalid API key') {
    Stop-Session '로그인 필요'
    Save-State 'login' 'Claude CLI 로그인이 필요합니다. 시작 안내 5단계(CLI)의 「Claude 로그인 · Figma 연결」을 진행하세요.'
    for ($i = 0; $i -lt 8; $i++) { if (Test-Path $StopFile) { break }; Start-Sleep -Seconds 15; Save-State $null $null }
    continue
  }
  if ($r.dead) { Stop-Session '응답 없음 · 세션 끊김'; Save-State 'error' '처리 중 세션이 끊겨 새로 띄웁니다. 기록: workbench/.agent.log'; continue }
  # 토큰 절약: 처리를 마치면 세션을 닫는다 → 다음 요청은 새 세션으로 시작
  #  세션을 계속 두면 API를 부를 때마다 앞 요청들의 대화까지 통째로 다시 읽어(캐시 읽기) 사용량의 98%가 그것이었다
  #  (2026-11-06 기록: 호출 한 번에 13만~77만 토큰). 요청끼리는 이어 쓸 내용이 없다(규칙: 앞서 처리한 요청과 섞지 않고 상태를 다시 읽는다)
  $pct = if ($script:S.win) { [math]::Round(100 * $script:S.ctx / $script:S.win) } else { 0 }
  Stop-Session "처리 끝 — 다음 요청은 새 세션 (컨텍스트 $pct%, $($script:S.ctx) 토큰)" -KeepReady
  Save-State 'idle' ('마지막 처리: ' + (($out -split "`n")[0]) + $(if (-not $r.ok) { ' (오류 응답)' } else { '' }) + " · 컨텍스트 $pct%")
}
