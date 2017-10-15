<?php
echo <<<HTML
<!DOCTYPE html>
<html manifest="cache.php">
<html lang="zh-cn">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{$page['title']}-{$main['sitename']}</title>
    <!-- MZUI CSS file -->
    <link href="/dist/css/mzui.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/dist/css/fakeLoader.css">
    <link href="/dist/css/common.css" rel="stylesheet">
{$page['tool']}
  </head>
  <body>
<div id="fakeLoader"></div>
  <div class="contents">
HTML;
include("./{$tfloder}/{$ac}/tindex.php");
echo <<<HTML
</div>
<footer>
<p class="content"><center>{$page['footer']}<br>Copyright (c) 2017<strong>{$main['sitename']}</strong> All Rights Reserved.</center></p>
</footer>
    <!-- MZUI JS file -->
<script src="/dist/js/jquery.min.js"></script>
<script src="/dist/js/mzui.min.js"></script>
<script src="/dist/js/fakeLoader.min.js"></script>
<script src="/dist/js/common.js"></script>
<script src="/dist/js/cache.js"></script>
{$page['fool']}
  </body>
</html>
HTML;

?>
