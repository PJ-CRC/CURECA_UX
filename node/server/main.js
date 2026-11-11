// UX AI TEST Workbench 서버 (Node.js) — 기존 guide_server.ps1 · guide_server_mac.pl을 한 벌로 옮기는 중
//  - 기존 서버(8765)와 별개로 돈다(기본 8766). 화면(pages/) · 데이터(projects/ · .history/ · workbench/*.json) 위치와 형식은 기존과 같다
//  - --readonly: 쓰기 API · 깃 동기화 · 감시를 끈다. 옮기는 동안 기존 서버와 같은 데이터를 읽기만 하며 응답을 비교할 때 쓴다
//  - --setup-dir: PC별 설정(setup.json) 폴더를 바꾼다(비교 시험용. 기본 %LOCALAPPDATA% · ~/Library/Application Support 아래 UX_AI_TEST_Workbench)
//  - 옮긴 순서 · 남은 것: node/README.md
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const core = require('./core');

const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf('--' + name); return i >= 0 ? (args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true) : def; };
const C = core.init({ port: parseInt(opt('port', '8766'), 10), root: path.resolve(opt('root', path.join(__dirname, '..', '..'))), readonly: !!opt('readonly', false),
  setupDir: typeof opt('setup-dir', '') === 'string' && opt('setup-dir', '') ? opt('setup-dir', '') : '' });
// 기록 파일(--log): 다시 켤 때마다 새로 쓰고, 지난 실행 기록은 .prev.log로 남긴다(왜 꺼졌는지 볼 수 있게). 화면 출력도 그대로 남긴다
const LOG = typeof opt('log', '') === 'string' ? opt('log', '') : '';
if (LOG) {
  try { fs.mkdirSync(path.dirname(LOG), { recursive: true }); if (fs.existsSync(LOG)) fs.renameSync(LOG, LOG.replace(/\.log$/i, '') + '.prev.log'); } catch (e) {}
  const ws = fs.createWriteStream(LOG, { flags: 'a' }); const w = (s) => { try { ws.write(s + '\n'); } catch (e) {} };
  for (const k of ['log', 'error']) { const o = console[k].bind(console); console[k] = (...a) => { const s = a.map(String).join(' '); w(s); try { o(s); } catch (e) {} }; }
}
// 잡지 못한 오류로 서버가 꺼지지 않게(기록만)
process.on('uncaughtException', (e) => console.error(`  [${core.now()}] 오류(잡지 못함): ${e && e.stack ? e.stack : e}`));
process.on('unhandledRejection', (e) => console.error(`  [${core.now()}] 오류(잡지 못함): ${e && e.stack ? e.stack : e}`));
const apis = require('./api');   // 옮긴 API(읽기 · 쓰기)

const TYPES = { '.html': 'text/html; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp',
  '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json; charset=utf-8', '.md': 'text/plain; charset=utf-8', '.csv': 'text/plain; charset=utf-8',
  '.gs': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' };

function send(res, code, type, body, extra) {
  if (res.headersSent) return;
  res.writeHead(code, Object.assign({ 'Content-Type': type, 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Cache-Control': 'no-store' }, extra || {}));
  res.end(body);
}
const sendJson = (res, code, obj) => send(res, code, 'application/json; charset=utf-8', JSON.stringify(obj));
const redirect = (res, to) => send(res, 302, 'text/plain', '', { Location: to });
function readRaw(req, max) {
  return new Promise((ok, no) => { const b = []; let n = 0; req.on('data', (d) => { n += d.length; if (max && n > max) { no(new Error('too large')); req.destroy(); return; } b.push(d); }); req.on('end', () => ok(Buffer.concat(b))); req.on('error', no); });
}
async function readBody(req) { return (await readRaw(req)).toString('utf8').replace(/^﻿/, ''); }
async function bodyJson(req) { const t = (await readBody(req)).trim(); if (!t) return {}; try { return JSON.parse(t); } catch (e) { throw new Error('잘못된 요청 형식입니다.'); } }

// 정적 파일: 기존 서버와 같은 규칙. 폴더 이름 없는 요청은 pages/를 먼저 본다(/Work.html → pages/Work.html), 루트 밖 · 숨김 데이터는 내보내지 않는다
function serveStatic(res, rel) {
  if (rel === '') rel = 'Common_UX_Guide.html';
  if (/(^|\/)\.\.(\/|$)/.test(rel) || rel.includes('\0')) return send(res, 404, 'text/plain', 'not found');
  let f = path.join(C.root, rel);
  if (!rel.includes('/')) { const pf = path.join(C.root, 'pages', rel); if (fs.existsSync(pf) && fs.statSync(pf).isFile()) f = pf; }
  if (!path.resolve(f).startsWith(C.root + path.sep)) return send(res, 404, 'text/plain', 'not found');
  fs.stat(f, (err, st) => {
    if (err || !st.isFile()) return send(res, 404, 'text/plain', 'not found');
    fs.readFile(f, (e2, buf) => e2 ? send(res, 500, 'text/plain', 'read error') : send(res, 200, TYPES[path.extname(f).toLowerCase()] || 'application/octet-stream', buf));
  });
}

// 메뉴별 API(읽기 권한 확인) · 쓰기 API(쓰기 권한 확인) — 기존 서버의 $api · $wmap과 같게
const API_MENU = { '/api/usage': 'usage', '/api/prototypes': 'proto', '/api/accounts': 'accounts', '/api/sheet': 'plan', '/api/sheet/data': 'plan', '/api/minutes': 'plan',
  '/api/plan/files': 'plan', '/api/guides/gitlog': 'guide', '/api/guides/gitfile': 'guide' };
const API_WRITE = { '/api/requests': ['workbench', 'history', 'guide', 'plan'], '/api/attach': ['workbench'], '/api/projects': ['workbench'], '/api/catalog': ['workbench'],
  '/api/shots': ['workbench'], '/api/upload': ['guide'], '/api/prototypes': ['proto'], '/api/sheet': ['plan'], '/api/minutes': ['plan'] };

async function handle(req, res) {
  let u; try { u = new URL(req.url, 'http://localhost'); } catch (e) { return send(res, 400, 'text/plain', 'bad url'); }
  let p; try { p = decodeURIComponent(u.pathname); } catch (e) { p = u.pathname; }
  const q = u.searchParams, M = req.method;
  if (M === 'OPTIONS') return send(res, 204, 'text/plain', '');
  // Figma 플러그인(iframe)은 Origin이 'null'로 온다 → 플러그인이 마지막으로 닿은 시각(자동 캡처 · 시작 안내 4단계)
  if (String(req.headers.origin) === 'null' && p.startsWith('/api/')) C.pluginSeen = Date.now();
  // 쓰기(POST)는 이 서버에서 연 페이지 · Figma 플러그인(Origin null) · Origin 없는 호출(Claude · curl)만
  if (M === 'POST' && p.startsWith('/api/')) { const o = String(req.headers.origin || ''); if (o && o !== 'null' && o !== `http://localhost:${C.port}`) return sendJson(res, 403, { error: '허용되지 않은 요청입니다(다른 사이트).' }); }
  if (p === '/api/node') return sendJson(res, 200, { ok: true, server: 'node', node: process.version, port: C.port, root: C.root, readonly: C.readonly, setupDir: C.setupDir });

  // ── 로그인 · 메뉴 권한(기존 서버 순서 그대로) ──
  if (p.startsWith('/.history/config') || p.startsWith('/.history/accounts')) return send(res, 404, 'text/plain', 'not found');
  if (p === '/api/me' && M === 'GET') return sendJson(res, 200, core.meInfo());
  if (p === '/api/login' && M === 'POST') {
    const b = await bodyJson(req); const a = core.readAccount(b.id);
    if (!a || a.active === false || !core.testPw(a, b.pw)) { await new Promise((r) => setTimeout(r, 600)); return sendJson(res, 400, { error: '아이디 또는 비밀번호가 맞지 않습니다.' }); }
    if (C.readonly) return sendJson(res, 400, { error: '읽기 전용 모드라 로그인 상태를 저장하지 않습니다(비밀번호 확인은 맞음).' });
    core.writeLogin(a); return sendJson(res, 200, core.meInfo());
  }
  if (p === '/api/logout' && M === 'POST') { if (!C.readonly) core.writeLogin(null); return sendJson(res, 200, { ok: true }); }
  // 지금 보는 팀 바꾸기(이 PC만, 소속 팀만)
  if (p === '/api/me/team' && M === 'POST') {
    if (core.authRequired() && !core.currentUser()) return sendJson(res, 401, { error: '로그인이 필요합니다.', login: true });
    const b = await bodyJson(req);
    try { if (C.readonly) throw new Error('읽기 전용 모드입니다.'); core.setMyTeam(String(b.team || '')); } catch (e) { return sendJson(res, 400, { error: e.message }); }
    return sendJson(res, 200, core.meInfo());
  }
  const browser = core.isBrowser(req);
  // 요청의 팀: 화면 = 이 PC에서 고른 팀, Claude · curl은 ?team=
  let tctx = core.currentTeam(); const qTeam = String(q.get('team') || '');
  if (qTeam && core.teamIds().includes(qTeam) && (!browser || !core.authRequired() || core.myTeams().includes(qTeam))) tctx = qTeam;
  const T = core.teamCtx(tctx);
  if (/^\/\.history\/teams\/[^/]+\/config(\/|$)/.test(p)) return send(res, 404, 'text/plain', 'not found');
  let m = /^\/\.history\/teams\/([^/]+)\//.exec(p);
  if (browser && core.authRequired() && m && !core.myTeams().includes(m[1])) return send(res, 404, 'text/plain', 'not found');
  m = /^\/\.history\/(guides|minutes)(\/.*)?$/.exec(p);
  if (browser && T.team !== 'cureca' && m) p = `/.history/teams/${T.team}/${m[1]}${m[2] || ''}`;
  if (p === '/start' && core.authRequired()) {
    const mi = core.meInfo(); let to = '/Login.html';
    if (mi.user) { to = '/' + mi.first; if (!core.readSetup().done && mi.allowed.includes('setup')) to = '/Setup.html'; }
    return redirect(res, to);
  }
  if ((browser || p.startsWith('/api/accounts') || p === '/api/me/password') && core.authRequired()) {
    const rel0 = p.replace(/^\/+/, '') || 'Common_UX_Guide.html';
    const open = ['Login.html', 'appnav.css', 'appnav.js', 'VERSION'].includes(rel0) || ['/api/alive', '/api/bye'].includes(p) || (p === '/api/setup/launch' && core.needSync()) ||
      (/\.(css|js|png|jpe?g|svg|ico|woff2?)$/i.test(rel0) && !rel0.startsWith('prototypes/'));
    if (!open) {
      const usr = core.currentUser();
      if (!usr) { if (p.startsWith('/api/')) return sendJson(res, 401, { error: '로그인이 필요합니다.', login: true }); return redirect(res, '/Login.html?next=' + encodeURIComponent(u.pathname + u.search)); }
      const allowed = core.userMenus(usr); let need = null;
      for (const mm of core.MENUS) { if (mm.pages.includes(rel0) || (mm.key === 'proto' && rel0.startsWith('prototypes/'))) { need = mm.key; break; } }
      if (API_MENU[p]) need = API_MENU[p];
      if (need && !allowed.includes(need)) { if (p.startsWith('/api/')) return sendJson(res, 403, { error: '이 메뉴를 쓸 권한이 없습니다.' }); return redirect(res, '/' + core.meInfo().first); }
      if (M === 'POST' && browser && API_WRITE[p] && !core.canWrite(req, API_WRITE[p])) return sendJson(res, 403, { error: core.roMsg(API_WRITE[p][0]) });
    }
  }
  // 계정을 쓰지 않는 곳: 시작 안내를 마쳤으면 UX 문서, 아니면 시작 안내
  if (p === '/start') return redirect(res, core.readSetup().done ? '/Common_UX_Guide.html' : '/Setup.html');
  if (p.startsWith('/api/')) {
    const h = apis.find(p, M);
    if (!h) return sendJson(res, 501, { error: '아직 Node 서버로 옮기지 않은 기능입니다: ' + M + ' ' + p });
    if (M === 'POST' && C.readonly && !h.readSafe) return sendJson(res, 403, { error: '읽기 전용 모드(--readonly)라 바꾸는 요청은 받지 않습니다.' });
    try { const out = await h.fn({ req, res, q, T, body: M === 'POST' ? () => bodyJson(req) : null, raw: (max) => readRaw(req, max), browser, qTeam, send, sendJson });
      if (out !== undefined && !res.headersSent) sendJson(res, 200, out); }
    catch (e) { if (!res.headersSent) sendJson(res, 400, { error: e.message }); }
    return;
  }
  return serveStatic(res, p.replace(/^\/+/, ''));
}

const server = http.createServer((req, res) => { handle(req, res).catch((e) => { try { sendJson(res, 400, { error: e.message }); } catch (x) {} }); });
server.on('error', (e) => { console.error(e.code === 'EADDRINUSE' ? `  포트 ${C.port}를 이미 다른 프로그램이 쓰고 있습니다.` : '  서버 오류: ' + e.message); process.exit(1); });
// 브라우저가 응답 도중 끊어도 서버는 계속(그 연결만 닫힌다)
server.on('clientError', (err, sock) => { try { sock.destroy(); } catch (e) {} });
// 내 PC 안에서만(127.0.0.1). localhost가 IPv6(::1)로 먼저 풀리는 브라우저 · 도구도 바로 닿게 ::1에도 같은 서버를 연다(없으면 그냥 넘어감)
const server6 = http.createServer((req, res) => { handle(req, res).catch((e) => { try { sendJson(res, 400, { error: e.message }); } catch (x) {} }); });
server6.on('error', () => {}); server6.on('clientError', (err, sock) => { try { sock.destroy(); } catch (e) {} });
server6.listen(C.port, '::1');
server.listen(C.port, '127.0.0.1', () => {
  console.log(`\n  UX AI TEST Workbench (Node ${process.version}) — http://localhost:${C.port}/`);
  console.log(`  데이터 폴더: ${C.root}${C.readonly ? '  (읽기 전용: 쓰기 · 깃 동기화 · 감시 꺼짐)' : ''}`);
  console.log(`  PC별 설정: ${C.setupFile}\n`);
  require('./background')(apis.helpers);   // 켤 때 할 일 · 깃 동기화 · 감시 자동 시작 · 탭 닫힘 끄기(--readonly면 안 함)
});
