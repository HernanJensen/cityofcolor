

<?php
/*
 * Template Name: Template Blog
 */
require get_template_directory() . '/vendor/autoload.php';
//$html = get_loadview(['url'=>'/','device'=>-1]);
$html = get_loadview(['id'=>get_option( 'page_for_posts' ),'device'=>-1, 'url'=>"resources"]);

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