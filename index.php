<?php
//header('Content-type: text/cache-manifest');
$ifloder="include";
$tfloder="template";
include("{$ifloder}/config.php");
include("{$ifloder}/function.php");
$ac=$_GET['action']?:$_POST[action];
if(!isset($ac)or$ac==""){
$ac="index";
}
if(!file_exists("{$tfloder}/{$ac}/tconfig.php")){
$ac="404";
}
//echo "✔";
include("{$tfloder}/{$ac}/tconfig.php");
include("{$ifloder}/in.php");
//echo "✘";
?>