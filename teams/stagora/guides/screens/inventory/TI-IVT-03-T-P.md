---
cid: TI-IVT-03-T-P
pair_cid: LI-IVT-03-T-P
tl_relation: 동일
title: Consumables Item details popup
path: Inventory > Consumables > Item details
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7336-427034
figma_region: 2.1 2차
---
# TI-IVT-03-T-P Consumables Item details popup

> 기존 화면(작업방 Inventory 페이지, 2.1 2차 영역, Ver 2.1.04)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: 없음 (LI-IVT-03-T-P와 같음)
- 관련 정책: POL-INV-001, POL-INV-004, POL-EQP-009
- 호출하는 화면: 없음. Consumables Tab(TI-IVT-03-T)의 [Item details]에서 열림

## 기존 화면

### 화면 글자

- (뒤 화면) Summary | Overview | Consumables | Reagents | Waste Bin/Bottle | Usage History
- Item details
- 1000 μL Tip | Remaining Qty 2,021 (22 rack)
- Location | Barcode | Location in storage | Inbound Date | Remaining Qty
- Prep Consumable Storage (1) > Trolley | 260520280609EX294628G01EB144S | 8462-1981 / 3 / C02 | 12 ea (1 rack)
- (같은 형식 9줄 더: Prep Consumable Storage (1)~(3) > Trolley, 56~96 ea (1 rack))
- Close

### 사용 컴포넌트

Description Number (7), Item_Segment Tabs (6), Frame (1), Component 4 (1), Page number (1), Square (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 장비에 입고되어 있는 Consumable의 상세 정보를 확인할 수 있는 팝업이다.
- 진입 방법
- LNB의 ‘Inventory의 ‘Consumables Tab’ 내  [Item details]버튼을 통해 진입할 수 있다.
- 데이터 기준
- 장비에 입고되어 있는 소모품의 바코드 단위로 목록 생성
- Module[index] + Storage + 바코드
- Buffer 공간에 있는 것도 모두 표기

#### 1. 팝업 타이틀

- 사용자가 직전 화면에서 선택한 소모품 명 노출

#### 2. 소모품 상세 리스트

- 공통 UX 참고 :  COMM-5-m
- 정렬
- Default : Remaining Qty 낱개 수량 기준 오름차순
- Default 조건 동일 시, Inbound Date 기준 내림차순

#### 2-1. 리스트 표출 항목

- Location
- 해당 소모품이 적재되는 ‘Module[index] > Storage Unit’ 기준으로 표기
- Barcode
- Material Setup 메뉴에서 소모품 입고 시, 찍은 제품의 바코드 표기
- Location in storage
- 해당 소모품의 위치 값 표시
- 표기 방식
- ㄴTrolley 경우: Trolley ID / Tray Floor / Position
- ㄴDX 서랍식 입고 경우: 서랍 위치값 단일 표기
- Inbound Date
- Material Setup 메뉴에서 Storage에 소모품 입고한 일자 표기
- Remaining Qty(Module+Storage기준)
- 해당 소모품이 적재된 Location(Module+Storage)기준으로 장비에 남은 개수 표기
- 합산 기준
- ㄴStorage 영역 및 장비 내 Buffer 공간에 적재된 수량을 모두 포함
- 표기 방식
- ㄴ소모품 표기 방식에 따름 : 낱개 수량 (입고 단위 수량)

#### 3. 남은 수량 합계 정보 (Remaining Qty)

- 표기 방식 : 낱개 수량 (입고 단위 수량)
- 산출 방식
- 하위 리스트 내 Remaining Qty 수량을 합산하여 노출

#### 4. 페이지네이션

- 공통 UX 참고 :  COMM-5-i

#### 5. [Close] 버튼

- 클릭 시, 해당 팝업 닫힘, 기존 진입 화면 유지

#### 6. [X] 버튼

- 클릭 시, 팝업이 닫힌 후 기존 화면 노출

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 글자 | 합계 "2,021 (22 rack)" (단위 없음). Run 화면 프레임은 "2,021 ea (22 rack)" | 2,021 ea (22 racks) | 3 표기 방식, LI-IVT-03-T-P Run 프레임 | 대기 |
| R02 | 화면 글자 | 예시 줄에 Inbound Date 값이 없음 (열은 5개, 값은 4개) | 날짜 예시를 넣음 | 화면 글자 | 대기 |
| R03 | 디스크립션 | 2-1 "DX 서랍식 입고" | Dx 시스템 Storage의 Drawer | `glossary/terms.csv` Drawer, Dx 시스템 | 대기 |
| R04 | 디스크립션 | "소모품", "바코드" 한국어 혼용 | Consumable, Barcode | `glossary/terms.csv` | 대기 |
| R05 | 디스크립션 | 5 [Close]와 6 [X]의 동작이 같은 말을 다르게 씀 | 하나의 문장으로 통일 | 디스크립션 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.04 | 2026-08-28 | (버전 메모 없음) | 서보경 | Figma 화면 정보 |
