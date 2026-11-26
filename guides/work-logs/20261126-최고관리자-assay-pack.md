---
status: 진행 중            # 진행 중 | 끝남 | 멈춤
requester: 최고관리자
menu: Setting · Assay Pack Setting (STN)
cids: [TI-STN-08, LI-STN-08, TI-STN-08-P, LI-STN-08-P, TI-STN-08-01]
policies: []
cid_system:
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3481-216078 (UX AI TEST 「Setting  Ⓛ / Ⓣ_To Be」 페이지)
test: false
basis_start: 2026-11-26 09:11 · history 8d250d2f
basis:
basis_versions:
  rules:
  policy:
  glossary:
  screens:
  common_ux:
started: 2026-11-26
---
# 작업 기록: Assay Pack Setting 화면을 To Be 페이지에 처음부터 다시 그림

## 단계

| 단계 | 끝낸 날 | 마침 점검 | 남긴 것 |
| --- | --- | --- | --- |
| 1. 시작 · 요건 정의 | 2026-11-26 | 요청자 확인 (2026-11-26) | 겹치는 다른 작업: 있음 (20261125-최고관리자-assay-pack, 대상 화면 모두 겹침. 요청자 답으로 새 작업, 처리는 요청자 확인 4) |
| 2. 근거 · 분석 | 2026-11-26 | 요청자 확인 (2026-11-26) | 논의 대상 DS-0012 이어받음 (`work` 고침), C3 |
| 3. 화면 설계 | 2026-11-26 | 기계 검사 통과 (2026-11-26) | 질문 대기 6 (Q1 ~ Q6) · 변경 확인 8 (C1 · C2 · C3 · C4 · C7 · C9 · C10 · C11), 마침 점검에서 고친 것 "찾은 것" 끝 |
| 4. 수정 · 확인 | | | |
| 5. 완료 | | | |

이어서 작업할 곳: 4단계 · 사용자 확인 목록 반영함(Q1 ~ Q6 답, C 모두 맞음, 라벨 · 목록 모두 지움) · 기계 검사 통과(2026-11-26), 미해결 항목 없음. 절차 3번 "최종으로 UX 확정을 하시겠습니까?" 물음, 답 기다림 (다시 읽을 곳: 4단계 flow/4-revise-verify.md 절차 2 · 3 / 작업 기록 "질문 대기" · "변경 확인" · "검토 질의")

## 요청

- 요청 글: "https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-235028 여기가 AS IS / Assay Pack Setting 화면 다시 그려줘" (링크 = 같은 파일 「Setting  Ⓛ / Ⓣ_As Is」 페이지)
- 출처: Workbench 요청 R003 (최고관리자, 2026-11-26 09:09). 요청 페이지 「Setting  Ⓛ / Ⓣ_To Be」
- 진행 중인 작업 기록 20261125-최고관리자-assay-pack(같은 화면, 4단계)과 겹쳐 물었고, 답 "새 작업으로 시작 (1단계부터 처음부터 다시 그림)" (최고관리자, 2026-11-26 09:10)
- 공유 파일 없음

## 요건 목록

### 요건 1. Assay Pack Setting 화면을 「Setting  Ⓛ / Ⓣ_As Is」 기준으로 「Setting  Ⓛ / Ⓣ_To Be」 페이지에 처음부터 다시 그림
- 요청 상태: 최초
- 경로 분기 기준 (근거) · 읽는 강도: 8 옮겨 다시 그림 (케이스 3) (요청 글 "다시 그려줘" + 요청자 답 "처음부터 다시 그림") · 케이스 3 (다시 그리기)
- 지나가는 단계: 1 → 2 → 3 → 4 → 5
- UI 작업: 대상 아님 (케이스 3 기본값, 다시 그리며 바뀐 곳이 생기면 4단계 UX 확정 때 다시 정함)

| 대상 화면 | 케이스 | 작업 대상 | 근거 |
| --- | --- | --- | --- |
| Assay Pack Setting (TI-STN-08) | 3 | O | |
| Assay Pack Setting (LI-STN-08) | 3 | O | 짝 화면 · 함께 고침 (두 화면에 같은 목록 · 검색 · 상세 기능, L-IOS는 조회 전용) |
| Assay Pack File Details (TI-STN-08-P) | 3 | O | 같은 메뉴 화면 · 대상 (IA Assay Pack Setting > Details, TI-STN-08 [Details]가 엶) |
| Assay Pack File Details (LI-STN-08-P) | 3 | O | 짝 화면 · 함께 고침 (두 화면에 같은 상세 기능, L-IOS는 조회 전용) |
| Import file 팝업 (TI-STN-08-01, IA에 없음) | 3 | O | TI-STN-08 #3 [Import]가 여는 팝업 · 넣음 (요청자 답, 2026-11-26). IA에는 5단계에 더함 |

- 케이스: To-Be 화면 MD 머리말 `figma`에 이전 작업(20261125-최고관리자-assay-pack)이 그린 섹션 링크가 있어 표로는 케이스 1이지만, 요청자 답이 "처음부터 다시 그림"이라 케이스 3 "예전에 그린 메뉴도 처음부터 다시 그림(2026-11-25 결정)"으로 가름

### 찾았지만 대상 아님

다른 화면 없음 (화면 MD `screens/tobe/` · `screens/asis/`에서 STN-08이 나오는 곳은 이 다섯 화면 MD뿐. 옮겨 다시 그리는 요건이라 같은 글자 · Common UX 번호로 찾을 바뀌는 요소가 없음)

### 영향 화면

없음 (위와 같음. 2단계에서 정책으로 다시 찾음)

작업이 지나가는 단계: 1 → 2 → 3 → 4 → 5

## 읽은 화면

| 화면 (CID) | 읽은 것 (화면 MD / 기획 프레임 / 케이스 프레임 / 호출 화면) | Figma 링크 |
| --- | --- | --- |
| Assay Pack Setting (TI-STN-08) | 화면 MD (asis, 2026-11-26 「Setting  Ⓛ / Ⓣ_As Is」에서 다시 옮김, 케이스 절: 세부정의 1-1 등록된 파일 없음 · 1-2 검색 결과 없음, 참조 섹션: Import 정의) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-235198 |
| Assay Pack Setting (LI-STN-08) | 화면 MD (asis, 같음, 케이스 없음) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-238191 |
| Assay Pack File Details (TI-STN-08-P) | 화면 MD (asis, 같음, 케이스 절: 파일 종류별 패널 Master · Pretreatment · Extraction · PCR, 참조 섹션: 유형별 정의) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-235494 |
| Assay Pack File Details (LI-STN-08-P) | 화면 MD (asis, 같음, 케이스 절 · 참조 섹션 T-IOS와 같은 구성, 조회 전용) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-238487 |
| Import file 팝업 (TI-STN-08-01) | 화면 MD (asis, 같음, 두 모양은 TI-STN-08 참조 섹션 Import 정의 ① · ②) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-237146 |

- 1단계 읽기는 asis 화면 MD로만 함. asis 화면 MD는 요청자 확인 3 답대로 「Setting  Ⓛ / Ⓣ_As Is」 페이지(3288:235028)에서 2026-11-26에 다시 추출함(케이스 3 (이행 기간) 3, 도구 `tools/figma/extract-screen.js`를 이 파일 · 페이지로 바꿔 실행). 디스크립션 · 화면 글자는 2026-11-25 추출본과 같고, 머리말 figma · 케이스 · 참조 섹션 · TI-STN-08-01 배경 목록이 바뀜
- 디스크립션이 가리키는데 As Is 페이지에 없는 프레임: [TI-STN-08 / 팝업 정의] · [TI-STN-08 / 정책] · [LI-STN-08 / 세부정의], [TI-STN-08 / Import 정의]의 5 · 7번 → 요청자 확인 6
- 기획 프레임 밖 1920 프레임(TI-STN-08 다섯 · TI-STN-08-01 둘 · TI-STN-08-P 하나)은 UI 화면일 수 있어 열지 않음
- Module · Unit 이름: 케이스 패널의 Storage Location Info(ConsumableStorage · Trolley, PlateSealing · ColdStorage)는 시약 파일 값 예시라 `glossary/modules.csv` 대조는 2단계 기준데이터 대조로 넘김(뒤 단계용 6)
- To-Be 화면 MD 빈 틀: 요청자 확인 4 답 뒤 `screens/tobe/setting/{TI-STN-08 · LI-STN-08 · TI-STN-08-P · LI-STN-08-P · TI-STN-08-01}.md`를 `templates/screen.md` 빈 틀로 다시 씀 (2026-11-26, 지난 내용은 git 기록)
## 뒤 단계용 확인 항목(claude)

| # | 무엇 (절차 4번 순서 3 "뒤 단계로 넘김"의 1 ~ 5) | 관련된 곳 (CID · 디스크립션 번호) | 넘기는 곳 (2단계 / 3단계) | 이어진 번호 (Q · C · 논의 대상 ID / 근거로 풀림) |
| --- | --- | --- | --- | --- |
| 1 | 1. 기능 정의가 안 된 요소: [Delete] 「삭제 & Toast」의 Toast 문구가 없음 (TI-STN-08-P #4에는 「The file has been deleted.」) | TI-STN-08 #3 | 3단계 | 근거로 풀림 (Confirm_026 버튼 동작 · Toast_001 「The selected files have been deleted.」) |
| 2 | 2. Alert · Confirm 보완 필요 지점: 파일을 고른 채 [X] · ESC · [Cancel]로 닫을 때 다시 묻는지 디스크립션에 없음 | TI-STN-08-01 화면 노출 경로 · #3 | 2단계 | Q3 |
| 3 | 2. Alert · Confirm 보완 필요 지점: Active · Inactive를 바꾸고 [Save] 없이 [닫기] · 다른 Row [Details]를 누를 때 다시 묻는지 디스크립션에 없음 | TI-STN-08-P #2-1 · #3-1 | 2단계 | Q4 |
| 4 | 4. 요청과 기존 화면이 맞지 않는 곳: Master 파일의 Active 변경 버튼이 TI-STN-08 #4-1은 「상세에 변경 버튼 미노출」, TI-STN-08-P #3은 「[Active] · [Inactive] 버튼 비활성」으로 서로 다름 | TI-STN-08 #4-1 · TI-STN-08-P #3 | 2단계 | Q1 |
| 5 | 5. 대상 화면에서 찾은 고칠 점: 패널 화면 정보 title `Assay Pack Setting` → `Assay Pack File Details` (IA "Details", 화면 MD 제목과 다름) | TI-STN-08-P · LI-STN-08-P | 3단계 | C7 |
| 6 | 5. 대상 화면에서 찾은 고칠 점: 케이스 패널의 Storage Location Info Module · Unit 값(ConsumableStorage · Trolley, PlateSealing · ColdStorage)이 `glossary/modules.csv` · `module-units.csv` 이름인지 확인 | TI-STN-08-P · LI-STN-08-P 케이스 | 2단계 | 근거로 풀림 (modules.csv ConsumableStorage · PlateSealing, module-units.csv Trolley · ColdStorage 코드명) |
| 7 | 5. 대상 화면에서 찾은 고칠 점: TI-STN-08-01 배경 목록의 Master 줄 Product Name 「-」 · Active 모두 Inactive가 TI-STN-08 목록(「Master Info」 · Active 4줄)과 다름 | TI-STN-08-01 배경 · TI-STN-08 #4 | 3단계 | 근거로 풀림 (`flow/3-design.md` 공통 3-9: Popup은 Dim만 깔고 배경 화면을 그리지 않음) |
| 8 | 5. 대상 화면에서 찾은 고칠 점: LI-STN-08-P 케이스 Extraction Barcode Info 머리 「Schema Name」 · PCR 구성품 「Barcode Scheme Name」이 다른 곳(「Barcode Schema Name」)과 다름 | TI-STN-08-P · LI-STN-08-P 케이스 | 3단계 | C8 |

## 대상 화면의 반영 대기 항목

| 묶음 (근거) | 화면 (CID) | 항목 ID | 변경 전 | 변경 후 | 반영 / 이번엔 안 함 / 제외 (바꾸지 않음) |
| --- | --- | --- | --- | --- | --- |
| 1 화면 이름 (IA) | Assay Pack File Details (TI-STN-08-P) | TI-STN-08-P-R01 | 화면 이름 "Assay Pack Setting", Ver 0.4.0 | Assay Pack File Details (IA "Details"), 2.1.ZZ 체계 | 반영 (2026-11-26, 요청자 확인 4: 멈춘 20261125-최고관리자-assay-pack에서 옮김. 화면 이름만, Ver은 케이스 3이라 기존 Ver 그대로) |
| 2 IA (`ia/ia-screens.csv`) | Assay Pack Setting (TI-STN-08) | TI-STN-08-R02 | Import file 팝업 TI-STN-08-01이 IA에 없음 | IA에 추가 | 반영 (2026-11-26, 요청자 확인 2 · 4) |

- 대상 화면에 `대기` 항목 없음. 위 둘은 멈춘 20261125-최고관리자-assay-pack의 `작업 중` 항목을 요청자 확인 4 답대로 이 작업의 `작업 중`으로 옮긴 것(`pending/open.md`)

## 근거

2단계 (2026-11-26). 요건 1 · 경로 분기 기준 8 · 강도 "케이스 3 (다시 그리기)"로 읽음(정책 찾는 길 ① ~ ⑤, Alert · Toast 카탈로그 줄, 권한 · 모드 표). 대상 화면에 `basis` 없음(To-Be 화면 MD 빈 틀). `basis_start` 뒤로 바뀐 정책 · 기준데이터 없음. 요청자 확인 6 답대로 As Is 페이지에 없는 [팝업 정의] · [정책] · [LI-STN-08 / 세부정의]는 Alert 카탈로그 · POL-TST-008 · [TI-STN-08 / 세부정의]로 대신 확인함.

**읽은 자료 목록**

| 요건 | 종류 | 자료 (ID · 파일) | 연결 근거 (왜 이 요건과 관련 있나) | 설계에 씀 (O / -) | 쓰는 화면 · 요소 | 설계에 쓸 규칙 (번호 · 문장, `-`면 쓰지 않는 이유) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 정책 | POL-TST-008 Assay Pack 관리 | ① 정책 `cids`에 TI-STN-08 · TI-STN-08-P · LI-STN-08 · LI-STN-08-P, ③ asis 화면 MD "관련 정책" | O | 다섯 화면 전체 (0번 · #3 · #4 · TI-STN-08-01 #1 · #3) | 규칙 1 "Service일 때만 쓰며, L-IOS는 Main Mode에서 조회만" / 2 "JSON 파일로 … 여러 파일 … JSON이 아니면 Alert_041, 양식이 맞지 않으면 Alert_040 … 아무것도 등록하지 않음" / 3 "같은 File type, Product Name, 버전 … Confirm_028" / 4 "최신 버전이 자동으로 Active … Alert_039" / 5 "File type과 Product Name이 같은 파일 중 하나만 Active" / 6 "Master는 항상 최신 버전이 Active이며 바꿀 수 없음. Pretreatment, Extraction, PCR은 File details에서 Active·Inactive를 바꾸고 [Save] (Confirm_029, Confirm_030)" / 7 "Active 파일은 지울 수 없음 (Alert_042). Inactive 파일은 Confirm_026을 거쳐 지우며, Instrument에 적용된 데이터에는 영향이 없음" |
| 1 | 정책 | POL-TST-010 검사 항목과 조합 검사 | ① 정책 `cids`에 TI-STN-08-P | O | TI-STN-08-P · LI-STN-08-P 패널 · 케이스 예시 값 | 규칙 1 "화면설계서의 예시 값도 이 실제 값(`glossary/test-items.csv`, `glossary/sample-types.csv`)을 씀" |
| 1 | 정책 | POL-ACC-001 User Type과 권한 | ④ POL-TST-008 규칙 1이 가리킴 | - | | (메뉴 · 기능 노출 규칙. 이 메뉴 값은 권한 · 모드 표로 확인) |
| 1 | 기준 자료 | `policy/permission-matrix.csv` Setting · Assay Pack Setting · All | ④ POL-TST-008 `data`, 0번 User Type 확인 | O | 다섯 화면 0번 User Type | Service O · Admin X · User X (2026-10-30 결정, 확정) |
| 1 | 기준 자료 | `policy/client-mode-matrix.csv` Setting · Assay Pack Setting · All | ④ POL-TST-008 `data`, L-IOS 0번 확인 | O | LI-STN-08 · LI-STN-08-P 0번 L-IOS Client Mode | Main Mode O · Console Mode X · MS Mode X |
| 1 | 기준 자료 | `reference/customer/assay-pack/README.md` (씨젠 Assay Pack 명세 R06) | ④ POL-TST-008 · 010 `data` | O | TI-STN-08-P · LI-STN-08-P 패널 항목 · 케이스 | 구조 요약 표(파일 종류별 JSON 키), 예시 값 "100 rxns / set, 96 rxns / tub, 1 ea / rack" |
| 1 | Alert | `alert/alert-catalog.csv` Alert_039 · 040 · 041 · 042 · Confirm_026 · 028 · 029 · 030 | ③ 디스크립션에 나오는 Alert ID, POL-TST-008 `alerts` | O | TI-STN-08 #3, TI-STN-08-P #4, TI-STN-08-01 #1 · #3 | 각 줄의 제목 · 부제 · 버튼 · 버튼 동작 (예: Confirm_026 "Delete the selected files?" / "Deleted file records cannot be restored." / Delete · Cancel → 삭제 & Toast "The selected files have been deleted.") |
| 1 | Alert | `alert/alert-catalog.csv` Alert_045 | POL-TST-008 · 카탈로그 Master 토글 줄 | - | | (사용 화면 없음. Master는 버튼으로 바꿀 수 없어 띄울 곳 없음, DS-0012) |
| 1 | Toast | `alert/toast-catalog.csv` Toast_001 · Toast_002 | 디스크립션 [Delete] Toast, Confirm_026 · 030 버튼 동작 | O | TI-STN-08 #3, TI-STN-08-P #4 | Toast_001 "The selected files have been deleted." (Confirm_026 [Delete]) / Toast_002 "{version} has been deactivated." (Confirm_030 [Deactivate]) |
| 1 | 논의 대상 | DS-0012 (결정, `work` 20261125-최고관리자-assay-pack) | POL-TST-008 · cids TI-STN-08 · TI-STN-08-P | O | TI-STN-08-P #4 [Save] | 결정 "Confirm_029 · Confirm_030 발생 조건을 File Details에서 [Active] / [Inactive]로 바꾸고 [Save]를 선택한 경우로 고치고, Confirm_029 버튼 동작의 'Master는 Alert_045'를 뺌" (다른 작업 기록이 반영하기로 한 결정 → 절차 6 질문 2) |
| 1 | 기준데이터 | `glossary/test-items.csv` GI-B1 | POL-TST-010 규칙 1 | O | TI-STN-08-P · LI-STN-08-P 패널 PCR 예시 | GI-B1 · Allplex™ GI-Bacteria(I) Assay · Allplex_GI-B1_Assay · GI · Target Masking Y · Sh/EI, Cam, Yer, Vib, CdB, Aer, Sal · M9600 O · STARlet O |
| 1 | 기준데이터 | `glossary/sample-types.csv` | POL-TST-010 규칙 1 | O | 패널 Sample Type 예시 | UI 표기 Raw stool · eNAT stool · Fecal swab, 코드 Raw_stool · eNAT_stool · Fecal_swab (코드 칸에는 코드, 이름 칸에는 UI 표기) |
| 1 | 기준데이터 | `glossary/modules.csv` · `module-units.csv` | ⑤ 케이스 패널 Storage Location Info | O | TI-STN-08-P · LI-STN-08-P 케이스 Storage Location Info | Module Code ConsumableStorage · PlateSealing, Unit Code Trolley (ConsumableStorage) · ColdStorage (PlateSealing) 모두 있는 코드명 |
| 1 | 기준데이터 | `glossary/terms.csv` · `glossary.md` | 절차 5 용어 대조 | O | 다섯 화면 디스크립션 | 아래 "용어 목록" |

**관련 자료 없는 영역 · 요소**

| 화면 · 영역 · 요소 | 근거로 삼는 것 |
| --- | --- |
| TI-STN-08 · LI-STN-08 #1 검색 영역 · #2 노출 개수 · #5 Pagination, #4 목록 컬럼 · 정렬 | 기존 UX 화면설계서만 근거 (Common UX는 3단계에서 그리며 읽음) |
| TI-STN-08-01 #2 선택한 파일 목록 | 기존 UX 화면설계서만 근거 ([TI-STN-08 / Import 정의] ① · ②) |
| TI-STN-08-P · LI-STN-08-P #2 선택 Row · 화면 노출 경로 | 기존 UX 화면설계서만 근거 |

**대조**

| 요건 · 화면 · 요소 | 결과 | 근거 | 다음 |
| --- | --- | --- | --- |
| 1 · 다섯 화면 · 0번 User Type | 정책에 있음 | permission-matrix Service만 = asis `user_type: [Service]` | 디스크립션 0번에 POL-TST-008로 이음 |
| 1 · LI-STN-08 · LI-STN-08-P · 0번 L-IOS Client Mode | 정책에 있음 | client-mode-matrix Main Mode만 = asis `client_mode: [Main Mode]` | 같음 |
| 1 · TI-STN-08 #3 · TI-STN-08-01 #1 · #3 Import · Alert | 정책에 있음 | POL-TST-008 규칙 2 ~ 4, Alert_039 · 040 · 041 · Confirm_028 | 정책 ID로 이음 |
| 1 · TI-STN-08 #3 [Delete] Toast 문구 | 정책에 있음 | Confirm_026 버튼 동작 · Toast_001 "The selected files have been deleted." | 뒤 단계용 1 근거로 풀림 |
| 1 · TI-STN-08-P #4 [Delete] Confirm 제목 | 기존 화면이 정책과 다름 | 화면 「Delete the selected file?」 ↔ Confirm_026 「Delete the selected files?」 | C1 |
| 1 · TI-STN-08-P #4 [Delete] Toast 문구 | 기존 화면이 정책과 다름 | 화면 「The file has been deleted.」 ↔ Toast_001 「The selected files have been deleted.」 | C2 |
| 1 · TI-STN-08-P #4 [Save] Confirm_029 · 030 발생 조건 | 논의 대상에 이미 있음 | DS-0012 결정 (다른 작업 기록 `work`) | 절차 6 질문 2 → 이어받아 새 결정대로 그림, C3 |
| 1 · TI-STN-08-P #4 [Save] → Confirm_029 [Activate] 뒤 Toast | 정책에 없음 | Confirm_029 버튼 동작 "& Toast"인데 Toast 카탈로그에 활성 Toast 없음, 화면 #4는 "확인 시 반영"만 | Q2 |
| 1 · TI-STN-08 #4-1 · TI-STN-08-P #3 Master Active 변경 버튼 | 기존 화면끼리 다름 (정책은 "바꿀 수 없음"만) | POL-TST-008 규칙 6 | Q1 |
| 1 · TI-STN-08-P · LI-STN-08-P 패널 · 케이스 예시 값 | 정책에 있음 | POL-TST-010 규칙 1, test-items · sample-types · modules 값과 같음 | 그대로 그림 |

**정책 수정 범위**

없음 (DS-0012는 이미 결정. 정책 문장은 고치지 않고 Alert 카탈로그만 고침)

**용어 목록**

| 원래 표현 | 표준어 | 어디서 | 새 용어면 처리 |
| --- | --- | --- | --- |
| 디폴트 | Default | TI-STN-08 #1-1 · #1-2 · #1-3 · #2 · #3, LI-STN-08 #1-1 · #1-2 · #1-3 · #2, TI-STN-08-P #4 | |
| 팝업 | Popup | TI-STN-08 #1-2 · #3 · #4-1, LI-STN-08 #1-2, TI-STN-08-P #4, TI-STN-08-01 화면 노출 경로 · #1 · #3 | |
| 체크박스 | Checkbox | TI-STN-08 #4, LI-STN-08 #4 | |
| 공통 UX | Common UX | TI-STN-08 #5, LI-STN-08 #5 | |
| 시약 | Reagent | TI-STN-08-P #3, LI-STN-08-P #3, 참조 섹션 유형별 정의 | |
| 바코드 | Barcode | TI-STN-08-P · LI-STN-08-P 참조 섹션 유형별 정의 | |
| 소켓 | Socket | TI-STN-08-P · LI-STN-08-P 참조 섹션 유형별 정의 | |
| 유효기간 | Expiration Date | TI-STN-08-P · LI-STN-08-P 참조 섹션 유형별 정의 | |
| 알림 | Alert | TI-STN-08-P #4 ("삭제 불가 알림") | |
| 장비 | Instrument | TI-STN-08-P #4 ("장비 반영 데이터") | |
| Barcode Scheme Name · Schema Name | Barcode Schema Name | TI-STN-08-P · LI-STN-08-P 케이스 PCR 구성품 Barcode Info, LI-STN-08-P 케이스 Extraction (뒤 단계용 8) | |

## 설계

### 화면별 작업
| T · L 한 쌍 | 따른 케이스 | 요건 번호 | 섹션 | 기획 프레임 | 상태 · 케이스 프레임 |
| --- | --- | --- | --- | --- | --- |
| TI-STN-08 / LI-STN-08 | 3 | 1 | [T 3667:11461](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3667-11461) · [L 3667:11468](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3667-11468) | [T 3670:2367](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3670-2367) · [L 3672:2347](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3672-2347) | 그림 · [TI-STN-08/Case 3672:1148](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3672-1148) (L 케이스 없음) |
| TI-STN-08-P / LI-STN-08-P | 3 | 1 | [T 3667:11462](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3667-11462) · [L 3667:11469](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3667-11469) | [T 3684:1754](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3684-1754) · [L 3689:3388](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3689-3388) | 그림 · [TI-STN-08-P/Case 3686:2704](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3686-2704) · [LI-STN-08-P/Case 3694:15541](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3694-15541) |
| TI-STN-08-01 / (짝 없음) | 3 | 1 | [T 3667:11463](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3667-11463) | [T 3702:4732](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3702-4732) | 그림 · [TI-STN-08-01/Case 3703:4893](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3703-4893) |

### 컴포넌트 없이 그린 요소
| 요소 이름 (종류) | 하는 일 | 쓴 곳 (CID · 디스크립션 번호) | 어디서 (후보 ID / 신규로 만듦 / 기존 화면에서 따옴) | 원본 요약 (기존 화면에서 따옴만: 크기 · 모서리 · 줄 × 칸 · 도형 · 글자 · 인스턴스) | Figma 링크 |
| --- | --- | --- | --- | --- | --- |
| 콘텐츠 영역 바탕 (사각형) | 화면 콘텐츠 영역 바탕 | TI-STN-08 · LI-STN-08 (이후 화면 같음) | 기존 화면에서 따옴 | 1701×988, 모서리 0, #E9EDF4, 도형 1 · 글자 0 · 인스턴스 0 | [3670:2367](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3670-2367) |
| 화면 제목 (글자) | 화면 이름 표시 | TI-STN-08 · LI-STN-08 | 기존 화면에서 따옴 | 글자 1 「Assay Pack Setting」 Inter Bold 24 #000000 | 같음 |
| 검색 영역 틀 (영역 틀) | 검색 조건 바탕 | TI-STN-08 · LI-STN-08 #1 | 기존 화면에서 따옴 | 1639×68, 모서리 0, #FFFFFF (안의 조회 조건 · 버튼은 Common UX) | 같음 |
| Items 줄 틀 (영역 틀) | Items · 노출 개수 · 버튼 바탕 | TI-STN-08 · LI-STN-08 #2 | 기존 화면에서 따옴 | 1639×56, #FFFFFF, 글자 2 (Items Inter Regular 14 · 24 Inter Bold 14) | 같음 |
| 목록 틀 (영역 틀) | 목록 · Pagination 바탕 | TI-STN-08 · LI-STN-08 #4 · #5 | 기존 화면에서 따옴 | 1639×730, #FFFFFF (안의 표 · Pagination은 Common UX) | 같음 |
| Details 아이콘 (아이콘) | Row 상세 열기 | TI-STN-08 · LI-STN-08 #4-2 | 기존 화면에서 따옴 | 원본 인스턴스 `Name=KB-A-right, Size=16`(원본 라이브러리) 20×20, 셀 가운데. Table/Cell에 아이콘 Variant가 없어 셀 위에 따로 둠 | 같음 |
| File details 패널 바탕 (사각형) | 목록 위에 겹친 상세 패널 바탕 | TI-STN-08-P · LI-STN-08-P #3 (Case 1-1 ~ 4-1 패널 같음) | 기존 화면에서 따옴 | 811×802, 모서리 0, #FFFFFF, 도형 1 · 글자 0 · 인스턴스 0 (As Is 3288:235780 · 3288:238772) | [3684:1754](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3684-1754) |
| File details 머리 줄 (영역 틀) | 패널 제목 · [닫기] | TI-STN-08-P · LI-STN-08-P #3 · #3-1 | 기존 화면에서 따옴 | 811×48, #FFFFFF, 글자 1 「File details」, 인스턴스 1 `Interface/Close` (As Is 3288:235781) | 같음 |
| 패널 스크롤 막대 (사각형 2) | 패널 안 스크롤 위치 | TI-STN-08-P · LI-STN-08-P #3 | 기존 화면에서 따옴 | 트랙 4×673(L 4×728) #EEF1F5 모서리 2 · 손잡이 4×278(L 4×325) #ADB5BD 모서리 2 (As Is 3288:235994 · 235995 / 3288:238984 · 238985) | 같음 |
| Case 조각 바탕 · 안내 문구 (영역 틀 · 글자) | 데이터 없음 조각 | TI-STN-08/Case 1-1 · 1-2 | 기존 화면에서 따옴 | 1657×326 #E9EDF4, 안내 문구 Inter Regular 14 가운데 (「No files found.⏎Click Import to add a file.」 · 「No results found.」), 원본에 번호 표시 없음 | [3672:1148](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3672-1148) |
| Import file Popup 틀 (영역 틀) | Popup 바탕 · Header · Body · Footer | TI-STN-08-01 0 · #3 (Case 1-1 · 1-2 같음) | 기존 화면에서 따옴 (Common UX Basic Popup은 PC 컴포넌트 없음, 프레임으로 그림) | 520×490(파일 3개, 선택 전 325), 모서리 6, #FFFFFF, Header 520×58 (제목 「Import file」 Inter Bold 18 #1F2329 · ✕) · Body 520×363 (간격 16, 여백 0 · 24 · 20 · 24) · Footer 520×69 (위 선 #EEF1F5, 버튼 2) (As Is 3288:237441). ✕ · 버튼은 Interface/Close · Square로 그림(C11) | [3702:4879](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3702-4879) |
| 파일 영역 (영역 틀) | 끌어놓기 · 파일 선택 | TI-STN-08-01 #1 | 기존 화면에서 따옴 | 472×178, 모서리 6, #F6F7F9, 점선 #C5CCD5 1, 도형 1(아이콘 원 36×36 #E7F7F6 모서리 18), 글자 3 (「↑」 Inter Bold 18 #0B8580 · 「Drag and drop files here, or」 Inter Medium 14 · 「json · Multiple files」 Inter Regular 12 #838C96), 버튼 1 (원본 직접 그린 버튼 → Square Outlined M, C11) (As Is 3288:237446) | 같음 |
| 선택한 파일 줄 (목록 줄) | 고른 파일 · [✕] 빼기 | TI-STN-08-01 #2 (Case 1-2 같음) | 기존 화면에서 따옴 (Interface/Close로 바꿀 여지: 줄 끝 [✕]) | 472×39 × 3줄, 모서리 4, 선 #DEE2E7 1, 글자 4 (「▤」 Inter Regular 14 #0B8580 · 파일명 Inter Medium 14 · 용량 Inter Regular 12 #838C96 · 「✕」 Inter Regular 13 #5F666E), 인스턴스 0 (As Is 3288:237453 · 237459 · 237465) | 같음 |
| Case 조각 바탕 (영역 틀) | Case Popup 조각 바탕 | TI-STN-08-01/Case 1-1 · 1-2 | 기존 화면에서 따옴 | #E9EBF0, 모서리 0, Popup 하나씩 담음 (원본은 두 Popup을 한 바탕 1657×610에 담음, 화면 MD 1-1 · 1-2로 나눠 조각마다 600×(Popup+80)), 원본에 번호 표시 없음 (As Is 3288:240946) | [3703:4893](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3703-4893) |
| Sample Type Info 표 (맞는 Variant 없음, Card/Table Item 최대 10 · 행 14) | Master 파일의 Sample Type 목록 | TI-STN-08-P/Case · LI-STN-08-P/Case Case 1-1 (디스크립션 3) | 기존 화면에서 따옴 | 묶음 760×609 세로 간격 20 = 제목 135×19 (「Sample Type Info」 Inter Bold 16 #1F2329) + 표 760×570 모서리 4 선 #DEE3E8 1, 머리 줄 758×36 #F7F8FA (글자 3 Inter Bold 12 #5F666E) + 줄 14 × 758×38 (칸 3, 글자 Inter Regular 14 #1F2329), 글자 46 · 인스턴스 0 (As Is 3288:236956). 마침 점검에서 제목이 빠진 것을 찾아 원본 묶음대로 고침 | [T 3711:16351](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3711-16351) · [L 3711:16354](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3711-16354) |
| Active · Inactive 태그 (영역 틀 · 글자) | 활성 여부 표시 | TI-STN-08 · LI-STN-08 #4-1, TI-STN-08-P · LI-STN-08-P 배경 목록 | 기존 화면에서 따옴 (Q6 답, 2026-11-26. Status Base Navy · Gray에서 바꿈) | Active 46×17 #1F2329 모서리 2 여백 6 · 2, 글자 Inter Semi Bold 11 #FFFFFF / Inactive 55×17 #E9ECEF, 글자 #5F6B7A (As Is 3288:235233 · 3288:235313) | [3670:2367](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3670-2367) |

### 근거로 풀린 것
| 질문 | 푼 근거 |
| --- | --- |

### 찾은 것
- 규칙에 없어 판단한 곳: As Is 페이지에 없는 [TI-STN-08 / 팝업 정의] · [TI-STN-08 / 정책] · [Import 정의] 5 · 7을 가리키던 디스크립션 참고는 옮기지 않고 코드(Alert · Confirm · Toast) · `정책 참고 : POL-TST-008`로 대신함 (요청자 확인 6)
- 규칙에 없어 판단한 곳: TI-STN-08-P · LI-STN-08-P 원본 케이스(파일 종류별 패널 네 장)에 Case 번호가 없어 원본 순서대로 Case 1 Master · 2 Pretreatment · 3 Extraction · 4 PCR로 매김. [TI-STN-08-P 유형별 정의] 프레임 글은 디스크립션 3 「파일 종류별 노출 항목」 · 「표기」로 옮김
- 규칙에 없어 판단한 곳: TI-STN-08 [세부정의] 1-1 · 1-2를 TI-STN-08/Case > Case 1(제목 「세부정의」)로, [TI-STN-08 / Import 정의] ① · ②를 TI-STN-08-01/Case > Case 1로 옮김
- 규칙에 없어 판단한 곳: 원본 디스크립션의 번호 없는 「화면 노출 경로」 블록(TI-STN-08-P · LI-STN-08-P · TI-STN-08-01)은 0번 동작으로 옮김
- 규칙에 없어 판단한 곳: As Is 기획 진행 표시(옛 컴포넌트)에 진행 상태 글이 없고 날짜 「26.03.25」만 있어, 날짜는 그대로 옮기고 진행 상태는 `작업 중`으로 둠. As Is 업데이트 메모(v2.1.18 update, 모듈명칭 변경)는 TI-STN-08-P · LI-STN-08-P의 케이스 프레임 · 유형별 정의 프레임 옆에 있어 TI-STN-08-P · LI-STN-08-P 메모로 옮김 (TI-STN-08 · LI-STN-08 · TI-STN-08-01 원본에는 메모 없음)
- TI-STN-08-01은 `공통 3-9`대로 배경 목록 없이 Dim 위에 Popup만 그림 → 뒤 단계용 7(배경 목록 Master 줄 · Active 값)은 그리지 않아 풀림. TI-STN-08-P는 목록 위에 겹치는 패널이고 목록 버튼이 보이는 화면이라 배경 목록을 그대로 그림
- 규칙에 없어 판단한 곳: TI-STN-08-01 Dim은 원본(LNB 오른쪽 218부터)과 달리 화면 영역 전체(1920×1031)에 깖 — 배경 목록 · 메뉴를 그리지 않고 디스크립션 0 「배경(목록 · 메뉴) Dim」대로. Case 1-1 · 1-2 설명 글은 원본 조각 아래 글(①·②)에 글머리 기호가 없어 글머리 없이 씀, Popup 두 장은 원본처럼 옆으로 나란히 둠
- 3단계 다 그린 뒤(공통 3-1): 메뉴 단위 표시 너비 8761(T 섹션 줄 0 ~ 8761, 8000 넘음, T · L 같음) · L-IOS 줄 y 14023(T 줄 가장 긴 섹션 TI-STN-08-P 아래 끝 12023 + 2000) 그대로 맞음 (2026-11-26 확인)
- 규칙에 없어 판단한 곳 (용어 점검): TI-STN-08 #4-1 제목 「Active (표시 전용)」은 조작 없이 값만 보이는 요소라는 뜻이라 「노출」로 바꾸지 않음. 「기간 유형」 · 「Pagination 유형」의 「유형」은 케이스 뜻이 아니고, 「공통 UX 참고 :」는 용어집이 허용한 참고 줄 형식이라 그대로 둠
- 마침 점검(2026-11-26 다섯 번째 세션)에서 고친 것: ① TI-STN-08-P/Case · LI-STN-08-P/Case Case 1-1의 Sample Type 표에 원본 제목 「Sample Type Info」가 빠져 있어 원본 묶음(제목 + 표, 간격 20)대로 되살림 → 패널 · Case 1-1 조각 · 케이스 프레임 · 섹션을 39px 늘리고 뒤 조각을 내림, T 줄 가장 긴 섹션이 길어져 L-IOS 줄(시스템 구분 · 진행 표시 · 섹션)을 39px 내려 2000px 간격 유지(y 14062) (검사 3 · 14) ② TI-STN-08-P · LI-STN-08-P 목록 틀이 1639×730으로 원본(1639×746)과 달라 원본 크기로 맞춤 (검사 14) ③ 네 기획 프레임(TI-STN-08 · LI-STN-08 · TI-STN-08-P · LI-STN-08-P) LNB 선택 메뉴 「Assay Pack Setting」(Inter Bold 14)이 말줄임으로 잘려 컴포넌트를 떼지 않고 글 상자를 글자 너비로 바꿈 (검사 11, 공통 3-10 ①) ④ TI-STN-08-P · LI-STN-08-P 화면 표기 글자 표에 배경 목록(TI-STN-08 · LI-STN-08 화면) 글자 19 · 18개가 빠져 있어 더함 (검사 3)
- 규칙에 없어 판단한 곳 (마침 점검): TI-STN-08-01 케이스 블록 「디스크립션 번호 : 1, 2, 3」인데 `케이스 참고` 줄은 #3에만 있음. 케이스 블록 · Figma Case · 참고 줄은 1:1로 맞아 검사 5는 통과로 보고 그대로 둠

- 4단계 Q 답 반영(2026-11-26)에서 패널 글이 늘어 TI-STN-08-P 기획 프레임 1582 → 1666(케이스 프레임 · 섹션 84px 내림 · 늘림, T 줄 가장 긴 섹션이 길어져 L-IOS 줄을 84px 내려 2000px 간격 유지, y 14146), LI-STN-08 기획 프레임 1374 → 1386(섹션 12px 늘림)으로 맞춤. 패널 행 글은 플러그인 채우기(새 행 만들기)가 아니라 있는 행에 줄만 더하는 일이라 use_figma로 고침
- 4단계 절차 1번 순서 4 기계 검사(2026-11-26, 고친 화면 TI-STN-08 · LI-STN-08 · TI-STN-08-P · LI-STN-08-P · TI-STN-08-01과 케이스 프레임): 통과. 바로 고친 것: LI-STN-08-P 패널(1062)이 기획 프레임(1038)보다 길어 프레임을 1062로 늘리고 케이스 프레임 · 섹션을 24px 내림 · 늘림 (검사 11). 케이스 3이라 기획 진행 표시는 바꾸지 않음 (절차 1번 순서 5)

### 용어 치환
| 원래 표현 | 표준어 | 위치 |
| --- | --- | --- |
| 표시 (보여 준다는 뜻) | 노출 | TI-STN-08 #4 Checkbox 「일부 선택 시 Mix 노출」, TI-STN-08-P · LI-STN-08-P 케이스 Master 「Product Name은 「Master Info」로 노출」 (화면 MD · Figma) |
| 체크박스 | Checkbox | TI-STN-08 화면 정보 T/L 차이 · #4 텍스트 정렬 · #4 머리, LI-STN-08 화면 정보 T/L 차이 · #4 (2단계 용어 목록에 있으나 화면 MD에 남아 있었음, 화면 MD · Figma) |
| 시약 | Reagent | TI-STN-08-P · LI-STN-08-P #3 · 파일 종류별 노출 항목 · 케이스 (2단계 용어 목록에 있으나 남아 있었음, 화면 MD · Figma) |
| 유효기간 | Expiration Date | TI-STN-08-P · LI-STN-08-P 파일 종류별 노출 항목 Master (같음) |
| 소켓 | Socket | TI-STN-08-P 파일 종류별 노출 항목 PCR 구성품 (같음) |

## 질문 대기

| 번호 (Q) | 질문 | 관련된 곳 (CID · 디스크립션 번호) | 논의 대상 | T · L 같음 | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- | --- |
| Q1 | Master 파일 Active 변경 버튼 모습 (TI-STN-08 #4-1 「상세에 변경 버튼 미노출」 ↔ TI-STN-08-P #3 「[Active] · [Inactive] 버튼 비활성」, POL-TST-008 규칙 6은 바꿀 수 없음만) | TI-STN-08 #4-1 · TI-STN-08-P #3 | | T만 (L-IOS는 보기만) | 2026-11-26 · 상세에 버튼 미노출 (TI-STN-08 #4-1대로, C12. Figma Case 1-1은 이미 버튼 없음) |
| Q2 | Confirm_029 [Activate] 뒤 Toast 노출 여부 · 문구 (카탈로그 버튼 동작 「& Toast」, Toast 카탈로그에 없음) | TI-STN-08-P #4 | | T만 | 2026-11-26 · Toast 노출 안 함, Confirm만 (C13) |
| Q3 | 파일을 고른 채 Import file Popup을 [X] · ESC · [Cancel]로 닫을 때 다시 묻는지 (Alert 카탈로그에 없음) | TI-STN-08-01 화면 노출 경로 · #3 | | T만 | 2026-11-26 · Confirm으로 다시 물음, Confirm_031 카탈로그에 추가 (C14) |
| Q4 | Active · Inactive를 바꾸고 [Save] 없이 [닫기] · 다른 Row [Details]를 누를 때 다시 묻는지 (Alert 카탈로그에 없음) | TI-STN-08-P #2-1 · #3-1 | | T만 | 2026-11-26 · 묻지 않고 바꾼 값 버림 (C15) |
| Q6 | Status Base에 맞는 Variant가 없어 Active는 Navy, Inactive는 Gray로 그림 (기존 Active 태그 검정, Active · Inactive는 상태값 표에 없음) | TI-STN-08 #4-1 · LI-STN-08 #4-1 (상세 패널 · 케이스의 Active 태그도 같음) | | 같음 | 2026-11-26 · 기존 스타일대로: 기존 원본 태그(Active #1F2329 · Inactive #E9ECEF)로 바꿔 그림 (기존과 같아져 변경 확인 없음, "컴포넌트 없이 그린 요소") |
| Q5 | L-IOS 등록된 파일 없음 · 검색 결과 없음 문구 ([LI-STN-08 / 세부정의]가 As Is 페이지에 없음, T-IOS 「Click Import to add a file.」은 [Import]가 없는 L-IOS에 맞지 않음) | LI-STN-08 #1-4 | | 다름 | 2026-11-26 · 등록된 파일 없음은 「No files found.」만, 검색 결과 없음은 T-IOS(TI-STN-08 Case 1-2)와 같게 「No results found.」 (C16) |

## 변경 확인

| 번호 (C) | 기존 화면 | 바꿔 그린 것 | 관련된 곳 (CID · 디스크립션 번호) | 근거 | T · L 같음 | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C1 | [Delete] 확인 Confirm 제목 「Delete the selected file?」 | Confirm_026 제목 「Delete the selected files?」로 | TI-STN-08-P #4 | (alert-catalog.csv Confirm_026) | T만 | O | 맞음 (2026-11-26) |
| C2 | [Delete] 뒤 Toast 「The file has been deleted.」 | Toast_001 「The selected files have been deleted.」로 | TI-STN-08-P #4 | (toast-catalog.csv Toast_001, Confirm_026 버튼 동작) | T만 | O | 맞음 (2026-11-26) |
| C4 | 노출 개수 Dropdown (10 · 30 · 50 · 100 items) | 노출 개수 Dropdown 지움, 10 items 고정 (Common UX Basic Table: L-IOS 노출 개수 고정) | LI-STN-08 #2 | COMM-5-g | L만 | O | 맞음 (2026-11-26) |
| C5 | Pagination 「COMM-5-i 정의 참고 (10개 단위)」 | Pagination 유형 Type 1 Number를 적음 (화면에 보이는 번호 페이지) | TI-STN-08 #5 · LI-STN-08 #5 | 기존 화면 · COMM-5-l | 같음 | - | 맞음 (기존 화면, 2026-11-26) |
| C6 | 정렬 「등록 일시 최신순」만 | 정렬 가능한 컬럼 항목 Active를 적음 (화면 Active 머리의 정렬 아이콘) | TI-STN-08 #4 · LI-STN-08 #4 | 기존 화면 · COMM-5-r | 같음 | - | 맞음 (기존 화면, 2026-11-26) |
| C7 | 화면 이름 「Assay Pack Setting」 (패널 화면 정보 · 경로 File details) | 「Assay Pack File Details」, 경로 Setting > Assay Pack Setting > Details (TI-STN-08-P-R01, 뒤 단계용 5) | TI-STN-08-P · LI-STN-08-P 화면 정보 | IA (`ia/ia-screens.csv`) | 같음 | - | 맞음 (2026-11-26) |
| C8 | PCR 구성품 Barcode Info 머리 「Barcode Scheme Name」, LI-STN-08-P Extraction 머리 「Schema Name」 | 「Barcode Schema Name」 (뒤 단계용 8) | TI-STN-08-P · LI-STN-08-P Case | 2단계 용어 목록 | 같음 | - | 맞음 (오타, 2026-11-26) |
| C9 | Active only 체크박스 Square 모양 | Circle Checkbox (Common UX Search Area 조회 조건 체크박스) | TI-STN-08 #1-3 · LI-STN-08 #1-3 | COMM-5-p | 같음 | O | 맞음 (2026-11-26) |
| C10 | File details 정보 묶음 (기존 원본 글 · 표 묶음) | Common UX List Card · Table Card · Outline Container Tab으로 다시 그림 | TI-STN-08-P #3 · LI-STN-08-P #3 (Case 1-1 ~ 4-1 같음) | COMM-5-e · COMM-5-s | 같음 | O | 맞음 (2026-11-26) |
| C11 | Popup 닫기 「✕」 글자, [Select files] · [Cancel] · [Import] 직접 그린 버튼 (Import 청록 #12B5AE) | Interface/Close · Square (Outlined M · Filled M, 높이 36은 원본대로) | TI-STN-08-01 0 · #1 · #3 (Case 1-1 · 1-2 같음) | COMM-5-m (Basic Popup: 닫기 Interface/Close, 하단 버튼 Square) | T만 | O | 맞음 (2026-11-26) |
| C3 | Confirm_029 · 030 발생 조건 (Alert 카탈로그 기존 조건) | DS-0012 결정대로 File Details에서 Active · Inactive를 바꾸고 [Save]를 누를 때 Confirm_029 · 030을 띄움 (다른 작업의 결정을 따름, 멈춘 20261125-최고관리자-assay-pack에서 이어받음, 이 작업 5단계 완료 때 카탈로그 반영 전) | TI-STN-08-P #4 | DS-0012 | T만 | O | 맞음 (2026-11-26) |
| C12 | Master 파일 [Active] · [Inactive] 버튼 비활성 (변경 불가) | 버튼 미노출 (변경 불가) | TI-STN-08-P #3 | Q1의 답 | T만 | O | 맞음 (2026-11-26) |
| C13 | Confirm_029 [Activate] 뒤 Toast (카탈로그 버튼 동작 「& Toast」) | Toast 미노출, Confirm만 | TI-STN-08-P #4 | Q2의 답 | T만 | O | 맞음 (2026-11-26) |
| C14 | 파일을 고른 채 [X] · ESC · [Cancel] 선택 시 바로 닫힘 | Confirm_031로 다시 물음 (Discard 시 닫힘 / Cancel 시 Popup · 선택 유지) | TI-STN-08-01 0 · #3 | Q3의 답 | T만 | O | 맞음 (2026-11-26) |
| C15 | [Save] 없이 [닫기] · 다른 Row [Details] 선택 시 동작 정의 없음 | 묻지 않고 바꾼 값 버림 | TI-STN-08-P #2-1 · #3-1 | Q4의 답 | T만 | O | 맞음 (2026-11-26) |
| C16 | 등록된 파일 없음 · 검색 결과 없음 문구 정의 없음 | 「No files found.」 · 「No results found.」 | LI-STN-08 #1-4 · #4 | Q5의 답 (검색 결과 없음 문구는 TI-STN-08 Case 1-2) | L만 | O | 맞음 (2026-11-26) |

## 검토 질의

## 언어셋

## 요청자 확인

| # | 생긴 날 | 단계 · 절차 (질문 번호 또는 `예외`) | 물은 것 | 관련된 곳 (CID · 디스크립션 번호 · Language ID) | 답을 받을 때까지 둔 모습 (예외 질문만) | 답 (날짜) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-11-26 | 1단계 · 시작 전 (Workbench 겹침 확인) | Assay Pack Setting 다시 그리기를 진행 중인 작업 기록 20261125-최고관리자-assay-pack으로 이어 할지, 새 작업으로 처음부터 할지 | TI-STN-08 · LI-STN-08 · TI-STN-08-P · LI-STN-08-P · TI-STN-08-01 | | 새 작업으로 시작 (1단계부터 처음부터 다시 그림) (2026-11-26) |
| 2 | 2026-11-26 | 1단계 · 절차 5 질문 5 | Import file 팝업 (TI-STN-08-01, IA에 없음)도 이번 작업에 넣을지 (TI-STN-08 #3 [Import]가 엶. 넣으면 IA에는 5단계에 더함) | TI-STN-08 #3 · TI-STN-08-01 | | 넣음 (2026-11-26) |
| 3 | 2026-11-26 | 1단계 · 절차 4 (asis 추출 빠짐) | asis 화면 MD가 요청 글의 원본(같은 파일 「Setting  Ⓛ / Ⓣ_As Is」 페이지)이 아니라 기존 작업방 파일에서 옮긴 것이고, 디스크립션이 가리키는 세부정의 · 팝업 정의 · Import 정의 · 정책 · 유형별 정의 프레임 내용(참조 섹션)이 없음. As Is 페이지에서 다시 추출한 뒤 진행할지 | TI-STN-08 #1-4 · #3 · #4-1, LI-STN-08 #1-4, TI-STN-08-P #3 · #4, LI-STN-08-P #3, TI-STN-08-01 #1 · #3 | | As Is 페이지에서 다시 추출한 뒤 진행 (2026-11-26) |
| 4 | 2026-11-26 | 1단계 · 절차 2 순서 6 (겹침) | 진행 중인 20261125-최고관리자-assay-pack을 멈춤으로 두고, 그 작업이 만든 To-Be 화면 MD 다섯 개 · To Be 페이지 섹션을 이번에 처음부터 다시 쓸지, 그 작업의 반영 대기 TI-STN-08-P-R01 · TI-STN-08-R02를 이 작업으로 옮길지 | TI-STN-08 · LI-STN-08 · TI-STN-08-P · LI-STN-08-P · TI-STN-08-01, TI-STN-08-P-R01 · TI-STN-08-R02 | | 멈춤으로 두고 결과물(To-Be 화면 MD · To Be 페이지 섹션)을 처음부터 다시 씀, 반영 대기 두 항목은 이 작업으로 (2026-11-26) |
| 5 | 2026-11-26 | 1단계 · 절차 5 질문 7 | 위 요건 목록(요건 1 · 경로 분기 기준 8 · 케이스 3)과 흐름(1 → 2 → 3 → 4 → 5)대로 진행할지 | 요건 1 | | 이대로 진행 (2026-11-26) |
| 6 | 2026-11-26 | 1단계 · 절차 4 (asis 추출 빠짐) | 디스크립션이 가리키는 [TI-STN-08 / 팝업 정의] · [TI-STN-08 / 정책] · [LI-STN-08 / 세부정의] 프레임과 [TI-STN-08 / Import 정의] 5 · 7번이 As Is 페이지에 없음. 2단계에서 Alert 카탈로그 · POL-TST-008 · [TI-STN-08 / 세부정의]로 대신 확인하고 넘어갈지, 원본 프레임을 As Is 페이지에 옮겨 둔 뒤 다시 추출할지 | TI-STN-08 #1-4 · #3 · #4-1, LI-STN-08 #1-4, TI-STN-08-P #4, TI-STN-08-01 #1 · #3 | | 2단계에서 Alert 카탈로그 · POL-TST-008로 대신 확인, 2단계로 넘어감 (2026-11-26) |
| 7 | 2026-11-26 | 2단계 · 절차 6 질문 2 | DS-0012(Confirm_029 · 030 발생 조건을 File Details [Save]로) 결정을 멈춘 작업 기록 20261125-최고관리자-assay-pack이 반영하기로 되어 있음. 이 작업이 이어받아 새 결정대로 그리고 5단계에 반영할지, 기다릴지 | TI-STN-08-P #4 · DS-0012 | | 이 작업이 이어받아 새 결정대로 그림, 3단계로 넘어감 (2026-11-26) |

## 이 작업의 논의 대상

| 논의 대상 | 상태 (논의 중 / 결정) | 내용 한 줄 | 5단계 반영 |
| --- | --- | --- | --- |
| DS-0012 | 결정 | Confirm_029 · 030 발생 조건을 File Details [Save]로 (POL-TST-008 규칙 6). 멈춘 20261125-최고관리자-assay-pack에서 이어받음 (2026-11-26, `work` 고침) | O (Alert 카탈로그) |

## 이 작업이 남긴 것

- 다른 화면의 반영 대기 항목:
- 고친 카탈로그 줄: Confirm_031 추가 (Import file Popup에서 파일을 고른 채 닫을 때, 사용 화면 TI-STN-08-01, Q3 답, 2026-11-26). Confirm_029 버튼 동작의 「& Toast」 지움은 Q2 답으로 정함 - 5단계 DS-0012 반영(Confirm_029 발생 조건) 때 같은 줄에 함께 고침
