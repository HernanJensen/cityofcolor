<?php

add_action('acf/init', function(){

$intro = new stdClass();
$intro->title = 'Intro';
$intro->fields = [
  [
    'label' => 'Title',
    'type'=>'0',
  ],
  [
    'label' => 'Text',
    'type'=>'1',
    'op'=>'2'
  ],

  [
    'label' => 'Media',
    'type'=>'15',
  ],
  [
    'label' => 'Media 2',
    'type'=>'b15',
  ],
  [
    'label' => 'Media 3',
    'type'=>'c15',
  ],
  [
    'label' => 'Media Use vid-img 4',
    'type'=>'d15',
  ],
  [
    'label' => 'Media Use img-vid 4',
    'type'=>'e15',
  ],
  [
    'label' => 'Media Use img  4',
    'type'=>'f15',
  ],
  [
    'label' => 'Image',
    'type'=>'3',
  ],
  [
    'label' => 'Image resp',
    'type'=>'4',
  ],
 
];


$parts = [$intro];

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