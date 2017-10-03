<?php
echo <<<HTML
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{$page['title']}-{$main['sitename']}</title>
    <!-- MZUI CSS file -->
    <link href="/dist/css/mzui.min.css" rel="stylesheet">
{$page['tool']}
  </head>
  <body>
HTML;
include("./{$tfloder}/{$ac}/tindex.php");
echo <<<HTML
<footer> <p><font size="1px"><center>{$page['footer']}<br>Copyright (c) 2017<strong>{$main['sitename']}</strong> All Rights Reserved.</center></font></p><p><center><infos></infos></center></p></footer>
    <!-- MZUI JS file -->
<script src="/dist/js/jquery.min.js"></script>
    <script src="/dist/js/mzui.min.js">
</script>
{$page['fool']}
  </body>
</html>
HTML;

?>
