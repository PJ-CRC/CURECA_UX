---
cid: LI-IVT-02-T
pair_cid: TI-IVT-02-T
tl_relation: 동일
title: Inventory Overview
path: Inventory > Overview Tab
type: Tab
version: 2.1.18
date: 2026.11.19
author: 이상헌
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-371729
---
# LI-IVT-02-T Inventory Overview

> 기존 화면(작업방 `Inventory_asis` 페이지, Ver 2.1.18)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: 기능 · 디스크립션 같음. LNB 메뉴만 다름. 케이스 프레임의 Consumable Storage (1) 예시 항목 순서만 다름(L은 LB DWP가 두 번째)
- 호출하는 화면: Alert_020 (3 데이터 로드 실패)
- 호출되는 곳: LNB > Inventory > Overview Tab (0 진입 방법), [LI-IVT-01-T] 등 Inventory Tab 구성
- 관련 정책: POL-INV-001, POL-INV-002, POL-EQP-009, POL-LOD-001

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) LIOS | Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Information | Quick Start | Run | Keira Knightley | Shut Down
- Inventory
- Tab: Summary | Overview | Consumables | Reagent | Waste Bin/Bottle | Usage History
- Overview by Module | Refresh
- Module 열 (각 열 위 드롭박스 All)
  - Sample Storage: Samples (Inbound Trolley) 0 ea (0 racks) | Samples (Test In Progress) 48 ea (1 racks) | Samples (Outbound Trolley) 912 ea (19 racks)
  - Consumable Storage: 96-DWP 3 ea | 1000 μL Tip 288 ea (3 racks) | 300 μL Tip 196 ea (2 racks) | Wide Bore Tip 288 ea (3 racks) | Empty Standard Tube 144 ea (3 racks) | Stool Swab 72 ea (3 racks) | LB DWP 288 rxns (3 DWPs) | GI-BP IC 200 rxns (2 tubes) | GI-V IC 200 rxns (2 tubes) | PB IC 200 rxns (2 tubes) | RP-V IC 200 rxns (2 tubes) | STI-12 IC 200 rxns (2 tubes) | LB Tub 96 rxns (1 rack) | LB Tub (Prep) 300 rxns (3 racks) | PBS Tub 300 rxns (3 racks) | Saline Tub 300 rxns (3 racks) | ASL Standard Tube 144 rxns (3 racks) | PBS Standard Tube 144 rxns (3 racks) | PK Tube 96 rxns (1 tube) | Prelyser Standard Tube 144 rxns (3 racks) | Saline Standard Tube 144 rxns (3 racks)
  - High-throughput Extraction: EB DWP 288 rxns (3 DWPs) | MB DWP 288 rxns (3 DWPs) | WB1 DWP 288 rxns (3 DWPs) | WB2 DWP 288 rxns (3 DWPs) | Spin Tip 96 rxns (1 DWP)
  - Flexible Extraction: MB Tube 96 rxns (1 tube) | BB Tub, EB Tub, WB1 Tub, WB2 Tub, WB3 Tub 384 rxns (4 sets) | Buffer Cartridge Cap 10 ea (2 sets)
  - PCR Setup: PCR Plate 10 ea | 1000 μL Tip 288 ea (3 racks) | 300 μL Tip (1) 288 ea (3 racks) | 300 μL Tip (2) 288 ea (3 racks)
  - Plate Sealing: MM Tube 14 ea (1 socket) | Sealing Film (1) 100 ea | Sealing Film (2) 120 ea | Allplex™ GI-Bacteria(I) Assay 300 rxns (3 sets) | Allplex™ GI-Bacteria(II) Assay 300 rxns (3 sets) | Allplex™ GI-Virus Assay 300 rxns (3 sets) | Allplex™ HPV28 Detection 300 rxns (3 sets) | Allplex™ PneumoBacter Assay 300 rxns (3 sets) | Allplex™ Respiratory Panel 1 300 rxns (3 sets) | Allplex™ Respiratory Panel 2 300 rxns (3 sets) | Allplex™ Respiratory Panel 3 300 rxns (3 sets) | Anyplex™II STI-12 Detection 300 rxns (3 sets)

### 사용 컴포넌트

⛔️ Item_Segment Tabs (6), Form/Dropdown Box (6), Description Number (6), Interface/Info_Circle_Outlined (1), Square (1), Frame (1), Component 4 (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 장비의 모든 모듈의 재고 현황을 한눈에 볼 수 있는 화면이다. 모듈별 총합 또는 특정 모듈의 현황도 조회할 수 있다.
- 진입 방법
- LNB의 ‘Inventory의 ‘Overview Tab’을 통해 진입할 수 있다.
- 데이터 기준
- 사용여부가 ‘사용’인 모듈 대상으로만 노출된다.

#### 1. Module 노출 기준

- 화면에 표시된 순서에 따라 노출된다.
- Sample Storage(신규 추가)
- Consumable Storage
- High-throughput Extraction
- Flexible Extraction
- PCR Setup
- Plate Sealing
- 시약/소모품 정렬 방식: ‘common ‘COMM-4-b’ 참고
- 케이스별 노출 기준
- 아래 Inventory Overview Detail Info 예시 참고하여 작업요청

#### 1-1. Sample Storage

- Samples (Inbound Trolley)
- 투입 트롤리에 입고된 검체 수 표기
- Samples (Test In Progress)
- 전처리 장비로 이동된 검체 수 표기
- Samples (Outbound Trolley)
- 회수 트롤리에 회수된 검체 수 표기
- 표기 단위
- 검체 수 (입고 단위) = N ea (M racks)

#### 1-2. 모듈 선택 드롭박스

- Module(index형)
- 모듈 고유 식별값(Index)이 포함된 모듈명을 기준으로 검색
- Default: All / 데이터: All, 해당 타입의 Module name List(오름차순)
- Dropdown 적용 방식: COMM-5-f(1/2)의 type1
- 선택 완료 후 해당 모듈의 재고 현황으로 데이트 업데이트하여 노출

#### 1-3. Remaining Qty

- 최대 적재량 표기 방식 제거
- 합산 기준
- Storage 영역과 장비 내 거치 공간(장비가 가져간 소모품 포함)의 수량을 모두 합산하여 재고로 표시
- 단,장비 내 거치 공간에 있는 소모품은 실시간으로 차감되지 않는며, 적재된 순간의 수량을 그대로 유지한다.
- 소모품이 모두 소진되거나 다시 Storage로 반환되는 기준으로 인벤토리 재고가 업데이트 됨
- 진입 시, 기준으로 적재량 표기되며 실시간 반영이 아닌 Refresh버튼을 통해 데이터 새로고침 진행하는 구조
- 표기 단위 규칙
- 표기 단위: ‘common ‘COMM-4-b’ 참고
- ~~2-3~~
- ~~최대 적재 용량이 있을 경우~~
- ~~표기 방식~~
- ~~게이지 바 및 잔여 재고 비율(%) 표시~~
- ~~“잔여 수량/ 총 적재 가능 수량(입고 단위 수량)” 형식으로 제공~~
- ~~잔여 수량=낱개 단위로 총 수량~~
- ~~입고 단위 수량=Rack 또는 Set 단위 기준으로 환산하여 묶음 단위로 표기됨~~
- ~~표기 단위: ‘common ‘COMM-4-b’ 참고~~

#### 2. Overview by Module Tooltip

- 동작 : COMM-5-o
- 툴팁 내용 : Displays total inventory aggregated across all modules . Select a module to view its individual stock details

#### 3. [Refresh] 버튼

- 버튼 클릭 시 데이터가 최신 상태로 갱신되어 표시
- 데이터 로드 실패
- 데이터 불러오기를 실패할 경우, Alert_020 팝업 노출

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 기획 프레임 바로 아래의 별도 프레임 `SB_Inventory_Overview_Detail Info`([3543:371957](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-371957), 2252×1201)에 있습니다. 1 "케이스별 노출 기준"이 가리키는 "Inventory Overview Detail Info"입니다. 원본에 Case 번호가 없습니다(프레임 오른쪽 패널은 빈 틀: Ver 2.1.12, Date 2026.10.16, CID `text`).

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| - | 장착된 트롤리가 없을 경우 | Consumable Storage에 도킹된 트롤리 없음 | 위 프레임 |
| - | 등록된 모듈이 없을 경우 | 그 Module 열에 등록된 모듈 없음 | 위 프레임 |
| - | 입고 종류에 따라 가변형으로 변하는 Storage(대상:Consumable Storage, Plate Sealing) | 트롤리 · 냉장저장소에 입고된 것만 표출 | 위 프레임 |

- 장착된 트롤리가 없을 경우: Consumable Storage | All | `No docked trolleys`
- 등록된 모듈이 없을 경우: Consumable Storage | All | `No registered modules available`
- 가변형 Storage — Consumable Storage: 설명 `트롤리에 소모품을 구성하여 넣는 케이스 트롤리에 입고된 소모품 리스트만 표출됨 해당 페이지 진입 시, 진입 기준으로 재고 조회하여 이미 다 소진된 아이템은 제외하여 표시` / Consumable Storage (1) 선택: 96-DWP 3 ea | LB DWP 288T (3 DWPs) | 1000 μL Tip 288 ea (3 racks) | 300 μL Tip 196 ea (2 racks) | Wide Bore Tip 288 ea (3 racks)
- 가변형 Storage — Plate Sealing: 설명 `PCR 시약을 넣는 냉장저장소일 경우, 24칸에 검사에 필요한 시약을 구성하여 넣기 때문에 정확히 어떤 시약이 입고될지 알 수 없음. (단, MM Tube는 파악 가능) 입고된 시약 기준으로 노출 필요 입고된 시약의 Kit명으로 노출(시약명 오름차순)` `~~Sealing Film과 MM Tube는 Capacity가 있어 상단에 표기~~` / All: Allplex™ HPV28 Detection 300T (3 sets) | Allplex™ PneumoBacter Assay 300T (3 sets) | Allplex™ Respiratory Panel 1 300T (3 sets) | Allplex™ Respiratory Panel 2 300T (3 sets)
