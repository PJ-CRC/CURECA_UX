---
cid: LI-TSS-DXI-08
pair_cid:
tl_relation: 단독
title: Buffer Cartridge Cap Refill
path: Material Setup > Load Materials > Buffer Cartridge Cap Refill
type: Popup
version: 2.0
date: 2026-06-15
author: BREX
service_mode: [Console Mode]
user_type: [Service, Admin, User]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8313-140182
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-DXI-08 Buffer Cartridge Cap Refill

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: Console Mode. LI-TSS-DXI의 [Refill Cartridge Cap]으로 여는 Popup. Flexible Extraction Module마다 Spare Cap 5개 보충을 확인
- 관련 정책: POL-LOD-004
- 호출하는 화면: MS_Confirm_021
- 다른 프레임: 세부 정의 [8313:140133](https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8313-140133) (Module N대 / 1대 Case)

## 기존 화면

### 화면 글자

- Buffer Cartridge Cap Refill
- Spare Caps (이미지)
- Flexible Extraction (1) | Confirm refill
- Flexible Extraction (2) | Confirm refill
- Flexible Extraction (3) | Confirm refill
- Open the module storage and refill the five Spare Caps. / After refilling, click [Confirm Refill].

### 사용 컴포넌트

Square (3), Popup/Data Popup (2), layout/spacing (2), Description Number (2), Tool Tip/Default (1)

### 디스크립션 (원문)

#### 1. 목록

- 노출: 설치된 Flexible Extraction 모듈 대수 모두 노출
- 출력:
  - 1대 or N대일 경우, Common UX > Module명 표기 방식에 따름
- (1-1) [Confirm refill] 버튼
  - 디폴트 : 활성화
  - 활성화 조건 : 아래 정의 중 한 개 이상 만족 시, 활성화
    - Cartridge 사용 후 Storage로 반환한 경우
    - FEM 장비 내부에서 Cap 흡착 시, Cap이 없을 경우
  - 선택 시 → MS_Confirm_021 노출
    - OK 선택 시 → 해당 모듈(or 모듈 인덱스) Cap refill 완료 & 해당 버튼 비활성화

### 세부 정의 (원문)

8313:140133 "LI-TSS-DXI-08 / 세부정의"

- Flexible Extraction N대인 경우 노출 Case: Buffer Cartridge Cap Refill / Spare Caps / Flexible Extraction (1)·(2)·(3) 각 Confirm refill / Open the module storage and refill the five Spare Caps. After refilling, click [Confirm Refill].
- Flexible Extraction 1대인 경우 노출 Case: Flexible Extraction | Confirm refill / 같은 안내 문구

### 케이스

- Module N대 / 1대: 세부 정의 8313:140133

### 버전 메모

- v2.1.12 update / Buffer Cartridge Cap 보충(컨펌 버튼 추가) / Alert / Confirm 업데이트
- v2.1.14 update / 대소문자 변경 (spare caps → Spare Caps)

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 디스크립션 | 1-1 "디폴트 : 활성화"와 "활성화 조건 : 아래 정의 중 한 개 이상 만족 시" | 디폴트 비활성, 조건 충족 시 활성으로 정리 | 디스크립션 | 대기 (확인 필요) |
| R02 | 디스크립션 | 활성화 조건 "FEM 장비 내부에서 Cap 흡착 시, Cap이 없을 경우" | FEM = Flexible Extraction Module인지. 장비가 Cap 없음을 L-IOS에 알려 주는지 확인 | 디스크립션 1-1 | 대기 (확인 필요) |
| R03 | 화면 | 닫기 버튼 없음 | Popup 닫기 정의 | 화면 글자 | 대기 (확인 필요) |
| R04 | 문구 | 버튼 "Confirm refill", 안내 문구 "[Confirm Refill]" | 대소문자 통일 | 화면 글자 | 대기 |
| R05 | 화면 데이터 | "five Spare Caps" | Buffer Cartridge Cap 5 ea (1 set) — 품목 표에 없음 | LI-TSS-DXI-02 세부 정의, `glossary/consumables.csv` | 대기 (확인 필요) |
| R06 | 표기 | "모듈", "모듈 인덱스" | Module, Module index | `glossary/terms.csv` | 대기 |
| R07 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.12 | | Buffer Cartridge Cap 보충 (Confirm 버튼 추가), Alert / Confirm 업데이트 | BREX | Figma 버전 메모 |
| 2.1.14 | | 대소문자 변경 (spare caps → Spare Caps) | BREX | Figma 버전 메모 |
