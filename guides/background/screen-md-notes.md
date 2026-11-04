# 화면 MD화 메모: Information, Run, Quick Start, Test Management, Sample Tracking, Inventory, Statistical Analysis

> 상태: 작업 메모 (2026-11-02). 기존 화면을 MD로 옮기면서(`rules/screen-spec.md` 3절) 찾은 내용입니다. 정책 파일은 아직 만들지 않았습니다.

- 메뉴마다 (a) 디스크립션에서 찾은 정책 후보를 도메인 코드별로, (b) 열린 질문을 적었습니다. 괄호 안은 근거 CID와 디스크립션 번호입니다.
- 정책 후보는 디스크립션 원문을 요약한 것입니다. 정책으로 확정한 내용이 아닙니다.
- 화면별로 고칠 점은 각 화면 MD의 "반영 대기 목록" 절에 있습니다.
- Material Setup 페이지는 이번 범위에서 뺐습니다.

## Information

### 정책 후보

- SMP 검체·검사 진행
  - Run Report는 Batch(검사 배치) 단위로, 배치 종료 후 생성됨. Report ID는 시스템이 자동 부여 (TI-INF-03-01 0, 2-1)
  - Run Report End Status 값: Completed, Failed, Not Tested, Partially Completed, Stopped (검사 배치 완료 상태와 같음) (TI-INF-03-01 1-2)
  - Run By = [Run Start]를 실행한 계정의 User ID, Batch ID = Test Status의 Batch Card ID (TI-INF-03-01 2-1, TI-INF-03-02 2-1)
  - Samples Processed = Completed + Failed + Not Tested Sample 수. Total TAT = End Date/Time - Start Date/Time (TI-INF-03-02 2-1)
- EQP
  - 리포트의 Run-time: Current Run은 h·m(초 버림), Cumulative는 시스템 셋업 이후 누적 h(분 버림, 천 단위 콤마). 대상은 Device Unit만 (Sample Storage, Prep Consumable Storage 제외) (TI-INF-03-02 4-3)
  - Module Count by Type: 장비 구성에 등록된 타입별 대수, 없으면 0 (TI-INF-03-02 1-3)
- EVT
  - 리포트의 Event 통계: Type별(Instrument, Inventory, Sample, System)·Module Type별 Error/Warning 건수. 0대인 Module Type은 차트에서 뺌. Event History는 Instrument 종류의 Error만 (TI-INF-03-02 3-1 ~ 3-3)
- COM
  - 검색: Text Input은 완전 일치, 대소문자 구분 없음. 기간 검색 기본 7일 전 ~ 오늘, 미래 선택 불가, 최대 1년 (TI-INF-03-01 1-1, 1-3)
  - [Download]: 체크 1개 이상일 때 활성, 여러 개면 순차 다운로드 (TI-INF-03-01 2-3)
- SYS
  - Installation information: 설치(또는 최신 업데이트) 일시, 버전, 설치 시 언어, 설치 시 Data reset Y/N (TI-INF-02-P 1 ~ 4)

### 열린 질문

- Information > Report의 User Type 권한 (permission-matrix에 없음). Report는 T-IOS 전용인지 (IA에 L-IOS 짝 없음)
- 화면 이름: IA "Report"/"Datail" vs Figma "Run Report" (Detail 화면 이름 없음)
- TI-INF-03-02가 새 탭 PDF 뷰어로 보여 주는 리포트 자체인지, 웹 화면인지
- LNB의 Information > Manual 화면이 있는지 (IA에 없음)
- 리포트 Samples Total에 응급 서랍 Sample 포함 여부
- Program(TI-INF/LI-INF) 등 6개 화면은 2.1 1차 영역만 있음. LI-INF 화면 정보 CID가 LI-STN-02, LI-INF-02-P 화면 정보 CID가 LI-INF-01-P로 잘못 적힘

## Run

### 정책 후보

- SMP 검체·검사 진행
  - Run Preparation 단계: Check samples → (Check test protocol) → Check consumables → Check reagents → Check waste bin/bottle → [Run Start] → Confirm_002 (LI-RUN-01 ~ LI-RUN-04)
  - Check test protocol 단계는 Policy Setting의 Allow Protocol Changes Before Test가 ON일 때만 나옴. OFF면 Applied Protocol로 Run (LI-RUN-02-01 0)
  - Run 대상 Sample = 검사 접수된 Sample 중 Trolley 또는 응급 서랍으로 도킹된 Sample (LI-RUN-01 2, 4)
  - Run 시작 전 확인 항목(하나라도 문제면 LI-RUN-P): Sample 정보 로드 실패, Consumable Trolley 1층 Tray 없음, 네트워크(Instrument, T-IOS, D.A PC) 하나라도 오프라인, Module Door(Storage·Waste Bin Door 제외) 하나라도 Open (LI-RUN-P 0 ~ 5)
  - Run Preparation 중 [Cancel]·LNB 이탈 → Confirm_001, Sample 정보 로드 불가 → Alert_001 (LI-RUN-01 ~ 04 0)
- TST 검사 정책
  - Check test protocol 목록 정렬: SG Protocol 1순위, Applied Protocol 2순위, 그 외 Modified Date/Time 내림차순. 기본 선택은 Protocol Setting의 Applied (LI-RUN-02-01 2, 3)
- INV 재고·폐기
  - Remaining Qty = 도킹된 Trolley + Storage + 장비 내 Buffer 수량 합. 장비 내 거치 공간의 수량은 실시간 차감하지 않고 소진되거나 Storage로 반환될 때 갱신 (LI-RUN-02 2-2, LI-RUN-03 2-3)
  - Required Qty = (준비 중 Run + 진행 중 Run 필요 수량) - 현재 재고 (LI-RUN-02 2-3, LI-RUN-03 2-4)
  - 수량 표기: 낱개 수량(입고 단위 수량), 입고 단위는 올림 (예 101 → 2 Rack). Reagent는 반응 수 T(rxns) (LI-RUN-02 2-2, LI-RUN-03 2-3)
  - 카드 상태 우선순위: Insufficient > Low > Sufficient, Full > Almost Full > Available (LI-RUN-02 2-4, LI-RUN-04 2-2)
  - Remaining Qty와 Required Qty가 모두 0인 항목은 숨김 (LI-RUN-02 2, 3)
  - Capacity: 최대 적재량을 관리하는 Storage만, 장비 셋팅 때 설정한 값 (2026-08-20 변경). 혼합 적재 Storage(Cold Storage)는 표시 안 함 (LI-RUN-02 3-4, LI-RUN-03 3-3)
  - Expiration Date가 지난 Reagent가 한 Location이라도 있으면 안내 문구 표시 (LI-RUN-03 3-3, LI-QUK 4-1)
  - Waste Bin/Bottle Fill Level = 누적 사용 개수 / 최대 수용 개수 × 100. 센서 미감지면 최대 99%(Almost Full), 센서 감지 시 100%(Full). 센서 없는 폐기물은 계산 100%에 Full. Empty Waste Bin의 Confirm Empty 시점에 0부터 다시 셈 (LI-RUN-04 3-3)
  - Reagents type 구분: Sample Preparation = Pretreatment Reagents, Nucleic Acid Extraction = STARMag M96 Kit, STARMag Universal Cartridge Kit, PCR = Allplex/Anyplex Assay 10종 (LI-RUN-03 2-1)

### 열린 질문

- Reagent 수량 상태에 재고 상태 값(Insufficient / Low / Sufficient)을 쓰는지 (status-values.csv에는 Consumable만)
- Tooltip의 Low "partial shortage", Insufficient "no stock"과 상태값 표 정의(가동 가능 / 가동 중단)가 다름
- Waste Bin/Bottle이 Full 또는 Almost Full일 때, Consumable·Reagent가 Insufficient일 때 [Run Start]를 막는지
- Check test protocol의 CID(LI-RUN-02-01)와 IA 순서가 실제 단계 순서(Step 2)와 다름
- Check test protocol에서 고른 Protocol이 이번 Run에만 쓰이는지
- Item details Popup CID: 디스크립션 LI-RUN-03-P vs IA LI-IVT-03-T-P / LI-IVT-04-T-P
- LI-RUN-P 네트워크 "온라인/오프라인"을 연결 상태(Connected / Disconnected)로 쓸지
- Alert_001(진행 중 도킹 해제)과 LI-RUN-P의 Sample Data Load Failed(시작 전) 구분

## Quick Start

### 정책 후보

- SMP 검체·검사 진행
  - Quick Start는 Run 실행 조건(LI-RUN-P 항목)을 모두 만족할 때 요약 Popup을 열고, 아니면 LI-RUN-P를 엶. [Quick Start] → Confirm_002 (LI-QUK 0, 8)
  - Quick Start 요약 항목: Total/STAT Sample 수, Consumable 재고 상태별 항목 수, Reagent 재고 상태별 항목 수와 Expiration Date 만료 안내, Applied Protocol 이름, Waste Bin/Bottle 상태별 수 (LI-QUK 2 ~ 6)
- INV 재고·폐기
  - 재고 상태 집계는 Module 하위 Unit 기준, Waste Bin/Bottle은 Module별 하위 폐기함 기준으로 셈 (LI-QUK 3, 4, 6)
  - Waste Bin/Bottle 상태: Full 100%, Almost Full 70% 이상, Available 70% 미만 (LI-QUK 6, status-values.csv와 같음)

### 열린 질문

- Quick Start에서 Allow Protocol Changes Before Test가 ON일 때 Protocol을 바꿀 수 있는지
- Total Sample에 응급 서랍 Sample 포함 여부 (LI-RUN-01과 다름)
- Confirm_001 카탈로그 조건 "[X] 선택 시" vs 화면 [Cancel]
- Test Status 화면에서 Quick Start로 들어가는 경로가 있는지 (화면 정보 경로)

## Test Management

### 정책 후보

- SMP 검체·검사 진행
  - Test Order 목록 대상과 정렬: 검사 접수된 검체 중 Trolley 또는 STAT 서랍으로 도킹된 검체, 검사 항목(Product) 단위 한 줄. 기본 정렬 Order Date 최신순, 같으면 Sample ID 오름차순 (TI-TMG-01 0, 2; v2.1.11에서 정렬 변경)
  - 날짜 정의: Order Date·Canceled Date는 LIS 접수·취소 일자, Start Date/Time은 Prep 쪽에서 바코드를 읽은 시점, End Date/Time은 L-IOS가 D.A PC에서 결과를 받은 시점 (TI-TMG-01 2-1; TI-SPT-01 2-1과 같음)
  - Test Order 요약 지표: Total Samples, STAT, Total Products, 필터 결과에 따라 즉시 갱신 (TI-TMG-01 3)
  - Test Status 진행률: 단계별 Progress(%) = (완료 + 실패) ÷ 총 검사 수량 × 100, 앞 단계에서 Failed·Not Tested가 나오면 분모에서 뺌 (TI-TMG-02 2-3, 3-3)
  - Batch 카드 생성·초기화: 장비가 Running을 시작할 때부터 Ready에 이를 때까지 카드 누적, 다음 Running 시작 때 초기화. 진행 중은 Start Date/Time 최신순, 끝난 Batch는 맨 아래로 (End Date/Time 최신순). 3개 이상이면 앵커 (TI-TMG-02 3)
  - Batch ID는 Batch 생성 때 시스템이 주는 고유 번호 (v2.1.14 "단순 인덱스 → 고유 번호") (TI-TMG-02 3-1)
  - Batch Start Date/Time = Run 또는 Quick Start에서 Run Start를 요청한 시점, End Date/Time = 마지막 검체 결과를 D.A PC에서 받은 시점 (TI-TMG-02 3-1)
  - 장비 상태별 Test Status 표시: Not Initialized·Ready는 "-", Partial Running·Error는 Error 장비가 포함된 Batch 카드만 오류 시점 값에서 멈춤 (TI-TMG-02 1)
- COM
  - 목록 검색 공통: Sample ID·Plate ID는 완전 일치, 영문 대소문자 구분 없음. Date는 일자 유형 + 기간, 기본 최근 7일, 미래 날짜 선택 불가 (TI-TMG-01 1-1, 1-4; SPT 목록 화면 같음)
  - Import·Export 파일 형식과 팝업: T-IOS 원문은 OS 파일함·엑셀파일, L-IOS 원문은 .CVS·COMM-5-j(4/4). Import 형식 오류는 Alert_031 (TI-TMG-01 4, LI-TMG-01 4)

### 열린 질문

- Import·Export 파일 형식이 엑셀인가 CSV인가, T/L이 같은가 (IA는 짝 화면 동일)
- Test Order 목록 대상: "도킹된 검체"인데 Status에 Ordered가 있음. 도킹 전 접수 오더도 보이는가
- Product 필터 목록(11개)은 검사 항목 목록 전체(30개)인가, 등록된 Assay Pack 기준인가
- T-IOS Test Order 디스크립션의 "T-IOS에서 수신되는" 출처 표현은 무엇으로 바꾸는가 (LIS 또는 L-IOS)
- Test Status 장비 상태별 동작에 Initializing, Stopping, Paused일 때가 없음
- Batch 카드가 Ready 뒤에도 남는지 (Case 4 "모든 Batch 완료 후 초기화 전")
- 검사 배치 완료 상태(Completed, Failed 등)를 Test Status에 넣지 않는다는 반영 대기 14와 화면이 맞는지 최종 확인

## Sample Tracking

### 정책 후보

- SMP 검체·검사 진행
  - Samples 목록 대상: Run Start로 검사를 시작한 검체, 검사 항목 단위. 기본 정렬 Start Date/Time 최신순, 같으면 Sample ID 오름차순. Status 필터에 Ordered 없음 (TI-SPT-01 0, 1-5, 2)
  - Samples Details 검사 단계 정보: 모든 단계의 Module·Unit은 Run Start 시점부터 표시, 단계 Start·End는 그 단계에 들어가고 나올 때 표시. Sample Preparation 단계는 Module·Unit 표시 안 함 (TI-SPT-01-01 2)
  - Sample Location: Sample Storage Module에서의 위치. 회수 전은 Inbound Trolley, 회수 후는 Outbound Trolley 위치. Location Type은 Trolley / STAT, Return Status N/Y, Trolley ID 8자리 (TI-SPT-01-01 4)
  - Reagent 정보: 단계에서 쓴 Reagent만, 데이터가 없으면 영역 숨김. Kit는 제품 이름(구성품 단위 아님), 하위 Reagent는 대표 바코드 (M96 Kit는 LB DWP 바코드, UC Kit는 EB Tube 오른쪽 대표 바코드) (TI-SPT-01-01 7)
  - Protocol Info: Run 준비 단계에서 선택한 Protocol, 선택하지 않으면 Applied Protocol을 표시. Modified by·Modified Date/Time은 Protocol 최종 편집 정보 (TI-SPT-01-02 2, TI-SPT-01-03 2)
  - Plate 목록: 96-DWP는 Sample Preparation 단계에서 읽은 Plate, Start = Sample Preparation 진입 바코드, End = PCR Setup 완료 바코드. PCR Plate는 PCR Setup 단계에서 읽은 Plate, End = Universal PCR 완료 후 나가기 전 바코드 (TI-SPT-02 2-1, TI-SPT-03 2-1)
  - Plate 상세: Well 다중 선택 최대 96, Select All·Reset, 선택한 Sample 목록은 Well No. 오름차순, 목록 클릭 시 Samples 화면에서 그 검체의 검사 항목을 모아 첫 항목 상세를 펼침 (TI-SPT-02-01 2~3, TI-SPT-03-01 2~3)
  - PCR Plate 상세: 대조군 범례(Positive Control / Negative Control), 검사 항목 범례, Product 단위 수량(Total Products, STAT Products) (TI-SPT-03-01 1-1, 2-1, 2-2)
- TST 검사 정책
  - Protocol Info 상세 항목은 Protocol Setting 설정값 그대로 (Pre-Treatment는 TI-STN-03-01-02-01, Extraction은 TI-STN-03-02-02-M 참조) (TI-SPT-01-02 3, TI-SPT-01-03 3)

### 열린 질문

- Plate 상태값: Plate 목록 Status 필터에 Not Tested가 있음. status-values.csv Plate 상태는 Running, Completed, Failed뿐
- PCR Plate 목록 Start Date/Time 원문이 "96-DWP가 PCR Setup 모듈에 진입"인데 PCR Plate 기준 시점은 무엇인가
- Export 형식(엑셀/CSV)과 저장 항목("Detail에서 제공되는 모든 내용")의 범위
- Samples Details 8-1 [More]가 Pre-Treatment·Extraction 탭 중 어느 쪽을 먼저 여는가 (CID 둘, Popup 하나)
- Sample Location 항목 이름 Trolley Name(T) / Trolley ID(L) 중 무엇인가
- Extraction Protocol 참조가 M9600용(-M)만 있음. STARlet(-V)로 추출한 경우 표시
- 프레임 1335:135567(이름 TI-SPT-01-01, CID TI-SPT-01, Ver 2.1, 디스크립션 없음, 프랑스어)은 무엇인가 (다국어 확인용 시안인지)
- TI-SPT-01, -02-01, -03-01과 L 짝 화면의 화면 정보 Ver가 2.0으로 남아 있음 (TI-SPT-01은 v2.1.01 메모가 있는데 Ver 2.0)

## Inventory

### 정책 후보

- INV 재고·폐기
  - 데이터 기준: Inventory 모든 Tab은 사용여부가 '사용'(Enabled)인 Module만 대상 (TI-IVT-01-T 0, 02-T 0, 03-T 0, 04-T 0, 05-T 0, 06-T 0). POL-EQP-009와 연결
  - Remaining Qty 합산 기준: Storage와 장비 내 거치 공간(Buffer, 장비가 가져간 것 포함)을 합산. 거치 공간 수량은 실시간 차감하지 않고 소진되거나 Storage로 반환될 때 갱신 (TI-IVT-02-T 1-3, 03-T 2-4·3-5, 04-T 2-4·3-5)
  - 잔여량·사용량 집계 기준 ("정책 안내" 1·2): 입고 시 증가, 사용 후 반환·폐기 시 실제 사용 수량만큼 차감, 제거 시 차감, 반환·폐기 시 이력 기록 (TI-IVT-03-T 2-4, 04-T 2-4)
  - Required Qty 산출: 현재 전체 Run 기준 총 필요 수량 − 현재 재고 (TI-IVT-01-T 1-4, 03-T 2-5·3-6, 04-T 2-5·3-6)
  - Required Qty·Status 노출 조건: Inbound Trolley Docked 또는 장비 통합 상태 Running·Partial Running일 때, 아니면 '-' (TI-IVT-03-T 2-5·2-6·3-6, 04-T 같음). Summary는 Running 또는 Docked, 아니면 안내 문구 (TI-IVT-01-T 1)
  - 재고 상태 판정과 우선순위: Insufficient(재고 0) / Low(일부 부족) / Sufficient. 한 항목의 Location 중 Insufficient와 Low가 함께 있으면 카드는 Insufficient (TI-IVT-03-T 2-6, 04-T 2-6)
  - 카드·항목 노출: Remaining Qty와 Required Qty가 모두 0이면 숨김, 카드 안 항목이 모두 숨김이면 카드도 숨김 (TI-IVT-03-T 2·3, 04-T 2·3)
  - Capacity: 최대 적재량을 관리하는 Storage만, 장비 셋팅 시 설정된 값 표시 (26.08.20 변경). 혼합 적재 Storage(Cold Storage)는 없음 (TI-IVT-03-T 3-4, 04-T 3-3)
  - Summary 정렬: Insufficient → Low, 같은 상태는 부족 수량 많은 순, 같으면 Name 오름차순, 6개 단위 페이지 (TI-IVT-01-T 1·1-6). Waste는 Full → Almost Full, Fill Level 높은 순, Name 오름차순 (TI-IVT-01-T 3)
  - Expired Reagent 안내: Location 중 한 곳이라도 Expired가 있으면 카드와 목록 사이에 문구 (TI-IVT-04-T 3-3)
  - Item details 목록: 바코드 단위 Row (Module[index] + Storage + Barcode, Buffer 포함). Consumable 정렬 Remaining Qty 오름차순 → Inbound Date 내림차순, Reagent 정렬 Expiration Date → Remaining Rxns → Used Counts 오름차순 (TI-IVT-03-T-P 0·2, 04-T-P 2)
  - Reagent 하위 바코드 체계: Standard Tube는 Carrier Setup 대표 바코드, PCR IC는 개별 바코드, 그 외 PCR은 박스 바코드, UC Kit는 TUB 대표 바코드 (TI-IVT-04-T-P 2-1)
  - Used Counts: 흡입 횟수 / 최대 흡입 가능 횟수, 시약별 최대치는 COMM-4-b (TI-IVT-04-T-P 2-1)
  - Fill Level 산출: 누적 사용 개수 / 최대 수용 개수 × 100, 센서 미감지면 최대 99%(Almost Full), 센서 감지 시 100%(Full), 센서 없는 폐기함은 계산값 100%에서 Full. Material Setup > Empty Waste Bin의 Confirm Empty로 0부터 다시 셈 (TI-IVT-05-T 3-3)
  - Waste 상태 결정: Available·Almost Full은 카운팅, Full은 센서 (TI-IVT-05-T 3-4). 카드 상태 우선순위 Full > Almost Full > Available (TI-IVT-05-T 2-2)
  - Usage History: 장비가 사용 후 폐기하는 시점 기준 이력, 기본 7일, 최대 1년, 미래일 선택 불가, 최신순 (TI-IVT-06-T 0·1·2)

- COM
  - Export 저장: L-IOS는 경로 저장 또는 USB 저장 선택 팝업(COMM-5-j(4/4)), T-IOS는 윈도우 탐색기로 경로 지정, 형식 CSV (LI-IVT-06-T 3, Ver 0.6)
  - 데이터 로드 실패 시 Alert_020 (TI-IVT-02-T 3)

### 열린 질문

- Reagent에도 재고 상태(Sufficient / Low / Insufficient)를 쓰는지. 상태값 표에서 재고 상태 대상은 Consumable뿐 (TI-IVT-04-T)
- 재고 상태 정의가 화면(Insufficient = 재고 0)과 상태값 표(Insufficient = 부족하여 가동 중단)에서 다름. 어느 쪽인지 (TI-IVT-03-T 2-6)
- Summary의 "Empty" 표기 (TI-IVT-01-T 1-1·1-5): 화면 카드는 Insufficient·Low. Empty가 별도 상태인지
- 부족량 노출 조건에 Partial Running을 넣는지 (Summary는 Running만, Consumables·Reagents는 Running·Partial Running)
- Inventory Summary 툴팁 문구 중 현재 것은 무엇인지 (T-IOS는 4개 모두 살아 있고 L-IOS는 2개가 취소선)
- LI-IVT-03-T-P·LI-IVT-04-T-P가 Inventory 페이지(2.1.04)와 Run 페이지(2.1.11) 두 곳에 있음. 어느 쪽을 기준으로 할지, Run 프레임 0·2 구성 차이를 반영할지
- LI-IVT-06-T가 Ver 0.6으로만 있음. T-IOS 2.1.11과 같게 바뀌는지 (Usage 기준: 폐기 시점 vs 이동 시점)
- 사용 이력 기록 시점: 폐기 시점만인지(TI-IVT-06-T 0), 반환 시점도인지(TI-IVT-03-T 2-4 정책 안내)
- Reagent 수량 단위: rxns와 "T"가 섞여 있음 (TI-IVT-04-T 2-5·3-6, 04-T-P 2-1)
- Waste Bin/Bottle 노출 조건이 "Waste Bin이 있는 Module"로만 되어 있음. Liquid Waste Bottle만 있는 Module도 포함하는지 (TI-IVT-05-T 2·3)
- Confirm Empty가 Material Setup > Empty Waste Bin(Console Mode 전용)으로 옮겨진 뒤 Main Mode와 T-IOS에서 비움 처리를 어디서 하는지
- Item details Popup의 IA CID(-T-P)와 Figma CID(-T)가 다름. Figma 쪽을 고치는지
- IA "짝 화면 동일"이 LI-IVT-01-T, LI-IVT-02-T(및 L-IOS Waste bin)에 비어 있으나 화면은 T-IOS와 같음

## Statistical Analysis

### 정책 후보

- STA 통계
  - 조회 기간(Date Range) 규칙: Daily 기본 전일 기준 최근 14일, 1일 ~ 90일, 어제까지 선택 / Monthly 1 ~ 12개월, 당월까지 선택(오늘 이후 집계 제외) / Daily ↔ Monthly 전환 시 범위 상속, Daily 변환 시 90일 초과면 종료월 말일 기준으로 역산 (TI-STA-01-01 6-1, 05-01 4, 07-01 4, 08-01 4에 같은 원문)
  - Legend 선택 규칙: 기본 전체 선택, Select All 토글, 전체 해제 시 "Please select one or more legends." (TI-STA-01-01 6-2, 05-01 5, 08-01 5). 예외로 TI-STA-07-01 5는 단일 선택, 최소 1개 필수
  - Key Metrics 전환 시 Filter Options를 기본값으로 다시 불러옴 (TI-STA-01-01 6)
  - Export: 화면의 데이터셋(범례 설정값, 필터 조건, 집계 결과)을 .csv로 내보내고 저장 경로·파일명은 OS 파일 탐색기에서 지정 (TI-STA-01-01 5, v2.1.01)
  - Table 공통: 조회 기간 열 8개 이상이면 가로 스크롤, 0은 생략하지 않음, 데이터 없음은 '-', Total 행 맨 아래 고정 (TI-STA-01-02 2, 2-2, 2-3 등)
  - 정렬: 검사 항목은 "마스터 코드 순서" (TI-STA-01-01 2, 01-02 2-2)
  - Test Ratio 표기 형식: 비율%(건수), Total 100%(총 건수), 0은 0.0%(0) (TI-STA-02-01 2, 02-02 2-2)
  - Test TAT: 단위 hour, 소수점 첫째 자리 (TI-STA-03-02 2-2). 평균인지 합계인지 원문이 엇갈림 (TI-STA-03-01 0, 2)
  - Test Forecasting: 1 Week = 과거 30일로 7일 예측, 2 Weeks = 60일로 15일, 1 Month = 90일로 30일 / Predicted Change = 예측 Max 대비 과거 평균 % / 화면에 최종 예측일 기준 60일 표시 (TI-STA-05 1, 2-3, 3-3)
  - Event Trend 산출: 조회 기간 내 Error·Warning 건수 합 (TI-STA-08-01 0)
  - Usage & Cost Trend 산출: Inventory Usage History와 같은 기준 (장비가 사용 후 폐기하는 시점, Barcode + Usage + Date/Time 단위 행) (TI-STA-07-01 0)
  - 차트 색상: 제품군(RP, GI, HPV, STI, Etc)별 색상군 안에서 나열순 (Color Description 프레임, ver 2.0.0)
- TST 검사 정책
  - Test Cost는 Cost Setting 단가로 계산하고, 검사 항목에 매핑된 필수 Consumable·Reagent 중 단가가 하나라도 없으면 그 검사 항목은 제외·비활성 (TI-STA-04-01 0, 6-2, v2.1.14). POL-TST-003 규칙 4에 이미 "Test Cost 계산에 씀"이 있으므로 제외 조건을 그 정책에 더할 후보. TI-STA-07-01 5(v2.1.14)에도 같은 문장
- EQP
  - Run-time Trend 산출: Running 시간 총합 (TI-STA-05-01 0). POL-EQP-005의 `cids`에 TI-STA-05-01·05-02를 더할 후보
  - Error Rate 산출: (에러 횟수 / 전체 구동 횟수) × 100, 구동 횟수는 DWP 입고마다 +1, 에러 횟수 기준은 씨젠 정의 예정 (TI-STA-06-01 0). POL-EQP-010 후보, `cids`에 TI-STA-06-01·06-02 더할 후보
- ACC
  - Error Rate Trend Tab은 Service만 노출 (TI-STA-06-01 1). `policy/permission-matrix.csv`의 Statistical Analysis 행(모두 O)에 Error Rate 예외 행을 넣을 후보 (POL-EQP-010 규칙 5와 일치)
- EVT
  - Event Trend Legend: Event Type(Instrument, Inventory, Sample, System) 또는 Module 기준 (TI-STA-08-01 5). POL-EVT-001 `cids`에 TI-STA-08-01·08-02 더할 후보

### 열린 질문

- IA CID: TI-STA-05(Test Forecasting)와 TI-STA-05-01·05-02(Instrument Run-time)가 겹침. Instrument·Inventory·Event 통계의 메뉴 위치(IA는 Test Analytics 아래, Figma 경로는 Statistical Analysis > Instrument / Inventory / Event)
- IA 화면 이름 한국어 2건(소모품 및 시약 사용량, Event 통계)의 영어 이름
- Test TAT는 평균인가 합계인가, TAT 시작·끝 시점은 무엇인가 (TI-STA-03-01)
- Test Cost·Usage & Cost의 통화: 화면은 USD·$ 고정, POL-TST-003은 통화 선택(KRW/USD/EUR/GBP)
- 평균 검사 비용 계산식 (검사 1건당 Consumable·Reagent 사용량 × 단가?) (TI-STA-04-01)
- Error Rate의 구동 횟수 기준이 DWP 입고인데 Storage Module(예시 Prep Consumable Storage)에도 적용되는가. Error Rate Table의 Total 행은 무엇을 표시하는가 (TI-STA-06-02 2-3)
- Event Trend가 Event Status(Open/Closed)와 무관하게 세는가, Event Level별로 나눠 보는가, Module 탭에서 Module 없는 Event는 어떻게 세는가 (TI-STA-08-01)
- Legend의 검사 항목 목록이 고정 10개인가 등록된 검사 항목 전체인가 (glossary/test-items.csv는 30개)
- Test Forecasting 2 Weeks의 예측 일수(15일)와 예측 방식(모델)
- 사용량 단위: "(Unit : count)"인데 값은 "sets(ea)" (TI-STA-07-01)

## 여러 메뉴에 걸친 질문

- Reagent에도 재고 상태(Sufficient / Low / Insufficient)를 쓰는지. 지금 `glossary/status-values.csv`의 재고 상태 대상은 Consumable뿐입니다. 화면의 정의(Insufficient = 재고 0, Low = 일부 부족)도 상태값 표의 정의(가동 중단 / 가동 가능)와 다릅니다 (LI-RUN-02, LI-RUN-03, LI-QUK, TI-IVT-01-T, TI-IVT-03-T, TI-IVT-04-T).
- Item details Popup이 두 곳에 있습니다. Inventory 페이지(Ver 2.1.04)와 Run 페이지(Ver 2.1.11)입니다. 그리고 Run 디스크립션은 IA에 없는 LI-RUN-03-P를 부릅니다.
- Import·Export 파일 형식이 화면마다 다릅니다. 엑셀(T-IOS), ".CVS"(L-IOS), .csv(Statistical Analysis, Inventory)로 적혀 있습니다.
- Remaining Qty·Required Qty·Capacity·Fill Level의 산출 원문이 Run, Quick Start, Inventory에 같은 내용으로 반복됩니다. 정책 하나(INV)로 모으고 화면은 ID로 참조할 후보입니다.

## README 표에 넣을 줄

`screens/README.md`의 "기존 화면 MD (source: asis)" 표에 넣을 줄입니다. 메인 세션에서 반영합니다.

| 메뉴 | 폴더 | 상태 |
| --- | --- | --- |
| Information | `information/` | 기획 화면 8개 옮김 (2026-11-02, Report 2개는 2.1 2차, Program·Popup 6개는 2.1 1차) |
| Run | `run/` | 기획 화면 6개 옮김 (2026-11-02, 2.1 2차). Item details Popup은 Inventory에 둠 |
| Quick Start | `quick-start/` | 기획 화면 1개 옮김 (2026-11-02, 2.1 2차) |
| Test Management | `test-management/` | 기획 화면 4개 옮김 (2026-11-02, 2.1 2차) |
| Sample Tracking | `sample-tracking/` | 기획 화면 16개 옮김 (2026-11-02, 2.1 2차) |
| Inventory | `inventory/` | 기획 화면 16개 옮김 (2026-11-02, 2.1 2차) |
| Statistical Analysis | `statistical-analysis/` | IA의 Statistical Analysis 화면 전부 (17개) 옮김 (2026-11-02, 2.1 2차) |

