---
cid: LI-TSS-DXI-01
pair_cid:
tl_relation: 단독
title: STAT storage
path: Material Setup > Load Materials > STAT storage
type: Page
version: 2.0
date: 2026-06-15
author: BREX
service_mode: [Console Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8313-138045
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-DXI-01 STAT storage

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: Console Mode. Sample Preparation의 STAT Storage에 Sample Socket 적재 (v2.1.05 "STAT Storage 검체 Only 적재")
- 관련 정책: POL-SMP-008 (`cids`에 있음), POL-MAT-002, POL-MAT-004, POL-LOD-002, POL-LOD-003
- 호출하는 화면: LI-TSS-CMP-01 (Remove), LI-TSS-DXI (Done), MS_Alert_001, MS_Alert_015, MS_Alert_027, MS_Alert_028, MS_Alert_029, MS_Alert_030, MS_Alert_032
- 다른 프레임: 공통 정의 [8313:138747](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8313-138747) (LI-TSS-DXI-01~07 공통, 여기에 옮김)
- 취소선(제거됨): 1 오류 Case 1 "유효기간이 만료된 시약을 스캔한 경우 → MS_Alert_003"

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- SamplePreparation (N) > STAT storage
- Scan the barcode on the socket / Scan the QR code on the storage slot to load. / Place the socket on the scanned location with the QR code facing right. / Repeat the action until you have loaded the required quantity. / Close the door and check the lock. / Click [Done] to go to the Load Materials manual.
- 투입할 렉단의 소모품 및 시약 바코드 스캔 & 투입 위치 바코드 스캔 이미지 & 투입 위치 안착 (4개) & 투입구 닫힘
- Number of filled slots in the storage | Remove
- 02/12 | N/M
- Done

### 사용 컴포넌트

Description Number (5), Frame (1), Button/Secondary_1Button_44 (1), Button/Tertiary_1Button_28 (1)

### 디스크립션 (원문)

#### 1. Socket or Storage 내부 스캔

- Toast 팝업 노출
  - Main text: The scan has been completed.
- 정상) storage 내부 스캔 시
  - ㄴ ② 카운팅 추가
- 위치 스캔 전에 다른 항목 스캔 시
  - ㄴ 마지막 항목으로 교체 & Toast 팝업 노출
- 항목 스캔 전에 위치 먼저 스캔 시
  - ㄴ Toast 팝업 노출: Scan the socket before scanning the storage slot.
- 오류)
  - ~~Case 1) 투입 항목 스캔 시~~
    - ~~ㄴ 유효기간이 만료된 시약을 스캔한 경우~~
    - ~~ㄴ MS_Alert_003 팝업 노출~~
  - Case 1) 검체 없는 빈 socket 스캔 시
    - ㄴ MS_Alert_015 팝업 노출
  - Case 2) 시약 socket 스캔 시
    - ㄴ MS_Alert_001 팝업 노출
  - Case 3) Storage가 열린 상태에서 다른 Storage 코드를 스캔한 경우
    - ㄴ MS_Alert_027 팝업 노출
  - Case 4) 사용 중인 위치값 스캔 시
    - ㄴ MS_Alert_028 팝업 노출
  - Case 5) 이미 적재된 socket 스캔 시
    - ㄴ MS_Alert_029 팝업 노출
    - ㄴ 다른 모듈 storage에 적재된 항목 포함
  - Case 6) storage가 가득 찬 상태에서 새 socket 스캔 시
    - ㄴ MS_Alert_030 팝업 노출

#### 2. Number of filled slots in the storage

- 해당 Storage 적재 개수
  - 디폴트 : N/M
  - 출력 : 적재된 STAT 수 / 적재 가능한 STAT 수
    - ㄴ 적재 가능한 STAT 수: 장비 DB에 따른 자동 출력
  - 카운팅 조건 :
    - 투입 항목 스캔 & storage 내부 스캔 시, 카운팅 추가
- (2-1) [Remove] 버튼
  - 디폴트 : 비활성화
  - 활성화 조건 : STAT 개수가 1개 이상인 경우, 활성화
  - 선택 시 → [LI-TSS-CMP-01] 팝업 노출
    - ㄴ Remove는 변경 예정으로 기록, [Done] 선택 시 반영

#### 3. [Done] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : (2-1) 활성화 정의와 동일
- 선택 시 → 아래 항목 반영
  - STAT 데이터 저장
  - [LI-TSS-DXI] 화면으로 이동 & Toast 팝업 노출
    - ㄴ Toast 팝업 text : DX storage loading is complete.
- 저장 실패 시
  - ㄴ MS_Alert_032 팝업 노출
- ※ 추가 정책 : 사용자가 물리적으로 storage unit을 닫을 경우, [Done] 선택과 동일한 액션을 가짐

#### 4. 모듈명

- 경로 : [LI-TSS-DXI] 화면에서 스캔한 모듈명 스캔 시, 노출
- 노출 :
  - 모듈 1대인 경우 → [모듈명 > 스토리지명] 노출
  - 모듈 N대인 경우 → [모듈명 (인덱스 번호) > 스토리지명] 노출
    - ㄴ ex) 두 번째 모듈 스캔 시, SamplePreparation (2) > STAT storage 노출

### 세부 정의 (원문)

8313:138747 "LI-TSS-DXI-01~07/ 공통정의"

- LI-TSS-DXI-01~07_ 공통정의 > 모듈 N대인 경우, Storage 스캔 시 → 모듈명 (인덱스) 타이틀 노출 예시
  - (GNB) L-IOS | Running | Instrument | T-IOS | D.A PC | Event 888 888 | 2026-04-10 10:35
  - (LNB) Dashboard (All) | Dashboard | Material Setup (Group Lots, Prepare Carrier, Load Materials, Empty Waste Bin) | Test Management | Sample Tracking | Instrument | Inventory | Setting | Information | Quick Start | Run | Admin UserA01 | Shut Down
  - (타이틀) Load Materials / SamplePreparation (N) > STAT storage
  - 1 Scan the barcode on the socket. 2 Scan the QR code on the storage ~~location~~ slot to load. 3 Place the socket on the scanned location with the QR code facing right. 4 Repeat the action until you have loaded the required quantity. 5 Close the door and check the lock. 6 Click [Done] to go to the Load Materials manual.
  - STEP 1. | STEP 2. | STEP 3. | STEP 1~3 Repeat | QR code: Right Side
  - Number of filled ~~sections~~ slots in the storage | Remove | 02/12 | 01/04 | Done

### 케이스

- 없음

### 버전 메모

- v2.1.06 update / DX storage 닫음 시, Done 버튼 기능과 동일 정의
- v2.1.05 update / 이미지 변경 건 - STAT / 정책 변경으로 인한 수정 항목 / - STAT Storage 검체 Only 적재 / 디스크립션 수정 항목 / - 빨간 텍스트 & 취소선 참고 / Alert / Confirm 업데이트 / - Alert_032 팝업 추가
- v2.1.12 update / Module index 표기

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 화면 정보 | Ver 2.0 (2026-06-15) | 버전 메모(v2.1.12까지) 반영 Ver | 버전 메모 | 대기 (확인 필요) |
| 2 | 표기 | 타이틀 "SamplePreparation (N) > STAT storage" (코드명 사용) | Sample Preparation (1) > STAT Storage. 모듈 1대면 Sample Preparation > STAT Storage | `glossary/modules.csv`, `glossary/module-units.csv`, 이름과 번호 띄어쓰기 규칙 | 대기 |
| 3 | 화면 | 카운터 "02/12"와 "N/M"이 겹쳐 있음 | 하나만 | 디스크립션 2 | 대기 |
| 4 | 화면 | 이미지 자리 글자 "투입할 렉단의 소모품 및 시약 바코드 스캔…" (STAT는 Sample Socket 전용) | Sample Socket 적재 이미지로 | 버전 메모 v2.1.05 | 대기 |
| 5 | 디스크립션 | 2 "적재된 STAT 수 / 적재 가능한 STAT 수", 2-1 "STAT 개수" | 적재된 Socket 수 / STAT Storage slot 수 | 디스크립션 | 대기 |
| 6 | 디스크립션 | 3 "물리적으로 storage unit을 닫을 경우 [Done]과 동일" — 저장 실패 시와 Remove 예정 상태 처리 없음 | 닫을 때 저장 실패면 어떻게 하는지 확인 | 디스크립션 3, MS_Alert_032 | 대기 (확인 필요) |
| 7 | 정책 반영 | STAT Storage는 Sample Socket만 적재 (Reagent socket → MS_Alert_001) | 디스크립션에 넣음: STAT Storage에는 Sample Socket만 넣음 (Consumable·Reagent, PK Tube, IC는 넣지 않음) | POL-LOD-003 규칙 1, 2026-11-03 사용자 답변 (MS14) | 대기 |
| 8 | 표기 | "검체", "시약", "socket", "storage", "모듈명", "스토리지명", "Toast 팝업" | Sample, Reagent, Socket, Storage, Module 이름, Storage 이름, Toast | `glossary/terms.csv` | 대기 |
| 9 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | STAT 이미지 변경, STAT Storage는 Sample만 적재, 디스크립션 수정, Alert_032 추가 | BREX | Figma 버전 메모 |
| 2.1.06 | | DX storage를 닫으면 [Done]과 같은 동작 | BREX | Figma 버전 메모 |
| 2.1.12 | | Module index 표기 | BREX | Figma 버전 메모 |
