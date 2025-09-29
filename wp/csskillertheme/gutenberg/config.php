<?php



//BLOCKS
//🧱🧱🧱🧱🧱🧱

require_once(locate_template('/gutenberg/videoresp/fields.php'));
require_once(locate_template('/gutenberg/imageresp/fields.php'));
require_once(locate_template('/gutenberg/imagevideo/fields.php'));
require_once(locate_template('/gutenberg/cta/fields.php'));
// require_once(locate_template('/gutenberg/ctaquest/fields.php'));
// register_block_type( __DIR__ . '/imageresp' );
// register_block_type( __DIR__ . '/videoresp' );


// require_once(locate_template('/csskiller/blocks/imageresp/fields.php'));

  // register_block_type( __DIR__ . '/publicimageresp' );
  

// register_block_type(locate_template('/csskiller/blocks/videoresp/block.json'));
// register_block_type(locate_template('/csskiller/blocks/imageresp/block.json'));



//ELIMINAR GUTENBERG

// add_filter('use_block_editor_for_post_type', '__return_false', 100);


// ADD BLOCKS TO REST API
// add_action(
// 	'rest_api_init',
// 	function () {

// 		if ( ! function_exists( 'use_block_editor_for_post_type' ) ) {
// 			require ABSPATH . 'wp-admin/includes/post.php';
// 		}

// 		// Surface all Gutenberg blocks in the WordPress REST API
// 		$post_types = get_post_types_by_support( [ 'editor' ] );
// 		foreach ( $post_types as $post_type ) {
// 			if ( use_block_editor_for_post_type( $post_type ) ) {
// 				register_rest_field(
// 					$post_type,
// 					'blocks',
// 					[
// 						'get_callback' => function ( array $post ) {
// 							//return parse_blocks( $post['content']['raw'] );
//             },
// 					]
// 				);
// 			}
// 		}
// 	}
// );



//CLEAN BLOCKS
add_filter( 'allowed_block_types_all', 'misha_allowed_block_types', 25, 2 );
function misha_allowed_block_types( $allowed_blocks, $editor_context ) {
	//'core/video''core/image''core/freeform',
    //freeform es el clásico
	return array(
    
    'core/paragraph',
    'core/heading',
    'core/pullquote',
    'core/list',
    'core/list-item',
    'core/html',
    'core/navigation-link',
    // 'core/shortcode',
    // 'core/table',
    'custom/videoresp',
    'custom/imageresp',
    'core/separator',

    'custom/cta',
    // 'custom/ctaquest',
	);
 
}


?>