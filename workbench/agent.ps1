# 백그라운드 Claude 에이전트 (윈도우): 창 없이 Workbench 요청을 감시하고, 처리할 것이 생기면 떠 있는 Claude Code CLI 세션에 보내 처리한다
#   powershell -NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File workbench\agent.ps1 -Claude <claude.exe>
#  - 서버(guide_server.ps1)가 Figma AI Run 실행 때 숨김으로 띄운다(시작 안내 7단계의 자동 시작). 시작 안내에서 시작 · 중지할 수 있다
#  - Claude는 **한 번 띄워 계속 유지**한다: `claude -p --input-format stream-json --output-format stream-json`(창 없음).
#    커넥터(Figma) 연결 · CLAUDE.md 읽기를 처음 한 번만 하고, 요청이 생기면 그 세션에 메시지만 보낸다. 응답(result)을 받으면 다음 요청
#  - 컨텍스트가 80%를 넘으면 압축한다: CLI 자동 압축 기준을 80%로(CLAUDE_AUTOCOMPACT_PCT_OVERRIDE), 응답마다 사용량을 보고 80% 이상이면 `/compact`를 보낸다
#  - 30분 넘게 요청이 없으면 세션을 새로 띄운다(캐시도 식으므로). 세션이 죽으면 다시 띄운다. 한 요청이 20분 넘으면 끊고 새로
#  - 감시는 watch_requests.ps1을 짧게(1분) 반복해 돌린다(상태 갱신 · 중지 확인). PENDING · RESUME · JOBS가 나오면 세션에 보낸다
#  - Claude는 이 PC에 로그인된 Claude Code CLI 계정 · claude.ai Figma 커넥터를 쓴다. 처음 한 번 시작 안내 7단계의 「Claude 로그인 · Figma 연결」 필요
#  - 상태: workbench/.agent.json {at, host, pid, status(idle|working|login|error|stopped), msg} — 15초~1분마다 씀(시작 안내 · 서버가 본다)
#  - 중지: workbench/.agent_stop 파일이 생기면 지금 처리를 마치고 끝낸다. 기록: workbench/.agent.log(최근 500KB)
#  - 같은 감시 결과가 3번 연달아 처리되지 않으면(요청 상태가 그대로) 10분 쉬고 status=error로 알린다(토큰 낭비 방지)
param([string]$Claude = '')
$ErrorActionPreference = 'Continue'
$WB = $PSScriptRoot; $Root = Split-Path $WB -Parent
$Utf8 = New-Object Text.UTF8Encoding $false
$StateFile = Join-Path $WB '.agent.json'; $StopFile = Join-Path $WB '.agent_stop'; $LogFile = Join-Path $WB '.agent.log'
$CompactPct = 80; $IdleMin = 30; $TurnMin = 20
$script:St = @{ status = 'idle'; msg = '' }
$script:S = $null        # 떠 있는 세션 { p: Process, turns, last(마지막 사용 시각) }

function Now { (Get-Date).ToString('yyyy-MM-ddTHH:mm:sszzz') }
function Save-State($status, $msg) {
  if ($status) { $script:St.status = $status }; if ($null -ne $msg) { $script:St.msg = $msg }
  $o = [ordered]@{ at = (Now); host = [Environment]::MachineName; pid = $PID; status = $script:St.status; msg = $script:St.msg }
  try { [IO.File]::WriteAllText($StateFile, ($o | ConvertTo-Json -Compress), $Utf8) } catch { }
}
function Log([string]$s) {
  try {
    if ((Test-Path $LogFile) -and (Get-Item $LogFile).Length -gt 500KB) { $t = [IO.File]::ReadAllText($LogFile, $Utf8); [IO.File]::WriteAllText($LogFile, $t.Substring($t.Length - 200KB), $Utf8) }
    [IO.File]::AppendAllText($LogFile, "[$(Now)] $s`r`n", $Utf8)
  } catch { }
}
# 다른 에이전트가 이미 돌고 있으면(상태 150초 이내 · 다른 프로세스 살아 있음) 끝낸다
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
    '--allowedTools "Bash,PowerShell,Read,Write,Edit,Glob,Grep,TodoWrite,WebFetch,mcp__figma,mcp__claude_ai_Figma"'
  $psi.UseShellExecute = $false; $psi.CreateNoWindow = $true
  $psi.RedirectStandardInput = $true; $psi.RedirectStandardOutput = $true; $psi.RedirectStandardError = $true
  $psi.StandardOutputEncoding = $Utf8; $psi.StandardErrorEncoding = $Utf8
  $psi.EnvironmentVariables['CLAUDE_AUTOCOMPACT_PCT_OVERRIDE'] = [string]$CompactPct
  $p = New-Object Diagnostics.Process; $p.StartInfo = $psi
  try { [void]$p.Start() } catch { Log "세션 시작 실패: $($_.Exception.Message)"; return $false }
  $script:S = @{ p = $p; turns = 0; last = Get-Date; err = $p.StandardError.ReadToEndAsync(); ctx = 0; win = 200000 }
  Log "세션 시작 (claude pid $($p.Id))"; return $true
}
function Stop-Session([string]$why) {
  if (-not $script:S) { return }
  $p = $script:S.p
  try { $p.StandardInput.Close() } catch { }
  # 안 끝나면 Claude가 띄운 명령까지 함께 끝낸다(프로세스 트리)
  try { if (-not $p.WaitForExit(10000)) { & taskkill.exe /PID $p.Id /T /F 2>&1 | Out-Null } } catch { }
  Log "세션 종료 ($why)"; $script:S = $null
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
    if ($null -eq $l) { $e = ''; try { if ($script:S.err.Wait(2000)) { $e = $script:S.err.Result } } catch { }; return @{ ok = $false; dead = $true; text = ($out.ToString() + $e).Trim() } }
    $m = $null; try { $m = $l | ConvertFrom-Json } catch { [void]$out.AppendLine($l); continue }
    # 모델 응답의 사용량 = 지금 컨텍스트 크기(입력 + 캐시 읽기 + 캐시 쓰기). 컨텍스트 창은 result의 modelUsage에서(없으면 200k)
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

CLAUDE.md의 「Workbench 수정 요청 처리」와 「작업 대기열」 규칙대로 위 항목만 처리하라. 너는 창 없이 떠 있는 백그라운드 Claude이고 사용자는 이 대화를 보지 않는다(기록은 한국어).
- 앞서 이 대화에서 처리한 요청과 섞지 마라. 요청 · 작업의 지금 상태를 파일 · 서버에서 다시 읽고 시작한다.
- 감시 스크립트(watch_requests)는 실행하지 마라. 처리가 끝나면 백그라운드 에이전트가 다시 감시한다.
- 사용 한도 표시(get_usage · .plan_usage.json)는 건너뛴다(이 실행에는 그 도구가 없다).
- 사용자에게 묻지 마라. 해석이 모호하거나 Figma에 접근할 수 없으면 그 요청 · 작업을 「보류」(작업은 「실패」)로 바꾸고 note에 이유를 남긴다.
- 요청은 감시 결과에 적힌 순서대로(우선순위 높음 먼저 · 먼저 등록한 것부터) 한 개씩 「진행 중」 → 처리 → 「완료」 순서로 한다. 모두 끝나면 처리 내용을 몇 줄로 요약하고 이번 차례를 끝낸다.
"@
}

Save-State 'idle' '요청을 기다리는 중'; Log "시작 (pid $PID, $Claude)"
[void](Start-Session)
$last = ''; $repeat = 0
while ($true) {
  if (Test-Path $StopFile) { Remove-Item $StopFile -Force -ErrorAction SilentlyContinue; Stop-Session '중지'; Save-State 'stopped' '중지됨'; Log '중지'; exit 0 }
  # 세션 관리: 죽었거나 · 오래 쉬었거나 · 많이 썼으면 새로
  if ($script:S -and $script:S.p.HasExited) { Stop-Session '세션이 끝나 있음' }
  elseif ($script:S -and $script:S.turns -gt 0 -and ((Get-Date) - $script:S.last).TotalMinutes -ge $IdleMin) { Stop-Session "$IdleMin 분 쉼"; [void](Start-Session) }
  if (-not $script:S) { [void](Start-Session) }
  Save-State $null $null
  $out = (& powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $WB 'watch_requests.ps1') -MaxMinutes 1 2>$null | Out-String).Trim()
  if (-not $out -or $out -eq 'TIMEOUT') { continue }
  if ($out -eq $last) { $repeat++ } else { $last = $out; $repeat = 1 }
  if ($repeat -gt 3) {
    Save-State 'error' ('같은 요청이 처리되지 않아 10분 쉽니다: ' + ($out -split "`n")[0]); Log "반복 처리 실패 — 10분 대기: $out"
    for ($i = 0; $i -lt 40; $i++) { if (Test-Path $StopFile) { break }; Start-Sleep -Seconds 15; Save-State $null $null }
    $repeat = 0; continue
  }
  if (-not $script:S) { Save-State 'error' 'Claude 세션을 띄우지 못했습니다. 기록: workbench/.agent.log'; Start-Sleep -Seconds 30; continue }
  Save-State 'working' ('처리 중: ' + (($out -split "`n") -join ' · ')); Log "처리 시작: $out"
  $r = Send-Turn (Make-Prompt $out)
  Log ("처리 끝 (ok $($r.ok)" + $(if ($r.ms) { ", $([math]::Round($r.ms / 1000))초" } else { '' }) + ")`r`n" + $r.text)
  if ($r.text -match 'Not logged in|Please run /login|Invalid API key') {
    Stop-Session '로그인 필요'
    Save-State 'login' 'Claude CLI 로그인이 필요합니다. 시작 안내 7단계의 「Claude 로그인 · Figma 연결」을 진행하세요.'
    for ($i = 0; $i -lt 8; $i++) { if (Test-Path $StopFile) { break }; Start-Sleep -Seconds 15; Save-State $null $null }
    continue
  }
  if ($r.dead) { Stop-Session '응답 없음 · 세션 끊김'; Save-State 'error' '처리 중 세션이 끊겨 새로 띄웁니다. 기록: workbench/.agent.log'; continue }
  # 컨텍스트 80% 이상이면 압축
  $pct = if ($script:S.win) { [math]::Round(100 * $script:S.ctx / $script:S.win) } else { 0 }
  if ($pct -ge $CompactPct) {
    Save-State 'working' "컨텍스트 $pct% — 압축 중"; Log "컨텍스트 $pct% ($($script:S.ctx)/$($script:S.win)) — /compact"
    $c = Send-Turn '/compact'
    if ($c.dead) { Stop-Session '압축 중 세션 끊김' } else { Log ("압축 끝: " + $c.text) }
  }
  Save-State 'idle' ('마지막 처리: ' + (($out -split "`n")[0]) + $(if (-not $r.ok) { ' (오류 응답)' } else { '' }) + " · 컨텍스트 $pct%")
}
