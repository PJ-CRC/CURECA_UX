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
  const API = 'https://api.figma.com/v1';
  const log = (t) => { try { console.log(new Date().toISOString() + ' [figma] ' + t); } catch (e) {} };

  async function figma(pathQ, token) {
    const tk = token || nn(readTok().token);
    if (!tk) throw new Error('Figma 토큰이 없습니다. 시작 안내에서 넣어 주세요.');
    const r = await fetch(API + pathQ, { headers: { 'X-Figma-Token': tk }, signal: AbortSignal.timeout(60000) });
    const txt = await r.text(); let j = null; try { j = JSON.parse(txt); } catch (e) {}
    if (!r.ok) {
      const ra = r.headers.get('retry-after');
      const why = r.status === 403 ? '토큰이 맞지 않거나 이 파일을 볼 권한이 없습니다' : r.status === 404 ? '파일 · 프레임을 찾지 못했습니다' : r.status === 429 ? 'Figma 사용 한도에 걸렸습니다' + (ra ? `(${ra}초 뒤 다시)` : '') : 'Figma 응답 오류';
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
    const base = nid.replace(':', '-');
    core.rmGlob(dir, (n) => n === base + '.jpg');
    fs.writeFileSync(path.join(dir, base + '.png'), bytes);
    const mf = path.join(h.projDir(key), 'shots_meta.json'); const meta = core.readJson(mf) || {};
    const prev = meta[nid] && meta[nid].editAt ? String(meta[nid].editAt) : '';
    meta[nid] = { at: core.now(), w: o.w || 0, h: o.h || 0, by: o.by || 'Figma API', name: o.name || '', ext: 'png', editAt: o.edit ? core.now() : prev };
    core.writeJson(mf, meta);
  }

  // 프레임 여러 개를 한 번에(같은 배율끼리 한 요청 — Figma 한도를 아낀다)
  async function capture(key, ids, by, edit) {
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
          saveShot(key, id, buf, { w: f.w, h: f.h, name: f.name, by: by || 'Figma API', edit });
          results.push({ nodeId: id, ok: true, bytes: buf.length });
        } catch (e) { results.push({ nodeId: id, ok: false, error: e.message }); }
      }
    }
    log(`캡처 ${key.slice(0, 6)} ${results.filter((x) => x.ok).length}/${results.length}`);
    return results;
  }

  // 요청 완료 → 고친 프레임 다시 캡처(토큰이 있을 때만, 응답을 기다리지 않고 뒤에서). Figma 클라우드에 반영되는 시간을 조금 두고, 실패하면 한 번 더
  h.figmaAfterDone = function (key, frames, reqId) {
    if (!nn(readTok().token) || C.readonly) return;
    const ids = core.arr(frames).map((f) => nn(f && f.nodeId)).filter(Boolean); if (!ids.length) return;
    const run = (n) => capture(key, ids, 'Figma API · ' + reqId, false)
      .then((r) => { const bad = r.filter((x) => !x.ok); if (bad.length && n < 2) setTimeout(() => run(n + 1), 15000); })
      .catch((e) => { log(`${reqId} 캡처 실패: ${e.message}`); if (n < 2 && e.status !== 403) setTimeout(() => run(n + 1), 15000); });
    setTimeout(() => run(1), 4000);
  };
  h.figmaCapture = capture;
  h.figmaHasToken = () => !!nn(readTok().token);

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
    return { token: !!tk, last4: tk ? tk.slice(-4) : '', user: t.user || null, at: nn(t.at), expires: nn(t.expires) };
  });

  // ── POST /api/figma {action: token | clear | check | capture} ──
  on('POST', '/api/figma', async ({ body }) => {
    const b = await body();
    if (C.readonly) throw new Error('읽기 전용 모드입니다.');
    switch (nn(b.action)) {
      case 'token': {   // 넣기: Figma에 물어 맞는 토큰인지 확인(/v1/me)한 뒤 저장
        const tk = nn(b.token).trim();
        if (!/^[A-Za-z0-9_-]{20,200}$/.test(tk)) throw new Error('토큰 모양이 아닙니다. Figma 설정에서 만든 개인 액세스 토큰(figd_로 시작)을 붙여 넣어 주세요.');
        const me = await figma('/me', tk);
        const user = { id: nn(me.id), handle: nn(me.handle), email: nn(me.email) };
        // 만료일: Figma API가 개인 토큰의 만료일을 알려 주지 않아, 만들 때 고른 날짜를 함께 받아 둔다(시작 안내에 「n일 남음」, 2026-11-12)
        const exp = /^\d{4}-\d{2}-\d{2}$/.test(nn(b.expires)) ? nn(b.expires) : '';
        core.writeJson(tokFile(), { token: tk, user, at: core.now(), expires: exp });
        return { ok: true, token: true, last4: tk.slice(-4), user, expires: exp };
      }
      case 'expires': {   // 이미 넣은 토큰의 만료일만 고치기(빈 값이면 지움)
        const t = readTok(); if (!nn(t.token)) throw new Error('Figma 토큰이 없습니다.');
        const exp = nn(b.expires); if (exp && !/^\d{4}-\d{2}-\d{2}$/.test(exp)) throw new Error('날짜 모양이 아닙니다(YYYY-MM-DD).');
        t.expires = exp; core.writeJson(tokFile(), t); return { ok: true, expires: exp };
      }
      case 'clear': { try { fs.unlinkSync(tokFile()); } catch (e) {} return { ok: true, token: false }; }
      case 'check': { const me = await figma('/me'); return { ok: true, user: { id: nn(me.id), handle: nn(me.handle), email: nn(me.email) } }; }
      case 'capture': {   // 지금 바로 캡처(Workbench · Claude · 시험용)
        let key = nn(b.fileKey); if (!key) key = h.workKey();
        const r = await capture(key, b.nodeIds || [b.nodeId], nn(b.by) || 'Figma API', b.edit === true);
        return { ok: r.every((x) => x.ok), results: r };
      }
      default: throw new Error('알 수 없는 작업입니다.');
    }
  });
};
