---
cid: TI-SVS-01
pair_cid: LI-SVS-01
tl_relation: 기능 추가
title: Sample Tube Setting
path: Setting > Tube Setting
type: Page
version: 2.1.01
date: 2026-08-07
author: BREX
service_mode: []
user_type: [Service]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8376-348979
figma_region: 2.1 2차
---
# TI-SVS-01 Sample Tube Setting

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.1.01)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T/L 차이: T-IOS에서 추가·수정·삭제. L-IOS(LI-SVS-01)는 조회만
- 관련 정책: POL-TST-009

## 기존 화면

### 화면 글자

- 검색: LIS Code (Enter LIS code) | System Code (Enter system code) | Reset | Search
- Items | Add
- 목록 헤더: Tube name | System Code | LIS Code | Socket Type | Height (mm) | Cap size (mm) | Body Size (mm) | Modified Date/Time | Details
- 목록 예: Tube 1 | SYS-001 | LIS-001 | Socket 11 | 100.000 | 13.000 | 13.000 | 2026-03-24 10:24:56 …

### 디스크립션 (원문)

#### 1. 검색 영역

- 1-1 검색 필드: 정의 : 각 검색 필터 항목, AND 조건으로 결합한 결과 노출
- 1-2 기능 버튼: [Reset] 버튼 - 선택 시 → 검색 필드 초기화. [Search] 버튼 - 선택 시 → &검색어% Like 검색 진행 (검색 결과 없음 Case → 세부정의 참고)

#### 2. Items 개수

- 정의 : 검체 튜브 설정 완료한 모든 항목 개수 총합 출력

#### 3. [Add] 버튼

- 디폴트 : 활성화
- 선택 시 → [TI-SVS-01-P] 팝업 노출

#### 4. 목록

- 출력 : 검체 튜브 설정 등록 시, 입력한 값 출력. 단, 디자인 영역 넘을 경우, 말줄임(...) 표기
- 정렬 : 등록일 내림차순
- 4-1 [상세 보기] 버튼: 선택 시 → [TI-SVS-01-P] 팝업 노출

#### 5. Pagenation

- 공통 UX > COMM-5-i 정의 참고

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 화면 이름 "Sample tube Setting", IA "Tube Setting" | 하나로 통일 | IA | 대기 |
| R02 | 정책 반영 | 입력 값 조건(코드 형식, 치수 범위, 중복 여부)이 목록 화면에 없음 | 세부정의·Modify 화면 확인 후 POL-TST-009에 넣음 | 헌법 8조 | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.01 | 2026-08-07 | (버전 메모 없음) | BREX | Figma 화면 정보 |
