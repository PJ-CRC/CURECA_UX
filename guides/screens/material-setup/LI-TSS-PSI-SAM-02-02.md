---
cid: LI-TSS-PSI-SAM-02-02
pair_cid:
tl_relation: 단독
title: Scan loaded socket
path: Material Setup > Prepare Carrier > Load Samples into Trolley > Load Socket into Tray > Scan loaded socket
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-130988
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-SAM-02-02 Scan loaded socket

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load Socket into Tray Step 2 (Socket 스캔 → Tray slot 스캔)
- 관련 정책: POL-MAT-002, POL-MAT-003, POL-MAT-004, POL-MAT-005, POL-MAT-006
- 호출하는 화면: LI-TSS-CMP-01 (Remove), LI-TSS-PSI-SAM-02-03, MS_Confirm_004, MS_Confirm_005, MS_Alert_015, MS_Alert_016, MS_Alert_032
- 다른 프레임: 없음
- 취소선(제거됨): 1 오류 1 "스캔한 socket을 중복 스캔한 경우 → MS_Alert_002"

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load Socket into Tray
- STEP 1 Scan the tray | STEP 2 Scan loaded socket | STEP 3 Confirm the tray
- Scan the QR code on the socket loaded with the sample / Scan the QR code on the tray ~~location~~ slot to load. / Place the ~~rack~~ socket on the tray with the QR code facing right. / Repeat the action until you have loaded the required quantity. / If you proceed to the next screen while a tray remains empty, / click the [Done] button below.
- Number of filled ~~sections~~ slots in the tray | Remove
- 02/12 | 00/10
- Done

### 사용 컴포넌트

Description Number (4), Device&Electronic/Repeat (1), Frame (1), Button/Secondary_1Button_44 (1), Button/Tertiary_1Button_28 (1)

### 디스크립션 (원문)

#### 1. Socket or Tray 내부 위치 스캔

- Toast 팝업 노출
  - Main text: The scan has been completed.
- 정상) Tray 내부 영역 스캔 시
  - (②) 카운팅 추가
  - Case 1) 이미 Tray에 적재된 socket을 스캔한 경우
    - ㄴ MS_Confirm_004 팝업 노출
  - Case 2) 이미 socket이 있는 Tray 내부 위치를 스캔한 경우
    - ㄴ MS_Confirm_005 팝업 노출
  - Case 3) 위치 스캔 전 다른 socket을 스캔한 경우
    - ㄴ 마지막에 스캔한 socket으로 교체 & Toast 팝업 노출
- 오류 1) Socket 스캔 시
  - ~~스캔한 socket을 중복 스캔한 경우~~
    - ㄴ ~~MS_Alert_002 팝업 노출~~
  - 검체가 없는 socket을 스캔한 경우
    - ㄴ MS_Alert_015 팝업 노출
- 오류 2) Tray 스캔 시
  - 작업 중인 tray 외, 다른 tray의 내부 위치 스캔한 경우
    - ㄴ MS_Alert_016 팝업 노출
  - socket보다 Tray 내부 위치를 먼저 스캔한 경우
    - ㄴ Toast 팝업 노출 : Scan the socket before scanning the tray slot.

#### 2. Number of filled slots in the tray

- 적재한 Socket 개수
  - 디폴트 : 0/10
  - 출력 : 스캔한 tray slot 수 / 적재 가능한 tray slot 개수
  - 카운팅 조건 :
    - Socket 스캔 & Tray 내부 스캔 시, 카운팅 추가
- (2-1) [Remove] 버튼
  - 디폴트 : 비활성화
  - 활성화 조건 : 스캔한 tray slot 수 1개 이상 시, 활성화
  - 선택 시 → [LI-TSS-CMP-01] 팝업 노출
    - ㄴ Remove는 변경 예정으로 기록, [Done] 선택 시 반영

#### 3. [Done] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : (2-1) 활성화 정의와 동일
- 선택 시 → 아래 항목 반영
  - Tray & 하위 Socket 데이터 저장
  - [LI-TSS-PSI-SAM-02-03] 화면으로 이동
- 저장 실패 시 → MS_Alert_032 팝업 노출 (현재 화면·변경 예정 상태 유지)

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / 디스크립션 수정 항목 / - 빨간 텍스트 & 취소선 참고

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | Ver 2.0 (2026-06-15) | 버전 메모(v2.1.05)를 반영한 Ver로 | 버전 메모 | 대기 (확인 필요) |
| R02 | 화면 | 카운터 "02/12"와 "00/10"이 겹쳐 있음 | 0/10 하나만 | 디스크립션 2 디폴트 0/10 | 대기 |
| R03 | 문구 | "If you proceed to the next screen while a tray remains empty, / click the [Done] button below." | 문장이 끊겨 있음. "빈 slot이 남아도 [Done]으로 넘어갈 수 있다"는 뜻인지 확인 후 다시 씀 | 화면 글자 | 대기 (확인 필요) |
| R04 | 알럿 | Socket·Tray slot이 아닌 코드 스캔 케이스 없음 | 디스크립션에 넣음: 적재 가이드에서 Trolley·Tray 전체 Barcode를 스캔하면 MS_Alert_001 (MS 목록에 명시된 경우). 그 밖의 코드에는 넣지 않음 | `policy/alert-catalog-ms.csv` MS_Alert_001, 2026-11-03 사용자 답변 (MS4) | 대기 |
| R05 | 디스크립션 | 정상 Case 1·2(Confirm)가 "정상)" 아래에 있음 | Confirm Case 묶음을 따로 둠 | 디스크립션 1 | 대기 |
| R06 | 표기 | "검체", "socket", "tray", "Toast 팝업" | Sample, Socket, Tray, Toast | `glossary/terms.csv` | 대기 |
| R07 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | 디스크립션 수정 (빨간 텍스트 & 취소선) | BREX | Figma 버전 메모 |
