$file = "c:\Users\HuzaifaTanveer\Desktop\all-projects\ds-web\components\Technologies\flutter\Hero.jsx"
$content = Get-Content $file -Raw
$content = $content -replace '<foreignObject[^>]*?><div[^>]*?style="[^"]*?"[^>]*?></div></foreignObject>', ''
Set-Content $file -Value $content
