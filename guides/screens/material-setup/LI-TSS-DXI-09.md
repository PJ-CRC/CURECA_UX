---
cid: LI-TSS-DXI-09
pair_cid:
tl_relation: 단독
title: Tub Cap Refill
path: Material Setup > Load Materials > Tub Cap Refill
type: Popup
version: 2.0
date: 2026-06-15
author: BREX
service_mode: [Console Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8313-140315
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-DXI-09 Tub Cap Refill

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: Console Mode. LI-TSS-DXI의 [Refill Tub Cap]으로 여는 Popup. Prep Consumable Storage Trolley에 있는 재사용 Tub의 Spare Cap 보충을 확인
- 관련 정책: POL-LOD-004
- 호출하는 화면: MS_Confirm_022
- 다른 프레임: 세부 정의 [8313:140479](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8313-140479) (항목 N개 Case, Module 4대 이상 Case)
- 취소선(제거됨): 3 "Tray section" (→ slot)

## 기존 화면

### 화면 글자

- Tub Cap Refill
- (Module Chip) Prep consumable storage (1) | Prep consumable storage (2) | Prep consumable storage (3)
- Refill locations | Confirm all refills
- Spare caps (이미지)
- PBS Tub | 6F l E1 | Confirm refill
- Saline Tub | 5F l B2 | Confirm refill
- LB Tub (Prep) | 3F l D2 | Confirm refill
- LB Tub | 1F l A1 | Confirm refill
- Tub Frame | 1F l C1 | Confirm refill
- Open the module door and refill the Tub Spare Caps in the trolley. / After refilling, click [Confirm Refill].

### 사용 컴포넌트

layout/spacing (7), Square (6), Description Number (4), Chip/Fill (3), Popup/Data Popup (2), Divider (1), Tool Tip/Default (1)

### 디스크립션 (원문)

#### 1. 모듈 영역

- 노출 조건 : 모듈 N대인 경우 노출
  - 모듈 1대인 경우, 해당 영역 미노출
- (1-1) 모듈 Chip
  - 노출 : 설치된 모든 Prep consumable storage 모두 노출
  - 출력: 모듈 인덱스 출력
  - 정렬 : 모듈명 오름차순 (좌→우)
  - 디폴트 : 모듈명 (1) 노출

#### 2. [Confirm all refills] 버튼

- 활성화 조건 :
  - ③ 목록에서 [Confirm refill] 활성화된 항목 1개 이상인 경우, 활성화
- 선택 시 → MS_Confirm_022 노출
  - OK 선택 시 → 해당 모듈(or 모듈 인덱스) Cap refill 완료 & 해당 버튼 비활성화

#### 3. 목록

- 노출 : 아래 조건을 모두 만족한 항목 노출
  - 해당 모듈에 적재된 Tub 항목이 있는 경우
  - ‘재사용 가능 조건 = Y’인 항목인 경우
- 출력 : Tub명 / Trolley floor / Tray ~~section~~ slot 출력
- 정렬 : Trolley floor 내림차순
  - 단, Trolley floor가 동일할 경우, Tray ~~section~~ slot 오름차순 정렬
- (3-1) [Confirm refill] 버튼
  - 디폴트 : 활성화
  - 선택 시 → MS_Confirm_022 노출
    - OK 선택 시 → 해당 모듈(or 모듈 인덱스) Cap refill 완료 & 해당 버튼 비활성화

### 세부 정의 (원문)

8313:140479 "LI-TSS-DXI-09 / 세부정의"

- Tub Cap 보충 필요 항목 N개인 경우 노출 Case: Prep consumable storage (1)·(2)·(3) / Refill locations | Confirm all refills / PBS Tub 6F l E1, Saline Tub 5F l B2, LB Tub (Prep) 3F l D2, LB Tub 1F l A1, Tub Frame 1F l C1 각 Confirm refill / Open the module door and refill the Tub Spare Caps in the trolley. After refilling, click [Confirm Refill].
- 모듈 대수 4대 이상인 경우 노출 Case: Prep consumable storage (1) | (2) | (3) | (3) / Refill locations | Confirm all refills / Spare caps / PBS Tub 6F l E1 Confirm refill

### 케이스

- 항목 N개, Module 4대 이상: 세부 정의 8313:140479

### 버전 메모

- v2.1.14 update / Tub Cap Refill 팝업 추가

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 표기 | "Prep consumable storage (1)" | Prep Consumable Storage (1) | `glossary/modules.csv` | 대기 |
| 2 | 디스크립션 | Module 대상이 "Prep consumable storage"인데 Tub은 Trolley(Unit)에 있음. 화면 문구 "refill the Tub Spare Caps in the trolley" | Prep Consumable Storage의 Trolley 기준임을 명시 | `glossary/module-units.csv` PrepConsumableStorage > Trolley | 대기 |
| 3 | 디스크립션 | 2 [Confirm all refills] OK 뒤 "해당 모듈(or 모듈 인덱스) Cap refill 완료" | 목록의 모든 항목 refill 완료 & 모든 버튼 비활성화 | 디스크립션 2 | 대기 |
| 4 | 디스크립션 | 3 "‘재사용 가능 조건 = Y’" 정의가 없음 | 재사용 가능 조건(Tub 최대 사용 횟수 등) 정의 위치 | `glossary/consumables.csv` 최대 사용 횟수, RGE-02 "Cap needed" | 대기 (확인 필요) |
| 5 | 화면 데이터 | 1F에 LB Tub, Tub Frame (1F는 빈 Tray 반환 전용 floor) | 디스크립션에 넣음: Tub는 어느 floor에 있든(1F 반환용 Tray에 돌아온 Tub 포함) 모두 Cap 보충 목록에 나옴. 화면 예시의 1F 줄은 그대로 둠 | 2026-11-03 사용자 답변 (MS1-a) | 대기 |
| 6 | 화면 | 위치 구분자 "6F l E1" (소문자 l) | "6F / E1" 또는 "6F > E1" 등 구분자 정함 | 화면 글자 | 대기 |
| 7 | 화면 | "Spare caps" (DXI-08은 v2.1.14에 "Spare Caps"로 바꿈), 버튼 "Confirm refill" / 문구 "[Confirm Refill]" | 대소문자 통일 | LI-TSS-DXI-08 버전 메모 | 대기 |
| 8 | 세부 정의 | 4대 이상 Case Chip "(3)"이 두 번 | (4) | 오타 | 대기 |
| 9 | 화면 | 닫기 버튼 없음. 1 디폴트 Chip 외 다른 Chip 선택 동작 정의 없음 | Popup 닫기, Chip 선택 시 목록 갱신 정의 | 화면 글자 | 대기 (확인 필요) |
| 10 | 표기 | "모듈", "Tub명" | Module, Tub 이름 | `glossary/terms.csv` | 대기 |
| 11 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.14 | | Tub Cap Refill 팝업 추가 | BREX | Figma 버전 메모 |
