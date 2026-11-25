---
status: 진행 중            # 진행 중 | 끝남 | 멈춤
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
| 2. 근거 · 분석 | | | |
| 3. 화면 설계 | | | |
| 4. 수정 · 확인 | | | |
| 5. 완료 | | | |

이어서 작업할 곳: 2단계 · 절차 1 끝냄(요건 1: 케이스 3 강도), 절차 2 근거 읽을 차례 (다시 읽을 곳: 2단계 절차 2 / 작업 기록 "요건 목록" · "뒤 단계용 확인 항목(claude)"). Workbench 작업 페이지가 3단계 그리기 전에 To Be로 바뀌었는지 확인 (요청자 확인 1)

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

없음 (위와 같음. 2단계에서 정책으로 찾은 것이 있으면 더함)

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
| 1 | 1. 기능 정의가 안 된 요소: 디스크립션이 정의를 다른 프레임([TI-STN-08 / 세부정의] · [팝업 정의] · [Import 정의] · [정책], [TI/LI-STN-08-P 유형별 정의])으로 넘김. 그 프레임 내용은 화면 MD에 옮기지 않았음 | TI-STN-08 #1-4 · #3 · #4-1, TI-STN-08-P #3 · #4, LI-STN-08 #1-4, LI-STN-08-P #3 | 2단계 (정책 · Alert과 대조) | 근거로 풀림 ([팝업 정의] · [Import 정의] → Alert 카탈로그 Alert_039 ~ 042 · Confirm_026 · 028 · 029 · 030 줄, [정책] → POL-TST-008 규칙 2 ~ 7, [유형별 정의]의 시약 정보 항목 → `reference/customer/assay-pack/README.md` 구조 요약) · Confirm_029 · 030 발생 조건이 정책과 다름 → DS-0012 · [세부정의] 검색 결과 없음 모습은 저장소에 근거 없음 → 3단계로 (Common UX 목록 빈 상태 정의로 그림, 기존 원본 프레임 7811:247618) |
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

## 질문 대기

| 번호 (Q) | 질문 | 관련된 곳 (CID · 디스크립션 번호) | 논의 대상 | T · L 같음 | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- | --- |
| Q1 | Master 파일의 Active 변경 버튼 모습 (TI-STN-08-P #3은 [Active] · [Inactive] 비활성, TI-STN-08 #4-1은 상세에 미노출. POL-TST-008 규칙 6은 "바꿀 수 없음"만 정함 — 버튼이 있는 화면인 TI-STN-08-P 원본대로 비활성으로 그리고 TI-STN-08 #4-1도 같게 씀) | TI-STN-08 #4-1 · TI-STN-08-P #3 | | T만 (L-IOS는 버튼 없음) | |
| Q2 | Active로 바꾼 뒤(Confirm_029 [Activate]) Toast 문구 (Alert 카탈로그 동작에 "& Toast"만 있고 문구 없음. Confirm_030은 "{version} has been deactivated.") | TI-STN-08-P #4 | DS-0012 (같은 Confirm 줄) | T만 | |

## 변경 확인

| 번호 (C) | 기존 화면 | 바꿔 그린 것 | 관련된 곳 (CID · 디스크립션 번호) | 근거 | T · L 같음 | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C1 | 패널 [Delete] Confirm 제목 "Delete the selected file?" | Confirm_026 제목을 카탈로그대로 "Delete the selected files?" | TI-STN-08-P #4 | (Alert 카탈로그 Confirm_026) | T만 | O | |
| C2 | 패널 [Delete] 뒤 Toast "The file has been deleted." | Toast 문구를 카탈로그대로 "The selected files have been deleted." | TI-STN-08-P #4 | (Alert 카탈로그 Confirm_026 버튼 동작) | T만 | O | |
| C3 | [Save] → Confirm_029 · 030 확인 시 반영 (Toast 없음) | 반영 뒤 Toast 노출 (Deactivate: "{version} has been deactivated.", Activate 문구는 Q2) | TI-STN-08-P #4 | (Alert 카탈로그 Confirm_029 · 030 버튼 동작) | T만 | O | |

## 검토 질의

## 언어셋

## 요청자 확인

| # | 생긴 날 | 단계 · 절차 (질문 번호 또는 `예외`) | 물은 것 | 관련된 곳 (CID · 디스크립션 번호 · Language ID) | 답을 받을 때까지 둔 모습 (예외 질문만) | 답 (날짜) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-11-25 | 1단계 시작 전 (Workbench) | 그릴 곳: 어느 페이지에 그릴까요 | 요청 링크 3481-216078 (To Be) / 작업 페이지 As Is | | To Be 페이지에 그림 (2026-11-25 최고관리자, 세 번 답함). 단, Workbench 작업 페이지는 16:24 기준 아직 As Is로 저장돼 있어 3단계 그리기 전에 다시 확인 |
| 2 | 2026-11-25 | 1단계 · 절차 4 순서 3 (IA와 화면이 다름) | Import file 팝업 (TI-STN-08-01)이 기존 작업방에는 있고 IA에 없음. 이번 작업 대상에 넣을까요 (넣으면 5단계에 IA에 더함, TI-STN-08-R02도 함께 반영) | TI-STN-08 #3 · TI-STN-08-01 · TI-STN-08-R02 | | 넣음 (2026-11-25 최고관리자, 추천대로 진행) |
| 3 | 2026-11-25 | 1단계 · 절차 5 질문 6 | 반영 대기 묶음 1 (TI-STN-08-P-R01 화면 이름) 반영 / 이번엔 안 함 | TI-STN-08-P-R01 | | 반영 (2026-11-25 최고관리자, 추천대로 진행) |
| 4 | 2026-11-25 | 1단계 · 절차 5 질문 7 | 요건 목록과 흐름(1 → 2 → 3 → 4 → 5)대로 진행하고 2단계로 넘어갈까요 | 요건 1 | | 이대로 진행, 2단계로 넘어감 (2026-11-25 최고관리자) |

## 이 작업의 논의 대상

| 논의 대상 | 상태 (논의 중 / 결정) | 내용 한 줄 | 5단계 반영 |
| --- | --- | --- | --- |

## 이 작업이 남긴 것

- 다른 화면의 반영 대기 항목:
- 고친 카탈로그 줄:
