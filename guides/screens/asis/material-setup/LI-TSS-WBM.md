---
cid: LI-TSS-WBM
pair_cid:
tl_relation: 단독
title: Empty Waste Bin
path: Material Setup > Empty Waste Bin
type: Page
version: 2.1
date: 2026-06-15
author: BREX
client_mode: [Console Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=5026-157684
figma_region: 2.1 2차
---
# LI-TSS-WBM Empty Waste Bin

> 기존 화면(기존 작업방 Material Setup 2.1(2차) 페이지, 2.1 2차 영역, Ver 2.1)을 2026-11-03에 옮긴 것입니다. SH2-MS-얼럿 수정 테스트 페이지에는 이 CID가 없어 2차 페이지에서 옮겼습니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode. 장비 배치도에서 Door·Storage를 열고 [Confirm Empty]로 LI-TSS-WBM-P를 엶
- 관련 정책: POL-MAT-001, POL-LOD-005
- 호출하는 화면: LI-INS-01-P (Door control), LI-TSS-WBM-P, Alert_034 (기존 카탈로그 ID)
- 주 프레임: "표준형_로체시스템즈" 줄 5026:157684
- 다른 프레임: [5134:123804](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=5134-123804) "맞춤형_단디메카(재단용)" 줄 (디스크립션 같음, 배치도의 Unlock·QR 개수만 다름)
- 영역: 2차 페이지 전체가 민트색 바 하나(1206:60909) 안에 있음 → 2.1 2차. 진행상태 "SB-Update : 2026.09.28(컨펌 완료)"

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통. 이 프레임 LNB: Material Setup 아래 Group Lots | Prepare Carrier | Load Materials | Empty Waste Bin)
- Select the unit to empty the waste bin. | Please scan the QR code in area.
- View guide
- (범례) Unlock | QR code — Touch the green area to open the module door. / Scan the blue area to open the storage unit.
- (장비 배치도) Consumable Storage | Sample Pre-treatment | High-throughput Extraction | Flexible Extraction | Sample Storage | PCR Setup | Plate Sealing | Universal Pcr
- (배치도 위) Unlock 3개 | QR 4개
- (Toast) The scanned storage unit has been opened.
- Empty the waste bin, then press [Waste Bin] to confirm. | Confirm Empty

### 사용 컴포넌트

Tool Tip/Default (8), Description Number (4), Interface/Setting_fill (3), Interface/Info_Circle_Solid (1), Button/Primary_1Button_52 (1), Frame (1), Toast (1)

### 디스크립션 (원문)

#### 1. Door 영역 선택 시

- [LI-INS-01-P] 노출
  - 정의: 관련 기능 Instrument > [LI-INS-01-P] 정의에 따름
- QR code 영역 스캔 시
  - 정상: 해당 Storage unit 열림 & (1-1) 토스트 팝업 노출
  - 오류: DX storage 스캔 시, Storage 내부에서 소모품 및 시약이 이동 중인 경우
    - ㄴ Alert_034 노출
    - ㄴ 세부 판단 기준은 장비 내부 로직에 따름

#### 2. QR code 툴팁

- 선택 시 → 툴팁 메세지 & 이미지 노출

#### 3. Waste Bin 버튼

- 선택 시 → [LI-TSS-WBM-P] 팝업 노출

### 케이스

- 맞춤형_단디메카(재단용): 5134:123804

### 버전 메모

- v2.1.06 update / Empty Waste Bin 메뉴 추가
