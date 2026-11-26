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
basis:
basis_versions:
  rules:
  policy:
  glossary:
  screens:
  common_ux:
started: 2026-11-25
---
# 작업 기록: Event History 화면을 Event History_tobe 페이지로 옮겨 다시 그림

## 단계

| 단계 | 끝낸 날 | 마침 점검 | 남긴 것 |
| --- | --- | --- | --- |
| 1. 시작 · 요건 정의 | 2026-11-25 | 요청자 확인 2026-11-25 | 겹치는 다른 작업: 없음 |
| 2. 근거 · 분석 | 2026-11-26 | 물을 것 없음 (2026-11-26) | 정책 수정 범위 없음, 질문 대기 Q1 ~ Q4, 변경 확인 C1 ~ C12 |
| 3. 화면 설계 | | | 진행 중: 자리 잡음 (2026-11-26) |
| 4. 수정 · 확인 | | | |
| 5. 완료 | | | |

이어서 작업할 곳: 3단계 · 자리 잡음 (CID 6개 섹션 · 메뉴 단위 표시, 2026-11-26), 화면 MD 6개를 asis에서 tobe로 새로 쓸 차례(케이스 3 흐름 2 · 3-2) 뒤 TI-EVT-P부터 그릴 차례 (다시 읽을 곳: 3단계 flow/3-design.md 절차 1번 "읽을 것" 3 · 4 · 공통 1 ~ 5 / flow/3-design-case3.md 흐름 · 3-2 ~ 3-4 · 공통 규칙에서 케이스 3만 다른 것 / 작업 기록 "요건 목록" 요건 1 · "뒤 단계용 확인 항목(claude)" · "대상 화면의 반영 대기 항목" · "근거" · "설계" 화면별 작업 · "질문 대기" · "변경 확인")

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
- UI 작업: 대상 아님 (케이스 3 기본값. 다시 그리며 바뀐 곳이 생기면 4단계 UX 확정 때 다시 정함)

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
| Event History (TI-EVT-P / LI-EVT-P) | 3 | 1 | 자리 잡음: T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3706-1250 / L https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3706-1257 | | |
| Event Detail (TI-EVT-01-P / LI-EVT-01-P) | 3 | 1 | 자리 잡음: T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3706-1251 / L https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3706-1258 | | |
| Event Message (TI-EVT-02-P / LI-EVT-02-P) | 3 | 1 | 자리 잡음: T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3706-1252 / L https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3706-1259 | | |

- 메뉴 단위 표시 (2026-11-26, Claude): T-IOS 줄 시스템 구분 `T-IOS - 2.1` · 기획 진행 표시 `SB-Update : 2026.08.05 (검토 완료)` / L-IOS 줄 `L-IOS - 2.1` · `SB-Update : 2026.08.07 (검토 완료)` — asis 페이지의 기획 진행 표시(`컨펌 완료`)를 날짜 그대로, 진행 상태는 새 이름으로 옮김 (flow/3-design-case3.md "공통 3 머리 · 공통 4"). 너비 8469 (섹션 줄 너비, T · L 같음)
- 섹션 높이는 자리 잡기용 임시 값(asis 기획 프레임 높이 + 200). 그린 뒤 맞춤. 기획 프레임 너비는 asis 원본 너비대로: TI · LI-EVT-P · TI · LI-EVT-01-P 2252, TI · LI-EVT-02-P 1960 (섹션 너비 2787 / 2495)

### 컴포넌트 없이 그린 요소
| 요소 이름 (종류) | 하는 일 | 쓴 곳 (CID · 디스크립션 번호) | 어디서 (후보 ID / 신규로 만듦 / 기존 화면에서 따옴) | 원본 요약 (기존 화면에서 따옴만: 크기 · 모서리 · 줄 × 칸 · 도형 · 글자 · 인스턴스) | Figma 링크 |
| --- | --- | --- | --- | --- | --- |

### 근거로 풀린 것
| 질문 | 푼 근거 |
| --- | --- |

### 찾은 것

### 용어 치환
| 원래 표현 | 표준어 | 위치 |
| --- | --- | --- |
## 질문 대기

| 번호 (Q) | 질문 | 관련된 곳 (CID · 디스크립션 번호) | 논의 대상 | T · L 같음 | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- | --- |
| Q1 | 목록 요약의 전체 개수 이름 (화면 `Items` / 디스크립션 `Total Event`, POL-EVT-001 규칙 5는 Open 개수만 정함) | TI-EVT-P · LI-EVT-P #2 | | 같음 | |
| Q2 | Resolution Notes 입력 중 닫기 · List를 누를 때 Confirm 여부 (POL-EVT-002 규칙 5는 Cancel만 정함, 메뉴 이탈용 Confirm_007 · 016 있음) | LI-EVT-01-P #3 · #5 · #6 | | L만 | |
| Q3 | Event Message의 L-IOS Client Mode (POL-EVT-003 규칙 1 Main · Console / client-mode-matrix에 Event Message 줄 없음) | LI-EVT-02-P 0 · 머리말 `client_mode` | | L만 | |
| Q4 | Module 이름 뒤 번호 `(1)` 표기 여부 (T 목록은 없음 · L 목록 · 상세 · Message는 있음, glossary.md `Module (Index)`) | TI-EVT-P · LI-EVT-P #3, TI · LI-EVT-01-P #2, TI · LI-EVT-02-P #7 | | 같음 | |
## 변경 확인

| 번호 (C) | 기존 화면 | 바꿔 그린 것 | 관련된 곳 (CID · 디스크립션 번호) | 근거 | T · L 같음 | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C1 | Common UX 참고 `COMM-5-j(4/4)` | `COMM-5-m(2/4)` Import / Export Popup | LI-EVT-P #6 | POL-COM-006 규칙 4 | L만 | - | |
| C2 | 화면 글자 `Type: Consumable` | `Type: Inventory` | TI-EVT-02-P · LI-EVT-02-P #3 | status-values.csv Event Type | 같음 | - | |
| C3 | 상세 Status 옆 번호 표시 `1-2` (T) | T에서 `1-2` 번호 표시 뺌 (Status는 표기만) | TI-EVT-01-P #1 | POL-EVT-002 규칙 1 | T만 | - | |
| C4 | 화면 이름 Event History Detail · Event Message Popup | Event Detail · Event Message | TI · LI-EVT-01-P, TI · LI-EVT-02-P | IA Lv.2 (요청자 확인 1) | 같음 | - | |
| C5 | 디스크립션 용어 (장비 · 팝업 · 툴팁 · 모듈 · 이벤트 · 알람 · 표시 등) | 용어집 표준어로 | 6개 화면 디스크립션 | terms.csv (근거 "용어 목록") | 같음 | - | |
| C6 | 목록 Unit `Sample Processing` | `Sample Processing (Upper)` (예시 데이터) | TI-EVT-P · LI-EVT-P #3 | module-units.csv, DS-0004 | 같음 | - | |
| C7 | Module `Sample Storage(1)` 등 붙여 씀 | `Sample Storage (1)` 띄어 씀 | LI-EVT-P #3, LI-EVT-02-P #7 | glossary.md 이름과 번호 | L만 | - | |
| C8 | Type Default `all` | `All` | TI-EVT-P · LI-EVT-P #1 | 화면 글자 · status-values 표기 | 같음 | - | |
| C9 | `Created Date` | `Occurred Date/Time` | LI-EVT-01-P #1 | POL-EVT-001 정의 | L만 | - | |
| C10 | 디스크립션 Recommended Action → Effect 순서 | Effect → Recommended Action | LI-EVT-01-P #1 | POL-EVT-001 정의 순서 · 화면 글자 | L만 | - | |
| C11 | 케이스 `0 /100자` | `0 /300자` | LI-EVT-01-P 케이스 | POL-EVT-002 규칙 5 | L만 | O | |
| C12 | `Enter action Details.` · `refill.Consumables` | `Enter action details.` · `refill. Consumables` | LI-EVT-01-P 케이스, TI · LI-EVT-P 케이스 | 오타 | 같음 | - | |
## 검토 질의

## 언어셋

## 요청자 확인

| # | 생긴 날 | 단계 · 절차 (질문 번호 또는 `예외`) | 물은 것 | 관련된 곳 (CID · 디스크립션 번호 · Language ID) | 답을 받을 때까지 둔 모습 (예외 질문만) | 답 (날짜) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-11-25 | 1단계 절차 4 순서 3 (IA와 화면이 다른 곳) | 화면 이름: IA Lv.2는 `Event Detail` · `Event Message`, 화면은 `Event History Detail` · `Event Message Popup`. 어느 이름으로 그릴지 | TI-EVT-01-P · LI-EVT-01-P · TI-EVT-02-P · LI-EVT-02-P | | IA 이름대로 (`Event Detail` · `Event Message`) (2026-11-25, 서보경) |
| 2 | 2026-11-25 | 1단계 절차 4 순서 3 (IA와 화면이 다른 곳) | 짝 화면 관계: IA T-IOS 줄은 `짝 화면 동일 Y`인데, 화면은 L-IOS에만 Status Toggle · [Mark all as Closed] · Resolution Notes 입력이 있어 다름(화면 MD `tl_relation: 기능 추가`). IA를 화면에 맞출지 | TI-EVT-P · TI-EVT-01-P (짝 LI-EVT-P · LI-EVT-01-P) | | IA 그대로 — T · L은 같은 화면이고 기능 차이일 뿐 (2026-11-25, 서보경) |
| 3 | 2026-11-25 | 1단계 절차 5 질문 6 | 대상 화면의 반영 대기 항목 23개(묶음 1 ~ 6)를 묶음마다 반영할지 | "대상 화면의 반영 대기 항목" 묶음 1 ~ 6 | | 묶음 1 ~ 5 반영 (1 · 3 · 4 · 5는 추천대로, 2는 「T-IOS는 Status 변경 기능 없이 목록에 상태값만 표기」로 반영), 묶음 6 제외 (바꾸지 않음) (2026-11-25, 서보경) |
| 4 | 2026-11-25 | 1단계 절차 5 질문 7 | 위 요건 목록과 흐름대로 진행할지 (2단계로 넘어갈지) | 요건 1 | | 그대로 진행 (2026-11-25, 서보경). 이어서 「1단계까지만 하고 2단계는 멈춤」 (2026-11-25, 서보경) |

## 이 작업의 논의 대상

| 논의 대상 | 상태 (논의 중 / 결정) | 내용 한 줄 | 5단계 반영 |
| --- | --- | --- | --- |

## 이 작업이 남긴 것

- 다른 화면의 반영 대기 항목:
- 고친 카탈로그 줄:
