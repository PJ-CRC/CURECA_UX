/* Claude 답변 서식(2026-11-26): Figma Workbench · 변경 이력이 같이 쓴다 — window.WBMD.view(글) · note(글) · inline(한 줄).
   답변은 간략한 보고서: 사람이 할 일(질문 대기 · 변경 확인 등) 머리말을 눈에 띄게, 줄마다 띄우고, ▪ · – 목록, 번호 줄(Q1 · C1)은 내어 쓴다. 모양(CSS .md)은 appnav.css */
(function(){
  var esc = window.WB.esc;
  /* Claude 답변 서식(2026-11-26): 요약(note) · 질문(ask) · 원래 답변(자세히)에 같은 모양 — **굵게** · `코드` · 제목(#) · 글머리표(들여쓰기 2단) · 번호 목록 · 표 · 줄 바꿈 · 빈 줄 = 문단 */
  // 사람이 할 일을 여는 말: 줄 맨 앞의 [머리표], 또는 대괄호 없이 「질문 대기 · 변경 확인 · 확인 필요 · 요청자 확인 · 사용자 확인 목록」으로 시작하는 줄
  var MD_ACT = /^(질문 대기|변경 확인|확인 필요|요청자 확인|사용자 확인 목록|결정할 것)(\s*[-–—:]\s*[^(（\n]{0,30})?/;
  function mdInline(s){ return esc(s).replace(/^\[([^\]\n]{1,24})\]\s*/, function(m0, t){ return '<b class="tag' + (/질문|확인|결정|답|요청자|할 일|보류|필요/.test(t) ? ' act' : '') + '">' + t + '</b> '; }).replace(/\*\*([^*\n]+)\*\*/g, '<b>$1</b>').replace(/`([^`\n]+)`/g, '<code>$1</code>'); }
  /* 한 줄에 「 / 」로 이어 쓴 것(3개 이상, 조각마다 6자 넘음)은 목록으로 푼다 — 「머리말: 가 / 나 / 다」면 머리말 + 목록 */
  // 「」 · 『』 · () · [] · "" 밖의 sep로만 자른다(예: 「Setting Ⓛ / Ⓣ_To Be」 안의 「 / 」는 그대로)
  function mdSplitTop(t, sep){
    var parts = [], cur = '', dep = 0, q = false, s = String(t);
    for (var k = 0; k < s.length; k++) {
      var ch = s[k];
      if (ch === '"') q = !q; else if ('「『([（'.indexOf(ch) >= 0) dep++; else if ('」』)]）'.indexOf(ch) >= 0 && dep > 0) dep--;
      if (!dep && !q && s.substr(k, sep.length) === sep) { parts.push(cur); cur = ''; k += sep.length - 1; continue; }
      cur += ch;
    }
    parts.push(cur);
    return parts;
  }
  function mdSlash(t){
    var parts = mdSplitTop(t, ' / ');
    if (parts.length < 3 || !parts.every(function(p){ return p.trim().length >= 6; })) return null;
    var head = '', m = /^(.{2,40}?:)\s+(.+)$/.exec(parts[0]); if (m) { head = m[1]; parts[0] = m[2]; }
    return { head: head, items: parts.map(function(p){ return p.trim(); }) };
  }
  function mdSub(items){ return '<ul class="sub">' + items.map(function(x){ return '<li>' + mdInline(x) + '</li>'; }).join('') + '</ul>'; }
  /* 문단 한 줄: 줄마다 따로 띄워 보이고, 「Q1 · C10 · R01 · 1)」처럼 번호로 시작하면 번호 뒤로 내어 써서 줄이 바뀌어도 글 머리가 맞게 */
  // 번호 표시: Q1 · Q1: → Q1. (「1)」은 그대로)
  function mdNo(n){ return /\)$/.test(n) ? n : n.replace(/[.:]$/, '') + '.'; }
  /* 질문 줄(2026-11-26): 「Q1 질문 - 값 / 값 (추천: 값, 근거)」 → 질문 · 고를 값(▪, 추천 표시) · 덧붙임.
     나눔은 괄호 밖의 「 - 」 · 「 — 」 가운데, 뒤에 괄호 밖 「 / 」가 있는 마지막 것. 끝의 「중 무엇으로 할지」는 질문 쪽으로 */
  function mdQ(body){
    var b = String(body), best = -1, sepLen = 0, seps = [' - ', ' — ', ' – '];
    seps.forEach(function(sp){ var idx = -1; while ((idx = b.indexOf(sp, idx + 1)) >= 0) { if (mdSplitTop(b.slice(idx + sp.length), ' / ').length >= 2 && idx > best) { best = idx; sepLen = sp.length; } } });
    if (best < 0) return null;
    var q = b.slice(0, best).trim(), opts = mdSplitTop(b.slice(best + sepLen), ' / ').map(function(x){ return x.trim(); }).filter(Boolean);
    if (opts.length < 2 || opts.length > 6) return null;
    var note = '', last = opts[opts.length - 1];
    var nm = /^(.*?)\s*[(（]([^()（）]*(?:[(（][^()（）]*[)）][^()（）]*)*)[)）]\s*$/.exec(last);
    if (nm && nm[1].trim()) { note = nm[2].trim(); last = nm[1].trim(); }
    var ask = /\s*(중\s*(?:무엇으로|어느\s*쪽으로?|무엇을|어떤\s*것으로)\s*(?:할지|정할지|고를지)?)$/.exec(last);
    if (ask) { last = last.slice(0, ask.index).trim(); q += ' — ' + ask[1]; }
    opts[opts.length - 1] = last;
    var rec = /^추천\s*[:：]\s*([^,，]+)/.exec(note), recT = rec ? rec[1].trim() : '';
    if (rec) note = note.slice(rec[0].length).replace(/^\s*[,，]\s*/, '').trim();
    var items = opts.map(function(o){ var r = recT && (o.indexOf(recT) >= 0 || recT.indexOf(o.replace(/^지금\s*/, '').slice(0, 6)) >= 0); return { t: o, rec: !!r }; });
    if (recT && !items.some(function(x){ return x.rec; })) note = '추천: ' + recT + (note ? ', ' + note : '');
    return { q: q, opts: items, note: note };
  }
  function mdQHtml(no, qq){
    return '<p class="hang qh"><b class="no">' + esc(mdNo(no)) + '</b>' + mdInline(qq.q) + '</p>' +
      '<ul class="qopt">' + qq.opts.map(function(o){ return '<li' + (o.rec ? ' class="rec"' : '') + '>' + mdInline(o.t) + (o.rec ? '<span class="recb">추천</span>' : '') + '</li>'; }).join('') + '</ul>' +
      (qq.note ? '<p class="qnote">' + mdInline(qq.note) + '</p>' : '');
  }
  function mdLine(t){
    var qm = /^(Q\d{1,3}[.:]?)\s+(.+)$/.exec(t), qq = qm && mdQ(qm[2]);
    if (qq) return '<div class="qblk">' + mdQHtml(qm[1], qq) + '</div>';
    var s = mdSlash(t); if (s) return (s.head ? '<p>' + mdInline(s.head) + '</p>' : '') + mdSub(s.items);
    var tb = /^\*\*(.+)\*\*$/.exec(t), t0 = tb ? tb[1] : t;   // 「**[4단계] 질문 대기 — …**」처럼 통째로 굵게 쓴 줄도
    var pre = /^\[([^\]\n]{1,24})\]\s*/.exec(t0), rest = pre ? t0.slice(pre[0].length) : t0, am = MD_ACT.exec(rest);
    if (am) return '<p><b class="tag act">' + (pre ? esc(pre[1]) + ' · ' : '') + esc(am[0].replace(/\s+$/, '')) + '</b> ' + mdInline(rest.slice(am[0].length).replace(/^\s+/, '')) + '</p>';
    var q = /^([A-Z]{1,2}\d{1,3}[.:]?|\d{1,2}\))\s+(.+)$/.exec(t);
    if (q) return '<p class="hang"><b class="no">' + esc(mdNo(q[1])) + '</b>' + mdInline(q[2]) + '</p>';
    return '<p>' + mdInline(t) + '</p>';
  }
  function mdView(src){
    var L = String(src || '').replace(/\r/g, '').split('\n'), html = '', para = [], lists = [], i = 0;
    function endPara(){ if (para.length) { html += para.map(mdLine).join(''); para = []; } }
    function endLists(d){ while (lists.length > d) { html += '</li></' + lists.pop().t + '>'; } }
    function endAll(){ endPara(); endLists(0); }
    for (; i < L.length; i++) {
      var l = L[i], t = l.trim();
      if (!t) { endAll(); continue; }
      var hm = /^(#{1,4})\s+(.+)$/.exec(t);
      if (hm) { endAll(); html += '<p class="mh"><b>' + mdInline(hm[2].replace(/\*\*/g, '')) + '</b></p>'; continue; }
      if (/^\|.*\|$/.test(t)) {   // 표: 연속한 | 줄
        endAll(); var rows = [];
        for (; i < L.length && /^\|.*\|$/.test(L[i].trim()); i++) rows.push(L[i].trim());
        i--;
        var cells = function(r){ return r.replace(/^\||\|$/g, '').split('|').map(function(c){ return c.trim(); }); };
        var body = rows.filter(function(r){ return !/^\|[\s:|-]+\|$/.test(r); });
        html += '<div class="mt"><table>' + body.map(function(r, k){ var tg = k === 0 && rows.length > 1 && /^\|[\s:|-]+\|$/.test(rows[1]) ? 'th' : 'td'; return '<tr>' + cells(r).map(function(c){ return '<' + tg + '>' + mdInline(c) + '</' + tg + '>'; }).join('') + '</tr>'; }).join('') + '</table></div>';
        continue;
      }
      var lm = /^(\s*)([-*•·]|\d+[.)])\s+(.*)$/.exec(l);
      if (lm) {
        endPara();
        var d = Math.min(2, Math.floor(lm[1].replace(/\t/g, '  ').length / 2) + 1), tag = /\d/.test(lm[2]) ? 'ol' : 'ul';
        if (d > lists.length + 1) d = lists.length + 1;
        endLists(d);
        if (lists.length === d && lists[d - 1].t !== tag) endLists(d - 1);
        // 「- Q1 …」 · 「- C3 …」처럼 번호로 시작하는 항목은 글머리표 대신 번호를 앞에 두고 내어 쓴다
        var qn = /^([A-Z]{1,2}\d{1,3}[.:]?)\s+(.+)$/.exec(lm[3]), qq2 = qn && /^Q/.test(qn[1]) ? mdQ(qn[2]) : null, liO = qq2 ? '<li class="qli">' : qn ? '<li class="qn">' : '<li>';
        if (lists.length === d) html += '</li>' + liO;
        else { html += '<' + tag + '>' + liO; lists.push({ t: tag }); }
        var body = qn ? qn[2] : lm[3], sl = mdSlash(body);
        // 질문 줄은 위(qq2)에서 나눔
        if (qq2) { html += '<div class="qblk">' + mdQHtml(qn[1], qq2) + '</div>'; continue; }
        if (qn) html += '<b class="no">' + esc(mdNo(qn[1])) + '</b>';
        html += sl ? (sl.head ? mdInline(sl.head) : '') + mdSub(sl.items) : mdInline(body);
        continue;
      }
      if (lists.length && /^\s{2,}/.test(l)) { html += '<br>' + mdInline(t); continue; }   // 글머리표 아래 이어지는 줄
      endLists(0); para.push(t);   // 줄마다 따로 띄운다(mdLine)
    }
    endAll();
    return '<div class="md">' + html + '</div>';
  }
  function noteHtml(s){
    // 여러 줄이거나 마크다운 표시가 있으면 서식대로. 한 줄짜리 예전 note만 아래처럼 문장 · 「 / 」로 나눠 보인다
    if (/\n/.test(String(s)) || /\*\*|`/.test(String(s))) return mdView(s);
    var paras = [String(s)];
    paras = String(s).split(/(?<=[.。])\s+(?=\S)|;\s+/);
    var html = '', list = [];
    function flush(){ if (list.length) { html += '<ul>' + list.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'; list = []; } }
    paras.forEach(function(p){
      p = p.trim(); if (!p) return;
      if (/^[-•·]\s+/.test(p)) { list.push(p.replace(/^[-•·]\s+/, '')); return; }
      var parts = p.split(/\s+\/\s+/);
      var head = parts.shift();
      if (parts.length && /:\s*(.+)$/.test(head)) { var m = head.match(/^(.*?:)\s*(.+)$/); flush(); html += '<p>' + esc(m[1]) + '</p>'; list.push(m[2]); parts.forEach(function(x){ list.push(x); }); flush(); return; }
      if (parts.length) { flush(); [head].concat(parts).forEach(function(x){ list.push(x); }); flush(); return; }
      flush(); html += '<p>' + esc(head) + '</p>';
    });
    flush();
    return html;
  }
  window.WBMD = { view: mdView, note: noteHtml, inline: mdInline };
})();
