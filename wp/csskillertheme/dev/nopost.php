<?php
add_action( 'admin_menu', 'remove_default_post_typemenu' );

function remove_default_post_typemenu() {
    remove_menu_page( 'edit.php' );
}

add_action( 'admin_bar_menu', 'remove_default_post_type_menu_bar', 999 );

function remove_default_post_type_menu_bar( $wp_admin_bar ) {
    $wp_admin_bar->remove_node( 'new-post' );
}

function remove_add_new_post_href_in_admin_bar() {
  ?>
  <script type="text/javascript">
      function remove_add_new_post_href_in_admin_bar() {
          var add_new = document.getElementById('wp-admin-bar-new-content');
          if(!add_new) return;
          var add_new_a = add_new.getElementsByTagName('a')[0];
          if(add_new_a) add_new_a.setAttribute('href','#!');
      }
      remove_add_new_post_href_in_admin_bar();
  </script>
  <?php
}
add_action( 'admin_footer', 'remove_add_new_post_href_in_admin_bar' );


function remove_frontend_post_href(){
  if( is_user_logged_in() ) {
      add_action( 'wp_footer', 'remove_add_new_post_href_in_admin_bar' );
  }
}
add_action( 'init', 'remove_frontend_post_href' );

function remove_default_post_type($args, $postType) {
  if ($postType === 'post') {
      $args['public']                = false;
      $args['show_ui']               = false;
      $args['show_in_menu']          = false;
      $args['show_in_admin_bar']     = false;
      $args['show_in_nav_menus']     = false;
      $args['can_export']            = false;
      $args['has_archive']           = false;
      $args['exclude_from_search']   = true;
      $args['publicly_queryable']    = false;
      $args['show_in_rest']          = false;
  }

  return $args;
}
add_filter('register_post_type_args', 'remove_default_post_type', 0, 2);
?>