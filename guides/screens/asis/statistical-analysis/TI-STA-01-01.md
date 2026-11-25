---
cid: TI-STA-01-01
pair_cid:
tl_relation: 단독
title: Test Analytics _ Test Count
path: Statistical Analysis > Test Analytics
type: Tab
version: 2.1.01
date: 2026.08.07
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-412518
---
# TI-STA-01-01 Test Analytics _ Test Count

> 기존 화면(작업방 `SA_Test Analytics_asis` 페이지, Ver 2.1.01)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 (IA에 L 짝 없음)
- 호출하는 화면: [TI-STA-01-02] Test Count Table (6-3 View Table), [TI-STA-02-01] Test Ratio · [TI-STA-03-01] Test TAT · [TI-STA-04-01] Test Cost (6 Key Metrics)
- 호출되는 곳: LNB > Statistical Analysis > Test Analytics (6 Default : Test Count)

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Network Status | Instrument | L-IOS | D.A PC | Running | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Test Analytics | Test Forecasting | Setting | Information | Manual | Keira Knightley
- Test Analytics
- Test Count | Export
- 합계 표: Total | RP1 | RP2 | RP3 | PB | GI-V | GI-B1 | GI-B2 | GI-P | Allplex HPV28 | STI-12
  - 368,950 | 40,250 | 33,700 | 33,900 | 44,950 | 37,400 | 37,400 | 31,250 | 37,950 | 34,450 | 34,450
- 차트: (Unit : count) | Y축 10,000 · 8,000 · 6,000 · 4,000 · 2,000 · 0 | X축 01-01 | 01-02 | 01-03 | 01-04 | 01-05 | 01-06 | 01-07
  - 범례: RP1 | RP2 | RP3 | PB | GI-V | GI-B1 | GI-B2 | GI-P | Allplex HPV28 | STI-12
- 오른쪽 조회 영역
  - Key Metrics: Test Count | Test Ratio | Test TAT | Test Cost
  - Filter Options
  - Date Range: Daily | Monthly / 2026-01-01 | 2026-01-07
  - Legend: Product | Sample Type / Select All / RP1 | RP2 | RP3 | PB | GI-V | GI-B1 | GI-B2 | GI-P | Allplex HPV28 | STI-12
  - View: Chart | Table

### 사용 컴포넌트

Square (22), Description Number (12), Table (11), Table/Filled Table  Cell (11), 1 Depth (7), Dropdown Outlined (2), profile (1), Layout/Align_Right_05_Solid (1), Frame (1)

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

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 같은 페이지의 별도 프레임 `TI-STA-01/Case`([3543:414512](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-414512), 2252×3121)에 있습니다. 케이스마다 오른쪽 패널이 있습니다(CID `TI-STA-01/Case`, 작성자 정다예, Ver · Date `-`). TI-STA-01-02 · 02-01 · 02-02 · 04-01 · 04-02 디스크립션도 이 프레임의 Case 2 · 3 · 4를 가리킵니다.

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Chart 상세 데이터 Tooltip | 차트 내 특정 시점에 마우스 호버 | 위 프레임 (0, 0) |
| 2 | 데이터 로딩 중 Case | 데이터 로딩 중 | 위 프레임 (0, 773) |
| 3 | Legend 전체 해제 시 (3-1. Chart 모드일 경우 / 3-2. Table 모드일 경우) | Legend 전체 해제 | 위 프레임 (0, 1546) |
| 4 | Legend 유형별 노출 데이터 (4-1. Product 선택 시 / 4-2. Sample Type 선택 시) | Legend 탭 선택 | 위 프레임 (0, 2336) |

- Case 1 패널
  - 1 Chart 상세 데이터 Tooltip — 노출 조건: 차트 내 특정 시점(일별 막대 또는 월별 막대)에 마우스 호버시 해당 마우스 포인터 위치를 기준으로 팝업 노출
  - 1-1 시점 및 총합 정보 — 표출 항목: 호버된 해당 일자 또는 월 정보 표출 / 선택된 검사 항목들의 해당 시점 기준 총 검사 건수 합산 값을 Total : 총 건수 형태로 표출
  - 1-2 개별 항목 리스트 정보 — 표출 항목: 해당 시점에 발생한 항목별 누적 검사 건수 수치 표출
  - 툴팁 예시: 01-04 | Total : 52,750 / RP1 6,200 | RP2 4,750 | RP3 4,750 | PB 3,850 | GI-V 3,850 | GI-B1 3,900 | GI-B2 4,750 | GI-P 6,100 | Allplex HPV28 7,300 | STI-12 7,300
- Case 2: 왼쪽 데이터 영역은 비고 오른쪽 조회 영역(Key Metrics · Filter Options · Date Range · Legend · View)만 그려져 있음. 패널 디스크립션 `0` / `-`
- Case 3: Chart · Table 모드 모두 `Please select one or more legends.` 안내. Chart 모드는 Y축 0만, Table 모드는 Product 열 머리 · 01-01 ~ 01-07과 `Total | - | - | - | - | - | - | -` 행
- Case 4: Product 탭 — RP1 | RP2 | RP3 | PB | GI-V | GI-B1 | GI-B2 | GI-P | Allplex HPV28 | STI-12 / Sample Type 탭 — Swab | Aspirate | BAL | Saliva | Sputum | Raw stool | Cary-blair | eNAT stool | Fecal swab | Thinprep | Surepath | Cellpreserv | Urine | Semen
