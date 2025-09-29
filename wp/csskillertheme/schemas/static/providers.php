<?php

add_action('acf/init', function(){
$intro = new stdClass();
$intro->title = 'Intro';
$intro->fields = [
  [
    'label' => 'Label',
    'type'=>'a0'
  ],
  [
    'label' => 'Title',
    'type'=>'b0'
  ],

  [
    'label' => 'Image',
    'type'=>'3'
  ],

];


$conect = new stdClass();
$conect->title = 'Conect';
$conect->fields = [
  [
    'label' => 'Title',
    'type'=>'0'
  ],
  [
    'label' => 'Text',
    'type'=>'1',
    'op'=>'1'
  ],
  [
    'label'=>'Conect',
    'type'=>'9',
    'ops'=>[
      'min'=>3,
      'max'=>3,
    ],
    'subs'=>[
      [
        'label'=>'Title',
        'type'=>'0',
        'name'=>'title'
      ],
      [
        'label'=>'Text',
        'type'=>'1',
        'name'=>'text',
        'op'=>'1'
      ],
      [
        'label'=>'Button',
        'type'=>'6',
        'name'=>'link'
      ],
    ]
  ],

];




$partners = new stdClass();
$partners->title = 'Partners';
$partners->fields = [
  [
    'label' => 'Title',
    'type'=>'0'
  ],
  [
    'label'=>'Partners',
    'type'=>'9',
    'ops'=>[
      'min'=>3,
      'max'=>3,
    ],
    'subs'=>[
      [
        'label'=>'Title',
        'type'=>'0',
        'name'=>'title'
      ],
      [
        'label'=>'Text',
        'type'=>'1',
        'name'=>'text',
        'op'=>'1'
      ],
     
    ]
  ],

];


$test = new stdClass();
$test->title = 'Testimony';
$test->fields = [
  [
    'label' => 'Name',
    'type'=>'a0'
  ],
  [
    'label' => 'Position',
    'type'=>'b0'
  ],
  [
    'label' => 'Text',
    'type'=>'1',
    'op'=>'1'
  ],
  [
    'label' => 'Image',
    'type'=>'3',
  ],
];


$rel = new stdClass();
$rel->title = 'Resources';
$rel->fields = [
  [
    'label' => 'Title',
    'type'=>'0'
  ],
  [
    'label' => 'Text',
    'type'=>'1',
    'op'=>'1'
  ],
  [
    'label' => 'Button',
    'type'=>'6',
  ],
  [
    'label' => 'Resources',
    'type'=>'7',
    'ops' => [
      'post_type'=>[0=>'post'],
      'max'=>3
    ]
  ],
];




$parts = [$intro, $conect, $partners, $test, $rel];

$control = [];
$control['title'] = 'Providers';
$control['key'] = 'providerspage';
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
      'value' => 'page-providers.php',
    ],
  ],
];
$return = buildLocation($parts,$control);

});


//CUSTOM INFO QUERY

function getProviders(){
	$fields = [];
	$fields['custom'] = 'templateproviders';
	return $fields;
}


?>