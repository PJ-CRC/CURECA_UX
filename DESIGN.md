---
name: Figma AI Run · Workbench
description: 기획자가 Figma 화면 · UX 문서 · 요청을 한 책상에서 다루는 업무 도구
colors:
  canvas: "#f6f7f9"
  paper: "#ffffff"
  paper-recessed: "#f3f6fb"
  hairline: "#e3e7ee"
  ink: "#14171c"
  ink-secondary: "#4a5260"
  ink-tertiary: "#5f6874"
  drafting-blue: "#2747d8"
  drafting-blue-wash: "#e6ebff"
  nav-blue: "#0f5fd6"
  nav-blue-wash: "#eaf2ff"
  approved-green: "#17722f"
  approved-green-wash: "#e3f4e8"
  redline: "#c4281c"
  redline-wash: "#fdecea"
  caution-amber: "#a35100"
  caution-amber-wash: "#fff1e0"
  workbench-canvas: "#d9dde3"
  dark-canvas: "#0f1115"
  dark-paper: "#171a20"
  dark-paper-recessed: "#1e232b"
  dark-hairline: "#2a3039"
  dark-ink: "#e8ebf0"
  dark-ink-secondary: "#b4bcc8"
  dark-ink-tertiary: "#8590a0"
  dark-drafting-blue: "#8ea2ff"
  dark-drafting-blue-wash: "#232c52"
  dark-nav-blue: "#7fb0ff"
  dark-nav-blue-wash: "#1c2a44"
  dark-approved-green: "#56d364"
  dark-approved-green-wash: "#16301d"
  dark-redline: "#ff7b72"
  dark-redline-wash: "#3a1f1e"
  dark-caution-amber: "#f0a24f"
  dark-caution-amber-wash: "#38270f"
typography:
  headline:
    fontFamily: "Pretendard, -apple-system, Segoe UI, Malgun Gothic, sans-serif"
    fontSize: "26px"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Pretendard, -apple-system, Segoe UI, Malgun Gothic, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.3
  subtitle:
    fontFamily: "Pretendard, -apple-system, Segoe UI, Malgun Gothic, sans-serif"
    fontSize: "17px"
    fontWeight: 800
    lineHeight: 1.4
  body:
    fontFamily: "Pretendard, -apple-system, Segoe UI, Malgun Gothic, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Pretendard, -apple-system, Segoe UI, Malgun Gothic, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Pretendard, -apple-system, Segoe UI, Malgun Gothic, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.4
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.92em"
rounded:
  xs: "6px"
  sm: "8px"
  md: "10px"
  lg: "12px"
  dialog: "14px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.drafting-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "36px"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "36px"
  button-danger:
    backgroundColor: "{colors.redline}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "36px"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "7px 10px"
    height: "36px"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "16px 20px"
  chip-status-ok:
    backgroundColor: "{colors.approved-green-wash}"
    textColor: "{colors.approved-green}"
    rounded: "{rounded.pill}"
    padding: "1px 8px"
  chip-status-warn:
    backgroundColor: "{colors.caution-amber-wash}"
    textColor: "{colors.caution-amber}"
    rounded: "{rounded.pill}"
    padding: "1px 8px"
  chip-status-danger:
    backgroundColor: "{colors.redline-wash}"
    textColor: "{colors.redline}"
    rounded: "{rounded.pill}"
    padding: "1px 8px"
  nav-item:
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "40px"
  nav-item-active:
    backgroundColor: "{colors.nav-blue-wash}"
    textColor: "{colors.nav-blue}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "40px"
  dialog:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.dialog}"
    padding: "22px 24px 20px"
    width: "360px"
---

# Design System: Figma AI Run · Workbench

## Overview

**Creative North Star: "The Design Studio Desk"**

Workbench는 설계 사무실의 책상이다. 한쪽에는 Figma 화면(도면), 다른 쪽에는 UX 문서(사양서)와 요청(작업 지시)이 펼쳐져 있고, 기획자는 그 사이를 오가며 고친다. 그래서 화면의 주인공은 늘 작업물이다. 회색 작업대(canvas) 위에 흰 종이(paper) 카드가 놓이고, 도구는 테두리 한 줄 · 글자 굵기 · 파랑 한 점으로만 자기를 드러낸다.

느낌은 **또렷하고 단단하다**. 제목은 굵게(800), 본문은 14px로 촘촘하되 줄 간격(1.6)으로 숨을 쉬게 한다. 경계는 그림자가 아니라 1px 선으로 긋고, 상태(승인 · 주의 · 오류)는 약속된 세 가지 색과 옅은 바탕으로만 말한다. 정보가 많은 업무 도구라, 한 화면 안에서 같은 뜻은 늘 같은 모양으로 보인다.

한국어 업무 문서를 다루므로 단어 단위 줄바꿈(`word-break: keep-all`)이 기본이고, 밝은 화면과 어두운 화면을 모두 같은 역할 색으로 맞춘다. 장식 배경 · 그라데이션 · 떠 있는 듯한 큰 그림자는 쓰지 않는다.

**Key Characteristics:**
- 회색 작업대 위 흰 종이 카드, 1px 선으로 나눈 평평한 층
- 파랑은 「지금 할 일」 하나와 지금 위치에만
- 상태는 초록(승인) · 주황(주의) · 빨강(오류) 세 가지, 옅은 바탕 + 진한 글자 칩
- 굵은 제목과 14px 본문, 고정폭 글꼴은 경로 · ID · 코드에만
- 밝은 · 어두운 테마 모두 같은 역할 이름(`--bg` · `--surface` · `--ink` …)으로

## Colors

중성 회색 위에 파랑 하나와 상태 색 셋. 색은 꾸밈이 아니라 뜻을 전한다.

### Primary
- **Drafting Blue** (#2747d8): 주요 버튼(요청 보내기 · 저장 · 확인), 지금 고른 항목, 포커스 고리, 링크. 어두운 테마에서는 밝은 파랑(#8ea2ff)에 버튼 글자를 거의 검정(#0f1115)으로.
- **Drafting Blue Wash** (#e6ebff): 고른 행 · 강조 칩 · 안내 상자의 바탕.

### Secondary
- **Nav Blue** (#0f5fd6) · **Nav Blue Wash** (#eaf2ff): 상단 메뉴 전용(2026-11-18 #1570ef → #0f5fd6: 옅은 파랑 바탕 위 선택 메뉴 글자 4.08 → 5.1:1). 지금 메뉴 · 로고 · 로그아웃 버튼. 본문 화면의 강조색으로 쓰지 않는다.

### Neutral
- **Canvas** (#f6f7f9): 페이지 바탕(작업대). Workbench · 프로토타입 보기처럼 작업물이 큰 화면은 더 짙은 회색 작업대(**Workbench Canvas** #d9dde3, `--canvas`)를 쓴다. 그 위 글씨는 Ink Secondary 이상(Ink Tertiary는 4.16:1이라 쓰지 않는다).
- **Paper** (#ffffff): 카드 · 패널 · 팝업 · 입력 칸.
- **Paper Recessed** (#f3f6fb): 카드 안의 한 단 낮은 구역(표 머리 · 요약 상자 · 그룹 머리 줄).
- **Hairline** (#e3e7ee): 모든 경계선 · 표 구분선 · 기본 버튼 테두리.
- **Ink** (#14171c): 제목 · 본문.
- **Ink Secondary** (#4a5260): 설명 · 보조 글.
- **Ink Tertiary** (#5f6874): 날짜 · 개수 · 경로 같은 메타 정보(옅은 바탕에서도 4.5:1 이상).

### Status
- **Approved Green** (#17722f / wash #e3f4e8): 완료 · 연결됨 · 최신 · 같음.
- **Caution Amber** (#a35100 / wash #fff1e0): 대기 · 확인 필요 · 갱신 필요 · 한도 임박.
- **Redline** (#c4281c / wash #fdecea): 오류 · 실패 · 지우기 같은 되돌리기 어려운 동작.

### Dark
같은 역할에 어두운 값을 넣는다(`appnav.css`의 다크 블록 하나가 기준). Canvas #0f1115 · Paper #171a20 · Paper Recessed #1e232b · Hairline #2a3039 · Ink #e8ebf0 / #b4bcc8 / #8590a0 · Drafting Blue #8ea2ff(wash #232c52, 그 위 버튼 글자는 `var(--bg)`) · Nav Blue #7fb0ff(wash #1c2a44) · 상태 #56d364 · #f0a24f · #ff7b72(wash #16301d · #38270f · #3a1f1e). 화면에서 다크 값을 직접 적지 않고 역할 변수만 쓴다.

### Categorical
프로젝트 탭 · 댓글 핀처럼 「서로 다름」만 보이면 되는 색 묶음은 상태 색과 따로 둔다. 흰 글씨를 얹으면 4.5:1 이상인 진한 색만 쓴다(탭: #2747d8 · #0c7a5d · #c23e0c · #7c3aed · #c2255c · #0b7285 · #8a6a00).

### Named Rules
**The One Blue Rule.** 한 화면에서 파랑으로 채운 버튼은 하나(그 화면의 주된 동작)다. 나머지 동작은 흰 바탕 + 선 버튼이다.

**The Three Signals Rule.** 상태 색은 초록 · 주황 · 빨강 셋뿐이고, 늘 「옅은 바탕 + 같은 계열 진한 글자」로 쓴다. 상태가 아닌 것(꾸밈 · 구분)에 상태 색을 쓰지 않는다.

**The Same Role Rule.** 색은 값이 아니라 역할 변수(`--accent` · `--ok` · `--line` …)로 쓴다. 어두운 테마가 같은 역할에 다른 값을 넣는다.

## Typography

**Body Font:** Pretendard (with -apple-system, Segoe UI, Malgun Gothic, sans-serif)
**Mono Font:** JetBrains Mono (with ui-monospace, Consolas, monospace)

**Character:** 한 가지 산세리프를 굵기로만 나눈다. 제목은 800으로 단단하게, 본문은 400으로 가볍게. 경로 · 파일 이름 · ID · 코드만 고정폭.

### Hierarchy
- **Headline** (800, 26px, 1.3, -0.01em): 페이지 제목(「일정/작업」 · 「프로토타입」). 한 페이지에 하나.
- **Title** (800, 22px, 1.3): 문서 · 화면 정의서 제목, 상세 패널 제목.
- **Subtitle** (800, 17px, 1.4): 카드 · 구역 · 팝업 제목.
- **Body** (400, 14px, 1.6): 본문 · 표 · 설명. 긴 글은 한 줄 70자 안팎.
- **Caption** (400 ~ 600, 13px, 1.5): 촘촘한 업무 화면의 보조 글(경로 · 날짜 · 안내 한 줄 · 목록 부가 정보). 본문(14px)보다 한 단 아래.
- **Label** (700, 12px, 1.4): 칩 · 배지 · 표 머리 · 구분 라벨. 대문자 변환 · 넓은 자간을 쓰지 않는다.
- **Mono** (0.92em): 경로 · `fileKey` · CID · 코드.

### Named Rules
**The Weight-Not-Size Rule.** 위계는 크기보다 굵기로 먼저 나눈다. 14px 본문 옆 보조 정보는 12 ~ 13px + Ink Tertiary로 한 단만 낮춘다.

**The Keep-All Rule.** 한국어는 단어 단위로 줄을 바꾼다(`word-break: keep-all`). 한 줄 정보는 말줄임(`.one-line`)으로 자른다.

## Layout

넓은 업무 화면은 창 폭을 거의 다 쓴다(좌우 여백 = 창 폭의 6%, 최소 24px). 읽는 화면(시작 안내)은 1200px, 그 밖 기본 1440px. 좁은 화면(760px 이하)은 여백 16px.

- **머리:** 위 24px · 아래 16px. 제목 26px + 설명 한 줄, 오른쪽 끝에 주요 버튼.
- **카드:** 안쪽 16px 20px, 카드 사이 16px, 구역 사이 32px.
- **목록 + 상세:** 왼쪽 목록(트리 · 항목) · 오른쪽 내용의 두 칸이 기본 업무 배치(UX 문서 · 논의 대상 · 회의록 · 작업 기록).
- **간격 단위:** 4 · 8 · 16 · 24 · 32px.
- **상단 메뉴:** 64px 높이, 스크롤해도 위에 고정, 모든 페이지에서 메뉴 위치가 1px도 바뀌지 않는다.

## Elevation & Depth

평평하다. 깊이는 그림자가 아니라 **톤(작업대 → 종이 → 한 단 낮은 구역)과 1px 선**으로 만든다. 그림자는 화면 위에 잠깐 뜨는 것(팝업 · 확인 창 · 떠 있는 메뉴)에만 쓴다.

### Shadow Vocabulary
- **Dialog lift** (`box-shadow: 0 12px 32px rgba(15,17,21,.18), 0 2px 6px rgba(15,17,21,.08)`): 확인 · 알림 팝업, 비교 창 같은 모달.
- **Backdrop** (`rgba(20,23,28,.38)`): 모달 뒤를 어둡게.

### Named Rules
**The Flat Desk Rule.** 페이지 안에 놓인 카드 · 패널 · 표는 그림자가 없다. 경계는 Hairline 1px. 그림자는 위로 떠서 다른 것을 가리는 것에만.

## Shapes

모서리는 크기에 따라 단계적으로 둥글다. 작은 조각일수록 덜, 큰 덩어리일수록 더.

- 입력 · 버튼 (8px), 상단 메뉴 버튼 (10px), 카드 · 패널 (12px), 팝업 (14px), 칩 · 배지 (완전한 알약 999px), 작은 아이콘 버튼 · 태그 (6px).
- 테두리는 늘 1px. 강조는 테두리를 두껍게 하지 않고 색을 바꾼다(호버 = Drafting Blue 선).

## Components

### Buttons
단단하고 분명하다. 무엇을 하는지 동사로 적는다(「저장」 · 「보내기」 · 「지우기」).
- **Shape:** 8px 모서리, 높이 36px(작은 것 30px), 좌우 16px, 14px 600.
- **Primary:** Drafting Blue 채움 + 흰 글자. 화면당 하나.
- **Secondary:** 흰 바탕 + Hairline 선 + Ink 글자. 호버 때 선만 Drafting Blue.
- **Danger:** 확인 팝업 안에서는 Redline 채움, 화면 안에서는 흰 바탕 + Redline 글자.
- **Focus:** 2px Drafting Blue 고리, 2px 띄움.
- **Disabled:** 투명도 45%, 커서 기본.

### Chips & Badges
- **Style:** 알약 모양, 12px 700(작은 글자 하한 12px, 2026-11-18), 옅은 바탕 + 같은 계열 진한 글자(The Three Signals Rule). 일반 정보 칩은 Paper Recessed 바탕 + Ink Secondary.
- **Count badge:** 목록 옆 숫자는 주황 wash 바탕 작은 알약.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** Paper, 페이지는 Canvas.
- **Shadow Strategy:** 없음(The Flat Desk Rule).
- **Border:** Hairline 1px.
- **Internal Padding:** 16px 20px.

### Inputs / Fields
- **Style:** Hairline 1px 선, 8px 모서리, Paper 바탕, 안쪽 7px 10px, 14px.
- **Focus:** 선을 감추고 2px Drafting Blue 안쪽 고리.
- **Error / Disabled:** 오류는 Redline 글 한 줄을 칸 아래에, 비활성은 투명도 45%.

### Navigation
- **Top bar:** 흰 바 64px, 왼쪽 로고(파란 입체 블록) + 이름, 메뉴는 40px 높이 · 10px 모서리 버튼. 지금 메뉴는 Nav Blue Wash 바탕 + Nav Blue 글자(굵기는 그대로). 오른쪽에 팀 · 사용 한도 배지 · 계정.
- **Tabs:** 글자 탭 + 지금 탭 아래 파랑 밑줄, 옆에 개수.
- **Side tree:** 목록 행은 고르면 Drafting Blue Wash 바탕.

### Dialog (확인 · 알림 · 입력)
브라우저 기본 팝업 대신 쓰는 공통 팝업(`WB.confirm` · `WB.alert` · `WB.prompt`).
- 폭 360px(긴 설명 440px), 최소 높이 200px, 14px 모서리, Dialog lift 그림자, 가운데 정렬.
- 첫 줄 = 제목(17px 800), 나머지 = 설명(문장마다 줄 바꿈). 버튼은 아래 가운데 「취소 · 확인」, 확인 버튼에는 동작 이름.
- 되돌리기 어려운 동작은 Redline 확인 버튼, 처음 포커스는 「취소」.

### Status Orb (Figma 플러그인)
Figma 안의 플러그인 창은 상태 원 하나(52px): 초록 RUN · 주황 Check · 빨강 Error. 일하는 중이면 둘레가 퍼지고, 마우스를 올리면 창이 넓어져 자세한 상태를 보인다.

## Do's and Don'ts

### Do:
- **Do** 색을 역할 변수(`--bg` · `--surface` · `--surface-2` · `--line` · `--ink` · `--accent` · `--ok` · `--warn` · `--red`)로 쓰고, 새 페이지는 `appnav.css`의 공통 색을 그대로 쓴다.
- **Do** 한 화면의 주된 동작 하나만 Drafting Blue로 채운다(The One Blue Rule).
- **Do** 상태는 「옅은 바탕 + 진한 글자」 칩으로, 초록 · 주황 · 빨강 세 가지 뜻만 쓴다.
- **Do** 경계는 1px Hairline으로 긋고, 깊이는 톤 차이로 만든다.
- **Do** 제목은 800, 본문은 14px / 1.6, 메타 정보는 12 ~ 13px Ink Tertiary로.
- **Do** 밝은 · 어두운 테마를 같은 역할로 함께 맞춘다(어두운 테마의 채운 버튼 글자는 #0f1115).
- **Do** 버튼 · 팝업 확인 버튼에 무엇을 하는지 동사로 적는다.

### Don't:
- **Don't** 그라데이션 · 장식 배경 · 장식 도형을 쓰지 않는다.
- **Don't** 페이지 안 카드 · 패널에 큰 그림자를 주어 띄우지 않는다. 그림자는 팝업 · 떠 있는 메뉴만.
- **Don't** 상단 메뉴의 Nav Blue를 본문 강조색으로 가져오지 않는다.
- **Don't** 상태가 아닌 곳에 초록 · 주황 · 빨강을 쓰지 않는다.
- **Don't** 브라우저 기본 `confirm` · `alert` · `prompt`를 쓰지 않는다(공통 팝업을 쓴다).
- **Don't** 라벨을 대문자 · 넓은 자간으로 꾸미지 않는다.
- **Don't** 테두리를 두껍게 해서 강조하지 않는다(색을 바꾼다).
