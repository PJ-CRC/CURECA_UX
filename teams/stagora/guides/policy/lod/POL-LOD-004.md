---
id: POL-LOD-004
title: Cold Storage PCR Socket, Sealer Film, Cap 보충
summary: Cold Storage의 PCR Socket은 Tube만 STARlet으로 옮겨 쓰고 Cap이 꽂힌 Socket은 Storage로 돌아오며, Sealer Film은 Module Index별로 개수를 입력해 Apply하고, 재사용하는 Buffer Cartridge Tub와 Prep Tub는 Cap을 보충한 뒤 [Confirm refill]로 기록함
domain: LOD
menus: [Material Setup]
cids: [LI-TSS-DXI-06, LI-TSS-DXI-07, LI-TSS-DXI-08, LI-TSS-DXI-09]
status: 확정
version:
date: 2026-11-06
sources: [정책서_2026.08.28 > 트롤리 도킹 & Drawer Loading > Cold Storage_PCR Rack 정책, LI-TSS-DXI-07·08·09 디스크립션, policy/alert-catalog-ms.csv, 2026-11-03 사용자 답변 (MS1-a), 팀원 POL-DCK-03, Teams 글 2026-11-06 T01·T03·T06·T09·T11]
provisional: []
alerts: [MS_Confirm_018, MS_Confirm_019, MS_Confirm_020, MS_Confirm_021, MS_Confirm_022, MS_Alert_032]
data: []
replaced_by:
---
# POL-LOD-004 Cold Storage PCR Socket, Sealer Film, Cap 보충

## 정의

- Remaining: 지금 Sealer 안에 있는 Film 수
- Total films: 입력한 수 + Remaining
- Sealer 한 대에는 Film을 120장까지 넣음. Sealer Waste Bin은 버린 Film 20장이면 만재임 (2026-11-06 사용자 확인)
- Cold Storage PCR Socket 상태 (Cold Storage를 열었을 때 눈으로 판단, Teams 글 T03)

| Socket 모습 | 뜻 | 사용자가 할 수 있는 것 |
| --- | --- | --- |
| Tube가 꽂혀 있음 | 아직 쓰는 중이 아님 (새 Reagent이거나 남은 양이 있는 Reagent) | [Remove]로 뺄 수 있음 |
| Tube Cap만 꽂혀 있음 | Tube가 지금 STARlet(PCR Setup)에 들어가 쓰이는 중 | 빼면 안 됨 |
| 아무것도 없음 | 다 쓴 Socket. 정보는 리셋됨 | 빼고 다시 씀 (Socket은 재활용) |

## 규칙

### Cold Storage PCR Socket (Teams 글 T03, 2026-11-06 사용자 설명)

1. PCR Setup의 STARlet 안에 PCR Reagent Tube를 꽂아 쓰는 자체 Rack이 있으며, Socket 2 ~ 4개 분량을 꽂아 씀.
2. PCR Setup이 PCR Socket을 가져가 Tube Cap을 열고, Tube는 STARlet Rack에 꽂고, Cap은 다시 Socket에 꽂아 Socket을 Cold Storage로 돌려보냄.
3. 다 써서 폐기할 때는 그 Socket을 다시 가져가 Tube에 Cap을 닫은 뒤 Tube만 폐기하고, 빈 Socket을 Cold Storage로 돌려보냄. 남았으면 Tube에 Cap을 닫아 Socket에 꽂아 돌려보냄.
4. 다 쓴 Socket(아무것도 없음)은 정보가 리셋됨.
5. 그래서 사용자는 Cold Storage를 열었을 때 Socket 모습(정의 표)으로 다 썼는지 확인함.
6. Cold Storage는 Socket을 Rack 칸에 얹고 서랍을 닫는 구조라, 쓰는 중인 Socket을 사용자가 빼는 것을 물리적으로도 화면에서도 막지 않음. 사용자가 빼면 Instrument가 그 Socket을 가지러 갔을 때 없는 것을 알고 Event Message를 띄움. 화면이 오류를 알 수 있는 때는 이때뿐임.
7. 같은 Lot이라도 다른 Tube의 Reagent를 섞어 쓰지 않음 (POL-INV-007 규칙 5).

### Sealer Film (DXI-07)

8. Plate Sealing Module Index별로 Sealer 1·2의 Film 수를 입력해 [Apply]함. 입력은 숫자만, 최대 100임. Apply하면 입력값이 Remaining에 반영되고 Toast "Applied film count for {Module Index}"를 보여 줌.
9. Apply하지 않고 다른 Module Index를 고르면 MS_Confirm_018을 보여 줌. Discard를 고르면 입력값을 저장하지 않고 고른 Index로 바꿈.
10. [Reset]을 누르면 MS_Confirm_020을 보여 주고, Reset을 고르면 그 Sealer의 Remaining과 Total films를 0으로 함.
11. [Done]은 Apply한 Index가 하나라도 있으면 활성화됨. Apply하지 않은 Index가 남아 있으면 MS_Confirm_019를 보여 주고, Proceed를 고르면 Apply한 Index만 저장함. Storage를 물리적으로 닫아도 [Done]과 같음.
12. Sealer는 Film이 거꾸로 들어갔거나(역방향) 밀린(shift) 것을 감지한 경우에도 Film 사용 수를 셈 (Teams 글 T09).

### Buffer Cartridge (DXI-08) (Teams 글 T06 · T11)

13. Buffer Cartridge Tub(BB · WB1 · WB2 · WB3 · EB)는 재사용함. Tub 5개가 한 세트로 입고되며, 여분의 Cap도 5개 단위로 함께 입고하고 5개 단위로 표기함 (예: Buffer Cartridge Cap 5 ea (1 set)).
14. 처음 쓴 뒤 Reagent가 남으면, 전체 Run 스케줄에서 더 쓸 계획이 없을 때 Instrument가 여분의 Cap으로 닫아 Storage로 돌려놓고 (장비 상태가 Ready가 되는 때가 아님, MT-20261006-01), Cap 보충 Event Message를 띄움. 사용자가 여분의 Cap을 다시 넣어야 다음에 쓸 수 있음.
15. Tub를 다 쓰면 Instrument가 Cap을 닫아 Tub를 자동 폐기하고, Tray(Socket)만 입고된 위치로 돌려놓음. Expiration Date가 지났거나 최대 사용 횟수를 넘은 Tub도 같음. Tray(Socket)는 다시 씀.
16. Tub는 남아도 다 써도 Cap을 닫아야 하므로, Storage에서 Module로 옮길 때 반드시 Cap이 있어야 함. Cap 없이 쓰거나 폐기하려 하면 Instrument가 멈추고 Cap 보충을 요청하는 Event Message를 띄움.
17. Cap이 있는지 Instrument가 감지하지 못하므로, 사용자가 Cap을 보충하고 [Confirm refill]을 누르면 MS_Confirm_021을 보여 주고, OK를 고르면 그 Module의 Cap 보충을 완료로 기록하고 버튼을 비활성으로 함. 이때부터 Instrument는 그 Tub를 다시 쓸 수 있는 것으로 봄.
18. [Confirm refill]은 Cartridge를 쓰고 Storage로 돌려놓았거나, Module 안에서 Cap을 집을 때 Cap이 없으면 활성화됨.
19. Buffer Cartridge Storage에 적재할 때 (Tub와 위치 스캔):
   - Tray만 있으면 빼고 새 Reagent를 적재함.
   - Tray에 Tub는 있는데 여분의 Cap이 없으면 Cap을 보충함.
   - 빈 위치를 스캔했는데 그 자리가 Buffer 공간에서 쓰이는 중인 Reagent의 자리면 적재하지 않고 알럿을 보여 줌. 쓰지 않는 자리면 적재함.
20. Inventory의 STARMag Universal Cartridge Kit에 Buffer Cartridge Cap 항목을 둠 (Teams 글 T06).

### Prep Tub (DXI-09) (Teams 글 T01)

21. Prep Consumable Trolley로 입고하는 Tub도 Buffer Cartridge처럼 한 번 쓴 뒤 여분의 Cap을 넣어야 다시 씀. 재사용하려고 Trolley로 돌아오면 Cap 보충 Event Message를 띄움.
22. Prep 시스템은 Tub를 쓰기 전에 여분의 Cap이 있는지 확인하므로, 쓰는 중에 Error가 나지 않음. 단, 지금 써야 하는데 Cap이 없어 쓸 수 없으면 Error가 남.
23. 그래서 Prep Tub의 Cap은 Inventory 관리 항목으로 두지 않음.
24. Prep Consumable Storage Trolley에 있는 재사용 가능 Tub를 목록으로 보여 줌. Tub는 어느 floor에 있든(1F 반환용 Tray에 돌아온 Tub 포함) 모두 나옴. 정렬은 Trolley floor 내림차순, slot 오름차순임.
25. 항목별 [Confirm refill]이나 [Confirm all refills]를 누르면 MS_Confirm_022를 보여 주고, OK를 고르면 그 항목의 Cap 보충을 완료로 기록하고 버튼을 비활성으로 함. 이때부터 Instrument는 그 Tub를 다시 쓸 수 있는 것으로 봄.
26. Load Consumables and Reagents에서 데이터가 있는 Tub Frame을 다시 적재하면 Cap 보충 안내(MS_Alert_021)를 보여 줌 (POL-MAT-007 규칙 8).

## 이유

- PCR Socket 돌려보냄 (규칙 2): Instrument 안에는 Socket을 쌓아 둘 곳이 없어 Tube만 STARlet에 두고 Socket은 Cold Storage로 돌려보냄.
- 폐기 때 다시 가져감 (규칙 3): 안전을 위해 Tube에 Cap을 닫은 뒤 폐기함. Socket은 재활용하므로 빈 Socket만 돌려보냄.
- 화면이 막지 않음 (규칙 6): Cold Storage는 로봇이 막는 구조가 아니라 Socket을 칸에 얹고 서랍을 닫는 구조라, 사용자가 쓰는 중인 Socket을 빼도 막을 수 없음. 그래서 Instrument가 가지러 가서 없을 때만 알 수 있음.
- Buffer Cartridge (규칙 13 ~ 19): 예전에는 쓰고 남아도 검사가 끝나면 폐기했으나 재사용하도록 바뀜. Tub는 Cap을 닫아야 옮기고 버릴 수 있는데, Cap은 센서로 확인할 수 없어 사람이 보충하고 확인 버튼으로 알려 줌.
- Prep Tub (규칙 21 ~ 23): Buffer Cartridge와 달리 Prep 시스템이 쓰기 전에 Cap을 확인하므로 쓰는 중에 멈추지 않음. 그래서 Inventory에서 Cap을 따로 세지 않음.

## 예외

- Tub의 "재사용 가능 조건 = Y"가 어디서 정해지는지, View Trolley Info의 "Cap needed"와의 관계는 고객 논의 (CA-0009)

## 질문

1. ~~다 쓴 Socket의 위치값이 자동 리셋되는지~~ → 리셋됨 (규칙 4, 2026-11-06 답)
2. ~~Cap만 꽂힌 Socket을 빼면 화면이 막는지~~ → 막지 못함. Instrument가 가지러 가서 없을 때 Event Message (규칙 6, 2026-11-06 답)
3. ~~STARlet Rack에 올리는 수~~ → Socket 2 ~ 4개 분량 (규칙 1, 2026-11-06 답)
4. ~~Spare Cap 5개의 뜻~~ → Tub 5개가 한 세트, Cap도 5개 단위 (규칙 13, 2026-11-06 답)
5. (규칙 19) Buffer 공간에서 쓰이는 중인 자리를 스캔했을 때 띄울 알럿 ID
6. (규칙 20) Buffer Cartridge Cap을 `glossary/consumables.csv`에 품목으로 더할지 (수량 단위 5 ea (1 set), Barcode 유무)
7. (규칙 14 · 21, 규칙 6) Cap 보충 Event, Socket이 없을 때 Event의 Event Code · Level
8. (규칙 8) Film을 120장까지 넣는데 입력 최대값이 100임. 입력 최대값을 120으로 바꿀지 (화면 LI-TSS-DXI-07, `glossary/consumables.csv` Sealing Film 기본값 100 ea)

## 근거

- 정책서_2026.08.28 "Cold Storage_PCR Rack 정책" (예전 방식), 팀원 POL-DCK-03
- LI-TSS-DXI-07 1 ~ 5, LI-TSS-DXI-08 1, LI-TSS-DXI-09 1 ~ 3 디스크립션
- 2026-11-03 사용자 답변 (MS1-a): Tub는 모두 Cap 보충 목록에 나옴
- `policy/alert-catalog-ms.csv` MS_Confirm_018 ~ 022
- Teams 글 2026-11-06 (`reference/teams/2026-11-06-policy-notes.md`): T01 Prep Tub, T03 Cold Storage 이동 방식, T06 Buffer Cartridge 재사용, T09 Film 카운팅, T11 Buffer Cartridge Storage
- Buffer Cartridge 재사용은 MT-20260904-01 "1회 사용 후 폐기 확정" 뒤에 다시 바뀐 것이며, Teams 글 T06 · T11이 최종 (2026-11-06 사용자 확인)
- 2026-11-06 사용자 설명: STARlet Rack(Socket 2 ~ 4개 분량), Socket 돌려보내는 이유, 폐기 때 Cap을 닫는 이유, 다 쓴 Socket 리셋, Cold Storage는 Socket을 막지 못함, Cap 5개 단위

## 변경 이력

| 버전 | 날짜 | 내용 | 근거 (PD, PV, CR, ADR) |
| --- | --- | --- | --- |
| | 2026-11-03 | 최초 작성 (이전 ID: 팀원 POL-DCK-03) | |
| | 2026-11-06 | Cold Storage를 Tube만 옮기는 방식과 Socket 상태로 바꿈, Buffer Cartridge 재사용 · Cap 흐름, Prep Tub Cap 흐름, Film 카운팅 더함. 규칙 번호 다시 매김 | Teams 글 T01 · T03 · T06 · T09 · T11 |
| | 2026-11-06 | Cold Storage Socket 흐름을 사용자 설명으로 바로잡음(Rack 2 ~ 4개, 리셋, 막지 못함), Cap 5개 단위. 규칙 번호 다시 매김 | 사용자 설명 |
| | 2026-11-06 | Sealer Film 120장 · Waste Bin 20장, Buffer Cartridge 재사용이 최종임을 근거에 남김 | 사용자 확인 |
| | 2026-11-06 | Buffer Cartridge는 전체 Run 스케줄에서 더 쓸 계획이 없을 때 돌려놓음 (규칙 14) | MT-20261006-01, 사용자 확인 |
