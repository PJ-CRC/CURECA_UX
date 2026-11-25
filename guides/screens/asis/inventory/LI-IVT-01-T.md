---
cid: LI-IVT-01-T
pair_cid: TI-IVT-01-T
tl_relation: 동일
title: Inventory Summary
path: Inventory > Summary Tab
type: Tab
version: 2.1.18
date: 2026.11.19
author: 이상헌
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-361772
---
# LI-IVT-01-T Inventory Summary

> 기존 화면(작업방 `Inventory_asis` 페이지, Ver 2.1.18)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: 기능 같음. LNB 메뉴만 다름. T-IOS(TI-IVT-01-T)는 1-3에 Capacity 줄이 취소선으로 남아 있고(L에는 없음), L은 1-7 툴팁 첫 줄이 취소선(T는 취소선 없음)
- 호출하는 화면: 없음 (1-7 · 3-5 툴팁, 4 [Refresh]만)
- 호출되는 곳: LNB > Inventory > Summary Tab (0 진입 방법). Inventory Tab 구성: Summary | [LI-IVT-02-T] Overview | [LI-IVT-03-T] Consumables | [LI-IVT-04-T] Reagents | [LI-IVT-05-T] Waste Bin/Bottle | [LI-IVT-06-T] Usage History

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) LIOS | Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Information | Quick Start | Run | Keira Knightley | Shut Down
- Inventory
- Tab: Summary | Overview | Consumables | Reagents | Waste Bin/Bottle | Usage History
- Inventory status | Refresh
  - 요약: Insufficient 3 (Comsumable 3 · Reagent -) | Low 5 (Comsumable 3 · Reagent 2)
  - 1 MB DWP | High-throughput Extraction(1) / MB Storage | Remaining Qty 0 | Required Qty 250 rxns (3 DWPs)
  - 2 EB DWP | High-throughput Extraction(1) / EB Storage | Remaining Qty 0 | Required Qty 250 (3 DWPs)
  - 3 300 μL Tip | PCR Setup(1) / 300 μL Tip Storage | Remaining Qty 0 | Required Qty 100 ea (2 racks)
  - 4 PBS Tub | Consumable Storage (2) / Trolley | Remaining Qty 200 rxns (2 racks) | Required Qty 300 rxns (3 racks)
  - 5 1000 μL Tip | Consumable Storage (2) / Trolley | Remaining Qty 96 ea (1 rack) | Required Qty 150 ea (2 racks)
  - 6 BB TUB, WB1 TUB, WB2 TUB, WB3 TUB, EB TUB, MB Tube | Flexible Extraction(1) / Buffer Cartridge Storage | Remaining Qty 100 rxns (1 set) | Required Qty 150  rxns (2 sets)
  - 1/2
- Waste Bin/Bottle Status | Refresh
  - 요약: Full 2 | Almost Full 20
  - 1 PCR Setup(1) Waste Bin | Fill level Full
  - 2 FlexibleExtraction(1) Liquid Waste Bottle | Fill level Full
  - 3 High-throughput Extraction(1) Waste Bin | Fill level 90%
  - 4 Plate Sealing(1) Sealer Waste Bin | Fill level 85%
  - 5 Universal PCR(1) WasteBin | Fill level 75%
  - 6 Sample Pre-treatment (1) Tip Waste Bin | Fill level 71%
  - 1/3

### 사용 컴포넌트

Description Number (15), ⛔️ Item_Segment Tabs (6), Interface/Info_Circle_Outlined (2), Square (2), Component 4 (1), Frame (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 장비의 사용되는 소모품, 시약 및 폐기물함을 관리하는 Tab으로 구성되어 있으며 각 Tab에서 중요한 정보만 모아서 Summary tab에 요약하여 표기되는 구조이다.
- 진입 방법
- LNB의 ‘Inventory의 ‘Summary Tab’을 통해 진입할 수 있다.
- 데이터 기준
- 사용여부가 ‘사용’인 모듈 대상으로만 노출된다.
- 아이템별 상세한 정보는 해당 Tab의 내용 참고

#### 1. Inventory status 영역

- 현재 검사 진행 중인 기준으로 검사 완료에 필요한 Consumable 및 Reagent 부족 리스트가 노출됨
- 노출 기준: 항시 노출
- 통합 상태 Run O / Docking X = 부족량 노출
- 통합 상태 Run X / Docking O = 부족량 노출
- 통합 상태 Run X / Docking X = 아래 문구 노출
- → ‘Shown only if system running or Inbound Trolley docked’ 문구 표기
- 통합 상태가 Running이거나 Sample Storage의 ‘Inbound Trolley’ Unit이 ‘Docking’ 상태이나 부족한 소모품이나 시약이 없을 경우
- ‘No actions required’ 표기
- 정렬 기준
- 상태값 Insufficient 및 Low 순으로 우선 정렬됨
- 동일 상태값 내에서는 부족 수량이 많은 소모품 또는 시약 순으로 정렬
- 동일 수량일 경우, Name 오름차순 정렬

#### 1-1. 요약 정보

- 리스팅된 항목을 상태값 기준으로 구분하여 Empty 및 Insufficient 2개의 정보로 나눠 표기
- 카드 영역 하위에는 Item Type 기준으로 Consumable 및 Reagent를 나눠 표기

#### 1-2. Title

- Main title: Consumable name 또는 Reagent name
- Sub title: Module Name / Storage Name

#### 1-3. Remaining Qty

- 각 Storage 내 Consumable 또는 Reagent의 잔여 수량을 표시
- 표기 방식
- “잔여 수량(입고 단위 수량)” 형식으로 제공
- 잔여 수량=낱개 단위로 총 수량
- 입고 단위 수량=Rack 또는 Set 단위 기준으로 환산하여 묶음 단위로 표기됨
- 표기 단위: ‘common ‘COMM-4-b’ 참고
- Empty 상태일 경우 ‘0’으로 표시되며 빨간색으로 강조

#### 1-4. Required Qty

- 산출 방식
- 총 필요 수량에서 현재 재고를 제외한 부족 수량을 계산
- 예시: 남은 재고 10개, 필요 수량 14개 → Required Qty = 4

#### 1-5. Stock Status Icon

- Empty 및 Insufficient 각 상태값별로 색으로 구분하여 표기

#### 1-6. Pagination

- 최대 6개 항목 기준으로 구성되며, 초과 시 Pagination 방식으로 추가 항목 탐색 가능하도록 제공
- 좌우 이동 버튼(<, >)을 통해 페이지 전환 수행
- 중앙 영역에 {현재 페이지/총 페이지} 정보 표시됨

#### 1-7. Inventory status Tooltip

- 동작 : COMM-5-o
- 툴팁 내용
- ~~Shows required items by replenishment priority, visible only when system is running or Inbound Trolley is docked~~
- Shows required items by replenishment priority
- Visible only when the system is running or the Inbound Trolley is docked.
- Shows the quantity of consumables required for the Run.

#### 3. Waste Bin/Bottle Status 영역

- Waste bin/bottle의 정보를 요약해서 보여주는 영역으로 Full 및 Almost Full 상태값의 리스트만 노출됨
- 노출 기준: 항시 노출
- 노출되는 아이템이 없을 경우, ‘No actions required’ 표기
- 정렬 기준
- 상태값 Full 및 Almost Full 순으로 우선 정렬됨
- 동일 상태값 내에서는  Fill Level이 높은 순으로 정렬됨
- 동일 수량일 경우, Name 오름차순 정렬

#### 3-1. 요약 정보

- 목록에 리스팅된 항목을 상태값 기준으로 구분하여 Full 및 Almost Full 2개의 카드로 구분되어 표기

#### 3-2. Title

- Sub title: Module Name
- Main title: Waste Bin/Bottle Name 표기

#### 3-3. Fill Level(%)

- Waste bin/bottle tab 내 2-3 참고

#### 3-4. Waste Status Icon

- Full 및 Almost Full의 각 상태값별로 색으로 구분하여 표기

#### 3-5. Waste Bin/Bottle Status Tooltip

- 동작 : COMM-5-o
- 툴팁 내용 : Shows waste bin/bottle requiring emptying, prioritized by Full and Warning status

#### 4. [Refresh] 버튼

- 버튼 클릭 시 클릭된 영역의 데이터가 최신 상태로 갱신되어 표시

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스는 기획 프레임 바로 아래의 별도 프레임 `SB_Inventory_Summary_Detail Info`([3543:361547](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-361547), 2252×1487)에 있습니다. 원본에 Case 번호가 없습니다(프레임 오른쪽 패널은 빈 틀: Ver 0.1, CID `text`).

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| - | 건 수별 노출 방식 | 한 섹션에 최대 6개 노출, 6개 이하일 경우 가변형 및 Pagenation 제거, 7건 이상일 경우 Pagenation 적용(모든 영역 동일) | 위 프레임 (왼쪽 위) |
| - | 구동 중이 아닐 경우, ‘No actions required’ 문구 표기 | 통합 상태 Run X / Docking X | 위 프레임 (오른쪽 위) |
| - | 작업해야할 아이템이 없을 경우, ‘No actions required’ 문구 표기 | 부족한 항목 없음 | 위 프레임 (아래) |

- 건 수별 노출 방식: Inventory status — Empty 3 (Comsumable 3 · Reagent -) | Insufficient 5 (Comsumable 3 · Reagent 2) / 1 MB DWP · High-throughput Extraction(1) / MB Storage · 0 · 250 rxns (3 DWPs) / 2 EB DWP · High-throughput Extraction(1) / EB Storage · 0 · 250 rxns (3 DWPs) / 3 300 μL Tip · PCR Setup(1) / 300 μL Tip Storage · 0 · 100 rxns (2 racks)
- 구동 중이 아닐 경우: Inventory status — Empty - (Comsumable - · Reagent -) | Insufficient - (Comsumable - · Reagent -) / `Shown only if system running or Inbound Trolley docked`
- 작업해야할 아이템이 없을 경우: Inventory status — Empty - | Insufficient - (Comsumable - · Reagent -) / `No actions required`
