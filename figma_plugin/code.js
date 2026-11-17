// Common UX Sync — Claude · Workbench 연동만 한다(로컬 서버 localhost:8765).
//  - 작업 페이지를 고치면 그 프레임 캡처를 자동으로 올린다
//  - Workbench 「캡처 받기」 · Claude 글 수정(text, Pretendard 등 이 PC 폰트) 작업을 처리한다
//  - 이 파일의 페이지 · 프레임 목록을 Workbench로 보낸다
// 창은 연결 상태만 보이는 작은 크기(내용 높이에 맞춤)
figma.showUI(__html__, { width: 280, height: 150, themeColors: true });

// ── Workbench 캡처 ──
// 작업 페이지(수정 가능 페이지)에서 무언가 바뀌면 그 최상위 프레임을 JPG(원본 크기)로 내보내 UI → 로컬 서버(/api/shots)로 보낸다.
// 작업 페이지 = 그 파일 프로젝트의 작업 링크(시작 안내 링크)가 가리키는 페이지. 기본 프로젝트는 없다
let autoShots = true, workPage = null, dirty = new Set(), timer = null, busyShots = false;

const topFrame = n => { while (n && n.parent && n.parent.type !== 'PAGE' && n.parent.type !== 'SECTION') n = n.parent; return n && n.parent && (n.parent.type === 'PAGE' || n.parent.type === 'SECTION') && n.type !== 'SECTION' ? n : null; };
// 삭제처럼 대상 프레임을 알 수 없는 변경은 지금 화면에 보이는 프레임으로 대신한다(지금 페이지)
function framesInView() {
  const v = figma.viewport.bounds, out = [];
  const take = n => { if (n.type === 'SECTION') { n.children.forEach(take); return; }
    if (n.visible && /^(FRAME|COMPONENT|COMPONENT_SET|INSTANCE)$/.test(n.type) && n.x < v.x + v.width && n.x + n.width > v.x && n.y < v.y + v.height && n.y + n.height > v.y) out.push(n); };
  figma.currentPage.children.forEach(take);
  return out.slice(0, 4);
}
// 원본 크기(1배) JPG로 내보낸다. 한 변이 8000px을 넘는 아주 큰 프레임만 그 안으로 줄인다(내보내기 실패 · 메모리 방지)
const MAX_SIDE = 8000;
async function exportFrame(f, jobId) {
  const scale = Math.min(1, MAX_SIDE / Math.max(f.width, f.height));
  const bytes = await f.exportAsync({ format: 'JPG', constraint: { type: 'SCALE', value: scale } });
  figma.ui.postMessage({ type: 'shot', fileKey: figma.fileKey || '', nodeId: f.id, name: f.name, w: Math.round(f.width), h: Math.round(f.height),
    by: figma.currentUser ? figma.currentUser.name + ' (Figma)' : 'Figma', bytes, jobId: jobId || '' });
}
async function flushShots() {
  if (busyShots || !dirty.size) return;
  busyShots = true;
  const ids = [...dirty]; dirty.clear();
  try {
    for (const id of ids) {
      const f = await figma.getNodeByIdAsync(id);
      if (f && !f.removed) await exportFrame(f);
    }
  } finally {
    busyShots = false;
    if (dirty.size) schedule();
  }
}
function schedule() { clearTimeout(timer); timer = setTimeout(flushShots, 1500); }

// Figma 부담 줄이기: 플러그인은 페이지를 스스로 불러오지 않는다.
// 캡처 감시는 사용자가 작업 페이지에 있을 때만 붙인다(이미 열려 있는 페이지라 추가 로딩 없음).
function workPageId() { return (typeof linkPageId === 'string' && linkPageId) || ''; }
let workHandler = null;
function watchShl() {
  // 작업 링크가 다른 페이지로 바뀌었으면 예전 작업 페이지의 감시를 뗀다
  if (workPage && workPage.id !== workPageId()) { workPage.off('nodechange', workHandler); workPage = null; }
  if (workPage || !workPageId() || figma.currentPage.id !== workPageId()) return;
  workPage = figma.currentPage;
  workPage.on('nodechange', workHandler = e => {
    if (!autoShots) return;
    for (const ch of e.nodeChanges) {
      const f = ch.node && !ch.node.removed ? topFrame(ch.node) : null;
      if (f) dirty.add(f.id);
      else framesInView().forEach(x => dirty.add(x.id));
    }
    if (dirty.size) schedule();
  });
}
(async () => {
  const saved = await figma.clientStorage.getAsync('autoShots');
  if (saved === false) autoShots = false;
  figma.ui.postMessage({ type: 'shots-state', auto: autoShots });
  watchShl();
})();

// ── Workbench 프레임 목록: 지금 연 파일의 페이지 · 최상위 프레임을 UI → 로컬 서버(/api/catalog)로 보낸다 ──
//  - 시작: 페이지 이름 전체(불러오기 없음) + 지금 보고 있는 페이지의 프레임만
//  - 사용자가 Figma에서 다른 페이지로 가면 그 페이지 프레임을 보탠다(이미 열린 페이지라 추가 부담 없음)
//  - 프레임은 페이지 · 섹션 바로 아래 것만 본다(레이어 안쪽은 훑지 않는다)
// 시작 안내 링크가 이 파일이면, 링크 노드가 있는 페이지를 「수정 가능 페이지」로 표시한다
// 목록에서 뺄 이름 — 서버(node/server/figma.js 토큰 목록 만들기)와 같게 둔다
const JUNK = /^(ver|Description|Case-label|section title|SB_Section Divider|진행상태-.*|Frame \d+|Group \d+|Rectangle.*)$/;
const DIVIDER = /^[\s\-–—_=·.]*$/;
let link = null;
const loadedPages = new Set();   // 자동 캡처 때 불러온 페이지(다시 불러오지 않는다)
// 프레임: [id, 이름, w, h, x, y, 섹션 이름, 섹션 id] — 섹션 안 프레임만 뒤 둘이 있다(섹션 안 섹션은 「바깥 › 안」, id는 가장 안쪽)
function topFrames(pg) {
  const out = [];
  const take = (n, sec) => {
    if (n.type === 'SECTION') {
      const nm = n.name.trim() || '섹션'; const s = { name: sec ? sec.name + ' › ' + nm : nm, id: n.id }; const n0 = out.length;
      n.children.forEach(c => take(c, s));
      // 화면으로 볼 프레임이 하나도 없는 섹션은 섹션 자체를 한 화면으로(서버 Figma 토큰 목록과 같게, 2026-11-16)
      if (out.length === n0) { const b = n.absoluteBoundingBox || { x: n.x, y: n.y }; const f = [n.id, nm, Math.round(n.width), Math.round(n.height), Math.round(b.x), Math.round(b.y)]; if (sec) f.push(sec.name, sec.id); out.push(f); }
      return;
    }
    if (!/^(FRAME|COMPONENT|COMPONENT_SET|INSTANCE)$/.test(n.type) || JUNK.test(n.name.trim())) return;
    const b = n.absoluteBoundingBox || { x: n.x, y: n.y };
    const f = [n.id, n.name.trim(), Math.round(n.width), Math.round(n.height), Math.round(b.x), Math.round(b.y)];
    if (sec) f.push(sec.name, sec.id);
    out.push(f);
  };
  pg.children.forEach(c => take(c, null));
  return out.sort((a, b) => a[5] - b[5] || a[4] - b[4]);
}
// 링크 노드가 있는 페이지(수정 가능 페이지): 링크가 페이지면 바로, 아니면 노드를 한 번만 찾아 기억한다
var linkPageId = null;   // var: 위쪽 workPageId()가 먼저 불러도 오류가 나지 않게
async function resolveLinkPage() {
  if (linkPageId !== null) return linkPageId;
  linkPageId = '';
  if (!link || link.key !== figma.fileKey || !link.node) return linkPageId;
  const pg = figma.root.children.find(p => p.id === link.node);
  if (pg) return (linkPageId = pg.id);
  let n = await figma.getNodeByIdAsync(link.node);
  while (n && n.type !== 'PAGE') n = n.parent;
  return (linkPageId = n ? n.id : '');
}
function pageInfo(pg, withFrames) {
  return { id: pg.id, name: pg.name, frames: withFrames ? topFrames(pg) : null };
}
function fileMeta() {
  return { fileKey: figma.fileKey || '', fileName: figma.root.name, editablePageId: linkPageId || '',
    by: figma.currentUser ? figma.currentUser.name + ' (Figma)' : 'Figma' };
}
async function quickCatalog() {
  await resolveLinkPage();
  const cur = figma.currentPage;
  const pages = figma.root.children.filter(pg => !DIVIDER.test(pg.name)).map(pg => pageInfo(pg, pg.id === cur.id));
  return Object.assign(fileMeta(), { pages });
}
function sendPageList() {
  const pg = figma.currentPage;
  if (DIVIDER.test(pg.name)) return;
  figma.ui.postMessage(Object.assign({ type: 'page-frames', page: pageInfo(pg, true) }, fileMeta()));
}
// 지금 보고 있는 페이지에서 최상위 프레임 · 섹션을 추가 · 삭제 · 이름 변경 · 이동하면 그 페이지 목록을 다시 보낸다(2초 모아서)
//  (예전에는 플러그인을 켤 때 · 페이지를 옮길 때만 보내서, 같은 페이지에 새로 만든 섹션이 Workbench에 안 보였다)
function isTop(n) {
  let p = n && n.parent;
  while (p && p.type === 'SECTION') p = p.parent;
  return !!p && p.type === 'PAGE';
}
let listPage = null, listHandler = null, listTimer = null;
// 마지막으로 사용자가 Figma에서 무언가 고친 시각: 자동 캡처(Workbench 페이지 일괄)는 편집 중이면 잠시 쉰다
let lastEdit = 0;
function watchList() {
  const pg = figma.currentPage;
  if (listPage === pg) return;
  if (listPage) listPage.off('nodechange', listHandler);
  listPage = pg;
  pg.on('nodechange', listHandler = e => {
    lastEdit = Date.now();
    const hit = e.nodeChanges.some(ch => {
      if (ch.type === 'DELETE') return true;   // 지운 노드는 위치를 알 수 없어 그냥 다시 보낸다
      if (!ch.node || ch.node.removed || !isTop(ch.node)) return false;
      return ch.type === 'CREATE' || ch.properties.some(k => /^(name|parent|x|y|width|height)$/.test(k));
    });
    if (hit) { clearTimeout(listTimer); listTimer = setTimeout(sendPageList, 2000); }
  });
}
watchList();
// 창에 보일 상태: 파일 이름, 작업 페이지 이름, 지금 작업 페이지를 보고 있는지(자동 캡처는 그때만)
function pageState() {
  const wid = workPageId(), wp = wid ? figma.root.children.find(p => p.id === wid) : null;
  return { fileName: figma.root.name, workName: wp ? wp.name : '', onWork: !!wid && figma.currentPage.id === wid };
}
figma.on('currentpagechange', () => {
  watchShl();
  watchList();
  sendPageList();
  figma.ui.postMessage(Object.assign({ type: 'page-state' }, pageState()));
});
figma.ui.onmessage = async msg => {
  try {
    if (msg.type === 'catalog') {
      if (JSON.stringify(msg.link || null) !== JSON.stringify(link)) { link = msg.link || null; linkPageId = null; }
      figma.ui.postMessage(Object.assign({ type: 'catalog-done', reqId: msg.reqId }, await quickCatalog()));
      watchShl();   // 작업 페이지를 알게 됐으니, 지금 그 페이지면 캡처 감시를 붙인다
      return;
    }
    // 시작 안내의 작업 링크가 바뀌었는지 UI가 주기적으로 알려 준다: 수정 가능 페이지 · 캡처 감시 페이지를 새 링크로
    if (msg.type === 'set-link') {
      if (JSON.stringify(msg.link || null) !== JSON.stringify(link)) { link = msg.link || null; linkPageId = null; }
      await resolveLinkPage();
      watchShl();
      figma.ui.postMessage(Object.assign({ type: 'set-link-done', reqId: msg.reqId, fileKey: figma.fileKey || '', editablePageId: linkPageId || '' }, pageState()));
      return;
    }
    // Workbench의 「캡처 받기」 요청: 지금 열린 페이지의 프레임만 받는다(다른 페이지는 불러오지 않고 Claude에게 맡긴다)
    // 캡처 작업을 가져가기 전에: 그 프레임이 지금 열린 페이지에 있는지만 본다(없으면 Claude 몫으로 남긴다)
    if (msg.type === 'has-frame') {
      let found = false;
      const look = n => { if (found) return; if (n.id === msg.nodeId) { found = true; return; } if (n.type === 'SECTION') n.children.forEach(look); };
      figma.currentPage.children.forEach(look);
      figma.ui.postMessage({ type: 'has-frame-done', reqId: msg.reqId, found });
      return;
    }
    if (msg.type === 'capture-one') {
      let found = null;
      const look = n => { if (found) return; if (n.id === msg.nodeId) { found = n; return; } if (n.type === 'SECTION') n.children.forEach(look); };
      figma.currentPage.children.forEach(look);
      if (found) await exportFrame(found, msg.jobId);
      figma.ui.postMessage({ type: 'capture-one-done', reqId: msg.reqId, done: !!found });
      return;
    }
    // Workbench 자동 캡처(페이지를 열면 캡처 없는 프레임을 10개씩): 다른 페이지 프레임도 받는다.
    //  편집 중(최근 3초 안에 고침)이면 받지 않고 busy로 돌려준다 → UI가 나중에 다시. 페이지는 처음 한 번만 불러온다(이미 불러온 페이지는 그대로)
    if (msg.type === 'capture-any') {
      if (Date.now() - lastEdit < 3000) { figma.ui.postMessage({ type: 'capture-any-done', reqId: msg.reqId, busy: true }); return; }
      const n = await figma.getNodeByIdAsync(msg.nodeId);
      if (!n || n.removed || !/^(FRAME|COMPONENT|COMPONENT_SET|INSTANCE)$/.test(n.type)) { figma.ui.postMessage({ type: 'capture-any-done', reqId: msg.reqId, done: false, gone: true }); return; }
      let pg = n; while (pg && pg.type !== 'PAGE') pg = pg.parent;
      // 아직 불러오지 않은 다른 페이지: 바로 불러오지 않고 알린다 → UI가 Workbench에 「불러오는 중」을 남긴 뒤 load-page
      if (pg && pg !== figma.currentPage && !loadedPages.has(pg.id)) { figma.ui.postMessage({ type: 'capture-any-done', reqId: msg.reqId, needLoad: true, page: pg.name }); return; }
      await exportFrame(n, msg.jobId);
      figma.ui.postMessage({ type: 'capture-any-done', reqId: msg.reqId, done: true });
      return;
    }
    // 자동 캡처: 다른 페이지를 한 번 불러온다(그 페이지의 다음 캡처부터는 바로)
    if (msg.type === 'load-page') {
      const n = await figma.getNodeByIdAsync(msg.nodeId);
      let pg = n; while (pg && pg.type !== 'PAGE') pg = pg.parent;
      if (pg) { await pg.loadAsync(); loadedPages.add(pg.id); }
      figma.ui.postMessage({ type: 'load-page-done', reqId: msg.reqId, ok: !!pg });
      return;
    }
    // Workbench 글 수정(text) 작업: Claude가 정한 바꾸기 [{nodeId, find, replace}]를 이 PC의 폰트(Pretendard 등)로 반영한다.
    //  수정 가능 페이지(작업 링크 페이지)의 TEXT만 고친다. find가 있으면 그 부분만 바꿔 앞뒤 글 스타일을 지키고, 없으면 글 전체를 바꾼다
    if (msg.type === 'text-edit') {
      await resolveLinkPage();
      const results = [];
      for (const it of msg.items || []) {
        const r = { nodeId: it.nodeId, find: it.find || '', replace: it.replace || '' };
        try {
          const n = await figma.getNodeByIdAsync(it.nodeId);
          // 폰트 바꾸기: {nodeId(TEXT 또는 프레임 · 섹션), fontFamily} → 그 아래 글(인스턴스 안은 원본을 따르므로 제외)의 글꼴만 바꾼다. 굵기는 이름을 맞춘다
          if (it.fontFamily) {
            if (!n) throw new Error('노드를 찾지 못했습니다');
            let pg0 = n; while (pg0 && pg0.type !== 'PAGE') pg0 = pg0.parent;
            if (!pg0 || pg0.id !== workPageId()) throw new Error('수정 가능 페이지가 아닙니다');
            await pg0.loadAsync();
            const inInst = t => { for (let p = t.parent; p && p !== n; p = p.parent) if (p.type === 'INSTANCE') return true; return false; };
            const texts = n.type === 'TEXT' ? [n] : n.findAll(t => t.type === 'TEXT' && !inInst(t));
            const avail = (await figma.listAvailableFontsAsync()).filter(f => f.fontName.family === it.fontFamily).map(f => f.fontName.style);
            if (!avail.length) throw new Error(it.fontFamily + ' 폰트가 이 PC에 없습니다');
            const norm = s => s.replace(/\s+/g, '').toLowerCase();
            const pick = st => avail.find(a => norm(a) === norm(st)) || avail.find(a => norm(a) === 'regular') || avail[0];
            let changed = 0;
            for (const t of texts) {
              const segs = t.characters.length ? t.getStyledTextSegments(['fontName']) : [{ start: 0, end: 0, fontName: t.fontName }];
              for (const s of segs) { await figma.loadFontAsync(s.fontName); const to = { family: it.fontFamily, style: pick(s.fontName.style) }; await figma.loadFontAsync(to);
                if (t.characters.length) t.setRangeFontName(s.start, s.end, to); else t.fontName = to; }
              changed++;
            }
            r.result = 'ok'; r.font = it.fontFamily; r.count = changed; results.push(r); continue;
          }
          if (!n || n.type !== 'TEXT') throw new Error('글 레이어가 아닙니다');
          // 찾을 글 · 새 글이 둘 다 비면 글 전체가 지워진다 → 하지 않는다(폰트만 바꾸려면 fontFamily를 준다)
          if (!r.find && !r.replace) throw new Error('find · replace가 모두 비어 있습니다(글을 지우지 않음)');
          let pg = n; while (pg && pg.type !== 'PAGE') pg = pg.parent;
          if (!pg || pg.id !== workPageId()) throw new Error('수정 가능 페이지가 아닙니다');
          await pg.loadAsync();
          const fonts = n.characters.length ? n.getRangeAllFontNames(0, n.characters.length) : [n.fontName];
          for (const f of fonts) await figma.loadFontAsync(f);
          if (r.find) {
            const i = n.characters.indexOf(r.find);
            if (i < 0) { if (r.replace && n.characters.indexOf(r.replace) >= 0) { r.result = 'already'; results.push(r); continue; } throw new Error('바꿀 글을 찾지 못했습니다'); }
            if (r.replace) n.insertCharacters(i + r.find.length, r.replace, 'BEFORE');
            n.deleteCharacters(i, i + r.find.length);
          } else n.characters = r.replace;
          r.result = 'ok'; r.font = fonts.map(f => f.family + ' ' + f.style).join(', ');
        } catch (e) { r.result = 'fail'; r.error = String(e && e.message || e); }
        results.push(r);
      }
      figma.ui.postMessage({ type: 'text-edit-done', reqId: msg.reqId, results });
      return;
    }
    // ── 다음 단계로 옮기기(transfer): 읽기 · 이미지 · 만들기 (아래 XFER 함수들) ──
    if (msg.type === 'xfer-read') { figma.ui.postMessage(Object.assign({ type: 'xfer-read-done', reqId: msg.reqId }, await xferRead(msg.job, msg.record || []))); return; }
    if (msg.type === 'xfer-check') { figma.ui.postMessage(Object.assign({ type: 'xfer-check-done', reqId: msg.reqId }, await xferCheck(msg.job))); return; }
    if (msg.type === 'xfer-img') { const im = figma.getImageByHash(msg.hash); figma.ui.postMessage({ type: 'xfer-img-done', reqId: msg.reqId, bytes: im ? await im.getBytesAsync() : null }); return; }
    if (msg.type === 'xfer-build') { figma.ui.postMessage(Object.assign({ type: 'xfer-build-done', reqId: msg.reqId }, await xferBuild(msg.job, msg.data, msg.imgs || {}))); return; }
    // 창 높이를 내용에 맞춘다
    if (msg.type === 'fit') { figma.ui.resize(280, Math.max(60, Math.min(400, Math.round(msg.h)))); return; }
    if (msg.type === 'shots-auto') {
      autoShots = !!msg.on; await figma.clientStorage.setAsync('autoShots', autoShots); return;
    }
    if (msg.type === 'shots-now') {
      // 지금 화면에 보이는 프레임(최대 4개)만 캡처한다. 페이지 전체 캡처는 무거워서 두지 않는다(필요하면 Workbench에서 프레임별 「캡처」)
      const list = framesInView();
      if (!list.length) throw new Error('화면에 보이는 프레임이 없습니다.');
      list.forEach(f => dirty.add(f.id)); await flushShots();
      figma.ui.postMessage({ type: 'shots-now-done', reqId: msg.reqId, count: list.length });
      return;
    }
    if (msg.type === 'close') {
      figma.closePlugin();
    }
  } catch (e) {
    figma.ui.postMessage({ type: 'error', reqId: msg.reqId, message: String(e && e.message || e) });
  }
};

// ════════ 다음 단계로 옮기기(transfer, 2026-11-16) ════════
// Workbench 「② ○○로 보내기」 → 서버 작업(kind transfer). 이 파일이 보내는 쪽이면 읽고(xferRead), 받는 쪽이면 만든다(xferBuild).
//  - Figma에는 파일 사이 복사 API가 없어 「읽어서 다시 만들기」다. Claude를 거치지 않으니 몇 초면 된다.
//  - 인스턴스: 받는 파일에서 같은 키로 불러오면 인스턴스로, 못 불러오면(라이브러리에서 내려간 예전 컴포넌트) 함께 보낸 원본 모양(defs)으로
//    받는 작업 페이지의 섹션 「옮긴 컴포넌트 (예전 라이브러리)」에 로컬 대체 컴포넌트를 한 번 만들고 그 인스턴스로 넣는다.
//  - 이미지 채우기는 원본 이미지를 서버로 보내 받는 파일에서 figma.createImage로 다시 만든다.
//  - 같은 프레임을 다시 보내면 해시를 비교해 바뀐 것만 옮기고, 바뀐 프레임은 받는 쪽의 같은 자리에서 바꿔 끼운다.
const XR = v => Math.round(v * 100) / 100;
const XHEX = c => [c.r, c.g, c.b].map(v => Math.round(v * 255).toString(16).padStart(2, '0')).join('');
function xfnv(s) { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16); }
const XBOX = n => n.type === 'FRAME' || n.type === 'INSTANCE' || n.type === 'COMPONENT' || n.type === 'COMPONENT_SET';
const XREG = '옮긴 컴포넌트 (예전 라이브러리)';
let xMains = {};

function xReader() {
  const fonts = [], fI = {}, imgs = new Set(), need = new Set();
  const fi = fn => { const k = fn.family + '|' + fn.style; if (fI[k] === undefined) { fI[k] = fonts.length; fonts.push(k); } return fI[k]; };
  const pt = ps => {
    if (ps === figma.mixed || !ps || !ps.length) return 0;
    return ps.map(p => {
      const o = { t: p.type }; if (p.visible === false) o.v = 0; if (p.opacity !== undefined && p.opacity !== 1) o.o = XR(p.opacity); if (p.blendMode && p.blendMode !== 'NORMAL') o.b = p.blendMode;
      if (p.type === 'SOLID') o.c = XHEX(p.color);
      else if (p.type.indexOf('GRADIENT') === 0) { o.gs = p.gradientStops.map(s => [XR(s.position), XHEX(s.color), XR(s.color.a)]); o.gt = p.gradientTransform; }
      else if (p.type === 'IMAGE') { o.h = p.imageHash; o.sm = p.scaleMode; if (p.imageTransform) o.it = p.imageTransform; if (p.scalingFactor) o.sf = p.scalingFactor; if (p.imageHash) imgs.add(p.imageHash); }
      return o;
    });
  };
  const sw = d => (d.strokeWeight === figma.mixed || ('strokeTopWeight' in d && !(d.strokeTopWeight === d.strokeBottomWeight && d.strokeLeftWeight === d.strokeRightWeight && d.strokeTopWeight === d.strokeLeftWeight)))
    ? [d.strokeTopWeight, d.strokeRightWeight, d.strokeBottomWeight, d.strokeLeftWeight] : d.strokeWeight;
  const txt = n => n.getStyledTextSegments(['fontName', 'fontSize', 'fills', 'lineHeight', 'letterSpacing', 'textDecoration', 'textCase', 'listOptions', 'indentation'])
    .map(s => [s.end, fi(s.fontName), s.fontSize, pt(s.fills), s.lineHeight.unit === 'AUTO' ? 0 : [s.lineHeight.unit, XR(s.lineHeight.value)], s.letterSpacing.value ? [s.letterSpacing.unit, XR(s.letterSpacing.value)] : 0,
      s.textDecoration !== 'NONE' ? s.textDecoration : 0, s.textCase !== 'ORIGINAL' ? s.textCase : 0, s.listOptions && s.listOptions.type !== 'NONE' ? s.listOptions.type : 0, s.indentation || 0]);
  function base(n, o) {
    if (n.visible === false) o.v = 0; if ('opacity' in n && n.opacity !== 1) o.o = XR(n.opacity); if ('rotation' in n && n.rotation) o.r = XR(n.rotation);
    if ('blendMode' in n && n.blendMode !== 'PASS_THROUGH' && n.blendMode !== 'NORMAL') o.bm = n.blendMode;
    if ('fills' in n && n.type !== 'TEXT') { const f = pt(n.fills); o.f = f || 0; }
    if ('strokes' in n) { const s = pt(n.strokes); if (s) { o.s = s; o.sa = n.strokeAlign; o.sw = sw(n); if (n.dashPattern && n.dashPattern.length) o.sd = n.dashPattern; if (n.strokeCap && n.strokeCap !== figma.mixed && n.strokeCap !== 'NONE') o.sc = n.strokeCap; } }
    if ('cornerRadius' in n) { if (n.cornerRadius === figma.mixed) o.cr = [n.topLeftRadius, n.topRightRadius, n.bottomRightRadius, n.bottomLeftRadius]; else if (n.cornerRadius) o.cr = n.cornerRadius; }
    if ('effects' in n && n.effects.length) o.e = n.effects.map(e => ({ type: e.type, radius: e.radius, visible: e.visible !== false, color: e.color, offset: e.offset, spread: e.spread, blendMode: e.blendMode }));
    if (XBOX(n) && 'clipsContent' in n) o.cl = n.clipsContent ? 1 : 0;
    if ('layoutPositioning' in n && n.layoutPositioning === 'ABSOLUTE') o.lp = 1;
    if ('layoutSizingHorizontal' in n && n.parent && n.parent.layoutMode && n.parent.layoutMode !== 'NONE') o.lz = [n.layoutSizingHorizontal, n.layoutSizingVertical];
    if ('constraints' in n) o.ct = [n.constraints.horizontal, n.constraints.vertical];
    if ('layoutMode' in n && n.layoutMode !== 'NONE' && XBOX(n)) o.L = [n.layoutMode, n.paddingLeft, n.paddingRight, n.paddingTop, n.paddingBottom, n.itemSpacing, n.primaryAxisAlignItems, n.counterAxisAlignItems,
      n.primaryAxisSizingMode, n.counterAxisSizingMode, n.layoutWrap || 'NO_WRAP', n.counterAxisSpacing || 0, n.itemReverseZIndex ? 1 : 0, n.strokesIncludedInLayout ? 1 : 0];
  }
  // 인스턴스 ↔ 원본 컴포넌트: 다른 곳만(구조가 다르면 null → 일반 레이어로 읽음)
  async function diff(a0, b0) {
    const ov = []; let ok = true;
    async function rec(a, b, p) {
      if (!ok) return; if (p.length && a.type !== b.type) { ok = false; return; }
      if (p.length) {
        const so = { P: p }, A = {}, B = {}; base(a, A); base(b, B);
        for (const k of ['v', 'o', 'f', 's', 'sa', 'sw', 'cr', 'e', 'L', 'lz', 'r']) if (JSON.stringify(A[k]) !== JSON.stringify(B[k])) so[k] = A[k] === undefined ? null : A[k];
        if (a.type === 'TEXT') { const ta = txt(a), tb = txt(b); if (a.characters !== b.characters || JSON.stringify(ta) !== JSON.stringify(tb)) { so.c = a.characters; so.sg = ta; } if (a.textAutoResize !== b.textAutoResize) so.tar = a.textAutoResize; if (a.textAlignHorizontal !== b.textAlignHorizontal) so.tah = a.textAlignHorizontal; }
        if (Math.abs(a.width - b.width) > 0.5 || Math.abs(a.height - b.height) > 0.5) so.wh = [XR(a.width), XR(a.height)];
        if (a.type === 'INSTANCE') {
          const ma = await a.getMainComponentAsync(), mb = await b.getMainComponentAsync();
          if (ma && mb && ma.key !== mb.key) { need.add(ma.key); xMains[ma.key] = ma; so.k = ma.key; ov.push(so); const sub = await diff(a, ma); if (!sub) { ok = false; return; } sub.forEach(s => ov.push(Object.assign(s, { P: p.concat(s.P) }))); return; }
        }
        if (Object.keys(so).length > 1) ov.push(so);
      }
      if ('children' in a) { if (!('children' in b) || a.children.length !== b.children.length) { ok = false; return; } for (let i = 0; i < a.children.length; i++) await rec(a.children[i], b.children[i], p.concat(i)); }
    }
    await rec(a0, b0, []); return ok ? ov : null;
  }
  async function ser(n) {
    const o = { T: n.type, n: n.name, x: XR(n.x), y: XR(n.y), w: XR(n.width), h: XR(n.height) };
    if (n.type === 'INSTANCE') {
      const mc = await n.getMainComponentAsync(); const dv = mc ? await diff(n, mc) : null;
      if (dv) {
        need.add(mc.key); xMains[mc.key] = mc; o.k = mc.key; const A = {}, B = {}; base(n, A); base(mc, B);
        for (const k of ['v', 'o', 'f', 's', 'sa', 'sw', 'cr', 'e', 'L', 'cl', 'r', 'bm']) if (A[k] !== undefined && JSON.stringify(A[k]) !== JSON.stringify(B[k])) o[k] = A[k];
        if (A.lp) o.lp = 1; if (A.lz) o.lz = A.lz; if (A.ct) o.ct = A.ct; if (dv.length) o.ov = dv; return o;
      }
      o.T = 'FRAME'; o.X = 1;   // 원본 컴포넌트와 구조가 달라 맞출 수 없음 → 일반 레이어
    }
    base(n, o);
    if (n.type === 'TEXT') { o.c = n.characters; o.sg = txt(n); o.ta = [n.textAlignHorizontal, n.textAlignVertical, n.textAutoResize]; if (n.paragraphSpacing) o.psp = n.paragraphSpacing; if (n.paragraphIndent) o.pin = n.paragraphIndent; if (n.textTruncation === 'ENDING') o.tr = n.maxLines || 1; return o; }
    if (n.type === 'VECTOR') o.vp = n.vectorPaths;
    if (n.type === 'BOOLEAN_OPERATION') o.bo = n.booleanOperation;
    if ('children' in n) { o.ch = []; for (const c of n.children) o.ch.push(await ser(c)); }
    return o;
  }
  return { ser, fonts, imgs, need };
}

async function xferRead(job, record) {
  xMains = {};
  const R = xReader(), from = job.from || {};
  let pg = from.pageId ? await figma.getNodeByIdAsync(from.pageId) : null;
  const tops = [];
  for (const id of from.nodeIds || []) { const n = await figma.getNodeByIdAsync(id); if (n && !n.removed) { tops.push(n); if (!pg) { let p = n; while (p && p.type !== 'PAGE') p = p.parent; pg = p; } } }
  if (pg && pg.type === 'PAGE') await pg.loadAsync();
  if (!(from.nodeIds || []).length) {
    if (!pg || pg.type !== 'PAGE') throw new Error('보낼 페이지를 찾지 못했습니다');
    pg.children.forEach(c => { if (/^(FRAME|COMPONENT|COMPONENT_SET|INSTANCE|SECTION|GROUP)$/.test(c.type)) tops.push(c); });
  }
  if (!tops.length) throw new Error('보낼 프레임을 찾지 못했습니다(지워졌거나 다른 파일)');
  const recOf = {}; (record || []).forEach(r => { if (r && r.from && r.from.key === figma.fileKey) recOf[r.from.node] = r; });
  const frames = [], skipped = [];
  for (const f of tops) {
    const o = await R.ser(f); delete o.x; delete o.y;
    const hash = xfnv(JSON.stringify(o)), r = recOf[f.id];
    if (r && r.hash === hash) { skipped.push(f.id); continue; }
    const b = f.absoluteBoundingBox || { x: f.x, y: f.y };
    frames.push({ from: f.id, name: f.name, hash, replace: r ? r.to.node : '', x: XR(b.x), y: XR(b.y), data: o });
  }
  // 원본 컴포넌트 모양(받는 파일에서 못 불러올 때 대체 컴포넌트로) — 그 안의 인스턴스가 또 필요로 하는 것까지
  const defs = {}, done = new Set();
  for (let guard = 0; guard < 8; guard++) {
    const todo = Array.from(R.need).filter(k => !done.has(k)); if (!todo.length) break;
    for (const k of todo) {
      done.add(k); const mc = xMains[k]; if (!mc) continue;
      const o = await R.ser(mc); o.T = 'COMPONENT'; delete o.x; delete o.y;
      o.n = (mc.parent && mc.parent.type === 'COMPONENT_SET' ? mc.parent.name + ' / ' : '') + mc.name; defs[k] = o;
    }
  }
  return { frames, skipped, defs, fonts: R.fonts, imgs: Array.from(R.imgs) };
}

// 비교 「바뀐 것 확인」(phase check, 2026-11-17): 옮긴 화면(from.nodeIds)의 지금 해시만 — 옮기기 읽기와 같은 방식(xReader · 위치 뺌)이라 기록 해시와 그대로 견줄 수 있다
async function xferCheck(job) {
  xMains = {};
  const R = xReader(), from = job.from || {}, frames = [];
  if (from.pageId) { const pg = await figma.getNodeByIdAsync(from.pageId); if (pg && pg.type === 'PAGE') await pg.loadAsync(); }
  for (const id of from.nodeIds || []) {
    const n = await figma.getNodeByIdAsync(id);
    if (!n || n.removed) { frames.push({ from: id, gone: true }); continue; }
    const o = await R.ser(n); delete o.x; delete o.y;
    frames.push({ from: id, hash: xfnv(JSON.stringify(o)) });
  }
  return { frames };
}

async function xferBuild(job, data, imgBytes) {
  const to = job.to || {}, miss = { comp: 0, local: 0, img: 0, font: 0, ov: 0 };
  const page = await figma.getNodeByIdAsync(to.pageId);
  if (!page || page.type !== 'PAGE') throw new Error('받는 작업 페이지를 찾지 못했습니다');
  await page.loadAsync();
  const IMG = {}; for (const h of Object.keys(imgBytes || {})) { try { IMG[h] = figma.createImage(imgBytes[h]).hash; } catch (e) { miss.img++; } }
  const FM = []; await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  for (const k of data.fonts || []) { const sp = k.split('|'); let fn = { family: sp[0], style: sp[1] }; try { await figma.loadFontAsync(fn); } catch (e) { miss.font++; fn = { family: 'Inter', style: 'Regular' }; } FM.push(fn); }
  const hx = s => ({ r: parseInt(s.slice(0, 2), 16) / 255, g: parseInt(s.slice(2, 4), 16) / 255, b: parseInt(s.slice(4, 6), 16) / 255 });
  const P = a => {
    if (!a) return []; const out = [];
    for (const p of a) {
      const o = { type: p.t }; if (p.v === 0) o.visible = false; if (p.o !== undefined) o.opacity = p.o; if (p.b) o.blendMode = p.b;
      if (p.t === 'SOLID') o.color = hx(p.c);
      else if (p.t.indexOf('GRADIENT') === 0) { o.gradientStops = p.gs.map(s => ({ position: s[0], color: Object.assign(hx(s[1]), { a: s[2] }) })); o.gradientTransform = p.gt; }
      else if (p.t === 'IMAGE') { const h = IMG[p.h]; if (!h) { miss.img++; continue; } o.imageHash = h; o.scaleMode = p.sm; if (p.it) o.imageTransform = p.it; if (p.sf) o.scalingFactor = p.sf; }
      else continue;
      out.push(o);
    }
    return out;
  };
  const LH = v => !v ? { unit: 'AUTO' } : { unit: v[0], value: v[1] };
  const LS = v => !v ? { unit: 'PERCENT', value: 0 } : { unit: v[0], value: v[1] };
  // 대체 컴포넌트 보관 섹션(작업 페이지 안 — 수정 가능 페이지는 하나라 새 페이지를 만들지 않는다)
  let reg = page.children.find(c => c.type === 'SECTION' && c.name === XREG);
  const LOCAL = {}; if (reg) reg.findAllWithCriteria({ types: ['COMPONENT'] }).forEach(c => { const m = /^transfer:(\w+)/.exec(c.description || ''); if (m) LOCAL[m[1]] = c; });
  const CC = {};
  async function comp(k) {
    if (!k) return null; if (LOCAL[k]) return LOCAL[k];
    if (!(k in CC)) { try { CC[k] = await figma.importComponentByKeyAsync(k); } catch (e) { CC[k] = null; } }
    if (CC[k]) return CC[k];
    const d = (data.defs || {})[k]; if (!d) { miss.comp++; return null; }
    if (!reg) {
      reg = figma.createSection(); page.appendChild(reg); reg.name = XREG;
      let mx = 0, my = 0, first = true; for (const c of page.children) { if (c === reg) continue; if (first || c.x + c.width > mx) mx = c.x + c.width; if (first || c.y < my) my = c.y; first = false; }
      reg.x = mx + 800; reg.y = my; reg.resizeWithoutConstraints(1200, 400);
    }
    const c = figma.createComponent(); reg.appendChild(c); c.name = d.n; c.description = 'transfer:' + k + ' (받는 파일에서 불러올 수 없는 원본 컴포넌트 — 옮기기가 만든 대체 컴포넌트)';
    LOCAL[k] = c; miss.local++;
    let y = 40; reg.children.forEach(x => { if (x !== c) y = Math.max(y, x.y + x.height + 40); });
    await shape(c, Object.assign({}, d, { x: 40, y }), true);
    for (const ch of d.ch || []) await make(ch, c);
    let w = 0, hh = 0; reg.children.forEach(x => { w = Math.max(w, x.x + x.width + 40); hh = Math.max(hh, x.y + x.height + 40); }); reg.resizeWithoutConstraints(Math.max(w, 1200), Math.max(hh, 400));
    return c;
  }
  async function segs(t, sg) {
    let s = 0;
    for (const g of sg || []) {
      const e = Math.min(g[0], t.characters.length); if (e <= s) continue;
      try { t.setRangeFontName(s, e, FM[g[1]] || FM[0]); t.setRangeFontSize(s, e, g[2]); t.setRangeLineHeight(s, e, LH(g[4])); t.setRangeLetterSpacing(s, e, LS(g[5])); t.setRangeFills(s, e, P(g[3])); } catch (err) {}
      try { if (g[6]) t.setRangeTextDecoration(s, e, g[6]); if (g[7]) t.setRangeTextCase(s, e, g[7]); if (g[8]) t.setRangeListOptions(s, e, { type: g[8] }); if (g[9]) t.setRangeIndentation(s, e, g[9]); } catch (err) {}
      s = e;
    }
  }
  function layout(n, L) {
    if (!L || !('layoutMode' in n)) return;
    n.layoutMode = L[0]; n.paddingLeft = L[1]; n.paddingRight = L[2]; n.paddingTop = L[3]; n.paddingBottom = L[4]; n.itemSpacing = L[5]; n.primaryAxisAlignItems = L[6]; n.counterAxisAlignItems = L[7];
    if (L[10] === 'WRAP') { n.layoutWrap = 'WRAP'; n.counterAxisSpacing = L[11]; } if (L[12]) n.itemReverseZIndex = true; if (L[13]) n.strokesIncludedInLayout = true;
  }
  function paint(n, o, full) {
    if ('fills' in n && n.type !== 'TEXT' && (o.f !== undefined || full)) try { n.fills = P(o.f); } catch (e) {}
    if ('strokes' in n && (o.s !== undefined || full)) {
      try { n.strokes = P(o.s); } catch (e) {}
      if (o.s) try { n.strokeAlign = o.sa || 'INSIDE'; if (Array.isArray(o.sw)) { n.strokeTopWeight = o.sw[0]; n.strokeRightWeight = o.sw[1]; n.strokeBottomWeight = o.sw[2]; n.strokeLeftWeight = o.sw[3]; } else if (o.sw !== undefined) n.strokeWeight = o.sw; if (o.sd) n.dashPattern = o.sd; if (o.sc) n.strokeCap = o.sc; } catch (e) {}
    }
    if ('cornerRadius' in n && o.cr !== undefined && o.cr !== null) try { if (Array.isArray(o.cr)) { n.topLeftRadius = o.cr[0]; n.topRightRadius = o.cr[1]; n.bottomRightRadius = o.cr[2]; n.bottomLeftRadius = o.cr[3]; } else n.cornerRadius = o.cr; } catch (e) {}
    if (o.e) try { n.effects = o.e.map(e => e.type.indexOf('SHADOW') >= 0 ? { type: e.type, color: e.color, offset: e.offset, radius: e.radius, spread: e.spread || 0, visible: e.visible, blendMode: e.blendMode || 'NORMAL' } : { type: e.type, radius: e.radius, visible: e.visible }); } catch (e) {}
    if (o.bm) try { n.blendMode = o.bm; } catch (e) {}
    if (full && 'clipsContent' in n && o.cl !== undefined) n.clipsContent = !!o.cl;
  }
  // 크기 · 자동 배치 · 위치 · 칠(부모에 붙인 뒤)
  async function shape(n, o, own) {
    if (own && o.L) layout(n, o.L);
    if (n.type !== 'TEXT' && n.type !== 'GROUP' && n.type !== 'BOOLEAN_OPERATION' && n.type !== 'VECTOR') {
      try { if (n.type === 'LINE') n.resize(Math.max(o.w, 0.01), 0); else if (n.type === 'SECTION') n.resizeWithoutConstraints(o.w, o.h); else n.resize(Math.max(o.w, 0.01), Math.max(o.h, 0.01)); } catch (e) {}
    }
    if (own && o.L && 'primaryAxisSizingMode' in n) { n.primaryAxisSizingMode = o.L[8]; n.counterAxisSizingMode = o.L[9]; }
    const par = n.parent, inAL = par && par.type !== 'PAGE' && par.type !== 'SECTION' && par.layoutMode && par.layoutMode !== 'NONE';
    if (inAL && o.lp) n.layoutPositioning = 'ABSOLUTE';
    if (inAL && o.lz && !o.lp) { try { n.layoutSizingHorizontal = o.lz[0]; n.layoutSizingVertical = o.lz[1]; } catch (e) {} }
    if (o.ct && 'constraints' in n) try { n.constraints = { horizontal: o.ct[0], vertical: o.ct[1] }; } catch (e) {}
    if (o.r) try { n.rotation = o.r; } catch (e) {}
    if ((!inAL || o.lp) && o.x !== undefined) { n.x = o.x; n.y = o.y; }
    if (o.v === 0) n.visible = false; if (o.o !== undefined) n.opacity = o.o;
    paint(n, o, own);
  }
  async function overrides(n, ov) {
    for (const s of (ov || []).slice().sort((a, b) => a.P.length - b.P.length)) {
      let d = n; for (const i of s.P) d = d && d.children ? d.children[i] : null;
      if (!d) { miss.ov++; continue; }
      try {
        if (s.k && d.type === 'INSTANCE') { const c = await comp(s.k); if (c) d.swapComponent(c); }
        if (s.v === 0) d.visible = false; else if (s.v === null) d.visible = true;
        if (s.o !== undefined) d.opacity = s.o === null ? 1 : s.o;
        if (s.c !== undefined && d.type === 'TEXT') { const fs = d.characters.length ? d.getRangeAllFontNames(0, d.characters.length) : [d.fontName]; for (const f of fs) await figma.loadFontAsync(f); d.characters = s.c; await segs(d, s.sg); if (s.tah) d.textAlignHorizontal = s.tah; if (s.tar) d.textAutoResize = s.tar; }
        const vis = {}; for (const k of ['f', 's', 'sa', 'sw', 'cr', 'e']) if (s[k] !== undefined) vis[k] = s[k] === null ? 0 : s[k];
        if (Object.keys(vis).length) paint(d, vis, false);
        if (s.L) layout(d, s.L);
        if (s.wh) try { d.resize(s.wh[0], s.wh[1]); } catch (e) {}
      } catch (e) { miss.ov++; }
    }
  }
  async function make(o, parent) {
    let n;
    if (o.T === 'GROUP' || o.T === 'BOOLEAN_OPERATION') {
      const kids = []; for (const c of o.ch || []) { const k = await make(c, parent); if (k) kids.push(k); }
      if (!kids.length) return null;
      const fn = o.T === 'GROUP' ? figma.group : o.bo === 'SUBTRACT' ? figma.subtract : o.bo === 'INTERSECT' ? figma.intersect : o.bo === 'EXCLUDE' ? figma.exclude : figma.union;
      n = fn.call(figma, kids, parent); n.name = o.n; if (o.v === 0) n.visible = false; if (o.o !== undefined) n.opacity = o.o; if (o.T === 'BOOLEAN_OPERATION') paint(n, o, true);
      return n;
    }
    if (o.T === 'INSTANCE') {
      const c = await comp(o.k);
      if (!c) { n = figma.createFrame(); parent.appendChild(n); n.name = o.n; n.fills = []; await shape(n, o, false); return n; }
      n = c.createInstance(); parent.appendChild(n); n.name = o.n;
      await shape(n, o, false); if (o.L) layout(n, o.L); await overrides(n, o.ov);
      if (Math.abs(n.width - o.w) > 0.5 || Math.abs(n.height - o.h) > 0.5) try { n.resize(o.w, o.h); } catch (e) {}
      return n;
    }
    if (o.T === 'TEXT') {
      n = figma.createText(); parent.appendChild(n); n.name = o.n; n.fontName = (o.sg && o.sg[0] && FM[o.sg[0][1]]) || FM[0] || { family: 'Inter', style: 'Regular' };
      n.characters = o.c || ''; await segs(n, o.sg);
      n.textAlignHorizontal = o.ta[0]; n.textAlignVertical = o.ta[1];
      if (o.ta[2] !== 'WIDTH_AND_HEIGHT') { n.textAutoResize = 'NONE'; n.resize(Math.max(o.w, 0.01), Math.max(o.h, 0.01)); }
      n.textAutoResize = o.ta[2]; if (o.psp) n.paragraphSpacing = o.psp; if (o.pin) n.paragraphIndent = o.pin; if (o.tr) { n.textTruncation = 'ENDING'; n.maxLines = o.tr; }
      await shape(n, o, false); return n;
    }
    n = o.T === 'RECTANGLE' ? figma.createRectangle() : o.T === 'ELLIPSE' ? figma.createEllipse() : o.T === 'LINE' ? figma.createLine() : o.T === 'VECTOR' ? figma.createVector()
      : o.T === 'STAR' ? figma.createStar() : o.T === 'POLYGON' ? figma.createPolygon() : o.T === 'SECTION' ? figma.createSection() : figma.createFrame();
    parent.appendChild(n); n.name = o.n;
    if (o.T === 'VECTOR' && o.vp) try { n.vectorPaths = o.vp; } catch (e) {}
    await shape(n, o, true);
    if (o.T === 'VECTOR' && (Math.abs(n.width - o.w) > 0.5 || Math.abs(n.height - o.h) > 0.5)) try { n.resize(Math.max(o.w, 0.01), Math.max(o.h, 0.01)); } catch (e) {}
    for (const c of o.ch || []) await make(c, n);
    return n;
  }
  // 놓을 자리: 새 프레임들은 원본끼리의 배치 그대로, 받는 페이지의 기존 내용 아래(400px 띄움). 바뀐 프레임은 받는 쪽의 같은 자리에 바꿔 끼운다
  let minX = Infinity, maxY = -Infinity, has = false;
  for (const c of page.children) { if (c === reg) continue; has = true; minX = Math.min(minX, c.x); maxY = Math.max(maxY, c.y + c.height); }
  // 바꿔 끼울 예전 프레임: 받는 작업 페이지 안에 있을 때만(다른 페이지로 옮겨졌으면 새로 만든다 — 작업 페이지 밖을 고치지 않게, 2026-11-17)
  const onPage = (n) => { for (let p = n; p; p = p.parent) if (p.type === 'PAGE') return p.id === page.id; return false; };
  const olds = {}; for (const f of data.frames || []) if (f.replace) { const o = await figma.getNodeByIdAsync(f.replace); if (o && !o.removed && onPage(o)) olds[f.replace] = o; }
  const fresh = (data.frames || []).filter(f => !(f.replace && olds[f.replace]));
  let sx = Infinity, sy = Infinity; fresh.forEach(f => { sx = Math.min(sx, f.x); sy = Math.min(sy, f.y); });
  const dx = (has ? minX : 0) - sx, dy = (has ? maxY + 400 : 0) - sy;
  const made = [];
  for (const f of data.frames || []) {
    const old = f.replace ? olds[f.replace] : null, host = old && old.parent ? old.parent : page;
    const n = await make(Object.assign({}, f.data, old ? { x: old.x, y: old.y } : { x: f.x + dx, y: f.y + dy }), host);
    if (!n) continue;
    if (old) { const at = old.x, bt = old.y; host.insertChild(host.children.indexOf(old), n); n.x = at; n.y = bt; old.remove(); }
    made.push({ from: f.from, to: n.id, name: n.name, hash: f.hash, replaced: !!old });
  }
  return { made, miss };
}
