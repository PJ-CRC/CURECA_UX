---
cid: LI-TSS-RGE-01
pair_cid:
tl_relation: 단독
title: View Trolley Info
path: Material Setup > View Trolley Info > Scan the trolley (IA 미등록)
type: Page
version: 2.1
date: 2026-09-11
author: BREX
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: [IA 미등록]
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7507-128693
figma_region: 2.1 2차
---
# LI-TSS-RGE-01 View Trolley Info (Scan the trolley)

> 기존 화면(작업방 Material Setup 2.1(2차) 페이지, 2.1 2차 영역, Ver 2.1)을 2026-11-03에 옮긴 것입니다. SH2-MS-얼럿 수정 테스트 페이지에는 이 CID가 없어 2차 페이지에서 옮겼습니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- **IA 미등록**: IA v1.15 이후 새로 추가된 화면 (`background/worklist.md`). 다음 IA 버전에서 CID·이름·Type 확인
- L-IOS 전용. Service Mode: 미정 (`policy/service-mode-matrix.csv`에 View Trolley Info 없음). 프레임 LNB는 Material Setup 아래 Empty Waste bin 다음에 View Trolley Info
- Consumable Trolley를 스캔하거나 목록에서 골라 남은 Consumable·Reagent와 재사용 안내를 보는 화면 (기획 프레임 2359px)
- 관련 정책: (정책 작성 전)
- 호출하는 화면: LI-TSS-RGE-02, Alert_027 (기존 카탈로그 ID)
- 다른 프레임: 없음 (같은 이름의 1920 디자인 프레임 7897:610794, 1280 프레임 8281:141900은 옮기지 않음)
- 영역: 2차 페이지 전체가 민트색 바 하나(1206:60909) 안에 있음 → 2.1 2차. 진행상태 "SB-Update : 2026.09.11 (컨펌 완료)"

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통. 이 프레임 LNB: Material Setup 아래 Group Lots | Prepare Carrier | Load Materials | Empty Waste bin | View Trolley Info)
- Prep consumable trolley | Consumable and reagent reuse guide
- Scan a consumable trolley or select one from the list.
- Select Trolley
- Select a consumable trolley below to view remaining quantities on the details page.
- Trolley name | Remaining slots
- Trolley001 | 10 case (Trolley002~006 같은 형식, 14·15·6·21·17 case)

### 사용 컴포넌트

Arrow/Chevron_Right (6), layout/spacing (4), Table (3), Description Number (2), Frame (1), System/Scroll Bar_Small (1)

### 디스크립션 (원문)

#### 1. 스캔 가능 항목

- Trolley
  - 스캔 Case: 소모품 Trolley
  - 스캔 Case 외, 스캔 시 → Alert_027 팝업 노출

#### 2. Select Trolley 영역

- 노출 조건 : 검체 or 빈 트롤리가 아닌 경우, 모두 노출
  - 빈 트롤리 : 매핑된 Tray data가 없는 항목
- 선택 시 → [LI-TSS-RGE-02] 화면 이동

### 케이스

- 없음

### 버전 메모

- v2.1.14 update / View Trolley Info 화면 추가

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | IA 미등록 (CID LI-TSS-RGE-01, 이름 View Trolley Info) | 다음 IA 버전에 CID·이름·Type·Service Mode 등록 | `background/worklist.md`, `ia/ia-screens.csv` | 대기 (확인 필요) |
| R02 | 알럿 | "Alert_027" (기존 카탈로그, MS_Alert_001과 같은 문구 "Invalid code for the current workflow.") | MS_Alert_001로. MS 목록 사용 화면에 RGE 추가 | `policy/alert-catalog-ms.csv` MS_Alert_001 (이전 ID Alert_027) | 대기 |
| R03 | 화면 | 목록 열 "Remaining slots", 값 "10 case" | 열 이름과 단위 통일 (RGE-02는 "N Cases" = Selectable 수) | LI-TSS-RGE-02 2-1 | 대기 (확인 필요) |
| R04 | 화면 | 상단 "Prep consumable trolley", "Consumable and reagent reuse guide"가 Tab인지 제목인지 디스크립션에 없음 | 정의 | 화면 글자 | 대기 (확인 필요) |
| R05 | 디스크립션 | 목록 정렬, 빈 목록 정의 없음 | 정의 | 디스크립션 2 | 대기 (확인 필요) |
| R06 | 화면 정보 | Service Mode 미정 (Material Setup 다른 메뉴는 TSS 또는 Console) | 확인 | `policy/service-mode-matrix.csv` | 대기 (확인 필요) |
| R07 | 표기 | "Empty Waste bin" (LNB), "검체", "소모품 Trolley", "트롤리", "팝업" | Empty Waste Bin, Sample, Consumable Trolley, Trolley, Popup | `glossary/terms.csv` | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.14 | | View Trolley Info 화면 추가 | BREX | Figma 버전 메모 |
