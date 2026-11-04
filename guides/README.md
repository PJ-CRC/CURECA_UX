# CURECA UX 기획 저장소

CURECA(T-IOS, L-IOS) UX 기획의 헌법, 공통 룰, 정책서, 화면설계서를 관리하는 저장소입니다. 헌법 2조에 따라 이 저장소가 정책과 화면의 유일한 기준입니다.

## 현재 단계

로컬 초안 단계입니다(2026-10-29 시작). 초안을 완성하면 UX팀이 함께 검토하고, 그 뒤 공통 git(엔터프라이즈 계정)으로 옮깁니다. 팀이 쓰는 Claude 작업 프로그램은 이 저장소를 토대로 다시 만듭니다.

초안 작업의 진행 상황과 남은 일은 [background/worklist.md](background/worklist.md)에 있습니다.

## 폴더 구조

```
CURECA_AI/
├── README.md            저장소 안내 (이 파일)
├── CLAUDE.md            Claude 작업 진입점: 무엇을 어떤 순서로 읽는지
├── sources.md           기준 출처 목록 (Claude가 근거로 쓰는 자료)
├── rules/               헌법(constitution.md)과 공통 룰 문서
├── glossary/            용어집
├── language-set/        언어셋 (6개 언어 문구)
├── policy/              정책서와 우리가 관리하는 기준 자료 (Service Mode, 권한, 장비 상태, 알럿)
├── common-ux/           Common UX
├── reference/           외부에서 받은 원본 자료 (고객사 제공 파일 등)
├── ia/                  IA
├── screen-fixes/        화면 반영 대기 목록 (CID마다 파일 하나, 화면 재설계 때 반영)
├── customer-agenda/     고객 논의 대상 목록 (CA)
├── screens/             화면설계서 (메뉴 단위)
├── pending/             협의 대기 항목 (항목 하나 = 파일 하나)
├── provisional/         임시 정책 (고객 확답 전 임시 적용, 항목 하나 = 파일 하나)
├── decisions/           결정 기록 (ADR)
├── changes/             변경요청(CR)과 개발사 전달 릴리즈 노트
├── archive/             폐기된 화면·정책
├── templates/           문서 템플릿
├── tools/              작업 보조 스크립트 (Figma 기존 화면 추출 등). 룰은 도구 없이도 따를 수 있게 씀
└── background/          초안 작업 배경 자료 (룰 확정 후 보관)
```

각 폴더의 README에 용도와 현재 상태를 적었습니다.

## 파일 이름 규칙

파일과 폴더 이름은 영어 소문자, 숫자, 하이픈(-)만 씁니다. 단, CID·정책 ID처럼 정해진 ID는 원래 표기(대문자)를 그대로 씁니다. 내용은 한국어로 씁니다.
