---
cid: LI-TSS-WBM-P
pair_cid:
tl_relation: 단독
title: Confirm Empty
path: Material Setup > Empty Waste Bin > Confirm Empty
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=5026-159372
figma_region: 2.1 2차
---
# LI-TSS-WBM-P Confirm Empty

> 기존 화면(기존 작업방 Material Setup 2.1(2차) 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-03에 옮긴 것입니다. SH2-MS-얼럿 수정 테스트 페이지에는 이 CID가 없어 2차 페이지에서 옮겼습니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode. LI-TSS-WBM의 [Confirm Empty]로 여는 Popup. Module별 Waste Bin·Liquid Waste Bottle을 비웠음을 확인해 적재율을 리셋
- 관련 정책: POL-LOD-005
- 호출하는 화면: Confirm_021 (기존 카탈로그 ID, LI-IVT-05-T와 공용)
- 주 프레임: "표준형_로체시스템즈" 줄 5026:159372 (Confirm Empty Popup)
- 다른 프레임 (이름은 LI-TSS-WBM-P지만 내용은 Door Control Popup):
  - [5050:422892](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=5050-422892) "표준형_로체시스템즈" 줄: Door Control / Sample Pre-treatment (1)~(3) Door | Closed | Unlock, Unlock all doors, "Pausing for door unlocking. Please wait.", "* The door will be automatically locked 5 seconds after it is closed."
  - [5127:123497](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=5127-123497) "맞춤형_단디메카(재단용)" 줄: 위와 같고 Door가 "Door (Rear)"
  - 두 프레임의 디스크립션은 아래 "다른 프레임 디스크립션"에 옮김
- 영역: 2차 페이지 전체가 민트색 바 하나(1206:60909) 안에 있음 → 2.1 2차

## 기존 화면

### 화면 글자

- Confirm Empty
- Sample Pre-treatment (드롭다운) | Confirm All Empty
- Sample Pre-treatment (1): Waste Bin (Upper) | Confirm Empty / Liquid Waste Bottle (Upper) | Confirm Empty / Waste Bin (Lower) | Confirm Empty / Liquid Waste Bottle (Lower) | Confirm Empty
- Sample Pre-treatment (2), Sample Pre-treatment (3): 같은 구성
- (뒤 화면 LI-TSS-WBM 글자는 생략)

### 사용 컴포넌트

Button/Tertiary_1Button_36 (10), Tool Tip/Default (8), Interface/Setting_fill (4), Divider (4), Description Number (4), Popup/Data Popup (2), layout/spacing (2), Interface/Info_Circle_Solid (1), Button/Primary_1Button_52 (1), Frame (1), Dropdown 48/Default (1), Button/Secondary_1Button_48 (1), System/Scroll Fog (1)

### 디스크립션 (원문)

#### 1. 모듈 항목 드롭다운

- 선택 시, 아래 모듈 노출
  - All
  - Sample preparation
  - High-throughput Extraction
  - Flexible Extraction
  - PCR Setup
  - Plate Sealing
  - Universal Pcr
- 정렬 : 위 모듈 노출순으로 정렬
  - 단, 선택값이 있을 경우, 선택값이 최상단 위치

#### 2. Confirm All Empty 버튼

- 선택 시 → Confirm_021 팝업 노출
  - OK 선택 시, 아래 정의에 따름
    - ㄴ 활성화된 모든 Confirm Empty 버튼 비활성화
    - ㄴ 페기함 리셋 & 팝업 닫힘

#### 3. 목록

- 노출 : ① 드롭다운에서 선택된 모듈의 인덱스 모두 노출
- 정렬 : 모듈 인덱스 오름차순 정렬

#### 4. Confirm Empty 버튼

- 선택 시 → Confirm_021 팝업 노출
  - OK 선택 시 → 해당 페기함 리셋

### 세부 정의 (원문)

다른 프레임 디스크립션 (5050:422892, 5127:123497 같음)

#### 1. 목록

- 대상 모듈 : Sample preparation
- 목록 정의: Waste bin을 꺼낼 수 있는 door만 목록 노출
  - 로체: Waste bin을 보유한 분주 장비 door 노출
    - ㄴ 후면(Rear) door 미노출 (로체는 후면 door 없음)
  - 단디메카: 후면(Rear) door만 노출
    - ㄴ 상부 & 하부 도어 미노출 (Waste bin을 후면으로만 꺼냄)

### 케이스

- 맞춤형_단디메카(재단용) Door Control: 5127:123497

### 버전 메모

- v2.1.06 update / Empty Waste Bin 메뉴 추가 (세 프레임 같음)
