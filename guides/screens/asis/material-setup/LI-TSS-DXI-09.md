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
client_mode: [Console Mode]
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

> 기존 화면(기존 작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode. LI-TSS-DXI의 [Refill Tub Cap]으로 여는 Popup. Consumable Storage Trolley에 있는 재사용 Tub의 Spare Cap 보충을 확인
- 관련 정책: POL-LOD-004
- 호출하는 화면: MS_Confirm_022
- 다른 프레임: 세부 정의 [8313:140479](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8313-140479) (항목 N개 Case, Module 4대 이상 Case)
- 취소선(제거됨): 3 "Tray section" (→ slot)

## 기존 화면

### 화면 글자

- Tub Cap Refill
- (Module Chip) Consumable storage (1) | Consumable storage (2) | Consumable storage (3)
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
  - 노출 : 설치된 모든 Consumable storage 모두 노출
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

- Tub Cap 보충 필요 항목 N개인 경우 노출 Case: Consumable storage (1)·(2)·(3) / Refill locations | Confirm all refills / PBS Tub 6F l E1, Saline Tub 5F l B2, LB Tub (Prep) 3F l D2, LB Tub 1F l A1, Tub Frame 1F l C1 각 Confirm refill / Open the module door and refill the Tub Spare Caps in the trolley. After refilling, click [Confirm Refill].
- 모듈 대수 4대 이상인 경우 노출 Case: Consumable storage (1) | (2) | (3) | (3) / Refill locations | Confirm all refills / Spare caps / PBS Tub 6F l E1 Confirm refill

### 케이스

- 항목 N개, Module 4대 이상: 세부 정의 8313:140479

### 버전 메모

- v2.1.14 update / Tub Cap Refill 팝업 추가
