---
id: POL-TST-001
title: Policy Setting 공통
summary: 검사 정책은 T-IOS에서만 설정하고 L-IOS는 조회만 하며, 장비 통합 상태가 Not Initialized 또는 Ready일 때만 바꿀 수 있음
domain: TST
menus: [Setting]
cids: [TI-STN-01, LI-STN-01, TI-STN-01-01, TI-STN-01-02, LI-STN-01-02, TI-STN-01-03, TI-STN-01-04, LI-STN-01-04]
status: 확정
version:
date: 2026-11-02
sources: [정책서_2026.08.28 > Test Policy > Policy 공통 정책, TI-STN-01·LI-STN-01 디스크립션 (Ver 2.0, v2.1.14 메모)]
provisional: []
alerts: [Confirm_010, Alert_046]
data: [policy/permission-matrix.csv]
replaced_by:
---
# POL-TST-001 Policy Setting 공통

## 정의

- Policy Setting: 검사 운영 정책(원가, 추출 장치, PCR Protocol, Cut-off Time 등)을 정하는 Setting 하위 메뉴

## 규칙

1. Policy Setting은 T-IOS에서만 설정·변경함. L-IOS는 같은 항목을 조회만 함.
2. Cost Setting은 T-IOS에만 보임.
3. 장비 통합 상태가 Not Initialized 또는 Ready일 때만 Policy Setting의 기능 버튼이 활성화됨. 그 밖의 상태에서는 화면 위 안내 배너를 보여 주고 기능 버튼을 비활성화함.
4. User Type이 Service일 때만 NC/PC Dispensing Order와 Sample Dispensing Options 영역을 보여 줌. Admin은 그 두 영역을 뺀 모든 항목을 봄 (POL-ACC-001).
5. NC/PC Dispensing Order 기본값은 NC-PC, Sample Dispensing Options 기본값은 96-DWP임.
6. 바꾼 값은 [Save]를 눌러 Confirm_010을 거쳐 저장함.
7. PCR Protocol Setting은 Anyplex II STI, HPV 제품에 쓸 PCR Protocol을 Cyclic-CMTA(High-Purity Magnetic Bead Extraction)와 End Point-CMTA(Target-Specific Magnetic Bead Extraction) 중에서 고르며, 기본값은 Cyclic-CMTA임.
8. General Setting의 Allow Protocol Changes Before Test(기본 On)는 Run 준비 단계에 Check Test Protocol 단계를 둘지 정함. On이면 검사 전에 Protocol을 바꿀 수 있는 단계를 보여 주고, Off이면 Protocol Setting에서 Apply한 Protocol을 그대로 쓰고 그 단계(Run Preparation Step 4)를 건너뜀.

## 예외

없음

## 근거

- 정책서_2026.08.28 Test Policy 공통 정책 ("T-IOS에서 설정, 변경할 수 있으며, L-IOS에는 View 기능만 제공", 계정별 노출, Cost setting T-IOS만)
- TI-STN-01 디스크립션 1 (배너와 버튼 비활성 조건), 7·8 (기본값)
- PCR Protocol 선택지와 Allow Protocol Changes Before Test: TI-STN-01 화면 문구, 2026-11-02 사용자 확인 (항상 같은 Protocol만 쓰는 검사실은 단계를 볼 필요가 없어 고를 수 있게 함)

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-02 | 최초 작성 (이전 ID: 팀원 POL-TST-04) | |
| | 2026-11-02 | PCR Protocol Setting, Allow Protocol Changes Before Test 규칙 추가 (규칙 7·8) | |
