# 일정/작업: 회의록 · 화면설계서 작업대기 · 논의 대상 · 작업 기록 (`minutes` · `plan`)

> 이 문서는 `CLAUDE.md`에서 나눈 것이다. `CLAUDE.md`의 범위 · 공통 규칙(팀 · 중복 처리 금지 · 사용량 · UTF-8 전송 · 주의)을 함께 따른다. 다른 종류의 일이 이어지면 `CLAUDE.md` 「작업별 문서」 표의 그 문서를 읽는다.

## 일정/작업 · 회의록

- 회의록은 md 파일 `.history/minutes/{id}.md`(id `m{YYYYMMDD}-{6자}`)로 저장되고 작업 이력과 함께 깃으로 모든 PC에 공유된다. 머리말 `id · date(YYYY-MM-DD HH:MM) · title · attendees(회사마다 「 / 」로 이음) · by · createdAt · updatedBy · updatedAt`, 그 아래 본문(내용, `## 소제목` · `[주제]` 줄).
- API: `GET /api/minutes`(최신순) · `POST /api/minutes {action:'save', id?, date, title, attendees, body}` · `{action:'delete', id}`. 읽기 = `plan` 읽기, 쓰기 = `plan` 쓰기.
- 화면(회의록 탭): 왼쪽 월별 목록(최신이 위, 두 번째 줄은 본문의 [주제] 또는 참석 요약), 오른쪽 보기 · 작성 · 수정. 시트 「0.회의록」에만 있는 회의는 [시트 회의록 가져오기]로 md로 옮긴다(시트는 그대로). 주간 진행 현황의 회의 내역은 md + 아직 옮기지 않은 시트 회의.
- Claude가 회의록을 쓰거나 고칠 때도 이 API를 쓴다(파일을 직접 커밋하지 않는다).
- **각자 작성**: 참석자마다 자기 내용을 `.history/minutes/{id}.notes/{작성자 ID}.md`(머리말 author · authorId · updatedAt + 본문)에 쓴다. `POST /api/minutes {action:'note', id, body}`(로그인 계정 ID, 없으면 PC 이름. 빈 글이면 지움). `GET /api/minutes`의 item마다 `notes:[{author, authorId, updatedAt, body}]`, 맨 위 `me`.
- **요약 정리(작업 대기열 kind `minutes`)**: 화면의 [요약 정리]가 `{kind:'minutes', minute:{회의록 ID}, name, text, by}` 작업을 쌓는다(`JOBS`에 나온다). 처리:
  1. 「진행 중」으로. `GET /api/minutes`에서 그 회의록(`id === minute`)의 `notes`와 지금 정리본(`body`)을 읽는다.
  2. 모든 작성분을 합쳐 **정리본 하나**로 쓴다: 같은 내용은 하나로, 서로 다르면 둘 다 남기고 누가 말했는지 `(이름)`을 붙인다. 회의 흐름대로 `[주제]` 줄로 묶고 그 아래 `- ` 항목, 결정 · 할 일은 `ㄴ 결정:` · `ㄴ 할 일(담당, 기한):`처럼 드러나게, 맨 끝에 필요하면 `## 기타`. 작성분에 없는 내용은 만들지 않는다. 지금 정리본이 있으면 거기 있던 내용도 빠뜨리지 않는다.
  3. `POST /api/minutes {action:'save', id, date, title, attendees(줄마다), body:{정리본}, summary:'{작성자 이름들}', by:'Claude'}`(UTF-8 파일로) → 머리말 `summary`에 「시각 · 이름들」이 남는다.
  4. `POST /api/jobs {action:'update', id, status:'완료', note:'작성 N건 → 정리본'}`. 사용량은 `usage.ps1 -Title "회의록 요약: {제목}"`. `Common_UX_Changelog.md`에는 쓰지 않는다.
- **정책 · 논의 뽑기(kind `minutes` + `mode:'extract'`)**: 회의록 화면 「이 회의에서 나온 논의 대상」의 [정책 · 논의 뽑기]가 `{kind:'minutes', mode:'extract', minute:{회의록 ID}, name, text, by}` 작업을 쌓는다. 각자 작성분이 없어도(직접 쓴 · 시트에서 가져온 회의록) 된다. **정리본은 고치지 않는다**(요약하지 않는다).
  1. 「진행 중」으로. `GET /api/minutes`에서 그 회의록의 정리본(`body`)과 작성분(`notes`, 있으면)을 읽는다.
  2. 아래 「회의록 · Workbench에서 생기는 항목」대로 **정해진 것 · 논의가 남은 것**을 찾아 논의 대상(DS)으로 올린다. 본문에 `[DS-0003 제목]`처럼 항목 ID가 적힌 주제는 그 항목의 논의 기록 · 결정으로 적는다(새로 만들지 않는다). 회의에서 정해지지 않은 이야기 · 단순 공유는 올리지 않는다. 올릴지 애매하면 올리지 말고 note에 「확인 필요」로 적는다.
  3. **회의록 ID를 반드시 적는다**(화면이 이 ID로 회의록과 항목을 잇는다): DS의 `## 4. 논의 기록`(또는 `## 5. 결정`) 줄에 `{날짜} 회의록 {회의록 ID}`. 요약 정리 때 올리는 항목도 같다.
  4. `POST /api/jobs {action:'update', id, status:'완료', note:'새로 올림: DS-0003 · 기록 더함: DS-0001 · 확인 필요: …'}`(올린 것이 없으면 「올릴 항목 없음」과 이유). 사용량은 `usage.ps1 -Title "회의록 요약: {제목} 정책 · 논의 뽑기"`.
- **작성 화면 「열린 논의 대상을 안건으로 넣기」**: 사람이 논의 중 · 보류 · 후속 확인 필요인 DS를 누르면 내용에 `[{ID} {제목}]` 주제 줄이 들어간다. 그 아래 적힌 내용이 그 항목의 회의 결과다.

## 일정/작업 · 화면설계서 작업대기 · 논의 대상 · 작업 기록 (새 흐름, 2026-11-12)

**기준 규칙은 규칙 저장소에 있다**(CURECA = `.history/guides/`, 다른 팀 `.history/teams/{team}/guides/`): 논의 대상 `reference-rules/discussions.md`, 반영 대기 목록 `reference-rules/pending-changes.md`, 작업 기록 `reference-rules/work-log.md`, 정책서 쓰는 법 `reference-rules/policy-writing.md`, 헌법 `constitution.md`(4 · 5조). **이 문서는 프로그램과 이어지는 부분만 적는다. 절차는 위 문서를 Read하고 그대로 따른다.** 임시 정책(PV) · 승인 · 내부 논의(PD) · 고객 논의(CA)는 없어졌다(헌법 v1.9 · v1.7, 옛 파일은 `old-provisional/` · `old-pending/` · `old-customer-agenda/`로 무엇이 정해지지 않았는지 확인하는 용도로만 읽는다).

- **고치는 곳**: 규칙 저장소 파일(`discussions/` · `screens/` · `policy/` · `work-logs/` 등)을 **직접 고친다**(UTF-8). UX 문서 수정본 API(`/api/guides save`)는 쓰지 않는다. 커밋 · 푸시는 하지 않는다(서버의 `.history` 자동 동기화가 공유한다).
- **화면설계서 작업대기 탭**: 화면 정의서 파일마다 `## 반영 대기 목록` 표 `| ID | 타입 | 변경 전 | 변경 후 | 근거 | 상태 |`를 모아 보인다(예전 칸 `# · 구분 · 지금 · 바꿀 것`도 같은 자리로 읽음). 「대기」로 시작하는 항목을 세고, 「작업 중 (작업 기록)」은 따로 보인다. 메뉴 담당자 = `_menu.md` owner.
  - **[고른 항목으로 화면설계 작업(케이스 1) 요청]**: 대기 항목을 골라 Workbench 요청을 만든다(`case:'1'`, `work` 빈 값 = 새 작업, 위치 = 화면 머리말 `figma:` 링크, `fixRows:[{doc:'screens', file, n, cid}]`). 처리는 `requests.md` 「화면설계 케이스 요청」대로 0단계부터: **1단계 요청자 확인에서 `fixRows` 항목을 「이번에 반영」으로 골라 상태를 `작업 중 ({작업 기록 이름})`으로**, 7단계 완료(화면 컨펌) 때 `반영 완료 ({날짜})`로 바꾼다(`pending-changes.md` 4절). 「테스트로」면 상태를 바꾸지 않는다.
- **논의 대상 탭**(`discussions/DS-*.md` + `list.md`): 상태 넷(논의 중 · 결정 · 보류 · 종료), 묶음 여섯(결정 · 반영할 것 / 논의 중 · 고객 / 논의 중 · 내부 / 결정 · 작업 중 / 보류 / 후속 확인 필요). 버튼은 작업 대기열 kind **`plan`**으로 쌓인다(`{sub, target, plan}`). 항목을 만들거나 상태를 바꿀 때마다 `discussions/list.md`를 다시 만든다(손으로 고치지 않는 보기).
  - `sub:'ds-new'`(plan `{title, question, decider, from, policies, cids, basis, by, date}`): `discussions.md` 2절대로 — **먼저 같은 정책 · 규칙을 다루는 열린 항목을 찾아** 같은 질문이면 그 항목에 잇는다(안이 다르면 3절 제안 표에 더함). 아니면 번호 = 가장 큰 DS 번호 + 1, 3절 템플릿으로 `discussions/DS-{0000}.md`를 만든다(`status: 논의 중`, 2절 논의 전 상태에 `basis`). → 「완료」, note에 DS ID(이어 적었으면 그 ID와 「이어 적음」).
  - `sub:'answer'`(target DS ID, plan `{answer, date, basis, by, kind:'ds', apply}`): **파일을 고치지 않는다.** `discussions.md`의 결정 반영 순서대로 정리안을 만들어 job note에 마크다운으로 쓰고 상태를 **「확인 대기」**로: `**결정 문장**`(5절에 더할 줄) · `**영향 범위**`(정책서 + 화면 / 화면 / 없음, 4절 — 사람이 고르지 않고 Claude가 정책서 · 화면과 대조해 정함) · `**바뀌는 것**`(상태, 정책서 규칙 n 고침 · 추가, 반영 대기 항목을 만들 화면 · 함께 고칠 화면, `work`가 있으면 「그 작업 7단계 완료 때 반영」) · `**후속 확인 필요**`(있으면) · `**확인 필요**`. `apply:true`(「반영 정리안」, 상태 `결정` · `work` 없음)는 답 없이 5절 맨 아래 결정으로 같은 정리안을 만든다. 답이 모호하면 「보류」와 질문.
  - 사람이 [확인 · 반영]을 누르면 `sub:'answer-apply'`(plan `{from, proposal, answer, date, basis, apply, by}`) → 정리안대로 DS 파일(4절 논의 기록 · 5절 결정 줄 · 상태 · 6절 반영), 정책서(`reference-rules/policy-writing.md`), 영향 화면 반영 대기 항목(`pending-changes.md` 3절 칸, 타입 `논의 결정`, 근거 맨 앞 DS ID)을 고치고 `list.md`를 다시 만든 뒤 「완료」, note에 바꾼 파일 · 항목 수. **`work`가 있는 결정(화면 작업이 있는 결정)은 정책서 · 다른 화면을 지금 고치지 않는다** — 상태 `결정` 그대로, 그 작업 7단계 완료 때 반영(헌법 4조). [다시 답하기]는 새 `answer`.
- **작업 기록 탭**(`work-logs/*.md`, `GET /api/worklogs`): 머리말 · 「단계」 표 · `다음:` 줄을 보여 주기만 한다. 작업 기록은 화면설계 요청(케이스)을 처리하는 Claude가 쓴다(`requests.md`).
- **회의록 · Workbench에서 생기는 항목**:
  - 회의록 요약 정리 · 정책 · 논의 뽑기 때 정리본에서 **정해진 것 · 논의가 남은 것**을 찾아 논의 대상으로 올린다(`discussions.md` 2절 「생기는 곳 · 회의」): 정할 사람이 고객이면 `decider: 고객`, 우리끼리면 `내부`. 회의에서 이미 정해졌으면 `결정`(5절에 결정 줄 · 회의록 ID), 화면 영향 없이 알아 둘 것이면 4절 「가」(바로 `종료`). 이미 있는 DS면 새로 만들지 않고 그 파일의 논의 기록 · 결정에 적는다. job note에 만든 · 고친 ID를 적는다.
  - Workbench 수정 요청을 처리하다 정책을 정해야 하면 `flow/` 단계 문서대로(질문 대기 · 논의 대상) 하고, 정할 수 없어 「보류」하는 요청은 DS로 올려 요청 note에 ID를 적는다(헌법 2조: 저장소에 기록해야 효력).
