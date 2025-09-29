<?php

add_action('acf/init', function(){
$intro = new stdClass();
$intro->title = 'Intro';
$intro->fields = [
  
  [
    'label'=>'Title',
    'type'=>'0',
  ],

  [
    'label'=>'Blocks',
    'type'=>'9',
    'subs'=>[
      [
        'label'=>'Title',
        'type'=>'0',
        'name'=>'title'
      ],
      [
        'label'=>'Text',
        'type'=>'2',
        'op'=>'2',
        'name'=>'wysi'
      ],
    ]
  ]
];




$parts = [$intro];

$control = [];
$control['title'] = 'Legal';
$control['key'] = 'legalpage';
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
      'value' => 'page-legal.php',
    ],
  ],
];
$return = buildLocation($parts,$control);

});


//CUSTOM INFO QUERY

function getLegal(){
	$fields = [];
	$fields['custom'] = 'template legal';
	return $fields;
}


?>