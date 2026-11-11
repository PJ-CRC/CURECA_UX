---
cid: LI-TSS-PSI-SAM-01-03
pair_cid:
tl_relation: 단독
title: Insert the sample tube
path: Material Setup > Prepare Carrier > Load Samples into Trolley > Load Samples into Socket > Insert the sample tube
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-131282
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-SAM-01-03 Insert the sample tube

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load Samples into Socket Step 3 (하이라이트된 Hole에 Sample 적재)
- 관련 정책: POL-MAT-002, POL-MAT-003, POL-MAT-004, POL-MAT-005, POL-MAT-006
- 호출하는 화면: LI-TSS-CMP-01 (Remove), LI-TSS-PSI-SAM-01-04, MS_Confirm_001, MS_Alert_007, MS_Alert_008, MS_Alert_009, MS_Alert_011, MS_Alert_012, MS_Alert_013, MS_Alert_014, MS_Alert_032
- 다른 프레임: 없음
- 취소선(제거됨): 1 "오류 2) Socket 스캔 시 — 작업 중인 socket 외, 다른 socket 스캔 → MS_Alert_016"

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load Samples into Socket
- STEP 1 Scan the sample tube | STEP 2 Scan the socket | STEP 3 Insert the sample tube | STEP 4 Confirm the socket
- Scan the barcode on the sample tube. / Insert the sample into the highlighted hole shown on the screen. / Scan the barcode of another sample compatible with this socket, then insert it into the highlighted hole. / Repeat the action until you have loaded the required quantity. / When sample loading is complete, click the [Done] button below.
- Number of filled holes in the socket | Remove
- Sample Tube ID | [ ST0000001 ]
- 02/12 | 00/12
- Done

### 사용 컴포넌트

Description Number (5), Frame (1), Button/Tertiary_1Button_28 (1), Button/Secondary_1Button_44 (1)

### 디스크립션 (원문)

#### 1. Samples 스캔

- 정상) Samples 삽입할 Hole 변경 & ② 카운팅 추가
  - Case 1) 다른 socket에 적재된 Sample 스캔
    - ㄴ MS_Confirm_001 팝업 노출
    - ㄴ OK 선택 시 → 하이라이팅 slot에 적재
- 오류 1) Sample 스캔 시
  - Case 1) 현재 socket에 이미 적재된 sample을 다시 스캔한 경우
    - ㄴ MS_Alert_014 팝업 노출
  - Case 2) 스캔한 samples이 해당 socket과 맞지 않는 경우
    - ㄴ MS_Alert_013 팝업 노출
  - Case 3) 스캔한 samples이 동일 검사군이 아닌 경우
    - ㄴ MS_Alert_012 팝업 노출
  - Case 4) Tube setting에 등록되지 않은 Sample 스캔 시
    - ㄴ MS_Alert_009 팝업 노출
  - Case 5) 검사 오더 미등록 Sample 스캔
    - ㄴ MS_Alert_007 팝업 노출
  - Case 6) 취소된 검사의 Sample 스캔
    - ㄴ MS_Alert_008 팝업 노출
  - Case 7) socket의 모든 slot이 가득 찬 상태에서 새 Sample tube를 스캔한 경우
    - ㄴ MS_Alert_011 팝업 노출
- ~~오류 2) Socket 스캔 시~~
  - ~~작업 중인 socket 외, 다른 socket 스캔한 경우~~
    - ~~ㄴ MS_Alert_016 팝업 노출~~

#### 2. Number of filled holes in the socket

- 적재한 Sample 개수
  - 디폴트 : 0/N
  - 출력 : 스캔한 sample 수 / 적재 가능한 socket hole 개수
    - ㄴ 적재 가능한 socket hole 개수 : socket type에 따라 수치 변경
  - 카운팅 조건 :
    - Sample 스캔 시, 카운팅 추가
  - N 최대 개수 :
    - G10 Socket : 48
    - G20 Socket : 24
    - G30 Socket : 12
    - G40 / G41 Socket : 6
    - G50 Socket : 4
- (2-1) [Remove] 버튼
  - 디폴트 : 비활성화
  - 활성화 조건 : 스캔한 sample 수 1개 이상 시, 활성화
  - 선택 시 → [LI-TSS-CMP-01] 팝업 노출
    - ㄴ Remove는 변경 예정으로 기록, [Done] 선택 시 반영

#### 3. [Done] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : (2-1) 활성화 정의와 동일
- 선택 시 :
  - 정상) 아래 항목 반영
    - ㄴ Socket & 하위 Samples 데이터 저장
    - ㄴ [LI-TSS-PSI-SAM-01-04] 화면으로 이동
  - 오류)
    - ㄴ 저장 실패 시 → MS_Alert_032 팝업 노출

### 케이스

- 없음

### 버전 메모

- v2.1.06 update / G40 socket 명칭 변경 / - G41 → G40, G42 → G41
- v2.1.05 update / Alert / Confirm 업데이트 / - Alert_033 팝업 추가

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | Ver 2.0 (2026-06-15) | 버전 메모(v2.1.06까지)를 반영한 Ver로 | 버전 메모 | 대기 (확인 필요) |
| R02 | 화면 | 카운터 "02/12"와 "00/12" 두 개가 겹쳐 있음 | 하나만 (디폴트 0/N) | 화면 글자, 디스크립션 2 | 대기 |
| R03 | 알럿 | 하이라이트 단계에서 Sample 외 코드 스캔 케이스 없음 | 디스크립션에 넣음: 이 화면에서 하위 항목이 아닌 코드를 스캔하면 MS_Alert_001 (MS 목록에 명시된 "하이라이팅 화면의 하위 항목 외 스캔") | `policy/alert-catalog-ms.csv` MS_Alert_001, 2026-11-03 사용자 답변 (MS4) | 대기 |
| R04 | 디스크립션 | 1 Confirm_001 OK 뒤 "하이라이팅 slot에 적재", 정상 줄 "Hole" | hole과 slot 중 하나로 통일 (Socket 안 위치) | 디스크립션 1, 2 | 대기 (확인 필요) |
| R05 | 디스크립션 | Socket이 가득 찼을 때 [Done]만 가능한지, 자동으로 다음 단계로 가는지 정의 없음 | 확인 | 디스크립션 2·3 | 대기 (확인 필요) |
| R06 | 표기 | "Samples", "sample", "socket", "slot", "하이라이팅", "팝업" | Sample, Socket, Slot, 하이라이트, Popup | `glossary/terms.csv` | 대기 |
| R07 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | Alert / Confirm 업데이트 (Alert_033 추가) | BREX | Figma 버전 메모 |
| 2.1.06 | | G40 socket 명칭 변경 (G41 → G40, G42 → G41) | BREX | Figma 버전 메모 |
