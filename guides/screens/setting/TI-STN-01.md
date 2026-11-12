---
cid: TI-STN-01
pair_cid: LI-STN-01
tl_relation: 기능 추가
title: Policy Setting
path: Setting > Policy Setting
type: Page
version: 2.0
date: 2026-06-15
author: BREX
service_mode: []
user_type: [Service, Admin]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=6596-296136
figma_region: 2.1 2차
---
# TI-STN-01 Policy Setting

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T/L 차이: T-IOS에서만 설정. L-IOS(LI-STN-01)는 조회만
- 관련 정책: POL-TST-001, POL-TST-002, POL-TST-003, POL-TST-004, POL-TST-005
- 호출하는 화면: Cost Setting (TI-STN-01-01), Extraction Module Usage Setting (TI-STN-01-02), Comparison Simulation (TI-STN-01-03), Analyze Breakpoint (TI-STN-01-04)

## 기존 화면

### 화면 글자

- 배너: Policy settings are only available when the instrument status is "Not Initialized" or "Ready"
- Cost Setting | Setting | Enter consumables and reagents cost.
- Extraction Module Usage Setting | Setting | Select extraction devices for each test.
- Nucleic Acid Extraction Device Allocation Policy | Compare | Establish priority settings for extraction devices to minimize test costs and TAT (Turnaround Time).
  - Prioritize Cost Reduction | Setting count | Analyze Breakpoint — "Prioritize High-throughput Extraction for optimal number you entered or more samples; otherwise, prioritize Flexible Extraction."
  - Prioritize TAT Reduction — "Minimize turnaround time by prioritizing High-throughput Extraction"
- Policy Comparison & Simulation: Prioritize Cost Reduction (STARlet) | Prioritize Cost Reduction (M9600), Test Cost $100 | $120, Test Turnaround Time (TAT) 4h 20m | 3h 10m
- PCR Protocol Setting: Select the PCR protocol type to be applied to Anyplex II STI, HPV products | Cyclic-CMTA (High-Purity Magnetic Bead Extraction) | End Point-CMTA (Target-Specific Magnetic Bead Extraction)
- General Setting: Additional configuration options for laboratory operations. Test Cut-off Time 06:00 (Sets the daily cut-off time for laboratory testing.), Allow Protocol Changes Before Test (Allow editing protocol settings before testing. * If set to ‘OFF’, the protocol specified as ‘Apply’ in ‘Protocol Setting’ will be applied, and ‘Run Preparation Step. 4’ will be skipped.)

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
- 4-1 [Compare] 버튼: 선택 시 → [TI-STN-01-03] 팝업 노출
- 4-2 Setting count: 선택 시 → 해당 Input field Key-in. Min/Max 값 : 1 ~ 94. 사용자가 1 미만 값 입력 시 → ‘1’로 자동 출력. 사용자가 94 초과 값 입력 시 → ‘94’로 자동 출력
- 4-3 Analyze Breakpoint 선택 시: 정상) [TI-STN-01-04] 팝업 노출. 오류) Cost Setting 미설정 & (4-3) 버튼 선택 Case → Alert_046 노출

#### 5. PCR Protocol Setting

- 디폴트 : Cyclic-CMTA
- 선택 시 → 해당 항목 라디오 버튼 활성화

#### 6. General Setting

- 6-1 Test Cut-off Time: 디폴트 : 06:00. 선택 시 → Input 필드 key in. 필드 입력 정의 참고 → 세부정의 참고
- 6-2 Allow Protocol Changes Before Test: 디폴트 : On. 선택 시 → 토글 비활성화

#### 7. NC/PC Dispensing Order 영역

- 노출 조건 : Service 계정으로 로그인 시, 해당 영역 노출. 그 외 계정으로 로그인 시, 해당 영역 미노출
- 디폴트 : NC-PC

#### 8. Sample Dispensing Options

- 노출 조건 : Service 계정으로 로그인 시, 해당 영역 노출. 그 외 계정으로 로그인 시, 해당 영역 미노출
- 디폴트 : 96-DWP

#### 9. [Save] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : ① ~ ⑧ 항목 중 변경 이벤트 발생 시, 활성화
- 값 수정 후, 최종 데이터가 기존 값과 동일하더라도 활성화 유지
- 선택 시 → Confirm_010 노출

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 1 "장비 상태 ≠ Not Initialized or Ready" | 장비 통합 상태로 명시 (POL-TST-001) | `glossary/glossary.md` 상태 단계 | 대기 |
| R02 | 디스크립션 | 6-1 Test Cut-off Time "세부정의 참고" (세부 정의가 화면에 없음) | POL-TST-002 참조 | POL-TST-002 | 대기 |
| R03 | 정책 반영 | 5 PCR Protocol Setting 선택지가 디스크립션에 없음 (기본값만) | 선택지 Cyclic-CMTA, End Point-CMTA를 디스크립션에 넣음 | POL-TST-001 규칙 7 | 대기 |
| R04 | 정책 반영 | 6-2 Allow Protocol Changes Before Test의 뜻이 디스크립션에 없음 | Run 준비의 Check Test Protocol 단계 표시 여부임을 디스크립션에 넣음 | POL-TST-001 규칙 8 | 대기 |
| R05 | 정책 반영 | 7·8 "Service 계정" | User Type이 Service일 때만 (POL-ACC-001) | `glossary/terms.csv` | 대기 |
| R06 | 화면 정보 | 작성자 "BREX", Ver 2.0이나 버전 메모 v2.1.14 있음 | 화면 정보 Ver를 최신으로 | Figma | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.14 | | Alert_046 노출 케이스 추가 | | Figma 버전 메모 |
