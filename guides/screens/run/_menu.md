---
menu: Run
cids: [LI-RUN-P, LI-RUN-01, LI-RUN-02, LI-RUN-02-01, LI-RUN-03, LI-RUN-04]
owner: 정다예
ux_status:
ui_status:
delivery_status:
delivered_version:
delivered_date:
---
# Run

- 2026-11-02: 작업방 Run/Quick Start 페이지의 2.1 2차 영역에서 기획 화면 6개를 옮김. 상태 칸은 아직 기록하지 않음
- L-IOS 전용 메뉴. LI-RUN은 IA의 메뉴 노드(Type "-")라 화면 파일을 두지 않음 (POL-EQP-003의 `cids`에는 LI-RUN이 있음)
- Run Preparation 단계 순서: Check samples(LI-RUN-01) → Check test protocol(LI-RUN-02-01, Policy Setting의 Allow Protocol Changes Before Test가 ON일 때만) → Check consumables(LI-RUN-02) → Check reagents(LI-RUN-03) → Check waste bin/bottle(LI-RUN-04, v2.1.11 추가) → [Run Start]
- Item details Popup은 IA에서 Inventory의 LI-IVT-03-T-P(Consumables), LI-IVT-04-T-P(Reagents)로 같은 화면을 씀. 그 화면 MD는 `screens/inventory/`에 둠. 같은 페이지 2차 영역에 LI-IVT-03-T-P(6902:44339), LI-IVT-04-T-P(6902:44082) 프레임이 따로 있음
- LI-RUN-03-P(Item details, 2.1 1차 영역 5513:107849, Ver 2.1.04)는 IA에 CID가 없어 옮기지 않음. LI-RUN-02·LI-RUN-03 디스크립션이 아직 이 CID를 가리킴

## 상태 이력

| 날짜 | 축 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
