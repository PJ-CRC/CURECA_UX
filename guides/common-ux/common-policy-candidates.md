# Common UX 정리 목록 (가이드 번호표 · 공통 정책 후보)

> 상태: 목록 v0.2 (2026-11-05). B안으로 다시 정리함: 가이드에 있는 규칙은 공통 정책으로 옮기지 않고 디스크립션에서 가이드 번호(COMM ID)로 바로 잇고, 공통 정책(POL-COM)에는 가이드에 없거나 우리가 다르게 정한 것만 씁니다(`rules/screen-spec.md` 8절, `rules/policy-writing.md` 5절). Common UX 가이드는 한 벌만 둡니다(2026-11-05 사용자 결정). 팀 프로그램의 "가이드 적용"은 모바일 작업처럼 다른 가이드로 바꿔 쓸 때를 위한 범용 기능이며, 같은 대상(PC 화면)의 Common UX를 두 벌로 나누지 않습니다.

## 읽은 자료

- **원본 (2026-11-05 사용자 결정):** Common UX의 원본은 팀 프로그램 UX 문서 › UX가이드에서 "적용"한 가이드 문서(MD)입니다. Figma Common UX 페이지는 가이드를 고친 뒤 반영하는 결과물입니다. 아래 "5장 기준은 Common UX - PC"는, 적용된 가이드의 5장(번호 · 이름 · 내용)을 Common UX - PC에 맞춰 고친다는 뜻으로 읽습니다.
- 팀 프로그램 저장소의 "CURECA UX 가이드" (`.history/guides/g20261028-brex-06-J003/guide.md`, 이상헌, 2026-10-28 작성 · 2026-10-30 판 반영). 기준 Figma는 UX AI TEST › SH.L TEST › Connon UX(`1115-92103`)이고 COMM-0 ~ COMM-5를 옮긴 것입니다.
- **Figma 두 곳과 비교 (2026-11-04, 글자 단위):** `sources.md`의 기준 출처 DY common UX(`355-53300`, 지금 페이지 이름 "Common UX - PC")와 가이드가 옮긴 SH.L TEST › Connon UX(`1115-92103`)는 둘 다 Revision History가 V2.2.00 (26/10/30)입니다.
  - **1~4장(Overview · Navigation · Layout · Writing)은 같습니다.** 14개 프레임 글이 모두 같고, Connon UX의 COMM-4-a(3/4)에 "Idle" 글자 하나가 더 있을 뿐입니다. 이 목록의 1 · 2절 중 1~4장에서 온 것은 그대로 씁니다.
  - **5장(Component)은 번호 · 이름 · 일부 내용이 다릅니다.** Common UX - PC는 23개(5-a ~ 5-w: Breadcrumb · Data Table · Info Box · Label · Progress Bar · Tab · Text Field · Tool Tip …), Connon UX는 21개(5-a ~ 5-u: Badge · Table · Text Input · Tooltip · Progress Step · Tab …)입니다. 내용 차이: Button(PC에 Floating Button), Popup(1/4)(PC에만 "팝업 위에 새 팝업을 띄우면 먼저 연 팝업은 아래에 두고 Dim 한 겹 더함"), Selection Controls(Check Box · Switch / Checkbox · Toggle Switch), Tab(Underline Tab / Line Tab, 크기 다름), Breadcrumb · Info Box(PC에만).
  - **가이드는 둘 다와 다릅니다.** 가이드는 "10-30 판에서 Tab이 빠져 20개(5-a ~ 5-t)"라고 적었지만 Figma 두 곳 모두 Tab이 있습니다. 그래서 가이드 안의 번호(5-p Table 등)와 Accordion "5-s Table", Scroll Bar "COMM-5-q Table" 참조가 서로 맞지 않습니다. Figma 안에서는 각자 맞습니다(PC는 5-g Data Table, Connon UX는 5-q Table).
  - **5장 기준은 Common UX - PC로 정함 (2026-11-04 사용자 결정).** 아래 2절의 컴포넌트 번호는 Common UX - PC 번호입니다: 5-a Accordion · 5-b Breadcrumb · 5-c Button · 5-d Calendar · 5-e Card · 5-f Chips · 5-g Data Table · 5-h Dropdown · 5-i Info Box · 5-j Label · 5-k Loading · 5-l Pagination · 5-m Popup · 5-n Progress Bar · 5-o Scroll Bar · 5-p Search Bar · 5-q Selection Controls · 5-r Sorting · 5-s Tab · 5-t Text Input(Figma 이름 Text Field) · 5-u Toast · 5-v Tooltip(Figma 이름 Tool Tip) · 5-w Validation Check. 이름은 용어집 표준어로 씁니다(3절 9번).
  - 가이드(Connon UX 기준)에서 옮긴 2절 규칙 중 Common UX - PC와 내용이 다른 것은 PC 내용으로 고쳤습니다: 팝업(9번)에 팝업 위 새 팝업 규칙, 스크롤(15번)의 Floating Button, 선택(14번)의 Check Box 형태.

## 1. 이미 저장소에 옮긴 것 (다시 분석하지 않음)

| Common UX | 저장소 |
| --- | --- |
| COMM-4-a(2/4) 장비 통합 상태값 · 상태 전환 | `glossary/status-values.csv`, `policy/integrated-state-transitions.csv`, `policy/equipment-states.md`, POL-EQP-001 · 002 |
| COMM-4-a(2/4) 구동 컨트롤러(Initialize · Stop · Run · Quick Start) | POL-EQP-003 |
| COMM-4-a(2/4) 도어 잠금 해제 | POL-EQP-004 · 008 |
| COMM-4-a(3/4) Module · Unit 상태값, Unit 구성 | `glossary/status-values.csv`, `glossary/module-units.csv` |
| COMM-4-a(4/4) Sample · Plate · 배치 · 재고 · 시약 만료 · 이벤트 상태값 | `glossary/status-values.csv`, POL-INV-003 · 004, POL-EVT |
| COMM-4-b(1/5 ~ 5/5) 소모품 · 시약 분류 · 정렬 · 수량 표기 | POL-INV-001 · 002 · 007, `glossary/consumables.csv`, `glossary/pcr-reagents.csv`, `glossary/glossary.md` |
| COMM-3-a(1/2) 종료 버튼, Profile · Logout | POL-ACC-004 · 009 |
| COMM-3-a(2/2) 모드별 LNB · 기능 | `policy/service-mode.md`, `policy/service-mode-matrix.csv` |
| COMM-5-j(4/4) Alert · Confirm 상태 | `policy/alert-catalog.md` |

## 2. 가이드 항목 번호표 (디스크립션은 COMM ID로 바로 잇음)

"화면에서 정할 것"은 Common UX가 화면설계서(SB)에 맡긴 값입니다. 이 값은 공통 정책에 넣지 않고 디스크립션에 꼭 적습니다(`rules/screen-spec.md` 8절 "요소별 필수 항목").

| # | 묶음 | 가이드 번호 | 가이드 규칙 (요약) | 화면에서 정할 것 (디스크립션에 적음) | 공통 정책이 필요한 것 (가이드에 없거나 다르게 정함) |
| --- | --- | --- | --- | --- | --- |
| 1 | 날짜 · 시간 표기 | COMM-4-a(1/4), 5-d | 모든 시각은 장비 기준(3절 6번). `YYYY-MM-DD hh:mm`, `YYYY-MM-DD`, 기간 `YYYY-MM-DD ~ YYYY-MM-DD`, `hh:mm`. 좁으면 `YY` 허용, 기간은 Day 생략 가능. 달력 제목 `YYYY.MM`, 월 기간 `YYYY-MM ~ YYYY-MM` | 좁은 영역에서 줄인 형식을 쓸지 | 장비 기준 시간대(3절 6번), 초 단위가 필요한 곳(질문) → **공통 정책** |
| 2 | 목록 노출 순서 · 문자열 정렬 | COMM-4-a(1/4), 4-b(1/5) | 검사 항목은 약어 알파벳 오름차순, 검체 유형은 풀네임 알파벳 오름차순, 소모품 → 시약, 문자열은 대소문자 무시 · 숫자는 문자로 비교 | 페이지별 다른 순서가 있으면 그 순서 | 없음. 소모품 · 시약 순서는 POL-INV에 이미 있음 |
| 3 | 숫자 상한 표기 | COMM-3-a(1/2), 5-j Label | GNB Event 건수는 999까지(넘어도 999), Number Badge는 `99+`까지 | Badge 상한을 바꾸는 화면 | 없음 |
| 4 | 표 (Table) | COMM-5-g Data Table | 1920×1080 기준 머리줄 1 + 데이터 10줄. L-IOS는 데이터 10줄 고정, T-IOS는 10 · 30 · 50 · 100 중 고름(기본 10). 데이터 개수 표시(`Items 638`), 넘으면 페이지, 말줄임은 툴팁, 행 상태 Default · Hover · Selected, 데이터가 없으면 머리줄을 두고 목록 안에 안내 | 칸 구성, No Data 문구, 줄 수가 다른 화면 | L-IOS 데이터 10줄 고정(3절 5번) → **공통 정책** |
| 5 | 정렬 (Sorting) | COMM-5-r Sorting | 정렬되는 칸에만 아이콘. 머리를 누르면 내림차순, 다시 누르면 오름차순. 다른 칸을 정렬하면 앞 정렬 해제. 정렬 기능이 없는 화면은 첫 칸 내림차순 | 기본 정렬 기준, 정렬되는 칸 | 없음 |
| 6 | 페이지 (Pagination) | COMM-5-l Pagination | 10페이지씩, 10 단위 이동. 2페이지 이하는 `‹ ›`만. Indicator형은 Prev · Next | 어느 형을 쓸지 | 없음 |
| 7 | 검색 영역 (Search Bar) | COMM-5-p Search Bar | 조건은 AND. 조건이 3개 이상이면 [Reset] | 조건 칸 · 입력 규칙 · 기본값 | 없음 |
| 8 | 입력과 검증 | COMM-5-t Text Input, 5-w Validation Check | 입력 칸 상태(Enabled · Focused · Typing · Complete · Error · Read Only · Disabled), 지우기 버튼, Password 마스킹 · 보기 버튼, Inline 입력은 비우면 오류. 입력 검증(미입력 · 숫자/문자 · 형식)은 API 전에 Error 상태(필수) + 오류 문구(선택), API 결과는 성공이면 Toast, 오류면 Alert · Confirm | 글자 수(byte) 제한 · Max · 오류 문구, 검증 뒤 다시 누르면 초기화할지 | 없음. ID · 비밀번호 조건은 POL-ACC-005 · 006 |
| 9 | 팝업 | COMM-5-m Popup (1/4 ~ 3/4) | Case 1 정보(X + 닫기) · Case 2 입력 후 저장(취소 + 저장) · Case 3 저장 없음(X만). 팝업 위에 새 팝업을 띄우면 먼저 연 팝업은 아래에 두고 Dim을 한 겹 더함. 필요하면 Dim, 가운데. 버튼 영역은 늘 보임. X · Dim을 누르면 닫힘. 버튼 3개 이상이면 닫기는 X. Import · Export 팝업 고정 문구(L-IOS만). Stacked Popup | 어느 Case인지, 저장하지 않은 채 닫을 때 | 없음 |
| 10 | Alert · Confirm · Toast | COMM-5-m Popup (4/4), 5-u Toast | Alert는 OK까지 다음 동작 불가, 30초 넘게 걸리면 지연 안내 Alert. Confirm은 OK · Cancel. Toast는 화면 아래 2초, 직접 닫을 수 없음, 1~2줄 | 문구 (알럿 카탈로그 ID) | 없음. 알럿 문구 · ID는 알럿 카탈로그 |
| 11 | 툴팁 | COMM-5-v Tooltip | 말줄임 툴팁(폭 320, 줄바꿈, 마우스를 떼면 사라짐), Info 툴팁, Event 툴팁(Error 빨강 · Warning 주황, X로 닫음, `[모듈명] 오류 코드, 메시지`) | Info 문구, Event 문구 | 없음 |
| 12 | 로딩 | COMM-5-k Loading | Spinner는 가운데 · 필요하면 Dim, 로딩 중 값은 `-` · 관련 버튼 비활성. Skeleton 고정 문구 `Loading data...` / `Please wait a moment while we load your content.` | 어느 형을 쓸지 | 없음 |
| 13 | 날짜 고르기 (Calendar · Date Dropdown) | COMM-5-d Calendar, 5-h Dropdown (2/2) | 기본 7일 전 ~ 오늘, 최대 1년, 오늘 이후 불가, [Done] 전에는 반영 안 함, 이번 달을 고르면 어제까지 합계 | 기본 기간 · 최대 기간이 다른 화면 | 없음 |
| 14 | 드롭다운 · 선택 | COMM-5-h Dropdown (1/2), 5-q Selection Controls, 5-f Chips | 목록은 5줄 높이까지, 넘으면 스크롤. 고른 값이 길면 말줄임. Multi-Select 기본 `All`(하나 해제하면 All 해제), 고른 값은 쉼표로. Checkbox(Square · Round, 선택 · 미선택이 섞이면 Square의 Mix Selected) · Radio · Segment, Filter Chip · Anchor Chip 동작 | 옵션 값 · 기본값 | 없음 |
| 15 | 스크롤 · 화면 위로 | COMM-5-o Scroll Bar, 5-c Button (Floating Button) | Title 고정 · Title과 Tab 고정 · 아래 버튼 고정 3가지. Floating Button(Top Button)은 한 화면 높이(PC 500px) 넘게 내리면 오른쪽 아래에 나타남 | 어느 경우인지 | 없음 |
| 16 | 입력 방법 (탭 · 클릭) | COMM-1-a | Tablet 제스처(탭 · 당겨서 새로고침 · 스와이프 · 스크롤), PC 입력(클릭 · 호버 · 드래그 앤 드롭 · 단축키 `[Ctrl + c]` · 오른쪽 버튼). 디스크립션은 탭 · 클릭을 "누르면"으로 함께 씀 | 당겨서 새로고침 · 드래그 앤 드롭 · 단축키를 쓰는 화면 | 없음. 디스크립션은 탭 · 클릭을 "누르면"으로 씀(`rules/screen-spec.md` 8절 표준어) |
| 17 | 숫자 표기 | (가이드에 없음) | 천 단위 쉼표 · 소수 자리 · 백분율 · 언어별 구분 기호 | - | 내부 논의 `pending/PD-0008.md` → **공통 정책** |

- 카드 · 아코디언 · Label · Progress Bar · Breadcrumb · Info Box · Tab(COMM-5-e · a · j · n · b · i · s)은 모양 규칙이라 정책으로 옮기지 않고, 디스크립션에서 컴포넌트 CID로 가리킵니다.
- **공통 정책으로 쓸 것은 3가지입니다:** 날짜 · 시간(장비 기준 · 초 단위), L-IOS 표 줄 수, 숫자 표기(PD-0008). 나머지는 가이드 번호로 바로 잇습니다. 공통 정책 안에서도 가이드에 있는 부분은 다시 쓰지 않고 "COMM-4-a(1/4)를 따르고, 더해서 …"처럼 씁니다. 번호는 POL-COM-007부터, 임시 정책 등록 → [승인]으로 반영합니다(헌법 4조).
- Module명 띄어쓰기는 용어집에 이미 있고(내부 논의 PD-0007), 가이드 수정 요청으로 처리합니다.

## 3. 옮기면서 찾은 다른 점 (질문 · Common UX 수정 요청 후보)

| # | 내용 | 처리 |
| --- | --- | --- |
| 1 | 5장 Component의 기준: Common UX - PC(`355-53300`)와 SH.L TEST › Connon UX(`1115-92103`) 중 어느 쪽인지. 1~4장은 같음 | **Common UX - PC** (2026-11-04 사용자 결정). 저장소의 COMM-5 참조를 PC 번호로 고침 |
| 2 | Module명 표기: Common UX는 `Sample Storage(1)`(붙여 씀), 용어집은 `PCR Setup (1)`(띄어 씀, 2026-10-30 결정) | 내부 논의 `pending/PD-0007.md`, Common UX 수정 요청 `feedback.md` 11번 (2026-11-04) |
| 3 | L-IOS Material Setup 2단 메뉴: Common UX `Group Lots · Prepare Carrier · Load Materials · Empty Waste Bin`, 언어셋 `Lot Grouping · Carrier Setup · Drawer Loading` | Common UX가 맞음(2026-11-04 사용자). IA 스프레드시트(IA-L-IOS)는 이미 Common UX와 같아 고칠 것 없음. 언어셋은 2.0 이름이라 2.0 → 2.1 언어셋 다시 만들기 때 맞춤(`background/worklist.md` "언어셋 관리 체계") |
| 4 | 가이드의 번호가 Figma 두 곳 모두와 다름 (위 "읽은 자료") | 팀 프로그램의 "CURECA UX 가이드"를 Common UX - PC 기준으로 다시 만들어 달라고 요청 (가이드 수정 요청). Figma는 각자 안에서 맞으므로 Common UX 수정 요청은 아님 |
| 8 | Tab: 용어집은 "같은 데이터의 보기 방식 전환은 Segment Control"(2026-10-30, Line Tab · Square Tab · Count Tab 기준), Common UX - PC는 "같은 데이터의 보기 방식 전환은 Container Tab"(Underline · Outline · Outline Container · Filled Container) | **Common UX 기준** (2026-11-04 사용자 결정). 용어집 Tab을 Underline · Outline · Container Tab, "보기 방식 전환은 Container Tab"으로 고침 |
| 9 | 이름: Common UX - PC는 `Tool Tip` · `Check Box` · `Text Field`, 용어집 표준어는 `Tooltip`(Checkbox · Text Input은 용어집에 없음) | **용어집 기준** (2026-11-04 사용자 결정): Tooltip · Checkbox · Text Input. Checkbox · Text Input은 용어집에 더함. Common UX 수정 요청 `feedback.md` 13 ~ 15번 |
| 5 | 표 줄 수 | 머리줄 1 + 데이터 10줄. L-IOS는 데이터 10줄 고정, T-IOS는 기본 10줄에서 고름 (2026-11-04 사용자). 2절 4번에 반영 |
| 6 | 날짜 표기: 타임존, 서머타임, 초 단위가 필요한 곳(로그 등) | 타임존은 **장비 기준**(2026-11-04 사용자 결정): L-IOS · T-IOS 모두 CURECA(L-IOS) PC의 시간대로 기록된 시각을 그대로 보여 주고, 접속한 PC의 시간대는 고려하지 않음. 서머타임은 따로 설정하지 않고 장비 OS의 시간대 설정(서머타임 자동 조정)을 따름(추천, 확인 필요: 개발사가 시각을 UTC로 저장하고 장비 시간대로 보여 주는지, 서머타임이 바뀌는 날의 정렬 · 기간 계산). 초 단위가 필요한 곳은 질문으로 남음 |
| 7 | 숫자 표기: 천 단위 쉼표, 소수 자리, 백분율 표기가 정의되지 않음 | 내부 논의 `pending/PD-0008.md` (2026-11-04) |
