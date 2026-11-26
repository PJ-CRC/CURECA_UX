---
cid: LI-STN-01
pair_cid: TI-STN-01
tl_relation: 기능 추가
title: Policy Setting
path: Policy Setting
type: Page
version: 2.0
date: 2026.06.15
author: BREX
client_mode: [Main Mode, Console Mode, MS Mode]
user_type: [Service, Admin]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-522491
---
# LI-STN-01 Policy Setting

> 기존 화면(작업방 `Policy Setting_asis` 페이지, Ver 2.0)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: L-IOS는 View 화면(세부 항목 설정은 T-IOS에서만). L에는 Cost Setting · Compare · [Save]가 없고 Extraction Module Usage Setting 버튼이 [View]. T-IOS(TI-STN-01)는 9개 블록으로 설정 동작 · 기본값 · 입력 범위를 정의
- 호출하는 화면: [LI-STN-01-02] Extraction Module Usage Setting (2 View), Analyze Breakpoint 팝업 (3, 원문 `[LI-STN-01-03]`. IA의 Analyze Breakpoint는 [LI-STN-01-04])
- 호출되는 곳: LNB > Setting > Policy Setting
- 관련 정책: POL-TST-001

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳도 그대로 옮깁니다. 그 화면의 To-Be 작업 1단계에서 읽으며 찾아 그 작업에서 고칩니다(`flow/1-requirements.md` 절차 4번 순서 3 "뒤 단계로 넘김"의 5). -->

### 화면 글자

- (GNB) Running | Instrument | T-IOS | D.A PC | Event | Error 3 | Warning 2 | 2026-04-10 11:30
- (LNB) LIOS | Dashboard | Material Setup | Test Management | Sample Tracking | Instrument | Inventory | Setting | Information | Quick Start | Run | Keira Knightley | Shut Down
- Policy Setting
- 배너: You can configure the following settings in the T-IOS
- Extraction Module Usage Setting [View] — Select extraction devices for each test.
- Nucleic Acid Extraction Device Allocation Policy
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

### 사용 컴포넌트

Circle Radio Button (8), Description Number (5), Square (2), Popup/Notice (1), Text Field_48/Default (1), Form/Input Text Box (1), Toggle Switch (1), Component 4 (1), Frame (1)

### 디스크립션 (원문)

#### 1. Policy Setting

- 정의 : L-IOS에서는 View 화면 제공
- 세부 항목 설정의 경우 T-IOS 화면에서 가능 (only)

#### 2. Extraction Module Usage Setting

- 선택 시 → [LI-STN-01-02] 팝업 노출

#### 3. Analyze Breakpoint

- 선택 시 → [LI-STN-01-03] 팝업 노출

#### 4. NC/PC Dispensing Order 영역

- 노출 조건 : Service 계정으로 로그인 시, 해당 영역 노출
- 그 외 계정으로 로그인 시, 해당 영역 미노출
- 디폴트 : NC-PC

#### 5. Sample Dispensing Options

- 노출 조건 : Service 계정으로 로그인 시, 해당 영역 노출
- 그 외 계정으로 로그인 시, 해당 영역 미노출
- 디폴트 : 96-DWP

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

없음 (`Policy Setting_asis` 페이지에 LI-STN-01 케이스 프레임 없음)
