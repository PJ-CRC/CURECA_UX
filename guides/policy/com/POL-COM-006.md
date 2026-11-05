---
id: POL-COM-006
title: 파일 내보내기 형식
summary: Export·Download로 받는 파일은 Run Report와 Log Export를 빼고 모두 .csv 형식이고, Test Order Import는 .csv와 엑셀을 모두 받으며, T-IOS는 OS 파일 탐색기에서, L-IOS는 경로 저장 또는 USB 저장을 골라 저장함
domain: COM
menus: [Event History, Test Management, Sample Tracking, Inventory, Statistical Analysis, Information]
cids: [TI-EVT-P, LI-EVT-P, TI-TMG-01, LI-TMG-01, TI-SPT-01, LI-SPT-01, TI-SPT-02, LI-SPT-02, TI-SPT-03, LI-SPT-03, TI-IVT-06-T, LI-IVT-06-T, TI-STA-01-01, TI-STA-01-02, TI-STA-02-01, TI-STA-02-02, TI-STA-03-01, TI-STA-03-02, TI-STA-04-01, TI-STA-04-02, TI-STA-05-01, TI-STA-05-02, TI-STA-06-01, TI-STA-06-02, TI-STA-07-01, TI-STA-07-02, TI-STA-08-01, TI-STA-08-02, TI-INF-03-01]
status: 확정
version:
date: 2026-11-03
sources: [2026-11-03 사용자 결정 (IV10), 화면 디스크립션의 [Export]·[Download], Common UX COMM-5-m(2/4) Import / Export Popup]
provisional: []
alerts: []
data: []
replaced_by:
---
# POL-COM-006 파일 내보내기 형식

## 정의

- 내보내기: 화면의 [Export]나 [Download]로 데이터를 파일로 받는 것

## 규칙

1. 내보내는 파일은 모두 .csv 형식임. 화면마다 적힌 엑셀파일, ".CVS", CSV는 모두 .csv로 씀.
2. 아래 두 가지는 이 규칙에서 뺌.
   - Run Report(Information > Report)의 [Download]: 리포트 문서 파일로 받음
   - System Setting의 Log [Export]: Service User Type이 장비 상태를 파악하는 자료라 형식과 구성을 정하지 않고 개발에서 묶어 내보냄 (POL-SYS-004 규칙 2)
3. T-IOS는 [Export]를 누르면 OS 파일 탐색기에서 저장 경로와 파일 이름을 정함.
4. L-IOS는 [Export]를 누르면 경로 저장 또는 USB 저장을 고르는 Popup을 보여 줌 (Common UX COMM-5-m(2/4) Import / Export Popup). 기본 경로는 System Setting의 Export / Import Location임 (POL-SYS-004 규칙 3).

| 메뉴 | 화면 | 내보내는 것 |
| --- | --- | --- |
| Event History | TI-EVT-P, LI-EVT-P | 목록 전체와 Detail 내용 |
| Test Management | TI-TMG-01, LI-TMG-01 | Test Order 목록 |
| Sample Tracking | TI·LI-SPT-01, 02, 03 | Samples, 96-DWP, PCR Plate 목록 |
| Inventory | TI-IVT-06-T, LI-IVT-06-T | Usage History 목록 (POL-INV-006) |
| Statistical Analysis | TI-STA-01-01 ~ 08-02 | 화면의 Legend 설정값, 필터 조건, 집계 결과 (POL-STA-003) |

5. Test Order의 [Import]는 .csv와 엑셀 파일을 모두 받음.

## 예외

- Import 파일 형식은 고객과 다시 정함 (CA-0008). 그때까지 규칙 5를 따름

## 근거

- 2026-11-03 사용자 결정 (IV10): Run Report를 빼고 모든 파일은 .csv로 받도록 바꿈
- 2026-11-03 사용자 확인: Log Export는 Service가 장비 파악에 쓰는 자료라 형식을 정하지 않음. Import는 엑셀로 논의했었으므로 .csv와 엑셀 둘 다, 고객과 다시 정함 (IV10-a)
- TI-EVT-P 6, TI-TMG-01 4, TI-SPT-01 3, LI-SPT-01 3, TI-IVT-06-T 3, TI-STA-01-01 5, TI-INF-03-01 2-3 디스크립션

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 | 사용자 결정 |
| | 2026-11-03 | Log Export 제외, Import .csv·엑셀 (IV10-a) | 사용자 확인, CA-0008 |
| | 2026-11-04 | Common UX 참조 번호를 Common UX - PC 기준으로 고침 (COMM-5-j(4/4) → COMM-5-m(2/4)) | `common-ux/common-policy-candidates.md` |
