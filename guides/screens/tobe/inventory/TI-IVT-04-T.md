---
cid: TI-IVT-04-T
pair_cid: LI-IVT-04-T
tl_relation: 동일   # 동일 | 권한 차이 | 기능 추가 | 단독
title: Inventory Reagent
path: Inventory > Reagents Tab
type: Tab          # Page | Popup | Tab
version: 2.1.18
date: 2026.11.19
author: 이상헌
client_mode: []
user_type: [Service, Admin, User]
policies: [POL-INV-001, POL-INV-002, POL-INV-003, POL-INV-004, POL-INV-006, POL-INV-007, POL-LOD-004, POL-EQP-009]
basis: 2026-11-27 15:53 · history c133247fe
basis_versions:
  rules: CURECA 작업규칙 @2026-11-27 11:34
  policy: CURECA 정책서 @2026-11-27 15:31
  glossary: 기준데이터 @2026-11-26 15:17
  screens: 화면 정의서 @2026-11-27 15:45
  common_ux: Common UX (common-ux/comm-index.md) @2026-11-25 16:08
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3903-7491
---
# TI-IVT-04-T Inventory Reagent

- T/L 차이: 디스크립션 같음. LNB 메뉴와 왼쪽 카드 목록의 PCR 카드 예시만 다름
- 호출하는 화면: [TI-IVT-04-T-P] Reagent Item details Popup (3-7 [Item details])
- 호출되는 곳: LNB > Inventory > Reagents Tab, [TI-IVT-01-T] 등 Inventory Tab 구성
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Inventory Reagent 화면**
- 정의
  - <span style="color:red">CURECA</span> 장비에서 사용되는 Reagents의 재고를 확인할 수 있는 화면
  - <span style="color:red">Enabled인 Module</span> 대상으로만 노출
  - <span style="color:red">Reagent</span> 기준으로 모아보기 기능을 제공하며, <span style="color:red">Reagent</span> 특성이 같거나 Kit 기준으로 묶어서 노출
  - ~~시약 개수 표기 방식~~
  - ~~"낱개 수량(입고 단위 수량)" 형식으로 제공~~
  - ~~100개당 1 Rack일 경우, 입고 단위 수량을 올림 처리~~
  - ~~(예: 101 → 2 Rack)~~
- 동작
  - LNB의 Inventory > Reagents Tab을 통해 진입
- User Type : Service, Admin, User
- 공통 UX 참고 : COMM-4-b(5/5)
- 정책 참고 : POL-INV-001, POL-EQP-009

**1  Chip 영역(Status 필터)**
- 기능
  - Status : Insufficient, Low, <span style="color:red">Sufficient</span>
  - 상태값 옆 숫자는 좌측 영역의 Status별 건수 노출
  - Reagents type : 공정별 <span style="color:red">Reagent</span>를 모아볼 수 있는 기능 제공
- Default : 모든 Chip이 선택되지 않은 상태(전체 데이터 노출)
- 드롭다운 리스트 항목
  - Reagents type : <span style="color:red">#Sample Preparation</span>, #Nucleic Acid Extraction, #PCR
- 동작
  - Chip 클릭 시 선택 상태로 변경, 해당 Status 값에 해당하는 데이터만 필터링하여 노출
  - 동일 Chip 재클릭 시 선택 해제, 필터링 해제되어 전체 데이터 노출
  - 다중 선택 : Chip은 여러 개 동시에 선택 가능하며 선택된 상태값에 해당되는 모든 데이터가 필터링되어 노출
  - 적용 범위 : 좌측 / 우측 영역 모두 동일하게 필터링 적용
  - 우측 영역 규칙 : Status 값에 해당하는 Storage만 필터링되어 노출
  - Reagents type : 좌측 카드의 카드명 하단에 노출되는 문구(Reagents type)를 기준으로 필터링
- 공통 UX 참고 : COMM-5-f
- 정책 참고 : POL-INV-003

**2  좌측 영역 - 카드 리스트**
- 정의 : 표기 및 정렬 기준은 공통 UX 참고(COMM-4-b(2/5), COMM-4-b(3/5))
- Default : 첫 번째 카드가 선택된 상태로 노출
- 동작
  - 카드 전체가 클릭 가능 영역이며, 클릭 시 우측 영역([3])에 해당 카드의 상세 정보 노출
- 노출 조건
  - Remaining Qty가 1개 이상 존재하거나 Required Qty가 1개 이상 필요한 경우 노출
  - Remaining Qty 및 Required Qty가 모두 0일 경우 해당 항목은 숨김 처리
  - 카드 영역 내 모든 항목이 미노출 조건이면 해당 카드 전체 미노출
- 공통 UX 참고 : COMM-5-e
- 정책 참고 : POL-INV-003

**2-1  카드 제목**
- 표기 방식 : 공통 UX 참고(COMM-4-b(2/5))

**2-3  카드 내 항목**
- Pretreatment Reagents는 전처리에 사용되는 Tube, Tub 노출
- Kit 및 PCR에 구성된 개별 <span style="color:red">Reagent</span>들은 입고되는 Storage 기준에 따라 분리하여 목록으로 구성
- 각 항목은 실제 입고되는 Storage 단위별로 구분하여 리스트화
- 동일 Storage에 함께 입고되는 항목들은 하나의 그룹으로 묶어 노출
- PCR Reagent의 IC는 Tube 단위로 Consumable Storage > Trolley, IC를 뺀 나머지 구성품은 Set 단위로 Plate Sealing > Cold Storage에 입고되어 따로 노출
- STARMag Universal Cartridge Kit에는 Buffer Cartridge Cap 항목을 둠 (5개 단위 표기)
- 정책 참고 : POL-INV-007, POL-LOD-004

**2-4  Remaining Qty(좌측 영역)**
- 정의 : 좌측 영역의 Remaining Qty는 해당 <span style="color:red">Reagent</span>가 적재된 모든 Storage의 개수를 합산하여 노출
- 산출 방식
  - Storage 영역과 장비 내 거치 공간(장비가 가져간 <span style="color:red">Reagent</span> 포함)의 수량을 모두 합산하여 재고로 노출
  - 단, 장비 내 거치 공간에 있는 <span style="color:red">Reagent</span>는 실시간으로 차감되지 <span style="color:red">않으며</span>, 적재된 순간의 수량을 그대로 유지
  - <span style="color:red">Reagent</span>가 모두 소진되거나 다시 Storage로 반환되는 기준으로 Inventory 재고 업데이트
  - 잔여량 집계 : <span style="color:red">Storage</span> 및 장비 내 적재된 <span style="color:red">Reagent</span>를 포함하여 관리
  - <span style="color:red">Storage</span>에 <span style="color:red">Reagent</span> 입고 시 해당 수량 증가
  - 장비에서 <span style="color:red">Reagent</span> 사용 후 <span style="color:red">Storage</span>로 반환 시 실제 사용 수량만큼 차감
  - 장비에서 <span style="color:red">Reagent</span> 사용 후 폐기 시 실제 사용 수량만큼 차감
  - <span style="color:red">Storage</span>에서 <span style="color:red">Reagent</span> 제거 시 해당 수량 차감
  - <span style="color:red">사용량(Usage History)은 폐기할 때만 기록, 반환할 때는 Remaining Qty만 차감</span>
- 표기 방식 : <span style="color:red">공통 UX 참고(COMM-4-b(5/5))</span>
- 정책 참고 : POL-INV-002, POL-INV-006

**2-5  Required Qty(좌측 영역)**
- 정의 : 좌측 영역의 <span style="color:red">Required Qty</span>는 현재 전체 Run 기준으로 해당 <span style="color:red">Reagent</span>가 적재된 모든 Storage 및 장비 내 Buffer 공간의 합계를 기준으로 집계
- 산출 방식
  - 총 필요 수량에서 현재 재고를 제외한 부족 수량을 계산
  - 예시 : 남은 재고 <span style="color:red">10 rxns</span>, 필요 수량 <span style="color:red">14 rxns</span> → Required Qty = <span style="color:red">4 rxns</span>
- 노출 조건
  - <span style="color:red">Inbound Trolley가 Docked 상태이거나, [Run Start] 뒤 진행 중인 Batch가 끝나지 않았으면 노출 (둘 중 하나)</span>
  - <span style="color:red">장비 통합 상태가 Partial Running · Error가 되어도 Batch가 끝나기 전이면 계속 노출, Run 중 Inbound Trolley를 분리해도 계속 노출</span>
  - 예외 처리 : <span style="color:red">위의 상황이 아닐 경우</span> '-'로 노출
- 정책 참고 : POL-INV-003

**2-6  Status**
- 정의
  - 현재 전체 Run 기준으로 필요 수량 대비 재고 상태를 정의된 아이콘 형식으로 노출
  - <span style="color:red">Reagent도 Consumable과 같은 재고 상태(Sufficient, Low, Insufficient) 사용</span>
  - <span style="color:red">Insufficient : 잔여 수량 0. 그 품목을 쓰는 단계에서 Error가 생겨 가동이 중단됨 (예: 재고 0)</span>
  - <span style="color:red">Low : 필요 수량보다 1개 이상 적으나 가동 가능 (예: 1000개 필요, 999개 이하)</span>
  - Sufficient : Remaining Qty가 필요 수량을 충족하여 부족이 없는 상태
- 우선순위 규칙 : 동일 항목의 상세 정보에서 Insufficient와 Low 상태가 동시에 존재할 경우, 좌측 카드에는 Insufficient로 노출
  - 예시 : 설계서의 'Saline Standard Tube' → 우측 상세에는 Insufficient 1개, Low 1개 노출되어 있지만, 좌측 카드에는 Insufficient 값으로 노출
- 노출 조건
  - <span style="color:red">Inbound Trolley가 Docked 상태이거나, [Run Start] 뒤 진행 중인 Batch가 끝나지 않았으면 노출 (둘 중 하나)</span>
  - <span style="color:red">장비 통합 상태가 Partial Running · Error가 되어도 Batch가 끝나기 전이면 계속 노출</span>
  - 예외 처리 : 위의 상황이 아닐 경우 '-'로 노출
- 정책 참고 : POL-INV-003

**2-7  Reagents type**
- 상단의 Reagents type 선택에 따라 필터링하여 보여지는 값을 노출하는 영역
- fileType이 "Pretreatment"인 경우 = Sample Preparation 노출
- fileType이 "Extraction"인 경우 = Nucleic Acid Extraction 노출
- fileType이 "PCR"인 경우 = PCR 노출

**3  우측 영역**
- 정의
  - 좌측에서 선택된 카드의 정보를 우측 영역에 노출
  - <span style="color:red">Reagent</span>별 <span style="color:red">Module (Index)</span> + Storage 기준으로 Location Row 생성
- 정렬 : 좌측 영역 카드 내 항목 순서와 동일하게 적용
- 노출 조건
  - Remaining Qty가 1개 이상 존재하거나 Required Qty가 1개 이상 필요한 경우 노출
  - Remaining Qty 및 Required Qty가 모두 0일 경우 해당 Location은 숨김 처리
- 공통 UX 참고 : COMM-5-e
- 정책 참고 : POL-INV-003

**3-1  <span style="color:red">Reagent</span> 개별 카드**
- 좌측 카드 목록에 해당되는 항목을 기준으로 구성
- 해당 <span style="color:red">Reagent</span>가 들어가는 위치 정보를 함께 묶어서 노출

**3-2  Location**
- 해당 <span style="color:red">Reagent</span>가 적재되는 '<span style="color:red">Module (Index)</span> > Storage Unit' 기준으로 노출

**3-3  <span style="color:red">Expiration Date</span> 만료 <span style="color:red">Reagent</span> 안내**
- 정의 : <span style="color:red">Expiration Date</span>가 지난 <span style="color:red">Reagent</span>가 존재할 경우 사용자에게 경고 문구 제공
- 노출 조건
  - <span style="color:red">Reagent</span> 이름 기준으로 <span style="color:red">Expired</span> 여부를 체크하여, Location 중에 1곳이라도 있을 경우 카드와 목록 사이에 노출
- 문구 : Expired reagents are discarded or returned unused, depending on the instrument.
- 공통 UX 참고 : COMM-5-i
- 정책 참고 : POL-INV-004

**3-5  Remaining Qty(우측 영역_Module+Storage 기준)**
- 정의 : 해당 <span style="color:red">Reagent</span>가 적재된 Location(Module+Storage) 기준으로 장비에 남은 개수 노출
- 산출 방식
  - Storage 영역과 장비 내 거치 공간(장비가 가져간 <span style="color:red">Reagent</span> 포함)의 수량을 모두 합산하여 재고로 노출
  - 단, 장비 내 거치 공간에 있는 <span style="color:red">Reagent</span>는 실시간으로 차감되지 <span style="color:red">않으며</span>, 적재된 순간의 수량을 그대로 유지
  - <span style="color:red">Reagent</span>가 모두 소진되거나 다시 Storage로 반환되는 기준으로 Inventory 재고 업데이트
- 표기 방식 : <span style="color:red">공통 UX 참고(COMM-4-b(5/5))</span>
- 정책 참고 : POL-INV-002

**3-6  Required Qty(우측 영역_Module+Storage 기준)**
- 정의 : 현재 전체 Run 기준으로 해당 <span style="color:red">Reagent</span>가 적재된 Location(Module+Storage) 및 장비 내 Buffer 공간의 합계를 기준으로 집계
- 산출 방식
  - 총 필요 수량에서 현재 재고를 제외한 부족 수량을 계산
  - 예시 : 남은 재고 <span style="color:red">10 rxns</span>, 필요 수량 <span style="color:red">14 rxns</span> → Required Qty = <span style="color:red">4 rxns</span>
- 노출 조건
  - <span style="color:red">Inbound Trolley가 Docked 상태이거나, [Run Start] 뒤 진행 중인 Batch가 끝나지 않았으면 노출 (둘 중 하나)</span>
  - <span style="color:red">장비 통합 상태가 Partial Running · Error가 되어도 Batch가 끝나기 전이면 계속 노출</span>
  - 예외 처리 : 위의 상황이 아닐 경우 '-'로 노출
- 정책 참고 : POL-INV-003

**3-7  [Item details] 버튼**
- 정의 : 해당 <span style="color:red">Reagent</span>의 개별 상세 정보를 확인할 수 있는 Popup 호출
- 동작
  - 클릭 시 Popup 노출 : TI-IVT-04-T-P
- 정책 참고 : POL-INV-001

**3-8  <span style="color:red">Capacity(우측 영역_Module+Storage 기준)</span>**
- <span style="color:red">~~*해당 화면설계에 없으나 아래 다른 예시 화면에서 확인 가능~~</span>
- 정의 : 최대 적재량을 관리할 수 있는 Storage에 한해 Capacity 값 노출
- 최대 노출 값 : 장비에서 설정된 값 노출
  - 기존에는 값이 fix되어 있었으나 26.08.20 기준, 제작 시 장비 설계 방식에 따라 적재 용량이 다르게 적용되는 케이스가 발생하여 장비 셋팅 시 설정된 값을 노출하는 방식으로 적용
- 예외 처리 : 여러 품목을 혼합 적재하여 최대 적재량 관리가 불가능한 경우 해당 영역 미제공 (예시 : Cold Storage의 PCR 영역)
- 정책 참고 : POL-INV-002

**4  [Refresh] 버튼**
- 동작
  - 클릭 시 전체 데이터가 최신 상태로 갱신되어 노출
  - <span style="color:red">데이터를 불러오지 못할 경우 Alert 노출 : Alert_020</span>
- 정책 참고 : POL-INV-001

**5  Capacity Tooltip**
- Tooltip 문구
  - Capacity: Shown only for fixed-capacity storage.
  - Required Qty: Displays the additional quantity required based on current inventory.
  - Status: Status is determined by run availability: Sufficient(enough stock), Low(partial shortage), Insufficient(no stock)
- 공통 UX 참고 : COMM-5-v

## 케이스

없음 (`Inventory_asis` 페이지에 TI-IVT-04-T 케이스 프레임 없음)

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 4 | Alert | Alert_020 | 데이터를 불러오지 못했을 때 | OK 선택 시 → 해당 Alert 닫힘 |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | Tab | Summary / Overview / Consumables / Reagents (선택) / Waste Bin/Bottle / Usage History | POL-INV-001 정의 |
| 1 | Chip | Insufficient 12 / Low 7 / Sufficient 2 / #Sample Preparation / #Nucleic Acid Extraction / #PCR | 기존 원본, `status-values.csv` 재고 상태 |
| 2 | 카드 목록 (Pretreatment Reagents · STARMag M96 Kit · STARMag Universal Cartridge Kit) | 기존 원본 그대로 | `Inventory_asis` TI-IVT-04-T 왼쪽 카드 목록 |
| 2 | PCR 카드 4장 | Allplex™ GI-Virus Assay / Allplex™ Respiratory Panel 1 / Allplex™ GI-Parasite Assay / Allplex™ GI-Bacteria(II) Assay (값은 기존 원본 그대로, 두 번 나온 GI-Virus 카드 하나를 지움) | 기존 원본, 1단계 뒤 단계용 확인 항목 11 |
| 3 | Pretreatment Reagents 상세 7장 | 기존 원본 그대로 | `Inventory_asis` TI-IVT-04-T 오른쪽 상세 |
| 3-3 | 만료 안내 | Expired reagents are discarded or returned unused, depending on the instrument. | 기존 원본 |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Inventory | 화면 제목 | LID-IVT-001 |
| Summary · Overview · Consumables · Reagents · Waste Bin/Bottle · Usage History | 화면 Tab | LID-IVT-002 · LID-IVT-003 · LID-RUN-044 · LID-SPT-043 · LID-IVT-053 · LID-IVT-004 |
| Insufficient · Low · Sufficient | 화면 1 · 2-6 | LID-DAS-028 · LID-DAS-029 · LID-RUN-043 |
| Reagents type | 화면 1 | LID-RUN-049 |
| #Sample Preparation · #Nucleic Acid Extraction · #PCR | 화면 1 · 2-7 | |
| Refresh | 화면 4 | LID-RUN-033 |
| Remaining Qty · Required Qty · Status | 화면 2 열 제목 | LID-RUN-030 · LID-RUN-031 · LID-EVT-017 |
| Location · Capacity | 화면 3 열 제목 | LID-RUN-050 · LID-IVT-022 |
| Item details | 화면 3-7 | |
| Pretreatment Reagents · STARMag M96 Kit · STARMag Universal Cartridge Kit · Allplex™ GI-Virus Assay · Allplex™ Respiratory Panel 1 · Allplex™ GI-Parasite Assay · Allplex™ GI-Bacteria(II) Assay | 화면 2-1 카드 제목 | LID-RUN-048 · - · - · - · - · - · - |
| Sample Preparation · Nucleic Acid Extraction · PCR | 화면 2-7 | LID-SPT-024 · LID-SPT-025 · LID-SPT-033 |
| LB Tub (Prep) · PBS Tub · Saline Tub · ASL Standard Tube · PBS Standard Tube · Prelyser Standard Tube · Saline Standard Tube · EB DWP · LB DWP · MB DWP · WB1 DWP · WB2 DWP · Spin Tip · BB Tub · EB Tub · WB1 Tub · WB2 Tub · WB3 Tub · LB Tub · MB Tube · PK Tube · Buffer Cartridge Cap · 5X GI-V MOM · 5X Real-time One-step Buffer · GI-V PC · Real-time One-step Enzyme · RNase-free Water · GI-V IC · 5X RP1 MOM · RP1 PC · RP-V IC · 5X GI-P MOM · EM2 · GI-P PC · GI-BP IC · 5X GI-B(II) MOM · GI-B(II) PC | 화면 2-3 · 3-1 (품목 이름) | - · - · - · - · - · - · - · - · - · - · - · - · - · - · - · - · - · - · - · LID-MAS-013 · LID-MAS-014 · - · - · - · - · - · - · - · - · - · - · - · - · - · - · - · - |
| Consumable Storage | 화면 3-2 (Module 이름) | LID-EVT-049 |
| Trolley | 화면 3-2 (Unit 이름) | LID-EVT-056 |
| {n} rxns ({m} racks) · {n} rxns ({m} rack) · {n} rxns ({m} DWPs) · {n} rxns ({m} DWP) · {n} rxns ({m} sets) · {n} rxns ({m} set) · {n} rxns ({m} tubes) · {n} rxns ({m} tube) · {n} ea ({m} sets) · {n} DWPs · {n} sets | 화면 2-4 · 2-5 · 3-5 · 3-6 · 3-8 (n · m = 수량) | |
| Expired reagents are discarded or returned unused, depending on the instrument. | 화면 3-3 | LID-RUN-058 |
| Capacity · Shown only for fixed-capacity storage. | 디스크립션 5 (Tooltip) | LID-IVT-022 · LID-RUN-052 |
| Required Qty · Displays the additional quantity required based on current inventory. | 디스크립션 5 (Tooltip) | LID-RUN-031 · LID-RUN-032 |
| Status · Status is determined by run availability · Sufficient(enough stock) · Low(partial shortage) · Insufficient(no stock) | 디스크립션 5 (Tooltip) | LID-EVT-017 · - · - · - · - |
