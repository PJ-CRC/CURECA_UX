#!/bin/bash
# 깃허브 연결 (맥): 시작 안내 8단계 [깃허브 연결]이 터미널 창에서 띄운다. 한 번이면 끝난다
#  1. git(개발자 도구)이 없으면 설치 창을 띄우고 끝날 때까지 기다린다
#  2. 깃허브 로그인 도구 gh가 없으면 받는다(Homebrew가 있으면 brew, 없으면 GitHub 공식 배포 파일을 이 PC 설정 폴더에)
#  3. gh로 브라우저 로그인(토큰 불필요) → git이 그 로그인을 쓰게 연결(gh auth setup-git)
#  4. 작업 이력 저장소(workbench/git_remote.txt)의 history 브랜치에 연결 (history_sync.sh --interactive)
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SUP="$HOME/Library/Application Support/UX_AI_TEST_Workbench"
fail() { echo; echo "  ✗ $1"; echo; read -r -p "  Enter를 누르면 창을 닫습니다." _; exit 1; }

clear
echo
echo "  Workbench · 깃허브 연결"
echo "  ─────────────────────────────"
echo

# 1. git
if ! xcode-select -p >/dev/null 2>&1; then
  echo "  [1/3] git(개발자 도구)을 설치합니다. 뜨는 창에서 [설치]를 누르세요."
  echo "        설치가 끝날 때까지 이 창에서 기다립니다(몇 분 걸릴 수 있습니다)."
  xcode-select --install >/dev/null 2>&1
  until xcode-select -p >/dev/null 2>&1; do sleep 5; done
fi
echo "  [1/3] ✓ git 준비됨"

# 2. gh
GH=$(command -v gh 2>/dev/null)
for p in /opt/homebrew/bin/gh /usr/local/bin/gh "$SUP/gh/bin/gh"; do [ -z "$GH" ] && [ -x "$p" ] && GH="$p"; done
if [ -z "$GH" ]; then
  echo "  [2/3] 깃허브 로그인 도구(gh)를 받는 중…"
  if command -v brew >/dev/null 2>&1; then brew install gh >/dev/null && GH=$(command -v gh); fi
  if [ -z "$GH" ]; then
    tag=$(curl -fsSLI -o /dev/null -w '%{url_effective}' https://github.com/cli/cli/releases/latest | sed 's#.*/tag/v##')
    arch=$(uname -m); [ "$arch" = arm64 ] || arch=amd64
    tmp=$(mktemp -d)
    if [ -n "$tag" ] && curl -fsSL -o "$tmp/gh.zip" "https://github.com/cli/cli/releases/download/v$tag/gh_${tag}_macOS_${arch}.zip" && unzip -q "$tmp/gh.zip" -d "$tmp"; then
      rm -rf "$SUP/gh"; mkdir -p "$SUP/gh"; cp -R "$tmp"/gh_*/* "$SUP/gh/" && GH="$SUP/gh/bin/gh"
    fi
    rm -rf "$tmp"
  fi
fi
[ -n "$GH" ] && [ -x "$GH" ] || fail "gh를 받지 못했습니다. 인터넷 연결을 확인하고 다시 누르세요."
echo "  [2/3] ✓ 로그인 도구 준비됨"

# 3. 로그인: 이미 로그인된 계정이 있으면 그 계정으로 연결할지 묻는다(다른 계정으로 바꿀 수 있게)
CUR=''
if "$GH" auth status -h github.com >/dev/null 2>&1; then CUR=$("$GH" api user -q .login 2>/dev/null); fi
if [ -n "$CUR" ]; then
  echo
  echo "  [3/3] 지금 로그인된 깃허브 계정: $CUR"
  read -r -p "        이 계정으로 연결하려면 Enter, 다른 계정으로 로그인하려면 2 를 누르세요: " ans
  [ "$ans" = 2 ] && CUR=''
fi
if [ -z "$CUR" ]; then
  echo
  echo "  [3/3] 깃허브 로그인"
  echo "        ① 아래에 나오는 8자리 코드를 확인하고 Enter를 누릅니다."
  echo "        ② 열린 브라우저에 코드를 넣고, 연결할 깃허브 계정으로 로그인 · 승인합니다."
  echo "           브라우저에 다른 계정이 로그인돼 있으면 먼저 그 계정에서 로그아웃(또는 계정 전환)하세요."
  echo "        (「Authenticate Git with your GitHub credentials?」가 나오면 Enter)"
  echo
  "$GH" auth login -h github.com -p https -w || fail "깃허브 로그인을 마치지 못했습니다. 다시 누르세요."
fi
"$GH" auth setup-git -h github.com >/dev/null 2>&1
echo "  [3/3] ✓ 깃허브 로그인됨 ($("$GH" api user -q .login 2>/dev/null))"

# 4. 작업 이력 저장소 연결
echo
echo "  작업 이력 저장소에 연결하는 중…"
bash "$ROOT/workbench/history_sync.sh" --interactive
if grep -q '"ok": true' "$ROOT/workbench/.history_sync.json" 2>/dev/null; then
  echo; echo "  ✓ 끝났습니다. 이 창은 닫아도 됩니다."; echo
else
  fail "연결하지 못했습니다. 위 메시지를 확인하세요. (「권한」 문제면 저장소 관리자에게 깃허브 아이디를 알려 초대를 받으세요)"
fi
