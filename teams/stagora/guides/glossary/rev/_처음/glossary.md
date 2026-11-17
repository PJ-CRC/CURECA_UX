# 용어집

> 상태: v0 (2026-11-02). 확정 용어 54개, 후보 2개. 이후 새 용어는 작업하면서 추가합니다. 용어 데이터는 [terms.csv](terms.csv)에 두고, 이 문서에는 원칙만 둡니다.

| 파일 | 내용 |
| --- | --- |
| [terms.csv](terms.csv) | 용어 |
| [status-values.csv](status-values.csv) | 상태값. 분류 칸으로 CURECA Status(장비 자체의 상태)와 System Status(소프트웨어가 관리하는 상태)를 나눔. 구동 상태값 3단계 (장비 통합 상태 / 장비 모듈 상태 / 검사 장치 상태)와 Unit Type별 상태값 (도어 잠금, 도어 열림, 저장 장치 도킹, 폐기함/폐액통, 연결 상태, Storage Type), Sample·Plate·검사 배치 상태, 시약 만료, 재고, 이벤트 상태·등급·종류 |
| [test-items.csv](test-items.csv) | 검사 항목 30개 (UI 표기, 코드, 시약 제품, 검사군, Target Masking, 추출 장치 사용 가능 여부) |
| [sample-types.csv](sample-types.csv) | 검체 타입 14개와 검사군별 사용 가능 여부 |
| [modules.csv](modules.csv) | Module 8종 (코드명, 영문·한글 UI 표기, 검사 단계) |
| [module-units.csv](module-units.csv) | Module별 Unit 52개 (코드명, 영문·한글 UI 표기, Unit Type, 수량) |
| [test-stages.csv](test-stages.csv) | 검사 단계 5개와 담당 Module |
| [consumables.csv](consumables.csv) | Consumable 9개와 Reagent(전처리 6개, 추출 2개 제품의 구성품 14개)의 코드명, UI 표기, 저장 위치, 수량 단위, 장착 형태, 최대 사용 횟수, 품목 그룹, Barcode (씨젠 소모품·시약 261102) |
| [pcr-reagents.csv](pcr-reagents.csv) | PCR Reagent 30개 제품의 구성품 173개 (구성품 이름, 저장 위치, 수량 단위, 최대 사용 횟수, Barcode, rxns 코드) (씨젠 소모품·시약 261102) |
| [review-v0.md](review-v0.md) | v0 검토표와 결정 근거 |

**품목 표의 용도 (2026-11-03):** `consumables.csv`의 Consumable 행은 Consumable의 기준입니다. Reagent(전처리·추출·PCR)는 실제로 Assay Pack(POL-TST-008, `reference/customer/assay-pack/`)이 정한 구조와 값으로 Instrument에 들어옵니다. 그래서 Reagent 행은 기준으로 쓰지 않고 두 가지로만 씁니다: (1) Assay Pack으로 들어온 Reagent 정보를 검증하는 자료, (2) 화면설계에 넣는 실제 데이터(구성품 이름, 수량 단위, 저장 위치, Barcode 등)

각 표의 출처는 근거 칸에 적습니다. 씨젠 원본에서 온 내용은 `씨젠 <문서 약칭> <버전> > <시트>` 형식으로 인용합니다(`reference/customer/README.md`).

용어집의 표준어 중 화면 라벨로 쓰이는 것은 언어셋(`language-set/`)의 문구와 연결합니다. 연결 방식은 다국어 작업 때 정합니다.

## 문서 언어

- 정책서와 화면 디스크립션은 한국어 문장으로 씁니다.
- 화면에 보이는 항목 이름(메뉴, 버튼, 라벨, 상태값, 모듈 이름 등)과 업무 대상 이름(Sample, Reagent, Consumable, Instrument 등)은 모두 영어로 씁니다. 한국어로 옮기지 않습니다. 사용자가 화면과 문서를 다르게 이해하는 것을 막기 위해서입니다.
  - 예: "Module의 Unit이 Error 상태일 때 [Initialize] 버튼은 비활성화된다."
  - 예: "Sample이 Not Tested 상태이면 해당 Trolley에서 다시 Run을 시작할 수 없다."
- 예외: 용어집에서 한국어를 표준어로 정한 말(예: 장비 통합 상태, 언어셋, 임시 정책)은 한국어로 씁니다.
- 화면 설계(UX 화면)는 영어로 합니다(`rules/language-set.md`).

## 표준어를 정하는 기준

- **화면에 보이는 말:** 화면 라벨 표기를 그대로 표준어로 씁니다. 문서에서도 영어 그대로 씁니다 (예: User Type, Module, Unit).
- **화면에 보이지 않는 팀 내부 말:** 팀이 실제로 쓰는 한국어를 표준어로 하고, 영문·파일 이름을 짝으로 정합니다 (예: 언어셋 / language-set).

## 대화와 문서

- **문서:** 정책서, 화면설계서, 룰 문서 등 저장소의 모든 문서에는 표준어만 씁니다.
- **대화:** 팀원은 요청할 때 영어를 소리 나는 대로 쓰거나(예: 유저타입) 편한 말로 써도 됩니다. Claude는 뜻이 확실하면 표준어로 이해해 작업하고, 확실하지 않으면 작업 전에 어떤 뜻인지 묻습니다.
- 대화에서 쓰는 표현 중 뜻이 확실한 것은 "쓰지 않는 표현"에 넣어, 문서 검토 때 묻지 않고 표준어로 바꿉니다.

## 표기 규칙

| 규칙 | 예 | 근거 |
| --- | --- | --- |
| 이름과 번호(인덱스) 사이는 띄어 씁니다 | PCR Setup (1), Sample Preparation (1), Prep Consumable Storage (1), CFX96 (1) | 2026-10-30 결정 |
| 검사 항목명은 UI 표기 목록을 따릅니다. 씨젠 원본 UI 표기와 다르면 사용자 제공 목록이 우선 | GI-B1, GI-H1, Allplex HPV HR, Anyplex II HPV HR | [test-items.csv](test-items.csv), 2026-10-30·11-02 결정 |
| 버튼·라벨 대소문자 | (주간 미팅에서 결정) | 협의 대기 PD-0001 |
| Consumable 수량: `{수량} ea ({n} {단위})`. 낱개 입고는 `{수량} ea` | 96 ea (1 rack), 480 ea (5 racks), 3 ea | Common UX COMM-4-b |
| Reagent 수량: `{quantity} {baseUnit} ({n} {packagingUnit})` | 100 rxns (1 tube), 192 rxns (2 DWPs), 384 rxns (4 sets) | Common UX COMM-4-b |
| Reagent 수량의 T 표기는 쓰지 않고 rxns로 씁니다 | 100T (1 rack) → 100 rxns (1 rack) | 2026-10-30 결정 |
| 화면 표기 Idle은 Ready로 씁니다 (고객 결정으로 변경). 검사 장치 상태의 코드명은 Idle 그대로 | Idle → Ready (UI 표기) | 2026-10-30 결정, 2026-11-02 확인 |
| 단위는 1개면 단수, 2개 이상이면 뒤에 s | 1 rack / 2 racks, 1 DWP / 2 DWPs | Common UX COMM-4-b |
| Tip 용량은 숫자와 μL 사이를 띄어 씁니다 | 1000 μL Tip, 300 μL Tip | Common UX COMM-4-b |
| 위치는 `Module (Index) > Storage Unit` | {Module 이름} ({번호}) > {Storage Unit 이름} | Run·Inventory 디스크립션, 이름 (번호) 규칙 |
| 상태값을 쓸 때는 어느 단계의 상태인지 함께 씁니다 | "장비 모듈 상태가 Paused일 때" | [status-values.csv](status-values.csv) |

## terms.csv 칸

| 칸 | 내용 |
| --- | --- |
| 분류 | 메뉴 / 장비·검사 / 장비 상태 / 계정·권한 / 기능 / UI 요소 / 팀 내부 |
| 표준어 | 문서에 쓰는 말. 화면에 보이는 말이면 화면 라벨 그대로 |
| 영문·화면 라벨 | 화면 라벨 또는 영문·파일 이름 |
| 정의 | 한국어로 한두 문장 |
| 값 | 정해진 값이 있으면 `/`로 구분 (예: Service / Admin / User) |
| 쓰지 않는 표현 | `;`로 구분 |
| 구분해야 하는 말 | 헷갈리기 쉬운 다른 개념 |
| 근거 | 결정 기록, 출처 |
| 상태 | 확정 / 후보 |
