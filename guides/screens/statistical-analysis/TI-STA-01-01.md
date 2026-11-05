---
cid: TI-STA-01-01
pair_cid:
tl_relation: 단독
title: Test Count - Chart
path: Statistical Analysis > Test Analytics > Test Count - Chart
type: Page
version: 2.1.01
date: 2026-08-07
author: 정다예
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2138-1075431
figma_region: 2.1 2차
---
# TI-STA-01-01 Test Count - Chart

> 기존 화면(작업방 Statistical Analysis 페이지, 2.1 2차 영역, Ver 2.1.01)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴. Figma 화면 이름은 "Test Analytics _ Test Count"
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-004, POL-COM-006
- 호출하는 화면: Test Count - Table (TI-STA-01-02, View의 Table), 다른 Key Metrics 화면 (TI-STA-02-01, TI-STA-03-01, TI-STA-04-01)
- 다른 프레임: [TI-STA-01/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2138-1077425) (Test Analytics 공통 케이스)

## 기존 화면

### 화면 글자

- (GNB) Network Status | Instrument | L-IOS | D.A PC | Running | Event | Error 3 | Warning 2 | 2026-04-10 11:30 | TIOS
- (LNB) Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis (Test Analytics, Test Forecasting) | Setting | Information | Manual | Keira Knightley
- Test Count | Export
- Key Metrics: Test Count | Test Ratio | Test TAT | Test Cost
- (합계 표) Total | RP1 | RP2 | RP3 | PB | GI-V | GI-B1 | GI-B2 | GI-P | Allplex HPV28 | STI-12
- 368,950 | 40,250 | 33,700 | … (항목별 건수)
- (Unit : count), Y축 2,000 ~ 10,000
- (차트 범례) RP1 | RP2 | RP3 | PB | GI-V | GI-B1 | GI-B2 | GI-P | Allplex HPV28 | STI-12
- Filter Options
- Date Range: Daily | Monthly
- Legend: Product | Sample Type, Select All, RP1 ~ STI-12 칩
- View: Chart | Table

### 사용 컴포넌트

Square (22), Description Number (12), Table (11), Table/Filled Table Cell (11), 1 Depth (7), Dropdown Outlined (2)

### 디스크립션 (원문)

#### 0. Test Analytics _ Test Count 화면

- 정의
- 사용자가 조회한 기간 내 검사 항목 별 검사 건 수 정보 제공

#### 1. 차트 타이틀

- 정의
- 사용자가 선택한 Key Metrics 항목 노출

#### 2. 검사 항목별 검사 건 수 합계 정보 영역

- 정의
- 필터에서 선택한 검사 항목별 검사 건수 누적 합계 표출 영역
- 동작
- 전체 테이블 너비 100% 고정
- 노출 열 개수에 따라 너비 자동 균등 분할
- 선택 항목 변경 시 데이터 실시간 가변 연동
- 테이블 표출 항목
- Total (첫 번째 열 고정)
- ㄴ 선택된 검사 항목 기준, 조회 기간 내 누적 검사 건수 총합 표출
- 검사 항목별 열 (RP1 ~ STI-12 등)
- ㄴ 선택된 개별 검사 항목별, 조회 기간 내 누적 검사 건수 각각 표출
- ㄴ 마스터 코드 순서에 따라 좌→우 고정 배치

#### 3. 검사 건수 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 검사 건수 변동 추이 비교 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영

#### 3-1. 조회 기간(X축) 정보

- 동작
- 텍스트 겹침 방지를 위해 라이브러리의 Auto-skip 기능 활성화 및 가로 폭에 따른 라벨 개수 자동 최적화
- 표출 항목
- 사용자가 설정한 조회 기간 일자별/월별 날짜 표출

#### 3-2. 검사 건 수(Y축) 정보

- 동작
- Y축의 최소값은 0으로 고정하며, 최대값은 조회된 데이터의
- 최고치에 따라 라이브러리가 자동 스케일링 하도록 설정
- 표출 항목
- 검사 건수 라벨 표출
- 검사 건 수 단위 정보 (Unit : count)

#### 3-3. 데이터 뷰 영역(차트 or 테이블)

- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 마우스 오버 시 해당 시점의 상세 데이터 툴팁 팝업 노출
  - (참고 : TI-STA-01/Case > Case 1)
- 표출 항목
- 선택 항목별 검사 건수 기반의 다중 꺾은선 형태로 표출

#### 4. 차트 범례 영역

- 노출 조건
- 사용자가 선택한 검사 항목이 1개 이상일 경우 영역 노출
- 사용자가 선택한 검사 항목이 0개일 경우 해당 영역 미노출
- 참고 : TI-STA-01/Case > Case 3

#### 5. [Export] 버튼

- 정의
- 화면에 표출된 통계 데이터 및 설정값을 CSV 파일로 내보내는
- 기능 버튼
- 동작
- 클릭 시 OS 파일 탐색기가 호출되어 사용자가 저장 경로 및
- 파일명을 지정하여 다운로드
- 포맷 (Format) : .csv
- 포함 데이터
- 범례 설정값, 필터 조건, 테이블 집계 결과값 등 화면 내 표출된 전체 데이터셋 포함

#### 6. 통계 지표 정보

- Default : Test Count 선택
- 동작
- 단일 선택, 다른 항목 선택 시 기존 활성화된 항목은 비활성화
- 필터 옵션 변경 이후 다른 지표를 선택할 경우, 각 Filter Options의 디폴트 세팅 값으로 재로딩
- 데이터 로딩 시 화면 노출 (참고 : TI-STA-01/Case > Case 2)
- 표출 항목
- Test Count, Test Ratio, Test TAT, Test Cost

#### 6-1. 통계 일자 설정 영역 : Date Range

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

#### 6-2. 통계 대상(검사 항목) 선택 영역 : Legend

- Default : Product 탭 활성화, 전체 항목 Select
- Select All 선택 시 전체 항목 Select, 재 선택 시 전체 해제
- 전체 해제 시 범례 선택 안내 문구 노출
- Please select one or more legends.
- 참고 : TI-STA-01/Case > Case 3
- 모든 검사 항목이 Select될 경우, [Select All] 버튼도 자동으로
- 활성화 상태로 변경
- 활성화된 개별 칩 중 단 하나라도 클릭하여 해제할 경우, [Select All] 버튼은 즉시 비활성화(Off) 상태로 동적 변경
- 표출 항목
- Product 탭 선택 시
  - ㄴ RP1, RP2, RP3, PB, GI-V, GI-B1, GI-B2, GI-P, Allplex HPV28, STI-12
- Sample Type 탭 선택 시
  - ㄴ Swab, Aspirate, BAL, Saliva, Sputum, Raw stool, Cary-blair, eNAT stool, Fecal swab, Thinprep, Surepath, Cellpreserv, Urine, Semen
- 참고 : TI-STA-01/Case > Case 4
- 정렬 (표출 항목)
- 공통 UX 참고 : COMM-4-a

#### 6-3. 차트 형태 선택 영역

- Chart 선택 시 꺾은선 그래프로 표출
- 참고 : TI-STA-01-01
- Table 선택 시 표로 표출
- 참고 : TI-STA-01-02

### 케이스

- TI-STA-01/Case: Case 1. Chart 상세 데이터 Tooltip / Case 2. 데이터 로딩 중 Case / Case 3. Legend 전체 해제 시 / Case 4. Legend 유형별 노출 데이터

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | Figma 화면 이름 "Test Analytics _ Test Count", IA 이름 "Test Count - Chart" | 하나로 통일 | `ia/ia-screens.csv` | 대기 (확인 필요) |
| R02 | 디스크립션 | 6-2 Product 칩이 10개(RP1 ~ STI-12)로 고정 표기. 검사 항목 목록은 30개 | 디스크립션에 넣음: Product 칩은 Assay Pack으로 등록된 검사 항목 기준이며, 그 사이트가 검사하는 항목이 모두 나옴(30개 모두일 수도 있음). 화면 예시도 등록된 검사 항목으로 보여 줌 | POL-STA-003 규칙 9 | 대기 |
| R03 | 디스크립션 | 2 "마스터 코드 순서", 6-2 정렬 "COMM-4-a"로 정렬 기준이 두 곳에 다르게 적힘 | 디스크립션에 넣음: 정렬은 Common UX 정렬 규칙을 따르고, 규칙이 없는 항목은 오름차순. "마스터 코드 순서" 문구는 지움 | POL-STA-003 규칙 10 | 대기 |
| R04 | 디스크립션 | 3-3 제목 "데이터 뷰 영역(차트 or 테이블)"인데 Chart 화면 설명만 있음 | 제목 정리 | 디스크립션 | 대기 |
| R05 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |
| R06 | 정책 반영 | 검사 건수 집계 기준이 없음 | 디스크립션에 넣음: 검사 건수는 오더 기준으로 세며 Completed, Failed와 관계없이 모두 셈 | POL-STA-004 정의 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | [5] Export 선택 시 노출 내용 수정 | 정다예 | Figma 버전 메모 |
