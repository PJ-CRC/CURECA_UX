// Figma 토큰(개인 액세스 토큰, Figma REST API) — 이 PC에만(설치 폴더 밖 setupDir/figma_token.json, 저장소 · 배포 · .history에 넣지 않는다)
//  - 토큰은 api.figma.com 말고 어디에도 보내지 않고, 화면에도 끝 4자리만 보인다. 기록 파일에 남기지 않는다
//  - 캡처: GET /v1/images/{파일}?ids=…로 Figma가 그린 PNG를 받아 projects/{fileKey}/shots에 저장(플러그인 · Claude 캡처와 같은 자리 · 같은 shots_meta)
//  - 요청 완료 때: Claude가 완료와 함께 보낸 frames(실제로 고친 프레임)를 서버가 토큰으로 다시 캡처한다(writes.js → h.figmaAfterDone)
'use strict';
const fs = require('fs');
const path = require('path');
const core = require('./core');
const { C } = core;

module.exports = function register(on, h) {
  const nn = (v) => (v == null ? '' : String(v));
  const tokFile = () => path.join(C.setupDir, 'figma_token.json');
  const readTok = () => core.readJson(tokFile()) || {};
  // 토큰 만료 기간(일): Figma에서 고를 수 있는 1 · 7 · 30 · 90일, 모르면 90일(기본 · 최대)
  const tokDays = (v) => { const n = parseInt(v, 10); return [1, 7, 30, 90].includes(n) ? n : 90; };
  // 만료일(YYYY-MM-DD, 이 PC 날짜) = 저장한 날 + 기간
  const expOf = (at, days) => { const d = new Date(at || Date.now()); if (isNaN(d)) return ''; d.setDate(d.getDate() + days); const p = (x) => String(x).padStart(2, '0'); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`; };
  const API = 'https://api.figma.com/v1';
  // 쓸 수 있는 토큰: 있고, Figma가 거부(401 → deadAt)하지 않은 것. 거부된 토큰으로 3초마다 다시 시도하지 않는다(2026-11-13 점검 F5) — 시작 안내에서 새 토큰을 넣거나 [확인]이 되면 다시
  const liveTok = () => { const t = readTok(); return !!nn(t.token) && !t.deadAt; };
  const log = (t) => { try { console.log(new Date().toISOString() + ' [figma] ' + t); } catch (e) {} };

  async function figma(pathQ, token, post) {
    const tk = token || nn(readTok().token);
    if (!tk) throw new Error('Figma 토큰이 없습니다. 시작 안내에서 넣어 주세요.');
    const o = { headers: { 'X-Figma-Token': tk }, signal: AbortSignal.timeout(60000) };
    if (post) { o.method = 'POST'; o.headers['Content-Type'] = 'application/json'; o.body = JSON.stringify(post); }
    const r = await fetch(API + pathQ, o);
    const txt = await r.text(); let j = null; try { j = JSON.parse(txt); } catch (e) {}
    if (r.status === 401 && !token) { try { const t = readTok(); if (nn(t.token) === tk && !t.deadAt) { t.deadAt = core.now(); core.writeJson(tokFile(), t); } } catch (e) {} }
    else if (r.ok && !token) { try { const t = readTok(); if (nn(t.token) === tk && t.deadAt) { delete t.deadAt; core.writeJson(tokFile(), t); } } catch (e) {} }
    if (!r.ok) {
      const ra = r.headers.get('retry-after');
      const why = r.status === 401 ? '토큰이 만료됐거나 맞지 않습니다(시작 안내에서 새 토큰을 넣어 주세요)' : r.status === 403 ? '토큰이 맞지 않거나 이 파일을 볼 권한이 없습니다(댓글 쓰기는 토큰 권한 Comments: Read and write)' : r.status === 404 ? '파일 · 프레임을 찾지 못했습니다' : r.status === 429 ? 'Figma 사용 한도에 걸렸습니다' + (ra ? `(${ra}초 뒤 다시)` : '') : 'Figma 응답 오류';
      const e = new Error(`${why} (HTTP ${r.status}${j && (j.err || j.message) ? ' · ' + nn(j.err || j.message).slice(0, 120) : ''})`); e.status = r.status; throw e;
    }
    return j;
  }

  // 프레임 크기(목록 catalog.json) — 캡처 배율을 정한다(긴 변이 8000을 넘으면 줄인다: Claude 캡처와 같은 기준)
  function frameInfo(key) {
    const cat = core.readJson(path.join(h.projDir(key), 'catalog.json')) || {}, out = {};
    for (const pg of core.arr(cat.pages)) for (const f of core.arr(pg.frames)) if (f) out[nn(f[0])] = { name: nn(f[1]), w: +f[2] || 0, h: +f[3] || 0, page: nn(pg.name) };
    return out;
  }

  function saveShot(key, nid, bytes, o) {
    const dir = path.join(h.projDir(key), 'shots'); fs.mkdirSync(dir, { recursive: true });
    const base = nid.replace(':', '-'), pf = path.join(dir, base + '.png');
    // o.cmp: Figma 파일이 바뀌어 다시 받은 캡처 — 그림이 실제로 달라졌을 때만 「Figma에서 고침」(editAt)으로 본다(프로토타입 갱신 필요가 괜히 뜨지 않게)
    let edit = !!o.edit;
    if (o.cmp) { let old = null; try { old = fs.readFileSync(pf); } catch (e) {} edit = !!old && !old.equals(bytes); }
    core.rmGlob(dir, (n) => n === base + '.jpg');
    fs.writeFileSync(pf, bytes);
    const mf = path.join(h.projDir(key), 'shots_meta.json'); const meta = core.readJson(mf) || {};
    const prev = meta[nid] && meta[nid].editAt ? String(meta[nid].editAt) : '';
    meta[nid] = { at: core.now(), w: o.w || 0, h: o.h || 0, by: o.by || 'Figma API', name: o.name || '', ext: 'png', editAt: edit ? core.now() : prev };
    core.writeJson(mf, meta);
  }

  // 프레임 여러 개를 한 번에(같은 배율끼리 한 요청 — Figma 한도를 아낀다)
  async function capture(key, ids, by, edit, cmp) {
    if (!h.testKey(key)) throw new Error('잘못된 파일 키입니다.');
    ids = [...new Set(core.arr(ids).map(nn).filter((x) => /^\d+:\d+$/.test(x)))].slice(0, 50);
    if (!ids.length) throw new Error('캡처할 프레임이 없습니다.');
    const info = frameInfo(key), groups = {};
    for (const id of ids) { const f = info[id] || {}; const mx = Math.max(f.w || 0, f.h || 0); const sc = mx > 8000 ? Math.max(0.01, Math.floor(8000 / mx * 100) / 100) : 1; (groups[sc] = groups[sc] || []).push(id); }
    const results = [];
    for (const sc of Object.keys(groups)) {
      const part = groups[sc];
      const j = await figma(`/images/${encodeURIComponent(key)}?ids=${encodeURIComponent(part.join(','))}&format=png&scale=${sc}`);
      if (j && j.err) throw new Error('Figma 응답 오류: ' + nn(j.err));
      for (const id of part) {
        const url = j && j.images ? j.images[id] : null, f = info[id] || {};
        if (!url) { results.push({ nodeId: id, ok: false, error: 'Figma가 그림을 만들지 못했습니다(지워졌거나 보이지 않는 프레임)' }); continue; }
        try {
          const r = await fetch(url, { signal: AbortSignal.timeout(120000) });
          if (!r.ok) throw new Error('그림 받기 실패 HTTP ' + r.status);
          const buf = Buffer.from(await r.arrayBuffer());
          if (!(buf.length > 8 && buf[0] === 0x89 && buf[1] === 0x50)) throw new Error('PNG가 아닙니다');
          saveShot(key, id, buf, { w: f.w, h: f.h, name: f.name, by: by || 'Figma API', edit, cmp });
          results.push({ nodeId: id, ok: true, bytes: buf.length });
        } catch (e) { results.push({ nodeId: id, ok: false, error: e.message }); }
      }
    }
    log(`캡처 ${key.slice(0, 6)} ${results.filter((x) => x.ok).length}/${results.length}`);
    return results;
  }

  // 요청 완료 → 고친 프레임 다시 캡처(토큰이 있을 때만, 응답을 기다리지 않고 뒤에서). Figma 클라우드에 반영되는 시간을 조금 두고, 실패하면 한 번 더
  h.figmaAfterDone = function (key, frames, reqId) {
    if (!liveTok() || C.readonly) return;
    const ids = core.arr(frames).map((f) => nn(f && f.nodeId)).filter(Boolean); if (!ids.length) return;
    const run = (n) => capture(key, ids, 'Figma API · ' + reqId, false)
      .then((r) => { if (r.some((x) => x.ok) && h.histRefresh) { try { h.histRefresh(reqId); } catch (e) {} } const bad = r.filter((x) => !x.ok); if (bad.length && n < 2) setTimeout(() => run(n + 1), 15000); })
      .catch((e) => { log(`${reqId} 캡처 실패: ${e.message}`); if (n < 2 && e.status !== 403) setTimeout(() => run(n + 1), 15000); });
    setTimeout(() => run(1), 4000);
  };
  h.figmaCapture = capture;
  h.figmaHasToken = () => liveTok();

  /* ── 토큰으로 플러그인 대신(2026-11-13): 프레임 목록 · 캡처 작업(캡처 버튼 · 자동 캡처) · Figma에서 고친 화면 다시 캡처 ── */
  // 프레임 목록: 플러그인(figma_plugin/code.js topFrames)과 같은 기준 — 페이지 · 섹션 바로 아래 FRAME · COMPONENT · COMPONENT_SET · INSTANCE, 이름이 JUNK면 뺀다
  const JUNK = /^(ver|Description|Case-label|section title|SB_Section Divider|진행상태-.*|Frame \d+|Group \d+|Rectangle.*)$/;
  async function buildCatalog(key) {
    if (!h.testKey(key)) throw new Error('잘못된 파일 키입니다.');
    const f = await figma(`/files/${encodeURIComponent(key)}?depth=2`);
    const pages = [], secs = [];   // secs: [페이지 인덱스, 섹션 노드, 바깥 섹션 이름]
    const take = (pi, n, sec) => {
      if (!n || n.visible === false) return;
      if (n.type === 'SECTION') { const nm = nn(n.name).trim() || '섹션'; secs.push([pi, n, sec ? sec.name + ' › ' + nm : nm]); return; }
      if (!/^(FRAME|COMPONENT|COMPONENT_SET|INSTANCE)$/.test(n.type) || JUNK.test(nn(n.name).trim())) return;
      const b = n.absoluteBoundingBox || {}, row = [n.id, nn(n.name).trim(), Math.round(b.width || 0), Math.round(b.height || 0), Math.round(b.x || 0), Math.round(b.y || 0)];
      if (sec) row.push(sec.name, sec.id);
      pages[pi].frames.push(row);
    };
    // 구분선 이름의 페이지(「-----」 등)는 뺀다(플러그인 · Claude 목록과 같게). editable은 setEditablePage가 글자로 바꾸니 처음부터 false로 둔다(없으면 작업 페이지 ★가 안 붙었다)
    const DIVIDER = /^[\s\-–—_=·.]*$/;
    core.arr(f && f.document && f.document.children).filter((pg) => !DIVIDER.test(nn(pg.name))).forEach((pg) => { const pi = pages.length; pages.push({ id: pg.id, name: nn(pg.name), frames: [], editable: false }); core.arr(pg.children).forEach((c) => take(pi, c, null)); });
    // 섹션 안: 섹션 children을 /nodes(depth 1)로 한 번에 20개씩(섹션 안 섹션도 이어서)
    for (let guard = 0; secs.length && guard < 20; guard++) {
      const batch = secs.splice(0, 20);
      const j = await figma(`/files/${encodeURIComponent(key)}/nodes?ids=${encodeURIComponent(batch.map((s) => s[1].id).join(','))}&depth=1`);
      for (const [pi, sn, name] of batch) { const doc = j && j.nodes && j.nodes[sn.id] && j.nodes[sn.id].document; core.arr(doc && doc.children).forEach((c) => take(pi, c, { name, id: sn.id })); }
    }
    pages.forEach((p) => p.frames.sort((a, b) => a[5] - b[5] || a[4] - b[4]));
    const body = { fileKey: key, fileName: nn(f && f.name), editablePageId: '', by: 'Figma API', pages };
    const p = h.ensureProj(key, '');
    core.writeText(path.join(h.projDir(key), 'catalog.json'), JSON.stringify(Object.assign({ savedAt: core.now() }, body)));
    if (body.fileName) p.name = body.fileName;
    h.saveProj(p); h.setEditablePage(key, p.link);
    log(`목록 ${key.slice(0, 6)} 페이지 ${pages.length} · 프레임 ${pages.reduce((a, x) => a + x.frames.length, 0)}`);
    return { ok: true, pages: pages.length, frames: pages.reduce((a, x) => a + x.frames.length, 0) };
  }
  h.figmaCatalog = buildCatalog;

  // 캡처 작업 처리: 토큰이 있으면 「대기」 캡처 작업(캡처 버튼 · 자동 캡처)을 서버가 받는다 — 같은 파일끼리 10개씩 한 요청. 한도(429)에 걸리면 잠시 쉰다
  let busyCap = false, restUntil = 0;
  function jobsSet(fn) { const jj = core.readJson(C.jobFile) || { version: 0, items: [] }; const items = core.arr(jj.items).filter(Boolean); const r = fn(items); core.writeJson(C.jobFile, { version: (parseInt(jj.version, 10) || 0) + 1, items }); return r; }
  // 서버가 캡처 중에 꺼졌거나 토큰이 거부되면 「진행 중」(Figma API(토큰))으로 남던 캡처 작업을 「대기」로 되돌린다(2026-11-13 점검 F2) — 플러그인 · Claude · 다음 차례가 다시 가져간다
  function freeStale() {
    const jj = core.readJson(C.jobFile); if (!jj) return;
    if (!core.arr(jj.items).some((x) => x && x.kind === 'capture' && x.status === '진행 중' && x.takenBy === 'Figma API(토큰)')) return;
    jobsSet((items) => { const at = core.now(); for (const x of items) if (x.kind === 'capture' && x.status === '진행 중' && x.takenBy === 'Figma API(토큰)') { x.status = '대기'; x.takenBy = ''; x.updatedAt = at; } });
  }
  async function capTick() {
    if (busyCap || C.readonly) return;
    try { freeStale(); } catch (e) {}   // busyCap이 아니면 지금 토큰으로 받는 캡처는 없다
    if (Date.now() < restUntil || !liveTok()) return;
    busyCap = true;
    try {
      const plans = core.readJson(path.join(C.root, 'workbench', 'auto_capture.json')) || {};
      Object.keys(plans).forEach((k) => { try { h.autoFill && h.autoFill(k); } catch (e) {} });   // 자동 캡처 목록에서 대기열 채우기(플러그인이 물을 때와 같게)
      const take = jobsSet((items) => {
        const wait = items.filter((x) => x.kind === 'capture' && x.status === '대기' && /^\d+:\d+$/.test(nn(x.nodeId)) && h.testKey(nn(x.fileKey))).reverse();   // 먼저 쌓인 것부터
        if (!wait.length) return null;
        const key = wait.find((x) => !x.auto) ? wait.find((x) => !x.auto).fileKey : wait[0].fileKey;   // 사람이 누른 캡처를 먼저
        const pick = wait.filter((x) => x.fileKey === key).sort((a, b) => (a.auto ? 1 : 0) - (b.auto ? 1 : 0)).slice(0, 10);
        const at = core.now(); pick.forEach((x) => { x.status = '진행 중'; x.takenBy = 'Figma API(토큰)'; x.updatedAt = at; });
        return { key, ids: pick.map((x) => x.id), nodes: pick.map((x) => x.nodeId) };
      });
      if (!take) return;
      let res = [], err = null;
      try { res = await capture(take.key, take.nodes, 'Figma API(토큰)', false); } catch (e) { err = e; if (e.status === 429) restUntil = Date.now() + 60000; }
      const back = err && (err.status === 429 || err.status === 401);   // 한도 · 거부된 토큰이면 실패로 두지 않고 「대기」(다른 방법이 가져가게)
      jobsSet((items) => {
        const at = core.now();
        for (const x of items) {
          if (!take.ids.includes(x.id)) continue;
          if (err) { x.status = back ? '대기' : '실패'; x.note = back ? '' : err.message; x.takenBy = ''; x.updatedAt = at; continue; }
          const r = res.find((q) => q.nodeId === x.nodeId);
          x.status = r && r.ok ? '완료' : '실패'; x.note = r && r.ok ? 'Figma API(토큰)로 캡처' : nn(r && r.error) || '캡처 실패'; x.updatedAt = at;
        }
      });
    } catch (e) { log('캡처 작업 처리 오류: ' + e.message); }
    finally { busyCap = false; }
  }
  setInterval(() => { capTick(); }, 3000);

  // Figma에서 고친 화면: 3분마다 프로젝트 파일의 버전을 보고, 바뀌었으면 작업 페이지에서 이미 캡처가 있는 프레임을 뒤에서 다시 받는다(그림이 달라진 것만 「고침」)
  const verFile = () => path.join(C.setupDir, 'figma_versions.json');
  const recap = [];   // [{key, ids}] 다시 받을 차례
  async function verTick() {
    if (C.readonly || !liveTok()) return;
    const vers = core.readJson(verFile()) || {};
    let dirs = []; try { dirs = fs.readdirSync(C.projRoot, { withFileTypes: true }).filter((d) => d.isDirectory() && h.testKey(d.name)).map((d) => d.name); } catch (e) {}
    for (const key of dirs) {
      const p = h.readProj(key); if (!p || !p.link) continue;
      try {
        const j = await figma(`/files/${encodeURIComponent(key)}?depth=1`), v = nn(j && (j.version || j.lastModified));
        if (!v) continue;
        if (vers[key] && vers[key] !== v) {
          // 프레임 목록도 새로(2026-11-13): 화면이 생기거나 없어지면 Workbench 목록 · 프로토타입 「화면 추가됨 · 없어짐」에 바로 보이게
          if (core.exists(path.join(h.projDir(key), 'catalog.json'))) { try { await buildCatalog(key); } catch (e) { if (e.status === 429) throw e; log(`목록 다시 받기 실패 ${key.slice(0, 6)}: ${e.message}`); } }
          const meta = core.readJson(path.join(h.projDir(key), 'shots_meta.json')) || {}, cat = core.readJson(path.join(h.projDir(key), 'catalog.json')) || {};
          const pg = core.arr(cat.pages).find((x) => x.id === p.editablePageId);
          const ids = core.arr(pg && pg.frames).map((f) => nn(f && f[0])).filter((id) => meta[id]);
          // 같은 파일이 아직 다시 받는 중이면 새 줄을 더하지 않고 합친다(2026-11-13 점검 F8: 3분마다 바뀌면 같은 프레임을 여러 번 받았다)
          if (ids.length) { const cur = recap.find((x) => x.key === key); if (cur) { for (const id of ids) if (!cur.ids.includes(id)) cur.ids.push(id); } else recap.push({ key, ids }); log(`Figma 파일 바뀜 ${key.slice(0, 6)} → 작업 페이지 캡처 ${ids.length}개 다시 받기`); }
        }
        vers[key] = v;
      } catch (e) { if (e.status === 429) { restUntil = Date.now() + 60000; break; } }
    }
    core.writeJson(verFile(), vers);
  }
  setInterval(() => { verTick().catch(() => {}); }, 180000);
  setTimeout(() => { verTick().catch(() => {}); }, 20000);
  // 다시 받기: 5초마다 10개씩(사람이 누른 캡처 작업이 먼저)
  setInterval(async () => {
    if (busyCap || !recap.length || Date.now() < restUntil || !liveTok()) return;
    const w = core.arr((core.readJson(C.jobFile) || {}).items).some((x) => x && x.kind === 'capture' && x.status === '대기'); if (w) return;
    const r = recap[0], ids = r.ids.splice(0, 10); if (!r.ids.length) recap.shift();
    busyCap = true;
    try { await capture(r.key, ids, 'Figma API(토큰 · 파일 바뀜)', false, true); } catch (e) { if (e.status === 429) { restUntil = Date.now() + 60000; const cur = recap.find((x) => x.key === r.key); if (cur) { for (const id of ids) if (!cur.ids.includes(id)) cur.ids.unshift(id); } else recap.unshift({ key: r.key, ids }); } }
    finally { busyCap = false; }
  }, 5000);

  // ── 댓글 읽기(읽기만, 2026-11-12) ── Figma 댓글을 프레임 · 프레임 안 위치(프레임 왼쪽 위 기준 px)로 바꿔 돌려준다
  //  - 댓글 위치(client_meta)는 「어떤 노드 + 그 노드 왼쪽 위에서 떨어진 거리」다. 노드가 프레임 목록(catalog)에 있으면 바로,
  //    없으면(섹션 · 목록에서 뺀 노드) 그 노드의 절대 위치를 Figma에 한 번 물어(/nodes, 기억해 둠) 그 점을 품은 목록 프레임을 찾는다
  //  - Figma 한도를 아끼려고 댓글은 30초, 노드 위치는 서버가 켜져 있는 동안 기억한다
  const cmCache = {}, nodeBox = {};
  function catFrames(key) {
    const cat = core.readJson(path.join(h.projDir(key), 'catalog.json')) || {}, out = [];
    for (const pg of core.arr(cat.pages)) for (const f of core.arr(pg.frames)) if (f) out.push({ id: nn(f[0]), name: nn(f[1]), w: +f[2] || 0, h: +f[3] || 0, x: +f[4] || 0, y: +f[5] || 0, pageId: nn(pg.id), page: nn(pg.name) });
    return out;
  }
  async function comments(key) {
    const c = cmCache[key]; if (c && Date.now() - c.t < 30000) return c.v;
    const j = await figma(`/files/${encodeURIComponent(key)}/comments`);
    const list = core.arr(j && j.comments), frames = catFrames(key), byId = {}; frames.forEach((f) => { byId[f.id] = f; });
    // 목록에 없는 노드 위치를 한 번에 묻는다
    const need = [...new Set(list.map((x) => x.client_meta && x.client_meta.node_id).filter((id) => id && !byId[id] && !(key + '|' + id in nodeBox)))];
    if (need.length) {
      try {
        const nj = await figma(`/files/${encodeURIComponent(key)}/nodes?ids=${encodeURIComponent(need.slice(0, 100).join(','))}&depth=1`);
        for (const id of need) { const d = nj && nj.nodes && nj.nodes[id] && nj.nodes[id].document; const bb = d && d.absoluteBoundingBox; nodeBox[key + '|' + id] = bb ? { x: bb.x, y: bb.y, w: bb.width, h: bb.height, name: nn(d.name) } : null; }
      } catch (e) { log('댓글 노드 위치 실패: ' + e.message); }
    }
    const items = list.map((x) => {
      const m = x.client_meta || null, o = { id: nn(x.id), parent: nn(x.parent_id), by: nn(x.user && x.user.handle), at: nn(x.created_at), resolved: nn(x.resolved_at), text: nn(x.message), frame: '', fx: 0, fy: 0 };
      if (m && m.node_id) {
        const off = m.node_offset || { x: 0, y: 0 };
        if (byId[m.node_id]) { o.frame = m.node_id; o.fx = Math.round(off.x); o.fy = Math.round(off.y); }
        else {
          const bb = nodeBox[key + '|' + m.node_id];
          if (bb) {
            const px = bb.x + off.x, py = bb.y + off.y;
            // 그 점을 품은 목록 프레임(겹치면 노드와 가장 많이 겹치는 것)
            const hit = frames.filter((f) => px >= f.x && px <= f.x + f.w && py >= f.y && py <= f.y + f.h);
            if (hit.length) { const f = hit[0]; o.frame = f.id; o.fx = Math.round(px - f.x); o.fy = Math.round(py - f.y); }
            o.node = { id: m.node_id, name: bb.name };
          }
        }
        if (m.region_width) { o.rw = Math.round(m.region_width); o.rh = Math.round(m.region_height || 0); }
      }
      return o;
    });
    const v = { at: core.now(), items };
    cmCache[key] = { t: Date.now(), v };
    return v;
  }
  // GET /api/figma/comments?key=: 토큰이 없으면 { token:false }
  on('GET', '/api/figma/comments', async ({ q }) => {
    if (!nn(readTok().token)) return { token: false, items: [] };
    let key = nn(q.get('key')); if (!key) key = h.workKey();
    if (!h.testKey(key)) throw new Error('잘못된 파일 키입니다.');
    const v = await comments(key);
    return Object.assign({ token: true }, v);
  });

  // ── GET /api/figma: 토큰이 있는지 · 누구 계정인지 · 끝 4자리(토큰 자체는 내보내지 않는다) ──
  on('GET', '/api/figma', () => {
    const t = readTok(), tk = nn(t.token);
    // deadAt: Figma가 이 토큰을 거부한 시각(만료 · 지운 토큰) — 날짜와 상관없이 바로 「만료됨」
    // days · expires: 만들 때 고른 만료 기간(Figma API는 만료일을 알려 주지 않는다). 기간을 모르는 예전 토큰은 90일(Figma 기본 · 최대)로 본다
    const days = tokDays(t.days);
    return { token: !!tk, last4: tk ? tk.slice(-4) : '', user: t.user || null, at: nn(t.at), deadAt: nn(t.deadAt), days, daysSet: !!t.days, expires: tk ? expOf(t.at, days) : '' };
  });

  // ── POST /api/figma {action: token | clear | check | capture} ──
  on('POST', '/api/figma', async ({ req, body }) => {
    const b = await body();
    if (C.readonly) throw new Error('읽기 전용 모드입니다.');
    switch (nn(b.action)) {
      // 댓글 쓰기(2026-11-12): 새 댓글은 프레임 + 프레임 왼쪽 위 기준 위치(px)에, 답글은 그 댓글(comment_id)에. 토큰 주인의 Figma 계정으로 올라간다(토큰 권한 Comments: Read and write)
      case 'comment': {
        if (!core.canWrite(req, ['workbench'])) throw new Error(core.roMsg('workbench'));
        let key = nn(b.fileKey); if (!key) key = h.workKey();
        if (!h.testKey(key)) throw new Error('잘못된 파일 키입니다.');
        const msg = nn(b.message).trim(); if (!msg) throw new Error('댓글 내용을 적어 주세요.');
        if (msg.length > 5000) throw new Error('댓글이 너무 깁니다(5000자까지).');
        let post;
        if (nn(b.parentId)) { if (!/^\d{1,20}$/.test(nn(b.parentId))) throw new Error('잘못된 댓글 ID입니다.'); post = { message: msg, comment_id: nn(b.parentId) }; }
        else {
          const nid = nn(b.nodeId); if (!/^\d+:\d+$/.test(nid)) throw new Error('댓글을 달 프레임이 없습니다.');
          post = { message: msg, client_meta: { node_id: nid, node_offset: { x: Math.max(0, Math.round(+b.x || 0)), y: Math.max(0, Math.round(+b.y || 0)) } } };
        }
        const j = await figma(`/files/${encodeURIComponent(key)}/comments`, '', post);
        delete cmCache[key];   // 다음 읽기에서 바로 보이게
        log(`댓글 ${key.slice(0, 6)} ${post.comment_id ? '답글' : '새 댓글'} ${nn(j && j.id)}`);
        return { ok: true, id: nn(j && j.id) };
      }
      case 'token': {   // 넣기: Figma에 물어 맞는 토큰인지 확인(/v1/me)한 뒤 저장
        const tk = nn(b.token).trim();
        if (!/^[A-Za-z0-9_-]{20,200}$/.test(tk)) throw new Error('토큰 모양이 아닙니다. Figma 설정에서 만든 개인 액세스 토큰(figd_로 시작)을 붙여 넣어 주세요.');
        const me = await figma('/me', tk);
        const user = { id: nn(me.id), handle: nn(me.handle), email: nn(me.email) };
        // 만료 기간: Figma API가 개인 토큰의 만료일을 알려 주지 않아(/v1/me = id · 이메일 · 이름 · 사진), 만들 때 고른 기간(일)을 받아
        //  저장한 날 + 기간 = 만료일로 시작 안내에 D-day를 보인다(2026-11-12). 날짜가 남아도 Figma가 401로 거부하면 deadAt → 「만료됨」
        const days = tokDays(b.days);
        core.writeJson(tokFile(), { token: tk, user, at: core.now(), days });
        return { ok: true, token: true, last4: tk.slice(-4), user, days };
      }
      case 'days': {   // 이미 넣은 토큰의 만료 기간만 바꾸기(만료일 = 저장한 날 + 기간)
        const t = readTok(); if (!nn(t.token)) throw new Error('저장한 토큰이 없습니다.');
        t.days = tokDays(b.days); core.writeJson(tokFile(), t);
        return { ok: true, days: t.days, expires: expOf(t.at, t.days) };
      }
      case 'clear': { try { fs.unlinkSync(tokFile()); } catch (e) {} return { ok: true, token: false }; }
      case 'check': { const me = await figma('/me'); return { ok: true, user: { id: nn(me.id), handle: nn(me.handle), email: nn(me.email) } }; }
      case 'catalog': {   // 프레임 목록 만들기(토큰, 플러그인 · Claude 대신 — 몇 초)
        if (!core.canWrite(req, ['workbench'])) throw new Error(core.roMsg('workbench'));
        let key = nn(b.fileKey); if (!key) key = h.workKey();
        return await buildCatalog(key);
      }
      case 'capture': {   // 지금 바로 캡처(Workbench · Claude · 시험용)
        let key = nn(b.fileKey); if (!key) key = h.workKey();
        const r = await capture(key, b.nodeIds || [b.nodeId], nn(b.by) || 'Figma API', b.edit === true);
        return { ok: r.every((x) => x.ok), results: r };
      }
      default: throw new Error('알 수 없는 작업입니다.');
    }
  });
};
