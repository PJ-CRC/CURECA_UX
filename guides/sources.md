# 기준 출처 목록

Claude가 근거로 읽는 자료의 목록입니다. 이 목록 밖의 자료는 근거로 쓰지 않습니다(헌법 7조).

> 상태: 초안 v0.3 (2026-11-02). Figma 작업방을 정리하면 갱신합니다.

| 자료 | 기준 출처 | 비고 |
| --- | --- | --- |
| Common UX | [UX-AI-TEST > DY common UX](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=355-53300) (COMM-0 ~ COMM-5) | 최종본 V2.2.00 (2026-10-30). 고칠 곳은 `common-ux/feedback.md` |
| 화면 | [1-2. CURECA 기획 디자인 작업방 Part.2](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/1-2.-CURECA_%EA%B8%B0%ED%9A%8D-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%9E%91%EC%97%85%EB%B0%A9-Part.2-?node-id=1-11) 메뉴별 페이지 12개: Login, Dashboard, Event History, Run/Quick Start, Test Management, Sample Tracking, Instrument, Inventory, Statistical Analysis, Profile / Information, Setting, Material Setup(2차) | Material Setup(1차) 페이지는 근거로 쓰지 않음. 같은 CID가 2.1 1차·2차 영역에 함께 있으면 2차(민트색) 영역 화면이 최신 (`rules/figma-sync.md` 1절) |
| 정책서 | 같은 작업방의 정책서_2026.08.28 페이지 | 정책서 현행화 전까지 기준. 화면 디스크립션에 흩어진 정책도 함께 정제 예정 |
| Service Mode | [COMM-3-a(2/2) Base Frame Area](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=877-2623) | `policy/service-mode.md`로 옮김 |
| IA | `ia/CURECA_Part2_IA_v1.15.xlsx` (v1.15, 2026-10-29) | Claude가 읽는 표는 `ia/ia-screens.csv`. IA-T-IOS, IA-L-IOS 시트만 옮김 (참고) Part1 시트 제외) |
| 언어셋 | `language-set/` (원본 받을 예정) | 6개 언어 문구 |
| 고객사 제공 자료 | `reference/customer/` | 씨젠 "CURECA 시스템 구성 요소 및 상태 정보" (260921 엑셀, 261021 캡처). 소모품·시약, 검사 항목 문서는 검토 중. Assay Pack 명세 R06 캡처(`reference/customer/assay-pack/`, DRM 원본 대신 사용자 캡처) |
| Consumable·Reagent 데이터 표기 | Common UX COMM-4-b(1/5)~(5/5) | 최종본에 포함됨. 작업방 APP,Web_Common UX 페이지의 COMM-4-b 프레임(Ver 2.1.13)과 내용이 같아 Common UX를 기준으로 씀 |
| 상태값과 상태 전환 | Common UX [COMM-4-a(1/4)~(4/4)](https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=355-53300) | 씨젠 문서 "CURECA 시스템 구성 요소 및 상태 정보"를 바탕으로 함. 원본은 `reference/customer/system-status/` |
| 상태값 3단계 | `reference/status-values-2026-10-30.png` (사용자 제공) | `glossary/status-values.csv`로 옮김 |
| 검사 항목명 UI 표기 | `reference/test-item-ui-names-2026-10-30.png` (사용자 제공) | `glossary/test-items.csv`로 옮김 |
| Alert·Confirm 문구 | [2-1. CURECA 기획팀 공유용 Part.2 > Alert / Confirm](https://www.figma.com/design/YJGJKb3YUu0iwGdMq0myjS/2-1.-CURECA_%EA%B8%B0%ED%9A%8D%ED%8C%80-%EA%B3%B5%EC%9C%A0%EC%9A%A9-Part.2-?node-id=317-95954) | 알럿 관리 페이지. 최신 섹션(Revision V2.1.14, 2026-10-30) 기준. `policy/alert-catalog.csv`로 옮김 |

위 목록 밖의 페이지는 근거로 쓰지 않습니다. 예: 작업방의 test-A, APP,Web_Common UX(다른 프로젝트 내용 혼입), Mobile_Common UX, DY Room, SH Room, 팝업 모음, (미사용) Alert / Confirm 등과 UX-AI-TEST의 BK, SH 등 테스트 페이지.

## 기준과 출처

- 이 저장소가 정리한 기준 자료(용어집, 상태값 표, 정책, 기준 자료 파일)가 항상 최신 기준입니다.
- 위 목록의 외부 원본은 기준 자료의 출처입니다. 기준 자료의 근거 칸에는 인용한 원본 위치(문서, 버전, 시트·프레임)를 적습니다.
- 외부 원본의 새 버전이 오면 바로 덮어쓰지 않고, 이 저장소 기준에서 바뀐 점을 확인한 뒤 합의한 것만 반영합니다. 애매하면 근거 칸의 인용을 따라가 확인합니다(`rules/claude-work.md` 10절).
