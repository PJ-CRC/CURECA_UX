---
cid: TI-DAS
pair_cid: LI-DAS
tl_relation: 기능 추가
title: Dashboard
path: Dashboard
type: Page
version: 2.1.14
date: 2026.10.30
author: 서보경
client_mode: []
user_type: [Service, Admin, User]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-7110
---
# TI-DAS Dashboard

> 기존 화면(작업방 `Dashboard_asis` 페이지, Ver 2.1.14)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS(LI-DAS)에는 4-1 CURECA 구동 컨트롤러([Initialize] · [Stop])와 5-2 [Unlock] 버튼(화면 글자는 `Door control`)이 더 있어 5-2 Event 표기 영역이 L에서는 5-3. 화면 글자도 다른 곳이 있음: Inventory Status 탭 `Empty`(T) / `Insufficient`(L), 시약 줄 `270 rxns (3 sockets)`(T) / `(3 sets)`(L), Event 툴팁 예시 글, GNB 시스템 표시, LNB 메뉴
- 호출하는 화면: [TI-TMG-02] Test Status (3-1 [+More]), Instrument Overview Tab (5-1 [+More]), Inventory Summary Tab (6-1 · 7-1 [+More])
- 호출되는 곳: LNB `Dashboard` (0 진입 방법)
- 관련 정책: POL-EQP-001, POL-EQP-002, POL-EQP-004, POL-SMP-001, POL-SMP-004, POL-SMP-009
- 참조 프레임: 같은 페이지의 [SB_Dashboard Info](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-8244) (디스크립션 1 · 4가 「Dashboard Info」를 참고하라고 함. 2026-11-26에 아래 케이스 절로 옮김)

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Information | Keira Knightley
- Today’s Orders: Orders 16,560 | Pending 16,560 | In Progress 16,560 | Completed 16,560
- Test Status | More: Running
- Inventory Status | More: Empty 3 | Low 3
  - MB DWP | Required Qty | High-throughput Extraction(1) / MB Storage | 380 rxns (4 DWPs)
  - 5X GI-B(I) MOM, EM2, RNase-free Water, GI-B(I) PC | Required Qty | 270 rxns (3 sockets) | High-throughput Extraction(1) / MB Storage
  - Empty Standard Tube | Required Qty | 80 ea (2 racks) | Consumable Storage (1) / Trolley
  - 300 μL Tip | Required Qty | Consumable Storage (1) / Trolley | 75 ea (1 rack)
  - BB TUB, WB1 TUB, WB2 TUB, WB3 TUB, EB TUB | Required Qty | 60 rxns (1 set) | Flexible Extraction(1) / Buffer Cartridge Storage
- Instrument Status | More | View All
  - Module: Sample Storage | Consumable Storage | Sample Pre-treatment | High-throughput Extraction | Flexible Extraction | PCR Setup | Plate Sealing | Universal PCR
  - 행 이름: Status | Door Status | Event
  - Module마다 값(Status · Door Status · Event 순): `- 1 - - / Open - / 0 0` | `- - 1 - / Open 1 / 0 0` | `1 3 1 - / Open 1 / 0 0` | `- 2 1 1 / Open 1 / 0 0` | `- 2 - 1 / Open 1 / 0 0` | `- 3 1 - / Open 1 / 0 0` | `- 1 1 - / Open 1 / 0 0` | `1 4 1 - / Open 1 / 0 0`
  - Event 툴팁: [HT Extraction(3)] / ER-0112, 유닛의 상태를 확인해주세요.
- Waste Bin/Bottle Status | More: Full 3 | Almost Full 3
  - Waste Bin | Full | High-throughput Extraction(1)
  - Liquid Waste Bottle | Full | Flexible Extraction(1)
  - Waste Bin | Full | PCR Setup(1)
  - Waste Bin | 88% | PCR Setup(2)
  - Waste Bin | 75% | Flexible Extraction(2)

### 사용 컴포넌트

Frame/Instrument_Status (32), Tag Status (16), Description (15), Description Number (11), Table/Filled Table  Cell (8), Interface/Plus (4), Icon/Alert Error (3), Title (3), Button/Tertiary XSmall (1), Tooltip (1), Component 4 (1), Frame (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 시스템에 관련된 Test Order, Instrument, Storage, Waste bin/bottle 현황 등 전반적인 정보를 제공한다.
- 진입 방법
- LNB의 ‘Dashboard’ 메뉴를 통해 진입할 수 있다.

#### 1. Today’s Orders

- Dashboard Info 페이지 내 ‘Sample 상태값’ 참고
- Orders: Lis를 통해 접수된 Order 수의 총합
- 카운팅 기준: 오늘 날짜로 접수된 검사
- Pending: 잔여 검체 수량(Ordered + Not Tested)
- In Progress: 검사가 진행 중인 검체 수량(Ready + Running)
- Completed: Completed, Failed
- 리셋 기준: Policy Setting > ‘Test Cut-off Time’에 설정된 마감시간 기준으로 리셋

#### 3. Test Status

- Test Status 메뉴의 전체 검사 요약 정보 부분과 동일함
- 해당 메뉴 디스크립션 ‘[2]전체 검사 현황 요약 정보 영역’ 내역 참고
- CID: TI-TMG-02

#### 3-1. [+More] 클릭

- Test Status 페이지 이동

#### 4. CURECA 전체 구동 상태

- Dashboard Info 내 정의된 [전체 Cureca 구동 상태 값] 및 [구동 프로세스] 참고

#### 5. Instrument Status

- 장비 상태 현황을 파악할 수 있는 영역이며 Instrument 메뉴의 Overview tab과 유사한 형태로 장비의 상태값과 door를 컨트롤 할 수 있음
- Instrument 메뉴와 동일한 구조로 해당 페이지 참고 부탁드립니다.
- (표기되는 정보는 살짝 상이합니다.)

#### 5-1. [+More] 클릭

- Instrument의 ‘Overview’ Tab으로 페이지 이동

#### 5-2. Event 표기 영역

- Module에서 발생한 장비 Event가 존재할 경우 표시됨
- 아이콘 표시
- Event Level에 따라 차등 표현(Error/Warning)
- Event Icon
- 노출 방식: 아이콘 클릭 시 툴팁형식으로 내용이 노출되며, X 클릭 시 닫히는 방식
- 노출 조건: Event 상태가 ‘Open’인 항목이 존재할 경우
- 표시 기준: ‘Open’ 상태 Event 중 최신 1건 표시됨
- 표기 형식:
- [{Module Name}]\n{Event Code}, {Event Description}

#### 6. Inventory status 영역

- 구동 시 필요한 소모품 및 시약 정보를 요약해서 보여주는 영역으로 Insufficient  및 Low 상태값의 리스트만 노출됨
- 노출 정책
- 통합 구동상태 또는 Sample Storage의 Storage Unit의 Docking 상태에 따라 표기(OR 조건)
- Sample Storage의 ‘Inbound Trolley’ Unit이 ‘Docking’ 상태가 아니면서 통합 상태가 ‘Running’이 아닌 경우
- ‘Shown only if system running or Inbound Trolley docked’
- 통합 상태가 Running이거나 Sample Storage의 ‘Inbound Trolley’ Unit이 ‘Docking’ 상태이나 부족한 소모품이나 시약이 없을 경우
- ‘No actions required’ 표기
- 통합 상태 Run O / Docking X = 부족량 노출
- 통합 상태 Run X / Docking O = 부족량 노출
- 통합 상태 Run X / Docking X = ‘Shown only if system running or Inbound Trolley docked’ 문구 표기
- 정렬 기준
- Inventory - Summary Tab의 ‘Inventory status’와 동일하여 해당 페이지 참고 부탁드립니다.

#### 6-1. [+More] 클릭

- Inventory 메뉴의 Summary tab으로 이동

#### 7. Waste Bin/Bottle Status

- Waste bin/bottle의 정보를 요약해서 보여주는 영역으로 Full 및 Almost Full 상태값의 리스트만 노출됨
- 노출 기준: 항시 노출
- 노출되는 아이템이 없을 경우, ‘No actions required’ 표기
- 정렬 기준
- Inventory - Summary Tab의 ‘Waste Bin/Bottle Status’와  동일하여 해당 페이지 참고 부탁드립니다.

#### 7-1. [+More] 클릭

- Inventory 메뉴의 Summary tab으로 이동 및 ‘Waste Bin/Bottle’ 섹션으로 포커싱되어 이동됨

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

`TI-DAS/Case` 이름의 프레임은 없고, 디스크립션 1 · 4가 참고하라고 한 별도 프레임 `SB_Dashboard Info`([3543:8244](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-8244), 2150×1695, 기획 프레임 밖)에 케이스 하나가 있습니다. 오른쪽 패널은 빈 틀입니다(Ver 0.1, Date 2026.00.00, CID `text`, 작성자 `이름`, 화면 `화면이름`, 경로 `경로 > 경로2`, 디스크립션 0 · 1 · 2 `내용`). 원본에 Case 번호가 없습니다. 디스크립션 1이 함께 가리키는 [전체 Cureca 구동 상태 값] · [구동 프로세스]는 이 프레임에 없습니다(구동 프로세스는 같은 페이지의 L-IOS 쪽 섹션, LI-DAS 참조 섹션 절).

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| - | Inventory Status 영역 및 Waste Bin/Bottle Status 영역 노출 케이스 | 표시할 항목이 있을 때 / 없을 때 | 위 프레임 y 141 |

- 왼쪽(항목 있음)
  - Inventory Status | More — Insufficient 1 | Low - / MB DWP — Required Qty 380 rxns (4 DWPs), High-throughput Extraction(1) / MB Storage
  - Waste Bin/Bottle Status | More — Full 2 | Almost Full - / High-throughput Extraction(1) Waste Bin Full · PCR Setup(1) Waste Bin Full
- 오른쪽(항목 없음)
  - Inventory Status | More — Insufficient - | Low - / `Shown only if system running or Inbound Trolley docked`
  - Waste Bin/Bottle Status | More — Full - | Almost Full - / `No actions required`
