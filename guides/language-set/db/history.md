# 언어셋 이력

> 원본입니다. 언어셋을 고칠 때마다 "항목 이력"에 한 줄씩 더하고, 엑셀로 뽑아 버전을 올릴 때 "문서 이력"에 한 줄을 더합니다(`language-set/README.md` "고치는 법").

## 문서 이력

| 버전 | 날짜 | 내용 | 작성자 |
| --- | --- | --- | --- |
| v0.06 | 2026-11-19 | 모듈·유닛 명칭 변경<br>A 시트 미번역 용어 추가: 적재 기물, 시약 구성품 정보<br>문장 속 미번역 용어 영어 유지<br>Material Setup 문구를 화면 설계서·디자인 기준으로 수정<br>법인 검토 표시(A열) 추가<br>원본 반영 (2026-11-19, Claude): A열에 추가 · 변경 표시가 있는 줄의 검증 상태를 `AI 번역`으로 (법인 검토 완료 → AI 번역 68건: 목록 55 · 공통 13). `검토`만 붙은 줄은 법인 번역에서 미번역 용어만 영어로 돌린 것이라 그대로 둠 | 하승현 |
| v0.05 | 2026-11-17 | 2026.11.13 기준 화면 반영 (목록 시트 재작성)<br>추가·변경 항목 다국어 AI 번역 (법인 검토 전) | 하승현 |
| v0.04 | 2026-10-07 | v2.0 개발사 공유에 따른 텍스트 수정 | 하승현 |
| v0.03 | 2026-08-30 | 다국어 번역본 취합 | 하승현 |
| v0.02 | 2026-07-20 | 다국어 AI 번역 적용 | 하승현 |
| v0.01 | 2026-07-10 | 초안 작성 | 하승현 |

## 항목 이력

**키**

| 항목 | 키 |
| --- | --- |
| 목록 항목 | Language ID (예: `LID-EVT-001`) |
| 다른 항목의 ID를 다시 쓴 줄 | `ref: Language ID` |
| 공통 항목 | `LID-COM-…` |

**변경**

| 값 | 언제 | 변경 전 → 변경 후 |
| --- | --- | --- |
| `추가` | 새 글자가 생김 | (비움) → 새 영어 |
| `변경` | 영어 글자가 바뀜 | 이전 영어 → 새 영어 |
| `변경 (ID 변경)` | 화면에서 글자가 바뀌며 그 화면의 Language ID가 다른 ID로 바뀜(바뀐 글자가 이미 다른 곳에 있어 그 ID를 다시 씀, 또는 변경 전 글자를 다른 화면도 써서 새 줄을 만듦). 새 ID의 줄에 남김 | 이전 영어 (이전 ID) → 새 영어 |
| `삭제` | 쓰는 화면이 하나도 남지 않음 | 지운 영어 → (비움) |
| `번역 수정 (언어)` | 법인 검토로 그 언어의 번역이 고쳐짐 (예: `번역 수정 (German)`) | 이전 번역 → 고친 번역 |
| `번역 추가 (언어)` | 비어 있던 언어 칸을 처음 채움 (예: `번역 추가 (Korean)`). 필요해지면 씀 | (비움) → 새 번역 |
| `재사용 추가` | 다른 화면이 같은 글자를 쓰게 됨. 필요해지면 씀 | (비움) → (비움) |

- 남기지 않는 것: Type · 비고처럼 관리 칸만 바뀐 것, 검증 상태가 바뀐 것(검증 상태는 "문서 이력"에 요약 한 줄)
- v0.05 줄은 언어셋 엑셀 v0.05 목록 시트의 A열(추가 · 변경 · 삭제)에서 옮겼습니다. v0.04 이전의 항목별 이력은 엑셀에 없습니다.

| 날짜 | 버전 | 키 | 메뉴 | CID | 변경 | 변경 전 | 변경 후 | 근거 | 누가 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-11-17 | v0.05 | LID-EVT-006 | Event History | TI-EVT-P / LI-EVT-P | 삭제 | Consumable |  | 언어셋 v0.05 목록 시트 14행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-EVT-007 | Event History | TI-EVT-P / LI-EVT-P | 삭제 | Reagent |  | 언어셋 v0.05 목록 시트 15행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-EVT-008 | Event History | TI-EVT-P / LI-EVT-P | 삭제 | Waste Bin/Bottle |  | 언어셋 v0.05 목록 시트 16행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-IVT-001 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Inventory | 언어셋 v0.05 목록 시트 17행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-SPT-022 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Sample | 언어셋 v0.05 목록 시트 18행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-EVT-041 | Event History | TI-EVT-01-P / LI-EVT-01-P / TI-EVT-02-P / LI-EVT-02-P | 추가 |  | Event Code | 언어셋 v0.05 목록 시트 21행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-EVT-042 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-01-P / LI-EVT-01-P | 추가 |  | Open | 언어셋 v0.05 목록 시트 31행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-EVT-043 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-01-P / LI-EVT-01-P | 추가 |  | Closed | 언어셋 v0.05 목록 시트 32행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-EVT-044 | Event History | TI-EVT-P | 추가 |  | {N} of {M} Items | 언어셋 v0.05 목록 시트 35행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-EVT-021 | Event History | TI-EVT-P / LI-EVT-P | 삭제 | OPEN |  | 언어셋 v0.05 목록 시트 36행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-EVT-024 | Event History | LI-EVT-P | 변경 | Mark as Closed | Mark all as Closed | 언어셋 v0.05 목록 시트 40행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-021 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Select a Date | 언어셋 v0.05 목록 시트 41행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STA-015 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Sun | 언어셋 v0.05 목록 시트 42행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STA-009 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Mon | 언어셋 v0.05 목록 시트 43행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STA-010 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Tue | 언어셋 v0.05 목록 시트 44행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STA-011 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Wed | 언어셋 v0.05 목록 시트 45행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STA-012 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Thu | 언어셋 v0.05 목록 시트 46행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STA-013 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Fri | 언어셋 v0.05 목록 시트 47행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STA-014 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Sat | 언어셋 v0.05 목록 시트 48행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-EVT-018 | Event History | TI-EVT-P / LI-EVT-P | 삭제 | All Modules |  | 언어셋 v0.05 목록 시트 50행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-EVT-019 | Event History | TI-EVT-P / LI-EVT-P | 삭제 | All Status |  | 언어셋 v0.05 목록 시트 51행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-EVT-020 | Event History | TI-EVT-P / LI-EVT-P | 삭제 | All Levels |  | 언어셋 v0.05 목록 시트 52행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-EVT-045 | Event History | TI-EVT-01-P / LI-EVT-01-P / TI-EVT-02-P / LI-EVT-02-P | 추가 |  | Effect | 언어셋 v0.05 목록 시트 58행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-EVT-035 | Event History | LI-EVT-01-P | 변경 | 0/n Characters | {n}/{max} Characters | 언어셋 v0.05 목록 시트 64행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-018 | Event History | TI-EVT-02-P / LI-EVT-02-P | 추가 |  | Event | 언어셋 v0.05 목록 시트 68행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-EVT-046 | Event History | TI-EVT-02-P / LI-EVT-02-P | 추가 |  | Close All | 언어셋 v0.05 목록 시트 71행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-LOG-028 | Login | LI-LOG | 추가 |  | Shut Down | 언어셋 v0.05 목록 시트 82행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-021 | Login | TI-LOG-01-P / LI-LOG-01-P | 추가 |  | Cancel | 언어셋 v0.05 목록 시트 96행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-011 | Login | TI-LOG-02-P / LI-LOG-02-P | 추가 |  | OK | 언어셋 v0.05 목록 시트 101행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-040 | Run | LI-RUN-P | 추가 |  | No Tray Detected On Trolley 1F (Consumable Trolley) | 언어셋 v0.05 목록 시트 106행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-041 | Run | LI-RUN-P | 추가 |  | Please place an empty tray on trolley 1F and try again. | 언어셋 v0.05 목록 시트 107행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-042 | Run | LI-RUN-01 / LI-RUN-02-01 / LI-RUN-02 / LI-RUN-03 | 추가 |  | Check waste bin/bottle | 언어셋 v0.05 목록 시트 122행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-026 | Run | LI-RUN-02-01 | 변경 | Please load any additional consumables resulting from the protocol change into the trolley or STAT. | Please load any additional consumables resulting from the protocol change into the trolley. | 언어셋 v0.05 목록 시트 139행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-028 | Run | LI-RUN-02 / LI-RUN-03 | 삭제 | Stock Status |  | 언어셋 v0.05 목록 시트 147행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-017 | Run | LI-RUN-02 / LI-RUN-03 | 추가 |  | Status | 언어셋 v0.05 목록 시트 148행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-028 | Run | LI-RUN-02 / LI-RUN-03 | 추가 |  | Insufficient | 언어셋 v0.05 목록 시트 149행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-029 | Run | LI-RUN-02 / LI-RUN-03 | 추가 |  | Low | 언어셋 v0.05 목록 시트 150행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-043 | Run | LI-RUN-02 / LI-RUN-03 | 추가 |  | Sufficient | 언어셋 v0.05 목록 시트 151행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-029 | Run | LI-RUN-02 / LI-RUN-03 | 삭제 | All Stock Stauts |  | 언어셋 v0.05 목록 시트 152행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-044 | Run | LI-RUN-02 | 추가 |  | Consumables | 언어셋 v0.05 목록 시트 153행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-045 | Run | LI-RUN-02 | 추가 |  | Plates | 언어셋 v0.05 목록 시트 154행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-046 | Run | LI-RUN-02 | 추가 |  | Tips | 언어셋 v0.05 목록 시트 155행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-047 | Run | LI-RUN-02 | 추가 |  | Tubes | 언어셋 v0.05 목록 시트 156행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-006 | Run | LI-RUN-02 | 삭제 | Consumable |  | 언어셋 v0.05 목록 시트 157행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-012 | Run | LI-RUN-02 / LI-RUN-03 | 삭제 | Module |  | 언어셋 v0.05 목록 시트 158행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-050 | Run | LI-RUN-02 / LI-RUN-03 | 추가 |  | Location | 언어셋 v0.05 목록 시트 159행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-IVT-022 | Run | LI-RUN-02 / LI-RUN-03 | 추가 |  | Capacity | 언어셋 v0.05 목록 시트 160행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-032 | Run | LI-RUN-02 / LI-RUN-03 | 변경 | This shows only the additional amount needed based on current inventory | Displays the additional quantity required based on current inventory. | 언어셋 v0.05 목록 시트 163행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-052 | Run | LI-RUN-02 / LI-RUN-03 | 추가 |  | Shown only for fixed-capacity storage. | 언어셋 v0.05 목록 시트 164행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-053 | Run | LI-RUN-02 / LI-RUN-03 | 추가 |  | Status is determined by run availability. | 언어셋 v0.05 목록 시트 165행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-054 | Run | LI-RUN-02 / LI-RUN-03 | 추가 |  | Sufficient (enough stock) | 언어셋 v0.05 목록 시트 166행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-055 | Run | LI-RUN-02 / LI-RUN-03 | 추가 |  | Low (partial shortage) | 언어셋 v0.05 목록 시트 167행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-056 | Run | LI-RUN-02 / LI-RUN-03 | 추가 |  | Insufficient (no stock) | 언어셋 v0.05 목록 시트 168행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-SPT-015 | Run | LI-RUN-02 / LI-RUN-03 | 추가 |  | More | 언어셋 v0.05 목록 시트 170행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-049 | Run | LI-RUN-03 | 추가 |  | Reagents type | 언어셋 v0.05 목록 시트 171행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-048 | Run | LI-RUN-03 | 추가 |  | Pretreatment Reagents | 언어셋 v0.05 목록 시트 172행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-034 | Run | LI-RUN-03 | 삭제 | Expiration date Status |  | 언어셋 v0.05 목록 시트 173행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-035 | Run | LI-RUN-03 | 삭제 | All Expiration date Status |  | 언어셋 v0.05 목록 시트 174행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-036 | Run | LI-RUN-03 | 삭제 | Kit |  | 언어셋 v0.05 목록 시트 175행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-062 | Run | LI-RUN-03 | 추가 |  | Reagent | 언어셋 v0.05 목록 시트 176행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-013 | Run | LI-RUN-03 | 삭제 | Unit |  | 언어셋 v0.05 목록 시트 177행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-038 | Run | LI-RUN-03 | 삭제 | Ready to Run |  | 언어셋 v0.05 목록 시트 179행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-058 | Run | LI-RUN-03 | 추가 |  | Expired reagents are discarded or returned unused, depending on the instrument. | 언어셋 v0.05 목록 시트 180행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-030 | Run | LI-RUN-04 | 추가 |  | Full | 언어셋 v0.05 목록 시트 181행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-031 | Run | LI-RUN-04 | 추가 |  | Almost Full | 언어셋 v0.05 목록 시트 182행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-059 | Run | LI-RUN-04 | 추가 |  | Available | 언어셋 v0.05 목록 시트 183행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-013 | Run | LI-RUN-04 | 추가 |  | Unit | 언어셋 v0.05 목록 시트 184행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-RUN-060 | Run | LI-RUN-04 | 추가 |  | Fill Level(%) | 언어셋 v0.05 목록 시트 185행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-IVT-031 | Run | LI-RUN-04 | 추가 |  | Last Emptied Date/Time | 언어셋 v0.05 목록 시트 186행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-028 | Quick Start | LI-QUK | 추가 |  | Insufficient | 언어셋 v0.05 목록 시트 198행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-029 | Quick Start | LI-QUK | 추가 |  | Low | 언어셋 v0.05 목록 시트 199행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-043 | Quick Start | LI-QUK | 추가 |  | Sufficient | 언어셋 v0.05 목록 시트 200행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-058 | Quick Start | LI-QUK | 추가 |  | Expired reagents are discarded or returned unused, depending on the instrument. | 언어셋 v0.05 목록 시트 201행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-QUK-005 | Quick Start | LI-QUK | 삭제 | Check reagent expiration date |  | 언어셋 v0.05 목록 시트 202행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-QUK-006 | Quick Start | LI-QUK | 삭제 | Please replace the expired reagent and try again. Check the reagents that need to be replaced in the Run Preparation or Inventory menu. |  | 언어셋 v0.05 목록 시트 203행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-042 | Quick Start | LI-QUK | 추가 |  | Check waste bin/bottle | 언어셋 v0.05 목록 시트 204행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-030 | Quick Start | LI-QUK | 추가 |  | Full | 언어셋 v0.05 목록 시트 205행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-031 | Quick Start | LI-QUK | 추가 |  | Almost Full | 언어셋 v0.05 목록 시트 206행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-059 | Quick Start | LI-QUK | 추가 |  | Available | 언어셋 v0.05 목록 시트 207행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-033 | Test Management | TI-TMG-01 / LI-TMG-01 | 추가 |  | Refresh | 언어셋 v0.05 목록 시트 211행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-TMG-008 | Test Management | TI-TMG-01 / LI-TMG-01 | 삭제 | All Products |  | 언어셋 v0.05 목록 시트 223행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-TMG-009 | Test Management | TI-TMG-01 / LI-TMG-01 | 삭제 | All Sample Types |  | 언어셋 v0.05 목록 시트 224행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-019 | Test Management | TI-TMG-01 / LI-TMG-01 | 삭제 | All Status |  | 언어셋 v0.05 목록 시트 225행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-044 | Test Management | TI-TMG-01 | 추가 |  | {N} of {M} Items | 언어셋 v0.05 목록 시트 227행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-023 | Test Management | TI-TMG-01 / LI-TMG-01 | 추가 |  | Export | 언어셋 v0.05 목록 시트 235행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-TMG-035 | Test Management | TI-TMG-01 / LI-TMG-01 | 추가 |  | Import | 언어셋 v0.05 목록 시트 236행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-TMG-040 | Test Management | TI-TMG-01 | 추가 |  | Resend | 언어셋 v0.05 목록 시트 237행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-TMG-041 | Test Management | TI-TMG-01 | 추가 |  | Send Results (LIS) | 언어셋 v0.05 목록 시트 238행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-TMG-042 | Test Management | TI-TMG-01 | 추가 |  | Success | 언어셋 v0.05 목록 시트 239행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-TMG-036 | Test Management | TI-TMG-01 / LI-TMG-01 | 추가 |  | Ordered | 언어셋 v0.05 목록 시트 240행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-TMG-037 | Test Management | TI-TMG-01 / LI-TMG-01 | 추가 |  | Ready | 언어셋 v0.05 목록 시트 241행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-TMG-038 | Test Management | TI-TMG-01 / LI-TMG-01 / TI-TMG-02 / LI-TMG-02 | 추가 |  | Running | 언어셋 v0.05 목록 시트 242행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-TMG-039 | Test Management | TI-TMG-01 / LI-TMG-01 / TI-TMG-02 / LI-TMG-02 | 추가 |  | Completed | 언어셋 v0.05 목록 시트 243행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-018 | Test Management | TI-TMG-01 / LI-TMG-01 / TI-TMG-02 / LI-TMG-02 | 추가 |  | Failed | 언어셋 v0.05 목록 시트 244행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-019 | Test Management | TI-TMG-01 / LI-TMG-01 / TI-TMG-02 / LI-TMG-02 | 추가 |  | Not Tested | 언어셋 v0.05 목록 시트 245행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-TMG-029 | Test Management | TI-TMG-02 / LI-TMG-02 | 삭제 | Processed/Total |  | 언어셋 v0.05 목록 시트 262행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-017 | Test Management | TI-TMG-02 / LI-TMG-02 | 추가 |  | Processed | 언어셋 v0.05 목록 시트 263행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-SPT-023 | Test Management | TI-TMG-02 / LI-TMG-02 | 추가 |  | Total | 언어셋 v0.05 목록 시트 264행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-022 | Test Management | TI-TMG-02 / LI-TMG-02 | 추가 |  | Ready | 언어셋 v0.05 목록 시트 270행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-020 | Test Management | TI-TMG-02 / LI-TMG-02 | 추가 |  | Not Initialized | 언어셋 v0.05 목록 시트 271행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-037 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 추가 |  | Start Date | 언어셋 v0.05 목록 시트 281행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-038 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 추가 |  | End Date | 언어셋 v0.05 목록 시트 282행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-037 | Sample Tracking | TI-SPT-01 / LI-SPT-01 | 추가 |  | Ready | 언어셋 v0.05 목록 시트 286행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-019 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 추가 |  | Not Tested | 언어셋 v0.05 목록 시트 287행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-038 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 추가 |  | Running | 언어셋 v0.05 목록 시트 288행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-039 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 추가 |  | Completed | 언어셋 v0.05 목록 시트 289행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-018 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 추가 |  | Failed | 언어셋 v0.05 목록 시트 290행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-008 | Sample Tracking | TI-SPT-01 / LI-SPT-01 | 삭제 | All Products |  | 언어셋 v0.05 목록 시트 291행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-009 | Sample Tracking | TI-SPT-01 / LI-SPT-01 | 삭제 | All Sample Types |  | 언어셋 v0.05 목록 시트 292행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-019 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 삭제 | All Status |  | 언어셋 v0.05 목록 시트 293행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-044 | Sample Tracking | TI-SPT-01 / TI-SPT-02 / TI-SPT-03 | 추가 |  | {N} of {M} Items | 언어셋 v0.05 목록 시트 295행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-006 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 삭제 | Sample Info |  | 언어셋 v0.05 목록 시트 316행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-197 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 추가 |  | General | 언어셋 v0.05 목록 시트 317행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-004 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 삭제 | Type |  | 언어셋 v0.05 목록 시트 319행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-039 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 추가 |  | Location Type | 언어셋 v0.05 목록 시트 323행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-009 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 변경 | Trolley ID | Trolley Name | 언어셋 v0.05 목록 시트 325행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-040 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 추가 |  | STAT Slot No. | 언어셋 v0.05 목록 시트 327행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-041 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 추가 |  | Socket ID | 언어셋 v0.05 목록 시트 328행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-012 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 삭제 | Sample progress |  | 언어셋 v0.05 목록 시트 330행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-013 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 변경 | 96-DWP Info | 96-DWP Plate | 언어셋 v0.05 목록 시트 334행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-014 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 삭제 | PCR Plate Info |  | 언어셋 v0.05 목록 시트 335행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-046 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 / TI-SPT-03-01 / LI-SPT-03-01 | 추가 |  | Kit | 언어셋 v0.05 목록 시트 339행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-019 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 삭제 | Sample testing was not conducted. |  | 언어셋 v0.05 목록 시트 341행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-042 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 / TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Protocol Info | 언어셋 v0.05 목록 시트 342행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-007 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Protocol Name | 언어셋 v0.05 목록 시트 345행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-009 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Modified by | 언어셋 v0.05 목록 시트 346행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-010 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Modified Date/Time | 언어셋 v0.05 목록 시트 347행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-029 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Time (sec) | 언어셋 v0.05 목록 시트 348행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-032 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Transfer Supernatant | 언어셋 v0.05 목록 시트 349행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-033 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Discard Supernatant | 언어셋 v0.05 목록 시트 350행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-034 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Buffer Dispense & Resuspension | 언어셋 v0.05 목록 시트 351행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-036 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Heating Temp. (ºC) | 언어셋 v0.05 목록 시트 352행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-037 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Incubation Time (sec) | 언어셋 v0.05 목록 시트 353행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-039 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | PK treatment | 언어셋 v0.05 목록 시트 354행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-043 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Standby state setting conditions | 언어셋 v0.05 목록 시트 355행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-046 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Name | 언어셋 v0.05 목록 시트 356행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-053 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Volume(μL) | 언어셋 v0.05 목록 시트 357행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-054 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Keep Temp.(˚C) | 언어셋 v0.05 목록 시트 358행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-055 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Action | 언어셋 v0.05 목록 시트 359행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-056 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Not use | 언어셋 v0.05 목록 시트 360행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-058 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | For. U/D | 언어셋 v0.05 목록 시트 361행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-061 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | N/A | 언어셋 v0.05 목록 시트 362행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-062 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Operation conditions | 언어셋 v0.05 목록 시트 363행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-063 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Step | 언어셋 v0.05 목록 시트 364행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-064 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Temp.(˚C) | 언어셋 v0.05 목록 시트 365행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-065 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Mixing Time(min) | 언어셋 v0.05 목록 시트 366행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-066 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Mixing Speed(rpm) | 언어셋 v0.05 목록 시트 367행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-067 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Collect Time(sec) | 언어셋 v0.05 목록 시트 368행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-068 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Vapor Time(min) | 언어셋 v0.05 목록 시트 369행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-069 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Pause | 언어셋 v0.05 목록 시트 370행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-070 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | On | 언어셋 v0.05 목록 시트 371행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-071 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Off | 언어셋 v0.05 목록 시트 372행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-039 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 추가 |  | Close | 언어셋 v0.05 목록 시트 373행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-007 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 | 삭제 | Reagent |  | 언어셋 v0.05 목록 시트 381행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-043 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 | 추가 |  | Reagents | 언어셋 v0.05 목록 시트 382행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-029 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 변경 | Plate Selected Info | Selected Plate Info | 언어셋 v0.05 목록 시트 383행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STA-020 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 추가 |  | Select All | 언어셋 v0.05 목록 시트 385행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-044 | Sample Tracking | TI-SPT-03-01 / LI-SPT-03-01 | 추가 |  | Negative control | 언어셋 v0.05 목록 시트 390행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-SPT-045 | Sample Tracking | TI-SPT-03-01 / LI-SPT-03-01 | 추가 |  | Positive control | 언어셋 v0.05 목록 시트 391행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-044 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-02-T / LI-IVT-02-T / TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T / TI-IVT-05-T / LI-IVT-05-T / TI-IVT-06-T / LI-IVT-06-T | 추가 |  | Consumables | 언어셋 v0.05 목록 시트 395행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-SPT-043 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-02-T / LI-IVT-02-T / TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T / TI-IVT-05-T / LI-IVT-05-T / TI-IVT-06-T / LI-IVT-06-T | 추가 |  | Reagents | 언어셋 v0.05 목록 시트 396행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-053 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-02-T / LI-IVT-02-T / TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T / TI-IVT-05-T / LI-IVT-05-T / TI-IVT-06-T / LI-IVT-06-T | 추가 |  | Waste Bin/Bottle | 언어셋 v0.05 목록 시트 397행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-027 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 추가 |  | Inventory Status | 언어셋 v0.05 목록 시트 399행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-005 | Inventory | TI-IVT-01-T | 삭제 | Requirements for Run Completion |  | 언어셋 v0.05 목록 시트 400행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-006 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 변경 | Shows items required to complete run, listed by priority based on replenishment needs | Shows required items by replenishment priority. | 언어셋 v0.05 목록 시트 401행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-041 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 추가 |  | Visible only when the system is running or the Inbound Trolley is docked. | 언어셋 v0.05 목록 시트 402행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-042 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 추가 |  | Shows the quantity of consumables required for the Run. | 언어셋 v0.05 목록 시트 403행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-028 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 추가 |  | Insufficient | 언어셋 v0.05 목록 시트 404행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-029 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 추가 |  | Low | 언어셋 v0.05 목록 시트 405행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-007 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 삭제 | Comsumable |  | 언어셋 v0.05 목록 시트 406행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-009 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 추가 |  | Shown only if system running or Inbound Trolley docked | 언어셋 v0.05 목록 시트 410행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-008 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 삭제 | Displayed during run only |  | 언어셋 v0.05 목록 시트 411행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-043 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 추가 |  | No.{N} | 언어셋 v0.05 목록 시트 413행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-027 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 추가 |  | Previous | 언어셋 v0.05 목록 시트 414행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-025 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 추가 |  | Next | 언어셋 v0.05 목록 시트 415행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-011 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 변경 | Shows waste bin/bottle requiring emptying, prioritized by Full and Warning status | Shows waste bin/bottle requiring emptying, prioritized by Full and Almost Full status | 언어셋 v0.05 목록 시트 417행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-030 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-05-T / LI-IVT-05-T | 추가 |  | Full | 언어셋 v0.05 목록 시트 418행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-031 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-05-T / LI-IVT-05-T | 추가 |  | Almost Full | 언어셋 v0.05 목록 시트 419행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-060 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-05-T / LI-IVT-05-T | 추가 |  | Fill Level(%) | 언어셋 v0.05 목록 시트 420행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-027 | Inventory | TI-IVT-05-T / LI-IVT-05-T | 삭제 | Fill Level |  | 언어셋 v0.05 목록 시트 421행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-044 | Inventory | TI-IVT-02-T / LI-IVT-02-T | 추가 |  | Samples (Inbound Trolley) | 언어셋 v0.05 목록 시트 426행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-045 | Inventory | TI-IVT-02-T / LI-IVT-02-T | 추가 |  | Samples (Test In Progress) | 언어셋 v0.05 목록 시트 427행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-046 | Inventory | TI-IVT-02-T / LI-IVT-02-T | 추가 |  | Samples (Outbound Trolley) | 언어셋 v0.05 목록 시트 428행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-016 | Inventory | TI-IVT-02-T / LI-IVT-02-T | 삭제 | Failed to load data. Please try again. |  | 언어셋 v0.05 목록 시트 431행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-017 | Inventory | TI-IVT-02-T / LI-IVT-02-T | 삭제 | Module is not connected. Please check the connection. |  | 언어셋 v0.05 목록 시트 432행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-017 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T / TI-IVT-05-T / LI-IVT-05-T | 변경 | Stock Status | Status | 언어셋 v0.05 목록 시트 433행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-043 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 추가 |  | Sufficient | 언어셋 v0.05 목록 시트 434행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-045 | Inventory | TI-IVT-03-T / LI-IVT-03-T | 추가 |  | Plates | 언어셋 v0.05 목록 시트 435행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-046 | Inventory | TI-IVT-03-T / LI-IVT-03-T | 추가 |  | Tips | 언어셋 v0.05 목록 시트 436행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-047 | Inventory | TI-IVT-03-T / LI-IVT-03-T | 추가 |  | Tubes | 언어셋 v0.05 목록 시트 437행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-SPT-015 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 추가 |  | More | 언어셋 v0.05 목록 시트 438행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-050 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-03-T-P / LI-IVT-03-T-P / TI-IVT-04-T / LI-IVT-04-T / TI-IVT-04-T-P / LI-IVT-04-T-P | 추가 |  | Location | 언어셋 v0.05 목록 시트 439행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-052 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 추가 |  | Shown only for fixed-capacity storage. | 언어셋 v0.05 목록 시트 441행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-023 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 삭제 | Displayed only for fixed-capacity storage; shows '-' when not applicable |  | 언어셋 v0.05 목록 시트 442행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-032 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 변경 | This shows only the additional amount needed based on current inventory | Displays the additional quantity required based on current inventory. | 언어셋 v0.05 목록 시트 443행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-053 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 추가 |  | Status is determined by run availability. | 언어셋 v0.05 목록 시트 444행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-054 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 추가 |  | Sufficient (enough stock) | 언어셋 v0.05 목록 시트 445행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-055 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 추가 |  | Low (partial shortage) | 언어셋 v0.05 목록 시트 446행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-056 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 추가 |  | Insufficient (no stock) | 언어셋 v0.05 목록 시트 447행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-021 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 삭제 | Stock status is based on run completion availability: Normal (sufficient), Insufficient (partial shortage), Empty (no stock) |  | 언어셋 v0.05 목록 시트 448행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-018 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T / TI-IVT-05-T / LI-IVT-05-T | 삭제 | All Modules |  | 언어셋 v0.05 목록 시트 449행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-018 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T / TI-IVT-05-T / LI-IVT-05-T | 삭제 | All Units |  | 언어셋 v0.05 목록 시트 450행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-019 | Inventory | TI-IVT-03-T / LI-IVT-03-T | 삭제 | All Consumables |  | 언어셋 v0.05 목록 시트 451행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-020 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 삭제 | All Stock Status |  | 언어셋 v0.05 목록 시트 452행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-044 | Inventory | TI-IVT-03-T-P / LI-IVT-03-T-P / TI-IVT-04-T-P / LI-IVT-04-T-P | 추가 |  | {N} of {M} Items | 언어셋 v0.05 목록 시트 453행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-047 | Inventory | TI-IVT-03-T-P / LI-IVT-03-T-P / TI-IVT-04-T-P / LI-IVT-04-T-P | 추가 |  | Location in storage | 언어셋 v0.05 목록 시트 455행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-048 | Inventory | TI-IVT-03-T-P / LI-IVT-03-T-P / TI-IVT-04-T-P / LI-IVT-04-T-P | 추가 |  | Inbound Date | 언어셋 v0.05 목록 시트 456행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-039 | Inventory | TI-IVT-03-T-P / LI-IVT-03-T-P / TI-IVT-04-T-P / LI-IVT-04-T-P | 추가 |  | Close | 언어셋 v0.05 목록 시트 457행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-049 | Inventory | TI-IVT-04-T / LI-IVT-04-T | 추가 |  | Reagents type | 언어셋 v0.05 목록 시트 458행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-048 | Inventory | TI-IVT-04-T / LI-IVT-04-T | 추가 |  | Pretreatment Reagents | 언어셋 v0.05 목록 시트 459행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-058 | Inventory | TI-IVT-04-T / LI-IVT-04-T | 추가 |  | Expired reagents are discarded or returned unused, depending on the instrument. | 언어셋 v0.05 목록 시트 460행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-024 | Inventory | TI-IVT-04-T / LI-IVT-04-T | 삭제 | All Kits |  | 언어셋 v0.05 목록 시트 461행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-025 | Inventory | TI-IVT-04-T / LI-IVT-04-T | 삭제 | All Reagents |  | 언어셋 v0.05 목록 시트 462행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-036 | Inventory | TI-IVT-04-T / LI-IVT-04-T | 삭제 | Kit |  | 언어셋 v0.05 목록 시트 463행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-026 | Inventory | TI-IVT-04-T / LI-IVT-04-T | 삭제 | Shows the earliest expiration date among the reagents. Expiration dates may differ by reagent |  | 언어셋 v0.05 목록 시트 464행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-049 | Inventory | TI-IVT-04-T-P / LI-IVT-04-T-P | 추가 |  | Expired | 언어셋 v0.05 목록 시트 465행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-050 | Inventory | TI-IVT-04-T-P / LI-IVT-04-T-P | 추가 |  | Remaining Rxns | 언어셋 v0.05 목록 시트 467행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-051 | Inventory | TI-IVT-04-T-P / LI-IVT-04-T-P | 추가 |  | Used Counts | 언어셋 v0.05 목록 시트 468행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-059 | Inventory | TI-IVT-05-T / LI-IVT-05-T | 추가 |  | Available | 언어셋 v0.05 목록 시트 471행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-028 | Inventory | TI-IVT-05-T / LI-IVT-05-T | 삭제 | Fill level is estimated based on usage count and maximum capacity |  | 언어셋 v0.05 목록 시트 473행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-029 | Inventory | TI-IVT-05-T / LI-IVT-05-T | 삭제 | Waste Status |  | 언어셋 v0.05 목록 시트 474행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-030 | Inventory | TI-IVT-05-T / LI-IVT-05-T | 삭제 | Status is determined by fill level: Normal (0-70%), Warning (71–99%), Full (100%) |  | 언어셋 v0.05 목록 시트 475행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-019 | Inventory | TI-IVT-05-T / LI-IVT-05-T | 삭제 | All Status |  | 언어셋 v0.05 목록 시트 476행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-032 | Inventory | LI-IVT-05-T | 삭제 | Mark as Emptied |  | 언어셋 v0.05 목록 시트 477행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-033 | Inventory | LI-IVT-05-T | 삭제 | After emptying, press to reset the fill level and resume tracking |  | 언어셋 v0.05 목록 시트 478행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-034 | Inventory | LI-IVT-05-T | 삭제 | Confirm Empty |  | 언어셋 v0.05 목록 시트 479행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-052 | Inventory | TI-IVT-06-T / LI-IVT-06-T | 추가 |  | Consumable | 언어셋 v0.05 목록 시트 481행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-023 | Inventory | TI-IVT-06-T / LI-IVT-06-T | 추가 |  | Export | 언어셋 v0.05 목록 시트 487행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-CPW-005 | Profile | TI-CPW-01-P / LI-CPW-01-P / TI-CPW-02-P / LI-CPW-02-P | 추가 |  | Profile | 언어셋 v0.05 목록 시트 492행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-197 | Profile | TI-CPW-01-P / LI-CPW-01-P / TI-CPW-02-P / LI-CPW-02-P | 추가 |  | General | 언어셋 v0.05 목록 시트 493행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-LOG-003 | Profile | TI-CPW-01-P / LI-CPW-01-P | 추가 |  | ID | 언어셋 v0.05 목록 시트 495행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-076 | Profile | TI-CPW-01-P / LI-CPW-01-P | 추가 |  | Admin | 언어셋 v0.05 목록 시트 496행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-075 | Profile | TI-CPW-01-P / LI-CPW-01-P | 추가 |  | User | 언어셋 v0.05 목록 시트 497행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-046 | Profile | TI-CPW-01-P / LI-CPW-01-P | 추가 |  | Name | 언어셋 v0.05 목록 시트 498행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-CPW-006 | Profile | TI-CPW-01-P / LI-CPW-01-P | 추가 |  | Email | 언어셋 v0.05 목록 시트 499행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-170 | Profile | TI-CPW-01-P | 추가 |  | Language | 언어셋 v0.05 목록 시트 500행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-CPW-007 | Profile | TI-CPW-01-P | 추가 |  | Event notifications | 언어셋 v0.05 목록 시트 501행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-CPW-008 | Profile | TI-CPW-01-P | 추가 |  | Receive alerts errors and warnings. | 언어셋 v0.05 목록 시트 502행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-CPW-009 | Profile | TI-CPW-01-P/Case / LI-CPW-01-P/Case | 추가 |  | Please enter a valid email address. | 언어셋 v0.05 목록 시트 503행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-021 | Profile | TI-CPW-01-P / LI-CPW-01-P / TI-CPW-02-P / LI-CPW-02-P | 추가 |  | Cancel | 언어셋 v0.05 목록 시트 504행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-022 | Profile | TI-CPW-01-P / LI-CPW-01-P / TI-CPW-02-P / LI-CPW-02-P | 추가 |  | Save | 언어셋 v0.05 목록 시트 505행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-279 | Account Setting | TI-STN-05 | 추가 |  | User ID, User Name, Email | 언어셋 v0.05 목록 시트 520행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-077 | Account Setting | TI-STN-05 | 삭제 | All User Types |  | 언어셋 v0.05 목록 시트 525행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-016 | Account Setting | TI-STN-05 | 추가 |  | Search | 언어셋 v0.05 목록 시트 526행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-044 | Account Setting | TI-STN-05 | 추가 |  | {N} of {M} Items | 언어셋 v0.05 목록 시트 527행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-006 | Account Setting | TI-STN-05 | 삭제 | Items |  | 언어셋 v0.05 목록 시트 528행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-019 | Account Setting | TI-STN-05 | 추가 |  | Delete | 언어셋 v0.05 목록 시트 529행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-280 | Account Setting | TI-STN-05 | 추가 |  | User Name | 언어셋 v0.05 목록 시트 532행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-CPW-006 | Account Setting | TI-STN-05 / TI-STN-05-01-P / TI-STN-05-03-P | 추가 |  | Email | 언어셋 v0.05 목록 시트 533행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-088 | Account Setting | TI-STN-05-01-P / TI-STN-05-01-P/Case | 변경 | Check Availability | Check ID | 언어셋 v0.05 목록 시트 542행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-046 | Account Setting | TI-STN-05-01-P / TI-STN-05-03-P | 추가 |  | Name | 언어셋 v0.05 목록 시트 560행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-281 | Account Setting | TI-STN-05-01-P | 추가 |  | Please enter full name | 언어셋 v0.05 목록 시트 561행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-CPW-009 | Account Setting | TI-STN-05-01-P / TI-STN-05-01-P/Case / TI-STN-05-03-P/Case | 추가 |  | Please enter a valid email address. | 언어셋 v0.05 목록 시트 562행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-282 | Account Setting | TI-STN-05-01-P / TI-STN-05-01-P/Case | 추가 |  | After creating an account, a temporary password will be automatically sent to email. | 언어셋 v0.05 목록 시트 563행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-283 | Account Setting | TI-STN-05-01-P/Case / TI-STN-05-03-P/Case | 추가 |  | SMTP setup required to auto-send temporary passwords to this email. | 언어셋 v0.05 목록 시트 564행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-021 | Account Setting | TI-STN-05-01-P / TI-STN-05-03-P | 추가 |  | Cancel | 언어셋 v0.05 목록 시트 565행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-284 | Account Setting | TI-STN-05-02-P / TI-STN-05-02-P/Case | 추가 |  | Account Created Successfully | 언어셋 v0.05 목록 시트 567행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-285 | Account Setting | TI-STN-05-02-P / TI-STN-05-02-P/Case | 추가 |  | The user account has been successfully created, and the temporary password has been sent to the registered email address. | 언어셋 v0.05 목록 시트 568행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-286 | Account Setting | TI-STN-05-02-P/Case | 추가 |  | Account Created | 언어셋 v0.05 목록 시트 569행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-287 | Account Setting | TI-STN-05-02-P/Case | 추가 |  | The new account has been successfully created. Please copy the generated password and deliver it to the user manually. | 언어셋 v0.05 목록 시트 570행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-288 | Account Setting | TI-STN-05-02-P/Case / TI-STN-05-03-P/Case | 추가 |  | Email Delivery Failed | 언어셋 v0.05 목록 시트 571행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-289 | Account Setting | TI-STN-05-02-P/Case | 추가 |  | The user account has been successfully created, but the temporary password email could not be sent. Please copy the password below and deliver it to the user manually. | 언어셋 v0.05 목록 시트 572행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-290 | Account Setting | TI-STN-05-02-P/Case / TI-STN-05-03-P/Case | 추가 |  | Once this window is closed, the temporary password cannot be displayed again. | 언어셋 v0.05 목록 시트 575행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-291 | Account Setting | TI-STN-05-02-P | 추가 |  | CURECA Temporary Password Notification | 언어셋 v0.05 목록 시트 577행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-292 | Account Setting | TI-STN-05-02-P | 추가 |  | Hi, | 언어셋 v0.05 목록 시트 578행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-293 | Account Setting | TI-STN-05-02-P | 추가 |  | A temporary password has been generated for your account. | 언어셋 v0.05 목록 시트 579행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-294 | Account Setting | TI-STN-05-02-P | 추가 |  | Once you log in with your temporary password, please update your password for security purposes. | 언어셋 v0.05 목록 시트 580행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-295 | Account Setting | TI-STN-05-02-P | 추가 |  | temporary password guide | 언어셋 v0.05 목록 시트 581행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-LOG-009 | Account Setting | TI-STN-05-02-P | 추가 |  | © Seegene Inc. All rights reserved. | 언어셋 v0.05 목록 시트 582행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-296 | Account Setting | TI-STN-05-03-P / TI-STN-05-03-P/Case | 추가 |  | Passwords are encrypted for security. | 언어셋 v0.05 목록 시트 584행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-017 | Account Setting | TI-STN-05-03-P | 추가 |  | Edit | 언어셋 v0.05 목록 시트 585행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-022 | Account Setting | TI-STN-05-03-P | 추가 |  | Save | 언어셋 v0.05 목록 시트 587행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-297 | Account Setting | TI-STN-05-03-P/Case | 추가 |  | Password Updated Successfully | 언어셋 v0.05 목록 시트 588행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-298 | Account Setting | TI-STN-05-03-P/Case | 추가 |  | The password has been successfully updated, and the temporary password has been sent to the registered email address. | 언어셋 v0.05 목록 시트 589행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-299 | Account Setting | TI-STN-05-03-P/Case | 추가 |  | Password Updated | 언어셋 v0.05 목록 시트 590행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-300 | Account Setting | TI-STN-05-03-P/Case | 추가 |  | The password has been successfully updated. Please copy the generated password and deliver it to the user manually. | 언어셋 v0.05 목록 시트 591행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-302 | Account Setting | TI-STN-05-03-P/Case | 추가 |  | The password has been successfully updated, but the temporary password email could not be sent. Please copy the password below and deliver it to the user manually. | 언어셋 v0.05 목록 시트 592행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-100 | Account Setting | TI-STN-05-03-P/Case | 삭제 | Temporary Password Issued |  | 언어셋 v0.05 목록 시트 593행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-101 | Account Setting | TI-STN-05-03-P/Case | 삭제 | The temporary password for this user has been successfully generated |  | 언어셋 v0.05 목록 시트 594행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-102 | Account Setting | TI-STN-05-03-P/Case | 삭제 | Copy the generated password and send it to the user. |  | 언어셋 v0.05 목록 시트 595행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-044 | Protocol Setting | TI-STN-03-01 / TI-STN-03-01-01 / TI-STN-03-01-02 / TI-STN-03-02 / TI-STN-03-02-01 | 추가 |  | {N} of {M} Items | 언어셋 v0.05 목록 시트 602행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-018 | Protocol Setting | TI-STN-03-01-01 / TI-STN-03-02-01 | 삭제 | Pre-Treatment Protocol Modify |  | 언어셋 v0.05 목록 시트 614행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-260 | Protocol Setting | TI-STN-03-01-02 / LI-STN-03-01-02 | 추가 |  | Protocol Type | 언어셋 v0.05 목록 시트 620행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-261 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 추가 |  | Time | 언어셋 v0.05 목록 시트 624행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-262 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 추가 |  | Heating Temp. | 언어셋 v0.05 목록 시트 625행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-263 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 추가 |  | Incubation Time | 언어셋 v0.05 목록 시트 626행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-050 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 삭제 | WB3 |  | 언어셋 v0.05 목록 시트 650행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-218 | Policy Setting | LI-STN-01 | 추가 |  | View | 언어셋 v0.05 목록 시트 678행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-219 | Policy Setting | TI-STN-01 | 추가 |  | Setting time | 언어셋 v0.05 목록 시트 701행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-261 | Policy Setting | LI-STN-01 | 추가 |  | Time | 언어셋 v0.05 목록 시트 702행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-221 | Policy Setting | TI-STN-01 | 추가 |  | Protocol setting | 언어셋 v0.05 목록 시트 706행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-222 | Policy Setting | LI-STN-01 | 추가 |  | Allow | 언어셋 v0.05 목록 시트 707행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-SPT-021 | Policy Setting | TI-STN-01 / LI-STN-01 | 삭제 | 96-DWP |  | 언어셋 v0.05 목록 시트 718행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-022 | Policy Setting | TI-STN-01 | 추가 |  | Save | 언어셋 v0.05 목록 시트 722행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-044 | Policy Setting | TI-STN-01-01 | 추가 |  | Consumables | 언어셋 v0.05 목록 시트 723행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-SPT-043 | Policy Setting | TI-STN-01-01 | 추가 |  | Reagents | 언어셋 v0.05 목록 시트 724행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-148 | Policy Setting | TI-STN-01-01 | 변경 | Quantity per Package | Quantity | 언어셋 v0.05 목록 시트 727행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-IVT-039 | Policy Setting | TI-STN-01-01 | 추가 |  | Usage | 언어셋 v0.05 목록 시트 728행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-150 | Policy Setting | TI-STN-01-02 / LI-STN-01-02 | 삭제 | Extraction module availability |  | 언어셋 v0.05 목록 시트 733행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-151 | Policy Setting | TI-STN-01-02 / LI-STN-01-02 / TI-STN-01-04 / LI-STN-01-03 | 삭제 | High-throughput Extraction |  | 언어셋 v0.05 목록 시트 734행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-152 | Policy Setting | TI-STN-01-02 / LI-STN-01-02 / TI-STN-01-04 / LI-STN-01-03 | 삭제 | Flexible Extraction |  | 언어셋 v0.05 목록 시트 735행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-028 | Policy Setting | TI-STN-01-03 | 추가 |  | 00h 00m | 언어셋 v0.05 목록 시트 745행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-167 | Policy Setting | TI-STN-01-04 / LI-STN-01-03 | 변경 | The samples count is calculated based on the cost values entered for each device. | * The samples count is calculated based on the cost values entered for each device. | 언어셋 v0.05 목록 시트 755행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-169 | System Setting | TI-STN-02 / LI-STN-02 | 삭제 | General Setting |  | 언어셋 v0.05 목록 시트 757행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-197 | System Setting | TI-STN-02 / LI-STN-02 | 추가 |  | General | 언어셋 v0.05 목록 시트 758행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-224 | System Setting | TI-STN-02_Toast / LI-STN-02_Toast | 추가 |  | Settings have been saved. | 언어셋 v0.05 목록 시트 774행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STA-015 | System Setting | TI-STN-02_데이트피커 / LI-STN-02_데이트피커 | 추가 |  | Sun | 언어셋 v0.05 목록 시트 775행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STA-009 | System Setting | TI-STN-02_데이트피커 / LI-STN-02_데이트피커 | 추가 |  | Mon | 언어셋 v0.05 목록 시트 776행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STA-010 | System Setting | TI-STN-02_데이트피커 / LI-STN-02_데이트피커 | 추가 |  | Tue | 언어셋 v0.05 목록 시트 777행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STA-011 | System Setting | TI-STN-02_데이트피커 / LI-STN-02_데이트피커 | 추가 |  | Wed | 언어셋 v0.05 목록 시트 778행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STA-012 | System Setting | TI-STN-02_데이트피커 / LI-STN-02_데이트피커 | 추가 |  | Thu | 언어셋 v0.05 목록 시트 779행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STA-013 | System Setting | TI-STN-02_데이트피커 / LI-STN-02_데이트피커 | 추가 |  | Fri | 언어셋 v0.05 목록 시트 780행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STA-014 | System Setting | TI-STN-02_데이트피커 / LI-STN-02_데이트피커 | 추가 |  | Sat | 언어셋 v0.05 목록 시트 781행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-025 | System Setting | TI-STN-02_데이트피커 / LI-STN-02_데이트피커 | 추가 |  | Done | 언어셋 v0.05 목록 시트 782행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-178 | System Setting | TI-STN-02 | 삭제 | Data Backup and Restore |  | 언어셋 v0.05 목록 시트 783행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-179 | System Setting | TI-STN-02 | 삭제 | Data Backup |  | 언어셋 v0.05 목록 시트 784행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-180 | System Setting | TI-STN-02 | 삭제 | Backup |  | 언어셋 v0.05 목록 시트 785행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-181 | System Setting | TI-STN-02 | 삭제 | * Create and download a backup file that includes user settings, device configuration, test history, Event history, and logs. |  | 언어셋 v0.05 목록 시트 786행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-182 | System Setting | TI-STN-02 | 삭제 | Restore from Backup |  | 언어셋 v0.05 목록 시트 787행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-183 | System Setting | TI-STN-02 | 삭제 | Restore |  | 언어셋 v0.05 목록 시트 788행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-184 | System Setting | TI-STN-02 | 삭제 | *Upload a backup file to restore user settings, device configuration, and historical data. |  | 언어셋 v0.05 목록 시트 789행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-188 | System Setting | TI-STN-02 | 삭제 | Restore cannot be performed while the Cureca system is running. |  | 언어셋 v0.05 목록 시트 790행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-039 | System Setting | TI-STN-02 | 삭제 | Close |  | 언어셋 v0.05 목록 시트 791행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-189 | System Setting | TI-STN-02 | 삭제 | Restore the selected backup file? |  | 언어셋 v0.05 목록 시트 792행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-021 | System Setting | TI-STN-02 | 삭제 | Cancel |  | 언어셋 v0.05 목록 시트 793행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-190 | System Setting | TI-STN-02 | 삭제 | Restore in progress… |  | 언어셋 v0.05 목록 시트 794행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-191 | System Setting | TI-STN-02 | 삭제 | Please wait a moment. |  | 언어셋 v0.05 목록 시트 795행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-192 | System Setting | TI-STN-02 | 삭제 | Restore completed successfully. |  | 언어셋 v0.05 목록 시트 796행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-196 | LIS Setting | TI-STN-04-01-T | 삭제 | Configure LIS interface settings for order and result transmission. |  | 언어셋 v0.05 목록 시트 800행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-200 | LIS Setting | TI-STN-04-01-T | 삭제 | Rest API |  | 언어셋 v0.05 목록 시트 804행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-264 | LIS Setting | TI-STN-04-01-T | 추가 |  | Order Reception Mode | 언어셋 v0.05 목록 시트 808행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-265 | LIS Setting | TI-STN-04-01-T | 추가 |  | Query Mode | 언어셋 v0.05 목록 시트 809행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-266 | LIS Setting | TI-STN-04-01-T | 추가 |  | Push Mode | 언어셋 v0.05 목록 시트 810행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-204 | LIS Setting | TI-STN-04-01-T | 변경 | T-IOS Network (Receive Test Orders) | T-IOS Network | 언어셋 v0.05 목록 시트 811행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-267 | LIS Setting | TI-STN-04-01-T | 추가 |  | Push Mode Only | 언어셋 v0.05 목록 시트 812행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-268 | LIS Setting | TI-STN-04-01-T | 추가 |  | None | 언어셋 v0.05 목록 시트 814행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-206 | LIS Setting | TI-STN-04-01-T | 변경 | LIS Network (Send Test Results) | LIS Network | 언어셋 v0.05 목록 시트 815행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-208 | LIS Setting | TI-STN-04-01-T | 변경 | IP Address | Enter IP Address | 언어셋 v0.05 목록 시트 817행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-269 | LIS Setting | TI-STN-04-01-T | 추가 |  | Enter Port | 언어셋 v0.05 목록 시트 818행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-209 | LIS Setting | TI-STN-04-01-T | 삭제 | Get Test Orders |  | 언어셋 v0.05 목록 시트 819행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-210 | LIS Setting | TI-STN-04-01-T | 삭제 | URL |  | 언어셋 v0.05 목록 시트 820행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-211 | LIS Setting | TI-STN-04-01-T | 삭제 | Send Test Results |  | 언어셋 v0.05 목록 시트 821행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-270 | LIS Setting | TI-STN-04-02-T | 추가 |  | Target Code | 언어셋 v0.05 목록 시트 826행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-271 | LIS Setting | TI-STN-04-02-T | 추가 |  | Sample type or LIS code | 언어셋 v0.05 목록 시트 828행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-272 | LIS Setting | TI-STN-04-02-T | 추가 |  | Test or LIS code | 언어셋 v0.05 목록 시트 829행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-017 | LIS Setting | TI-STN-04-02-T | 추가 |  | Edit | 언어셋 v0.05 목록 시트 835행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-025 | LIS Setting | TI-STN-04-02-T | 추가 |  | Done | 언어셋 v0.05 목록 시트 836행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-273 | LIS Setting | TI-STN-04-02-T | 추가 |  | Products | 언어셋 v0.05 목록 시트 837행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-274 | LIS Setting | TI-STN-04-02-T | 추가 |  | Target Codes | 언어셋 v0.05 목록 시트 838행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-275 | LIS Setting | TI-STN-04-02-T | 추가 |  | Product name or code | 언어셋 v0.05 목록 시트 839행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-276 | LIS Setting | TI-STN-04-02-T | 추가 |  | Target or LIS code | 언어셋 v0.05 목록 시트 840행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-277 | LIS Setting | TI-STN-04-02-T | 추가 |  | {N} targets | 언어셋 v0.05 목록 시트 841행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-278 | LIS Setting | TI-STN-04-02-T | 추가 |  | LIS Target Code | 언어셋 v0.05 목록 시트 842행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-320 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 추가 |  | Tube Setting | 언어셋 v0.05 목록 시트 843행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-321 | Tube Setting | TI-SVS-01 / LI-SVS-01 / TI-SVS-01-P / LI-SVS-01-P | 추가 |  | LIS Code | 언어셋 v0.05 목록 시트 844행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-322 | Tube Setting | TI-SVS-01 / LI-SVS-01 / TI-SVS-01-P | 추가 |  | Enter LIS code | 언어셋 v0.05 목록 시트 845행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-323 | Tube Setting | TI-SVS-01 / LI-SVS-01 / TI-SVS-01-P / LI-SVS-01-P | 추가 |  | System Code | 언어셋 v0.05 목록 시트 846행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-324 | Tube Setting | TI-SVS-01 / LI-SVS-01 / TI-SVS-01-P | 추가 |  | Enter system code | 언어셋 v0.05 목록 시트 847행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-022 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 추가 |  | Reset | 언어셋 v0.05 목록 시트 848행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-016 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 추가 |  | Search | 언어셋 v0.05 목록 시트 849행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-044 | Tube Setting | TI-SVS-01 | 추가 |  | {N} of {M} Items | 언어셋 v0.05 목록 시트 850행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-006 | Tube Setting | LI-SVS-01 | 추가 |  | Items | 언어셋 v0.05 목록 시트 851행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-042 | Tube Setting | TI-SVS-01 | 추가 |  | Add | 언어셋 v0.05 목록 시트 852행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-325 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 추가 |  | Tube Name | 언어셋 v0.05 목록 시트 853행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-326 | Tube Setting | TI-SVS-01 / LI-SVS-01 / TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Socket Type | 언어셋 v0.05 목록 시트 854행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-327 | Tube Setting | TI-SVS-01 / LI-SVS-01 / TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Height (mm) | 언어셋 v0.05 목록 시트 855행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-328 | Tube Setting | TI-SVS-01 / LI-SVS-01 / TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Cap Size (mm) | 언어셋 v0.05 목록 시트 856행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-329 | Tube Setting | TI-SVS-01 / LI-SVS-01 / TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Body Size (mm) | 언어셋 v0.05 목록 시트 857행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-010 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 추가 |  | Modified Date/Time | 언어셋 v0.05 목록 시트 858행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-012 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 추가 |  | Details | 언어셋 v0.05 목록 시트 859행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-330 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 추가 |  | No sample tube settings found. | 언어셋 v0.05 목록 시트 860행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-331 | Tube Setting | TI-SVS-01 | 추가 |  | Click Add to create a new setting. | 언어셋 v0.05 목록 시트 861행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-015 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 추가 |  | No results found. | 언어셋 v0.05 목록 시트 862행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-332 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Sample tube details | 언어셋 v0.05 목록 시트 863행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-333 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Code Info | 언어셋 v0.05 목록 시트 864행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-334 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Tube Info | 언어셋 v0.05 목록 시트 865행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-046 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Name | 언어셋 v0.05 목록 시트 866행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-335 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Manufacturer | 언어셋 v0.05 목록 시트 867행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-336 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Model | 언어셋 v0.05 목록 시트 868행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-337 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Catalog No. | 언어셋 v0.05 목록 시트 869행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-338 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Bottom Type | 언어셋 v0.05 목록 시트 870행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-268 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | None | 언어셋 v0.05 목록 시트 871행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-339 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Flat | 언어셋 v0.05 목록 시트 872행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-340 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Round (U-bottom) | 언어셋 v0.05 목록 시트 873행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-341 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Conical (V-bottom) | 언어셋 v0.05 목록 시트 874행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-342 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Skirted Conical | 언어셋 v0.05 목록 시트 875행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-343 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Custom | 언어셋 v0.05 목록 시트 876행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-004 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Type | 언어셋 v0.05 목록 시트 877행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-146 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | No. | 언어셋 v0.05 목록 시트 878행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-023 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Sample Type | 언어셋 v0.05 목록 시트 879행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-033 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | Notes | 언어셋 v0.05 목록 시트 880행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-035 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 추가 |  | {n}/{max} Characters | 언어셋 v0.05 목록 시트 881행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-019 | Tube Setting | TI-SVS-01-P | 추가 |  | Delete | 언어셋 v0.05 목록 시트 882행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-041 | Tube Setting | TI-SVS-01-P | 추가 |  | Modify | 언어셋 v0.05 목록 시트 883행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-345 | Tube Setting | TI-SVS-01-P | 추가 |  | Enter Name | 언어셋 v0.05 목록 시트 884행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-346 | Tube Setting | TI-SVS-01-P | 추가 |  | Enter Manufacturer | 언어셋 v0.05 목록 시트 885행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-347 | Tube Setting | TI-SVS-01-P | 추가 |  | Enter Model | 언어셋 v0.05 목록 시트 886행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-348 | Tube Setting | TI-SVS-01-P | 추가 |  | Enter Catalog No. | 언어셋 v0.05 목록 시트 887행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-349 | Tube Setting | TI-SVS-01-P | 추가 |  | Enter Height | 언어셋 v0.05 목록 시트 888행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-350 | Tube Setting | TI-SVS-01-P | 추가 |  | Enter Size | 언어셋 v0.05 목록 시트 889행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-351 | Tube Setting | TI-SVS-01-P | 추가 |  | Enter notes | 언어셋 v0.05 목록 시트 890행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-021 | Tube Setting | TI-SVS-01-P | 추가 |  | Cancel | 언어셋 v0.05 목록 시트 891행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-022 | Tube Setting | TI-SVS-01-P | 추가 |  | Save | 언어셋 v0.05 목록 시트 892행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-360 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | Assay Pack Setting | 언어셋 v0.05 목록 시트 893행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-361 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | File name | 언어셋 v0.05 목록 시트 894행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-362 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | Enter file name | 언어셋 v0.05 목록 시트 895행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-363 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | File type | 언어셋 v0.05 목록 시트 896행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-003 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | All | 언어셋 v0.05 목록 시트 897행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-364 | Assay Pack Setting | TI-STN-08 / LI-STN-08 / TI-STN-08-P / LI-STN-08-P | 추가 |  | Master | 언어셋 v0.05 목록 시트 898행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-365 | Assay Pack Setting | TI-STN-08 / LI-STN-08 / TI-STN-08-P / LI-STN-08-P | 추가 |  | Pretreatment | 언어셋 v0.05 목록 시트 899행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-366 | Assay Pack Setting | TI-STN-08 / LI-STN-08 / TI-STN-08-P / LI-STN-08-P | 추가 |  | Extraction | 언어셋 v0.05 목록 시트 900행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-367 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | Period | 언어셋 v0.05 목록 시트 901행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-368 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | Registered Date | 언어셋 v0.05 목록 시트 902행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-369 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | Created Date | 언어셋 v0.05 목록 시트 903행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-370 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | Select Date Range | 언어셋 v0.05 목록 시트 904행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-371 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | Active only | 언어셋 v0.05 목록 시트 905행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-022 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | Reset | 언어셋 v0.05 목록 시트 906행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-016 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | Search | 언어셋 v0.05 목록 시트 907행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-044 | Assay Pack Setting | TI-STN-08 | 추가 |  | {N} of {M} Items | 언어셋 v0.05 목록 시트 908행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-006 | Assay Pack Setting | LI-STN-08 | 추가 |  | Items | 언어셋 v0.05 목록 시트 909행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-019 | Assay Pack Setting | TI-STN-08 / TI-STN-08-P | 추가 |  | Delete | 언어셋 v0.05 목록 시트 910행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-035 | Assay Pack Setting | TI-STN-08 / TI-STN-08-01 | 추가 |  | Import | 언어셋 v0.05 목록 시트 911행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-147 | Assay Pack Setting | TI-STN-08 / LI-STN-08 / TI-STN-08-P / LI-STN-08-P | 추가 |  | Product Name | 언어셋 v0.05 목록 시트 912행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INF-008 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | Version | 언어셋 v0.05 목록 시트 913행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-372 | Assay Pack Setting | TI-STN-08 / LI-STN-08 / TI-STN-08-P / LI-STN-08-P | 추가 |  | Registered Date/Time | 언어셋 v0.05 목록 시트 914행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-373 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | Created Date/Time | 언어셋 v0.05 목록 시트 915행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-073 | Assay Pack Setting | TI-STN-08 / LI-STN-08 / TI-STN-08-P / LI-STN-08-P | 추가 |  | User ID | 언어셋 v0.05 목록 시트 916행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-374 | Assay Pack Setting | TI-STN-08 / LI-STN-08 / TI-STN-08-P / LI-STN-08-P | 추가 |  | Active | 언어셋 v0.05 목록 시트 917행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-375 | Assay Pack Setting | TI-STN-08 / LI-STN-08 / TI-STN-08-P / LI-STN-08-P | 추가 |  | Inactive | 언어셋 v0.05 목록 시트 918행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-012 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | Details | 언어셋 v0.05 목록 시트 919행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-376 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | Master Info | 언어셋 v0.05 목록 시트 920행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-377 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | No files found. | 언어셋 v0.05 목록 시트 921행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-378 | Assay Pack Setting | TI-STN-08 | 추가 |  | Click Import to add a file. | 언어셋 v0.05 목록 시트 922행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-015 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 추가 |  | No results found. | 언어셋 v0.05 목록 시트 923행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-379 | Assay Pack Setting | TI-STN-08-01 | 추가 |  | Import file | 언어셋 v0.05 목록 시트 924행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-380 | Assay Pack Setting | TI-STN-08-01 | 추가 |  | * Files : json · Multiple files | 언어셋 v0.05 목록 시트 925행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-381 | Assay Pack Setting | TI-STN-08-01 | 추가 |  | Drag and drop files here, or | 언어셋 v0.05 목록 시트 926행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-383 | Assay Pack Setting | TI-STN-08-01 | 추가 |  | Select files | 언어셋 v0.05 목록 시트 927행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-039 | Assay Pack Setting | TI-STN-08-01 | 추가 |  | Close | 언어셋 v0.05 목록 시트 928행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-384 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | File details | 언어셋 v0.05 목록 시트 929행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-385 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | File Version | 언어셋 v0.05 목록 시트 930행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-386 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | File Created Date/Time | 언어셋 v0.05 목록 시트 931행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-387 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Import Info | 언어셋 v0.05 목록 시트 932행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-388 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Test Group Info | 언어셋 v0.05 목록 시트 933행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-389 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Test Group ID | 언어셋 v0.05 목록 시트 934행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-390 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Test Group Name | 언어셋 v0.05 목록 시트 935행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-391 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Test Group Code | 언어셋 v0.05 목록 시트 936행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-392 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Sample Type Info | 언어셋 v0.05 목록 시트 937행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-393 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Sample Type ID | 언어셋 v0.05 목록 시트 938행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-216 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Sample Type Name | 언어셋 v0.05 목록 시트 939행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-214 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Sample Type Code | 언어셋 v0.05 목록 시트 940행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-394 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Barcode Schema Info | 언어셋 v0.05 목록 시트 941행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-395 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Barcode Schema ID | 언어셋 v0.05 목록 시트 942행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-396 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Barcode Schema Name | 언어셋 v0.05 목록 시트 943행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-397 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Barcode Length | 언어셋 v0.05 목록 시트 944행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-398 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Expiration Date Segment Order | 언어셋 v0.05 목록 시트 945행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-399 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Segment Info ({N}) | 언어셋 v0.05 목록 시트 946행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-400 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Segment Order | 언어셋 v0.05 목록 시트 947행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-401 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Segment Name | 언어셋 v0.05 목록 시트 948행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-402 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Segment Length | 언어셋 v0.05 목록 시트 949행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-403 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Item Group Info | 언어셋 v0.05 목록 시트 950행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-404 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Item Group ID | 언어셋 v0.05 목록 시트 951행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-405 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Item Group Name | 언어셋 v0.05 목록 시트 952행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-406 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | PCR Reagent Socket Component Info | 언어셋 v0.05 목록 시트 953행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-407 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Component ID | 언어셋 v0.05 목록 시트 954행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-408 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Component Type | 언어셋 v0.05 목록 시트 955행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-409 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Color Code | 언어셋 v0.05 목록 시트 956행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-410 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Reagent Basic Info | 언어셋 v0.05 목록 시트 957행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-411 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Product Code | 언어셋 v0.05 목록 시트 958행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-412 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Max Rxns | 언어셋 v0.05 목록 시트 959행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-413 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Max Usage Count | 언어셋 v0.05 목록 시트 960행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-414 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Barcode Info | 언어셋 v0.05 목록 시트 961행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-415 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Segment Info | 언어셋 v0.05 목록 시트 962행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-416 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Segment {N} | 언어셋 v0.05 목록 시트 963행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-417 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Quantity Info | 언어셋 v0.05 목록 시트 964행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-148 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Quantity | 언어셋 v0.05 목록 시트 965행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-418 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Base Unit | 언어셋 v0.05 목록 시트 966행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-419 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Packaging Unit | 언어셋 v0.05 목록 시트 967행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-420 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Storage Location Info | 언어셋 v0.05 목록 시트 968행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-421 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Module Code | 언어셋 v0.05 목록 시트 969행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-422 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Unit Code | 언어셋 v0.05 목록 시트 970행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-423 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Component Info | 언어셋 v0.05 목록 시트 971행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-424 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Component Name | 언어셋 v0.05 목록 시트 972행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-425 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Component Code | 언어셋 v0.05 목록 시트 973행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-426 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Test Item Name | 언어셋 v0.05 목록 시트 974행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-427 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Test Item Code | 언어셋 v0.05 목록 시트 975행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-428 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Test Target Names ({N}) | 언어셋 v0.05 목록 시트 976행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-429 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Sample Type Mapping Info ({N}) | 언어셋 v0.05 목록 시트 977행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-430 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Extraction Device Availability | 언어셋 v0.05 목록 시트 978행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-436 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Available | 언어셋 v0.05 목록 시트 979행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-437 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Unavailable | 언어셋 v0.05 목록 시트 980행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-431 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | PCR Socket Component Info | 언어셋 v0.05 목록 시트 981행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-432 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Component Abbreviation | 언어셋 v0.05 목록 시트 982행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-433 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Socket Positions ({N}) | 언어셋 v0.05 목록 시트 983행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-434 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Row | 언어셋 v0.05 목록 시트 984행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-435 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 추가 |  | Column | 언어셋 v0.05 목록 시트 985행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-022 | Assay Pack Setting | TI-STN-08-P | 추가 |  | Save | 언어셋 v0.05 목록 시트 986행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-303 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | SMTP Setting | 언어셋 v0.05 목록 시트 987행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-304 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | Use SMTP Feature | 언어셋 v0.05 목록 시트 988행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-046 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | Enable | 언어셋 v0.05 목록 시트 989행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-047 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | Disable | 언어셋 v0.05 목록 시트 990행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-305 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | SMTP Server | 언어셋 v0.05 목록 시트 991행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-306 | SMTP Setting | TI-STN-06 | 추가 |  | Server | 언어셋 v0.05 목록 시트 992행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-307 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | Port Number | 언어셋 v0.05 목록 시트 993행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-308 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | SMTP Authentication | 언어셋 v0.05 목록 시트 994행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-309 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | Authentication Status | 언어셋 v0.05 목록 시트 995행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-073 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | User ID | 언어셋 v0.05 목록 시트 996행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-LOG-005 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | Password | 언어셋 v0.05 목록 시트 997행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-310 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | Verify | 언어셋 v0.05 목록 시트 998행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-311 | SMTP Setting | TI-STN-06 | 추가 |  | User ID and Password verified successfully. | 언어셋 v0.05 목록 시트 999행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-312 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | Invalid User ID or Password. Please check and try again. | 언어셋 v0.05 목록 시트 1000행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-313 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | Security Method | 언어셋 v0.05 목록 시트 1001행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-314 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | Encryption | 언어셋 v0.05 목록 시트 1002행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-268 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | None | 언어셋 v0.05 목록 시트 1003행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-315 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | STARTTLS | 언어셋 v0.05 목록 시트 1004행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STN-316 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | SSL/TLS | 언어셋 v0.05 목록 시트 1005행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-022 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 추가 |  | Save | 언어셋 v0.05 목록 시트 1006행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-022 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T | 추가 |  | Ready | 언어셋 v0.05 목록 시트 1017행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-023 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T | 추가 |  | Running | 언어셋 v0.05 목록 시트 1018행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-037 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T | 추가 |  | Error | 언어셋 v0.05 목록 시트 1019행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-026 | Instrument | TI-INS-01-T / LI-INS-01-T / LI-INS-01-P | 추가 |  | Paused | 언어셋 v0.05 목록 시트 1020행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-029 | Instrument | LI-INS-01-P | 추가 |  | Pausing | 언어셋 v0.05 목록 시트 1021행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-042 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T / LI-INS-01-P | 추가 |  | Open | 언어셋 v0.05 목록 시트 1022행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-043 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T / LI-INS-01-P | 추가 |  | Closed | 언어셋 v0.05 목록 시트 1023행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-030 | Instrument | TI-INS-02-T / LI-INS-01-P | 추가 |  | Locked | 언어셋 v0.05 목록 시트 1024행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-031 | Instrument | TI-INS-02-T / LI-INS-01-P | 추가 |  | Unlocked | 언어셋 v0.05 목록 시트 1025행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-032 | Instrument | TI-INS-02-T / LI-INS-02-T | 추가 |  | Docked | 언어셋 v0.05 목록 시트 1026행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-033 | Instrument | TI-INS-02-T / LI-INS-02-T | 추가 |  | Undocked | 언어셋 v0.05 목록 시트 1027행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-030 | Instrument | TI-INS-02-T / LI-INS-02-T | 추가 |  | Full | 언어셋 v0.05 목록 시트 1028행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-031 | Instrument | TI-INS-02-T / LI-INS-02-T | 추가 |  | Almost Full | 언어셋 v0.05 목록 시트 1029행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-059 | Instrument | TI-INS-02-T / LI-INS-02-T | 추가 |  | Available | 언어셋 v0.05 목록 시트 1030행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-038 | Instrument | TI-INS-02-T / LI-INS-02-T | 추가 |  | Warning | 언어셋 v0.05 목록 시트 1031행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-009 | Instrument | LI-INS-01-P / TI-INS-02-T / LI-INS-02-T | 삭제 | Upper |  | 언어셋 v0.05 목록 시트 1035행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-010 | Instrument | LI-INS-01-P / TI-INS-02-T / LI-INS-02-T | 삭제 | Lower |  | 언어셋 v0.05 목록 시트 1036행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-034 | Instrument | LI-INS-01-P / TI-INS-02-T / LI-INS-02-T | 추가 |  | Door (Upper) | 언어셋 v0.05 목록 시트 1037행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-035 | Instrument | LI-INS-01-P / TI-INS-02-T / LI-INS-02-T | 추가 |  | Door (Lower) | 언어셋 v0.05 목록 시트 1038행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-036 | Instrument | LI-INS-01-P / TI-INS-02-T / LI-INS-02-T | 추가 |  | Door (Rear) | 언어셋 v0.05 목록 시트 1039행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-012 | Instrument | LI-INS-01-P | 삭제 | *For safety, the door cannot be unlocked while the module is running. |  | 언어셋 v0.05 목록 시트 1040행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-053 | Instrument | LI-INS-01-P | 추가 |  | Lock | 언어셋 v0.05 목록 시트 1042행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-039 | Instrument | LI-INS-01-P | 추가 |  | * Close the door and press the 'Lock' button to resume the module | 언어셋 v0.05 목록 시트 1044행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-040 | Instrument | LI-INS-01-P | 추가 |  | Cannot unlock while the system is running. | 언어셋 v0.05 목록 시트 1045행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-041 | Instrument | LI-INS-01-P | 추가 |  | Pausing for door unlocking. Please wait. | 언어셋 v0.05 목록 시트 1046행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-042 | Instrument | LI-INS-01-T | 추가 |  | Shows door open/close status and provides an Unlock function to open the module door | 언어셋 v0.05 목록 시트 1047행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-051 | Instrument | TI-INS-02-T / LI-INS-02-T | 추가 |  | All Modules | 언어셋 v0.05 목록 시트 1049행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-054 | Instrument | TI-INS-02-T / LI-INS-02-T | 추가 |  | No item | 언어셋 v0.05 목록 시트 1063행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-052 | Instrument | TI-INS-02-T / LI-INS-02-T | 추가 |  | Waste Status | 언어셋 v0.05 목록 시트 1065행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-027 | Instrument | TI-INS-02-T / LI-INS-02-T | 삭제 | Run-time Info |  | 언어셋 v0.05 목록 시트 1071행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-028 | Instrument | TI-INS-02-T / LI-INS-02-T / TI-INS-02-01-P / LI-INS-02-01-P | 삭제 | Enable Settings |  | 언어셋 v0.05 목록 시트 1072행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-043 | Instrument | TI-INS-02-T / LI-INS-02-T / TI-INS-02-01-P / LI-INS-02-01-P | 추가 |  | Management | 언어셋 v0.05 목록 시트 1073행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-044 | Instrument | TI-INS-02-01-P / LI-INS-02-01-P | 추가 |  | Module - Device | 언어셋 v0.05 목록 시트 1074행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-045 | Instrument | TI-INS-02-01-P / LI-INS-02-01-P | 추가 |  | Serial No. | 언어셋 v0.05 목록 시트 1075행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-003 | Instrument | TI-INS-02-01-P / LI-INS-02-01-P | 삭제 | Enabled |  | 언어셋 v0.05 목록 시트 1076행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-046 | Instrument | TI-INS-02-01-P / LI-INS-02-01-P | 추가 |  | Enable | 언어셋 v0.05 목록 시트 1077행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-047 | Instrument | TI-INS-02-01-P | 추가 |  | Disable | 언어셋 v0.05 목록 시트 1078행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-020 | Instrument | TI-INS-02-01-P / LI-INS-02-01-P | 삭제 | Device |  | 언어셋 v0.05 목록 시트 1079행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-020 | Instrument | TI-INS-02-01-P | 삭제 | Apply |  | 언어셋 v0.05 목록 시트 1081행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-022 | Instrument | TI-INS-02-01-P | 추가 |  | Save | 언어셋 v0.05 목록 시트 1082행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-048 | Instrument | TI-INS-02-01-P | 추가 |  | Changes saved. | 언어셋 v0.05 목록 시트 1084행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-049 | Instrument | LI-INS-02-01-P | 추가 |  | This module is not installed on the system. | 언어셋 v0.05 목록 시트 1085행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INS-050 | Instrument | LI-INS-02-01-P | 추가 |  | Data retrieval failed. Check connection and retry. | 언어셋 v0.05 목록 시트 1086행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-050 | Statistical Analysis | TI-STA-01,2-01 / TI-STA-05_Skeleton | 추가 |  | Loading data... | 언어셋 v0.05 목록 시트 1114행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-051 | Statistical Analysis | TI-STA-01,2-01 / TI-STA-05_Skeleton | 추가 |  | Please wait a moment while we load your content. | 언어셋 v0.05 목록 시트 1115행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-052 | Statistical Analysis | TI-STA-02-01 | 추가 |  | Test Ratio (%) | 언어셋 v0.05 목록 시트 1116행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-024 | Statistical Analysis | TI-STA-03-01 / TI-STA-03-02 | 변경 | Total Test TAT | Total Test TAT(Turnaround Time) | 언어셋 v0.05 목록 시트 1118행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-053 | Statistical Analysis | TI-STA-05 | 추가 |  | Week | 언어셋 v0.05 목록 시트 1129행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-054 | Statistical Analysis | TI-STA-05 | 추가 |  | {Product} Tests Count Prediction | 언어셋 v0.05 목록 시트 1136행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-055 | Statistical Analysis | TI-STA-05-01 / TI-STA-05-02 / TI-STA-06-01 / TI-STA-06-02 | 추가 |  | Run-time Trend | 언어셋 v0.05 목록 시트 1148행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-056 | Statistical Analysis | TI-STA-05-01 / TI-STA-05-02 / TI-STA-06-01 / TI-STA-06-02 | 추가 |  | Error Rate Trend | 언어셋 v0.05 목록 시트 1149행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-012 | Statistical Analysis | TI-STA-05-01 / TI-STA-05-02 / TI-STA-06-01 / TI-STA-06-02 / TI-STA-08-01 / TI-STA-08-02 | 추가 |  | Module | 언어셋 v0.05 목록 시트 1150행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-013 | Statistical Analysis | TI-STA-05-01 / TI-STA-05-02 / TI-STA-06-01 / TI-STA-06-02 | 추가 |  | Unit | 언어셋 v0.05 목록 시트 1151행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-057 | Statistical Analysis | TI-STA-05-01 / TI-STA-05-02 | 추가 |  | Sample Aliquot (Upper) | 언어셋 v0.05 목록 시트 1152행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-058 | Statistical Analysis | TI-STA-05-01 / TI-STA-05-02 | 추가 |  | Sample Aliquot (Lower) | 언어셋 v0.05 목록 시트 1153행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-059 | Statistical Analysis | TI-STA-05-01 / TI-STA-05-02 | 추가 |  | Sample Pretreatment (Lower) | 언어셋 v0.05 목록 시트 1154행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-060 | Statistical Analysis | TI-STA-06-01 / TI-STA-06-02 | 추가 |  | Error Rate Trend (Cumulative) | 언어셋 v0.05 목록 시트 1155행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-061 | Statistical Analysis | TI-STA-06-01 / TI-STA-06-02 | 추가 |  | Unit : % | 언어셋 v0.05 목록 시트 1156행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-062 | Statistical Analysis | TI-STA-07-01 / TI-STA-07-02 | 추가 |  | Usage & Cost Trend | 언어셋 v0.05 목록 시트 1157행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-IVT-052 | Statistical Analysis | TI-STA-07-01 / TI-STA-07-02 | 추가 |  | Consumable | 언어셋 v0.05 목록 시트 1158행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-062 | Statistical Analysis | TI-STA-07-01 / TI-STA-07-02 | 추가 |  | Reagent | 언어셋 v0.05 목록 시트 1159행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-063 | Statistical Analysis | TI-STA-07-01 / TI-STA-07-02 | 추가 |  | Total Usage | 언어셋 v0.05 목록 시트 1160행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-158 | Statistical Analysis | TI-STA-07-01 / TI-STA-07-02 | 추가 |  | Total Cost | 언어셋 v0.05 목록 시트 1161행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-IVT-039 | Statistical Analysis | TI-STA-07-01 / TI-STA-07-02 | 추가 |  | Usage | 언어셋 v0.05 목록 시트 1162행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-064 | Statistical Analysis | TI-STA-07-01 / TI-STA-07-02 | 추가 |  | Cost | 언어셋 v0.05 목록 시트 1163행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-065 | Statistical Analysis | TI-STA-07-02 | 추가 |  | Unit : count, USD | 언어셋 v0.05 목록 시트 1164행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-066 | Statistical Analysis | TI-STA-08-01 / TI-STA-08-02 | 추가 |  | Event Trend | 언어셋 v0.05 목록 시트 1165행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-STA-067 | Statistical Analysis | TI-STA-08-01 / TI-STA-08-02 | 추가 |  | Event Type | 언어셋 v0.05 목록 시트 1166행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-005 | Statistical Analysis | TI-STA-08-01 / TI-STA-08-02 | 추가 |  | Instrument | 언어셋 v0.05 목록 시트 1167행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-IVT-001 | Statistical Analysis | TI-STA-08-01 / TI-STA-08-02 | 추가 |  | Inventory | 언어셋 v0.05 목록 시트 1168행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-SPT-022 | Statistical Analysis | TI-STA-08-01 / TI-STA-08-02 | 추가 |  | Sample | 언어셋 v0.05 목록 시트 1169행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-009 | Statistical Analysis | TI-STA-08-01 / TI-STA-08-02 | 추가 |  | System | 언어셋 v0.05 목록 시트 1170행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-010 | Information | TI-INF-02-P / LI-INF-02-P | 추가 |  | Y | 언어셋 v0.05 목록 시트 1183행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-011 | Information | TI-INF-02-P / LI-INF-02-P | 추가 |  | N | 언어셋 v0.05 목록 시트 1184행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-012 | Information | TI-INF-03-01 | 추가 |  | Run Report | 언어셋 v0.05 목록 시트 1185행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-013 | Information | TI-INF-03-01 | 추가 |  | Program | 언어셋 v0.05 목록 시트 1186행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-014 | Information | TI-INF-03-01 | 추가 |  | Manual | 언어셋 v0.05 목록 시트 1187행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-015 | Information | TI-INF-03-01 | 추가 |  | Report ID, Batch ID, Run By | 언어셋 v0.05 목록 시트 1188행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-016 | Information | TI-INF-03-01 | 추가 |  | Enter Report ID, Batch ID, Run By | 언어셋 v0.05 목록 시트 1189행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-017 | Information | TI-INF-03-01 / TI-INF-03-02 | 추가 |  | End Status | 언어셋 v0.05 목록 시트 1190행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-003 | Information | TI-INF-03-01 | 추가 |  | All | 언어셋 v0.05 목록 시트 1191행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-039 | Information | TI-INF-03-01 / TI-INF-03-02 | 추가 |  | Completed | 언어셋 v0.05 목록 시트 1192행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-018 | Information | TI-INF-03-01 / TI-INF-03-02 | 추가 |  | Failed | 언어셋 v0.05 목록 시트 1193행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-019 | Information | TI-INF-03-01 / TI-INF-03-02 | 추가 |  | Not Tested | 언어셋 v0.05 목록 시트 1194행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-018 | Information | TI-INF-03-01 | 추가 |  | Partially Completed | 언어셋 v0.05 목록 시트 1195행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-019 | Information | TI-INF-03-01 | 추가 |  | Stopped | 언어셋 v0.05 목록 시트 1196행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-020 | Information | TI-INF-03-01 | 추가 |  | Generated Date | 언어셋 v0.05 목록 시트 1197행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-022 | Information | TI-INF-03-01 | 추가 |  | Reset | 언어셋 v0.05 목록 시트 1198행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-016 | Information | TI-INF-03-01 | 추가 |  | Search | 언어셋 v0.05 목록 시트 1199행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-044 | Information | TI-INF-03-01 | 추가 |  | {N} of {M} Items | 언어셋 v0.05 목록 시트 1200행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-021 | Information | TI-INF-03-01 | 추가 |  | Download | 언어셋 v0.05 목록 시트 1201행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-022 | Information | TI-INF-03-01 / TI-INF-03-02 | 추가 |  | Report ID | 언어셋 v0.05 목록 시트 1202행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-023 | Information | TI-INF-03-01 / TI-INF-03-02 | 추가 |  | Batch ID | 언어셋 v0.05 목록 시트 1203행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-024 | Information | TI-INF-03-01 / TI-INF-03-02 | 추가 |  | Run By | 언어셋 v0.05 목록 시트 1204행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-025 | Information | TI-INF-03-01 / TI-INF-03-02 | 추가 |  | Generated Date/Time | 언어셋 v0.05 목록 시트 1205행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-012 | Information | TI-INF-03-01 | 추가 |  | Details | 언어셋 v0.05 목록 시트 1206행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-218 | Information | TI-INF-03-01 | 추가 |  | View | 언어셋 v0.05 목록 시트 1207행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-027 | Information | TI-INF-03-02 | 추가 |  | CURECA (Module Count by Type) | 언어셋 v0.05 목록 시트 1208행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-028 | Information | TI-INF-03-02 | 추가 |  | Run Summary | 언어셋 v0.05 목록 시트 1209행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-004 | Information | TI-INF-03-02 | 추가 |  | Start Date/Time | 언어셋 v0.05 목록 시트 1210행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-005 | Information | TI-INF-03-02 | 추가 |  | End Date/Time | 언어셋 v0.05 목록 시트 1211행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-030 | Information | TI-INF-03-02 | 추가 |  | Samples (Total / Processed) | 언어셋 v0.05 목록 시트 1212행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-029 | Information | TI-INF-03-02 | 추가 |  | Products (Total / Processed) | 언어셋 v0.05 목록 시트 1213행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-031 | Information | TI-INF-03-02 | 추가 |  | Total TAT (Turnaround Time) | 언어셋 v0.05 목록 시트 1214행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-024 | Information | TI-INF-03-02 | 추가 |  | STAT | 언어셋 v0.05 목록 시트 1215행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-028 | Information | TI-INF-03-02 | 추가 |  | 00h 00m | 언어셋 v0.05 목록 시트 1216행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-032 | Information | TI-INF-03-02 | 추가 |  | Tests by Product Group | 언어셋 v0.05 목록 시트 1217행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-SPT-023 | Information | TI-INF-03-02 | 추가 |  | Total | 언어셋 v0.05 목록 시트 1218행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-033 | Information | TI-INF-03-02 | 추가 |  | Group | 언어셋 v0.05 목록 시트 1219행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-023 | Information | TI-INF-03-02 | 추가 |  | Product | 언어셋 v0.05 목록 시트 1220행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-116 | Information | TI-INF-03-02 | 추가 |  | Count | 언어셋 v0.05 목록 시트 1221행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-034 | Information | TI-INF-03-02 | 추가 |  | Ratio | 언어셋 v0.05 목록 시트 1222행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-035 | Information | TI-INF-03-02 | 추가 |  | Tests by Process | 언어셋 v0.05 목록 시트 1223행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-146 | Information | TI-INF-03-02 | 추가 |  | No. | 언어셋 v0.05 목록 시트 1224행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-026 | Information | TI-INF-03-02 | 추가 |  | Process | 언어셋 v0.05 목록 시트 1225행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-036 | Information | TI-INF-03-02 | 추가 |  | Product Status | 언어셋 v0.05 목록 시트 1226행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-037 | Information | TI-INF-03-02 | 추가 |  | Copyright © CURECA™ All Rights Reserved. | 언어셋 v0.05 목록 시트 1227행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-038 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 추가 |  | Run Events Summary | 언어셋 v0.05 목록 시트 1228행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-039 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 추가 |  | Events by Type | 언어셋 v0.05 목록 시트 1229행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-004 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 추가 |  | Type | 언어셋 v0.05 목록 시트 1230행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-037 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 추가 |  | Error | 언어셋 v0.05 목록 시트 1231행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-038 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 추가 |  | Warning | 언어셋 v0.05 목록 시트 1232행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-005 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 추가 |  | Instrument | 언어셋 v0.05 목록 시트 1233행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-IVT-001 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 추가 |  | Inventory | 언어셋 v0.05 목록 시트 1234행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-SPT-022 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 추가 |  | Sample | 언어셋 v0.05 목록 시트 1235행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-009 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 추가 |  | System | 언어셋 v0.05 목록 시트 1236행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-040 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 추가 |  | Events by Module Type | 언어셋 v0.05 목록 시트 1237행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-041 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 추가 |  | Event History (Instrument Type Only) | 언어셋 v0.05 목록 시트 1238행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-010 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 추가 |  | Code | 언어셋 v0.05 목록 시트 1239행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-011 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 추가 |  | Description | 언어셋 v0.05 목록 시트 1240행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-012 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 추가 |  | Module | 언어셋 v0.05 목록 시트 1241행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-013 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 추가 |  | Unit | 언어셋 v0.05 목록 시트 1242행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-016 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 추가 |  | Occurred Date/Time | 언어셋 v0.05 목록 시트 1243행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-042 | Information | TI-INF-03-02 | 추가 |  | Module / Unit Operation Summary | 언어셋 v0.05 목록 시트 1244행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-043 | Information | TI-INF-03-02 | 추가 |  | Module / Unit | 언어셋 v0.05 목록 시트 1245행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-017 | Information | TI-INF-03-02 | 추가 |  | Run-time(h) | 언어셋 v0.05 목록 시트 1246행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-044 | Information | TI-INF-03-02 | 추가 |  | Current Run | 언어셋 v0.05 목록 시트 1247행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-045 | Information | TI-INF-03-02 | 추가 |  | Cumulative | 언어셋 v0.05 목록 시트 1248행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-046 | Information | TI-INF-03-02 | 추가 |  | Instrument Events | 언어셋 v0.05 목록 시트 1249행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-047 | Information | TI-INF-03-02 | 추가 |  | 00h | 언어셋 v0.05 목록 시트 1250행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-INF-048 | Information | TI-INF-03-02/Case1 | 추가 |  | No error events occurred. | 언어셋 v0.05 목록 시트 1251행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-014 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Pending | 언어셋 v0.05 목록 시트 1254행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-015 | Dashboard | TI-DAS / LI-DAS | 추가 |  | In Progress | 언어셋 v0.05 목록 시트 1255행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-016 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Completed | 언어셋 v0.05 목록 시트 1256행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-003 | Dashboard | TI-DAS / LI-DAS | 삭제 | Elapsed Time |  | 언어셋 v0.05 목록 시트 1260행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-026 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Elapsed | 언어셋 v0.05 목록 시트 1261행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-004 | Dashboard | TI-DAS / LI-DAS | 삭제 | Estimated Total Time |  | 언어셋 v0.05 목록 시트 1262행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-027 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Estimated Total | 언어셋 v0.05 목록 시트 1263행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-029 | Dashboard | TI-DAS / LI-DAS | 삭제 | Processed/Total |  | 언어셋 v0.05 목록 시트 1265행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-017 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Processed | 언어셋 v0.05 목록 시트 1266행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-SPT-023 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Total | 언어셋 v0.05 목록 시트 1267행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-018 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Failed | 언어셋 v0.05 목록 시트 1269행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-019 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Not Tested | 언어셋 v0.05 목록 시트 1270행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-020 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Not Initialized | 언어셋 v0.05 목록 시트 1273행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-021 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Initializing | 언어셋 v0.05 목록 시트 1274행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-022 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Ready | 언어셋 v0.05 목록 시트 1275행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-023 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Running | 언어셋 v0.05 목록 시트 1276행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-024 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Stopping | 언어셋 v0.05 목록 시트 1277행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-025 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Partial Running | 언어셋 v0.05 목록 시트 1278행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-026 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Paused | 언어셋 v0.05 목록 시트 1279행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-037 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Error | 언어셋 v0.05 목록 시트 1280행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-018 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Event | 언어셋 v0.05 목록 시트 1283행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-005 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Instrument | 언어셋 v0.05 목록 시트 1284행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-007 | Dashboard | LI-DAS | 삭제 | Door Control |  | 언어셋 v0.05 목록 시트 1285행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-011 | Dashboard | LI-DAS | 추가 |  | Door | 언어셋 v0.05 목록 시트 1286행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-042 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Open | 언어셋 v0.05 목록 시트 1287행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-043 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Closed | 언어셋 v0.05 목록 시트 1288행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-IVT-005 | Dashboard | TI-DAS / LI-DAS | 삭제 | Requirements for Run Completion |  | 언어셋 v0.05 목록 시트 1289행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-027 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Inventory Status | 언어셋 v0.05 목록 시트 1290행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-028 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Insufficient | 언어셋 v0.05 목록 시트 1292행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-029 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Low | 언어셋 v0.05 목록 시트 1293행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-009 | Dashboard | TI-DAS / LI-DAS | 변경 | Shown during active runs | Shown only if system running or Inbound Trolley docked | 언어셋 v0.05 목록 시트 1294행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-030 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Full | 언어셋 v0.05 목록 시트 1296행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-031 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Almost Full | 언어셋 v0.05 목록 시트 1297행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-010 | Dashboard | LI-DAS | 삭제 | Initialization in Progress |  | 언어셋 v0.05 목록 시트 1299행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-011 | Dashboard | LI-DAS | 삭제 | Please wait while the system is being initialized. |  | 언어셋 v0.05 목록 시트 1300행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-012 | Dashboard | LI-DAS | 삭제 | Run(Test) is being stopped |  | 언어셋 v0.05 목록 시트 1301행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-013 | Dashboard | LI-DAS | 삭제 | System is stopping. Please wait. |  | 언어셋 v0.05 목록 시트 1302행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-LOG-028 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Shut Down | 언어셋 v0.05 목록 시트 1303행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-076 | Dashboard | TI-DAS / LI-DAS | 추가 |  | Admin | 언어셋 v0.05 목록 시트 1304행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-075 | Dashboard | TI-DAS / LI-DAS | 추가 |  | User | 언어셋 v0.05 목록 시트 1305행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-032 | Dashboard (All) | TI-ADS-P | 추가 |  | Edit Display Name | 언어셋 v0.05 목록 시트 1306행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-033 | Dashboard (All) | TI-ADS-P | 추가 |  | Display Name | 언어셋 v0.05 목록 시트 1307행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-034 | Dashboard (All) | TI-ADS-P | 추가 |  | Change how this instrument appears on your dashboard. | 언어셋 v0.05 목록 시트 1308행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-021 | Dashboard (All) | TI-ADS-P | 추가 |  | Cancel | 언어셋 v0.05 목록 시트 1309행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-022 | Dashboard (All) | TI-ADS-P | 추가 |  | Save | 언어셋 v0.05 목록 시트 1310행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-035 | Dashboard (All) | TI-ADS | 추가 |  | Enter | 언어셋 v0.05 목록 시트 1311행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-001 | Dashboard (All) | TI-ADS | 추가 |  | Today’s Orders | 언어셋 v0.05 목록 시트 1312행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-002 | Dashboard (All) | TI-ADS | 추가 |  | Orders | 언어셋 v0.05 목록 시트 1313행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-014 | Dashboard (All) | TI-ADS | 추가 |  | Pending | 언어셋 v0.05 목록 시트 1314행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-015 | Dashboard (All) | TI-ADS | 추가 |  | In Progress | 언어셋 v0.05 목록 시트 1315행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-016 | Dashboard (All) | TI-ADS | 추가 |  | Completed | 언어셋 v0.05 목록 시트 1316행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-023 | Dashboard (All) | TI-ADS | 추가 |  | Running | 언어셋 v0.05 목록 시트 1317행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-022 | Dashboard (All) | TI-ADS | 추가 |  | Ready | 언어셋 v0.05 목록 시트 1318행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-026 | Dashboard (All) | TI-ADS | 추가 |  | Paused | 언어셋 v0.05 목록 시트 1319행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-037 | Dashboard (All) | TI-ADS | 추가 |  | Error | 언어셋 v0.05 목록 시트 1320행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-018 | Dashboard (All) | TI-ADS | 추가 |  | Event | 언어셋 v0.05 목록 시트 1321행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-005 | Dashboard (All) | TI-ADS | 추가 |  | Instrument | 언어셋 v0.05 목록 시트 1322행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-022 | Dashboard (All) | TI-ADS | 추가 |  | Test Status | 언어셋 v0.05 목록 시트 1323행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-023 | Dashboard (All) | TI-ADS | 추가 |  | Total Batches | 언어셋 v0.05 목록 시트 1324행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-024 | Dashboard (All) | TI-ADS | 추가 |  | Remaining Time | 언어셋 v0.05 목록 시트 1325행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-026 | Dashboard (All) | TI-ADS | 추가 |  | Elapsed | 언어셋 v0.05 목록 시트 1326행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-027 | Dashboard (All) | TI-ADS | 추가 |  | Estimated Total | 언어셋 v0.05 목록 시트 1327행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-028 | Dashboard (All) | TI-ADS | 추가 |  | 00h 00m | 언어셋 v0.05 목록 시트 1328행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-017 | Dashboard (All) | TI-ADS | 추가 |  | Processed | 언어셋 v0.05 목록 시트 1329행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-SPT-023 | Dashboard (All) | TI-ADS | 추가 |  | Total | 언어셋 v0.05 목록 시트 1330행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-024 | Dashboard (All) | TI-ADS | 추가 |  | STAT | 언어셋 v0.05 목록 시트 1331행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-018 | Dashboard (All) | TI-ADS | 추가 |  | Failed | 언어셋 v0.05 목록 시트 1332행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-019 | Dashboard (All) | TI-ADS | 추가 |  | Not Tested | 언어셋 v0.05 목록 시트 1333행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-027 | Dashboard (All) | TI-ADS | 추가 |  | Inventory Status | 언어셋 v0.05 목록 시트 1334행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-028 | Dashboard (All) | TI-ADS | 추가 |  | Insufficient | 언어셋 v0.05 목록 시트 1335행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-029 | Dashboard (All) | TI-ADS | 추가 |  | Low | 언어셋 v0.05 목록 시트 1336행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-IVT-010 | Dashboard (All) | TI-ADS | 추가 |  | Waste Bin/Bottle Status | 언어셋 v0.05 목록 시트 1337행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-030 | Dashboard (All) | TI-ADS | 추가 |  | Full | 언어셋 v0.05 목록 시트 1338행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-031 | Dashboard (All) | TI-ADS | 추가 |  | Almost Full | 언어셋 v0.05 목록 시트 1339행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-036 | Dashboard (All) | TI-ADS | 추가 |  | Instrument Status&Info | 언어셋 v0.05 목록 시트 1340행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-DAS-037 | Dashboard (All) | TI-ADS | 추가 |  | (Instrument Unit : ea) | 언어셋 v0.05 목록 시트 1341행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-LOG-028 | Dashboard (All) | TI-ADS | 추가 |  | Shut Down | 언어셋 v0.05 목록 시트 1342행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-076 | Dashboard (All) | TI-ADS | 추가 |  | Admin | 언어셋 v0.05 목록 시트 1343행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-075 | Dashboard (All) | TI-ADS | 추가 |  | User | 언어셋 v0.05 목록 시트 1344행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-001 | Material Setup | LI-TSS-LTG / LI-TSS-LTG-01-01 / LI-TSS-LTG-01-02 / LI-TSS-LTG-02-01 / LI-TSS-LTG-02-02 | 변경 | Lot Grouping | Group Lots | 언어셋 v0.05 목록 시트 1345행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-003 | Material Setup | LI-TSS-LTG / LI-TSS-LTG-01-01 / LI-TSS-LTG-01-02 | 변경 | MB/PK reagent grouping | Group Universal Cartridge Kit | 언어셋 v0.05 목록 시트 1347행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-004 | Material Setup | LI-TSS-LTG / LI-TSS-LTG-02-01 / LI-TSS-LTG-02-02 | 변경 | IC reagent grouping | Group PCR Reagent Kit | 언어셋 v0.05 목록 시트 1348행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-009 | Material Setup | LI-TSS-LTG-01-01 | 변경 | Scan the PK tube barcode that is in the same boxas the EB tub. | Scan the PK tube barcode that is in the same box as the EB tub. | 언어셋 v0.05 목록 시트 1354행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-011 | Material Setup | LI-TSS-LTG-01-01 / LI-TSS-LTG-01-02 | 변경 | MB/PK reagent grouping details | Group Universal Cartridge Kit details | 언어셋 v0.05 목록 시트 1356행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-180 | Material Setup | LI-TSS-LTG-01-01 / LI-TSS-LTG-02-01 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-03-02 / LI-TSS-CMP-01 / LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-02-02 / LI-TSS-PSI-PKI-03 / LI-TSS-PSI-LPR-03 / LI-TSS-DXI-01 / LI-TSS-DXI-02 / LI-TSS-DXI-03 / LI-TSS-DXI-04 / LI-TSS-DXI-05 / LI-TSS-DXI-06 | 추가 |  | Remove | 언어셋 v0.05 목록 시트 1360행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-022 | Material Setup | LI-TSS-LTG-01-01 / LI-TSS-LTG-02-01 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-03-02 | 삭제 | Reset |  | 언어셋 v0.05 목록 시트 1361행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-020 | Material Setup | LI-TSS-LTG-01-02 / LI-TSS-LTG-02-02 | 삭제 | Perform additional work or proceed to the next step. |  | 언어셋 v0.05 목록 시트 1368행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-025 | Material Setup | LI-TSS-LTG-02-01 / LI-TSS-LTG-02-02 | 변경 | IC reagent grouping details | Group PCR Reagent Kit details | 언어셋 v0.05 목록 시트 1373행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-029 | Material Setup | LI-TSS-LTG-02-02 | 삭제 | The IC setup is complete. |  | 언어셋 v0.05 목록 시트 1377행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-181 | Material Setup | LI-TSS-CMP-01 | 추가 |  | Select positions to remove | 언어셋 v0.05 목록 시트 1378행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STA-020 | Material Setup | LI-TSS-CMP-01 | 추가 |  | Select All | 언어셋 v0.05 목록 시트 1379행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-004 | Material Setup | LI-TSS-CMP-01 | 추가 |  | Disabled | 언어셋 v0.05 목록 시트 1380행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-182 | Material Setup | LI-TSS-CMP-01 | 추가 |  | Unselected | 언어셋 v0.05 목록 시트 1381행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-183 | Material Setup | LI-TSS-CMP-01 / LI-TSS-RGE-02 | 추가 |  | Selected | 언어셋 v0.05 목록 시트 1382행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-184 | Material Setup | LI-TSS-CMP-01 | 추가 |  | First PCR box | 언어셋 v0.05 목록 시트 1383행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-185 | Material Setup | LI-TSS-CMP-01 | 추가 |  | Second PCR box | 언어셋 v0.05 목록 시트 1384행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-039 | Material Setup | LI-TSS-CMP-01 | 추가 |  | Close | 언어셋 v0.05 목록 시트 1385행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-030 | Material Setup | LI-TSS-PSI / LI-TSS-PSI-SAM / LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 / LI-TSS-PSI-SAM-02-01 / LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-02-03 / LI-TSS-PSI-SAM-03-01 / LI-TSS-PSI-SAM-03-02 / LI-TSS-PSI-SAM-03-03 | 변경 | Carrier Setup | Prepare Carrier | 언어셋 v0.05 목록 시트 1386행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-032 | Material Setup | LI-TSS-PSI / LI-TSS-PSI-SAM | 변경 | Load samples into trolley | Load Samples into Trolley | 언어셋 v0.05 목록 시트 1388행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-033 | Material Setup | LI-TSS-PSI / LI-TSS-PSI-SAM / LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 | 변경 | Sample into socket | Load Samples into Socket | 언어셋 v0.05 목록 시트 1389행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-034 | Material Setup | LI-TSS-PSI / LI-TSS-PSI-SAM / LI-TSS-PSI-SAM-02-01 / LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-02-03 | 변경 | Socket into tray | Load Socket into Tray | 언어셋 v0.05 목록 시트 1390행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-035 | Material Setup | LI-TSS-PSI / LI-TSS-PSI-SAM / LI-TSS-PSI-SAM-03-01 / LI-TSS-PSI-SAM-03-02 / LI-TSS-PSI-SAM-03-03 | 변경 | Tray into trolley | Load Tray into Trolley | 언어셋 v0.05 목록 시트 1391행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-036 | Material Setup | LI-TSS-PSI | 변경 | Load consumables and reagents into trolley | Load Consumables and Reagents into Trolley | 언어셋 v0.05 목록 시트 1392행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-037 | Material Setup | LI-TSS-PSI | 변경 | Consumable and Reagent into tray | Load Consumables and Reagents into Tray | 언어셋 v0.05 목록 시트 1393행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-038 | Material Setup | LI-TSS-PSI | 변경 | Load PK/IC Tube | Load PK/IC Tubes | 언어셋 v0.05 목록 시트 1394행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-039 | Material Setup | LI-TSS-PSI | 변경 | Load PCR reagents | Load PCR Reagents | 언어셋 v0.05 목록 시트 1395행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-040 | Material Setup | LI-TSS-PSI | 변경 | Load MM Tube | Load MM Tubes | 언어셋 v0.05 목록 시트 1396행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-046 | Material Setup | LI-TSS-PSI-SAM-01-01 | 삭제 | Once the scan in complete, you will be taken to the next screen. |  | 언어셋 v0.05 목록 시트 1403행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-RUN-025 | Material Setup | LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-02-01 / LI-TSS-PSI-SAM-03-01 | 추가 |  | Next | 언어셋 v0.05 목록 시트 1404행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-050 | Material Setup | LI-TSS-PSI-SAM-01-02 | 변경 | Load the socket onto rack. | Load the socket onto the rack. | 언어셋 v0.05 목록 시트 1408행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-186 | Material Setup | LI-TSS-PSI-SAM-01-03 | 추가 |  | Sample Tube ID | 언어셋 v0.05 목록 시트 1416행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-060 | Material Setup | LI-TSS-PSI-SAM-01-04 | 변경 | If you need to set up another socket, click the [Add New] button or scan the barcode on the new sample tube | If you need to set up another socket, click the [Add New] button or scan the barcode on the new sample tube. | 언어셋 v0.05 목록 시트 1419행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-068 | Material Setup | LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-03-02 | 변경 | STEP 1-3 Repeat | STEP 1~3 Repeat | 언어셋 v0.05 목록 시트 1427행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-070 | Material Setup | LI-TSS-PSI-SAM-02-02 | 변경 | Scan the QR code on the tray location to load. | Scan the QR code on the tray slot to load. | 언어셋 v0.05 목록 시트 1429행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-071 | Material Setup | LI-TSS-PSI-SAM-02-02 | 변경 | Place the rack on the tray with the QR code facing right. | Place the socket on the tray with the QR code facing right. | 언어셋 v0.05 목록 시트 1430행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-072 | Material Setup | LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-03-02 | 삭제 | If you proceed to the next screen while a tray remains empty, click the [Next] button below. |  | 언어셋 v0.05 목록 시트 1431행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-124 | Material Setup | LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-03-02 | 추가 |  | If you proceed to the next screen while a tray remains empty, click the [Done] button below. | 언어셋 v0.05 목록 시트 1432행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-073 | Material Setup | LI-TSS-PSI-SAM-02-02 | 변경 | Number of filled sections in the tray | Number of filled slots in the tray | 언어셋 v0.05 목록 시트 1433행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-074 | Material Setup | LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-03-02 | 삭제 | The scan has been completed. |  | 언어셋 v0.05 목록 시트 1434행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-083 | Material Setup | LI-TSS-PSI-SAM-03-02 | 변경 | Scan the QR code on the trolley shelf. | Scan the QR code on the trolley floor. | 언어셋 v0.05 목록 시트 1443행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-084 | Material Setup | LI-TSS-PSI-SAM-03-02 | 변경 | Insert the tray into the scanned trolley location. | Insert the tray into the scanned trolley floor. | 언어셋 v0.05 목록 시트 1444행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-085 | Material Setup | LI-TSS-PSI-SAM-03-02 | 변경 | Number of filled shelf in the trolley | Number of filled floors in the trolley | 언어셋 v0.05 목록 시트 1445행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-086 | Material Setup | LI-TSS-PSI-SAM-03-03 | 변경 | New trolley | New | 언어셋 v0.05 목록 시트 1446행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-037 | Material Setup | LI-TSS-PSI-LCR / LI-TSS-PSI-LCR-01-01 / LI-TSS-PSI-LCR-01-02 / LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-01-04 | 변경 | Consumable and Reagent into tray | Load Consumables and Reagents into Tray | 언어셋 v0.05 목록 시트 1450행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-035 | Material Setup | LI-TSS-PSI-LCR / LI-TSS-PSI-LCR-02-01 / LI-TSS-PSI-LCR-02-02 / LI-TSS-PSI-LCR-02-03 | 변경 | Tray into trolley | Load Tray into Trolley | 언어셋 v0.05 목록 시트 1451행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-096 | Material Setup | LI-TSS-PSI-LCR-01-01 / LI-TSS-PSI-LCR-01-02 / LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-01-04 | 변경 | Check the consumable & reagent | Check required quantities | 언어셋 v0.05 목록 시트 1461행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-147 | Material Setup | LI-TSS-PSI-LCR-01-01 / LI-TSS-PSI-LCR-01-02 / LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-01-04 | 변경 | Scan loaded socket | Load Materials | 언어셋 v0.05 목록 시트 1463행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-260 | Material Setup | LI-TSS-PSI-LCR-01-02 / LI-TSS-PSI-LCR-02-01 / LI-TSS-PSI-PKI-02 / LI-TSS-PSI-LPR-02 / LI-TSS-PSI-LMM-01 | 추가 |  | Scan | 언어셋 v0.05 목록 시트 1470행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-068 | Material Setup | LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-02-02 | 변경 | STEP 1-3 Repeat | STEP 1~3 Repeat | 언어셋 v0.05 목록 시트 1477행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-261 | Material Setup | LI-TSS-PSI-LCR-01-03 | 추가 |  | * Note: For a reusable socket or Tub frame, proceed to step 2 after scanning the QR code. | 언어셋 v0.05 목록 시트 1480행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-070 | Material Setup | LI-TSS-PSI-LCR-01-03 | 변경 | Scan the QR code on the tray location to load. | Scan the QR code on the tray slot to load. | 언어셋 v0.05 목록 시트 1481행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-073 | Material Setup | LI-TSS-PSI-LCR-01-03 | 변경 | Number of filled sections in the tray | Number of filled slots in the tray | 언어셋 v0.05 목록 시트 1484행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-022 | Material Setup | LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-02-02 / LI-TSS-PSI-PKI-03 | 삭제 | Reset |  | 언어셋 v0.05 목록 시트 1488행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-074 | Material Setup | LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-02-02 | 삭제 | The scan has been completed. |  | 언어셋 v0.05 목록 시트 1489행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-020 | Material Setup | LI-TSS-PSI-LCR-01-04 / LI-TSS-PSI-PKI-04 | 삭제 | Perform additional work or proceed to the next step. |  | 언어셋 v0.05 목록 시트 1502행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-265 | Material Setup | LI-TSS-PSI-LCR-02-02 | 추가 |  | Scan the QR code on the tray loaded with consumables/reagents. | 언어셋 v0.05 목록 시트 1509행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-083 | Material Setup | LI-TSS-PSI-LCR-02-02 | 변경 | Scan the QR code on the trolley shelf. | Scan the QR code on the trolley floor. | 언어셋 v0.05 목록 시트 1510행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-084 | Material Setup | LI-TSS-PSI-LCR-02-02 | 변경 | Insert the tray into the scanned trolley location. | Insert the tray into the scanned trolley floor. | 언어셋 v0.05 목록 시트 1511행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-263 | Material Setup | LI-TSS-PSI-LCR-02-02 | 추가 |  | * Note: Only empty trays can be loaded on trolley 1F. | 언어셋 v0.05 목록 시트 1512행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-085 | Material Setup | LI-TSS-PSI-LCR-02-02 | 변경 | Number of filled shelf in the trolley | Number of filled floors in the trolley | 언어셋 v0.05 목록 시트 1515행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-086 | Material Setup | LI-TSS-PSI-LCR-02-03 | 추가 |  | New | 언어셋 v0.05 목록 시트 1516행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-121 | Material Setup | LI-TSS-PSI-PKI-02 | 변경 | Load the G1 socket shown on the screen onto the rack. | Load the G10 socket shown on the screen onto the rack. | 언어셋 v0.05 목록 시트 1529행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-264 | Material Setup | LI-TSS-PSI-PKI-03 | 추가 |  | If you proceed to the next screen while a socket remains empty, click the [Done] button below. | 언어셋 v0.05 목록 시트 1535행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-057 | Material Setup | LI-TSS-PSI-PKI-03 | 추가 |  | Number of filled holes in the socket | 언어셋 v0.05 목록 시트 1536행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-086 | Material Setup | LI-TSS-PSI-PKI-04 | 변경 | New socket | New | 언어셋 v0.05 목록 시트 1537행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-127 | Material Setup | LI-TSS-PSI-PKI-04 | 변경 | If you need to set up another PK/IC tube, click the [Add New] button or scan the QR code on on the new socket. | If you need to set up another PK/IC tube, click the [Add New] button or scan the QR code on the new socket. | 언어셋 v0.05 목록 시트 1539행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-134 | Material Setup | LI-TSS-PSI-LPR-03 | 삭제 | Scan the barcode on the PCR reagent box |  | 언어셋 v0.05 목록 시트 1552행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-136 | Material Setup | LI-TSS-PSI-LPR-03 | 변경 | Load the reagent tube into the highlighted slot. | Load the PCR box into the highlighted slot. | 언어셋 v0.05 목록 시트 1554행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-101 | Material Setup | LI-TSS-PSI-LPR-03 | 삭제 | Required Quantity |  | 언어셋 v0.05 목록 시트 1557행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-138 | Material Setup | LI-TSS-PSI-LPR-03 | 변경 | Number of filled PCR box in the socket | Number of filled PCR boxes in the socket | 언어셋 v0.05 목록 시트 1558행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-022 | Material Setup | LI-TSS-PSI-LPR-03 | 삭제 | Reset |  | 언어셋 v0.05 목록 시트 1559행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-086 | Material Setup | LI-TSS-PSI-LPR-04 / LI-TSS-PSI-LMM-03 | 추가 |  | New | 언어셋 v0.05 목록 시트 1561행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-101 | Material Setup | LI-TSS-PSI-LPR-04 | 삭제 | Required Quantity |  | 언어셋 v0.05 목록 시트 1565행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-059 | Material Setup | LI-TSS-PSI-LPR-04 | 삭제 | The socket setup is complete. |  | 언어셋 v0.05 목록 시트 1568행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-020 | Material Setup | LI-TSS-PSI-LPR-04 | 삭제 | Perform additional work or proceed to the next step. |  | 언어셋 v0.05 목록 시트 1569행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-042 | Material Setup | LI-TSS-PSI-LMM-01 | 삭제 | Scan the socket |  | 언어셋 v0.05 목록 시트 1571행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-044 | Material Setup | LI-TSS-PSI-LMM-01 | 삭제 | Confirm the socket |  | 언어셋 v0.05 목록 시트 1573행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-066 | Material Setup | LI-TSS-PSI-LMM-01 | 삭제 | Once the scan is complete, you will be taken to the next screen. |  | 언어셋 v0.05 목록 시트 1575행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-025 | Material Setup | LI-TSS-PSI-LMM-02 | 삭제 | Done |  | 언어셋 v0.05 목록 시트 1580행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-125 | Material Setup | LI-TSS-PSI-LMM-03 | 삭제 | New socket |  | 언어셋 v0.05 목록 시트 1581행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-061 | Material Setup | LI-TSS-PSI-LMM-03 | 삭제 | Click [Finish] to go to the Carrier manual screen. |  | 언어셋 v0.05 목록 시트 1584행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-018 | Material Setup | LI-TSS-PSI-LMM-03 | 삭제 | Add new |  | 언어셋 v0.05 목록 시트 1585행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-019 | Material Setup | LI-TSS-PSI-LMM-03 | 삭제 | Finish |  | 언어셋 v0.05 목록 시트 1586행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-145 | Material Setup | LI-TSS-PSI-LMM-03 | 삭제 | The MM tube loading is complete. |  | 언어셋 v0.05 목록 시트 1587행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-020 | Material Setup | LI-TSS-PSI-LMM-03 | 삭제 | Perform additional work or proceed to the next step. |  | 언어셋 v0.05 목록 시트 1588행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-147 | Material Setup | LI-TSS-DXI / LI-TSS-DXI-01 / LI-TSS-DXI-02 / LI-TSS-DXI-03 / LI-TSS-DXI-04 / LI-TSS-DXI-05 / LI-TSS-DXI-06 / LI-TSS-DXI-07 / LI-TSS-DXI-08 / LI-TSS-DXI-09 | 변경 | Drawer Loading | Load Materials | 언어셋 v0.05 목록 시트 1589행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-149 | Material Setup | LI-TSS-DXI / LI-TSS-DXI-08 / LI-TSS-DXI-09 / LI-TSS-WBM / LI-TSS-WBM-P / LI-INS-01-P | 변경 | Scan the QR code on the storage that requires a manual. | Please scan the QR code in area. | 언어셋 v0.05 목록 시트 1591행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-420 | Material Setup | LI-TSS-DXI / LI-TSS-DXI-08 / LI-TSS-DXI-09 / LI-TSS-WBM / LI-TSS-WBM-P / LI-INS-01-P | 추가 |  | View guide | 언어셋 v0.05 목록 시트 1592행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-421 | Material Setup | LI-TSS-DXI / LI-TSS-DXI-08 / LI-TSS-DXI-09 / LI-TSS-WBM / LI-TSS-WBM-P / LI-INS-01-P | 추가 |  | Touch the green area to open the module door. | 언어셋 v0.05 목록 시트 1593행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-422 | Material Setup | LI-TSS-DXI / LI-TSS-DXI-08 / LI-TSS-DXI-09 / LI-TSS-WBM / LI-TSS-WBM-P / LI-INS-01-P | 추가 |  | Scan the blue area to open the storage unit. | 언어셋 v0.05 목록 시트 1594행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-013 | Material Setup | LI-TSS-DXI / LI-TSS-DXI-08 / LI-TSS-DXI-09 / LI-TSS-WBM / LI-TSS-WBM-P / LI-INS-01-P | 추가 |  | Unlock | 언어셋 v0.05 목록 시트 1595행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-150 | Material Setup | LI-TSS-DXI / LI-TSS-DXI-08 / LI-TSS-DXI-09 / LI-TSS-WBM / LI-TSS-WBM-P / LI-INS-01-P | 변경 | QR code scan | QR code | 언어셋 v0.05 목록 시트 1596행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-423 | Material Setup | LI-TSS-DXI / LI-TSS-DXI-08 / LI-TSS-DXI-09 | 추가 |  | Refill Cartridge Cap | 언어셋 v0.05 목록 시트 1599행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-424 | Material Setup | LI-TSS-DXI / LI-TSS-DXI-08 / LI-TSS-DXI-09 | 추가 |  | Refill Tub Cap | 언어셋 v0.05 목록 시트 1600행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-068 | Material Setup | LI-TSS-DXI-01 / LI-TSS-DXI-02 / LI-TSS-DXI-04 | 변경 | STEP 1-3 Repeat | STEP 1~3 Repeat | 언어셋 v0.05 목록 시트 1604행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-153 | Material Setup | LI-TSS-DXI-01 | 변경 | Scan the barcode on the consumable or socket.(For the tub, scan the barcode on the frame, and then scan the tub barcode) | Scan the barcode on the socket. | 언어셋 v0.05 목록 시트 1605행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-154 | Material Setup | LI-TSS-DXI-01 / LI-TSS-DXI-02 / LI-TSS-DXI-04 / LI-TSS-DXI-06 | 변경 | Scan the QR code on the storage location to load. | Scan the QR code on the storage slot to load. | 언어셋 v0.05 목록 시트 1606행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-157 | Material Setup | LI-TSS-DXI-01 / LI-TSS-DXI-02 / LI-TSS-DXI-03 / LI-TSS-DXI-04 / LI-TSS-DXI-05 / LI-TSS-DXI-06 / LI-TSS-DXI-07 | 변경 | Click [Done] to go to the Drawer Loading manual. | Click [Done] to go to the Load Materials manual. | 언어셋 v0.05 목록 시트 1611행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-158 | Material Setup | LI-TSS-DXI-01 / LI-TSS-DXI-02 / LI-TSS-DXI-03 / LI-TSS-DXI-04 / LI-TSS-DXI-05 / LI-TSS-DXI-06 | 변경 | Number of filled sections in the storage | Number of filled slots in the storage | 언어셋 v0.05 목록 시트 1612행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-022 | Material Setup | LI-TSS-DXI-01 | 삭제 | Reset |  | 언어셋 v0.05 목록 시트 1613행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-074 | Material Setup | LI-TSS-DXI-01 | 삭제 | The scan has been completed. |  | 언어셋 v0.05 목록 시트 1615행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-02 | 삭제 | Step |  | 언어셋 v0.05 목록 시트 1616행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-068 | Material Setup | LI-TSS-DXI-02 | 삭제 | STEP 1-3 Repeat |  | 언어셋 v0.05 목록 시트 1618행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-154 | Material Setup | LI-TSS-DXI-02 | 삭제 | Scan the QR code on the storage location to load. |  | 언어셋 v0.05 목록 시트 1620행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-055 | Material Setup | LI-TSS-DXI-02 | 삭제 | Repeat the action until you have loaded the required quantity. |  | 언어셋 v0.05 목록 시트 1622행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-156 | Material Setup | LI-TSS-DXI-02 | 삭제 | Close the door and check the lock. |  | 언어셋 v0.05 목록 시트 1623행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-157 | Material Setup | LI-TSS-DXI-02 | 삭제 | Click [Done] to go to the Drawer Loading manual. |  | 언어셋 v0.05 목록 시트 1624행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-158 | Material Setup | LI-TSS-DXI-02 | 삭제 | Number of filled sections in the storage |  | 언어셋 v0.05 목록 시트 1625행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-022 | Material Setup | LI-TSS-DXI-02 | 삭제 | Reset |  | 언어셋 v0.05 목록 시트 1626행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-02 | 삭제 | Done |  | 언어셋 v0.05 목록 시트 1627행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-074 | Material Setup | LI-TSS-DXI-02 | 삭제 | The scan has been completed. |  | 언어셋 v0.05 목록 시트 1628행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-425 | Material Setup | LI-TSS-DXI-02 | 추가 |  | Scan the QR code of the Spin Tip. | 언어셋 v0.05 목록 시트 1629행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-426 | Material Setup | LI-TSS-DXI-02 | 추가 |  | Place the Spin Tip on the scanned location with the barcode facing front. | 언어셋 v0.05 목록 시트 1630행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-427 | Material Setup | LI-TSS-DXI-02 / LI-TSS-DXI-03 / LI-TSS-DXI-04 / LI-TSS-DXI-05 / LI-TSS-DXI-06 / LI-TSS-DXI-07 | 추가 |  | Check the required quantities for each reagent. | 언어셋 v0.05 목록 시트 1632행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-03 | 삭제 | Step |  | 언어셋 v0.05 목록 시트 1633행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-055 | Material Setup | LI-TSS-DXI-03 | 삭제 | Repeat the action until you have loaded the required quantity. |  | 언어셋 v0.05 목록 시트 1636행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-156 | Material Setup | LI-TSS-DXI-03 | 삭제 | Close the door and check the lock. |  | 언어셋 v0.05 목록 시트 1637행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-157 | Material Setup | LI-TSS-DXI-03 | 삭제 | Click [Done] to go to the Drawer Loading manual. |  | 언어셋 v0.05 목록 시트 1638행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-158 | Material Setup | LI-TSS-DXI-03 | 삭제 | Number of filled sections in the storage |  | 언어셋 v0.05 목록 시트 1639행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-022 | Material Setup | LI-TSS-DXI-03 | 삭제 | Reset |  | 언어셋 v0.05 목록 시트 1640행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-03 | 삭제 | Done |  | 언어셋 v0.05 목록 시트 1641행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-074 | Material Setup | LI-TSS-DXI-03 | 삭제 | The scan has been completed. |  | 언어셋 v0.05 목록 시트 1642행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-04 | 삭제 | Step |  | 언어셋 v0.05 목록 시트 1643행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-102 | Material Setup | LI-TSS-DXI-04 | 삭제 | Barcode: Right Side |  | 언어셋 v0.05 목록 시트 1644행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-068 | Material Setup | LI-TSS-DXI-04 | 삭제 | STEP 1-3 Repeat |  | 언어셋 v0.05 목록 시트 1645행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-154 | Material Setup | LI-TSS-DXI-04 | 삭제 | Scan the QR code on the storage location to load. |  | 언어셋 v0.05 목록 시트 1647행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-055 | Material Setup | LI-TSS-DXI-04 | 삭제 | Repeat the action until you have loaded the required quantity. |  | 언어셋 v0.05 목록 시트 1649행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-156 | Material Setup | LI-TSS-DXI-04 | 삭제 | Close the door and check the lock. |  | 언어셋 v0.05 목록 시트 1650행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-157 | Material Setup | LI-TSS-DXI-04 | 삭제 | Click [Done] to go to the Drawer Loading manual. |  | 언어셋 v0.05 목록 시트 1651행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-158 | Material Setup | LI-TSS-DXI-04 | 삭제 | Number of filled sections in the storage |  | 언어셋 v0.05 목록 시트 1652행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-022 | Material Setup | LI-TSS-DXI-04 | 삭제 | Reset |  | 언어셋 v0.05 목록 시트 1653행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-04 | 삭제 | Done |  | 언어셋 v0.05 목록 시트 1654행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-074 | Material Setup | LI-TSS-DXI-04 | 삭제 | The scan has been completed. |  | 언어셋 v0.05 목록 시트 1655행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-05 | 삭제 | Step |  | 언어셋 v0.05 목록 시트 1656행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-102 | Material Setup | LI-TSS-DXI-05 | 삭제 | Barcode: Right Side |  | 언어셋 v0.05 목록 시트 1657행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-166 | Material Setup | LI-TSS-DXI-05 | 변경 | Scan the barcode of the 1000μL Tip. | Scan the barcode of the 1000 μL Tip. | 언어셋 v0.05 목록 시트 1658행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-167 | Material Setup | LI-TSS-DXI-05 | 변경 | Insert the 1000 μl Tip into the storage with the barcode facing right. | Insert the 1000 μL Tip into the storage with the barcode facing right. | 언어셋 v0.05 목록 시트 1659행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-055 | Material Setup | LI-TSS-DXI-05 | 삭제 | Repeat the action until you have loaded the required quantity. |  | 언어셋 v0.05 목록 시트 1660행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-156 | Material Setup | LI-TSS-DXI-05 | 삭제 | Close the door and check the lock. |  | 언어셋 v0.05 목록 시트 1661행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-157 | Material Setup | LI-TSS-DXI-05 | 삭제 | Click [Done] to go to the Drawer Loading manual. |  | 언어셋 v0.05 목록 시트 1662행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-158 | Material Setup | LI-TSS-DXI-05 | 삭제 | Number of filled sections in the storage |  | 언어셋 v0.05 목록 시트 1663행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-022 | Material Setup | LI-TSS-DXI-05 | 삭제 | Reset |  | 언어셋 v0.05 목록 시트 1664행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-05 | 삭제 | Done |  | 언어셋 v0.05 목록 시트 1665행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-074 | Material Setup | LI-TSS-DXI-05 | 삭제 | The scan has been completed. |  | 언어셋 v0.05 목록 시트 1666행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-428 | Material Setup | LI-TSS-DXI-05 | 추가 |  | Scan the barcode of the PCR Plate. | 언어셋 v0.05 목록 시트 1667행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-429 | Material Setup | LI-TSS-DXI-05 | 추가 |  | Insert the PCR Plate into the storage with the barcode facing right. | 언어셋 v0.05 목록 시트 1668행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-06 | 삭제 | Step |  | 언어셋 v0.05 목록 시트 1669행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-067 | Material Setup | LI-TSS-DXI-06 | 삭제 | QR code: Right Side |  | 언어셋 v0.05 목록 시트 1670행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-154 | Material Setup | LI-TSS-DXI-06 | 삭제 | Scan the QR code on the storage location to load. |  | 언어셋 v0.05 목록 시트 1674행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-055 | Material Setup | LI-TSS-DXI-06 | 삭제 | Repeat the action until you have loaded the required quantity. |  | 언어셋 v0.05 목록 시트 1675행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-156 | Material Setup | LI-TSS-DXI-06 | 삭제 | Close the door and check the lock. |  | 언어셋 v0.05 목록 시트 1676행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-157 | Material Setup | LI-TSS-DXI-06 | 삭제 | Click [Done] to go to the Drawer Loading manual. |  | 언어셋 v0.05 목록 시트 1677행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-022 | Material Setup | LI-TSS-DXI-06 | 삭제 | Reset |  | 언어셋 v0.05 목록 시트 1678행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-06 | 삭제 | Done |  | 언어셋 v0.05 목록 시트 1679행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-074 | Material Setup | LI-TSS-DXI-06 | 삭제 | The scan has been completed. |  | 언어셋 v0.05 목록 시트 1680행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-430 | Material Setup | LI-TSS-DXI-06 | 추가 |  | PCR Reagents | 언어셋 v0.05 목록 시트 1681행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-07 | 삭제 | Step |  | 언어셋 v0.05 목록 시트 1682행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-175 | Material Setup | LI-TSS-DXI-07 | 변경 | Enter the number of sealing films loaded in the field below. | Enter the number of sealing films loaded in the field below and click the [save] button. | 언어셋 v0.05 목록 시트 1686행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-157 | Material Setup | LI-TSS-DXI-07 | 삭제 | Click [Done] to go to the Drawer Loading manual. |  | 언어셋 v0.05 목록 시트 1688행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-020 | Material Setup | LI-TSS-DXI-07 | 추가 |  | Apply | 언어셋 v0.05 목록 시트 1691행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-431 | Material Setup | LI-TSS-DXI-07 | 추가 |  | Remaining: {N} / Total films: {M} | 언어셋 v0.05 목록 시트 1692행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-TMG-025 | Material Setup | LI-TSS-DXI-07 | 삭제 | Remaining |  | 언어셋 v0.05 목록 시트 1693행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-179 | Material Setup | LI-TSS-DXI-07 | 삭제 | Total films |  | 언어셋 v0.05 목록 시트 1694행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-432 | Material Setup | LI-TSS-DXI-07 | 추가 |  | Applied film count for Plate Sealing ({N}) | 언어셋 v0.05 목록 시트 1695행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-433 | Material Setup | LI-TSS-DXI-07 | 추가 |  | Select [Done] to complete saving. | 언어셋 v0.05 목록 시트 1696행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-07 | 삭제 | Done |  | 언어셋 v0.05 목록 시트 1698행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-434 | Material Setup | LI-TSS-DXI-08 | 추가 |  | Buffer Cartridge Cap Refill | 언어셋 v0.05 목록 시트 1699행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-435 | Material Setup | LI-TSS-DXI-08 / LI-TSS-DXI-09 | 추가 |  | Spare Caps | 언어셋 v0.05 목록 시트 1700행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-436 | Material Setup | LI-TSS-DXI-08 / LI-TSS-DXI-09 | 추가 |  | Confirm refill | 언어셋 v0.05 목록 시트 1701행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-437 | Material Setup | LI-TSS-DXI-08 | 추가 |  | Open the module storage and refill the five Spare Caps. | 언어셋 v0.05 목록 시트 1702행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-438 | Material Setup | LI-TSS-DXI-08 / LI-TSS-DXI-09 | 추가 |  | After refilling, click [Confirm refill]. | 언어셋 v0.05 목록 시트 1703행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-439 | Material Setup | LI-TSS-DXI-09 | 추가 |  | Tub Cap Refill | 언어셋 v0.05 목록 시트 1704행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-440 | Material Setup | LI-TSS-DXI-09 | 추가 |  | Refill locations | 언어셋 v0.05 목록 시트 1705행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-441 | Material Setup | LI-TSS-DXI-09 | 추가 |  | Confirm all refills | 언어셋 v0.05 목록 시트 1706행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-442 | Material Setup | LI-TSS-DXI-09 | 추가 |  | Open the module door and refill the Tub Spare Caps in the trolley. | 언어셋 v0.05 목록 시트 1707행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-443 | Material Setup | LI-TSS-WBM / LI-TSS-WBM-P / LI-INS-01-P | 추가 |  | Empty Waste Bin | 언어셋 v0.05 목록 시트 1708행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-444 | Material Setup | LI-TSS-WBM / LI-TSS-WBM-P / LI-INS-01-P | 추가 |  | Select the unit to empty the waste bin. | 언어셋 v0.05 목록 시트 1709행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-IVT-034 | Material Setup | LI-TSS-WBM / LI-TSS-WBM-P | 추가 |  | Confirm Empty | 언어셋 v0.05 목록 시트 1710행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-446 | Material Setup | LI-TSS-WBM-P | 추가 |  | Confirm All Empty | 언어셋 v0.05 목록 시트 1711행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-003 | Material Setup | LI-TSS-WBM-P | 추가 |  | All | 언어셋 v0.05 목록 시트 1712행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-007 | Material Setup | LI-INS-01-P | 추가 |  | Door Control | 언어셋 v0.05 목록 시트 1713행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-014 | Material Setup | LI-INS-01-P | 추가 |  | Unlock all doors | 언어셋 v0.05 목록 시트 1714행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-STN-006 | Material Setup | LI-INS-01-P | 추가 |  | Items | 언어셋 v0.05 목록 시트 1715행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-011 | Material Setup | LI-INS-01-P | 추가 |  | Door | 언어셋 v0.05 목록 시트 1716행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-036 | Material Setup | LI-INS-01-P | 추가 |  | Door (Rear) | 언어셋 v0.05 목록 시트 1717행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-043 | Material Setup | LI-INS-01-P | 추가 |  | Closed | 언어셋 v0.05 목록 시트 1718행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-DAS-023 | Material Setup | LI-INS-01-P | 추가 |  | Running | 언어셋 v0.05 목록 시트 1719행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-029 | Material Setup | LI-INS-01-P | 추가 |  | Pausing | 언어셋 v0.05 목록 시트 1720행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-041 | Material Setup | LI-INS-01-P | 추가 |  | Pausing for door unlocking. Please wait. | 언어셋 v0.05 목록 시트 1721행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-039 | Material Setup | LI-INS-01-P | 추가 |  | * Close the door and press the 'Lock' button to resume the module | 언어셋 v0.05 목록 시트 1722행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-INS-053 | Material Setup | LI-INS-01-P | 추가 |  | Lock | 언어셋 v0.05 목록 시트 1723행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-447 | Material Setup | LI-TSS-RGE-01 / LI-TSS-RGE-02 | 추가 |  | View Trolley Info | 언어셋 v0.05 목록 시트 1724행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-448 | Material Setup | LI-TSS-RGE-01 / LI-TSS-RGE-02 | 추가 |  | View Trolley Info (Prep Consumable Trolley Only) | 언어셋 v0.05 목록 시트 1725행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-449 | Material Setup | LI-TSS-RGE-01 | 추가 |  | Prep consumable trolley | 언어셋 v0.05 목록 시트 1726행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-450 | Material Setup | LI-TSS-RGE-01 | 추가 |  | Scan a consumable trolley or select one from the list. | 언어셋 v0.05 목록 시트 1727행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-089 | Material Setup | LI-TSS-RGE-01 | 추가 |  | Select trolley | 언어셋 v0.05 목록 시트 1728행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-451 | Material Setup | LI-TSS-RGE-01 | 추가 |  | Select a consumable trolley below to view remaining quantities on the details page. | 언어셋 v0.05 목록 시트 1729행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-090 | Material Setup | LI-TSS-RGE-01 | 추가 |  | Trolley name | 언어셋 v0.05 목록 시트 1730행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-452 | Material Setup | LI-TSS-RGE-01 | 추가 |  | Remaining slots | 언어셋 v0.05 목록 시트 1731행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-453 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Check the trolley floor and tray slot | 언어셋 v0.05 목록 시트 1732행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-454 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Review available reagents, consumables, and corresponding handling guide. | 언어셋 v0.05 목록 시트 1733행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-455 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Trolley floor | 언어셋 v0.05 목록 시트 1734행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-456 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Tray slot | 언어셋 v0.05 목록 시트 1735행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-457 | Material Setup | LI-TSS-RGE-02 | 추가 |  | PK/IC Tube handling guide | 언어셋 v0.05 목록 시트 1736행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-458 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Standard Tube handling guide | 언어셋 v0.05 목록 시트 1737행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-459 | Material Setup | LI-TSS-RGE-02 | 추가 |  | DWP handling guide | 언어셋 v0.05 목록 시트 1738행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-460 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Tip/Swab handling guide | 언어셋 v0.05 목록 시트 1739행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-461 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Tub handling guide | 언어셋 v0.05 목록 시트 1740행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-EVT-017 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Status | 언어셋 v0.05 목록 시트 1741행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-462 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Empty | 언어셋 v0.05 목록 시트 1742행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-463 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Selectable | 언어셋 v0.05 목록 시트 1743행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-465 | Material Setup | LI-TSS-RGE-01 / LI-TSS-RGE-02 | 추가 |  | Cases | 언어셋 v0.05 목록 시트 1744행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-466 | Material Setup | LI-TSS-RGE-01 / LI-TSS-RGE-02 | 추가 |  | Case | 언어셋 v0.05 목록 시트 1745행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-467 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Remaining: {N} | 언어셋 v0.05 목록 시트 1746행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-468 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Cap needed | 언어셋 v0.05 목록 시트 1747행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-469 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Usable(PK) | 언어셋 v0.05 목록 시트 1748행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-470 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Usable(IC) | 언어셋 v0.05 목록 시트 1749행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-471 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Used | 언어셋 v0.05 목록 시트 1750행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-472 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Not used | 언어셋 v0.05 목록 시트 1751행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-473 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Remaining PK/IC Tubes are available for use. | 언어셋 v0.05 목록 시트 1752행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-474 | Material Setup | LI-TSS-RGE-02 | 추가 |  | * Note: Select a usable reagent to view remaining rxns count. | 언어셋 v0.05 목록 시트 1753행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-475 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Reload an available PK/IC Tube. | 언어셋 v0.05 목록 시트 1754행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-476 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Remaining Standard Tubes are available for use. | 언어셋 v0.05 목록 시트 1755행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-477 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Reload an available Standard Tube. | 언어셋 v0.05 목록 시트 1756행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-478 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Remaining DWP is available for use. | 언어셋 v0.05 목록 시트 1757행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-479 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Reload an available DWP. | 언어셋 v0.05 목록 시트 1758행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-480 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Remaining Tip/Swab is available for use. | 언어셋 v0.05 목록 시트 1759행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-481 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Reload an available Tip/Swab. | 언어셋 v0.05 목록 시트 1760행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-482 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Remaining Tub is available for use. | 언어셋 v0.05 목록 시트 1761행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-MAS-483 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Reload an available Tub and refill the cap. | 언어셋 v0.05 목록 시트 1762행 A열 | 하승현 |
| 2026-11-17 | v0.05 | ref: LID-MAS-019 | Material Setup | LI-TSS-RGE-02 | 추가 |  | Finish | 언어셋 v0.05 목록 시트 1763행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-TRM-010 | 공통 |  | 추가 |  | Ht Extraction | 언어셋 v0.05 A. 고유명사 / 용어집 시트 14행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-TRM-018 | 공통 |  | 추가 |  | Door (Rear) | 언어셋 v0.05 A. 고유명사 / 용어집 시트 22행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-TRM-183 | 공통 |  | 변경 | (엑셀에 변경 전 값 없음) | Buffer Dispense & Resuspension | 언어셋 v0.05 A. 고유명사 / 용어집 시트 187행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-TRM-210 | 공통 |  | 변경 | (엑셀에 변경 전 값 없음) | Mixing Time(min) | 언어셋 v0.05 A. 고유명사 / 용어집 시트 214행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-TRM-211 | 공통 |  | 변경 | (엑셀에 변경 전 값 없음) | Mixing Speed(rpm) | 언어셋 v0.05 A. 고유명사 / 용어집 시트 215행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-TRM-212 | 공통 |  | 변경 | (엑셀에 변경 전 값 없음) | Collect Time(sec) | 언어셋 v0.05 A. 고유명사 / 용어집 시트 216행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-TRM-213 | 공통 |  | 변경 | (엑셀에 변경 전 값 없음) | Vapor Time(min) | 언어셋 v0.05 A. 고유명사 / 용어집 시트 217행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-TRM-215 | 공통 |  | 변경 | (엑셀에 변경 전 값 없음) | On | 언어셋 v0.05 A. 고유명사 / 용어집 시트 219행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-TRM-216 | 공통 |  | 변경 | (엑셀에 변경 전 값 없음) | Off | 언어셋 v0.05 A. 고유명사 / 용어집 시트 220행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-001 | 공통 |  | 추가 |  | Dashboard (All) | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 5행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-004 | 공통 |  | 변경 | (엑셀에 변경 전 값 없음) | Group Lots | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 8행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-005 | 공통 |  | 변경 | (엑셀에 변경 전 값 없음) | Prepare Carrier | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 9행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-006 | 공통 |  | 변경 | (엑셀에 변경 전 값 없음) | Load Materials | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 10행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-007 | 공통 |  | 추가 |  | Empty Waste Bin | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 11행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-008 | 공통 |  | 추가 |  | View Trolley Info | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 12행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-021 | 공통 |  | 추가 |  | Instrument | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 25행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-022 | 공통 |  | 추가 |  | Inventory | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 26행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-023 | 공통 |  | 추가 |  | Event | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 27행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-030 | 공통 |  | 추가 |  | SMTP Setting | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 34행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-031 | 공통 |  | 추가 |  | Tube Setting | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 35행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-032 | 공통 |  | 추가 |  | Assay Pack Setting | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 36행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-034 | 공통 |  | 추가 |  | Run Report | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 38행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-035 | 공통 |  | 추가 |  | Program | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 39행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-036 | 공통 |  | 추가 |  | Manual | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 40행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-039 | 공통 |  | 추가 |  | Profile | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 43행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-040 | 공통 |  | 추가 |  | General | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 44행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-041 | 공통 |  | 추가 |  | Password | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 45행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-042 | 공통 |  | 추가 |  | Log Out | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 46행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-043 | 공통 |  | 추가 |  | Shut Down | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 47행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-044 | 공통 |  | 추가 |  | L-IOS | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 48행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-MEN-048 | 공통 |  | 추가 |  | Event | 언어셋 v0.05 B. 메뉴 / 내비게이션 시트 52행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-SCD-016 | 공통 |  | 추가 |  | Paused | 언어셋 v0.05 C. 상태값 / 코드값 시트 20행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-SCD-017 | 공통 |  | 추가 |  | Pausing | 언어셋 v0.05 C. 상태값 / 코드값 시트 21행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-SCD-036 | 공통 |  | 추가 |  | Almost Full | 언어셋 v0.05 C. 상태값 / 코드값 시트 40행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-SCD-037 | 공통 |  | 추가 |  | Available | 언어셋 v0.05 C. 상태값 / 코드값 시트 41행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-SCD-045 | 공통 |  | 추가 |  | Low | 언어셋 v0.05 C. 상태값 / 코드값 시트 49행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-SCD-046 | 공통 |  | 추가 |  | Sufficient | 언어셋 v0.05 C. 상태값 / 코드값 시트 50행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-SCD-050 | 공통 |  | 추가 |  | Admin | 언어셋 v0.05 C. 상태값 / 코드값 시트 54행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-SCD-051 | 공통 |  | 추가 |  | User | 언어셋 v0.05 C. 상태값 / 코드값 시트 55행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-SCD-052 | 공통 |  | 추가 |  | Y | 언어셋 v0.05 C. 상태값 / 코드값 시트 56행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-SCD-053 | 공통 |  | 추가 |  | N | 언어셋 v0.05 C. 상태값 / 코드값 시트 57행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-SCD-054 | 공통 |  | 추가 |  | Success | 언어셋 v0.05 C. 상태값 / 코드값 시트 58행 A열 | 하승현 |
| 2026-11-17 | v0.05 | LID-COM-BTN-019 | 공통 |  | 추가 |  | Resend | 언어셋 v0.05 D. 버튼 시트 23행 A열 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-007 | 공통 |  | 변경 | Prep Consumable Storage | Consumable Storage | 언어셋 v0.06 A. 고유명사 / 용어집 시트 11행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-008 | 공통 |  | 변경 | Sample Preparation | Sample Pre-treatment | 언어셋 v0.06 A. 고유명사 / 용어집 시트 12행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-022 | 공통 |  | 변경 | Sample Pretreatment (Upper) | Sample Processing (Upper) | 언어셋 v0.06 A. 고유명사 / 용어집 시트 26행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-023 | 공통 |  | 변경 | Sample Pretreatment (Lower) | Sample Processing (Lower) | 언어셋 v0.06 A. 고유명사 / 용어집 시트 27행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-024 | 공통 |  | 변경 | Sample Aliquot (Upper) | Sample Aliquoting (Upper) | 언어셋 v0.06 A. 고유명사 / 용어집 시트 28행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-025 | 공통 |  | 변경 | Sample Aliquot (Lower) | Sample Aliquoting (Lower) | 언어셋 v0.06 A. 고유명사 / 용어집 시트 29행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-039 | 공통 |  | 변경 | 1000μL Tip Storage | 1000 μL Tip Storage | 언어셋 v0.06 A. 고유명사 / 용어집 시트 43행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-040 | 공통 |  | 변경 | 300μL Tip Storage | 300 μL Tip Storage | 언어셋 v0.06 A. 고유명사 / 용어집 시트 44행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-079 | 공통 |  | 변경 | 1000μL Tip | 1000 μL Tip | 언어셋 v0.06 A. 고유명사 / 용어집 시트 83행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-080 | 공통 |  | 변경 | 300μL Tip | 300 μL Tip | 언어셋 v0.06 A. 고유명사 / 용어집 시트 84행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-084 | 공통 |  | 변경 | 1000μL Tip | 1000 μL Tip | 언어셋 v0.06 A. 고유명사 / 용어집 시트 88행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-085 | 공통 |  | 변경 | 300μL Tip | 300 μL Tip | 언어셋 v0.06 A. 고유명사 / 용어집 시트 89행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-086 | 공통 |  | 변경 | 300μL Tip | 300 μL Tip | 언어셋 v0.06 A. 고유명사 / 용어집 시트 90행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-217 | 공통 |  | 추가 |  | Standard Tube | 언어셋 v0.06 A. 고유명사 / 용어집 시트 110행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-218 | 공통 |  | 추가 |  | Tub | 언어셋 v0.06 A. 고유명사 / 용어집 시트 126행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-219 | 공통 |  | 추가 |  | Buffer Cartridge | 언어셋 v0.06 A. 고유명사 / 용어집 시트 127행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-220 | 공통 |  | 추가 |  | IC Tube | 언어셋 v0.06 A. 고유명사 / 용어집 시트 130행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-221 | 공통 |  | 추가 |  | PK/IC Tube | 언어셋 v0.06 A. 고유명사 / 용어집 시트 131행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-222 | 공통 |  | 추가 |  | PCR Box | 언어셋 v0.06 A. 고유명사 / 용어집 시트 132행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-223 | 공통 |  | 추가 |  | Trolley | 언어셋 v0.06 A. 고유명사 / 용어집 시트 227행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-224 | 공통 |  | 추가 |  | Tray | 언어셋 v0.06 A. 고유명사 / 용어집 시트 228행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-225 | 공통 |  | 추가 |  | Socket | 언어셋 v0.06 A. 고유명사 / 용어집 시트 229행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-226 | 공통 |  | 추가 |  | Rack | 언어셋 v0.06 A. 고유명사 / 용어집 시트 230행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-227 | 공통 |  | 추가 |  | Tube | 언어셋 v0.06 A. 고유명사 / 용어집 시트 231행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-TRM-228 | 공통 |  | 추가 |  | Set | 언어셋 v0.06 A. 고유명사 / 용어집 시트 232행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-MEN-031 | 공통 |  | 번역 수정 (German) | Röhrcheneinstellungen | Tube-Einstellungen | 언어셋 v0.06 B. 메뉴 / 내비게이션 시트 35행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-MEN-031 | 공통 |  | 번역 수정 (Portuguese) | Configuração de Tubos | Configuração de Tubes | 언어셋 v0.06 B. 메뉴 / 내비게이션 시트 35행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-MEN-031 | 공통 |  | 번역 수정 (Spanish) | Configuración de Tubos | Configuración de Tubes | 언어셋 v0.06 B. 메뉴 / 내비게이션 시트 35행 | 하승현 |
| 2026-11-19 | v0.06 | LID-COM-MEN-031 | 공통 |  | 번역 수정 (Italian) | Impostazioni Provette | Impostazioni Tube | 언어셋 v0.06 B. 메뉴 / 내비게이션 시트 35행 | 하승현 |
| 2026-11-19 | v0.06 | LID-LOG-009 | Login | TI-LOG / LI-LOG | 번역 수정 (German) | © Seegene Inc. Alle Rechte vorbehalten. | - | 언어셋 v0.06 목록 시트 80행 | 하승현 |
| 2026-11-19 | v0.06 | LID-LOG-009 | Login | TI-LOG / LI-LOG | 번역 수정 (Portuguese) | © Seegene Inc. Todos os direitos reservados. | - | 언어셋 v0.06 목록 시트 80행 | 하승현 |
| 2026-11-19 | v0.06 | LID-LOG-009 | Login | TI-LOG / LI-LOG | 번역 수정 (Spanish) | © Seegene Inc. Todos los derechos reservados. | - | 언어셋 v0.06 목록 시트 80행 | 하승현 |
| 2026-11-19 | v0.06 | LID-LOG-009 | Login | TI-LOG / LI-LOG | 번역 수정 (Italian) | © Seegene Inc. Tutti i diritti riservati. | - | 언어셋 v0.06 목록 시트 80행 | 하승현 |
| 2026-11-19 | v0.06 | LID-LOG-009 | Login | TI-LOG / LI-LOG | 번역 수정 (French) | © Seegene Inc. Tous droits réservés. | - | 언어셋 v0.06 목록 시트 80행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-040 | Run | LI-RUN-P | 번역 수정 (Portuguese) | Nenhuma Bandeja Detetada no Trolley 1F (Trolley de Consumíveis) | Nenhum Tray Detetado no Trolley 1F (Trolley de Consumíveis) | 언어셋 v0.06 목록 시트 106행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-040 | Run | LI-RUN-P | 번역 수정 (Spanish) | No se Detectó Ninguna Bandeja en el Carro 1F (Carro de Consumibles) | No se Detectó Ningún Tray en el Trolley 1F (Trolley de Consumibles) | 언어셋 v0.06 목록 시트 106행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-041 | Run | LI-RUN-P | 번역 수정 (Portuguese) | Coloque uma bandeja vazia no trolley 1F e tente novamente. | Coloque um tray vazio no trolley 1F e tente novamente. | 언어셋 v0.06 목록 시트 107행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-041 | Run | LI-RUN-P | 번역 수정 (Spanish) | Coloque una bandeja vacía en el carro 1F e inténtelo de nuevo. | Coloque un tray vacío en el trolley 1F e inténtelo de nuevo. | 언어셋 v0.06 목록 시트 107행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-009 | Run | LI-RUN-P | 번역 수정 (German) | Tür-Status | Door-Status | 언어셋 v0.06 목록 시트 113행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-009 | Run | LI-RUN-P | 번역 수정 (Portuguese) | Estado da Porta | Estado da Door | 언어셋 v0.06 목록 시트 113행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-009 | Run | LI-RUN-P | 번역 수정 (Spanish) | Estado de la Puerta | Estado de la Door | 언어셋 v0.06 목록 시트 113행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-009 | Run | LI-RUN-P | 번역 수정 (French) | État de la porte. | État de la Door. | 언어셋 v0.06 목록 시트 113행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-010 | Run | LI-RUN-P | 번역 수정 (German) | Bitte den Tür-Öffnungsstatus des Moduls prüfen. | Bitte den Door-Öffnungsstatus des Moduls prüfen. | 언어셋 v0.06 목록 시트 114행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-010 | Run | LI-RUN-P | 번역 수정 (Portuguese) | Verifique o estado de abertura da porta do módulo. | Verifique o estado de abertura da door do módulo. | 언어셋 v0.06 목록 시트 114행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-010 | Run | LI-RUN-P | 번역 수정 (Spanish) | Verifique el estado de apertura de la puerta del módulo. | Verifique el estado de apertura de la door del módulo. | 언어셋 v0.06 목록 시트 114행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-010 | Run | LI-RUN-P | 번역 수정 (French) | Veuillez vérifier l'état d'ouverture de la porte du module. | Veuillez vérifier l'état d'ouverture de la door du module. | 언어셋 v0.06 목록 시트 114행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-042 | Run | LI-RUN-01 / LI-RUN-02-01 / LI-RUN-02 / LI-RUN-03 | 번역 수정 (German) | Abfallbehälter prüfen | Waste Bin/Bottle prüfen | 언어셋 v0.06 목록 시트 122행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-042 | Run | LI-RUN-01 / LI-RUN-02-01 / LI-RUN-02 / LI-RUN-03 | 번역 수정 (Portuguese) | Verificar contentor de resíduos | Verificar waste bin/bottle | 언어셋 v0.06 목록 시트 122행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-042 | Run | LI-RUN-01 / LI-RUN-02-01 / LI-RUN-02 / LI-RUN-03 | 번역 수정 (Spanish) | Verificar contenedor/botella de residuos | Verificar waste bin/bottle | 언어셋 v0.06 목록 시트 122행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-042 | Run | LI-RUN-01 / LI-RUN-02-01 / LI-RUN-02 / LI-RUN-03 | 번역 수정 (Italian) | Controlla contenitore rifiuti | Controlla waste bin/bottle | 언어셋 v0.06 목록 시트 122행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-042 | Run | LI-RUN-01 / LI-RUN-02-01 / LI-RUN-02 / LI-RUN-03 | 번역 수정 (French) | Vérifier les bacs/bouteilles à déchets | Vérifier le waste bin/bottle | 언어셋 v0.06 목록 시트 122행 | 하승현 |
| 2026-11-19 | v0.06 | LID-RUN-026 | Run | LI-RUN-02-01 | 번역 수정 (Spanish) | Cargue en el carro los consumibles adicionales derivados del cambio de protocolo. | Cargue en el trolley los consumibles adicionales derivados del cambio de protocolo. | 언어셋 v0.06 목록 시트 139행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-RUN-042 | Quick Start | LI-QUK | 번역 수정 (German) | Abfallbehälter prüfen | Waste Bin/Bottle prüfen | 언어셋 v0.06 목록 시트 204행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-RUN-042 | Quick Start | LI-QUK | 번역 수정 (Portuguese) | Verificar contentor de resíduos | Verificar waste bin/bottle | 언어셋 v0.06 목록 시트 204행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-RUN-042 | Quick Start | LI-QUK | 번역 수정 (Spanish) | Verificar contenedor/botella de residuos | Verificar waste bin/bottle | 언어셋 v0.06 목록 시트 204행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-RUN-042 | Quick Start | LI-QUK | 번역 수정 (Italian) | Controlla contenitore rifiuti | Controlla waste bin/bottle | 언어셋 v0.06 목록 시트 204행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-RUN-042 | Quick Start | LI-QUK | 번역 수정 (French) | Vérifier les bacs/bouteilles à déchets | Vérifier le waste bin/bottle | 언어셋 v0.06 목록 시트 204행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-009 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 수정 (Spanish) | Nombre del Carro | Nombre del Trolley | 언어셋 v0.06 목록 시트 325행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-010 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 수정 (German) | Fach-Position | Tray-Position | 언어셋 v0.06 목록 시트 326행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-010 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 수정 (Portuguese) | Posição da bandeja | Posição do Tray | 언어셋 v0.06 목록 시트 326행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-010 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 수정 (Spanish) | Posición de la bandeja | Posición del Tray | 언어셋 v0.06 목록 시트 326행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-041 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 수정 (Portuguese) | ID do Encaixe | ID do Socket | 언어셋 v0.06 목록 시트 328행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-041 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 수정 (Spanish) | ID del Adaptador | ID del Socket | 언어셋 v0.06 목록 시트 328행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-011 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 수정 (German) | Stecker-Position | Socket-Position | 언어셋 v0.06 목록 시트 329행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-011 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 수정 (Portuguese) | Posição do Encaixe | Posição do Socket | 언어셋 v0.06 목록 시트 329행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-011 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 수정 (Spanish) | Posición del Adaptador | Posición del Socket | 언어셋 v0.06 목록 시트 329행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-021 | Sample Tracking | TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 수정 (German) | Platten-ID | Plate-ID | 언어셋 v0.06 목록 시트 374행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-021 | Sample Tracking | TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 수정 (Portuguese) | ID da Placa | ID da Plate | 언어셋 v0.06 목록 시트 374행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-021 | Sample Tracking | TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 수정 (Spanish) | ID de la Placa | ID de la Plate | 언어셋 v0.06 목록 시트 374행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-021 | Sample Tracking | TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 수정 (French) | ID de la plaque | ID de la Plate | 언어셋 v0.06 목록 시트 374행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-027 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 수정 (German) | Platten-Details | Plate-Details | 언어셋 v0.06 목록 시트 377행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-027 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 수정 (Portuguese) | Detalhes da Placa | Detalhes da Plate | 언어셋 v0.06 목록 시트 377행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-027 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 수정 (Spanish) | Detalles de la Placa | Detalles de la Plate | 언어셋 v0.06 목록 시트 377행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-027 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 수정 (French) | Détails de la plate | Détails de la Plate | 언어셋 v0.06 목록 시트 377행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-028 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 수정 (German) | Platten-Informationen | Plate-Informationen | 언어셋 v0.06 목록 시트 378행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-028 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 수정 (Portuguese) | Informações da Placa | Informações da Plate | 언어셋 v0.06 목록 시트 378행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-028 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 수정 (Spanish) | Información de la Placa | Información de la Plate | 언어셋 v0.06 목록 시트 378행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-028 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 수정 (French) | Informations sur la plate | Informations sur la Plate | 언어셋 v0.06 목록 시트 378행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-029 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 수정 (German) | Informationen zur ausgewählten Platte | Informationen zur ausgewählten Plate | 언어셋 v0.06 목록 시트 383행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-029 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 수정 (Portuguese) | Informações da Placa Selecionada | Informações da Plate Selecionada | 언어셋 v0.06 목록 시트 383행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-029 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 수정 (Spanish) | Información de la Placa Seleccionada | Información de la Plate Seleccionada | 언어셋 v0.06 목록 시트 383행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-029 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 수정 (French) | Informations sur la plate sélectionnée | Informations sur la Plate sélectionnée | 언어셋 v0.06 목록 시트 383행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-030 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 수정 (German) | Bitte eine Probe aus der Platte auswählen. | Bitte eine Probe aus der Plate auswählen. | 언어셋 v0.06 목록 시트 384행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-030 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 수정 (Portuguese) | Selecione uma amostra na Placa. | Selecione uma amostra na Plate. | 언어셋 v0.06 목록 시트 384행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-030 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 수정 (Spanish) | Seleccione una muestra en la Placa. | Seleccione una muestra en la Plate. | 언어셋 v0.06 목록 시트 384행 | 하승현 |
| 2026-11-19 | v0.06 | LID-SPT-030 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 수정 (French) | Veuillez sélectionner un échantillon dans la plaque. | Veuillez sélectionner un échantillon dans la Plate. | 언어셋 v0.06 목록 시트 384행 | 하승현 |
| 2026-11-19 | v0.06 | LID-IVT-010 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 수정 (German) | Abfallbehälter-Status | Waste Bin/Bottle-Status | 언어셋 v0.06 목록 시트 416행 | 하승현 |
| 2026-11-19 | v0.06 | LID-IVT-010 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 수정 (Portuguese) | Estado do contentor de resíduos | Estado do Waste Bin/Bottle | 언어셋 v0.06 목록 시트 416행 | 하승현 |
| 2026-11-19 | v0.06 | LID-IVT-010 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 수정 (Spanish) | Estado del Contenedor/Botella de residuos | Estado del Waste Bin/Bottle | 언어셋 v0.06 목록 시트 416행 | 하승현 |
| 2026-11-19 | v0.06 | LID-IVT-010 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 수정 (Italian) | Stato Contenitore | Stato Waste Bin/Bottle | 언어셋 v0.06 목록 시트 416행 | 하승현 |
| 2026-11-19 | v0.06 | LID-IVT-010 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 수정 (French) | État du bac | État du Waste Bin/Bottle | 언어셋 v0.06 목록 시트 416행 | 하승현 |
| 2026-11-19 | v0.06 | LID-IVT-011 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 수정 (German) | Zeigt zu leerende Abfallbehälter an, priorisiert nach dem Status Voll und Fast voll | Zeigt zu leerende Waste Bin/Bottle an, priorisiert nach dem Status Voll und Fast voll | 언어셋 v0.06 목록 시트 417행 | 하승현 |
| 2026-11-19 | v0.06 | LID-IVT-011 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 수정 (Portuguese) | Apresenta os contentores de resíduos que precisam de ser esvaziados, por prioridade de estado Cheio e Quase Cheio | Apresenta os waste bin/bottle que precisam de ser esvaziados, por prioridade de estado Cheio e Quase Cheio | 언어셋 v0.06 목록 시트 417행 | 하승현 |
| 2026-11-19 | v0.06 | LID-IVT-011 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 수정 (Spanish) | Muestra los contenedores/botellas de residuos que deben vaciarse, priorizados por el estado Lleno y Casi Lleno | Muestra los waste bin/bottle que deben vaciarse, priorizados por el estado Lleno y Casi Lleno | 언어셋 v0.06 목록 시트 417행 | 하승현 |
| 2026-11-19 | v0.06 | LID-IVT-011 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 수정 (Italian) | Mostra i contenitori rifiuti da svuotare, in ordine di priorità per stato Pieno e Quasi Pieno | Mostra i waste bin/bottle da svuotare, in ordine di priorità per stato Pieno e Quasi Pieno | 언어셋 v0.06 목록 시트 417행 | 하승현 |
| 2026-11-19 | v0.06 | LID-IVT-011 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 수정 (French) | Affiche les bacs/bouteilles à déchets à vider, par priorité selon le statut Plein et Presque plein | Affiche les waste bin/bottle à vider, par priorité selon le statut Plein et Presque plein | 언어셋 v0.06 목록 시트 417행 | 하승현 |
| 2026-11-19 | v0.06 | LID-IVT-014 | Inventory | TI-IVT-02-T / LI-IVT-02-T | 번역 수정 (Spanish) | Ningún carro acoplado | Ningún trolley acoplado | 언어셋 v0.06 목록 시트 429행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-LOG-009 | Account Setting | TI-STN-05-02-P | 번역 수정 (German) | © Seegene Inc. Alle Rechte vorbehalten. | - | 언어셋 v0.06 목록 시트 582행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-LOG-009 | Account Setting | TI-STN-05-02-P | 번역 수정 (Portuguese) | © Seegene Inc. Todos os direitos reservados. | - | 언어셋 v0.06 목록 시트 582행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-LOG-009 | Account Setting | TI-STN-05-02-P | 번역 수정 (Spanish) | © Seegene Inc. Todos los derechos reservados. | - | 언어셋 v0.06 목록 시트 582행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-LOG-009 | Account Setting | TI-STN-05-02-P | 번역 수정 (Italian) | © Seegene Inc. Tutti i diritti riservati. | - | 언어셋 v0.06 목록 시트 582행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-LOG-009 | Account Setting | TI-STN-05-02-P | 번역 수정 (French) | © Seegene Inc. Tous droits réservés. | - | 언어셋 v0.06 목록 시트 582행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-133 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (German) | Abgabereihenfolge von NC und PC auf der PCR Platte auswählen. | Abgabereihenfolge von NC und PC auf der PCR Plate auswählen. | 언어셋 v0.06 목록 시트 711행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-133 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (Portuguese) | Selecione a ordem de dispensação de NC e PC na placa de PCR | Selecione a ordem de dispensação de NC e PC na PCR plate | 언어셋 v0.06 목록 시트 711행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-133 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (Spanish) | Seleccione el orden de dispensación de NC y PC en la Placa de PCR. | Seleccione el orden de dispensación de NC y PC en la PCR plate. | 언어셋 v0.06 목록 시트 711행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-139 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (German) | Wählen Sie, wie Proben verteillt werden: direkt in die DWP oder über ein Standardröhrchen. | Wählen Sie, wie Proben verteillt werden: direkt in die DWP oder über ein Standard-Tube. | 언어셋 v0.06 목록 시트 717행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-139 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (Portuguese) | Escolha como dispensar as amostras: diretamente na DWP ou via tubo padrão. | Escolha como dispensar as amostras: diretamente na DWP ou via standard tube. | 언어셋 v0.06 목록 시트 717행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-139 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (Spanish) | Elija cómo dispensar las muestras: directamente en la DWP o mediante un tubo estándar. | Elija cómo dispensar las muestras: directamente en la DWP o mediante un standard tube. | 언어셋 v0.06 목록 시트 717행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-139 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (Italian) | Scegli come dispensare i campioni: direttamente nella DWP o tramite provetta standard. | Scegli come dispensare i campioni: direttamente nella DWP o tramite standard tube. | 언어셋 v0.06 목록 시트 717행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-139 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (French) | Choisissez comment distribuer les échantillons : directement dans la DWP ou via un tube standard. | Choisissez comment distribuer les échantillons : directement dans la DWP ou via un standard tube. | 언어셋 v0.06 목록 시트 717행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-141 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (German) | Standardröhrchen | - | 언어셋 v0.06 목록 시트 720행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-141 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (Portuguese) | Tubo Padrão | - | 언어셋 v0.06 목록 시트 720행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-141 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (Spanish) | Tubo Estándar | - | 언어셋 v0.06 목록 시트 720행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-141 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (Italian) | Provetta Standard | - | 언어셋 v0.06 목록 시트 720행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-141 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (French) | Tube standard | - | 언어셋 v0.06 목록 시트 720행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-142 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (German) | Über ein Standardröhrchen dispensieren | Über ein Standard-Tube dispensieren | 언어셋 v0.06 목록 시트 721행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-142 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (Portuguese) | Dispensar via tubo padrão | Dispensar via standard tube | 언어셋 v0.06 목록 시트 721행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-142 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (Spanish) | Dispensar mediante tubo estándar | Dispensar mediante standard tube | 언어셋 v0.06 목록 시트 721행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-142 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (Italian) | Dispensa tramite provetta standard | Dispensa tramite standard tube | 언어셋 v0.06 목록 시트 721행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-142 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 수정 (French) | Distribuer via un tube standard | Distribuer via un standard tube | 언어셋 v0.06 목록 시트 721행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-320 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 수정 (German) | Röhrcheneinstellungen | Tube-Einstellungen | 언어셋 v0.06 목록 시트 843행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-320 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 수정 (Portuguese) | Configuração de Tubos | Configuração de Tubes | 언어셋 v0.06 목록 시트 843행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-320 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 수정 (Spanish) | Configuración de Tubos | Configuración de Tubes | 언어셋 v0.06 목록 시트 843행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-320 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 수정 (Italian) | Impostazioni Provette | Impostazioni Tube | 언어셋 v0.06 목록 시트 843행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-325 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 수정 (German) | Röhrchenname | Tube-Name | 언어셋 v0.06 목록 시트 853행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-325 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 수정 (Portuguese) | Nome do Tubo | Nome do Tube | 언어셋 v0.06 목록 시트 853행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-325 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 수정 (Spanish) | Nombre del Tubo | Nombre del Tube | 언어셋 v0.06 목록 시트 853행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-325 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 수정 (Italian) | Nome Provetta | Nome Tube | 언어셋 v0.06 목록 시트 853행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-326 | Tube Setting | TI-SVS-01 / LI-SVS-01 / TI-SVS-01-P / LI-SVS-01-P | 번역 수정 (Portuguese) | Tipo de Encaixe | Tipo de Socket | 언어셋 v0.06 목록 시트 854행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-326 | Tube Setting | TI-SVS-01 / LI-SVS-01 / TI-SVS-01-P / LI-SVS-01-P | 번역 수정 (Spanish) | Tipo de Adaptador | Tipo de Socket | 언어셋 v0.06 목록 시트 854행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-330 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 수정 (German) | Keine Probenröhrchen-Einstellungen gefunden. | Keine Proben-Tube-Einstellungen gefunden. | 언어셋 v0.06 목록 시트 860행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-330 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 수정 (Portuguese) | Nenhuma configuração de tubo de amostra encontrada. | Nenhuma configuração de tube de amostra encontrada. | 언어셋 v0.06 목록 시트 860행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-330 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 수정 (Spanish) | No se encontraron configuraciones de tubos de muestra. | No se encontraron configuraciones de tubes de muestra. | 언어셋 v0.06 목록 시트 860행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-330 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 수정 (Italian) | Nessuna impostazione della provetta campione trovata. | Nessuna impostazione del tube campione trovata. | 언어셋 v0.06 목록 시트 860행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-332 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 번역 수정 (German) | Details zum Probenröhrchen | Details zum Proben-Tube | 언어셋 v0.06 목록 시트 863행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-332 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 번역 수정 (Portuguese) | Detalhes do tubo de amostra | Detalhes do tube de amostra | 언어셋 v0.06 목록 시트 863행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-332 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 번역 수정 (Spanish) | Detalles del tubo de muestra | Detalles del tube de muestra | 언어셋 v0.06 목록 시트 863행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-332 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 번역 수정 (Italian) | Dettagli provetta campione | Dettagli tube campione | 언어셋 v0.06 목록 시트 863행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-334 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 번역 수정 (German) | Röhrcheninformationen | Tube-Informationen | 언어셋 v0.06 목록 시트 865행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-334 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 번역 수정 (Portuguese) | Informações do Tubo | Informações do Tube | 언어셋 v0.06 목록 시트 865행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-334 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 번역 수정 (Spanish) | Información del Tubo | Información del Tube | 언어셋 v0.06 목록 시트 865행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-334 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 번역 수정 (Italian) | Informazioni Provetta | Informazioni Tube | 언어셋 v0.06 목록 시트 865행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-406 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 번역 수정 (Portuguese) | Informações dos Componentes do Encaixe de Reagente PCR | Informações dos Componentes do Socket de Reagente PCR | 언어셋 v0.06 목록 시트 953행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-406 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 번역 수정 (Spanish) | Información de Componentes del Adaptador de Reactivo PCR | Información de Componentes del Socket de Reactivo PCR | 언어셋 v0.06 목록 시트 953행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-431 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 번역 수정 (Portuguese) | Informações dos Componentes do Encaixe PCR | Informações dos Componentes do Socket PCR | 언어셋 v0.06 목록 시트 981행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-431 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 번역 수정 (Spanish) | Información de Componentes del Adaptador PCR | Información de Componentes del Socket PCR | 언어셋 v0.06 목록 시트 981행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-433 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 번역 수정 (Portuguese) | Posições do Encaixe ({N}) | Posições do Socket ({N}) | 언어셋 v0.06 목록 시트 983행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STN-433 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 번역 수정 (Spanish) | Posiciones del Adaptador ({N}) | Posiciones del Socket ({N}) | 언어셋 v0.06 목록 시트 983행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-001 | Instrument | TI-INS-01-T / LI-INS-01-T | 변경 | Sample Preparation (Prep) System | Sample Pre-treatment (Prep) System | 언어셋 v0.06 목록 시트 1010행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-002 | Instrument | TI-INS-01-T / LI-INS-01-T | 번역 수정 (German) | Diagnostiksystem (Dx) | - | 언어셋 v0.06 목록 시트 1011행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-002 | Instrument | TI-INS-01-T / LI-INS-01-T | 번역 수정 (Portuguese) | Sistema de Diagnóstico (Dx) | - | 언어셋 v0.06 목록 시트 1011행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-002 | Instrument | TI-INS-01-T / LI-INS-01-T | 번역 수정 (Spanish) | Sistema de Diagnóstico (Dx) | - | 언어셋 v0.06 목록 시트 1011행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-002 | Instrument | TI-INS-01-T / LI-INS-01-T | 번역 수정 (Italian) | Sistema Diagnostico (Dx) | - | 언어셋 v0.06 목록 시트 1011행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-002 | Instrument | TI-INS-01-T / LI-INS-01-T | 번역 수정 (French) | Système de diagnostic (Dx) | - | 언어셋 v0.06 목록 시트 1011행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-007 | Instrument | LI-INS-01-P | 번역 수정 (German) | Tür-Steuerung | Door-Steuerung | 언어셋 v0.06 목록 시트 1032행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-007 | Instrument | LI-INS-01-P | 번역 수정 (Portuguese) | Controlo da Porta | Controlo da Door | 언어셋 v0.06 목록 시트 1032행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-007 | Instrument | LI-INS-01-P | 번역 수정 (Spanish) | Control de Puerta | Control de Door | 언어셋 v0.06 목록 시트 1032행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-007 | Instrument | LI-INS-01-P | 번역 수정 (French) | Contrôle de la porte | Contrôle de la Door | 언어셋 v0.06 목록 시트 1032행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-014 | Instrument | LI-INS-01-P | 번역 수정 (German) | Alle Türen entsperren | Alle Doors entsperren | 언어셋 v0.06 목록 시트 1043행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-014 | Instrument | LI-INS-01-P | 번역 수정 (Portuguese) | Destravar todas as Portas | Destravar todas as doors | 언어셋 v0.06 목록 시트 1043행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-014 | Instrument | LI-INS-01-P | 번역 수정 (Spanish) | Desbloquear todas las Puertas | Desbloquear todas las doors | 언어셋 v0.06 목록 시트 1043행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-014 | Instrument | LI-INS-01-P | 번역 수정 (Italian) | Sblocca tutte le Doors | Sblocca tutte le doors | 언어셋 v0.06 목록 시트 1043행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-014 | Instrument | LI-INS-01-P | 번역 수정 (French) | Déverrouiller toutes les portes | Déverrouiller toutes les doors | 언어셋 v0.06 목록 시트 1043행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-039 | Instrument | LI-INS-01-P | 번역 수정 (German) | * Schließen Sie die Tür und drücken Sie die Schaltfläche „Sperren“, um das Modul fortzusetzen | * Schließen Sie die Door und drücken Sie die Schaltfläche „Sperren“, um das Modul fortzusetzen | 언어셋 v0.06 목록 시트 1044행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-039 | Instrument | LI-INS-01-P | 번역 수정 (Portuguese) | * Feche a porta e prima o botão 'Bloquear' para retomar o módulo | * Feche a door e prima o botão 'Bloquear' para retomar o módulo | 언어셋 v0.06 목록 시트 1044행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-039 | Instrument | LI-INS-01-P | 번역 수정 (Spanish) | * Cierre la puerta y pulse el botón 'Bloquear' para reanudar el módulo | * Cierre la door y pulse el botón 'Bloquear' para reanudar el módulo | 언어셋 v0.06 목록 시트 1044행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-039 | Instrument | LI-INS-01-P | 번역 수정 (Italian) | * Chiudi lo sportello e premi il pulsante 'Blocca' per riprendere il modulo | * Chiudi la door e premi il pulsante 'Blocca' per riprendere il modulo | 언어셋 v0.06 목록 시트 1044행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-039 | Instrument | LI-INS-01-P | 번역 수정 (French) | * Fermez la porte et appuyez sur le bouton « Verrouiller » pour reprendre le module | * Fermez la door et appuyez sur le bouton « Verrouiller » pour reprendre le module | 언어셋 v0.06 목록 시트 1044행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-041 | Instrument | LI-INS-01-P | 번역 수정 (German) | Pause zum Entsperren der Tür. Bitte warten. | Pause zum Entsperren der Door. Bitte warten. | 언어셋 v0.06 목록 시트 1046행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-041 | Instrument | LI-INS-01-P | 번역 수정 (Portuguese) | A pausar para desbloquear a porta. Aguarde. | A pausar para desbloquear a door. Aguarde. | 언어셋 v0.06 목록 시트 1046행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-041 | Instrument | LI-INS-01-P | 번역 수정 (Spanish) | Pausando para desbloquear la puerta. Espere. | Pausando para desbloquear la door. Espere. | 언어셋 v0.06 목록 시트 1046행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-041 | Instrument | LI-INS-01-P | 번역 수정 (Italian) | Pausa in corso per lo sblocco dello sportello. Attendere. | Pausa in corso per lo sblocco della door. Attendere. | 언어셋 v0.06 목록 시트 1046행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-041 | Instrument | LI-INS-01-P | 번역 수정 (French) | Mise en pause pour le déverrouillage de la porte. Veuillez patienter. | Mise en pause pour le déverrouillage de la door. Veuillez patienter. | 언어셋 v0.06 목록 시트 1046행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-042 | Instrument | LI-INS-01-T | 번역 수정 (German) | Zeigt den Öffnungs-/Schließstatus der Tür an und bietet eine Entsperrfunktion zum Öffnen der Modultür | Zeigt den Öffnungs-/Schließstatus der Door an und bietet eine Entsperrfunktion zum Öffnen der Door des Moduls | 언어셋 v0.06 목록 시트 1047행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-042 | Instrument | LI-INS-01-T | 번역 수정 (Portuguese) | Apresenta o estado de abertura/fecho da porta e disponibiliza a função Desbloquear para abrir a porta do módulo | Apresenta o estado de abertura/fecho da door e disponibiliza a função Desbloquear para abrir a door do módulo | 언어셋 v0.06 목록 시트 1047행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-042 | Instrument | LI-INS-01-T | 번역 수정 (Spanish) | Muestra el estado de apertura/cierre de la puerta y ofrece la función Desbloquear para abrir la puerta del módulo | Muestra el estado de apertura/cierre de la door y ofrece la función Desbloquear para abrir la door del módulo | 언어셋 v0.06 목록 시트 1047행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-042 | Instrument | LI-INS-01-T | 번역 수정 (Italian) | Mostra lo stato di apertura/chiusura dello sportello e fornisce la funzione Sblocca per aprire lo sportello del modulo | Mostra lo stato di apertura/chiusura della door e fornisce la funzione Sblocca per aprire la door del modulo | 언어셋 v0.06 목록 시트 1047행 | 하승현 |
| 2026-11-19 | v0.06 | LID-INS-042 | Instrument | LI-INS-01-T | 번역 수정 (French) | Affiche l'état d'ouverture/fermeture de la porte et propose une fonction Déverrouiller pour ouvrir la porte du module | Affiche l'état d'ouverture/fermeture de la door et propose une fonction Déverrouiller pour ouvrir la door du module | 언어셋 v0.06 목록 시트 1047행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STA-057 | Statistical Analysis | TI-STA-05-01 / TI-STA-05-02 | 변경 | Sample Aliquot (Upper) | Sample Aliquoting (Upper) | 언어셋 v0.06 목록 시트 1152행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STA-058 | Statistical Analysis | TI-STA-05-01 / TI-STA-05-02 | 변경 | Sample Aliquot (Lower) | Sample Aliquoting (Lower) | 언어셋 v0.06 목록 시트 1153행 | 하승현 |
| 2026-11-19 | v0.06 | LID-STA-059 | Statistical Analysis | TI-STA-05-01 / TI-STA-05-02 | 변경 | Sample Pretreatment (Lower) | Sample Processing (Lower) | 언어셋 v0.06 목록 시트 1154행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-IVT-010 | Dashboard | TI-DAS / LI-DAS | 번역 수정 (German) | Abfallbehälter-Status | Waste Bin/Bottle-Status | 언어셋 v0.06 목록 시트 1295행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-IVT-010 | Dashboard | TI-DAS / LI-DAS | 번역 수정 (Portuguese) | Estado do contentor de resíduos | Estado do Waste Bin/Bottle | 언어셋 v0.06 목록 시트 1295행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-IVT-010 | Dashboard | TI-DAS / LI-DAS | 번역 수정 (Spanish) | Estado del Contenedor/Botella de residuos | Estado del Waste Bin/Bottle | 언어셋 v0.06 목록 시트 1295행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-IVT-010 | Dashboard | TI-DAS / LI-DAS | 번역 수정 (Italian) | Stato Contenitore | Stato Waste Bin/Bottle | 언어셋 v0.06 목록 시트 1295행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-IVT-010 | Dashboard | TI-DAS / LI-DAS | 번역 수정 (French) | État du bac | État du Waste Bin/Bottle | 언어셋 v0.06 목록 시트 1295행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-IVT-010 | Dashboard (All) | TI-ADS | 번역 수정 (German) | Abfallbehälter-Status | Waste Bin/Bottle-Status | 언어셋 v0.06 목록 시트 1337행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-IVT-010 | Dashboard (All) | TI-ADS | 번역 수정 (Portuguese) | Estado do contentor de resíduos | Estado do Waste Bin/Bottle | 언어셋 v0.06 목록 시트 1337행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-IVT-010 | Dashboard (All) | TI-ADS | 번역 수정 (Spanish) | Estado del Contenedor/Botella de residuos | Estado del Waste Bin/Bottle | 언어셋 v0.06 목록 시트 1337행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-IVT-010 | Dashboard (All) | TI-ADS | 번역 수정 (Italian) | Stato Contenitore | Stato Waste Bin/Bottle | 언어셋 v0.06 목록 시트 1337행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-IVT-010 | Dashboard (All) | TI-ADS | 번역 수정 (French) | État du bac | État du Waste Bin/Bottle | 언어셋 v0.06 목록 시트 1337행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-007 | Material Setup | LI-TSS-LTG-01-01 | 변경 | Scan the barcode on the side of the EB tub. | Scan the barcode on the side of the EB Tub. | 언어셋 v0.06 목록 시트 1352행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-008 | Material Setup | LI-TSS-LTG-01-01 | 변경 | Scan the MB tube barcode that is in the same box as the EB tub. | Scan the MB Tube barcode that is in the same box as the EB Tub. | 언어셋 v0.06 목록 시트 1353행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-009 | Material Setup | LI-TSS-LTG-01-01 | 변경 | Scan the PK tube barcode that is in the same box as the EB tub. | Scan the PK Tube barcode that is in the same box as the EB Tub. | 언어셋 v0.06 목록 시트 1354행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-013 | Material Setup | LI-TSS-LTG-01-01 / LI-TSS-LTG-01-02 / LI-TSS-CMP-01 | 변경 | MB tube | MB Tube | 언어셋 v0.06 목록 시트 1358행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-014 | Material Setup | LI-TSS-LTG-01-01 / LI-TSS-LTG-01-02 / LI-TSS-CMP-01 | 변경 | PK tube | PK Tube | 언어셋 v0.06 목록 시트 1359행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-016 | Material Setup | LI-TSS-LTG-01-02 | 변경 | If you need to set up another lot grouping, scan the barcode on the side of the EB tub. | If you need to set up another lot grouping, scan the barcode on the side of the EB Tub. | 언어셋 v0.06 목록 시트 1364행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-018 | Material Setup | LI-TSS-LTG-01-02 / LI-TSS-LTG-02-02 / LI-TSS-PSI-SAM-01-04 / LI-TSS-PSI-SAM-02-03 / LI-TSS-PSI-SAM-03-03 | 변경 | Add new | Add New | 언어셋 v0.06 목록 시트 1366행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-021 | Material Setup | LI-TSS-LTG-02-01 / LI-TSS-LTG-02-02 | 변경 | Scan the IC tube | Scan the IC Tube | 언어셋 v0.06 목록 시트 1369행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-023 | Material Setup | LI-TSS-LTG-02-01 | 변경 | Scan the barcode on the PCR box. | Scan the barcode on the PCR Box. | 언어셋 v0.06 목록 시트 1371행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-024 | Material Setup | LI-TSS-LTG-02-01 | 변경 | Scan the IC tube barcode in the PCR box. | Scan the IC Tube barcode in the PCR Box. | 언어셋 v0.06 목록 시트 1372행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-026 | Material Setup | LI-TSS-LTG-02-01 / LI-TSS-LTG-02-02 / LI-TSS-CMP-01 | 변경 | PCR box | PCR Box | 언어셋 v0.06 목록 시트 1374행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-027 | Material Setup | LI-TSS-LTG-02-01 / LI-TSS-LTG-02-02 / LI-TSS-CMP-01 | 변경 | IC tube | IC Tube | 언어셋 v0.06 목록 시트 1375행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-028 | Material Setup | LI-TSS-LTG-02-02 | 변경 | If you need to set up another IC setup, scan the barcode on the new PCR box. | If you need to set up another IC setup, scan the barcode on the new PCR Box. | 언어셋 v0.06 목록 시트 1376행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-184 | Material Setup | LI-TSS-CMP-01 | 변경 | First PCR box | First PCR Box | 언어셋 v0.06 목록 시트 1383행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-185 | Material Setup | LI-TSS-CMP-01 | 변경 | Second PCR box | Second PCR Box | 언어셋 v0.06 목록 시트 1384행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-032 | Material Setup | LI-TSS-PSI / LI-TSS-PSI-SAM | 번역 수정 (Spanish) | Cargar Muestras en el Carro | Cargar Muestras en el Trolley | 언어셋 v0.06 목록 시트 1388행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-033 | Material Setup | LI-TSS-PSI / LI-TSS-PSI-SAM / LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 | 번역 수정 (Portuguese) | Carregar Amostras no Encaixe | Carregar Amostras no Socket | 언어셋 v0.06 목록 시트 1389행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-033 | Material Setup | LI-TSS-PSI / LI-TSS-PSI-SAM / LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 | 번역 수정 (Spanish) | Cargar Muestras en el Adaptador | Cargar Muestras en el Socket | 언어셋 v0.06 목록 시트 1389행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-034 | Material Setup | LI-TSS-PSI / LI-TSS-PSI-SAM / LI-TSS-PSI-SAM-02-01 / LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-02-03 | 번역 수정 (Portuguese) | Carregar Encaixe na Bandeja | Carregar Socket no Tray | 언어셋 v0.06 목록 시트 1390행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-034 | Material Setup | LI-TSS-PSI / LI-TSS-PSI-SAM / LI-TSS-PSI-SAM-02-01 / LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-02-03 | 번역 수정 (Spanish) | Cargar Adaptador en la Bandeja | Cargar Socket en el Tray | 언어셋 v0.06 목록 시트 1390행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-035 | Material Setup | LI-TSS-PSI / LI-TSS-PSI-SAM / LI-TSS-PSI-SAM-03-01 / LI-TSS-PSI-SAM-03-02 / LI-TSS-PSI-SAM-03-03 | 번역 수정 (Portuguese) | Carregar Bandeja no Trolley | Carregar Tray no Trolley | 언어셋 v0.06 목록 시트 1391행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-035 | Material Setup | LI-TSS-PSI / LI-TSS-PSI-SAM / LI-TSS-PSI-SAM-03-01 / LI-TSS-PSI-SAM-03-02 / LI-TSS-PSI-SAM-03-03 | 번역 수정 (Spanish) | Cargar Bandeja en el Carro | Cargar Tray en el Trolley | 언어셋 v0.06 목록 시트 1391행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-036 | Material Setup | LI-TSS-PSI | 번역 수정 (Spanish) | Cargar Consumibles y Reactivos en el Carro | Cargar Consumibles y Reactivos en el Trolley | 언어셋 v0.06 목록 시트 1392행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-037 | Material Setup | LI-TSS-PSI | 번역 수정 (Portuguese) | Carregar Consumíveis e Reagentes na Bandeja | Carregar Consumíveis e Reagentes no Tray | 언어셋 v0.06 목록 시트 1393행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-037 | Material Setup | LI-TSS-PSI | 번역 수정 (Spanish) | Cargar Consumibles y Reactivos en la Bandeja | Cargar Consumibles y Reactivos en el Tray | 언어셋 v0.06 목록 시트 1393행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-038 | Material Setup | LI-TSS-PSI | 번역 수정 (German) | PK/IC-Röhrchen laden | PK/IC Tubes laden | 언어셋 v0.06 목록 시트 1394행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-038 | Material Setup | LI-TSS-PSI | 번역 수정 (Spanish) | Cargar Tubos PK/IC | Cargar PK/IC Tubes | 언어셋 v0.06 목록 시트 1394행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-038 | Material Setup | LI-TSS-PSI | 번역 수정 (French) | Charger les tubes PK/IC | Charger les PK/IC Tubes | 언어셋 v0.06 목록 시트 1394행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-040 | Material Setup | LI-TSS-PSI | 번역 수정 (German) | MM-Röhrchen laden | MM Tubes laden | 언어셋 v0.06 목록 시트 1396행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-040 | Material Setup | LI-TSS-PSI | 번역 수정 (Spanish) | Cargar Tubos MM | Cargar MM Tubes | 언어셋 v0.06 목록 시트 1396행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-041 | Material Setup | LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 | 번역 수정 (German) | Probenröhrchen scannen | Proben-Tube scannen | 언어셋 v0.06 목록 시트 1398행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-041 | Material Setup | LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 | 번역 수정 (Portuguese) | Scanear o tubo de amostra | Scanear o tube de amostra | 언어셋 v0.06 목록 시트 1398행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-041 | Material Setup | LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 | 번역 수정 (Spanish) | Escanear el tubo de muestra | Escanear el tube de muestra | 언어셋 v0.06 목록 시트 1398행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-041 | Material Setup | LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 | 번역 수정 (Italian) | Scansiona la provetta campione | Scansiona il tube campione | 언어셋 v0.06 목록 시트 1398행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-042 | Material Setup | LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 | 번역 수정 (Portuguese) | Scanear o encaixe | Scanear o socket | 언어셋 v0.06 목록 시트 1399행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-042 | Material Setup | LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 | 번역 수정 (Spanish) | Escanear el adaptador | Escanear el socket | 언어셋 v0.06 목록 시트 1399행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-043 | Material Setup | LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 | 번역 수정 (German) | Probenröhrchen einsetzen | Proben-Tube einsetzen | 언어셋 v0.06 목록 시트 1400행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-043 | Material Setup | LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 | 번역 수정 (Portuguese) | Inserir o tubo de amostra | Inserir o tube de amostra | 언어셋 v0.06 목록 시트 1400행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-043 | Material Setup | LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 | 번역 수정 (Spanish) | Insertar el tubo de muestra | Insertar el tube de muestra | 언어셋 v0.06 목록 시트 1400행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-043 | Material Setup | LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 | 번역 수정 (Italian) | Inserisci la provetta campione | Inserisci il tube campione | 언어셋 v0.06 목록 시트 1400행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-044 | Material Setup | LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 | 번역 수정 (Portuguese) | Confirmar o encaixe | Confirmar o socket | 언어셋 v0.06 목록 시트 1401행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-044 | Material Setup | LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 | 번역 수정 (Spanish) | Confirmar el adaptador | Confirmar el socket | 언어셋 v0.06 목록 시트 1401행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-045 | Material Setup | LI-TSS-PSI-SAM-01-01 | 번역 수정 (German) | Barcode auf dem Probenröhrchen scannen, um den Socket-Typ zu prüfen. | Barcode auf dem Proben-Tube scannen, um den Socket-Typ zu prüfen. | 언어셋 v0.06 목록 시트 1402행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-045 | Material Setup | LI-TSS-PSI-SAM-01-01 | 번역 수정 (Portuguese) | Scaneie o código de barras no tubo de amostra para verificar o tipo de bandeja. | Scaneie o código de barras no tube de amostra para verificar o tipo de socket. | 언어셋 v0.06 목록 시트 1402행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-045 | Material Setup | LI-TSS-PSI-SAM-01-01 | 번역 수정 (Spanish) | Escanee el código de barras en el tubo de muestra para verificar el tipo de adaptador. | Escanee el código de barras en el tube de muestra para verificar el tipo de socket. | 언어셋 v0.06 목록 시트 1402행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-045 | Material Setup | LI-TSS-PSI-SAM-01-01 | 번역 수정 (Italian) | Scansiona il codice a barre sulla provetta campione per verificare il tipo di socket. | Scansiona il codice a barre sul tube campione per verificare il tipo di socket. | 언어셋 v0.06 목록 시트 1402행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-047 | Material Setup | LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 | 번역 수정 (Portuguese) | Encaixe selecionado | Socket selecionado | 언어셋 v0.06 목록 시트 1405행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-047 | Material Setup | LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 | 번역 수정 (Spanish) | Adaptador seleccionado | Socket seleccionado | 언어셋 v0.06 목록 시트 1405행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-049 | Material Setup | LI-TSS-PSI-SAM-01-02 | 번역 수정 (Portuguese) | Verifique o tipo de encaixe exibido no ecrã e prepare-se. | Verifique o tipo de socket exibido no ecrã e prepare-se. | 언어셋 v0.06 목록 시트 1407행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-049 | Material Setup | LI-TSS-PSI-SAM-01-02 | 번역 수정 (Spanish) | Verifique el tipo de adaptador mostrado en pantalla y prepárelo. | Verifique el tipo de socket mostrado en pantalla y prepárelo. | 언어셋 v0.06 목록 시트 1407행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-050 | Material Setup | LI-TSS-PSI-SAM-01-02 | 번역 수정 (Portuguese) | Carregue o encaixe no rack. | Carregue o socket no rack. | 언어셋 v0.06 목록 시트 1408행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-050 | Material Setup | LI-TSS-PSI-SAM-01-02 | 번역 수정 (Spanish) | Cargue el adaptador en el rack. | Cargue el socket en el rack. | 언어셋 v0.06 목록 시트 1408행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-051 | Material Setup | LI-TSS-PSI-SAM-01-02 | 번역 수정 (Spanish) | Escanee el código QR en el adaptador. | Escanee el código QR en el socket. | 언어셋 v0.06 목록 시트 1409행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-052 | Material Setup | LI-TSS-PSI-SAM-01-03 | 번역 수정 (German) | Barcode auf dem Probenröhrchen scannen. | Barcode auf dem Proben-Tube scannen. | 언어셋 v0.06 목록 시트 1410행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-052 | Material Setup | LI-TSS-PSI-SAM-01-03 | 번역 수정 (Portuguese) | Scaneie o código de barras no tubo de amostra. | Scaneie o código de barras no tube de amostra. | 언어셋 v0.06 목록 시트 1410행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-052 | Material Setup | LI-TSS-PSI-SAM-01-03 | 번역 수정 (Spanish) | Escanee el código de barras en el tubo de muestra. | Escanee el código de barras en el tube de muestra. | 언어셋 v0.06 목록 시트 1410행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-052 | Material Setup | LI-TSS-PSI-SAM-01-03 | 번역 수정 (Italian) | Scansiona il codice a barre sulla provetta campione. | Scansiona il codice a barre sul tube campione. | 언어셋 v0.06 목록 시트 1410행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-054 | Material Setup | LI-TSS-PSI-SAM-01-03 | 번역 수정 (German) | Barcode einer weiteren, mit dieser Halterung kompatiblen Probe scannen und in die hervorgehobene Position einsetzen. | Barcode einer weiteren, mit diesem Socket kompatiblen Probe scannen und in die hervorgehobene Position einsetzen. | 언어셋 v0.06 목록 시트 1412행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-054 | Material Setup | LI-TSS-PSI-SAM-01-03 | 번역 수정 (Portuguese) | Scaneie o código de barras de outra amostra compatível com este encaixe e insira-a no orifício destacado. | Scaneie o código de barras de outra amostra compatível com este socket e insira-a no orifício destacado. | 언어셋 v0.06 목록 시트 1412행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-054 | Material Setup | LI-TSS-PSI-SAM-01-03 | 번역 수정 (Spanish) | Escanee el código de barras de otra muestra compatible con este adaptador e insértela en el orificio resaltado. | Escanee el código de barras de otra muestra compatible con este socket e insértela en el orificio resaltado. | 언어셋 v0.06 목록 시트 1412행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-057 | Material Setup | LI-TSS-PSI-SAM-01-03 | 번역 수정 (German) | Anzahl der befüllten Positionen in der Halterung | Anzahl der befüllten Positionen im Socket | 언어셋 v0.06 목록 시트 1415행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-057 | Material Setup | LI-TSS-PSI-SAM-01-03 | 번역 수정 (Portuguese) | Número de orifícios preenchidos no encaixe. | Número de orifícios preenchidos no socket. | 언어셋 v0.06 목록 시트 1415행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-057 | Material Setup | LI-TSS-PSI-SAM-01-03 | 번역 수정 (Spanish) | Número de orificios llenos en el adaptador | Número de orificios llenos en el socket | 언어셋 v0.06 목록 시트 1415행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-186 | Material Setup | LI-TSS-PSI-SAM-01-03 | 번역 수정 (German) | Probenröhrchen-ID | Proben-Tube-ID | 언어셋 v0.06 목록 시트 1416행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-186 | Material Setup | LI-TSS-PSI-SAM-01-03 | 번역 수정 (Portuguese) | ID do Tubo de Amostra | ID do Tube de Amostra | 언어셋 v0.06 목록 시트 1416행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-186 | Material Setup | LI-TSS-PSI-SAM-01-03 | 번역 수정 (Spanish) | ID del Tubo de Muestra | ID del Tube de Muestra | 언어셋 v0.06 목록 시트 1416행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-186 | Material Setup | LI-TSS-PSI-SAM-01-03 | 번역 수정 (Italian) | ID Provetta Campione | ID Tube Campione | 언어셋 v0.06 목록 시트 1416행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-059 | Material Setup | LI-TSS-PSI-SAM-01-04 | 번역 수정 (Portuguese) | A configuração do encaixe está concluída. | A configuração do socket está concluída. | 언어셋 v0.06 목록 시트 1418행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-059 | Material Setup | LI-TSS-PSI-SAM-01-04 | 번역 수정 (Spanish) | La configuración del adaptador está completa. | La configuración del socket está completa. | 언어셋 v0.06 목록 시트 1418행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-060 | Material Setup | LI-TSS-PSI-SAM-01-04 | 번역 수정 (German) | Wenn Sie einen weiteren Socket einrichten möchten, klicken Sie auf [Neu hinzufügen] oder scannen Sie den Barcode auf dem neuen Probenröhrchen. | Wenn Sie einen weiteren Socket einrichten möchten, klicken Sie auf [Neu hinzufügen] oder scannen Sie den Barcode auf dem neuen Proben-Tube. | 언어셋 v0.06 목록 시트 1419행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-060 | Material Setup | LI-TSS-PSI-SAM-01-04 | 번역 수정 (Portuguese) | Se precisar configurar outro encaixe, clique no botão [Adicionar novo] ou scaneie o código de barras no novo tubo de amostra. | Se precisar configurar outro socket, clique no botão [Adicionar novo] ou scaneie o código de barras no novo tube de amostra. | 언어셋 v0.06 목록 시트 1419행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-060 | Material Setup | LI-TSS-PSI-SAM-01-04 | 번역 수정 (Spanish) | Si necesita configurar otro adaptador, haga clic en el botón [Añadir nuevo] o escanee el código de barras en el nuevo tubo de muestra. | Si necesita configurar otro socket, haga clic en el botón [Añadir nuevo] o escanee el código de barras en el nuevo tube de muestra. | 언어셋 v0.06 목록 시트 1419행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-060 | Material Setup | LI-TSS-PSI-SAM-01-04 | 번역 수정 (Italian) | Se devi configurare un altro socket, fai clic sul pulsante [Aggiungi nuovo] o scansiona il codice a barre sulla nuova provetta campione. | Se devi configurare un altro socket, fai clic sul pulsante [Aggiungi nuovo] o scansiona il codice a barre sul nuovo tube campione. | 언어셋 v0.06 목록 시트 1419행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-062 | Material Setup | LI-TSS-PSI-SAM-02-01 / LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-02-03 | 번역 수정 (Portuguese) | Scanear o tubo de amostra | Scanear o tray | 언어셋 v0.06 목록 시트 1421행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-062 | Material Setup | LI-TSS-PSI-SAM-02-01 / LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-02-03 | 번역 수정 (Spanish) | Escanear la bandeja | Escanear el tray | 언어셋 v0.06 목록 시트 1421행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-063 | Material Setup | LI-TSS-PSI-SAM-02-01 / LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-02-03 | 번역 수정 (Portuguese) | Scanear o encaixe | Scanear o socket | 언어셋 v0.06 목록 시트 1422행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-063 | Material Setup | LI-TSS-PSI-SAM-02-01 / LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-02-03 | 번역 수정 (Spanish) | Escanear adaptador cargado | Escanear socket cargado | 언어셋 v0.06 목록 시트 1422행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-064 | Material Setup | LI-TSS-PSI-SAM-02-01 / LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-02-03 | 번역 수정 (Portuguese) | Confirmar a bandeja | Confirmar o tray | 언어셋 v0.06 목록 시트 1423행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-064 | Material Setup | LI-TSS-PSI-SAM-02-01 / LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-02-03 | 번역 수정 (Spanish) | Confirmar la bandeja | Confirmar el tray | 언어셋 v0.06 목록 시트 1423행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-065 | Material Setup | LI-TSS-PSI-SAM-02-01 | 번역 수정 (Portuguese) | Scaneie o código QR na bandeja vazia. | Scaneie o código QR no tray vazio. | 언어셋 v0.06 목록 시트 1424행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-065 | Material Setup | LI-TSS-PSI-SAM-02-01 | 번역 수정 (Spanish) | Escanee el código QR en la bandeja vacía. | Escanee el código QR en el tray vacío. | 언어셋 v0.06 목록 시트 1424행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-069 | Material Setup | LI-TSS-PSI-SAM-02-02 | 번역 수정 (Portuguese) | Scaneie o código QR no encaixe carregado com a amostra. | Scaneie o código QR no socket carregado com a amostra. | 언어셋 v0.06 목록 시트 1428행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-069 | Material Setup | LI-TSS-PSI-SAM-02-02 | 번역 수정 (Spanish) | Escanee el código QR en el adaptador cargado con la muestra. | Escanee el código QR en el socket cargado con la muestra. | 언어셋 v0.06 목록 시트 1428행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-070 | Material Setup | LI-TSS-PSI-SAM-02-02 | 번역 수정 (Portuguese) | Scaneie o código QR no espaço da bandeja a carregar. | Scaneie o código QR no espaço do tray a carregar. | 언어셋 v0.06 목록 시트 1429행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-070 | Material Setup | LI-TSS-PSI-SAM-02-02 | 번역 수정 (Spanish) | Escanee el código QR en la ranura de la bandeja que desea cargar. | Escanee el código QR en la ranura del tray que desea cargar. | 언어셋 v0.06 목록 시트 1429행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-071 | Material Setup | LI-TSS-PSI-SAM-02-02 | 번역 수정 (Portuguese) | Coloque o encaixe na bandeja com o código QR virado para a direita. | Coloque o socket no tray com o código QR virado para a direita. | 언어셋 v0.06 목록 시트 1430행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-071 | Material Setup | LI-TSS-PSI-SAM-02-02 | 번역 수정 (Spanish) | Coloque el adaptador en la bandeja con el código QR orientado hacia la derecha. | Coloque el socket en el tray con el código QR orientado hacia la derecha. | 언어셋 v0.06 목록 시트 1430행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-124 | Material Setup | LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-03-02 | 번역 수정 (Portuguese) | Se avançar para o próximo ecrã enquanto uma bandeja permanecer vazia, clique no botão [Concluído] abaixo. | Se avançar para o próximo ecrã enquanto um tray permanecer vazio, clique no botão [Concluído] abaixo. | 언어셋 v0.06 목록 시트 1432행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-124 | Material Setup | LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-03-02 | 번역 수정 (Spanish) | Si continúa a la siguiente pantalla mientras una bandeja permanece vacía, haga clic en el botón [Listo] a continuación. | Si continúa a la siguiente pantalla mientras un tray permanece vacío, haga clic en el botón [Listo] a continuación. | 언어셋 v0.06 목록 시트 1432행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-073 | Material Setup | LI-TSS-PSI-SAM-02-02 | 번역 수정 (Portuguese) | Número de espaços preenchidos na bandeja | Número de espaços preenchidos no tray | 언어셋 v0.06 목록 시트 1433행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-073 | Material Setup | LI-TSS-PSI-SAM-02-02 | 번역 수정 (Spanish) | Número de ranuras llenas en la bandeja | Número de ranuras llenas en el tray | 언어셋 v0.06 목록 시트 1433행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-075 | Material Setup | LI-TSS-PSI-SAM-02-03 | 번역 수정 (Portuguese) | Nova bandeja | Novo tray | 언어셋 v0.06 목록 시트 1435행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-075 | Material Setup | LI-TSS-PSI-SAM-02-03 | 번역 수정 (Spanish) | Nueva bandeja | Nuevo tray | 언어셋 v0.06 목록 시트 1435행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-076 | Material Setup | LI-TSS-PSI-SAM-02-03 | 번역 수정 (Portuguese) | A configuração da bandeja está concluída. | A configuração do tray está concluída. | 언어셋 v0.06 목록 시트 1436행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-076 | Material Setup | LI-TSS-PSI-SAM-02-03 | 번역 수정 (Spanish) | La configuración de la bandeja está completa. | La configuración del tray está completa. | 언어셋 v0.06 목록 시트 1436행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-077 | Material Setup | LI-TSS-PSI-SAM-02-03 | 번역 수정 (Portuguese) | Se precisar configurar outra bandeja, clique no botão [Adicionar novo] ou escaneie o código QR na nova tray. | Se precisar configurar outro tray, clique no botão [Adicionar novo] ou escaneie o código QR no novo tray. | 언어셋 v0.06 목록 시트 1437행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-077 | Material Setup | LI-TSS-PSI-SAM-02-03 | 번역 수정 (Spanish) | Si necesita configurar otra bandeja, haga clic en el botón [Añadir nuevo] o escanee el código QR en la nueva tray. | Si necesita configurar otro tray, haga clic en el botón [Añadir nuevo] o escanee el código QR en el nuevo tray. | 언어셋 v0.06 목록 시트 1437행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-078 | Material Setup | LI-TSS-PSI-SAM-03-01 / LI-TSS-PSI-SAM-03-02 / LI-TSS-PSI-SAM-03-03 | 번역 수정 (Spanish) | Escanear el carro | Escanear el trolley | 언어셋 v0.06 목록 시트 1438행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-079 | Material Setup | LI-TSS-PSI-SAM-03-01 / LI-TSS-PSI-SAM-03-02 / LI-TSS-PSI-SAM-03-03 | 번역 수정 (Portuguese) | Scanear bandeja carregada | Scanear tray carregado | 언어셋 v0.06 목록 시트 1439행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-079 | Material Setup | LI-TSS-PSI-SAM-03-01 / LI-TSS-PSI-SAM-03-02 / LI-TSS-PSI-SAM-03-03 | 번역 수정 (Spanish) | Escanear bandeja cargada | Escanear tray cargado | 언어셋 v0.06 목록 시트 1439행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-080 | Material Setup | LI-TSS-PSI-SAM-03-01 / LI-TSS-PSI-SAM-03-02 / LI-TSS-PSI-SAM-03-03 | 번역 수정 (Spanish) | Confirmar el carro | Confirmar el trolley | 언어셋 v0.06 목록 시트 1440행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-081 | Material Setup | LI-TSS-PSI-SAM-03-01 | 번역 수정 (Spanish) | Escanee el código QR en el carro vacío. | Escanee el código QR en el trolley vacío. | 언어셋 v0.06 목록 시트 1441행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-082 | Material Setup | LI-TSS-PSI-SAM-03-02 | 번역 수정 (Portuguese) | Scaneie o código QR na bandeja carregada com o encaixe. | Scaneie o código QR no tray carregado com o socket. | 언어셋 v0.06 목록 시트 1442행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-082 | Material Setup | LI-TSS-PSI-SAM-03-02 | 번역 수정 (Spanish) | Escanee el código QR en la bandeja cargada con el adaptador. | Escanee el código QR en el tray cargado con el socket. | 언어셋 v0.06 목록 시트 1442행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-083 | Material Setup | LI-TSS-PSI-SAM-03-02 | 번역 수정 (Spanish) | Escanee el código QR en el nivel del carro. | Escanee el código QR en el nivel del trolley. | 언어셋 v0.06 목록 시트 1443행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-084 | Material Setup | LI-TSS-PSI-SAM-03-02 | 번역 수정 (Portuguese) | Insira a bandeja no nível do trolley scaneado. | Insira o tray no nível do trolley scaneado. | 언어셋 v0.06 목록 시트 1444행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-084 | Material Setup | LI-TSS-PSI-SAM-03-02 | 번역 수정 (Spanish) | Inserte la bandeja en el nivel del carro escaneado. | Inserte el tray en el nivel del trolley escaneado. | 언어셋 v0.06 목록 시트 1444행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-085 | Material Setup | LI-TSS-PSI-SAM-03-02 | 번역 수정 (Spanish) | Número de niveles llenos en el carro | Número de niveles llenos en el trolley | 언어셋 v0.06 목록 시트 1445행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-087 | Material Setup | LI-TSS-PSI-SAM-03-03 | 번역 수정 (Spanish) | La configuración del carro está completa. | La configuración del trolley está completa. | 언어셋 v0.06 목록 시트 1447행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-088 | Material Setup | LI-TSS-PSI-SAM-03-03 | 번역 수정 (Spanish) | Si necesita configurar otro carro, haga clic en el botón [Añadir nuevo] o escanee el código QR en el nuevo carro. | Si necesita configurar otro trolley, haga clic en el botón [Añadir nuevo] o escanee el código QR en el nuevo trolley. | 언어셋 v0.06 목록 시트 1448행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-036 | Material Setup | LI-TSS-PSI-LCR | 번역 수정 (Spanish) | Cargar Consumibles y Reactivos en el Carro | Cargar Consumibles y Reactivos en el Trolley | 언어셋 v0.06 목록 시트 1449행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-037 | Material Setup | LI-TSS-PSI-LCR / LI-TSS-PSI-LCR-01-01 / LI-TSS-PSI-LCR-01-02 / LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-01-04 | 번역 수정 (Portuguese) | Carregar Consumíveis e Reagentes na Bandeja | Carregar Consumíveis e Reagentes no Tray | 언어셋 v0.06 목록 시트 1450행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-037 | Material Setup | LI-TSS-PSI-LCR / LI-TSS-PSI-LCR-01-01 / LI-TSS-PSI-LCR-01-02 / LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-01-04 | 번역 수정 (Spanish) | Cargar Consumibles y Reactivos en la Bandeja | Cargar Consumibles y Reactivos en el Tray | 언어셋 v0.06 목록 시트 1450행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-035 | Material Setup | LI-TSS-PSI-LCR / LI-TSS-PSI-LCR-02-01 / LI-TSS-PSI-LCR-02-02 / LI-TSS-PSI-LCR-02-03 | 번역 수정 (Portuguese) | Carregar Bandeja no Trolley | Carregar Tray no Trolley | 언어셋 v0.06 목록 시트 1451행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-035 | Material Setup | LI-TSS-PSI-LCR / LI-TSS-PSI-LCR-02-01 / LI-TSS-PSI-LCR-02-02 / LI-TSS-PSI-LCR-02-03 | 번역 수정 (Spanish) | Cargar Bandeja en el Carro | Cargar Tray en el Trolley | 언어셋 v0.06 목록 시트 1451행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-089 | Material Setup | LI-TSS-PSI-01 | 변경 | Select trolley | Select Trolley | 언어셋 v0.06 목록 시트 1453행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-090 | Material Setup | LI-TSS-PSI-01 | 번역 수정 (Spanish) | Nombre del carro | Nombre del Trolley | 언어셋 v0.06 목록 시트 1454행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-062 | Material Setup | LI-TSS-PSI-LCR-01-01 / LI-TSS-PSI-LCR-01-02 / LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-01-04 | 번역 수정 (Portuguese) | Scanear o tubo de amostra | Scanear o tray | 언어셋 v0.06 목록 시트 1462행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-062 | Material Setup | LI-TSS-PSI-LCR-01-01 / LI-TSS-PSI-LCR-01-02 / LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-01-04 | 번역 수정 (Spanish) | Escanear la bandeja | Escanear el tray | 언어셋 v0.06 목록 시트 1462행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-064 | Material Setup | LI-TSS-PSI-LCR-01-01 / LI-TSS-PSI-LCR-01-02 / LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-01-04 | 번역 수정 (Portuguese) | Confirmar a bandeja | Confirmar o tray | 언어셋 v0.06 목록 시트 1464행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-064 | Material Setup | LI-TSS-PSI-LCR-01-01 / LI-TSS-PSI-LCR-01-02 / LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-01-04 | 번역 수정 (Spanish) | Confirmar la bandeja | Confirmar el tray | 언어셋 v0.06 목록 시트 1464행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-099 | Material Setup | LI-TSS-PSI-LCR-01-01 | 변경 | Preparing according to the quantity of consumables & reagent shown on the screen. | Prepare according to the quantity of consumable or reagent shown on the screen. | 언어셋 v0.06 목록 시트 1467행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-100 | Material Setup | LI-TSS-PSI-LCR-01-01 | 변경 | After preparing the consumable & reagent, click the [Next] button below. | After preparing the consumable or reagent, click the [Next] button below. | 언어셋 v0.06 목록 시트 1468행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-065 | Material Setup | LI-TSS-PSI-LCR-01-02 | 번역 수정 (Portuguese) | Scaneie o código QR na bandeja vazia. | Scaneie o código QR no tray vazio. | 언어셋 v0.06 목록 시트 1471행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-065 | Material Setup | LI-TSS-PSI-LCR-01-02 | 번역 수정 (Spanish) | Escanee el código QR en la bandeja vacía. | Escanee el código QR en el tray vacío. | 언어셋 v0.06 목록 시트 1471행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-103 | Material Setup | LI-TSS-PSI-LCR-01-03 | 번역 수정 (Portuguese) | Carregue consumíveis ou reagentes na rack (exceto DWP) e escaneie o código QR. | Carregue consumíveis ou reagentes no rack (exceto DWP) e escaneie o código QR. | 언어셋 v0.06 목록 시트 1479행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-103 | Material Setup | LI-TSS-PSI-LCR-01-03 | 번역 수정 (Spanish) | Cargue consumibles o reactivos en la gradilla (excepto DWP) y escanee su código QR. | Cargue consumibles o reactivos en el rack (excepto DWP) y escanee su código QR. | 언어셋 v0.06 목록 시트 1479행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-261 | Material Setup | LI-TSS-PSI-LCR-01-03 | 번역 수정 (Portuguese) | * Nota: Para um encaixe reutilizável ou estrutura de Tub, avance para o passo 2 após scanear o código QR. | * Nota: Para um socket reutilizável ou estrutura de Tub, avance para o passo 2 após scanear o código QR. | 언어셋 v0.06 목록 시트 1480행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-261 | Material Setup | LI-TSS-PSI-LCR-01-03 | 번역 수정 (Spanish) | * Nota: Para un adaptador reutilizable o un marco de Tub, continúe con el paso 2 tras escanear el código QR. | * Nota: Para un socket reutilizable o un marco de Tub, continúe con el paso 2 tras escanear el código QR. | 언어셋 v0.06 목록 시트 1480행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-070 | Material Setup | LI-TSS-PSI-LCR-01-03 | 번역 수정 (Portuguese) | Scaneie o código QR no espaço da bandeja a carregar. | Scaneie o código QR no espaço do tray a carregar. | 언어셋 v0.06 목록 시트 1481행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-070 | Material Setup | LI-TSS-PSI-LCR-01-03 | 번역 수정 (Spanish) | Escanee el código QR en la ranura de la bandeja que desea cargar. | Escanee el código QR en la ranura del tray que desea cargar. | 언어셋 v0.06 목록 시트 1481행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-104 | Material Setup | LI-TSS-PSI-LCR-01-03 | 번역 수정 (Portuguese) | Coloque o rack na badeja com o código de barras voltado para a direita. | Coloque o rack no tray com o código de barras voltado para a direita. | 언어셋 v0.06 목록 시트 1482행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-104 | Material Setup | LI-TSS-PSI-LCR-01-03 | 번역 수정 (Spanish) | Coloque la gradilla en la bandeja con el código de barras orientado hacia la derecha. | Coloque el rack en el tray con el código de barras orientado hacia la derecha. | 언어셋 v0.06 목록 시트 1482행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-073 | Material Setup | LI-TSS-PSI-LCR-01-03 | 번역 수정 (Portuguese) | Número de espaços preenchidos na bandeja | Número de espaços preenchidos no tray | 언어셋 v0.06 목록 시트 1484행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-073 | Material Setup | LI-TSS-PSI-LCR-01-03 | 번역 수정 (Spanish) | Número de ranuras llenas en la bandeja | Número de ranuras llenas en el tray | 언어셋 v0.06 목록 시트 1484행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-107 | Material Setup | LI-TSS-PSI-LCR-01-03 | 변경 | Standard tube/Tub | Standard Tube/Tub | 언어셋 v0.06 목록 시트 1486행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-STN-141 | Material Setup | LI-TSS-PSI-LCR-01-03-01 | 번역 수정 (German) | Standardröhrchen | - | 언어셋 v0.06 목록 시트 1490행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-STN-141 | Material Setup | LI-TSS-PSI-LCR-01-03-01 | 번역 수정 (Portuguese) | Tubo Padrão | - | 언어셋 v0.06 목록 시트 1490행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-STN-141 | Material Setup | LI-TSS-PSI-LCR-01-03-01 | 번역 수정 (Spanish) | Tubo Estándar | - | 언어셋 v0.06 목록 시트 1490행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-STN-141 | Material Setup | LI-TSS-PSI-LCR-01-03-01 | 번역 수정 (Italian) | Provetta Standard | - | 언어셋 v0.06 목록 시트 1490행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-STN-141 | Material Setup | LI-TSS-PSI-LCR-01-03-01 | 번역 수정 (French) | Tube standard | - | 언어셋 v0.06 목록 시트 1490행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-108 | Material Setup | LI-TSS-PSI-LCR-01-03-01 | 번역 수정 (Portuguese) | Carregue o encaixe na rack e scaneie o código QR do encaixe. | Carregue o socket no rack e scaneie o código QR do socket. | 언어셋 v0.06 목록 시트 1491행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-108 | Material Setup | LI-TSS-PSI-LCR-01-03-01 | 번역 수정 (Spanish) | Cargue el adaptador en la gradilla y escanee el código QR del adaptador. | Cargue el socket en el rack y escanee el código QR del socket. | 언어셋 v0.06 목록 시트 1491행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-109 | Material Setup | LI-TSS-PSI-LCR-01-03-01 | 변경 | Scan the code of any loaded standard tube. | Scan the code of any loaded Standard Tube. | 언어셋 v0.06 목록 시트 1492행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-111 | Material Setup | LI-TSS-PSI-LCR-01-03-01 | 번역 수정 (Portuguese) | Carregue a estrutura do Tub na rack e scaneie o código QR da estrutura do Tub. | Carregue a estrutura do Tub no rack e scaneie o código QR da estrutura do Tub. | 언어셋 v0.06 목록 시트 1495행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-111 | Material Setup | LI-TSS-PSI-LCR-01-03-01 | 번역 수정 (Spanish) | Cargue el soporte del Tubo en la gradilla y escanee el código QR del marco del Tubo. | Cargue el soporte del Tub en el rack y escanee el código QR del marco del Tub. | 언어셋 v0.06 목록 시트 1495행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-075 | Material Setup | LI-TSS-PSI-LCR-01-04 | 번역 수정 (Portuguese) | Nova bandeja | Novo tray | 언어셋 v0.06 목록 시트 1498행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-075 | Material Setup | LI-TSS-PSI-LCR-01-04 | 번역 수정 (Spanish) | Nueva bandeja | Nuevo tray | 언어셋 v0.06 목록 시트 1498행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-076 | Material Setup | LI-TSS-PSI-LCR-01-04 | 번역 수정 (Portuguese) | A configuração da bandeja está concluída. | A configuração do tray está concluída. | 언어셋 v0.06 목록 시트 1499행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-076 | Material Setup | LI-TSS-PSI-LCR-01-04 | 번역 수정 (Spanish) | La configuración de la bandeja está completa. | La configuración del tray está completa. | 언어셋 v0.06 목록 시트 1499행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-077 | Material Setup | LI-TSS-PSI-LCR-01-04 | 번역 수정 (Portuguese) | Se precisar configurar outra bandeja, clique no botão [Adicionar novo] ou escaneie o código QR na nova tray. | Se precisar configurar outro tray, clique no botão [Adicionar novo] ou escaneie o código QR no novo tray. | 언어셋 v0.06 목록 시트 1500행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-077 | Material Setup | LI-TSS-PSI-LCR-01-04 | 번역 수정 (Spanish) | Si necesita configurar otra bandeja, haga clic en el botón [Añadir nuevo] o escanee el código QR en la nueva tray. | Si necesita configurar otro tray, haga clic en el botón [Añadir nuevo] o escanee el código QR en el nuevo tray. | 언어셋 v0.06 목록 시트 1500행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-078 | Material Setup | LI-TSS-PSI-LCR-02-01 / LI-TSS-PSI-LCR-02-02 / LI-TSS-PSI-LCR-02-03 | 번역 수정 (Spanish) | Escanear el carro | Escanear el trolley | 언어셋 v0.06 목록 시트 1505행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-079 | Material Setup | LI-TSS-PSI-LCR-02-01 / LI-TSS-PSI-LCR-02-02 / LI-TSS-PSI-LCR-02-03 | 번역 수정 (Portuguese) | Scanear bandeja carregada | Scanear tray carregado | 언어셋 v0.06 목록 시트 1506행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-079 | Material Setup | LI-TSS-PSI-LCR-02-01 / LI-TSS-PSI-LCR-02-02 / LI-TSS-PSI-LCR-02-03 | 번역 수정 (Spanish) | Escanear bandeja cargada | Escanear tray cargado | 언어셋 v0.06 목록 시트 1506행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-080 | Material Setup | LI-TSS-PSI-LCR-02-01 / LI-TSS-PSI-LCR-02-02 / LI-TSS-PSI-LCR-02-03 | 번역 수정 (Spanish) | Confirmar el carro | Confirmar el trolley | 언어셋 v0.06 목록 시트 1507행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-081 | Material Setup | LI-TSS-PSI-LCR-02-01 | 번역 수정 (Spanish) | Escanee el código QR en el carro vacío. | Escanee el código QR en el trolley vacío. | 언어셋 v0.06 목록 시트 1508행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-265 | Material Setup | LI-TSS-PSI-LCR-02-02 | 변경 | Scan the QR code on the tray loaded with consumables/reagents. | Scan the QR code on the tray loaded with consumables or reagents. | 언어셋 v0.06 목록 시트 1509행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-083 | Material Setup | LI-TSS-PSI-LCR-02-02 | 번역 수정 (Spanish) | Escanee el código QR en el nivel del carro. | Escanee el código QR en el nivel del trolley. | 언어셋 v0.06 목록 시트 1510행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-084 | Material Setup | LI-TSS-PSI-LCR-02-02 | 번역 수정 (Portuguese) | Insira a bandeja no nível do trolley scaneado. | Insira o tray no nível do trolley scaneado. | 언어셋 v0.06 목록 시트 1511행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-084 | Material Setup | LI-TSS-PSI-LCR-02-02 | 번역 수정 (Spanish) | Inserte la bandeja en el nivel del carro escaneado. | Inserte el tray en el nivel del trolley escaneado. | 언어셋 v0.06 목록 시트 1511행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-263 | Material Setup | LI-TSS-PSI-LCR-02-02 | 번역 수정 (Portuguese) | * Nota: Apenas bandejas vazias podem ser carregadas no trolley 1F. | * Nota: Apenas trays vazios podem ser carregados no trolley 1F. | 언어셋 v0.06 목록 시트 1512행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-263 | Material Setup | LI-TSS-PSI-LCR-02-02 | 번역 수정 (Spanish) | * Nota: Solo se pueden cargar bandejas vacías en el carro 1F. | * Nota: Solo se pueden cargar trays vacíos en el trolley 1F. | 언어셋 v0.06 목록 시트 1512행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-124 | Material Setup | LI-TSS-PSI-LCR-02-02 | 번역 수정 (Portuguese) | Se avançar para o próximo ecrã enquanto uma bandeja permanecer vazia, clique no botão [Concluído] abaixo. | Se avançar para o próximo ecrã enquanto um tray permanecer vazio, clique no botão [Concluído] abaixo. | 언어셋 v0.06 목록 시트 1514행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-124 | Material Setup | LI-TSS-PSI-LCR-02-02 | 번역 수정 (Spanish) | Si continúa a la siguiente pantalla mientras una bandeja permanece vacía, haga clic en el botón [Listo] a continuación. | Si continúa a la siguiente pantalla mientras un tray permanece vacío, haga clic en el botón [Listo] a continuación. | 언어셋 v0.06 목록 시트 1514행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-085 | Material Setup | LI-TSS-PSI-LCR-02-02 | 번역 수정 (Spanish) | Número de niveles llenos en el carro | Número de niveles llenos en el trolley | 언어셋 v0.06 목록 시트 1515행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-087 | Material Setup | LI-TSS-PSI-LCR-02-03 | 번역 수정 (Spanish) | La configuración del carro está completa. | La configuración del trolley está completa. | 언어셋 v0.06 목록 시트 1517행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-088 | Material Setup | LI-TSS-PSI-LCR-02-03 | 번역 수정 (Spanish) | Si necesita configurar otro carro, haga clic en el botón [Añadir nuevo] o escanee el código QR en el nuevo carro. | Si necesita configurar otro trolley, haga clic en el botón [Añadir nuevo] o escanee el código QR en el nuevo trolley. | 언어셋 v0.06 목록 시트 1518행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-038 | Material Setup | LI-TSS-PSI-PKI-01 / LI-TSS-PSI-PKI-02 / LI-TSS-PSI-PKI-03 / LI-TSS-PSI-PKI-04 | 번역 수정 (German) | PK/IC-Röhrchen laden | PK/IC Tubes laden | 언어셋 v0.06 목록 시트 1520행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-038 | Material Setup | LI-TSS-PSI-PKI-01 / LI-TSS-PSI-PKI-02 / LI-TSS-PSI-PKI-03 / LI-TSS-PSI-PKI-04 | 번역 수정 (Spanish) | Cargar Tubos PK/IC | Cargar PK/IC Tubes | 언어셋 v0.06 목록 시트 1520행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-038 | Material Setup | LI-TSS-PSI-PKI-01 / LI-TSS-PSI-PKI-02 / LI-TSS-PSI-PKI-03 / LI-TSS-PSI-PKI-04 | 번역 수정 (French) | Charger les tubes PK/IC | Charger les PK/IC Tubes | 언어셋 v0.06 목록 시트 1520행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-115 | Material Setup | LI-TSS-PSI-PKI-01 / LI-TSS-PSI-PKI-02 / LI-TSS-PSI-PKI-03 / LI-TSS-PSI-PKI-04 | 변경 | Check the PK/IC tube | Check the PK/IC Tube | 언어셋 v0.06 목록 시트 1521행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-042 | Material Setup | LI-TSS-PSI-PKI-01 / LI-TSS-PSI-PKI-02 / LI-TSS-PSI-PKI-03 / LI-TSS-PSI-PKI-04 | 번역 수정 (Portuguese) | Scanear o encaixe | Scanear o socket | 언어셋 v0.06 목록 시트 1522행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-042 | Material Setup | LI-TSS-PSI-PKI-01 / LI-TSS-PSI-PKI-02 / LI-TSS-PSI-PKI-03 / LI-TSS-PSI-PKI-04 | 번역 수정 (Spanish) | Escanear el adaptador | Escanear el socket | 언어셋 v0.06 목록 시트 1522행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-116 | Material Setup | LI-TSS-PSI-PKI-01 / LI-TSS-PSI-PKI-02 / LI-TSS-PSI-PKI-03 / LI-TSS-PSI-PKI-04 | 변경 | Scan the PK/IC tube | Scan the PK/IC Tube | 언어셋 v0.06 목록 시트 1523행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-044 | Material Setup | LI-TSS-PSI-PKI-01 / LI-TSS-PSI-PKI-02 / LI-TSS-PSI-PKI-03 / LI-TSS-PSI-PKI-04 | 번역 수정 (Portuguese) | Confirmar o encaixe | Confirmar o socket | 언어셋 v0.06 목록 시트 1524행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-044 | Material Setup | LI-TSS-PSI-PKI-01 / LI-TSS-PSI-PKI-02 / LI-TSS-PSI-PKI-03 / LI-TSS-PSI-PKI-04 | 번역 수정 (Spanish) | Confirmar el adaptador | Confirmar el socket | 언어셋 v0.06 목록 시트 1524행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-117 | Material Setup | LI-TSS-PSI-PKI-01 | 변경 | PK tube Required Quantity | PK Tube Required Quantity | 언어셋 v0.06 목록 시트 1525행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-118 | Material Setup | LI-TSS-PSI-PKI-01 | 변경 | IC tube Required Quantity | IC Tube Required Quantity | 언어셋 v0.06 목록 시트 1526행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-119 | Material Setup | LI-TSS-PSI-PKI-01 | 변경 | Prepare according to the quantity of PK/IC tube shown on the screen. | Prepare according to the quantity of PK/IC Tube shown on the screen. | 언어셋 v0.06 목록 시트 1527행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-120 | Material Setup | LI-TSS-PSI-PKI-01 | 변경 | After preparing the PK/IC tube, click the [Next] button below. | After preparing the PK/IC Tube, click the [Next] button below. | 언어셋 v0.06 목록 시트 1528행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-121 | Material Setup | LI-TSS-PSI-PKI-02 | 번역 수정 (Portuguese) | Carregue no rack o encaixe G10 apresentado no ecrã. | Carregue no rack o socket G10 apresentado no ecrã. | 언어셋 v0.06 목록 시트 1529행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-121 | Material Setup | LI-TSS-PSI-PKI-02 | 번역 수정 (Spanish) | Cargue en el rack el adaptador G10 mostrado en pantalla. | Cargue en el rack el socket G10 mostrado en pantalla. | 언어셋 v0.06 목록 시트 1529행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-051 | Material Setup | LI-TSS-PSI-PKI-02 | 번역 수정 (Spanish) | Escanee el código QR en el adaptador. | Escanee el código QR en el socket. | 언어셋 v0.06 목록 시트 1530행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-014 | Material Setup | LI-TSS-PSI-PKI-01 / LI-TSS-PSI-PKI-02 / LI-TSS-PSI-PKI-03 / LI-TSS-PSI-PKI-04 | 변경 | PK tube | PK Tube | 언어셋 v0.06 목록 시트 1531행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-027 | Material Setup | LI-TSS-PSI-PKI-02 / LI-TSS-PSI-PKI-03 / LI-TSS-PSI-PKI-04 | 변경 | IC tube | IC Tube | 언어셋 v0.06 목록 시트 1532행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-122 | Material Setup | LI-TSS-PSI-PKI-03 | 변경 | Scan PK or IC tubes registered in 'Lot grouping’. | Scan PK or IC Tubes registered in 'Lot grouping'. | 언어셋 v0.06 목록 시트 1533행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-123 | Material Setup | LI-TSS-PSI-PKI-03 | 번역 수정 (German) | Gescanntes Röhrchen in den hervorgehobenen Slot laden. | Gescanntes Tube in den hervorgehobenen Slot laden. | 언어셋 v0.06 목록 시트 1534행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-123 | Material Setup | LI-TSS-PSI-PKI-03 | 번역 수정 (Portuguese) | Carregue o tubo scaneado no espaço destacado. | Carregue o tube scaneado no espaço destacado. | 언어셋 v0.06 목록 시트 1534행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-123 | Material Setup | LI-TSS-PSI-PKI-03 | 번역 수정 (Spanish) | Cargue el tubo escaneado en la ranura resaltada. | Cargue el tube escaneado en la ranura resaltada. | 언어셋 v0.06 목록 시트 1534행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-123 | Material Setup | LI-TSS-PSI-PKI-03 | 번역 수정 (Italian) | Carica la provetta scansionata nello slot evidenziato. | Carica il tube scansionato nello slot evidenziato. | 언어셋 v0.06 목록 시트 1534행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-264 | Material Setup | LI-TSS-PSI-PKI-03 | 번역 수정 (Portuguese) | Se avançar para o ecrã seguinte com um encaixe ainda vazio, clique no botão [Concluído] abaixo. | Se avançar para o ecrã seguinte com um socket ainda vazio, clique no botão [Concluído] abaixo. | 언어셋 v0.06 목록 시트 1535행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-264 | Material Setup | LI-TSS-PSI-PKI-03 | 번역 수정 (Spanish) | Si pasa a la siguiente pantalla con un adaptador vacío, haga clic en el botón [Listo] a continuación. | Si pasa a la siguiente pantalla con un socket vacío, haga clic en el botón [Listo] a continuación. | 언어셋 v0.06 목록 시트 1535행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-057 | Material Setup | LI-TSS-PSI-PKI-03 | 번역 수정 (German) | Anzahl der befüllten Positionen in der Halterung | Anzahl der befüllten Positionen im Socket | 언어셋 v0.06 목록 시트 1536행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-057 | Material Setup | LI-TSS-PSI-PKI-03 | 번역 수정 (Portuguese) | Número de orifícios preenchidos no encaixe. | Número de orifícios preenchidos no socket. | 언어셋 v0.06 목록 시트 1536행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-057 | Material Setup | LI-TSS-PSI-PKI-03 | 번역 수정 (Spanish) | Número de orificios llenos en el adaptador | Número de orificios llenos en el socket | 언어셋 v0.06 목록 시트 1536행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-126 | Material Setup | LI-TSS-PSI-PKI-04 | 변경 | The PK/IC tube loading is complete. | The PK/IC Tube loading is complete. | 언어셋 v0.06 목록 시트 1538행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-127 | Material Setup | LI-TSS-PSI-PKI-04 | 변경 | If you need to set up another PK/IC tube, click the [Add New] button or scan the QR code on the new socket. | If you need to set up another PK/IC Tube, click the [Add New] button or scan the QR code on the new socket. | 언어셋 v0.06 목록 시트 1539행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-042 | Material Setup | LI-TSS-PSI-LPR-01 / LI-TSS-PSI-LPR-02 / LI-TSS-PSI-LPR-03 / LI-TSS-PSI-LPR-04 / LI-TSS-PSI-LMM-01 / LI-TSS-PSI-LMM-02 / LI-TSS-PSI-LMM-03 | 번역 수정 (Portuguese) | Scanear o encaixe | Scanear o socket | 언어셋 v0.06 목록 시트 1542행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-042 | Material Setup | LI-TSS-PSI-LPR-01 / LI-TSS-PSI-LPR-02 / LI-TSS-PSI-LPR-03 / LI-TSS-PSI-LPR-04 / LI-TSS-PSI-LMM-01 / LI-TSS-PSI-LMM-02 / LI-TSS-PSI-LMM-03 | 번역 수정 (Spanish) | Escanear el adaptador | Escanear el socket | 언어셋 v0.06 목록 시트 1542행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-044 | Material Setup | LI-TSS-PSI-LPR-01 / LI-TSS-PSI-LPR-02 / LI-TSS-PSI-LPR-03 / LI-TSS-PSI-LPR-04 / LI-TSS-PSI-LMM-01 / LI-TSS-PSI-LMM-02 / LI-TSS-PSI-LMM-03 | 번역 수정 (Portuguese) | Confirmar o encaixe | Confirmar o socket | 언어셋 v0.06 목록 시트 1544행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-044 | Material Setup | LI-TSS-PSI-LPR-01 / LI-TSS-PSI-LPR-02 / LI-TSS-PSI-LPR-03 / LI-TSS-PSI-LPR-04 / LI-TSS-PSI-LMM-01 / LI-TSS-PSI-LMM-02 / LI-TSS-PSI-LMM-03 | 번역 수정 (Spanish) | Confirmar el adaptador | Confirmar el socket | 언어셋 v0.06 목록 시트 1544행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-133 | Material Setup | LI-TSS-PSI-LPR-02 | 번역 수정 (Portuguese) | Scaneie o código QR no encaixe de reagente PCR. | Scaneie o código QR no socket de reagente PCR. | 언어셋 v0.06 목록 시트 1549행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-133 | Material Setup | LI-TSS-PSI-LPR-02 | 번역 수정 (Spanish) | Escanee el código QR en el adaptador de reactivo PCR. | Escanee el código QR en el socket de reactivo PCR. | 언어셋 v0.06 목록 시트 1549행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-136 | Material Setup | LI-TSS-PSI-LPR-03 | 변경 | Load the PCR box into the highlighted slot. | Load the PCR Box into the highlighted slot. | 언어셋 v0.06 목록 시트 1554행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-101 | Material Setup | LI-TSS-PSI-LPR-03 | 추가 |  | Required Quantity | 언어셋 v0.06 목록 시트 1557행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-138 | Material Setup | LI-TSS-PSI-LPR-03 | 변경 | Number of filled PCR boxes in the socket | Number of filled PCR Boxes in the socket | 언어셋 v0.06 목록 시트 1558행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-059 | Material Setup | LI-TSS-PSI-LPR-04 | 번역 수정 (Portuguese) | A configuração do encaixe está concluída. | A configuração do socket está concluída. | 언어셋 v0.06 목록 시트 1562행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-059 | Material Setup | LI-TSS-PSI-LPR-04 | 번역 수정 (Spanish) | La configuración del adaptador está completa. | La configuración del socket está completa. | 언어셋 v0.06 목록 시트 1562행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-139 | Material Setup | LI-TSS-PSI-LPR-04 | 번역 수정 (Portuguese) | Se precisar configurar outra caixa de reagente PCR, clique no botão [Adicionar novo] ou escaneie o código QR no novo encaixe de reagente PCR. | Se precisar configurar outra caixa de reagente PCR, clique no botão [Adicionar novo] ou escaneie o código QR no novo socket de reagente PCR. | 언어셋 v0.06 목록 시트 1563행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-139 | Material Setup | LI-TSS-PSI-LPR-04 | 번역 수정 (Spanish) | Si necesita configurar otra caja de reactivo PCR, haga clic en el botón [Añadir nuevo] o escanee el código QR en el nuevo adaptador de reactivo PCR. | Si necesita configurar otra caja de reactivo PCR, haga clic en el botón [Añadir nuevo] o escanee el código QR en el nuevo socket de reactivo PCR. | 언어셋 v0.06 목록 시트 1563행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-101 | Material Setup | LI-TSS-PSI-LPR-04 | 추가 |  | Required Quantity | 언어셋 v0.06 목록 시트 1565행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-040 | Material Setup | LI-TSS-PSI-LMM-01 / LI-TSS-PSI-LMM-02 / LI-TSS-PSI-LMM-03 | 번역 수정 (German) | MM-Röhrchen laden | MM Tubes laden | 언어셋 v0.06 목록 시트 1570행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-040 | Material Setup | LI-TSS-PSI-LMM-01 / LI-TSS-PSI-LMM-02 / LI-TSS-PSI-LMM-03 | 번역 수정 (Spanish) | Cargar Tubos MM | Cargar MM Tubes | 언어셋 v0.06 목록 시트 1570행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-042 | Material Setup | LI-TSS-PSI-LMM-01 | 추가 |  | Scan the socket | 언어셋 v0.06 목록 시트 1571행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-140 | Material Setup | LI-TSS-PSI-LMM-01 / LI-TSS-PSI-LMM-02 / LI-TSS-PSI-LMM-03 | 변경 | Insert the MM tube | Insert the MM Tube | 언어셋 v0.06 목록 시트 1572행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-044 | Material Setup | LI-TSS-PSI-LMM-01 | 추가 |  | Confirm the socket | 언어셋 v0.06 목록 시트 1573행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-051 | Material Setup | LI-TSS-PSI-LMM-01 | 번역 수정 (Spanish) | Escanee el código QR en el adaptador. | Escanee el código QR en el socket. | 언어셋 v0.06 목록 시트 1574행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-066 | Material Setup | LI-TSS-PSI-LMM-01 | 추가 |  | Once the scan is complete, you will be taken to the next screen. | 언어셋 v0.06 목록 시트 1575행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-141 | Material Setup | LI-TSS-PSI-LMM-02 | 변경 | MM tubes | MM Tubes | 언어셋 v0.06 목록 시트 1576행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-142 | Material Setup | LI-TSS-PSI-LMM-02 | 변경 | Load 14 MM tubes as shown on the screen. | Load 14 MM Tubes as shown on the screen. | 언어셋 v0.06 목록 시트 1577행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-143 | Material Setup | LI-TSS-PSI-LMM-02 | 변경 | When MM tubes loading is complete, click the [Done] button below. | When MM Tube loading is complete, click the [Done] button below. | 언어셋 v0.06 목록 시트 1578행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-144 | Material Setup | LI-TSS-PSI-LMM-02 | 변경 | * Note: 14 MM tubes must be loaded. | * Note: 14 MM Tubes must be loaded. | 언어셋 v0.06 목록 시트 1579행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-EVT-025 | Material Setup | LI-TSS-PSI-LMM-02 | 추가 |  | Done | 언어셋 v0.06 목록 시트 1580행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-086 | Material Setup | LI-TSS-PSI-LMM-03 | 추가 |  | New | 언어셋 v0.06 목록 시트 1581행 (Language ID ref: LID-MAS-125 → ref: LID-MAS-086), v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-145 | Material Setup | LI-TSS-PSI-LMM-03 | 변경 | The MM tube loading is complete. | The MM Tube loading is complete. | 언어셋 v0.06 목록 시트 1582행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-146 | Material Setup | LI-TSS-PSI-LMM-03 | 번역 수정 (German) | Wenn Sie ein weiteres MM-Röhrchen einrichten möchten, klicken Sie auf [Neu hinzufügen] oder scannen Sie den QR-Code auf dem neuen Socket. | Wenn Sie ein weiteres MM Tube einrichten möchten, klicken Sie auf [Neu hinzufügen] oder scannen Sie den QR-Code auf dem neuen Socket. | 언어셋 v0.06 목록 시트 1583행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-146 | Material Setup | LI-TSS-PSI-LMM-03 | 번역 수정 (Portuguese) | Se precisar configurar outro MM tube, clique no botão [Adicionar novo] ou scaneie o código QR no novo encaixe. | Se precisar configurar outro MM Tube, clique no botão [Adicionar novo] ou scaneie o código QR no novo socket. | 언어셋 v0.06 목록 시트 1583행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-146 | Material Setup | LI-TSS-PSI-LMM-03 | 번역 수정 (Spanish) | Si necesita configurar otro tubo MM, haga clic en el botón [Añadir nuevo] o escanee el código QR en el nuevo adaptador. | Si necesita configurar otro MM Tube, haga clic en el botón [Añadir nuevo] o escanee el código QR en el nuevo socket. | 언어셋 v0.06 목록 시트 1583행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-146 | Material Setup | LI-TSS-PSI-LMM-03 | 번역 수정 (Italian) | Se devi configurare un altro MM tube, fai clic sul pulsante [Aggiungi nuovo] o scansiona il codice QR sul nuovo socket. | Se devi configurare un altro MM Tube, fai clic sul pulsante [Aggiungi nuovo] o scansiona il codice QR sul nuovo socket. | 언어셋 v0.06 목록 시트 1583행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-146 | Material Setup | LI-TSS-PSI-LMM-03 | 번역 수정 (French) | Si vous devez configurer un autre tube MM, cliquez sur le bouton [Ajouter nouveau] ou scannez le QR code sur le nouveau socket. | Si vous devez configurer un autre MM Tube, cliquez sur le bouton [Ajouter nouveau] ou scannez le QR code sur le nouveau socket. | 언어셋 v0.06 목록 시트 1583행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-061 | Material Setup | LI-TSS-PSI-LMM-03 | 추가 |  | Click [Finish] to go to the Carrier manual screen. | 언어셋 v0.06 목록 시트 1584행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-018 | Material Setup | LI-TSS-PSI-LMM-03 | 추가 |  | Add New | 언어셋 v0.06 목록 시트 1585행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-019 | Material Setup | LI-TSS-PSI-LMM-03 | 추가 |  | Finish | 언어셋 v0.06 목록 시트 1586행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-421 | Material Setup | LI-TSS-DXI / LI-TSS-DXI-08 / LI-TSS-DXI-09 / LI-TSS-WBM / LI-TSS-WBM-P / LI-INS-01-P | 번역 수정 (German) | Tippen Sie auf den grünen Bereich, um die Modultür zu öffnen. | Tippen Sie auf den grünen Bereich, um die Door des Moduls zu öffnen. | 언어셋 v0.06 목록 시트 1593행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-421 | Material Setup | LI-TSS-DXI / LI-TSS-DXI-08 / LI-TSS-DXI-09 / LI-TSS-WBM / LI-TSS-WBM-P / LI-INS-01-P | 번역 수정 (Portuguese) | Toque na área verde para abrir a porta do módulo. | Toque na área verde para abrir a door do módulo. | 언어셋 v0.06 목록 시트 1593행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-421 | Material Setup | LI-TSS-DXI / LI-TSS-DXI-08 / LI-TSS-DXI-09 / LI-TSS-WBM / LI-TSS-WBM-P / LI-INS-01-P | 번역 수정 (Spanish) | Toque el área verde para abrir la puerta del módulo. | Toque el área verde para abrir la door del módulo. | 언어셋 v0.06 목록 시트 1593행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-421 | Material Setup | LI-TSS-DXI / LI-TSS-DXI-08 / LI-TSS-DXI-09 / LI-TSS-WBM / LI-TSS-WBM-P / LI-INS-01-P | 번역 수정 (Italian) | Tocca l'area verde per aprire lo sportello del modulo. | Tocca l'area verde per aprire la door del modulo. | 언어셋 v0.06 목록 시트 1593행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-421 | Material Setup | LI-TSS-DXI / LI-TSS-DXI-08 / LI-TSS-DXI-09 / LI-TSS-WBM / LI-TSS-WBM-P / LI-INS-01-P | 번역 수정 (French) | Touchez la zone verte pour ouvrir la porte du module. | Touchez la zone verte pour ouvrir la door du module. | 언어셋 v0.06 목록 시트 1593행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-152 | Material Setup | LI-TSS-DXI / LI-TSS-DXI-08 / LI-TSS-DXI-09 | 번역 수정 (Spanish) | Cargar Film de sellado | Cargar Sealing Film | 언어셋 v0.06 목록 시트 1598행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-152 | Material Setup | LI-TSS-DXI / LI-TSS-DXI-08 / LI-TSS-DXI-09 | 번역 수정 (French) | Charger le Film Scellage | Charger le Sealing Film | 언어셋 v0.06 목록 시트 1598행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-153 | Material Setup | LI-TSS-DXI-01 | 번역 수정 (Portuguese) | Scaneie o código de barras no encaixe. | Scaneie o código de barras no socket. | 언어셋 v0.06 목록 시트 1605행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-153 | Material Setup | LI-TSS-DXI-01 | 번역 수정 (Spanish) | Escanee el código de barras en el adaptador. | Escanee el código de barras en el socket. | 언어셋 v0.06 목록 시트 1605행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-155 | Material Setup | LI-TSS-DXI-01 | 번역 수정 (Portuguese) | Coloque os consumíveis ou o encaixe no local scaneado com o código QR voltado para a direita. | Coloque os consumíveis ou o socket no local scaneado com o código QR voltado para a direita. | 언어셋 v0.06 목록 시트 1607행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-155 | Material Setup | LI-TSS-DXI-01 | 번역 수정 (Spanish) | Coloque los consumibles o el adaptador en la ubicación escaneada con el código QR orientado hacia la derecha. | Coloque los consumibles o el socket en la ubicación escaneada con el código QR orientado hacia la derecha. | 언어셋 v0.06 목록 시트 1607행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-171 | Material Setup | LI-TSS-DXI-01 / LI-TSS-DXI-06 | 번역 수정 (Portuguese) | Coloque o encaixe no local scaneado com o código QR voltado para a direita. | Coloque o socket no local scaneado com o código QR voltado para a direita. | 언어셋 v0.06 목록 시트 1608행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-171 | Material Setup | LI-TSS-DXI-01 / LI-TSS-DXI-06 | 번역 수정 (Spanish) | Coloque el adaptador en la ubicación escaneada con el código QR orientado hacia la derecha. | Coloque el socket en la ubicación escaneada con el código QR orientado hacia la derecha. | 언어셋 v0.06 목록 시트 1608행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-156 | Material Setup | LI-TSS-DXI-01 / LI-TSS-DXI-02 / LI-TSS-DXI-03 / LI-TSS-DXI-04 / LI-TSS-DXI-05 / LI-TSS-DXI-06 | 번역 수정 (German) | Tür schließen und Verriegelung prüfen. | Door schließen und Verriegelung prüfen. | 언어셋 v0.06 목록 시트 1610행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-156 | Material Setup | LI-TSS-DXI-01 / LI-TSS-DXI-02 / LI-TSS-DXI-03 / LI-TSS-DXI-04 / LI-TSS-DXI-05 / LI-TSS-DXI-06 | 번역 수정 (Portuguese) | Feche a porta e verifique o fecho. | Feche a door e verifique o fecho. | 언어셋 v0.06 목록 시트 1610행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-156 | Material Setup | LI-TSS-DXI-01 / LI-TSS-DXI-02 / LI-TSS-DXI-03 / LI-TSS-DXI-04 / LI-TSS-DXI-05 / LI-TSS-DXI-06 | 번역 수정 (Spanish) | Cierre la puerta y verifique el bloqueo. | Cierre la door y verifique el bloqueo. | 언어셋 v0.06 목록 시트 1610행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-02 | 추가 |  | Step | 언어셋 v0.06 목록 시트 1616행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-068 | Material Setup | LI-TSS-DXI-02 | 추가 |  | STEP 1~3 Repeat | 언어셋 v0.06 목록 시트 1618행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-160 | Material Setup | LI-TSS-DXI-02 | 번역 수정 (German) | QR-Code der WB1-DWP scannen. | QR-Code der WB1 DWP scannen. | 언어셋 v0.06 목록 시트 1619행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-154 | Material Setup | LI-TSS-DXI-02 | 추가 |  | Scan the QR code on the storage slot to load. | 언어셋 v0.06 목록 시트 1620행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-161 | Material Setup | LI-TSS-DXI-02 | 번역 수정 (German) | WB1-DWP mit dem Barcode nach vorne weisend an der gescannten Position platzieren. | WB1 DWP mit dem Barcode nach vorne weisend an der gescannten Position platzieren. | 언어셋 v0.06 목록 시트 1621행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-055 | Material Setup | LI-TSS-DXI-02 | 추가 |  | Repeat the action until you have loaded the required quantity. | 언어셋 v0.06 목록 시트 1622행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-156 | Material Setup | LI-TSS-DXI-02 | 추가 |  | Close the door and check the lock. | 언어셋 v0.06 목록 시트 1623행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-157 | Material Setup | LI-TSS-DXI-02 | 추가 |  | Click [Done] to go to the Load Materials manual. | 언어셋 v0.06 목록 시트 1624행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-158 | Material Setup | LI-TSS-DXI-02 | 추가 |  | Number of filled slots in the storage | 언어셋 v0.06 목록 시트 1625행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-02 | 추가 |  | Done | 언어셋 v0.06 목록 시트 1627행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-03 | 추가 |  | Step | 언어셋 v0.06 목록 시트 1633행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-162 | Material Setup | LI-TSS-DXI-03 | 번역 수정 (German) | QR-Code des MB-Röhrchen scannen. | QR-Code des MB Tube scannen. | 언어셋 v0.06 목록 시트 1634행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-162 | Material Setup | LI-TSS-DXI-03 | 번역 수정 (Spanish) | Escanee el código QR del tubo MB. | Escanee el código QR del MB Tube. | 언어셋 v0.06 목록 시트 1634행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-163 | Material Setup | LI-TSS-DXI-03 | 변경 | Insert MB tube into storage slot. | Insert MB Tube into storage slot. | 언어셋 v0.06 목록 시트 1635행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-055 | Material Setup | LI-TSS-DXI-03 | 추가 |  | Repeat the action until you have loaded the required quantity. | 언어셋 v0.06 목록 시트 1636행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-156 | Material Setup | LI-TSS-DXI-03 | 추가 |  | Close the door and check the lock. | 언어셋 v0.06 목록 시트 1637행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-157 | Material Setup | LI-TSS-DXI-03 | 추가 |  | Click [Done] to go to the Load Materials manual. | 언어셋 v0.06 목록 시트 1638행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-158 | Material Setup | LI-TSS-DXI-03 | 추가 |  | Number of filled slots in the storage | 언어셋 v0.06 목록 시트 1639행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-03 | 추가 |  | Done | 언어셋 v0.06 목록 시트 1641행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-04 | 추가 |  | Step | 언어셋 v0.06 목록 시트 1643행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-102 | Material Setup | LI-TSS-DXI-04 | 추가 |  | Barcode: Right Side | 언어셋 v0.06 목록 시트 1644행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-068 | Material Setup | LI-TSS-DXI-04 | 추가 |  | STEP 1~3 Repeat | 언어셋 v0.06 목록 시트 1645행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-164 | Material Setup | LI-TSS-DXI-04 | 번역 수정 (German) | QR-Code der Pufferkartusche scannen. | QR-Code des Buffer Cartridge Set scannen. | 언어셋 v0.06 목록 시트 1646행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-154 | Material Setup | LI-TSS-DXI-04 | 추가 |  | Scan the QR code on the storage slot to load. | 언어셋 v0.06 목록 시트 1647행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-165 | Material Setup | LI-TSS-DXI-04 | 번역 수정 (German) | Pufferkartusche mit dem Barcode nach rechts weisend an der gescannten Position platzieren. | Buffer Cartridge Set mit dem Barcode nach rechts weisend an der gescannten Position platzieren. | 언어셋 v0.06 목록 시트 1648행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-055 | Material Setup | LI-TSS-DXI-04 | 추가 |  | Repeat the action until you have loaded the required quantity. | 언어셋 v0.06 목록 시트 1649행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-156 | Material Setup | LI-TSS-DXI-04 | 추가 |  | Close the door and check the lock. | 언어셋 v0.06 목록 시트 1650행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-157 | Material Setup | LI-TSS-DXI-04 | 추가 |  | Click [Done] to go to the Load Materials manual. | 언어셋 v0.06 목록 시트 1651행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-158 | Material Setup | LI-TSS-DXI-04 | 추가 |  | Number of filled slots in the storage | 언어셋 v0.06 목록 시트 1652행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-04 | 추가 |  | Done | 언어셋 v0.06 목록 시트 1654행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-05 | 추가 |  | Step | 언어셋 v0.06 목록 시트 1656행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-102 | Material Setup | LI-TSS-DXI-05 | 추가 |  | Barcode: Right Side | 언어셋 v0.06 목록 시트 1657행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-055 | Material Setup | LI-TSS-DXI-05 | 추가 |  | Repeat the action until you have loaded the required quantity. | 언어셋 v0.06 목록 시트 1660행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-156 | Material Setup | LI-TSS-DXI-05 | 추가 |  | Close the door and check the lock. | 언어셋 v0.06 목록 시트 1661행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-157 | Material Setup | LI-TSS-DXI-05 | 추가 |  | Click [Done] to go to the Load Materials manual. | 언어셋 v0.06 목록 시트 1662행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-158 | Material Setup | LI-TSS-DXI-05 | 추가 |  | Number of filled slots in the storage | 언어셋 v0.06 목록 시트 1663행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-05 | 추가 |  | Done | 언어셋 v0.06 목록 시트 1665행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-06 | 추가 |  | Step | 언어셋 v0.06 목록 시트 1669행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-067 | Material Setup | LI-TSS-DXI-06 | 추가 |  | QR code: Right Side | 언어셋 v0.06 목록 시트 1670행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-168 | Material Setup | LI-TSS-DXI-06 | 번역 수정 (Portuguese) | Encaixe de reagente PCR | Socket de reagente PCR | 언어셋 v0.06 목록 시트 1671행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-168 | Material Setup | LI-TSS-DXI-06 | 번역 수정 (Spanish) | Adaptador de reactivo PCR | Socket de reactivo PCR | 언어셋 v0.06 목록 시트 1671행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-169 | Material Setup | LI-TSS-DXI-06 | 변경 | MM tube socket | MM Tube socket | 언어셋 v0.06 목록 시트 1672행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-170 | Material Setup | LI-TSS-DXI-06 | 변경 | Scan the QR code of the PCR reagent / MM tube socket. | Scan the QR code of the PCR reagent / MM Tube socket. | 언어셋 v0.06 목록 시트 1673행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-154 | Material Setup | LI-TSS-DXI-06 | 추가 |  | Scan the QR code on the storage slot to load. | 언어셋 v0.06 목록 시트 1674행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-055 | Material Setup | LI-TSS-DXI-06 | 추가 |  | Repeat the action until you have loaded the required quantity. | 언어셋 v0.06 목록 시트 1675행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-156 | Material Setup | LI-TSS-DXI-06 | 추가 |  | Close the door and check the lock. | 언어셋 v0.06 목록 시트 1676행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-157 | Material Setup | LI-TSS-DXI-06 | 추가 |  | Click [Done] to go to the Load Materials manual. | 언어셋 v0.06 목록 시트 1677행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-06 | 추가 |  | Done | 언어셋 v0.06 목록 시트 1679행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-07 | 추가 |  | Step | 언어셋 v0.06 목록 시트 1682행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-172 | Material Setup | LI-TSS-DXI-07 | 번역 수정 (Portuguese) | Remova a bandeja do film. | Remova o tray do film. | 언어셋 v0.06 목록 시트 1683행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-172 | Material Setup | LI-TSS-DXI-07 | 번역 수정 (Spanish) | Retire la bandeja de film. | Retire el tray de film. | 언어셋 v0.06 목록 시트 1683행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-173 | Material Setup | LI-TSS-DXI-07 | 번역 수정 (Portuguese) | Remova a embalagem do film com o adesivo amarelo voltado para baixo e coloque o film na bandeja de film. | Remova a embalagem do film com o adesivo amarelo voltado para baixo e coloque o film no tray de film. | 언어셋 v0.06 목록 시트 1684행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-173 | Material Setup | LI-TSS-DXI-07 | 번역 수정 (Spanish) | Retire el embalaje del film con el adhesivo amarillo hacia abajo y coloque el film en la bandeja del film. | Retire el embalaje del film con el adhesivo amarillo hacia abajo y coloque el film en el tray del film. | 언어셋 v0.06 목록 시트 1684행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-174 | Material Setup | LI-TSS-DXI-07 | 번역 수정 (Portuguese) | Certifique-se de que o film está corretamente carregado e insira a bandeja de film | Certifique-se de que o film está corretamente carregado e insira o tray de film | 언어셋 v0.06 목록 시트 1685행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-174 | Material Setup | LI-TSS-DXI-07 | 번역 수정 (Spanish) | Asegúrese de que el film esté correctamente cargado e inserte la bandeja del film. | Asegúrese de que el film esté correctamente cargado e inserte el tray del film. | 언어셋 v0.06 목록 시트 1685행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-175 | Material Setup | LI-TSS-DXI-07 | 변경 | Enter the number of sealing films loaded in the field below and click the [save] button. | Enter the number of Sealing Films loaded in the field below. | 언어셋 v0.06 목록 시트 1686행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-176 | Material Setup | LI-TSS-DXI-07 | 변경 | Close the sealer door and check the lock. | Close the Sealer door and check the lock. | 언어셋 v0.06 목록 시트 1687행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-157 | Material Setup | LI-TSS-DXI-07 | 추가 |  | Click [Done] to go to the Load Materials manual. | 언어셋 v0.06 목록 시트 1688행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-07 | 추가 |  | Done | 언어셋 v0.06 목록 시트 1698행, v0.05 삭제 줄을 다시 씀 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-442 | Material Setup | LI-TSS-DXI-09 | 번역 수정 (German) | Öffnen Sie die Modultür und füllen Sie die Tub-Ersatzkappen im Trolley nach. | Öffnen Sie die Door des Moduls und füllen Sie die Tub-Ersatzkappen im Trolley nach. | 언어셋 v0.06 목록 시트 1707행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-442 | Material Setup | LI-TSS-DXI-09 | 번역 수정 (Portuguese) | Abra a porta do módulo e reponha as tampas de reserva de Tub no trolley. | Abra a door do módulo e reponha as tampas de reserva de Tub no trolley. | 언어셋 v0.06 목록 시트 1707행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-442 | Material Setup | LI-TSS-DXI-09 | 번역 수정 (Spanish) | Abra la puerta del módulo y reponga los tapones de repuesto de Tub en el carro. | Abra la door del módulo y reponga los tapones de repuesto de Tub en el trolley. | 언어셋 v0.06 목록 시트 1707행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-442 | Material Setup | LI-TSS-DXI-09 | 번역 수정 (Italian) | Apri lo sportello del modulo e rifornisci i tappi di riserva Tub nel trolley. | Apri la door del modulo e rifornisci i tappi di riserva Tub nel trolley. | 언어셋 v0.06 목록 시트 1707행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-442 | Material Setup | LI-TSS-DXI-09 | 번역 수정 (French) | Ouvrez la porte du module et réapprovisionnez les bouchons de rechange de Tub dans le trolley. | Ouvrez la door du module et réapprovisionnez les bouchons de rechange de Tub dans le trolley. | 언어셋 v0.06 목록 시트 1707행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-444 | Material Setup | LI-TSS-WBM / LI-TSS-WBM-P / LI-INS-01-P | 변경 | Select the unit to empty the waste bin. | Select the unit to empty the Waste Bin. | 언어셋 v0.06 목록 시트 1709행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-007 | Material Setup | LI-INS-01-P | 번역 수정 (German) | Tür-Steuerung | Door-Steuerung | 언어셋 v0.06 목록 시트 1713행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-007 | Material Setup | LI-INS-01-P | 번역 수정 (Portuguese) | Controlo da Porta | Controlo da Door | 언어셋 v0.06 목록 시트 1713행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-007 | Material Setup | LI-INS-01-P | 번역 수정 (Spanish) | Control de Puerta | Control de Door | 언어셋 v0.06 목록 시트 1713행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-007 | Material Setup | LI-INS-01-P | 번역 수정 (French) | Contrôle de la porte | Contrôle de la Door | 언어셋 v0.06 목록 시트 1713행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-014 | Material Setup | LI-INS-01-P | 번역 수정 (German) | Alle Türen entsperren | Alle Doors entsperren | 언어셋 v0.06 목록 시트 1714행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-014 | Material Setup | LI-INS-01-P | 번역 수정 (Portuguese) | Destravar todas as Portas | Destravar todas as doors | 언어셋 v0.06 목록 시트 1714행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-014 | Material Setup | LI-INS-01-P | 번역 수정 (Spanish) | Desbloquear todas las Puertas | Desbloquear todas las doors | 언어셋 v0.06 목록 시트 1714행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-014 | Material Setup | LI-INS-01-P | 번역 수정 (Italian) | Sblocca tutte le Doors | Sblocca tutte le doors | 언어셋 v0.06 목록 시트 1714행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-014 | Material Setup | LI-INS-01-P | 번역 수정 (French) | Déverrouiller toutes les portes | Déverrouiller toutes les doors | 언어셋 v0.06 목록 시트 1714행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-041 | Material Setup | LI-INS-01-P | 번역 수정 (German) | Pause zum Entsperren der Tür. Bitte warten. | Pause zum Entsperren der Door. Bitte warten. | 언어셋 v0.06 목록 시트 1721행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-041 | Material Setup | LI-INS-01-P | 번역 수정 (Portuguese) | A pausar para desbloquear a porta. Aguarde. | A pausar para desbloquear a door. Aguarde. | 언어셋 v0.06 목록 시트 1721행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-041 | Material Setup | LI-INS-01-P | 번역 수정 (Spanish) | Pausando para desbloquear la puerta. Espere. | Pausando para desbloquear la door. Espere. | 언어셋 v0.06 목록 시트 1721행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-041 | Material Setup | LI-INS-01-P | 번역 수정 (Italian) | Pausa in corso per lo sblocco dello sportello. Attendere. | Pausa in corso per lo sblocco della door. Attendere. | 언어셋 v0.06 목록 시트 1721행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-041 | Material Setup | LI-INS-01-P | 번역 수정 (French) | Mise en pause pour le déverrouillage de la porte. Veuillez patienter. | Mise en pause pour le déverrouillage de la door. Veuillez patienter. | 언어셋 v0.06 목록 시트 1721행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-039 | Material Setup | LI-INS-01-P | 번역 수정 (German) | * Schließen Sie die Tür und drücken Sie die Schaltfläche „Sperren“, um das Modul fortzusetzen | * Schließen Sie die Door und drücken Sie die Schaltfläche „Sperren“, um das Modul fortzusetzen | 언어셋 v0.06 목록 시트 1722행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-039 | Material Setup | LI-INS-01-P | 번역 수정 (Portuguese) | * Feche a porta e prima o botão 'Bloquear' para retomar o módulo | * Feche a door e prima o botão 'Bloquear' para retomar o módulo | 언어셋 v0.06 목록 시트 1722행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-039 | Material Setup | LI-INS-01-P | 번역 수정 (Spanish) | * Cierre la puerta y pulse el botón 'Bloquear' para reanudar el módulo | * Cierre la door y pulse el botón 'Bloquear' para reanudar el módulo | 언어셋 v0.06 목록 시트 1722행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-039 | Material Setup | LI-INS-01-P | 번역 수정 (Italian) | * Chiudi lo sportello e premi il pulsante 'Blocca' per riprendere il modulo | * Chiudi la door e premi il pulsante 'Blocca' per riprendere il modulo | 언어셋 v0.06 목록 시트 1722행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-INS-039 | Material Setup | LI-INS-01-P | 번역 수정 (French) | * Fermez la porte et appuyez sur le bouton « Verrouiller » pour reprendre le module | * Fermez la door et appuyez sur le bouton « Verrouiller » pour reprendre le module | 언어셋 v0.06 목록 시트 1722행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-449 | Material Setup | LI-TSS-RGE-01 | 번역 수정 (Spanish) | Carro de consumibles Prep | Trolley de consumibles Prep | 언어셋 v0.06 목록 시트 1726행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-450 | Material Setup | LI-TSS-RGE-01 | 번역 수정 (Spanish) | Escanee un carro de consumibles o seleccione uno de la lista. | Escanee un trolley de consumibles o seleccione uno de la lista. | 언어셋 v0.06 목록 시트 1727행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-089 | Material Setup | LI-TSS-RGE-01 | 변경 | Select trolley | Select Trolley | 언어셋 v0.06 목록 시트 1728행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-451 | Material Setup | LI-TSS-RGE-01 | 번역 수정 (Spanish) | Seleccione un carro de consumibles a continuación para ver las cantidades restantes en la página de detalles. | Seleccione un trolley de consumibles a continuación para ver las cantidades restantes en la página de detalles. | 언어셋 v0.06 목록 시트 1729행 | 하승현 |
| 2026-11-19 | v0.06 | ref: LID-MAS-090 | Material Setup | LI-TSS-RGE-01 | 번역 수정 (Spanish) | Nombre del carro | Nombre del Trolley | 언어셋 v0.06 목록 시트 1730행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-453 | Material Setup | LI-TSS-RGE-02 | 번역 수정 (Portuguese) | Verificar o nível do trolley e o espaço da bandeja | Verificar o nível do trolley e o espaço do tray | 언어셋 v0.06 목록 시트 1732행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-453 | Material Setup | LI-TSS-RGE-02 | 번역 수정 (Spanish) | Verificar el nivel del carro y la ranura de la bandeja | Verificar el nivel del trolley y la ranura del tray | 언어셋 v0.06 목록 시트 1732행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-455 | Material Setup | LI-TSS-RGE-02 | 번역 수정 (Spanish) | Nivel del carro | Nivel del Trolley | 언어셋 v0.06 목록 시트 1734행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-456 | Material Setup | LI-TSS-RGE-02 | 번역 수정 (Portuguese) | Espaço da bandeja | Espaço do Tray | 언어셋 v0.06 목록 시트 1735행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-456 | Material Setup | LI-TSS-RGE-02 | 번역 수정 (Spanish) | Ranura de la bandeja | Ranura del Tray | 언어셋 v0.06 목록 시트 1735행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-457 | Material Setup | LI-TSS-RGE-02 | 번역 수정 (German) | Handhabungsanleitung PK/IC-Röhrchen | Handhabungsanleitung PK/IC Tube | 언어셋 v0.06 목록 시트 1736행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-457 | Material Setup | LI-TSS-RGE-02 | 번역 수정 (Spanish) | Guía de manipulación de tubos PK/IC | Guía de manipulación de PK/IC Tubes | 언어셋 v0.06 목록 시트 1736행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-457 | Material Setup | LI-TSS-RGE-02 | 번역 수정 (French) | Guide de manipulation des tubes PK/IC | Guide de manipulation des PK/IC Tubes | 언어셋 v0.06 목록 시트 1736행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-473 | Material Setup | LI-TSS-RGE-02 | 번역 수정 (German) | Die verbleibenden PK/IC-Röhrchen können verwendet werden. | Die verbleibenden PK/IC Tubes können verwendet werden. | 언어셋 v0.06 목록 시트 1752행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-473 | Material Setup | LI-TSS-RGE-02 | 번역 수정 (Spanish) | Los tubos PK/IC restantes están disponibles para su uso. | Los PK/IC Tubes restantes están disponibles para su uso. | 언어셋 v0.06 목록 시트 1752행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-473 | Material Setup | LI-TSS-RGE-02 | 번역 수정 (French) | Les tubes PK/IC restants sont disponibles. | Les PK/IC Tubes restants sont disponibles. | 언어셋 v0.06 목록 시트 1752행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-475 | Material Setup | LI-TSS-RGE-02 | 번역 수정 (German) | Ein verfügbares PK/IC-Röhrchen erneut laden. | Ein verfügbares PK/IC Tube erneut laden. | 언어셋 v0.06 목록 시트 1754행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-475 | Material Setup | LI-TSS-RGE-02 | 번역 수정 (Spanish) | Vuelva a cargar un tubo PK/IC disponible. | Vuelva a cargar un PK/IC Tube disponible. | 언어셋 v0.06 목록 시트 1754행 | 하승현 |
| 2026-11-19 | v0.06 | LID-MAS-475 | Material Setup | LI-TSS-RGE-02 | 번역 수정 (French) | Rechargez un tube PK/IC disponible. | Rechargez un PK/IC Tube disponible. | 언어셋 v0.06 목록 시트 1754행 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-001 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 5행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-002 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 6행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-003 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 7행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-004 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 8행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-005 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 9행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-006 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 10행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-007 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 11행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-008 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 12행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-009 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 13행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-010 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 14행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-011 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 15행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-012 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 16행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-013 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 17행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-014 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 18행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-015 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 19행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-016 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 20행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-017 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 21행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-018 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 22행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-019 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 23행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-020 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 24행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-021 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 25행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-022 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 26행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-023 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 27행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-024 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 28행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-025 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 29행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-026 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 30행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-027 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 31행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-028 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 32행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-029 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 33행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-030 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 34행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-031 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 35행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-032 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 36행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-033 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 37행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-034 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 38행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-035 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 39행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-036 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 40행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-037 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 41행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-038 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 42행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-039 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 43행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-040 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 44행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-041 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 45행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-042 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 46행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-043 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 47행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-044 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 48행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-045 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 49행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-046 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 50행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-047 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 51행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-048 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 52행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-049 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 53행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-050 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 54행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-051 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 55행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-052 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 56행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-053 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 57행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-054 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 58행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-055 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 59행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-056 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 60행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-057 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 61행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-058 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 62행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-059 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 63행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-060 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 64행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-061 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 65행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-062 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 66행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-063 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 67행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-064 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 68행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-065 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 69행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-066 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 70행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-067 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 71행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-068 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 72행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-069 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 73행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-070 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 74행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-071 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 75행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-072 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 76행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-073 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 77행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-074 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 78행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-075 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 79행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-076 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 80행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-077 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 81행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-078 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 82행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-079 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 83행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-080 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 84행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-081 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 85행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-082 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 86행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-083 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 87행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-084 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 88행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-085 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 89행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-086 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 90행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-087 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 91행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-088 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 92행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-089 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 93행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-090 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 94행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-091 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 95행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-092 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 96행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-093 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 97행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-094 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 98행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-095 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 99행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-096 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 100행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-097 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 101행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-098 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 102행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-099 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 103행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-100 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 104행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-101 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 105행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-102 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 106행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-103 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 107행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-104 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 108행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-105 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 109행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-217 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 110행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-106 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 111행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-107 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 112행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-108 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 113행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-109 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 114행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-110 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 115행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-111 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 116행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-112 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 117행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-113 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 118행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-114 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 119행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-115 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 120행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-116 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 121행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-117 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 122행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-118 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 123행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-119 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 124행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-120 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 125행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-218 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 126행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-219 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 127행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-121 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 128행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-122 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 129행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-220 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 130행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-221 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 131행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-222 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 132행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-123 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 133행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-124 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 134행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-125 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 135행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-126 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 136행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-127 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 137행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-128 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 138행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-129 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 139행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-130 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 140행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-131 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 141행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-132 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 142행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-133 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 143행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-134 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 144행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-135 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 145행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-136 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 146행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-137 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 147행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-138 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 148행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-139 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 149행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-140 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 150행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-141 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 151행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-142 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 152행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-143 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 153행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-144 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 154행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-145 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 155행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-146 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 156행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-147 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 157행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-148 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 158행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-149 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 159행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-150 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 160행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-151 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 161행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-152 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 162행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-153 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 163행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-154 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 164행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-155 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 165행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-156 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 166행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-157 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 167행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-158 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 168행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-159 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 169행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-160 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 170행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-161 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 171행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-162 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 172행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-163 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 173행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-164 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 174행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-165 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 175행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-166 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 176행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-167 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 177행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-168 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 178행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-169 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 179행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-170 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 180행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-171 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 181행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-172 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 182행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-173 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 183행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-174 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 184행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-175 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 185행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-176 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 186행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-177 | 공통 |  | 번역 추가 (Korean) |  | 시간 (sec) | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 187행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-178 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 188행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-179 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 189행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-180 | 공통 |  | 번역 추가 (Korean) |  | 시간 (sec) | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 190행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-181 | 공통 |  | 번역 추가 (Korean) |  | 상등액 이동 | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 191행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-182 | 공통 |  | 번역 추가 (Korean) |  | 상등액 제거 | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 192행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-183 | 공통 |  | 번역 추가 (Korean) |  | Buffer 분주 & 혼합 | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 193행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-184 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 194행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-185 | 공통 |  | 번역 추가 (Korean) |  | 가열 온도 (ºC) | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 195행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-186 | 공통 |  | 번역 추가 (Korean) |  | Incubation 시간 (sec) | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 196행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-187 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 197행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-188 | 공통 |  | 번역 추가 (Korean) |  | Incubation 시간 (sec) | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 198행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-189 | 공통 |  | 번역 추가 (Korean) |  | PK 처리 | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 199행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-190 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 200행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-191 | 공통 |  | 번역 추가 (Korean) |  | 명칭 | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 201행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-192 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 202행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-193 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 203행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-194 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 204행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-195 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 205행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-196 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 206행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-197 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 207행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-198 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 208행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-199 | 공통 |  | 번역 추가 (Korean) |  | 용량 (μL) | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 209행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-200 | 공통 |  | 번역 추가 (Korean) |  | 유지 온도 (˚C) | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 210행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-201 | 공통 |  | 번역 추가 (Korean) |  | 동작 | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 211행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-202 | 공통 |  | 번역 추가 (Korean) |  | 미사용 | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 212행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-203 | 공통 |  | 번역 추가 (Korean) |  | 정방향 | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 213행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-204 | 공통 |  | 번역 추가 (Korean) |  | 정방향 상/하 | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 214행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-205 | 공통 |  | 번역 추가 (Korean) |  | 역방향 | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 215행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-206 | 공통 |  | 번역 추가 (Korean) |  | 역방향 상/하 | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 216행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-207 | 공통 |  | 번역 추가 (Korean) |  | 단계 | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 217행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-208 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 218행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-209 | 공통 |  | 번역 추가 (Korean) |  | 온도 (˚C) | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 219행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-210 | 공통 |  | 번역 추가 (Korean) |  | 혼합 시간 (min) | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 220행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-211 | 공통 |  | 번역 추가 (Korean) |  | 혼합 속도 (rpm) | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 221행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-212 | 공통 |  | 번역 추가 (Korean) |  | Collect 시간 (sec) | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 222행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-212 | 공통 |  | 번역 수정 (Italian) | Tempo di  raccolta (sec) | Tempo di raccolta (sec) | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 222행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-213 | 공통 |  | 번역 추가 (Korean) |  | 증발 시간 (min) | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 223행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-214 | 공통 |  | 번역 추가 (Korean) |  | 일시정지 | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 224행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-215 | 공통 |  | 번역 추가 (Korean) |  | 켜짐 | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 225행 · R003 · 목록 LID-STN-070 글자 (R003 답 3) | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-216 | 공통 |  | 번역 추가 (Korean) |  | 꺼짐 | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 226행 · R003 · 목록 LID-STN-071 글자 (R003 답 3) | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-223 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 227행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-224 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 228행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-225 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 229행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-226 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 230행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-227 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 231행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-TRM-228 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) A. 고유명사 / 용어집 시트 232행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-002 | 공통 |  | 번역 추가 (Korean) |  | 대시보드 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 6행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-003 | 공통 |  | 번역 추가 (Korean) |  | 검사 재료 준비 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 7행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-009 | 공통 |  | 번역 추가 (Korean) |  | 검사 관리 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 13행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-010 | 공통 |  | 번역 추가 (Korean) |  | 검사 오더 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 14행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-011 | 공통 |  | 번역 추가 (Korean) |  | 검사 상태 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 15행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-012 | 공통 |  | 번역 추가 (Korean) |  | 검체 추적 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 16행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-013 | 공통 |  | 번역 추가 (Korean) |  | 검체 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 17행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-014 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 18행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-015 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 19행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-016 | 공통 |  | 번역 추가 (Korean) |  | 장비 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 20행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-017 | 공통 |  | 번역 추가 (Korean) |  | 재고 관리 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 21행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-018 | 공통 |  | 번역 추가 (Korean) |  | 통계 분석 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 22행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-019 | 공통 |  | 번역 추가 (Korean) |  | 검사 분석 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 23행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-020 | 공통 |  | 번역 추가 (Korean) |  | 검사 예측 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 24행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-021 | 공통 |  | 번역 추가 (Korean) |  | 장비 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 25행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-022 | 공통 |  | 번역 추가 (Korean) |  | 재고 관리 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 26행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-024 | 공통 |  | 번역 추가 (Korean) |  | 설정 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 28행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-025 | 공통 |  | 번역 추가 (Korean) |  | 정책 설정 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 29행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-026 | 공통 |  | 번역 추가 (Korean) |  | 프로토콜 설정 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 30행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-027 | 공통 |  | 번역 추가 (Korean) |  | LIS 설정 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 31행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-028 | 공통 |  | 번역 추가 (Korean) |  | 시스템 설정 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 32행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-029 | 공통 |  | 번역 추가 (Korean) |  | 계정 설정 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 33행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-033 | 공통 |  | 번역 추가 (Korean) |  | 정보 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 37행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-037 | 공통 |  | 번역 추가 (Korean) |  | 빠른 검사 시작 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 41행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-038 | 공통 |  | 번역 추가 (Korean) |  | 검사 실행 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 42행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-044 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 48행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-045 | 공통 |  | 번역 추가 (Korean) |  | 장비 | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 49행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-046 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 50행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-MEN-047 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) B. 메뉴 / 내비게이션 시트 51행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-001 | 공통 |  | 번역 추가 (Korean) |  | 접수됨 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 5행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-002 | 공통 |  | 번역 추가 (Korean) |  | 준비됨 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 6행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-003 | 공통 |  | 번역 추가 (Korean) |  | 검사 중 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 7행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-004 | 공통 |  | 번역 추가 (Korean) |  | 실패 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 8행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-005 | 공통 |  | 번역 추가 (Korean) |  | 완료됨 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 9행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-006 | 공통 |  | 번역 추가 (Korean) |  | 검사 안됨 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 10행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-007 | 공통 |  | 번역 추가 (Korean) |  | 준비 안 됨 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 11행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-008 | 공통 |  | 번역 추가 (Korean) |  | 준비 완료 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 12행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-009 | 공통 |  | 번역 추가 (Korean) |  | 대기 중 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 13행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-010 | 공통 |  | 번역 추가 (Korean) |  | 진행 중 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 14행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-011 | 공통 |  | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 15행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-012 | 공통 |  | 번역 추가 (Korean) |  | 초기화 필요 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 16행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-013 | 공통 |  | 번역 추가 (Korean) |  | 초기화 중 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 17행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-014 | 공통 |  | 번역 추가 (Korean) |  | 준비 완료 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 18행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-015 | 공통 |  | 번역 추가 (Korean) |  | 가동 중 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 19행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-018 | 공통 |  | 번역 추가 (Korean) |  | 가동 중지 중 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 22행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-019 | 공통 |  | 번역 추가 (Korean) |  | 일부 가동 중 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 23행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-020 | 공통 |  | 번역 추가 (Korean) |  | 오류 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 24행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-021 | 공통 |  | 번역 추가 (Korean) |  | 연결됨 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 25행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-022 | 공통 |  | 번역 추가 (Korean) |  | 연결 안 됨 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 26행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-023 | 공통 |  | 번역 추가 (Korean) |  | 사용 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 27행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-024 | 공통 |  | 번역 추가 (Korean) |  | 사용 안 함 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 28행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-025 | 공통 |  | 번역 추가 (Korean) |  | 잠김 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 29행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-026 | 공통 |  | 번역 추가 (Korean) |  | 잠금 해제 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 30행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-027 | 공통 |  | 번역 추가 (Korean) |  | 열림 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 31행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-028 | 공통 |  | 번역 추가 (Korean) |  | 닫힘 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 32행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-029 | 공통 |  | 번역 추가 (Korean) |  | 장착됨 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 33행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-030 | 공통 |  | 번역 추가 (Korean) |  | 분리됨 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 34행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-031 | 공통 |  | 번역 추가 (Korean) |  | 실온 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 35행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-032 | 공통 |  | 번역 추가 (Korean) |  | 냉장 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 36행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-033 | 공통 |  | 번역 추가 (Korean) |  | 정상 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 37행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-034 | 공통 |  | 번역 추가 (Korean) |  | 경고 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 38행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-035 | 공통 |  | 번역 추가 (Korean) |  | 가득 참 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 39행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-038 | 공통 |  | 번역 추가 (Korean) |  | 경고 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 42행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-039 | 공통 |  | 번역 추가 (Korean) |  | 오류 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 43행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-040 | 공통 |  | 번역 추가 (Korean) |  | 열림 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 44행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-041 | 공통 |  | 번역 추가 (Korean) |  | 닫힘 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 45행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-042 | 공통 |  | 번역 추가 (Korean) |  | 정상 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 46행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-043 | 공통 |  | 번역 추가 (Korean) |  | 부족 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 47행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-044 | 공통 |  | 번역 추가 (Korean) |  | 비어 있음 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 48행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-047 | 공통 |  | 번역 추가 (Korean) |  | 유효함 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 51행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-048 | 공통 |  | 번역 추가 (Korean) |  | 30일 이내 만료 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 52행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-049 | 공통 |  | 번역 추가 (Korean) |  | 만료 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 53행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-050 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 54행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-051 | 공통 |  | 번역 추가 (Korean) |  | 사용자 | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 55행 · R003 · 목록 LID-STN-075 글자 (R003 답 3) | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-052 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 56행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-SCD-053 | 공통 |  | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) C. 상태값 / 코드값 시트 57행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-001 | 공통 |  | 번역 추가 (Korean) |  | 초기화 | 언어셋 첨부 (R002) D. 버튼 시트 5행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-002 | 공통 |  | 번역 추가 (Korean) |  | 검색 | 언어셋 첨부 (R002) D. 버튼 시트 6행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-003 | 공통 |  | 번역 추가 (Korean) |  | 내보내기 | 언어셋 첨부 (R002) D. 버튼 시트 7행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-004 | 공통 |  | 번역 추가 (Korean) |  | 가져오기 | 언어셋 첨부 (R002) D. 버튼 시트 8행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-005 | 공통 |  | 번역 추가 (Korean) |  | 새로고침 | 언어셋 첨부 (R002) D. 버튼 시트 9행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-006 | 공통 |  | 번역 추가 (Korean) |  | 다음 | 언어셋 첨부 (R002) D. 버튼 시트 10행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-007 | 공통 |  | 번역 추가 (Korean) |  | 이전 | 언어셋 첨부 (R002) D. 버튼 시트 11행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-008 | 공통 |  | 번역 추가 (Korean) |  | 취소 | 언어셋 첨부 (R002) D. 버튼 시트 12행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-009 | 공통 |  | 번역 추가 (Korean) |  | 닫기 | 언어셋 첨부 (R002) D. 버튼 시트 13행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-010 | 공통 |  | 번역 추가 (Korean) |  | 확인 | 언어셋 첨부 (R002) D. 버튼 시트 14행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-011 | 공통 |  | 번역 추가 (Korean) |  | 삭제 | 언어셋 첨부 (R002) D. 버튼 시트 15행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-012 | 공통 |  | 번역 추가 (Korean) |  | 적용 | 언어셋 첨부 (R002) D. 버튼 시트 16행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-013 | 공통 |  | 번역 추가 (Korean) |  | 저장 | 언어셋 첨부 (R002) D. 버튼 시트 17행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-014 | 공통 |  | 번역 추가 (Korean) |  | 추가 | 언어셋 첨부 (R002) D. 버튼 시트 18행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-015 | 공통 |  | 번역 추가 (Korean) |  | 편집 | 언어셋 첨부 (R002) D. 버튼 시트 19행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-016 | 공통 |  | 번역 추가 (Korean) |  | 수정 | 언어셋 첨부 (R002) D. 버튼 시트 20행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-017 | 공통 |  | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) D. 버튼 시트 21행 · R003 | 하승현 |
| 2026-11-26 |  | LID-COM-BTN-018 | 공통 |  | 번역 추가 (Korean) |  | 더보기 | 언어셋 첨부 (R002) D. 버튼 시트 22행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-001 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-01-P / LI-EVT-01-P | 번역 추가 (Korean) |  | 이벤트 이력 | 언어셋 첨부 (R002) 목록 시트 9행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-002 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 이벤트 ID, 코드 | 언어셋 첨부 (R002) 목록 시트 10행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-003 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 11행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-004 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-01-P / LI-EVT-01-P / TI-EVT-02-P / LI-EVT-02-P | 번역 추가 (Korean) |  | 유형 | 언어셋 첨부 (R002) 목록 시트 12행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-005 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-01-P / LI-EVT-01-P | 번역 추가 (Korean) |  | 장비 | 언어셋 첨부 (R002) 목록 시트 13행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-IVT-001 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 재고 | 언어셋 첨부 (R002) 목록 시트 17행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-SPT-022 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 검체 | 언어셋 첨부 (R002) 목록 시트 18행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-009 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 시스템 | 언어셋 첨부 (R002) 목록 시트 19행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-010 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 코드 | 언어셋 첨부 (R002) 목록 시트 20행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-011 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-01-P / LI-EVT-01-P / TI-EVT-02-P / LI-EVT-02-P | 번역 추가 (Korean) |  | 설명 | 언어셋 첨부 (R002) 목록 시트 22행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-012 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-01-P / LI-EVT-01-P / TI-EVT-02-P / LI-EVT-02-P | 번역 추가 (Korean) |  | 모듈 | 언어셋 첨부 (R002) 목록 시트 23행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-013 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-01-P / LI-EVT-01-P / TI-EVT-02-P / LI-EVT-02-P | 번역 추가 (Korean) |  | 유닛 | 언어셋 첨부 (R002) 목록 시트 24행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-014 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-01-P / LI-EVT-01-P | 번역 추가 (Korean) |  | 레벨 | 언어셋 첨부 (R002) 목록 시트 25행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-037 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-01-P / LI-EVT-01-P / TI-EVT-02-P / LI-EVT-02-P | 번역 추가 (Korean) |  | 오류 | 언어셋 첨부 (R002) 목록 시트 26행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-038 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-01-P / LI-EVT-01-P / TI-EVT-02-P / LI-EVT-02-P | 번역 추가 (Korean) |  | 경고 | 언어셋 첨부 (R002) 목록 시트 27행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-015 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 발생일 | 언어셋 첨부 (R002) 목록 시트 28행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-016 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-01-P / LI-EVT-01-P | 번역 추가 (Korean) |  | 발생 일시 | 언어셋 첨부 (R002) 목록 시트 29행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-017 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-01-P / LI-EVT-01-P | 번역 추가 (Korean) |  | 상태 | 언어셋 첨부 (R002) 목록 시트 30행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-042 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-01-P / LI-EVT-01-P | 번역 추가 (Korean) |  | 열림 | 언어셋 첨부 (R002) 목록 시트 31행 · R003 · 공통 LID-COM-SCD-040 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-EVT-043 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-01-P / LI-EVT-01-P | 번역 추가 (Korean) |  | 닫힘 | 언어셋 첨부 (R002) 목록 시트 32행 · R003 · 공통 LID-COM-SCD-041 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-STN-012 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 상세 정보 | 언어셋 첨부 (R002) 목록 시트 33행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-006 | Event History | LI-EVT-P | 번역 추가 (Korean) |  | 항목 | 언어셋 첨부 (R002) 목록 시트 34행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-022 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 초기화 | 언어셋 첨부 (R002) 목록 시트 37행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-016 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 검색 | 언어셋 첨부 (R002) 목록 시트 38행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-023 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 내보내기 | 언어셋 첨부 (R002) 목록 시트 39행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-024 | Event History | LI-EVT-P | 번역 추가 (Korean) |  | 종료 처리 | 언어셋 첨부 (R002) 목록 시트 40행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-021 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 날짜 선택 | 언어셋 첨부 (R002) 목록 시트 41행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STA-015 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 일 | 언어셋 첨부 (R002) 목록 시트 42행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STA-009 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 월 | 언어셋 첨부 (R002) 목록 시트 43행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STA-010 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 화 | 언어셋 첨부 (R002) 목록 시트 44행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STA-011 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 수 | 언어셋 첨부 (R002) 목록 시트 45행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STA-012 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 목 | 언어셋 첨부 (R002) 목록 시트 46행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STA-013 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 금 | 언어셋 첨부 (R002) 목록 시트 47행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STA-014 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 토 | 언어셋 첨부 (R002) 목록 시트 48행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-025 | Event History | TI-EVT-P / LI-EVT-P | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 49행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-026 | Event History | TI-EVT-01-P / LI-EVT-01-P | 번역 추가 (Korean) |  | 목록으로 | 언어셋 첨부 (R002) 목록 시트 53행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-027 | Event History | TI-EVT-01-P / LI-EVT-01-P | 번역 추가 (Korean) |  | 업데이트 일시 | 언어셋 첨부 (R002) 목록 시트 54행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-028 | Event History | TI-EVT-01-P / LI-EVT-01-P | 번역 추가 (Korean) |  | 수정자 | 언어셋 첨부 (R002) 목록 시트 55행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-029 | Event History | TI-EVT-01-P / LI-EVT-01-P | 번역 추가 (Korean) |  | 이벤트 정보 | 언어셋 첨부 (R002) 목록 시트 56행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-030 | Event History | TI-EVT-01-P / LI-EVT-01-P | 번역 추가 (Korean) |  | 이벤트 ID | 언어셋 첨부 (R002) 목록 시트 57행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-031 | Event History | TI-EVT-01-P / LI-EVT-01-P / TI-EVT-02-P / LI-EVT-02-P | 번역 추가 (Korean) |  | 권장 조치 | 언어셋 첨부 (R002) 목록 시트 59행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-032 | Event History | TI-EVT-01-P / LI-EVT-01-P | 번역 추가 (Korean) |  | 장비 정보 | 언어셋 첨부 (R002) 목록 시트 60행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-026 | Event History | TI-EVT-01-P / LI-EVT-01-P | 번역 추가 (Korean) |  | 프로세스 | 언어셋 첨부 (R002) 목록 시트 61행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-033 | Event History | TI-EVT-01-P / LI-EVT-01-P | 번역 추가 (Korean) |  | 메모 | 언어셋 첨부 (R002) 목록 시트 62행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-034 | Event History | LI-EVT-01-P | 번역 추가 (Korean) |  | 조치 내용을 입력하십시오. | 언어셋 첨부 (R002) 목록 시트 63행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-035 | Event History | LI-EVT-01-P | 번역 추가 (Korean) |  | 0/n자 | 언어셋 첨부 (R002) 목록 시트 64행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-036 | Event History | TI-EVT-01-P / LI-EVT-01-P | 번역 추가 (Korean) |  | 목록 | 언어셋 첨부 (R002) 목록 시트 65행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-021 | Event History | LI-EVT-01-P | 번역 추가 (Korean) |  | 취소 | 언어셋 첨부 (R002) 목록 시트 66행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-022 | Event History | LI-EVT-01-P | 번역 추가 (Korean) |  | 저장 | 언어셋 첨부 (R002) 목록 시트 67행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-INS-018 | Event History | TI-EVT-02-P / LI-EVT-02-P | 번역 추가 (Korean) |  | 이벤트 | 언어셋 첨부 (R002) 목록 시트 68행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-039 | Event History | TI-EVT-02-P / LI-EVT-02-P | 번역 추가 (Korean) |  | 닫기 | 언어셋 첨부 (R002) 목록 시트 69행 · R003 | 하승현 |
| 2026-11-26 |  | LID-EVT-040 | Event History | TI-EVT-02-P / LI-EVT-02-P | 번역 추가 (Korean) |  | 상세 보기 | 언어셋 첨부 (R002) 목록 시트 70행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-001 | Login | TI-LOG / LI-LOG | 번역 수정 (French) | Connexion | Se connecter | 언어셋 첨부 (R002) 목록 시트 72행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-001 | Login | TI-LOG / LI-LOG | 번역 추가 (Korean) |  | 로그인 | 언어셋 첨부 (R002) 목록 시트 72행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-002 | Login | TI-LOG / LI-LOG | 번역 추가 (Korean) |  | 페이지에 접속하려면 ID와 비밀번호를 입력하십시오. | 언어셋 첨부 (R002) 목록 시트 73행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-003 | Login | TI-LOG / LI-LOG | 번역 추가 (Korean) |  | ID | 언어셋 첨부 (R002) 목록 시트 74행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-004 | Login | TI-LOG / LI-LOG | 번역 추가 (Korean) |  | ID를 입력하십시오. | 언어셋 첨부 (R002) 목록 시트 75행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-005 | Login | TI-LOG / LI-LOG | 번역 추가 (Korean) |  | 비밀번호 | 언어셋 첨부 (R002) 목록 시트 76행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-006 | Login | TI-LOG / LI-LOG | 번역 추가 (Korean) |  | 비밀번호를 입력하십시오. | 언어셋 첨부 (R002) 목록 시트 77행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-007 | Login | TI-LOG / LI-LOG | 번역 추가 (Korean) |  | 로그인 | 언어셋 첨부 (R002) 목록 시트 78행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-009 | Login | TI-LOG / LI-LOG | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 80행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-010 | Login | TI-LOG/Case / LI-LOG/Case | 번역 추가 (Korean) |  | ID 또는 비밀번호가 올바르지 않습니다. (1/10회 시도) | 언어셋 첨부 (R002) 목록 시트 81행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-011 | Login | TI-LOG-01-P / LI-LOG-01-P | 번역 추가 (Korean) |  | 기존 비밀번호 초기화 | 언어셋 첨부 (R002) 목록 시트 83행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-012 | Login | TI-LOG-01-P / LI-LOG-01-P | 번역 추가 (Korean) |  | 계정 보안을 위해 초기 비밀번호를 변경하십시오. | 언어셋 첨부 (R002) 목록 시트 84행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-013 | Login | TI-LOG-01-P / LI-LOG-01-P | 번역 추가 (Korean) |  | 새 비밀번호 | 언어셋 첨부 (R002) 목록 시트 85행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-014 | Login | TI-LOG-01-P / LI-LOG-01-P | 번역 추가 (Korean) |  | 올바른 비밀번호를 입력하세요. | 언어셋 첨부 (R002) 목록 시트 86행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-015 | Login | TI-LOG-01-P / LI-LOG-01-P | 번역 추가 (Korean) |  | 비밀번호 규칙 | 언어셋 첨부 (R002) 목록 시트 87행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-016 | Login | TI-LOG-01-P / LI-LOG-01-P | 번역 추가 (Korean) |  | 8~64자로 입력할 수 있습니다. | 언어셋 첨부 (R002) 목록 시트 88행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-017 | Login | TI-LOG-01-P / LI-LOG-01-P | 번역 추가 (Korean) |  | 영문자(A-Z, a-z), 숫자(0-9), 특수문자를 사용할 수 있습니다. | 언어셋 첨부 (R002) 목록 시트 89행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-018 | Login | TI-LOG-01-P / LI-LOG-01-P | 번역 추가 (Korean) |  | 대소문자를 구분합니다. | 언어셋 첨부 (R002) 목록 시트 90행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-020 | Login | TI-LOG-01-P / LI-LOG-01-P | 번역 추가 (Korean) |  | 새 비밀번호 확인 | 언어셋 첨부 (R002) 목록 시트 92행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-021 | Login | TI-LOG-01-P / LI-LOG-01-P | 번역 추가 (Korean) |  | 새 비밀번호를 다시 입력하세요. | 언어셋 첨부 (R002) 목록 시트 93행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-022 | Login | TI-LOG-01-P / LI-LOG-01-P | 번역 추가 (Korean) |  | 비밀번호가 일치하지 않습니다. | 언어셋 첨부 (R002) 목록 시트 94행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-022 | Login | TI-LOG-01-P / LI-LOG-01-P | 번역 추가 (Korean) |  | 저장 | 언어셋 첨부 (R002) 목록 시트 95행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-021 | Login | TI-LOG-01-P / LI-LOG-01-P | 번역 추가 (Korean) |  | 취소 | 언어셋 첨부 (R002) 목록 시트 96행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-024 | Login | TI-LOG-02-P / LI-LOG-02-P | 번역 추가 (Korean) |  | 계정 잠김 | 언어셋 첨부 (R002) 목록 시트 97행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-025 | Login | TI-LOG-02-P / LI-LOG-02-P | 번역 추가 (Korean) |  | 보안을 위해 로그인 10회 실패하여 계정이 일시적으로 잠겼습니다. | 언어셋 첨부 (R002) 목록 시트 98행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-026 | Login | TI-LOG-02-P / LI-LOG-02-P | 번역 추가 (Korean) |  | 잠금 해제까지 남은 시간 | 언어셋 첨부 (R002) 목록 시트 99행 · R003 | 하승현 |
| 2026-11-26 |  | LID-LOG-027 | Login | TI-LOG-02-P / LI-LOG-02-P | 번역 추가 (Korean) |  | 잠금이 해제되면 다시 로그인할 수 있습니다. | 언어셋 첨부 (R002) 목록 시트 100행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-011 | Login | TI-LOG-02-P / LI-LOG-02-P | 번역 추가 (Korean) |  | 확인 | 언어셋 첨부 (R002) 목록 시트 101행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-001 | Run | LI-RUN-P | 번역 추가 (Korean) |  | 실행 준비 전 확인사항 | 언어셋 첨부 (R002) 목록 시트 102행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-002 | Run | LI-RUN-P | 번역 추가 (Korean) |  | 아래 항목을 모두 확인한 후 다시 실행하십시오. | 언어셋 첨부 (R002) 목록 시트 103행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-003 | Run | LI-RUN-P | 번역 추가 (Korean) |  | 검체 데이터 로드 실패 | 언어셋 첨부 (R002) 목록 시트 104행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-004 | Run | LI-RUN-P | 번역 추가 (Korean) |  | 로드 오류가 발생했습니다. 장치 상태를 확인한 후 다시 시도하십시오. | 언어셋 첨부 (R002) 목록 시트 105행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-005 | Run | LI-RUN-P | 번역 추가 (Korean) |  | 네트워크 상태 | 언어셋 첨부 (R002) 목록 시트 108행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-006 | Run | LI-RUN-P | 번역 추가 (Korean) |  | 네트워크 상태를 확인하십시오. | 언어셋 첨부 (R002) 목록 시트 109행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-005 | Run | LI-RUN-P | 번역 추가 (Korean) |  | 장비 | 언어셋 첨부 (R002) 목록 시트 110행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-007 | Run | LI-RUN-P | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 111행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-008 | Run | LI-RUN-P | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 112행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-009 | Run | LI-RUN-P | 번역 추가 (Korean) |  | 도어 상태 | 언어셋 첨부 (R002) 목록 시트 113행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-010 | Run | LI-RUN-P | 번역 추가 (Korean) |  | 모듈의 도어 열림 상태를 확인하십시오. | 언어셋 첨부 (R002) 목록 시트 114행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-012 | Run | LI-RUN-P | 번역 추가 (Korean) |  | 모듈 | 언어셋 첨부 (R002) 목록 시트 115행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-011 | Run | LI-RUN-P | 번역 추가 (Korean) |  | 확인 | 언어셋 첨부 (R002) 목록 시트 116행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-012 | Run | LI-RUN-01 / LI-RUN-02-01 / LI-RUN-02 / LI-RUN-03 | 번역 추가 (Korean) |  | 검사 준비 | 언어셋 첨부 (R002) 목록 시트 117행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-013 | Run | LI-RUN-01 / LI-RUN-02-01 / LI-RUN-02 / LI-RUN-03 | 번역 추가 (Korean) |  | 검체 확인 | 언어셋 첨부 (R002) 목록 시트 118행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-014 | Run | LI-RUN-01 / LI-RUN-02-01 / LI-RUN-02 / LI-RUN-03 | 번역 추가 (Korean) |  | 검사 프로토콜 확인 | 언어셋 첨부 (R002) 목록 시트 119행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-015 | Run | LI-RUN-01 / LI-RUN-02-01 / LI-RUN-02 / LI-RUN-03 | 번역 추가 (Korean) |  | 소모품 확인 | 언어셋 첨부 (R002) 목록 시트 120행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-016 | Run | LI-RUN-01 / LI-RUN-02-01 / LI-RUN-02 / LI-RUN-03 | 번역 추가 (Korean) |  | 시약 확인 | 언어셋 첨부 (R002) 목록 시트 121행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-017 | Run | LI-RUN-01 | 번역 수정 (French) | Nombre total d'échantillons | Total échantillons | 언어셋 첨부 (R002) 목록 시트 123행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-017 | Run | LI-RUN-01 | 번역 추가 (Korean) |  | 총 검체 수 | 언어셋 첨부 (R002) 목록 시트 123행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-018 | Run | LI-RUN-01 | 번역 추가 (Korean) |  | STAT 검체 수 | 언어셋 첨부 (R002) 목록 시트 124행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-019 | Run | LI-RUN-01 | 번역 추가 (Korean) |  | 검체 ID | 언어셋 첨부 (R002) 목록 시트 125행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-020 | Run | LI-RUN-01 | 번역 추가 (Korean) |  | 오더 날짜 | 언어셋 첨부 (R002) 목록 시트 126행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-021 | Run | LI-RUN-01 | 번역 추가 (Korean) |  | 날짜 선택 | 언어셋 첨부 (R002) 목록 시트 127행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-006 | Run | LI-RUN-01 / LI-RUN-02-01 | 번역 추가 (Korean) |  | 항목 | 언어셋 첨부 (R002) 목록 시트 128행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-022 | Run | LI-RUN-01 | 번역 추가 (Korean) |  | STAT만 | 언어셋 첨부 (R002) 목록 시트 129행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-023 | Run | LI-RUN-01 | 번역 추가 (Korean) |  | 제품 | 언어셋 첨부 (R002) 목록 시트 130행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-023 | Run | LI-RUN-01 | 번역 추가 (Korean) |  | 검체 유형 | 언어셋 첨부 (R002) 목록 시트 131행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-024 | Run | LI-RUN-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 132행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-022 | Run | LI-RUN-01 | 번역 추가 (Korean) |  | 초기화 | 언어셋 첨부 (R002) 목록 시트 133행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-016 | Run | LI-RUN-01 | 번역 추가 (Korean) |  | 검색 | 언어셋 첨부 (R002) 목록 시트 134행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-021 | Run | LI-RUN-01 / LI-RUN-02-01 / LI-RUN-02 / LI-RUN-03 | 번역 추가 (Korean) |  | 취소 | 언어셋 첨부 (R002) 목록 시트 135행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-025 | Run | LI-RUN-01 / LI-RUN-02-01 / LI-RUN-02 | 번역 추가 (Korean) |  | 다음 | 언어셋 첨부 (R002) 목록 시트 136행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-027 | Run | LI-RUN-02-01 / LI-RUN-02 / LI-RUN-03 | 번역 추가 (Korean) |  | 이전 | 언어셋 첨부 (R002) 목록 시트 137행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-002 | Run | LI-RUN-02-01 | 번역 추가 (Korean) |  | 전처리 프로토콜 | 언어셋 첨부 (R002) 목록 시트 138행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-026 | Run | LI-RUN-02-01 | 번역 추가 (Korean) |  | 프로토콜 변경에 따라 추가된 소모품을 trolley에 적재하십시오. | 언어셋 첨부 (R002) 목록 시트 139행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-007 | Run | LI-RUN-02-01 | 번역 추가 (Korean) |  | 프로토콜 이름 | 언어셋 첨부 (R002) 목록 시트 140행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-008 | Run | LI-RUN-02-01 | 번역 추가 (Korean) |  | 사용 여부 | 언어셋 첨부 (R002) 목록 시트 141행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-009 | Run | LI-RUN-02-01 | 번역 추가 (Korean) |  | 수정자 | 언어셋 첨부 (R002) 목록 시트 142행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-010 | Run | LI-RUN-02-01 | 번역 추가 (Korean) |  | 수정 일시 | 언어셋 첨부 (R002) 목록 시트 143행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-013 | Run | LI-RUN-02-01 | 번역 추가 (Korean) |  | SG 프로토콜 | 언어셋 첨부 (R002) 목록 시트 144행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-014 | Run | LI-RUN-02-01 | 번역 추가 (Korean) |  | 적용됨 | 언어셋 첨부 (R002) 목록 시트 145행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-003 | Run | LI-RUN-02-01 | 번역 추가 (Korean) |  | 추출 프로토콜 | 언어셋 첨부 (R002) 목록 시트 146행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-017 | Run | LI-RUN-02 / LI-RUN-03 | 번역 추가 (Korean) |  | 상태 | 언어셋 첨부 (R002) 목록 시트 148행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-028 | Run | LI-RUN-02 / LI-RUN-03 | 번역 추가 (Korean) |  | 부족 | 언어셋 첨부 (R002) 목록 시트 149행 · R003 · 공통 LID-COM-SCD-043 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-RUN-047 | Run | LI-RUN-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 156행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-IVT-022 | Run | LI-RUN-02 / LI-RUN-03 | 번역 추가 (Korean) |  | 용량 | 언어셋 첨부 (R002) 목록 시트 160행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-030 | Run | LI-RUN-02 / LI-RUN-03 | 번역 추가 (Korean) |  | 잔여 수량 | 언어셋 첨부 (R002) 목록 시트 161행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-031 | Run | LI-RUN-02 / LI-RUN-03 | 번역 추가 (Korean) |  | 필요 수량 | 언어셋 첨부 (R002) 목록 시트 162행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-032 | Run | LI-RUN-02 / LI-RUN-03 | 번역 추가 (Korean) |  | 현재 재고 기준으로 추가 필요 수량만 표시됩니다. | 언어셋 첨부 (R002) 목록 시트 163행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-033 | Run | LI-RUN-02 / LI-RUN-03 | 번역 추가 (Korean) |  | 새로고침 | 언어셋 첨부 (R002) 목록 시트 169행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-SPT-015 | Run | LI-RUN-02 / LI-RUN-03 | 번역 추가 (Korean) |  | 더보기 | 언어셋 첨부 (R002) 목록 시트 170행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-062 | Run | LI-RUN-03 | 번역 추가 (Korean) |  | 시약 | 언어셋 첨부 (R002) 목록 시트 176행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-037 | Run | LI-RUN-03 | 번역 추가 (Korean) |  | 유효기간 | 언어셋 첨부 (R002) 목록 시트 178행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-030 | Run | LI-RUN-04 | 번역 추가 (Korean) |  | 가득 참 | 언어셋 첨부 (R002) 목록 시트 181행 · R003 · 공통 LID-COM-SCD-035 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-013 | Run | LI-RUN-04 | 번역 추가 (Korean) |  | 유닛 | 언어셋 첨부 (R002) 목록 시트 184행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-IVT-031 | Run | LI-RUN-04 | 번역 추가 (Korean) |  | 마지막 비움 일시 | 언어셋 첨부 (R002) 목록 시트 186행 · R003 | 하승현 |
| 2026-11-26 |  | LID-RUN-039 | Run | LI-RUN-04 | 번역 추가 (Korean) |  | 실행 시작 | 언어셋 첨부 (R002) 목록 시트 187행 · R003 | 하승현 |
| 2026-11-26 |  | LID-QUK-001 | Quick Start | LI-QUK | 번역 추가 (Korean) |  | 빠른 시작 | 언어셋 첨부 (R002) 목록 시트 188행 · R003 | 하승현 |
| 2026-11-26 |  | LID-QUK-002 | Quick Start | LI-QUK | 번역 추가 (Korean) |  | 검사를 위한 검체, 소모품 및 시약 확인 | 언어셋 첨부 (R002) 목록 시트 189행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-017 | Quick Start | LI-QUK | 번역 수정 (French) | Nombre total d'échantillons | Total échantillons | 언어셋 첨부 (R002) 목록 시트 190행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-017 | Quick Start | LI-QUK | 번역 추가 (Korean) |  | 총 검체 수 | 언어셋 첨부 (R002) 목록 시트 190행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-018 | Quick Start | LI-QUK | 번역 추가 (Korean) |  | STAT 검체 수 | 언어셋 첨부 (R002) 목록 시트 191행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-014 | Quick Start | LI-QUK | 번역 추가 (Korean) |  | 검사 프로토콜 확인 | 언어셋 첨부 (R002) 목록 시트 192행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-002 | Quick Start | LI-QUK | 번역 추가 (Korean) |  | 전처리 프로토콜 | 언어셋 첨부 (R002) 목록 시트 193행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-013 | Quick Start | LI-QUK | 번역 추가 (Korean) |  | SG 프로토콜 | 언어셋 첨부 (R002) 목록 시트 194행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-003 | Quick Start | LI-QUK | 번역 추가 (Korean) |  | 추출 프로토콜 | 언어셋 첨부 (R002) 목록 시트 195행 · R003 | 하승현 |
| 2026-11-26 |  | LID-QUK-003 | Quick Start | LI-QUK | 번역 추가 (Korean) |  | 소모품 재고 확인 | 언어셋 첨부 (R002) 목록 시트 196행 · R003 | 하승현 |
| 2026-11-26 |  | LID-QUK-004 | Quick Start | LI-QUK | 번역 추가 (Korean) |  | 시약 재고 확인 | 언어셋 첨부 (R002) 목록 시트 197행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-028 | Quick Start | LI-QUK | 번역 추가 (Korean) |  | 부족 | 언어셋 첨부 (R002) 목록 시트 198행 · R003 · 공통 LID-COM-SCD-043 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-030 | Quick Start | LI-QUK | 번역 추가 (Korean) |  | 가득 참 | 언어셋 첨부 (R002) 목록 시트 205행 · R003 · 공통 LID-COM-SCD-035 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-STN-021 | Quick Start | LI-QUK | 번역 추가 (Korean) |  | 취소 | 언어셋 첨부 (R002) 목록 시트 208행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-001 | Test Management | TI-TMG-01 / LI-TMG-01 / TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 검사 오더 | 언어셋 첨부 (R002) 목록 시트 209행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-022 | Test Management | TI-TMG-01 / LI-TMG-01 / TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 검사 상태 | 언어셋 첨부 (R002) 목록 시트 210행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-033 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 새로고침 | 언어셋 첨부 (R002) 목록 시트 211행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-019 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 검체 ID | 언어셋 첨부 (R002) 목록 시트 212행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-023 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 제품 | 언어셋 첨부 (R002) 목록 시트 213행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-003 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 214행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-023 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 검체 유형 | 언어셋 첨부 (R002) 목록 시트 215행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-007 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 상태 | 언어셋 첨부 (R002) 목록 시트 216행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-002 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 날짜 | 언어셋 첨부 (R002) 목록 시트 217행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-020 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 오더 날짜 | 언어셋 첨부 (R002) 목록 시트 218행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-003 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 취소 일자 | 언어셋 첨부 (R002) 목록 시트 219행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-004 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 시작 일시 | 언어셋 첨부 (R002) 목록 시트 220행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-005 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 종료 일시 | 언어셋 첨부 (R002) 목록 시트 221행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-006 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 취소됨 | 언어셋 첨부 (R002) 목록 시트 222행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-006 | Test Management | LI-TMG-01 | 번역 추가 (Korean) |  | 항목 | 언어셋 첨부 (R002) 목록 시트 226행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-017 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 수정 (French) | Nombre total d'échantillons | Total échantillons | 언어셋 첨부 (R002) 목록 시트 228행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-017 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 총 검체 수 | 언어셋 첨부 (R002) 목록 시트 228행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-024 | Test Management | TI-TMG-01 / LI-TMG-01 / TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 229행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-010 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 총 제품 수 | 언어셋 첨부 (R002) 목록 시트 230행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-011 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 취소 건만 | 언어셋 첨부 (R002) 목록 시트 231행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-022 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | STAT만 | 언어셋 첨부 (R002) 목록 시트 232행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-022 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 초기화 | 언어셋 첨부 (R002) 목록 시트 233행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-016 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 검색 | 언어셋 첨부 (R002) 목록 시트 234행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-023 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 내보내기 | 언어셋 첨부 (R002) 목록 시트 235행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-035 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 가져오기 | 언어셋 첨부 (R002) 목록 시트 236행 · R003 · 공통 LID-COM-BTN-004 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-TMG-036 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 접수됨 | 언어셋 첨부 (R002) 목록 시트 240행 · R003 · 공통 LID-COM-SCD-001 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-TMG-037 | Test Management | TI-TMG-01 / LI-TMG-01 | 번역 추가 (Korean) |  | 준비됨 | 언어셋 첨부 (R002) 목록 시트 241행 · R003 · 공통 LID-COM-SCD-002 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-TMG-038 | Test Management | TI-TMG-01 / LI-TMG-01 / TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 검사 중 | 언어셋 첨부 (R002) 목록 시트 242행 · R003 · 공통 LID-COM-SCD-003 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-TMG-039 | Test Management | TI-TMG-01 / LI-TMG-01 / TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 완료됨 | 언어셋 첨부 (R002) 목록 시트 243행 · R003 · 공통 LID-COM-SCD-005 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-018 | Test Management | TI-TMG-01 / LI-TMG-01 / TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 실패 | 언어셋 첨부 (R002) 목록 시트 244행 · R003 · 공통 LID-COM-SCD-004 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-019 | Test Management | TI-TMG-01 / LI-TMG-01 / TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 검사 안됨 | 언어셋 첨부 (R002) 목록 시트 245행 · R003 · 공통 LID-COM-SCD-006 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-TMG-012 | Test Management | LI-TMG-01 | 번역 추가 (Korean) |  | 가져오기 소스 선택 | 언어셋 첨부 (R002) 목록 시트 246행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-013 | Test Management | LI-TMG-01 | 번역 추가 (Korean) |  | 파일을 불러올 위치를 선택하십시오. | 언어셋 첨부 (R002) 목록 시트 247행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-014 | Test Management | LI-TMG-01 | 번역 추가 (Korean) |  | USB 드라이브 | 언어셋 첨부 (R002) 목록 시트 248행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-015 | Test Management | LI-TMG-01 | 번역 추가 (Korean) |  | 연결된 USB 드라이브에서 가져옵니다. | 언어셋 첨부 (R002) 목록 시트 249행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-016 | Test Management | LI-TMG-01 | 번역 추가 (Korean) |  | 설정된 드라이브 | 언어셋 첨부 (R002) 목록 시트 250행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-017 | Test Management | LI-TMG-01 | 번역 추가 (Korean) |  | 시스템 설정에 지정된 경로에서 가져옵니다. | 언어셋 첨부 (R002) 목록 시트 251행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-018 | Test Management | LI-TMG-01 | 번역 추가 (Korean) |  | 내보내기 위치 선택 | 언어셋 첨부 (R002) 목록 시트 252행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-019 | Test Management | LI-TMG-01 | 번역 추가 (Korean) |  | 파일을 저장할 위치를 선택하십시오. | 언어셋 첨부 (R002) 목록 시트 253행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-020 | Test Management | LI-TMG-01 | 번역 추가 (Korean) |  | 연결된 USB 드라이브에 저장합니다. | 언어셋 첨부 (R002) 목록 시트 254행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-021 | Test Management | LI-TMG-01 | 번역 추가 (Korean) |  | 시스템 설정에 지정된 경로에 저장합니다. | 언어셋 첨부 (R002) 목록 시트 255행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-023 | Test Management | TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 총 배치 수 | 언어셋 첨부 (R002) 목록 시트 256행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-024 | Test Management | TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 남은 시간 | 언어셋 첨부 (R002) 목록 시트 257행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-025 | Test Management | TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 남음 | 언어셋 첨부 (R002) 목록 시트 258행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-026 | Test Management | TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 경과 | 언어셋 첨부 (R002) 목록 시트 259행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-027 | Test Management | TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 예상 총 소요 시간 | 언어셋 첨부 (R002) 목록 시트 260행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-028 | Test Management | TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 00시간 00분 | 언어셋 첨부 (R002) 목록 시트 261행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-SPT-023 | Test Management | TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 264행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-030 | Test Management | TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | Batch 목록 | 언어셋 첨부 (R002) 목록 시트 265행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-031 | Test Management | TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 266행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-032 | Test Management | TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 시작 | 언어셋 첨부 (R002) 목록 시트 267행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-033 | Test Management | TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 종료 | 언어셋 첨부 (R002) 목록 시트 268행 · R003 | 하승현 |
| 2026-11-26 |  | LID-TMG-034 | Test Management | TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 진행 중인 검사가 없습니다. | 언어셋 첨부 (R002) 목록 시트 269행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-022 | Test Management | TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 준비 완료 | 언어셋 첨부 (R002) 목록 시트 270행 · R003 · 공통 LID-COM-SCD-014 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-020 | Test Management | TI-TMG-02 / LI-TMG-02 | 번역 추가 (Korean) |  | 초기화 필요 | 언어셋 첨부 (R002) 목록 시트 271행 · R003 · 공통 LID-COM-SCD-012 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-SPT-001 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | 검체 | 언어셋 첨부 (R002) 목록 시트 272행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-020 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 273행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-031 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 / TI-SPT-01-01 / LI-SPT-01-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 274행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-019 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | 검체 ID | 언어셋 첨부 (R002) 목록 시트 275행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-023 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-01-01 / LI-SPT-01-01 / TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | 제품 | 언어셋 첨부 (R002) 목록 시트 276행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-003 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 277행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-023 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-01-01 / LI-SPT-01-01 / TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | 검체 유형 | 언어셋 첨부 (R002) 목록 시트 278행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-002 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | 날짜 | 언어셋 첨부 (R002) 목록 시트 279행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-020 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-01-01 / LI-SPT-01-01 | 번역 추가 (Korean) |  | 오더 날짜 | 언어셋 첨부 (R002) 목록 시트 280행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-004 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-01-01 / LI-SPT-01-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03 / LI-SPT-03 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | 시작 일시 | 언어셋 첨부 (R002) 목록 시트 283행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-005 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-01-01 / LI-SPT-01-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03 / LI-SPT-03 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | 종료 일시 | 언어셋 첨부 (R002) 목록 시트 284행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-002 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-01-01 / LI-SPT-01-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | 상태 | 언어셋 첨부 (R002) 목록 시트 285행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-037 | Sample Tracking | TI-SPT-01 / LI-SPT-01 | 번역 추가 (Korean) |  | 준비됨 | 언어셋 첨부 (R002) 목록 시트 286행 · R003 · 공통 LID-COM-SCD-002 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-019 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | 검사 안됨 | 언어셋 첨부 (R002) 목록 시트 287행 · R003 · 공통 LID-COM-SCD-006 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-038 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | 검사 중 | 언어셋 첨부 (R002) 목록 시트 288행 · R003 · 공통 LID-COM-SCD-003 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-039 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | 완료됨 | 언어셋 첨부 (R002) 목록 시트 289행 · R003 · 공통 LID-COM-SCD-005 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-018 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | 실패 | 언어셋 첨부 (R002) 목록 시트 290행 · R003 · 공통 LID-COM-SCD-004 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-STN-006 | Sample Tracking | LI-SPT-01 / LI-SPT-02 / LI-SPT-03 | 번역 추가 (Korean) |  | 항목 | 언어셋 첨부 (R002) 목록 시트 294행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-003 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03 / LI-SPT-03 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | 진행률 | 언어셋 첨부 (R002) 목록 시트 296행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-004 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | 진행 상태 | 언어셋 첨부 (R002) 목록 시트 297행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-024 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 298행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-025 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 299행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-026 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 300행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-032 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 301행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-033 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 302행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-024 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-01-01 / LI-SPT-01-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03 / LI-SPT-03 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 303행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-012 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | 상세 정보 | 언어셋 첨부 (R002) 목록 시트 304행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-022 | Sample Tracking | TI-SPT-01 / LI-SPT-01 | 번역 추가 (Korean) |  | STAT만 | 언어셋 첨부 (R002) 목록 시트 305행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-022 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03 / LI-SPT-03 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | 초기화 | 언어셋 첨부 (R002) 목록 시트 306행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-016 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | 검색 | 언어셋 첨부 (R002) 목록 시트 307행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-023 | Sample Tracking | TI-SPT-01 / LI-SPT-01 / TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | 내보내기 | 언어셋 첨부 (R002) 목록 시트 308행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-018 | Sample Tracking | LI-SPT-01 / LI-SPT-02 / LI-SPT-03 | 번역 추가 (Korean) |  | 내보내기 위치 선택 | 언어셋 첨부 (R002) 목록 시트 309행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-019 | Sample Tracking | LI-SPT-01 / LI-SPT-02 / LI-SPT-03 | 번역 추가 (Korean) |  | 파일을 저장할 위치를 선택하십시오. | 언어셋 첨부 (R002) 목록 시트 310행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-014 | Sample Tracking | LI-SPT-01 / LI-SPT-02 / LI-SPT-03 | 번역 추가 (Korean) |  | USB 드라이브 | 언어셋 첨부 (R002) 목록 시트 311행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-020 | Sample Tracking | LI-SPT-01 / LI-SPT-02 / LI-SPT-03 | 번역 추가 (Korean) |  | 연결된 USB 드라이브에 저장합니다. | 언어셋 첨부 (R002) 목록 시트 312행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-016 | Sample Tracking | LI-SPT-01 / LI-SPT-02 / LI-SPT-03 | 번역 추가 (Korean) |  | 설정된 드라이브 | 언어셋 첨부 (R002) 목록 시트 313행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-021 | Sample Tracking | LI-SPT-01 / LI-SPT-02 / LI-SPT-03 | 번역 추가 (Korean) |  | 시스템 설정에 지정된 경로에 저장합니다. | 언어셋 첨부 (R002) 목록 시트 314행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-005 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 추가 (Korean) |  | 검체 상세정보 | 언어셋 첨부 (R002) 목록 시트 315행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-197 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 추가 (Korean) |  | 일반 | 언어셋 첨부 (R002) 목록 시트 317행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-003 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 / TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | ID | 언어셋 첨부 (R002) 목록 시트 318행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-003 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 추가 (Korean) |  | 취소 일자 | 언어셋 첨부 (R002) 목록 시트 320행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-006 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 추가 (Korean) |  | 취소됨 | 언어셋 첨부 (R002) 목록 시트 321행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-007 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 추가 (Korean) |  | 검체 위치 | 언어셋 첨부 (R002) 목록 시트 322행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-008 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 추가 (Korean) |  | 반환 상태 | 언어셋 첨부 (R002) 목록 시트 324행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-010 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 추가 (Korean) |  | Tray 위치 | 언어셋 첨부 (R002) 목록 시트 326행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-011 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 추가 (Korean) |  | Socket 위치 | 언어셋 첨부 (R002) 목록 시트 329행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-026 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 추가 (Korean) |  | 프로세스 | 언어셋 첨부 (R002) 목록 시트 331행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-012 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 / TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | 모듈 | 언어셋 첨부 (R002) 목록 시트 332행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-013 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | 유닛 | 언어셋 첨부 (R002) 목록 시트 333행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-013 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 334행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-015 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 추가 (Korean) |  | 더보기 | 언어셋 첨부 (R002) 목록 시트 336행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-016 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 / TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | Well 번호 | 언어셋 첨부 (R002) 목록 시트 337행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-017 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 | 번역 추가 (Korean) |  | 시약 정보 | 언어셋 첨부 (R002) 목록 시트 338행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-046 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 339행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-018 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 / TI-SPT-02-01 / LI-SPT-02-01 | 번역 추가 (Korean) |  | 바코드 | 언어셋 첨부 (R002) 목록 시트 340행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-002 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 / TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 전처리 프로토콜 | 언어셋 첨부 (R002) 목록 시트 343행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-003 | Sample Tracking | TI-SPT-01-01 / LI-SPT-01-01 / TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 추출 프로토콜 | 언어셋 첨부 (R002) 목록 시트 344행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-007 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 프로토콜 이름 | 언어셋 첨부 (R002) 목록 시트 345행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-009 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 수정자 | 언어셋 첨부 (R002) 목록 시트 346행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-010 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 수정 일시 | 언어셋 첨부 (R002) 목록 시트 347행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-029 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 시간 (sec) | 언어셋 첨부 (R002) 목록 시트 348행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-032 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 상층액 이동 | 언어셋 첨부 (R002) 목록 시트 349행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-033 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 상층액 제거 | 언어셋 첨부 (R002) 목록 시트 350행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-034 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | Buffer 분주 & 혼합 | 언어셋 첨부 (R002) 목록 시트 351행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-036 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 가열 온도 (ºC) | 언어셋 첨부 (R002) 목록 시트 352행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-037 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | Incubation 시간 (sec) | 언어셋 첨부 (R002) 목록 시트 353행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-039 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | PK 처리 | 언어셋 첨부 (R002) 목록 시트 354행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-043 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 대기 상태 설정 조건 | 언어셋 첨부 (R002) 목록 시트 355행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-046 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 이름 | 언어셋 첨부 (R002) 목록 시트 356행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-053 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 용량 (μL) | 언어셋 첨부 (R002) 목록 시트 357행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-054 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 유지 온도 (℃) | 언어셋 첨부 (R002) 목록 시트 358행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-055 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 동작 | 언어셋 첨부 (R002) 목록 시트 359행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-056 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 사용 안 함 | 언어셋 첨부 (R002) 목록 시트 360행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-058 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 정방향 상/하 | 언어셋 첨부 (R002) 목록 시트 361행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-061 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 362행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-062 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 동작 조건 | 언어셋 첨부 (R002) 목록 시트 363행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-063 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 단계 | 언어셋 첨부 (R002) 목록 시트 364행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-064 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 온도 (℃) | 언어셋 첨부 (R002) 목록 시트 365행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-065 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 혼합 시간 (min) | 언어셋 첨부 (R002) 목록 시트 366행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-066 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 혼합 속도 (rpm) | 언어셋 첨부 (R002) 목록 시트 367행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-067 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 수정 (Italian) | Tempo di  raccolta (sec) | Tempo di raccolta (sec) | 언어셋 첨부 (R002) 목록 시트 368행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-067 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | Collect 시간 (sec) | 언어셋 첨부 (R002) 목록 시트 368행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-068 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 증발 시간 (min) | 언어셋 첨부 (R002) 목록 시트 369행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-069 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 일시 정지 | 언어셋 첨부 (R002) 목록 시트 370행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-070 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 켜짐 | 언어셋 첨부 (R002) 목록 시트 371행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-071 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 꺼짐 | 언어셋 첨부 (R002) 목록 시트 372행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-039 | Sample Tracking | TI-SPT-01-02 / LI-SPT-01-02 | 번역 추가 (Korean) |  | 닫기 | 언어셋 첨부 (R002) 목록 시트 373행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-021 | Sample Tracking | TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | Plate ID | 언어셋 첨부 (R002) 목록 시트 374행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-022 | Sample Tracking | TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | 검체 | 언어셋 첨부 (R002) 목록 시트 375행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-023 | Sample Tracking | TI-SPT-02 / LI-SPT-02 / TI-SPT-03 / LI-SPT-03 | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 376행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-027 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | Plate 상세정보 | 언어셋 첨부 (R002) 목록 시트 377행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-028 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | Plate 정보 | 언어셋 첨부 (R002) 목록 시트 378행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-017 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 | 번역 수정 (French) | Nombre total d'échantillons | Total échantillons | 언어셋 첨부 (R002) 목록 시트 379행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-017 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 | 번역 추가 (Korean) |  | 총 검체 수 | 언어셋 첨부 (R002) 목록 시트 379행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-018 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 | 번역 추가 (Korean) |  | STAT 검체 수 | 언어셋 첨부 (R002) 목록 시트 380행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-029 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | 선택된 Plate 정보 | 언어셋 첨부 (R002) 목록 시트 383행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-030 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | Plate에서 검체를 선택하십시오. | 언어셋 첨부 (R002) 목록 시트 384행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STA-020 | Sample Tracking | TI-SPT-02-01 / LI-SPT-02-01 / TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | 전체 선택 | 언어셋 첨부 (R002) 목록 시트 385행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-010 | Sample Tracking | TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | 총 제품 수 | 언어셋 첨부 (R002) 목록 시트 386행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-034 | Sample Tracking | TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | STAT 제품 수 | 언어셋 첨부 (R002) 목록 시트 387행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-035 | Sample Tracking | TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | 음성 | 언어셋 첨부 (R002) 목록 시트 388행 · R003 | 하승현 |
| 2026-11-26 |  | LID-SPT-036 | Sample Tracking | TI-SPT-03-01 / LI-SPT-03-01 | 번역 추가 (Korean) |  | 양성 | 언어셋 첨부 (R002) 목록 시트 389행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-001 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 추가 (Korean) |  | 재고 | 언어셋 첨부 (R002) 목록 시트 392행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-002 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-02-T / LI-IVT-02-T / TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T / TI-IVT-05-T / LI-IVT-05-T / TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 요약 | 언어셋 첨부 (R002) 목록 시트 393행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-003 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-02-T / LI-IVT-02-T / TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T / TI-IVT-05-T / LI-IVT-05-T / TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 개요 | 언어셋 첨부 (R002) 목록 시트 394행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-053 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-02-T / LI-IVT-02-T / TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T / TI-IVT-05-T / LI-IVT-05-T / TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 397행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-004 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-02-T / LI-IVT-02-T / TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T / TI-IVT-05-T / LI-IVT-05-T / TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 사용 이력 | 언어셋 첨부 (R002) 목록 시트 398행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-006 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 추가 (Korean) |  | 검사 완료에 필요한 항목은 보충 우선순위에 따라 표시합니다. | 언어셋 첨부 (R002) 목록 시트 401행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-028 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 번역 추가 (Korean) |  | 부족 | 언어셋 첨부 (R002) 목록 시트 404행 · R003 · 공통 LID-COM-SCD-043 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-062 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-04-T / LI-IVT-04-T / TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 시약 | 언어셋 첨부 (R002) 목록 시트 407행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-030 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-03-T / LI-IVT-03-T / TI-IVT-03-T-P / LI-IVT-03-T-P / TI-IVT-04-T / LI-IVT-04-T / TI-IVT-04-T-P / LI-IVT-04-T-P | 번역 추가 (Korean) |  | 잔여 수량 | 언어셋 첨부 (R002) 목록 시트 408행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-031 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 번역 추가 (Korean) |  | 필요 수량 | 언어셋 첨부 (R002) 목록 시트 409행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-009 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 추가 (Korean) |  | 조치가 필요 없습니다. | 언어셋 첨부 (R002) 목록 시트 412행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-027 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 추가 (Korean) |  | 이전 | 언어셋 첨부 (R002) 목록 시트 414행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-025 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 추가 (Korean) |  | 다음 | 언어셋 첨부 (R002) 목록 시트 415행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-010 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 추가 (Korean) |  | 폐기함/폐액통 | 언어셋 첨부 (R002) 목록 시트 416행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-011 | Inventory | TI-IVT-01-T / LI-IVT-01-T | 번역 추가 (Korean) |  | 비워야 하는 폐기함은 상태 (Full 또는 Almost Full)에 따라 우선 순위가 높은 순으로 표시합니다. | 언어셋 첨부 (R002) 목록 시트 417행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-030 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-05-T / LI-IVT-05-T | 번역 추가 (Korean) |  | 가득 참 | 언어셋 첨부 (R002) 목록 시트 418행 · R003 · 공통 LID-COM-SCD-035 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-033 | Inventory | TI-IVT-01-T / LI-IVT-01-T / TI-IVT-02-T / LI-IVT-02-T / TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T / TI-IVT-05-T / LI-IVT-05-T | 번역 추가 (Korean) |  | 새로고침 | 언어셋 첨부 (R002) 목록 시트 422행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-012 | Inventory | TI-IVT-02-T / LI-IVT-02-T | 번역 추가 (Korean) |  | 모듈별 개요 | 언어셋 첨부 (R002) 목록 시트 423행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-013 | Inventory | TI-IVT-02-T / LI-IVT-02-T | 번역 추가 (Korean) |  | 모든 모듈의 재고를 집계하여 표시합니다. 모듈을 선택하면 해당 모듈의 상세 재고를 확인할 수 있습니다. | 언어셋 첨부 (R002) 목록 시트 424행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-003 | Inventory | TI-IVT-02-T / LI-IVT-02-T | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 425행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-014 | Inventory | TI-IVT-02-T / LI-IVT-02-T | 번역 추가 (Korean) |  | 장착된 trolley가 없습니다. | 언어셋 첨부 (R002) 목록 시트 429행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-015 | Inventory | TI-IVT-02-T / LI-IVT-02-T | 번역 추가 (Korean) |  | 등록된 모듈이 없습니다. | 언어셋 첨부 (R002) 목록 시트 430행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-017 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T / TI-IVT-05-T / LI-IVT-05-T | 번역 추가 (Korean) |  | 상태 | 언어셋 첨부 (R002) 목록 시트 433행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-047 | Inventory | TI-IVT-03-T / LI-IVT-03-T | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 437행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-SPT-015 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 번역 추가 (Korean) |  | 더보기 | 언어셋 첨부 (R002) 목록 시트 438행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-022 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 번역 추가 (Korean) |  | 용량 | 언어셋 첨부 (R002) 목록 시트 440행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-032 | Inventory | TI-IVT-03-T / LI-IVT-03-T / TI-IVT-04-T / LI-IVT-04-T | 번역 추가 (Korean) |  | 현재 재고 기준으로 추가 필요 수량만 표시됩니다. | 언어셋 첨부 (R002) 목록 시트 443행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-SPT-018 | Inventory | TI-IVT-03-T-P / LI-IVT-03-T-P / TI-IVT-04-T-P / LI-IVT-04-T-P / TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 바코드 | 언어셋 첨부 (R002) 목록 시트 454행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-039 | Inventory | TI-IVT-03-T-P / LI-IVT-03-T-P / TI-IVT-04-T-P / LI-IVT-04-T-P | 번역 추가 (Korean) |  | 닫기 | 언어셋 첨부 (R002) 목록 시트 457행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-049 | Inventory | TI-IVT-04-T-P / LI-IVT-04-T-P | 번역 추가 (Korean) |  | 만료 | 언어셋 첨부 (R002) 목록 시트 465행 · R003 · 공통 LID-COM-SCD-049 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-037 | Inventory | TI-IVT-04-T-P / LI-IVT-04-T-P | 번역 추가 (Korean) |  | 유효기간 | 언어셋 첨부 (R002) 목록 시트 466행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-012 | Inventory | TI-IVT-05-T / LI-IVT-05-T / TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 모듈 | 언어셋 첨부 (R002) 목록 시트 469행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-013 | Inventory | TI-IVT-05-T / LI-IVT-05-T / TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 유닛 | 언어셋 첨부 (R002) 목록 시트 470행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-031 | Inventory | TI-IVT-05-T / LI-IVT-05-T | 번역 추가 (Korean) |  | 마지막 비움 일시 | 언어셋 첨부 (R002) 목록 시트 472행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-035 | Inventory | TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 전체 항목 유형 | 언어셋 첨부 (R002) 목록 시트 480행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-052 | Inventory | TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 소모품 | 언어셋 첨부 (R002) 목록 시트 481행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-046 | Inventory | TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 이름 | 언어셋 첨부 (R002) 목록 시트 482행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-036 | Inventory | TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 모듈 선택 | 언어셋 첨부 (R002) 목록 시트 483행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-037 | Inventory | TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 먼저 모듈을 선택하십시오. | 언어셋 첨부 (R002) 목록 시트 484행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-022 | Inventory | TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 초기화 | 언어셋 첨부 (R002) 목록 시트 485행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-016 | Inventory | TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 검색 | 언어셋 첨부 (R002) 목록 시트 486행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-023 | Inventory | TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 내보내기 | 언어셋 첨부 (R002) 목록 시트 487행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-006 | Inventory | TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 항목 | 언어셋 첨부 (R002) 목록 시트 488행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-038 | Inventory | TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 항목 유형 | 언어셋 첨부 (R002) 목록 시트 489행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-039 | Inventory | TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 사용량 | 언어셋 첨부 (R002) 목록 시트 490행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-040 | Inventory | TI-IVT-06-T / LI-IVT-06-T | 번역 추가 (Korean) |  | 날짜/시간 | 언어셋 첨부 (R002) 목록 시트 491행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-197 | Profile | TI-CPW-01-P / LI-CPW-01-P / TI-CPW-02-P / LI-CPW-02-P | 번역 추가 (Korean) |  | 일반 | 언어셋 첨부 (R002) 목록 시트 493행 · R003 | 하승현 |
| 2026-11-26 |  | LID-CPW-001 | Profile | TI-CPW-01-P / LI-CPW-01-P / TI-CPW-02-P / LI-CPW-02-P | 번역 추가 (Korean) |  | 비밀번호 변경 | 언어셋 첨부 (R002) 목록 시트 494행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-003 | Profile | TI-CPW-01-P / LI-CPW-01-P | 번역 추가 (Korean) |  | ID | 언어셋 첨부 (R002) 목록 시트 495행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-076 | Profile | TI-CPW-01-P / LI-CPW-01-P | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 496행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-075 | Profile | TI-CPW-01-P / LI-CPW-01-P | 번역 추가 (Korean) |  | 사용자 | 언어셋 첨부 (R002) 목록 시트 497행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-046 | Profile | TI-CPW-01-P / LI-CPW-01-P | 번역 추가 (Korean) |  | 이름 | 언어셋 첨부 (R002) 목록 시트 498행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-170 | Profile | TI-CPW-01-P | 번역 추가 (Korean) |  | 언어 | 언어셋 첨부 (R002) 목록 시트 500행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-021 | Profile | TI-CPW-01-P / LI-CPW-01-P / TI-CPW-02-P / LI-CPW-02-P | 번역 추가 (Korean) |  | 취소 | 언어셋 첨부 (R002) 목록 시트 504행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-022 | Profile | TI-CPW-01-P / LI-CPW-01-P / TI-CPW-02-P / LI-CPW-02-P | 번역 추가 (Korean) |  | 저장 | 언어셋 첨부 (R002) 목록 시트 505행 · R003 | 하승현 |
| 2026-11-26 |  | LID-CPW-002 | Profile | TI-CPW-02-P / LI-CPW-02-P | 번역 추가 (Korean) |  | 현재 비밀번호 | 언어셋 첨부 (R002) 목록 시트 506행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-013 | Profile | TI-CPW-02-P / LI-CPW-02-P | 번역 추가 (Korean) |  | 새 비밀번호 | 언어셋 첨부 (R002) 목록 시트 508행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-014 | Profile | TI-CPW-02-P / LI-CPW-02-P | 번역 추가 (Korean) |  | 올바른 비밀번호를 입력하세요. | 언어셋 첨부 (R002) 목록 시트 509행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-015 | Profile | TI-CPW-02-P/Case / LI-CPW-02-P/Case | 번역 추가 (Korean) |  | 비밀번호 규칙 | 언어셋 첨부 (R002) 목록 시트 510행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-016 | Profile | TI-CPW-02-P/Case / LI-CPW-02-P/Case | 번역 추가 (Korean) |  | 8~64자로 입력할 수 있습니다. | 언어셋 첨부 (R002) 목록 시트 511행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-017 | Profile | TI-CPW-02-P/Case / LI-CPW-02-P/Case | 번역 추가 (Korean) |  | 영문자(A-Z, a-z), 숫자(0-9), 특수문자를 사용할 수 있습니다. | 언어셋 첨부 (R002) 목록 시트 512행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-018 | Profile | TI-CPW-02-P/Case / LI-CPW-02-P/Case | 번역 추가 (Korean) |  | 대소문자를 구분합니다. | 언어셋 첨부 (R002) 목록 시트 513행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-020 | Profile | TI-CPW-02-P / LI-CPW-02-P | 번역 추가 (Korean) |  | 새 비밀번호 확인 | 언어셋 첨부 (R002) 목록 시트 514행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-021 | Profile | TI-CPW-02-P / LI-CPW-02-P | 번역 추가 (Korean) |  | 새 비밀번호를 다시 입력하세요. | 언어셋 첨부 (R002) 목록 시트 515행 · R003 | 하승현 |
| 2026-11-26 |  | LID-CPW-004 | Profile | TI-CPW-02-P/Case / LI-CPW-02-P/Case | 번역 추가 (Korean) |  | 입력한 현재 비밀번호가 올바르지 않습니다. | 언어셋 첨부 (R002) 목록 시트 516행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-022 | Profile | TI-CPW-02-P/Case / LI-CPW-02-P/Case | 번역 추가 (Korean) |  | 비밀번호가 일치하지 않습니다. | 언어셋 첨부 (R002) 목록 시트 518행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-072 | Account Setting | TI-STN-05 | 번역 추가 (Korean) |  | 계정 설정 | 언어셋 첨부 (R002) 목록 시트 519행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-074 | Account Setting | TI-STN-05 / TI-STN-05-01-P / TI-STN-05-03-P | 번역 추가 (Korean) |  | 사용자 유형 | 언어셋 첨부 (R002) 목록 시트 521행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-003 | Account Setting | TI-STN-05 | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 522행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-075 | Account Setting | TI-STN-05 / TI-STN-05-01-P / TI-STN-05-03-P | 번역 추가 (Korean) |  | 사용자 | 언어셋 첨부 (R002) 목록 시트 523행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-076 | Account Setting | TI-STN-05 / TI-STN-05-01-P / TI-STN-05-03-P | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 524행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-016 | Account Setting | TI-STN-05 | 번역 추가 (Korean) |  | 검색 | 언어셋 첨부 (R002) 목록 시트 526행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-019 | Account Setting | TI-STN-05 | 번역 추가 (Korean) |  | 삭제 | 언어셋 첨부 (R002) 목록 시트 529행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-080 | Account Setting | TI-STN-05 | 번역 추가 (Korean) |  | 사용자 추가 | 언어셋 첨부 (R002) 목록 시트 530행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-073 | Account Setting | TI-STN-05 | 번역 추가 (Korean) |  | 사용자 ID | 언어셋 첨부 (R002) 목록 시트 531행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-078 | Account Setting | TI-STN-05 | 번역 추가 (Korean) |  | 등록일 | 언어셋 첨부 (R002) 목록 시트 534행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-079 | Account Setting | TI-STN-05 | 번역 추가 (Korean) |  | 최근 로그인 일시 | 언어셋 첨부 (R002) 목록 시트 535행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-010 | Account Setting | TI-STN-05 | 번역 추가 (Korean) |  | 수정 일시 | 언어셋 첨부 (R002) 목록 시트 536행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-012 | Account Setting | TI-STN-05 | 번역 추가 (Korean) |  | 상세 정보 | 언어셋 첨부 (R002) 목록 시트 537행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-081 | Account Setting | TI-STN-05-01-P / TI-STN-05-01-P/Case | 번역 추가 (Korean) |  | 새 사용자 생성 | 언어셋 첨부 (R002) 목록 시트 538행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-082 | Account Setting | TI-STN-05-01-P / TI-STN-05-01-P/Case | 번역 추가 (Korean) |  | 새 사용자 계정을 생성하려면 정보를 입력하세요. | 언어셋 첨부 (R002) 목록 시트 539행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-003 | Account Setting | TI-STN-05-01-P / TI-STN-05-03-P / TI-STN-05-02-P | 번역 추가 (Korean) |  | ID | 언어셋 첨부 (R002) 목록 시트 540행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-083 | Account Setting | TI-STN-05-01-P / TI-STN-05-01-P/Case | 번역 추가 (Korean) |  | 올바른 ID를 입력하세요. | 언어셋 첨부 (R002) 목록 시트 541행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-084 | Account Setting | TI-STN-05-01-P/Case | 번역 추가 (Korean) |  | ID 규칙 | 언어셋 첨부 (R002) 목록 시트 543행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-085 | Account Setting | TI-STN-05-01-P/Case | 번역 추가 (Korean) |  | 4~32자로 입력할 수 있습니다. | 언어셋 첨부 (R002) 목록 시트 544행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-086 | Account Setting | TI-STN-05-01-P/Case | 번역 추가 (Korean) |  | 영문 소문자(a-z), 숫자(0-9), 특수문자(, -)를 사용할 수 있습니다. | 언어셋 첨부 (R002) 목록 시트 545행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-087 | Account Setting | TI-STN-05-01-P/Case | 번역 추가 (Korean) |  | 대소문자를 구분하지 않습니다. (대문자는 자동으로 소문자로 변환됩니다.) | 언어셋 첨부 (R002) 목록 시트 546행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-090 | Account Setting | TI-STN-05-01-P/Case | 번역 추가 (Korean) |  | 이미 사용 중인 ID입니다. | 언어셋 첨부 (R002) 목록 시트 548행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-091 | Account Setting | TI-STN-05-01-P | 번역 추가 (Korean) |  | ID 중복 확인을 해주세요. | 언어셋 첨부 (R002) 목록 시트 549행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-092 | Account Setting | TI-STN-05-01-P/Case | 번역 추가 (Korean) |  | 사용할 수 있는 ID입니다. | 언어셋 첨부 (R002) 목록 시트 550행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-093 | Account Setting | TI-STN-05-01-P / TI-STN-05-02-P | 번역 추가 (Korean) |  | 임시 비밀번호 | 언어셋 첨부 (R002) 목록 시트 551행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-014 | Account Setting | TI-STN-05-01-P / TI-STN-05-01-P/Case | 번역 추가 (Korean) |  | 올바른 비밀번호를 입력하세요. | 언어셋 첨부 (R002) 목록 시트 552행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-015 | Account Setting | TI-STN-05-01-P/Case / TI-STN-05-03-P/Case | 번역 추가 (Korean) |  | 비밀번호 규칙 | 언어셋 첨부 (R002) 목록 시트 553행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-016 | Account Setting | TI-STN-05-01-P/Case / TI-STN-05-03-P/Case | 번역 추가 (Korean) |  | 8~64자로 입력할 수 있습니다. | 언어셋 첨부 (R002) 목록 시트 554행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-017 | Account Setting | TI-STN-05-01-P/Case / TI-STN-05-03-P/Case | 번역 추가 (Korean) |  | 영문자(A-Z, a-z), 숫자(0-9), 특수문자를 사용할 수 있습니다. | 언어셋 첨부 (R002) 목록 시트 555행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-018 | Account Setting | TI-STN-05-01-P/Case / TI-STN-05-03-P/Case | 번역 추가 (Korean) |  | 대소문자를 구분합니다. | 언어셋 첨부 (R002) 목록 시트 556행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-095 | Account Setting | TI-STN-05-01-P / TI-STN-05-03-P / TI-STN-05-03-P/Case | 번역 추가 (Korean) |  | 자동 생성 | 언어셋 첨부 (R002) 목록 시트 558행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-094 | Account Setting | TI-STN-05-01-P / TI-STN-05-01-P/Case / TI-STN-05-03-P/Case | 번역 추가 (Korean) |  | 비밀번호를 직접 입력하거나 자동 생성 버튼을 누르세요. | 언어셋 첨부 (R002) 목록 시트 559행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-046 | Account Setting | TI-STN-05-01-P / TI-STN-05-03-P | 번역 추가 (Korean) |  | 이름 | 언어셋 첨부 (R002) 목록 시트 560행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-021 | Account Setting | TI-STN-05-01-P / TI-STN-05-03-P | 번역 추가 (Korean) |  | 취소 | 언어셋 첨부 (R002) 목록 시트 565행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-096 | Account Setting | TI-STN-05-01-P | 번역 추가 (Korean) |  | 생성 | 언어셋 첨부 (R002) 목록 시트 566행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-005 | Account Setting | TI-STN-05-03-P / TI-STN-05-02-P/Case / TI-STN-05-03-P/Case | 번역 추가 (Korean) |  | 비밀번호 | 언어셋 첨부 (R002) 목록 시트 573행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-011 | Account Setting | TI-STN-05-02-P / TI-STN-05-02-P/Case / TI-STN-05-03-P/Case | 번역 추가 (Korean) |  | 확인 | 언어셋 첨부 (R002) 목록 시트 576행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-009 | Account Setting | TI-STN-05-02-P | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 582행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-097 | Account Setting | TI-STN-05-03-P / TI-STN-05-03-P/Case | 번역 추가 (Korean) |  | 사용자 상세 정보 | 언어셋 첨부 (R002) 목록 시트 583행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-017 | Account Setting | TI-STN-05-03-P | 번역 추가 (Korean) |  | 편집 | 언어셋 첨부 (R002) 목록 시트 585행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-098 | Account Setting | TI-STN-05-03-P / TI-STN-05-03-P/Case | 번역 추가 (Korean) |  | 비밀번호 초기화 | 언어셋 첨부 (R002) 목록 시트 586행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-022 | Account Setting | TI-STN-05-03-P | 번역 추가 (Korean) |  | 저장 | 언어셋 첨부 (R002) 목록 시트 587행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-001 | Protocol Setting | TI-STN-03-01 / LI-STN-03-01 / TI-STN-03-02 / LI-STN-03-02 | 번역 추가 (Korean) |  | 프로토콜 설정 | 언어셋 첨부 (R002) 목록 시트 596행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-002 | Protocol Setting | TI-STN-03-01 / LI-STN-03-01 / TI-STN-03-02 / LI-STN-03-02 / TI-STN-03-01-02 / LI-STN-03-01-02 | 번역 추가 (Korean) |  | 전처리 프로토콜 | 언어셋 첨부 (R002) 목록 시트 597행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-003 | Protocol Setting | TI-STN-03-01 / LI-STN-03-01 / TI-STN-03-02 / LI-STN-03-02 | 번역 추가 (Korean) |  | 추출 프로토콜 | 언어셋 첨부 (R002) 목록 시트 598행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-004 | Protocol Setting | TI-STN-03-01 / LI-STN-03-01 / TI-STN-03-02 / LI-STN-03-02 | 번역 추가 (Korean) |  | 프로토콜 이름 입력 | 언어셋 첨부 (R002) 목록 시트 599행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-005 | Protocol Setting | TI-STN-03-01 / LI-STN-03-01 / TI-STN-03-02 / LI-STN-03-02 | 번역 추가 (Korean) |  | 수정자 입력 | 언어셋 첨부 (R002) 목록 시트 600행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-006 | Protocol Setting | TI-STN-03-01 / LI-STN-03-01 / TI-STN-03-02 / LI-STN-03-02 / TI-STN-03-01-01 / TI-STN-03-02-01 / TI-STN-03-01-02 / LI-STN-03-01-02 | 번역 추가 (Korean) |  | 항목 | 언어셋 첨부 (R002) 목록 시트 601행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-007 | Protocol Setting | TI-STN-03-01 / LI-STN-03-01 / TI-STN-03-02 / LI-STN-03-02 / TI-STN-03-01-01 / TI-STN-03-02-01 | 번역 추가 (Korean) |  | 프로토콜 이름 | 언어셋 첨부 (R002) 목록 시트 603행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-008 | Protocol Setting | TI-STN-03-01 / LI-STN-03-01 / TI-STN-03-02 / LI-STN-03-02 / TI-STN-03-01-01 / TI-STN-03-02-01 | 번역 추가 (Korean) |  | 사용 여부 | 언어셋 첨부 (R002) 목록 시트 604행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-009 | Protocol Setting | TI-STN-03-01 / LI-STN-03-01 / TI-STN-03-02 / LI-STN-03-02 / TI-STN-03-01-01 / TI-STN-03-02-01 / TI-STN-03-01-02 / LI-STN-03-01-02 / TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 / TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 수정자 | 언어셋 첨부 (R002) 목록 시트 605행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-010 | Protocol Setting | TI-STN-03-01 / LI-STN-03-01 / TI-STN-03-02 / LI-STN-03-02 / TI-STN-03-01-01 / TI-STN-03-02-01 / TI-STN-03-01-02 / LI-STN-03-01-02 / TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 / TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 수정 일시 | 언어셋 첨부 (R002) 목록 시트 606행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-011 | Protocol Setting | TI-STN-03-01 / TI-STN-03-02 | 번역 추가 (Korean) |  | 복사 | 언어셋 첨부 (R002) 목록 시트 607행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-012 | Protocol Setting | TI-STN-03-01 / LI-STN-03-01 / TI-STN-03-02 / LI-STN-03-02 / TI-STN-03-01-02 / LI-STN-03-01-02 | 번역 추가 (Korean) |  | 상세 정보 | 언어셋 첨부 (R002) 목록 시트 608행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-013 | Protocol Setting | TI-STN-03-01 / LI-STN-03-01 / TI-STN-03-02 / LI-STN-03-02 / TI-STN-03-01-01 / TI-STN-03-02-01 / TI-STN-03-01-02 / LI-STN-03-01-02 | 번역 추가 (Korean) |  | SG 프로토콜 | 언어셋 첨부 (R002) 목록 시트 609행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-014 | Protocol Setting | TI-STN-03-01 / LI-STN-03-01 / TI-STN-03-02 / LI-STN-03-02 / TI-STN-03-01-01 / TI-STN-03-02-01 | 번역 추가 (Korean) |  | 적용됨 | 언어셋 첨부 (R002) 목록 시트 610행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-015 | Protocol Setting | TI-STN-03-01 / LI-STN-03-01 / TI-STN-03-02 / LI-STN-03-02 | 번역 추가 (Korean) |  | 검색 결과가 없습니다. | 언어셋 첨부 (R002) 목록 시트 611행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-016 | Protocol Setting | TI-STN-03-01 / LI-STN-03-01 / TI-STN-03-02 / LI-STN-03-02 | 번역 추가 (Korean) |  | 검색 | 언어셋 첨부 (R002) 목록 시트 612행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-017 | Protocol Setting | TI-STN-03-01 / TI-STN-03-02 | 번역 추가 (Korean) |  | 편집 | 언어셋 첨부 (R002) 목록 시트 613행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-019 | Protocol Setting | TI-STN-03-01-01 / TI-STN-03-02-01 / TI-STN-03-01-02-01-M | 번역 추가 (Korean) |  | 삭제 | 언어셋 첨부 (R002) 목록 시트 615행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-020 | Protocol Setting | TI-STN-03-01-01 / TI-STN-03-02-01 | 번역 추가 (Korean) |  | 적용 | 언어셋 첨부 (R002) 목록 시트 616행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-021 | Protocol Setting | TI-STN-03-01-01 / TI-STN-03-02-01 / TI-STN-03-01-02-01-M / TI-STN-03-02-02-M | 번역 추가 (Korean) |  | 취소 | 언어셋 첨부 (R002) 목록 시트 617행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-022 | Protocol Setting | TI-STN-03-01-01 / TI-STN-03-02-01 / TI-STN-03-01-02-01-M / TI-STN-03-02-02-M | 번역 추가 (Korean) |  | 저장 | 언어셋 첨부 (R002) 목록 시트 618행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-023 | Protocol Setting | TI-STN-03-01-02 / LI-STN-03-01-02 / TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | 검체 유형 | 언어셋 첨부 (R002) 목록 시트 619행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-024 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | 프로토콜 상세 정보 | 언어셋 첨부 (R002) 목록 시트 621행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-040 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | 프로세스 설정 | 언어셋 첨부 (R002) 목록 시트 622행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-026 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | 프로세스 | 언어셋 첨부 (R002) 목록 시트 623행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-025 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | 프로세스 가이드 | 언어셋 첨부 (R002) 목록 시트 627행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-027 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 628행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-028 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 629행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-029 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | 시간 (sec) | 언어셋 첨부 (R002) 목록 시트 630행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-030 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 631행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-031 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 632행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-032 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | 상층액 이동 | 언어셋 첨부 (R002) 목록 시트 633행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-033 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | 상층액 제거 | 언어셋 첨부 (R002) 목록 시트 634행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-034 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | Buffer 분주 & 혼합 | 언어셋 첨부 (R002) 목록 시트 635행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-035 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 636행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-036 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | 가열 온도 (ºC) | 언어셋 첨부 (R002) 목록 시트 637행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-037 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | Incubation 시간 (sec) | 언어셋 첨부 (R002) 목록 시트 638행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-038 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 639행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-039 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-01-02-01-M / LI-STN-03-01-02-01 | 번역 추가 (Korean) |  | PK 처리 | 언어셋 첨부 (R002) 목록 시트 640행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-041 | Protocol Setting | TI-STN-03-01-02-01-V / TI-STN-03-02-02-V | 번역 추가 (Korean) |  | 수정 | 언어셋 첨부 (R002) 목록 시트 641행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-042 | Protocol Setting | TI-STN-03-01-02-01-M | 번역 추가 (Korean) |  | 추가 | 언어셋 첨부 (R002) 목록 시트 642행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-043 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 대기 상태 설정 조건 | 언어셋 첨부 (R002) 목록 시트 643행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-044 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 가열 시스템이 적용된 Plate는 4개입니다(1, 2, 3, 6). | 언어셋 첨부 (R002) 목록 시트 644행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-045 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 645행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-046 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 이름 | 언어셋 첨부 (R002) 목록 시트 646행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-047 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 647행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-048 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 648행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-049 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 649행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-051 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 651행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-052 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 652행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-053 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 용량 (μL) | 언어셋 첨부 (R002) 목록 시트 653행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-054 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 유지 온도 (℃) | 언어셋 첨부 (R002) 목록 시트 654행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-055 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 동작 | 언어셋 첨부 (R002) 목록 시트 655행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-056 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 사용 안 함 | 언어셋 첨부 (R002) 목록 시트 656행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-057 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 정방향 | 언어셋 첨부 (R002) 목록 시트 657행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-058 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 정방향 상/하 | 언어셋 첨부 (R002) 목록 시트 658행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-059 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 역방향 | 언어셋 첨부 (R002) 목록 시트 659행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-060 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 역방향 상/하 | 언어셋 첨부 (R002) 목록 시트 660행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-061 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 661행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-062 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 동작 조건 | 언어셋 첨부 (R002) 목록 시트 662행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-063 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 단계 | 언어셋 첨부 (R002) 목록 시트 663행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-064 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 온도 (℃) | 언어셋 첨부 (R002) 목록 시트 664행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-065 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 혼합 시간 (min) | 언어셋 첨부 (R002) 목록 시트 665행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-066 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 혼합 속도 (rpm) | 언어셋 첨부 (R002) 목록 시트 666행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-067 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 수정 (Italian) | Tempo di  raccolta (sec) | Tempo di raccolta (sec) | 언어셋 첨부 (R002) 목록 시트 667행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-067 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | Collect 시간 (sec) | 언어셋 첨부 (R002) 목록 시트 667행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-068 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 증발 시간 (min) | 언어셋 첨부 (R002) 목록 시트 668행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-069 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 일시 정지 | 언어셋 첨부 (R002) 목록 시트 669행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-070 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 켜짐 | 언어셋 첨부 (R002) 목록 시트 670행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-071 | Protocol Setting | TI-STN-03-02-02-V / TI-STN-03-02-02-M / LI-STN-03-02-02 | 번역 추가 (Korean) |  | 꺼짐 | 언어셋 첨부 (R002) 목록 시트 671행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-104 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | 정책 설정 | 언어셋 첨부 (R002) 목록 시트 672행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-107 | Policy Setting | TI-STN-01 / TI-STN-01-01 | 번역 추가 (Korean) |  | 비용 설정 | 언어셋 첨부 (R002) 목록 시트 675행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-108 | Policy Setting | TI-STN-01 | 번역 추가 (Korean) |  | 소모품 및 시약 비용을 입력합니다. | 언어셋 첨부 (R002) 목록 시트 676행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-143 | Policy Setting | TI-STN-01 | 번역 추가 (Korean) |  | 설정 | 언어셋 첨부 (R002) 목록 시트 677행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-109 | Policy Setting | TI-STN-01 / LI-STN-01 / TI-STN-01-02 / LI-STN-01-02 | 번역 추가 (Korean) |  | 추출 모듈 사용 설정 | 언어셋 첨부 (R002) 목록 시트 679행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-110 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | 각 검사에 사용할 추출 장비를 선택합니다. | 언어셋 첨부 (R002) 목록 시트 680행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-111 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | 핵산 추출 장비 배정 정책 | 언어셋 첨부 (R002) 목록 시트 681행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-112 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | 검사 비용 및 TAT(검사 소요 시간)를 최소화하기 위한 추출 장비 우선 순위를 설정합니다. | 언어셋 첨부 (R002) 목록 시트 682행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-145 | Policy Setting | TI-STN-01 | 번역 추가 (Korean) |  | 비교 | 언어셋 첨부 (R002) 목록 시트 683행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-113 | Policy Setting | TI-STN-01 / LI-STN-01 / TI-STN-01-03 | 번역 추가 (Korean) |  | 비용 절감 우선 | 언어셋 첨부 (R002) 목록 시트 684행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-114 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | 입력한 최적 검체 수 이상인 경우 High-throughput Extraction 장비를 우선하고, 미만인 경우 Flexible Extraction 장비를 우선합니다. | 언어셋 첨부 (R002) 목록 시트 685행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-144 | Policy Setting | TI-STN-01 / LI-STN-01 / TI-STN-01-04 / LI-STN-01-03 | 번역 추가 (Korean) |  | 분기점 분석 | 언어셋 첨부 (R002) 목록 시트 686행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-115 | Policy Setting | TI-STN-01 | 번역 추가 (Korean) |  | 설정 개수 | 언어셋 첨부 (R002) 목록 시트 687행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-116 | Policy Setting | LI-STN-01 | 번역 추가 (Korean) |  | 개수 | 언어셋 첨부 (R002) 목록 시트 688행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-117 | Policy Setting | TI-STN-01 / LI-STN-01 / TI-STN-01-03 | 번역 추가 (Korean) |  | TAT 단축 우선 | 언어셋 첨부 (R002) 목록 시트 689행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-118 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | High-throughput Extraction 장비를 우선하여 검사 소요 시간을 최소화합니다. | 언어셋 첨부 (R002) 목록 시트 690행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-119 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | PCR 프로토콜 설정 | 언어셋 첨부 (R002) 목록 시트 691행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-120 | Policy Setting | LI-STN-01 | 번역 추가 (Korean) |  | Anyplex II STI, HPV 제품에 적용할 PCR 프로토콜 유형을 선택합니다. | 언어셋 첨부 (R002) 목록 시트 692행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-121 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 693행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-122 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | 고순도 Magnetic Bead 추출 | 언어셋 첨부 (R002) 목록 시트 694행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-123 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 695행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-124 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | 타겟 특이적 Magnetic Bead 추출 | 언어셋 첨부 (R002) 목록 시트 696행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-125 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | 일반 설정 | 언어셋 첨부 (R002) 목록 시트 697행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-126 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | 검사실 운영을 위한 추가 설정입니다. | 언어셋 첨부 (R002) 목록 시트 698행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-127 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | 검사 집계 기준 시간 | 언어셋 첨부 (R002) 목록 시트 699행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-128 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | 일일 검사 집계 기준 시간을 설정합니다. | 언어셋 첨부 (R002) 목록 시트 700행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-129 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | 검사 전 프로토콜 변경 허용 | 언어셋 첨부 (R002) 목록 시트 703행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-130 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | 검사 전에 프로토콜 설정을 변경할 수 있습니다. | 언어셋 첨부 (R002) 목록 시트 704행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-131 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | * 'OFF'로 설정 시 ‘Protocol Setting’에서 ‘Apply’로 지정된 프로토콜이 적용되며, ‘Run Preparation Step. 4’는 생략됩니다. | 언어셋 첨부 (R002) 목록 시트 705행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-221 | Policy Setting | TI-STN-01 | 번역 추가 (Korean) |  | 프로토콜 설정 | 언어셋 첨부 (R002) 목록 시트 706행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-070 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | 켜짐 | 언어셋 첨부 (R002) 목록 시트 708행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-071 | Policy Setting | TI-STN-01-01 | 번역 추가 (Korean) |  | 꺼짐 | 언어셋 첨부 (R002) 목록 시트 709행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-132 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | NC/PC 분주 순서 | 언어셋 첨부 (R002) 목록 시트 710행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-133 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | PCR Plate에서 NC와 PC의 분주 순서를 선택합니다. | 언어셋 첨부 (R002) 목록 시트 711행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-134 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 712행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-135 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | Negative Control을 먼저 분주한 후 Positive Control을 분주합니다. | 언어셋 첨부 (R002) 목록 시트 713행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-136 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 714행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-137 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | Positive Control을 먼저 분주한 후 Negative Control을 분주합니다. | 언어셋 첨부 (R002) 목록 시트 715행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-138 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | 검체 분주 옵션 | 언어셋 첨부 (R002) 목록 시트 716행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-139 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | 검체 분주 방식을 선택합니다. DWP에 직접 분주하거나 standard tube를 거친 후 DWP에 분주할 수 있습니다. | 언어셋 첨부 (R002) 목록 시트 717행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-140 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | DWP에 직접 분주합니다. | 언어셋 첨부 (R002) 목록 시트 719행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-141 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 720행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-142 | Policy Setting | TI-STN-01 / LI-STN-01 | 번역 추가 (Korean) |  | standard tube를 거친 후 DWP에 분주합니다. | 언어셋 첨부 (R002) 목록 시트 721행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-022 | Policy Setting | TI-STN-01 | 번역 추가 (Korean) |  | 저장 | 언어셋 첨부 (R002) 목록 시트 722행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-146 | Policy Setting | TI-STN-01-01 | 번역 추가 (Korean) |  | 번호 | 언어셋 첨부 (R002) 목록 시트 725행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-147 | Policy Setting | TI-STN-01-01 | 번역 추가 (Korean) |  | 제품명 | 언어셋 첨부 (R002) 목록 시트 726행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-IVT-039 | Policy Setting | TI-STN-01-01 | 번역 추가 (Korean) |  | 사용량 | 언어셋 첨부 (R002) 목록 시트 728행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-149 | Policy Setting | TI-STN-01-01 | 번역 추가 (Korean) |  | 패키지당 비용 | 언어셋 첨부 (R002) 목록 시트 729행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-021 | Policy Setting | TI-STN-01-01 / TI-STN-01-02 | 번역 추가 (Korean) |  | 취소 | 언어셋 첨부 (R002) 목록 시트 730행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-020 | Policy Setting | TI-STN-01-01 / TI-STN-01-02 | 번역 추가 (Korean) |  | 적용 | 언어셋 첨부 (R002) 목록 시트 731행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-023 | Policy Setting | TI-STN-01-02 / LI-STN-01-02 / TI-STN-01-03 | 번역 추가 (Korean) |  | 제품 | 언어셋 첨부 (R002) 목록 시트 732행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-153 | Policy Setting | TI-STN-01-02 / LI-STN-01-02 | 번역 추가 (Korean) |  | 각 검사에 사용할 수 있는 장비를 선택합니다. 추출 장비를 하나 이상 선택해야 하며, 여러 장비를 선택할 수 있습니다. | 언어셋 첨부 (R002) 목록 시트 736행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-154 | Policy Setting | TI-STN-01-03 | 번역 추가 (Korean) |  | 비교 시뮬레이션 | 언어셋 첨부 (R002) 목록 시트 737행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-020 | Policy Setting | TI-STN-01-03 | 번역 추가 (Korean) |  | 오더 날짜 | 언어셋 첨부 (R002) 목록 시트 738행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-SPT-023 | Policy Setting | TI-STN-01-03 | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 739행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-155 | Policy Setting | TI-STN-01-03 | 번역 추가 (Korean) |  | 검사 | 언어셋 첨부 (R002) 목록 시트 740행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-SPT-001 | Policy Setting | TI-STN-01-03 | 번역 추가 (Korean) |  | 검체 | 언어셋 첨부 (R002) 목록 시트 741행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-156 | Policy Setting | TI-STN-01-03 | 번역 추가 (Korean) |  | 비교 | 언어셋 첨부 (R002) 목록 시트 742행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-158 | Policy Setting | TI-STN-01-03 | 번역 추가 (Korean) |  | 총 비용 | 언어셋 첨부 (R002) 목록 시트 743행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-159 | Policy Setting | TI-STN-01-03 | 번역 추가 (Korean) |  | 총 TAT | 언어셋 첨부 (R002) 목록 시트 744행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-028 | Policy Setting | TI-STN-01-03 | 번역 추가 (Korean) |  | 00시간 00분 | 언어셋 첨부 (R002) 목록 시트 745행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-011 | Policy Setting | TI-STN-01-03 / TI-STN-01-04 / LI-STN-01-02 / LI-STN-01-03 | 번역 추가 (Korean) |  | 확인 | 언어셋 첨부 (R002) 목록 시트 747행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-160 | Policy Setting | TI-STN-01-04 / LI-STN-01-03 | 번역 추가 (Korean) |  | 최적 검체 수 | 언어셋 첨부 (R002) 목록 시트 748행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-161 | Policy Setting | TI-STN-01-04 / LI-STN-01-03 | 번역 추가 (Korean) |  | 검사당 비용 | 언어셋 첨부 (R002) 목록 시트 749행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-162 | Policy Setting | TI-STN-01-04 / LI-STN-01-03 | 번역 추가 (Korean) |  | 검체 수 | 언어셋 첨부 (R002) 목록 시트 750행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-163 | Policy Setting | TI-STN-01-04 / LI-STN-01-03 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 751행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-164 | Policy Setting | TI-STN-01-04 / LI-STN-01-03 | 번역 추가 (Korean) |  | 최적의 장비 할당을 위한 검체 수 분기점을 표시합니다. | 언어셋 첨부 (R002) 목록 시트 752행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-165 | Policy Setting | TI-STN-01-04 / LI-STN-01-03 | 번역 추가 (Korean) |  | 대량 검사에 최적화되어 있습니다. TAT가 비교적 짧지만, 검체 수가 적을 경우 비용이 증가할 수 있습니다. | 언어셋 첨부 (R002) 목록 시트 753행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-166 | Policy Setting | TI-STN-01-04 / LI-STN-01-03 | 번역 추가 (Korean) |  | 적은 비용으로 적은 검체를 처리하는데 적합합니다. 단, 검체 수가 증가할수록 TAT가 증가할 수 있습니다. | 언어셋 첨부 (R002) 목록 시트 754행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-167 | Policy Setting | TI-STN-01-04 / LI-STN-01-03 | 번역 추가 (Korean) |  | Break point가 되는 검체 수는 각 장비에 입력된 비용을 기준으로 산정됩니다. | 언어셋 첨부 (R002) 목록 시트 755행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-197 | System Setting | TI-STN-02 / LI-STN-02 | 번역 추가 (Korean) |  | 일반 | 언어셋 첨부 (R002) 목록 시트 758행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-170 | System Setting | TI-STN-02 / LI-STN-02 | 번역 추가 (Korean) |  | 언어 | 언어셋 첨부 (R002) 목록 시트 759행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-171 | System Setting | TI-STN-02 / LI-STN-02 | 번역 추가 (Korean) |  | 영어 | 언어셋 첨부 (R002) 목록 시트 760행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-172 | System Setting | TI-STN-02 / LI-STN-02 / TI-STN-02_타임아웃 오프 / LI-STN-02_타임아웃 오프 | 번역 추가 (Korean) |  | 세션 타임아웃 | 언어셋 첨부 (R002) 목록 시트 761행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-070 | System Setting | TI-STN-02 / LI-STN-02 | 번역 추가 (Korean) |  | 켜짐 | 언어셋 첨부 (R002) 목록 시트 762행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-071 | System Setting | TI-STN-02 / LI-STN-02 / TI-STN-02_타임아웃 오프 / LI-STN-02_타임아웃 오프 | 번역 추가 (Korean) |  | 꺼짐 | 언어셋 첨부 (R002) 목록 시트 763행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-173 | System Setting | TI-STN-02 / LI-STN-02 | 번역 추가 (Korean) |  | 분 | 언어셋 첨부 (R002) 목록 시트 764행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-175 | System Setting | LI-STN-02 | 번역 추가 (Korean) |  | 가져오기/내보내기 위치 | 언어셋 첨부 (R002) 목록 시트 766행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-022 | System Setting | TI-STN-02 / LI-STN-02 | 번역 추가 (Korean) |  | 저장 | 언어셋 첨부 (R002) 목록 시트 769행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-185 | System Setting | TI-STN-02 / LI-STN-02 | 번역 추가 (Korean) |  | 로그 관리 | 언어셋 첨부 (R002) 목록 시트 770행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-186 | System Setting | TI-STN-02 / LI-STN-02 | 번역 추가 (Korean) |  | 로그 기간 | 언어셋 첨부 (R002) 목록 시트 771행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-023 | System Setting | TI-STN-02 / LI-STN-02 | 번역 추가 (Korean) |  | 내보내기 | 언어셋 첨부 (R002) 목록 시트 772행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STA-015 | System Setting | TI-STN-02_데이트피커 / LI-STN-02_데이트피커 | 번역 추가 (Korean) |  | 일 | 언어셋 첨부 (R002) 목록 시트 775행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STA-009 | System Setting | TI-STN-02_데이트피커 / LI-STN-02_데이트피커 | 번역 추가 (Korean) |  | 월 | 언어셋 첨부 (R002) 목록 시트 776행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STA-010 | System Setting | TI-STN-02_데이트피커 / LI-STN-02_데이트피커 | 번역 추가 (Korean) |  | 화 | 언어셋 첨부 (R002) 목록 시트 777행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STA-011 | System Setting | TI-STN-02_데이트피커 / LI-STN-02_데이트피커 | 번역 추가 (Korean) |  | 수 | 언어셋 첨부 (R002) 목록 시트 778행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STA-012 | System Setting | TI-STN-02_데이트피커 / LI-STN-02_데이트피커 | 번역 추가 (Korean) |  | 목 | 언어셋 첨부 (R002) 목록 시트 779행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STA-013 | System Setting | TI-STN-02_데이트피커 / LI-STN-02_데이트피커 | 번역 추가 (Korean) |  | 금 | 언어셋 첨부 (R002) 목록 시트 780행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STA-014 | System Setting | TI-STN-02_데이트피커 / LI-STN-02_데이트피커 | 번역 추가 (Korean) |  | 토 | 언어셋 첨부 (R002) 목록 시트 781행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-025 | System Setting | TI-STN-02_데이트피커 / LI-STN-02_데이트피커 | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 782행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-194 | LIS Setting | TI-STN-04-01-T / TI-STN-04-02-T | 번역 추가 (Korean) |  | 인터페이스 설정 | 언어셋 첨부 (R002) 목록 시트 798행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-195 | LIS Setting | TI-STN-04-01-T / TI-STN-04-02-T | 번역 추가 (Korean) |  | 코드 매핑 | 언어셋 첨부 (R002) 목록 시트 799행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-197 | LIS Setting | TI-STN-04-01-T | 번역 추가 (Korean) |  | 일반 | 언어셋 첨부 (R002) 목록 시트 801행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-198 | LIS Setting | TI-STN-04-01-T | 번역 추가 (Korean) |  | 인터페이스 유형 | 언어셋 첨부 (R002) 목록 시트 802행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-199 | LIS Setting | TI-STN-04-01-T | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 803행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-201 | LIS Setting | TI-STN-04-01-T | 번역 추가 (Korean) |  | 전송 프로토콜 | 언어셋 첨부 (R002) 목록 시트 805행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-202 | LIS Setting | TI-STN-04-01-T | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 806행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-203 | LIS Setting | TI-STN-04-01-T | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 807행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-265 | LIS Setting | TI-STN-04-01-T | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 809행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-266 | LIS Setting | TI-STN-04-01-T | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 810행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-204 | LIS Setting | TI-STN-04-01-T | 번역 추가 (Korean) |  | T-IOS 네트워크 | 언어셋 첨부 (R002) 목록 시트 811행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-205 | LIS Setting | TI-STN-04-01-T | 번역 추가 (Korean) |  | 포트 | 언어셋 첨부 (R002) 목록 시트 813행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-206 | LIS Setting | TI-STN-04-01-T | 번역 추가 (Korean) |  | LIS 네트워크 | 언어셋 첨부 (R002) 목록 시트 815행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-207 | LIS Setting | TI-STN-04-01-T | 번역 추가 (Korean) |  | 호스트 주소 (IP) | 언어셋 첨부 (R002) 목록 시트 816행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-208 | LIS Setting | TI-STN-04-01-T | 번역 추가 (Korean) |  | IP 주소를 입력하세요 | 언어셋 첨부 (R002) 목록 시트 817행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-022 | LIS Setting | TI-STN-04-01-T / TI-STN-04-02-T | 번역 추가 (Korean) |  | 저장 | 언어셋 첨부 (R002) 목록 시트 822행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-212 | LIS Setting | TI-STN-04-02-T | 번역 추가 (Korean) |  | 코드 유형 | 언어셋 첨부 (R002) 목록 시트 823행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-214 | LIS Setting | TI-STN-04-02-T | 번역 추가 (Korean) |  | 검체 유형 코드 | 언어셋 첨부 (R002) 목록 시트 824행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-213 | LIS Setting | TI-STN-04-02-T | 번역 추가 (Korean) |  | 검사 코드 | 언어셋 첨부 (R002) 목록 시트 825행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-006 | LIS Setting | TI-STN-04-02-T | 번역 추가 (Korean) |  | 항목 | 언어셋 첨부 (R002) 목록 시트 827행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-146 | LIS Setting | TI-STN-04-02-T | 번역 추가 (Korean) |  | 번호 | 언어셋 첨부 (R002) 목록 시트 830행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-147 | LIS Setting | TI-STN-04-02-T | 번역 추가 (Korean) |  | 제품명 | 언어셋 첨부 (R002) 목록 시트 831행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-216 | LIS Setting | TI-STN-04-02-T | 번역 추가 (Korean) |  | 검체 유형명 | 언어셋 첨부 (R002) 목록 시트 832행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-217 | LIS Setting | TI-STN-04-02-T | 번역 추가 (Korean) |  | LIS 검체 유형 코드 | 언어셋 첨부 (R002) 목록 시트 833행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-215 | LIS Setting | TI-STN-04-02-T | 번역 추가 (Korean) |  | LIS 검사 코드 | 언어셋 첨부 (R002) 목록 시트 834행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-017 | LIS Setting | TI-STN-04-02-T | 번역 추가 (Korean) |  | 편집 | 언어셋 첨부 (R002) 목록 시트 835행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-025 | LIS Setting | TI-STN-04-02-T | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 836행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-022 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 추가 (Korean) |  | 초기화 | 언어셋 첨부 (R002) 목록 시트 848행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-016 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 추가 (Korean) |  | 검색 | 언어셋 첨부 (R002) 목록 시트 849행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-006 | Tube Setting | LI-SVS-01 | 번역 추가 (Korean) |  | 항목 | 언어셋 첨부 (R002) 목록 시트 851행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-042 | Tube Setting | TI-SVS-01 | 번역 추가 (Korean) |  | 추가 | 언어셋 첨부 (R002) 목록 시트 852행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-010 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 추가 (Korean) |  | 수정 일시 | 언어셋 첨부 (R002) 목록 시트 858행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-012 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 추가 (Korean) |  | 상세 정보 | 언어셋 첨부 (R002) 목록 시트 859행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-015 | Tube Setting | TI-SVS-01 / LI-SVS-01 | 번역 추가 (Korean) |  | 검색 결과가 없습니다. | 언어셋 첨부 (R002) 목록 시트 862행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-046 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 번역 추가 (Korean) |  | 이름 | 언어셋 첨부 (R002) 목록 시트 866행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-004 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 번역 추가 (Korean) |  | 유형 | 언어셋 첨부 (R002) 목록 시트 877행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-146 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 번역 추가 (Korean) |  | 번호 | 언어셋 첨부 (R002) 목록 시트 878행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-023 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 번역 추가 (Korean) |  | 검체 유형 | 언어셋 첨부 (R002) 목록 시트 879행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-033 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 번역 추가 (Korean) |  | 메모 | 언어셋 첨부 (R002) 목록 시트 880행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-035 | Tube Setting | TI-SVS-01-P / LI-SVS-01-P | 번역 추가 (Korean) |  | 0/n자 | 언어셋 첨부 (R002) 목록 시트 881행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-019 | Tube Setting | TI-SVS-01-P | 번역 추가 (Korean) |  | 삭제 | 언어셋 첨부 (R002) 목록 시트 882행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-041 | Tube Setting | TI-SVS-01-P | 번역 추가 (Korean) |  | 수정 | 언어셋 첨부 (R002) 목록 시트 883행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-021 | Tube Setting | TI-SVS-01-P | 번역 추가 (Korean) |  | 취소 | 언어셋 첨부 (R002) 목록 시트 891행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-022 | Tube Setting | TI-SVS-01-P | 번역 추가 (Korean) |  | 저장 | 언어셋 첨부 (R002) 목록 시트 892행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-003 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 897행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-022 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 번역 추가 (Korean) |  | 초기화 | 언어셋 첨부 (R002) 목록 시트 906행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-016 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 번역 추가 (Korean) |  | 검색 | 언어셋 첨부 (R002) 목록 시트 907행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-006 | Assay Pack Setting | LI-STN-08 | 번역 추가 (Korean) |  | 항목 | 언어셋 첨부 (R002) 목록 시트 909행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-019 | Assay Pack Setting | TI-STN-08 / TI-STN-08-P | 번역 추가 (Korean) |  | 삭제 | 언어셋 첨부 (R002) 목록 시트 910행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-035 | Assay Pack Setting | TI-STN-08 / TI-STN-08-01 | 번역 추가 (Korean) |  | 가져오기 | 언어셋 첨부 (R002) 목록 시트 911행 · R003 · 공통 LID-COM-BTN-004 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-STN-147 | Assay Pack Setting | TI-STN-08 / LI-STN-08 / TI-STN-08-P / LI-STN-08-P | 번역 추가 (Korean) |  | 제품명 | 언어셋 첨부 (R002) 목록 시트 912행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-073 | Assay Pack Setting | TI-STN-08 / LI-STN-08 / TI-STN-08-P / LI-STN-08-P | 번역 추가 (Korean) |  | 사용자 ID | 언어셋 첨부 (R002) 목록 시트 916행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-012 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 번역 추가 (Korean) |  | 상세 정보 | 언어셋 첨부 (R002) 목록 시트 919행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-015 | Assay Pack Setting | TI-STN-08 / LI-STN-08 | 번역 추가 (Korean) |  | 검색 결과가 없습니다. | 언어셋 첨부 (R002) 목록 시트 923행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-039 | Assay Pack Setting | TI-STN-08-01 | 번역 추가 (Korean) |  | 닫기 | 언어셋 첨부 (R002) 목록 시트 928행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-216 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 번역 추가 (Korean) |  | 검체 유형명 | 언어셋 첨부 (R002) 목록 시트 939행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-214 | Assay Pack Setting | TI-STN-08-P / LI-STN-08-P | 번역 추가 (Korean) |  | 검체 유형 코드 | 언어셋 첨부 (R002) 목록 시트 940행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-022 | Assay Pack Setting | TI-STN-08-P | 번역 추가 (Korean) |  | 저장 | 언어셋 첨부 (R002) 목록 시트 986행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-073 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 번역 추가 (Korean) |  | 사용자 ID | 언어셋 첨부 (R002) 목록 시트 996행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-LOG-005 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 번역 추가 (Korean) |  | 비밀번호 | 언어셋 첨부 (R002) 목록 시트 997행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-315 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1004행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STN-316 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1005행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-022 | SMTP Setting | TI-STN-06 / TI-STN-06/Case | 번역 추가 (Korean) |  | 저장 | 언어셋 첨부 (R002) 목록 시트 1006행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-005 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 장비 | 언어셋 첨부 (R002) 목록 시트 1007행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-IVT-003 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 개요 | 언어셋 첨부 (R002) 목록 시트 1008행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-003 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 1009행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-001 | Instrument | TI-INS-01-T / LI-INS-01-T | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1010행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-002 | Instrument | TI-INS-01-T / LI-INS-01-T | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1011행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-SPT-023 | Instrument | TI-INS-01-T / LI-INS-01-T | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 1012행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-003 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 활성화 | 언어셋 첨부 (R002) 목록 시트 1013행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-004 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 비활성화 | 언어셋 첨부 (R002) 목록 시트 1014행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-005 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 연결됨 | 언어셋 첨부 (R002) 목록 시트 1015행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-006 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 연결 끊김 | 언어셋 첨부 (R002) 목록 시트 1016행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-022 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 준비 완료 | 언어셋 첨부 (R002) 목록 시트 1017행 · R003 · 공통 LID-COM-SCD-014 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-023 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 가동 중 | 언어셋 첨부 (R002) 목록 시트 1018행 · R003 · 공통 LID-COM-SCD-015 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-037 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 오류 | 언어셋 첨부 (R002) 목록 시트 1019행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-042 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T / LI-INS-01-P | 번역 추가 (Korean) |  | 열림 | 언어셋 첨부 (R002) 목록 시트 1022행 · R003 · 공통 LID-COM-SCD-027 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-043 | Instrument | TI-INS-01-T / LI-INS-01-T / TI-INS-02-T / LI-INS-02-T / LI-INS-01-P | 번역 추가 (Korean) |  | 닫힘 | 언어셋 첨부 (R002) 목록 시트 1023행 · R003 · 공통 LID-COM-SCD-028 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-INS-030 | Instrument | TI-INS-02-T / LI-INS-01-P | 번역 추가 (Korean) |  | 잠김 | 언어셋 첨부 (R002) 목록 시트 1024행 · R003 · 공통 LID-COM-SCD-025 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-INS-031 | Instrument | TI-INS-02-T / LI-INS-01-P | 번역 추가 (Korean) |  | 잠금 해제 | 언어셋 첨부 (R002) 목록 시트 1025행 · R003 · 공통 LID-COM-SCD-026 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-INS-032 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 장착됨 | 언어셋 첨부 (R002) 목록 시트 1026행 · R003 · 공통 LID-COM-SCD-029 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-INS-033 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 분리됨 | 언어셋 첨부 (R002) 목록 시트 1027행 · R003 · 공통 LID-COM-SCD-030 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-030 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 가득 참 | 언어셋 첨부 (R002) 목록 시트 1028행 · R003 · 공통 LID-COM-SCD-035 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-038 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 경고 | 언어셋 첨부 (R002) 목록 시트 1031행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-007 | Instrument | LI-INS-01-P | 번역 추가 (Korean) |  | 도어 제어 | 언어셋 첨부 (R002) 목록 시트 1032행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-006 | Instrument | LI-INS-01-P | 번역 추가 (Korean) |  | 항목 | 언어셋 첨부 (R002) 목록 시트 1033행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-011 | Instrument | TI-INS-01-T / LI-INS-01-T / LI-INS-01-P / TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1034행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-034 | Instrument | LI-INS-01-P / TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1037행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-035 | Instrument | LI-INS-01-P / TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1038행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-036 | Instrument | LI-INS-01-P / TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1039행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-013 | Instrument | TI-INS-01-T / LI-INS-01-T / LI-INS-01-P | 번역 추가 (Korean) |  | 잠금 해제 | 언어셋 첨부 (R002) 목록 시트 1041행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-014 | Instrument | LI-INS-01-P | 번역 추가 (Korean) |  | 모든 도어 잠금 해제 | 언어셋 첨부 (R002) 목록 시트 1043행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-015 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 모듈 목록 | 언어셋 첨부 (R002) 목록 시트 1048행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-051 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 전체 모듈 | 언어셋 첨부 (R002) 목록 시트 1049행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-012 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 모듈 | 언어셋 첨부 (R002) 목록 시트 1050행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-016 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 상태 | 언어셋 첨부 (R002) 목록 시트 1051행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-017 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 가동 시간(h) | 언어셋 첨부 (R002) 목록 시트 1052행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-018 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 이벤트 | 언어셋 첨부 (R002) 목록 시트 1053행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-019 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 오류율 | 언어셋 첨부 (R002) 목록 시트 1054행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-020 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 장비 | 언어셋 첨부 (R002) 목록 시트 1055행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-013 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 유닛 | 언어셋 첨부 (R002) 목록 시트 1056행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-021 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1057행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-022 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 도킹 상태 | 언어셋 첨부 (R002) 목록 시트 1058행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-023 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 보관 유형 | 언어셋 첨부 (R002) 목록 시트 1059행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-024 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 실온 | 언어셋 첨부 (R002) 목록 시트 1060행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-025 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 냉장 | 언어셋 첨부 (R002) 목록 시트 1061행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-026 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 온도 | 언어셋 첨부 (R002) 목록 시트 1062행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-IVT-053 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1064행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INS-052 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 폐기 상태 | 언어셋 첨부 (R002) 목록 시트 1065행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-001 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 이벤트 이력 | 언어셋 첨부 (R002) 목록 시트 1066행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-011 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 설명 | 언어셋 첨부 (R002) 목록 시트 1067행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-IVT-040 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 날짜/시간 | 언어셋 첨부 (R002) 목록 시트 1068행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-014 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 레벨 | 언어셋 첨부 (R002) 목록 시트 1069행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-SPT-015 | Instrument | TI-INS-02-T / LI-INS-02-T | 번역 추가 (Korean) |  | 더보기 | 언어셋 첨부 (R002) 목록 시트 1070행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-021 | Instrument | TI-INS-02-01-P | 번역 추가 (Korean) |  | 취소 | 언어셋 첨부 (R002) 목록 시트 1080행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-022 | Instrument | TI-INS-02-01-P | 번역 추가 (Korean) |  | 저장 | 언어셋 첨부 (R002) 목록 시트 1082행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-011 | Instrument | TI-INS-02-01-P / LI-INS-02-01-P | 번역 추가 (Korean) |  | 확인 | 언어셋 첨부 (R002) 목록 시트 1083행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-001 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-03-01 / TI-STA-03-02 / TI-STA-04-01 / TI-STA-04-02 | 번역 추가 (Korean) |  | 검사 분석 | 언어셋 첨부 (R002) 목록 시트 1087행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-002 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-03-01 / TI-STA-03-02 / TI-STA-04-01 / TI-STA-04-02 / TI-STA-05 | 번역 추가 (Korean) |  | 검사 건수 | 언어셋 첨부 (R002) 목록 시트 1088행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-003 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-03-01 / TI-STA-03-02 / TI-STA-04-01 / TI-STA-04-02 | 번역 추가 (Korean) |  | 검사 비율 | 언어셋 첨부 (R002) 목록 시트 1089행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-004 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-03-01 / TI-STA-03-02 / TI-STA-04-01 / TI-STA-04-02 | 번역 추가 (Korean) |  | 검사 TAT | 언어셋 첨부 (R002) 목록 시트 1090행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-005 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-03-01 / TI-STA-03-02 / TI-STA-04-01 / TI-STA-04-02 | 번역 추가 (Korean) |  | 검사 비용 | 언어셋 첨부 (R002) 목록 시트 1091행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-006 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-03-01 / TI-STA-03-02 / TI-STA-04-01 / TI-STA-04-02 / TI-STA-05-01 / TI-STA-05-02 / TI-STA-06-01 / TI-STA-06-02 / TI-STA-07-01 / TI-STA-07-02 / TI-STA-08-01 / TI-STA-08-02 | 번역 추가 (Korean) |  | 차트 | 언어셋 첨부 (R002) 목록 시트 1092행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-007 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-03-01 / TI-STA-03-02 / TI-STA-04-01 / TI-STA-04-02 / TI-STA-05-01 / TI-STA-05-02 / TI-STA-06-01 / TI-STA-06-02 / TI-STA-07-01 / TI-STA-07-02 / TI-STA-08-01 / TI-STA-08-02 | 번역 추가 (Korean) |  | 테이블 | 언어셋 첨부 (R002) 목록 시트 1093행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-023 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-03-01 / TI-STA-03-02 / TI-STA-04-01 / TI-STA-04-02 / TI-STA-05-01 / TI-STA-05-02 / TI-STA-06-01 / TI-STA-06-02 / TI-STA-07-01 / TI-STA-07-02 / TI-STA-08-01 / TI-STA-08-02 | 번역 추가 (Korean) |  | 내보내기 | 언어셋 첨부 (R002) 목록 시트 1094행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-008 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-03-01 / TI-STA-05 / TI-STA-07-01 / TI-STA-08-01 / TI-STA-08-02 | 번역 추가 (Korean) |  | 단위: 건 | 언어셋 첨부 (R002) 목록 시트 1095행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-SPT-023 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-05-01 / TI-STA-05-02 / TI-STA-06-02 / TI-STA-08-01 / TI-STA-08-02 | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 1096행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-016 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-04-01 / TI-STA-04-02 / TI-STA-05-01 / TI-STA-05-02 / TI-STA-06-01 / TI-STA-06-02 / TI-STA-07-01 / TI-STA-07-02 / TI-STA-08-01 / TI-STA-08-02 | 번역 추가 (Korean) |  | 기간 | 언어셋 첨부 (R002) 목록 시트 1097행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-017 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-03-01 / TI-STA-03-02 / TI-STA-04-01 / TI-STA-04-02 / TI-STA-05-01 / TI-STA-05-02 / TI-STA-06-01 / TI-STA-06-02 / TI-STA-07-01 / TI-STA-07-02 / TI-STA-08-01 / TI-STA-08-02 | 번역 추가 (Korean) |  | 일별 | 언어셋 첨부 (R002) 목록 시트 1098행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-018 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-03-01 / TI-STA-03-02 / TI-STA-04-01 / TI-STA-04-02 / TI-STA-05-01 / TI-STA-05-02 / TI-STA-06-01 / TI-STA-06-02 / TI-STA-07-01 / TI-STA-07-02 / TI-STA-08-01 / TI-STA-08-02 | 번역 추가 (Korean) |  | 월별 | 언어셋 첨부 (R002) 목록 시트 1099행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-009 | Statistical Analysis | TI-STA-01-01 / TI-STA-05-01 / TI-STA-08-01 | 번역 추가 (Korean) |  | 월 | 언어셋 첨부 (R002) 목록 시트 1100행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-010 | Statistical Analysis | TI-STA-01-01 / TI-STA-02-01 / TI-STA-03-01 / TI-STA-04-01 / TI-STA-05 / TI-STA-05-01 / TI-STA-06-01 / TI-STA-07-01 / TI-STA-08-01 | 번역 추가 (Korean) |  | 화 | 언어셋 첨부 (R002) 목록 시트 1101행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-011 | Statistical Analysis | TI-STA-01-01 / TI-STA-05-01 / TI-STA-08-01 | 번역 추가 (Korean) |  | 수 | 언어셋 첨부 (R002) 목록 시트 1102행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-012 | Statistical Analysis | TI-STA-01-01 / TI-STA-05-01 / TI-STA-08-01 | 번역 추가 (Korean) |  | 목 | 언어셋 첨부 (R002) 목록 시트 1103행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-013 | Statistical Analysis | TI-STA-01-01 / TI-STA-05-01 / TI-STA-08-01 | 번역 추가 (Korean) |  | 금 | 언어셋 첨부 (R002) 목록 시트 1104행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-014 | Statistical Analysis | TI-STA-01-01 / TI-STA-05-01 / TI-STA-08-01 | 번역 추가 (Korean) |  | 토 | 언어셋 첨부 (R002) 목록 시트 1105행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-015 | Statistical Analysis | TI-STA-01-01 / TI-STA-05-01 / TI-STA-08-01 | 번역 추가 (Korean) |  | 일 | 언어셋 첨부 (R002) 목록 시트 1106행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-022 | Statistical Analysis | TI-STA-01-01 / TI-STA-05-01 / TI-STA-08-01 | 번역 추가 (Korean) |  | 이번 달: 어제까지의 누적 합계 | 언어셋 첨부 (R002) 목록 시트 1107행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-025 | Statistical Analysis | TI-STA-01-01 / TI-STA-05-01 / TI-STA-08-01 | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 1108행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-019 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-04-01 / TI-STA-04-02 / TI-STA-05-01 / TI-STA-05-02 / TI-STA-06-01 / TI-STA-06-02 / TI-STA-07-01 / TI-STA-07-02 / TI-STA-08-01 / TI-STA-08-02 | 번역 추가 (Korean) |  | 범례 | 언어셋 첨부 (R002) 목록 시트 1109행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-023 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-04-01 / TI-STA-04-02 / TI-STA-05 | 번역 추가 (Korean) |  | 제품 | 언어셋 첨부 (R002) 목록 시트 1110행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-023 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-04-01 / TI-STA-04-02 | 번역 추가 (Korean) |  | 검체 유형 | 언어셋 첨부 (R002) 목록 시트 1111행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-020 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-02-02 / TI-STA-04-01 / TI-STA-04-02 / TI-STA-05-01 / TI-STA-05-02 / TI-STA-06-01 / TI-STA-06-02 / TI-STA-08-01 / TI-STA-08-02 | 번역 추가 (Korean) |  | 전체 선택 | 언어셋 첨부 (R002) 목록 시트 1112행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-021 | Statistical Analysis | TI-STA-01-01 / TI-STA-01-02 / TI-STA-02-01 / TI-STA-04-01 / TI-STA-05-01 / TI-STA-06-01 / TI-STA-08-01 | 번역 추가 (Korean) |  | 하나 이상의 범례를 선택해 주세요. | 언어셋 첨부 (R002) 목록 시트 1113행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-023 | Statistical Analysis | TI-STA-03-01 / TI-STA-03-02 | 번역 추가 (Korean) |  | 검사 TAT(Turnaround Time) | 언어셋 첨부 (R002) 목록 시트 1117행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-024 | Statistical Analysis | TI-STA-03-01 / TI-STA-03-02 | 번역 추가 (Korean) |  | 총 검사 TAT | 언어셋 첨부 (R002) 목록 시트 1118행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-025 | Statistical Analysis | TI-STA-03-01 / TI-STA-03-02 / TI-STA-05-01 | 번역 추가 (Korean) |  | 시간 | 언어셋 첨부 (R002) 목록 시트 1119행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-026 | Statistical Analysis | TI-STA-03-01 / TI-STA-05-01 / TI-STA-05-02 | 번역 추가 (Korean) |  | 단위: 시간 | 언어셋 첨부 (R002) 목록 시트 1120행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-027 | Statistical Analysis | TI-STA-03-01 / TI-STA-03-02 | 번역 추가 (Korean) |  | 총 검사 건수 | 언어셋 첨부 (R002) 목록 시트 1121행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-028 | Statistical Analysis | TI-STA-03-02 | 번역 추가 (Korean) |  | 단위: 시간, 건 | 언어셋 첨부 (R002) 목록 시트 1122행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-029 | Statistical Analysis | TI-STA-04-01 / TI-STA-04-02 | 번역 추가 (Korean) |  | 검사 비용(평균) | 언어셋 첨부 (R002) 목록 시트 1123행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-030 | Statistical Analysis | TI-STA-04-01 / TI-STA-04-02 / TI-STA-07-01 | 번역 추가 (Korean) |  | 단위: USD | 언어셋 첨부 (R002) 목록 시트 1124행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-031 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 검사 예측 | 언어셋 첨부 (R002) 목록 시트 1125행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-032 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 예측 기간 | 언어셋 첨부 (R002) 목록 시트 1126행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-036 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 주 | 언어셋 첨부 (R002) 목록 시트 1127행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-037 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 개월 | 언어셋 첨부 (R002) 목록 시트 1128행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-033 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 1주: 과거 30일 데이터를 기반으로 향후 7일 예측 | 언어셋 첨부 (R002) 목록 시트 1130행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-034 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 2주: 과거 60일 데이터를 기반으로 향후 15일 예측 | 언어셋 첨부 (R002) 목록 시트 1131행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-035 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 1개월: 과거 90일 데이터를 기반으로 향후 30일 예측 | 언어셋 첨부 (R002) 목록 시트 1132행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-003 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 1133행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-020 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 적용 | 언어셋 첨부 (R002) 목록 시트 1134행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-038 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 전체 검사 건수 예측 | 언어셋 첨부 (R002) 목록 시트 1135행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-040 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 평균 | 언어셋 첨부 (R002) 목록 시트 1138행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-041 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 최대 | 언어셋 첨부 (R002) 목록 시트 1139행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-042 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 최소 | 언어셋 첨부 (R002) 목록 시트 1140행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-044 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 예측 변화율 | 언어셋 첨부 (R002) 목록 시트 1142행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-045 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 과거 평균 대비 예측 최대값 | 언어셋 첨부 (R002) 목록 시트 1143행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-046 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 실제 | 언어셋 첨부 (R002) 목록 시트 1144행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-047 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 예측 | 언어셋 첨부 (R002) 목록 시트 1145행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-049 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 오늘 | 언어셋 첨부 (R002) 목록 시트 1146행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-048 | Statistical Analysis | TI-STA-05 | 번역 추가 (Korean) |  | 예측 대상과 예측 기간을 선택해 주세요. | 언어셋 첨부 (R002) 목록 시트 1147행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-012 | Statistical Analysis | TI-STA-05-01 / TI-STA-05-02 / TI-STA-06-01 / TI-STA-06-02 / TI-STA-08-01 / TI-STA-08-02 | 번역 추가 (Korean) |  | 모듈 | 언어셋 첨부 (R002) 목록 시트 1150행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-013 | Statistical Analysis | TI-STA-05-01 / TI-STA-05-02 / TI-STA-06-01 / TI-STA-06-02 | 번역 추가 (Korean) |  | 유닛 | 언어셋 첨부 (R002) 목록 시트 1151행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-057 | Statistical Analysis | TI-STA-05-01 / TI-STA-05-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1152행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-058 | Statistical Analysis | TI-STA-05-01 / TI-STA-05-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1153행 · R003 | 하승현 |
| 2026-11-26 |  | LID-STA-059 | Statistical Analysis | TI-STA-05-01 / TI-STA-05-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1154행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-IVT-052 | Statistical Analysis | TI-STA-07-01 / TI-STA-07-02 | 번역 추가 (Korean) |  | 소모품 | 언어셋 첨부 (R002) 목록 시트 1158행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-062 | Statistical Analysis | TI-STA-07-01 / TI-STA-07-02 | 번역 추가 (Korean) |  | 시약 | 언어셋 첨부 (R002) 목록 시트 1159행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-158 | Statistical Analysis | TI-STA-07-01 / TI-STA-07-02 | 번역 추가 (Korean) |  | 총 비용 | 언어셋 첨부 (R002) 목록 시트 1161행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-IVT-039 | Statistical Analysis | TI-STA-07-01 / TI-STA-07-02 | 번역 추가 (Korean) |  | 사용량 | 언어셋 첨부 (R002) 목록 시트 1162행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-005 | Statistical Analysis | TI-STA-08-01 / TI-STA-08-02 | 번역 추가 (Korean) |  | 장비 | 언어셋 첨부 (R002) 목록 시트 1167행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-IVT-001 | Statistical Analysis | TI-STA-08-01 / TI-STA-08-02 | 번역 추가 (Korean) |  | 재고 | 언어셋 첨부 (R002) 목록 시트 1168행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-SPT-022 | Statistical Analysis | TI-STA-08-01 / TI-STA-08-02 | 번역 추가 (Korean) |  | 검체 | 언어셋 첨부 (R002) 목록 시트 1169행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-009 | Statistical Analysis | TI-STA-08-01 / TI-STA-08-02 | 번역 추가 (Korean) |  | 시스템 | 언어셋 첨부 (R002) 목록 시트 1170행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-011 | Information | TI-INF-01-P / LI-INF-01-P / TI-INF-02-P / LI-INF-02-P | 번역 추가 (Korean) |  | 확인 | 언어셋 첨부 (R002) 목록 시트 1178행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-IVT-040 | Information | TI-INF-02-P / LI-INF-02-P | 번역 추가 (Korean) |  | 날짜/시간 | 언어셋 첨부 (R002) 목록 시트 1179행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-170 | Information | TI-INF-02-P / LI-INF-02-P | 번역 추가 (Korean) |  | 언어 | 언어셋 첨부 (R002) 목록 시트 1181행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INF-010 | Information | TI-INF-02-P / LI-INF-02-P | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1183행 · R003 | 하승현 |
| 2026-11-26 |  | LID-INF-011 | Information | TI-INF-02-P / LI-INF-02-P | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1184행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-003 | Information | TI-INF-03-01 | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 1191행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-039 | Information | TI-INF-03-01 / TI-INF-03-02 | 번역 추가 (Korean) |  | 완료됨 | 언어셋 첨부 (R002) 목록 시트 1192행 · R003 · 공통 LID-COM-SCD-005 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-018 | Information | TI-INF-03-01 / TI-INF-03-02 | 번역 추가 (Korean) |  | 실패 | 언어셋 첨부 (R002) 목록 시트 1193행 · R003 · 공통 LID-COM-SCD-004 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-019 | Information | TI-INF-03-01 / TI-INF-03-02 | 번역 추가 (Korean) |  | 검사 안됨 | 언어셋 첨부 (R002) 목록 시트 1194행 · R003 · 공통 LID-COM-SCD-006 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-022 | Information | TI-INF-03-01 | 번역 추가 (Korean) |  | 초기화 | 언어셋 첨부 (R002) 목록 시트 1198행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-016 | Information | TI-INF-03-01 | 번역 추가 (Korean) |  | 검색 | 언어셋 첨부 (R002) 목록 시트 1199행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-012 | Information | TI-INF-03-01 | 번역 추가 (Korean) |  | 상세 정보 | 언어셋 첨부 (R002) 목록 시트 1206행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-004 | Information | TI-INF-03-02 | 번역 추가 (Korean) |  | 시작 일시 | 언어셋 첨부 (R002) 목록 시트 1210행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-005 | Information | TI-INF-03-02 | 번역 추가 (Korean) |  | 종료 일시 | 언어셋 첨부 (R002) 목록 시트 1211행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-024 | Information | TI-INF-03-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1215행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-028 | Information | TI-INF-03-02 | 번역 추가 (Korean) |  | 00시간 00분 | 언어셋 첨부 (R002) 목록 시트 1216행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-SPT-023 | Information | TI-INF-03-02 | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 1218행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-023 | Information | TI-INF-03-02 | 번역 추가 (Korean) |  | 제품 | 언어셋 첨부 (R002) 목록 시트 1220행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-116 | Information | TI-INF-03-02 | 번역 추가 (Korean) |  | 개수 | 언어셋 첨부 (R002) 목록 시트 1221행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-146 | Information | TI-INF-03-02 | 번역 추가 (Korean) |  | 번호 | 언어셋 첨부 (R002) 목록 시트 1224행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-026 | Information | TI-INF-03-02 | 번역 추가 (Korean) |  | 프로세스 | 언어셋 첨부 (R002) 목록 시트 1225행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-004 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 번역 추가 (Korean) |  | 유형 | 언어셋 첨부 (R002) 목록 시트 1230행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-037 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 번역 추가 (Korean) |  | 오류 | 언어셋 첨부 (R002) 목록 시트 1231행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-038 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 번역 추가 (Korean) |  | 경고 | 언어셋 첨부 (R002) 목록 시트 1232행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-005 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 번역 추가 (Korean) |  | 장비 | 언어셋 첨부 (R002) 목록 시트 1233행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-IVT-001 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 번역 추가 (Korean) |  | 재고 | 언어셋 첨부 (R002) 목록 시트 1234행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-SPT-022 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 번역 추가 (Korean) |  | 검체 | 언어셋 첨부 (R002) 목록 시트 1235행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-009 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 번역 추가 (Korean) |  | 시스템 | 언어셋 첨부 (R002) 목록 시트 1236행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-010 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 번역 추가 (Korean) |  | 코드 | 언어셋 첨부 (R002) 목록 시트 1239행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-011 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 번역 추가 (Korean) |  | 설명 | 언어셋 첨부 (R002) 목록 시트 1240행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-012 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 번역 추가 (Korean) |  | 모듈 | 언어셋 첨부 (R002) 목록 시트 1241행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-013 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 번역 추가 (Korean) |  | 유닛 | 언어셋 첨부 (R002) 목록 시트 1242행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-016 | Information | TI-INF-03-02 / TI-INF-03-02/Case1 | 번역 추가 (Korean) |  | 발생 일시 | 언어셋 첨부 (R002) 목록 시트 1243행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-INS-017 | Information | TI-INF-03-02 | 번역 추가 (Korean) |  | 가동 시간(h) | 언어셋 첨부 (R002) 목록 시트 1246행 · R003 | 하승현 |
| 2026-11-26 |  | LID-DAS-014 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 대기 중 | 언어셋 첨부 (R002) 목록 시트 1254행 · R003 · 공통 LID-COM-SCD-009 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-DAS-015 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 진행 중 | 언어셋 첨부 (R002) 목록 시트 1255행 · R003 · 공통 LID-COM-SCD-010 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-DAS-016 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 1256행 · R003 · 공통 LID-COM-SCD-011 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-022 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 검사 상태 | 언어셋 첨부 (R002) 목록 시트 1257행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-023 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 총 배치 수 | 언어셋 첨부 (R002) 목록 시트 1258행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-024 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 남은 시간 | 언어셋 첨부 (R002) 목록 시트 1259행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-026 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 경과 | 언어셋 첨부 (R002) 목록 시트 1261행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-027 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 예상 총 소요 시간 | 언어셋 첨부 (R002) 목록 시트 1263행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-028 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 00시간 00분 | 언어셋 첨부 (R002) 목록 시트 1264행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-SPT-023 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 1267행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-024 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1268행 · R003 | 하승현 |
| 2026-11-26 |  | LID-DAS-018 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 실패 | 언어셋 첨부 (R002) 목록 시트 1269행 · R003 · 공통 LID-COM-SCD-004 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-DAS-019 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 검사 안됨 | 언어셋 첨부 (R002) 목록 시트 1270행 · R003 · 공통 LID-COM-SCD-006 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-SPT-015 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 더보기 | 언어셋 첨부 (R002) 목록 시트 1271행 · R003 | 하승현 |
| 2026-11-26 |  | LID-DAS-020 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 초기화 필요 | 언어셋 첨부 (R002) 목록 시트 1273행 · R003 · 공통 LID-COM-SCD-012 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-DAS-021 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 초기화 중 | 언어셋 첨부 (R002) 목록 시트 1274행 · R003 · 공통 LID-COM-SCD-013 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-DAS-022 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 준비 완료 | 언어셋 첨부 (R002) 목록 시트 1275행 · R003 · 공통 LID-COM-SCD-014 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-DAS-023 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 가동 중 | 언어셋 첨부 (R002) 목록 시트 1276행 · R003 · 공통 LID-COM-SCD-015 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-DAS-024 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 가동 중지 중 | 언어셋 첨부 (R002) 목록 시트 1277행 · R003 · 공통 LID-COM-SCD-018 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-DAS-025 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 일부 가동 중 | 언어셋 첨부 (R002) 목록 시트 1278행 · R003 · 공통 LID-COM-SCD-019 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-037 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 오류 | 언어셋 첨부 (R002) 목록 시트 1280행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-INS-018 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 이벤트 | 언어셋 첨부 (R002) 목록 시트 1283행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-005 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 장비 | 언어셋 첨부 (R002) 목록 시트 1284행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-INS-011 | Dashboard | LI-DAS | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1286행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-042 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 열림 | 언어셋 첨부 (R002) 목록 시트 1287행 · R003 · 공통 LID-COM-SCD-027 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-043 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 닫힘 | 언어셋 첨부 (R002) 목록 시트 1288행 · R003 · 공통 LID-COM-SCD-028 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-031 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 필요 수량 | 언어셋 첨부 (R002) 목록 시트 1291행 · R003 | 하승현 |
| 2026-11-26 |  | LID-DAS-028 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 부족 | 언어셋 첨부 (R002) 목록 시트 1292행 · R003 · 공통 LID-COM-SCD-043 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-IVT-010 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 폐기함/폐액통 | 언어셋 첨부 (R002) 목록 시트 1295행 · R003 | 하승현 |
| 2026-11-26 |  | LID-DAS-030 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 가득 참 | 언어셋 첨부 (R002) 목록 시트 1296행 · R003 · 공통 LID-COM-SCD-035 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-IVT-009 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 조치가 필요 없습니다. | 언어셋 첨부 (R002) 목록 시트 1298행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-076 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1304행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-075 | Dashboard | TI-DAS / LI-DAS | 번역 추가 (Korean) |  | 사용자 | 언어셋 첨부 (R002) 목록 시트 1305행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-021 | Dashboard (All) | TI-ADS-P | 번역 추가 (Korean) |  | 취소 | 언어셋 첨부 (R002) 목록 시트 1309행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-022 | Dashboard (All) | TI-ADS-P | 번역 추가 (Korean) |  | 저장 | 언어셋 첨부 (R002) 목록 시트 1310행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-014 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 대기 중 | 언어셋 첨부 (R002) 목록 시트 1314행 · R003 · 공통 LID-COM-SCD-009 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-015 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 진행 중 | 언어셋 첨부 (R002) 목록 시트 1315행 · R003 · 공통 LID-COM-SCD-010 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-016 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 1316행 · R003 · 공통 LID-COM-SCD-011 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-023 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 가동 중 | 언어셋 첨부 (R002) 목록 시트 1317행 · R003 · 공통 LID-COM-SCD-015 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-022 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 준비 완료 | 언어셋 첨부 (R002) 목록 시트 1318행 · R003 · 공통 LID-COM-SCD-014 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-037 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 오류 | 언어셋 첨부 (R002) 목록 시트 1320행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-INS-018 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 이벤트 | 언어셋 첨부 (R002) 목록 시트 1321행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-005 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 장비 | 언어셋 첨부 (R002) 목록 시트 1322행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-022 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 검사 상태 | 언어셋 첨부 (R002) 목록 시트 1323행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-023 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 총 배치 수 | 언어셋 첨부 (R002) 목록 시트 1324행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-024 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 남은 시간 | 언어셋 첨부 (R002) 목록 시트 1325행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-026 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 경과 | 언어셋 첨부 (R002) 목록 시트 1326행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-027 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 예상 총 소요 시간 | 언어셋 첨부 (R002) 목록 시트 1327행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-TMG-028 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 00시간 00분 | 언어셋 첨부 (R002) 목록 시트 1328행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-SPT-023 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 1330행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-024 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1331행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-018 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 실패 | 언어셋 첨부 (R002) 목록 시트 1332행 · R003 · 공통 LID-COM-SCD-004 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-019 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 검사 안됨 | 언어셋 첨부 (R002) 목록 시트 1333행 · R003 · 공통 LID-COM-SCD-006 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-028 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 부족 | 언어셋 첨부 (R002) 목록 시트 1335행 · R003 · 공통 LID-COM-SCD-043 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-IVT-010 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 폐기함/폐액통 | 언어셋 첨부 (R002) 목록 시트 1337행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-030 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 가득 참 | 언어셋 첨부 (R002) 목록 시트 1338행 · R003 · 공통 LID-COM-SCD-035 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-STN-076 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1343행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-075 | Dashboard (All) | TI-ADS | 번역 추가 (Korean) |  | 사용자 | 언어셋 첨부 (R002) 목록 시트 1344행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-063 | Material Setup | LI-TSS-LTG-01-01 / LI-TSS-LTG-01-02 / LI-TSS-LTG-02-01 / LI-TSS-LTG-02-02 / LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-01-04 / LI-TSS-PSI-SAM-02-01 / LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-02-03 / LI-TSS-PSI-SAM-03-01 / LI-TSS-PSI-SAM-03-02 / LI-TSS-PSI-SAM-03-03 | 번역 추가 (Korean) |  | 단계 | 언어셋 첨부 (R002) 목록 시트 1351행 · R003 | 하승현 |
| 2026-11-26 |  | LID-MAS-012 | Material Setup | LI-TSS-LTG-01-01 / LI-TSS-LTG-01-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1357행 · R003 | 하승현 |
| 2026-11-26 |  | LID-MAS-013 | Material Setup | LI-TSS-LTG-01-01 / LI-TSS-LTG-01-02 / LI-TSS-CMP-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1358행 · R003 | 하승현 |
| 2026-11-26 |  | LID-MAS-014 | Material Setup | LI-TSS-LTG-01-01 / LI-TSS-LTG-01-02 / LI-TSS-CMP-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1359행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-025 | Material Setup | LI-TSS-LTG-01-01 / LI-TSS-LTG-02-01 / LI-TSS-PSI-SAM-01-03 / LI-TSS-PSI-SAM-02-02 / LI-TSS-PSI-SAM-03-02 | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 1362행 · R003 | 하승현 |
| 2026-11-26 |  | LID-MAS-026 | Material Setup | LI-TSS-LTG-02-01 / LI-TSS-LTG-02-02 / LI-TSS-CMP-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1374행 · R003 | 하승현 |
| 2026-11-26 |  | LID-MAS-027 | Material Setup | LI-TSS-LTG-02-01 / LI-TSS-LTG-02-02 / LI-TSS-CMP-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1375행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STA-020 | Material Setup | LI-TSS-CMP-01 | 번역 추가 (Korean) |  | 전체 선택 | 언어셋 첨부 (R002) 목록 시트 1379행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-INS-004 | Material Setup | LI-TSS-CMP-01 | 번역 추가 (Korean) |  | 비활성화 | 언어셋 첨부 (R002) 목록 시트 1380행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-039 | Material Setup | LI-TSS-CMP-01 | 번역 추가 (Korean) |  | 닫기 | 언어셋 첨부 (R002) 목록 시트 1385행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-027 | Material Setup | LI-TSS-PSI-SAM | 번역 추가 (Korean) |  | 이전 | 언어셋 첨부 (R002) 목록 시트 1397행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-025 | Material Setup | LI-TSS-PSI-SAM-01-01 / LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-02-01 / LI-TSS-PSI-SAM-03-01 | 번역 추가 (Korean) |  | 다음 | 언어셋 첨부 (R002) 목록 시트 1404행 · R003 | 하승현 |
| 2026-11-26 |  | LID-MAS-048 | Material Setup | LI-TSS-PSI-SAM-01-02 / LI-TSS-PSI-SAM-01-03 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1406행 · R003 | 하승현 |
| 2026-11-26 |  | LID-MAS-081 | Material Setup | LI-TSS-PSI-SAM-03-01 | 번역 수정 (French) | Scannez le QR code  sur le trolley vide. | Scannez le QR code sur le trolley vide. | 언어셋 첨부 (R002) 목록 시트 1441행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-027 | Material Setup | LI-TSS-PSI-LCR | 번역 추가 (Korean) |  | 이전 | 언어셋 첨부 (R002) 목록 시트 1452행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-011 | Material Setup | LI-TSS-PSI-01 / LI-TSS-PSI-LCR-01-03-01 | 번역 추가 (Korean) |  | 확인 | 언어셋 첨부 (R002) 목록 시트 1460행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-025 | Material Setup | LI-TSS-PSI-LCR-01-01 / LI-TSS-PSI-LCR-01-02 / LI-TSS-PSI-LCR-02-01 / LI-TSS-PSI-PKI-01 / LI-TSS-PSI-PKI-02 | 번역 추가 (Korean) |  | 다음 | 언어셋 첨부 (R002) 목록 시트 1469행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-062 | Material Setup | LI-TSS-PSI-LCR-01-02 / LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-01-04 | 번역 추가 (Korean) |  | 시약 | 언어셋 첨부 (R002) 목록 시트 1474행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-IVT-052 | Material Setup | LI-TSS-PSI-LCR-01-02 / LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-01-04 | 번역 추가 (Korean) |  | 소모품 | 언어셋 첨부 (R002) 목록 시트 1475행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-063 | Material Setup | LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-01-03-01 / LI-TSS-PSI-LCR-02-02 | 번역 추가 (Korean) |  | 단계 | 언어셋 첨부 (R002) 목록 시트 1476행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-025 | Material Setup | LI-TSS-PSI-LCR-01-03 / LI-TSS-PSI-LCR-02-02 / LI-TSS-PSI-PKI-03 | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 1487행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-141 | Material Setup | LI-TSS-PSI-LCR-01-03-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1490행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-MAS-012 | Material Setup | LI-TSS-PSI-LCR-01-03-01 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1494행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-MAS-018 | Material Setup | LI-TSS-PSI-LCR-01-04 / LI-TSS-PSI-LCR-02-03 / LI-TSS-PSI-PKI-04 | 변경 | Add new | Add New | 언어셋 첨부 (R002) 목록 시트 1503행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-MAS-081 | Material Setup | LI-TSS-PSI-LCR-02-01 | 번역 수정 (French) | Scannez le QR code  sur le trolley vide. | Scannez le QR code sur le trolley vide. | 언어셋 첨부 (R002) 목록 시트 1508행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-MAS-014 | Material Setup | LI-TSS-PSI-PKI-01 / LI-TSS-PSI-PKI-02 / LI-TSS-PSI-PKI-03 / LI-TSS-PSI-PKI-04 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1531행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-MAS-027 | Material Setup | LI-TSS-PSI-PKI-02 / LI-TSS-PSI-PKI-03 / LI-TSS-PSI-PKI-04 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1532행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-RUN-025 | Material Setup | LI-TSS-PSI-LPR-01 / LI-TSS-PSI-LPR-02 / LI-TSS-PSI-LMM-01 | 번역 추가 (Korean) |  | 다음 | 언어셋 첨부 (R002) 목록 시트 1548행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-025 | Material Setup | LI-TSS-PSI-LPR-03 / LI-TSS-PSI-LMM-02 | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 1560행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-MAS-018 | Material Setup | LI-TSS-PSI-LPR-04 / LI-TSS-PSI-LMM-03 | 변경 | Add new | Add New | 언어셋 첨부 (R002) 목록 시트 1566행 · R003 | 하승현 |
| 2026-11-26 |  | LID-MAS-141 | Material Setup | LI-TSS-PSI-LMM-02 | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1576행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-025 | Material Setup | LI-TSS-PSI-LMM-02 | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 1580행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-INS-013 | Material Setup / Instrument | LI-TSS-DXI / LI-TSS-DXI-08 / LI-TSS-DXI-09 / LI-TSS-WBM / LI-TSS-WBM-P / LI-INS-01-P | 번역 추가 (Korean) |  | 잠금 해제 | 언어셋 첨부 (R002) 목록 시트 1595행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-01 / LI-TSS-DXI-02 / LI-TSS-DXI-04 / LI-TSS-DXI-06 / LI-TSS-DXI-07 | 번역 추가 (Korean) |  | 단계 | 언어셋 첨부 (R002) 목록 시트 1601행 · R003 | 하승현 |
| 2026-11-26 |  | LID-MAS-171 | Material Setup | LI-TSS-DXI-01 / LI-TSS-DXI-06 | 번역 수정 (French) | Placez le socket à l'emplacement scanné avec le  code orienté vers la droite. | Placez le socket à l'emplacement scanné avec le code orienté vers la droite. | 언어셋 첨부 (R002) 목록 시트 1608행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-01 / LI-TSS-DXI-02 / LI-TSS-DXI-03 / LI-TSS-DXI-04 / LI-TSS-DXI-05 / LI-TSS-DXI-06 / LI-TSS-DXI-07 | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 1614행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-02 | 번역 추가 (Korean) |  | 단계 | 언어셋 첨부 (R002) 목록 시트 1616행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-02 | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 1627행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-03 | 번역 추가 (Korean) |  | 단계 | 언어셋 첨부 (R002) 목록 시트 1633행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-03 | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 1641행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-04 | 번역 추가 (Korean) |  | 단계 | 언어셋 첨부 (R002) 목록 시트 1643행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-04 | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 1654행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-05 | 번역 추가 (Korean) |  | 단계 | 언어셋 첨부 (R002) 목록 시트 1656행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-05 | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 1665행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-06 | 번역 추가 (Korean) |  | 단계 | 언어셋 첨부 (R002) 목록 시트 1669행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-06 | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 1679행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-063 | Material Setup | LI-TSS-DXI-07 | 번역 추가 (Korean) |  | 단계 | 언어셋 첨부 (R002) 목록 시트 1682행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-020 | Material Setup | LI-TSS-DXI-07 | 번역 추가 (Korean) |  | 적용 | 언어셋 첨부 (R002) 목록 시트 1691행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-022 | Material Setup | LI-TSS-DXI-07 | 번역 추가 (Korean) |  | 초기화 | 언어셋 첨부 (R002) 목록 시트 1697행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-025 | Material Setup | LI-TSS-DXI-07 | 번역 추가 (Korean) |  | 완료 | 언어셋 첨부 (R002) 목록 시트 1698행 · R003 | 하승현 |
| 2026-11-26 |  | LID-IVT-034 | Material Setup | LI-TSS-WBM / LI-TSS-WBM-P | 번역 추가 (Korean) |  | 비움 확인 | 언어셋 첨부 (R002) 목록 시트 1710행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-003 | Material Setup | LI-TSS-WBM-P | 번역 추가 (Korean) |  | 전체 | 언어셋 첨부 (R002) 목록 시트 1712행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-INS-007 | Instrument | LI-INS-01-P | 번역 추가 (Korean) |  | 도어 제어 | 언어셋 첨부 (R002) 목록 시트 1713행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-INS-014 | Instrument | LI-INS-01-P | 번역 추가 (Korean) |  | 모든 도어 잠금 해제 | 언어셋 첨부 (R002) 목록 시트 1714행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-STN-006 | Instrument | LI-INS-01-P | 번역 추가 (Korean) |  | 항목 | 언어셋 첨부 (R002) 목록 시트 1715행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-INS-011 | Instrument | LI-INS-01-P | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1716행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-INS-036 | Instrument | LI-INS-01-P | 번역 추가 (Korean) |  | - | 언어셋 첨부 (R002) 목록 시트 1717행 · R003 | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-043 | Instrument | LI-INS-01-P | 번역 추가 (Korean) |  | 닫힘 | 언어셋 첨부 (R002) 목록 시트 1718행 · R003 · 공통 LID-COM-SCD-028 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-DAS-023 | Instrument | LI-INS-01-P | 번역 추가 (Korean) |  | 가동 중 | 언어셋 첨부 (R002) 목록 시트 1719행 · R003 · 공통 LID-COM-SCD-015 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | ref: LID-EVT-017 | Material Setup | LI-TSS-RGE-02 | 번역 추가 (Korean) |  | 상태 | 언어셋 첨부 (R002) 목록 시트 1741행 · R003 | 하승현 |
| 2026-11-26 |  | LID-MAS-462 | Material Setup | LI-TSS-RGE-02 | 번역 추가 (Korean) |  | 비어 있음 | 언어셋 첨부 (R002) 목록 시트 1742행 · R003 · 공통 LID-COM-SCD-044 글자 (R003 답 2) | 하승현 |
| 2026-11-26 |  | LID-EVT-005 | Event History | TI-EVT-02-P / LI-EVT-02-P | 재사용 추가 |  |  | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | ref: LID-IVT-001 | Event History | TI-EVT-02-P / LI-EVT-02-P | 재사용 추가 |  |  | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | ref: LID-SPT-022 | Event History | TI-EVT-02-P / LI-EVT-02-P | 재사용 추가 |  |  | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-009 | Event History | TI-EVT-02-P / LI-EVT-02-P | 재사용 추가 |  |  | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-010 | Event History | TI-EVT-01-P / LI-EVT-01-P | 재사용 추가 |  |  | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-015 | Event History | TI-EVT-P / LI-EVT-P | 삭제 | Occurred Date |  | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | ref: LID-STN-012 | Event History | TI-EVT-P / LI-EVT-P | 삭제 | Details |  | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | ref: LID-STN-006 | Event History | TI-EVT-P | 재사용 추가 |  |  | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-044 | Event History | TI-EVT-P | 삭제 | {N} of {M} Items |  | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-026 | Event History | TI-EVT-01-P / LI-EVT-01-P | 삭제 | Back to list |  | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | ref: LID-STN-021 | Event History | LI-EVT-01-P | 삭제 | Cancel |  | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | ref: LID-STN-022 | Event History | LI-EVT-01-P | 삭제 | Save |  | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | ref: LID-INS-018 | Event History | TI-EVT-02-P / LI-EVT-02-P | 삭제 | Event |  | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-047 | Event History | TI-EVT-01-P / LI-EVT-01-P | 추가 |  | Resolution Notes | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | ref: LID-STN-015 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | No results found. | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | ref: LID-SPT-025 | Event History | TI-EVT-01-P / LI-EVT-01-P | 추가 |  | Nucleic Acid Extraction | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | ref: LID-SPT-026 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | PCR Setup | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | ref: LID-SPT-032 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Plate Sealing | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-048 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Sample Storage | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-049 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Consumable Storage | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-050 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Sample Pre-treatment | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-051 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-02-P / LI-EVT-02-P | 추가 |  | High-throughput Extraction | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-052 | Event History | TI-EVT-P / LI-EVT-P / TI-EVT-01-P / LI-EVT-01-P | 추가 |  | Flexible Extraction | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-053 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Universal PCR | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-054 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Inbound Trolley | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-055 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Outbound Trolley | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-056 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Trolley | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-057 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Sample Processing (Upper) | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-058 | Event History | TI-EVT-02-P / LI-EVT-02-P | 추가 |  | M9600 | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-059 | Event History | TI-EVT-01-P / LI-EVT-01-P | 추가 |  | STARlet | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-060 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | CFX96 | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-061 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Spin Tip Storage | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-062 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | MB Tube Storage | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-063 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | Buffer Cartridge Storage | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-26 |  | LID-EVT-064 | Event History | TI-EVT-P / LI-EVT-P | 추가 |  | 300 μL Tip Storage | 작업 기록 20261125-서보경-event-history · 5단계 언어셋 반영 | Claude (서보경 작업) |
| 2026-11-27 | v0.06 | LID-MAS-436 | Material Setup | LI-TSS-DXI-08 / LI-TSS-DXI-09 | 변경 | Confirm refill | Confirm | 언어셋 v0.06 목록 시트 1701행 (R011 첨부 CURECA_Language_Set_v0.06.xlsx) | 하승현 |
| 2026-11-27 | v0.06 | LID-MAS-438 | Material Setup | LI-TSS-DXI-08 / LI-TSS-DXI-09 | 변경 | After refilling, click [Confirm refill]. | After refilling, click [Confirm]. | 언어셋 v0.06 목록 시트 1703행 (R011 첨부 CURECA_Language_Set_v0.06.xlsx) | 하승현 |
| 2026-11-27 | v0.06 | LID-MAS-441 | Material Setup | LI-TSS-DXI-09 | 변경 | Confirm all refills | Confirm all | 언어셋 v0.06 목록 시트 1706행 (R011 첨부 CURECA_Language_Set_v0.06.xlsx) | 하승현 |
