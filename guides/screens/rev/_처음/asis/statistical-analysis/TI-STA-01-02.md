---
cid: TI-STA-01-02
pair_cid:
tl_relation: 단독
title: Test Analytics _ Test Count
path: Statistical Analysis > Test Analytics
type: Tab
version: 2.0
date: 2026.06.15
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-412863
---
# TI-STA-01-02 Test Analytics _ Test Count

> 기존 화면(작업방 `SA_Test Analytics_asis` 페이지, Ver 2.0)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: [TI-STA-01-01] Test Count Chart (View Chart, 1 참고 화면)
- 호출되는 곳: [TI-STA-01-01] 6-3 View Table

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Network Status | Instrument | L-IOS | D.A PC | Running | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Test Analytics | Test Forecasting | Setting | Information | Manual | Keira Knightley
- Test Analytics
- Test Count | Export
- 합계 표: Total | RP1 | RP2 | RP3 | PB | GI-V | GI-B1 | GI-B2 | GI-P | Allplex HPV28 | STI-12
  - 368,950 | 40,250 | 33,700 | 33,900 | 44,950 | 37,400 | 37,400 | 31,250 | 37,950 | 34,450 | 34,450
- 추이 표: (Unit : count)
  - Product | 01-01 | 01-02 | 01-03 | 01-04 | 01-05 | 01-06 | 01-07
  - RP1 | 4,900 | 7,100 | 3,500 | 6,200 | 6,400 | 6,650 | 5,500
  - RP2 | 4,250 | 6,300 | 5,100 | 4,750 | 4,900 | 5,150 | 3,250
  - RP3 | 5,500 | 5,550 | 4,800 | 4,750 | 4,900 | 5,150 | 3,250
  - PB | 7,550 | 4,200 | 7,200 | 3,850 | 7,700 | 6,450 | 8,000
  - GI-V | 7,100 | 4,900 | 4,800 | 3,850 | 5,550 | 6,300 | 4,900
  - GI-B1 | 7,000 | 4,900 | 4,800 | 3,900 | 6,100 | 5,100 | 5,600
  - GI-B2 | 4,400 | 5,200 | 3,250 | 4,750 | 3,900 | 4,100 | 5,650
  - GI-P | 5,700 | 6,000 | 3,400 | 6,100 | 7,500 | 3,250 | 6,000
  - Allplex HPV28 | 3,800 | 6,100 | 3,250 | 7,300 | 7,500 | 3,250 | 3,250
  - STI-12 | 4,200 | 4,900 | 3,600 | 7,300 | 6,100 | 3,950 | 4,400
  - Total | 54,400 | 55,150 | 43,700 | 52,750 | 60,950 | 48,400 | 53,600
- 오른쪽 조회 영역
  - Key Metrics: Test Count | Test Ratio | Test TAT | Test Cost
  - Filter Options
  - Date Range: Daily | Monthly / 2026-01-01 | 2026-01-07
  - Legend: Product | Sample Type / Select All / RP1 | RP2 | RP3 | PB | GI-V | GI-B1 | GI-B2 | GI-P | Allplex HPV28 | STI-12
  - View: Chart | Table

### 사용 컴포넌트

Table (107), Square (22), Description (12), Table/Filled Table  Cell (11), 1 Depth (7), Description Number (5), Dropdown Outlined (2), profile (1), Layout/Align_Right_05_Solid (1), Frame (1)

### 디스크립션 (원문)

#### 0. Test Analytics _ Test Count 화면

- 정의
- 사용자가 조회한 기간 내 검사 항목 별 검사 건 수 정보 제공

#### 1. 검사 항목별 검사 건 수 합계 정보 영역

- 아래 참고 화면과 내용 동일
- 참고 : TI-STA-01-01

#### 2. 검사 건수 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 검사 건수 변동 추이 비교 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 조회 기간 열의 개수가 8개 이상일 경우(또는 화면 해상도 대비 테이블 총 너비가 부모 컨테이너를 초과할 경우), 가로 스크롤 생성
- 표출 항목
- 검사 건 수 단위 정보 (Unit : count)

#### 2-1. Legend 종류 및 날짜 영역

- 표출 항목
- 첫 번째 열 헤더 고정
- ㄴ필터에서 선택된 Legend 종류(Product, Sample Type)
- 데이터 열 (타임라인 축)
- ㄴ사용자가 설정한 조회 기간 일자별/월별 날짜 표출

#### 2-2. 조회 기간 단위 검사 항목별 검사 건 수 영역

- 동작
- 필터에서 선택한 검사 항목 노출
- 마스터 코드 순서에 따라 위에서 아래로 정렬되어 노출
- 표출 항목
- 각 셀 데이터는 검사 항목별 검사 건수(수치) 노출
- 데이터가 0인 경우에도 생략하지 않고 0 포맷으로 노출
- 단, 필터에서 선택된 검사 항목이 1개 미만일 경우, 안내 문구 노출
- 참고 : TI-STA-01/Case > Case 3

#### 2-3. Total 행(맨 아래 행 고정)

- 해당 일자(또는 월)별로 선택된 모든 항목의 검사 건수 총 합산 값
- 고정 표출
- 단, 데이터가 없을 경우 ‘-’로 표기
- 참고 : TI-STA-01/Case > Case 3

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스 프레임은 TI-STA-01-01과 같은 `TI-STA-01/Case`([3543:414512](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-414512))입니다. Case 1 ~ 4의 내용은 [TI-STA-01-01] 케이스 절에 적었습니다. Table 모드가 그려진 것은 Case 3의 3-2(Legend 전체 해제 시, Table 모드)입니다.

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Chart 상세 데이터 Tooltip | 차트 내 특정 시점에 마우스 호버 | `TI-STA-01/Case` (0, 0) |
| 2 | 데이터 로딩 중 Case | 데이터 로딩 중 | `TI-STA-01/Case` (0, 773) |
| 3 | Legend 전체 해제 시 (3-1. Chart 모드일 경우 / 3-2. Table 모드일 경우) | Legend 전체 해제 | `TI-STA-01/Case` (0, 1546) |
| 4 | Legend 유형별 노출 데이터 (4-1. Product 선택 시 / 4-2. Sample Type 선택 시) | Legend 탭 선택 | `TI-STA-01/Case` (0, 2336) |
