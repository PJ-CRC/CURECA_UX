# 화면 변경 이력

**화면 변경 이력 = 모든 화면의 바뀐 것을 한 곳(`screen-history.md`)에 한 줄씩 남겨 두는 기록**입니다. 작업 대상 화면의 변경도, 다른 수정 때문에 함께 고친 영향 화면의 변경도 남깁니다.

## 1. 줄이 생기는 때

| 때 | 무엇을 | 어느 단계 · 문서 |
| --- | --- | --- |
| 화면설계 작업 완료 (케이스 1 · 2) | 버전 + 화면마다 한 줄. 버전은 4단계에서 정한 Ver, 바뀐 내용은 업데이트 메모 줄과 업데이트 메모에 넣지 않은 정리(`-` 항목). UX 확정 뒤 다시 고친 것 · 고객 UI 검토에서 바뀐 것을 UX에 맞춘 것(4단계 절차 5번)까지 넣음 | `flow/5-done.md` 절차 2번 순서 7 |
| 화면설계 작업 완료 (케이스 3) | 화면마다 한 줄. 버전은 `-`. 바뀐 내용은 `재설계 후 변경 내역` 메모 줄 | `flow/5-done.md` 절차 2번 순서 7 |
| 반영 대기 항목을 반영함 | 반영한 반영 대기 항목 ID (그 작업의 완료 줄 근거 칸에) | `flow/5-done.md` 절차 2번 순서 7 |
| 결정 · 기준 자료 · 외부 원본 변경으로 영향 화면을 함께 고침 (연동 변경) | 화면마다 한 줄. 버전은 `-`. 바뀐 내용 앞에 "연동 변경:", 근거에 원인(DS ID · 기준 자료(용어집 · 상태값 · Alert · Toast 카탈로그 · Common UX · 언어셋) · 외부 원본(씨젠 문서 · IA 새 버전)) | 지금 규칙에 없음. 실제로는 DS-0001 · DS-0004에서 이렇게 적었음(asis 화면 MD 187 · 34개). 결정 반영 순서(`reference-rules/discussions.md` 6절)와 기준 자료 바꾸는 법에 둘 것 |

- 작업 중(1 ~ 4단계)에는 줄을 만들지 않습니다.
- asis 화면 MD(`screens/asis/`)에는 변경 이력을 두지 않습니다(2026-11-24 지움).

## 2. 칸

| 칸 | 쓰는 법 |
| --- | --- |
| 버전 | 그 작업의 Ver(4단계에서 정함). 케이스 3 · 연동 변경은 `-` |
| 날짜 | 줄을 남긴 날(완료 · 결정 반영 날) |
| 메뉴 | IA 메뉴 이름(`ia/ia-screens.csv` Lv.1, 하위 메뉴가 있으면 `메뉴 / 하위 메뉴`) |
| 바뀐 내용 | 무엇이 어떻게 바뀌었나. 여럿이면 글머리 기호(•)로 한 칸에 모두 적고 `<br>`로 줄을 나눔. 업데이트 메모 줄을 그대로 옮겨도 됨. 연동 변경은 앞에 "연동 변경:" |
| L-IOS 페이지 | 바뀐 L-IOS 화면 CID. 같은 버전에서 T · L 짝을 함께 고쳤으면 한 줄에 L · T를 각각 적음. 없으면 `-` |
| T-IOS 페이지 | 바뀐 T-IOS 화면 CID. 없으면 `-` |
| 바꾼 사람 | 작업한 사람(작업 기록의 작업자) |
| 근거 | 작업 기록 이름 · 논의 대상(DS) · 정책 ID · 반영 대기 ID 중 있는 것 |

- 줄은 지우지 않습니다.

## 3. 누가

- 작업 대상 화면 줄: 그 작업을 한 작성자(Claude가 적음)
- 연동 변경 줄: 결정 반영 · 기준 자료 변경을 한 사람(Claude가 적음)

## 4. 이력

| 버전 | 날짜 | 메뉴 | 바뀐 내용 | L-IOS 페이지 | T-IOS 페이지 | 바꾼 사람 | 근거 (논의 대상 · 정책 ID · 반영 대기 ID) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| - | 2026-11-26 | Event History | 재설계 후 변경 내역 (Event History_tobe로 옮겨 다시 그림)<br>• 일시 표기 YYYY-MM-DD hh:mm<br>• 표기 정리: Status · CURECA · Event ID, Code · Open · CFX96 (1) · 내보내는 파일 형식 .csv<br>• L: [Mark all as Closed] 범위(지금 검색 조건으로 불러온 목록 모든 페이지의 Open), Status 변경 조건 POL-EVT-002<br>• [Export] 버튼 T Filled · L Outlined (Common UX Square Button)<br>• 검색 결과가 없을 때 'No results found.'<br>• L: Module 이름 뒤 (1) 뺌<br>• T: 노출 개수 Dropdown(10 · 30 · 50 · 100 items)과 목록 요약 한 줄(10 items of Items 1,112 \| Open 20) | LI-EVT-P | TI-EVT-P | 서보경 | 작업 기록 20261125-서보경-event-history · POL-EVT-002 · POL-COM-006 · LI-EVT-P-R02 · LI-EVT-P-R03 · LI-EVT-P-R04 · LI-EVT-P-R06 · TI-EVT-P-R05 · TI-EVT-P-R06 · TI-EVT-P-R07 |
| - | 2026-11-26 | Event History | 재설계 후 변경 내역 (Event History_tobe로 옮겨 다시 그림, 화면 이름 Event Detail)<br>• L: Resolution Notes 최대 300자, 일시 표기 YYYY-MM-DD hh:mm<br>• T: Status는 표기만(상태 변경 불가), Notes 영역은 늘 노출 · 작성된 Resolution Notes가 있으면 그 내용 노출<br>• L: Status · Notes는 L-IOS Client Mode가 Main Mode일 때 활성화 (POL-EVT-002)<br>• Module · Unit 표기 Flexible Extraction · STARlet, Module 이름 뒤 (1) 뺌<br>• L: Notes 입력 중 닫기 · [List] 클릭 시 Confirm_016 | LI-EVT-01-P | TI-EVT-01-P | 서보경 | 작업 기록 20261125-서보경-event-history · POL-EVT-002 · LI-EVT-01-P-R02 · LI-EVT-01-P-R03 · LI-EVT-01-P-R04 · TI-EVT-01-P-R01 · TI-EVT-01-P-R02 · TI-EVT-01-P-R03 |
| - | 2026-11-26 | Event History | 재설계 후 변경 내역 (Event History_tobe로 옮겨 다시 그림, 화면 이름 Event Message)<br>• [View Details] · [Close] 버튼 Common UX Square Filled · Outlined<br>• Module 이름 뒤 (1) 뺌 | LI-EVT-02-P | TI-EVT-02-P | 서보경 | 작업 기록 20261125-서보경-event-history · POL-EVT-003 · LI-EVT-02-P-R01 · LI-EVT-02-P-R02 · LI-EVT-02-P-R03 · TI-EVT-02-P-R01 · TI-EVT-02-P-R02 · TI-EVT-02-P-R03 · TI-EVT-02-P-R04 |
