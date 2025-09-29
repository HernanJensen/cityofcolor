<?php

function cleanFields($fields,$mobile=0) {
	
	if(is_array($fields)){
		foreach($fields as $key=>$f){
				$f=cleanField($f,$key,$mobile);
				$fields[$key]=$f;
			}
	}
	return $fields;
}


function cleanField($f,$key,$mobile) {
	$field='';
	if(substr($key, 0, 3) === 'img'){
		$field=cleanImg($f,$key,$mobile);
	}
	else if(substr($key, 0, 5) === 'iresp'){
		$field=cleanIResp($f,$key,$mobile);

	}
	else if(substr($key, 0, 5) === 'vresp'){
		$field=cleanVResp($f,$key,$mobile);

	}
	else if(substr($key, 0, 5) === 'imvid'){
		$field=cleanImVid($f,$key,$mobile);

	}
	else if(substr($key, 0, 4) === 'file'){
		$field=cleanFile($f,$key,$mobile);
	}
	else if(substr($key, 0, 3) === 'obj'){
		if(!is_int($f)){
			return false;
		}
		$field=cleanObj($f,$mobile);
	}
	else if(substr($key, 0, 3) === 'rel'){
			$field=cleanRel($f,$mobile);
	}
	else if(substr($key, 0, 3) === 'rep'){
		
			$field=cleanRep($f,$mobile);
	}
	else if(substr($key, 0, 4) === 'flex'){
		
			$field=cleanFlex($f,$mobile);
	}
	else if(substr($key, 0, 3) === 'gal'){
			$field=cleanGal($f,$mobile);
		
	}
	else if(substr($key, 0, 3) === 'tax'){
			$field=cleanTaxs($f,$mobile);
		
	}
	else{
			$field = $f;
	}
	return $field;
}

function cleanTaxs($fields,$mobile){
	$newfields=[];
	if(is_array($fields)){
		foreach($fields as $key=>$sub){
			
			
			$rep=cleanTax($sub,$key,$mobile);
			array_push($newfields,$rep);
		}
	}
	return $newfields;
}
function cleanTax($c,$mobile){
	
    $field = ['id'=>$c,'link'=>get_term_link($c),'name'=>get_term( $c )->name,'acf'=>get_fields('category_'.$c)];
  	return $field;
}

function cleanGal($fields,$mobile){
	$newfields=[];
	if(is_array($fields)){
		foreach($fields as $key=>$sub){
			$total = wp_get_attachment_url($sub);
			$file_parts = pathinfo($total);
			if($file_parts['extension'] == 'mp4' || $file_parts['extension']=='mov'){
				
				$rep=cleanVResp(['filevideo'=>$sub,'vposter'=>null],null,0,1);
				
			}
			else{
				$rep=cleanImg($sub,$key,$mobile);
				
				
			}
			array_push($newfields,$rep);
		}
	}
	return $newfields;
}

function cleanRep($fields,$mobile){
	$newfields=[];
	if(is_array($fields)){
		foreach($fields as $sub){
			
			$rep=[];
			foreach($sub as $key=>$f){
			$rep[$key]=cleanField($f,$key,$mobile);
			}
			array_push($newfields,$rep);
		}
	}
	else{
		$newfields=$fields;
	}
	return $newfields;
}

function cleanFlex($fields,$mobile){
	$newfields=[];
	if(is_array($fields)){
		foreach($fields as $sub){
			
			$rep=[];
			foreach($sub as $key=>$f){
			$rep[$key]=cleanField($f,$key,$mobile);
			}
			array_push($newfields,$rep);
		}
	}
	else{
		$newfields=$fields;
	}
	return $newfields;
}

function cleanImg($f,$key,$mobile=0){
	$field = [];
	$img ='';
	$alt='';
	$poster = 0;
	if(!is_int($f)){
		$f = get_field('imgposter','options');
		$poster = 1;
		
	}
	$svg = false;
	$total = wp_get_attachment_image_src($f,'full',false);
	$totals = wp_get_attachment_image_src($f,'mobile',false);
	$totald = wp_get_attachment_image_src($f,'desktop',false);
	$file_parts = pathinfo($total[0]);
	
	
  $totals = $totals;
  $totald = $totald;
  $total = $total;
	// if(1==0){
	// 	$arr = ['total'=>$total,'d'=>$totald,'l'=>$totall,'m'=>$totalm,'s'=>$totals];
	// 	print_r($arr);
	// 	}
  if($file_parts['extension'] == 'jpeg' || $file_parts['extension']=='jpg' || $file_parts['extension']=='png'){
    $total[0].='.webp';
    $totald[0].='.webp';
    $totals[0].='.webp';
  }
	else if($file_parts['extension'] == 'svg'){
			$svg=file_get_contents($total[0]);
	}
	$field=[
		'svg'=>$svg,
		'url'=>$total[0],
		'alt'=> get_post_meta($f, '_wp_attachment_image_alt', TRUE),
		'w' => $total[1],
		'h' => $total[2],
    'sm'=>[
        'url'=>$totals[0],
        'w' => $totals[1],
        'h' => $totals[2],
        'type'=>'img'
    ],
		// 'imgs'=> $totals[0],
		// 'ws' => $totals[1],
		// 'hs' => $totals[2],
		// 'imgd'=> $totald[0],
		// 'wd' => $totald[1],
		// 'hd' => $totald[2],
		'poster'=>$poster,
    'type'=>'img'
	];
	
	if($field['alt']==''){
		$field['alt'] = get_bloginfo('description');
	}
  $field['sm']['alt'] = $field['alt'];

	return $field;
}
function cleanIResp($f,$key,$mobile=0){
	
	$field = [];
  $field = cleanImg($f['imgresp'],$key,$mobile);
	$fieldx = cleanImg($f['imgresp'],$key,$mobile);
	if($f['imgrespx']){
		$fieldx = cleanImg($f['imgrespx'],$key,$mobile);
    $field['sm']=$fieldx['sm'];
    unset($fieldx['sm']);

	}
  return $field;
	
}
function cleanVResp($f,$key,$mobile=0){
	$field = [
    'url'=>'',
    'w'=>0,
    'w'=>0,
    'type'=>'vid',
    'alt'=>'',

    'sm'=>[

      'url'=>'',
      'w'=>0,
      'w'=>0,
      'type'=>'vid',
      'alt'=>''
    ]

  ];


  if(!is_int($f['filevideo'])){
    $field['url']=false;

    if(!$f['urlvideo']){
      $field['url']=$f['urlvideo'];

    }
    
  }
  else{

    $field['url']=wp_get_attachment_url($f['filevideo']);
    $file_path = get_attached_file(  $f['filevideo'] );
    $meta = wp_read_video_metadata( $file_path );

    $field['w'] = $meta['width'] ?? -1;
    $field['h'] = $meta['height'] ?? -1;
    $field['sm']['meta'] = $meta;
  }

  if(!is_int($f['filevideox'])){
    
    if($f['urlvideox']){
      $field['sm']['url']=$f['urlvideox'];

    }
  }
  else{
    
    $field['sm']['url']=wp_get_attachment_url($f['filevideox']);
    
  }

  if(!$field['sm']['url']){
    $field['sm']= $field;
  }

    $file_path = get_attached_file(  $field['sm']['url'] );
    $metasm = wp_read_video_metadata( $file_path );
    $field['sm']['w'] =$metasm['width'] ?? -1;
    $field['sm']['w'] =$metasm['height'] ?? -1;
    $field['sm']['meta'] =$metasm;


	$field['poster'] = cleanImg($f['vposter'],$key,$mobile);
	return $field;
}
function cleanImVid($f,$key,$mobile=0){
	
	
	$field = [
    'url'=>'',
    'w'=>0,
    'w'=>0,
    'type'=>'vid',
    'alt'=>'',
    // 'poster' => cleanImg($f['vposter'],$key,$mobile),
    'sm'=>[

      'url'=>'',
      'w'=>0,
      'w'=>0,
      'type'=>'vid',
      'alt'=>''
    ]

  ];

  $poster = cleanImg($f['vposter'],$key,$mobile);
  $posterx = cleanImg($f['vposterx'],$key,$mobile);
  // Metemos como poster la img LG en formato 1024
  // $field['poster'] = $poster['sm'];

  if(!is_int($f['filevideo'])  && $f['urlvideo'] != ''){
    $field['url']=false;

    if($f['urlvideo']){
      $field['url']=$f['urlvideo'];
      $field['w'] = -1;
      $field['h'] = -1;
      $field['type'] = 'vid';
      $field['poster'] = $poster['sm'];
    }
    
  }
  else if(is_int($f['filevideo'])){

    $field['url']=wp_get_attachment_url($f['filevideo']);
    $file_path = get_attached_file(  $f['filevideo'] );
    $meta = wp_read_video_metadata( $file_path );

    $field['w'] = $meta['width'] ?? -1;
    $field['h'] = $meta['height'] ?? -1;
    $field['type'] = 'vid';
    $field['poster'] = $poster['sm'];
  }
  else{
    $field = $poster;
    // Si no hay ni video, ni URL, se mete el poster como principal
  }

  if(!is_int($f['filevideox']) && $f['urlvideox'] != ''){
    
      $field['sm']['url']=$f['urlvideox'];
      $field['sm']['w'] = -1;
      $field['sm']['h'] = -1;
      $field['sm']['type'] = 'vid';

  }
  else if(is_int($f['filevideox'])){

    $field['sm']['url']=wp_get_attachment_url($f['filevideox']);

    $file_path = get_attached_file(  $field['sm']['url'] );
    $metasm = wp_read_video_metadata( $file_path );

    $field['sm']['w'] =$metasm['width'] ?? -1;
    $field['sm']['h'] =$metasm['height'] ?? -1;
    $field['sm']['type'] = 'vid';

  }
  else{
    if($posterx['poster']!=1){
      $field['sm'] = $posterx['sm'];
    }
    else{
      if($field['type']=='vid'){
        $rep = $field;
        unset($rep['sm']);
        $field['sm']=$rep;
      }
      else if($poster){
        $field['sm'] = $poster['sm'];
        
      }
      
    }
    
    // $field['sm'] = $poster;
  }



  // if(!$field['sm']['url']){
  //   $field['sm']= $field;
  // }

    

	
	

	return $field;
}
function cleanFile($f,$mobile){
	$field = [];
  $field['w'] = 0;
  $field['h'] = 0;

  $file_parts = pathinfo($total[0]);
  if($file_parts['extension'] == 'webm' || $file_parts['extension']=='mp4'){
    $field['url']= wp_get_attachment_url($f);

    $file_path = get_attached_file($field['url']);
    $meta = wp_read_video_metadata( $file_path );
    $field['w'] = $meta['width'];
    $field['h'] = $meta['height'];
  }
  else if($file_parts['extension'] == 'svg'){
    $field['url']= wp_get_attachment_url($f);
    $field['content']=file_get_contents($field['url']);
  }

  return $field;

}
function cleanObj($f,$mobile){
	//print_r($key);
	//print_r('soy');
	
	
	
	$fields = get_fields($f);
	$field = [];
	$field['title'] = get_the_title($f);
	$field['id'] = $f;
	$field['url'] = get_permalink($f);
	$field['date'] = get_the_date('M j, Y',$f);
	$im = get_post_thumbnail_id($f);
	if($im == false){
		$im='nu';
	}
	
	$field['image'] = cleanImg($im,false,$mobile);
		
	//$field['acf']=$fields;
	$newfields=[];
	if(is_array($fields)){
		foreach($fields as $key=>$fsub){
			if(str_ends_with($key,'_a')){
				$newfields[$key]=cleanField($fsub,$key,$mobile);
			}
		}
	}
	if(get_post_type($f)=='post'){
    // GET THE CATEGORIES
    $cats = wp_get_post_categories($f);
    $catsarray = [];
    if($cats){
      foreach($cats as $c){
        array_push($catsarray,['link'=>get_term_link($c),'name'=>get_term( $c )->name,'acf'=>get_fields('category_'.$c),'id'=>get_term( $c )->term_id]);

      }
    }
		$field['categories'] = $catsarray;

		// GET THE EXCERPT
		$excerpt = get_the_excerpt($f);
		$field['excerpt'] = mb_strimwidth($excerpt, 0, 80, '...');

    // GET THE TIPOS
    $tipo = wp_get_post_terms($f, 'tipo');
    $tipoarray = [];
    if($tipo){
      foreach($tipo as $c){
        array_push($tipoarray,[
          'name'=>get_term( $c )->name,
          'id'=>$c->term_id,
          'color'=>get_field('color_a',$c),
          'bgcolor'=>get_field('bgcolor_a',$c),
        ]);
      }
    }
    $field['tipo'] = $tipoarray;

		
	}
	if(get_post_type($f)=='case'){
		$terms = wp_get_post_terms($f, 'casetax');
		$termsarray = [];
		if($terms){
			foreach($terms as $c){
				array_push($termsarray,['name'=>get_term( $c )->name]);

			}
		}
		$field['type'] = $termsarray;
		$excerpt = get_the_excerpt($f);
  		$field['excerpt'] = mb_strimwidth($excerpt, 0, 160, '...');
	}

	$field['acf']=$newfields;
	return $field;
}

function cleanRel($fields,$mobile){
	//print_r($key);
	//print_r('soy');
	$new = [];
	if(is_array($fields)){
		foreach($fields as $f){
			//print_r($f);
			array_push($new,cleanObj($f,$mobile));
		}
	}
	return $new;
}

?>