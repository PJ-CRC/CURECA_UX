# UX Kit(Component) 화면 정의서

STAgora UI Kit의 공통 컴포넌트를 기능 · 상태값(Variant) · 옵션(속성)별 표로 정리한 문서다. UX 기획서를 작업할 때 **우선적으로 활용할 공통 컴포넌트의 기준**이다.

> 기준: Figma `[UX] STAgora UI Kit` 파일의 「Asset」 페이지 컴포넌트 38종(컴포넌트 세트의 Variant 속성 · 속성 옵션 · 프레임 설명). 컴포넌트 이름 · 속성 이름은 Figma 그대로 쓴다.
> 모든 컴포넌트는 `Theme = Light | Dark`를 가진다. 아래 표에서는 Theme를 따로 적지 않는다.
> `조합용`은 다른 컴포넌트를 만들 때 쓰는 Item이며 **단독 사용 금지**다.

### 표 읽는 법

| 구분 | 뜻 |
|---|---|
| Variant | 컴포넌트 세트에서 값을 하나 고르는 속성(State · Size · Type · Style …) |
| 옵션(Boolean) | 켜고 끄는 속성. 끄면 그 영역이 화면에서 빠진다 |
| 아이콘 교체 | 아이콘 자리에 다른 아이콘을 끼우는 속성(`Change … Icon`) |

## 1. 버튼 · 액션

버튼, 플로팅 버튼, 칩처럼 사용자가 눌러서 실행 · 선택하는 컴포넌트.

### 1-a. Button

사용자의 주요 액션을 실행하는 기본 버튼을 정의한다. (Variant 60개)

| 속성 | 값 | 설명 |
|---|---|---|
| Style | Filled · Gray · Outlined | 강조 정도 |
| Size | M · S | 크기 |
| State | Enabled · Pressed · Focused · Disabled · Loading | 상태 |
| 옵션 | Left Icon · Right Icon · Text | 켜고 끔 |
| 아이콘 교체 | Change Left Icon · Change Right Icon | 좌 · 우 아이콘 |

### 1-b. FAB

앱에서 가장 중요하고 주요한 액션을 빠르게 실행하는 플로팅 버튼을 정의한다.

| 속성 | 값 | 설명 |
|---|---|---|
| 아이콘 교체 | Change Icon | 버튼 아이콘 |

### 1-c. Chip

여러 항목 중 선택하거나 거르는 칩을 정의한다. 다중 선택이 가능하다.

| 컴포넌트 | Size | State | 옵션 | 설명 |
|---|---|---|---|---|
| Basic | L · S | Selected · Unselected | Number Count · Left Icon · Close Button | 기본 칩. 숫자 · 아이콘 · 닫기 버튼을 붙일 수 있다 |
| Chip_Dropdown | L · S | Selected · Focused · Unselected | Number Count · Left Icon | 누르면 목록이 열리는 칩 |

(Left Icon 켜면 `Change Left Icon`으로 아이콘 교체)

## 2. 선택 · 입력

체크박스, 라디오, 토글, 슬라이더, 입력 필드 등 값을 입력 · 선택하는 컴포넌트.

### 2-a. Checkbox

여러 항목 중 원하는 것을 여러 개 선택할 때 쓴다. (Variant 16개)

| 속성 | 값 | 설명 |
|---|---|---|
| Type | Mark Checkbox · Circle Checkbox | Mark: 하위 속성 · 미니멀한 화면 / Circle: 강조하거나 활성화된 상태에서 동적인 디자인 |
| State | Selected · Unselected · Disabled · Disabled Selected | 상태 |

### 2-b. Radio Button

여러 항목 중 하나만 선택할 때 쓴다.

| 컴포넌트 | State | 설명 |
|---|---|---|
| Circle Radio Button | Selected · Unselected · Disabled · Disabled Selected | 가장 일반적인 라디오 버튼 |
| Box Radio Button | Selected · Unselected · Disabled · Disabled Selected | 선택 영역이 커서 쉽게 선택 |

### 2-c. Toggle Switch

두 가지 상태 중 하나를 고르며, 선택하면 상태값이 즉시 반영된다. (Variant 32개)

| 속성 | 값 | 설명 |
|---|---|---|
| Style | Basic · Basic+Label | 라벨 유무 |
| Size | S · M · L | 크기 |
| State | Selected · Unselected · Disabled · Disabled Selected | 상태 |

### 2-d. Textfield

텍스트를 입력하는 기본 입력 필드를 정의한다.

| 컴포넌트 | State | 옵션 | 설명 |
|---|---|---|---|
| Basic (28) | Enabled · Focused · Typing · Completed · Error · Disabled · Read-only | Label · Label Icon · Text Security(True/False) | 가장 기본적인 입력 필드. Text Security는 입력값 가림(비밀번호) |
| Icon (14) | 위와 같음 | Label · Label Icon · Change Right Icon | 오른쪽에 아이콘을 둔 입력 필드 |

### 2-e. Text Area

여러 줄 텍스트를 입력하며 넓은 입력 공간을 제공한다.

| 컴포넌트 | State | 옵션 | 설명 |
|---|---|---|---|
| Basic | Enabled · Focused · Typing · Completed · Error · Disabled · Read-only | Label | 일반 여러 줄 입력 |
| Full | 위와 같음 | - | 화면 전체 페이지에서 쓰는 여러 줄 입력 |

### 2-f. Search Field

검색어를 입력하는 필드를 정의한다. (Variant 16개)

| 속성 | 값 | 설명 |
|---|---|---|
| Type | Line · Surface | Line: 선 중심의 깔끔한 형태 / Surface: 세부 정보 · 긴 텍스트를 담는 형태 |
| State | Enabled · Focused · Typing · Completed | 상태 |

### 2-g. Dropdown

목록에서 하나를 고르는 선택 필드를 정의한다. (Variant 12개)

| 속성 | 값 |
|---|---|
| State | Unselected · Focused · Selected · Error · Disabled · Disabled Selected |
| 옵션 | Label Text · Left Icon(+Change Icon) |

### 2-h. Input Stepper

숫자 값을 늘리거나 줄인다. 주로 숫자 입력 필드와 함께 쓴다. (Variant 12개)

| 속성 | 값 |
|---|---|
| State | Enabled · Left Button Disabled · Right Button Disabled · Disabled · Error · Focused |

### 2-i. Slider

범위에서 값을 고른다. (Variant 16개)

| 속성 | 값 | 설명 |
|---|---|---|
| Type | Continuity · Range | Continuity(연속형): 단일 값 선택 / Range(범위형): 두 값 사이 범위 선택 |
| Direction | Horizontal · Vertical | 방향 |
| State | Enabled · Disabled | 상태 |
| 옵션 | Input · Value Start · Value End | 입력칸 · 시작값 · 끝값 표시 |

### 2-j. Calendar

달력으로 날짜를 선택한다. 페이지와 바텀시트에서 쓸 수 있다. Theme만 있다.

## 3. 목록 · 표

### 3-a. Basic List

텍스트와 아이콘을 조합한 기본 목록 항목이다.

| 옵션(Boolean) | Left Icon · Sub Text · Badge · Label Text · Caption · Right Area(Arrow · Text) |
|---|---|
| 아이콘 교체 | Change Left Icon |

### 3-b. Control List

오른쪽에 컨트롤을 둔 목록 항목이다.

| 컴포넌트 | 설명 | 옵션 |
|---|---|---|
| List_Icon | 오른쪽에 아이콘(1st · 2nd) | Sub Text · Right 1st Icon · Label Text · Caption · Badge · Left Icon |
| List_Toggle | 토글로 항목 상태를 바꿈 | Sub Text · Caption · Label Text · Badge · Left Icon |
| List_Radio | 라디오로 하나 선택 | Sub Text · Label Text · Caption · Badge · Left Icon |
| List_Checkbox | 체크박스로 여러 개 선택(가장 일반적) | Sub Text · Label Text · Caption · Badge · Left Icon |

### 3-c. Data Table

표 구성용 Item이다. **조합용(단독 사용 금지)**. (Variant 6개)

| 속성 | 값 |
|---|---|
| Type | Title · Header · Data |
| 옵션 | Checkbox · Radio Button · Right Icon 1st/2nd · Controller Icon · Label Text · Left Icon · Button · Title Icon |
| 아이콘 교체 | Change Left Icon · Change Right Icon 1st/2nd · Change Title Icon · Change Controller Icon |

### 3-d. Accordion

펼치고 접어 정보를 보여 준다. 공통 State: Enabled · Expanded · Disabled.

| 컴포넌트 | 설명 | 옵션 |
|---|---|---|
| Accordion_Item | 조합용 개별 Item. 단독 사용 금지 (State: Unselected · Selected) | - |
| Accordion_More | 화이트 배경 하단에서 펼쳐지며 주로 페이지 하단에서 추가 옵션 제공 | - |
| Accordion_Checkbox | 전체 화면을 차지하며 펼쳐져 큰 정보 묶음을 전달 | Badge · Sub Text · Caption · Label Text |
| Accordion_Basic | 위와 같은 형태 | Question · Badge · Sub Text · Caption · Label Text |

### 3-e. Pagination

페이지 이동을 정의한다.

| 컴포넌트 | State · 옵션 | 설명 |
|---|---|---|
| Pagination_Item | State: Unselected · Selected · Ellipsis | 조합용. 단독 사용 금지 |
| Pagination_Control | 옵션: First · Pre · Next · Last Page Button | 사용자가 직접 페이지를 이동하며 탐색 |
| Pagination_Button | - | 정보의 양을 정확히 알려야 할 때 |
| Pagination_Number | State: Basic · Play · Stop | 정보의 양을 정확히 알려야 할 때 |
| Pagination_Dot | - | 점으로 총량 · 현재 위치 표시(가장 기본) |

## 4. 탐색

### 4-a. Breadcrumb_Item

Breadcrumb 조합용 Item이다. **단독 사용 금지**.

| 속성 | 값 |
|---|---|
| State | Home · Parent · Current Page |
| 옵션 | Right Arrow |

### 4-b. Line Tabs

탭 구성용 Item (`Item_Line Tabs`)이다. **조합용(단독 사용 금지)**. Size: L · S / State: Selected · Unselected / 옵션: Dot Badge.

### 4-c. Segment

| 컴포넌트 | 속성 | 설명 |
|---|---|---|
| Date Tabs | Type: Single / State: Selected · Unselected | 날짜 탭 |
| Item_Segment Tabs | State: Selected · Unselected | Box Tabs 조합용. 단독 사용 금지 |

### 4-d. Overflow Menu_Item

Overflow Menu 조합용 Item이다. **단독 사용 금지**. State: Default · Hover · Selected · Disabled.

### 4-e. Footer Navigation

웹 하단에 두는 탐색 링크 · 메뉴다. Type: PC.

## 5. 안내 · 피드백

### 5-a. Banner

메인 · 서브 화면에 배너를 둘 때 쓴다. Size: XL · L · M · S.

### 5-b. Info Box

서비스 이용 중 확인해야 할 정보를 안내한다. 옵션: Close Icon · Text Button · Subtext.

### 5-c. Snackbar

일정 시간 뒤 자동으로 사라지거나 사용자 액션에 따라 다른 페이지로 이동할 수 있다.

| 옵션 | Description · Right Area(Button · Right Icon) · Description Icon · Left Icon |
|---|---|
| 아이콘 교체 | Change Icon Button |

### 5-d. Toast

상황에 맞는 상태의 토스트를 쓰며 아이콘으로 상태를 직관적으로 보여 준다. 옵션: Left Icon.

### 5-e. Tooltip

화면 정보를 가리지 않고 도움말을 준다. 말꼬리(direction polygon) 위치로 표시 방향을 정한다. (Variant 48개)

| 속성 | 값 |
|---|---|
| Type(방향) | ↑ Left · Center · Right / ↓ Left · Center · Right / ← Top · Middle · Bottom / → Top · Middle · Bottom |
| Size | S · M |
| 옵션 | Left Icon(+Change Left Icon) |

### 5-f. Popover

요소를 누르거나 호버하면 나타나며 말꼬리로 표시 위치를 조정한다. (Variant 48개)

| 속성 | 값 |
|---|---|
| State(방향) | Tooltip과 같은 12방향 |
| Style | White · Gray |
| 옵션 | Left Icon(+Change Left Icon) |

### 5-g. Loading

| 컴포넌트 | 속성 | 설명 |
|---|---|---|
| Loading_Basic | Type: Circular Indicator · Pull to Refresh · Linear Indicator / 옵션: Text | 데이터를 불러오는 동안의 대기 상태 |
| Loading_Skeleton | Type: Square · Round | Square: 텍스트 · 이미지 자리 / Round: 아이콘 · 버튼 · 프로필 자리 |

## 6. 표시 · 구분

### 6-a. Badge

사용자의 활동 · 업적 · 특별한 상태를 나타내는 표식이다.

| 컴포넌트 | 속성 | 설명 |
|---|---|---|
| Square Text Badge | Color: Light Gray · Black · Lined / 옵션: Icon(+Change Icon) | 배경 · 색이 적용된 사각 텍스트 배지 |
| Dot Badge | - | 점 배지(프로필 · 활동 이력에 표시) |
| Number Badge | - | 횟수 · 숫자 기반 배지 |
| Icon Badge | 아이콘 교체: Change Icon | 아이콘 배지 |

### 6-b. Divider

목록 · 컨테이너를 구분한다. Type: Group · Line(Black) · Line(Gray). 영역에 따라 그룹 · 아이템을 알맞게 쓴다.

### 6-c. Profile

프로필 아이콘과 함께 기본 사용자 정보를 표시한다(Single). 다수 사용자를 함께 보일 때는 Multi. 옵션: Right Icon(+Change Right Icon) · Ring.

## 7. 차트

Figma Asset 페이지에는 Clustered Column Bar Chart, Stacked Column Bar Chart, Line, Bar 크기 고정 · 유동 프레임이 있으나 **컴포넌트 세트(Variant)로 정의돼 있지 않다**. 차트는 기준 프레임을 직접 참고하고, 확정 후 이 문서에 더한다.
