---
cid: TI-IVT-04-T
pair_cid: LI-IVT-04-T
tl_relation: 동일
title: Inventory Reagent
path: Inventory > Reagents Tab
type: Tab
version: 2.1.18
date: 2026.11.19
author: 이상헌
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-383847
---
# TI-IVT-04-T Inventory Reagent

> 기존 화면(작업방 `Inventory_asis` 페이지, Ver 2.1.18)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: 디스크립션 같음. LNB 메뉴와 왼쪽 카드 목록의 PCR 카드 예시만 다름(T는 GI-Virus · Respiratory Panel 1 · GI-Parasite · GI-Virus · GI-Bacteria(II) 5장, L은 GI-Bacteria(II) · GI-Parasite · GI-Virus · Respiratory Panel 1 4장이고 시약 이름이 알파벳 순)
- 호출하는 화면: [TI-IVT-04-T-P] Reagent Item details Popup (3-7 [Item details])
- 호출되는 곳: LNB > Inventory > Reagents Tab (0 진입 방법), [TI-IVT-01-T] 등 Inventory Tab 구성

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Dashboard | Test Management | Sample Tracking | Status | Instrument | Inventory | Statistical Analysis | Setting | Information | Keira Knightley
- Inventory
- Tab: Summary | Overview | Consumables | Reagents | Waste Bin/Bottle | Usage History
- Chip: Insufficient 12 | Low 7 | Sufficient 2 | Reagents type: # Sample Preparation | #Nucleic Acid Extraction | #PCR | Refresh
- 왼쪽 카드 목록 (열: Remaining Qty | Required Qty | Status)
  - Pretreatment Reagents (Sample Preparation)
    - LB Tub (Prep) 200 rxns (2 racks) | 300 rxns (3 racks)
    - PBS Tub 0 | 200 rxns (2 racks)
    - Saline Tub 100 rxns (1 rack) | 100 rxns (1 rack)
    - ASL Standard Tube 0 | 96 rxns (2 racks)
    - PBS Standard Tube 0 | 144 rxns (3 racks)
    - Prelyser Standard Tube 96 rxns (2 racks) | 48 rxns (1 rack)
    - Saline Standard Tube 48 rxns (1 rack) | 96 rxns (2 racks)
  - STARMag M96 Kit (Nucleic Acid Extraction)
    - EB DWP 0 | 288 rxns (3 DWPs)
    - LB DWP 192 rxns (2 DWPs) | 96 rxns (1 DWP)
    - MB DWP 96 rxns (1 DWP) | 96 rxns (1 DWP)
    - WB1 DWP 192 rxns (2 DWPs) | 192 rxns (2 DWPs)
    - WB2 DWP 0 | 192 rxns (2 DWPs)
    - Spin Tip 192 rxns (2 DWPs) | -
  - STARMag Universal Cartridge Kit (Nucleic Acid Extraction)
    - BB Tub, EB Tub, WB1 Tub, WB2 Tub, WB3 Tub 0 | 384 rxns (4 sets)
    - LB Tub 192 rxns (2 racks) | 96 rxns (1 rack)
    - MB Tube 192 rxns (2 tubes) | 96 rxns (1 tube)
    - PK Tube 288 rxns (3 tubes) | 96 rxns (1 tube)
    - Buffer Cartridge Cap 15 ea (3 sets)
  - Allplex™ GI-Virus Assay (PCR): 5X GI-V MOM, 5X Real-time One-step Buffer, GI-V PC, Real-time One-step Enzyme, RNase-free Water 0 | 300 rxns (3 sets) / GI-V IC 100 rxns (1 tube) | 200 rxns (2 tubes)
  - Allplex™ Respiratory Panel 1 (PCR): 5X RP1 MOM, Real-time One-step Enzyme, 5X Real-time One-step Buffer, RNase-free Water, RP1 PC 100 rxns (1 set) | 300 rxns (3 sets) / RP-V IC 100 rxns (1 tube) | 200 rxns (2 tubes)
  - Allplex™ GI-Parasite Assay (PCR): 5X GI-P MOM, EM2, RNase-free Water, GI-P PC 300 rxns (3 sets) | - / GI-BP IC 100 rxns (1 tube) | 200 rxns (2 tubes)
  - Allplex™ GI-Virus Assay (PCR): 5X GI-V MOM, Real-time One-step Enzyme, 5X Real-time One-step Buffer, RNase-free Water, GI-V PC 0 | 300 rxns (3 sets) / GI-V IC 100 rxns (1 tube) | 200 rxns (2 tubes)
  - Allplex™ GI-Bacteria(II) Assay (PCR): 5X GI-B(II) MOM, EM2, RNase-free Water, GI-B(II) PC 300 rxns (3 sets) | - / GI-BP IC 100 rxns (1 tube) | -
  - 카드 영역에 두 겹으로 겹쳐 있는 글자: Tub / Sample Preparation | Remaining Qty | Required Qty | Status / PBS Tub #Trolley - 200T (2 racks) / Saline Tub #Trolley 100T (1 rack) 100T (1 rack) / LB Tub (Prep) #Trolley - 200T (2 racks)
- 오른쪽 상세: Pretreatment Reagents (열: Location | Capacity | Remaining Qty | Required Qty)
  - LB Tub (Prep) [Item details]
    - Info Box: Expired reagents are discarded or returned unused, depending on the instrument.
    - Consumable Storage (1) > Trolley | 6 DWPs | 100 rxns (1 rack) | 200 rxns (2 racks)
    - Consumable Storage (2) > Trolley | 6 DWPs | 100 rxns (1 rack) | 100 rxns (1 rack)
  - PBS Tub [Item details]
    - Consumable Storage (1) > Trolley | 5 sets | 0 | 100 rxns (1 rack)
    - Consumable Storage (2) > Trolley | 5 sets | 0 | 100 rxns (1 rack)
  - Saline Tub [Item details]
    - Consumable Storage (1) > Trolley | 5 sets | 100 rxns (1 rack) | -
    - Consumable Storage (2) > Trolley | 5 sets | 0 | 100 rxns (1 rack)
  - ASL Standard Tube [Item details] (열: Location | Remaining Qty | Required Qty)
    - Consumable Storage (1) > Trolley | 0 | 96 rxns (2 racks)
  - PBS Standard Tube [Item details]
    - Consumable Storage (1) > Trolley | 5 sets | 0 | 96 rxns (2 racks)
    - Consumable Storage (2) > Trolley | 5 sets | 0 | 48 rxns (1 rack)
  - Prelyser Standard Tube [Item details]
    - Consumable Storage (1) > Trolley | 5 sets | 48 rxns (1 rack) | 48 rxns (1 rack)
    - Consumable Storage (2) > Trolley | 5 sets | 48 rxns (1 rack) | -
  - Saline Standard Tube [Item details]
    - Consumable Storage (1) > Trolley | 5 sets | 48 rxns (1 rack) | 48 rxns (1 rack)
    - Consumable Storage (2) > Trolley | 5 sets | 0 | 48 rxns (1 rack)

### 사용 컴포넌트

Description Number (17), Status (12), ⛔️ Item_Segment Tabs (6), Chip (6), Square (5), Frame (1), Info Box (1), Interface/Info_Circle_Outlined (1), Component 4 (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 장비에서 사용되는 Reagents의 재고를 확인할 수 있는 화면이다.
- 진입 방법
- LNB의 ‘Inventory의 ‘Reagents Tab’을 통해 진입할 수 있다.
- 데이터 기준
- 사용여부가 ‘사용’인 모듈 대상으로만 노출된다.
- 시약 기준으로 모아보기 기능을 제공하며, 시약 특성이 같거나 Kit 기준으로 묶어서 표기한다.
- ~~시약 개수 표기 방식~~
- ~~“낱개 수량(입고 단위 수량)” 형식으로 제공~~
- ~~100개당 1 Rack일 경우, 입고 단위 수량을 올림 처리~~
- ~~(예: 101 → 2 Rack)~~
- =>해당 정의는 Common UX - COMM-4-b 참고

#### 1. Chip 영역(Status 필터)

- Status
- 데이터: Insufficient, Low, sufficient
- 상태값 옆 숫자는 좌측 영역의 Status별 건수가 표기됨
- 작동 방식
- Chip 클릭 시 → 선택 상태로 변경, 해당 Status 값에 해당하는 데이터만 필터링하여 표기
- 동일 Chip 재클릭 시 → 선택 해제, 필터링 해제되어 전체 데이터 표기
- 다중 선택: Chip은 여러 개 동시에 선택 가능하며 선택된 상태값에 해당되는 모든 데이터가 필터링되어 보여짐
- 적용 범위: 좌측 / 우측 영역 모두 동일하게 필터링 적용
- 우측 영역 규칙: Status 값에 해당 Storage만 필터링되어 표기
- Reagents type
- 공정별 시약을 모아볼 수 있는 기능 제공
- 데이터: # Sample Preparation, #Nucleic Acid Extraction, #PCR
- 공정별 시약을 모아볼 수 있는 기능을 제공하며 좌측 카드 카드명 하단에 노출되는 문구 기준으로 필터링
- 동작 방식:
- 좌측 카드의 카드명 하단에 노출되는 문구(Reagents type)를 기준으로 필터링

#### 2. 좌측 영역 - 카드 리스트

- 표기 및 정렬 기준: Common UX - COMM-4-b 참고
- 최초 진입: 기본(Default)으로 첫 번째 카드가 선택된 상태로 표시
- 클릭 영역: 카드 전체가 클릭 가능 영역이며, 클릭 시 우측 영역([3])에 해당 카드의 상세 정보 표시
- 카드 또는 항목 노출 조건
- Remaining Qty가 1개 이상 존재하거나 Required Qty가 1개 이상 필요한 경우 노출
- Remaining Qty 및 Required Qty가 모두 0일 경우 해당 항목은 숨김 처리
- 카드 영역 내 모든 항목이 미노출 조건이면 해당 카드가 전체 미노출됨

#### 2-1. 카드 제목

- 표기 방식: Common UX - COMM-4-b 참고

#### 2-3. 카드 내 항목

- Pretreatment Reagents은 전처리에 사용되는 Tube, Tub가 표기됨
- Kit 및 PCR에 구성된 개별 시약들은 입고되는 Storage 기준에 따라 분리하여 목록으로 구성
- 각 항목은 실제 입고되는 Storage 단위별로 구분하여 리스트화
- 동일 Storage에 함께 입고되는 항목들은 하나의 그룹으로 묶어 표기

#### 2-3. Reagents type

- 상단의 Reagents type타입 선택에 따라 필터링하여 보여지는 값을 표기하는 영역
- fileType이 “Pretreatment”인 경우 = Sample Preparation 표기
- fileType이 “Extraction”인 경우 = Nucleic Acid Extraction 표기
- fileType이 “PCR”인 경우 = PCR 표기

#### 2-4. Remaining Qty(좌측 영역)

- 범위: 좌측 영역의 Remaining Qty는 해당 시약이 적재된 모든 Storage의 개수를 합산하여 표시
- 합산 기준:
- Storage 영역과 장비 내 거치 공간(장비가 가져간 소모품 포함)의 수량을 모두 합산하여 재고로 표시
- 단,장비 내 거치 공간에 있는 소모품은 실시간으로 차감되지 않는며, 적재된 순간의 수량을 그대로 유지한다.
- 소모품이 모두 소진되거나 다시 Storage로 반환되는 기준으로 인벤토리 재고가 업데이트 됨
- 표기 방식: 소모품/시약 표기 방식에 따름(0번 디스크립션 참고)
- 정책 안내
- 1) 소모품/시약 잔여량 집계 기준
  - 잔여량은 저장 장치 및 장비 내 적재된 소모품을 포함하여 관리한다.
  - 저장 장치에 소모품 입고 시 해당 수량을 증가한다.
  - 장비에서 소모품 사용 후 저장 장치로 반환 시 실제 사용 수량만큼 차감한다.
  - 장비에서 소모품 사용 후 폐기 시 실제 사용 수량만큼 차감한다.
  - 저장 장치에서 소모품 제거 시 해당 수량을 차감한다.
- 2) 소모품/시약 사용량 집계 기준
  - 장비에서 소모품 사용 후 저장 장치로 반환 시 실제 사용 수량을 이력에 기록한다.
  - 장비에서 소모품 사용 후 폐기 시 실제 사용 수량을 이력에 기록한다.

#### 2-5. Required Qty(좌측 영역)

- 좌측 영역의 Remaining Qty는 현재 전체 Run 기준으로 해당 시약이 적재된 모든 Storage 및 장비 내 Buffer 공간의 합계를 기준으로 집계
- 산출 방식
- 총 필요 수량에서 현재 재고를 제외한 부족 수량을 계산
- 예시: 남은 재고 10rxns, 필요 수량 14rxns → Required Qty = 4rxns
- 노출 조건: 검체 트롤리가 도킹된 상태 또는 통합 상태가 Running, Partial Running일 경우 노출(OR 조건)
- 예외 처리: 검사 진행 중이 아닐 경우 ‘-’로 표기

#### 2-6. Status

- 현재 전체 Run 기준으로 필요 수량 대비 재고 상태를 표시
- 각 상태별 정의된 아이콘형식으로 표기
- Insufficient: 필요 수량 대비 재고(Remaining Qty)가 0인 경우
- Low: Remaining Qty가 존재하나 필요 수량을 충족하지 못해 1개 이상 부족한 경우
- Sufficient: Remaining Qty가 필요 수량을 충족하여 부족이 없는 상태
- 우선순위 규칙: 동일 항목의 상세 정보에서 Insufficient와 Low 상태가 동시에 존재할 경우, 좌측 카드에는 Insufficient로 표기
- 예시: 설계서의 ‘Saline Standard Tube’ → 우측 상세에는 Insufficient 1개, Low 1개 표기되어 있지만, 좌측 카드에는 Insufficient 값으로 표기됨
- 노출 조건: 검체 트롤리가 도킹된 상태 또는 통합 상태가 Running, Partial Running일 경우 노출(OR 조건)
- 예외 처리: 위의 상황이 아닐 경우 ‘-’로 표기

#### 3. 우측 영역

- 좌측에서 선택된 카드의 정보를 우측 영역에 표기
- 시약별 Module[index] + Storage 기준으로 Location Row 생성
- 정렬 기준: 좌측 영역 카드 내 항목 순서와 동일하게 적용
- 항목 노출 조건
- Remaining Qty가 1개 이상 존재하거나 Required Qty가 1개 이상 필요한 경우 노출
- Remaining Qty 및 Required Qty가 모두 0일 경우 해당 Location은 숨김 처리

#### 3-1. 시약 개별 카드

- 좌측 카드 목록에 해당되는 아이템을 기준으로 구성
- 해당 시약이 들어가는 위치정보를 함께 묶어서 표기

#### 3-2. Location

- 해당 시약이 적재되는 ‘Module[index] > Storage Unit’기준으로 표기

#### 3-3. 유효기간 만료 시약 안내

- 유효기간이 지난 시약이 존재할 경우 사용자에게 경고 문구를 제공
- 시약명 기준으로 유효기가 만료 여부 체크하여, Location 중에 1 곳이라도 있을 경우 카드와 목록 사이에 표기됨
- 문구: Expired reagents are discarded or returned unused, depending on the instrument.
- Capacity(우측 영역_Module+Storage기준)
- *해당 화면설계에 없으나 아래 다른 예시 화면에서 확인 가능
- 정의: 최대 적재량을 관리할 수 있는 Storage에 한해 Capacity 값을 표시
- 최대 표시값: 장비에서 설정된 값을 표기
- 기존에는 값이 fix되어 있었으나 26.08.20기준, 제작 시 장비 설계 방식에 따라 적재 용량이 다르게 적용되는 케이스가 발생하여 장비 셋팅 시, 설정된 값을 표기하는 방식으로 적용
- 예외 처리:
- 여러 품목을 혼합 적재하여 최대 적재량 관리가 불가능한 경우 해당 영역은 미제공(예시: Cold Storage의 PCR 영역)

#### 3-5. Remaining Qty(우측 영역_Module+Storage기준)

- 해당 시약이 적재된 Location(Module+Storage)기준으로 장비에 남은 개수 표기
- 합산 기준:
- Storage 영역과 장비 내 거치 공간(장비가 가져간 소모품 포함)의 수량을 모두 합산하여 재고로 표시
- 단,장비 내 거치 공간에 있는 소모품은 실시간으로 차감되지 않는며, 적재된 순간의 수량을 그대로 유지한다.
- 소모품이 모두 소진되거나 다시 Storage로 반환되는 기준으로 인벤토리 재고가 업데이트 됨
- 표기 방식: 시약 표기 방식에 따름(0번 디스크립션 참고)

#### 3-6. Required Qty(우측 영역_Module+Storage기준)

- 현재 전체 Run 기준으로 해당 시약이 적재된 Location(Module+Storage) 및 장비 내 Buffer 공간의 합계를 기준으로 집계
- 산출 방식
- 총 필요 수량에서 현재 재고를 제외한 부족 수량을 계산
- 예시: 남은 재고 10T, 필요 수량 14T → Required Qty = 4T
- 노출 조건: 검체 트롤리가 도킹된 상태 또는 통합 상태가 Running, Partial Running일 경우 노출(OR 조건)
- 예외 처리: 위의 상황이 아닐 경우 ‘-’로 표기

#### 3-7. [Item details] 버튼

- 해당 시약의 개별 상세 정보를 확인할 수 있는 팝업 호출 기능 제공
- 클릭 시, [TI-IVT-04-T-P] 팝업 호출

#### 4. [Refresh] 버튼

- 버튼 클릭 시 전체 데이터가 최신 상태로 갱신되어 표시

#### 5. Capacity Tooltip

- 동작 : COMM-5-o
- 툴팁 내용 :
- Capacity: Shown only for fixed-capacity storage.
- Required Qty: Displays the additional quantity required based on current inventory.
- Status: Status is determined by run availability: Sufficient(enough stock), Low(partial shortage), Insufficient(no stock)

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

없음 (`Inventory_asis` 페이지에 TI-IVT-04-T 케이스 프레임 없음)
