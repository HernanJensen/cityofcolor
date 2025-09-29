<?php
/*
 * Template Name: Template Home
 */
require get_template_directory() . '/vendor/autoload.php';
//$html = get_loadview(['url'=>'/','device'=>-1]);
$html =getSkin(['id'=>get_the_ID(),'device'=>-1, 'url'=>get_the_permalink()]);



include 'header.php';

    




  $renderskin = './pug/'.$html['skin'].'.pug';
  $renderskin = Phug::renderFile(
    $renderskin, 
    $html['fields']
  );
  echo $renderskin;

  // print_r($html);
?>


<?php 
include('footer.php');
?>