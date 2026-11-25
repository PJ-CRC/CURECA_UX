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
client_mode: [Console Mode, MS Mode]
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

> 기존 화면(기존 작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode, MS Mode (Prepare Carrier 안에서 Console Mode는 Load Consumables and Reagents into Trolley · Load PK/IC Tubes · Load PCR Reagents · Load MM Tubes를, MS Mode는 Load Samples into Trolley만 씀)
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
