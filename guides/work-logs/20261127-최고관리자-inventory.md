---
status: 진행 중            # 진행 중 | 끝남 | 멈춤
requester: 최고관리자
menu: Inventory (IVT)
cids: [TI-IVT-01-T, TI-IVT-02-T, TI-IVT-03-T, TI-IVT-03-T-P, TI-IVT-04-T, TI-IVT-04-T-P, TI-IVT-05-T, TI-IVT-06-T]
policies: [POL-INV-002]
cid_system:
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST (작업방 `Inventory_tobe` 페이지)
test: false
basis_start: 2026-11-27 09:58 · history fc0b3d0e7
basis:
basis_versions:
  rules:
  policy:
  glossary:
  screens:
  common_ux:
started: 2026-11-27
---
# 작업 기록: Inventory T-IOS 화면을 Inventory_tobe에 다시 그리기

## 단계

| 단계 | 끝낸 날 | 마침 점검 | 남긴 것 |
| --- | --- | --- | --- |
| 1. 시작 · 요건 정의 | 2026-11-27 | 요청자 확인 (2026-11-27) | 겹치는 다른 작업: 없음 |
| 2. 근거 · 분석 | | | 정책 수정 범위 1건 (DS-0013) |
| 3. 화면 설계 | | | |
| 4. 수정 · 확인 | | | |
| 5. 완료 | | | |

이어서 작업할 곳: 2단계 · 절차 6 근거 확인 질문(요청자 확인 6 · 7) 답 기다림 (Workbench R009 「보류」) (다시 읽을 곳: 2단계 `flow/2-evidence.md` 절차 6번 "답을 받은 뒤" · 마침 점검 / 작업 기록 "근거" · "요청자 확인" · "이 작업의 논의 대상")

## 요청
<!-- 1단계 절차 1번. 요청 글 한두 줄과 출처, 공유 파일 (아래 "항목마다 적는 법") -->

- 요청 글: "Inventory T-ios 화면만 다시 그려줘" + 링크 https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-360786 (`Inventory_asis` 페이지)
- 출처: Workbench 요청 R009 (BC4T-R009), 최고관리자, 2026-11-27 09:55
- 공유 파일 없음

## 요건 목록
<!-- 1단계 절차 2번(요건 · 대상 화면) · 절차 4번 순서 6(요건마다 경로). 틀은 flow/1-requirements.md "요건 목록 틀": 요건마다 `### 요건 번호. 요건` 묶음, 맨 끝에 작업이 지나가는 단계, 그 아래 "찾았지만 대상 아님" · "영향 화면" -->

### 요건 1. Inventory 메뉴의 T-IOS 화면을 `Inventory_asis`에서 `Inventory_tobe`에 다시 그림
- 요청 상태: 최초
- 경로 분기 기준 (근거) · 읽는 강도: 8 옮겨 다시 그림 (케이스 3, 바꾸는 요건 없음) · 케이스 3 (다시 그리기)
- 지나가는 단계: 1 → 2 → 3 → 4 → 5
- UI 작업: 대상 아님 (케이스 3 기본, 4단계 UX 확정 때 다시 정함)

| 대상 화면 | 케이스 | 작업 대상 | 근거 |
| --- | --- | --- | --- |
| Inventory Summary (TI-IVT-01-T) | 3 | O | |
| Inventory Overview (TI-IVT-02-T) | 3 | O | |
| Inventory Consumables (TI-IVT-03-T) | 3 | O | |
| Consumables Item details popup (TI-IVT-03-T-P) | 3 | O | |
| Inventory Reagent (TI-IVT-04-T) | 3 | O | |
| Reagent Item details Popup (TI-IVT-04-T-P) | 3 | O | |
| Waste Bin/Bottle (TI-IVT-05-T) | 3 | O | |
| Inventory Usage History (TI-IVT-06-T) | 3 | O | |
| Inventory Summary (LI-IVT-01-T) | 3 | X | 짝 화면 · 고치지 않음 (요청 글: T-IOS만) |
| Inventory Overview (LI-IVT-02-T) | 3 | X | 짝 화면 · 고치지 않음 (요청 글: T-IOS만) |
| Inventory Consumables (LI-IVT-03-T) | 3 | X | 짝 화면 · 고치지 않음 (요청 글: T-IOS만) |
| Consumables Item details popup (LI-IVT-03-T-P) | 3 | X | 짝 화면 · 고치지 않음 (요청 글: T-IOS만) |
| Inventory Reagent (LI-IVT-04-T) | 3 | X | 짝 화면 · 고치지 않음 (요청 글: T-IOS만) |
| Reagent Item details Popup (LI-IVT-04-T-P) | 3 | X | 짝 화면 · 고치지 않음 (요청 글: T-IOS만) |
| Waste Bin/Bottle (LI-IVT-05-T) | 3 | X | 짝 화면 · 고치지 않음 (요청 글: T-IOS만) |
| Inventory Usage History (LI-IVT-06-T) | 3 | X | 짝 화면 · 고치지 않음 (요청 글: T-IOS만) |

- 대상 화면은 요청 글 "Inventory T-ios 화면"을 IA의 Inventory 메뉴(`TI-IVT-…`) T-IOS 화면 8개 모두로 읽었습니다(IA `ia/ia-screens.csv` 43 ~ 50줄). 8개 모두 `screens/tobe/`에 화면 MD가 없어 케이스 3입니다.
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
| Inventory Summary (TI-IVT-01-T) | 화면 MD (asis, 케이스 절 포함) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-382925 |
| Inventory Overview (TI-IVT-02-T) | 화면 MD (asis, 케이스 절 포함) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-385231 |
| Inventory Consumables (TI-IVT-03-T) | 화면 MD (asis) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-384725 |
| Consumables Item details popup (TI-IVT-03-T-P) | 화면 MD (asis) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-383368 |
| Inventory Reagent (TI-IVT-04-T) | 화면 MD (asis) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-383847 |
| Reagent Item details Popup (TI-IVT-04-T-P) | 화면 MD (asis) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-383580 |
| Waste Bin/Bottle (TI-IVT-05-T) | 화면 MD (asis) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-371112 |
| Inventory Usage History (TI-IVT-06-T) | 화면 MD (asis, 같은 Ver 프레임 둘 기록 포함) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-361230 |

- 호출 화면: 8개 화면이 서로 부르는 것(Tab 이동, [Item details] → TI-IVT-03-T-P · TI-IVT-04-T-P)은 위 MD로 읽음. 메뉴 밖으로 부르는 것은 Alert_020(TI-IVT-02-T 3 데이터 로드 실패)과 Material Setup > Empty Waste Bin의 Confirm Empty(TI-IVT-05-T 3-3 · 3-5, 이 화면에서 열지 않고 초기화 시점만 가리킴)뿐임

## 뒤 단계용 확인 항목(claude)
<!-- 1단계 절차 4번 순서 3. 요청자에게 보여 주지 않음. 틀은 flow/1-requirements.md "뒤 단계용 확인 항목 틀" -->

| # | 무엇 (절차 4번 순서 3 "뒤 단계로 넘김"의 1 ~ 5) | 관련된 곳 (CID · 디스크립션 번호) | 넘기는 곳 (2단계 / 3단계) | 이어진 번호 (Q · C · 논의 대상 ID / 근거로 풀림) |
| --- | --- | --- | --- | --- |
| 1 | 1. 기능 정의가 안 된 요소: [Refresh]에서 데이터 불러오기에 실패했을 때 동작이 없음 (TI-IVT-02-T 3만 Alert_020) | TI-IVT-01-T #4 · TI-IVT-03-T #4 · TI-IVT-04-T #4 · TI-IVT-05-T #4 | 2단계 (POL-LOD) | 근거로 풀림 (POL-INV-001 규칙 4, Alert_020) · C2 |
| 2 | 1. 기능 정의가 안 된 요소: 검색 [Reset] · [Search], Items 건수, 페이지네이션에 디스크립션이 없음 (COMM-5-s Type3로 풀릴 수 있음) | TI-IVT-06-T #1 · #2 | 3단계 | 3단계로 |
| 3 | 1. 기능 정의가 안 된 요소: 목록 · 팝업에 값이 없을 때 무엇을 보여 주는지 없음 | TI-IVT-03-T-P #2 · TI-IVT-04-T-P #2 · TI-IVT-06-T #2 | 3단계 | 3단계로 |
| 4 | 2. Alert · Confirm 보완 필요 지점: [Export] 저장 실패 · 내보낼 목록이 0건일 때 안내가 없음 | TI-IVT-06-T #3 | 2단계 (POL-COM-006) | Q1 |
| 5 | 5. 대상 화면에서 찾은 고칠 점: Unit 이름이 Module-Unit 표에 없음 `Sample Pre-treatment (1) Tip Waste Bin` → `Tip Waste Bin (Upper)` 또는 `(Lower)`, `High-throughput Extraction(1) Waste Bin` → `DWP Waste Bin`, `Plate Sealing(1) Sealer Waste Bin` → `Sealer Waste Bin (1)`, `PCR Setup(1) / 300 μL Tip Storage` → `300 μL Tip Storage (1)` | TI-IVT-01-T #1 · #3 화면 글자 | 3단계 (용어 점검) | C1 |
| 6 | 5. 대상 화면에서 찾은 고칠 점: `Required Qty 250 (3 DWPs)` 단위 없음 → `250 rxns (3 DWPs)` | TI-IVT-01-T #1-4 화면 글자 | 3단계 | 3단계로 |
| 7 | 5. 대상 화면에서 찾은 고칠 점: 케이스 "구동 중이 아닐 경우, 'No actions required' 문구 표기"의 제목과 조각 글자(`Shown only if system running or Inbound Trolley docked`)가 다름, 케이스 조각 상태값 `Empty` · `Insufficient`(화면은 Insufficient · Low), `Pagenation` → `Pagination` | TI-IVT-01-T 케이스 | 3단계 | 3단계로 |
| 8 | 5. 대상 화면에서 찾은 고칠 점: T-IOS 화면 GNB에 `L-IOS`가 표기됨 | TI-IVT-02-T · 03-T · 03-T-P · 04-T · 04-T-P · 05-T · 06-T GNB | 3단계 | 3단계로 |
| 9 | 5. 대상 화면에서 찾은 고칠 점: LNB에 다른 화면에 없는 `Status` 메뉴가 있음 | TI-IVT-03-T · TI-IVT-04-T LNB | 3단계 | 3단계로 |
| 10 | 5. 대상 화면에서 찾은 고칠 점: 케이스 조각 단위 `288T` · `300T` → `rxns` (COMM-4-b) | TI-IVT-02-T 케이스 | 3단계 | 3단계로 |
| 11 | 5. 대상 화면에서 찾은 고칠 점: 왼쪽 카드 목록에 `Allplex™ GI-Virus Assay` 카드가 두 번 나옴 | TI-IVT-04-T #2 화면 글자 | 3단계 | 3단계로 |
| 12 | 5. 대상 화면에서 찾은 고칠 점: `96 ea  (1 rack)` 띄어쓰기 두 칸 | TI-IVT-03-T-P #2-1 화면 글자 | 3단계 | 3단계로 |
| 13 | 5. 대상 화면에서 찾은 고칠 점: Module 이름에 번호가 없는 것이 섞임 `Flexible Extraction` · `Universal PCR` (다른 Module은 `(1)` · `(2)`) | TI-IVT-05-T #2 · #3-1 화면 글자 | 3단계 (용어 점검) | 3단계로 |
| 14 | 5. 대상 화면에서 찾은 고칠 점: Unit 칸에 Module 이름이 들어간 줄 `Plate Sealing(1) / Plate Sealing`, `PCR Setup(1) / PCR Setup` (반영 대기 TI-IVT-06-T-R03에 없는 줄) | TI-IVT-06-T #2 화면 글자 | 3단계 (용어 점검) | C4 |

## 대상 화면의 반영 대기 항목
<!-- 1단계 절차 3번 순서 4. 틀은 flow/1-requirements.md "대상 화면의 반영 대기 항목 틀" -->

| 묶음 (근거) | 화면 (CID) | 항목 ID | 변경 전 | 변경 후 | 반영 / 이번엔 안 함 / 제외 (바꾸지 않음) |
| --- | --- | --- | --- | --- | --- |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/terms.csv`) | Inventory Summary (TI-IVT-01-T) | TI-IVT-01-T-R01 | 화면 카드 "Comsumable" | Consumable | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/status-values.csv` 저장 장치 도킹 상태) | Inventory Summary (TI-IVT-01-T) | TI-IVT-01-T-R03 | 1 "Inbound Trolley Unit이 'Docking' 상태" | Docked | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/status-values.csv`) | Inventory Summary (TI-IVT-01-T) | TI-IVT-01-T-R04 | 3-5 툴팁 "prioritized by Full and Warning status" | Full and Almost Full (Warning은 Waste Bin/Bottle Status 값이 아님) | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/terms.csv`) | Inventory Summary (TI-IVT-01-T) | TI-IVT-01-T-R05 | 3-4 "Waste Status Icon" | Waste Bin/Bottle Status Icon | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (이름 (번호) 띄어쓰기, `glossary/terms.csv`) | Inventory Summary (TI-IVT-01-T) | TI-IVT-01-T-R09 | 화면 "FlexibleExtraction(1)", "WasteBin", "PCR Setup(1)" 등 | Flexible Extraction (1), Waste Bin, PCR Setup (1) | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/terms.csv` 장비 통합 상태) | Inventory Summary (TI-IVT-01-T) | TI-IVT-01-T-R10 | 1 "통합 상태 Run O / X" | 장비 통합 상태 Running 여부로 표기 | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (IA, TI-IVT-01-T 화면 글자) | Inventory Overview (TI-IVT-02-T) | TI-IVT-02-T-R01 | Tab 이름 "Reagent" (다른 Tab 화면은 Reagents) | Reagents | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/terms.csv`) | Inventory Overview (TI-IVT-02-T) | TI-IVT-02-T-R06 | 1-1 "투입 트롤리", "회수 트롤리", "검체" | Inbound Trolley, Outbound Trolley, Sample | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/terms.csv` Drawer, Dx 시스템) | Consumables Item details popup (TI-IVT-03-T-P) | TI-IVT-03-T-P-R03 | 2-1 "DX 서랍식 입고" | Dx 시스템 Storage의 Drawer | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/terms.csv`) | Consumables Item details popup (TI-IVT-03-T-P) | TI-IVT-03-T-P-R04 | "소모품", "바코드" 한국어 혼용 | Consumable, Barcode | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/status-values.csv`) | Inventory Consumables (TI-IVT-03-T) | TI-IVT-03-T-R02 | 1 "sufficient" | Sufficient | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/terms.csv`) | Inventory Consumables (TI-IVT-03-T) | TI-IVT-03-T-R07 | "검체 트롤리", "소모품", "저장 장치" 한국어 혼용 | Inbound Trolley, Consumable, Storage | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`ia/ia-screens.csv`) | Reagent Item details Popup (TI-IVT-04-T-P) | TI-IVT-04-T-P-R01 | 프레임 이름과 화면 정보 CID "TI-IVT-04-T" | TI-IVT-04-T-P | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/terms.csv` Expiration Date, 시약 만료 상태) | Reagent Item details Popup (TI-IVT-04-T-P) | TI-IVT-04-T-P-R02 | "유효기한", "유효기한이 지난" | Expiration Date, Expired | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (디스크립션, COMM-4-b) | Reagent Item details Popup (TI-IVT-04-T-P) | TI-IVT-04-T-P-R04 | 2-1 Remaining Rxns "남은 반응 수 rxns 표기"와 "표기 방식 : 반응 수T"가 함께 있음 ("T"의 뜻이 없음) | 단위 하나로 (rxns) | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/terms.csv`) | Reagent Item details Popup (TI-IVT-04-T-P) | TI-IVT-04-T-P-R06 | 2-1 "DX 서랍식 입고", "시약", "바코드", "튜브" | Dx 시스템 Storage의 Drawer, Reagent, Barcode, Tube | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/terms.csv` Expiration Date, 오타) | Inventory Reagent (TI-IVT-04-T) | TI-IVT-04-T-R07 | 3-3 "유효기간", "유효기가 만료" | Expiration Date, Expired | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/terms.csv`) | Inventory Reagent (TI-IVT-04-T) | TI-IVT-04-T-R09 | "검체 트롤리", "시약", "소모품", "저장 장치", "장비 내 거치 공간(장비가 가져간 소모품 포함)" (Reagent 화면에 소모품) | Inbound Trolley, Reagent, Storage | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`ia/ia-screens.csv`, 화면 정보) | Waste Bin/Bottle (TI-IVT-05-T) | TI-IVT-05-T-R01 | IA 화면 이름 "Waste bin", 화면 "Waste Bin/Bottle" | IA를 Waste Bin/Bottle로 | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/terms.csv`) | Waste Bin/Bottle (TI-IVT-05-T) | TI-IVT-05-T-R02 | 0 "상태 값(Waste Status)" | Waste Bin/Bottle Status | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/status-values.csv`) | Waste Bin/Bottle (TI-IVT-05-T) | TI-IVT-05-T-R06 | 3-3 99% 고정 시 Almost Full, Fill Level 70%·100% 기준은 COMM-4-a에만 있음 | 상태값 표 기준(Available 70% 미만, Almost Full 70% 이상, Full 100%)과 99% 제한·센서 규칙을 정책으로 묶음 | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/terms.csv`) | Waste Bin/Bottle (TI-IVT-05-T) | TI-IVT-05-T-R08 | "폐기물함", "폐기함", "폐기물 함", "모듈" 한국어 혼용 | Waste Bin/Bottle, Module | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (`glossary/module-units.csv`) | Inventory Usage History (TI-IVT-06-T) | TI-IVT-06-T-R03 | Consumable Storage(1)의 Unit이 "Plate Sealing"인 줄, Plate Sealing(1)의 Unit이 "Trolley"인 줄 | 실제 Module-Unit 조합으로 | 반영 |
| 1 기준데이터 · IA 표기 (용어집 · 상태값 · Module-Unit · IA) (오타, IA) | Inventory Usage History (TI-IVT-06-T) | TI-IVT-06-T-R06 | 0 "'Usage Tab'", "사용되느" | Usage History Tab, 사용되는 | 반영 |
| 2 정책을 디스크립션에 반영 (`glossary/status-values.csv 재고 상태`, POL-INV-003 규칙 7) | Inventory Summary (TI-IVT-01-T) | TI-IVT-01-T-R02 | 1-1·1-5 "Empty 및 Insufficient" (화면 카드는 Insufficient, Low) | Empty는 예전 값이며 Insufficient로 바뀜. 요약 정보와 Stock Status Icon은 Insufficient·Low로 나눔 (1 정렬 기준과 같음). 1-3 "Empty 상태일 경우 '0'"도 Insufficient로 | 반영 |
| 2 정책을 디스크립션에 반영 (POL-EQP-009) | Inventory Summary (TI-IVT-01-T) | TI-IVT-01-T-R08 | 0 "사용여부가 '사용'인 모듈" | Enabled인 Module | 반영 |
| 2 정책을 디스크립션에 반영 (POL-EQP-009) | Inventory Overview (TI-IVT-02-T) | TI-IVT-02-T-R03 | 0 "사용여부가 '사용'인 모듈" | Enabled인 Module | 반영 |
| 2 정책을 디스크립션에 반영 (`glossary/status-values.csv 재고 상태`, POL-INV-003) | Inventory Consumables (TI-IVT-03-T) | TI-IVT-03-T-R01 | 2-6 Insufficient "재고가 0인 경우", Low "1개 이상 부족한 경우" | 디스크립션에 넣음: 재고 상태 정의는 상태값 표와 같음. Insufficient = 잔여 수량 0이라 그 품목을 쓰는 단계에서 Error가 생겨 가동이 중단됨, Low = 필요 수량보다 1개 이상 적으나 가동 가능 (예: 1000개 필요, 999개 이하). 화면의 "재고 0", "1개 이상 부족"은 이 정의의 예시로 남김 | 반영 |
| 2 정책을 디스크립션에 반영 (POL-INV-003 규칙 2·3) | Inventory Consumables (TI-IVT-03-T) | TI-IVT-03-T-R04 | 2-5·2-6·3-6 노출 조건 "검체 트롤리가 도킹된 상태 또는 통합 상태가 Running, Partial Running" / TI-IVT-01-T 1은 "Running이거나 Inbound Trolley Docked" | 디스크립션에 넣음: Required Qty와 Status(Run 대비 재고 상태)는 Inbound Trolley가 도킹되어 있거나, [Run Start] 뒤 진행 중인 Batch가 끝나지 않았으면 보여 줌 (둘 중 하나). Partial Running·Error가 되어도 Batch가 끝나기 전이면 계속 보여 주고, Run 중 Trolley를 분리해도 계속 보여 줌. 그 밖에는 '-' | 반영 |
| 2 정책을 디스크립션에 반영 (POL-EQP-009) | Inventory Consumables (TI-IVT-03-T) | TI-IVT-03-T-R10 | 0 "사용여부가 '사용'인 모듈" | Enabled인 Module | 반영 |
| 2 정책을 디스크립션에 반영 (POL-INV-002 규칙 6, POL-INV-006 규칙 1) | Inventory Consumables (TI-IVT-03-T) | TI-IVT-03-T-R11 | 2-4 정책 안내 2) "저장 장치로 반환 시 실제 사용 수량을 이력에 기록" | 디스크립션에 넣음: 사용량(Usage History)은 폐기할 때만 기록함. 반환할 때는 Remaining Qty만 줄임 | 반영 |
| 2 정책을 디스크립션에 반영 (`glossary/status-values.csv 재고 상태`, POL-INV-003) | Inventory Reagent (TI-IVT-04-T) | TI-IVT-04-T-R01 | Reagent에 재고 상태(Sufficient / Low / Insufficient)를 씀. 상태값 표의 재고 상태 대상은 Consumable뿐이었음 | 디스크립션에 넣음: Reagent도 Consumable과 같은 재고 상태(Sufficient, Low, Insufficient)를 씀. 상태값 표 대상을 Consumable / Reagent로 고침 | 반영 |
| 2 정책을 디스크립션에 반영 (`glossary/status-values.csv 재고 상태`, POL-INV-003) | Inventory Reagent (TI-IVT-04-T) | TI-IVT-04-T-R02 | 2-6 Insufficient "재고가 0인 경우", Low "1개 이상 부족한 경우", 1 "sufficient" | TI-IVT-03-T 반영 대기 목록 1과 같이, Sufficient | 반영 |
| 2 정책을 디스크립션에 반영 (POL-INV-003 규칙 2·3) | Inventory Reagent (TI-IVT-04-T) | TI-IVT-04-T-R10 | 2-5·2-6·3-6 노출 조건이 TI-IVT-01-T 1과 다름 (Partial Running 포함 여부) | TI-IVT-03-T 반영 대기 목록 4와 같이 | 반영 |
| 2 정책을 디스크립션에 반영 (POL-EQP-009) | Inventory Reagent (TI-IVT-04-T) | TI-IVT-04-T-R12 | 0 "사용여부가 '사용'인 모듈" | Enabled인 Module | 반영 |
| 2 정책을 디스크립션에 반영 (POL-INV-002 규칙 6, POL-INV-006 규칙 1) | Inventory Reagent (TI-IVT-04-T) | TI-IVT-04-T-R13 | 2-4 정책 안내 2) 반환 시 이력 기록 | TI-IVT-03-T 반영 대기 목록 (사용량은 폐기할 때만 기록)와 같음 | 반영 |
| 2 정책을 디스크립션에 반영 (POL-INV-005 규칙 7, `glossary/module-units.csv`) | Waste Bin/Bottle (TI-IVT-05-T) | TI-IVT-05-T-R05 | 2·3 "Waste Bin이 존재하지 않는 모듈은 제외", "Waste Bin이 1개이상 존재하는 Module" | Waste Bin/Bottle은 Module마다 가진 Waste Bin과 Liquid Waste Bottle을 함께 부르는 이름이므로 "Waste Bin/Bottle이 있는 Module"로 씀. Unit 칸은 Module별 Unit 이름 그대로 | 반영 |
| 2 정책을 디스크립션에 반영 (POL-EQP-009) | Waste Bin/Bottle (TI-IVT-05-T) | TI-IVT-05-T-R10 | 0 "사용여부가 '사용'인 모듈" | Enabled인 Module | 반영 |
| 2 정책을 디스크립션에 반영 (POL-EQP-009, `glossary/terms.csv`) | Inventory Usage History (TI-IVT-06-T) | TI-IVT-06-T-R08 | 0 "사용여부가 '사용'인 모듈", "소모품", "시약" | Enabled인 Module, Consumable, Reagent | 반영 |
| 2 정책을 디스크립션에 반영 (POL-INV-006 규칙 1) | Inventory Usage History (TI-IVT-06-T) | TI-IVT-06-T-R09 | 0 이력 기준 "장비가 사용 후 폐기하는 시점" / TI-IVT-03-T 2-4 정책 안내는 "저장 장치로 반환 시"에도 사용 수량을 이력에 기록 | 디스크립션에 넣음: Usage History는 폐기할 때만 기록함 (사용 완료, 최대 사용 횟수 초과, Expiration Date 경과). 반환할 때는 기록하지 않음 | 반영 |
| 2 정책을 디스크립션에 반영 (POL-COM-006) | Inventory Usage History (TI-IVT-06-T) | TI-IVT-06-T-R10 | [Export] 파일 형식 | 디스크립션에 넣음: 내보내는 파일 형식은 .csv (Run Report만 제외) | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (버전 메모, LI-IVT-01-T) | Inventory Summary (TI-IVT-01-T) | TI-IVT-01-T-R06 | 1-7 툴팁 문구가 4개 나열됨 (옛 문구와 새 문구가 섞인 것으로 보임) | 현재 문구 하나만 남김 (v2.1.14 "Tooltip 내용 변경"). LI-IVT-01-T에는 앞의 2개에 취소선이 있음 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (TI-IVT-05-T) | Inventory Summary (TI-IVT-01-T) | TI-IVT-01-T-R11 | 3-3 "Waste bin/bottle tab 내 2-3 참고" (Fill Level은 TI-IVT-05-T 3-3) | TI-IVT-05-T 3-3 참고 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (오타) | Inventory Overview (TI-IVT-02-T) | TI-IVT-02-T-R02 | 1-2 "데이트 업데이트", 1-3 "차감되지 않는며" | 데이터 업데이트, 차감되지 않으며 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (`screens/inventory/_menu.md`) | Inventory Overview (TI-IVT-02-T) | TI-IVT-02-T-R04 | 1 "아래 Inventory Overview Detail Info 예시 참고하여 작업요청" (CID 없는 프레임을 가리킴) | 케이스 규칙을 디스크립션이나 정책으로 옮김 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (단수·복수) | Inventory Overview (TI-IVT-02-T) | TI-IVT-02-T-R05 | 화면 "Samples (Test In Progress) 48 ea (1 racks)" | 1 rack | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (띄어쓰기) | Inventory Overview (TI-IVT-02-T) | TI-IVT-02-T-R07 | 2 툴팁 "all modules . Select" | all modules. Select | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (3 표기 방식, LI-IVT-03-T-P Run 프레임) | Consumables Item details popup (TI-IVT-03-T-P) | TI-IVT-03-T-P-R01 | 합계 "2,021 (22 rack)" (단위 없음). Run 화면 프레임은 "2,021 ea (22 rack)" | 2,021 ea (22 racks) | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (화면 글자) | Consumables Item details popup (TI-IVT-03-T-P) | TI-IVT-03-T-P-R02 | 예시 줄에 Inbound Date 값이 없음 (열은 5개, 값은 4개) | 날짜 예시를 넣음 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (디스크립션) | Consumables Item details popup (TI-IVT-03-T-P) | TI-IVT-03-T-P-R05 | 5 [Close]와 6 [X]의 동작이 같은 말을 다르게 씀 | 하나의 문장으로 통일 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (디스크립션) | Inventory Consumables (TI-IVT-03-T) | TI-IVT-03-T-R03 | 2-5 Required Qty 절의 첫 문장이 "좌측 영역의 Remaining Qty는…" | 좌측 영역의 Required Qty는… | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (디스크립션) | Inventory Consumables (TI-IVT-03-T) | TI-IVT-03-T-R05 | 5 툴팁 "Capacity: Shown only for fixed-capacity storage." / 3-4 Capacity는 장비 셋팅 시 설정된 값 (26.08.20 기준 변경) | 툴팁 문구를 3-4 정의와 맞춤 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (오타) | Inventory Consumables (TI-IVT-03-T) | TI-IVT-03-T-R06 | "단,장비 내 거치 공간에 있는 소모품은 … 차감되지 않는며" (2-4, 3-5) | 차감되지 않으며 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (단수·복수, 이름 (번호) 띄어쓰기) | Inventory Consumables (TI-IVT-03-T) | TI-IVT-03-T-R08 | Capacity "11 rack", "300 μL Tip Storage(1)" | 11 racks, 300 μL Tip Storage (1) | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (화면 글자) | Inventory Consumables (TI-IVT-03-T) | TI-IVT-03-T-R09 | 예시 값 "#Trolley", Tub 수량 "200T (2 racks)" | 실제 Location 예시, rxns 단위 (COMM-4-b) | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (오타) | Reagent Item details Popup (TI-IVT-04-T-P) | TI-IVT-04-T-P-R03 | 2-1 Used Counts "흡입한 회수" | 흡입한 횟수 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (Consumables Popup에서 복사) | Reagent Item details Popup (TI-IVT-04-T-P) | TI-IVT-04-T-P-R05 | 2-1 Location in storage "해당 소모품의 위치 값" (Reagent 화면) | 해당 Reagent의 위치 값 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (띄어쓰기) | Reagent Item details Popup (TI-IVT-04-T-P) | TI-IVT-04-T-P-R07 | "2,010rxns  (22 tubes)" | 2,010 rxns (22 tubes) | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (화면 글자) | Reagent Item details Popup (TI-IVT-04-T-P) | TI-IVT-04-T-P-R08 | 예시 줄에 Inbound Date, Expiration Date 값이 없음 | 날짜 예시를 넣음 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (디스크립션) | Inventory Reagent (TI-IVT-04-T) | TI-IVT-04-T-R04 | 2-5 Required Qty 절 첫 문장 "좌측 영역의 Remaining Qty는…", 예외 처리 "검사 진행 중이 아닐 경우" (2-6·3-6은 "위의 상황이 아닐 경우") | Required Qty, 예외 처리 문장 통일 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (디스크립션) | Inventory Reagent (TI-IVT-04-T) | TI-IVT-04-T-R05 | 단위 혼용: 2-5 "10rxns", 3-6 "10T", 화면 "200T (2 racks)" | rxns로 통일 (COMM-4-b) | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (Figma 취소선) | Inventory Reagent (TI-IVT-04-T) | TI-IVT-04-T-R06 | 2-4·3-5 "표기 방식: 0번 디스크립션 참고" (0의 표기 방식은 취소선) | Common UX COMM-4-b 참고 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (화면 글자) | Inventory Reagent (TI-IVT-04-T) | TI-IVT-04-T-R08 | Chip "# Sample Preparation"과 "#Nucleic Acid Extraction" 띄어쓰기 다름 | 하나로 통일 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (화면 글자) | Inventory Reagent (TI-IVT-04-T) | TI-IVT-04-T-R11 | 예시 값 "#Trolley" | 실제 Location 예시 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (오타) | Waste Bin/Bottle (TI-IVT-05-T) | TI-IVT-05-T-R03 | 0 "Moule(index)" | Module (index) | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (디스크립션) | Waste Bin/Bottle (TI-IVT-05-T) | TI-IVT-05-T-R04 | 3-3 "[3-6] 최대 개수 도달/초과 후…" (3-6 없음) | 번호 지움 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (띄어쓰기) | Waste Bin/Bottle (TI-IVT-05-T) | TI-IVT-05-T-R07 | "PlateSealing (2)" | Plate Sealing (2) | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (디스크립션) | Waste Bin/Bottle (TI-IVT-05-T) | TI-IVT-05-T-R09 | 1 "Default : 모든 탭이 미선택 된 상태" (Chip을 말함) | 모든 Chip이 선택되지 않은 상태 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (디스크립션 1) | Inventory Usage History (TI-IVT-06-T) | TI-IVT-06-T-R01 | 목록 Item Type 값 "Reagents" (디스크립션 데이터는 Consumable, Reagent) | Reagent | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (화면 글자) | Inventory Usage History (TI-IVT-06-T) | TI-IVT-06-T-R02 | Usage 열 값이 예시 줄에 없음, 일부 줄은 Barcode도 없음 | 예시 값 채움 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (디스크립션) | Inventory Usage History (TI-IVT-06-T) | TI-IVT-06-T-R04 | 2 "오늘 기준 7일간의 내용만 목록에 노출" / 1 기간 검색 최대 1년 | 기본 조회 기간이 7일이라는 뜻으로 고침 | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (오타) | Inventory Usage History (TI-IVT-06-T) | TI-IVT-06-T-R05 | 3 ".CVS" | .CSV | 반영 |
| 3 디스크립션 · 화면 글자 정리 (오타 · 띄어쓰기 · 번호 · 예시 값 · 다른 화면 참조) (이름 (번호) 띄어쓰기) | Inventory Usage History (TI-IVT-06-T) | TI-IVT-06-T-R07 | "Plate Sealing(1)", "Consumable Storage(1)" | Plate Sealing (1), Consumable Storage (1) | 반영 |
| 4 무엇으로 바꿀지 아직 정해지지 않은 항목 (`ia/ia-screens.csv`) | Inventory Overview (TI-IVT-02-T) | TI-IVT-02-T-R08 | IA "짝 화면 동일"이 비어 있으나 LI-IVT-02-T와 화면·디스크립션이 같음 | IA `LI-IVT-02-T` 줄의 짝 화면 동일을 Y로 | 반영 (Y로 채움) |

- 케이스 3 규칙과 부딪혀 후보에서 뺀 항목(요청자에게 보여 주지 않음): TI-IVT-01-T-R07 (번호 2 없음 → 번호 정리), TI-IVT-04-T-R03 (번호 정리, Capacity를 3-4로) → `제외 (2026-11-27, 케이스 3 규칙과 부딪힘: 빈 번호를 채우지 않음, 중복 번호는 끝 번호 다음으로)`, `pending/closed.md`로 옮김

## 근거
<!-- 2단계. 틀은 flow/2-evidence.md "작업 기록에 쓰는 것"의 "근거 틀" -->

- 읽은 강도: 요건 1 = 케이스 3 (다시 그리기), 요건 목록의 줄과 같음. `basis`가 있는 화면 없음(모두 케이스 3)
- 화면 MD는 `screens/asis/inventory/`의 TI-IVT 8개와 `pending/open.md`의 그 CID 줄(1단계에서 읽음). TI-IVT-06-T는 1단계 답대로 아래 프레임(3543:361388: Item Type 기본값 `All`, 0 "폐기하는 시점기준", 2 "Usage: 폐기 시점의 사용 개수")을 원본으로 봄

**읽은 자료 목록**

| 요건 | 종류 | 자료 (ID · 파일) | 연결 근거 (왜 이 요건과 관련 있나) | 설계에 씀 (O / -) | 쓰는 화면 · 요소 | 설계에 쓸 규칙 (번호 · 문장, `-`면 쓰지 않는 이유) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 정책 | POL-INV-001 | ① 정책 `cids`에 8개 화면 모두 | O | 8개 화면 0 (User Type · 데이터 기준), [Refresh] (01-T 4 · 02-T 3 · 03-T 4 · 04-T 4 · 05-T 4), 03-T 3-7 · 04-T 3-7, 02-T 1 · 1-1 · 1-2 | 규칙 1 "Service, Admin, User 모두 볼 수 있음" / 2 "모든 Tab은 Enabled인 Module의 데이터만 보여 줌 (POL-EQP-009)" / 3 "들어올 때의 데이터를 보여 주고 실시간으로 바꾸지 않음. [Refresh]를 누르면 최신 데이터로 다시 불러옴" / 4 "데이터를 불러오지 못하면 Alert_020" / 5 "[Item details]를 누르면 Barcode 단위 Item details Popup" / 6 "Overview Module 순서 Sample Storage, Consumable Storage, High-throughput Extraction, Flexible Extraction, PCR Setup, Plate Sealing. 기본값 All" / 7 "Sample Storage는 `N ea (M racks)`" |
| 1 | 정책 | POL-INV-002 | ① `cids` (01-T · 02-T · 03-T · 04-T). 03-T-P · 04-T-P는 `cids`에 없음 → 정책 수정 범위 1 (DS-0013) | O | Remaining Qty (01-T 1-3, 02-T 1-3, 03-T 2-4 · 3-5, 04-T 2-4 · 3-5, 03-T-P 2-1 · 3, 04-T-P 2-1 · 3), Capacity (03-T 3-4, 04-T 3-3) | 정의 "Storage와 Instrument 안 거치 공간(가져간 품목 포함)의 수량 합" / 규칙 2 "거치 공간 품목은 실시간으로 줄이지 않고 소진 · 반환 때 갱신" / 3 "카드는 모든 Location 합, 상세는 Location별" / 4 "Capacity는 최대 적재량을 관리하는 Storage만, Instrument 셋팅 값. Cold Storage는 보여 주지 않음" / 5 "Consumable `{수량} ea ({n} {단위})`, Reagent `{quantity} {baseUnit} ({n} {packagingUnit})`, 1개 단수 · 2개 이상 복수" / 6 "사용량은 폐기할 때만 기록, 반환은 Remaining Qty만 줄임" |
| 1 | 정책 | POL-INV-003 | ① `cids` (01-T · 03-T · 04-T) | O | 01-T 1 · 1-1 · 1-4 · 1-5 · 1-6, 03-T · 04-T 1 Chip · 2-5 · 2-6 · 3-6 | 정의 표 Sufficient / Low / Insufficient (`status-values.csv`) / 규칙 2 "Required Qty와 Status는 Inbound Trolley 도킹 또는 [Run Start] 뒤 Batch가 끝나기 전이면 보여 줌(Partial Running · Error여도 Batch 전이면 계속), 아니면 '-'" / 3-1 "도킹하면 Run Start 전에도 보여 줌" / 4 "Insufficient > Low > Sufficient" / 5 "둘 다 0이면 숨김, 카드 안 모두 숨김이면 카드도" / 6 "Chip 여러 개, 다시 누르면 해제" / 7 "Summary: Insufficient, Low 순 → 부족 수량 많은 순 → Name 오름차순, 6개씩, 요약 카드 Insufficient와 Low" / 8 "조건 아니면 Shown only if system running or Inbound Trolley docked, 부족 없으면 No actions required" |
| 1 | 정책 | POL-INV-004 | ① `cids` (03-T-P · 04-T · 04-T-P) | O | 04-T 3-3 만료 안내, 03-T-P · 04-T-P 0 · 2 · 2-1 · 3 | 규칙 6 "Location 중 한 곳이라도 Expired면 카드와 목록 사이에 만료 안내" / 7 "Barcode 단위(`Module (Index) > Storage Unit` + Barcode), Buffer 공간 포함, 위에 Remaining Qty 합과 Expired 개수" / 8 "Reagent 정렬 Expiration Date 오름차순 → Remaining Rxns → Used Counts" / 9 "Barcode: Standard Tube 대표, IC 개별, 그 밖 PCR 박스 rxns, UC Kit Tub 대표" / 정의 "Used Counts = Decapping 횟수 / 최대 사용 횟수" |
| 1 | 정책 | POL-INV-005 | ① `cids` (05-T · 01-T) | O | 05-T 0 ~ 3-5, 01-T 3 · 3-1 · 3-3 · 3-4 | 정의 "Available 70% 미만, Almost Full 70% 이상, Full 100%", "Fill Level = 누적 ÷ 최대 × 100" / 규칙 1 ~ 4 (센서 · 99% · 센서 없으면 100% Full) / 6 "T-IOS는 비움 기능 없음" / 7 "Waste Bin이나 Liquid Waste Bottle이 있는 Module 모두, Unit 칸은 Module마다 가진 Unit 이름" / 8 "카드 상태 Full > Almost Full > Available, 카드 순서 Sample Pre-treatment … Universal PCR, 상세 Module Index 오름차순" / 9 "Summary는 Full, Almost Full만, Fill Level 높은 순 → Name 오름차순, 없으면 No actions required" |
| 1 | 정책 | POL-INV-006 | ① `cids` (06-T) | O | 06-T 0 ~ 3 | 규칙 1 "폐기할 때만 기록, 반환은 기록하지 않음" / 2 "Unit + Barcode + Usage + Date/Time 한 줄, Usage = 폐기 때 사용 개수, Date/Time = 폐기 시각" / 3 "기본 최근 7일, 최대 1년, 미래 날짜 불가" / 4 "Item Type All · Consumable · Reagent (기본 All), Name · Barcode 부분 일치, Module과 그 Storage Unit 오름차순" / 5 "Date/Time 최신순" / 6 "[Export]는 .csv (POL-COM-006)" |
| 1 | 정책 | POL-INV-007 | ① `cids` (04-T · 04-T-P) | O | 04-T PCR 카드 (IC와 Set 묶음) | 정의 표 "IC: Tube, Consumable Storage > Trolley, 100 rxns/tube / 나머지(MOM 등): Set, Plate Sealing > Cold Storage, 100 rxns/set" |
| 1 | 정책 | POL-COM-006 | ① `cids` (06-T) | O | 06-T 3 [Export] | 규칙 1 "내보내는 파일은 모두 .csv" / 3 "T-IOS는 [Export]를 누르면 OS 파일 탐색기에서 저장 경로와 파일 이름을 정함" |
| 1 | 정책 | POL-LOD-001 | ① `cids` (02-T) | O | 02-T 1-1 Sample Storage | 정의 "Inbound Trolley(투입), Outbound Trolley(회수)" / 규칙 9 "Overview의 Sample Storage 현황을 보고 Trolley를 바꿀 때를 정함" |
| 1 | 정책 | POL-LOD-005 | ① `cids` (05-T) | O | 05-T 3-3 · 3-5 | 규칙 1 "비움 처리는 L-IOS Material Setup > Empty Waste Bin에서만, Console Mode만. T-IOS는 비움 기능 없음" / 5 "[Confirm Empty]로 누적 사용 개수를 0부터 다시 셈" |
| 1 | 정책 | POL-EQP-009 | ③ 반영 대기 근거 · ④ POL-INV-001 규칙 2 | O | 8개 화면 0 데이터 기준 | 정의 "Enabled: Module 또는 Device Unit의 사용 여부. 화면에는 Enabled = Y, Disabled = N". 화면 MD 정책 참고는 POL-INV-001 규칙 2로 잇고 이 정책은 함께 적음 |
| 1 | 정책 | POL-LOD-004 | ④ POL-INV-004 · ⑤ Flexible Extraction | O | 04-T STARMag Universal Cartridge Kit 카드, 02-T Flexible Extraction | 규칙 13 "Buffer Cartridge Cap도 5개 단위로 표기 (예: 5 ea (1 set))" / 20 "Inventory의 STARMag Universal Cartridge Kit에 Buffer Cartridge Cap 항목" / 23 "Prep Tub의 Cap은 Inventory 관리 항목이 아님" |
| 1 | 정책 | POL-SMP-007 | ④ POL-INV-003 · 004 | - | | (Run 준비 규칙. 규칙 10은 Run이 Inventory UI를 따른다는 것이라 Inventory 화면에 더할 것 없음) |
| 1 | 정책 | POL-COM-001 | ④ POL-INV-005 규칙 6 | - | | (T-IOS 역할. POL-INV-005 규칙 6으로 씀) |
| 1 | 정책 | POL-TST-008 | ④ POL-INV-004 | - | | (Assay Pack 관리. 04-T 2-3 Reagents type의 File type 이름(Pretreatment, Extraction, PCR)만 같음. 기존 화면대로) |
| 1 | 정책 | POL-STA-006 | ④ POL-INV-006 규칙 8 | - | | (통계 산출. Inventory 화면에 쓰지 않음) |
| 1 | 정책 | POL-SYS-004 | ④ POL-COM-006 | - | | (L-IOS Export 경로 · Log. T-IOS 화면이라 쓰지 않음) |
| 1 | Alert | Alert_020 (`alert/alert-catalog.csv`) | POL-INV-001 `alerts`, 02-T 3 | O | 01-T 4 · 02-T 3 · 03-T 4 · 04-T 4 · 05-T 4 · 06-T (검색 · 목록 불러오기) | "데이터 로드를 실패했을 경우" / Some data failed to load. / Please click the refresh button in the top-right corner and try again. / [OK] → Alert 닫힘. 사용 화면은 지금 LI-IVT-02-T, TI-IVT-02-T뿐 (3단계에서 사용 화면 더함) |
| 1 | 권한 | `policy/permission-matrix.csv` Inventory · All | 0번 User Type 확인 (IA Lv.1 Inventory) | O | 8개 화면 0 User Type | Service O · Admin O · User O → asis `user_type: [Service, Admin, User]`와 같음 (T-IOS라 L-IOS Client Mode 없음) |
| 1 | 기준데이터 | `glossary/status-values.csv` 재고 상태 · 폐기함/폐액통 상태 · 시약 만료 상태 · 저장 장치 도킹 상태 · 장비 통합 상태 | POL-INV-003 · 004 · 005 · LOD-001 `data` | O | 01-T · 03-T · 04-T Status, 05-T Status, 04-T 3-3 · 04-T-P Expired, 01-T 1 Docked | 재고 상태 Sufficient / Low / Insufficient (대상 Consumable / Reagent, Empty는 예전 표기), 폐기함/폐액통 상태 Available / Almost Full / Full, 시약 만료 상태 Valid / Under 30 days / Expired, 저장 장치 도킹 상태 Docked / Undocked, 장비 통합 상태 Running · Partial Running · Error |
| 1 | 기준데이터 | `glossary/glossary.md` 표기 규칙 | 수량 · 이름 표기 | O | 8개 화면 화면 글자 | "이름 (번호) 띄어 씀", "Consumable `{수량} ea ({n} {단위})`", "Reagent `{quantity} {baseUnit} ({n} {packagingUnit})`", "T 표기는 쓰지 않고 rxns", "단위 1개 단수 · 2개 이상 s", "μL 앞 띄어 씀", "위치는 `Module (Index) > Storage Unit`" |
| 1 | 기준데이터 | `glossary/modules.csv` · `module-units.csv` | POL-INV-002 · 005 `data`, ⑤ | O | 01-T · 02-T · 05-T · 06-T Module · Unit 이름 | 아래 용어 목록 Module · Unit 줄 |
| 1 | 장비 | `policy/modules/sample-pretreatment.md` | ⑤ 05-T · 01-T 3 Module | O | 05-T 3-2 Unit, 01-T 3 목록 | "Waste: 단디메카는 Waste Bin (Upper · Lower), 로체시스템즈는 Tip Waste Bin (Upper · Lower) · Film Waste Bin (Upper · Lower). Liquid Waste Bottle (Upper · Lower)은 둘 다. 화면에는 설치된 제조사의 Unit만 표기" → 절차 6번 질문 4 |
| 1 | 장비 | `policy/modules/ht-extraction.md` | ⑤ 05-T · 01-T 3 | O | 05-T 3-2 · 3-3, 01-T 3 | "Waste: DWP Waste Bin, DWP Film Waste Bin (만재 센서 없음, Counting으로만 관리)" (POL-INV-005 규칙 4) |
| 1 | 장비 | `policy/modules/plate-sealing.md` | ⑤ | O | 05-T · 01-T 3 Sealer Waste Bin, 02-T Plate Sealing 열 | "Sealer Waste Bin (1) · (2), 만재 센서 있음, 최대 수용 Film 20장", "Cold Storage: PCR Reagent 구성품, MM Tube Socket" |
| 1 | 장비 | `policy/modules/sample-storage.md` · `consumable-storage.md` · `flexible-extraction.md` · `pcr-setup.md` · `universal-pcr.md` | ⑤ | - | | (Unit 구성은 `module-units.csv`로 봄. 그 밖은 Inventory 화면에 더할 것 없음) |
| 1 | 논의 대상 | DS-0001 · DS-0004 · DS-0005 · DS-0011 (모두 `종료`) | 걸린 정책 POL-INV-001 · 005 · 007, POL-LOD-001 · 005 | - | | (정책서 · 용어집에 이미 반영됨. 열린 논의 대상 없음) |

**관련 자료 없는 영역 · 요소**

| 화면 · 영역 · 요소 | 근거로 삼는 것 |
| --- | --- |
| 01-T 1-7 · 3-5, 02-T 2, 03-T 5 · 04-T 5 Tooltip 문구 | 기존 UX 화면설계서만 근거 (반영 대기 01-T-R04 · R06, 02-T-R07, 03-T-R05로 고침) |
| 06-T 검색 [Reset] · [Search], Items 건수, 페이지네이션 | 기존 UX 화면설계서만 근거 (3단계 Common UX COMM-5-s Type3) |
| 03-T-P · 04-T-P · 06-T 목록이 비었을 때 | 기존 UX 화면설계서만 근거 (3단계에서 Common UX로 보고, 없으면 질문 대기) |
| 04-T 1 · 2-3 Reagents type Chip | 기존 UX 화면설계서만 근거 (File type 이름은 POL-TST-008 정의와 같음) |
| 01-T 1-6 Pagination, 01-T 케이스 건수별 노출 | 기존 UX 화면설계서만 근거 (POL-INV-003 규칙 7 "한 페이지에 6개") |

**대조**

| 요건 · 화면 · 요소 | 결과 | 근거 | 다음 |
| --- | --- | --- | --- |
| 요건 1 · 8개 화면 · 반영 대기 73건 (작업 중) | 기존 화면이 정책과 다름 | 각 항목의 근거 칸 | 3단계가 그 항목의 변경 후대로 그림 (변경 확인 줄은 3단계에서 항목마다) |
| 요건 1 · 8개 화면 0 User Type | 정책에 있음 | `permission-matrix.csv` Inventory, POL-INV-001 규칙 1 | 0번 User Type : Service, Admin, User |
| 요건 1 · TI-IVT-01-T 화면 1 · 3 Unit 이름 | 기존 화면이 정책과 다름 | `module-units.csv` | C1 |
| 요건 1 · TI-IVT-01-T 4 · 03-T 4 · 04-T 4 · 05-T 4 [Refresh] 불러오기 실패 | 기존 화면이 정책과 다름 (Alert_020이 02-T에만 있음) | POL-INV-001 규칙 4, Alert_020 | C2 |
| 요건 1 · TI-IVT-01-T 1 노출 기준 "통합 상태 Run O / Docking X" | 기존 화면이 정책과 다름 ([Run Start] 뒤 Batch가 끝나기 전이면 Partial Running · Error여도 보여 줌) | POL-INV-003 규칙 2 · 3-1 | C3 |
| 요건 1 · TI-IVT-06-T 2 목록 Unit 칸 `Plate Sealing` · `PCR Setup` | 기존 화면이 정책과 다름 (Unit이 아님) | `module-units.csv`, POL-INV-006 규칙 2 | C4 |
| 요건 1 · TI-IVT-06-T 3 [Export] 저장 방식 | 기존 화면이 정책과 다름 (T-IOS 저장 방식이 없음) | POL-COM-006 규칙 3 | C5 |
| 요건 1 · TI-IVT-03-T-P · 04-T-P Remaining Qty | 정책에 있음 (`cids`만 빠짐) | POL-INV-002 정의 · 규칙 2 · 5 | 정책 수정 범위 1 (DS-0013) |
| 요건 1 · TI-IVT-05-T 3-2 · TI-IVT-01-T 3 Sample Pre-treatment Waste Unit | 장비사에 따라 화면이 갈림 | `policy/modules/sample-pretreatment.md` Unit, `module-units.csv` | 절차 6번 질문 4 |
| 요건 1 · TI-IVT-06-T 0 · 1 · 2 (아래 프레임) | 정책에 있음 | POL-INV-006 규칙 1 · 2 · 4 | 정책 ID로 이음 |

- 1단계 "뒤 단계용 확인 항목(claude)"의 이어진 번호를 채움 (2 ~ 3 · 6 ~ 13은 `3단계로`)
- Alert · Confirm 보완 필요 지점(뒤 단계용 4): [Export] 저장 실패 · 0건 안내는 Alert 카탈로그 · POL-COM-006에 없음 → Q1

**정책 수정 범위**

| # | 바꿈 / 더함 | 정책 ID · 규칙 (또는 기준 자료) | 변경 전 | 변경 후 (안) | 논의 대상 |
| --- | --- | --- | --- | --- | --- |
| 1 | 더함 | POL-INV-002 머리말 `cids` | `cids`에 Item details Popup 없음 | TI-IVT-03-T-P, LI-IVT-03-T-P, TI-IVT-04-T-P, LI-IVT-04-T-P를 더함 (규칙 문장은 그대로) | DS-0013 |

**용어 목록**

| 원래 표현 | 표준어 | 어디서 | 새 용어면 처리 | 찾은 때 (2단계 / 3단계) |
| --- | --- | --- | --- | --- |
| Comsumable | Consumable | TI-IVT-01-T 화면 1-1 · 케이스 | | 2단계 |
| Empty (재고 상태) | Insufficient | TI-IVT-01-T 1-1 · 1-3 · 1-5 · 케이스 (건 수별 · 구동 중이 아닐 · 작업해야할 아이템이 없을) | | 2단계 |
| Docking (상태) | Docked | TI-IVT-01-T 1 · 케이스 | | 2단계 |
| 통합 상태 | 장비 통합 상태 | TI-IVT-01-T 1, TI-IVT-03-T 2-5 · 2-6 · 3-6, TI-IVT-04-T 2-5 · 2-6 · 3-6 | | 2단계 |
| Warning (폐기함 상태) | Almost Full | TI-IVT-01-T 3-5, TI-IVT-05-T 3-3 "(Warning)" | | 2단계 |
| Error (폐기함 상태 뒤 괄호) | (지움, 폐기함/폐액통 상태는 Full) | TI-IVT-05-T 3-3 "Full 상태 (Error)" | | 2단계 |
| Waste Status · Waste Status Icon | Waste Bin/Bottle Status · Waste Bin/Bottle Status Icon | TI-IVT-01-T 3-4, TI-IVT-05-T 0 | | 2단계 |
| 폐기물함 · 폐기함 · 폐기물 함 · 폐기물 | Waste Bin/Bottle | TI-IVT-05-T 0 · 2-2 · 3-2 · 3-3 · 3-4 | | 2단계 |
| 모듈 · Moule | Module | 8개 화면 0, TI-IVT-05-T 0 · 2 · 3 · 3-1 | | 2단계 |
| 사용여부가 '사용'인 모듈 | Enabled인 Module | 8개 화면 0 | | 2단계 |
| 소모품 | Consumable | TI-IVT-01-T 0, TI-IVT-03-T 0 · 2 · 2-3 · 2-4 · 3-1 · 3-3 · 3-5 · 3-7, TI-IVT-03-T-P 0 · 1 · 2 · 2-1, TI-IVT-04-T 2-4 · 3-5, TI-IVT-04-T-P 2-1, TI-IVT-06-T 0 · 2 | | 2단계 |
| 시약 | Reagent | TI-IVT-01-T 0, TI-IVT-04-T 0 · 2-3 · 2-4 · 2-5 · 3 · 3-1 · 3-2 · 3-3 · 3-5 · 3-6 · 3-7, TI-IVT-04-T-P 0 · 1 · 2 · 2-1 · 3, TI-IVT-06-T 0 · 2 | | 2단계 |
| 검체 · 검체 트롤리 | Sample · Inbound Trolley | TI-IVT-02-T 1-1, TI-IVT-03-T 2-5 · 2-6 · 3-6, TI-IVT-04-T 2-5 · 2-6 · 3-6 | | 2단계 |
| 투입 트롤리 · 회수 트롤리 | Inbound Trolley · Outbound Trolley | TI-IVT-02-T 1-1 | | 2단계 |
| 저장 장치 | Storage | TI-IVT-03-T 2-4, TI-IVT-04-T 2-4 | | 2단계 |
| 바코드 · 튜브 | Barcode · Tube | TI-IVT-03-T-P 0 · 2-1, TI-IVT-04-T-P 0 · 2-1 | | 2단계 |
| DX 서랍식 입고 · 서랍 | Dx 시스템 Storage의 Drawer | TI-IVT-03-T-P 2-1, TI-IVT-04-T-P 2-1 | | 2단계 |
| 유효기간 · 유효기한 · 유효기가 | Expiration Date | TI-IVT-04-T 3-3, TI-IVT-04-T-P 2-1 · 3 | | 2단계 |
| 반응 수T · 10T · 14T · 4T · 200T · 288T · 300T | rxns (`{n} rxns`) | TI-IVT-04-T 3-6, TI-IVT-04-T-P 2-1 · 3, TI-IVT-03-T 화면 (Tub 200T), TI-IVT-02-T 케이스 (LB DWP 288T, Allplex 300T) | | 2단계 |
| sufficient | Sufficient | TI-IVT-03-T 1, TI-IVT-04-T 1 | | 2단계 |
| 탭 (Chip을 뜻함) | Chip | TI-IVT-05-T 1 "모든 탭이 미선택" | | 2단계 |
| 팝업 | Popup | TI-IVT-03-T 3-7, TI-IVT-04-T 3-7, TI-IVT-03-T-P 0 · 5 · 6, TI-IVT-04-T-P 0 · 5 · 6 | | 2단계 |
| 표출 | 노출 | TI-IVT-02-T 케이스, TI-IVT-03-T-P 2-1 · TI-IVT-04-T-P 2-1 제목 "리스트 표출 항목" | | 2단계 |
| 표시 (보여 준다는 뜻) | 노출 | 8개 화면 디스크립션 전반 (01-T 1-3 · 1-6, 02-T 1-1, 03-T 2 · 3 · 3-4 · 3-5, 03-T-P 2-1, 04-T 3-4 · 3-5, 04-T-P 2-1, 05-T 3-4, 06-T 2) | | 2단계 |
| 최초 진입: 기본(Default) | Default | TI-IVT-03-T 2, TI-IVT-04-T 2 | | 2단계 |
| Cureca | CURECA | 8개 화면 0 | | 2단계 |
| Usage Tab | Usage History Tab | TI-IVT-06-T 0 | | 2단계 |
| .CVS | .csv | TI-IVT-06-T 3 | | 2단계 |
| Reagents (Item Type 값) | Reagent | TI-IVT-06-T 화면 2 | | 2단계 |
| Pagenation | Pagination | TI-IVT-01-T 케이스 | | 2단계 |
| Module[index] · Module(index) · Moule(index) | `Module (Index)` | TI-IVT-02-T 1-2, TI-IVT-03-T 3 · 3-2, TI-IVT-03-T-P 0 · 2-1, TI-IVT-04-T 3 · 3-2, TI-IVT-04-T-P 0 · 2-1, TI-IVT-05-T 0 · 3 · 3-1 | | 2단계 |
| FlexibleExtraction(1) · High-throughput Extraction(1) · PCR Setup(1) · Plate Sealing(1) · Universal PCR(1) · PlateSealing (1) · 300 μL Tip Storage(1) · Consumable Storage(1) | 이름 (번호) 띄어 씀: Flexible Extraction (1) · High-throughput Extraction (1) · PCR Setup (1) · Plate Sealing (1) · Universal PCR (1) · 300 μL Tip Storage (1) · Consumable Storage (1) | TI-IVT-01-T 화면 1 · 3, TI-IVT-03-T 화면 3, TI-IVT-05-T 화면 2, TI-IVT-06-T 화면 2 | | 2단계 |
| Flexible Extraction · Universal PCR (번호 없음, Module (Index) 자리) | Flexible Extraction (1) · Universal PCR (1) | TI-IVT-05-T 화면 2 · 3-1 | | 2단계 |
| WasteBin | Waste Bin | TI-IVT-01-T 화면 3 | | 2단계 |
| Waste Bin (High-throughput Extraction의 Unit) | DWP Waste Bin | TI-IVT-01-T 화면 3 | | 2단계 |
| Sealer Waste Bin (번호 없음) | Sealer Waste Bin (1) | TI-IVT-01-T 화면 3 | | 2단계 |
| Tip Waste Bin (Sample Pre-treatment, Upper · Lower 없음) | Tip Waste Bin (Upper) 또는 (Lower) (로체시스템즈 장비의 Unit) | TI-IVT-01-T 화면 3 | | 2단계 |
| 300 μL Tip Storage (PCR Setup, 번호 없음) | 300 μL Tip Storage (1) | TI-IVT-01-T 화면 1 | | 2단계 |
| Unit 칸 Plate Sealing · PCR Setup (Module 이름) | Plate Sealing Reagent → Cold Storage, PCR Plate → PCR Plate Storage | TI-IVT-06-T 화면 2 | | 2단계 |
| Sample Pre-treatment Waste Unit 구성 | 제조사별: 단디메카 Waste Bin (Upper · Lower), 로체시스템즈 Tip Waste Bin (Upper · Lower) · Film Waste Bin (Upper · Lower). 둘 다 Liquid Waste Bottle (Upper · Lower) | TI-IVT-05-T 화면 3-2 (단디메카 구성으로 그려짐), TI-IVT-01-T 화면 3 (로체 Tip Waste Bin) | 절차 6번 질문 4 | 2단계 |

## 설계
<!-- 3단계. 틀은 flow/3-design.md "남는 것". 질문 대기 · 변경 확인은 이 절이 아니라 아래 표에 적음 -->

## 질문 대기
<!-- 사용자 확인 목록의 질문 대기. 원본은 이 표(화면 MD에는 두지 않음). 2단계(대조에서 나온 것) · 3단계(설계하며 나온 것)가 앞의 다섯 칸으로 줄을 만들고, 4단계가 "풀린 날 · 어떻게"를 채움. 번호 Q1 · Q2 …는 작업 하나에 통번호(2단계부터 이어 매김, T · L에 같은 것은 같은 번호)이고, 사용자 확인 라벨 · Figma 사용자 확인 목록에 같은 번호를 씀. "질문"은 요청자가 정할 것을 명사형으로, 근거는 괄호로(reference-rules/description.md 5절). 정책을 정해야 하는 질문은 논의 대상 ID를 적음. 줄은 지우지 않음 -->

| 번호 (Q) | 질문 | 관련된 곳 (CID · 디스크립션 번호) | 논의 대상 | T · L 같음 | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- | --- |
| Q1 | [Export] 저장 실패 · 내보낼 목록이 0건일 때의 안내 (Alert 카탈로그 · POL-COM-006에 없음) | TI-IVT-06-T #3 | | - (L-IOS 고치지 않음) | |

## 변경 확인
<!-- 사용자 확인 목록의 변경 확인이자 이 작업으로 화면에서 바뀐 요소의 목록. 원본은 이 표(화면 MD에는 두지 않음). 2단계 · 3단계가 앞의 여덟 칸으로 줄을 만들고(오타 · 표기만 고친 줄은 3단계가 "확인한 날 · 답"에 `맞음 (오타, 날짜)`, Common UX · 기존 화면대로 설명을 더한 줄은 `맞음 (Common UX, 날짜)` · `맞음 (기존 화면, 날짜)`, 반영 대기 값을 그대로 쓴 줄은 3단계 마침 점검이 `맞음 (기계 검사, 날짜)`를 적음, reference-rules/description.md 5절), 4단계가 나머지 줄의 "확인한 날 · 답"을 채우고 답 · 검토 질의로 바뀐 줄을 더함. 번호 C1 · C2 …는 질문 대기와 같은 방식. "바꿔 그린 것"은 한 줄 요약, 근거는 괄호, 접두어 없음. "업데이트 메모"는 줄을 만들 때 채움: 보이는 것 · 동작 · 조건이 바뀌었거나 요소가 더해지거나 빠졌으면 O, 문서 정리(말투 · 용어 · 오타 · 번호 · 패널의 화면 정보)면 -(reference-rules/description.md 5절 "업데이트 메모"). "화면 표기 글자 (기존 → 새)"는 화면에 보이는 영어 글자가 바뀐 줄만 문구로 그대로 적음(`Statue → Status`, 새로 넣은 글자 `없음 → No results found.`, 지운 글자 `OPEN → 없음`). 여러 글자가 바뀌면 ` · `로 모두 적고 「등」으로 묶지 않음. 디스크립션 설명 글만 바뀐 줄은 비움. 4단계 언어셋이 이 칸으로 이번에 바뀐 글자를 가림(flow/4-revise-verify.md 절차 4). 줄은 지우지 않음 -->

| 번호 (C) | 기존 화면 | 바꿔 그린 것 | 화면 표기 글자 (기존 → 새) | 관련된 곳 (CID · 디스크립션 번호) | 근거 | T · L 같음 | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C1 | `High-throughput Extraction(1) Waste Bin` · `Plate Sealing(1) Sealer Waste Bin` · `Sample Pre-treatment (1) Tip Waste Bin` · `PCR Setup(1) / 300 μL Tip Storage` | Unit 이름을 Module-Unit 표의 UI 표기로 (`module-units.csv`) | Waste Bin → DWP Waste Bin · Sealer Waste Bin → Sealer Waste Bin (1) · Tip Waste Bin → Tip Waste Bin (Upper) · 300 μL Tip Storage → 300 μL Tip Storage (1) | TI-IVT-01-T #1 · #3 | `glossary/module-units.csv` | - (L-IOS 고치지 않음) | - | |
| C2 | [Refresh]로 불러오기에 실패했을 때 동작 없음 (TI-IVT-02-T만 Alert_020) | 데이터를 불러오지 못하면 Alert_020 노출 (POL-INV-001 규칙 4) | | TI-IVT-01-T #4 · TI-IVT-03-T #4 · TI-IVT-04-T #4 · TI-IVT-05-T #4 | POL-INV-001 규칙 4, Alert_020 | - (L-IOS 고치지 않음) | O | |
| C3 | 노출 기준 "통합 상태 Run O / Docking X = 부족량 노출" 등 Run 여부로 가름 | Inbound Trolley가 도킹되어 있거나 [Run Start] 뒤 진행 중인 Batch가 끝나지 않았으면 부족 목록을 보여 줌. Partial Running · Error여도 Batch가 끝나기 전이면 계속 보여 줌 (POL-INV-003 규칙 2 · 3-1) | | TI-IVT-01-T #1 | POL-INV-003 규칙 2 · 3-1 | - (L-IOS 고치지 않음) | O | |
| C4 | 목록 Unit 칸에 `Plate Sealing` · `PCR Setup` (Module 이름) | 실제 Storage Unit으로: Plate Sealing의 Reagent는 Cold Storage, PCR Setup의 PCR Plate는 PCR Plate Storage (`module-units.csv`, POL-INV-006 규칙 2) | Plate Sealing → Cold Storage · PCR Setup → PCR Plate Storage | TI-IVT-06-T #2 | `glossary/module-units.csv`, POL-INV-006 규칙 2 | - (L-IOS 고치지 않음) | - | |
| C5 | [Export] "로컬 PC에 파일(.CVS) 형태로 저장" | [Export]를 누르면 OS 파일 탐색기에서 저장 경로와 파일 이름을 정해 .csv로 저장 (POL-COM-006 규칙 1 · 3) | | TI-IVT-06-T #3 | POL-COM-006 규칙 1 · 3 | - (L-IOS 고치지 않음) | - | |

## 검토 질의
<!-- 4단계 절차 2번. 틀은 flow/4-revise-verify.md "검토 질의 틀" -->

## 언어셋
<!-- 4단계 절차 4번. 틀은 flow/4-revise-verify.md "언어셋 틀" -->

## 요청자 확인
<!-- 요청자에게 물은 것을 모두 한 줄씩 적음. 정해진 확인의 질문(단계 문서 "물을 것"의 번호)은 물을 때 적고, 작업하다 생긴 예외 질문(flow/README.md "단계를 지나는 규칙" 9)은 생길 때 답을 비운 줄로 적었다가 다음 정해진 확인에서 물음. 답은 이 표에만 적고, 답대로 고친 곳(요건 목록 · 반영 대기 등)에 다시 옮겨 적지 않음. 사용자 확인 목록의 질문 대기 · 변경 확인(Q · C)은 이 표에 적지 않고, 답은 "질문 대기" · "변경 확인" 표에만 적음. 줄은 지우지 않음 -->

| # | 생긴 날 | 단계 · 절차 (질문 번호 또는 `예외`) | 물은 것 | 관련된 곳 (CID · 디스크립션 번호 · Language ID) | 답을 받을 때까지 둔 모습 (예외 질문만) | 답 (날짜) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-11-27 | 1단계 · 절차 5번 질문 6 | 이번 작업 화면의 반영 대기 항목을 묶음 1 ~ 3마다 반영 / 이번엔 안 함 가운데 고름 | TI-IVT-01-T ~ TI-IVT-06-T 반영 대기 73건 | | 세 묶음 모두 반영 (2026-11-27, 추천대로 진행) |
| 2 | 2026-11-27 | 1단계 · 절차 5번 질문 6 (묶음 4, 값을 함께 물음) | TI-IVT-02-T-R08: IA `TI-IVT-02-T` 줄의 "짝 화면 동일"(지금 Y)과 `LI-IVT-02-T` 줄(비어 있음)을 Y로 맞출지 / 바꾸지 않음 / 이번엔 안 함 | TI-IVT-02-T-R08, `ia/ia-screens.csv` 44 · 200줄 | | Y로 채움 (2026-11-27, 추천대로 진행) |
| 3 | 2026-11-27 | 1단계 · 절차 4번 순서 3 (IA와 화면이 다른 곳) | TI-IVT-06-T 기획 프레임이 같은 이름 · 같은 Ver(2.1.18)로 둘 있음: 위 프레임(3543:361230, asis 화면 MD가 옮긴 것, Item Type 기본값 `All Item Types`, 반환 시점 포함) / 아래 프레임(3543:361388, 기본값 `All`, 폐기 시점만) 가운데 어느 것을 원본으로 다시 그릴지 | TI-IVT-06-T #0 · #1 · #2 | | 아래 프레임 3543:361388을 원본으로 (2026-11-27, 추천대로 진행) |
| 4 | 2026-11-27 | 1단계 · 절차 4번 순서 3 (asis 추출 빠짐) | TI-IVT-04-T 3-3 Capacity "해당 화면설계에 없으나 아래 다른 예시 화면에서 확인 가능"이 가리키는 예시 화면이 asis 화면 MD에 없음: 그 프레임을 알려 주시거나, 없으면 디스크립션대로 그림 | TI-IVT-04-T #3-3 | | 따로 없음, 디스크립션대로 그림 (2026-11-27, 추천대로 진행) |
| 5 | 2026-11-27 | 1단계 · 절차 5번 질문 7 | 위 요건 목록과 흐름대로 진행할지 (대상 화면 = Inventory 메뉴 T-IOS 화면 8개, L-IOS 짝 화면은 고치지 않음) | 요건 1 | | 이대로 진행 (2026-11-27) |
| 6 | 2026-11-27 | 2단계 · 절차 6번 질문 1 | 정책 수정 범위 1 (DS-0013): POL-INV-002 `cids`에 Item details Popup 넷을 더할지 - 이대로 결정 / 논의 중으로 둠 | TI-IVT-03-T-P, TI-IVT-04-T-P, DS-0013 | | (2026-11-27 10:19 요청자가 「POL-INV-002 이게 어디있지?」로 되물음 → 위치(`policy/inv/POL-INV-002.md`, 정책서 Inventory)와 내용을 답하고 다시 물음) |
| 7 | 2026-11-27 | 2단계 · 절차 6번 질문 4 | Sample Pre-treatment의 Waste Unit은 제조사마다 다름(단디메카 Waste Bin (Upper · Lower) / 로체시스템즈 Tip Waste Bin · Film Waste Bin (Upper · Lower)): TI-IVT-05-T 3-2 · TI-IVT-01-T 3을 제조사별 케이스 화면으로 나눠 그릴지 - 모두 그림 / 그리지 않음 (기본 화면 하나) | TI-IVT-05-T #3-2, TI-IVT-01-T #3 | | |

## 이 작업의 논의 대상
<!-- 2 · 3 · 4단계가 논의 대상을 만들거나 결정 줄을 더할 때마다 한 줄. 5단계는 `결정`인 줄을 반영함 (아래 "쓰는 법"의 "이 작업의 논의 대상") -->

| 논의 대상 | 상태 (논의 중 / 결정) | 내용 한 줄 | 5단계 반영 |
| --- | --- | --- | --- |
| DS-0013 | 논의 중 | POL-INV-002 `cids`에 Item details Popup(TI/LI-IVT-03-T-P, TI/LI-IVT-04-T-P)을 더함 | |

## 이 작업이 남긴 것

- 다른 화면의 반영 대기 항목: (전체 항목 ID)
- 고친 카탈로그 줄: (코드 · 무엇을 — 새 줄 / 사용 화면 더함 / 등급(Property) 채움, `alert/`)
