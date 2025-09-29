<?php
header("Access-Control-Allow-Origin: http://localhost:1234");
header("Access-Control-Allow-Origin: http://192.168.0.113:1234");
header("Access-Control-Allow-Origin: http://192.168.68.113:1234");

	//require get_template_directory() . '/vendor/autoload.php';


  require_once( ABSPATH . 'wp-admin/includes/media.php' );
  include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

add_action( 'init', 'register_acf_blocks' );
function register_acf_blocks() {
  register_block_type( __DIR__ . '/gutenberg/videoresp' );
  register_block_type( __DIR__ . '/gutenberg/imageresp' );
  register_block_type( __DIR__ . '/gutenberg/cta' );
  // register_block_type( __DIR__ . '/gutenberg/ctaquest' );
}
// add_filter( 'rest_url_prefix', function () {
  
//   return 'wp';

// } );


if ( ! function_exists( 'csskiller_setup' ) ){
	
function csskiller_setup() {
  
	
require_once(locate_template('/dev/csskiller.php'));
require_once(locate_template('/dev/clean.php'));
//require_once(locate_template('/dev/theme.php'));
//require_once(locate_template('/dev/multisite.php'));
//require_once(locate_template('/dev/user.php'));
//require_once(locate_template('/dev/mailing.php'));
require_once(locate_template('/dev/pttaxgenerator.php'));

// Importar WPML si el plugin está instalado y activo
if ( is_plugin_active( 'sitepress-multilingual-cms/sitepress.php' ) && function_exists( 'icl_object_id' ) ) {
  require_once(locate_template('/dev/wpml.php'));
}

//BLOCKS
//🧱🧱🧱🧱🧱🧱
require_once(locate_template('/gutenberg/config.php'));
require_once(locate_template('/gutenberg/cleanblocks.php'));

	
//API REST
require_once(locate_template('/requests/restclean.php'));
require_once(locate_template('/requests/restcalls.php'));

	
//ACF
//☎️☎️☎️☎️☎️☎️☎️☎️
require_once(locate_template('/schemas/builderfields.php'));
//SCHEMAS🫀🫀🫀🫀🫀
require_once(locate_template('/schemas/schemas.php'));
}
}
add_action( 'after_setup_theme', 'csskiller_setup' );


//ACF REVISION

// ESTILOS PANEL DE WORDPRESS 
function admin_style() {
  wp_enqueue_style('admin-styles', get_stylesheet_directory_uri() . '/admin.css');
}
add_action('admin_enqueue_scripts', 'admin_style');
?>
