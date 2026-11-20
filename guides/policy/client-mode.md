# L-IOS Client 시스템별 기능 분류

> 상태: 초안 v0.2 (2026-11-12). v0.2에서 이름을 Service Mode → L-IOS Client Mode로, TSS Mode → MS Mode로 바꾸고 기능 표를 사용자가 준 새 표로 고침 (DS-0001, 서보경). 출처: 사용자가 준 표 (2026-11-12, 서보경, `discussions/DS-0001.md` 2절), Common UX [COMM-3-a(2/2) Base Frame Area](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=877-2623) (Ver 2.0.01). 데이터: [client-mode-matrix.csv](client-mode-matrix.csv)

L-IOS는 설치할 때 L-IOS Client Mode(Main Mode, Console Mode, MS Mode) 중 하나로 정해지고, 모드에 따라 LNB에 보이는 메뉴와 메뉴 안에서 쓸 수 있는 기능이 달라집니다. L-IOS Client Mode는 고객사 제안을 우리가 검토해 확정하고 개발사에 넘기는 우리 정책입니다. 우리 화면에서 설정하는 대상은 아닙니다.

## 0. 모드별 용도

고객사 요청으로, 쓰는 자리와 사람에 따라 필요한 기능만 모아 보여 주려고 모드를 나눴습니다.

| 모드 | 설치 위치 | 용도 |
| --- | --- | --- |
| Main Mode | 장비에 붙어 있는 화면 | 거의 모든 기능 |
| Console Mode | 끌고 다니는 이동형 컴퓨터 (바코드 스캐너 있음) | 장비가 커서 돌아다니며 작업함. 소모품을 넣거나 장비 내부를 열 때 바코드를 찍어 작업. 장비에 무언가를 넣거나 비우는 메뉴만 보임 |
| MS Mode (이전 TSS Mode) | 장비와 떨어진 준비 공간의 컴퓨터 | 장비 가동 전에 넣을 Consumable과 Reagent를 준비 (Trolley 구성, PCR Reagent 구성 등). Reagent는 오염에 민감해 분리된 공간에서 작업할 수 있음 |

- ※ 이 표는 v0.1(2026-10-30) 설명입니다. v0.2 기능 표에서 Group Lots와 Consumable·Reagent 준비(Load Consumables and Reagents into Trolley, Load PK/IC Tubes, Load PCR Reagents, Load MM Tubes)가 Console Mode로 옮겨지고 MS Mode에는 Load Samples into Trolley만 남아, Console Mode · MS Mode의 용도 설명이 기능 표와 맞지 않습니다. 새 설명은 논의 중입니다 (DS-0002).

## 1. 노출 규칙

- 메뉴와 버튼은 L-IOS Client Mode가 허용하고, User Type 권한(`policy/permission-matrix.csv`)도 허용할 때만 보입니다.
- [client-mode-matrix.csv](client-mode-matrix.csv)에서 O는 동작, X는 미동작입니다.
- Function이 All이면서 X인 메뉴는 그 모드의 LNB에 나오지 않습니다.
- Function 이름은 용어집의 기능 이름을 씁니다: All, View, Status Control, Note Writing, Initialize, Stop, Door Control
- Login의 All에는 Reset Initial Password가 들어갑니다(새 표의 "All (Includes Reset Initial Password)").

## 2. 모드별 LNB 메뉴

| Main Mode | Console Mode | MS Mode |
| --- | --- | --- |
| Dashboard | Dashboard | Dashboard |
| | Material Setup (Group Lots, Prepare Carrier, Load Materials, Empty Waste Bin, View Trolley Info) | Material Setup (Prepare Carrier) |
| Test Management (Test Order, Test Status) | Test Management (Test Order, Test Status) | Test Management (Test Order, Test Status) |
| Sample Tracking (Samples, 96-DWP, PCR Plate) | Sample Tracking (Samples, 96-DWP, PCR Plate) | Sample Tracking (Samples, 96-DWP, PCR Plate) |
| Instrument | Instrument | Instrument |
| Inventory | Inventory | Inventory |
| Setting (Policy, System, Protocol, Tube, Assay Pack Setting) | Setting (Policy, System, Protocol, Tube Setting) | Setting (Policy, System, Protocol, Tube Setting) |
| Information (Program) | Information (Program) | Information (Program) |
| Quick Start, Run | Quick Start, Run | |
| User Name (Profile, Logout), Shut Down | User Name (Profile, Logout), Shut Down | User Name (Profile, Logout), Shut Down |

- Prepare Carrier 안에서 Console Mode는 Load Consumables and Reagents into Trolley, Load PK/IC Tubes, Load PCR Reagents, Load MM Tubes를, MS Mode는 Load Samples into Trolley만 씁니다.

## 3. 출처와 다른 점, 확인할 것

출처 표를 옮기면서 표기를 용어집에 맞췄고, 확인이 필요한 곳을 찾았습니다.

| # | 내용 | 처리 |
| --- | --- | --- |
| 1 | 출처(Common UX)는 "L-IOS 모드"라고 씀 | 용어집 표준어 L-IOS Client Mode로 씀 (2026-11-12 서보경 결정으로 Service Mode에서 바꿈, DS-0001) |
| 2 | 기능 표는 "Settings", LNB는 "Setting". "Tube setting" 대소문자 | Setting, Tube Setting으로 맞춤. 2026-11-12 새 표도 "Settings"라 같은 처리 (DS-0001) |
| 3 | LNB에는 세 모드 모두 Setting > AssayPack Setting이 있는데 기능 표에 행이 없음 | 2026-10-30 결정: Assay Pack Setting은 Main Mode만 제공. 표기는 화면 다수인 Assay Pack Setting. 2026-11-12 새 표에도 행이 없으나 이 행은 남김 (DS-0001) |
| 4 | LNB에는 Information > Manual이 있는데 기능 표에 행이 없음 | 2026-10-30 결정: Manual은 아직 준비되지 않아 제외. 실제 메뉴에 들어오면 다시 정함 |
| 5 | 기능 표에서 Profile은 Console Mode, TSS Mode에서 X인데, 두 모드 LNB에 User Name이 있음 | 2026-10-30 확인: Console Mode와 TSS Mode에서는 Profile 진입점을 숨기고 Logout만 보임. → 2026-11-12 새 표에서 Profile이 세 모드 모두 O로 바뀜. LNB User Name을 누르면 세 모드 모두 Profile과 Logout이 열림 (DS-0001) |
| 6 | 출처 프레임의 화면 정보(Date, 작성자)가 비어 있음 (YYYY.MM.DD, 홍길동) | 확정 날짜 확인 필요 |
| 7 | 정책서(2026.08.28)는 "Preset Mode(가칭)", "설치 모드"라고 씀 | 정책서 정제 때 L-IOS Client Mode로 바꿈 |
| 8 | 2026-11-12 새 표에 Instrument > Management 행이 취소선(O / X / X)으로 있음 | 없앤 행. 이 표에는 v0.1부터 Management 행이 없어 바뀌는 칸 없음 (DS-0001) |
| 9 | 2026-11-12 새 표의 System Setting은 All 한 행(O / O / O) | v0.1의 View(O / O / O) · Change Settings(O / X / X) 두 행을 All 한 행으로 바꿈. 세 모드 모두 설정을 바꿀 수 있음 (DS-0001) |
| 10 | 알럿 Alert_030 원문은 "Main, Console, Material Setup 모드" | MS Mode로 읽음. 알럿 문구 정리는 `alert/alert-catalog.md` 4절 3 |

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 |
| --- | --- | --- | --- |
| v0.1 | 2026-10-30 | 최초 작성 (Service Mode, `policy/service-mode.md`) | Common UX COMM-3-a(2/2) |
| v0.2 | 2026-11-12 | 공식 문서명 "L-IOS Client 시스템별 기능 분류", 용어 L-IOS Client Mode, 모드 값 Main Mode · Console Mode · MS Mode(이전 TSS Mode)로 바꿈. 파일 이름 `client-mode.md` · `client-mode-matrix.csv`. 기능 표: Login Function 표기, Profile Console · MS O, Group Lots · Consumable·Reagent 준비 Console O · MS X, View Trolley Info 행 추가(Console만 O), System Setting All 한 행(세 모드 O). Assay Pack Setting 행과 Setting 표기는 그대로 | 사용자 결정 (서보경), DS-0001 |
