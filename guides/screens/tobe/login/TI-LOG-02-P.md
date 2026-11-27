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
policies: [POL-ACC-007]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=4073-8
---
# TI-LOG-02-P Account Locked

- T/L 차이: 없음
- 호출하는 화면: [TI-LOG-01] Sign in (2 [X] · 3 [Ok] → Popup이 닫힌 후 로그인 화면 노출)
- 호출되는 곳: [TI-LOG-01] Sign in 4 [Sign In] (인증 실패 누적 10회)
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Account Locked Popup**
- 공통 UX 참고 : COMM-5-m
- User Type : Service, Admin, User

**1  사용자 계정 잠금 <span style="color:red">Popup</span> 노출**
- 노출 조건
  - 로그인 인증 실패 누적 횟수가 10회에 도달할 경우 즉시 노출
- 잠금 해제 정책
  - ~~관리자가 설정한 제한 시간 경과 시 시스템 자동으로 차단 해제~~
  - <span style="color:red">잠금 시간 5분 고정 (설정으로 변경 불가)</span>
  - <span style="color:red">5분 경과 시 잠금 자동 해제</span>
  - 잠금 해제 시 인증 실패 누적 횟수를 0으로 즉시 초기화
- 정책 참고 : POL-ACC-007

**1-1  사용자 계정 잠금 안내 문구**
- 고정 타이틀 및 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 타이틀 : Account Locked
- 내용 : For security purposes, your account has been temporarily locked after 10 failed login attempts.

**1-2  잠금 해제 잔여 시간 표시**
- 정의
  - 계정 잠금 해제까지 남은 시간 및 진행 상태 시각화
- 고정 타이틀 : Time remaining until unlock
- 시간 표시 : 5분 기준으로 잔여 시간을 역산하여 노출
- 시각화 : 전체 차단 시간 대비 잔여 시간을 프로그레스 바 형태로 노출
- 정책 참고 : POL-ACC-007

**1-3  사용자 가이드 문구**
- 상세 문구 노출 (데이터 상태에 따른 가변 없음)
- 내용 : You can try logging in again once the lock is released.

**2  [X] 버튼**
- 클릭 시, Popup이 닫힌 후 로그인 화면 노출

**3  [<span style="color:red">Ok</span>] 버튼**
- 클릭 시, Popup이 닫힌 후 로그인 화면 노출

## 케이스

없음

## Alert · Confirm · Toast

없음

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 1-2 | 잔여 시간 · 프로그레스 바 | 4:57 | 기존 원본 `Login_asis` TI-LOG-02-P `3538:12235` |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Account Locked | 화면 1-1 | |
| For security purposes, your account has been temporarily locked after 10 failed login attempts. | 화면 1-1 | |
| Time remaining until unlock | 화면 1-2 | |
| You can try logging in again once the lock is released. | 화면 1-3 | |
| Ok | 화면 3 | |
