# 그리는 재료 결정 안 (Common UX 담당자와 정할 것)

> 상태: 결정 대기 (2026-11-05). `rules/screen-spec.md` 7절 5번 "그리는 재료"의 안입니다. 사용자가 Common UX 담당자와 이야기한 뒤 정하기로 했습니다. "Common UX 정하자"고 하면 이 문서 내용을 그대로 다시 보여 주고, 함께 Common UX 수정 요청 목록(`feedback.md`)도 이어서 봅니다.

## 조사한 것 (2026-11-05, Figma UX-AI-TEST "Common UX - PC" 페이지)

문서 프레임만 있는 것이 아니라 실제 컴포넌트가 상당히 갖춰져 있습니다(인스턴스 8,280개).

- **화면 틀:** Navigation/GNB · LNB(부품 포함), Breadcrumb, Description(디스크립션 패널용, 107곳에서 씀)
- **상태:** Status/CURECA · Module · Device · Sample · Plate · Waste Bin · Inventory · Connection · Door · Lock · Docking · Event Level · Batch
- **요소:** Table/Header Cell · Cell, Dropdown, Calendar, Pagination, Popup/Alert, Toast, Tooltip(Event · Table), Card, Accordion, Info Box, Floating Button, Chip, Checkbox · Radio · Toggle, Text Input, Tab 4종, Progress Step, 아이콘 수백 개
- **모바일:** Mobile/* · M/* (별도)
- `⛔️ Item_Segment Tabs` 등 ⛔️가 붙은 것은 쓰지 않음 표시
- 컴포넌트는 이 페이지 안의 로컬 컴포넌트입니다. 신규 작업방(`eCzV8BJIXt1MGdKr3S4fgI`)은 다른 파일이라, 팀 라이브러리로 공개(Publish)해야 인스턴스로 가져다 쓸 수 있습니다.

## 두 안

| | A안: 라이브러리로 그리기 (추천) | B안: 와이어프레임으로 그리기 |
| --- | --- | --- |
| 방법 | Common UX - PC 컴포넌트를 팀 라이브러리로 공개하고, 신규 작업방에서 그 인스턴스로 그림. ⛔️ 표시는 쓰지 않음. 컴포넌트가 없는 것(장비 그림 등)만 Common UX 가이드 규칙대로 직접 그림 | 회색 박스 · 글자로 구조만 그리고, 모양은 UI 디자이너가 나중에 |
| 장점 | 기존 기획 화면 수준을 유지. Common UX가 바뀌면 인스턴스가 따라옴. 상태 배지 · 표 · 팝업이 처음부터 정확함 | 빠르고 라이브러리 준비가 필요 없음 |
| 단점 | 라이브러리 공개가 먼저 필요 | 고객 컨펌용 화면으로 쓰기 어렵고, 나중에 다시 그려야 함 |

## A안이면 함께 정할 것

1. **라이브러리 공개:** 누가 언제 Publish할지, Common UX를 고칠 때(가이드 → Figma 반영) 라이브러리 업데이트를 누가 할지
2. **폰트:** Pretendard는 Claude 클라우드 환경(`use_figma`)에서 불러올 수 없음. 새 글은 Inter로 만든 뒤 팀 프로그램 플러그인(Common UX Sync의 글 수정 작업)으로 Pretendard로 바꿈. 플러그인이 꺼져 있으면 Noto Sans KR로 넣고 표시
3. **디스크립션 패널:** 기획 프레임 오른쪽 패널은 기존처럼 `Description` 컴포넌트로 만듦 (`rules/screen-spec.md` 5절 기획 프레임)
4. ⛔️ 표시 컴포넌트와 Common UX 가이드에서 빠진 컴포넌트(가이드 5장을 PC에 맞추는 수정 요청 16번)의 관계 확인

## 함께 볼 것

- Common UX 수정 요청 목록 `common-ux/feedback.md` (16건, 철회 1건 제외 15건 전달 전)
- Common UX 정리 목록 `common-ux/common-policy-candidates.md` (가이드 번호표, 공통 정책 3가지)
