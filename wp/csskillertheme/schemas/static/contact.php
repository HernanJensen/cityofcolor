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
    'label' => 'Subtitle',
    'type'=>'b0'
  ],
  [
    'label' => 'Text',
    'type'=>'1',
    'op'=>'1'
  ],
  [
    'label' => 'List',
    'type'=>'9',
    'subs'=>[
      [
        'label'=>'title',
        'type'=>'0',
        'name'=>'title'
      ],
    ]
  ]
 
];


$cta = new stdClass();
$cta->title = 'CTA';
$cta->fields = [
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
  ]
 
];


$contact = new stdClass();
$contact->title = 'Contact';
$contact->fields = [
  [
    'label' => 'Title',
    'type'=>'0'
  ],
  [
    'label' => 'List',
    'type'=>'9',
    'subs'=>[
      [
        'label'=>'Type',
        'type'=>'16',
        'name'=>'type',
        'ops'=>[
          'choices' => [
            'email' => 'Email',
            'phone' => 'Phone',
            'address' => 'Address',
          ],
        ]
      ],
      [
        'label'=>'Link',
        'type'=>'6',
        'name'=>'link'
      ],
    ]
  ],
];



$parts = [$intro, $cta, $contact];

$control = [];
$control['title'] = 'Contact';
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