---
status: 진행 중            # 진행 중 | 끝남 | 멈춤
requester: 서보경
menu: Event History (EVT)
cids: [TI-EVT-P, LI-EVT-P, TI-EVT-01-P, LI-EVT-01-P, TI-EVT-02-P, LI-EVT-02-P]
policies: []            # 2단계: 고칠 정책 없음 (2026-11-26)
cid_system:
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3577-18413
test: false
basis_start: 2026-11-25 21:17 · history 5ec517c7
basis: 2026-11-26 20:00 · history a15b3986
basis_versions:
  rules: CURECA 작업규칙 @2026-11-26 14:30
  policy: 정책서 @2026-11-25 21:21
  glossary: 기준데이터 @2026-11-26 15:17
  screens: 화면 정의서 @2026-11-26 03:39
  common_ux: Common UX (common-ux/comm-index.md) @2026-11-25 16:08
started: 2026-11-25
---
# 작업 기록: Event History 화면을 Event History_tobe 페이지로 옮겨 다시 그림

## 단계

| 단계 | 끝낸 날 | 마침 점검 | 남긴 것 |
| --- | --- | --- | --- |
| 1. 시작 · 요건 정의 | 2026-11-25 | 요청자 확인 2026-11-25 | 겹치는 다른 작업: 없음 |
| 2. 근거 · 분석 | 2026-11-26 | 물을 것 없음 (2026-11-26) | 정책 수정 범위 없음, 질문 대기 Q1 ~ Q4, 변경 확인 C1 ~ C12 |
| 3. 화면 설계 | 2026-11-26 | 기계 검사 통과 (2026-11-26) | 6개 화면 MD · Figma, 질문 대기 Q1 ~ Q7, 변경 확인 C1 ~ C31 |
| 4. 수정 · 확인 | | | 진행 중: 절차 1 끝남, 검토 질의 1 ~ 14 반영, 절차 3 순서 2 기계 검사 통과 · 순서 3 UI 작업 줄 `대상 아님` (2026-11-26). 질의 14가 UX 확정 답 뒤에 들어와 UX 확정 다시 물음 |
| 5. 완료 | | | |

이어서 작업할 곳: 4단계 절차 3 · UX 확정 답 받음 (2026-11-26, 서보경, 요청자 확인 12), UI 작업 줄 `대상 아님` 기입. 순서 2 기계 검사 여부 물음 (요청자 확인 13), 답 기다림 → 그 뒤 절차 3 순서 5 ~ 8 (업데이트 메모 · basis · 기획 진행 표시 검토 완료 · 이어 갈 곳), 기계 검사 여부는 순서 2대로 (질의 14 뒤 고친 화면 LI-EVT-P · LI-EVT-01-P) (다시 읽을 곳: 4단계 절차 3 / 작업 기록 "변경 확인" (맞음 · 업데이트 메모 O 줄))

## 요청

- "Event History 화면 옮겨줘" — Workbench 요청 R001 (서보경, 2026-11-25 21:16)
- 기존 화면: `Event History_asis` 페이지 https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-45275
- 옮길 페이지: `Event History_tobe` 페이지 https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3577-18413
- 공유 파일 없음

## 요건 목록

### 요건 1. Event History 메뉴의 기존 화면을 `Event History_tobe` 페이지로 옮겨 다시 그림
- 요청 상태: 최초
- 경로 분기 기준 (근거) · 읽는 강도: 8 옮겨 다시 그림 (케이스 3) (요건 목록의 모든 줄이 케이스 3, 바꾸는 요건 없음) · 케이스 3 (다시 그리기)
- 지나가는 단계: 1 → 2 → 3 → 4 → 5
- UI 작업: 대상 아님 (케이스 3 기본값. 다시 그리며 바뀐 곳이 생기면 4단계 UX 확정 때 다시 정함) → 확정 값 `대상 아님` (2026-11-26, 서보경: 「우선 UI 작업은 없음」. Claude 추천 `대상`과 다름)

| 대상 화면 | 케이스 | 작업 대상 | 근거 |
| --- | --- | --- | --- |
| Event History (TI-EVT-P) | 3 | O | 요청 글: `Event History_asis` 페이지 전체 (페이지의 기획 프레임 6개) |
| Event History (LI-EVT-P) | 3 | O | 짝 화면 · 함께 옮김 (요청 글: 페이지 전체) |
| Event History Detail (TI-EVT-01-P) | 3 | O | 요청 글: 페이지 전체 |
| Event History Detail (LI-EVT-01-P) | 3 | O | 짝 화면 · 함께 옮김 (요청 글: 페이지 전체) |
| Event Message Popup (TI-EVT-02-P) | 3 | O | 요청 글: 페이지 전체 |
| Event Message Popup (LI-EVT-02-P) | 3 | O | 짝 화면 · 함께 옮김 (요청 글: 페이지 전체) |

작업이 지나가는 단계: 1 → 2 → 3 → 4 → 5

### 찾았지만 대상 아님

| 찾은 화면 (CID) | 찾은 법 (말 · 번호 · CID) | 대상이 아닌 이유 |
| --- | --- | --- |
| Profile 화면 (TI-CPW-01-P) | 호출 관계 (본문에 TI-EVT-02-P: "노출 팝업 예시 참고") | 옮겨 다시 그리는 요건이라 Event Message Popup의 동작이 바뀌지 않음. 예시로 가리키기만 함 |

### 영향 화면

없음 — 같은 글자 · Common UX 번호 · 호출 관계로 찾았으나 다른 메뉴에서 맞춰 고칠 화면이 없음

## 읽은 화면

| 화면 (CID) | 읽은 것 (화면 MD / 기획 프레임 / 케이스 프레임 / 호출 화면) | Figma 링크 |
| --- | --- | --- |
| Event History (TI-EVT-P) | asis 화면 MD, 케이스 프레임 (`case` 3543:47370 — 툴팁 케이스 하나, 화면 MD 케이스 절과 같음) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-47110 |
| Event History (LI-EVT-P) | asis 화면 MD, 케이스 프레임 (`case` 3543:47066 — 툴팁 케이스 하나, 화면 MD 케이스 절과 같음) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-46804 |
| Event History Detail (TI-EVT-01-P) | asis 화면 MD (케이스 프레임 없음) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-47409 |
| Event History Detail (LI-EVT-01-P) | asis 화면 MD, 케이스 프레임 (`case` 3543:46798 — Resolution Notes 입력 세 장면, 화면 MD 케이스 절과 같음) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-46640 |
| Event Message Popup (TI-EVT-02-P) | asis 화면 MD (케이스 프레임 없음) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-47691 |
| Event Message Popup (LI-EVT-02-P) | asis 화면 MD (케이스 프레임 없음) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-47634 |

## 뒤 단계용 확인 항목(claude)

| # | 무엇 (절차 4번 순서 3 "뒤 단계로 넘김"의 1 ~ 5) | 관련된 곳 (CID · 디스크립션 번호) | 넘기는 곳 (2단계 / 3단계) | 이어진 번호 (Q · C · 논의 대상 ID / 근거로 풀림) |
| --- | --- | --- | --- | --- |
| 1 | 1. 기능 정의가 안 된 요소: 목록 아래 페이지 번호(1 ~ 10)에 번호 · 설명이 없음 | TI-EVT-P · LI-EVT-P #3 | 3단계 | 근거로 풀림 (Common UX COMM-5-l Type 1 Number, 디스크립션 8로 더함) · C25 |
| 2 | 1. 기능 정의가 안 된 요소: 목록 행을 누르면 상세로 넘어가는 동작이 목록 디스크립션에 없음 (상세 화면 0 진입 방법에만 있음) | TI-EVT-P · LI-EVT-P #3 | 3단계 | 근거로 풀림 (TI-EVT-01-P · LI-EVT-01-P 디스크립션 0 진입 방법) |
| 3 | 1. 기능 정의가 안 된 요소: 기간 검색에서 최대 1년을 넘게 고르면 어떻게 되는지 없음 | TI-EVT-P · LI-EVT-P #1 | 3단계 | 근거로 풀림 (Common UX COMM-5-d Date Calendar: 선택일로부터 최대 1년까지만 선택 가능) |
| 4 | 1. 기능 정의가 안 된 요소: 화면 번호 표시 1-2(Status)에 디스크립션 블록이 없음 | TI-EVT-01-P #1-2 | 3단계 | 근거로 풀림 (POL-EVT-002 규칙 1: T-IOS는 Status를 보여 주기만 함) · C3 |
| 5 | 2. Alert · Confirm 보완 필요 지점: Resolution Notes 입력 중 Cancel · 닫기를 누르면 입력한 내용이 반영되지 않는데, 다시 묻는 Confirm이 디스크립션에 없음 | LI-EVT-01-P #3 · #6 | 2단계 | Cancel은 근거로 풀림 (POL-EVT-002 규칙 5: 취소하면 반영하지 않음) · 입력 중 닫기 · List는 Q2 |
| 6 | 5. 대상 화면에서 찾은 고칠 점: Unit `Sample Processing`은 기준데이터에 없는 예전 이름 (`Sample Processing (Upper)` / `Sample Processing (Lower)` 가운데 무엇인지 정해지지 않음) | TI-EVT-P · LI-EVT-P #3 목록 3행 | 3단계 | C6 |
| 7 | 5. 대상 화면에서 찾은 고칠 점: Module 이름과 번호 사이 띄어쓰기 `Sample Storage(1)` · `High-throughput Extraction(1)` · `Flexible Extraction(1)` · `PCR Setup(1)` · `Universal PCR(1)` → `Sample Storage (1)` 등 (`glossary/glossary.md` 이름과 번호 띄어 씀). TI-EVT-02-P는 반영 대기 TI-EVT-02-P-R04에 있음 | LI-EVT-P #3 목록, LI-EVT-02-P #7 | 3단계 | 근거로 풀림 (glossary.md 이름과 번호 띄어 씀) · C7 |
| 8 | 5. 대상 화면에서 찾은 고칠 점: 검색 라벨 `Event Id, Code` → `Event ID, Code` (LI-EVT-P 화면 · 디스크립션과 맞춤) | TI-EVT-P #1 | 3단계 | 근거로 풀림 (LI-EVT-P 화면 글자, 반영 대기 TI-EVT-P-R05) |
| 9 | 5. 대상 화면에서 찾은 고칠 점: Type 기본값 `all` → `All` | TI-EVT-P · LI-EVT-P #1 | 3단계 | C8 |
| 10 | 5. 대상 화면에서 찾은 고칠 점: 목록 요약 화면 글자 `Items`와 디스크립션 `Total Event`가 다름 (무엇으로 맞출지 정해지지 않음) | TI-EVT-P · LI-EVT-P #2 | 3단계 | Q1 |
| 11 | 5. 대상 화면에서 찾은 고칠 점: 디스크립션 `Created Date`와 화면 `Occurred Date/Time`이 다름 (TI는 반영 대기 TI-EVT-01-P-R02에 있음) | LI-EVT-01-P #1 | 3단계 | 근거로 풀림 (POL-EVT-001 정의 Event 항목: Occurred Date/Time) · C9 |
| 12 | 5. 대상 화면에서 찾은 고칠 점: 일시 표기가 화면마다 다름 — 상세 Occurred T `2025-09-29 15:57` / L `15:57:03`, 목록 `15:57:00`, Updated T `16:01` / L `16:01:13` (무엇으로 맞출지 정해지지 않음) | TI-EVT-01-P · LI-EVT-01-P #1 · #4, TI-EVT-P · LI-EVT-P #3 | 3단계 | 근거로 풀림 (Common UX COMM-4-a(1/4) `YYYY-MM-DD hh:mm`) · C13 |
| 13 | 5. 대상 화면에서 찾은 고칠 점: Effect · Recommended Action 줄 순서가 T와 L 디스크립션에서 다름 | TI-EVT-01-P · LI-EVT-01-P #1 | 3단계 | 근거로 풀림 (POL-EVT-001 정의 순서 · 화면 글자 T · L 같음: Effect → Recommended Action) · C10 |
| 14 | 5. 대상 화면에서 찾은 고칠 점: Resolution Notes 최대 글자 수가 디스크립션 300자, 케이스 그림 `0 /100자`로 다름 | LI-EVT-01-P #3, 케이스 프레임 | 3단계 | 근거로 풀림 (POL-EVT-002 규칙 5: 최대 300자) · C11 |
| 15 | 5. 대상 화면에서 찾은 고칠 점: placeholder `Enter action details.`와 케이스 설명 글 `Enter action Details.`의 대소문자가 다름 | LI-EVT-01-P #3, 케이스 프레임 | 3단계 | C12 |
| 16 | 5. 대상 화면에서 찾은 고칠 점: 케이스 툴팁 예시 글 `refill.Consumables` 띄어쓰기 빠짐 → `refill. Consumables` | TI-EVT-P · LI-EVT-P 케이스 프레임 | 3단계 | C12 |

## 대상 화면의 반영 대기 항목

| 묶음 (근거) | 화면 (CID) | 항목 ID | 변경 전 | 변경 후 | 반영 / 이번엔 안 함 / 제외 (바꾸지 않음) |
| --- | --- | --- | --- | --- | --- |
| 1 기준데이터 표기 · 오타 (`glossary/status-values.csv` · `modules.csv` · `module-units.csv`, 이름 (번호), 오타) | Event History (TI-EVT-P) | TI-EVT-P-R05 | Statue, Cureca, 1 "Event ID, Code" 검색 (화면에 입력 칸 없음) | Status, CURECA, 검색 항목을 화면과 맞춤 | 반영 |
| 1 | Event History (TI-EVT-P) | TI-EVT-P-R06 | 목록 요약 "OPEN", Unit "CFX96-1" | Open, CFX96 (1) | 반영 |
| 1 | Event History (LI-EVT-P) | LI-EVT-P-R04 | OPEN, Statue, Cureca | Open, Status, CURECA | 반영 |
| 1 | Event History Detail (TI-EVT-01-P) | TI-EVT-01-P-R01 | Module "FlexibleExtraction", Unit "Starlet" (코드명·소문자) | Flexible Extraction (1), STARlet | 반영 |
| 1 | Event History Detail (LI-EVT-01-P) | LI-EVT-01-P-R04 | Module "FlexibleExtraction", Unit "Starlet" | Flexible Extraction (1), STARlet | 반영 |
| 1 | Event Message Popup (TI-EVT-02-P) | TI-EVT-02-P-R02 | 3 Type "Instrument, Consumable, Reagent" | Instrument, Inventory, Sample, System | 반영 |
| 1 | Event Message Popup (LI-EVT-02-P) | LI-EVT-02-P-R02 | 3 Type "Instrument, Consumable, Reagent" | Instrument, Inventory, Sample, System | 반영 |
| 1 | Event Message Popup (TI-EVT-02-P) | TI-EVT-02-P-R04 | Eorrer, warning, High-throughput Extraction(1) | Error, Warning, High-throughput Extraction (1) | 반영 |
| 1 | Event Message Popup (LI-EVT-02-P) | LI-EVT-02-P-R03 | Eorrer, warning | Error, Warning | 반영 |
| 2 Status 변경 (POL-EVT-002) | Event History (LI-EVT-P) | LI-EVT-P-R02 | 5 [Mark all as Closed] 범위 "상태값이 Open인 모든 Events" | 디스크립션에 넣음: 지금 검색 조건으로 불러온 목록의 모든 페이지에서 Open인 Event 전체 | 반영 |
| 2 | Event History (LI-EVT-P) | LI-EVT-P-R03 | 4 "공통 UX 참고 : COMM-3-a" | Status 변경 가능 조건은 POL-EVT-002 참조 | 반영 |
| 2 | Event History Detail (LI-EVT-01-P) | LI-EVT-01-P-R03 | Status·Notes "공통 UX 참고 : COMM-3-a" | POL-EVT-002 참조 | 반영 |
| 2 | Event History Detail (TI-EVT-01-P) | TI-EVT-01-P-R03 | T-IOS에서 Status를 바꿀 수 있는지 상세 화면에 없음 (목록 TI-EVT-P 4는 바꿀 수 있음) | POL-EVT-002 참조 | 반영 |
| 3 Event Message 노출 조건 (POL-EVT-003) | Event Message Popup (TI-EVT-02-P) | TI-EVT-02-P-R01 | 0 "Profile에 추가 예정, 지금은 모두 노출" | Profile > General의 Event notifications(On이면 노출, 기본 On)로 정리 | 반영 |
| 3 | Event Message Popup (LI-EVT-02-P) | LI-EVT-02-P-R01 | 0 "Main PC, 콘솔용 PC" | L-IOS Client Mode로 표기: Main Mode, Console Mode (MS Mode 제외) | 반영 |
| 4 Export 파일 형식 (POL-COM-006) | Event History (TI-EVT-P) | TI-EVT-P-R07 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | 반영 |
| 4 | Event History (LI-EVT-P) | LI-EVT-P-R06 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | 반영 |
| 5 화면 글자 · 디스크립션 정리 (점검 발견, IA) | Event History Detail (TI-EVT-01-P) | TI-EVT-01-P-R02 | 1 "Created Date", 화면 "Occurred Date/Time" | 하나로 통일 | 반영 |
| 5 | Event History Detail (LI-EVT-01-P) | LI-EVT-01-P-R02 | 6, 7 "닫기" 중복 | 하나로 | 반영 |
| 5 | Event Message Popup (TI-EVT-02-P) | TI-EVT-02-P-R03 | 8 "Event Detail Popup(LI-EVT-01-P)" | TI-EVT-01-P | 반영 |
| 6 표기 기준 · 시약 만료 상태 (`archive/glossary/review-v0.md` · `status-values.csv`, 상태 `대기 (최신 영역 화면에서 확인)`) | Event History (TI-EVT-P) | TI-EVT-P-R03 | Expiration date Status | 대소문자 통일 (PD-0001 결정 후) | 제외 (바꾸지 않음) |
| 6 | Event History (TI-EVT-P) | TI-EVT-P-R04 | Under 30 Day | Under 30 days | 제외 (바꾸지 않음) |
| 6 | Event History (LI-EVT-P) | LI-EVT-P-R05 | Expiration date Status, Under 30 Day | 대소문자 통일, Under 30 days | 제외 (바꾸지 않음) |

- 묶음 6의 글자(Expiration date Status · Under 30 Day)는 `Event History_asis` 페이지의 기획 프레임 6개에 없습니다(asis 화면 MD 화면 글자 · 디스크립션에 없음).

## 근거

**읽은 자료 목록**

| 요건 | 종류 | 자료 (ID · 파일) | 연결 근거 (왜 이 요건과 관련 있나) | 설계에 씀 (O / -) | 쓰는 화면 · 요소 | 설계에 쓸 규칙 (번호 · 문장, `-`면 쓰지 않는 이유) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 정책 | POL-EVT-001 | ① `cids`에 대상 6개 모두 | O | 목록 · 상세 Event Info · Instrument Info · Message 1 ~ 7, 목록 요약 | 정의: Level Warning / Error, Status Open / Closed, Type Instrument / Inventory / Sample / System, Event 항목 순서 Event ID, Event Code, Description, Effect, Recommended Action, Level, Status, Type, Occurred Date/Time, Module·Unit·Process. 규칙 1 생기면 Open, 2 ID 순서대로 고유, 3 Effect 없으면 '-' · 여러 개면 목록, 4 Module 단위면 Unit '-' · 무관하면 모두 '-', 5 화면 Event 개수(목록 요약 등)는 Open만 셈 |
| 1 | 정책 | POL-EVT-002 | ① `cids` TI · LI-EVT-P, TI · LI-EVT-01-P | O | 목록 4 Status · 5 [Mark all as Closed], 상세 1 Status · 3 Notes · 4 Updated | 1 L-IOS만 Open ↔ Closed, T-IOS는 보여 주기만. 2 모든 User Type, L-IOS는 Main Mode만 · 그 밖 Mode는 조회만. 3 Notes는 L-IOS만, T는 읽기만. 4 [Mark all as Closed] = 지금 검색 조건(기간, Type, Module, Level, Status)으로 불러온 목록 모든 페이지의 Open을 Closed로, Confirm_003, T에는 없음. 5 Notes 필수 아님 · 최대 300자 · 저장하면 조치 기록 · 취소하면 반영 안 함. 6 바뀌면 Updated Date/Time · Updated by(로그인 ID) |
| 1 | 정책 | POL-EVT-003 | ① `cids` TI · LI-EVT-02-P | O | Message 0 화면 정의 · 8 ~ 12 | 1 L-IOS는 Main Mode · Console Mode만, MS Mode 안 보임. 2 T-IOS는 Profile > General Event notifications On일 때만(기본 On). 3 로그인 뒤 생긴 Event부터. 4 여러 개면 쌓고 2개 이상이면 1/20 · [Close All] · 이전 · 다음. 5 [Close]는 그 Event만 빠지고 개수 줄어듦. 6 [View Details]는 모두 닫고 Event History Detail로 |
| 1 | 정책 | POL-COM-006 | ① `cids` TI · LI-EVT-P | O | 목록 6 [Export] | 1 내보내는 파일은 .csv. 3 T-IOS는 OS 파일 탐색기에서 경로 · 파일 이름. 4 L-IOS는 경로 저장 / USB 저장 고르는 Popup (Common UX COMM-5-m(2/4)), 기본 경로 System Setting Export / Import Location. 표: Event History는 목록 전체와 Detail 내용 |
| 1 | 정책 | POL-SYS-004 | ④ POL-COM-006이 가리킴 | - | | (Log 내보내기 · 기본 경로 설정 화면 규칙. Event History에는 POL-COM-006 규칙 4의 기본 경로 문장만 씀) |
| 1 | 정책 | POL-ACC-009 | ③ 글자 찾기 (규칙 6이 POL-EVT-003을 가리킴) | - | | (Profile 화면 규칙. Message 노출 조건은 POL-EVT-003 규칙 2로 씀) |
| 1 | 기준 자료 | `glossary/status-values.csv` Event Status · Level · Type | ④ POL-EVT-001 `data` | O | 목록 Type · Level · Status 값, Message 1 Level · 3 Type | Status Open, Closed / Level Warning(Orange), Error(Red), 컴포넌트 Status/Event Level / Type Instrument, Inventory, Sample, System |
| 1 | 기준 자료 | `policy/permission-matrix.csv` Event History | ④ POL-EVT-002 `data` · 0번 User Type 확인 | O | 6개 화면 `user_type` | View · Status Control · Note Writing 모두 Service O, Admin O, User O. Status Control · Note Writing은 L-IOS만 |
| 1 | 기준 자료 | `policy/client-mode-matrix.csv` Event History | ④ POL-EVT-002 · 003 `data` · 0번 L-IOS Client Mode 확인 | O | LI 화면 `client_mode` | View Main O, Console O, MS O / Status Control · Note Writing Main O, Console X, MS X. Event Message 노출 줄은 없음 (Q3) |
| 1 | 기준 자료 | `ia/ia-screens.csv` EVT 줄 | 줄 찾기 · 화면 이름 | O | 화면 이름 | Lv.1 Event History (Popup), Lv.2 Event Detail · Event Message (Popup). T-IOS 줄 짝 화면 동일 Y |
| 1 | Alert | `alert/alert-catalog.csv` Confirm_003 | LI-EVT-P 5 디스크립션 | O | LI-EVT-P 5 [Mark all as Closed] | 발생 조건 Mark as closed all 버튼 클릭 시, 제목 Close all events?, 버튼 OK / Cancel, OK → 닫힌 뒤 목록 새로고침 / Cancel → 닫힘 · 화면 유지 |
| 1 | Alert | `alert/alert-catalog.csv` Confirm_007 · Confirm_016 | 뒤 단계용 확인 항목 5 (저장하지 않고 나감) | - | | (메뉴 이탈용. Notes 입력 중 닫기에 쓸지는 Q2) |
| 1 | Alert | Confirm_L_003 · Alert_L_003 (TI-EVT-P 5-1) | TI-EVT-P 디스크립션 | - | | (카탈로그에 없음. T-IOS 5 · 5-1은 취소선으로 제거된 기능, POL-EVT-002 규칙 4) |
| 1 | 기준 자료 | `glossary/modules.csv` · `module-units.csv` | ⑤ 목록 · 상세 · Message의 Module · Unit 글자 | O | 목록 Module · Unit, 상세 2, Message 7 | Module UI 표기: Sample Storage, Consumable Storage, Sample Pre-treatment, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR. Unit: Inbound Trolley, Outbound Trolley, Trolley, Sample Processing (Upper) / (Lower), M9600, Spin Tip Storage, STARlet, MB Tube Storage, Buffer Cartridge Storage, 300 μL Tip Storage (1), CFX96 (#) |
| 1 | 기준 자료 | `glossary/glossary.md` 표기 규칙 | 용어 대조 | O | Module · Unit 이름 | 이름과 번호 사이 띄어 씀 (PCR Setup (1), CFX96 (1)), μL 앞 띄어 씀 |
| 1 | 장비 | `policy/modules/` 8개 Module 문서와 관련 정책(INV · LOD · MAT · SMP · EQP · TST) | ⑤ 화면에 나오는 Module | - | | (Event History는 Module 이름을 데이터로만 보여 줌. 관련 정책에서 Event는 생기는 상황만 적고 Event 화면 표시 규칙은 없음 — POL-LOD-001 · 004, POL-INV-003 · 007) |
| 1 | 논의 대상 | DS-0001 · DS-0004 · DS-0005 (모두 종료) | 정책 · `cids`에 EVT | - | | (반영 끝남. DS-0004 Unit 이름 Sample Processing (Upper) / (Lower)는 module-units.csv로 씀) |
| 1 | 반영 대기 | `pending/open.md` EVT 줄 23개 | 1단계 "대상 화면의 반영 대기 항목" | O | 1단계 표 그대로 | 묶음 1 ~ 5 반영, 묶음 6 제외 (요청자 확인 3) |
| 1 | Common UX | `common-ux/comm-index.md` COMM-4-a(1/4) (Figma `918:2771` 날짜 표기) (3단계에서 추가) | 뒤 단계용 확인 항목 12 | O | TI · LI-EVT-P 3, LI-EVT-01-P 1 · 4 | 년 · 월 · 일 · 일시 `YYYY-MM-DD hh:mm`. Module명: 1대면 Module type명, 2대 이상 ModuleType+(index) |
| 1 | Common UX | `common-ux/comm-index.md` COMM-5-p · 5-d · 5-g · 5-r · 5-v · 5-l · 5-q · 5-c · 5-t · 5-e · 5-m(2/4) · 5-m(3/4) (3단계에서 추가) | 요소 그리기 (공통 1의 8 · 공통 3-2) | O | TI · LI-EVT-P 1 · 3 · 4 · 6 · 8, 상세 1-2 · 3 · 5, Message 0 · 8 · 9 · 12 | Search Area(조건 3개 이상 Reset), Date Calendar(최대 1년 · 미래일 불가), Basic Table(10개 · T-IOS 노출 개수 Dropdown · No Data 문구는 SB), Number Pagination, Ellipsis Tooltip, Switch(Basic+Label), Square Button(하나뿐이면 Filled · Reset Gray), Inline Input, List Card(2열), Event Stacked Popup(Basic Popup Case 2 · 썸네일 목록) |

**관련 자료 없는 영역 · 요소**

| 화면 · 영역 · 요소 | 근거로 삼는 것 |
| --- | --- |
| 목록 1 검색 영역 (기간 최대 1년 · 미래일 선택 불가 · Reset) | 기존 UX 화면설계서만 근거 (기간 1년 초과는 3단계에서 Common UX 확인) |
| 목록 3 목록 (10개씩 · 최신순 · 줄임 · Tooltip) | 기존 UX 화면설계서만 근거 |
| 상세 5 List 버튼 (이전 페이지로 복귀) · 닫기 | 기존 UX 화면설계서만 근거 |
| Message 0 스크롤 · 10 ~ 12 일부 동작 | POL-EVT-003 규칙 4 · 5 외에는 기존 UX 화면설계서만 근거 |

**대조**

| 요건 · 화면 · 요소 | 결과 | 근거 | 다음 |
| --- | --- | --- | --- |
| 1 · 6개 화면 · Event 구분 · 항목 · 표시 | 정책에 있음 | POL-EVT-001 | 디스크립션 끝에 POL-EVT-001 |
| 1 · TI · LI-EVT-P 4 · 5, TI · LI-EVT-01-P 1 · 3 · 4 | 정책에 있음 | POL-EVT-002 (T는 반영 대기 묶음 2: T-IOS는 상태값만 표기) | 디스크립션 끝에 POL-EVT-002 |
| 1 · TI · LI-EVT-02-P 0 · 8 ~ 12 | 정책에 있음 | POL-EVT-003 (0은 반영 대기 묶음 3) | 디스크립션 끝에 POL-EVT-003 |
| 1 · TI · LI-EVT-P 6 [Export] | 정책에 있음 | POL-COM-006 (반영 대기 묶음 4) | 디스크립션 끝에 POL-COM-006 |
| 1 · LI-EVT-P 5 [Mark all as Closed] | 정책에 있음 | POL-EVT-002 규칙 4, Confirm_003 | 범위는 반영 대기 LI-EVT-P-R02 |
| 1 · 6개 화면 머리말 `user_type` [Service, Admin, User] | 정책에 있음 | permission-matrix View O O O | 그대로 |
| 1 · LI-EVT-P · LI-EVT-01-P `client_mode` [Main, Console, MS] | 정책에 있음 | client-mode-matrix View O O O | 그대로 |
| 1 · LI-EVT-02-P `client_mode` [Main, Console] | 기준 자료끼리 다름 | POL-EVT-003 규칙 1 (MS Mode 안 보임) / client-mode-matrix에 Event Message 줄 없음, Event History View 줄은 MS O | Q3 |
| 1 · LI-EVT-P 6 Common UX 참고 `COMM-5-j(4/4)` | 기존 화면이 정책과 다름 | POL-COM-006 규칙 4: COMM-5-m(2/4) | C1 |
| 1 · TI · LI-EVT-02-P 화면 글자 `Type: Consumable` | 기존 화면이 정책과 다름 | status-values.csv Event Type (Consumable 없음, 소모품은 Inventory) | C2 |
| 1 · TI-EVT-01-P 화면 번호 표시 `1-2` | 기존 화면이 정책과 다름 | POL-EVT-002 규칙 1 (T-IOS Status 변경 없음) | C3 |
| 1 · TI · LI-EVT-01-P Unit `Starlet`, TI-EVT-01-P Module `FlexibleExtraction` (케이스 · 화면 글자 셋째 줄 포함) | 기존 화면이 정책과 다름 | module-units.csv STARlet, modules.csv Flexible Extraction | 반영 대기 TI-EVT-01-P-R01 · LI-EVT-01-P-R04 (화면 글자 `FlexibleExtraction` 단독 줄 포함) |
| 1 · TI-EVT-02-P · LI-EVT-02-P 9 `Event Detail Popup(LI-EVT-01-P)`, 화면 이름 `Event History Detail` · `Event Message Popup` | 기존 화면이 정책과 다름 | IA Lv.2 Event Detail · Event Message (요청자 확인 1) | C4 (TI-EVT-02-P 9는 반영 대기 R03) |
| 1 · TI · LI-EVT-P 0, 6개 화면 디스크립션 용어 | 기존 화면이 정책과 다름 | terms.csv (아래 용어 목록) | C5 |
| 1 · TI · LI-EVT-P 목록 3행 Unit `Sample Processing` | 기존 화면이 정책과 다름 | module-units.csv (Upper / Lower로 나뉨) | C6 |
| 1 · LI-EVT-P · LI-EVT-02-P Module `이름(1)` 붙여 씀 | 기존 화면이 정책과 다름 | glossary.md 이름과 번호 띄어 씀 | C7 (TI-EVT-02-P는 반영 대기 R04) |
| 1 · TI · LI-EVT-P 1 Type Default `all` | 기존 화면이 정책과 다름 | 화면 글자 All, status-values 표기 | C8 |
| 1 · LI-EVT-01-P 1 `Created Date` | 기존 화면이 정책과 다름 | POL-EVT-001 정의 Occurred Date/Time | C9 (TI는 반영 대기 R02) |
| 1 · LI-EVT-01-P 1 Effect · Recommended Action 디스크립션 순서 | 기존 화면이 정책과 다름 | POL-EVT-001 정의 순서, 화면 글자 순서 | C10 |
| 1 · LI-EVT-01-P 케이스 `0 /100자` | 기존 화면이 정책과 다름 | POL-EVT-002 규칙 5 (300자) | C11 |
| 1 · LI-EVT-01-P 케이스 · TI · LI-EVT-P 케이스 오타 | 기존 화면이 정책과 다름 | 오타 (placeholder 대소문자, 띄어쓰기) | C12 |
| 1 · TI · LI-EVT-P 2 목록 요약 `Items` / `Total Event` | 정해지지 않음 | 화면과 디스크립션이 다름, POL-EVT-001 규칙 5는 Open 개수만 정함 | Q1 |
| 1 · LI-EVT-01-P 3 Notes 입력 중 닫기 · List | 정책에 없음 (Confirm) | POL-EVT-002 규칙 5는 취소만 정함, Confirm_007 · 016은 메뉴 이탈용 | Q2 |
| 1 · TI-EVT-P · LI-EVT-P · 상세 일시 표기 | 정해지지 않음 | 공통 정책 없음 (POL-SMP-002 규칙 4는 Sample 화면만) | 3단계 Common UX 확인, 없으면 Q |
| 1 · 6개 화면 Module 표기의 번호 `(1)` 유무 (T 목록은 번호 없음) | 정해지지 않음 | glossary.md 위치 표기 `Module (Index)`, 기존 화면 T · L이 다름 | Q4 |

**정책 수정 범위**

없음 — 대조에서 "더함" · "바꿈"으로 정한 정책이 없음 (정책에 없는 Confirm은 Q2로 4단계에서 답을 받음)

**용어 목록**

| 원래 표현 | 표준어 | 어디서 | 새 용어면 처리 |
| --- | --- | --- | --- |
| 장비 | Instrument | TI · LI-EVT-P 0, TI · LI-EVT-01-P 2 · 0, TI · LI-EVT-02-P 0 · 7 | |
| 구동 시스템 | System (Event Type) | TI · LI-EVT-P 0 | |
| 모듈 | Module | TI · LI-EVT-P 1 | |
| 이벤트 | Event | TI · LI-EVT-02-P 4 | |
| 팝업 | Popup | 6개 화면 0 · 5 · 7 · 8 ~ 11 | |
| 툴팁 | Tooltip | TI · LI-EVT-P 3, 케이스 | |
| Cureca | CURECA | TI · LI-EVT-P 0 | |
| 표시 (보여 준다는 뜻) | 노출 | 6개 화면 디스크립션 | |
| 체크박스 | Checkbox | TI-EVT-P 5 · 5-1 (취소선, 다시 그릴 때 빠짐) | |
| Statue | Status | TI · LI-EVT-P 1 | |
| OPEN | Open | TI · LI-EVT-P 화면 글자 목록 요약, LI-EVT-P 4 | |
| all | All | TI · LI-EVT-P 1 Type Default | |
| search | Search | TI · LI-EVT-P 1 | |
| Event Id, Code | Event ID, Code | TI-EVT-P 화면 글자 | |
| Eorrer · warning | Error · Warning | TI · LI-EVT-02-P 1 | |
| Consumable (Event Type) | Inventory | TI · LI-EVT-02-P 화면 글자 | |
| 알람 | Event | TI · LI-EVT-02-P 1 | |
| Main PC · 콘솔용 PC | Main Mode · Console Mode | LI-EVT-02-P 0 | |
| FlexibleExtraction | Flexible Extraction (1) | TI-EVT-01-P 화면 글자 · LI-EVT-01-P | |
| Starlet | STARlet | TI · LI-EVT-01-P 화면 글자 | |
| CFX96-1 | CFX96 (1) | TI · LI-EVT-P 목록 | |
| Sample Processing | Sample Processing (Upper) / (Lower) | TI · LI-EVT-P 목록 3행 | |
| Sample Storage(1) 등 붙여 쓴 번호 | Sample Storage (1) | LI-EVT-P 목록, TI · LI-EVT-02-P 7 | |
| 형식:CSV | .csv | TI · LI-EVT-P 6 | |
| Event History Detail · Event Detail Popup | Event Detail | TI · LI-EVT-01-P 제목, TI · LI-EVT-02-P 9 | |
| Event Message Popup · message popup | Event Message | TI · LI-EVT-02-P 제목 · 0 | |
| Created Date | Occurred Date/Time | TI · LI-EVT-01-P 1 | |
## 설계

### 화면별 작업
<!-- 절차 1번 순서 2에서 그릴 T · L 한 쌍마다 줄을 만들어 따른 케이스 · 요건 번호를 채우고, 그 쌍을 다 그리면 공통 3-10에서 섹션 · 기획 프레임 · 상태 · 케이스 프레임 링크를 채웁니다. -->
| T · L 한 쌍 | 따른 케이스 | 요건 번호 | 섹션 | 기획 프레임 | 상태 · 케이스 프레임 |
| --- | --- | --- | --- | --- | --- |
| Event History (TI-EVT-P / LI-EVT-P) | 3 | 1 | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3706-1250 / L https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3706-1257 | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3719-6 / L https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3751-579 | 케이스 T 지움 (검토 질의 6) / L 지움 (검토 질의 7) (마무리 확인 2026-11-26) |
| Event Detail (TI-EVT-01-P / LI-EVT-01-P) | 3 | 1 | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3706-1251 / L https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3706-1258 | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3756-1924 / L https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3764-1390 | 케이스 T 없음 / L https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3764-1765 (마무리 확인 2026-11-26) |
| Event Message (TI-EVT-02-P / LI-EVT-02-P) | 3 | 1 | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3706-1252 / L https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3706-1259 | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3769-1813 / L https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3771-1955 | 케이스 없음 (마무리 확인 2026-11-26) |

- 메뉴 단위 표시 (2026-11-26, Claude): T-IOS 줄 시스템 구분 `T-IOS - 2.1` · 기획 진행 표시 `SB-Update : 2026.08.05 (검토 완료)` / L-IOS 줄 `L-IOS - 2.1` · `SB-Update : 2026.08.07 (검토 완료)` — asis 페이지의 기획 진행 표시(`컨펌 완료`)를 날짜 그대로, 진행 상태는 새 이름으로 옮김 (flow/3-design-case3.md "공통 3 머리 · 공통 4"). 너비 8469 (섹션 줄 너비, T · L 같음)
- 섹션 높이는 자리 잡기용 임시 값(asis 기획 프레임 높이 + 200). 그린 뒤 맞춤. 기획 프레임 너비는 asis 원본 너비대로: TI · LI-EVT-P · TI · LI-EVT-01-P 2252, TI · LI-EVT-02-P 1960 (섹션 너비 2787 / 2495)

### 컴포넌트 없이 그린 요소
| 요소 이름 (종류) | 하는 일 | 쓴 곳 (CID · 디스크립션 번호) | 어디서 (후보 ID / 신규로 만듦 / 기존 화면에서 따옴) | 원본 요약 (기존 화면에서 따옴만: 크기 · 모서리 · 줄 × 칸 · 도형 · 글자 · 인스턴스) | Figma 링크 |
| --- | --- | --- | --- | --- | --- |
| scrim (Dim 바탕) | Popup 뒤 Dim | TI-EVT-P · LI-EVT-P 0 | 기존 화면에서 따옴 (`3543:47110` · `3543:46804` Alarm_List > scrim) | 1696×1023 · 모서리 0 · 도형 1 (#000000, 불투명도 0.7) · 글자 0 · 인스턴스 0 | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3719-1888 |
| Popup (Popup 바탕) | Event History Popup 틀 | TI-EVT-P · LI-EVT-P 0 | 기존 화면에서 따옴 (Alarm_List > Popup). Common UX Popup(COMM-5-m(1/4))은 PC 컴포넌트 없음 | 1475×794 · 모서리 0 · 테두리 #D6DBE1 1 · 바탕 #FFFFFF · 도형 1 (안 요소는 따로 그림: 제목 · 닫기 · 목록 요약 · 버튼 · 목록 · 페이지네이션) | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3719-1889 |
| 검색 영역 (영역 틀) | 검색 조건 묶음 틀 | TI-EVT-P · LI-EVT-P 1 | 기존 화면에서 따옴 (Alarm_List > Text Data). 안의 입력 칸 · 버튼은 Common UX(Text Input · Dropdown · Square) | 1423×72 · 모서리 4 · 테두리 #DDDDDD 1 · 바탕 없음 · 줄 1 × 칸 7 (입력 5 · 버튼 2) | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3719-2204 |
| 목록 요약 (요약 줄 틀) | Items · Open 개수 | TI-EVT-P · LI-EVT-P 2 | 기존 화면에서 따옴 (Popup > Frame 1984080651) | 314×22 · 모서리 0 · 글자 4 · 선 1 (Line 264, 22, #000000 20%) · 인스턴스 0 | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3719-2237 |
| scrim · Popup (Dim · Popup 바탕) | 상세 Popup 틀 | TI-EVT-01-P · LI-EVT-01-P 0 | 기존 화면에서 따옴 (`3543:47409` Alarm_List > scrim · Popup) | scrim 1628×948 · #000000 불투명도 0.7 / Popup 1475×734 · 모서리 0 · 테두리 #D6DBE1 1 · 바탕 #FFFFFF (안 요소는 따로 그림) | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3756-1926 |
| Event Info 표 (정보 표, 맞는 Variant 없음, Card/List 2열 — 한 줄 3쌍 6칸) | 선택한 Event 상세 정보 | TI-EVT-01-P · LI-EVT-01-P 1 | 기존 화면에서 따옴 (`3543:47436` Module_Data Table). Card/List로 바꿀 여지: 한 줄 1쌍인 Description · Effect · Recommended Action 줄 | 1417×284 · 모서리 0 · 줄 5 (3쌍 2줄 + 1쌍 3줄) · 제목 글 1 · 갱신 글 1 · 인스턴스 31 (⛔️ Item_Basic Data Table Header 9 · Data 6, Divider 3, 숨김 Checkbox · Radio · Pencil · Square). Level 칸만 Common UX Status/Event Level (C31), L은 Status 칸 Toggle Switch (원본과 같은 컴포넌트) | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3756-1937 |
| Instrument Info 표 (정보 표, 맞는 Variant 없음, Card/List 2열 — 한 줄 3쌍) | Module · Unit · Process | TI-EVT-01-P · LI-EVT-01-P 2 | 기존 화면에서 따옴 (`3543:47488`) | 1417×83 · 모서리 0 · 줄 1 × 칸 6 · 제목 글 1 · 인스턴스 9 (Header 3 · Data 3 · Divider 3) | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3756-1989 |
| Notes 표 · Resolution Notes 칸 (입력 칸, 맞는 Variant 없음, Text Input/Inline — Typing에 글자 수 · Cancel/Save 아이콘 없음) | Resolution Notes 보기 · 입력 | TI-EVT-01-P · LI-EVT-01-P 3, LI-EVT-01-P/Case | 기존 화면에서 따옴 (T `3543:47506`, L `3543:46744` · 케이스 `3543:46757` · `46775` · `46766`). Text Input/Inline로 바꿀 여지: 기본(Enabled) · 완료(Complete) 상태 | 1417×160 · 모서리 0 · 제목 글 1 · 줄 1 × 칸 2 · 인스턴스 3 (Header 1 · Divider 1 · Basic 입력 칸 1248×122: T Read-only, L Enabled · 케이스 Typing · Completed) | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3756-2007 / L 칸 https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3765-1544 |
| scrim (Dim 바탕) | Event Message 뒤 Dim | TI-EVT-02-P · LI-EVT-02-P 0 | 기존 화면에서 따옴 (`3543:47691` Alarm_List > scrim) | 1628×948 · #000000 불투명도 0.7 · 도형 1 | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3769-1814 |
| Event Message Popup (Popup 틀, Common UX Event Stacked Popup은 PC 컴포넌트 없음) | Event 한 건 내용 · 버튼 | TI-EVT-02-P · LI-EVT-02-P 1 ~ 9 | 기존 화면에서 따옴 (`3543:47721` Popup/Alert Popup). 하단 버튼 둘만 Common UX Square(C27), 원래 버튼은 숨김 | 560×328 · 모서리 8 · 테두리 #C6CDDA 1 · 인스턴스 9 (Popup/Resource 3, Icon/Popup Status 1, Popup Middle Text 4, 번호 표시 6) · 글자 1 (Module · Unit) | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3770-2073 |
| 1/20 · Close All · [< >] (글 · 글 버튼) | 메시지 개수 · 모두 닫기 · 이전 · 다음 | TI-EVT-02-P · LI-EVT-02-P 10 · 11 · 12 | 기존 화면에서 따옴 (`3543:47744` · `47745` · `47746`). Arrow/Chevron_Right로 바꿀 여지: [< >] (Q7과 함께 정함) | 글 3 (흰색, 18 · 18 · 22) · 인스턴스 0 | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3769-1880 |

### 근거로 풀린 것
| 질문 | 푼 근거 |
| --- | --- |
| 목록 아래 페이지 번호에 번호 · 설명 없음 (뒤 단계용 확인 항목 1) | Common UX COMM-5-l Type 1 Number Pagination → 디스크립션 8 페이지네이션 (C25) |
| 기간 검색에서 1년 넘게 고르면 (뒤 단계용 확인 항목 3) | Common UX COMM-5-d Date Calendar 조건: 선택일로부터 최대 1년까지만 선택 가능, 오늘 이후 선택 불가 (디스크립션 1 `공통 UX 참고 : COMM-5-d`) |
| 일시 표기가 화면마다 다름 (뒤 단계용 확인 항목 12) | Common UX COMM-4-a(1/4) 일시 `YYYY-MM-DD hh:mm` (C13) |

### 찾은 것
- Q4 답(2026-11-26, 서보경): Module이 1대로 설치되면 index (n)을 표시하지 않음 (Common UX COMM-4-a(1/4) Module명 규칙과 같음). 그래서 반영 대기 TI-EVT-01-P-R01 · LI-EVT-01-P-R04 · TI-EVT-02-P-R04의 「Flexible Extraction (1)」 · 「High-throughput Extraction (1)」은 번호 없이 반영함 (5단계에서 그 항목 변경 후 값과 다름을 적음)
- 플러그인 채우기 J089는 「실패」로 바꾼 뒤에 늦게 실행돼 TI-EVT-01-P 패널 행 11개 · 라벨 4개가 중복됨 → 2026-11-26 지움. 이 차례 수정은 중복을 피하려고 use_figma로 함
- Event History · Event Detail의 Dim(scrim)은 검토 질의 4(요청자)로 원본 크기와 달라짐(너비 1920). "컴포넌트 없이 그린 요소"의 원본 요약은 원본 값 그대로 둠 (2026-11-26)
- 원본 케이스 프레임 제목에 번호가 없음(`Case.`) → 케이스 블록 · 케이스 프레임을 `Case 1`로 적음 (TI-EVT-P · LI-EVT-P · LI-EVT-01-P)
- 원본 케이스에 노란 띠가 없음 → 목록 케이스는 조건을 노란 띠 `1-1`로 두고 설명 글은 두지 않음(원본에 없음). LI-EVT-01-P 케이스는 조각마다 위에 있던 한 줄을 조건(노란 띠)과 설명으로 나눔 (글자는 원본 그대로, 오타만 C12)
- 원본 번호 표시 5가 Notes 칸 위에 있으나 디스크립션 5는 [List] 버튼 → [List] 버튼 옆에 둠 (C29)
- 원본 LI-EVT-01-P `1-2` 번호 표시에 디스크립션 블록이 없음(1의 Status 줄에만 설명) → 1-2 Status(Toggle) 블록을 만들고 활성화 조건은 반영 대기 LI-EVT-01-P-R03(POL-EVT-002)으로 씀 (C21)
- 화면 표기 글자 표에는 라벨 · 선택지 · 기준데이터 값만 적고 예시 데이터(Event ID · Code · Description · Effect 글)는 적지 않음
- 규칙에 없어 판단한 곳: [Export] 버튼 Style — T는 버튼 하나라 Filled, L은 [Mark all as Closed]가 Filled라 [Export]는 Outlined (COMM-5-c 가르는 법)
- 상세 Event Info · Instrument Info · Notes 표는 Common UX Card/List(2열)로 한 줄 3쌍(6칸)을 담을 수 없어 기존 화면에서 따옴 (컴포넌트 없이 그린 요소)
- TI-EVT-02-P · LI-EVT-02-P 경로: 원본 `-` → IA Lv.1 · Lv.2대로 `Event History > Event Message` (C4에 포함)
- 기존 화면에서 따온 표 · 입력 칸은 원본 요소를 같은 값으로 옮기려고 그 요소만 복제해 넣음(기획 프레임 전체는 복제하지 않음). 원본 안 숨김 레이어도 그대로 둠 (2026-11-26, Claude)
- TI-EVT-P scrim 높이를 원본 1023으로 맞춤(앞 세션이 1319로 그림), 기획 진행 표시 글을 asis 날짜로 고침(`2026.00.00` 그대로였음) (2026-11-26, Claude)
- LI-EVT-01-P 케이스 1-2의 글자 수(`0 /300자`)는 원본에서 숨김이었으나 화면 MD 화면 예시 글자 · 화면 표기 글자에 있어 보이게 둠 (2026-11-26, Claude)
- 사용자 확인 라벨: 네 방향 모두 글자 · 요소를 가리는 곳(LI-EVT-P 4 · 5, LI-EVT-01-P 1-2)은 번호 표시 오른쪽에 둠 (description.md 5절)
- 반영 대기 · 찾은 고칠 점에서 바꿀 값이 그대로 적힌 변경(C20 · C22 · C24)은 사용자 확인 라벨 · 목록 없이 마침 점검 기계 검사로 확인 (description.md 5절 반영 대기 항목 표)
- 컴포넌트 채우기(플러그인): LI-EVT-P 패널 · 라벨은 J088로 채움(제목 행 Date · 작성자 칸만 직접 고침). TI-EVT-01-P J089가 5분 넘게 멈춰 「실패」로 바꾸고, 그 뒤 패널 · 라벨은 use_figma로 직접 그림

### 용어 치환
| 원래 표현 | 표준어 | 위치 |
| --- | --- | --- |
## 질문 대기

| 번호 (Q) | 질문 | 관련된 곳 (CID · 디스크립션 번호) | 논의 대상 | T · L 같음 | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- | --- |
| Q1 | 목록 요약의 전체 개수 이름 (화면 `Items` / 디스크립션 `Total Event`, POL-EVT-001 규칙 5는 Open 개수만 정함) | TI-EVT-P · LI-EVT-P #2 | | 같음 | 2026-11-26 · Items로 (서보경) → C32 |
| Q2 | Resolution Notes 입력 중 닫기 · List를 누를 때 Confirm 여부 (POL-EVT-002 규칙 5는 Cancel만 정함, 메뉴 이탈용 Confirm_007 · 016 있음) | LI-EVT-01-P #3 · #5 · #6 | | L만 | 2026-11-26 · 입력 중 닫기 · [List] 클릭 시 Confirm 띄움 (서보경) → Confirm_016, C36 |
| Q3 | Event Message의 L-IOS Client Mode (POL-EVT-003 규칙 1 Main · Console / client-mode-matrix에 Event Message 줄 없음) | LI-EVT-02-P 0 · 머리말 `client_mode` | | L만 | 2026-11-26 · 정책대로 Main Mode, Console Mode (서보경), 화면 바뀌지 않음 |
| Q4 | Module 이름 뒤 번호 `(1)` 표기 여부 (T 목록은 없음 · L 목록 · 상세 · Message는 있음, glossary.md `Module (Index)`) | TI-EVT-P · LI-EVT-P #3, TI · LI-EVT-01-P #2, TI · LI-EVT-02-P #7 | | 같음 | 2026-11-26 · 번호 뺌 (서보경: Module이 1대로 설치되면 index (n)을 표시하지 않음) → C34 |
| Q5 | T-IOS 목록에 노출 개수 Dropdown을 둘지 (Common UX Basic Table은 T-IOS 10 · 30 · 50 · 100 items 선택, 기존 화면은 10개 고정이라 기존대로 그림) | TI-EVT-P #3 | | T만 | 2026-11-26 · T-IOS에 노출 개수 Dropdown(10 · 30 · 50 · 100 items) 둠 (서보경) → C35 |
| Q6 | 목록에 데이터가 없을 때 안내 문구 (Common UX No Data가 화면에 맡김, 기존 원본 · 정책서 · 같은 메뉴에 없음) | TI-EVT-P · LI-EVT-P #3 | | 같음 | 2026-11-26 · 다른 화면 확인 요청 (서보경) → Protocol · LIS Code 목록(TI-STN-03-01 · LI-STN-03-01 · TI-SVS-01 · LI-SVS-01 · TI-STN-08)의 'No results found.'로 그림, C33으로 확인받음 |
| Q7 | Event Message 오른쪽 썸네일 목록을 둘지 (Common UX Event Stacked Popup은 썸네일 목록 5개씩, 기존 화면은 [< >] 버튼만이라 기존대로 그림) | TI-EVT-02-P · LI-EVT-02-P #12 | | 같음 | 2026-11-26 · 썸네일 목록 두지 않음 (서보경), 화면 바뀌지 않음 |
## 변경 확인

| 번호 (C) | 기존 화면 | 바꿔 그린 것 | 관련된 곳 (CID · 디스크립션 번호) | 근거 | T · L 같음 | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C1 | Common UX 참고 `COMM-5-j(4/4)` | `COMM-5-m(2/4)` Import / Export Popup | LI-EVT-P #6 | POL-COM-006 규칙 4 | L만 | - | 맞음 (2026-11-26) |
| C2 | 화면 글자 `Type: Consumable` | `Type: Inventory` | TI-EVT-02-P · LI-EVT-02-P #3 | status-values.csv Event Type | 같음 | - | 맞음 (2026-11-26) |
| C3 | 상세 Status 옆 번호 표시 `1-2` (T) | T에서 `1-2` 번호 표시 뺌 (Status는 표기만) | TI-EVT-01-P #1 | POL-EVT-002 규칙 1 | T만 | - | 맞음 (2026-11-26) |
| C4 | 화면 이름 Event History Detail · Event Message Popup | Event Detail · Event Message | TI · LI-EVT-01-P, TI · LI-EVT-02-P | IA Lv.2 (요청자 확인 1) | 같음 | - | 맞음 (2026-11-26) · 경로는 검토 질의 1로 고침 (C37) |
| C5 | 디스크립션 용어 (장비 · 팝업 · 툴팁 · 모듈 · 이벤트 · 알람 · 표시 등) | 용어집 표준어로 | 6개 화면 디스크립션 | terms.csv (근거 "용어 목록") | 같음 | - | 맞음 (2026-11-26) |
| C6 | 목록 Unit `Sample Processing` | `Sample Processing (Upper)` (예시 데이터) | TI-EVT-P · LI-EVT-P #3 | module-units.csv, DS-0004 | 같음 | - | 맞음 (2026-11-26) |
| C7 | Module `Sample Storage(1)` 등 붙여 씀 | `Sample Storage (1)` 띄어 씀 | LI-EVT-P #3, LI-EVT-02-P #7 | glossary.md 이름과 번호 | L만 | - | 맞음 (오타, 2026-11-26) |
| C8 | Type Default `all` | `All` | TI-EVT-P · LI-EVT-P #1 | 화면 글자 · status-values 표기 | 같음 | - | 맞음 (오타, 2026-11-26) |
| C9 | `Created Date` | `Occurred Date/Time` | LI-EVT-01-P #1 | POL-EVT-001 정의 | L만 | - | 맞음 (2026-11-26) |
| C10 | 디스크립션 Recommended Action → Effect 순서 | Effect → Recommended Action | LI-EVT-01-P #1 | POL-EVT-001 정의 순서 · 화면 글자 | L만 | - | 맞음 (2026-11-26) |
| C11 | 케이스 `0 /100자` | `0 /300자` | LI-EVT-01-P 케이스 | POL-EVT-002 규칙 5 | L만 | O | 맞음 (2026-11-26) |
| C12 | `Enter action Details.` · `refill.Consumables` | `Enter action details.` · `refill. Consumables` | LI-EVT-01-P 케이스, TI · LI-EVT-P 케이스 | 오타 | 같음 | - | 맞음 (오타, 2026-11-26) |
| C13 | 일시 `YYYY-MM-DD hh:mm:ss` (목록 · L 상세 Occurred · Updated) | `YYYY-MM-DD hh:mm` | TI-EVT-P · LI-EVT-P #3, LI-EVT-01-P #1 · #4 | Common UX COMM-4-a(1/4) (뒤 단계용 확인 항목 12) | 같음 | O | 맞음 (2026-11-26) |
| C14 | 디스크립션 5 Mark as Closed · 5-1 [Mark as Closed] 버튼 클릭 (번호 블록 전체 취소선) | 디스크립션 · 번호 표시에서 지움 (제거된 요소 2개, 기존 디스크립션에서 이미 지운 기능) | TI-EVT-P 0 | `flow/3-design-case3.md` 3-2 | T만 | - | 맞음 (2026-11-26) |
| C15 | 디스크립션 6 · 7 둘 다 「닫기」 | 7을 빨간 취소선 (6 하나로) | LI-EVT-01-P #7 | 반영 대기 LI-EVT-01-P-R02 | L만 | - | 맞음 (2026-11-26) |
| C16 | `Created Date` | `Occurred Date/Time` | TI-EVT-01-P #1 | 반영 대기 TI-EVT-01-P-R02, POL-EVT-001 정의 | T만 | - | 맞음 (2026-11-26) |
| C17 | Status 변경 가능 여부 없음, Notes 「L-IOS에서 작성했을 경우 노출」 | Status 「노출 (상태 변경 불가)」, Notes 「작성된 Resolution Notes가 있을 경우 노출」, 정책 참고 POL-EVT-002 | TI-EVT-01-P #1 · #3 | 반영 대기 TI-EVT-01-P-R03, POL-EVT-002 | T만 | O | 맞음 (2026-11-26) · 문구는 검토 질의 2로 고침 (C38) |
| C18 | 0 「Profile에서 Event notifications 설정에 따라 On일 경우 노출」 | 「Profile > General의 Event notifications 설정이 On일 경우 노출, Off일 경우 미노출 (기본 On)」 | TI-EVT-02-P 0 | 반영 대기 TI-EVT-02-P-R01, POL-EVT-003 | T만 | - | 맞음 (2026-11-26) |
| C19 | 0 노출 PC Type 「Main PC · 콘솔용 PC」 | 노출되는 L-IOS Client Mode 「Main Mode, Console Mode」 | LI-EVT-02-P 0 | 반영 대기 LI-EVT-02-P-R01, POL-EVT-003 | L만 | - | 맞음 (2026-11-26) |
| C20 | `Statue` · `Cureca` · `Event Id, Code` · `OPEN` · `CFX96-1` · `형식:CSV` | `Status` · `CURECA` · `Event ID, Code` · `Open` · `CFX96 (1)` · `.csv` | TI-EVT-P · LI-EVT-P 0 · #1 · #2 · #3 · #6 | 반영 대기 TI-EVT-P-R05 · R06 · R07, LI-EVT-P-R04 · R06 | 같음 | O | 맞음 (기계 검사, 2026-11-26) |
| C21 | [Mark all as Closed] 범위 「상태값이 Open인 모든 Events」, Status · Notes 활성화 조건 「공통 UX 참고 : COMM-3-a」 | 「지금 검색 조건으로 불러온 목록의 모든 페이지에서 Status가 Open인 Event 전체」, 활성화 조건 「L-IOS Client Mode가 Main Mode일 때 활성화」 · 정책 참고 POL-EVT-002 | LI-EVT-P #4 · #5, LI-EVT-01-P #1-2 · #3 | 반영 대기 LI-EVT-P-R02 · R03, LI-EVT-01-P-R03 | L만 | O | 맞음 (2026-11-26) |
| C22 | Module `FlexibleExtraction` · `Flexible Extraction(1)`, Unit `Starlet` | `Flexible Extraction (1)`, `STARlet` | TI-EVT-01-P · LI-EVT-01-P #2 | 반영 대기 TI-EVT-01-P-R01 · LI-EVT-01-P-R04 | 같음 | O | 맞음 (기계 검사, 2026-11-26) |
| C23 | `Eorrer` · `warning` · `High-throughput Extraction(1)` | `Error` · `Warning` · `High-throughput Extraction (1)` | TI-EVT-02-P · LI-EVT-02-P #1 · #7 | 반영 대기 TI-EVT-02-P-R04 · LI-EVT-02-P-R03, 오타 | 같음 | - | 맞음 (오타, 2026-11-26) |
| C24 | 9 `Event Detail Popup(LI-EVT-01-P)` (T), 3 Type 값 | 9 `TI-EVT-01-P`, 3 `Instrument, Inventory, Sample, System` | TI-EVT-02-P #3 · #9, LI-EVT-02-P #3 | 반영 대기 TI-EVT-02-P-R02 · R03, LI-EVT-02-P-R02 | 같음 | - | 맞음 (기계 검사, 2026-11-26) |
| C25 | 디스크립션에 없던 설명 | 8 페이지네이션(Type 1 Number) · 3 컬럼 항목 · 정렬 가능한 컬럼 · 상세 1 Type 노출 항목 · `공통 UX 참고` 줄 | TI-EVT-P · LI-EVT-P #3 · #8, TI-EVT-01-P · LI-EVT-01-P #1 | Common UX COMM-5-g · 5-l · 5-r · 5-v, 기존 화면 (뒤 단계용 확인 항목 1) | 같음 | - | 맞음 (Common UX · 기존 화면, 2026-11-26) |
| C26 | [Export] 버튼 Gray | T Filled · L Outlined (Common UX Square Button) | TI-EVT-P · LI-EVT-P #6 | Common UX COMM-5-c | 같음 | O | 맞음 (2026-11-26) |
| C27 | [View Details] 청록 버튼 · [Close] 버튼 (기존 컴포넌트) | Common UX Square Filled · Outlined | TI-EVT-02-P · LI-EVT-02-P #8 · #9 | Common UX COMM-5-c · COMM-5-m(3/4) | 같음 | O | 맞음 (2026-11-26) |
| C28 | ~~Resolution Notes 입력 칸 (기존 텍스트 박스)~~ | ~~Common UX Inline Input~~ 바뀜 (2026-11-26, Claude, Text Input/Inline의 Typing 변형에 글자 수 · Cancel/Save 아이콘이 없어 데이터를 다 담지 못함 → 기존 화면에서 따옴, "컴포넌트 없이 그린 요소") | LI-EVT-01-P #3 · 케이스 | Common UX COMM-5-t | L만 | - | 해당 없음 (바꿔 그리지 않음, 2026-11-26) |
| C31 | 상세 Level 값 (기존 그림 Error 칩) | Common UX Status/Event Level | TI-EVT-01-P · LI-EVT-01-P #1 | Common UX COMM-5-g · Status/Event Level (3단계에서 추가) | 같음 | - | 맞음 (2026-11-26) |
| C32 | 목록 요약 디스크립션 Total Event | Items | TI-EVT-P · LI-EVT-P #2 | Q1의 답 | 같음 | - | 맞음 (2026-11-26) |
| C33 | 데이터가 없을 때 문구 없음 | 검색 조건과 일치한 항목이 없을 경우 'No results found.' 노출 (디스크립션 3) | TI-EVT-P · LI-EVT-P #3 | Q6의 답 (다른 화면 확인) — TI-STN-03-01 · LI-STN-03-01 · TI-SVS-01 · LI-SVS-01 · TI-STN-08 케이스 | 같음 | O | 맞음 (2026-11-26, 서보경: 통일, No results found. 그대로) |
| C34 | Module 이름 뒤 (1) (L 목록 · 상세 · Message) | 번호 뺌 (Sample Storage, Flexible Extraction, High-throughput Extraction 등) | LI-EVT-P #3 · 케이스, TI · LI-EVT-01-P #2, TI · LI-EVT-02-P #7 | Q4의 답 | 같음 | O | 맞음 (2026-11-26) |
| C35 | T 목록 10개 고정 | 9 노출 개수 Dropdown 추가 (10 · 30 · 50 · 100 items, Items 오른쪽), 3 동작 「선택한 개수만큼 노출」 | TI-EVT-P #3 · #9 | Q5의 답, Common UX COMM-5-g | T만 | O | 맞음 (2026-11-26) |
| C36 | Resolution Notes 입력 중 닫기 · [List] Confirm 없음 | Confirm_016 노출 | LI-EVT-01-P #5 · #6 | Q2의 답, alert-catalog Confirm_016 | L만 | O | 맞음 (2026-11-26) |
| C37 | 경로 Event History > Event Message | Event Message (Message는 단독으로 뜸) | TI-EVT-02-P · LI-EVT-02-P 경로 | 검토 질의 1 | 같음 | - | 맞음 (2026-11-26) |
| C38 | Notes 「작성된 Resolution Notes가 있을 경우 노출」 | 「영역은 늘 노출, 작성된 Resolution Notes가 있을 경우 그 내용 노출」 | TI-EVT-01-P #3 | 검토 질의 2 | T만 | O | 맞음 (2026-11-26) |
| C39 | 4 정의의 검은 취소선 문구 3줄 | 지움 (취소선 없는 문구만 남김) | TI-EVT-P #4 | 검토 질의 3 | T만 | - | 맞음 (2026-11-26) |
| C40 | Dim(scrim) 1696 · 1628 너비, 패널 앞 흰 칸 · Popup 원본 자리 | Dim을 패널 왼쪽 끝(1920)까지 채우고 Popup · 화면 요소를 Dim 가운데로 (Event History +113px, Event Detail +167px) | TI-EVT-P · LI-EVT-P · TI-EVT-01-P · LI-EVT-01-P 0 | 검토 질의 4 | 같음 | - | 맞음 (2026-11-26) |
| C41 | Popup이 Dim 위쪽에 치우침 | Popup · 화면 요소를 Dim 세로 가운데로 (Event History +48px, Event Detail +21px) | TI-EVT-P · LI-EVT-P · TI-EVT-01-P · LI-EVT-01-P 0 | 검토 질의 5 | 같음 | - | 맞음 (2026-11-26) |
| C42 | TI-EVT-P/Case Case 1 (Tooltip) | 케이스 프레임 지움, 디스크립션 3 케이스 참고 줄 빨간 취소선 | TI-EVT-P #3 · 케이스 | 검토 질의 6 | T만 | - | 맞음 (2026-11-26) |
| C43 | LI-EVT-P/Case Case 1 (Tooltip) | 케이스 프레임 지움(섹션 높이 1822로 맞춤), 디스크립션 3 케이스 참고 줄 빨간 취소선, 화면 예시 글자 Case 1-1 줄 지움 | LI-EVT-P #3 · 케이스 | 검토 질의 7 | L만 | - | 맞음 (2026-11-26) |
| C44 | 디스크립션 3 「케이스 참고 : TI-EVT-P/Case > Case 1」 · 「… LI-EVT-P/Case > Case 1」 빨간 취소선 줄 (C42 · C43) | 줄 지움, 기획 프레임 · 섹션 높이를 패널에 맞춤 (TI 1418 · LI 1610) | TI-EVT-P · LI-EVT-P #3 | 검토 질의 8 | 같음 | - | 맞음 (2026-11-26) |
| C45 | Event Message의 [Close All] · 메시지 개수 표기가 보이지 않고 번호 표시가 글자를 가림 | Popup 위에 `1/20`(11) · [Close All](10) 노출, 번호 표시를 각 글자 위로 옮김 | TI-EVT-02-P · LI-EVT-02-P #1 ~ #12 | 검토 질의 9 · 10 | 같음 | - | 맞음 (2026-11-26) |
| C46 | T 목록 요약 `Items 1,112` · 노출 개수 Dropdown · `Open 20`이 떨어져 있음 | 노출 개수 Dropdown → `of` → `Items 1,112 \| Open 20` 한 줄 (Dropdown은 목록 왼쪽 끝) | TI-EVT-P #2 · #9 | 검토 질의 11 | T만 (L은 Dropdown 없음) | O | 맞음 (2026-11-26) |
| C47 | 디스크립션의 바뀐 글 빨간색 | 기본 글자색으로 (글은 그대로, 파란 참고 링크는 그대로). 화면 MD 6개의 `color:red`도 뺌 | 6개 화면 디스크립션 | 검토 질의 12 | 같음 | - | 맞음 (2026-11-26) |
| C48 | 취소선 줄 LI-EVT-P 6 「T-IOS 경우 클릭 시, 윈도우 탐색기가 …」 · LI-EVT-01-P 7 닫기 블록, 참고 ID 10곳 검정 | 취소선 줄 · 블록 지움 (UX 확정 뒤지만 요청자 답대로), 정책 참고 · 공통 UX 참고 ID와 화면 안 참고(TI-EVT-02-P 9 `TI-EVT-01-P`, LI-EVT-P 6 `COMM-5-m(2/4)`)를 파란색으로, TI-EVT-P 번호 9를 Dropdown 위로 | LI-EVT-P #6, LI-EVT-01-P #7, 6개 화면 디스크립션 | 요청자 확인 10, 검토 질의 13 | 같음 | - | 맞음 (2026-11-26) |
| C49 | 디스크립션 취소선 예전 값 (LI-EVT-P 1 · 3 Type 항목 `~~All, Instrument, Consumable, Reagent, Waste Bin/bottle, System~~`, LI-EVT-01-P 3 `~~500자~~`) | 취소선 글 지우고 새 값과 한 줄로 (`드롭다운 리스트 항목 : All, Instrument, Inventory, Sample, System`, `Type : Instrument, Inventory, Sample, System`, `최대 300자 입력 가능`) | LI-EVT-P #1 · #3, LI-EVT-01-P #3 | 검토 질의 14 | L만 (T에는 취소선 없음) | - | 맞음 (2026-11-26) |
| C29 | 번호 표시 5가 Notes 칸 위에 있음 | [List] 버튼 옆에 둠 | TI-EVT-01-P · LI-EVT-01-P #5 | 디스크립션 5 = [List] 버튼 | 같음 | - | 맞음 (2026-11-26) |
| C30 | 검색 영역 입력 칸 · 목록 표 · Status Toggle · 페이지 번호 (기존 컴포넌트) | Common UX 컴포넌트(Text Input · Dropdown · Basic Table · Status/Event Level · Toggle Switch · Number Pagination)로 다시 그림 | TI-EVT-P · LI-EVT-P #1 · #3 · #4 · #8 | Common UX COMM-5-p · 5-g · 5-q · 5-l | 같음 | - | 맞음 (2026-11-26) |
## 검토 질의

| 번호 | 받은 날 | 출처 (요청자 · 고객 UX 검토 · 고객 UI 검토) | 질의 | 관련된 곳 (CID · 디스크립션 번호) | 처리 | 처리한 날 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-11-26 | 요청자 | Event Message는 단독으로 뜨므로 경로를 Event Message로만 | TI-EVT-02-P · LI-EVT-02-P 경로 | 고침 (C37) | 2026-11-26 |
| 2 | 2026-11-26 | 요청자 | C17 Notes 문구가 모호함 — 영역은 고정, 내용이 있으면 표기되는 뜻으로 | TI-EVT-01-P #3 | 고침 (C38) | 2026-11-26 |
| 3 | 2026-11-26 | 요청자 | TI-EVT-P 디스크립션 4의 취소선 문구 제거, 취소선 없는 문구만 남김 | TI-EVT-P #4 | 고침 (C39) | 2026-11-26 |
| 4 | 2026-11-26 | 요청자 | Event History · Event Detail도 Event Message처럼 Dim 배경을 패널까지 채우고 가운데 정렬 | TI · LI-EVT-P, TI · LI-EVT-01-P | 고침 (C40) | 2026-11-26 |
| 5 | 2026-11-26 | 요청자 (UX 확정 물음에 「아니」로 다시 요청) | 디스크립션 상자와 사이가 비지 않게 배경 채우고 가운데 정렬 잘 맞춤 — 너비는 질의 4로 이미 맞춰져 있어 세로 가운데까지 맞춤 | TI · LI-EVT-P, TI · LI-EVT-01-P | 고침 (C41) | 2026-11-26 |
| 6 | 2026-11-26 | 요청자 | TI-EVT-P/Case 프레임은 없어도 됨, 지움 | TI-EVT-P 케이스 | 고침 (C42) | 2026-11-26 |
| 7 | 2026-11-26 | 요청자 (UX 확정 물음에 다시 요청) | LI-EVT-P/Case 프레임도 지움 | LI-EVT-P 케이스 | 고침 (C43) | 2026-11-26 |
| 8 | 2026-11-26 | 요청자 (UX 확정 물음에 다시 요청) | 케이스를 지웠으니 디스크립션 3의 케이스 참고 취소선 글자도 지움 | TI-EVT-P · LI-EVT-P #3 | 고침 (C44) | 2026-11-26 |
| 9 | 2026-11-26 | 요청자 (요청자 확인 8에 답 대신 요청) | Event Message 10 · 11번이 화면에 안 보임 (X · Close All) | TI-EVT-02-P · LI-EVT-02-P #10 · #11 | 고침 (C45) — 앞 차례에서 Figma를 고쳤으나 작업 기록에 빠져 있어, 2026-11-26 Claude가 결과물(Figma)로 확인해 적음 | 2026-11-26 |
| 10 | 2026-11-26 | 요청자 (같은 답) | 번호 표시가 글자를 가림, 다시 조정 | TI-EVT-02-P · LI-EVT-02-P #1 ~ #12 | 고침 (C45, 위와 같음) | 2026-11-26 |
| 11 | 2026-11-26 | 요청자 (UX 확정 물음에 다시 요청) | T 목록 요약을 `10 items of Items 1,112 \| Open 20`으로 | TI-EVT-P #2 · #9 | 고침 (C46) | 2026-11-26 |
| 12 | 2026-11-26 | 요청자 (같은 답) | 디스크립션의 빨간 글씨를 모두 뺌 | 6개 화면 디스크립션 | 고침 (C47). 빨간 취소선 2곳은 요청자 확인 10으로 물음 → 지움 (C48) | 2026-11-26 |
| 13 | 2026-11-26 | 요청자 (요청자 확인 10 답과 함께) | 공통 UX 참고 · 정책 참고에 색이 안 들어간 곳 있음, 점검 | 6개 화면 디스크립션 | 고침 (C48) | 2026-11-26 |
| 14 | 2026-11-26 | 요청자 (요청자 확인 11 답과 함께) | 디스크립션의 취소선을 모두 지움 | LI-EVT-P #1 · #3, LI-EVT-01-P #3 | 고침 (C49) | 2026-11-26 |

## 언어셋

<!-- 4단계 절차 4 (2026-11-26, Claude). 케이스 3이라 기준 = asis 화면 MD(화면 글자 · 디스크립션 (원문) · 케이스). 대조는 상태 `사용` 줄만 -->

| 변경 상태 | CID · 출처 | Language ID | English (변경은 변경 전 → 변경 후) | 번역 대상 (O / - 이유) | 언어셋 DB 대조 |
| --- | --- | --- | --- | --- | --- |
| 변경 | TI-EVT-P 화면 1 | | Event Id, Code → Event ID, Code | O | 있음 (LID-EVT-002) |
| 변경 | TI-EVT-01-P · LI-EVT-01-P 화면 2 | | FlexibleExtraction (T) · Flexible Extraction(1) (L) → Flexible Extraction | - (고유명사, 공통 `미번역`) | 공통에 있음 (LID-COM-TRM-011) |
| 변경 | TI-EVT-01-P · LI-EVT-01-P 화면 2 | | Starlet → STARlet | - (고유명사, 공통 `미번역`) | 공통에 있음 (LID-COM-TRM-027) |
| 변경 | TI-EVT-02-P · LI-EVT-02-P 화면 7 | | High-throughput Extraction(1) → High-throughput Extraction | - (고유명사, 공통 `미번역`) | 공통에 있음 (LID-COM-TRM-009) |
| 변경 | TI-EVT-P · LI-EVT-P 화면 3 | | Sample Processing → Sample Processing (Upper) | - (고유명사, 공통 `미번역`) | 공통에 있음 (LID-COM-TRM-022) |
| 변경 | TI-EVT-P · LI-EVT-P 화면 3 | | CFX96-1 → CFX96 (1) | - (고유명사) | 없음 — 비슷한 글자 공통 `CFX96` (LID-COM-TRM-029), 요청자 확인 14 |
| 변경 | LI-EVT-01-P 케이스 Case 1-2 | | 0 /100자 → {n} /300자 | O | 없음 — 비슷한 글자 `{n}/{max} Characters` (LID-EVT-035), 요청자 확인 14 |
| 신규 | TI-EVT-P 화면 9 · 디스크립션 9 | | {n} items | O | 없음 — 비슷한 글자 `{N} of {M} Items` (LID-EVT-044, T-IOS 목록 개수), 요청자 확인 14 |
| 신규 | TI-EVT-P 화면 2 | | of | O | 없음 — 위와 같음, 요청자 확인 14 |
| 신규 | TI-EVT-P · LI-EVT-P 디스크립션 3 | LID-STN-015 | No results found. | O | 있음 (setting-protocol 메뉴 파일) |
| 제거 | TI-EVT-P · LI-EVT-P (asis 화면 글자 화면 2) | | OPEN | - (제거) | 없음 (LID-EVT-021은 이미 `삭제`) |
| 제거 | LI-EVT-P (asis 화면 글자 화면 3, 목록 예시 데이터) | | Sample Storage(1) · Consumable Storage (1) · Sample Pre-treatment (1) · High-throughput Extraction(1) · Flexible Extraction(1) · PCR Setup(1) · Universal PCR(1) | - (제거) | 없음 |
| 제거 | TI-EVT-02-P · LI-EVT-02-P (asis 화면 글자 화면 3) | | Consumable | - (제거) | 없음 (Event History 줄 LID-EVT-006은 이미 `삭제`) |
| DB 맞춤 (추가) | TI-EVT-01-P · LI-EVT-01-P 화면 3 · 케이스 | | Resolution Notes | O | 없음 |
| DB 맞춤 (추가) | TI-EVT-02-P · LI-EVT-02-P 화면 11 | | {n}/{m} | - (숫자 표기) | 없음 |
| DB 맞춤 (CID 추가) | TI-EVT-P | LID-STN-006 | 1개 (Items) | DB 그대로 | 있음 |
| DB 맞춤 (CID 추가) | TI-EVT-01-P · LI-EVT-01-P | LID-EVT-010 · LID-SPT-025 | 2개 (Code, Nucleic Acid Extraction) | DB 그대로 | 있음 |
| DB 맞춤 (CID 추가) | TI-EVT-02-P · LI-EVT-02-P | LID-EVT-005 · LID-SPT-022 · LID-EVT-009 · LID-IVT-001 | 4개 (Instrument, Sample, System, Inventory) | DB 그대로 | 있음 |
| DB 맞춤 (CID 추가) | TI-EVT-P · LI-EVT-P | LID-SPT-026 · LID-SPT-032 | 2개 (PCR Setup, Plate Sealing) | DB 그대로 | 있음 (sample-tracking 메뉴 파일) |
| DB 맞춤 (CID 추가) | TI-EVT-P · LI-EVT-P | | 12개 (Sample Storage TRM-006 · Consumable Storage TRM-007 · Sample Pre-treatment TRM-008 · High-throughput Extraction TRM-009 · Flexible Extraction TRM-011 · Universal PCR TRM-014 · Inbound Trolley TRM-019 · Outbound Trolley TRM-020 · Trolley TRM-021 · Spin Tip Storage TRM-035 · MB Tube Storage TRM-037 · Buffer Cartridge Storage TRM-038) | DB 그대로 | 공통에 있음 (LID-COM-…) |
| DB 맞춤 (CID 추가) | TI-EVT-02-P · LI-EVT-02-P | | 1개 (M9600) | DB 그대로 | 공통에 있음 (LID-COM-TRM-026) |
| DB 맞춤 (제거) | TI-EVT-P · LI-EVT-P (DB 비고: 상세 보기 / 테이블 컬럼 값 · 필터 레이블) | LID-STN-012 · LID-EVT-015 | Details · Occurred Date | - (제거) | 있음 |
| DB 맞춤 (제거) | TI-EVT-01-P · LI-EVT-01-P (DB 비고: 목록 이동 버튼 · 테이블 구분 값) | LID-EVT-026 · LID-EVT-041 (01만) | Back to list · Event Code | - (제거) | 있음 |
| DB 맞춤 (제거) | LI-EVT-01-P (DB 비고: 메모 취소 · 저장 버튼 — 화면은 아이콘만) | LID-STN-021 · LID-STN-022 | Cancel · Save | - (제거) | 있음 |
| DB 맞춤 (제거) | TI-EVT-02-P · LI-EVT-02-P (DB 비고: Popup 타이틀) | LID-INS-018 | Event | - (제거) | 있음 |

- 바뀌지 않은 글자 중 비슷한 글자만 있는 것(요청자 확인 14, 답에 따라 Language ID · DB 맞춤을 정함): TI · LI-EVT-02-P `Event Code:` · `Type:` · `Module:` · `Unit:` ↔ LID-EVT-041 · 004 · 012 · 013 / TI · LI-EVT-01-P `Updated Date/Time. {date}` · `Updated by. {id}` ↔ LID-EVT-027 · 028 / TI · LI-EVT-P `300 μL Tip Storage (1)` ↔ 공통 LID-COM-TRM-040
- 언어셋 DB에서 이 화면 CID인데 표에 없어도 두는 것(판단, 2026-11-26 Claude): Select a Date · Sun ~ Sat · Done (LID-RUN-021 · LID-STA-009 ~ 015 · LID-EVT-025) — 1 기간 검색이 여는 Common UX Date Calendar의 글자. 기획 프레임에 그리지 않아 표에 없을 뿐 화면에서 그대로 씀
- 화면 MD "화면 표기 글자" 표의 Language ID: `있음`과 바뀌지 않은 줄의 메뉴 파일 ID를 채움 (2026-11-26). `변경` 줄 · 공통에만 있는 줄 · 요청자 확인 14 줄은 비움

**새로 넣을 줄** (언어셋 DB 대조가 `없음`이고 `제거`가 아닌 줄. 요청자 확인 14 줄은 답 뒤 확정)

| English | Type | German | Portuguese | Spanish | Italian | French | 검증 상태 | 가장 긴 언어 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Resolution Notes | title | Lösungsnotizen | Notas de Resolução | Notas de Resolución | Note di Risoluzione | Notes de résolution | AI 번역 | ES · IT · FR (19) |
| {n}/{m} | txt | - | - | - | - | - | AI 번역 | - |
| CFX96 (1) | txt | - | - | - | - | - | AI 번역 | - (요청자 확인 14) |
| {n} items | txt | {n} Einträge | {n} itens | {n} elementos | {n} elementi | {n} éléments | AI 번역 | ES (13) (요청자 확인 14) |
| of | txt | von | de | de | di | sur | AI 번역 | DE · FR (3) (요청자 확인 14) |
| {n} /300자 | txt | {n}/300 Zeichen | {n}/300 caracteres | {n}/300 caracteres | {n}/300 caratteri | {n}/300 caractères | AI 번역 | PT · ES · FR (18) (요청자 확인 14) |

## 요청자 확인

| # | 생긴 날 | 단계 · 절차 (질문 번호 또는 `예외`) | 물은 것 | 관련된 곳 (CID · 디스크립션 번호 · Language ID) | 답을 받을 때까지 둔 모습 (예외 질문만) | 답 (날짜) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-11-25 | 1단계 절차 4 순서 3 (IA와 화면이 다른 곳) | 화면 이름: IA Lv.2는 `Event Detail` · `Event Message`, 화면은 `Event History Detail` · `Event Message Popup`. 어느 이름으로 그릴지 | TI-EVT-01-P · LI-EVT-01-P · TI-EVT-02-P · LI-EVT-02-P | | IA 이름대로 (`Event Detail` · `Event Message`) (2026-11-25, 서보경) |
| 2 | 2026-11-25 | 1단계 절차 4 순서 3 (IA와 화면이 다른 곳) | 짝 화면 관계: IA T-IOS 줄은 `짝 화면 동일 Y`인데, 화면은 L-IOS에만 Status Toggle · [Mark all as Closed] · Resolution Notes 입력이 있어 다름(화면 MD `tl_relation: 기능 추가`). IA를 화면에 맞출지 | TI-EVT-P · TI-EVT-01-P (짝 LI-EVT-P · LI-EVT-01-P) | | IA 그대로 — T · L은 같은 화면이고 기능 차이일 뿐 (2026-11-25, 서보경) |
| 3 | 2026-11-25 | 1단계 절차 5 질문 6 | 대상 화면의 반영 대기 항목 23개(묶음 1 ~ 6)를 묶음마다 반영할지 | "대상 화면의 반영 대기 항목" 묶음 1 ~ 6 | | 묶음 1 ~ 5 반영 (1 · 3 · 4 · 5는 추천대로, 2는 「T-IOS는 Status 변경 기능 없이 목록에 상태값만 표기」로 반영), 묶음 6 제외 (바꾸지 않음) (2026-11-25, 서보경) |
| 5 | 2026-11-26 | 4단계 절차 1 (C33 답 대신 되물음) | 「데이터 없음」 문구는 다른 화면에서 어디에 쓰나, 보통 무엇을 쓰나 → 저장소 사용처를 보여 줌(No results found. LID-STN-015: Protocol · Tube · Assay Pack Setting / No {대상} found.: Tube · Assay Pack 등록 없음 / There are no tests in progress. / No registered modules available / No item). 추천 No results found. 그대로, 다른 안 No events found. | TI-EVT-P · LI-EVT-P #3 | 'No results found.'로 둔 채 기다림 | No results found. 그대로, 통일 (2026-11-26, 서보경) |
| 6 | 2026-11-26 | 4단계 절차 2 (예외, 질의 7 결과 보고) | TI-EVT-P · LI-EVT-P 기획 프레임에서 Dim 아래(디스크립션 상자 쪽 세로)가 흰 바탕으로 남음. 세로로도 Dim을 채울지 | TI-EVT-P · LI-EVT-P 0 | 너비 · 세로 가운데만 맞춘 채 둠 | 세로는 그대로 둠 (2026-11-26, 서보경), 고침 없음 |
| 7 | 2026-11-26 | 4단계 절차 3 (UX 확정 물음) | 사용자 확인 목록과 질의가 모두 풀렸습니다. 최종으로 UX 확정을 하시겠습니까? | 6개 화면 | | UX 확정 (2026-11-26, 서보경) |
| 8 | 2026-11-26 | 4단계 절차 3 순서 2 · 3 | 기계 검사를 한 번 더 검토할지 (추천 검토함, 절차 1 뒤 C37 ~ C44로 고침) · 요건 1 UI 작업 줄 값 (추천 `대상`: C35 · C30 · C26 · C27 · C40 · C41 배치 · 요소, C33 · C20 · C2 · C34 화면 표기 글자. 디자인 화면은 읽지 않아 그곳 글자는 보지 못함). Ver은 케이스 3이라 묻지 않음 | 요건 1, 6개 화면 | | 답 대신 검토 질의 9 · 10 요청 (2026-11-26, 서보경) → UX 확정 다시 물음 |
| 9 | 2026-11-26 | 4단계 절차 2 순서 5 (UX 확정 다시 물음) | 사용자 확인 목록과 질의가 모두 풀렸습니다. 최종으로 UX 확정을 하시겠습니까? | 6개 화면 | | 답 대신 검토 질의 11 · 12 요청 (2026-11-26, 서보경) |
| 10 | 2026-11-26 | 4단계 절차 2 (예외, 검토 질의 12) | 빨간 글씨를 뺄 때 빨간 취소선 2곳(LI-EVT-P 6 「T-IOS 경우 클릭 시, 윈도우 탐색기가 …」 줄, LI-EVT-01-P 7 「닫기」 블록)은 줄을 지울지, 검은 취소선으로 둘지. 추천 지움 (검토 질의 3 · 8과 같음, 단 UX 확정 뒤에는 블록을 지우지 않는 규칙이 있어 7 블록은 요청자 결정 필요) | LI-EVT-P #6, LI-EVT-01-P #7 | 색만 검정으로 바꾸고 취소선은 둔 채 기다림 | 줄 지움 (2026-11-26, 서보경) → C48. 같은 답에 「참고 색 점검 후 UI 확정」 → 검토 질의 13, 기계 검사, UX 확정으로 봄 |
| 11 | 2026-11-26 | 4단계 절차 3 순서 3 | 요건 1 UI 작업 줄 값 (추천 `대상`: C46 · C35 · C30 · C26 · C27 · C40 · C41 · C45 배치 · 요소, C33 · C20 · C2 · C34 화면 표기 글자. 디자인 화면은 읽지 않아 그곳 글자는 보지 못함). Ver은 케이스 3이라 묻지 않음. 「UI 확정해줘」를 UX 확정으로 본 것도 함께 알림 | 요건 1 | | `대상 아님` — 우선 UI 작업 없음 (2026-11-26, 서보경). 같은 답에 검토 질의 14 |
| 12 | 2026-11-26 | 4단계 절차 2 순서 5 (UX 확정 뒤 질의 14를 고쳐 다시 물음) | 사용자 확인 목록과 질의가 모두 풀렸습니다. 최종으로 UX 확정을 하시겠습니까? | 6개 화면 | | UX 확정 (2026-11-26, 서보경) |
| 13 | 2026-11-26 | 4단계 절차 3 순서 2 | 기계 검사를 한 번 더 검토할까요? (마지막 검사 뒤 LI-EVT-P 1 · 3, LI-EVT-01-P 3 취소선 지움, C49. 추천 검토함) | LI-EVT-P · LI-EVT-01-P | | 하지 않음 (2026-11-26, 서보경) |
| 14 | 2026-11-26 | 4단계 절차 4 순서 5 (언어셋 비슷한 글자) | 언어셋 DB에 비슷한 글자가 있습니다. 같은 글자로 볼까요? ① `Event Code:` · `Type:` · `Module:` · `Unit:` ↔ LID-EVT-041 · 004 · 012 · 013 (콜론만 다름) ② `Updated Date/Time. {date}` · `Updated by. {id}` ↔ LID-EVT-027 · 028 (마침표 · 값만 다름) ③ `300 μL Tip Storage (1)` · `CFX96 (1)` ↔ 공통 LID-COM-TRM-040 · 029 (번호만 다름) ④ T 목록 요약 `{n} items` · `of` ↔ LID-EVT-044 `{N} of {M} Items` ⑤ `{n} /300자` ↔ LID-EVT-035 `{n}/{max} Characters`. 추천 모두 같은 글자로 봄 | TI · LI-EVT-02-P, TI · LI-EVT-01-P, TI · LI-EVT-P, LI-EVT-01-P 케이스 | Language ID 비운 채 "새로 넣을 줄"에 임시로 둠 | |
| 4 | 2026-11-25 | 1단계 절차 5 질문 7 | 위 요건 목록과 흐름대로 진행할지 (2단계로 넘어갈지) | 요건 1 | | 그대로 진행 (2026-11-25, 서보경). 이어서 「1단계까지만 하고 2단계는 멈춤」 (2026-11-25, 서보경) |

## 이 작업의 논의 대상

| 논의 대상 | 상태 (논의 중 / 결정) | 내용 한 줄 | 5단계 반영 |
| --- | --- | --- | --- |

## 이 작업이 남긴 것

- 다른 화면의 반영 대기 항목:
- 고친 카탈로그 줄: alert/alert-catalog.csv Confirm_016 사용 화면에 LI-EVT-01-P 더함 (2026-11-26, Q2 답)
