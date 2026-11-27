---
cid: TI-IVT-01-T
pair_cid: LI-IVT-01-T
tl_relation: 동일   # 동일 | 권한 차이 | 기능 추가 | 단독
title: Inventory Summary
path: Inventory > Summary Tab
type: Tab          # Page | Popup | Tab
version: 2.1.18
date: 2026.11.19
author: 이상헌
client_mode: []
user_type: [Service, Admin, User]
policies: [POL-INV-001, POL-INV-002, POL-INV-003, POL-INV-005, POL-EQP-009]
basis:
basis_versions:
source: tobe
figma:
---
# TI-IVT-01-T Inventory Summary

- T/L 차이: 기능 같음. LNB 메뉴만 다름
- 호출하는 화면: 없음 (1-7 · 3-5 Tooltip, 4 [Refresh]만)
- 호출되는 곳: LNB > Inventory > Summary Tab. Inventory Tab 구성: Summary | [TI-IVT-02-T] Overview | [TI-IVT-03-T] Consumables | [TI-IVT-04-T] Reagents | [TI-IVT-05-T] Waste Bin/Bottle | [TI-IVT-06-T] Usage History
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Inventory Summary 화면**
- 정의
  - <span style="color:red">CURECA</span> 장비에서 사용되는 <span style="color:red">Consumable, Reagent 및 Waste Bin/Bottle</span>을 관리하는 Tab으로 구성
  - 각 Tab에서 중요한 정보만 모아 Summary Tab에 요약하여 노출
  - <span style="color:red">Enabled인 Module</span> 대상으로만 노출
  - 항목별 상세 정보는 해당 Tab의 내용 참고
- 동작
  - LNB의 Inventory > Summary Tab을 통해 진입
- User Type : Service, Admin, User
- 정책 참고 : POL-INV-001, POL-EQP-009

**1  Inventory status 영역**
- 정의
  - 현재 검사 진행 기준으로 검사 완료에 필요한 Consumable 및 Reagent 부족 리스트 노출
- 노출 조건
  - 항시 노출
  - <span style="color:red">Sample Storage의 Inbound Trolley가 Docked 상태이거나, [Run Start] 뒤 진행 중인 Batch가 끝나지 않았으면 부족 리스트 노출</span>
  - <span style="color:red">장비 통합 상태가 Partial Running · Error가 되어도 Batch가 끝나기 전이면 부족 리스트 계속 노출</span>
  - <span style="color:red">위 두 조건이 모두 아닐 경우</span> 'Shown only if system running or Inbound Trolley docked' 문구 노출
  - <span style="color:red">위 조건에 해당하나</span> 부족한 Consumable · Reagent가 없을 경우 'No actions required' 문구 노출
- 정렬
  - 상태값 Insufficient, Low 순으로 우선 정렬
  - 동일 상태값 내에서는 부족 수량이 많은 Consumable 또는 Reagent 순으로 정렬
  - 동일 수량일 경우 Name 오름차순 정렬
- 케이스 참고 : TI-IVT-01-T/Case > Case 1, TI-IVT-01-T/Case > Case 2, TI-IVT-01-T/Case > Case 3
- 정책 참고 : POL-INV-003

**1-1  요약 정보**
- 리스팅된 항목을 상태값 기준으로 <span style="color:red">Insufficient 및 Low</span> 2개의 정보로 나눠 노출
- 카드 영역 하위에는 Item Type 기준으로 Consumable 및 Reagent를 나눠 노출
- 정책 참고 : POL-INV-003

**1-2  Title**
- Main title : Consumable name 또는 Reagent name
- Sub title : Module Name / Storage Name

**1-3  Remaining Qty**
- 정의
  - 각 Storage 내 Consumable 또는 Reagent의 잔여 수량 노출
- 표기 방식
  - "잔여 수량 (입고 단위 수량)" 형식으로 노출
  - 잔여 수량 = 낱개 단위의 총 수량
  - 입고 단위 수량 = Rack 또는 Set 단위 기준으로 환산하여 묶음 단위로 노출
  - <span style="color:red">Insufficient</span> 상태일 경우 '0'으로 노출되며 빨간색으로 강조
  - ~~최대 적재량(capacity)을 표기할 수 있는 Storage 경우, "잔여 수량 / 최대 적재량" 형태로 표시~~
- 공통 UX 참고 : COMM-4-b(5/5)
- 정책 참고 : POL-INV-002

**1-4  Required Qty**
- 산출 방식
  - 총 필요 수량에서 현재 재고를 제외한 부족 수량을 계산
  - 예시 : 남은 재고 10개, 필요 수량 14개 → Required Qty = 4
- 정책 참고 : POL-INV-003

**1-5  Stock Status Icon**
- <span style="color:red">Insufficient 및 Low</span> 각 상태값별로 색으로 구분하여 노출
- 정책 참고 : POL-INV-003

**1-6  Pagination**
- 최대 6개 항목 기준으로 구성되며, 초과 시 Pagination으로 추가 항목 탐색
- 좌우 이동 버튼(<, >)을 통해 페이지 전환
- 중앙 영역에 {현재 페이지/총 페이지} 노출
- 공통 UX 참고 : COMM-5-l

**1-7  Inventory status Tooltip**
- Tooltip 문구
  - Shows required items by replenishment priority, visible only when system is running or Inbound Trolley is docked
  - Shows required items by replenishment priority
  - Visible only when the system is running or the Inbound Trolley is docked.
  - Shows the quantity of consumables required for the Run.
- 공통 UX 참고 : COMM-5-v

**3  Waste Bin/Bottle Status 영역**
- 정의
  - Waste Bin/Bottle의 정보를 요약해서 보여 주는 영역으로 Full 및 Almost Full 상태값의 리스트만 노출
  - <span style="color:red">각 Module에 설치된 제조사의 Waste Bin/Bottle Unit만 노출</span>
- 노출 조건
  - 항시 노출
  - 노출되는 항목이 없을 경우 'No actions required' 문구 노출
- 정렬
  - 상태값 Full 및 Almost Full 순으로 우선 정렬
  - 동일 상태값 내에서는 Fill Level이 높은 순으로 정렬
  - 동일 수량일 경우 Name 오름차순 정렬
- 케이스 참고 : TI-IVT-01-T/Case > Case 1, TI-IVT-01-T/Case > Case 3
- 정책 참고 : POL-INV-005

**3-1  요약 정보**
- 목록에 리스팅된 항목을 상태값 기준으로 Full 및 Almost Full 2개의 카드로 구분하여 노출

**3-2  Title**
- Sub title : Module Name
- Main title : Waste Bin/Bottle Name

**3-3  Fill Level(%)**
- <span style="color:red">산출 방식 · 표기는 Waste Bin/Bottle Tab의 Fill Level(%)과 같음</span>
- 화면 참고 : <span style="color:red">TI-IVT-05-T</span>
- 정책 참고 : POL-INV-005

**3-4  <span style="color:red">Waste Bin/Bottle Status Icon</span>**
- Full 및 Almost Full의 각 상태값별로 색으로 구분하여 노출
- 정책 참고 : POL-INV-005

**3-5  Waste Bin/Bottle Status Tooltip**
- Tooltip 문구 : Shows waste bin/bottle requiring emptying, prioritized by Full and <span style="color:red">Almost Full</span> status
- 공통 UX 참고 : COMM-5-v

**4  [Refresh] 버튼**
- 동작
  - 클릭 시 클릭된 영역의 데이터가 최신 상태로 갱신되어 노출
  - <span style="color:red">데이터를 불러오지 못할 경우 Alert 노출 : Alert_020</span>
- 정책 참고 : POL-INV-001

## 케이스

### Case 1. 건 수별 노출 방식

- 디스크립션 번호 : 1, 1-6, 3
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 1-1. 한 섹션에 최대 6개 노출, 6개 이하일 경우 가변형 및 Pagination 제거, 7건 이상일 경우 Pagination 적용(모든 영역 동일)

- 6개 이하인 경우의 Inventory status 영역 (항목 3개)

### Case 2. 구동 중이 아닐 경우, 'Shown only if system running or Inbound Trolley docked' 문구 노출

- 디스크립션 번호 : 1
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 2-1. Inbound Trolley가 Docked 상태가 아니고, 진행 중인 Batch가 없음

- 요약 정보는 '-'로 노출

### Case 3. 작업해야 할 항목이 없을 경우, 'No actions required' 문구 노출

- 디스크립션 번호 : 1, 3
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 3-1. 부족한 Consumable · Reagent가 없음

- 요약 정보는 '-'로 노출

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 4 | Alert | Alert_020 | 데이터를 불러오지 못했을 때 | OK 선택 시 → 해당 Alert 닫힘 |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | Tab | Summary (선택) / Overview / Consumables / Reagents / Waste Bin/Bottle / Usage History | POL-INV-001 정의 |
| 1-1 | 요약 정보 | Insufficient 3 (Consumable 3 · Reagent -) / Low 5 (Consumable 3 · Reagent 2) | `status-values.csv` 재고 상태, `terms.csv` Consumable |
| 1 | 부족 리스트 6행 | 1 MB DWP · High-throughput Extraction (1) / MB Storage · 0 · 250 rxns (3 DWPs) / 2 EB DWP · High-throughput Extraction (1) / EB Storage · 0 · 250 rxns (3 DWPs) / 3 300 μL Tip · PCR Setup (1) / 300 μL Tip Storage (1) · 0 · 100 ea (2 racks) / 4 PBS Tub · Consumable Storage (2) / Trolley · 200 rxns (2 racks) · 300 rxns (3 racks) / 5 1000 μL Tip · Consumable Storage (2) / Trolley · 96 ea (1 rack) · 150 ea (2 racks) / 6 BB Tub, WB1 Tub, WB2 Tub, WB3 Tub, EB Tub, MB Tube · Flexible Extraction (1) / Buffer Cartridge Storage · 100 rxns (1 set) · 150 rxns (2 sets) | 기존 원본 6행 (`Inventory_asis` TI-IVT-01-T Inventory status), `glossary.md` 표기 규칙, `module-units.csv` |
| 1-5 | Stock Status Icon | 1 ~ 3 Insufficient, 4 ~ 6 Low | `status-values.csv` 재고 상태 (Remaining Qty 0 = Insufficient) |
| 1-6 | Pagination | 1/2 | 기존 원본 |
| 3-1 | 요약 정보 | Full 2 / Almost Full 20 | 기존 원본, `status-values.csv` 폐기함/폐액통 상태 |
| 3 | Waste Bin/Bottle 리스트 6행 | 1 PCR Setup (1) · Waste Bin · Full / 2 Flexible Extraction (1) · Liquid Waste Bottle · Full / 3 High-throughput Extraction (1) · DWP Waste Bin · 90% / 4 Plate Sealing (1) · Sealer Waste Bin (1) · 85% / 5 Universal PCR (1) · Waste Bin · 75% / 6 Sample Pre-treatment (1) · Tip Waste Bin (Upper) · 71% | 기존 원본 6행, `module-units.csv` |
| 3 | Pagination | 1/3 | 기존 원본 |
| Case 1-1 | Inventory status 3행 | 요약 Insufficient 3 (Consumable 3 · Reagent -) / Low 5 (Consumable 3 · Reagent 2), 1 MB DWP … 250 rxns (3 DWPs) / 2 EB DWP … 250 rxns (3 DWPs) / 3 300 μL Tip · PCR Setup (1) / 300 μL Tip Storage (1) · 0 · 100 ea (2 racks) | 기존 원본 Case, `status-values.csv`, `glossary.md` |
| Case 2-1 | 요약 정보 | Insufficient - (Consumable - · Reagent -) / Low - (Consumable - · Reagent -) | 기존 원본 Case, `status-values.csv` |
| Case 3-1 | 요약 정보 | Insufficient - / Low - (Consumable - · Reagent -) | 기존 원본 Case, `status-values.csv` |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Inventory | 화면 제목 | |
| Summary | 화면 Tab | |
| Overview | 화면 Tab | |
| Consumables | 화면 Tab | |
| Reagents | 화면 Tab | |
| Waste Bin/Bottle | 화면 Tab | |
| Usage History | 화면 Tab | |
| Inventory status | 화면 1 | |
| Refresh | 화면 4 | |
| Insufficient | 화면 1-1 · 케이스 Case 1-1 · Case 2-1 · Case 3-1 | |
| Low | 화면 1-1 · 케이스 Case 1-1 · Case 2-1 · Case 3-1 | |
| Consumable | 화면 1-1 · 케이스 | |
| Reagent | 화면 1-1 · 케이스 | |
| Remaining Qty | 화면 1-3 | |
| Required Qty | 화면 1-4 | |
| Waste Bin/Bottle Status | 화면 3 | |
| Full | 화면 3-1 · 3 리스트 | |
| Almost Full | 화면 3-1 | |
| Fill level | 화면 3-3 | |
| Shown only if system running or Inbound Trolley docked | 디스크립션 1 · 케이스 Case 2-1 | |
| No actions required | 디스크립션 1 · 3 · 케이스 Case 3-1 | |
| Shows required items by replenishment priority, visible only when system is running or Inbound Trolley is docked | 디스크립션 1-7 | |
| Shows required items by replenishment priority | 디스크립션 1-7 | |
| Visible only when the system is running or the Inbound Trolley is docked. | 디스크립션 1-7 | |
| Shows the quantity of consumables required for the Run. | 디스크립션 1-7 | |
| Shows waste bin/bottle requiring emptying, prioritized by Full and Almost Full status | 디스크립션 3-5 | |
| MB DWP · EB DWP · 300 μL Tip · PBS Tub · 1000 μL Tip · BB Tub · WB1 Tub · WB2 Tub · WB3 Tub · EB Tub · MB Tube | 화면 1-2 (품목 이름) | |
| High-throughput Extraction · PCR Setup · Consumable Storage · Flexible Extraction · Plate Sealing · Universal PCR · Sample Pre-treatment | 화면 1-2 · 3-2 (Module 이름) | |
| MB Storage · EB Storage · 300 μL Tip Storage · Trolley · Buffer Cartridge Storage · Waste Bin · Liquid Waste Bottle · DWP Waste Bin · Sealer Waste Bin · Tip Waste Bin (Upper) | 화면 1-2 · 3-2 (Unit 이름) | |
| {n} rxns ({m} DWPs) · {n} ea ({m} racks) · {n} rxns ({m} racks) · {n} ea ({m} rack) · {n} rxns ({m} set) · {n} rxns ({m} sets) | 화면 1-3 · 1-4 (n · m = 수량) | |
