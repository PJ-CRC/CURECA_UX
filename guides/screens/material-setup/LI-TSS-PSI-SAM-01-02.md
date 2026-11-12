---
cid: LI-TSS-PSI-SAM-01-02
pair_cid:
tl_relation: 단독
title: Scan the socket
path: Material Setup > Prepare Carrier > Load Samples into Trolley > Load Samples into Socket > Scan the socket
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-131139
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-SAM-01-02 Scan the socket

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load Samples into Socket Step 2
- 관련 정책: POL-MAT-003, POL-MAT-006
- 호출하는 화면: LI-TSS-PSI-SAM-01-03, MS_Confirm_002, MS_Alert_010, MS_Alert_011, MS_Alert_012
- 다른 프레임: 없음

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load Samples into Socket
- STEP 1 Scan the sample tube | STEP 2 Scan the socket | STEP 3 Insert the sample tube | STEP 4 Confirm the socket
- Check the socket type shown on screen and prepare. / Load the socket onto rack. / Scan the QR code on the socket.
- Next

### 사용 컴포넌트

Description Number (2), Frame (1), Button/Secondary_1Button_44 (1)

### 디스크립션 (원문)

#### 1. 전용 Socket 노출

- 정의 : 이전 화면(LI-TSS-PSI-SAM-01-01)에서 스캔한 sample의전용 socket이 노출됨
- Socket 스캔
  - 정상) [LI-TSS-PSI-SAM-01-03] 화면으로 이동
    - Case 1) PK/IC socket·Standard tube socket 스캔한 경우
      - ㄴ MS_Confirm_002 팝업 노출
      - ㄴ OK 선택 시 → [LI-TSS-PSI-SAM-01-03] 화면으로 이동
  - 오류)
    - Case 1) 전용 socket 불일치한 경우
      - ㄴ MS_Alert_010 팝업 노출
    - Case 2) socket에 적재된 Sample과 검사군이 다른 경우
      - ㄴ MS_Alert_012 팝업 노출
    - Case 3) socket의 모든 slot이 가득 찬 경우
      - ㄴ MS_Alert_011 팝업 노출

#### 2. [Next] 버튼

- 디폴트 : 비활성화
- 스캔 시 → (2-1)과 동일하게 변경 & 다음 화면으로 이동

#### 2-1. Scan

- (내용 없음)

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / 디스크립션 수정 항목 / - 빨간 텍스트 & 취소선 참고

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | Ver 2.0 (2026-06-15) | 버전 메모(v2.1.05)를 반영한 Ver로 | 버전 메모 | 대기 (확인 필요) |
| R02 | 화면 | 전용 Socket(socket type)을 보여 주는 영역이 화면 글자에 없음 (이미지만) | socket type 이름(G10 등) 표시 여부 | 디스크립션 1 | 대기 (확인 필요) |
| R03 | 디스크립션 | 2 [Next], 2-1 Scan 내용 없음 | LI-TSS-PSI-SAM-01-01 반영 대기 목록 3과 같이 | 디스크립션 | 대기 (확인 필요) |
| R04 | 디스크립션 | "sample의전용" | sample의 전용 | 오타 | 대기 |
| R05 | 표기 | "sample", "socket", "slot", "검사군", "팝업" | Sample, Socket, Slot, Popup. "검사군"은 용어집에 없음 | `glossary/terms.csv` | 대기 (확인 필요) |
| R06 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | 디스크립션 수정 (빨간 텍스트 & 취소선) | BREX | Figma 버전 메모 |
