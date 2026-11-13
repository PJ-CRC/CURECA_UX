#!/bin/bash
# 자동 업데이트 (맥): update.ps1(윈도우)과 같은 동작이다. 기능을 바꾸면 두 파일을 함께 고친다.
#  - Figma AI Run.app · .command가 서버를 띄우기 전에 부른다
#  - workbench/git_remote.txt 저장소의 release 브랜치(관리자가 「배포」한 버전)가 지금 적용된 것과 다르면 받아서 프로그램 파일을 바꾼다
#  - 받은 파일은 .update(숨김 저장소)에 두고, 작업 폴더로 복사한다. 개인 데이터는 이미 있으면 건드리지 않는다(아래 keep)
#    실행 중인 스크립트(앱의 run 등)가 깨지지 않게 임시 파일로 복사한 뒤 이름을 바꿔 넣는다
#  - 인터넷 · 로그인 문제로 실패하면 지금 버전 그대로 실행한다. 결과는 workbench/.update.json
#  - 깃 작업 폴더(개발용 clone, .git 있음)는 건드리지 않는다
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
U="$ROOT/.update"
STAT="$ROOT/workbench/.update.json"
export GIT_TERMINAL_PROMPT=0

now_iso() { date +%Y-%m-%dT%H:%M:%S%z | sed -E 's/([0-9]{2})([0-9]{2})$/\1:\2/'; }
ver() { tr -d ' \r\n' < "$ROOT/VERSION" 2>/dev/null; }
get() { sed -nE "s/.*\"$1\": *\"([^\"]*)\".*/\1/p" "$STAT" 2>/dev/null | head -1; }
A_SHA=$(get appliedSha); A_AT=$(get appliedAt); A_FROM=$(get from); A_TO=$(get to)
done_() {
  local m=${2//\\/\\\\}; m=${m//\"/\\\"}
  printf '{\n  "checkedAt": "%s",\n  "ok": %s,\n  "message": "%s",\n  "version": "%s",\n  "appliedSha": "%s",\n  "appliedAt": "%s",\n  "from": "%s",\n  "to": "%s"\n}' \
    "$(now_iso)" "$1" "$(printf '%s' "$m" | tr '\n\r\t' '   ')" "$(ver)" "$A_SHA" "$A_AT" "$A_FROM" "$A_TO" > "$STAT"
  exit 0
}
keep() { case "$1" in workbench/edit_requests.json|workbench/jobs.json|.claude/*|projects/*|prototypes/*) return 0 ;; esac; return 1; }
# 배포에서 빠진 파일 지우기: 개인 데이터 · 설치 폴더 밖 · 이력(.history) · 받은 저장소(.update) · workbench 상태 파일은 지우지 않는다
RM=0
remove_old() {
  local rel="${1#/}"
  [ -n "$rel" ] || return 0
  case "$rel" in *..*|.history|.history/*|.update|.update/*|.git|.git/*|.claude/*|projects/*|prototypes/*|workbench/.*) return 0 ;; esac
  keep "$rel" && return 0
  [ -f "$ROOT/$rel" ] && rm -f "$ROOT/$rel" && RM=$((RM + 1))
  return 0
}
# workbench/removed_files.txt(배포에 들어 있음)에 적힌 파일을 지운다. 최신 버전이어도 실행할 때마다 확인
remove_listed() {
  local f="$ROOT/workbench/removed_files.txt" l
  [ -f "$f" ] || return 0
  while IFS= read -r l || [ -n "$l" ]; do l="${l%%#*}"; l="$(printf '%s' "$l" | tr -d '\r' | sed -E 's/^[[:space:]]+|[[:space:]]+$//g')"; [ -n "$l" ] && remove_old "$l"; done < "$f"
  return 0
}

[ -e "$ROOT/.git" ] && done_ true "깃 작업 폴더(개발용)는 자동 업데이트하지 않습니다."
xcode-select -p >/dev/null 2>&1 || command -v brew >/dev/null 2>&1 || done_ false "git(개발자 도구)이 없어 업데이트를 확인하지 못했습니다. (시작 안내 6단계 [깃허브 연결])"
url=$(tr -d ' \r\n' < "$ROOT/workbench/git_remote.txt" 2>/dev/null)
[ -n "$url" ] || done_ false "업데이트 저장소 주소가 없습니다. (workbench/git_remote.txt)"

# 1. 배포된 버전 확인 (가볍게)
out=$(git ls-remote "$url" refs/heads/release 2>&1) || done_ false "업데이트를 확인하지 못했습니다. $(printf '%s' "$out" | tail -n 1)"
sha=${out%%[[:space:]]*}
[ -n "$sha" ] || done_ true "아직 배포된 버전이 없습니다."
if [ "$sha" = "$A_SHA" ]; then remove_listed; [ "$RM" -gt 0 ] && done_ true "최신 버전입니다. (배포에서 빠진 파일 ${RM}개 지움)"; done_ true "최신 버전입니다."; fi

# 2. 받기 (받기 전 버전의 파일 목록을 남겨 두었다가, 새 버전에 없는 파일을 지운다)
OLD_LIST="$ROOT/workbench/.update_old.$$"; NEW_LIST="$ROOT/workbench/.update_new.$$"; : > "$OLD_LIST"; trap 'rm -f "$OLD_LIST" "$NEW_LIST"' EXIT
[ -e "$U/.git" ] && git -C "$U" -c core.quotepath=false ls-files > "$OLD_LIST" 2>/dev/null
if [ ! -e "$U/.git" ]; then mkdir -p "$U" && git -C "$U" init -q && git -C "$U" remote add origin "$url"
elif [ "$(git -C "$U" remote get-url origin)" != "$url" ]; then git -C "$U" remote set-url origin "$url"; fi
out=$(git -C "$U" fetch -q --depth 1 origin release 2>&1) || done_ false "새 버전을 받지 못했습니다. $(printf '%s' "$out" | tail -n 1)"
out=$(git -C "$U" checkout -q -f -B release FETCH_HEAD 2>&1) || done_ false "새 버전을 풀지 못했습니다. $(printf '%s' "$out" | tail -n 1)"

# 3. 프로그램 파일 바꾸기
from=$(ver); n=0
while IFS= read -r rel; do
  [ -n "$rel" ] || continue
  dst="$ROOT/$rel"
  keep "$rel" && [ -e "$dst" ] && continue
  mkdir -p "$(dirname "$dst")"
  cp -p "$U/$rel" "$dst.upd.$$" && mv -f "$dst.upd.$$" "$dst" && n=$((n + 1))
done < <(git -C "$U" -c core.quotepath=false ls-files)
xattr -dr com.apple.quarantine "$ROOT" 2>/dev/null
# Finder가 앱 아이콘을 예전 것으로 기억하므로, 앱을 건드려 아이콘을 다시 읽게 한다(아이콘이 바뀐 버전 대비)
touch "$ROOT/Figma AI Run.app" 2>/dev/null
# 4. 배포에서 빠진 파일 지우기: 받기 전 버전에 있고 새 버전에 없는 파일 + removed_files.txt 목록
git -C "$U" -c core.quotepath=false ls-files > "$NEW_LIST" 2>/dev/null
if [ -s "$OLD_LIST" ] && [ -s "$NEW_LIST" ]; then
  while IFS= read -r rel; do [ -n "$rel" ] && remove_old "$rel"; done < <(grep -vxF -f "$NEW_LIST" "$OLD_LIST")
fi
rm -f "$OLD_LIST" "$NEW_LIST"
remove_listed
A_SHA=$sha; A_AT=$(now_iso); A_FROM=$from; A_TO=$(ver)
[ "$RM" -gt 0 ] && done_ true "v$A_TO로 업데이트했습니다. (파일 ${n}개, 빠진 파일 ${RM}개 지움)"
done_ true "v$A_TO로 업데이트했습니다. (파일 ${n}개)"
