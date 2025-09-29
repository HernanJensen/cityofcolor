<?php

add_action('acf/init', function(){
$intro = new stdClass();
$intro->title = 'Intro';
$intro->fields = [
  [
    'label' => 'Title',
    'type'=>'a0'
  ],
  
];





$cta = new stdClass();
$cta->title = 'CTA';
$cta->fields = [
  
  [
    'label' => 'Title',
    'type'=>'0'
  ],
  [
    'label'=>'Button',
    'type'=>'6',
  ],

  
];


$parts = [$intro, $cta];

$control = [];
$control['title'] = 'Jobs';
$control['key'] = 'jobspage';
$control['acfml_field_group_mode'] = 'translation';
$control['show_in_rest'] = 1;
$control['hide_on_screen'] = [
	0 => 'the_content',
];
$control['location'] = 
[
  [
    [
      'param' => 'page_template',
      'operator' => '==',
      'value' => 'page-jobs.php',
    ],
  ],
];
$return = buildLocation($parts,$control);



});


//CUSTOM INFO QUERY

function getJobs(){

	$fields = [];
	
  // $specialty = $specialty != null ? $specialty : "";
  // $category = $category != null ? $category : "";
  // $page = $page != null ? $page : "1";

  // $posts = [];
  // // $maxpages = 1;
  // $args = [
  //   'post_type' => 'job',
  //   'posts_per_page' => 4,
  //   'paged' => $page,
  //   'orderby' => 'date',
  //   'order' => 'DESC',
	//   'post_status'=>'publish',
  //   // 'meta_query' => [
  //   //     [
  //   //       'key' => 'status',
  //   //       'value' => 'Open',
  //   //       'compare' => '='
  //   //     ],
  //   //   ]
  // ];


  // $tax_query = [];

  // if ($specialty !== "") {
  //   $specialty = explode(",", $specialty);
  //   $tax_query[] = [
  //     'taxonomy' => 'specialty',
  //     'field' => 'slug', 
  //     'terms' => $specialty,
  //     'operator' => 'IN',
      
  //   ];
  // }

  // if ($category !== "") {
  //   $category = explode(",", $category);
  //   $tax_query[] = [
  //     'taxonomy' => 'job-category',
  //     'field' => 'slug', 
  //     'terms' => $category,
  //     'operator' => 'IN',
      
  //   ];
  // }

  // if (!empty($tax_query)) {
  //   $args['tax_query'] = $tax_query;
  // }

  // $query= new WP_query( $args );

  // if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post();

  //   $field=cleanObj(get_the_ID(),$device,$webp);

  //   // $terms = get_the_terms(get_the_ID(), ['job-category', 'specialty']);

    
  //   // Ordenar los términos para que "job-category" siempre esté primero
  //   usort($terms, function($a, $b) {
  //     $order = ['job-category', 'specialty'];
  //     $posA = array_search($a->taxonomy, $order);
  //     $posB = array_search($b->taxonomy, $order);
  //     return $posA - $posB;
  //   });

  //   $field['tags'] = $terms;

    
    
  //   // Obtener el contenido del post
  //   $postcontent = get_the_content();
  //   // Comprobar si el contenido contiene una etiqueta <script> y eliminar su contenido
  //   $postcontent = preg_replace('/<script\b[^>]*>(.*?)<\/script>/is', '', $postcontent);
  //   // Eliminar todo el contenido a partir de la primera etiqueta </p>
  //   $postcontent = explode('</p>', $postcontent)[0];
  //   // Eliminar todo el contenido a partir de la primera etiqueta <br>
  //   $postcontent = explode('<br>', $postcontent)[0];
  //   // Sustituir todas las etiquetas de cierre por un espacio en blanco
  //   $postcontent = preg_replace('/<\/[^>]+>/', ' ', $postcontent);
  //   // Eliminar todas las etiquetas HTML
  //   $postcontent = wp_strip_all_tags($postcontent);
  //   // Limitar a 150 caracteres
  //   $field['content'] = strlen($postcontent) > 150 ? substr($postcontent, 0, 150).'...' : $postcontent; 

    

  //   array_push($posts, $field);
  // endwhile; endif;
  
  // if($query->max_num_pages !== 0){
  //   $maxpages = $query->max_num_pages; 
  // }
  // $totalPosts = $query->found_posts !== 0 ? $query->found_posts : 0; 

  

  
  
  
  $fields['custom'] = 'templatejobs';
  // $fields['posts'] = $posts;
  // $fields['maxpages'] = $maxpages;
	return $fields;
}


?>