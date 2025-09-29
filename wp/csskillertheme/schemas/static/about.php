<?php

add_action('acf/init', function(){

$intro = new stdClass();
$intro->title = 'Intro';
$intro->fields = [
  [
    'label' => 'Title',
    'type'=>'0',
  ],
];


$parts = [$intro];

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