---
cid: TI-STA-03-02
pair_cid:
tl_relation: 단독
title: Test Analytics _ Test TAT
path: Statistical Analysis > Test Analytics
type: Tab
version: 2.0
date: 2026.06.15
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-414089
---
# TI-STA-03-02 Test Analytics _ Test TAT

> 기존 화면(작업방 `SA_Test Analytics_asis` 페이지, Ver 2.0)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: [TI-STA-03-01] Test TAT Chart (View Chart, 1 참고 화면)
- 호출되는 곳: [TI-STA-03-01] 6-2 View Table

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Network Status | Instrument | L-IOS | D.A PC | Running | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Test Analytics | Test Forecasting | Setting | Information | Manual | Keira Knightley
- Test Analytics
- Test TAT(Turnaround Time) | Export
- 합계 표: Total Test TAT(Turnaround Time) | Total Test Counts
  - 5.8 hour | 345,200
- 추이 표: (Unit : hour, count)
  - 01-01 | 01-02 | 01-03 | 01-04 | 01-05 | 01-06 | 01-07
  - Test TAT | 8 | 7 | 8.5 | 4 | 7 | 5.2 | 5
  - Test Count | 3,080 | 5,500 | 6,100 | 3,000 | 4,200 | 8,200 | 5,900
- 오른쪽 조회 영역
  - Key Metrics: Test Count | Test Ratio | Test TAT | Test Cost
  - Filter Options
  - Date Range: Daily | Monthly / 2026-01-01 | 2026-01-07
  - View: Chart | Table

### 사용 컴포넌트

Table (26), Square (9), 1 Depth (7), Description Number (4), Table/Filled Table  Cell (2), Dropdown Outlined (2), profile (1), Layout/Align_Right_05_Solid (1), Frame (1)

### 디스크립션 (원문)

#### 0. Test Analytics _ Test TAT 화면

- 정의
- 지정된 조회 기간 내 검사별 평균 소요 시간(TAT) 추이와 총 검사 건수의 상관관계를 비교하여 제공

#### 1. 총 검사 시간 및 검사 건 수 정보 영역

- 아래 참고 화면과 내용 동일
- 참고 : TI-STA-03-01

#### 2. 검사 TAT 및 건수 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 검사 TAT(소요 시간 합계) 및 검사 건수 통계 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 조회 기간 열의 개수가 8개 이상일 경우(또는 화면 해상도 대비 테이블 총 너비가 부모 컨테이너를 초과할 경우), 가로 스크롤 생성
- 표출 항목
- 검사 시간 및 건수 단위 정보 (Unit : hour, count) 표출

#### 2-1. 날짜 영역

- 표출 항목
- 데이터 열 (타임라인 축)
- ㄴ사용자가 설정한 조회 기간 일자별/월별 날짜 표출

#### 2-2. 조회 기간별 소요 시간 및 건수 정보 영역

- 동작
- 행(Row) 구성
- ㄴ Test TAT 및 Test Count 2개 지표 행 고정 노출
- 표출 항목
- Test TAT 행
- ㄴ 해당 날짜의 총 소요 시간 합계 수치를 소수점 첫째 자리까지 표출
- Test Count 행
- ㄴ 해당 날짜의 총 검사 건수 수치 표출
- 데이터가 0인 경우에도 생략하지 않고 0으로 노출

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스 프레임은 TI-STA-03-01과 같은 `TI-STA-03/Case`([3543:415927](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-415927))이고, Case 1(Chart 상세 데이터 Tooltip)만 있습니다. 내용은 [TI-STA-03-01] 케이스 절에 적었습니다.

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Chart 상세 데이터 Tooltip | 차트 내 특정 시점에 마우스 호버 | `TI-STA-03/Case` (0, 0) |
