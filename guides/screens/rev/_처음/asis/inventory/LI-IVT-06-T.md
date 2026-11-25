---
cid: LI-IVT-06-T
pair_cid: TI-IVT-06-T
tl_relation: 동일
title: Inventory Usage History
path: Inventory > Usage History Tab
type: Tab
version: 2.1.18
date: 2026.11.19
author: 이상헌
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-361064
---
# LI-IVT-06-T Inventory Usage History

> 기존 화면(작업방 `Inventory_asis` 페이지, Ver 2.1.18)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: 화면 같음(LNB 메뉴만 다름). 디스크립션은 0 데이터 기준 · 2 Date/Time · 3 [Export]가 다름 — T는 "폐기 또는 반환하는 시점" · `Unit + Barcode + Usage+Date/Time` Row, Date/Time에 "반환인 경우, 내부 장치에서 Storage로 이동되는 시점 기준", [Export]는 한 줄(로컬 PC에 .CVS 저장)
- 호출하는 화면: 경로 저장 · USB 저장 선택 팝업 (3 [Export], COMM-5-j(4/4))
- 호출되는 곳: LNB > Inventory > Usage Tab (0 진입 방법), [LI-IVT-01-T] 등 Inventory Tab 구성

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) LIOS | Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Information | Quick Start | Run | Keira Knightley | Shut Down
- Inventory
- Tab: Summary | Overview | Consumables | Reagents | Waste Bin/Bottle | Usage History
- 검색: Item Type [All Item Types] | Name | Barcode | Module-Unit [Select a module] [Select a module first] | 2026-03-17 ~ 2026-03-21 | Reset | Search
- Items 486 | Export
- Item Type | Name | Barcode | Usage | Module | Unit | Date/Time
  - Reagents | 5X RP2 MOM, Real-time One-step Enzyme, 5X Real-time One-step Buffer | PR01ST0112314124124 | 100 | Plate Sealing(1) | Plate Sealing | 2026-03-21 11:20:11
  - Reagents | 5X GI-B(I) MOM, EM2, RNase-free Water | PR01ST0123123123123 | 100 | Plate Sealing(1) | Plate Sealing | 2026-03-21 09:10:11
  - Reagents | PBS Standard Tube | PR02PBS012312312312 | 48 | Consumable Storage (1) | Trolley | 2026-03-21 15:57:11
  - Consumable | 1000 μL Tip | 2359051231231241233 | 96 | Consumable Storage (1) | Trolley | 2026-03-20 15:57:11
  - Reagents | 5X GI-B(I) MOM, EM2, RNase-free Water | 2355411231241231233 | 100 | Plate Sealing(1) | Trolley | 2026-03-20 15:57:11
  - Consumable | Empty Standard Tube | PR01ST0112312412323 | 48 | Consumable Storage (1) | Plate Sealing | 2026-03-20 15:57:11
  - Consumable | PCR Plate | PR01ST0112312412323 | 1 | PCR Setup(1) | PCR Setup | 2026-03-20 15:57:11
  - Consumable | Wide Bore Tip | 235541125335353434 | 96 | Consumable Storage (1) | Trolley | 2026-03-20 15:57:11
  - Consumable | Wide Bore Tip | 2355411231412324423 | 96 | Consumable Storage (2) | Trolley | 2026-03-20 15:57:11
  - Reagents | 5X RP2 MOM, Real-time One-step Enzyme, 5X Real-time One-step Buffer | PR01ST0112341234511 | 100 | Plate Sealing(1) | Plate Sealing | 2026-03-20 15:57:11
- 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

### 사용 컴포넌트

Table (25), Table/Filled Table  Cell (20), Frame 43 (10), Frame 2095587599 (10), Frame 50 (7), ⛔️ Item_Segment Tabs (6), Frame 2095587597 (3), Form/Dropdown Box (3), Square (3), Description Number (3), Title (2), Form/Input Text Box (2), Page number (1), Component 4 (1), Frame (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 장비의 Storage에 사용되느 소모품 또는 시약의 사용 이력을 확인하는 화면이다.
- 진입 방법
- LNB의 ‘Inventory의 ‘Usage Tab’을 통해 진입할 수 있다.
- 데이터 기준
- 사용여부가 ‘사용’인 모듈 대상으로만 노출된다.
- 장비가 사용 후 폐기하는 시점기준으로 이력 관리
- Barcode + Usage+Date/Time 기준 Row 생성

#### 1. 검색 영역

- 공통 검색 컴포넌트: ‘COMM-5-s, Type3’ 참고
- Item Type
- Default: All / 데이터: All, Consumable, Reagent
- Name: 입력값을 기준으로 부분 일치(Like) 검색 수행
- Barcode: 입력값을 기준으로 부분 일치(Like) 검색 수행
- Module-Unit 조합형(index형)
- Module name 선택 후 해당 Module의 Unit list 중에 선택할 수 있는 방식
- Module: Module Name 기준으로 선택(오름차순)
- Dropdown 적용 방식: COMM-5-f(1/2)의 type1
- Unit: 선택된 Module에 속한 Storage Unit 리스트를 호출하여 선택(오름차순)
- 기간 검색
- 오늘 기준 최근 7일 범위로 자동 설정됨
- Default: 시작일-7일 전 ~ 종료일-Today
- 오늘 기준 미래일자는 선택 불가
- 기간 선택 정책: 최대 1년

#### 2. 목록

- 정렬기준: Date/Time 기준 최신순(내림차순)
- 목록 노출 기준
- 오늘 기준 7일간의 내용만 목록에 노출
- Item Type: Consumable 또는 Reagent로 표시됨
- Name: 소모품명 또는 시약명 표시됨
- Barcode: 아이템의 Barcode를 표시
- Usage: Barcode 단위로 표시됨
- Module: 해당 소모품을 저장하는 모듈명을 표시
- Unit: 해당 소모품을 저장했던 Storage Unit명을 표시
- Date/Time: 폐기 시점 표시됨 (시스템 기준)
- Storage에서 내부 장치로 이동되는 시점 기준

#### 3. [Export] 버튼

- L-IOS 경우 클릭 시, 경로 저장 또는 USB 저장 선택하는 팝업 제공
- 자세한 내역은 Common UX-‘COMM-5-j(4/4)’ 참고
- T-IOS 경우 클릭 시, 윈도우 탐색기가 호출되며, 원하는 경로를 지정할 수 있음
- 대상 범위: 목록에 노출된 전체 리스트
- 저장 항목: 목록에 제공되는 모든 내용
- 형식: .CVS

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

없음 (`Inventory_asis` 페이지에 LI-IVT-06-T 케이스 프레임 없음)
