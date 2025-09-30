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

$hist = new stdClass();
$hist->title = 'Historia';
$hist->fields = [
  [
    'label' => 'Título',
    'type'=>'0',
  ],
  [
    'label' => 'Texto',
    'type'=>'2',
    'op'=>'2'
  ],
  [
    'label' => 'Imagen',
    'type'=>'3',
  ],


  [
    'label' => 'Bloque 1 Título',
    'type'=>'b0',
  ],
  [
    'label' => 'Bloque 1 Texto',
    'type'=>'b2',
    'op'=>'2'
  ],

  [
    'label' => 'Bloque 2 Título',
    'type'=>'c0',
  ],
  [
    'label' => 'Bloque 2 Texto',
    'type'=>'c2',
    'op'=>'2'
  ],

  [
    'label' => 'Bloque 3 Título',
    'type'=>'d0',
  ],
  [
    'label' => 'Bloque 3 Lista',
    'type'=>'9',
    'subs'=>[
      [
        'label'=>'Item',
        'type'=>'0',
        'name'=>'title'
      ],
    ],
  ],
];




$quien = new stdClass();
$quien->title = 'Quienes Somos';
$quien->fields = [
  [
    'label' => 'Título',
    'type'=>'0',
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

$parts = [$intro, $hist, $quien];

$control = [];
$control['title'] = 'About';
$control['key'] = 'aboutpage';
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
      'value' => 'page-about.php',
    ],
  ],
];
$return = buildLocation($parts,$control);

});


//CUSTOM INFO QUERY

function getAbout(){
	$fields = [];
	$fields['custom'] = 'templateabout';
	return $fields;
}


?>