---
cid: LI-TSS-LTG-01-01
pair_cid:
tl_relation: 단독
title: Scan for Lot grouping
path: Material Setup > Group Lots > Group Universal Cartridge Kit > Scan for Lot grouping
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8440-140847
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-LTG-01-01 Scan for Lot grouping

> 기존 화면(기존 작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode. Group Universal Cartridge Kit Step 1
- 관련 정책: POL-MAT-002, POL-MAT-004, POL-MAT-009
- 호출하는 화면: LI-TSS-CMP-01 (Remove), LI-TSS-LTG-01-02, MS_Alert_002, MS_Alert_003, MS_Alert_004, MS_Alert_005, MS_Alert_032
- 다른 프레임: 없음
- 취소선(제거됨): 1 오류 "Case 2) 작업 중인 시약 외, 다른 시약을 스캔한 경우 → MS_Alert_016"

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Group Universal Cartridge Kit
- STEP 1 Scan for Lot grouping | STEP 2 Confirm the Lot grouping
- Scan the barcode on the side of the EB tub. / Scan the MB tube barcode that is in the same box as the EB tub. / Scan the PK tube barcode that is in the same box as the EB tub / When Lot grouping is complete, click the [Done] button below.
- Tub 스캔 이미지 & MB Tube 스캔 이미지 & PK Tube 스캔 이미지
- Group Universal Cartridge Kit details | Remove
- Tub | MB tube | PK tube
- Done

### 사용 컴포넌트

Description Number (4), Divider (2), layout/spacing (2), Frame (1), Button/Tertiary_1Button_28 (1), Button/Secondary_1Button_44 (1)

### 디스크립션 (원문)

#### 1. Tub, MB tube, PK tube 스캔

- 정상)
  - (1-1) 스캔 항목 활성화
- 오류)
  - Case 1) 스캔한 reagent을 중복 스캔한 경우
    - ㄴ MS_Alert_002 팝업 노출
  - ~~Case 2) 작업 중인 시약 외, 다른 시약을 스캔한 경우~~
    - ~~ㄴ MS_Alert_016 팝업 노출~~
  - Case 2) 유효기간이 만료된 reagent을 스캔한 경우
    - ㄴ MS_Alert_003 팝업 노출
  - Case 3) 폐기된 reagent을 스캔한 경우
    - ㄴ MS_Alert_004 팝업 노출
  - Case 4) Lot 구성을 완료한 reagent을 다시 스캔한 경우
    - ㄴ MS_Alert_005 팝업 노출

#### 2. [Remove] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : (1-1) 항목 중 1개 이상 스캔 시, 활성화
- 선택 시 → [LI-TSS-CMP-01] 팝업 노출

#### 3. [Done] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : (1-1) 모든 항목 스캔 시, 활성화
- 선택 시 → 아래 항목 반영
  - Lot & 하위 EB tub, MB tube, PK tube 데이터 저장
  - [LI-TSS-LTG-01-02] 화면으로 이동
- 저장 실패 시
  - ㄴ MS_Alert_032 팝업 노출

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / 디스크립션 수정 항목 / - 빨간 텍스트 & 취소선 참고
