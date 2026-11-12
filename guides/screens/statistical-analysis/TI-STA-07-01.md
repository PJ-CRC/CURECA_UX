---
cid: TI-STA-07-01
pair_cid:
tl_relation: 단독
title: 소모품 및 시약 사용량 - Chart
path: Statistical Analysis > Test Analytics > 소모품 및 시약 사용량 - Chart
type: Page
version: 2.1.14
date: 2026-10-30
author: 정다예
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3271-158604
figma_region: 2.1 2차
---
# TI-STA-07-01 소모품 및 시약 사용량 - Chart

> 기존 화면(작업방 Statistical Analysis 페이지, 2.1 2차 영역, Ver 2.1.14)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴. IA 화면 이름이 한국어("소모품 및 시약 사용량"). 화면 타이틀은 "Usage & Cost Trend", Figma 경로는 "Statistical Analysis > Inventory"
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-006, POL-TST-003, POL-INV-006, POL-COM-006
- 호출하는 화면: 소모품 및 시약 사용량 - Table (TI-STA-07-02)
- 다른 프레임: [TI-STA-07-01/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3271-158110)

- 취소선(Figma에서 제거된 항목): 1 Tab의 "동작" (활성 탭 변경 시 재로딩, 단일 선택). Tab 항목이 Usage & Cost Trend 하나뿐이라 지운 것으로 보임

## 기존 화면

### 화면 글자

- (GNB)(LNB) TI-STA-01-01과 같음
- (Tab) Usage & Cost Trend, (Segmented Control) Chart | Table, Export
- Usage & Cost Trend
- (합계 표) Total Usage | Total Cost → 231 sets(23,100 ea) | $2,279
- (Unit : count) | (Unit : USD), 우측 Y축 $200 ~ $500
- (차트 범례) Usage | Cost
- Filter Options
- Date Range: Daily | Monthly
- Legend: Consumable | Reagent, 드롭다운 "PCR", Allplex™ Respiratory Panel 1 | Allplex™ Respiratory Panel 2 | Allplex™ Respiratory Panel 3 | Allplex™ PneumoBacter Assay | Allplex™ GI-Bacteria(I) Assay | … | Anyplex™II STI-12 Detection | Allplex™ HPV28 Detection

### 사용 컴포넌트

Description Number (11), Square (6), 1 Depth (6), Dropdown Outlined (3), 2 Depth (3), Table (2), Table/Filled Table Cell (2), ViewMode/Barchart (1), ViewMode/Data_List (1)

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

- 원문은 TI-STA-01-01 6-1과 같음

#### 5. 통계 대상(소모품 또는 시약) 선택 영역 : Legend

- Default
- Consumable 탭 활성화, 첫번째 소모품 선택 (단일 선택)
- 단, 검사 항목에 매핑된 필수 소모품 또는 시약 중 단가(Cost)가 하나라도 설정되지 않은 항목이 있는 경우, 해당 검사 항목은 비활성화 처리 됨
- 동작
- 최소 1개가 선택되어야함 (전체 해제 X)
- 표출 항목
- 참고 : TI-STA-07-01/Case 2

#### 6. [Export] 버튼

- 원문은 TI-STA-01-01 5와 같음

### 케이스

- TI-STA-07-01/Case: Case 1. Chart 상세 데이터 Tooltip / Case 2. Legend 유형별 노출 데이터

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | IA 화면 이름 "소모품 및 시약 사용량 - Chart" (한국어), 화면 타이틀 "Usage & Cost Trend", Figma 화면 이름 "Statistical Analysis" | IA 중메뉴 이름을 Inventory로, 화면 이름은 Usage & Cost Trend - Chart로 (Figma 기준). IA 수정 요청함 | `ia/change-requests.md` 3 | 대기 |
| R02 | 화면 정보 | Figma 경로 "Statistical Analysis > Inventory", IA는 Test Analytics 아래 | 메뉴 구조는 Statistical Analysis > Test Analytics / Instrument / Inventory / Event (Figma 기준). IA 수정 요청함 | `ia/change-requests.md` 1, POL-STA-001 규칙 1 | 대기 |
| R03 | 정책 반영 | "(Unit : USD)" 고정 | Cost Setting에서 고른 통화를 따름 | POL-TST-003 규칙 1 | 대기 |
| R04 | 디스크립션 | 5 "검사 항목에 매핑된 … 해당 검사 항목은 비활성화" (TI-STA-04-01에서 복사된 것으로 보임). 이 화면의 Legend는 Consumable·Reagent 품목 | 디스크립션에 넣음: Cost Setting에 단가가 없는 Consumable·Reagent는 Legend에서 고를 수 없도록 비활성. 화면 예시도 해당 품목을 비활성으로 | POL-STA-006 규칙 7 | 대기 |
| R05 | 디스크립션 | 5 Default "Consumable 탭 활성화, 첫번째 소모품 선택"인데 화면 예시는 드롭다운 "PCR"과 Reagent 제품명 목록 | 기본 상태 화면을 Default와 맞춤 | 화면 글자 | 대기 |
| R06 | 표기 | 사용량 단위 "(Unit : count)", 값은 "231 sets(23,100 ea)" | 디스크립션에 넣음: 사용량 단위는 (Unit : count). 품목별 세부 단위(sets, ea)는 Tooltip이나 Table에서 보여 줌. 화면 예시도 그렇게 | POL-STA-006 규칙 8 | 대기 |
| R07 | 표기 | "Anyplex™II STI-12 Detection" | Anyplex™ II STI-12 Detection | `glossary/test-items.csv` | 대기 |
| R08 | 디스크립션 | 0 "Inventory > Usage history", 참고 "LI-IVT-06-T" (T-IOS 화면) | Usage History, TI-IVT-06-T | `ia/ia-screens.csv` | 대기 |
| R09 | 디스크립션 | 2 "Chart 선택 시 꺾은선 그래프", 3-5는 세로 막대 + 꺾은선 | 3-5와 맞춤 | 디스크립션 | 대기 |
| R10 | 화면 정보 | "TI-STA-05_Skeleton" 참조 (TI-STA-05는 Test Forecasting) | Skeleton 프레임 CID 확인 | `ia/ia-screens.csv` | 대기 (확인 필요) |
| R11 | 디스크립션 | "소모품/시약", "첫번째 소모품" | Consumable / Reagent | `glossary/terms.csv` | 대기 |
| R12 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.14 | 2026-10-30 | Policy Setting : Cost Setting 입력 값에 따른 데이터 노출 조건 | 정다예 | Figma 버전 메모 |
