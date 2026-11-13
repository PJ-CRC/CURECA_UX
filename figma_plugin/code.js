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
    if (n.type === 'SECTION') { const nm = n.name.trim() || '섹션'; const s = { name: sec ? sec.name + ' › ' + nm : nm, id: n.id }; n.children.forEach(c => take(c, s)); return; }
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
