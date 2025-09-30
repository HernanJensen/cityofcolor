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

$text = new stdClass();
$text->title = 'Texto';
$text->fields = [
  [
    'label' => 'Texto',
    'type'=>'1',
    'op'=>'2',  
  ],
  
 
];



$benef = new stdClass();
$benef->title = 'Dirigido a';
$benef->fields = [
  [
    'label' => 'Título',
    'type'=>'0',
  ],
  
  [
    'label' => 'Lista',
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

  [
    'label' => 'Botón',
    'type'=>'6',
  ],
];





$parts = [$intro, $text, $benef];

$control = [];
$control['title'] = 'Quien';
$control['key'] = 'quienpage';
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
      'value' => 'page-quien.php',
    ],
  ],
];
$return = buildLocation($parts,$control);

});


//CUSTOM INFO QUERY

function getQuien(){
	$fields = [];
	$fields['custom'] = 'templatequien';
	return $fields;
}


?>