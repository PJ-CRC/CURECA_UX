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
| 3. 화면 설계 | 2026-11-17 | 기계 검사 통과 (2026-11-17) | 화면 MD 7개 tobe · Figma 섹션 7개(케이스 프레임 3개). 질문 대기 Q1 ~ Q5, 변경 확인 C1 ~ C35 (C28 비움). 4단계는 문서 상태가 "아직 이 문서로 작업하지 않음"이라 요청자에게 다음을 물음 |
| 4. 수정 · 확인 | | | |
| 5. 완료 | | | |

이어서 작업할 곳: 4단계 · 절차 1 순서 2 사용자 확인 목록(Q1 ~ Q5, C1 ~ C35)을 보여 줌 (R007, 2026-11-17). 요청자 답을 받으면 순서 3부터 이어 감. 3단계는 끝 관문 통과(화면 7개, Overview는 R039, 나머지는 R041에서 그리다 멈춘 것을 R007에서 화면 MD와 맞춤)

## 요청

- 요청 글: "현재 적용된 UX문서를 기반으로 만들어진 화면들 전부 수정해줘 (Design-Update 내용은 수정하지 말것) 4단계 UX 확정까지만 진행"
- 출처: Workbench 요청 R037 (최고관리자, 2026-11-17 16:25), 페이지 요청(프레임 지정 없음) · Instrument Ⓛ / Ⓣ _re
- 이어 받은 요청: R038 · R039 · R040 · R041 (BREX_06, 최고관리자. R041 "나머지 전부 다 작업 진행"은 17:37에 요청자가 멈춤), R007 (BREX_01, 서보경, 17:47 "instrument 작업 이어서 해줘")
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

- 그릴 곳 (요청자 답 R039 2026-11-17 16:48 「추천대로: 새 CID 섹션 · 이번에 MD 7개 + Overview T·L」): 작업 페이지(Instrument Ⓛ / Ⓣ _re)의 기존 작업방 그림은 그대로 두고, 그 아래 빈 곳에 메뉴 단위 표시 + CID 섹션으로 새로 그림. 이번 요청은 화면 MD 7개와 Overview T · L 한 쌍, 나머지는 다음 요청

### 화면별 요건
| 화면 (CID) | 케이스 | 요건 번호 |
| --- | --- | --- |
| TI-INS-01-T | 3 | 1 (1-1 · 1-2 · 1-3) |
| LI-INS-01-T | 3 | 1 (1-1 · 1-2) |
| TI-INS-02-T | 3 | 1 (1-1 · 1-2) |
| LI-INS-02-T | 3 | 1 (1-1 · 1-2) |
| TI-INS-02-01-P | 3 | 1 (1-1 · 1-2) |
| LI-INS-02-01-P | 3 | 1 (1-1 · 1-2) |
| LI-INS-01-P | 3 | 1 (1-1 · 1-2) |

### 그린 것
| T · L 한 쌍 | 섹션 | 기획 프레임 | 상태 · 케이스 프레임 |
| --- | --- | --- | --- |
| Overview Tab (TI-INS-01-T · LI-INS-01-T) | [TI-INS-01-T](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=2807-45236) · [LI-INS-01-T](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=2807-45744) | 2807:45237 · 2807:45745 (2252 × 1332 · 2252 × 1394) | 그림 끝 (2026-11-17, R039). 케이스 없음 |
| All Tab (TI-INS-02-T · LI-INS-02-T) | [TI-INS-02-T](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=2815-24789) · [LI-INS-02-T](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=2816-25368) | 2815:24790 · 2816:25369 (2252 × 1488 · 2252 × 1706) | 그림 끝 (R041 · R007, 2026-11-17). 케이스 없음 |
| Management Popup (TI-INS-02-01-P · LI-INS-02-01-P) | [TI-INS-02-01-P](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=2823-26013) · [LI-INS-02-01-P](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=2824-26490) | 2823:26014 · 2824:26491 (2252 × 1212 · 2252 × 1080) | 그림 끝 (R041 · R007). 케이스 프레임 2823:26402 · 2824:26818 (Case 1 ~ 3) |
| Door Control Popup (LI-INS-01-P) | [LI-INS-01-P](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=2826-26709) | 2826:26710 (2252 × 1568) | 그림 끝 (R041 · R007). 케이스 프레임 2826:26952 (2676 × 3142, 기존 원본 너비, Case 1 ~ 6). T 자리는 비워 둠 (짝 없음) |

- 메뉴 단위 표시: T-IOS 줄 시스템 구분 `T-IOS - 2.1` (2807:45232) · 기획 진행 표시 `SB-Update : 2026.11.17 (작업중)` (2807:45234), L-IOS 줄 (2807:45740 · 2807:45742). 너비는 섹션 줄 너비 12342(x 10000 ~ 22342)에 맞춤 (R007)
- 배치 (R007에서 다시 맞춤): 섹션 줄 순서 INS-01-T → INS-01-P(L만) → INS-02-T → INS-02-01-P, 가로 간격 200px. LI-INS-01-P 섹션(너비 3111)이 LI-INS-02-T와 34px 겹쳐 있어 INS-02-T · INS-02-01-P를 T · L 함께 오른쪽으로 옮김. T-IOS 줄에서 가장 긴 섹션(TI-INS-02-01-P) 아래 끝 54225 → L-IOS 시스템 구분 표시 56225 (2000px), L-IOS 섹션 줄 y 57445
- 업데이트 메모: 기존 작업방 메모를 그대로 복제해 옮김 (T `v2.1.06 update`, L `v2.1.17 update`)

### 컴포넌트 없이 그린 요소
<!-- 5단계 완료 때 Common UX 후보 목록으로 올라가는 표. 요소 이름 뒤 괄호에 종류를 적습니다(예: 새로고침 (아이콘 버튼)). -->
| 요소 이름 (종류) | 하는 일 | 쓴 곳 (CID · 디스크립션 번호) | 어디서 (후보 ID / 신규로 만듦 / 기존 화면에서 따옴) | Figma 링크 |
| --- | --- | --- | --- | --- |
| Module 카드 · 장비 이미지 · Module Status 표 (기존 화면 그대로) | Module Type별 현황 요약 | TI-INS-01-T · LI-INS-01-T 3 ~ 3-6 | 기존 화면에서 따옴 (기획 프레임을 복제) | [3249-111508](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3249-111508) · [10069-367211](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=10069-367211) |

### 근거로 풀린 것
| 질문 | 푼 근거 |
| --- | --- |
| LI-INS-01-P R10 (자동 잠금 폐지) · R12 (Confirm_031) | DS-0004 · DS-0005 `결정` (2026-11-17) |
| 화면 정보 Ver · Date · 작성자 (L 화면 MD 머리말은 2.1.06 · 서보경) | 기존 기획 프레임 패널 값 (LI-INS-01-T · LI-INS-02-T 2.1.17 · 2026.11.13 · 이상헌, LI-INS-01-P 2.1.13 · 2026.11.13 · 이상헌) |

### 찾은 것
- 기존 T 화면(TI-INS-01-T)은 L 화면을 복제한 듯 번호 표시가 디스크립션과 다름: Door Status Info 아이콘에 5(범례 5와 겹침), Event 줄에 설명 없는 6 → 설명 없는 6 지우고 Door Status 툴팁을 6으로 (C9), 툴팁 설명은 질문 (Q1)
- LI-INS-01-T 3-5에도 TI와 같은 "우측의 Instrument Detail Info page 참고"가 있으나 고른 반영 대기가 없어 그대로 둠 → 반영 대기 R06 `대기`(점검 발견)로 남김
- LI-INS-01-P 케이스 프레임에 Case 번호가 없음 → 기존 원본 순서대로 Case 1 ~ 6을 붙여 화면 MD 케이스 표에 옮김 (규칙에 없어 판단한 곳)
- LI-INS-01-P [Lock] 안내 문구가 세 가지, Door Open일 때 [Lock] 안내 팝업이 디스크립션(Confirm_031)과 케이스 프레임(Alert_048 "The door is open. Close the door, then press Lock again.")이 다름 → Q3 · Q4
- LI-INS-02-01-P 케이스 「모듈에 Device Unit이 없는 Case」에 번호가 없어 Case 3을 붙임 (규칙에 없어 판단한 곳)
- 등록되지 않은 Module Type Tab의 Alert_004는 기존 원본에 케이스 화면이 없어 그리지 않음 (디스크립션에만)
- 패널 글꼴은 SB Description 컴포넌트 그대로(Inter)
- R041이 그리다 멈춘 것을 R007에서 화면 MD와 대조함: 섹션 5개 · 케이스 프레임 3개 · 패널 디스크립션 번호 · 화면 번호 표시 · 화면 라벨 · 사용자 확인 목록이 화면 MD와 같음. 다른 곳 둘을 화면 MD에 맞춰 넣음
  - LI-INS-02-01-P: 기존 화면의 번호 표시 1-3에 맞는 디스크립션이 없어(L은 조회 전용이라 Radio 없음) Figma에서 지우고 사용자 확인 목록에 C35를 둠 → 화면 MD · 작업 기록 변경 확인 표에 C35를 더함 (TI-INS-01-T C9와 같은 종류)
  - TI-INS-02-01-P: 기존 원본에도 「모듈에 Device Unit이 없는 Case」가 있어(1단계 "읽은 기존 화면"에는 케이스 2개로 적음) Figma에 Case 3으로 옮겨져 있음 → 화면 MD 케이스 표 · 1 참고 줄에 Case 3을 더함
- 화면 MD 머리말 `figma`를 새 섹션 링크로 채움 (5개)

### 용어 치환
| 원래 표현 | 표준어 | 위치 |
| --- | --- | --- |
| Cureca | CURECA | TI-INS-01-T · LI-INS-01-T 0 |
| Dignosctics | Diagnostics | TI-INS-01-T · LI-INS-01-T 2 (화면 글자) |
| Enablde | Enabled | TI-INS-01-T · LI-INS-01-T 3-2 (화면 글자) |
| Unconnected | Disconnected | TI-INS-02-T · LI-INS-02-T 1 (화면 MD) |
| Waste Status | Waste Bin/Bottle Status | TI-INS-02-T · LI-INS-02-T 6 (화면 MD) |
| Account Type / Account type | User Type | TI/LI-INS-02-T 4, TI/LI-INS-02-01-P 2 · 케이스 (화면 MD) |
| T-IO S | T-IOS | TI-INS-02-T · LI-INS-02-T 4 (화면 MD) |
| Cancle, Datail, Ruuning, Lcok | Cancel, Detail, Running, Lock | TI/LI-INS-02-01-P, LI-INS-01-P (화면 MD) |

## 질문 대기

| 번호 (Q) | 질문 | 관련된 곳 (CID · 디스크립션 번호) | 논의 대상 | T · L 같음 | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- | --- |
| Q1 | T-IOS Door Status 툴팁 문구 (기존 T 디스크립션에 없음. L-IOS 문구를 따랐으나 Unlock / Lock 기능 안내가 T-IOS에 맞는지) | TI-INS-01-T 6 | | T만 | 2026-11-17 · 요청자 답: Lock 내용을 빼고 정리 → "Shows door open/close status" (C36) |
| Q2 | [Door Control] 버튼 활성화 조건 (기존 디스크립션은 COMM-3-a만, 정책서는 Popup 안 [Unlock] 조건만 정함) | LI-INS-01-T 6 | | L만 | |
| Q3 | [Lock] 안내 문구 하나 고르기 (Close the door, then press Lock to lock it. / Close the door and press the 'Lock' button to resume the module / Close the door and press Lock. The module will resume once locked.) | LI-INS-01-P 2-6 | | L만 | |
| Q4 | Door가 Open일 때 [Lock] 안내 팝업 (디스크립션 · DS-0005는 Confirm_031 "Please close the door.", 케이스 프레임은 Alert_048 "The door is open. Close the door, then press Lock again.") | LI-INS-01-P 2-5, LI-INS-02-T 3-1 | DS-0005 | L만 | |
| Q5 | User Type이 Admin · User일 때 [Save] · Radio 버튼 모습 (숨김 / Disabled, 정책은 "조회만"만 정함) | TI-INS-02-01-P 3 | | T만 | |

## 변경 확인

| 번호 (C) | 기존 화면 | 바꿔 그린 것 | 관련된 곳 (CID · 디스크립션 번호) | 근거 | T · L 같음 | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C1 | Cureca 장비의 현황 | 표기 수정 (Cureca → CURECA) | TI-INS-01-T 0, LI-INS-01-T 0 | TI R02 · LI R01 | 같음 | - | |
| C2 | Alert_L_004 팝업 노출 | 알럿 ID 수정 (Alert_L_004 → Alert_004, 문구 함께 적음) | TI-INS-01-T 1 | TI R01, DS-0005 | T만 | O | |
| C3 | Total / In Use / Not in Use | 표출 항목을 화면 표기대로 (Enabled n · Total n (Disabled n)) | TI-INS-01-T 3-2, LI-INS-01-T 3-2 | TI R04 · LI R02, POL-EQP-009 | 같음 | - | |
| C4 | Dignosctics, Enablde | 표기 수정 (Dignosctics → Diagnostics, Enablde → Enabled) | TI-INS-01-T 2 · 3-2, LI-INS-01-T 2 · 3-2 | TI R05 · LI R03 | 같음 | O | |
| C5 | 자세한 상태값은 우측의 Instrument Detail Info page 참고 | 상태값 · Door 2개 Module 표시를 풀어 씀 | TI-INS-01-T 3-5 | TI R06, POL-EQP-001 | T만 | - | |
| C6 | 패널 CID TI-INS-02-T | 패널 CID 수정 (TI-INS-02-T → TI-INS-01-T) | TI-INS-01-T 0 | TI R03 | T만 | - | |
| C7 | 기능 활성화 조건 COMM-3-a, Door Control 팝업에서 Unlock · Lock 가능 | 동작을 Door Control 기준으로 정리 (Popup 호출, Door별 [Unlock] · [Lock], 자동 잠금 없음) | LI-INS-01-T 6 | LI R04, POL-EQP-008 · DS-0004 | L만 | - | |
| C8 | 디스크립션 "Unlock 버튼 (L-IOS Only)" / 화면 "Door Control" | 버튼 이름 통일 (Unlock 버튼 → [Door Control] 버튼) | LI-INS-01-T 6 | LI R05 | L만 | - | |
| C9 | 디스크립션 없는 번호 표시 6, Door Status Info 아이콘 번호 5(범례 5와 겹침) | 번호 표시 정리 (설명 없는 6 지움, Door Status 툴팁 5 → 6) | TI-INS-01-T 0 | 기존 화면 번호 표시가 디스크립션과 다름 | T만 | - | |
| C10 | Connected / Unconnected | 상태값 수정 (Unconnected → Disconnected) | TI-INS-02-T 1, LI-INS-02-T 1 | R01 | 같음 | O | |
| C11 | STAT Storage (Upper) · (Lower) | 표기 수정 (→ STAT Storage) | TI-INS-02-T 5, LI-INS-02-T 5 | R03 | 같음 | O | |
| C12 | Tip · Film Waste Bin (Upper/Lower) | 표기 수정 (→ Waste Bin (Upper), Waste Bin (Lower)) | TI-INS-02-T 6, LI-INS-02-T 6 | R04 | 같음 | O | |
| C13 | Sample Storage(2), Liquid Waste Bottle(Upper) | 표기 수정 (이름 (번호) 띄어쓰기) | TI-INS-02-T 1 · 6, LI-INS-02-T 1 · 6 | R05 | 같음 | O | |
| C14 | Waste Status | 표기 수정 (→ Waste Bin/Bottle Status) | TI-INS-02-T 6, LI-INS-02-T 6 | R06 | 같음 | O | |
| C15 | T-IO S, Account type | 표기 수정 (→ T-IOS, User Type) | TI-INS-02-T 4, LI-INS-02-T 4 | R09 | 같음 | - | |
| C16 | hh:dd:ss(시:분:초) | 표기 수정 (→ hh:mm:ss) | TI-INS-02-T 7, LI-INS-02-T 7 | TI R11 · LI R10 | 같음 | O | |
| C17 | [Unlock] · [Lock] 문장 끊김 | 동작을 Door Control 기준으로 정리 (Confirm_008, Paused, 자동 잠금 없음, Confirm_031) | LI-INS-02-T 3 · 3-1 | LI R08, DS-0004 · DS-0005 | L만 | - | |
| C18 | 취소선 2-1 · 2-2 옛 조건 · 4-1 · 4-2 | 취소선 항목 4개 지움 | TI-INS-02-T 0 | 기존 화면 취소선 | T만 | - | |
| C19 | 취소선 2-1 · 4-1 | 취소선 항목 2개 지움 | LI-INS-02-T 0 | 기존 화면 취소선 | L만 | - | |
| C20 | Account Type의 Sevice일 경우만 노출 | 표기 수정 (→ User Type, Service) | TI-INS-02-01-P 2, LI-INS-02-01-P 2 | R01 | 같음 | - | |
| C21 | [Cancle], Datail | 표기 수정 (→ Cancel, Detail) | TI-INS-02-01-P 0 · 3-1, LI-INS-02-01-P 0 | TI R02 · LI R04 | 같음 (L은 Detail만) | O | |
| C22 | Enabled 변경 권한 정의 없음 | Enabled 변경은 Service만, Admin · User는 조회만 | TI-INS-02-01-P 0 · 3 | R03, POL-EQP-009 | T만 | O | |
| C23 | CURECA 구동 상태값이 Ready 및 not initialized | 장비 통합 상태 · 장비 모듈 상태가 Ready 또는 Not Initialized | TI-INS-02-01-P 3 | R04, POL-EQP-009 | T만 | O | |
| C24 | Device Unit 설정 대상 정의 없음 | 같은 Device Unit이 2대 이상일 때만 Device Unit별 설정 | TI-INS-02-01-P 1-3 | R05, POL-EQP-009 | T만 | O | |
| C25 | 표 헤더 Enable, Radio Enable / Disable | 표기 수정 (→ Enabled, Disabled) | TI-INS-02-01-P 1 | R08 | T만 | O | |
| C26 | 조회 전용임이 분명하지 않음 | 모든 User Type이 조회만 가능 명시 | LI-INS-02-01-P 0 | R02, POL-EQP-009 | L만 | - | |
| C27 | [Unlock all doors] 사용 가능 "Ready, Paused, Error" (케이스 메모) | 활성 조건에 Not Initialized 포함 | LI-INS-01-P 3 | R01, POL-EQP-008 | L만 | O | |
| C29 | Cannot unlock while the module is running. / … system is running. | 문구 통일 (→ Cannot unlock while the system is running.) | LI-INS-01-P 2-7 | R03 | L만 | O | |
| C30 | Ruuning, Lcok | 표기 수정 (→ Running, Lock) | LI-INS-01-P 0 · 2-1 | R05 | L만 | - | |
| C31 | 자동 잠금 표현 혼재, Run Start 자동 잠금 없음 | 자동 잠금 없음 · [Lock]으로 잠금 · Run Start 때 Unlocked Door 자동 잠금 | LI-INS-01-P 0 · 2-5 | R06, POL-EQP-008 · DS-0004 | L만 | O | |
| C32 | Unlock 1개라도 해당 되면 Paused | 문장 정리 (장비 통합 상태와 관계없이, Door가 여러 개면 하나라도) | LI-INS-01-P 0 · 3 | R07, POL-EQP-004 | L만 | - | |
| C33 | 즉시 가능 · 불가 조건이 장비 모듈 상태 기준 | 장비 통합 상태별 허용 · 조건부 허용 Module 기준으로 통일 | LI-INS-01-P 2-5 | R08, POL-EQP-008 | L만 | O | |
| C34 | 취소선 "기존: Module 상태값에 따른 Door Lock해제" | 취소선 항목 1개 지움 | LI-INS-01-P 0 | 기존 화면 취소선 | L만 | - | |
| C35 | 디스크립션 없는 번호 표시 1-3 | 번호 표시 1-3 지움 | LI-INS-02-01-P 0 | 기존 화면 번호 표시가 디스크립션과 다름 | L만 | - | |
| C36 | (기존 T 디스크립션에 툴팁 문구 없음, L-IOS 문구를 따라 그림) | 툴팁 문구에서 Unlock / Lock 안내를 뺌 (→ Shows door open/close status) | TI-INS-01-T 6 | Q1의 답 | T만 | O | 맞음 (2026-11-17) |

- C28은 쓰지 않음 (번호를 비워 둠)

## 의견

## 언어셋

## 요청자 확인

| 날짜 | 단계 | 확인한 것 | 요청자 답 |
| --- | --- | --- | --- |
| 2026-11-17 | 1단계 | 요건 목록 · 대상 화면 · 고칠 내용 · 반영 대기 묶음 (Workbench R037 질문: 1 고칠 내용 = 반영 대기 묶음 1 · 2 · 3, 2 TI-TMG-01 뺌, 3 TI-INS-02-02-P 손대지 않음, 4 Design-Update = 기획 프레임만 고침, 5 3단계 끝 관문 뒤 4단계를 다시 물음) | 추천대로 진행 (2026-11-17 16:28, 최고관리자) |
| 2026-11-17 | 2단계 | 근거 확인 (Workbench R038 질문: 1 정책 수정 범위 DS-0004 · DS-0005, 4 TI-INS-02-01-P User Type 케이스 화면, 5 [Lock] 버튼 이름 용어집, 확인할 것 5 남은 `대기 (확인 필요)` 3건, 확인할 것 8 `대기` 3건) | 추천대로 진행 (2026-11-17 16:41, 최고관리자): 1 DS-0004 A안 결정, 2 DS-0005 결정, 3(질문 4) TI-INS-02-01-P User Type 케이스 화면 그리지 않음(디스크립션에만), 4(질문 5) [Lock] 용어집에 올림, 5 확인할 것 5 이번엔 안 함, 6 TI-INS-02-T R11 · LI-INS-02-T R10 이번에 반영 · LI-INS-01-P R11 Ver 표기는 4단계 UX 확정 때 |
| 2026-11-17 | 3단계 | 그릴 곳 · 한 요청에 몇 화면씩 (Workbench R039 질문) | 추천대로: 새 CID 섹션 · 이번에 MD 7개 + Overview T·L (2026-11-17 16:48, 최고관리자) |
| 2026-11-17 | 3단계 | 작업 파일에 UX가이드가 적용돼 있지 않아 적용 뒤 이어 갈지 (Workbench R007 질문, BREX_01) | 적용했으니 이어서 진행 (2026-11-17 18:05, 서보경. Common UX 가이드 적용 18:06) |
| 2026-11-17 | 3단계 | 3단계 끝 관문 뒤 4단계를 이어 갈지 (Workbench R007 질문) | 4단계 초안대로 진행 (UX 확정까지) (2026-11-17 18:18, 서보경) |
| 2026-11-17 | 4단계 | 절차 1 사용자 확인 목록: 질문 대기 Q1 ~ Q5, 변경 확인 C1 ~ C35 (C28 비움) (Workbench R007 질문) | 하나씩 답하기 (2026-11-17 18:29, 서보경) → Q1부터 하나씩 여쭘 |
| 2026-11-17 | 4단계 | Q1 T-IOS Door Status 툴팁 문구 (Workbench R007 질문) | T-IOS 안내 문구는 Lock 상태를 제외한 내용으로 정리 (2026-11-17 18:33, 서보경) → 화면 MD · Figma 고침, 화면 라벨 · Figma의 사용자 확인 목록에서 Q1 지움, C36 (맞음) |

## 이 작업의 결정 (5단계에서 한꺼번에 반영)
| 논의 대상 | 내용 | 후속 확인 필요 (누구 · 무엇, 없으면 비움) | 5단계 반영 |
| --- | --- | --- | --- |
| DS-0004 | A안: Door 자동 잠금 없앰 · [Lock]으로 잠금 (POL-EQP-008 요약 · 규칙 3 · `alerts`, POL-EQP-004 규칙 7, `policy/equipment-states.md` 5절, POL-EQP-001 `cids`) | | |
| DS-0005 | `policy/alert-catalog.csv` Confirm_031 더함 · Alert_004 사용 화면에 TI-INS-01-T | | |

## 이 작업이 남긴 것

- 논의 대상: DS-0004 (Door 자동 잠금 폐지 · [Lock], 2단계), DS-0005 (알럿 카탈로그 Confirm_031 · Alert_004, 2단계)
- 다른 화면의 반영 대기 항목:
- 커밋:
