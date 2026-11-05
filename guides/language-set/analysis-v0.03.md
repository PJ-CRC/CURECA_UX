# 언어셋 v0.03 분석 메모

> 상태: 분석 메모 (2026-11-04). 질문 답변은 7절. 사용자가 준 `source/CURECA_Language Set_v0.03.xlsx`(지금까지 관리하던 언어셋)를 읽고, 우리 규칙(`rules/language-set.md`)과 기준 자료(`glossary/`)에 맞대어 본 결과입니다. 언어셋은 고치지 않았습니다(`rules/language-set.md` 2절). 결정이 필요한 것은 끝의 "질문"에 모았습니다.

## 1. 파일 구성

| 시트 | 보임 | 줄 수 | 내용 |
| --- | --- | --- | --- |
| 표지 | O | - | "CURECA-Front 언어셋 v0.02", 26.07.10 |
| 문서이력 | O | 2 | v0.01 초안(2026.07.10), v0.02 다국어 AI 번역 적용(2026.07.20), 작성자 하승현. v0.03 기록 없음 |
| A.고유명사_용어집 | O | 214 | 서비스 전용 단어. "번역가 필독, 이 시트 번역을 기준으로 목록 시트를 번역". 미번역 154 · 번역 60 |
| B.메뉴_내비게이션 | O | 33 | LNB · GNB 메뉴명, 서브메뉴, 버튼명 |
| C.상태값_코드값 | O | 43 | 개발 enum에 대응하는 상태 문구 |
| D.버튼 | O | 18 | 공통 버튼 (Reset, Search, Export …) |
| 목록 | O | 1,451 | **화면 전체 문구 목록** (메뉴별). 아래 2절 |
| 0-F.얼럿_팝업 · 0-G.컨펌_팝업 | 숨김 | 0 | 양식만 있음 (Main title / Sub title / Button, Alert ID, 번역 상태) |
| Material Setup | 숨김 | 약 420 | Menu · Figma CID · ASIS_English · TOBE_English 작업 시트 |

- **언어:** English, **German**, Portuguese, Spanish, Italian, French (6개). 한국어 칸은 없습니다.
- **A~D 공통 시트 열:** 구분 · 플랫폼(T/L/T/L) · Type(noun/btn/txt) · 번역 여부 · 6개 언어 · 맥락 메모 · 비고. **Language ID가 없습니다.**
- **번역 여부 "미번역":** 고유명사라 어느 언어에서도 영어 그대로 쓰는 말(예: Sample Preparation, PCR Setup, Trolley, Door, 시약 · 구성품 이름, 단위). 다른 언어 칸은 `-`. 일부만 번역하는 말은 비고에 적음(예: `Door (Upper)` → "(Upper)만 번역").

## 2. 목록 시트 (화면 문구 전체)

| 열 | 내용 |
| --- | --- |
| Language ID | `LID-{메뉴}-{세 자리}` (예: `LID-EVT-001`). 같은 영어 문구가 다시 나오면 새 ID를 주지 않고 `ref: LID-EVT-002 (최초: row 10)`로 적음 |
| 구분 · 플랫폼 · Type | 메뉴 · T / L / T/L · txt · btn · title · alt-txt |
| 참조 시트 | A~D 공통 시트에 이미 있는 문구면 "시트명 (행)" (247줄) → 다시 번역하지 않음 |
| 비고 | 문구가 쓰이는 자리 (팝업 타이틀, 필터 레이블, 플레이스 홀더 …) |
| English · English (기존 ver.) · English (수정 ver.) | 영어. 92줄은 기존 → 수정 영어가 있음 (예: `All Module` → `All Modules`, `Check Samples` → `Check samples`, `Modify Date/Time` → `Modified Date/Time`) |
| 5개 언어 | 고유 ID 줄은 모두 채워짐 |
| Menu · Figma CID | CID는 102줄만 (화면 첫 줄에만) |

- **숫자:** 1,451줄 = 고유 ID 718 + 재사용(ref) 733
- **메뉴 약어(14개):** CPW Change Password 3 · DAS Dashboard 12 · EVT Event History 40 · INF Information 9 · INS Instruments 27 · IVT Inventory 40 · LOG Login 27 · MAS Material Setup 179 · QUK Quick Start 6 · RUN Run 39 · SPT Sample Tracking 37 · STA Statistical Analysis 49 · STN Setting(Account · LIS · Policy · Protocol · System) 216 · TMG Test Management 34
- ID는 처음 나온 메뉴의 약어를 따릅니다. 그래서 `LID-STN-009`(Modified by)처럼 Setting ID를 Run 화면에서도 씁니다.

## 3. 우리 기준 자료와 다른 곳

### 상태값 (`glossary/status-values.csv`, 씨젠 상태 정보 261021 기준)

| 대상 | 언어셋 C 시트 | 우리 기준 |
| --- | --- | --- |
| 폐기함/폐액통 상태 | Normal / Warning / Full | Available / Almost Full / Full |
| 재고 상태 | Normal / Insufficient / Empty | Sufficient / Low / Insufficient |
| 장비 상태 | Paused · Pausing 없음 | 통합 상태 Paused, 모듈 상태 Pausing · Paused 있음 |
| 검사 배치 완료 상태 | 없음 | Completed / Failed / Not Tested / Partially Completed / Stopped |
| 저장소 온도 | Room Temp. / Refrigerator | RT / Refrigerator (확인 필요로 남아 있음) |
| 검사 주문 상태 (Pending / In Progress / Completed), Run 실행 가능 상태 (Not Ready / Ready to Run) | 있음 | 없음 |

### Module · Unit (`glossary/module-units.csv`)

| 언어셋 A 시트 | 우리 기준 |
| --- | --- |
| Door (Upper) / Door (Lower) | Door (Left) / (Right) / (Rear)도 있음 |
| Tip Waste Bin (Upper/Lower), Film Waste Bin (Upper/Lower), Sealer Waste Bin | Waste Bin (Upper/Lower), DWP Waste Bin, DWP Film Waste Bin |
| Sealer, 300μL Tip Storage, Sealer Film Storage | 번호 붙음: Sealer (1)/(2), 300μL Tip Storage (1)/(2), Sealer Film Storage (1) |

### 메뉴 이름

- 언어셋 LNB는 `Instrument`, IA · 화면 폴더는 `Instruments`. 우리 용어집의 표준어는 업무 대상 `Instrument`.
- 목록 시트 구분은 `LIS Settings`, B 시트는 `LIS Setting`.

### 우리 용어집의 "쓰지 않는 표현"이 들어 있는 줄

- `LID-IVT-007` "Comsumable" (오타, 표준어 Consumable)
- `LID-IVT-029` "Waste Status" (표준어 Waste Bin/Bottle Status). Inventory와 Instruments 화면에서 씀

## 4. 언어셋 안에서 맞지 않아 보이는 곳

- A 시트 26행 `Sample Aliquot (Upper)`의 이탈리아어가 "(Inferiore)" = 아래 (Superiore가 맞아 보임)
- C 시트 `Ready`의 포르투갈어가 검체 상태는 "Pronto", 장비 구동 상태는 "Disponivel" (같은 영어, 다른 번역)
- 목록 시트 구분 "Evnet History" (오타). B 시트 "Sample Tracking " 끝 공백
- 파일 이름은 v0.03인데 표지 · 문서이력은 v0.02

## 5. 우리 규칙에 반영할 것 (질문 답을 받은 뒤)

- `rules/language-set.md`: 언어 목록, Language ID 체계(`LID-{메뉴}-###`, 재사용 ref), 미번역(고유명사) 규칙, 공통 시트와 목록 시트 관계
- `templates/screen.md` "문구" 표의 언어셋 ID 칸: `LID-…` 그대로 적음
- 우리 용어집과 다른 곳(3절)은 어느 쪽이 기준인지 정한 뒤 언어셋 담당자에게 수정 요청으로 전달

## 6. 질문

1. 제공 언어: 언어셋은 **독일어**가 있고 **한국어**가 없습니다. 우리 규칙은 "영어 · 한국어 · 포르투갈어 · 스페인어 · 이탈리아어 · 프랑스어"입니다. 어느 쪽이 맞나요?
2. 번역의 확정 여부: v0.02 이력이 "다국어 AI 번역 적용"입니다. 지금 5개 언어 번역은 고객사가 확인한 것인가요, AI 초벌인가요? (우리 규칙은 "번역은 고객사를 통해 받음")
3. 영어 "수정 ver." 92줄: 고객사 컨펌을 받은 영어인가요? 화면에는 수정 ver.를 쓰면 되나요?
4. A~D 공통 시트에는 Language ID가 없습니다. 공통 문구(버튼 · 상태값 · 메뉴명 · 고유명사)도 ID를 줄 계획인가요? (숨김 시트 설명에 `LID-D-btn-010` 형식이 보임)
5. 상태값 · Module/Unit 이름이 우리 기준 자료(씨젠 상태 정보 261021 기준)와 다릅니다(3절). 화면은 우리 기준 자료를 따르고, 언어셋 쪽 수정을 요청하면 될까요?
6. 같은 문구를 다른 메뉴에서 쓰면 처음 나온 메뉴의 ID를 재사용합니다. 신규 화면에서 새 문구가 생기면 ID는 누가 언제 붙이나요? (우리 규칙: 새 문구는 번역 요청 목록에 올리고, 확정 후 언어셋 ID를 적음)
7. 숨김 시트(얼럿 · 컨펌 양식, Material Setup ASIS/TOBE)는 앞으로 쓸 계획인가요? 알럿 문구는 우리 알럿 카탈로그(`policy/alert-catalog.csv`)와 어떻게 이어질지도 정해야 합니다.

## 7. 답변 (2026-11-04 사용자)

| # | 답 | 정리 |
| --- | --- | --- |
| 1 | 한국어는 아직 작업 중. 11월 말쯤 추가 예정 | 지금 언어셋은 영 · 독 · 포 · 스 · 이 · 프. 제공 언어는 **독일어와 한국어를 포함한 7개**로 정함(2026-11-04 사용자 결정, `rules/language-set.md` 1절, POL-COM-004) |
| 2 | v0.02 번역은 AI 초벌 | 5개 언어 번역은 확정본이 아님. 확정 여부를 줄마다 표시할 방법이 필요 |
| 3 | 영어는 "수정 ver."를 씀 | 수정 ver.가 있는 92줄은 수정 ver.가 기준 영어 |
| 4 | 공통 시트에는 ID를 주지 않음. 전체 단어는 목록 시트에서 관리하며 ID 체계도 목록 시트(`LID-{메뉴}-###`)가 기준 | 공통 시트(A~D)는 번역 기준점 · 고유명사 표로 쓰고, ID는 목록 시트 하나로 관리 |
| 5 | 언어셋은 6월 2.0 화면 기준이라 2.1 진행 중 생긴 차이임. 2.0 → 2.1에서 바뀌거나 더해진 문구를 다시 분석해 언어셋을 다시 만들어야 함 | 3절의 차이는 오류가 아니라 버전 차이. 2.1 기준으로 다시 맞출 때 우리 기준 자료(용어집 · 상태값)를 따름 |
| 6 | 이제부터 관리 주체는 Claude. 우리 규칙을 정해 저장소에서 관리 | `rules/language-set.md` 2절("Claude는 언어셋을 읽기만 함")을 바꿔야 함 |
| 7 | 알럿 · 컨펌은 번역 전이라 숨겨 둠. 이번 범위에서 일괄 작업 | 알럿 카탈로그(`policy/alert-catalog.csv`, `alert-catalog-ms.csv`)와 함께 한꺼번에 언어셋에 올림 |

- 이 파일(v0.03)은 관리를 저장소로 옮기기 위한 **초안 원본**입니다. 관리 방식과 규칙은 화면설계서 규칙 정리가 끝난 뒤 정합니다(`background/worklist.md` "언어셋 관리 체계").
