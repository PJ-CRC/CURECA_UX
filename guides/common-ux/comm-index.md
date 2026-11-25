# Common UX

> Common UX의 기준 문서입니다(2026-11-24 결정, 헌법 2 · 6조). Figma [UX-AI-TEST > Common UX](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=355-53300) 페이지(`355:53300`)에 반영합니다. 처음 내용은 2026-11-24 Figma에서 옮겼습니다. 모든 프레임의 Ver은 `2.0.01`입니다.

요소를 찾을 때 Figma를 뒤지기 전에 이 문서에서 먼저 찾습니다. 예시 그림과, 5절에 옮기지 않은 번호 · 영역 · 동작 표는 Figma 프레임에 있습니다.

- **하는 일:** Figma 프레임 머리의 설명을 글자 그대로 옮겼습니다.
- **예전 ID:** 기존 작업방 [APP,Web_Common UX](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=1-65) 페이지(`1:65`)의 같은 요소 프레임 이름입니다. 이름 · 하는 일로 짝을 맞췄습니다. 기존 작업방에 같은 요소가 없으면 `-`. 케이스 3에서 기존 디스크립션의 `공통 UX 참고` 번호를 새 번호로 바꿀 때 씁니다(`flow/3-design-case3.md` 3-3).
- **쓰인 컴포넌트:** 그 프레임 Body에 가장 바깥 인스턴스로 놓인 컴포넌트(세트) 이름입니다. 예시 화면을 보이려고 놓은 것(예: COMM-5-o의 GNB · LNB)도 섞여 있습니다. 키는 아래 "컴포넌트 키" 표에 있습니다.
- **이 MD에만 두는 것:** 예전 ID, 쓰인 컴포넌트, 컴포넌트 키, "컴포넌트 고르는 법", Type마다 "컴포넌트" · "속성 쓰는 법" · "가르는 법" 줄.
- 1 ~ 4(Overview · Navigation · Layout · Writing)의 본문은 아직 옮기지 않았습니다.
- 같은 페이지의 SB-Components (기획 공통) 프레임(패널 · 번호 표시 · 업데이트 메모 · 사용자 확인 라벨 · 목록 · 시스템 구분 · 기획 진행 표시)은 화면 요소가 아니라 이 문서에 두지 않습니다. `flow/3-design.md` 공통 3-2 "기획 공통 컴포넌트"를 봅니다.

## 1 ~ 4. Overview · Navigation · Layout · Writing

| COMM | 이름 | 하는 일 | 예전 ID | 쓰인 컴포넌트 | Figma |
| --- | --- | --- | --- | --- | --- |
| COMM-1-a | Gesture / Input Interaction Guide | Tablet 제스처와 PC 외부 입력(마우스·키보드)의 액션 가이드를 정의합니다. | COMM-1-a | (모으지 않음) | [831:845](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=831-845) |
| COMM-2-a | GNB / LNB | 시스템(L-IOS·T-IOS)별 GNB·LNB 구성을 정의합니다. | - | Navigation/GNB, Navigation/LNB | [835:885](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=835-885) |
| COMM-2-b | Profile Icon | 사용자 권한별 프로필 아이콘을 정의합니다. | COMM-5-p | Icon/Profile, LNB/Profile | [836:1542](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=836-1542) |
| COMM-3-a(1/2) | Base Frame Area(1/2) | L-IOS·T-IOS 화면의 기본 프레임(GNB·LNB·Contents 영역)과 사용자 유형에 따른 프로그램 종료 버튼을 정의합니다. | COMM-3-a(1/2) | Navigation/GNB, Navigation/LNB, Interface/Close | [858:1600](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=858-1600) |
| COMM-3-a(2/2) | Base Frame Area(2/2) | L-IOS 모드(Main·Console·TSS)별 LNB 노출 메뉴와 메뉴 단위 기능 동작 여부를 정의합니다. | COMM-3-a(2/2) | Navigation/LNB | [877:2623](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=877-2623) |
| COMM-4-a(1/4) | Data Notation Rules(1/4) | 날짜·시간, 검사 항목·검체 유형, 소모품·시약, Module명을 화면에 표기하는 형태와 노출 순서를 정의합니다. | COMM-4-a | (모으지 않음) | [918:2771](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=918-2771) |
| COMM-4-a(2/4) | Data Notation Rules(2/4) | CURECA 장비 전체의 구동 상태값과 구동 컨트롤러, 장비 통합 상태 처리 조건, 도어 잠금 해제 조건을 정의합니다. | COMM-4-a | (모으지 않음) | [918:3839](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=918-3839) |
| COMM-4-a(3/4) | Data Notation Rules(3/4) | 장비 모듈과 모듈 하위 Unit(Device·Storage·Waste Bin)의 상태값과 Module별 Unit 구성 정보를 정의합니다. | COMM-4-a | (모으지 않음) | [907:2691](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=907-2691) |
| COMM-4-a(4/4) | Data Notation Rules(4/4) | 검체·Plate·검사 배치의 검사 진행 상태와 재고·시약 만료 상태, 이벤트 정보를 정의합니다. | COMM-4-a | (모으지 않음) | [908:2885](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=908-2885) |
| COMM-4-b(1/5) | Data Notation Rules for Consumables and Reagents(1/5) | 소모품·시약을 함께 표시할 때의 순서, 문자열 정렬, Tip 용량·그룹명 표기, 재고 0 표기, 입고 단위 수량 기준을 정의합니다. | COMM-4-b | (모으지 않음) | [943:3102](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=943-3102) |
| COMM-4-b(2/5) | Data Notation Rules for Consumables and Reagents(2/5) | 소모품과 시약을 카드·그룹으로 분류하는 기준과 시약 태그(Chip)를 정의합니다. | COMM-4-b | (모으지 않음) | [943:3678](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=943-3678) |
| COMM-4-b(3/5) | Data Notation Rules for Consumables and Reagents(3/5) | 소모품·시약 목록의 정렬 순서를 카드형·목록형 기준으로 정의합니다. | COMM-4-b | (모으지 않음) | [943:4790](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=943-4790) |
| COMM-4-b(4/5) | Data Notation Rules for Consumables and Reagents(4/5) | 소모품·시약이 섞인 구성품 단위 목록(예: Inventory > Overview 탭)의 정렬 순서를 정의합니다. | COMM-4-b | (모으지 않음) | [944:3476](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=944-3476) |
| COMM-4-b(5/5) | Data Notation Rules for Consumables and Reagents(5/5) | 소모품·시약의 재고 수량을 수량과 입고 단위 개수로 표기하는 형식을 정의합니다. | COMM-4-b | (모으지 않음) | [943:6003](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=943-6003) |

## 5. Component

| COMM | 이름 | 하는 일 | 예전 ID | 쓰인 컴포넌트 | Figma |
| --- | --- | --- | --- | --- | --- |
| COMM-5-a | Accordion | 하위 패널을 접고 펼쳐 화면 영역을 효과적으로 활용할 때 사용합니다. | COMM-5-a | Accordion | [992:4365](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=992-4365) |
| COMM-5-b | Breadcrumb | 현재 위치를 안내하고 상위 계층으로 이동할 수 있는 경로를 제공합니다. | - | Breadcrumb, Breadcrumb/Item | [1945:12023](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1945-12023) |
| COMM-5-c | Button | 선택을 통해 상호작용을 유도하거나 작업을 수행할 수 있습니다. | COMM-5-c | Square, Basic (Button), Underline, Floating Button | [1039:4658](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1039-4658) |
| COMM-5-d | Calendar | 년/월/일을 확인하거나 선택할 수 있는 기능을 제공합니다. | COMM-5-d, COMM-5-d(1/5) ~ (5/5) | Calendar/Picker, Calendar/Day, Calendar/Month, Calendar/Years&Month Dropdown, Dropdown (Calendar) | [1088:8034](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1088-8034) |
| COMM-5-e | Card | 하나의 주제에 대한 정보를 묶어 보여주고, 필요 시 관련 페이지로 연결합니다. | COMM-5-t | Card/List, Card/Table, Card/Header Table | [1407:9058](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1407-9058) |
| COMM-5-f | Chips | 콘텐츠를 구분하여 제공할 경우 사용하며, 임시 상태가 아닌 완결성 있는 메뉴 영역에서 사용 가능합니다. | COMM-5-e | Chip/Filter, Chip/Anchor | [1154:6346](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1154-6346) |
| COMM-5-g | Data Table | 그리드 형식의 표를 사용해 많은 양의 데이터를 효율적으로 정리하고 빠르게 파악할 수 있게 해줍니다. | COMM-5-m(1/2), COMM-5-m(2/2) | Table/Header Cell, Table/Cell, Dropdown, Pagination/Number, Tooltip | [1350:8241](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1350-8241) |
| COMM-5-h(1/2) | Dropdown(1/2) | 옵션 리스트 중 하나 또는 복수의 옵션을 선택하는 경우 사용합니다. | COMM-5-f(1/2) | Dropdown | [1191:6944](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1191-6944) |
| COMM-5-h(2/2) | Dropdown(2/2) | 옵션 리스트 중 하나 또는 복수의 옵션을 선택하는 경우 사용합니다. | COMM-5-f(2/2) | Dropdown, Combine Dropdown | [1191:7398](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1191-7398) |
| COMM-5-i | Info Box | 화면 안에 안내 문구를 표시할 때 사용합니다. | - | Info Box | [1945:12428](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1945-12428) |
| COMM-5-j | Label | 정보의 상태나 개수를 시각적으로 나타내는 요소입니다. | COMM-5-r | Number Badge, Status Base, Status Icon Base, Frame/Instrument_Status Circle Icon | [1016:4497](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1016-4497) |
| COMM-5-k | Loading | 데이터나 화면을 처리하는 동안 사용자가 정지 또는 오류라고 느끼지 않도록 화면에 표시하는 요소입니다. | COMM-5-g | Basic (Loading), Divider, layout/spacing, Date&Time/Clock_Outlined | [1239:7963](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1239-7963) |
| COMM-5-l | Pagination | 사용자가 페이지를 이동하면서 직접 내용을 탐색하며 컨트롤 할 수 있습니다. | COMM-5-i | Pagination/Number, Pagination/Page Number, Pagination/Icon Button, Pagination/Indicator, Pagination/Text Button | [1257:7423](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1257-7423) |
| COMM-5-m(1/4) | Popup(1/4) | 별도의 화면을 띄워 중요한 정보를 전달하거나 작업을 완료하도록 돕는데 사용합니다. | COMM-5-j(1/4) | Interface/Close, Square | [1276:7531](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1276-7531) |
| COMM-5-m(2/4) | Popup(2/4) | 페이지 내 Import 또는 Export 기능 선택 시 노출되는 팝업입니다. (Basic Popup Case 3 형태) | COMM-5-j(4/4) | Interface/Close | [1282:7666](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1282-7666) |
| COMM-5-m(3/4) | Popup(3/4) | 여러 개가 발생할 경우 누적되어 한 영역에서 하나씩 확인하는 팝업입니다. (Basic Popup Case 2 형태) | - | Square, Arrow/Chevron_Right | [1458:9299](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1458-9299) |
| COMM-5-m(4/4) | Popup(4/4) | 사용자에게 정보를 일방적으로 전달하거나(Alert), 동의·확인을 구할 때(Confirm) 사용합니다. | COMM-5-j(3/4) | Popup/Alert, Icon/Popup Status | [1277:8114](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1277-8114) |
| COMM-5-n | Progress Bar | 복잡하거나 긴 일련의 과정을 수행할 때, 진행 상태와 단계를 시각화하기 위해 사용합니다. | COMM-5-b | Progress Step/Horizontal, Progress Step/Horizontal Item, Progress Step/Vertical Item | [1291:9820](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1291-9820) |
| COMM-5-o | Scroll Bar | 제한된 영역을 초과하는 콘텐츠를 제공할 경우 스크롤을 이용해 영역 내에서 화면을 이동할 수 있습니다. | COMM-5-k | (예시 화면) Card/List, Square, Navigation/GNB, Navigation/LNB | [654:808](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=654-808) |
| COMM-5-p | Search Bar | 제공하는 정보를 And 조건으로 설정하여 빠르게 찾을 수 있도록 제공하는 기능입니다. | COMM-5-s | Text Input, Dropdown, Checkbox, Square | [1297:8068](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1297-8068) |
| COMM-5-q | Selection Controls | 여러 항목 중 원하는 항목을 선택하거나 선택 상태를 전환할 때 사용합니다. | COMM-5-l | Square Checkbox, Checkbox, Circle Radio Button, Toggle Switch | [1312:9232](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1312-9232) |
| COMM-5-r | Sorting | 테이블 데이터를 다양한 기준(날짜, 숫자, 텍스트 등)에 따라 정렬하여 정보를 효율적으로 탐색할 수 있도록 지원하는 기능입니다. | COMM-5-v | Table/Header Cell | [1335:19065](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1335-19065) |
| COMM-5-s | Tab | 화면 안에서 콘텐츠 영역을 전환할 때 사용합니다. | - | Tab/Underline, Tab/Outline, Tab/Outline Container Item, Tab/Filled Container | [1501:9353](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1501-9353) |
| COMM-5-t | Text Field | 텍스트를 입력하고 수정하는 입력 필드입니다. | COMM-5-n | Text Input, Text Input/Inline, Interface/Eye_Outlined, Interface/Eye_Slash_Outlined | [1364:9795](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1364-9795) |
| COMM-5-u | Toast | 사용자 작업 완료 또는 오류 발생 시 화면 하단에 일시적으로 나타나 사용자에게 정보를 전달하는 기능입니다. | COMM-5-w | Toast | [1375:55881](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1375-55881) |
| COMM-5-v | Tool Tip | 요소에 대한 도움말이나 부가 정보를 화면을 가리지 않게 보여주는 요소입니다. | COMM-5-o | Tooltip, Tooltip/Event, Tooltip/Table, Interface/Info_Circle_Outlined, Interface/Exclamation_Circle_Solid, Table/Cell | [1392:10293](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1392-10293) |
| COMM-5-w | Validation Check | 입력값과 처리 결과를 확인해 사용자에게 알려주는 규칙입니다. 화면별 별도 정의가 필요한 경우, 개별 SB에서 별도 정의합니다. | COMM-5-Y | Text Input, Toast, Popup/Alert | [1402:10520](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=1402-10520) |

- 새 Common UX 프레임 머리의 "기존 …" 글자는 기존 작업방과 다른 곳이 있어 쓰지 않았습니다(예: 5-b · 5-i · 5-s에 `기존 COMM-5-l`, 2-a · 2-b에 `기존 SB-2-a` · `SB-2-b`).

## 5. Component · Type 정의

Figma 각 프레임 본문 왼쪽의 Type 제목과 라벨 줄(정의 · 형태 · 조건 등. COMM-5-o는 "동작" 줄도)을 라벨 · 글자 그대로 옮겼습니다. 한 칸 안의 여러 줄은 줄마다 글머리 기호로 나눴습니다. 번호 · 영역 · 동작 표는 그릴 요소나 적을 값을 정한 Type(5-g Basic Table, 5-t Box Input · Password Input · Inline Input, 5-m(2/4) Import/Export Popup)만 글자 그대로 옮겼습니다. 나머지 표는 Common UX 동작이라 디스크립션에 `공통 UX 참고`로만 적으므로 옮기지 않았고, 예시 그림과 함께 Figma 프레임에 있습니다. "컴포넌트" 줄(그 Type을 그릴 때 쓰는 컴포넌트 이름 · 원본 위치 · 고르는 속성), "속성 쓰는 법" 줄(컴포넌트 속성을 켜고 끄는 때), "가르는 법" 줄(헷갈리는 Type끼리 고르는 기준)은 이 MD에만 둡니다(Figma에 넣지 않음). "컴포넌트" 줄의 괄호는 Common UX 페이지 P-Components (PC) 프레임 안의 Group 이름이고, 키는 아래 "컴포넌트 키" 표에서 같은 이름으로 찾습니다. 컴포넌트를 키로 가져오면 속성은 함께 읽히므로, 고를 때 알아야 하는 속성만 적었습니다.

### 컴포넌트 고르는 법

(MD에만, 초안 2026-11-24) 화면 MD 디스크립션의 요소가 **하는 일**로 먼저 묶음을 고르고, 묶음 안에서 Type을 고릅니다. 자세한 기준은 각 Type의 정의 · 조건 · 가르는 법을 봅니다. 2-a · 2-b · 3-a(화면 틀)와 4-a · 4-b(표기 규칙)는 요소를 고르는 대상이 아니라 넣지 않았습니다.

#### 1. 값을 고름

- 선택지를 펼쳐 놓고 하나만 고름 → Radio Button (5-q)
- 선택지를 펼쳐 놓고 여럿 고름 → Check Box (5-q)
- 목록을 열어 하나 고름 → Basic Dropdown (5-h). Common UX 예시의 노출 개수 · 조회 조건 · 연월 고르기
- 목록을 열어 여럿 고름 → Multi-Select Dropdown (5-h)
- 고르는 즉시 화면 콘텐츠를 걸러 보여 줌 → Filter Chip (5-f)
- 항목의 상태를 켜고 끔(즉시 바뀜) → Switch (5-q)
- 날짜 하루 · 기간을 입력함 → Date · Period Dropdown (5-h), 누르면 Date Calendar(날짜) · Month Calendar(월) (5-d)
- 앞에서 고른 기준에 따라 뒤의 값을 고름 → Combine Dropdown (5-h)

#### 2. 값을 입력함

- 입력 폼에서 글자를 입력함 → Box Input (5-t)
- 비밀번호를 입력함 → Password Input (5-t)
- 보기 화면에서 글자를 그 자리에서 고침 → Inline Input (5-t)
- 조회 조건 여러 개를 묶어 [Search]로 조회함 → Search Area (5-p)

#### 3. 정보를 보여 줌

- 한 대상의 항목명 · 값을 줄마다 보여 줌 → List Card (5-e)
- 한 대상에 속한 세부 항목을 열 제목으로 비교함 → Table Card (5-e)
- 위와 같되 제목 띠 · 버튼 없이 첫 열 제목 자리에 카드 제목을 둠 → Header Table Card (5-e)
- 화면의 조회 결과 목록을 보여 줌 → Basic Table (5-g), 데이터가 없으면 No Data
- 내용을 접고 펼 수 있어야 함 → Card Accordion(카드) · Line Accordion(표 안 그룹 행) (5-a)
- 상태 · 개수를 짧게 표시함 → Number Label(개수) · Text Label(상태 글자) · Icon Label(상태 아이콘) · Dot Label(점) (5-j)
  - 상태값은 `glossary/status-values.csv`의 그 줄 "컴포넌트" 칸의 컴포넌트(`Status/Sample` 등)를 쓰고, 화면 예시 글자의 값과 같은 이름의 Variant로 고름. 색은 Variant에 들어 있음("Color" 칸). "컴포넌트" 칸이 `-`인 상태값만 Status Base를 씀. 숫자 · 날짜로 정해지는 상태(재고 등)는 화면 예시 글자의 값으로 csv 조건에 맞춰 계산함
- 화면 안에 안내 문구를 늘 보여 줌 → Info Box (5-i)
- 마우스를 올리거나 아이콘을 누를 때만 부가 정보를 보여 줌 → Ellipsis · Info · Event · Table Tooltip (5-v)

#### 4. 작업을 실행하거나 이동함

- 작업을 실행하는 버튼 → Square Button Filled · Outlined · Gray (5-c)
- 글자로 된 버튼 · 링크 → Text Button Basic · Underline (5-c)
- 화면 우측 하단에 떠서 맨 위로 가거나 전체 화면으로 키움 → Floating Button - Top Button · Expand Button (5-c)
- 상위 계층으로 가는 경로 → Breadcrumb (5-b)
- 목록의 페이지를 넘김 → Number Pagination · Indicator Pagination (5-l), 유형은 디스크립션에 적힌 대로(`reference-rules/description.md` "Common UX가 화면에 맡긴 것")
- 같은 화면 안에서 영역을 바꿈 → Tab (5-s), COMM-5-s 머리의 가르는 법
- 목록 안의 카드 위치로 이동함 → Anchor Chip (5-f)
- Square Button ↔ Text Button: 버튼이 하나뿐이면 Square Button Filled. 다른 곳으로 가는 링크는 Text Button Underline

#### 5. 알리거나 확인을 받음

- 작업 결과를 화면 하단에 잠깐(2초) 알림 → Toast (5-u)
- OK를 누를 때까지 다음 동작을 막고 알림 → Alert (5-m(4/4))
- 동의 · 확인을 받음(OK · Cancel) → Confirm (5-m(4/4))
- 결과에 따라: 성공은 Toast, 오류는 Alert · Confirm (5-w API Validation). 기존 화면의 Alert을 Toast로 바꾸는 것은 바꾸지 않고 질문 대기로 둠(`flow/3-design.md` 공통 1의 8)
- 별도 화면을 띄워 정보를 보여 주거나 작업하게 함 → Basic Popup Case 1 · 2 · 3 (5-m(1/4))
- 파일을 불러오거나 저장할 위치를 고름(L-IOS) → Import/Export Popup (5-m(2/4))
- 여러 개가 쌓여 하나씩 확인함 → Event Stacked Popup (5-m(3/4))
- 입력값이 틀렸을 때 필드에 Error 표시 → Input Validation (5-w)

#### 6. 진행 · 대기를 보여 줌

- 여러 단계 화면 상단에 현재 단계를 표시함 → Horizontal Step (5-n)
- 순서가 있는 과정을 세로로 나열함 → Vertical Step (5-n)
- 처리 중 · 불러오는 중을 표시함 → Spinner · Skeleton (5-k), 유형은 디스크립션에 적힌 대로(`reference-rules/description.md` "Common UX가 화면에 맡긴 것")
- 스크롤할 때 위 · 아래 영역을 고정함 → Scroll Bar 세 경우 (5-o), 경우는 디스크립션에 적힌 대로(`reference-rules/description.md` "Common UX가 화면에 맡긴 것")

### COMM-5-a Accordion

#### Type 1 Card Accordion

- 라벨 줄 없음 (동작 표만 있음)
- **컴포넌트** (MD에만)
  - Accordion (Group/List · Card · Accordion · Table · Tab), 속성 Type=Card

#### Type 2 Line Accordion

- **참고**
  - 표 안에서 그룹 행을 접고 펴는 경우 이 유형의 규칙을 따르며, 표 모양은 5-g Data Table에서 정의
- **컴포넌트** (MD에만)
  - Accordion (Group/List · Card · Accordion · Table · Tab), 속성 Type=Line

### COMM-5-b Breadcrumb

#### Type 1 Breadcrumb

- **정의**
  - 현재 위치를 안내하는 탐색 보조 도구로, 상위 계층으로 이동할 수 있는 경로 제공
- **형태**
  - 2~5 Depth 네 가지 형태 제공
- **조건**
  - 화면 Title 하단에 노출
  - 현재 페이지의 상위 카테고리·페이지를 최대 5개까지 표시
  - 마지막 항목은 현재 위치(Current Page)로 표시
- **컴포넌트** (MD에만)
  - Breadcrumb (Group/Navigation), 속성 Class(2 / 3 / 4 / 5 Depth). 항목 하나는 Breadcrumb/Item

### COMM-5-c Button

#### Type 1 Square Button

- **Filled**
  - 화면 · 팝업의 주요 작업(Save · OK · Search · Done 등)을 수행하는 버튼. 버튼이 하나뿐이면 Filled
- **Gray**
  - 검색 영역에서 조회 조건을 초기화하는(Reset) 버튼
- **Outlined**
  - 주요 작업 옆에 놓이는 보조 작업(Cancel · Close 등)이나 다른 화면으로 이동(More)하는 버튼
- **크기**
  - XL 56px · L 48px · M 40px · S 32px (높이, 예시는 M 기준)
- **컴포넌트** (MD에만)
  - Square (Group/Button · Chip), 속성 Style(Filled / Gray / Outlined) · Size(XL / L / M / S)
- **가르는 법** (MD에만)
  - Filled는 한 버튼 묶음에 하나(주요 작업)만 씀. 취소 · 닫기 · 이동은 Outlined, 조회 조건 초기화(Reset)는 Gray

#### Type 2 Text Button

- **Basic**
  - 화면 안에서 바로 실행하는 작업에 쓰는 밑줄 없는 글자 버튼
- **Underline**
  - 다른 화면 · 팝업 · 외부 문서로 이동하는 링크에 쓰는 밑줄 그은 글자 버튼
- **크기**
  - XXL 24px · XL 20px · L 18px · M 16px · S 14px · XS 12px (글자 크기, 예시는 M 기준)
- **컴포넌트** (MD에만)
  - Basic · Underline (Group/Button · Chip): Basic은 Basic, Underline은 Underline 컴포넌트. 속성 Size(XXL ~ XS)
- **가르는 법** (MD에만)
  - 누르면 다른 곳(화면 · 팝업 · 문서)으로 가면 Underline, 그 자리에서 작업이 실행되면 Basic
  - Square Button ↔ Text Button: 버튼이 하나뿐이면 Square Button Filled(예: 혼자 놓인 Refresh)

#### Type 3 Floating Button - Top Button

- **정의**
  - 화면 우측 하단에 플로팅 형태로 노출되는 버튼(Floating Button)
  - 긴 페이지를 스크롤할 때 스크롤 이동 수고를 줄여 화면 최상단으로 쉽고 빠르게 돌아갈 수 있게 하는 퀵 컨트롤 요소
- **조건**
  - 1개 화면 높이(1 Viewport / PC: 500px 기준) 이상 스크롤 시 페이드인 노출
  - 화면 최상단(Top: 0) 도달 시 페이드아웃 미노출
- **컴포넌트** (MD에만)
  - Floating Button (Group/Button · Chip), 속성 Type=Top

#### Type 4 Floating Button - Expand Button

- **정의**
  - 화면 우측 하단에 플로팅 형태로 노출되는 버튼(Floating Button)
  - 콘텐츠 영역을 전체 화면으로 확대해 보여 주는 버튼
- **조건**
  - X 버튼은 마우스 커서 이동 시 페이드인 노출, 움직임이 없을 경우 페이드아웃 미노출
- **컴포넌트** (MD에만)
  - Floating Button (Group/Button · Chip), 속성 Type=Expand

### COMM-5-d Calendar

#### Type 1 Date Calendar

- **정의**
  - 날짜(년/월/일)를 확인하거나 선택하는 캘린더로 시작·종료 두 달을 나란히 보여 줌
- **조건**
  - 최초 진입 시 Default(오늘 기준 7일 전 ~ 오늘)가 선택된 상태
  - 선택일로부터 최대 1년까지 선택 가능
  - 오늘 이후 날짜는 선택 불가
  - 날짜를 고르기 전에는 Done 비활성
- **컴포넌트** (MD에만)
  - Calendar/Picker (Group/Input · Selection), 속성 Type=Date. 안의 날짜는 Calendar/Day, 연 · 월 고르기는 Calendar/Years&Month Dropdown
  - 캘린더를 여는 입력 필드는 Date · Period Dropdown(5-h)을 씀

#### Type 2 Month Calendar

- **정의**
  - 월을 선택하는 캘린더로 시작·종료 두 해를 나란히 보여 줌
- **조건**
  - 이번 달을 선택하면 어제까지의 합계를 보여 줌
- **컴포넌트** (MD에만)
  - Calendar/Picker (Group/Input · Selection), 속성 Type=Month. 안의 월은 Calendar/Month

### COMM-5-e Card

#### Type 1 List Card

- **정의**
  - 줄마다 왼쪽에 항목명, 오른쪽에 값을 두어 한 대상의 정보를 좌우로 나열한 2열 정보 카드
- **조건**
  - 줄 수 1~10
  - 카드 전체를 선택 영역으로 쓰는 경우 선택 시 상세 노출 (SB 정의)
  - Button은 연관 정보를 팝업이나 다른 화면으로 이어 볼 때만 노출 (없으면 제목만)
- **예시**
  - Samples 상세(General 등)
- **컴포넌트** (MD에만)
  - Card/List (Group/List · Card · Accordion · Table · Tab), 속성은 아래 "속성 쓰는 법"
- **속성 쓰는 법** (MD에만)
  - Title: 카드 제목. 끌 수 없음(늘 보임)
  - Item: 줄 수 (조건 "줄 수 1~10")
  - Button: 연관 정보를 팝업이나 다른 화면으로 이어 볼 때 켜고, 아니면 끔
- **가르는 법** (MD에만)
  - List Card ↔ Table Card: 항목명이 줄마다 왼쪽에 있으면 List Card, 열 제목이 맨 위 한 줄에 있으면 Table Card. 줄 수로 가르지 않음

#### Type 2 Table Card

- **정의**
  - 맨 위 줄에 열 제목을 두고, 한 대상에 속한 세부 항목을 줄마다 비교하는 정보 카드
- **조건**
  - 줄 수 1~10, 열 최대 4개 (첫 열 넓게)
  - 필요 시 제목 아래 Tag, 줄 오른쪽 Status 아이콘 사용
  - Button은 연관 정보를 팝업이나 다른 화면으로 이어 볼 때만 노출 (없으면 제목만)
- **예시**
  - Run Preparation(Tips 상세 등)
- **컴포넌트** (MD에만)
  - Card/Table (Group/List · Card · Accordion · Table · Tab), 속성은 아래 "속성 쓰는 법"
  - Status 레이어의 아이콘: Icon/Inventory Status, 속성 Status(Sufficient / Low / Insufficient)
- **속성 쓰는 법** (MD에만)
  - Title: 카드 제목. 끌 수 없음(늘 보임). 제목 띠 없이 첫 열 제목 자리에 카드 제목을 두는 카드는 Type 3 Header Table Card
  - Item: 줄 수 (조건 "줄 수 1~10")
  - Button: 연관 정보를 팝업이나 다른 화면으로 이어 볼 때 켜고, 아니면 끔
  - Columns: 열 수 (조건 "열 최대 4개")
  - Tag: 제목 아래에 태그를 보여 줘야 하면 켜고, 아니면 끔. 컴포넌트 안 Header > Title Group > Tag(Square Text Badge)로, 따로 컴포넌트를 찾지 않음
  - Status: 줄마다 상태 아이콘을 보여 줘야 하면 켜고, 아니면 끔. 컴포넌트 안 각 줄의 Status(Icon/Inventory Status)로, 속성 하나로 모든 줄을 함께 켜고 끔
- **가르는 법** (MD에만)
  - List Card ↔ Table Card: 항목명이 줄마다 왼쪽에 있으면 List Card, 열 제목이 맨 위 한 줄에 있으면 Table Card. 줄 수로 가르지 않음
  - Table Card ↔ Basic Table: 한 대상에 속한 세부 항목이면 Table Card, 화면의 조회 결과면 Basic Table. 놓인 자리 · 줄 수로 가르지 않음
  - Table Card ↔ Header Table Card: 카드 제목 띠 · More 버튼 · Tag가 필요하면 Table Card, 카드 제목을 첫 열 제목 자리에 두고 띠 · 버튼이 필요 없으면 Header Table Card

#### Type 3 Header Table Card

- **정의**
  - 제목 띠 없이 첫 열 제목 자리에 카드 제목을 두고, 한 대상에 속한 세부 항목을 줄마다 비교하는 정보 카드
- **조건**
  - 줄 수 1~10, 열 최대 4개 (첫 열 넓게)
  - 필요 시 줄 오른쪽 Status 아이콘 사용
  - Button · Tag 없음 (연관 정보를 이어 보거나 Tag가 필요하면 Table Card)
- **예시**
  - Inventory Consumables(소모품 카드)
- **컴포넌트** (MD에만)
  - Card/Header Table (Group/List · Card · Accordion · Table · Tab), 속성은 아래 "속성 쓰는 법"
  - Status 레이어의 아이콘: Icon/Inventory Status, 속성 Status(Sufficient / Low / Insufficient)
- **속성 쓰는 법** (MD에만)
  - Title: 첫 열 제목 자리의 카드 제목. 끌 수 없음(늘 보임). 단일 품목 카드는 품목 이름(예: Sealing Film)
  - Item: 줄 수 (조건 "줄 수 1~10")
  - Columns: 열 수 (조건 "열 최대 4개"). Status 열은 세지 않음
  - Status: 줄마다 상태 아이콘을 보여 줘야 하면 켜고, 아니면 끔. 켜면 맨 위 줄에 "Status" 칸이 함께 생김
- **가르는 법** (MD에만)
  - Table Card ↔ Header Table Card: 카드 제목 띠 · More 버튼 · Tag가 필요하면 Table Card, 카드 제목을 첫 열 제목 자리에 두고 띠 · 버튼이 필요 없으면 Header Table Card

### COMM-5-f Chips

#### Type 1 Filter Chip

- **정의**
  - 여러 칩을 함께 선택할 수 있고, 선택한 칩의 콘텐츠만 화면에 바로 걸러 보여 주는 칩
- **조건**
  - Default: 모든 칩이 선택되지 않은 상태(전체 콘텐츠 노출)
  - 텍스트 뒤 아이콘은 항목의 상태(필요할 때만 노출), 숫자는 건수
- **컴포넌트** (MD에만)
  - Chip/Filter (Group/Button · Chip), 속성 Size(L / S) · Show Icon
- **가르는 법** (MD에만)
  - "컴포넌트 고르는 법" 1. 값을 고름을 봄
  - Filter Chip ↔ Anchor Chip: 고른 칩의 콘텐츠만 걸러 보여 주면 Filter Chip, 목록 안의 카드 위치로 이동하면 Anchor Chip

#### Type 2 Anchor Chip

- **정의**
  - 목록 안의 특정 카드 위치로 바로 이동하는 칩으로 현재 보고 있는 위치를 선택 상태로 표시
- **조건**
  - Default: 첫 번째 칩이 선택된 상태
  - 한 번에 하나만 선택되며, 다시 선택해도 해제되지 않음
- **컴포넌트** (MD에만)
  - Chip/Anchor (Group/Button · Chip), 속성 Size(L / S)
- **가르는 법** (MD에만)
  - Filter Chip ↔ Anchor Chip: 고른 칩의 콘텐츠만 걸러 보여 주면 Filter Chip, 목록 안의 카드 위치로 이동하면 Anchor Chip

### COMM-5-g Data Table

#### Type 1 Basic Table

- **정의**
  - 화면의 조회 결과 데이터를 열과 행으로 구성된 그리드에 표시
- **조건**
  - 노출 개수 10개 (1920×1080 기준), 단 SB에 따라 다를 수 있음
  - L-IOS(앱형): 노출 개수 고정
  - T-IOS(웹형): 노출 개수 선택 가능, 목록 높이는 행 수에 맞춰 늘어나며 브라우저 자체 스크롤
  - 노출 개수 초과 시 페이지네이션 제공 (COMM-5-l 참고)
  - 정렬 기준·동작은 COMM-5-r Sorting 참고
- **번호 · 영역 · 동작**

  | 번호 | 영역 | 동작 |
  | --- | --- | --- |
  | 1 | Items | 현재 리스트에 로드된 데이터 개수 표기<br>검색 조건 변경 시 즉시 업데이트 |
  | 2 | 노출 개수 드롭다운 (T-IOS만) | Default 10 items (10·30·50·100 items)<br>선택 시 해당 개수로 즉시 업데이트 |
  | 3 | 정렬 아이콘 | 선택 시 정렬 (COMM-5-r 참고) |
  | 4 | 데이터 행 | 말줄임 데이터 호버 시 전체 내용 툴팁 노출 (COMM-5-v 참고)<br>선택 시 Selected 상태로 표시 |
  | 5 | 페이지네이션 | 선택 시 해당 페이지로 이동 (COMM-5-l 참고) |

- **컴포넌트** (MD에만)
  - Table/Header Cell · Table/Cell (Group/List · Card · Accordion · Table · Tab)
  - 노출 개수는 Basic Dropdown, 페이지는 Number Pagination, 말줄임은 Ellipsis Tooltip을 씀
  - 노출 개수 드롭다운(T-IOS)은 Items 바로 오른쪽, 같은 줄에 둠(Figma COMM-5-g 예시)
- **가르는 법** (MD에만)
  - Table Card ↔ Basic Table: 한 대상에 속한 세부 항목이면 Table Card, 화면의 조회 결과면 Basic Table. 놓인 자리 · 줄 수로 가르지 않음

#### No Data (Type 1 아래 케이스)

- **정의**
  - 데이터가 없는 경우 헤더는 유지하고, 목록 영역 내 안내 문구 노출
- **조건**
  - 안내 문구는 SB에 따라 변경될 수 있음
- **컴포넌트** (MD에만)
  - Table/Header Cell만 두고 목록 영역에 안내 문구(글자)를 둠

### COMM-5-h Dropdown

#### Type 1 Basic Dropdown (5-h(1/2))

- **정의**
  - 목록을 열어 옵션 하나를 선택하고, 선택한 값만 필드에 보여 주는 드롭다운
- **조건**
  - 목록은 5개 높이까지 노출, 넘칠 경우 스크롤
  - 선택한 값이 필드보다 길 경우 말줄임(…) 표시
  - 라벨은 필드 왼쪽(Default), 필요 시 필드 위
- **컴포넌트** (MD에만)
  - Dropdown (Group/Input · Selection), 속성 Type=Basic · Size(L / M) · Label Position(Top / Left)
- **가르는 법** (MD에만)
  - "컴포넌트 고르는 법" 1. 값을 고름을 봄

#### Type 2 Multi-Select Dropdown (5-h(1/2))

- **정의**
  - 목록을 열어 옵션을 하나 이상 선택하고, 선택한 값을 필드에 쉼표로 보여 주는 드롭다운
- **조건**
  - Default: All
  - 선택한 옵션이 필드 너비를 넘을 경우 … 표시, 마우스 오버 시 선택한 옵션 전체를 툴팁으로 표시
  - 열고 닫는 방식·상태는 Basic Dropdown과 같음
- **컴포넌트** (MD에만)
  - Dropdown (Group/Input · Selection), 속성 Type=Basic. 목록 항목에 Checkbox(Type=Mark Checkbox)가 붙음
- **가르는 법** (MD에만)
  - "컴포넌트 고르는 법" 1. 값을 고름을 봄

#### Type 3 Date · Period Dropdown (5-h(2/2))

- **정의**
  - 날짜(Date) 또는 기간(Period)을 입력하는 필드
- **조건**
  - Date는 하루, Period는 시작일 ~ 종료일
  - 상태는 Basic Dropdown과 같음
- **컴포넌트** (MD에만)
  - Dropdown (Group/Input · Selection), 속성 Type=Date / Period

#### Type 4 Combine Dropdown (5-h(2/2))

- **정의**
  - 두 필드를 하나의 라벨로 묶어, 앞 필드 선택에 따라 뒤 필드 값을 선택하는 드롭다운
- **조건**
  - 각 필드의 동작·상태는 Basic·Date Dropdown과 같음
- **컴포넌트** (MD에만)
  - Combine Dropdown (Group/Input · Selection), 속성 Type(Basic+Date / Basic+Basic)

### COMM-5-i Info Box

#### Type 1 Info Box

- **정의**
  - 화면 안에 안내 문구를 표시할 때 사용하는 박스
- **조건**
  - 필요 시 문구 앞에 상태 아이콘 표시(상황에 맞는 아이콘 선택)
  - 필요 시 오른쪽에 Text Button 표시
- **컴포넌트** (MD에만)
  - Info Box (Group/Feedback · Progress), 속성 Icon · Button. 오른쪽 버튼은 Text Button Underline

### COMM-5-j Label

#### Type 1 Number Label

- **정의**
  - 개수를 숫자로 표현할 때 사용
- **조건**
  - 최대 노출 표시 숫자는 99+까지로 한정 (단, 서비스에 따라 최대 노출 숫자는 변경 가능)
- **컴포넌트** (MD에만)
  - Number Badge (Group/Status · Badge)

#### Type 2 Text Label

- **정의**
  - 텍스트로 정보의 상태를 표현 (축약어 사용 가능)
- **컴포넌트** (MD에만)
  - 상태값 묶음 컴포넌트 (Group/Status · Badge): Status/CURECA · Status/Module · Status/Device · Status/Sample · Status/Plate · Status/Batch · Status/Waste Bin · Status/Inventory · Status/Connection · Status/Door · Status/Lock · Status/Docking · Status/Event Level. 속성 Status(상태 이름)
  - Status Base (Group/Status · Badge), 속성 Color(Red / Orange / Green / Blue / Gray / Navy). 묶음 컴포넌트가 없는 상태값에만 씀
- **속성 쓰는 법** (MD에만)
  - Status: 화면 예시 글자의 상태값과 같은 이름의 Variant. 어느 묶음 컴포넌트인지와 그 색은 `glossary/status-values.csv`의 "컴포넌트" · "Color" 칸
  - Color (Status Base): 묶음 컴포넌트가 없는 상태값(csv "컴포넌트" 칸 `-`: 이벤트 상태)은 색이 정해지지 않았으므로 기본값 그대로 둠. 시약 만료 상태는 시스템에서 쓰지 않는 개념 값이라 화면에 그리지 않음

#### Type 3 Icon Label

- **정의**
  - 상태를 아이콘으로 표시
- **컴포넌트** (MD에만)
  - Status Icon Base (Group/Status · Badge), 속성 Type(Ready / Warning / Error) · Color
- **속성 쓰는 법** (MD에만)
  - Color: 색은 UI 정의에서 정하므로 기본값 그대로 둠
- **가르는 법** (MD에만)
  - 카드(Table Card · Header Table Card) 안 줄의 상태 아이콘은 카드의 Status 속성을 켜고, 카드 밖에 따로 놓이는 상태 아이콘은 Icon Label

#### Type 4 Dot Label

- **정의**
  - 상태를 점으로 표시
- **가르는 법** (MD에만)
  - 아래 컴포넌트는 장비 상태 점에만 씀(Status 값이 장비 상태). STAT처럼 장비 상태가 아닌 점은 Common UX에 컴포넌트가 없는 요소로 보고 기존 화면의 점을 색 그대로 따옴(케이스 3은 `flow/3-design-case3.md` 공통 3-3 표 ②). 장비 상태 값 하나를 골라 대신 쓰지 않음
- **컴포넌트** (MD에만)
  - Frame/Instrument_Status Circle Icon (Group/Imported), 속성 Status(Idle / Preparing / Running / Pause / Completing / Error / Initializing / Stopping / Testing / Disconnected / Connected)

### COMM-5-k Loading

#### Type 1 Spinner

- **정의**
  - 데이터 처리 중 화면에 노출되는 로딩
- **조건**
  - 화면 가운데 노출
  - 필요 시 BG Dim 처리
  - 필요 시 Spinner 하단에 안내 문구 노출
  - 로딩 중 해당 영역 값은 '-' 표시, 관련 버튼 비활성
- **컴포넌트** (MD에만)
  - Basic (Loading) (Group/Imported), 속성 Type(Circular Indicator / Linear Indicator / Pull to Refresh)

#### Type 2 Skeleton

- **정의**
  - 화면의 레이아웃 구조를 미리 보여주는 로딩
- **조건**
  - 화면 가운데에 아이콘과 안내 문구 노출
  - 안내 문구는 Skeleton이 적용되는 화면 공통 Title: Loading data... Sub: Please wait a moment while we load your content.
- **컴포넌트** (MD에만)
  - 컴포넌트 없음. layout/spacing · Divider로 레이아웃을 그리고 가운데 아이콘은 Date&Time/Clock_Outlined

### COMM-5-l Pagination

#### Type 1 Number Pagination

- **정의**
  - 페이지 번호를 선택하여 페이지를 이동하는 페이지네이션
- **조건**
  - 최대 10페이지씩 노출, 10 단위로 번호 변경
  - 2페이지 이하는 « » 없이 ‹ ›만 노출
- **컴포넌트** (MD에만)
  - Pagination/Number (Group/Feedback · Progress), 속성 State(First Page / Second Page / Middle Page / Last Page / One Page / Two Page). 안의 번호는 Pagination/Page Number, 화살표는 Pagination/Icon Button

#### Type 2 Indicator Pagination

- **정의**
  - 현재 페이지와 전체 페이지 수를 표시하고 Prev·Next로 이동하는 페이지네이션
- **컴포넌트** (MD에만)
  - Pagination/Indicator (Group/Feedback · Progress), 속성 State(First / Middle / Last Page). Prev · Next는 Pagination/Text Button

### COMM-5-m Popup

#### Type 1 Basic Popup (5-m(1/4))

- **정의**
  - 별도 화면을 띄워 중요한 정보를 전달하거나 작업을 완료하도록 돕는 팝업
- **조건**
  - 필요 시 BG Dim 처리
  - 화면 가운데 배치
  - 버튼 영역은 스크롤과 무관하게 항상 노출
  - 목록이 팝업 높이를 넘을 경우 스크롤 노출
  - 버튼이 3개 이상일 경우 닫기는 X 버튼으로
- **컴포넌트** (MD에만)
  - 팝업 틀: PC 컴포넌트 없음, 프레임으로 직접 그림(`flow/3-design.md` 공통 3-9 Popup)
  - 닫기 X: Interface/Close
  - 하단 버튼: Square(Square Button을 씀)
  - 케이스 1 단순 정보 전달: 우측 상단 X + 하단 닫기 1개(Filled)
  - 케이스 2 입력 · 선택 후 저장: 하단 취소(Outlined) + 저장(Filled)
  - 케이스 3 저장 불필요: 우측 상단 X만, 하단 버튼 없음

#### Import/Export Popup (5-m(2/4), Type 번호 없음)

- **정의**
  - Import 또는 Export 기능 선택 시 파일을 불러오거나 저장할 위치를 선택하는 팝업
- **조건**
  - L-IOS 전용
  - 형태는 Basic Popup Case 3 (하단 버튼 없이 우측 상단 X 버튼만)
  - 필요 시 BG Dim 처리, 화면 가운데 배치
  - 모드(Export / Import)에 따라 타이틀·설명·버튼 설명 문구 변경, 문구는 예시와 같이 고정 노출
- **번호 · 영역 · 동작**

  | 번호 | 영역 | 동작 |
  | --- | --- | --- |
  | 1 | USB Drive 버튼 | 선택 시 파일 탐색기에서 연결된 USB 목록이 보이는 상태로 노출<br>Export는 저장할 위치, Import는 불러올 파일 선택 |
  | 2 | Configured Drive 버튼 | 선택 시 파일 탐색기에서 System Setting에 등록된 경로가 입력된 상태로 노출<br>Export는 저장할 위치, Import는 불러올 파일 선택 |
  | 3 | X 버튼 | 선택 시 팝업 닫힘 |

- **컴포넌트** (MD에만)
  - 팝업 틀: PC 컴포넌트 없음(Basic Popup 케이스 3). 닫기 X는 Interface/Close

#### Event Stacked Popup (5-m(3/4), Type 번호 없음)

- **정의**
  - 여러 개가 발생할 경우 누적되어 한 영역에서 하나씩 확인하는 팝업
- **조건**
  - 형태는 Basic Popup Case 2 (하단 닫기 + 이동 버튼)
  - 팝업 영역 위에 메시지 개수·Close All, 오른쪽에 썸네일 목록 배치
  - 썸네일 목록은 5개씩 노출, 5개를 넘을 경우 위·아래 버튼으로 스크롤
  - 2개 이상일 경우 메시지 개수·Close All 노출, 1개일 경우 미노출
  - 내용이 많을 경우 줄임 없이 모두 노출, 최대 크기를 넘을 경우 스크롤
- **컴포넌트** (MD에만)
  - 팝업 틀: PC 컴포넌트 없음(Basic Popup 케이스 2). 하단 버튼은 Square(닫기 Outlined · 이동 Filled), 썸네일 목록 위 · 아래 버튼은 Arrow/Chevron_Right

#### Type 2 Alert (5-m(4/4))

- **정의**
  - 사용자에게 일방적으로 정보를 전달하는 팝업 OK를 선택하기 전까지 다음 동작 불가
- **조건**
  - 필요 시 BG Dim 처리, 화면 가운데 배치
  - Title·Contents는 상황에 맞는 메시지
  - 화면 출력이 30초 이상 걸릴 경우 지연 안내 Alert 노출 (This is taking longer than expected. / Please check your internet connection.)
- **컴포넌트** (MD에만)
  - Popup/Alert (Group/Overlay · Popup), 속성 Type=Alert · Status(Done / Error / Warning / Progress). 상태 아이콘은 안에 든 Icon/Popup Status

#### Type 3 Confirm (5-m(4/4))

- **정의**
  - 사용자에게 동의나 확인을 구하는 팝업 OK·Cancel 두 가지 선택지 제공
- **조건**
  - 필요 시 BG Dim 처리, 화면 가운데 배치
  - 결과 안내가 필요할 경우 OK 선택 후 Alert 노출
- **컴포넌트** (MD에만)
  - Popup/Alert (Group/Overlay · Popup), 속성 Type=Confirm · Status

### COMM-5-n Progress Bar

#### Type 1 Horizontal Step

- **정의**
  - 여러 단계로 진행되는 화면 상단에서 현재 단계와 전체 흐름을 표시
- **조건**
  - 단순 인디케이터로 선택 불가
  - 단계 이동은 화면의 Previous · Next 버튼으로
- **컴포넌트** (MD에만)
  - Progress Step/Horizontal (Group/Feedback · Progress), 속성 Current(Step 1 ~ 4). 단계 하나는 Progress Step/Horizontal Item

#### Type 2 Vertical Step

- **정의**
  - 순서가 있는 과정을 세로로 나열하고 단계별 진행 상태를 표시
- **조건**
  - 번호 순서대로 진행, 단계 사이는 선으로 연결
  - 단순 표시로 선택 불가
- **컴포넌트** (MD에만)
  - Progress Step/Vertical Item (Group/Feedback · Progress), 속성 State(Done / Current / Upcoming) · Line(On / Off)

### COMM-5-o Scroll Bar

#### Title 영역 고정 (Type 번호 없음)

- **정의**
  - 화면 내 콘텐츠가 특이 케이스 없이 단순 나열되는 가장 기본적인 스크롤 방식.
- **동작**
  - 스크롤 시 최상단의 타이틀(Title) 영역은 화면 상단에 상시 고정되며, 하위 콘텐츠 영역만 타이틀 레이어 아래로 스크롤됨
- **컴포넌트** (MD에만)
  - 컴포넌트 없음 (영역을 고정하는 방식)

#### 상단 Title 및 Tab 고정 (Type 번호 없음)

- **정의**
  - 상단 타이틀 하위에 카테고리나 메뉴 이동을 위한 탭(Tab) 구조가 포함된 케이스
- **동작**
  - 스크롤 시 상단의 타이틀과 탭 영역이 모두 화면 상단에 상시 고정되며, 하위 콘텐츠 영역만 두 영역의 아래로 스크롤됨
- **컴포넌트** (MD에만)
  - 컴포넌트 없음 (영역을 고정하는 방식)

#### 하단 플로팅/고정 (Type 번호 없음)

- **정의**
  - 저장하기 등 사용자의 최종 과업 완수를 위한 핵심 액션 버튼(CTA: Call To Action)이 포함된 케이스.
- **동작**
  - 콘텐츠의 양이나 스크롤 여부와 상관없이, 핵심 기능 버튼이 화면 최하단(Bottom 영역)에 상시 고정(Floating/Fixed)되어 배치됨
  - 콘텐츠 영역은 이 하단 버튼의 상단까지만 스크롤됨
- **컴포넌트** (MD에만)
  - 컴포넌트 없음 (영역을 고정하는 방식)

### COMM-5-p Search Bar

#### Type 1 Search Area

- **정의**
  - 검색 조건에 따라 리스트 내 데이터를 필터링하여 조회하는 영역
- **조건**
  - Text Field · Dropdown · Check Box 등 조회 조건과 결합하여 사용
  - 조회 조건이 3개 이상일 경우 Reset 버튼 제공
  - 각 조회 조건의 입력 규칙·Default는 화면별 정의
- **컴포넌트** (MD에만)
  - 영역 틀: 컴포넌트 없음. 조회 조건은 Box Input(Text Input) · Basic Dropdown(Dropdown) · Check Box(Checkbox, Type=Circle Checkbox), 버튼은 Square(Reset Gray · Search Filled)

### COMM-5-q Selection Controls

#### Type 1 Check Box

- **정의**
  - 선택지를 모두 펼쳐 보여 주고, 0~N개 항목을 선택할 때 사용
- **형태**
  - Square·Round 두 가지 형태 제공
- **조건**
  - 선택과 미선택이 공존 시(데이터 테이블 등) Square 형태로만 Mix Selected 사용
- **컴포넌트** (MD에만)
  - Square 형태: Square Checkbox (Group/Input · Selection), Mix Selected 있음. Round 형태: Checkbox (Group/Input · Selection), 속성 Type=Circle Checkbox
- **가르는 법** (MD에만)
  - "컴포넌트 고르는 법" 1. 값을 고름을 봄

#### Type 2 Radio Button

- **정의**
  - 선택지를 모두 펼쳐 보여 주고, 두 개 이상의 항목 중 하나만 선택할 때 사용
- **컴포넌트** (MD에만)
  - Circle Radio Button (Group/Input · Selection)
- **가르는 법** (MD에만)
  - "컴포넌트 고르는 법" 1. 값을 고름을 봄

#### Type 3 Switch

- **정의**
  - 각 항목의 상태를 독립적으로 제어할 때 사용, 활성화할 경우 상태값 즉시 변경
- **형태**
  - Basic·Basic+Label 두 가지 형태 제공
- **조건**
  - 상태 이름 표시가 필요할 경우 토글 안에 상태 글자 표시(Basic+Label)
- **컴포넌트** (MD에만)
  - Toggle Switch (Group/Input · Selection), 속성 Style(Basic / Basic+Label) · Size(S / M / L)

### COMM-5-r Sorting

#### Type 1 Table Sorting

- **정의**
  - 정렬 가능한 컬럼 헤더를 선택하여 해당 기준으로 데이터 정렬
- **조건**
  - 정렬 가능한 컬럼에만 정렬 아이콘 노출
  - 최초 조회 시 Default 정렬 기준은 화면별 정의 (예: Date 기준 내림차순)
  - 정렬 기능이 없는 화면은 첫 번째 컬럼 내림차순
  - 다른 컬럼을 정렬하면 이전 컬럼의 정렬 상태 해제
- **컴포넌트** (MD에만)
  - Table/Header Cell (Group/List · Card · Accordion · Table · Tab)

### COMM-5-s Tab

- **가르는 법** (MD에만, 네 Type 함께)
  - 같은 화면 안에서 서로 다른 콘텐츠 영역으로 바꾸면 Underline Tab(가로)이나 Outline Tab(세로로 나열, 탭 오른쪽에 항목 건수 · 화살표). 같은 데이터의 보기 방식을 바꾸면 Container Tab(Type 1 조건)
  - Outline Container Tab ↔ Filled Container Tab: 쓰는 때는 같고 모양만 다름(테두리 칸 / 회색 바탕)

#### Type 1 Underline Tab

- **정의**
  - 같은 화면 안에서 콘텐츠 영역을 전환하는 탭
- **조건**
  - 최소 2개 탭으로 구성, Default 첫 번째 탭 선택, 하나만 선택
  - 탭이 영역 폭을 넘을 경우 좌우 스크롤, 가려지는 오른쪽 끝은 Fade out 처리
  - 같은 데이터의 보기 방식 전환은 Type 3·4 Container Tab 사용
- **컴포넌트** (MD에만)
  - Tab/Underline (Group/List · Card · Accordion · Table · Tab), 속성 Size(M / S)

#### Type 2 Outline Tab

- **정의**
  - 테두리 상자 형태로 콘텐츠 영역을 전환하는 탭
- **조건**
  - 필요 시 탭 오른쪽에 항목 건수 표시(0은 미노출, 1~99 노출)
  - 필요 시 탭 오른쪽에 화살표 표시
  - 탭은 세로로 나열, Default 첫 번째 탭 선택, 하나만 선택
- **컴포넌트** (MD에만)
  - Tab/Outline (Group/List · Card · Accordion · Table · Tab), 속성 Count · Arrow · Size(M / S)

#### Type 3 Outline Container Tab

- **정의**
  - 칸으로 나뉜 상자 안에서 같은 화면의 보기 방식·영역을 전환하는 탭
- **조건**
  - Default 첫 번째 칸 선택, 하나만 선택
- **컴포넌트** (MD에만)
  - Tab/Outline Container Item (Group/List · Card · Accordion · Table · Tab), 속성 Size(M / S)

#### Type 4 Filled Container Tab

- **정의**
  - 회색 바탕 안에서 선택 칸으로 같은 화면의 보기 방식·영역을 전환하는 탭
- **조건**
  - 필요 시 텍스트 앞에 아이콘 표시
  - Default 첫 번째 칸 선택, 하나만 선택
- **컴포넌트** (MD에만)
  - Tab/Filled Container (Group/List · Card · Accordion · Table · Tab), 속성 Count(2 ~ 10) · Size(M / S)

### COMM-5-t Text Field

#### Type 1 Box Input

- **정의**
  - 텍스트를 입력하는 박스형 입력 필드
- **조건**
  - 필드 크기는 입력할 데이터 길이에 맞게 (너무 길거나 짧지 않게)
  - 필요 시 글자 수 제한 표기(byte)와 함께 사용, Max 값은 SB 정의
  - 오류 메시지는 SB 정의
  - 검증이 필요한 필드는 검증 완료 후 다시 선택 시 입력값 초기화 가능(화면별 SB 정의)
  - 크기 L 48 · M 38
  - 라벨은 필드 왼쪽(Default), 필요 시 필드 위
- **번호 · 영역 · 동작**

  | 번호 | 영역 | 동작 |
  | --- | --- | --- |
  | 1 | 입력 필드 | 선택 시 Focused, 입력 시 Typing<br>입력 후 다른 곳 선택 시 Complete |
  | 2 | 지우기 버튼 | 선택 시 입력값 삭제 |

- **컴포넌트** (MD에만)
  - Text Input (Group/Input · Selection), 속성 Password=Off · Size(L / M) · Label Position(Top / Left)

#### Password Input (Box Input · Case)

- **정의**
  - Box Input의 비밀번호 케이스로, 입력값을 마스킹하는 입력 필드
- **조건**
  - 입력값은 마스킹(●) 처리, 보기 버튼과 함께 사용
  - 보기 버튼은 상시 노출
  - 글자 수 Max 값은 SB 정의
- **번호 · 영역 · 동작**

  | 번호 | 영역 | 동작 |
  | --- | --- | --- |
  | 1 | 입력 필드 | 선택 시 Focused, 입력 시 Typing (마스킹) |
  | 2 | 보기 버튼 | 선택 시 입력값 표시 · 다시 선택 시 마스킹 |
  | 3 | 지우기 버튼 | 선택 시 입력값 삭제 |

- **컴포넌트** (MD에만)
  - Text Input (Group/Input · Selection), 속성 Password=On. 보기 버튼은 Interface/Eye_Outlined · Interface/Eye_Slash_Outlined

#### Type 2 Inline Input

- **정의**
  - 텍스트를 그 자리에서 입력 및 수정하는 인라인 입력 필드
- **조건**
  - 필요 시 글자 수 제한 표기(byte)와 함께 사용, Max 값은 SB 정의
  - Blank일 경우 오류 메시지 노출
- **번호 · 영역 · 동작**

  | 번호 | 영역 | 동작 |
  | --- | --- | --- |
  | 1 | 텍스트 · 편집 아이콘 | 선택 시 편집 상태(Typing)로 전환 |
  | 2 | 지우기 버튼 | 선택 시 입력값 삭제 |

- **컴포넌트** (MD에만)
  - Text Input/Inline (Group/Input · Selection)

### COMM-5-u Toast

#### Type 1 Toast

- **정의**
  - 작업 완료 또는 오류 발생 시 화면 하단에 일시적으로 노출되는 알림
- **조건**
  - 노출 위치: 화면 하단
  - 노출 시간 2초 고정, 수동 닫기 불가
  - Main Text 1줄: 단순 결과 알림 등 직관적 메시지 전달 시
  - Main + Sub Text 2줄: 조치 가이드·부연 설명이 필요할 때
- **컴포넌트** (MD에만)
  - Toast (Group/Overlay · Popup), 속성 Type(Single / Double) · Icon

### COMM-5-v Tool Tip

#### Type 1 Ellipsis Tooltip

- **정의**
  - 말줄임(…) 처리된 텍스트에 호버 시 전체 내용을 보여주는 툴팁
- **조건**
  - 텍스트 길이가 영역을 초과해 말줄임 처리된 항목에만 적용
  - 마우스 아웃(Roll-out) 시 즉시 제거
  - 툴팁 폭 320, 넘치는 내용은 줄바꿈
- **컴포넌트** (MD에만)
  - Tooltip (Group/Overlay · Popup), 속성 Type=Ellipsis

#### Type 2 Info Tooltip

- **정의**
  - Info 아이콘에 마우스 호버 시 부가 정보를 보여주는 툴팁
- **조건**
  - 아이콘 하단을 기준으로 정렬하여 노출
  - 마우스 아웃(Roll-out) 시 즉시 제거
  - 터치 위주 일부 화면은 선택 시 노출, 해당 경우 노출·닫기 방식은 SB 정의
  - 필요 시 내용 왼쪽에 이미지 표시
- **컴포넌트** (MD에만)
  - Tooltip (Group/Overlay · Popup), 속성 Type=Info. 아이콘은 Interface/Info_Circle_Outlined
- **가르는 법** (MD에만)
  - Info Tooltip ↔ Table Tooltip: Info 아이콘으로 여는 설명은 내용이 여러 줄이어도 Info Tooltip. 데이터 위에 올려 그 데이터의 값들을 표로 보여 주면 Table Tooltip

#### Type 3 Event Tooltip

- **정의**
  - 이벤트(Error · Warning) 아이콘 선택 시 내용을 보여주고, 직접 닫는 툴팁
- **조건**
  - 이벤트 종류에 따라 색 구분: Error(Red) · Warning(Orange)
  - X 버튼 선택 전까지 유지
  - 닫은 뒤에도 아이콘 선택 시 다시 노출
  - 문구는 SB 정의 (예: [모듈명] 오류 코드, 메시지)
- **컴포넌트** (MD에만)
  - Tooltip/Event (Group/Overlay · Popup), 속성 Event(Error / Warning). 아이콘은 Interface/Exclamation_Circle_Solid

#### Type 4 Table Tooltip

- **정의**
  - 대상에 마우스 오버 시 여러 항목의 값을 표 형태로 보여주는 툴팁
- **조건**
  - 마우스 아웃(Roll-out) 시 즉시 제거
  - 항목 앞 아이콘은 필요할 때만 표시
- **컴포넌트** (MD에만)
  - Tooltip/Table (Group/Overlay · Popup), 속성 Items(1 ~ 10)
- **가르는 법** (MD에만)
  - Info Tooltip ↔ Table Tooltip: Info 아이콘으로 여는 설명은 내용이 여러 줄이어도 Info Tooltip. 데이터 위에 올려 그 데이터의 값들을 표로 보여 주면 Table Tooltip

### COMM-5-w Validation Check

#### Type 1 Input Validation

- **정의**
  - API 호출 전, 화면 안에서 입력값을 확인하는 검사
- **조건**
  - 검사 항목: 미입력, 숫자/문자 구분, 입력 형식
  - 오류 시 Error 상태 표시(필수) + 오류 메시지 노출(선택)
  - 입력 필드 Error 상태는 COMM-5-t Text Field 참고
- **컴포넌트** (MD에만)
  - 따로 없음. Box Input(Text Input)의 State=Error

#### Type 2 API Validation

- **정의**
  - API 호출 후, 처리 결과에 따라 알려주는 검사
- **조건**
  - 결과 성공: 완료 토스트 메시지 노출 (COMM-5-u Toast)
  - 결과 오류: Alert, Confirm 등 오류에 따른 결과 메시지 노출 (COMM-5-m Popup)
- **컴포넌트** (MD에만)
  - 따로 없음. 성공은 Toast, 오류는 Alert · Confirm(Popup/Alert)을 씀

## Figma에 맞출 것

MD를 먼저 고치고 아직 Figma에 맞추지 않은 곳입니다. 보충을 다 마친 뒤 한 번에 맞추고, 맞춘 줄은 지웁니다.

| COMM | Type | 라벨 | MD 글자 (Figma를 이것으로) | 고친 날 |
| --- | --- | --- | --- | --- |

## 컴포넌트 키

위 표의 "쓰인 컴포넌트"를 인스턴스로 넣을 때 쓰는 키입니다(세트가 있으면 세트 키). 이름이 같은 다른 세트는 괄호로 갈랐습니다.

| 컴포넌트 | 키 |
| --- | --- |
| Accordion | `ae4a0adea5f75f80f3b72ee3fb3f3472ee79dd0b` |
| Arrow/Chevron_Right | `70455bc729d0c6f8345cde7fa9ef7dbd26284c63` |
| Basic (Button, COMM-5-c) | `9ea0b33d4641a12fd8df62209369f5e9bc2f32c1` |
| Basic (Loading, COMM-5-k) | `6a4a108e6d44aa9a8fdac06080d6001a65d39bf2` |
| Breadcrumb | `8a5772d424d32f24412ca67e0b1dcd710acbeab4` |
| Breadcrumb/Item | `36d1273b8245a35ad24336792b00ea741bb7276c` |
| Calendar/Day | `1e8b6e43fc59881d4645b77718034dc96466e4f6` |
| Calendar/Month | `2828f215aa248c797440a0b2ebb22fd3c534236e` |
| Calendar/Picker | `225f94600a663717b069e2f40b855dc31e0d51a9` |
| Calendar/Years&Month Dropdown | `f9edb852bd7dcb3fca249452dd15218bf06abb5f` |
| Card/List | `3a694e4feb613a712ce4d8e981863c5ce0c2103a` |
| Card/Table | `5217076acad310d9d648cd4fb7f09b941eb0813f` |
| Card/Header Table | `29adbe2e777e88881ee23847666ac7ddd61bda94` |
| Checkbox | `b11004a7813ab287566985ea21292364a80bb8bc` |
| Chip/Anchor | `6f03918faf50300879d528dc40baadc76f473b4d` |
| Chip/Filter | `ce6ded290f5581c5ccd806da37ac0db2e2bd1886` |
| Circle Radio Button | `4620042e5f29952059ff5702fe7064bfe5b80326` |
| Combine Dropdown | `3e4d1bb3fbc6e4b90cb9ec315c9661a4c416a288` |
| Date&Time/Clock_Outlined | `e075b7ce59ab11079300f9e9f3b34e9276b939c4` |
| Divider | `e04324303b793434d9dc8bc124f71fe1bd384eb2` |
| Dropdown (COMM-5-h · 5-g · 5-p) | `0e2100bae31a3476a11f0e03c8fbff56e4185279` |
| Dropdown (Calendar, COMM-5-d) | `880c14fa05426887a5d0f00863162fd13bd1a079` |
| Floating Button | `8f9c01dfae1f64d0cc3b519c07ab07dd62c1df2b` |
| Frame/Instrument_Status Circle Icon | `72bb4b2157f9b9536f5fb92f61b3efe0b2fdcbdc` |
| Icon/Popup Status | `dcbb5474fb2fe37942962a659632603f64480fe7` |
| Icon/Profile | `d4ddfa3551586d3dff443bb3d31713e5a0a7bd3a` |
| Info Box | `0eab1f2f3417e485cd1f813e4b74652629ea0187` |
| Interface/Close | `92b892c149aef8c3b476254e4ff57f4063379438` |
| Interface/Exclamation_Circle_Solid | `ebb738cb4e540acf8fd7a3e65f1cc5ce4cdb7e94` |
| Interface/Eye_Outlined | `bb5a483a406cb514e8fcc81726a2bde2483aac75` |
| Interface/Eye_Slash_Outlined | `fd0464230caad6d8305751bb24493da34d80f768` |
| Interface/Info_Circle_Outlined | `37be85a09a9969299585be067868ad806b22144b` |
| layout/spacing | `df36614559f71deb9914b8815f3573943173297a` |
| LNB/Profile | `310f4b7cafb7b9eecd3642e568cc55e910e320c7` |
| Navigation/GNB | `831d0f846eb9bcb6112a43f70ad281ed638ef49e` |
| Navigation/LNB | `f98964d44a8633a5a4875dc2bb43b0a9ee87f6b1` |
| Number Badge | `8768fa4b7aeef654de5f7c0f681e128b6b6e1492` |
| Pagination/Icon Button | `a7d59eadeb6881637884acecfbf6b6b36137bad3` |
| Pagination/Indicator | `b47baaa8820ab189fefe32afea8011b47945c5a9` |
| Pagination/Number | `9276d25b331f26f6d585c94335b77089143c0616` |
| Pagination/Page Number | `7bf75eb0f56366f194c303edb516c3bb7b6a713d` |
| Pagination/Text Button | `332348cc11dd9263ca79911a031489ceddb49126` |
| Popup/Alert | `ae3977c231b0fb51263bc411a631df7be8ca6b6e` |
| Progress Step/Horizontal | `75ae79e5730e2ab252fe97a2ec472bb7417d516c` |
| Progress Step/Horizontal Item | `c3de8f24594bd2d630dc4167f83744c32fe81df5` |
| Progress Step/Vertical Item | `5d9bdefc09917efa2610fdacefc653e86f923306` |
| Square | `d3dd288afeecd522d6b16cd97be5c8573a1a4b11` |
| Square Checkbox | `ed5d500f80c5663697db56dede8b4a96e58cccc2` |
| Status Base | `6e7f9b81de8b1d3b1c568ae011285fa1db663fc3` |
| Status/Batch | `5641ad266eeb14f10c8946974de64ce0364fec77` |
| Status/Connection | `c099c34e4ba5d638e0597b9062d76119d909667c` |
| Status/CURECA | `8e454e74bd5a2c58ddafc7fbad541dc32732d24c` |
| Status/Device | `9a0c898c60b2130719a6495bc2dfe5e52241398d` |
| Status/Docking | `9ab4c463b806be62c8f1149fcb1aff5844dff095` |
| Status/Door | `874cac123bcd28e197916720d220d0af112e6d5e` |
| Status/Event Level | `58f00f1b1c10e79a6345ff791527fa3c4d8a2557` |
| Status/Inventory | `844ab5042bc0cbca448ce257d11bcfd3929b9b78` |
| Status/Lock | `a250800f9e0447d8e43f381865a88bf5063c4878` |
| Status/Module | `5a3d56f0629b29c93c849825e59f174d0d3c08fb` |
| Status/Plate | `2d59bf78a178c5542228c2dfe4e9dd4da6196986` |
| Status/Sample | `1351159f43f6ab2b50dba8a5108b25ceff435460` |
| Status/Waste Bin | `7ab18e0c770022302f05ccb662a1a70c017e6c16` |
| Status Icon Base | `78f6f7c70bfa071f7007c86f6f8cc5cb76d29110` |
| Tab/Filled Container | `35a3f90e5d489dabfd24443179b6644638ac3884` |
| Tab/Outline | `4f60022888f91f0f2189c9c6dfa1f8f9944f3448` |
| Tab/Outline Container Item | `91c585cdc037ffed58edf082cb31335df3d348ee` |
| Tab/Underline | `8003460720c4408b28d928dc8b26c228ba380aa5` |
| Table/Cell | `af373ef5755747af8d4cb243a130a0e07117f04c` |
| Table/Header Cell | `ac29588c12f6139d862dff690e43989cd5ee7dfd` |
| Text Input | `9314d69b874280288ccc1da8ada82d4933d19fa7` |
| Text Input/Inline | `89ba3c60a525b12030cedc6a989fbf5fd04975b3` |
| Toast | `6ba4228e244dbf460a8b0130a2f80412041e76b7` |
| Toggle Switch | `8e049ed573c01ed17944c86bd49753e69b822c9c` |
| Tooltip | `518113ea57f1c528b3ca7c1e91ec00904473ffe8` |
| Tooltip/Event | `3068fda1081df3c6c03e976bfdfef6995d5d997a` |
| Tooltip/Table | `1f1bc0166eb2db9b7acaadc4e8a5c57df24c9738` |
| Underline | `12b7d013b09292294d78fd89ed1594ac2cc6eaab` |

