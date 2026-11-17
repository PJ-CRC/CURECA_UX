---
status: 진행 중
requester: 최고관리자
menu: Instruments
cids: [TI-INS-01-T, LI-INS-01-T, TI-INS-02-T, LI-INS-02-T, TI-INS-02-01-P, LI-INS-02-01-P, LI-INS-01-P]
policies: [POL-EQP-008, POL-EQP-004, POL-EQP-001]
cid_system:
figma: UX AI TEST (etCQFF3CTf1EA6C79d4BBf) · Instrument Ⓛ / Ⓣ _re
test: false
basis_start: 2026-11-17 16:30 · history ec67717 · Common UX 가이드 (UX가이드_Common-UX-가이드)
basis:
basis_versions:
  rules:
  policy:
  glossary:
  screens:
  ux_guide:
started: 2026-11-17
---
# 작업 기록: Instrument Ⓛ / Ⓣ _re 페이지 화면을 지금 적용된 UX 문서에 맞춰 수정

## 단계

| 단계 | 끝낸 날 | 관문 | 남긴 것 |
| --- | --- | --- | --- |
| 1. 시작 · 요건 정의 | 2026-11-17 | 요청자 확인 (2026-11-17) | 겹치는 다른 작업: 없음 (열린 작업 기록 없음). 케이스 3 화면 7개 다시 옮김(2.1 2차, LI 3개 바뀜) · 반영 대기 40건 `작업 중` · 점검 발견 5건 |
| 2. 근거 · 분석 | 2026-11-17 | 요청자 확인 (2026-11-17) | DS-0004 · DS-0005 `결정` (5단계 반영). 영향 화면 4개 더함(완료 때 정함). 요건 목록에 더한 화면 없음 |
| 3. 화면 설계 | | | |
| 4. 수정 · 확인 | | | |
| 5. 완료 | | | |

이어서 작업할 곳: 3단계 · 시작 전 (2단계 끝, 2026-11-17 R038). 묶음 1 · 2 · 3과 TI-INS-02-T R11 · LI-INS-02-T R10을 DS-0004 · DS-0005 결정대로 그림. 3단계 끝 관문 뒤 4단계를 요청자에게 다시 물음

## 요청

- 요청 글: "현재 적용된 UX문서를 기반으로 만들어진 화면들 전부 수정해줘 (Design-Update 내용은 수정하지 말것) 4단계 UX 확정까지만 진행"
- 출처: Workbench 요청 R037 (최고관리자, 2026-11-17 16:25), 페이지 요청(프레임 지정 없음) · Instrument Ⓛ / Ⓣ _re
- 요청 자료 없음
- 시작 주체: -

## 요건 목록

| 번호 | 요건 | 대상 화면 | 케이스 | 요청 상태 | 작업 대상 | 비고 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 화면을 지금 적용된 UX 문서(정책서 · 기준데이터 · UX가이드 · 화면 정의서)에 맞춤 = 대상 화면 반영 대기 `대기` 항목 반영(묶음 1 · 2 · 3) | Overview Tab (TI-INS-01-T) | 3 | 변경 (2026-11-17, 최고관리자, 고칠 내용을 반영 대기 항목으로 정함) | O | 화면 MD `source: asis`. 바뀜 (2026-11-17, 최고관리자: 추천대로) |
| 1 | 같음 | Overview Tab (LI-INS-01-T) | 3 | 최초 | O | 짝 화면 · 함께 고침 (요청 글: 전부) |
| 1 | 같음 | All Tab (TI-INS-02-T) | 3 | 최초 | O | 바뀜 (2026-11-17, 최고관리자: 추천대로) |
| 1 | 같음 | All Tab (LI-INS-02-T) | 3 | 최초 | O | 짝 화면 · 함께 고침 (요청 글: 전부) |
| 1 | 같음 | Management Popup (TI-INS-02-01-P) | 3 | 최초 | O | 바뀜 (2026-11-17, 최고관리자: 추천대로) |
| 1 | 같음 | Management Popup (LI-INS-02-01-P) | 3 | 최초 | O | 짝 화면 · 함께 고침 (요청 글: 전부) |
| 1 | 같음 | Door Control Popup (LI-INS-01-P) | 3 | 최초 | O | 짝 없음 (L-IOS만). 바뀜 (2026-11-17, 최고관리자: 추천대로) |
| 1 | 같음 | Test Order (TI-TMG-01) | 3 | 최초 | X | 기획 프레임 없음 · 다른 메뉴(TMG)라 이번 대상에서 뺌. 바뀜 (2026-11-17, 최고관리자: 추천대로) |

- TI-INS-02-02-P 기획 프레임이 페이지에 있으나 IA에 없음 → 이번에는 손대지 않음 (확인할 것 3, 요청자 답 2026-11-17)
- 1280 프레임(`_1280` · `-1280` · `_1280_Skeleton`)은 이 흐름의 대상이 아니라 요건으로 뽑지 않음
- "Design-Update" 영역은 요청 글대로 제외: 기획 프레임(오른쪽 패널이 붙은 2252 프레임)만 고치고 1920 디자인 화면 · 1280 화면은 모두 그대로 둠 (확인할 것 4, 요청자 답 2026-11-17). 참고: 기존 작업방에는 디자인 섹션에 「Design-Update : 날짜 (컨펌 완료 / 작업중)」 표시가 있음

### 찾았지만 대상 아님

다른 화면 없음 (요청에 바꿀 글자 · 요소가 적혀 있지 않아 같은 글자 · Common UX 번호 · 호출 관계로 찾을 것이 없음. 고칠 내용이 정해지면 다시 찾음)

### 영향 화면

1단계: 없음 (위와 같음). 2단계에서 정책으로 찾은 화면을 더함 (처리는 완료 때 정함)

| 화면 (CID) | 찾은 곳 | 영향 | 내용 | 처리 |
| --- | --- | --- | --- | --- |
| Dashboard (LI-DAS) | 2단계 정책 (POL-EQP-008 · POL-EQP-004 `cids`) | 확인 필요 | DS-0004 A안이면 Door 자동 잠금 · Paused 복귀 설명이 있는지 확인 | 완료 때 정함 |
| Dashboard (TI-DAS) | 2단계 정책 (POL-EQP-008 · POL-EQP-004 `cids`) | 확인 필요 | 같음 | 완료 때 정함 |
| LI-TSS-DXI | 2단계 정책 (PV-0001 영향 화면, LI-INS-01-P를 부름) | 확인 필요 | DS-0004 A안이면 Door Control에서 [Lock]으로 잠그는 흐름이 이 화면 설명과 맞는지 | 완료 때 정함 |
| LI-TSS-WBM | 2단계 정책 (PV-0001 영향 화면, LI-INS-01-P를 부름) | 확인 필요 | 같음 | 완료 때 정함 |

- 정책으로 찾은 같은 CID 체계(INS) 화면 중 요건 목록에 없는 것: 없음 (POL-EQP-001 · 002 · 004 · 008 · 009 `cids`의 INS 화면은 모두 요건 목록에 있음)

## 읽은 기존 화면

| 화면 (CID) | 읽은 것 | Figma 링크 |
| --- | --- | --- |
| Overview Tab (TI-INS-01-T) | 화면 MD (다시 옮김 · 바뀐 곳 없음, 2.1 2차, Ver 2.1.06. 패널 CID가 TI-INS-02-T인 것은 R03 그대로), 반영 대기 | [3249-111508](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-111508) |
| All Tab (TI-INS-02-T) | 화면 MD (다시 옮김 · 바뀐 곳 있음 (취소선 표시, 7 Date/Time 표기 줄), 2.1 2차, Ver 2.1.06), 반영 대기 | [3249-111981](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-111981) |
| Management Popup (TI-INS-02-01-P) | 화면 MD (다시 옮김 · 바뀐 곳 없음, 2.1 2차, Ver 2.1.01), 케이스 2개(Error Rate 표기 / 미표기), 반영 대기 | [3249-112456](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-112456) |
| Overview Tab (LI-INS-01-T) | 화면 MD (다시 옮김 · 바뀐 곳 있음 (v2.1.17 Door Status 툴팁 · 6 Unlock 버튼에 Lock 기능), 2.1 2차, Ver 2.1.17), 반영 대기 | [10069-367211](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-367211) |
| All Tab (LI-INS-02-T) | 화면 MD (다시 옮김 · 바뀐 곳 있음 (v2.1.17 Door 3 · 3-1 Lock Status · [Lock] 버튼 · Confirm_031), 2.1 2차, Ver 2.1.17), 반영 대기 | [10069-367730](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-367730) |
| Management Popup (LI-INS-02-01-P) | 화면 MD (다시 옮김 · 바뀐 곳 없음, 2.1 2차, Ver 2.1.01), 케이스 2개, 반영 대기 | [10069-368209](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-368209) |
| Door Control Popup (LI-INS-01-P) | 화면 MD (다시 옮김 · 바뀐 곳 있음 (v2.1.17 자동 잠금 폐지 · [Lock] 버튼 · 안내 문구 · Confirm_031), 2.1 2차, 패널 Ver 2.1.13), 케이스 프레임 10069-368639, 반영 대기 | [10069-368536](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-368536) |

- 기존 작업방 Instrument 페이지(281:1770)에서 7개 CID가 모두 민트색(2.1 2차) 영역에 있어 그 화면을 옮김. 화면 MD의 예전 `figma` 링크 가운데 L-IOS 4개는 노드가 없어져 새 노드로 바꿈. 녹색(2.1 1차) 영역의 같은 CID 화면(9203:…)은 읽지 않음

## 요건별 진행 경로

| 요건 | 경로 분기 기준 (근거) | 지나가는 단계 | 문구 | UI 작업 |
| --- | --- | --- | --- | --- |
| 1 UX 문서에 맞춤 | ~~요청자 확인 (고칠 내용에 따라 1a 표기 · 용어 = 5, 1b 정책 반영 = 3 · 4로 나눌 안)~~ 바뀜 (2026-11-17, 최고관리자, 추천대로): 묶음마다 나눔 ↓ | | | |
| 1-1 표기 · 오타 · 용어 (묶음 1) | 5 공통 기준을 화면에 맞춤 (`glossary/` 용어 · 상태값 표기). 2단계 읽은 강도: 기준 문서 | 1 → 2 → 3 → 4 → 5 | 바뀜 (화면 표기 글자) | 대상 (화면 표기 글자가 바뀜) |
| 1-2 정책 반영 (묶음 2) | 3 동작 · 조건 · 값 · 순서가 바뀜 (POL-EQP-001 · 004 · 008 · 009를 디스크립션에 반영). 2단계 읽은 강도: 정책 전부. 7 "정책만"이 아님으로 확정 (2026-11-17, 디스크립션 · LI-INS-01-P 화면 요소가 함께 바뀜) | 1 → 2 → 3 → 4 → 5 | 안 바뀜 (디스크립션) | 대상 아님 (디스크립션만, 4단계에서 확정) |
| 1-3 알럿 (묶음 3) | 4 장비 · 알럿 · 권한 · 상태값에 닿음 (TI-INS-01-T R01 Alert_004). 2단계 읽은 강도: 정책 전부 + 장비 · 알럿 · 권한 | 1 → 2 → 3 → 4 → 5 | 안 바뀜 (알럿 ID만) | 대상 아님 (디스크립션만, 4단계에서 확정) |

작업이 지나가는 단계: 1 → 2 → 3 → 4 → 5 (요청 하나 = 단계 하나. 4단계 문서는 아직 쓰지 않는 상태라 3단계 끝 관문 뒤에 다음을 물음 — 요청자 답 2026-11-17)

## 확인할 것

| # | 무엇 | 관련된 곳 | 넘기는 곳 | 이어진 번호 |
| --- | --- | --- | --- | --- |
| 1 | 6. 요청에서 생긴 물음: "UX 문서 기준으로 수정"의 고칠 내용이 없음. 안: 대상 화면 반영 대기 목록의 `대기` 항목 반영 | INS 7개 | 1단계 절차 5번 | 요청자 답으로 풀림 (2026-11-17, 추천대로: 묶음 1 · 2 · 3 반영) |
| 2 | 6. 요청에서 생긴 물음: Test Order (TI-TMG-01) 화면을 넣을지(기획 프레임 없음, 메뉴가 다름) | TI-TMG-01 | 1단계 절차 5번 | 요청자 답으로 풀림 (2026-11-17, 넣지 않음) |
| 3 | 3. IA와 화면이 다른 곳: TI-INS-02-02-P 기획 프레임이 IA에 없음 | TI-INS-02-02-P | 1단계 절차 5번 | 요청자 답으로 풀림 (2026-11-17, 이번에는 손대지 않음) |
| 4 | 6. 요청에서 생긴 물음: 제외할 "Design-Update" 영역이 어느 섹션 · 프레임인지 | 페이지 | 1단계 절차 5번 | 요청자 답으로 풀림 (2026-11-17, 기획 프레임만 고침) |
| 5 | 5. `대기 (확인 필요)` 등: LI-INS-01-P R04 · R09, LI-INS-02-01-P R03, TI-INS-02-01-P R06 · R07, TI-INS-02-T R10 | 각 화면 MD | 2단계 | 2단계 대조: R09 → DS-0004 (PV-0001을 `old_ids`로 이음), LI-INS-02-01-P R03 · TI-INS-02-01-P R07 → 근거로 풀림 (고객 논의 CA-0001 그대로, 이번에 반영 안 함), R04 · TI-INS-02-01-P R06 · TI-INS-02-T R10 → 2단계 순서 6 요청자 확인 (R038) → 요청자 답 (2026-11-17, 추천대로): R04 · TI-INS-02-01-P R06 · TI-INS-02-T R10 이번엔 안 함 (`대기 (확인 필요)` 그대로) |
| 6 | 6. 다시 옮기며 생긴 물음: LI-INS-01-P v2.1.17(2026-11-13)에서 자동 잠금 폐지 · [Lock] 버튼 추가. 반영하기로 한 R02(5초 자동 잠금 문구 통일) · R06(5초 자동 잠금을 정책 ID로 참조)의 "지금"이 화면에 없어짐 → POL-EQP-008과 화면 중 어느 쪽이 맞는지 (점검 발견 LI-INS-01-P R10) | LI-INS-01-P R02 · R06 · R10, LI-INS-01-T 5 · 6, LI-INS-02-T 3 · 3-1 | 2단계 | DS-0004 (`결정` A안 2026-11-17: 화면 v2.1.17대로. R02 · R06은 [Lock] 기준으로 3단계에서 고침) |
| 7 | 2. 알럿 · 컨펌: [Lock] · Door Open 때 Confirm_031 — 알럿 카탈로그에 있는지 (점검 발견 LI-INS-01-P R12) | LI-INS-01-P 2-5, LI-INS-02-T 3-1 | 2단계 | DS-0005 (카탈로그에 없음 → `결정` 2026-11-17: 더함) |
| 8 | 5. 다시 옮기며 찾은 반영 대기(`대기`, 이번에 반영할지 아직 묻지 않음): TI-INS-02-T R11 · LI-INS-02-T R10 (hh:dd:ss → hh:mm:ss), LI-INS-01-P R11 (패널 Ver 2.1.13 / 버전 메모 v2.1.17) | 각 화면 MD | 2단계 | 2단계 순서 6 요청자 확인 (R038) → 요청자 답 (2026-11-17, 추천대로): R11 · R10 이번에 반영(묶음 1), LI-INS-01-P R11 Ver 표기는 4단계 UX 확정 때 |

## 이번에 반영할 반영 대기 항목

| 묶음 (근거) | 화면 (CID) | 항목 ID | 반영 / 이번엔 안 함 |
| --- | --- | --- | --- |
| 1 표기 · 오타 · 용어 (`glossary/`) | LI-INS-01-P · LI-INS-01-T · LI-INS-02-01-P · LI-INS-02-T · TI-INS-01-T · TI-INS-02-01-P · TI-INS-02-T | LI-INS-01-P R02 · R03 · R05 / LI-INS-01-T R01 · R03 · R05 / LI-INS-02-01-P R01 · R04 / LI-INS-02-T R01 · R03 · R04 · R05 · R06 · R09 / TI-INS-01-T R02 · R03 · R05 / TI-INS-02-01-P R01 · R02 · R08 / TI-INS-02-T R01 · R03 · R04 · R05 · R06 · R09 | 반영 (2026-11-17, 화면 MD `작업 중`) |
| 2 정책 반영 (POL-EQP-001 · 004 · 008 · 009) | 같음 | LI-INS-01-P R01 · R06 · R07 · R08 / LI-INS-01-T R02 · R04 / LI-INS-02-01-P R02 / LI-INS-02-T R08 / TI-INS-01-T R04 · R06 / TI-INS-02-01-P R03 · R04 · R05 | 반영 (2026-11-17, 화면 MD `작업 중`. LI-INS-01-P R02 · R06은 확인할 것 6) |
| 3 알럿 (`policy/alert-catalog.csv`) | TI-INS-01-T | R01 | 반영 (2026-11-17, 화면 MD `작업 중`) |
| 1 표기 · 오타 (기존 UX 화면설계서, 오타) | TI-INS-02-T · LI-INS-02-T | TI-INS-02-T R11 / LI-INS-02-T R10 (hh:dd:ss → hh:mm:ss) | 반영 (2026-11-17 2단계 답, 화면 MD `작업 중`) |
| - | LI-INS-01-P | R11 (Ver 표기) | 이번엔 안 함 — 4단계 UX 확정 때 화면마다 Ver을 물을 때 정함 (2026-11-17 2단계 답) |
| - | LI-INS-01-P · TI-INS-02-01-P · TI-INS-02-T | LI-INS-01-P R04 / TI-INS-02-01-P R06 / TI-INS-02-T R10 | 이번엔 안 함 (2026-11-17 2단계 답, `대기 (확인 필요)` 그대로) |

(변경 전 · 변경 후는 각 화면 MD 반영 대기 목록 그대로)

## 근거

- 2단계 시작 때 `basis_start`(history ec67717) 뒤로 바뀐 정책 · 기준데이터 · 논의 대상: 없음 (2026-11-17 16:40 git 확인). 대상 화면 MD는 모두 `basis` 없음
- 걸린 열린 논의 대상: 없음 (`discussions/list.md`, DS-0001 · DS-0003은 종료 · INS 화면 걸리지 않음). 옛 목록: 고객 논의 CA-0001 (Error Rate 위치) · CA-0010 (Error일 때 Door를 열면 Paused인지), 임시 정책 PV-0001 (승인 대기) — 무엇이 정해지지 않았는지 확인하는 용도로만 읽음

### 읽은 자료 목록

| 요건 | 종류 | 자료 (ID · 파일) | 연결 근거 (왜 이 요건과 관련 있나) | 설계에 씀 (O / -) | 쓰는 화면 · 요소 | 무엇에 쓰나 |
| --- | --- | --- | --- | --- | --- | --- |
| 1-1 | 용어집 | `glossary/terms.csv` CURECA · User Type · T-IOS / L-IOS · Waste Bin/Bottle Status · Door · 연결 상태 | 반영 대기 근거 칸 | O | TI-INS-01-T R02 · LI-INS-01-T R01 (CURECA), TI-INS-02-01-P R01 · LI-INS-02-01-P R01 · TI/LI-INS-02-T R09 (User Type, T-IOS), TI/LI-INS-02-T R06 (Waste Bin/Bottle Status) | 표준어 확인 (모두 표준어로 있음) |
| 1-1 | 기준데이터 | `glossary/status-values.csv` 연결 상태 · Door 상태 | 반영 대기 근거 칸 | O | TI/LI-INS-02-T R01 Connected 상태값 | Connected / Disconnected |
| 1-1 | 기준데이터 | `glossary/module-units.csv` Sample Preparation Unit | 반영 대기 근거 칸 | O | TI/LI-INS-02-T R03 · R04 · R05 Module Details Unit 이름 | STAT Storage, Waste Bin (Upper) · (Lower), Liquid Waste Bottle (Upper) 표기 |
| 1-2 | 정책 | POL-EQP-001 | 정책 `cids`에 TI/LI-INS-01-T · 02-T · 02-01-P | O | TI-INS-01-T 3-5 (R06), TI/LI-INS-02-T 1-4 | 상태 단계 · Door 2개 Module 열림 표시 |
| 1-2 | 정책 | POL-EQP-002 | 정책 `cids`에 TI/LI-INS-01-T · 02-T, POL-EQP-004 규칙 8이 가리킴 | - | | (장비 통합 상태 계산 규칙. 이번 반영 대기에 걸린 문장 없음) |
| 1-2 | 정책 | POL-EQP-004 | 정책 `cids`에 LI-INS-01-P · TI/LI-INS-01-T · 02-T, 반영 대기 근거 칸 | O | LI-INS-01-P 0 · 3 (R07), 2-1 | Door 잠금 해제 → Paused, Door 여럿이면 하나라도 → Paused. 규칙 7(5초 자동 잠금 뒤 복귀)은 화면 v2.1.17과 다름 → DS-0004 |
| 1-2 | 정책 | POL-EQP-008 | 정책 `cids`에 LI-INS-01-P · LI-INS-01-T · LI/TI-INS-02-T, 반영 대기 근거 칸 | O | LI-INS-01-P 0 · 2-5 · 3 (R01 · R06 · R08), LI-INS-01-T 6 (R04), LI-INS-02-T 3 · 3-1 (R08) | 잠금 해제 허용 · [Unlock all doors] 활성 조건 · Run Start 자동 잠금. 규칙 3(다시 잠그는 기능 없음 · 5초 자동 잠금)은 화면 v2.1.17과 다름 → DS-0004 |
| 1-2 | 정책 | POL-EQP-009 | 정책 `cids`에 INS 6개, 반영 대기 근거 칸 | O | TI-INS-02-01-P 3 (R03 · R04 · R05), LI-INS-02-01-P 0 (R02), TI/LI-INS-01-T 3-2 (R04 · R02) | Service만 변경 · 조회 전용 · 변경 가능 상태 · Device Unit 설정 대상 · Enabled 표기 |
| 1-2 | 정책 | POL-EQP-005 · POL-EQP-010 | 화면 MD "관련 정책" (길 ③) | - | | (Run-time · Error Rate. 이번 반영 대기에 걸린 것은 `대기 (고객 논의)` CA-0001뿐) |
| 1-2 | 장비 | `policy/equipment-states.md` 5절 | POL-EQP-008 `data` (길 ④) | O | LI-INS-01-P 2-5 · 2-7 · 3 (R08 · R03) | 장비 통합 상태별 허용 · 조건부 허용 Module 표, "Cannot unlock while the system is running." 문구. 끝 줄(5초 자동 잠금)은 DS-0004 |
| 1-2 | 옛 임시 정책 | `old-provisional/PV-0001.md` | POL-EQP-008 `provisional`, LI-INS-01-P R09 | - | | 승인 대기 · 고객 미정의. DS-0004 `old_ids`로 이음 (확인 용도만) |
| 1-2 | 옛 고객 논의 | `old-customer-agenda/agenda.md` CA-0010 | POL-EQP-004 예외 | - | | 규칙 1 "Error일 때도 Paused"는 고객 확인 중 — 확인 전까지 규칙 1 그대로 (LI-INS-01-P R07에 그대로 씀) |
| 1-3 | 알럿 | `policy/alert-catalog.csv` Alert_004 · Alert_013 · 014 · 015 · Confirm_008 | 반영 대기 근거 칸, POL-EQP-008 · 009 `alerts` | O | TI-INS-01-T 1 (R01 Alert_004), TI-INS-02-01-P 3 (Alert_013 · 014 · 015), LI-INS-02-T 3-1 (Confirm_008) | 알럿 ID · 문구. Confirm_031 없음 → DS-0005 |
| 1-3 | 권한 | `policy/permission-matrix.csv` | POL-EQP-009 `data` | O | TI-INS-02-01-P (R03) | T-IOS Service만 Enabled 변경 |

### 관련 자료 없는 영역 · 요소

| 화면 · 영역 · 요소 | 근거로 삼는 것 |
| --- | --- |
| LI-INS-01-T R05 Door 버튼 라벨 ("Door Control" / "Unlock 버튼") | 용어집 · 정책에 버튼 이름 없음. 기존 UX 화면설계서만 근거 (화면 글자 "Door Control") |
| TI-INS-01-T R03 오른쪽 패널 CID 칸 | IA · Figma 프레임 이름 (TI-INS-01-T) |
| 오타 (TI/LI-INS-01-T R03 · R05, LI-INS-01-P R05, TI-INS-02-01-P R02, LI-INS-02-01-P R04) | 기존 UX 화면설계서만 근거 (오타 고침) |

### 대조

| 요건 · 화면 · 요소 | 결과 | 근거 | 다음 |
| --- | --- | --- | --- |
| 1-1 묶음 1 표기 · 용어 (7개 화면) | 기존 화면이 정책과 다름 | 용어집 · 기준데이터에 표준어가 모두 있음 | 기준 자료대로 고치고 3단계에서 변경 확인 |
| 1-2 TI-INS-02-01-P R03 · R04 · R05, LI-INS-02-01-P R02, TI/LI-INS-01-T R04 · R02 | 정책에 있음 | POL-EQP-009 규칙 4 · 7 · 8 · 9, 정의 | 3단계에서 디스크립션 끝에 정책 ID |
| 1-2 TI-INS-01-T R06 | 정책에 있음 | POL-EQP-001 | 같음 |
| 1-2 LI-INS-01-P R01 · R08, LI-INS-01-T R04, LI-INS-02-T R08 | 정책에 있음 | POL-EQP-008 규칙 4 ~ 8, `policy/equipment-states.md` 5절 | 같음 |
| 1-2 LI-INS-01-P R07 | 정책에 있음 | POL-EQP-004 규칙 1 · 2 (Error일 때는 CA-0010 고객 확인 중, 규칙 1 그대로) | 같음 |
| 1-1 LI-INS-01-P R03 문구 둘 | 정책에 있음 | `policy/equipment-states.md` 5절 "Cannot unlock while the system is running." (장비 통합 상태 기준) | 근거로 풀림: 통합 상태로 막을 때 system 문구 |
| 1-1 LI-INS-01-P R02 · 1-2 R06 (5초 자동 잠금) | 정책을 바꿔야 함 | 화면 v2.1.17 (자동 잠금 폐지 · [Lock]) ↔ POL-EQP-008 규칙 3, POL-EQP-004 규칙 7 | 정책 수정 범위 1 ~ 3, DS-0004. 결정 전이면 3단계 질문 대기 |
| LI-INS-01-P 2-5 · LI-INS-02-T 3-1 Confirm_031 | 정책에 없음 | `policy/alert-catalog.csv`에 없음 | 정책 수정 범위 4, DS-0005 |
| 1-3 TI-INS-01-T R01 Alert_004 | 정책에 있음 | `policy/alert-catalog.csv` Alert_004 (사용 화면에 TI-INS-01-T 없음) | 디스크립션 Alert_004로. 사용 화면은 정책 수정 범위 5, DS-0005 |
| LI-INS-01-P R09 Run 중 해제 뒤 열지 않음 | 논의 대상에 이미 있음 | PV-0001 (승인 대기) → DS-0004 `old_ids` | 이번 묶음 아님 (`대기` 그대로) |

### 정책 수정 범위

| # | 바꿈 / 더함 | 정책 ID · 규칙 (또는 기준 자료) | 변경 전 | 변경 후 (안) | 논의 대상 |
| --- | --- | --- | --- | --- | --- |
| 1 | 바꿈 | POL-EQP-008 요약 · 규칙 3 · 머리말 `alerts` | 다시 잠그는 기능 없음. Door를 닫으면 5초 뒤 자동 Locked | [Lock](Unlocked일 때 표시, 늘 활성)으로 잠금. 닫아도 자동으로 잠기지 않음. Open일 때 [Lock]이면 Confirm_031 · Unlocked 유지. `alerts`에 Confirm_031 | DS-0004 |
| 2 | 바꿈 | POL-EQP-004 규칙 7 | Door가 닫히고 5초 뒤 자동으로 잠기면 Paused 전 상태로 | [Lock]으로 Door가 잠기면 Paused 전 상태로 | DS-0004 |
| 3 | 바꿈 | `policy/equipment-states.md` 5절 규칙 끝 줄 | 닫히고 5초 뒤 자동 잠금 · 다시 가동 | [Lock]으로 잠그면 다시 가동 | DS-0004 |
| 4 | 더함 | `policy/alert-catalog.csv` Confirm_031 | 없음 | "Please close the door." · OK · Door가 Open일 때 [Lock] · 사용 화면 LI-INS-01-P, LI-INS-02-T | DS-0005 |
| 5 | 바꿈 | `policy/alert-catalog.csv` Alert_004 사용 화면 | LI-INS-01-T | LI-INS-01-T, TI-INS-01-T | DS-0005 |
| 6 | 바꿈 | POL-EQP-001 `cids` | LI-INS-01-P 없음 | LI-INS-01-P 더함 (Door 열림 상태 표시, POL-EQP-008 규칙 10) | DS-0004 |

### 용어 목록

| 원래 표현 | 표준어 | 어디서 | 새 용어면 처리 |
| --- | --- | --- | --- |
| Cureca | CURECA | TI-INS-01-T 0, LI-INS-01-T 0 | |
| Account Type / Account type | User Type | TI/LI-INS-02-01-P 2 · 케이스, TI/LI-INS-02-T 2-1 · 4-1 | |
| T-IO S | T-IOS | TI-INS-02-T 4 | |
| Unconnected | Disconnected | TI/LI-INS-02-T 1 | |
| Waste Status | Waste Bin/Bottle Status | TI/LI-INS-02-T 6 · 화면 글자 | |
| Tip Waste Bin · Film Waste Bin (Upper/Lower) | Waste Bin (Upper) · (Lower) | TI/LI-INS-02-T Module Details | |
| STAT Storage (Upper) · (Lower) | STAT Storage | TI/LI-INS-02-T Module Details | |
| Enable (표 헤더) | Enabled | TI-INS-02-01-P 화면 글자 | |
| [Lock] (버튼) | (용어집 Door 줄에 버튼 이름 Unlock만 있음) | LI-INS-01-P 2-5, LI-INS-02-T 3-1 | 순서 6 질문 5 → 이대로 올림 (2026-11-17 요청자 답). 용어집 Door 줄 버튼 이름에 Lock 더함은 공통 자료라 5단계 완료 때 함께 반영 (헌법 4조) |

## 설계

## 질문 대기

| 번호 (Q) | 질문 | 관련된 곳 (CID · 디스크립션 번호) | 논의 대상 | T · L 같음 | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- | --- |

## 변경 확인

| 번호 (C) | 기존 화면 | 바꿔 그린 것 | 관련된 곳 (CID · 디스크립션 번호) | 근거 | T · L 같음 | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- | --- |

## 의견

## 언어셋

## 요청자 확인

| 날짜 | 단계 | 확인한 것 | 요청자 답 |
| --- | --- | --- | --- |
| 2026-11-17 | 1단계 | 요건 목록 · 대상 화면 · 고칠 내용 · 반영 대기 묶음 (Workbench R037 질문: 1 고칠 내용 = 반영 대기 묶음 1 · 2 · 3, 2 TI-TMG-01 뺌, 3 TI-INS-02-02-P 손대지 않음, 4 Design-Update = 기획 프레임만 고침, 5 3단계 끝 관문 뒤 4단계를 다시 물음) | 추천대로 진행 (2026-11-17 16:28, 최고관리자) |
| 2026-11-17 | 2단계 | 근거 확인 (Workbench R038 질문: 1 정책 수정 범위 DS-0004 · DS-0005, 4 TI-INS-02-01-P User Type 케이스 화면, 5 [Lock] 버튼 이름 용어집, 확인할 것 5 남은 `대기 (확인 필요)` 3건, 확인할 것 8 `대기` 3건) | 추천대로 진행 (2026-11-17 16:41, 최고관리자): 1 DS-0004 A안 결정, 2 DS-0005 결정, 3(질문 4) TI-INS-02-01-P User Type 케이스 화면 그리지 않음(디스크립션에만), 4(질문 5) [Lock] 용어집에 올림, 5 확인할 것 5 이번엔 안 함, 6 TI-INS-02-T R11 · LI-INS-02-T R10 이번에 반영 · LI-INS-01-P R11 Ver 표기는 4단계 UX 확정 때 |

## 이 작업의 결정 (5단계에서 한꺼번에 반영)
| 논의 대상 | 내용 | 후속 확인 필요 (누구 · 무엇, 없으면 비움) | 5단계 반영 |
| --- | --- | --- | --- |

## 이 작업이 남긴 것

- 논의 대상: DS-0004 (Door 자동 잠금 폐지 · [Lock], 2단계), DS-0005 (알럿 카탈로그 Confirm_031 · Alert_004, 2단계)
- 다른 화면의 반영 대기 항목:
- 커밋:
