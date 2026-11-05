---
cid: TI-IVT-02-T
pair_cid: LI-IVT-02-T
tl_relation: 동일
title: Inventory Overview
path: Inventory > Overview
type: Tab
version: 2.1.13
date: 2026-10-23
author: 서보경
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7336-428897
figma_region: 2.1 2차
---
# TI-IVT-02-T Inventory Overview

> 기존 화면(작업방 Inventory 페이지, 2.1 2차 영역, Ver 2.1.13)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: LI-IVT-02-T와 화면 글자·디스크립션이 같음 (IA "짝 화면 동일"은 비어 있음)
- 관련 정책: POL-INV-001, POL-INV-002, POL-EQP-009, POL-LOD-001
- 호출하는 화면: Alert_020 (데이터 로드 실패)
- 다른 프레임: [SB_Inventory_Overview_Detail Info](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7336-429125) (1 "케이스별 노출 기준"이 가리키는 예시 프레임, CID 없음)

- 취소선(Figma에서 제거된 항목): 1-3의 옛 "2-3 최대 적재 용량이 있을 경우" 표기 방식 전체(게이지 바와 잔여 재고 비율(%), "잔여 수량/ 총 적재 가능 수량(입고 단위 수량)" 형식)

## 기존 화면

### 화면 글자

- (GNB·LNB는 T-IOS 공통)
- Summary | Overview | Consumables | Reagent | Waste Bin/Bottle | Usage History
- Overview by Module | Refresh
- (Module 열) Sample Storage | Prep Consumable Storage | High-throughput Extraction | Flexible Extraction | PCR Setup | Plate Sealing, 각 열 Dropdown All
- Sample Storage: Samples (Inbound Trolley) 0 ea (0 racks) | Samples (Test In Progress) 48 ea (1 racks) | Samples (Outbound Trolley) 912 ea (19 racks)
- Prep Consumable Storage: 1000 μL Tip 288 ea (3 racks) | 300 μL Tip 196 ea (2 racks) | Wide Bore Tip | Empty Standard Tube 144 ea (3 racks) | Stool Swab 72 ea (3 racks) | LB Tub | LB Tub (Prep) | PBS Tub | Saline Tub 300 rxns (3 racks) 등
- High-throughput Extraction: 96-DWP 3 ea | MB DWP | WB1 DWP | WB2 DWP | LB DWP 288 rxns (3 DWPs) | Spin Tip 96 rxns (1 DWP) | GI-BP IC, GI-V IC, PB IC, RP-V IC, STI-12 IC 200 rxns (2 tubes)
- Flexible Extraction: EB DWP 288 rxns (3 DWPs) | 1000 μL Tip | BB Tub, EB Tub, WB1 Tub, WB2 Tub, WB3 Tub 384 rxns (4 sets) | Buffer Cartridge Cap 10 ea (2 sets)
- PCR Setup: MB Tube 96 rxns (1 tube) | 300 μL Tip (1), 300 μL Tip (2) 288 ea (3 racks) | Allplex™ GI-Bacteria(I) Assay ~ Anyplex™II STI-12 Detection 300 rxns (3 sets)
- Plate Sealing: PCR Plate 10 ea | MM Tube 14 ea (1 socket) | Sealing Film (1) 100 ea | Sealing Film (2) 120 ea

### 사용 컴포넌트

Item_Segment Tabs (6), Form/Dropdown Box (6), Description Number (6), Interface/Info_Circle_Outlined (1), Square (1), Frame (1), Component 4 (1)

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
- Prep Consumable Storage
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

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 표기 | Tab 이름 "Reagent" (다른 Tab 화면은 Reagents) | Reagents | IA, TI-IVT-01-T 화면 글자 | 대기 |
| R02 | 디스크립션 | 1-2 "데이트 업데이트", 1-3 "차감되지 않는며" | 데이터 업데이트, 차감되지 않으며 | 오타 | 대기 |
| R03 | 디스크립션 | 0 "사용여부가 '사용'인 모듈" | Enabled인 Module | POL-EQP-009 | 대기 |
| R04 | 디스크립션 | 1 "아래 Inventory Overview Detail Info 예시 참고하여 작업요청" (CID 없는 프레임을 가리킴) | 케이스 규칙을 디스크립션이나 정책으로 옮김 | `screens/inventory/_menu.md` | 대기 (확인 필요) |
| R05 | 표기 | 화면 "Samples (Test In Progress) 48 ea (1 racks)" | 1 rack | 단수·복수 | 대기 |
| R06 | 디스크립션 | 1-1 "투입 트롤리", "회수 트롤리", "검체" | Inbound Trolley, Outbound Trolley, Sample | `glossary/terms.csv` | 대기 |
| R07 | 문구 | 2 툴팁 "all modules . Select" | all modules. Select | 띄어쓰기 | 대기 |
| R08 | 화면 정보 | IA "짝 화면 동일"이 비어 있으나 LI-IVT-02-T와 화면·디스크립션이 같음 | IA 확인 | `ia/ia-screens.csv` | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.12 | | Sample Storage Module 추가. 일부 UX/UI 변경. 신규 모듈 추가에 따른 일부 UI 변경. 잔여표기량 정책 변경에 따른 UI 변경. 잔여량 표기 정책 변경 | 서보경 | Figma 버전 메모 |
| 2.1.13 | 2026-10-23 | 표기 및 정렬 기준 변경 반영 | 서보경 | Figma 버전 메모 |
