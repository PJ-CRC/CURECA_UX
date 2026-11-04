# Service Mode

> 상태: 초안 v0.1 (2026-10-30). 출처: Common UX [COMM-3-a(2/2) Base Frame Area](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=877-2623) (Ver 2.0.01). 데이터: [service-mode-matrix.csv](service-mode-matrix.csv)

L-IOS는 설치할 때 Main Mode, Console Mode, TSS Mode 중 하나로 정해지고, 모드에 따라 LNB에 보이는 메뉴와 메뉴 안에서 쓸 수 있는 기능이 달라집니다. Service Mode는 고객사 제안을 우리가 검토해 확정하고 개발사에 넘기는 우리 정책입니다. 우리 화면에서 설정하는 대상은 아닙니다.

## 0. 모드별 용도

고객사 요청으로, 쓰는 자리와 사람에 따라 필요한 기능만 모아 보여 주려고 모드를 나눴습니다.

| 모드 | 설치 위치 | 용도 |
| --- | --- | --- |
| Main Mode | 장비에 붙어 있는 화면 | 거의 모든 기능 |
| Console Mode | 끌고 다니는 이동형 컴퓨터 (바코드 스캐너 있음) | 장비가 커서 돌아다니며 작업함. 소모품을 넣거나 장비 내부를 열 때 바코드를 찍어 작업. 장비에 무언가를 넣거나 비우는 메뉴만 보임 |
| TSS Mode | 장비와 떨어진 준비 공간의 컴퓨터 | 장비 가동 전에 넣을 Consumable과 Reagent를 준비 (Trolley 구성, PCR Reagent 구성 등). Reagent는 오염에 민감해 분리된 공간에서 작업할 수 있음 |

## 1. 노출 규칙

- 메뉴와 버튼은 Service Mode가 허용하고, User Type 권한(`policy/permission-matrix.csv`)도 허용할 때만 보입니다.
- [service-mode-matrix.csv](service-mode-matrix.csv)에서 O는 동작, X는 미동작입니다.
- Function이 All이면서 X인 메뉴는 그 모드의 LNB에 나오지 않습니다.
- Function 이름은 용어집의 기능 이름을 씁니다: All, View, Status Control, Note Writing, Initialize, Stop, Door Control, Change Settings

## 2. 모드별 LNB 메뉴

| Main Mode | Console Mode | TSS Mode |
| --- | --- | --- |
| Dashboard | Dashboard | Dashboard |
| | Material Setup (Load Materials, Empty Waste Bin) | Material Setup (Group Lots, Prepare Carrier) |
| Test Management (Test Order, Test Status) | Test Management (Test Order, Test Status) | Test Management (Test Order, Test Status) |
| Sample Tracking (Samples, 96-DWP, PCR Plate) | Sample Tracking (Samples, 96-DWP, PCR Plate) | Sample Tracking (Samples, 96-DWP, PCR Plate) |
| Instrument | Instrument | Instrument |
| Inventory | Inventory | Inventory |
| Setting (Policy, System, Protocol, Tube, Assay Pack Setting) | Setting (Policy, System, Protocol, Tube Setting) | Setting (Policy, System, Protocol, Tube Setting) |
| Information (Program) | Information (Program) | Information (Program) |
| Quick Start, Run | Quick Start, Run | |
| User Name (Profile, Logout), Shut Down | User Name (Logout만), Shut Down | User Name (Logout만), Shut Down |

## 3. 출처와 다른 점, 확인할 것

출처 프레임을 옮기면서 표기를 용어집에 맞췄고, 확인이 필요한 곳을 찾았습니다.

| # | 내용 | 처리 |
| --- | --- | --- |
| 1 | 출처는 "L-IOS 모드"라고 씀 | 용어집 표준어 Service Mode로 씀 |
| 2 | 기능 표는 "Settings", LNB는 "Setting". "Tube setting" 대소문자 | Setting, Tube Setting으로 맞춤 |
| 3 | LNB에는 세 모드 모두 Setting > AssayPack Setting이 있는데 기능 표에 행이 없음 | 2026-10-30 결정: Assay Pack Setting은 Main Mode만 제공. 표기는 화면 다수인 Assay Pack Setting |
| 4 | LNB에는 Information > Manual이 있는데 기능 표에 행이 없음 | 2026-10-30 결정: Manual은 아직 준비되지 않아 제외. 실제 메뉴에 들어오면 다시 정함 |
| 5 | 기능 표에서 Profile은 Console Mode, TSS Mode에서 X인데, 두 모드 LNB에 User Name이 있음 | 2026-10-30 확인: LNB의 User Name을 누르면 Profile과 Logout 메뉴가 열림. Console Mode와 TSS Mode에서는 Profile 진입점을 숨기고 Logout만 보임. 표의 X가 맞음 |
| 6 | 출처 프레임의 화면 정보(Date, 작성자)가 비어 있음 (YYYY.MM.DD, 홍길동) | 확정 날짜 확인 필요 |
| 7 | 정책서(2026.08.28)는 "Preset Mode(가칭)", "설치 모드"라고 씀 | 정책서 정제 때 Service Mode로 바꿈 |
