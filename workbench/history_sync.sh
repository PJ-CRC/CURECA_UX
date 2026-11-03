#!/bin/bash
# 작업 이력 공유 (맥): history_sync.ps1(윈도우)과 같은 동작이다. 기능을 바꾸면 두 파일을 함께 고친다.
#  - guide_server_mac.pl이 --loop <서버 PID>로 띄운다. 5초마다 원격이 바뀌었는지만 가볍게 묻고(ls-remote), 바뀌었거나 이 PC에 새 이력이 있을 때만 받고 올린다
#    서버가 workbench/.history_sync_now를 만들면(이력이 생김 · [깃 동기화]) 바로 맞춘다. 서버가 꺼지면 같이 끝난다
#  - 원격 주소: 모든 PC가 같은 저장소를 쓰도록 workbench/git_remote.txt (이 파일이 없을 때만 작업 폴더의 origin)
#  - 결과는 workbench/.history_sync.json {at(마지막으로 맞춘 시각), checkedAt(마지막 확인), ok, message, busy}
#  - --interactive: 시작 안내 「깃허브 로그인」(터미널)에서 한 번만. 아이디 · 토큰을 묻는다(뒤에서 도는 동기화는 묻지 않는다)
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
H="$ROOT/.history"
STAT="$ROOT/workbench/.history_sync.json"
NOWF="$ROOT/workbench/.history_sync_now"
LOCK="$ROOT/workbench/.history_sync.lock"
INTER=0; LOOP=0; SPID=0
[ "$1" = "--interactive" ] && INTER=1
[ "$1" = "--loop" ] && { LOOP=1; SPID="${2:-0}"; }
[ $INTER = 1 ] || export GIT_TERMINAL_PROMPT=0

now_iso() { date +%Y-%m-%dT%H:%M:%S%z | sed -E 's/([0-9]{2})([0-9]{2})$/\1:\2/'; }
json_str() { local s=${1//\\/\\\\}; s=${s//\"/\\\"}; printf '%s' "$s" | tr '\n\r\t' '   '; }
# 상태 파일: 이전 값을 이어 쓴다
ST_AT=$(sed -nE 's/.*"at": *"([^"]*)".*/\1/p' "$STAT" 2>/dev/null | head -1)
ST_OK=false; ST_MSG=""; ST_CHK=""
save_st() {
  printf '{\n  "at": "%s",\n  "checkedAt": "%s",\n  "ok": %s,\n  "message": "%s",\n  "busy": %s\n}' "$ST_AT" "$ST_CHK" "$ST_OK" "$(json_str "$ST_MSG")" "${1:-false}" > "$STAT"
}
# 한 번 맞추기를 끝낸다(결과 기록). sync_once는 하위 셸에서 돌아 exit가 그 셸만 끝낸다
done_() {
  ST_OK=$1; ST_MSG=$2; ST_CHK=$(now_iso); [ "$1" = true ] && ST_AT=$ST_CHK
  save_st false
  [ $INTER = 1 ] && { [ "$1" = true ] && echo "  완료: $2" || echo "  실패: $2"; }
  exit 0
}
last() { printf '%s' "$1" | grep -v '^[[:space:]]*$' | tail -n 1; }

sync_once() {
  # 맥의 /usr/bin/git은 개발자 도구가 없으면 설치 창만 띄우고 실패한다
  if ! xcode-select -p >/dev/null 2>&1 && ! command -v brew >/dev/null 2>&1; then done_ false "git(개발자 도구)이 설치돼 있지 않아 이 PC에만 저장합니다."; fi
  git --version >/dev/null 2>&1 || done_ false "git이 설치돼 있지 않아 이 PC에만 저장합니다."
  mkdir -p "$H/entries" "$H/shots"

  # 모든 PC가 한 저장소를 쓴다: workbench/git_remote.txt (없을 때만 작업 폴더의 origin)
  url=$(tr -d ' \r\n' < "$ROOT/workbench/git_remote.txt" 2>/dev/null)
  [ -n "$url" ] || url=$(git -C "$ROOT" remote get-url origin 2>/dev/null)
  [ -n "$url" ] || done_ false "공유할 깃 저장소 주소가 없어 이 PC에만 저장합니다. (workbench/git_remote.txt)"
  if [ ! -e "$H/.git" ]; then
    git -C "$H" init -q && git -C "$H" remote add origin "$url" && git -C "$H" symbolic-ref HEAD refs/heads/history
  elif [ "$(git -C "$H" remote get-url origin 2>/dev/null)" != "$url" ]; then git -C "$H" remote set-url origin "$url"; fi

  # 원격에 history 브랜치가 있는지 (0: 있음, 2: 없음, 그 밖: 연결 실패)
  out=$(git -C "$H" ls-remote --exit-code --heads origin history 2>&1); remote=$?
  if [ $remote -ne 0 ] && [ $remote -ne 2 ]; then
    if printf '%s' "$out" | grep -qiE 'not found|403|denied'; then
      done_ false "저장소에 접근할 수 없습니다. 저장소 관리자에게 깃허브 아이디를 알려 초대를 받고, 메일 · 깃허브 알림에서 수락한 뒤 [깃허브 연결]을 다시 누르세요."
    fi
    if printf '%s' "$out" | grep -qiE 'Authentication|could not read Username|terminal prompts disabled'; then
      done_ false "깃허브 로그인이 필요합니다. 시작 안내 8단계의 [깃허브 연결]을 누르세요."
    fi
    done_ false "깃 서버에 연결하지 못했습니다. $(last "$out")"
  fi

  has_head=0; git -C "$H" rev-parse -q --verify HEAD >/dev/null 2>&1 && has_head=1
  if [ $remote -eq 0 ]; then
    out=$(git -C "$H" fetch -q origin history 2>&1) || done_ false "받기(fetch) 실패: $(last "$out")"
    # 처음 받는 PC: 원격 이력 위에서 시작한다(이 PC 파일은 그대로 남는다)
    if [ $has_head -eq 0 ]; then out=$(git -C "$H" checkout -q -f -B history FETCH_HEAD 2>&1) || done_ false "받기 실패: $(last "$out")"; has_head=1; fi
  fi

  # 커밋 · pull(rebase)에 쓸 깃 사용자 (설정이 없으면 Workbench 작업자 이름 · PC 이름으로)
  id=()
  [ -n "$(git -C "$H" config user.name)" ] || id+=(-c "user.name=${WB_USER:-$(hostname -s)}")
  [ -n "$(git -C "$H" config user.email)" ] || id+=(-c "user.email=workbench@localhost")

  # 이 PC의 새 이력 커밋
  git -C "$H" add -A .
  if ! git -C "$H" diff --cached --quiet; then
    out=$(git "${id[@]}" -C "$H" commit -q -m "history: $(hostname -s) $(date '+%Y-%m-%d %H:%M')" 2>&1) || done_ false "커밋 실패: $(last "$out")"
    has_head=1
  fi
  [ $has_head -eq 1 ] || done_ true "깃허브에 연결했습니다. 아직 공유된 이력이 없습니다."

  if [ $remote -eq 0 ]; then
    out=$(git "${id[@]}" -C "$H" pull -q --rebase origin history 2>&1) || { git -C "$H" rebase --abort >/dev/null 2>&1; done_ false "받기(pull) 실패: $(last "$out")"; }
  fi
  out=$(git -C "$H" push -q -u origin history 2>&1) || done_ false "올리기(push) 실패: $(last "$out")"
  done_ true "깃과 맞췄습니다."
}
run_sync() {
  save_st true
  ( sync_once )
  # 하위 셸이 남긴 결과를 다시 읽는다
  ST_OK=$(sed -nE 's/.*"ok": *(true|false).*/\1/p' "$STAT" | head -1); ST_OK=${ST_OK:-false}
  ST_AT=$(sed -nE 's/.*"at": *"([^"]*)".*/\1/p' "$STAT" | head -1)
  ST_CHK=$(sed -nE 's/.*"checkedAt": *"([^"]*)".*/\1/p' "$STAT" | head -1)
  ST_MSG=$(sed -nE 's/.*"message": *"(.*)",?$/\1/p' "$STAT" | head -1 | sed 's/\\"/"/g; s/\\\\/\\/g')
}
# 가벼운 확인: 이 PC에 올릴 이력이 있거나 원격 history가 내 것과 다르면 맞춰야 한다
need_sync() {
  [ "$ST_OK" = true ] && [ -e "$H/.git" ] || return 0
  # 공유 저장소 주소(git_remote.txt)가 바뀌었으면(저장소 이전) 새 주소로 맞춘다
  rf="$ROOT/workbench/git_remote.txt"; want=$( [ -f "$rf" ] && tr -d ' \r\n' < "$rf" )
  [ -z "$want" ] || [ "$(git -C "$H" remote get-url origin 2>/dev/null)" = "$want" ] || return 0
  [ -z "$(git -C "$H" status --porcelain 2>/dev/null)" ] || return 0
  r=$(git -C "$H" ls-remote origin refs/heads/history 2>/dev/null) || return 0
  [ "${r%%[[:space:]]*}" != "$(git -C "$H" rev-parse -q --verify HEAD 2>/dev/null)" ]
}

if [ $LOOP = 0 ]; then
  # 한 번만 (깃허브 로그인 등). 도는 동안 반복 동기화는 쉰다
  [ $INTER = 1 ] && now_iso > "$LOCK"
  run_sync
  rm -f "$LOCK"; now_iso > "$NOWF"
  exit 0
fi

rm -f "$LOCK"
run_sync
while :; do
  [ "$SPID" != 0 ] && ! kill -0 "$SPID" 2>/dev/null && exit 0
  # 실패한 뒤에는(로그인 필요 등) 1분에 한 번만 다시 묻는다
  wait=10; [ "$ST_OK" = true ] || wait=120   # 0.5초 단위 (5초 / 60초)
  i=0; while [ $i -lt $wait ] && [ ! -e "$NOWF" ]; do sleep 0.5; i=$((i + 1)); done
  nowf=0; [ -e "$NOWF" ] && { nowf=1; rm -f "$NOWF"; }
  [ -e "$LOCK" ] && continue
  if [ $nowf = 1 ] || need_sync; then run_sync; else ST_CHK=$(now_iso); save_st false; fi
done
