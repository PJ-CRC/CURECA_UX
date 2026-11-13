---
cid: LI-EVT-01-P
pair_cid: TI-EVT-01-P
tl_relation: 기능 추가
title: Event History Detail
path: Event History > Detail
type: Popup
version:       # 확인 필요 (질문 대기 Q1)
date:
author: 서보경
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin, User]
policies: [POL-EVT-001, POL-EVT-002]
rules_version:
provisional: []
flags: []
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/?node-id=2081-5637   # 테스트 (UX-AI-TEST Page 10)
---
# LI-EVT-01-P Event History Detail

- T/L 차이: L-IOS는 Status Toggle(1-1)과 Notes 작성(3)이 있음. 둘 다 Main Mode에서만 쓸 수 있고 그 밖의 Service Mode는 보기만 함 (POL-EVT-002 규칙 2)
- 호출하는 화면: [LI-EVT-P] Event History ([List] 클릭 시)
- 호출되는 곳: [LI-EVT-P] 리스트의 줄 클릭 시, [LI-EVT-02-P] Event Message Popup의 [View Details] 클릭 시

## 디스크립션

### 0. 화면 정의

- 화면 정의
  - Event History에서 선택한 Event의 상세 정보를 확인하고, Status 변경과 조치 기록(Notes) 작성을 하는 화면이다.
  - 이중 Popup이 아닌, Event History Popup 안에서 목록 → 상세로 전환되는 구조이다.
- 진입점
  - Event History 목록에서 Event 행 클릭 시 진입
  - Event Message Popup의 [View Details] 클릭 시 진입
- User Type
  - Service, Admin, User
- Service Mode
  - Main Mode, Console Mode, TSS Mode
- 정책 참고
  - POL-EVT-001, POL-EVT-002

### 1. Event Info

- 정의: 선택한 Event의 주요 속성을 확인하는 영역
- 노출 항목
  - Event ID: Event를 식별하는 고유 ID. Event 생성 시 시스템이 순차로 증가하는 값을 자동 부여하며 중복되지 않음
  - Event Code: Event의 발생 유형을 구분하는 코드
  - Type: Instrument, Inventory, Sample, System 중 해당 항목 표기
  - Level: Event의 중요도. Error 또는 Warning 표기
  - Status: Open 또는 Closed, Toggle로 변경 (1-1)
  - Occurred Date/Time: Event 발생 일시 (YYYY-MM-DD hh:mm)
  - Description: Event Code에 따라 정의된 Event 내용
  - Effect: Event Code에 연계된 Scenario Code의 설명. 연계된 코드가 없으면 '-' 표기, 여러 개면 목록형으로 줄을 바꿔 모두 표기 (UI 참고)
  - Recommended Action: Event Code에 따라 정의된 조치 방법
- 정책 참고: POL-EVT-001

#### 1-1. Status Toggle

- Event의 Status를 변경하는 기능
- Common UX 참고: COMM-5-q
- Event 최초 생성 시 Open으로 등록됨
- 클릭 시, Open → Closed로 변경되며, 다시 클릭 시 Closed → Open으로 변경 가능
- 변경 시, 4 Updated Date/Time · Updated by가 갱신됨
- 기능 활성화 조건
  - Common UX 참고: COMM-3-a
  - Main Mode에서만 조작 가능
  - Console Mode, TSS Mode에서는 View 모드로 노출
- 정책 참고: POL-EVT-002

### 2. Instrument Info

- 정의: Event가 발생한 Instrument 정보 영역
- 노출 항목
  - Module: Event가 발생한 Module. 같은 Type의 Module이 2대 이상이면 번호와 함께 표기
  - Unit: Event가 발생한 Unit
  - Process: Event가 발생한 검사 단계
- Module 단위에서만 유효한 Event는 Unit을 '-'로 표기
- Instrument와 관계없는 Event는 Module · Unit · Process를 모두 '-'로 표기

### 3. Notes

- 선택한 Event에 대한 조치 기록(Resolution Notes)을 작성하는 영역
- Common UX 참고: COMM-5-t
- 입력 조건
  - 필수 입력 아님
  - 여러 줄 입력, 최대 300자
  - Placeholder: Enter action details
- 입력 영역 클릭 시 편집 상태로 전환되며, 오른쪽에 Save · Cancel 아이콘 노출
  - Save 클릭 시, 입력 내용이 해당 Event의 조치 기록으로 저장되고 4 Updated Date/Time · Updated by가 갱신됨
  - Cancel 클릭 시, 입력 내용이 반영되지 않고 편집 전 상태로 돌아감
- 기능 활성화 조건
  - Common UX 참고: COMM-3-a
  - Main Mode에서만 작성 가능
  - Console Mode, TSS Mode에서는 View 모드로 노출
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
| 1 · 2 · 4 | | TI-EVT-01-P 화면 예시와 같음 | |
| 1-1 | Status Toggle | Open | `status-values.csv` |
| 3 | Notes | Replaced the tip rack and restarted the run. (44/300) | 지어 씀 |

## 문구

| 번호 | 영어 문구 | 언어셋 ID | 최장 언어 · 표현 | 상태 (확정 / 번역 대기) |
| --- | --- | --- | --- | --- |
| 1 ~ 5 | TI-EVT-01-P 문구와 같음 | | | 확정 |
| 3 | Enter action details | | | 확정 |

## 상태별 화면

| 상태 | 언제 | 화면에서 바뀌는 것 | 프레임 |
| --- | --- | --- | --- |
| 정상 | 상세를 열었을 때 | 기획 프레임 | LI-EVT-01-P |
| 로딩 | 해당 없음 | | |
| 비활성 | Main Mode가 아닐 때 | 1-1 · 3이 보기만 | 이번 테스트에서 그리지 않음 |
| 오류 | 상세를 불러오지 못함 · Notes 저장 실패 | Alert_020 (저장 실패 알럿은 질문 대기 Q4) | 해당 없음: 알럿으로 처리 |
| 빈 상태 | Notes가 없을 때 | Placeholder 노출 | |
| 장비 이상 | 해당 없음 | | |

## 알럿

| 번호 | 알럿 ID | 언제 | 버튼 동작 |
| --- | --- | --- | --- |
| 1 | Alert_020 | 상세를 불러오지 못했을 때 | OK: 알럿 닫힘 |

## 케이스

| # | 케이스 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Notes 편집 중 | 입력 칸 클릭 | 이번 테스트에서 그리지 않음 |

## 질문 대기

| # | 질문 | 걸린 번호 | 올린 곳 (PD · CA) |
| --- | --- | --- | --- |
| Q1 | 이번 작업의 Ver | 머리말 | 요청자 |
| Q2 | Event Message Popup에서 들어온 뒤 [List] 클릭 시 돌아갈 리스트 조건 | 5 | 요청자 |
| Q3 | Notes 편집 중 [X] · [List] 클릭 시 확인 알럿 여부 | 3 · 5 · 6 | 요청자 |
| Q4 | Notes 저장 실패 알럿 ID | 3 | 요청자 |

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | Notes "최대 500자 → 300자" | 300자 (500자는 취소선으로 제거됨) | Figma 취소선, POL-EVT-002 | 제외 (2026-11-04, 취소선) |
| R02 | 디스크립션 | 6, 7 "닫기" 중복 | 하나로 | 디스크립션 | 반영 완료 (2026-11-06) |
| R03 | 정책 반영 | Status·Notes "공통 UX 참고 : COMM-3-a" | POL-EVT-002 참조 | POL-EVT-002 | 반영 완료 (2026-11-06) |
| R04 | 표기 | Module "FlexibleExtraction", Unit "Starlet" | Flexible Extraction (1), STARlet | `glossary/modules.csv` | 반영 완료 (2026-11-06) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.14 | 2026-10-30 | Effect 항목 추가 | 서보경 | Figma 버전 메모 |
| | 2026-11-06 | 신규 작업방 규칙으로 새로 그림 (테스트: UX-AI-TEST Page 10. 기존: 작업방 · Ver 2.1.14). R02 · R03 · R04 반영. Status Toggle을 1-1(L-IOS만)로, 일시를 분까지(COMM-4-a) | 서보경 | 케이스 1, POL-EVT-001 · 002 |
| | 2026-11-06 | 디스크립션을 기존 작업방 원본(T · L 각각)을 다시 읽고 고객사 · 개발사가 읽는 말투로 다시 씀. 짝 화면 참조("원문은 …와 같음") 없앰 | 서보경 | 8절 "읽는 사람과 말투" |
