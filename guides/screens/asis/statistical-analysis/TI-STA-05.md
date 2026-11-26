---
cid: TI-STA-05
pair_cid:
tl_relation: 단독
title: Test Forecasting
path: Statistical Analysis > Test Forecasting
type: Page
version: 2.0
date: 2026.06.15
author: 정다예
client_mode: []
user_type: [Service, Admin, User]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-478882
---
# TI-STA-05 Test Forecasting

> 기존 화면(작업방 `SA_Test Forecasting_asis` 페이지, Ver 2.0)을 2026-11-26에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: 없음 (툴팁 · 케이스만)
- 호출되는 곳: LNB > Statistical Analysis > Test Forecasting
- 관련 정책: POL-STA-001, POL-STA-005
- CID: IA 변경 요청 2번(`ia/change-requests.md`)에 Instrument Run-time(TI-STA-05-01 · 05-02)과 계층이 겹쳐 TI-STA-09로 바꾸자는 안이 있습니다(요청 전). 원본 CID 그대로 둡니다.
- 기획 프레임 밖에는 섹션 `통계 예측 관련 정책`([3543:479674](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-479674))이 있습니다(옮기지 않음).

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Network Status | Instrument | L-IOS | D.A PC | Running | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Test Forecasting | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Test Analytics | Test Forecasting | Setting | Information | Manual | Keira Knightley
- 조회 조건: Forecast Range 1 Week | 2 Weeks | 1 Month | Product All (Dropdown) | Apply
- All Tests Count Prediction
- 요약: Historical Test — Average 6,504 | Max 8,000 | Min 2,000 / Forcasted Test — Average 7,604 | Max 9,500 | Min 3,800 / Predicted Change 5%
- 차트: (Unit : count) | 범례 Actual | Forecast
  - Y축 10000 · 8000 · 6000 · 4000 · 2000 · 0
  - X축 03-11 | 03-13 | 03-15 | 03-17 | 03-19 | 03-21 | 03-23 | 03-25 | 03-27 | 03-29 | 03-31 | 04-02 | 04-04 | 04-06 | 04-08 | 04-10 (Today) | 04-12 | 04-14 | 04-16

### 사용 컴포넌트

Description Number (13), 1 Depth (7), Square (4), Interface/Info_Circle_Outlined (2), profile (1), Layout/Align_Right_05_Solid (1), Form/Dropdown Box (1), Frame (1)

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

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 같은 페이지의 별도 프레임 `TI-STA-05/Case`([3543:479181](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-479181), 2252×3178)에 있습니다. 케이스마다 오른쪽 패널이 있습니다(CID `TI-STA-05/Case`, 작성자 정다예, Ver 2.0, Date 2026.06.15). 디스크립션은 Case 1에만 있고 Case 2 ~ 5는 `0`입니다. 프레임 칸의 y는 케이스 제목 글자 자리입니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Chart 상세 데이터 Tooltip | 차트 내 특정 시점에 마우스 호버 | 위 프레임 y 16 |
| 2 | 데이터 로딩 중 Case | 데이터 로딩 중 | 위 프레임 y 788 |
| 3 | 최초 진입 시 (예측 조건 조회 전) | 최초 진입 (Forecast Range 미선택) | 위 프레임 y 1562 |
| 4 | Forecast Range Tooltip | Forecast Range 안내 아이콘 | 위 프레임 y 2408 |
| 5 | Predicted Change Tooltip | Predicted Change 안내 아이콘 | 위 프레임 y 2780 |

- Case 1 패널
  - 1 Chart 상세 데이터 Tooltip — 노출 조건: 차트 내 특정 시점(일별 막대 또는 월별 막대)에 마우스 호버시 해당 마우스 포인터 위치를 기준으로 팝업 노출
  - 1-1 시점 정보 — 표출 항목: 호버된 해당 일자 정보 표출
  - 1-2 지표별 상세 정보 — 표출 항목: Test Count 행 / ㄴ 해당 시점의 총 검사 건수 수치 표출
  - 툴팁 예시: 04-10 / Test Count 4,000 (설명용 확대본과 차트 위 두 자리에 있음). 화면은 기획 화면과 같음
- Case 2: 요약 값이 모두 `-`(Historical Test · Forcasted Test Average · Max · Min, Predicted Change), 차트는 (Unit : count)만
- Case 3: 요약 값 모두 `-`, 차트 자리에 `Please select a target and forecast range.` 안내
- Case 4
  - 설명: 예측 범례 선택에 따른 과거 데이터 및 예측 데이터 기간 안내 문구 노출
  - Forecast Range 툴팁: 1 Week : 7d Forecast based on 30d past data / 2 Weeks : 15d Forecast based on 60d past data / 1 Month : 30d Forecast based on 90d past data
- Case 5: Predicted Change 5% 툴팁 `Predicted Max vs Past Avg.`
