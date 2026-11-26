// 작업방 {메뉴}_asis 페이지의 기획 화면(오른쪽 화면 정보·디스크립션 패널이 있는 2252px 프레임)을 MD 본문으로 옮긴다(2026-11-25~, 예전에는 기존 작업방 Part.2).
// 사용: 아래 CONFIG(pageId = 그 메뉴의 _asis 페이지)를 채워 use_figma(fileKey=작업방)의 code로 실행한다. Figma는 읽기만 한다. region은 쓰지 않는다(_asis에는 최신 화면만 있음).
// 규칙: old-rules/screen-spec.md 3절. 결과는 20KB 제한이 있어 한 번에 2개 프레임 정도만 넣는다. GNB(위 72px), LNB(왼쪽 250px)는 따로 묶는다.
const CONFIG = {
  pageId: '281:1770',
  frames: [ /* { id: '3249:112456', region: '2.1 1차' } */ ],
};

const L = String.fromCharCode(8232), P = String.fromCharCode(8233);
const clean = s => s.split(L).join('\n').split(P).join('\n').replace(/\r/g, '');
const SCREEN_W = 1920, SCREEN_H = 1080;
const MARK = /^\d+(-\d+)*$/;
const META = ['Ver', 'Date', 'CID', '작성자', '화면', '경로', 'Dev', 'SG'];

function absXY(n) { const t = n.absoluteTransform; return [t[0][2], t[1][2]]; }
function sortRead(arr) { return arr.sort((a, b) => (Math.round(a.y / 8) - Math.round(b.y / 8)) || (a.x - b.x)); }
function bullets(text) {
  return clean(text).split('\n').map(l => l.replace(/\s+$/, '')).filter(l => l.trim() !== '').map(l => {
    const lead = l.match(/^[\t ]*/)[0].replace(/\t/g, '  ').length;
    const depth = Math.min(Math.floor(lead / 2), 4);
    return '  '.repeat(depth) + '- ' + l.trim().replace(/^[-•·]\s*/, '');
  }).join('\n');
}

const page = figma.root.children.find(p => p.id === CONFIG.pageId);
await figma.setCurrentPageAsync(page);
const verBoxes = page.children.filter(n => n.type === 'INSTANCE' && n.name === 'ver');
const out = [];

for (const cfg of CONFIG.frames) {
  const F = await figma.getNodeByIdAsync(cfg.id);
  // 케이스 1 복제본(`CID-복제본`)은 원복용 사본이라 화면 MD 추출의 근거로 쓰지 않음 (flow/3-design.md, 2026-11-12)
  if (F.name.endsWith('-복제본')) { out.push('<!-- 건너뜀: ' + F.name + ' (복제본) -->'); continue; }
  const [fx, fy] = absXY(F);
  // 취소선 글자는 제거된 항목이라 ~~ ~~로 감싸 구분함 (old-rules/screen-spec.md 3절)
  const strike = n => {
    try { return n.getStyledTextSegments(['textDecoration']).map(g => g.textDecoration === 'STRIKETHROUGH' && g.characters.trim() ? '~~' + g.characters + '~~' : g.characters).join(''); }
    catch (e) { return n.characters; }
  };
  // 번호 표시(Description Number 컴포넌트) 안의 글자인지. 화면 글자에서는 이것만 거름 (글자 모양으로 거르면 숫자 · 날짜도 빠짐, todo T19 · T32)
  const inMark = n => { for (let p = n.parent; p && p !== F; p = p.parent) if (p.type === 'INSTANCE' && p.name === 'Description Number') return true; return false; };
  const toT = n => { const [x, y] = absXY(n); return { x: x - fx, y: y - fy, h: n.height, mark: inMark(n), s: clean(strike(n)).trim() }; };
  const texts = F.findAll(n => n.type === 'TEXT' && n.visible !== false).map(toT).filter(t => t.s !== '');

  // 화면 정보와 디스크립션 (오른쪽 패널: 프레임 바로 아래 자식 중 x >= 1915인 것)
  const panelNodes = F.children.filter(c => 'findAll' in c && absXY(c)[0] - fx >= SCREEN_W - 5);
  let panel = sortRead([].concat(...panelNodes.map(c => c.findAll(n => n.type === 'TEXT' && n.visible !== false).map(toT))).filter(t => t.s !== ''));
  // 패널이 자식 프레임으로 묶여 있지 않으면 x >= 1915인 글자를 패널로 봄
  if (!panel.some(t => t.s === 'Ver')) panel = sortRead(texts.filter(t => t.x >= SCREEN_W - 5));
  const meta = {}; const desc = []; let cur = null;
  for (let i = 0; i < panel.length; i++) {
    const s = panel[i].s;
    if (META.includes(s) && panel[i + 1] && meta[s] === undefined) { meta[s] = panel[i + 1].s; i++; continue; }
    if (MARK.test(s)) { cur = { no: s, body: [] }; desc.push(cur); continue; }
    if (cur) cur.body.push(s);
  }

  // 화면 글자 (기본 화면 영역만, 줄 단위)
  const all = sortRead(texts.filter(t => !t.mark && t.x < SCREEN_W - 5 && t.y < SCREEN_H));
  // 공통 영역: GNB(위 72px), LNB(왼쪽 250px)는 한 줄로 묶음
  const gnb = all.filter(t => t.y < 72), lnb = all.filter(t => t.y >= 72 && t.x < 250);
  const scr = all.filter(t => t.y >= 72 && t.x >= 250).sort((a, b) => a.y - b.y || a.x - b.x);
  // 행: 세로 범위가 지금 행과 절반 이상 겹치면 같은 행 (8px 반올림은 높이가 조금 다른 글자를 다른 행으로 떼어 냄)
  const rows = [];
  for (const t of scr) {
    const top = t.y, bot = t.y + t.h, r = rows[rows.length - 1];
    const ov = r ? Math.min(bot, r.bot) - Math.max(top, r.top) : -1;
    if (r && ov >= Math.min(t.h, r.bot - r.top) / 2) { r.items.push(t); r.top = Math.min(r.top, top); r.bot = Math.max(r.bot, bot); }
    else rows.push({ top, bot, items: [t] });
  }
  for (const r of rows) r.items = r.items.sort((a, b) => a.x - b.x).map(t => t.s.replace(/\n+/g, ' / '));
  const cases = texts.filter(t => t.x < SCREEN_W - 5 && t.y >= SCREEN_H && /^case/i.test(t.s)).map(t => t.s.replace(/\n+/g, ' '));

  // 사용 컴포넌트 (기본 화면 영역의 가장 바깥 인스턴스)
  const comp = {};
  (function walk(n, inInst) {
    if (!('children' in n)) return;
    for (const c of n.children) {
      if (c.visible === false) continue;
      const [x, y] = absXY(c); const rx = x - fx, ry = y - fy;
      if (c.type === 'INSTANCE' && !inInst && rx < SCREEN_W && ry < SCREEN_H) comp[c.name] = (comp[c.name] || 0) + 1;
      walk(c, inInst || c.type === 'INSTANCE');
    }
  })(F, false);

  // 버전 메모 (프레임 오른쪽 위 근처의 ver 인스턴스)
  const vers = verBoxes.filter(v => v.x > F.x + F.width - 400 && v.x < F.x + F.width + 400 && v.y > F.y - 300 && v.y < F.y + 300)
    .map(v => clean(v.findAll(t => t.type === 'TEXT').map(t => t.characters).join('\n')));

  const date = (meta['Date'] || '').replace(/\./g, '-');
  const md = [];
  md.push('<!-- CID ' + (meta['CID'] || F.name) + ' -->');
  md.push('figma: https://www.figma.com/design/kI8nm6HBJsfBa4fbReZwgh/?node-id=' + F.id.replace(':', '-'));
  md.push('figma_region: ' + (cfg.region || ''));
  md.push('dev: ' + (meta['Dev'] || '') + ' / sg: ' + (meta['SG'] || ''));
  md.push('ver: ' + (meta['Ver'] || '') + ' / date: ' + date + ' / author: ' + (meta['작성자'] || '') + ' / title: ' + (meta['화면'] || '') + ' / path: ' + (meta['경로'] || ''));
  md.push('\n### 화면 글자\n');
  if (gnb.length) md.push('- (GNB) ' + gnb.map(t => t.s.replace(/\n+/g, ' ')).join(' | '));
  if (lnb.length) md.push('- (LNB) ' + lnb.map(t => t.s.replace(/\n+/g, ' ')).join(' | '));
  md.push(rows.slice(0, 120).map(r => '- ' + r.items.join(' | ')).join('\n') + (rows.length > 120 ? '\n- (이하 ' + (rows.length - 120) + '줄 생략)' : ''));
  md.push('\n### 사용 컴포넌트\n');
  md.push(Object.entries(comp).sort((a, b) => b[1] - a[1]).slice(0, 40).map(([k, v]) => k + ' (' + v + ')').join(', ') || '없음');
  md.push('\n### 디스크립션 (원문)\n');
  md.push(desc.map(d => '#### ' + d.no + '. ' + (clean(d.body[0] || '').split('\n')[0]) + '\n\n' + bullets(d.body.join('\n').split('\n').slice(1).join('\n'))).join('\n\n'));
  if (cases.length) { md.push('\n### 케이스\n'); md.push(cases.map(c => '- ' + c).join('\n')); }
  md.push('\n### 버전 메모\n');
  md.push(vers.length ? vers.map(v => '- ' + v.replace(/\n+/g, ' / ')).join('\n') : '없음');
  out.push(md.join('\n'));
}
return out.join('\n\n=====\n\n');
