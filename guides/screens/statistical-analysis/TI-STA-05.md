---
cid: TI-STA-05
pair_cid:
tl_relation: 단독
title: Test Forecasting
path: Statistical Analysis > Test Forecasting
type: Page
version: 2.0
date: 2026-06-15
author: 정다예
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2138-1079411
figma_region: 2.1 2차
---
# TI-STA-05 Test Forecasting

> 기존 화면(작업방 Statistical Analysis 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴
- 관련 정책: POL-STA-001, POL-STA-005
- 다른 프레임: [TI-STA-05/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2138-1079710)

## 기존 화면

### 화면 글자

- (GNB) TI-STA-01-01과 같음
- (LNB) Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis (Test Analytics, Test Forecasting) | Setting | Information | Manual | Keira Knightley
- Forecast Range: 1 Week | 2 Weeks | 1 Month, Product: All, Apply
- All Tests Count Prediction
- Historical Test | Forcasted Test | Predicted Change
- Max 8,000 / Average 6,504 / Min 2,000 | Max 9,500 / Average 7,604 / Min 3,800 | 5%
- (Unit : count), X축 오늘 날짜 아래 "04-10 (Today)"
- (차트 범례) Actual | Forecast

### 사용 컴포넌트

Description Number (13), 1 Depth (7), Square (4), Interface/Info_Circle_Outlined (2), Form/Dropdown Box (1)

### 디스크립션 (원문)

#### 0. Test Forecasting 화면

- 정의
- 사용자 선택한 예측 일자 기준으로 과거 데이터 및 예측 데이터 비교 정보 제공

#### 1. 예측 기간 및 검사 항목 대상 선택 영역

- Forecast Range
- Default : 미선택 상태
- 선택 옵션 (택 1): 1 Week / 2 Weeks / 1 Month
- 선택 시 내부 데이터 계산 방식
- ㄴ 1 Week 선택 : 어제 기준 최근 30일 과거 데이터를 통해 오늘 포한 7일 미래 데이터 예측
- ㄴ 2 Weeks 선택 : 어제 기준 최근 60일 과거 데이터를 통해 오늘 포한 15일 미래 데이터 예측
- ㄴ 1 Month 선택 : 어제 기준 최근 90일 과거 데이터를 통해 오늘 포한 30일 미래 데이터 예측
- Product
- Default : All 상태
- 선택 옵션 (택 1) : All, RP1, RP2, RP3, PB, GI-V, GI-B1, GI-B2, GI-P, Allplex HPV28, STI-12
- 최초 진입 시 화면 참고 : TI-STA-05/Case > Case 3

#### 1-1. 예측 기간 선택에 따른 데이터 표출 안내 툴팁

- 표출 항목
- 1 Week : 7d Forecast based on 30d past data
- 2 Weeks : 15d Forecast based on 60d past data
- 1 Month : 30d Forecast based on 90d past data
- 참고 : TI-STA-05/Case > Case 4

#### 1-2. [Apply] 버튼

- 선택된 모든 조회 조건을 AND 적용하여 검색 결과 노출

#### 2. 과거 및 예측 정보 영역 타이틀

- 동작
- 사용자가 선택한 Product에서 선택된 검사 항목에 따라 데이터를
- 가변하여 노출
- 표출 항목
- {조회조건 내 Product에서 선택된 값} Tests Count Prediction
- 예시 : 조회조건 내 Product에서 RP1 선택 시, ‘RP1 Tests Count Prediction’ 노출

#### 2-1. 과거 데이터 요약 정보

- Average 값
- 데이터 계산 방식에 적용된 과거 데이터의 일 평균 검사 건수
- Max 값
- 데이터 계산 방식에 적용된 과거 데이터 중 가장 검사 건수가 많은 일자의 검사 건 수
- Min 값
- 데이터 계산 방식에 적용된 과거 데이터 중 가장 검사 건수가 적은 일자의 검사 건 수

#### 2-2. 예측 데이터 요약 정보

- Average 값
- 예측된 데이터의 일 평균 검사 건수
- Max 값
- 예측된 데이터 중 가장 검사 건수가 많은 일자의 검사 건 수
- Min 값
- 예측된 데이터 중 가장 검사 건수가 적은 일자의 검사 건 수

#### 2-3. 예측 데이터 요약 정보

- 과거 데이터 (평균) 대비 예측 데이터 (MAX) 값 비교 값 %

#### 2-4. 예측 데이터 요약 정보 안내 툴팁

- 표출 항목
- Predicted Max vs Past Avg.
- 참고 : TI-STA-05/Case > Case 5

#### 3. 검사 예측 건수 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 과거 실제 검사 건수 추이와 미래 예측 건수 변동 추이를 비교하여 제공하는 통계 영역

#### 3-1. 검사 건수(Y축) 정보

- 동작
- Y축의 최소값은 0으로 고정, 최대값은 조회 또는 예측된 검사 건수의 최고치에 따라 라이브러리가 자동 스케일링 하도록 설정
- 표출 항목
- 검사 건수 라벨 표출
- 검사 건 수 단위 정보 (Unit : count)

#### 3-2. 조회 기간(X축) 정보

- 동작
- 텍스트 겹침 방지를 위해 라이브러리의 Auto-skip 기능 활성화 및 가로 폭에 따른 라벨 개수 자동 최적화
- 표출 항목
- 사용자가 조회한 예측 일자에 따른 과거 및 예측 일자 표출
- 오늘 날짜 라벨 하단에 (Today) 고정 문구 표출

#### 3-3. 데이터 뷰 영역

- 동작
- Default : 예측 대상 및 기간을 선택해 달라는 안내 문구 노출
- ㄴ 참고 : TI-STA-05/Case > Case 3
- 최종 예측 일자 기준 최대 60일 데이터를 화면에 우선 노출
- 전체 데이터가 60일을 초과하는 경우, 나머지 과거 일자의 데이터는 스크롤 생성 : 좌측에서 우측 방향(좌 ➔ 우)
- 마우스 오버 시 해당 시점의 상세 데이터 툴팁 팝업 노출
- ㄴ 참고: TI-STA-05/Case > Case 1
- 표출 항목
- Actual Data
- ㄴ 과거 실제 발생한 검사 건수를 꺾은선(실선) 및 세로 막대 결합
- 형태로 노출
- Forecast Data
- ㄴ 미래 예측 검사 건수를 꺾은선(점선) 및 세로 막대 결합 형태로
- 노출

#### 4. 차트 범례 영역

- 노출 조건
- 상시 고정 노출
- 표출 항목
- Actual
- ㄴ 실제 검사 건수 막대와 매핑되는 컬러칩, 명칭 노출
- Forecast
- ㄴ예측 검사 건수 라인/막대와 매핑되는 컬러칩, 명칭 노출

### 케이스

- TI-STA-05/Case: Case 1. Chart 상세 데이터 Tooltip / Case 2. 데이터 로딩 중 Case / Case 3. 최초 진입 시 (예측 조건 조회 전) / Case 4. Forecast Range Tooltip / Case 5. Predicted Change Tooltip

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 표기 | 화면 "Forcasted Test" | Forecasted Test | 오타 | 대기 |
| R02 | 디스크립션 | 1 "오늘 포한" | 오늘 포함 | 오타 | 대기 |
| R03 | 디스크립션 | 2 Weeks 선택 시 "15일 미래 데이터 예측" (2주는 14일) | 디스크립션에 넣음: 2 Weeks는 15일 예측이 맞음 (툴팁 "15d" 유지) | POL-STA-005 규칙 7 | 대기 |
| R04 | 화면 정보 | IA에서 TI-STA-05는 Test Forecasting, TI-STA-05-01·05-02는 Instrument Run-time으로 CID 계층이 겹침 | IA 수정 후 Test Forecasting CID를 TI-STA-09로 바꿈 | `ia/change-requests.md` 2 | 대기 |
| R05 | 디스크립션 | 2 "{Product 선택 값} Tests Count Prediction", 화면 "All Tests Count Prediction" | 문구 확인 (Tests Count / Test Count) | 화면 글자 | 대기 (확인 필요) |
| R06 | 화면 글자 | 2-3 Predicted Change 예시 5%가 2-1 Average 6,504 대비 2-2 Max 9,500 계산과 맞지 않음 | 예시 데이터 맞춤 | 디스크립션 2-3 | 대기 |
| R07 | 디스크립션 | 예측 계산 방식(모델)이 없음 | 디스크립션에 넣음: 예측 계산 방식은 개발에서 관리하므로 디스크립션에 식을 적지 않음 | POL-STA-005 규칙 9 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
