---
cid: LI-TSS-LTG-02-01
pair_cid:
tl_relation: 단독
title: Scan the IC tube
path: Material Setup > Group Lots > Group PCR Reagent Kit > Scan the IC tube
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8440-141001
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-LTG-02-01 Scan the IC tube

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Group PCR Reagent Kit Step 1
- 관련 정책: POL-INV-007 (`cids`에 있음), POL-MAT-002, POL-MAT-004, POL-MAT-009
- 호출하는 화면: LI-TSS-CMP-01 (Remove), LI-TSS-LTG-02-02, MS_Alert_002, MS_Alert_003, MS_Alert_004, MS_Alert_005, MS_Alert_006, MS_Alert_032
- 다른 프레임: 없음

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Group PCR Reagent Kit
- (Step 표시) STEP 1 Scan the IC tube | STEP 2 Confirm the IC setup. 같은 자리에 "Scan the Tub barcode | Scan the MB barcode | Scan the PK barcode | Confirm the mapping | STEP 3 | STEP 4" 글자가 겹쳐 남아 있음
- Scan the barcode on the PCR box. / Scan the IC tube barcode in the PCR box. / When Lot grouping is complete, click the [Done] button below.
- Group PCR Reagent Kit details | Remove
- PCR box | IC tube
- Done

### 사용 컴포넌트

Description Number (4), Divider (2), layout/spacing (2), Frame (1), Button/Tertiary_1Button_28 (1), Button/Secondary_1Button_44 (1)

### 디스크립션 (원문)

#### 1. PCR box, IC Tube 스캔

- 정상)
  - (1-1) 해당 항목 활성화
- 오류)
  - Case 1) 스캔한 reagent을 중복 스캔한 경우
    - ㄴ MS_Alert_002 팝업 노출
  - Case 2) 유효기간이 만료된 reagent을 스캔한 경우
    - ㄴ MS_Alert_003 팝업 노출
  - Case 3) Lot(라뜨) 구성을 완료한 PCR box or IC tube를 다시 스캔하는 경우
    - ㄴ MS_Alert_005 팝업 노출
  - Case 4) IC tube가 없는 PCR box를 스캔한 경우
    - ㄴ MS_Alert_006 팝업 노출
  - Case 5) 폐기된 reagent을 스캔한 경우
    - ㄴ MS_Alert_004 팝업 노출

#### 2. [Remove] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : (1-1) 항목 중 1개 이상 스캔 시, 활성화
- 선택 시 → [LI-TSS-CMP-01] 팝업 노출

#### 3. [Done] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : ① PCR box & IC tube 스캔 시, 활성화
- 선택 시 → 아래 항목 반영
  - PCR box & IC tube 데이터 저장
  - [LI-TSS-LTG-02-02] 화면으로 이동
- 저장 실패 시
  - ㄴ MS_Alert_032 팝업 노출

### 케이스

- 없음

### 버전 메모

- v2.1.12 update / Alert / Confirm 업데이트
- v2.1.05 update / 디스크립션 수정 항목 / - 빨간 텍스트 & 취소선 참고
- v2.1.06 update / Alert_036 팝업 추가 / - Lot(라뜨) 구성을 완료한 PCR box or IC tube를 다시 스캔 Case 추가

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | Ver 2.0 (2026-06-15) | 버전 메모(v2.1.12까지)를 반영한 Ver로 | 버전 메모 | 대기 (확인 필요) |
| R02 | 화면 | Step 표시에 Group Universal Cartridge Kit 쪽 Step 이름("Scan the Tub barcode", "Confirm the mapping" 등)이 겹쳐 남아 있음 | STEP 1 Scan the IC tube, STEP 2 Confirm the IC setup만 남김 | 화면 글자, `ia/ia-screens.csv` | 대기 |
| R03 | 알럿 | 버전 메모 "Alert_036 팝업 추가" (기존 ID) | 지금 디스크립션은 MS_Alert_005. 변경 이력에만 남김 | `policy/alert-catalog-ms.csv` MS_Alert_005 | 대기 |
| R04 | 알럿 | 스캔할 수 없는 코드(PCR box·IC tube 외) 스캔 케이스 없음 | MS_Alert_001은 넣지 않음. MS 목록에 명시한 경우에만 적용 (2026-11-03 사용자 답변 MS4) | `policy/alert-catalog-ms.csv` MS_Alert_001, 2026-11-03 사용자 답변 (MS4) | 대기 |
| R05 | 디스크립션 | 3 활성 조건 "①"로 가리킴. 1의 하위 번호는 (1-1) | (1-1)로 통일 | 디스크립션 | 대기 |
| R06 | 화면 정보 | 경로 "IC reagent Setup > Group PCR Reagent Kit" | Group Lots > Group PCR Reagent Kit > Scan the IC tube | `ia/ia-screens.csv` | 대기 |
| R07 | 표기 | "reagent을", "유효기간", "Lot(라뜨)", "팝업" | Reagent를, Expiration Date, Lot, Popup | `glossary/terms.csv` | 대기 |
| R08 | 정책 반영 | IC tube가 없는 PCR box는 Lot 없이 Load PCR Reagents에서 바로 적재 (MS_Alert_006 부제) | POL-INV-007과 맞는지 확인 | POL-INV-007, MS_Alert_006 | 대기 (확인 필요) |
| R09 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | 디스크립션 수정 (빨간 텍스트 & 취소선) | BREX | Figma 버전 메모 |
| 2.1.06 | | Alert_036 추가: Lot 구성을 완료한 PCR box·IC tube 재스캔 Case | BREX | Figma 버전 메모 |
| 2.1.12 | | Alert / Confirm 업데이트 | BREX | Figma 버전 메모 |
