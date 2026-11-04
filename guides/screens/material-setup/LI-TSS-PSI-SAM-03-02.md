---
cid: LI-TSS-PSI-SAM-03-02
pair_cid:
tl_relation: 단독
title: Scan loaded tray
path: Material Setup > Prepare Carrier > Load Samples into Trolley > Load Tray into Trolley > Scan loaded tray
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-130836
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-SAM-03-02 Scan loaded tray

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Load Tray into Trolley (Sample) Step 2 (Tray 스캔 → Trolley floor 스캔)
- 관련 정책: POL-MAT-002, POL-MAT-003, POL-MAT-004, POL-MAT-005, POL-MAT-006, POL-LOD-001
- 호출하는 화면: LI-TSS-CMP-01 (Remove), LI-TSS-PSI-SAM-03-03, MS_Confirm_007, MS_Confirm_008, MS_Alert_017, MS_Alert_018, MS_Alert_019, MS_Alert_032
- 이 화면의 [Done] 시점이 LI-TSS-PSI-01의 Setup Date/Time이 됨 (LI-TSS-PSI-01 1-1)
- 다른 프레임: 없음
- 취소선(제거됨): 1 오류 1 "스캔한 tray 중복 스캔한 경우 → MS_Alert_002", 2 디폴트 "0/6" (→ 0/5)

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Load Tray into Trolley
- STEP 1 Scan the trolley | STEP 2 Scan loaded tray | STEP 3 Confirm the trolley
- Scan the QR code on the tray loaded with the socket / Scan the QR code on the trolley shelf. / Insert the tray into the scanned trolley floor. / Repeat the action until you have loaded the required quantity. / If you proceed to the next screen while a tray remains empty, / click the [Done] button below.
- Trolley의 선반 QR 스캔 이미지 필요
- Number of filled shelf in the trolley | Remove
- 02/12 | 00/05
- Done

### 사용 컴포넌트

Description Number (4), Device&Electronic/Repeat (1), Frame (1), Button/Secondary_1Button_44 (1), Button/Tertiary_1Button_28 (1)

### 디스크립션 (원문)

#### 1. Tray or Trolley floor 스캔

- Toast 팝업 노출
  - Main text: The scan has been completed.
- 정상) Trolley 선반 스캔 시
  - (②) 카운팅 추가
  - Case 1) 이미 Trolley에 적재된 Tray를 스캔한 경우
    - ㄴ MS_Confirm_007 팝업 노출
  - Case 2) 이미 Tray가 있는 floor(2~6F)을 스캔한 경우
    - ㄴ MS_Confirm_008 팝업 노출
  - Case 3) 위치 스캔 전 다른 Tray를 스캔한 경우
    - ㄴ 마지막에 스캔한 Tray로 교체 & Toast 팝업 노출
- 오류 1) Tray 스캔 시
  - ~~스캔한 tray 중복 스캔한 경우~~
    - ㄴ ~~MS_Alert_002 팝업 노출~~
  - 데이터 없는 Tray를 스캔한 경우
    - ㄴ MS_Alert_017 팝업 노출
- 오류 2) Trolley 스캔 시
  - Case 1) 작업 중인 trolley 외, 다른 trolley의 floor 스캔한 경우
    - ㄴ MS_Alert_019 팝업 노출
  - Case 2) 투입 Trolley 1F 스캔하는 경우
    - ㄴ MS_Alert_018 팝업 노출
  - Case 3) Tray보다 floor을 먼저 스캔한 경우
    - ㄴ Toast 팝업 노출 (Scan the tray before scanning the trolley floor.)

#### 2. Number of filled shelf in the trolley

- 적재한 Tray 개수
  - 디폴트 : ~~0/6~~ 0/5
  - 출력 : 스캔한 trolley 선반 수 / 적재 가능한 trolley 선반 개수
  - 카운팅 조건 :
    - Tray 스캔 & Trolley 선반 스캔 시, 카운팅 추가
- (2-1) [Remove] 버튼
  - 디폴트 : 비활성화
  - 활성화 조건 : 스캔한 trolley 선반 수 1개 이상 시, 활성화
  - 선택 시 → [LI-TSS-CMP-01] 팝업 노출

#### 3. [Done] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : ② Remove 활성화 정의와 동일
- 선택 시 → 아래 항목 반영
  - Trolley & 하위 Tray 데이터 저장
  - [LI-TSS-PSI-SAM-03-03] 화면으로 이동
- 저장 실패 시 → MS_Alert_032 팝업 노출

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / 디스크립션 수정 항목 / - 빨간 텍스트 & 취소선 참고
- v2.1.11 update / 투입 Trolley 1F 제외 정책 추가 / - 오류 2 > Case 2 추가

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 정보 | Ver 2.0 (2026-06-15) | 버전 메모(v2.1.11까지)를 반영한 Ver로 | 버전 메모 | 대기 (확인 필요) |
| 2 | 화면 | 카운터 "02/12"와 "00/05"가 겹쳐 있음 | 0/5 하나만 | 디스크립션 2 | 대기 |
| 3 | 디스크립션 | 2-1 [Remove]에 "Remove는 변경 예정으로 기록, [Done] 선택 시 반영" 줄이 없음 (다른 화면에는 있음) | 같은 줄 추가 | LI-TSS-PSI-SAM-02-02 2-1 | 대기 |
| 4 | 디스크립션 | 3 활성 조건 "② Remove 활성화 정의와 동일" | (2-1)로 가리킴 | 디스크립션 | 대기 |
| 5 | 표기 | "선반", "shelf", "floor"가 섞임 (화면 "Number of filled shelf", "trolley shelf") | Trolley floor로 통일 (MS_Alert_018·019, MS_Confirm_007·008이 floor) | 화면 글자, `policy/alert-catalog-ms.csv` | 대기 (확인 필요) |
| 6 | 화면 | "Trolley의 선반 QR 스캔 이미지 필요" 자리 표시 | 이미지 넣기 | 화면 글자 | 대기 |
| 7 | 표기 | "투입 Trolley", "trolley", "tray", "Toast 팝업" | Sample Trolley(Inbound Trolley인지 확인), Trolley, Tray, Toast | `glossary/terms.csv`, `glossary/module-units.csv` | 대기 (확인 필요) |
| 8 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | 디스크립션 수정 (빨간 텍스트 & 취소선) | BREX | Figma 버전 메모 |
| 2.1.11 | | 투입 Trolley 1F 제외 정책 추가 (오류 2 > Case 2) | BREX | Figma 버전 메모 |
