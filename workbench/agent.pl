#!/usr/bin/perl
# 백그라운드 Claude 에이전트 (macOS, agent.ps1과 같은 동작): 창 없이 Workbench 요청을 감시하고, 떠 있는 Claude Code CLI 세션에 보내 처리한다
#   nohup perl workbench/agent.pl <claude 경로> >/dev/null 2>&1 &
#  - 서버(guide_server_mac.pl)가 Figma AI Run 실행 때 띄운다(시작 안내 7단계의 자동 시작). 시작 안내에서 시작 · 중지할 수 있다
#  - Claude는 처리할 때마다 새로 띄우고, 한 차례를 마치면 닫는다(토큰 절약): `claude -p --input-format stream-json --output-format stream-json`. 요청이 생기면 메시지만 보내고 result를 받는다
#  - 한 차례 안에서 컨텍스트가 커지면 CLI가 스스로 압축한다(CLAUDE_AUTOCOMPACT_PCT_OVERRIDE=80)
#  - 감시는 watch_requests.pl을 짧게(1분) 반복해 돌린다. 상태 workbench/.agent.json, 중지 workbench/.agent_stop, 기록 workbench/.agent.log
#  - 같은 감시 결과가 3번 연달아 처리되지 않으면 10분 쉬고 status=error로 알린다
use strict;
use warnings;
use utf8;
use FindBin;
use JSON::PP;
use IPC::Open3;
use IO::Select;
use Symbol qw(gensym);
use POSIX qw(strftime :sys_wait_h);
use Time::Local qw(timelocal);
use Sys::Hostname;
use Encode qw(encode decode);

my $WB = $FindBin::Bin; my $ROOT = "$WB/..";
my $STATE = "$WB/.agent.json"; my $STOP = "$WB/.agent_stop"; my $LOG = "$WB/.agent.log";
my $RENEW = "$WB/.agent_renew";   # 서버가 「Claude 로그인 · Figma 연결」 창을 열 때 쓴다 → 떠 있는 세션을 버리고 다음 요청 때 새로(로그인 · Figma가 반영된 세션)
my ($COMPACT_PCT, $IDLE_MIN, $TURN_MIN) = (80, 30, 20);
my $J = JSON::PP->new->utf8->canonical;
my %st = (status => 'idle', msg => '');
my $S;   # { pid, in, out, buf, turns, last, ctx, win }
my $SAVED = time;   # 마지막으로 상태를 쓴 시각(15초마다 쓰는지 보려고)
my ($READY, $NEXT_CHECK) = (undef, 0);   # 준비 확인 결과(로그인 · Figma 연결), 다시 확인할 시각
sub now { my $z = strftime('%z', localtime); $z =~ s/(\d\d)$/:$1/; return strftime('%Y-%m-%dT%H:%M:%S', localtime) . $z; }
sub slurp { my ($f) = @_; open(my $h, '<:raw', $f) or return ''; local $/; my $d = <$h>; close $h; return $d // ''; }
sub save_state {
  my ($s, $m) = @_; $st{status} = $s if defined $s; $st{msg} = $m if defined $m;
  my $o = { at => now(), host => decode('UTF-8', hostname()), pid => $$, status => $st{status}, msg => $st{msg} };
  if (open(my $h, '>:raw', $STATE)) { print $h $J->encode($o); close $h; }
  $SAVED = time;
}
sub logm {
  my ($s) = @_;
  if (-s $LOG && -s $LOG > 500 * 1024) { my $t = slurp($LOG); if (open(my $h, '>:raw', $LOG)) { print $h substr($t, -200 * 1024); close $h; } }
  if (open(my $h, '>>:raw', $LOG)) { print $h encode('UTF-8', '[' . now() . "] $s\n"); close $h; }
}
# 이 설치 폴더의 에이전트는 하나만: 잠금 파일을 잡지 못하면(다른 에이전트가 살아 있음) 끝낸다. 프로세스가 끝나면(강제 종료 포함) 풀린다
#  상태 파일만 보던 때는 처리가 길어 150초 넘게 못 쓰거나 중지 신호를 한 에이전트만 가져가면 여러 개가 함께 돌았다
use Fcntl qw(:flock);
our $LOCKFH;
if (open($LOCKFH, '>>', "$WB/.agent.lock")) { exit 0 unless flock($LOCKFH, LOCK_EX | LOCK_NB); }
if (-f $STATE) {
  my $o = eval { $J->decode(slurp($STATE)) };
  # 상태를 150초 안에 썼을 때만 다른 에이전트로 본다(재부팅 뒤 같은 pid를 다른 프로그램이 쓰면 kill 0만으로는 살아 있는 것처럼 보여 새 에이전트가 말없이 끝났다)
  if (ref $o eq 'HASH' && $o->{pid} && $o->{pid} != $$ && ($o->{status} // '') ne 'stopped' && (-M $STATE) * 86400 < 150 && kill(0, $o->{pid})) { exit 0; }
}
my $claude = $ARGV[0] // '';
if (!$claude || !-x $claude) { save_state('error', 'Claude Code CLI를 찾지 못했습니다.'); logm('Claude Code CLI 없음 — 종료'); exit 1; }
unlink $STOP;
$SIG{PIPE} = 'IGNORE';

# ── Claude 세션 ──
sub start_session {
  local $ENV{CLAUDE_AUTOCOMPACT_PCT_OVERRIDE} = $COMPACT_PCT;
  chdir $ROOT;
  # 오류 출력은 표준 출력과 합친다(따로 닫으면 Claude가 경고를 쓸 때 SIGPIPE로 끝날 수 있다). JSON이 아닌 줄은 읽을 때 건너뛴다
  my ($in, $out) = (undef, undef);
  my $pid = eval { open3($in, $out, undef, $claude, '-p', '--input-format', 'stream-json', '--output-format', 'stream-json', '--verbose',
    '--permission-mode', 'acceptEdits', '--allowedTools', 'Bash,Read,Write,Edit,Glob,Grep,TodoWrite,WebFetch,Skill,Agent,Task,mcp__figma,mcp__claude_ai_Figma') };
  if (!$pid) { logm("세션 시작 실패: $@"); return 0; }
  $S = { pid => $pid, in => $in, out => $out, buf => '', turns => 0, last => time, ctx => 0, win => 200000 };
  logm("세션 시작 (claude pid $pid)"); return 1;
}
sub stop_session {
  my ($why, $keep) = @_; return unless $S;
  close $S->{in}; my $t = time; while (waitpid($S->{pid}, WNOHANG) == 0) { if (time - $t > 10) { kill 'TERM', $S->{pid}; waitpid($S->{pid}, 0); last; } sleep 1; }
  close $S->{out}; logm("세션 종료 ($why)"); undef $S;
  ($READY, $NEXT_CHECK) = (undef, 0) unless $keep;   # 다음 세션 전에 로그인 · Figma 연결을 다시 확인(처리를 마쳐 닫은 것이면 그대로)
}
# 사용 한도 표시: CLI가 차례마다 보내는 rate_limit_event(5시간 · 주간 사용률)를 workbench/.plan_usage.json에 쓴다(상단 메뉴 「Claude 24% · …」, appnav.js)
#  대화형 창은 get_usage로 쓰지만 백그라운드에는 그 도구가 없어, 다른 PC에서는 한도 표시가 아예 안 떴다
sub save_usage {
  my ($ri) = @_; my $w = ref $ri eq 'HASH' ? $ri->{unifiedWindows} : undef; return unless ref $w eq 'HASH';
  my $iso = sub { my $z = strftime('%z', localtime $_[0]); $z =~ s/(\d\d)$/:$1/; strftime('%Y-%m-%dT%H:%M:%S', localtime $_[0]) . $z };
  my @list;
  push @list, { label => '5-hour limit', percentUsed => int(100 * ($w->{five_hour}{utilization} // 0) + 0.5), resetsAt => $iso->($w->{five_hour}{resetsAt} // time) } if ref $w->{five_hour} eq 'HASH';
  push @list, { label => 'Weekly · all models', percentUsed => int(100 * ($w->{seven_day}{utilization} // 0) + 0.5), resetsAt => $iso->($w->{seven_day}{resetsAt} // time) } if ref $w->{seven_day} eq 'HASH';
  write_usage(@list);
}
sub write_usage {
  my @list = @_; return unless @list;
  if (open(my $h, '>:raw', "$WB/.plan_usage.json")) { print $h $J->encode({ at => now(), plan => '', by => 'agent', windows => \@list }); close $h; }
}
# 요청이 없을 때도 5분마다 한도 확인: `claude -p /usage`는 모델을 부르지 않아 토큰을 쓰지 않는다(Claude Code가 계정 사용량을 글로 알려 줌)
#  「Current session: 26% used · resets Nov 4, 2pm (Asia/Seoul)」 · 「Current week (all models): 49% used · resets Nov 6, 3pm」를 읽는다.
#  글 형식이 바뀌어 못 읽으면 그냥 넘어간다(처리할 때 받는 rate_limit_event로는 계속 갱신)
my $USAGE_MIN = 5;
sub reset_time {
  my ($s) = @_; $s =~ s/\(.*?\)//g; $s =~ s/^\s+|\s+$//g;
  return '' unless $s =~ /^([A-Za-z]{3})[a-z]*\.?\s+(\d{1,2}),?\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)/i;
  my %mon = (jan => 0, feb => 1, mar => 2, apr => 3, may => 4, jun => 5, jul => 6, aug => 7, sep => 8, oct => 9, nov => 10, dec => 11);
  my $m = $mon{ lc $1 }; return '' unless defined $m;
  my ($d, $h, $mi, $ap) = ($2, $3 % 12, $4 // 0, lc $5); $h += 12 if $ap eq 'pm';
  my $y = (localtime)[5] + 1900;
  my $t = eval { timelocal(0, $mi, $h, $d, $m, $y) } // return '';
  $t = eval { timelocal(0, $mi, $h, $d, $m, $y + 1) } // $t if $t < time - 2 * 86400;   # 12월에 본 1월 초기화
  my $z = strftime('%z', localtime $t); $z =~ s/(\d\d)$/:$1/; return strftime('%Y-%m-%dT%H:%M:%S', localtime $t) . $z;
}
sub probe_usage {
  my $o = run_cli(60, '-p', '/usage'); my @list;
  for my $w (['Current session', '5-hour limit'], ['Current week \(all models\)', 'Weekly · all models']) {
    next unless $o =~ /^\s*$w->[0]:\s*(\d+)% used([^\r\n]*)/m;
    my ($pct, $rest) = ($1 + 0, $2); my $rs = $rest =~ /resets\s+(.+)$/ ? reset_time($1) : '';
    push @list, { label => $w->[1], percentUsed => $pct, resetsAt => $rs };
  }
  if (@list) { write_usage(@list); } else { (my $x = $o) =~ s/\s+/ /g; logm('한도 확인: /usage를 읽지 못함 ' . substr($x, 0, 120)); }
}
# CLI 명령을 짧게 실행해 출력(표준 + 오류)을 받는다. 시간이 넘으면 끊는다
sub run_cli {
  my ($sec, @a) = @_; my $out = '';
  my $pid = open(my $h, '-|'); return '' unless defined $pid;
  if (!$pid) { open(STDERR, '>&', \*STDOUT); chdir $ROOT; exec($claude, @a) or exit 127; }
  # 기다리는 동안 15초마다 상태를 쓴다: 확인(최대 30 + 90 + 60초)이 겹쳐 150초를 넘으면 서버가 에이전트를 죽은 것으로 보고
  #  (탭을 모두 닫았으면) 서버를 끄거나 에이전트를 다시 띄우려다 중지 신호를 지웠다(2026-11-10, 윈도우와 같게)
  my $sel = IO::Select->new($h); my $until = time + $sec; my $ok = 0;
  while (1) {
    if (time >= $until) { kill 'TERM', $pid; last; }
    if ($sel->can_read(15)) { my $n = sysread($h, my $c, 65536); if (!$n) { $ok = 1; last; } $out .= $c; }
    save_state() if time - $SAVED >= 15;
  }
  close $h;
  return $ok ? decode('UTF-8', $out // '') : '';
}
# 처리 전 준비 확인(토큰 안 씀): CLI 로그인(`claude auth status`) · Figma MCP 연결(`claude mcp list`의 figma 줄이 Connected)
#  안 되어 있으면 요청을 보내지 않는다(보내면 Claude가 Figma 없이 「보류」로 돌려 요청이 쌓였다). 상태 login · figma로 시작 안내 7단계에 이유를 보인다
sub check_ready {
  my $a = run_cli(30, 'auth', 'status');
  if ($a =~ /"loggedIn"\s*:\s*false/) {
    save_state('login', 'Claude Code CLI에 로그인되어 있지 않습니다. 7단계 「Claude 로그인 · Figma 연결」 창에서 /login을 하세요.'); logm('준비 확인: CLI 로그인 안 됨'); return 0;
  }
  my $m = run_cli(90, 'mcp', 'list');
  my @lines = grep { /^\s*(claude\.ai )?figma\b[^:]*:/i } split /\r?\n/, $m;
  if (grep { /Connected/ } @lines) { logm('준비 확인: 로그인 · Figma 연결됨'); return 1; }
  if ($m !~ /\S/) { logm('준비 확인: mcp list 응답 없음 — 그대로 진행'); return 1; }   # 확인 자체가 안 되면 막지 않는다(처리 중 Claude가 판단)
  my $why = !@lines ? 'Figma MCP가 등록되어 있지 않음' : (grep { /auth/i } @lines) ? 'Figma 인증 필요' : 'Figma 연결 실패';
  save_state('figma', "Figma 연결이 안 되어 있습니다($why). 7단계 「Claude 로그인 · Figma 연결」 창에서 /mcp → figma → Authenticate를 하세요. 요청은 연결될 때까지 「대기」로 둡니다.");
  logm("준비 확인: $why\n" . join("\n", @lines)); return 0;
}
sub session_dead { return !$S || waitpid($S->{pid}, WNOHANG) != 0; }
# 한 줄 읽기: 15초마다 상태를 쓰며 기다린다. 끝(EOF)이면 undef, 시간 초과면 ''
sub read_line {
  my ($until) = @_; my $sel = IO::Select->new($S->{out});
  while (1) {
    if ($S->{buf} =~ s/^([^\n]*)\n//) { return decode('UTF-8', $1); }
    return '' if time > $until;
    if ($sel->can_read(15)) { my $n = sysread($S->{out}, my $chunk, 65536); return undef unless $n; $S->{buf} .= $chunk; }
    else { save_state(); }
    # 출력이 쉬지 않고 오면 위 15초 기다림에 걸리지 않아 상태를 안 썼다 → 처리 중인데 「백그라운드 연결 끊김」으로 보였다
    save_state() if time - $SAVED >= 15;
  }
}
sub send_turn {
  my ($text) = @_;
  my $line = $J->encode({ type => 'user', message => { role => 'user', content => $text } }) . "\n";
  my $ok = eval { my $fh = $S->{in}; binmode $fh; print $fh $line; $fh->flush; 1 };
  return { ok => 0, dead => 1, text => '보내기 실패' } unless $ok;
  my $until = time + $TURN_MIN * 60; my $raw = '';
  my $started = 0;   # 이번 차례의 system/init을 본 뒤에 온 result만 이번 응답으로 본다
  while (1) {
    my $l = read_line($until);
    return { ok => 0, dead => 1, text => $raw } unless defined $l;
    $until = time + $TURN_MIN * 60 if $l ne "";   # 출력이 오면 다시 20분(전체 시간이 아니라 멈춤만 끊는다, 2026-11-12)
    return { ok => 0, dead => 1, text => "응답이 $TURN_MIN 분 넘게 없음" } if $l eq '' && time > $until;
    my $m = eval { JSON::PP->new->decode($l) }; if (!$m) { $raw .= "$l\n"; next; }
    save_usage($m->{rate_limit_info}) if ($m->{type} // '') eq 'rate_limit_event';
    $started = 1 if ($m->{type} // '') eq 'system' && ($m->{subtype} // '') eq 'init';
    next unless $started || (($m->{type} // '') eq 'result' && $m->{is_error});   # 로그인 오류 등은 init 없이 올 수 있다
    if (($m->{type} // '') eq 'assistant' && ref $m->{message} eq 'HASH' && ref $m->{message}{usage} eq 'HASH') {
      my $u = $m->{message}{usage}; $S->{ctx} = ($u->{input_tokens} // 0) + ($u->{cache_read_input_tokens} // 0) + ($u->{cache_creation_input_tokens} // 0);
    }
    if (($m->{type} // '') eq 'result') {
      $S->{turns}++; $S->{last} = time;
      if (ref $m->{modelUsage} eq 'HASH') { for my $v (values %{ $m->{modelUsage} }) { $S->{win} = $v->{contextWindow} if ref $v eq 'HASH' && $v->{contextWindow}; } }
      return { ok => $m->{is_error} ? 0 : 1, dead => 0, text => $m->{result} // '', ms => $m->{duration_ms} };
    }
  }
}
sub make_prompt {
  my ($out) = @_;
  return "[Workbench 요청 감시 결과]\n$out\n\n"
    . "먼저 규칙 문서를 Read로 읽어라(읽지 않고 처리하지 마라): PENDING · RESUME(요청 R0xx)이면 docs/claude/requests.md, JOBS(작업 J0xx)이면 GET /api/jobs에서 그 작업의 kind를 보고 CLAUDE.md 「작업별 문서」 표의 문서(guide · guide-edit · guide-check = docs/claude/ux-docs.md, prototype* = docs/claude/prototype.md, minutes · plan = docs/claude/plan.md, 그 밖 = docs/claude/jobs.md). 그 문서와 CLAUDE.md 규칙대로 위 항목만 처리하라. 너는 창 없이 떠 있는 백그라운드 Claude이고 사용자는 이 대화를 보지 않는다(기록은 한국어).\n"
    . "- 앞서 이 대화에서 처리한 요청과 섞지 마라. 요청 · 작업의 지금 상태를 파일 · 서버에서 다시 읽고 시작한다.\n"
    . "- 감시 스크립트(watch_requests)는 실행하지 마라. 처리가 끝나면 백그라운드 에이전트가 다시 감시한다.\n"
    . "- 사용 한도 표시(get_usage · .plan_usage.json)는 건너뛴다(이 실행에는 그 도구가 없다).\n"
    . "- 요청 · 작업의 team(없으면 cureca)대로 일한다: CLAUDE.md 「팀」처럼 서버 API에 ?team={team}, 다른 팀이면 .history/teams/{team}/… 폴더, 사용량은 --team {team}, Workbench 요청의 작업 기준은 GET /api/guides?team={team}.\n"
    . "- 사용자에게 대화로 묻지 마라. 해석이 모호하면 「보류」로 바꾸고 note에 이유, 고를 답이 있으면 `ask`(질문 · 선택지, CLAUDE.md)를 함께 남긴다. Figma에 접근할 수 없으면 「보류」(작업은 「실패」)와 note에 이유. 요청에 `replies`(사람의 답)가 있으면 마지막 답대로 이어서 처리한다.\n"
    . "- 요청은 감시 결과에 적힌 순서대로(우선순위 높음 먼저 · 먼저 등록한 것부터) 한 개씩 「진행 중」 → 처리 → 「완료」 순서로 한다. 「진행 중」으로 바꿀 때 서버가 「이미 진행 중」이라고 거절하면 다른 Claude 세션이 처리 중이니 그 항목은 건너뛴다. 요청 프레임이 아닌 다른 화면 · 새 프레임을 고쳤으면 그 프레임들을 모두 캡처하고 「완료」 update에 frames:[{nodeId, name}]를 함께 보낸다. 모두 끝나면 처리 내용을 몇 줄로 요약하고 이번 차례를 끝낸다.\n";
}

save_state('idle', '준비 확인 중 (Claude 로그인 · Figma 연결)'); logm("시작 (pid $$, $claude)");
# 세션은 처리할 것이 생길 때 띄운다: 미리 띄우면 로그인 · Figma 연결 전에 뜬 세션을 계속 써서 Figma 도구 없이 처리했다
my ($last, $repeat) = ('', 0);
my $next_usage = 0;
while (1) {
  if (-f $STOP) { unlink $STOP; stop_session('중지'); save_state('stopped', '중지됨'); logm('중지'); exit 0; }
  # 한도 표시 갱신(5분마다, 토큰 안 씀). 로그인 전이면 실패하고 넘어간다
  if (time >= $next_usage) { $next_usage = time + $USAGE_MIN * 60; probe_usage(); }
  if (-f $RENEW) { unlink $RENEW; stop_session('로그인 · Figma 연결 창을 열어 새로 띄움'); ($READY, $NEXT_CHECK) = (undef, 0); }
  if ($S && session_dead()) { close $S->{in}; close $S->{out}; undef $S; logm('세션이 끝나 있음'); ($READY, $NEXT_CHECK) = (undef, 0); }
  elsif ($S && $S->{turns} > 0 && time - $S->{last} >= $IDLE_MIN * 60) { stop_session("$IDLE_MIN 분 쉼"); }
  # 준비 확인: 세션이 없고 아직 확인 전(또는 실패 뒤 2분)이면. 안 되어 있으면 요청을 보내지 않고 2분 뒤(또는 연결 창을 열면 바로) 다시 확인
  if (!$S && !$READY && time >= $NEXT_CHECK) {
    $READY = check_ready(); $NEXT_CHECK = time + 120;
    save_state('idle', '요청을 기다리는 중') if $READY;
  }
  if (defined $READY && !$READY) {
    for (1 .. 8) { last if -f $STOP || -f $RENEW; sleep 15; save_state(); }
    next;
  }
  save_state();
  my $out = `perl '$WB/watch_requests.pl' 1 2>/dev/null`; $out = decode('UTF-8', $out // ''); $out =~ s/^\s+|\s+$//g;
  next if $out eq '' || $out eq 'TIMEOUT';
  if ($out eq $last) { $repeat++ } else { ($last, $repeat) = ($out, 1) }
  if ($repeat > 3) {
    save_state('error', '같은 요청이 처리되지 않아 10분 쉽니다: ' . (split /\n/, $out)[0]); logm("반복 처리 실패 — 10분 대기: $out");
    for (1 .. 40) { last if -f $STOP; sleep 15; save_state(); }
    $repeat = 0; next;
  }
  start_session() unless $S;
  if (!$S) { save_state('error', 'Claude 세션을 띄우지 못했습니다. 기록: workbench/.agent.log'); sleep 30; next; }
  save_state('working', '처리 중: ' . join(' · ', split /\n/, $out)); logm("처리 시작: $out");
  my $r = send_turn(make_prompt($out));
  logm('처리 끝 (ok ' . ($r->{ok} ? 1 : 0) . ($r->{ms} ? ', ' . int($r->{ms} / 1000) . '초' : '') . ")\n" . ($r->{text} // ''));
  if (($r->{text} // '') =~ /Not logged in|Please run \/login|Invalid API key/) {
    stop_session('로그인 필요');
    save_state('login', 'Claude CLI 로그인이 필요합니다. 시작 안내 7단계의 「Claude 로그인 · Figma 연결」을 진행하세요.');
    for (1 .. 8) { last if -f $STOP; sleep 15; save_state(); }
    next;
  }
  if ($r->{dead}) { stop_session('응답 없음 · 세션 끊김'); save_state('error', '처리 중 세션이 끊겨 새로 띄웁니다. 기록: workbench/.agent.log'); next; }
  # 토큰 절약: 처리를 마치면 세션을 닫는다 → 다음 요청은 새 세션으로(세션을 계속 두면 매 API 호출마다 앞 요청 대화를 다시 읽어
  #  토큰의 98%가 그것이었다, 2026-11-06). 요청끼리는 이어 쓸 내용이 없다
  my $pct = $S->{win} ? int(100 * $S->{ctx} / $S->{win} + 0.5) : 0;
  stop_session("처리 끝 — 다음 요청은 새 세션 (컨텍스트 $pct%, $S->{ctx} 토큰)", 1);
  save_state('idle', '마지막 처리: ' . (split /\n/, $out)[0] . ($r->{ok} ? '' : ' (오류 응답)') . " · 컨텍스트 $pct%");
}
