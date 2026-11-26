---
cid: LI-TMG-01
pair_cid: TI-TMG-01
tl_relation: 동일
title: Test Order
path: Test Management > Test Order
type: Page
version: 2.1.11
date: 2026.10.08
author: 정다예
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-97274
---
# LI-TMG-01 Test Order

> 기존 화면(작업방 `Test Order_asis` 페이지, Ver 2.1.11)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS(TI-TMG-01)에만 LIS Transmission 필터 · `Send Results (LIS)` 열 · [Resend Results] 버튼이 있어 L의 1-6 · 1-7이 T에서는 1-7 · 1-8. 4 [Import] · [Export]가 L은 COMM-5-j(4/4) 팝업, T는 윈도우 탐색기
- 호출하는 화면: COMM-5-j(4/4) 팝업 (4 [Import] · [Export]), Alert_031 (4 [Import] 파일 형식 오류)
- 호출되는 곳: LNB > Test Management > Test Order
- 관련 정책: POL-SMP-001, POL-SMP-002, POL-SMP-003, POL-SMP-005, POL-SMP-006, POL-SMP-008, POL-COM-006

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) Network Status | Instrument | T-IOS | D.A PC | Running | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) LIOS | Test Order | Dashboard | Material Setup | Test Management | Test Order | Test Status | Sample Tracking | Instrument | Inventory | Setting | Run | Quick Start | Information | Manual | Keira Knightley
- Sample ID | Product | All | Sample Type | All | Date | Order Date | 2026-03-05 ~ 2026-03-11 | Status | All | Canceled Only | STAT Only | Reset | Search
- Items | 638 | Total Samples | 200 | STAT | 3 | Total Products | 638 | Refresh | Import | Export
- Sample ID | Product | Sample Type | Order Date | Status | Start Date/Time | End Date/Time | Canceled Date | Canceled | STAT
- AA0005001 | RP1 | Swab | 2025-03-05 | Ordered | - | - | - | -
- AA0005001 | RP2 | Swab | 2025-03-05 | Ready | - | - | - | -
- AA0005001 | RP3 | Swab | 2025-03-05 | Running | 2026-03-05 10:22:48 | - | - | -
- AA0005002 | PB | Swab | 2025-03-05 | Failed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48 | - | -
- AA0005003 | RP1 | Saliva | 2025-03-05 | Completed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48 | - | -
- AA0005003 | RP2 | Saliva | 2025-03-05 | Running | 2026-03-05 10:22:48 | - | - | -
- AA0005004 | STI-12 | Cellpreserv | 2025-03-05 | Running | 2026-03-05 10:22:48 | - | 2025-03-05
- AA0005005 | STI-12 | Surepath | 2025-03-05 | Completed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48 | 2025-03-05
- AA0005006 | GI-B1 | eNAT stool | 2025-03-05 | Not Tested | - | - | - | -
- AA0005006 | GI-B2 | eNAT stool | 2025-03-05 | Not Tested | - | - | - | -
- 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

### 사용 컴포넌트

Description (14), Description Number (13), Title (10), Table (10), Tag Status (10), Frame 50 (10), Frame 42 (10), Table/Filled Table  Cell (10), Frame 56 (10), Frame 58 (10), Frame/Instrument_Status (10), Frame 57 (9), Frame 1984080524 (8), Dropdown Outlined (5), Square (5), Checkbox (2), Interface/Check_Circle_Outlined (2), Form/Input Text Box (1), Frame 1984080525 (1), Page number (1), Frame (1), Component 3 (1)

### 디스크립션 (원문)

#### 0. Test Order 화면

- 정의
- T-IOS를 통해 접수 받은 검체 정보
- 검체별 검사 단위로 리스트 노출

#### 1. 검색 영역

- 검색 조건에 따라 리스트 내 데이터를 필터링하여 조회하는 영역
- 공통 UX 참고 : COMM-5-s

#### 1-1. Sample ID(Text Input)

- 기능 : 검체 ID를 입력하여 데이터 조회
- 동작
- 하위 리스트 내 Sample ID 컬럼 대상으로 입력
- 입력한 텍스트가 DB와 완전 일치하는 항목만 리스트에 노출
- 영문 입력 시 대소문자를 구분하지 않음

#### 1-2. Product(Multi-Select Dropdown)

- 기능
- 검사 항목을 다중 선택하여 데이터 조회
- 공통 UX 참고 : COMM-5-f(2/2)
- Default : All
- 드롭다운 리스트 항목
- All, RP1, RP2, RP3, PB, GI-V, GI-B1, GI-B2, GI-P Allplex HPV28, STI-12

#### 1-3. Sample Type(Multi-Select Dropdown)

- 기능
- 검체 타입을 다중 선택하여 데이터 조회
- 공통 UX 참고 : COMM-5-f(2/2)
- Default : All
- 드롭다운 리스트 항목
- All, Swab, Aspirate, BAL, Saliva, Sputum, Raw stool, Cary-blair, eNAT stool, Fecal swab, Thinprep Surepath, Cellpreserv, Urine, Semen

#### 1-4. Date(Cascading Dropdown)

- 기능
- 조회 기준(일자 유형)을 먼저 선택하고, 특정 일자 및 기간 설정하여 데이터 조회
- 공통 UX 참고 : COMM-5-d(1/5)
- 일자 유형[좌] : 조회하고 싶은 일자 유형 선택
- 특정 일자 및 기간[우] : 선택 유형에 대한 일자 및 기간 설정
- 단, 오늘 기준 미래일자는 선택 불가
- Default
- 일자 유형[좌] : Order Date
- 특정 일자 및 기간[우] : 시작일-7일 전 ~ 종료일-Today
- 드롭다운 리스트 항목
- Order Date, Canceled Date, Start Date, End Date

#### 1-5. Status(Dropdown)

- 기능
- 검사 상태를 단일 선택하여 데이터 조회
- 공통 UX 참고 : COMM-5-f(1/2)
- Default : All
- 드롭다운 리스트 항목
- All, Ordered, Ready, Not Tested, Running, Completed, Failed

#### 1-6. Canceled Only(Check box)

- 기능 : 취소 상태의 검체 데이터 조회
- Default : UnSelected(미선택)
- 리스트 노출
- Selected(선택) 시, 취소 상태의 검체만 노출
- UnSelected(미선택) 시, 전체 검체 노출

#### 1-7. STAT Only(Check box)

- 기능 : 응급 상태의 검체 데이터 조회
- Default : UnSelected(미선택)
- 리스트 노출
- Selected(선택) 시, 응급 상태의 검체만 노출
- UnSelected(미선택) 시, 전체 검체 노출

#### 2. Test order 리스트

- 정의 : 검사 접수된 검체 중 Run 실행을 위해 Trolley 또는 응급 서랍을 통해 도킹된 상태의 검체 리스트(검사 항목 단위)
- 공통 UX 참고 : COMM-5-m
- 정렬
- Default : Order Date 기준 최신순(내림차순)
- Default 조건 동일 시, Sample ID 기준 오름차순

#### 2-1. 리스트 표출 항목

- Sample ID
- T-IOS에서 수신되는 검체 ID 정보
- Product
- T-IOS에서 수신되는 검사 항목 정보
- 하나의 검사 항목 단위 정보 노출
- Sample Type
- T-IOS에서 수신되는 검체 타입 정보
- Order Date
- LIS 접수 일자 정보
- 표기 : YYYY-MM-DD
- Status
- 검체의 검사 진행 상태 정보
- 상태 값 : COMM-4-a
- Start Date/Time
- Prep 장비에서 바코드 찍은 시간 시점
- End Date/Time
- L-IOS가 D.A.PC(결과처리 시스템)로부터 검사 결과를 받은 시점
- Canceled Date
- LIS 취소 접수 일자 정보
- 검사 접수 취소 건에 한하여 노출
- 표기 : YYYY-MM-DD
- Canceled
- LIS에서 수신되는 검체 오더 취소 여/부 정보
- STAT
- T-IOS에서 수신되는 검체 응급 여/부 상태 정보

#### 3. 검사 오더 정보 요약

- 동작
- 사용자 필터링 결과에 따른 요약 지표 즉시 업데이트
- 표출 항목
- Total Samples : LIS에서 접수된 전체 Sample 건수
- STAT : 전체 Sample 중 STAT(응급)상태 건수
- Total Products : 전체 Sample별 Product(검사 항목) 단위 건수

#### 4. 리스트 제어 버튼

- [Refresh] 버튼
- 설정된 조회 조건 유지, 리스트 데이터를 최신 상태로 업데이트
- [Import] 버튼
- 외부 파일(.CVS)을 업로드하여 검사 오더 데이터를 일괄 등록
- 버튼 선택 시, 팝업 노출 : COMM-5-j(4/4)
- 단, 파일 형식이 올바르지 않는 경우 Alert_031 팝업 노출
- [Export] 버튼
- 리스트에 노출된 데이터를 파일(.CVS) 형태로 저장
- 버튼 선택 시, 팝업 노출 : COMM-5-j(4/4)

#### 5. 페이지네이션

- 공통 UX 참고 : COMM-5-i

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Sample 상태별 데이터 노출 예시 | 노란 띠 1-1 · 1-2 · 1-3 (아래) | [LI-TMG-01/Case](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-97644) |
| - (원본에 번호 없음) | Sample 상태값 | 상태값 표 (아래) | 같은 프레임 (y 1228) |
| - (원본에 번호 없음) | Import/Export 기능 선택 시 노출 팝업 | [Import] · [Export] 선택 시 | 같은 프레임 (y 1756) |

- Case 1 케이스 조각 (노란 띠 · 설명 글 · 예시 행, 원문 그대로)
  - 1-1. 검사 시작 후 Prep 장비에서 검사가 진행되지 못한 채 회수된 검체 — Run Start를 해서 상태 값은 변했지만 Prep에서 바코드 인식을 실패하여 Start Date/Time 및 End Date/Time 값은 미노출 — 예시: AA0005006 | GI-B1 | eNAT stool | 2025-03-05 | Not Tested | - | - | - | -, AA0005006 | GI-B2 | eNAT stool | 2025-03-05 | Not Tested | - | - | - | -
  - 1-2. 검사 시작 후 오더 추가된 검체 — 같은 일자에 같은 검체에 오더가 추가될 경우 Sample ID, Sample Type, Order Date가 동일하게 노출 — 예시: AA0005001 | RP1 | Swab | 2025-03-05 | Ordered | - | - | - | -, AA0005001 | RP2 | Swab | 2025-03-05 | Ready | - | - | - | -, AA0005001 | RP3 | Swab | 2025-03-05 | Running | 2026-03-05 10:22:48 | - | - | - (번호 표시 1 · 2 달림)
  - 1-3. 검사 시작 후 오더 취소된 검체 — Run Start 한 이력이 있어 Start Date/Time 노출 / 검사 중 취소된 오더는 취소 여부와 상관 없이 검사 진행 / 취소 여부 및 취소 일자 노출 — 예시: AA0005005 | STI-12 | Surepath | 2025-03-05 | Completed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48 | 2025-03-05
- Case 1 케이스 패널 (원문)
  - 1. 최초 오더 검사 시작 이후 추가된 오더 / Run 시작 전 Start Date/Time, End Date/Time 미노출 / Run 시작 전으로 Status는 Ordered로 노출
  - 2. Run이 실행되고 있는 최초 오더 / Prep에서 바코드가 찍힌 검체 / - Status는 Running로 노출, Start Date/Time 노출 / Trolley에 대기중인 검체 / - Status는 Running로 노출, Start Date/Time 미노출
- Sample 상태값 표 (원문 글자를 위에서 아래 · 왼쪽에서 오른쪽으로 읽은 순서 그대로. 칸 나눔은 원본 표를 볼 것)
  - Status | case | Run Flow | 검사 오더만 접수된 상태 | - | TSS를 통한 Socket 구성 > Run Start | Ordered | Ready | 검사 시작 후 검체 로딩 전 상태 (Prep 장비에서 바코드 인식 전 상태) | - | - | Not Tested | 검사 시작 후 특정 상황으로 Prep 장비에서 검사가 진행되지 못한 채 회수된 검체 | 바코드 오류, 바코드 훼손 | TSS를 통한 Socket 재구성 > Run Start | 검사(Run) 진행 중인 검체 | - | - | Running | Completed | 검사 완료된 검체 | - | - | 장비에 Error가 발생하거나 사용자가 Stop버튼을 통해 검사를 중단해서 진행중인 Plate가 폐기된 경우 (Plate하위 Sample 단위까지 Fail로 처리) | 검사 실패한 검체 | 신규 오더가 접수될 경우 TSS를 통한 Socket 재구성 > Run Start | Failed
- Import/Export 팝업 (원문)
  - Select Import Source | Choose where you want to load your file from | USB Drive — Imports from the connected USB drive | Configured Drive — Imports from the path set in System Settings
  - Select Export Destination | Choose where you want to save your file | USB Drive — Saves to the connected USB drive | Configured Drive — Saves to the path set in System Settings
