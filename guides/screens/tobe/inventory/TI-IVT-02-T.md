---
cid: TI-IVT-02-T
pair_cid: LI-IVT-02-T
tl_relation: 동일   # 동일 | 권한 차이 | 기능 추가 | 단독
title: Inventory Overview
path: Inventory > Overview Tab
type: Tab          # Page | Popup | Tab
version: 2.1.18
date: 2026.11.19
author: 이상헌
client_mode: []
user_type: [Service, Admin, User]
policies: [POL-INV-001, POL-INV-002, POL-LOD-001, POL-EQP-009]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3903-7488
---
# TI-IVT-02-T Inventory Overview

- T/L 차이: 기능 · 디스크립션 같음. LNB 메뉴만 다름
- 호출하는 화면: Alert_020 (3 데이터 로드 실패)
- 호출되는 곳: LNB > Inventory > Overview Tab, [TI-IVT-01-T] 등 Inventory Tab 구성
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Inventory Overview 화면**
- 정의
  - <span style="color:red">CURECA</span> 장비의 모든 Module의 재고 현황을 한눈에 볼 수 있는 화면
  - Module별 총합 또는 특정 Module의 현황 조회 가능
  - <span style="color:red">Enabled인 Module</span> 대상으로만 노출
- 동작
  - LNB의 Inventory > Overview Tab을 통해 진입
- User Type : Service, Admin, User
- 정책 참고 : POL-INV-001, POL-EQP-009

**1  Module 노출 기준**
- 정의
  - 화면에 노출된 순서에 따라 Module 노출
  - Sample Storage(신규 추가), Consumable Storage, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing
- 정렬
  - <span style="color:red">Reagent/Consumable</span> 정렬 방식 : 공통 UX 참고(COMM-4-b(4/5))
- 케이스 참고 : TI-IVT-02-T/Case > Case 1, TI-IVT-02-T/Case > Case 2, TI-IVT-02-T/Case > Case 3
- 정책 참고 : POL-INV-001

**1-1  Sample Storage**
- 노출 항목
  - Samples (Inbound Trolley) : <span style="color:red">Inbound Trolley</span>에 입고된 <span style="color:red">Sample</span> 수 노출
  - Samples (Test In Progress) : 전처리 장비로 이동된 <span style="color:red">Sample</span> 수 노출
  - Samples (Outbound Trolley) : <span style="color:red">Outbound Trolley</span>에 회수된 <span style="color:red">Sample</span> 수 노출
- 표기 방식
  - <span style="color:red">Sample</span> 수 (입고 단위) = N ea (M racks)
- 정책 참고 : POL-INV-001, POL-LOD-001

**1-2  Module 선택(Dropdown)**
- 기능 : <span style="color:red">Module (Index)</span>형. Module 고유 식별값(Index)이 포함된 Module 이름을 기준으로 검색
- Default : All
- 드롭다운 리스트 항목
  - All, 해당 타입의 Module name List(오름차순)
- 동작
  - 선택 완료 후 해당 Module의 재고 현황으로 <span style="color:red">데이터</span> 업데이트하여 노출
- 공통 UX 참고 : COMM-5-h(1/2)
- 정책 참고 : POL-INV-001

**1-3  Remaining Qty**
- 정의
  - 최대 적재량 표기 방식 제거
- 산출 방식
  - Storage 영역과 장비 내 거치 공간(장비가 가져간 <span style="color:red">Consumable</span> 포함)의 수량을 모두 합산하여 재고로 노출
  - 단, 장비 내 거치 공간에 있는 <span style="color:red">Consumable</span>은 실시간으로 차감되지 <span style="color:red">않으며</span>, 적재된 순간의 수량을 그대로 유지
  - <span style="color:red">Consumable</span>이 모두 소진되거나 다시 Storage로 반환되는 기준으로 Inventory 재고 업데이트
  - 진입 시 기준으로 적재량이 노출되며, 실시간 반영이 아닌 [Refresh] 버튼을 통해 데이터 새로고침
- 표기 방식
  - 공통 UX 참고(COMM-4-b(5/5))
  - ~~2-3~~
  - ~~최대 적재 용량이 있을 경우~~
  - ~~표기 방식~~
  - ~~게이지 바 및 잔여 재고 비율(%) 표시~~
  - ~~"잔여 수량/ 총 적재 가능 수량(입고 단위 수량)" 형식으로 제공~~
  - ~~잔여 수량=낱개 단위로 총 수량~~
  - ~~입고 단위 수량=Rack 또는 Set 단위 기준으로 환산하여 묶음 단위로 표기됨~~
  - ~~표기 단위: 'common 'COMM-4-b' 참고~~
- 정책 참고 : POL-INV-002

**2  Overview by Module Tooltip**
- Tooltip 문구 : Displays total inventory aggregated across all <span style="color:red">modules. Select</span> a module to view its individual stock details
- 공통 UX 참고 : COMM-5-v

**3  [Refresh] 버튼**
- 동작
  - 클릭 시 데이터가 최신 상태로 갱신되어 노출
  - 데이터 불러오기를 실패할 경우 Alert 노출 : Alert_020
- 정책 참고 : POL-INV-001

## 케이스

### Case 1. 장착된 Trolley가 없을 경우

- 디스크립션 번호 : 1
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 1-1. Consumable Storage에 Docked 상태인 Trolley가 없음

- 'No docked trolleys' 문구 노출

### Case 2. 등록된 Module이 없을 경우

- 디스크립션 번호 : 1
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 2-1. 그 Module 열에 등록된 Module 없음

- 'No registered modules available' 문구 노출

### Case 3. 입고 종류에 따라 가변형으로 변하는 Storage(대상 : Consumable Storage, Plate Sealing)

- 디스크립션 번호 : 1
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 3-1. Consumable Storage

- Trolley에 Consumable을 구성하여 넣는 케이스
- Trolley에 입고된 Consumable 리스트만 노출
- 해당 페이지 진입 시, 진입 기준으로 재고 조회하여 이미 다 소진된 항목은 제외하여 노출

#### 3-2. Plate Sealing

- PCR Reagent를 넣는 Cold Storage일 경우, 24칸에 검사에 필요한 Reagent를 구성하여 넣기 때문에 정확히 어떤 Reagent가 입고될지 알 수 없음 (단, MM Tube는 파악 가능)
- 입고된 Reagent 기준으로 노출
- 입고된 Reagent의 Kit명으로 노출 (Reagent명 오름차순)
- ~~Sealing Film과 MM Tube는 Capacity가 있어 상단에 표기~~

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 3 | Alert | Alert_020 | 데이터 불러오기를 실패했을 때 | OK 선택 시 → 해당 Alert 닫힘 |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | Tab | Summary / Overview (선택) / Consumables / Reagents / Waste Bin/Bottle / Usage History | POL-INV-001 정의, 반영 대기 TI-IVT-02-T-R01 |
| 1-2 | Module 선택 6개 | All | 기존 원본 |
| 1-1 | Sample Storage 3행 | Samples (Inbound Trolley) 0 ea (0 racks) / Samples (Test In Progress) 48 ea (1 rack) / Samples (Outbound Trolley) 912 ea (19 racks) | 기존 원본 3행, `glossary.md` 단수 · 복수 |
| 1 | Consumable Storage 21행 | 기존 원본 21행 그대로 | `Inventory_asis` TI-IVT-02-T Consumable Storage 열 |
| 1 | High-throughput Extraction 5행 | 기존 원본 5행 그대로 | 같은 프레임 High-throughput Extraction 열 |
| 1 | Flexible Extraction 3행 | 기존 원본 3행 그대로 | 같은 프레임 Flexible Extraction 열 |
| 1 | PCR Setup 4행 | 기존 원본 4행 그대로 | 같은 프레임 PCR Setup 열 |
| 1 | Plate Sealing 12행 | 기존 원본 12행 그대로 | 같은 프레임 Plate Sealing 열 |
| Case 1-1 · 2-1 | Consumable Storage 열 | 열 제목 Consumable Storage / All, 문구는 기존 원본 그대로 | 기존 원본 Case |
| Case 3-1 | Consumable Storage (1) 선택 5행 | 96-DWP 3 ea / 1000 μL Tip 288 ea (3 racks) / 300 μL Tip 196 ea (2 racks) / Wide Bore Tip 288 ea (3 racks) / LB DWP 288 rxns (3 DWPs) | 기존 원본 Case, `glossary.md` (T → rxns) |
| Case 3-2 | Plate Sealing All 4행 | Allplex™ HPV28 Detection 300 rxns (3 sets) / Allplex™ PneumoBacter Assay 300 rxns (3 sets) / Allplex™ Respiratory Panel 1 300 rxns (3 sets) / Allplex™ Respiratory Panel 2 300 rxns (3 sets) | 기존 원본 Case, `glossary.md` (T → rxns) |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Inventory | 화면 제목 | |
| Summary · Overview · Consumables · Reagents · Waste Bin/Bottle · Usage History | 화면 Tab | |
| Overview by Module | 화면 1 | |
| Refresh | 화면 3 | |
| All | 화면 1-2 · 케이스 | |
| Sample Storage · Consumable Storage · High-throughput Extraction · Flexible Extraction · PCR Setup · Plate Sealing | 화면 1 (Module 열 제목) · 케이스 | |
| Samples (Inbound Trolley) · Samples (Test In Progress) · Samples (Outbound Trolley) | 화면 1-1 | |
| 96-DWP · 1000 μL Tip · 300 μL Tip · Wide Bore Tip · Empty Standard Tube · Stool Swab · LB DWP · GI-BP IC · GI-V IC · PB IC · RP-V IC · STI-12 IC · LB Tub · LB Tub (Prep) · PBS Tub · Saline Tub · ASL Standard Tube · PBS Standard Tube · PK Tube · Prelyser Standard Tube · Saline Standard Tube | 화면 1 Consumable Storage 열 (품목 이름) | |
| EB DWP · MB DWP · WB1 DWP · WB2 DWP · Spin Tip | 화면 1 High-throughput Extraction 열 | |
| MB Tube · BB Tub · EB Tub · WB1 Tub · WB2 Tub · WB3 Tub · Buffer Cartridge Cap | 화면 1 Flexible Extraction 열 | |
| PCR Plate · 300 μL Tip (1) · 300 μL Tip (2) | 화면 1 PCR Setup 열 | |
| MM Tube · Sealing Film (1) · Sealing Film (2) · Allplex™ GI-Bacteria(I) Assay · Allplex™ GI-Bacteria(II) Assay · Allplex™ GI-Virus Assay · Allplex™ HPV28 Detection · Allplex™ PneumoBacter Assay · Allplex™ Respiratory Panel 1 · Allplex™ Respiratory Panel 2 · Allplex™ Respiratory Panel 3 · Anyplex™II STI-12 Detection | 화면 1 Plate Sealing 열 · 케이스 Case 3-2 | |
| {n} ea · {n} ea ({m} racks) · {n} ea ({m} rack) · {n} rxns ({m} DWPs) · {n} rxns ({m} DWP) · {n} rxns ({m} tubes) · {n} rxns ({m} tube) · {n} rxns ({m} racks) · {n} rxns ({m} rack) · {n} rxns ({m} sets) · {n} ea ({m} sets) · {n} ea ({m} socket) | 화면 1 수량 (n · m = 수량) | |
| Displays total inventory aggregated across all modules. Select a module to view its individual stock details | 디스크립션 2 | |
| No docked trolleys | 케이스 Case 1-1 | |
| No registered modules available | 케이스 Case 2-1 | |
