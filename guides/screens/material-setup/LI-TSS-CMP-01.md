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
service_mode: [TSS Mode, Console Mode]
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

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.1.03)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Material Setup 각 적재 화면의 [Remove]에서 여는 공통 Popup (IA 비고 "Material Setup > Reset 화면 공통 사용 팝업"). IA 위치는 Group Lots > Group Universal Cartridge Kit > Scan for Lot grouping 아래
- Service Mode: TSS Mode(Group Lots·Prepare Carrier)와 Console Mode(Load Materials) 양쪽에서 씀
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

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 화면 이름 "Select positions to remove", 경로 "작성 예정 > Select positions to remove" | IA 이름 "Select positions to delete"와 통일 (Remove로 쓸지 IA를 고칠지) | `ia/ia-screens.csv` | 대기 (확인 필요) |
| R02 | 알럿 | 세부 정의 9개 프레임이 "Confirm_006 노출" | MS_Confirm_023 | `policy/alert-catalog-ms.csv` MS_Confirm_023 (이전 ID Confirm_006) | 대기 |
| R03 | 알럿 | 세부 정의 Confirm 예시 버튼이 Close/OK와 Close/Remove 두 벌로 겹쳐 있음 | MS_Confirm_023 버튼: Remove / Close | MS_Confirm_023 | 대기 |
| R04 | 알럿 | Remove 완료 알럿이 디스크립션에 없음 | MS_Confirm_023 [Remove] 뒤 MS_Alert_033 노출, 반영은 [Done] 시점 | MS_Confirm_023, MS_Alert_033 | 대기 |
| R05 | 디스크립션 | 3 안에 [Remove] 버튼이 번호 없이 들어 있음 | 4로 나눔 | 디스크립션 | 대기 |
| R06 | 디스크립션 | Trolley 1F Disabled 규칙이 LCR-02 프레임에만 있음. Sample Trolley(SAM-03) 프레임에는 없음 | Sample Trolley 1F는 적재 불가(MS_Alert_018)이므로 흐름별 규칙을 따로 적음 | 8011:132946, 8011:133612, MS_Alert_018 | 대기 (확인 필요) |
| R07 | 디스크립션 | 범례가 화면 "Disabled / Unselected / Selected"와 세부 정의 "Completed / Selected / Default / Disable" 두 벌 | 하나로 통일 | 세부 정의 8011:132110, 8073:399311 | 대기 (확인 필요) |
| R08 | 디스크립션 | DXI-03(MB Tube), DXI-05(Tip/PCR Plate)는 Remove 삭제("위치 스캔이 없어"), DXI-07은 취소선 | 부르는 화면 목록에서 뺌. DXI-03·05 화면의 [Remove] 버튼도 지움 | LI-TSS-DXI-03 2, LI-TSS-DXI-05 3 | 대기 |
| R09 | 디스크립션 | LMM(Load MM Tubes)에는 Remove가 없음 | 의도인지 확인 | LI-TSS-PSI-LMM-02 | 대기 (확인 필요) |
| R10 | 표기 | "팝업", "Disabled'으로" | Popup, Disabled로 | `glossary/terms.csv` | 대기 |
| R11 | 컴포넌트 | 컴포넌트 이름 "Marterial Setup/…" | Material Setup | 오타 | 대기 |
| R12 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.03 | 2026-08-21 | 화면 정보 기준 | BREX | Figma 화면 정보 |
| 2.1.05 | | 선택 Remove 팝업 추가 (기존 Remove(reset) 기능 + 선택 Remove 기능) | BREX | Figma 버전 메모 |
