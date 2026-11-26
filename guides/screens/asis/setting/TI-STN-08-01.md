---
cid: TI-STN-08-01
pair_cid:
tl_relation: 단독
title: Assay Pack Setting
path: Setting > Assay Pack Setting > Import file
type: Popup
version: 0.1.0
date: 2026-10-22
author: 이상헌
client_mode: []
user_type: [Service]
policies: []
source: asis
figma: https://www.figma.com/design/etCQFF3CTf1EA6C79d4BBf/UX-AI-TEST?node-id=3288-237146
figma_page: Setting  Ⓛ / Ⓣ_As Is (3288:235028)
---
# TI-STN-08-01 Import file

> 기존 화면(작업방 「Setting  Ⓛ / Ⓣ_As Is」 페이지, Ver 0.1.0)을 2026-11-26에 다시 옮긴 것입니다(처음 옮긴 날 2026-11-02, 2026-11-25에는 기존 작업방 파일에서 옮김). 디스크립션은 원문 그대로이며 정책 정리 전 내용입니다. IA에 없는 CID입니다(TI-STN-08-R02, 작업 기록 20261125-최고관리자-assay-pack에서 5단계에 IA에 더함).

- T/L 차이: T-IOS만 (L-IOS LI-STN-08은 [Import] 없음)
- 호출하는 화면: 없음 (Alert · Confirm만 엶)
- 호출되는 곳: [TI-STN-08] 목록 [Import]

## 기존 화면

<!-- 기존 작업방에 있는 그대로 옮깁니다. 고치거나 정리하지 않습니다. 틀린 곳 · 정책과 다른 곳은 반영 대기 목록(`pending/open.md`)에 "점검 발견"으로 남깁니다. -->

### 화면 글자

- 배경: TI-STN-08 목록 (Dim) - 검색 영역 · Items 24 · 10 items · Delete · Import · 목록 머리 · 목록 10줄 · Pagination 1 ~ 10. 목록의 Master 줄 Product Name은 「-」, Active 칸은 10줄 모두 Inactive (TI-STN-08 목록과 다름)
- 팝업: Import file | ✕
- ↑ | Drag and drop files here, or | Select files | json · Multiple files
- ▤ | ap_master_v4.json | 0.8 MB | ✕
- ▤ | ap_pretreat_v5.json | 0.3 MB | ✕
- ▤ | ap_pcr_gi-b1_v6.json | 2.4 MB | ✕
- Cancel | Import

### 사용 컴포넌트

Table (47), Title (30), Check Box/Square (12), Reagent Product Name (11), 2 Depth (7), Square (4), Description Number (3), Active (1), Page number (1), Component 4 (1), Frame (1), Arrow/Chevron_Up (1), Form/Input Text Box (1), Dropdown Outlined (1), Period type (1), Page size (1)

### 디스크립션 (원문)

#### 화면 노출 경로

- [TI-STN-08] 목록 [Import] 선택 시 [TI-STN-08-01] Import file 팝업 노출
- 배경(목록 · 메뉴) Dim, 팝업 밖 영역 선택 불가
- [X] · ESC → 팝업 닫힘 → [TI-STN-08] 목록 (반영 없음)

#### 1. 파일 영역 (Drag & Drop)

- 끌어놓기 또는 [Select files]로 여러 파일 선택 (개수 · 용량 제한 없음)
- 형식 json만 → 그 외 Alert_041 · [TI-STN-08 / 팝업 정의] 2-②
- File type은 파일 안의 fileInfo.fileType으로 판별 (선택 항목 없음)

#### 2. 선택한 파일 목록

- 파일명 · 용량 표시, 선택 순서대로
- [✕] 선택 시 해당 파일 빼기, 0개면 [Import] 비활성
- 다시 선택하면 목록에 추가 (같은 파일명은 교체)

#### 3. [Cancel] / [Import] 버튼

- [Import] 활성 : 파일 1개 이상
- [Import] → 파일별 양식 확인 (json 문법 · 필수 항목)
- 양식 불일치 → Alert_040, 전체 등록 안 됨 · [TI-STN-08 / 팝업 정의] 2-①
- 같은 File type · Product Name · 버전이 있으면 → Confirm_028 · [TI-STN-08 / 팝업 정의] 4
- 이상 없으면 → 등록 & 최신 버전 자동 활성 → Alert_039 (Import complete) → [TI-STN-08] 목록 최상단 추가
- [Cancel] → 팝업 닫힘 → [TI-STN-08] 목록 (반영 없음)

### 케이스

기획 프레임 안 케이스 없음 (2026-11-26 다시 옮길 때 확인). 파일 선택 전 · 후 두 모양은 [TI-STN-08 / Import 정의] ① · ② (TI-STN-08 화면 MD 참조 섹션). 1920 프레임 TI-STN-08-01 두 개 (3288:235109 · 235131)는 기획 프레임 밖이라 UI 화면일 수 있어 열지 않음

| Case | 제목 | 조건 | 프레임 |
| --- | --- | --- | --- |

### 참조 섹션 (원문)

- [TI-STN-08 / Import 정의] (3288:240943): TI-STN-08 화면 MD 참조 섹션에 옮김
- [TI-STN-08 / 팝업 정의] (디스크립션 1 · 3): 「Setting  Ⓛ / Ⓣ_As Is」 페이지에 없음 (asis 추출 빠짐)
