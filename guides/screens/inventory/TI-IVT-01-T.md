---
cid: TI-IVT-01-T
pair_cid: LI-IVT-01-T
tl_relation: 동일
title: Inventory Summary
path: Inventory > Summary
type: Page
version: 2.1.14
date: 2026-10-30
author: 서보경
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7336-426592
figma_region: 2.1 2차
---
# TI-IVT-01-T Inventory Summary

> 기존 화면(작업방 Inventory 페이지, 2.1 2차 영역, Ver 2.1.14)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T/L 차이: LI-IVT-01-T와 화면 구성과 디스크립션이 같음 (IA "짝 화면 동일"은 비어 있음)
- 관련 정책: POL-INV-001, POL-INV-002, POL-INV-003, POL-INV-005, POL-EQP-009
- 호출하는 화면: 없음 (각 항목 상세는 Consumables·Reagents·Waste Bin/Bottle Tab 참고)

- 취소선(Figma에서 제거된 항목): 1-3 "최대 적재량(capacity)을 표기할 수 있는 Storage 경우, '잔여 수량 / 최대 적재량' 형태로 표시"

## 기존 화면

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30 | TIOS
- (LNB) Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Information | Keira Knightley
- Summary | Overview | Consumables | Reagents | Waste Bin/Bottle | Usage History
- Inventory status | Refresh
- (카드) Insufficient: Comsumable 3 | Reagent 2 / Low: Comsumable 3 | Reagent -
- (항목) MB DWP | Remaining Qty | Required Qty → 250 rxns (3 DWPs) | 250 (3 DWPs) / High-throughput Extraction(1) / MB Storage
- (항목) EB DWP, 300 μL Tip, PBS Tub, 1000 μL Tip, BB TUB, WB1 TUB, WB2 TUB, WB3 TUB, EB TUB, MB Tube (같은 형식, 예: 100 ea (2 racks) | 300 rxns (3 racks), PCR Setup(1) / 300 μL Tip Storage, Prep Consumable Storage(2) / Trolley, Flexible Extraction(1) / Buffer Cartridge Storage)
- 1/2
- Waste Bin/Bottle Status | Refresh
- (카드) Full | Almost Full
- (항목) PCR Setup(1) Waste Bin Full | FlexibleExtraction(1) Liquid Waste Bottle Full | High-throughput Extraction(1) Waste Bin 90% | Plate Sealing(1) Sealer Waste Bin 85% | Universal PCR(1) WasteBin 75% | Sample Preparation(1) Tip Waste Bin 71% (각 항목 Fill level)
- 1/3

### 사용 컴포넌트

Description Number (15), Item_Segment Tabs (6), Interface/Info_Circle_Outlined (2), Square (2), Frame (1), Component 4 (1)

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
- ~~최대 적재량(capacity)을 표기할 수 있는 Storage 경우, “잔여 수량 / 최대 적재량” 형태로 표시~~

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
- Shows required items by replenishment priority, visible only when system is running or Inbound Trolley is docked
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

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 표기 | 화면 카드 "Comsumable" | Consumable | `glossary/terms.csv` | 대기 |
| R02 | 상태값 | 1-1·1-5 "Empty 및 Insufficient" (화면 카드는 Insufficient, Low) | Empty는 예전 값이며 Insufficient로 바뀜. 요약 정보와 Stock Status Icon은 Insufficient·Low로 나눔 (1 정렬 기준과 같음). 1-3 "Empty 상태일 경우 '0'"도 Insufficient로 | `glossary/status-values.csv 재고 상태`, POL-INV-003 규칙 7 | 대기 |
| R03 | 상태값 | 1 "Inbound Trolley Unit이 'Docking' 상태" | Docked | `glossary/status-values.csv` 저장 장치 도킹 상태 | 대기 |
| R04 | 문구 | 3-5 툴팁 "prioritized by Full and Warning status" | Full and Almost Full (Warning은 Waste Bin/Bottle Status 값이 아님) | `glossary/status-values.csv` | 대기 |
| R05 | 표기 | 3-4 "Waste Status Icon" | Waste Bin/Bottle Status Icon | `glossary/terms.csv` | 대기 |
| R06 | 디스크립션 | 1-7 툴팁 문구가 4개 나열됨 (옛 문구와 새 문구가 섞인 것으로 보임) | 현재 문구 하나만 남김 (v2.1.14 "Tooltip 내용 변경"). LI-IVT-01-T에는 앞의 2개에 취소선이 있음 | 버전 메모, LI-IVT-01-T | 대기 (확인 필요) |
| R07 | 디스크립션 | 번호 2 없음 (1 → 3) | 번호 정리 | 디스크립션 | 대기 |
| R08 | 디스크립션 | 0 "사용여부가 '사용'인 모듈" | Enabled인 Module | POL-EQP-009 | 대기 |
| R09 | 표기 | 화면 "FlexibleExtraction(1)", "WasteBin", "PCR Setup(1)" 등 | Flexible Extraction (1), Waste Bin, PCR Setup (1) | 이름 (번호) 띄어쓰기, `glossary/terms.csv` | 대기 |
| R10 | 디스크립션 | 1 "통합 상태 Run O / X" | 장비 통합 상태 Running 여부로 표기 | `glossary/terms.csv` 장비 통합 상태 | 대기 |
| R11 | 디스크립션 | 3-3 "Waste bin/bottle tab 내 2-3 참고" (Fill Level은 TI-IVT-05-T 3-3) | TI-IVT-05-T 3-3 참고 | TI-IVT-05-T | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.13 | | 표기 및 정렬 기준 변경 반영. Requirements for Run Completion UI 변경 (잔여 및 필요량 부분). Capacity 항목 제거 | 서보경 | Figma 버전 메모 |
| 2.1.14 | 2026-10-30 | 명칭 변경: Requirements for Run Completion → Inventory status. Inventory status Tooltip 내용 변경 | 서보경 | Figma 버전 메모 |
