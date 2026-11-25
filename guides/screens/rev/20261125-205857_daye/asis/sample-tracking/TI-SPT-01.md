---
cid: TI-SPT-01
pair_cid: LI-SPT-01
tl_relation: 동일
title: Samples
path: Sample Tracking > Samples
type: Page
version: 2.0
date: 2026.06.15
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-167258
---
# TI-SPT-01 Samples

> 기존 화면(작업방 `Samples_asis` 페이지, Ver 2.0)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: 디스크립션은 3 [Export]만 다름(T는 윈도우 탐색기, L은 COMM-5-j(4/4) 팝업). 화면 글자는 GNB · LNB만 다름
- 호출하는 화면: [TI-SPT-01-01] Samples Details (2 행 클릭)
- 호출되는 곳: LNB > Sample Tracking > Samples

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Dashboard | Test Management | Sample Tracking | Samples | 96-DWP | PCR Plate | Instrument | Inventory | Statistical Analysis | Setting | Information | Keira Knightley
- Samples
- Sample ID | Product | All | Sample Type | All | Date | Order Date | 2026-03-05 ~ 2026-03-11 | Status | All | STAT Only | Reset | Search
- Items | 638 | Export
- Sample ID | Product | Sample Type | Order Date | Status | Progress | Start Date/Time | End Date/Time | STAT
- AA0005001 | RP1 | Sputum | 2026-03-05 | Not Tested | - | -
- AA0005001 | RP2 | Sputum | 2026-03-05 | Not Tested | - | -
- AA0005001 | RP3 | Sputum | 2026-03-05 | Not Tested | - | -
- AA0005002 | STI-12 | Thinprep | 2026-03-05 | Ready | - | -
- AA0005003 | STI-12 | Surepath | 2026-03-05 | Failed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48
- AA0005004 | STI-12 | Swab | 2026-03-05 | Completed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48
- AA0005005 | PB | Saliva | 2026-03-05 | Running | 2026-03-05 10:22:48 | -
- AA0005006 | GI-B1 | eNAT stool | 2026-03-05 | Running | 2026-03-05 10:22:48 | -
- AA0005006 | GI-B2 | eNAT stool | 2026-03-05 | Running | 2026-03-05 10:22:48 | -
- AA0005007 | Allplex HPV28 | Surepath | 2026-03-05 | Running | 2026-03-05 10:22:48 | -
- 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

### 사용 컴포넌트

Description Number (12), Table (11), Tag Status (10), Frame 50 (10), Frame 42 (10), Table/Filled Table  Cell (10), Frame 1984080522 (10), Frame 1984080523 (10), Arrow/Chevron_Right (10), Title (8), Dropdown Outlined (5), Frame/Instrument_Status (3), Square (3), Form/Input Text Box (1), Checkbox (1), Interface/Info_Circle_Outlined (1), Page number (1), Component 4 (1), Frame (1)

### 디스크립션 (원문)

#### 0. Samples 화면

- 정의
- Run Start로 통해 검사를 시작한 검체 정보
- 검체별 검사 단위로 리스트 노출
- 동작
- 리스트 영역 선택 시, 기존 리스트 영역이 좌측으로 축소되며 우측에서 상세 페이지가 밀고 나오며 노출

#### 1. 검색 영역

- 검색 조건에 따라 리스트 내 데이터를 필터링하여 조회하는 영역
- 공통 UX 참고 :  COMM-5-s

#### 1-1. Sample ID(Text Input)

- 기능 : 검체 ID를 입력하여 데이터 조회
- 동작
- 하위 리스트 내 Sample ID 컬럼 대상으로 입력
- 입력한 텍스트가 DB와 완전 일치하는 항목만 리스트에 노출
- 영문 입력 시 대소문자를 구분하지 않음

#### 1-2. Product(Multi-Select Dropdown)

- 기능
- 검사 항목을 다중 선택하여 데이터 조회
- 공통 UX 참고 :  COMM-5-f(2/2)
- Default : All
- 드롭다운 리스트 항목
- All, RP1, RP2, RP3, PB, GI-V, GI-B1, GI-B2, GI-P Allplex HPV28, STI-12

#### 1-3. Sample Type(Multi-Select Dropdown)

- 기능
- 검체 타입을 다중 선택하여 데이터 조회
- 공통 UX 참고 :  COMM-5-f(2/2)
- Default : All
- 드롭다운 리스트 항목
- All, Swab, Aspirate, BAL, Saliva, Sputum, Raw stool, Cary-blair, eNAT stool, Fecal swab, Thinprep Surepath, Cellpreserv, Urine, Semen

#### 1-4. Date(Cascading Dropdown)

- 기능
- 조회 기준(일자 유형)을 먼저 선택하고, 특정 일자 및 기간 설정하여 데이터 조회
- 공통 UX 참고 :  COMM-5-d(1/5)
- 일자 유형[좌] : 조회하고 싶은 일자 유형 선택
- 특정 일자 및 기간[우] : 선택 유형에 대한 일자 및 기간 설정
- 단, 오늘 기준 미래일자는 선택 불가
- Default
- 일자 유형[좌] : Order Date
- 특정 일자 및 기간[우] : 시작일-7일 전 ~ 종료일-Today
- 드롭다운 리스트 항목
- Order Date, Start Date, End Date

#### 1-5. Status(Dropdown)

- 기능
- 검사 상태를 단일 선택하여 데이터 조회
- 공통 UX 참고 :  COMM-5-f(1/2)
- Default : All
- 드롭다운 리스트 항목
- All, Ready, Not Tested, Running, Completed, Failed

#### 1-6. STAT Only(Check box)

- 기능 : 응급 상태의 검체 데이터 조회
- Default : UnSelected(미선택)
- 리스트 노출
- Selected(선택) 시, 응급 상태의 검체만 노출
- UnSelected(미선택) 시, 전체 검체 노출

#### 2. Samples 리스트

- 정의 : 검사 접수된 검체 중 Run을 실행한 검체 리스트
- 공통 UX 참고 :  COMM-5-m
- 정렬
- Default : Start Date/Time 기준 최신순(내림차순)
- Default 조건 동일 시, Sample ID 기준 오름차순
- 동작
- 특정 샘플 행 클릭 시 샘플 상세 노출 : TI-SPT-01-01

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
- Progress
- 전체 검사 프로세스 대비 단계별 진행 현황 정보
- 상태 값 : COMM-4-a
- Start Date/Time
- Prep 장비에서 바코드 찍은 시간 시점
- End Date/Time
- L-IOS가 D.A.PC(결과처리 시스템)로부터 검사 결과를 받은 시점
- STAT
- T-IOS에서 수신되는 검체 응급 여/부 상태 정보

#### 2-2. Progress 상태 정보(Tooltip)

- 공통 UX 참고 :  COMM-5-o
- 표출 예시 : TI-SPT-01/Case → Case 2

#### 3. [Export] 버튼

- 윈도우 탐색기가 호출되며, 원하는 경로를 지정할 수 있음
- 대상 범위 : 목록에 노출된 전체 리스트
- 저장 항목 : Detail이 있을 경우 Detail에서 제공되는 모든 내용
- 형식 : CSV

#### 4. 페이지네이션

- 공통 UX 참고 :  COMM-5-i

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Sample 상태별 데이터 노출 예시 | 노란 띠 1-1 · 1-2 · 1-3 (아래) | [TI-SPT-01/Case](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-167610) |
| 2 | Progress 상태 정보 Tooltip | Progress 툴팁 표출 (2-2) | 같은 프레임 |

- Case 1 (원문)
  - 1-1. 검사 시작 후 Prep 장비에서 검사가 진행되지 못한 채 회수된 검체 — Run Start를 해서 상태 값은 변했지만 Prep에서 바코드 인식을 실패하여 Start Date/Time 및 End Date/Time 값은 미노출 — 예시: AA0005001 | RP1 · RP2 · RP3 | Sputum | 2026-03-05 | Not Tested | - | -
  - 1-2. 검사 진행 중 특정 단계에서 검사 실패한 검체 — Progress는 검사 실패한 단계 노출 / 검사 상태는 Failed로 노출 — 예시: AA0005003 | STI-12 | Surepath | 2026-03-05 | Failed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48
  - 1-3. 검사 대기 중인 검체 — Trolley에서 검사 대기 중 상태인 검체로 아직 Prep 장비에서 바코드 인식 전이어서 Start Date/Time 미노출 — 예시: AA0005002 | STI-12 | Thinprep | 2026-03-05 | Ready | - | -
- Case 2 (원문)
  - 설명: Sample 또는 Plate 단위의 항목이 각 단계에 진입하여 검사 전 해당 단계 장비에서 바코드 찍히는 순간 색상 채워짐
  - 툴팁: Progress Status / | - | Sample Preparation | Nucleic Acid Extraction | PCR Setup | Plate Sealing | PCR
- 케이스 패널: Case마다 화면 정보만 있고 디스크립션 없음(번호 칸 `0`)
