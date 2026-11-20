# IA

> 상태: 원본을 `ia-screens.csv`로 바꿈 (2026-11-19). 받은 엑셀 v1.15와 v1.16 시트에 맞춰 둔 표(2026-11-10)에서 시작함. IA에서 정리할 항목은 `archive/background/rules-review-draft.md`의 "IA 시트 정리 목록"에 있음.

**IA의 원본은 `ia-screens.csv`입니다.** IA는 여기서 고치고, 엑셀은 필요할 때 요청해 받은 엑셀 양식으로 뽑습니다. Google 스프레드시트(CURECA_Part2_IA)에는 넣지 않습니다.

| 파일 | 내용 |
| --- | --- |
| `ia-screens.csv` | IA 원본. 받은 엑셀의 IA-T-IOS, IA-L-IOS 시트를 옮겨 시작함. 정책의 `menus`, `cids`와 화면 영향 범위를 찾을 때 이 표를 읽음 |
| [change-requests.md](change-requests.md) | IA 변경 기록. IA를 바꿀 때마다 한 줄 |
| `CURECA_Part2_IA_v1.15.xlsx` | 받은 엑셀 (v1.15, 2026-10-29). 엑셀로 뽑을 때 쓰는 양식. 고치지 않음 |

- 칸: 앱, Lv.1~Lv.6, Type, 2차 범위, 중복, 짝 화면 동일(받은 엑셀의 "L-IOS 화면동일" / "T-IOS 화면동일"), CID, 짝 CID, 비고
- 받은 엑셀의 "참고)Part1_IA" 시트 두 개는 옮기지 않음

## 고치는 법

- 화면설계 작업의 새 CID와 IA 수정(메뉴 이름 · 화면 이름 · Type 등)은 5단계(완료)에서 넣습니다(`flow/5-done.md` 절차 2번 순서 1). 1 ~ 4단계에서는 작업 기록에만 적습니다.
- 넣을 때마다 `change-requests.md`에 한 줄을 적습니다(상태 `반영 (날짜)`, 근거에 작업 기록 이름 · 요청자).
- 화면설계 작업 밖에서 IA를 바꿀 때도 같게 `ia-screens.csv`를 고치고 한 줄을 적습니다.

## 엑셀로 뽑기

- 요청할 때 받은 엑셀(`CURECA_Part2_IA_v1.15.xlsx`)의 양식으로 뽑습니다. 시트: 표지 · IA-문서이력 · IA-T-IOS · IA-L-IOS · 참고)Part1_IA-T-IOS · 참고)Part1_IA-L-IOS
  - IA-T-IOS · IA-L-IOS: `ia-screens.csv`에서 채움
  - IA-문서이력: `change-requests.md`의 `반영` 줄에서 채움
  - 표지 · 참고)Part1 시트: 받은 엑셀 그대로
- 뽑는 도구는 처음 요청할 때 만듭니다.
