---
cid: TI-SPT-02
pair_cid: LI-SPT-02
tl_relation: 동일
title: 96-DWP
path: Sample Tracking > 96-DWP
type: Page
version: 2.1.11
date: 2026.10.08
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-190983
---
# TI-SPT-02 96-DWP

> 기존 화면(작업방 `96-DWP_asis` 페이지, Ver 2.1.11)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: 디스크립션은 3 [Export]만 다름(T는 윈도우 탐색기, L은 COMM-5-j(4/4) 팝업). 화면 글자는 GNB · LNB만 다름
- 호출하는 화면: [TI-SPT-02-01] 96-DWP Details (2 행 클릭)
- 호출되는 곳: LNB > Sample Tracking > 96-DWP

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Dashboard | Test Management | Sample Tracking | Samples | 96-DWP | PCR Plate | Instrument | Inventory | Statistical Analysis | Setting | Information | Keira Knightley
- 96-DWP
- Plate ID | Status | All | Date | Start Date | 2026-03-05 ~ 2026-03-11 | Reset | Search
- Items | 486 | Export
- Plate ID | Sample (Total | STAT) | Progress | Status | Start Date/Time | End Date/Time
- PL0005001 | 87 | 21 | Running | 2026-03-05 10:22:48 | -
- PL0005002 | 96 | 11 | Completed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48
- PL0005003 | 73 | 12 | Completed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48
- PL0005004 | 68 | 15 | Completed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48
- PL0005005 | 85 | 42 | Running | 2026-03-05 10:22:48 | -
- PL0005006 | 96 | 35 | Failed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48
- PL0005007 | 96 | 24 | Failed | 2026-03-05 10:22:48 | 2026-03-05 11:22:48
- PL0005008 | 96 | 26 | Running | 2026-03-05 10:22:48 | -
- PL0005009 | 96 | 33 | Running | 2026-03-05 10:22:48 | -
- PL0005020 | 87 | 12 | Running | 2026-03-05 10:22:48 | -
- 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

### 사용 컴포넌트

Table (12), Frame 43 (10), Frame 1984080529 (10), Table/Filled Table  Cell (10), Frame 1984080522 (10), Frame 1984080523 (10), Arrow/Chevron_Right (10), Description Number (9), Title (6), Dropdown Outlined (3), Square (3), Form/Input Text Box (1), Interface/Info_Circle_Outlined (1), Page number (1), Frame (1), Component 4 (1)

### 디스크립션 (원문)

#### 0. 96-DWP 화면

- 정의
- 96-DWP 단위의 검사 진행 정보
- Plate 단위로 리스트 노출
- 동작
- 리스트 영역 선택 시, 기존 리스트 영역이 좌측으로 축소되며 우측에서 상세 페이지가 밀고 나오며 노출

#### 1. 검색 영역

- 검색 조건에 따라 리스트 내 데이터를 필터링하여 조회하는 영역
- 공통 UX 참고 :  COMM-5-s

#### 1-1. Plate ID(Text Input)

- 기능 : Plate ID를 입력하여 데이터 조회
- 동작
- 하위 리스트 내 Plate ID 컬럼 대상으로 입력
- 입력한 텍스트가 DB와 완전 일치하는 항목만 리스트에 노출
- 영문 입력 시 대소문자를 구분하지 않음

#### 1-2. Status(Dropdown)

- 기능
- 검사 상태를 단일 선택하여 데이터 조회
- 공통 UX 참고 :  COMM-5-f(1/2)
- Default : All
- 드롭다운 리스트 항목
- All, Not Tested, Running, Completed, Failed

#### 1-3. Date(Cascading Dropdown)

- 기능
- 조회 기준(일자 유형)을 먼저 선택하고, 특정 일자 및 기간 설정하여 데이터 조회
- 공통 UX 참고 :  COMM-5-d(1/5)
- 일자 유형[좌] : 조회하고 싶은 일자 유형 선택
- 특정 일자 및 기간[우] : 선택 유형에 대한 일자 및 기간 설정
- 단, 오늘 기준 미래일자는 선택 불가
- Default
- 일자 유형[좌] : Start Date/Time
- 특정 일자 및 기간[우] : 시작일-7일 전 ~ 종료일-Today
- 드롭다운 리스트 항목
- Start Date, End Date

#### 2. Plate 리스트

- 정의 : 96-DWP별 검사 정보 리스트
- 공통 UX 참고 :  COMM-5-m
- 정렬
- Default : Start Date/Time 기준 내림차순
- 동작
- 특정 Plate 행 클릭 시 Plate 상세 노출 : TI-SPT-02-01

#### 2-1. 리스트 표출 항목

- Plate ID
- Sample Preparation 단계에서 찍힌 96-DWP 정보
- Sample(Total / STAT)
- 상위 Plate에 분주된 Sample 단위 개수 및 응급 상태 개수
- Progress
- 전체 검사 프로세스 대비 단계별 진행 현황 정보
- 상태 값 : COMM-4-a
- Status
- 검체의 검사 진행 상태 정보
- 상태 값 : COMM-4-a
- Start Date/Time
- 96-DWP가 Sample Pre-treatment 모듈에 진입해 검사 전 바코드가 찍히는 시점
- End Date/Time
- 96-DWP가 PCR Setup 모듈에서 작업 완료 후 바코드가 찍히는 시점

#### 2-2. Progress 상태 정보(Tooltip)

- 공통 UX 참고 :  COMM-5-o
- 표출 예시 : TI-SPT-02/Case1

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
| 1 | Progress 상태 정보 Tooltip | Progress 툴팁 표출 (2-2) | [TI-SPT-02/Case1](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-192118) |

- Case 1 (원문): 설명 `Sample 또는 Plate 단위의 항목이 각 단계에 진입하여 검사 전 해당 단계 장비에서 바코드 찍히는 순간 색상 채워짐` / 툴팁 `Progress Status` | Sample Preparation | Nucleic Acid Extraction | PCR Setup
- 케이스 패널: 화면 정보만 있고 디스크립션 없음(번호 칸 `0`)
