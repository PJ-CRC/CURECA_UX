---
cid: TI-ADS-P
pair_cid:
tl_relation: 단독
title: Edit Display Name Popup
path: Dashboard(All) > Edit Display Name
type: Popup
version: 2.1.14
date: 2026-10-30
author: 서보경
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=772-51817
figma_region: 2.1 2차
---
# TI-ADS-P Edit Display Name Popup

> 기존 화면(작업방 Dashboard 페이지, 2.1 2차 영역, Ver 2.1.14)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- 호출 위치: Dashboard(All) (TI-ADS)
- 관련 정책: 없음

## 기존 화면

### 화면 글자

- Edit Display Name
- Change how this instruments appears on your dashboard.
- Display Name
- CURECA 1, Main building 2F
- 0 / 30
- Cancel | Save

### 사용 컴포넌트

Description (10), Description Number (3), Popup/Popup Middle Text (2), Square (2)

### 디스크립션 (원문)

#### 0. 메뉴

- CURECA 전체 장비의 표기명을 수정하는 팝업이다.

#### 1. Display Name 필드

- 최대 30자까지 입력 가능

#### 2. [Cancel] 버튼

- 클릭 시, 해당 팝업 닫히며, 변경사항 저장되지 않음.

#### 3. [Save] 버튼

- 변경된 내역 저장되며, 팝업 닫힘

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 화면 이름 "Edit Display Nam Popup" | Edit Display Name Popup | 오타 | 대기 |
| R02 | 문구 | "Change how this instruments appears on your dashboard." | this instrument | 영어 문법 | 대기 |
| R03 | 화면 글자 | 값이 입력돼 있는데 글자 수가 "0 / 30" | 입력 글자 수와 맞춤 | 화면 | 대기 |
| R04 | 정책 반영 | Display Name 규칙(최대 30자, 빈 값 허용 여부, 누가 바꿀 수 있는지)이 정책에 없음 | 정책 필요 여부 확인 | 헌법 8조 | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.14 | 2026-10-30 | (버전 메모 없음) | 서보경 | Figma 화면 정보 |
