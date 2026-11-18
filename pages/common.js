/* 모든 페이지 공통 함수(window.WB). 페이지 스크립트보다 먼저 읽는다: <head>에 <script src="common.js"></script>
   - 같은 기능이 페이지마다 따로 있으면 고칠 때 한쪽만 바뀌어 어긋난다(예: 시작 안내 완료 기준이 Setup.html · appnav.js 두 곳에 있었다)
   - 여기 함수는 모든 페이지가 같은 뜻으로 쓰는 것만 둔다. 페이지마다 모양이 다른 것(toast · 날짜 표시 등)은 각 페이지에 둔다 */
(function(){
  var WB = window.WB || (window.WB = {});

  /* HTML에 넣을 글: & < > " 를 바꾼다 */
  WB.esc = function(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); };

  /* 마크다운 · 남이 쓴 HTML을 화면에 넣기 전에 거른다(2026-11-13 점검 S5): 스크립트 · iframe 등 태그, on… 속성,
     javascript: · vbscript: · data:(그림 아님) 주소를 뺀다. 문서 · 회의록 · Claude 답은 여러 사람 · Claude가 쓰니 그대로 넣으면 그 글 안의 스크립트가 보는 사람 PC에서 돈다 */
  var BAD_TAG = /^(script|iframe|frame|frameset|object|embed|applet|base|meta|link|form|noscript|template)$/i;
  function okUrl(v, img){ var s = String(v || '').replace(/[\u0000- \u007f]+/g, '').toLowerCase(); if (/^(javascript|vbscript|livescript):/.test(s)) return false; if (/^data:/.test(s)) return !!img && /^data:image\/(png|jpe?g|gif|webp);/.test(s); return true; }
  WB.safeHtml = function(html){
    var t = document.createElement('template'); t.innerHTML = String(html == null ? '' : html);
    var all = t.content.querySelectorAll('*');
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      if (BAD_TAG.test(el.tagName) || el.namespaceURI === 'http://www.w3.org/2000/svg' && /^(script|foreignobject)$/i.test(el.tagName)) { el.remove(); continue; }
      for (var j = el.attributes.length - 1; j >= 0; j--) {
        var a = el.attributes[j], n = a.name.toLowerCase();
        if (/^on/.test(n) || n === 'srcdoc' || n === 'formaction') { el.removeAttribute(a.name); continue; }
        if (/^(href|src|xlink:href|action|poster|background)$/.test(n) && !okUrl(a.value, n === 'src' && el.tagName === 'IMG')) el.removeAttribute(a.name);
      }
    }
    return t.innerHTML;
  };
  /* marked를 읽은 뒤 한 번: 모든 parse · parseInline 결과를 safeHtml로 거른다 */
  WB.guardMarked = function(){ if (!window.marked || window.marked.__wbSafe) return; window.marked.use({ hooks: { postprocess: function(h){ return WB.safeHtml(h); } } }); window.marked.__wbSafe = true; };

  /* 브라우저 저장(localStorage): store(k) 읽기 · store(k, v) 쓰기. 사생활 보호 모드 등에서 막혀도 오류 없이 null */
  /* 스크롤 방식: 운영체제에서 「움직임 줄이기」를 켰으면 바로 이동(JS의 behavior:'smooth'는 CSS 설정을 따르지 않는다, 2026-11-18) */
  WB.sb = function(){ try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'; } catch(e){ return 'auto'; } };
  WB.store = function(k, v){ try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch(e){ return null; } };

  /* Figma 링크 → {key, node('12:34' 또는 '')}, 형식이 아니면 null (design · file · proto, www · https:// 없어도 됨) */
  WB.parseFig = function(u){
    var m = String(u || '').trim().match(/^(?:https?:\/\/)?(?:www\.)?figma\.com\/(?:design|file|proto)\/([A-Za-z0-9]+)(?:\/[^?#]*)?(?:\?([^#]*))?/);
    if (!m) return null;
    var node = ((m[2] || '').match(/(?:^|&)node-id=([0-9]+[-:][0-9]+)/) || [])[1] || '';
    return { key: m[1], node: node.replace('-', ':') };
  };

  /* ── 시작 안내 6단계: 단계 이름과 완료 기준(시작 안내 화면 · 상단 메뉴 「시작 안내」 경고가 함께 쓴다) ──
     d = GET /api/setup 응답 {state, env} → 단계마다 true(완료) · false */
  /* 2026-11-13 8단계 → 6단계: 4 Figma 연결 = 플러그인 또는 토큰, 5 Claude 연결 = 앱(Code 탭 대화로 감시) 또는 CLI(백그라운드) — 둘 중 하나면 완료 */
  WB.SETUP_STEPS = ['작업자 이름', 'Figma 로그인', '작업할 Figma 링크', 'Figma 연결(플러그인 또는 토큰)', 'Claude 연결(앱 또는 CLI)', '작업 이력 공유(깃허브)'];
  WB.setupDone = function(d){
    var s = (d && d.state) || {}, e = (d && d.env) || {}, c = s.checks || {}, ag = e.agent || {};
    var plugin = e.pluginSeenSec != null && e.pluginSeenSec < 600;
    /* 백그라운드는 기다림(idle) · 처리 중(working)일 때만. 오류 · 로그인 필요는 감시가 돌아도 요청을 처리하지 못한다 */
    var cli = !!ag.alive && (ag.status === 'idle' || ag.status === 'working' || ag.status === 'limit');   // 한도로 쉬는 것은 설정 문제가 아니다(2026-11-18)
    /* 앱: Code 탭 대화가 감시 중(하트비트 90초 안)이고 Claude에 Figma를 연결했다고 체크 */
    var app = e.watcherSec != null && e.watcherSec < 90 && !!c.connector;
    return [
      !!String(s.user || '').trim(),
      !!c.figma || !!e.figmaToken,
      !!WB.parseFig(s.figmaUrl),
      plugin || !!c.plugin || !!e.figmaToken,
      cli || app,
      !!(e.historySync && e.historySync.ok)
    ];
  };
  /* 안 된 단계 이름 목록(「7. 요청 감시」처럼) */
  WB.setupMissing = function(d){
    var ok = WB.setupDone(d);
    return WB.SETUP_STEPS.map(function(t, i){ return ok[i] ? null : (i + 1) + '. ' + t; }).filter(Boolean);
  };

  /* ── 확인 · 알림 · 입력 팝업(2026-11-17): 브라우저 기본 confirm · alert · prompt 대신 쓴다 ──
     WB.confirm(글, {ok:'지우기', danger:true}) → Promise<true|false>
     WB.alert(글) → Promise(닫으면)
     WB.prompt(글, 처음 값, {ok:'만들기'}) → Promise<입력한 값 | null(취소)>
     {warn:'…'}을 주면 설명 아래에 주황 경고 칸을 둔다(막지는 않고 알리기만)
     글: 첫 줄이 제목, 나머지가 설명. 줄이 하나면 첫 문장이 제목({title}로 따로 줄 수도 있음).
         설명은 문장마다 줄을 나눈다(한 문장 안에서 끊을 자리는 글에 \n으로). 설명이 4줄을 넘으면 왼쪽 정렬.
     기본 팝업과 달리 화면을 멈추지 않으니 답을 받은 뒤 할 일은 then(또는 await) 안에 쓴다.
     Enter = 확인(지우기처럼 위험한 것은 처음 포커스가 「취소」), Esc · 바깥 누르기 = 취소. 여러 개가 겹치면 차례로 띄운다. */
  var DLG_CSS = 'dialog.wbd-ov{position:fixed;inset:0;width:100%;height:100%;max-width:none;max-height:none;margin:0;border:0;border-radius:0;box-shadow:none;background:rgba(20,23,28,.38);padding:16px;box-sizing:border-box;overflow:hidden;color:inherit;opacity:0;transition:opacity .12s}' +
    'dialog.wbd-ov[open]{display:flex;align-items:center;justify-content:center}' +
    'dialog.wbd-ov::backdrop{background:transparent}' +
    'dialog.wbd-ov.on{opacity:1}' +
    '.wbd{width:100%;max-width:360px;max-height:calc(100vh - 32px);background:var(--surface,#fff);color:var(--ink,#14171c);border:1px solid var(--line,#e3e7ee);border-radius:14px;box-shadow:0 12px 32px rgba(15,17,21,.18),0 2px 6px rgba(15,17,21,.08);padding:22px 24px 20px;min-height:200px;display:flex;flex-direction:column;text-align:center;font:14px/1.6 Pretendard,-apple-system,"Segoe UI","Malgun Gothic",sans-serif;transform:translateY(6px) scale(.98);transition:transform .14s}' +
    '.wbd-ov.on .wbd{transform:none}' +
    '.wbd.wide{max-width:440px}' +
    '.wbd-bd{flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;justify-content:center;word-break:keep-all;overflow-wrap:anywhere}' +
    '.wbd h3{margin:0 0 6px;font-size:17px;font-weight:800;line-height:1.4;text-wrap:balance}' +
    '.wbd p{margin:0;color:var(--ink-2,#4a5260);font-size:14px;white-space:pre-line;text-wrap:balance}' +
    '.wbd p.left{text-align:left;text-wrap:wrap}' +
    '.wbd .wbd-warn{margin-top:14px;padding:10px 12px;border-radius:8px;background:var(--warn-soft,#fff1e0);color:var(--warn,#a35100);font-size:13px;line-height:1.55;white-space:pre-line;text-wrap:balance}' +
    '.wbd input{width:100%;box-sizing:border-box;margin-top:14px;height:38px;border:1px solid var(--line,#e3e7ee);border-radius:8px;background:var(--surface,#fff);color:inherit;padding:0 10px;font:inherit;text-align:left}' +
    '.wbd input:focus{outline:2px solid var(--accent,#2747d8);outline-offset:-1px;border-color:transparent}' +
    '.wbd-acts{display:flex;justify-content:center;gap:8px;padding-top:20px;flex:none}' +
    '.wbd-acts button{height:36px;padding:0 16px;border:1px solid var(--line,#e3e7ee);border-radius:8px;background:var(--surface,#fff);color:inherit;font:inherit;font-weight:600;white-space:nowrap;cursor:pointer}' +
    '.wbd-acts button:hover{border-color:var(--accent,#2747d8)}' +
    '.wbd-acts button:focus-visible{outline:2px solid var(--accent,#2747d8);outline-offset:2px}' +
    '.wbd-acts .ok{background:var(--accent,#2747d8);border-color:var(--accent,#2747d8);color:#fff}' +
    '.wbd-acts .ok.danger{background:var(--red,#c4281c);border-color:var(--red,#c4281c)}' +
    '.wbd-acts .ok:hover{filter:brightness(1.08)}' +
    ':root[data-theme="dark"] .wbd-acts .ok{color:#0f1115}' +
    '@media (prefers-color-scheme: dark){:root:not([data-theme="light"]) .wbd-acts .ok{color:#0f1115}}' +
    '@media (prefers-reduced-motion:reduce){.wbd-ov,.wbd{transition:none}}';
  var dlgQ = Promise.resolve();
  function dlgSplit(msg, o){
    var s = String(msg == null ? '' : msg).replace(/\r/g, '').trim(), t = o.title || '', b = '';
    if (!t) {
      var i = s.indexOf('\n');
      if (i >= 0) { t = s.slice(0, i).trim(); b = s.slice(i + 1); }
      else { var m = /^(.+?[^\d\s][.?!])\s+(\S[\s\S]*)$/.exec(s); if (m && m[1].length <= 60) { t = m[1]; b = m[2]; } else t = s; }
    } else b = s;
    b = b.replace(/^\n+|\n+$/g, '').replace(/([^\d\s][.?!])[ \t]+(?=[^\s)\]])/g, '$1\n');   // 문장마다 줄 바꿈(「1. 항목」 같은 번호는 그대로)
    return { t: t, b: b };
  }
  function dlgOpen(kind, msg, o){
    o = o || {};
    var run = function(){ return new Promise(function(done){
      if (!document.getElementById('wbd-css')) { var st = document.createElement('style'); st.id = 'wbd-css'; st.textContent = DLG_CSS; document.head.appendChild(st); }
      var x = dlgSplit(msg, o), lines = x.b ? x.b.split('\n').length : 0, prev = document.activeElement;
      var ov = document.createElement('dialog'); ov.className = 'wbd-ov';   // <dialog> showModal: 페이지에 열린 다른 dialog(모달)보다 위에 뜬다
      ov.innerHTML = '<div class="wbd' + (x.b.length > 160 ? ' wide' : '') + '" role="' + (kind === 'alert' ? 'alertdialog' : 'dialog') + '" aria-modal="true" aria-labelledby="wbd-t">' +
        '<div class="wbd-bd"><h3 id="wbd-t">' + WB.esc(x.t) + '</h3>' + (x.b ? '<p class="' + (lines > 4 ? 'left' : '') + '">' + WB.esc(x.b) + '</p>' : '') +
        (o.warn ? '<div class="wbd-warn" role="note">' + WB.esc(o.warn) + '</div>' : '') +
        (kind === 'prompt' ? '<input type="text" aria-label="' + WB.esc(x.t) + '"' + (o.readonly ? ' readonly' : '') + '>' : '') + '</div>' +
        '<div class="wbd-acts">' + (kind === 'alert' || o.cancel === false ? '' : '<button type="button" class="no">' + WB.esc(o.cancel || '취소') + '</button>') +
        '<button type="button" class="ok' + (o.danger ? ' danger' : '') + '">' + WB.esc(o.ok || '확인') + '</button></div></div>';
      var inp = ov.querySelector('input'), okB = ov.querySelector('.ok'), noB = ov.querySelector('.no');
      if (inp) inp.value = o.value == null ? '' : String(o.value);
      function close(v){
        document.removeEventListener('keydown', key, true); try { ov.close(); } catch (e) {} ov.remove();
        try { if (prev && prev.focus && document.contains(prev)) prev.focus(); } catch (e) {}
        done(v);
      }
      var yes = function(){ close(kind === 'prompt' ? inp.value : kind === 'confirm' ? true : undefined); };
      var no = function(){ close(kind === 'prompt' ? null : kind === 'confirm' ? false : undefined); };
      function key(e){
        if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); no(); }
        else if (e.key === 'Enter' && e.target === inp) { e.preventDefault(); yes(); }
        else if (e.key === 'Tab') {   // 포커스가 팝업 밖으로 나가지 않게
          var f = Array.prototype.slice.call(ov.querySelectorAll('input,button')), i = f.indexOf(document.activeElement);
          e.preventDefault(); f[(i + (e.shiftKey ? f.length - 1 : 1)) % f.length].focus();
        }
      }
      okB.onclick = yes; if (noB) noB.onclick = no;
      ov.addEventListener('mousedown', function(e){ if (e.target === ov) no(); });
      document.addEventListener('keydown', key, true);
      ov.addEventListener('cancel', function(e){ e.preventDefault(); no(); });
      document.body.appendChild(ov);
      try { ov.showModal(); } catch (e) { ov.setAttribute('open', ''); }
      void ov.offsetWidth; ov.classList.add('on');   // 레이아웃을 한 번 잡은 뒤 켜야 나타나는 움직임이 보인다(rAF는 숨은 탭에서 멈춤)
      if (inp) { inp.focus(); inp.select(); } else ((o.danger && noB) || okB).focus();
    }); };
    var p = dlgQ.then(run); dlgQ = p.catch(function(){}); return p;
  }
  WB.confirm = function(msg, o){ return dlgOpen('confirm', msg, o); };
  WB.alert = function(msg, o){ return dlgOpen('alert', msg, o); };
  WB.prompt = function(msg, value, o){ o = Object.assign({}, o || {}); o.value = value; return dlgOpen('prompt', msg, o); };
})();
