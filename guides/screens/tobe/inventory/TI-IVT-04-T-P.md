---
cid: TI-IVT-04-T-P
pair_cid: LI-IVT-04-T-P
tl_relation: 동일   # 동일 | 권한 차이 | 기능 추가 | 단독
title: Reagent Item details Popup
path: Inventory > Reagents Tab > Item details
type: Popup        # Page | Popup | Tab
version: 2.1.18
date: 2026.11.19
author: 이상헌
client_mode: []
user_type: [Service, Admin, User]
policies: [POL-INV-001, POL-INV-004, POL-INV-007, POL-EQP-009]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3903-7492
---
# TI-IVT-04-T-P Reagent Item details Popup

- T/L 차이: Popup · 디스크립션 같음
- 호출하는 화면: 없음 (5 [Close] · 6 [X] 닫기)
- 호출되는 곳: [TI-IVT-04-T] Reagents Tab 3-7 [Item details]
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Reagent Item details Popup**
- 정의
  - <span style="color:red">CURECA</span> 장비에 입고되어 있는 Reagent의 상세 정보를 확인할 수 있는 Popup
  - 장비에 입고되어 있는 <span style="color:red">Reagent</span>의 <span style="color:red">Barcode</span> 단위로 목록 생성 : <span style="color:red">Module (Index)</span> + Storage + <span style="color:red">Barcode</span>
  - Buffer 공간에 있는 것도 모두 노출
- 동작
  - Inventory > Reagents Tab 내 [Item details] 버튼을 통해 진입
- User Type : Service, Admin, User
- 정책 참고 : POL-INV-001, POL-INV-004

**1  Popup 타이틀**
- 사용자가 직전 화면에서 선택한 <span style="color:red">Reagent</span> 이름 노출

**2  <span style="color:red">Reagent</span> 상세 리스트**
- 정렬
  - Default : Expiration Date 기준 오름차순
  - 2순위 (동일 시) : Remaining Rxns 기준 오름차순
  - 3순위 (동일 시) : Used Counts 기준 오름차순
- 공통 UX 참고 : COMM-5-g
- 정책 참고 : POL-INV-004

**2-1  리스트 노출 항목**
- 컬럼 항목
  - Location : 해당 <span style="color:red">Reagent</span>가 적재되는 '<span style="color:red">Module (Index)</span> > Storage Unit' 기준으로 노출
  - <span style="color:red">Barcode</span> : Material Setup 메뉴에서 <span style="color:red">Reagent</span> 입고 시 찍은 제품의 <span style="color:red">Barcode</span> 노출
    - 단, 하위 <span style="color:red">Reagent</span>는 별도의 <span style="color:red">Barcode</span> 체계로 노출
    - Standard Tube : Carrier Setup 시 찍은 1개의 <span style="color:red">Tube</span> 대표 <span style="color:red">Barcode</span> 기준으로 노출
    - PCR <span style="color:red">Reagent</span> : IC는 제품 개별 <span style="color:red">Barcode</span>, 그 외 <span style="color:red">Reagent</span>는 박스 rxns <span style="color:red">Barcode</span>
    - UC Kit : <span style="color:red">Tub</span> 대표 <span style="color:red">Barcode</span>(EB <span style="color:red">Tub</span> 기준 오른편에 부착)
    - 공통 UX 참고(COMM-4-b(1/5))
  - Location in storage : 해당 <span style="color:red">Reagent</span>의 위치 값 노출
    - Trolley 경우 : Trolley ID / Tray Floor / Position
    - <span style="color:red">Dx 시스템 Storage의 Drawer</span> 경우 : <span style="color:red">Drawer</span> 위치값 단일 노출
  - Inbound Date : Material Setup 메뉴에서 Storage에 <span style="color:red">Reagent</span>를 입고한 일자 노출
  - Expiration Date : 해당 <span style="color:red">Reagent</span> 입고 시 DB에 저장된 <span style="color:red">Expiration Date</span> 정보 노출
  - Remaining Rxns(Module+Storage 기준) : 해당 <span style="color:red">Reagent</span> <span style="color:red">Barcode</span> 기준 남은 반응 수 rxns 노출
    - 합산 기준 : Storage 영역 및 장비 내 Buffer 공간에 적재된 수량을 모두 포함
    - 표기 방식 : <span style="color:red">{반응 수} rxns</span>
  - Used Counts : 검사 시 <span style="color:red">Reagent</span>를 흡입한 <span style="color:red">횟수</span>
    - 표기 방식 : 흡입 횟수/최대 흡입 가능 횟수
    - 단, <span style="color:red">Reagent</span>별 최대 흡입 가능 횟수가 상이하여 공통 UX 참고(COMM-4-b(1/5))
- 정책 참고 : POL-INV-004, POL-INV-007

**3  남은 수량 및 <span style="color:red">Expired</span> <span style="color:red">Reagent</span> 합계 정보 (Remaining Qty, Expired)**
- 노출 항목
  - Remaining Qty : 하위 리스트 내 Remaining Qty 수량을 합산하여 노출
    - 표기 방식 : <span style="color:red">{반응 수} rxns</span> (입고 단위 수량)
  - Expired : 하위 리스트 내 <span style="color:red">Expiration Date</span>가 지난 <span style="color:red">Reagent</span> 개수 노출
    - 표기 방식 : 개수
- 공통 UX 참고 : COMM-4-b(5/5)
- 정책 참고 : POL-INV-004

**4  페이지네이션**
- Pagination 유형 : Type 1 Number
- 공통 UX 참고 : COMM-5-l

**5  [Close] 버튼**
- 동작
  - 클릭 시 해당 Popup 닫힘, 기존 진입 화면 유지

**6  [X] 버튼**
- 동작
  - 클릭 시 Popup이 닫힌 후 기존 화면 노출

## 케이스

없음 (`Inventory_asis` 페이지에 TI-IVT-04-T-P 케이스 프레임 없음)

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1 | Popup 타이틀 | GI-V IC | 기존 원본 |
| 3 | 합계 | Remaining Qty 2,010 rxns (22 tubes) / Expired 2 | 반영 대기 TI-IVT-04-T-P-R07, 기존 원본 |
| 2-1 | 리스트 10행 | 기존 원본 10행 그대로 | `Inventory_asis` TI-IVT-04-T-P 리스트 |
| 4 | 페이지네이션 | 1 · 2 · 3 · 4 | 기존 원본 |
| - | 패널 CID | TI-IVT-04-T-P | 반영 대기 TI-IVT-04-T-P-R01, IA |
| - | 뒤 화면 | Dim | `flow/3-design.md` 공통 3-9 |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Item details | 화면 1 위 Popup 제목 | |
| GI-V IC | 화면 1 (품목 이름) | |
| Remaining Qty · Expired | 화면 3 | |
| Location · Barcode · Location in storage · Inbound Date · Expiration Date · Remaining Rxns · Used Counts | 화면 2-1 컬럼 | |
| Consumable Storage | 화면 2-1 (Module 이름) | |
| Trolley | 화면 2-1 (Unit 이름) | |
| {n} rxns · {n} rxns ({m} tubes) · {n}/{m} | 화면 2-1 · 3 (n · m = 수량) | |
| Close | 화면 5 | |
