---
status: 진행 중
requester: 최고관리자
menu: Instruments
cids: [TI-INS-01-T, LI-INS-01-T, TI-INS-02-T, LI-INS-02-T, TI-INS-02-01-P, LI-INS-02-01-P, LI-INS-01-P]
policies: [POL-EQP-008, POL-EQP-004]
cid_system:
figma: UX AI TEST (etCQFF3CTf1EA6C79d4BBf) · Instrument Ⓛ / Ⓣ _re
test: false
basis_start: 2026-11-23 15:40 · history ab035635 · Common UX 가이드 (UX가이드_Common-UX-가이드)
basis:
basis_versions:
  rules:
  policy:
  glossary:
  screens:
  ux_guide:
started: 2026-11-23
---
# 작업 기록: Instruments 메뉴 화면을 작업규칙에 맞춰 작업방(Instrument Ⓛ / Ⓣ _re)에 다시 그림

## 단계

| 단계 | 끝낸 날 | 마침 점검 | 남긴 것 |
| --- | --- | --- | --- |
| 1. 시작 · 요건 정의 | 2026-11-23 | 요청자 확인 (2026-11-23) | 겹치는 다른 작업: 없음 (같은 메뉴의 20261117-최고관리자-instruments는 `멈춤`이라 열린 기록으로 보지 않음). 케이스 3 화면 7개 다시 옮김(2.1 2차, 7개 모두 바뀐 곳 있음 — Ver 2.1.17 ~ 2.1.18) · tobe 화면 MD 7개 빈 틀로 만들고 반영 대기 항목 옮김 · 점검 발견 6건 |
| 2. 근거 · 분석 | 2026-11-23 | 요청자 확인 (2026-11-23) | 정책 수정 범위 1 (DS-0011 결정 A), 영향 화면 2 (LI-DAS · TI-DAS), 3단계 질문 대기로 넘길 것 6 |
| 3. 화면 설계 | | | |
| 4. 수정 · 확인 | | | |
| 5. 완료 | | | |

이어서 작업할 곳: 3단계 · 처음부터 (2단계 마침 2026-11-23. DS-0011 A 결정: Door 자동 잠금 없음 · [Lock] · Confirm_031로 그림. 케이스 화면 모두 그림: Management Service / Admin · User, L-IOS MS Mode Door Control X. 새 세션으로 이어 감)

## 요청

- 요청 글: "Instrument 작업 규칙에 맞춰 화면 다시 그려줘"
- 출처: Workbench 요청 R047 (최고관리자, 2026-11-23 15:39), 페이지 요청(프레임 지정 없음) · UX AI TEST › Instrument Ⓛ / Ⓣ _re
- 요청 자료 없음
- 시작 주체: -

## 요건 목록

| 번호 | 요건 | 대상 화면 | 케이스 | 요청 상태 | 작업 대상 | 비고 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Instruments 화면을 기존 작업방에서 작업방(Instrument Ⓛ / Ⓣ _re)으로 옮겨 작업규칙대로 다시 그림 | Overview Tab (TI-INS-01-T) | 3 | 최초 | O | IA Instrument > Overview. `screens/tobe/`에 화면 MD 없었음(2026-11-23 빈 틀 만듦, `figma` 비어 있음) |
| 1 | 같음 | Overview Tab (LI-INS-01-T) | 3 | 최초 | O | 짝 화면 · 함께 고침 (요청 글: Instrument 화면 전체) |
| 1 | 같음 | All Tab (TI-INS-02-T) | 3 | 최초 | O | IA Instrument > All |
| 1 | 같음 | All Tab (LI-INS-02-T) | 3 | 최초 | O | 짝 화면 · 함께 고침 (요청 글: Instrument 화면 전체) |
| 1 | 같음 | Management Popup (TI-INS-02-01-P) | 3 | 최초 | O | IA Instrument > All > Management |
| 1 | 같음 | Management Popup (LI-INS-02-01-P) | 3 | 최초 | O | 짝 화면 · 함께 고침 (요청 글: Instrument 화면 전체) |
| 1 | 같음 | Door Control Popup (LI-INS-01-P) | 3 | 최초 | O | 짝 없음 (L-IOS만, IA) |

- 범위: 요청 글 "Instrument … 화면"을 IA의 Instrument 메뉴(INS) 7화면으로 봄. 작업 페이지에 있는 Test Order (TI-TMG-01) 프레임은 다른 메뉴(TMG)라 넣지 않음. Run-time Info Popup (TI-INS-02-02-P) 프레임은 페이지에 있으나 IA에 없고 원본 All Tab 4-1에서 취소선으로 제거됨 → 넣지 않음 (확인할 것 9)
- 1280 프레임(`_1280` · `-1280` · `_1280_Skeleton`)은 이 흐름의 대상이 아니라 요건으로 뽑지 않음

### 찾았지만 대상 아님

다른 화면 없음 (케이스 3 옮겨 다시 그리기라 바꾸는 글자 · 요소가 없음)

### 영향 화면

| 화면 (CID) | 찾은 곳 | 영향 | 처리 |
| --- | --- | --- | --- |
| Dashboard (LI-DAS) | 2단계 정책 (POL-EQP-008 · POL-EQP-004, DS-0011) | 확인 필요 (Door 잠금 · Door Control 안내가 자동 잠금 기준이면 디스크립션 변경) | 완료 때 만듦 |
| Dashboard (TI-DAS) | 2단계 정책 (POL-EQP-008 · POL-EQP-004, DS-0011) | 확인 필요 | 완료 때 만듦 |

- DS-0011이 A(기존 화면대로)로 결정될 때만 영향이 생김. 같은 CID 체계(INS)로 정책에서 더 찾은 화면은 없음

## 읽은 기존 화면

| 화면 (CID) | 읽은 것 (화면 MD / 기획 프레임 / 케이스 프레임 / 호출 화면) | Figma 링크 |
| --- | --- | --- |
| Overview Tab (TI-INS-01-T) | 화면 MD (다시 옮김 · 바뀐 곳 있음 (2.1 2차, Ver 2.1.06 → 2.1.18, 작성자 이상헌, 버전 메모 v2.1.18 모듈 명칭 변경 — 화면 글자는 2026-11-18 연동 변경과 같음). 패널 CID가 TI-INS-02-T인 것은 R03 그대로), 반영 대기 | [3249:111508](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-111508) |
| Overview Tab (LI-INS-01-T) | 화면 MD (다시 옮김 · 바뀐 곳 있음 (2.1 2차 새 노드, Ver 2.1.18, v2.1.17 Door Status 툴팁 취소선 · 6 Unlock 버튼에 Lock 기능, 범례 순서)), 반영 대기 | [10069:367211](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-367211) |
| All Tab (TI-INS-02-T) | 화면 MD (다시 옮김 · 바뀐 곳 있음 (Ver 2.1.18, 취소선 표시, v2.1.18 Docking Status 표기 방식 추가)), 반영 대기 | [3249:111981](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-111981) |
| All Tab (LI-INS-02-T) | 화면 MD (다시 옮김 · 바뀐 곳 있음 (2.1 2차 새 노드, Ver 2.1.18, v2.1.17 Door 3 · 3-1 Lock Status · [Lock] 버튼 · Confirm_031)), 반영 대기 | [10069:367730](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-367730) |
| Management Popup (TI-INS-02-01-P) | 화면 MD (다시 옮김 · 바뀐 곳 있음 (Ver 2.1.01 → 2.1.18 모듈 명칭)), 케이스 2개(Error Rate 미표기 / 표기), 반영 대기 | [3249:112456](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-112456) |
| Management Popup (LI-INS-02-01-P) | 화면 MD (다시 옮김 · 바뀐 곳 있음 (2.1 2차 새 노드, Ver 2.1.18 모듈 명칭)), 케이스 2개, 반영 대기 | [10069:368209](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-368209) |
| Door Control Popup (LI-INS-01-P) | 화면 MD (다시 옮김 · 바뀐 곳 있음 (2.1 2차 새 노드, Ver 2.1.17: 자동 잠금 폐지 · [Lock] 버튼 · 안내 문구 · Confirm_031)), 케이스 프레임 10069:368639, 반영 대기 | [10069:368536](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-368536) |
| 호출 화면: Event History Popup (TI-EVT-P · LI-EVT-P), Material Setup > Load Materials · Empty Waste Bin (LI-INS-01-P를 부름) | 무엇을 열고 어디로 가는지만 (All Tab 1-3 · 7-1, Door Control 호출 위치) | |

- 기존 작업방 Instrument 페이지(281:1770)에서 7개 CID 모두 민트색(2.1 2차) 영역의 화면을 옮김. asis 화면 MD 7개를 원본대로 다시 쓰고(머리말 · 기존 화면 · 변경 이력), To-Be 화면 MD 7개(`screens/tobe/instrument/`)를 빈 틀로 만들어 asis 반영 대기 항목을 ID 그대로 모두 옮김(asis 목록 위에 "`screens/tobe/`로 옮김 (2026-11-23)").
- 옮기며 찾은 점검 발견 6건을 To-Be 반영 대기 목록에 더함: TI-INS-01-T R07 · LI-INS-01-T R06 · TI-INS-02-T R11 · LI-INS-02-T R10 (Tab 이름 "Ht Extraction"), TI-INS-02-01-P R09 · LI-INS-02-01-P R05 (화면 예시 Device 행이 `glossary/module-units.csv`와 다름). 옮긴 Module · Unit 이름은 `glossary/modules.csv` · `module-units.csv`와 맞음.

## 요건별 진행 경로

| 요건 | 경로 분기 기준 (근거) | 지나가는 단계 | 문구 | UI 작업 |
| --- | --- | --- | --- | --- |
| 1 Instruments 7화면 옮겨 다시 그림 | 8 옮겨 다시 그림 (요건 목록 케이스 3) | 1 → 2 → 3 → 4 → 5 | 안 바뀜 | 대상 아님 |

작업이 지나가는 단계: 1 → 2 → 3 → 4 → 5

- 2단계 읽은 강도: 요건 1 = 케이스 3 (다시 그리기). 경로 분기 기준은 바뀌지 않음 (2026-11-23)
- 2단계 질문 4 (화면이 갈리는 곳): Management Popup (TI-INS-02-01-P) User Type Service (Enabled 변경 · Error Rate 표시) / Admin · User (조회만, Error Rate 없음) — 기존 케이스 2개(Error Rate 미표기 / 표기)가 있음. L-IOS Client Mode MS Mode는 Door Control X (`policy/client-mode-matrix.csv`) — Overview Tab (LI-INS-01-T) 6 [Door Control] · All Tab (LI-INS-02-T) [Unlock]

## 확인할 것

| # | 무엇 (절차 4번 순서 3의 1 ~ 6) | 관련된 곳 (CID · 디스크립션 번호) | 넘기는 곳 (2단계 / 3단계 질문 대기) | 이어진 번호 (Q · C · 논의 대상 ID / 근거로 풀림) |
| --- | --- | --- | --- | --- |
| 1 | 1. 기능 정의가 안 된 요소: Door Control 안내 문구가 원본 화면 · 케이스에 세 가지("Close the door, then press Lock to lock it." / "Close the door and press Lock. The module will resume once locked." / "Close the door and press the 'Lock' button to resume the module"), 어느 때 무엇을 보이는지 디스크립션 2-6에 없음 | LI-INS-01-P #2-6 · #2-7 | 3단계 질문 대기 | 3단계로 |
| 2 | 2. Alert · Confirm 보완 필요 지점: Management [Cancel]로 바꾼 값이 있는 채 닫을 때 묻는지 디스크립션에 없음 | TI-INS-02-01-P #3 | 2단계 | 3단계로 (관련 자료 없음, 팝업용 확인 알럿 없음) |
| 3 | 2. Alert · Confirm 보완 필요 지점: [Unlock all doors]를 누를 때 확인 팝업이 디스크립션에 없음 (개별 [Unlock]은 Running이면 확인 팝업) | LI-INS-01-P #3 | 2단계 | 3단계로 (알럿 카탈로그에 없음) |
| 4 | 3. IA와 화면이 다른 곳: 화면 정보 경로 "Instrument > Overview Tab" 등(IA는 Instrument > Overview), TI-INS-01-T 패널 CID가 TI-INS-02-T(반영 대기 R03) | 7화면 화면 정보 | 3단계 질문 대기 | 3단계로 |
| 5 | 5. 반영 대기 R04가 `대기 (확인 필요)`: Running Module Unlock 확인 문구가 Confirm_008과 다름 | Door Control Popup (LI-INS-01-P) R04 | 2단계 | 3단계로 (카탈로그 Confirm_008은 All Tab용 "Unlock the door?", Door Control 확인 문구는 카탈로그에 없음) |
| 6 | 5. 반영 대기 R09가 `대기 (임시 정책 적용 예정)`: Run 중 잠금 해제 후 Door를 열지 않은 경우 (PV-0001) | Door Control Popup (LI-INS-01-P) R09 | 2단계 | 3단계로 (옛 PV-0001 승인 대기) |
| 7 | 5. 반영 대기 R06이 `대기 (정의 필요)` · R07이 `대기 (고객 논의)`: Running이 아닌 이유로 바꿀 수 없을 때의 알럿, Error Rate 표시 위치(CA-0001) | Management Popup (TI-INS-02-01-P) R06 · R07, (LI-INS-02-01-P) R03 | 2단계 | 3단계로 (R06 알럿 정의 없음, R07 · R03은 옛 CA-0001 고객 논의) |
| 8 | 5. 반영 대기 R10이 `대기 (확인 필요)`: LNB에 Instrument가 두 번 (L-IOS도 Instruments · Instrument 둘) | All Tab (TI-INS-02-T) R10, LI-INS-02-T 화면 | 3단계 질문 대기 | 3단계로 |
| 9 | 3. IA와 화면이 다른 곳: 작업 페이지에 Run-time Info Popup (TI-INS-02-02-P) 기획 프레임이 있으나 IA에 없음 (원본 All Tab 4-1 취소선으로 제거) | TI-INS-02-02-P | 3단계 질문 대기 | 근거로 풀림 (`policy/permission-matrix.csv`: Runtime Info Popup은 IA v1.03에서 제거 → 그리지 않음) |
| 10 | 6. 요청에서 생긴 물음 (기존 화면과 맞지 않음): 반영 대기 R02 · R06의 "지금"(자동 잠금 문구 · Lock 버튼 없음)이 원본 v2.1.17(자동 잠금 폐지 · [Lock] 버튼)과 다름. POL-EQP-008과 대조해 바꿀 것을 다시 정함 | Door Control Popup (LI-INS-01-P) R02 · R06, LI-INS-01-T 6, LI-INS-02-T 3 · 3-1 | 2단계 | DS-0011 |

## 이번에 반영할 반영 대기 항목

| 묶음 (근거) | 화면 (CID) | 항목 ID | 변경 전 | 변경 후 | 반영 / 이번엔 안 함 |
| --- | --- | --- | --- | --- | --- |
| 1 오타 · 용어 (오타, `glossary/terms.csv`) | Overview Tab (TI-INS-01-T) | TI-INS-01-T R02 · R05 | "Cureca", Enablde, Dignosctics | CURECA, Enabled, Diagnostics | 반영 (2026-11-23) |
| 1 오타 · 용어 | Overview Tab (LI-INS-01-T) | LI-INS-01-T R01 · R03 | 같음 | 같음 | 반영 (2026-11-23) |
| 1 오타 · 용어 | All Tab (TI-INS-02-T) · (LI-INS-02-T) | TI-INS-02-T R09, LI-INS-02-T R09 | T-IO S, Account type | T-IOS, User Type | 반영 (2026-11-23) |
| 1 오타 · 용어 | Management Popup (TI-INS-02-01-P) | TI-INS-02-01-P R01 · R02 | "Account Type의 Sevice", [Cancle], Datail | User Type이 Service일 때만, [Cancel], Detail | 반영 (2026-11-23) |
| 1 오타 · 용어 | Management Popup (LI-INS-02-01-P) | LI-INS-02-01-P R01 · R04 | "Account Type의 Sevice", Datail | User Type이 Service일 때만, Detail | 반영 (2026-11-23) |
| 1 오타 · 용어 | Door Control Popup (LI-INS-01-P) | LI-INS-01-P R05 | Ruuning, Lcok | Running, Lock | 반영 (2026-11-23) |
| 2 Module · Unit · 상태값 표기 (`glossary/`) | All Tab (TI-INS-02-T) · (LI-INS-02-T) | TI-INS-02-T R01 · R03 · R05 · R06 · R11, LI-INS-02-T R01 · R03 · R05 · R06 · R10 | Unconnected, STAT Storage (Upper/Lower), 이름(번호) 붙여 씀, Waste Status, Tab "Ht Extraction" | Disconnected, STAT Storage, 이름 (번호), Waste Bin/Bottle Status, High-throughput Extraction | 반영 (2026-11-23) |
| 2 Module · Unit · 상태값 표기 | Overview Tab (TI-INS-01-T) · (LI-INS-01-T) | TI-INS-01-T R07, LI-INS-01-T R06 | Tab "Ht Extraction" | High-throughput Extraction | 반영 (2026-11-23) |
| 2 Module · Unit · 상태값 표기 | Management Popup (TI-INS-02-01-P) · (LI-INS-02-01-P) | TI-INS-02-01-P R08 · R09, LI-INS-02-01-P R05 | 헤더 "Enable", 예시 Device 행이 섞임 | Enabled, Device Unit 4개 기준 예시 | 반영 (2026-11-23) |
| 3 화면 정보 · 디스크립션을 화면에 맞춤 (Figma 버전 메모 · IA · 알럿 카탈로그) | Overview Tab (TI-INS-01-T) | TI-INS-01-T R01 · R03 · R04 · R06 | Alert_L_004, 패널 CID TI-INS-02-T, 3-2 Total/In Use/Not in Use, 3-5 "Instrument Detail Info page 참고" | Alert_004, TI-INS-01-T, Enabled n · Total n (Disabled n), 상태값 표 · POL-EQP-001 참조 | 반영 (2026-11-23) |
| 3 화면 정보 · 디스크립션을 화면에 맞춤 | Overview Tab (LI-INS-01-T) | LI-INS-01-T R02 · R05 | 3-2 Total/In Use/Not in Use, 버튼 "Door Control" / 디스크립션 "Unlock 버튼" | Enabled 표기, 하나로 통일 | 반영 (2026-11-23) |
| 4 정책 반영 (POL-EQP-008 · POL-EQP-009 · POL-EQP-004, 알럿 카탈로그) | Management Popup (TI-INS-02-01-P) | TI-INS-02-01-P R03 · R04 · R05 | 변경 권한 · 변경 가능 상태 · Device Unit 설정 대상 | Service만 변경, 통합 · 모듈 상태 Ready/Not Initialized, 같은 Device 2대 이상일 때만 (POL-EQP-009) | 반영 (2026-11-23) |
| 4 정책 반영 | Management Popup (LI-INS-02-01-P) | LI-INS-02-01-P R02 | 조회 전용이 분명하지 않음 | 모든 User Type 조회만 | 반영 (2026-11-23) |
| 4 정책 반영 | Overview Tab (LI-INS-01-T) · All Tab (LI-INS-02-T) | LI-INS-01-T R04, LI-INS-02-T R08 | 6 "COMM-3-a", 3-1 [Unlock] 문장 끊김 · Confirm_008 | 잠금 해제 조건은 POL-EQP-008 참조, Door Control 흐름으로 정리 | 반영 (2026-11-23) |
| 4 정책 반영 | Door Control Popup (LI-INS-01-P) | LI-INS-01-P R01 · R03 · R07 · R08 | Unlock all doors 조건 메모, 안내 문구 두 가지, Paused 문장, 모듈 상태 · 통합 상태 기준 섞임 | 통합 상태 Ready/Error/Paused/Not Initialized, 쓰임 구분 또는 통일, 문장 정리, 통합 상태 기준 통일 (POL-EQP-008 · 004) | 반영 (2026-11-23) |
| 5 Door 자동 잠금 (원본 v2.1.17과 다름 → 확인할 것 10) | Door Control Popup (LI-INS-01-P) | LI-INS-01-P R02 · R06 | 자동 잠금 문구 두 가지, Lock 버튼 없음 | 자동 잠금 문구 통일, 자동 잠금 정책 참조 (원본은 이미 자동 잠금 폐지 · [Lock] 버튼) | 이번엔 안 함 (2026-11-23, 2단계에서 확인할 것 10과 함께 정함) |

- `대기 (확인 필요)` · `(정의 필요)` · `(고객 논의)` · `(임시 정책 적용 예정)` 항목(LI-INS-01-P R04 · R09, TI-INS-02-01-P R06 · R07, LI-INS-02-01-P R03, TI-INS-02-T R10)은 후보에 넣지 않고 "확인할 것"으로 넘김.
- 케이스 3 규칙과 부딪혀 제외할 항목 없음.

## 근거

요건 1은 경로 분기 기준 8(케이스 3)이라 "케이스 3 (다시 그리기)" 강도로 읽음: 정책 찾는 길 ① ~ ⑤, 디스크립션의 알럿 ID 줄. UX가이드 · 용어는 3단계에서 그리며 읽음. 고칠 화면에 `basis`가 없어 basis 뒤 바뀐 정책은 보지 않음. 걸린 열린 논의 대상 없음(`discussions/` DS-0001 · 0003 · 0004 · 0005는 `종료`, 반영 끝남). 옛 열린 항목 CA-0001 · CA-0010 · PV-0001은 무엇이 정해지지 않았는지 확인용으로만 읽음.

**읽은 자료 목록**

| 요건 | 종류 | 자료 (ID · 파일) | 연결 근거 (왜 이 요건과 관련 있나) | 설계에 씀 (O / -) | 쓰는 화면 · 요소 | 무엇에 쓰나 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 정책 | POL-EQP-001 | 정책 `cids`에 INS 6화면 | O | Overview Tab · All Tab 상태값, Door 2개 Module 표시, 연결 상태 (Module · Device Unit) | 상태 단계 · Door 열림 표시 규칙 5 |
| 1 | 정책 | POL-EQP-002 | 정책 `cids`에 Overview · All Tab | O | Overview Tab 3-5 상태값 (TI-INS-01-T R06) | 장비 통합 상태 전환 참조 |
| 1 | 정책 | POL-EQP-004 | 정책 `cids`에 LI-INS-01-P 등 | O | Door Control Popup Pausing · Paused 안내, Overview · All Tab Door | Unlock → Pausing → Paused, Plate Sealing이면 PCR Setup도 Paused |
| 1 | 정책 | POL-EQP-005 | 정책 `cids`에 All Tab · Management | O | All Tab · Management Popup Run-time | h 단위 · 분 버림, 집계 대상 |
| 1 | 정책 | POL-EQP-008 | 정책 `cids`에 LI-INS-01-P · LI-INS-01-T · LI-INS-02-T · TI-INS-02-T | O | Door Control Popup 전부, Overview Tab (LI-INS-01-T) 6, All Tab (LI-INS-02-T) 3 · 3-1 | 잠금 해제 허용 상태, [Unlock all doors] 활성 조건(규칙 8), 자동 잠금(규칙 3 → DS-0011) |
| 1 | 정책 | POL-EQP-009 | 정책 `cids`에 Management · All Tab · Overview | O | Management Popup Enabled · [Save] 유효성, Overview Tab 3-2 Enabled 표기 | 규칙 1 ~ 9, Alert_013 · 014 · 015 |
| 1 | 정책 | POL-EQP-010 | 정책 `cids`에 Management · All Tab | O | Management Popup Error Rate | Service만 표시, 표시 위치는 CA-0001 (열림) |
| 1 | 정책 | POL-EVT-001 | 정책 `cids`에 Overview · All Tab | O | Overview · All Tab Event 개수 · Event Tooltip | Open만 셈, 가장 최근 1건 |
| 1 | 정책 | POL-LOD-001 | 정책 `cids`에 LI-INS-01-P | - | | Door Control을 부르는 Load Materials 쪽 규칙이라 이 화면 요소에 쓰이지 않음 (규칙 10 단디메카 자동 잠금은 DS-0011 참고에 적음) |
| 1 | 기준 자료 | `policy/equipment-states.md` 5 · 6절 | POL-EQP-001 · 002 · 004 · 008 `data` | O | Door Control Popup | 상태별 잠금 해제 허용 · 조건부 Module과 Door 표, "Cannot unlock while the system is running.", 6절 3 · 9 (화면 정정 대상) |
| 1 | 기준 자료 | `policy/permission-matrix.csv` (Instrument 줄) | POL-EQP-009 · 010 `data` | O | Management Popup, Door Control | Error Rate · Enabled 변경 Service만, Door Control 모두 O, Run-time Info Popup은 IA v1.03에서 제거 |
| 1 | 기준 자료 | `policy/client-mode-matrix.csv` (Instrument 줄) | 권한 · 모드 표 | O | Overview Tab (LI-INS-01-T) Door Control, All Tab (LI-INS-02-T) [Unlock] | MS Mode에서 Door Control X |
| 1 | 기준 자료 | `glossary/status-values.csv` · `modules.csv` · `module-units.csv` | POL-EQP-001 · 005 · 009 `data`, 반영 대기 묶음 2 | O | 7화면 상태값 · Module · Unit 이름 | 3단계에서 그리며 읽음 |
| 1 | 알럿 | Alert_004 · Alert_013 · Alert_014 · Alert_015 · Confirm_008 (`alert/alert-catalog.csv`) | 디스크립션 · 반영 대기에 나옴 | O | Overview Tab 미등록 Module Tab, Management [Save], All Tab (LI-INS-02-T) [Unlock] | 문구 · 버튼. Confirm_008 버튼 동작 칸은 복사 실수(카탈로그 "확인할 점") |
| 1 | 알럿 | Confirm_031 | 기존 화면 v2.1.17 Door Control · All Tab | - | | 알럿 카탈로그에 없음 → DS-0011 |
| 1 | Module 문서 | `policy/modules/` 관련 정책 | 길 ⑤ | - | | 관련 정책이 INV · LOD · MAT · SMP · TST(재고 · 로딩 · 검사)라 Instrument 화면 요소에 쓰이지 않음 |

**관련 자료 없는 영역 · 요소**

| 화면 · 영역 · 요소 | 근거로 삼는 것 |
| --- | --- |
| Management Popup [Cancel] (바꾼 값이 있을 때 닫기) | 기존 UX 화면설계서만 근거 (팝업용 저장 안 함 확인 알럿이 카탈로그에 없음, Confirm_007 · 016은 메뉴 이탈용) → 3단계 질문 대기 |
| Door Control [Unlock all doors] 확인 팝업 | 기존 UX 화면설계서만 근거 → 3단계 질문 대기 |
| Door Control Running Module [Unlock] 확인 문구 ("Do you want to continue? Finishing current task, then pausing…") | 기존 UX 화면설계서 (카탈로그 Confirm_008은 All Tab "Unlock the door?"로 다름, 카탈로그 확인할 점에 적힘) → 3단계 질문 대기 |

**대조**

| 요건 · 화면 · 요소 | 결과 | 근거 | 다음 |
| --- | --- | --- | --- |
| 1 · Door Control Popup (LI-INS-01-P) 자동 잠금 · [Lock] · Confirm_031, Overview Tab (LI-INS-01-T) 6, All Tab (LI-INS-02-T) 3 · 3-1 | 정책을 바꿔야 함 | 기존 화면 v2.1.17 (2026-11-13, 이상헌): 자동 잠금 없음 · [Lock]. POL-EQP-008 규칙 3 · POL-EQP-004 규칙 7 (2026-11-02): 5초 뒤 자동 잠금, 다시 잠그는 기능 없음 | 정책 수정 범위 1 (DS-0011). 결정 전이라 3단계에서 질문 대기 |
| 1 · Door Control Popup [Unlock all doors] 활성 조건 | 기존 화면이 정책과 다름 | 화면 "Ready, Paused, Error" / POL-EQP-008 규칙 8 "Ready, Error, Paused, Not Initialized" (`equipment-states.md` 6절 3) | 정책대로 그리고 변경 확인 (반영 대기 LI-INS-01-P R01) |
| 1 · Door Control Popup 안내 문구 두 가지 ("Cannot unlock while the module / system is running.") | 기존 화면이 정책과 다름 | `equipment-states.md` 5절 "Cannot unlock while the system is running.", 6절 9 | 정책 문구로 통일하고 변경 확인 (반영 대기 LI-INS-01-P R03) |
| 1 · Management Popup (TI-INS-02-01-P) Enabled 변경 권한 · 변경 가능 상태 · Device Unit 설정 대상 | 기존 화면이 정책과 다름 | POL-EQP-009 규칙 4 · 7 · 8 | 정책대로 그리고 변경 확인 (반영 대기 묶음 4) |
| 1 · Management Popup (TI-INS-02-01-P) Running이 아닌 이유(Error · Paused)로 바꿀 수 없을 때 알럿 | 정책에 없음 (알럿) | POL-EQP-009 규칙 7은 Running만 Alert_013 | 3단계 질문 대기 (반영 대기 R06 `대기 (정의 필요)`) |
| 1 · Management Popup Error Rate 표시 위치 | 논의 대상에 이미 있음 (옛 CA-0001, 고객 논의) | POL-EQP-010 예외 | 기존 화면대로(Management Popup) 그리고 3단계 질문 대기 |
| 1 · Door Control Popup Run 중 잠금 해제 후 Door를 열지 않은 경우 | 논의 대상에 이미 있음 (옛 PV-0001, 승인 대기 · 고객 정의 기다림) | POL-EQP-008 예외 | 3단계 질문 대기 (기존 화면에 동작 없음) |
| 1 · Overview · All Tab · Management 상태값 · Run-time · Error Rate · Event 개수 | 정책에 있음 | POL-EQP-001 · 002 · 005 · 010 · EVT-001 | 3단계에서 디스크립션 끝에 정책 ID로 이음 |
| 1 · Run-time Info Popup (TI-INS-02-02-P) | 정책에 있음 (없어진 화면) | `permission-matrix.csv` "Runtime Info Popup은 IA v1.03에서 제거" | 그리지 않음 (확인할 것 9) |

**정책 수정 범위**

| # | 바꿈 / 더함 | 정책 ID · 규칙 (또는 기준 자료) | 변경 전 | 변경 후 (안) | 논의 대상 |
| --- | --- | --- | --- | --- | --- |
| 1 | 바꿈 | POL-EQP-008 규칙 3, POL-EQP-004 규칙 7, `policy/equipment-states.md` 5절 규칙, 알럿 카탈로그 Confirm_031 더함 | Door를 닫으면 5초 뒤 자동 잠금, 다시 잠그는 기능 없음 | (기존 화면 v2.1.17대로) 자동 잠금 없음. [Lock]을 눌러야 Locked, Door가 Open이면 Confirm_031 "Please close the door." 표시 · Unlocked 유지. Locked가 되면 Paused였던 Module이 Paused 전 상태로 | DS-0011 |

**용어 목록**

| 원래 표현 | 표준어 | 어디서 | 새 용어면 처리 |
| --- | --- | --- | --- |
| Account Type | User Type | Management Popup 디스크립션, All Tab | |
| Unconnected | Disconnected | All Tab Connected 항목 | |
| CURECA 구동 상태값 | 장비 통합 상태 | Management Popup (TI-INS-02-01-P) R04 | |
| Module 상태값 | 장비 모듈 상태 | Door Control Popup 0 · 3 | |
| Enable | Enabled | Management Popup 표 헤더 | |
| Waste Status | Waste Bin/Bottle Status | All Tab | |
| Ht Extraction | High-throughput Extraction | Overview · All Tab Tab 이름 | |
## 설계

## 질문 대기

| 번호 (Q) | 질문 | 관련된 곳 (CID · 디스크립션 번호) | 논의 대상 | T · L 같음 | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- | --- |

## 변경 확인

| 번호 (C) | 기존 화면 | 바꿔 그린 것 | 관련된 곳 (CID · 디스크립션 번호) | 근거 | T · L 같음 | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- | --- |

## 의견

## 언어셋

## 모아 둔 질문

| # | 생긴 날 | 단계 · 절차 | 질문 | 관련된 곳 (CID · 디스크립션 번호 · Language ID) | 답을 받을 때까지 둔 모습 | 답 (날짜) |
| --- | --- | --- | --- | --- | --- | --- |

## 요청자 확인

| 날짜 | 단계 | 확인한 것 | 요청자 답 |
| --- | --- | --- | --- |
| 2026-11-23 | 2단계 | 읽은 강도(케이스 3) · 대조 · 정책 수정 범위 1(DS-0011) · 영향 화면 2 · 질문 1 · 4 · 3단계로 넘어갈지 (R047 질문) | DS-0011 A로 결정, 케이스 모두 그림, 3단계로 (2026-11-23 15:55) |
| 2026-11-23 | 1단계 | 요건 목록(7화면, 케이스 3) · 요건별 진행 경로(8, 1 → 5) · 확인할 것 10개 · 이번에 반영할 반영 대기 항목 묶음 1 ~ 5 · 2단계로 넘어갈지 (R047 질문) | 추천대로 진행 (묶음 1 ~ 4 반영, 5는 2단계에서) · 2단계로 넘어감 (2026-11-23 15:50) |

## 이 작업의 결정 (5단계에서 한꺼번에 반영)
| 논의 대상 | 내용 | 후속 확인 필요 (누구 · 무엇, 없으면 비움) | 5단계 반영 |
| --- | --- | --- | --- |
| DS-0011 | 제안 A: Door 자동 잠금 없음, [Lock]을 눌러야 Locked, Door가 Open이면 Confirm_031 표시 · Unlocked 유지 (POL-EQP-008 규칙 3 · POL-EQP-004 규칙 7 · equipment-states 5절 고침, 알럿 카탈로그 Confirm_031 더함, 영향 LI-DAS · TI-DAS) | | |

## 이 작업이 남긴 것

- 논의 대상: DS-0011 (Door 자동 잠금 · [Lock] 버튼, 2026-11-23 결정 A)
- 다른 화면의 반영 대기 항목:
- 고친 카탈로그 줄:
