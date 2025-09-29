<?php

function cleanBlocks($blocks,$mobile) {
  $ops = ['custom/videoresp','custom/imageresp', 'custom/cta', 'custom/ctaquest'];
  $fields = [];
		foreach($blocks as $key=>$b){
      $data = [];
      $prefix = '';
      if($b['blockName']==''){
        continue;
      }
      if(isset($b['attrs'])){

        if(in_array($b['blockName'],$ops)){
          $prefix = 'custom';
          
          if(isset($b['attrs']['anchor'])){
            $data['id']=$b['attrs']['anchor'];
          }
          if(isset($b['attrs']['data'])){
            
            if($b['blockName']=='custom/videoresp'){
              $data['content']=cleanField($b['attrs']['data'],'vresp',$mobile);

            }
            else if($b['blockName']=='custom/imgresp'){
              $data['content']=cleanField($b['attrs']['data'],'iresp',$mobile);

            }
            
            else{
              $data['content']=cleanFields($b['attrs']['data'],'',$mobile);
            }
              

          }


          $str = substr($b['blockName'], strlen($prefix));
          $str = substr($str, 1);
        }
        
      }
      

      if($b['blockName']=='core/heading'){
        $data['content'] = str_replace('wp-block-heading', '', $b['innerHTML']);
        

        $str = 'tt';
      }
      else if($b['blockName']=='core/paragraph'){
        $data['content'] = $b['innerHTML'];


        $str = 'p';
      }
      else if($b['blockName']=='core/list'){
        $b = serialize_block($b);
        
        $data['content'] = $b;
        $data['content'] = preg_replace('/<!--(.|\s)*?-->/', '',  $data['content']);
        
        $str = 'ul';
      }
      else if($b['blockName']=='core/html'){

        $data['content'] = $b['innerHTML'];
        $str = 'html';

      }
      else if($b['blockName']=='core/shortcode'){

        $data['content'] = '';
        $str = 'html';

      }
      else if($b['blockName']=='core/pullquote'){
        $data['content'] = str_replace('wp-block-pullquote', '', $b['innerHTML']);
        $str = 'quote';

      }
      else if($b['blockName']=='core/table'){

        $data['content'] = str_replace('wp-block-table', '', $b['innerHTML']);
        $data['content'] = str_replace('wp-element-caption', '', $data['content']);
        $str = 'table';

      }
      else if($b['blockName']=='core/separator'){
        $str = 'sep';

      }



      $data['layout']=$str;
      
      array_push($fields,$data);
    }

  return $fields;
}
?>