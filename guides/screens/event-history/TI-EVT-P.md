---
cid: TI-EVT-P
pair_cid: LI-EVT-P
tl_relation: 기능 추가
title: Event History
path: Event History
type: Popup
version:       # 확인 필요 (질문 대기 Q1)
date:
author: 서보경
service_mode: []
user_type: [Service, Admin, User]
policies: [POL-EVT-001, POL-EVT-002, POL-COM-006, POL-COM-007]
rules_version:
provisional: []
flags: []
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/?node-id=2078-4662   # 테스트 (UX-AI-TEST Page 10)
---
# TI-EVT-P Event History

- T/L 차이: T-IOS는 Event Status를 바꾸지 않고 보기만 함, [Mark all as Closed] 없음(POL-EVT-002 규칙 1 · 4). 목록 노출 개수 드롭다운은 T-IOS만(COMM-5-g)
- 호출하는 화면: [TI-EVT-01-P] Event History Detail (같은 팝업 안에서 목록 → 상세로 전환)
- 호출되는 곳: GNB의 Event 아이콘, 각 화면의 Event 아이콘, [TI-EVT-02-P] Event Message Popup은 상세(TI-EVT-01-P)로 바로 감

## 디스크립션

### 0. 화면 정의

- 화면 정의
  - CURECA Instrument 또는 시스템에서 발생한 Error · Warning Event를 조회하는 화면이다.
  - Event History는 Popup으로 제공된다.
- 진입점
  - GNB의 Event 아이콘 클릭 시 진입
  - 각 화면에 노출된 Event 아이콘 클릭 시에도 동일하게 진입
- User Type
  - Service, Admin, User
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
  - Status: Open 또는 Closed 표기
- 정렬: Occurred Date/Time 최신순
- 최초 진입 시, 1-5 기본 기간(오늘 기준 7일 전까지)의 Event만 노출
- Module 단위에서만 유효한 Event는 Unit을 '-'로, Instrument와 관계없는 Event는 Module · Unit을 '-'로 표기
- 텍스트는 1줄까지만 표기, 영역을 넘으면 '…'으로 표기하며 마우스 오버 시 전체 내용을 Tooltip으로 노출
- 새 Event가 발생하면 새로고침 없이 목록에 바로 반영됨
- 목록 행 클릭 시, 같은 Popup 안에서 [TI-EVT-01-P] Event History Detail로 전환
- 정책 참고: POL-EVT-001, POL-COM-007

#### 2-1. 목록 요약

- Total Event: 목록에 불러온 전체 Event 개수
- Open: 그중 Status가 Open인 Event 개수
- 검색 조건이 바뀌면 바로 갱신됨

#### 2-2. 노출 개수

- Common UX 참고: COMM-5-g
- 기본값: 10 items
- 리스트 항목: 10, 30, 50, 100 items
- 선택 시, 선택한 개수만큼 목록이 바로 갱신됨

### 3. [Export]

- Common UX 참고: COMM-5-c
- 클릭 시, Windows 탐색기가 호출되어 저장 경로와 파일 이름을 지정할 수 있음
- 대상 범위: 목록에 불러온 전체 Event (모든 페이지)
- 저장 항목: Detail에서 제공되는 모든 내용
- 형식: .csv
- 정책 참고: POL-COM-006

### 4. [X]

- 클릭 시, Event History Popup이 닫힘

## 화면 예시

| 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1-1 ~ 1-4 | 드롭다운 | All | 기본값 |
| 1-5 | 기간 | 2026-10-31 ~ 2026-11-06 | 기본값, COMM-4-a |
| 2-1 | Event 건수 | Total Event 4 · Open 3 | 예시 4줄 기준 |
| 2 | 줄 1 | ER-5231 · Pick Up Fail · Sample Storage (1) · Inbound Trolley · Error · 2026-11-06 15:57 · Open | Module · Unit `module-units.csv`, Level · Status `status-values.csv`. Code · Description은 기준데이터에 없어 지어 씀 |
| 2 | 줄 2 | WR-5423 · Consumables are low. Please check and refill. · PCR Setup (1) · 300 μL Tip Storage (1) · Warning · 2026-11-06 14:20 · Open | 위와 같음 |
| 2 | 줄 3 | ER-6102 · Plate transfer failed. · Universal PCR (1) · CFX96 (1) · Error · 2026-11-05 09:12 · Open | 위와 같음 |
| 2 | 줄 4 | WR-7001 · D.A PC connection is unstable. · - · - · Warning · 2026-11-04 18:40 · Closed | System Event, POL-EVT-001 규칙 4 |

## 문구

| 번호 | 영어 문구 | 언어셋 ID | 최장 언어 · 표현 | 상태 (확정 / 번역 대기) |
| --- | --- | --- | --- | --- |
| 타이틀 | Event History | | | 확정 |
| 1 | Type, Module, Level, Status, Reset, Search | | | 확정 |
| 2-1 | Total Event, Open | | | 확정 |
| 2 | Code, Description, Module, Unit, Level, Occurred Date/Time, Status | | | 확정 |
| 3 | Export | | | 확정 |
| 2 | No events found. | | | 번역 대기 (Q3) |

## 상태별 화면

| 상태 | 언제 | 화면에서 바뀌는 것 | 프레임 |
| --- | --- | --- | --- |
| 정상 | 검색 결과가 있을 때 | 기획 프레임 | TI-EVT-P |
| 로딩 | 리스트를 불러오는 중 | COMM-5-k Loading | 해당 없음: 가이드 공통 동작 |
| 비활성 | 해당 없음: 비활성 상태가 되는 영역 없음 ([Export]는 Q4) | | |
| 오류 | 데이터를 불러오지 못함 | Alert_020 | 해당 없음: 알럿으로 처리 |
| 빈 상태 | 검색 결과가 없을 때 | 2 리스트에 No Data 문구, 2-1 건수 0 | 질문 대기 Q3 |
| 장비 이상 | 해당 없음: Event 조회는 장비 상태와 관계없음 | | |

## 알럿

| 번호 | 알럿 ID | 언제 | 버튼 동작 |
| --- | --- | --- | --- |
| 2 | Alert_020 | 리스트를 불러오지 못했을 때 | OK: 알럿 닫힘 |

## 케이스

| # | 케이스 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | 말줄임 툴팁 | Description이 한 줄을 넘을 때 마우스 오버 | 질문 대기 (이번 테스트에서 그리지 않음) |

## 질문 대기

| # | 질문 | 걸린 번호 | 올린 곳 (PD · CA) |
| --- | --- | --- | --- |
| Q1 | 이번 작업의 Ver | 머리말 | 요청자 |
| Q2 | Event Status Open · Closed 표시 색 (Common UX 4-a에 색 정의 없음) | 2 | `common-ux/feedback.md` |
| Q3 | 빈 상태 문구 | 2 | 요청자 |
| Q4 | 데이터가 없을 때 [Export] 비활성화 여부 | 3 | 요청자 |

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 알럿 | 5-1 "Confirm_L_003", "Alert_L_003". Alert_003은 알럿 관리 페이지에서 삭제됨 | 취소선으로 이미 제거됨. T-IOS는 Status 변경과 일괄 Closed가 없음 | Figma 취소선, POL-EVT-002 | 제외 (2026-11-04, 취소선) |
| R02 | 정책 반영 | 5 체크박스 + [Mark as Closed]. 화면 글자에는 버튼이 없음. L-IOS는 [Mark all as Closed] | 취소선으로 이미 제거됨. T-IOS는 Status 변경과 일괄 Closed가 없음 | Figma 취소선, POL-EVT-002 | 제외 (2026-11-04, 취소선) |
| R03 | 표기 | Expiration date Status | 대소문자 통일 (PD-0001 결정 후) | `archive/glossary/review-v0.md` | 대기 (이 화면에 없는 글자, 2026-11-06 이번엔 안 함) |
| R04 | 표기 | Under 30 Day | Under 30 days | `glossary/status-values.csv` 시약 만료 상태 | 대기 (이 화면에 없는 글자, 2026-11-06 이번엔 안 함) |
| R05 | 디스크립션 | Statue, Cureca, 1 "Event ID, Code" 검색 (화면에 입력 칸 없음) | Status, CURECA, 검색 항목을 화면과 맞춤 | 오타, 화면 글자 | 반영 완료 (2026-11-06) |
| R06 | 표기 | 목록 요약 "OPEN", Unit "CFX96-1" | Open, CFX96 (1) | `glossary/status-values.csv`, 이름 (번호) | 반영 완료 (2026-11-06) |
| R07 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 반영 완료 (2026-11-06) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | Event Type 항목 변경: Instrument, Consumable, Reagent, Waste Bin/bottle, System → Instrument, Inventory, Sample, System | 서보경 | Figma 버전 메모 |
| | 2026-11-06 | 신규 작업방 규칙으로 새로 그림 (테스트: UX-AI-TEST Page 10. 기존: 작업방 node 1875-43955 · Ver 2.1.01). R05 · R06 · R07 반영. 검색 Event ID · Code 칸 뺌, T-IOS 노출 개수 드롭다운 더함(COMM-5-g), 실시간 갱신(POL-COM-007) | 서보경 | 케이스 1, POL-EVT-001 · 002, POL-COM-006 · 007 |
| | 2026-11-06 | 디스크립션을 기존 작업방 원본(T · L 각각)을 다시 읽고 고객사 · 개발사가 읽는 말투로 다시 씀. 짝 화면 참조("원문은 …와 같음") 없앰 | 서보경 | 8절 "읽는 사람과 말투" |
