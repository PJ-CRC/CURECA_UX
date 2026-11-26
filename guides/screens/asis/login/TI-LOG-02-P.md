---
cid: TI-LOG-02-P
pair_cid: LI-LOG-02-P
tl_relation: 동일
title: Account Locked
path: -
type: Popup
version: 2.1.01
date: 2026.08.07
author: 정다예
client_mode: []
user_type: [Service, Admin, User]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3538-12202
---
# TI-LOG-02-P Account Locked

> 기존 화면(작업방 `Login_asis` 페이지, Ver 2.1.01)을 2026-11-25에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다.

- T/L 차이: 없음 (LI-LOG-02-P와 화면 글자 · 디스크립션이 같음)
- 호출하는 화면: 로그인 화면 (2 [X] · 3 [Close] → 팝업이 닫힌 후 노출)
- 호출되는 곳: 로그인 인증 실패 누적 10회 (1 노출 조건)
- 관련 정책: POL-ACC-007

## 기존 화면

<!-- `{메뉴}_asis` 페이지에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- Account Locked
- For security purposes, your account has been temporarily locked after 10 failed login attempts.
- Time remaining until unlock | 4:57
- You can try logging in again once the lock is released.
- Ok

### 사용 컴포넌트

Description Number (6), Interface/Close (1), Popup/Popup Middle Text (1), Square (1)

### 디스크립션 (원문)

#### 1. 사용자 계정 잠금 페이지 노출

- 노출 조건
- 로그인 인증 실패 누적 횟수가 10회에 도달할 경우 즉시 노출
- 잠금 해제 정책
- ~~관리자가 설정한 제한 시간 경과 시 시스템 자동으로 차단 해제~~
- 잠금 해제 시 인증 실패 누적 횟수를 0으로 즉시 초기화

#### 1-1. 사용자 계정 잠금 안내 문구

- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : Account Locked
- 내용 : For security purposes, your account has been temporarily locked after 10 failed login attempts.

#### 1-2. 잠금 해제 잔여 시간 표시

- 정의
- 계정 잠금 해제까지 남은 시간 및 진행 상태 시각화
- 고정 타이틀 : Time remaining until unlock
- 시간 표시 : 5분 기준으로 잔여 시간을 역산하여 노출
- 시각화 : 전체 차단 시간 대비 잔여 시간을 프로그레스 바 형태로 노출

#### 1-3. 사용자 가이드 문구

- 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 내용 : You can try logging in again once the lock is released.

#### 2. [X] 버튼

- 클릭 시, 팝업이 닫힌 후 로그인 화면 노출

#### 3. [Close] 버튼

- 클릭 시, 팝업이 닫힌 후 로그인 화면 노출

### 케이스

<!-- `{메뉴}_asis` 페이지의 케이스 프레임을 빠짐없이 적습니다. 다시 그릴 때 케이스 블록의 근거 "기존 원본"이 됩니다. Case 번호는 원본 그대로. -->

없음 (`Login_asis` 페이지에 TI-LOG-02-P 케이스 프레임 없음)
