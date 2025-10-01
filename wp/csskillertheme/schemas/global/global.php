<?php

add_action('acf/init', function(){

$intro = new stdClass();
$intro->title = 'Global';
$intro->fields = [
  [
      'label' => 'Email formulario',
      'type' => '0',
      'name' =>'email',
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
      'label' => 'Home',
      'type' => '6',
      'name' =>'homeid',
  ],
  [
      'label' => 'About',
      'type' => '6',
      'name' =>'aboutid',
  ],
  [
    'label' => 'Que hacemos',
    'type' => '6',
    'name' =>'whatid',
  ],
  [
    'label' => 'A quien va dirigido',
    'type' => '6',
    'name' =>'whoid',
  ],
  [
    'label' => 'Colabora',
    'type' => '6',
    'name' =>'colaboraid',
  ],
  [
    'label' => 'Privacidad',
    'type' => '6',
    'name' =>'privacidadid',  
  ],

  
];



$foot = new stdClass();
$foot->title = 'Footer';
$foot->fields = [
  [
      'label' => 'Email',
      'type' => '6',
      'name' =>'email_foot',
  ],

  [
    'label' => 'Copyrights',
    'type' => '0',
    'name' =>'copy_foot',
  ],

  [
    'label' => 'Social',
    'type' => '9',
    'name' =>'rep_foot',
    'subs'=>[
      [
        'label' => 'Link',
        'type'=>'6',
        'name'=>'link',
      ],
    ]
  ],
 
];






$parts = [$intro,$ids, $foot];

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