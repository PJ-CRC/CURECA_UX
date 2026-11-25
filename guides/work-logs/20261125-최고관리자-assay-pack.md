---
status: 진행 중            # 진행 중 | 끝남 | 멈춤
requester: 최고관리자
menu: Setting · Assay Pack Setting (STN)
cids: [TI-STN-08, LI-STN-08, TI-STN-08-P, LI-STN-08-P]
policies: []
cid_system:
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3481-216078 (UX AI TEST 「Setting  Ⓛ / Ⓣ_To Be」 페이지)
test: false
basis_start: 2026-11-25 16:24 · history d1b941be
basis:
basis_versions:
  rules:
  policy:
  glossary:
  screens:
  common_ux:
started: 2026-11-25
---
# 작업 기록: Assay Pack 메뉴를 To Be 페이지로 옮겨 다시 그림

## 단계

| 단계 | 끝낸 날 | 마침 점검 | 남긴 것 |
| --- | --- | --- | --- |
| 1. 시작 · 요건 정의 | | | 겹치는 다른 작업: 없음 |
| 2. 근거 · 분석 | | | |
| 3. 화면 설계 | | | |
| 4. 수정 · 확인 | | | |
| 5. 완료 | | | |

이어서 작업할 곳: 1단계 · 요청 글 · 공유 파일에서 요건을 뽑고 대상 화면을 짚음 (Workbench 작업 페이지가 아직 「Setting  Ⓛ / Ⓣ_As Is」 — 3단계 그리기 전에 To Be로 바뀌었는지 확인, 요청자 확인 #1)

## 요청

- 요청 글: "Assay Pack 메뉴 옮겨줘" + 링크 https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3481-216078 (「Setting  Ⓛ / Ⓣ_To Be」 페이지, 지금 빈 페이지)
- 출처: Workbench 요청 R001 (최고관리자, 2026-11-25 16:21)
- 옮겨 올 기존 화면: 같은 파일 「Setting  Ⓛ / Ⓣ_As Is」 페이지의 Assay Pack Setting 화면(TI-STN-08 · LI-STN-08 · -P · -01)
- 공유 파일 없음

## 요건 목록

### 요건 1. Assay Pack Setting 메뉴를 기존 작업방에서 작업방(To Be 페이지)으로 옮겨 다시 그림
- 요청 상태: 최초
- 경로 분기 기준 (근거) · 읽는 강도: 8 옮겨 다시 그림 (케이스 3) (대상 화면 모두 `screens/tobe/` 화면 MD가 없어 케이스 3) · 케이스 3 (다시 그리기)
- 지나가는 단계: 1 → 2 → 3 → 4 → 5
- UI 작업: 대상 아님 (케이스 3 기본값, 다시 그리며 바뀐 곳이 생기면 4단계 UX 확정 때 다시 정함)

| 대상 화면 | 케이스 | 작업 대상 | 근거 |
| --- | --- | --- | --- |
| Assay Pack Setting (TI-STN-08) | 3 | O | |
| Assay Pack Setting (LI-STN-08) | 3 | O | 짝 화면 · 함께 고침 (요청 글: 메뉴를 옮김, 메뉴 페이지 「Setting Ⓛ / Ⓣ」에 T · L 함께 있음) |
| Assay Pack File Details (TI-STN-08-P) | 3 | O | 같은 메뉴 화면 (요청 글: 메뉴를 옮김, IA Assay Pack Setting > Details) |
| Assay Pack File Details (LI-STN-08-P) | 3 | O | 짝 화면 · 함께 고침 (요청 글: 메뉴를 옮김) |
| **Import file 팝업 (TI-STN-08-01, IA에 없음)** | 3 | **미정** | → 아래 요청자 확인 2 (IA와 화면이 다름) |

### 찾았지만 대상 아님

다른 화면 없음 (화면 MD `screens/`에서 STN-08이 나오는 곳은 이 네 화면 MD뿐. 메뉴를 옮기는 요건이라 같은 글자 · Common UX 번호로 찾을 바뀌는 요소가 없음)

### 영향 화면

없음 (위와 같음. 2단계에서 정책으로 찾은 것이 있으면 더함)

작업이 지나가는 단계: 1 → 2 → 3 → 4 → 5

## 읽은 화면

| 화면 (CID) | 읽은 것 (화면 MD / 기획 프레임 / 케이스 프레임 / 호출 화면) | Figma 링크 |
| --- | --- | --- |
| Assay Pack Setting (TI-STN-08) | 화면 MD (다시 옮김 · 바뀐 곳 있음: 디스크립션 3 · 4-1에 [팝업 정의] · [Import 정의] · [정책] 참조와 4 정렬 줄이 원본에 있음, 화면 글자 Items 24, 2.1 2차), 케이스 프레임 없음 | https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7669-175417 |
| Assay Pack Setting (LI-STN-08) | 화면 MD (다시 옮김 · 바뀐 곳 있음: 예전 MD는 요약뿐이라 화면 글자 · 디스크립션 원문 전체를 씀, path 「(L-IOS · 조회 전용)」, 2.1 2차), 케이스 프레임 없음 | https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7669-181039 |
| Assay Pack File Details (TI-STN-08-P) | 화면 MD (다시 옮김 · 바뀐 곳 있음: 원본 패널 화면 「Assay Pack Setting」 · 경로 「… > File details」, 4에 정의 프레임 참조, [Save] 뒤 「& Toast」는 원본에 없어 뺌, 2.1 2차), 케이스 프레임 없음 | https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7669-175713 |
| Assay Pack File Details (LI-STN-08-P) | 화면 MD (다시 옮김 · 바뀐 곳 있음: 예전 MD는 요약뿐이라 원문 전체를 씀, 원본 패널 화면 · 경로 반영, 2.1 2차), 케이스 프레임 없음 | https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7669-181335 |
| Import file 팝업 (TI-STN-08-01) | 호출 화면: TI-STN-08 [Import]에서 열림(디스크립션 3). IA에 없어 화면 MD는 옮기지 않음 (요청자 확인 2) | https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7669-177368 |

- 반영 대기 목록(`pending/open.md`)에서 네 CID의 줄을 읽음 (아래 "대상 화면의 반영 대기 항목")
- 최신 영역: 네 CID 모두 기획 프레임(너비 2252)이 한 곳에만 있음(Setting 페이지 2.1 2차 영역). 1280 프레임 · 기획 프레임 밖 1920 프레임은 열지 않음
- 다시 옮길 때 To-Be 화면 MD 빈 틀 `screens/tobe/setting/{TI-STN-08 · TI-STN-08-P · LI-STN-08 · LI-STN-08-P}.md`를 만듦
- Module · Unit 이름이 나오지 않는 화면이라 `glossary/modules.csv` 대조는 해당 없음

## 뒤 단계용 확인 항목(claude)

| # | 무엇 (절차 4번 순서 3 "뒤 단계로 넘김"의 1 ~ 4) | 관련된 곳 (CID · 디스크립션 번호) | 넘기는 곳 (2단계 / 3단계 질문 대기) | 이어진 번호 (Q · C · 논의 대상 ID / 근거로 풀림) |
| --- | --- | --- | --- | --- |
| 1 | 1. 기능 정의가 안 된 요소: 디스크립션이 정의를 다른 프레임([TI-STN-08 / 세부정의] · [팝업 정의] · [Import 정의] · [정책], [TI/LI-STN-08-P 유형별 정의])으로 넘김. 그 프레임 내용은 화면 MD에 옮기지 않았음 | TI-STN-08 #1-4 · #3 · #4-1, TI-STN-08-P #3 · #4, LI-STN-08 #1-4, LI-STN-08-P #3 | 2단계 (정책 · Alert과 대조) | |
| 2 | 1. 기능 정의가 안 된 요소: TI-STN-08 #3 [Delete] 「삭제 & Toast」의 Toast 문구가 없음 (TI-STN-08-P #4에는 「The file has been deleted.」) | TI-STN-08 #3 | 3단계 질문 대기 | |
| 3 | 4. 요청과 기존 화면이 맞지 않는 곳: LI-STN-08 #4 「체크박스 없음」인데 화면에 Check Box/Square 인스턴스 1개가 있음 | LI-STN-08 #4 | 2단계 | |
| 4 | 4. 요청과 기존 화면이 맞지 않는 곳: Master 파일의 Active 변경 버튼이 TI-STN-08 #4-1은 「상세에 변경 버튼 미노출」, TI-STN-08-P #3은 「[Active] · [Inactive] 버튼 비활성」으로 서로 다름 | TI-STN-08 #4-1 · TI-STN-08-P #3 | 2단계 | |

## 대상 화면의 반영 대기 항목

| 묶음 (근거) | 화면 (CID) | 항목 ID | 변경 전 | 변경 후 | 반영 / 이번엔 안 함 |
| --- | --- | --- | --- | --- | --- |
| 1 화면 이름 (IA) | Assay Pack File Details (TI-STN-08-P) | TI-STN-08-P-R01 | 화면 이름 "Assay Pack Setting", Ver 0.4.0 | Assay Pack File Details (IA "Details"), 2.1.ZZ 체계 | |
| 2 무엇으로 바꿀지 아직 정해지지 않은 항목 (`ia/ia-screens.csv`) | Assay Pack Setting (TI-STN-08) | TI-STN-08-R02 | Import file 팝업 TI-STN-08-01이 IA에 없음 | IA에 추가할지 확인 | |

- LI-STN-08-R01(번호 정리) · TI-STN-08-R01(Ver 2.1.ZZ 체계로)은 케이스 3 규칙(빈 번호 · 기존 Ver 그대로)과 부딪혀 `제외 (2026-11-25)`로 바꿔 `pending/closed.md`로 옮김. TI-STN-08-P-R01의 Ver 부분도 같은 까닭으로 반영하지 않음(화면 이름만 해당)

## 근거

## 설계

## 질문 대기

| 번호 (Q) | 질문 | 관련된 곳 (CID · 디스크립션 번호) | 논의 대상 | T · L 같음 | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- | --- |

## 변경 확인

| 번호 (C) | 기존 화면 | 바꿔 그린 것 | 관련된 곳 (CID · 디스크립션 번호) | 근거 | T · L 같음 | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- | --- |

## 검토 질의

## 언어셋

## 요청자 확인

| # | 생긴 날 | 단계 · 절차 (질문 번호 또는 `예외`) | 물은 것 | 관련된 곳 (CID · 디스크립션 번호 · Language ID) | 답을 받을 때까지 둔 모습 (예외 질문만) | 답 (날짜) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-11-25 | 1단계 시작 전 (Workbench) | 그릴 곳: 어느 페이지에 그릴까요 | 요청 링크 3481-216078 (To Be) / 작업 페이지 As Is | | To Be 페이지에 그림 (2026-11-25 최고관리자, 세 번 답함). 단, Workbench 작업 페이지는 16:24 기준 아직 As Is로 저장돼 있어 3단계 그리기 전에 다시 확인 |

## 이 작업의 논의 대상

| 논의 대상 | 상태 (논의 중 / 결정) | 내용 한 줄 | 5단계 반영 |
| --- | --- | --- | --- |

## 이 작업이 남긴 것

- 다른 화면의 반영 대기 항목:
- 고친 카탈로그 줄:
