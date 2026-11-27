---
cid: TI-IVT-06-T
pair_cid: LI-IVT-06-T
tl_relation: 동일   # 동일 | 권한 차이 | 기능 추가 | 단독
title: Inventory Usage History
path: Inventory > Usage History Tab
type: Tab          # Page | Popup | Tab
version: 2.1.18
date: 2026.11.19
author: 이상헌
client_mode: []
user_type: [Service, Admin, User]
policies: [POL-INV-001, POL-INV-006, POL-COM-006, POL-EQP-009]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3903-7494
---
# TI-IVT-06-T Inventory Usage History

- T/L 차이: 화면 같음(LNB 메뉴만 다름)
- 원본: `Inventory_asis` 페이지 같은 이름 · 같은 Ver 프레임 둘 가운데 아래 프레임(3543:361388, 1단계 요청자 답 2026-11-27)
- 호출하는 화면: 없음 (3 [Export]는 OS 파일 탐색기로 파일 저장)
- 호출되는 곳: LNB > Inventory > Usage History Tab, [TI-IVT-01-T] 등 Inventory Tab 구성
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Inventory Usage History 화면**
- 정의
  - <span style="color:red">CURECA</span> 장비의 Storage에 <span style="color:red">사용되는 Consumable</span> 또는 <span style="color:red">Reagent</span>의 사용 이력을 확인하는 화면
  - <span style="color:red">Enabled인 Module</span> 대상으로만 노출
  - 장비가 사용 후 폐기하는 시점 기준으로 이력 관리
  - Unit + Barcode + Usage + Date/Time 기준 Row 생성
- 동작
  - LNB의 Inventory > <span style="color:red">Usage History Tab</span>을 통해 진입
- User Type : Service, Admin, User
- 정책 참고 : POL-INV-001, POL-INV-006, POL-EQP-009

**1  검색 영역**
- 정의 : 검색 조건에 따라 리스트 내 데이터를 필터링하여 조회하는 영역
- Item Type(Dropdown)
  - Default : All
  - 드롭다운 리스트 항목 : All, Consumable, Reagent
- Name(Text Input) : 입력값을 기준으로 부분 일치(Like) 검색 수행
- Barcode(Text Input) : 입력값을 기준으로 부분 일치(Like) 검색 수행
- Module-Unit 조합형(Combine Dropdown, Index형)
  - Module name 선택 후 해당 Module의 Unit list 중에 선택할 수 있는 방식
  - Module : Module Name 기준으로 선택(오름차순)
  - Unit : 선택된 Module에 속한 Storage Unit 리스트를 호출하여 선택(오름차순)
- 기간 검색(Period Dropdown)
  - Default : 시작일-7일 전 ~ 종료일-Today (오늘 기준 최근 7일 범위로 자동 설정)
  - 오늘 기준 미래일자는 선택 불가
  - 기간 선택 정책 : 최대 1년
- 공통 UX 참고 : COMM-5-p, COMM-5-h(2/2)
- 정책 참고 : POL-INV-006

**2  목록**
- 정렬
  - Default : Date/Time 기준 최신순(내림차순)
- 노출 조건
  - <span style="color:red">조회 기간(기본 오늘 기준 7일) 내의 이력만 목록에 노출</span>
- 컬럼 항목
  - Item Type : Consumable 또는 Reagent로 노출
  - Name : <span style="color:red">Consumable</span> 이름 또는 <span style="color:red">Reagent</span> 이름 노출
  - Barcode : 항목의 Barcode 노출
  - Usage : 폐기 시점의 사용 개수 노출
  - Module : 해당 <span style="color:red">Consumable</span>을 저장하는 Module 이름 노출
  - Unit : 해당 <span style="color:red">Consumable</span>을 저장했던 Storage Unit 이름 노출
  - Date/Time : 폐기 시점 노출 (시스템 기준)
- 공통 UX 참고 : COMM-5-g
- 정책 참고 : POL-INV-006

**3  [Export] 버튼**
- 동작
  - <span style="color:red">클릭 시 OS 파일 탐색기가 호출되어 사용자가 저장 경로 및 파일명을 지정하여 저장</span>
  - 대상 범위 : 리스트에 노출된 데이터
- 포맷 (Format) : <span style="color:red">.csv</span>
- 정책 참고 : POL-COM-006, POL-INV-006

**4  <span style="color:red">노출 개수(Dropdown)</span>**
- <span style="color:red">Default : 10 items</span>
- <span style="color:red">드롭다운 리스트 항목 : 10 items, 30 items, 50 items, 100 items</span>
- <span style="color:red">공통 UX 참고 : COMM-5-g</span>

**5  <span style="color:red">[Reset] · [Search] 버튼</span>**
- <span style="color:red">[Reset] : 검색 조건을 Default로 초기화</span>
- <span style="color:red">[Search] : 입력한 검색 조건으로 목록 조회</span>
- <span style="color:red">공통 UX 참고 : COMM-5-p</span>

**6  <span style="color:red">Items</span>**
- <span style="color:red">현재 리스트에 로드된 데이터 개수 노출</span>
- <span style="color:red">공통 UX 참고 : COMM-5-g</span>

**7  <span style="color:red">페이지네이션</span>**
- <span style="color:red">Pagination 유형 : Type 1 Number</span>
- <span style="color:red">공통 UX 참고 : COMM-5-l</span>

## 케이스

없음 (`Inventory_asis` 페이지에 TI-IVT-06-T 케이스 프레임 없음)

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | Tab | Summary / Overview / Consumables / Reagents / Waste Bin/Bottle / Usage History (선택) | POL-INV-001 정의 |
| 1 | 검색 영역 | Item Type All / Name / Barcode / Module-Unit Select a module · Select a module first / 2026-03-17 ~ 2026-03-21 | 기존 원본 (아래 프레임), POL-INV-006 |
| 6 · 4 · 3 | Items · 노출 개수 · Export | Items 486 / 10 items / Export | 기존 원본, Common UX COMM-5-g |
| 2 | 목록 10행 | 1 Reagent · 5X RP2 MOM, Real-time One-step Enzyme, 5X Real-time One-step Buffer · PR01ST0112314124124 · 100 · Plate Sealing (1) · Cold Storage · 2026-03-21 11:20:11 / 2 Reagent · 5X GI-B(I) MOM, EM2, RNase-free Water · PR01ST0123123123123 · 100 · Plate Sealing (1) · Cold Storage · 2026-03-21 09:10:11 / 3 Reagent · PBS Standard Tube · PR02PBS012312312312 · 48 · Consumable Storage (1) · Trolley · 2026-03-21 15:57:11 / 4 Consumable · 1000 μL Tip · 2359051231231241233 · 96 · Consumable Storage (1) · Trolley · 2026-03-20 15:57:11 / 5 Reagent · 5X GI-B(I) MOM, EM2, RNase-free Water · 2355411231241231233 · 100 · Plate Sealing (1) · Cold Storage · 2026-03-20 15:57:11 / 6 Consumable · Empty Standard Tube · PR01ST0112312412323 · 48 · Consumable Storage (1) · Trolley · 2026-03-20 15:57:11 / 7 Consumable · PCR Plate · PR01ST0112312412323 · 1 · PCR Setup (1) · PCR Plate Storage · 2026-03-20 15:57:11 / 8 Consumable · Wide Bore Tip · 235541125335353434 · 96 · Consumable Storage (1) · Trolley · 2026-03-20 15:57:11 / 9 Consumable · Wide Bore Tip · 2355411231412324423 · 96 · Consumable Storage (2) · Trolley · 2026-03-20 15:57:11 / 10 Reagent · 5X RP2 MOM, Real-time One-step Enzyme, 5X Real-time One-step Buffer · PR01ST0112341234511 · 100 · Plate Sealing (1) · Cold Storage · 2026-03-20 15:57:11 | 기존 원본 10행, 반영 대기 TI-IVT-06-T-R01 · R03 · R07, `module-units.csv` |
| 7 | 페이지네이션 | 1 ~ 10 | 기존 원본 |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Inventory | 화면 제목 | |
| Summary · Overview · Consumables · Reagents · Waste Bin/Bottle · Usage History | 화면 Tab | |
| Item Type · Name · Barcode · Module-Unit | 화면 1 | |
| All · Consumable · Reagent | 화면 1 · 2 · 디스크립션 1 | |
| Select a module · Select a module first | 화면 1 | |
| Reset · Search | 화면 5 | |
| Items | 화면 6 | |
| {n} items | 화면 4 (n = 10 · 30 · 50 · 100) | |
| Export | 화면 3 | |
| Usage · Module · Unit · Date/Time | 화면 2 컬럼 | |
| 5X RP2 MOM, Real-time One-step Enzyme, 5X Real-time One-step Buffer · 5X GI-B(I) MOM, EM2, RNase-free Water · PBS Standard Tube · 1000 μL Tip · Empty Standard Tube · PCR Plate · Wide Bore Tip | 화면 2 (품목 이름) | |
| Plate Sealing · Consumable Storage · PCR Setup | 화면 2 (Module 이름) | |
| Cold Storage · Trolley · PCR Plate Storage | 화면 2 (Unit 이름) | |
