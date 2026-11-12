---
cid: TI-ADS
pair_cid:
tl_relation: 단독
title: Dashboard(All)
path: Dashboard(All)
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8135-111743
figma_region: 2.1 2차
---
# TI-ADS Dashboard(All)

> 기존 화면(작업방 Dashboard 페이지, 2.1 2차 영역, Ver 2.1.14)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- 관련 정책: POL-COM-005 (여러 대 CURECA, 2대 이상 고객만), POL-EQP-001 (Instrument Status), POL-EQP-009 (Instrument Info의 Enabled Module 수), POL-SMP-009
- 호출하는 화면: Edit Display Name Popup (TI-ADS-P), 각 CURECA의 Dashboard (TI-DAS)

## 기존 화면

### 화면 글자

- (GNB) CURECA(1) 장비 선택 | Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-07-10 11:30 | TIOS
- (LNB) Dashboard(All) | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Information | Keira Knightley
- 총 Today’s Orders: Orders | Pending | In Progress | Completed
- 장비 카드 3개: "CURECA 1, Main building 2F" [Enter], "CURECA 2, R&D building 5F" [Enter], "CURECA #3" [Enter]
- 카드마다: Today’s Orders (Orders | Pending | In Progress | Completed), Test Status (Running, Total Batches 5, Remaining Time 07:04, %, Elapsed 7 h 51 m, Estimated Total 14 h 55 m, Processed, Completed 1,532, Failed, Total 3,721, Not tested, STAT), Inventory Status (Insufficient, Low), Waste Bin/Bottle Status (Full, Almost Full), Instrument Status (Ready, Running, Paused, Error), Instrument Info (Unit: ea)

### 사용 컴포넌트

Description (18), Description Number (10), Status (9), Divider (9), Interface/Pencil_Outlined (3), layout/spacing (3)

### 디스크립션 (원문)

#### 0. 메뉴

- CURECA 장비를 여러 개 설치할 경우 보여지는 메뉴이다. 각 장비의 통합 상태가 요약되어 보여진다.
- 최대 3개 장비까지 보여지는 구조이며

#### 1. CURECA 전환

- 설치된 CURECA 장비 목록을 선택할 수 있는 영역
- 최초 진입 시 첫 번째 인덱스의 CURECA 장비가 기본 선택됨
- 장비명은 "CURECA (Index)" 형식으로 표시됨

#### 2. 총 Today’s Orders

- 각 CURECA 장비의 Today’s Orders를 합산하여 표시

#### 3. Display Name

- CURECA 장비에 표시할 이름(Display Name)을 설정할 수 있음
- 수정 아이콘 클릭 시 Edit Display Name 팝업이 표시되며, Display Name 수정 가능

#### 4. [Enter] 버튼

- 클릭 시 해당 CURECA 장비의 Dashboard 메뉴로 이동
- 이동과 동시에 상단 1번 영역의 CURECA 장비가 선택한 장비로 자동 전환됨

#### 5. Today’s Orders

- 해당 CURECA 장비의 Today’s Orders 정보를 요약하여 표시
- 표시 기준 및 상태값은 장비 Dashboard의 Today’s Orders와 동일하게 적용됨 (상세 내용은 해당 화면 참조)

#### 6. Test Status

- 해당 CURECA 장비의 Test Status 정보를 요약하여 표시
- 배치별 개별 정보가 아닌 전체 배치에 대한 집계 결과를 표시
- 표시 기준 및 상태값은 장비 Dashboard의 Test Status와 동일하게 적용됨 (상세 내용은 해당 화면 참조)

#### 7. Inventory Status

- 해당 CURECA 장비의 Inventory Status 정보를 요약하여 표시
- 표시 기준 및 상태값은 장비 Dashboard의 Inventory Status와 동일하게 적용됨 (상세 내용은 해당 화면 참조)

#### 8. Waste Bin/Bottle Status

- 해당 CURECA 장비의 Waste Bin/Bottle 상태 정보를 요약하여 표시
- 해당 값은 CURECA 장비 Dashboard에 표시되는 Waste Bin/Bottle Status와 동일한 기준으로 제공됨 (상세 내용은 해당 화면 참조)

#### 9. Instrument Status

- 지정된 4개의 상태값만 표시하며, 각 상태값에 해당하는 Module 수를 집계하여 표시

#### 10. Instrument Info

- 해당 CURECA 장비에 등록된 Module 중 사용 여부가 '사용' 상태인 Module의 수를 Type별로 집계하여 표시

#### 11. [전체화면 보기] 버튼

- 클릭 시 콘텐츠 영역이 전체 화면으로 확대되어 표시됨 (상세 UI는 하단 이미지 참조)
- 전체 화면 모드에서는 우측 상단의 [X] 버튼을 통해 기존 화면으로 복귀 가능

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 0 "최대 3개 장비까지 보여지는 구조이며" 문장이 끊김 | 문장 완성 (3대를 넘으면 어떻게 보이는지 확인) | 디스크립션 | 대기 (확인 필요) |
| R02 | 표기 | 장비명 형식이 디스크립션은 "CURECA (Index)", 화면은 "CURECA(1)", "CURECA #3" | CURECA (1) 형식으로 통일 | 이름 (번호) 띄어쓰기 | 대기 |
| R03 | 표기 | Not tested | Not Tested | `glossary/status-values.csv` | 대기 |
| R04 | 디스크립션 | 9 "지정된 4개의 상태값" | 장비 모듈 상태 Ready, Running, Paused, Error로 명시 (POL-EQP-001) | POL-EQP-001 | 대기 |
| R05 | 디스크립션 | 10 "사용 여부가 '사용' 상태인 Module" | Enabled인 Module (POL-EQP-009) | POL-EQP-009 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.14 | 2026-10-30 | (버전 메모 없음) | 서보경 | Figma 화면 정보 |
