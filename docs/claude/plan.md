# 일정/작업: 회의록 · 화면설계서 작업대기 · 임시 정책 · 논의·결정 (`minutes` · `plan`)

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
- **정책 · 논의 뽑기(kind `minutes` + `mode:'extract'`)**: 회의록 화면 「이 회의에서 나온 정책 · 논의」의 [정책 · 논의 뽑기]가 `{kind:'minutes', mode:'extract', minute:{회의록 ID}, name, text, by}` 작업을 쌓는다. 각자 작성분이 없어도(직접 쓴 · 시트에서 가져온 회의록) 된다. **정리본은 고치지 않는다**(요약하지 않는다).
  1. 「진행 중」으로. `GET /api/minutes`에서 그 회의록의 정리본(`body`)과 작성분(`notes`, 있으면)을 읽는다.
  2. 아래 「회의록 · Workbench에서 생기는 항목」대로 **정해진 것 · 논의가 남은 것**을 찾아 PV · PD · CA로 올린다. 본문에 `[PD-0003 제목]`처럼 항목 ID가 적힌 주제는 그 항목의 회의 결과로 적는다(새로 만들지 않는다). 회의에서 정해지지 않은 이야기 · 단순 공유는 올리지 않는다. 올릴지 애매하면 올리지 말고 note에 「확인 필요」로 적는다.
  3. **회의록 ID를 반드시 적는다**(화면이 이 ID로 회의록과 항목을 잇는다): PV는 근거에 `{날짜} 회의록 {회의록 ID}`, PD는 `## 미팅 결과`에 `{날짜} 회의록 {회의록 ID}` 줄, CA는 그 줄의 결정 · 비고 칸에 `회의록 {회의록 ID}`. 요약 정리 때 올리는 항목도 같다.
  4. `POST /api/jobs {action:'update', id, status:'완료', note:'새로 올림: PV-0003, PD-0010 · 결과 적음: PD-0004 · 확인 필요: …'}`(올린 것이 없으면 「올릴 항목 없음」과 이유). 사용량은 `usage.ps1 -Title ""회의록 요약: {제목} 정책 · 논의 뽑기""`.
- **작성 화면 「진행 중인 항목 넣기」**: 사람이 승인 대기 PV · 열린 PD · 결정 전 CA를 누르면 내용에 `[{ID} {제목}]` 주제 줄이 들어간다. 그 아래 적힌 내용이 그 항목의 회의 결과다.

## 일정/작업 · 화면설계서 작업대기 · 임시 정책 · 논의·결정

**기준 규칙**: `.history/guides/rules/`의 `screen-spec.md`(반영 대기 목록) · `provisional-policy.md`(PV) · `discussion-answer.md`(PD · CA 답) · `change-flow.md` · `status-lifecycle.md`. 아래는 프로그램과 이어지는 부분만 적는다. 저장소 파일(`.history/guides/…`)을 고칠 때 화면 정의서(`screens/…`)는 파일형 문서라 `POST /api/guides {action:'save', id:'screens', file, md}`로 수정본을 남기고, 그 밖의 폴더(`provisional/` · `pending/` · `customer-agenda/` · `screen-fixes/` · `decisions/`)는 파일을 직접 고친다(UTF-8, 서버가 깃으로 공유).

- **화면설계서 작업대기 탭**: 화면 정의서 파일마다 `## 반영 대기 목록` 표(`| # | 구분 | 지금 | 바꿀 것 | 근거 | 상태 |`)와 `screen-fixes/{CID}.md`를 모아 보인다(상태가 「대기」로 시작하는 줄을 센다. 메뉴 담당자 = `_menu.md` owner).
  - **[고른 줄로 Workbench 수정 요청]**: 줄을 골라 요청을 만든다(유형 `화면설계서 반영`, 위치 = 화면 머리말 `figma:` 링크의 파일 키 · 노드, `page`는 빈 값). 요청에 `fixRows:[{doc:'screens'|'screen-fixes', file, n, cid}]`가 담긴다. 이미 요청한 줄은 요청 번호 · 상태가 보이고 다시 고를 수 없다.
  - 이 요청을 처리할 때: `page`가 비어 있으면 `use_figma`로 그 노드의 페이지를 찾아 수정 가능 페이지인지 확인한다(아니면 평소처럼 「보류」). 요청 글의 줄마다 「바꿀 것」대로 Figma를 고친다.
  - **완료하면 그 줄을 「반영 완료」로**: 「완료」로 바꾸기 전에 `fixRows`의 줄마다 상태 칸을 `반영 완료 (YYYY-MM-DD)`로 바꾼다 — `doc:'screens'`는 그 화면 파일(`screens/{file}`)의 지금 내용을 고쳐 `POST /api/guides {action:'save', id:'screens', file, md, note:'반영 완료: R0xx', request:'R0xx 완료', by:'Claude'}`, `doc:'screen-fixes'`는 `.history/guides/screen-fixes/{file}`을 직접 고친다. 반영하지 못한 줄은 그대로 두고 note에 적는다. 한 요청 안의 줄은 한 번에 저장한다.
- **문서가 바뀌면 반영 대기 줄을 더한다**: 작업규칙 · 정책서 · UX가이드 · 기준데이터의 guide-edit이 끝나면, 이어서 그 변경으로 고쳐야 할 화면을 찾아(`ux-docs.md`의 guide-check `scope:'spec'`와 같은 방법 — 정책은 머리말 `cids`, 용어 · 값은 화면 본문 검색) **그 화면 파일의 `## 반영 대기 목록`에 줄을 더한다**: 구분(정책 반영 · 표기 · 디스크립션 …), 지금, 바꿀 것(`디스크립션에 넣음: …`, 정해지지 않은 부분은 `확인 필요: …`), 근거(`{문서 ID} {수정본} {항목}`), 상태 `대기`. 화면 파일이 없는 CID는 `screen-fixes/{CID}.md`(templates/screen-fix.md). guide-edit 완료 note와 guide-check items에 더한 화면 수를 적는다.
- **임시 정책 탭**(`provisional/PV-*.md`, closed/ 포함): [승인] · [A안 승인] · [B안 승인] · [반려]와 [＋ 새 임시 정책]은 작업 대기열 kind **`plan`**으로 쌓인다(`{sub, target, plan}`). 
  - `sub:'pv-decide'`(target PV ID, plan `{decision, memo, date, by}`): 「진행 중」 → PV 머리 표 `상태`를 승인 · 반려로(A/B는 `A안 승인`/`B안 승인`), `## 결정` 표에 `| 날짜 | 결정 | 결정자 | 메모 |` 줄 추가. 반려는 사유 필수, 파일을 `provisional/closed/`로 옮긴다. 승인은 `## 영향 화면` 표의 CID마다 반영 대기 줄(근거 PV ID, 상태 `대기`)을 더한다(공통 자료 반영 · closed/ 이동은 승인 담당자가 정책을 고친 뒤 — note에 남은 일로 적는다). → 「완료」, note에 바꾼 파일 · 더한 줄 수.
  - `sub:'pv-new'`(plan `{title, policy, change, reason, screens, customer, by, date}`): provisional-policy.md 4 · 6절대로 등록(번호 = provisional · closed 중 가장 큰 번호 + 1, 같은 정책의 승인 대기 PV가 있으면 같은 내용이면 그 PV에 합치고, 다르면 A/B 선택 문서). 영향 화면 표는 Claude 초안. → 「완료」, note에 PV ID.
- **논의·결정 탭**(내부 논의 = `pending/PD-*.md`, 고객 논의 = `customer-agenda/agenda.md`의 CA 줄): [답변하기]는 discussion-answer.md 순서를 두 단계로 나눈다.
  - `sub:'answer'`(target PD · CA ID, plan `{answer, date, basis, by, kind}`): 파일을 고치지 않는다. 정리안을 만들어 job note에 마크다운으로 쓰고 상태를 **「확인 대기」**로: `**결정**`(정책서 문장) · `**바뀌는 것**`(항목 파일 결과 · 상태, 공통 자료 또는 PV, 반영 대기 줄을 더할 화면) · `**확인 필요**`. 답이 모호하면 「보류」와 질문.
  - 사람이 화면에서 [확인 · 반영]을 누르면 `sub:'answer-apply'`(plan `{from, proposal, answer, date, basis, by}`)가 쌓인다 → 정리안대로 항목 파일(PD 미팅 결과 · 상태 / CA 결정 · 상태 `결정`), 공통 자료(승인 담당자의 답이면 정책 수정, 아니면 PV 등록 — discussion-answer.md 4절), 반영 대기 줄을 고치고 「완료」, note에 바꾼 파일 · 줄 수. [다시 답하기]는 새 `answer`.
- **회의록 · Workbench에서 생기는 항목**: 
  - 회의록 요약 정리(kind `minutes`) 때 정리본에서 **정해진 것 · 논의가 남은 것**을 찾아 규칙대로 올린다: 기존 정책을 바꾸기로 했으면 PV(근거 = `{날짜} 회의록 {회의록 ID}`), 우리끼리 더 논의할 것은 PD(`## 미팅 결과`에 그 회의), 고객 답을 기다리는 것은 CA(agenda.md 줄 추가 · 화면에 임시 적용했으면 PV와 연결). 이미 있는 PV · PD · CA면 새로 만들지 않고 그 파일의 미팅 결과 · 결정에 적는다. 요약 job note에 만든 · 고친 ID를 적는다.
  - Workbench 수정 요청을 처리하다 기존 정책 · 화면 정의와 다르게 고쳐야 하면(요청을 따르되) PV를 등록하고, 정할 수 없어 「보류」하는 요청은 PD로 올려 요청 note에 ID를 적는다(헌법 2조: 저장소에 기록해야 효력).
