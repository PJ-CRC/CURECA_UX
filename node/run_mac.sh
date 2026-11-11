#!/bin/bash
# Node 서버 실행 (맥): Figma AI Run.app이 --no-start로 Node만 준비하고(처음 한 번 받기) 8765로 띄운다. 직접 실행하면 기본 8766(시험용)
#  - Node.js는 설치하지 않는다(B 방식): node/NODE_VERSION의 공식 Node를 처음 한 번 nodejs.org에서 받아 PC별 폴더에 둔다
#    ~/Library/Application Support/UX_AI_TEST_Workbench/node/{버전}/bin/node — 받은 파일은 공식 SHASUMS256.txt로 확인한다
#  - 실행: bash node/run_mac.sh [--port 8766] [--readonly] [--no-start]
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"; ROOT="$(dirname "$HERE")"
VER="$(tr -d '[:space:]' < "$HERE/NODE_VERSION")"
[[ "$VER" =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]] || { echo "NODE_VERSION 형식이 아닙니다: $VER"; exit 1; }
case "$(uname -m)" in arm64) ARCH=arm64 ;; *) ARCH=x64 ;; esac
BASE="$HOME/Library/Application Support/UX_AI_TEST_Workbench/node"
DIR="$BASE/$VER"; NODE="$DIR/bin/node"
PORT=8766; RO=""; NOSTART=""
while [ $# -gt 0 ]; do case "$1" in --port) PORT="$2"; shift ;; --readonly) RO="--readonly" ;; --no-start) NOSTART=1 ;; esac; shift; done

if [ ! -x "$NODE" ]; then
  mkdir -p "$BASE"; NAME="node-$VER-darwin-$ARCH"; TMP="$(mktemp -d "$BASE/_dl_XXXX")"
  trap 'rm -rf "$TMP"' EXIT
  echo "  Node $VER 받는 중(처음 한 번, 약 55MB): https://nodejs.org/dist/$VER/$NAME.tar.gz"
  curl -fsSL "https://nodejs.org/dist/$VER/$NAME.tar.gz" -o "$TMP/$NAME.tar.gz"
  WANT="$(curl -fsSL "https://nodejs.org/dist/$VER/SHASUMS256.txt" | awk -v f="$NAME.tar.gz" '$2==f {print $1}')"
  GOT="$(shasum -a 256 "$TMP/$NAME.tar.gz" | awk '{print $1}')"
  [ -n "$WANT" ] && [ "$WANT" = "$GOT" ] || { echo "받은 파일의 확인값이 공식 값과 다릅니다. 다시 실행해 주세요."; exit 1; }
  tar -xzf "$TMP/$NAME.tar.gz" -C "$TMP"
  rm -rf "$DIR"; mv "$TMP/$NAME" "$DIR"
  echo "  Node $VER 준비됨: $DIR"
fi
for d in "$BASE"/v*; do [ -d "$d" ] && [ "$(basename "$d")" != "$VER" ] && rm -rf "$d"; done
[ -n "$NOSTART" ] && { "$NODE" -v; exit 0; }
exec "$NODE" "$HERE/server/main.js" --port "$PORT" --root "$ROOT" $RO
