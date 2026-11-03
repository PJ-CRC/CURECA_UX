# 동작 구조와 사용 리소스

Common UX 도구(가이드 · Figma Workbench · 변경 이력 · Figma 플러그인)의 구성 요소, 수정할 때의 흐름, 그때 쓰는 리소스를 정리한다.
기준일은 2026-10-21이다.

---

## 1. 구성 요소

| 구성 요소 | 위치 | 역할 |
|---|---|---|
| 로컬 서버 | `guide_server.ps1` · `Figma AI Run.bat` (포트 8765) | 페이지 서빙과 API. `/api/requests`, `/api/shots`를 제공한다 |
| Common UX 가이드 | `Common_UX_Guide.html` | 작성 규칙 문서 |
| Figma Workbench | `Figma_Workbench.html` · `workbench/` | 위쪽은 SH.L 프레임 캡처(또는 실시간), 아래쪽은 depth 메뉴와 수정 요청 |
| 변경 이력 | `Change_History.html` | 작업 이력(공유)과 수정 요청을 최신순으로 표시. 10개씩 페이지네이션 |
| 사용량 통계 | `Usage_Stats.html` · `workbench/usage.ps1` · `.pl` · `pricing.json` | 요청마다 Claude가 쓴 토큰(종류별)과 금액 환산. 요청 완료 때 서버가 `.history/usage/`에 남기고 깃으로 공유. `GET /api/usage` |
| Figma 플러그인 | `figma_plugin/` (**Common UX Sync**) | Claude · Workbench 연동: 캡처 자동 갱신 · 「캡처 받기」 · Claude 글 수정 · 프레임 목록 |
| 요청 감시 스크립트 | `workbench/watch_requests.ps1` | Claude Code 세션이 실행. 「대기」 요청이 생기면 Claude를 깨운다 |
| 데이터 파일 | `workbench/edit_requests.json`, `workbench/jobs.json`, `projects/{fileKey}/` (project · catalog · labels · shots · shots_meta) | 수정 요청, 작업 대기열, 프로젝트별 프레임 목록과 캡처 |

> 플러그인은 하나다. 「Common UX Sync」는 Claude · Workbench 연동만 하고, 창은 서버 연결 상태만 보이는 작은 크기다.

---

## 2. 수정 방식별 흐름

### 2-1. Figma에서 직접 수정 (플러그인 실행 중)

```
Figma에서 SH.L 수정
  → 플러그인이 변경 감지(nodechange), 1.5초 동안 모아서
  → 바뀐 최상위 프레임만 PNG로 내보냄
  → 로컬 서버 /api/shots → projects/{fileKey}/shots/{nodeId}.jpg|png, shots_meta.json 갱신
  → Workbench가 3초 안에 새 캡처로 교체(캡처 시각·캡처한 사람 표시)
```

### 2-2. Workbench 수정 요청 → Claude 처리

```
Workbench에서 요청 등록(작업자 이름 필수)
  → workbench/edit_requests.json 에 「대기」로 저장
  → 감시 스크립트가 감지(2초 간격) → Claude Code 세션이 처리 시작
  → 「진행 중」 → Figma MCP(use_figma)로 SH.L 수정 → get_screenshot으로 캡처 갱신
  → 「완료」 + 처리 메모 → Common_UX_Changelog.md 기록 → git 커밋·푸시
  (해석이 모호하면 반영하지 않고 「보류」 + 메모에 질문)
```

---

## 3. 캡처 방식

| 방식 | 대상 | 용도 | 시간 |
|---|---|---|---|
| 자동 갱신 | **수정한 프레임만** | 플러그인을 켜 둔 동안 기본으로 동작 | 수정 후 몇 초 |
| 보이는 프레임 캡처 | Figma 화면에 보이는 SH.L 프레임(최대 4개) | 방금 고친 화면만 빨리 맞출 때 | 몇 초 |
| 프레임별 캡처 받기 | Workbench에서 고른 프레임 1개 | 캡처가 없거나 오래된 프레임 (플러그인 또는 Claude가 받음) | 수 초 |

- 레이어를 **삭제**하면 Figma가 원래 어느 프레임에 있었는지 알려 주지 않는다.
  - 이때는 화면에 보이는 프레임(최대 4개)을 캡처한다.
  - 화면 밖 프레임에서 지웠다면 그 프레임을 띄우고 「보이는 프레임 캡처」를 누른다.
- 「실시간」 보기는 Figma 임베드라 항상 최신 상태다(Figma 로그인 필요). 켬/끔 상태는 기억된다.

---

## 4. 사용 리소스

### 4-1. Figma에서 직접 수정 (흐름 2-1)

| 리소스 | 쓰임 | 비용·부담 |
|---|---|---|
| Figma 데스크톱 앱 + 플러그인 | 변경 감지, 바뀐 프레임 PNG 내보내기 | 내 PC에서 처리. 추가 비용 없음 |
| 로컬 서버 | PNG 저장, `shots_meta.json` 기록 | 거의 없음 |
| 브라우저(Workbench) | 3초마다 캡처 정보 확인, 이미지 교체 | 거의 없음 |
| OneDrive | 바뀐 PNG(장당 약 50~500KB) 동기화 | 동기화 용량·트래픽만 |
| Claude | 쓰지 않음 | 없음 |

### 4-2. Workbench 요청 → Claude 처리 (흐름 2-2)

| 리소스 | 쓰임 | 비용·부담 |
|---|---|---|
| 요청 감시 스크립트 | 2초마다 `edit_requests.json` 확인 | 거의 없음(Claude 사용량 아님) |
| **Claude Code (현재 요금제)** | 요청 해석, Figma 작업, 기록 | **요금제 사용량을 씀.** 요청 1건에 수천~수만 토큰 |
| Figma MCP (`use_figma`, `get_screenshot`) | Figma 수정, 결과 캡처 | Figma 쪽 MCP 호출 한도에 포함 |
| GitHub | 처리 후 커밋·푸시 | 무료(저장소 용량만) |
| 로컬 서버 · 브라우저 · OneDrive | 4-1과 같음 | 거의 없음 |

### 정리

- 실제로 사용량이 드는 경우는 **Workbench 요청을 Claude가 처리할 때뿐**이다(요금제 사용량 + Figma MCP 호출).
- 직접 수정은 내 PC 안에서 돌아서 추가 비용이 없다.
- API 키는 쓰지 않는다. Claude는 현재 요금제의 Claude Code 세션으로만 동작한다.

---

## 5. 계속 켜져 있어야 하는 것

| 대상 | 필요한 기능 |
|---|---|
| `Figma AI Run.bat` (로컬 서버) | 모든 기능 |
| Figma 데스크톱 앱 + Common UX Sync 플러그인 | 캡처 자동 갱신 · Claude 글 수정 |
| Claude Code 세션 + 요청 감시 스크립트 | Workbench 요청 자동 처리 |

- Claude Code 세션을 닫으면 요청은 「대기」로 쌓이기만 한다. 세션을 다시 열고 「요청 처리해줘」라고 하면 처리한다.
- 플러그인을 꺼 둔 동안 Figma에서 고친 내용은 Workbench에서 그 프레임의 「캡처」로 다시 받는다(전체 일괄 캡처는 Figma를 무겁게 해서 없앴다).

---

## 6. 누가 수정했는지 확인하기

| 수정 경로 | 기록 위치 | 기록되는 사람 |
|---|---|---|
| Workbench 수정 요청 | `edit_requests.json`, 변경 이력 페이지 | 요청자 → 마지막 처리자 |
| Workbench 캡처 갱신 | `shots_meta.json`, Workbench 하단 | Figma 로그인 사용자 또는 Claude |
| 파일 변경 | GitHub 커밋 기록 | 커밋 작성자 |
| Figma 직접 수정 | Figma › File › Show version history | Figma 편집자 (이 도구들로는 추적하지 않음) |
