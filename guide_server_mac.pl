#!/usr/bin/perl
# Common UX Guide local server (macOS 용, 설치 없이 macOS 기본 Perl로 실행)
#  guide_server.ps1(윈도우)과 같은 기능 · 같은 파일 형식이다. 기능을 바꾸면 두 파일을 함께 고친다.
#  - 가이드 HTML/이미지 정적 서빙
#  - GET/POST /api/requests : 수정 요청 (workbench/edit_requests.json) {action:add|update|delete}
#  - POST /api/upload?name= : 가이드 · 정의서 만들기 참고 파일(20MB 미만) 임시 저장 → {tmp}. jobs add(kind guide)의 files:[{tmp, name}]
#  - POST /api/attach?ext=  : 수정 요청 첨부 이미지(10MB 미만) 임시 저장 → {tmp}. add의 images:[{tmp, small, name}]로 등록(최대 5장)
#  - POST /api/shots        : Figma 플러그인이 보낸 프레임 캡처 저장
#  - GET/POST /api/setup    : 시작 안내 진행 상태 (~/Library/Application Support/UX_AI_TEST_Workbench/setup.json)
#  - POST /api/setup/launch : Figma · Claude 앱 또는 작업 폴더 열기
#  - GET  /start            : 안내를 끝내지 않았으면 Setup.html, 끝냈으면 가이드로 이동
#  - GET/POST /api/history  : 작업 이력(모든 작업자 공유) {action:add|sync}. 완료된 요청은 자동으로 남는다
#                              .history/entries · shots → 깃 history 브랜치 (workbench/history_sync.sh --loop가 5초마다 확인해 받고 올림)
#  - GET  /api/usage        : 토큰 사용량(모든 작업자 공유, .history/usage). 요청이 「완료」가 되면 workbench/usage.pl이
#                              「진행 중」이 된 시각(startedAt)부터의 사용량을 Claude 대화 기록에서 더해 남긴다
#  - GET/POST /api/prototypes : 프로토타입 목록(이 PC에만, Figma가 바뀐 화면 stale) · 지우기 {action:delete} (prototypes/_trash로 옮김)
#  - GET/POST /api/jobs     : 작업 대기열 · 캡처 받기 · 프레임 목록 만들기 · 새 UX 가이드 만들기 {action:add|take|update}
#  - GET/POST /api/guides   : UX 가이드(공유) 목록 · 이 PC의 파일별 작업 기준 가이드 {action:'apply'} (workbench/guide_apply.json, 공유 안 함) · 가이드 수정 {action:'save'}
#                              .history/guides/{id}/ (meta.json · guide.md · images/) → 작업 이력과 함께 깃 history 브랜치로 공유. 보기: UX_Guide.html?g={id}
#  - POST /api/shutdown   : 서버 종료 (페이지 상단 [서버 종료], Figma AI Run.app은 창이 없으므로)
#  - POST /api/alive · /api/bye : 브라우저 탭 열림(20초마다) · 닫힘 {id}. 열린 탭이 모두 닫히면 3초 뒤 서버를 끈다(묻지 않음)
#                              (종료: 서버 종료 / 아니요: Workbench 다시 열기)
# 실행: perl guide_server_mac.pl [포트]   (기본 8765)
use strict;
use warnings;
use utf8;
use FindBin;
use IO::Socket::INET;
use IO::Select;
use JSON::PP;
use MIME::Base64 qw(decode_base64);
use POSIX qw(strftime);
use Time::Local qw(timegm);
use File::Path qw(make_path);
use Encode qw(decode encode);
use Sys::Hostname;

binmode STDOUT, ':encoding(UTF-8)';
$| = 1;
my $PORT = $ARGV[0] || 8765;
my $ROOT = $FindBin::Bin;
my $REQ_FILE = "$ROOT/workbench/edit_requests.json";
my $JOB_FILE = "$ROOT/workbench/jobs.json";
my $PROJ_ROOT = "$ROOT/projects";
my $DEFAULT_KEY = 'etCQFF3CTf1EA6C79d4BBf';   # 기본 프로젝트: UX AI TEST
my $HEART_FILE = "$ROOT/workbench/.watcher.json";
my $AGENT_FILE = "$ROOT/workbench/.agent.json";
my $AGENT_STOP = "$ROOT/workbench/.agent_stop";
my $SETUP_DIR = "$ENV{HOME}/Library/Application Support/UX_AI_TEST_Workbench";
my $SETUP_FILE = "$SETUP_DIR/setup.json";
my $JSON = JSON::PP->new->utf8->canonical->pretty;
my $plugin_seen;
# 작업 이력(공유): 한 건 한 파일. 파일 이름의 PC 이름으로 여러 PC 이력이 겹치지 않는다
my $HIST_DIR = "$ROOT/.history";
my $HIST_ENTRIES = "$HIST_DIR/entries";
my $HIST_SHOTS = "$HIST_DIR/shots";
my $HIST_USAGE = "$HIST_DIR/usage";
# 수정 요청 첨부 이미지: 원본은 이 PC에만(workbench/req_images/{요청 ID}_{n}.{ext}), 이력에는 줄인 사본(.history/attach/{PC}_{요청 ID}_{n}.jpg)만 공유
my $ATTACH_DIR = "$ROOT/workbench/req_images";
my $ATTACH_TMP = "$ATTACH_DIR/_tmp";
my $HIST_ATTACH = "$HIST_DIR/attach";
my $ATTACH_MAX = 10 * 1024 * 1024;
# 가이드 · 정의서 만들기 참고 파일(md · 문서 · 이미지 등): 이 PC에만 workbench/job_files/{작업 ID}/ (먼저 _tmp에 올리고 작업을 만들 때 옮긴다)
my $UP_DIR = "$ROOT/workbench/job_files";
my $UP_TMP = "$UP_DIR/_tmp";
my ($UP_MAX, $UP_MAX_N) = (20 * 1024 * 1024, 10);
my %UP_EXT = map { $_ => 1 } qw(md markdown txt csv tsv json html htm pdf docx xlsx pptx png jpg jpeg gif webp);
# UX 가이드(공유): .history/guides/{id}/ (meta.json · guide.md · rev/ · images/)
# 작업 기준 가이드는 PC(작업자)마다 따로 고른다: workbench/guide_apply.json {fileKey: {guideId, by, at}} (공유하지 않음)
my $GUIDE_ROOT = "$HIST_DIR/guides";
my $PROTO_ROOT = "$ROOT/prototypes";   # 프로토타입(이 PC에만): prototypes/{id}/meta.json · index.html · screens/
my $GUIDE_APPLY = "$ROOT/workbench/guide_apply.json";
my $SYNC_STAT = "$ROOT/workbench/.history_sync.json";
my $PC_NAME = decode('UTF-8', hostname()); $PC_NAME =~ s/\.local$//;
(my $PC_SLUG = lc $PC_NAME) =~ s/[^a-z0-9-]/-/g;
my $SYNC_NOW = "$ROOT/workbench/.history_sync_now";
my ($sync_pid, $sync_want, $sync_last) = (0, 0, 0);
my %TYPES = (html => 'text/html; charset=utf-8', png => 'image/png', css => 'text/css; charset=utf-8', js => 'application/javascript; charset=utf-8',
  json => 'application/json; charset=utf-8', md => 'text/plain; charset=utf-8', svg => 'image/svg+xml', jpg => 'image/jpeg', jpeg => 'image/jpeg', gif => 'image/gif', webp => 'image/webp');

# ── 공통 ──
sub now_iso { my $z = strftime('%z', localtime); $z =~ s/(\d\d)(\d\d)$/$1:$2/; return strftime('%Y-%m-%dT%H:%M:%S', localtime) . $z; }
sub parse_iso {
  my ($s) = @_; return undef unless defined $s && $s =~ /^(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)(?:\.\d+)?([+-])(\d\d):(\d\d)$/;
  my $t = timegm($6, $5, $4, $3, $2 - 1, $1); my $off = ($8 * 3600 + $9 * 60) * ($7 eq '+' ? 1 : -1); return $t - $off;
}
sub read_bytes { my ($f) = @_; open(my $h, '<:raw', $f) or return undef; local $/; my $d = <$h>; close $h; return $d; }
sub write_bytes { my ($f, $d) = @_; open(my $h, '>:raw', $f) or die "파일을 쓸 수 없습니다: $f\n"; print $h $d; close $h; }
sub read_json { my ($f) = @_; my $d = read_bytes($f); return undef unless defined $d; $d =~ s/^\xEF\xBB\xBF//; return $JSON->decode($d); }
sub write_json { my ($f, $o) = @_; write_bytes($f, $JSON->encode($o)); }
sub str { my ($v) = @_; return defined $v ? "$v" : ''; }
sub trim { my ($s) = @_; $s = str($s); $s =~ s/^\s+|\s+$//g; return $s; }
sub app_installed { my ($name) = @_; return (-d "/Applications/$name.app" || -d "$ENV{HOME}/Applications/$name.app") ? 1 : 0; }
# Claude Code 실행 파일: PATH의 claude, 없으면 Claude 데스크톱 앱에 들어 있는 것(앱의 Code 탭이 쓰는 그것, 가장 최근 것)
sub find_claude_code {
  for my $d (split(/:/, $ENV{PATH} || ''), '/usr/local/bin', '/opt/homebrew/bin', "$ENV{HOME}/.local/bin", "$ENV{HOME}/.claude/local") { return "$d/claude" if -x "$d/claude"; }
  my @c = grep { -x $_ && !-d $_ } map { glob("'$_'") } (
    "$ENV{HOME}/Library/Application Support/Claude*/claude-code/*/claude",
    "$ENV{HOME}/Library/Application Support/Claude*/claude-code/*/*/claude",
    "$ENV{HOME}/Library/Application Support/Claude*/*/claude-code/*/*/claude");
  @c = sort { (stat $b)[9] <=> (stat $a)[9] } @c;
  return $c[0];
}
sub in_path {
  my ($cmd) = @_;
  for my $d (split(/:/, $ENV{PATH} || ''), '/usr/local/bin', '/opt/homebrew/bin', "$ENV{HOME}/.local/bin", "$ENV{HOME}/.claude/local") { return 1 if -x "$d/$cmd"; }
  return 0;
}

# ── 시작 안내 ──
sub read_setup {
  my $s = eval { read_json($SETUP_FILE) };
  return $s if ref $s eq 'HASH';
  return { done => JSON::PP::false, user => '', figmaUrl => '', checks => {}, updatedAt => '' };
}
sub setup_env {
  my $hb = eval { read_json($HEART_FILE) };
  my $ago = sub { my ($t) = @_; return defined $t ? int(time - $t) : undef; };
  my $wt = ref $hb eq 'HASH' ? parse_iso($hb->{at}) : undef;
  return {
    root => decode('UTF-8', $ROOT), manifest => decode('UTF-8', "$ROOT/figma_plugin/manifest.json"), os => 'mac', computer => hostname(),
    figmaInstalled => app_installed('Figma') ? JSON::PP::true : JSON::PP::false,
    claudeInstalled => app_installed('Claude') ? JSON::PP::true : JSON::PP::false,
    claudeCli => find_claude_code() ? JSON::PP::true : JSON::PP::false,
    pluginSeenSec => $ago->($plugin_seen), watcherSec => $ago->($wt), watcherHost => ref $hb eq 'HASH' ? str($hb->{host}) : '',
    agent => agent_info(),
    # 맥의 /usr/bin/git은 개발자 도구가 있어야 동작한다
    gitInstalled => (system('/usr/bin/xcode-select -p >/dev/null 2>&1') == 0 || in_path('brew')) ? JSON::PP::true : JSON::PP::false,
    winget => JSON::PP::false,
    historySync => (-f $SYNC_STAT ? eval { read_json($SYNC_STAT) } : undef),
    historySyncing => (-f $SYNC_STAT && eval { read_json($SYNC_STAT)->{busy} }) ? JSON::PP::true : JSON::PP::false,
  };
}

# ── 수정 요청 ──
sub requests_post {
  my ($b) = @_;
  write_bytes($REQ_FILE, '{"version":1,"items":[]}') unless -f $REQ_FILE;
  my $r = read_json($REQ_FILE); my $now = now_iso();
  my @items = grep { ref $_ eq 'HASH' } @{ $r->{items} || [] };
  my $act = str($b->{action});
  if ($act eq 'add') {
    my $txt = trim($b->{text}); die "수정 내용을 입력해 주세요.\n" unless length $txt;
    my $n = 1; for my $i (@items) { (my $v = str($i->{id})) =~ s/\D//g; $v = $v eq '' ? 0 : $v + 0; $n = $v + 1 if $v >= $n; }
    my $rid = sprintf('R%03d', $n); my $imgs = save_attach($rid, $b->{images});
    unshift @items, { id => $rid, nodeId => str($b->{nodeId}), frame => str($b->{frame}), page => str($b->{page}),
      fileKey => str($b->{fileKey}), fileName => str($b->{fileName}), editable => ($b->{editable} ? JSON::PP::true : JSON::PP::false), type => str($b->{type}),
      priority => str($b->{priority}), layout => str($b->{layout}), text => $txt, status => '대기', note => '', author => str($b->{by}), updatedBy => str($b->{by}), createdAt => $now, updatedAt => $now };
    $items[0]{images} = $imgs if @$imgs;
    hist_from_request($items[0]);
  } elsif ($act eq 'update') {
    my ($hit) = grep { str($_->{id}) eq str($b->{id}) } @items; die "요청을 찾지 못했습니다: " . str($b->{id}) . "\n" unless $hit;
    # 「진행 중」이 될 때마다 사용량 구간의 시작 시각을 새로 잡는다
    $hit->{startedAt} = $now if str($b->{status}) eq '진행 중' && str($hit->{status}) ne '진행 중';
    $hit->{status} = str($b->{status}) if str($b->{status}) ne '';
    $hit->{note} = str($b->{note}) if defined $b->{note};
    $hit->{text} = trim($b->{text}) if defined $b->{text} && trim($b->{text}) ne '';
    $hit->{updatedAt} = $now;
    $hit->{updatedBy} = str($b->{by}) if str($b->{by}) ne '';
    hist_from_request($hit);
  } elsif ($act eq 'delete') {
    @items = grep { str($_->{id}) ne str($b->{id}) } @items; hist_remove($b->{id});
    unlink glob(quotemeta("$ATTACH_DIR/" . str($b->{id})) . '_*') if str($b->{id}) =~ /^R\d+$/;
  }
  else { die "알 수 없는 action: $act\n"; }
  $r->{items} = \@items; $r->{version} = ($r->{version} || 0) + 1;
  write_json($REQ_FILE, $r);
  start_usage(str($b->{id})) if $act eq 'update' && str($b->{status}) eq '완료';
}

# ── 프로젝트(Figma 파일) 폴더: projects/{fileKey}/project.json · catalog.json · shots/ · shots_meta.json ──
sub key_ok { my ($k) = @_; return defined $k && $k =~ /^[A-Za-z0-9]{10,64}$/; }
sub proj_dir { return "$PROJ_ROOT/$_[0]"; }
sub read_proj { my ($k) = @_; my $p = eval { read_json(proj_dir($k) . '/project.json') }; return ref $p eq 'HASH' ? $p : undef; }
sub save_proj { my ($p) = @_; make_path(proj_dir($p->{key})); write_json(proj_dir($p->{key}) . '/project.json', $p); }
sub ensure_proj {
  my ($k, $link) = @_; my $p = read_proj($k);
  if (!$p) { $p = { key => $k, name => '', link => str($link), editablePageId => '', editablePageName => '', uxGuideLink => '', createdAt => now_iso() }; save_proj($p); }
  elsif (str($link) ne '' && str($p->{link}) eq '') { $p->{link} = $link; save_proj($p); }
  return $p;
}
sub key_of { my ($u) = @_; return str($u) =~ m{figma\.com/(?:design|file|proto)/([A-Za-z0-9]+)} ? $1 : ''; }
# 작업 링크가 바뀌면 수정 가능 페이지도 바꾼다: 링크의 node-id가 페이지면 그 페이지, 프레임이면 그 프레임이 있는 페이지(프레임 목록 기준)
#  catalog.json은 배열 모양이 바뀌지 않게 글자만 고친다(editable · editablePageId)
#  정했으면 1, 링크에 노드가 없거나 목록에서 그 노드를 찾지 못하면 0
sub set_editable_page {
  my ($k, $url) = @_;
  return 0 unless str($url) =~ /[?&]node-id=(\d+)[-:](\d+)/; my $nid = "$1:$2";
  my $cf = proj_dir($k) . '/catalog.json'; return 0 unless -f $cf;
  my $txt = read_bytes($cf); my $cat = eval { $JSON->decode($txt) } or return 0;
  my ($pg) = grep { str($_->{id}) eq $nid } @{ $cat->{pages} || [] };
  ($pg) = grep { my $p = $_; ref $p->{frames} eq 'ARRAY' && grep { ref $_ eq 'ARRAY' && str($_->[0]) eq $nid } @{ $p->{frames} } } @{ $cat->{pages} || [] } unless $pg;
  return 0 unless $pg;
  my $pid = quotemeta($pg->{id});
  $txt =~ s/("editable"\s*:\s*)true/${1}false/g;
  $txt =~ s/("id"\s*:\s*"$pid"(?:(?!"id"\s*:).)*?"editable"\s*:\s*)false/${1}true/s;
  $txt =~ s/("editablePageId"\s*:\s*)"[^"]*"/${1}"$pg->{id}"/;
  write_bytes($cf, $txt);
  my $p = read_proj($k); if ($p) { $p->{editablePageId} = $pg->{id}; $p->{editablePageName} = $pg->{name}; save_proj($p); }
  return 1;
}
# 프로토타입 목록(이 PC에만): prototypes/{id}/meta.json + Figma가 바뀐 화면(stale)
#  바뀐 화면 = 프로토타입을 맞춘 뒤(syncedAt) 캡처가 새로 들어온 프레임(shots_meta) · 다른 작업자가 완료한 요청(공유 이력)의 프레임
sub prototypes_get {
  my @list; opendir(my $dh, $PROTO_ROOT) or return { items => [] };
  my @hist;
  if (opendir(my $hh, $HIST_ENTRIES)) { for my $f (grep { /\.json$/ } readdir $hh) { my $e = eval { read_json("$HIST_ENTRIES/$f") }; push @hist, $e if ref $e eq 'HASH' && str($e->{kind}) eq 'request' && str($e->{status}) eq '완료'; } closedir $hh; }
  my %shot;
  for my $id (sort grep { !/^[._]/ && -d "$PROTO_ROOT/$_" } readdir $dh) {
    my $m = eval { read_json("$PROTO_ROOT/$id/meta.json") }; next unless ref $m eq 'HASH';
    my $k = str($m->{fileKey});
    $shot{$k} //= (eval { read_json(proj_dir($k) . '/shots_meta.json') } || {}) if $k ne '';
    my $since = parse_iso($m->{syncedAt}) // 0; my @stale;
    for my $fr (@{ ref $m->{frames} eq 'ARRAY' ? $m->{frames} : [] }) {
      my ($why, $at) = ('', '');
      my $s = $shot{$k} && ref $shot{$k} eq 'HASH' ? $shot{$k}{ str($fr->{nodeId}) } : undef;
      if (ref $s eq 'HASH' && (parse_iso($s->{at}) // 0) > $since) { $why = 'Figma 캡처가 새로 들어옴'; $at = str($s->{at}); }
      my ($h) = grep { str($_->{nodeId}) eq str($fr->{nodeId}) && (str($_->{fileKey}) eq $k || (str($_->{fileKey}) eq '' && $k eq $DEFAULT_KEY)) && (parse_iso($_->{at}) // 0) > $since } @hist;
      if ($h) { $why = str($h->{by}) . ' ' . str($h->{reqId}) . ' 수정 완료'; $at = str($h->{at}); }
      push @stale, { nodeId => str($fr->{nodeId}), name => str($fr->{name}), why => $why, at => $at } if $why ne '';
    }
    $m->{stale} = \@stale; $m->{dir} = "prototypes/$id";
    push @list, $m;
  }
  closedir $dh;
  return { items => [ sort { str($b->{updatedAt}) cmp str($a->{updatedAt}) } @list ] };
}
# 프로토타입 지우기: 바로 지우지 않고 prototypes/_trash/ 로 옮긴다
sub prototypes_post {
  my ($b) = @_;
  die "알 수 없는 작업입니다.\n" unless str($b->{action}) eq 'delete';
  my $id = str($b->{id}); die "프로토타입을 찾지 못했습니다: $id\n" unless $id =~ /^[A-Za-z0-9_-]{1,64}$/ && -d "$PROTO_ROOT/$id";
  make_path("$PROTO_ROOT/_trash");
  rename("$PROTO_ROOT/$id", "$PROTO_ROOT/_trash/${id}_" . strftime('%Y%m%d-%H%M%S', localtime)) or die "옮기지 못했습니다: $!\n";
  return { ok => JSON::PP::true };
}
# 프로젝트 추가(링크) · 작업 페이지 바꾸기(Workbench 탭 · 「이 페이지를 작업 페이지로」)
#  {action:'add', link} → 그 파일을 프로젝트로 등록(이미 있으면 그대로)
#  {action:'editable', key, pageId} → 작업 링크의 node-id를 그 페이지로 바꾼다 = 수정 가능 페이지가 바뀐다
sub projects_post {
  my ($b, $origin) = @_;
  die "허용되지 않은 요청입니다.\n" if defined $origin && $origin ne '' && $origin ne "http://localhost:$PORT";
  my $act = str($b->{action});
  if ($act eq 'add') {
    my $k = key_of($b->{link}); die "Figma 파일 링크가 아닙니다.\n" unless key_ok($k);
    my $p = ensure_proj($k, str($b->{link}));
    set_editable_page($k, $p->{link}) if str($p->{link}) ne '';
    return { ok => JSON::PP::true, project => read_proj($k) };
  }
  if ($act eq 'editable') {
    my ($k, $pid) = (str($b->{key}), str($b->{pageId}));
    die "잘못된 파일 키입니다.\n" unless key_ok($k);
    die "잘못된 페이지 id입니다.\n" unless $pid =~ /^\d+:\d+$/;
    my $p = ensure_proj($k, ''); (my $nid = $pid) =~ s/:/-/; my $old = str($p->{link}); my $new;
    if ($old =~ m{figma\.com/(?:design|file|proto)/}) {
      ($new = $old) =~ s/#.*$//;
      if ($new =~ /[?&]node-id=/) { $new =~ s/([?&]node-id=)[^&#]*/$1$nid/; }
      else { $new .= ($new =~ /\?/ ? '&' : '?') . "node-id=$nid"; }
    } else { $new = "https://www.figma.com/design/$k/file?node-id=$nid"; }
    # 페이지를 먼저 확인 · 반영하고 성공했을 때만 링크를 저장한다(실패하면 링크 · 수정 가능 페이지 모두 그대로)
    die "프레임 목록에서 그 페이지를 찾지 못했습니다.\n" unless set_editable_page($k, $new);
    $p = read_proj($k); $p->{link} = $new; save_proj($p);
    # 시작 안내의 작업 링크가 이 파일이면 그것도 같이 바꾼다(플러그인 · Workbench 기본 프로젝트가 그 링크를 본다)
    my $s = read_setup();
    if (key_of($s->{figmaUrl}) eq $k) { $s->{figmaUrl} = $new; $s->{updatedAt} = now_iso(); make_path($SETUP_DIR); write_json($SETUP_FILE, $s); }
    return { ok => JSON::PP::true, project => read_proj($k) };
  }
  die "알 수 없는 작업입니다.\n";
}
# 서버를 켤 때: 모든 프로젝트의 수정 가능 페이지를 작업 링크 기준으로 다시 맞춘다
#  (꺼져 있는 동안 플러그인 · 프레임 목록 작업이 옛 링크 기준 값을 남겼을 수 있다)
sub fix_editable_pages {
  opendir(my $dh, $PROJ_ROOT) or return;
  for my $k (grep { key_ok($_) && -d "$PROJ_ROOT/$_" } readdir $dh) { my $p = read_proj($k); set_editable_page($k, $p->{link}) if $p && str($p->{link}) ne ''; }
  closedir $dh;
}

# ── 캡처 {fileKey, nodeId, png(base64, PNG 또는 JPG), w, h, by, name} → projects/{fileKey}/shots ──
sub shots_post {
  my ($b) = @_; my $key = str($b->{fileKey}) || $DEFAULT_KEY; die "잘못된 파일 키입니다.\n" unless key_ok($key);
  my $nid = str($b->{nodeId}); die "잘못된 nodeId: $nid\n" unless $nid =~ /^\d+:\d+$/;
  my $img = decode_base64(str($b->{png}));
  my $ext = substr($img, 0, 4) eq "\x89PNG" ? 'png' : substr($img, 0, 2) eq "\xFF\xD8" ? 'jpg' : '';
  die "PNG · JPG 이미지가 아닙니다.\n" unless $ext;
  ensure_proj($key, '');
  my $dir = proj_dir($key) . '/shots'; make_path($dir);
  (my $fn = $nid) =~ s/:/-/;
  for my $x (qw(png jpg)) { unlink "$dir/$fn.$x" if $x ne $ext && -f "$dir/$fn.$x"; }
  write_bytes("$dir/$fn.$ext", $img);
  my $mf = proj_dir($key) . '/shots_meta.json';
  my $meta = (-f $mf) ? read_json($mf) : {};
  $meta->{$nid} = { at => now_iso(), w => int($b->{w} || 0), h => int($b->{h} || 0), by => str($b->{by}), name => str($b->{name}), ext => $ext };
  write_json($mf, $meta);
  return { ok => JSON::PP::true, fileKey => $key, nodeId => $nid, bytes => length($img), ext => $ext };
}

# ── 작업 이력(공유) ──
# 그 프레임의 지금 캡처를 이력용으로 남긴다: 크기는 그대로(원본), PNG는 JPG(품질 85, sips)로 바꿔 용량만 줄인다. 바꾸지 못하면 그대로 복사
sub copy_hist_shot {
  my ($key, $nid, $name) = @_; $key = str($key) || $DEFAULT_KEY;
  return '' unless key_ok($key) && str($nid) =~ /^\d+:\d+$/;
  (my $fn = $nid) =~ s/:/-/; my $src;
  for my $x (qw(png jpg)) { $src = proj_dir($key) . "/shots/$fn.$x" if -f proj_dir($key) . "/shots/$fn.$x"; }
  return '' unless $src;
  make_path($HIST_SHOTS);
  my $dst = "$HIST_SHOTS/$name.jpg";
  if (system('/usr/bin/sips', '-s', 'format', 'jpeg', '-s', 'formatOptions', '85', $src, '--out', $dst) != 0 || !-f $dst) {
    my ($ext) = $src =~ /(\.\w+)$/; $dst = "$HIST_SHOTS/$name$ext"; write_bytes($dst, read_bytes($src));
  }
  (my $base = $dst) =~ s{^.*/}{};
  return "shots/$base";
}
sub save_hist_entry { my ($name, $e) = @_; make_path($HIST_ENTRIES); write_json("$HIST_ENTRIES/$name.json", $e); $sync_want = 1; }
# 요청 → 이력 한 건 ({PC}_{요청 ID}). 등록 · 상태 변경(대기 · 진행 중 · 보류 · 완료)마다 덮어쓰고, 삭제하면 지운다
#  캡처는 완료일 때만(완료 직전에 캡처를 갱신하므로) 남긴다
sub hist_shots_rm { my ($name) = @_; unlink glob(quotemeta("$HIST_SHOTS/$name") . '.*'); }
sub hist_from_request {
  my ($r) = @_; my $name = $PC_SLUG . '_' . str($r->{id});
  my $shot = '';
  if (str($r->{status}) eq '완료') { $shot = copy_hist_shot($r->{fileKey}, $r->{nodeId}, $name); } else { hist_shots_rm($name); }
  # 첨부 이미지는 줄인 사본만 이력에 둔다(처음 한 번 복사)
  my @att; my $n = 0;
  for my $a (grep { ref $_ eq 'HASH' } @{ ref $r->{images} eq 'ARRAY' ? $r->{images} : [] }) {
    $n++; my $src = str($a->{small}) ne '' ? "$ROOT/" . str($a->{small}) : ''; next unless $src && -f $src;
    my $dst = "$HIST_ATTACH/${name}_$n.jpg";
    unless (-f $dst) { make_path($HIST_ATTACH); write_bytes($dst, read_bytes($src)); }
    push @att, "attach/${name}_$n.jpg";
  }
  save_hist_entry($name, { id => $name, kind => 'request', status => str($r->{status}), at => str($r->{updatedAt}), createdAt => str($r->{createdAt}), by => str($r->{author}), doneBy => str($r->{updatedBy}), pc => $PC_NAME,
    reqId => str($r->{id}), fileKey => str($r->{fileKey}), fileName => str($r->{fileName}), page => str($r->{page}), frame => str($r->{frame}), nodeId => str($r->{nodeId}),
    type => str($r->{type}), layout => str($r->{layout}), text => str($r->{text}), note => str($r->{note}), shot => $shot, images => \@att });
}
# 첨부 이미지: 먼저 올린 임시 파일(/api/attach)을 요청 ID 이름으로 옮긴다(최대 5장)
#  원본 workbench/req_images/{id}_{n}.{ext}, 줄인 사본(긴 변 1600 JPG, 브라우저가 만든다) {id}_{n}_s.jpg
sub save_attach {
  my ($id, $list) = @_;
  unlink glob(quotemeta("$ATTACH_DIR/$id") . '_*');   # 지운 요청의 ID를 다시 쓰는 경우
  my @out; my $n = 0;
  for my $a (grep { ref $_ eq 'HASH' } @{ ref $list eq 'ARRAY' ? $list : [] }) {
    last if $n >= 5;
    my ($t, $s) = (str($a->{tmp}), str($a->{small}));
    next unless $t =~ /^[0-9a-f]{32}\.(png|jpg|gif|webp)$/ && -f "$ATTACH_TMP/$t";
    my $ext = $1; $n++;
    my $f = "${id}_$n.$ext"; rename("$ATTACH_TMP/$t", "$ATTACH_DIR/$f") or next;
    my $sf = '';
    if ($s =~ /^[0-9a-f]{32}\.jpg$/ && -f "$ATTACH_TMP/$s") { $sf = "${id}_${n}_s.jpg"; rename("$ATTACH_TMP/$s", "$ATTACH_DIR/$sf") or $sf = ''; }
    push @out, { file => "workbench/req_images/$f", small => $sf ? "workbench/req_images/$sf" : '', name => substr(str($a->{name}), 0, 80), size => -s "$ATTACH_DIR/$f" };
  }
  return \@out;
}
# 참고 파일: 임시 파일(/api/upload)을 workbench/job_files/{작업 ID}/{원래 이름}으로 옮긴다(이름이 겹치면 앞에 번호)
sub save_uploads {
  my ($jid, @list) = @_; my @out; my $dir = "$UP_DIR/$jid"; my $n = 0;
  for my $a (@list) {
    (my $nm = str($a->{name})) =~ s/[\\\/:*?"<>|\x00-\x1f]/_/g; $nm = trim($nm); $nm = str($a->{tmp}) if $nm eq '';
    $nm = substr($nm, -100) if length($nm) > 100;
    make_path($dir); $n++; $nm = "${n}_$nm" if -e "$dir/" . Encode::encode('UTF-8', $nm);
    my $fs = "$dir/" . Encode::encode('UTF-8', $nm);   # 폴더 경로는 이미 바이트, 이름만 UTF-8로
    rename("$UP_TMP/" . str($a->{tmp}), $fs) or next;
    push @out, { path => "workbench/job_files/$jid/$nm", name => $nm, size => -s $fs };
  }
  return \@out;
}
# 참고 파일 올리기: 본문 = 파일 바이트, ?name=원래 이름(UTF-8 주소 인코딩) → {tmp, name, size}
sub upload_post {
  my ($target, $raw) = @_;
  my ($q) = $target =~ /[?&]name=([^&]*)/; $q = str($q); $q =~ tr/+/ /; $q =~ s/%([0-9A-Fa-f]{2})/chr(hex($1))/eg;
  my $nm = eval { Encode::decode('UTF-8', $q) } // $q;
  my ($ext) = $nm =~ /\.([A-Za-z0-9]+)$/; $ext = lc(str($ext));
  die "올릴 수 없는 파일 형식입니다: $nm (가능: " . join(', ', sort keys %UP_EXT) . ")\n" unless $UP_EXT{$ext};
  die "파일은 하나에 20MB 미만만 올릴 수 있습니다.\n" if !length($raw) || length($raw) >= $UP_MAX;
  make_path($UP_TMP);
  # 작업으로 만들지 않고 남은 임시 파일은 6시간 뒤 지운다
  for my $old (glob(quotemeta($UP_TMP) . '/*')) { unlink $old if -f $old && time - (stat $old)[9] > 6 * 3600; }
  my $tmp = join('', map { sprintf('%04x', int(rand(65536))) } 1 .. 8) . ".$ext";
  write_bytes("$UP_TMP/$tmp", $raw);
  return { tmp => $tmp, name => $nm, size => length($raw) };
}
sub attach_post {
  my ($target, $raw) = @_;
  my ($ext) = $target =~ /[?&]ext=([A-Za-z]+)/; $ext = lc(str($ext)); $ext = 'jpg' if $ext eq 'jpeg';
  die "이미지(PNG · JPG · GIF · WEBP)만 첨부할 수 있습니다.\n" unless $ext =~ /^(png|jpg|gif|webp)$/;
  die "이미지는 한 장에 10MB 미만만 첨부할 수 있습니다.\n" if !length($raw) || length($raw) >= $ATTACH_MAX;
  make_path($ATTACH_TMP);
  # 등록하지 않고 남은 임시 파일은 6시간 뒤 지운다
  for my $old (glob(quotemeta($ATTACH_TMP) . '/*')) { unlink $old if -f $old && time - (stat $old)[9] > 6 * 3600; }
  my $tmp = join('', map { sprintf('%04x', int(rand(65536))) } 1 .. 8) . ".$ext";
  write_bytes("$ATTACH_TMP/$tmp", $raw);
  return { tmp => $tmp };
}
# ── 계정 · 메뉴 권한 ── (윈도우 guide_server.ps1과 같다)
#  계정 = .history/accounts/{id}.json (작업 이력과 함께 깃으로 모든 PC에 공유, 한 계정 한 파일)
#   {id, name, admin(최고관리자 1명), menus:[메뉴 키], salt, hash(PBKDF2-SHA256 100000회, base64), iter, active, createdAt, updatedAt, pwAt}
#  로그인은 PC마다 유지한다: setup.json의 login {id, pwAt}. 계정 파일이 하나도 없으면 로그인 없이 모두 쓴다
my $ACCT_DIR = "$HIST_DIR/accounts";
my @MENUS = (
  { key => 'setup', label => '시작 안내', pages => ['Setup.html'], always => 1 },   # 권한 설정 없이 누구나
  { key => 'guide', label => 'UX 문서', pages => ['Common_UX_Guide.html', 'UX_Guide.html'] },
  { key => 'workbench', label => 'Figma Workbench', pages => ['Figma_Workbench.html'] },
  { key => 'history', label => '변경 이력', pages => ['Change_History.html'] },
  { key => 'usage', label => '사용량 통계', pages => ['Usage_Stats.html'] },
  { key => 'proto', label => '프로토타입', pages => ['Prototypes.html', 'Prototype.html', 'Assay_Pack_Prototype.html'] },
  { key => 'accounts', label => '계정 관리', pages => ['Accounts.html'], admin => 1 },
);
my @MENU_KEYS = map { $_->{key} } grep { !$_->{admin} && !$_->{always} } @MENUS;   # 계정마다 고르는 메뉴
my @ALWAYS_KEYS = map { $_->{key} } grep { $_->{always} } @MENUS;
sub pw_hash {
  my ($pw, $salt, $iter) = @_; require Digest::SHA; require MIME::Base64;
  my $p = encode('UTF-8', str($pw)); my $u = Digest::SHA::hmac_sha256($salt . pack('N', 1), $p); my $t = $u;
  for (2 .. $iter) { $u = Digest::SHA::hmac_sha256($u, $p); $t ^= $u; }
  return MIME::Base64::encode_base64($t, '');
}
sub new_salt { my $b = ''; if (open(my $r, '<:raw', '/dev/urandom')) { read($r, $b, 16); close $r; } $b = join('', map { chr(int(rand(256))) } 1 .. 16) if length($b) != 16; return $b; }
sub set_pw { my ($a, $pw) = @_; my $s = new_salt(); require MIME::Base64; $a->{salt} = MIME::Base64::encode_base64($s, ''); $a->{iter} = 100000; $a->{hash} = pw_hash($pw, $s, 100000); $a->{pwAt} = now_iso(); }
sub test_pw {
  my ($a, $pw) = @_; return 0 unless ref $a eq 'HASH' && str($a->{salt}) ne '' && str($a->{hash}) ne '';
  my $h = pw_hash($pw, decode_base64($a->{salt}), int($a->{iter} || 100000)); my $x = str($a->{hash});
  return 0 unless length($h) == length($x);
  my $d = 0; $d |= ord(substr($h, $_, 1)) ^ ord(substr($x, $_, 1)) for 0 .. length($h) - 1;   # 끝까지 비교(시간 차가 생기지 않게)
  return $d == 0;
}
sub read_accounts {
  my @l; opendir(my $dh, $ACCT_DIR) or return ();
  for my $f (sort grep { /\.json$/ } readdir $dh) { my $a = eval { read_json("$ACCT_DIR/$f") }; push @l, $a if ref $a eq 'HASH' && str($a->{id}) ne ''; }
  closedir $dh; return @l;
}
sub read_account { my ($id) = @_; return undef unless str($id) =~ /^[A-Za-z0-9._-]{3,32}$/; my $a = eval { read_json("$ACCT_DIR/" . lc($id) . '.json') }; return ref $a eq 'HASH' ? $a : undef; }
sub save_account { my ($a) = @_; make_path($ACCT_DIR); $a->{updatedAt} = now_iso(); write_json("$ACCT_DIR/" . lc($a->{id}) . '.json', $a); $sync_want = 1; }
sub auth_required { opendir(my $dh, $ACCT_DIR) or return 0; my $n = grep { /\.json$/ } readdir $dh; closedir $dh; return $n > 0; }
sub current_user {
  my $s = read_setup(); return undef unless ref $s->{login} eq 'HASH' && str($s->{login}{id}) ne '';
  my $a = read_account($s->{login}{id});
  return undef if !$a || (defined $a->{active} && !$a->{active}) || str($a->{pwAt}) ne str($s->{login}{pwAt});
  return $a;
}
sub pick_menus { my ($a) = @_; my %ok = map { $_ => 1 } @MENU_KEYS; return grep { $ok{$_} } @{ ref $a->{menus} eq 'ARRAY' ? $a->{menus} : [] }; }
sub user_menus { my ($a) = @_; return () unless $a; return map { $_->{key} } @MENUS if $a->{admin}; my %p = map { $_ => 1 } pick_menus($a); return map { $_->{key} } grep { $_->{always} || $p{ $_->{key} } } @MENUS; }
sub me_info {
  my $req = auth_required(); my $u = $req ? current_user() : undef;
  my @allowed = $req ? user_menus($u) : (@MENU_KEYS, @ALWAYS_KEYS); my %al = map { $_ => 1 } @allowed;
  # 처음 열 페이지: 고른 메뉴 중 첫째(없으면 시작 안내)
  my ($first) = map { $_->{pages}[0] } grep { !$_->{always} && $al{ $_->{key} } } @MENUS;
  ($first) = map { $_->{pages}[0] } grep { $al{ $_->{key} } } @MENUS unless $first;
  return { required => $req ? JSON::PP::true : JSON::PP::false,
    user => $u ? { id => $u->{id}, name => $u->{name}, admin => $u->{admin} ? JSON::PP::true : JSON::PP::false, menus => [@allowed] } : undef,
    menus => [ map { { key => $_->{key}, label => $_->{label}, page => $_->{pages}[0], pages => $_->{pages}, admin => $_->{admin} ? JSON::PP::true : JSON::PP::false } } @MENUS ],
    allowed => [@allowed], first => $first || 'Account.html' };
}
sub write_login {
  my ($a) = @_; my $s = read_setup();
  if ($a) { $s->{login} = { id => $a->{id}, pwAt => $a->{pwAt}, at => now_iso() }; $s->{user} = str($a->{name}); } else { delete $s->{login}; }
  make_path($SETUP_DIR); write_json($SETUP_FILE, $s);
}
sub public_account { my ($a) = @_; return { id => $a->{id}, name => $a->{name}, admin => $a->{admin} ? JSON::PP::true : JSON::PP::false, menus => [ $a->{admin} ? user_menus($a) : pick_menus($a) ],
  active => (defined $a->{active} && !$a->{active}) ? JSON::PP::false : JSON::PP::true, createdAt => $a->{createdAt}, updatedAt => $a->{updatedAt}, pwAt => $a->{pwAt} }; }
sub accounts_post {
  my ($b) = @_; my $id = lc(trim($b->{id})); my %ok = map { $_ => 1 } @MENU_KEYS;
  my @menus = grep { $ok{$_} } @{ ref $b->{menus} eq 'ARRAY' ? $b->{menus} : [] }; my $act = str($b->{action}); my $pw = str($b->{pw});
  if ($act eq 'add') {
    die "아이디는 영문 소문자 · 숫자 · . _ - 로 3~32자입니다.\n" unless $id =~ /^[a-z0-9._-]{3,32}$/;
    die "이미 있는 아이디입니다: $id\n" if read_account($id);
    die "이름을 입력해 주세요.\n" if trim($b->{name}) eq '';
    die "비밀번호는 8자 이상이어야 합니다.\n" if length($pw) < 8;
    my $cu = current_user();
    my $a = { id => $id, name => trim($b->{name}), admin => JSON::PP::false, menus => \@menus, active => JSON::PP::true, createdAt => now_iso(), createdBy => $cu ? $cu->{id} : '' };
    set_pw($a, $pw); save_account($a);
  } elsif ($act eq 'update') {
    my $a = read_account($id) or die "계정을 찾지 못했습니다: $id\n";
    $a->{name} = trim($b->{name}) if trim($b->{name}) ne '';
    unless ($a->{admin}) { $a->{menus} = \@menus if exists $b->{menus}; $a->{active} = $b->{active} ? JSON::PP::true : JSON::PP::false if exists $b->{active}; }
    if (length $pw) { die "비밀번호는 8자 이상이어야 합니다.\n" if length($pw) < 8; set_pw($a, $pw); }
    save_account($a);
    my $s = read_setup(); write_login($a) if ref $s->{login} eq 'HASH' && str($s->{login}{id}) eq $id;   # 내 계정이면 이 PC 로그인도 새 값으로
  } elsif ($act eq 'delete') {
    my $a = read_account($id) or die "계정을 찾지 못했습니다: $id\n";
    die "최고관리자 계정은 지울 수 없습니다.\n" if $a->{admin};
    unlink "$ACCT_DIR/$id.json"; $sync_want = 1;
  } else { die "알 수 없는 작업: $act\n"; }
  return { ok => JSON::PP::true };
}
sub hist_remove { my ($id) = @_; my $name = $PC_SLUG . '_' . str($id); unlink "$HIST_ENTRIES/$name.json"; hist_shots_rm($name); unlink glob(quotemeta("$HIST_ATTACH/$name") . '_*'); $sync_want = 1; }
# 시작할 때: 이력에 없거나 내용(상태 · 시각)이 다른 요청을 맞춘다
sub hist_backfill {
  return unless -f $REQ_FILE; my $r = eval { read_json($REQ_FILE) } or return;
  for my $i (grep { ref $_ eq 'HASH' } @{ $r->{items} || [] }) {
    my $e = eval { read_json("$HIST_ENTRIES/${PC_SLUG}_" . str($i->{id}) . '.json') };
    hist_from_request($i) unless ref $e eq 'HASH' && str($e->{status}) eq str($i->{status}) && str($e->{at}) eq str($i->{updatedAt}) && (str($i->{createdAt}) eq '' || str($e->{createdAt}) ne '' || str($i->{status}) eq '완료');
  }
}
sub hist_get {
  my @items;
  if (opendir(my $dh, $HIST_ENTRIES)) { for my $f (sort grep { /\.json$/ } readdir $dh) { my $e = eval { read_json("$HIST_ENTRIES/$f") }; push @items, $e if ref $e eq 'HASH'; } closedir $dh; }
  my $st = -f $SYNC_STAT ? eval { read_json($SYNC_STAT) } : undef;
  return { pc => $PC_NAME, pcSlug => $PC_SLUG, syncing => (ref $st eq 'HASH' && $st->{busy} ? JSON::PP::true : JSON::PP::false), sync => $st, items => \@items };
}
sub hist_post {
  my ($b) = @_; my $act = str($b->{action});
  if ($act eq 'add') {
    my ($title, $text) = (trim($b->{title}), trim($b->{text}));
    die "작업 내용을 입력해 주세요.\n" unless length($title) || length($text);
    my $name = $PC_SLUG . '_' . strftime('%Y%m%d-%H%M%S', localtime);
    save_hist_entry($name, { id => $name, kind => 'work', at => now_iso(), by => str($b->{by}), doneBy => str($b->{doneBy}), pc => $PC_NAME,
      reqId => '', fileKey => str($b->{fileKey}), fileName => str($b->{fileName}), page => str($b->{page}), frame => str($b->{frame}), nodeId => str($b->{nodeId}),
      type => str($b->{type}), text => (length $title ? $title : $text), note => (length $title ? $text : ''), shot => copy_hist_shot($b->{fileKey}, $b->{nodeId}, $name) });
  } elsif ($act eq 'sync') { $sync_want = 1; sync_tick(); select(undef, undef, undef, 0.7); }
  else { die "알 수 없는 action: $act\n"; }
  return hist_get();
}
# 토큰 사용량(공유): 한 건 한 파일 .history/usage/{PC}_{요청 ID}.json
sub usage_get {
  my @items;
  if (opendir(my $dh, $HIST_USAGE)) { for my $f (sort grep { /\.json$/ } readdir $dh) { my $e = eval { read_json("$HIST_USAGE/$f") }; push @items, $e if ref $e eq 'HASH'; } closedir $dh; }
  my $pr = eval { read_json("$ROOT/workbench/pricing.json") };
  return { pc => $PC_NAME, pcSlug => $PC_SLUG, pricing => $pr, items => \@items };
}
# UX 가이드(공유) 목록과 이 PC의 파일별 작업 기준 가이드
sub guides_get {
  my (@list, %applied);
  if (opendir(my $dh, $GUIDE_ROOT)) {
    for my $d (grep { !/^[._]/ && -d "$GUIDE_ROOT/$_" } readdir $dh) {
      my $m = eval { read_json("$GUIDE_ROOT/$d/meta.json") }; next unless ref $m eq 'HASH';
      # 수정본: rev/{시각}_{PC}.md (+ 같은 이름 .json {by, at, note, base}). 가장 최근 수정본이 지금 내용이다(없으면 guide.md)
      my @revs;
      if (opendir(my $rh, "$GUIDE_ROOT/$d/rev")) {
        for my $f (sort grep { /\.md$/ } readdir $rh) {
          (my $r = $f) =~ s/\.md$//; my $i = eval { read_json("$GUIDE_ROOT/$d/rev/$r.json") } || {};
          push @revs, { rev => $r, at => str($i->{at}), by => str($i->{by}), note => str($i->{note}), base => str($i->{base}) };
        }
        closedir $rh;
      }
      my $last = $revs[-1];
      $m->{mdPath} = $last ? ".history/guides/$d/rev/$last->{rev}.md" : ".history/guides/$d/guide.md";
      $m->{rev} = $last ? $last->{rev} : ''; $m->{revs} = \@revs;
      $m->{updatedAt} = $last->{at} if $last && $last->{at} ne '';
      push @list, $m;
    }
    closedir $dh;
  }
  if (-f $GUIDE_APPLY) { my $ga = eval { read_json($GUIDE_APPLY) }; %applied = %$ga if ref $ga eq 'HASH'; }
  return { items => [sort { str($b->{updatedAt}) cmp str($a->{updatedAt}) } @list], applied => \%applied };
}
# 요청이 끝나면 그 구간의 사용량을 따로 띄운 프로세스가 남긴다(대화 기록을 읽느라 몇 초 걸릴 수 있어 서버를 막지 않는다)
sub start_usage {
  my ($id) = @_; return unless $id =~ /^R\d+$/;
  my $pid = fork();
  if (defined $pid && $pid == 0) {
    # 손자 프로세스로 띄워 서버가 기다리지(waitpid) 않아도 좀비가 남지 않게 한다
    my $p2 = fork(); if (defined $p2 && $p2 == 0) { exec($^X, "$ROOT/workbench/usage.pl", '--req', $id) or POSIX::_exit(1); }
    POSIX::_exit(0);
  }
  waitpid($pid, 0) if $pid;
}
# 깃 받기 · 올리기는 따로 띄운 반복 프로세스(5초마다 확인)가 한다. 죽으면 30초 뒤 다시 띄운다.
# 바로 맞춰야 할 때(이력이 생김 · [깃 동기화])는 .history_sync_now 파일로 알린다
sub sync_tick {
  if ($sync_pid && waitpid($sync_pid, POSIX::WNOHANG()) != 0) { $sync_pid = 0; }
  if (!$sync_pid && time - $sync_last >= 30) {
    $sync_last = time;
    $ENV{WB_USER} = encode('UTF-8', str(read_setup()->{user}));   # 깃 사용자 설정이 없는 PC는 작업자 이름으로 커밋
    my $pid = fork();
    if (defined $pid && $pid == 0) { exec('/bin/bash', "$ROOT/workbench/history_sync.sh", '--loop', getppid()) or POSIX::_exit(1); }
    $sync_pid = $pid if defined $pid;
  }
  if ($sync_want) { $sync_want = 0; write_bytes($SYNC_NOW, now_iso()); }
}

# ── 프로젝트 목록 ──
sub projects_get {
  my @list;
  if (opendir(my $dh, $PROJ_ROOT)) {
    for my $k (sort grep { key_ok($_) && -d "$PROJ_ROOT/$_" } readdir $dh) {
      my $p = read_proj($k) or next;
      my $shots = 0; if (opendir(my $sh, proj_dir($k) . '/shots')) { $shots = scalar grep { /\.(png|jpg)$/ } readdir $sh; closedir $sh; }
      push @list, { key => $p->{key}, name => str($p->{name}), link => str($p->{link}), editablePageId => str($p->{editablePageId}), editablePageName => str($p->{editablePageName}),
        uxGuideLink => str($p->{uxGuideLink}), hasCatalog => (-f proj_dir($k) . '/catalog.json') ? JSON::PP::true : JSON::PP::false, shots => $shots,
        isDefault => $k eq $DEFAULT_KEY ? JSON::PP::true : JSON::PP::false };
    }
    closedir $dh;
  }
  return { defaultKey => $DEFAULT_KEY, projects => \@list };
}

# ── 작업 대기열: 캡처 받기(capture) · 프레임 목록 만들기(catalog). 플러그인 또는 Claude가 처리한다 ──
sub read_jobs { my $j = eval { read_json($JOB_FILE) }; return ref $j eq 'HASH' ? $j : { version => 0, items => [] }; }
sub jobs_get {
  my ($target) = @_; my $j = read_jobs(); my @items = @{ $j->{items} || [] };
  for my $f (qw(key kind status)) {
    my ($v) = $target =~ /[?&]$f=([^&]*)/; next unless defined $v && $v ne '';
    $v =~ s/%([0-9A-Fa-f]{2})/chr(hex($1))/eg; $v = decode('UTF-8', $v);
    my $prop = $f eq 'key' ? 'fileKey' : $f; @items = grep { str($_->{$prop}) eq $v } @items;
  }
  return { version => $j->{version}, items => \@items };
}
sub jobs_post {
  my ($b) = @_; my $j = read_jobs(); my @items = grep { ref $_ eq 'HASH' } @{ $j->{items} || [] }; my $now = now_iso(); my $hit;
  my $act = str($b->{action});
  if ($act eq 'add') {
    my ($kind, $key, $nid) = (str($b->{kind}), str($b->{fileKey}), str($b->{nodeId}));
    die "알 수 없는 작업: $kind\n" unless grep { $kind eq $_ } qw(capture catalog guide guide-check guide-edit text prototype prototype-edit prototype-sync);
    # 프로토타입(이 PC에만, prototypes/{id}/): 만들기(prototype, 고른 화면 frames) · 수정 요청(prototype-edit) · Figma 바뀐 화면 맞추기(prototype-sync)
    my @pfr = ref $b->{frames} eq 'ARRAY' ? grep { ref $_ eq 'HASH' && str($_->{nodeId}) =~ /^\d+:\d+$/ } @{ $b->{frames} } : ();
    if ($kind eq 'prototype') {
      $nid = '';
      die "프로토타입 이름을 입력해 주세요.\n" unless trim($b->{name}) ne '';
      die "화면을 하나 이상 골라 주세요.\n" unless @pfr;
    }
    if ($kind eq 'prototype-edit' || $kind eq 'prototype-sync') {
      $nid = '';
      die "프로토타입을 찾지 못했습니다: " . str($b->{proto}) . "\n" unless str($b->{proto}) =~ /^[A-Za-z0-9_-]{1,64}$/ && -f "$PROTO_ROOT/" . str($b->{proto}) . '/meta.json';
      die "수정 내용을 입력해 주세요.\n" if $kind eq 'prototype-edit' && trim($b->{text}) eq '';
    }
    # 글 수정(text): Claude가 정한 글 바꾸기 [{nodeId(TEXT), find, replace}]를 Figma 플러그인이 PC 폰트(Pretendard 등)로 반영한다
    die "바꿀 글(items)이 없습니다.\n" if $kind eq 'text' && !(ref $b->{items} eq 'ARRAY' && @{ $b->{items} });
    # 가이드 수정 반영 확인: 그 가이드로 작업한 파일(fileKey)에서 바뀐 규칙과 다른 화면을 Claude가 찾는다(Figma는 고치지 않음)
    if ($kind eq 'guide-check' || $kind eq 'guide-edit') {   # guide-edit: 사람이 글로 적은 수정 내용대로 Claude가 가이드를 고친다
      $nid = '';
      die "가이드를 찾지 못했습니다: " . str($b->{guide}) . "\n" unless str($b->{guide}) =~ /^[A-Za-z0-9_-]{1,64}$/ && -f "$HIST_DIR/guides/" . str($b->{guide}) . '/meta.json';
    }
    # 새 UX 가이드 만들기: 기준 Figma 링크에서 파일 키 · 노드를 읽는다. 같은 링크라도 요청마다 따로 만든다
    #  기준은 Figma 링크 · 올린 참고 파일(files, /api/upload) 중 하나 이상. 정의서는 docKind:'spec'
    my @srcs;
    if ($kind eq 'guide') {
      $key = key_of($b->{link}); $nid = str($b->{link}) =~ /[?&]node-id=(\d+)[-:](\d+)/ ? "$1:$2" : '';
      die "이름을 입력해 주세요.\n" unless trim($b->{name}) ne '';
      @srcs = grep { ref $_ eq 'HASH' && str($_->{tmp}) =~ /^[0-9a-f]{32}\.[a-z0-9]{1,8}$/ && -f "$UP_TMP/" . str($_->{tmp}) } @{ ref $b->{files} eq 'ARRAY' ? $b->{files} : [] };
      splice(@srcs, $UP_MAX_N) if @srcs > $UP_MAX_N;
      die "Figma 링크를 넣거나 참고 파일을 올려 주세요.\n" if trim($b->{link}) eq '' && !@srcs;
      die "Figma 링크 형식이 아닙니다.\n" if trim($b->{link}) ne '' && !key_ok($key);
    }
    # 정의서 연관 항목 찾기(guide-check, scope:'spec')는 정의서에 기준 파일이 없으면 파일 없이(문서 · 프로토타입만) 받는다
    #  문서 수정 요청(guide-edit) · 참고 파일로만 만드는 가이드 · 정의서(guide)도 파일 없이 받는다
    die($kind eq 'guide' ? "Figma 링크 형식이 아닙니다.\n" : "잘못된 파일 키입니다.\n") unless key_ok($key) || ($key eq '' && (($kind eq 'guide-check' && str($b->{scope}) eq 'spec') || $kind eq 'guide-edit' || $kind eq 'guide'));
    die "잘못된 nodeId: $nid\n" if ($kind eq 'capture' || $kind eq 'text') && $nid !~ /^\d+:\d+$/;
    ($hit) = grep { $_->{kind} eq $kind && $_->{fileKey} eq $key && str($_->{nodeId}) eq $nid && ($_->{status} eq '대기' || $_->{status} eq '진행 중') } @items unless $kind =~ /^(guide|guide-check|guide-edit|text|prototype|prototype-edit|prototype-sync)$/;
    # 프로토타입 맞추기는 같은 프로토타입에 아직 「대기」인 것이 있으면 새로 만들지 않는다(여러 번 고쳐도 한 번에 맞춘다)
    ($hit) = grep { $_->{kind} eq $kind && str($_->{proto}) eq str($b->{proto}) && $_->{status} eq '대기' } @items if $kind eq 'prototype-sync';
    unless ($hit) {
      my $n = 1; for my $i (@items) { (my $v = str($i->{id})) =~ s/\D//g; $v = $v eq '' ? 0 : $v + 0; $n = $v + 1 if $v >= $n; }
      $hit = { id => sprintf('J%03d', $n), kind => $kind, fileKey => $key, nodeId => $nid, name => trim($b->{name}), link => str($b->{link}), text => trim($b->{text}),
        guide => ($kind eq 'guide-check' || $kind eq 'guide-edit' ? str($b->{guide}) : ''), revFrom => str($b->{revFrom}), revTo => str($b->{revTo}), items => ($kind eq 'text' ? $b->{items} : []),
        status => '대기', note => '', by => str($b->{by}), takenBy => '', createdAt => $now, updatedAt => $now };
      # guide-check 범위: '' = 가이드(작업 기준 파일의 화면만), 'spec' = 정의서(화면 · 다른 문서 · 프로토타입)
      $hit->{scope} = str($b->{scope}) eq 'spec' ? 'spec' : '' if $kind eq 'guide-check';
      # 새 가이드 · 정의서: 문서 종류(docKind '' = 가이드, 'spec' = 정의서)와 올린 참고 파일(workbench/job_files/{작업 ID}/, 이 PC에만)
      if ($kind eq 'guide') { $hit->{docKind} = str($b->{docKind}) eq 'spec' ? 'spec' : ''; $hit->{files} = save_uploads($hit->{id}, @srcs); }
      if ($kind =~ /^prototype/) {
        $hit->{proto} = str($b->{proto}); $hit->{start} = str($b->{start}); $hit->{env} = str($b->{env});
        $hit->{frames} = [ map { { nodeId => str($_->{nodeId}), name => str($_->{name}), page => str($_->{page}) } } @pfr ];
      }
      unshift @items, $hit;
    }
  } elsif ($act eq 'take') {
    # 플러그인: 이 파일의 대기 작업 하나(가장 오래된 것)를 가져가 「진행 중」으로. id를 주면 그 작업이 아직 「대기」일 때만(아니면 job 없음)
    if (str($b->{id}) ne '') { ($hit) = grep { str($_->{id}) eq str($b->{id}) && $_->{status} eq '대기' } @items; }
    else { ($hit) = reverse grep { $_->{kind} eq str($b->{kind}) && $_->{fileKey} eq str($b->{fileKey}) && $_->{status} eq '대기' } @items; }
    if ($hit) { $hit->{status} = '진행 중'; $hit->{takenBy} = str($b->{by}); $hit->{updatedAt} = $now; }
  } elsif ($act eq 'update') {
    ($hit) = grep { str($_->{id}) eq str($b->{id}) } @items; die "작업을 찾지 못했습니다: " . str($b->{id}) . "\n" unless $hit;
    $hit->{status} = str($b->{status}) if str($b->{status}) ne '';
    $hit->{note} = str($b->{note}) if defined $b->{note};
    $hit->{guide} = str($b->{guide}) if str($b->{guide}) ne '';   # 만든 가이드 id
    $hit->{items} = $b->{items} if ref $b->{items} eq 'ARRAY';    # 가이드 수정 반영 확인 결과: 고쳐야 할 화면 [{nodeId, frame, page, change}]
    for my $f (qw(revFrom revTo proto)) { $hit->{$f} = str($b->{$f}) if str($b->{$f}) ne ""; }   # 가이드 수정 요청 결과: 바뀌기 전 · 뒤 수정본
    $hit->{updatedAt} = $now;
  } else { die "알 수 없는 action: $act\n"; }
  splice(@items, 300) if @items > 300;
  write_json($JOB_FILE, { version => ($j->{version} || 0) + 1, items => \@items });
  return { ok => JSON::PP::true, job => $hit };
}

# ── 시작 안내 POST ──
# 맥 터미널 새 창에서 명령 실행
sub osa_terminal {
  my ($cmd) = @_; (my $q = $cmd) =~ s/(["\\])/\\$1/g;
  system('/usr/bin/osascript', '-e', qq{tell application "Terminal" to do script "$q"}, '-e', 'tell application "Terminal" to activate');
}
# 요청 감시 하트비트(감시 스크립트가 20초마다 씀)가 몇 초 전인지. 없으면 undef
sub watch_age {
  my $hb = eval { read_json($HEART_FILE) }; return undef unless ref $hb eq 'HASH';
  my $t = parse_iso($hb->{at}); return defined $t ? time - $t : undef;
}
# 백그라운드 에이전트(workbench/agent.pl): 창 없이 요청을 감시하고 Claude Code CLI(-p)로 처리한다
#  상태 파일 workbench/.agent.json {at, host, pid, status, msg}. 150초 안에 썼고 중지 상태가 아니고 프로세스가 살아 있으면 동작 중
sub agent_info {
  my $o = eval { read_json($AGENT_FILE) };
  return { alive => JSON::PP::false, stopping => JSON::PP::false, sec => undef, status => '', msg => '', host => '' } unless ref $o eq 'HASH';
  my $t = parse_iso($o->{at}); my $sec = defined $t ? int(time - $t) : undef;
  my $alive = defined $sec && $sec < 150 && str($o->{status}) ne 'stopped' && $o->{pid} && kill(0, $o->{pid});
  return { alive => $alive ? JSON::PP::true : JSON::PP::false, stopping => ($alive && -f $AGENT_STOP) ? JSON::PP::true : JSON::PP::false,
    sec => $sec, status => str($o->{status}), msg => str($o->{msg}), host => str($o->{host}) };
}
sub start_agent {
  my $cc = find_claude_code();
  die "Claude Code를 찾지 못했습니다. Claude 데스크톱 앱(Code 탭)을 한 번 열거나 Claude Code를 설치해 주세요.\n" unless $cc;
  die "이미 백그라운드 감시 중입니다.\n" if agent_info()->{alive};
  unlink $AGENT_STOP;
  system("nohup perl '$ROOT/workbench/agent.pl' '$cc' >/dev/null 2>&1 &");
}
# 중지: 지금 처리 중인 요청은 마치고 끝난다
sub stop_agent { write_bytes($AGENT_STOP, now_iso()); }
# 처음 한 번(또는 직접 작업할 때): Claude Code CLI 창을 이 폴더에서 연다. Figma MCP가 없으면 먼저 등록해 둔다(인증은 창에서 /mcp)
sub open_claude_cli {
  my $cc = find_claude_code();
  die "Claude Code를 찾지 못했습니다. Claude 데스크톱 앱(Code 탭)을 한 번 열거나 Claude Code를 설치해 주세요.\n" unless $cc;
  my $list = `'$cc' mcp list 2>&1`;
  # claude.ai 계정의 Figma 커넥터가 있으면 그걸 쓴다(로그인 뒤 자동). 없을 때만 Figma MCP를 직접 등록
  system("'$cc' mcp add --transport http --scope user figma https://mcp.figma.com/mcp >/dev/null 2>&1") unless $list =~ /^(claude\.ai )?figma/mi;
  osa_terminal("cd '$ROOT' && '$cc'");
}
# Figma AI Run으로 켤 때마다: 백그라운드 감시가 없으면 시작한다
#  시작 안내 7단계의 「실행할 때 자동으로 시작」을 끄면(setup.autoWatch = false) 하지 않는다. 대화형 Claude 창이 이미 감시 중이면(하트비트 60초 이내) 시작하지 않는다
#  처음(켤 때)이 아닌 2분마다 확인에서는 사용자가 중지한 것(status stopped)은 다시 띄우지 않는다
sub auto_watch {
  my ($first) = @_;
  my $s = read_setup();
  return if !$s->{done} || (exists $s->{autoWatch} && defined $s->{autoWatch} && !$s->{autoWatch});
  my $a = agent_info();
  return if $a->{alive};
  return if !$first && ($a->{status} eq 'stopped' || -f $AGENT_STOP);
  return if !find_claude_code();
  my $age = watch_age(); return if defined $age && $age < 60;
  if (eval { start_agent(); 1 }) { print "  요청 감시를 백그라운드로 시작했습니다(창 없음). 상태는 시작 안내 7단계에서 봅니다.\n"; }
  else { my $m = $@; $m =~ s/\s+$//; print "  백그라운드 감시 시작 못 함: $m\n"; }
}
sub setup_post {
  my ($path, $b, $origin) = @_;
  die "허용되지 않은 요청입니다.\n" if defined $origin && $origin ne '' && $origin ne "http://localhost:$PORT";
  if ($path eq '/api/setup') {
    my $s = read_setup();
    for my $k (qw(done user figmaUrl autoAt autoWatch)) { $s->{$k} = $b->{$k} if exists $b->{$k} && defined $b->{$k}; }
    $s->{checks} = $b->{checks} if ref $b->{checks} eq 'HASH';
    $s->{updatedAt} = now_iso();
    make_path($SETUP_DIR); write_json($SETUP_FILE, $s);
    # 작업 링크의 파일을 프로젝트로 등록(처음이면 폴더 생성)
    my $k = key_of($s->{figmaUrl}); ensure_proj($k, $s->{figmaUrl}) if key_ok($k);
    # 링크를 바꿨으면 프로젝트 작업 링크 · 수정 가능 페이지도 그 링크로
    if (defined $b->{figmaUrl} && key_ok($k)) {
      my $p = read_proj($k); if ($p && str($p->{link}) ne str($s->{figmaUrl})) { $p->{link} = $s->{figmaUrl}; save_proj($p); }
      set_editable_page($k, $s->{figmaUrl});
    }
    return { state => $s, env => setup_env() };
  }
  if ($path eq '/api/setup/launch') {
    my $app = str($b->{app});
    if ($app eq 'figma') {
      die "Figma 데스크톱 앱이 설치되어 있지 않습니다.\n" unless app_installed('Figma');
      my $u = str($b->{url});
      if ($u =~ m{^https://(www\.)?figma\.com/}) { system('open', '-a', 'Figma', encode('UTF-8', $u)); } else { system('open', '-a', 'Figma'); }
    } elsif ($app eq 'claude') {
      die "Claude 데스크톱 앱이 설치되어 있지 않습니다.\n" unless app_installed('Claude');
      system('open', '-a', 'Claude');
    } elsif ($app eq 'folder') { system('open', $ROOT); }
    # 설치: git은 개발자 도구 설치 창, Figma · Claude는 다운로드 페이지
    elsif ($app eq 'install') {
      my %pages = (figma => 'https://www.figma.com/downloads/', claude => 'https://claude.ai/download');
      my $w = str($b->{what});
      if ($w eq 'git') { system('/usr/bin/xcode-select', '--install'); }
      elsif ($pages{$w}) { system('open', $pages{$w}); }
      else { die "알 수 없는 설치: $w\n"; }
    }
    # 깃허브 연결: git(개발자 도구) 설치 → gh 브라우저 로그인(토큰 불필요) → history 브랜치 연결을 터미널 한 창에서
    elsif ($app eq 'git-login') {
      osa_terminal("bash '$ROOT/workbench/github_login.sh'");
    }
    # Claude Code(터미널)를 이 폴더에서 띄운다: 처음 로그인 · Figma 연결, 직접 작업
    elsif ($app eq 'claude-cli') { open_claude_cli(); }
    # 백그라운드 감시 시작 · 중지
    elsif ($app eq 'agent-start') { start_agent(); }
    elsif ($app eq 'agent-stop') { stop_agent(); }
    else { die "알 수 없는 앱: $app\n"; }
    return { ok => JSON::PP::true };
  }
  return undef;
}

# ── 브라우저 탭: 열린 탭이 모두 닫히면(마지막 닫힘 후 3초) 묻지 않고 서버를 끈다. 새로고침 · 메뉴 이동은 그 사이 다시 연결된다 ──
my (%pages, $any_page, $empty_since);
sub page_post {
  my ($path, $raw) = @_; my $b = eval { $JSON->decode($raw) }; my $id = ref $b eq 'HASH' ? str($b->{id}) : '';
  if ($id =~ /^[A-Za-z0-9-]{6,64}$/) {
    if ($path eq '/api/alive') { $pages{$id} = time; $any_page = 1; undef $empty_since; } else { delete $pages{$id}; }
  }
  return { ok => JSON::PP::true, pages => scalar(keys %pages) };
}
sub idle_check {
  # 20초마다 알리던 탭이 150초 동안 소식이 없으면(브라우저 강제 종료 등) 닫힌 것으로 본다
  for (keys %pages) { delete $pages{$_} if time - $pages{$_} > 150; }
  if (%pages || !$any_page) { undef $empty_since; return; }
  $empty_since = time unless defined $empty_since;
  return if time - $empty_since < 3;
  print "\n  Workbench 탭을 모두 닫아 서버를 껐습니다.\n"; exit 0;
}

# ── HTTP ──
sub respond {
  my ($sock, $code, $type, $body, $extra) = @_;
  my %txt = (200 => 'OK', 204 => 'No Content', 302 => 'Found', 400 => 'Bad Request', 403 => 'Forbidden', 404 => 'Not Found');
  $body = '' unless defined $body;
  my $h = "HTTP/1.1 $code " . ($txt{$code} || 'OK') . "\r\nContent-Type: $type\r\nContent-Length: " . length($body) . "\r\n" .
    "Access-Control-Allow-Origin: *\r\nAccess-Control-Allow-Headers: Content-Type\r\nAccess-Control-Allow-Methods: GET, POST, OPTIONS\r\n" .
    "Cache-Control: no-store\r\nConnection: close\r\n" . ($extra || '') . "\r\n";
  my $out = $h . $body; my $off = 0;
  $sock->blocking(1);
  while ($off < length $out) { my $w = syswrite($sock, $out, 65536, $off); last unless defined $w && $w > 0; $off += $w; }
}
sub respond_json { my ($sock, $code, $obj) = @_; respond($sock, $code, 'application/json; charset=utf-8', $JSON->encode($obj)); }

sub handle {
  my ($sock, $method, $target, $hdr, $raw) = @_;
  (my $path = $target) =~ s/\?.*$//; $path =~ s/%([0-9A-Fa-f]{2})/chr(hex($1))/eg;
  return respond($sock, 204, 'text/plain', '') if $method eq 'OPTIONS';
  my $origin = $hdr->{origin};
  $plugin_seen = time if defined $origin && $origin eq 'null' && $path =~ m{^/api/};
  # 쓰기(POST)는 이 서버에서 연 페이지 · Figma 플러그인(Origin null) · Origin 없는 호출(Claude · curl)만 받는다
  #  다른 웹사이트가 작업자 브라우저로 몰래 요청 · 작업(글 수정 등)을 넣지 못하게
  if ($method eq 'POST' && $path =~ m{^/api/} && defined $origin && $origin ne '' && $origin ne 'null' && $origin ne "http://localhost:$PORT") {
    return respond_json($sock, 403, { error => '허용되지 않은 요청입니다(다른 사이트).' });
  }
  my $body = sub { my $d = length($raw) ? $JSON->decode($raw) : {}; return ref $d eq 'HASH' ? $d : {}; };

  # ── 로그인 · 메뉴 권한 ── 계정 파일은 어디에도 내보내지 않는다(해시라도)
  return respond($sock, 404, 'text/plain', 'not found') if $path =~ m{^/\.history/accounts};
  if ($path eq '/api/me' && $method eq 'GET') { return respond_json($sock, 200, me_info()); }
  if ($path eq '/api/login' && $method eq 'POST') {
    my $b = $body->(); my $a = read_account($b->{id});
    if (!$a || (defined $a->{active} && !$a->{active}) || !test_pw($a, $b->{pw})) { select(undef, undef, undef, 0.6); die "아이디 또는 비밀번호가 맞지 않습니다.\n"; }
    write_login($a); return respond_json($sock, 200, me_info());
  }
  if ($path eq '/api/logout' && $method eq 'POST') { write_login(undef); return respond_json($sock, 200, { ok => JSON::PP::true }); }
  #  브라우저 페이지(Sec-Fetch-Site 머리글이 있고 Figma 플러그인이 아닌 것)만 막는다. Claude(curl) · 플러그인은 그대로
  my $is_browser = defined $hdr->{'sec-fetch-site'} && !(defined $origin && $origin eq 'null');
  if ($path eq '/start' && auth_required()) {
    my $mi = me_info(); my $to = '/Login.html';
    if ($mi->{user}) { $to = '/' . $mi->{first}; $to = '/Setup.html' if !read_setup()->{done} && grep { $_ eq 'setup' } @{ $mi->{allowed} }; }
    return respond($sock, 302, 'text/plain', '', "Location: $to\r\n");
  }
  if (($is_browser || $path =~ m{^/api/accounts} || $path eq '/api/me/password') && auth_required()) {
    (my $rel0 = $path) =~ s{^/+}{}; $rel0 = 'Common_UX_Guide.html' if $rel0 eq '';
    my $open = (grep { $rel0 eq $_ } qw(Login.html appnav.css appnav.js VERSION)) || $path eq '/api/alive' || $path eq '/api/bye' || ($rel0 =~ /\.(css|js|png|jpe?g|svg|ico|woff2?)$/i && $rel0 !~ m{^prototypes/});
    unless ($open) {
      my $u = current_user();
      unless ($u) {
        return respond_json($sock, 401, { error => '로그인이 필요합니다.', login => JSON::PP::true }) if $path =~ m{^/api/};
        (my $next = $target) =~ s/([^A-Za-z0-9\-._~\/?=&])/sprintf('%%%02X', ord($1))/ge;
        return respond($sock, 302, 'text/plain', '', "Location: /Login.html?next=" . $next . "\r\n");
      }
      my %al = map { $_ => 1 } user_menus($u); my $need;
      for my $m (@MENUS) { if ((grep { $_ eq $rel0 } @{ $m->{pages} }) || ($m->{key} eq 'proto' && $rel0 =~ m{^prototypes/})) { $need = $m->{key}; last; } }
      my %api = ('/api/usage' => 'usage', '/api/prototypes' => 'proto', '/api/accounts' => 'accounts'); $need = $api{$path} if $api{$path};
      if ($need && !$al{$need}) {
        return respond_json($sock, 403, { error => '이 메뉴를 쓸 권한이 없습니다.' }) if $path =~ m{^/api/};
        return respond($sock, 302, 'text/plain', '', "Location: /" . me_info()->{first} . "\r\n");
      }
    }
  }
  # 내 비밀번호 바꾸기 {current, next}
  if ($path eq '/api/me/password' && $method eq 'POST') {
    my $u = current_user() or return respond_json($sock, 401, { error => '로그인이 필요합니다.', login => JSON::PP::true });
    my $b = $body->();
    unless (test_pw($u, $b->{current})) { select(undef, undef, undef, 0.6); die "지금 비밀번호가 맞지 않습니다.\n"; }
    die "새 비밀번호는 8자 이상이어야 합니다.\n" if length(str($b->{next})) < 8;
    die "지금과 다른 비밀번호를 입력해 주세요.\n" if str($b->{next}) eq str($b->{current});
    set_pw($u, str($b->{next})); save_account($u); write_login($u);
    return respond_json($sock, 200, { ok => JSON::PP::true });
  }
  # 계정 관리(최고관리자만, 위에서 권한 확인)
  if ($path eq '/api/accounts' && $method eq 'GET') {
    my @l = map { public_account($_) } sort { ($b->{admin} ? 1 : 0) <=> ($a->{admin} ? 1 : 0) || str($a->{id}) cmp str($b->{id}) } read_accounts();
    return respond_json($sock, 200, { items => \@l, menus => [ map { { key => $_->{key}, label => $_->{label} } } grep { !$_->{admin} && !$_->{always} } @MENUS ] });
  }
  if ($path eq '/api/accounts' && $method eq 'POST') { return respond_json($sock, 200, accounts_post($body->())); }

  # 서버 종료 (맥 앱은 창이 없어서 페이지 상단 [서버 종료]로 끈다). 이 서버에서 연 페이지만 허용
  if ($path eq '/api/shutdown' && $method eq 'POST') {
    die "허용되지 않은 요청입니다.\n" if defined $origin && $origin ne '' && $origin ne "http://localhost:$PORT";
    respond_json($sock, 200, { ok => JSON::PP::true }); close $sock;
    print "\n  [서버 종료] 버튼으로 서버를 껐습니다.\n"; exit 0;
  }
  # 브라우저 탭 열림 · 닫힘 (sendBeacon은 text/plain으로 온다)
  if (($path eq '/api/alive' || $path eq '/api/bye') && $method eq 'POST') { return respond_json($sock, 200, page_post($path, $raw)); }
  if ($path eq '/start') { my $to = read_setup()->{done} ? '/Common_UX_Guide.html' : '/Setup.html'; return respond($sock, 302, 'text/plain', '', "Location: $to\r\n"); }
  if ($path eq '/api/setup' && $method eq 'GET') { return respond_json($sock, 200, { state => read_setup(), env => setup_env() }); }
  if ($path =~ m{^/api/setup} && $method eq 'POST') { my $o = setup_post($path, $body->(), $origin); return respond_json($sock, 200, $o) if $o; }
  if ($path eq '/api/shots' && $method eq 'POST') { return respond_json($sock, 200, shots_post($body->())); }
  if ($path eq '/api/projects' && $method eq 'GET') { return respond_json($sock, 200, projects_get()); }
  if ($path eq '/api/prototypes' && $method eq 'GET') { return respond_json($sock, 200, prototypes_get()); }
  if ($path eq '/api/prototypes' && $method eq 'POST') { return respond_json($sock, 200, prototypes_post($body->())); }
  if ($path eq '/api/projects' && $method eq 'POST') { return respond_json($sock, 200, projects_post($body->(), $origin)); }
  # UX 가이드(공유): 목록 · 이 PC의 파일별 작업 기준 가이드 · 바꾸기 {action:'apply', fileKey, guideId('' = 작업 기준 없음), by}
  if ($path eq '/api/guides') {
    if ($method eq 'POST') {
      my $g = $body->();
      # 가이드 고치기: guide.md는 그대로 두고 수정본을 새 파일로 남긴다(여러 PC가 고쳐도 깃 충돌이 없다)
      if (str($g->{action}) eq 'save') {
        my ($gid, $md) = (str($g->{id}), str($g->{md}));
        die "가이드를 찾지 못했습니다: $gid\n" unless $gid =~ /^[A-Za-z0-9_-]{1,64}$/ && -f "$GUIDE_ROOT/$gid/meta.json";
        die "가이드 내용이 비어 있습니다.\n" unless $md =~ /\S/;
        die "가이드 내용이 너무 깁니다.\n" if length($md) > 2000000;
        make_path("$GUIDE_ROOT/$gid/rev");
        my $rev = strftime('%Y%m%d-%H%M%S', localtime) . "_$PC_SLUG"; $md =~ s/\r\n/\n/g;
        write_bytes("$GUIDE_ROOT/$gid/rev/$rev.md", encode('UTF-8', $md));
        write_json("$GUIDE_ROOT/$gid/rev/$rev.json", { rev => $rev, by => str($g->{by}), at => now_iso(), note => str($g->{note}), base => str($g->{base}), pc => $PC_NAME });
        $sync_want = 1;
        my $out = guides_get(); $out->{saved} = $rev;
        return respond_json($sock, 200, $out);
      }
      die "알 수 없는 action: " . str($g->{action}) . "\n" unless str($g->{action}) eq 'apply';
      my ($key, $gid) = (str($g->{fileKey}), str($g->{guideId}));
      die "잘못된 파일 키입니다.\n" unless key_ok($key);
      die "가이드를 찾지 못했습니다: $gid\n" if $gid ne '' && ($gid !~ /^[A-Za-z0-9_-]{1,64}$/ || !-f "$GUIDE_ROOT/$gid/meta.json");
      # 이 PC에만 적용한다(다른 작업자는 각자 고른다)
      my $ga = (-f $GUIDE_APPLY ? eval { read_json($GUIDE_APPLY) } : undef) || {};
      $ga->{$key} = { fileKey => $key, guideId => $gid, by => str($g->{by}), pc => $PC_NAME, at => now_iso() };
      write_json($GUIDE_APPLY, $ga);
    }
    return respond_json($sock, 200, guides_get());
  }
  if ($path eq '/api/jobs') { return respond_json($sock, 200, $method eq 'POST' ? jobs_post($body->()) : jobs_get($target)); }
  # 프로젝트 프레임 목록 (Figma 플러그인 또는 Claude가 보냄) → projects/{fileKey}/catalog.json
  if ($path eq '/api/catalog') {
    if ($method eq 'GET') {
      my ($key) = $target =~ /[?&]key=([A-Za-z0-9]+)/;
      die "잘못된 파일 키입니다.\n" unless key_ok($key);
      my $cf = proj_dir($key) . '/catalog.json';
      return respond_json($sock, 404, { error => '이 파일의 프레임 목록이 아직 없습니다.' }) unless -f $cf;
      return respond($sock, 200, 'application/json; charset=utf-8', read_bytes($cf));
    }
    if ($method eq 'POST') {
      (my $txt = $raw) =~ s/^\s+|\s+$//g;
      my $b = $JSON->decode($txt); my $key = str($b->{fileKey});
      die "잘못된 파일 키입니다.\n" unless key_ok($key);
      die "프레임 목록 형식이 아닙니다.\n" unless substr($txt, 0, 1) eq '{' && ref $b->{pages} eq 'ARRAY';
      my $p = ensure_proj($key, '');
      # 배열 모양이 바뀌지 않게 받은 JSON을 그대로 두고 저장 시각만 앞에 붙인다 (윈도우 서버와 같은 형식)
      write_bytes(proj_dir($key) . '/catalog.json', '{"savedAt":"' . now_iso() . '",' . substr($txt, 1));
      # 프로젝트 이름 · 수정 가능 페이지를 목록에서 갱신
      $p->{name} = $b->{fileName} if str($b->{fileName}) ne '';
      save_proj($p);
      # 수정 가능 페이지는 작업 링크로 정한다. 보내온 값(플러그인 · 프레임 목록 작업이 기억한 옛 링크일 수 있다)은
      #  링크에 노드가 없거나 목록에서 그 노드를 못 찾을 때만 쓴다
      if (!set_editable_page($key, $p->{link}) && str($b->{editablePageId}) ne '') {
        $p->{editablePageId} = $b->{editablePageId};
        my ($ep) = grep { str($_->{id}) eq $b->{editablePageId} } @{ $b->{pages} }; $p->{editablePageName} = $ep->{name} if $ep;
        save_proj($p);
      }
      return respond_json($sock, 200, { ok => JSON::PP::true, fileKey => $key });
    }
  }
  # 작업 이력(공유): 목록 · 직접 남기기(요청 없이 한 작업) · 지금 동기화
  if ($path eq '/api/history') { return respond_json($sock, 200, $method eq 'POST' ? hist_post($body->()) : hist_get()); }
  if ($path eq '/api/usage') { return respond_json($sock, 200, usage_get()); }
  # 첨부 이미지 올리기: 본문 = 이미지 바이트, ?ext=png|jpg|gif|webp → {tmp}. 요청 등록(add)의 images:[{tmp, small, name}]로 넘긴다
  if ($path eq '/api/attach' && $method eq 'POST') { return respond_json($sock, 200, attach_post($target, $raw)); }
  # 가이드 · 정의서 참고 파일 올리기: 만들기 작업의 files:[{tmp, name}]로 넘긴다
  if ($path eq '/api/upload' && $method eq 'POST') { return respond_json($sock, 200, upload_post($target, $raw)); }
  if ($path eq '/api/requests') {
    if ($method eq 'POST') { requests_post($body->()); }
    write_bytes($REQ_FILE, '{"version":1,"items":[]}') unless -f $REQ_FILE;
    return respond($sock, 200, 'application/json; charset=utf-8', read_bytes($REQ_FILE));
  }

  my $rel = $path; $rel =~ s{^/+}{}; $rel = 'Common_UX_Guide.html' if $rel eq '';
  if ($rel =~ m{(^|/)\.\.(/|$)} || $rel =~ /\0/) { return respond($sock, 404, 'text/plain', 'not found'); }
  my $f = "$ROOT/$rel";
  if (-f $f) { my ($ext) = $f =~ /\.([A-Za-z0-9]+)$/; return respond($sock, 200, $TYPES{ lc($ext || '') } || 'application/octet-stream', read_bytes($f)); }
  return respond($sock, 404, 'text/plain', 'not found');
}

# localhost는 IPv4(127.0.0.1)와 IPv6(::1) 둘 다로 받는다. 브라우저(Safari 등)가 ::1로 먼저 붙기 때문에,
# 한쪽만 열면 ::1에 남아 있는 예전 서버가 대신 응답해 빈 화면이 뜰 수 있다.
my $busy = "\n  포트 $PORT 를 이미 다른 프로그램(예전 서버 등)이 쓰고 있습니다. 그 프로그램을 끄고 다시 실행하세요.\n  (터미널: lsof -nP -iTCP:$PORT -sTCP:LISTEN 으로 확인, kill <PID> 로 종료)\n\n";
# 방금 끈 예전 서버가 포트를 놓을 때까지 잠깐(최대 5초) 다시 시도한다
my $server;
for (1 .. 10) {
  $server = IO::Socket::INET->new(LocalAddr => '127.0.0.1', LocalPort => $PORT, Proto => 'tcp', Listen => 64, ReuseAddr => 1);
  last if $server;
  select(undef, undef, undef, 0.5);
}
unless ($server) { print $busy; exit 1; }
my @listeners = ($server);
if (eval { require IO::Socket::IP; 1 }) {
  my $v6 = IO::Socket::IP->new(LocalHost => '::1', LocalPort => $PORT, Proto => 'tcp', Listen => 64, ReuseAddr => 1, V6Only => 1);
  # ::1은 덤이다. 못 열어도 끝내지 않는다(맥에서 이유 없이 실패해 「이미 쓰고 있음」으로 멈추던 문제)
  if ($v6) { push @listeners, $v6; }
}
my %is_listener = map { ($_ => 1) } @listeners;
print "\n  UX AI TEST Workbench 서버가 실행 중입니다.  (Workbench 탭을 모두 닫거나 이 창을 닫으면 멈춥니다)\n\n";
print "  시작 안내    http://localhost:$PORT/Setup.html\n";
print "  가이드       http://localhost:$PORT/\n";
print "  Workbench    http://localhost:$PORT/Figma_Workbench.html\n\n";
print "  처음 쓰는 Mac이라면 브라우저에 뜬 「시작 안내」를 순서대로 따라 하세요.\n";
print "    1. 작업자 이름   2. Figma 앱 실행   3. 작업할 Figma 링크 붙여넣기\n";
print "    4. Figma 플러그인 등록   5. Claude 앱 실행 · 폴더 열기\n";
print "    6. Claude에 Figma 연결   7. 요청 감시 시작\n\n";
print "  종료: 브라우저의 Workbench 탭을 모두 닫으면 저절로 꺼집니다. Control+C 또는 창 닫기\n\n";

hist_backfill();
fix_editable_pages();
my $auto_watch_at = time + 5;   # 켠 지 5초 뒤: 백그라운드 감시가 꺼져 있으면 시작. 그 뒤 2분마다 확인해 죽었으면 다시 시작(사용자가 중지한 것은 제외)
my $auto_watch_first = 1;
# 여러 연결을 한꺼번에 받되(브라우저 미리 연결 대비) 요청은 하나씩 처리한다
my $sel = IO::Select->new(@listeners);
my (%buf, %seen);
while (1) {
  for my $s ($sel->can_read(1)) {
    if ($is_listener{$s}) { my $c = $s->accept or next; $c->blocking(0); $sel->add($c); $buf{$c} = ''; $seen{$c} = time; next; }
    my $n = sysread($s, my $chunk, 65536);
    if (!defined $n) { next if $!{EAGAIN} || $!{EWOULDBLOCK}; }
    if (!$n) { $sel->remove($s); delete $buf{$s}; delete $seen{$s}; close $s; next; }
    $buf{$s} .= $chunk; $seen{$s} = time;
    my $he = index($buf{$s}, "\r\n\r\n"); next if $he < 0;
    my @lines = split(/\r\n/, substr($buf{$s}, 0, $he));
    my ($method, $target) = split(/ /, shift(@lines) || '');
    my %hdr; for (@lines) { $hdr{ lc $1 } = $2 if /^([^:]+):\s*(.*)$/; }
    my $len = $hdr{'content-length'} || 0;
    next if length($buf{$s}) < $he + 4 + $len;
    my $raw = substr($buf{$s}, $he + 4, $len);
    eval { handle($s, $method || 'GET', $target || '/', \%hdr, $raw); 1 } or do {
      my $msg = $@ || 'error'; $msg =~ s/ at \S+ line \d+.*$//s; $msg =~ s/\s+$//;
      eval { respond_json($s, 400, { error => $msg }) };
    };
    $sel->remove($s); delete $buf{$s}; delete $seen{$s}; close $s;
  }
  for my $s ($sel->handles) { next if $is_listener{$s}; if (time - ($seen{$s} || 0) > 30) { $sel->remove($s); delete $buf{$s}; delete $seen{$s}; close $s; } }
  sync_tick();
  if (time >= $auto_watch_at) { auto_watch($auto_watch_first); $auto_watch_first = 0; $auto_watch_at = time + 120; }
  idle_check();
}
