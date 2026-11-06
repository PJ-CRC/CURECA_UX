# Common UX 수정 이력

---

## [UX AI TEST] R025 · R024 삼각형을 mobile 섹션에 다시 놓음 · 2026-11-03 (요청: 최고관리자)

- R024의 「mobile 섹션」도 Connon UX (Mobile)이 아니라 SH.L TEST의 `mobile` 섹션(1714:159068)이었음.
- R024 삼각형(1878:36515)은 이미 지워져 있어, mobile 섹션에 같은 삼각형 `Triangle (R024)`(1881:190527, 150×150, #0FC0BB)를 새로 만듦(TI-INS-02-01-P 오른쪽 빈자리, 섹션 안 x 7330, y 474).
- Connon UX (Mobile) 섹션에는 삼각형 없음(확인).

---

## R024 · Connon UX (Mobile) 섹션에 삼각형 추가 · 2026-11-03 (요청: 최고관리자)

- SH.L TEST › 「Connon UX (Mobile)」 섹션 위쪽 빈 곳(M-Components 오른쪽, x 9576 · y 643)에 150×150 삼각형(`Triangle`, 1878:36515, 색 #0FC0BB) 추가.
- 요청 프레임 COMM-1-a에는 Mobile 영역이 없어(Tablet · PC만 있음) 같은 페이지의 Mobile 섹션으로 해석함. 자리는 요청에 없어 빈 곳에 둠.

## [가이드] CURECA UX 가이드 수정 · 2026-11-03 (요청: 채팅)

- 개요: 첫 문장(「이 가이드는 Figma UX AI TEST › SH.L TEST 페이지의 Connon UX 섹션(…)을 기준으로 정리했다.」) 삭제. 수정본 `rev/20261103-091639_brex-06`.
- 개요: 이어지는 문장 앞 「같은 섹션 안의」 삭제. 수정본 `rev/20261103-091717_brex-06`.

## R023 · R022 파란 사각형을 mobile 섹션으로 이동 · 2026-11-02 (요청: 최고관리자)

- R022의 「mobile 섹션」은 Connon UX (Mobile)이 아니라 SH.L TEST의 `mobile` 섹션(1714:159068)이었음. `Blue Rectangle (R022)`(1779:2, 200×500, #0066FF)를 Connon UX (Mobile)에서 mobile 섹션으로 옮김(TI-INS-02-01-P 오른쪽 빈자리, 섹션 안 x 7330, y 474).

---

## R022 · Connon UX (Mobile) 파란 사각형 추가 · 2026-11-02 (요청: 최고관리자)

- SH.L TEST › Connon UX (Mobile) 섹션에 200×500 파란 사각형(#0066FF, `Blue Rectangle (R022)`, 1779:2)을 M-Components (Mobile) 오른쪽 빈자리(x 9326, y 643)에 추가.

---

## M-TI-INS-02-T 흐름 수정 · 2026-11-02 (요청: 이상헌, 채팅)

- M-TI-TMG-01(Overview)에서 모듈 카드를 눌러 들어오는 2depth 화면으로: App Bar Menu → **Back(‹ Instrument)**, Bottom Nav 제거(2depth 규칙).
- 탭은 All이 아니라 **누른 모듈 종류(예: Sample Preparation)가 선택**된 상태, 탭 줄은 그 탭이 왼쪽에 보이게 스크롤.
- 목록은 그 종류 모듈만(Sample Preparation (1) · (2)), 「2 Modules」, 페이지 1.

---

## TI-TMG-01 모바일 화면 · 2026-11-02 (요청: 이상헌, 채팅)

- SH.L TEST › `mobile` 섹션에 **M-TI-TMG-01**(Instrument Overview) 신규, M-TI-INS-02-T 왼쪽. 402 폭 · Mobile 컴포넌트.
- 장비 이미지는 빼고 모듈 종류 카드 8개(Prep System 3 · Dx System 5): Enabled/Total · Disabled · Error/Warning 수 · Connected/Disconnected · Ready/Running/Paused/Error · Door Open/Closed, 알림이 있는 모듈은 벨 표시.
- 상단에 장비 선택(CURECA(1) ⌄ → Bottom Sheet) · Running · Event 개수(PC GNB 내용).
- 흐름: 모듈 카드 탭 → M-TI-INS-02-T(목록) → M-TI-INS-02-T-D(상세) → M-TI-INS-02-01-P(Management).
- 참고: PC 제목 「Dignosctics (Dx) System」은 오타로 보고 「Diagnostics」로 적음.

---

## mobile 화면 잘림 수정 · 2026-11-02 (요청: 이상헌, 채팅)

- 안쪽 Scroll Area를 없애고 화면은 폭 402, 높이 최소 874에서 내용만큼 늘어나게(전체 내용이 보임). Management 팝업 목록도 높이를 내용에 맞춤.
- 그래도 Figma 앱에서 행 오른쪽이 360 기준으로 잘려 보였음(파일에 저장된 배치는 402로 맞았지만 앱이 넓히기 전 배치를 보여 줌). 화면 11장을 같은 내용의 새 노드로 바꿔 해결(노드 ID 바뀜, 예: M-TI-INS-02-T 1730:36490). Connon UX (Mobile) 예시 폰 5장도 새 노드로, 넓힌 Mobile 컴포넌트는 배치 다시 계산. 사용자가 앱에서 확인함.

---

## mobile 화면에 Connon UX (Mobile) 적용 · 2026-11-02 (요청: 이상헌, 채팅)

- SH.L TEST › `mobile` 섹션(1714:159068)의 M-TI-INS 3장 · M-TI-IVT 8장, 모두 **402 × 874 고정**: 위 Status Bar · App Bar · Tab(팝업은 Modal Header), 아래 Bottom Nav · 하단 CTA 고정, 가운데 Scroll Area.
- 직접 그린 요소를 `Mobile/*` 컴포넌트로 교체: App Bar · Bottom Nav(Instrument 화면 Active=More, Inventory 화면 Active=Inventory) · Tab Item · Status Pill(톤 자동) · Card(KPI, 선택 상태 유지) · Chip · Modal Header · Button(Cancel/Save · Management · Item details) · Load More · Dropdown Field.
- 화면 간격 500으로 다시 배치(라벨 함께 이동).

---

## Connon UX 모바일판 PC 스타일 맞춤 · 402×874 · 2026-11-02 (요청: 이상헌, 채팅)

- 표지 · Revision History · 목차 · 장 표지(M-COMM-1~6)를 PC Connon UX 프레임 복제본으로 바꿈(어두운 배경 · 「Common UX · Mobile」 · 번호 + 제목 · CID 태그). 목차에 6 Mobile Only 블록 추가, CID는 M-COMM-*, 오른쪽 참조는 「PC COMM-*」.
- 본문 34장 머리를 PC 머리(장 라벨 · 제목 + 「기존 COMM-x · Mobile」 · 요약 · Ver/Date/CID 표)로 교체, 예시 영역 배경 #F5F6FA.
- 예시 폰 화면을 **402 × 874 고정**(위 Status Bar · App Bar · Tab, 아래 Bottom Nav · CTA 고정, 가운데 Scroll Area). `Mobile/*` 컴포넌트 기준 폭 360 → 402(내부 328 → 370, KPI 156 → 181), 문서의 「360 × 800」 표기도 402 × 874로.
- 참고: M-TI-INS · M-TI-IVT 모바일 화면(mobile 섹션)은 SH.L 페이지로 옮겨져 있어(보기 전용 페이지) 이번 크기 변경에서 제외.

---

## Connon UX 모바일판 · 모바일 컴포넌트 신규 · 2026-11-02 (요청: 이상헌, 채팅)

- SH.L TEST에 새 섹션 **「Connon UX (Mobile)」**(Connon UX 섹션 아래, y 47264). 360×800dp · Noto Sans KR · Primary `#0FC0BB`.
- **M-Components (Mobile)** 컴포넌트 35종(`Mobile/*`): App Bar(Back · Menu · Close) · Bottom Nav(Active 5) · Tab Item · Segmented Item · Button(Primary · Secondary · Tertiary · Danger × L48 · M40 · S32 × Enabled · Pressed · Disabled) · Chip · Status Pill(5 Tone) · Badge · Text Field(5 State) · Password Field · Search Bar · Dropdown Field · Date Field · Checkbox · Radio · Toggle · Validation Message · List Item(Basic · Status · Chevron · Swipe) · Card(KPI · Group) · Accordion · Bottom Sheet(Single · Multi · Sort · Calendar) · Dialog(One · Two · Danger) · Modal Header · Toast(Info · Success · Error × Action) · Tooltip · Progress Step · Loading(Spinner · Skeleton · Pull to Refresh) · Load More · Pagination · Empty State · Scroll · Section Header.
- **문서 44장**: M-Cover · M-Revision History · M-COMM-0(목차), 장 표지 M-COMM-1~6, M-COMM-1-a · 2-a · 2-b · 3-a · 4-a · 4-b, M-COMM-5-a ~ 5-u(PC 컴포넌트 21종의 모바일 규칙), **M-COMM-6 모바일 전용** 6-a Bottom Sheet · 6-b Pull to Refresh · Skeleton · 6-c Swipe Action · 6-d Empty State · 6-e Segmented Control · 6-f Load More · 6-g Safe Area · Keyboard. 각 장은 PC → Mobile 변환 표 + 실제 컴포넌트 예시.
- 오늘 정한 모바일 결정(탭 목록 15개 + 페이지네이션, 팝업 목록 Load more, KPI 카드 필터 최대 5개, 묶음 카드 단위 목록)을 5-e · 5-i · 4-b · 6-f 규칙에 반영.
- 참고: 기존 SH.L 페이지의 `M/*` 컴포넌트(2026-10-20)는 그대로 두었고, 새 컴포넌트는 `Mobile/*` 이름으로 따로 만들었다.

---

## Item details 팝업 페이지네이션 → 더보기 · 2026-11-02 (요청: 이상헌, 채팅)

- M-TI-IVT-03-T-P(소모품) · M-TI-IVT-04-T-P(시약) Item details 팝업: 페이지네이션을 빼고 15개씩 보인 뒤 맨 아래 전체 폭 [Load more (15 / 1,112)] 버튼으로 15개씩 더 불러오게(가이드 12-5 모바일 Pagination 규칙).

---

## Inventory 모바일 Consumables · Reagents 다시 만들기 · 2026-11-02 (요청: 이상헌, 채팅)

- 앞선 변환이 PC 화면의 묶음 단위를 잘못 읽어 시약 · 소모품을 한 줄씩 풀어 놓았던 것을 PC와 같은 **묶음 카드** 단위로 다시 만듦(기존 4개 프레임 삭제 후 같은 자리에 새로).
- **M-TI-IVT-04-T (Reagents)**: 키트 카드 5개 — Pretreatment Reagents(Sample Preparation, 표준 튜브 4 / Tub 3 사이 구분선), STARMag M96 Kit, STARMag Universal Cartridge Kit(Nucleic Acid Extraction), Allplex™ GI-Virus Assay, Allplex™ GI-Bacteria(I) Assay(PCR). 카드마다 시약 · Remaining · Required · 상태. Status 칩 + 상태 설명 info 아이콘, Reagents type 드롭다운, 15개 페이지네이션.
- **M-TI-IVT-04-T-D**: 키트 카드를 누르면 키트 상세 — 시약 7개마다 위치별 Remaining · Required 표 + [More](→ Item details), Prelyser 만료 안내. Required 빨강 · 주황은 PC 행 색 그대로.
- **M-TI-IVT-02-T (Consumables)**: 그룹 카드 5개(Tips · Plates · Tubes · Stool Swab · Sealing Film), Status 칩 + info. **02-T-D**: 그룹(Tips) 상세 — 품목별 Prep Consumable Storage 표 + Tip Storage 표(Capacity) + [More].

---

## Inventory 모바일 화면 수정 · 2026-11-02 (요청: 이상헌, 채팅)

- **M-TI-IVT-01-T (Summary)**: Insufficient · Low, Full · Almost Full 카드를 눌러 그 상태 내역만 보이게(선택 카드 강조, 최대 5개, 기본 Insufficient · Full). Waste Bin/Bottle Status는 페이지네이션을 빼고 제목 오른쪽 [More] → Waste Bin/Bottle 탭.
- **M-TI-IVT-04-T (Reagents)**: Reagents type 칩 → 목록 위 드롭다운(All Reagents type).
- **M-TI-IVT-04-T-P (Reagents Item details) 신규**: PC TI-IVT-04-T-P를 모바일로. 시약 상세의 [Item details] → 바코드 리스트 15개(위치 · 바코드 · 보관 위치 · 입고일 · 유효기간 · Remaining Rxns · Used Counts), Expired 개수, 만료 행은 빨간 유효기간 + Expired 표시, Sort, 페이지네이션. 흐름에 맞춰 제목은 Prelyser Standard Tube(PC 원본은 GI-V IC).
- Waste Bin/Bottle 화면(M-TI-IVT-05-T)은 x 3484로 옮김.

---

## Inventory(TI-IVT) 모바일 화면 변환 · 2026-11-02 (요청: 이상헌, 채팅)

- SH.L TEST › `mobile` 섹션 y 10000 줄에 360 폭 모바일 화면 7장 신규(Noto Sans KR, `M/*` 인스턴스). 원본 PC 프레임은 그대로 둠.
- 탭은 Summary · Consumables · Reagents · Waste Bin/Bottle만(Overview · Usage History 제거). Refresh 버튼 제거.
- **M-TI-IVT-01-T (Summary)**: Requirements for Run Completion(Insufficient 3 · Low 5 + 항목 리스트), Waste Bin/Bottle Status(Full 3 · Almost Full 20 + 리스트 15개 · 페이지네이션).
- **M-TI-IVT-02-T / 02-T-D (Consumables)**: Status 칩 + 소모품 리스트만, 행을 누르면 상세(위치별 Remaining · Required, Tip Storage Capacity) + [Item details].
- **M-TI-IVT-03-T-P (Item details)**: 1000 µL Tip 바코드 리스트 15개 + Sort + 페이지네이션(1 … 75).
- **M-TI-IVT-04-T / 04-T-D (Reagents)**: Status · Reagents type 칩 + 시약 리스트(키트명 표시), 행을 누르면 상세(만료 안내 · 위치별 수량) + [Item details].
- **M-TI-IVT-05-T (Waste Bin/Bottle)**: Items 20 · Full 3 · Almost Full 3, 필터는 [Filter] 버튼으로, 리스트 15개 + 페이지네이션(1 2).
- 참고: TI-IVT-03-T라는 화면은 없어 03-T-P(Item details)로 만들고, Consumables는 TI-IVT-02-T를 기준으로 함. 15개를 채우려고 Waste Bin 행 일부는 PC와 같은 패턴의 예시 데이터를 더함.

---

## TI-INS-02-T 모바일 화면 변환 · 2026-11-02 (요청: 이상헌, 채팅)

- SH.L TEST › `mobile` 섹션에 360×800 모바일 화면 3장 신규(Noto Sans KR, M-Components `M/*` 인스턴스). 원본 PC 프레임(TI-INS-02-T · TI-INS-02-01-P)은 그대로 둠.
- **M-TI-INS-02-T (목록)**: Overview 탭 삭제. All · Sample Storage · Prep Consumable Storage … Universal PCR을 가로 스크롤 탭으로. 탭을 누르면 모듈 카드 리스트(모듈명 · Connected/Door/Enabled · Status Pill · Error/Warning 수) **10개 고정** + 페이지네이션(‹ 1 2 3 4 ›).
- **M-TI-INS-02-T-D (상세)**: PC 우측 상세 패널 → 목록 행을 누르면 새 화면(App Bar ‹). 상태 · Error Rate · [Management], Door · Device · Storage · Waste Bin/Bottle · Event History(More)를 카드 리스트로.
- **M-TI-INS-02-01-P (Management 팝업)**: [Management]를 누르면 Full-screen 팝업. 모듈 종류 선택, 모듈 카드(Serial No. · Run-time · Enable/Disable, 펼치면 하위 Device), 하단 [Cancel] [Save]. PC 원본의 세 번째 카드 이름이 `Sample Preparation (2)`로 중복돼 `(3)`으로 적음.
- 참고: 가이드 12-5는 모바일 페이지네이션을 무한 스크롤 · [더보기]로 정하지만 요청대로 페이지네이션을 넣음.

---

## [가이드] CURECA UX 가이드 수정 · 2026-10-30 (요청: 최고관리자)

- 5-p. Table: 데이터 개수 예시 「638 Items」 → 「Items 638」(Figma 5-p 원본과 같게, 라벨 다음 숫자). 수정본 `20261030-133758_brex-06`

---

## [가이드 반영] CURECA UX 가이드 5-q · 5-p · 2026-10-30 (요청: 최고관리자)

- R015 Cancelled Orders(`976:19905`): 검색 Text Input 2개 높이 40 → 38(5-q M, Search Area 컴포넌트와 같음)
- R016 Tube Setting(`789:56900`): LIS Code · System Code 입력칸 40 → 38
- R017 Assay Pack Setting(`789:57709`): File name 입력칸 40 → 38. 노출 개수 드롭다운은 T-IOS 화면이라 유지
- R018 · R019 · R020 사본(`1143:102877` · `1143:100189` · `1143:100380`): R015 · R016 · R017과 같은 수정
- R021 Common UX Components · COMM-5(`1334:32018`): 새 컴포넌트 추가 — 5-q Text Input(Box · Password · Inline), 5-r Toast, 5-s Tooltip, 5-o Sorting / Column Header, 5-p Table(Header · Row · Items · No Data), 5-e Card, 5-j Popup / Stacked. 5-t Validation Check는 규칙이라 컴포넌트 없음
- 데이터 개수는 「Items N」 그대로(Figma 5-p 원본이 「Items 638」. 가이드 글의 예 「638 Items」는 잘못 옮겨 적힌 것)

---

## [가이드] CURECA UX 가이드 수정 · 2026-10-30 (요청: 이상헌)

- 작업 J012 · 항목 「개요」 · 수정본 `20261029-100815_brex-06` → `20261030-094310_brex-06`
- Connon UX 섹션 새 판(2026-10-30) 반영: 컴포넌트 20개(Tab 빠짐, Table 5-p · Text Input 5-q · Toast 5-r · Tooltip 5-s · Validation Check 5-t), 새 상세 5-e Card · 5-o Sorting · 5-p Table · 5-q Text Input · 5-r Toast · 5-s Tooltip · 5-t Validation Check, Popup 4장(3/4 Stacked Popup)
- 「5. Component › Figma 컴포넌트」 추가: Common UX Components · COMM-5(`1334:32018`)의 컴포넌트 · 변형 · 노드 id 표, 아직 컴포넌트가 없는 항목 안내

---

## [SH.L TEST] 2026-10-29 · COMM-5 컴포넌트 13종 생성 (요청: 이상헌)

- 요청: J008 「가이드 내용에 맞춰 실제 컴포넌트들을 만들어줘(생성만)」 → 범위 「상세 13개만」.
- SH.L TEST에 섹션 「Common UX Components · COMM-5」(`1334:32018`)를 만들고, CURECA UX 가이드(수정본 `20261029-100815_brex-06`)의 Type · 상태 · 크기대로 컴포넌트 21개 · 변형 127개를 만들었다: Accordion, Badge, Button(Square · Text · Top), Calendar(Day Cell · Date · Month), Chips, Dropdown, Loading, Pagination, Popup(Basic · Import/Export · Alert · Confirm), Progress Step, Scroll Bar, Search Bar, Selection Controls(+ Segment Control).
- 색은 실제 화면 컴포넌트 기준(주 `#0E1012`, 테두리 `#C5CCD5`, 배경 `#F3F6FB`, 오류 `#EA3625`, 경고 `#F39D34`). 화면에 배치하지는 않았다.
- 글꼴: Inter로 만든 뒤 Figma 플러그인 「폰트 바꾸기」(새 기능)로 Pretendard로 바꿨다(글 329개).

---

## [가이드] CURECA UX 가이드 수정 · 2026-10-29 (요청: 이상헌)

- 요청(J008, 「개요」): 「Connon UX 섹션에 있는 내용으로 가이드 내용 업데이트 해주고 가이드 내용에 맞춰 실제 컴포넌트들을 만들어줘」
- 수정본 `20261029-100815_brex-06` (기준 `20261028-163355_brex-06`). Figma Connon UX 섹션이 새로 만들어져(프레임 id 1318:*) 바뀐 내용을 반영했다.
  - **5. Component**: 목차 번호 재정리(Profile 빠짐, 21개 5-a ~ 5-u). 상세 12장 추가: 5-f Chips · 5-g Dropdown(1/2 · 2/2) · 5-h Loading · 5-i Pagination · 5-j Popup(1/3 ~ 3/3) · 5-k Progress Step · 5-l Scroll Bar · 5-m Search Bar · 5-n Selection Controls. 그림 12장.
  - **4-a(2/4)**: 씨젠 문서 최우선 문구, 상태값 「발생 Case」, 컨트롤러 활성 조건(Stop 그 외 비활성, Quick Start 팝업), 장비 통합 상태를 이전 → 다음 상태 전이 표로, 도어 개방을 상태별로(Initializing · Stopping 불가), Sample Preparation 도어 제조사 구분.
  - **4-a(1/4)** Module명 「노출 순서: 각 페이지별 상이」, **4-b(3/5) · (4/5)** 화면 예시. 3-a(1/2)는 바뀐 내용 없음.
- Figma 확인 필요: 4-a(2/4) PartialRunning의 UX action이 Stopping과 같은 문구.
- 「실제 컴포넌트 만들기」는 Figma를 고치는 작업이라 가이드 수정 작업에서는 하지 않았다(범위 확인 뒤 진행).

---

## [SH.L TEST] 2026-10-28 · R014 UX_trans 화면에 COMM-5 버튼 · 칩 크기 반영 (요청: 이상헌)

- 요청: 「UX_trans 섹션에 있는 화면들만 지금 추가된 가이드 내용 반영해줘」 — CURECA UX 가이드 수정본 `20261028-163355_brex-06`의 5-c Button(높이 XL 56 · L 48 · M 40 · S 32) · 5-e Chips(L 40 · S 32)를 따랐다. 고칠 화면 찾기(J005) 결과 중 UX_trans 4개 화면만 고쳤고 원본 화면은 그대로 두었다.
- 라이브러리 컴포넌트에 해당 크기 변형이 없어 인스턴스 높이를 직접 맞췄다(글자 · 아이콘은 가운데 정렬 그대로). 자유 배치 버튼은 세로 가운데를 유지했다.
  - **DASHBOARD**: 「View All」(Tertiary XSmall) 26 → 32px
  - **table_detail pannel**: 상세 패널 [Delete] · [Save] 44 → 40px, Active 옆 [Inactive] 28 → 32px
  - **content 7**: 재고 필터 칩 3개(Insufficient · Low · Sufficient) 42 → 40px
  - **LI-TSS-PSI-SAM-02-02**: [Done] 44 → 40px, [Delete] 28 → 32px
- 숫자 배지 · 캘린더 기간 표기 · 아코디언은 어긋난 곳이 없었다.

---

## [가이드] CURECA UX 가이드 수정 · 2026-10-28 (요청: 이상헌)

- 요청(J004, 「개요」): 「COMM-5 내용 추가했어 / 가이드 내용에 추가해줘」
- 수정본 `20261028-163355_brex-06` (기준 `guide.md`). 「5. Component」만 고쳤고 다른 항목은 그대로 두었다.
  - Figma Connon UX 섹션에 새로 생긴 상세 프레임 6장의 규칙과 그림을 넣었다: 5-a Accordion(Card · Line, 상태) · 5-b Badge(Number 99+ · Text · Icon · Dot) · 5-c Button(Square 크기 XL~S · Text 크기 · Top Button 노출 조건) · 5-d Calendar(Date · Month, Default 7일 · 최대 1년 · 오늘 이후 불가) · 5-e Chips(Filter · Anchor) · 5-n Scroll Bar(Case 1~3 고정 영역)
  - 섹션 소개의 「상세 프레임은 아직 없다」를 지금 있는 항목으로 바꿨다.
- Figma 확인 필요: Chips 상세 프레임 이름이 `COMM-5-e`인데 목차는 `COMM-5-f`, Scroll Bar의 표 참고 번호가 기존 `COMM-5-m`(새 번호 `COMM-5-s`). 가이드에는 그대로 옮기고 차이를 적어 두었다.

---

## [SH.L TEST] 2026-10-28 · R013 UX_trans 섹션을 CURECA UX 가이드에 맞춤 (요청: 이상헌)

- 요청: 「UX_trans 섹션에 있는 내용들을 현재 선택한 UX 가이드 내용에 맞춰서 수정해줘」 — 이 PC의 작업 기준 가이드 **CURECA UX 가이드**(`g20261028-brex-06-J003`)를 따랐다.
- 대상: SH.L TEST › UX_trans 섹션(`1143:99713`) 10개 화면 중 7개, 94곳을 고쳤다(4-a · 4-b 표기 규칙): 날짜 57 · 수량 17 · 구성품 2 · Module명 11 · 상태값 5 · 오타 2, 목록 순서 2.
  - **날짜 · 시각 `YYYY-MM-DD hh:mm`**(초 삭제): table 목록 10, table_detail pannel 23(파일 목록 20 · GNB 시계 · File Created · Registered), content 5 Start/End Date/Time 4, Cancelled Orders 주문 · 취소 일시 20(처음 수정 때 빠져 있어 확인 중 찾아 추가로 고침)
  - **수량 `{수량} ea/rxns ({n} {단위})` · 단복수**: DASHBOARD `380 (4 DWP)` → `380 rxns (4 DWPs)`, `270 (3 sockets)` → `270 rxns (3 sockets)`, `80 (2 racks)` → `80 ea (2 racks)`, `75 (1 rack)` → `75 ea (1 rack)`, `60 (1 set)` → `60 rxns (1 set)` / content 7 `200T` · `100T` → `200 rxns` · `100 rxns`, `11 rack` → `11 racks`
  - **같은 Storage 구성품은 오름차순으로 묶음**: `BB TUB, WB1 TUB, …, EB TUB` → `BB Tub, EB Tub, WB1 Tub, WB2 Tub, WB3 Tub`, `5X GI-B(I) MOM, EM2, RNase-free Water, GI-B(I) PC` → `…, GI-B(I) PC, RNase-free Water`
  - **Module명 `ModuleType(index)`**: content 7 `Prep Consumable Storage (1)` · `PCR Setup (1)` → 공백 없이 `(1)`
  - **상태값 UI 표기**: content 5 `Not tested` → `Not Tested`, DASHBOARD 재고 `Empty` → `Insufficient`
  - **순서(소모품 → 시약, 이름 오름차순)**: DASHBOARD 「Requirements for Run Completion」 300 μL Tip → Empty Standard Tube → MB DWP → BB Tub… → 5X GI-B(I)… / content 7 시약 Tub: LB Tub (Prep) → PBS Tub → Saline Tub
  - 가이드 밖이지만 오타 2건: content 6 `Enablde` → `Enabled`, `Dignosctics` → `Diagnostics`
- 글꼴: Pretendard를 불러올 수 없어, 고친 Pretendard 글(content 5 등 8곳)은 같은 자리 · 크기 · 색의 Inter 글로 바꿔 끼웠다.
- 그대로 둔 것: DASHBOARD Test Status 작은 패널의 `Not tested`(그림이라 글로 고칠 수 없음), 말줄임 「…」으로 잘린 긴 구성품 이름(기존과 같음). content 8 · LI-TSS-PSI-SAM-02-02 · Statistical Analysis 2는 가이드와 다른 곳이 없었다.
- 수정한 7개 화면 캡처를 갱신했다. 수정 뒤 UX_trans 전체를 같은 규칙으로 다시 검사해 남은 곳이 없음을 확인했다.

---

## [가이드] CURECA UX 가이드 · 2026-10-28 (요청: 이상헌, J003)

- 기준: Figma `UX AI TEST` › SH.L TEST › **Connon UX** 섹션(`1115:92103`, Common UX 2.0, 프레임 19장).
- 요청: 「Connon UX 섹션의 내용을 기반으로 UX 가이드를 작성, 목차 구조를 반영. 왼쪽 트리로 선택하고 클릭 시 오른쪽 세부 내용이 바뀌게」
- 만든 가이드: `.history/guides/g20261028-brex-06-J003/` (공유). `UX_Guide.html?g=g20261028-brex-06-J003`에서 본다.
  - 목차는 Figma COMM-0과 같게 구성했다: 개요(프레임 구성 · Header 항목) · 0. 문서 구성(CID 규칙) · 1. Overview(1-a) · 2. Navigation(2-a · 2-b) · 3. Layout(3-a 1/2 · 2/2) · 4. Writing(4-a 1~4/4 · 4-b 1~5/5) · 5. Component(새 CID ↔ 기존 CID 대응표 23개).
  - 상세 항목마다 Figma 글을 표로 정리하고 캡처(내용 프레임 15장)를 넣었다.
- 보기 화면(`UX_Guide.html`)을 **왼쪽 목차 트리 · 오른쪽 상세**로 바꿨다(모든 가이드 공통, v0.3.1).
  - `##` 대분류 › `###` 항목을 트리로 보여 주고, 누르면 오른쪽 내용이 바뀐다. 대분류를 고르면 소개와 하위 항목 카드가 나온다.
  - 위치 표시(대분류 ›) · 이전/다음 · 주소(#항목)로 바로 열기 · 목차/내용 검색(맞는 글자 강조)이 있다.
  - 860px 이하에서는 트리가 위쪽 「목차」로 접힌다.
  - CLAUDE.md의 가이드 작성 절차도 이 구성(`##` › `###`)에 맞췄다.
- 작업 기준으로 쓸지는 Common UX 가이드 › UX 가이드 목록에서 정한다(아직 지정하지 않음).

---

## [SH.L TEST] 2026-10-28 · R012 DASHBOARD 복제 「DASHBOARD 2」 (요청: 이상헌)

- 요청: 「현재 대시보드와 똑같은 대시보드 하나더 만들어줘」.
- DASHBOARD(789:33347)를 그대로 복제해 새 프레임 `DASHBOARD 2`(1072:20377, 1907 × 1031)를 만들었다. 레이어 75개와 내용은 원본과 같다.
- 위치: SH.L TEST 첫 줄, Cancelled Orders 오른쪽(x 4152, y 0). 프레임 사이 간격은 기존과 같은 157이다.
- Workbench 목록 · 캡처(원본 크기 1907 × 1031)에 추가했다.

---

## [SH.L TEST] 2026-10-27 · R010 · R011 취소된 오더만 보여 주는 화면 「Cancelled Orders」 (요청: 이상헌)

- 요청: 「취소한 값만 보여주는 페이지 하나 만들어줘봐」 (DASHBOARD에서 등록, R011 「sh.l test에 만들어줘」).
  「취소한 값」을 **취소된 테스트 오더**로 보고, 레이아웃 2. 목록 (테이블)로 만들었다.
- 새 프레임 `Cancelled Orders`(976:19905, 1920 × 1031)를 SH.L TEST의 DASHBOARD 오른쪽(x 2076, y 0)에 두었다. 같은 페이지의 목록 프레임 `table`(Tube Setting)을 복제해 디자인 시스템 컴포넌트를 그대로 썼다.
  - 제목 Cancelled Orders
  - 검색: Order ID · Sample ID, [Reset] · [Search]
  - 건수: Items 24. Add 버튼은 뺐다(취소 목록이라 추가 없음).
  - 테이블: Order ID · Sample ID · Test Name · Requested By · Ordered Date/Time · Cancelled By · Cancel Reason · Cancelled Date/Time(정렬) · Details ›, 예시 10행
  - 사이드바: Test Management 선택. DASHBOARD 사이드바를 복제했다(Tube Setting 사이드바는 Setting 펼침 상태라 바꿨다).
  - 기존 화면의 설명 번호(1 · 1-1 …)는 뺐다.
- Workbench 목록 · 캡처(원본 크기 1920 × 1031)에 추가했다.
- 참고: 열 정렬은 원본 Tube Setting 표를 따라 가운데다. 레이아웃 구조 가이드의 텍스트 정렬(ID · 이름 좌측)로 맞출지는 확인이 필요하다.

---

## [문서] 2026-10-27 · 레이아웃 구조 가이드 정리 (공통용)

- `docs/layout_structures/Layout_Structure.html`
  - 특정 페이지 표기(SH.L TEST, 프레임 이름 table · content 1 등)를 뺐다. 기준은 화면 이름만 남겼다(예: 「기준 화면: Tube Setting · 1920 × 1031」).
  - 「정리 2026-10-27」 → 「최종 작성일 2026-10-27」.
  - 공통 틀 카드: 괄호 설명이 중간에서 끊기지 않게, 한 줄에 안 들어가면 괄호 전체가 다음 줄로 가게 했다. 글 전체 줄바꿈도 단어 단위다.
  - 테이블 텍스트 정렬: 정렬별 해당 요소만 남겼다(좌측 · 중앙 · 우측). 색 범례, 범례 원본 이미지, 기존 화면 정렬 분석 이미지 19장(`align/`)은 뺐다.
- 와이어프레임 9장(`layouts.html` → PNG 다시 만듦): 사이드바 「브랜드」 → 「로고」, 위쪽 표기 「기준 화면: 화면 이름」.

---

## [SH.L TEST] 2026-10-27 · R009 레이아웃 구조 9종 (요청: 이상헌)

- SH.L TEST 페이지 프레임 10개(DASHBOARD, table, table_detail pannel, content 1~4, LI-TSS-PSI-SAM-02-02, Statistical Analysis 1)를 보고 영역 위치 · 크기를 재서 공통 레이아웃 구조로 정리했다.
- 새 섹션 `Layout Structure · 레이아웃 구조 (R009)`(SH.L TEST, 기존 프레임 아래)에 와이어프레임 9개를 실제 크기(1920 기준)로 만들었다.
  - 공통 틀: 사이드바 218px · 상단 상태바 48px · 페이지 제목 34px · 본문 여백 31px
  - 1 대시보드(본문 가변 + 우측 432px) · 2 목록(테이블) · 3 목록 + 상세 패널(811px) · 4 상태 모니터링 · 5 탭 + 장비 매트릭스 · 6 탭 + 목록 · 상세 분할(688 / 873px) · 7 카드 선택 · 8 단계 진행 · 9 차트 + 필터 패널(우측 440px)
- 스타일: 흰 사이드바 · 회색 블록 · 영역 이름과 크기 표기(참고 이미지 기준), 글꼴 Noto Sans KR
- 같은 내용을 이미지로 `docs/layout_structures/`(PNG 9장, `layouts.html`)에도 남겼다. Workbench 메뉴(SH.L TEST)와 캡처에도 추가했다.

---

## [T-IOS 2.0 · L-IOS 2.0] 2026-10-26 · Assay Pack Setting Active 토글 없앰, 변경은 상세에서

- 목록(`TI-STN-08` · `TI-STN-08-01` · `LI-STN-08`, 패널이 열린 `-P` 화면 포함): Active 토글 대신 태그. 활성 파일은 검은 `Active` 태그, 비활성은 회색 `Inactive` 태그.
- 상세 File details › File Info › Active
  - T-IOS: `Active` · `Inactive` 태그 + [Inactive](활성일 때) · [Active](비활성일 때) 버튼으로 바꿔 둔다. Master는 최신 버전 고정이라 버튼 없음.
  - T-IOS 패널 하단: [Delete]와 같은 줄 오른쪽에 [Save]. 바꾼 게 있을 때만 활성 → Confirm_029(Active) · Confirm_030(Inactive) → 반영 & Toast.
  - L-IOS: 태그만, 변경 버튼 · [Save] 없음.
  - `TI-STN-08-P 유형별 정의` · `LI-STN-08-P 유형별 정의`도 글자 대신 같은 태그(T는 버튼 포함)로 맞췄다. Master 패널은 모든 화면에서 버튼 없이 태그만.
- 문구 정리: `TI-STN-08` 4-1, `LI-STN-08` 4-1, `-P` 디스크립션의 File Info, `TI-STN-08 / 정책` · `LI-STN-08 / 정책`(권한 없는 사용자는 [Activate] · [Deactivate] 비활성), `TI-STN-08 / 팝업 정의`(Confirm_029 · 030은 상세 버튼에서 노출, Alert_045는 예비).
- 프로토타입 `Assay_Pack_Prototype.html`도 같게 맞췄다.

---

## [T-IOS 2.0 · L-IOS 2.0] 2026-10-26 · R008 Assay Pack Setting 목록 · 상세 항목 정리 (요청: 이상헌)

- 반영 범위
  - L-IOS: `LI-STN-08`, `LI-STN-08-P`, `LI-STN-08-P/File Data`, `LI-STN-08-P 유형별 정의`, `LI-STN-08 / 세부정의` · `정책`(문구)
  - T-IOS: `TI-STN-08`, `TI-STN-08-P`, `TI-STN-08-P/File Data`, `TI-STN-08-P 유형별 정의`, `TI-STN-08-01`, `TI-STN-08 / 세부정의` · `팝업 정의` · `정책`(문구)
  - 프로토타입 T-IOS · L-IOS 모드
- 목록 표
  - 머리 「Reagent Product Name」 → **Product Name**
  - Master 행 제품명 「-」 → **Master Info**
  - Active
    - L-IOS: 토글 대신 글자로 현재 사용 여부 표시 → **Active**(초록) / **Inactive**(회색)
    - T-IOS: 활성 변경에 토글이 필요해 토글은 두고 라벨만 Used/Unused → **Active / Inactive**
- File details 패널
  - File Info: File name · File type · **File Version** · **File Created Date/Time** · Active (Import Info에서 옮김, Created Date/Time → File Created Date/Time)
  - Import Info: Registered Date/Time · User ID
  - Barcode Info: Segments 개수 칸을 없애고, Segment 위에 **Segment Info** 라벨
  - Quantity Info: Display 삭제
- 디스크립션 · 정책 · 유형별 정의 헤더 문구를 맞췄다(Used/Unused → Active/Inactive, Reagent Product Name → Product Name 등).
- File Data 프레임 높이가 바뀌어 섹션을 다시 쌓고 아래 간격을 맞췄다. 캡처 12장 갱신(LI 4 · TI 8).

---

## [T-IOS 2.0 · L-IOS 2.0] 2026-10-26 · 상세 항목 명칭이 2줄이어도 값 줄 맞춤

- 규칙: 명칭 · 값 그리드에서 **같은 줄 항목은 명칭 높이를 가장 긴 명칭에 맞춘다.** 명칭이 2줄이 돼도 값은 같은 줄에 온다. 명칭이 길거나 다국어로 바뀔 때를 대비한 규칙이다.
- Figma: `TI/LI-STN-08-P` 계열 6개 프레임의 grid 140개를 점검했다.
  - 어긋난 줄은 4곳이었다: Master Barcode Schema Info의 「Expiration Date Segment Order」(2줄)
  - 같은 줄의 다른 명칭 높이를 30으로 맞췄다(위 정렬).
  - 유형별 정의 헤더에 「항목 정렬」 규칙을 추가했다.
- 프로토타입: 상세 패널 그리드에 CSS subgrid를 적용했다. 명칭 길이가 바뀌어도 자동으로 값 줄이 맞는다.
- 가이드 10-3 체크리스트에 항목을 추가했다.

---

## [T-IOS 2.0 · L-IOS 2.0] 2026-10-26 · File details에 시약 JSON 추가 항목 반영

- 기준: 2026-10-26 마스터 · 전처리 · 추출 · PCR 시약 정보 JSON
- Master
  - Test Group Info: 칩 → 표(Test Group Name · Test Group Code)
  - Sample Type Info: 5개 → 14개(Sputum, Cary-blair, eNAT stool, Fecal swab, Thinprep, Surepath, Cellpreserv, Urine, Semen 추가)
  - **PCR Reagent Socket Component Info** 추가: Component Type · Color Code 표(MOM · TOM `#FCFCFD`, Buffer `#B3B3B3`, 색 견본 포함)
- 바코드 Segment: 파일에 segmentName이 있으면 코드 아래에 이름을 표시한다(예: PR02 / 제품 고유 번호).
- Pretreatment: 바코드 Segment 7(PP)을 뺐다(JSON에 Segment 3만 있음). Segments 2 → 1
- Extraction: MB Tube 값을 JSON에 맞췄다(프로토타입: Component Code `STARMag_UC_Kit_MB_Tube`, Item Group Tube, 바코드 STARMag UC Tube).
- PCR
  - Max Rxns · Max Usage Count를 Reagent Basic Info에서 빼고 구성품별로 표시한다.
  - 「Socket Positions」 → **PCR Socket Component Info**: Component Type · Component Abbreviation + Socket Positions 표(A 1, B 7)
- 반영 범위: `TI-STN-08-P`, `TI-STN-08-P/File Data`, `TI-STN-08-P 유형별 정의`와 LI 같은 3개 프레임, 프로토타입
  - 유형별 정의 Ver 0.9.0. 헤더 · 디스크립션 · Case 설명에 새 항목을 적었다.
  - File Data · 유형별 정의 프레임이 길어져 아래 프레임(L-IOS 2.0 영역 포함)을 겹치지 않게 내렸다.
- **JSON의 ID 값도 전부 표시한다** (요청: 「json 파일에 있는 내용은 전부 추가」)
  - Master: Test Group · Sample Type 표에 ID 열, Barcode Schema ID, Item Group Info 칩 → 표(Item Group ID · Name), Socket 표에 Component ID 열
  - 바코드 정보: 모든 Barcode Info에 Barcode Schema ID
  - Item Group ID: Pretreatment 기본 정보, Extraction · PCR 구성품
  - PCR: Test Group ID, Sample Type Codes 칩 → **Sample Type Mapping Info** 표(Sample Type ID · Code), PCR Socket Component Info에 Component ID
  - 유형별 정의 헤더 · 디스크립션에 ID 표시 규칙을 적었다. 프레임이 다시 길어져 아래 프레임을 내렸다.

---

## [T-IOS 2.0 · L-IOS 2.0] 2026-10-23 · File details 패널이 열리면 버튼 · Pagination을 왼쪽으로 이동

- 패널 크기는 원래대로 두었다(목록 영역 높이).
- 패널이 열리면 [Delete] · [Import] 버튼과 Pagination을 **패널 왼쪽(보이는 목록 영역)**으로 옮겨 가려지지 않게 했다.
  - Items 줄 폭 828, Pagination은 보이는 영역 가운데에 둔다.
  - 참고 화면: Sample tube details
- 반영 범위: `TI-STN-08-P`, `TI-STN-08-P/File Data`, `LI-STN-08-P`, `LI-STN-08-P/File Data`
  - LI는 버튼이 없어서 Pagination만 옮겼다.
- 프로토타입: 패널이 열리면 버튼 · Pagination을 왼쪽 50% 영역에 표시한다.
- 디스크립션: 「#」 노출 위치를 바꿨고, TI 「1 목록 버튼 영역」은 「패널이 열리면 패널 왼쪽으로 이동」으로 바꿨다.

---

## [T-IOS 2.0 · L-IOS 2.0] 2026-10-23 · 토글 라벨, Master 변경 불가 알림, LI-STN-08(조회 전용) 추가

- Active 토글에 라벨을 넣었다.
  - Toggle Switch를 Basic+Label 변형으로 바꿨다. 라벨은 **Used**(사용) / **Unused**(미사용)이다.
  - 반영 범위: `TI-STN-08` 계열 목록, `LI-STN-08` 계열, 프로토타입
- Master 토글
  - 선택할 수 있게 하되, 누르면 **Alert_045** 「Master version cannot be changed / The latest Master version is always applied.」를 띄운다.
  - 팝업 정의 7과 Alert 표 행을 추가했다.
  - 목록 디스크립션 4-1, 정책 1, Confirm_029/030 문구도 맞췄다.
- `TI-STN-08-P 유형별 정의` 문구 오류를 고쳤다.
  - 「Master / Master / …」 중복 문구를 「파일 종류 : Master / Pretreatment / Extraction / PCR · Master는 Reagent Product Name 없음, 최신 버전 강제 활성」으로 바로잡았다.
  - Master 항목 설명을 추가했다(Ver 0.8.0).
- **L-IOS `LI-STN-08` 계열을 추가했다.** 「L-IOS - 2.0」 섹션 아래에 TI와 같은 배치로 두었다.
  - 화면 6개: `LI-STN-08`, `LI-STN-08-P`, `LI-STN-08-P/File Data`, `LI-STN-08-P 유형별 정의`, `LI-STN-08 / 세부정의`, `LI-STN-08 / 정책`
  - 내용은 TI와 같고, 조회 전용이다.
    - [Import] · [Delete] 버튼, 체크박스 열, 패널 [Delete]가 없다.
    - Active는 Used / Unused 표시만 하고 토글은 Disabled다.
    - 빈 목록 안내에서 「Click Import…」를 지웠다.
  - L-IOS LNB(LIOS 변형)와 GNB(연결 장비 T-IOS)를 적용했다.
  - 디스크립션 · 정책은 조회 기준으로 다시 썼다.
  - 워크벤치에 「Assay Pack Setting (조회 전용)」 그룹으로 등록했다.
- 프로토타입
  - 상단 「사용자 : T-IOS / L-IOS (조회 전용)」 전환을 추가했다(웹 · 앱 구분이 아니라 사용자 구분). L-IOS에서는 Import · Delete · 체크박스 · 토글 변경이 없다.
  - Master 토글을 누르면 Alert_045가 뜬다.

---

## [T-IOS 2.0] 2026-10-23 · Active 직접 끄기, 다중 Import, Import preview 삭제, Master 우선 정렬

- Active 토글
  - 직접 끌 수 있다(Confirm_030 「Deactivate this version?」 → Toast). 적용 버전이 없는 상태도 허용한다.
  - 켤 때는 Confirm_029 후 같은 File type · Reagent Product Name의 기존 활성 버전을 자동으로 끈다. 동시에 2개가 활성일 수 없다.
  - Master만 최신 버전을 강제 활성하고, 토글은 선택 불가다.
- Import
  - **여러 파일**을 선택하거나 끌어놓을 수 있다. 개수 · 용량 제한은 없고 json만 받는다.
  - File type 선택 항목을 지웠다. 파일 안의 fileInfo.fileType으로 판별한다.
  - Alert_043(용량) · Alert_044(1개만)는 지웠다(정의 · Alert 표).
- **`TI-STN-08-02` Import preview를 지웠다.**
  - 이상이 없으면 바로 등록하고 최신 버전을 자동 활성한 뒤 Alert_039(「Import complete」 / 「The files have been imported successfully.」)를 띄운다.
  - 같은 버전이 있으면 Confirm_028 「Some files have versions that are already registered. Overwrite them?」을 먼저 띄운다.
  - Confirm_027 행과 Import 정의의 미리보기 섹션을 지웠다.
- 유형별 정의와 File Data Case에서 **Master를 맨 앞**으로 옮겼다.
- 반영 범위
  - 팝업 정의(1 · 4 · 5 문구, 6 Confirm_030 추가), Confirm 표(030 추가), Import 정의(4 · 5로 재구성)
  - 목록 · Import file 디스크립션, 정책 1 · 2
  - 워크벤치(08-02 삭제), 프로토타입(다중 Import, 토글 끄기, 같은 버전 덮어쓰기)

---

## [T-IOS 2.0] 2026-10-23 · Assay Pack: Import · 활성 버전 · Master 추가 · 변경 내역 삭제

- 명칭: Upload를 **Import**로 바꿨다.
  - 대상: 버튼, 팝업(Import file / Import preview), Alert_039~044, Confirm_027, 디스크립션, 정책
  - 프레임명 `TI-STN-08 / 업로드 정의` → `TI-STN-08 / Import 정의`
- 목록 (`TI-STN-08` 계열 6개 화면)
  - 컬럼 순서: Reagent Product Name → Version → File type → File name → Registered Date/Time → Created Date/Time → User ID → **Active** → Details
  - 일시는 `YYYY-MM-DD hh:mm:ss`, File name은 확장자 제외, User ID는 `service`로 표기
  - **Active 토글** 규칙
    - File type · Reagent Product Name이 같은 파일 중 1개만 활성
    - 비활성 토글을 선택하면 Confirm_029 후 활성을 바꾸고 Toast를 띄운다. 활성 토글은 직접 끌 수 없다.
    - Master는 최신 버전이 자동 활성이고 토글은 Disabled
  - 검색 영역에 **Active only** 체크박스를 추가했다(활성 파일만 표시).
- Import
  - 버전은 누적 등록한다.
  - 같은 File type · Reagent Product Name · 버전이면 **Confirm_028(덮어쓰기 여부)** 후 등록한다.
  - [Apply]하면 최신 버전을 자동 활성하고, Alert_039를 「{type} {version} has been registered and activated.」로 띄운다.
- **변경 내역 삭제**
  - File details의 Changes 섹션을 지웠다.
  - Import preview의 New/Changed/Removed 요약, 변경 항목, 「+N more」, Compared with를 지웠다. 파일 정보와 활성 안내만 남긴다.
- **Master 파일 타입 추가**
  - 표시 순서: Test Group Info(칩) → Sample Type Info(표) → Barcode Schema Info(스키마 탭 + 길이 · 유효기간 Segment 순서 + Segment 표) → Item Group Info(칩)
  - 반영 범위: `TI-STN-08-P 유형별 정의`(카드 4개, 3326 × 2001), `TI-STN-08-P/File Data`(「Case. Master 화면」 추가, 높이 7254), File type 선택지
- File details File Info에 **Active** 항목을 추가하고, Upload Info를 Import Info로 바꿨다.
- 팝업 정의
  - 「4. 버전 덮어쓰기 확인 (Confirm_028)」, 「5. 활성 버전 변경 확인 (Confirm_029) · Toast」를 추가했다.
  - Confirm 표에 028 · 029 행을 추가했다.
- 정책: 파일 종류 · 활성, Import(덮어쓰기 · 자동 활성), 버전(누적), 삭제(활성 파일 Alert_042), 검색(Active only), 상세, 권한(활성 변경)을 다시 썼다.
- 프로토타입
  - 위 내용을 모두 반영했다.
  - 상단 시나리오에 「같은 버전」을 추가해 덮어쓰기 흐름을 확인할 수 있다.
  - Master 패널은 스키마 탭으로 Segment 표를 바꿔 볼 수 있다.

---

## [T-IOS 2.0] 2026-10-23 · Component Info 개수 배지 삭제

- Component Info 제목 옆에 있던 구성품 개수 배지를 지웠다. 구성품 수는 탭으로 확인할 수 있다.
- 반영 범위: `TI-STN-08-P`, `TI-STN-08-P/File Data`(Extraction · PCR Case), `TI-STN-08-P 유형별 정의`, 프로토타입

---

## [T-IOS 2.0] 2026-10-23 · File details 항목 간격 확대 (가독성)

- 항목이 많아 촘촘해 보이던 File details 패널의 간격을 넓혔다.
  - 섹션 안 요소 간격(제목 · 그리드 · 칩 묶음) 12 → 20
  - 항목 줄 사이 간격(그리드 세로 간격) 14 → 24
  - 라벨과 값 사이 간격 8 → 6
  - 칩 간격 6 → 8
  - 구성품 상세 영역 안 간격 10 → 20, 위아래 여백 16
- 반영 범위
  - `TI-STN-08-P`, `TI-STN-08-P/File Data`(메인 + Case 3개, 높이 5744), `TI-STN-08-P 유형별 정의`(높이 2066)
  - 프로토타입 패널: 그리드 세로 간격 20, 섹션 제목 여백, 칩 아래 여백 16, 구성품 영역 여백

---

## [T-IOS 2.0] 2026-10-23 · File details 패널과 유형별 정의 통일, JSON 순서 정렬

- File Data 영역 제거
  - `TI-STN-08-P`의 「File Data · Extraction」 요약(File Version · Product Name · Scheme · Components)을 지웠다.
  - `/File Data` 메인 화면과 Case 3개에서 「File Data」 제목과 안내 문구를 지웠다.
  - JSON의 fileInfo(fileType, fileVersion)는 File Info · Upload Info에 이미 나오므로 따로 표시하지 않는다.
- 패널 구성을 한 가지로 맞췄다: File Info → Upload Info → Changes → 시약 정보(JSON 순서).
  - `TI-STN-08-P`: 선택한 Row(ap_pcr_gi-b1_v5)와 같은 PCR 파일 내용을 패널 스크롤 영역에 표시하도록 바꿨다.
  - `TI-STN-08-P 유형별 정의`: 3개 카드를 File details 패널 내용 그대로 바꿨다(2508 × 1880).
- JSON 순서 정렬: PCR Reagent Basic Info를 Product Name → Product Code → Test Item Name → Test Item Code → Test Group Code → Test Target Selectable → Test Target Names → Sample Type Codes → Max Rxns → Max Usage Count 순으로 바꿨다. Pretreatment · Extraction은 이미 JSON 순서와 같았다.
- 디스크립션 · 정책 문구를 「시약 정보 : 파일 종류별 JSON 순서대로 표시」로 바꿨다.
- 프로토타입: File Data 제목과 File Type · File Version 칸을 지웠고, 시약 정보 제목을 File Info와 같은 단계로 맞췄다. PCR 순서도 Figma와 같게 바꿨다.

---

## [T-IOS 2.0] 2026-10-23 · 시약 정보 itemGroupName 추가

- 시약 정보 JSON에 새로 들어온 `itemGroupName`을 **Item Group Name** 항목으로 표시한다.
  - Pretreatment: Reagent Basic Info → `Tube`
  - Extraction: 구성품별(Component Info) → LB Tub `Tub`, MB Tube `Tub`
  - PCR: 구성품별(Component Info) → 5X GI-B(I) MOM `PCR reagent component`, GI-BP IC `IC`
- 반영 범위
  - `TI-STN-08-P 유형별 정의`(Ver 0.7.0, 공통 규칙에 설명 추가, 높이 1652)
  - `TI-STN-08-P/File Data`: 메인 화면과 Case 3개에 반영하고, Case 간격을 다시 정렬했다(높이 5574).
  - 프로토타입: 시약 데이터와 패널 표시. PCR은 구성품 탭에 따라 값이 바뀐다.

---

## [T-IOS 2.0] 2026-10-22 · 팝업 화면 ID 변경, 디스크립션에 이동 화면 명칭 표기

- 팝업 화면 ID를 `-01`, `-02` 형식으로 바꿨다.
  - `TI-STN-08-U` → **`TI-STN-08-01`** (Upload file)
  - `TI-STN-08-U/Preview` → **`TI-STN-08-02`** (Upload preview)
  - 적용 범위: 프레임명, CID, 프로토타입 상단 CID, 워크벤치 목록
- 디스크립션에서 화면이 바뀌는 곳마다 `[화면 ID] 화면명`으로 이동할 화면을 적었다.
  - `TI-STN-08`
    - [Upload] → `[TI-STN-08-01] Upload file` 팝업
    - 양식 확인 통과 → `[TI-STN-08-02] Upload preview` 팝업
    - Details → `[TI-STN-08-P] File details` 패널
  - `TI-STN-08-01` / `-02`: 노출 경로, 다음 화면, 닫기 · [Cancel] → `[TI-STN-08] 목록` (반영 없음), [Apply] → `[TI-STN-08] 목록` 최상단 추가
  - `TI-STN-08-P` · `/File Data`: 노출 경로를 `[TI-STN-08] 목록 → [TI-STN-08-P] File details`로 적었다. 파일 종류별 화면 참조는 `[TI-STN-08-P/File Data] File details · File Data`, [닫기] → `[TI-STN-08] 목록`으로 적었다.
  - 업로드 정의 4 · 5와 정책 2 · 6의 화면 참조도 같은 형식으로 맞췄다.

---

## [T-IOS 2.0] 2026-10-22 · Pagination 10페이지 복구

- 전체 검토 때 4~10페이지를 숨겼던 처리를 되돌렸다. 숨긴 상태에서는 인스턴스 안의 페이지 항목이 빠져 있었다.
  - Pagination 인스턴스 override를 초기화해 1~10페이지를 다시 표시하고, 1페이지를 Selected로 지정했다.
  - 반영 범위: `TI-STN-08`, `TI-STN-08-P`, `TI-STN-08-P/File Data`, `TI-STN-08-U`, `TI-STN-08-U/Preview`

---

## [T-IOS 2.0] 2026-10-22 · 업로드 용량 10 MB, 변경 비교 기준 변경

- 업로드 최대 용량을 100 MB에서 **10 MB**로 줄였다.
  - Alert_043 Sub title은 「Files larger than 10 MB cannot be uploaded.」로 바꿨다.
  - 반영 범위: 업로드 화면 안내, 디스크립션(`TI-STN-08`, `TI-STN-08-U`), 업로드 정의 6, 정책 2, Alert 표, 프로토타입
- 변경 내역 비교 기준을 바꿨다. 「이전 버전」 대신 **File type과 Reagent Product Name이 같은 파일 중 가장 최근에 업로드한 파일**과 비교한다.
  - 비교 대상이 없으면(해당 제품의 첫 업로드) 모든 항목을 New로 표시한다.
  - 반영 범위: Changes 정의(`TI-STN-08-P`, `/File Data`, 안내 문구 4곳), 업로드 미리보기(`TI-STN-08-U/Preview` 2, 업로드 정의 5), 정책 2
  - 업로드 미리보기 파일 정보에 **Compared with**(비교 대상 파일명, 없으면 -)를 추가했다. 프로토타입은 목록에서 같은 종류와 같은 제품의 최신 파일을 찾아 표시한다.

---

## [T-IOS 2.0] 2026-10-22 · 업로드 화면 · 업로드 미리보기 화면 추가

- 일반 Alert · Confirm 형식이 아닌 두 팝업을 화면 단위로 따로 정의했다. 목록 배경에 Dim을 깔고, 팝업과 번호 마커, 디스크립션을 붙였다.
  - `TI-STN-08-U` (Upload file): File type(필수), 파일 영역(json · 1개 · 100 MB, Alert_044/041/043), 선택한 파일(빼기 · 교체), [Cancel] / [Upload](양식 확인 → Alert_040 또는 미리보기)
  - `TI-STN-08-U/Preview` (Upload preview, Confirm_027): 파일 정보, 변경 요약(직전 버전 대비 New / Changed / Removed), 변경 항목(최대 5건, 「+N more」, 0건이면 미노출), 안내 문구, [Cancel] / [Apply](Alert_039)
- 참조 연결
  - `TI-STN-08` [Upload] 디스크립션의 화면 참조를 `[TI-STN-08-U] · [TI-STN-08-U/Preview]`로 바꿨다.
  - 업로드 정의 4 · 5 설명에 화면 참조를 추가했다.
- 프로토타입
  - 상단 CID를 `TI-STN-08-U` / `TI-STN-08-U/Preview`로 바꿨다.
  - 미리보기에서 「+0 more」를 숨겼다.

---

## [T-IOS 2.0] 2026-10-22 · Assay Pack 업로드 형식을 json 전용으로 변경

- 업로드 가능 형식을 csv · xlsx에서 **json**으로 바꿨다.
  - 업로드 화면 안내는 「json · 1 file only · Max 100 MB」로 바꿨다.
  - Alert_041 Sub title은 「Only .json files can be uploaded.」로 바꿨다. 팝업 정의 2-②와 Alert 표에 반영했다.
- 화면 속 파일명 예시(`ap_*_vN.xlsx / .csv`)를 모두 `.json`으로 바꿨다. 적용 범위: 목록, 패널, File Data, 업로드 미리보기
- 디스크립션 `TI-STN-08` [Upload], 정책 2(형식 : json → 그 외 Alert_041), 프로토타입(파일 확인, 샘플 파일, 목록 데이터)도 맞췄다.

---

## [T-IOS 2.0] 2026-10-22 · TI-STN-08-P 타입별 화면 통합 (TI-STN-04-02-T 형식)

- `TI-STN-08-P/Pretreatment`, `/Extraction`, `/PCR` 3개 프레임과 「전체 펼침」 3개를 하나로 합쳐 `TI-STN-08-P/File Data`(2252 × 5412)를 만들었다.
  - 상단: 메인 화면. Pretreatment 파일 상세 패널이며 패널 안에서 스크롤된다.
  - 하단: 녹색 Case 바 3개(「Case. Pretreatment 화면」, 「Case. Extraction 화면」, 「Case. PCR 화면」)를 두었다.
    - 각 Case 바 아래에 파일 종류별 구성 설명(좌)과 File details 패널 전체 펼침(우)을 배치했다.
- 디스크립션
  - CID를 `TI-STN-08-P/File Data`로 바꿨다.
  - File Data 화면 참조를 「하단 Case」로 바꿨다.
  - `TI-STN-08-P` 디스크립션과 정책 6의 참조를 `[TI-STN-08-P/File Data]`로 바꿨다.
- 워크벤치: pages.js 3줄을 1줄로 합쳤다. 이전 캡처 6장과 meta를 정리했다.
- 프로토타입 패널 CID 표기를 `TI-STN-08-P/File Data · Case. {type}`으로 바꿨다.

---

## [T-IOS 2.0] 2026-10-22 · TI-STN-08 전체 검토 (UX 규칙 · 레이아웃 정리)

- 기간 필드 (COMM-5-d)
  - 「Select Date Range」가 위로 붙어 보이던 문제를 고쳤다. 폰트가 Pretendard 12.86 / 28 박스였고, 이를 Inter 12 hint 스타일로 바꿔 세로 가운데 정렬했다.
  - 크기는 축소 복제로 생긴 소수값을 정수로 맞췄다. 높이 40, 좌우 여백 16, 아이콘 18, 간격 8, 테두리 1, 모서리 4이다.
  - 적용 범위: 목록, 패널, 타입별 화면 3개, 세부정의 2곳, 모두 합쳐 7곳이다.
- Pagination (COMM-5-i): 24건을 10개씩 보면 3페이지인데 1~10이 표시되고 있었다. 1~3만 남겼다.
- Delete 건수 표기를 남김없이 제거했다.
  - Confirm_026 타이틀은 「Delete the selected files?」(패널에서 삭제할 때는 「…file?」)로 바꿨다.
  - Toast는 「The selected files have been deleted.」로 바꿨다.
  - 적용 범위: 팝업 정의 3, Confirm 표, 패널 디스크립션 4개, 프로토타입
- 업로드 미리보기: 「+N more」 뒤에 남아 있던 [View all data] 안내를 삭제했다. 이 버튼은 이미 제거된 상태였다.
- 텍스트 겹침과 오탈자
  - 패널 File Data의 Reagent Product Name이 옆 칸과 겹치던 문제를 줄바꿈으로 고쳤다.
  - 팝업 정의 1의 이중 bullet을 지웠다.
  - 세부정의 제목을 「1-1. 등록된 파일 없음 정의」로 통일했다.

---

## [T-IOS 2.0] 2026-10-22 · Upload Result 삭제, 파일당 시약 1개, Segment 개수 제한 해제

- File details 패널 (`TI-STN-08-P`, `/Pretreatment`, `/Extraction`, `/PCR`, 프로토타입)
  - Upload Result 섹션을 지웠다.
  - 시약 정보는 파일당 1개라서 Upload Info의 행 건수(New / Changed / Unchanged / Total)를 뺐다. 등록 · 생성 일시, Version, User ID만 남긴다.
  - Changes는 이전 버전 대비 추가 · 변경 항목으로 정의했다.
- 바코드 Segment
  - 8칸 고정을 없앴다. 파일에 들어온 Segment 개수만큼 Segment 순서(segmentOrder) 오름차순으로 표시한다.
  - 「Segments」는 「n / 8」 대신 개수로 표기한다.
  - 적용 범위: `TI-STN-08-P 유형별 정의`(Ver 0.6.0), 타입별 화면 3개와 「전체 펼침」, 프로토타입
- 업로드 결과 · 미리보기
  - Alert_039 Sub title을 「The file has been registered as {type} {version}.」으로 바꿨다. 팝업 정의 1, Alert 표, 프로토타입에 적용했다.
  - Confirm_027 미리보기는 New / Changed / Removed만 남기고 Unchanged · Total은 뺐다. 업로드 정의 5, 정책 2, 프로토타입에 적용했다.

---

## [T-IOS 2.0] 2026-10-22 · Assay Pack 파일 종류 정리 · 시약 정보 반영 · UX 규칙 재점검

- 파일 종류
  - Master Info를 모두 삭제했다. 목록, 검색 File type, 업로드 화면, 유형별 정의, 정책, 프로토타입이 대상이다.
  - 이름을 바꿨다: Pretreatment Reagent Info → **Pretreatment**, Extraction Reagent Info → **Extraction**, PCR Reagent Info → **PCR**
- 목록 (`TI-STN-08`, `TI-STN-08-P`, `세부정의`)
  - 컬럼 순서를 File name | **Reagent Product Name** | File type | Version | Registered Date/Time | Created Date/Time | User ID | Details로 바꿨다. Reagent Product Name은 새로 넣었다.
  - [Delete] 버튼의 선택 건수 표기를 지웠다.
  - 사용자 요청으로 적용 중(Active) 표시를 지웠다. 배지 · 행 색 · 상단 고정이 모두 빠지고, 등록 일시 최신순만 남는다.
- Common UX 규칙 재점검
  - COMM-4-a: 일시 표기를 `YYYY-MM-DD hh:mm`으로 바꿨다(초 삭제).
  - COMM-5-m Web view: Items 옆에 노출 개수 Dropdown(10 / 30 / 50 / 100 items)을 넣었다.
  - COMM-5-i: 2페이지 이하일 때 First / Last 버튼을 숨겼다(프로토타입).
  - COMM-5-d: 기간 선택을 최소 7일 ~ 최대 1년으로 제한했다(프로토타입 [Apply] 조건 · 안내 문구).
  - COMM-4-b: 수량을 `{수량} {단위} (1 {포장 단위})`로 표기한다. 예: `96 rxns (1 tub)`
- `TI-STN-08 / Details`: 사용자가 Figma에서 삭제했다. 이에 맞춰 정리했다.
  - 패널의 [View all data] 버튼 · 설명 5 · 마커 5를 숨겼다.
  - 목록 설명 4-1과 정책 6의 참조를 지웠다.
  - Workbench 메뉴와 캡처, 프로토타입의 업로드 데이터 화면을 지웠다.
- 시약 정보 JSON 반영
  - `TI-STN-08-P 유형별 정의`(Ver 0.5.0)를 Pretreatment / Extraction / PCR 3개 패널로 다시 만들었다.
    - 항목: File Info, Reagent Basic Info, Barcode Info(Schema · Segment 순서별 코드), Quantity Info, Storage Location Info
    - Component Info 탭(Extraction · PCR)
    - PCR 전용: Test Target Names, Sample Type Codes, Extraction Device Availability, Socket Positions
  - 화면 3개를 새로 만들었다: `TI-STN-08-P/Pretreatment`(`487:31314`), `/Extraction`(`487:32633`), `/PCR`(`487:34046`)
    - 패널 안을 스크롤하는 화면이다.
    - 프레임 아래에 「패널 스크롤 전체 펼침」을 두었다.
  - 기본 `TI-STN-08-P` 패널 값도 Extraction 예시로 바꿨다.
- 업로드 정의 · Alert / Confirm
  - 업로드 화면 · 미리보기 예시를 PCR 파일로 바꿨다. 미리보기 안내 문구는 「latest file」로 고쳤다.
  - Alert_039 ~ 044, Confirm_026 · 027 행의 Case에 해당 정의 프레임 번호를 넣었다.
- 정책 (Ver 0.2.0): 파일 종류, 버전, 삭제, 검색(노출 개수 · 7일 ~ 1년), 상세 항목을 고쳤다.
- 프로토타입
  - 시약 정보 JSON 기반 데이터와 패널을 넣었다.
  - 새 컬럼 순서, 노출 개수 선택, hh:mm 표기를 반영했다. Active 표시는 지웠다.
  - 업로드 데이터 화면을 지웠다.

---

## [T-IOS 2.0] 2026-10-22 · 기간 검색을 COMM-5-d Calendar 정의에 맞춤

- 사용자 지적 사항
  - 기간 선택이 공통 UX `COMM-5-d(1~4/5)` Calendar 정의와 달랐다.
  - [Last 7 days] / [Last 30 days]는 정의에 없는 요소라 뺐다.
- Figma (`TI-STN-08`, `TI-STN-08-P`, `TI-STN-08 / 세부정의` 2곳)
  - YYYY-MM-DD 입력칸 2개와 빠른 선택 버튼을 지웠다.
  - 그 자리에 COMM-5-d의 Period 필드(「Select Date Range」, 캘린더 아이콘)를 넣었다. `143:59124`를 복제했다.
  - 기간 유형 Dropdown(Registered / Created Date)은 그대로 둔다.
- 설명과 정책
  - `TI-STN-08` 설명 1-2를 COMM-5-d 기준으로 다시 썼다.
  - 설명 1 · 3 · 4를 줄여 프레임 높이를 1,031로 되돌렸다.
  - `TI-STN-08 / 정책` 5 검색에서 빠른 선택을 빼고 Period Filters 기준으로 고쳤다.
- 프로토타입: 기간 필드 하나 + Period Filters 팝업을 만들었다.
  - 탭: Date 탭(Day / Month / Quarter / Year 달력, Start · End), Period 탭(Week / Month / Year 슬라이더, 「Find Data From N … Ago To Today!」)
  - 입력값이 없으면 시작은 이전 달, 종료는 이번 달을 보여 준다.
  - 미래 날짜는 선택할 수 없다. 종료일은 시작일 이후만, 시작일은 종료일 이전만 고를 수 있다.
  - 아래 Input Field는 「Select Date」이고, YYYYMMDD로 입력하면 YYYY-MM-DD로 바뀐다.
  - 오류 문구는 Invalid date / Write the correct date format / Start ≤ End / End ≥ Start 네 가지다.
  - [Apply]는 시작일 · 종료일이 모두 유효하고 값이 바뀌었을 때만 활성이다. 누르면 필드에 「YYYY-MM-DD ~ YYYY-MM-DD」로 표기된다.

---

## [T-IOS 2.0] 2026-10-22 · R007 적용 중 파일 · 업로드 화면 · 미리보기 · 검색 개선 · 정책

> Workbench 요청 R007 (이상헌): 적용 중 파일 최상단 고정·색 구분, 적용 중 파일 삭제 불가 알림, 업로드 미리보기(팝업), 파일 업로드 화면(100 MB, 1개), 검색창 넓히기, 최근 7일·30일 버튼, 목록 버전 = 파일 버전, 정책 정리

- 목록 (`TI-STN-08`, `TI-STN-08-P`)
  - 적용 중 파일 4개(종류별 1개)를 최상단에 고정했다. 행 배경을 연한 청록으로 하고 Active 배지를 달았다.
  - 체크 예시는 적용 중이 아닌 파일로 옮겼다.
- 검색 (`TI-STN-08`, `TI-STN-08-P`, `세부정의` 2곳)
  - File name 입력칸을 넓혔다.
  - 기간 옆에 [Last 7 days] / [Last 30 days] 버튼을 넣었다.
- 새 프레임 `TI-STN-08 / 업로드 정의` (`471:31746`)
  - 4 파일 업로드 화면: 선택 전과 선택 후 상태. File type 선택, 끌어놓기 영역, csv · xlsx · 1개 · 최대 100 MB
  - 5 업로드 미리보기 (Confirm_027): New / Changed / Removed / Unchanged / Total, 변경 항목 5건 + 「+N more」, 적용 중 파일 교체 안내, [Cancel] / [Apply]
  - 6 업로드 제한 알림: Alert_043 (100 MB 초과), Alert_044 (2개 이상)
  - 7 적용 중 파일 삭제 불가: Alert_042
- 새 프레임 `TI-STN-08 / 정책` (`473:31790`)
  - 다루는 정책: 파일 종류 · 적용, 업로드, 버전, 삭제, 검색, 상세 · 데이터 확인, 권한
  - 「기획 확인」 항목: 파일 종류 자동 판별, 같은 버전 · 낮은 버전 업로드, 권한
- Alert · Confirm 표에 Alert_042 ~ 044와 Confirm_027을 추가했다. Alert · Confirm 섹션 높이도 늘렸다.
- 설명
  - `TI-STN-08`: 1에 빠른 선택, 3에 삭제 · 업로드 흐름, 4에 적용 중 고정과 「Version = 파일 버전」을 넣었다. 프레임 높이는 1,174로 늘렸다.
  - `TI-STN-08-P`: 4 [Delete]에 적용 중 파일 처리를 넣었다.
- 프로토타입
  - 화면 폭을 1,760으로 넓혔다.
  - 적용 중 고정 · 배지 · 삭제 불가 알림을 넣었다.
  - 업로드 화면 → 미리보기 → Apply 흐름을 넣었다. 끌어놓기, 1개 · 100 MB · 형식 검사, 업로드 후 적용 중 전환까지 동작한다.
  - 빠른 기간 선택을 넣고, 「다음 업로드 결과」에 「용량 초과」를 추가했다.
- Workbench 메뉴에 새 프레임 2개를 추가하고 캡처를 갱신했다.

---

## [Tool] 2026-10-22 · 프로토타입 검색 영역을 Figma와 맞춤

- `Assay_Pack_Prototype.html`의 검색 영역을 Figma `TI-STN-08`처럼 한 줄로 바꿨다. 순서는 [File name][File type] │ [Period ▾][YYYY-MM-DD] ~ [YYYY-MM-DD] … [Reset][Search]이다. 이전에는 입력 검색과 기간 검색을 두 줄로 나눴다.
- 기간 입력칸은 비어 있으면 「YYYY-MM-DD」 안내를 보여 준다. 칸을 누르면 달력이 열리고, 값을 지우면 다시 안내로 돌아간다.

---

## [T-IOS 2.0] 2026-10-22 · Assay Pack 테이블을 텍스트 정렬 범례에 맞춤

- 텍스트 정렬 범례 기준
  - 왼쪽: 이름(ID, 모듈명, 유닛명 등), ~Type, 소모품 수량, 라벨
  - 가운데: 컴포넌트만 있는 열, 한 글자 데이터(Y/N), 날짜, 수치
  - 오른쪽: Usage, 개수, 금액
- 열별 점검 결과
  - `TI-STN-08` · `TI-STN-08-P` · `세부정의` 목록: 이미 범례와 맞아서 바꾸지 않았다.
    - 왼쪽: File name, User ID, File type
    - 가운데: 체크박스, Details, 일시, Version
  - `TI-STN-08 / Details` 업로드 데이터: 모두 왼쪽(이름 · 코드 · Type · 라벨)이라 범례와 맞는다.
  - `TI-STN-08-P 유형별 정의` 검체 타입 표(이름 · 코드): 가운데 → 왼쪽으로 바꿨다.
- `TI-STN-08` 설명 4와 `TI-STN-08 / Details` 설명 4에 범례 기준 정렬을 열별로 적었다.
- 프로토타입은 이미 같은 정렬이다.

---

## [T-IOS 2.0] 2026-10-22 · Assay Pack 화면 설명 정리

- 화면과 맞지 않던 설명을 고쳤다. 팝업 안내에는 `TI-STN-08 / 팝업 정의` 번호와 Alert · Confirm ID를 함께 적었다.
- `TI-STN-08` (Ver 0.3.0)
  - 1-1 File type 값을 영어 명칭으로 바꿨다.
  - 3 [Delete]: Confirm_026 · 팝업 정의 3-①, Toast 3-②
  - 3 [Upload]: Alert_039 · 1, Alert_040 · 2-①, Alert_041 · 2-②
  - 4 목록: 영어 컬럼명, 정렬 규칙(일시 · Version 가운데, 나머지 왼쪽)
  - 4-1 Details: 목록 위에 겹쳐 뜨는 패널
- `TI-STN-08-P` (Ver 0.4.0)
  - 3 File details: 영어 항목명, 「+N more」, File Data는 요약 예시와 유형별 정의 참조, 패널 스크롤
  - 4 [Delete]: Confirm_026 · 3-①, Toast(1 file has been deleted.) · 3-②, [Cancel] 시 패널 유지
- `TI-STN-08 / Details` (Ver 0.3.0)
  - 1 검색: 빠져 있던 System Code 검색을 추가했다.
  - 4 목록: 출력 컬럼과 정렬을 적었다.

---

## [T-IOS 2.0] 2026-10-22 · R006 일자 · 버전 열 가운데 정렬

> Workbench 요청 R006 (이상헌): 일자, 버전은 가운데 정렬로 다시 변경

- Registered Date/Time, Created Date/Time, Version 열의 헤더와 본문을 가운데 정렬로 되돌렸다. 나머지 열은 R005대로 왼쪽 정렬이다.
- `TI-STN-08`, `TI-STN-08-P`, `TI-STN-08 / 세부정의`와 프로토타입에 같이 적용했다.

---

## [T-IOS 2.0] 2026-10-22 · Assay Pack 팝업을 Alert · Confirm 목록에 등록

- `TI-STN-08 / 팝업 정의`의 팝업을 SH.L 「Alert」(`422:32392`) · 「Confirm」(`422:33059`) 섹션 표에 추가했다.

  | ID | Property | 내용 |
  |---|---|---|
  | Alert_039 | Done | Upload complete · New / Changed / Unchanged (Total) |
  | Alert_040 | Warning | Invalid file format (업로드 양식과 맞지 않음) |
  | Alert_041 | Error | Unsupported file type (csv · xlsx 외) |
  | Confirm_026 | Warning | Delete {N} file(s)? · [Delete] / [Cancel], 목록 · File details 패널 공통 |

  - 행은 기존 행 서식을 복제했다. Alert 섹션은 늘어난 행에 맞춰 높이를 4,347로 키웠다.
  - 삭제 완료 Toast는 팝업이 아니라서 목록에 넣지 않았다.
- 화면 설명에 팝업 ID를 넣었다.
  - `TI-STN-08` 설명 3 [Delete], [Upload]
  - `TI-STN-08-P` 설명 3 · 4
  - `TI-STN-08 / 팝업 정의` 제목과 각 팝업 라벨
- Workbench 캡처를 갱신했다.

---

## [T-IOS 2.0] 2026-10-22 · R005 테이블 내용 왼쪽 정렬

> Workbench 요청 R005 (이상헌): 테이블 안에 있는 내용은 왼쪽 정렬로 변경

- `TI-STN-08` 목록 테이블의 헤더와 본문 셀을 왼쪽 정렬로 바꿨다. 셀 좌우 여백은 20px로 맞췄다.
- 체크박스 열과 Details(›) 열은 가운데 정렬을 유지했다.
- 같은 목록을 쓰는 `TI-STN-08-P`, `TI-STN-08 / 세부정의`와 업로드 데이터 테이블 `TI-STN-08 / Details`도 같이 맞췄다.
- 프로토타입 테이블도 같은 정렬로 바꿨다.

---

## [T-IOS 2.0] 2026-10-22 · R004 Assay Pack 화면 한글 → 영어

> Workbench 요청 R004 (이상헌): 화면에 있는 한글을 전부 영어로 변경, 화면에 있는 것만 (파일 타입 등)

- 화면 UI의 한글 텍스트 167개를 영어로 바꿨다. 대상은 `TI-STN-08`, `TI-STN-08-P`, `TI-STN-08 / Details`, `TI-STN-08-P 유형별 정의`의 File Data 패널이다.
  - 파일 종류: Master Info / Pretreatment Reagent Info / Extraction Reagent Info / PCR Reagent Info
  - File Data 항목명: 예) File Version, Test Group Code, Sample Type Name, Reagent Product Name, Max Reactions, Instrument Type, Row / Column
  - Segment 명칭: 예) Product ID, Mfg No. (1), Mfg Date, Expiry Date, Lot Production ID
  - 기타: Upload complete · Format matched, 「외 N건」 → 「+N more」
- 우측 설명 영역, 세부정의·팝업 정의의 정의 문구, 유형별 정의 머리말과 주석은 한글 그대로 두었다.
- 프로토타입 화면도 같은 영어로 바꿨다. 상단 도구 막대와 안내 상자는 한글 그대로 둔다.

---

## [T-IOS 2.0] 2026-10-22 · 바코드 Segment 칸 간격 조정

- Segment 칸의 「Segment N · 코드」와 Segment 명칭 사이 간격을 2 → 6px로 넓혔다. 칸 위아래 여백은 6 → 8px로 바꿨다.
- `TI-STN-08-P 유형별 정의`(`366:32307`)의 Segment 칸 72개에 모두 적용했다. 그리드마다 칸 높이를 가장 긴 칸에 맞췄다(프레임 높이 1,408).
- 프로토타입도 같은 간격으로 맞췄다.

---

## [T-IOS 2.0] 2026-10-22 · 마스터 정보 항목 정정

- 사용자 확인에 따라 마스터 정보 항목을 고쳤다(`TI-STN-08-P 유형별 정의` `366:32307`, 프로토타입).
  - 검사군 정보: **검사군 코드**만 표시한다. 임의로 넣었던 검사군 명칭(STI, HPV 등)은 뺐다.
  - 검체 타입 정보: 열 이름을 **검체 타입 명칭 / 검체 타입 코드**로 바꿨다.
- 코드 값(TG-STI, ST-URN 등)은 아직 예시 값이다.

---

## [T-IOS 2.0] 2026-10-22 · R003 File details 패널을 목록 위 오버레이로 변경

> Workbench 요청 R003 (이상헌): 디테일을 누르면 화면을 2분할하지 않고, 지금 위치 그대로 테이블 위에 팝업처럼 띄운다.

- 요청은 이전 초안(`260:30619`)에서 들어왔지만, 현재 패널 프레임 `TI-STN-08-P`(`344:31083`)에 적용했다.
- 목록을 TI-STN-08과 같은 전체 너비(9열)로 되돌렸다. File details 패널은 같은 위치(목록 우측)에서 목록 위에 겹쳐 뜨고, 그림자를 넣었다.
- 패널 설명을 고쳤다.
  - 화면 노출 경로: 목록 위 오버레이, 2분할 아님
  - 1 목록 버튼: 패널이 열려 있는 동안 가려짐 → 패널을 닫은 뒤 사용
  - 가려진 버튼을 가리키던 마커 1은 숨겼다.
- 프로토타입도 같은 방식으로 바꿨다. 패널 내용이 길면 패널 안에서 스크롤한다.
- Workbench 캡처를 갱신했다.

---

## [T-IOS 2.0] 2026-10-22 · Assay Pack 프레임 명칭 교체

- 사용자 요청으로 두 프레임의 이름을 서로 바꿨다.
  - `344:31083` 우측 File details 패널 → **TI-STN-08-P** (CID TI-STN-08-P)
  - `306:32960` 업로드 데이터 확인 화면 → **TI-STN-08 / Details** (CID TI-STN-08)
  - `366:32307` 유형별 정의 → **TI-STN-08-P 유형별 정의**
- 목록 설명 4-1, 패널 설명 3 · 5의 화면 참조도 함께 바꿨다.
- 프로토타입 상단 화면 표시와 안내 문구도 같은 이름으로 맞췄다.
- 아래 이전 이력의 프레임 이름은 당시 기준이다.

---

## [T-IOS 2.0] 2026-10-22 · Assay Pack Template Download 삭제

- 사용자 요청으로 [Template Download] 버튼을 삭제했다. 목록 버튼은 [Delete] / [Upload]만 남는다.
  - 적용 프레임: `TI-STN-08`, `TI-STN-08 / Details`, `TI-STN-08 / 세부정의`(2곳)
- 설명과 팝업 문구에서 양식 다운로드 안내를 지웠다.
  - 목록 설명 3, Details 설명 1
  - 팝업 정의 2-① 설명과 본문: "The file does not match the upload format. Check the file contents and try again."
- 검색 영역 번호를 설명과 맞췄다(1-1 입력 검색, 1-2 기간 검색, 1-3 기능 버튼). 3번 마커는 [Delete] 옆으로 옮겼다.
- 프로토타입에서도 버튼, 양식 CSV 다운로드 기능, 안내 문구를 지웠다.

---

## [T-IOS 2.0] 2026-10-22 · Assay Pack 파일 종류 정리, 검색 재배치, 유형별 File Data

- 파일 종류 명칭을 바꿨다.
  - 공통정보 → **마스터 정보**
  - 전처리시약 정보 → **전처리 시약 정보**, 추출시약 정보 → **추출 시약 정보**
  - 파일명 예시도 `ap_common_*` → `ap_master_*`로 바꿨다.
- 검색 영역을 입력 검색과 기간 검색으로 나눴다(`TI-STN-08`, `TI-STN-08 / Details`, `TI-STN-08 / 세부정의`).
  - 입력 검색: File name, File type
  - 기간 검색: Period 유형 Dropdown(Registered Date / Created Date) + 기간
  - Created 기간 필드는 없앴다. 기간 유형을 골라 한 번에 하나만 검색한다.
- `TI-STN-08 / Details`(`344:31083`) 패널에 File Data 요약을 넣었다. 패널 설명 3에 File Data 항목을 추가했다.
- 새 프레임 `TI-STN-08 / Details 유형별 정의`(`366:32307`, x 20,350 / y 69,903)를 만들었다. 파일 종류별 File Data 항목:
  - 마스터 정보: 파일 버전, 검사군 정보, 검체 타입 정보(타입 명칭 / 코드), 바코드 체계 정보
  - 전처리 시약 정보: 시약 정보, 바코드 정보, 수량 정보, 저장소 위치 정보
  - 추출 시약 정보: 시약 기본 정보, 바코드 정보, 구성품 탭(구성품 정보 / 바코드 / 수량 / 저장소 위치: 모델 · 유닛)
  - PCR 시약 정보: 시약 · 검사 항목 정보, 장비 타입(M9600 / STARlet 중 하나), 바코드 정보, 구성품 탭(13개 항목)
  - 바코드 Segment는 체계 명칭에 따라 구성이 다르고, 순서대로 최대 8칸 표시한다(빈 칸은 「-」). 칸에는 순서, 고유 코드, 명칭을 표시한다.
- `Assay_Pack_Prototype.html`에도 같은 내용을 반영했다.
  - 1440 화면 폭에 맞춰 검색은 두 줄(입력 / 기간)로 배치했다.
  - 마스터 정보 파일은 바코드 체계 Dropdown으로 Segment 구성을 바꿔 볼 수 있다.
  - 추출 · PCR 파일은 구성품 탭으로 바꿔 볼 수 있다.

---

## [Tool] 2026-10-22 · Assay Pack 프로토타입 추가, RUN 프로토타입 삭제

- `Assay_Pack_Prototype.html`을 추가했다(Web, T-IOS 2.0). 확인할 수 있는 흐름:
  - 파일 목록, 4종 검색
  - 체크박스 선택 → Delete → 확인 팝업 → Toast
  - Upload → 결과 / 양식 오류 / 형식 오류 팝업
  - 양식 CSV 다운로드
  - 업로드 데이터 확인(-P)
- 가이드·Workbench·변경 이력 상단 메뉴에 「Assay Pack 프로토타입」을 넣었다.
- 사용자 요청으로 `RUN_Prototype.html`을 삭제했다.
  - 상단 메뉴 링크와 가이드(md/html)·README의 안내도 함께 지웠다.
  - 아래 이력 본문에 남은 언급은 당시 기록이라 그대로 둔다.

---

## [T-IOS 2.0] 2026-10-21 · Assay Pack Setting 초안 (TI-STN-08)

> 위치: SH.L 「CURECA 2.0 / Assay Pack Setting」 섹션, Tube Setting 참조 프레임 아래 행(y 72,650 / 73,897)
> 참조: Tube Setting(`257:60580`, `257:61505`, `257:62959`, `257:62423`, `257:63217`)을 복제해 테이블 구조와 라이브러리 컴포넌트를 그대로 유지했다.

| 프레임 | Node ID | 내용 |
|---|---|---|
| `TI-STN-08` | `260:30414` | 목록: Assay Pack 검색, Items, [Add], 9열 테이블, Pagination |
| `TI-STN-08-P` | `260:30619` | 상세 보기: 좌측 목록 + Assay Pack details(Code / Pack / Protocol / Sample & Tube), [Delete]·[Modify] |
| `TI-STN-08-P` | `260:30991` | 등록/수정: 입력 필드·드롭다운, [Cancel]·[Save] |
| `TI-STN-08 / 세부정의` | `260:30910` | 항목 없음, 검색 결과 없음 |
| `TI-STN-08-P / 세부정의` | `260:31249` | Assay Pack 추가 시 화면 Case |

- 테이블 열: Assay Pack name, LIS Code, System Code, Target, Sample Type, Tube, Protocol, Modified Date/Time, Details.
  - Tube Setting의 Socket / Height / Cap / Body 열을 Target / Sample Type / Tube / Protocol로 바꿨다.
- 상세 항목
  - Code Info: System Code *, LIS Assay Code *
  - Pack Info: Name *, Manufacturer, Kit Version, Catalog No., Target *, Reactions / Pack *, Storage (°C), Expiry Alert
  - Protocol: Pre-Treatment *, Extraction *, 버전 배지
  - Sample & Tube: Sample Type / Tube *
- 공통 UX 적용: 검색(AND, Like), Pagination(COMM-5-i), 말줄임 Tooltip(COMM-5-o), 정렬(COMM-5-v), Confirm_009/010/012.
- LNB: Setting 하위에 Tube Setting을 일반 항목으로 두고, 그 아래 Assay Pack Setting을 선택 상태로 추가했다.
- description: Ver 0.1.0, 2026.10.21, 작성자 이상헌. 「(기획 확인 필요)」 항목
  - 사용 중인 Assay Pack 삭제 제한
  - Sample Type별 Tube 필터
- 글꼴: 편집한 텍스트 가운데 Pretendard였던 것(약 27개)은 Noto Sans KR로 바꿨다. 나머지는 원래 Inter를 유지했다.
- 예시 데이터(STI 7, HPV 28, RV 16 등)와 Protocol 이름은 화면 확인용 가상 값이다.

## [Workbench] 요청 처리

| 요청 | 처리일 | 요청자 | 대상 | 처리 내용 |
|---|---|---|---|---|
| R001 | 2026-10-21 | 이상헌 | Revision history (Mobile) `175:19357` | Table 아래 40px(x 100, y 516)에 파란 사각형 500×800(`#2463DF`, `241:16`) 추가 |

---

## [Tool] 2026-10-21 · Workbench 캡처 자동 갱신 · 실시간 보기 유지

- 고친 문제
  - 「실시간」을 켜고 다른 메뉴에 갔다 오면 캡처 화면으로 돌아가던 문제. 이제 켬/끔 상태를 기억한다.
  - Figma에서 직접 고친 내용(예: R001 사각형 삭제)이 캡처 화면에 남아 있던 문제.
- 플러그인(Common UX Color Sync)
  - SH.L이 바뀌면 바뀐 최상위 프레임을 PNG로 내보내 Workbench로 보낸다(1.5초 대기 후 묶어서). 기본값은 켜짐이다.
  - 삭제처럼 대상 프레임을 알 수 없는 변경은 화면에 보이는 프레임(최대 4개)을 다시 캡처한다.
  - 수동 버튼: 「보이는 프레임 캡처」, 「SH.L 전체 캡처」.
- 서버: `/api/shots`를 추가했다. PNG는 `workbench/shots`에, 캡처 시각·크기·캡처한 사람은 `workbench/shots_meta.json`에 저장한다.
- Workbench: 3초마다 캡처 정보를 확인한다. 보고 있는 프레임이 바뀌었으면 스크롤 위치를 그대로 두고 이미지만 바꾸며, 캡처 시각과 캡처한 사람을 표시한다.
- Revision history (Mobile) 캡처를 R001 사각형이 삭제된 현재 상태로 다시 받았다.

## [Tool] 2026-10-21 · 변경 이력 페이지

- `Change_History.html`을 추가하고 상단 메뉴(가이드·Workbench·RUN 프로토타입)에 「변경 이력」을 넣었다.
- 표 열: 수정일자, 작업내용, 처리상태, 수정자.
- 수정 요청(`edit_requests.json`)과 컬러 이력(`color_tokens.json`)을 합쳐 최신순으로 정렬한다.
- 10개씩 보여 주고, 페이지 번호는 10페이지 단위로 넘긴다(COMM-5-i 규칙). 종류 필터(전체 / 수정 요청 / 컬러)가 있고, 3초마다 새로고침한다.
- 수정자: 요청은 「요청자 → 마지막 처리자」, 컬러는 저장·반영한 사람이다. 작업자 기록을 넣기 전의 이력은 「—」로 표시한다.

## [Tool] 2026-10-21 · 상단 메뉴 · 작업자 기록 · Git 연결

- 가이드, Workbench, RUN 프로토타입을 상단 메뉴로 서로 오갈 수 있게 했다.
- 상단 「작업자」 이름은 가이드와 Workbench가 같이 쓴다(브라우저에 저장).
- 작업자 기록
  - 가이드 컬러 저장: 이력의 `by`에 작업자를 남긴다. 이름이 없으면 저장할 수 없다.
  - 플러그인 반영: Figma 로그인 사용자 이름을 `○○ (Figma)`로 남긴다(manifest `currentuser` 권한).
  - 수정 요청: 요청자(`author`)와 마지막 상태 변경자(`updatedBy`)를 남긴다.
- Figma에서 직접 고친 내용은 이 도구들로 추적되지 않는다. Figma의 버전 기록(File › Show version history)에서 확인한다.
- 작업 폴더를 Git 저장소(`origin` = sh94-hub/UX_AI_TEST, 브랜치 `SH.L`)로 연결했다.
  - 커밋 작성자는 `sh94-hub <sh94@brex.kr>`이다.
  - 첫 작업 커밋의 작성자도 이 계정으로 바꿨다.

## [Tool] 2026-10-21 · Figma Workbench (SH.L 작업 페이지)

- `Figma_Workbench.html`
  - 위쪽: SH.L 프레임 캡처 뷰어(맞춤·확대·드래그, Figma 실시간 임베드, Figma 열기).
  - 아래쪽: depth 메뉴(플랫폼 › 구분 › 페이지(CID) › 상세(i/N))와 수정 요청 입력·목록.
  - 분할선으로 위·아래 크기를 조절한다.
- `workbench/pages.js`: SH.L 최상위 프레임 104개(PC 58 · Mobile 46)의 node ID, 이름, 크기.
- `workbench/shots/`: 2026-10-21 시점 프레임 캡처 104장. 세로로 긴 프레임은 너비 약 1,600px로 캡처했다.
- `guide_server.ps1`: `/api/requests`(등록·상태 변경·삭제)를 추가했다. 저장 위치는 `workbench/edit_requests.json`.
- 검증: 메뉴 depth 이동(PC·Mobile·RUN), 요청 등록 → 상태 변경 → 삭제, 375px 폭 가로 넘침 없음, 콘솔 오류 없음. 테스트 요청은 삭제했다.

---

## [Guide] 2026-10-20 · 컬러 편집에 Mobile 추가

- (수정) 플러그인의 대상 개수가 컴포넌트 1건으로만 표시되던 문제를 고쳤다. 같은 색을 물려받는 인스턴스도 센다. 예: M-SB/Header 1 + 인스턴스 39 = 40, M-SB/Marker 1 + 175 = 176. 이미 기록된 헤더 배경(Mobile) 반영 이력의 1건도 40건으로 바로잡았다.

- Mobile 토큰 6종을 추가했다. 대상 레이어 수는 조사 시점 기준이다.

  | 토큰 | 원래 값 | 대상 | PC 짝 |
  |---|---|---|---|
  | `m-header-bg` | `#F8F8F8` (Gray_100) | M-SB/Header 컴포넌트 칠, 인스턴스 39개 자동 반영 | `header-bg` |
  | `m-header-line` | `#F0F1F3` | M-SB/Header 컴포넌트 테두리 | `header-line` |
  | `m-table-head-bg` | `#F8F8F8` | M-COMM·Revision (Mobile) `tableHead` 7개 | `table-head-bg` |
  | `m-table-row-line` | `#F0F1F3` | M-COMM·Revision (Mobile) `tr` 37개 | `table-row-line` |
  | `m-section-title-bg` | `#6A0000` | section title (Mobile) | `section-title-bg` |
  | `m-marker` | `#0FC0BB` (Primary_500) | M-SB/Marker 컴포넌트, 인스턴스 175개 자동 반영 | `desc-number` |

- **PC 변경 시 함께** 옵션
  - 기본값은 켜짐이다. 켜 두면 PC 색을 저장할 때 짝이 되는 Mobile 색도 같은 값으로 바뀐다.
  - 끄면 Mobile만 따로 바꿀 수 있다.
  - Mobile 값을 직접 입력하면 그 값이 우선한다.
- Mobile 색 반영 방식: Mobile 대상은 라이브러리 변수에 연결돼 있으므로, 플러그인이 반영할 때 연결을 풀고 HEX 값으로 바꾼다(`rule.unbind`).
- 규칙 분리
  - PC의 `tableHead`·`tr`은 최상위 프레임 이름이 `M-`나 `Revision history (Mobile)`인 것을 뺀다(`rule.top`).
  - `section title` 규칙은 PC만 대상으로 바꿨다.
- 서버
  - `linked` 설정을 저장하고, PC 변경을 연결된 Mobile 토큰에 전파한다.
  - md 컬러 표에 「구분」 열을 추가했다.
- 검증
  - 서버: 테스트 사본에서 전파, 연결 해제, 직접 입력 우선, 설정만 저장하는 경우를 확인했다.
  - Figma: M-SB/Header와 M-SB/Marker의 색을 바꾸자 인스턴스 214개가 모두 따라 바뀌었다.
  - 확인 후 원래 라이브러리 변수(Gray_100, Primary_500) 연결로 되돌렸다.

---

## [Guide] 2026-10-20 · 컬러 편집 → Figma 반영 기능

> 대상: 가이드 「07 타이포그래피 · 컬러」의 컬러 · Figma SH.L 페이지 (Figma 원본 컬러 변경 없음)

| 파일 | 역할 |
|---|---|
| `color_tokens.json` | 편집 가능한 컬러 7종의 값(`value`), Figma 반영값(`figmaValue`), 대상 레이어 규칙(`rule`), 변경 이력(`history`) |
| `guide_server.ps1` · `start_guide_server.bat` | 로컬 서버(8765). 가이드 서빙, 컬러 저장 API, md 컬러 표 자동 갱신 |
| `Common_UX_Guide.html` | 07 섹션에 컬러 편집기(색상 선택·HEX 입력·저장·되돌리기·JSON 내보내기), Figma 반영 상태, 변경 이력 |
| `figma_plugin/` | Figma 개발 플러그인 **Common UX Color Sync**. 서버에서 컬러를 읽어 SH.L에 반영, 자동 반영 옵션 |

- 컬러 토큰과 SH.L 대상 레이어 수(조사 시점)
  - 헤더 배경 `#F5F5F5`: Header › Container 42개 (COMM-4-b의 빨간 Header `#E50000`은 제외)
  - 헤더 하단선 `#D6DBE1`: 42개
  - 표 헤더 `#F3F6FB`: 7개
  - 표 행 구분선 `#E1E6EC`: 28개
  - Revision 헤더 `#E9F8F9`: 1개
  - 섹션 타이틀 보드 `#6A0000`: 2개
  - 설명 번호 배지 `#2463DF`: 113개 (`#005DF9`를 쓰는 LI-RUN 복사본과 COMM-5-m 일부는 제외)
- 라이브러리 변수에 연결된 칠/선(모바일 문서 요소 등)은 대상에서 뺐다.
- 가이드 문서의 헤더 배경 값을 실제 값에 맞게 고쳤다: `#F4F4F4` 계열 → `#F5F5F5`.
- 검증
  - 표 헤더를 `#E6F0FF`로 바꿔 전체 흐름을 확인했다: 가이드 저장 → json·md 갱신 → 플러그인 반영 로직으로 7개 레이어 변경 → 가이드 「반영됨」 표시.
  - 확인 후 Figma와 파일을 원래 값으로 되돌렸다.

---

## [Mobile] V1.1.0 — 2026-10-20 · RUN (L-IOS) 모바일 화면 추가

> 대상: SH.L 페이지 y 41,000 행 · 원본: DY 페이지 LI-RUN-* · 글꼴 Noto Sans KR

| 구분 | 이름 | Node ID |
|---|---|---|
| 섹션 표지 | `M-RUN` | `191:26812` |
| 흐름 | `M-LI-RUN/Flow` | `191:26819` |
| 화면 | `M-LI-RUN-P`, `M-LI-RUN-01`, `M-LI-RUN-02-01`, `M-LI-RUN-02`, `M-LI-RUN-03`, `M-LI-RUN-03-P`, `M-LI-RUN-04` | `191:26934` · `191:27153` · `193:27165` · `193:27430` · `194:27413` · `194:27740` · `194:28049` |

- 그 밖의 변경: Revision history (Mobile)에 V1.1.0 행 추가, SB-List (Mobile)에 RUN 목차 추가, `section title (Mobile)` 보드 높이를 RUN 행까지 확장
- 프로토타입: [RUN_Prototype.html](RUN_Prototype.html) — Web/Mobile 전환, 실행 불가 조건·Protocol 변경 허용 토글, 전체 단계 이동, 필터·정렬·상세·Item details·Confirm·Toast 동작
- 참고: SH.L 페이지 y 45,740 이후의 원본 RUN 프레임 복사본(`LI-RUN-*`, ID `189:*`)은 이번 작업에서 만든 것이 아니며 수정하지 않음

---

## [Mobile] V1.0.0 — 2026-10-20 · Common UX 모바일 버전 신규 작성

> 대상: Figma `UX AI TEST` › **SH.L** 페이지 하단 (y 26,000 이후). 기존 PC/Tablet 영역은 수정하지 않음
> 작업자: 이상헌 (Claude 작업 대행) · 글꼴: Noto Sans KR (신규 영역만)

### 생성한 항목

| 구분 | 이름 | Node ID |
|---|---|---|
| 섹션 타이틀 보드 | `section title (Mobile)` | `175:19354` |
| 업데이트 표시 | `SB-Update (Mobile)` | `175:19356` |
| 문서 관리 | `Revision history (Mobile)` / `SB-List (Mobile)` | `175:19357` / `175:19390` |
| 섹션 표지 | `M-COMM-1` ~ `M-COMM-5` | `175:19413` · `175:19420` · `175:19427` · `175:19434` · `175:19441` |
| UX 규칙 | `M-COMM-1-a`, `2-a`, `2-b`, `3-a`, `4-a`, `4-b` | `178:19387` · `178:19609` · `178:19872` · `179:19698` · `179:19978` · `179:20211` |
| 컴포넌트 | `M-COMM-5-a` ~ `M-COMM-5-y` (23개) | `181:20003` ~ `187:23352` |
| 로컬 컴포넌트 보드 | `M-Components (Mobile Common UX)` | `161:19342` |

### 로컬 컴포넌트 (M-Components 보드 안)

- 문서용: `M-SB/Header`, `M-SB/Desc/Meta`, `M-SB/Desc/Single`, `M-SB/Desc/Item`, `M-SB/Desc/Confirm`, `M-SB/Section Cover`, `M-SB/Marker`
- 모바일 UI: `M/Status Bar`, `M/App Bar`(Back/Menu), `M/Bottom Nav`, `M/Button`(3 Style × 3 State), `M/Text Field`(5 State), `M/Chip`, `M/Checkbox`, `M/Radio`, `M/Toggle`, `M/List Item`, `M/Toast`, `M/Badge`, `M/Tag`, `M/Dialog`(One/Two), `M/Icon/*` 23종
- 색상은 라이브러리 `CURECA_Design Library (2026)` 컬러 변수(Primary / Gray / Red / Green / Orange)에 연결

### 검증

- 모바일 영역 텍스트 2,504개 모두 Noto Sans KR (Pretendard 0개)
- 모바일 프레임 39개가 서로 또는 기존 콘텐츠(y ≤ 23,926)와 겹치지 않음
- 전체 프레임 스크린샷 확인 후 마커 위치, 툴팁 위치, 반투명 영역 표시, description 행 높이를 수정

### 참고

- 모바일 규칙은 PC/Tablet 규칙을 기준으로 새로 정의한 **초안**이다. 상세 수치(터치 영역, 간격, 건수 등)는 Dev/SG 확인이 필요하다.
- 가이드: [Common_UX_Guide.md](Common_UX_Guide.md) 12장, HTML 「E. 모바일」

---

## [PC/Tablet] V2.1.13 — 2026-10-20 · 불일치 사항 정리

> 대상: Figma `UX AI TEST` › **SH.L** 페이지 (다른 페이지는 수정하지 않음)
> 작업일: 2026-10-20 · 작업자: 이상헌 (Claude 작업 대행)
> 버전: **V2.1.13** (Figma Revision history에 행 추가 완료)
> 근거: [Common_UX_Guide.md](Common_UX_Guide.md) 11장 「현재 파일의 불일치 사항」

---

## 1. 요약

| # | 불일치 항목 | 처리 결과 |
|---|---|---|
| 1 | Navigation 프레임 CID `SB-2-a` / `SB-2-b` | ⚠️ 일부 완료: 프레임명은 변경. description의 CID 텍스트는 수동 수정 필요 |
| 2 | `COMM-5-Y` 대문자 | ⚠️ 일부 완료: 프레임명은 변경. 헤더와 CID 텍스트는 수동 수정 필요 |
| 3 | 목차 항목 h / x / z에 해당하는 프레임 없음 | ✋ 수동 수정 필요 (Pretendard 텍스트) |
| 4 | 5-b 명칭 불일치 (Breadcrumb / Progress step) | ✋ 수동 수정 필요 (Pretendard 텍스트) |
| 5 | `COMM-5` 표지가 컴포넌트 인스턴스가 아님 | ✋ 수동 수정 필요 (인스턴스 텍스트가 Pretendard) |
| 6 | `COMM-1-a` description 패널 중복 | ✅ 완료 |
| 7 | Ver 표기 혼재 | ➖ 값 변경 없음. 규칙을 명문화해 처리 (아래 4장) |
| 8 | 숨김 더미 텍스트 잔존 | ✅ 완료 |
| 9 | `section title` 보드 높이 | ⛔ 요청에 따라 제외 |

> **수동 수정이 필요한 이유**: SH.L의 텍스트 대부분이 **Pretendard** 폰트인데, Figma API 실행 환경에서는 Pretendard를 불러올 수 없어서 텍스트 내용을 바꿀 수 없습니다. 폰트를 Noto Sans KR 등으로 바꾸면 디자인이 달라지므로 그렇게 하지 않았습니다. Inter 폰트를 쓰는 Revision history 표는 API로 수정했습니다.

---

## 2. Figma에 적용된 변경 (API로 완료)

### 2-1. 프레임 이름 변경
| Node ID | 변경 전 | 변경 후 |
|---|---|---|
| `143:64204` (FRAME) | `SB-2-a` | `COMM-2-a` |
| `143:64098` (FRAME) | `SB-2-b` | `COMM-2-b` |
| `143:66744` (SECTION) | `SB-2-a` | `COMM-2-a` |
| `143:58955` (FRAME) | `COMM-5-Y` | `COMM-5-y` |

### 2-2. 중복 / 이전 템플릿 description 패널 삭제 (숨김 상태였던 패널 5개)
| Node ID | 위치 | 내용 |
|---|---|---|
| `143:56279` | COMM-1-a | 이전 템플릿 패널 (Date 2024.08.05, 작성자 염지혜, Taxon 설명). 불일치 6번 해결 |
| `143:57959` | COMM-5 | 이전 템플릿 패널 |
| `143:64058` | SB-List | 이전 템플릿 패널 |
| `143:64099` | COMM-2-b | 이전 템플릿 패널 |
| `143:64205` | COMM-2-a | 이전 템플릿 패널 |

### 2-3. 숨김 더미 텍스트 삭제
- 화면에 보이는 description 패널의 Date / 작성자 행 안에 숨겨져 있던 이전 템플릿 텍스트(Taxon 설명) **84개**를 삭제했습니다.
- 대상: 40개 프레임에서 각 2개(`COMM-5-d`는 6개)
- 삭제 후 페이지 안에 `Taxon` / `2024.08.05` / `염지혜` 텍스트는 0개입니다.

### 2-4. Revision history 수정
- **신규 행 추가** (`159:19342`, 맨 위)
  - 버전 V2.1.13 / 변경날짜 26/10/20 / 기능 All / 담당자 이상헌
  - 변경사항: CID 명명 규칙 정리(SB-2-a/b → COMM-2-a/b, COMM-5-Y → COMM-5-y), 중복 description 패널 및 숨김 더미 텍스트 삭제
  - 페이지: COMM-2-a, COMM-2-b, COMM-5-y, COMM-1-a, COMM-5, SB-List (각각 해당 프레임으로 연결되는 링크)
- **기존 행 수정** (`143:65943`, V2.1.03 행): 페이지 칸 `COMM-3-a / SB-2-a` → `COMM-3-a / COMM-2-a`

---

## 3. 수동 수정 목록 (Figma에서 직접 고쳐 주세요)

| # | 프레임 | 위치 (Node ID) | 변경 전 | 변경 후 |
|---|---|---|---|---|
| M1 | COMM-2-a | description › CID (`I143:64253;850:22092`) | `SB-2-a` | `COMM-2-a` |
| M2 | COMM-2-b | description › CID (`I143:64145;850:22092`) | `SB-2-b` | `COMM-2-b` |
| M3 | COMM-5-y | 헤더 타이틀 (`143:58961`) | `5-Y. Validation Check` | `5-y. Validation Check` |
| M4 | COMM-5-y | description › CID (`I143:58976;850:22092`) | `COMM-5-Y` | `COMM-5-y` |
| M5 | COMM-5-b | description › 화면 (`I143:58149;850:22092`) | `Breadcrumb (LNB)` | `Progress step` |
| M6 | SB-List | 목차 1열 (`143:64093`) | `b. Breadcrumb (LNB)` | `b. Progress step` |
| M7 | SB-List | 목차 1열 (`143:64093`) | `c. Button` | `c. Button / Top Button` |
| M8 | SB-List | 목차 1열 (`143:64093`) | `h. Map` | `h. Map (미작성)` |
| M9 | SB-List | 목차 3열 (`143:64095`) | `x. Top Button` | 줄 삭제 (5-c에 포함됨) |
| M10 | SB-List | 목차 3열 (`143:64095`) | `z. Error Page` | `z. Error Page (미작성)` |
| M11 | COMM-5 | 목차 1열 (`143:57995`) | `c. Button` / `h. Map` | `c. Button / Top Button` / `h. Map (미작성)` |
| M12 | COMM-5 | 목차 3열 | `t. Card … w. Toast` | 끝에 `y. Validation Check`, `z. Error Page (미작성)` 추가 |
| M13 | COMM-5 | 프레임 전체 | 일반 프레임(Text + 목차 프레임) | `COMM-4`의 `SB - 공통 정의` 인스턴스를 복제해 번호 `5`, 제목 `Component`로 바꾼 뒤 목차 프레임을 그 위에 배치 |
| M14 | COMM-2-a, COMM-2-b, COMM-5-y, COMM-5-b, COMM-1-a | description › Ver / Date | 기존 값 | `2.1.13` / `2026.10.20` |
| M15 | 페이지 상단 | `📌 SB-Update` (`143:58437`) | `2026.06.29` | `2026.10.20` |
| M16 | 프레임 위 | `ver` 배지 | — | 변경 프레임 위에 `v2.1.13 update` + 요약 배지 추가 (선택) |

> 수동 수정을 마치면 Revision history V2.1.13 행의 변경사항에 "목차 정리(h/x/z), 5-b 명칭 통일, COMM-5 표지 인스턴스화"를 추가해 주세요.

**추가 발견 (이번 범위 외)**: `COMM-2` 섹션 표지의 소분류 목록에는 `a. GNB / LNB`만 있고 `b. Profile Icon`이 빠져 있습니다.

---

## 4. 7번 (Ver 표기) 처리 기준

값을 바꾸지 않고 아래 규칙으로 정리했습니다. 기존 `1.0` 등은 당시 버전 값이므로, 다음에 그 프레임을 수정할 때 새 규칙으로 갱신합니다.

| 위치 | 형식 | 예 |
|---|---|---|
| Revision history 「버전」 | `V{major}.{minor}.{patch}` | `V2.1.13` |
| description 「Ver」 | `{major}.{minor}.{patch}` | `2.1.13` |
| `ver` 배지 | `v{major}.{minor}.{patch} update` | `v2.1.13 update` |
| (참고) `v0.7` | `ver` 컴포넌트의 variant 이름이며 표기 값이 아님 | — |

---

## 5. 되돌리기

모든 변경은 Figma 파일의 **버전 기록(File › Show version history)**에서 2026-10-20 이전 버전으로 되돌릴 수 있습니다.
