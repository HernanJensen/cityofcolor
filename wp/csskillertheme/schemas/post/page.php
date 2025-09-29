<?php
add_action('acf/init', function(){

$intro = new stdClass();
$intro->title = 'intro';
$intro->fields = [
  [
    'label' => 'Menu',
    'type'=>'0',

  ]
];

$parts = [];

$control = [];
$control['title'] = 'Page';
$control['key'] = 'pagecpt';
// $control['acfml_field_group_mode'] = 'translation';
$control['show_in_rest'] = 1;
$control['hide_on_screen'] = [
	0 => 'the_content',
];
$control['location'] = 
[
  [
    [
      'param' => 'post_type',
      'operator' => '==',
      'value' => 'page',
    ],
  ],
];
$return = buildLocation($parts,$control);



});

?>