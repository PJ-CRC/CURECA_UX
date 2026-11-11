// 쓰기 비교: 사본 A(기존 서버 :8775)와 사본 B(Node 서버 :8776)에 같은 쓰기 요청을 차례로 보내고, 응답과 바뀐 파일을 비교한다
//  먼저: powershell -ExecutionPolicy Bypass -File node\tools\ab_setup.ps1
//  실행: node node/tools/ab_compare.js [--only requests]
//  시각(2026-…T…+09:00) · 임시 파일 이름 · 수정본 이름처럼 때마다 다른 값은 같은 표시로 바꿔 비교한다
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const BASE = path.join(process.env.TEMP || os.tmpdir(), 'wb_ab');
const SIDES = [{ name: 'A(기존)', port: 8775, root: path.join(BASE, 'A'), v: {} }, { name: 'B(Node)', port: 8776, root: path.join(BASE, 'B'), v: {} }];
const START = Date.parse(fs.readFileSync(path.join(BASE, 'start.txt'), 'utf8').trim().replace(/^﻿/, ''));

function call(side, method, p, body, raw) {
  return new Promise((ok) => {
    const data = raw ? raw : body !== undefined ? Buffer.from(JSON.stringify(body)) : null;
    const rq = http.request({ host: '127.0.0.1', port: side.port, path: p, method, timeout: 120000,
      headers: Object.assign({ Host: `localhost:${side.port}` }, data ? { 'Content-Type': raw ? 'application/octet-stream' : 'application/json', 'Content-Length': data.length } : {}) }, (res) => {
      const b = []; res.on('data', (d) => b.push(d)); res.on('end', () => { const t = Buffer.concat(b).toString('utf8'); let j; try { j = JSON.parse(t.replace(/^﻿/, '')); } catch (e) {} ok({ code: res.statusCode, text: t, json: j }); });
    });
    rq.on('error', (e) => ok({ code: 0, text: e.message })); if (data) rq.write(data); rq.end();
  });
}
// 때마다 다른 값 → 같은 표시
const norm = (s) => String(s)
  .replace(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?([+-]\d{2}:\d{2}|Z)?/g, '<시각>')
  .replace(/[0-9a-f]{32}\.([a-z0-9]{1,8})/g, '<임시>.$1')
  .replace(/\d{8}-\d{6}_[a-z0-9-]+/g, '<수정본>')
  .replace(/_\d{8}-\d{6}/g, '_<시각>')
  .replace(/m\d{8}-[0-9a-f]{6}/g, '<회의록>');
function sub(o, v) { return o === undefined ? undefined : JSON.parse(JSON.stringify(o).replace(/"\$(\w+)"/g, (m, k) => JSON.stringify(v[k] === undefined ? null : v[k]))); }
// sync · syncing: 깃 동기화 상태(사본마다 따로 돌아 다름) — 비교하지 않는다
function canon(x) { if (Array.isArray(x)) return x.map(canon); if (x && typeof x === 'object') { const o = {}; for (const k of Object.keys(x).sort()) { if (k === 'sync' || k === 'syncing' || k === 'salt' || k === 'hash') continue; o[k] = canon(x[k]); } return o; } return x; }
const same = (a, b) => norm(JSON.stringify(canon(a))) === norm(JSON.stringify(canon(b)));
// 다른 곳(경로: A값 / B값) 몇 개
function where(a, b, at, out) {
  if (out.length >= 6 || same(a, b)) return out;
  if (a && b && typeof a === 'object' && typeof b === 'object' && Array.isArray(a) === Array.isArray(b)) {
    if (Array.isArray(a) && a.length !== b.length) out.push(`${at}: 개수 ${a.length} / ${b.length}`);
    for (const k of new Set(Object.keys(a).concat(Object.keys(b)))) where(a[k], b[k], `${at}.${k}`, out);
    return out;
  }
  out.push(`${at}: ${norm(JSON.stringify(a)).slice(0, 90)} / ${norm(JSON.stringify(b)).slice(0, 90)}`);
  return out;
}
const readJ = (f) => { try { return JSON.parse(fs.readFileSync(f, 'utf8').replace(/^﻿/, '')); } catch (e) { return undefined; } };

// 바뀐 파일(시작 뒤 바뀐 것) 목록
function changed(root, rels) {
  const out = {};
  const walk = (d, rel) => { let es = []; try { es = fs.readdirSync(d, { withFileTypes: true }); } catch (e) { return; } for (const x of es) { const f = path.join(d, x.name), r = rel ? rel + '/' + x.name : x.name; if (x.isDirectory()) { if (x.name !== '.git') walk(f, r); } else { const st = fs.statSync(f); if (st.mtimeMs > START) out[r] = f; } } };
  for (const r of rels) walk(path.join(root, r), r);
  return out;
}
function pngBytes() { const d = path.join(SIDES[0].root, 'docs', 'layout_structures'); const f = fs.readdirSync(d).find((n) => n.endsWith('.png')); return fs.readFileSync(path.join(d, f)); }
function jpgBytes() { return fs.readFileSync(path.join(SIDES[0].root, 'docs', 'manual', 'p01.jpg')); }

const KEY = 'etCQFF3CTf1EA6C79d4BBf';
// 시험 순서(같은 순서로 두 쪽에 보낸다). save: 응답에서 꺼내 둘 값(쪽마다 따로), $이름으로 다음 요청에 넣는다
const STEPS = {
  requests: [
    { t: '첨부 원본(png)', m: 'POST', p: '/api/attach?ext=png', raw: pngBytes, save: { tmp1: (j) => j.tmp } },
    { t: '첨부 사본(jpg)', m: 'POST', p: '/api/attach?ext=jpg', raw: jpgBytes, save: { tmp2: (j) => j.tmp } },
    { t: '첨부 잘못된 형식', m: 'POST', p: '/api/attach?ext=exe', raw: () => Buffer.from('x') },
    { t: '요청 등록(프레임 · 첨부)', m: 'POST', p: '/api/requests', b: { action: 'add', nodeId: '2225:68179', frame: 'LI-INS-01-T', page: 'SH.L TEST', fileKey: KEY, fileName: 'UX AI TEST', editable: true, type: '일반', priority: '보통', layout: '', text: '비교 시험 요청 1', images: [{ tmp: '$tmp1', small: '$tmp2', name: 'a.png' }], by: '시험' }, save: { r1: (j) => j.items[0].id } },
    { t: '일반 질문 등록(프레임 없음)', m: 'POST', p: '/api/requests', b: { action: 'add', nodeId: '', frame: '', page: 'SH.L TEST', fileKey: KEY, fileName: 'UX AI TEST', editable: true, type: '일반', priority: '높음', text: '비교 시험 일반 질문', by: '시험' }, save: { r2: (j) => j.items[0].id } },
    { t: '빈 글 등록', m: 'POST', p: '/api/requests', b: { action: 'add', text: '  ', by: '시험' } },
    { t: '진행 중', m: 'POST', p: '/api/requests', b: { action: 'update', id: '$r1', status: '진행 중', note: '처리 시작', by: 'Claude' } },
    { t: '이미 진행 중', m: 'POST', p: '/api/requests', b: { action: 'update', id: '$r1', status: '진행 중', by: 'Claude' } },
    { t: '질문(ask)과 보류', m: 'POST', p: '/api/requests', b: { action: 'update', id: '$r1', status: '보류', note: '물어봄', ask: { q: '어느 쪽?', options: [{ label: 'A' }, { label: 'B' }], free: true }, by: 'Claude' } },
    { t: '답하기', m: 'POST', p: '/api/requests', b: { action: 'answer', id: '$r1', text: 'A', by: '시험' } },
    { t: '다시 진행 중(force)', m: 'POST', p: '/api/requests', b: { action: 'update', id: '$r1', status: '진행 중', force: true, by: 'Claude' } },
    { t: '완료(고친 프레임 + 새 프레임)', m: 'POST', p: '/api/requests', b: { action: 'update', id: '$r1', status: '완료', note: '끝\n- 화면: 고침', frames: [{ nodeId: '2225:68179', name: 'LI-INS-01-T' }, { nodeId: '9999:1', name: '새 화면 시험' }, { nodeId: 'bad' }], by: 'Claude' } },
    { t: '답하고 마치기(resolve)', m: 'POST', p: '/api/requests', b: { action: 'answer', id: '$r2', text: '그대로', resolve: true, by: '시험' } },
    { t: '없는 요청', m: 'POST', p: '/api/requests', b: { action: 'update', id: 'R999', status: '완료' } },
    { t: '지우기', m: 'POST', p: '/api/requests', b: { action: 'delete', id: '$r2' } },
    { t: '모르는 action', m: 'POST', p: '/api/requests', b: { action: 'nope' } },
    { t: '목록 읽기', m: 'GET', p: '/api/requests' },
  ],
};
const MIN = fs.readdirSync(path.join(SIDES[0].root, '.history', 'minutes')).find((n) => /^m\d{8}-[0-9a-z]+\.md$/.test(n)).replace(/\.md$/, '');
const KEY2 = 'AbCdEfGhIj1234567890';
const job = (b) => ({ m: 'POST', p: '/api/jobs', b: Object.assign({ action: 'add', by: '시험' }, b) });
STEPS.jobs = [
  Object.assign({ t: '캡처 작업' }, job({ kind: 'capture', fileKey: KEY, nodeId: '2225:68179', name: 'LI-INS-01-T' }), { save: { j1: (j) => j.job.id } }),
  Object.assign({ t: '같은 캡처 다시(합쳐짐)' }, job({ kind: 'capture', fileKey: KEY, nodeId: '2225:68179' })),
  Object.assign({ t: '자동 캡처' }, job({ kind: 'capture', fileKey: KEY, nodeId: '2225:68698', auto: true })),
  Object.assign({ t: '잘못된 nodeId' }, job({ kind: 'capture', fileKey: KEY, nodeId: 'x' })),
  // (items가 아예 없으면 기존 서버는 PowerShell @($null).Count = 1 때문에 빈 작업을 만든다 — Node는 거절. 그래서 빈 배열로 비교)
  Object.assign({ t: '글 수정 항목 없음' }, job({ kind: 'text', fileKey: KEY, nodeId: '2225:68179', items: [] })),
  Object.assign({ t: '글 수정' }, job({ kind: 'text', fileKey: KEY, nodeId: '2225:68179', items: [{ nodeId: '2225:1', find: 'a', replace: 'b' }] })),
  Object.assign({ t: '문서 수정 요청(파일형)' }, job({ kind: 'guide-edit', guide: 'rules', file: 'schedule.md', name: '항목', text: '고쳐 줘' })),
  Object.assign({ t: '연관 항목 찾기' }, job({ kind: 'guide-check', guide: 'policy', scope: 'spec', revFrom: 'a', revTo: 'b' }), { save: { jc: (j) => j.job.id } }),
  Object.assign({ t: '없는 문서' }, job({ kind: 'guide-edit', guide: 'nope' })),
  Object.assign({ t: '회의록 정책 · 논의 뽑기' }, job({ kind: 'minutes', mode: 'extract', minute: MIN, name: '회의' })),
  Object.assign({ t: '새 임시 정책' }, job({ kind: 'plan', sub: 'pv-new', plan: { title: '시험' }, name: '새 PV' })),
  Object.assign({ t: '모르는 처리' }, job({ kind: 'plan', sub: 'nope' })),
  Object.assign({ t: '프로토타입 이름 없음' }, job({ kind: 'prototype', frames: [{ nodeId: '1:1' }] })),
  Object.assign({ t: '프로토타입 맞추기' }, job({ kind: 'prototype-sync', proto: 'p20261110-j083', frames: [{ nodeId: '2225:68179' }] })),
  Object.assign({ t: '프로토타입 맞추기 다시(합쳐짐)' }, job({ kind: 'prototype-sync', proto: 'p20261110-j083' })),
  Object.assign({ t: '모르는 작업' }, job({ kind: 'nope' })),
  { t: '가져가기(id)', m: 'POST', p: '/api/jobs', b: { action: 'take', id: '$j1', by: '플러그인' } },
  { t: '가져가기(종류 · 파일)', m: 'POST', p: '/api/jobs', b: { action: 'take', kind: 'capture', fileKey: KEY, by: '플러그인' } },
  { t: '가져갈 것 없음', m: 'POST', p: '/api/jobs', b: { action: 'take', kind: 'capture', fileKey: KEY2 }, known: '기존 서버는 job:{}(플러그인이 없는 작업을 되돌리려다 오류), Node는 job:null' },
  { t: '진행 중 다시', m: 'POST', p: '/api/jobs', b: { action: 'update', id: '$j1', status: '진행 중' } },
  { t: '완료', m: 'POST', p: '/api/jobs', b: { action: 'update', id: '$j1', status: '완료', note: '받음' } },
  { t: '연관 항목 결과', m: 'POST', p: '/api/jobs', b: { action: 'update', id: '$jc', status: '완료', items: [{ type: 'doc', doc: 'rules', change: 'x' }], note: '1개' } },
  { t: '없는 작업', m: 'POST', p: '/api/jobs', b: { action: 'update', id: 'J999' } },
  { t: '목록', m: 'GET', p: '/api/jobs' },
];
const tinyPng = () => fs.readFileSync(path.join(SIDES[0].root, 'docs', 'manual', 'p02.jpg'));
STEPS.projects = [
  { t: '새 프로젝트', m: 'POST', p: '/api/projects', b: { action: 'add', link: `https://www.figma.com/design/${KEY2}/x?node-id=1-2` } },
  { t: '링크 아님', m: 'POST', p: '/api/projects', b: { action: 'add', link: 'https://example.com' } },
  { t: '프레임 목록 올리기', m: 'POST', p: '/api/catalog', b: { fileKey: KEY2, fileName: '시험 파일', editablePageId: '1:2', by: 'Claude', pages: [{ id: '0:1', name: '표지', editable: false, frames: null }, { id: '1:2', name: '작업', editable: true, frames: [['3:4', '화면 A', 100, 200, 0, 0]] }] } },
  { t: '잘못된 프레임 목록', m: 'POST', p: '/api/catalog', b: { fileKey: KEY2 } },
  { t: '작업 페이지 바꾸기', m: 'POST', p: '/api/projects', b: { action: 'editable', key: KEY2, pageId: '0:1' } },
  { t: '없는 페이지', m: 'POST', p: '/api/projects', b: { action: 'editable', key: KEY2, pageId: '9:9' } },
  { t: '캡처 올리기(고친 것)', m: 'POST', p: '/api/shots', b: { fileKey: KEY2, nodeId: '3:4', name: '화면 A', w: 100, h: 200, by: '이름 (Figma)', png: tinyPng().toString('base64'), edit: true } },
  { t: '캡처 다시(요청받은 것)', m: 'POST', p: '/api/shots', b: { fileKey: KEY2, nodeId: '3:4', name: '화면 A', w: 100, h: 200, by: 'Claude', png: tinyPng().toString('base64') } },
  { t: '그림 아님', m: 'POST', p: '/api/shots', b: { fileKey: KEY2, nodeId: '3:4', png: 'AAAA' } },
  { t: '프로젝트 목록', m: 'GET', p: '/api/projects' },
  { t: '프레임 목록 읽기', m: 'GET', p: `/api/catalog?key=${KEY2}` },
];
STEPS.docs = [
  { t: '작업 기준 적용(정책서)', m: 'POST', p: '/api/guides', b: { action: 'apply', kind: 'policy', fileKey: KEY, guideId: 'policy', by: '시험' } },
  { t: '작업 기준 종류 다름', m: 'POST', p: '/api/guides', b: { action: 'apply', kind: 'guide', fileKey: KEY, guideId: 'policy', by: '시험' } },
  { t: '작업 기준 비우기(기준데이터)', m: 'POST', p: '/api/guides', b: { action: 'apply', kind: 'data', fileKey: KEY, guideId: '', by: '시험' } },
  { t: '문서 고치기(파일형)', m: 'POST', p: '/api/guides', b: { action: 'save', id: 'rules', file: 'schedule.md', md: '# 시험\r\n고친 내용\r\n', note: '시험', base: '', request: '시험 요청', jobId: '', by: 'Claude' } },
  { t: '문서 고치기(파일 안 정함)', m: 'POST', p: '/api/guides', b: { action: 'save', id: 'rules', md: 'x' } },
  // (기존 서버의 Sort-Object는 같은 시각이면 순서가 일정하지 않다 → 두 수정이 같은 초에 들지 않게 잠깐 쉰다)
  { t: '문서 고치기(UX가이드)', wait: 1200, m: 'POST', p: '/api/guides', b: { action: 'save', id: 'g20261028-brex-06-J003', md: '# 가이드\n시험', note: 'n', by: 'Claude' } },
  { t: '없는 문서', m: 'POST', p: '/api/guides', b: { action: 'save', id: 'nope', md: 'x' } },
  { t: '없는 팀에서 가져오기', m: 'POST', p: '/api/guides', b: { action: 'import', from: 'nope', ids: ['rules'] } },
  { t: '모르는 action', m: 'POST', p: '/api/guides', b: { action: 'nope' } },
];
STEPS.minutes = [
  { t: '새 회의록', m: 'POST', p: '/api/minutes', b: { action: 'save', date: '2026-11-11T10:00', title: '시험\n회의', attendees: '씨젠 - 가\n\n브렉스 - 나', body: '[주제]\r\n- 내용\r\n\r\n', by: 'Claude' }, save: { m1: (j) => j.item.id } },
  { t: '일시 틀림', m: 'POST', p: '/api/minutes', b: { action: 'save', date: '어제', title: 't' } },
  { t: '각자 작성', m: 'POST', p: '/api/minutes', b: { action: 'note', id: '$m1', body: '내 메모\r\n' } },
  { t: '요약 저장', m: 'POST', p: '/api/minutes', b: { action: 'save', id: '$m1', date: '2026-11-11 10:00', title: '시험 회의', attendees: '가', body: '정리본', summary: '가, 나', by: 'Claude' } },
  { t: '각자 작성 지우기', m: 'POST', p: '/api/minutes', b: { action: 'note', id: '$m1', body: '  ' } },
  { t: '회의록 목록', m: 'GET', p: '/api/minutes' },
  { t: '회의록 지우기', m: 'POST', p: '/api/minutes', b: { action: 'delete', id: '$m1' } },
  { t: '없는 회의록', m: 'POST', p: '/api/minutes', b: { action: 'note', id: 'm20990101-zzzzzz', body: 'x' } },
];
STEPS.misc = [
  { t: '참고 파일 올리기', m: 'POST', p: '/api/upload?name=' + encodeURIComponent('참고.md'), raw: () => Buffer.from('# 참고\n') },
  { t: '참고 파일 형식 틀림', m: 'POST', p: '/api/upload?name=a.exe', raw: () => Buffer.from('x') },
  { t: '이력 직접 남기기', m: 'POST', p: '/api/history', b: { action: 'add', by: '시험', doneBy: 'Claude', title: '채팅으로 고침', text: '자세히', fileKey: KEY, fileName: 'UX AI TEST', page: 'SH.L TEST', frame: 'LI-INS-01-T', nodeId: '2225:68179' } },
  { t: '이력 내용 없음', m: 'POST', p: '/api/history', b: { action: 'add' } },
  { t: '프로토타입 지우기', m: 'POST', p: '/api/prototypes', b: { action: 'delete', id: 'assay-pack' } },
  { t: '없는 프로토타입', m: 'POST', p: '/api/prototypes', b: { action: 'delete', id: 'nope' } },
];
STEPS.auth = [
  { t: '계정 추가', m: 'POST', p: '/api/accounts', b: { action: 'add', id: 'ABtest01', name: '시험 계정', pw: 'password1', teams: ['cureca', 'nope'], menus: ['workbench', 'guide', 'accounts'], writes: ['workbench', 'usage'], approves: ['pv', 'x'] } },
  { t: '계정 추가(같은 아이디)', m: 'POST', p: '/api/accounts', b: { action: 'add', id: 'abtest01', name: 'x', pw: 'password1' } },
  { t: '계정 추가(비밀번호 짧음)', m: 'POST', p: '/api/accounts', b: { action: 'add', id: 'abtest02', name: 'x', pw: 'short' } },
  { t: '계정 고치기', m: 'POST', p: '/api/accounts', b: { action: 'update', id: 'abtest01', name: '시험 계정2', menus: ['plan'], writes: ['plan'], teams: ['cureca'], active: true } },
  { t: '팀 추가', m: 'POST', p: '/api/accounts', b: { action: 'team-add', team: { id: 'abteam', name: '시험팀' } } },
  { t: '팀 추가(같은 이름)', m: 'POST', p: '/api/accounts', b: { action: 'team-add', team: { id: 'abteam2', name: '시험팀' } } },
  { t: '팀 이름 바꾸기', m: 'POST', p: '/api/accounts', b: { action: 'team-update', team: { id: 'abteam', name: '시험팀2' } } },
  { t: '팀 지우기', m: 'POST', p: '/api/accounts', b: { action: 'team-delete', team: { id: 'abteam' } } },
  { t: 'CURECA 팀 지우기', m: 'POST', p: '/api/accounts', b: { action: 'team-delete', team: { id: 'cureca' } } },
  { t: '계정 목록', m: 'GET', p: '/api/accounts' },
  { t: '시작 안내 저장', m: 'POST', p: '/api/setup', b: { user: '시험', autoWatch: false, checks: { s1: true } }, pick: (j) => j && j.state },
  { t: '모르는 실행', m: 'POST', p: '/api/setup/launch', b: { app: 'nope' } },
  { t: '시트 연결 주소 틀림', m: 'POST', p: '/api/sheet', b: { action: 'config', webapp: 'https://example.com', token: 't' } },
  { t: '시트 연결', m: 'POST', p: '/api/sheet', b: { action: 'config', webapp: 'https://script.google.com/macros/s/AKfyTEST/exec', token: 'tok', sheetUrl: 'https://docs.google.com/x', wbsGid: '1', minutes: '회의', cols: { a: 'b' } } },
  { t: 'Azure 연결', m: 'POST', p: '/api/sheet', b: { action: 'config', provider: 'azure', azure: { org: 'https://dev.azure.com/org/', project: 'P', scope: '', startField: 's', endField: 'e', doneStates: 'Done' } } },
  { t: 'Azure 토큰', m: 'POST', p: '/api/sheet', b: { action: 'pat', pat: 'secret' } },
  { t: '시트 연결 정보', m: 'GET', p: '/api/sheet' },
  { t: '탭 열림', m: 'POST', p: '/api/alive', b: { id: 'tab-abcdef' } },
  { t: '탭 닫힘', m: 'POST', p: '/api/bye', b: { id: 'tab-abcdef' } },
  { t: '로그인(틀림)', m: 'POST', p: '/api/login', b: { id: 'abtest01', pw: 'wrongpass' } },
  { t: '로그인', m: 'POST', p: '/api/login', b: { id: 'abtest01', pw: 'password1' } },
  { t: '내 정보', m: 'GET', p: '/api/me' },
  { t: '비밀번호 바꾸기', m: 'POST', p: '/api/me/password', b: { current: 'password1', next: 'password2' } },
  { t: '바꾼 비밀번호로 로그인', m: 'POST', p: '/api/login', b: { id: 'abtest01', pw: 'password2' } },
  { t: '팀 고르기', m: 'POST', p: '/api/me/team', b: { team: 'cureca' } },
  { t: '로그아웃', m: 'POST', p: '/api/logout', b: {} },
];
// 사본 밖(PC별 설정)도 비교
const EXTRA = ['setup.json', 'azure_pat.json'].map((n) => [n, path.join(BASE, 'A_local', 'UX_AI_TEST_Workbench', n), path.join(BASE, 'B_local', 'UX_AI_TEST_Workbench', n)]);
// 비교할 파일 위치(사용량 기록은 usage.ps1이 Claude 기록을 읽어 쓰므로 뺀다)
const WATCH = ['workbench', 'projects', 'prototypes', '.history/entries', '.history/shots', '.history/attach', '.history/guides', '.history/minutes', '.history/accounts', '.history/config'];

(async () => {
  const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : null;
  let ok = 0, bad = 0;
  for (const [group, steps] of Object.entries(STEPS)) {
    if (only && only !== group) continue;
    console.log(`\n[${group}]`);
    for (const s of steps) {
      const rs = [];
      if (s.wait) await new Promise((r) => setTimeout(r, s.wait));
      for (const side of SIDES) { const r = await call(side, s.m, s.p, sub(s.b, side.v), s.raw ? s.raw() : null); rs.push(r); if (s.save && r.json) for (const [k, f] of Object.entries(s.save)) { try { side.v[k] = f(r.json); } catch (e) {} } }
      const [a, b] = rs; const diffs = [];
      if (s.pick) { a.json = s.pick(a.json); b.json = s.pick(b.json); }
      if (a.code !== b.code) diffs.push(`상태 A ${a.code} / B ${b.code}`);
      if (a.json !== undefined || b.json !== undefined) { if (!same(a.json, b.json)) diffs.push('응답 다름: ' + where(a.json, b.json, '', []).join(' | ')); }
      else if (norm(a.text) !== norm(b.text)) diffs.push('응답 글 다름');
      if (diffs.length && s.known) { ok++; console.log(`  의도  ${s.t} — ${s.known}`); } else if (diffs.length) { bad++; console.log(`  다름  ${s.t}\n        - ${diffs.join('\n        - ')}`); } else { ok++; console.log(`  같음  ${s.t}`); }
    }
  }
  await new Promise((r) => setTimeout(r, 1500));
  // 바뀐 파일 비교
  const ca = changed(SIDES[0].root, WATCH.filter((w) => !w.includes('.'))), cb = changed(SIDES[1].root, WATCH.filter((w) => !w.includes('.')));
  for (const w of WATCH) { if (w.includes('.json')) { for (const [c, side] of [[ca, SIDES[0]], [cb, SIDES[1]]]) { const f = path.join(side.root, w); if (fs.existsSync(f) && fs.statSync(f).mtimeMs > START) c[w] = f; } } else { Object.assign(ca, changed(SIDES[0].root, [w])); Object.assign(cb, changed(SIDES[1].root, [w])); } }
  const skip = (r) => /\.history_sync|\.agent|\.plan_usage|\/_tmp\/|\.sheet_cache|\.update\.json|\.installed/.test(r);
  const nk = (o) => { const x = {}; for (const [k, v] of Object.entries(o)) x[norm(k)] = v; return x; }; Object.assign(ca, {}); const na = nk(ca), nb = nk(cb); for (const k of Object.keys(ca)) delete ca[k]; for (const k of Object.keys(cb)) delete cb[k]; Object.assign(ca, na); Object.assign(cb, nb);
  const keys = [...new Set(Object.keys(ca).concat(Object.keys(cb)))].filter((r) => !skip(r)).sort();
  console.log(`\n[바뀐 파일 ${keys.length}개]`);
  for (const r of keys) {
    const fa = ca[r], fb = cb[r];
    if (!fa || !fb) { bad++; console.log(`  다름  ${r}: ${fa ? 'B에 없음' : 'A에 없음'}`); continue; }
    let eq;
    if (/\.json$/i.test(r)) { let ja, jb; try { ja = JSON.parse(fs.readFileSync(fa, 'utf8').replace(/^﻿/, '')); jb = JSON.parse(fs.readFileSync(fb, 'utf8').replace(/^﻿/, '')); eq = same(ja, jb); } catch (e) { eq = false; } }
    else eq = fs.readFileSync(fa).equals(fs.readFileSync(fb));
    if (eq) { ok++; console.log(`  같음  ${r}`); } else { bad++; console.log(`  다름  ${r} ` + (/\.json$/i.test(r) ? where(readJ(fa), readJ(fb), '', []).join(' | ') : '')); }
  }
  for (const [n, fa, fb] of EXTRA) { const ea = fs.existsSync(fa), eb = fs.existsSync(fb); if (!ea && !eb) continue; const eq = ea && eb && same(readJ(fa), readJ(fb)); if (eq) { ok++; console.log(`  같음  (PC별) ${n}`); } else { bad++; console.log(`  다름  (PC별) ${n} ` + (ea && eb ? where(readJ(fa), readJ(fb), '', []).join(' | ') : (ea ? 'B에 없음' : 'A에 없음'))); } }
  console.log(`\n같음 ${ok} · 다름 ${bad}`);
  process.exitCode = bad ? 1 : 0;
})();
