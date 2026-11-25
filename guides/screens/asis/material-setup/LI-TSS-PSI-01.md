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
client_mode: [Console Mode]
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

> 기존 화면(기존 작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode. Sample 구성을 마친 Trolley를 골라 그 Trolley에 필요한 수량(Required Quantity)을 다음 적재 화면에 보여 줌
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
