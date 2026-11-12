---
cid: TI-STA-03-01
pair_cid:
tl_relation: 단독
title: Test TAT - Chart
path: Statistical Analysis > Test Analytics > Test TAT - Chart
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2138-1076807
figma_region: 2.1 2차
---
# TI-STA-03-01 Test TAT - Chart

> 기존 화면(작업방 Statistical Analysis 페이지, 2.1 2차 영역, Ver 2.1.01)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴. Figma 화면 이름은 "Test Analytics _ Test TAT"
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-004, POL-COM-006
- 호출하는 화면: Test TAT - Table (TI-STA-03-02)
- 다른 프레임: [TI-STA-03/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2138-1078840)

## 기존 화면

### 화면 글자

- (GNB)(LNB) TI-STA-01-01과 같음
- Test TAT(Turnaround Time) | Export
- Key Metrics: Test Count | Test Ratio | Test TAT | Test Cost
- (요약 표) Total Test TAT(Turnaround Time) | Total Test Counts → 5.8 hour | 345,200
- (Unit : hour) 2 ~ 10 hour (좌측 Y축) | (Unit : count) 2,000 ~ 10,000 (우측 Y축)
- (차트 범례) Test TAT | Test Count
- Filter Options: Date Range (Daily | Monthly), View (Chart | Table). Legend 영역 없음

### 사용 컴포넌트

Description Number (12), Square (9), 1 Depth (7), Table (2), Table/Filled Table Cell (2), Dropdown Outlined (2)

### 디스크립션 (원문)

- 3-1, 5, 6, 6-1의 원문은 TI-STA-01-01 3-1, 5, 6, 6-1과 같음

#### 0. Test Analytics _ Test TAT 화면

- 정의
- 지정된 조회 기간 내 검사별 평균 소요 시간(TAT) 추이와 총 검사 건수의 상관관계를 비교하여 제공

#### 1. 차트 타이틀

- 정의
- 사용자가 선택한 Key Metrics 항목 노출
  - (단, Test TAT는 풀네임 정보도 추가 노출)
- Test TAT(Turnaround Time)

#### 2. 총 검사 시간 및 검사 건 수 정보 영역

- 정의
- 전체 데이터의 주요 지표 요약 수치를 제공하는 영역
- 동작
- 전체 테이블 너비 100% 고정
- 노출 열 개수 2개 고정
- 필터 변경 및 데이터 갱신 시 실시간 반영
- 테이블 표출 항목
- Total Test TAT
- ㄴ 조회 기간 내 누적 총 검사 소요 시간 합계
- Total Test Count
- ㄴ 조회 기간 내 누적 총 검사 건수

#### 3. 검사 TAT 및 건수 추이 비교 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 검사 소요 시간 및 건수 변동
- 추이 비교 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영

#### 3-2. 소요 시간(좌측 Y축) 정보

- 동작
- Y축의 최소값은 0으로 고정하며, 최대값은 조회된 총 소요 시간
- 합계의 최고치에 따라 라이브러리가 자동 스케일링 하도록 설정
- 표출 항목
- 좌측 상단 단위 정보 (Unit : hour) 고정 텍스트
- 시간 단위 라벨 표출

#### 3-3. 검사 건수(우측 Y축) 정보

- 동작
- Y축의 최소값은 0으로 고정하며, 최대값은 조회된 전체 검사 건수 최고치에 따라 라이브러리가 자동 스케일링 하도록 설정
- 표출 항목
- 우측 상단 단위 정보 (Unit : count) 고정 텍스트
- 검사 건수 라벨 표출

#### 3-4. 데이터 뷰 영역(차트 or 테이블)

- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 마우스 오버 시 해당 시점의 상세 데이터 툴팁 팝업 노출
  - (참고 : TI-STA-03/Case > Case 1)
- 표출 항목
- Test TAT
- ㄴ 좌측 Y축 기준의 단일 꺾은선 차트 형태로 표출
- Test Count
- ㄴ 우측 Y축 기준의 단일 세로 막대 차트 형태로 표출

#### 4. 차트 범례 영역

- 노출 조건
- 차트에 매핑된 두 지표 상시 노출

#### 6-2. 차트 형태 선택 영역

- Chart 선택 시  누적 막대 그래프로 표출
- 참고 : TI-STA-03-01
- Table 선택 시 표로 표출
- 참고 : TI-STA-03-02

### 케이스

- TI-STA-03/Case: Case 1. Chart 상세 데이터 Tooltip

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 0 "평균 소요 시간(TAT)", 2 "누적 총 검사 소요 시간 합계", 3-2 "총 소요 시간 합계"가 서로 다름. 화면 예시 5.8 hour / 345,200건은 평균으로 보임 | 디스크립션에 넣음: Test TAT는 합계 지표임. "평균" 문구를 지우고 합계로 씀. 화면 예시 값도 합계로 보여 줌 | POL-STA-004 정의 | 대기 |
| R02 | 디스크립션 | 6-2 "Chart 선택 시 누적 막대 그래프로 표출" (TI-STA-02-01에서 복사된 것으로 보임). 3-4는 꺾은선 + 세로 막대 | 3-4와 맞춤 | 디스크립션 | 대기 |
| R03 | 표기 | 화면 "Total Test Counts", 디스크립션 "Total Test Count" | Total Test Count | 화면 글자 | 대기 |
| R04 | 디스크립션 | TAT의 시작·끝 시점(어느 상태에서 어느 상태까지)이 정의되지 않음 | 디스크립션에 넣음: TAT는 실제 검사에 걸린 시간으로, Sample의 Start Date/Time부터 End Date/Time까지(POL-SMP-002)의 합계임 | POL-STA-004 정의 | 대기 |
| R05 | 화면 정보 | Figma 화면 이름 "Test Analytics _ Test TAT", IA 이름 "Test TAT - Chart" | 하나로 통일 | `ia/ia-screens.csv` | 대기 (확인 필요) |
| R06 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |
| R07 | 정책 반영 | 검사 건수 집계 기준이 없음 | 디스크립션에 넣음: 검사 건수는 오더 기준으로 세며 Completed, Failed와 관계없이 모두 셈 | POL-STA-004 정의 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | [5] Export 선택 시 노출 내용 수정 | 정다예 | Figma 버전 메모 |
