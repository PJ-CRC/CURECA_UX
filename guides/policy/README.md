# 정책

정책서와, 우리가 고객사와 정해 관리하는 기준 자료를 둡니다. 모두 공통 자료라 협의 대기 → 주간 미팅 합의를 거쳐 바뀝니다(`old-rules/change-flow.md`).

> 상태: 정책 ID는 `POL-영역-###` (2026-11-02 결정, `old-rules/policy-writing.md`). 정책 파일은 `policy/<영역 코드 소문자>/`에 둡니다. EQP부터 작성 중이며 진행 상황은 `archive/background/policy-refinement.md`.

## 둘 예정인 자료

| 자료 | 내용 | 비고 |
| --- | --- | --- |
| 정책서 | 정책 하나 = 파일 하나. `policy/<영역>/POL-영역-###.md` | 작성 규칙 `old-rules/policy-writing.md`. 8월 정책서·팀원 ID 대응은 `migration.csv` |
| L-IOS Client 시스템별 기능 분류 | L-IOS Client Mode(Main Mode / Console Mode / MS Mode)별 메뉴·기능. [client-mode.md](client-mode.md), [client-mode-matrix.csv](client-mode-matrix.csv) | 초안 v0.2 (2026-11-12, DS-0001). 고객사 제안을 우리가 검토·확정해 개발사에 전달 |
| 권한 매트릭스 | User Type(Service / Admin / User)별 메뉴·기능 허용. [permission.md](permission.md), [permission-matrix.csv](permission-matrix.csv) | 초안 완료 (2026-10-30). 30행 모두 확정 |
| 장비 상태 정의서 | 상태값, 전이 조건, 상태별 허용 동작과 화면 표시. [equipment-states.md](equipment-states.md), [integrated-state-transitions.csv](integrated-state-transitions.csv) | 초안 v0.1 (2026-10-30). 확인 필요 6개 |
| 경광등 | 장비 통합 상태·Event별 경광등 색과 점멸. [warning-light.csv](warning-light.csv) | 씨젠 원본 그대로 (2026-11-02) |
| 정책서 반영 대기 | 확정되었지만 정책서에 아직 없거나 다른 내용. [policy-backlog.md](policy-backlog.md) | 정책서 정제 때 먼저 읽음 |
