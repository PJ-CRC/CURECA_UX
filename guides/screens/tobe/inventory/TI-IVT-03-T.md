---
cid: TI-IVT-03-T
pair_cid: LI-IVT-03-T
tl_relation: 동일   # 동일 | 권한 차이 | 기능 추가 | 단독
title: Inventory Consumables
path: Inventory > Consumables Tab
type: Tab          # Page | Popup | Tab
version: 2.1.18
date: 2026.11.19
author: 이상헌
client_mode: []
user_type: [Service, Admin, User]
policies: [POL-INV-001, POL-INV-002, POL-INV-003, POL-INV-006, POL-EQP-009]
basis: 2026-11-27 15:53 · history c133247fe
basis_versions:
  rules: CURECA 작업규칙 @2026-11-27 11:34
  policy: CURECA 정책서 @2026-11-27 15:31
  glossary: 기준데이터 @2026-11-26 15:17
  screens: 화면 정의서 @2026-11-27 15:45
  common_ux: Common UX (common-ux/comm-index.md) @2026-11-25 16:08
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3903-7489
---
# TI-IVT-03-T Inventory Consumables

- T/L 차이: 화면 · 디스크립션 같음. LNB 메뉴만 다름
- 호출하는 화면: [TI-IVT-03-T-P] Consumables Item details popup (3-7 [Item details])
- 호출되는 곳: LNB > Inventory > Consumables Tab, [TI-IVT-01-T] 등 Inventory Tab 구성
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Inventory Consumables 화면**
- 정의
  - <span style="color:red">CURECA</span> 장비에서 사용되는 Consumables의 재고를 확인할 수 있는 화면
  - <span style="color:red">Enabled인 Module</span> 대상으로만 노출
  - <span style="color:red">Consumable</span> 기준으로 모아보기 기능을 제공하며, 특성이 같은 기준으로 묶어서 노출
  - ~~시약 개수 표기 방식~~
  - ~~"낱개 수량(입고 단위 수량)" 형식으로 제공~~
  - ~~100개당 1 Rack일 경우, 입고 단위 수량을 올림 처리~~
  - ~~(예: 101 → 2 Rack)~~
- 동작
  - LNB의 Inventory > Consumables Tab을 통해 진입
- User Type : Service, Admin, User
- 공통 UX 참고 : COMM-4-b(5/5)
- 정책 참고 : POL-INV-001, POL-EQP-009

**1  Chip 영역(Status 필터)**
- 기능
  - Status : Insufficient, Low, <span style="color:red">Sufficient</span>
  - 상태값 옆 숫자는 좌측 영역의 Status별 건수 노출
- Default : 모든 Chip이 선택되지 않은 상태(전체 데이터 노출)
- 동작
  - Chip 클릭 시 선택 상태로 변경, 해당 Status 값에 해당하는 데이터만 필터링하여 노출
  - 동일 Chip 재클릭 시 선택 해제, 필터링 해제되어 전체 데이터 노출
  - 다중 선택 : Chip은 여러 개 동시에 선택 가능하며 선택된 상태값에 해당되는 모든 데이터가 필터링되어 노출
  - 적용 범위 : 좌측 / 우측 영역 모두 동일하게 필터링 적용
  - 우측 영역 규칙 : Status 값에 해당하는 Storage만 필터링되어 노출
- 공통 UX 참고 : COMM-5-f
- 정책 참고 : POL-INV-003

**2  좌측 영역 - 카드 리스트**
- 정의
  - <span style="color:red">Consumable</span> 이름을 기준으로 성질이 유사한 항목들을 그룹화하여 카드 형태로 노출 (예외 처리 : 그룹화 불가 항목은 단일 카드로 별도 노출)
- Default : 첫 번째 카드가 선택된 상태로 노출
- 동작
  - 카드 전체가 클릭 가능 영역이며, 클릭 시 우측 영역([3])에 해당 카드의 상세 정보 노출
- 정렬
  - 공통 UX 참고(COMM-4-b(3/5))
- 노출 조건
  - Remaining Qty가 1개 이상 존재하거나 Required Qty가 1개 이상 필요한 경우 노출
  - Remaining Qty 및 Required Qty가 모두 0일 경우 해당 항목(<span style="color:red">Consumable</span>)은 숨김 처리
  - 카드 영역 내 모든 항목이 미노출 조건이면 해당 카드 전체 미노출
  - 항목이 N개로 노출되는 카드일 경우, 노출되는 항목이 1개일 경우에도 '단일 <span style="color:red">Consumable</span>' 기준으로 노출되지 않고 [2-1] 형태로 카드 제목이 있는 케이스로 노출
- 공통 UX 참고 : COMM-5-e
- 정책 참고 : POL-INV-003

**2-1  카드 제목**
- 표기 방식 : 카드 내에 묶인 항목들의 성질을 대표하는 항목명을 카드 제목으로 사용

**2-2  카드 내 항목**
- 표기 방식 : 카드 제목에 해당되는 <span style="color:red">Consumable</span> 이름을 기준으로, 동일 성질을 가진 항목들을 목록 형태로 카드 내부에 노출

**2-3  단일 <span style="color:red">Consumable</span>**
- 정의 : 동일한 성질을 가진 다른 <span style="color:red">Consumable</span>과 그룹화가 불가능한 경우, 단일 항목으로 별도 카드로 노출

**2-4  Remaining Qty(좌측 영역)**
- 정의 : 좌측 영역의 Remaining Qty는 해당 <span style="color:red">Consumable</span>이 적재된 모든 Storage의 개수를 합산하여 노출
- 산출 방식
  - Storage 영역과 장비 내 거치 공간(장비가 가져간 <span style="color:red">Consumable</span> 포함)의 수량을 모두 합산하여 재고로 노출
  - 단, 장비 내 거치 공간에 있는 <span style="color:red">Consumable</span>은 실시간으로 차감되지 <span style="color:red">않으며</span>, 적재된 순간의 수량을 그대로 유지
  - <span style="color:red">Consumable</span>이 모두 소진되거나 다시 Storage로 반환되는 기준으로 Inventory 재고 업데이트
  - 잔여량 집계 : <span style="color:red">Storage</span> 및 장비 내 적재된 <span style="color:red">Consumable</span>을 포함하여 관리
  - <span style="color:red">Storage</span>에 <span style="color:red">Consumable</span> 입고 시 해당 수량 증가
  - 장비에서 <span style="color:red">Consumable</span> 사용 후 <span style="color:red">Storage</span>로 반환 시 실제 사용 수량만큼 차감
  - 장비에서 <span style="color:red">Consumable</span> 사용 후 폐기 시 실제 사용 수량만큼 차감
  - <span style="color:red">Storage</span>에서 <span style="color:red">Consumable</span> 제거 시 해당 수량 차감
  - <span style="color:red">사용량(Usage History)은 폐기할 때만 기록, 반환할 때는 Remaining Qty만 차감</span>
- 공통 UX 참고 : COMM-4-b(5/5)
- 정책 참고 : POL-INV-002, POL-INV-006

**2-5  Required Qty(좌측 영역)**
- 정의 : 좌측 영역의 <span style="color:red">Required Qty</span>는 현재 전체 Run 기준으로 해당 <span style="color:red">Consumable</span>이 적재된 모든 Storage 및 장비 내 Buffer 공간의 합계를 기준으로 집계
- 산출 방식
  - 총 필요 수량에서 현재 재고를 제외한 부족 수량을 계산
  - 예시 : 남은 재고 10개, 필요 수량 14개 → Required Qty = 4
- 노출 조건
  - <span style="color:red">Inbound Trolley가 Docked 상태이거나, [Run Start] 뒤 진행 중인 Batch가 끝나지 않았으면 노출 (둘 중 하나)</span>
  - <span style="color:red">장비 통합 상태가 Partial Running · Error가 되어도 Batch가 끝나기 전이면 계속 노출, Run 중 Inbound Trolley를 분리해도 계속 노출</span>
  - 예외 처리 : 위의 상황이 아닐 경우 '-'로 노출
- 정책 참고 : POL-INV-003

**2-6  Status**
- 정의
  - 현재 전체 Run 기준으로 필요 수량 대비 재고 상태를 정의된 아이콘 형식으로 노출
  - <span style="color:red">Insufficient : 잔여 수량 0. 그 품목을 쓰는 단계에서 Error가 생겨 가동이 중단됨 (예: 재고 0)</span>
  - <span style="color:red">Low : 필요 수량보다 1개 이상 적으나 가동 가능 (예: 1000개 필요, 999개 이하)</span>
  - Sufficient : Remaining Qty가 필요 수량을 충족하여 부족이 없는 상태
- 우선순위 규칙 : 동일 항목의 상세 정보에서 Insufficient와 Low 상태가 동시에 존재할 경우, 좌측 카드에는 Insufficient로 노출
  - 예시 : 설계서의 '300 μL Tip' → 우측 상세에는 Insufficient 1개, Low 1개 노출되어 있지만, 좌측 카드에는 Insufficient 값으로 노출
- 노출 조건
  - <span style="color:red">Inbound Trolley가 Docked 상태이거나, [Run Start] 뒤 진행 중인 Batch가 끝나지 않았으면 노출 (둘 중 하나)</span>
  - <span style="color:red">장비 통합 상태가 Partial Running · Error가 되어도 Batch가 끝나기 전이면 계속 노출</span>
  - 예외 처리 : 위의 상황이 아닐 경우 '-'로 노출
- 정책 참고 : POL-INV-003

**3  우측 영역**
- 정의
  - 좌측에서 선택된 카드의 정보를 우측 영역에 노출
  - <span style="color:red">Consumable</span>별 <span style="color:red">Module (Index)</span> + Storage 기준으로 Location Row 생성
- 정렬 : 좌측 영역 카드 내 항목 순서와 동일하게 적용
- 노출 조건
  - Remaining Qty가 1개 이상 존재하거나 Required Qty가 1개 이상 필요한 경우 노출
  - Remaining Qty 및 Required Qty가 모두 0일 경우 해당 Location은 숨김 처리
- 공통 UX 참고 : COMM-5-e
- 정책 참고 : POL-INV-003

**3-1  <span style="color:red">Consumable</span> 개별 카드**
- 좌측 카드 목록에 해당되는 '<span style="color:red">Consumable</span> 이름'을 기준으로 구성
- 해당 <span style="color:red">Consumable</span>이 들어가는 위치 정보를 함께 묶어서 카드 내에 노출

**3-2  Location**
- 해당 <span style="color:red">Consumable</span>이 적재되는 '<span style="color:red">Module (Index)</span> > Storage Unit' 기준으로 노출

**3-3  구분선**
- 정의 : 동일 <span style="color:red">Consumable</span>이 여러 Storage에 적재되는 경우, 위치 정보를 구분하여 노출(Storage 이름 기준으로 구분)
- 표기 방식
  - 동일 <span style="color:red">Consumable</span>이 서로 다른 Storage Unit에 적재될 경우, 각 위치 정보를 구분선(Line)으로 나누어 노출
  - 구분선은 시각적으로 항목 간 경계를 명확히 하여 사용자가 Storage별 적재 현황을 쉽게 인지할 수 있도록 함

**3-4  Capacity(우측 영역_Module+Storage 기준)**
- 정의 : 최대 적재량을 관리할 수 있는 Storage에 한해 Capacity 값 노출
- 최대 노출 값 : 장비에서 설정된 값 노출
  - 기존에는 값이 fix되어 있었으나 26.08.20 기준, 제작 시 장비 설계 방식에 따라 적재 용량이 다르게 적용되는 케이스가 발생하여 장비 셋팅 시 설정된 값을 노출하는 방식으로 적용
- 예외 처리 : 여러 품목을 혼합 적재하여 최대 적재량 관리가 불가능한 경우 해당 영역 미제공 (예시 : Cold Storage)
- 정책 참고 : POL-INV-002

**3-5  Remaining Qty(우측 영역_Module+Storage 기준)**
- 정의 : 해당 <span style="color:red">Consumable</span>이 적재된 Location(Module+Storage) 기준으로 장비에 남은 개수 노출
- 산출 방식
  - Storage 영역과 장비 내 거치 공간(장비가 가져간 <span style="color:red">Consumable</span> 포함)의 수량을 모두 합산하여 재고로 노출
  - 단, 장비 내 거치 공간에 있는 <span style="color:red">Consumable</span>은 실시간으로 차감되지 <span style="color:red">않으며</span>, 적재된 순간의 수량을 그대로 유지
  - <span style="color:red">Consumable</span>이 모두 소진되거나 다시 Storage로 반환되는 기준으로 Inventory 재고 업데이트
- 공통 UX 참고 : COMM-4-b(5/5)
- 정책 참고 : POL-INV-002

**3-6  Required Qty(우측 영역_Module+Storage 기준)**
- 정의 : 현재 전체 Run 기준으로 해당 <span style="color:red">Consumable</span>이 적재된 Location(Module+Storage) 및 장비 내 Buffer 공간의 합계를 기준으로 집계
- 산출 방식
  - 총 필요 수량에서 현재 재고를 제외한 부족 수량을 계산
  - 예시 : 남은 재고 10개, 필요 수량 14개 → Required Qty = 4
- 노출 조건
  - <span style="color:red">Inbound Trolley가 Docked 상태이거나, [Run Start] 뒤 진행 중인 Batch가 끝나지 않았으면 노출 (둘 중 하나)</span>
  - <span style="color:red">장비 통합 상태가 Partial Running · Error가 되어도 Batch가 끝나기 전이면 계속 노출</span>
  - 예외 처리 : 위의 상황이 아닐 경우 '-'로 노출
- 정책 참고 : POL-INV-003

**3-7  [Item details] 버튼**
- 정의 : 해당 <span style="color:red">Consumable</span>의 개별 상세 정보를 확인할 수 있는 Popup 호출
- 동작
  - 클릭 시 Popup 노출 : TI-IVT-03-T-P
- 정책 참고 : POL-INV-001

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

없음 (`Inventory_asis` 페이지에 TI-IVT-03-T 케이스 프레임 없음)

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 4 | Alert | Alert_020 | 데이터를 불러오지 못했을 때 | OK 선택 시 → 해당 Alert 닫힘 |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | Tab | Summary / Overview / Consumables (선택) / Reagents / Waste Bin/Bottle / Usage History | POL-INV-001 정의 |
| 1 | Chip | Insufficient 12 / Low 7 / Sufficient 2 | 기존 원본, `status-values.csv` 재고 상태 |
| 2 | 카드 목록 5장 | 기존 원본 5장 그대로 (Plates 2행 · Tips 3행 · Tubes 2행 · Sealing Film · Stool Swab) | `Inventory_asis` TI-IVT-03-T 왼쪽 카드 목록 |
| 2-6 · 3 | Status | 기존 원본 그대로 (Remaining Qty 0 = Insufficient, 0보다 크고 Required Qty가 있으면 Low, Required Qty '-'면 Sufficient) | `status-values.csv` 재고 상태 |
| 3 | 1000 μL Tip 카드 5행 | Consumable Storage (1) > Trolley · 6 DWPs · 0 · 96 ea (1 rack) / Consumable Storage (2) > Trolley · 6 DWPs · 0 · 96 ea (1 rack) / Consumable Storage (3) > Trolley · 6 DWPs · 0 · 96 ea (1 rack) / PCR Setup (1) > 1000 μL Tip Storage · 11 racks · 0 · 96 ea (1 rack) / PCR Setup (2) > 1000 μL Tip Storage · 11 racks · 0 · 96 ea (1 rack) | 기존 원본, 반영 대기 TI-IVT-03-T-R08 (11 racks) |
| 3 | 300 μL Tip 카드 4행 | Consumable Storage (1) > Trolley · 6 DWPs · 0 · 96 ea (1 rack) / Consumable Storage (3) > Trolley · 6 DWPs · 0 · 96 ea (1 rack) / PCR Setup (1) > 300 μL Tip Storage (1) · 11 racks · 0 · 96 ea (1 rack) / PCR Setup (1) > 300 μL Tip Storage (2) · 11 racks · 96 ea (1 rack) · 96 ea (1 rack) | 기존 원본, 반영 대기 TI-IVT-03-T-R08 |
| 3 | Wide Bore Tip 카드 2행 | 기존 원본 2행 그대로 | 기존 원본 |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Inventory | 화면 제목 | LID-IVT-001 |
| Summary · Overview · Consumables · Reagents · Waste Bin/Bottle · Usage History | 화면 Tab | LID-IVT-002 · LID-IVT-003 · LID-RUN-044 · LID-SPT-043 · LID-IVT-053 · LID-IVT-004 |
| Insufficient · Low · Sufficient | 화면 1 · 2-6 | LID-DAS-028 · LID-DAS-029 · LID-RUN-043 |
| Refresh | 화면 4 | LID-RUN-033 |
| Remaining Qty · Required Qty · Status | 화면 2 열 제목 | LID-RUN-030 · LID-RUN-031 · LID-EVT-017 |
| Location · Capacity | 화면 3 열 제목 | LID-RUN-050 · LID-IVT-022 |
| Item details | 화면 3-7 | |
| Plates · Tips · Tubes | 화면 2-1 카드 제목 | LID-RUN-045 · LID-RUN-046 · LID-RUN-047 |
| 96-DWP · PCR Plate · 1000 μL Tip · 300 μL Tip · Wide Bore Tip · Empty Standard Tube · MM Tube · Sealing Film · Stool Swab | 화면 2-2 · 2-3 · 3-1 (품목 이름) | LID-SPT-020 · LID-SPT-031 · - · - · - · - · - · - · - |
| Consumable Storage · PCR Setup | 화면 3-2 (Module 이름) | LID-EVT-049 · LID-SPT-026 |
| Trolley · 1000 μL Tip Storage · 300 μL Tip Storage | 화면 3-2 (Unit 이름) | LID-EVT-056 · - · LID-EVT-064 |
| {n} ea · {n} ea ({m} rack) · {n} ea ({m} racks) · {n} ea ({m} socket) · {n} ea ({m} sockets) · {n} DWPs · {n} racks · {n} sets | 화면 2-4 · 2-5 · 3-4 · 3-5 · 3-6 (n · m = 수량) | |
| Capacity · Shown only for fixed-capacity storage. | 디스크립션 5 (Tooltip) | LID-IVT-022 · LID-RUN-052 |
| Required Qty · Displays the additional quantity required based on current inventory. | 디스크립션 5 (Tooltip) | LID-RUN-031 · LID-RUN-032 |
| Status · Status is determined by run availability · Sufficient(enough stock) · Low(partial shortage) · Insufficient(no stock) | 디스크립션 5 (Tooltip) | LID-EVT-017 · - · - · - · - |
