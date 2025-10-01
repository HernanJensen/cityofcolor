<?php
	
//MAIN🐙🐙🐙🐙🐙
//AÑADIR EL NAV EN EL CONFIG ( QUE HAY QUE AÑADIR EL PRIMER OPTIONS, Y YO CREO QUE EL FOOTER LO VAMOS A AÑADIR EN CADA VISTA)
require_once(locate_template('/schemas/global/config.php'));
require_once(locate_template('/schemas/global/global.php'));
//VIEWS👁️👁️👁️👁️
//CPTs
require_once(locate_template('/schemas/post/post.php'));
require_once(locate_template('/schemas/post/page.php'));
// require_once(locate_template('/schemas/post/project.php'));


//STATICs
//⚪
require_once(locate_template('/schemas/static/home.php'));
require_once(locate_template('/schemas/static/about.php'));
require_once(locate_template('/schemas/static/que.php'));
require_once(locate_template('/schemas/static/quien.php'));
require_once(locate_template('/schemas/static/contact.php'));
require_once(locate_template('/schemas/static/blog.php'));
require_once(locate_template('/schemas/static/legal.php'));


//CLEAN GUTENBERG
function ea_disable_editor( $id = false) {

	
	$excluded_templates = array(
		'page-home.php',
		'page-about.php',
		'page-que.php',
		'page-quien.php',
		'page-contact.php',
		'page-legal.php',
		'templates/contact.php'
		
	);

	$excluded_ids = array(
		// get_option( 'page_on_front' )
		get_option( 'page_for_posts' )
	);

	if( empty( $id ) )
		return false;

	$id = intval( $id );
	$template = get_page_template_slug( $id );

	return in_array( $id, $excluded_ids ) || in_array( $template, $excluded_templates );
}


function ea_disable_gutenberg( $can_edit, $post_type ) {
	if ($post_type === 'project') return false;

	
	if( ! ( is_admin() && !empty( $_GET['post'] ) ) )
		return $can_edit;

	if( ea_disable_editor( $_GET['post'] ) )
		$can_edit = false;

	return $can_edit;

}

add_filter( 'gutenberg_can_edit_post_type', 'ea_disable_gutenberg', 10, 2 );
add_filter( 'use_block_editor_for_post_type', 'ea_disable_gutenberg', 10, 2 );



// NO BORRES PÁGINAS ( vistas estáticas, home, legal, etc, que quieras o no puedan joder la página )
function wpse_312694_restrict_page_deletion( $caps, $cap, $user_id, $args ) {
  
  $post_id = isset($args[0]) ?  $args[0] : false;
  if($post_id == false) return $caps;
  
  if ( $cap === 'delete_post' && in_array($post_id,[2]) ) {
      $caps[] = 'do_not_allow';
  }
  
  return $caps;
  }
  add_filter( 'map_meta_cap', 'wpse_312694_restrict_page_deletion', 10, 4 );

?>