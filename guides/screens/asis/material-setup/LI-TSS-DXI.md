---
cid: LI-TSS-DXI
pair_cid:
tl_relation: 단독
title: Load Materials
path: Material Setup > Load Materials
type: Page
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8313-139649
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-DXI Load Materials

> 기존 화면(기존 작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode. 장비 배치도에서 Door 영역을 눌러 Door를 열고, Storage QR code를 스캔해 Storage를 열어 적재 가이드 화면으로 감
- 관련 정책: POL-MAT-001, POL-LOD-002
- 호출하는 화면: LI-INS-01-P (Door control), LI-TSS-DXI-01 ~ LI-TSS-DXI-09, MS_Alert_026
- 다른 프레임: 없음. 공통 정의 프레임 8313:138747은 LI-TSS-DXI-01에 옮김

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Select a task to initiate Drawer Loading | Please scan the QR code in area.
- View guide
- (범례) Unlock | QR code — Touch the green area to open the module door. / Scan the blue area to open the storage unit.
- (장비 배치도) Consumable Storage | Sample Pre-treatment | High-throughput Extraction | Flexible Extraction | Sample Storage | PCR Setup | Plate Sealing | Universal Pcr
- (배치도 위 버튼) Unlock 여러 개 | QR code 여러 개
- Load Sealing Film | Refill Cartridge Cap | Refill Tub Cap

### 사용 컴포넌트

Description Number (10), Tool Tip/Default (8), Arrow/Chevron_Right (2), Interface/Door (1), Interface/Info_Circle_Solid (1), Frame (1)

### 디스크립션 (원문)

#### 1. Door 영역 선택 시

- [LI-INS-01-P] 노출
  - 정의: 관련 기능 Instrument > [LI-INS-01-P] 정의에 따름
- QR code 영역 스캔 시
  - 정상: 해당 Storage 메뉴얼 화면으로 이동 & Toast 팝업 노출
    - ㄴ Toast 팝업 text : The scanned storage unit has been opened.
  - 오류: DX storage 스캔 시, Storage 내부에서 소모품 및 시약이 이동 중인 경우
    - ㄴ MS_Alert_026 노출
    - ㄴ 세부 판단 기준은 장비 내부 로직에 따름

#### 2. STAT storage

- 스캔 시 → [LI-TSS-DXI-01] 화면으로 이동

#### 3. High-throughput Extraction storage

- 스캔 시 → [LI-TSS-DXI-02] 화면으로 이동

#### 4. Flexible Extraction storage

- MB Tube storage 스캔 시 → [LI-TSS-DXI-03] 화면으로 이동
- Buffer Cartridge storage 스캔 시 → [LI-TSS-DXI-04] 화면으로 이동

#### 5. PCR Setup storage

- 스캔 시 → [LI-TSS-DXI-05] 화면으로 이동

#### 6. Plate sealing storage

- 스캔 시 → [LI-TSS-DXI-06] 화면으로 이동

#### 7. Load Sealing Film

- 선택 시 → [LI-TSS-DXI-07] 화면으로 이동

#### 8. QR code 툴팁

- 선택 시 → 툴팁 메세지 & 이미지 노출

#### 9. Refill Cartridge Cap

- 선택 시 → [LI-TSS-DXI-08] 화면으로 이동

#### 10. Refill Tub Cap

- 선택 시 → [LI-TSS-DXI-09] 화면으로 이동

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / 디스크립션 수정 항목 / - 빨간 텍스트 & 취소선 참고
- v2.1.06 update / Load Materials / - Door control 기능 & Film 적재 기능 추가
- v2.1.12 update / Buffer Cartridge Cap 보충(컨펌 버튼 추가)
- v2.1.14 update / Refill Tub Cap 버튼 추가
