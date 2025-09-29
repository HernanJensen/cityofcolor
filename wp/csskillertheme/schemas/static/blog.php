<?php

add_action('acf/init', function(){
$intro = new stdClass();
$intro->title = 'Intro';
$intro->fields = [
  [
    'label' => 'Featured post',
    'type'=>'7',
    'ops' => [
      'post_type'=>[0=>'post'],
      'max' => 1,
    ],


  ],


  // [
  //   'label' => 'Featured post',
  //   'type'=>'8',
  //   'ops' => [
  //     'post_type'=>[0=>'post'],
  //     // 'max' => 1,
  //   ],


  // ],

];




$parts = [$intro];

$control = [];
$control['title'] = 'Blog';
$control['key'] = 'blogpage';
$control['acfml_field_group_mode'] = 'translation';
$control['show_in_rest'] = 1;
$control['hide_on_screen'] = [
	0 => 'the_content',
];
$control['location'] = 
[
  [
    [
      'param' => 'page_type',
      'operator' => '==',
      'value' => 'posts_page',
    ],
  ],
];
$return = buildLocation($parts,$control);

});


//CUSTOM INFO QUERY

function getResources(){
	global $wpdb;
  $posts = [];
  // $maxpages = 1;
  $blog_id = get_option('page_for_posts');
  $featuredPost = get_field('rel_0', $blog_id)[0];
  
  $args = [
    'post_type' => 'post',
    'posts_per_page' => 8,
    'orderby' => 'date',
    'post_status' => 'publish',
    'order' => 'DESC',
    'post__not_in' => [$featuredPost],
  ];
  $query= new WP_query( $args );

  if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post();

    $field=cleanObj(get_the_ID(),$device,$webp);

    array_push($posts, $field);
  endwhile; endif;
  if($query->max_num_pages !== 0){
    $maxpages = $query->max_num_pages; 
  }


  
	$fields = [];
	$fields['custom'] = 'templateblog';
  $fields['posts'] = $posts;
  $fields['maxpages'] = $maxpages;
  
  $cats = get_terms("category");
  
  
  foreach($cats as $cat){
    $fields['cats'][] = [
      'name' => $cat->name,
      'id' => $cat->term_id,
      'slug' => $cat->slug,
    ];
  }

  $types = get_terms("tipo");

  foreach($types as $type){
    $fields['types'][] = [
      'name' => $type->name,
      'id' => $type->term_id,
      'slug' => $type->slug,
    ];
  }

	return $fields;
}


?>