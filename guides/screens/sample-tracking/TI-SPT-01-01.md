---
cid: TI-SPT-01-01
pair_cid: LI-SPT-01-01
tl_relation: 동일
title: Samples Details
path: Sample Tracking > Samples > Details
type: Popup
version: 2.1.11
date: 2026-10-08
author: 정다예
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-109649
figma_region: 2.1 2차
---
# TI-SPT-01-01 Samples Details

> 기존 화면(작업방 Sample Tracking 페이지, 2.1 2차 영역, Ver 2.1.11)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- IA 화면 이름은 "Details", Type은 Popup. 화면은 Samples 목록 오른쪽에서 밀려 나오는 상세 영역
- 관련 정책: POL-SMP-002
- 호출하는 화면: 96-DWP Details (TI-SPT-02-01, 5-1 [More]), PCR Plate Details (TI-SPT-03-01, 6-1 [More]), Protocol Info (TI-SPT-01-02, 8-1 [More])
- 다른 프레임: [TI-SPT-01-01/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1460-109009)

## 기존 화면

### 화면 글자

- (왼쪽) TI-SPT-01 Samples 목록 (축소)
- AA0005005 | PB | Running | X
- Process | Module | Unit | Start Date/Time | End Date/Time
- Sample Preparation | - | - | 2026-03-05 10:40:30 | 2026-03-05 11:00:00
- Nucleic Acid Extraction | High-throughput Extraction | M9600 | 2026-03-05 11:10:30 | -
- PCR Setup | PCR Setup | STARlet | - | -
- Plate Sealing | Plate Sealing | Sealer (1) | - | -
- PCR | Universal PCR | CFX96 (2) | - | -
- General: Sample Type Sputum | Order Date | Start Date/Time 2024-07-01 09:00 | End Date/Time - | Canceled Date - | Canceled - | STAT -
- Sample Location: Location Type Trolley | Return Status N | Trolley Name | Tray Position 3F / C02 | STAT Slot No. - | Socket ID SK462135 | Socket Position B05
- 96-DWP Plate | More: ID SDP0096B14253616467 | Well No. CO1
- PCR Plate | More: ID SDP0096B14253616467 | Well No. AO2
- Reagent Info: Kit | Barcode
- PBS Standard Tube | PR0925I01LB12354
- STARMag Universal Cartridge Kit | 260520280609EX294628G01EB144S
- Allplex™ GI-Bacteria(I) Assay | 260520280809GI04XMOM
- Protocol Info | More

### 사용 컴포넌트

Description Number (12), Table (11), Tag Status (11), Table/Filled Table Cell (10), Arrow/Chevron_Right (10), Title (8)

### 디스크립션 (원문)

#### 0. Sample Details 화면

- 정의
- 검사 중 또는 검사 완료된 검체의 상세 정보를 볼 수 있는 화면
- 기본 정보 및 단계별 정보 노출
- 동작
- 리스트 영역 선택 시, 기존 리스트 영역이 좌측으로 축소되며 우측에서 상세 페이지가 밀고 나오며 노출

#### 1. Sample Details 타이틀 영역

- 정의
- 검체의 기본 속성 정보 영역
- 표출 항목
- Sample ID
- Product : RP1, RP2, RP3, PB, GI-V, GI-B1, GI-B2, GI-P, Allplex_HPV28, STI-12
- Status : 공통 UX 참고(COMM-4-a)

#### 2. 검사 단계 정보 영역

- 정의
- 검사 프로세스 단계별 장비 및 검사 시간 정보 영역
- 모든 단계의 Module 및 Unit 정보는 Run Start 시점부터 노출
- Start 및 End Date/Time의 경우 해당 단계 진/출입 시 노출
- 표출 항목
- Process : Sample Preparation, Nucleic Acid Extraction, PCR Setup, Plate Sealing, PCR
- Module : Module 고유 ID 정보(단, Sample Preparation 단계의 경우 Module/Unit 정보 미노출)
- Unit : 상위 Module내 Unit 고유 ID 정보
- Start Date/Time : 샘플이 담긴 Plate를 장치에 놓는 시점
- End Date/Time : 샘플이 담긴 Plate를 작업이 끝난 후 장치에서 가져나가는 시점

#### 3. General 영역

- 정의
- 검체의 기본 속성 정보 영역
- 사용자가 선택한 리스트 내 표출되는 정보와 동일한 정보
- 표출 항목
- Sample Type
- Order Date
- Start Date/Time : Prep 장비에서 바코드 찍은 시간 시점
- End Date/Time : L-IOS가 D.A.PC(결과처리 시스템)로부터 검사 결과를 받은 시점
- Canceled Date : 데이터 존재 시 노출/부재시 ‘-’ 노출
- Canceled : 데이터 존재 시 노출/부재시 ‘-’ 노출
- Status : 정의된 검체 상태 중 해당 되는 상태 노출
- STAT : 데이터 존재 시 노출/부재시 ‘-’ 노출

#### 4. Sample Location 영역

- 정의
- [Sample Storage] Module에서의 검체 위치 노출 영역
- 샘플 회수 전 : InboundTrolley 내 검체 위치 값
- 샘플 회수 후 : Outbound Trolley 내 검체 위치 값
- 샘플 투입 유형별 표출 데이터 노출 예시
- : TI-SPT-01-01/Case > Case 2
- 표출 항목
- Location Type(샘플 투입구 유형) : Trolley, STAT
- Return status
- : N [샘플 회수 전 : InboundTrolley 정보]
- : Y [샘플 회수 후 : Outbound Trolley 정보]
- Trolley Name : 시스템에 등록된 Trolley ID 정보 (8자리)
- Tray Position : 트레이 층수(F 단위 표기) / 위치
- STAT Slot No. : STAT 슬롯 내 Socket 순번
- Socket ID : 육안으로 확인 가능한 Socket ID 정보
- Socket Position : Socket 내 Sample 위치 정보

#### 5. 96-DWP Plate 정보 영역

- 정의
- 검사 단계별 사용 Plate 상세 정보 영역
- 선택된 검사 단계에서의 Plate 상세 정보 노출
- 표출 항목
- ID : Plate 고유 ID (바코드 정보)
- WELL No. : Plate 내 검체 위치 (행/열 좌표 정보)

#### 5-1. [More] 버튼

- 정의
- 96-DWP Plate 상세 정보 이동 버튼
- 동작
- 클릭 시 [96 DWP] 메뉴 내 해당 Sample가 포함된 Plate 상세 정보 페이지로 즉시 이동
- 이동 시 해당 Sample이 Plate 내에서 해당 검체만 활성화 된 상태로 노출

#### 6. PCR Plate 정보 영역

- 정의
- 검사 단계별 사용 Plate 상세 정보 영역
- 선택된 검사 단계에서의 Plate 상세 정보 노출
- 표출 항목
- ID : Plate 고유 ID (바코드 정보)
- WELL No. : Plate 내 검체 위치 (행/열 좌표 정보)

#### 6-1. [More] 버튼

- 정의
- PCR Plate 상세 정보 이동 버튼
- 동작
- 클릭 시 [PCR Plate] 메뉴 내 해당 Sample가 포함된 Plate 상세 정보 페이지로 즉시 이동
- 이동 시 해당 Sample이 Plate 내에서 해당 검체만 활성화 된 상태로 노출

#### 7. Reagents 정보 영역

- 정의
- 검사 단계별 사용(투입)된 시약 정보 오름차순 노출
- 노출
- 검사 단계의 시약 데이터가 존재할 경우에만 영역 노출, 데이터 부재 시 영역 전체를 미노출 처리
- 정렬
- 공통 UX 참고 : COMM-4-a
- 표출 항목
- Kit : 시약 제품명 (구성품 단위 노출 X)
- Barcode : 바코드 체계 참고 (COMM-4-b)
- 단, 하위 시약은 대표 바코드 표기
- 1) M96 Kit : LB DWP 바코드
- 2) UC Kit : TUB 대표 바코드 (EB TUB 오른편에 부착된 바코드)

#### 8. Protocol 정보 영역

- 정의
- 전처리 및 핵산추출 단계에서 적용된 프로토콜 정보
- Protocol Setting 메뉴에서 생성 관리
- 표출 항목
- Pre-Treatment Protocol
- : 전처리 단계에서 적용된 프로토콜 명 노출
- Extraction Protocol
- : 핵산 추출 단계에서 적용된 프로토콜 명 노출

#### 8-1. [More] 버튼

- 정의
- Protocol 상세 정보 노출 버튼
- 동작
- 클릭 시, TI-SPT-01-02 팝업 노출

#### 9. [X] 버튼

- 클릭 시, 상세 정보가 닫히고, 리스트 영역이 우측으로 확장되어 노출

### 케이스

- Case 1. 검체 상태별 데이터 노출 항목
- Case 2. 샘플 투입 유형별 표출 데이터 노출 예시

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 화면 이름 "Samples Details", 경로 "Sample Tracking > Samples Details", 디스크립션 0·1 "Sample Details" | IA 기준(Samples > Details)으로 이름 하나로 | `ia/ia-screens.csv` | 대기 |
| R02 | 표기 | 1 Product "Allplex_HPV28" | Allplex HPV28 | `glossary/test-items.csv` UI 표기 | 대기 |
| R03 | 디스크립션 | 2 Module·Unit "고유 ID 정보"인데 화면은 Module 이름(High-throughput Extraction)과 Unit 이름(M9600, Sealer (1)) | 이름 (번호)로 표시한다고 고쳐 씀 | `glossary/terms.csv` Module, Unit | 대기 |
| R04 | 디스크립션 | 3 General 표출 항목에 Status가 있는데 화면 General 영역에는 없음 (Status는 타이틀 영역에 있음) | 하나로 맞춤 | 화면 글자 | 대기 |
| R05 | 디스크립션 | 4 "InboundTrolley", "Return status" (화면은 Return Status) | Inbound Trolley, Return Status | 표기 | 대기 |
| R06 | 디스크립션 | 5·6 "WELL No." (화면은 Well No.), 화면 예시 "CO1", "AO2" (영문 O) | Well No., C01, A02 | 화면 글자 | 대기 |
| R07 | 디스크립션 | 5-1 "[96 DWP] 메뉴", "Sample가" | [96-DWP] 메뉴, Sample이 | `glossary/terms.csv` DWP, 오타 | 대기 |
| R08 | 디스크립션 | 7 제목 "Reagents 정보 영역" (화면은 Reagent Info), 정렬 "공통 UX 참고 : COMM-4-a" (상태값 문서) | 제목 맞춤, 정렬 기준 문서 확인 | 화면 글자 | 대기 (확인 필요) |
| R09 | 디스크립션 | 8-1 [More]는 TI-SPT-01-02만 엶. Extraction Protocol 팝업(TI-SPT-01-03)이 따로 있음 | Pre-Treatment·Extraction 각각 어느 팝업을 여는지 적음 | `ia/ia-screens.csv` | 대기 |
| R10 | 디스크립션 | 3 Start Date/Time "Prep 장비에서 바코드 찍은 시간", 4 "[Sample Storage] Module", "샘플 투입구" | 표준어 (Sample Storage Module, Module 이름) | `glossary/terms.csv` | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.02 | | Sample Detail 화면 보완: 정보 그룹핑 기준 수정, Sample Location 정보 항목 추가, Protocol Info 정보 추가 | 정다예 | Figma 버전 메모 |
| 2.1.11 | 2026-10-08 | 워딩 수정 (언어셋 반영): Tray Floor / Position → Tray Position | 정다예 | Figma 버전 메모 |
