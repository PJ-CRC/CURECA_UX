---
cid: TI-STN-05-02-P
pair_cid:
tl_relation: 단독
title: Account Created
path: Setting > Account Setting > Create New User > Account Created
type: Popup
version: 2.1.03
date: 2026-08-21
author: 정다예
service_mode: []
user_type: [Service, Admin]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=3605-337190
figma_region: 2.1 2차
---
# TI-STN-05-02-P Account Created

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 2.1.03)을 2026-11-02에 옮긴 것입니다. 같은 CID에 Ver 1.1 프레임(568:57953)도 있어 Ver 2.1.03 프레임을 옮겼습니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- 관련 정책: POL-ACC-001, POL-ACC-002, POL-ACC-005, POL-ACC-006 / 임시 정책 PV-0002
- 다른 프레임: [TI-STN-05-02-P/Case](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=568-58762) (SMTP 미연동, 이메일 미입력, 메일 전송 실패)

## 기존 화면

### 화면 글자

- Account Created Successfully
- The user account has been successfully created, and the temporary password has been sent to the registered email address.
- OK

### 디스크립션 (원문)

#### 0. 계정 생성 완료 팝업

- SMTP 설정 및 이메일 입력 여부에 따라 팝업 케이스 분기 노출

#### 1. 계정 생성 완료 팝업

- 노출 조건 (AND): SMTP 설정 및 연동 완료 상태, Email 입력 및 검증 완료 상태
- 예외 분기 (다른 팝업 노출): SMTP 미연동 또는 Email 미입력 시, SMTP 서버 오류로 인한 메일 전송 실패 시 (참고 : TI-STN-05-02-P/Case)
- 타이틀 : Account Created Successfully
- 내용 : The user account has been successfully created, and the temporary password has been sent to the registered email address.

#### 2. [확인] 버튼

- 클릭 시, 해당 팝업 닫힘, 기존 진입 화면 유지

#### 3. [X] 버튼

- 클릭 시, 팝업이 닫힌 후 기존 화면 노출

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | 같은 CID 프레임이 2개 (Ver 1.1, Ver 2.1.03) | 옛 프레임 정리 | Figma | 대기 |
| R02 | 디스크립션 | 버튼 설명 [확인], [X], 화면은 [OK] 하나 | 화면과 맞춤 | 화면 글자 | 대기 |
| R03 | 화면 정보 | 화면 이름 "Account Setting" | Account Created | IA | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 2.1.03 | 2026-08-21 | (버전 메모 없음) | 정다예 | Figma 화면 정보 |
