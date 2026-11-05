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
service_mode: [TSS Mode]
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

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load PCR Reagents Step 3 (PCR box를 스캔해 하이라이트된 자리에 적재, Socket당 PCR box 2개 A·B)
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

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 | Step 표시 "STEP 2 Check the PCR reagent" | STEP 1 | 화면 글자 | 대기 |
| R02 | 화면 데이터 | LCR Reagent 줄이 남아 있음. 예시 RP1·RP3·GI-V는 LPR-01(RP1·RP2·GI-V)과 다름 | 지움, 예시 통일 | LI-TSS-PSI-LPR-01 | 대기 |
| R03 | 알럿 | 하이라이트 단계에서 PCR box 외 코드 스캔 케이스 없음 | 디스크립션에 넣음: 이 화면에서 하위 항목이 아닌 코드를 스캔하면 MS_Alert_001 (MS 목록에 명시된 "하이라이팅 화면의 하위 항목 외 스캔") | `policy/alert-catalog-ms.csv` MS_Alert_001, 2026-11-03 사용자 답변 (MS4) | 대기 |
| R04 | 디스크립션 | 오류 Case 번호가 1, 3, 4…로 2가 빠짐 (취소선 Case 2) | 번호 다시 매김 | 디스크립션 1 | 대기 |
| R05 | 디스크립션 | MS_Confirm_016이 "정상)" 아래에 있고 OK 뒤 동작 없음 | OK 선택 시 → 동의 기록 후 다음 스캔 ([Done] 시 반영) | MS_Confirm_016 | 대기 |
| R06 | 디스크립션 | 세부 정의 "[Allplex HPV 28] 스캔 시 → 아래 노출 정의에 따름"과 "→ 순번 없이 이미지 only 노출"이 같은 조건으로 두 번 | 두 번째가 HPV 외 제품인지 확인 | 세부 정의 | 대기 (확인 필요) |
| R07 | 화면 데이터 | "Allplex HPV 28" | Allplex™ HPV28 Detection | `glossary/pcr-reagents.csv` | 대기 |
| R08 | 디스크립션 | 1 "Lot 구성하지 않은 PCR box" 판단 (IC tube 없는 box는 Lot 없이 적재)와 MS_Alert_025(유효기간 다른 box)의 판단 순서 | 정책에서 정함 | MS_Alert_024·025, POL-INV-007 | 대기 (확인 필요) |
| R09 | 문구 | "Load the reagent tube into the highlighted slot." (스캔은 PCR box) | box를 넣는지 tube를 넣는지 맞춤 | 화면 글자 | 대기 (확인 필요) |
| R10 | 표기 | "boxs", "유효기간", "PCR 시약", "socket", "팝업" | boxes, Expiration Date, PCR Reagent, Socket, Popup | 오타, `glossary/terms.csv` | 대기 |
| R11 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | 화면 정보 기준 | BREX | Figma 화면 정보 |
