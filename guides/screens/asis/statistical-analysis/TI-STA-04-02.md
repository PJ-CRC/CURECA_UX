---
cid: TI-STA-04-02
pair_cid:
tl_relation: 단독
title: Test Analytics _ Test Cost
path: Statistical Analysis > Test Analytics
type: Tab
version: 2.0
date: 2026.06.15
author: 정다예
client_mode: []
user_type: [Service, Admin, User]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-413693
---
# TI-STA-04-02 Test Analytics _ Test Cost

> 기존 화면(작업방 `SA_Test Analytics_asis` 페이지, Ver 2.0)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: [TI-STA-04-01] Test Cost Chart (View Chart, 1 참고 화면)
- 호출되는 곳: [TI-STA-04-01] 6-3 View Table
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-004, POL-TST-003, POL-COM-006

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Network Status | Instrument | L-IOS | D.A PC | Running | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Test Analytics | Test Forecasting | Setting | Information | Manual | Keira Knightley
- Test Analytics
- Test Cost (Average) | Export
- 합계 표: RP3 | PB | GI-B1 | GI-B2 | Allplex HPV28
  - $8.00 | $6.00 | $8.00 | $4.00 | $6.00
- 추이 표: (Unit : USD)
  - Product | 2026-01 | 2026-02 | 2026-03 | 2026-04 | 2026-05 | 2026-06 | 2026-07
  - RP3 | $4.80 | $7.40 | $3.20 | $6.40 | $6.60 | $6.90 | $5.50
  - PB | $4.00 | $6.50 | $5.10 | $4.60 | $5.20 | $4.00 | $7.30
  - GI-B1 | $5.50 | $5.60 | $5.00 | $7.20 | $8.10 | $5.00 | $2.80
  - GI-B2 | $5.50 | $5.10 | $7.50 | $3.50 | $6.30 | $3.10 | $4.40
  - Allplex HPV28 | $7.30 | $2.80 | $2.80 | $4.60 | $3.60 | $4.00 | $4.40
- 오른쪽 조회 영역
  - Key Metrics: Test Count | Test Ratio | Test TAT | Test Cost
  - Filter Options
  - Date Range: Daily | Monthly / 2026-01 | 2026-07
  - Legend: Select All / RP1 | RP2 | RP3 | PB | GI-V | GI-B1 | GI-B2 | GI-P | Allplex HPV28 | STI-12
  - View: Chart | Table

### 사용 컴포넌트

Table (53), Square (20), 1 Depth (7), Table/Filled Table  Cell (5), Description Number (4), Dropdown Outlined (2), profile (1), Layout/Align_Right_05_Solid (1), Frame (1)

### 디스크립션 (원문)

#### 0. Test Analytics _ Test Cost 화면

- 정의
- 사용자가 조회한 기간 내 검사 항목별 평균 비용의 변동 추이 정보 제공

#### 1. 검사 항목별 평균 비용 정보 영역

- 아래 참고 화면과 내용 동일
- 참고 : TI-STA-04-01

#### 2. 검사 비용 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 검사 비용 추이 통계 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 조회 기간 열의 개수가 8개 이상일 경우(또는 화면 해상도 대비 테이블 총 너비가 부모 컨테이너를 초과할 경우), 가로 스크롤 생성
- 표출 항목
- 검사 비용 단위 정보 (Unit : USD)

#### 2-1. Legend 구분 및 날짜 영역

- 표출 항목
- 첫 번째 열 헤더 고정
- ㄴ Product
- 데이터 열 (타임라인 축)
- ㄴ사용자가 설정한 조회 기간 일자별/월별 날짜 표출

#### 2-2. 검사 항목별 평균 비용 정보 영역

- 동작
- 필터에서 선택한 검사 항목 노출
- 마스터 코드 순서에 따라 위에서 아래로 정렬되어 노출
- 표출 항목
- 각 셀 데이터는 금액 형태로 노출
  - (통화 기호 $ 필수 적용 및 소수점 둘째 자리까지 표출)
- 데이터가 0인 경우에도 생략하지 않고 $0.00 포맷으로 노출
- 단, 필터에서 선택된 검사 항목이 1개 미만일 경우, 안내 문구 노출
- 참고 : TI-STA-01/Case > Case 3

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스 프레임은 TI-STA-04-01과 같은 `TI-STA-04/Case`([3543:416159](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-416159))이고, Case 1(Chart 상세 데이터 Tooltip)만 있습니다. 내용은 [TI-STA-04-01] 케이스 절에 적었습니다. 이 화면 디스크립션 2-2가 가리키는 것은 `TI-STA-01/Case`의 Case 3입니다(내용은 [TI-STA-01-01] 케이스 절).

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Chart 상세 데이터 Tooltip | 차트 내 특정 시점에 마우스 호버 | `TI-STA-04/Case` (0, 0) |
