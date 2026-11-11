---
cid: LI-TSS-RGE-02
pair_cid:
tl_relation: 단독
title: View Trolley Info
path: Material Setup > View Trolley Info > Confirm the section (IA 미등록)
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7041-129292
figma_region: 2.1 2차
---
# LI-TSS-RGE-02 View Trolley Info (Confirm the section)

> 기존 화면(작업방 Material Setup 2.1(2차) 페이지, 2.1 2차 영역, Ver 2.1)을 2026-11-03에 옮긴 것입니다. SH2-MS-얼럿 수정 테스트 페이지에는 이 CID가 없어 2차 페이지에서 옮겼습니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- **IA 미등록**: IA v1.15 이후 새로 추가된 화면 (`background/worklist.md`). 다음 IA 버전에서 CID·이름·Type 확인
- L-IOS 전용. Service Mode: 미정. Consumable Trolley의 floor·Tray slot별 남은 Consumable·Reagent와 재사용(Reuse) 상태, 처리 안내를 보는 화면 (기획 프레임 2359px)
- 관련 정책: (정책 작성 전)
- 호출하는 화면: LI-TSS-RGE-01 (Finish)
- 관련: `screen-fixes/LI-TSS-RGE-02-01.md` (Confirm_023 문구 반영 대기 목록). LI-TSS-RGE-02-01 기획 프레임은 두 페이지에서 찾지 못해 이 파일로 옮기지 않음
- 다른 프레임: 없음 (1920 디자인 프레임 8217:518587, 1280 프레임 8299:129129는 옮기지 않음)
- 영역: 2차 페이지 전체가 민트색 바 하나(1206:60909) 안에 있음 → 2.1 2차

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통. 이 프레임 LNB: Material Setup 아래 Group Lots | Prepare Carrier | Load Materials | View Trolley Info — Empty Waste Bin 없음)
- Check the trolley floor and tray section
- Review available reagents, consumables, and corresponding handling guide.
- PK/IC Tube handling guide (2곳)
- (범례) Status: Empty | Selectable | Selected / Slot Status: Empty | Used | Usable(PK) | Usable(IC)
- Trolley floor | Tray slot | Selected floor : 4F
- (Trolley floor 목록) 6F | 5F | 4F (N Cases) | 3F | 2F (Case) | 1F (Cases)
- (Tray slot 그리드) A1~F8
- (slot 상세 예시) 96-DWP Remaining: 1 ea | PK/IC Tube Remaining: 48 rxns/72 rxns | Tub (D1 Cap needed, D2) Remaining: 90 rxns | ASL Standard Tube Remaining: 12 rxns | Stool Swab Remaining: 14 ea
- (안내) The available PK/IC Tubes is displayed on the screen. / Remaining PK/IC Tubes is available for use. / Reconfigure the socket using an available PK/IC Tube. / Reload an available PK/IC Tube.
- Finish

### 사용 컴포넌트

layout/spacing (8), Description Number (7), Check Box/Square (3), Arrow/Chevron_Right (3), Popup/Data Popup (2), Divider (1), Label/Status/Square (1), Frame (1), Button/Secondary_1Button_44 (1)

### 디스크립션 (원문)

#### 1. Reuse Status 정의

- Empty : 사용 완료 or 해당 위치 적재 데이터가 없는 경우
- Selectable: 하위 Carrier가 모두 사용되지 않아 선택 가능한 경우
- Selected: ‘Selectable’를 선택한 경우

#### 2. Trolley floor

- 활성화 정의:
  - 스캔한 Trolley 중 ③ 항목=‘Selecetable’ 1개 이상인 경우, 활성화
- 디폴트: ‘Selectable’ floor 중 가장 높은 floor 자동 선택
- 선택 시:
  - 싱글 선택
  - Selected 값 변경
  - ③ 새로고침
- (2-1) ‘N’ Cases
  - N: ③ 항목=‘Selecetable’ 값 개수 노출

#### 3. Tray section

- 선택 시:
  - 싱글 선택
  - Selected 값 변경
  - (3-1) 영역 새로고침
- (3-2) Slot Status
  - Empty : 사용 완료 or 해당 위치 적재 데이터가 없는 경우
  - Usable : 잔여 수량 or 미사용 & 위치 데이터 존재 항목인 경우

#### 4. [Finish] 버튼

- 선택 시: [LI-TSS-RGE-01] 화면으로 이동

### 케이스

- 없음

### 버전 메모

- v2.1.14 update / Refill Tub Cap 버튼 추가 / - Tub Cap Refill 팝업 추가 / 대소문자 변경 (spare caps → Spare Caps) / View Trolley Info 화면 추가 (이 프레임 오른쪽의 ver 상자. 앞 세 줄은 LI-TSS-DXI-08·09 내용)

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | IA 미등록 (CID LI-TSS-RGE-02, 이름 View Trolley Info, 경로 "Confirm the section") | 다음 IA 버전에 등록. 화면 이름을 RGE-01과 구분 | `background/worklist.md` | 대기 (확인 필요) |
| R02 | 표기 | "Tray section", 경로 "Confirm the section", 제목 "tray section" | Tray slot (다른 화면은 section → slot으로 바꿈) | LI-TSS-CMP-01 세부 정의, LI-TSS-DXI-09 3 | 대기 |
| R03 | 디스크립션 | "Selecetable" (2번) | Selectable | 오타 | 대기 |
| R04 | 디스크립션 | 1 Reuse Status(Empty / Selectable / Selected)와 3-2 Slot Status(Empty / Used / Usable(PK) / Usable(IC))가 다르고, 화면 범례의 "Used" 정의 없음 | 상태값 정리 후 `glossary/status-values.csv`에 넣을지 | 화면 글자, 디스크립션 | 대기 (확인 필요) |
| R05 | 화면 데이터 | "PK/IC Tube Remaining: 48 rxns/72 rxns", Tub "90 rxns", ASL Standard Tube | 품목 표 단위로 (PK Tube 96 rxns/tube, Tub 100 rxns/set 등). ASL Standard Tube는 품목 표에 없음 | `glossary/consumables.csv`, `glossary/pcr-reagents.csv` | 대기 (확인 필요) |
| R06 | 화면 | "PK/IC Tube handling guide" 2곳과 안내 문구 4줄의 동작(Popup인지) 디스크립션 없음 | 정의. LI-TSS-RGE-02-01이 이 Guide인지 확인 | 화면 글자, `screen-fixes/LI-TSS-RGE-02-01.md` | 대기 (확인 필요) |
| R07 | 문구 | "The available PK/IC Tubes is displayed", "Remaining PK/IC Tubes is available" | are | 문법 | 대기 |
| R08 | 화면 | LNB에 Empty Waste Bin이 없음 (RGE-01에는 있음) | LNB 통일 | LI-TSS-RGE-01 | 대기 |
| R09 | 화면 | "Cap needed" 표시(Tub) 조건 정의 없음 | LI-TSS-DXI-09 재사용 조건과 연결 | LI-TSS-DXI-09 3 | 대기 (확인 필요) |
| R10 | 화면 정보 | 오른쪽 ver 상자에 DXI-08·09 버전 메모가 함께 있음 | RGE 메모만 남김 | 버전 메모 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.14 | | View Trolley Info 화면 추가 | BREX | Figma 버전 메모 |
