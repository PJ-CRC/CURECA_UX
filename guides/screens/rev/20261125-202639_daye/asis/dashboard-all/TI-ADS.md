---
cid: TI-ADS
pair_cid:
tl_relation: 단독
title: Dashboard(All)
path: Dashboard(All)
type: Page
version: 2.1.14
date: 2026.10.30
author: 서보경
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-39820
---
# TI-ADS Dashboard(All)

> 기존 화면(작업방 `Dashboard-all_asis` 페이지, Ver 2.1.14)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS 단독 화면 (IA에 L 짝 없음)
- 호출하는 화면: [TI-ADS-P] Edit Display Name Popup (3 수정 아이콘), [TI-DAS] Dashboard (4 [Enter])
- 호출되는 곳: LNB `Dashboard(All)`

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- (GNB) CURECA(1) | Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-07-10 11:30
- (LNB) TIOS | Dashboard(All) | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Information | Keira Knightley
- Today’s Orders (전체): Orders 16,560 | Pending 16,560 | In Progress 16,560 | Completed 16,560
- 장비 카드 3개 (왼쪽부터). 카드마다 같은 구성
  - 머리: `CURECA 1, Main building 2F` | `0 | 1` | Enter — `CURECA 2, R&D building 5F` | `0 | 1` | Enter — `CURECA #3` | `0 | 1` | Enter
  - Today’s Orders: Orders 16,560 | Pending 16,560 | In Progress 16,560 | Completed 16,560 (세 카드 같음)
  - Test Status | Running | Total Batches 5 | 57 % | Remaining Time 07:04 | Elapsed 7 h 51 m | Estimated Total 14 h 55 m | Processed 2,011 | Completed 1,532 | Failed 42 | Total 3,721 | STAT 96 | Not tested 437 (세 카드 같음)
  - Inventory Status: Insufficient 3 | Low 3 (세 카드 같음)
  - Waste Bin/Bottle Status: Full 3 | Almost Full 3 (세 카드 같음)
  - Instrument Status: Ready | Running | Paused | Error — 카드 1 `- 7 1 1`, 카드 2 `1 3 - -`, 카드 3 `1 3 - -`
  - Instrument Info (Unit: ea): Sample Storage | Consumable Storage | Sample Pre-treatment | High-throughput Extraction | Flexible Extraction | PCR Setup | Plate Sealing | Universal PCR — 카드 1 `1 1 2 3 - 1 1 6`, 카드 2 `1 1 1 1 1 1 1 1`, 카드 3 `1 1 3 2 2 2 1 7`
- 화면 높이: 기획 프레임 1347, 장비 카드의 Instrument Info가 1080 아래(1040 ~ 1225)까지 이어짐

### 사용 컴포넌트

Description (18), Description Number (10), Status (9), Divider (9), Interface/Pencil_Outlined (3), layout/spacing (3), Frame (1), Component 4 (1)

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

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

없음 (`Dashboard-all_asis` 페이지에 TI-ADS 케이스 프레임 없음)
