---
cid: TI-STN-03-01
pair_cid: LI-STN-03-01
tl_relation: 기능 추가
title: Pre-Treatment Protocol
path: Setting > Protocol Setting > Pre-Treatment Protocol
type: Page
version: 2.0
date: 2026-06-15
author: BREX
service_mode: []
user_type: [Service, Admin]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=4871-406677
figma_region: 2.1 2차
---
# TI-STN-03-01 Pre-Treatment Protocol

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: T-IOS에서 추가·복사·수정·삭제. L-IOS(LI-STN-03-01)는 조회만
- 관련 정책: POL-TST-006

## 기존 화면

### 화면 글자

- Pre-Treatment Protocol | Extraction Protocol
- 검색: Protocol Name (Enter protocol name) | Modified by (Enter modified by) | Search
- Items 1,000 | Edit
- 목록 헤더: Protocol Name | Usage | Modified by | Modified Date/Time | Copy
- 목록 예: Seegene Protocol [SG protocol] | Applied | - | -, Test Protocol AA | - | Admin01 | 2026-03-24 10:24:56 …

### 디스크립션 (원문)

#### 1. Tap 메뉴

- 디폴트 : [TI-STN-03-01] 화면 노출
- Extraction Protocol 탭: 선택 시 → [TI-STN-03-02] 화면으로 이동

#### 2. 검색 영역

- 2-1 검색 필드: 정의 : 각 검색 필터 항목, AND 조건으로 결합한 결과 노출
- 2-2 [Search] 버튼: 선택 시 → &검색어% Like 검색 진행 (검색 결과 없음 Case 참고)

#### 3. Items 개수

- 정의 : 전처리 프로토콜 모든 항목 개수 총합 출력

#### 4. [Edit] 버튼

- 선택 시 → [TI-STN-03-01-01] 팝업 노출

#### 5. 목록

- 노출 : Pre-Treatment protocol 항목 모두 노출 (정렬 Case 참고)
- 5-1 Protocol Name: 사용자가 입력한 프로토콜명 노출. SG protocol 배지 노출 조건 : Seegene에서 제공하는 기본 프로토콜인 경우
- 5-2 Usage: 사용자가 해당 프로토콜 사용 여부 노출. 프로토콜 사용 시 : Applied 플래그 노출 ([TI-STN-03-01-01] 화면에서 [Apply] 버튼 선택 & 저장한 경우). 프로토콜 미사용 시 : 하이픈(-) 노출
- 5-3 Modified by: 해당 프로토콜의 마지막 편집자 ID 노출. 최초 생성 시, 생성한 ID 노출. 단, SG protocol은 하이픈(-) 처리
- 5-4 Modified Date/Time: 해당 프로토콜의 마지막 편집일자 노출. 최초 생성 시, 생성 일자 노출. 단, SG protocol은 하이픈(-) 처리. 출력 : yyyy-mm-dd hh-mm-ss
- 5-5 [Copy] 버튼: 선택 시 → 해당 row 바로 아래(Index + 1)에 복사본 row 생성. 신규 생성된 row는 리스트 바로 반영 (신규 프로토콜 명칭 Case 참고)
- 5-6 상세 화면 이동 버튼: 선택 시 → [TI-STN-03-01-02] 화면으로 이동

#### 6. Pagenation

- 공통 UX > COMM-5-i 정의 참고

## 반영 대기 목록

| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | 정책 반영 | Protocol을 바꿀 수 있는 상태 조건이 디스크립션에 없음 | 디스크립션에 넣음: 장비 통합 상태가 Not Initialized 또는 Ready일 때만 추가·복사·수정·삭제 가능, 그 밖의 상태에서는 [Edit]·[Copy]·[Modify] 비활성 | POL-TST-006 규칙 3 | 대기 |
| 2 | 디스크립션 | Items 최대 개수가 없음 (Extraction Protocol은 최대 25개) | 최대 개수 확인 | TI-STN-03-02 3 | 대기 (확인 필요) |
| 3 | 표기 | 출력 형식 "yyyy-mm-dd hh-mm-ss" | YYYY-MM-DD hh:mm:ss (다른 화면과 같게) | 디스크립션 | 대기 |
| 4 | 표기 | Tap, Pagenation | Tab, Pagination | 오타 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | BREX | Figma 화면 정보 |
