---
cid: LI-TSS-PSI-LCR-01-03
pair_cid:
tl_relation: 단독
title: Scan loaded socket
path: Material Setup > Prepare Carrier > Load Consumables and Reagents into Trolley > Load Consumables and Reagents into Tray > Scan loaded socket
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-130025
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-LCR-01-03 Scan loaded consumables/reagents

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load Consumables and Reagents into Tray Step 3 (Consumable/Reagent 스캔 → Tray slot 스캔)
- 관련 정책: POL-MAT-002, POL-MAT-003, POL-MAT-004, POL-MAT-005, POL-MAT-007
- 호출하는 화면: LI-TSS-CMP-01 (Remove), LI-TSS-PSI-LCR-01-03-01 (Step 1. Guide), LI-TSS-PSI-LCR-01-04, MS_Confirm_010, MS_Confirm_011, MS_Alert_001, MS_Alert_003, MS_Alert_004, MS_Alert_016, MS_Alert_020, MS_Alert_021, MS_Alert_032
- 다른 프레임: 세부 정의 [8011:133851](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-133851) (LI-TSS-PSI-01 [Skip] Case, 화면 정보 패널 Ver 2.0)
- 취소선(제거됨): 화면 이름 "Scan loaded socket" (→ consumables/reagents), 1 오류 1 "중복 스캔 → MS_Alert_002", "작업 중인 Consumables/Reagents 외 다른 항목 스캔 → MS_Alert_016", 오류 2 "스캔한 tray 중복 스캔 → MS_Alert_002", 문구의 "location", "item"

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load Consumables and Reagents into Tray
- STEP 1 Check the consumables/reagents | STEP 2 Scan the tray | STEP 3 Scan loaded consumables/reagents | STEP 4 Confirm the tray
- Load consumables or reagents onto the rack (except DWP) and scan its QR code. / Scan the QR code on the tray ~~location~~ slot to load. / Place the rack on the tray with the barcode facing right. / Repeat steps 1–3 until your required quantity is loaded, then click [Done].
- Required Quantity | Remove
- Reagent | Consumable
- PBS Standard Tube 03/05 | Wide Bore Tip 01/03
- Saline Standard Tub 03/03 | 1000 μL Tip 03/05
- ASL Standard Tube 05/05 | 300 μL Tip 03/05
- PBS Tub 03/03 | Empty Standard Tube 05/05
- PK/IC(GI-BP) Tube 03/03 | 96-DWP 03/05
- PK/IC(GI-V) Tube 03/03 | Stool Swab 05/05
- (스크롤 영역) LB Tub (Prep) 00/05 | ASL Standard Tube 03/05 | LB DWP 00/05 | PBS Tub 00/05
- Step 1. Guide | Done

### 사용 컴포넌트

Description Number (5), Button/Secondary_1Button_44 (2), Frame (1), Button/Tertiary_1Button_28 (1), layout/spacing (1), Divider (1)

### 디스크립션 (원문)

#### 1. 적재 항목 스캔

- 정상) Toast 팝업 노출
  - 아래 세부정의 참고
  - Case 1) 이미 Tray에 적재된 소모품/시약을 스캔한 경우
    - ㄴ MS_Confirm_010 팝업 노출
  - Case 2) 이미 소모품/시약이 있는 Tray 내부 위치를 스캔한 경우
    - ㄴ MS_Confirm_011 팝업 노출
  - Case 3) 데이터가 있는 Tub frame을 스캔한 경우
    - ㄴ MS_Alert_021 팝업 노출
    - ㄴ 필요 수량을 다 채운 Tub이면 MS_Alert_020 노출
  - Case 4) 위치 스캔 전 다른 소모품/시약을 스캔한 경우
    - ㄴ 마지막에 스캔한 항목으로 교체 & Toast 팝업 노출
- 오류 1) Consumables or Reagents 스캔 시
  - ~~스캔한 Consumables or Reagents을 중복 스캔한 경우~~
    - ㄴ ~~MS_Alert_002 팝업 노출~~
  - ~~작업 중인 Consumables 외, 다른 Consumables 스캔한 경우~~
    - ~~ㄴ MS_Alert_016 팝업 노출~~
  - ~~작업 중인 Reagents 외, 다른 Reagents 스캔한 경우~~
    - ~~ㄴ MS_Alert_016 팝업 노출~~
  - 유효기간이 만료된 시약을 스캔한 경우
    - ㄴ MS_Alert_003 팝업 노출
    - ㄴ 빈 socket·Tub frame은 Step 1 스캔 시 노출
  - 폐기된 소모품/시약 스캔
    - ㄴ MS_Alert_004 팝업 노출
  - Trolley 선택 & 필요 목록 외 항목 스캔
    - ㄴ MS_Alert_001 팝업 노출
  - Trolley 선택 & 필요 수량 충족 항목 스캔
    - ㄴ MS_Alert_020 팝업 노출
    - ㄴ 빈 socket·Tub frame은 해당 종류가 모두 찼을 때 노출
    - ㄴ 일부만 찼으면 Step 1 스캔 때 노출
- 오류 2) Tray 내부 위치 스캔 시
  - ~~스캔한 tray 중복 스캔~~
    - ㄴ ~~MS_Alert_002 팝업 노출~~
  - 작업 중인 tray 외, 다른 tray의 내부 위치 스캔한 경우
    - ㄴ MS_Alert_016 팝업 노출
  - 소모품/시약보다 Tray 내부 위치를 먼저 스캔한 경우
    - ㄴ Toast 팝업 노출 : Scan the ~~item~~ consumable/reagent before scanning the tray ~~location~~ slot.

#### 2. Required Quantity

- 노출 정의 : [LI-TSS-PSI-01] > trolley 선택 시, 노출
- 소모품 및 시약 개수
  - 디폴트 : N/M
    - ㄴ 출력 : 적재 항목 스캔 & tray slot 스캔 수 / 필요 적재 항목 수
    - ㄴ 필요 적재 항목 수 → [LI-TSS-PSI-01] > trolley 선택에 따라 수치 변경
  - 카운팅 조건 :
    - 적재 항목 스캔 & tray slot 스캔 시, 카운팅 추가
    - Socket·Frame은 1개를 1개로 카운팅
    - 여러 Tray에 적재한 수량은 합산
    - [Done] 시 선택한 Trolley 몫으로 저장
    - Remove·이동 시 차감
- (2-1) [Remove] 버튼
  - 디폴트 : 비활성화
  - 활성화 조건 : 스캔한 소모품 & 시약 수 1개 이상 시, 활성화
  - 선택 시 → [LI-TSS-CMP-01] 팝업 노출
    - ㄴ Remove는 변경 예정으로 기록, [Done] 선택 시 반영

#### 3. [Done] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : (2-1) 활성화 조건과 동일
- 선택 시 → 아래 항목 반영
  - Tray & 하위 Socket 데이터 저장
  - [LI-TSS-PSI-LCR-01-04] 화면으로 이동
- 저장 실패 시
  - ㄴ MS_Alert_032 팝업 노출

#### 4. [Step 1. Guide] 버튼

- 선택 시 → [LI-TSS-PSI-LCR-01-03-01] 팝업 노출
- 데이터 없는 Socket/Frame 스캔 시
  - ㄴ 팝업 자동 노출

### 세부 정의 (원문)

8011:133851 "LI-TSS-PSI-LCR-01-03/ 세부정의"

- [LI-TSS-PSI-01] > [Skip] 버튼 선택 시, 노출 CASE 정의
  - (화면) Required Quantity 대신 "Number of filled ~~sections~~ slots in the tray" (02/12, 00/10) | Remove | Step 1. Guide | Done
  - 1 적재 항목 스캔: 정의 및 스캔 정상 or 오류 Case 위와 동일
    - 1-1 적재한 Socket 개수: 디폴트 : 0/10. 스캔한 tray slot 수 / 적재 가능한 tray slot 개수. 카운팅 조건 : Socket 스캔 & Tray 내부 스캔 시, 카운팅 추가
  - 2 Toast 팝업
    - Main text : The scan has been completed.
    - Sub text : Scanned [Type] - [UI 표기명] (N/M)
      - N/M : 스캔한 [UI 표기명]의 수량 / 필요한 [UI 표기명]의 수량
      - Consumable / Reagent 스캔 시, ‘수량+단위’ 필수 노출
        - ㄴ 소모품 표기 단위 : ea
        - ㄴ 시약 표기 단위 : ~~T~~ rxns
    - 노출 정의:
      - Case 1) Standard tube/Tub 항목 스캔 시
        - ㄴ Standard tube → Socket or Tube 스캔 시, 노출
        - ㄴ Tub → Frame or Tub 스캔 시, 노출
      - Case 2) Storage 입고 시, 스캔 항목 or Tray 스캔 시, 노출
    - (예시) The scan has been completed. / Scanned reagent - PBS Standard Tube (~~24T / 192T~~ 24 rxns / 192 rxns)
- Prep Consumable Storage 투입 항목에 따른 스캔 CASE 정의

| Type | UI 표기명 | Trolley 입고 시, 스캔 항목 |
| --- | --- | --- |
| Consumable | Wide Bore Tip | Tip Barcode |
| Consumable | 1000 μL Tip | Tip Barcode |
| Consumable | 300 μL Tip | Tip Barcode |
| Consumable | Empty Standard Tube | Socket |
| Consumable | 96-DWP | DWP Barcode |
| Consumable | Stool Swab | Stool Swab Barcode |
| Reagent | PBS Standard Tube | Socket |
| Reagent | Saline Standard Tube | Socket |
| Reagent | ASL Standard Tube | Socket |
| Reagent | Prelyser Standard Tube | Socket |
| Reagent | PBS Tub | Frame Barcode |
| Reagent | Saline Tub | Frame Barcode |
| Reagent | LB Tub (Prep) | Frame Barcode |
| Reagent | LB DWP | DWP Barcode |
| Reagent | LB Tub | Frame Barcode |
| Reagent | PK Tube | Socket |
| Reagent | IC(GI-BP) Tube | Socket |
| Reagent | IC(GI-V) Tube | Socket |
| Reagent | IC(RP-V) Tube | Socket |
| Reagent | IC(PB) Tube | Socket |
| Reagent | IC(STI-12) Tube | Socket |

### 케이스

- [Skip] Case: 세부 정의 8011:133851

### 버전 메모

- v2.1.05 update / 정책 변경으로 인한 수정 항목 / - Prep Consumable 투입 항목 추가 (PK/IC 정책 변경) / - 시약 부분 스크롤 기능 추가

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | IA | IA 이름 "Scan loaded socket", 화면 "Scan loaded consumables/reagents" (취소선으로 바꿈) | IA를 화면 이름으로 | `ia/ia-screens.csv` | 대기 (확인 필요) |
| 2 | 화면 정보 | Ver 2.0 (2026-06-15) | 버전 메모(v2.1.05)를 반영한 Ver로 | 버전 메모 | 대기 (확인 필요) |
| 3 | 디스크립션 | 1 Case 3 "데이터가 있는 Tub frame" → MS_Alert_021인데 "정상)" 아래에 있고, 같은 줄에 MS_Alert_020 | MS_Alert_021(Progress)과 MS_Alert_020(Error) 판단 순서 정리 | `policy/alert-catalog-ms.csv` MS_Alert_020·021 | 대기 (확인 필요) |
| 4 | 디스크립션 | [Skip]일 때 "Trolley 선택 & 필요 목록 외 항목"(MS_Alert_001)·"필요 수량 충족"(MS_Alert_020)이 생기지 않음을 적지 않음 | Skip이면 필요 목록·수량 제한 없음 명시 | LI-TSS-PSI-01 2 | 대기 |
| 5 | 디스크립션 | 3 [Done] "Tray & 하위 Socket 데이터 저장" | Tray & 하위 Consumable/Reagent (Socket·Frame·Rack) 데이터 저장 | 디스크립션 1 | 대기 |
| 6 | 디스크립션 | 세부 정의 1-1 "적재한 Socket 개수 0/10" | [Skip]이면 Tray slot 개수. "Socket"을 slot으로 | 세부 정의 | 대기 |
| 7 | 화면 데이터 | "Saline Standard Tub", "PK/IC(GI-BP) Tube"·"PK/IC(GI-V) Tube" | Saline Standard Tube. PK Tube와 IC Tube는 품목이 다르므로 세부 정의처럼 PK Tube, GI-BP IC 따로 (IC 이름은 `glossary/pcr-reagents.csv` 구성품 "GI-BP IC", "GI-V IC") | `glossary/consumables.csv`, `glossary/pcr-reagents.csv` | 대기 (확인 필요) |
| 8 | 화면 데이터 | 세부 정의 IC 이름 "IC(GI-BP) Tube", "IC(STI-12) Tube" | 구성품 이름 GI-BP IC, GI-V IC, RP-V IC, PB IC (STI-12 IC는 품목 표에서 확인) | `glossary/pcr-reagents.csv` | 대기 (확인 필요) |
| 9 | 화면 데이터 | 세부 정의 "ASL Standard Tube" | 품목 표에 없음 | `glossary/consumables.csv` | 대기 (확인 필요) |
| 10 | 정책 반영 | PK/IC Tube를 이 화면(Prep Consumable Trolley)과 Load PK/IC Tubes(LI-TSS-PSI-PKI) 양쪽에서 적재 | 두 경로의 관계 확인 (v2.1.05 "PK/IC 정책 변경") | 버전 메모, LI-TSS-PSI-PKI-03 | 대기 (확인 필요) |
| 11 | 문구 | 화면 "with the barcode facing right", 세부 정의 "QR code" | Barcode와 QR code 중 실제 표시에 맞게 | 화면 글자 | 대기 (확인 필요) |
| 12 | 표기 | "소모품/시약", "유효기간", "검체", "tray", "Toast 팝업" | Consumable/Reagent, Expiration Date, Sample, Tray, Toast | `glossary/terms.csv` | 대기 |
| 13 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | 정책 변경: Prep Consumable 투입 항목 추가 (PK/IC 정책 변경), Reagent 영역 스크롤 추가 | BREX | Figma 버전 메모 |
