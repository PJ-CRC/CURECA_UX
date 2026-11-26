---
status: 진행 중            # 진행 중 | 끝남 | 멈춤
requester: 서보경
menu: Event History (EVT)
cids: [TI-EVT-P, LI-EVT-P, TI-EVT-01-P, LI-EVT-01-P, TI-EVT-02-P, LI-EVT-02-P]
policies: []
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
| 3. 화면 설계 | | | |
| 4. 수정 · 확인 | | | |
| 5. 완료 | | | |

이어서 작업할 곳: 3단계 · 화면 설계 시작할 차례 (2단계 마침 점검 통과 2026-11-26, 물을 것 없어 묻지 않고 넘어감. 2026-11-26 요청자 답 「인증 · 다시 켬, 이어서 진행」으로 2단계 진행)

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
| 1 | 1. 기능 정의가 안 된 요소: 목록 아래 페이지 번호(1 ~ 10)에 번호 · 설명이 없음 | TI-EVT-P · LI-EVT-P #3 | 3단계 | 3단계로 (Common UX 페이지 번호 컴포넌트) |
| 2 | 1. 기능 정의가 안 된 요소: 목록 행을 누르면 상세로 넘어가는 동작이 목록 디스크립션에 없음 (상세 화면 0 진입 방법에만 있음) | TI-EVT-P · LI-EVT-P #3 | 3단계 | 근거로 풀림 (TI-EVT-01-P · LI-EVT-01-P 디스크립션 0 진입 방법) |
| 3 | 1. 기능 정의가 안 된 요소: 기간 검색에서 최대 1년을 넘게 고르면 어떻게 되는지 없음 | TI-EVT-P · LI-EVT-P #1 | 3단계 | 3단계로 (Common UX 기간 선택 컴포넌트, 없으면 질문 대기) |
| 4 | 1. 기능 정의가 안 된 요소: 화면 번호 표시 1-2(Status)에 디스크립션 블록이 없음 | TI-EVT-01-P #1-2 | 3단계 | 근거로 풀림 (POL-EVT-002 규칙 1: T-IOS는 Status를 보여 주기만 함) · C3 |
| 5 | 2. Alert · Confirm 보완 필요 지점: Resolution Notes 입력 중 Cancel · 닫기를 누르면 입력한 내용이 반영되지 않는데, 다시 묻는 Confirm이 디스크립션에 없음 | LI-EVT-01-P #3 · #6 | 2단계 | Cancel은 근거로 풀림 (POL-EVT-002 규칙 5: 취소하면 반영하지 않음) · 입력 중 닫기 · List는 Q2 |
| 6 | 5. 대상 화면에서 찾은 고칠 점: Unit `Sample Processing`은 기준데이터에 없는 예전 이름 (`Sample Processing (Upper)` / `Sample Processing (Lower)` 가운데 무엇인지 정해지지 않음) | TI-EVT-P · LI-EVT-P #3 목록 3행 | 3단계 | C6 |
| 7 | 5. 대상 화면에서 찾은 고칠 점: Module 이름과 번호 사이 띄어쓰기 `Sample Storage(1)` · `High-throughput Extraction(1)` · `Flexible Extraction(1)` · `PCR Setup(1)` · `Universal PCR(1)` → `Sample Storage (1)` 등 (`glossary/glossary.md` 이름과 번호 띄어 씀). TI-EVT-02-P는 반영 대기 TI-EVT-02-P-R04에 있음 | LI-EVT-P #3 목록, LI-EVT-02-P #7 | 3단계 | 근거로 풀림 (glossary.md 이름과 번호 띄어 씀) · C7 |
| 8 | 5. 대상 화면에서 찾은 고칠 점: 검색 라벨 `Event Id, Code` → `Event ID, Code` (LI-EVT-P 화면 · 디스크립션과 맞춤) | TI-EVT-P #1 | 3단계 | 근거로 풀림 (LI-EVT-P 화면 글자, 반영 대기 TI-EVT-P-R05) |
| 9 | 5. 대상 화면에서 찾은 고칠 점: Type 기본값 `all` → `All` | TI-EVT-P · LI-EVT-P #1 | 3단계 | C8 |
| 10 | 5. 대상 화면에서 찾은 고칠 점: 목록 요약 화면 글자 `Items`와 디스크립션 `Total Event`가 다름 (무엇으로 맞출지 정해지지 않음) | TI-EVT-P · LI-EVT-P #2 | 3단계 | Q1 |
| 11 | 5. 대상 화면에서 찾은 고칠 점: 디스크립션 `Created Date`와 화면 `Occurred Date/Time`이 다름 (TI는 반영 대기 TI-EVT-01-P-R02에 있음) | LI-EVT-01-P #1 | 3단계 | 근거로 풀림 (POL-EVT-001 정의 Event 항목: Occurred Date/Time) · C9 |
| 12 | 5. 대상 화면에서 찾은 고칠 점: 일시 표기가 화면마다 다름 — 상세 Occurred T `2025-09-29 15:57` / L `15:57:03`, 목록 `15:57:00`, Updated T `16:01` / L `16:01:13` (무엇으로 맞출지 정해지지 않음) | TI-EVT-01-P · LI-EVT-01-P #1 · #4, TI-EVT-P · LI-EVT-P #3 | 3단계 | 3단계로 (Common UX 일시 표기 확인, 없으면 질문 대기) |
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
