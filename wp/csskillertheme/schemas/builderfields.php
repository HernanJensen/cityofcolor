<?php

function createField($names,$dataset,$field,$pos,$posfield,$control){
  $search = $field['type'];
  $prefix = '';
  $postfix='';
  $new = [];
  if(ctype_alpha($field['type'][0])){
    $prefix = $field['type'][0];
    $search = substr($field['type'], 1);
  }
  //El super es para copiar pegar y a tomar por culo
  if(array_key_exists('super',$field)){
    $new=$field['super'];
  }
  else{
    if(array_key_exists('op',$field)){
      if($dataset[$search]['ops'])
      $new = $dataset[$search]['ops'][$field['op']];
    }
    else{
      $new = $dataset[$search]['ops'][0];

    }
  }


  if(array_key_exists('label',$field)){
    $new['label'] = $field['label'];
  }
  else{

  }


  if(array_key_exists('ops',$field)){
  
    foreach($field['ops'] as $key=>$op){
      
        $new[$key]=$op;
      
    }
  }


  if(array_key_exists('postfix',$field)){
    $postfix=$field['postfix'];
  }

  $new['name'] = $names[$search].$prefix.'_'.$pos.$postfix;
  $new['key'] = 'field_'.$control['key'].$field['type'].$pos.$posfield.$prefix.$postfix;

  if($search==9){
    $arrsubs = [];
    foreach($field['subs'] as $skey=>$sub){
      $ssearch = $sub['type'];
      $sprefix = '';
      $spostfix = '';
      if(ctype_alpha($sub['type'][0])){
        $sprefix = $sub['type'][0];
        $ssearch = substr($sub['type'], 1);
      }
	  if(array_key_exists('postfix',$sub)){
			
        $spostfix = $sub['postfix'];
	  }
      $ssnew = createField($names,$dataset,$sub,$pos,$posfield,$control);
      $ssnew['parent_repeater'] = $new['key'];
      $ssnew['name'] = $names[$ssearch].$sprefix.$spostfix;
	  if($sub['name']){
		 $ssnew['name'] = $sub['name'];
	  }
      $ssnew['key'] = 'subfield'.$control['key'].$sub['type'].$prefix.$pos.$posfield.$sprefix.$spostfix.$skey;
      array_push($arrsubs,$ssnew);

    }
    $new['sub_fields'] = $arrsubs;
  }
  else if($search==10){
    $layouts = [];
    foreach($field['layouts'] as $lkey=>$lay){
      $layout['key'] = 'layout'.$control['key'].$new['type'].$pos.$posfield.$prefix.$lkey;
      $layout['name'] = $lay['name'];
      $layout['label'] = $lay['label'];
      $arrsubs = [];
      foreach($lay['subs'] as $skey=>$sub){
        $ssearch = $sub['type'];
        $sprefix = '';
        $spostfix = '';
        if(ctype_alpha($sub['type'][0])){
          $sprefix = $sub['type'][0];
          $ssearch = substr($sub['type'], 1);
        }
		if(array_key_exists('postfix',$sub)){
			
        	$spostfix = $sub['postfix'];
		}
        $ssnew = createField($names,$dataset,$sub,$pos,$posfield,$control);
        $ssnew['parent_repeater'] = $new['key'];
        $ssnew['name'] = $names[$ssearch].$sprefix.$spostfix;
		  if($sub['name']){
			 $ssnew['name'] = $sub['name'];
		  }
        $ssnew['key'] = 'subfield'.$control['key'].$sub['type'].$pos.$posfield.$prefix.$lkey.$sprefix.$spostfix.$skey;
        array_push($arrsubs,$ssnew);

      }
      $layout['sub_fields'] = $arrsubs;
      $layouts[$layout['key']]=$layout;
    }
    $new['layouts']=$layouts;
  }
	
	
	
//No usar en imágenes, reps, flex, objs, rels, o clones, o si se usan, usar el prefijo bien
    if(array_key_exists('name',$field)){
		if(array_key_exists('postfix',$field)){
     		$new['name'] = $field['name'].$field['postfix'];
		}
		else{
     		$new['name'] = $field['name'];
			
		}

  	}
	$new['wpml_cf_preferences'] = 0;
  return $new;
}

function buildLocation($parts,$control){
	$fields = [];
	//echo '<pre>';
	//print_r($control);
	//echo '</pre>';
  $names = ['title','text','wysi','img','iresp','file','link','rel','obj','rep','flex','check','gal','taxs','vresp','imvid','select', 'color_picker' ,'custom'];
	$dataset = [
    //TEXT
		[
			'ops'=>[['type'=>'text']]
    ],
    //TEXTAREA
		[
			'ops'=>[
				['type'=>'textarea','new_lines' => ''],
				['type'=>'textarea','new_lines' => 'br'],
				['type'=>'textarea','new_lines' => 'wpautop']
			]
    ],
    //wysiwyg
		[
			'ops'=>[
				[
					'type'=>'wysiwyg',
					'tabs' => 'all',
					'toolbar' => 'no_titles',
					'media_upload' => 0,
					'delay' => 0,
				],
				[
					'type'=>'wysiwyg',
					'tabs' => 'all',
					'toolbar' => 'full',
					'media_upload' => 0,
					'delay' => 0,
				],
				[
					'type'=>'wysiwyg',
					'tabs' => 'all',
					'toolbar' => 'basic',
					'media_upload' => 0,
					'delay' => 0,
				],
      ]
    ],
    //IMAGE
		[
			'ops'=>[['type'=>'image','return_format' => 'ID']]
    ],
    //IRESP ( IMG RESP )
		[
			'ops'=>[['type'=>'clone','display' => 'group','layout' => 'row','prefix_label' => 0,'prefix_name' => 1,'clone' => [0 => 'group_imgresp']]],
    ],
    //FILE
		[
			'ops'=>[['type'=>'file','return_format' => 'ID']]
    ],
    //LINK
		[
			'ops'=>[['type'=>'link','return_format' => 'array']]
    ],
    //RELATIONSHIP
		[
			'ops'=>[
        [
          'type'=>'relationship',
          'filters' => [
            'search',
            'post_type',
            'taxonomy',
          ],
		'return_format' => 'ID',
        ]
      ]
    ],
    //POST OBJ
		[
			'ops'=>[
        [
          'type'=>'post_object',
          'filters' => [
            'search',
            'post_type',
            'taxonomy',
          ],
			  'return_format' => 'ID',
        ]
      ]
    ],
    //REPEATER
    [
			'ops'=>[
        [
				  'type' => 'repeater',
          'layout'=>'row',
          'button_label' => 'Add Row',
          'sub_fields' =>array(),
        ]
      ]
    ],
    //FLEXIBLE
    [
			'ops'=>[
        [
				  'type' => 'flexible_content',
          'button_label' => 'Add Row',
          'layouts' =>[],
        ]
      ]
    ],
	//CHECK
	[
			'ops'=>[['type'=>'true_false']]
    ],
	//GALLERY
	[
			'ops'=>[['type'=>'gallery','return_format' => 'id']]
    ],
	//TAXS
	[
			'ops'=>[['type'=>'taxonomy','field_type' => 'checkbox','return_format' => 'id']]
    ],
    //VRESP ( VIDEO RESP )
		[
			'ops'=>[['type'=>'clone','display' => 'group','layout' => 'row','prefix_label' => 0,'prefix_name' => 1,'clone' => [0 => 'group_videoresp']]],
    ],
		//IMAGE/VIDEO
		[
			'ops'=>[['type'=>'clone','display' => 'group','layout' => 'row','prefix_label' => 0,'prefix_name' => 1,'clone' => [0 => 'group_imagevideo']]],
    ],
    //SELECT
		[
			'ops'=>[
        [
          'type'=>'select',
          'return_format' => 'array',
          'multiple' => 0,
          'allow_null' => 0,
          'default_value' => '0',
          'placeholder' => 'SVG',
          'choices' => [], 
        ]
      ],
    ],

    //COLOR 
		[
			'ops'=>[[

				'aria-label' => '',
				'type' => 'color_picker',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => '',
				'enable_opacity' => 0,
				'return_format' => 'string',  
			]]
		],
	];

	if($parts){
		
		foreach($parts as $pos=>$part){
	
				$f = [
					'key' => 'field_'.$control['key'].$pos.'tab',
					'label' => ($pos+1).' '.$part->title,
					'name' => '',
					'aria-label' => '',
					'type' => 'tab',
					'required' => 0,
					'conditional_logic' => 0,
					'placement' => 'left',
					'endpoint' => 0,
        ];
				array_push($fields,$f);



			foreach($part->fields as $key=>$field){
				

        $new = createField($names,$dataset,$field,$pos,$key,$control);



			array_push($fields,$new);


			}
		}
	}
	$control['fields']=$fields;

	acf_add_local_field_group($control);
	return $fields;
}

?>