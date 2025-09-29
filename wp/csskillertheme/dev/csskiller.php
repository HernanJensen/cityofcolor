<?php


//SVG
function my_custom_mime_types( $mimes ) {
	// New allowed mime types.
	$mimes['svg'] = 'image/svg+xml';
	$mimes['svgz'] = 'image/svg+xml';
	$mimes['json'] = 'application/json';
	// Optional. Remove a mime type.
	//unset( $mimes[‘exe’] );
return $mimes;
}
add_filter( 'upload_mimes', 'my_custom_mime_types' );
define( 'ALLOW_UNFILTERED_UPLOADS', true );
//add_theme_support( 'post-thumbnails' );

// --------  CUSTOM FOOTER LOGO --------

function dashboard_footer() { ?>

<?php }

add_filter('admin_footer_text', 'dashboard_footer');


// --------  CUSTOM WORDPRESS LOGIN --------

function my_custom_login_logo() {

    $color = '#000';

    ?>

    <style type="text/css">
		body.login div#login h1 a {
 			//background-image: url(<?php echo get_template_directory_uri(); ?>/mb.png);
			background-image: url(<?php echo get_template_directory_uri(); ?>/csskiller.png);
		}
		.login .button.wp-hide-pw .dashicons{
			
    		filter: contrast(0);
		}
        h1 a {
            background-size: contain !important;
            width: 80px !important;
            height: 80px !important;
        }
        .login #backtoblog a:hover, .login #nav a:hover, .login h1 a:hover {
            color: <?php echo $color; ?> !important;
        }
        .login form {
            box-shadow: none !important;
            border: 1px solid #ddd !important;
        }
        .login form input {
            box-shadow: none !important;
        }
        .wp-core-ui .button-primary {
            background: <?php echo $color; ?> !important;
            border-color: <?php echo $color; ?> !important;
            border-radius: 0px !important;
            box-shadow: none !important;
            text-shadow: none !important;
        }
        input:focus {
            border-color: <?php echo $color; ?> !important;
            box-shadow: none !important;
        }
        input[type=checkbox] {
            border-color: #ddd !important;
        }
        input[type=checkbox]:checked:before {
            color: <?php echo $color; ?> !important;
        }
    </style>

<?php }

add_action('login_head', 'my_custom_login_logo');



// --------  REMOVE ADMIN BAR LOGO --------

function annointed_admin_bar_remove() {

    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('wp-logo');

}

add_action('wp_before_admin_bar_render', 'annointed_admin_bar_remove', 0);


// --------  REMOVE UPDATES NOTIFICATIONS FOR NOT ADMINS --------

//function remove_core_updates() {
//
//    if ( current_user_can( 'update_core' ) ) {
//        return;
//    }
//
//    add_action( 'init', create_function( '$a', "remove_action( 'init', 'wp_version_check' );" ), 2 );
//    add_filter( 'pre_option_update_core', '__return_null' );
//    add_filter( 'pre_site_transient_update_core', '__return_null' );
//
//}
//
//add_action( 'after_setup_theme', 'remove_core_updates' );


// --------  ADD FEATURES IMAGES --------
add_filter( 'intermediate_image_sizes', 'remove_default_img_sizes', 10, 1);

function remove_default_img_sizes( $sizes ) {
  $targets = ['thumbnail', 'medium', 'medium_large', 'large', '1536x1536', '2048x2048'];

  foreach($sizes as $size_index=>$size) {
    if(in_array($size, $targets)) {
      unset($sizes[$size_index]);
    }
  }

  return $sizes;
}
if ( function_exists( 'add_theme_support' ) ) {
    //set_post_thumbnail_size( 2560, 2560, false );
    //add_image_size( 'full', 2560, 2560, false );
    //add_theme_support( 'full' );
    add_image_size( 'mobile', 1024,0, false );
    add_image_size( 'desktop', 1920,0, false );
	add_theme_support('post-thumbnails');
	
    //add_image_size( 'post-thumbnails', 150, 150, true );
    //add_image_size( 'post-middle', 600 );
}
// Add custom sizes to WordPress Media Library
function drollic_choose_sizes( $sizes ) {
    return array_merge( $sizes, array(
        'mobile' => __('Mobile'),
        'desktop' => __('Desktop'),
    ) );
}
add_filter( 'image_size_names_choose', 'drollic_choose_sizes' );
// 
// --------  DELETE ADMIN BAR FRONT-END  --------

function remove_admin_bar() {
    show_admin_bar(false);
}

//add_action('after_setup_theme', 'remove_admin_bar');


// --------  LOGOUT REDIRECT HOME  --------

function projectivemotion_logout_home($logouturl, $redir) {

    $redir = get_option('siteurl');
    return $logouturl . '&amp;redirect_to=' . urlencode($redir);

}

//add_filter('logout_url', 'projectivemotion_logout_home', 10, 2);


// --------  CUSTOMS EXCERPT --------

function custom_excerpt($new_length = 20, $new_more = '...') {

  add_filter('excerpt_length', function () use ($new_length) {
    return $new_length;
  }, 999);

  add_filter('excerpt_more', function () use ($new_more) {
    return $new_more;
  });

  $output = get_the_excerpt();
  $output = apply_filters('wptexturize', $output);
  $output = apply_filters('convert_chars', $output);
  $output = str_replace('&nbsp;', '', $output); // quitamos los espacios en blanco generados por wordpress
  $output = '<p>' . $output . '</p>'; // insertamos el excerpt en un parrafo

  echo $output;

}

// --------  CACHE FILES  --------

function asset_cache($file) {
  return get_template_directory_uri() . $file . '?v=' . filemtime( get_template_directory() . $file );
}



?>
