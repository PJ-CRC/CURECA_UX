# 정책서 정제 작업 노트

> 여러 대화에 걸치는 작업이라 진행 상황을 여기에 남깁니다(`rules/claude-work.md` 7절). 다음 대화는 이 노트부터 읽고 시작합니다.

## 범위와 순서

- 진행 방법: `rules/policy-writing.md` 7절
- 범위: Material Setup 2차 페이지는 우선 제외 (2026-11-02). MAT·LOD 정책을 쓸 때 다시 포함
- 영역 순서: EQP → ACC → EVT → 나머지 (2026-11-02 합의)
- 화면은 `rules/figma-sync.md` 1절 규칙으로 고른 최신 영역만 봄. Instruments 메뉴는 2.1 1차 영역만 있음

## EQP (장비)

### 쓴 정책 (2026-11-02)

| ID | 제목 | 이전 ID |
| --- | --- | --- |
| POL-EQP-001 | CURECA Status 구조 | 팀원 POL-INS-05·06·07 |
| POL-EQP-002 | 장비 통합 상태 전환 | 팀원 POL-INS-05 |
| POL-EQP-003 | Initialize, Stop, Run, Quick Start 버튼 | - |
| POL-EQP-004 | Pausing과 Paused | - |
| POL-EQP-005 | Run-time | - |
| POL-EQP-006 | Spare Storage | 팀원 POL-INS-04 |
| POL-EQP-007 | 경광등 | - |
| POL-EQP-008 | Door 잠금 해제와 자동 잠금 | 팀원 POL-INS-01 |
| POL-EQP-009 | Management (Enabled 설정) | 팀원 POL-INS-02 |
| POL-EQP-010 | Error Rate | 팀원 POL-INS-03 |

- `version`: 화면 Ver와 같은 체계로, 정책이 처음 반영되는 화면 Ver를 적음 (E0 결정). 지금 쓴 정책들은 다시 그릴 화면의 Ver가 정해지면 채움
- 쓴 뒤 점검(`rules/policy-writing.md` 7절 6단계): 용어 표준어 점검(쓰지 않는 표현 자동 대조), 상태값 표기, Module·Device 이름(`glossary/modules.csv`, `module-units.csv`), CID 12개가 `ia/ia-screens.csv`에 있는지 확인함

### 판정 (2026-11-02 답변)

| # | 정책 (예정) | 질문 | 출처 |
| --- | --- | --- | --- |
| E0 | 전체 | 정책 머리말 `version`에 무엇을 적을지. 예: 지금 화면 릴리즈 Ver (2.1.xx), 또는 정책서 자체 버전 | `rules/policy-writing.md` 3절 |
| E1 | Door 잠금 해제와 자동 잠금 | 8월 정책서: "Unlock 후 사용자가 화면에서 다시 Lock하는 기능은 지원하지 않음". 지금도 맞는지 | 정책서_2026.08.28 Door 개폐 및 잠금 전환 규칙 |
| E2 | Door 잠금 해제와 자동 잠금 | 8월 정책서: "문을 한 번도 열지 않으면 Unlocked를 유지하다가 Run 시작 시 자동 잠금". 씨젠 기준으로 Run 중에도 조건부 잠금 해제가 되므로, Run 중 잠금 해제 후 Door를 열지 않으면 Module이 계속 Paused인지, 언제 다시 잠기는지 | 정책서, LI-INS-01-P "The module will resume and lock automatically 5 seconds after the door is closed." |
| E3 | Enable Setting (Management Popup) | 사용 여부를 바꿀 수 있는 대상. 8월 정책서는 "Universal PCR의 CFX96, Plate Sealing의 Sealer만", 화면 Ver 2.1.01은 "Device Enable 정책 변경 (관리 대상 추가)" | 정책서, TI-INS-02-01-P 변경 이력 |
| E4 | Enable Setting | 바꿀 수 있는 장비 통합 상태. 화면은 "Ready, Not Initialized일 때만, Running이면 Alert_013". Partial Running, Paused, Error, Stopping, Initializing일 때는 어떻게 하는지 | TI-INS-02-01-P [Save] |
| E5 | Enable Setting | 누가 바꿀 수 있는지 (Service만 / Service·Admin). 권한 매트릭스에 행이 없음. L-IOS Management Popup은 조회만 | `policy/permission-matrix.csv`, LI-INS-02-01-P 팝업 정의 |
| E6 | Error Rate | 표시 위치. 8월 정책서는 "Instrument Detail 영역 모듈명 밑", 화면 Ver 2.1.01은 Detail에서 제거하고 Management Popup에만 (Service만). All Tab(TI/LI-INS-02-T) 디스크립션에는 아직 Error Rate 항목이 있음 → Management Popup만 맞으면 All Tab 디스크립션은 화면 정정 대상 | 정책서, TI-INS-02-T·TI-INS-02-01-P |
| E7 | Error 모듈 복구 | 문을 닫은 뒤 검사 가능 상태 확인 결과가 정상이 아닐 때 동작 (팀원 Q22) | `policy/policy-backlog.md` 추가할 것 12 |

- 판정 없이 정한 것: Error Rate 집계 대상 Device는 화면(Ver 2.1.01)대로 Sample Pretreatment, Sample Aliquot, M9600, STARlet, Sealer, CFX96 (8월 정책서보다 최신). Running 중 Door 잠금 해제는 씨젠 상태 정보 261021의 조건부 허용이 기준 (8월 정책서의 "Running 중 불가"는 바뀜)

### 화면 정정 후보

CID마다 `screen-fixes/<CID>.md`로 옮김 (2026-11-02).

**답변 반영 (2026-11-02)**

| # | 답 | 반영 |
| --- | --- | --- |
| E0 | 정책 버전은 화면 버전과 같은 체계로. 어떤 화면이 어떤 기준을 참고했는지 추적 | `rules/policy-writing.md` 3절, `rules/screen-spec.md` 1절 (`정책 ID@버전`) |
| E1 | 다시 Lock하는 기능 없음. 닫으면 5초 뒤 자동 잠금 | POL-EQP-008 규칙 3 |
| E2 | 정의되지 않음. 우선 Paused 유지. 참고: Run Start 시 Unlocked Door는 자동 잠금 후 Run 진행 | 임시 정책 PV-0001, POL-EQP-008 규칙 9 |
| E3 | 한 Module 안에 같은 Device Unit이 2대 이상이면 대상 (CFX96, Sealer, Sample Pretreatment 2대 설치 등). 같은 Module 2대 이상이면 최소 1대 Enabled | POL-EQP-009 규칙 1~5 |
| E4 | 장비 통합 상태와 장비 모듈 상태가 모두 Ready 또는 Not Initialized일 때 | POL-EQP-009 규칙 7 |
| E5 | T-IOS에서 Service만 변경, Admin·User는 조회. L-IOS는 조회만 | POL-EQP-009 규칙 8·9, `policy/permission-matrix.csv` |
| E6 | 고객 논의 대상 | CA-0001 (`customer-agenda/agenda.md`) |
| E7 | 정의되지 않음. 고객 논의 대상 | CA-0002 |

**남은 것**

- Management에서 장비 모듈 상태가 Running이 아닌 이유(Error, Paused 등)로 바꿀 수 없을 때 보여 줄 알럿이 없음 → 알럿 정의 필요 (`screens/instruments/TI-INS-02-01-P.md` 반영 대기 목록 6)
- 화면 정정 후보는 화면 MD의 "반영 대기 목록" 절로 옮김 (화면 MD가 없는 CID는 `screen-fixes/<CID>.md`)

## 화면 MD화 (정책 작업과 함께, 2026-11-02 시작)

- 방법: `rules/screen-spec.md` 3절, 추출 스크립트 `tools/figma/extract-screen.js`
- Instruments: 기획 화면 7개 옮김 (`screens/instruments/`). 옮기면서 찾은 고칠 점은 각 파일 "반영 대기 목록"
- E8 답 (2026-11-02): Door 잠금이 해제되면 장비 통합 상태와 관계없이 Module은 Paused. Door가 여러 개인 Module은 하나라도 해제되면 Paused → POL-EQP-004 규칙 1·2, `glossary/status-values.csv`
- E9 답 (2026-11-02): Door가 다시 잠기면 Paused 전 상태로 돌아감 (Run 중이면 Running, 아니면 Ready). 장비 통합 상태는 모든 Module이 Paused일 때 Paused, Run 중 1대라도 Paused면 Partial Running. Run 중이 아닐 때 일부만 Paused면 통합 상태는 바뀌지 않음 → POL-EQP-002 규칙 3~5, POL-EQP-004 규칙 7·8. 씨젠 전환표에 Run 중이 아닐 때 Paused 전환이 없어 새 버전 때 확인
- Dashboard (TI-DAS, LI-DAS), Dashboard(All) (TI-ADS, TI-ADS-P): 2.1 2차 영역에서 옮김. POL-EQP-001·009 `cids`에 TI-ADS 추가
- 다른 영역 정책 재료 (그 영역 정책을 쓸 때 화면 MD에서 가져옴): Today’s Orders 집계 기준과 Test Cut-off Time 리셋(SMP·TST, TI-DAS 1), Inventory Status·Waste Bin/Bottle Status 노출 조건(INV, TI-DAS 6·7), Display Name 30자(TI-ADS-P)

## ACC (계정·권한·로그인)

### 쓴 정책 (2026-11-02)

| ID | 제목 | 이전 ID |
| --- | --- | --- |
| POL-ACC-001 | User Type과 권한 | 팀원 POL-SYS-01 |
| POL-ACC-002 | 계정 생성 | 팀원 POL-LOG-01 |
| POL-ACC-003 | 초기 비밀번호 변경 | 팀원 POL-LOG-02 |
| POL-ACC-004 | 로그아웃과 종료 | 팀원 POL-LOG-06 |

- 화면 MD: Login 6개, Profile 4개, System Setting 2개, Account Setting 4개 (`screens/login/`, `profile/`, `setting/`)
- 팀원 Q11(T-IOS Event 팝업 개별 설정 화면)은 풀림: Profile > General의 Event notifications (TI-CPW-01-P, v2.1.11, 기본 On)
- 팀원 Q5(Session Timeout 값)는 화면으로 풀림: On/Off, 5분 단위 5~120분, 기본 60분 (TI-STN-02). 기본 On/Off만 남음 (A4)
- System Setting의 Data Backup·Restore는 v2.1.03에서 제거됨 → `policy/equipment-states.md` 7절의 "Restore from Backup은 Running·Partial Running이면 불가"는 SYS 정책 때 정리

### 판정 대기

| # | 질문 | 출처 |
| --- | --- | --- |
| A1 | "각 문자 유형을 최소 1자 이상 포함"은 비밀번호 조건인지 (8월 정책서는 아이디 조건에 적음. 화면은 TI-LOG-01-P, TI/LI-CPW-02-P, TI-STN-05-01-P 모두 비밀번호 조건에 적고 아이디 조건에는 없음. LI-LOG-01-P만 비밀번호에도 없음) | 정책서, 화면 (팀원 Q4) |
| A2 | [Generate] 난수 비밀번호는 8자, 대문자·소문자·숫자만 필수(특수문자 없음). A1이 비밀번호 조건이면 특수문자도 넣어야 하는지 | TI-STN-05-01-P 4-2 |
| A3 | 계정 잠금: 로그인 10회 실패 시 잠금, 해제 시 실패 횟수 0. 잠금 시간은 화면에 "관리자가 설정한 제한 시간", "5분 기준". System Setting에는 잠금 시간 설정 항목이 없음. 고정 5분인지, 설정 항목을 둘지 | TI-LOG-02-P, TI-STN-02 |
| A4 | Session Timeout 기본값이 On인지 Off인지 (SRS 단서: 기본 Off). 8월 정책서의 "장비 통합 상태가 Ready, Not Initialized일 때만 적용"이 지금도 맞는지 | TI-STN-02, 정책서 |
| A5 | L-IOS 로그인 전 화면의 [Shut Down]은 누구나 쓸 수 있는지. T-IOS 로그인 화면 디스크립션의 [Exit](화면에 버튼 없음)는 지울지 | LI-LOG-01, TI-LOG-01 |
| A6 | Email은 모든 화면에서 필수가 아닌지 (계정 생성·L-IOS Profile은 필수 아님, T-IOS Profile은 언급 없음) | TI-STN-05-01-P, LI-CPW-01-P, TI-CPW-01-P |
| A7 | 초기 비밀번호 변경 Popup에서 바꾸지 않고 [Cancel]을 누르면 로그인 화면으로 돌아가는지 | TI-LOG-01-P |
| A8 | Account Setting 범위: Service 계정이 목록에 나오는지, Admin이 다른 Admin 계정을 고치거나 지울 수 있는지, 자기 계정 삭제, User Details에서 비밀번호를 어떻게 다시 정하는지(다음 로그인 때 변경 필요 여부) | TI-STN-05, TI-STN-05-03-P |

## EVT (Event)

### 쓴 정책 (2026-11-02)

| ID | 제목 | 이전 ID |
| --- | --- | --- |
| POL-EVT-001 | Event 구분과 표시 | 팀원 POL-SYS-03 |
| POL-EVT-002 | Event 상태 변경과 Notes | - |
| POL-EVT-003 | Event Message Popup 노출 | 팀원 POL-SYS-04 |

- 화면 MD: Event History 6개 (`screens/event-history/`). `screen-fixes/TI-EVT-P.md`, `LI-EVT-P.md`는 화면 MD로 옮김

### 판정 대기

| # | 질문 | 출처 |
| --- | --- | --- |
| EV1 | 여러 Event를 한 번에 Closed로 바꾸는 방식. L-IOS는 v2.1.01에서 체크박스를 빼고 [Mark all as Closed](Open인 모든 Event, Confirm_003)로 바꿈. T-IOS 디스크립션은 아직 체크박스 + [Mark as Closed](Confirm_L_003, 삭제된 Alert_003)이고 화면에는 버튼이 없음. T-IOS에도 [Mark all as Closed]를 둘지, 범위가 전체 Open인지 검색 결과에 보이는 Open만인지 | TI-EVT-P, LI-EVT-P |
| EV2 | Effect·Description·Recommended Action의 원본인 씨젠 "[SRD] CURECA Prep 및 Dx 장비 Event 정의"를 받아 기준 출처에 넣을지 | TI-EVT-01-P |

## COM (공통)

| ID | 제목 | 이전 ID |
| --- | --- | --- |
| POL-COM-001 | 플랫폼 구성 | 팀원 POL-CMN-01 |
| POL-COM-002 | 지원 해상도 | 팀원 POL-CMN-02 |
| POL-COM-003 | Module 구성 운영 | 팀원 POL-CMN-04 |

| # | 질문 | 출처 |
| --- | --- | --- |
| C1 | 운영 언어: 8월 정책서와 System Setting 화면은 "현재 영문 단일 언어"(Language: English만), 이 저장소 `rules/language-set.md`는 "6개 언어로 서비스". 이번 버전은 영어만이고 6개 언어는 다음 버전인지, 화면 Language 선택지를 6개로 둘지 | 정책서 공통 2-1, TI-STN-02, `rules/language-set.md` |

## SYS (시스템 연동)

| ID | 제목 | 이전 ID |
| --- | --- | --- |
| POL-SYS-001 | LIS 연동 설정 | 팀원 POL-SYS-02 |
| POL-SYS-002 | LIS Code Mapping | - |
| POL-SYS-003 | SMTP 연동 | - |
| POL-SYS-004 | Log 내보내기와 파일 위치 | - |

- 화면 MD: LIS Setting 2개, SMTP Setting 1개 추가 (`screens/setting/`)
- `policy/equipment-states.md` 7절의 Restore from Backup 제한은 기능 제거로 정리

| # | 질문 | 출처 |
| --- | --- | --- |
| S1 | CURECA가 여러 대일 때(Dashboard(All), 최대 3대) LIS 설정과 Code Mapping을 CURECA마다 두는지, T-IOS 하나에 하나인지 ("LIS와 CURECA 1:1") | POL-SYS-001, TI-ADS |
| S2 | SMTP를 Enable에서 Disable로 바꿔 저장할 수 있는지 (지금 디스크립션은 Disable이면 [Save] 비활성화) | TI-STN-06 5 |

## TST (검사 정책) 1부: Policy Setting

| ID | 제목 | 이전 ID |
| --- | --- | --- |
| POL-TST-001 | Policy Setting 공통 | 팀원 POL-TST-04 |
| POL-TST-002 | Test Cut-off Time | 팀원 POL-TST-02 |
| POL-TST-003 | Cost Setting | 팀원 POL-TST-03 |
| POL-TST-004 | 추출 장치 할당 정책 | - |
| POL-TST-005 | Extraction Module Usage Setting | - |

- 화면 MD: Policy Setting 8개 (`screens/setting/`, 2.1 2차). Setting 페이지는 바 열이 여러 개라 가장 가까운 왼쪽 바로 영역을 정함 (`rules/figma-sync.md` 1절 보강)
- 팀원 Q6(Cut-off Time 이름·기본값)과 Q17(Prioritize Cost Reduction 등 메뉴 이름)은 화면으로 풀림
- 2부: Protocol Setting(팀원 POL-TST-05·06, Q19·Q20), Assay Pack Setting, Tube Setting, 조합 검사(팀원 POL-TST-01), Plate 바코드(팀원 POL-TST-07)

| # | 질문 | 출처 |
| --- | --- | --- |
| T1 | 검사 항목 30종, 조합 규칙은 Assay Pack 구조에서 오는 값. Assay Pack 명세 R06 캡처 받음 | POL-TST-010, `reference/customer/assay-pack/` |
| T2 | PCR Protocol Setting의 선택지: 화면은 "Cyclic-CMTA"(기본)와 "High-Purity Magnetic Bead Extraction". 두 번째는 추출 방식 이름이라 맞는지, 적용 대상은 Anyplex II STI, HPV 제품인지 | TI-STN-01 5 |
| T3 | General Setting의 Allow Protocol Changes Before Test(기본 On)가 Run 준비 단계의 Check Test Protocol 단계를 보이게 하는 설정인지 (반영 대기 추가할 것 5) | TI-STN-01 6-2, `policy/permission.md` 3절 |

## TST 2부: Protocol, Assay Pack, Tube Setting

| ID | 제목 | 이전 ID |
| --- | --- | --- |
| POL-TST-006 | Protocol Setting | 팀원 POL-TST-05 |
| POL-TST-007 | M9600 Extraction Protocol 설정 제약 | 팀원 POL-TST-06 |
| POL-TST-008 | Assay Pack 관리 | - |
| POL-TST-009 | Tube Setting | - |

- 화면 MD: Protocol 14개, Assay Pack 4개, Tube Setting 4개 (`screens/setting/`, 2.1 2차). IA의 Setting 화면 39개 모두 옮김
- 팀원 Q20(Heating Plate 번호)은 화면 문구로 풀림: 1, 2, 3, 6번
- 여러 화면이 삭제 확인에 Confirm_009(로컬 드라이브 경고)를 씀 → 각 화면 반영 대기 목록
- 남은 TST 재료: 조합 검사(T1, Test Order 화면과 함께 SMP 때), Plate 바코드 기준(팀원 POL-TST-07, Sample Tracking 화면과 함께 SMP 때)

| # | 질문 | 출처 |
| --- | --- | --- |
| T4 | Extraction Protocol에서 8번 Plate 자리를 Spin Tip 전용으로 제한하는지 (팀원 Q19) | 정책서 M9600 제약 |
| T5 | Protocol을 바꿀 수 없는 "Run 중"의 범위: Policy Setting처럼 장비 통합 상태가 Not Initialized, Ready일 때만 바꿀 수 있게 할지 | POL-TST-006, POL-TST-001 |
| T6 | Pre-Treatment Protocol Setting의 Sample Type은 10개(Raw_stool, Cary-blair, eNAT_stool, Fecal_swab, Surepath, Thinprep, Urine, Semen, Saliva, Sputum). 씨젠 검사 항목 원본의 Sample Type은 14개(`glossary/sample-types.csv`). 어느 목록이 맞는지 | TI-STN-03-01-02 |

## 밀린 질문 답변 1: ACC (2026-11-02)

| # | 답 | 반영 |
| --- | --- | --- |
| A1 | "각 문자 유형 최소 1자"는 비밀번호 조건. ID는 4~32자, a-z·0-9·_ -, 대소문자 구분 없음(소문자로 저장), 중복 불가 | POL-ACC-005 (팀원 Q4 해소) |
| A2 | 비밀번호는 영문 대문자·소문자·숫자 각 1자 이상. 특수문자는 써도 되지만 필수 아님. [Generate] 조건이 맞음 | POL-ACC-006 |
| A3 | 계정 잠금 시간은 5분 고정 | POL-ACC-007 |
| A4 | Session Timeout 기본 Off, 장비 통합 상태 Ready·Not Initialized일 때만 적용 | POL-ACC-008 |
| A5 | L-IOS 로그인 화면 [Shut Down]은 누구나. T-IOS 로그인의 [Exit]는 취소선으로 제거된 항목 | POL-ACC-004 규칙 5·6 |
| A6 | Email은 필수 아님, 입력하면 형식만 검증 | POL-ACC-009, POL-ACC-002 |
| A7 | 초기 비밀번호 [Cancel] → 로그인 화면, 다음 로그인 때 다시 Popup. 디스크립션에 담음 | POL-ACC-003 규칙 5, TI/LI-LOG-01-P 반영 대기 목록 |
| A8 | Admin에게 Service 계정 숨김, Service는 모두 봄, Service 계정 최소 1개, Admin은 다른 Admin 수정 가능, 자기 계정 삭제 불가. 알럿 추가, 고객 논의 | 임시 정책 PV-0002, Alert_047 (`policy/alert-catalog.csv`), CA-0003 |
| 추가 | 장비 통합 상태에 따라 Logout을 막을지 고객 논의 | CA-0004 |
| A8-2 | 관리자가 비밀번호를 다시 정하면 그 사용자는 다음 로그인 때 비밀번호를 바꿔야 하고, SMTP가 연동되어 있으면 새 비밀번호를 메일로 보냄 | POL-ACC-003 규칙 6·7, POL-SYS-003 |

## 취소선 확인 (2026-11-02)

- Figma에서 취소선이 그어진 글자는 제거된 항목임 (사용자 확인). 그동안 추출 스크립트가 취소선을 구분하지 못했음 → `tools/figma/extract-screen.js`에 `~~ ~~` 표시 추가, `rules/screen-spec.md` 3절에 규칙 추가
- 옮긴 화면 65개 프레임을 다시 검사해 12개 화면 MD에 "취소선(Figma에서 제거된 항목)" 줄을 넣고 반영 대기 목록을 고침
- 바뀐 판단: T-IOS Event History는 Status 변경과 일괄 Closed가 없음(취소선) → POL-EVT-002 고침, 권한 매트릭스 Status Control·Note Writing을 L-IOS만으로. EV1은 L-IOS [Mark all as Closed] 범위만 남음
- Instruments All Tab의 Error Rate·Run-time Info·Enable setting 설명은 취소선으로 이미 제거되어 있었음 (E6 표의 "All Tab 디스크립션에 Error Rate가 남아 있음"은 틀림. CA-0001은 그대로)

## 밀린 질문 답변 2: EVT, TST, COM, SYS (2026-11-02)

| # | 답 | 반영 |
| --- | --- | --- |
| EV1 | [Mark all as Closed]는 지금 검색 조건으로 불러온 목록의 모든 페이지에서 Open인 Event 전체 | POL-EVT-002 규칙 4, LI-EVT-P 반영 대기 목록 |
| EV2 | Description·Effect·Recommended Action 값은 고객이 개발사와 관리하는 엑셀을 따름. 저장소에서는 Event Code와 Scenario Code 관계만 정함 | POL-EVT-001 규칙 3·7 |
| T1 | 검사 항목 30종, 조합 규칙은 Assay Pack 구조에서 오는 값. Assay Pack 명세 R06 캡처 받음 | POL-TST-010, `reference/customer/assay-pack/` |
| T2 | PCR Protocol Setting 선택지는 Cyclic-CMTA와 End Point-CMTA (두 번째 줄은 설명). 제가 잘못 읽음 | POL-TST-001 규칙 7, TI-STN-01 |
| T3 | Allow Protocol Changes Before Test = Run 준비의 Check Test Protocol 단계를 쓸지. Off면 Apply한 Protocol을 쓰고 Step 4를 건너뜀 | POL-TST-001 규칙 8, 반영 대기 추가할 것 5 닫음 |
| C1 | 이번 버전은 6개 언어. 다시 그릴 때 다국어 디스크립션 추가 | POL-COM-004, `screen-fixes/README.md` 공통 항목, TI/LI-STN-02 반영 대기 목록 |
| S1 | LIS 설정과 Code Mapping은 CURECA마다. 상단 CURECA 선택으로 장비를 바꿔 보며, Dashboard(All)는 2대 이상 고객만 | POL-COM-005, POL-SYS-001 규칙 7, POL-SYS-002 규칙 6 |
| S2 | SMTP [Save] 범위는 화면 설계자와 팀 논의 | 협의 대기 PD-0002 |

**남은 질문**

| # | 질문 |
| --- | --- |
| C2 | 여러 대 CURECA일 때 Account Setting(계정), SMTP Setting, Profile, Assay Pack·Tube Setting처럼 T-IOS 전체에 하나만 있을 것 같은 설정도 상단 CURECA 선택에 따라 나뉘는지 |
| T4 | Extraction Protocol에서 8번 Plate를 Spin Tip 전용으로 제한하는지 (팀원 Q19) |
| T5 | Protocol을 바꿀 수 없는 "Run 중"의 범위: Policy Setting처럼 Not Initialized·Ready일 때만 바꿀 수 있게 할지 |
| T6 | Pre-Treatment Protocol의 Sample Type 10개와 씨젠 원본 14개 중 어느 목록이 맞는지 |
| T1-a | HPV, RTI 검사군 안에서도 조합 검사를 할 수 있는지 (8월 정책서는 STI-12, HPV 28 단독) |
| T1-b | 조합한 검사 항목들이 모두 그 Sample의 검체 타입을 지원해야 하는지 (Sample 하나에 검체 타입 하나) |

## 밀린 질문 답변 3 (2026-11-02)

| # | 답 | 반영 |
| --- | --- | --- |
| C2 | CURECA는 원래 3개의 도메인이며 서로 다른 객체. 모든 설정이 장비마다 따로 있음 | POL-COM-005 규칙 5, POL-ACC-001 규칙 3 |
| T4 | Plate 8 Spin Tip 전용. 모든 Plate는 최초 설정대로 고정(고객 요청): 1 LB, 2 WB1, 3 WB2, 4 MB, 5 Not Used, 6 EB, 7 Not Used, 8 Tip | POL-TST-007 규칙 1·2, TI-STN-03-02-02-M 반영 대기 목록 |
| T5 | Protocol도 Policy Setting과 같게 장비 통합 상태가 Ready·Not Initialized일 때만 바꿀 수 있음. 출처: 정책서_Test Policy 프레임(1317:107989) | POL-TST-006 규칙 3, TI-STN-03-01 반영 대기 목록 |
| T6 | 검체 타입 14개(검사군별 목록의 중복 제거)가 맞음. `glossary/sample-types.csv`와 같음 | TI-STN-03-01-02 반영 대기 목록 |

- 남은 화면 MD화 완료: Information 8, Run 6, Quick Start 1, Test Management 4, Sample Tracking 16, Inventory 16, Statistical Analysis 17. 정책 재료와 질문은 `background/screen-md-notes.md`
- T1-a: 고객 논의 CA-0005. T1-b: Sample 1개 = 검체 타입 1개, 조합한 검사 항목은 모두 그 검체 타입 지원 (POL-TST-010 규칙 3). C2 계정 부분은 고객 논의 CA-0006 (지금 정책은 CURECA별 계정)
- 밀린 질문은 모두 답변됨 (고객·팀 논의 대상 제외)

## SMP (Sample·검사 진행)

### 쓴 정책 (2026-11-02)

| ID | 제목 | 이전 ID (팀원) | 비고 |
| --- | --- | --- | --- |
| POL-SMP-001 | Sample 상태와 전환 | POL-SMP-01·02 | Not Tested 정의 사용자 결정 반영, 반영 대기 11 닫음 |
| POL-SMP-002 | 검사 시작·종료 시각 | POL-SMP-04 | 예외: PCR Plate Start 기준 (SM6) |
| POL-SMP-003 | 재검사 | POL-SMP-05 | |
| POL-SMP-004 | Batch와 Batch 카드 | POL-SMP-06·11 | 반영 대기 14 닫음 (규칙 4) |
| POL-SMP-005 | Sample 단위와 Product 단위 표기 | POL-SMP-07 | |
| POL-SMP-006 | 검사 시작 후 오더 취소 | POL-SMP-08 | |
| POL-SMP-007 | Run 준비와 시작 조건 | POL-SMP-09 | 예외: Waste·Insufficient로 Run Start를 막는지 (SM2) |
| POL-SMP-008 | STAT 검사 | POL-SMP-10 | 반영 대기 15 닫음 |
| POL-SMP-009 | Today’s Orders와 검사 진행률 | 없음 (화면 디스크립션) | |

- 팀원 POL-SMP-03 (Plate 상태값)은 SM1 답을 받고 POL-SMP-010으로 씀
- 관련 화면 MD의 "관련 정책"을 SMP ID로 채움 (Test Management, Sample Tracking, Run, Quick Start, Dashboard, Dashboard(All), Information Report)

### 판정 대기

| # | 질문 | 근거 |
| --- | --- | --- |
| SM1 | Plate 상태 필터(96-DWP, PCR Plate)에 Not Tested가 있는데, `glossary/status-values.csv`의 Plate 상태는 Running, Completed, Failed뿐. Plate에도 Not Tested가 있는지 | TI-SPT-02·03 화면, 팀원 POL-SMP-03 |
| SM2 | Waste Bin/Bottle이 Full·Almost Full이거나 Consumable·Reagent가 Insufficient이면 [Run Start]를 막는지, 경고만 하는지 | LI-RUN-03·04 디스크립션에 막는 조건이 없음 |
| SM3 | Check Test Protocol에서 고른 Protocol은 그 Run에만 쓰이는지, Protocol Setting의 Applied도 바뀌는지 | LI-RUN-02-01 |
| SM4 | Quick Start는 Check test protocol에 Applied Protocol만 보여 줌. Allow Protocol Changes Before Test가 On이어도 Quick Start에서는 바꿀 수 없는지 | LI-QUK 디스크립션 5, 반영 대기 목록 7 |
| SM5 | LI-QUK는 Total Sample·STAT Sample을 "트롤리에 도킹된" Sample로 정의함. Total Sample에 STAT Storage Sample도 합치는지, STAT Sample은 STAT Storage에 넣은 Sample 수인지 | LI-QUK 디스크립션 1, LI-RUN-01 |
| SM6 | PCR Plate의 Start Date/Time 기준: PCR Setup에서 읽은 시점인지, PCR Module에 들어간 시점인지 | 8월 정책서는 96-DWP만 정의 |
| SM7 | Run Report(Information > Report)는 T-IOS에서만 보는지, 권한(User Type) 제한이 있는지 | TI-INF-03-01, `policy/permission-matrix.csv`에 Report 행 없음 |

### SMP 답변 (2026-11-02)

| # | 답 | 반영 |
| --- | --- | --- |
| SM1 | Plate는 Running, Completed, Failed 3개 상태만. Status 필터에서 Not Tested를 뺌 | POL-SMP-010 (새로 씀, 이전 ID 팀원 POL-SMP-03), TI-SPT-02·03, LI-SPT-02·03 반영 대기 목록 |
| SM2 | [Run Start]를 막는 것은 LI-RUN-P 항목뿐. Run 준비에 들어가면 재고·Waste 상태와 관계없이 [Run Start] 가능. 부족한 항목은 그 단계에 이르렀을 때 Error | POL-SMP-007 규칙 4, LI-RUN-02·03·04 반영 대기 목록 |
| SM3 | 고른 Protocol은 그 Run에만 적용. Applied는 바뀌지 않음 | POL-SMP-007 규칙 5, LI-RUN-02-01 반영 대기 목록 7 |
| SM4 | Quick Start는 기본값(Applied)으로만 Run. On이어도 고를 수 없음 | POL-SMP-007 규칙 8, LI-QUK 반영 대기 목록 7 |
| SM5 | 팀원과 논의 | `pending/PD-0003.md`, LI-QUK 반영 대기 목록 6, TI-INF-03-02 반영 대기 목록 11 |
| SM6 | 모든 단계 같은 기준: Module이 Plate를 넘겨받아 그 Plate의 Barcode를 읽은 시점 | POL-SMP-002 정의·규칙 3, TI-SPT-03·LI-SPT-03 반영 대기 목록 |
| SM7 | 이번에 추가된 메뉴. T-IOS에서만, 권한 제한 없이 모두 봄 | POL-SMP-004 규칙 6, `policy/permission-matrix.csv` Information > Report, TI-INF-03-01·02 반영 대기 목록 2 |

- SM2-a (2026-11-02 사용자 전달, 최신 정책): 만료 Reagent로 Run Start를 막던 제약은 없어짐. Instrument가 Reagent를 쓰기 직전 Barcode로 Expiration Date를 확인해 지났으면 자동 폐기. 반영: POL-SMP-007 규칙 3, Alert_002 삭제 (관리 페이지 반영 필요), LI-RUN-03 반영 대기 목록 12·13, LI-QUK 반영 대기 목록 14, 반영 대기 고칠 것 11

## STA (Statistical Analysis)

### 쓴 정책 (2026-11-02)

| ID | 제목 | 이전 ID (팀원) | 비고 |
| --- | --- | --- | --- |
| POL-STA-001 | Statistical Analysis 화면 구성과 접근 | 없음 | 권한표에 Error Rate Trend 행 추가. 예외 ST1 |
| POL-STA-002 | 통계 조회 기간 (Date Range) | POL-STA-01 일부·02·03 | 예외 ST2 |
| POL-STA-003 | 통계 필터, Legend, Table, Export 공통 | POL-STA-01 일부 | 예외 ST3, ST4, ST11 |
| POL-STA-004 | Test Analytics 지표 산출 | 없음 | 예외 ST5, ST6 |
| POL-STA-005 | Test Forecasting | POL-STA-01 일부 | 예외 ST7 |
| POL-STA-006 | Instrument, Inventory, Event 통계 산출 | 없음 | 예외 ST8, ST9, ST10 |

- POL-EQP-005, POL-EQP-010, POL-EVT-001, POL-TST-003의 `cids`에 Statistical Analysis 화면을 더함
- Statistical Analysis 화면 17개의 "관련 정책"을 채움
- ST1 ~ ST11 답변은 2026-11-03 전달 예정

### 판정 대기

| # | 질문 | 근거 |
| --- | --- | --- |
| ST1 | 메뉴 구조와 CID: IA는 Instrument·Inventory·Event 통계를 Test Analytics 아래에 두고, Figma 경로는 Statistical Analysis > Instrument / Inventory / Event. TI-STA-05(Test Forecasting)와 TI-STA-05-01·05-02(Run-time)의 CID 계층이 겹침. IA 화면 이름 2개가 한국어(소모품 및 시약 사용량, Event 통계) | `ia/ia-screens.csv`, TI-STA-05-01 반영 대기 목록 1·2 |
| ST2 | Monthly → Daily 전환에서 종료월이 당월이면 "종료월 말일"이 미래가 됨. 어제를 기준으로 거꾸로 90일을 세는지 | 8월 정책서 "날짜 연동 규칙", 팀원 Q10 |
| ST3 | Test Analytics Legend와 Forecasting Product 목록이 10개(RP1 ~ STI-12) 고정인지, 등록된 검사 항목 전체(30개)인지 | TI-STA-01-01 6-2, TI-STA-05 1, `glossary/test-items.csv` |
| ST4 | "마스터 코드 순서"가 무엇인지 (검사 항목 목록 순서, Module 목록 순서?). TI-STA-01-01 6-2는 COMM-4-a를 참조 | TI-STA-01-01 2, 6-2 |
| ST5 | Test TAT가 평균인지 합계인지, 시작·끝 시점(예: Sample Start Date/Time ~ End Date/Time, POL-SMP-002). 검사 건수에 넣는 Sample 상태(Completed만, Failed 포함?) | TI-STA-03-01 0·2, 03-02 2-2 |
| ST6 | Test Cost 평균 비용 계산식. 단가가 빠진 검사 항목은 차트에서 빼는 것과 Legend 칩 비활성을 함께 하는지 | TI-STA-04-01 0·6-2, 반영 대기 목록 5·6 |
| ST7 | Forecasting 2 Weeks의 예측 기간이 15일인지 14일인지. 예측 계산 방식(모델) | TI-STA-05 1, 1-1 |
| ST8 | Error Rate 총 횟수: 화면은 "DWP 입고마다 +1", POL-EQP-010은 Module마다 다름(Trolley, Rack, Plate). Error Rate Table의 Total 행은 무엇인지 | TI-STA-06-01 0, 06-02 2-3 |
| ST9 | Event Trend가 Event Status(Open, Closed)와 관계없이 세는지, Error·Warning을 나눠 보여 주는지, Module 기준일 때 Module이 없는 Event(System 등) 처리 | TI-STA-08-01 0, 5 |
| ST10 | Usage & Cost Trend에서 단가가 없는 Consumable·Reagent 처리. 사용량 단위 "(Unit : count)"인데 값은 "sets(ea)" | TI-STA-07-01 5, 반영 대기 목록 4·6 |
| ST11 | Table 표시: 0과 '-'를 나누는 조건, Test Ratio 소수점 자리·반올림, 통화가 KRW일 때 소수점 표기 | TI-STA-01-02 반영 대기 목록 1, 02-02 반영 대기 목록 1, 04-02 반영 대기 목록 1 |

## INV (Inventory)

### 쓴 정책 (2026-11-03)

| ID | 제목 | 이전 ID (팀원) | 비고 |
| --- | --- | --- | --- |
| POL-INV-001 | Inventory 화면 구성과 데이터 기준 | 없음 | 예외 IV8 |
| POL-INV-002 | Remaining Qty, Capacity, 사용량 집계 | 없음 | 예외 IV5 |
| POL-INV-003 | Required Qty와 재고 상태 | POL-RGT-09 | 예외 IV1, IV2, IV3, IV7 |
| POL-INV-004 | Reagent Expiration Date, 재사용, 폐기 | POL-RGT-01·02·03·08 | 예외 IV4, 최대 사용 횟수 261102 |
| POL-INV-005 | Waste Bin/Bottle 상태와 Fill Level | 없음 | 예외 IV9 |
| POL-INV-006 | Usage History와 품목 In/Out 시점 | POL-RGT-06 | 예외 IV5, IV6, IV10 |

- 팀원 POL-RGT-04(동일 Lot), 05(전처리 용기별), 07(PCR IC)은 Material Setup과 함께 MAT 정책에서 씀
- 씨젠 소모품·시약 261102, 검사 항목 261102를 받아 261022와 비교함: `reference/updates/2026-11-03_소모품·시약_검사항목.md`
- LI-RUN-03 반영 대기 목록 13, LI-QUK 반영 대기 목록 14는 IV4 답을 기다리도록 고침

### 판정 대기

| # | 질문 | 근거 |
| --- | --- | --- |
| IV1 | 재고 상태 정의: 화면은 Insufficient "재고 0", Low "1개 이상 부족". 상태값 표·8월 정책서는 Insufficient "부족하여 가동 중단", Low "필요 수량 미만이나 가동 가능" | TI-IVT-03-T 2-6, `glossary/status-values.csv` |
| IV2 | Reagent에도 재고 상태(Sufficient, Low, Insufficient)를 쓰는지. 상태값 표의 재고 상태 대상은 Consumable뿐 | TI-IVT-04-T, LI-RUN-03 |
| IV3 | Required Qty·재고 상태를 보여 주는 조건에 Partial Running을 넣는지 (Consumables·Reagents Tab은 넣고 Summary는 뺌) | TI-IVT-01-T 1, 03-T 2-5 |
| IV4 | 만료 Reagent 처리: 8월 정책서는 Dx 시스템 자동 폐기, Prep 시스템은 Trolley로 반환. 2026-11-02 결정(쓰기 직전 Barcode 확인 후 자동 폐기)이 Prep에도 적용되는지 | 8월 정책서 "시약 폐기", SM2-a |
| IV5 | 사용 후 Storage로 반환할 때도 Usage History에 남기는지 (Usage History는 폐기 시점만) | TI-IVT-03-T 2-4 정책 안내, TI-IVT-06-T 0 |
| IV6 | LI-IVT-06-T(Ver 0.6, Usage 기준 "내부 장치로 이동되는 시점")를 T-IOS Ver 2.1.11 기준으로 맞추는지 | LI-IVT-06-T |
| IV7 | Summary 요약의 "Empty"가 별도 상태인지 (카드는 Insufficient·Low) | TI-IVT-01-T 1-1, 1-5 |
| IV8 | Item details Popup 기준 프레임(Inventory 페이지 2.1.04 / Run 페이지 2.1.11)과 CID 표기(-T-P / -T) | LI-IVT-03-T-P 반영 대기 목록 1 |
| IV9 | Liquid Waste Bottle만 있는 Module도 Waste Bin/Bottle Tab에 넣는지. 비움 처리가 Material Setup(Console Mode)으로 옮겨진 뒤 Main Mode·T-IOS에서는 어디서 비우는지 | TI-IVT-05-T 2·3·3-3 |
| IV10 | Export 파일 형식 (Usage History는 T-IOS .csv?, L-IOS ".CVS", 다른 메뉴는 엑셀) | TI-IVT-06-T 3, `background/screen-md-notes.md` |
| IV-a | 261102 반영: PCR 구성품 최대 사용 횟수 5 → 3, IC 수량 단위 rxns/set → rxns/tube, 전처리 Tub rxns/tub → rxns/set, RV Master 제품 코드를 기준 자료에 반영하고 품목 표를 만들지. 4X VS MOM만 rxns/tube로 바뀐 것은 원본 오류인지 | `reference/updates/2026-11-03_소모품·시약_검사항목.md` |

### INV 답변 (2026-11-03)

| # | 답 | 반영 |
| --- | --- | --- |
| IV1 | 화면 문구와 상태값 정의는 같은 뜻 (정의와 예시). Insufficient = 재고 0이라 Error가 생겨 가동 중단, Low = Run에 필요한 수량 중 1개 이상 부족 | `glossary/status-values.csv` 재고 상태 설명, POL-INV-003 정의 |
| IV2 | Consumable과 Reagent는 같은 재고 상태를 씀. 대화에서는 둘을 함께 "소모품"이라 부르기도 함 | 상태값 표 대상 Consumable / Reagent, `glossary/terms.csv` Consumable·재고 상태 |
| IV3 | Remaining Qty는 품목이 있으면 늘 보여 줌. Required Qty는 Inbound Trolley 도킹 또는 Run Start 뒤 Batch가 끝나기 전(Partial Running·Error 포함)이면 보여 줌, 둘 중 하나 | POL-INV-003 규칙 1~3. 재고 상태(Status)의 노출 조건은 IV3-a로 확인 |
| IV4 | Prep도 쓰기 직전에 확인. 만료 Reagent는 Dx는 폐기, Prep은 쓰지 않고 Trolley로 반환. Prep에서 쓴 품목은 Tip·Stool Swab을 빼고 Trolley로 반환되어 사용자가 폐기 | POL-INV-004 규칙 4·5, POL-SMP-007 규칙 3, LI-RUN-03·LI-QUK 만료 안내 문구 유지 |
| IV5 | Usage History는 폐기할 때만 기록 (사용 완료, 사용 횟수 초과, Expiration Date 경과) | POL-INV-002 규칙 6, POL-INV-006 규칙 1 |
| IV6 | L-IOS도 T-IOS(Ver 2.1.11) 기준 | POL-INV-006 규칙 7, LI-IVT-06-T 반영 대기 목록 1·2 |
| IV7 | Empty는 예전 값, Insufficient로 바뀜 | POL-INV-003 규칙 7, TI/LI-IVT-01-T 반영 대기 목록 2, `glossary/terms.csv` 재고 상태 쓰지 않는 표현 |
| IV8 | Item details Popup의 주인은 Inventory, Run에서 같은 Popup을 씀 | POL-INV-001 규칙 8, LI-IVT-03-T-P·04-T-P 반영 대기 목록 |
| IV9 | Waste Bin/Bottle은 두 Unit 종류를 함께 부르는 이름, Liquid Waste Bottle만 있는 Module도 포함. T-IOS는 관제용이라 비움 기능 없음. 비움은 Material Setup에서 | POL-INV-005 규칙 5~7, TI-IVT-05-T·LI-IVT-05-T 반영 대기 목록 |
| IV10 | Run Report를 빼고 모든 파일은 .csv로 받음 | POL-COM-006 (새로 씀), POL-SYS-004 규칙 2, POL-STA-003 규칙 7, Export가 있는 화면 32개 반영 대기 목록 |
| IV-a | 261102 반영 (2026-11-03) | `glossary/test-items.csv` RVM 코드, 인용 버전 261102, 품목 표 `glossary/consumables.csv`·`glossary/pcr-reagents.csv`, POL-INV-004 최대 사용 횟수. 4X VS MOM은 원본 오타로 보고 set (MOM은 Set으로 입고) |

- IV3-a: Status는 Run 대비 재고 상태. Required Qty와 같은 조건에서만 보여 주고, 아니면 둘 다 '-' (POL-INV-003 규칙 2·3)
- IV9-a: Empty Waste Bin은 우선 Console Mode에서만. Main Mode 제공은 고객 논의 CA-0007 (POL-INV-005 규칙 5)
- IV10-a: Test Order Import는 .csv와 엑셀 모두. 고객 논의 CA-0008 (POL-COM-006 규칙 5)
- Log Export(System Setting)는 Service가 장비 파악에 쓰는 자료라 형식·구성을 정하지 않고 개발에서 묶어 내보냄. 디스크립션에는 내려받는다고만 적음 (POL-SYS-004 규칙 2, POL-COM-006 규칙 2)
- 2026-11-03 사용자 설명으로 POL-INV-007(PCR Reagent 구성과 입고 단위) 새로 씀: 한 박스 구성품끼리만 사용, IC는 Tube 단위로 Prep 시스템 Trolley, 나머지는 Set으로 Socket에 담아 Cold Storage, MOM은 반드시 Set. IC의 Lot 구성 절차는 MAT 정책에서

### STA 답변 (2026-11-03)

| # | 답 | 반영 |
| --- | --- | --- |
| ST1 | 중메뉴 Test Analytics / Instrument / Inventory / Event (IA 수정 필요). Test Forecasting CID는 TI-STA-09로. 사용량 통계 메뉴 이름은 Inventory | POL-STA-001 규칙 1·예외, `ia/change-requests.md` 1~4 |
| ST2 | Monthly → Daily 종료일은 종료월 말일과 어제 중 이른 날짜, 90일(종료일 포함)을 넘으면 종료일 기준 역산 | POL-STA-002 규칙 3·4 |
| ST3 | Legend·Product 목록은 Assay Pack으로 등록된 검사 항목 기준 (30개 모두일 수 있음) | POL-STA-003 규칙 9, POL-STA-005 규칙 8 |
| ST4 | 정렬은 Common UX 규칙, 없으면 오름차순 ("마스터 코드 순서" 지움) | POL-STA-003 규칙 10 |
| ST5 | TAT는 합계 지표 | POL-STA-004 정의. 시작·끝 시점과 셀 Sample 상태는 ST5-a로 남김 |
| ST6 | 평균 비용 계산식은 개발 관리. 단가 빠진 항목은 차트 제외 + Legend 칩 비활성 | POL-STA-004 규칙 5·6 |
| ST7 | 2 Weeks는 15일 | POL-STA-005 규칙 7. 예측 모델은 ST7-a로 남김 |
| ST8 | Error Rate는 Module별 기준으로 셈, 선택 기간의 Legend별 누적 Error Rate | POL-STA-006 정의·규칙 6. Error Rate Table Total 행 산출은 확인 필요 |
| ST9 | Event Status와 관계없이 셈, Error·Warning 합계, Module 기준이면 Module 없는 Event 제외 | POL-STA-006 정의·규칙 5 |
| ST10 | 단가 없는 품목은 Legend 비활성(선택 불가), 단위 count (세부 단위는 Tooltip·Table) | POL-STA-006 규칙 7·8 |
| ST11 | 0은 실제 0, '-'는 데이터 없음. Ratio는 반올림 정수 %, 0% 초과 0.5% 미만은 "<1%". KRW는 소수점 없음 | POL-STA-003 규칙 6, POL-STA-004 규칙 2·정의 |

- 통계 화면 17개 반영 대기 목록을 "디스크립션에 넣음 / 화면 예시도"로 고침
- ST5-a: TAT는 Sample Start ~ End Date/Time의 합계, 검사 건수는 오더 기준으로 Completed·Failed 모두 (POL-STA-004 정의) / ST7-a: 예측 모델은 개발 관리 (POL-STA-005 규칙 9) / ST8-a: Error Rate Total 행은 선택 Module 전체의 실패 횟수 합 ÷ 전체 횟수 합 (POL-STA-006 규칙 9). 관련 화면 8개 반영 대기 목록 고침. STA 질문은 모두 답변됨

## MAT·LOD (Material Setup)

- 2026-11-03 시작. 기준: 작업방 "SH2-MS-얼럿 수정 테스트" 페이지 디스크립션 (화면 디자인은 Material Setup 2차 페이지와 같음), MS 알럿·컨펌 목록 `policy/alert-catalog-ms.csv`, 담당 기획자 적재 정책서 `reference/team/material-setup-20261102/`
- 화면 MD 53개 `screens/material-setup/`, 질문 원본 `background/screen-md-notes-ms.md`

### 답변 (2026-11-03)

| # | 답 | 반영 |
| --- | --- | --- |
| MS1 | Consumable Trolley 1F에는 반드시 빈 Tray를 넣어 구성함. Prep 시스템에서 쓰던 품목을 반환할 때 2~6F가 차 있으면 돌려놓을 곳이 없기 때문. 그래서 카운터 분모 6은 1F 빈 Tray를 포함함. 품목이 모자라 Run 중에 Trolley를 바꿀 수도 있어 늘 대비함 | LCR-02-02 반영 대기 목록, MAT 정책 |
| MS2 | Consumable Tray를 구성할 때 기준을 주려고 Sample Trolley를 고름. 고른 Trolley의 Sample 기준으로 필요한 Consumable·Reagent 개수를 계산해 보여 주고, 그걸 보고 Tray를 구성함 | LCR-01-01·01-03, PSI-01 반영 대기 목록, MAT 정책 |
| MS3 | PK Tube(Nucleic Acid Extraction 단계)와 IC(PCR Reagent 구성품)는 같은 박스 구성품끼리 짝지어 씀. PCR Reagent는 반드시, 추출 Reagent는 권고(짝 정보가 없으면 그냥 써도 됨). 그래서 PK·IC는 Barcode를 읽어 Socket에 구성해야 Instrument가 같은 박스 것과 위치를 알고 꺼내 씀. Dx Storage는 Trolley보다 넣을 수 있는 수가 적어, Prep 시스템이 분주 전에 Dx 시스템에 Storage의 Reagent 정보를 받아 쓸 수 있는 PK·IC를 찾음. Load PK/IC Tubes는 Consumable Trolley에 넣기 전에 Socket에 Tube를 읽어 미리 구성하는 단계 | MAT 정책, POL-INV-007 |
| MS5 | 메뉴 이탈 컨펌(MS_Confirm_024)은 모든 화면에 똑같이 들어감. 공통이라 디스크립션에서 빠진 것. 화면을 그릴 때 기본으로 넣음 | `screens/material-setup/_menu.md`, 모든 화면 반영 대기 목록 |
| MS6 | MM Tube는 모두 같은 Tube이고 위치값이 필요 없어 Remove가 의미 없음. Socket을 꽉 채워 Storage에 넣는 것이 정책 | LMM 반영 대기 목록, MAT 정책 |
| MS7 | MM Tube는 Socket 하나에 14개가 맞음. 씨젠 문서(28 ea/rack)가 틀림 | `glossary/consumables.csv` MM Tube, MAT 정책 |
| MS8 | (질문) 2차 페이지에도 Loading이 없는지 → 기획 프레임은 없고 1280 프레임만 있음 (`LI-TSS-PSI-01-1280_Loading` 5341:445958 등) | 아래 다시 물어볼 것 |
| MS9 (일부) | Empty Waste Bin의 Door Control Popup: Waste Bin이 서랍형이 아니라 유리 Door 안에 있는 경우가 있어 필요해짐. Instrument의 Door Control과 같은 UI를 쓰되, Waste Bin이 있는 Door만 골라 보여 줌 | WBM-P 반영 대기 목록, MAT 정책 |
| MS11 | 팀 논의 | `pending/PD-0004.md` |
| MS12 | 고객 논의 | `customer-agenda/agenda.md` CA-0009 |
| MS4 | MS_Alert_001은 명시한 곳에만 적용: MS 목록 Case에 적힌 경우(하이라이팅·MM Tube 화면의 하위 항목 외 스캔, 적재 가이드의 Trolley·Tray 전체 Barcode, 소모품 Tray 필요 목록 외, DX 빈 PCR socket)와 디스크립션에 있는 곳. 첫 스캔 화면 등에는 넣지 않음 | `policy/alert-catalog-ms.csv` 확인할 점, 화면 반영 대기 목록 13개 |
| MS10 | Guide Popup이 떠 있어도 스캔 가능 | LCR-01-03-01 반영 대기 목록 3 |
| MS1-a | Tub는 어느 floor에 있든 모두 Cap 보충 목록에 나옴 (1F 반환 Tray 포함) | DXI-09 반영 대기 목록 5 |
| MS6-a | DXI-03(MB Tube)·DXI-05(Tip/PCR Plate) 모두 Remove 없음. MB Tube Storage는 안의 BCR 장치가 Barcode를 읽어 위치를 알고 가져감. Tip·PCR Plate는 같은 재료이고 순서가 없어 지울 의미가 없음 | DXI-03·05 반영 대기 목록, MAT 정책 |

### 다시 물어볼 것

- MS9 (나머지): Empty Waste Bin·RGE의 예전 알럿 ID(Confirm_021, Alert_034, Alert_027)를 MS 목록에 넣을지 (사용자가 다시 확인하기로 함)
- MS8: Loading 화면을 따로 둘지, [OK] 버튼을 둘지
- MS3-a: 한 G10 Socket에 PK와 IC가 함께 들어갈 때 칸 배정 규칙, 디폴트 카운터 "0/M"과 "0/48"

### 쓴 정책 (2026-11-03)

| ID | 제목 | 이전 ID (팀원) |
| --- | --- | --- |
| POL-MAT-001 | Material Setup 구성과 적재 계층 | POL-MAT-01 |
| POL-MAT-002 | 변경 예정 상태와 [Done] 저장 | POL-MAT-05 |
| POL-MAT-003 | 신규 작업 컨펌 (용도 전환, 위치 교체, 새 위치로 옮김) | 없음 (담당자 적재 정책서) |
| POL-MAT-004 | Remove | 없음 |
| POL-MAT-005 | 스캔 순서와 하이라이팅 적재 | 없음 |
| POL-MAT-006 | Sample 적재 (Socket, Tray, Trolley) | POL-MAT-02 |
| POL-MAT-007 | Consumable·Reagent 적재 (Tray, Trolley) | 없음 |
| POL-MAT-008 | PK/IC Tube, PCR Reagent, MM Tube Socket 구성 | POL-MAT-03·04 |
| POL-MAT-009 | Group Lots (Lot 구성) | POL-RGT-04 일부·07 |
| POL-MAT-010 | Carrier 데이터 리셋 | POL-MAT-06 (반영 대기 13 닫음) |
| POL-LOD-001 | Trolley 도킹과 교체 | POL-DCK-01·05·06 |
| POL-LOD-002 | Load Materials (Dx Storage 적재) | POL-DCK-02 |
| POL-LOD-003 | STAT Storage | POL-DCK-04 |
| POL-LOD-004 | Cold Storage PCR Rack, Sealer Film, Cap 보충 | POL-DCK-03 |
| POL-LOD-005 | Empty Waste Bin (비움 처리) | 없음 |

- 팀원 POL-RGT-05(전처리 용기별 Reagent 사용)는 POL-INV-004 규칙 10으로 옮김
- Material Setup 화면 51개(RGE 제외)와 Run·Inventory 관련 화면에 MAT·LOD 정책을 연결함

### 새 질문 (정책 쓰며 나옴)

- MS13: 8월 정책서 "PCR 전용 소켓은 인식하는 시점에 기존 데이터가 리셋되고 신규 정보로 업데이트"는 담당자 적재 정책서 흐름(PCR box가 있는 Socket에 이어서 적재, 용도가 다를 때만 전환 컨펌)과 다름. 8월 문장을 지우는지 (POL-MAT-010 예외)
- MS14: 8월 정책서는 STAT Storage 입고 대상에 Sample Socket 외에 Consumable·Reagent, PK Tube, IC를 넣고 STAT의 Consumable·Reagent를 먼저 소모한다고 함. 지금 화면(LI-TSS-DXI-01)은 Sample Socket만 받음. STAT Storage는 Sample Socket만 받는지 (POL-LOD-003 예외)

### 답변 (MS13, MS14, 2026-11-03)

- MS13: 8월 문장은 지우는 쪽이 맞으나, PCR Reagent는 1세트를 넣고 나중에 다시 작업할 수 있어 팀원과 내부 논의 (`pending/PD-0005.md`)
- MS14: STAT은 이제 Sample만 넣도록 정책이 바뀜 (POL-LOD-003 규칙 1, 반영 대기 고칠 것 13)
