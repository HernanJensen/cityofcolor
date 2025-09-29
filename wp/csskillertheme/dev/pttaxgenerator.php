<?php

function ptgenerator($item){

//BASE ITEM
//$item = [
//'name' => 'Project',
//'menu' => 'Projects',
//'query_var' => 'project',
//'icon' => 'dashicons-admin-tools',
//'has_single'  => true,
//'has_archive'  => false
//];

  $args = array(
      'labels' => array(
          'name' => __($item['menu'], $item['name']),
          'add_new' => __('Add '.$item['name']),
          'new_item' => __('New '.$item['name']),
          'add_new_item' => __('Add new '.$item['name']),
          'edit_item' => __('Edit '.$item['name']),
          'view_item' => __('See '.$item['name'].' in website'),
          'search_items' => __('Search '.$item['name']),
          'not_found' => __($item['name'].' not found'),
          'not_found_in_trash' => __($item['name'].' not found in the trash')
      ),
      'singular_label' => __($item['query_var']),
      'public' => true,
      'show_ui' => true,
      'capability_type' => 'page',
      'hierarchical' => false,
      'rewrite' => true,
      'publicly_queryable'  => $item['has_single'],
      'has_archive' => $item['has_archive'],
      'query_var' => $item['query_var'],
      'menu_icon' => $item['icon'],
      'show_in_rest' => true,
      'supports' => array(
          'title',
          'thumbnail',
          'editor'
      )
  );
  register_post_type($item['query_var'], $args);
}


function taxgenerator($name,$cpts,$labels){
//LABELSBASE
//$labels = [
//'name' => _x('Location', 'Locations'),
//'singular_name' => _x('Location', 'Location'),
//'search_items' => __('Search Location'),
//'all_items' => __('All Locations'),
//'parent_item' => __('Parent Genre'),
//'parent_item_colon' => __(''),
//'edit_item' => __('Edit Location'),
//'update_item' => __('Refresh Location'),
//'add_new_item' => __('Add Location'),
//'new_item_name' => __('New Location'),
//'menu_name' => __('Locations')
//
//];
register_taxonomy($name, $cpts,
	[

       'hierarchical' => true,
       'labels' => $labels,
       'has_archive' => false,
       'show_in_rest' => false,
       'show_ui' => true,
       'query_var' => true,
       'rewrite' => [
          'slug' => $name

       ]
   ]
);

   flush_rewrite_rules(false);
}