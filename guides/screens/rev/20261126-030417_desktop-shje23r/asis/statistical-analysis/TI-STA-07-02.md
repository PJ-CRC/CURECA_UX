---
cid: TI-STA-07-02
pair_cid:
tl_relation: 단독
title: Inventory _ Usage & Cost Trend
path: Statistical Analysis > Inventory
type: Tab
version: 2.1.03
date: 2026.08.21
author: 정다예
client_mode: []
user_type: [Service, Admin, User]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-464433
---
# TI-STA-07-02 Inventory _ Usage & Cost Trend

> 기존 화면(작업방 `SA_Inventory_asis` 페이지, Ver 2.1.03)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: [TI-STA-07-01] Usage & Cost Trend Chart (View Chart). 데이터 산출식 참고 [LI-IVT-06-T] (0)
- 호출되는 곳: [TI-STA-07-01] 2 Table
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-006, POL-TST-003, POL-INV-006, POL-COM-006

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Inventory | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Test Analytics | Instrument | Inventory | Event | Test Forecasting | Setting | Information | Keira Knightley | Logout
- 탭: Usage & Cost Trend
- Chart | Table | Export
- Usage & Cost Trend
- 합계 표: Total Usage | Total Cost
  - 231 sets(23,100 ea) | $2,279
- (Unit : count, USD)
- 표: (머리 빈칸) | 01-01 | 01-02 | 01-03 | 01-04 | 01-05 | 01-06 | 01-07
  - Usage | 17 sets(1,700 ea) | 24 sets(2,400 ea) | 30 sets(3,000 ea) | 40 sets(4,000 ea) | 30 sets(3,000 ea) | 50 sets(5,000 ea) | 40 sets(4,000 ea)
  - Cost | $166 | $235 | $312 | $388 | $291 | $478 | $402
- 오른쪽 조회 영역
  - Date Range: Daily | Monthly / 2026-01-01 | 2026-01-07
  - Legend: Consumable | Reagent / PCR (Dropdown) / Allplex™ Respiratory Panel 1 | Allplex™ Respiratory Panel 2 | Allplex™ Respiratory Panel 3 | Allplex™ PneumoBacter Assay | Allplex™ GI-Bacteria(I) Assay | Allplex™ GI-Bacteria(II) Assay | Allplex™ GI-Virus Assay | Allplex™ GI-Parasite Assay | Anyplex™II STI-12 Detection | Allplex™ HPV28 Detection

### 사용 컴포넌트

Table (26), Square (6), 1 Depth (6), 2 Depth (5), Description Number (4), Dropdown Outlined (3), Table/Filled Table  Cell (2), Frame (1), Arrow/Chevron_Up (1), Interface/Setting_Outlined (1), ViewMode/Barchart (1), ViewMode/Data_List (1)

### 디스크립션 (원문)

#### 0. Inventory _ Usage & Cost Trend 화면

- 정의
- 사용자가 조회한 기간 내 소모품/시약별 사용량 및 비용 정보 제공
- 동작
- 최초 진입 후, 데이터 로딩 시 스켈레톤 화면 노출
- 참고 : TI-STA-05_Skeleton
- 데이터 산출식 (Inventory > Usage history와 동일)
- 장비가 사용 후 폐기하는 시점기준으로 이력 관리
- Barcode + Usage+Date/Time 기준 Row 생성
- 참고 : LI-IVT-06-T

#### 1. 사용량 및 비용 합계 정보(Table 형태)

- 정의
- 필터에서 선택한 항목의 사용량 및 비용 합계 표출 영역
- 동작
- 전체 테이블 너비 100% 고정
- 선택 항목 변경 시 데이터 실시간 가변 연동
- 표출 항목
- Total Usage
- ㄴ 선택한 필터 조건(기간, 항목)에 따른 사용량 합계
- Total Cost
- ㄴ 선택한 필터 조건(기간, 항목)에 따른 비용 합계

#### 2. 사용량 및 비용 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 사용량 및 비용 통계 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 조회 기간 열의 개수가 8개 이상일 경우(또는 화면 해상도 대비 테이블 총 너비가 부모 컨테이너를 초과할 경우), 가로 스크롤 생성
- 표출 항목
- 소모품/시약 사용량 및 비용 단위 정보 (Unit : count, USD)

#### 2-1. 날짜 영역

- 표출 항목
- 데이터 열 (타임라인 축)
- ㄴ사용자가 설정한 조회 기간 일자별/월별 날짜 표출

#### 2-2. 조회 기간별 사용량 및 비용 정보 영역

- 동작
- 행(Row) 구성
- ㄴ Usage 및 Cost 2개 지표 행 고정 노출
- 표출 항목
- Usage 행
- ㄴ 묶음단위(낱개 수량)
- Cost 행
- ㄴ 비용
- 데이터가 0인 경우에도 생략하지 않고 0으로 노출

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

이 화면만의 케이스 프레임은 없고, 디스크립션에 케이스 참고 줄도 없습니다. 같은 페이지의 `TI-STA-07-01/Case`([3543:463669](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-463669))가 TI-STA-07-01의 케이스입니다(내용은 [TI-STA-07-01] 케이스 절).

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
