# 초안 작업 목록

> 마지막 갱신: 2026-11-02

로컬에서 초안을 완성하고, UX팀 검토를 거쳐 공통 git으로 옮깁니다. 채울 수 있는 것은 함께 초안을 쓰고, 지금 채울 수 없는 것은 이 목록에 남겨 둡니다.

## 작업 순서

| # | 작업 | 산출물 | 상태 |
| --- | --- | --- | --- |
| 0 | 저장소 뼈대 | 폴더, README, 변경 흐름 룰, 협의 대기 템플릿 | 완료 |
| 1 | 헌법 v0.2 → v1.0 | `constitution.md` | 완료 (v1.2, 팀 검토 대기) |
| 2 | Claude 작업 규칙: 작업 유형별 실행 순서와 로딩 순서 | `CLAUDE.md`, `rules/claude-work.md` | 초안 v0.4 (남은 4개 항목은 다른 룰이 정해진 뒤) |
| 3 | 용어집 v0: 용어 후보 수집과 표준어 정리 | `glossary/glossary.md`, `glossary/terms.csv` | 완료: v0 확정 51개 (2026-10-30). 새 용어는 작업하면서 추가 |
| 4 | 다국어: 흐름 초안은 작성. 언어셋 관리 체계는 언어셋 담당자가 담당 Claude와 협의해 초안을 고쳐 감 | `rules/language-set.md`, `language-set/` | 초안 v0.1 (담당자 협의 대기) |
| 5 | 상태값과 상태 기록 형식, 저장소·ID 규칙(정책 ID 제외) | `rules/status-lifecycle.md`, `rules/repository-and-id.md` | 초안 v0.1 (2026-10-30). 메뉴 폴더 이름과 정책 ID는 남음 |
| 6 | Service Mode·권한 매트릭스, 장비 상태 정의서, 알럿 카탈로그 초안 | `policy/` | 진행 중: Service Mode·권한 매트릭스 완료, 장비 상태 정의서 v0.2, 알럿 카탈로그 초안 v0.2 (2026-11-02) |
| 7 | 정책서 정제: Figma 화면을 읽고 8월 정책서와 디스크립션에 흩어진 정책을 합쳐 정리. 이때 정책 ID 체계를 정함. 반영 대기 목록 `policy/policy-backlog.md`를 먼저 반영 | `policy/`, `rules/policy-writing.md` | 진행 중: 정책서 작성 규칙 v0.1, ID 체계 확정 (2026-11-02) |
| 8 | IA 반영과 화면 폴더 구성 | `ia/`, `screens/` | 예정 (IA 수정본 받은 뒤) |
| 9 | 알럿 체계 재정리: 화면 설계 전체의 알럿 케이스를 모아 케이스별로 공통으로 묶을 수 있는 것을 묶고, 빠진 알럿을 추가함. 체계를 다시 잡은 뒤 화면 설계 때 알럿 정보를 정리함. Material Setup은 나중에 별도 프로그램으로 분리될 수 있어, Material Setup 알럿(MS_Alert_###, MS_Confirm_###, `policy/alert-catalog-ms.csv`)과 일반 메뉴 알럿(`policy/alert-catalog.csv`)을 분리해 관리함 (2026-11-03 결정) | `policy/alert-catalog.csv`, `policy/alert-catalog.md`, 화면 MD | 예정. 그 전까지 화면 MD의 알럿 정보(디스크립션 원문, 호출하는 화면, 반영 대기 목록)는 지우지 않고 남김 (2026-11-02) |

2번은 실행 순서가 프로그램의 토대가 되므로 헌법 바로 다음에 둡니다. 용어집 정리 순서도 2번에서 정한 순서를 따릅니다. 다국어(4번)는 용어집의 표준어와 언어셋의 문구가 이어져야 해서 용어집 바로 다음에 둡니다.

### 다국어 작업 (2026-10-29 추가)

설계 기준은 영어, 제공 언어는 영어·한국어·포르투갈어·스페인어·이탈리아어·프랑스어입니다. 화면 하나마다 영어 화면(고객용)과 최장 언어 화면(디자이너용) 두 개를 만듭니다. 작업 순서와 정할 것은 [rules/language-set.md](../rules/language-set.md)에 있습니다.

언어셋은 엑셀이고 ID 체계와 고유명사 관리가 있습니다. 앞으로 언어셋도 Claude가 관리하게 할 예정이며, 그 체계는 언어셋 담당자가 담당 Claude와 협의해 `rules/language-set.md`를 고쳐 가며 만듭니다.

## 함께 정할 것

- [x] **상태 기록 형식:** (2026-10-30 결정, `rules/status-lifecycle.md` 5절) 메뉴 상태, 버전, Date, 표시(플래그)를 파일의 어디에 어떤 형식으로 적을지. 프로그램과 Claude가 같은 방식으로 읽고 바꿀 수 있어야 함 (5번 작업에서)
- [x] **정책 ID 체계와 정책서 파일 배치** (2026-11-02 결정: `POL-영역-###`, `rules/policy-writing.md`) (7번 작업에서) — 이때 `rules/policy-writing.md`에 임시 정책에서 넘어온 정책은 PV ID를 근거로 적는 규칙을 넣어 임시 정책 → 정책서 연결을 마무리
- [x] **화면 폴더 구성:** `screens/<IA Lv.1 메뉴>/<CID>.md`, 1·2차는 머리말 `figma_region` (2026-11-02 확정, `rules/screen-spec.md` 3절)
- [ ] **결정 기록(ADR):** 어떤 결정을 기록할지, 템플릿
- [ ] **장비 상태 정의서와 씨젠 상태 정보 문서의 관계:** 씨젠 문서를 원본으로 `reference/customer/`에 두고, 우리 정의서(`policy/equipment-states.md`)는 그 문서를 출처로 인용하는 방식 제안 (원본을 받은 뒤 확정)
- [ ] **Common UX 이전 방식:** 최종본 V2.2.00 (2026-10-30) 나옴. 저장소로 옮기는 방법
- [ ] **회의록 정리 방식:** 진행 방식, 저장 위치, 기존 스프레드시트 회의록을 옮길지 (작업 유형 18번)
- [ ] **다국어 세부:** `rules/language-set.md` 6절 목록 (언어셋 담당자 협의)

## 확인하거나 전달해 주실 것

- [ ] **다시 확인할 것 (2026-11-03 멈춤): Material Setup 남은 질문** MS3-a(한 G10 Socket에 PK·IC를 함께 넣을 때 칸 배정과 카운터 "0/M"·"0/48"), MS8(Loading 화면을 따로 둘지, [OK] 버튼), MS9 나머지(Empty Waste Bin·RGE의 예전 알럿 ID를 MS 목록에 넣을지). 내용은 `background/policy-refinement.md` MAT "다시 물어볼 것"
- [ ] **추후 (2026-11-04): 회의록 구조와 회의 ID** 회의에서 정한 것을 임시 정책 · 논의 항목으로 올리고, 정책이 회의를 거쳐 정해졌다는 근거를 남기도록 회의록 구조를 짜고 ID를 부여. 지금 회의록은 스프레드시트 0.회의록. 제안서 R16

- [ ] **STA 질문 ST1 ~ ST11 답변** (2026-11-03 전달 예정, `background/policy-refinement.md` STA)
- [ ] **팀 논의 PD-0003** Total Sample·STAT Sample에 STAT Storage Sample을 셈하는 방법 (SM5)

- [ ] 고객사 제공 파일(상태 정보, 시약 정보): 파일 형식, 갱신 주기, 원본 전달. 특히 씨젠 문서 "CURECA 시스템 구성 요소 및 상태 정보" (Common UX COMM-4-a의 원본, 최우선 기준)
- [x] **씨젠 "소모품 및 시약 정보" 새 버전: 261102 받아 반영 (2026-11-03, 검사 항목 261102도 함께). 품목 표 `glossary/consumables.csv`, `glossary/pcr-reagents.csv` 만듦. 남은 것: 261022 검토의 다른 내용 3개(MM Tube, Tub 수량 단위, Buffer Cartridge Cap)는 Common UX와 맞춰 볼 것 (`reference/updates/2026-11-03_소모품·시약_검사항목.md`)** 이전 메모: 받으면 작업 유형 22 절차로 261022(`reference/customer/consumables-reagents/`)와 비교해 반영. 261022 검토 결과와 확인 필요 3개(MM Tube 수량 단위, Tub 수량 단위, Buffer Cartridge Cap)는 `background/teammate-review.md` 1-2. 반영할 때 품목 표(`glossary/consumables.csv`, `glossary/pcr-reagents.csv`)도 만들기
- [x] 장비 상태 정의서 확인 7개 (2026-11-02 답변 반영, `policy/equipment-states.md` v0.2)
- [ ] Common UX 수정 요청 9개를 Common UX 담당 팀원에게 전달 (`common-ux/feedback.md`)
- [ ] 언어셋 담당자에게 `rules/language-set.md` 초안 공유, 현재 기준 언어셋(엑셀) 전달받기
- [x] IA 수정본: v1.15 받음 (2026-11-02, `ia/`)
- [ ] 정책서 정제에 쓸 Figma 화면 링크
- [ ] **이전 추출 다시 보기:** 용어집 v0 검토(`glossary/review-v0.md`)와 알럿 카탈로그 사용 화면은 작업방 1차·2차 영역을 나누지 않고 모은 결과임. 화면 정정 대상 목록은 2차(민트색) 영역 기준으로 다시 확인 (`rules/figma-sync.md` 1절)
- [ ] 작업방 Material Setup 2차 페이지의 LI-TSS-RGE-01, LI-TSS-RGE-02는 IA v1.15 이후 새로 추가된 화면 (2026-11-02 확인). 다음 IA 버전에서 반영되는지 확인
- [ ] **정책서 정제 범위:** Material Setup 2차 페이지는 우선 제외하고 시작 (2026-11-02). MAT·LOD 정책을 쓸 때 다시 포함
- [x] CID 접미어 -V / -M: 같은 구조의 화면에 수정 모드가 따로 필요할 때만 씀 (2026-10-30)
- [ ] Material Setup(2차)의 "PK/IC Tube reuse guide" 프레임 3개가 IA v1.09에서 삭제된 Reuse guide인지
- [x] Setting 하위 메뉴 권한: Tube·Assay Pack Setting은 Service만, 나머지는 User 제외 (2026-10-30, `policy/permission-matrix.csv`)
- [x] User 권한 범위: Setting을 뺀 모든 메뉴 (2026-10-30, `policy/permission-matrix.csv`)
- [x] Common UX User Type 용어 → `common-ux/feedback.md` 8번에 포함
- [ ] 매일 정해진 시간에 메뉴별 진행 현황을 정리하는 안 팀 논의
- [ ] 씨젠 검사 항목 문서의 매핑 시트에만 있는 HPVHR-HP62/63이 실제 검사 항목인지 (`background/teammate-review.md` 1-3)
- [ ] 약 6개월 뒤 인허가 때 고객사가 요구하는 UI 명세·추적성 문서 양식

## Figma 작업방 정리 때 처리할 것

- [ ] 폐기 확정 화면(TI/LI-INS-02-02-P) 폐기 처리
- [ ] 작업방 Common UX 페이지에 섞인 다른 프로젝트 내용 제거
- [ ] 정책서 페이지의 이전 정의 정정: "Admin은 Setting 메뉴 접근 불가", 종료 옵션
- [ ] 정리 후 `sources.md` 갱신

## 2026-10-29 결정

- 저장소는 `CURECA_AI` 폴더. 로컬에서 초안 → 팀 검토 → 공통 git 이전
- 배경 문서 두 개는 `background/`에 두고, 룰로 옮겨지면 보관
- 협의 대기 항목은 항목 하나에 파일 하나 (`rules/change-flow.md`)
- 서비스 모드는 고객사 제안을 우리가 검토·확정해 개발사에 넘기는 우리 정책. `policy/`에서 관리 (우리 화면에서 설정하는 대상은 아님)
- 고객사가 주는 상태 정보·시약 정보 파일은 원본 그대로 `reference/customer/`에 보관
- 팀 Claude 프로그램은 이 저장소를 토대로 다시 만든다. 따라서 4명 사이의 일관성과 룰에 따른 Claude 실행 순서를 최우선으로 설계
- 정책 ID 체계는 정책서 정제 때, 화면 폴더 구성은 IA 수정본을 받은 뒤 정함
- 다국어: 설계는 영어, 제공은 6개 언어(영·한·포·스·이·프). 화면마다 영어 화면(고객 협의용)과 최장 언어 화면(디자이너 참고용) 두 개를 만듦. 언어셋(엑셀, ID 체계·고유명사 관리)은 담당자가 담당 Claude와 협의해 관리 체계를 만들어 감
- 언어셋은 내부 논의 대상이 아님. 영어는 고객사 컨펌, 5개 언어 번역도 고객사를 통해 받음. 새 영어 문구는 Claude가 묻지 않고 번역 요청 목록(`language-set/translation-requests.csv`)에 올려 알리고, 요청하면 고객사용 목록으로 뽑음
- 작업 유형 21개 초안 (`rules/claude-work.md`). 회의록 정리는 유형에만 넣고 방식은 추후 결정
- 화면설계서는 CID마다 파일 하나 (짝 화면도 따로, pair_cid로 연결). -V/-M 접미어는 수정 모드가 따로 필요한 화면에만. Ver는 X.Y.Z (프로젝트 차수.릴리즈 순번.개발사 전달 순번), 작업 때 버전을 묻고 전달 후 올리라고 알림. 상태 이력은 메뉴 파일 본문 표로 남김
- 공통 순서 10단계와 보고 형식 8항목 확정. 계획 확인은 초기에 모든 쓰기 작업에서 받고 안정화 후 줄일지 검토. 질문이 생기면 걸린 부분만 멈추고 "질문 대기"로 표시
- 읽는 순서(용어집 → 룰 → 대상 → 참조 자료 → 점검 기준 → 진행 중 항목)와 묶음별 자료, 화면 점검 9항목 확정. 작은 변경은 걸린 항목·다국어·용어·T/L 짝만 점검. 전달 전 남은 표시는 경고만 하고 담당자가 결정. T/L 짝 중 한쪽만 고쳤으면 다른 쪽도 고칠지 반드시 물음
- 금지 사항 목록 정리. 다른 작성자 화면도 작은 변경이면 함께 고치고 연동 변경 이력과 알림을 남김. 같은 대화에서 다른 작업은 새 대화를 권하되 이어서 할 수 있고, 전체 순서를 다시 적용할지 요청자가 선택. 프로그램이 멈추면 저장소만 바꾸고 "Figma 반영 대기" 표시 후 복구 시 일괄 반영
- 임시 정책: 고객 확답 전 임시 적용한 정책을 `provisional/PV-0001.md`로 추적. 화면 표시 "미결 정책 포함"은 "임시 정책 포함"으로 바꿈 (`rules/provisional-policy.md`)
- 룰은 팀 프로그램에 묶이지 않음. 프로그램, Claude Code, Claude 채팅 어디서 작업해도 같은 룰을 따르고, CR 정보도 어디서든 요청 가능. 프로그램이 멈추면 Claude에 직접 요청해 이어 감 (헌법 6조, 운영 원칙)

## 2026-10-30 결정

- 용어집 v0 완료 (확정 51개). 문서는 한국어 문장 + 화면 항목·업무 대상 이름은 영어. 상태값 13묶음은 `glossary/status-values.csv`, Module·Unit은 `glossary/module-units.csv`, 검사 항목명은 `glossary/test-items.csv`
- Main / Console / TSS의 상위 명칭은 Service Mode (헌법 v1.2). 이름과 번호 사이 띄어쓰기 `PCR Setup (1)`. Idle → Ready, T → rxns
- 버튼·라벨 대소문자는 주간 미팅 안건 (`pending/PD-0001.md`)
- 저장소·ID 규칙, 문서 상태 룰 초안 v0.1: CID마다 파일 하나, Ver X.Y.ZZ, 버전과 Date는 수정한 CID만 갱신
- 기준 자료: Service Mode 매트릭스와 권한 매트릭스 초안 완료, 장비 상태 정의서 초안 v0.1 (Common UX COMM-4-a 기준)

## 참고: 배경 문서와 달라진 점

- `rules-review-draft.md` 마지막의 "상태값 5단계(Draft ~ Delivered)"는 이후 결정된 UX·UI·전달 3축 상태값으로 대체됨
- 구조안의 `reference/service-mode-matrix.csv`, `permission-matrix.csv`, `equipment-states.md`, `alert-catalog.md`는 우리가 관리하는 자료라 `policy/`로 옮김
- 구조안의 `pending/pending.md` 한 파일은 항목별 파일로 바뀜

## 진행 메모: 용어집 v0 (2026-10-29 저녁)

- 읽는 범위: 작업방 메뉴별 페이지 12개(Material Setup은 2차만), 정책서_2026.08.28, UX-AI-TEST의 DY common UX
- Figma 텍스트를 고유 문구 단위로 내려받는 중. 예시 데이터(샘플 ID, 숫자만 있는 값)는 제외
- 내려받은 원문 위치: 이 세션의 임시 폴더 `figma-text/` (작업이 끊기면 다시 추출해야 할 수 있음)
- 추출 완료 (2026-10-30 오전, 고유 문구 10,738개). 검토표 `glossary/review-v0.md`의 질문 9개 결정 반영. 버튼·라벨 대소문자는 PD-0001로 주간 미팅 안건
- 화면 정정 대상 목록은 `glossary/review-v0.md` 끝에 모음 (화면 재설계 때 반영)
