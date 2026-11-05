---
cid: LI-TSS-PSI
pair_cid:
tl_relation: 단독
title: Prepare Carrier
path: Material Setup > Prepare Carrier
type: Page
version: 2.0
date: 2026-06-15
author: BREX
service_mode: [TSS Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-397634
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI Prepare Carrier

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode
- 관련 정책: POL-MAT-001, POL-MAT-008, POL-MAT-010
- 호출하는 화면: LI-TSS-PSI-SAM, LI-TSS-PSI-LCR, LI-TSS-PSI-01 (Load PK/IC Tubes, Load PCR Reagents), "LI-TSS-PSI-LMM" (IA에 없는 CID, IA 첫 화면은 LI-TSS-PSI-LMM-01)
- 다른 프레임: [8073:397931](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-397931) (Load PCR Reagents 흐름), [8073:397511](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-397511) (Load MM Tubes 흐름). 세 프레임의 글자·디스크립션이 같음. 주 프레임은 Load PK/IC Tubes 흐름

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Select a guide for setting up materials into the carrier
- (이미지 버튼) Samples | Consumable and Reagent | Load PK/IC Tubes | PCR reagents | MM Tube
- (버튼 이름) Load Samples into Trolley | Load Consumables and Reagents into Trolley | Load PK/IC Tubes | Load PCR Reagents | Load MM Tubes

### 사용 컴포넌트

Description Number (6), Frame (1)

### 디스크립션 (원문)

#### 1. Prepare Carrier

- 하위 메뉴 선택 시 → 해당 화면으로 이동
- 1-1 Load Samples into Trolley
  - 선택 시 → [LI-TSS-PSI-SAM] 화면으로 이동
- 1-2 Load consumables and reagents
  - 선택 시 → [LI-TSS-PSI-LCR] 화면으로 이동
- 1-3 Load PK/IC Tubes
  - 선택 시 → [LI-TSS-PSI-01] 팝업 노출
- 1-4 Load PCR Reagents
  - 선택 시 → [LI-TSS-PSI-01] 팝업 노출
- 1-5 Load MM Tubes
  - 선택 시 → [LI-TSS-PSI-LMM] 화면으로 이동

### 케이스

- 없음

### 버전 메모

- 없음

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 1-5 이동 대상 "[LI-TSS-PSI-LMM]" | IA에 없는 CID. LI-TSS-PSI-LMM-01로 | `ia/ia-screens.csv` | 대기 |
| R02 | 디스크립션 | 1-2 Load consumables and reagents는 LI-TSS-PSI-LCR로 바로 감. 그런데 LCR-01-01·01-03은 "[LI-TSS-PSI-01] > trolley 선택 시 노출"이고, Select Trolley 프레임이 LCR 흐름에도 있음 | 디스크립션에 넣음: Load Consumables and Reagents에 들어가면 Select Trolley Popup(LI-TSS-PSI-01)이 먼저 뜸. Sample Trolley를 고르면 그 Sample 기준으로 필요한 Consumable·Reagent 개수를 계산해 보여 주고, 사용자는 그 개수를 보고 Tray를 구성함. 고르기는 안내용이며 데이터 연결은 생기지 않음 | 2026-11-03 사용자 답변 (MS2) | 대기 |
| R03 | 화면 | 이미지 버튼 이름 "Samples", "Consumable and Reagent", "PCR reagents", "MM Tube"와 버튼 이름 "Load …"가 섞임 | IA 이름(Load Samples into Trolley 등)으로 통일 | 화면 글자, `ia/ia-screens.csv` | 대기 |
| R04 | 디스크립션 | 1-2 "Load consumables and reagents" | Load Consumables and Reagents into Trolley | `ia/ia-screens.csv` | 대기 |
| R05 | 화면 정보 | 경로 "TSS > Prepare Carrier" | Material Setup > Prepare Carrier ("TSS"는 Service Mode 이름 단독 표기) | `ia/ia-screens.csv`, `glossary/terms.csv` Service Mode | 대기 |
| R06 | 표기 | "팝업" | Popup | `glossary/terms.csv` | 대기 |
| R07 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | 화면 정보 기준 | BREX | Figma 화면 정보 |
