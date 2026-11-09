# STAgoras Admin Common UX 가이드

STAgora AI Workspace 파일의 「Common UX」 페이지(공통 화면 정의서 COM-01 ~ COM-09)를 기준으로 공통 컴포넌트(버튼 · 입력 · 팝업)와 화면 유형별 레이아웃 영역 크기를 정리했다.

> 기준: Figma `STAgora-AI-Workspace` › Common UX 페이지(`node-id=1-5`)의 최상위 프레임 COM-01 ~ COM-09, COM-03-01 ~ 03, COM-08-01 ~ 04의 글 · 컴포넌트 · 크기. Figma는 읽기만 했다. 크기는 Figma에서 잰 값이며, 정의서에 글로 정해진 규칙이 없는 값은 「확인 필요」로 표시했다.

### 프레임 구성

| 프레임 | 내용 | 크기 |
|---|---|---|
| COM-01 | Calendar | 1920 × 1334 |
| COM-02 | Combo Box | 1920 × 2297 |
| COM-03 · 03-01 · 03-02 · 03-03 | LNB · Role Information · My Profile · Profile PDF | 1920 × 1381 / 2130 / 1080 · 2252 × 1320 |
| COM-04 | 접근불가(Access Denied) | 2252 × 1080 |
| COM-05 | Input Field / Select Box | 1920 × 1080 |
| COM-06 | Validation Check | 1920 × 1080 |
| COM-07 | Data Table | 1920 × 1652 |
| COM-08-01 ~ 04 | 개인정보 조회 권한 및 접근 통제 | 1920 × 1080 ~ 3264 |
| COM-09 | Temporary Password Information | 2252 × 1080 |

## 0. 문서 구성 (목차)

1. 공통 규칙
2. 버튼
3. 입력
4. 팝업 · 알림
5. 레이아웃 (화면 유형별 영역 크기)

### CID 규칙

- 공통 화면은 `COM-{번호}`, 하위 화면은 `COM-{번호}-{번호}`로 부른다.
- 각 화면 프레임은 우측에 Ver · Date · CID · 작성자 · 화면 · 경로 표와 번호 디스크립션(Description Number)을 둔다. 수정은 `[vX.X/수정 내용]`으로 적는다.

## 1. 공통 규칙

공통으로 지키는 표기 · 구성 규칙이다.

### 1-1. 화면 프레임과 디스크립션

화면 프레임 폭은 1920px(Common 정의서 일부는 2252px)이고, 디스크립션은 화면 요소 옆 번호(`1`, `2-1` …)와 우측 설명 패널로 정의한다.

| 항목 | 값 |
|---|---|
| 프레임 폭 | 1920px (2252px: COM-03-03, COM-04, COM-09, 팝업 · 문서형 화면) |
| 우측 디스크립션 패널 | 폭 332px, 화면 우측 끝(x=1588)에 붙임 |
| 디스크립션 번호 | `Description Number` 인스턴스(약 32 × 21) |
| 표기 | 사용자 입력 · 변동 데이터는 `$값$`으로 표기 |

### 1-2. 테마와 상태 표기

- 컴포넌트는 `Theme=Light`가 기본이고, 상태는 Enabled · Focused · Typing · Completed · Error · Disabled · Read-only 순으로 정의한다.
- 영역을 초과하는 글은 말줄임(…)으로 표시하고, 호버하면 전체 글을 팝오버로 보여 준다(COM-05, COM-07).

## 2. 버튼

버튼은 Figma 컴포넌트 세트 `Button`(Style · Size · State · Theme)을 쓴다.

### 2-1. 버튼 종류와 크기

| Style | Size | 높이 | 모서리 | 비고 |
|---|---|---|---|---|
| Filled | M | 40px | 4px | 주요 동작(예: Confirm, Search). 활성 배경 검정, 비활성 #E1E6EC |
| Outlined | M | 40px | 4px | 보조 동작(예: Cancel, Reset) |
| Filled | S | 32px | 4px | 영역 안 보조 버튼 |
| Outlined | S | 32px | 4px | 목록 상단 Unmask · Add 등 |

- 버튼 폭은 글자 길이에 맞춰 늘어난다(예: M Filled 79px, M Outlined 87px, S 72px). 폭 규칙은 정의서에 따로 없어 글자 + 좌우 여백으로 본다(확인 필요).

### 2-2. 사용 규칙

- 한 영역에서 주요 동작은 Filled 하나만 쓰고 나머지는 Outlined로 한다.
- 권한이 없거나 조건이 안 맞으면 Disabled(회색 #E1E6EC)로 두고 숨기지 않는다. 단 권한 없는 사용자에게 기능 자체를 노출하지 않는 경우는 정책서를 따른다(예: 마스킹 해제 버튼은 권한이 있는 사용자에게만 노출).
- 상태(Status) 칩은 버튼이 아니라 `Basic` 칩(Size=L, 모서리 둥근 형태)을 쓴다.

## 3. 입력

입력은 `Input Field`(Basic)와 `Select Box / Dropdown`, `Combo Box`, `Calendar`로 나눈다.

### 3-1. Input Field

| 상태 | 설명 |
|---|---|
| Enabled | 기본. 플레이스홀더(예: Enter email) 표시 |
| Focused / Typing | 입력 중. 입력 시작 후 Error 상태는 해제 |
| Completed | 입력 완료 |
| Error | 필드 아래 오류 메시지(Error messages appears in here.) 노출. 높이 70px → 98px |
| Disabled | 편집 불가 |
| Read-only | 보기만(편집 불가이지만 값 표시) |

- 입력 필드 표준 높이는 라벨 포함 70px이고, 폭은 화면에 맞춰 200 ~ 643px로 쓴다(폭 규칙은 확인 필요).
- 영역을 넘는 글은 말줄임이며 호버 시 전체 글을 보여 준다.

### 3-2. Select Box / Dropdown

- 상태: Unselected · Selected · Focused · Disabled · Disabled Selected · Error(Error 시 높이 98px).
- 옵션은 사전에 정의한 데이터에서 고른다. 옵션이 많으면 목록에 스크롤을 둔다.

### 3-3. Combo Box (COM-02)

- 입력 필드를 누르면 콤보박스가 열린다. 검색어를 입력하면 즉시 결과를 보여 준다.
- 계층형(1 · 2 · 3 Level)은 하위 Level이 검색 결과에 걸리면 상위 Level도 함께 보여 준다.
- 결과가 없으면 「No data to display.」를 보여 준다.
- Lab Combo Box · Hospital Combo Box는 사용자 유형(Lab Members · Clinician 등)에 따라 선택 방식이 다르다.

### 3-4. Calendar (COM-01)

- 연 · 월 선택 영역(Jan ~ Dec, 연도 목록), 요일(Sun ~ Sat), 날짜 셀, Today 버튼으로 구성한다.

## 4. 팝업 · 알림

### 4-1. 결과 안내 규칙 (COM-06)

| 상황 | 쓰는 것 |
|---|---|
| 화면 내 Validation Check 실패 | 해당 필드 Error 상태(필수) + 오류 메시지(선택) |
| API 호출 성공 | 토스트 메시지(예: Data has been saved successfully.) |
| 최종 확인이 필요한 결과 | Confirm Alert(2 Button): 타이틀(필수) · 본문(선택) · 버튼명 |
| 오류 | Alert(1 Button): 타이틀(필수) · 본문(선택) · 버튼명 |

- 화면별로 따로 정할 규칙은 해당 화면 정의서(SB)에서 정의한다. 버튼명 · 체크 로직은 화면별로 정의한다.

### 4-2. Alert 크기

| 컴포넌트 | 크기 |
|---|---|
| Confirm/Alert | 426 × 177px, 흰 배경 |

### 4-3. 팝업 (COM-03-01 · 03-02 · 08-02)

- 팝업은 우측 상단 닫기(Interface/Close) 아이콘을 둔다.
- 개인정보 마스킹 해제처럼 사유가 필요한 팝업은 「Reason for unmask *」처럼 필수 입력(*)과 Confirm 버튼으로 구성한다.
- 권한이 없을 때는 접근불가 얼럿 또는 접근불가 화면(COM-04, 「Access is not allowed from this IP address.」)을 보여 준다.

## 5. 레이아웃

화면 유형별 영역 크기이다. 크기는 Common UX 프레임에서 잰 값이고, 정의서에 없는 값은 확인 필요이다.

### 5-1. 화면 유형별 영역 크기

| 화면 유형 | 영역 | 크기(px) | 기준 프레임 |
|---|---|---|---|
| 공통 틀 | 전체 프레임 | 1920 폭 | COM-03 ~ 07 |
| 공통 틀 | LNB(좌측 메뉴) | 240 × 1080, 좌측 고정 | COM-03 |
| 공통 틀 | LNB 접힌 상태 | 폭 확인 필요(펼친 240) | COM-03 |
| 공통 틀 | 우측 디스크립션 패널 | 폭 332 | COM-03, 07 |
| 목록(Data Table) | 목록 본문 영역 | 1340 × 996(조회조건 + 목록) | COM-07 |
| 목록(Data Table) | 표 머리글 행 | 높이 32(배경 #F3F6FB) | COM-07 |
| 목록(Data Table) | 표 데이터 행 | 높이 38(흰 배경) | COM-07 |
| 입력 폼 | 입력 필드 한 줄 | 높이 70(Error 98) | COM-05 |
| 팝업 | Alert | 426 × 177 | COM-06 |
| 팝업 | Role Information · My Profile | 프레임 1920 × 2130 · 1920 × 1080 | COM-03-01 · 03-02 |
| 문서형(PDF · 접근불가) | 프레임 | 2252 × 1320 · 2252 × 1080 | COM-03-03 · COM-04 |

### 5-2. 규칙

- 목록 화면은 조회조건(Reset · Search) → 결과건수(Results N) → 목록 → 페이지네이션 순으로 둔다. 결과건수는 `Results $건수$`로 표기한다.
- 컬럼 정렬은 헤더 아이콘으로 하고, 데이터 없음 문구는 공통 문구를 쓴다(다른 문구는 SB별 정의).
- 개인정보(이름 · 이메일 등)는 기본 마스킹하고, 권한이 있는 사용자만 [Unmask]로 한 번에 최대 20건 해제한다(COM-08).
- 영역 사이 간격, 본문 좌우 여백은 정의서에 값이 없다. 확인 필요.
