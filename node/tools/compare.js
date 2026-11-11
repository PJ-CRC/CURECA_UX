// 기존 서버(8765)와 Node 서버(8766)의 응답 비교 — 같은 데이터에서 같은 요청을 보내 JSON을 비교한다
//  실행: node node/tools/compare.js [--old 8765] [--new 8766] [--browser]
//   --browser: 브라우저 화면처럼(Sec-Fetch-Site 머리글) 보내 로그인 · 메뉴 권한 검사까지 비교
//  끝나지 않은 기능(Node가 501)은 「아직」으로 세고, 다른 곳은 경로와 함께 보여 준다
'use strict';
const http = require('http');
const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf('--' + n); return i >= 0 ? (args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true) : d; };
const OLD = +opt('old', 8765), NEW = +opt('new', 8766), BROWSER = !!opt('browser', false);
// 값이 때마다 달라 비교하지 않는 곳(경로 끝 이름)
//  pluginSec · pluginSeenSec: 플러그인이 닿은 시각(서버마다 다름), claudeLook: 서버 프로그램의 PATH, sec: 상태 파일을 쓴 지 몇 초
const IGNORE = new Set(['pluginSec', 'pluginSeenSec', 'claudeLook', 'sec', 'watcherSec']);

const CASES = [
  '/api/me', '/api/projects', '/api/requests', '/api/jobs', '/api/jobs?kind=capture', '/api/jobs?status=%EC%99%84%EB%A3%8C',
  '/api/catalog?key=etCQFF3CTf1EA6C79d4BBf', '/api/catalog?key=bad', '/api/catalog?key=AAAAAAAAAAAAAAAAAAAA',
  '/api/history', '/api/history?all=1', '/api/usage', '/api/prototypes', '/api/guides', '/api/guides?team=cureca', '/api/minutes', '/api/sheet', '/api/setup',
  '/api/accounts', '/api/storage', '/api/plan/files?dir=provisional', '/api/plan/files?dir=pending', '/api/plan/files?dir=screen-fixes', '/api/plan/files?dir=bad',
  '/api/guides/gitlog', '/api/guides/gitlog?since=2026-11-05T00:00:00', '/api/guides/gitfile?hash=ccfa4a5&path=', '/api/guides/gitfile?hash=ccfa4a5&path=&prev=1',
  '/api/sheet/data?gid=425564699&cache=1',
  '/Work.html', '/Login.html', '/', '/.history/accounts/brex.json', '/.history/config/teams.json',
];

const POSTS = [['/api/files', { paths: ['.history/guides/rules/meta.json', '.history/guides/constitution.md', '.history/guides/../config/teams.json', '.history/minutes/nope.md'] }]];
function get(port, p, body) {
  return new Promise((ok) => {
    // 기존 서버(HttpListener)는 Host가 localhost일 때만 받는다(127.0.0.1이면 400)
    const h = Object.assign({ Host: `localhost:${port}` }, BROWSER ? { 'Sec-Fetch-Site': 'same-origin' } : {});
    const rq = http.request({ host: '127.0.0.1', port, path: p, method: body ? 'POST' : 'GET', headers: Object.assign(h, body ? { 'Content-Type': 'application/json' } : {}), timeout: 120000 }, (res) => {
      const b = []; res.on('data', (d) => b.push(d)); res.on('end', () => ok({ code: res.statusCode, type: String(res.headers['content-type'] || ''), loc: res.headers.location || '', body: Buffer.concat(b) }));
    }); rq.on('error', (e) => ok({ code: 0, err: e.message, body: Buffer.alloc(0) })); rq.end(body ? JSON.stringify(body) : undefined);
  });
}
// PowerShell ConvertTo-Json은 빈 배열 · 원소 하나 배열을 그대로 두지만, 혹시 다르면 그 자리를 보여 준다
function diff(a, b, at, out) {
  if (out.length > 12) return;
  const last = at.split('.').pop();
  if (IGNORE.has(last)) return;
  if (a === b) return;
  if (typeof a !== typeof b || Array.isArray(a) !== Array.isArray(b) || a === null || b === null || typeof a !== 'object') {
    if (JSON.stringify(a) !== JSON.stringify(b)) out.push(`${at || '(전체)'}: 기존 ${short(a)} / Node ${short(b)}`);
    return;
  }
  if (Array.isArray(a)) { if (a.length !== b.length) out.push(`${at}: 개수 기존 ${a.length} / Node ${b.length}`); for (let i = 0; i < Math.min(a.length, b.length); i++) diff(a[i], b[i], `${at}[${i}]`, out); return; }
  const ks = new Set(Object.keys(a).concat(Object.keys(b)));
  for (const k of ks) { if (IGNORE.has(k)) continue; if (!(k in a)) out.push(`${at}.${k}: 기존에 없음`); else if (!(k in b)) out.push(`${at}.${k}: Node에 없음`); else diff(a[k], b[k], at ? `${at}.${k}` : k, out); }
}
const short = (v) => { const s = JSON.stringify(v); return s === undefined ? 'undefined' : s.length > 80 ? s.slice(0, 77) + '…' : s; };
const parse = (buf) => { try { return JSON.parse(buf.toString('utf8').replace(/^﻿/, '')); } catch (e) { return undefined; } };

(async () => {
  let same = 0, todo = 0, bad = 0;
  console.log(`비교: 기존 :${OLD} ↔ Node :${NEW}${BROWSER ? ' (브라우저처럼)' : ''}\n`);
  for (const c of CASES.map((x) => [x]).concat(POSTS)) {
    const p = c[0], bd = c[1];
    const [o, n] = await Promise.all([get(OLD, p, bd), get(NEW, p, bd)]);
    if (n.code === 501) { todo++; console.log(`  아직  ${p}`); continue; }
    const out = [];
    if (o.code !== n.code) out.push(`상태 기존 ${o.code} / Node ${n.code}`);
    if (o.loc !== n.loc) out.push(`이동 기존 ${o.loc} / Node ${n.loc}`);
    const oj = parse(o.body), nj = parse(n.body);
    if (oj !== undefined || nj !== undefined) diff(oj, nj, '', out);
    else if (!o.body.equals(n.body)) out.push(`내용 다름(기존 ${o.body.length}B / Node ${n.body.length}B)`);
    if (out.length) { bad++; console.log(`  다름  ${p}\n        - ` + out.join('\n        - ')); } else { same++; console.log(`  같음  ${p}`); }
  }
  console.log(`\n같음 ${same} · 다름 ${bad} · 아직 ${todo}`);
  process.exitCode = bad ? 1 : 0;
})();
