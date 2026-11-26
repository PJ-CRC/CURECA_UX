---
cid: TI-STA-03-01
pair_cid:
tl_relation: 단독
title: Test Analytics _ Test TAT
path: Statistical Analysis > Test Analytics
type: Tab
version: 2.1.01
date: 2026.08.07
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-413894
---
# TI-STA-03-01 Test Analytics _ Test TAT

> 기존 화면(작업방 `SA_Test Analytics_asis` 페이지, Ver 2.1.01)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: [TI-STA-03-02] Test TAT Table (6-2 View Table), [TI-STA-01-01] Test Count · [TI-STA-02-01] Test Ratio · [TI-STA-04-01] Test Cost (6 Key Metrics)
- 호출되는 곳: Test Analytics 6 Key Metrics의 Test TAT

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Network Status | Instrument | L-IOS | D.A PC | Running | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Test Analytics | Test Forecasting | Setting | Information | Manual | Keira Knightley
- Test Analytics
- Test TAT(Turnaround Time) | Export
- 합계 표: Total Test TAT(Turnaround Time) | Total Test Counts
  - 5.8 hour | 345,200
- 차트: (Unit : hour) | (Unit : count) | 왼쪽 Y축 10 hour · 8 hour · 6 hour · 4 hour · 2 hour · 0 | 오른쪽 Y축 10,000 · 8,000 · 6,000 · 4,000 · 2,000 · 0 | X축 01-01 | 01-02 | 01-03 | 01-04 | 01-05 | 01-06 | 01-07
  - 범례: Test TAT | Test Count
- 오른쪽 조회 영역
  - Key Metrics: Test Count | Test Ratio | Test TAT | Test Cost
  - Filter Options
  - Date Range: Daily | Monthly / 2026-01-01 | 2026-01-07
  - View: Chart | Table

### 사용 컴포넌트

Description Number (12), Square (9), 1 Depth (7), Table (2), Table/Filled Table  Cell (2), Dropdown Outlined (2), profile (1), Layout/Align_Right_05_Solid (1), Frame (1)

### 디스크립션 (원문)

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

#### 3-1. 조회 기간(X축) 정보

- 동작
- 텍스트 겹침 방지를 위해 라이브러리의 Auto-skip 기능 활성화 및 가로 폭에 따른 라벨 개수 자동 최적화
- 표출 항목
- 사용자가 설정한 조회 기간 일자별/월별 날짜 표출

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

#### 6-2. 차트 형태 선택 영역

- Chart 선택 시  누적 막대 그래프로 표출
- 참고 : TI-STA-03-01
- Table 선택 시 표로 표출
- 참고 : TI-STA-03-02

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 같은 페이지의 별도 프레임 `TI-STA-03/Case`([3543:415927](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-415927), 2252×1206)에 있습니다. 오른쪽 패널이 있습니다(CID `TI-STA-03/Case`, 작성자 정다예, Ver · Date `-`). 디스크립션 6은 `TI-STA-01/Case`의 Case 2를 가리킵니다(내용은 [TI-STA-01-01] 케이스 절).

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Chart 상세 데이터 Tooltip | 차트 내 특정 시점에 마우스 호버 | 위 프레임 (0, 0) |

- Case 1 패널
  - 1 Chart 상세 데이터 Tooltip — 노출 조건: 차트 내 특정 시점(일별 막대 또는 월별 막대)에 마우스 호버시 해당 마우스 포인터 위치를 기준으로 팝업 노출
  - 1-1 시점 정보 — 표출 항목: 호버된 해당 일자 또는 월 정보 표출
  - 1-2 지표별 상세 정보 — 표출 항목: Test TAT 행 ㄴ 해당 시점의 총 검사 소요 시간 합계 수치 뒤에 hour 단위를 결합하여 표출 / Test Count 행 ㄴ 해당 시점의 총 검사 건수 수치 표출
  - 툴팁 예시: 01-05 / Test TAT 6.5 hour / Test Count 4,100
  - 케이스 화면 글자: Test TAT(Turnaround Time) | Export / 합계 표 Total Test TAT(Turnaround Time) | Total Test Count · 5.8 hour | 345,200 / 오른쪽 조회 영역 Key Metrics · Filter Options · Date Range(Daily | Monthly, 2026-01-01 | 2026-01-07) · View · Legend(Select All, RP1 | RP2 | RP3 | PB | GI-V | GI-B1 | GI-B2 | GI-P | Allplex HPV28 | STI-12) · View
