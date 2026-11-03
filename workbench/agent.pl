#!/usr/bin/perl
# 백그라운드 Claude 에이전트 (macOS, agent.ps1과 같은 동작): 창 없이 Workbench 요청을 감시하고, 떠 있는 Claude Code CLI 세션에 보내 처리한다
#   nohup perl workbench/agent.pl <claude 경로> >/dev/null 2>&1 &
#  - 서버(guide_server_mac.pl)가 Figma AI Run 실행 때 띄운다(시작 안내 7단계의 자동 시작). 시작 안내에서 시작 · 중지할 수 있다
#  - Claude는 한 번 띄워 계속 유지한다: `claude -p --input-format stream-json --output-format stream-json`. 요청이 생기면 메시지만 보내고 result를 받는다
#  - 컨텍스트가 80%를 넘으면 압축한다(CLAUDE_AUTOCOMPACT_PCT_OVERRIDE=80, 응답 사용량이 80% 이상이면 `/compact`). 30분 넘게 쉬면 새로 띄운다
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
use Sys::Hostname;
use Encode qw(encode decode);

my $WB = $FindBin::Bin; my $ROOT = "$WB/..";
my $STATE = "$WB/.agent.json"; my $STOP = "$WB/.agent_stop"; my $LOG = "$WB/.agent.log";
my $RENEW = "$WB/.agent_renew";   # 서버가 「Claude 로그인 · Figma 연결」 창을 열 때 쓴다 → 떠 있는 세션을 버리고 다음 요청 때 새로(로그인 · Figma가 반영된 세션)
my ($COMPACT_PCT, $IDLE_MIN, $TURN_MIN) = (80, 30, 20);
my $J = JSON::PP->new->utf8->canonical;
my %st = (status => 'idle', msg => '');
my $S;   # { pid, in, out, buf, turns, last, ctx, win }
sub now { my $z = strftime('%z', localtime); $z =~ s/(\d\d)$/:$1/; return strftime('%Y-%m-%dT%H:%M:%S', localtime) . $z; }
sub slurp { my ($f) = @_; open(my $h, '<:raw', $f) or return ''; local $/; my $d = <$h>; close $h; return $d // ''; }
sub save_state {
  my ($s, $m) = @_; $st{status} = $s if defined $s; $st{msg} = $m if defined $m;
  my $o = { at => now(), host => decode('UTF-8', hostname()), pid => $$, status => $st{status}, msg => $st{msg} };
  if (open(my $h, '>:raw', $STATE)) { print $h $J->encode($o); close $h; }
}
sub logm {
  my ($s) = @_;
  if (-s $LOG && -s $LOG > 500 * 1024) { my $t = slurp($LOG); if (open(my $h, '>:raw', $LOG)) { print $h substr($t, -200 * 1024); close $h; } }
  if (open(my $h, '>>:raw', $LOG)) { print $h encode('UTF-8', '[' . now() . "] $s\n"); close $h; }
}
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
    '--permission-mode', 'acceptEdits', '--allowedTools', 'Bash,Read,Write,Edit,Glob,Grep,TodoWrite,WebFetch,mcp__figma,mcp__claude_ai_Figma') };
  if (!$pid) { logm("세션 시작 실패: $@"); return 0; }
  $S = { pid => $pid, in => $in, out => $out, buf => '', turns => 0, last => time, ctx => 0, win => 200000 };
  logm("세션 시작 (claude pid $pid)"); return 1;
}
sub stop_session {
  my ($why) = @_; return unless $S;
  close $S->{in}; my $t = time; while (waitpid($S->{pid}, WNOHANG) == 0) { if (time - $t > 10) { kill 'TERM', $S->{pid}; waitpid($S->{pid}, 0); last; } sleep 1; }
  close $S->{out}; logm("세션 종료 ($why)"); undef $S;
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
    return { ok => 0, dead => 1, text => "응답이 $TURN_MIN 분 넘게 없음" } if $l eq '' && time > $until;
    my $m = eval { JSON::PP->new->decode($l) }; if (!$m) { $raw .= "$l\n"; next; }
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
    . "CLAUDE.md의 「Workbench 수정 요청 처리」와 「작업 대기열」 규칙대로 위 항목만 처리하라. 너는 창 없이 떠 있는 백그라운드 Claude이고 사용자는 이 대화를 보지 않는다(기록은 한국어).\n"
    . "- 앞서 이 대화에서 처리한 요청과 섞지 마라. 요청 · 작업의 지금 상태를 파일 · 서버에서 다시 읽고 시작한다.\n"
    . "- 감시 스크립트(watch_requests)는 실행하지 마라. 처리가 끝나면 백그라운드 에이전트가 다시 감시한다.\n"
    . "- 사용 한도 표시(get_usage · .plan_usage.json)는 건너뛴다(이 실행에는 그 도구가 없다).\n"
    . "- 사용자에게 묻지 마라. 해석이 모호하거나 Figma에 접근할 수 없으면 그 요청 · 작업을 「보류」(작업은 「실패」)로 바꾸고 note에 이유를 남긴다.\n"
    . "- 요청은 감시 결과에 적힌 순서대로(우선순위 높음 먼저 · 먼저 등록한 것부터) 한 개씩 「진행 중」 → 처리 → 「완료」 순서로 한다. 모두 끝나면 처리 내용을 몇 줄로 요약하고 이번 차례를 끝낸다.\n";
}

save_state('idle', '요청을 기다리는 중'); logm("시작 (pid $$, $claude)");
# 세션은 처리할 것이 생길 때 띄운다: 미리 띄우면 로그인 · Figma 연결 전에 뜬 세션을 계속 써서 Figma 도구 없이 처리했다
my ($last, $repeat) = ('', 0);
while (1) {
  if (-f $STOP) { unlink $STOP; stop_session('중지'); save_state('stopped', '중지됨'); logm('중지'); exit 0; }
  if (-f $RENEW) { unlink $RENEW; stop_session('로그인 · Figma 연결 창을 열어 새로 띄움'); }
  if ($S && session_dead()) { close $S->{in}; close $S->{out}; undef $S; logm('세션이 끝나 있음'); }
  elsif ($S && $S->{turns} > 0 && time - $S->{last} >= $IDLE_MIN * 60) { stop_session("$IDLE_MIN 분 쉼"); }
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
  my $pct = $S->{win} ? int(100 * $S->{ctx} / $S->{win} + 0.5) : 0;
  if ($pct >= $COMPACT_PCT) {
    save_state('working', "컨텍스트 $pct% — 압축 중"); logm("컨텍스트 $pct% ($S->{ctx}/$S->{win}) — /compact");
    my $c = send_turn('/compact');
    if ($c->{dead}) { stop_session('압축 중 세션 끊김'); } else { logm('압축 끝'); }
  }
  save_state('idle', '마지막 처리: ' . (split /\n/, $out)[0] . ($r->{ok} ? '' : ' (오류 응답)') . " · 컨텍스트 $pct%");
}
