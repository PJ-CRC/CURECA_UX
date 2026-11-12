# 디스크립션 본보기

> 상태: 1차 (2026-11-10). 기존 작업방(Part.2)에서 사용자가 고른 디스크립션을 Figma 캡처에서 옮긴 것입니다. 글자가 이미지라 눈으로 읽어 옮겼으므로, 원문과 다르면 Figma가 맞습니다.

**디스크립션은 이 결로 씁니다.** 쓰는 법 문서(`reference-rules/description.md`)의 문장보다 이 본보기가 먼저입니다. 값(검사 항목 · 상태값 등)은 옮길 때의 것이므로 본보기로만 보고, 실제 값은 기준데이터에서 가져옵니다.

| 본보기 | 화면 | 볼 것 | 원본 |
| --- | --- | --- | --- |
| 1 | TI-SPT-01 Samples (목록) | 검색 영역 · 드롭다운 · 체크박스 · 리스트 · 버튼 · 페이지네이션 | Part.2 `1460:110169` |
| 2 | TI-SPT-01-01 Samples Details (상세) | 정보 영역 · 표출 항목 · 노출 조건 · [More] 버튼 | Part.2 `1460:109649` |
| 3 | TI-STA-01-01 Test Analytics (통계) | 차트 · 기간 설정 · 범례 · 케이스 참고 | Part.2 `2138:1075431` |
| 참고 | TI-IVT-04-T Inventory Reagent | 말투는 따르지 않음. **산출 방식 · 예시를 적는 모양**만 가져옴 | Part.2 `7336:427513` |

## 본보기 1. TI-SPT-01 Samples

```
0  Samples 화면
 ● 정의
   - Run Start로 통해 검사를 시작한 검체 정보
   - 검체별 검사 단위로 리스트 노출
 ● 동작
   - 리스트 영역 선택 시, 기존 리스트 영역이 좌측으로 축소되며
     우측에서 상세 페이지가 밀고 나오며 노출

1  검색 영역
 ● 검색 조건에 따라 리스트 내 데이터를 필터링하여 조회하는 영역
 ● 공통 UX 참고 : COMM-5-s

1-1  Sample ID(Text Input)
 ● 기능 : 검체 ID를 입력하여 데이터 조회
 ● 동작
   - 하위 리스트 내 Sample ID 컬럼 대상으로 입력
   - 입력한 텍스트가 DB와 완전 일치하는 항목만 리스트에 노출
   - 영문 입력 시 대소문자를 구분하지 않음

1-2  Product(Multi-Select Dropdown)
 ● 기능
   - 검사 항목을 다중 선택하여 데이터 조회
 ● 공통 UX 참고 : COMM-5-f(2/2)
 ● Default : All
 ● 드롭다운 리스트 항목
   - All, RP1, RP2, RP3, PB, GI-V, GI-B1, GI-B2, GI-P
     Allplex HPV28, STI-12

1-4  Date(Cascading Dropdown)
 ● 기능
   - 조회 기준(일자 유형)를 먼저 선택하고, 특정 일자 및 기간 설정
     하여 데이터 조회
 ● 공통 UX 참고 : COMM-5-d(1/5)
   - 일자 유형[좌] : 조회하고 싶은 일자 유형 선택
   - 특정 일자 및 기간[우] : 선택 유형에 대한 일자 및 기간 설정
   - 단, 오늘 기준 미래일자는 선택 불가
 ● Default
   - 일자 유형[좌] : Order Date
   - 특정 일자 및 기간[우] : 시작일-7일 전 ~ 종료일-Today
 ● 드롭다운 리스트 항목
   - Order Date, Start Date, End Date

1-5  Status(Dropdown)
 ● 기능
   - 검사 상태를 단일 선택하여 데이터 조회
 ● 공통 UX 참고 : COMM-5-f(1/2)
 ● Default : All
 ● 드롭다운 리스트 항목
   - All, Ready, Not Tested, Running, Completed, Failed

1-6  STAT Only(Check box)
 ● 기능 : 응급 상태의 검체 데이터 조회
 ● Default : UnSelected(미선택)
 ● 리스트 노출
   - Selected(선택) 시, 응급 상태의 검체만 노출
   - UnSelected(미선택) 시, 전체 검체 노출

2  Samples 리스트
 ● 정의 : 검사 접수된 검체 중 Run을 실행한 검체 리스트
 ● 공통 UX 참고 : COMM-5-m
 ● 정렬
   - Default : Start Date/Time 기준 최신순(내림차순)
   - Default 조건 동일 시, Sample ID 기준 오름차순
 ● 동작
   - 특정 샘플 행 클릭 시 샘플 상세 노출 : TI-SPT-01-01

2-1  리스트 표출 항목
 ● Sample ID
   - T-IOS에서 수신되는 검체 ID 정보
 ● Product
   - T-IOS에서 수신되는 검사 항목 정보
   - 하나의 검사 항목 단위 정보 노출
 ● Order Date
   - LIS 접수 일자 정보
   - 표기 : YYYY-MM-DD
 ● Status
   - 검체의 검사 진행 상태 정보
   - 상태 값 : COMM-4-a
 ● Start Date/Time
   - Prep 장비에서 바코드 찍은 시간 시점
 ● STAT
   - T-IOS에서 수신되는 검체 응급 여부 상태 정보

2-2  Progress 상태 정보(Tooltip)
 ● 공통 UX 참고 : COMM-5-o
 ● 표출 예시 : TI-SPT-01/Case → Case 2

3  [Export] 버튼
 ● 윈도우 탐색기가 호출되며, 원하는 경로를 지정할 수 있음
 ● 대상 범위 : 목록에 노출된 전체 리스트
 ● 저장 항목 : Detail이 있을 경우 Detail에서 제공되는 모든 내용
 ● 형식 : CSV

4  페이지네이션
 ● 공통 UX 참고 : COMM-5-i
```

## 본보기 2. TI-SPT-01-01 Samples Details

```
0  Sample Details 화면
 ● 정의
   - 검사 중 또는 검사 완료된 검체의 상세 정보를 볼 수 있는 화면
   - 기본 정보 및 단계별 정보 노출
 ● 동작
   - 리스트 영역 선택 시, 기존 리스트 영역이 좌측으로 축소되며
     우측에서 상세 페이지가 밀고 나오며 노출

1  Sample Details 타이틀 영역
 ● 정의
   - 검체의 기본 속성 정보 영역
 ● 표출 항목
   - Sample ID
   - Product : RP1, RP2, RP3, PB, GI-V, GI-B1, GI-B2, GI-P,
               Allplex_HPV28, STI-12
   - Status : 공통 UX 참고(COMM-4-a)

2  검사 단계 정보 영역
 ● 정의
   - 검사 프로세스 단계별 장비 및 검사 시간 정보 영역
   - 모든 단계의 Module 및 Unit 정보는 Run Start 시점부터 노출
   - Start 및 End Date/Time의 경우 해당 단계 진/출입 시 노출
 ● 표출 항목
   - Process : Sample Preparation, Nucleic Acid Extraction,
     PCR Setup, Plate Sealing, PCR
   - Module : Module 고유 ID 정보(단, Sample Preparation 단계
     의 경우 Module/Unit 정보 미노출)
   - Unit : 상위 Module내 Unit 고유 ID 정보
   - Start Date/Time : 샘플이 담긴 Plate를 장치에 놓는 시점
   - End Date/Time : 샘플이 담긴 Plate를 작업이 끝난 후
                     장치에서 가져나가는 시점

3  General 영역
 ● 정의
   - 검체의 기본 속성 정보 영역
   - 사용자가 선택한 리스트 내 표출되는 정보와 동일한 정보
 ● 표출 항목
   - Sample Type
   - Order Date
   - Start Date/Time : Prep 장비에서 바코드 찍은 시간 시점
   - Canceled Date : 데이터 존재 시 노출/부재시 '-' 노출
   - Canceled : 데이터 존재 시 노출/부재시 '-' 노출
   - Status : 정의된 검체 상태 중 해당 되는 상태 노출
   - STAT : 데이터 존재 시 노출/부재시 '-' 노출

4  Sample Location 영역
 ● 정의
   - [Sample Storage] Module에서의 검체 위치 노출 영역
   - 샘플 회수 전 : InboundTrolley 내 검체 위치 값
   - 샘플 회수 후 : Outbound Trolley 내 검체 위치 값
   - 샘플 투입 유형별 표출 데이터 노출 예시
     : TI-SPT-01/Case > Case 2
 ● 표출 항목
   - Location Type(샘플 투입구 유형) : Trolley, STAT
   - Trolley Name : 시스템에 등록된 Trolley ID 정보 (8자리)
   - Tray Position : 트레이 층수(F 단위 표기) / 위치

5-1  [More] 버튼
 ● 정의
   - 96-DWP Plate 상세 정보 이동 버튼
 ● 동작
   - 클릭 시 [96 DWP] 메뉴 내 해당 Sample가 포함된 Plate 상세
     정보 페이지로 즉시 이동
   - 이동 시 해당 Sample이 Plate 내에서 해당 검체만 활성화 된
     상태로 노출

7  Reagents 정보 영역
 ● 정의
   - 검사 단계별 사용(투입)되는 시약 정보 오름차순 노출
 ● 노출
   - 검사 단계의 시약 데이터가 존재할 경우에만 영역 노출,
     데이터 부재 시 영역 전체를 미노출 처리
 ● 정렬
   - 공통 UX 참고 : COMM-4-a
 ● 표출 항목
   - Kit : 시약 제품명 (구성품 단위 노출 X)
   - Barcode : 바코드 체계 참고 (COMM-4-b)

9  [X] 버튼
 ● 클릭 시, 상세 정보가 닫히고, 리스트 영역이 우측으로 확장되어 노출
```

- 3번 General 영역을 보면 **늘 보이는 항목은 값이 없어도 지우지 않고 '-'로 둡니다.** 7번 Reagents처럼 영역 자체가 사라지는 경우는 "노출" 라벨로 조건을 따로 적습니다.

## 본보기 3. TI-STA-01-01 Test Analytics _ Test Count

```
0  Test Analytics _ Test Count 화면
 ● 정의
   - 사용자가 조회한 기간 내 검사 항목 별 검사 건수 정보 제공

2  검사 항목별 검사 건수 합계 정보 영역
 ● 정의
   - 필터에서 선택한 검사 항목별 검사 건수 누적 합계 표출 영역
 ● 동작
   - 전체 테이블 너비 100% 고정
   - 노출 열 개수에 따라 너비 자동 균등 분할
   - 선택 항목 변경 시 데이터 실시간 가변 연동
 ● 테이블 표출 항목
   - Total (첫 번째 열 고정)
     ㄴ 선택된 검사 항목 기준, 조회 기간 내 누적 검사 건수 총합 표출
   - 검사 항목별 열 (RP1 ~ STI-12 등)
     ㄴ 선택된 개별 검사 항목별, 조회 기간 내 누적 검사 건수 각각 표출
     ㄴ 마스터 코드 순서에 따라 좌→우 고정 배치

4  차트 범례 영역
 ● 노출 조건
   - 사용자가 선택한 검사 항목이 1개 이상일 경우 영역 노출
   - 사용자가 선택한 검사 항목이 0개일 경우 해당 영역 미노출
 ● 참고 : TI-STA-01/Case > Case 3

5  [Export] 버튼
 ● 정의
   - 화면에 표출된 통계 데이터 및 설정값을 CSV 파일로 내보내는
     기능 버튼
 ● 동작
   - 클릭 시 OS 파일 탐색기가 호출되어 사용자가 저장 경로 및
     파일명을 지정하여 다운로드
 ● 포맷 (Format) : .csv
 ● 포함 데이터
   - 범례 설정값, 필터 조건, 테이블 집계 결과값 등 화면 내 표출된 전
     체 데이터셋 포함

6-1  통계 일자 설정 영역 : Date Range
 ● Default : Daily 탭 활성화, 전일 기준 최근 14일간 데이터 노출
 ● Daily (일간 조회 정책)
   - Min Range : 최소 1일
   - Max Range : 최대 3개월(90일)
   - 과거(어제)부터 선택 가능, 오늘 및 미래 날짜는 비활성화
 ● 동작
   - Daily → Monthly 전환 시 데이터 상속
   - 단, 변환된 일자 범위가 Daily 최대 조회 한도(3개월/90일)를
     초과할 경우, 종료월의 말일을 기준으로 역산하여 최대 3개월(90일)
     범위로 기간 노출
 ● 공통 UX 참고 : COMM-5-d

6-2  통계 대상(검사 항목) 선택 영역 : Legend
 ● Default : Product 탭 활성화, 전체 항목 Select
 ● Select All 선택 시 전체 항목 Select, 재 선택 시 전체 해제
 ● 전체 해제 시 범례 선택 안내 문구 노출
   - Please select one or more legends.
   - 참고 : TI-STA-01/Case > Case 3
```

## 참고. 산출 방식과 예시를 적는 모양 (TI-IVT-04-T에서)

계산이 들어가는 값은 `산출 방식`과 `예시`를 함께 적습니다. 말투는 위 본보기처럼 명사로 끝냅니다.

```
2-5  Required Qty(좌측 영역)
 ● 정의
   - 현재 전체 Run 기준으로 해당 시약이 적재된 모든 Storage 및
     장비 내 Buffer 공간의 합계를 기준으로 집계
 ● 산출 방식
   - 총 필요 수량에서 현재 재고를 제외한 부족 수량을 계산
   - 예시 : 남은 재고 10runs, 필요 수량 14runs → Required Qty = 4runs
 ● 노출 조건
   - 검체 트롤리가 도킹된 상태 또는 통합 상태가 Running,
     Partial Running일 경우 노출(OR 조건)
   - 예외 처리 : 검사 진행 중이 아닐 경우 '-'로 표기
```
