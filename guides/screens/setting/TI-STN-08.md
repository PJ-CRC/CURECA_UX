---
cid: TI-STN-08
pair_cid: LI-STN-08
tl_relation: 기능 추가
title: Assay Pack Setting
path: Setting > Assay Pack Setting
type: Page
version: 0.3.0
date: 2026-10-22
author: 이상헌
service_mode: []
user_type: [Service]
policies: []
rules_version:
provisional: []
flags: []
source: asis
figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=7669-175417
figma_region: 2.1 2차
---
# TI-STN-08 Assay Pack Setting

> 기존 화면(작업방 Setting 페이지, 2.1 2차 영역, Ver 0.3.0)을 2026-11-02에 옮긴 것입니다. 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. 다시 그릴 때는 `rules/screen-spec.md`를 따릅니다.

- T/L 차이: T-IOS는 Import·Delete·Active 변경. L-IOS(LI-STN-08)는 조회만
- 관련 정책: POL-TST-008
- 다른 프레임: TI-STN-08-01 Import file 팝업(7669:177368, IA에 없음), TI-STN-08 정책·팝업 정의·Import 정의 프레임

## 기존 화면

### 화면 글자

- 검색: File name (Enter file name) | File type (All) | Period (Registered Date, Select Date Range) | Active only | Reset | Search
- Items | 10 items | Delete | Import
- 목록 헤더: Product Name | Version | File type | File name | Registered Date/Time | Created Date/Time | User ID | Active | Details
- 목록 예: Master Info | v3 | Master | ap_master_v3 | 2026-10-22 09:12:45 | 2026-10-21 17:40:12 | service | Active, PBS Standard Tube | v4 | Pretreatment | ap_pretreat_v4 …, STARMag Universal Cartridge Kit | v3 | Extraction | ap_extraction_v3 …

### 디스크립션 (원문)

#### 1. 검색 영역 (COMM-5-s)

- 1-1 입력 검색: 모든 조건 AND 결합. File name : 부분 일치(Like) 검색. File type : All(디폴트) / Master / Pretreatment / Extraction / PCR
- 1-2 기간 검색: 기간 유형 : Registered Date(디폴트) / Created Date 중 1개. 기간 필드 : COMM-5-d Calendar (Period) 적용. 「Select Date Range」 선택 → Period Filters 팝업 → [Apply] 후 「YYYY-MM-DD ~ YYYY-MM-DD」. 최소 7일 ~ 최대 1년, 탭 · 입력 · 오류 · [Apply] 규칙 → COMM-5-d(1~4/5)
- 1-3 Active only: 체크 시 현재 활성(Active) 파일만 표시 (디폴트 해제)
- 1-4 기능 버튼: [Reset] → 검색 조건 초기화 & 전체 목록 노출. [Search] → 검색 결과 노출 (결과 없음 → [TI-STN-08 / 세부정의])

#### 2. Items 개수 · 노출 개수 (COMM-5-m Web view)

- Items : 등록된 파일 전체 건수 (검색 시 검색 결과 건수)
- 노출 개수 Dropdown : 10 items(디폴트) / 30 / 50 / 100 items. 선택 시 해당 개수로 즉시 갱신, 1페이지로 이동

#### 3. [Delete] 버튼, [Import] 버튼

- [Delete]: 디폴트 비활성화, 1개 이상 선택 시 활성화 (선택 건수 표기 없음). 선택 시 → 삭제 확인 Confirm_026 → [Delete] 삭제 & Toast / [Cancel] 닫힘. 활성(Active) 파일 포함 시 Alert_042 (삭제하지 않음)
- [Import]: 선택 시 → [TI-STN-08-01] Import file 팝업 (json 여러 개, 개수 · 용량 제한 없음). [Import] → 파일별 양식 확인. json 외 Alert_041. 양식 불일치 Alert_040 (전체 등록 안 됨). 같은 File type · Product Name · 버전이 있으면 Confirm_028 (덮어쓰기 여부). 이상 없으면 → 등록 & 최신 버전 자동 활성 → Alert_039 (Import complete)

#### 4. 목록 (파일 목록 · COMM-5-m)

- 등록 일시 최신순, 10개 초과 시 Pagination
- 컬럼 : Product Name | Version | File type | File name | Registered Date/Time | Created Date/Time | User ID | Active | Details. 일시 : YYYY-MM-DD hh:mm:ss. File name : 확장자 제외
- 체크박스 : 개별 · 헤더 = 현재 페이지 전체 선택, 일부 선택 시 Mix (COMM-5-l)
- 4-1 Active (표시 전용): 토글 없음. 활성 파일은 Active 태그(검정), 비활성은 Inactive 태그(회색). File type · Product Name이 같은 파일 중 1개만 활성 (동시에 2개 활성 불가). 변경은 상세 [TI-STN-08-P] File details에서 [Active] · [Inactive]로 바꾼 뒤 [Save]. Master : 최신 버전 강제 활성, 상세에 변경 버튼 미노출 (변경 불가 안내)
- 4-2 [Details] 버튼: 선택 시 → [TI-STN-08-P] File details 패널이 목록 위에 겹쳐 노출

#### 5. Pagination

- 공통 UX > COMM-5-i 정의 참고 (10개 단위)

## 반영 대기 목록

| ID | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |
| --- | --- | --- | --- | --- | --- |
| R01 | 화면 정보 | Ver 0.3.0 (화면 Ver 체계 X.Y.ZZ가 아님) | 2.1.ZZ 체계로 | `rules/repository-and-id.md` 6절 | 대기 |
| R02 | 화면 정보 | Import file 팝업 TI-STN-08-01이 IA에 없음 | IA에 추가할지 확인 | `ia/ia-screens.csv` | 대기 (확인 필요) |

## 변경 이력

| 버전 | 날짜 | 바뀐 내용 | 바꾼 사람 | 근거 |
| --- | --- | --- | --- | --- |
| 0.3.0 | 2026-10-22 | (버전 메모 없음) | 이상헌 | Figma 화면 정보 |
