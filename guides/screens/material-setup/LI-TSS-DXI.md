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
service_mode: [Console Mode]
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

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: Console Mode. 장비 배치도에서 Door 영역을 눌러 Door를 열고, Storage QR code를 스캔해 Storage를 열어 적재 가이드 화면으로 감
- 관련 정책: POL-MAT-001, POL-LOD-002
- 호출하는 화면: LI-INS-01-P (Door control), LI-TSS-DXI-01 ~ LI-TSS-DXI-09, MS_Alert_026
- 다른 프레임: 없음. 공통 정의 프레임 8313:138747은 LI-TSS-DXI-01에 옮김

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Select a task to initiate Drawer Loading | Please scan the QR code in area.
- View guide
- (범례) Unlock | QR code — Touch the green area to open the module door. / Scan the blue area to open the storage unit.
- (장비 배치도) Prep Consumable Storage | Sample Preparation | High-throughput Extraction | Flexible Extraction | Sample Storage | PCR Setup | Plate Sealing | Universal Pcr
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

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 정보 | Ver 2.0 (2026-06-15), 경로 "TSS > Load Materials" | 버전 메모(v2.1.14까지) 반영 Ver. 경로 Material Setup > Load Materials (Load Materials는 Console Mode) | 버전 메모, `policy/service-mode-matrix.csv` | 대기 |
| 2 | 화면 | 제목 "Select a task to initiate Drawer Loading" | Drawer는 Unit 이름. Load Materials 화면 목적에 맞는 문구로 | `glossary/terms.csv` Drawer | 대기 (확인 필요) |
| 3 | 화면 | "Universal Pcr" | Universal PCR | `glossary/modules.csv` | 대기 |
| 4 | 디스크립션 | Storage 이름이 "STAT storage", "Plate sealing storage" 등 소문자·임의 이름 | Unit UI 표기: STAT Storage, Cold Storage (Plate Sealing), MB Tube Storage, Buffer Cartridge Storage 등 | `glossary/module-units.csv` | 대기 |
| 5 | 디스크립션 | 6 "Plate sealing storage" → DXI-06 (Cold Storage). Sealer Film Storage는 7 버튼(Load Sealing Film)으로 감 | 배치도에서 Sealer Film Storage QR 스캔 시 동작 정의 | `glossary/module-units.csv` PlateSealing | 대기 (확인 필요) |
| 6 | 디스크립션 | Prep Consumable Storage, Sample Storage, Universal PCR 영역 스캔 시 정의 없음 | MS_Alert_001은 넣지 않음. MS 목록에 명시한 경우에만 적용 (2026-11-03 사용자 답변 MS4) | `policy/alert-catalog-ms.csv` MS_Alert_001, 2026-11-03 사용자 답변 (MS4) | 대기 |
| 7 | 디스크립션 | 2 STAT storage가 "Sample Preparation" 모듈에 있는데 제목에 모듈 이름 없음 | Sample Preparation > STAT Storage | `glossary/module-units.csv` | 대기 |
| 8 | 디스크립션 | "메뉴얼", "메세지" | 매뉴얼, 메시지 | 맞춤법 | 대기 |
| 9 | 표기 | "소모품 및 시약", "Toast 팝업", "툴팁" | Consumable 및 Reagent, Toast, Tooltip | `glossary/terms.csv` | 대기 |
| 10 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | 디스크립션 수정 (빨간 텍스트 & 취소선) | BREX | Figma 버전 메모 |
| 2.1.06 | | Door control 기능, Film 적재 기능 추가 | BREX | Figma 버전 메모 |
| 2.1.12 | | Buffer Cartridge Cap 보충 (Confirm 버튼 추가) | BREX | Figma 버전 메모 |
| 2.1.14 | | Refill Tub Cap 버튼 추가 | BREX | Figma 버전 메모 |
