<?php
/*
 * Template Name: Template Legal 
 */
require get_template_directory() . '/vendor/autoload.php';
//$html = get_loadview(['url'=>'/','device'=>-1]);
$html = get_loadview(['id'=>get_the_ID(),'device'=>-1, 'url'=>get_the_permalink()]);

include 'header.php';

  $renderskin = './pug/'.$html['skin'].'.pug';
  
  $renderskin = Phug::renderFile(
    $renderskin, 
    $html['fields']
  );

  echo $renderskin;
?>


<?php 
include('footer.php');
?>