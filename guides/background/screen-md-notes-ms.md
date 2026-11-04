# 화면 MD화 메모: Material Setup

> 상태: 작업 메모 (2026-11-03). Material Setup 기존 화면을 MD로 옮기면서(`rules/screen-spec.md` 3절) 찾은 내용입니다. 정책 파일은 아직 만들지 않았습니다.

- (a) 디스크립션에서 찾은 정책 후보를 주제별로, (b) 질문과 이상한 점을 번호로 적었습니다. 괄호 안은 근거 CID와 디스크립션 번호입니다.
- 정책 후보는 디스크립션 원문을 요약한 것입니다. 정책으로 확정한 내용이 아닙니다.
- 화면별로 고칠 점은 `screens/material-setup/` 각 화면 MD의 "반영 대기 목록" 절에 있습니다. 출처 페이지와 프레임 정리는 `screens/material-setup/_menu.md`.
- 알럿 ID는 `policy/alert-catalog-ms.csv` 기준입니다.

## (a) 정책 후보

### 데이터와 연결(매핑)

- 적재 구조: Sample → Socket → Tray slot → Trolley floor. Consumable/Reagent → (Rack·Socket·Frame·DWP) → Tray slot → Trolley floor. PK/IC tube·PCR box·MM Tube → Socket (SAM-01~03, LCR-01·02, PKI, LPR, LMM)
- 한 단계는 "항목 스캔 → 위치 스캔" 쌍으로 1개를 셈. 위치 스캔 전에 다른 항목을 스캔하면 마지막 항목으로 바꿈, 항목보다 위치를 먼저 스캔하면 Toast 안내 (SAM-02-02 1, SAM-03-02 1, LCR-01-03 1, LCR-02-02 1, DXI-01·02·04·06 1·2)
- [Done]에서 상위·하위 데이터를 한꺼번에 저장 ("Socket & 하위 Samples", "Tray & 하위 Socket", "Trolley & 하위 Tray") (SAM-01-03 3, SAM-02-02 3, SAM-03-02 3, LCR-01-03 3, LCR-02-02 3, PKI-03 3, LPR-03 3, LMM-02 2)
- Socket type별 hole 수: G10 48, G20 24, G30 12, G40·G41 6, G50 4 (SAM-01-03 2, v2.1.06 G41→G40, G42→G41). PK/IC는 G10 Socket (PKI-02), PCR box는 Socket당 2개(A·B) (CMP-01 LPR, LPR-03 세부 정의)
- Tray slot 10개, Trolley floor 6개(1F~6F) (SAM-02-02 2, LCR-02-02 2)
- Prep Consumable Trolley 투입 품목별 스캔 대상: Tip·DWP·Stool Swab은 자체 Barcode, Standard Tube·PK·IC Tube는 Socket, Tub은 Frame (LCR-01-03 세부 정의)
- Storage 제목: Module 1대면 "Module > Storage", N대면 "Module (index) > Storage" (DXI-01~07 4·6, 공통 정의 8313:138747)

### Confirm A·B·C (MS_Confirm_001~017)

- A "다른 용도로 쓰기" (기존 Confirm_026): 다른 종류가 적재된 Carrier를 스캔하면 "Use this … for …?" → OK면 기존 연결을 끊고 적재 가이드로 (MS_Confirm_002·003·006·009·012·013·015·017; SAM-01-02, SAM-02-01·03, SAM-03-01·03, LCR-01-02·04, LCR-02-01·03, PKI-02·04, LPR-02·04, LMM-01·03)
- B "이 자리 바꾸기" (기존 Confirm_027): 이미 다른 항목이 연결된 위치를 스캔하면 "Replace …?" (MS_Confirm_005·008·011; SAM-02-02, SAM-03-02, LCR-01-03, LCR-02-02)
- C "새 자리로 옮기기" (기존 Confirm_028): 이미 다른 상위에 연결된 항목을 스캔하면 "Reassign …?" (MS_Confirm_001·004·007·010·014·016; SAM-01-01·03·04, SAM-02-02, SAM-03-02, LCR-01-03, PKI-03, LPR-03)
- 모든 동의는 기록만 하고 [Done] 때 반영 (`policy/alert-catalog-ms.csv` 버튼 동작). 디스크립션 대부분은 OK 뒤 동작을 적지 않음

### 하이라이트 적재 (Socket 안)

- Sample·PK/IC tube·PCR box를 스캔하면 넣을 hole을 하이라이트하고 카운트 (SAM-01-03 1, PKI-03 1, LPR-03 1)
- 막는 경우: 이미 적재됨(MS_Alert_014), Socket과 안 맞음(MS_Alert_013), 검사군 다름(MS_Alert_012), Socket 가득(MS_Alert_011), Lot 미구성(MS_Alert_024), Expiration Date 다른 PCR box(MS_Alert_025), 만료(MS_Alert_003), 폐기(MS_Alert_004) (SAM-01-03, PKI-03, LPR-03)
- LPR: 제품별 적재 이미지(RP·GI·HPV·STI), HPV28은 홀수·짝수 번째 이미지 전환 (LPR-03 세부 정의)
- MM Tube는 스캔 없이 14개 수동 적재, 어떤 스캔이든 MS_Alert_001 (LMM-02 1)

### Remove

- [Remove]는 적재 1개 이상일 때 활성 → LI-TSS-CMP-01에서 위치 선택 → MS_Confirm_023 → 제거 "예정"으로 기록, [Done] 때 반영 (CMP-01 3, SAM-01-03 2-1, LCR-01-03 2-1 등)
- 선택 영역: 적재 안 된 곳은 Disabled, Select All (CMP-01 1·2). {target}: Group Lots reagents / Trolley floors / 그 밖 slots (CMP-01 세부 정의)
- Remove 없는 화면: LMM-02, DXI-03, DXI-05 ("위치 스캔이 없어 삭제"), DXI-07(취소선) (DXI-03 2, DXI-05 3, CMP-01 DXI 세부 정의)

### Done, 저장, 이탈

- [Done] 저장 실패 시 MS_Alert_032, 현재 화면·변경 예정 상태 유지 (SAM-02-02 3, 대부분 화면 3)
- Load Materials: Storage를 물리적으로 닫으면 [Done]과 같은 동작 (DXI-01~06 3·4, DXI-07 5, v2.1.06)
- Load Materials [Done] 뒤 LI-TSS-DXI로 가서 Toast "DX storage loading is complete." (DXI-01~07)
- 메뉴 이탈 시 MS_Confirm_024 "Leave without saving?" (MS 목록 "공통 메뉴 이탈") — 디스크립션에는 없음
- 완료 화면: [Add New]는 같은 흐름 처음(또는 Step 2, "적재 개수 유지"), [Finish]는 상위 메뉴. 완료 화면에서 새 상위 Carrier를 스캔하면 바로 적재 가이드로 (SAM-01-04, SAM-02-03, SAM-03-03, LCR-01-04, LCR-02-03, PKI-04, LPR-04, LMM-03)

### Group Lots

- Universal Cartridge Kit: EB tub + MB tube + PK tube를 하나의 Lot으로 묶음. 세 개 모두 스캔해야 [Done] (LTG-01-01 3)
- PCR Reagent Kit: PCR box + IC tube를 묶음. IC tube가 없는 PCR box는 Lot 없이 Load PCR Reagents에서 바로 적재 (LTG-02-01 1 Case 4, LPR-03 1 Case 5, MS_Alert_006)
- 막는 경우: 이번 작업 중복(MS_Alert_002), 만료(MS_Alert_003), 폐기(MS_Alert_004), 이미 Lot 구성(MS_Alert_005) (LTG-01-01, LTG-02-01)
- Load PK/IC Tubes·Load PCR Reagents는 Lot을 구성한 항목만 받음 (MS_Alert_024; PKI-03, LPR-03)

### Load Materials (Storage 유형)

- 위치 스캔형(항목 → slot): STAT Storage(Sample Socket만), High-throughput Extraction WB1·WB2·EB·MB·Spin Tip Storage(DWP·Spin Tip), Buffer Cartridge Storage, Cold Storage(PCR reagent socket·MM tube socket) (DXI-01, 02, 04, 06)
- 바로 넣기형(항목만 스캔): MB Tube Storage, Tip/PCR Plate Storage. Remove 없음 (DXI-03, 05)
- 입력형: Sealer Film Storage — Sealer별 필름 수 입력, Apply, Reset (DXI-07)
- 공통 막는 경우: 이동 중(MS_Alert_026, DXI 1), 다른 Storage 열림(MS_Alert_027), 위치 사용 중(MS_Alert_028), 이미 적재(다른 Module 포함, MS_Alert_029), Storage 가득(MS_Alert_030), Spare Storage(MS_Alert_031, DXI-02 세부 정의)
- Consumable(Tip·PCR Plate)은 Expiration Date 없음 (DXI-05 2)
- Required Quantity Accordion: 장비 스케줄링에 따라 스캔한 Storage(index)에 필요한 수량 (DXI-02 세부 정의 8313:138847)

### Cap refill

- Buffer Cartridge Cap: Flexible Extraction Module마다 Spare Cap 5개. Cartridge를 쓰고 반환했거나 장비가 Cap 없음을 감지하면 [Confirm refill] 활성 → MS_Confirm_021 (DXI-08 1)
- Tub Cap: Prep Consumable Storage Trolley의 재사용 가능 Tub(‘재사용 가능 조건 = Y’) 목록, Trolley floor 내림차순·slot 오름차순, 개별·전체 확인 → MS_Confirm_022 (DXI-09 2·3)
- LCR에서 데이터가 있는 Tub frame을 다시 적재하면 MS_Alert_021 "Refill tub spare caps…" (LCR-01-03 1 Case 3)

### Film reset

- Sealer별 Remaining·Total films. Total = 입력 + Remaining, 입력 최대 100 (DXI-07 2)
- [Reset] → MS_Confirm_020 → remaining·total 0 (DXI-07 4)
- Module index 전환 시 Apply 안 했으면 MS_Confirm_018, [Done] 때 일부만 Apply면 MS_Confirm_019 후 Apply한 것만 저장 (DXI-07 1·5)

### Empty Waste Bin

- 배치도에서 Door(LI-INS-01-P)·Storage(QR)를 열고 [Confirm Empty] Popup에서 Module index별 Waste Bin·Liquid Waste Bottle을 비웠음 확인 → 적재율 리셋 (WBM 1·3, WBM-P 2·4)
- 고객 사양별 Door: 표준형(로체)은 Waste Bin을 가진 분주 장비 Door, 맞춤형(단디메카)은 후면 Door만 (WBM-P 다른 프레임 디스크립션)

### Trolley floor 규칙

- Sample Trolley: 1F에 Tray 적재 불가 (MS_Alert_018), 분모 5 (SAM-03-02 1·2, v2.1.11)
- Consumable Trolley: 1F는 빈 Tray 반환 전용. 적재된 Tray를 1F에 두면 MS_Alert_023, 빈 Tray를 2~6F에 두면 MS_Alert_022, 분모 6 (LCR-02-02 1·2, v2.1.05)
- Remove에서 Trolley 1F는 적재 데이터가 없을 때만 Disabled (CMP-01 LCR-02 프레임 2)
- 다른 Trolley·Tray 작업 중에 다른 것을 스캔하면 MS_Alert_019·016 (SAM-02-02, SAM-03-02, LCR-01-03, LCR-02-02)

### Select Trolley에서 오는 필요 수량

- Sample 구성을 마친 Trolley 중 Run 시작 전인 것만 목록에. Setup Date/Time = SAM-03-02 마지막 [Done] 시각, 내림차순 (PSI-01 1)
- [Select]: Loading Popup 뒤 필요 수량 확인 화면(LCR-01-01, PKI-01, LPR-01). [Skip]: 필요 수량 없이 스캔 단계로(LCR-01-02, PKI-02, LPR-02), 필요 목록·수량 제한 없음 (PSI-01 2·3)
- 필요 수량은 여러 Tray 적재분을 합산, [Done] 때 선택한 Trolley 몫으로 저장, Remove·이동 시 차감. 필요 목록 외 → MS_Alert_001, 다 채움 → MS_Alert_020 (LCR-01-03 1·2)
- Toast Sub text "Scanned [Type] - [UI 표기명] (N/M)", Consumable 단위 ea, Reagent 단위 rxns (LCR-01-03 세부 정의)

## (b) 질문과 이상한 점

1. LI-TSS-PSI-01-01(Loading)의 기획 프레임이 두 페이지 모두 없음. 내용은 PSI-01 (3-1)에만 있고, [OK] 버튼과 "완료 시 자동 이동"이 함께 있음 (PSI-01 3)
2. LCR 흐름에서 Select Trolley를 언제 여는지 없음: PSI 1-2와 LCR 1-1은 LCR-01-01로 바로 가는데 LCR-01-01·01-03은 "PSI-01 > trolley 선택 시 노출"이고 LCR용 PSI-01 프레임(8011:129297)이 있음 (PSI, PSI-LCR, LCR-01-01)
3. Consumable Trolley 1F 규칙이 화면끼리 맞지 않음: 1F는 빈 Tray 전용(LCR-02-02)인데 카운터 분모 6은 1F 포함, DXI-09 예시는 1F에 LB Tub·Tub Frame이 있음, CMP-01 1F Disabled 규칙은 LCR 흐름에만 (LCR-02-02, DXI-09, CMP-01)
4. WBM-P: 기존 Confirm_021(Confirm Empty, LI-IVT-05-T 공용)을 씀. MS_Confirm_021은 Buffer Cartridge cap refill이라 번호가 겹침. MS 목록에 Confirm Empty가 없음 (WBM-P 2·4, DXI-08)
5. WBM은 기존 Alert_034, RGE-01은 기존 Alert_027을 씀. 각각 MS_Alert_026, MS_Alert_001과 문구가 같지만 MS 목록 사용 화면에 WBM·RGE가 없음 (WBM 1, RGE-01 1)
6. 이름이 LI-TSS-WBM-P인 프레임 2개(5050:422892, 5127:123497)의 내용은 Door Control Popup (로체·단디메카 Door 목록). LI-INS-01-P와의 관계 확인 (WBM-P)
7. CMP-01 세부 정의 9개가 모두 "Confirm_006 노출"이고 예시 버튼이 Close/OK와 Close/Remove 두 벌. Remove 완료 알럿 MS_Alert_033은 디스크립션에 없음. IA 이름 "Select positions to delete" vs 화면 "remove" (CMP-01)
8. MS_Alert_001이 "공통 (LTG·SAM·LCR·PKI·LPR·LMM·DXI)"인데 디스크립션에 있는 곳은 LCR-01-03, LMM-02, DXI-01, DXI-06뿐. 하이라이트 화면(SAM-01-03, PKI-03, LPR-03)과 Carrier 스캔 화면 대부분에 "스캔할 수 없는 코드" 케이스가 없음
9. MS_Confirm_024(메뉴 이탈)를 쓰는 화면이 디스크립션에 하나도 없음. [Done] 전 Remove·Confirm 동의가 "변경 예정"으로 남은 채 이탈할 때 처리 확인 (공통)
10. MS 목록은 MS_Alert_003·004·020 사용 화면에 LCR-01-03-01(Guide Popup)을 두는데 그 디스크립션에는 알럿이 없음. Guide Popup이 떠 있는 동안 스캔을 받는지 (LCR-01-03-01, LCR-01-03 4)
11. DXI-03·DXI-05는 디스크립션에서 [Remove]를 지웠는데 화면에 Remove 버튼이 남음. Remove가 없으면 잘못 넣은 MB Tube·Tip을 지울 방법이 없음 (DXI-03 2, DXI-05 3)
12. LMM: Remove 없음, MM Tube를 스캔 없이 14개로 간주하는지, 품목 표 MM Tube "28 ea/rack"과 "14 ea (1 socket)" 차이 (LMM-02, DXI-02 세부 정의, `glossary/consumables.csv`)
13. 화면 정보 Ver가 대부분 2.0(2026-06-15)인데 버전 메모는 v2.1.05~v2.1.14. 어느 Ver로 기록할지 (공통)
14. 예시 값이 품목 표와 다름: "(5/box)", "(48/tube)", "17 sets", "96T", "200T (2 sets)", "48 rxns/72 rxns". ASL Standard Tube는 품목 표에 없음. PCR Reagent 약칭(RP1·GI-B1)과 IC 이름(IC(GI-BP) Tube vs GI-BP IC) (LCR-01-01·02·03, PKI-01, LPR-01, DXI-02 세부 정의, RGE-02)
15. LPR 예시가 화면끼리 다름: LPR-01 RP1·RP2·GI-V(17·17·14 sets) vs LPR-02~04 RP1·RP3·GI-V(02·02·03). LPR-02~04 Step 표시 "STEP 2"가 두 번 (LPR-01~04)
16. PK/IC Tube를 LCR(Prep Consumable Trolley에 Socket으로)과 Load PK/IC Tubes 양쪽에서 적재함. 두 경로의 관계와 POL-INV-007 (LCR-01-03 세부 정의, v2.1.05 "PK/IC 정책 변경", PKI-03)
17. PKI-03: PK와 IC가 한 G10 Socket(48칸)에 섞이는데 칸 배정 규칙 없음. 디폴트 0/M과 [Skip] 세부 정의 0/48 차이 (PKI-03 2)
18. Storage·Module 이름에 코드명 사용: "SamplePreparation (N)", "HtExtraction (2)", "FlexibleExtraction (2)", "PcrSetup (2)", "Plate sealing (2)". IA Storage 이름도 소문자("STAT storage", "Cold storage") (DXI-01~07)
19. 화면 정보·경로가 IA와 다름: "TSS > …"(Service Mode 이름을 경로로), LCR-02-02·02-03 "Prepare Carrier(2/3)·(3/3)", SAM-01-04 등 "scan" 빠짐, LCR-01-03 "socket"→consumables/reagents, LCR-01-04 socket→tray, PKI-04 CID 칸에 취소선 PKI-03이 남음 (`_menu.md`)
20. 완료 화면 안내 "Click [Finish] to go to the Carrier manual screen / Lot manual screen"인데 [Finish]는 상위 메뉴로 감. 완료 화면에서 새 Carrier 스캔 시 동작이 디스크립션에 없는 곳(LTG-01-02, LTG-02-02) (LTG, SAM, LCR, PKI, LPR, LMM 완료 화면)
21. 스캔 단계 화면의 [Next]: "스캔 시 → (2-1)과 동일하게 변경 & 다음 화면으로 이동", 2-1 "Scan"은 내용 없음. 스캔하면 자동 이동하는데 [Next]를 누를 수 있는지 (SAM-01-01·02, SAM-02-01, SAM-03-01, LCR-01-02, LCR-02-01, PKI-02, LPR-02, LMM-01)
22. 여러 화면에 카운터 두 개가 겹쳐 있음("02/12"와 "00/10" 등), PKI·LPR 화면에 LCR Reagent 줄(LB Tub (Prep) 등)이 남음, LTG-02-01·02에 Universal Cartridge Kit Step 이름이 겹침 (SAM-01-03, SAM-02-02, SAM-03-02, LCR-02-02, DXI-01~06, PKI-02~04, LPR-02~04, LTG-02-01·02)
23. Trolley floor를 "선반·shelf·floor"로 섞어 씀 (화면 "Number of filled shelf in the trolley") (SAM-03-02, LCR-02-02)
24. Required Quantity 버튼 이름: 화면 "Required Quantity" vs 세부 정의 "Inventory 버튼". Sealer Film(입력형)에도 Accordion이 있음 (DXI-02 세부 정의, DXI-07 7)
25. DXI-08: [Confirm refill] "디폴트 활성"과 "활성화 조건"이 함께 있음. "FEM 장비 내부에서 Cap 흡착 시 Cap 없음"을 L-IOS가 어떻게 아는지. DXI-08·09 닫기 버튼 없음 (DXI-08, DXI-09)
26. DXI-09 "재사용 가능 조건 = Y" 정의 위치 없음. RGE-02 "Cap needed"와의 관계 (DXI-09 3, RGE-02)
27. RGE-01·02(View Trolley Info): IA 미등록, Service Mode 미정, RGE-02 상태값 두 벌(Reuse Status vs Slot Status, "Used" 정의 없음), "Selecetable" 오타, "Tray section" 표기, PK/IC Tube handling guide 동작 없음. LI-TSS-RGE-02-01(`screen-fixes`) 프레임 없음 (RGE-01, RGE-02)
28. DXI-07: IA Type은 Popup인데 기획 화면은 페이지 형태. 6 "스캔한 모듈명"과 1 드롭다운이 겹침. Storage를 닫으면 [Done]과 같다는 규칙이 Sealer door에도 적용되는지 (DXI-07)
29. 버전 메모·세부 정의에 기존 ID가 남음: Alert_033(SAM-01-01·03·04), Alert_035(LCR-02-02), Alert_036(LTG-02-01), Alert_032(DXI-01·04·06), Confirm_006(CMP-01). 변경 이력에만 남길지 (해당 화면)
30. DXI 배치도에서 Prep Consumable Storage, Sample Storage, Universal PCR, Sealer Film Storage QR 스캔 시 동작 없음. LI-TSS-DXI 제목 "Drawer Loading" (DXI 1·6)
