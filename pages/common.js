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
    var cli = !!ag.alive && (ag.status === 'idle' || ag.status === 'working');
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
})();
