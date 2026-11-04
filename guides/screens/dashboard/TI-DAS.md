---
cid: TI-DAS
pair_cid: LI-DAS
tl_relation: 기능 추가
title: Dashboard
path: Dashboard
type: Page
version: 2.1.14
date: 2026-10-30
author: 서보경
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-57523
figma_region: 2.1 2차
---
# TI-DAS Dashboard

> 기존 화면(작업방 Dashboard 페이지, 2.1 2차 영역, Ver 2.1.14)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: L-IOS(LI-DAS)에는 CURECA 구동 컨트롤러([Initialize], [Stop])와 Instrument Status의 Door Control이 더 있음
- 관련 정책: POL-EQP-001, POL-EQP-002, POL-EQP-004, POL-SMP-001, POL-SMP-004, POL-SMP-009
- 참조 프레임: [SB_Dashboard Info](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=5136-325772) (Inventory Status, Waste Bin/Bottle Status 노출 케이스)

## 기존 화면

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30 | TIOS
- (LNB) Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Information | Keira Knightley
- Today’s Orders: Orders | Pending | In Progress | Completed (16,560씩)
- Test Status | More (Running)
- Inventory Status | More: Empty | Low 탭, 목록 예: MB DWP · High-throughput Extraction(1) / MB Storage · Required Qty 380 rxns (4 DWPs), 5X GI-B(I) MOM, EM2, RNase-free Water, GI-B(I) PC · 270 rxns (3 sockets), Empty Standard Tube · Prep Consumable Storage(1) / Trolley · 80 ea (2 racks), 300 μL Tip · 75 ea (1 rack), BB TUB, WB1 TUB, WB2 TUB, WB3 TUB, EB TUB · Flexible Extraction(1) / Buffer Cartridge Storage · 60 rxns (1 set)
- Instrument Status | More: Module Type마다 Connected / Status / Door Status / Event, View All, Event 툴팁 "[HT Extraction(3)] ER-0112, 유닛의 상태를 확인해주세요."
- Waste Bin/Bottle Status: Full | Almost Full, 목록 예: High-throughput Extraction(1) Waste Bin Full, Liquid Waste Bottle Full, Flexible Extraction(1) Waste Bin Full, PCR Setup(1) Waste Bin 88%, Flexible Extraction(2) Waste Bin 75%

### 사용 컴포넌트

Frame/Instrument_Status (32), Tag Status (16), Description (15), Description Number (11), Table/Filled Table Cell (8), Interface/Plus (4), Icon/Alert Error (3), Title (3), Button/Tertiary XSmall (1), Tooltip (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- Cureca 시스템에 관련된 Test Order, Instrument, Storage, Waste bin/bottle 현황 등 전반적인 정보를 제공한다.
- 진입 방법
- LNB의 ‘Dashboard’ 메뉴를 통해 진입할 수 있다.

#### 1. Today’s Orders

- Dashboard Info 페이지 내 ‘Sample 상태값’ 참고
- Orders: Lis를 통해 접수된 Order 수의 총합
- 카운팅 기준: 오늘 날짜로 접수된 검사
- Pending: 잔여 검체 수량(Ordered + Not Tested)
- In Progress: 검사가 진행 중인 검체 수량(Ready + Running)
- Completed: Completed, Failed
- 리셋 기준: Policy Setting > ‘Test Cut-off Time’에 설정된 마감시간 기준으로 리셋

#### 3. Test Status

- Test Status 메뉴의 전체 검사 요약 정보 부분과 동일함
- 해당 메뉴 디스크립션 ‘[2]전체 검사 현황 요약 정보 영역’ 내역 참고
- CID: TI-TMG-02

#### 3-1. [+More] 클릭

- Test Status 페이지 이동

#### 4. CURECA 전체 구동 상태

- Dashboard Info 내 정의된 [전체 Cureca 구동 상태 값] 및 [구동 프로세스] 참고

#### 5. Instrument Status

- 장비 상태 현황을 파악할 수 있는 영역이며 Instrument 메뉴의 Overview tab과 유사한 형태로 장비의 상태값과 door를 컨트롤 할 수 있음
- Instrument 메뉴와 동일한 구조로 해당 페이지 참고 부탁드립니다.
- (표기되는 정보는 살짝 상이합니다.)

#### 5-1. [+More] 클릭

- Instrument의 ‘Overview’ Tab으로 페이지 이동

#### 5-2. Event 표기 영역

- Module에서 발생한 장비 Event가 존재할 경우 표시됨
- 아이콘 표시
- Event Level에 따라 차등 표현(Error/Warning)
- Event Icon
- 노출 방식: 아이콘 클릭 시 툴팁형식으로 내용이 노출되며, X 클릭 시 닫히는 방식
- 노출 조건: Event 상태가 ‘Open’인 항목이 존재할 경우
- 표시 기준: ‘Open’ 상태 Event 중 최신 1건 표시됨
- 표기 형식: [{Module Name}]\n{Event Code}, {Event Description}

#### 6. Inventory status 영역

- 구동 시 필요한 소모품 및 시약 정보를 요약해서 보여주는 영역으로 Insufficient  및 Low 상태값의 리스트만 노출됨
- 노출 정책
- 통합 구동상태 또는 Sample Storage의 Storage Unit의 Docking 상태에 따라 표기(OR 조건)
- Sample Storage의 ‘Inbound Trolley’ Unit이 ‘Docking’ 상태가 아니면서 통합 상태가 ‘Running’이 아닌 경우
- ‘Shown only if system running or Inbound Trolley docked’
- 통합 상태가 Running이거나 Sample Storage의 ‘Inbound Trolley’ Unit이 ‘Docking’ 상태이나 부족한 소모품이나 시약이 없을 경우
- ‘No actions required’ 표기
- 통합 상태 Run O / Docking X = 부족량 노출
- 통합 상태 Run X / Docking O = 부족량 노출
- 통합 상태 Run X / Docking X = ‘Shown only if system running or Inbound Trolley docked’ 문구 표기
- 정렬 기준
- Inventory - Summary Tab의 ‘Inventory status’와 동일하여 해당 페이지 참고 부탁드립니다.

#### 6-1. [+More] 클릭

- Inventory 메뉴의 Summary tab으로 이동

#### 7. Waste Bin/Bottle Status

- Waste bin/bottle의 정보를 요약해서 보여주는 영역으로 Full 및 Almost Full 상태값의 리스트만 노출됨
- 노출 기준: 항시 노출
- 노출되는 아이템이 없을 경우, ‘No actions required’ 표기
- 정렬 기준
- Inventory - Summary Tab의 ‘Waste Bin/Bottle Status’와  동일하여 해당 페이지 참고 부탁드립니다.

#### 7-1. [+More] 클릭

- Inventory 메뉴의 Summary tab으로 이동 및 ‘Waste Bin/Bottle’ 섹션으로 포커싱되어 이동됨

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 표기 | Inventory Status 탭 "Empty | Low" | Insufficient / Low (디스크립션 6과 LI-DAS는 Insufficient) | `glossary/status-values.csv` 재고 상태 | 대기 |
| 2 | 표기 | "270 rxns (3 sockets)" (LI-DAS는 "3 sets") | Reagent 수량 표기 규칙으로 하나로 통일 | `glossary/glossary.md` 표기 규칙, Common UX COMM-4-b | 대기 (확인 필요) |
| 3 | 디스크립션 | 4 "CURECA 전체 구동 상태", "전체 Cureca 구동 상태 값" | 장비 통합 상태 (POL-EQP-001·002 참조) | `glossary/terms.csv` | 대기 |
| 4 | 디스크립션 | "Cureca", "Lis" | CURECA, LIS | `glossary/terms.csv` | 대기 |
| 5 | 디스크립션 | 번호 2가 없음 (1 다음 3) | 번호 정리 | 디스크립션 | 대기 |
| 6 | 디스크립션 | "Dashboard Info 페이지"를 참고하라고만 적음 | 정의는 정책 ID로 참조 (Today’s Orders 집계 기준은 SMP·TST 정책, 노출 조건은 INV 정책을 쓸 때 옮김) | 헌법 3조 | 대기 |
| 7 | 표기 | Module 이름과 번호 붙여 씀: High-throughput Extraction(1), PCR Setup(1) | High-throughput Extraction (1) | 이름 (번호) 띄어쓰기 | 대기 |
| 8 | 문구 | Event 툴팁 예시 "ER-0112, 유닛의 상태를 확인해주세요." (한국어) | 영어 화면 문구로 | `rules/language-set.md` | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.14 | 2026-10-30 | 명칭 변경: Requirements for Run Completion → Inventory status | 서보경 | Figma 버전 메모 |
