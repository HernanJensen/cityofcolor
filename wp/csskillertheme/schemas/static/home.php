<?php

add_action('acf/init', function(){

$intro = new stdClass();
$intro->title = 'Intro';
$intro->fields = [
  [
    'label' => 'Título',
    'type'=>'0',
  ],
  [
    'label' => 'Texto',
    'type'=>'1',
    'op'=>'2'
  ],
  [
    'label' => 'Texto botón',
    'type'=>'b0',
  ],
  [
    'label' => 'Media',
    'type'=>'15',
  ],
  
];


$que = new stdClass();
$que->title = '¿Qué es?';
$que->fields = [
  [
    'label' => 'Título',
    'type'=>'0',
  ],
  [
    'label' => 'Subtítulo',
    'type'=>'b0',
  ],
  [
    'label' => 'Texto',
    'type'=>'2',
    'op'=>'2'
  ],
  [
    'label' => 'Botón',
    'type'=>'6',
  ],
  
];


$inic = new stdClass();
$inic->title = 'Iniciativa';
$inic->fields = [
  [
    'label' => 'Título',
    'type'=>'0',
  ],
  [
    'label' => 'Texto',
    'type'=>'1',
    'op'=>'2'
  ],
  [
    'label' => 'Subtítulo',
    'type'=>'b0',
  ],
  [
    'label' => 'Lista',
    'type'=>'9',
    'subs'=>[
      [
        'label' => 'Texto',
        'type'=>'0',
        'name'=>'text'
      ],
    ]
  ],
  [
    'label' => 'Botón',
    'type'=>'6',
  ],

  [
    'label' => 'Imagen',
    'type'=>'3',
  ],
  
];



$projs = new stdClass();
$projs->title = 'Proyectos';
$projs->fields = [
  [
    'label' => 'Título',
    'type'=>'0',
  ],
  [
    'label' => 'Botón',
    'type'=>'6',
  ],
  [
    'label' => 'Proyectos',
    'type'=>'9',
    'subs'=>[
      [
        'label' => 'Título',
        'type'=>'0',
        'name'=>'title'
      ],
      [
        'label' => 'Localización',
        'type'=>'0',
        'name'=>'loc'
      ],
      [
        'label' => 'Año',
        'type'=>'0',
        'name'=>'year'
      ],
      [
        'label' => 'Título Texto',
        'type'=>'0',
        'name'=>'title2'
      ],
      [
        'label' => 'Texto',
        'type'=>'1',
        'op'=>'2',
        'name'=>'text'
      ],
      [
        'label' => 'Imagen',
        'type'=>'3',
        'name'=>'img'
      ],
    ]
  ],
  
  
];


$parts = [$intro, $que, $inic, $projs];

$control = [];
$control['title'] = 'Home';
$control['key'] = 'homepage';
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
      'value' => 'page-home.php',
    ],
  ],
];
$return = buildLocation($parts,$control);

});


//CUSTOM INFO QUERY

function getHome(){
	$fields = [];
	$fields['custom'] = 'templatehome';
	return $fields;
}


?>