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
// 링크 맨 앞이 Figma 주소여야 한다(2026-11-17 — 예전에는 중간에 figma.com/design/만 있어도 통과해 javascript: 링크도 저장됐다)
const keyOf = (url) => { const m = /^\s*(?:https?:\/\/)?(?:www\.)?figma\.com\/(?:design|file|proto)\/([A-Za-z0-9]+)/i.exec(String(url || '')); return m ? m[1] : ''; };
const workKey = () => keyOf(core.readSetup().figmaUrl);

// GET /api/requests: 수정 요청 목록 파일 그대로(없으면 빈 목록)
on('GET', '/api/requests', ({ res, send }) => {
  const t = core.readText(C.reqFile);
  send(res, 200, 'application/json; charset=utf-8', t != null ? t : '{"version":1,"items":[]}');
});

// GET /api/jobs?key=&kind=&status=: 작업 대기열(거르기). pluginSec = 플러그인이 마지막으로 닿은 지 몇 초(아직 옮기지 않아 null)
on('GET', '/api/jobs', ({ q, req }) => {
  // 플러그인이 캡처 작업을 물으면 자동 캡처 목록에서 대기열을 먼저 채운다(writes.js autoFill)
  if (q.get('kind') === 'capture' && String(req.headers.origin) === 'null' && helpers.autoFill) { try { helpers.autoFill(q.get('key')); } catch (e) {} }
  // 어느 파일에 플러그인이 켜져 있는지(파일마다 마지막으로 물은 시각) — 비교 때 ②가 열려 있으면 ②도 읽게(2026-11-17)
  if (String(req.headers.origin) === 'null' && testKey(q.get('key') || '')) { C.pluginKeys = C.pluginKeys || {}; C.pluginKeys[q.get('key')] = Date.now(); }
  const j = core.readJson(C.jobFile) || { version: 0, items: [] };
  let items = core.arr(j.items);
  for (const f of ['key', 'kind', 'status']) { const v = q.get(f); if (v) { const prop = f === 'key' ? 'fileKey' : f; items = items.filter((x) => x && x[prop] === v); } }
  // plugins: 파일 키 → 그 파일 플러그인이 마지막으로 물은 지 몇 초(10분 안의 것만). Workbench 「보내기」에서 ① · ② 플러그인이 켜져 있는지 알릴 때 쓴다
  const plugins = {}; for (const k of Object.keys(C.pluginKeys || {})) { const s = Math.floor((Date.now() - C.pluginKeys[k]) / 1000); if (s < 600) plugins[k] = s; }
  return { version: j.version, items, pluginSec: C.pluginSeen ? Math.floor((Date.now() - C.pluginSeen) / 1000) : null, plugins };
});

// GET /api/projects: 등록된 프로젝트 목록 + 시작 안내 작업 링크의 파일
const catBusy = new Set();   // 토큰으로 목록을 받는 중인 파일(같은 파일을 겹쳐 받지 않게)
const catFail = {};          // 받지 못한 파일 → 다시 해 볼 시각(ms)
on('GET', '/api/projects', ({ T }) => {
  // 지금 팀의 팀 프로젝트는 이 PC에 없으면 바로 등록한다(작업 페이지는 링크의 노드로 처음 정하고, 그 뒤는 담당자가 고른다)
  const teamItems = core.readTeamProjects(T.team);
  for (const tp of teamItems) if (testKey(tp.key) && !readProj(tp.key) && helpers.ensureProj) { try { helpers.ensureProj(tp.key, tp.link); const pj = readProj(tp.key); if (pj && tp.name && !pj.name) { pj.name = tp.name; helpers.saveProj(pj); } } catch (e) {} }
  // 프레임 목록이 아직 없는 팀 프로젝트: Figma 토큰이 있으면 뒤에서 바로 받는다(Workbench가 5초마다 목록을 다시 읽어 저절로 채워짐). 토큰이 없으면 플러그인 · Claude로
  if (!C.readonly && helpers.figmaHasToken && helpers.figmaHasToken() && helpers.figmaCatalog) {
    for (const tp of teamItems) {
      if (!testKey(tp.key) || core.exists(path.join(projDir(tp.key), 'catalog.json')) || catBusy.has(tp.key) || (catFail[tp.key] || 0) > Date.now()) continue;
      // 실패하면(토큰으로 못 보는 파일 · 한도) 10분 동안 다시 받지 않는다(2026-11-17 — 예전에는 5초마다 Figma API를 다시 불렀다)
      catBusy.add(tp.key); helpers.figmaCatalog(tp.key).then(() => { delete catFail[tp.key]; }, () => { catFail[tp.key] = Date.now() + 10 * 60 * 1000; }).then(() => catBusy.delete(tp.key));
    }
  }
  const list = [];
  let dirs = []; try { dirs = fs.readdirSync(C.projRoot, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name); } catch (e) {}
  for (const d of dirs) {
    const p = readProj(d); if (!p) continue;
    let shots = 0; try { shots = fs.readdirSync(path.join(C.projRoot, d, 'shots'), { withFileTypes: true }).filter((x) => x.isFile()).length; } catch (e) {}
    list.push({ key: p.key, name: p.name, link: p.link, editablePageId: p.editablePageId, editablePageName: p.editablePageName, uxGuideLink: p.uxGuideLink,
      hasCatalog: core.exists(path.join(C.projRoot, d, 'catalog.json')), shots, isDefault: p.key === workKey() });
  }
  return { defaultKey: workKey(), workKey: workKey(), projects: list,
    team: { id: T.team, items: teamItems.map((p, i) => ({ key: p.key, name: p.name || '', link: p.link || '', step: i + 1 })) } };
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
// GET /api/changes?key=: 바뀌었는지만(파일 수정 시각 · 개수) — 화면이 3 ~ 5초마다 큰 목록(이력 140KB · 캡처 목록 180KB · 요청 50KB)을
//  통째로 받던 것을 이것 하나로 묻고, 바뀐 것만 다시 받는다(2026-11-18 audit). 파일을 읽지 않고 stat만 한다
const mt = (f) => { try { return Math.round(fs.statSync(f).mtimeMs); } catch (e) { return 0; } };
on('GET', '/api/changes', ({ q, T }) => {
  const key = q.get('key'), out = { req: mt(C.reqFile), jobs: mt(C.jobFile) };
  let n = 0, m = 0; for (const f of core.listJson(C.histEntries)) { n++; const t = mt(path.join(C.histEntries, f)); if (t > m) m = t; }
  out.hist = n + ':' + m;
  if (testKey(key)) { out.shots = mt(path.join(projDir(key), 'shots_meta.json')); out.cat = mt(path.join(projDir(key), 'catalog.json')); }
  // 플러그인이 마지막으로 닿은 지 몇 초 — 화면이 이 값 하나 때문에 작업 목록(약 40KB)을 30초마다 다시 받지 않게 여기에 싣는다
  out.plugin = C.pluginSeen ? Math.floor((Date.now() - C.pluginSeen) / 1000) : null;
  // 반영 대기(/api/backlog 약 270KB) · 작업 기준(/api/guides 약 66KB)도 1분마다 통째로 받지 않게: 지금 팀 문서 파일의 개수 · 최근 수정 시각
  if (T && T.guideRoot) {
    const sr = path.join(T.guideRoot, 'screens'); let bn = 0, bm = 0;
    for (const d of dirNames(sr)) for (const n of fileNames(path.join(sr, d))) { if (!/\.md$/i.test(n)) continue; bn++; const t = mt(path.join(sr, d, n)); if (t > bm) bm = t; }
    out.blg = bn + ':' + bm;
    let gn = 0, gm = mt(T.guideApply);
    for (const d of dirNames(T.guideRoot)) { gn++; const dd = path.join(T.guideRoot, d); for (const f of [path.join(dd, 'meta.json'), path.join(dd, 'rev')]) { const t = mt(f); if (t > gm) gm = t; } }
    out.gd = gn + ':' + gm;
  }
  return out;
});
on('GET', '/api/history', ({ q, T }) => {
  const all = q.get('all') === '1';
  let items = readDirJson(C.histEntries); if (!all) items = items.filter((e) => core.itemTeam(e) === T.team);
  const st = core.readJson(C.syncStat);
  return { pc: C.pcName, pcSlug: C.pcSlug, team: all ? '' : T.team, syncing: !!(st && st.busy) || !!(helpers.isLoginOpen && helpers.isLoginOpen()), sync: st, items };
});
on('GET', '/api/usage', ({ T }) => {
  const items = readDirJson(C.histUsage).filter((u) => core.itemTeam(u) === T.team);
  // 요청 유형: 기록에 없으면(예전 기록) 같은 이름의 작업 이력에서
  //  예전 맥 기록은 이름에서 .local이 빠져 있어(mac-book_R001 ↔ 작업 이력 mac-book-local_R001) 그 이름으로도 찾는다
  for (const u of items) { if (u.reqId && !u.reqType) { const id = String(u.id), e = core.readJson(path.join(C.histEntries, id + '.json')) || core.readJson(path.join(C.histEntries, id.replace(/^([^_]+)_/, '$1-local_') + '.json')); u.reqType = e && e.type ? String(e.type) : ''; } }
  return { pc: C.pcName, pcSlug: C.pcSlug, pricing: core.readJson(path.join(C.root, 'workbench', 'pricing.json')), items };
});

// ── 프로토타입(이 PC에만) + 갱신 필요(stale): 맞춘 뒤(syncedAt) Figma에서 고쳐진 프레임(editAt) · 완료 요청이 실제로 고친 프레임 ──
// PowerShell Sort-Object -Descending과 같은 순서: 큰 값이 먼저, 값이 같으면 원래(폴더) 순서 그대로(안정 정렬)
const sortDescPS = (list, f) => list.slice().sort((a, b) => { const x = f(a), y = f(b); return x < y ? 1 : x > y ? -1 : 0; });
const tms = (s) => { const t = Date.parse(String(s || '')); return isNaN(t) ? null : t; };
// 프로토타입 페이지: meta.page.id(페이지 단위로 만든 것), 없으면 프로토타입 화면이 들어 있는 catalog 페이지들
function protoPageIds(m, cat) {
  const pages = core.arr(cat && cat.pages);
  if (m.page && m.page.id && pages.some((p) => p && p.id === String(m.page.id))) return [String(m.page.id)];
  const mine = new Set(core.arr(m.frames).filter(Boolean).map((f) => String(f.nodeId)));
  return pages.filter((p) => p && core.arr(p.frames).some((f) => f && mine.has(String(f[0])))).map((p) => String(p.id));
}
// 프로토타입 화면이 모두 섹션 안에 있으면(목록 행 [7] = 섹션 id, 토큰 목록) 그 섹션들로 좁힌다 — 한 페이지에 다른 화면(매뉴얼 등)이 함께 있어도 괜히 「추가됨」이 뜨지 않게
function protoSecIds(m, cat) {
  const mine = new Set(core.arr(m.frames).filter(Boolean).map((f) => String(f.nodeId))), secs = new Set(); let all = true, n = 0;
  for (const p of core.arr(cat && cat.pages)) for (const f of core.arr(p && p.frames)) if (f && mine.has(String(f[0]))) { n++; if (f[7]) secs.add(String(f[7])); else all = false; }
  return n && all ? [...secs] : [];
}
// 그 페이지들(섹션을 주면 그 섹션 안만)의 지금 프레임 { id: 이름 } — 아직 모르는 페이지(frames: null)가 있으면 null
function protoPageNow(cat, pids, secs) {
  const out = {}, sec = secs && secs.length ? new Set(secs.map(String)) : null;
  for (const pid of pids) { const p = core.arr(cat && cat.pages).find((x) => x && String(x.id) === pid); if (!p || !Array.isArray(p.frames)) return null; for (const f of p.frames) if (f && (!sec || sec.has(String(f[7] || '')))) out[String(f[0])] = String(f[1] || ''); }
  return out;
}
// 프로토타입을 만들거나 맞출 때의 그 페이지 프레임 목록을 meta.pageFrames {at, pages, secs, ids}에 남긴다(작업 완료 때 · 처음 볼 때)
function protoSnapshot(dir) {
  const mf = path.join(C.protoRoot, dir, 'meta.json'), m = core.readJson(mf); if (!m || !m.fileKey) return null;
  const cat = core.readJson(path.join(projDir(String(m.fileKey)), 'catalog.json')); if (!cat) return null;
  const pids = protoPageIds(m, cat), secs = m.page && m.page.id ? [] : protoSecIds(m, cat);   // 페이지 단위로 만든 것은 페이지 전체
  const now = pids.length ? protoPageNow(cat, pids, secs) : null; if (!now) return null;
  m.pageFrames = { at: core.now(), pages: pids, secs, ids: Object.keys(now) };
  core.writeJson(mf, m); return m.pageFrames;
}
function protoPageDiff(dir, m, stale) {
  const cat = core.readJson(path.join(projDir(String(m.fileKey || '')), 'catalog.json')); if (!cat) return;
  let snap = m.pageFrames;
  if (!snap || !Array.isArray(snap.ids)) { snap = protoSnapshot(dir); if (snap) m.pageFrames = snap; return; }   // 처음 보는 예전 프로토타입: 지금 목록을 기준으로
  const now = protoPageNow(cat, core.arr(snap.pages).map(String), core.arr(snap.secs)); if (!now) return;
  const was = new Set(snap.ids.map(String)), mine = new Set(core.arr(m.frames).filter(Boolean).map((f) => String(f.nodeId)));
  const at = String(cat.savedAt || '');
  for (const id of Object.keys(now)) if (!was.has(id) && !mine.has(id)) stale.push({ nodeId: id, name: now[id], why: '화면 추가됨', at, add: true });
  // 없어짐: 프로토타입 화면이 카탈로그 어디에도 없을 때(다른 페이지로 옮긴 것은 그대로)
  const all = new Set(); for (const p of core.arr(cat.pages)) for (const f of core.arr(p && p.frames)) if (f) all.add(String(f[0]));
  for (const f of core.arr(m.frames)) if (f && !all.has(String(f.nodeId)) && !stale.some((s) => s.nodeId === String(f.nodeId))) stale.push({ nodeId: String(f.nodeId), name: String(f.name || ''), why: '화면 없어짐', at, gone: true });
}
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
    // 화면 추가됨 · 없어짐(2026-11-13): 규칙이 바뀌면 Figma에 화면이 생기거나 없어진다. 프로토타입 페이지의 프레임 목록(catalog)을 맞춘 때의 목록(pageFrames)과 견준다
    try { protoPageDiff(d, m, stale); } catch (e) {}
    // 무시한 항목(화면에서 [선택한 것 무시]): 고쳐짐 · 수정 완료는 무시한 뒤 다시 바뀌면 다시 뜬다, 없어짐은 계속 무시. 추가됨은 기준 목록(pageFrames)에 넣어 처리
    const ig = m.ignore && typeof m.ignore === 'object' ? m.ignore : {};
    m.stale = stale.filter((s) => { const g = ig[s.nodeId]; if (!g) return true; if (s.gone) return !g.gone; return !g.at || (tms(s.at) ?? Infinity) > (tms(g.at) ?? -Infinity); });
    m.dir = 'prototypes/' + d; list.push(m);
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
  const sh = prov === 'azure' ? core.readJson(path.join(path.dirname(T.sheetConf), 'azure_shared.json')) : null;   // 팀 공유 일정 사본(토큰 없는 PC가 볼 것)
  return { provider: prov, azure: cf.azure === undefined ? null : cf.azure, azurePat: !!String(pat[T.team] || ''), azureShared: sh && sh.data ? { at: sh.at, pc: sh.pc, by: sh.by } : null,
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
// 작업 기준(이 PC만): 작업규칙 · 정책서 · 기준데이터 · 화면 정의서는 카테고리마다 하나를 [적용]하면 이 PC의 모든 Figma 파일에 같이 쓴다(아직 없는 파일은 채워 준다, filled:true).
//  UX가이드만 Figma 파일마다 고른다(PC 화면 · 모바일 등 대상에 따라, 2026-11-12) — 다른 파일에서 채우지 않는다. 없으면 비어 있다 → Claude는 화면설계 요청을 「보류」 + 질문
function fillApplied(applied) {
  let src = applied[workKey()];
  const common = (e) => { const d = appliedDocs(e); delete d.guide; return d; };
  if (!Object.keys(common(src)).length) { src = null; for (const k of Object.keys(applied)) { const e = applied[k]; if (Object.keys(common(e)).length && (!src || String(e.at || '') > String(src.at || ''))) src = e; } }
  if (!src) return applied;
  const sd = common(src);
  for (const k of applyKeys('')) {
    const docs = appliedDocs(applied[k]); let n = 0;
    for (const t of Object.keys(sd)) if (!(t in docs)) { docs[t] = sd[t]; n++; }
    if (!n && Object.prototype.hasOwnProperty.call(applied, k)) continue;
    const g = docs.guide;
    applied[k] = { fileKey: k, guideId: g ? String(g.id) : '', by: String(src.by || ''), pc: String(src.pc || ''), at: String(src.at || ''), docs, filled: true };
  }
  return applied;
}
/* 팀 프로젝트(2026-11-16): UX가이드를 따로 고르지 않은 단계는 앞 단계(1차 → 2차 → 3차)의 UX가이드를 같이 쓴다.
   저장하지 않고 읽을 때마다 계산한다(1차를 바꾸면 따라간다). 그 단계에서 직접 고르면 그것이 우선. docs.guide.from = 가져온 단계의 파일 키 */
function fillTeamGuide(applied, T) {
  const steps = core.readTeamProjects(T.team).map((p) => p.key);
  let prev = null;
  for (const k of steps) {
    const docs = appliedDocs(applied[k]);
    if (docs.guide) { prev = { g: docs.guide, key: k }; continue; }
    if (!prev) continue;
    docs.guide = Object.assign({}, prev.g, { from: prev.key });
    const e = applied[k] || { fileKey: k, by: '', pc: '', at: '' };
    applied[k] = Object.assign({}, e, { fileKey: k, guideId: String(prev.g.id), docs, teamGuide: true });
  }
  return applied;
}
/* 「지금 내용」 = 원본 파일(2026-11-13~): 한 파일 문서는 guide.md, 여러 파일 문서는 meta.files의 그 파일(filesDir 아래).
   수정본(rev/)은 고친 기록(이력)으로만 남는다. 고칠 때마다 서버가 원본도 새 내용으로 바꾸고 수정본 정보에 orig:true를 적는다.
   예전 버전 PC가 수정본만 쓴 경우(orig 없음)는 읽을 때 그 수정본을 원본으로 옮겨 맞춘다(한 번만, 깃으로 공유) */
/* 한 파일 문서의 본문 파일 이름: meta.main(알아보기 쉬운 이름, 예 「STAgora 작업규칙.md」), 없으면 예전 이름 guide.md */
const mainName = (m) => (m && typeof m.main === 'string' && /^[^\/\\]+\.md$/i.test(m.main) ? m.main : 'guide.md');
function origPath(dd, m, file) {
  if (m.format !== 'files') return path.join(dd, mainName(m));
  const fdir = Object.prototype.hasOwnProperty.call(m, 'filesDir') ? String(m.filesDir == null ? '' : m.filesDir) : 'files';
  return path.join(dd, ...(fdir ? fdir.split('/') : []), ...String(file).split('/'));
}
/* 처음 내용 보관: 원본을 처음 덮어쓰기 전에 그때 내용을 rev/_처음.md(여러 파일 문서는 rev/_처음/{파일})로 남긴다 —
   변경이력의 「바뀐 부분」 · 항목별 작성일이 처음 내용과 수정본을 비교하므로 */
const FIRST = '_처음';
function firstPath(dd, m, file) { return m.format !== 'files' ? path.join(dd, 'rev', FIRST + '.md') : path.join(dd, 'rev', FIRST, ...String(file).replace(/\.\.\//g, '_up/').split('/')); }
function keepFirst(dd, m, file) {
  const fp = firstPath(dd, m, file); if (core.exists(fp)) return;
  const cur = core.readText(origPath(dd, m, file)); if (cur == null) return;
  fs.mkdirSync(path.dirname(fp), { recursive: true }); core.writeText(fp, cur);
}
function writeOrig(abs, text) {
  const prev = core.readText(abs) || '', bom = /^﻿/.test(prev) ? '﻿' : '';
  const body = String(text).replace(/^﻿/, '');
  if (prev.replace(/^﻿/, '') === body) return false;
  fs.mkdirSync(path.dirname(abs), { recursive: true }); core.writeText(abs, bom + body); return true;
}
/* 폴더가 곧 목록인 문서(meta.folderList:true, 2026-11-13 — 예: STAgora 작업규칙): 폴더 바로 아래 md 파일을 모두 목록으로.
   meta.files는 순서만 정한다(없어진 파일은 빼고, 목록에 없는 새 파일은 이름순으로 뒤에). 「_」 · 「.」로 시작하는 파일과 rev/는 뺀다.
   CURECA 문서 · 가져온 규칙 저장소 문서(rules · policy · screens · glossary)에는 이 표시가 없어 meta.files 그대로다 */
const natSort = (a) => a.slice().sort((x, y) => x.localeCompare(y, 'ko', { numeric: true, sensitivity: 'base' }));
function folderFiles(dir, listed) {
  const here = fileNames(dir).filter((n) => /\.(md|csv)$/i.test(n) && !/^[_.]/.test(n));   // 기준데이터 표(CSV)도 목록에(2026-11-18 기본 템플릿)
  const keep = core.arr(listed).map(String).filter((p) => here.includes(p));
  return keep.concat(natSort(here.filter((n) => !keep.includes(n))));
}
function readGuides(T) {
  const list = []; let promoted = 0;
  for (const name of dirNames(T.guideRoot)) {
    if (name === '_apply') continue;
    const dd = path.join(T.guideRoot, name), m = core.readJson(path.join(dd, 'meta.json')); if (!m) continue;
    m.id = name;   // 문서 ID = 폴더 이름(이름을 바꾼 문서도 폴더 기준)
    const isFiles = m.format === 'files', rd = path.join(dd, 'rev'), revs = [];
    const files = fileNames(rd);
    const bases = ciSort([...new Set(files.filter((n) => !/\.check-/.test(n) && !n.startsWith('_') && /\.(md|json)$/i.test(n)).map((n) => n.replace(/\.(md|json)$/i, '')))]);   // _처음은 수정본이 아니다
    for (const rn of bases) {
      const info = core.readJson(path.join(rd, rn + '.json'));
      if (!isFiles && !core.exists(path.join(rd, rn + '.md'))) continue;
      // 파일형 수정본은 rev/{수정본}/{파일}. 문서 폴더 밖 파일(../flow/…)은 저장할 때 「../」를 「_up/」로 바꿔 둔다(writes.js save) — 같은 규칙으로 찾는다(2026-11-18, 작업규칙 수정이 변경이력에서 빠지던 것)
      if (isFiles && !(info && info.file && core.exists(path.join(rd, rn, ...String(info.file).replace(/\.\.\//g, '_up/').split('/'))))) continue;
      const checks = files.filter((n) => n.startsWith(rn + '.check-') && n.toLowerCase().endsWith('.json')).map((n) => core.readJson(path.join(rd, n))).filter((x) => x != null);
      const s = (k) => (info && info[k] != null ? String(info[k]) : '');
      revs.push({ rev: rn, at: s('at'), by: s('by'), note: s('note'), base: s('base'), req: s('req'), jobId: s('jobId'), file: s('file'), checks });
    }
    const last = revs.length ? revs[revs.length - 1] : null;
    /* 마지막 수정본이 아직 원본에 없으면(orig 표시 없음) 원본으로 옮긴다 */
    const promote = (r, src, file) => {
      const info = core.readJson(path.join(rd, r.rev + '.json')) || {};
      if (info.orig) return;
      const t = core.readText(src); if (t == null) return;
      keepFirst(dd, m, file);   // 처음 내용부터 남기고
      if (writeOrig(origPath(dd, m, file), t)) promoted++;
      info.orig = true; core.writeJson(path.join(rd, r.rev + '.json'), info);
    };
    const rel = (abs) => `${T.guideRel}/${name}/` + path.relative(dd, abs).split(path.sep).join('/');
    if (isFiles) {
      const fdir = Object.prototype.hasOwnProperty.call(m, 'filesDir') ? String(m.filesDir == null ? '' : m.filesDir) : 'files';
      if (m.folderList) m.files = folderFiles(path.join(dd, ...(fdir ? fdir.split('/') : [])), m.files);
      m.fileList = core.arr(m.files).map((p) => {
        let cr = '', lr = null;
        for (const r of revs) if (r.file === p) { cr = r.rev; lr = r; }
        if (lr) promote(lr, path.join(rd, lr.rev, ...String(p).replace(/\.\.\//g, '_up/').split('/')), p);
        const fp = firstPath(dd, m, p);
        return { path: String(p), mdPath: `${T.guideRel}/${name}/` + (fdir ? `${fdir}/${p}` : String(p)), rev: cr, firstPath: core.exists(fp) ? rel(fp) : '' };
      });
      m.mdPath = '';
    } else {
      if (last) promote(last, path.join(rd, last.rev + '.md'));
      m.mdPath = rel(origPath(dd, m));
      m.firstPath = core.exists(firstPath(dd, m)) ? rel(firstPath(dd, m)) : m.mdPath;   // 처음 내용(수정 전이면 본문 그대로)
    }
    m.rev = last ? last.rev : ''; m.revs = revs;
    if (last && last.at) m.updatedAt = last.at;
    list.push(m);
  }
  if (promoted) core.syncWant();   // 원본을 맞췄으면 깃으로 공유
  /* 이름을 바꾼 문서(meta.aliases = 예전 ID): 이 PC 작업 기준에 예전 ID가 남아 있으면 새 ID로 읽는다 */
  const alias = {}; list.forEach((m) => core.arr(m.aliases).forEach((a) => { alias[String(a)] = m.id; }));
  const raw = core.readJson(T.guideApply) || {};
  if (Object.keys(alias).length) for (const k of Object.keys(raw)) {
    const e = raw[k]; if (!e) continue;
    if (e.guideId && alias[e.guideId]) e.guideId = alias[e.guideId];
    for (const t of Object.keys(e.docs || {})) { const v = e.docs[t]; if (v && v.id && alias[v.id]) v.id = alias[v.id]; }
  }
  const applied = fillTeamGuide(fillApplied(raw), T);
  return { items: sortDescPS(list, (x) => String(x.updatedAt || '')), applied };
}
on('GET', '/api/guides', ({ T }) => readGuides(T));

// GET /api/worklogs?team=: 화면설계 작업 기록(규칙 저장소 work-logs/*.md, reference-rules/work-log.md 틀) 목록
//  머리말(status · requester · menu · cids · test · started)과 지금 단계(「단계」 표에서 「끝낸 날」 칸이 빈 첫 줄), `이어서 작업할 곳:` 줄
//  단계 이름은 그 기록의 「단계」 표 첫 칸을 그대로 쓴다(2026-11-17 CURECA_AI: 1 ~ 5단계, 관문 칸에 틀 글이 미리 들어 있어 「끝낸 날」로 본다)
const STAGES = ['1. 시작 · 요건 정의', '2. 근거 · 분석', '3. 화면 설계', '4. 수정 · 확인', '5. 완료'];
function readWorkLog(f) {
  const t = String(core.readText(f) || '').replace(/^﻿/, ''), fm = {}, m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(t);
  if (m) for (const l of m[1].split(/\r?\n/)) { const k = /^([A-Za-z_]+):\s*(.*?)\s*(#.*)?$/.exec(l); if (!k || /^\s/.test(l)) continue; let v = k[2]; if (/^\[.*\]$/.test(v)) v = v.slice(1, -1).split(',').map((x) => x.trim().replace(/^["']|["']$/g, '')).filter(Boolean); fm[k[1]] = v; }
  const title = (/^#\s*작업 기록:\s*(.+)$/m.exec(t) || [])[1] || '';
  let stage = -1, names = STAGES; const sec = /##\s*단계\s*\r?\n([\s\S]*?)(\r?\n##\s|$)/.exec(t);
  if (sec) {
    const rows = sec[1].split(/\r?\n/).filter((l) => /^\|\s*\d\./.test(l)).map((l) => l.split('|').map((x) => x.trim()));
    if (rows.length) names = rows.map((c) => c[1]);
    for (let i = 0; i < rows.length; i++) if (!rows[i][2]) { stage = i; break; }   // 「끝낸 날」이 빈 첫 단계 = 지금 단계
    if (stage < 0 && rows.length) stage = rows.length;
  }
  const next = (/^(?:이어서 작업할 곳|다음):\s*(.+)$/m.exec(t) || [])[1] || '';
  return { name: path.basename(f, '.md'), title: title.trim(), status: String(fm.status || ''), case: String(fm.case || ''), requester: String(fm.requester || ''), menu: String(fm.menu || ''),
    cids: Array.isArray(fm.cids) ? fm.cids : [], test: String(fm.test) === 'true', started: String(fm.started || ''), stage, stages: names, stageName: stage >= 0 && stage < names.length ? names[stage] : stage >= names.length ? '끝' : '', next: next.trim() };
}
on('GET', '/api/worklogs', ({ T }) => {
  const dir = path.join(T.guideRoot, 'work-logs');
  const items = fileNames(dir).filter((n) => /\.md$/i.test(n) && !/^readme\.md$/i.test(n)).map((n) => readWorkLog(path.join(dir, n)));
  return { dir: `${T.guideRel}/work-logs`, stages: STAGES, items: items.sort((a, b) => String(b.started).localeCompare(String(a.started)) || a.name.localeCompare(b.name)) };
});

// ── 반영 대기: 화면 정의서(규칙 저장소 screens/{메뉴}/{CID}.md)마다 「## 반영 대기 목록」 중 대기 · 작업 중 항목 (reference-rules/pending-changes.md)
//  Workbench가 지금 고른 프레임에 반영할 항목이 있는지 알리는 데 쓴다. 화면 ↔ 프레임은 머리말 figma: 링크(파일 키 · 노드)와 CID로 맞춘다
function readBacklog(f, rel) {
  const t = String(core.readText(f) || '').replace(/^﻿/, ''), fm = {}, m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(t);
  if (m) for (const l of m[1].split(/\r?\n/)) { const k = /^([A-Za-z_]+):\s*(.*?)\s*(#.*)?$/.exec(l); if (k && !/^\s/.test(l)) fm[k[1]] = k[2]; }
  const sec = /^##\s*반영 대기 목록[^\n]*\n([\s\S]*?)(?=^##\s|(?![\s\S]))/m.exec(t); if (!sec) return null;
  const lines = sec[1].split(/\r?\n/).filter((l) => /^\s*\|/.test(l));
  const cells = (l) => l.trim().replace(/^\||\|$/g, '').split('|').map((x) => x.trim());
  if (lines.length < 2) return null;
  const H = cells(lines[0]).map((h) => h.replace(/\s/g, ''));
  const col = (...a) => { for (const n of a) { const i = H.indexOf(n); if (i >= 0) return i; } return -1; };
  const ci = { n: col('ID', '#'), kind: col('타입', '구분'), now: col('변경전', '지금'), to: col('변경후', '바꿀것'), why: col('근거'), st: col('상태') };
  // 칸 안에 「|」를 그대로 쓴 줄(예: "Empty | Low")은 칸이 늘어난다: 앞 칸(ID · 타입)과 뒤 칸(근거 · 상태)은 양 끝에서 세고, 남는 것은 「변경 전」에 붙인다
  const fit = (c) => { const x = c.length - H.length; if (x <= 0 || ci.now < 0) return c; return c.slice(0, ci.now).concat([c.slice(ci.now, ci.now + x + 1).join(' | ')], c.slice(ci.now + x + 1)); };
  const rows = lines.slice(1).filter((l) => !/^\s*\|[\s:|-]+\|?\s*$/.test(l)).map((l) => { const c = fit(cells(l)), g = (i) => (i >= 0 ? c[i] || '' : ''); return { n: g(ci.n), kind: g(ci.kind), now: g(ci.now), to: g(ci.to), why: g(ci.why), st: g(ci.st) }; })
    .filter((r) => (r.n || r.to) && /^(대기|작업 중|반영 중)/.test(r.st));
  if (!rows.length) return null;
  const fig = String(fm.figma || ''), key = keyOf(fig), nd = /node-id=(\d+)[-:](\d+)/.exec(fig);
  const h1 = /^#\s+(.+)$/m.exec(t.slice(m ? m[0].length : 0));
  return { cid: String(fm.cid || path.basename(f, '.md')), title: String(fm.title || (h1 ? h1[1] : '')), author: String(fm.author || ''), path: rel,
    fileKey: key, nodeId: nd ? `${nd[1]}:${nd[2]}` : '', rows };
}
on('GET', '/api/backlog', ({ T }) => {
  const root = path.join(T.guideRoot, 'screens'), items = [];
  for (const d of dirNames(root)) for (const n of fileNames(path.join(root, d))) {
    if (!/\.md$/i.test(n) || /^(readme|_menu)\.md$/i.test(n)) continue;
    const s = readBacklog(path.join(root, d, n), `${d}/${n}`); if (s) items.push(s);
  }
  return { dir: `${T.guideRel}/screens`, items };
});

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
let claudeAppMiss = 0;   // 못 찾았을 때도 10분 동안 기억(2026-11-18 — 앱 없는 PC에서 15초마다 PowerShell을 돌려 서버가 1 ~ 3초씩 멈추던 것)
function findClaude() {
  if (claudeApp) return claudeApp;
  if (Date.now() - claudeAppMiss < 600000) return null;
  const r0 = findClaude0(); if (!r0) claudeAppMiss = Date.now(); return r0;
}
function findClaude0() {
  if (C.isMac) { if (core.exists('/Applications/Claude.app')) claudeApp = '/Applications/Claude.app'; return claudeApp || null; }
  try { const r = spawnSync('powershell', ['-NoProfile', '-Command', "(Get-AppxPackage -Name 'Claude' | Select-Object -First 1).PackageFamilyName"], { encoding: 'utf8', timeout: 15000, windowsHide: true });
    const fam = String(r.stdout || '').trim(); if (fam) { claudeApp = `shell:AppsFolder\\${fam}!Claude`; return claudeApp; } } catch (e) {}
  const exe = path.join(LAD, 'AnthropicClaude', 'claude.exe'); if (core.exists(exe)) claudeApp = exe;
  return claudeApp || null;
}
// 맥: 앱(Figma AI Run.app)으로 띄운 서버는 PATH가 짧아(/usr/bin 정도) 홈브루 · npm · 데스크톱 앱의 claude를 못 본다
//  → 예전 서버(find_claude_code)처럼 흔한 설치 위치 · 로그인 셸의 PATH · Claude 데스크톱 앱이 넣어 둔 것을 차례로 찾는다
//  찾은 폴더는 이 서버의 PATH에 붙인다(띄우는 에이전트 · 터미널 창이 물려받는다. npm으로 깐 claude는 같은 폴더의 node로 돈다)
function addPath(d) { const ds = String(process.env.PATH || '').split(':'); if (d && !ds.includes(d)) process.env.PATH = (process.env.PATH ? process.env.PATH + ':' : '') + d; }
let shellAt = 0, shellClaude = '';
function loadShellPath() {
  if (Date.now() - shellAt < 60000) return; shellAt = Date.now();   // 못 찾았으면 1분 뒤 다시 묻는다(그사이 설치했을 수 있다)
  const sh = process.env.SHELL && core.exists(process.env.SHELL) ? process.env.SHELL : '/bin/zsh';
  let out = '';
  try { out = String(spawnSync(sh, ['-lic', 'echo __PATH__=$PATH; command -v claude'], { encoding: 'utf8', timeout: 6000, stdio: ['ignore', 'pipe', 'ignore'] }).stdout || ''); } catch (e) {}
  for (const l of out.split('\n')) {
    const m = /__PATH__=(\S*)/.exec(l); if (m) { m[1].split(':').forEach(addPath); continue; }
    const c = /(\/[^'"\s]*\/claude)\b/.exec(l); if (c && isExe(c[1])) shellClaude = c[1];   // 경로 또는 별칭(alias claude='…/claude')
  }
}
function isExe(f) { try { const st = fs.statSync(f); return st.isFile() && (st.mode & 0o111) !== 0; } catch (e) { return false; } }
// 'a/*/b' 같은 경로 패턴(* = 폴더 하나)에 맞는 파일
function globDirs(pat) {
  let cur = ['']; for (const part of pat.split('/').filter((x, i) => x !== '' || i === 0)) {
    const next = []; for (const base of cur) {
      if (part === '') { next.push('/'); continue; }
      if (!part.includes('*')) { next.push(path.join(base, part)); continue; }
      const re = new RegExp('^' + part.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*') + '$');
      let es = []; try { es = fs.readdirSync(base); } catch (e) {} for (const n of es) if (re.test(n)) next.push(path.join(base, n));
    } cur = next;
  } return cur;
}
function findClaudeCodeMac() {
  const home = process.env.HOME || '';
  const dirs = ['/usr/local/bin', '/opt/homebrew/bin', `${home}/.local/bin`, `${home}/.claude/local`, `${home}/.claude/bin`, `${home}/.npm-global/bin`,
    `${home}/.volta/bin`, `${home}/.bun/bin`, `${home}/Library/pnpm`, `${home}/.yarn/bin`];
  const look = () => { for (const d of String(process.env.PATH || '').split(':').concat(dirs)) { if (d && isExe(path.join(d, 'claude'))) { addPath(d); return path.join(d, 'claude'); } } return ''; };
  let hit = look(); if (hit) return hit;
  loadShellPath(); if (shellClaude) return shellClaude;
  hit = look(); if (hit) return hit;
  const newest = (l) => l.filter(isExe).sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs)[0] || '';
  // nvm · asdf · fnm로 깐 node의 전역 npm(가장 최근 것)
  hit = newest([].concat(...[`${home}/.nvm/versions/node/*/bin/claude`, `${home}/.asdf/installs/nodejs/*/bin/claude`, `${home}/.local/share/fnm/node-versions/*/installation/bin/claude`].map(globDirs)));
  if (hit) { addPath(path.dirname(hit)); return hit; }
  // Claude 데스크톱 앱이 넣어 둔 것: 예전 claude-code/{버전}/{해시}/claude, 새 버전(2.1.3xx~) …/{해시}/claude.app/Contents/MacOS/claude
  const as = `${home}/Library/Application Support`;
  return newest([].concat(...[`${as}/Claude*/claude-code/*/claude`, `${as}/Claude*/claude-code/*/*/claude`, `${as}/Claude*/*/claude-code/*/*/claude`,
    `${as}/Claude*/claude-code/*/claude.app/Contents/MacOS/claude`, `${as}/Claude*/claude-code/*/*/claude.app/Contents/MacOS/claude`,
    `${as}/Claude*/*/claude-code/*/*/claude.app/Contents/MacOS/claude`].map(globDirs))) || null;
}
function findClaudeCode() {
  const set = String(core.readSetup().claudePath || ''); try { if (set && fs.statSync(set).isFile()) { if (C.isMac) addPath(path.dirname(set)); return set; } } catch (e) {}
  if (C.isMac) return findClaudeCodeMac();
  const g = onPath('claude'); if (g) return g;
  // 따로 설치한 Claude Code CLI(공식 설치 스크립트 ~\.local\bin, npm 전역, winget)를 앱 안의 것보다 먼저 쓴다(2026-11-17).
  //  서버를 띄운 PATH에 이 폴더들이 없어 앱 안의 것(Claude-Data\claude_{계정}\…)으로 넘어가면, Claude 앱에서 로그아웃할 때 백그라운드 감시도 같이 끊겼다
  if (W) {
    const home = process.env.USERPROFILE || '', ad = process.env.APPDATA || '';
    for (const f of [path.join(home, '.local', 'bin', 'claude.exe'), path.join(ad, 'npm', 'claude.cmd'), path.join(LAD, 'Microsoft', 'WinGet', 'Links', 'claude.exe'), path.join(LAD, 'Programs', 'claude', 'claude.exe')]) {
      try { if (fs.statSync(f).isFile()) return f; } catch (e) {}
    }
  }
  if (W) {   // Claude 데스크톱 앱에 들어 있는 것(가장 최근) — 따로 설치한 것이 없을 때만
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
  if (alive && o.pid) { try { process.kill(parseInt(o.pid, 10), 0); } catch (e) { if (e.code === 'ESRCH') alive = false; } }   // 맥도 pid를 본다(2026-11-18 — 죽은 뒤 150초 동안 「처리 중」으로 보이던 것)
  return { alive, stopping: stopping && alive, sec, status: String(o.status || ''), msg: String(o.msg || ''), host: String(o.host || ''), ver: String(o.ver || ''), claude: String(o.claude || '') };
}
let envCache = null, envAt = 0;
function setupEnv() {
  // 환경 정보는 15초 저장해 두고 쓰되, 요청 감시 상태(agent)는 늘 새로 본다(2026-11-16: 서버가 켜진 직후 「감시 꺼짐」이 15초 남아 [감시 시작]을 누르면 「이미 실행 중」이 나왔다)
  if (envCache && Date.now() - envAt < 15000) return Object.assign({}, envCache, { agent: agentInfo() });
  const hs = core.readJson(C.syncStat), hb = core.readJson(path.join(C.root, 'workbench', '.watcher.json')), cc = findClaudeCode();
  envCache = { root: C.root, manifest: path.join(C.root, 'figma_plugin', 'manifest.json'), os: C.isMac ? 'mac' : 'windows', computer: C.pcName,
    figmaInstalled: core.exists(C.isMac ? '/Applications/Figma.app' : path.join(LAD, 'Figma', 'Figma.exe')), claudeInstalled: !!findClaude(), claudeCli: !!cc,
    claudePath: String(cc || ''), claudeLook: String(process.env.PATH || ''), claudeSet: String(core.readSetup().claudePath || ''),
    pluginSeenSec: C.pluginSeen ? Math.round((Date.now() - C.pluginSeen) / 1000) : null, watcherSec: hb ? ago(hb.at) : null, watcherHost: hb ? String(hb.host || '') : '', agent: agentInfo(), gitInstalled: findGit(),
    winget: C.isMac ? false : !!onPath('winget'), historySync: hs, historySyncing: !!(hs && hs.busy) || !!(helpers.isLoginOpen && helpers.isLoginOpen()),
    // Figma 토큰(시작 안내 4단계 「Figma 연결」을 토큰으로 했는지): 있고 Figma가 거부하지 않았으면 true
    figmaToken: (() => { const t = core.readJson(path.join(C.setupDir, 'figma_token.json')) || {}; return !!(t.token && !t.deadAt); })() };
  envAt = Date.now(); return envCache;
}
on('GET', '/api/setup', () => ({ state: core.readSetup(), env: setupEnv() }));

// ── 계정 목록(최고관리자, Public-Account · Team-Members) — 비밀번호 해시는 내보내지 않는다 ──
function publicAccount(a) {
  return { id: a.id, name: a.name, admin: !!a.admin, teams: core.userTeams(a), menus: a.admin ? core.userMenus(a) : core.arr(a.menus).filter((k) => core.MENU_KEYS.includes(k)),
    writes: core.userWrites(a), approves: core.userApproves(a), manages: core.userManages(a), active: a.active !== false, createdAt: a.createdAt === undefined ? null : a.createdAt,
    updatedAt: a.updatedAt === undefined ? null : a.updatedAt, pwAt: a.pwAt === undefined ? null : a.pwAt };
}
on('GET', '/api/accounts', ({ req }) => {
  // 최고관리자가 아니면(「팀 프로젝트 링크 관리」 권한으로 들어온 사람) 계정 · 팀 설정은 내보내지 않고 자기 팀 목록만
  if (!core.isAdmin(req)) {
    const mine = core.myTeams();
    return { limited: true, items: [], approvals: [], manages: [], menus: [], teamMenus: [],
      teams: core.fillTeamColors(core.readTeams()).filter((t) => mine.includes(String(t.id))).map((t) => ({ id: String(t.id), name: String(t.name || ''), color: parseInt(t.color, 10), members: 0 })) };
  }
  const accts = core.readAccounts();
  const sorted = accts.slice().sort((x, y) => (x.admin ? 0 : 1) - (y.admin ? 0 : 1) || (String(x.id).toLowerCase() < String(y.id).toLowerCase() ? -1 : String(x.id).toLowerCase() > String(y.id).toLowerCase() ? 1 : 0));
  const teams = core.fillTeamColors(core.readTeams()).map((t) => ({ id: String(t.id), name: String(t.name || ''), legacy: !!t.legacy,
    members: accts.filter((a) => !a.admin && core.userTeams(a).includes(String(t.id))).length, createdAt: String(t.createdAt || ''), color: parseInt(t.color, 10) }));
  return { items: sorted.map(publicAccount), teams, teamMenus: core.TEAM_MENUS.slice(),
    menus: core.MENUS.filter((m) => core.MENU_KEYS.includes(m.key)).map((m) => ({ key: m.key, label: m.label, write: String(m.write || ''), team: core.TEAM_MENUS.includes(m.key) })),
    approvals: core.APPROVALS, manages: core.MANAGES };
});

// ── 팀 프로젝트(2026-11-16): GET /api/teamprojects?team= — 그 팀의 프로젝트(Figma 링크) 목록 · 순서. 모두 읽을 수 있고, 고치기는 writes.js(관리 권한) ──
on('GET', '/api/teamprojects', ({ req, T }) => {
  const items = core.readTeamProjects(T.team).map((p, i) => ({ ...p, step: i + 1, registered: !!readProj(p.key) }));
  const mineOk = !core.isBrowser(req) || !core.authRequired() || core.myTeams().includes(T.team);
  return { team: T.team, items, canEdit: core.canManage(req, 'teamProjects') && mineOk };
});

// ── 문서 · 회의록 파일 여러 개를 한 번에 읽기(화면 로딩용, 바꾸지 않음) — .history/guides · minutes 아래만 ──
//  팀(2026-11-13 점검): `.history/guides/…` · `minutes/…`는 지금 팀 위치로 읽는다(예전에는 늘 CURECA를 읽어 다른 팀 화면에 CURECA 문서가 보였다).
//  `.history/teams/{팀}/…`로 직접 주면 그 팀이 내 팀일 때만(화면)
on('POST', '/api/files', async ({ body, T, browser }) => {
  const b = await body(); const files = {};
  const mine = browser && core.authRequired() ? core.myTeams().map(String) : null;
  for (const p of core.arr(b.paths).slice(0, 2000)) {
    let rp; try { rp = decodeURIComponent(String(p)); } catch (e) { rp = String(p); }
    rp = rp.replace(/\\/g, '/').replace(/\/{2,}/g, '/').replace(/^\/+/, '');
    let tc = T, m = /^\.history\/teams\/([^/]+)\/(guides|minutes)\/(.+)$/i.exec(rp);
    if (m) { if (!core.teamIds().includes(m[1]) || (mine && !mine.includes(m[1]))) continue; tc = core.teamCtx(m[1]); rp = `.history/${m[2].toLowerCase()}/${m[3]}`; }
    if (!/^\.history\/(guides|minutes)\//i.test(rp)) continue;
    const gRoot = path.resolve(tc.guideRoot) + path.sep, mRoot = path.resolve(tc.minDir) + path.sep;
    const fp = path.resolve(tc.hist, rp.replace(/^\.history\//i, ''));
    if (!(fp.startsWith(gRoot) || fp.startsWith(mRoot))) continue;
    if (/[\\/]config[\\/]/.test(fp) || /[\\/]accounts[\\/]/.test(fp)) continue;
    const t = core.readText(fp); if (t == null) continue;
    try { if (!fs.statSync(fp).isFile()) continue; } catch (e) { continue; }
    files[String(p)] = t;
  }
  return { files };
}, { readSafe: true });

// ── 작업 데이터(.history) 크기, 5분 기억 (2026-11-18) ──
//  .history 전체(깃 폴더 .git 빼고) 합계와 항목별 크기. 0.9GB부터 미리 알림, 1GB부터 경고(화면은 appnav.js — 모든 작업자에게 하루 한 번 팝업).
//  항목: 캡처 · 첨부 · UX 문서(팀 문서 포함) · 사용량 통계 · 작업 이력 · 회의록 · 그 밖(계정 · 설정 · 충돌 기록 · 옮기기 기록 등)
let storeVal = null, storeAt = 0;
const STORE_KIND = { shots: '캡처', attach: '첨부', guides: 'UX 문서', usage: '사용량 통계', entries: '작업 이력', minutes: '회의록' };
function dirBytes(d) {
  let sum = 0, cnt = 0; let es = [];
  try { es = fs.readdirSync(d, { withFileTypes: true }); } catch (e) { return { sum, cnt }; }
  for (const x of es) {
    if (x.name === '.git') continue;
    const p = path.join(d, x.name);
    if (x.isDirectory()) { const r = dirBytes(p); sum += r.sum; cnt += r.cnt; }
    else { try { sum += fs.statSync(p).size; cnt++; } catch (e) {} }
  }
  return { sum, cnt };
}
// ── PC별 감시 상태(2026-11-19): 개발 PC(workbench/dev.flag)에서만. 다른 PC는 404 ──
on('GET', '/api/agents', ({ res, sendJson }) => {
  const ag = require('./agents');
  if (!ag.isDev()) return sendJson(res, 404, { error: '이 PC에서는 볼 수 없습니다.' });
  try { ag.report(agentInfo); } catch (e) {}   // 이 PC 것은 지금 값으로
  return { now: core.now(), me: C.pcSlug, items: ag.list() };
});
on('GET', '/api/storage', () => {
  if (!storeVal || Date.now() - storeAt >= 300000) {
    const kinds = {}; let total = 0, files = 0;
    const add = (k, r) => { kinds[k] = (kinds[k] || 0) + r.sum; total += r.sum; files += r.cnt; };
    let es = []; try { es = fs.readdirSync(C.histDir, { withFileTypes: true }); } catch (e) {}
    for (const x of es) {
      if (x.name === '.git') continue;
      const p = path.join(C.histDir, x.name);
      if (!x.isDirectory()) { try { add('그 밖', { sum: fs.statSync(p).size, cnt: 1 }); } catch (e) {} continue; }
      if (x.name === 'teams') {   // 다른 팀: teams/{id}/guides · minutes · config …
        let ts = []; try { ts = fs.readdirSync(p, { withFileTypes: true }); } catch (e) {}
        for (const t of ts) { if (!t.isDirectory()) continue; let ss = []; try { ss = fs.readdirSync(path.join(p, t.name), { withFileTypes: true }); } catch (e) {}
          for (const s of ss) { const sp = path.join(p, t.name, s.name); add(STORE_KIND[s.name] || '그 밖', s.isDirectory() ? dirBytes(sp) : (() => { try { return { sum: fs.statSync(sp).size, cnt: 1 }; } catch (e) { return { sum: 0, cnt: 0 }; } })()); } }
        continue;
      }
      add(STORE_KIND[x.name] || '그 밖', dirBytes(p));
    }
    const shots = (kinds['캡처'] || 0) + (kinds['첨부'] || 0);
    storeVal = { totalBytes: total, files, kinds, warnBytes: 966367641, limitBytes: 1073741824, shotsBytes: shots, at: new Date().toISOString() };
    storeAt = Date.now();
  }
  return storeVal;
});

// ── 일정/작업 파일 목록(임시 정책 · 논의 · 고객 논의 · 결정 · 화면 수정) ──
const pad2 = (n) => String(n).padStart(2, '0');
const localIso = (d) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}T${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
on('GET', '/api/plan/files', ({ q, T }) => {
  const dir = String(q.get('dir') || '');
  // discussions = 논의 대상(새 흐름, 2026-11-12). 나머지는 예전 구조(임시 정책 · 논의 · 고객 논의 · 결정 · 화면 수정)를 쓰는 PC를 위해 남긴다
  if (!['discussions', 'provisional', 'pending', 'customer-agenda', 'decisions', 'screen-fixes'].includes(dir)) throw new Error('알 수 없는 폴더: ' + dir);
  const base = path.join(T.guideRoot, dir), out = [];
  // PowerShell Get-ChildItem -Recurse와 같은 순서: 그 폴더의 파일 → 하위 폴더(이름순)
  const walk = (d, rel) => {
    let es = []; try { es = fs.readdirSync(d, { withFileTypes: true }); } catch (e) { return; }
    const names = ciSort(es.map((x) => x.name));
    for (const n of names) { const x = es.find((e) => e.name === n); if (x.isFile() && n.toLowerCase().endsWith('.md')) { const r = rel ? `${rel}/${n}` : n; out.push({ path: `${dir}/${r}`, url: `${T.guideRel}/${dir}/${r}`, closed: r.startsWith('closed/'), at: localIso(fs.statSync(path.join(d, n)).mtime) }); } }
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
  // 기준 시각을 안 주면 그 팀의 _log.json(since 이전 기록은 지운 것)을 쓴다 — 예전에는 화면이 늘 CURECA 것을 읽었다
  if (!q.get('since')) { const lj = core.readJson(path.join(T.guideRoot, '_log.json')); const s = String((lj && lj.since) || ''); if (/^[0-9T:+.\-]{10,40}$/.test(s)) since = s; }
  const gp = T.rel + 'guides';
  const a = ['-C', C.histDir, '-c', 'core.quotepath=false', 'log', '--name-status', '--date=iso-strict', '--pretty=format:@@%H|%ad|%an|%s', '-n', '300'];
  if (since) a.push('--since=' + since); a.push('--', gp);
  const items = []; let cur = null;
  const gl = gp.length + 1;
  for (let ln of gitUtf8(a).split('\n')) {
    ln = ln.replace(/\r$/, '');
    if (ln.startsWith('@@')) { const p = ln.slice(2).split('|'); cur = { hash: p[0], at: p[1], by: p[2], msg: p.length > 3 ? p.slice(3).join('|') : '', files: [], revs: [] }; items.push(cur); continue; }
    if (!cur || !ln.trim()) continue;
    const c2 = ln.split('\t'), st = c2[0].slice(0, 1), fp = c2[c2.length - 1], from = c2.length > 2 ? c2[1] : '';
    if (!fp.startsWith(gp + '/') || fp === gp + '/_log.json') continue;
    // 수정본 기록(rev/{rev}.json): 그 저장이 같이 바꾼 원본 파일은 아래에서 뺀다
    const rv = /^([^/]+)\/rev\/([^/]+)\.json$/.exec(fp.slice(gl)); if (rv && !/\.check-/.test(rv[2]) && st !== 'D') { cur.revs.push({ doc: rv[1], rev: rv[2] }); continue; }
    if (/\/rev\/|\.check-[^/]*\.json$|\/meta\.json$/.test(fp)) continue;
    cur.files.push({ st, path: fp.slice(gl), from: from ? from.slice(Math.min(gl, from.length)) : '' });
  }
  /* 수정 요청 · 직접 수정(수정본 경로)은 수정본(rev/)과 원본을 함께 바꿔 같은 커밋에 들어간다. 그 원본까지 「파일 직접 수정」으로 보이면
     변경이력에 같은 수정이 두 번(수정 · 파일 직접 수정) 잡히므로, 그 커밋에서 수정본이 가리키는 원본 파일과 처음 내용 보관(_처음/)은 뺀다(2026-11-16) */
  for (const it of items) {
    for (const r of it.revs) {
      const dd = path.join(T.guideRoot, r.doc), j = core.readJson(path.join(dd, 'rev', r.rev + '.json')), m = core.readJson(path.join(dd, 'meta.json'));
      if (!j || !m) continue;   // 지운 문서 · 기록이면 그대로 둔다
      const orig = path.relative(T.guideRoot, origPath(dd, m, String(j.file || ''))).replace(/\\/g, '/');
      it.files = it.files.filter((x) => x.path !== orig);
    }
    delete it.revs;
  }
  return { items: items.filter((x) => x.files.length), root: ".history/" + gp, since };   // root: 화면에 전체 경로로 보이게(2026-11-16)
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
// ── Azure DevOps Boards에서 작업 항목 가져오기(2026-11-17) ──
//  팀 설정(sheet.json azure {org, project, scope, startField, endField, doneStates}) + 이 PC 토큰(azure_pat.json[팀])으로 읽기만 한다.
//  범위: 비우면 프로젝트 전체 · 저장 쿼리 링크(…/_queries/query/{id}) · 영역(Area) 또는 반복(Iteration) 경로(그 아래 전부)
//  결과는 구글 시트와 같은 표 모양(values)으로 돌려줘 일정 · 주간 진행 현황이 그대로 쓴다
const AZ_MAX = 1000;
function azureConf(T) {
  const cf = core.readJson(T.sheetConf) || {}, az = cf.azure || {};
  if (cf.provider !== 'azure' || !az.org || !az.project) throw new Error('Azure DevOps가 연결되지 않았습니다. [일정 연결]에서 조직 · 프로젝트를 넣어 주세요.');
  const pat = String((core.readJson(path.join(C.setupDir, 'azure_pat.json')) || {})[T.team] || '');
  if (!pat) throw new Error('이 PC에 Azure DevOps 토큰이 없습니다. [일정 연결]에서 각자 개인 액세스 토큰(PAT)을 넣어 주세요.');
  return { az, pat };
}
async function azureCall({ az, pat }, method, url, body) {
  let r;
  try {
    r = await fetch(url, { method, redirect: 'manual', signal: AbortSignal.timeout(60000),
      headers: { Authorization: 'Basic ' + Buffer.from(':' + pat).toString('base64'), Accept: 'application/json', 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined });
  } catch (e) { throw new Error('Azure DevOps에 닿지 못했습니다: ' + e.message); }
  const txt = await r.text(); let j = null; try { j = JSON.parse(txt); } catch (e) {}
  // 토큰이 틀리면 로그인 화면으로 넘기거나(302 · 203 HTML) 401을 준다
  if (r.status === 401 || r.status === 203 || (r.status >= 300 && r.status < 400) || (!j && r.ok)) throw new Error('토큰이 거부되었습니다. 토큰이 만료되었거나, 조직이 다르거나, 범위(Work Items · Read)가 빠졌는지 확인해 주세요.');
  if (!r.ok) {
    const m = j && (j.message || (j.value && j.value.Message)) ? String(j.message || j.value.Message) : txt.slice(0, 200);
    if (r.status === 404) throw new Error('조직 · 프로젝트 · 쿼리를 찾지 못했습니다(' + m + ')');
    throw new Error('Azure DevOps 오류 ' + r.status + ': ' + m);
  }
  return j;
}
const azDate = (v) => { if (!v) return ''; const d = new Date(v); if (isNaN(d)) return String(v); const p = (n) => String(n).padStart(2, '0'); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`; };
// ── 주간보고로 일정표(WBS) 만들기(2026-11-19, STAgora) ──
//  팀 설정 azure.report(예: 「[주간보고 UX/UI]」)가 있으면: 제목에 그 글이 들고 「/ All」로 끝나는 WorkPlanner 중 가장 최근 스프린트(태그 · 제목의 PL-월.주차, 같으면 나중에 만든 것)를 골라
//  그 보고서(Custom.WPN_Report HTML)의 「주요 일정」 표에서 User Story와 묶음(Local · 운영팀 …)을 읽고, User Story의 하위 [UX] · [UI] 작업을 DevOps에서 바로 읽어
//  CURECA 일정표(구글 시트)와 같은 모양의 표로 만든다 — 열: Part · ID · 메뉴(User Story) · 작업명 · 시작일 · 완료일 · UX/UI 담당자 · UX/UI 상태 + 평일 간트(UX 초록 · UI 파랑)
const WBS_DAYS = '일월화수목금토';
function azState(s) { s = String(s || ''); if (/^(resolved|closed|done|completed)$/i.test(s)) return '완료'; if (/^(in progress|active|doing|committed|developed)$/i.test(s)) return '진행 중'; if (/^(new|to do|todo|proposed|approved)$/i.test(s)) return '대기'; return s; }
function azWho(w) { const n = w && typeof w === 'object' ? String(w.displayName || w.uniqueName || '') : String(w || ''); return n.replace(/\s*\([^)]*\)\s*$/, ''); }
async function azureWbs(T, cx) {
  const az = cx.az, base = az.org + '/' + encodeURIComponent(az.project) + '/_apis/wit/', v = 'api-version=7.0', key = String(az.report).trim();
  const esc = (s) => s.replace(/'/g, "''");
  // ① 최신 스프린트 「… / All」 보고서
  const q = await azureCall(cx, 'POST', base + 'wiql?' + v + '&$top=200', { query: `SELECT [System.Id] FROM WorkItems WHERE [System.TeamProject] = @project AND [System.Title] CONTAINS '${esc(key)}' AND [System.Title] CONTAINS 'All' ORDER BY [System.CreatedDate] DESC` });
  const cand = core.arr(q && q.workItems).map((x) => x.id).slice(0, 200);
  if (!cand.length) throw new Error(`「${key} … / All」 주간보고를 찾지 못했습니다.`);
  const cb = await azureCall(cx, 'POST', base + 'workitemsbatch?' + v, { ids: cand, fields: ['System.Id', 'System.Title', 'System.Tags', 'System.CreatedDate'] });
  const spr = (f) => { const m = /PL-(\d+)\.(\d+)/i.exec(String(f['System.Tags'] || '') + ' ' + String(f['System.Title'] || '')); return m ? +m[1] * 100 + +m[2] : 0; };
  const reps = core.arr(cb && cb.value).filter((w) => /\/\s*All\s*$/i.test(String(w.fields['System.Title'] || '')))
    .sort((a, b) => (spr(b.fields) - spr(a.fields)) || (Date.parse(b.fields['System.CreatedDate']) - Date.parse(a.fields['System.CreatedDate'])));
  if (!reps.length) throw new Error(`「${key} … / All」 주간보고를 찾지 못했습니다.`);
  const rep = await azureCall(cx, 'GET', base + 'workitems/' + reps[0].id + '?' + v);
  const rf = rep.fields || {}, html = String(rf['Custom.WPN_Report'] || ''), sprint = (/PL-\d+\.\d+/i.exec(String(rf['System.Tags'] || '') + ' ' + rf['System.Title']) || [''])[0];
  // ② 「주요 일정」 표: 묶음 제목(div title="[주간보고…]") 아래 User Story 줄(└ 없는 줄). 같은 묶음 제목이 다시 나오면 「상세 일정」이라 멈춘다
  const s0 = html.indexOf('주요 일정'); if (s0 < 0) throw new Error('주간보고에 「주요 일정」이 없습니다(WorkPlanner 보고서를 다시 만들어 주세요).');
  const part = html.slice(s0), groups = [], seenG = {}, stories = [];
  const re = /<tr\b([\s\S]*?)<\/tr>/g; let m, g = '';
  while ((m = re.exec(part))) {
    const row = m[1], gt = /<div title="(\[[^"]*주간보고[^"]*)"/.exec(row);   // 묶음 제목은 표 머리 줄 안에 있다
    if (gt) { const t = gt[1].replace(/&amp;/g, '&'); if (seenG[t]) break; seenG[t] = 1; g = t; groups.push(t); continue; }
    const id = /_workitems\/edit\/(\d+)/.exec(row); if (!id || !g || row.includes('└')) continue;
    if (stories.some((x) => x.id === +id[1])) break;   // 같은 User Story가 다시 나오면 「상세 일정」
    stories.push({ id: +id[1], group: g });
  }
  if (!stories.length) throw new Error('주간보고 「주요 일정」에서 User Story를 찾지 못했습니다.');
  // ③ User Story + 하위 작업(Hierarchy-Forward) 읽기
  const sf = az.startField || 'Microsoft.VSTS.Scheduling.StartDate', ef = az.endField || 'Microsoft.VSTS.Scheduling.TargetDate';
  const st = await azureCall(cx, 'GET', base + 'workitems?ids=' + stories.map((x) => x.id).join(',') + '&$expand=relations&errorPolicy=omit&' + v);
  const sById = {}; core.arr(st && st.value).forEach((w) => { if (w) sById[w.id] = w; });
  const kidIds = []; stories.forEach((s) => { const w = sById[s.id]; s.kids = core.arr(w && w.relations).filter((r) => r.rel === 'System.LinkTypes.Hierarchy-Forward').map((r) => +String(r.url).split('/').pop()).filter(Boolean); kidIds.push(...s.kids); });
  const kById = {}, OE = 'Microsoft.VSTS.Scheduling.OriginalEstimate', CW = 'Microsoft.VSTS.Scheduling.CompletedWork';
  let kf = ['System.Id', 'System.Title', 'System.State', 'System.AssignedTo', sf, ef, OE, CW];
  for (let i = 0; i < kidIds.length; i += 200) {
    let r;
    try { r = await azureCall(cx, 'POST', base + 'workitemsbatch?' + v, { ids: kidIds.slice(i, i + 200), fields: kf, errorPolicy: 'omit' }); }
    catch (e) { if (!/TF51535|field|필드/i.test(e.message) || kf.length === 6) throw e; kf = kf.slice(0, 6); r = await azureCall(cx, 'POST', base + 'workitemsbatch?' + v, { ids: kidIds.slice(i, i + 200), fields: kf, errorPolicy: 'omit' }); }   // 시간 필드가 없는 프로세스면 시간 없이
    core.arr(r && r.value).forEach((w) => { if (w) kById[w.id] = w; });
  }
  // ④ 줄 만들기: User Story마다 [UX] · [UI] 작업을 같은 이름끼리 한 줄로(UX 담당 · 상태 / UI 담당 · 상태)
  const d0 = (x) => { if (!x) return null; const d = new Date(x); return isNaN(d) ? null : new Date(d.getFullYear(), d.getMonth(), d.getDate()); };
  const lines = [];
  stories.forEach((s) => {
    const w = sById[s.id]; if (!w) return; const f = w.fields || {}, pairs = [], byKey = {};
    s.kids.map((id) => kById[id]).filter(Boolean).forEach((k) => {
      const t = String(k.fields['System.Title'] || ''), mm = /^\s*\[(UX|UI)[^\]]*\]\s*/i.exec(t); if (!mm) return;   // [UX] · [UI] 작업만(개발 · 요청 작업은 뺀다)
      const kind = mm[1].toUpperCase(), name = t.slice(mm[0].length).trim(), kk = name.toLowerCase();
      let p = byKey[kk]; if (!p || p[kind]) { p = { name }; pairs.push(p); byKey[kk] = p; }
      const num = (x) => (x == null || x === '' ? null : +x);
      p[kind] = { id: k.id, title: t, who: azWho(k.fields['System.AssignedTo']), st: azState(k.fields['System.State']), raw: String(k.fields['System.State'] || ''), s: d0(k.fields[sf]), e: d0(k.fields[ef]), oe: num(k.fields[OE]), cw: num(k.fields[CW]) };
    });
    const sl = { part: s.group.replace(/^.*\/\s*/, '').trim() || s.group, id: s.id, menu: String(f['System.Title'] || ''), s: d0(f[sf]), e: d0(f[ef]), st: azState(f['System.State']) };
    if (!pairs.length) lines.push(Object.assign({ name: '', UX: null, UI: null, solo: true }, sl));
    pairs.sort((a, b) => ((a.UX || a.UI).s || 0) - ((b.UX || b.UI).s || 0)).forEach((p) => lines.push(Object.assign({}, sl, p)));
  });
  // ⑤ 간트 범위: 가장 이른 시작 주 월요일 ~ 가장 늦은 끝(오늘 포함), 평일만, 최대 26주
  const all = []; lines.forEach((l) => [l.UX, l.UI].forEach((x) => { if (x) { if (x.s) all.push(x.s); if (x.e) all.push(x.e); } }));
  const today = d0(new Date()); all.push(today);
  let lo = new Date(Math.min(...all)), hi = new Date(Math.max(...all)); lo.setDate(lo.getDate() - ((lo.getDay() + 6) % 7));
  if ((hi - lo) / 864e5 > 182) hi = new Date(lo.getTime() + 182 * 864e5);
  const days = []; for (let d = new Date(lo); d <= hi; d.setDate(d.getDate() + 1)) if (d.getDay() % 6) days.push(new Date(d));
  const L = ['Part', 'ID', '메뉴(User Story)', '작업명', '시작일', '완료일', '시간(예상 → 실적)', 'UX 담당자', 'UI 담당자', 'UX 상태', 'UI 상태'], G0 = L.length;
  const hrs = (xs) => { const o = xs.filter((x) => x && x.oe != null), c = xs.filter((x) => x && x.cw != null); if (!o.length && !c.length) return ''; const f = (n) => String(Math.round(n * 10) / 10); return (o.length ? f(o.reduce((a, x) => a + x.oe, 0)) : '-') + ' → ' + (c.length ? f(c.reduce((a, x) => a + x.cw, 0)) : '-'); };
  const ymd = (d) => d ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}` : '';
  const H0 = L.slice(), H1 = L.map(() => ''), H2 = L.map(() => '');
  days.forEach((d, k) => { H0.push(k === 0 || d.getMonth() !== days[k - 1].getMonth() ? (d.getMonth() + 1) + '월' : ''); H1.push((d.getMonth() + 1) + '/' + d.getDate()); H2.push(WBS_DAYS[d.getDay()]); });
  const values = [H0, H1, H2], bg = [[], [], []], dv = [], fw = [[], [], []], fc = [[], [], []], mg = [], kids = [];
  L.forEach((_, j) => { fw[0][j] = true; });
  const UXC = '#d9ead3', UIC = '#cfe2f3', BOTH = '#b7dcc8', SUBC = '#5f6368';
  const XU = L.indexOf('UX 담당자'), XI = L.indexOf('UI 담당자'), SU = L.indexOf('UX 상태'), SI = L.indexOf('UI 상태');
  const bar = (ranges) => { const b = []; days.forEach((d, k) => { const hit = ranges.map((x) => !!(x.t && x.t.s && x.t.e && d >= x.t.s && d <= x.t.e)); if (hit[0] || hit[1]) b[G0 + k] = hit[0] && hit[1] ? BOTH : hit[0] ? ranges[0].c : ranges[1].c; }); return b; };
  lines.forEach((l) => {
    const r = values.length, ux = l.UX, ui = l.UI;
    const ss = [ux && ux.s, ui && ui.s].filter(Boolean), ee = [ux && ux.e, ui && ui.e].filter(Boolean);
    const sd = ss.length ? new Date(Math.min(...ss)) : l.solo ? l.s : null, ed = ee.length ? new Date(Math.max(...ee)) : l.solo ? l.e : null;
    const row = [l.part, String(l.id), l.menu, l.name, ymd(sd), ymd(ed), hrs([ux, ui]), ux ? ux.who : '', ui ? ui.who : '', ux ? ux.st : (l.solo ? l.st : ''), ui ? ui.st : ''];
    days.forEach(() => row.push(''));
    values.push(row); bg.push(bar([{ t: ux, c: UXC }, { t: ui, c: UIC }])); fc.push([]); dv.push([r, SU], [r, SI]);
    // 세부 일정(접힘): 이 작업명의 [UX] 작업 · [UI] 작업 한 줄씩 — 주간보고 「세부 일정」의 └ 줄과 같다(ID · 담당 · 상태 · 예상 → 실적 · 기간)
    const ch = [];
    [['UX', ux, XU, SU, UXC], ['UI', ui, XI, SI, UIC]].forEach(([, t, wc, sc, col]) => {
      if (!t) return; const cr = values.length, crow = [l.part, String(l.id), l.menu, '└ #' + t.id + ' ' + t.title, ymd(t.s), ymd(t.e), hrs([t]), '', '', '', ''];
      crow[wc] = t.who; crow[sc] = t.st; days.forEach(() => crow.push(''));
      const f = []; for (let j = 3; j < G0; j++) f[j] = SUBC;
      values.push(crow); bg.push(bar([{ t, c: col }, { t: null, c: col }])); fc.push(f); dv.push([cr, sc]); ch.push(cr);
    });
    if (ch.length) kids.push({ row: r, key: l.id + '|' + l.name, rows: ch });
  });
  // 같은 Part · 같은 User Story는 위아래 병합(엑셀 일정표처럼)
  const merge = (c, same) => { let a = 3; for (let r = 4; r <= values.length; r++) { if (r < values.length && same(r) && values[r][c]) continue; if (r - a > 1 && values[a][c]) mg.push([a, c, r - a, 1]); a = r; } };
  merge(0, (r) => values[r][0] === values[r - 1][0]);
  [1, 2].forEach((c) => merge(c, (r) => values[r][1] === values[r - 1][1]));
  const url = az.org + '/' + encodeURIComponent(az.project) + '/_workitems/edit/' + rep.id;
  return { name: String(rf['System.Title'] || '') + (sprint ? ' (' + sprint + ')' : ''), values, bg, dv, fw, fc, mg, fzc: 4, kids, at: Date.now(), readonly: true, azure: true, wbs: true,   // kids: 접는 세부 줄 [{row: 작업명 줄, key, rows: [세부 줄]}]
    count: lines.length, total: stories.length, src: { id: rep.id, url, sprint }, warn: kf.length === 6 ? '작업 시간(예상 · 실적) 필드가 없어 시간 없이 가져왔습니다.' : '' };
}
async function azureItems(T) {
  const cx = azureConf(T), { az } = cx, base = az.org + '/' + encodeURIComponent(az.project) + '/_apis/wit/', v = 'api-version=7.0';
  if (String(az.report || '').trim()) return azureWbs(T, cx);
  const scope = String(az.scope || '').trim(), qm = /_queries\/query(?:-edit)?\/([0-9a-f-]{36})/i.exec(scope) || /^([0-9a-f-]{36})$/i.exec(scope);
  let res;
  if (qm) res = await azureCall(cx, 'GET', base + 'wiql/' + qm[1] + '?' + v + '&$top=' + AZ_MAX);
  else {
    const esc = (s) => s.replace(/'/g, "''");
    const where = scope ? ` AND ([System.AreaPath] UNDER '${esc(scope)}' OR [System.IterationPath] UNDER '${esc(scope)}')` : '';
    res = await azureCall(cx, 'POST', base + 'wiql?' + v + '&$top=' + AZ_MAX, { query: `SELECT [System.Id] FROM WorkItems WHERE [System.TeamProject] = @project AND [System.State] <> 'Removed'${where} ORDER BY [System.ChangedDate] DESC` });
  }
  // 평면 쿼리는 workItems, 트리 · 링크 쿼리는 workItemRelations(target)
  let ids = core.arr(res && res.workItems).map((x) => x.id);
  if (!ids.length) ids = core.arr(res && res.workItemRelations).map((x) => x && x.target && x.target.id).filter(Boolean);
  ids = [...new Set(ids)].slice(0, AZ_MAX);
  const sf = az.startField || 'Microsoft.VSTS.Scheduling.StartDate', ef = az.endField || 'Microsoft.VSTS.Scheduling.TargetDate';
  const base2 = ['System.Id', 'System.WorkItemType', 'System.Title', 'System.State', 'System.AssignedTo', 'System.AreaPath', 'System.IterationPath'];
  let fields = base2.concat([sf, ef]), missing = '';
  const got = [];
  for (let i = 0; i < ids.length; i += 200) {
    const part = ids.slice(i, i + 200);
    let r;
    try { r = await azureCall(cx, 'POST', base + 'workitemsbatch?' + v, { ids: part, fields }); }
    catch (e) {
      // 시작일 · 목표일 필드 이름이 이 프로세스에 없으면 그 필드 없이 다시(알림에 남김)
      if (!/TF51535|field|필드/i.test(e.message) || fields.length === base2.length) throw e;
      missing = e.message; fields = base2.slice(); r = await azureCall(cx, 'POST', base + 'workitemsbatch?' + v, { ids: part, fields });
    }
    got.push(...core.arr(r && r.value));
  }
  const byId = {}; got.forEach((w) => { byId[w.id] = w; });
  const doneSet = String(az.doneStates || 'Done, Closed, Resolved').split(/[,，]/).map((s) => s.trim().toLowerCase()).filter(Boolean);
  const NEW = /^(new|to do|todo|proposed|approved|design)$/i;
  const values = [['ID', '유형', '업무명', '업무 상태', '담당자', '시작일', '완료일', '구분', '반복']];
  for (const id of ids) {
    const w = byId[id]; if (!w) continue; const f = w.fields || {};
    const st = String(f['System.State'] || ''), lo = st.toLowerCase();
    // 상태 → 일정 탭 분류(완료 · 진행 중 · 그 밖): 「완료로 볼 상태」면 완료, 새로 만든 상태면 그대로, 그 밖은 진행 중
    const stv = doneSet.includes(lo) ? (/완료|done|closed?/i.test(st) ? st : '완료 (' + st + ')') : NEW.test(st) ? st : (/진행|in\s*progress|active|doing|committed/i.test(st) ? '진행 중 (' + st + ')' : '진행 중 (' + st + ')');
    const who = f['System.AssignedTo']; const own = who && typeof who === 'object' ? String(who.displayName || who.uniqueName || '') : String(who || '');
    const area = String(f['System.AreaPath'] || ''), iter = String(f['System.IterationPath'] || '');
    values.push([String(w.id), String(f['System.WorkItemType'] || ''), String(f['System.Title'] || ''), stv, own, azDate(f[sf]), azDate(f[ef]), area.split('\\').slice(1).join(' › ') || area, iter.split('\\').slice(1).join(' › ') || iter]);
  }
  return { name: 'Azure DevOps · ' + az.project, values, at: Date.now(), readonly: true, azure: true, count: values.length - 1, total: ids.length,
    warn: missing ? '시작일 · 목표일 필드를 찾지 못해 날짜 없이 가져왔습니다. [일정 연결]에서 필드 이름을 확인해 주세요.' : '' };
}
// ── Azure DevOps Wiki에 시트 묶음 엑셀 올리기(2026-11-19, 지금은 STAgora 언어셋 — meta.books.{묶음}.wiki에 페이지 주소가 있을 때만) ──
//  이 PC 토큰(Wiki · Read & write)으로: ① 첨부(.attachments) 올리기 ② 페이지 읽기(ETag) ③ 맨 위 「업데이트 기록」 자리에 [파일](경로) + 변경 줄을 넣어 고치기
//  조직 · 프로젝트는 팀 [일정 연결] 설정의 것만 쓴다(페이지 주소가 다른 조직이면 거절 — 토큰을 엉뚱한 곳에 쓰지 않게)
async function azureReq({ pat }, method, url, opt) {
  opt = opt || {}; let r;
  const headers = Object.assign({ Authorization: 'Basic ' + Buffer.from(':' + pat).toString('base64'), Accept: 'application/json' }, opt.json !== undefined ? { 'Content-Type': 'application/json' } : {}, opt.headers || {});
  try { r = await fetch(url, { method, redirect: 'manual', signal: AbortSignal.timeout(120000), headers, body: opt.json !== undefined ? JSON.stringify(opt.json) : opt.raw }); }
  catch (e) { throw new Error('Azure DevOps에 닿지 못했습니다: ' + e.message); }
  const txt = await r.text(); let j = null; try { j = JSON.parse(txt); } catch (e) {}
  if (r.status === 401 || r.status === 203 || (r.status >= 300 && r.status < 400) || (!j && r.ok && txt)) throw new Error('토큰이 거부되었습니다. 토큰이 만료되었거나 범위(Wiki · Read & write)가 빠졌는지 확인해 주세요.');
  if (!r.ok) {
    const m = j && (j.message || (j.value && j.value.Message)) ? String(j.message || j.value.Message) : txt.slice(0, 200);
    if (r.status === 403) throw new Error('Wiki 권한이 없습니다(' + m + '). 토큰 범위에 Wiki · Read & write가 있는지, 이 Wiki를 고칠 권한이 있는지 확인해 주세요.');
    if (r.status === 404) throw new Error('Wiki 페이지를 찾지 못했습니다(' + m + ')');
    if (r.status === 412) throw new Error('그사이 Wiki 페이지가 바뀌었습니다. 다시 눌러 주세요.');
    throw new Error('Azure DevOps 오류 ' + r.status + ': ' + m);
  }
  return { j, etag: r.headers.get('etag') || '' };
}
function wikiTarget(T, pageUrl) {
  const cx = azureConf(T), org = String(cx.az.org).replace(/\/+$/, '');
  const m = /^(https:\/\/[^/]+\/[^/]+)\/([^/]+)\/_wiki\/wikis\/([^/?#]+)\/(\d+)/.exec(String(pageUrl || ''));
  if (!m) throw new Error('Wiki 페이지 주소가 아닙니다: ' + pageUrl);
  if (m[1].toLowerCase() !== org.toLowerCase()) throw new Error('Wiki 페이지의 조직이 [일정 연결]의 조직과 다릅니다.');
  const base = org + '/' + m[2] + '/_apis/wiki/wikis/' + m[3];
  return { cx, base, page: base + '/pages/' + m[4] + '?api-version=7.1', pageId: m[4] };
}
// 묶음의 Wiki 주소: 이 팀 UX 문서 meta.books[book].wiki
function bookWiki(T, gid, book) {
  if (!/^[\w.()\-가-힣]+$/.test(String(gid || '')) || !/^[\w.\-]+$/.test(String(book || ''))) throw new Error('문서 · 묶음 이름이 잘못되었습니다.');
  const m = core.readJson(path.join(T.guideRoot, gid, 'meta.json')) || {}, b = (m.books || {})[book];
  if (!b || !b.wiki) throw new Error('이 시트 묶음에는 올릴 Wiki 페이지가 정해져 있지 않습니다.');
  return String(b.wiki);
}
// 작업 항목 찾기 · 읽기(읽기만): 제목에 글이 든 항목 목록, 또는 항목 하나의 모든 필드(설명 HTML 포함)
on('GET', '/api/azure/find', async ({ q, T }) => {
  const cx = azureConf(T), base = cx.az.org + '/' + encodeURIComponent(cx.az.project) + '/_apis/wit/', v = 'api-version=7.0';
  const t = String(q.get('title') || '').trim(); if (!t) throw new Error('찾을 제목을 넣어 주세요.');
  const res = await azureCall(cx, 'POST', base + 'wiql?' + v + '&$top=50', { query: `SELECT [System.Id] FROM WorkItems WHERE [System.TeamProject] = @project AND [System.Title] CONTAINS '${t.replace(/'/g, "''")}' ORDER BY [System.ChangedDate] DESC` });
  const ids = core.arr(res && res.workItems).map((x) => x.id).slice(0, 50); if (!ids.length) return { items: [] };
  const r = await azureCall(cx, 'POST', base + 'workitemsbatch?' + v, { ids, fields: ['System.Id', 'System.WorkItemType', 'System.Title', 'System.State', 'System.ChangedDate', 'System.AreaPath'] });
  return { items: core.arr(r && r.value).map((w) => ({ id: w.id, type: w.fields['System.WorkItemType'], title: w.fields['System.Title'], state: w.fields['System.State'], changed: w.fields['System.ChangedDate'], area: w.fields['System.AreaPath'] })) };
});
on('GET', '/api/azure/item', async ({ q, T }) => {
  const cx = azureConf(T), id = parseInt(q.get('id'), 10); if (!(id > 0)) throw new Error('작업 항목 번호가 잘못되었습니다.');
  const r = await azureCall(cx, 'GET', cx.az.org + '/' + encodeURIComponent(cx.az.project) + '/_apis/wit/workitems/' + id + '?$expand=relations&api-version=7.0');
  return { id: r.id, rev: r.rev, fields: r.fields || {}, relations: core.arr(r.relations).map((x) => ({ rel: x.rel, url: x.url, name: x.attributes && x.attributes.name })) };
});
on('GET', '/api/azure/wiki', async ({ q, T }) => {
  const t = wikiTarget(T, bookWiki(T, q.get('id'), q.get('book')));
  const { j } = await azureReq(t.cx, 'GET', t.page + '&includeContent=true');
  return { path: j && j.path, content: String((j && j.content) || ''), url: j && j.remoteUrl };
});
on('POST', '/api/azure/wiki', async ({ req, body, T }) => {
  if (!core.canWrite(req, ['guide'])) throw new Error(core.roMsg('guide'));
  const b = (await body()) || {}, name = String(b.fileName || '').trim(), data = String(b.data || ''), lines = core.arr(b.lines).map((x) => String(x).trim()).filter(Boolean);
  if (!/^[^\\/:*?"<>|]+\.xlsx$/i.test(name)) throw new Error('파일 이름이 잘못되었습니다.');
  if (!data || data.length > 60 * 1024 * 1024 || !/^[A-Za-z0-9+/=]+$/.test(data)) throw new Error('엑셀 파일 내용이 잘못되었습니다.');
  const t = wikiTarget(T, bookWiki(T, b.id, b.book));
  // 같은 이름 파일이 이미 페이지에 있으면 올리지 않는다(두 번 누름 · 같은 날 같은 버전)
  const pg0 = await azureReq(t.cx, 'GET', t.page + '&includeContent=true');
  if (String((pg0.j && pg0.j.content) || '').includes('[' + name + ']')) throw new Error('Wiki에 같은 이름의 파일(' + name + ')이 이미 있습니다.');
  // ① 첨부: 내용은 base64 글 그대로 보낸다(Azure Wiki 첨부 API 규칙)
  const up = await azureReq(t.cx, 'PUT', t.base + '/attachments?name=' + encodeURIComponent(name) + '&api-version=7.1', { raw: data, headers: { 'Content-Type': 'application/octet-stream' } });
  const ap = String((up.j && up.j.path) || '/.attachments/' + name);
  // ② 페이지 다시 읽기(ETag) → ③ 「[변경사항]」 제목 바로 아래(없으면 맨 위)에 새 기록: [파일](경로) + 「*   [구분] 내용」 줄들, 기록 사이는 빈 줄
  const pg = await azureReq(t.cx, 'GET', t.page + '&includeContent=true');
  const block = '[' + name + '](' + ap.replace(/ /g, '%20') + ')\n' + lines.map((l) => '*   ' + l + '\n').join('');
  const old = String((pg.j && pg.j.content) || ''), hm = /^(\s*\[변경사항\][^\n]*\n)\s*/.exec(old);
  const content = hm ? hm[1] + '\n' + block + '\n' + old.slice(hm[0].length) : block + (old ? '\n' + old : '');
  await azureReq(t.cx, 'PATCH', t.page, { json: { content }, headers: { 'If-Match': pg.etag } });
  return { ok: true, attachment: ap, url: (pg.j && pg.j.remoteUrl) || '' };
});
// ── Azure 일정 팀 공유 사본(2026-11-19) ──
//  토큰이 있는 PC가 일정을 받을 때마다(화면 · 30분마다 백그라운드) 팀 config 폴더의 azure_shared.json에 사본을 남긴다(깃으로 모든 PC에 공유, 웹으로 내보내지 않음).
//  토큰이 없는 PC는 그 사본을 보기 전용으로 본다 — 토큰은 공유하지 않는다. 내용이 바뀌었거나 1시간이 지났을 때만 써서 이력 동기화를 늘리지 않는다
const azShared = (T) => path.join(path.dirname(T.sheetConf), 'azure_shared.json');
const hasAzPat = (T) => !!String((core.readJson(path.join(C.setupDir, 'azure_pat.json')) || {})[T.team] || '');
async function azureRefresh(T) {
  const d = await azureItems(T), txt = JSON.stringify(d);
  if (C.readonly) return d;
  const ck = path.join(T.sheetCache, 'azure.json'); fs.mkdirSync(path.dirname(ck), { recursive: true }); fs.writeFileSync(ck, txt, 'utf8');
  try {
    const f = azShared(T), old = core.readJson(f) || {}, key = (x) => JSON.stringify(Object.assign({}, x, { at: 0 }));
    if (!old.data || key(old.data) !== key(d) || Date.now() - (old.at || 0) > 3600000) { core.writeJson(f, { at: Date.now(), pc: C.pcName, by: core.meName(), data: d }); core.syncWant(); }
  } catch (e) {}
  return d;
}
on('GET', '/api/sheet/data', async ({ q, T, res, send, sendJson }) => {
  // Azure DevOps로 연결된 팀: 작업 항목을 표로(마지막으로 받은 사본은 cache=1로 먼저)
  if ((core.readJson(T.sheetConf) || {}).provider === 'azure') {
    const ck = path.join(T.sheetCache, 'azure.json');
    // 이 PC에 토큰이 없으면 팀 공유 사본(누가 · 언제 받았는지 함께)
    if (!hasAzPat(T)) {
      const sh = core.readJson(azShared(T));
      if (!sh || !sh.data) return sendJson(res, 502, { error: '아직 팀에 공유된 일정이 없습니다. 토큰이 있는 팀원이 일정 탭을 한 번 열면 모두에게 보입니다.' });
      return sendJson(res, 200, Object.assign({}, sh.data, { shared: { at: sh.at, pc: sh.pc, by: sh.by } }));
    }
    if (q.get('cache') && core.exists(ck)) return send(res, 200, 'application/json; charset=utf-8', '{"cache":true,"cachedAt":"' + localIso(fs.statSync(ck).mtime) + '","data":' + core.readText(ck) + '}');
    try {
      const d = await azureRefresh(T);
      return send(res, 200, 'application/json; charset=utf-8', JSON.stringify(d));
    } catch (e) {
      if (core.exists(ck)) return send(res, 200, 'application/json; charset=utf-8', '{"cached":true,"error":' + JSON.stringify(e.message) + ',"data":' + core.readText(ck) + '}');
      return sendJson(res, 502, { error: e.message });
    }
  }
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
const helpers = { azureItems, protoSnapshot, testKey, projDir, readProj, keyOf, workKey, readMinute, readNotes, noteKey, readGuides, origPath, writeOrig, keepFirst, mainName, applyKeys, appliedDocs, agentInfo, findClaudeCode, sheetCheck, setupEnv: () => { envCache = null; return setupEnv(); } };
require('./figma')(on, helpers);   // Figma 토큰(REST API) — 캡처. writes.js가 요청 완료 때 helpers.figmaAfterDone을 부른다
require('./writes')(on, helpers);

module.exports = { helpers, find, routes, testKey, projDir, readProj, keyOf, workKey, azureRefresh, hasAzPat };
