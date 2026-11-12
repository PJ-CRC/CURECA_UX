---
cid: LI-TSS-DXI-07
pair_cid:
tl_relation: 단독
title: Sealer Film storage
path: Material Setup > Load Materials > Sealer Film storage
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
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=8313-139907
figma_region: SH2-MS 얼럿 수정 테스트 (2026-11-03 기준)
---
# LI-TSS-DXI-07 Sealer Film Storage

> 기존 화면(작업방 SH2-MS-얼럿 수정 테스트 페이지, Ver 2.0)을 2026-11-03에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `old-rules/screen-spec.md`를 따릅니다.

- L-IOS 전용. Service Mode: Console Mode. Plate Sealing의 Sealer 1·2에 넣은 Sealing Film 수를 입력 (스캔 없음). LI-TSS-DXI의 [Load Sealing Film]으로 들어옴
- 관련 정책: POL-MAT-002, POL-LOD-004
- 호출하는 화면: LI-TSS-DXI (Done), MS_Confirm_018, MS_Confirm_019, MS_Confirm_020, MS_Alert_032
- 다른 프레임: 없음. Required Quantity 버튼 세부 정의는 LI-TSS-DXI-02 (Sealing Film 100 ea)

## 기존 화면

### 화면 글자

- (GNB·LNB는 L-IOS 공통, `_menu.md` 참고)
- Check the required quantities for each module. | Required Quantity (Accordion)
- Plate sealing (N) > Sealer Film Storage | (드롭다운) Plate sealing (1) / (2) / (3)
- Unload the film tray. / Remove the film packaging while the yellow sticker is facing downwards then fill the film into the film tray. / Make sure the film is properly loaded and insert the film tray. / Enter the number of sealing films loaded in the field below. / Close the sealer door and check the lock. / Click [Done] to go to the Load Materials manual.
- STEP 1. | STEP 2. | STEP 3. | STEP 4.
- Number of films loaded | Apply
- Sealer 1 | Sealer 2 — Input quantity
- Remaining: 20 / Total films: 120 | Reset | Remaining: N / Total films: N | Reset
- (Toast) Applied film count for Plate seling(1) / Select [Done] to complete saving.
- Done
- (주석) ① 인덱스 개수 = N인 경우, 해당 모듈 인덱스명 출력 | ① 인덱스 개수 = 1인 경우, 해당 모듈 인덱스명 출력 (1-1 드롭다운, 1-2 "Plate sealing")

### 사용 컴포넌트

Description Number (8), Button/Secondary_1Button_44 (5), Button/Tertiary_1Button_28 (3), layout/spacing (2), Text Field_Login/Default (2), Dropdown/Item_Dropdown List (2), Frame (1), Tool Tip/Default (1), Divider (1), Dropdown/Item_Icon (1), Accordion/Default (1), Toast (1)

### 디스크립션 (원문)

#### 1. Plate sealing 인덱스 영역

- 노출 정의:
  - 인덱스 개수 > 1인 경우, 드롭다운 UI 노출
  - 인덱스 개수 = 1인 경우, 해당 모듈 인덱스명 출력_(1-2) 참고
- 디폴트:
  - 접힘
  - 정렬 중 낮은 번호 인덱스 선택
- 선택 시:
  - (1-1) Plate sealing 모듈 인덱스 목록 노출
- (1-1) 모듈 인덱스 목록
  - 노출: 모듈 인덱스 모두 노출
  - 정렬: 모듈 인덱스 오름차순
  - 인덱스 선택 시:
    - Case 1) 해당 모듈 Apply 버튼 선택 완료 시
      - ㄴ 필름 개수 입력값 반영 & 선택 인덱스 가이드 화면 전환
    - Case 2) 해당 모듈 Apply 버튼 선택 미완료
      - ㄴ MS_Confirm_018 팝업 노출

#### 2. 필름 개수

- Input field
  - 플레이스 홀더 : Input quantity
  - 최대 입력 개수 : 100 (Only 숫자 입력)
  - 디폴트 : null
- Remaining : 현재 Sealer 내부 필름 개수 출력
- Total films : Input field 입력 값 + Remaining 합산 개수 출력

#### 3. [Apply] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : Sealer 1 or 2 입력값 있을 경우, 활성화
- 선택 시 → 아래 항목 정의에 따름
  - 입력한 값, ② Remaining 반영
  - Input field 초기화 & [Apply] 버튼 비활성화
  - (3-1) 토스트 팝업 노출
    - ㄴ Main text: Applied film count for + 해당 모듈 인덱스명

#### 4. [Reset] 버튼

- 선택 시 → MS_Confirm_020 팝업 노출

#### 5. [Done] 버튼

- 디폴트 : 비활성화
- 활성화 조건 : 모듈 인덱스 중, ‘Apply’된 항목이 있을 경우, 활성화
- 선택 시 → 공통 적용 항목 & 케이스 구분에 따른 반영
  - 공통 적용 항목
    - ㄴ [LI-TSS-DXI] 화면으로 이동 & Toast 팝업 노출
    - ㄴ Toast 팝업 text : DX storage loading is complete.
  - 저장 실패 시
    - ㄴ MS_Alert_032 팝업 노출
  - Case 1) 모든 모듈 인덱스가 Apply된 경우
    - ㄴ 실러 필름 개수 저장
  - Case 2) 모든 모듈 인덱스가 Apply되지 않은 경우
    - ㄴ MS_Confirm_019 팝업 노출 & Apply한 모듈 인덱스 필름 개수만 저장
- ※ 사용자가 물리적으로 Storage unlit을 닫을 경우, [Done] 버튼 선택과 동일한 기능을 가짐

#### 6. 모듈명

- 경로 : [LI-TSS-DXI] 화면에서 스캔한 모듈명 스캔 시, 노출
- 노출 :
  - 모듈 1대인 경우 → [모듈명 > 스토리지명] 노출
  - 모듈 N대인 경우 → [모듈명 (인덱스 번호) > 스토리지명] 노출
    - ㄴ ex) 두 번째 모듈 스캔 시, Plate sealing (2) > Sealer Film Storage

#### 7. [Required Quantity] 버튼

- 디폴트: Accordion 닫힘
- 선택 시 → Accordion 펼침
- 관련 정의 및 노출 항목 → Required Quantity 버튼 기능 정의 참고

### 케이스

- 없음

### 버전 메모

- v2.1.12 update / DX 필요수량 추가 / Module index 표기
- v2.1.06 update / Sealer Film Storage 가이드 화면 수정 / - 모듈 인덱스 노출 & Reset rlsmd & Apply 기능 추가

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | IA | IA Type "Popup", 기획 화면은 LNB가 있는 페이지 형태이고 LI-TSS-DXI 7은 "화면으로 이동" | Type 확인 (Page로 고칠지) | `ia/ia-screens.csv`, LI-TSS-DXI 7 | 대기 (확인 필요) |
| R02 | 디스크립션 | 6 모듈명 "[LI-TSS-DXI] 화면에서 스캔한 모듈명"인데 이 화면은 스캔이 아니라 [Load Sealing Film] 버튼으로 들어오고 1 드롭다운으로 모듈을 고름 | 6을 1과 합침 | LI-TSS-DXI 7, 디스크립션 1 | 대기 |
| R03 | 디스크립션 | 2 최대 입력 100, Total films = 입력 + Remaining (예시 Remaining 20, Total 120) | Total 상한(Sealer 용량) 확인. Sealing Film 기본값 100 ea | `glossary/consumables.csv` Sealing Film "입력항목 (기본값:100 ea)" | 대기 (확인 필요) |
| R04 | 디스크립션 | 5 Case 2 "모든 모듈 인덱스가 Apply되지 않은 경우" | 일부 모듈 인덱스만 Apply된 경우 (MS_Confirm_019 조건) | MS_Confirm_019 | 대기 |
| R05 | 디스크립션 | 5 "물리적으로 Storage unlit을 닫을 경우" — Sealer Film은 Sealer door를 닫음 | Sealer door. "unlit"은 unit 오타 | 오타, 화면 글자 "Close the sealer door" | 대기 |
| R06 | 화면 | Toast "Applied film count for Plate seling(1)" | Plate Sealing (1) | 오타, `glossary/modules.csv` | 대기 |
| R07 | 표기 | "Plate sealing (N)", 버전 메모 "Reset rlsmd" | Plate Sealing (2), "Reset 기능" | `glossary/modules.csv`, 오타(한/영 전환) | 대기 |
| R08 | 화면 | Required Quantity Accordion이 있음 (Sealing Film은 입력형) | Sealer별 필요 수량을 보여 줄지 확인 | LI-TSS-DXI-02 세부 정의 | 대기 (확인 필요) |
| R09 | 표기 | "실러 필름", "토스트 팝업", "플레이스 홀더", "모듈" | Sealing Film, Toast, Placeholder, Module | `glossary/terms.csv`, `glossary/consumables.csv` | 대기 |
| R10 | 공통 | 메뉴 이탈 컨펌이 디스크립션에 없음 (공통이라 빠짐) | 디스크립션에 넣음: [Done] 전에 메뉴를 벗어나면 MS_Confirm_024 "Leave without saving?"를 보여 줌. Leave를 고르면 변경 예정 사항을 모두 버리고 나감. 화면을 그릴 때 기본으로 넣음 | `policy/alert-catalog-ms.csv` MS_Confirm_024, 2026-11-03 사용자 답변 (MS5) | 대기 |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 (CR, PD, PV, 정책 ID) |
| --- | --- | --- | --- | --- |
| 2.1.06 | | Sealer Film Storage 가이드 화면 수정: 모듈 인덱스 노출, Reset·Apply 기능 추가 | BREX | Figma 버전 메모 |
| 2.1.12 | | DX 필요 수량 추가, Module index 표기 | BREX | Figma 버전 메모 |
