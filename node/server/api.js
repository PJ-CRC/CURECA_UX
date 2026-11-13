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
on('GET', '/api/jobs', ({ q, req }) => {
  // 플러그인이 캡처 작업을 물으면 자동 캡처 목록에서 대기열을 먼저 채운다(writes.js autoFill)
  if (q.get('kind') === 'capture' && String(req.headers.origin) === 'null' && helpers.autoFill) { try { helpers.autoFill(q.get('key')); } catch (e) {} }
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
  const here = fileNames(dir).filter((n) => /\.md$/i.test(n) && !/^[_.]/.test(n));
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
      if (isFiles && !(info && info.file && core.exists(path.join(rd, rn, String(info.file))))) continue;
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
  const applied = fillApplied(raw);
  return { items: sortDescPS(list, (x) => String(x.updatedAt || '')), applied };
}
on('GET', '/api/guides', ({ T }) => readGuides(T));

// GET /api/worklogs?team=: 화면설계 작업 기록(규칙 저장소 work-logs/*.md, reference-rules/work-log.md 틀) 목록
//  머리말(status · case · requester · menu · cids · test · started)과 지금 단계(「단계」 표에서 관문 칸이 빈 첫 줄), `다음:` 줄
const STAGES = ['0. 시작', '1. 요건 정의', '2. 근거 · 분석', '3. 화면 설계', '4. 검토', '5. 고객 UX 리뷰', '6. 다국어', '7. 완료'];
function readWorkLog(f) {
  const t = String(core.readText(f) || '').replace(/^﻿/, ''), fm = {}, m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(t);
  if (m) for (const l of m[1].split(/\r?\n/)) { const k = /^([A-Za-z_]+):\s*(.*?)\s*(#.*)?$/.exec(l); if (!k || /^\s/.test(l)) continue; let v = k[2]; if (/^\[.*\]$/.test(v)) v = v.slice(1, -1).split(',').map((x) => x.trim().replace(/^["']|["']$/g, '')).filter(Boolean); fm[k[1]] = v; }
  const title = (/^#\s*작업 기록:\s*(.+)$/m.exec(t) || [])[1] || '';
  let stage = -1; const sec = /##\s*단계\s*\r?\n([\s\S]*?)(\r?\n##\s|$)/.exec(t);
  if (sec) { const rows = sec[1].split(/\r?\n/).filter((l) => /^\|\s*\d\./.test(l)); for (let i = 0; i < rows.length; i++) { const c = rows[i].split('|').map((x) => x.trim()); if (!c[2] && !c[3]) { stage = i; break; } } if (stage < 0 && rows.length) stage = rows.length; }
  const next = (/^다음:\s*(.+)$/m.exec(t) || [])[1] || '';
  return { name: path.basename(f, '.md'), title: title.trim(), status: String(fm.status || ''), case: String(fm.case || ''), requester: String(fm.requester || ''), menu: String(fm.menu || ''),
    cids: Array.isArray(fm.cids) ? fm.cids : [], test: String(fm.test) === 'true', started: String(fm.started || ''), stage, stageName: stage >= 0 && stage < STAGES.length ? STAGES[stage] : stage >= STAGES.length ? '끝' : '', next: next.trim() };
}
on('GET', '/api/worklogs', ({ T }) => {
  const dir = path.join(T.guideRoot, 'work-logs');
  const items = fileNames(dir).filter((n) => /\.md$/i.test(n) && !/^readme\.md$/i.test(n)).map((n) => readWorkLog(path.join(dir, n)));
  return { dir: `${T.guideRel}/work-logs`, stages: STAGES, items: items.sort((a, b) => String(b.started).localeCompare(String(a.started)) || a.name.localeCompare(b.name)) };
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
function findClaude() {
  if (claudeApp) return claudeApp;
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
    winget: C.isMac ? false : !!onPath('winget'), historySync: hs, historySyncing: !!(hs && hs.busy) || !!(helpers.isLoginOpen && helpers.isLoginOpen()),
    // Figma 토큰(시작 안내 4단계 「Figma 연결」을 토큰으로 했는지): 있고 Figma가 거부하지 않았으면 true
    figmaToken: (() => { const t = core.readJson(path.join(C.setupDir, 'figma_token.json')) || {}; return !!(t.token && !t.deadAt); })() };
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
const helpers = { protoSnapshot, testKey, projDir, readProj, keyOf, workKey, readMinute, readNotes, noteKey, readGuides, origPath, writeOrig, keepFirst, mainName, applyKeys, appliedDocs, agentInfo, findClaudeCode, sheetCheck, setupEnv: () => { envCache = null; return setupEnv(); } };
require('./figma')(on, helpers);   // Figma 토큰(REST API) — 캡처. writes.js가 요청 완료 때 helpers.figmaAfterDone을 부른다
require('./writes')(on, helpers);

module.exports = { helpers, find, routes, testKey, projDir, readProj, keyOf, workKey };
