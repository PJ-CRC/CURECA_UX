---
status: 진행 중            # 진행 중 | 끝남 | 멈춤
requester: 최고관리자
menu: Setting · Assay Pack Setting (STN)
cids: [TI-STN-08, LI-STN-08, TI-STN-08-P, LI-STN-08-P, TI-STN-08-01]
policies: []
cid_system:
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3481-216078 (UX AI TEST 「Setting  Ⓛ / Ⓣ_To Be」 페이지)
test: false
basis_start: 2026-11-26 09:11 · history 8d250d2f
basis:
basis_versions:
  rules:
  policy:
  glossary:
  screens:
  common_ux:
started: 2026-11-26
---
# 작업 기록: Assay Pack Setting 화면을 To Be 페이지에 처음부터 다시 그림

## 단계

| 단계 | 끝낸 날 | 마침 점검 | 남긴 것 |
| --- | --- | --- | --- |
| 1. 시작 · 요건 정의 | | | 겹치는 다른 작업: 있음 (20261125-최고관리자-assay-pack, 대상 화면 모두 겹침. 요청자 답으로 새 작업, 처리는 요청자 확인 4) |
| 2. 근거 · 분석 | | | |
| 3. 화면 설계 | | | |
| 4. 수정 · 확인 | | | |
| 5. 완료 | | | |

이어서 작업할 곳: 1단계 · 요건 목록 확인 질문 보냄(R003 보류), 요청자가 "하나씩 정하기"로 답해(2026-11-26 09:14) 요청자 확인 2 · 3 · 4 답 받음(넣음 / asis 다시 추출 / 기존 작업 멈춤 · 반영 대기 옮김 · To-Be 화면 MD 빈 틀 만듦), 요청자 확인 5 답 받음(이대로 진행), asis 다시 추출 · 1단계 읽기 다시 함(2026-11-26), 요청자 확인 6 물음, 답 기다림 → 답대로 요건 목록 · 머리말 고치고, 요청자 확인 4 답에 따라 To-Be 화면 MD 빈 틀 만들기, 요청자 확인 3 답에 따라 asis 다시 추출 (다시 읽을 곳: 1단계 절차 5 "답을 받은 뒤" · "케이스 3 (이행 기간)" 3 · 4 / 작업 기록 "요청자 확인" · "요건 목록" · "읽은 화면")

## 요청

- 요청 글: "https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-235028 여기가 AS IS / Assay Pack Setting 화면 다시 그려줘" (링크 = 같은 파일 「Setting  Ⓛ / Ⓣ_As Is」 페이지)
- 출처: Workbench 요청 R003 (최고관리자, 2026-11-26 09:09). 요청 페이지 「Setting  Ⓛ / Ⓣ_To Be」
- 진행 중인 작업 기록 20261125-최고관리자-assay-pack(같은 화면, 4단계)과 겹쳐 물었고, 답 "새 작업으로 시작 (1단계부터 처음부터 다시 그림)" (최고관리자, 2026-11-26 09:10)
- 공유 파일 없음

## 요건 목록

### 요건 1. Assay Pack Setting 화면을 「Setting  Ⓛ / Ⓣ_As Is」 기준으로 「Setting  Ⓛ / Ⓣ_To Be」 페이지에 처음부터 다시 그림
- 요청 상태: 최초
- 경로 분기 기준 (근거) · 읽는 강도: 8 옮겨 다시 그림 (케이스 3) (요청 글 "다시 그려줘" + 요청자 답 "처음부터 다시 그림") · 케이스 3 (다시 그리기)
- 지나가는 단계: 1 → 2 → 3 → 4 → 5
- UI 작업: 대상 아님 (케이스 3 기본값, 다시 그리며 바뀐 곳이 생기면 4단계 UX 확정 때 다시 정함)

| 대상 화면 | 케이스 | 작업 대상 | 근거 |
| --- | --- | --- | --- |
| Assay Pack Setting (TI-STN-08) | 3 | O | |
| Assay Pack Setting (LI-STN-08) | 3 | O | 짝 화면 · 함께 고침 (두 화면에 같은 목록 · 검색 · 상세 기능, L-IOS는 조회 전용) |
| Assay Pack File Details (TI-STN-08-P) | 3 | O | 같은 메뉴 화면 · 대상 (IA Assay Pack Setting > Details, TI-STN-08 [Details]가 엶) |
| Assay Pack File Details (LI-STN-08-P) | 3 | O | 짝 화면 · 함께 고침 (두 화면에 같은 상세 기능, L-IOS는 조회 전용) |
| Import file 팝업 (TI-STN-08-01, IA에 없음) | 3 | O | TI-STN-08 #3 [Import]가 여는 팝업 · 넣음 (요청자 답, 2026-11-26). IA에는 5단계에 더함 |

- 케이스: To-Be 화면 MD 머리말 `figma`에 이전 작업(20261125-최고관리자-assay-pack)이 그린 섹션 링크가 있어 표로는 케이스 1이지만, 요청자 답이 "처음부터 다시 그림"이라 케이스 3 "예전에 그린 메뉴도 처음부터 다시 그림(2026-11-25 결정)"으로 가름

### 찾았지만 대상 아님

다른 화면 없음 (화면 MD `screens/tobe/` · `screens/asis/`에서 STN-08이 나오는 곳은 이 다섯 화면 MD뿐. 옮겨 다시 그리는 요건이라 같은 글자 · Common UX 번호로 찾을 바뀌는 요소가 없음)

### 영향 화면

없음 (위와 같음. 2단계에서 정책으로 다시 찾음)

작업이 지나가는 단계: 1 → 2 → 3 → 4 → 5

## 읽은 화면

| 화면 (CID) | 읽은 것 (화면 MD / 기획 프레임 / 케이스 프레임 / 호출 화면) | Figma 링크 |
| --- | --- | --- |
| Assay Pack Setting (TI-STN-08) | 화면 MD (asis, 2026-11-26 「Setting  Ⓛ / Ⓣ_As Is」에서 다시 옮김, 케이스 절: 세부정의 1-1 등록된 파일 없음 · 1-2 검색 결과 없음, 참조 섹션: Import 정의) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-235198 |
| Assay Pack Setting (LI-STN-08) | 화면 MD (asis, 같음, 케이스 없음) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-238191 |
| Assay Pack File Details (TI-STN-08-P) | 화면 MD (asis, 같음, 케이스 절: 파일 종류별 패널 Master · Pretreatment · Extraction · PCR, 참조 섹션: 유형별 정의) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-235494 |
| Assay Pack File Details (LI-STN-08-P) | 화면 MD (asis, 같음, 케이스 절 · 참조 섹션 T-IOS와 같은 구성, 조회 전용) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-238487 |
| Import file 팝업 (TI-STN-08-01) | 화면 MD (asis, 같음, 두 모양은 TI-STN-08 참조 섹션 Import 정의 ① · ②) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-237146 |

- 1단계 읽기는 asis 화면 MD로만 함. asis 화면 MD는 요청자 확인 3 답대로 「Setting  Ⓛ / Ⓣ_As Is」 페이지(3288:235028)에서 2026-11-26에 다시 추출함(케이스 3 (이행 기간) 3, 도구 `tools/figma/extract-screen.js`를 이 파일 · 페이지로 바꿔 실행). 디스크립션 · 화면 글자는 2026-11-25 추출본과 같고, 머리말 figma · 케이스 · 참조 섹션 · TI-STN-08-01 배경 목록이 바뀜
- 디스크립션이 가리키는데 As Is 페이지에 없는 프레임: [TI-STN-08 / 팝업 정의] · [TI-STN-08 / 정책] · [LI-STN-08 / 세부정의], [TI-STN-08 / Import 정의]의 5 · 7번 → 요청자 확인 6
- 기획 프레임 밖 1920 프레임(TI-STN-08 다섯 · TI-STN-08-01 둘 · TI-STN-08-P 하나)은 UI 화면일 수 있어 열지 않음
- Module · Unit 이름: 케이스 패널의 Storage Location Info(ConsumableStorage · Trolley, PlateSealing · ColdStorage)는 시약 파일 값 예시라 `glossary/modules.csv` 대조는 2단계 기준데이터 대조로 넘김(뒤 단계용 6)
- To-Be 화면 MD 빈 틀: 요청자 확인 4 답 뒤 `screens/tobe/setting/{TI-STN-08 · LI-STN-08 · TI-STN-08-P · LI-STN-08-P · TI-STN-08-01}.md`를 `templates/screen.md` 빈 틀로 다시 씀 (2026-11-26, 지난 내용은 git 기록)
## 뒤 단계용 확인 항목(claude)

| # | 무엇 (절차 4번 순서 3 "뒤 단계로 넘김"의 1 ~ 5) | 관련된 곳 (CID · 디스크립션 번호) | 넘기는 곳 (2단계 / 3단계) | 이어진 번호 (Q · C · 논의 대상 ID / 근거로 풀림) |
| --- | --- | --- | --- | --- |
| 1 | 1. 기능 정의가 안 된 요소: [Delete] 「삭제 & Toast」의 Toast 문구가 없음 (TI-STN-08-P #4에는 「The file has been deleted.」) | TI-STN-08 #3 | 3단계 | |
| 2 | 2. Alert · Confirm 보완 필요 지점: 파일을 고른 채 [X] · ESC · [Cancel]로 닫을 때 다시 묻는지 디스크립션에 없음 | TI-STN-08-01 화면 노출 경로 · #3 | 2단계 | |
| 3 | 2. Alert · Confirm 보완 필요 지점: Active · Inactive를 바꾸고 [Save] 없이 [닫기] · 다른 Row [Details]를 누를 때 다시 묻는지 디스크립션에 없음 | TI-STN-08-P #2-1 · #3-1 | 2단계 | |
| 4 | 4. 요청과 기존 화면이 맞지 않는 곳: Master 파일의 Active 변경 버튼이 TI-STN-08 #4-1은 「상세에 변경 버튼 미노출」, TI-STN-08-P #3은 「[Active] · [Inactive] 버튼 비활성」으로 서로 다름 | TI-STN-08 #4-1 · TI-STN-08-P #3 | 2단계 | |
| 5 | 5. 대상 화면에서 찾은 고칠 점: 패널 화면 정보 title `Assay Pack Setting` → `Assay Pack File Details` (IA "Details", 화면 MD 제목과 다름) | TI-STN-08-P · LI-STN-08-P | 3단계 | |
| 6 | 5. 대상 화면에서 찾은 고칠 점: 케이스 패널의 Storage Location Info Module · Unit 값(ConsumableStorage · Trolley, PlateSealing · ColdStorage)이 `glossary/modules.csv` · `module-units.csv` 이름인지 확인 | TI-STN-08-P · LI-STN-08-P 케이스 | 2단계 | |
| 7 | 5. 대상 화면에서 찾은 고칠 점: TI-STN-08-01 배경 목록의 Master 줄 Product Name 「-」 · Active 모두 Inactive가 TI-STN-08 목록(「Master Info」 · Active 4줄)과 다름 | TI-STN-08-01 배경 · TI-STN-08 #4 | 3단계 | |
| 8 | 5. 대상 화면에서 찾은 고칠 점: LI-STN-08-P 케이스 Extraction Barcode Info 머리 「Schema Name」 · PCR 구성품 「Barcode Scheme Name」이 다른 곳(「Barcode Schema Name」)과 다름 | TI-STN-08-P · LI-STN-08-P 케이스 | 3단계 | |

## 대상 화면의 반영 대기 항목

| 묶음 (근거) | 화면 (CID) | 항목 ID | 변경 전 | 변경 후 | 반영 / 이번엔 안 함 / 제외 (바꾸지 않음) |
| --- | --- | --- | --- | --- | --- |
| 1 화면 이름 (IA) | Assay Pack File Details (TI-STN-08-P) | TI-STN-08-P-R01 | 화면 이름 "Assay Pack Setting", Ver 0.4.0 | Assay Pack File Details (IA "Details"), 2.1.ZZ 체계 | 반영 (2026-11-26, 요청자 확인 4: 멈춘 20261125-최고관리자-assay-pack에서 옮김. 화면 이름만, Ver은 케이스 3이라 기존 Ver 그대로) |
| 2 IA (`ia/ia-screens.csv`) | Assay Pack Setting (TI-STN-08) | TI-STN-08-R02 | Import file 팝업 TI-STN-08-01이 IA에 없음 | IA에 추가 | 반영 (2026-11-26, 요청자 확인 2 · 4) |

- 대상 화면에 `대기` 항목 없음. 위 둘은 멈춘 20261125-최고관리자-assay-pack의 `작업 중` 항목을 요청자 확인 4 답대로 이 작업의 `작업 중`으로 옮긴 것(`pending/open.md`)

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
| 1 | 2026-11-26 | 1단계 · 시작 전 (Workbench 겹침 확인) | Assay Pack Setting 다시 그리기를 진행 중인 작업 기록 20261125-최고관리자-assay-pack으로 이어 할지, 새 작업으로 처음부터 할지 | TI-STN-08 · LI-STN-08 · TI-STN-08-P · LI-STN-08-P · TI-STN-08-01 | | 새 작업으로 시작 (1단계부터 처음부터 다시 그림) (2026-11-26) |
| 2 | 2026-11-26 | 1단계 · 절차 5 질문 5 | Import file 팝업 (TI-STN-08-01, IA에 없음)도 이번 작업에 넣을지 (TI-STN-08 #3 [Import]가 엶. 넣으면 IA에는 5단계에 더함) | TI-STN-08 #3 · TI-STN-08-01 | | 넣음 (2026-11-26) |
| 3 | 2026-11-26 | 1단계 · 절차 4 (asis 추출 빠짐) | asis 화면 MD가 요청 글의 원본(같은 파일 「Setting  Ⓛ / Ⓣ_As Is」 페이지)이 아니라 기존 작업방 파일에서 옮긴 것이고, 디스크립션이 가리키는 세부정의 · 팝업 정의 · Import 정의 · 정책 · 유형별 정의 프레임 내용(참조 섹션)이 없음. As Is 페이지에서 다시 추출한 뒤 진행할지 | TI-STN-08 #1-4 · #3 · #4-1, LI-STN-08 #1-4, TI-STN-08-P #3 · #4, LI-STN-08-P #3, TI-STN-08-01 #1 · #3 | | As Is 페이지에서 다시 추출한 뒤 진행 (2026-11-26) |
| 4 | 2026-11-26 | 1단계 · 절차 2 순서 6 (겹침) | 진행 중인 20261125-최고관리자-assay-pack을 멈춤으로 두고, 그 작업이 만든 To-Be 화면 MD 다섯 개 · To Be 페이지 섹션을 이번에 처음부터 다시 쓸지, 그 작업의 반영 대기 TI-STN-08-P-R01 · TI-STN-08-R02를 이 작업으로 옮길지 | TI-STN-08 · LI-STN-08 · TI-STN-08-P · LI-STN-08-P · TI-STN-08-01, TI-STN-08-P-R01 · TI-STN-08-R02 | | 멈춤으로 두고 결과물(To-Be 화면 MD · To Be 페이지 섹션)을 처음부터 다시 씀, 반영 대기 두 항목은 이 작업으로 (2026-11-26) |
| 5 | 2026-11-26 | 1단계 · 절차 5 질문 7 | 위 요건 목록(요건 1 · 경로 분기 기준 8 · 케이스 3)과 흐름(1 → 2 → 3 → 4 → 5)대로 진행할지 | 요건 1 | | 이대로 진행 (2026-11-26) |
| 6 | 2026-11-26 | 1단계 · 절차 4 (asis 추출 빠짐) | 디스크립션이 가리키는 [TI-STN-08 / 팝업 정의] · [TI-STN-08 / 정책] · [LI-STN-08 / 세부정의] 프레임과 [TI-STN-08 / Import 정의] 5 · 7번이 As Is 페이지에 없음. 2단계에서 Alert 카탈로그 · POL-TST-008 · [TI-STN-08 / 세부정의]로 대신 확인하고 넘어갈지, 원본 프레임을 As Is 페이지에 옮겨 둔 뒤 다시 추출할지 | TI-STN-08 #1-4 · #3 · #4-1, LI-STN-08 #1-4, TI-STN-08-P #4, TI-STN-08-01 #1 · #3 | | |

## 이 작업의 논의 대상

| 논의 대상 | 상태 (논의 중 / 결정) | 내용 한 줄 | 5단계 반영 |
| --- | --- | --- | --- |

## 이 작업이 남긴 것

- 다른 화면의 반영 대기 항목:
- 고친 카탈로그 줄:
