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
    'label' => 'Media',
    'type'=>'15',
  ],
];

$pilares = new stdClass();
$pilares->title = 'Pilares';
$pilares->fields = [
  [
    'label' => 'Título',
    'type'=>'0',
  ],
  
  [
    'label' => 'Pilares',
    'type'=>'9',
    'ops'=>[
      'min'=>3,
      'max'=>3
    ],
    'subs'=>[
      [
        'label'=>'Título',
        'type'=>'0',
        'name'=>'title'
      ],
      [
        'label'=>'Texto',
        'type'=>'1',
        'op'=>'2',
        'name'=>'text'
      ],
    ],
  ],
];


$cols = new stdClass();
$cols->title = 'Como unirte';
$cols->fields = [
  [
    'label' => 'Título',
    'type'=>'0',
  ],
  [
    'label' => 'Texto',
    'type'=>'1',
  ],
  [
    'label' => 'Imagen',
    'type'=>'3',
  ],
  
  [
    'label' => 'Lista',
    'type'=>'9',
    'subs'=>[
      [
        'label'=>'Título',
        'type'=>'0',
        'name'=>'title'
      ],
      [
        'label'=>'Texto',
        'type'=>'1',
        'op'=>'2',
        'name'=>'text'
      ],
    ],
  ],
];


$benef = new stdClass();
$benef->title = 'Beneficios';
$benef->fields = [
  [
    'label' => 'Título',
    'type'=>'0',
  ],
  
  [
    'label' => 'Beneficios',
    'type'=>'9',
    'subs'=>[
      [
        'label'=>'Texto',
        'type'=>'2',
        'op'=>'2',
        'name'=>'wysi'
      ],
    ],
  ],
];



$area = new stdClass();
$area->title = 'Áreas de actuación';
$area->fields = [
  [
    'label' => 'Título',
    'type'=>'0',
  ],
  [
    'label' => 'Lista',
    'type'=>'9',
    'subs'=>[
      [
        'label'=>'Título',
        'type'=>'0',
        'name'=>'title'
      ],
      [
        'label'=>'Texto',
        'type'=>'1',
        'op'=>'2',
        'name'=>'text'
      ],
    ],
  ],
  [
    'label' => 'Botón',
    'type'=>'6',
  ],
];


$parts = [$intro, $pilares, $cols, $benef, $area];

$control = [];
$control['title'] = 'Que hacemos';
$control['key'] = 'quepage';
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
      'value' => 'page-que.php',
    ],
  ],
];
$return = buildLocation($parts,$control);

});


//CUSTOM INFO QUERY

function getQue(){
	$fields = [];
	$fields['custom'] = 'templateabout';
	return $fields;
}


?>