---
cid: TI-INF-02-P
pair_cid: LI-INF-02-P
tl_relation: 동일
title: Installation information Popup
path: Information > Program > Installation information
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=711-97805
figma_region: 2.1 1차
---
# TI-INF-02-P Installation information Popup

> 기존 화면(작업방 Profile/Information 페이지, 2.1 1차 영역, Ver 2.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- 관련 정책: (정책 작성 전)

## 기존 화면

### 화면 글자

- Installation information
- Date/Time | 2026-04-05 11:22:33
- Version | V1.01.005
- Language | English
- Data reset | Y
- OK

### 사용 컴포넌트

Description Number (4), Popup/Popup Middle Text (1), Interface/Close (1), Square (1)

### 디스크립션 (원문)

#### 0. 메뉴 정의

- 설치된 상세 내역을 확인할 수 있는 팝업이다
- 진입 방법
- Information 내 ‘Installation information’ 통해 진입

#### 1. Date/Time

- 설치 일시 또는 업데이트 했을 경우, 최신 업데이트일시 표기

#### 2. Version

- 현재 설치된(또는 업데이트한) 버전 표기

#### 3. Language

- 최초 설치 시 선택한 언어 표기

#### 4. Data reset

- 최초 설치 시, 데이터 초기화 여부에 Y/N 선택한 정보 표기

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | [OK], [X] 버튼 동작 설명 없음 | 버튼 동작 추가 (팝업 닫힘) | 화면 글자 | 대기 |
| R02 | 디스크립션 | 3 Language "최초 설치 시 선택한 언어" | 설치 후 언어를 바꿀 수 있으면 현재 언어인지 설치 시 언어인지 정함 | 디스크립션 | 대기 (확인 필요) |
| R03 | 디스크립션 | 4 Data reset이 최초 설치 때 값인지, 업데이트 때 값인지 (1은 최신 업데이트 일시) | 기준 시점을 1과 맞춤 | 디스크립션 1, 4 | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.0 | 2026-06-15 | (버전 메모 없음) | 서보경 | Figma 화면 정보 |
