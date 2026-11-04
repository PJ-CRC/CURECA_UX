---
id: POL-TST-008
title: Assay Pack 관리
summary: Assay Pack 파일(Master, Pretreatment, Extraction, PCR)은 Service가 T-IOS에서 JSON으로 등록하며, 같은 종류·제품은 한 버전만 Active이고 Active 파일은 지울 수 없음
domain: TST
menus: [Setting]
cids: [TI-STN-08, TI-STN-08-P, LI-STN-08, LI-STN-08-P]
status: 확정
version:
date: 2026-11-02
sources: [TI-STN-08·TI-STN-08-P 디스크립션 (Ver 0.3.0·0.4.0, 2026-10-22), LI-STN-08 디스크립션]
provisional: []
alerts: [Alert_039, Alert_040, Alert_041, Alert_042, Confirm_026, Confirm_028, Confirm_029, Confirm_030]
data: [policy/permission-matrix.csv, policy/service-mode-matrix.csv, reference/customer/assay-pack/README.md]
replaced_by:
---
# POL-TST-008 Assay Pack 관리

## 정의

- Assay Pack: 검사 항목, Sample Type, Reagent 구성품, Barcode 규칙 등 검사에 필요한 정보를 담은 파일 묶음
- File type: Master, Pretreatment, Extraction, PCR

## 규칙

1. Assay Pack Setting은 User Type이 Service일 때만 쓰며, L-IOS는 Main Mode에서 조회만 함 (POL-ACC-001, `policy/service-mode-matrix.csv`).
2. 등록([Import])은 T-IOS에서 JSON 파일로 하며 여러 파일을 한 번에 올릴 수 있음. JSON이 아니면 Alert_041, 양식이 맞지 않으면 Alert_040을 보여 주고 아무것도 등록하지 않음.
3. 같은 File type, Product Name, 버전의 파일이 이미 있으면 Confirm_028로 덮어쓸지 물음.
4. 등록하면 그 제품의 최신 버전이 자동으로 Active가 되고 Alert_039를 보여 줌.
5. File type과 Product Name이 같은 파일 중 하나만 Active임. 다른 버전을 Active로 바꾸면 기존 버전은 Inactive가 됨.
6. Master는 항상 최신 버전이 Active이며 바꿀 수 없음. Pretreatment, Extraction, PCR은 File details에서 Active·Inactive를 바꾸고 [Save]로 저장함 (Confirm_029, Confirm_030).
7. Active 파일은 지울 수 없음 (Alert_042). Inactive 파일은 Confirm_026을 거쳐 지우며, Instrument에 적용된 데이터에는 영향이 없음.

## 예외

없음

## 근거

- TI-STN-08, TI-STN-08-P 디스크립션 (2026-10-22). TI-STN-08 정책 프레임은 아직 옮기지 않음
- 권한: `policy/permission-matrix.csv` (Assay Pack Setting Service만), `policy/service-mode-matrix.csv` (Main Mode만)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 | |
