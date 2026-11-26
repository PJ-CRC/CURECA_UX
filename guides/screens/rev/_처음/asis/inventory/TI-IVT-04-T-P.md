---
cid: TI-IVT-04-T-P
pair_cid: LI-IVT-04-T-P
tl_relation: 동일
title: Reagent Item details Popup
path: Inventory > Reagents Tab > Item details
type: Popup
version: 2.1.18
date: 2026.11.19
author: 이상헌
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-383580
---
# TI-IVT-04-T-P Reagent Item details Popup

> 기존 화면(작업방 `Inventory_asis` 페이지, Ver 2.1.18)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- 원본 프레임 이름 · 패널 CID는 `TI-IVT-04-T` (화면 `Reagent Item details Popup`, 경로 `Inventory > Reagents Tab > Item details`)
- T/L 차이: 팝업 · 디스크립션 같음. 뒤 화면의 LNB 메뉴만 다름
- 호출하는 화면: 없음 (5 [Close] · 6 [X] 닫기)
- 호출되는 곳: [TI-IVT-04-T] Reagents Tab 3-7 [Item details]

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (뒤 화면) Inventory Reagents Tab: (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30 / (LNB) TIOS | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Information | Keira Knightley / Tab: Summary | Overview | Consumables | Reagents | Waste Bin/Bottle | Usage History
- Item details
- GI-V IC | Remaining Qty 2,010rxns  (22 tubes) | Expired 2
- Location | Barcode | Location in storage | Inbound Date | Expiration Date | Remaining Rxns | Used Counts
  - Consumable Storage (1) > Trolley | 260520280609EX294628G01EB144S | 8462-1981 / 3 / C02 | 2024-08-01 | 2024-07-01 | 100 rxns | 8/10
  - Consumable Storage (1) > Trolley | 260520280609EX294628G01EB144S | 8462-1981 / 3 / C02 | 2024-08-01 | 2024-07-01 | 100 rxns | 0/10
  - Consumable Storage (2) > Trolley | 260520280609EX294628G01EB144S | 8462-1981 / 3 / C02 | 2024-08-01 | 2024-08-01 | 21 rxns | 8/10
  - Consumable Storage (2) > Trolley | 260520280609EX294628G01EB144S | 8462-1981 / 3 / C02 | 2024-08-01 | 2024-08-01 | 100 rxns | 8/10
  - Consumable Storage (1) > Trolley | 260520280609EX294628G01EB144S | 8462-1981 / 3 / C02 | 2024-08-01 | 2024-08-01 | 100 rxns | 6/10
  - Consumable Storage (1) > Trolley | 260520280609EX294628G01EB144S | 8462-1981 / 3 / C02 | 2024-09-01 | 2024-09-01 | 100 rxns | 6/10
  - Consumable Storage (3) > Trolley | 260520280609EX294628G01EB144S | 8462-1981 / 3 / C02 | 2024-08-01 | 2024-08-01 | 81 rxns | 0/10
  - Consumable Storage (3) > Trolley | 260520280609EX294628G01EB144S | 8462-1981 / 3 / C02 | 2024-08-01 | 2024-08-01 | 100 rxns | 0/10
  - Consumable Storage (3) > Trolley | 260520280609EX294628G01EB144S | 8462-1981 / 3 / C02 | 2024-08-01 | 2024-08-01 | 100 rxns | 0/10
  - Consumable Storage (3) > Trolley | 260520280609EX294628G01EB144S | 8462-1981 / 3 / C02 | 2024-08-01 | 2024-08-01 | 100 rxns | 0/10
- 1 | 2 | 3 | 4
- Close

### 사용 컴포넌트

Description Number (7), ⛔️ Item_Segment Tabs (6), Frame (1), Component 4 (1), Page number (1), Square (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 장비에 입고되어 있는 Reagent의 상세 정보를 확인할 수 있는 팝업이다.
- 진입 방법
- LNB의 ‘Inventory의 ‘Reagents Tab’ 내  [Item details]버튼을 통해 진입할 수 있다.
- 데이터 기준
- 장비에 입고되어 있는 시약의 바코드 단위로 목록 생성
- Module[index] + Storage + 바코드
- Buffer 공간에 있는 것도 모두 표기

#### 1. 팝업 타이틀

- 사용자가 직전 화면에서 선택한 시약 명 노출

#### 2. 시약 상세 리스트

- 공통 UX 참고 :  COMM-5-m
- 정렬
- Default: Expiration Date 기준 오름차순
- 2순위 (동일 시): Remaining Rxns 기준 오름차순
- 3순위 (동일 시): Used Counts 기준 오름차순

#### 2-1. 리스트 표출 항목

- Location
- 해당 시약이 적재되는 ‘Module[index] > Storage Unit’기준으로 표기
- Barcode
- Material Setup 메뉴에서 시약 입고 시, 찍은 제품의 바코드 표기
- 단, 하위 시약은 별도의 바코드 체계로 표기
- Standard Tube
- ㄴCarrier Setup 시 찍은 1개의 튜브 대표 바코드 기준으로 표기
- PCR 시약
- ㄴ IC : 제품 개별 바코드로 표기
- ㄴ 그외 시약 : 박스 rxns 바코드
- UC Kit
- ㄴTUB 대표 바코드(EB TUB 기준 오른편에 부착)
- 공통 UX 참고 :  COMM-4-b
- Location in storage
- 해당 소모품의 위치 값 표시
- 표기 방식
  - ㄴTrolley 경우: Trolley ID / Tray Floor / Position
  - ㄴDX 서랍식 입고 경우: 서랍 위치값 단일 표기
- Inbound Date
- Material Setup 메뉴에서 Storage에 시약을 입고한 일자 표기
- Expiration Date
- 해당 시약 입고 시, DB에 저장된 유효기한 정보 표시
- Remaining Rxns(Module+Storage기준)
- 해당 시약 바코드 기준 남은 반응 수 rxns 표기
- 합산 기준
- ㄴStorage 영역 및 장비 내 Buffer 공간에 적재된 수량을 모두 포함
- 표기 방식 : 반응 수T
- Used Counts
- 검사 시 시약을 흡입한 회수
- 표기 방식 : 흡입 횟수/최대 흡입 가능 횟수
- 단, 시약별 최대 흡입 가능 횟수가 상이하여 공통 UX 참고
- 공통 UX 참고 :  COMM-4-b

#### 3. 남은 수량 및 유효기한 만료 시약 합계정보 (Remaining Qty, Expired)

- Remaining Qty
- 표기 방식 : 반응 수T(입고 단위 수량)
- 하위 리스트 내 Remaining Qty 수량을 합산하여 노출
- Expired
- 표기 방식 : 개수
- 하위 리스트 내 유효기한이 지난 시약 개수 노출

#### 4. 페이지네이션

- 공통 UX 참고 :  COMM-5-i

#### 5. [Close] 버튼

- 클릭 시, 해당 팝업 닫힘, 기존 진입 화면 유지

#### 6. [X] 버튼

- 클릭 시, 팝업이 닫힌 후 기존 화면 노출

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

없음 (`Inventory_asis` 페이지에 TI-IVT-04-T-P 케이스 프레임 없음)
