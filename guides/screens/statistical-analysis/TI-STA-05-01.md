---
cid: TI-STA-05-01
pair_cid:
tl_relation: 단독
title: Instrument Run-time - Chart
path: Statistical Analysis > Test Analytics > Instrument Run-time - Chart
type: Page
version: 2.1.03
date: 2026-08-21
author: 정다예
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3271-172484
figma_region: 2.1 2차
---
# TI-STA-05-01 Instrument Run-time - Chart

> 기존 화면(작업방 Statistical Analysis 페이지, 2.1 2차 영역, Ver 2.1.03)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴. Figma 화면 이름은 "Statistical Analysis", 경로는 "Statistical Analysis > Instrument" (IA는 Test Analytics 아래)
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-006, POL-EQP-005, POL-COM-006
- 호출하는 화면: Instrument Run-time - Table (TI-STA-05-02), Error Rate Trend Tab (TI-STA-06-01)
- 다른 프레임: Legend 선택 예시 [Prep Consumable Storage 선택](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3271-172263), [High-throughput Extraction 선택 (Unit 이름 M9600)](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3271-173134), [Sample Preparation 선택 (Unit: Sample Aliquot, Sample Pretreatment)](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3271-173356), [TI-STA-05-01/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3271-171114)

## 기존 화면

### 화면 글자

- (GNB)(LNB) TI-STA-01-01과 같음
- (Tab) Run-time Trend | Error Rate Trend
- (Segmented Control) Chart | Table
- Export
- Run-time Trend, (Unit : hour), Y축 0 hour ~ 20 hour
- (합계) Total | Sample Storage …
- Filter Options
- Date Range: Daily | Monthly
- Legend: Module | Unit, Module 드롭다운 "Sample Storage", Select All, Sample Storage 하위 항목 체크박스

### 사용 컴포넌트

Description Number (10), Square (6), 1 Depth (6), 2 Depth (5), Dropdown Outlined (3), Form/CheckBox (1), ViewMode/Barchart (1), ViewMode/Data_List (1)

### 디스크립션 (원문)

#### 0. Instrument _ Run-time Trend 화면

- 정의
- 사용자가 조회한 기간 내 장비 별 가동 시간 정보 제공
- 동작
- 최초 진입 후, 데이터 로딩 시 스켈레톤 화면 노출
- 참고 : TI-STA-05_Skeleton
- 데이터 산출식
- 가동 시간 = 상태가 Running 중인 시간의 총합

#### 1. 통계 지표 정보 영역(Tab)

- Default
- 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- 동작
- 활성 탭 변경 시, 각 Tab의 디폴트 세팅 값으로 재로딩
- 단일 선택, 다른 항목 선택 시 기존 활성화된 항목은 비활성화
- Tab 표출 항목
- Run-time Trend
- Error Rate Trend

#### 2. 차트 형태 영역(Segmented Control)

- Default
- 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- 동작
- Chart 선택 시 꺾은선 그래프로 표출 (참고 : TI-STA-05-01)
- Table 선택 시 표로 표출 (참고 : TI-STA-05-02)

#### 3. Run-time 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 가동 시간 변동 추이 비교 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 표출 항목
- 타이틀 : Run-time Trend
- 가동 시간 단위 정보 : (Unit : hour)
- 기간별/장비별 가동 시간 추이 차트 및 수치 정보

#### 3-1. 조회 기간(X축) 정보

- 동작
- 텍스트 겹침 방지를 위해 라이브러리의 Auto-skip 기능 활성화 및 가로 폭에 따른 라벨 개수 자동 최적화
- 표출 항목
- 사용자가 설정한 조회 기간 일자별/월별 날짜 표출

#### 3-2. 가동 시간(Y축) 정보

- 동작
- Y축의 최소값은 0으로 고정하며, 최대값은 조회된 데이터의
- 최고치에 따라 라이브러리가 자동 스케일링 하도록 설정
- 표출 항목
- 가동 시간 라벨 표출

#### 3-3. 데이터 뷰 영역(차트 or 테이블)

- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 마우스 오버 시 해당 시점의 상세 데이터 툴팁 팝업 노출
  - (참고 : TI-STA-05-01/Case 1)
- 표출 항목
- 선택 항목별 가동 시간 기반의 단일 또는 다중 꺾은선 형태로 표출

#### 3-4. 장비별 가동 시간 합계 정보

- 정의
- 필터에서 선택한 장비별 가동 시간 누적 합계 표출 영역
- 동작
- 선택 항목 변경 시 데이터 실시간 가변 연동
- 선택 항목이 영역을 넘어갈 경우 스크롤 노출
- 표출 항목
- Total (첫 순서 고정)
- ㄴ 선택된 장비 항목 기준, 조회 기간 내 누적 가동 시간 총합 표출
- 선택된 장비 항목
- ㄴ 개별 장비 항목별 조회 기간 내 누적 가동 시간 각각 표출
- ㄴ 마스터 코드 순서에 따라 노출

#### 4. 통계 일자 설정 영역 : Date Range

- 원문은 TI-STA-01-01 6-1과 같음

#### 5. 통계 대상(장비 항목) 선택 영역 : Legend

- Default
- Module 탭 활성화
- 드롭박스 내 첫번째 항목 Select, 하위 전체 항목 Select
- 동작
- Select All 선택 시 전체 항목 Select, 재 선택 시 전체 해제
- 전체 해제 시 범례 선택 안내 문구 노출
- ㄴ Please select one or more legends.
- ㄴ 참고 : TI-STA-05-01/Case 2
- 모든 하위 항목이 Select될 경우, [Select All] 버튼도 자동으로
- 활성화 상태로 변경
- 활성화된 개별 칩 중 단 하나라도 클릭하여 해제할 경우, [Select All] 버튼은 즉시 비활성화(Off) 상태로 동적 변경
- 표출 항목
- Module 단위 선택 시 노출 데이터
- ㄴ참고 : TI-STA-05-01/Case 3
- Unit 단위 선택 시 노출 데이터
- ㄴ참고 : TI-STA-05-01/Case 4

#### 6. [Export] 버튼

- 원문은 TI-STA-01-01 5와 같음

### 케이스

- TI-STA-05-01/Case: Case 1. Chart 상세 데이터 Tooltip / Case 2. Legend 전체 해제 시 / Case 3. Legend 유형별 Dropdown 노출 데이터 / Case 3. Module 단위 선택 시 노출 데이터 / Case 4. Unit 단위 선택 시 노출 데이터

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | IA에서 TI-STA-05는 Test Forecasting인데 Run-time이 TI-STA-05-01·05-02로 그 아래 번호를 씀. 디스크립션 "TI-STA-05_Skeleton"도 같은 번호 | Test Forecasting이 TI-STA-09로 바뀌므로 Run-time CID(TI-STA-05-01·05-02)는 그대로 둠 | `ia/change-requests.md` 2 | 대기 |
| R02 | 화면 정보 | Figma 경로 "Statistical Analysis > Instrument", IA 경로 "Statistical Analysis > Test Analytics > Instrument Run-time - Chart" | 메뉴 구조는 Statistical Analysis > Test Analytics / Instrument / Inventory / Event (Figma 기준). IA 수정 요청함 | `ia/change-requests.md` 1, POL-STA-001 규칙 1 | 대기 |
| R03 | 정책 반영 | 산출식 "상태가 Running 중인 시간의 총합"만 있음. 표시 단위(분 버림), 집계 대상(Module, Device) 없음 | POL-EQP-005 규칙 1, 4와 맞춤 | POL-EQP-005 | 대기 |
| R04 | 디스크립션 | "장비 별", "장비 항목" (Module·Unit을 뜻함) | Module / Unit | `glossary/terms.csv` Instrument | 대기 |
| R05 | 표기 | 다른 프레임의 "Prep Consumable Storage(1)", "Sample Preparation(1)" 등 이름과 번호 붙여 씀 | Prep Consumable Storage (1) | `glossary/terms.csv` Module | 대기 |
| R06 | 케이스 | TI-STA-05-01/Case에 Case 3이 두 번 | 번호 정리 | 케이스 | 대기 |
| R07 | 디스크립션 | 2 Segmented Control에 "첫번째 탭" | 첫 번째 항목 (Tab과 Segment Control 구분) | `glossary/terms.csv` Tab | 대기 |
| R08 | 화면 정보 | Figma 화면 이름 "Statistical Analysis", IA 이름 "Instrument Run-time - Chart" | 하나로 통일 | `ia/ia-screens.csv` | 대기 (확인 필요) |
| R09 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.03 | 2026-08-21 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
