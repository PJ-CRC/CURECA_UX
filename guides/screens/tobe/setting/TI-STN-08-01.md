---
cid: TI-STN-08-01
pair_cid:
tl_relation: 단독
title: Import file
path: Setting > Assay Pack Setting > Import file
type: Popup
version: 0.1.0
date: 2026.10.22
author: 이상헌
client_mode: []
user_type: [Service]
policies: [POL-TST-008]
basis: 2026-11-26 17:09 · history 402e669e
basis_versions: rules @2026-11-26 14:30 · policy @2026-11-25 21:21 · glossary @2026-11-26 15:17 · screens @2026-11-26 16:15 · common_ux @2026-11-25 16:08
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3667-11463
---
# TI-STN-08-01 Import file

- T/L 차이: T-IOS만 있음 (L-IOS 목록에는 [Import] 없음)
- 호출하는 화면: 없음 (Alert · Confirm만 엶)
- 호출되는 곳: [TI-STN-08] 목록 [Import]
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음 (TI-STN-08-R02 IA 추가, 작업 중)
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Import file Popup**
- 정의
  - Assay Pack 파일(json)을 골라 등록하는 Popup
- 동작
  - [TI-STN-08] 목록 [Import] 선택 시 노출
  - 배경(목록 · 메뉴) Dim, Popup 밖 영역 선택 불가
  - [X] · ESC 선택 시 Popup 닫힘, [TI-STN-08] 목록으로 돌아감 (반영 없음)
  - <span style="color:red">파일을 1개 이상 선택한 채 [X] · ESC 선택 시 Confirm 노출 : Confirm_031</span>
- User Type : Service
- 공통 UX 참고 : COMM-5-m
- 정책 참고 : POL-TST-008

**1  파일 영역 (Drag & Drop)**
- 기능 : 끌어놓기 또는 [Select files]로 여러 파일 선택 (개수 · 용량 제한 없음)
- 동작
  - 형식은 json만 선택 가능
  - json 외 파일 선택 시 Alert 노출 : Alert_041
  - File type은 파일 안의 파일 정보(fileType)로 판별 (선택 항목 없음)
- 정책 참고 : POL-TST-008

**2  선택한 파일 목록**
- 노출 항목
  - 파일명 · 용량, 선택 순서대로 노출
- 동작
  - [✕] 선택 시 해당 파일 빼기
  - 다시 선택하면 목록에 추가 (같은 파일명은 교체)

**3  [Cancel] / [Import] 버튼**
- [Import] 버튼
  - 활성화 조건
    - 파일 1개 이상 선택 시 활성화
    - 선택한 파일이 0개면 비활성화
  - 동작
    - 선택 시 파일별 양식 확인 (json 문법 · 필수 항목)
    - 양식 불일치 시 Alert 노출 : Alert_040 (전체 등록 안 됨)
    - 같은 File type · Product Name · 버전이 있으면 Confirm 노출 : Confirm_028
    - 이상 없으면 등록 및 최신 버전 자동 활성, Alert 노출 : Alert_039
    - Alert_039 확인 후 [TI-STN-08] 목록 최상단에 추가
- [Cancel] 버튼
  - 동작
    - 선택 시 Popup 닫힘, [TI-STN-08] 목록으로 돌아감 (반영 없음)
    - <span style="color:red">파일을 1개 이상 선택한 채 선택 시 Confirm 노출 : Confirm_031</span>
- 정책 참고 : POL-TST-008
- 케이스 참고 : TI-STN-08-01/Case > Case 1

## 케이스

### Case 1. 파일 선택 전 · 후

- 디스크립션 번호 : 1, 2, 3
- 근거 (기존 원본 / 디스크립션 조건 / 요청자) : 기존 원본
- 종류 (1 ~ 6, 근거가 디스크립션 조건일 때) : -

#### 1-1. 파일 선택 전 · [Import] 비활성

- 파일 선택 전 · [Import] 비활성

#### 1-2. 파일 선택 후 · [Import] 활성

- 파일 선택 후 · [Import] 활성 (여러 파일, 파일별 [✕]로 빼기, 다시 선택하면 목록에 추가)

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 1 | Alert | Alert_041 | json 외 파일 선택 | OK 선택 시 → 해당 Alert 닫힘, 데이터 반영 없음 |
| 3 | Alert | Alert_040 | [Import] 양식 불일치 파일 포함 | OK 선택 시 → 해당 Alert 닫힘, 데이터 반영 없음 |
| 3 | Confirm | Confirm_028 | [Import] 같은 File type · Product Name · 버전이 이미 있음 | Overwrite 선택 시 → 기존 파일 교체 & 등록 → Alert_039 / Cancel 선택 시 → Confirm 닫힘, Import 중단 ([TI-STN-08-01] Import file 유지) |
| 0 · 3 | Confirm | Confirm_031 | 파일을 1개 이상 선택한 채 [X] · ESC · [Cancel] 선택 | Discard 선택 시 → Popup 닫힘, [TI-STN-08] 목록으로 돌아감 (반영 없음) / Cancel 선택 시 → 해당 Confirm 닫힘, Import file Popup · 선택한 파일 유지 |
| 3 | Alert | Alert_039 | [Import] 모두 양식과 일치해 등록 완료 | OK 선택 시 → Alert 닫힘 & 목록 최상단에 Import한 파일 노출, 최신 버전 자동 활성 |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| 0 | Popup 제목 | Import file | 기존 원본 (As Is TI-STN-08-01 3288:237146) |
| 1 | 파일 영역 | Drag and drop files here, or / Select files / json · Multiple files | 기존 원본 (As Is 3288:237446) |
| 2 | 선택한 파일 목록 | 기존 원본 3행 그대로 (ap_master_v4.json 0.8 MB / ap_pretreat_v5.json 0.3 MB / ap_pcr_gi-b1_v6.json 2.4 MB) | 기존 원본 (As Is 3288:237453 · 237459 · 237465) |
| Case 1 | 파일 선택 전 · 후 | 기존 원본 그대로 | 기존 원본 ([TI-STN-08 / Import 정의] ① · ② 3288:240943) |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Import file | 화면 0 · 케이스 Case 1-1 · 1-2 | LID-STN-379 |
| Drag and drop files here, or | 화면 1 · 케이스 Case 1-1 · 1-2 | LID-STN-381 |
| Select files | 화면 1 · 케이스 Case 1-1 · 1-2 | LID-STN-383 |
| json · Multiple files | 화면 1 · 케이스 Case 1-1 · 1-2 | |
| {n} MB | 화면 2 · 케이스 Case 1-2 (n = 0.8 · 0.3 · 2.4) | |
| Cancel | 화면 3 · 케이스 Case 1-1 · 1-2 | LID-STN-021 |
| Import | 화면 3 · 케이스 Case 1-1 · 1-2 | LID-TMG-035 |
