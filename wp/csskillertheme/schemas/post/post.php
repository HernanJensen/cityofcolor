<?php

// FIELDS
add_action('acf/init', function(){

  $global = new stdClass();
  $global->title = 'Global';
  $global->fields = [
    [
      'label'=>'Description',
      'type'=>'1',
      'name'=>'desc_a',
      'op'=>'2',
    ],
    [
      'label'=>'Time to read',
      'type'=>'0',
      'name'=>'time_a',
    ],
    // [
    //   'label'=>'Custom date',
    //   'type'=>'0',
    //   'name'=>'date_a',
    // ],

  ];

  $rel = new stdClass();
  $rel->title = 'Related posts';
  $rel->fields = [
    [
      'label'=>'Related posts',
      'type'=>'7',
      'ops' => ['post_type'=>[0=>'post']]
    ],

  ];

  
  $parts = [$global,$rel];
  

$control = [];
$control['title'] = 'Post';
$control['key'] = 'postcpt';
$control['acfml_field_group_mode'] = 'translation';
//$control['show_in_rest'] = 1;
$control['hide_on_screen'] = [
	0 => 'the_content',
];
$control['location'] = 
[
  [
    [
      'param' => 'post_type',
      'operator' => '==',
      'value' => 'post',
    ],
  ],
];
$return = buildLocation($parts,$control);

});






// POST ARCHIVE FIELDS
function create_post_archives() {
	$name='Post archive';
	$cpt='post';
  if(function_exists('acf_add_options_page')) {
      acf_add_options_sub_page(array(
      'page_title'      => $name,
      
      'parent_slug'     => 'edit.php',
      
      "menu_slug" => $cpt.'_options',
      'capability' => 'manage_options'
      ));
    
  }
}




//CUSTOM INFO QUERY

function getPost($id){
  global $wpdb;
	$fields = [];
	$fields['custom'] = 'templatepost';
  $fields['date'] = get_the_date('M d,Y' ,$id);
  $fields['autor'] = $wpdb->get_var("SELECT display_name FROM $wpdb->users WHERE ID = (SELECT post_author FROM $wpdb->posts WHERE ID = $id)");
  $fields['author-link'] = get_author_posts_url($wpdb->get_var("SELECT post_author FROM $wpdb->posts WHERE ID = $id")); 
  $fields['image'] = cleanImg(get_post_thumbnail_id($id),false,$device);
  $categories = wp_get_post_categories($id);
  
  $cats = [];
  foreach($categories as $c) {
      $cat = get_category($c);
      $cats[] = [
          'name' => $cat->name,
          'slug' => $cat->slug,
          'id' => $cat->term_id,
          'url' => get_category_link($cat->term_id)
      ];
  }
  $fields['cats'] = $cats;

  $tipo = wp_get_post_terms($id, 'tipo');
  $tipoarray = [];
  if($tipo){
    foreach($tipo as $c){
      array_push($tipoarray,[
        'name'=>get_term( $c )->name,
        'id'=>$c->term_id,
        'color'=>get_field('color_a',$c),
        'bgcolor'=>get_field('bgcolor_a',$c),
      ]);
    }
  }
  $fields['tipo'] = $tipoarray;
  // $fields['tags'] = get_the_tags($id);
  
  $excerpt = get_the_excerpt($id);
  $fields['excerpt'] = mb_strimwidth($excerpt, 0, 100, '...');

	return $fields;
}




// CAMBIAR TITULO DE POST

function change_post_menu_label() {
  global $menu;
  global $submenu;
  $menu[5][0] = 'Projects';
  $submenu['edit.php'][5][0] = 'Projects';
  $submenu['edit.php'][10][0] = 'Add Projects';
  echo '';
}
function change_post_object_label() {
      global $wp_post_types;
      $labels = &$wp_post_types['post']->labels;
      $labels->name = 'Projects';
      $labels->singular_name = 'Article';
      $labels->add_new = 'Add Article';
      $labels->add_new_item = 'Add Article';
      $labels->edit_item = 'Edit Article';
      $labels->new_item = 'Article';
      $labels->view_item = 'View Article';
      $labels->search_items = 'Search Projects';
      $labels->not_found = 'No Projects found';
      $labels->not_found_in_trash = 'No Projects found in Trash';
}
// add_action( 'init', 'change_post_object_label' );
// add_action( 'admin_menu', 'change_post_menu_label' );

// QUITAR CATEGORÍAS?
function myprefix_exclude_category($query) {
	if ( ! is_admin() && $query->is_main_query() && $query->is_home() ) {
		$query->set( 'cat', '-xx' );
	}
	return $query;
}
// add_filter( 'pre_get_posts', 'myprefix_exclude_category' );






// TAXONOMIA
add_action('init', 'create_post_taxonomies');


function ACF_taxonomy(){
  $colors = new stdClass();
  $colors->title = 'colors';
  $colors->fields = [
    [
      'label'=>'Color',
      'type'=>'17',
      'name'=>'color_a',
    ],
    [
      'label'=>'Background Color',
      'type'=>'b17',
      'name'=>'bgcolor_a',
    ],
  ];


  $parts = [$colors];


  $control = [];
  $control['title'] = 'Type';
  $control['key'] = 'typetaxonomy';
  $control['acfml_field_group_mode'] = 'translation';
  //$control['show_in_rest'] = 1;
  $control['hide_on_screen'] = [
    0 => 'the_content',
  ];
  $control['location'] = 
  [
    [
      [
        'param' => 'taxonomy',
        'operator' => '==',
        'value' => 'tipo',
      ],
    ],
  ];
  $return = buildLocation($parts,$control);

};

function create_post_taxonomies() {
  // Registrar la taxonomía "type"
  register_taxonomy('tipo', 'post', array(
      'labels' => array(
          'name'              => __('Types'),
          'singular_name'     => __('Type'),
          'search_items'      => __('Search Types'),
          'all_items'         => __('All Types'),
          'parent_item'       => __('Parent Type'),
          'parent_item_colon' => __('Parent Type:'),
          'edit_item'         => __('Edit Type'),
          'update_item'       => __('Update Type'),
          'add_new_item'      => __('Add New Type'),
          'new_item_name'     => __('New Type Name'),
          'menu_name'         => __('Types'),
      ),
      'hierarchical' => true,
      'show_ui' => true,
      'show_admin_column' => true,
      'query_var' => true,
      'rewrite' => array('slug' => 'type'),
      'show_in_rest' => true, 
  ));

  ACF_taxonomy();
};
?>