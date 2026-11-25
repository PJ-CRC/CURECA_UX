---
cid: TI-STN-08-01
pair_cid:
tl_relation: 단독
title: Assay Pack Setting
path: Setting > Assay Pack Setting > Import file
type: Popup
version: 0.1.0
date: 2026.10.22
author: 이상헌
client_mode: []
user_type: [Service]
policies: [POL-TST-008, POL-ACC-001]
basis:
basis_versions:
source: tobe
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3492-19
---
# TI-STN-08-01 Import file

- T/L 차이: T-IOS만 (L-IOS LI-STN-08은 [Import] 없음)
- 호출하는 화면: 없음 (Alert · Confirm만 엶)
- 호출되는 곳: [TI-STN-08] 목록 [Import]
- 반영 대기 항목: `pending/open.md`에서 이 CID로 찾음 (TI-STN-08-R02 IA 추가는 5단계)
- 화면 변경 이력: `screen-history.md`의 이 CID 줄

## 디스크립션

**0  Import file 화면**
- 정의
  - Assay Pack 파일(json)을 골라 등록하는 Popup
- 동작
  - TI-STN-08 목록 [Import] 선택 시 Import file Popup 노출
  - 배경(목록 · 메뉴) Dim, Popup 밖 영역 선택 불가
  - [X] · ESC → Popup 닫힘 → TI-STN-08 목록 (반영 없음)
- User Type : Service
- 공통 UX 참고 : COMM-5-m(1/4)

**1  파일 영역 (Drag & Drop)**
- 끌어놓기 또는 [Select files]로 여러 파일 선택 (개수 · 용량 제한 없음)
- 형식 json만 → 그 외 Alert 노출 : Alert_041
- File type은 파일 안의 fileInfo.fileType으로 판별 (선택 항목 없음)
- 정책 참고 : POL-TST-008

**2  선택한 파일 목록**
- 파일명 · 용량 노출, 선택 순서대로
- [✕] 선택 시 해당 파일 빼기, 0개면 [Import] 비활성
- 다시 선택하면 목록에 추가 (같은 파일명은 교체)

**3  [Cancel] / [Import] 버튼**
- [Import] 활성 : 파일 1개 이상
- [Import] → 파일별 양식 확인 (json 문법 · 필수 항목)
- 양식 불일치 → Alert 노출 : Alert_040, 전체 등록 안 됨
- 같은 File type · Product Name · 버전이 있으면 → Confirm 노출 : Confirm_028
- 이상 없으면 → 등록 & 최신 버전 자동 활성 → Alert 노출 : Alert_039 → TI-STN-08 목록 최상단 추가
- [Cancel] → Popup 닫힘 → TI-STN-08 목록 (반영 없음)
- 공통 UX 참고 : COMM-5-c
- 정책 참고 : POL-TST-008

## 케이스

없음 (기존 원본에 케이스 프레임 없음)

## Alert · Confirm · Toast

| 디스크립션 번호 | 종류 (Alert / Confirm / Toast) | 코드 | 언제 | 버튼 동작 |
| --- | --- | --- | --- | --- |
| 1 | Alert | Alert_041 | json 외 파일 선택 | OK 선택 시 → 해당 Alert 닫힘, 데이터 반영 없음 |
| 3 | Alert | Alert_040 | [Import] 양식 불일치 파일 있음 | OK 선택 시 → 해당 Alert 닫힘, 데이터 반영 없음 |
| 3 | Confirm | Confirm_028 | [Import] 같은 File type · Product Name · 버전 있음 | Overwrite 선택 시 → 기존 파일 교체 & 등록 → Alert_039 / Cancel 선택 시 → Confirm 닫힘, Import 중단 (Import file 유지) |
| 3 | Alert | Alert_039 | [Import] 이상 없이 등록 | OK 선택 시 → Alert 닫힘 & 목록 최상단에 Import한 파일 노출, 최신 버전 자동 활성 |

## 화면 예시 글자

| 디스크립션 번호 | 요소 | 예시 값 | 기준 |
| --- | --- | --- | --- |
| - | 배경 | Dim만 깖 (부르는 화면을 깔지 않음, `flow/3-design.md` 공통 3-9) | 공통 3-9 |
| 2 | 선택한 파일 목록 | 기존 원본 3행 그대로 (ap_master_v4.json 0.8 MB / ap_pretreat_v5.json 0.3 MB / ap_pcr_gi-b1_v6.json 2.4 MB) | 기존 원본 TI-STN-08-01 (As Is 3288:237146) |

## 화면 표기 글자

| 화면 표기 글자 (영어) | 출처 | Language ID |
| --- | --- | --- |
| Import file | 화면 제목 | |
| Drag and drop files here, or | 화면 1 | |
| Select files | 화면 1 | |
| json · Multiple files | 화면 1 | |
| ap_master_v4.json · ap_pretreat_v5.json · ap_pcr_gi-b1_v6.json | 화면 2 | |
| 0.8 MB · 0.3 MB · 2.4 MB | 화면 2 | |
| Cancel | 화면 3 | |
| Import | 화면 3 | |
