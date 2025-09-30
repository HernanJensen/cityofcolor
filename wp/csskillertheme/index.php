

<?php
/*
 * Template Name: Template Blog
 */
require get_template_directory() . '/vendor/autoload.php';
//$html = getSkin(['url'=>'/','device'=>-1]);
$html = getSkin(['id'=>get_option( 'page_for_posts' ),'device'=>-1, 'url'=>"resources"]);

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