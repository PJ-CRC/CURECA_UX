#!/usr/bin/perl
# 토큰 사용량 기록 (맥, usage.ps1과 같은 형식): Claude Code 대화 기록(~/.claude/projects/{작업 폴더}/*.jsonl)에서
#  한 작업 구간의 사용량을 더해 .history/usage/{PC}_{요청 ID}.json 으로 남긴다(깃 history 브랜치로 공유).
#  - 서버가 요청을 「완료」로 바꿀 때 자동으로 부른다: --req R012 (구간: 그 요청의 startedAt ~ 지금)
#  - 요청 없이 한 작업: --from 시작시각 --by 작업자 --title 작업 내용 [--frame --node --file-key --file-name --page]
#  - 금액 환산은 workbench/pricing.json 단가(모델별)
use strict;
use warnings;
use utf8;
use FindBin;
use JSON::PP;
use File::Find;
use File::Path qw(make_path);
use POSIX qw(strftime);
use Time::Local qw(timegm);
use Encode qw(decode);
use Sys::Hostname;
use Getopt::Long;

binmode STDOUT, ':encoding(UTF-8)';
my $ROOT = "$FindBin::Bin/..";
$ROOT =~ s{/workbench/\.\.$}{};
my %o = (req => '', from => '', to => '', by => '', title => '', frame => '', node => '', 'file-key' => '', 'file-name' => '', page => '');
GetOptions(\%o, 'req=s', 'from=s', 'to=s', 'by=s', 'title=s', 'frame=s', 'node=s', 'file-key=s', 'file-name=s', 'page=s', 'root=s');
$ROOT = $o{root} if $o{root};
$_ = decode('UTF-8', $_) for values %o;
my $J = JSON::PP->new->utf8;
my $OUT = JSON::PP->new->utf8->canonical->pretty;
sub rd { my ($f) = @_; open(my $h, '<:raw', $f) or return undef; local $/; my $d = <$h>; close $h; $d =~ s/^\xEF\xBB\xBF// if defined $d; return $d; }
sub str { defined $_[0] ? "$_[0]" : '' }
sub iso { my ($t) = @_; my $z = strftime('%z', localtime $t); $z =~ s/(\d\d)(\d\d)$/$1:$2/; return strftime('%Y-%m-%dT%H:%M:%S', localtime $t) . $z; }
sub parse_iso {
  my ($s) = @_; return undef unless defined $s && $s =~ /^(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)(\.\d+)?(Z|([+-])(\d\d):?(\d\d))$/;
  my $t = timegm($6, $5, $4, $3, $2 - 1, $1) + ($7 || 0);
  $t -= ($10 * 3600 + $11 * 60) * ($9 eq '+' ? 1 : -1) if $8 ne 'Z';
  return $t;
}
my $PC_NAME = decode('UTF-8', hostname()); $PC_NAME =~ s/\.local$//;
(my $PC_SLUG = lc $PC_NAME) =~ s/[^a-z0-9-]/-/g;

my %meta = (kind => 'work', reqId => '', by => $o{by}, fileKey => $o{'file-key'}, fileName => $o{'file-name'}, page => $o{page}, frame => $o{frame}, nodeId => $o{node}, text => $o{title});
if ($o{req} ne '') {
  my $r = eval { $J->decode(rd("$ROOT/workbench/edit_requests.json")) } || {};
  my ($it) = grep { ref $_ eq 'HASH' && str($_->{id}) eq $o{req} } @{ $r->{items} || [] };
  unless ($it) { print "NOREQ $o{req}\n"; exit 1; }
  $o{from} = str($it->{startedAt}) if $o{from} eq '';
  $meta{kind} = 'request'; $meta{reqId} = $o{req};
  for my $k (qw(fileKey fileName page frame nodeId text)) { $meta{$k} = str($it->{$k}) if $meta{$k} eq ''; }
  $meta{by} = str($it->{author}) if $meta{by} eq '';
}
my $t0 = parse_iso($o{from});
unless (defined $t0) { print "NOSTART (요청이 「진행 중」이 된 시각이 없습니다. --from으로 시작 시각을 주세요)\n"; exit 1; }
my $t1 = $o{to} ne '' ? parse_iso($o{to}) : time;

my $price = eval { $J->decode(rd("$ROOT/workbench/pricing.json")) } || {};
sub rate {
  my ($m) = @_; my $p = ($price->{models} || {})->{$m} || ($price->{models} || {})->{ str($price->{default}) };
  return $p || { input => 4, output => 20, cacheRead => 0.2, cacheWrite5m => 5, cacheWrite1h => 8 };
}

# 대화 기록 폴더: 작업 폴더 경로의 영문 · 숫자 밖 글자를 -로 바꾼 이름
my $cfg = $ENV{CLAUDE_CONFIG_DIR} || "$ENV{HOME}/.claude";
(my $slug = $ROOT) =~ s{/+$}{}; $slug =~ s/[^A-Za-z0-9]/-/g;
my $dir = "$cfg/projects/$slug";
my %msgs;
if (-d $dir) {
  my @files;
  find(sub { push @files, $File::Find::name if /\.jsonl$/ && (stat $_)[9] >= $t0 }, $dir);
  for my $f (@files) {
    open(my $h, '<:raw', $f) or next;
    while (my $l = <$h>) {
      next unless index($l, '"usage"') >= 0 && $l =~ /"timestamp":"([^"]+)"/;
      my $ts = parse_iso($1); next unless defined $ts && $ts >= $t0 && $ts <= $t1;
      my $e = eval { $J->decode($l) } or next;
      my $m = $e->{message}; next unless ref $m eq 'HASH' && $m->{usage} && $m->{id};
      $msgs{ $m->{id} } = $m;   # 같은 응답이 여러 줄이면 마지막 값
    }
    close $h;
  }
}

my %s = (calls => 0, input => 0, cacheWrite => 0, cacheRead => 0, output => 0, usd => 0);
my %models;
for my $m (values %msgs) {
  my $u = $m->{usage}; my $rt = rate(str($m->{model}));
  my $cw = $u->{cache_creation_input_tokens} || 0; my $w1 = (($u->{cache_creation} || {})->{ephemeral_1h_input_tokens}) || 0; my $w5 = $cw - $w1;
  my ($in, $cr, $out) = map { $_ || 0 } @$u{qw(input_tokens cache_read_input_tokens output_tokens)};
  $s{calls}++; $s{input} += $in; $s{cacheWrite} += $cw; $s{cacheRead} += $cr; $s{output} += $out;
  $s{usd} += ($in * $rt->{input} + $w5 * $rt->{cacheWrite5m} + $w1 * $rt->{cacheWrite1h} + $cr * $rt->{cacheRead} + $out * $rt->{output}) / 1e6;
  $models{ str($m->{model}) }++;
}
unless ($s{calls}) { print 'NOUSAGE ' . iso($t0) . ' ~ ' . iso($t1) . "\n"; exit 0; }

my $name = $PC_SLUG . '_' . ($o{req} ne '' ? $o{req} : strftime('%Y%m%d-%H%M%S', localtime $t1));
my $e = { id => $name, kind => $meta{kind}, reqId => $meta{reqId}, at => iso($t1), from => iso($t0), by => $meta{by}, doneBy => 'Claude', pc => $PC_NAME,
  fileKey => $meta{fileKey}, fileName => $meta{fileName}, page => $meta{page}, frame => $meta{frame}, nodeId => $meta{nodeId}, text => $meta{text},
  models => \%models, calls => $s{calls}, input => $s{input}, cacheWrite => $s{cacheWrite}, cacheRead => $s{cacheRead}, output => $s{output},
  total => $s{input} + $s{cacheWrite} + $s{cacheRead} + $s{output}, usd => sprintf('%.4f', $s{usd}) + 0 };
make_path("$ROOT/.history/usage");
open(my $w, '>:raw', "$ROOT/.history/usage/$name.json") or die "쓸 수 없습니다: $name\n"; print $w $OUT->encode($e); close $w;
if (open(my $n, '>:raw', "$ROOT/workbench/.history_sync_now")) { print $n iso(time); close $n; }
printf "USAGE %s calls=%d input=%d cacheWrite=%d cacheRead=%d output=%d usd=%s\n", $name, @s{qw(calls input cacheWrite cacheRead output)}, $e->{usd};
