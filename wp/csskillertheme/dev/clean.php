<?php



//CLEANING WP_HEAD

remove_action( 'wp_head',      'rest_output_link_wp_head'              );
remove_action( 'template_redirect', 'rest_output_link_header', 11 );
remove_action( 'wp_head',      'wp_oembed_add_discovery_links'         );


remove_action( 'wp_head',             '_wp_render_title_tag',            1     );

remove_action( 'wp_head',             'wp_print_styles',            1     );

remove_action( 'wp_head',             'rsd_link'                               );
remove_action( 'wp_head',             'feed_links_extra',                3     );
remove_action( 'wp_head',             'wp_enqueue_scripts',              1     );

remove_action( 'wp_head',             'wlwmanifest_link'                       );

remove_action( 'wp_head',             'adjacent_posts_rel_link_wp_head', 10, 0 );
remove_action( 'wp_head',             'locale_stylesheet'                      );

remove_action( 'wp_head','print_emoji_detection_script',7);
remove_action( 'wp_head', 'wp_print_styles', 8 );
remove_action( 'wp_head','wp_print_head_scripts',9);
remove_action( 'wp_head','wp_generator');
remove_action( 'wp_head','rel_canonical');


remove_action( 'wp_head', 'wp_shortlink_wp_head',10, 0 );

function contract_remove_links( $data, $post, $context ) {

    $data->remove_link( 'collection' );
    $data->remove_link( 'self' );
    $data->remove_link( 'about' );
    $data->remove_link( 'author' );
    $data->remove_link( 'replies' );
    $data->remove_link( 'version-history' );
    $data->remove_link( 'https://api.w.org/featuredmedia' );
    $data->remove_link( 'https://api.w.org/attachment' );
    $data->remove_link( 'https://api.w.org/term' );
    $data->remove_link( 'curies' );
	$data->remove_link( 'predecessor-version' );
    return $data;
}

add_filter( 'rest_prepare_post', 'contract_remove_links', 10, 3 );

add_filter( 'oembed_response_data', 'disable_embeds_filter_oembed_response_data_' );
function disable_embeds_filter_oembed_response_data_( $data ) {
    unset($data['author_url']);
    unset($data['author_name']);
    return $data;
}


//NO COMMENTS

add_action( 'admin_init', 'my_remove_admin_menus' );
function my_remove_admin_menus() {
    remove_menu_page( 'edit-comments.php' );
}

add_action('admin_menu', 'remove_comment_support');

function remove_comment_support() {
    remove_post_type_support( 'post', 'comments' );
    remove_post_type_support( 'page', 'comments' );
}
add_filter( 'jpeg_quality', function() {
	return 100;
}, 10, 2 );


function remove_admin_login_header() {
    remove_action('wp_head', '_admin_bar_bump_cb');
}
//add_action('get_header', 'remove_admin_login_header');
add_filter( 'show_admin_bar', '__return_false' );

//add_theme_support( 'admin-bar', array( 'callback' => '__return_false' ) );


//NO PLUGIN FOR YOU!
function my_custom_css() {
  echo '<style>
  
    body {

    }
  </style>';

$user = wp_get_current_user();

    if($user && isset($user->user_login) && 'css_killer' != $user->user_login) {
       
	  echo '<style>

		body {
			
		}
		
		.plugins-php .page-title-action{
			display:none;
		}
		#menu-plugins .wp-submenu li:nth-child(3),#menu-plugins .wp-submenu li:nth-child(4){
		display:none;
		}
		.plugins-php .plugin-title .deactivate{
			display:none;
		}
		.plugin-editor-php #wpbody{
		display:none;
		}
		.plugin-install-tab-featured{
		display:none;
		}
	  </style>';
    }

}

add_action('admin_head', 'my_custom_css');
?>
