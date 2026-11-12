---
cid: TI-STN-03-02
pair_cid: LI-STN-03-02
tl_relation: 기능 추가
title: Extraction Protocol
path: Setting > Protocol Setting > Extraction Protocol
type: Tab
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=4871-406975
figma_region: 2.1 2차
---
# TI-STN-03-02 Extraction Protocol

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- T/L 차이: L-IOS는 조회만
- 관련 정책: POL-TST-006

## 기존 화면

### 화면 글자

- Pre-Treatment Protocol | Extraction Protocol
- 검색: Protocol Name | Modified by | Reset | Search
- Items | Edit
- 목록 헤더: Protocol Name | Usage | Modified by | Modified Date/Time | Copy
- 목록 예: SG-RESPI [SG protocol] | Applied | - | -, Test Protocol AA | - | Admin01 | 2026-03-24 10:24:56 …

### 디스크립션 (원문)

#### 1. Pre-Treatment Protocol 탭

- 선택 시 → [TI-STN-03-01] 화면으로 이동

#### 2. 검색 영역

- 2-1 검색 필드: 정의 : 각 검색 필터 항목, AND 조건으로 결합한 결과 노출
- 2-2 [Reset] 버튼: 선택 시 → 검색 조건 reset & 모든 핵산 프로토콜 항목 노출
- 2-3 [Search] 버튼: 선택 시 → &검색어% Like 검색 진행 (검색 결과 없음 Case 참고)

#### 3. Items 개수

- 정의 : 핵산 프로토콜 모든 항목 개수 총합 출력
- 최소/최대값 정의 : 최소 1개, 최대 25개

#### 4. [Edit] 버튼

- 선택 시 → [TI-STN-03-01-01] 팝업 노출

#### 5. 목록

- 노출 : Extraction Protocol 항목 모두 노출
- 정의 : Pre-Treatment Protocol 세부 정의와 동일 ([TI-STN-03-01] 화면 참고)

#### 6. Pagenation

- 공통 UX > COMM-5-i 정의 참고

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 4 [Edit] → "[TI-STN-03-01-01]" | TI-STN-03-02-01 | IA | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | BREX | Figma 화면 정보 |
