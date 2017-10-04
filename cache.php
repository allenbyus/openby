<?php
header('Content-type: text/cache-manifest');
// only cache files in the following folders (avoids other stuff like "app/")
$folders = array('dist/js', 'dist/css', 'uploads','dist/skins/default','dist/skins/vertical');
//$files = array('//cdnjs.cloudflare.com/ajax/libs/zui/1.6.0/css/zui.min.css','//cdnjs.cloudflare.com/ajax/libs/zui/1.6.0/lib/jquery/jquery.js','//cdnjs.cloudflare.com/ajax/libs/zui/1.6.0/js/zui.min.js','//unpkg.com/purecss@0.6.2/build/pure-min.css','//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js','//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js','https://unpkg.com/moonjs/dist/moon.js');

// recursive function
function append_filelist(&$files, $folder) {
  if ($dh = opendir($folder)) {
    while (($file = readdir($dh)) !== false) {
      if ( ! in_array($file, array('.', '..', '.svn')) &&
             (substr($file, -4) != ".swp")) {
        if (is_dir($folder."/".$file))
          append_filelist($files, $folder."/".$file);
        else
          //$files[] = $folder."/".$file."?hash=".md5_file($folder."/".$file);
          $files[] = $folder."/".$file;
      } // if
    } // while
  } // if
}

// init
foreach ($folders as $folder)
  if (is_dir($folder))
    append_filelist($files, $folder);

// generate output
$body = "CACHE MANIFEST\n# 2017-06-07 v1.0.0\nCACHE:\n";
foreach ($files as $file)
$body .= $file."\n";
$body .="\nNETWORK:\n";
$body.=<<<HTML
*
HTML;
$body .="\n\nFALLBACK:\n";
$body.=<<<HTML
*
HTML;
// render output (the 'Content-length' header avoids the automatic creation of a 'Transfer-Encoding: chunked' header)
header('Content-length: '.strlen($body));
echo $body;
?>
