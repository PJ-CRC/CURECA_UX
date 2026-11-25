---
cid: TI-STN-01
pair_cid: LI-STN-01
tl_relation: 기능 추가
title: Policy Setting
path: Policy Setting
type: Page
version: 2.0
date: 2026.06.15
author: BREX
client_mode: []
user_type: []
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-522708
---
# TI-STN-01 Policy Setting

> 기존 화면(작업방 `Policy Setting_asis` 페이지, Ver 2.0)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: T-IOS에서만 설정(Cost Setting · Extraction Module Usage Setting · Compare · Setting count · PCR Protocol · General Setting · [Save]). L-IOS(LI-STN-01)는 View 화면이고 Extraction Module Usage Setting [View] · Analyze Breakpoint · NC/PC Dispensing Order · Sample Dispensing Options만 디스크립션이 있음
- 호출하는 화면: [TI-STN-01-01] Cost Setting (2), [TI-STN-01-02] Extraction Module Usage Setting (3), [TI-STN-01-03] Comparison Simulation (4-1 Compare), [TI-STN-01-04] Analyze Breakpoint (4-3), Alert_046 (4-3 Cost Setting 미설정), Confirm_010 (9 Save)
- 호출되는 곳: LNB > Setting > Policy Setting

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | L-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) TIOS | Dashboard | Test Management | Sample Tracking | Instrument | Inventory | Statistical Analysis | Setting | Setting | Test Policy Setting | Information | Test Protocol Setting | LIS Setting | System Setting | Account Setting | Keira Knightley
- Policy Setting
- 배너: Policy settings are only available when the instrument status is "Not Initialized" or "Ready"
- Cost Setting [Setting] — Enter consumables and reagents cost.
- Extraction Module Usage Setting [Setting] — Select extraction devices for each test.
- Nucleic Acid Extraction Device Allocation Policy [Compare]
  - Establish priority settings for extraction devices to minimize test costs and TAT (Turnaround Time).
  - Prioritize Cost Reduction — Prioritize High-throughput Extraction for optimal number you entered or more samples; otherwise, prioritize Flexible Extraction. | Setting count 64 | Analyze Breakpoint
  - Prioritize TAT Reduction — Minimize turnaround time by prioritizing High-throughput Extraction
- PCR Protocol Setting — Select the PCR protocol type to be applied to Anyplex II STI, HPV products
  - Cyclic-CMTA | High-Purity Magnetic Bead Extraction
  - End Point-CMTA | Target-Specific Magnetic Bead Extraction
- General Setting — Additional configuration options for laboratory operations.
  - Test Cut-off Time 06:00 — Sets the daily cut-off time for laboratory testing.
  - Allow Protocol Changes Before Test [Off] — Allow editing protocol settings before testing. * If set to ‘OFF’, the protocol specified as ‘Apply’ in ‘Protocol Setting’ will be applied, and ‘Run Preparation Step. 4’ will be skipped.
- NC/PC Dispensing Order — Select the dispensing order of NC and PC on the PCR plate.
  - NC-PC: Negative control is dispensed before Positive control | PC-NC: Positive control is dispensed before Negative control
- Sample Dispensing Options — Choose how to dispense samples: directly to the DWP or via a standard tube.
  - 96-DWP: Dispense directly to the DWP | Standard Tube: Dispense via a standard tube
- Save

### 사용 컴포넌트

Description Number (14), Circle Radio Button (8), 2 Depth (5), Square (4), Popup/Notice (1), Text Field_48/Default (1), Form/Input Text Box (1), Toggle Switch (1), Button/Primary_1Button_62 (1), Component 4 (1), Frame (1), Arrow/Chevron_Up (1)

### 디스크립션 (원문)

#### 1. 검사 정책 설정 배너

- 디폴트 : 항상 노출
- 장비 상태 ≠ ‘Not Initialized’ or ‘Ready’인 경우, ② ~ ⑦ 기능 버튼 모두 비활성화

#### 2. Cost Setting

- 선택 시 → [TI-STN-01-01] 팝업 노출

#### 3. Extraction Module Usage Setting

- 선택 시 → [TI-STN-01-02] 팝업 노출

#### 4. Nucleic Acid Extraction Device Allocation Policy

- 디폴트 : Prioritize Cost Reduction
- 선택 시 → 해당 항목 라디오 버튼 활성화
- 4-1 [Compare] 버튼
- 선택 시 → [TI-STN-01-03] 팝업 노출
- 4-2 Setting count
- 선택 시 → 해당 Input field Key-in
- Min/Max 값 : 1 ~ 94
- ㄴ 사용자가 1 미만 값 입력 시 → ‘1’로 자동 출력
- ㄴ 사용자가 94 초과 값 입력 시 → ‘94’로 자동 출력
- 4-3 Analyze Breakpoint 선택 시
- 정상) [TI-STN-01-04] 팝업 노출
- 오류) Cost Setting 미설정 & (4-3) 버튼 선택 Case
- Alert_046 노출

#### 5. PCR Protocol Setting

- 디폴트 : Cyclic-CMTA
- 선택 시 → 해당 항목 라디오 버튼 활성화

#### 6. General Setting

- 6-1 Test Cut-off Time
- 디폴트 : 06:00
- 선택 시 → Input 필드 key in
- 필드 입력 정의 참고 → 세부정의 참고
- 6-2 Allow Protocol Changes Before Test
- 디폴트 : On
- 선택 시 → 토글 비활성화

#### 7. NC/PC Dispensing Order 영역

- 노출 조건 : Service 계정으로 로그인 시, 해당 영역 노출
- 그 외 계정으로 로그인 시, 해당 영역 미노출
- 디폴트 : NC-PC

#### 8. Sample Dispensing Options

- 노출 조건 : Service 계정으로 로그인 시, 해당 영역 노출
- 그 외 계정으로 로그인 시, 해당 영역 미노출
- 디폴트 : 96-DWP

#### 9. [Save] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : ① ~ ⑧ 항목 중 변경 이벤트 발생 시, 활성화
- 값 수정 후, 최종 데이터가 기존 값과 동일하더라도 활성화 유지
- 선택 시 → Confirm_010 노출

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

케이스 프레임은 없고, 디스크립션 6-1 "세부정의 참고"가 가리키는 별도 프레임 `TI-STN-01 / 세부정의`([3543:523249](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-523249), 728×489, 기획 프레임 오른쪽)가 있습니다. 원본에 Case 번호가 없습니다.

| Case | 제목 (원문) | 조건 | 프레임 |
| --- | --- | --- | --- |
| - | Input field Case 정의 — (6-1) Typing Case_Key in | Test Cut-off Time 입력 | 위 프레임 |
| - | (6-1) 시/분 입력 초과 Case → 최대값으로 자동 조정 | 시 · 분 최대값 초과 입력 | 위 프레임 |

- 입력 예시: 24:00 → 00:00 | 06:00 / 27:00 → 23:00 / 06:78 → 06:59
- 설명: `시(hh) Min/Max 값 : 00 ~ 23` / `사용자가 24 입력 시 → ‘00’으로 자동 치환` / `사용자가 25 이상의 값 입력 시 → ‘23’으로 자동 출력` / `분(mm) Min/Max 값 : 00 ~ 59` / `사용자가 60 이상의 값 입력 시 → ‘59’로 자동 출력`
