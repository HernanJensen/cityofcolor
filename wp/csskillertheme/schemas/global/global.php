<?php

add_action('acf/init', function(){

$intro = new stdClass();
$intro->title = 'Global';
$intro->fields = [
  [
      'label' => 'Email',
      'type' => '6',
      'name' =>'email',
  ],
  [
    'label' => 'Instagram',
    'type' => '6',
    'name' =>'instagram',
  ],
  [
    'label' => 'Mensaje alerta orientación móvil',
    'type' => '0',
    'name' =>'orientationmessage',
  ],

  [
      'label' => 'Poster',
      'type' => '3',
      'name' =>'imgposter'
  ],
  [
      'label' => 'GTAG ID',
      'type' => '0',
      'name' =>'gtag',
  ],
  [
    'label' => 'Redirects 301',
    'type'=>'9',
    'name'=>'redirects',
    'subs'=>[
      [
        'label' => 'Origin',
        'type'=>'0',
        'name'=>'from',
      ],
      [
        'label' => 'Destiny',
        'type'=>'0',
        'name'=>'to',
      ],
    ]
  ],
];


$ids = new stdClass();
$ids->title = 'IDs';
$ids->fields = [
  [
      'label' => 'Projects',
      'type' => '6',
      'name' =>'projects',
  ],
  [
      'label' => 'About',
      'type' => '6',
      'name' =>'about',
  ],
  [
      'label' => 'Legal',
      'type' => '6',
      'name' =>'legal',
  ],

  
];






$parts = [$intro,$ids];

$control = [];
$control['title'] = 'Options';
$control['key'] = 'csskillerops';
$control['acfml_field_group_mode'] = 'translation';
//$control['show_in_rest'] = 1;
//$control['hide_on_screen'] = [
//	0 => 'the_content',
//];
$control['location'] = 
[
  [
    [
      'param' => 'options_page',
      'operator' => '==',
		'value' => 'acf-options-options',
    ],
  ],
];
$return = buildLocation($parts,$control);



});

?>