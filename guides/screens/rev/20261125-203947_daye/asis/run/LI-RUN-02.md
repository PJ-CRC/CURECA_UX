---
cid: LI-RUN-02
pair_cid:
tl_relation: 단독
title: Run Preparation
path: LNB > Run
type: Page
version: 2.1.13
date: 2026.10.23
author: 정다예
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-76660
---
# LI-RUN-02 Run Preparation

> 기존 화면(작업방 `Run_asis` 페이지, Ver 2.1.13)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS 단독 화면 (IA에 T 짝 없음). Run Preparation Step 2 (Check consumables, Check test protocol 단계가 있으면 Step 3)
- 호출하는 화면: [LI-RUN-01] (7 [Previous]), [LI-RUN-03] (8 [Next]), LI-RUN-03-P Item details (3-7), Confirm_001 (0 · 6 [Cancel]), Alert_001 (0)
- 호출되는 곳: [LI-RUN-01] 7 [Next]
- 기획 프레임 높이 2617. 아래 「화면 글자」는 카드 영역별로 적음

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) LIOS | Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Information | Quick Start | Run | Keira Knightley | Shut Down
- Run Preparation
- STEP 1 | Check samples | STEP 2 | Check consumables | STEP 3 | Check reagents | STEP 4 | Check waste bin/bottle
- Status | Insufficient 4 | Low 3 | Sufficient 2 | Refresh | Previous
- 좌측 카드
  - Plates | Remaining Qty | Required Qty | Status: 96-DWP 1 ea / 2 ea, PCR Plate 0 / 3 ea
  - Tips | Remaining Qty | Required Qty | Status: 1000 μL Tip 0 / 480 ea (5 racks), 300 μL Tip 96 ea (1 rack) / 384 ea (4 racks), Wide Bore Tip 192 ea (2 racks) / 96 ea (1 rack)
  - Tubes | Remaining Qty | Required Qty | Status: Empty Standard Tube 48 ea (1 rack) / 144 ea (3 racks), MM Tube 14 ea (1 socket) / 28 ea (2 sockets)
  - Sealing Film | Remaining Qty | Required Qty | Status: 200 ea / -
  - Stool Swab | Remaining Qty | Required Qty | Status: 72 ea (3 racks) / -
  - 같은 자리에 겹친 카드(Tubes 카드 자리): Tub | Sample Preparation | Remaining Qty | Required Qty | Status — PBS Tub #Trolley - / 200T (2 racks), Saline Tub #Trolley 100T (1 rack) / 100T (1 rack), LB Tub (Prep) #Trolley - / 200T (2 racks)
- 우측 카드 (Tips 선택 상태)
  - 1000 μL Tip | Item details — Location | Capacity | Remaining Qty | Required Qty: Consumable Storage (1) > Trolley 6 DWPs 0 96 ea (1 rack), Consumable Storage (2) > Trolley 6 DWPs 0 96 ea (1 rack), Consumable Storage (3) > Trolley 0 96 ea (1 rack) / PCR Setup (1) > 1000 μL Tip Storage 11 rack 0 96 ea (1 rack), PCR Setup (2) > 1000 μL Tip Storage 11 rack 0 96 ea (1 rack)
  - 300 μL Tip | Item details — Location | Capacity | Remaining Qty | Required Qty: Consumable Storage (1) > Trolley 6 DWPs 0 96 ea (1 rack), Consumable Storage (3) > Trolley 6 DWPs 0 96 ea (1 rack) / PCR Setup (1) > 300 μL Tip Storage(1) 11 rack 0 96 ea (1 rack), PCR Setup (1) > 300 μL Tip Storage(2) 11 rack 96 ea (1 rack) 96 ea (1 rack)
  - Wide Bore Tip | Item details — Location | Capacity | Remaining Qty | Required Qty: Consumable Storage (1) > Trolley 5 sets 96 ea (1 rack) 96 ea (1 rack), Consumable Storage (2) > Trolley 5 sets 96 ea (1 rack) -
- Cancel | Previous | Next

### 사용 컴포넌트

Description Number (16), Status (9), Description (7), Square (4), Chip (3), Interface/Info_Circle_Outlined (1), Icon/Popup Status (1), Component 4 (1), Frame (1)

### 디스크립션 (원문)

#### 0. Run Preparation(구동 준비)화면

- 정의
- [Step 2/4] Run 실행을 위한 소모품 정보 확인 화면
- 단, Check test protocol 단계가 노출될 경우 Step 3로 노출
- 컨펌 및 알럿
- 페이지 이탈 시(LNB 메뉴 선택 등)팝업 노출 : Confirm_001
- Sample 정보 로드 불가 시 팝업 노출 : Alert_001

#### 1. Status 필터 영역(Chip)

- Status
- Insufficient, Low, sufficient
- 상태값 옆 숫자는 좌측 영역의 Status별 건수가 표기됨
- 동작
- Default : 모든 탭이 미선택 된 상태, 전체 데이터 항목 노출
- Chip 선택 시 : Status 값에 해당하는 데이터만 필터링하여 표기
- 선택 상태의 Chip 재선택 : 선택 해제, 필터링 해제되어 전체 데이터 표기
- 다중 선택 :Chip은 여러 개 동시에 선택 가능하며 선택된 상태값에 해당되는 모든 데이터가 필터링되어 보여짐
- 적용 범위
- 좌측 / 우측 영역 모두 선택된 Status값에 해당 하는 항목만 필터링하여 노출

#### 2. 카드 리스트(좌측 영역)

- 데이터 표기
- 소모품명을 기준으로 성질이 유사한 항목들을 그룹화하여 카드 형태로 표기
- 단, 그룹화 불가 항목은 단일 카드로 별도 표기
- ㄴStool Swab, Sealing Film
- 동작
- Default : 첫 번째 카드가 선택된 상태로 노출
- 클릭 영역 : 카드 전체 단위로 클릭 가능
- 클릭 시 우측 영역(3)에 해당 카드의 상세 정보 표시
- 정렬(항목 또는 카드 전체 해당)
- 공통 UX 참고 : COMM-4-b
- 노출 조건(항목 또는 카드 전체 해당)
- Remaining Qty가 1개 이상 존재하거나 Required Qty가 1개 이상 필요한 경우 노출
- Remaining Qty 및 Required Qty가 모두 0일 경우 해당 항목(소모품)은 숨김 처리
- 카드 영역 내 모든 항목이 미노출 조건일 시 카드가 전체 미노출

#### 2-1. 카드 제목

- 표기 방식
- 카드 내에 묶인 항목들의 성질을 대표하는 항목명으로 표기

#### 2-2. Remaining Qty(좌측 영역)

- 정의
- 해당 소모품이 적재된 모든 Storage의 개수를 합산하여 표시
- 산출 방식
- 도킹된 Trolley + Storage 영역 + 장비 내 Buffer 공간에 적재된 수량을 모두 포함
- 단,장비 내 거치 공간에 있는 소모품은 실시간으로 차감되지 않는며, 적재된 순간의 수량을 그대로 유지함
- 소모품이 모두 소진되거나 다시 Storage로 반환되는 기준으로 재고가 업데이트 됨
- 표기 방식
- 소모품/시약 표기 방식에 따름 : 낱개 수량(입고 단위 수량)
- 100개당 1 Rack일 경우, 입고 단위 수량을 올림 처리
- (예 : 101 → 2 Rack)

#### 2-3. Required Qty(좌측 영역)

- 정의
- 현재 준비 중인 Run + 진행 중인 Run 기준으로 해당 소모품의 재고를 제외한 부족 수량을 표시
- 산출 방식
- 총 필요 수량(진행 예정 RUN + 진행 중 RUN)에서
- 현재 재고(도킹된 Trolley + Storage 영역 + 장비 내 Buffer 공간)를 제외한 부족 수량을 계산
- 예 : 남은 재고 10개, 필요 수량 14개 → Required Qty = 4
- 표기 방식
- 소모품 표기 방식에 따름 : 낱개 수량(입고 단위 수량)
- 100개당 1 Rack일 경우, 입고 단위 수량을 올림 처리
- (예 : 101 → 2 Rack)

#### 2-4. Status

- 정의
- 현재 준비 중인 Run + 진행 중인 Run 기준으로 필요 수량 대비 재고 상태를 표시
- 각 상태별 정의된 아이콘 형식으로 표기
- 상태 정의
- 공통 UX 참고 : COMM-4-a
- 표기 방식
- 동일 소모품을 기준으로 우측 모듈별 소모품 상태 값이 다를 경우
- 왼쪽 상태 값은 우선 순위 (Insufficient> Low>Sufficient)로 표기
- 예 : 설계서의 ‘300 μL Tip’ → 우측 상세에는 Insufficient 1개, Low 1개 표기되어 있지만, 좌측 카드에는 Insufficient 값으로 표기

#### 3. 카드 리스트(우측 영역)

- 정의
- 좌측에서 선택된 소모품 카드의 정보를 모듈 기준으로 표기
- 소모품별 Module[index] + Storage 기준으로 Location Row 생성
- 정렬
- 공통 UX 참고 : COMM-4-b
- 하위 항목 : Module[index] 기준 오름차순
- 노출 조건(항목 또는 카드 전체 해당)
- Remaining Qty가 1개 이상 존재하거나 Required Qty가 1개 이상 필요한 경우 노출
- Remaining Qty 및 Required Qty가 모두 0일 경우 해당 항목(소모품)은 숨김 처리
- 카드 영역 내 모든 항목이 미노출 조건일 시 카드가 전체 미노출

#### 3-1. 소모품 개별 카드

- 정의
- 좌측에서 선택한 카드의 항목에 해당되는 ‘소모품명’ 기준 구성
- 타이틀
- 좌측 항목의 소모품 명으로 노출

#### 3-2. Location

- 해당 소모품이 적재되는 ‘Module[index] > Storage Unit’기준으로 표기

#### 3-3. 구분선

- 정의
- 동일 소모품이 다른 유형의 Storage에 적재되는 경우 표기
- 표기 방식
- 동일 소모품이 서로 다른 유형의 Storage Unit에 적재될 경우,
- 각 위치 정보를 구분선(Line)으로 나누어 표기
- 구분선은 시각적으로 항목 간 경계를 명확히 하여 사용자가 Storage별 적재 현황을 쉽게 인지할 수 있도록 함

#### 3-4. Capacity(우측 영역_Module+Storage기준)

- 정의
- 최대 적재량을 관리할 수 있는 Storage에 한해 Capacity값 표시
- 최대 표시값
- 장비에서 설정된 값을 표기
- 기존에는 값이 fix되어 있었으나 26.08.20기준, 제작 시 장비 설계 방식에 따라 적재 용량이 다르게 적용되는 케이스가 발생하여 장비 셋팅 시, 설정된 값을 표기하는 방식으로 적용
- 예외 처리
- 여러 품목을 혼합 적재하여 최대 적재량 관리가 불가능한 경우 해당 영역은 미제공(예시: Cold Storage)

#### 3-5. Remaining Qty(우측 영역_도킹된 Trolley+Module+Storage기준)

- 정의
- 해당 소모품이 적재된 Location(Trolley+Module+Storage 기준으로 장비에 남은 개수 표기
- 산출 방식
- 도킹된 Trolley + Storage 영역 + 장비 내 Buffer 공간에 적재된 수량을 모두 포함
- 단,장비 내 거치 공간에 있는 소모품은 실시간으로 차감되지 않는며, 적재된 순간의 수량을 그대로 유지함
- 소모품이 모두 소진되거나 다시 Storage로 반환되는 기준으로 재고가 업데이트 됨
- 표기 방식
- 소모품 표기 방식에 따름 : 낱개 수량(입고 단위 수량)
- 100개당 1 Rack일 경우, 입고 단위 수량을 올림 처리
- (예 : 101 → 2 Rack)

#### 3-6. Required Qty(우측 영역_도킹된 Trolley+Module+Storage기준)

- 정의
- 현재 준비 중인 Run + 진행 중인 Run 기준으로 해당 소모품의 재고를 제외한 부족 수량을 표시
- 산출 방식
- 총 필요 수량(진행 예정 RUN + 진행 중 RUN)에서
- 현재 재고(도킹된 Trolley + Storage 영역 + 장비 내 Buffer 공간)를 제외한 부족 수량을 계산
- 예 : 남은 재고 10개, 필요 수량 14개 → Required Qty = 4
- 표기 방식
- 소모품 표기 방식에 따름 : 낱개 수량(입고 단위 수량)
- 100개당 1 Rack일 경우, 입고 단위 수량을 올림 처리
- (예 : 101 → 2 Rack)

#### 3-7. [Item details] 버튼

- 해당 소모품의 개별 상세 정보를 확인할 수 있는 팝업 노출
- 클릭 시 팝업 노출 : LI-RUN-03-P

#### 4. [Refresh] 버튼

- 버튼 클릭 시 전체 데이터가 최신 상태로 갱신되어 표시
- 현재 검색 필터 유지

#### 5. Capacity Tooltip

- 공통 UX 참고 : COMM-5-o
- 표출 예시 : LI-RUN-02/Case1
- Capacity
- ㄴ Shown only for fixed-capacity storage.
- Required Qty
- ㄴ Displays the additional quantity required based on current inventory.
- Status
- ㄴ Status is determined by run availability: Sufficient(enough stock), Low(partial shortage), Insufficient(no stock)

#### 6. [Cancel] 버튼

- 클릭 시 팝업 노출 : Confirm_001

#### 7. [Previous] 버튼

- 클릭 시 LI-RUN-01(이전 단계)으로 이동

#### 8. [Next] 버튼

- 클릭 시 LI-RUN-03(다음 단계)으로 이동

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |
| 1 | Progress 상태 정보 Tooltip (패널 화면 이름: Capacity Tooltip) | Info 아이콘의 툴팁 표출 (디스크립션 5 「표출 예시 : LI-RUN-02/Case1」) | [LI-RUN-02/Case1](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-79398) |

- 케이스 패널: 화면 정보만 있고 디스크립션 번호 · 내용 없음(번호 칸 `0`)
- 케이스 화면 글자: 툴팁 `Capacity : Shown only for fixed-capacity storage.` / `Required Qty : Displays the additional quantity required based on current inventory.` / `Status : Status is determined by run availability.` / `Sufficient (enough stock)` / `Low (partial shortage)` / `Insufficient (no stock)`
