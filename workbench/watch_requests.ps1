# Workbench 요청 감시: edit_requests.json에 「대기」 요청이 생기면 PENDING R0xx,
#  jobs.json에 처리할 작업(프레임 목록 만들기 · 캡처 받기 · 새 UX 가이드 만들기)이 생기면 JOBS J0xx를 출력하고 종료한다.
# Claude Code가 백그라운드로 실행하고, 종료 알림을 받으면 요청을 처리한 뒤 다시 실행한다.
# 겹침: 공유 작업 이력(.history/entries)에서 다른 PC가 같은 프레임에 「진행 중」이거나 먼저 등록한 「대기」 요청이 있으면
#  CONFLICT R0xx <다른 이력 id> <in-progress|waiting> 를 함께 출력한다(Claude가 그 요청을 「보류」로 두고 메모를 남긴다).
#  「보류」 중 메모가 「겹침 대기」로 시작하는 요청은 겹침이 풀리면 RESUME R0xx 로 알린다. 1시간 넘게 그대로인 다른 요청은 겹침으로 보지 않는다
param([int]$MaxMinutes = 50)
$file = Join-Path $PSScriptRoot 'edit_requests.json'
$jobs = Join-Path $PSScriptRoot 'jobs.json'
$utf8 = New-Object System.Text.UTF8Encoding($false)
$histDir = Join-Path (Join-Path (Split-Path $PSScriptRoot -Parent) '.history') 'entries'
$slug = ([Environment]::MachineName.ToLower() -replace '[^a-z0-9-]', '-')
function Others {
  $o = @()
  if (Test-Path $histDir) {
    foreach ($f in Get-ChildItem $histDir -Filter *.json) {
      if ($f.Name -like "$($slug)_*") { continue }
      try { $e = [IO.File]::ReadAllText($f.FullName, $utf8) | ConvertFrom-Json } catch { continue }
      if ($e.kind -ne 'request' -or ($e.status -ne '대기' -and $e.status -ne '진행 중')) { continue }
      try { if (((Get-Date) - [DateTimeOffset]::Parse($e.at).LocalDateTime).TotalMinutes -gt 60) { continue } } catch { continue }
      $o += $e
    }
  }
  return $o
}
# 시각 읽기: 못 읽으면 $null
function T($s) { try { return [DateTimeOffset]::Parse([string]$s) } catch { return $null } }
# 겹침: 같은 파일 · 프레임에 다른 PC 요청이 「진행 중」이거나, 내 요청보다 **먼저 등록한** 「대기」 요청
#  등록 시각은 이력의 createdAt(예전 이력에는 없어 마지막 변경 시각 at으로 대신). 내 요청 시각을 못 읽으면 지금으로 본다
function Overlap($r, $others) {
  $k = [string]$r.fileKey
  $rc = T $r.createdAt; if (-not $rc) { $rc = [DateTimeOffset]::Now }
  return @($others | Where-Object {
    $ek = [string]$_.fileKey
    $oc = T $(if ($_.createdAt) { $_.createdAt } else { $_.at })
    $ek -eq $k -and $_.nodeId -eq $r.nodeId -and ($_.status -eq '진행 중' -or ($oc -and $oc -lt $rc))
  })
}
# 처리 순서: 우선순위 「높음」 먼저, 같은 우선순위는 먼저 등록한 것부터(등록 시각, 같으면 요청 번호). Claude는 출력된 순서대로 한 건씩 처리한다
function Order($list) {
  return @($list | Sort-Object @{ e = { if ([string]$_.priority -eq '높음') { 0 } else { 1 } } },
    @{ e = { $t = T $_.createdAt; if ($t) { $t.UtcDateTime } else { [datetime]::MaxValue } } },
    @{ e = { [int]('0' + ([string]$_.id -replace '\D', '')) } })
}
$until = (Get-Date).AddMinutes($MaxMinutes)
# 감시 중 표시: 시작 안내(Setup.html)가 .watcher.json의 시각으로 「감시 중」을 확인한다
$heart = Join-Path $PSScriptRoot '.watcher.json'
$beat = [datetime]::MinValue
while ((Get-Date) -lt $until) {
  if (((Get-Date) - $beat).TotalSeconds -ge 20) {
    $beat = Get-Date
    try { [IO.File]::WriteAllText($heart, ('{"at":"' + $beat.ToString('yyyy-MM-ddTHH:mm:sszzz') + '","host":"' + [Environment]::MachineName + '"}'), $utf8) } catch { }
  }
  $out = @()
  try {
    $j = [IO.File]::ReadAllText($file, $utf8) | ConvertFrom-Json
    # @( )로 한 번 더 감싼다: 함수가 돌려준 배열이 1개면 하나로 풀려 .Count가 비어(PowerShell 5.1) 대기 요청이 1개일 때 PENDING을 내지 않았다
    $wait = @(Order @($j.items | Where-Object { $_ -and $_.status -eq '대기' }))
    $held = @(Order @($j.items | Where-Object { $_ -and $_.status -eq '보류' -and ([string]$_.note).StartsWith('겹침 대기') }))
    $others = @(); if ($wait.Count -or $held.Count) { $others = Others }
    if ($wait.Count -gt 0) {
      $out += 'PENDING ' + (($wait | ForEach-Object { $_.id }) -join ',')
      foreach ($r in $wait) { foreach ($c in (Overlap $r $others)) { $out += 'CONFLICT ' + $r.id + ' ' + $c.id + ' ' + $(if ($c.status -eq '진행 중') { 'in-progress' } else { 'waiting' }) } }
    }
    # @( )로 감싼다: 겹침이 1개면 함수 결과가 배열이 아닌 하나로 풀려 .Count가 비어(PowerShell 5.1) 겹침이 풀린 것으로 잘못 봤다
    $free = @($held | Where-Object { -not @(Overlap $_ $others).Count })
    if ($free.Count -gt 0) { $out += 'RESUME ' + (($free | ForEach-Object { $_.id }) -join ',') }
  } catch { }
  # 작업 대기열(jobs.json): 프레임 목록 만들기 · 새 UX 가이드 만들기는 바로, 캡처 받기는 20초 뒤(그동안 Figma 플러그인이 받을 기회)
  try {
    if (Test-Path $jobs) {
      $q = [IO.File]::ReadAllText($jobs, $utf8) | ConvertFrom-Json
      $todo = @($q.items | Where-Object { $_ -and $_.status -eq '대기' -and $_.kind -ne 'text' -and ($_.kind -ne 'capture' -or ((Get-Date) - [DateTimeOffset]::Parse($_.createdAt).LocalDateTime).TotalSeconds -ge 20) })
      if ($todo.Count -gt 0) { $out += 'JOBS ' + (($todo | ForEach-Object { $_.id }) -join ',') }
    }
  } catch { }
  if ($out.Count -gt 0) { $out; exit 0 }
  Start-Sleep -Seconds 2
}
'TIMEOUT'
