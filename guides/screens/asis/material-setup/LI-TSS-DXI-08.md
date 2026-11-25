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
client_mode: [Console Mode]
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

> 기존 화면(기존 작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. L-IOS Client Mode: Console Mode. LI-TSS-DXI의 [Refill Cartridge Cap]으로 여는 Popup. Flexible Extraction Module마다 Spare Cap 5개 보충을 확인
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
