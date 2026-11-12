---
menu: Material Setup
cids: [LI-TSS-LTG, LI-TSS-LTG-01-01, LI-TSS-CMP-01, LI-TSS-LTG-01-02, LI-TSS-LTG-02-01, LI-TSS-LTG-02-02, LI-TSS-PSI, LI-TSS-PSI-01, LI-TSS-PSI-SAM, LI-TSS-PSI-SAM-01-01, LI-TSS-PSI-SAM-01-02, LI-TSS-PSI-SAM-01-03, LI-TSS-PSI-SAM-01-04, LI-TSS-PSI-SAM-02-01, LI-TSS-PSI-SAM-02-02, LI-TSS-PSI-SAM-02-03, LI-TSS-PSI-SAM-03-01, LI-TSS-PSI-SAM-03-02, LI-TSS-PSI-SAM-03-03, LI-TSS-PSI-LCR, LI-TSS-PSI-LCR-01-01, LI-TSS-PSI-LCR-01-02, LI-TSS-PSI-LCR-01-03, LI-TSS-PSI-LCR-01-03-01, LI-TSS-PSI-LCR-01-04, LI-TSS-PSI-LCR-02-01, LI-TSS-PSI-LCR-02-02, LI-TSS-PSI-LCR-02-03, LI-TSS-PSI-LPR-01, LI-TSS-PSI-LPR-02, LI-TSS-PSI-LPR-03, LI-TSS-PSI-LPR-04, LI-TSS-PSI-LMM-01, LI-TSS-PSI-LMM-02, LI-TSS-PSI-LMM-03, LI-TSS-PSI-PKI-01, LI-TSS-PSI-PKI-02, LI-TSS-PSI-PKI-03, LI-TSS-PSI-PKI-04, LI-TSS-DXI, LI-TSS-DXI-01, LI-TSS-DXI-02, LI-TSS-DXI-03, LI-TSS-DXI-04, LI-TSS-DXI-05, LI-TSS-DXI-06, LI-TSS-DXI-07, LI-TSS-DXI-08, LI-TSS-DXI-09, LI-TSS-WBM, LI-TSS-WBM-P, LI-TSS-RGE-01, LI-TSS-RGE-02]
owner: 서보경
ux_status:
ui_status:
delivery_status:
delivered_version:
delivered_date:
---
# Material Setup

- 2026-11-03: 기획 화면 53개를 옮김 (IA CID 51개 + IA 미등록 RGE 2개). 상태 칸은 아직 기록하지 않음
- L-IOS 전용 메뉴. Service Mode: Group Lots·Prepare Carrier는 TSS Mode, Load Materials·Empty Waste Bin은 Console Mode (`policy/service-mode-matrix.csv`). LI-TSS-CMP-01은 양쪽에서 씀. View Trolley Info(RGE)는 매트릭스에 없음
- 작성자: 모든 프레임 BREX. 화면 정보 Ver는 대부분 2.0 (2026-06-15)인데 버전 메모는 v2.1.05~v2.1.14. CMP-01은 2.1.03 (2026-08-21), WBM·RGE는 2.1

## 공통 규칙 (화면을 그릴 때 기본으로 넣음)

- 메뉴 이탈: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 공통이라 각 화면 디스크립션에서 빠져 있으나, 모든 화면에 기본으로 넣음 (2026-11-03 사용자 답변 MS5). 각 화면 반영 대기 목록에도 적음
- 알럿·컨펌 ID는 Material Setup 전용 체계(MS_Alert_###, MS_Confirm_###, `policy/alert-catalog-ms.csv`)를 씀

## 출처 페이지

- **주 출처:** 작업방 `SH2-MS-얼럿 수정 테스트` 페이지 (8011:128574). 사용자 설명(2026-11-03): 이 페이지의 디스크립션이 최신(정책과 알럿 체계를 여기서 다시 잡음)이고, 화면 디자인은 2차 페이지와 같음. `figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)`
  - 알럿 ID는 `policy/alert-catalog-ms.csv`의 MS_Alert_###·MS_Confirm_###. 세부 정의 프레임 일부와 버전 메모에는 기존 ID(Confirm_006, Alert_033·035·036 등)가 남아 있음
  - 같은 페이지 오른쪽에 MS Alert(8481:21553)·MS Confirm(8483:14002) 섹션이 있음 (옮기지 않음, `policy/alert-catalog-ms.csv`가 기준)
- **보조 출처:** `Material Setup Ⓛ_2.1(2차)` 페이지 (673:102345). 주 출처에 없는 LI-TSS-WBM, LI-TSS-WBM-P, LI-TSS-RGE-01, LI-TSS-RGE-02만 옮김. 페이지 전체가 민트색 바 하나(1206:60909, y -32900 ~ 93788) 안에 있어 `figma_region: 2.1 2차`
  - WBM·WBM-P는 "표준형_로체시스템즈"(위 줄)와 "맞춤형_단디메카(재단용)"(아래 줄) 두 줄로 있음. 위 줄을 주 프레임으로 함. 취소선이 그어진 옛 프레임은 없음

## 프레임 정리

- GNB·LNB: 프레임의 LNB는 예전 메뉴 이름(LIOS, Equipment, RUN, Sample)이고 Material Setup 아래가 Group Lots | Prepare Carrier | Load Materials (WBM·RGE 프레임은 Empty Waste Bin·View Trolley Info 추가). 공통 정의 프레임 8313:138747의 LNB만 지금 메뉴(Dashboard(All), Test Management, Sample Tracking, Instrument, Inventory 등). 화면 MD의 사용 컴포넌트에서 GNB·LNB 공통 컴포넌트(Icon/Sample, Arrow/Chevron_Down·Up, profile, Layout/Align_Right_05_Solid)는 뺌
- 여러 흐름에 같은 CID 프레임이 있음. 파일은 CID마다 하나, 흐름별 차이는 각 파일 "다른 프레임"에 적음
  - LI-TSS-CMP-01: 9개 (LTG, SAM-01·02·03, LCR-01·02, PKI, LPR, DXI) + 세부 정의 9개. 주 프레임 8011:133612 (LCR-02)
  - LI-TSS-PSI-01: 3개 (LCR 8011:129297, PKI 8073:397754, LPR 8073:398051). 주 프레임 PKI. 흐름별로 [Skip]·[Select] 이동 대상이 다름
  - LI-TSS-PSI: 3개 (PKI 8073:397634, LPR 8073:397931, LMM 8073:397511), 내용 같음. 주 프레임 PKI
- 세부 정의·공통 정의 프레임 (해당 CID 파일 "세부 정의 (원문)"에 옮김): CMP-01 ×9, LCR-01-03 (8011:133851), LCR-01-03-01 (8011:129970), PKI-03 (8073:398599), LPR-03 (8073:399811), DXI-01~07 공통 정의 (8313:138747 → DXI-01), DXI-02 (8313:138711), Inventory 버튼 세부 정의 (8313:138847, CID LI-TSS-DXI-02~7 → DXI-02), DXI-05 (8313:139047), DXI-08 (8313:140133), DXI-09 (8313:140479)
- 옮기지 않은 프레임
  - 같은 CID의 디자인 프레임(1920×1080), 1280 프레임 (예: RGE-01 7897:610794, RGE-02 8217:518587, `LI-TSS-PSI-01-1280_Loading` 5341:445958, `LI-TSS-PSI-1280-01_Loading` 5341:481697·5341:482019)
  - 2차 페이지의 LI-TSS-DXI-02 세부 정의 5312:330054 (주 출처의 8313:138711을 씀)
  - 2차 페이지 Material Setup 다른 CID 프레임 (주 출처를 씀)

## 빠진 CID와 IA 차이

- **LI-TSS-PSI-01-01 (IA "Loading", Popup):** 두 페이지에서 기획 프레임을 찾지 못함 (이름·"Loading" 글자 검색). 2차 페이지에는 1280 프레임만 있음. 내용은 LI-TSS-PSI-01 디스크립션 (3-1) "Please wait / This may take a few minutes. / OK"에 있음. 파일을 만들지 않음
- **LI-TSS-RGE-01, LI-TSS-RGE-02 (View Trolley Info):** IA v1.15에 없음 (`flags: [IA 미등록]`). `old-screen-fixes/LI-TSS-RGE-02-01.md`의 LI-TSS-RGE-02-01은 기획 프레임을 찾지 못해 그대로 둠
- **IA에 없는 이동 대상:** LI-TSS-PSI 1-5 "[LI-TSS-PSI-LMM]" (IA 첫 화면은 LI-TSS-PSI-LMM-01)
- **화면 이름이 IA와 다른 곳:** CMP-01 (remove/delete), SAM-01-04·02-03·03-03 ("scan" 빠짐), LCR-01-01 (consumables/reagents), LCR-01-03 (socket → consumables/reagents), LCR-01-04 (socket → tray), LCR-02-02·02-03 ("Prepare Carrier(2/3)", "(3/3)"), PSI-SAM ("Load samples")
- **IA Type:** LI-TSS-DXI-07은 IA Popup이지만 기획 화면은 LNB가 있는 페이지 형태
- LI-TSS-WBM-P 이름의 프레임 2개(5050:422892, 5127:123497)는 Door Control Popup 내용 (LI-TSS-WBM-P 반영 대기 목록 2)
- 이 메뉴의 정책 후보와 질문은 `archive/background/screen-md-notes-ms.md`

## 상태 이력

| 날짜 | 축 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
