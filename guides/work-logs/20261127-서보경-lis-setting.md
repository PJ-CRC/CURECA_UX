---
status: 진행 중            # 진행 중 | 끝남 | 멈춤
requester: 서보경
menu: Setting · LIS Setting (STN)
cids: [TI-STN-04-01-T, TI-STN-04-02-T]
policies: []
cid_system:
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST (작업방 `LIS Setting_tobe` 페이지)
test: false
basis_start: 2026-11-27 10:07 · history 95013cbf
basis:
basis_versions:
  rules:
  policy:
  glossary:
  screens:
  common_ux:
started: 2026-11-27
---
# 작업 기록: LIS Setting 화면을 LIS Setting_tobe에 다시 그리기

## 단계

| 단계 | 끝낸 날 | 마침 점검 | 남긴 것 |
| --- | --- | --- | --- |
| 1. 시작 · 요건 정의 | 2026-11-27 | 요청자 확인 (2026-11-27) | 겹치는 다른 작업: 없음 |
| 2. 근거 · 분석 | | | |
| 3. 화면 설계 | | | |
| 4. 수정 · 확인 | | | |
| 5. 완료 | | | |

이어서 작업할 곳: 2단계 · 절차 1부터

## 요청
<!-- 1단계 절차 1번. 요청 글 한두 줄과 출처, 공유 파일 (아래 "항목마다 적는 법") -->

- 요청 글: "LIS setting 메뉴 옮겨줘" + 기존 작업페이지 링크 https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-567478 (`LIS Setting_asis` 페이지)
- 출처: Workbench 요청 R002 (JKSB-R002), 서보경, 2026-11-27 10:05
- 공유 파일 없음

## 요건 목록
<!-- 1단계 절차 2번(요건 · 대상 화면) · 절차 4번 순서 6(요건마다 경로). 틀은 flow/1-requirements.md "요건 목록 틀": 요건마다 `### 요건 번호. 요건` 묶음, 맨 끝에 작업이 지나가는 단계, 그 아래 "찾았지만 대상 아님" · "영향 화면" -->

### 요건 1. LIS Setting 메뉴 화면을 `LIS Setting_asis`에서 `LIS Setting_tobe`에 다시 그림
- 요청 상태: 최초
- 경로 분기 기준 (근거) · 읽는 강도: 8 옮겨 다시 그림 (케이스 3, 바꾸는 요건 없음) · 케이스 3 (다시 그리기)
- 지나가는 단계: 1 → 2 → 3 → 4 → 5
- UI 작업: 대상 아님 (케이스 3 기본, 4단계 UX 확정 때 다시 정함)

| 대상 화면 | 케이스 | 작업 대상 | 근거 |
| --- | --- | --- | --- |
| Interface Configuration (TI-STN-04-01-T) | 3 | O | |
| Code Mapping (TI-STN-04-02-T) | 3 | O | |

- 대상 화면은 요청 글 "LIS setting 메뉴 옮겨줘"를 IA의 LIS Setting 메뉴 화면 2개(`ia/ia-screens.csv`의 Interface Configuration · Code Mapping)로 읽었습니다. `LIS Setting_asis` 페이지의 기획 프레임도 이 두 화면뿐입니다. 두 화면 모두 `screens/tobe/`에 화면 MD가 없어 케이스 3입니다.
- 짝 화면: 두 화면 모두 IA에 짝 CID가 없음(T-IOS 단독, asis 화면 MD `tl_relation: 단독`)
- 함께 걸리는 다른 화면: 해당 없음 (옮겨 다시 그리는 요건이라 바뀌는 글자 · Common UX 규칙 · 호출 동작이 없음)

작업이 지나가는 단계: 1 → 2 → 3 → 4 → 5

### 찾았지만 대상 아님

다른 화면 없음

### 영향 화면

없음 (1단계 글자 · Common UX 번호 · 호출 관계로 찾을 바뀌는 것이 없음. 2단계에서 정책으로 찾은 것을 더함)

## 읽은 화면
<!-- 1단계 절차 3번. 틀은 flow/1-requirements.md "읽은 화면 틀" -->

| 화면 (CID) | 읽은 것 (화면 MD / 기획 프레임 / 케이스 프레임 / 호출 화면) | Figma 링크 |
| --- | --- | --- |
| Interface Configuration (TI-STN-04-01-T) | 화면 MD (asis, 케이스 절 포함) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-568738 |
| Code Mapping (TI-STN-04-02-T) | 화면 MD (asis, 케이스 절 포함) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-567498 |
| 호출 화면: Confirm_010 · Confirm_016 | 디스크립션의 호출만 확인 (Alert · Toast 카탈로그는 2단계에서 대조) | |

- 1단계에서는 Figma `LIS Setting_asis` 페이지를 열지 않았습니다(케이스 3 이행 기간 1). 두 화면 MD 모두 "참조 섹션 (원문)"이 없고, 디스크립션이 가리키는 케이스는 "케이스" 절에 있습니다.
- 두 화면은 Module · Unit 이름을 쓰지 않습니다(케이스 3 이행 기간 6: 대어 볼 이름 없음).

## 뒤 단계용 확인 항목(claude)
<!-- 1단계 절차 4번 순서 3. 요청자에게 보여 주지 않음. 틀은 flow/1-requirements.md "뒤 단계용 확인 항목 틀" -->

| # | 무엇 (절차 4번 순서 3 "뒤 단계로 넘김"의 1 ~ 5) | 관련된 곳 (CID · 디스크립션 번호) | 넘기는 곳 (2단계 / 3단계) | 이어진 번호 (Q · C · 논의 대상 ID / 근거로 풀림) |
| --- | --- | --- | --- | --- |
| 1 | 1. 기능 정의가 안 된 요소: Port · Host Address(IP) 입력값의 형식 · 범위 검사와, 빈 값으로 [Save]를 누를 때 동작이 없음 | TI-STN-04-01-T #3-2 · #4 · #4(LIS Network) · #5 | 2단계 (POL-SYS-001) | |
| 2 | 1. 기능 정의가 안 된 요소: [Edit]로 LIS 코드를 빈 값 · 다른 항목과 같은 값으로 입력할 때 동작이 없음 | TI-STN-04-02-T #4 | 2단계 (POL-SYS-002) | |
| 3 | 1. 기능 정의가 안 된 요소: 검색 결과가 없을 때 무엇을 보여 주는지 없음 (Sample Type · Test Code · Target Code 검색) | TI-STN-04-02-T #2-1 | 3단계 | |
| 4 | 1. 기능 정의가 안 된 요소: [4-2] 수정된 항목을 "색상으로 구분"하는데 어떤 표시인지 없음 | TI-STN-04-02-T #4 | 3단계 | |
| 5 | 1. 기능 정의가 안 된 요소: 화면 제목 아래 안내 문구 "Configure LIS interface settings for order and result transmission."가 디스크립션에 없음 | TI-STN-04-01-T #0 | 3단계 | |
| 6 | 5. 대상 화면에서 찾은 고칠 점: 디스크립션 번호 `4.`가 두 번 (T-IOS Network · LIS Network) → 뒤의 LIS Network에 끝 번호 다음 번호 (`flow/3-design-case3.md` 번호, 빈 번호 3-1은 그대로 둠) | TI-STN-04-01-T #4 (LIS Network) | 3단계 | |
| 7 | 5. 대상 화면에서 찾은 고칠 점: 디스크립션 "'Push'를 선택" · "Query를 선택" → 화면 값 `Push Mode` · `Query Mode`와 맞춤 | TI-STN-04-01-T #4 | 3단계 | |
| 8 | 5. 대상 화면에서 찾은 고칠 점: 디스크립션 영역 이름 "T-IOS Network (Order Reception Mode: Push Mode Only)" ↔ 화면 "T-IOS Network (Push Mode Only)" | TI-STN-04-01-T #3-2 · #4 | 3단계 | |
| 9 | 5. 대상 화면에서 찾은 고칠 점: 2-1 검색 대상 "System Code 또는 LIS Code" ↔ 화면 검색창 "Search by sample type or LIS code" | TI-STN-04-02-T #2-1 | 3단계 | |
| 10 | 5. 대상 화면에서 찾은 고칠 점: 2-2 제목 `System code` → `System Code` (표기) | TI-STN-04-02-T #2-2 | 3단계 | |
| 11 | 5. 대상 화면에서 찾은 고칠 점: 기존 원본의 "필터 화면" 케이스가 Test Code 목록과 겹쳐 그려져 있음 → 케이스를 따로 그림 | TI-STN-04-02-T 케이스 (필터 화면) | 3단계 | |

## 대상 화면의 반영 대기 항목
<!-- 1단계 절차 3번 순서 4. 틀은 flow/1-requirements.md "대상 화면의 반영 대기 항목 틀" -->

| 묶음 (근거) | 화면 (CID) | 항목 ID | 변경 전 | 변경 후 | 반영 / 이번엔 안 함 / 제외 (바꾸지 않음) |
| --- | --- | --- | --- | --- | --- |
| 1 점검 발견 (디스크립션 · 화면) | Interface Configuration (TI-STN-04-01-T) | TI-STN-04-01-T-R01 | 0에 "Default: All / 데이터: All, Error, Warning" (다른 화면에서 복사된 것으로 보임) | 지움 | 반영 (2026-11-27, 요청자 답) |
| 1 점검 발견 (디스크립션 · 화면) | Interface Configuration (TI-STN-04-01-T) | TI-STN-04-01-T-R03 | 화면 예시는 Push Mode 선택, 디스크립션 기본값은 Query Mode | 기본 상태 화면을 기본값과 맞춤 | 반영 (2026-11-27, 요청자 답) |
| 1 점검 발견 (디스크립션 · 화면) | Code Mapping (TI-STN-04-02-T) | TI-STN-04-02-T-R02 | 4 Done·Enter로 "입력값 저장 처리"와 5 [Save]로 최종 저장이 섞임 | 행 단위 확정과 [Save] 저장을 구분해 씀 | 반영 (2026-11-27, 요청자 답) |
| 2 기준 자료 변경 (정책 · 기준데이터 · 헌법) | Interface Configuration (TI-STN-04-01-T) | TI-STN-04-01-T-R04 | CURECA가 여러 대일 때(TI-ADS) LIS 설정이 장비마다인지 화면에 없음 | 디스크립션에 넣음: LIS 설정은 상단에서 고른 CURECA마다 | 반영 (2026-11-27, 요청자 답) |
| 2 기준 자료 변경 (정책 · 기준데이터 · 헌법) | Code Mapping (TI-STN-04-02-T) | TI-STN-04-02-T-R01 | Sample Type 이름 예시 (Aspirate, Cary-blair, Cellpreserv 등) | `glossary/sample-types.csv`의 UI 표기와 맞춤 | 반영 (2026-11-27, 요청자 답) |
| 2 기준 자료 변경 (정책 · 기준데이터 · 헌법) | Code Mapping (TI-STN-04-02-T) | TI-STN-04-02-T-R03 | Assay Pack 데이터 키 이름(fileType, sampleTypeInfo 등)을 디스크립션에 직접 적음 | 데이터 정의는 Assay Pack 기준 자료로 옮기고 ID로 참조 | 반영 (2026-11-27, 요청자 답) |

- TI-STN-04-01-T-R02(번호 4가 두 번, 3-1 없음 → 번호 정리)는 케이스 3 규칙과 부딪혀 후보에 넣지 않고 `제외 (2026-11-27, 케이스 3 규칙과 부딪힘: …)`로 `pending/closed.md`에 옮겼습니다(빈 번호 3-1은 그대로 두고, 겹친 4는 케이스 3 번호 규칙대로 3단계에서 고침 — "뒤 단계용 확인 항목" 6).

## 근거
<!-- 2단계. 틀은 flow/2-evidence.md "작업 기록에 쓰는 것"의 "근거 틀" -->

## 설계
<!-- 3단계. 틀은 flow/3-design.md "남는 것". 질문 대기 · 변경 확인은 이 절이 아니라 아래 표에 적음 -->

## 질문 대기
<!-- 사용자 확인 목록의 질문 대기. 원본은 이 표(화면 MD에는 두지 않음). 2단계(대조에서 나온 것) · 3단계(설계하며 나온 것)가 앞의 다섯 칸으로 줄을 만들고, 4단계가 "풀린 날 · 어떻게"를 채움. 번호 Q1 · Q2 …는 작업 하나에 통번호(2단계부터 이어 매김, T · L에 같은 것은 같은 번호)이고, 사용자 확인 라벨 · Figma 사용자 확인 목록에 같은 번호를 씀. "질문"은 요청자가 정할 것을 명사형으로, 근거는 괄호로(reference-rules/description.md 5절). 정책을 정해야 하는 질문은 논의 대상 ID를 적음. 줄은 지우지 않음 -->

| 번호 (Q) | 질문 | 관련된 곳 (CID · 디스크립션 번호) | 논의 대상 | T · L 같음 | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- | --- |

## 변경 확인
<!-- 사용자 확인 목록의 변경 확인이자 이 작업으로 화면에서 바뀐 요소의 목록. 원본은 이 표(화면 MD에는 두지 않음). 틀 설명은 reference-rules/work-log.md "틀"의 "변경 확인" 주석 -->

| 번호 (C) | 기존 화면 | 바꿔 그린 것 | 화면 표기 글자 (기존 → 새) | 관련된 곳 (CID · 디스크립션 번호) | 근거 | T · L 같음 | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

## 검토 질의
<!-- 4단계 절차 2번. 틀은 flow/4-revise-verify.md "검토 질의 틀" -->

## 언어셋
<!-- 4단계 절차 4번. 틀은 flow/4-revise-verify.md "언어셋 틀" -->

## 요청자 확인
<!-- 요청자에게 물은 것을 모두 한 줄씩 적음. 틀 설명은 reference-rules/work-log.md "틀"의 "요청자 확인" 주석 -->

| # | 생긴 날 | 단계 · 절차 (질문 번호 또는 `예외`) | 물은 것 | 관련된 곳 (CID · 디스크립션 번호 · Language ID) | 답을 받을 때까지 둔 모습 (예외 질문만) | 답 (날짜) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-11-27 | 1단계 · 절차 5번 질문 6 | 이번 작업 화면의 반영 대기 항목을 묶음 1 · 2마다 반영 / 이번엔 안 함 가운데 고름 | TI-STN-04-01-T · TI-STN-04-02-T 반영 대기 6건 | | |
| 2 | 2026-11-27 | 1단계 · 절차 5번 질문 7 | 요건 목록(요건 1, 케이스 3, 1 → 5단계)대로 진행하고 2단계로 넘어갈지 | 요건 1 | | 이대로 진행, 2단계로 (2026-11-27) |

## 이 작업의 논의 대상
<!-- 2 · 3 · 4단계가 논의 대상을 만들거나 결정 줄을 더할 때마다 한 줄. 5단계는 `결정`인 줄을 반영함 (아래 "쓰는 법"의 "이 작업의 논의 대상") -->

| 논의 대상 | 상태 (논의 중 / 결정) | 내용 한 줄 | 5단계 반영 |
| --- | --- | --- | --- |

## 이 작업이 남긴 것

- 다른 화면의 반영 대기 항목: (전체 항목 ID)
- 고친 카탈로그 줄: (코드 · 무엇을 — 새 줄 / 사용 화면 더함 / 등급(Property) 채움, `alert/`)
