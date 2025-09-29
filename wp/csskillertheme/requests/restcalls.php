<?php
// print_r('asdasd');
// require  get_template_directory().'/requests/rankmath.php';
require get_template_directory() . '/vendor/autoload.php';


// INICIAL PARA EL HEAD.PHP
add_action( 'rest_api_init', function () {
  // RUTA INICIAL PARA EL SEO AL EMPEZAR
  register_rest_route( 'csskiller/v1', '/init/', array(
    'methods' => ['POST','GET'],
      // 'methods' => 'POST',
      'callback' => 'get_init',
      //'permission_callback' => function () {
      //  return current_user_can( 'administrator' );
      //}
  ) );
  // INICIAL PARA EL LOADVIEW
  register_rest_route( 'csskiller/v1', '/getskin/', array(
    'methods' => ['POST','GET'],
    // 'methods' => 'POST',
    'callback' => 'getSkin',
    //'permission_callback' => function () {
    //  return current_user_can( 'administrator' );
    //}
) );
  // RUTA PARA CARGAR VISTA
  register_rest_route( 'csskiller/v1', '/sendform/', array(
    'methods' => ['POST','GET'],
    // 'methods' => 'POST',
    'callback' => 'get_sendform',
    //'permission_callback' => function () {
    //  return current_user_can( 'administrator' );
    //}
  ) );

  // RUTA PARA CARGAR POSTS
  register_rest_route( 'csskiller/v1', '/getposts/', array(
    'methods' => ['POST','GET'],
    // 'methods' => 'POST',
    'callback' => 'getPosts',
    //'permission_callback' => function () {
    //  return current_user_can( 'administrator' );
    //}
  ) );
} );


  // RUTA INICIAL PARA EL SEO AL EMPEZAR
function get_init( $data ) {
  $opfields=get_fields('options');
	if($opfields){
		$opfields = cleanFields($opfields,-1,1);
	}

  $url = $_POST['url'];

  $id = $url == '/' ? get_option( 'page_on_front' ) : get_page_by_path($url);
  $id = isset($id->ID) ? $id->ID : $id;
  
  $opfields['id'] = isset($id) ? $id : false;
  
  $rank = new rankCustom;
  $opfields['rank'] = $rank->get_html_head(get_permalink($id));

  return $opfields;

}


// INICIAL PARA EL LOADVIEW
function getSkin( $data ) {
  // Sanitizar y preparar variables de entrada
  $device  = isset($data['device']) ? intval($data['device']) : -1;
  $url     = isset($data['url']) ? esc_url_raw($data['url']) : '/';
  $pageid  = isset($data['pageid']) ? intval($data['pageid']) : false;
  $preview = isset($data['preview']) ? boolval($data['preview']) : false;
	
	// Obtener campos de opciones y limpiar si es necesario
  $opfields = get_fields('options');
  if ($opfields) {
      $opfields = cleanFields($opfields, $device);
  }
  $opfields['base']       = get_site_url();
  $opfields['actualyear'] = date("Y");
  $opfields['ops']        = $data;

  // Idioma actual (WPML o valor por defecto)
  $current_language = apply_filters('wpml_current_language', 'es');
  $opfields['lang'] = $current_language;

  // ID de la página de inicio en el idioma actual
  $front_page_id  = apply_filters('wpml_object_id', get_option('page_on_front'), 'page', false, $current_language);
  $front_page_url = get_permalink($front_page_id);

  // Determinar el ID de la página/post solicitado
  $id = ($url == '/' || $url == $front_page_url) 
      ? $front_page_id 
      : (strpos($url, 'blog') !== false 
          ? get_option('page_for_posts') 
          : url_to_postid($url));



  
  // Si el objeto es un WP_Post, obtener el ID
  $id = (is_object($id) && isset($id->ID)) ? $id->ID : $id;

  // Si se pasa pageid, tiene prioridad
  if ($pageid) {
    $id = $pageid;
  }

  
  // Si el ID sigue siendo 0 y es preview, buscar post privado
  if ($id == 0 && $preview) {
    $args = [
        'name'           => basename($url),
        'post_type'      => ['page', 'post', 'job'],
        'post_status'    => ['publish', 'private', 'draft'],
        'posts_per_page' => 1,
    ];
    $private_posts = get_posts($args);
    if (!empty($private_posts)) {
        $id = $private_posts[0]->ID;
    }
  }

  $opfields['id'] = $id;

  // Preparar respuesta base
  $cleanfields = [];
  
  if ($id) {
    // Info nativa y campos ACF
    $nativefields = get_post($id);
    $postfields   = get_fields($id);
    $cleanfields  = cleanFields($postfields, $device);

    // Añadir info adicional
    $cleanfields['ops']        = $opfields;
    $cleanfields['post_title'] = $nativefields->post_title;
    $blocks                    = parse_blocks($nativefields->post_content);
    $cleanfields['blocks']     = cleanBlocks($blocks, $device);
    $cleanfields['permalink']  = get_permalink($id);

    // Determinar skin/template
    $idskin = $pageid ? $pageid : $id;
    $skin   = get_page_template_slug($idskin);
    $skin   = get_post_type($idskin) == 'page'
        ? ($skin != '' ? $skin : 'page')
        : get_post_type($idskin);
    $skin   = str_replace(['page-', '.php'], '', $skin);
    $skin   = get_option('page_for_posts') == $idskin ? 'resources' : $skin;

    // Ejecutar función custom si existe para el skin
    $function_name = 'get' . ucfirst($skin);
    if (function_exists($function_name)) {
      $addonfields = $function_name($id);
      $addonfields = cleanFields($addonfields, $device);
      $cleanfields['addons'] = $addonfields;
    }
  } else {
    // Si no hay ID válido, devolver error
    $cleanfields['ops']  = $opfields;
    $skin                = 'error';
    $cleanfields['data'] = $id;
  }

// Respuesta final
  return [
    'skin'   => $skin,
    'ops'    => $opfields,
    'fields' => $cleanfields,
    'id'     => $id,
  ];
}


function get_sendform( $data ) {
  $asunto = get_bloginfo('name').' Contact Form';
  $fields = '';

  $form = $_POST['form'] ? $_POST['form'] : $form;
  $files = !empty($_FILES['files']) ? $_FILES['files'] : [];

  $tempData = str_replace("\\","",$form);
  $cleanData = json_decode($tempData);


  $email = '';
  $destinatario = get_field('email','options') ?? 'hs51ck00@gmail.com';
  foreach($cleanData as $i){
    $fields.='<h2>'.$i->label.'</h2><p>'.$i->value.'</p><br /><br />';

    if($i->label == "email"){
      $email = $i->value;
    }
  }

  $cuerpo = '

        <html>
        <head>
          <title>'.$asunto.'</title>
        </head>
        <body>
      '.$fields.'


        </body>
        </html>
    ';

  //para el envío en formato HTML
  $headers = "MIME-Version: 1.0\r\n";
  //$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
  $headers .= "Content-type: text/html; charset=UTF-8\r\n";


  //dirección del remitente
  $headers .= "From: ".$email."\r\n";


  //ruta del mensaje desde origen a destino
  $headers .= "Return-path: ".$email."\r\n";

  $mail_sent = wp_mail($destinatario, $asunto, $cuerpo, $headers);

  // Crear la respuesta basada en el resultado del envío del email
  if ($mail_sent) {
    $response = new WP_REST_Response(['status' => 'success', 'message' => 'Email enviado exitosamente'], 200);
  } else {
    $response = new WP_REST_Response(['status' => 'error', 'message' => 'Error al enviar el email'], 500);
  }

  return $response;
}



function getPosts( $data ) {
  $ops = json_decode($data->get_body(), true);

  $opfields=get_fields('options');
  $device = isset($ops['device']) ? $ops['device'] : -1;
  // $posts = [];

  $page = isset($ops['page']) ? intval($ops['page']) : 1;
  $cats = isset($ops['cats']) ? $ops['cats'] : '';
  $search = isset($ops['search']) ? $ops['search'] : '';
  $perpage = isset($ops['perpage']) ? intval($ops['perpage']) : 12;
  $type = isset($ops['type']) ? $ops['type'] : 'post';
  $date_filter = isset($ops['date']) ? $ops['date'] : "all";

  // $types = isset($ops['types']) ? $ops['types'] : '';



  $posts = [];
  $maxpages = 1;

  // Esto creo que podemos limpiarlo algo más.
  $args = [
    'post_type' => $type,
    'posts_per_page' => $perpage,
    'orderby' => 'date',
    'paged' => $page,
    'post_status' => 'publish',
    'category_name' => $cats,
    'order' => 'DESC',
    's' => $search,
    'relation' => 'AND',
  ];

  //TAXs, esto estaría bien hacerlo en modo función
  // if($types != ""){
  //   $types = explode(",",$types);
  //   foreach($types as $type){
  //     $args['tax_query'][] = [
  //       'taxonomy' => 'tipo',
  //       'field' => 'slug',
  //       'terms' => $type,
  //     ];
  //   }
  // }

  $date_query = [];
  if($date_filter !== 'all'){

    if ($date_filter === 'today'){
      $date_query = [
        'after' => 'today',
        'inclusive' => true,
      ];
    }else{
      $date_query = [
        'after' => date('Y-m-d', strtotime($date_filter)),
        'inclusive' => true,
      ];
    }
  }

  if (!empty($date_query)) {
    $args['date_query'] = [$date_query];
  }

  


  $query= new WP_query( $args );

  if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post();

    $field=cleanObj(get_the_ID(),$device);
    array_push($posts, $field);
  endwhile; endif;
  
  if($query->max_num_pages !== 0){
    $maxpages = $query->max_num_pages; 
  }
 

	$fields = [];
  $fields['posts'] = $posts;
  $fields['maxpages'] = $maxpages;

  $skin = 'get'.$type; 
  
  $renderposts = './pug/'.$skin.'.pug';
  $renderposts = Phug::renderFile(
    $renderposts, 
    $fields
  );



  $renderpages = './pug/'.$skin.'pages.pug';
  $renderpages = Phug::renderFile(
    $renderpages, 
    $fields
  );

  // Renderizar paginación ( que exista el archivo, aunque sea vacío)

  // $return->html = Phug::renderFile($template,$cleanfields);
  // return new WP_REST_Response($return, 200);
  return [
    'fields'=> $fields,
    'maxpages'=>$maxpages,
    'ops'=>$opfields,
    // 'device'=>$device,
    // 'page'=>$page,
    // 'categories'=>$categories,
    // 'date'=>$date,
    // 'type'=>$type,
    'posts'=>htmlspecialchars($renderposts),
    'pages'=>htmlspecialchars($renderpages),
    'total_posts' => $query->found_posts,
  ];
}

?>
