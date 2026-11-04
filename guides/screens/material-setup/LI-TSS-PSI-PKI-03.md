---
cid: LI-TSS-PSI-PKI-03
pair_cid:
tl_relation: 단독
title: Scan the PK/IC tube
path: Material Setup > Prepare Carrier > Load PK/IC Tubes > Scan the PK/IC tube
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-398866
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-PKI-03 Scan the PK/IC tube

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load PK/IC Tubes Step 3 (하이라이트된 slot에 PK/IC tube 적재)
- 관련 정책: POL-MAT-002, POL-MAT-003, POL-MAT-004, POL-MAT-005, POL-MAT-008
- 호출하는 화면: LI-TSS-CMP-01 (Remove), LI-TSS-PSI-PKI-04, MS_Confirm_014, MS_Alert_003, MS_Alert_004, MS_Alert_011, MS_Alert_014, MS_Alert_024, MS_Alert_032
- 다른 프레임: 세부 정의 [8073:398599](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-398599) (LI-TSS-PSI-01 [Skip] Case)
- 취소선(제거됨): 오류 Case 1 "스캔한 reagents을 중복 스캔 → MS_Alert_002" (→ MS_Alert_014), Case 2 "라뜨", 오류 2 Socket 스캔 (중복 → MS_Alert_002, 다른 Socket → MS_Alert_016), 2 카운팅 "투입 항목 스캔 & tray slot 스캔 시"

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load PK/IC Tubes
- STEP 1 Check the PK/IC tube | STEP 2 Scan the socket | STEP 3 Scan the PK/IC tube | STEP 4 Confirm the socket
- Scan PK or IC tubes registered in 'Lot grouping’. / Load the scanned tube into the highlighted slot. / Repeat the action until you have loaded the required quantity. / If you proceed to the next screen while a socket remains empty, click the [Done] button below.
- (Socket 그림) PK | IC
- Required Quantity | Remove
- PK tube | IC tube: PK tube 00/48 | RP-V IC 00/48 | PB IC 00/48 | GI-BP IC 00/48
- (스크롤 영역) LB Tub (Prep) 00/05 | ASL Standard Tube 03/05 | LB DWP 00/05 | PBS Tub 00/05
- Done

### 사용 컴포넌트

Description Number (4), Frame (1), Button/Secondary_1Button_44 (1), Button/Tertiary_1Button_28 (1), layout/spacing (1), Divider (1)

### 디스크립션 (원문)

#### 1. PK/IC tube 스캔

- 정상) 해당 PK or IC ② 카운팅 추가
  - Case 1) 다른 socket에 적재된 PK/IC tube 스캔 시
    - ㄴ MS_Confirm_014 팝업 노출
- 오류)
  - ~~스캔한 reagents을 중복 스캔~~ Case 1) 이미 적재된 PK/IC tube 재스캔
    - ㄴ ~~MS_Alert_002 팝업 노출~~ MS_Alert_014 팝업 노출
  - Case 2) ~~라뜨~~ Lot 구성하지 않은 항목인 경우
    - ㄴ MS_Alert_024 팝업 노출
  - Case 3) 폐기된 PK/IC tube 스캔
    - ㄴ MS_Alert_004 팝업 노출
  - Case 4) 유효기간이 만료된 PK/IC tube 스캔
    - ㄴ MS_Alert_003 팝업 노출
  - Case 5) socket의 slot이 가득 찬 상태에서 새 PK/IC tube를 스캔한 경우
    - ㄴ MS_Alert_011 팝업 노출
- ~~오류 2) Socket 스캔 시~~
  - ~~스캔한 socket을 중복 스캔~~
    - ~~ㄴ MS_Alert_002 팝업 노출~~
  - ~~작업 중인 Socket 외, 다른 Socket 스캔한 경우~~
    - ~~ㄴ MS_Alert_016 팝업 노출~~

#### 2. Required Quantity

- 노출정의 :
  - [LI-TSS-PSI-01] > trolley 선택 시, 노출
  - [LI-TSS-PSI-01] > [Skip] 버튼 선택 시 → 아래 세부정의 노출 Case 참고
- PK/ IC tube 개수
  - 디폴트 : 0/M
    - ㄴ 출력 : 스캔한 PK or IC tube 수 / 필요 적재 항목 수
    - ㄴ 필요 적재 항목 수 → [LI-TSS-PSI-01] > trolley 선택에 따라 수치 변경
  - 카운팅 조건 :
    - ~~투입 항목 스캔 & tray slot 스캔 시~~ PK/IC tube 스캔 시, 카운팅 추가
- (2-1) [Remove] 버튼
  - 디폴트 : 비활성화
  - 활성화 조건 : 스캔한 PK/IC Tube 수 1개 이상 시, 활성화
  - 선택 시 → [LI-TSS-CMP-01] 팝업 노출
    - ㄴ Remove는 변경 예정으로 기록, [Done] 선택 시 반영

#### 3. [Done] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : (2-1) 활성화 조건과 동일
- 선택 시 → 아래 항목 반영
  - Socket & 하위 PK/IC tube 데이터 저장
  - [LI-TSS-PSI-PKI-04] 화면으로 이동
- 저장 실패 시
  - ㄴ MS_Alert_032 팝업 노출

### 세부 정의 (원문)

8073:398599 "LI-TSS-PSI-PKI-03/ 세부정의" (화면 정보 Ver 2.0, 2026.06.15, BREX)

- [LI-TSS-PSI-01] > [Skip] 버튼 선택 시, 노출 CASE 정의
  - (화면) Required Quantity 대신 "Number of filled holes in the socket" (02/12, 00/48) | Remove | Done
  - (안내 문구) "… If you proceed to the next screen while a tray remains empty, click the [Done] button below."
  - 1 PK/IC tube 스캔: 정의 및 스캔 정상 or 오류 Case 위와 동일
    - (1-1) PK/ IC tube 개수: 디폴트 : 0/48. 스캔한 PK or IC tube 수 / 적재 가능한 Socket hole 개수. 카운팅 조건 : PK or IC tube 스캔 시, 카운팅 추가

### 케이스

- [Skip] Case: 세부 정의 8073:398599

### 버전 메모

- 없음

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 데이터 | Required Quantity 아래에 LCR 화면의 Reagent 줄이 남아 있음 | 지움 | 화면 글자 | 대기 |
| 2 | 알럿 | 하이라이트 단계에서 PK/IC tube 외 코드 스캔 케이스 없음 | 디스크립션에 넣음: 이 화면에서 하위 항목이 아닌 코드를 스캔하면 MS_Alert_001 (MS 목록에 명시된 "하이라이팅 화면의 하위 항목 외 스캔") | `policy/alert-catalog-ms.csv` MS_Alert_001, 2026-11-03 사용자 답변 (MS4) | 대기 |
| 3 | 디스크립션 | MS_Confirm_014 OK 뒤 동작 없음 | OK 선택 시 → 동의 기록 후 다음 스캔 ([Done] 시 반영) | MS_Confirm_014 | 대기 |
| 4 | 디스크립션 | 디폴트 "0/M"과 세부 정의 "0/48"(Socket hole 수). PK·IC가 한 Socket(G10)에 섞이는데 칸을 어떻게 나누는지(화면 PK/IC 영역) 정의 없음 | PK·IC 칸 배정 규칙 확인 | 화면 글자 "PK", "IC", POL-INV-007 | 대기 (확인 필요) |
| 5 | 문구 | 세부 정의 안내 "while a tray remains empty" | "while a socket remains empty" (주 프레임과 같게) | 세부 정의 | 대기 |
| 6 | 문구 | "registered in 'Lot grouping’" (따옴표 짝이 다름) | 'Group Lots' (메뉴 이름) | 화면 글자, `ia/ia-screens.csv` | 대기 |
| 7 | 표기 | "유효기간", "socket", "slot", "라뜨", "팝업" | Expiration Date, Socket, Slot, Lot, Popup | `glossary/terms.csv` | 대기 |
| 8 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | 화면 정보 기준 | BREX | Figma 화면 정보 |
