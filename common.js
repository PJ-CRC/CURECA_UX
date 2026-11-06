/* 모든 페이지 공통 함수(window.WB). 페이지 스크립트보다 먼저 읽는다: <head>에 <script src="common.js"></script>
   - 같은 기능이 페이지마다 따로 있으면 고칠 때 한쪽만 바뀌어 어긋난다(예: 시작 안내 완료 기준이 Setup.html · appnav.js 두 곳에 있었다)
   - 여기 함수는 모든 페이지가 같은 뜻으로 쓰는 것만 둔다. 페이지마다 모양이 다른 것(toast · 날짜 표시 등)은 각 페이지에 둔다 */
(function(){
  var WB = window.WB || (window.WB = {});

  /* HTML에 넣을 글: & < > " 를 바꾼다 */
  WB.esc = function(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); };

  /* 브라우저 저장(localStorage): store(k) 읽기 · store(k, v) 쓰기. 사생활 보호 모드 등에서 막혀도 오류 없이 null */
  WB.store = function(k, v){ try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch(e){ return null; } };

  /* Figma 링크 → {key, node('12:34' 또는 '')}, 형식이 아니면 null (design · file · proto, www · https:// 없어도 됨) */
  WB.parseFig = function(u){
    var m = String(u || '').trim().match(/^(?:https?:\/\/)?(?:www\.)?figma\.com\/(?:design|file|proto)\/([A-Za-z0-9]+)(?:\/[^?#]*)?(?:\?([^#]*))?/);
    if (!m) return null;
    var node = ((m[2] || '').match(/(?:^|&)node-id=([0-9]+[-:][0-9]+)/) || [])[1] || '';
    return { key: m[1], node: node.replace('-', ':') };
  };

  /* ── 시작 안내 8단계: 단계 이름과 완료 기준(시작 안내 화면 · 상단 메뉴 「시작 안내」 경고가 함께 쓴다) ──
     d = GET /api/setup 응답 {state, env} → 단계마다 true(완료) · false */
  WB.SETUP_STEPS = ['작업자 이름', 'Figma 데스크톱 앱', '작업할 Figma 링크', 'Figma 플러그인', 'Claude 앱', 'Claude에 Figma 연결', '요청 감시', '작업 이력 공유(깃허브)'];
  WB.setupDone = function(d){
    var s = (d && d.state) || {}, e = (d && d.env) || {}, c = s.checks || {}, ag = e.agent || {};
    var plugin = e.pluginSeenSec != null && e.pluginSeenSec < 600;
    var watch = !!ag.alive || (e.watcherSec != null && e.watcherSec < 90);
    return [
      !!String(s.user || '').trim(),
      !!c.figma,
      !!WB.parseFig(s.figmaUrl),
      plugin || !!c.plugin,
      !!c.claude,
      !!c.connector,
      /* 백그라운드는 기다림(idle) · 처리 중(working)일 때만 완료. 오류 · 로그인 필요는 감시가 돌아도 요청을 처리하지 못한다 */
      ag.alive ? (ag.status === 'idle' || ag.status === 'working') : watch,
      !!(e.historySync && e.historySync.ok)
    ];
  };
  /* 안 된 단계 이름 목록(「7. 요청 감시」처럼) */
  WB.setupMissing = function(d){
    var ok = WB.setupDone(d);
    return WB.SETUP_STEPS.map(function(t, i){ return ok[i] ? null : (i + 1) + '. ' + t; }).filter(Boolean);
  };
})();
