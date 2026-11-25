---
cid: LI-TSS-PSI-LPR-03
pair_cid:
tl_relation: 단독
title: Scan the PCR reagent
path: Material Setup > Prepare Carrier > Load PCR Reagents > Scan the PCR reagent
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-400093
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-LPR-03 Scan the PCR reagent

> 기존 화면(기존 작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode. Load PCR Reagents Step 3 (PCR box를 스캔해 하이라이트된 자리에 적재, Socket당 PCR box 2개 A·B)
- 관련 정책: POL-MAT-002, POL-MAT-003, POL-MAT-004, POL-MAT-005, POL-MAT-008
- 호출하는 화면: LI-TSS-CMP-01 (Remove), LI-TSS-PSI-LPR-04, MS_Confirm_016, MS_Alert_003, MS_Alert_004, MS_Alert_011, MS_Alert_014, MS_Alert_024, MS_Alert_025, MS_Alert_032
- 다른 프레임: 세부 정의 [8073:399811](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-399811) (노출 이미지 Case, [Skip] Case)
- 취소선(제거됨): 오류 Case 1 "중복 스캔 → MS_Alert_002" (→ 재스캔 MS_Alert_014), "Case 2) 작업 중인 reagent 외, 다른 reagent 스캔 → MS_Alert_016", 2 "PK/ IC tube 개수" (→ PCR box 개수)

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load PCR Reagents
- STEP 2 Check the PCR reagent | STEP 2 Scan the socket | STEP 3 Scan the PCR reagent | STEP 4 Confirm the socket
- Scan the barcode on the PCR reagent box. / Load the reagent tube into the highlighted slot. / Repeat the action until you have loaded the required quantity. / When PCR reagent loading is complete, click the [Done] button below.
- Required Quantity | Remove
- RP1 00/02 | RP3 00/02 | GI-V 00/03
- (스크롤 영역) LB Tub (Prep) 00/05 | ASL Standard Tube 03/05 | LB DWP 00/05 | PBS Tub 00/05
- Done

### 사용 컴포넌트

Description Number (5), Frame (1), Button/Secondary_1Button_44 (1), Button/Tertiary_1Button_28 (1), layout/spacing (1), Divider (1)

### 디스크립션 (원문)

#### 1. PCR reagent box 스캔

- 정상) 아래 항목 반영
  - 스캔한 시약 (1-1) 이미지 노출 → 아래 세부정의 참고
  - 스캔한 시약 (②) 카운팅 추가
  - 다른 socket에 적재된 PCR box 스캔 시
    - ㄴ MS_Confirm_016 팝업 노출
- 오류 1) Reagent(PCR box) 스캔 시
  - Case 1) ~~스캔한 reagents을 중복 스캔한 경우~~ 이미 적재된 PCR box를 재스캔한 경우
    - ㄴ ~~MS_Alert_002 팝업 노출~~ MS_Alert_014 팝업 노출
  - ~~Case 2) 작업 중인 reagent 외, 다른 reagent 스캔~~
    - ~~ㄴ MS_Alert_016 팝업 노출~~
  - Case 3) 스캔한 reagent의 유효기간이 다른 경우
    - ㄴ MS_Alert_025 팝업 노출
  - Case 4) 유효기간이 만료된 시약을 스캔한 경우
    - ㄴ MS_Alert_003 팝업 노출
  - Case 5) Lot 구성하지 않은 PCR box를 스캔한 경우
    - ㄴ MS_Alert_024 팝업 노출
    - ㄴ IC tube가 없는 PCR box는 Lot 없이 적재
  - Case 6) socket의 slot이 가득 찬 상태에서 새 PCR box를 스캔한 경우
    - ㄴ MS_Alert_011 팝업 노출
  - Case 7) 폐기된 PCR box를 스캔한 경우
    - ㄴ MS_Alert_004 팝업 노출

#### 2. Required Quantity

- 노출정의 :
  - [LI-TSS-PSI-01] > trolley 선택 시, 노출
  - [LI-TSS-PSI-01] > [Skip] 버튼 선택 시 → 아래 세부정의 노출 Case 참고
- ~~PK/ IC tube 개수~~ PCR box 개수
  - 디폴트 : N/M
    - ㄴ 출력 : 스캔한 PCR reagent 박스 수 / 필요 적재 항목 수
    - ㄴ 필요 적재 항목 수 → [LI-TSS-PSI-01] > trolley 선택에 따라 수치 변경
- (2-1) [Remove] 버튼
  - 디폴트 : 비활성화
  - 활성화 조건 : 스캔한 PCR 시약 박스 수 1개 이상 시, 활성화
  - 선택 시 → [LI-TSS-CMP-01] 팝업 노출
    - ㄴ Remove는 변경 예정으로 기록, [Done] 선택 시 반영

#### 3. [Done] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : (2-1) 활성화 조건과 동일
- 선택 시 → 아래 항목 반영
  - Socket & 하위 PCR 시약 데이터 저장
  - [LI-TSS-PSI-LPR-04] 화면으로 이동
- 저장 실패 시
  - ㄴ MS_Alert_032 팝업 노출

### 세부 정의 (원문)

8073:399811 "LI-TSS-PSI-LPR-03 / 세부정의"

- Reagent box 스캔 시, 노출 이미지 CASE 정의
  - RP 적재 이미지 | GI 적재 이미지 | HPV 적재 이미지 | STI 적재 이미지
- 스캔 시, 이미지 전환 CASE 정의
  - [Allplex HPV 28] 스캔 시 → 아래 노출 정의에 따름
    - 스캔 전 or 홀수 번 째, 노출 이미지 (2 / 1)
    - 짝수 번 째, 노출 이미지 (2 / 1)
  - [Allplex HPV 28] 스캔 시 → 순번 없이 이미지 only 노출
- [LI-TSS-PSI-01] > [Skip] 버튼 선택 시, 노출 CASE 정의 (화면 정보 Ver 2.0, 2026.06.15, BREX)
  - (화면) Required Quantity 대신 "Number of filled PCR box in the socket" 00/02 boxs | Remove | Done
  - 1 PCR reagent box 스캔: 정의 및 스캔 정상 or 오류 Case 위와 동일
    - (1-1) PCR 시약 개수: 디폴트 : 00/02. 스캔한 PCR 박스 수 / Socket에 적재 가능한 PCR box 개수

### 케이스

- 노출 이미지 Case, [Skip] Case: 세부 정의 8073:399811

### 버전 메모

- 없음
