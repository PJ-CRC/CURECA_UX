---
cid: TI-STA-06-01
pair_cid:
tl_relation: 단독
title: Instrument Error Rate - Chart
path: Statistical Analysis > Test Analytics > Instrument Error Rate - Chart
type: Page
version: 2.1.03
date: 2026-08-21
author: 정다예
service_mode: []
user_type: [Service]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3271-172675
figma_region: 2.1 2차
---
# TI-STA-06-01 Instrument Error Rate - Chart

> 기존 화면(작업방 Statistical Analysis 페이지, 2.1 2차 영역, Ver 2.1.03)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴. Error Rate Trend Tab은 Service에게만 보임 (디스크립션 1, `policy/permission-matrix.csv` Instrument Error Rate 표시). Figma 경로는 "Statistical Analysis > Instrument"
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-006, POL-EQP-010, POL-COM-006
- 호출하는 화면: Instrument Error Rate - Table (TI-STA-06-02), Run-time Trend Tab (TI-STA-05-01)
- 다른 프레임: [TI-STA-06-01/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3271-171924) (패널 CID는 "TI-STA-05-01/Case")

## 기존 화면

### 화면 글자

- (GNB)(LNB) TI-STA-01-01과 같음
- (Tab) Run-time Trend | Error Rate Trend, (Segmented Control) Chart | Table, Export
- Error Rate Trend (Cumulative), (Unit : %), Y축 10% ~ 30%
- (합계) Prep Consumable Storage(1) 10% | (2) 11% | (3) 13% | (4) 16%
- Filter Options: Date Range (Daily | Monthly), Legend (Module | Unit, Module 드롭다운 "Prep Consumable Storage", Select All, Prep Consumable Storage(1) ~ (4) 체크박스)

### 사용 컴포넌트

Description Number (10), Square (6), 1 Depth (6), 2 Depth (5), Form/CheckBox (5), Dropdown Outlined (3), ViewMode/Barchart (1), ViewMode/Data_List (1)

### 디스크립션 (원문)

- 3-1, 4, 5, 6의 원문은 TI-STA-05-01 3-1, 4, 5, 6과 같음

#### 0. Instrument _ Error Rate Trend 화면

- 정의
- 사용자가 조회한 기간 내 장비 별 누적 에러율 정보 제공
- 동작
- 최초 진입 후, 데이터 로딩 시 스켈레톤 화면 노출
- 참고 : TI-STA-05_Skeleton
- 데이터 산출식
- (에러 횟수 / 전체 구동 횟수) * 100
- 구동 횟수 기준 : DWP가 장비에 입고되는 기준 +1씩 카운팅
- 에러 횟수 기준 : 씨젠 측에서 에러코드 정의 후 공유될 예정

#### 1. 통계 지표 정보 영역(Tab)

- Default
- 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- 동작
- 활성 탭 변경 시, 각 Tab의 디폴트 세팅 값으로 재로딩
- 단일 선택, 다른 항목 선택 시 기존 활성화된 항목은 비활성화
- Tab 표출 항목
- Run-time Trend
- Error Rate Trend
- 노출 조건
- Error Rate Trend는 Account Type이 Sevice일 경우만 노출

#### 2. 차트 형태 영역(Segmented Control)

- Default
- 최초 화면 진입 시 첫번째 탭을 기본 선택 상태로 노출
- 동작
- Chart 선택 시 꺾은선 그래프로 표출 (참고 : TI-STA-06-01)
- Table 선택 시 표로 표출 (참고 : TI-STA-06-02)

#### 3. 누적 Error Rate 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 누적 에러율 추이 비교 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 표출 항목
- 타이틀 : Error Rate Trend (Cumulative)
- 가동 시간 단위 정보 : (Unit : %)
- 기간별/장비별 누적 에러율 추이 차트 및 수치 정보

#### 3-2. 에러율(Y축) 정보

- 동작
- Y축의 최소값은 0으로 고정하며, 최대값은 조회된 데이터의
- 최고치에 따라 라이브러리가 자동 스케일링 하도록 설정
- 표출 항목
- 에러율 라벨 표출

#### 3-3. 데이터 뷰 영역(차트 or 테이블)

- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 마우스 오버 시 해당 시점의 상세 데이터 툴팁 팝업 노출
  - (참고 : TI-STA-06-02/Case 1)
- 표출 항목
- 선택 항목별 에러율 기반의 단일 또는 다중 꺾은선 형태로 표출

#### 3-4. 장비별 누적 에러율 정보

- 정의
- 필터에서 선택한 장비별 누적 에러율 표출 영역
- 동작
- 선택 항목 변경 시 데이터 실시간 가변 연동
- 선택 항목이 영역을 넘어갈 경우 스크롤 노출
- 표출 항목
- 선택된 장비 항목
- ㄴ 개별 장비 항목별 조회 기간 내 누적 에러율 각각 표출
- ㄴ 마스터 코드 순서에 따라 노출

### 케이스

- TI-STA-06-01/Case: Case 1. Chart 상세 데이터 Tooltip / Case 2. Legend 전체 해제 시

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 정책 반영 | 권한표에서 Statistical Analysis는 User Type 모두 O, Error Rate 표시는 Service만 (Instrument 행에만 있음). 이 화면은 디스크립션 1에서 Service만 노출 | 디스크립션 그대로: Error Rate Trend Tab은 User Type이 Service일 때만 보여 줌. 권한표에 Error Rate Trend 행 추가함 | `policy/permission-matrix.csv`, POL-STA-001 규칙 2 | 대기 |
| R02 | 표기 | "Account Type이 Sevice" | User Type이 Service | `glossary/terms.csv`, 오타 | 대기 |
| R03 | 정책 반영 | 산출식 "(에러 횟수 / 전체 구동 횟수) * 100", 구동 횟수는 "DWP 입고 기준", 에러 횟수는 씨젠 정의 예정. POL-EQP-010은 Consumable 부족·Waste Bin Full 중단을 제외 | 디스크립션에 넣음: 총 가동 횟수와 가동 실패 횟수는 POL-EQP-010의 Module별 기준으로 셈. "DWP 입고 기준 +1" 문구는 지움 | POL-STA-006 규칙 6, POL-EQP-010 | 대기 |
| R04 | 디스크립션 | 3 "가동 시간 단위 정보 : (Unit : %)" | 에러율 단위 정보 | 디스크립션 | 대기 |
| R05 | 디스크립션 | 3-3 참고 "TI-STA-06-02/Case 1" (없는 프레임) | TI-STA-06-01/Case > Case 1 | 케이스 | 대기 |
| R06 | 화면 정보 | 케이스 프레임 이름은 TI-STA-06-01/Case, 패널 CID는 "TI-STA-05-01/Case" | TI-STA-06-01/Case | Figma 화면 정보 | 대기 |
| R07 | 화면 정보 | TI-STA-05(Test Forecasting)와 CID 계층이 겹침 ("TI-STA-05_Skeleton" 참조 포함), Figma 경로와 IA 경로가 다름 | TI-STA-05-01 반영 대기 목록 1, 2와 같음 | `ia/change-requests.md` 1·2 | 대기 |
| R08 | 표기 | 차트 범례 "Prep Consumable / Storage(1)" (줄바꿈), "Prep Consumable Storage(1)" | Prep Consumable Storage (1) | `glossary/terms.csv` Module | 대기 |
| R09 | 디스크립션 | "장비 별", "에러율" | Module / Unit, Error Rate | `glossary/terms.csv`, `screen-fixes/README.md` | 대기 |
| R10 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.03 | 2026-08-21 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
