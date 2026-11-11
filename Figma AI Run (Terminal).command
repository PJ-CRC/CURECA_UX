#!/bin/bash
# Figma AI Run (macOS) - Workbench local server
#  - 설치 없이 macOS 기본 Perl(/usr/bin/perl)로 guide_server_mac.pl을 실행한다
#  - 처음 실행한 Mac은 시작 안내(Setup.html), 이후에는 가이드가 열린다
#  - 실행할 때마다 떠 있던 Workbench 서버를 끄고 새로 띄운다(창을 닫으면 서버도 꺼진다)
cd "$(dirname "$0")" || exit 1
PORT=8765

# 실행할 때마다 서버를 새로 띄운다: 8765를 잡고 있는 것(예전 Workbench 서버 등)을 묻지 않고 모두 끄고 시작한다.
# → 창을 닫고 다시 실행하면 항상 새 서버로 열린다
holders() { lsof -nP -ti "tcp:$PORT" -sTCP:LISTEN 2>/dev/null; }
pkill -f 'guide_server_mac.pl' 2>/dev/null; pkill -f 'guide_server.ps1' 2>/dev/null; pkill -f "node/server/main.js --port $PORT" 2>/dev/null
pids="$(holders)"; [ -n "$pids" ] && { echo "  8765를 쓰던 프로그램(PID $pids)을 끄고 새로 시작합니다."; kill $pids 2>/dev/null; }
for _ in 1 2 3 4 5 6 7 8 9 10; do [ -z "$(holders)" ] && break; sleep 0.3; done
pids="$(holders)"; [ -n "$pids" ] && kill -9 $pids 2>/dev/null
for _ in 1 2 3 4 5 6 7 8 9 10; do [ -z "$(holders)" ] && break; sleep 0.3; done

PERL=/usr/bin/perl
[ -x "$PERL" ] || PERL="$(command -v perl)"
if [ -z "$PERL" ]; then
  echo ""
  echo "  이 Mac에서 Perl을 찾지 못했습니다. 터미널에서 xcode-select --install 을 실행해 개발자 도구를 설치한 뒤 다시 실행하세요."
  read -r -p "  Enter 키를 누르면 창을 닫습니다." _
  exit 1
fi

# 이 폴더의 격리 표시를 지운다(다음부터 Figma AI Run.app이 임시 위치가 아니라 이 폴더에서 바로 열린다)
xattr -dr com.apple.quarantine . 2>/dev/null

# 자동 업데이트: 관리자가 배포한 새 버전이 있으면 받아서 프로그램 파일을 바꾼다(workbench/update.sh)
if [ -f workbench/update.sh ]; then
  echo "  업데이트 확인 중…"
  /bin/bash workbench/update.sh
  sed -nE 's/.*"message": *"(.*)",?$/  \1/p' workbench/.update.json 2>/dev/null
fi

# 서버가 실제로 응답하면 브라우저 열기(최대 15초)
(
  for _ in $(seq 1 60); do
    sleep 0.25
    if curl -s --max-time 1 "http://127.0.0.1:$PORT/api/projects" | grep -q '"defaultKey"'; then open "http://localhost:$PORT/start"; exit 0; fi
  done
  echo ""; echo "  서버가 15초 안에 응답하지 않았습니다. 이 창의 내용을 담당자에게 보내 주세요."
) &
# 서버(v0.21.0~): Node 서버. Node.js는 처음 한 번 공식 사이트에서 받아 둔다(node/run_mac.sh). 못 받으면 예전 서버(Perl)로
SUPPORT="$HOME/Library/Application Support/UX_AI_TEST_Workbench"
MODE=node; [ "$(tr -d '[:space:]' < "$SUPPORT/server_mode.txt" 2>/dev/null | tr 'A-Z' 'a-z')" = "ps" ] && MODE=ps
[ -f node/run_mac.sh ] || MODE=ps
if [ "$MODE" = node ] && /bin/bash node/run_mac.sh --no-start; then
  VER="$(tr -d '[:space:]' < node/NODE_VERSION)"
  "$SUPPORT/node/$VER/bin/node" node/server/main.js --port "$PORT" --root "$(pwd)"
else
  echo "  Node 서버를 쓸 수 없어 예전 서버로 실행합니다."
  "$PERL" "./guide_server_mac.pl" "$PORT"
fi
STATUS=$?
if [ $STATUS -ne 0 ]; then
  read -r -p "  Enter 키를 누르면 창을 닫습니다." _
fi
exit $STATUS
