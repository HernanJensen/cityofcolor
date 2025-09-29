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
    'label' => 'Text',
    'type'=>'1',
    'op'=>'1'
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
    'subs'=>[
      [
        'label'=>'Logo',
        'type'=>'3',
        'name'=>'img'
      ],
    ]
  ]
  
];


$text = new stdClass();
$text->title = 'Text';
$text->fields = [

  [
    'label' => 'Title',
    'type'=>'0'
  ],
  [
    'label' => 'Text',
    'type'=>'1',
    'op'=>'1'
  ],
  
];


$list = new stdClass();
$list->title = 'List';
$list->fields = [

  [
    'label' => 'Title',
    'type'=>'0'
  ],
  [
    'label' => 'List',
    'type'=>'9',
    'subs'=>[
      [
        'label'=>'Title',
        'type'=>'0',
        'name'=>'title'
      ],
    ]
  ],
  
];


$quote = new stdClass();
$quote->title = 'Quote';
$quote->fields = [

  [
    'label' => 'Name',
    'type'=>'0'
  ],
  [
    'label' => 'Job position',
    'type'=>'b0',
  ],

  [
    'label' => 'Text',
    'type'=>'1',
    'op'=>'1'
  ],
  
  
];


$logos = new stdClass();
$logos->title = 'Logos';
$logos->fields = [

  [
    'label' => 'Title',
    'type'=>'0'
  ],
  [
    'label'=>'Logos',
    'type'=>'9',
    'subs'=>[
      [
        'label'=>'Logo',
        'type'=>'3',
        'name'=>'img'
      ],
    ]
  ]
  
  
];



$cta = new stdClass();
$cta->title = 'CTA';
$cta->fields = [
  [
    'label' => 'Label',
    'type'=>'0'
  ],
  [
    'label' => 'Title',
    'type'=>'b0'
  ],
  [
    'label' => 'Text',
    'type'=>'1',
    'op'=>'1'
  ],
  [
    'label'=>'Images',
    'type'=>'12',  
  ],
  [
    'label' => 'button',
    'type'=>'6'
  ],
  
  
];






$parts = [$intro, $partners, $text, $list, $quote,$logos,  $cta];

$control = [];
$control['title'] = 'Help';
$control['key'] = 'helppage';
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
      'value' => 'page-help.php',
    ],
  ],
];
$return = buildLocation($parts,$control);

});


//CUSTOM INFO QUERY

function getHelp(){
	$fields = [];
	$fields['custom'] = 'templatehelp';
	return $fields;
}


?>