---
cid: TI-EVT-01-P
pair_cid: LI-EVT-01-P
tl_relation: 기능 추가
title: Event History Detail
path: Event History > Detail
type: Popup
version:       # 확인 필요 (질문 대기 Q1)
date:
author: 서보경
service_mode: []
user_type: [Service, Admin, User]
policies: [POL-EVT-001, POL-EVT-002]
rules_version:
provisional: []
flags: []
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/?node-id=2081-5350   # 테스트 (UX-AI-TEST Page 10)
---
# TI-EVT-01-P Event History Detail

- T/L 차이: T-IOS는 Status와 Notes를 보기만 함(L-IOS에서 바꾼 값과 쓴 Notes만 보임). L-IOS(LI-EVT-01-P)는 Status Toggle과 Notes 작성이 있음 (POL-EVT-002 규칙 1 · 3)
- 호출하는 화면: [TI-EVT-P] Event History ([List] 클릭 시)
- 호출되는 곳: [TI-EVT-P] Event History 리스트의 줄 클릭 시, [TI-EVT-02-P] Event Message Popup의 [View Details] 클릭 시

## 디스크립션

### 0. 화면 정의

- 화면 정의
  - Event History에서 선택한 Event의 상세 정보가 표기되는 화면이다.
  - 이중 Popup이 아닌, Event History Popup 안에서 목록 → 상세로 전환되는 구조이다.
- 진입점
  - Event History 목록에서 Event 행 클릭 시 진입
  - Event Message Popup의 [View Details] 클릭 시 진입
- User Type
  - Service, Admin, User
- 정책 참고
  - POL-EVT-001, POL-EVT-002

### 1. Event Info

- 정의: 선택한 Event의 주요 속성을 확인하는 영역
- 노출 항목
  - Event ID: Event를 식별하는 고유 ID. Event 생성 시 시스템이 순차로 증가하는 값을 자동 부여하며 중복되지 않음
  - Event Code: Event의 발생 유형을 구분하는 코드
  - Type: Instrument, Inventory, Sample, System 중 해당 항목 표기
  - Level: Event의 중요도. Error 또는 Warning 표기
  - Status: Open 또는 Closed 표기
  - Occurred Date/Time: Event 발생 일시 (YYYY-MM-DD hh:mm)
  - Description: Event Code에 따라 정의된 Event 내용
  - Effect: Event Code에 연계된 Scenario Code의 설명. 연계된 코드가 없으면 '-' 표기, 여러 개면 목록형으로 줄을 바꿔 모두 표기 (UI 참고)
  - Recommended Action: Event Code에 따라 정의된 조치 방법
- 정책 참고: POL-EVT-001

### 2. Instrument Info

- 정의: Event가 발생한 Instrument 정보 영역
- 노출 항목
  - Module: Event가 발생한 Module. 같은 Type의 Module이 2대 이상이면 번호와 함께 표기
  - Unit: Event가 발생한 Unit
  - Process: Event가 발생한 검사 단계
- Module 단위에서만 유효한 Event는 Unit을 '-'로 표기
- Instrument와 관계없는 Event는 Module · Unit · Process를 모두 '-'로 표기

### 3. Notes

- Read Only 영역으로, L-IOS에서 조치 기록(Resolution Notes)을 작성한 경우에만 노출됨
- 정책 참고: POL-EVT-002

### 4. Updated Date/Time, Updated by

- Event의 Status가 변경되거나 Notes가 작성 · 변경되면, 변경 시점과 변경한 사용자 정보를 표기하는 영역
- Updated Date/Time: 정보가 마지막으로 변경된 일시 (YYYY-MM-DD hh:mm)
- Updated by: 정보를 변경한 사용자의 로그인 ID

### 5. [List]

- Common UX 참고: COMM-5-c
- 클릭 시, Event History 목록으로 이동
- 이전 페이지 유지: 특정 페이지(예: 3페이지)에서 상세로 진입한 경우, 조회하던 페이지로 복귀

### 6. [X]

- 클릭 시, Event History Popup이 닫힘

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1 | Event ID | 000128 | 지어 씀 (규칙 2의 순번) |
| 1 | Event Code · Description | ER-6105 · Pick Up Fail | 기준데이터에 없어 지어 씀 |
| 1 | Type · Level · Status | Instrument · Error · Open | `status-values.csv` |
| 1 | Occurred Date/Time | 2026-11-06 15:57 | COMM-4-a |
| 1 | Effect | Vision inspection for used consumable failed. / Failed to dispose of consumable. | 지어 씀, 여러 줄 예 |
| 1 | Recommended Action | Check the unit inside the instrument. | 지어 씀 |
| 2 | Module · Unit · Process | Flexible Extraction (1) · STARlet · Nucleic Acid Extraction | `module-units.csv`, `test-stages.csv` |
| 3 | Notes | Replaced the tip rack and restarted the run. | 지어 씀 |
| 4 | Updated | 2026-11-06 16:01 · service01 | 지어 씀 |

## 문구

| 번호 | 영어 문구 | 언어셋 ID | 최장 언어 · 표현 | 상태 (확정 / 번역 대기) |
| --- | --- | --- | --- | --- |
| 1 | Event ID, Event Code, Type, Level, Status, Occurred Date/Time, Description, Effect, Recommended Action | | | 확정 |
| 2 | Module, Unit, Process | | | 확정 |
| 3 · 4 | Notes, Updated Date/Time, Updated by | | | 확정 |
| 5 | List | | | 확정 |

## 상태별 화면

| 상태 | 언제 | 화면에서 바뀌는 것 | 프레임 |
| --- | --- | --- | --- |
| 정상 | 상세를 열었을 때 | 기획 프레임 | TI-EVT-01-P |
| 로딩 | 해당 없음: 리스트에서 이미 받은 값으로 바로 노출 | | |
| 비활성 | 해당 없음: 바꿀 수 있는 요소 없음 | | |
| 오류 | 상세를 불러오지 못함 | Alert_020 | 해당 없음: 알럿으로 처리 |
| 빈 상태 | 값이 없는 칸 | 칸마다 '-' | 기획 프레임의 Notes · Updated 예 |
| 장비 이상 | 해당 없음 | | |

## 알럿

| 번호 | 알럿 ID | 언제 | 버튼 동작 |
| --- | --- | --- | --- |
| 1 | Alert_020 | 상세를 불러오지 못했을 때 | OK: 알럿 닫힘 |

## 케이스

| # | 케이스 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Effect 여러 개 | Scenario Code가 2개 이상 | 기획 프레임 예시 값 |

## 질문 대기

| # | 질문 | 걸린 번호 | 올린 곳 (PD · CA) |
| --- | --- | --- | --- |
| Q1 | 이번 작업의 Ver | 머리말 | 요청자 |
| Q2 | Event Message Popup에서 들어온 뒤 [List] 클릭 시 돌아갈 리스트 조건 | 5 | 요청자 |

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 표기 | Module "FlexibleExtraction", Unit "Starlet" (코드명·소문자) | Flexible Extraction (1), STARlet | `glossary/modules.csv`, `module-units.csv` | 반영 완료 (2026-11-06) |
| R02 | 디스크립션 | 1 "Created Date", 화면 "Occurred Date/Time" | 하나로 통일 | 화면 글자 | 반영 완료 (2026-11-06, Occurred Date/Time) |
| R03 | 정책 반영 | T-IOS에서 Status를 바꿀 수 있는지 상세 화면에 없음 (목록 TI-EVT-P 4는 바꿀 수 있음) | POL-EVT-002 참조 | POL-EVT-002 | 반영 완료 (2026-11-06) |
| R04 | 출처 | Effect의 참고 문서 "[SRD] CURECA Prep 및 Dx 장비 Event 정의"가 기준 출처 목록에 없음 | 값은 고객·개발사가 관리하는 문서를 따름. 저장소에 넣지 않음 | POL-EVT-001 규칙 7 | 제외 (2026-11-04, 바꿀 것 칸 참고) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.14 | 2026-10-30 | Effect 항목 추가 | 서보경 | Figma 버전 메모 |
| | 2026-11-06 | 신규 작업방 규칙으로 새로 그림 (테스트: UX-AI-TEST Page 10. 기존: 작업방 · Ver 2.1.14). R01 · R02 · R03 반영. 일시를 분까지(COMM-4-a) | 서보경 | 케이스 1, POL-EVT-001 · 002 |
| | 2026-11-06 | 디스크립션을 기존 작업방 원본(T · L 각각)을 다시 읽고 고객사 · 개발사가 읽는 말투로 다시 씀. 짝 화면 참조("원문은 …와 같음") 없앰 | 서보경 | 8절 "읽는 사람과 말투" |
