---
cid: LI-SPT-01-01
pair_cid: TI-SPT-01-01
tl_relation: 동일
title: Samples Details
path: Sample Tracking > Samples Details
type: Popup
version: 2.1.11
date: 2026.10.08
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-168191
---
# LI-SPT-01-01 Samples Details

> 기존 화면(작업방 `Samples_asis` 페이지, Ver 2.1.11)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: 4 Sample Location만 다름(L `검체 투입구 유형` · `Trolley ID` · Socket ID/Position 설명 없음, T `샘플 투입구 유형` · `Trolley Name` · Socket ID/Position 설명 있음). 화면 글자는 GNB · LNB, General의 End Date/Time 값(L `2024-07-01 10:30`, T `-`), Sample Location 라벨(L `Trolley ID`, T `Trolley Name`)이 다름
- 호출하는 화면: [TI-SPT-01-02] Protocol Info (8-1 [More], 원문 표기 그대로), 96 DWP · PCR Plate 메뉴의 Plate 상세 (5-1 · 6-1 [More])
- 호출되는 곳: [LI-SPT-01] Samples 리스트 행 클릭 (2)

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) LIOS | Dashboard | Material Setup | Test Management | Sample Tracking | Samples | 96-DWP | PCR Plate | Instrument | Inventory | Setting | Information | Quick Start | Run | Keira Knightley | Shut Down
- 왼쪽(축소된 Samples 목록): Samples | 검색 영역(LI-SPT-01과 같음) | Items 638 | Export | 목록 10행(LI-SPT-01과 같음) | 1 ~ 10
- 오른쪽 상세
  - AA0005005 | PB | Running
  - Process | Module | Unit | Start Date/Time | End Date/Time
    - 1 | Sample Preparation | - | - | 2026-03-05 10:40:30 | 2026-03-05 11:00:00
    - 2 | Nucleic Acid Extraction | High-throughput Extraction | M9600 | 2026-03-05 11:10:30 | -
    - 3 | PCR Setup | PCR Setup | STARlet | - | -
    - 4 | Plate Sealing | Plate Sealing | Sealer (1) | - | -
    - 5 | PCR | Universal PCR | CFX96 (2) | - | -
  - General: Sample Type Sputum | Order Date 2024-07-01 | Start Date/Time 2024-07-01 09:00 | End Date/Time 2024-07-01 10:30 | Canceled Date - | Canceled - | STAT -
  - Sample Location: Location Type Trolley | Return Status N | Trolley ID 8462-1981 | Tray Position 3F / C02 | STAT Slot No. - | Socket ID SK462135 | Socket Position B05
  - 96-DWP Plate | More: ID SDP0096B14253616467 | Well No. CO1 — PCR Plate | More: ID SDP0096B14253616467 | Well No. AO2
  - Reagent Info (Kit | Barcode): PBS Standard Tube PR0925I01LB12354 / STARMag Universal Cartridge Kit 260520280609EX294628G01EB144S / Allplex™ GI-Bacteria(I) Assay 260520280809GI04XMOM
  - Protocol Info | More: Pre-Treatment Protocol Test Protocol AA | Extraction Protocol Test Protocol BB

### 사용 컴포넌트

Description Number (12), Table (11), Tag Status (11), Frame 50 (10), Frame 42 (10), Table/Filled Table  Cell (10), Frame 1984080522 (10), Frame 1984080523 (10), Arrow/Chevron_Right (10), Title (8), Square (5), Dropdown Outlined (5), Frame/Instrument_Status (3), Interface/Info_Circle_Outlined (1), Contents/Scroll Bar (1), Interface/Close (1), Page number (1), Form/Input Text Box (1), Checkbox (1), Interface/Plus (1), Component 4 (1), Frame (1)

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
  - : LI-SPT-01-01/Case > Case 2
- 표출 항목
- Location Type(검체 투입구 유형) : Trolley, STAT
- Return status
  - : N [샘플 회수 전 : InboundTrolley 정보]
  - : Y [샘플 회수 후 : Outbound Trolley 정보]
- Trolley ID : 시스템에 등록된 Trolley ID 정보 (8자리)
- Tray Position : 트레이 층수(F 단위 표기) / 위치
- STAT Slot No. : STAT 슬롯 내 Socket 순번
- Socket ID
- Socket Position

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
  - 2) UC Kit : TUB  대표 바코드 (EB TUB 오른편에 부착된 바코드)

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

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | 검체 상태별 데이터 노출 항목 | 노란 띠 「검사 진행 중 오더 취소된 검체」 · 「검사 대기 중 검체 (Trolley에서 검사 대기 중인 검체) 및 Not Tested 상태 검체」 | [LI-SPT-01-01/Case](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-169420) |
| 2 | 샘플 투입 유형별 표출 데이터 노출 예시 (패널 화면 이름: 검체 상태별 데이터 노출 항목) | 노란 띠 「Trolley로 검체를 투입한 경우」 · 「STAT으로 검체를 투입한 경우」 | 같은 프레임 |

- Case 1 (원문)
  - 검사 진행 중 오더 취소된 검체 — 검사 진행 중 취소가 된 건으로 검사 진행 결과는 동일하게 노출 / 취소 일자 및 취소 상태 노출 — 예시: 기본 화면 상세와 같고 General `Canceled 2024-07-02`
  - 검사 대기 중 검체 (Trolley에서 검사 대기 중인 검체) 및 Not Tested 상태 검체 — 검사가 진행되지 않았으나 검사 예정 장비 스케줄은 노출 가능함으로 Module, Unit 정보만 노출 / Plate 정보와 Reagent 정보는 검사 과정에서 생성되는 정보로 - 노출, More 버튼 Disabled 상태로 노출 — 예시: AA0005005 | PB | Ready, 단계별 Start/End `-`, General Start Date/Time `-` · Canceled `2024-07-02`, Plate ID · Well No. `-`, Reagent `-`
- Case 2 (원문)
  - Trolley로 검체를 투입한 경우 — STAT Slot No. 정보가 없음으로 하이픈(-)으로 노출 / Tray Floor / Position : 트레이의 층 수와 위치 값 노출 — 예시: Location Type Trolley | Return Status Y | Trolley Name 8462-1981 | Tray Position 3F / C02 | STAT Slot No. - | Socket ID SK462135 | Socket Position B05
  - STAT으로 검체를 투입한 경우 — Trolley 및 Tray 정보가 없음으로 하이픈(-)으로 노출 / STAT Slot No. : STAT내 순번 노출 — 예시: Location Type STAT | Return Status Y | Trolley Name - | Tray Position - | STAT Slot No. 3 | Socket ID SK462135 | Socket Position B05
- 케이스 패널: Case마다 화면 정보만 있고 디스크립션 없음(번호 칸 `0`)
