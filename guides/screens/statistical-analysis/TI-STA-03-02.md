---
cid: TI-STA-03-02
pair_cid:
tl_relation: 단독
title: Test TAT - Table
path: Statistical Analysis > Test Analytics > Test TAT - Table
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=2138-1077002
figma_region: 2.1 2차
---
# TI-STA-03-02 Test TAT - Table

> 기존 화면(작업방 Statistical Analysis 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T-IOS 전용 메뉴. Figma 화면 이름은 "Test Analytics _ Test TAT". TI-STA-03-01의 View를 Table로 바꾼 화면
- 관련 정책: POL-STA-001, POL-STA-002, POL-STA-003, POL-STA-004, POL-COM-006
- 호출하는 화면: Test TAT - Chart (TI-STA-03-01)

## 기존 화면

### 화면 글자

- (GNB)(LNB) TI-STA-01-01과 같음
- Test TAT(Turnaround Time) | Export, Key Metrics
- (요약 표) TI-STA-03-01과 같음 (5.8 hour | 345,200)
- (Unit : hour, count)
- (표) 날짜 열 7개
- Test TAT | 8.5 | 5.2 | …
- Test Count | 3,080 | 5,500 | 6,100 | 3,000 | 4,200 | 8,200 | 5,900
- Filter Options: Date Range (Daily | Monthly), View (Chart | Table)

### 사용 컴포넌트

Table (26), Square (9), 1 Depth (7), Description Number (4), Table/Filled Table Cell (2), Dropdown Outlined (2)

### 디스크립션 (원문)

#### 0. Test Analytics _ Test TAT 화면

- 정의
- 지정된 조회 기간 내 검사별 평균 소요 시간(TAT) 추이와 총 검사 건수의 상관관계를 비교하여 제공

#### 1. 총 검사 시간 및 검사 건 수 정보 영역

- 아래 참고 화면과 내용 동일
- 참고 : TI-STA-03-01

#### 2. 검사 TAT 및 건수 추이 통계 영역

- 정의
- 사용자가 선택한 필터 조건에 따른 검사 TAT(소요 시간 합계) 및 검사 건수 통계 영역
- 동작
- 우측 조회 영역 설정 시 즉시 화면에 실시간으로 반영
- 조회 기간 열의 개수가 8개 이상일 경우(또는 화면 해상도 대비 테이블 총 너비가 부모 컨테이너를 초과할 경우), 가로 스크롤 생성
- 표출 항목
- 검사 시간 및 건수 단위 정보 (Unit : hour, count) 표출

#### 2-1. 날짜 영역

- 표출 항목
- 데이터 열 (타임라인 축)
- ㄴ사용자가 설정한 조회 기간 일자별/월별 날짜 표출

#### 2-2. 조회 기간별 소요 시간 및 건수 정보 영역

- 동작
- 행(Row) 구성
- ㄴ Test TAT 및 Test Count 2개 지표 행 고정 노출
- 표출 항목
- Test TAT 행
- ㄴ 해당 날짜의 총 소요 시간 합계 수치를 소수점 첫째 자리까지 표출
- Test Count 행
- ㄴ 해당 날짜의 총 검사 건수 수치 표출
- 데이터가 0인 경우에도 생략하지 않고 0으로 노출

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 디스크립션 | 0 "평균 소요 시간", 2·2-2 "소요 시간 합계"가 다름 (TI-STA-03-01 반영 대기 목록 1과 같음) | 디스크립션에 넣음: Test TAT는 합계 지표임. "평균" 문구를 지우고 합계로 씀. 화면 예시 값도 합계로 보여 줌 | POL-STA-004 정의 | 대기 |
| 2 | 화면 글자 | Test TAT 행 예시 값이 2칸만 있음 (8.5, 5.2) | 예시 데이터 채움 | 화면 글자 | 대기 |
| 3 | 화면 정보 | Figma 화면 이름 "Test Analytics _ Test TAT", IA 이름 "Test TAT - Table" | 하나로 통일 | `ia/ia-screens.csv` | 대기 (확인 필요) |
| 4 | 정책 반영 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | POL-COM-006 | 대기 |
| 5 | 정책 반영 | 검사 건수 집계 기준이 없음 | 디스크립션에 넣음: 검사 건수는 오더 기준으로 세며 Completed, Failed와 관계없이 모두 셈 | POL-STA-004 정의 | 대기 |
| 6 | 정책 반영 | TAT 시작·끝 시점이 없음 | TI-STA-03-01 반영 대기 목록 4와 같음 (Sample Start ~ End Date/Time의 합계) | POL-STA-004 정의 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
