---
cid: TI-IVT-04-T-P
pair_cid: LI-IVT-04-T-P
tl_relation: 동일
title: Reagent Item details Popup
path: Inventory > Reagents > Item details
type: Popup
version: 2.1.04
date: 2026-08-28
author: 서보경
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7336-427246
figma_region: 2.1 2차
---
# TI-IVT-04-T-P Reagent Item details Popup

> 기존 화면(작업방 Inventory 페이지, 2.1 2차 영역, Ver 2.1.04)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- 프레임 이름과 화면 정보 CID가 "TI-IVT-04-T"로 되어 있음 (화면은 Item details Popup)
- T/L 차이: 없음 (LI-IVT-04-T-P와 같음)
- 관련 정책: POL-INV-001, POL-INV-004, POL-EQP-009, POL-INV-007
- 호출하는 화면: 없음. Reagents Tab(TI-IVT-04-T)의 [Item details]에서 열림

## 기존 화면

### 화면 글자

- (뒤 화면) Summary | Overview | Consumables | Reagents | Waste Bin/Bottle | Usage History
- Item details
- GI-V IC | Remaining Qty 2,010rxns (22 tubes) | Expired
- Location | Barcode | Location in storage | Inbound Date | Expiration Date | Remaining Rxns | Used Counts
- Prep Consumable Storage (1) > Trolley | 260520280609EX294628G01EB144S | 8462-1981 / 3 / C02 | 100 rxns | 9/10
- (같은 형식 줄 반복: 21~100 rxns, 8/10~9/10)
- Close

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

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 프레임 이름과 화면 정보 CID "TI-IVT-04-T" | TI-IVT-04-T-P | `ia/ia-screens.csv` | 대기 |
| R02 | 디스크립션 | "유효기한", "유효기한이 지난" | Expiration Date, Expired | `glossary/terms.csv` Expiration Date, 시약 만료 상태 | 대기 |
| R03 | 디스크립션 | 2-1 Used Counts "흡입한 회수" | 흡입한 횟수 | 오타 | 대기 |
| R04 | 디스크립션 | 2-1 Remaining Rxns "남은 반응 수 rxns 표기"와 "표기 방식 : 반응 수T"가 함께 있음 ("T"의 뜻이 없음) | 단위 하나로 (rxns) | 디스크립션, COMM-4-b | 대기 (확인 필요) |
| R05 | 디스크립션 | 2-1 Location in storage "해당 소모품의 위치 값" (Reagent 화면) | 해당 Reagent의 위치 값 | Consumables Popup에서 복사 | 대기 |
| R06 | 디스크립션 | 2-1 "DX 서랍식 입고", "시약", "바코드", "튜브" | Dx 시스템 Storage의 Drawer, Reagent, Barcode, Tube | `glossary/terms.csv` | 대기 |
| R07 | 화면 글자 | "2,010rxns  (22 tubes)" | 2,010 rxns (22 tubes) | 띄어쓰기 | 대기 |
| R08 | 화면 글자 | 예시 줄에 Inbound Date, Expiration Date 값이 없음 | 날짜 예시를 넣음 | 화면 글자 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.04 | 2026-08-28 | (버전 메모 없음) | 서보경 | Figma 화면 정보 |
