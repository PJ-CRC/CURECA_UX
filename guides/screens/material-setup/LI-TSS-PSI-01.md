---
cid: LI-TSS-PSI-01
pair_cid:
tl_relation: 단독
title: Select Trolley
path: Material Setup > Prepare Carrier > Select Trolley
type: Popup
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-397754
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-PSI-01 Select Trolley

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: TSS Mode. Sample 구성을 마친 Trolley를 골라 그 Trolley에 필요한 수량(Required Quantity)을 다음 적재 화면에 보여 줌
- 관련 정책: POL-MAT-007
- 호출하는 화면: (흐름별) LI-TSS-PSI-PKI-01 / LI-TSS-PSI-PKI-02, LI-TSS-PSI-LPR-01 / LI-TSS-PSI-LPR-02, LI-TSS-PSI-LCR-01-01 / LI-TSS-PSI-LCR-01-02. (3-1) Loading Popup "Please wait"
- 주 프레임: Load PK/IC Tubes 흐름 8073:397754
- 다른 프레임 (흐름별 이동 대상이 다름):

| 흐름 | 프레임 | [Skip] 이동 | [Select] 이동 | 그 밖의 차이 |
| --- | --- | --- | --- | --- |
| Load PK/IC Tubes | 주 프레임 8073:397754 | ~~LCR-01-02~~ PKI-02 | ~~LCR-01-01~~ PKI-01 | |
| Load PCR Reagents | [8073:398051](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8073-398051) | ~~LCR-01-02~~ LPR-02 | ~~LCR-01-01~~ LPR-01 | 1 출력에 "No." 추가 (화면에는 No. 열 없음) |
| Load Consumables and Reagents | [8011:129297](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8011-129297) | LCR-01-02 | LCR-01-01 | 2 Skip "필요 수량 미노출 ㄴ 모든 소모품/시약 스캔 가능"으로 적음. 1-1 "마지막 [Done] 기준, 수정 시 갱신"을 하위 줄로 적음 |

## 기존 화면

### 화면 글자

- Select Trolley
- Trolley name | Setup Date/Time
- Trolley001 | 2026-03-24 10:27:12 (Trolley002~005 같은 형식 반복)
- Skip | Select

### 사용 컴포넌트

Circle Radio Button (5), Description Number (4), Table (3), Button/Secondary_1Button_44 (2), Popup (1)

### 디스크립션 (원문)

#### 1. Trolley 목록

- 노출 조건 :
  - 검체 구성이 완료된 trolley & ‘Run start’ 전인 경우 노출
- 출력 :
  - Trolley name
  - Setup Date/Time
- 정렬 : (1-1) 내림차순
- 1-1 Setup Date/Time
  - 정의 : [LI-TSS-PSI-SAM-03-02] 화면에서 [Done] 버튼 클릭한 시점 (마지막 [Done] 기준, Trolley 수정 시 갱신) 노출

#### 2. [Skip] 버튼

- 선택 시 → ~~[LI-TSS-PSI-LCR-01-02]~~ [LI-TSS-PSI-PKI-02] 화면으로 이동
- 필요 수량 미노출 (필요 목록·수량 제한 없이 스캔 가능)

#### 3. [Select] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : 목록 Row 선택 시 활성화
- 선택 시 → ~~[LI-TSS-PSI-LCR-01-01]~~ [LI-TSS-PSI-PKI-01] 화면으로 이동
  - ㄴ 해당 팝업 닫힘 & Dim 유지 & (3-1) 팝업 노출 → 완료 시, 자동 이동
- (3-1) Please wait
  - This may take a few minutes.
  - OK

### 케이스

- 없음

### 버전 메모

- v2.1.05 update / 디스크립션 수정 항목 / - 빨간 텍스트 & 취소선 참고 (세 프레임 같음)

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | IA | (3-1) Loading Popup "Please wait / This may take a few minutes. / OK"가 이 디스크립션 안에만 있음. IA LI-TSS-PSI-01-01(Loading)의 기획 화면 프레임 없음 (1280 프레임 `LI-TSS-PSI-01-1280_Loading`만 있음) | LI-TSS-PSI-01-01 화면을 따로 그릴지, 이 CID 안에 둘지 | `ia/ia-screens.csv`, 작업방 2차 페이지 5341:445958 | 대기 (확인 필요) |
| 2 | 디스크립션 | (3-1) Loading Popup에 [OK] 버튼이 있는데 "완료 시, 자동 이동" | 버튼을 둘지 확인 | 디스크립션 3 | 대기 (확인 필요) |
| 3 | 디스크립션 | 목록이 비었을 때(Sample 구성을 마친 Trolley가 없을 때) 정의 없음 | 빈 상태와 [Select] 비활성 정의 | 디스크립션 1 | 대기 (확인 필요) |
| 4 | 디스크립션 | "검체 구성이 완료된 trolley & ‘Run start’ 전" | Sample 구성이 완료된 Trolley & Run 시작 전. 한 Trolley를 여러 흐름(LCR·PKI·LPR)에서 각각 고르는지 확인 | `glossary/terms.csv` | 대기 (확인 필요) |
| 5 | 디스크립션 | LPR 프레임만 출력에 "No." 있음 (화면에는 없음) | 통일 | 8073:398051 | 대기 |
| 6 | 표기 | "검체", "소모품/시약", "trolley", "팝업" | Sample, Consumable/Reagent, Trolley, Popup | `glossary/terms.csv` | 대기 |
| 7 | 정책 반영 | Select Trolley의 목적이 없음 | 디스크립션에 넣음: Consumable Tray를 구성할 때 기준을 주려고 Sample Trolley를 고름. 고른 Trolley의 Sample 기준 필요 개수를 보여 줌 | 2026-11-03 사용자 답변 (MS2) | 대기 |
| 8 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.05 | | 디스크립션 수정 (빨간 텍스트 & 취소선). 흐름별 이동 대상 변경 | BREX | Figma 버전 메모 |
