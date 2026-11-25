---
cid: LI-TSS-CMP-01
pair_cid:
tl_relation: 단독
title: Select positions to delete
path: Material Setup > (공통) Select positions to delete
type: Popup
version: 2.1.03
date: 2026-08-21
author: BREX
client_mode: [Console Mode, MS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-133612
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-CMP-01 Select positions to remove (Remove 공통 Popup)

> 기존 화면(기존 작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.1.03)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Material Setup 각 적재 화면의 [Remove]에서 여는 공통 Popup (IA 비고 "Material Setup > Reset 화면 공통 사용 팝업"). IA 위치는 Group Lots > Group Universal Cartridge Kit > Scan for Lot grouping 아래
- L-IOS Client Mode: MS Mode(Load Samples into Trolley)와 Console Mode(Group Lots, Prepare Carrier의 Consumable·Reagent 준비, Load Materials) 양쪽에서 씀
- 관련 정책: POL-MAT-004, POL-MAT-010
- 호출하는 화면: MS_Confirm_023 (세부 정의는 기존 Confirm_006으로 적음), MS_Alert_033 (MS 목록상 MS_Confirm_023 다음에 노출, 디스크립션에는 없음)
- 부르는 화면: LI-TSS-LTG-01-01, LI-TSS-LTG-02-01, LI-TSS-PSI-SAM-01-03, LI-TSS-PSI-SAM-02-02, LI-TSS-PSI-SAM-03-02, LI-TSS-PSI-LCR-01-03, LI-TSS-PSI-LCR-02-02, LI-TSS-PSI-PKI-03, LI-TSS-PSI-LPR-03, LI-TSS-DXI-01, LI-TSS-DXI-02, LI-TSS-DXI-04, LI-TSS-DXI-06
- 주 프레임: Load Tray into Trolley(LCR-02) 흐름의 프레임. 디스크립션이 다른 프레임과 같고 Trolley 1F 규칙 한 줄이 더 있음
- 다른 프레임 (모두 Ver 2.1.03, 디스크립션은 2 "단, Trolley 1F…" 줄 외에 같음):

| 흐름 | 프레임 | 세부 정의 프레임 | 선택 영역 | {target} (Confirm 문구) |
| --- | --- | --- | --- | --- |
| Group Lots (LTG-01-01, LTG-02-01) | [8440:141472](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8440-141472) | 8440:141617 | EB tub, MB tube, PK tube / PCR box, IC tube | reagents |
| Load Samples into Socket (SAM-01-03) | [8011:131866](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-131866) | 8011:132110 | Socket hole (G10 A1~F8 48개 등, socket type별 5종) | slots |
| Load Socket into Tray (SAM-02-02) | [8011:132675](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-132675) | 8011:132855 | Tray slot 10개 | slots |
| Load Tray into Trolley, Sample (SAM-03-02) | [8011:132946](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-132946) | 8011:133109 | Trolley floor 6F~1F | floors |
| Load Consumables and Reagents into Tray (LCR-01-03) | [8011:133197](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-133197) | 8011:133379 | Tray slot 10개 | slots |
| Load Tray into Trolley, Consumable (LCR-02-02) | 주 프레임 8011:133612 | 8011:133775 | Trolley floor 6F~1F | floors |
| Load PK/IC Tubes (PKI-03) | [8073:399067](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-399067) | 8073:399311 | Socket hole 48개 | slots |
| Load PCR Reagents (LPR-03) | [8073:400285](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-400285) | 8073:400425 | "A" First PCR box, "B" Second PCR box | slots |
| Load Materials (DXI-01, 02, 04, 06) | [8313:139077](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8313-139077) | 8313:139226 | Storage slot, Cold Storage는 MM tube socket·PCR reagent socket | slots |

## 기존 화면

### 화면 글자

- Select positions to remove
- Select All | (범례) Disabled | Unselected | Selected
- (Trolley floor) 6F | 5F | 4F | 3F | 2F | 1F
- Close | Remove

### 사용 컴포넌트

Marterial Setup/Trolley (6), Check/Line (5), layout/spacing (3), Description Number (3), Popup/Data Popup (2), Check Box/Square (1)
(다른 흐름: Marterial Setup/Tub·Tube·Tray·PCR box·Storage)

### 디스크립션 (원문)

#### 1. All 체크박스

- 선택 시 : ② 선택 가능 영역 모두 선택

#### 2. 선택 영역

- 디폴트 : 미선택
- 선택 시 :
  - ‘Unselected’ 선택 → ‘Selected’ 상태 변경
  - ‘Selected’ 선택 → ‘Unselected’ 상태 변경
- Disabled 정의 :
  - 적재하지 않은 영역인 경우, ‘Disabled’으로 표기
  - 단, ~~Trolley 1F 영역은 디폴트 Disabled 처리~~ Trolley 1F는 적재 데이터가 없을 때만 Disabled 처리 (LCR-02 프레임에만 있음)

#### 3. [Close] 버튼

- 선택 시 → 해당 팝업 닫힘
- [Remove] 버튼
  - 활성화 조건 : ② 영역 1개 이상 선택 시, 활성화
  - 선택 시 → MS_Confirm_023 팝업 노출

### 세부 정의 (원문)

- Group Lots (8440:141617)
  - [LI-TSS-LTG-01-01] > [Remove] 버튼 선택 시, 노출: EB tub / MB tube / PK tube
  - [LI-TSS-LTG-02-01] > [Remove] 버튼 선택 시, 노출: PCR box / IC tube
  - [LI-TSS-CMP-01] > [Remove] 버튼 선택 시, Confirm_006 노출: "Do you want to remove the 1 selected ~~sections~~ reagents?" (버튼 Close | OK와 Close | Remove가 겹쳐 있음)
- Load Samples into Socket (8011:132110)
  - Socket > [Remove] 버튼 선택 시, 노출: socket type별 선택 영역 5종 (A1~F8 48칸, A1~D6 24칸, A1~C4 12칸, A1~B3 6칸, A1~B2 4칸). 범례 Completed | Selected | Default | Disable
  - [LI-TSS-CMP-01] > [Remove] 버튼 선택 시, Confirm_006 노출: "Do you want to remove the 28 selected ~~sections~~ slots?"
- Load Socket into Tray (8011:132855), Load Consumables and Reagents into Tray (8011:133379)
  - [LI-TSS-CMP-01] > [Remove] 버튼 선택 시, Confirm_006 노출: "Do you want to remove the 4 selected (~~sections~~) slots?"
- Load Tray into Trolley (8011:133109, 8011:133775)
  - [LI-TSS-CMP-01] > [Remove] 버튼 선택 시, Confirm_006 노출: 6F~1F, "Do you want to remove the 3 selected (~~sections~~) floors?"
- Load PK/IC Tubes (8073:399311)
  - [LI-TSS-CMP-01] > [Remove] 버튼 선택 시, Confirm_006 노출: Socket hole 48칸, "Do you want to remove the 28 selected ~~sections~~ slots?"
- Load PCR Reagents (8073:400425)
  - [LI-TSS-CMP-01] > [Remove] 버튼 선택 시, Confirm_006 노출: "B" Second PCR box, "A" First PCR box, "Do you want to remove the 1 selected ~~sections~~ slots?"
- Load Materials (8313:139226)
  - [LI-TSS-DXI-01] > [Remove] 버튼 선택 시, 노출
  - [LI-TSS-DXI-02] > [Remove] 버튼 선택 시, 노출
  - [LI-TSS-DXI-04] > [Remove] 버튼 선택 시, 노출
  - [LI-TSS-DXI-06] > [Remove] 버튼 선택 시, 노출: MM tube socket, PCR reagent socket
  - ~~[LI-TSS-DXI-07] > [Remove] 버튼 선택 시, 노출~~ (Sealer 1, Sealer 2)
  - [LI-TSS-CMP-01] > [Remove] 버튼 선택 시, Confirm_006 노출: "Do you want to remove the 1 selected ~~sections~~ slots?"

### 케이스

- 없음 (흐름별 차이는 위 표와 세부 정의)

### 버전 메모

- v2.1.05 update / 선택 Remove 팝업 추가 / - 기존 Remove(reset) 기능 + 선택 Remove 기능 추가
