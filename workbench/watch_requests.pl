#!/usr/bin/perl
# Workbench 요청 감시 (macOS 용, watch_requests.ps1과 같은 동작)
# edit_requests.json에 「대기」 요청이 생기면 ID를 출력하고 종료한다. 50분 동안 없으면 TIMEOUT.
# Claude Code가 백그라운드로 실행하고(perl workbench/watch_requests.pl), 종료 알림을 받으면 요청을 처리한 뒤 다시 실행한다.
# 겹침: 공유 작업 이력(.history/entries)에서 다른 PC가 같은 프레임에 「진행 중」이거나 먼저 등록한 「대기」 요청이 있으면
#  CONFLICT R0xx <다른 이력 id> <in-progress|waiting> 를 함께 출력한다(Claude가 그 요청을 「보류」로 두고 메모를 남긴다).
#  「보류」 중 메모가 「겹침 대기」로 시작하는 요청은 겹침이 풀리면 RESUME R0xx 로 알린다. 1시간 넘게 그대로인 다른 요청은 겹침으로 보지 않는다
use strict;
use warnings;
use utf8;
use FindBin;
use JSON::PP;
use POSIX qw(strftime);
use Time::Local qw(timegm);
use Sys::Hostname;
use Encode ();

$| = 1;
my $max_min = $ARGV[0] || 50;
my $file = "$FindBin::Bin/edit_requests.json";
my $heart = "$FindBin::Bin/.watcher.json";
my $jobs = "$FindBin::Bin/jobs.json";
sub iso_epoch {
  my ($s) = @_; return undef unless defined $s && $s =~ /^(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)(?:\.\d+)?([+-])(\d\d):(\d\d)$/;
  return timegm($6, $5, $4, $3, $2 - 1, $1) - ($8 * 3600 + $9 * 60) * ($7 eq '+' ? 1 : -1);
}
my $hist_dir = "$FindBin::Bin/../.history/entries";
(my $slug = Encode::decode('UTF-8', hostname())) =~ s/\.local$//; $slug = lc $slug; $slug =~ s/[^a-z0-9-]/-/g;   # 서버(guide_server_mac.pl)와 같은 PC 이름 규칙
sub others {
  my @o; opendir(my $dh, $hist_dir) or return ();
  for my $f (grep { /\.json$/ && index($_, "${slug}_") != 0 } readdir $dh) {
    open(my $h, '<:raw', "$hist_dir/$f") or next; local $/; my $d = <$h>; close $h; $d =~ s/^\xEF\xBB\xBF//;
    my $e = eval { decode_json($d) } or next;
    next unless ($e->{kind} // '') eq 'request' && (($e->{status} // '') eq '대기' || ($e->{status} // '') eq '진행 중');
    my $at = iso_epoch($e->{at}) // next; next if time - $at > 3600;
    push @o, $e;
  }
  closedir $dh; return @o;
}
# 겹침: 같은 파일 · 프레임에 다른 PC 요청이 「진행 중」이거나, 내 요청보다 **먼저 등록한** 「대기」 요청
#  등록 시각은 이력의 createdAt(예전 이력에는 없어 마지막 변경 시각 at으로 대신)
sub overlap {
  my ($r, @others) = @_; my $k = $r->{fileKey} // ''; my $rc = iso_epoch($r->{createdAt}) // time;
  return () if ($r->{nodeId} // '') eq '';   # 프레임 지정 없는 요청(일반)은 겹침으로 막지 않는다(Claude가 고칠 화면을 정하고 지금 상태를 다시 읽는다)
  return grep { my $oc = iso_epoch($_->{createdAt} || $_->{at});
    ($_->{fileKey} // '') eq $k && ($_->{nodeId} // '') eq ($r->{nodeId} // '') && ($_->{status} eq '진행 중' || (defined $oc && $oc < $rc)) } @others;
}
# 처리 순서: 우선순위 「높음」 먼저, 같은 우선순위는 먼저 등록한 것부터(등록 시각, 같으면 요청 번호). Claude는 출력된 순서대로 한 건씩 처리한다
sub id_num { (my $n = $_[0]{id} // '') =~ s/\D//g; return $n eq '' ? 0 : $n + 0; }
sub order {
  return sort { (($a->{priority} // '') eq '높음' ? 0 : 1) <=> (($b->{priority} // '') eq '높음' ? 0 : 1)
    || (iso_epoch($a->{createdAt}) // 9e9) <=> (iso_epoch($b->{createdAt}) // 9e9)
    || id_num($a) <=> id_num($b) } @_;
}
my $until = time + $max_min * 60;
my $beat = 0;
while (time < $until) {
  # 감시 중 표시: 시작 안내(Setup.html)가 .watcher.json의 시각으로 「감시 중」을 확인한다
  if (time - $beat >= 20) {
    $beat = time;
    my $z = strftime('%z', localtime); $z =~ s/(\d\d)(\d\d)$/$1:$2/;
    if (open(my $h, '>:raw', $heart)) { print $h '{"at":"' . strftime('%Y-%m-%dT%H:%M:%S', localtime) . $z . '","host":"' . hostname() . '"}'; close $h; }
  }
  my @out;
  if (open(my $h, '<:raw', $file)) {
    local $/; my $d = <$h>; close $h; $d =~ s/^\xEF\xBB\xBF//;
    my $j = eval { decode_json($d) };
    if ($j) {
      my @wait = order grep { ref $_ eq 'HASH' && defined $_->{status} && $_->{status} eq '대기' } @{ $j->{items} || [] };
      my @held = order grep { ref $_ eq 'HASH' && ($_->{status} // '') eq '보류' && index($_->{note} // '', '겹침 대기') == 0 } @{ $j->{items} || [] };
      my @others = (@wait || @held) ? others() : ();
      if (@wait) {
        push @out, 'PENDING ' . join(',', map { $_->{id} } @wait);
        for my $r (@wait) { push @out, "CONFLICT $r->{id} $_->{id} " . ($_->{status} eq '진행 중' ? 'in-progress' : 'waiting') for overlap($r, @others); }
      }
      my @free = grep { !overlap($_, @others) } @held;
      push @out, 'RESUME ' . join(',', map { $_->{id} } @free) if @free;
    }
  }
  # 작업 대기열(jobs.json): 프레임 목록 만들기는 바로, 캡처 받기는 20초 뒤(그동안 Figma 플러그인이 받을 기회)
  if (open(my $h, '<:raw', $jobs)) {
    local $/; my $d = <$h>; close $h; $d =~ s/^\xEF\xBB\xBF//;
    my $q = eval { decode_json($d) };
    if ($q) {
      my @todo = grep { ref $_ eq 'HASH' && ($_->{status} // '') eq '대기' && ($_->{kind} // '') ne 'text' && (($_->{kind} // '') ne 'capture' || (!$_->{auto} && time - (iso_epoch($_->{createdAt}) // time) >= 20)) } @{ $q->{items} || [] };
      push @out, 'JOBS ' . join(',', map { $_->{id} } @todo) if @todo;
    }
  }
  if (@out) { print join("\n", @out) . "\n"; exit 0; }
  sleep 2;
}
print "TIMEOUT\n";
