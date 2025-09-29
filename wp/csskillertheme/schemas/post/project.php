<?php

// FIELDS
add_action('acf/init', function(){
  $intro = new stdClass();
  $intro->title = 'Basic';
  $intro->fields = [
      [
          'label'=> 'Description',
          'type' => '2',
          'op' => '2',
      ],
      [
          'label' => 'Info',
          'type' => '9',
          'postfix'=>'info_a',
          'subs'=>[
            [
              'label' => 'Title',
              'type' => '0',
            ],
            [
              'label' => 'Text',
              'type' => '1',
              'op'=>'1',
            ],
          ]
      ],
  
      
      [
        'label' => 'Images',
        'type'=>'10',
        'layouts'=>[
          [
            'name'=>'b1',
            'label'=>'B1',
            'subs'=>[
              [
                'label' => 'Image/Video',
                'type'=>'15',
                'name'=>'imvid',
              ],
              
            ]
            ],
          [
            'name'=>'b2',
            'label'=>'B2',
            'subs'=>[
              [
                'label' => 'Image/Video',
                'type'=>'15',
                'name'=>'imvid',
              ],
              
            ]
          ],
          [
            'name'=>'b3',
            'label'=>'B3',
            'subs'=>[
              [
                'label' => 'Image/Video',
                'type'=>'15',
                'name'=>'imvid',
              ],
              
            ]
          ],
          [
            'name'=>'b4',
            'label'=>'B4',
            'subs'=>[
              [
                'label' => 'Image/Video',
                'type'=>'15',
                'name'=>'imvid',
              ],
              
            ]
          ],
          [
            'name'=>'b5',
            'label'=>'B5',
            'subs'=>[
              [
                'label' => 'Image/Video',
                'type'=>'15',
                'name'=>'imvid',
              ],
              
            ]
          ],
          [
            'name'=>'b6',
            'label'=>'B6',
            'subs'=>[
              [
                'label' => 'Image/Video',
                'type'=>'15',
                'name'=>'imvid',
              ],
              
            ]
          ],
          ]
  
      ]
  ];
  
  
  $parts = [$intro];
  

  $control = [];
  $control['title'] = 'Project';
  $control['key'] = 'projectcpt';
  $control['acfml_field_group_mode'] = 'translation';
  // $control['show_in_rest'] = 1;
  $control['hide_on_screen'] = [
    0 => 'the_content',
  ];
  $control['location'] = 
  [
    [
      [
        'param' => 'post_type',
        'operator' => '==',
        'value' => 'project',
      ],
    ],
  ];
  $return = buildLocation($parts,$control);

});




// Modificar la palabra page
// add_post_type_support( 'post', 'thumbnail' );
//add_action('init', 'create_programa_archives');
// add_action('init', 'taxjob_init');

$post_type = array (
  'name' => 'Project',
  'menu' => 'Projects',
  'query_var' => 'project',
  'icon' => 'dashicons-portfolio',
  'has_single'  => true,
  'has_archive'  => true,
);
ptgenerator($post_type);
add_action( 'rest_api_init', 'slug_register_projectnewfields' );

function create_projects_archives() {
	$name='Project archive';
	$cpt='project';
  if(function_exists('acf_add_options_page')) {
      acf_add_options_sub_page(array(
      'page_title'      => $name,
      
      'parent_slug'     => 'edit.php',
      
      "menu_slug" => $cpt.'_options',
      'capability' => 'manage_options'
      ));
    
  }
}

function slug_register_projectnewfields() {
	$cpt = 'project';
	register_rest_field( array($cpt),
        'csskfields',
		array(
            'get_callback'    => $cpt.'getdata',
            'update_callback' => null,
            'schema'          => null,
        )
	);
}








function getProject($id) {
  global $wpdb;

  $fields = [];
 
  $fields['custom'] = 'projectTemplate';
  return $fields;
}




?>