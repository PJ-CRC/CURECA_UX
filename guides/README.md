# CURECA UX 기획 저장소

CURECA(T-IOS, L-IOS) UX 기획의 헌법, 공통 룰, 정책서, 화면설계서를 관리하는 저장소입니다. 헌법 2조에 따라 이 저장소가 정책과 화면의 유일한 기준입니다.

## 현재 단계

로컬 초안 단계입니다(2026-10-29 시작). 초안을 완성하면 UX팀이 함께 검토하고, 그 뒤 공통 git(엔터프라이즈 계정)으로 옮깁니다. 팀이 쓰는 Claude 작업 프로그램은 이 저장소를 토대로 다시 만듭니다.

초안 작업의 진행 상황과 남은 일은 [background/todo.md](background/todo.md)에 있습니다.

## 폴더 구조

```
CURECA_AI/
├── README.md            저장소 안내 (이 파일)
├── CLAUDE.md            Claude 작업 진입점: 무엇을 어떤 순서로 읽는지
├── constitution.md      헌법
├── sources.md           기준 출처 목록 (Claude가 근거로 쓰는 자료)
├── flow/                화면설계 흐름 (0 ~ 7단계 문서, 팀 공유 가이드)
├── reference-rules/     쓰는 법 (디스크립션 · 논의 대상 · 반영 대기 · 작업 기록 등)
├── examples/            본보기 (디스크립션 · 케이스 화면)
├── discussions/         논의 대상 (항목 하나 = 파일 하나)
├── work-logs/           화면설계 작업 기록
├── glossary/            용어집
├── language-set/        언어셋 (7개 언어 문구)
├── policy/              정책서와 우리가 관리하는 기준 자료 (Service Mode, 권한, 장비 상태, 알럿)
├── common-ux/           Common UX
├── reference/           외부에서 받은 원본 자료 (고객사 제공 파일 등)
├── ia/                  IA
├── screens/             화면설계서 (메뉴 단위)
├── archive/             폐기된 화면·정책, 다 쓴 작업 문서
├── templates/           문서 템플릿 (old-로 시작하는 것은 예전 틀)
├── tools/               작업 보조 스크립트 (Figma 기존 화면 추출 등). 룰은 도구 없이도 따를 수 있게 씀
├── background/          규칙을 만드는 작업 자료 · 할 일 (todo.md)
│
│   ── 아래는 예전 문서 (이름이 old-로 시작, 작업 근거로 쓰지 않음) ──
├── old-rules/           예전 규칙 문서. flow/ · reference-rules/가 대신함
├── old-pending/         예전 협의 대기 항목. discussions/가 대신함 (열린 항목 옮기는 중)
├── old-provisional/     예전 임시 정책. discussions/가 대신함
├── old-customer-agenda/ 예전 고객 논의 대상 목록. discussions/가 대신함
├── old-screen-fixes/    예전 화면 반영 대기 목록. 화면 MD 안의 반영 대기 목록이 대신함
├── old-decisions/       쓰지 않음
└── old-changes/         쓰지 않음
```

각 폴더의 README에 용도와 현재 상태를 적었습니다. 2026-11-10에 새 흐름으로 전환하면서 예전 문서에 `old-`를 붙였습니다.

## 파일 이름 규칙

파일과 폴더 이름은 영어 소문자, 숫자, 하이픈(-)만 씁니다. 단, CID·정책 ID처럼 정해진 ID는 원래 표기(대문자)를 그대로 씁니다. 내용은 한국어로 씁니다.
