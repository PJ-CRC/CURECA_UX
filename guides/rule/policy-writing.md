# 정책서 작성 규칙

> 상태: 초안 v0.2 (2026-11-02). 규칙 문장 형식을 명사형 끝맺음으로 바꾸고, 팀원 정책 ID 기록 방법을 더함.

정책서 한 항목의 ID, 파일, 형식, 작성·수정 규칙을 정합니다. 정책은 정책서에만 정의하고, 화면설계서는 정책 ID로만 참조합니다(헌법 3조).

## 1. 정책 ID

형식은 `POL-영역-###`입니다. 예: `POL-EQP-001`

| 코드 | 영역 | 다루는 것 |
| --- | --- | --- |
| COM | 공통 | 플랫폼, 운영 언어, 모듈 구성 운영 등 모든 영역에 걸치는 것 |
| ACC | 계정·권한·로그인 | 계정 생성, 아이디·비밀번호, Session Timeout, 종료, User Type 권한 |
| EQP | 장비 | 장비 상태, Door, Enable Setting, Error Rate, Spare Storage |
| INV | Reagent·Consumable 재고와 폐기 | 유효기간, 폐기, 재사용, Lot, 재고 상태, 입출고 시점 |
| MAT | Material Setup | Carrier·Socket·Tray·Trolley 구성, 데이터 저장, 리셋 |
| LOD | 도킹·Drawer Loading | Trolley 도킹, DX Storage 투입부, STAT Storage, Cold Storage |
| SMP | Sample·검사 진행 | Sample·Plate 상태, 검사 시작·종료 시간, 재검사, Batch, 오더 취소, STAT 검사 |
| TST | 검사 정책 | 조합 검사, Cut-off Time, Cost Setting, Policy·Protocol Setting |
| EVT | Event | Event 상태·등급·종류, Event 팝업 |
| STA | 통계 | 통계 데이터 표출, 기간 설정 |
| SYS | 시스템 연동 | LIS 연동, 데이터 백업·복원 |

- 영역은 정책의 주제로 정합니다. 정책이 쓰이는 메뉴는 여러 개일 수 있으므로 메뉴는 머리말 `menus`로 연결합니다.
- 번호는 영역마다 세 자리 일련번호입니다. 그 영역의 가장 큰 번호에 1을 더하고, 한 번 쓴 번호는 다시 쓰지 않습니다.
- 새 영역이 필요하면 협의 대기 항목으로 올립니다.
- 다른 체계의 정책 ID(예: 팀원 정책 MD의 `POL-INS-06`)는 쓰지 않고, `policy/migration.csv`의 "이전 ID" 칸에 남겨 어디서 왔는지 따라갈 수 있게 합니다.

## 2. 파일

- 정책 하나에 파일 하나: `policy/<영역 코드 소문자>/POL-영역-###.md` (예: `policy/eqp/POL-EQP-001.md`)
- 템플릿: `templates/policy.md`
- 표 형태의 기준 자료(Service Mode·권한 매트릭스, 장비 상태 정의서, 알럿 카탈로그, 상태값 표)는 데이터 파일로 두고, 정책 파일이 그 파일을 참조합니다. 같은 내용을 정책 파일에 옮겨 쓰지 않습니다.

## 3. 머리말

| 키 | 내용 |
| --- | --- |
| `id` | 정책 ID |
| `title` | 정책 이름 |
| `summary` | 한 문장 요약. 화면 디스크립션에 정책 ID와 함께 자동으로 붙습니다. 표준어로 쓰고, 80자 안쪽으로 씁니다 |
| `domain` | 영역 코드 |
| `menus` | 관련 메뉴 (IA 메뉴 이름) |
| `cids` | 이 정책을 참조하는 화면 CID |
| `status` | 확정 / Deprecated |
| `version` | 이 정책이 마지막으로 바뀐 Ver. 화면 Ver와 같은 체계(X.Y.ZZ, `rules/repository-and-id.md` 6절)이며, 바뀐 정책이 처음 반영되는 화면의 Ver를 적음. 화면은 머리말 `policies`에 `정책 ID@버전`으로 참조해 어느 기준으로 그렸는지 추적함 (2026-11-02 결정) |
| `date` | 마지막으로 바뀐 날짜 |
| `sources` | 근거 (정책서_2026.08.28, Common UX 프레임, 결정 기록, 회의록 등) |
| `provisional` | 임시 정책에서 넘어왔으면 PV ID (`rules/provisional-policy.md`) |
| `alerts` | 관련 Alert·Confirm ID (`policy/alert-catalog.csv`) |
| `data` | 참조하는 기준 자료 파일 |
| `replaced_by` | Deprecated일 때 대신하는 정책 ID |

## 4. 본문

다음 순서로 씁니다. 해당 없는 절은 "없음"으로 둡니다.

1. **정의:** 이 정책이 다루는 대상과 용어
2. **규칙:** 번호를 매긴 개조식 문장. "[조건]일 때 [대상]은 [동작]함" 형식을 기본으로 씁니다. 조건을 앞에 두고, 명사형으로 끝맺습니다(~함, ~됨, ~가능, ~불가). 예: "장비 통합 상태가 Running 또는 Error일 때 프로그램 종료와 시스템 종료는 불가."
3. **예외**
4. **근거:** 출처와 결정 기록
5. **변경 이력:** 버전, 날짜, 내용, 근거(PD·PV·CR·ADR)

## 5. 작성 규칙

- 용어집의 표준어만 씁니다. 화면 항목과 업무 대상 이름은 영어로 씁니다(`glossary/glossary.md`).
- 상태값은 어느 단계의 상태인지 함께 씁니다 (예: "장비 통합 상태가 Running일 때").
- 수치는 구체값으로 씁니다. 장비가 확정되지 않아 정할 수 없는 값은 `TBD-장비`로 표시하고 지어내지 않습니다.
- 근거가 없거나 출처끼리 충돌하면 쓰지 않고 질문으로 남깁니다(헌법 7조).
- 우선순위: 공통(COM) 정책 > 영역 정책 > 화면설계서의 예외. 화면 예외는 화면설계서에 정책 ID와 함께 적습니다.
- 임시 정책에서 넘어온 정책은 `provisional`에 PV ID를 적고 근거에 남깁니다.

## 6. 바꾸기와 폐기

- 정책서는 공통 자료입니다. 바꿀 내용은 임시 정책으로 등록하고, 승인 담당자가 승인한 것만 반영합니다(`rules/change-flow.md`).
- 정책을 바꾸면 `cids`의 화면을 영향 범위에 넣습니다(헌법 5조).
- 정책이 필요 없어지면 파일을 지우지 않고 `status: Deprecated`로 바꾸고, 대신하는 정책이 있으면 `replaced_by`를 적습니다.

## 7. 정책서 정제 진행 방법 (작업 유형 20)

1. `policy/policy-backlog.md`를 먼저 읽습니다.
2. **기준 자료를 읽습니다 (빠뜨리지 않음).** 정책 문장을 쓰기 전에 아래 파일을 읽고, 쓰는 동안 계속 대조합니다.
   - 용어: `glossary/glossary.md`(표기 규칙), `glossary/terms.csv`(표준어와 쓰지 않는 표현)
   - 상태값: `glossary/status-values.csv`(분류, 레벨, 코드명, UI 표기, 정의)
   - 대상 이름: `glossary/modules.csv`, `glossary/module-units.csv`, `glossary/test-stages.csv`, `glossary/test-items.csv`, `glossary/sample-types.csv`
   - 메뉴와 CID: `ia/ia-screens.csv`
   - 그 영역의 기준 자료: 예) EQP는 `policy/equipment-states.md`, ACC는 `policy/permission-matrix.csv`, EVT는 `policy/alert-catalog.csv`
3. 영역 하나씩 진행합니다. 영역마다 8월 정책서, 작업방 화면 디스크립션, Common UX에서 그 영역의 정책 문장을 모읍니다. 작업방 화면은 `rules/figma-sync.md`의 릴리즈 영역 규칙에 따라 최신 화면을 봅니다.
4. 출처끼리 다른 곳은 충돌 목록으로 만들어 요청자에게 판정을 받습니다. 판정 전에는 정책 파일에 쓰지 않습니다.
5. 판정이 끝난 정책을 정책 파일로 씁니다. 8월 정책서의 정책명, 팀원 정책 MD의 ID(이전 ID)와 새 정책 ID의 대응을 `policy/migration.csv`에 남깁니다(헌법 9조). 팀원 정책 문장을 옮길 때는 용어를 이 저장소 용어집 표기로 바꿉니다(예: 트롤리 → Trolley, D.A.PC → D.A PC, 계정 유형 → User Type).
6. **쓴 뒤 점검합니다.** 정책 파일마다 (1) 용어가 `glossary/terms.csv`의 표준어인지, 쓰지 않는 표현이 없는지 (2) 상태값이 `glossary/status-values.csv`의 UI 표기와 같고 어느 레벨의 상태인지 적혀 있는지 (3) Module·Unit·검사 항목 이름이 기준 파일과 같은지 (4) 메뉴와 CID가 `ia/ia-screens.csv`에 있는지 확인합니다. 용어집이나 상태값 표에 없는 말이 필요하면 지어내지 않고 용어집 추가 후보로 올립니다. 점검 결과는 보고의 "확인한 것"에 적습니다.
7. 반영한 반영 대기 항목은 `policy/policy-backlog.md`에서 정책 ID와 날짜를 적어 닫습니다.

## 근거

`background/rules-review-draft.md` "공통 룰 목록"(정책서 작성·업데이트), 헌법 3·5·7·9조, 2026-11-02 결정(정책 ID 체계, 팀원 ID는 이전 ID로 기록, 규칙 문장은 조건 앞 + 명사형 끝맺음)
