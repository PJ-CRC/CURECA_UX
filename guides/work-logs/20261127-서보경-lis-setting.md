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
basis: 2026-11-27 14:45 · history 31f20afa
basis_versions:
  rules: CURECA 작업규칙 @2026-11-27 11:34
  policy: 정책서 @2026-11-25 21:21
  glossary: 기준데이터 @2026-11-25 21:21
  screens: 화면 정의서 @2026-11-26 03:39
  common_ux: Common UX (common-ux/comm-index.md) @2026-11-26 16:53
started: 2026-11-27
---
# 작업 기록: LIS Setting 화면을 LIS Setting_tobe에 다시 그리기

## 단계

| 단계 | 끝낸 날 | 마침 점검 | 남긴 것 |
| --- | --- | --- | --- |
| 1. 시작 · 요건 정의 | 2026-11-27 | 요청자 확인 (2026-11-27) | 겹치는 다른 작업: 없음 |
| 2. 근거 · 분석 | 2026-11-27 | 물을 것 없음 (2026-11-27) | 질문 대기 Q1 ~ Q4 · 변경 확인 C1 ~ C7 |
| 3. 화면 설계 | 2026-11-27 | 기계 검사 통과 (2026-11-27) | 질문 대기 Q1 ~ Q7 · 변경 확인 C1 ~ C16 (3단계 확인 C1 · C3 · C9 · C10 · C11 · C13 · C16) |
| 4. 수정 · 확인 | | | UX 확정 (2026-11-27) · 내부 검토 반영 (요청자 서보경 검토, 고객 검토 없이 확정) |
| 5. 완료 | | | |

이어서 작업할 곳: 4단계 · UX 확정 (2026-11-27) 뒤 수정 — 검토 질의 6 · 7(C27 안내 문구 지움, C28 · C29 입력 안내 글을 언어셋 DB 글자로) 화면 MD · Figma · 재설계 후 변경 내역 메모까지 고침, 언어셋 절 정리함, Query Mode 때 Port 표시값(None) 요청자 확인 #10 답 기다림 → 답대로 언어셋 None 줄 정리(화면을 바꾸면 변경 확인 줄 → 화면 MD → Figma · 메모) → 「최종으로 UX 확정을 하시겠습니까?」 다시 물음 → 절차 4 순서 5 UI 확정 해당 없음 → 절차 6 (다시 읽을 곳: 4단계 절차 3 「UX 확정 뒤에 고칠 때」 · 절차 4 순서 5 · 절차 6 / 작업 기록 "언어셋" · "요청자 확인" · "검토 질의")

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
- UI 작업: 대상 아님 (2026-11-27, 서보경 확정 — 바뀐 것은 이미 있는 자리에 표기되는 데이터 값이고 버튼명처럼 화면 글자가 바뀌는 수준이 아님)

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
| 1 | 1. 기능 정의가 안 된 요소: Port · Host Address(IP) 입력값의 형식 · 범위 검사와, 빈 값으로 [Save]를 누를 때 동작이 없음 | TI-STN-04-01-T #3-2 · #4 · #4(LIS Network) · #5 | 2단계 (POL-SYS-001) | Q2 |
| 2 | 1. 기능 정의가 안 된 요소: [Edit]로 LIS 코드를 빈 값 · 다른 항목과 같은 값으로 입력할 때 동작이 없음 | TI-STN-04-02-T #4 | 2단계 (POL-SYS-002) | Q3 |
| 3 | 1. 기능 정의가 안 된 요소: 검색 결과가 없을 때 무엇을 보여 주는지 없음 (Sample Type · Test Code · Target Code 검색) | TI-STN-04-02-T #2-1 | 3단계 | Q5 |
| 4 | 1. 기능 정의가 안 된 요소: [4-2] 수정된 항목을 "색상으로 구분"하는데 어떤 표시인지 없음 | TI-STN-04-02-T #4 | 3단계 | Q6 |
| 5 | 1. 기능 정의가 안 된 요소: 화면 제목 아래 안내 문구 "Configure LIS interface settings for order and result transmission."가 디스크립션에 없음 | TI-STN-04-01-T #0 | 3단계 | C9 |
| 6 | 5. 대상 화면에서 찾은 고칠 점: 디스크립션 번호 `4.`가 두 번 (T-IOS Network · LIS Network) → 뒤의 LIS Network에 끝 번호 다음 번호 (`flow/3-design-case3.md` 번호, 빈 번호 3-1은 그대로 둠) | TI-STN-04-01-T #4 (LIS Network) | 3단계 | C8 |
| 7 | 5. 대상 화면에서 찾은 고칠 점: 디스크립션 "'Push'를 선택" · "Query를 선택" → 화면 값 `Push Mode` · `Query Mode`와 맞춤 | TI-STN-04-01-T #4 | 3단계 | C10 |
| 8 | 5. 대상 화면에서 찾은 고칠 점: 디스크립션 영역 이름 "T-IOS Network (Order Reception Mode: Push Mode Only)" ↔ 화면 "T-IOS Network (Push Mode Only)" | TI-STN-04-01-T #3-2 · #4 | 3단계 | C11 |
| 9 | 5. 대상 화면에서 찾은 고칠 점: 2-1 검색 대상 "System Code 또는 LIS Code" ↔ 화면 검색창 "Search by sample type or LIS code" | TI-STN-04-02-T #2-1 | 3단계 | C12 |
| 10 | 5. 대상 화면에서 찾은 고칠 점: 2-2 제목 `System code` → `System Code` (표기) | TI-STN-04-02-T #2-2 | 3단계 | C13 |
| 11 | 5. 대상 화면에서 찾은 고칠 점: 기존 원본의 "필터 화면" 케이스가 Test Code 목록과 겹쳐 그려져 있음 → 케이스를 따로 그림 | TI-STN-04-02-T 케이스 (필터 화면) | 3단계 | 근거로 풀림 (Figma 원본에서 필터 케이스가 따로 그려져 있음 `3543:568577`) |

## 대상 화면의 반영 대기 항목
<!-- 1단계 절차 3번 순서 4. 틀은 flow/1-requirements.md "대상 화면의 반영 대기 항목 틀" -->

| 묶음 (근거) | 화면 (CID) | 항목 ID | 변경 전 | 변경 후 | 반영 / 이번엔 안 함 / 제외 (바꾸지 않음) |
| --- | --- | --- | --- | --- | --- |
| 1 점검 발견 (디스크립션 · 화면) | Interface Configuration (TI-STN-04-01-T) | TI-STN-04-01-T-R01 | 0에 "Default: All / 데이터: All, Error, Warning" (다른 화면에서 복사된 것으로 보임) | 지움 | 반영 (2026-11-27, 요청자 답) |
| 1 점검 발견 (디스크립션 · 화면) | Interface Configuration (TI-STN-04-01-T) | TI-STN-04-01-T-R03 | 화면 예시는 Push Mode 선택, 디스크립션 기본값은 Query Mode | 기본 상태 화면을 기본값과 맞춤 | 반영 (2026-11-27, 요청자 답) |
| 1 점검 발견 (디스크립션 · 화면) | Code Mapping (TI-STN-04-02-T) | TI-STN-04-02-T-R02 | 4 Done·Enter로 "입력값 저장 처리"와 5 [Save]로 최종 저장이 섞임 | 행 단위 확정과 [Save] 저장을 구분해 씀 | 반영 (2026-11-27, 요청자 답) |
| 2 기준 자료 변경 (정책 · 기준데이터 · 헌법) | Interface Configuration (TI-STN-04-01-T) | TI-STN-04-01-T-R04 | CURECA가 여러 대일 때(TI-ADS) LIS 설정이 장비마다인지 화면에 없음 | 디스크립션에 넣음: LIS 설정은 상단에서 고른 CURECA마다 | 반영 (2026-11-27, 요청자 답) |
| 2 기준 자료 변경 (정책 · 기준데이터 · 헌법) | Code Mapping (TI-STN-04-02-T) | TI-STN-04-02-T-R01 | Sample Type 이름 예시 (Aspirate, Cary-blair, Cellpreserv 등) | `glossary/sample-types.csv`의 UI 표기와 맞춤 | 반영 (2026-11-27, 요청자 답) |
| 2 기준 자료 변경 (정책 · 기준데이터 · 헌법) | Code Mapping (TI-STN-04-02-T) | TI-STN-04-02-T-R03 | Assay Pack 데이터 키 이름(fileType, sampleTypeInfo 등)을 디스크립션에 직접 적음 | 데이터 정의는 Assay Pack 기준 자료로 옮기고 ID로 참조 | 이번엔 안 함 (2026-11-27, 서보경, 4단계 C4 답: 디스크립션에 Assay Pack 문서의 정확한 파라미터로 직접 씀 → C23) |

- TI-STN-04-01-T-R02(번호 4가 두 번, 3-1 없음 → 번호 정리)는 케이스 3 규칙과 부딪혀 후보에 넣지 않고 `제외 (2026-11-27, 케이스 3 규칙과 부딪힘: …)`로 `pending/closed.md`에 옮겼습니다(빈 번호 3-1은 그대로 두고, 겹친 4는 케이스 3 번호 규칙대로 3단계에서 고침 — "뒤 단계용 확인 항목" 6).

## 근거
<!-- 2단계. 틀은 flow/2-evidence.md "작업 기록에 쓰는 것"의 "근거 틀" -->

읽은 강도: 요건 1 · 8 옮겨 다시 그림 · 케이스 3 (다시 그리기). 정책 찾는 길 ① ~ ⑤ (⑤ 장비는 화면에 Module이 없어 해당 없음). 논의 대상(`discussions/` 13건)에 LIS Setting · POL-SYS-001 · 002가 걸린 것 없음. 대상 화면에 `basis`가 없어 basis 뒤 바뀐 것 보기는 하지 않음.

**읽은 자료 목록**

| 요건 | 종류 | 자료 (ID · 파일) | 연결 근거 (왜 이 요건과 관련 있나) | 설계에 씀 (O / -) | 쓰는 화면 · 요소 | 설계에 쓸 규칙 (번호 · 문장, `-`면 쓰지 않는 이유) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 정책 | POL-SYS-001 LIS 연동 설정 | 정책 `cids`에 TI-STN-04-01-T, 화면 MD 본문 | O | Interface Configuration (TI-STN-04-01-T) 0 · 1 · 2 · 3 · 3-2 · 3-3 · 4 · LIS Network · 5 | 규칙 1 "LIS 인터페이스와 CURECA는 1:1로 연결함." / 2 "Interface Type은 HL7로 고정함." / 3 "Transport Protocol은 MLLP 또는 HTTP이며 기본값은 MLLP임." / 4 "Order Reception Mode는 Query Mode 또는 Push Mode이며 기본값은 Query Mode임." / 5 "Push Mode일 때만 T-IOS Network의 오더 수신 Port를 설정하며 기본값은 20200임. Query Mode로 바꾸면 Port 값을 지우고 비활성화하며, 다시 Push Mode로 바꾸면 20200을 채움." / 6 "검사 결과를 보낼 LIS 서버의 Host Address(IP)와 Port는 LIS Network에 입력하며 기본값은 비어 있음." / 7 "LIS 설정은 CURECA마다 따로 두며, T-IOS 상단에서 고른 CURECA의 설정을 보여 주고 바꿈 (POL-COM-005)." / 8 "설정은 User Type이 Service 또는 Admin일 때 바꿀 수 있음." |
| 1 | 정책 | POL-SYS-002 LIS Code Mapping | 정책 `cids`에 TI-STN-04-02-T, 화면 MD 본문 | O | Code Mapping (TI-STN-04-02-T) 0 · 1 · 2 · 2-2 · 3 · 4 · 5 | 정의: Sample Type Code = Sample Type (Assay Pack의 공통 정보) / Test Code = 검사 항목 (Assay Pack의 PCR 정보) / Target Code = Target을 따로 쓰는 검사 항목과 그 Target (2단계, Assay Pack의 PCR 정보 중 Target 이름을 쓰는 검사 항목). 규칙 1 "관리 항목은 Assay Pack에 들어 있는 정보로 정해지며, Assay Pack이 바뀌면 항목도 바뀜." / 2 "화면에는 코드 대신 UI 표기 이름(Sample Type 이름, 검사 항목 이름)을 보여 줌." / 3 "처음 설치할 때 LIS Code에는 CURECA가 관리하는 값이 채워져 있고, 사용자가 필요하면 고침." / 4 "입력한 LIS Code는 LIS 연동 때 대응 기준으로 씀." / 5 "고친 내용은 [Save]를 눌러야 반영되며, 저장하지 않고 화면을 떠나면 Confirm_016을 보여 줌." / 6 "Code Mapping은 CURECA마다 따로 둠 (POL-COM-005)." |
| 1 | 정책 | POL-COM-005 여러 대 CURECA 운영 | 정책 `cids`에 TI-STN-04-01-T · TI-STN-04-02-T, 반영 대기 TI-STN-04-01-T-R04 | O | 두 화면 0 | 규칙 3 "Dashboard(All)를 뺀 메뉴는 상단에서 고른 CURECA 기준의 데이터를 보여 줌." / 5 "모든 설정은 CURECA마다 따로 둠: … LIS Setting …" |
| 1 | 정책 | POL-TST-010 검사 항목과 조합 검사 | 정책 `cids`에 TI-STN-04-02-T | O | Code Mapping (TI-STN-04-02-T) 화면 예시 글자 (Sample Type · Test Code · Target Code 목록) | 규칙 1 "검사 항목, 검사군, 검사 항목별 사용 가능 검체 타입, 검사 Target은 Assay Pack(Master, PCR 파일)에서 받아 보여 줌. 화면설계서의 예시 값도 이 실제 값(`glossary/test-items.csv`, `glossary/sample-types.csv`)을 씀." / 4 "Target 선택이 가능한 검사 항목(… `glossary/test-items.csv`의 Target Masking 가능 Y)만 …" |
| 1 | 기준데이터 | `glossary/sample-types.csv` | POL-SYS-002 · POL-TST-010 `data`, 반영 대기 TI-STN-04-02-T-R01 | O | Code Mapping (TI-STN-04-02-T) Sample Type Code 목록 | 14종 UI 표기 / 코드: Aspirate · BAL · Cary-blair · Cellpreserv · eNAT stool (eNAT_stool) · Fecal swab (Fecal_swab) · Raw stool (Raw_stool) · Saliva · Semen · Sputum · Surepath · Swab · Thinprep · Urine (나머지는 UI 표기 = 코드) |
| 1 | 기준데이터 | `glossary/test-items.csv` | POL-SYS-002 · POL-TST-010 `data` | O | Code Mapping (TI-STN-04-02-T) Test Code · Target Code 목록 | 검사 항목 30종 UI 표기(기존 화면 Test Code 목록과 같음). Target Masking 가능 Y 9종과 Target 수: Allplex HPV28 28 · Anyplex II HPV HR 14 · GI-B1 7 (Sh/EI, Cam, Yer, Vib, CdB, Aer, Sal) · GI-B2 6 · GI-V 6 · PB 7 · RP1 7 · RP2 7 · RP3 5. 코드 예: Allplex HPV HR = `HPVHR-HP72/73`(쓰지 않는 표현 `Allplex_HPV_HR`), Allplex HPV28 = `Allplex_HPV28` |
| 1 | Alert | `alert/alert-catalog.csv` Confirm_010 · Alert_017 | 디스크립션 5, POL-SYS-001 · 002 `alerts` | O | 두 화면 5 [Save] | Confirm_010 "Would you like to save?" OK → 데이터 저장 & Alert_017 노출 / Close → 닫힘. Alert_017 "The save is complete." OK → 닫힘. 사용 화면에 TI-STN-04-01-T · TI-STN-04-02-T 있음 |
| 1 | Alert | `alert/alert-catalog.csv` Confirm_016 | 디스크립션 5-1 · 5, POL-SYS-001 · 002 `alerts` | O | 두 화면 저장하지 않고 이동 | Confirm_016 "Leave Without Saving?" / "If you leave this page, your changes will be lost." Leave → 클릭한 메뉴로 이동 / Cancel → 닫힘. 사용 화면에 두 화면 있음 |
| 1 | 기준 자료 | `policy/permission-matrix.csv` | POL-SYS-001 `data`, 0번 User Type 확인 | - | | (Setting 아래 LIS Setting 줄이 없음 → 질문 대기 Q1) |
| 1 | 용어 | `glossary/terms.csv` · `glossary/glossary.md` | 용어 대조 (절차 5번 순서 3) | O | 두 화면 디스크립션 | 아래 "용어 목록" |

**관련 자료 없는 영역 · 요소**

| 화면 · 영역 · 요소 | 근거로 삼는 것 |
| --- | --- |
| Interface Configuration (TI-STN-04-01-T) 화면 제목 아래 안내 문구 | 기존 UX 화면설계서만 근거 |
| Code Mapping (TI-STN-04-02-T) 1 Code Type 정렬 · 1-1 항목 수 표시 · 2-1 검색 영역 · 3 depth 구조 배치 | 기존 UX 화면설계서만 근거 |

**대조**

| 요건 · 화면 · 요소 | 결과 | 근거 | 다음 |
| --- | --- | --- | --- |
| 요건 1 · TI-STN-04-01-T 1 · 2 · 3-3 · 4 · LIS Network | 정책에 있음 | POL-SYS-001 규칙 2 · 3 · 5 · 6 | 디스크립션 끝에 정책 ID |
| 요건 1 · TI-STN-04-01-T 0 "Default: All / 데이터: All, Error, Warning" | 기존 화면이 정책과 다름 (LIS Setting에 없는 값) | 반영 대기 TI-STN-04-01-T-R01 | C1 |
| 요건 1 · TI-STN-04-01-T 3 기본 상태 화면 (Push Mode 선택) | 기존 화면이 정책과 다름 | POL-SYS-001 규칙 4 · 5, 반영 대기 TI-STN-04-01-T-R03 | C2 |
| 요건 1 · TI-STN-04-01-T · TI-STN-04-02-T 0 (CURECA마다 설정) | 기존 화면이 정책과 다름 (정책 내용이 디스크립션에 없음) | POL-SYS-001 규칙 7, POL-SYS-002 규칙 6, POL-COM-005 규칙 5, 반영 대기 TI-STN-04-01-T-R04 | C3 |
| 요건 1 · TI-STN-04-02-T 0 데이터 관련 정의 (Assay Pack 데이터 키 이름) | 기존 화면이 정책과 다름 (헌법 3조) | POL-SYS-002 정의 · 규칙 1, 반영 대기 TI-STN-04-02-T-R03 | C4 |
| 요건 1 · TI-STN-04-02-T 4 Done · Enter "입력값 저장 처리" | 기존 화면이 정책과 다름 | POL-SYS-002 규칙 5, 반영 대기 TI-STN-04-02-T-R02 | C5 |
| 요건 1 · TI-STN-04-02-T Sample Type Name `Raw_stool` · `eNAT_stool` · `Fecal_swab` | 기존 화면이 정책과 다름 | `glossary/sample-types.csv` UI 표기, POL-SYS-002 규칙 2, 반영 대기 TI-STN-04-02-T-R01 | C6 |
| 요건 1 · TI-STN-04-02-T Target Code 항목 수 `10` (Products 목록은 9개) | 기존 화면이 정책과 다름 | `glossary/test-items.csv` Target Masking 가능 Y 9종, POL-TST-010 규칙 4 | C7 |
| C8 | 디스크립션 번호 `4`가 두 번 (T-IOS Network · LIS Network), LIS Network에 화면 번호 표시 없음 | 뒤의 LIS Network를 끝 번호 다음 `6`으로, 화면에 번호 표시 6을 둠 (flow/3-design-case3.md 번호) | | TI-STN-04-01-T 6 | 기존 원본 번호 겹침 (뒤 단계용 확인 항목 6) | - (T-IOS 단독) | - | |
| C9 | 화면 제목 아래 안내 문구가 디스크립션에 없음 | 0에 "화면 상단에 Interface Configuration 제목과 안내 문구 노출"을 더함 | | TI-STN-04-01-T 0 | 기존 화면에 보이는 것 (뒤 단계용 확인 항목 5) | - (T-IOS 단독) | - | 맞음 (기존 화면, 2026-11-27) |
| C10 | 4에 "'Push'를 선택" · "Query를 선택" | `Push Mode` · `Query Mode`로 (화면 값과 맞춤) | | TI-STN-04-01-T 4 | 표기 정리 (뒤 단계용 확인 항목 7) | - (T-IOS 단독) | - | 맞음 (오타, 2026-11-27) |
| C11 | 3-2 · 4의 영역 이름 "T-IOS Network (Order Reception Mode: Push Mode Only)" | 화면 글자 "T-IOS Network (Push Mode Only)"로 | | TI-STN-04-01-T 3-2 · 4 | 표기 정리 (뒤 단계용 확인 항목 8) | - (T-IOS 단독) | - | 맞음 (오타, 2026-11-27) |
| C12 | 2-1 검색 대상 "System Code 또는 LIS Code" | "Sample Type Name 또는 LIS Sample Type Code"로 (화면 검색창 안내 글 `Search by sample type or LIS code`와 맞춤) | | TI-STN-04-02-T 2-1 | 기존 화면 글자 (뒤 단계용 확인 항목 9) | - (T-IOS 단독) | - | |
| C13 | 2-2 제목 `System code` | `System Code` | | TI-STN-04-02-T 2-2 | 표기 (뒤 단계용 확인 항목 10) | - (T-IOS 단독) | - | 맞음 (오타, 2026-11-27) |
| C14 | 탭(Interface Configuration · Code Mapping)에 번호 · 디스크립션 없음, 모양은 Box Tabs | 탭 영역 번호 (TI-STN-04-01-T `7` · TI-STN-04-02-T `6`)와 디스크립션을 더하고 Common UX Underline Tab으로 그림 | | TI-STN-04-01-T 7 · TI-STN-04-02-T 6 | Common UX COMM-5-s Underline Tab | - (T-IOS 단독) | O | |
| C15 | Code Type 목록이 버튼 모양(항목 이름 + 개수 원) | Common UX Outline Tab(Count)으로 그림 | | TI-STN-04-02-T 1 · 1-1 · 케이스 Case 1 · 2 · 3 | Common UX COMM-5-s Outline Tab | - (T-IOS 단독) | O | |
| C16 | 2에 컬럼 항목 설명 없음 | 2에 "컬럼 항목"(No. · 항목 이름 · LIS Code)을 더함 | | TI-STN-04-02-T 2 | 기존 화면에 보이는 것 (reference-rules/description.md 3절 표) | - (T-IOS 단독) | - | 맞음 (기존 화면, 2026-11-27) |
| 요건 1 · TI-STN-04-02-T Test Code 30종 · GI-B1 Target 7개 | 정책에 있음 | `glossary/test-items.csv` | 그대로 그림 |
| 요건 1 · TI-STN-04-02-T Test Code의 LIS Test Code 예시 (`Allplex_HPV_HR` 등) | 정책에 없음 (처음 채워지는 CURECA 값이 무엇인지 없음) | POL-SYS-002 규칙 3, `glossary/test-items.csv` 코드 | Q4 |
| Q5 | 검색 결과가 없을 때 목록에 보여 줄 문구 (Common UX Basic Table No Data는 문구를 화면에 맡김, 기존 화면 · 정책서 · 같은 메뉴에 없음) | TI-STN-04-02-T 2-1 | | - (T-IOS 단독) | |
| Q6 | [4-2] 확정한 항목을 강조하는 표시 (기존 디스크립션 "색상으로 구분", 색 · 모양 정의 없음) | TI-STN-04-02-T 4 | | - (T-IOS 단독) | |
| Q7 | 목록의 노출 개수 · Pagination 적용 (Common UX Basic Table은 10 items · 노출 개수 Dropdown · Pagination, 기존 화면은 전체 노출이라 기존대로 그림) | TI-STN-04-02-T 2 · 케이스 Case 1 · 2 | | - (T-IOS 단독) | |
| 요건 1 · 두 화면 5 [Save] · 저장하지 않고 이동 | 정책에 있음 | Confirm_010 · Alert_017 · Confirm_016 | 디스크립션 끝에 코드 |
| 요건 1 · 두 화면 0 User Type | 표에 줄 없음 | POL-SYS-001 규칙 8 (Service · Admin), `policy/permission-matrix.csv`에 LIS Setting 줄 없음 | Q1 |

**정책 수정 범위**

없음 (대조에서 "더함" · "바꿈"이 된 정책 없음. 정책에 없는 입력 검사는 화면에서 물을 것으로 질문 대기 Q2 · Q3)

**용어 목록**

| 원래 표현 | 표준어 | 어디서 | 새 용어면 처리 | 찾은 때 (2단계 / 3단계) |
| --- | --- | --- | --- | --- |
| Text Field · 텍스트 필드 | Text Input | TI-STN-04-01-T 3-2 · 4 · 4 (LIS Network) | | 2단계 |
| 기본값 | Default | TI-STN-04-01-T 3-2 · 4 (LIS Network) · TI-STN-04-02-T 2 | | 2단계 |
| TIOS (GNB) | T-IOS | TI-STN-04-01-T · TI-STN-04-02-T 화면 글자 GNB (공통 영역이라 3단계에서 Common UX GNB대로 그림) | | 2단계 |

## 설계
<!-- 3단계. 틀은 flow/3-design.md "남는 것". 질문 대기 · 변경 확인은 이 절이 아니라 아래 표에 적음 -->

### 화면별 작업
| T · L 한 쌍 | 따른 케이스 | 요건 번호 | 섹션 | 기획 프레임 | 상태 · 케이스 프레임 |
| --- | --- | --- | --- | --- | --- |
| Interface Configuration (TI-STN-04-01-T / L 없음) | 3 | 1 | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3893-18 | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3893-19 | 케이스 T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3896-359 (마무리 확인 2026-11-27) |
| Code Mapping (TI-STN-04-02-T / L 없음) | 3 | 1 | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3893-20 | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3893-21 | 케이스 T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3911-1145 (마무리 확인 2026-11-27) |

- 메뉴 단위 표시 (2026-11-27, Claude): T-IOS 줄 시스템 구분 `T-IOS - 2.1` · 기획 진행 표시 `SB-Update : 2026.10.15 (검토 완료)` — asis 페이지의 기획 진행 표시(`컨펌 완료`)를 날짜 그대로, 진행 상태는 새 이름으로 옮김. 너비 8000 (섹션 줄 너비 5774 < 최소 8000). LIS Setting은 IA에 L-IOS 화면이 없어 L-IOS 줄은 두지 않음

### 컴포넌트 없이 그린 요소
| 요소 이름 (종류) | 하는 일 | 쓴 곳 (CID · 디스크립션 번호) | 어디서 (후보 ID / 신규로 만듦 / 기존 화면에서 따옴) | 원본 요약 (기존 화면에서 따옴만: 크기 · 모서리 · 줄 × 칸 · 도형 · 글자 · 인스턴스) | Figma 링크 |
| --- | --- | --- | --- | --- | --- |
| 콘텐츠 영역 바탕 (영역 틀) | 화면 콘텐츠 바탕 | TI-STN-04-01-T 0 | 기존 화면에서 따옴 (`3543:568741`) | 1701×983 · 모서리 0 · 도형 1 (#E9EDF4) · 글자 0 · 인스턴스 0 | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3893-19 |
| 화면 제목 (글) | LIS Setting 제목 | TI-STN-04-01-T 0 | 기존 화면에서 따옴 (`3543:568742`) | 글 1 (24, #000000) | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3893-19 |
| Interface Configuration 카드 (설정 영역 틀) | General · T-IOS Network · LIS Network 묶음 | TI-STN-04-01-T 1 ~ 4 · 6 | 기존 화면에서 따옴 (`3543:568744`). 안의 입력 칸은 Common UX Dropdown · Text Input으로 바꿈, 원본 안의 패널(Frame 1) · 번호 표시는 뺌 | 1658×639 · 모서리 0 · 바탕 #FFFFFF · 머리 틀 1 (1658×64, 글 2) · 글 10 (라벨 · 영역 제목) · 인스턴스 5 (Form/Dropdown Box 2 · Form/Input Text Box 3) | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3893-19 |
| HL7 (값 글) | Interface Type 고정 값 | TI-STN-04-01-T 1 | 기존 화면에서 따옴 (`3543:568821`) | 글 1 | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3893-19 |
| 케이스 초록 띠 · 라벨 글 (케이스 조각) | 케이스 제목 · 조각 라벨 | TI-STN-04-01-T/Case | 기존 화면에서 따옴 (`3543:568822` 피드백, 조각 글 7 · 번호 표시 3) | 1920×60 #C3F286 (케이스 프레임 너비 2252로 늘림) · 글 1 / 조각 글 7 · 번호 표시 3 (3-1 · 3-1 · 3-2) | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3896-359 |
| 콘텐츠 영역 바탕 · 화면 제목 (영역 틀 · 글) | 화면 콘텐츠 바탕 · LIS Setting 제목 | TI-STN-04-02-T 0 | 기존 화면에서 따옴 (`3543:567517` · `3543:567518`) | 1701×1136 · 모서리 0 · 도형 1 (#E9EDF4) / 글 1 (24) | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3893-21 |
| Code Mapping 영역 틀 (영역 틀) | Code Type 좌측 · 우측 영역 묶음 (제목 · Items 글 · 하단 고정 영역 포함) | TI-STN-04-02-T 1 ~ 5, 케이스 Case 1 ~ 3 | 기존 화면에서 따옴 (`3543:568046` · 케이스 `3543:568320` · `3543:567542` · `3543:568577`). 안의 Code Type 버튼은 Outline Tab, 검색은 Text Input, 목록은 Table/Header Cell · Table/Cell, [Edit]는 Text Button Basic(Interface/Pencil_Outlined), 편집 칸은 Text Input/Inline · Square · Interface/Close, Save는 Square로 바꿈 | 1610×967 (케이스 1610×790) · 모서리 8 · 바탕 #FFFFFF · Sidebar 286 (#FBFCFE) + Container 1322 · 글 (제목 · Items) · 인스턴스: 원본 표는 프레임 · 글로 그린 것(인스턴스 없음) | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3893-21 |
| Products 목록 (목록, 맞는 Variant 없음 — Outline Tab에 둘째 줄 "n targets"를 담을 수 없음) | Target을 쓰는 검사 항목 고르기 | TI-STN-04-02-T 케이스 Case 1 · 3 (3) | 기존 화면에서 따옴 (`3543:568320` · `3543:568577` 안). Tab/Outline(Arrow)로 바꿀 여지: 항목 이름 · 화살표 | 9개 항목 · 항목마다 글 2 (이름 · n targets) · 화살표 1 · 선택 항목 바탕 #EEF6FF | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3911-1145 |
| 케이스 초록 띠 (케이스 조각) | 케이스 제목 | TI-STN-04-02-T/Case | 기존 화면에서 따옴 (`3543:567524` · `3543:567522` · `3543:567526` 피드백) | 1920×60 #C3F286 · 글 1 (케이스 프레임 너비 2252로 늘림) | T https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3911-1145 |

### 근거로 풀린 것
| 질문 | 푼 근거 |
| --- | --- |
| 기존 원본 필터 케이스가 Test Code 목록과 겹쳐 그려짐 (뒤 단계용 확인 항목 11) | Figma 원본에서 필터 케이스가 따로 그려져 있음 (`3543:568577`) |

### 찾은 것
- 원본 케이스 프레임 제목에 번호가 없음(`Case.`) → `Case 1`로 적음. 원본 케이스에 노란 띠 · 설명 글이 없음 → 조건만 노란 띠로 두고 설명 글은 두지 않음 (TI-STN-04-01-T, Event History 작업과 같은 법)
- TI-STN-04-01-T 원본 케이스 조각의 번호 표시 3-1 · 3-1 · 3-2를 그대로 둠 (디스크립션에 3-1 블록 없음 — 빈 번호는 그대로)
- 원본 LIS Network에 화면 번호 표시가 없음 → 새 번호 6을 왼쪽 위에 둠 (C8)
- 규칙에 없어 판단한 곳: 탭은 같은 화면 안 콘텐츠 영역 전환이라 Underline Tab, Code Type 목록은 세로 나열 · 항목 건수라 Outline Tab (COMM-5-s 가르는 법)
- 사용자 확인 라벨: TI-STN-04-01-T 3 · 4 · 6은 오른쪽 · 왼쪽(LNB)이 글자를 가려 번호 표시 위에 둠. 7은 네 방향 모두 글자를 가려 오른쪽에 둠
- 컴포넌트 채우기(플러그인) J102가 「실패」(플러그인 오류: Figma 연결 10초 초과) → TI-STN-04-01-T 패널 · 라벨은 use_figma로 직접 그림. 사용자 확인 목록은 Block 여러 개를 만들 수 없어 use_figma로 그림
- LNB의 Setting 하위 메뉴는 Common UX LNB(Item 5개)에 기존 화면의 하위 메뉴 이름을 넣고 LIS Setting을 선택함
- TI-STN-04-02-T 업데이트 메모: asis 페이지 메모 2개(`v2.1.11 update` · `v2.1.12 update`)를 그대로 옮김. TI-STN-04-01-T는 원본에 메모 없음
- TI-STN-04-02-T Case 2 Test Code 목록은 원본처럼 30행을 넣고 조각 높이(790)에서 잘려 보임(원본과 같음). 화면 MD 화면 예시 글자 "기존 원본 11행 그대로"는 보이는 행 수를 적은 것
- 사용자 확인 라벨: TI-STN-04-02-T 2는 오른쪽이 제목을 가려 왼쪽, 2-1은 위, 1 · 4 · 6은 네 방향 모두 글자를 가려 오른쪽. 케이스 Case 1의 3 옆에 C7
- 반영 대기 TI-STN-04-01-T-R01(`지움`) · R04(넣을 문장이 적혀 있음)는 바꿀 값이 그대로 적힌 항목이라 C1 · C3을 라벨 · 목록 없이 기계 검사로 확인함 (description.md 5절 표)
## 질문 대기
<!-- 사용자 확인 목록의 질문 대기. 원본은 이 표(화면 MD에는 두지 않음). 2단계(대조에서 나온 것) · 3단계(설계하며 나온 것)가 앞의 다섯 칸으로 줄을 만들고, 4단계가 "풀린 날 · 어떻게"를 채움. 번호 Q1 · Q2 …는 작업 하나에 통번호(2단계부터 이어 매김, T · L에 같은 것은 같은 번호)이고, 사용자 확인 라벨 · Figma 사용자 확인 목록에 같은 번호를 씀. "질문"은 요청자가 정할 것을 명사형으로, 근거는 괄호로(reference-rules/description.md 5절). 정책을 정해야 하는 질문은 논의 대상 ID를 적음. 줄은 지우지 않음 -->

| 번호 (Q) | 질문 | 관련된 곳 (CID · 디스크립션 번호) | 논의 대상 | T · L 같음 | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- | --- |
| Q1 | LIS Setting을 쓸 수 있는 User Type (권한 표 `policy/permission-matrix.csv`에 LIS Setting 줄 없음. POL-SYS-001 규칙 8 · 기존 화면은 Service · Admin) | TI-STN-04-01-T 0 · TI-STN-04-02-T 0 | | - (T-IOS 단독) | 2026-11-27 · 요청자 답 "Service, Admin" — 디스크립션 0이 이미 Service, Admin이라 화면 변경 없음. Figma 사용자 확인 목록 Q1 항목 지움 (라벨 없음). 권한 표는 5단계에서 맞춤 |
| Q2 | Port · Host Address(IP) 입력값의 형식 · 범위 검사와 빈 값으로 [Save]를 누를 때의 동작 (POL-SYS-001에 없음) | TI-STN-04-01-T 3-2 · 4 · 4 (LIS Network) · 5 | | - (T-IOS 단독) || 2026-11-27 · 요청자 답: Text Input 그대로, 필수값으로 두지 않고 형식 · 범위 검사 정책도 두지 않음(테스트하며 확인) → C17 |
| Q3 | LIS Code를 빈 값 · 다른 항목과 같은 값으로 입력할 때의 동작 (POL-SYS-002에 없음) | TI-STN-04-02-T 4 | | - (T-IOS 단독) || 2026-11-27 · 요청자 답: 빈 값으로 확정하면 Default 값으로 바뀌어 저장, 다른 항목과 같은 값은 쓸 수 없고 Alert(이미 사용 중)로 안내 → C18 (Alert_048 새로 더함). 이 화면 안의 결정이라 논의 대상은 만들지 않음 (discussions.md 4절) |
| Q4 | 처음 설치할 때 채워지는 LIS Test Code 값 (기존 화면 `Allplex_HPV_HR`은 `glossary/test-items.csv`에서 쓰지 않는 표현, 검사 항목 코드는 `HPVHR-HP72/73`. POL-SYS-002 규칙 3) | TI-STN-04-02-T 케이스 Test Code 화면 | | - (T-IOS 단독) || 2026-11-27 · 요청자 답: 기존 화면 값 그대로 → 같은 날 C6 답에서 바꿈: LIS Test Code도 LIS Sample Type Code처럼 코드(`glossary/test-items.csv` 검사 항목 코드)로 → C22 |
| Q5 | 검색 결과가 없을 때 목록에 보여 줄 문구 (Common UX Basic Table No Data는 문구를 화면에 맡김, 기존 화면 · 정책서 · 같은 메뉴에 없음) | TI-STN-04-02-T 2-1 | | - (T-IOS 단독) || 2026-11-27 · 요청자 답: 다른 화면과 같은 공통 문구 No results found. (LID-STN-015) → C19 |
| Q6 | [4-2] 확정한 항목을 강조하는 표시 (기존 디스크립션 "색상으로 구분", 색 · 모양 정의 없음) | TI-STN-04-02-T 4 | | - (T-IOS 단독) || 2026-11-27 · 요청자 답: 색은 UI에서 정함, 디스크립션에는 색으로 강조된다고만 → C20 |
| Q7 | 목록의 노출 개수 · Pagination 적용 (Common UX Basic Table은 10 items · 노출 개수 Dropdown · Pagination, 기존 화면은 전체 노출이라 기존대로 그림) | TI-STN-04-02-T 2 · 케이스 Case 1 · 2 | | - (T-IOS 단독) || 2026-11-27 · 요청자 답: Pagination 없이 전체 노출 (항목 최대 약 50개, 검색 있음) — 지금 그린 대로 → C21 (디스크립션만) |

## 변경 확인
<!-- 사용자 확인 목록의 변경 확인이자 이 작업으로 화면에서 바뀐 요소의 목록. 원본은 이 표(화면 MD에는 두지 않음). 틀 설명은 reference-rules/work-log.md "틀"의 "변경 확인" 주석 -->

| 번호 (C) | 기존 화면 | 바꿔 그린 것 | 화면 표기 글자 (기존 → 새) | 관련된 곳 (CID · 디스크립션 번호) | 근거 | T · L 같음 | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C1 | 0에 "Default: All / 데이터: All, Error, Warning" | 그 줄을 빨간 취소선으로 (LIS Setting에 없는 값) | | TI-STN-04-01-T 0 | 반영 대기 TI-STN-04-01-T-R01 | - (T-IOS 단독) | - | 바꿈 (2026-11-27, 요청자: 잘못 들어간 줄이라 취소선 없이 지움) |
| C2 | 기본 상태 화면이 Order Reception Mode `Push Mode`, Port `20200` | 기본 상태 화면을 `Query Mode`, Port 비활성 · 빈 값으로 (POL-SYS-001 규칙 4 · 5) | Push Mode → Query Mode (예시 값) | TI-STN-04-01-T 3 · 3-2 · 4 | POL-SYS-001 규칙 4 · 5, 반영 대기 TI-STN-04-01-T-R03 | - (T-IOS 단독) | O | 맞음 (2026-11-27, Port는 Push Mode에서만 활성) |
| C3 | 설정이 CURECA마다인지 디스크립션에 없음 | 0에 "상단에서 고른 CURECA의 설정을 보여 주고 바꿈"을 더함 | | TI-STN-04-01-T 0 · TI-STN-04-02-T 0 | POL-SYS-001 규칙 7, POL-SYS-002 규칙 6, POL-COM-005 규칙 5, 반영 대기 TI-STN-04-01-T-R04 | - (T-IOS 단독) | O | 맞음 (기계 검사, 2026-11-27) |
| C4 | 0 "데이터 관련 정의"에 Assay Pack 데이터 키 이름(fileType, sampleTypeInfo, testItemCode, isTargetNames 등) | Code Type마다 관리 항목 · 출처를 풀어 쓰고 POL-SYS-002 참고로 이음 (헌법 3조) | | TI-STN-04-02-T 0 | POL-SYS-002 정의 · 규칙 1, 반영 대기 TI-STN-04-02-T-R03 | - (T-IOS 단독) | - | 바꿈 (2026-11-27, 요청자: Assay Pack 문서를 확인해 정확한 파라미터로 → C23) |
| C5 | 4 Done · Enter · 다른 영역 클릭 시 "입력값 저장 처리" | 행 입력 확정(edit 모드 종료)으로 쓰고, 저장은 5 [Save]로만 된다고 구분 (POL-SYS-002 규칙 5) | | TI-STN-04-02-T 4 · 5 | POL-SYS-002 규칙 5, 반영 대기 TI-STN-04-02-T-R02 | - (T-IOS 단독) | O | 맞음 (2026-11-27) |
| C6 | Sample Type Name `Raw_stool` · `eNAT_stool` · `Fecal_swab` (코드) | UI 표기로 (LIS Sample Type Code 칸은 그대로) | Raw_stool → Raw stool · eNAT_stool → eNAT stool · Fecal_swab → Fecal swab | TI-STN-04-02-T 2 | `glossary/sample-types.csv`, POL-SYS-002 규칙 2, 반영 대기 TI-STN-04-02-T-R01 | - (T-IOS 단독) | O | 맞음 (2026-11-27) |
| C7 | Code Type의 Target Code 항목 수 · Products 수 `10` (목록은 9개) | `9`로 (Target Masking 가능 Y 9종) | | TI-STN-04-02-T 1-1 · 케이스 Target Code 화면 | `glossary/test-items.csv`, POL-TST-010 규칙 4 | - (T-IOS 단독) | O || 맞음 (2026-11-27, 예시 데이터 기준 9 — 실제 값은 오는 대로 표기) |
| C8 | 디스크립션 번호 `4`가 두 번 (T-IOS Network · LIS Network), LIS Network에 화면 번호 표시 없음 | 뒤의 LIS Network를 끝 번호 다음 `6`으로, 화면에 번호 표시 6을 둠 (flow/3-design-case3.md 번호) | | TI-STN-04-01-T 6 | 기존 원본 번호 겹침 (뒤 단계용 확인 항목 6) | - (T-IOS 단독) | - || 맞음 (2026-11-27) |
| C9 | 화면 제목 아래 안내 문구가 디스크립션에 없음 | 0에 "화면 상단에 Interface Configuration 제목과 안내 문구 노출"을 더함 | | TI-STN-04-01-T 0 | 기존 화면에 보이는 것 (뒤 단계용 확인 항목 5) | - (T-IOS 단독) | - | 되돌림 (2026-11-27, 검토 질의 2 — 기능 · 데이터가 없는 요소라 설명하지 않음) |
| C10 | 4에 "'Push'를 선택" · "Query를 선택" | `Push Mode` · `Query Mode`로 (화면 값과 맞춤) | | TI-STN-04-01-T 4 | 표기 정리 (뒤 단계용 확인 항목 7) | - (T-IOS 단독) | - | 맞음 (오타, 2026-11-27) |
| C11 | 3-2 · 4의 영역 이름 "T-IOS Network (Order Reception Mode: Push Mode Only)" | 화면 글자 "T-IOS Network (Push Mode Only)"로 | | TI-STN-04-01-T 3-2 · 4 | 표기 정리 (뒤 단계용 확인 항목 8) | - (T-IOS 단독) | - | 맞음 (오타, 2026-11-27) |
| C12 | 2-1 검색 대상 "System Code 또는 LIS Code" | "Sample Type Name 또는 LIS Sample Type Code"로 (화면 검색창 안내 글 `Search by sample type or LIS code`와 맞춤) | | TI-STN-04-02-T 2-1 | 기존 화면 글자 (뒤 단계용 확인 항목 9) | - (T-IOS 단독) | - || 맞음 (2026-11-27) |
| C13 | 2-2 제목 `System code` | `System Code` | | TI-STN-04-02-T 2-2 | 표기 (뒤 단계용 확인 항목 10) | - (T-IOS 단독) | - | 맞음 (오타, 2026-11-27) |
| C14 | 탭(Interface Configuration · Code Mapping)에 번호 · 디스크립션 없음, 모양은 Box Tabs | 탭 영역 번호 (TI-STN-04-01-T `7` · TI-STN-04-02-T `6`)와 디스크립션을 더하고 Common UX Underline Tab으로 그림 | | TI-STN-04-01-T 7 · TI-STN-04-02-T 6 | Common UX COMM-5-s Underline Tab | - (T-IOS 단독) | O || 맞음 (2026-11-27) · 탭 번호 · 디스크립션은 검토 질의 4로 지움 → C26 |
| C15 | Code Type 목록이 버튼 모양(항목 이름 + 개수 원) | Common UX Outline Tab(Count)으로 그림 | | TI-STN-04-02-T 1 · 1-1 · 케이스 Case 1 · 2 · 3 | Common UX COMM-5-s Outline Tab | - (T-IOS 단독) | O || 맞음 (2026-11-27) |
| C16 | 2에 컬럼 항목 설명 없음 | 2에 "컬럼 항목"(No. · 항목 이름 · LIS Code)을 더함 | | TI-STN-04-02-T 2 | 기존 화면에 보이는 것 (reference-rules/description.md 3절 표) | - (T-IOS 단독) | - | 맞음 (기존 화면, 2026-11-27) |
| C17 | 4 · 6 Port · Host Address(IP) 입력값 검사 · 필수 여부 없음 | 4 · 6에 「필수값 아님, 입력 형식 · 범위 검사 없음」을 더함 | | TI-STN-04-01-T 4 · 6 | Q2의 답 | - (T-IOS 단독) | O | 맞음 (2026-11-27) |
| C18 | 4 LIS Code를 빈 값 · 같은 값으로 확정할 때 동작 없음 | 4에 「빈 값으로 확정 → Default 값으로 바뀜」 · 「다른 항목과 같은 값 → Alert_048 노출, 확정 안 됨」을 더함 | | TI-STN-04-02-T 4 | Q3의 답 | - (T-IOS 단독) | O | 맞음 (2026-11-27) |
| C19 | 2-1 검색 결과가 없을 때 문구 없음 | 2-1에 「일치하는 항목이 없으면 목록에 No results found. 노출」을 더함 | 없음 → No results found. | TI-STN-04-02-T 2-1 | Q5의 답 | - (T-IOS 단독) | O | 맞음 (2026-11-27) |
| C20 | 4 [4-2] 「색상으로 구분」 | 「색으로 강조 (색은 UI에서 정함)」으로 | | TI-STN-04-02-T 4 | Q6의 답 | - (T-IOS 단독) | - | 맞음 (2026-11-27) |
| C21 | 2 노출 개수 · Pagination 설명 없음 | 2에 「목록 전체 노출 (Pagination 없음)」을 더함 | | TI-STN-04-02-T 2 | Q7의 답 | - (T-IOS 단독) | - | 맞음 (2026-11-27) |
| C22 | 케이스 Case 2 LIS Test Code 예시 값이 검사 항목 이름 (Allplex HPV HR만 `Allplex_HPV_HR`) | LIS Test Code를 `glossary/test-items.csv` 검사 항목 코드로 | Allplex_HPV_HR → HPVHR-HP72/73 · Anyplex II HPV HR → HPV_HR · H.ClariR → H_ClariR · M.AziR → M_AziR · M.MoxiR → M_MoxiR · BV plus → BV_plus (예시 값) | TI-STN-04-02-T 케이스 Case 2 | Q4의 답 (C6 답에서 바꿈) | - (T-IOS 단독) | O | 맞음 (2026-11-27) |
| C23 | 0 데이터 관련 정의를 풀어 쓴 문장 (C4) | 씨젠 Assay Pack 명세 R06의 파일 · 파라미터 이름으로 다시 씀: Master 파일 검체 타입 목록(sampleTypeId · sampleTypeName · sampleTypeCode), PCR 파일 testItemCode · testItemName, isTestTargetSelectable · testTargetNames | | TI-STN-04-02-T 0 | 요청자 답 (C4, 2026-11-27) · \eference/customer/assay-pack/README.md\ | - (T-IOS 단독) | - | 맞음 (2026-11-27) |
| C24 | 0 「T-IOS 상단에서 고른 CURECA의 … 보여 주고 바꿈」 (C3) | 「CURECA가 여러 대 설치된 경우, Top Navigation에서 선택한 CURECA의 설정 화면」으로 (한 대면 해당 없음) | | TI-STN-04-01-T 0 · TI-STN-04-02-T 0 | 검토 질의 1 | - (T-IOS 단독) | - | 맞음 (2026-11-27) |
| C25 | 4 「Port Text Input 내 입력값」 | 「Port 영역의 Text Input 입력값」처럼 영역과 요소를 나눠 씀 | | TI-STN-04-01-T 4 | 검토 질의 3 | - (T-IOS 단독) | - | 맞음 (2026-11-27) |
| C26 | 탭 영역 번호 · 디스크립션 (TI-STN-04-01-T 7 · TI-STN-04-02-T 6, C14에서 더함) | 번호 표시와 디스크립션 블록을 지움 (Common UX에 정리된 공통 요소, 탭 모양은 Underline Tab 그대로) | | TI-STN-04-01-T 7 · TI-STN-04-02-T 6 | 검토 질의 4 | - (T-IOS 단독) | - | 맞음 (2026-11-27) |
| C27 | 화면 영역 제목 아래 안내 문구 `Configure LIS interface settings for order and result transmission.` | 안내 문구를 화면에서 지움 (언어셋 DB LID-STN-196 「삭제」 — 디자인에 안내 문구 없음 — 와 맞춤) | Configure LIS interface settings for order and result transmission. → 없음 | TI-STN-04-01-T 화면 영역 (번호 없음) · 케이스 | 검토 질의 6 | - (T-IOS 단독) | O | 맞음 (2026-11-27) |
| C28 | 6 LIS Network 입력 안내 글 `IP Address` · `Port` | 언어셋 DB(디자인) 글자로 (LID-STN-208 · 269) | IP Address → Enter IP Address · Port → Enter Port | TI-STN-04-01-T 6 | 검토 질의 7 | - (T-IOS 단독) | O | 맞음 (2026-11-27) |
| C29 | 검색 입력 안내 글 `Search by sample type or LIS code` · `Search product name` · `Search target or LIS code` · `Search by product or LIS code` | 언어셋 DB(디자인) 글자로 (LID-STN-271 · 275 · 276 · 272) | Search by sample type or LIS code → Sample type or LIS code · Search product name → Product name or code · Search target or LIS code → Target or LIS code · Search by product or LIS code → Test or LIS code | TI-STN-04-02-T 2-1 · 케이스 Case 1 · 2 · 3 | 검토 질의 7 | - (T-IOS 단독) | O | 맞음 (2026-11-27) |
| C30 | Query Mode일 때 T-IOS Network Port 칸이 빈 값 · Disabled (C2) | 값을 지운 칸에 `None`을 보이고 Disabled (언어셋 DB LID-STN-268 · 케이스 Case 1-2와 맞춤. 값은 정책대로 지워짐) | 없음 → None | TI-STN-04-01-T 4 · 화면 4 | 검토 질의 8 | - (T-IOS 단독) | O | 맞음 (2026-11-27) |

## 검토 질의
<!-- 4단계 절차 2번. 틀은 flow/4-revise-verify.md "검토 질의 틀" -->

| 번호 | 받은 날 | 출처 (요청자 · 고객 UX 검토 · 고객 UI 검토) | 질의 | 관련된 곳 (CID · 디스크립션 번호) | 처리 | 처리한 날 |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-11-27 | 요청자 (R002, UX 확정 질문의 답) | CURECA 설정 정의를 정확히: 여러 대 설치된 곳이면 Top 네비에서 선택한 장비의 설정 화면 | TI-STN-04-01-T #0 · TI-STN-04-02-T #0 | 고침 (C24) | 2026-11-27 |
| 2 | 2026-11-27 | 요청자 (R002) | 「화면 상단에 Interface Configuration 제목과 안내 문구 노출」은 기능 · 데이터 요소가 아니라 설명하지 않음 | TI-STN-04-01-T #0 | 고침 (C9 되돌림) | 2026-11-27 |
| 3 | 2026-11-27 | 요청자 (R002) | 「Port Text Input 내 입력값」 → Port 영역의 Text Input처럼 나눠 씀 | TI-STN-04-01-T #4 | 고침 (C25) | 2026-11-27 |
| 4 | 2026-11-27 | 요청자 (R002) | 두 화면의 탭 영역(7 · 6)은 Common UX에 정리된 것이라 지움 | TI-STN-04-01-T #7 · TI-STN-04-02-T #6 | 고침 (C26) | 2026-11-27 |
| 5 | 2026-11-27 | 요청자 (R002) | 디스크립션의 빨간 표시와 취소선을 모두 지움 (취소선 글은 지우고 빨간 글은 검은 글로) | TI-STN-04-01-T · TI-STN-04-02-T 디스크립션 전체 | 고침 (표기만, 화면 변경 없음 — reference-rules/description.md 7절 「바뀐 글 표시」와 다르게 요청자 지시대로) | 2026-11-27 |
| 6 | 2026-11-27 | 요청자 (R002, UX 확정 뒤 · 언어셋 확인 요청자 확인 #8의 답) | 화면 영역 안내 문구 `Configure LIS interface settings for order and result transmission.`를 우리 화면에서도 지움 (언어셋 DB에서 삭제된 글자) | TI-STN-04-01-T 화면 영역 | 고침 (C27) | 2026-11-27 |
| 7 | 2026-11-27 | 요청자 (R002, 요청자 확인 #9의 답) | 입력 안내 글(placeholder)은 디자인 · 언어셋 DB 문구와 같아야 함 — 언어셋 DB 글자로 UX 화면도 바꿈 (Enter IP Address 등) | TI-STN-04-01-T #6 · TI-STN-04-02-T #2-1 · 케이스 Case 1 · 2 · 3 | 고침 (C28 · C29) | 2026-11-27 |
| 8 | 2026-11-27 | 요청자 (R002, 요청자 확인 #10의 답) | Query Mode일 때 T-IOS Network Port 칸의 `None`(언어셋 DB)을 유지하고 UX 화면 · 디스크립션에도 반영 | TI-STN-04-01-T #4 | 고침 (C30) — 값을 지우고 비활성화하는 정책(POL-SYS-001 규칙 5)은 그대로라 화면 표기만 바뀜, 논의 대상 만들지 않음 | 2026-11-27 |

## 언어셋
<!-- 4단계 절차 4번. 틀은 flow/4-revise-verify.md "언어셋 틀" -->

- 기준: 언어셋 DB `language-set/db/setting-lis.md`(CID 칸에 TI-STN-04-01-T · TI-STN-04-02-T가 있는 `사용` 줄). 그 밖의 화면 표기 글자는 기준 줄과 같아 Language ID만 채움(두 화면 MD 「화면 표기 글자」, 2026-11-27). `T-IOS Network (Push Mode Only)`는 DB가 영역 타이틀(LID-STN-204)과 보조 문구(LID-STN-267)로 나눠 둔 것과 같아 두 ID를 적음.
- C6 Sample Type Name · C22 LIS Test Code는 화면 예시 값이라 화면 표기 글자 표에 없어 보지 않음.
- 화면과 DB가 처음부터 다른 글자는 요청자 확인 #8 · #9 답으로 화면을 언어셋 DB에 맞춤(검토 질의 6 · 7, C27 · C28 · C29). Query Mode 때 Port 표시값 None만 #10 답 기다림 `(답 기다림)`.

| 변경 상태 | CID · 출처 | Language ID | English (변경은 변경 전 → 변경 후) | 번역 대상 (O / - 이유) | 언어셋 DB 대조 |
| --- | --- | --- | --- | --- | --- |
| 신규 | TI-STN-04-01-T 화면 3 · 디스크립션 3 (C2, Push Mode → Query Mode 예시 값. Push Mode가 표의 다른 자리에 남아 신규) | LID-STN-265 | Query Mode | O | 있음 |
| 신규 | TI-STN-04-02-T 디스크립션 2-1 (C19) | LID-STN-015 | No results found. | O | 있음 (event-history · setting-protocol 등 메뉴 파일, 법인 검토 완료) |
| 제거 | TI-STN-04-01-T (asis 화면 영역 안내 문구, C27 · 요청자 확인 #8 답으로 화면에서 지움) | LID-STN-196 | Configure LIS interface settings for order and result transmission. | - (제거) | 없음 (LID-STN-196은 이미 `삭제` — 할 일 없음) |
| 신규 | TI-STN-04-01-T 화면 6 (C28, `IP Address` → `Enter IP Address`) | LID-STN-208 | Enter IP Address | O | 있음 |
| 신규 | TI-STN-04-01-T 화면 6 (C28, `Port` → `Enter Port`. `Port`는 표의 다른 자리(라벨)에 남음) | LID-STN-269 | Enter Port | O | 있음 |
| 신규 | TI-STN-04-02-T 화면 2-1 · 케이스 Case 1 · 2 · 3 (C29) | LID-STN-271 · LID-STN-275 · LID-STN-276 · LID-STN-272 | Sample type or LIS code · Product name or code · Target or LIS code · Test or LIS code | O | 있음 |
| DB 맞춤 (제거) (답 기다림) | TI-STN-04-01-T (DB 비고: Query Mode 때 Port 표시값) | LID-STN-268 | None | - (제거) | 있음 |

**새로 넣을 줄** — 없음 (입력 안내 글은 화면을 언어셋 DB 글자로 고쳐(검토 질의 7) 모두 DB에 있음. 남은 `DB 맞춤 (제거) (답 기다림)` None 줄은 요청자 확인 #10 답 기다림)

## 요청자 확인
<!-- 요청자에게 물은 것을 모두 한 줄씩 적음. 틀 설명은 reference-rules/work-log.md "틀"의 "요청자 확인" 주석 -->

| # | 생긴 날 | 단계 · 절차 (질문 번호 또는 `예외`) | 물은 것 | 관련된 곳 (CID · 디스크립션 번호 · Language ID) | 답을 받을 때까지 둔 모습 (예외 질문만) | 답 (날짜) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-11-27 | 1단계 · 절차 5번 질문 6 | 이번 작업 화면의 반영 대기 항목을 묶음 1 · 2마다 반영 / 이번엔 안 함 가운데 고름 | TI-STN-04-01-T · TI-STN-04-02-T 반영 대기 6건 | | 묶음 1 · 2 모두 반영 (2026-11-27, 추천대로 진행) |
| 2 | 2026-11-27 | 1단계 · 절차 5번 질문 7 | 요건 목록(요건 1, 케이스 3, 1 → 5단계)대로 진행하고 2단계로 넘어갈지 | 요건 1 | | 이대로 진행, 2단계로 (2026-11-27) |
| 3 | 2026-11-27 | 4단계 · 절차 3 (UX 확정) | 사용자 확인 목록과 질의가 모두 풀림, 최종으로 UX 확정을 할지 | TI-STN-04-01-T · TI-STN-04-02-T | | 확정 전에 고칠 것을 줌 → 검토 질의 1 ~ 5 (2026-11-27) |
| 4 | 2026-11-27 | 4단계 · 절차 3 (UX 확정) | 검토 질의 1 ~ 5를 고친 뒤 최종으로 UX 확정을 할지 | TI-STN-04-01-T · TI-STN-04-02-T | | 확정함 (2026-11-27) |
| 5 | 2026-11-27 | 4단계 · 절차 3 순서 2 | 기계 검사를 한 번 더 검토할지 (절차 1 검사 뒤 검토 질의 1 ~ 5로 두 화면을 고침) | TI-STN-04-01-T · TI-STN-04-02-T | | 하지 않음 (2026-11-27) |
| 6 | 2026-11-27 | 4단계 · 절차 3 순서 3 | 요건 1의 UI 작업 줄 (추천 `대상`: C14 · C15 요소 모양, C6 · C19 · C2 · C22 화면 표기 글자. Ver은 케이스 3이라 묻지 않음) | 요건 1 · TI-STN-04-01-T · TI-STN-04-02-T | | 더 설명을 요청함 (2026-11-27) → #7 |
| 7 | 2026-11-27 | 4단계 · 절차 3 순서 3 | #6을 설명과 함께 다시 물음 (UI 작업 줄의 뜻 · 대상 / 대상 아님일 때 이어지는 일, 케이스 3은 바뀐 화면 표기 글자 줄만 넘김, 탭 모양 C14 · C15는 디자인 화면을 읽지 않아 이미 같은지 모름) | 요건 1 · TI-STN-04-01-T · TI-STN-04-02-T | | 대상 아님 — 데이터 값 표기라 UI 대상 아님, 이대로 UI 확정도 진행 (2026-11-27) |
| 8 | 2026-11-27 | 4단계 · 절차 4 (예외) | 화면과 언어셋 DB가 처음부터 다른 글자(안내 문구 · 입력 안내 · Query Mode 때 Port 표시값)를 DB를 화면에 맞출지 / 화면을 DB에 맞출지 (추천 DB를 화면에 맞춤 — 4단계 절차 4 「같은 글자」, LID-STN-196 · 208은 언어셋 담당자가 디자인 기준으로 바꾼 기록이 있어 물음) | TI-STN-04-01-T 화면 영역 안내 문구 · 4 · 6 / TI-STN-04-02-T 2-1 · 케이스 Case 1 · 2 · 3 / LID-STN-196 · 208 · 268 · 269 · 271 · 272 · 275 · 276 | 언어셋 절에 `DB 맞춤 (… ) (답 기다림)`으로 적고 Language ID 비움, 화면 · DB 그대로 | 안내 문구는 우리 화면에서도 지움 → 검토 질의 6 (C27). 나머지(입력 안내 · Port 표시값 · 검색 입력 안내)는 답 없음 → #9 (2026-11-27) |
| 9 | 2026-11-27 | 4단계 · 절차 4 (예외) | #8의 나머지(TI-STN-04-01-T Host Address · Port 입력 안내, Query Mode 때 Port 표시값 None, TI-STN-04-02-T 검색 입력 안내 4개)도 화면을 DB에 맞출지 / DB를 화면에 맞출지 | TI-STN-04-01-T 4 · 6 / TI-STN-04-02-T 2-1 · 케이스 Case 1 · 2 · 3 / LID-STN-208 · 268 · 269 · 271 · 272 · 275 · 276 | 언어셋 절 `(답 기다림)` 줄 그대로, 화면 · DB 그대로 | 입력 안내 글은 언어셋 DB대로 화면을 고침 → 검토 질의 7 (C28 · C29). Query Mode 때 Port 표시값(None)은 입력 안내가 아니라 → #10 (2026-11-27) |
| 10 | 2026-11-27 | 4단계 · 절차 4 (예외) | Query Mode일 때 T-IOS Network Port 칸: 지금처럼 빈 값 · Disabled(POL-SYS-001 규칙 5, C2 맞음)로 두고 DB `None`(LID-STN-268)을 지울지 / DB대로 `None` 표시할지 (추천 빈 값 그대로) | TI-STN-04-01-T 4 · LID-STN-268 | 언어셋 절 `DB 맞춤 (제거) (답 기다림)` 그대로, 화면 그대로 | None 유지, UX에도 반영 → 검토 질의 8 (C30) (2026-11-27) |

## 이 작업의 논의 대상
<!-- 2 · 3 · 4단계가 논의 대상을 만들거나 결정 줄을 더할 때마다 한 줄. 5단계는 `결정`인 줄을 반영함 (아래 "쓰는 법"의 "이 작업의 논의 대상") -->

| 논의 대상 | 상태 (논의 중 / 결정) | 내용 한 줄 | 5단계 반영 |
| --- | --- | --- | --- |

## 이 작업이 남긴 것

- 다른 화면의 반영 대기 항목: (전체 항목 ID)
- 고친 카탈로그 줄: Alert_048 · 새 줄 (`alert/alert-catalog.csv`, Code Mapping 같은 LIS Code 확정, Q3의 답, 2026-11-27)
