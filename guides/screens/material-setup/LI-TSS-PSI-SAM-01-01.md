---
cid: LI-TSS-PSI-SAM-01-01
pair_cid:
tl_relation: 단독
title: Scan the sample tube
path: Material Setup > Prepare Carrier > Load Samples into Trolley > Load Samples into Socket > Scan the sample tube
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-128647
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-SAM-01-01 Scan the sample tube

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load Samples into Socket Step 1
- 관련 정책: POL-MAT-003, POL-MAT-006
- 호출하는 화면: LI-TSS-PSI-SAM-01-02, MS_Confirm_001, MS_Alert_007, MS_Alert_008, MS_Alert_009
- 다른 프레임: 없음

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load Samples into Socket
- STEP 1 Scan the sample tube | STEP 2 Scan the socket | STEP 3 Insert the sample tube | STEP 4 Confirm the socket
- Scan the barcode on the sample tube to check the socket type. / Once the scan is complete, you will be taken to the next screen.
- Next

### 사용 컴포넌트

Description Number (2), Frame (1), Button/Secondary_1Button_44 (1)

### 디스크립션 (원문)

#### 1. Sample 스캔

- 정상) [LI-TSS-PSI-SAM-01-02] 화면으로 이동
  - Case 1) 다른 socket에 적재된 Sample을 스캔한 경우
    - ㄴ MS_Confirm_001 팝업 노출
    - ㄴ OK 선택 시 → [LI-TSS-PSI-SAM-01-02] 화면으로 이동
- 오류)
  - Case 1) 검사 오더가 등록되지 않은 Sample을 스캔한 경우
    - ㄴ MS_Alert_007 팝업 노출
  - Case 2) 취소된 검사의 Sample을 스캔한 경우
    - ㄴ MS_Alert_008 팝업 노출
  - Case 3) Tube setting에 등록되지 않은 Sample 스캔 시
    - ㄴ MS_Alert_009 팝업 노출

#### 2. [Next] 버튼

- 디폴트 : 비활성화
- 스캔 시 → (2-1)과 동일하게 변경 & 다음 화면으로 이동

#### 2-1. Scan

- (내용 없음)

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / Alert / Confirm 업데이트 / - Alert_033 팝업 추가

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | Ver 2.0 (2026-06-15) | 버전 메모(v2.1.05)를 반영한 Ver로 | 버전 메모 | 대기 (확인 필요) |
| R02 | 알럿 | 버전 메모 "Alert_033 팝업 추가" (기존 ID) | 지금 디스크립션은 MS_Alert_009. 변경 이력에만 남김 | `policy/alert-catalog-ms.csv` MS_Alert_009 (이전 ID 없음, 기존 Alert_033과 문구 같음) | 대기 |
| R03 | 디스크립션 | 2 [Next] "스캔 시 → (2-1)과 동일하게 변경", 2-1 "Scan" 내용 없음 | 스캔하면 자동으로 다음 화면으로 가므로 [Next]의 역할(누를 수 있는지) 정의 | 화면 글자 "Once the scan is complete, you will be taken to the next screen." | 대기 (확인 필요) |
| R04 | 알럿 | 이미 Socket에 적재된 Sample, 스캔할 수 없는 코드 케이스 없음 | MS_Alert_001은 넣지 않음. MS 목록에 명시한 경우에만 적용 (2026-11-03 사용자 답변 MS4). 이미 다른 Socket에 적재된 Sample은 MS_Confirm_001 | `policy/alert-catalog-ms.csv` MS_Alert_001, 2026-11-03 사용자 답변 (MS4) | 대기 |
| R05 | IA | Step 4 이름 "Confirm the socket" | IA "Confirm the socket scan"과 통일 | `ia/ia-screens.csv` | 대기 |
| R06 | 표기 | "socket", "팝업", "검사 오더" | Socket, Popup. "검사 오더"는 용어집에 없음 | `glossary/terms.csv` | 대기 (확인 필요) |
| R07 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | Alert / Confirm 업데이트 (Alert_033 추가) | BREX | Figma 버전 메모 |
