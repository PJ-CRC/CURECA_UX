/* 공통 상단 메뉴 보조
   1. 탭 열림 · 닫힘을 서버에 알린다(20초마다 · 닫을 때). 마지막 Workbench 탭을 닫으면 3초 뒤 서버가
      묻지 않고 꺼진다. 새로고침 · 메뉴 이동은 곧바로 다시 연결돼 꺼지지 않는다.
   2. 버전 표시(VERSION). 실행할 때 자동 업데이트가 됐으면(workbench/.update.json) 한 번 알린다.
   3. 이 PC 작업자의 Claude 사용 한도(5시간 · 주간 %, 초기화까지 남은 시간)를 버전 앞에 표시한다.
      Claude가 깰 때마다 workbench/.plan_usage.json에 적는다(CLAUDE.md). %는 그때 값, 남은 시간은 여기서 계산한다.
   작업할 Figma 파일 · 페이지는 시작 안내 3단계의 작업 링크로만 정한다(상단 메뉴에서 고르지 않는다). */
(function(){
  var nav = document.querySelector('.appnav'); if (!nav || location.protocol === 'file:') return;

  /* ── 넓은 본문(.app-wrap.wide): 최대 너비 없이, 좌우 여백 = 상단 메뉴 「UX 문서」의 왼쪽 위치 ──
     본문이 그 메뉴 아래에서 시작하고 오른쪽도 같은 여백. 그러면 본문이 1000px보다 좁아지는 화면은 공통 여백 */
  (function(){
    var wrap = document.querySelector('.app-wrap.wide'); if (!wrap) return;
    function fit(){
      var a = nav.querySelector('a[href="Common_UX_Guide.html"]'), x = a ? Math.round(a.getBoundingClientRect().left) : 0;
      wrap.style.paddingLeft = wrap.style.paddingRight = x > 0 && innerWidth - 2 * x >= 1000 ? x + 'px' : '';
    }
    fit(); window.addEventListener('resize', fit);
    if (window.ResizeObserver) new ResizeObserver(fit).observe(nav);   // 메뉴(계정 메뉴 등)가 나중에 바뀌어도
  })();

  /* ── 버전 · 자동 업데이트 알림 ── */
  Promise.all([
    fetch('/VERSION', { cache: 'no-store' }).then(function(r){ return r.ok ? r.text() : ''; }),
    fetch('/workbench/.update.json', { cache: 'no-store' }).then(function(r){ return r.ok ? r.json() : null; }).catch(function(){ return null; })
  ]).then(function(res){
    var v = String(res[0] || '').trim(), u = res[1]; if (!v) return;
    var b = document.createElement('span');
    b.className = 'badge appnav-ver'; b.textContent = 'v' + v;
    b.title = u && u.message ? '업데이트 확인: ' + String(u.checkedAt || '').replace('T', ' ').slice(0, 16) + ' · ' + u.message : '버전';
    /* 사용량 표시가 먼저 들어왔으면 그 뒤에 */
    var right = nav.querySelector('.appnav-right'), use = right && right.querySelector('.appnav-usage');
    if (right) right.insertBefore(b, use ? use.nextSibling : right.firstChild);
    /* 방금 새 버전으로 바뀌었으면 한 번만 알린다 */
    var key = 'cux.updated.' + (u && u.appliedAt);
    try {
      if (u && u.from && u.to && u.from !== u.to && Date.now() - Date.parse(u.appliedAt) < 864e5 && !localStorage.getItem(key)) {
        localStorage.setItem(key, '1');
        var t = document.createElement('div');
        t.setAttribute('role', 'status');
        t.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:9999;background:#14171c;color:#fff;padding:10px 16px;border-radius:10px;font-size:13px;box-shadow:0 6px 20px rgba(0,0,0,.25)';
        t.textContent = '새 버전으로 업데이트했습니다: v' + u.from + ' → v' + u.to;
        document.body.appendChild(t); setTimeout(function(){ t.remove(); }, 6000);
      }
    } catch(x){}
  }).catch(function(){});

  /* ── Claude 사용 한도 (이 PC 작업자 본인) ── */
  var usage = null, usageEl = null;
  var LABEL = { '5-hour limit': '5시간 한도', 'Weekly · all models': '주간 (전체 모델)' };
  function left(t){
    var m = Math.max(0, Math.round((Date.parse(t) - Date.now()) / 60000)), d = Math.floor(m / 1440), h = Math.floor(m % 1440 / 60);
    return d ? d + '일 ' + h + '시간' : h ? h + '시간 ' + (m % 60) + '분' : (m % 60) + '분';
  }
  function when(t){ var d = new Date(t); return (d.getMonth() + 1) + '/' + d.getDate() + ' ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2); }
  function drawUsage(){
    var right = nav.querySelector('.appnav-right'); if (!right || !usage || !(usage.windows || []).length) { if (usageEl) usageEl.hidden = true; return; }
    if (!usageEl) {
      usageEl = document.createElement('span'); usageEl.className = 'badge appnav-usage';
      right.insertBefore(usageEl, right.querySelector('.appnav-ver') || right.firstChild);
    }
    var ws = usage.windows, five = ws.filter(function(w){ return /^5-hour/.test(w.label); })[0] || ws[0],
        week = ws.filter(function(w){ return /^Weekly · all/.test(w.label); })[0];
    /* 0%일 때는 아직 한도 구간이 시작되지 않아 초기화 시각(resetsAt)이 없다 → 남은 시간은 빼고 보인다 */
    var hasReset = !isNaN(Date.parse(five.resetsAt));
    var gone = hasReset && Date.parse(five.resetsAt) <= Date.now(), age = Math.round((Date.now() - Date.parse(usage.at)) / 60000), p = +five.percentUsed || 0;
    /* 초기화 시각이 지났으면 %는 알 수 없다(다음에 Claude가 깰 때 갱신) */
    /* 좁은 화면에서는 주간 · 남은 시간 순서로 접힌다(마우스를 올리면 전체) */
    usageEl.innerHTML = '<i style="width:' + (gone ? 0 : Math.min(100, p)) + '%"></i>' + (gone ? '<b>Claude 한도 초기화됨 · 갱신 대기</b>' :
      '<b>Claude ' + p + '%</b>' + (hasReset ? '<b class="rs"> · ' + left(five.resetsAt) + ' 후 초기화</b>' : '') +
      (week && Date.parse(week.resetsAt) > Date.now() ? '<b class="wk"> · 주간 ' + (+week.percentUsed || 0) + '%</b>' : ''));
    usageEl.hidden = false;
    usageEl.className = 'badge appnav-usage' + (gone || age > 180 ? ' old' : p >= 95 ? ' off' : p >= 80 ? ' warn' : '');
    usageEl.title = ws.map(function(w){
      if (isNaN(Date.parse(w.resetsAt))) return (LABEL[w.label] || w.label) + ' ' + w.percentUsed + '% 사용';
      return (LABEL[w.label] || w.label) + ' ' + w.percentUsed + '% 사용 · ' + when(w.resetsAt) + ' 초기화' + (Date.parse(w.resetsAt) > Date.now() ? ' (' + left(w.resetsAt) + ' 후)' : ' (지남)');
    }).join('\n') + '\n' + (usage.plan ? usage.plan + ' 요금제 · ' : '') + when(usage.at) + ' 기준(' + (age < 1 ? '방금' : age < 60 ? age + '분 전' : Math.round(age / 60) + '시간 전') + ')\nClaude가 요청 · 작업을 처리할 때마다 갱신합니다.';
  }
  function loadUsage(){
    fetch('/workbench/.plan_usage.json', { cache: 'no-store' }).then(function(r){ return r.ok ? r.json() : null; })
      .then(function(d){ usage = d; drawUsage(); }).catch(function(){});
  }
  loadUsage(); setInterval(loadUsage, 60000); setInterval(drawUsage, 30000);

  /* ── 로그인 · 메뉴 권한 ──
     계정이 있으면(.history/accounts) 로그인한 계정의 메뉴만 보이고, 오른쪽에 이름(내 정보) · 로그아웃.
     작업자 이름 칸은 계정 이름으로 고정한다(요청 · 이력의 작성자). 서버도 페이지 · API를 막는다(이 표시는 화면 정리) */
  fetch('/api/me', { cache: 'no-store' }).then(function(r){ return r.json(); }).then(function(m){
    if (!m || !m.required) return;
    if (!m.user) { location.replace('/Login.html?next=' + encodeURIComponent(location.pathname + location.search + location.hash)); return; }
    window.WB_ME = m;
    var pageMenu = {}; (m.menus || []).forEach(function(x){ (x.pages || [x.page]).forEach(function(p){ pageMenu[p] = x.key; }); });
    /* 읽기 · 쓰기: 이 페이지 메뉴의 쓰기 권한이 없으면 html.perm-ro — 페이지의 .w-only(수정 요청 등 바꾸는 버튼)를 숨기고 .ro-only 안내를 보인다(서버도 막는다) */
    window.WB_CAN_WRITE = function(k){ return (m.writes || []).indexOf(k) >= 0; };
    var curMenu = (m.menus || []).filter(function(x){ return x.key === pageMenu[location.pathname.replace(/^\//, '')]; })[0];
    var ro = !!(curMenu && curMenu.write && !window.WB_CAN_WRITE(curMenu.key));
    document.documentElement.classList.toggle('perm-ro', ro);
    [].forEach.call(nav.querySelectorAll('a[href]'), function(a){
      var p = (a.getAttribute('href') || '').split(/[?#]/)[0], k = pageMenu[p];
      if (k && m.allowed.indexOf(k) < 0) a.hidden = true;
    });
    if (m.user.admin && !nav.querySelector('a[href="Accounts.html"]')) {
      var acc = document.createElement('a'); acc.href = 'Accounts.html'; acc.textContent = '계정 관리';
      if (/Accounts\.html$/.test(location.pathname)) acc.setAttribute('aria-current', 'page');
      var sp = nav.querySelector('.appnav-sp'); nav.insertBefore(acc, sp);
    }
    var right = nav.querySelector('.appnav-right');
    if (right && ro) {
      var rb = document.createElement('span'); rb.className = 'badge appnav-ro'; rb.textContent = '보기 전용';
      rb.title = '「' + curMenu.label + '」 메뉴는 읽기 권한만 있습니다. 쓰기(' + curMenu.write + ')는 최고관리자에게 「' + curMenu.label + ' · 쓰기」 권한을 요청하세요.';
      right.insertBefore(rb, right.firstChild);
    }
    if (right) {
      var box = document.createElement('span'); box.className = 'appnav-acct';
      box.innerHTML = '<a href="Account.html" title="내 정보 · 비밀번호 변경"></a><button type="button">로그아웃</button>';
      box.firstChild.textContent = m.user.name + (m.user.admin ? ' · 관리자' : '');
      if (/Account\.html$/.test(location.pathname)) box.firstChild.setAttribute('aria-current', 'page');
      box.lastChild.onclick = function(){
        fetch('/api/logout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' }).then(function(){ location.replace('/Login.html'); });
      };
      right.appendChild(box);
    }
    /* 작업자 이름 = 계정 이름 (입력 칸은 숨기고 값만 채워 페이지 스크립트가 그대로 쓰게) */
    try { localStorage.setItem('cux.user', m.user.name); } catch(x){}
    [].forEach.call(document.querySelectorAll('#cuxUser, #userName'), function(inp){
      inp.value = m.user.name; inp.readOnly = true; inp.title = '로그인한 계정 이름(내 정보에서 확인)';
      inp.dispatchEvent(new Event('input', { bubbles: true }));
      var lab = inp.closest('.appnav-user'); if (lab) lab.hidden = true;
    });
    var us = document.getElementById('userSave'); if (us) us.hidden = true;
  }).catch(function(){});

  /* ── 탭 열림 · 닫힘 ── */
  var pageId = Math.random().toString(36).slice(2) + Date.now().toString(36);
  function alive(){ fetch('/api/alive', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: pageId }) }).catch(function(){}); }
  alive(); setInterval(alive, 20000);
  window.addEventListener('pagehide', function(){
    try { navigator.sendBeacon('/api/bye', JSON.stringify({ id: pageId })); } catch(x){}
  });
})();
