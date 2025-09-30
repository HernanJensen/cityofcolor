
<!doctype html>
<html <?php language_attributes(); ?> class="">
<head>
  <?php $URI = get_template_directory_uri(); ?>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5">
  <meta name="format-detection" content="telephone=no">
  	<link rel="preload"  href="<?php echo $URI.'/main.css'; ?>" as="style" />

	
    <title><?php wp_title('|', true, 'right'); ?></title>
    <meta name="description" content="<?php bloginfo('description'); ?>" />
	
	<link rel="manifest" href="<?php echo $URI.'/csskiller/manifest.json'; ?>">
  	<link rel="stylesheet"href="<?php echo $URI.'/main.css'; ?>" />
	
	<meta name="theme-color" content="#00101F" />
  
	<?php 
	wp_head();
  ?>
  </head>
  <body>
  <div class="waiter" style="position:fixed;top:0;left:0;width:100%;height:100%;background:white;z-index:300;"></div>
    <video
      id="videoLow"
      src="<?php echo $URI; ?>/vid.mp4"
      autoplay
      muted
      playsinline
      loop
      width="1"
      height="1"
      style="position:absolute;opacity:0;"
    >
    </video>
    <div id="app">
<?php
//print_r($html);
if(1 == 1){

$html['nav']['ops'] = $html['ops'];
$rendernav = './pug/basic/nav.pug';
$rendernav = Phug::renderFile(
  $rendernav, 
  $html['nav']
);
$html['nav'] = htmlspecialchars($rendernav);


$html['loader']['ops'] = $ops;
$renderloader = './pug/basic/loader.pug';
$renderloader = Phug::renderFile(
  $renderloader, 
  $html['loader']
);


echo $rendernav;
echo $renderloader;
// $html['loader'] = htmlspecialchars($renderloader);

}

?>