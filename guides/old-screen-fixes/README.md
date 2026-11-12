# 화면 반영 대기 목록

화면에 아직 반영하지 않은 변경을 화면(CID)마다 모읍니다. 정책 정리, 다른 화면의 수정, 회의 · 논의 결과, 기준 자료 변경 등 어디서 생긴 변경이든 영향받는 화면에 줄이 생깁니다. 정의와 쓰는 법은 `old-rules/screen-spec.md` 4절입니다.

- **화면 MD(`screens/<메뉴>/<CID>.md`)가 있는 CID:** 그 파일의 "반영 대기 목록" 절에 적습니다. 이 폴더에는 두지 않습니다.
- **화면 MD가 아직 없는 CID:** 이 폴더에 `<CID>.md`로 적고, 화면 MD를 만들 때 그 파일의 "반영 대기 목록" 절로 옮긴 뒤 이 폴더의 파일은 지웁니다 (git 기록에 남음).

## 쓰는 법

- 파일: `old-screen-fixes/<CID>.md` (템플릿 `templates/screen-fix.md`). T/L 짝 화면도 파일을 따로 둡니다.
- 정책 정제, 용어 검토, 알럿 정리 등 어떤 작업에서든 화면에서 고칠 점을 찾으면 이 파일에 적습니다.
- 정책 내용 자체는 옮겨 쓰지 않습니다. 그 화면에 걸린 정책은 정책 파일 머리말의 `cids`로 찾습니다(헌법 3조).
- 줄마다 ID(`R01` …)를 붙이고, 상태는 대기 · 반영 중 · 반영 완료 · 제외 · 반영 롤백입니다(`old-rules/screen-spec.md` 4절). 줄은 지우지 않습니다. 화면 MD로 옮길 때 ID는 그대로 가져갑니다.

## 화면을 다시 그릴 때 (화면 재설계, 작업 유형 7·21)

1. 화면 MD의 "반영 대기 목록" 절(없으면 `old-screen-fixes/<CID>.md`)과 짝 CID의 것을 읽습니다.
2. `policy/` 아래에서 `cids`에 그 CID가 있는 정책 파일을 모두 찾아 읽습니다.
3. 디스크립션은 기존 화면의 문장을 고쳐 쓰지 않고, 정책서와 정리된 알럿 카탈로그(`policy/alert-catalog.csv`)를 기준으로 다시 씁니다. 정책은 ID로 참조합니다.
4. 용어는 용어집, 상태값은 상태값 표를 따릅니다.
5. 반영한 줄의 상태를 "반영 (Ver)"로 바꿉니다.

## 모든 화면에 공통으로 적용

화면마다 반복해 적지 않고 여기 한 번만 둡니다.

| 내용 | 근거 |
| --- | --- |
| 디스크립션 속 화면 항목 이름은 영어 표준어로 (한국어 혼용 정리) | `archive/glossary/review-v0.md` 2절 |
| 표기 통일, 오타 | `archive/glossary/review-v0.md` 5·6절, `glossary/terms.csv` 쓰지 않는 표현 |
| Account Type → User Type, Cureca → CURECA, D.A.PC → D.A PC | `glossary/terms.csv` |
| 상태값은 UI 표기와 단계를 함께 | `glossary/status-values.csv` |
| 알럿은 ID와 관리 페이지 문구 기준 | `policy/alert-catalog.csv` |
| 다국어: 이번 버전은 7개 언어(독일어 포함). 디스크립션에 문구별 언어셋 ID와 가장 긴 언어를 적음 | POL-COM-004, `old-rules/language-set.md` |
| T-IOS 상단의 CURECA 선택: Dashboard(All)를 뺀 메뉴는 고른 CURECA 기준. Dashboard(All)는 2대 이상 고객만 | POL-COM-005 |
| Figma 취소선 글자는 제거된 항목. 다시 그릴 때 넣지 않음 | `old-rules/screen-spec.md` 3절 |
| 탭은 Common UX COMM-5-s(Underline Tab · Outline Tab · Container Tab)로 그림. 같은 데이터의 보기 방식 전환은 Container Tab. 기존 화면의 `Item_Segment Tabs`는 다시 그릴 때 이 기준으로 고름 | `glossary/terms.csv` Tab (2026-11-04) |

- `archive/glossary/review-v0.md`의 화면 정정 대상은 작업방 1차·2차 영역을 나누지 않고 모은 것입니다. 다시 그릴 때 최신 영역(`old-rules/figma-sync.md` 1절) 화면에 그 표기가 남아 있는지 확인합니다.
