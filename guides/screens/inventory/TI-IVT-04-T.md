---
cid: TI-IVT-04-T
pair_cid: LI-IVT-04-T
tl_relation: 동일
title: Inventory Reagent
path: Inventory > Reagents
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7336-427513
figma_region: 2.1 2차
---
# TI-IVT-04-T Inventory Reagent

> 기존 화면(작업방 Inventory 페이지, 2.1 2차 영역, Ver 2.1.13)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: 없음 (LI-IVT-04-T와 같음)
- 관련 정책: POL-INV-001, POL-INV-002, POL-INV-003, POL-INV-004, POL-EQP-009, POL-INV-007
- 호출하는 화면: Reagent Item details Popup (TI-IVT-04-T-P)

- 취소선(Figma에서 제거된 항목): 0의 "시약 개수 표기 방식" ("낱개 수량(입고 단위 수량)" 형식, 100개당 1 Rack이면 올림 처리, 예: 101 → 2 Rack). 지금은 Common UX COMM-4-b를 따름

## 기존 화면

### 화면 글자

- (GNB·LNB는 T-IOS 공통)
- Summary | Overview | Consumables | Reagents | Waste Bin/Bottle | Usage History
- (Chip) Insufficient 12 | Low 7 | Sufficient 2 | Reagents type: # Sample Preparation | #Nucleic Acid Extraction | #PCR | Refresh
- (좌측 카드) Pretreatment Reagents / Sample Preparation: LB Tub (Prep), PBS Tub, Saline Tub, ASL Standard Tube, PBS Standard Tube, Prelyser Standard Tube, Saline Standard Tube (예: 200 rxns (2 racks) | 300 rxns (3 racks))
- (좌측 카드) STARMag M96 Kit / Nucleic Acid Extraction: EB DWP, LB DWP, MB DWP, WB1 DWP, Spin Tip (96~288 rxns (1~3 DWPs))
- (좌측 카드) STARMag Universal Cartridge Kit / Nucleic Acid Extraction: BB Tub, EB Tub, WB1 Tub, WB2 Tub, WB3 Tub 384 rxns (4 sets), LB Tub, MB Tube, PK Tube, Buffer Cartridge Cap 15 ea (3 sets)
- (좌측 카드) Allplex™ GI-Virus Assay: 5X GI-V MOM, 5X Real-time One-step Buffer, GI-V PC, Real-time One-step Enzyme, RNase-free Water 300 rxns (3 sets) | GI-V IC 100 rxns (1 tube) / 200 rxns (2 tubes)
- (우측 상세) LB Tub (Prep) | Item details → Expired reagents are discarded or returned unused, depending on the instrument. → Location | Capacity | Remaining Qty | Required Qty: Prep Consumable Storage (1)~(2) > Trolley | 6 DWPs | 100 rxns (1 rack) | 200 rxns (2 racks)
- (우측 상세) PBS Tub, Saline Tub, ASL Standard Tube | Item details → Prep Consumable Storage (1)~(2) > Trolley | 5 sets | 100 rxns (1 rack)
- (예시 값) #Trolley, 200T (2 racks), 100T (1 rack)

### 사용 컴포넌트

Description Number (17), Status (12), Item_Segment Tabs (6), Chip (6), Square (5), Frame (1), Info Box (1), Interface/Info_Circle_Outlined (1), Component 4 (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 장비에서 사용되는 Reagents의 재고를 확인할 수 있는 화면이다.
- 진입 방법
- LNB의 ‘Inventory의 ‘Reagents Tab’을 통해 진입할 수 있다.
- 데이터 기준
- 사용여부가 ‘사용’인 모듈 대상으로만 노출된다.
- 시약 기준으로 모아보기 기능을 제공하며, 시약 특성이 같거나 Kit 기준으로 묶어서 표기한다.
- ~~시약 개수 표기 방식~~
- ~~“낱개 수량(입고 단위 수량)” 형식으로 제공~~
- ~~100개당 1 Rack일 경우, 입고 단위 수량을 올림 처리~~
- ~~(예: 101 → 2 Rack)~~
- =>해당 정의는 Common UX - COMM-4-b 참고

#### 1. Chip 영역(Status 필터)

- Status
- 데이터: Insufficient, Low, sufficient
- 상태값 옆 숫자는 좌측 영역의 Status별 건수가 표기됨
- 작동 방식
- Chip 클릭 시 → 선택 상태로 변경, 해당 Status 값에 해당하는 데이터만 필터링하여 표기
- 동일 Chip 재클릭 시 → 선택 해제, 필터링 해제되어 전체 데이터 표기
- 다중 선택: Chip은 여러 개 동시에 선택 가능하며 선택된 상태값에 해당되는 모든 데이터가 필터링되어 보여짐
- 적용 범위: 좌측 / 우측 영역 모두 동일하게 필터링 적용
- 우측 영역 규칙: Status 값에 해당 Storage만 필터링되어 표기
- Reagents type
- 공정별 시약을 모아볼 수 있는 기능 제공
- 데이터: # Sample Preparation, #Nucleic Acid Extraction, #PCR
- 공정별 시약을 모아볼 수 있는 기능을 제공하며 좌측 카드 카드명 하단에 노출되는 문구 기준으로 필터링
- 동작 방식:
- 좌측 카드의 카드명 하단에 노출되는 문구(Reagents type)를 기준으로 필터링

#### 2. 좌측 영역 - 카드 리스트

- 표기 및 정렬 기준: Common UX - COMM-4-b 참고
- 최초 진입: 기본(Default)으로 첫 번째 카드가 선택된 상태로 표시
- 클릭 영역: 카드 전체가 클릭 가능 영역이며, 클릭 시 우측 영역([3])에 해당 카드의 상세 정보 표시
- 카드 또는 항목 노출 조건
- Remaining Qty가 1개 이상 존재하거나 Required Qty가 1개 이상 필요한 경우 노출
- Remaining Qty 및 Required Qty가 모두 0일 경우 해당 항목은 숨김 처리
- 카드 영역 내 모든 항목이 미노출 조건이면 해당 카드가 전체 미노출됨

#### 2-1. 카드 제목

- 표기 방식: Common UX - COMM-4-b 참고

#### 2-3. 카드 내 항목

- Pretreatment Reagents은 전처리에 사용되는 Tube, Tub가 표기됨
- Kit 및 PCR에 구성된 개별 시약들은 입고되는 Storage 기준에 따라 분리하여 목록으로 구성
- 각 항목은 실제 입고되는 Storage 단위별로 구분하여 리스트화
- 동일 Storage에 함께 입고되는 항목들은 하나의 그룹으로 묶어 표기

#### 2-3. Reagents type

- 상단의 Reagents type타입 선택에 따라 필터링하여 보여지는 값을 표기하는 영역
- fileType이 “Pretreatment”인 경우 = Sample Preparation 표기
- fileType이 “Extraction”인 경우 = Nucleic Acid Extraction 표기
- fileType이 “PCR”인 경우 = PCR 표기

#### 2-4. Remaining Qty(좌측 영역)

- 범위: 좌측 영역의 Remaining Qty는 해당 시약이 적재된 모든 Storage의 개수를 합산하여 표시
- 합산 기준:
- Storage 영역과 장비 내 거치 공간(장비가 가져간 소모품 포함)의 수량을 모두 합산하여 재고로 표시
- 단,장비 내 거치 공간에 있는 소모품은 실시간으로 차감되지 않는며, 적재된 순간의 수량을 그대로 유지한다.
- 소모품이 모두 소진되거나 다시 Storage로 반환되는 기준으로 인벤토리 재고가 업데이트 됨
- 표기 방식: 소모품/시약 표기 방식에 따름(0번 디스크립션 참고)
- 정책 안내
- 1) 소모품/시약 잔여량 집계 기준
- 잔여량은 저장 장치 및 장비 내 적재된 소모품을 포함하여 관리한다.
- 저장 장치에 소모품 입고 시 해당 수량을 증가한다.
- 장비에서 소모품 사용 후 저장 장치로 반환 시 실제 사용 수량만큼 차감한다.
- 장비에서 소모품 사용 후 폐기 시 실제 사용 수량만큼 차감한다.
- 저장 장치에서 소모품 제거 시 해당 수량을 차감한다.
- 2) 소모품/시약 사용량 집계 기준
- 장비에서 소모품 사용 후 저장 장치로 반환 시 실제 사용 수량을 이력에 기록한다.
- 장비에서 소모품 사용 후 폐기 시 실제 사용 수량을 이력에 기록한다.

#### 2-5. Required Qty(좌측 영역)

- 좌측 영역의 Remaining Qty는 현재 전체 Run 기준으로 해당 시약이 적재된 모든 Storage 및 장비 내 Buffer 공간의 합계를 기준으로 집계
- 산출 방식
- 총 필요 수량에서 현재 재고를 제외한 부족 수량을 계산
- 예시: 남은 재고 10rxns, 필요 수량 14rxns → Required Qty = 4rxns
- 노출 조건: 검체 트롤리가 도킹된 상태 또는 통합 상태가 Running, Partial Running일 경우 노출(OR 조건)
- 예외 처리: 검사 진행 중이 아닐 경우 ‘-’로 표기

#### 2-6. Status

- 현재 전체 Run 기준으로 필요 수량 대비 재고 상태를 표시
- 각 상태별 정의된 아이콘형식으로 표기
- Insufficient: 필요 수량 대비 재고(Remaining Qty)가 0인 경우
- Low: Remaining Qty가 존재하나 필요 수량을 충족하지 못해 1개 이상 부족한 경우
- Sufficient: Remaining Qty가 필요 수량을 충족하여 부족이 없는 상태
- 우선순위 규칙: 동일 항목의 상세 정보에서 Insufficient와 Low 상태가 동시에 존재할 경우, 좌측 카드에는 Insufficient로 표기
- 예시: 설계서의 ‘Saline Standard Tube’ → 우측 상세에는 Insufficient 1개, Low 1개 표기되어 있지만, 좌측 카드에는 Insufficient 값으로 표기됨
- 노출 조건: 검체 트롤리가 도킹된 상태 또는 통합 상태가 Running, Partial Running일 경우 노출(OR 조건)
- 예외 처리: 위의 상황이 아닐 경우 ‘-’로 표기

#### 3. 우측 영역

- 좌측에서 선택된 카드의 정보를 우측 영역에 표기
- 시약별 Module[index] + Storage 기준으로 Location Row 생성
- 정렬 기준: 좌측 영역 카드 내 항목 순서와 동일하게 적용
- 항목 노출 조건
- Remaining Qty가 1개 이상 존재하거나 Required Qty가 1개 이상 필요한 경우 노출
- Remaining Qty 및 Required Qty가 모두 0일 경우 해당 Location은 숨김 처리

#### 3-1. 시약 개별 카드

- 좌측 카드 목록에 해당되는 아이템을 기준으로 구성
- 해당 시약이 들어가는 위치정보를 함께 묶어서 표기

#### 3-2. Location

- 해당 시약이 적재되는 ‘Module[index] > Storage Unit’기준으로 표기

#### 3-3. 유효기간 만료 시약 안내

- 유효기간이 지난 시약이 존재할 경우 사용자에게 경고 문구를 제공
- 시약명 기준으로 유효기가 만료 여부 체크하여, Location 중에 1 곳이라도 있을 경우 카드와 목록 사이에 표기됨
- 문구: Expired reagents are discarded or returned unused, depending on the instrument.
- Capacity(우측 영역_Module+Storage기준)
- *해당 화면설계에 없으나 아래 다른 예시 화면에서 확인 가능
- 정의: 최대 적재량을 관리할 수 있는 Storage에 한해 Capacity 값을 표시
- 최대 표시값: 장비에서 설정된 값을 표기
- 기존에는 값이 fix되어 있었으나 26.08.20기준, 제작 시 장비 설계 방식에 따라 적재 용량이 다르게 적용되는 케이스가 발생하여 장비 셋팅 시, 설정된 값을 표기하는 방식으로 적용
- 예외 처리:
- 여러 품목을 혼합 적재하여 최대 적재량 관리가 불가능한 경우 해당 영역은 미제공(예시: Cold Storage의 PCR 영역)

#### 3-5. Remaining Qty(우측 영역_Module+Storage기준)

- 해당 시약이 적재된 Location(Module+Storage)기준으로 장비에 남은 개수 표기
- 합산 기준:
- Storage 영역과 장비 내 거치 공간(장비가 가져간 소모품 포함)의 수량을 모두 합산하여 재고로 표시
- 단,장비 내 거치 공간에 있는 소모품은 실시간으로 차감되지 않는며, 적재된 순간의 수량을 그대로 유지한다.
- 소모품이 모두 소진되거나 다시 Storage로 반환되는 기준으로 인벤토리 재고가 업데이트 됨
- 표기 방식: 시약 표기 방식에 따름(0번 디스크립션 참고)

#### 3-6. Required Qty(우측 영역_Module+Storage기준)

- 현재 전체 Run 기준으로 해당 시약이 적재된 Location(Module+Storage) 및 장비 내 Buffer 공간의 합계를 기준으로 집계
- 산출 방식
- 총 필요 수량에서 현재 재고를 제외한 부족 수량을 계산
- 예시: 남은 재고 10T, 필요 수량 14T → Required Qty = 4T
- 노출 조건: 검체 트롤리가 도킹된 상태 또는 통합 상태가 Running, Partial Running일 경우 노출(OR 조건)
- 예외 처리: 위의 상황이 아닐 경우 ‘-’로 표기

#### 3-7. [Item details] 버튼

- 해당 시약의 개별 상세 정보를 확인할 수 있는 팝업 호출 기능 제공
- 클릭 시, [TI-IVT-04-T-P] 팝업 호출

#### 4. [Refresh] 버튼

- 버튼 클릭 시 전체 데이터가 최신 상태로 갱신되어 표시

#### 5. Capacity Tooltip

- 동작 : COMM-5-o
- 툴팁 내용 :
- Capacity: Shown only for fixed-capacity storage.
- Required Qty: Displays the additional quantity required based on current inventory.
- Status: Status is determined by run availability: Sufficient(enough stock), Low(partial shortage), Insufficient(no stock)

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 상태값 | Reagent에 재고 상태(Sufficient / Low / Insufficient)를 씀. 상태값 표의 재고 상태 대상은 Consumable뿐이었음 | 디스크립션에 넣음: Reagent도 Consumable과 같은 재고 상태(Sufficient, Low, Insufficient)를 씀. 상태값 표 대상을 Consumable / Reagent로 고침 | `glossary/status-values.csv 재고 상태`, POL-INV-003 | 대기 |
| R02 | 상태값 | 2-6 Insufficient "재고가 0인 경우", Low "1개 이상 부족한 경우", 1 "sufficient" | TI-IVT-03-T 반영 대기 목록 1과 같이, Sufficient | `glossary/status-values.csv 재고 상태`, POL-INV-003 | 대기 |
| R03 | 디스크립션 | 번호 2-3이 두 번, 2-2 없음. Capacity가 3-3 안에 번호 없이 들어 있고 3-4 없음 | 번호 정리 (Capacity를 3-4로) | 디스크립션 | 대기 |
| R04 | 디스크립션 | 2-5 Required Qty 절 첫 문장 "좌측 영역의 Remaining Qty는…", 예외 처리 "검사 진행 중이 아닐 경우" (2-6·3-6은 "위의 상황이 아닐 경우") | Required Qty, 예외 처리 문장 통일 | 디스크립션 | 대기 |
| R05 | 디스크립션 | 단위 혼용: 2-5 "10rxns", 3-6 "10T", 화면 "200T (2 racks)" | rxns로 통일 (COMM-4-b) | 디스크립션 | 대기 (확인 필요) |
| R06 | 디스크립션 | 2-4·3-5 "표기 방식: 0번 디스크립션 참고" (0의 표기 방식은 취소선) | Common UX COMM-4-b 참고 | Figma 취소선 | 대기 |
| R07 | 표기 | 3-3 "유효기간", "유효기가 만료" | Expiration Date, Expired | `glossary/terms.csv` Expiration Date, 오타 | 대기 |
| R08 | 표기 | Chip "# Sample Preparation"과 "#Nucleic Acid Extraction" 띄어쓰기 다름 | 하나로 통일 | 화면 글자 | 대기 |
| R09 | 디스크립션 | "검체 트롤리", "시약", "소모품", "저장 장치", "장비 내 거치 공간(장비가 가져간 소모품 포함)" (Reagent 화면에 소모품) | Inbound Trolley, Reagent, Storage | `glossary/terms.csv` | 대기 |
| R10 | 디스크립션 | 2-5·2-6·3-6 노출 조건이 TI-IVT-01-T 1과 다름 (Partial Running 포함 여부) | TI-IVT-03-T 반영 대기 목록 4와 같이 | POL-INV-003 규칙 2·3 | 대기 |
| R11 | 화면 글자 | 예시 값 "#Trolley" | 실제 Location 예시 | 화면 글자 | 대기 |
| R12 | 디스크립션 | 0 "사용여부가 '사용'인 모듈" | Enabled인 Module | POL-EQP-009 | 대기 |
| R13 | 정책 반영 | 2-4 정책 안내 2) 반환 시 이력 기록 | TI-IVT-03-T 반영 대기 목록 (사용량은 폐기할 때만 기록)와 같음 | POL-INV-002 규칙 6, POL-INV-006 규칙 1 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.13 | 2026-10-23 | 표기 및 정렬 기준 변경 반영. UI 변경 (표기 단위 변경에 따른 간격 재조정). Pretreatment Reagents 카드 내 구분선 제거 | 서보경 | Figma 버전 메모 |
