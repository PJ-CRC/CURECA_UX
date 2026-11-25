---
cid: TI-STA-07-01
pair_cid:
tl_relation: 단독
title: Inventory _ Usage & Cost Trend
path: Statistical Analysis > Inventory
type: Tab
version: 2.1.14
date: 2026.10.30
author: 정다예
client_mode: []
user_type: [Service, Admin, User]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-464163
---
# TI-STA-07-01 Inventory _ Usage & Cost Trend

> 기존 화면(작업방 `SA_Inventory_asis` 페이지, Ver 2.1.14)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: [TI-STA-07-02] Usage & Cost Trend Table (2 Table). 데이터 산출식 참고 [LI-IVT-06-T] (0)
- 호출되는 곳: LNB > Statistical Analysis > Inventory (탭은 Usage & Cost Trend 하나)
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-006, POL-TST-003, POL-INV-006, POL-COM-006
- 버전 메모(프레임 오른쪽 위 `ver`): v2.1.14 update / Policy Setting : Cost Setting 입력 값에 따른 데이터 노출 조건
- 기획 프레임 밖에는 섹션 `통계 지표 관련 정책`([3543:464646](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-464646))이 있습니다(옮기지 않음).

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Inventory | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Test Analytics | Instrument | Inventory | Event | Test Forecasting | Setting | Information | Keira Knightley | Change Password
- 탭: Usage & Cost Trend
- Chart | Table | Export
- Usage & Cost Trend | 범례 Usage | Cost
- 합계 표: Total Usage | Total Cost
  - 231 sets(23,100 ea) | $2,279
- 차트: (Unit : count) 좌측 Y축 5000 · 4000 · 3000 · 2000 · 1000 · 0 | (Unit : USD) 우측 Y축 $500 · $400 · $300 · $200 · $100 · 0 | X축 01-01 | 01-02 | 01-03 | 01-04 | 01-05 | 01-06 | 01-07
- 오른쪽 조회 영역
  - Date Range: Daily | Monthly / 2026-01-01 | 2026-01-07
  - Legend: Consumable | Reagent / PCR (Dropdown) / Allplex™ Respiratory Panel 1 | Allplex™ Respiratory Panel 2 | Allplex™ Respiratory Panel 3 | Allplex™ PneumoBacter Assay | Allplex™ GI-Bacteria(I) Assay | Allplex™ GI-Bacteria(II) Assay | Allplex™ GI-Virus Assay | Allplex™ GI-Parasite Assay | Anyplex™II STI-12 Detection | Allplex™ HPV28 Detection

### 사용 컴포넌트

Description Number (11), Square (6), 1 Depth (6), Dropdown Outlined (3), 2 Depth (3), Table (2), Table/Filled Table  Cell (2), ViewMode/Barchart (1), ViewMode/Data_List (1), Frame (1), Arrow/Chevron_Up (1), profile (1), Layout/Align_Right_05_Solid (1)

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

#### 1. 통계 지표 정보 영역(Tab)

- Default
- 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- ~~동작~~
- ~~활성 탭 변경 시, 각 Tab의 디폴트 세팅 값으로 재로딩~~
- ~~단일 선택, 다른 항목 선택 시 기존 활성화된 항목은 비활성화~~
- Tab 표출 항목
- Usage & Cost Trend

#### 2. 차트 형태 영역(Segmented Control)

- Default
- 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- 동작
- Chart 선택 시 꺾은선 그래프로 표출 (참고 : TI-STA-07-01)
- Table 선택 시 표로 표출 (참고 : TI-STA-07-02)

#### 3. 사용량 및 비용 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 소모품 또는 시약의 사용량 및
- 비용 추이 비교 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 표출 항목
- Usage & Cost Trend
- 사용량 및 비용 단위 정보 : (Unit : count), (Unit : USD)
- 소모품/시약별 사용량 및 비용 추이 차트 및 수치 정보

#### 3-1. 사용량 및 비용 합계 정보(Table 형태)

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

#### 3-2. 조회 기간(X축) 정보

- 동작
- 텍스트 겹침 방지를 위해 라이브러리의 Auto-skip 기능 활성화 및 가로 폭에 따른 라벨 개수 자동 최적화
- 표출 항목
- 사용자가 설정한 조회 기간 일자별/월별 날짜 표출

#### 3-3. 사용량(좌측 Y축) 정보

- 동작
- Y축의 최소값은 0으로 고정하며, 최대값은 조회된 전체 사용량의 최고치에 따라 라이브러리가 자동 스케일링 하도록 설정
- 표출 항목
- 좌측 상단 단위 정보 (Unit : count) 고정 텍스트
- 사용량 단위 라벨 표출

#### 3-4. 비용(우측 Y축) 정보

- 동작
- Y축의 최소값은 0으로 고정하며, 최대값은 조회된 전체 비용 최고치에 따라 라이브러리가 자동 스케일링 하도록 설정
- 표출 항목
- 우측 상단 단위 정보 (Unit : USD) 고정 텍스트
- 비용 라벨 표출

#### 3-5. 데이터 뷰 영역(차트 or 테이블)

- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 마우스 오버 시 해당 시점의 상세 데이터 툴팁 팝업 노출
  - (참고 : TI-STA-07-01/Case1)
- 표출 항목
- Total Usage
- ㄴ 좌측 Y축 기준의 단일 세로 막대 차트 형태로 표출
- Total Cost
- ㄴ 우측 Y축 기준의 단일 꺾은선 차트 형태로 표출

#### 4. 통계 일자 설정 영역 : Date Range

- Default : Daily 탭 활성화, 전일 기준 최근 14일간 데이터 노출
- Daily (일간 조회 정책)
- Min Range : 최소 1일
- Max Range : 최대 3개월(90일)
- 과거(어제)부터 선택 가능, 오늘 및 미래 날짜는 비활성화
- Monthly (월간 조회 정책)
- Min Range : 최소 1개월
- Max Range : 최대 1년(12개월)
- 당월 선택 가능 (오늘 날짜 포함 이후 날짜 집계 제외), 미래 월은 비활성화
- 동작
- Daily ➔ Monthly 전환 시 데이터 상속
- Daily 상태에서 특정 일자 범위를 선택한 후 Monthly 클릭 시,
- 기존에 선택되어 있던 일자의 연/월 정보를 기준으로 월단위
- 범위를 자동 확장 매핑하여 노출
- Monthly ➔ Daily 전환 시 데이터 상속 및 최대 범위 제한
- 기존 선택된 월의 시작월 1일부터 종료 월의 말일까지로
- 일자 범위를 자동 변환
- 단, 변환된 일자 범위가 Daily 최대 조회 한도(3개월/90일)를
- 초과할 경우, 종료월의 말일을 기준으로 역산하여 최대 3개월(90일)
- 범위로 기간 노출
- 공통 UX 참고 : COMM-5-d

#### 5. 통계 대상(소모품 또는 시약) 선택 영역 : Legend

- Default
- Consumable 탭 활성화, 첫번째 소모품 선택 (단일 선택)
- 단, 검사 항목에 매핑된 필수 소모품 또는 시약 중 단가(Cost)가 하나라도 설정되지 않은 항목이 있는 경우, 해당 검사 항목은 비활성화 처리 됨
- 동작
- 최소 1개가 선택되어야함 (전체 해제 X)
- 표출 항목
- 참고 : TI-STA-07-01/Case 2

#### 6. [Export] 버튼

- 정의
- 화면에 표출된 통계 데이터 및 설정값을 CSV 파일로 내보내는
- 기능 버튼
- 동작
- 클릭 시 OS 파일 탐색기가 호출되어 사용자가 저장 경로 및
- 파일명을 지정하여 다운로드
- 포맷 (Format) : .csv
- 포함 데이터
- 범례 설정값, 필터 조건, 테이블 집계 결과값 등 화면 내 표출된 전체 데이터셋 포함

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 같은 페이지의 별도 프레임 `TI-STA-07-01/Case`([3543:463669](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-463669), 2252×1722)에 있습니다. 케이스마다 오른쪽 패널이 있습니다(CID `TI-STA-07-01/Case`, 작성자 정다예, Ver · Date `-`). 프레임 칸의 y는 케이스 제목 글자 자리입니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Chart 상세 데이터 Tooltip | 차트 내 특정 시점에 마우스 호버 | 위 프레임 y 16 |
| 2 | Legend 유형별 노출 데이터 (4-1. Consumable 선택 시 / 4-2. Reagent 선택 시) | Legend Consumable · Reagent 탭 선택 | 위 프레임 y 977 |

- Case 1 패널
  - 1 Chart 상세 데이터 Tooltip — 노출 조건: 차트 내 특정 시점(일별 막대 또는 월별 막대)에 마우스 호버시 해당 마우스 포인터 위치를 기준으로 팝업 노출
  - 1-1 시점 및 총합 정보 — 표출 항목: 호버된 해당 일자 또는 월 정보 표출 / 선택된 검사 항목들의 해당 시점 기준 총 검사 건수 합산 값을 Total : 총 건수 형태로 표출
  - 1-2 개별 항목 리스트 정보 — 표출 항목: 해당 시점에 발생한 항목별 누적 검사 건수 수치 표출
  - 툴팁 예시: 01-05 / Usage 30 sets(3,000 ea) / Cost $291 (같은 툴팁이 두 자리에 있음)
  - 케이스 화면 합계: Total Usage 231 sets(23,100) | Total Cost $2,279(231 box)
- Case 2 (패널 디스크립션 `0` / `-`)
  - 설명: Consumable / Reagent 모두 단일 선택 가능
  - 4-1 Consumable 선택 시: Wide Bore Tip — 1000 μL Tip | 300 μL Tip | Empty Standard Tube | 96-DWP | Stool Swab | PCR Plate | MM Tube | Sealing Film / Sample Preparation — PBS Standard Tube | Saline Standard Tube | ASL Standard Tube | Prelyser Standard Tube | PBS Tub | Saline Tub | LB Tub (Prep)
  - 4-2 Reagent 선택 시: Nucleic Acid Extraction — STARMag M96 Kit | STARMag Universal Cartridge Kit / PCR — Allplex™ Respiratory Panel 1 | Allplex™ Respiratory Panel 2 | Allplex™ Respiratory Panel 3 | Allplex™ PneumoBacter Assay | Allplex™ GI-Bacteria(I) Assay | Allplex™ GI-Bacteria(II) Assay | Allplex™ GI-Virus Assay | Allplex™ GI-Parasite Assay | Anyplex™II STI-12 Detection | Allplex™ HPV28 Detection
