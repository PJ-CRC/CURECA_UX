# User Type 권한

> 상태: v1.0 초안 완료 (2026-10-30). 30행 모두 확정. 데이터: [permission-matrix.csv](permission-matrix.csv). 출처: 정책서_2026.08.28, 작업방 화면 디스크립션, Common UX COMM-3-a(1/2), `background/rules-review-draft.md` 권한 매트릭스 초안

## 1. User Type

| User Type | 누가 갖나 | 권한 | 계정 생성 |
| --- | --- | --- | --- |
| Service | 장비를 설치·셋팅하는 고객사 직원 | 숨겨진 기능까지 모든 메뉴 | 최초 설치 때는 Service 계정만 있음. 설치 후 고객사에서 고객용 Admin 계정을 만들어 전달 (User 계정도 만들 수 있음) |
| Admin | 장비를 구매한 기관의 관리자 | 운영 관리 메뉴 (Protocol 셋팅, 계정 셋팅 등) | Admin·User 계정 생성 (신규 계정 기본값 User, 둘 중 하나 선택) |
| User | 구매 기관에서 검사를 하는 사용자 | 권한이 부여된 기본 메뉴와 기능만 | 없음 |

- User Type별 메뉴 접근을 화면에서 바꾸는 기능은 없습니다.
- T-IOS에서 만든 계정을 T-IOS와 L-IOS에서 함께 씁니다.

## 2. 노출 규칙

메뉴와 버튼은 아래 세 가지가 모두 허용할 때만 보입니다.

1. **User Type 권한:** [permission-matrix.csv](permission-matrix.csv)
2. **Service Mode** (L-IOS만): [service-mode-matrix.csv](service-mode-matrix.csv)
3. **제품 제한:** T-IOS에서만 설정·변경하고 L-IOS에서는 View만 되는 기능, T-IOS 전용 메뉴 (matrix의 "제품 제한" 칸)

## 3. 요약 (2026-10-30)

- **모든 User Type:** Event History (Status Control, Note Writing 포함), Run의 Check Test Protocol 단계, Quick Start, Test Management, Sample Tracking, Instrument Door Control, Inventory, Information > Program
- **Service와 Admin (User 제외):** Setting > Policy Setting, Protocol Setting, System Setting, Account Setting, SMTP Setting
- **Service만:** Setting > Tube Setting, Assay Pack Setting, Policy Setting의 NC/PC Dispensing Order·Sample Dispensing Options 영역, Instrument의 Error Rate 표시, [Exit]
- **Check Test Protocol 단계:** User Type과 관계없이 모두 쓸 수 있습니다. 다만 이 단계를 Run 준비 단계에 넣을지는 Setting에서 정하며, 사용으로 설정했을 때만 단계에 나옵니다. 이 설정은 Setting에 들어갈 수 있는 Service와 Admin만 바꿀 수 있습니다.
- **System Setting:** Session Timeout 등 하위 설정을 따로 나누지 않고 System Setting 전체(All)로 봅니다.

## 4. matrix 읽는 법

- O: 허용, X: 허용 안 함, 미정: 아직 정의 없음
- 상태 칸: 확정(근거 있음) / 추정(근거가 약하거나 문맥으로 판단) / 미정
- Claude는 "추정"과 "미정" 칸을 근거로 화면을 그리지 않고 질문으로 남깁니다(헌법 7조).

## 5. 출처끼리 맞지 않는 것

| # | 내용 | 처리 |
| --- | --- | --- |
| 1 | 정책서는 "Admin은 Setting 접근 불가"라고 쓰지만, 화면은 Admin이 계정 생성·SMTP·Session Timeout을 함. | 2026-10-30 결정: Admin은 Tube Setting, Assay Pack Setting을 뺀 Setting 하위 메뉴를 씀. 정책서 정제 때 정정 |
| 2 | 종료 옵션: 정책서는 Service·Admin이 프로그램 종료 가능, Common UX는 Service만 [Exit] | 채팅 검토 결정: Common UX가 최신 |
| 3 | 정책서는 "Service 계정으로 접속해 Admin 또는 User 계정 생성", Login 화면 흐름에는 "프로그램 초기 세팅 Flow: 최초 Admin 계정 생성", "Admin 계정 공유"가 있음 | 2026-10-30 확인: 서로 맞음. 최초 설치 때는 Service 계정만 있음. Service User가 고객사에서 고객용 Admin 계정을 만들어 주고, 고객은 그 Admin 계정으로 로그인함. Login 화면 흐름도는 이 권장 흐름을 그린 것이며 강제 사항은 아님 |
| 4 | 화면 디스크립션은 Account Type, 사용자 권한, Service 계정 등으로 씀 | 용어집 표준어 User Type으로 씀 |
