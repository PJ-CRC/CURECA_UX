---
cid: TI-STA-02-02
pair_cid:
tl_relation: 단독
title: Test Analytics _ Test Ratio
path: Statistical Analysis > Test Analytics
type: Tab
version: 2.0
date: 2026.06.15
author: 정다예
client_mode: []
user_type: [Service, Admin, User]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-414235
---
# TI-STA-02-02 Test Analytics _ Test Ratio

> 기존 화면(작업방 `SA_Test Analytics_asis` 페이지, Ver 2.0)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: [TI-STA-02-01] Test Ratio Chart (View Chart, 1 참고 화면)
- 호출되는 곳: [TI-STA-02-01] 6-3 View Table
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-004, POL-COM-006

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Network Status | Instrument | L-IOS | D.A PC | Running | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Test Analytics | Test Forecasting | Setting | Information | Manual | Keira Knightley
- Test Analytics
- Test Ratio | Export
- 합계 표: Total | RP1 | RP2 | RP3 | PB | GI-V | GI-B1 | GI-B2 | GI-P | Allplex HPV28 | STI-12
  - 100%(368,950) | 10.3%(4,830) | 8.7%(4,060) | 13.9%(6,500) | 18.3%(8,550) | 1%(450) | 10.2%(4,780) | 7.1%(3,300) | 15.9%(7,450) | 10.2%(4,750) | 4.4%(2,080)
- 추이 표: (Unit : count)
  - Product | 2026-01 | 2026-02 | 2026-03 | 2026-04 | 2026-05 | 2026-06 | 2026-07
  - RP1 | 3.2%(150) | 14.5%(1,100) | 6.8%(450) | 5.1%(300) | 13.5%(1,150) | 12.4%(900) | 12.6%(780)
  - RP2 | 9.5%(450) | 15.1%(1,150) | 6.8%(450) | 2.6%(150) | 1.8%(150) | 12.4%(900) | 12.3%(760)
  - RP3 | 16.8%(800) | 8.6%(650) | 18.9%(1,250) | 22.2%(1,300) | 11.2%(950) | 10.3%(750) | 12.9%(800)
  - PB | 15.8%(750) | 5.9%(450) | 23.5%(1,550) | 26.5%(1,550) | 27.6%(2,350) | 15.2%(1,100) | 12.9%(800)
  - GI-V | 1.1%(50) | 1.3%(100) | 0.8%(50) | 0.9%(50) | 1.2%(100) | 0.7%(50) | 0.8%(50)
  - GI-B1 | 8.4%(400) | 12.5%(950) | 6.8%(450) | 5.1%(300) | 12.9%(1,100) | 11.9%(860) | 11.6%(720)
  - GI-B2 | 5.3%(250) | 13.2%(1,000) | 6.4%(420) | 4.8%(280) | 5.9%(500) | 6.2%(450) | 6.5%(400)
  - GI-P | 26.3%(1,250) | 14.5%(1,100) | 21.7%(1,430) | 26.8%(1,570) | 5.3%(450) | 12.4%(900) | 12.1%(750)
  - Allplex HPV28 | 9.5%(450) | 7.9%(600) | 7.6%(500) | 6.0%(350) | 13.5%(1,150) | 12.4%(900) | 12.9%(800)
  - STI-12 | 4.2%(200) | 6.6%(500) | 0.0%(0) | 0.0%(0) | 7.1%(600) | 6.1%(440) | 5.5%(340)
  - Total | 100%(4,750) | 100%(7,600) | 100%(6,600) | 100%(5,850) | 100%(8,500) | 100%(7,250) | 100%(6,200)
- 오른쪽 조회 영역
  - Key Metrics: Test Count | Test Ratio | Test TAT | Test Cost
  - Filter Options
  - Date Range: Daily | Monthly / 2026-01 | 2026-07
  - Legend: Product | Sample Type / Select All / RP1 | RP2 | RP3 | PB | GI-V | GI-B1 | GI-B2 | GI-P | Allplex HPV28 | STI-12
  - View: Chart | Table

### 사용 컴포넌트

Table (107), Square (22), Table/Filled Table  Cell (11), 1 Depth (7), Description Number (5), Dropdown Outlined (2), profile (1), Layout/Align_Right_05_Solid (1), Frame (1)

### 디스크립션 (원문)

#### 0. Test Analytics _ Test Ratio 화면

- 정의
- 지정한 조회 기간 내 검사 항목별 차지하는 비율(비중) 정보 제공

#### 1. 검사 항목별 검사 건 수 및 비율(비중) 정보 영역

- 아래 참고 화면과 내용 동일
- 참고 : TI-STA-02-01

#### 2. 검사 비율 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 검사 비율 추이 통계 영역
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

#### 2-2. 검사 항목별 검사 건 수 및 비율(비중) 정보 영역

- 동작
- 필터에서 선택한 검사 항목 노출
- 마스터 코드 순서에 따라 위에서 아래로 정렬되어 노출
- 표출 항목
- 각 셀 데이터는 비율%(개별 건수) 형태로 노출
- 데이터가 0인 경우에도 생략하지 않고 0.0%(0) 포맷으로 노출
- 단, 필터에서 선택된 검사 항목이 1개 미만일 경우, 안내 문구 노출
- 참고 : TI-STA-01/Case > Case 3

#### 2-3. Total 행(맨 아래 행 고정)

- 해당 일자(또는 월)별로 선택된 모든 항목의 검사 건수 총 합산 값 및 기준 비율을 100%(총 건수) 포맷으로 고정 표출
- 단, 데이터가 없을 경우 ‘-’로 표기
- 참고 : TI-STA-01/Case > Case 3

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스 프레임은 TI-STA-02-01과 같은 `TI-STA-02/Case`([3543:415366](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-415366))이고, 내용은 [TI-STA-02-01] 케이스 절에 적었습니다. 이 화면 디스크립션 2-2 · 2-3이 가리키는 것은 `TI-STA-01/Case`의 Case 3(Legend 전체 해제 시, 3-2 Table 모드)입니다(내용은 [TI-STA-01-01] 케이스 절).

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Chart 상세 데이터 Tooltip | 차트 내 특정 시점에 마우스 호버 | `TI-STA-02/Case` (0, 0) |
| 2 | Legend 유형별 노출 데이터 (2-1. Product 선택 시 / 2-2. Sample Type 선택 시) | Legend 탭 선택 | `TI-STA-02/Case` (0, 793) |
