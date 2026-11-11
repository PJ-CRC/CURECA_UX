---
cid: TI-INF-01-P
pair_cid: LI-INF-01-P
tl_relation: 동일
title: Release Notes Popup
path: Information > Program > Release Note
type: Popup
version: 2.0
date: 2026-06-15
author: 서보경
service_mode: []
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=711-97780
figma_region: 2.1 1차
---
# TI-INF-01-P Release Notes Popup

> 기존 화면(작업방 Profile/Information 페이지, 2.1 1차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- IA 화면 이름은 "Release Note"
- 관련 정책: (정책 작성 전)

## 기존 화면

### 화면 글자

- Release Notes
- V1.01.005 / Improved system stability during start/stop operations under specific timing conditions. Resolved an issue where the system could remain in a pending state after a stop command in high-load environments. … (변경 내역 예시 문단 계속)
- OK

### 사용 컴포넌트

Description Number (2), Popup/Popup Middle Text (1), Interface/Close (1), Square (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- ‘Release Notes’ 내역을 확인할 수 있는 팝업이다
- 진입 방법
- Information 내 ‘Release Notes’ 통해 진입

#### 1. 내용

- 업데이트 버전별로 변경된 내역과 함께 표기됨

#### 2. 스크롤

- 타이틀 영역과 하단의 버튼 영역은 고정이며, 안에 내용 영역이 스크롤되는 구조

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 경로 "Information > Installation information Popup" | Information > Program > Release Notes | `ia/ia-screens.csv` | 대기 |
| R02 | 표기 | "Release Notes"(화면), "Release Note"(IA) | 하나로 통일 | `ia/ia-screens.csv` | 대기 |
| R03 | 디스크립션 | [OK], [X] 버튼 동작 설명 없음 | 버튼 동작 추가 (팝업 닫힘) | 화면 글자 | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | 서보경 | Figma 화면 정보 |
