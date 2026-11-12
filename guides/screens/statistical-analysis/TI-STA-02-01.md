---
cid: TI-STA-02-01
pair_cid:
tl_relation: 단독
title: Test Ratio (%) - Chart
path: Statistical Analysis > Test Analytics > Test Ratio (%) - Chart
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2138-1076048
figma_region: 2.1 2차
---
# TI-STA-02-01 Test Ratio (%) - Chart

> 기존 화면(작업방 Statistical Analysis 페이지, 2.1 2차 영역, Ver 2.1.01)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴. Figma 화면 이름은 "Test Analytics _ Test Ratio"
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-004, POL-COM-006
- 호출하는 화면: Test Ratio (%) - Table (TI-STA-02-02)
- 다른 프레임: [TI-STA-02/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2138-1078279)

## 기존 화면

### 화면 글자

- (GNB)(LNB) TI-STA-01-01과 같음
- Test Ratio | Export
- Key Metrics: Test Count | Test Ratio | Test TAT | Test Cost
- (합계 표) Total | RP1 ~ STI-12
- 100%(368,950) | 10.3%(4,830) | 8.7%(4,060) | … (비율%(건수))
- (Unit : count), Y축 2,000 ~ 10,000, 차트 범례 RP1 ~ STI-12
- Filter Options: Date Range (Daily | Monthly), Legend (Product | Sample Type, Select All, 칩), View (Chart | Table)

### 사용 컴포넌트

Square (22), Description Number (12), Table (11), Table/Filled Table Cell (11), 1 Depth (7), Dropdown Outlined (2)

### 디스크립션 (원문)

- 4, 5, 6, 6-1, 6-2의 원문은 TI-STA-01-01 4, 5, 6, 6-1, 6-2와 같음 (6의 Default도 "Test Count 선택"으로 같음)

#### 0. Test Analytics _ Test Ratio 화면

- 정의
- 지정한 조회 기간 내 검사 항목별 차지하는 비율(비중) 정보 제공

#### 1. 차트 타이틀

- 정의
- 사용자가 선택한 Key Metrics 항목 노출

#### 2. 검사 항목별 검사 건 수 및 비율(비중) 정보 영역

- 정의
- 필터에서 선택한 검사 항목별 검사 건수 및 비율(비중) 표출 영역
- 동작
- 전체 테이블 너비 100% 고정
- 노출 열 개수에 따라 너비 자동 균등 분할
- 선택 항목 변경 시 데이터 실시간 가변 연동
- 테이블 표출 항목
- Total (첫 번째 열 고정)
- ㄴ 선택 항목 기준의 누적 검사 건수 총합을 100%(총 건수) 형태로 표출
- 검사 항목별 열 (RP1 ~ STI-12 등)
- ㄴ 선택 항목별 백분율 점유율과 누적 건수를 비율%(개별 건수) 형태로 각각 표출
- ㄴ 마스터 코드 순서에 따라 좌→우 고정 배치

#### 3. 검사 비율 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 검사 비율 추이 통계 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영

#### 3-1. 조회 기간(X축) 정보

- TI-STA-01-01 3-1과 같음

#### 3-2. 검사 건 수 및 비율(Y축) 정보

- 동작
- Y축의 최소값은 0으로 고정하며, 최대값은 조회된 데이터의
- 최고치에 따라 라이브러리가 자동 스케일링 하도록 설정
- 표출 항목
- 해당 일자 또는 월별 누적 검사 건 수
- 검사 건 수 단위 정보 (Unit : count)

#### 3-3. 데이터 뷰 영역(차트 or 테이블)

- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 마우스 오버 시 해당 시점의 상세 데이터 툴팁 팝업 노출
  - (참고 : TI-STA-02/Case > Case 1)
- 표출 항목
- 선택 항목별 검사 건수 기반의 누적 막대 형태로 표출

#### 6-3. 차트 형태 선택 영역

- Chart 선택 시  누적 막대 그래프로 표출
- 참고 : TI-STA-02-01
- Table 선택 시 표로 표출
- 참고 : TI-STA-02-02

### 케이스

- TI-STA-02/Case: Case 1. Chart 상세 데이터 Tooltip / Case 2. Legend 유형별 노출 데이터

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 6 "Default : Test Count 선택"이 Test Ratio 화면에도 그대로 있음 | 메뉴 진입 기본값(Test Count)인지 화면별 선택 상태인지 구분해 씀 | 디스크립션 | 대기 |
| R02 | 화면 글자 | 예시 숫자: Total 100%(368,950)인데 항목 건수 합계가 맞지 않음 (4,830 + 4,060 + …) | 예시 데이터 맞춤 | 화면 글자 | 대기 |
| R03 | 디스크립션 | 6-2가 참조하는 Case 4(Legend 유형별)는 TI-STA-01/Case에 있고, TI-STA-02/Case에는 Case 2로 따로 있음 | 참조 케이스 정리 | 케이스 | 대기 |
| R04 | 화면 정보 | Figma 화면 이름 "Test Analytics _ Test Ratio", IA 이름 "Test Ratio (%) - Chart" | 하나로 통일 | `ia/ia-screens.csv` | 대기 (확인 필요) |
| R05 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |
| R06 | 정책 반영 | 2 비율 표기 "비율%(개별 건수)" | 디스크립션에 넣음: 비율은 반올림한 정수(%), 0% 초과 0.5% 미만은 "<1%", 실제 0건만 0%. 화면 예시도 정수(%)로 | POL-STA-004 규칙 2 | 대기 |
| R07 | 정책 반영 | 검사 건수 집계 기준이 없음 | 디스크립션에 넣음: 검사 건수는 오더 기준으로 세며 Completed, Failed와 관계없이 모두 셈 | POL-STA-004 정의 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | [5] Export 선택 시 노출 내용 수정 | 정다예 | Figma 버전 메모 |
