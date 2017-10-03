<?php
if(file_exists("fileadmin/index.php")){
echo "已解压过了";
exit;
}
require_once('pclzip.lib.php');
$archive = new PclZip('fileadmin.zip'); 
echo "安装完成";
if ($archive->extract() == 0) {
die("Error : ".$archive->errorInfo(true)); 
}
?>
