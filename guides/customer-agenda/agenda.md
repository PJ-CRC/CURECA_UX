# 고객 논의 대상 목록

| ID | 내용 | 관련 정책·화면 | 지금 화면·자료 | 등록일 | 상태 | 결정 |
| --- | --- | --- | --- | --- | --- | --- |
| CA-0001 | Error Rate 표시 위치. 8월 정책서는 "Instrument Detail 영역 Module 이름 아래", 지금 화면(Ver 2.1.01)은 Detail에서 빼고 Management Popup에만 표시 | POL-EQP-010 / TI-INS-02-T, LI-INS-02-T, TI-INS-02-01-P, LI-INS-02-01-P | Management Popup (Service만) | 2026-11-02 | 논의 전 | |
| CA-0002 | Error 모듈 복구: Error 처리 후 Door를 닫으면 검사 가능 상태를 자동으로 확인하고 정상이면 Module 상태가 Ready로 돌아감. 확인 결과가 정상이 아닐 때 동작(Error 유지 여부 등)이 정의되지 않음 | 정책 미작성 (`policy/policy-backlog.md` 추가할 것 12) | 팀원 정책 POL-INS-06 (팀원 Q22) | 2026-11-02 | 논의 전 | |
| CA-0003 | Account Setting 목록과 삭제·수정 범위 (임시 정책 PV-0002): Admin에게는 Service 계정을 숨기고 Service에게는 모든 계정을 보여 줌, Service 계정은 최소 1개 남김, Admin은 다른 Admin 계정 수정 가능, 자기 계정 삭제 불가(Alert_047) | PV-0002 / TI-STN-05, TI-STN-05-03-P | 목록 범위 "Admin이 생성한 모든 계정", 삭제 제한 없음 | 2026-11-02 | 논의 전 | |
| CA-0004 | 장비 통합 상태에 따라 Logout을 막을지 (지금은 프로그램 종료·시스템 종료만 Running·Error일 때 불가) | POL-ACC-004 / LNB | 모든 상태에서 Logout 가능 | 2026-11-02 | 논의 전 | |
| CA-0005 | HPV, RTI 검사군 안에서도 조합 검사를 할 수 있는지 (8월 정책서는 STI-12, HPV 28 단독). 지금 정책은 같은 검사군 안에서만 조합 가능 | POL-TST-010 / TI-TMG-01, LI-TMG-01 | 판정 전까지 HPV·RTI 조합 규칙은 화면에 쓰지 않음 | 2026-11-02 | 논의 전 | |
| CA-0006 | 계정이 CURECA마다 따로 있는 것이 맞는지 (CURECA 여러 대일 때 같은 사람이 장비마다 계정을 따로 만들어야 함). 지금 정책은 모든 설정·계정이 CURECA별 | POL-COM-005, POL-ACC-001 / TI-STN-05 | CURECA별 계정 | 2026-11-02 | 논의 전 | |
| CA-0007 | Empty Waste Bin(비움 처리)을 Main Mode에서도 제공할지. 사용자 설명은 Main Mode·Console Mode 모두, 지금 Service Mode 표는 Console Mode만 | POL-INV-005 / LI-IVT-05-T, Material Setup > Empty Waste Bin (LI-TSS-WBM) | Console Mode만 제공 | 2026-11-03 | 논의 전 | |
| CA-0008 | Test Order [Import] 파일 형식. 엑셀로 논의했었고, 다른 내보내기 파일은 .csv로 바뀜 (POL-COM-006) | POL-COM-006 / TI-TMG-01, LI-TMG-01 | .csv와 엑셀 모두 받음 | 2026-11-03 | 논의 전 | |
| CA-0009 | View Trolley Info (LI-TSS-RGE-01·02, IA 미등록): 보이는 Service Mode, 상태값 두 벌(Reuse Status: Empty / Selectable / Selected, Slot Status: Empty / Used / Usable)과 "Used" 정의, Tub Cap Refill(LI-TSS-DXI-09)의 "재사용 가능 조건 = Y" 정의와 RGE-02 "Cap needed"의 관계 | MAT 정책 (작성 중) / LI-TSS-RGE-01, LI-TSS-RGE-02, LI-TSS-DXI-09 | 화면만 있고 정의 없음 | 2026-11-03 | 논의 전 | |
| CA-0010 | Module이 Error일 때 Door를 열면 장비 모듈 상태가 Error로 남는지, Paused가 되는지. MT-20260922-01은 "Error면 Door를 열어도 Error 유지", 지금 정책은 "Error일 때도 Door 잠금이 풀리면 Paused". 같은 회의의 "사용자가 풀 수 있는 Error(소모품 부족 등)는 Door를 닫으면 자동으로 Ready"와 함께 확인 (CA-0002와 이어짐) | POL-EQP-004 규칙 1, POL-EQP-002 / LI-INS-01-P, TI-INS-01-T, LI-INS-01-T | Door Control 디스크립션: Ready · Error · Paused일 때 Unlock하면 바로 열림 | 2026-11-06 | 논의 전 | |
