---
cid: LI-RUN-03
pair_cid:
tl_relation: 단독
title: Run Preparation
path: Run > Check Reagents
type: Page
version: 2.1.13
date: 2026-10-23
author: 정다예
service_mode: [Main Mode, Console Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6902-43001
figma_region: 2.1 2차
---
# LI-RUN-03 Run Preparation (Check Reagents)

> 기존 화면(작업방 Run/Quick Start 페이지, 2.1 2차 영역, Ver 2.1.13)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Run Preparation Step 3 (Check Test Protocol을 쓰면 Step 4). IA 화면 이름은 "Check Reagents"
- 관련 정책: POL-SMP-007, POL-INV-002, POL-INV-003, POL-INV-004, POL-INV-007
- 호출하는 화면: Item details Popup (IA LI-IVT-04-T-P, 디스크립션은 LI-RUN-03-P), Confirm_001, Alert_001
- 다른 프레임: [LI-RUN-03/Case1](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6902-44991) (Capacity가 표시되는 Case)

## 기존 화면

### 화면 글자

- STEP 1 Check samples | STEP 2 Check consumables | STEP 3 Check reagents | STEP 4 Check waste bin/bottle
- Status: Insufficient 10 | Low 8 | Sufficient 1 | Reagents type: # Sample Preparation | #Nucleic acid extraction | #PCR | Refresh
- (왼쪽 카드) Pretreatment Reagents (Sample Preparation): LB Tub (Prep), PBS Tub, Saline Tub, ASL Standard Tube, PBS Standard Tube, Prelyser Standard Tube, Saline Standard Tube | STARMag M96 Kit (Nucleic Acid Extraction): EB DWP, LB DWP, MB DWP, WB1 DWP, WB2 DWP, Spin Tip | STARMag Universal Cartridge Kit (Nucleic Acid Extraction): BB Tub, EB Tub, WB1 Tub, WB2 Tub, WB3 Tub, LB Tub — 항목마다 Remaining Qty | Required Qty | Status (예: 200 rxns (2 racks) | 300 rxns (3 racks))
- (오른쪽 카드, 예: LB Tub (Prep)) Item details | Expired reagents are discarded or returned unused, depending on the instrument. | Location | Capacity | Remaining Qty | Required Qty
- Prep Consumable Storage (1) > Trolley | 6 DWPs | 100 rxns (1 rack) | 200 rxns (2 racks)
- (예시 행 더 있음. 단위 rxns, T, racks, DWPs, sets)
- Cancel | Previous | Next

### 사용 컴포넌트

Description Number (16), Status (12), Description (7), Chip (6), Square (5), Icon/Popup Status (2), Info Box (1), Contents/Scroll Bar (1), Interface/Info_Circle_Outlined (1)

### 디스크립션 (원문)

#### 0. Run Preparation(구동 준비)화면

- 정의
- [Step 3/4] Run 실행을 위한 시약 정보 확인 화면
- 단, Check test protocol 단계가 노출될 경우 Step 4로 노출
- 컨펌 및 알럿
- 페이지 이탈 시(LNB 메뉴 선택 등)팝업 노출 : Confirm_001
- Sample 정보 로드 불가 시 팝업 노출 : Alert_001

#### 1. Chip 영역(Status 필터)

- Status
- Insufficient, Low, sufficient
- 상태값 옆 숫자는 좌측 영역의 Status별 건수가 표기됨
- 동작
- Default : 모든 탭이 미선택 된 상태, 전체 데이터 항목 노출
- Chip 선택 시 : Status 값에 해당하는 데이터만 필터링하여 표기
- 선택 상태의 Chip 재선택 : 선택 해제, 필터링 해제되어 전체 데이터 표기
- 다중 선택 :Chip은 여러 개 동시에 선택 가능하며 선택된 상태값에 해당되는 모든 데이터가 필터링되어 보여짐
- 적용 범위
- 좌측 / 우측 영역 모두 선택된 Status값에 해당 하는 항목만
- 필터링하여 노출
- Reagents type
- 공정별 시약을 모아볼 수 있는 기능 제공
- #Sample Preparation, #Nucleic Acid Extraction, #PCR
- 동작
- 좌측 카드의 카드명 하단에 노출되는 문구(Reagents type)를 기준으로 필터링
- 사용자가 특정 Reagents type을 선택하면 해당 유형에 속하는 시약만 노출

#### 2. 카드 리스트(좌측 영역)

- 데이터 표기
- 시약명을 기준으로 시약 특성 및 Kit 기준으로 그룹화하여 카드 형태로 표기
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

#### 2-1. 카드 제목 및 Reagents type

- 카드 제목 표기 방식
- Kit명 또는 시약 사용하는 단계를 표현하는 이름을 표기
- Reagents type 표기 방식
- 상단의 Reagents type타입 선택에 따라 필터링하여 보여지는 값을 표기하는 영역
- 현재 기준, 아래 내역대로 적용(공정별 사용되는 시약 구분)
- ㄴSample Preparation : Pretreatment Reagents
- ㄴnucleic acid extraction :  STARMag M96 Kit, STARMag Universal Cartridge Kit
- ㄴPCR : Allplex™ Respiratory Panel 1, Allplex™ Respiratory Panel 2, Allplex™ Respiratory Panel 3, Allplex™ GI-Virus Assay, Allplex™ GI-Bacteria(I) Assay, Allplex™ GI-Bacteria(II) Assay, Allplex™ GI-Parasite Assay, Allplex™ PneumoBacter Assay, Allplex™ HPV28 Detection, Anyplex™ II STI-12 Detection

#### 2-2. 카드 내 항목

- 데이터 표기
- Pretreatment Reagents은 전처리에 사용되는 Tube, Tub 표기
- 각 항목은 실제 입고되는 Storage 단위별로 구분하여 리스트화
- ㄴKit 및 PCR에 구성된 개별 시약들은 입고되는 Storage 기준에 따라 분리하여 항목 표기

#### 2-3. Remaining Qty(좌측 영역)

- 정의
- 해당 소모품이 적재된 모든 Storage의 개수를 합산하여 표시
- 산출 방식
- 도킹된 Trolley + Storage 영역 + 장비 내 Buffer 공간에 적재된 수량을 모두 포함
- 단,장비 내 거치 공간에 있는 소모품은 실시간으로 차감되지 않는며, 적재된 순간의 수량을 그대로 유지함
- 소모품이 모두 소진되거나 다시 Storage로 반환되는 기준으로
- 재고가 업데이트 됨
- 표기 방식
- “반응 수T(입고 단위 수량)” 형식으로 제공
- 100T당 1 Rack일 경우, 입고 단위 수량을 올림 처리
- (예: 101T → 2 Rack)

#### 2-4. Required Qty(좌측 영역)

- 정의
- 현재 준비 중인 Run + 진행 중인 Run 기준으로 해당 시약의 재고를 제외한 부족 수량을 표시
- 산출 방식
- 총 필요 수량(진행 예정 RUN + 진행 중 RUN)에서
- 현재 재고(도킹된 Trolley + Storage 영역 + 장비 내 Buffer 공간)를 제외한 부족 수량을 계산
- 예 : 남은 재고 10T, 필요 수량 14T → Required Qty = 4T
- 표기 방식
- “반응 수T(입고 단위 수량)” 형식으로 제공
- 100T당 1 Rack일 경우, 입고 단위 수량을 올림 처리
- (예: 101T → 2 Rack)

#### 2-5. Status

- 정의
- 현재 준비 중인 Run + 진행 중인 Run 기준으로 필요 수량 대비 재고 상태를 표시
- 각 상태별 정의된 아이콘 형식으로 표기
- 상태 정의
- 공통 UX 참고 : COMM-4-a
- 표기 방식
- 동일 소모품을 기준으로 우측 모듈별 소모품 상태 값이 다를 경우
- 왼쪽 상태 값은 우선 순위 (Insufficient> Low>Sufficient)로 표기
- 예 : 설계서의 ‘Saline Standard Tube’ → 우측 상세에는 Insufficient 1개, Low 1개 표기되어 있지만, 좌측 카드에는 Insufficient 값으로 표기

#### 3. 카드 리스트(우측 영역)

- 정의
- 좌측에서 선택된 소모품 카드의 정보를 모듈 기준으로 표기
- 시약별 Module[index] + Storage 기준으로 Location Row 생성
- 정렬
- 공통 UX 참고 : COMM-4-b
- 하위 항목 : Module[index] 기준 오름차순
- 노출 조건(항목 또는 카드 전체 해당)
- Remaining Qty가 1개 이상 존재하거나 Required Qty가 1개 이상 필요한 경우 노출
- Remaining Qty 및 Required Qty가 모두 0일 경우 해당 항목(소모품)은 숨김 처리
- 카드 영역 내 모든 항목이 미노출 조건일 시 카드가 전체 미노출

#### 3-1. 시약 개별 카드

- 정의
- 좌측 카드 목록에 해당되는 ‘시약명’을 기준으로 구성
- 타이틀
- 좌측 항목의 시약 명으로 노출

#### 3-2. Location

- 해당 시약이 적재되는 ‘Module[index] > Storage Unit’기준으로 표기

#### 3-3. 유효기간 만료 시약 안내

- 정의
- 유효기간이 지난 시약이 존재할 경우 사용자에게 경고 문구를 제공
- 노출 조건
- Location 중 유효기간 만료된 시약이 1곳이라도 있을 경우 카드와 목록 사이에 표기됨
- 노출 문구
- Expired reagents are discarded or returned unused, depending on the instrument.
- Capacity(우측 영역_Module+Storage기준)
- *해당 화면설계에 없으나 아래 Inventory 예시 화면에서 확인 가능
- 정의
- 최대 적재량을 관리할 수 있는 Storage에 한해 Capacity 값 표시
- 최대 표시값
- 장비에서 설정된 값을 표기
- 기존에는 값이 fix되어 있었으나 26.08.20기준, 제작 시 장비 설계 방식에 따라 적재 용량이 다르게 적용되는 케이스가 발생하여 장비 셋팅 시, 설정된 값을 표기하는 방식으로 적용
- 예외 처리
- 여러 품목을 혼합 적재하여 최대 적재량 관리가 불가능한 경우 해당 영역은 미제공(예시: Cold Storage의 PCR 영역)

#### 3-4. Remaining Qty(우측 영역_Module+Storage기준)

- 정의
- 해당 시약이 적재된 Location(Trolley+Module+Storage
- 기준으로 장비에 남은 개수 표기
- 산출 방식
- 도킹된 Trolley + Storage 영역 + 장비 내 Buffer 공간에 적재된 수량을 모두 포함
- 단,장비 내 거치 공간에 있는 소모품은 실시간으로 차감되지 않는며, 적재된 순간의 수량을 그대로 유지함
- 소모품이 모두 소진되거나 다시 Storage로 반환되는 기준으로
- 재고가 업데이트 됨
- 표기 방식
- “반응 수T(입고 단위 수량)” 형식으로 제공
- 100T당 1 Rack일 경우, 입고 단위 수량을 올림 처리
- (예: 101T → 2 Rack)

#### 3-5. Required Qty(우측 영역_도킹된 Trolley+Module+Storage기준)

- 정의
- 현재 준비 중인 Run + 진행 중인 Run 기준으로 해당 시약의 재고를 제외한 부족 수량을 표시
- 산출 방식
- 총 필요 수량(진행 예정 RUN + 진행 중 RUN)에서
- 현재 재고(도킹된 Trolley + Storage 영역 + 장비 내 Buffer 공간)를 제외한 부족 수량을 계산
- 예 : 남은 재고 10개, 필요 수량 14개 → Required Qty = 4
- 표기 방식
- “반응 수T(입고 단위 수량)” 형식으로 제공
- 100T당 1 Rack일 경우, 입고 단위 수량을 올림 처리
- (예: 101T → 2 Rack)

#### 3-6. [Item details] 버튼

- 해당 소모품의 개별 상세 정보를 확인할 수 있는 팝업 노출
- 클릭 시 팝업 노출 : LI-RUN-03-P

#### 4. [Refresh] 버튼

- 버튼 클릭 시 전체 데이터가 최신 상태로 갱신되어 표시
- 현재 검색 필터 유지

#### 5. Capacity Tooltip

- 공통 UX 참고 : COMM-5-o
- 툴팁 내용 :
- Capacit
- ㄴ Shown only for fixed-capacity storage.
- Required Qty
- ㄴ Displays the additional quantity required based on current inventory.
- Status
- ㄴ Status is determined by run availability: Sufficient(enough stock), Low(partial shortage), Insufficient(no stock)

#### 6. [Cancel] 버튼

- 클릭 시, 팝업 노출 : Confirm_001

#### 7. [Previous] 버튼

- 클릭 시, LI-RUN-02(이전 단계)으로 이동

#### 8. [Next] 버튼

- 클릭 시 LI-RUN-04(다음 단계)으로 이동

### 케이스

- Case 1. Capacity가 표시되는 Case ([LI-RUN-03/Case1](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6902-44991))

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 3-6 [Item details] → "LI-RUN-03-P" | LI-IVT-04-T-P (IA에서 Run > Check Reagents의 Item details) | `ia/ia-screens.csv` | 대기 |
| R02 | 상태값 | Reagent에 재고 상태(Insufficient / Low / Sufficient)를 씀 | 디스크립션에 넣음: Reagent도 Consumable과 같은 재고 상태(Sufficient, Low, Insufficient)를 씀 | `glossary/status-values.csv 재고 상태`, POL-INV-003 | 대기 |
| R03 | 표기 | 1 "sufficient", 화면 "#Nucleic acid extraction", 2-1 "nucleic acid extraction" | Sufficient, Nucleic Acid Extraction | `glossary/status-values.csv`, `glossary/terms.csv` | 대기 |
| R04 | 표기 | 수량 단위가 화면 "rxns", 디스크립션 "반응 수T"·"T", 3-5 예시는 "개" | 하나로 통일 | 화면 글자, 디스크립션 | 대기 (확인 필요) |
| R05 | 표기 | 3-3 "유효기간" | Expiration Date | `glossary/terms.csv` (유효기간은 쓰지 않는 표현) | 대기 |
| R06 | 디스크립션 | 3-3 아래에 번호 없는 "Capacity" 설명 ("해당 화면설계에 없으나") | 번호를 따로 두고 Case1 프레임 참조 | 디스크립션, LI-RUN-03/Case1 | 대기 |
| R07 | 디스크립션 | 5 "Capacit" | Capacity | 오타 | 대기 |
| R08 | 문구 | 5 Tooltip Status "Low(partial shortage), Insufficient(no stock)" | LI-RUN-02 반영 대기 목록 3과 같이 | `glossary/status-values.csv` 재고 상태 | 대기 (확인 필요) |
| R09 | 디스크립션 | 2-3·3-4 "소모품", "차감되지 않는며", "단,장비", "RUN" | 시약(Reagent), 차감되지 않으며, 단, 장비, Run | 오타, `glossary/terms.csv` | 대기 |
| R10 | 디스크립션 | 2-1 PCR Reagent 목록이 화면 카드에 없음 (예시에는 Pretreatment Reagents와 Kit 2개만) | 화면 예시에 PCR 카드 추가 여부 확인 | 화면 글자 | 대기 (확인 필요) |
| R11 | 디스크립션 | 1 Chip "Default : 모든 탭이 미선택" | 모든 Chip이 미선택 | 디스크립션 | 대기 |
| R12 | 정책 반영 | Reagent가 Insufficient·Low이거나 Expiration Date가 지났을 때 [Run Start]가 되는지 설명 없음 | 디스크립션에 넣음: 재고 상태와 Expiration Date와 관계없이 다음 단계로 넘어가 [Run Start]를 할 수 있음. 없는 Reagent는 그것을 쓰는 단계에 이르렀을 때 Error가 됨 | POL-SMP-007 규칙 3·4 | 대기 |
| R13 | 정책 반영 | 3-3 만료 Reagent 안내 "Expired reagents are discarded or returned unused, depending on the instrument." | 문구는 정책과 맞으므로 유지: Dx 시스템은 폐기, Prep 시스템은 쓰지 않고 Trolley로 반환 | POL-INV-004 규칙 4, POL-SMP-007 규칙 3 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.04 | | 시약 데이터 표출 방안 수정 (테이블 형태 → 카드 형태, 시약 종류별 그룹핑) | 정다예 | Figma 버전 메모 |
| 2.1.11 | | Item details 버튼 추가 (기존 유효기한 만료 시약 안내 문구 내 more 버튼 삭제). 카드 및 하위 항목 노출 조건 수정. 폐기물함 상태 확인 단계 추가로 버튼 변경 Run Start → Next | 정다예 | Figma 버전 메모 |
| 2.1.13 | 2026-10-23 | 표기 및 정렬 기준 변경 반영. UI 변경. 표기 단위 변경에 따른 간격 재조정. Pretreatment Reagents 카드 내 구분선 제거 | 정다예 | Figma 버전 메모 |
