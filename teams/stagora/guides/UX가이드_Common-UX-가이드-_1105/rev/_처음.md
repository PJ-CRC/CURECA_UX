# Common UX 가이드 _1105

UX AI TEST 파일의 **Common UX** 페이지(`355:53300`, Common UX 2.2 · V2.2.00 · 2026-10-30)를 기준으로 정리한 UX 가이드다. 화면을 설계하거나 기존 화면을 고칠 때 이 규칙을 따른다. 구성은 CURECA UX 가이드(`g20261028-brex-06-J003`)를 본보기로 했고, 1~4장은 그 가이드와 Figma 내용이 같아 같은 글을 쓰고 캡처만 새로 받았다. 5장 컴포넌트는 2.2 목차에 맞춰 **23개(5-a ~ 5-w)**로 새로 정리했다. 상태값 · 표기 정의는 씨젠이 공유하는 「CURECA 시스템 구성 요소 및 상태 정보」 문서를 최우선으로 한다.

> 왼쪽 목차는 Figma 문서의 목차(COMM-0)와 같은 구조다. 대분류를 누르면 그 아래 항목이, 항목을 누르면 세부 내용이 오른쪽에 나온다. 그림을 누르면 크게 볼 수 있다. 모바일(MO) 정의는 「6. Mobile」에 목록으로 정리했다.

### 프레임 구성

| 구분 | 크기 | 구성 |
|---|---|---|
| 표지 (`Cover`) | 1920 × 1080 | CURECA · Common UX |
| 변경 이력 (`Revision History`) | 1920 × 495 | 버전 · 변경날짜 · 기능 · 변경사항 · 페이지 · 담당자 (V2.2.00 · 26/10/30 · All) |
| 목차 (`COMM-0`) | 1920 × 1295 | 대분류 1~5와 각 상세 프레임 CID · 이름, 기존 번호 |
| 대분류 표지 (`COMM-1` ~ `COMM-5`) | 1920 × 1080 | `Title`(Common UX · 대분류명 · 번호) + `Items`(하위 CID · 이름) |
| 상세 프레임 (`COMM-1-a` …) | 폭 1920, 높이는 내용에 맞춤 | `Header` + `Body` |
| 컴포넌트 (`P-Components (PC)`) | 7360 × 25548 | PC 컴포넌트 모음(Navigation · Status · Button · Input · List · Overlay · Feedback · Icon) |
| 모바일 (`M-COMM-*`, `Connon UX (Mobile)` 섹션) | 1920 × 내용 | MO 목차 · MO 정의 화면 |

- **Header 항목**: 대분류(예: `5. Component`) · 제목(예: `5-a. Accordion`) · 기존 번호(예: `기존 COMM-5-a`) · 한 줄 설명(「…합니다.」)
- **Body**: `Type n` 블록마다 예시 그림 + 「상태 · 정의 · 동작 · 조건 · 크기」 표 + 「번호 · 영역 · 동작」 표.
- 한 주제가 길면 `(1/2)`, `(1/4)`처럼 나눠 프레임을 이어 붙인다.

## 0. 문서 구성 (목차)

![COMM-0 목차](images/comm-0.png)
*COMM-0 · 목차 (V2.2.00, 2026-10-30)*

문서는 5개 대분류로 구성한다. 대분류마다 표지 프레임 1장과 상세 프레임이 이어진다.

| 대분류 | 표지 | 상세 프레임 |
|---|---|---|
| 1. Overview | `COMM-1` | `COMM-1-a` Gesture / Input Interaction Guide |
| 2. Navigation | `COMM-2` | `COMM-2-a` GNB / LNB (기존 SB-2-a), `COMM-2-b` Profile Icon (기존 SB-2-b) |
| 3. Layout | `COMM-3` | `COMM-3-a` Base Frame Area (1/2 · 2/2) |
| 4. Writing | `COMM-4` | `COMM-4-a` Data Notation Rules (1/4 ~ 4/4), `COMM-4-b` Data Notation Rules for Consumables and Reagents (1/5 ~ 5/5) |
| 5. Component | `COMM-5` | `COMM-5-a` ~ `COMM-5-w` 23개 (아래 「5. Component」 번호표) |

### CID 규칙

- 형식: `COMM-{대분류 번호}-{소분류 알파벳}` · 나눈 프레임은 `({현재}/{전체})`를 붙인다(예: `COMM-4-a(2/4)`).
- 컴포넌트 번호는 **알파벳 순서**로 매긴다. 2.2에서 Breadcrumb · Info Box · Tab이 더해져 번호가 다시 바뀌었다. 기존 번호는 「5. Component」의 대응표로 찾는다.
- 모바일은 `M-COMM-{n}`을 쓰고 번호는 PC `COMM-{n}`과 같다(「6. Mobile」).

## 1. Overview

Tablet 제스처와 PC 외부 입력(마우스 · 키보드) 액션을 정의한다.

### 1-a. Gesture / Input Interaction Guide

Tablet 제스처와 PC 외부 입력(마우스 · 키보드)의 액션 가이드를 정의한다.

![COMM-1-a](images/comm-1-a.png)
*COMM-1-a · Gesture / Input Interaction Guide*

**Tablet** — 제스처를 사용할 경우 아래 액션을 따른다.

| 이름 | 정의 |
|---|---|
| 탭 (Tap) | 화면의 일정 부분을 눌렀다가 떼는 동작. 버튼처럼 명확한 경우에는 표기 생략 가능 |
| 당겨서 새로고침 (Pull to refresh) | 당겨서 새로 고침 기능 사용 |
| 스와이프 (Swipe) | 화면의 두 지점을 일직선으로 이동했다가 떼는 동작. 화면을 수평으로 이동할 수 있음 |
| 스크롤 (Scroll) | 수직 · 수평 또는 어떤 방향으로든 밀어서 콘텐츠 사이를 이동 |

**PC** — 마우스 · 키보드 같은 외부 입력을 쓸 경우 아래 액션을 따른다.

| 이름 | 정의 |
|---|---|
| 클릭 (Click) | 마우스나 트랙패드로 버튼 · 링크 같은 요소를 클릭해 탐색 · 작업을 수행하는 필수 과정 |
| 프레스드 (Pressed) | 컴포넌트를 눌렀을 때의 상태 |
| 호버 (Hover) | 컴포넌트 위로 커서를 올려 추가 정보 · 도구 설명 · 옵션을 표시 |
| 드래그 앤 드롭 (Drag and Drop) | 항목을 클릭한 채 새 위치로 이동. 파일 탐색기 · 카드 순서 바꾸기 등에 사용 |
| 키보드 단축키 (Keyboard Shortcuts) | 메뉴를 거치지 않고 명령 실행. 표기는 `[키보드 단축키]`로 통일 (예: `[Ctrl + c]`) |
| 스크롤 (Scroll) | 마우스 휠 · 트랙패드 스와이프로 수직 · 수평 탐색 |
| 마우스 오른쪽 버튼 (컨텍스트 메뉴) | 선택한 개체 · 영역과 관련된 추가 옵션 제공 |

## 2. Navigation

시스템(L-IOS · T-IOS)별 GNB · LNB 구성과 사용자 권한별 프로필 아이콘을 정의한다.

### 2-a. GNB / LNB

시스템(L-IOS · T-IOS)별 GNB · LNB 구성을 정의한다. (기존 SB-2-a)

![COMM-2-a](images/comm-2-a.png)
*COMM-2-a · GNB / LNB*

**GNB 표시 항목**: 시스템 표시(LIOS / TIOS) · Running 상태 · 연결 장비(Instrument · T-IOS · D.A PC 또는 L-IOS · D.A PC) · Event(Error 건수 · Warning 건수) · 일시(예: `2026-04-10 11:30`)

| Case | 시스템 | LNB 1Depth 메뉴 |
|---|---|---|
| Case 1 | L-IOS | Dashboard · Material Setup · Test Management · Sample Tracking · Instrument · Inventory · Setting · Information, 아래쪽 Quick Start · Run · User Name · Shut Down |
| Case 2 | T-IOS — L-IOS가 여러 대 | All Dashboard · Dashboard · Test Management · Sample Tracking · Inventory · Statistical Analysis · Setting · Information, GNB에 L-IOS 선택(예: `CURECA(1)`) |
| Case 3 | T-IOS — L-IOS가 한 대 | Case 2와 같고 All Dashboard · L-IOS 선택 없음 |

### 2-b. Profile Icon

사용자 권한별 프로필 아이콘을 정의한다. (기존 SB-2-b)

![COMM-2-b](images/comm-2-b.png)
*COMM-2-b · Profile Icon*

| 권한 | 표시 예 |
|---|---|
| User | `UserA01` (사용자 이름) |
| Admin | `Admin` |
| Service | `Service` |

## 3. Layout

L-IOS · T-IOS 화면의 기본 프레임과 모드별 LNB 노출 · 기능 동작을 정의한다.

### 3-a. Base Frame Area (1/2) · 기본 프레임

L-IOS · T-IOS 화면의 기본 프레임(GNB · LNB · Contents 영역)과 사용자 유형에 따른 프로그램 종료 버튼을 정의한다.

![COMM-3-a(1/2)](images/comm-3-a-1.png)
*COMM-3-a(1/2) · Base Frame Area*

**L-IOS 영역 정의**

| 번호 | 영역 | 설명 |
|---|---|---|
| 1 | GNB | 네트워크 상태 · Running 구동 상태 · Event 발생 건수 · 접속 환경 기준 일시 |
| 1 | Event 건수 | Event Level별로 Status가 Open인 개수 합. 최대 3자리(999)까지, 넘어도 999로 표기 |
| 2 | LNB | 2Depth 노출: 각 1Depth의 하위 메뉴 노출 |
| 2.1 | 1Depth Menu | Dashboard, Material Setup, Test Management, Sample Tracking, Instrument, Inventory, Setting, Run, Quick Start, Information, Exit / Shut Down |
| 3 | [더보기] 버튼 (Dot 아이콘) | 클릭 시 Profile · Logout 노출 (3 상세) |
| 4 | 프로그램 종료 버튼 | 사용자 유형에 따라 버튼명 · 노출 항목이 다름 (Case 1 · 2) |
| 5 | Contents 영역 | 각 페이지의 Contents 노출 |

**L-IOS 2Depth 메뉴 예**: Material Setup › Group Lots · Prepare Carrier · Load Materials · Empty Waste Bin / Test Management › Test Order · Test Status / Sample Tracking › Samples · 96-DWP · PCR Plate / Setting › Policy · System · Protocol · Tube · AssayPack Setting / Information › Program · Manual

**사용자 유형에 따른 종료 버튼**

| Case | 사용자 | 버튼 | 동작 |
|---|---|---|---|
| Case 1 | Admin / User | `[Shut Down]` | 시스템 종료만 가능. 클릭 시 팝업 `Confirm_020` |
| Case 2 | Service | `[Exit]` | 프로그램 종료 · 시스템 종료 중 선택. 클릭 시 「Exit · Choose an option.」 팝업 |

- Case 2 › 4 상세: 4.1 `[Exit Program]`(Service일 때만 노출, 클릭 시 `Confirm_019`) · 4.2 `[Shut Down]`(클릭 시 `Confirm_020`)

**T-IOS 영역 정의**

| 번호 | 영역 | 설명 |
|---|---|---|
| 6 | GNB L-IOS 선택 | L-IOS가 여러 대면 드롭다운 노출, 한 대면 미노출 |
| — | GNB | 네트워크 상태 · Running 구동 상태 · Event 건수 · 일시 |
| — | LNB 1Depth | Dashboard, Test Management, Sample Tracking, Instrument, Inventory, Statistical Analysis, Setting, Information |
| — | 2Depth 예 | Statistical Analysis › Test Analytics · Instruments · Test Forecasting / Setting › Policy · Protocol · LIS · System · Account · SMTP · AssayPack · Tube Setting / Information › Run Report · Program · Manual |
| — | Contents 영역 | 각 페이지의 Contents 노출 |

**3 상세 — [더보기] 선택 시 노출 항목 (L-IOS · T-IOS 공통)**

| 번호 | 항목 | 동작 |
|---|---|---|
| 3.1 | Profile | L-IOS: 팝업 `LI-CPW-P`(비밀번호 · 아이디 · 이메일 변경). Console · TSS 모드에서는 미노출 / T-IOS: 팝업 `TI-CPW-P`(비밀번호 · 아이디 · 이메일 변경, 이벤트 알람 노출 여부) |
| 3.2 | Logout | 팝업 `Confirm_018` |

### 3-a. Base Frame Area (2/2) · 모드별 LNB

L-IOS 모드(Main · Console · TSS)별 LNB 노출 메뉴와 메뉴 단위 기능 동작 여부를 정의한다.

![COMM-3-a(2/2)](images/comm-3-a-2.png)
*COMM-3-a(2/2) · 모드별 LNB 노출 메뉴*

| Case | 모드 | LNB 노출 |
|---|---|---|
| Case 1 | Main | 전체 메뉴 (Dashboard · Material Setup · Test Management · Sample Tracking · Instrument · Inventory · Setting · Information · Quick Start · Run) |
| Case 2 | Console | Main 기준, 모드에서 쓰지 않는 메뉴는 미노출 (그림 참고) |
| Case 3 | TSS | Main 기준, 모드에서 쓰지 않는 메뉴는 미노출 (그림 참고) |

- 메뉴 단위 모드별 기능 동작 표: Menu(1)~(4) · Function · Main · Console · TSS 열에 `O = 동작`, `X = 미동작`으로 적는다.
- Function 값이 `All`이면서 `X`인 항목은 그 모드에서 **메뉴 자체를 노출하지 않는다.** (예: Profile은 Console · TSS에서 X)
- 대상 기능 예: Login · Logout · Profile · Event History(View · Status Control · Note Writing) · Initialize · Stop · Door Control · Group Lots · Prepare Carrier(Load Samples · Socket · Tray · Consumables and Reagents …) · Load Materials(PK/IC · PCR Reagents · MM Tubes) · Empty Waste Bin · Settings

## 4. Writing

화면 표기 형식과 상태값, 소모품 · 시약 표기 규칙을 정의한다.

### 4-a. Data Notation Rules (1/4) · 날짜 · 순서 · Module명

날짜 · 시간, 검사 항목 · 검체 유형, 소모품 · 시약, Module명을 화면에 표기하는 형태와 노출 순서를 정의한다.

![COMM-4-a(1/4)](images/comm-4-a-1.png)
*COMM-4-a(1/4)*

**날짜 · 시간 (한국 / 영문 공통)**

| 상황 | 형태 | 예시 | 비고 |
|---|---|---|---|
| 년 · 월 · 일 · 시각 | `YYYY-MM-DD hh:mm` | 2026-03-05 10:22 | 영역이 좁으면 `YY` 허용 |
| 년 · 월 · 일 | `YYYY-MM-DD` | 2026-03-05 | 영역이 좁으면 `YY` 허용 |
| 기간 | `YYYY-MM-DD ~ YYYY-MM-DD` | 2026-03-05 ~ 2026-03-10 | 영역이 좁으면 Day 생략 가능 |
| BO 공통 | `YYYY-MM-DD` | 2026-03-05 | |
| 시 · 분 | `hh:mm` | 10:22 | |

**검사 항목 · 검체 유형 노출 순서**

| 구분 | 표기 | 노출 순서 |
|---|---|---|
| Product | 검사 항목명 | 검사 항목 약어 기준 알파벳 오름차순 |
| Sample Type | 검체 유형 약어 | 검체 유형 풀네임 기준 알파벳 오름차순 |

**소모품 · 시약**: 함께 노출되는 페이지는 **소모품 → 시약** 순서. 각각 UI 표기명 알파벳 오름차순(기본), 페이지별 정의가 있으면 그 정의를 따른다. 수량 표기는 4-b를 따른다.

**Module명**

| 조건 | 표기 | 예 | 노출 순서 |
|---|---|---|---|
| 같은 Type 모듈 1대 | Module type명 | Sample Storage | 각 페이지별 상이 |
| 같은 Type 모듈 2대 이상 | `ModuleType(index)` | Sample Storage(1) | 각 페이지별 상이 |

### 4-a. Data Notation Rules (2/4) · 장비 상태 · 컨트롤러

CURECA 장비 전체의 구동 상태값과 구동 컨트롤러, 장비 통합 상태 처리 조건, 도어 잠금 해제 조건을 정의한다. 씨젠이 공유하는 「CURECA 시스템 구성 요소 및 상태 정보」 문서를 참고해 작성했고, 그 문서를 최우선으로 따른다.

![COMM-4-a(2/4)](images/comm-4-a-2.png)
*COMM-4-a(2/4)*

**전체 CURECA 구동 상태값**

| 코드명 | UI (영문) | UI (한글) | 설명 | 발생 Case | UX action |
|---|---|---|---|---|---|
| NotInitialized | Not Initialized | 초기화 필요 | 초기화가 수행되지 않은 상태 | 전원 인가 후 초기화가 완료되지 않은 경우 | 초기화 안내 팝업, 초기화 관련 메뉴만 접근 가능 |
| Initializing | Initializing | 초기화 중 | 초기화 진행 중 | 초기화 프로세스 실행 시 | 로딩 · 진행바 표시, 모든 기능 제한, 완료 시 「준비 완료」 전환 · 안내 |
| Ready | Ready | 준비 완료 | 검사를 시작할 수 있는 상태 | 초기화, 중지 완료 또는 작업 종료 후 | 모든 기능 사용 가능, 작업 시작 버튼 활성화 |
| Running | Running | 가동 중 | 검사 정상 진행 중 (모듈 1대라도 Running, Error 없음) | 작업(검사) 시작 시 | 중지(Stop) 기능 제공 |
| PartialRunning | Partial Running | 부분 가동 중 | 일부 모듈 Running, 일부 Paused 또는 Error | 1대 이상 모듈 구동 중일 때 일부 모듈에서 Error 발생 시 | 장비 중지 진행 상태 표시 및 팝업으로 중지 중 로딩 · 진행바, 모든 기능 일시 제한, 완료 시 「준비 완료」 자동 전환 ⚠️ |
| Stopping | Stopping | 가동 중지 중 | 사용자 Run Stop 요청으로 정지 중 (전체 장비 Stop) | 사용자가 중지 버튼을 눌렀을 때 | 중지 진행 팝업 · 진행바, 모든 기능 일시 제한, 완료 시 「준비 완료」 |
| Paused | Paused | 일시 정지 | 일부 모듈 Paused, Running 모듈 없음 | | |
| Error | Error | 오류 | 가동 중 모든 모듈 Error, 또는 비가동 중 일부 모듈 Error | 1대 이상 모듈이 구동 중일 때 모든 모듈이 Error인 경우 / 모든 모듈이 구동 중이 아닐 때 1대 이상 모듈이 Error인 경우 | 상황별 상이 |

- ⚠️ Figma의 PartialRunning UX action이 Stopping과 거의 같은 문구다. 복사 실수일 수 있어 확인이 필요하다.

**구동 컨트롤러 (버튼)**

| 버튼 | 내용 | 활성화 조건 |
|---|---|---|
| Initialize | 장비 초기화. 로딩 · 진행바, 모든 기능 제한, 완료 시 「준비 완료」 전환 | Not Initialized 상태 |
| Stop | 진행 중인 검사 중단(폐기) → Initializing → Ready | Running · Partial Running. 그 외 상태값일 때는 버튼 비활성화 |
| Run | 검사 실행, 「Run Preparation」 페이지로 진입 | Ready · Running · Partial Running |
| Quick Start | 「Quick start」 팝업 노출. Run Preparation 3~4단계 대신 요약 팝업 하나로 검사 실행 | Ready · Running · Partial Running 상태일 때만 활성화 |

**장비 통합 상태 처리 조건 (이전 상태 → 다음 상태)**

| 다음 상태 | 이전 상태 | 트리거 · 모듈 조건 |
|---|---|---|
| NotInitialized | (부팅) | 초기화 전 모든 모듈 NotInitialized. 아닌 모듈이 있으면 Error |
| Initializing | NotInitialized | Initialize 클릭 |
| Ready | Initializing | Initialize 완료 신호 + 모든 모듈 Ready |
| Ready | Stopping | Run Stop 완료 신호 + 모든 모듈 Ready |
| Ready | Error | 모듈 상태 변화로 모든 모듈 Ready |
| Running | Ready | Run Start 클릭. Run 완료 전에는 모든 모듈이 Ready여도 Running 유지 |
| Running | PartialRunning · Paused · Error | 모든 모듈이 Ready 또는 Running |
| PartialRunning | Running | (Running ≥ 1) AND (Pausing · Paused · Error ≥ 1) |
| Stopping | Running · PartialRunning · Paused | Run Stop 클릭, 완료 신호까지 유지 |
| Paused | Running | 모든 모듈이 Paused |
| Paused | PartialRunning | Paused ≥ 1 AND Running = 0 AND Pausing = 0 AND Error = 0 |
| Error | Initializing | Initialize 완료 신호 + Error 모듈 ≥ 1 |
| Error | Ready · Stopping · Paused | Error 모듈 ≥ 1 |
| Error | Running | 모든 모듈이 Error, 또는 Run 완료 시 Error 모듈 ≥ 1 |
| Error | PartialRunning | Error ≥ 1 AND Running = 0 AND Pausing = 0 |

- 통신 단절 · 프로그램 오류는 즉시 Error.
- ※ Run 완료: Prep · Dx에 할당된 모든 검체의 검사가 끝나고 결과가 D.A PC를 통해 T-IOS로 모두 전달된 경우(L-IOS에서 최종 판단).

**도어 잠금 해제 (상태별)**

| 장비 상태 | 검사 진행 중 | 도어 개방 |
|---|---|---|
| Not Initialized | X | 허용 |
| Initializing | X | **불가** |
| Ready | X | 허용 |
| Running | O | 조건부 허용 |
| Partial Running | O | 조건부 허용 |
| Stopping | O | **불가** |
| Paused | O | 조건부 허용 |
| Error | X | 허용 |
| Error | O | 조건부 허용 |

- 조건부 허용은 아래 모듈 · 도어만 연다.

| 모듈 | 도어 | 사용자 작업 |
|---|---|---|
| Sample Storage | Left Door / Right Door | 투입 / 회수 Trolley 교체 |
| Prep Consumable Storage | Door | 소모품 Trolley 교체 |
| Sample Preparation | Rear Door (단디메카) · Door (로체시스템즈) | 폐기함 비우기 |
| High-throughput Extraction | Door | DWP 필름 폐기함 비우기 (표준형만. 맞춤형은 서랍형이라 가동 중 개방 불가) |
| Plate Sealing | Door | Sealer 필름 보충 · 폐기함 비우기 (PCR Setup과 함께 판단, 둘 중 하나라도 Running이면 둘 다 Paused 후 개방) |

- 도어 잠금 해제는 L-IOS의 **Unlock** 버튼으로 요청한다.
- 모듈이 Running이면 진행 중인 작업 단위를 마친 뒤 해제하고, 검사 중에 해제되면 그 모듈을 Paused로 바꾼다.

### 4-a. Data Notation Rules (3/4) · 모듈 · Unit 상태

장비 모듈과 하위 Unit(Device · Storage · Waste Bin)의 상태값과 Module별 Unit 구성 정보를 정의한다.

![COMM-4-a(3/4)](images/comm-4-a-3.png)
*COMM-4-a(3/4)*

**Module 구동 상태값**

| 코드명 | 한글 | 설명 |
|---|---|---|
| NotInitialized | 초기화 필요 | 초기화되지 않은 상태 |
| Initializing | 초기화 중 | 초기화 중 |
| Ready | 준비 완료 | 가동 가능 |
| Running | 가동 중 | 가동 중 |
| Stopping | 가동 중지 중 | 사용자 중지 요청으로 중지 작업 중 |
| Pausing | 일시 정지 중 | 도어 잠금 해제 요청으로 일시 정지 작업 중 |
| Paused | 일시 정지 | 도어 잠금 해제, 또는 서랍형 저장 장치가 열린 상태에서 접근이 필요한 경우 |
| Error | 오류 | 고장 · 장애, 또는 가동 중 소모품 부족 · 폐기함 만재 |

**Module 단위 상태값**

| 항목 | 값 (한글) | 설명 |
|---|---|---|
| 연결 | Connected / Disconnected | 시스템과 연결 · 미연결 |
| Door Status | Open(열림) / Closed(닫힘) | 문 열림 · 닫힘 |
| Lock | Unlocked(잠금 해제) / Locked(잠김) | Front door(유리문) 잠금 상태 |

**Unit 상태값**

| Unit | 값 | 설명 |
|---|---|---|
| Device (예: M9600) | Idle 등 | Device 구동 상태 |
| Storage — Docking | Undocked(도킹 해제) / Docked(도킹됨) | Trolley 미장착 · drawer 열림 / 장착 · 닫힘 |
| Storage — Type | RT / Refrigerator | 상온 / 냉장 저장 장치 |
| Waste Bin — Full status | Available(여유) / AlmostFull(만재 임박) / Full(가득 참) | 적재율 70% 미만 / 70% 이상 / 100%. 카운팅 기반이며 최대 개수 초과 후 만재 센서 미작동 시 Almost Full로 노출 |

### 4-a. Data Notation Rules (4/4) · 검사 · 재고 · 이벤트

검체 · Plate · 검사 배치의 진행 상태와 재고 · 시약 만료 상태, 이벤트 정보를 정의한다.

![COMM-4-a(4/4)](images/comm-4-a-4.png)
*COMM-4-a(4/4)*

**Sample 상태값**

| 코드명 | 한글 | 설명 |
|---|---|---|
| Ordered | 검사 접수 | 오더 접수, 검사 시작 전 (TSS로 Socket 구성 → Run Start) |
| Ready | 검사 준비 | 배치 시작 후 검체 로딩 전 |
| Running | 검사 진행 중 | 검체 로딩 후 검사 중 |
| Completed | 검사 완료 | 정상 완료 |
| Failed | 검사 실패 | 장비 · 시스템 오류 또는 Stop으로 진행 중 Plate 폐기(하위 Sample까지 Fail) |
| NotTested | 검사 미수행 | 바코드 훼손 · 불일치로 검사 진행 불가 |

**Plate 상태값**: Running(96-DWP: Sample Preparation ~ PCR Setup / PCR-Plate: PCR Setup ~ PCR) · Completed(96-DWP: PCR Plate로 옮겨질 때 / PCR-Plate: PCR에서 Out될 때) · Failed

**검사 배치 완료 상태값**

| 값 | 조건 |
|---|---|
| Completed | 배치 내 모든 검사가 Completed |
| Failed | 모든 검사가 Failed |
| NotTested | 모든 검사가 Not Tested |
| PartiallyCompleted (검사 부분 완료) | Completed가 하나 이상이면서 Failed 또는 Not Tested가 하나 이상 |
| Stopped (검사 중지) | 사용자가 배치 검사를 중지 |

**재고 · 시약 만료**

| 구분 | 값 (한글) | 조건 |
|---|---|---|
| 재고 | Sufficient(충분) | 잔여 수량 ≥ 필요 수량 |
| 재고 | Low(부족 임박) | 잔여 수량 < 필요 수량이나 가동 가능 |
| 재고 | Insufficient(부족) | 잔여 수량 0, 가동 중단 |
| 시약 | Valid(유효) | 만료일까지 30일 이상 |
| 시약 | Warning · Under 30 days(만료 임박) | 30일 미만 |
| 시약 | Expired(만료) | 만료됨 |

**이벤트**

| 구분 | 값 | 설명 |
|---|---|---|
| 등급 | Warning(경고) | 가동은 가능하나 인지 · 예방 조치 필요 (센서 불안정, 소모품 부족 임박 등) |
| 등급 | Error(오류) | 고장 · 장애 · 운영 문제로 가동 불가 · 중단 |
| 종류 | Instrument · Inventory · Sample · System | 장비 · 재고 · 검체 · 시스템(통신 장애 등) |
| 상태 | Open(확인 필요) / Closed(확인됨) | 처리 전 / 처리 후 |

### 4-b. Consumables and Reagents (1/5) · 공통

소모품 · 시약 표시 순서, 문자열 정렬, Tip 용량 · 그룹명 표기, 재고 0 표기, 입고 단위 수량 기준을 정의한다.

![COMM-4-b(1/5)](images/comm-4-b-1.png)
*COMM-4-b(1/5)*

| 항목 | 규칙 |
|---|---|
| 표시 순서 | 함께 표시하면 소모품 → 시약 |
| 문자열 정렬 | 오름차순, 대소문자 무시, 숫자는 문자로 비교 (`1000 μL Tip` → `300 μL Tip` → `Wide Bore Tip`) |
| Tip 용량 | 숫자와 μL 사이를 띄어 씀 (`1000 μL Tip`) |
| 그룹명 | itemGroupName은 단수형 기준: Tub, Tube, DWP (Tub이 Tube보다 먼저) |
| 재고 0 | Remaining Qty가 0이면 `0`으로 표기 |
| 입고 단위 수량 | 시스템이 입고 단위별로 보유한 카운트 값 기준. 새 단위가 장착되면 그때부터 카운팅, 역산 · 균등 배분하지 않음 (예: Rack 10 / 30 / 10 → `50 ea (3 racks)`) |

### 4-b. Consumables and Reagents (2/5) · 분류

소모품과 시약을 카드 · 그룹으로 분류하는 기준과 시약 태그(Chip)를 정의한다.

![COMM-4-b(2/5)](images/comm-4-b-2.png)
*COMM-4-b(2/5)*

**소모품**

- **그룹화**: 아이템명의 공통 단어로 묶는다 (Tip → Tips, Tube → Tubes). DWP는 Plates 그룹에 넣는다.
- **비그룹화**: 묶이지 않는 아이템. 카드형에서는 아이템명이 카드 제목이 된다 (예: Sealing Film, Stool Swab).

**시약**

| 항목 | 규칙 |
|---|---|
| 카드 | fileType으로 구분. Pretreatment는 고정 카드 「Pretreatment Reagents」 1개(아이템명 = Product Name), Extraction · PCR은 Product Name별 카드(아이템명 = componentName) |
| 아이템 | 같은 Storage에 입고되는 구성품은 쉼표로 묶어 1개 아이템 (구성품명 오름차순, 예: `BB Tub, EB Tub, WB1 Tub, WB2 Tub, WB3 Tub`) |
| 그룹 | 모두 itemGroupName으로 그룹화 · 비그룹화. 그룹은 정렬에만 쓰고 화면에 구분선 · 소제목은 표시하지 않음 |
| 태그 (Chip) | Pretreatment = Sample Preparation, Extraction = Nucleic Acid Extraction, PCR = PCR |

### 4-b. Consumables and Reagents (3/5) · 정렬 (카드형 · 목록형)

소모품 · 시약 목록의 정렬 순서를 카드형 · 목록형 기준으로 정의한다. 목록형은 그룹명만 표시하지 않는다.

![COMM-4-b(3/5)](images/comm-4-b-3.png)
*COMM-4-b(3/5)*

**소모품**: 그룹화 먼저, 비그룹화 나중 → 그룹명 오름차순 → 그룹 내 아이템명 오름차순 / 비그룹화는 아이템명 오름차순

> 예(카드형): Plates(96-DWP → PCR Plate) → Tips(1000 μL Tip → 300 μL Tip → Wide Bore Tip) → Tubes(Empty Standard Tube → MM Tube) → Sealing Film → Stool Swab
>
> 예(목록형, 그룹명 없음): 96-DWP → PCR Plate → 1000 μL Tip → 300 μL Tip → Wide Bore Tip → Empty Standard Tube → MM Tube → Sealing Film → Stool Swab
>
> 화면 예: 소모품 카드형 `LI-IVT-03-T`, 시약 카드형 `LI-IVT-04-T` (예: Pretreatment Reagents · Tub `LB Tub (Prep) → PBS Tub → Saline Tub`, STARMag M96 Kit · DWP `EB DWP → LB DWP → MB DWP → WB1 DWP → WB2 DWP`, 비그룹 Spin Tip은 뒤)

**시약**

- 구성품까지 보이는 목록: Pretreatment → Extraction → PCR → Product Name → itemGroupName 그룹화 먼저 · 비그룹화 나중 → 아이템명
- Product Name만 보이는 목록(예: Policy Setting › Cost Setting): 유형(Pretreatment → Extraction → PCR) → Product Name

### 4-b. Consumables and Reagents (4/5) · 혼합 목록 정렬

소모품 · 시약이 섞인 구성품 단위 목록(예: Inventory › Overview 탭)의 정렬 순서를 정의한다.

![COMM-4-b(4/5)](images/comm-4-b-4.png)
*COMM-4-b(4/5)*

| 항목 | 규칙 |
|---|---|
| 순서 | 소모품 → 시약, 그룹화 먼저 · 비그룹화 나중 |
| fileType | 시약의 fileType 정렬은 쓰지 않음. 다른 fileType이라도 itemGroupName이 같으면 한 그룹 |
| 그룹화 | itemGroupName 오름차순 → 그룹 내 아이템명 오름차순 |
| 비그룹화 | 아이템명 오름차순 |
| 예외 | Overview 탭만: PCR 시약은 구성품명 대신 Product Name으로 표기, Product Name 오름차순 |

> 화면 예: `LI-IVT-02-T` Overview · Prep Consumable Storage / Plate Sealing. 수량은 `288 ea (3 racks)`, `300 rxns (3 sets)`처럼 4-b(5/5)를 따른다. Prep Consumable Storage: Plates → Tips → Tubes → Stool Swab, 시약 Tube `ASL Standard Tube → PBS Standard Tube → PK Tube → Prelyser Standard Tube → Saline Standard Tube` / Plate Sealing: 비그룹 `Sealing Film (1) → Sealing Film (2)`, PCR은 Product Name 오름차순

### 4-b. Consumables and Reagents (5/5) · 수량 표기

소모품 · 시약의 재고 수량을 수량과 입고 단위 개수로 표기하는 형식을 정의한다. `n` = 시스템이 카운팅해 보유한 입고 단위 개수.

![COMM-4-b(5/5)](images/comm-4-b-5.png)
*COMM-4-b(5/5)*

| 구분 | 형식 | 예 |
|---|---|---|
| 소모품 · 묶음 입고 | `{수량} ea ({n} {단위})` | 480 ea (5 racks), 14 ea (1 socket) |
| 소모품 · 낱개 입고 | `{수량} ea` | 100 ea, 200 ea |
| 시약 | `{수량} rxns ({n} {단위})` | 200 rxns (2 racks), 288 rxns (3 DWPs) |

- **단수 · 복수**: 단위가 1개면 단수, 2개 이상이면 복수(단위명 뒤에 s) — `1 rack / 2 racks`, `1 tube / 2 tubes`, `1 DWP / 2 DWPs`, `1 set / 2 sets`, `1 socket / 2 sockets`
- **묶음 아이템**: 구성품 수량을 합산하지 않는다(구성품 수량이 모두 같다는 전제).
- baseUnit이 ea인 아이템(예: Buffer Cartridge Cap)은 `15 ea (3 sets)`처럼 표기한다.

## 5. Component

Figma 목차(COMM-0)에 정의된 컴포넌트 23개(5-a ~ 5-w)의 번호와 상세 규칙이다.

| CID | 컴포넌트 | 기존 CID | 상세 프레임 |
|---|---|---|---|
| `COMM-5-a` | Accordion | COMM-5-a | 1장 |
| `COMM-5-b` | Breadcrumb | 새로 추가 | 1장 |
| `COMM-5-c` | Button | COMM-5-c | 1장 |
| `COMM-5-d` | Calendar | COMM-5-d | 1장 |
| `COMM-5-e` | Card | COMM-5-t | 1장 |
| `COMM-5-f` | Chips | COMM-5-e | 1장 |
| `COMM-5-g` | Data Table | COMM-5-m | 1장 |
| `COMM-5-h` | Dropdown | COMM-5-f | 2장 (1/2 · 2/2) |
| `COMM-5-i` | Info Box | 새로 추가 | 1장 |
| `COMM-5-j` | Label | COMM-5-r | 1장 |
| `COMM-5-k` | Loading | COMM-5-g | 1장 |
| `COMM-5-l` | Pagination | COMM-5-i | 1장 |
| `COMM-5-m` | Popup | COMM-5-j | 4장 (1/4 ~ 4/4) |
| `COMM-5-n` | Progress Bar | COMM-5-b | 1장 |
| `COMM-5-o` | Scroll Bar | COMM-5-k | 1장 |
| `COMM-5-p` | Search Bar | COMM-5-s | 1장 |
| `COMM-5-q` | Selection Controls | COMM-5-l | 1장 |
| `COMM-5-r` | Sorting | COMM-5-v | 1장 |
| `COMM-5-s` | Tab | 새로 추가 | 1장 |
| `COMM-5-t` | Text Field | COMM-5-n | 1장 |
| `COMM-5-u` | Toast | COMM-5-w | 1장 |
| `COMM-5-v` | Tool Tip | COMM-5-o | 1장 |
| `COMM-5-w` | Validation Check | COMM-5-Y | 1장 |

- 화면 디스크립션 · 요청에서 컴포넌트를 가리킬 때는 **이 표의 CID**를 쓴다. 「기존 CID」는 Figma Header에 적힌 이전 번호다.
- CURECA UX 가이드(`g20261028-brex-06-J003`, 2026-10-30 판 20개)와 번호가 다르다. 예: Badge → **Label(5-j)**, Table → **Data Table(5-g)**, Text Input → **Text Field(5-t)**, Progress Step → **Progress Bar(5-n)**, Tooltip → **Tool Tip(5-v)**.

### Figma 컴포넌트 (P-Components · PC)

Common UX 페이지의 **P-Components (PC)**(`1801:15821`, 「CURECA Common UX PC 컴포넌트 · 기준 화면 1920 × 1080 · Inter · 무채색 SB용(키트 기반) · 2026-11-02」)에 이 가이드 규칙대로 만든 컴포넌트가 있다. 화면을 만들거나 고칠 때는 이 컴포넌트의 인스턴스를 쓰고 상태 · 크기는 변형(Variant)으로 바꾼다. 묶음: Navigation · Status · Badge · Button · Chip · Input · Selection · List · Card · Accordion · Table · Tab · Overlay · Popup · Feedback · Progress · Document · Icon.

| CID | 컴포넌트 | 변형(Variant) | 노드 |
|---|---|---|---|
| 2-a | Navigation/GNB · LNB | System = L-IOS · T-IOS (Single) · T-IOS (Multi) | `367:627` · `360:448` |
| 2-b | Icon/Profile | Role = User · Admin · Service | `510:13096` |
| 4-a | Status/CURECA · Module · Device · Sample · Plate · Batch · Inventory 등 | 상태값별 (4장 표기 규칙) | `286:1114` 외 |
| `COMM-5-a` | Accordion | Type = Card · Line / State = Enabled · Expanded · Disabled | `1001:10558` |
| `COMM-5-b` | Breadcrumb · Breadcrumb/Item | Class = 2 ~ 5 / State = Parent · More · Current Page | `1943:15926` · `1943:15853` |
| `COMM-5-c` | Square | Style = Filled · Gray · Outlined / Size = XL · L · M · S / State = Enabled · Pressed · Focused · Disabled · Loading | `550:23829` |
| `COMM-5-c` | Basic · Underline (Text Button) | Size = XXL ~ XS / State 5종 | `550:22851` · `550:23236` |
| `COMM-5-c` | Floating Button | Type = Top · Expand · Close / State = Enabled · Pressed · Focused | `1069:10821` |
| `COMM-5-d` | Calendar/Date · Month Calendar · Day · Month · Picker | Day State = Unselected · Selected Oneday · Start · End · Range · Today · Disabled … | `1092:10673` · `1092:10788` · `1091:10697` |
| `COMM-5-e` | Card/List · Card/Table | Item = 1 ~ 10 / Columns = 1 ~ 4 | `594:10269` · `574:10871` |
| `COMM-5-f` | Chip/Filter · Chip/Anchor | Size = L · S / State = Unselected · Selected | `1167:11098` · `1165:11102` |
| `COMM-5-g` | Table/Header Cell · Table/Cell | Cell State = Default · Hover · Selected | `1349:12206` · `1349:12217` |
| `COMM-5-h` | Dropdown · Combine Dropdown | Type = Basic · Date · Period (Combine: Basic+Date · Basic+Basic) / Size = L · M / State 6종 / Label Position = Top · Left | `1187:11672` · `1188:11976` |
| `COMM-5-i` | Info Box | Type = Default | `1943:15975` |
| `COMM-5-j` | Number Badge · Dot Badge · Square Text Badge | Theme = Light · Dark | `550:21226` · `550:21243` · `550:21271` |
| `COMM-5-l` | Pagination/Number · Pagination/Indicator | State = First · Second · Middle · Last · One · Two Page | `1255:12249` · `1272:12304` |
| `COMM-5-m` | Popup/Alert | Type = Alert · Confirm / Status = Done · Error · Warning · Progress | `611:10632` |
| `COMM-5-n` | Progress Step/Horizontal · Vertical Item | Current = Step 1 ~ 4 / State = Done · Current · Upcoming | `1289:12235` · `1289:12272` |
| `COMM-5-q` | Square Checkbox · Checkbox · Circle Radio Button · Toggle Switch | State = Selected · Unselected · Disabled · Disabled Selected (· Mix Selected) | `1332:2108` · `550:24720` · `550:27070` · `550:32030` |
| `COMM-5-r` | Sort Icon | State = Default · Descending · Ascending | `1335:12204` |
| `COMM-5-s` | Tab/Underline · Outline · Outline Container · Filled Container | Size = M · S / State = Active · Inactive / Count = 2 ~ 10 | `1972:15912` · `1972:15945` · `1972:15965` · `1972:16017` |
| `COMM-5-t` | Text Input · Text Input/Inline | Size = L · M / State = Enabled · Focused · Typing · Complete · Read Only · Disabled · Error / Password = Off · On | `1298:12245` · `1363:12434` |
| `COMM-5-u` | Toast | Type = Single · Double | `1375:47481` |
| `COMM-5-v` | Tooltip · Tooltip/Event · Tooltip/Table | Type = Ellipsis · Info / Event = Error · Warning / Items = 1 ~ 10 | `1388:14748` · `1401:14739` · `1531:15035` |

- `⛔️`가 붙은 컴포넌트(Item_Line Tabs · Item_Segment Tabs · Item_Overflow Menu)는 쓰지 않는다.
- Loading(5-k) · Scroll Bar(5-o) · Search Bar(5-p)는 이 묶음에 따로 된 컴포넌트가 없다. 화면에 쓸 때는 아래 규칙대로 그린다.
- **Tab 생성 가이드**(`Tab` 프레임 `1964:30940`): 탭은 오토 레이아웃으로 구성, 최소 2개(Active · Inactive)이고 활성 탭은 반드시 1개. 탭이 콘텐츠 폭보다 길면 오른쪽 끝에 Fade out edges(Scroll Fog)를 최상위 레이어로 둔다. Underline은 하단 Stroke gray400 1px · Padding 8px, Outline은 Padding 8px, 건수는 0이면 미노출 · 1~99 노출. Item은 단독으로 쓰지 않는다.

### 5-a. Accordion

하위 패널을 접고 펼쳐 화면 영역을 효과적으로 활용하는 아코디언을 정의한다. (기존 COMM-5-a)

![COMM-5-a](images/comm-5-a.png)
*COMM-5-a · Accordion*

| Type | 이름 | 설명 |
|---|---|---|
| Type 1 | Card Accordion | 카드 모양 패널을 접고 편다 |
| Type 2 | Line Accordion | 선으로 구분한 패널을 접고 편다. 표 안에서 그룹 행을 접고 펴는 경우도 이 규칙을 따르고 표 모양은 5-g Data Table을 따른다 |

| 상태 | 표시 |
|---|---|
| Enabled | 패널 축소, `[V]` |
| Expanded | 패널 확대, `[^]` |
| Disabled | 제목 · 아이콘 회색 |

| 번호 | 영역 | 동작 |
|---|---|---|
| 1 | ⓘ 아이콘 | 부가 설명이 있을 때 툴팁과 함께 사용 |
| 2 | V 버튼 | 선택 시 패널 확대 · 축소 전환. 펼친 만큼 아래 콘텐츠가 밀리고, 접으면 올라온다 |

### 5-b. Breadcrumb

현재 위치를 안내하고 상위 계층으로 이동할 수 있는 경로를 정의한다. (새로 추가)

![COMM-5-b](images/comm-5-b.png)
*COMM-5-b · Breadcrumb*

- **형태**: 2 Depth ~ 5 Depth 네 가지.
- **조건**: 화면 Title 아래에 노출. 현재 페이지의 상위 카테고리 · 페이지를 최대 5개까지 표시하고, 마지막 항목은 현재 위치(Current Page).

| 번호 | 영역(상태) | 동작 |
|---|---|---|
| 1 | Parent (상위 계층) | 선택 시 해당 페이지로 이동 |
| — | More | 생략된 중간 계층 |
| — | Current Page | 현재 위치 표시 |

### 5-c. Button

선택을 통해 상호작용을 유도하거나 작업을 수행하는 버튼을 정의한다. (기존 COMM-5-c)

![COMM-5-c](images/comm-5-c.png)
*COMM-5-c · Button*

**Type 1 · Square Button**

| 스타일 | 쓰임 |
|---|---|
| Filled | 화면의 주요(primary) 액션 |
| Gray | 보조(secondary) 버튼 그룹 안의 세부 작업 |
| Outlined | 보조 작업 · 선택 사항 |

- 상태: Enabled · Pressed · Focused · Disabled · Loading
- 크기(높이): XL 56px · L 48px · M 40px · S 32px

**Type 2 · Text Button** — Basic · Underline. 텍스트 기반 버튼 중 주요 작업을 수행하는 버튼. 글자 크기 XXL 24 · XL 20 · L 18 · M 16 · S 14 · XS 12px.

**Type 3 · Floating Button** — 화면 오른쪽 아래에 떠 있는 버튼.

| Case | 버튼 | 규칙 |
|---|---|---|
| Case 1 | Top Button | 화면 높이 1개(1 Viewport, PC 500px 기준) 이상 스크롤하면 페이드인, 최상단(Top 0)에 닿으면 페이드아웃. 선택 시 최상단으로 이동 |
| Case 2 | Expand Button | 선택 시 콘텐츠 영역을 전체 화면으로 확대. 전체 화면에서는 오른쪽 아래 X 버튼으로 복귀(커서를 움직이면 페이드인, 움직임이 없으면 페이드아웃) |

### 5-d. Calendar

년/월/일을 확인하거나 선택하는 캘린더를 정의한다. (기존 COMM-5-d)

![COMM-5-d](images/comm-5-d.png)
*COMM-5-d · Calendar*

**Type 1 · Date Calendar** — 시작 · 종료 두 달을 나란히 보여 준다.

- 동작: 날짜 입력 필드를 선택하면 필드 아래에 노출. 하루 또는 기간(시작일 ~ 종료일)을 고르고 고른 값은 아래에 표시. Done을 누르면 필드에 반영되고 아이콘이 완료 상태로 바뀜. Done 없이 필드를 다시 누르면 닫히고 직전 적용 값 유지(없으면 Default).
- 조건: 처음엔 Default(오늘 기준 7일 전 ~ 오늘). 선택일로부터 최대 1년. 오늘 이후는 선택 불가. 날짜를 고르기 전에는 Done 비활성.

| 번호 | 영역 | 동작 |
|---|---|---|
| 1 | ∨ 아이콘 | 연 · 월 드롭다운 노출, 고르면 그 달로 이동 |
| 2 | < > 버튼 | 이전 · 다음 달로 이동 |

| 상태 | 설명 |
|---|---|
| 오늘 | 오늘 날짜 표시(선택하면 선택 표시) |
| 선택 | 하루를 고른 날짜, 기간은 시작일 · 종료일 선택 표시 + 사이 날짜 범위 |
| 선택 불가 | 선택 범위 밖 날짜 |

**Type 2 · Month Calendar** — 시작 · 종료 두 해를 나란히 보여 주고 시작 월 ~ 종료 월을 고른다. Done 등 완료 동작은 Date Calendar와 같다. 이번 달을 고르면 어제까지의 합계를 보여 준다. < >는 이전 · 다음 연도로 이동.

### 5-e. Card

하나의 주제에 대한 정보를 묶어 보여 주고 필요하면 관련 페이지로 연결하는 카드를 정의한다. (기존 COMM-5-t)

![COMM-5-e](images/comm-5-e.png)
*COMM-5-e · Card*

| Type | 이름 | 정의 | 조건 |
|---|---|---|---|
| Type 1 | List Card | 항목명과 값을 좌우로 나열 | 사용처 예: Samples 상세(General 등). 줄 수 1~10. 카드 전체를 선택 영역으로 쓰면 선택 시 상세 노출(SB 정의) |
| Type 2 | Table Card | 열 제목과 줄로 여러 항목 비교 | 사용처 예: Run Preparation(Tips 상세 등). 줄 수 1~10, 열 최대 4개(첫 열 넓게). 필요 시 제목 아래 Tag, 줄 오른쪽 Status 아이콘 |

- Button은 이동할 페이지가 있을 때만 노출(없으면 제목만). 선택 시 관련 페이지로 이동(SB 정의).

### 5-f. Chips

콘텐츠를 구분해 보여 줄 때 쓰는 칩을 정의한다. 임시 상태가 아닌 완결된 메뉴 영역에서 쓴다. (기존 COMM-5-e)

![COMM-5-f](images/comm-5-f.png)
*COMM-5-f · Chips*

| Type | 이름 | 동작 | 조건 |
|---|---|---|---|
| Type 1 | Filter Chip | 칩을 고르면 그 칩의 콘텐츠만 표시, 다시 고르면 해제 · 전체 표시. 여러 개 동시 선택 가능 | Default: 아무것도 선택 안 됨(전체 노출). 글 뒤 아이콘은 상태(필요할 때만), 숫자는 건수 |
| Type 2 | Anchor Chip | 칩을 고르면 그 카드가 목록 맨 위로 이동. 스크롤하면 맨 위 카드의 칩이 선택됨 | Default: 첫 번째 칩 선택. 한 번에 하나만, 다시 골라도 해제되지 않음 |

- 상태: Unselected · Selected / 크기(높이): L 40px · S 32px

### 5-g. Data Table

그리드 형식의 표로 많은 데이터를 정리해 빠르게 파악하게 하는 표를 정의한다. (기존 COMM-5-m)

![COMM-5-g](images/comm-5-g.png)
*COMM-5-g · Data Table*

**Type 1 · Basic Table**

- 노출 개수 10개(1920×1080 기준, SB에 따라 다를 수 있음).
- L-IOS(앱형): 노출 개수 고정 / T-IOS(웹형): 노출 개수 선택 가능, 목록 높이는 행 수에 맞춰 늘고 브라우저 스크롤.
- 노출 개수를 넘으면 페이지네이션(COMM-5-l). 정렬은 COMM-5-r.

| 번호 | 영역 | 동작 |
|---|---|---|
| 1 | Items 건수 | 지금 목록에 불러온 데이터 개수. 검색 조건이 바뀌면 바로 갱신 |
| 2 | 노출 개수 드롭다운 (T-IOS만) | Default 10 items(10 · 30 · 50 · 100). 고르면 바로 갱신 |
| 3 | 정렬 아이콘 | 선택 시 정렬(COMM-5-r) |
| 4 | 데이터 행 | 말줄임 데이터에 호버 시 전체 내용 툴팁(COMM-5-v). 선택 시 Selected. 상태: Default · Hover · Selected |
| 5 | 페이지네이션 | 선택 시 그 페이지로 이동(COMM-5-l) |

**Case · No Data** — 데이터가 없으면 헤더는 두고 목록 영역에 안내 문구를 노출한다(문구는 SB에 따라 다름). 건수는 0.

### 5-h. Dropdown (1/2) · Basic · Multi-Select

옵션 목록에서 하나 또는 여러 개를 고르는 드롭다운을 정의한다. (기존 COMM-5-f)

![COMM-5-h(1/2)](images/comm-5-h-1.png)
*COMM-5-h(1/2) · Basic · Multi-Select Dropdown*

| 상태 | 설명 |
|---|---|
| Enabled | 선택 전 |
| Active | 목록이 열린 상태 |
| Selected | 목록에서 옵션이 선택됨 |
| Complete | 선택을 마치고 닫힌 상태 |
| Read Only | 값 확인만, 변경 불가 |
| Disabled | 선택 불가 |

- 크기(높이): L 48px · M 38px. 라벨은 필드 왼쪽(Default), 필요 시 위.

**Type 1 · Basic Dropdown** — 옵션 하나를 고른다. 목록은 5개 높이까지, 넘치면 스크롤. 값이 필드보다 길면 말줄임(…).

| 번호 | 영역 | 동작 |
|---|---|---|
| 1 | 필드 | 선택 시 목록 열림 · 닫힘 |
| 2 | 옵션 | 선택 시 필드에 표시, 다시 열면 고른 옵션에 체크 |

**Type 2 · Multi-Select Dropdown** — 하나 이상 고른다. Default: All. 고른 옵션이 필드 폭을 넘으면 …, 마우스 오버 시 전체를 툴팁으로. 여닫는 방식 · 상태는 Basic과 같다.

| 번호 | 영역 | 동작 |
|---|---|---|
| 1 | 필드 | 선택 시 체크 목록 열림 · 닫힘 |
| 2 | All | 선택 시 모든 옵션 체크, 옵션 하나를 해제하면 All 해제 |
| 3 | 옵션 | 선택 시 체크, 다시 선택하면 해제. 고른 옵션은 필드에 쉼표로 표시 |

### 5-h. Dropdown (2/2) · Date · Period · Combine

날짜 · 기간 드롭다운과 두 필드를 묶은 Combine 드롭다운을 정의한다. (기존 COMM-5-f)

![COMM-5-h(2/2)](images/comm-5-h-2.png)
*COMM-5-h(2/2) · Date · Period · Combine Dropdown*

**Type 3 · Date · Period Dropdown** — Date는 하루, Period는 시작일 ~ 종료일. 상태 · 크기는 Basic과 같다(Active = 캘린더가 열린 상태). 필드를 선택하면 캘린더 노출(COMM-5-d), 날짜를 고르고 Done을 누르면 값 표시 · 아이콘 완료 상태.

**Type 4 · Combine Dropdown** — Basic+Date · Basic+Basic. 두 필드를 라벨 하나로 묶어 앞 필드 선택에 따라 뒤 필드 값을 고른다. 각 필드의 동작 · 상태는 Basic · Date와 같다.

| 번호 | 영역 | 동작 |
|---|---|---|
| 1 | 앞 필드 | 기준 선택(Basic+Date: 날짜 기준, Basic+Basic: 상위 항목) |
| 2 | 뒤 필드 | 앞에서 고른 기준의 값 선택(날짜 · 기간 또는 하위 항목) |

### 5-i. Info Box

화면 안에 안내 문구를 표시하는 박스를 정의한다. (새로 추가)

![COMM-5-i](images/comm-5-i.png)
*COMM-5-i · Info Box*

- 필요하면 문구 앞에 상태 아이콘(상황에 맞는 아이콘)을 표시한다.
- 필요하면 오른쪽에 Text Button(COMM-5-c Type 2)을 표시한다.

### 5-j. Label

정보의 상태나 개수를 시각적으로 나타내는 라벨을 정의한다. (기존 COMM-5-r)

![COMM-5-j](images/comm-5-j.png)
*COMM-5-j · Label*

| Type | 이름 | 정의 · 조건 |
|---|---|---|
| Type 1 | Number Label | 개수를 숫자로 표시(글 옆 · 단독). 최대 `99+`(서비스에 따라 바꿀 수 있음) |
| Type 2 | Text Label | 상태를 글로 표시(축약어 가능). 상태값별 글자는 4장 표기 규칙, 색은 UI 정의 |
| Type 3 | Icon Label | 상태를 아이콘으로 표시 |
| Type 4 | Dot Label | 상태를 점으로 표시. 예: STAT 검체를 목록의 STAT 열에 점으로 |

### 5-k. Loading

데이터 · 화면을 처리하는 동안 정지나 오류로 느끼지 않게 표시하는 로딩을 정의한다. (기존 COMM-5-g)

![COMM-5-k](images/comm-5-k.png)
*COMM-5-k · Loading*

| Type | 이름 | 규칙 |
|---|---|---|
| Type 1 | Spinner | 처리 완료까지 원형 회전, 완료되면 Dim과 함께 사라짐. 화면 가운데, 필요 시 BG Dim(상태 Dimmed) · 아래 안내 문구. 로딩 중 그 영역 값은 `-`, 관련 버튼 비활성 |
| Type 2 | Skeleton | 화면 레이아웃 구조를 미리 보여 줌. 가운데에 아이콘과 안내 문구: Title `Loading data...` · Sub `Please wait a moment while we load your content.` |

### 5-l. Pagination

페이지를 이동하며 내용을 탐색하는 페이지네이션을 정의한다. (기존 COMM-5-i)

![COMM-5-l](images/comm-5-l.png)
*COMM-5-l · Pagination*

**Type 1 · Number Pagination** — 최대 10페이지씩, 10 단위로 번호가 바뀐다. 2페이지 이하는 « » 없이 ‹ ›만. 상태 예시: First · Second · Middle · Last · One Page · Two Page.

| 번호 | 영역 | 동작 |
|---|---|---|
| 1 | 페이지 번호 | 선택 시 그 페이지로 이동. 번호 위치는 그대로, 선택 표시만 이동 |
| 2 | ‹ › 버튼 | 이전 · 다음 페이지 |
| 3 | « » 버튼 | 10 단위로 이전 · 다음 묶음(예: 1~10에서 » → 11~20) |

| 상태 | 설명 |
|---|---|
| Default | 선택 전 페이지 번호 · 이동 가능한 버튼 |
| 선택 | 현재 페이지 |
| 비활성 | 이동할 페이지가 없는 버튼 |

**Type 2 · Indicator Pagination** — 현재 페이지와 전체 페이지 수를 표시하고 Prev · Next 버튼으로 이동한다.

### 5-m. Popup (1/4) · Basic Popup

별도 화면을 띄워 중요한 정보를 전달하거나 작업을 완료하도록 돕는 팝업을 정의한다. (기존 COMM-5-j)

![COMM-5-m(1/4)](images/comm-5-m-1.png)
*COMM-5-m(1/4) · Basic Popup*

- 조건: 필요 시 BG Dim, 화면 가운데. 버튼 영역은 스크롤과 관계없이 항상 노출. 내용이 팝업 높이를 넘으면 스크롤. 버튼이 3개 이상이면 닫기는 X 버튼으로.
- 동작: 팝업 위에 새 팝업이 뜨면 먼저 열린 팝업은 아래에 두고 Dim 한 겹을 더한 뒤 새 팝업을 띄운다(두 번째 Dim은 먼저 열린 팝업 영역에만, 농도는 UI 정의).

| Case | 쓰임 | 버튼 |
|---|---|---|
| Case 1 | 단순 정보 전달 | 오른쪽 위 X + 아래 닫기 |
| Case 2 | 입력 · 선택 후 저장 | 아래 취소(닫기) + 저장(완료) |
| Case 3 | 저장 불필요(고른 뒤 화면 전환 등, 예: 파일 저장 · 불러오기 위치 선택) | 아래 버튼 없이 오른쪽 위 X만 |

| 번호 | 영역 | 동작 |
|---|---|---|
| 1 | Title · Contents | 팝업 제목 · 내용 |
| 2 | X 버튼 | 선택 시 팝업 닫힘 |

### 5-m. Popup (2/4) · Import / Export Popup

Import · Export 기능을 고르면 뜨는 위치 선택 팝업을 정의한다(Basic Popup Case 3 형태).

![COMM-5-m(2/4)](images/comm-5-m-2.png)
*COMM-5-m(2/4) · Import / Export Popup*

- L-IOS 전용. 아래 버튼 없이 오른쪽 위 X만. 필요 시 BG Dim, 화면 가운데.
- 모드에 따라 문구가 바뀌고 예시대로 고정 노출: Export = `Select Export Destination` / `Choose where you want to save your file`, Import = `Select Import Source` / `Choose where you want to load your file from`.

| 번호 | 영역 | 동작 |
|---|---|---|
| 1 | USB Drive 버튼 | 파일 탐색기를 연결된 USB 목록이 보이는 상태로 연다(Export는 저장 위치, Import는 불러올 파일). 설명: `Saves to the connected USB drive` / `Imports from the connected USB drive` |
| 2 | Configured Drive 버튼 | 파일 탐색기를 System Setting에 등록된 경로로 연다. 설명: `Saves to the path set in System Settings` / `Imports from the path set in System Settings` |
| 3 | X 버튼 | 팝업 닫힘 |

### 5-m. Popup (3/4) · Stacked Popup

여러 개가 생기면 쌓아 두고 한 영역에서 하나씩 확인하는 팝업을 정의한다(Basic Popup Case 2 형태).

![COMM-5-m(3/4)](images/comm-5-m-3.png)
*COMM-5-m(3/4) · Event Stacked Popup*

- 팝업 위에 메시지 개수 · Close All, 오른쪽에 썸네일 목록. 썸네일은 5개씩, 넘으면 위 · 아래 버튼으로 스크롤.
- 2개 이상일 때만 메시지 개수 · Close All 노출. 내용이 많으면 줄이지 않고 모두 보이고, 최대 크기를 넘으면 스크롤.

| 번호 | 영역 | 동작 |
|---|---|---|
| 1 | 메시지 개수 | 지금 보는 순서 / 전체 개수(예: `1 / 5`), 옆에 팝업 종류 이름 |
| 2 | Close All 버튼 | 떠 있는 팝업 모두 닫힘 |
| 3 | 썸네일 목록 | 선택 시 그 팝업 표시, 지금 보는 팝업 강조, 닫기 전까지 목록에 유지 |
| 4 | ∧ ∨ 버튼 | 썸네일 목록 위 · 아래 스크롤 |
| 5 | 닫기 버튼 | 그 팝업만 닫히고 전체 개수에서 빠짐 |
| 6 | 이동 버튼 | 모든 팝업이 닫히고 해당 화면으로 이동 |

### 5-m. Popup (4/4) · Alert · Confirm

정보를 일방적으로 전달하는 Alert와 동의 · 확인을 구하는 Confirm을 정의한다.

![COMM-5-m(4/4)](images/comm-5-m-4.png)
*COMM-5-m(4/4) · Alert · Confirm*

**Type 2 · Alert** — OK를 누르기 전까지 다음 동작 불가. 필요 시 BG Dim, 화면 가운데. 화면 출력이 30초 이상 걸리면 지연 안내 Alert(`This is taking longer than expected.` / `Please check your internet connection.`).

| 상태 | 설명 |
|---|---|
| Done | 요청한 작업이 성공적으로 처리됨 |
| Warning | 작업은 가능하나 주의가 필요함 |
| Progress | 처리 예정, 완료까지 대기 필요 |
| Error | 작업이 중단되어 해결 안내가 필요함 |

**Type 3 · Confirm** — OK · Cancel 두 선택지. 결과 안내가 필요하면 OK 뒤 Alert 노출.

| 번호 | 영역 | 동작 |
|---|---|---|
| 1 | OK 버튼 | Alert: 닫힘 / Confirm: 작업 확정 · 실행 |
| 2 | Cancel 버튼 | 작업 중단, Confirm 닫힘 |

### 5-n. Progress Bar

길거나 복잡한 과정의 진행 상태와 단계를 보여 주는 표시를 정의한다. (기존 COMM-5-b)

![COMM-5-n](images/comm-5-n.png)
*COMM-5-n · Progress Bar*

| Type | 이름 | 규칙 |
|---|---|---|
| Type 1 | Horizontal Step | 여러 단계 화면 위쪽에 현재 단계와 전체 흐름(Step 1 ~ 4) 표시. 단순 인디케이터라 선택 불가, 단계 이동은 화면의 Previous · Next 버튼 |
| Type 2 | Vertical Step | 순서 있는 과정을 세로로 나열하고 단계별 상태 표시. 번호 순서대로, 단계 사이는 선으로 연결. 선택 불가 |

| 상태 | 설명 |
|---|---|
| 완료 | 지난 단계 |
| 진행 | 지금 진행 중인 단계 |
| 대기 | 아직 진행하지 않은 단계 |

### 5-o. Scroll Bar

제한된 영역을 넘는 콘텐츠를 스크롤로 이동하는 방식을 정의한다. (기존 COMM-5-k)

![COMM-5-o](images/comm-5-o.png)
*COMM-5-o · Scroll Bar*

| Case | 구성 | 동작 |
|---|---|---|
| Case 1 | Title 영역 고정 | 가장 기본. Title 영역은 위에 늘 고정, Content 영역만 그 아래로 스크롤 |
| Case 2 | 상단 Title · Tab 고정 | Title 아래 Tab이 있는 화면. Title · Tab 모두 고정, Content만 그 아래로 스크롤 |
| Case 3 | 하단 플로팅/고정 | 저장 등 핵심 액션 버튼(CTA)은 콘텐츠 양과 관계없이 화면 맨 아래 고정, 콘텐츠는 그 버튼 위까지만 스크롤 |

- 표 안의 스크롤은 COMM-5-g를 따른다.

### 5-p. Search Bar

조회 조건을 AND로 묶어 목록 데이터를 빠르게 찾는 검색 영역을 정의한다. (기존 COMM-5-s)

![COMM-5-p](images/comm-5-p.png)
*COMM-5-p · Search Bar*

- Text Field · Dropdown · Check Box 등 조회 조건과 함께 쓴다. 조건이 3개 이상이면 Reset 버튼을 둔다. 각 조건의 입력 규칙 · Default는 화면별로 정의한다.

| 번호 | 영역 | 동작 |
|---|---|---|
| 1 | Reset 버튼 | 설정한 조회 조건을 모두 초기화 |
| 2 | Search 버튼 | 모든 조회 조건을 AND로 적용해 결과 노출 |

### 5-q. Selection Controls

여러 항목 중 원하는 것을 고르거나 선택 상태를 바꾸는 컨트롤을 정의한다. (기존 COMM-5-l)

![COMM-5-q](images/comm-5-q.png)
*COMM-5-q · Selection Controls*

| Type | 이름 | 규칙 |
|---|---|---|
| Type 1 | Check Box | 0~N개 선택. Square · Round 두 형태. 선택 · 미선택이 섞이는 곳(데이터 테이블 등)은 Square만 Mix Selected 사용. 선택 시 선택 · 해제 전환 |
| Type 2 | Radio Button | 두 개 이상 중 하나만 선택. 선택 시 그 항목 선택, 기존 선택 해제 |
| Type 3 | Switch | 항목 상태를 따로 제어, 켜면 상태값이 바로 바뀜. Basic · Basic+Label(토글 안에 상태 글자) |

| 상태 | 설명 |
|---|---|
| Unselected | 선택 전 |
| Selected | 선택됨 |
| Disabled | 선택 불가 |
| Disabled Selected | 선택된 채 변경 불가 |
| Mix Selected | 선택 · 미선택 항목 공존 (Check Box Square만) |

### 5-r. Sorting

표 데이터를 날짜 · 숫자 · 글 등의 기준으로 정렬하는 기능을 정의한다. (기존 COMM-5-v)

![COMM-5-r](images/comm-5-r.png)
*COMM-5-r · Sorting*

- 정렬할 수 있는 열에만 정렬 아이콘. 처음 조회할 때 Default 정렬은 화면별 정의(예: Date 내림차순). 정렬 기능이 없는 화면은 첫 번째 열 내림차순. 다른 열을 정렬하면 이전 열의 정렬은 풀린다.

| 상태 | 설명 |
|---|---|
| Default | 정렬 전 |
| Descending | 내림차순 정렬됨 |
| Ascending | 오름차순 정렬됨 |

| 번호 | 영역 | 동작 |
|---|---|---|
| 1 | 열 헤더 | 선택 시 그 기준 내림차순, 정렬된 상태에서 다시 선택하면 오름차순 |

### 5-s. Tab

화면 안에서 콘텐츠 영역을 바꾸는 탭을 정의한다. (새로 추가)

![COMM-5-s](images/comm-5-s.png)
*COMM-5-s · Tab*

| Type | 이름 | 크기(높이) | 규칙 |
|---|---|---|---|
| Type 1 | Underline Tab | M 45px · S 36px | 같은 화면에서 콘텐츠 영역 전환. 최소 2개, Default 첫 번째 탭, 하나만 선택. 영역 폭을 넘으면 좌우 스크롤, 가려지는 오른쪽 끝은 Fade out. 같은 데이터의 보기 방식 전환은 Type 3 · 4 |
| Type 2 | Outline Tab | M 54px · S 48px | 테두리 상자 형태, 세로로 나열. 필요 시 오른쪽에 건수(0 미노출, 1~99 노출) · 화살표. Default 첫 번째, 하나만 선택 |
| Type 3 | Outline Container Tab | M 48px · S 36px | 칸으로 나뉜 상자 안에서 같은 화면의 보기 방식 · 영역 전환. Default 첫 칸, 하나만 선택, 선택 시 바로 전환 |
| Type 4 | Filled Container Tab | M 44px · S 36px | 회색 바탕 안 선택 칸으로 전환. 필요 시 글 앞 아이콘. Default 첫 칸, 하나만 선택 |

- 상태: Inactive(선택 전) · Active(선택됨). 선택 시 그 탭 콘텐츠로 전환.

### 5-t. Text Field

텍스트를 입력하고 고치는 입력 필드를 정의한다. (기존 COMM-5-n)

![COMM-5-t](images/comm-5-t.png)
*COMM-5-t · Text Field*

**Type 1 · Box Input**

- 필드 크기는 입력할 데이터 길이에 맞게. 필요 시 글자 수 제한(byte) 표기, Max · 오류 메시지는 SB 정의. 검증이 필요한 필드는 검증 뒤 다시 선택하면 입력값을 초기화할 수 있다(화면별 SB). 크기 L 48 · M 38. 라벨은 왼쪽(Default), 필요 시 위.

| 상태 | 설명 |
|---|---|
| Enabled | 입력 전 |
| Focused | 선택됨, 입력 대기 |
| Typing | 입력 중 |
| Complete | 입력 완료 |
| Error | 입력 오류 |
| Read Only | 값 확인만, 변경 불가 |
| Disabled | 입력 불가 |

| 번호 | 영역 | 동작 |
|---|---|---|
| 1 | 입력 필드 | 선택 시 Focused, 입력 시 Typing, 다른 곳을 누르면 Complete |
| 2 | 지우기 버튼 | 입력값 삭제 |
| 3 | 보기 버튼 (Password) | 입력값 표시, 다시 누르면 마스킹 |

**Box Input · Password Input** — 입력값은 `●`로 마스킹(Default), 보기 버튼은 늘 노출. 글자 수 Max는 SB 정의.

**Type 2 · Inline Input** — 글을 그 자리에서 입력 · 수정. 텍스트 · 편집 아이콘을 누르면 편집 상태(Typing). 상태: 수정 전 · 수정 중 · 수정 완료 · 입력 오류(Blank 등). 필요 시 글자 수 제한(byte), Blank면 오류 메시지.

### 5-u. Toast

작업 완료 · 오류 때 화면 아래에 잠깐 나타나는 알림을 정의한다. (기존 COMM-5-w)

![COMM-5-u](images/comm-5-u.png)
*COMM-5-u · Toast*

- 위치: 화면 아래. 노출 시간 2초 고정, 직접 닫을 수 없다.

| 구분 | 구성 | 쓰임 |
|---|---|---|
| Main Text | 1줄 | 단순 결과 알림 등 바로 알 수 있는 메시지 |
| Main + Sub Text | 2줄 | 조치 가이드 · 부연 설명이 필요할 때 |

### 5-v. Tool Tip

요소의 도움말 · 부가 정보를 화면을 가리지 않게 보여 주는 툴팁을 정의한다. (기존 COMM-5-o)

![COMM-5-v](images/comm-5-v.png)
*COMM-5-v · Tool Tip*

| Type | 이름 | 규칙 |
|---|---|---|
| Type 1 | Ellipsis Tooltip | 말줄임(…)된 글에 호버하면 전체 내용. 말줄임된 항목에만, 마우스 아웃 시 바로 사라짐. 폭 320, 넘치면 줄바꿈 |
| Type 2 | Info Tooltip | Info 아이콘에 호버하면 부가 정보. 아이콘 아래 기준 정렬, 아웃 시 바로 사라짐. 터치 위주 화면은 선택 시 노출(노출 · 닫기는 SB 정의). 필요 시 내용 왼쪽에 이미지 |
| Type 3 | Event Tooltip | 이벤트(Error · Warning) 아이콘을 누르면 내용 표시, X로 직접 닫음. Error Red · Warning Orange. 닫은 뒤에도 아이콘을 누르면 다시 노출. 문구는 SB 정의(예: `[모듈명] 오류 코드, 메시지`) |
| Type 4 | Table Tooltip | 대상에 마우스 오버 시 여러 항목 값을 표로. 아웃 시 바로 사라짐. 항목 앞 아이콘은 필요할 때만 |

### 5-w. Validation Check

입력값과 처리 결과를 확인해 알려 주는 규칙을 정의한다. 화면마다 따로 정할 것은 개별 SB에서 정의한다. (기존 COMM-5-Y)

![COMM-5-w](images/comm-5-w.png)
*COMM-5-w · Validation Check*

| Type | 이름 | 규칙 |
|---|---|---|
| Type 1 | Input Validation | API 호출 전 화면에서 입력값 확인. 검사 항목: 미입력 · 숫자/문자 구분 · 입력 형식. 오류 시 Error 상태(필수) + 오류 메시지(선택). 필드 Error 상태는 COMM-5-t |
| Type 2 | API Validation | API 호출 뒤 결과 알림. 성공: 완료 토스트(COMM-5-u). 오류: Alert · Confirm 등 결과 메시지(COMM-5-m) |

## 6. Mobile

모바일(MO) Common UX의 목차와 PC 정의와의 관계를 정리한다.

### 6-a. MO 목차 (M-COMM-0)

모바일 문서의 CID 규칙과 항목별 정의 방식을 정의한다.

![M-COMM-0](images/m-comm-0.png)
*M-COMM-0 · Common UX - MO 목차*

- CID = `M-COMM-n`(번호는 PC `COMM-n`과 같음).
- **MO 정의** = MO 정의 화면이 있음(BDS UI Kit 기준) · **PC 참고** = PC 정의를 그대로 씀 · **MO 제외** = MO에서 쓰지 않음(번호 비움) · **MO 전용** = PC에 없는 MO 항목(5장 끝 번호).

| CID | 항목 | 구분 |
|---|---|---|
| `M-COMM-1-a` | Gesture / Input Interaction Guide | MO 정의 |
| `M-COMM-2-a` · `2-b` | GNB / LNB · Profile Icon | MO 정의 |
| `M-COMM-3-a` | Base Frame Area | MO 정의 |
| `M-COMM-4-a` · `4-b` | Data Notation Rules · Consumables and Reagents | PC 참고 |
| `M-COMM-5-a` ~ `5-j` | Accordion · Badge · Button · Calendar · Card · Chips · Dropdown · Loading · Pagination · Popup | MO 정의 |
| `M-COMM-5-k` | Progress Step | MO 제외 |
| `M-COMM-5-l` ~ `5-u` | Scroll Bar · Search Bar · Selection Controls · Sorting · Tab · Table · Text Input · Toast · Tooltip · Validation Check | MO 정의 |
| `M-COMM-5-v` | Bottom Sheet | MO 전용 |

- MO 목차의 컴포넌트 번호는 PC 2.2 번호(5-a ~ 5-w)가 아니라 이전 번호 체계(Badge · Progress Step · Table · Text Input …)를 쓰고 있다. MO 화면을 볼 때는 이 표의 이름으로 찾는다.
- MO 정의 화면은 Common UX 페이지의 `M-COMM-*` 프레임과 `Connon UX (Mobile)` 섹션(`1796:183895`, `M-Components (Mobile)` 포함)에 있다. 이 가이드에는 목차만 옮겼다.
