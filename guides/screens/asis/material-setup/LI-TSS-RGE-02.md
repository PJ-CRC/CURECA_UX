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
client_mode: [Console Mode]
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

> 기존 화면(기존 작업방 Material Setup 2.1(2차) 페이지, 2.1 2차 영역, Ver 2.1)을 2026-11-03에 옮긴 것입니다. SH2-MS-얼럿 수정 테스트 페이지에는 이 CID가 없어 2차 페이지에서 옮겼습니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- **IA 미등록**: IA v1.15 이후 새로 추가된 화면 (`background/todo.md`). 다음 IA 버전에서 CID·이름·Type 확인
- L-IOS 전용. L-IOS Client Mode: Console Mode. Consumable Trolley의 floor·Tray slot별 남은 Consumable·Reagent와 재사용(Reuse) 상태, 처리 안내를 보는 화면 (기획 프레임 2359px)
- 관련 정책: (정책 작성 전)
- 호출하는 화면: LI-TSS-RGE-01 (Finish)
- 관련: LI-TSS-RGE-02-01의 Confirm_023 문구 질문은 `background/todo.md` 4절 "논의 대상으로 옮길 질문"에 있음(예전 `old-screen-fixes/LI-TSS-RGE-02-01.md` R01, 2026-11-17 옮김). LI-TSS-RGE-02-01 기획 프레임은 두 페이지에서 찾지 못해 이 파일로 옮기지 않음
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
