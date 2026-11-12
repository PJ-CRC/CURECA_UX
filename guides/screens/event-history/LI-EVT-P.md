---
cid: LI-EVT-P
pair_cid: TI-EVT-P
tl_relation: 기능 추가
title: Event History
path: Event History
type: Popup
version:       # 확인 필요 (질문 대기 Q1)
date:
author: 서보경
service_mode: [Main Mode, Console Mode, TSS Mode]
user_type: [Service, Admin, User]
policies: [POL-EVT-001, POL-EVT-002, POL-COM-006, POL-COM-007, POL-SYS-004]
rules_version:
provisional: []
flags: []
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/?node-id=2080-4941   # 테스트 (UX-AI-TEST Page 10)
---
# LI-EVT-P Event History

- T/L 차이: L-IOS는 Status를 바꾸는 Toggle(2-3)과 [Mark all as Closed](5)가 있음. 둘 다 Main Mode에서만 쓸 수 있고 그 밖의 Service Mode는 보기만 함(POL-EVT-002 규칙 2). 노출 개수 드롭다운(TI-EVT-P 2-2)은 없음(L-IOS는 10개 고정, COMM-5-g)
- 호출하는 화면: [LI-EVT-01-P] Event History Detail (같은 팝업 안에서 목록 → 상세로 전환)
- 호출되는 곳: GNB의 Event 아이콘, 각 화면의 Event 아이콘

## 디스크립션

### 0. 화면 정의

- 화면 정의
  - CURECA Instrument 또는 시스템에서 발생한 Error · Warning Event를 조회하고 Status를 관리하는 화면이다.
  - Event History는 Popup으로 제공된다.
- 진입점
  - GNB의 Event 아이콘 클릭 시 진입
  - 각 화면에 노출된 Event 아이콘 클릭 시에도 동일하게 진입
- User Type
  - Service, Admin, User
- Service Mode
  - Main Mode, Console Mode, TSS Mode
- 정책 참고
  - POL-EVT-001, POL-EVT-002

### 1. 검색 영역

- 정의: 조회 조건을 선택한 후 [Search] 클릭 시, 조건에 맞는 Event가 목록에 노출됨
- 모든 조회 조건은 AND 조건으로 적용됨
- Common UX 참고: COMM-5-p

#### 1-1. Type

- Common UX 참고: COMM-5-h
- 기본값: All
- 리스트 항목: All, Instrument, Inventory, Sample, System (표기 순서 동일)

#### 1-2. Module

- Module Type으로 검색하는 필터
- Common UX 참고: COMM-5-h
- 기본값: All
- 리스트 항목: All, Sample Storage, Prep Consumable Storage, Sample Preparation, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing, Universal PCR (표기 순서 동일)

#### 1-3. Level

- Common UX 참고: COMM-5-h
- 기본값: All
- 리스트 항목: All, Error, Warning

#### 1-4. Status

- Common UX 참고: COMM-5-h
- 기본값: All
- 리스트 항목: All, Open, Closed

#### 1-5. 기간

- Common UX 참고: COMM-5-h, COMM-5-d
- 기본값: 시작일 7일 전 ~ 종료일 오늘
- 오늘 이후 날짜는 선택 불가
- 최대 1년까지 선택 가능

#### 1-6. [Reset]

- Common UX 참고: COMM-5-c
- 클릭 시, 1-1 ~ 1-5 조건이 모두 기본값으로 초기화됨

#### 1-7. [Search]

- Common UX 참고: COMM-5-c
- 클릭 시, 1-1 ~ 1-5 조건에 맞는 Event가 목록에 노출됨

### 2. 목록

- 정의: 검색 조건에 맞는 Event 목록
- Common UX 참고: COMM-5-g, COMM-5-l
- 노출 항목
  - Code: Event Code
  - Description: Event Code에 따라 정의된 Event 내용
  - Module: Event가 발생한 Module. 같은 Type의 Module이 2대 이상이면 번호와 함께 표기 (예: Sample Storage (1))
  - Unit: Event가 발생한 Unit (예: CFX96 (1))
  - Level: Error 또는 Warning
  - Occurred Date/Time: Event 발생 일시 (YYYY-MM-DD hh:mm)
  - Status: Open 또는 Closed, Toggle로 변경 (2-3)
- 한 페이지에 10개 노출
- 정렬: Occurred Date/Time 최신순
- 최초 진입 시, 1-5 기본 기간(오늘 기준 7일 전까지)의 Event만 노출
- Module 단위에서만 유효한 Event는 Unit을 '-'로, Instrument와 관계없는 Event는 Module · Unit을 '-'로 표기
- 텍스트는 1줄까지만 표기, 영역을 넘으면 '…'으로 표기하며 마우스 오버 시 전체 내용을 Tooltip으로 노출
- 새 Event가 발생하면 새로고침 없이 목록에 바로 반영됨
- 목록 행 클릭 시, 같은 Popup 안에서 [LI-EVT-01-P] Event History Detail로 전환
- 정책 참고: POL-EVT-001, POL-COM-007

#### 2-1. 목록 요약

- Total Event: 목록에 불러온 전체 Event 개수
- Open: 그중 Status가 Open인 Event 개수
- 검색 조건이 바뀌면 바로 갱신됨

#### 2-3. Status Toggle

- Event의 Status를 변경하는 기능
- Common UX 참고: COMM-5-q
- Event 최초 생성 시 Open으로 등록됨
- 클릭 시, Open → Closed로 변경됨
- 다시 클릭 시, Closed → Open으로 변경 가능
- 변경 시, 변경 일시와 변경한 사용자 ID가 Detail의 Updated Date/Time · Updated by에 기록됨
- 기능 활성화 조건
  - Common UX 참고: COMM-3-a
  - Main Mode에서만 조작 가능
  - Console Mode, TSS Mode에서는 View 모드로 노출
- 정책 참고: POL-EVT-002

### 3. [Export]

- Common UX 참고: COMM-5-c, COMM-5-m
- 클릭 시, 경로 저장 또는 USB 저장을 선택하는 Popup 노출
- 기본 저장 경로: System Setting의 Export / Import Location
- 대상 범위: 목록에 불러온 전체 Event (모든 페이지)
- 저장 항목: Detail에서 제공되는 모든 내용
- 형식: .csv
- 정책 참고: POL-COM-006, POL-SYS-004

### 4. [X]

- 클릭 시, Event History Popup이 닫힘

### 5. [Mark all as Closed]

- 현재 검색 조건(기간, Type, Module, Level, Status)으로 불러온 목록의 모든 페이지에서 Status가 Open인 Event를 한 번에 Closed로 변경하는 기능
- Common UX 참고: COMM-5-c
- 클릭 시, Confirm_003 노출
  - OK: Open인 Event가 모두 Closed로 변경되고 목록이 다시 노출됨
  - Cancel: Confirm 닫힘, 기존 화면 유지
- 정책 참고: POL-EVT-002

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1 · 2 · 2-1 | 검색 · 리스트 · 건수 | TI-EVT-P 화면 예시와 같음 | |
| 2-3 | Status Toggle | 줄 1 ~ 3 Open, 줄 4 Closed | `status-values.csv` |

## 문구

| 번호 | 영어 문구 | 언어셋 ID | 최장 언어 · 표현 | 상태 (확정 / 번역 대기) |
| --- | --- | --- | --- | --- |
| 1 ~ 4 | TI-EVT-P 문구와 같음 | | | 확정 |
| 5 | Mark all as Closed | | | 확정 |

## 상태별 화면

| 상태 | 언제 | 화면에서 바뀌는 것 | 프레임 |
| --- | --- | --- | --- |
| 정상 | 검색 결과가 있을 때 | 기획 프레임 | LI-EVT-P |
| 로딩 | 리스트를 불러오는 중 | COMM-5-k Loading | 해당 없음: 가이드 공통 동작 |
| 비활성 | Main Mode가 아닐 때 | 2-3 Toggle 대신 글자, 5 미노출 | 질문 대기 Q5 |
| 오류 | 데이터를 불러오지 못함 | Alert_020 | 해당 없음: 알럿으로 처리 |
| 빈 상태 | 검색 결과가 없을 때 | TI-EVT-P와 같음 | 질문 대기 Q3 |
| 장비 이상 | 해당 없음: Event 조회는 장비 상태와 관계없음 | | |

## 알럿

| 번호 | 알럿 ID | 언제 | 버튼 동작 |
| --- | --- | --- | --- |
| 2 | Alert_020 | 리스트를 불러오지 못했을 때 | OK: 알럿 닫힘 |
| 5 | Confirm_003 | [Mark all as Closed] 클릭 시 | OK: Open인 Event를 모두 Closed로 바꿈 / Cancel: 알럿 닫힘 |

## 케이스

| # | 케이스 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | 말줄임 툴팁 | TI-EVT-P와 같음 | 질문 대기 |

## 질문 대기

| # | 질문 | 걸린 번호 | 올린 곳 (PD · CA) |
| --- | --- | --- | --- |
| Q1 | 이번 작업의 Ver | 머리말 | 요청자 |
| Q2 | Event Status Open · Closed 표시 색 | 2-3 | `common-ux/feedback.md` |
| Q3 | 빈 상태 문구 | 2 | 요청자 |
| Q4 | 데이터가 없을 때 [Export] 비활성화 여부 | 3 | 요청자 |
| Q5 | Main Mode가 아닐 때 [Mark all as Closed]를 숨길지 비활성화할지 | 5 | 요청자 |

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 1·3에 Event Type 옛 값과 새 값이 함께 있음 | 옛 값은 취소선으로 이미 제거됨 | Figma 취소선 | 제외 (2026-11-04, 취소선) |
| R02 | 정책 반영 | 5 [Mark all as Closed] 범위 "상태값이 Open인 모든 Events" | 디스크립션에 넣음: 지금 검색 조건으로 불러온 목록의 모든 페이지에서 Open인 Event 전체 | POL-EVT-002 규칙 4 | 반영 완료 (2026-11-06) |
| R03 | 정책 반영 | 4 "공통 UX 참고 : COMM-3-a" | Status 변경 가능 조건은 POL-EVT-002 참조 | POL-EVT-002 | 반영 완료 (2026-11-06) |
| R04 | 표기 | OPEN, Statue, Cureca | Open, Status, CURECA | `glossary/status-values.csv`, 오타 | 반영 완료 (2026-11-06) |
| R05 | 표기 | Expiration date Status, Under 30 Day | 대소문자 통일, Under 30 days | `archive/glossary/review-v0.md` | 대기 (이 화면에 없는 글자, 2026-11-06 이번엔 안 함) |
| R06 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 반영 완료 (2026-11-06) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | Event Type 항목 변경, 목록의 체크박스 제거, Mark as Closed 버튼명·정책 변경(5), Export 방식 변경(6) | 서보경 | Figma 버전 메모 |
| | 2026-11-06 | 신규 작업방 규칙으로 새로 그림 (테스트: UX-AI-TEST Page 10. 기존: 작업방 · Ver 2.1.01). R02 · R03 · R04 · R06 반영. Status Toggle을 2-3(L-IOS만)으로, 닫기를 4, [Mark all as Closed]를 5(L-IOS만)로 다시 매김 | 서보경 | 케이스 1, POL-EVT-002, POL-COM-006 |
| | 2026-11-06 | 디스크립션을 기존 작업방 원본(T · L 각각)을 다시 읽고 고객사 · 개발사가 읽는 말투로 다시 씀. 짝 화면 참조("원문은 …와 같음") 없앰 | 서보경 | 8절 "읽는 사람과 말투" |
