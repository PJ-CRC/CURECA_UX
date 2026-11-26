---
status: 멈춤               # 진행 중 | 끝남 | 멈춤
stopped: 2026-11-26 · 최고관리자 · 같은 화면을 새 작업 20261126-최고관리자-assay-pack으로 처음부터 다시 그리기로 함(R003 요청자 답). 반영 대기 TI-STN-08-P-R01 · TI-STN-08-R02는 그 작업으로 옮김
requester: 최고관리자
menu: Setting · Assay Pack Setting (STN)
cids: [TI-STN-08, LI-STN-08, TI-STN-08-P, LI-STN-08-P, TI-STN-08-01]
policies: []               # 정책 문장은 고치지 않음 (정책 수정 범위 1은 Alert 카탈로그만, DS-0012)
cid_system:
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3481-216078 (UX AI TEST 「Setting  Ⓛ / Ⓣ_To Be」 페이지)
test: false
basis_start: 2026-11-25 16:24 · history d1b941be
basis:
basis_versions:
  rules:
  policy:
  glossary:
  screens:
  common_ux:
started: 2026-11-25
---
# 작업 기록: Assay Pack 메뉴를 To Be 페이지로 옮겨 다시 그림

## 단계

| 단계 | 끝낸 날 | 마침 점검 | 남긴 것 |
| --- | --- | --- | --- |
| 1. 시작 · 요건 정의 | 2026-11-25 | 요청자 확인 (2026-11-25) | 겹치는 다른 작업: 없음 |
| 2. 근거 · 분석 | 2026-11-25 | 요청자 확인 (2026-11-25) | 논의 대상 DS-0012 (결정), 질문 대기 Q1 · Q2, 변경 확인 C1 ~ C3 |
| 3. 화면 설계 | 2026-11-25 | 기계 검사 통과 (2026-11-25) | 화면 MD 5 · Figma 섹션 5, 질문 대기 Q1 ~ Q5, 변경 확인 C1 ~ C6 |
| 4. 수정 · 확인 | | | |
| 5. 완료 | | | |

이어서 작업할 곳: 4단계 · 절차 1번 순서 2 사용자 확인 목록(질문 대기 Q1 ~ Q5 · 변경 확인 C1 ~ C6)을 3단계 보고와 함께 보여 줌(2026-11-25, R002 · 19:2x R001에 다시 보여 줌), 답 기다림 → 답을 받으면 절차 1번 순서 3부터 (다시 읽을 곳: 4단계 flow/4-revise-verify.md 절차 1 · "절차 공통: 화면 수정 규칙" / 작업 기록 "질문 대기" · "변경 확인" · "요청자 확인"). 시작 전에 project.json editablePageName이 「Setting  Ⓛ / Ⓣ_To Be」인지 확인

## 요청

- 요청 글: "Assay Pack 메뉴 옮겨줘" + 링크 https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3481-216078 (「Setting  Ⓛ / Ⓣ_To Be」 페이지, 지금 빈 페이지)
- 출처: Workbench 요청 R001 (최고관리자, 2026-11-25 16:21)
- 옮겨 올 기존 화면: 같은 파일 「Setting  Ⓛ / Ⓣ_As Is」 페이지의 Assay Pack Setting 화면(TI-STN-08 · LI-STN-08 · -P · -01)
- 공유 파일 없음

## 요건 목록

### 요건 1. Assay Pack Setting 메뉴를 기존 작업방에서 작업방(To Be 페이지)으로 옮겨 다시 그림
- 요청 상태: 최초
- 경로 분기 기준 (근거) · 읽는 강도: 8 옮겨 다시 그림 (케이스 3) (대상 화면 모두 `screens/tobe/` 화면 MD가 없어 케이스 3) · 케이스 3 (다시 그리기)
- 지나가는 단계: 1 → 2 → 3 → 4 → 5
- UI 작업: 대상 아님 (케이스 3 기본값, 다시 그리며 바뀐 곳이 생기면 4단계 UX 확정 때 다시 정함)

| 대상 화면 | 케이스 | 작업 대상 | 근거 |
| --- | --- | --- | --- |
| Assay Pack Setting (TI-STN-08) | 3 | O | |
| Assay Pack Setting (LI-STN-08) | 3 | O | 짝 화면 · 함께 고침 (요청 글: 메뉴를 옮김, 메뉴 페이지 「Setting Ⓛ / Ⓣ」에 T · L 함께 있음) |
| Assay Pack File Details (TI-STN-08-P) | 3 | O | 같은 메뉴 화면 (요청 글: 메뉴를 옮김, IA Assay Pack Setting > Details) |
| Assay Pack File Details (LI-STN-08-P) | 3 | O | 짝 화면 · 함께 고침 (요청 글: 메뉴를 옮김) |
| Import file 팝업 (TI-STN-08-01, IA에 없음) | 3 | O | TI-STN-08 [Import]가 여는 팝업 · 넣음 (요청자 답, 2026-11-25). IA에는 5단계에 더함 |

### 찾았지만 대상 아님

다른 화면 없음 (화면 MD `screens/`에서 STN-08이 나오는 곳은 이 네 화면 MD뿐. 메뉴를 옮기는 요건이라 같은 글자 · Common UX 번호로 찾을 바뀌는 요소가 없음)

### 영향 화면

없음 (위와 같음. 2단계 정책으로도 없음: POL-TST-008 `cids`는 모두 이 작업 대상, POL-TST-010은 시약 정보 예시 값만 쓰고 바뀌는 값이 없음(경로 분기 기준 8), DS-0012는 Alert 카탈로그 사용 화면 TI-STN-08-P뿐)

작업이 지나가는 단계: 1 → 2 → 3 → 4 → 5

## 읽은 화면

| 화면 (CID) | 읽은 것 (화면 MD / 기획 프레임 / 케이스 프레임 / 호출 화면) | Figma 링크 |
| --- | --- | --- |
| Assay Pack Setting (TI-STN-08) | 화면 MD (다시 옮김 · 바뀐 곳 있음: 디스크립션 3 · 4-1에 [팝업 정의] · [Import 정의] · [정책] 참조와 4 정렬 줄이 원본에 있음, 화면 글자 Items 24, 2.1 2차), 케이스 프레임 없음 | https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7669-175417 |
| Assay Pack Setting (LI-STN-08) | 화면 MD (다시 옮김 · 바뀐 곳 있음: 예전 MD는 요약뿐이라 화면 글자 · 디스크립션 원문 전체를 씀, path 「(L-IOS · 조회 전용)」, 2.1 2차), 케이스 프레임 없음 | https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7669-181039 |
| Assay Pack File Details (TI-STN-08-P) | 화면 MD (다시 옮김 · 바뀐 곳 있음: 원본 패널 화면 「Assay Pack Setting」 · 경로 「… > File details」, 4에 정의 프레임 참조, [Save] 뒤 「& Toast」는 원본에 없어 뺌, 2.1 2차), 케이스 프레임 없음 | https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7669-175713 |
| Assay Pack File Details (LI-STN-08-P) | 화면 MD (다시 옮김 · 바뀐 곳 있음: 예전 MD는 요약뿐이라 원문 전체를 씀, 원본 패널 화면 · 경로 반영, 2.1 2차), 케이스 프레임 없음 | https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7669-181335 |
| Import file 팝업 (TI-STN-08-01) | 화면 MD (새로 옮김 `screens/asis/setting/TI-STN-08-01.md`, 2.1 2차, 요청자 확인 2의 답 뒤), 케이스 프레임 없음. To-Be 빈 틀 `screens/tobe/setting/TI-STN-08-01.md` 만듦 | https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7669-177368 |

- 반영 대기 목록(`pending/open.md`)에서 네 CID의 줄을 읽음 (아래 "대상 화면의 반영 대기 항목")
- 최신 영역: 네 CID 모두 기획 프레임(너비 2252)이 한 곳에만 있음(Setting 페이지 2.1 2차 영역). 1280 프레임 · 기획 프레임 밖 1920 프레임은 열지 않음
- 다시 옮길 때 To-Be 화면 MD 빈 틀 `screens/tobe/setting/{TI-STN-08 · TI-STN-08-P · LI-STN-08 · LI-STN-08-P}.md`를 만듦
- Module · Unit 이름이 나오지 않는 화면이라 `glossary/modules.csv` 대조는 해당 없음

## 뒤 단계용 확인 항목(claude)

| # | 무엇 (절차 4번 순서 3 "뒤 단계로 넘김"의 1 ~ 4) | 관련된 곳 (CID · 디스크립션 번호) | 넘기는 곳 (2단계 / 3단계 질문 대기) | 이어진 번호 (Q · C · 논의 대상 ID / 근거로 풀림) |
| --- | --- | --- | --- | --- |
| 1 | 1. 기능 정의가 안 된 요소: 디스크립션이 정의를 다른 프레임([TI-STN-08 / 세부정의] · [팝업 정의] · [Import 정의] · [정책], [TI/LI-STN-08-P 유형별 정의])으로 넘김. 그 프레임 내용은 화면 MD에 옮기지 않았음 | TI-STN-08 #1-4 · #3 · #4-1, TI-STN-08-P #3 · #4, LI-STN-08 #1-4, LI-STN-08-P #3 | 2단계 (정책 · Alert과 대조) | 근거로 풀림 ([팝업 정의] · [Import 정의] → Alert 카탈로그 Alert_039 ~ 042 · Confirm_026 · 028 · 029 · 030 줄, [정책] → POL-TST-008 규칙 2 ~ 7, [유형별 정의]의 시약 정보 항목 → `reference/customer/assay-pack/README.md` 구조 요약) · Confirm_029 · 030 발생 조건이 정책과 다름 → DS-0012 · [세부정의] 검색 결과 없음 모습은 저장소에 근거 없음 → 3단계로 (Common UX 목록 빈 상태 정의로 그림, 기존 원본 프레임 7811:247618) → 3단계에서 기존 원본 [세부정의] 문구로 디스크립션 4에 옮김 (변경 확인 C4, L-IOS 문구는 Q4) |
| 2 | 1. 기능 정의가 안 된 요소: TI-STN-08 #3 [Delete] 「삭제 & Toast」의 Toast 문구가 없음 (TI-STN-08-P #4에는 「The file has been deleted.」) | TI-STN-08 #3 | 3단계 질문 대기 | 근거로 풀림 (Alert 카탈로그 Confirm_026 버튼 동작 "Toast 노출 (The selected files have been deleted.)"). TI-STN-08-P #4 문구는 C2 |
| 3 | 4. 요청과 기존 화면이 맞지 않는 곳: LI-STN-08 #4 「체크박스 없음」인데 화면에 Check Box/Square 인스턴스 1개가 있음 | LI-STN-08 #4 | 2단계 | 근거로 풀림 (그 1개는 검색 영역 #1-3 「Active only」 체크. 목록 체크박스 없음은 POL-TST-008 규칙 1 "L-IOS는 Main Mode에서 조회만"과 같음) |
| 4 | 4. 요청과 기존 화면이 맞지 않는 곳: Master 파일의 Active 변경 버튼이 TI-STN-08 #4-1은 「상세에 변경 버튼 미노출」, TI-STN-08-P #3은 「[Active] · [Inactive] 버튼 비활성」으로 서로 다름 | TI-STN-08 #4-1 · TI-STN-08-P #3 | 2단계 | Q1 (POL-TST-008 규칙 6은 "바꿀 수 없음"만 정함) |
| 5 | 3. 이번에 넣기로 한 `대기 (확인 필요)` 항목: TI-STN-08-R02 Import file 팝업 IA 추가 | TI-STN-08-01 · TI-STN-08-R02 | 2단계 | 근거로 풀림 (요청자 답 2026-11-25: 넣음, IA는 5단계에 더함) |

## 대상 화면의 반영 대기 항목

| 묶음 (근거) | 화면 (CID) | 항목 ID | 변경 전 | 변경 후 | 반영 / 이번엔 안 함 |
| --- | --- | --- | --- | --- | --- |
| 1 화면 이름 (IA) | Assay Pack File Details (TI-STN-08-P) | TI-STN-08-P-R01 | 화면 이름 "Assay Pack Setting", Ver 0.4.0 | Assay Pack File Details (IA "Details"), 2.1.ZZ 체계 | 반영 (2026-11-25, 화면 이름만. Ver은 케이스 3이라 그대로) |
| 2 무엇으로 바꿀지 아직 정해지지 않은 항목 (`ia/ia-screens.csv`) | Assay Pack Setting (TI-STN-08) | TI-STN-08-R02 | Import file 팝업 TI-STN-08-01이 IA에 없음 | IA에 추가할지 확인 | 반영 (2026-11-25, 요청자 확인 2: 넣음) |

- LI-STN-08-R01(번호 정리) · TI-STN-08-R01(Ver 2.1.ZZ 체계로)은 케이스 3 규칙(빈 번호 · 기존 Ver 그대로)과 부딪혀 `제외 (2026-11-25)`로 바꿔 `pending/closed.md`로 옮김. TI-STN-08-P-R01의 Ver 부분도 같은 까닭으로 반영하지 않음(화면 이름만 해당)

## 근거

2단계 (2026-11-25). 요건 1 · 경로 분기 기준 8 · 강도 "케이스 3 (다시 그리기)". `basis_start` 뒤로 바뀐 정책 · 기준데이터 없음(history d1b941be 뒤 바뀐 것은 이 작업의 `pending/` 줄뿐). 대상 화면에 `basis` 없음.

**읽은 자료 목록**

| 요건 | 종류 | 자료 (ID · 파일) | 연결 근거 (왜 이 요건과 관련 있나) | 설계에 씀 (O / -) | 쓰는 화면 · 요소 | 설계에 쓸 규칙 (번호 · 문장, `-`면 쓰지 않는 이유) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 정책 | POL-TST-008 Assay Pack 관리 | ① 정책 `cids`에 TI-STN-08 · TI-STN-08-P · LI-STN-08 · LI-STN-08-P, ③ 화면 MD "관련 정책" | O | 다섯 화면 전체 (권한 · Import · 덮어쓰기 · Active · Delete) | 규칙 1: "Assay Pack Setting은 User Type이 Service일 때만 쓰며, L-IOS는 Main Mode에서 조회만 함" / 규칙 2: "등록([Import])은 T-IOS에서 JSON 파일로 하며 여러 파일을 한 번에 올릴 수 있음. JSON이 아니면 Alert_041, 양식이 맞지 않으면 Alert_040을 보여 주고 아무것도 등록하지 않음" / 규칙 3: "같은 File type, Product Name, 버전의 파일이 이미 있으면 Confirm_028로 덮어쓸지 물음" / 규칙 4: "등록하면 그 제품의 최신 버전이 자동으로 Active가 되고 Alert_039를 보여 줌" / 규칙 5: "File type과 Product Name이 같은 파일 중 하나만 Active임. 다른 버전을 Active로 바꾸면 기존 버전은 Inactive가 됨" / 규칙 6: "Master는 항상 최신 버전이 Active이며 바꿀 수 없음. Pretreatment, Extraction, PCR은 File details에서 Active·Inactive를 바꾸고 [Save]로 저장함 (Confirm_029, Confirm_030)" / 규칙 7: "Active 파일은 지울 수 없음 (Alert_042). Inactive 파일은 Confirm_026을 거쳐 지우며, Instrument에 적용된 데이터에는 영향이 없음" |
| 1 | 정책 | POL-TST-010 검사 항목과 조합 검사 | ① 정책 `cids`에 TI-STN-08-P (짝 LI-STN-08-P) | O | Assay Pack File Details (TI-STN-08-P · LI-STN-08-P) 시약 정보 예시 값 | 규칙 1: "검사 항목, 검사군, 검사 항목별 사용 가능 검체 타입, 검사 Target은 Assay Pack(Master, PCR 파일)에서 받아 보여 줌. 화면설계서의 예시 값도 이 실제 값(`glossary/test-items.csv`, `glossary/sample-types.csv`)을 씀" / 규칙 4: Target 선택 가능(isTestTargetSelectable)인 검사 항목만 Target 일부 선택 |
| 1 | 정책 | POL-ACC-001 User Type과 권한 | ④ POL-TST-008 규칙 1이 가리킴 | O | 다섯 화면 머리말 `user_type` | 규칙 5: "User Type이 Service일 때만 쓸 수 있는 기능: Tube Setting, Assay Pack Setting, …" |
| 1 | 정책 | POL-TST-005 Extraction Module Usage Setting | ④ POL-TST-010 규칙 5가 가리킴 | - | | (추출 Module 사용 설정이라 Assay Pack 화면에 쓰이지 않음) |
| 1 | 기준 자료 | `policy/permission-matrix.csv` Setting · Assay Pack Setting · All | ④ POL-TST-008 `data`, 케이스 3 0번 User Type 확인 | O | 다섯 화면 `user_type` | Service O · Admin X · User X (2026-10-30 결정, 확정) |
| 1 | 기준 자료 | `policy/client-mode-matrix.csv` Setting · Assay Pack Setting · All | ④ POL-TST-008 `data`, 케이스 3 0번 L-IOS Client Mode 확인 | O | LI-STN-08 · LI-STN-08-P `client_mode` | Main Mode O · Console Mode X · MS Mode X |
| 1 | 기준 자료 | `reference/customer/assay-pack/README.md` (씨젠 Assay Pack 명세 R06) | ④ POL-TST-008 · 010 `data` | O | Assay Pack File Details 시약 정보 항목 (File type별) · 예시 값 | 구조 요약: Master = 파일 정보 · 검사군 목록 · 검체 타입 목록 · 바코드 체계 목록 · 품목 그룹 목록 · PCR 시약 Socket 구성품 목록 / Pretreatment = 파일 정보 · 시약 기본 정보 · 바코드 정보 · 수량 정보 · 저장소 위치 / Extraction = … · 구성품 목록 / PCR = 시약 기본 정보(productName · Code, testItemName · Code, testGroupId · Name, isTestTargetSelectable, testTargetNames) · 검체 타입 매핑 정보 · … / 예시: TEST_GROUP_2 GI, SAMPLE_TYPE_6 ~ 9, Allplex™ GI-Bacteria(I) Assay |
| 1 | 기준데이터 | `glossary/test-items.csv` GI-B1 줄 | ④ POL-TST-010 `data` | O | Assay Pack File Details 예시 값 | GI-B1 · Allplex™ GI-Bacteria(I) Assay · Allplex_GI-B1_Assay · 검사군 GI · Target Masking Y · Target "Sh/EI, Cam, Yer, Vib, CdB, Aer, Sal" (기존 화면 값과 같음) |
| 1 | 기준데이터 | `glossary/sample-types.csv` GI 줄 | ④ POL-TST-010 `data` | O | Assay Pack File Details Sample Type Mapping Info | GI 검체 타입: Raw stool (코드 Raw_stool) · Cary-blair · eNAT stool (eNAT_stool) · Fecal swab (Fecal_swab). 화면의 "Sample Type Code" 칸은 코드 값이라 그대로 (기존 화면 값과 같음) |
| 1 | Alert | Alert_039 Import complete | POL-TST-008 `alerts`, TI-STN-08 #3 · TI-STN-08-01 #3 | O | Import file (TI-STN-08-01) [Import] | "Import complete" / "The files have been imported successfully." [OK] → 닫힘 & 목록 최상단에 Import한 파일, 최신 버전 자동 활성 |
| 1 | Alert | Alert_040 Invalid file format | 같음 | O | TI-STN-08-01 [Import] | "Invalid file format" / "The file does not match the import format. Check the file contents and try again." [OK] → 반영 없음 |
| 1 | Alert | Alert_041 Unsupported file type | 같음 | O | TI-STN-08-01 파일 영역 | "Unsupported file type" / "Only .json files can be imported." [OK] → 반영 없음 |
| 1 | Alert | Alert_042 Active file cannot be deleted | POL-TST-008 `alerts`, TI-STN-08 #3 · TI-STN-08-P #4 | O | TI-STN-08 [Delete] · TI-STN-08-P [Delete] | "Active file cannot be deleted" / "The selection includes an active file. Deactivate it or deselect it and try again." [OK] → 삭제하지 않음, 선택 유지 |
| 1 | Alert | Confirm_026 | 같음 | O | TI-STN-08 [Delete] · TI-STN-08-P [Delete] | "Delete the selected files?" / "Deleted file records cannot be restored." [Delete] → 삭제 & Toast "The selected files have been deleted." / [Cancel] → 닫힘, 선택 유지 |
| 1 | Alert | Confirm_028 Version already exists | POL-TST-008 `alerts`, TI-STN-08-01 #3 | O | TI-STN-08-01 [Import] | "Version already exists" / "Some files have versions that are already registered. Overwrite them?" [Overwrite] → 교체 & 등록 → Alert_039 / [Cancel] → Import 중단, Import file 유지 |
| 1 | Alert | Confirm_029 Activate this version? | POL-TST-008 `alerts`, TI-STN-08-P #4 | O | TI-STN-08-P [Save] (Active로 바꿈) | "Activate this version?" / "The active version ({version}) will be deactivated." [Activate] → 선택 버전 활성 & 기존 활성 버전 비활성 & Toast (문구 없음 → Q2) / [Cancel] → 변경 없음. 발생 조건은 DS-0012 |
| 1 | Alert | Confirm_030 Deactivate this version? | 같음 | O | TI-STN-08-P [Save] (Inactive로 바꿈) | "Deactivate this version?" / "No version of this product will be applied." [Deactivate] → 비활성 & Toast "{version} has been deactivated." / [Cancel] → 변경 없음. 발생 조건은 DS-0012 |
| 1 | Alert | Alert_045 Master version cannot be changed | Confirm_029 버튼 동작이 가리킴 | - | | (Master는 [Active] · [Inactive] 버튼이 비활성이라 뜨는 곳이 없음, 카탈로그 사용 화면도 "없음". DS-0012 제안 1에서 뺌) |
| 1 | Toast | `alert/toast-catalog.csv` | 케이스 3 Toast 문구 줄 | - | | (일반 메뉴 Toast 카탈로그는 아직 없음, `sources.md` "Toast 문구": 케이스 3은 3단계 `flow/3-design-case3.md` 3-2에서 기존 디스크립션 문구로 만듦) |
| 1 | 논의 대상 | DS-0001 (종료) | `policies`에 POL-TST-008 | - | | (Service Mode → L-IOS Client Mode 용어 바꿈, 반영 끝남. Assay Pack Setting 행 Main Mode만 O 유지 — 위 client-mode-matrix와 같음) |
| 1 | 논의 대상 | DS-0008 (종료) | 디스크립션의 "팝업 · 알럿 · 컨펌 · 토스트" 표기 | O | 다섯 화면 디스크립션 | 디스크립션에서는 Popup · Alert · Confirm · Toast (용어집 표준어) — 아래 용어 목록 |
| 1 | 화면 | `ia/ia-screens.csv` STN-08 네 줄 | 케이스 3 권한 · 모드 표 줄 찾기 | O | 다섯 화면 경로 | Setting > Assay Pack Setting (Page), > Details (Popup). TI-STN-08-01은 IA에 없음 (TI-STN-08-R02, 5단계에 더함) |
| 1 | 화면 | 기존 원본 정의 프레임 [TI-STN-08 / 세부정의] `3288:240828` · [TI-STN-08-P 유형별 정의] `3288:237480` (3단계에서 추가) | 기존 디스크립션이 가리킴 | O | TI-STN-08 · LI-STN-08 #4, TI-STN-08-P · LI-STN-08-P #3 | 데이터 없음 문구 「No files found. / Click Import to add a file.」 · 「No results found.」, File type별 정보 묶음 제목 (C4) |
| 1 | Toast | `alert/toast-catalog.csv` (3단계에서 추가, 새로 만듦) | 케이스 3 Toast 코드 (flow/3-design-case3.md 3-2) | O | TI-STN-08 #3 · TI-STN-08-P #4 | Toast_001 · Toast_002 |

- ⑤ 장비: 다섯 화면에 Module 이름이 나오지 않아 Module 문서는 읽지 않음
- 예전 목록(`old-pending/` · `old-provisional/` · `old-customer-agenda/`)에 Assay Pack · STN-08 · POL-TST-008 줄 없음

**관련 자료 없는 영역 · 요소**

| 화면 · 영역 · 요소 | 근거로 삼는 것 |
| --- | --- |
| TI-STN-08 · LI-STN-08 #1 검색 영역 · #2 Items · 노출 개수 · #4 정렬 · #5 Pagination | 기존 UX 화면설계서만 근거 (디스크립션의 Common UX 번호 COMM-5-s · 5-d · 5-m · 5-l · 5-i는 3단계에서 그리며 읽음) |
| TI-STN-08 · LI-STN-08 #1-4 [Search] 결과 없음 ([세부정의]) | 기존 UX 화면설계서만 근거 (기존 원본 프레임 7811:247618, 3단계에서 Common UX 목록 빈 상태와 함께 봄) |
| TI-STN-08-P · LI-STN-08-P 화면 노출 경로 · #2 선택 Row · 패널 위치 · 스크롤 · [닫기] | 기존 UX 화면설계서만 근거 |
| TI-STN-08-01 화면 노출 경로 (Dim · [X] · ESC) · #1 파일 영역 · #2 선택한 파일 목록 | 기존 UX 화면설계서만 근거 (Alert_041 · POL-TST-008 규칙 2는 위 목록) |

**대조**

| 요건 · 화면 · 요소 | 결과 | 근거 | 다음 |
| --- | --- | --- | --- |
| 다섯 화면 머리말 `user_type: [Service]` | 정책에 있음 | permission-matrix Service만 O, POL-ACC-001 규칙 5 | 그대로 |
| LI-STN-08 · LI-STN-08-P `client_mode: [Main Mode]` | 정책에 있음 | client-mode-matrix Main Mode만 O, POL-TST-008 규칙 1 | 그대로 |
| T/L 차이 (L-IOS는 [Import] · [Delete] · 체크박스 · [Save] 없음, Active 보기만) | 정책에 있음 | POL-TST-008 규칙 1 · 2 | 디스크립션 끝에 POL-TST-008 |
| TI-STN-08 #3 [Import] · TI-STN-08-01 #1 · #3 (json만, 양식 불일치 전체 등록 안 됨, 덮어쓰기, 최신 버전 자동 활성) | 정책에 있음 | POL-TST-008 규칙 2 · 3 · 4, Alert_039 · 040 · 041 · Confirm_028 | 디스크립션 끝에 POL-TST-008. Confirm_028 [Cancel] → Import file 유지는 카탈로그대로 씀 |
| TI-STN-08 #3 [Delete] (Active 포함 Alert_042, Confirm_026 뒤 삭제 & Toast) | 정책에 있음 | POL-TST-008 규칙 7, Confirm_026 버튼 동작 (Toast "The selected files have been deleted.") | 디스크립션 끝에 POL-TST-008 |
| TI-STN-08 #4-1 · TI-STN-08-P #3 Active (하나만 Active, Master 최신 버전 고정, File details에서 바꾸고 [Save]) | 정책에 있음 | POL-TST-008 규칙 5 · 6 | 디스크립션 끝에 POL-TST-008 |
| TI-STN-08 #4-1 · TI-STN-08-P #3 Master 변경 버튼 (미노출 / 비활성) | 논의 대상에 없고 정책이 정하지 않음 | POL-TST-008 규칙 6 "바꿀 수 없음"만 | 질문 대기 Q1 |
| TI-STN-08-P #4 Confirm_026 제목 "Delete the selected file?" | 기존 화면이 정책과 다름 | Alert 카탈로그 Confirm_026 "Delete the selected files?" | 변경 확인 C1 |
| TI-STN-08-P #4 [Delete] 뒤 Toast "The file has been deleted." | 기존 화면이 정책과 다름 | Alert 카탈로그 Confirm_026 버튼 동작 "The selected files have been deleted." | 변경 확인 C2 |
| TI-STN-08-P #4 [Save] → Confirm_029 · 030 "확인 시 반영" (Toast 없음) | 기존 화면이 정책과 다름 | Alert 카탈로그 Confirm_029 · 030 버튼 동작 "& Toast" (030 "{version} has been deactivated.", 029 문구 없음) | 변경 확인 C3, 029 문구는 질문 대기 Q2 |
| Alert 카탈로그 Confirm_029 · 030 발생 조건 "목록에서 Active 토글" | 정책을 바꿔야 함 (기준 자료가 정책 · 화면과 다름) | POL-TST-008 규칙 6, TI-STN-08 #4-1 "토글 없음" | 정책 수정 범위 1 (DS-0012) |
| TI-STN-08-P · LI-STN-08-P 시약 정보 예시 값 (GI-B1, TEST_GROUP_2 GI, SAMPLE_TYPE_6 ~ 9, Target 7개) | 정책에 있음 | POL-TST-010 규칙 1, test-items.csv · sample-types.csv · Assay Pack 명세 R06 | 그대로 |
| TI-STN-08-P #4 "장비 반영 데이터에 영향 없음" | 정책에 있음 | POL-TST-008 규칙 7 "Instrument에 적용된 데이터에는 영향이 없음" | 용어 목록 (장비 → Instrument) |

**정책 수정 범위**

| # | 바꿈 / 더함 | 정책 ID · 규칙 (또는 기준 자료) | 변경 전 | 변경 후 (안) | 논의 대상 |
| --- | --- | --- | --- | --- | --- |
| 1 | 바꿈 | 기준 자료 `alert/alert-catalog.csv` Confirm_029 · Confirm_030 발생 조건 (+ Confirm_029 버튼 동작) | Confirm_029 "Assay Pack Setting 목록에서 비활성 버전의 Active 토글을 켠 경우", Confirm_030 "… 활성 버전의 Active 토글을 끈 경우", Confirm_029 동작 끝 "· Master는 Alert_045" | Confirm_029 "Assay Pack File Details(TI-STN-08-P)에서 비활성 버전을 [Active]로 바꾸고 [Save]를 선택한 경우 (POL-TST-008 규칙 6)", Confirm_030 "… 활성 버전을 [Inactive]로 바꾸고 [Save]를 선택한 경우", "Master는 Alert_045"는 뺌 (정책 문장은 그대로) | DS-0012 |

**용어 목록**

| 원래 표현 | 표준어 | 어디서 | 새 용어면 처리 |
| --- | --- | --- | --- |
| 시약 | Reagent | TI-STN-08-P #3 "같은 시약", "시약 정보", "파일당 시약 1개" · LI-STN-08-P #3 "시약 정보" | |
| 장비 | Instrument | TI-STN-08-P #4 "장비 반영 데이터" | |
| 팝업 | Popup | TI-STN-08 #1-2 "Period Filters 팝업" · #3 "Import file 팝업" · LI-STN-08 #1-2 · TI-STN-08-P #4 "삭제 확인 팝업" · "[Cancel] → 팝업 닫힘" · TI-STN-08-01 화면 글자 "팝업:" · 노출 경로 3줄 · #3 "[Cancel] → 팝업 닫힘". 기존 작업방 프레임 이름 "[TI-STN-08 / 팝업 정의]"는 프레임 이름이라 그대로 (DS-0008) | |
| 알림 (Alert을 뜻함) | Alert | TI-STN-08-P #4 "삭제 불가 알림 (Alert_042)" | |
| 디폴트 | Default | TI-STN-08 #1-1 · #1-2 · #1-3 · #2 · #3 · LI-STN-08 #1-1 · #1-2 · #1-3 · #2 · TI-STN-08-P #4 [Save] | |
| 표시 (보여 준다는 뜻) | 노출 | TI-STN-08 #1-3 "파일만 표시" · #4-1 "(표시 전용)" · LI-STN-08 #1-3 · TI-STN-08-P #3 "순서대로 표시" · "함께 표시" · "Segment 표시" · "각각 표시" · LI-STN-08-P #3 같은 줄 · TI-STN-08-01 #2 "용량 표시". "선택 건수 표기 없음"의 표기는 그대로 | |
| 체크박스 | Checkbox | TI-STN-08 #4 "체크박스 : …" · 정렬 줄 · LI-STN-08 #4 "체크박스 없음" · LI-STN-08 T/L 차이 줄. 사용 컴포넌트 "Check Box/Square"는 라이브러리 컴포넌트 이름이라 그대로 | |
| 공통 UX | Common UX | TI-STN-08 · LI-STN-08 #5 "공통 UX > COMM-5-i 정의 참고" — 용어집 예외(디스크립션 참고 줄 `공통 UX 참고 : COMM-…`은 Figma 표기 형식)라 그대로 | |
| TIOS · LIOS | T-IOS / L-IOS | TI-STN-08 · TI-STN-08-P · LI-STN-08 GNB 화면 글자 — 용어집 "문서 표기로 쓸 때"만 바꿈, 화면 글자라 그대로 (3단계에서 Common UX GNB를 따름) | |
| service (User ID 값) | (바꾸지 않음) | TI-STN-08 · LI-STN-08 목록 User ID 칸 · TI-STN-08-P · LI-STN-08-P Import Info — User Type이 아니라 계정 ID 값이라 그대로 | |
| Raw_stool · eNAT_stool · Fecal_swab | (바꾸지 않음) | TI-STN-08-P · LI-STN-08-P Sample Type Mapping Info "Sample Type Code" 칸 — 코드 값이라 그대로 (`sample-types.csv` 코드 칸과 같음) | |

- Module · Unit 이름: 나오지 않음. 상태값: Active · Inactive는 `glossary/status-values.csv`에 없고 POL-TST-008 정의를 따름
- 용어집에 없는 새 용어: 없음

## 설계

### 화면별 작업
<!-- 절차 1번 순서 2에서 그릴 T · L 한 쌍마다 줄을 만들어 따른 케이스 · 요건 번호를 채우고, 그 쌍을 다 그리면 공통 3-10에서 섹션 · 기획 프레임 · 상태 · 케이스 프레임 링크를 채웁니다. -->
| T · L 한 쌍 | 따른 케이스 | 요건 번호 | 섹션 | 기획 프레임 | 상태 · 케이스 프레임 |
| --- | --- | --- | --- | --- | --- |
| TI-STN-08 / LI-STN-08 | 3 | 1 | [TI-STN-08](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3492-18) · [LI-STN-08](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3492-25) | [TI-STN-08](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3499-6) · [LI-STN-08](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3503-1997) (사용자 확인 목록 [`3506:12990`](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3506-12990)) | 그림 (T · L 마무리 확인 2026-11-25) · 케이스 프레임 없음 (기존 원본에 없음) |
| TI-STN-08-01 / (짝 없음) | 3 | 1 | [TI-STN-08-01](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3492-19) | [TI-STN-08-01](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3525-2744) (사용자 확인 목록 [`3525:2899`](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3525-2899)) | 그림 (마무리 확인 2026-11-25, 짝 없음) · 케이스 프레임 없음 (기존 원본에 없음) |
| TI-STN-08-P / LI-STN-08-P | 3 | 1 | [TI-STN-08-P](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3492-20) · [LI-STN-08-P](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3492-26) | [TI-STN-08-P](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3515-1564) (사용자 확인 목록 [`3517:2205`](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3517-2205)) · [LI-STN-08-P](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3519-2202) (사용자 확인 목록 [`3519:3319`](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3519-3319)) | 그림 (T · L 마무리 확인 2026-11-25) · 케이스 프레임 없음 (기존 원본에 없음) |

- 원본(읽기만): UX AI TEST 「Setting  Ⓛ / Ⓣ_As Is」 기획 프레임 TI-STN-08 `3288:235198` · TI-STN-08-P `3288:235494` · TI-STN-08-01 `3288:237146` · LI-STN-08 `3288:238191` · LI-STN-08-P `3288:238487` (모두 너비 2252, 높이 1031 → 기획 프레임 너비 2252), 정의 프레임 [세부정의] `3288:240828` · [Import 정의] `3288:240943` · [TI-STN-08-P 유형별 정의] `3288:237480`
- 메뉴 단위 표시(2026-11-25 자리 잡음): T-IOS 시스템 구분 `3492:14` (T-IOS - 2.1) · 기획 진행 표시 `3492:16`, L-IOS `3492:21` · `3492:23`. 기획 진행 표시는 기존 작업방 「✅ SB-Update : 2026.10.26 (컨펌 완료)」를 옮김 → 검토 완료 · 2026.10.26 (케이스 3). 너비 8761 (섹션 줄 너비, 최소 8000 넘음)
- 섹션 줄 순서(CID 순): TI-STN-08 · TI-STN-08-01 · TI-STN-08-P / LI-STN-08 · (비움) · LI-STN-08-P. 섹션 높이는 우선 1231(100 + 1031 + 100), 그린 뒤 맞춤

### 컴포넌트 없이 그린 요소
<!-- 5단계 완료 때 Common UX 후보 목록으로 올라가는 표(지금은 올리지 않음, flow/5-done.md 절차 2번 순서 6). 요소 이름 뒤 괄호에 종류를 적습니다(예: 새로고침 (아이콘 버튼)). -->
| 요소 이름 (종류) | 하는 일 | 쓴 곳 (CID · 디스크립션 번호) | 어디서 (후보 ID / 신규로 만듦 / 기존 화면에서 따옴) | 원본 요약 (기존 화면에서 따옴만: 크기 · 모서리 · 줄 × 칸 · 도형 · 글자 · 인스턴스) | Figma 링크 |
| --- | --- | --- | --- | --- | --- |
| 콘텐츠 영역 바탕 (영역 틀) | 화면 콘텐츠 영역 바탕 | TI-STN-08 · LI-STN-08 | 기존 화면에서 따옴 | 사각형 1701×988, 모서리 0, 색 #E9EDF4, 글자 0 · 인스턴스 0 (`3288:235199`) | [TI-STN-08](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3499-6) |
| 검색 영역 바탕 (영역 틀) | 검색 조건 · 버튼을 담는 틀 | TI-STN-08 #1 · LI-STN-08 #1 | 기존 화면에서 따옴 | 프레임 1639×68, 모서리 0, 흰색, 테두리 없음. 안의 조회 조건 · 버튼은 Common UX 컴포넌트로 그림 (`3288:235448`) | 같음 |
| 검색 조건 구분선 (Divider) | 검색 조건 묶음 사이 구분 | TI-STN-08 #1 · LI-STN-08 #1 | 기존 화면에서 따옴 | 사각형 1×24, 색 #DEE2E7, 2개 (`3288:235450` 안) | 같음 |
| Items 줄 바탕 (영역 틀) | Items 개수 · 노출 개수 · [Delete] · [Import]를 담는 틀 | TI-STN-08 #2 · #3 · LI-STN-08 #2 | 기존 화면에서 따옴 | 프레임 1639×56, 모서리 0, 흰색, 테두리 1 #E3EBF2. Items · 개수 글자 2개(Inter Regular · Bold 14) (`3288:235472`) | 같음 |
| 목록 바탕 (영역 틀) | 목록 · Pagination을 담는 틀 | TI-STN-08 #4 · #5 · LI-STN-08 #4 · #5 | 기존 화면에서 따옴 | 프레임 1639×730, 모서리 0, 흰색, 테두리 없음. 안의 행 · Pagination은 Common UX 컴포넌트로 그림 (`3288:235201`) | 같음 |
| 콘텐츠 영역 바탕 · 검색 영역 바탕 · 검색 조건 구분선 (영역 틀) | 위 세 줄과 같음 | TI-STN-08-P · LI-STN-08-P (#1 뒤 화면) | 기존 화면에서 따옴 | 위 세 줄과 같음 (상세 원본 `3288:235495` · `3288:235745`도 같은 값) | [TI-STN-08-P](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3515-1564) · [LI-STN-08-P](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3519-2202) |
| Items 줄 바탕, 패널 열림 (영역 틀) | 패널 왼쪽에 Items 개수 · 노출 개수 · [Delete] · [Import]를 담는 틀 | TI-STN-08-P #1 · LI-STN-08-P | 기존 화면에서 따옴 | 프레임 828×56, 모서리 0, 흰색, 테두리 1 #E3EBF2. [Delete] · [Import] 자리 x 665 · 743 (`3288:235769`) | 같음 |
| 목록 바탕, 패널 열림 (영역 틀) | 목록 · Pagination을 담는 틀 (Items 줄 바로 아래) | TI-STN-08-P #2 · LI-STN-08-P #2 | 기존 화면에서 따옴 | 프레임 1639×746 (y 247), 모서리 0, 흰색. Pagination 자리 x 158 · y 658 (`3288:235497`) | 같음 |
| 패널 바탕 (영역 틀) | File details 패널 바탕 | TI-STN-08-P #3 · LI-STN-08-P #3 | 기존 화면에서 따옴 | 사각형 811×802, 모서리 0, 흰색, Drop shadow 1 (`3288:235780`) | 같음 |
| 패널 머리 (영역 틀) | 패널 제목 · [닫기] | TI-STN-08-P #3 · #3-1 · LI-STN-08-P #3 · #3-1 | 기존 화면에서 따옴 | 프레임 811×48, 흰색, 테두리 #DDDDDD, 가로 정렬 padding 8 · 16. 글자 1 (File details Bold 18 #1A1F23), 인스턴스 1 Interface/Close 24 — Common UX Interface/Close로 넣음 (`3288:235781`) | 같음 |
| File details 정보 묶음 (정보 표시) | File Info · Import Info · Reagent Basic Info 항목명 · 값 | TI-STN-08-P #3 · LI-STN-08-P #3 | 기존 화면에서 따옴 (Card/List로 바꿀 여지: 항목명 · 값 줄. File Info의 Active 값(태그 · 버튼)은 Card/List 줄에 담을 수 없음) | 세로 묶음 760 폭 간격 16, 묶음 3 · 구분선 2(760×1 #EEF1F5). 제목 Bold 16 #1F2329, 칸 항목명 Bold 12 #5F666E · 값 Regular 14 #1F2329 (간격 6), 칸 줄바꿈 가로 간격 16. File Info 칸 5(2열) · Import Info 2 · Reagent Basic Info 7(4열). Active 값은 Status Base · Square(Common UX)로 넣음 (`3288:235786` 안 앞 5개) | 같음 |
| Test Target 칩 (값 표시) | Test Target Names 값 | TI-STN-08-P #3 · LI-STN-08-P #3 | 기존 화면에서 따옴 | 칩 7개 높이 24, 모서리 14, 테두리 1 #DEE2E7, 글자 Regular 13, 간격 8. 머리 「Test Target Names (7)」 Bold 13 (`3288:235786` 안 chips) | 같음 |
| Sample Type Mapping 표 (표) | Sample Type ID · Code 대응 | TI-STN-08-P #3 · LI-STN-08-P #3 | 기존 화면에서 따옴 (Card/Table로 바꿀 여지: 열 2 · 줄 4) | 760×190, 모서리 4, 테두리 1 #DEE3E8, 머리 줄 36 #F7F8FA(Bold 12) + 줄 38 × 4(Regular 14), 칸 2 (`3288:235786` 안 table) | 같음 |
| Dim (영역 틀) | Popup 뒤 배경 Dim | TI-STN-08-01 #0 | 기존 화면에서 따옴 | 사각형 1702×1031 (x 218 · y 0), 모서리 0, #000000 불투명도 45%, 글자 0 · 인스턴스 0 (`3288:237440`) | [TI-STN-08-01](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3525-2744) |
| Import file Popup 틀 (Popup) | 제목 · 파일 영역 · 선택한 파일 목록 · 버튼을 담는 틀 | TI-STN-08-01 #0 · #3 | 기존 화면에서 따옴 (Common UX Basic Popup은 팝업 틀 컴포넌트 없음, COMM-5-m(1/4)) | 프레임 520×490 (x 809 · y 271), 모서리 6, 흰색, 그림자 1. 세로 묶음 Header 520×58(가로, padding 18 · 24, 제목 「Import file」 Bold 18 #1F2329) · Body 520×363(세로 간격 16, padding 0 · 24 · 20 · 24) · Footer 520×69(위 테두리 #EEF1F5, 가로 간격 8, padding 16 · 24). 프레임 14 · 글자 20. 안의 ✕ 글자 → Common UX Interface/Close, [Cancel] · [Import] → Square(Outlined · Filled, 원본 크기 79×36 · 75×36)로 넣음 (`3288:237441`) | 같음 |
| 파일 영역 (Drag & Drop) | 끌어놓기 · [Select files]로 파일 선택 | TI-STN-08-01 #1 | 기존 화면에서 따옴 | 프레임 472×178, 모서리 6, #F6F7F9, 점선 테두리 1 #C5CCD5(6/4), 세로 간격 8, padding 24 · 16. 아이콘 원 36×36 #E7F7F6(↑ Bold 18 #0B8580) · 「Drag and drop files here, or」 Medium 14 · [Select files] 105×36 · 「json · Multiple files」 Regular 12 #838C96. [Select files]는 Square Outlined로 넣음 (`3288:237446`) | 같음 |
| 선택한 파일 줄 (목록 줄) | 파일명 · 용량 · [✕] | TI-STN-08-01 #2 | 기존 화면에서 따옴 | 줄 3개, 각 472×39, 모서리 4, 테두리 1 #DEE2E7, 가로 간격 10, padding 10 · 14. 글자 4(▤ #0B8580 · 파일명 Medium 14 · 용량 Regular 12 #838C96 · ✕ Regular 13 #5F666E) + 빈칸 프레임 1 (`3288:237453` · `237459` · `237465`) | 같음 |
| 스크롤 막대 (스크롤) | 패널 내용 스크롤 위치 | TI-STN-08-P #3 · LI-STN-08-P #3 | 기존 화면에서 따옴 (COMM-5-o는 컴포넌트 없음) | 트랙 4×673 #EEF1F5 · 손잡이 4×278 #ADB5BD, 모서리 2 (`3288:235994` · `3288:235995`). L은 원본대로 스크롤 영역 · 트랙 728, 손잡이 325 (`3288:238984` · `3288:238985`) | 같음 |

### 근거로 풀린 것
| 질문 | 푼 근거 |
| --- | --- |
| TI-STN-08 #3 [Delete] 「삭제 & Toast」 Toast 문구 (뒤 단계용 확인 항목 2) | Alert 카탈로그 Confirm_026 버튼 동작 → Toast 카탈로그 Toast_001 "The selected files have been deleted." |
| [Search] 결과 없음 · 등록 파일 없음 모습 ([세부정의]) | 기존 원본 [TI-STN-08 / 세부정의] `3288:240828`: 「No files found. / Click Import to add a file.」 · 「No results found.」 → 디스크립션 4 "데이터가 없을 때" (C4) |
| TI-STN-08-P · LI-STN-08-P 시약 정보 항목 ([유형별 정의]) | 기존 원본 [TI-STN-08-P 유형별 정의] `3288:237480`의 File type별 정보 묶음 제목 → 디스크립션 3 (C4) |

### 찾은 것
- 규칙에 없어 판단한 곳: 기존 디스크립션에 0번 블록이 없어 `templates/screen.md` 틀대로 0번(정의 · User Type · L-IOS Client Mode, 노출 경로가 있던 화면은 "화면 노출 경로" 줄을 0번 동작으로)을 둠. 기존 패널에서 한 블록 안에 있던 1-1 ~ 1-4 · 4-1 · 4-2 · 2-1 · 3-1을 번호마다 블록으로 나눔(번호는 그대로)
- 기존 디스크립션의 다른 정의 프레임 가리킴([TI-STN-08 / 팝업 정의] · [Import 정의] · [정책] · [텍스트 정렬 범례])은 지움 — 가리키던 내용은 Alert · Confirm 코드와 `정책 참고 : POL-TST-008`(규칙 2 ~ 7을 동작 줄에 풀어 씀)로 대신함 (모양만 바꿈)
- 기존 디스크립션 제목의 Common UX 번호를 새 번호로 바꿈(케이스 3 3-3, 변경 확인 없음): COMM-5-s → COMM-5-p, COMM-5-m(목록) → COMM-5-g, COMM-5-l(Checkbox) → COMM-5-q, COMM-5-i → COMM-5-l, COMM-5-d 그대로. 새로 적은 공통 UX 참고: 버튼 COMM-5-c, Active 태그 COMM-5-j, 패널 정보 COMM-5-e · 스크롤 COMM-5-o, Import file COMM-5-m(1/4) — 그릴 때 컴포넌트가 맞지 않으면 고침
- 목록 정렬: 기존 원본 목록 헤더에 정렬 아이콘 없음 → Default 정렬만 적음
- LI-STN-08-P 화면 이름: 기존 패널 「Assay Pack Setting」, IA는 Details — 이 CID에는 반영 대기 항목이 없어(TI-STN-08-P-R01은 T만) 기존 그대로 둠
- Q1 (Master Active 버튼): TI-STN-08 #4-1을 TI-STN-08-P 원본대로 「상세에서 [Active] · [Inactive] 버튼 비활성 (변경 불가)」로 씀
- LI-STN-08 그리기(2026-11-25, R001 · 정다예 요청으로 최고관리자의 작업 이어 받음): L 섹션에 TI-STN-08 복제본 `3503:1997`이 이미 있었음(작업 기록에 없던 일 — LNB · GNB L-IOS, [Delete] · [Import] · Checkbox · 3번 번호 표시 없앰, 라벨 Q3 · Q4 · C4 · Q5, 패널 화면 정보까지는 바뀌어 있고 디스크립션은 T 그대로였음). 이어서 패널 0 · 2 · 4 · 4-1 · 4-2와 경로를 L 화면 MD대로 고치고 3번 블록을 지움, 사용자 확인 목록(질문 대기 Q3 · Q4 · Q5, 변경 확인 C4)을 둠, 기획 프레임 높이를 패널에 맞춤(1074), 섹션 높이 1274. 목록 10행은 기존 원본 LI-STN-08과 같음. 기존 원본 L에는 업데이트 메모가 없어 두지 않음(T에서 복제한 메모도 없음). 영역 틀(콘텐츠 영역 바탕 · 검색 영역 · Items 줄 · 목록 바탕 · 구분선)은 T에서 복제해 크기 · 색이 원본 요약과 같음
- TI-STN-08-P / LI-STN-08-P 그리기(2026-11-25, R001 · 정다예): 뒤 화면(LNB · GNB · 검색 영역 · Items 줄 · 목록 행 · Pagination)은 화면 MD "TI-STN-08과 같음"대로 TI-STN-08과 같은 Common UX 컴포넌트 · 속성으로 그리고, 영역 틀 · 자리는 상세 원본(`3288:235494` · L `3288:238487`) 값으로 둠(Items 줄 828, 목록 바탕 y 247 · 746, Pagination x 158). 상세 원본에서 숨겨져 있던 1번 번호 표시는 디스크립션 1이 있어 원본 자리(861, 209)에 보이게 둠. 목록 4행(ap_pcr_gi-b1_v5)을 선택 Row로(Table/Cell State Selected), 행 Checkbox는 원본대로 선택 없음. 패널 아래 [Delete] · [Save]는 Common UX Square(Outlined · Filled Disabled, 150×44)로, Active 값은 Status Base(Active Navy) · Square [Inactive]로 그림. 패널 정보 묶음은 Card/List · Card/Table에 Active 값(태그 · 버튼)을 담을 수 없어 기존 화면에서 따옴 → 화면 MD 3의 `공통 UX 참고 : COMM-5-e`를 그린 컴포넌트대로 COMM-5-c · COMM-5-j(L은 COMM-5-j)로 고침(케이스 3 3-3, 변경 확인 없음). 패널 내용은 화면 예시 글자에 있는 File Info · Import Info · Reagent Basic Info(칩 · Sample Type 표)까지만 그리고 스크롤 영역에서 잘림(원본과 같음). TI-STN-08-P 패널이 길어 기획 프레임 높이 1186 · 섹션 1386. L 원본에 맞춰 [Delete] · [Import] · Checkbox · 1 · 4번 번호 표시 · 패널 아래 버튼 · [Inactive]를 빼고 스크롤 영역 728. Q3(L 노출 개수 Dropdown)는 LI-STN-08-P에 그 번호 표시가 없어 사용자 확인 목록 0번 블록에만 둠. 기존 원본 T · L 상세에는 업데이트 메모가 없어 두지 않음
- TI-STN-08 그리기(2026-11-25, R002): LNB Setting 하위 메뉴는 IA Lv.2 순서 8개(Policy · System · Protocol · LIS · Account · SMTP · Assay Pack · Tube)로 둠(기존 원본 LNB는 7개, 공통 영역). LNB 컴포넌트 너비(218) 안에서 「Assay Pack Setting」이 말줄임으로 보임 — LNB 컴포넌트가 정한 모습이라 그대로 둠. 기존 원본 목록에 Active 머리 옆 삼각형 두 개(`3288:235487`, 정렬 아이콘 모양)가 있으나 디스크립션에 정렬 정의가 없어 그리지 않음(화면 MD 정렬 Default만). 목록 2행(5 · 6행) 선택 · [Delete] 활성은 기존 원본 그대로. 검색 영역 Active only는 Common UX Search Area 대로 Checkbox(Circle)로 그림(원본은 Square)
- TI-STN-08-01 그리기(2026-11-25, R001 · 정다예): 기존 원본(`3288:237146`)의 Dim · Popup만 원본 값 그대로 다시 그리고 뒤 목록 · LNB · GNB는 깔지 않음(C5, 공통 3-9). Dim은 원본 크기 · 자리(x 218부터 1702×1031) 그대로라 왼쪽 218은 흰 바탕으로 남음. Popup 자리 · 크기(809, 271 · 520×490)와 번호 표시 1 · 2 · 3 자리는 원본과 같음(원본의 숨긴 번호 표시는 옮기지 않음). 닫기는 Interface/Close를 원본 ✕ 크기에 맞춰 19×19로 둠. 원본 요약과 그린 요소 요약이 같음(Popup 520×490 · Header 58 · Body 363 · Footer 69, 프레임 14). 사용자 확인 목록은 변경 확인 C5 하나(0번 블록, 사용자 확인 라벨 없음). 기존 원본에 업데이트 메모가 없어 두지 않음. 화면 MD는 고칠 곳 없음(공통 UX 참고 COMM-5-m(1/4) · COMM-5-c 그대로)
- 3단계 마침 점검(2026-11-25, R001 · Claude): LI-STN-08 패널 참고 코드 5곳(COMM-5-g ×2 · COMM-5-j · POL-TST-008 · LI-STN-08-P)의 색이 `#3342FF`라 `reference-rules/description.md` "참고 코드 표시"의 `#3242FF`로 맞춤(글자는 그대로). 질문 대기 Q5 "관련된 곳"에 LI-STN-08 #4-1을 더함(LI-STN-08 4-1 자리에 Q5 사용자 확인 라벨 · 목록이 이미 있음). 뒤 단계용 확인 항목 1의 [세부정의] 줄에 이어진 번호 C4를 적음. TI-STN-08-P 4의 빨간 글자(Toast 줄)는 화면 MD `<span style="color:red">`와 같음

### 용어 치환
| 원래 표현 | 표준어 | 위치 |
| --- | --- | --- |

- 3단계 절차 3 용어 점검(2026-11-25, R001 · Claude): 화면 MD 다섯 개(디스크립션 · 화면 예시 글자 · 화면 표기 글자)를 `terms.csv` 쓰지 않는 표현 · `glossary.md` 표기 규칙 · `status-values.csv` · `module-units.csv`와 단어 단위로 대어 봄 — 바꿀 것 없음. 「공통 UX 참고 : COMM-…」 줄은 용어집 예외(Figma 표기 형식), 「기간 유형」(TI-STN-08 · LI-STN-08 #1-1)은 기간 종류를 뜻해 케이스(팀 내부 말 「유형」)가 아니라 그대로. Module · Unit 이름 · 용어집에 없는 새 말 없음

## 질문 대기

| 번호 (Q) | 질문 | 관련된 곳 (CID · 디스크립션 번호) | 논의 대상 | T · L 같음 | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- | --- |
| Q1 | Master 파일의 Active 변경 버튼 모습 (TI-STN-08-P #3은 [Active] · [Inactive] 비활성, TI-STN-08 #4-1은 상세에 미노출. POL-TST-008 규칙 6은 "바꿀 수 없음"만 정함 — 버튼이 있는 화면인 TI-STN-08-P 원본대로 비활성으로 그리고 TI-STN-08 #4-1도 같게 씀) | TI-STN-08 #4-1 · TI-STN-08-P #3 | | T만 (L-IOS는 버튼 없음) | |
| Q2 | Active로 바꾼 뒤(Confirm_029 [Activate]) Toast 문구 (Alert 카탈로그 동작에 "& Toast"만 있고 문구 없음. Confirm_030은 "{version} has been deactivated.") | TI-STN-08-P #4 | DS-0012 (같은 Confirm 줄) | T만 | |
| Q3 | L-IOS 목록의 노출 개수 Dropdown을 둘지 (Common UX Basic Table: L-IOS는 노출 개수 고정. 기존 화면에는 10 items Dropdown이 있어 기존대로 그림) | LI-STN-08 #2 · LI-STN-08-P (뒤 목록) | | L만 | |
| Q4 | L-IOS 목록 데이터 없음 문구 (기존 [LI-STN-08 / 세부정의] 프레임이 없어 같은 메뉴 TI-STN-08 문구 "No files found. Click Import to add a file."로 씀. L-IOS에는 [Import] 없음) | LI-STN-08 #4 | | L만 | |
| Q5 | Status Base(COMM-5-j)에 맞는 Variant가 없어 Active는 Navy · Inactive는 Gray로 그림 (기존 Active 태그 검정, Color에 검정 없음) | TI-STN-08 #4-1 · TI-STN-08-P #3 · LI-STN-08 #4-1 · LI-STN-08-P #3 | | T · L 같음 | |

## 변경 확인

| 번호 (C) | 기존 화면 | 바꿔 그린 것 | 관련된 곳 (CID · 디스크립션 번호) | 근거 | T · L 같음 | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C1 | 패널 [Delete] Confirm 제목 "Delete the selected file?" | Confirm_026 제목을 카탈로그대로 "Delete the selected files?" | TI-STN-08-P #4 | (Alert 카탈로그 Confirm_026) | T만 | O | |
| C2 | 패널 [Delete] 뒤 Toast "The file has been deleted." | Toast 문구를 카탈로그대로 "The selected files have been deleted." | TI-STN-08-P #4 | (Alert 카탈로그 Confirm_026 버튼 동작) | T만 | O | |
| C3 | [Save] → Confirm_029 · 030 확인 시 반영 (Toast 없음) | 반영 뒤 Toast 노출 (Deactivate: "{version} has been deactivated.", Activate 문구는 Q2) | TI-STN-08-P #4 | (Alert 카탈로그 Confirm_029 · 030 버튼 동작) | T만 | O | |
| C4 | 디스크립션이 다른 정의 프레임([세부정의] · [유형별 정의])을 가리킴 | 데이터 없음 문구 · File type별 정보 묶음을 디스크립션에 옮겨 씀 | TI-STN-08 #4 · LI-STN-08 #4 · TI-STN-08-P #3 · LI-STN-08-P #3 | 기존 원본 정의 프레임 `3288:240828` · `3288:237480` (Common UX Data Table 데이터 없음 문구는 화면이 정함) | T · L 같음 | - | |
| C5 | Import file 뒤에 TI-STN-08 목록을 깔고 Dim | 목록 없이 Dim만 깔고 Popup을 그림 | TI-STN-08-01 #0 | `flow/3-design.md` 공통 3-9 Popup | T만 | - | |
| C6 | 화면 이름 "Assay Pack Setting" | "Assay Pack File Details" (IA Details) | TI-STN-08-P #0 (패널 화면 정보) | 반영 대기 TI-STN-08-P-R01 | T만 | - | |

## 검토 질의

## 언어셋

## 요청자 확인

| # | 생긴 날 | 단계 · 절차 (질문 번호 또는 `예외`) | 물은 것 | 관련된 곳 (CID · 디스크립션 번호 · Language ID) | 답을 받을 때까지 둔 모습 (예외 질문만) | 답 (날짜) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-11-25 | 1단계 시작 전 (Workbench) | 그릴 곳: 어느 페이지에 그릴까요 | 요청 링크 3481-216078 (To Be) / 작업 페이지 As Is | | To Be 페이지에 그림 (2026-11-25 최고관리자, 세 번 답함). 단, Workbench 작업 페이지는 16:24 기준 아직 As Is로 저장돼 있어 3단계 그리기 전에 다시 확인. 16:44 네 번째 답 「3481-216078 링크에 그리라」에 따라 Claude가 Workbench 작업 페이지를 To Be(3481:216078)로 바꿈 (2026-11-25, project.json 확인) |
| 2 | 2026-11-25 | 1단계 · 절차 4 순서 3 (IA와 화면이 다름) | Import file 팝업 (TI-STN-08-01)이 기존 작업방에는 있고 IA에 없음. 이번 작업 대상에 넣을까요 (넣으면 5단계에 IA에 더함, TI-STN-08-R02도 함께 반영) | TI-STN-08 #3 · TI-STN-08-01 · TI-STN-08-R02 | | 넣음 (2026-11-25 최고관리자, 추천대로 진행) |
| 3 | 2026-11-25 | 1단계 · 절차 5 질문 6 | 반영 대기 묶음 1 (TI-STN-08-P-R01 화면 이름) 반영 / 이번엔 안 함 | TI-STN-08-P-R01 | | 반영 (2026-11-25 최고관리자, 추천대로 진행) |
| 4 | 2026-11-25 | 1단계 · 절차 5 질문 7 | 요건 목록과 흐름(1 → 2 → 3 → 4 → 5)대로 진행하고 2단계로 넘어갈까요 | 요건 1 | | 이대로 진행, 2단계로 넘어감 (2026-11-25 최고관리자) |
| 5 | 2026-11-25 | 2단계 · 절차 6 질문 1 | 정책 수정 범위 1: Alert 카탈로그 Confirm_029 · 030 발생 조건을 POL-TST-008 규칙 6(File details에서 [Active] · [Inactive]로 바꾸고 [Save])에 맞춤 — 이대로 결정 / 논의 중으로 둠, 3단계로 넘어갈까요 | DS-0012 · TI-STN-08-P #4 | | 이대로 결정, 3단계로 넘어감 (2026-11-25 최고관리자) |
| 6 | 2026-11-25 | 4단계 · 절차 1 순서 2 (3단계 보고와 함께, R002) | 사용자 확인 목록: 질문 대기 Q1 ~ Q5 답 / 고객에게 물음, 변경 확인 C1 ~ C6 맞음 / 되돌림 | Q1 ~ Q5 · C1 ~ C6 ("질문 대기" · "변경 확인" 표) | | |

## 이 작업의 논의 대상

| 논의 대상 | 상태 (논의 중 / 결정) | 내용 한 줄 | 5단계 반영 |
| --- | --- | --- | --- |
| DS-0012 | 결정 | Alert 카탈로그 Confirm_029 · 030 발생 조건을 POL-TST-008 규칙 6에 맞춤 (2단계 정책 수정 범위 1) | |

## 이 작업이 남긴 것

- 다른 화면의 반영 대기 항목:
- 고친 카탈로그 줄: `alert/toast-catalog.csv` 새로 만듦(`toast-catalog-ms.csv`와 같은 칸, 2026-11-25) — Toast_001 "The selected files have been deleted." (TI-STN-08 · TI-STN-08-P, Confirm_026 [Delete] 뒤) · Toast_002 "{version} has been deactivated." (TI-STN-08-P, Confirm_030 [Deactivate] 뒤). Alert_039 ~ 042 · Confirm_026 · 028 · 029 · 030은 사용 화면에 이미 이 CID들이 있어 고치지 않음
