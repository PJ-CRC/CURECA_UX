---
status: 진행 중            # 진행 중 | 끝남 | 멈춤
requester: 서보경
menu: Event History (EVT)
cids: [TI-EVT-P, LI-EVT-P, TI-EVT-01-P, LI-EVT-01-P, TI-EVT-02-P, LI-EVT-02-P]
policies: []
cid_system:
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3577-18413
test: false
basis_start: 2026-11-25 21:17 · history 5ec517c7
basis:
basis_versions:
  rules:
  policy:
  glossary:
  screens:
  common_ux:
started: 2026-11-25
---
# 작업 기록: Event History 화면을 Event History_tobe 페이지로 옮겨 다시 그림

## 단계

| 단계 | 끝낸 날 | 마침 점검 | 남긴 것 |
| --- | --- | --- | --- |
| 1. 시작 · 요건 정의 | | | 겹치는 다른 작업: 없음 |
| 2. 근거 · 분석 | | | |
| 3. 화면 설계 | | | |
| 4. 수정 · 확인 | | | |
| 5. 완료 | | | |

이어서 작업할 곳: 1단계 · 절차 2 요건 · 대상 화면 짚기 끝냄, asis 화면 MD 6개는 읽음. 절차 3 할 차례 — `Event History_asis` 페이지 기획 프레임 안 케이스 프레임(3543:47370 · 3543:47066 · 3543:46798) 읽기와 반영 대기 후보 정리, tobe 화면 MD 빈 틀 만들기 남음 (2026-11-25 Figma 파일 접근 안 돼 멈춤, 21:21 다시 해 봐도 같음 — 연결된 Figma 계정에 이 파일 권한 없음) (다시 읽을 곳: 1단계 절차 3 · "케이스 3 (이행 기간)" / 작업 기록 "요건 목록" · "뒤 단계용 확인 항목(claude)")

## 요청

- "Event History 화면 옮겨줘" — Workbench 요청 R001 (서보경, 2026-11-25 21:16)
- 기존 화면: `Event History_asis` 페이지 https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-45275
- 옮길 페이지: `Event History_tobe` 페이지 https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3577-18413
- 공유 파일 없음

## 요건 목록

### 요건 1. Event History 메뉴의 기존 화면을 `Event History_tobe` 페이지로 옮겨 다시 그림
- 요청 상태: 최초

| 대상 화면 | 케이스 | 작업 대상 | 근거 |
| --- | --- | --- | --- |
| Event History (TI-EVT-P) | 3 | O | 요청 글: `Event History_asis` 페이지 전체 (페이지의 기획 프레임 6개) |
| Event History (LI-EVT-P) | 3 | O | 짝 화면 · 함께 옮김 (요청 글: 페이지 전체) |
| Event History Detail (TI-EVT-01-P) | 3 | O | 요청 글: 페이지 전체 |
| Event History Detail (LI-EVT-01-P) | 3 | O | 짝 화면 · 함께 옮김 (요청 글: 페이지 전체) |
| Event Message Popup (TI-EVT-02-P) | 3 | O | 요청 글: 페이지 전체 |
| Event Message Popup (LI-EVT-02-P) | 3 | O | 짝 화면 · 함께 옮김 (요청 글: 페이지 전체) |

### 찾았지만 대상 아님

| 찾은 화면 (CID) | 찾은 법 (말 · 번호 · CID) | 대상이 아닌 이유 |
| --- | --- | --- |
| Profile 화면 (TI-CPW-01-P) | 호출 관계 (본문에 TI-EVT-02-P: "노출 팝업 예시 참고") | 옮겨 다시 그리는 요건이라 Event Message Popup의 동작이 바뀌지 않음. 예시로 가리키기만 함 |

### 영향 화면

없음 — 같은 글자 · Common UX 번호 · 호출 관계로 찾았으나 다른 메뉴에서 맞춰 고칠 화면이 없음

## 읽은 화면

| 화면 (CID) | 읽은 것 (화면 MD / 기획 프레임 / 케이스 프레임 / 호출 화면) | Figma 링크 |
| --- | --- | --- |
| Event History (TI-EVT-P) | asis 화면 MD (케이스 프레임은 아직) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-47110 |
| Event History (LI-EVT-P) | asis 화면 MD (케이스 프레임은 아직) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-46804 |
| Event History Detail (TI-EVT-01-P) | asis 화면 MD (케이스 프레임 없음) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-47409 |
| Event History Detail (LI-EVT-01-P) | asis 화면 MD (케이스 프레임은 아직) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-46640 |
| Event Message Popup (TI-EVT-02-P) | asis 화면 MD (케이스 프레임 없음) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-47691 |
| Event Message Popup (LI-EVT-02-P) | asis 화면 MD (케이스 프레임 없음) | https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3543-47634 |

## 뒤 단계용 확인 항목(claude)

## 대상 화면의 반영 대기 항목

## 근거

## 설계

## 질문 대기

| 번호 (Q) | 질문 | 관련된 곳 (CID · 디스크립션 번호) | 논의 대상 | T · L 같음 | 풀린 날 · 어떻게 |
| --- | --- | --- | --- | --- | --- |

## 변경 확인

| 번호 (C) | 기존 화면 | 바꿔 그린 것 | 관련된 곳 (CID · 디스크립션 번호) | 근거 | T · L 같음 | 업데이트 메모 (O / -) | 확인한 날 · 답 (맞음 / 되돌림) |
| --- | --- | --- | --- | --- | --- | --- | --- |

## 검토 질의

## 언어셋

## 요청자 확인

| # | 생긴 날 | 단계 · 절차 (질문 번호 또는 `예외`) | 물은 것 | 관련된 곳 (CID · 디스크립션 번호 · Language ID) | 답을 받을 때까지 둔 모습 (예외 질문만) | 답 (날짜) |
| --- | --- | --- | --- | --- | --- | --- |

## 이 작업의 논의 대상

| 논의 대상 | 상태 (논의 중 / 결정) | 내용 한 줄 | 5단계 반영 |
| --- | --- | --- | --- |

## 이 작업이 남긴 것

- 다른 화면의 반영 대기 항목:
- 고친 카탈로그 줄:
