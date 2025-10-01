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



$forms = new stdClass();
$forms->title = 'Colabora';
$forms->fields = [
  [
    'label' => 'Título',
    'type'=>'0',
  ],
  
  [
    'label' => 'Bloques',
    'type'=>'9',
    'ops'=>[
      'min'=>3,
      'max'=>3
    ],
    'subs'=>[
      [
        'label' => 'Título',
        'type'=>'0',
        'name'=>'title'
      ],
      [
        'label'=>'Texto',
        'type'=>'1',
        'op'=>'2',
        'name'=>'wysi'
      ],
      [
        'label' => 'Texto botón',
        'type'=>'0',
        'name'=>'button'
      ],
    ],
  ],
];





$parts = [$intro, $forms];

$control = [];
$control['title'] = 'Contacto';
$control['key'] = 'contactpage';
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
      'value' => 'page-contact.php',
    ],
  ],
];
$return = buildLocation($parts,$control);

});


//CUSTOM INFO QUERY

function getContact(){
	$fields = [];
	$fields['custom'] = 'templatecontact';
	return $fields;
}


?>