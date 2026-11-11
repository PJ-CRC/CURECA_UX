// 옮긴 API 목록: 경로 · 방법마다 처리 함수. 아직 없는 것은 main.js가 501로 답한다
//  처리 함수는 { req, res, q, T(요청의 팀 위치), body(), browser, send, sendJson }를 받아 JSON으로 보낼 값을 돌려준다(직접 보냈으면 undefined)
//  readSafe: --readonly에서도 받는 POST(데이터를 바꾸지 않는 것)
'use strict';
const fs = require('fs');
const path = require('path');
const core = require('./core');
const { C } = core;

const routes = [];
function on(method, p, fn, opts) { routes.push(Object.assign({ method, path: p, fn }, opts || {})); }
function find(p, method) { return routes.find((r) => r.method === method && (r.path === p || (r.path instanceof RegExp && r.path.test(p)))); }

// ── 프로젝트(Figma 파일) ──
const testKey = (k) => /^[A-Za-z0-9]{10,64}$/.test(String(k || ''));
const projDir = (k) => path.join(C.projRoot, k);
const readProj = (k) => core.readJson(path.join(projDir(k), 'project.json'));
const keyOf = (url) => { const m = /figma\.com\/(?:design|file|proto)\/([A-Za-z0-9]+)/.exec(String(url || '')); return m ? m[1] : ''; };
const workKey = () => keyOf(core.readSetup().figmaUrl);

// GET /api/requests: 수정 요청 목록 파일 그대로(없으면 빈 목록)
on('GET', '/api/requests', ({ res, send }) => {
  const t = core.readText(C.reqFile);
  send(res, 200, 'application/json; charset=utf-8', t != null ? t : '{"version":1,"items":[]}');
});

// GET /api/jobs?key=&kind=&status=: 작업 대기열(거르기). pluginSec = 플러그인이 마지막으로 닿은 지 몇 초(아직 옮기지 않아 null)
on('GET', '/api/jobs', ({ q }) => {
  const j = core.readJson(C.jobFile) || { version: 0, items: [] };
  let items = core.arr(j.items);
  for (const f of ['key', 'kind', 'status']) { const v = q.get(f); if (v) { const prop = f === 'key' ? 'fileKey' : f; items = items.filter((x) => x && x[prop] === v); } }
  return { version: j.version, items, pluginSec: C.pluginSeen ? Math.floor((Date.now() - C.pluginSeen) / 1000) : null };
});

// GET /api/projects: 등록된 프로젝트 목록 + 시작 안내 작업 링크의 파일
on('GET', '/api/projects', () => {
  const list = [];
  let dirs = []; try { dirs = fs.readdirSync(C.projRoot, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name); } catch (e) {}
  for (const d of dirs) {
    const p = readProj(d); if (!p) continue;
    let shots = 0; try { shots = fs.readdirSync(path.join(C.projRoot, d, 'shots'), { withFileTypes: true }).filter((x) => x.isFile()).length; } catch (e) {}
    list.push({ key: p.key, name: p.name, link: p.link, editablePageId: p.editablePageId, editablePageName: p.editablePageName, uxGuideLink: p.uxGuideLink,
      hasCatalog: core.exists(path.join(C.projRoot, d, 'catalog.json')), shots, isDefault: p.key === workKey() });
  }
  return { defaultKey: workKey(), workKey: workKey(), projects: list };
});

// GET /api/catalog?key=: 프레임 목록 파일 그대로
on('GET', '/api/catalog', ({ q, res, send, sendJson }) => {
  const key = q.get('key'); if (!testKey(key)) throw new Error('잘못된 파일 키입니다.');
  const f = path.join(projDir(key), 'catalog.json');
  if (!core.exists(f)) return sendJson(res, 404, { error: '이 파일의 프레임 목록이 아직 없습니다.' });
  send(res, 200, 'application/json; charset=utf-8', fs.readFileSync(f));
});

// ── 작업 이력 · 사용량(Read-Hist · Read-Usage) — 한 건 한 파일, 지금 팀 것만(예전 기록 = CURECA) ──
function readDirJson(dir) { return core.listJson(dir).map((n) => core.readJson(path.join(dir, n))).filter((x) => x != null); }
on('GET', '/api/history', ({ q, T }) => {
  const all = q.get('all') === '1';
  let items = readDirJson(C.histEntries); if (!all) items = items.filter((e) => core.itemTeam(e) === T.team);
  const st = core.readJson(C.syncStat);
  return { pc: C.pcName, pcSlug: C.pcSlug, team: all ? '' : T.team, syncing: !!(st && st.busy) || !!(helpers.isLoginOpen && helpers.isLoginOpen()), sync: st, items };
});
on('GET', '/api/usage', ({ T }) => {
  const items = readDirJson(C.histUsage).filter((u) => core.itemTeam(u) === T.team);
  // 요청 유형: 기록에 없으면(예전 기록) 같은 이름의 작업 이력에서
  for (const u of items) { if (u.reqId && !u.reqType) { const e = core.readJson(path.join(C.histEntries, String(u.id) + '.json')); u.reqType = e && e.type ? String(e.type) : ''; } }
  return { pc: C.pcName, pcSlug: C.pcSlug, pricing: core.readJson(path.join(C.root, 'workbench', 'pricing.json')), items };
});

// ── 프로토타입(이 PC에만) + 갱신 필요(stale): 맞춘 뒤(syncedAt) Figma에서 고쳐진 프레임(editAt) · 완료 요청이 실제로 고친 프레임 ──
// PowerShell Sort-Object -Descending과 같은 순서: 큰 값이 먼저, 값이 같으면 원래(폴더) 순서 그대로(안정 정렬)
const sortDescPS = (list, f) => list.slice().sort((a, b) => { const x = f(a), y = f(b); return x < y ? 1 : x > y ? -1 : 0; });
const tms = (s) => { const t = Date.parse(String(s || '')); return isNaN(t) ? null : t; };
on('GET', '/api/prototypes', () => {
  const list = []; let dirs = [];
  try { dirs = fs.readdirSync(C.protoRoot, { withFileTypes: true }).filter((d) => d.isDirectory() && !d.name.startsWith('_')).map((d) => d.name); } catch (e) { return { items: [] }; }
  const hist = readDirJson(C.histEntries).filter((e) => e.kind === 'request' && e.status === '완료');
  const shotMeta = {};
  for (const d of dirs) {
    const m = core.readJson(path.join(C.protoRoot, d, 'meta.json')); if (!m) continue;
    const k = String(m.fileKey || '');
    if (k && !(k in shotMeta)) shotMeta[k] = core.readJson(path.join(projDir(k), 'shots_meta.json'));
    const since = tms(m.syncedAt) ?? -Infinity, stale = [];
    for (const fr of core.arr(m.frames)) {
      if (!fr) continue; let why = '', at = '';
      const s = shotMeta[k] ? shotMeta[k][fr.nodeId] : null;
      if (s && s.editAt && (tms(s.editAt) ?? -Infinity) > since) { why = 'Figma에서 고쳐짐'; at = String(s.editAt); }
      const h = hist.find((e) => {
        if (String(e.fileKey || '') !== k) return false;
        const fs2 = core.arr(e.frames).filter((x) => x && x.nodeId).map((x) => String(x.nodeId));
        if (!(fs2.length ? fs2.includes(String(fr.nodeId)) : e.nodeId === fr.nodeId)) return false;
        return (tms(e.at) ?? -Infinity) > since;
      });
      if (h) { why = `${h.by == null ? '' : h.by} ${h.reqId == null ? '' : h.reqId} 수정 완료`; at = String(h.at); }
      if (why) stale.push({ nodeId: fr.nodeId, name: fr.name, why, at });
    }
    m.stale = stale; m.dir = 'prototypes/' + d; list.push(m);
  }
  return { items: sortDescPS(list, (x) => String(x.updatedAt || '')) };
});

// ── 회의록(Read-Minute · Read-Notes · Note-Key) — {팀}/minutes/{id}.md, 각자 작성 {id}.notes/{작성자}.md ──
function readMinute(f) {
  let t = core.readText(f); if (t == null) return null; t = t.replace(/\r\n/g, '\n');
  const m = /^---\n([\s\S]*?)\n---\n?/.exec(t); if (!m) return null;
  const o = {};
  for (const l of m[1].split('\n')) { const k = /^([A-Za-z]+):\s?(.*)$/.exec(l); if (k) o[k[1]] = k[2].trim(); }
  if (!o.id) o.id = path.basename(f, path.extname(f));
  o.body = t.slice(m[0].length).replace(/\s+$/, '');
  return o;
}
function readNotes(minDir, id) {
  const nd = path.join(minDir, id + '.notes'); let names = [];
  try { names = fs.readdirSync(nd).filter((n) => n.toLowerCase().endsWith('.md')); } catch (e) { return []; }
  return names.map((n) => { const x = readMinute(path.join(nd, n)); return x ? { author: String(x.author || ''), authorId: x.authorId ? String(x.authorId) : path.basename(n, '.md'), updatedAt: String(x.updatedAt || ''), body: String(x.body || '') } : null; })
    .filter(Boolean).sort((a, b) => a.updatedAt.localeCompare(b.updatedAt));
}
function noteKey() { const u = core.currentUser(); return u && u.id ? String(u.id).toLowerCase() : C.pcSlug; }
on('GET', '/api/minutes', ({ T }) => {
  let names = []; try { names = fs.readdirSync(T.minDir).filter((n) => n.toLowerCase().endsWith('.md')); } catch (e) {}
  const list = names.map((n) => { const m = readMinute(path.join(T.minDir, n)); if (m) m.notes = readNotes(T.minDir, String(m.id)); return m; }).filter(Boolean);
  return { items: sortDescPS(list, (x) => String(x.date || '')), me: noteKey() };
});

// ── 일정 연결(Sheet-Conf) — 비밀값(token · 웹 앱 주소)은 내보내지 않는다. Azure 토큰은 이 PC에 있는지만 ──
on('GET', '/api/sheet', ({ req, T }) => {
  const cf = core.readJson(T.sheetConf) || {};
  const prov = cf.provider === 'azure' ? 'azure' : 'google';
  const pat = core.readJson(path.join(C.setupDir, 'azure_pat.json')) || {};
  return { provider: prov, azure: cf.azure === undefined ? null : cf.azure, azurePat: !!String(pat[T.team] || ''),
    configured: prov === 'azure' ? !!(cf.azure && cf.azure.org && cf.azure.project) : !!(cf.webapp && cf.token),
    sheetUrl: String(cf.sheetUrl || ''), wbsGid: String(cf.wbsGid || ''), minutes: String(cf.minutes || ''), cols: cf.cols === undefined ? null : cf.cols,
    by: String(cf.by || ''), at: String(cf.at || ''), canWrite: core.canWrite(req, ['plan']) };
});

// ── UX 문서(Read-Guides · Applied-Docs · Fill-Applied · Apply-Keys) ──
//  문서 = {팀}/guides/{id}/meta.json. 수정본 rev/{시각}_{PC}.md(+ .json), 파일형(format 'files')은 rev/{rev}/{파일}. 가장 최근 수정본이 지금 내용
//  작업 기준(이 PC만) = workbench/guide_apply(.{팀}).json, 아직 없는 파일은 시작 안내 파일(없으면 가장 최근 적용)의 문서로 채운다(filled)
const dirNames = (d) => { try { return fs.readdirSync(d, { withFileTypes: true }).filter((x) => x.isDirectory()).map((x) => x.name); } catch (e) { return []; } };
const fileNames = (d) => { try { return fs.readdirSync(d, { withFileTypes: true }).filter((x) => x.isFile()).map((x) => x.name); } catch (e) { return []; } };
// PowerShell 기본 정렬(대소문자 무시)과 같게
const ciSort = (a) => a.slice().sort((x, y) => { const X = x.toLowerCase(), Y = y.toLowerCase(); return X < Y ? -1 : X > Y ? 1 : 0; });
function applyKeys(extra) {
  const ks = []; const wk = workKey(); if (testKey(wk)) ks.push(wk);
  for (const d of dirNames(C.projRoot)) if (testKey(d) && core.exists(path.join(C.projRoot, d, 'project.json')) && !ks.includes(d)) ks.push(d);
  if (testKey(extra) && !ks.includes(extra)) ks.push(extra);
  return ks;
}
function appliedDocs(e) {
  const d = {}; if (!e) return d;
  if (e.docs) { for (const k of Object.keys(e.docs)) { const v = e.docs[k]; if (v && v.id) d[k] = v; } }
  else if (e.guideId) d.guide = { id: String(e.guideId), by: String(e.by || ''), at: String(e.at || '') };
  return d;
}
function fillApplied(applied) {
  let src = applied[workKey()];
  if (!Object.keys(appliedDocs(src)).length) { src = null; for (const k of Object.keys(applied)) { const e = applied[k]; if (Object.keys(appliedDocs(e)).length && (!src || String(e.at || '') > String(src.at || ''))) src = e; } }
  if (!src) return applied;
  const sd = appliedDocs(src);
  for (const k of applyKeys('')) {
    const docs = appliedDocs(applied[k]); let n = 0;
    for (const t of Object.keys(sd)) if (!(t in docs)) { docs[t] = sd[t]; n++; }
    if (!n && Object.prototype.hasOwnProperty.call(applied, k)) continue;
    const g = docs.guide;
    applied[k] = { fileKey: k, guideId: g ? String(g.id) : '', by: String(src.by || ''), pc: String(src.pc || ''), at: String(src.at || ''), docs, filled: true };
  }
  return applied;
}
function readGuides(T) {
  const list = [];
  for (const name of dirNames(T.guideRoot)) {
    if (name === '_apply') continue;
    const dd = path.join(T.guideRoot, name), m = core.readJson(path.join(dd, 'meta.json')); if (!m) continue;
    const isFiles = m.format === 'files', rd = path.join(dd, 'rev'), revs = [];
    const files = fileNames(rd);
    const bases = ciSort([...new Set(files.filter((n) => !/\.check-/.test(n) && /\.(md|json)$/i.test(n)).map((n) => n.replace(/\.(md|json)$/i, '')))]);
    for (const rn of bases) {
      const info = core.readJson(path.join(rd, rn + '.json'));
      if (!isFiles && !core.exists(path.join(rd, rn + '.md'))) continue;
      if (isFiles && !(info && info.file && core.exists(path.join(rd, rn, String(info.file))))) continue;
      const checks = files.filter((n) => n.startsWith(rn + '.check-') && n.toLowerCase().endsWith('.json')).map((n) => core.readJson(path.join(rd, n))).filter((x) => x != null);
      const s = (k) => (info && info[k] != null ? String(info[k]) : '');
      revs.push({ rev: rn, at: s('at'), by: s('by'), note: s('note'), base: s('base'), req: s('req'), jobId: s('jobId'), file: s('file'), checks });
    }
    const last = revs.length ? revs[revs.length - 1] : null;
    if (isFiles) {
      const fdir = Object.prototype.hasOwnProperty.call(m, 'filesDir') ? String(m.filesDir == null ? '' : m.filesDir) : 'files';
      m.fileList = core.arr(m.files).map((p) => {
        let cur = fdir ? `${fdir}/${p}` : String(p), cr = '';
        for (const r of revs) if (r.file === p) { cur = `rev/${r.rev}/` + String(p).replace(/\.\.\//g, '_up/'); cr = r.rev; }
        return { path: String(p), mdPath: `${T.guideRel}/${name}/${cur}`, rev: cr };
      });
      m.mdPath = '';
    } else m.mdPath = last ? `${T.guideRel}/${name}/rev/${last.rev}.md` : `${T.guideRel}/${name}/guide.md`;
    m.rev = last ? last.rev : ''; m.revs = revs;
    if (last && last.at) m.updatedAt = last.at;
    list.push(m);
  }
  const applied = fillApplied(core.readJson(T.guideApply) || {});
  return { items: sortDescPS(list, (x) => String(x.updatedAt || '')), applied };
}
on('GET', '/api/guides', ({ T }) => readGuides(T));

// ── 시작 안내(Get-SetupEnv · Agent-Info · Find-Claude · Find-ClaudeCode · Find-Git) ──
const { spawnSync } = require('child_process');
const W = process.platform === 'win32', LAD = process.env.LOCALAPPDATA || '';
function onPath(cmd) {
  const exts = W ? ['.exe', '.cmd', '.bat', ''] : [''];
  // 윈도우 앱 실행 별칭(예: WindowsApps\winget.exe)은 stat이 실패하므로 lstat으로 본다
  for (const d of String(process.env.PATH || '').split(path.delimiter)) for (const e of exts) { if (!d) continue; const f = path.join(d, cmd + e); try { if (!fs.lstatSync(f).isDirectory()) return f; } catch (x) {} }
  return null;
}
let claudeApp; // Claude 데스크톱 앱(한 번 찾으면 기억)
function findClaude() {
  if (claudeApp) return claudeApp;
  if (C.isMac) { if (core.exists('/Applications/Claude.app')) claudeApp = '/Applications/Claude.app'; return claudeApp || null; }
  try { const r = spawnSync('powershell', ['-NoProfile', '-Command', "(Get-AppxPackage -Name 'Claude' | Select-Object -First 1).PackageFamilyName"], { encoding: 'utf8', timeout: 15000, windowsHide: true });
    const fam = String(r.stdout || '').trim(); if (fam) { claudeApp = `shell:AppsFolder\\${fam}!Claude`; return claudeApp; } } catch (e) {}
  const exe = path.join(LAD, 'AnthropicClaude', 'claude.exe'); if (core.exists(exe)) claudeApp = exe;
  return claudeApp || null;
}
function findClaudeCode() {
  const set = String(core.readSetup().claudePath || ''); try { if (set && fs.statSync(set).isFile()) return set; } catch (e) {}
  const g = onPath('claude'); if (g) return g;
  if (W) {   // Claude 데스크톱 앱에 들어 있는 것(가장 최근)
    let best = null, bt = 0; const walk = (d, depth) => { if (depth > 8) return; let es = []; try { es = fs.readdirSync(d, { withFileTypes: true }); } catch (e) { return; }
      for (const x of es) { const f = path.join(d, x.name); if (x.isDirectory()) walk(f, depth + 1); else if (x.name.toLowerCase() === 'claude.exe' && /\\claude-code\\/i.test(f)) { const t = fs.statSync(f).mtimeMs; if (t > bt) { bt = t; best = f; } } } };
    walk(path.join(LAD, 'Claude-Data'), 0); return best;
  }
  return null;
}
function findGit() {
  if (C.isMac) { try { if (spawnSync('/usr/bin/xcode-select', ['-p'], { encoding: 'utf8' }).stdout.trim()) return true; } catch (e) {} return !!onPath('brew'); }
  if (onPath('git')) return true;
  return [path.join(process.env.ProgramFiles || '', 'Git', 'cmd'), path.join(LAD, 'Programs', 'Git', 'cmd')].some((d) => core.exists(path.join(d, 'git.exe')));
}
const ago = (t) => { const x = tms(t); return x == null ? null : Math.round((Date.now() - x) / 1000); };
function agentInfo() {
  const o = core.readJson(path.join(C.root, 'workbench', '.agent.json')), stopping = core.exists(path.join(C.root, 'workbench', '.agent_stop'));
  if (!o) return { alive: false, stopping, sec: null, status: '', msg: '', host: '' };
  const sec = ago(o.at); let alive = sec != null && sec < 150 && String(o.status) !== 'stopped';
  if (alive && !C.isMac && o.pid) { try { process.kill(parseInt(o.pid, 10), 0); } catch (e) { if (e.code === 'ESRCH') alive = false; } }
  return { alive, stopping: stopping && alive, sec, status: String(o.status || ''), msg: String(o.msg || ''), host: String(o.host || '') };
}
let envCache = null, envAt = 0;
function setupEnv() {
  if (envCache && Date.now() - envAt < 15000) return envCache;
  const hs = core.readJson(C.syncStat), hb = core.readJson(path.join(C.root, 'workbench', '.watcher.json')), cc = findClaudeCode();
  envCache = { root: C.root, manifest: path.join(C.root, 'figma_plugin', 'manifest.json'), os: C.isMac ? 'mac' : 'windows', computer: C.pcName,
    figmaInstalled: core.exists(C.isMac ? '/Applications/Figma.app' : path.join(LAD, 'Figma', 'Figma.exe')), claudeInstalled: !!findClaude(), claudeCli: !!cc,
    claudePath: String(cc || ''), claudeLook: String(process.env.PATH || ''), claudeSet: String(core.readSetup().claudePath || ''),
    pluginSeenSec: C.pluginSeen ? Math.round((Date.now() - C.pluginSeen) / 1000) : null, watcherSec: hb ? ago(hb.at) : null, watcherHost: hb ? String(hb.host || '') : '', agent: agentInfo(), gitInstalled: findGit(),
    winget: C.isMac ? false : !!onPath('winget'), historySync: hs, historySyncing: !!(hs && hs.busy) || !!(helpers.isLoginOpen && helpers.isLoginOpen()) };
  envAt = Date.now(); return envCache;
}
on('GET', '/api/setup', () => ({ state: core.readSetup(), env: setupEnv() }));

// ── 계정 목록(최고관리자, Public-Account · Team-Members) — 비밀번호 해시는 내보내지 않는다 ──
function publicAccount(a) {
  return { id: a.id, name: a.name, admin: !!a.admin, teams: core.userTeams(a), menus: a.admin ? core.userMenus(a) : core.arr(a.menus).filter((k) => core.MENU_KEYS.includes(k)),
    writes: core.userWrites(a), approves: core.userApproves(a), active: a.active !== false, createdAt: a.createdAt === undefined ? null : a.createdAt,
    updatedAt: a.updatedAt === undefined ? null : a.updatedAt, pwAt: a.pwAt === undefined ? null : a.pwAt };
}
on('GET', '/api/accounts', () => {
  const accts = core.readAccounts();
  const sorted = accts.slice().sort((x, y) => (x.admin ? 0 : 1) - (y.admin ? 0 : 1) || (String(x.id).toLowerCase() < String(y.id).toLowerCase() ? -1 : String(x.id).toLowerCase() > String(y.id).toLowerCase() ? 1 : 0));
  const teams = core.fillTeamColors(core.readTeams()).map((t) => ({ id: String(t.id), name: String(t.name || ''), legacy: !!t.legacy,
    members: accts.filter((a) => !a.admin && core.userTeams(a).includes(String(t.id))).length, createdAt: String(t.createdAt || ''), color: parseInt(t.color, 10) }));
  return { items: sorted.map(publicAccount), teams, teamMenus: core.TEAM_MENUS.slice(),
    menus: core.MENUS.filter((m) => core.MENU_KEYS.includes(m.key)).map((m) => ({ key: m.key, label: m.label, write: String(m.write || ''), team: core.TEAM_MENUS.includes(m.key) })),
    approvals: core.APPROVALS };
});

// ── 문서 · 회의록 파일 여러 개를 한 번에 읽기(화면 로딩용, 바꾸지 않음) — .history/guides · minutes 아래만 ──
on('POST', '/api/files', async ({ body }) => {
  const b = await body(); const files = {};
  const gRoot = path.resolve(C.histDir, 'guides') + path.sep, mRoot = path.resolve(C.histDir, 'minutes') + path.sep;
  for (const p of core.arr(b.paths).slice(0, 2000)) {
    let rp; try { rp = decodeURIComponent(String(p)); } catch (e) { rp = String(p); }
    rp = rp.replace(/\\/g, '/').replace(/^\/+/, '');
    if (!/^\.history\/(guides|minutes)\//.test(rp)) continue;
    const fp = path.resolve(C.root, rp);
    if (!(fp.startsWith(gRoot) || fp.startsWith(mRoot))) continue;
    if (/[\\/]config[\\/]/.test(fp) || /[\\/]accounts[\\/]/.test(fp)) continue;
    const t = core.readText(fp); if (t == null) continue;
    try { if (!fs.statSync(fp).isFile()) continue; } catch (e) { continue; }
    files[String(p)] = t;
  }
  return { files };
}, { readSafe: true });

// ── 작업 이력 캡처 사본 크기(1GB 넘으면 알림), 5분 기억 ──
let storeVal = null, storeAt = 0;
on('GET', '/api/storage', () => {
  if (!storeVal || Date.now() - storeAt >= 300000) {
    let sum = 0, cnt = 0;
    for (const d of [path.join(C.histDir, 'shots'), path.join(C.histDir, 'attach')]) for (const n of fileNames(d)) { try { sum += fs.statSync(path.join(d, n)).size; cnt++; } catch (e) {} }
    storeVal = { shotsBytes: sum, shotsCount: cnt, limitBytes: 1073741824 }; storeAt = Date.now();
  }
  return storeVal;
});

// ── 일정/작업 파일 목록(임시 정책 · 논의 · 고객 논의 · 결정 · 화면 수정) ──
const pad2 = (n) => String(n).padStart(2, '0');
const localIso = (d) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}T${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
on('GET', '/api/plan/files', ({ q, T }) => {
  const dir = String(q.get('dir') || '');
  if (!['provisional', 'pending', 'customer-agenda', 'decisions', 'screen-fixes'].includes(dir)) throw new Error('알 수 없는 폴더: ' + dir);
  const base = path.join(T.guideRoot, dir), out = [];
  // PowerShell Get-ChildItem -Recurse와 같은 순서: 그 폴더의 파일 → 하위 폴더(이름순)
  const walk = (d, rel) => {
    let es = []; try { es = fs.readdirSync(d, { withFileTypes: true }); } catch (e) { return; }
    const names = ciSort(es.map((x) => x.name));
    for (const n of names) { const x = es.find((e) => e.name === n); if (x.isFile() && n.toLowerCase().endsWith('.md')) { const r = rel ? `${rel}/${n}` : n; out.push({ path: `${dir}/${r}`, url: `.history/guides/${dir}/${r}`, closed: r.startsWith('closed/'), at: localIso(fs.statSync(path.join(d, n)).mtime) }); } }
    for (const n of names) { const x = es.find((e) => e.name === n); if (x.isDirectory()) walk(path.join(d, n), rel ? `${rel}/${n}` : n); }
  };
  walk(base, '');
  return { files: out };
});

// ── UX 문서 깃 기록(직접 수정 보기): gitlog · gitfile ──
function gitUtf8(a) {
  try { const r = spawnSync('git', a, { encoding: 'buffer', timeout: 15000, windowsHide: true, maxBuffer: 64 * 1024 * 1024 });
    return r.status === 0 ? r.stdout.toString('utf8') : ''; } catch (e) { return ''; }
}
on('GET', '/api/guides/gitlog', ({ q, T }) => {
  let since = String(q.get('since') || ''); if (!/^[0-9T:+.\-]{10,40}$/.test(since)) since = '';
  const gp = T.rel + 'guides';
  const a = ['-C', C.histDir, '-c', 'core.quotepath=false', 'log', '--name-status', '--date=iso-strict', '--pretty=format:@@%H|%ad|%an|%s', '-n', '300'];
  if (since) a.push('--since=' + since); a.push('--', gp);
  const items = []; let cur = null;
  for (let ln of gitUtf8(a).split('\n')) {
    ln = ln.replace(/\r$/, '');
    if (ln.startsWith('@@')) { const p = ln.slice(2).split('|'); cur = { hash: p[0], at: p[1], by: p[2], msg: p.length > 3 ? p.slice(3).join('|') : '', files: [] }; items.push(cur); continue; }
    if (!cur || !ln.trim()) continue;
    const c2 = ln.split('\t'), st = c2[0].slice(0, 1), fp = c2[c2.length - 1], from = c2.length > 2 ? c2[1] : '';
    if (!fp.startsWith(gp + '/') || /\/rev\/|\.check-[^/]*\.json$|\/meta\.json$/.test(fp) || fp === gp + '/_log.json') continue;
    const gl = gp.length + 1; cur.files.push({ st, path: fp.slice(gl), from: from ? from.slice(Math.min(gl, from.length)) : '' });
  }
  return { items: items.filter((x) => x.files.length) };
});
on('GET', '/api/guides/gitfile', ({ q, T, res, send }) => {
  const h = String(q.get('hash') || ''), fp = String(q.get('path') || '');
  if (!/^[0-9a-f]{7,40}$/.test(h) || !fp || /\.\./.test(fp) || /^(accounts|config)\//.test(fp)) throw new Error('잘못된 요청입니다.');
  const ref = q.get('prev') ? h + '^' : h;
  send(res, 200, 'text/plain; charset=utf-8', gitUtf8(['-C', C.histDir, 'show', `${ref}:${T.rel}guides/${fp}`]));
});

// ── 일정 시트 읽기(구글 Apps Script 웹 앱을 거침, Sheet-Check) — 받은 값은 사본(.sheet_cache)에 두고, 닿지 못하면 사본을 준다 ──
function sheetCheck(txt) {
  txt = String(txt).trim();
  if (!txt.startsWith('{')) {
    const plain = txt.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g, ' ');
    const m = />\s*([^<>]*(?:Error|Exception|행\))[^<>]*)</.exec(plain);
    if (m) throw new Error('시트 스크립트 오류: ' + m[1].trim().replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'") + ' — tools/google-sheet-bridge.gs 최신본으로 바꾸고 새 버전으로 다시 배포해 주세요.');
    throw new Error('웹 앱 응답이 JSON이 아닙니다. 배포의 액세스 권한이 「모든 사용자」인지, 웹 앱 주소가 /exec로 끝나는지 확인해 주세요.');
  }
  if (txt.startsWith('{"error"')) { let e = ''; try { e = String(JSON.parse(txt).error); } catch (x) {} throw new Error(e); }
  return txt;
}
on('GET', '/api/sheet/data', async ({ q, T, res, send, sendJson }) => {
  const sq = { action: 'read' };
  if (q.get('gid')) sq.gid = q.get('gid'); if (q.get('name')) sq.sheet = q.get('name'); if (q.get('style')) sq.style = 1;
  const ck = path.join(T.sheetCache, ((String(sq.gid || '') + '_' + String(sq.sheet || '')).replace(/[^A-Za-z0-9가-힣_-]/g, '_')) + '.json');
  if (q.get('cache') && core.exists(ck)) return send(res, 200, 'application/json; charset=utf-8', '{"cache":true,"cachedAt":"' + localIso(fs.statSync(ck).mtime) + '","data":' + core.readText(ck) + '}');
  const cf = core.readJson(T.sheetConf) || {};
  if (!cf.webapp || !cf.token) return sendJson(res, 502, { error: '구글 시트가 아직 연결되지 않았습니다. 일정/작업의 [시트 연결]에서 웹 앱 주소와 비밀값을 넣어 주세요.' });
  sq.token = String(cf.token);
  let txt;
  try {
    const r = await fetch(String(cf.webapp), { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(sq), redirect: 'follow', signal: AbortSignal.timeout(90000) });
    txt = sheetCheck(await r.text());
    if (!C.readonly) { fs.mkdirSync(path.dirname(ck), { recursive: true }); fs.writeFileSync(ck, txt, 'utf8'); }
  } catch (e) {
    const err = /시트|웹 앱/.test(e.message) ? e.message : '구글 시트에 닿지 못했습니다: ' + e.message;
    if (core.exists(ck)) return send(res, 200, 'application/json; charset=utf-8', '{"cached":true,"error":' + JSON.stringify(err) + ',"data":' + core.readText(ck) + '}');
    return sendJson(res, 502, { error: err });
  }
  send(res, 200, 'application/json; charset=utf-8', txt);
});

// 쓰기 API(2단계)
const helpers = { testKey, projDir, readProj, keyOf, workKey, readMinute, readNotes, noteKey, readGuides, applyKeys, appliedDocs, agentInfo, findClaudeCode, sheetCheck, setupEnv: () => { envCache = null; return setupEnv(); } };
require('./writes')(on, helpers);

module.exports = { helpers, find, routes, testKey, projDir, readProj, keyOf, workKey };
