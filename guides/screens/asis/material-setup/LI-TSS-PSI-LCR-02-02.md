---
cid: LI-TSS-PSI-LCR-02-02
pair_cid:
tl_relation: 단독
title: Scan loaded tray
path: Material Setup > Prepare Carrier > Load Consumables and Reagents into Trolley > Load Tray into Trolley > Scan loaded tray
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-130471
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-LCR-02-02 Scan loaded tray

> 기존 화면(기존 작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode. Load Tray into Trolley (Consumable) Step 2 (Tray 스캔 → Trolley floor 스캔)
- 관련 정책: POL-MAT-002, POL-MAT-003, POL-MAT-004, POL-MAT-005, POL-MAT-007, POL-LOD-001
- 호출하는 화면: LI-TSS-CMP-01 (Remove), LI-TSS-PSI-LCR-02-03, MS_Confirm_007, MS_Confirm_008, MS_Alert_019, MS_Alert_022, MS_Alert_023, MS_Alert_032
- 다른 프레임: 없음
- 취소선(제거됨): 1 오류 1 "스캔한 tray를 중복 스캔한 경우 → MS_Alert_002", 문구의 "location"

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load Tray into Trolley
- STEP 1 Scan the trolley | STEP 2 Scan loaded tray | STEP 3 Confirm the trolley
- Scan the QR code on the tray loaded with the socket / Scan the QR code on the trolley shelf. / Insert the tray into the scanned trolley ~~location~~ floor. / * Note: Only empty trays can be loaded on trolley 1F / Repeat the action until you have loaded the required quantity. / If you proceed to the next screen while a tray remains empty, / click the [Done] button below.
- Trolley의 선반 QR 스캔 이미지 필요
- Number of filled shelf in the trolley | Remove
- 02/12 | 00/06
- Done

### 사용 컴포넌트

Description Number (4), Frame (1), Device&Electronic/Repeat (1), Button/Secondary_1Button_44 (1), Button/Tertiary_1Button_28 (1)

### 디스크립션 (원문)

#### 1. Tray or Trolley floor 스캔

- Toast 팝업 노출
  - Main text: The scan has been completed.
- 정상) Trolley 선반 스캔 시
  - (②) 카운팅 추가
  - Case 1) 이미 Trolley에 적재된 Tray를 스캔한 경우
    - ㄴ MS_Confirm_007 팝업 노출
  - Case 2) 이미 Tray가 있는 floor을 스캔한 경우
    - ㄴ MS_Confirm_008 팝업 노출
  - Case 3) 위치 스캔 전 다른 Tray를 스캔한 경우
    - ㄴ 마지막에 스캔한 Tray로 교체 & Toast 팝업 노출
- 오류 1) Tray 스캔 시
  - ~~스캔한 tray를 중복 스캔한 경우~~
    - ㄴ ~~MS_Alert_002 팝업 노출~~
- 오류 2) Trolley 스캔 시
  - 작업 중인 trolley 외, 다른 trolley의 floor 스캔한 경우
    - ㄴ MS_Alert_019 팝업 노출
  - 적재된 Tray 스캔한 뒤, 소모품 Trolley 1F 스캔하는 경우
    - ㄴ MS_Alert_023 팝업 노출
  - 빈 Tray 스캔한 뒤, 2~6F 스캔하는 경우
    - ㄴ MS_Alert_022 팝업 노출
  - Tray보다 floor을 먼저 스캔한 경우
    - ㄴ Toast 팝업 노출 : Scan the tray before scanning the trolley ~~location~~ floor.

#### 2. Number of filled shelf in the trolley

- 적재한 Tray 개수
  - 디폴트 : 0/6
  - 출력 : 스캔한 tray 개수 / 적재 가능한 trolley 선반 개수
  - 카운팅 조건 :
    - Tray 스캔 & Trolley 선반 스캔 시, 카운팅 추가
- (2-1) [Remove] 버튼
  - 디폴트 : 비활성화
  - 활성화 조건 : 스캔한 trolley 선반 수 1개 이상 시, 활성화
  - 선택 시 → [LI-TSS-CMP-01] 팝업 노출
    - ㄴ Remove는 변경 예정으로 기록, [Done] 선택 시 반영

#### 3. [Done] 버튼 선택 시 → 아래 항목 반영

- 디폴트 : 비활성화
- 활성화 조건 : (2-1) 활성화 정의와 동일
- 선택 시 → 아래 항목 반영
  - Trolley & 하위 Tray 데이터 저장
  - [LI-TSS-PSI-LCR-02-03] 화면으로 이동
- 저장 실패 시
  - ㄴ MS_Alert_032 팝업 노출

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / 소모품 트롤리 정책 변경 / - 트롤리 1F > 투입항목 반환 전용 floor로 수정 / ㄴ텍스트 가이드 ‘Note’ 추가 / Alert / Confirm 업데이트 / - Alert_035 팝업 추가
