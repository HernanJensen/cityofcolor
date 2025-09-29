<?php

add_action('acf/init', function(){
$intro = new stdClass();
$intro->title = 'Intro';
$intro->fields = [
  [
    'label' => 'Title',
    'type'=>'0'
  ],

  [
    'label' => 'FAQs',
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
        'name'=>'wysi',
        'op'=>'2'
      ],
    ]
  ]
 
];






$parts = [$intro];

$control = [];
$control['title'] = 'Faqs';
$control['key'] = 'faqspage';
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
      'value' => 'page-faqs.php',
    ],
  ],
];
$return = buildLocation($parts,$control);

});


//CUSTOM INFO QUERY

function getFaqs(){
	$fields = [];
	$fields['custom'] = 'templatefaqs';
	return $fields;
}


?>