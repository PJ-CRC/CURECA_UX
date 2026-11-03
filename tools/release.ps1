# 배포 · 설치 파일 만들기 (관리자 PC, 윈도우)
#   powershell -ExecutionPolicy Bypass -File tools\release.ps1 -Version 0.1.0 [-Publish]
#  - VERSION을 고치고, 프로그램 파일 목록으로 설치용 압축 2개를 만든다: dist\UX_AI_TEST_Workbench_v{버전}_Windows.zip · _Mac.zip
#  - -Publish: 같은 파일을 workbench/git_remote.txt 저장소의 release 브랜치에 올리고 태그 v{버전}을 단다(.release 작업 폴더 사용).
#    모든 작업자 PC가 다음 실행 때 이 버전으로 자동 업데이트한다(workbench/update.ps1 · update.sh). 사용자가 「배포」를 요청할 때만 쓴다
#  - 압축에는 이 버전이 이미 적용됐다고 적어 둬(workbench/.update.json) 새로 설치한 PC가 처음 실행할 때 다시 받지 않는다
#  - 개인 데이터는 빈 상태로 넣는다(수정 요청 목록). 작업 이력(.history) · 설정은 넣지 않는다
#  - 올리는 곳: 기본은 git_remote.txt. -Remote로 다른 저장소에 올릴 수 있다(저장소를 옮길 때 옛 저장소에 마지막 배포). -NoZip이면 압축은 만들지 않는다
#  - PJ-CRC/CURECA_UX는 이 PC의 Deploy key(~/.ssh/config의 Host github-uxai)로 올린다. release · 태그는 보호 규칙(Rulesets)이 있어 Deploy key만 올릴 수 있다
#  - 원격에 release가 없으면(새 저장소) 예전 이력 없이 새로 시작한다
param([Parameter(Mandatory = $true)][string]$Version, [switch]$Publish, [string]$OutDir = '', [string]$Remote = '', [switch]$NoZip)
$ErrorActionPreference = 'Stop'
if ($Version -notmatch '^\d+\.\d+\.\d+$') { throw "버전 형식: 0.1.0 (받은 값: $Version)" }
$Src = Split-Path $PSScriptRoot -Parent
if (-not $OutDir) { $OutDir = Join-Path $Src 'dist' }
$Utf8 = New-Object Text.UTF8Encoding $false
Add-Type -AssemblyName System.IO.Compression, System.IO.Compression.FileSystem
[IO.File]::WriteAllText((Join-Path $Src 'VERSION'), "$Version`n", $Utf8)

# ── 프로그램 파일 목록 ──
$files = 'VERSION','Figma AI Run.bat','Figma AI Run (Terminal).command','appnav.js','appnav.css','guide_server.ps1','guide_server_mac.pl',
  'Common_UX_Guide.html','Common_UX_Changelog.md','Change_History.html','Usage_Stats.html','UX_Guide.html','Figma_Workbench.html','Assay_Pack_Prototype.html','Prototypes.html','Prototype.html','Login.html','Account.html','Accounts.html','Setup.html','CLAUDE.md','README.md'
$wb = 'edit_requests.json','watch_requests.ps1','watch_requests.pl','agent.ps1','agent.pl','launch_win.ps1','history_sync.ps1','history_sync.sh','github_login.ps1','github_login.sh','update.ps1','update.sh','git_remote.txt','usage.ps1','usage.pl','pricing.json'
$list = New-Object System.Collections.Generic.List[string]
foreach ($f in $files) { $list.Add($f) }
foreach ($f in $wb) { $list.Add("workbench\$f") }
# 프로토타입은 PC마다 따로 쌓인다(이 PC 것은 넣지 않음). 예시 assay-pack만 넣는다
foreach ($f in 'meta.json', 'index.html') { $list.Add("prototypes\assay-pack\$f") }
# 빼는 것: 이 PC에서 받은 Workbench 캡처(projects/*/shots, shots_meta.json — PC마다 다시 받는다), 검토용 초안 문서
$skip = '^projects\\[^\\]+\\(shots\\|shots_meta\.json$)|^docs\\(ui_proposal\\|UI_Layout_Proposal\.html$|Plan_Update_and_Accounts\.md$)'
foreach ($d in 'docs','figma_plugin','.claude','Figma AI Run.app','projects') {
  Get-ChildItem -LiteralPath (Join-Path $Src $d) -Recurse -File -Force | Where-Object { $_.Name -ne 'settings.local.json' } | ForEach-Object { $rel = $_.FullName.Substring($Src.Length + 1); if ($rel -notmatch $skip) { $list.Add($rel) } }
}
# 내용을 바꿔 넣는 파일: 수정 요청은 PC마다 따로 쌓이므로 빈 목록(저장소에 없어도 된다), README는 브랜치 안내 줄을 release용으로
$readme = [IO.File]::ReadAllText((Join-Path $Src 'README.md'), $Utf8) -replace '(?m)^<!-- branch-line -->.*$', '<!-- branch-line -->> **이 브랜치: `release`** — 배포본. 직접 고치지 않는다. 작업자 PC가 자동 업데이트로 받는다.'
$override = @{ 'workbench\edit_requests.json' = $Utf8.GetBytes('{"version":1,"items":[]}'); 'README.md' = $Utf8.GetBytes($readme) }
foreach ($rel in $list) { if (-not $override.ContainsKey($rel) -and -not (Test-Path -LiteralPath (Join-Path $Src $rel))) { throw "없는 파일: $rel" } }
$macLaunch = $Utf8.GetBytes("{`n  `"version`": `"0.0.1`",`n  `"configurations`": [`n    {`n      `"name`": `"guide-sync`",`n      `"runtimeExecutable`": `"perl`",`n      `"runtimeArgs`": [`"guide_server_mac.pl`", `"8765`"],`n      `"port`": 8765`n    }`n  ]`n}`n")
function Is-Exec($rel) { $r = $rel -replace '\\', '/'; return ($r -like '*.command' -or $r -like '*.pl' -or $r -like '*.sh' -or $r -like '*/Contents/MacOS/*') }
function G { $out = & git @args 2>&1 | ForEach-Object { "$_" }; $script:code = $LASTEXITCODE; return (($out | Where-Object { $_ }) -join "`n").Trim() }

# ── release 브랜치에 올리기 ──
$sha = ''
if ($Publish) {
  $ErrorActionPreference = 'Continue'
  $url = $Remote; if (-not $url) { $url = ([IO.File]::ReadAllText((Join-Path $Src 'workbench\git_remote.txt'))).Trim() }
  if ($url -match '^https://github\.com/PJ-CRC/CURECA_UX(\.git)?/?$') { $url = 'git@github-uxai:PJ-CRC/CURECA_UX.git' }
  $R = Join-Path $Src '.release'
  if (-not (Test-Path (Join-Path $R '.git'))) { New-Item -ItemType Directory -Force $R | Out-Null; G -C $R init -q | Out-Null; G -C $R remote add origin $url | Out-Null }
  else { G -C $R remote set-url origin $url | Out-Null }
  G -C $R config core.autocrlf false | Out-Null; G -C $R config core.filemode false | Out-Null
  $ls = G -C $R ls-remote --exit-code --heads origin release
  if ($code -eq 0) { G -C $R fetch -q origin release | Out-Null; G -C $R checkout -q -f -B release FETCH_HEAD | Out-Null; if ($code) { throw '원격 release를 받지 못했습니다.' } }
  elseif ($code -eq 2) { G -C $R update-ref -d refs/heads/release | Out-Null; G -C $R symbolic-ref HEAD refs/heads/release | Out-Null }   # 이력 없이 새 release
  else { throw "저장소에 연결하지 못했습니다: $ls" }
  $tags = G -C $R ls-remote --tags origin "refs/tags/v$Version"
  if ($tags) { throw "v$Version은 이미 배포된 버전입니다. 버전을 올려 주세요." }
  # 작업 폴더를 비우고 이번 파일로 채운다(빠진 파일은 지워진다)
  Get-ChildItem -LiteralPath $R -Force | Where-Object { $_.Name -ne '.git' } | Remove-Item -Recurse -Force
  foreach ($rel in $list) {
    $dst = Join-Path $R $rel; $dir = Split-Path $dst -Parent
    if (-not (Test-Path -LiteralPath $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }
    if ($override.ContainsKey($rel)) { [IO.File]::WriteAllBytes($dst, $override[$rel]) } else { Copy-Item -LiteralPath (Join-Path $Src $rel) -Destination $dst -Force }
  }
  G -C $R add -A . | Out-Null
  foreach ($rel in $list) { if (Is-Exec $rel) { G -C $R update-index --chmod=+x -- ($rel -replace '\\', '/') | Out-Null } }
  # 커밋 작성자: 작업 폴더 저장소의 깃 사용자 (없으면 기본 이름)
  $nm = G -C $Src config user.name; if ($code -or -not $nm) { $nm = 'Workbench release' }
  $em = G -C $Src config user.email; if ($code -or -not $em) { $em = 'workbench@localhost' }
  $o = G -c "user.name=$nm" -c "user.email=$em" -C $R commit -q -m "v$Version"
  if ($code) { throw "커밋 실패: $o" }
  G -C $R tag -f "v$Version" | Out-Null   # 같은 버전을 다른 저장소에도 올릴 때 이번 커밋을 가리키게
  $o = G -C $R push -q origin release "refs/tags/v$Version"
  if ($code) { throw "올리기 실패: $o" }
  $sha = G -C $R rev-parse HEAD
  $ErrorActionPreference = 'Stop'
  Write-Host "  release 브랜치에 v$Version 배포: $sha"
}

# ── 설치용 압축 (윈도우 · 맥) ──
if ($NoZip) { return }
if (-not (Test-Path $OutDir)) { New-Item -ItemType Directory -Force $OutDir | Out-Null }
$top = 'UX_AI_TEST_Workbench'
foreach ($os in 'Windows', 'Mac') {
  $mac = $os -eq 'Mac'
  $zip = Join-Path $OutDir "UX_AI_TEST_Workbench_v${Version}_$os.zip"
  $items = @($list | Where-Object { -not ($mac -and ($_ -like '*.bat' -or $_ -like '*.ps1')) })
  $extra = @{}
  if ($mac) { $extra['.claude\launch.json'] = $macLaunch }
  # 이 버전이 이미 적용됐다고 적어 둔다(첫 실행 때 다시 받지 않게)
  if ($sha) { $extra['workbench\.update.json'] = $Utf8.GetBytes(([ordered]@{ checkedAt = ''; ok = $true; message = '설치한 버전'; version = $Version; appliedSha = $sha; appliedAt = ''; from = ''; to = '' } | ConvertTo-Json)) }
  if (Test-Path $zip) { Remove-Item $zip -Force }
  $fs = [IO.File]::Open($zip, 'Create'); $za = New-Object IO.Compression.ZipArchive($fs, [IO.Compression.ZipArchiveMode]::Create)
  $names = $items + @($extra.Keys | Where-Object { $items -notcontains $_ })
  foreach ($rel in $names) {
    $e = $za.CreateEntry($top + '/' + ($rel -replace '\\', '/'), [IO.Compression.CompressionLevel]::Optimal)
    $e.LastWriteTime = Get-Date
    $out = $e.Open()
    if ($extra.ContainsKey($rel)) { $b = $extra[$rel]; $out.Write($b, 0, $b.Length) }
    elseif ($override.ContainsKey($rel)) { $b = $override[$rel]; $out.Write($b, 0, $b.Length) }
    else { $in = [IO.File]::OpenRead((Join-Path $Src $rel)); $in.CopyTo($out); $in.Dispose() }
    $out.Dispose()
  }
  $za.Dispose(); $fs.Dispose()
  # 중앙 디렉터리 고치기: 맥에서 풀 때 실행 권한이 남도록 version made by = Unix(3), 파일 모드(일반 644, 실행 755)
  $b = [IO.File]::ReadAllBytes($zip)
  $eocd = -1; for ($i = $b.Length - 22; $i -ge 0; $i--) { if ($b[$i] -eq 0x50 -and $b[$i + 1] -eq 0x4b -and $b[$i + 2] -eq 5 -and $b[$i + 3] -eq 6) { $eocd = $i; break } }
  $count = [BitConverter]::ToUInt16($b, $eocd + 10); $p = [int][BitConverter]::ToUInt32($b, $eocd + 16)
  for ($k = 0; $k -lt $count; $k++) {
    $nlen = [BitConverter]::ToUInt16($b, $p + 28); $xlen = [BitConverter]::ToUInt16($b, $p + 30); $clen = [BitConverter]::ToUInt16($b, $p + 32)
    $nm = [Text.Encoding]::UTF8.GetString($b, $p + 46, $nlen)
    $mode = 0x81A4; if (Is-Exec $nm) { $mode = 0x81ED }
    $b[$p + 5] = 3
    $attr = [BitConverter]::GetBytes([uint32]($mode * 65536)); for ($j = 0; $j -lt 4; $j++) { $b[$p + 38 + $j] = $attr[$j] }
    $p += 46 + $nlen + $xlen + $clen
  }
  [IO.File]::WriteAllBytes($zip, $b)
  Write-Host ("  {0}: 파일 {1}개, {2:N1} MB" -f (Split-Path $zip -Leaf), $count, ((Get-Item $zip).Length / 1MB))
}
