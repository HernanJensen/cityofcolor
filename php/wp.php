<?php

//$prjfolder = 'era';
// $URI ='http://localhost:4444/era/wp';
// $base = 'http://localhost:4444/era/wp';
$prjfolder = 'doom-wp';

$color = '#FFF';
$isWP = 1;





//GETVIEWS
function getSkin($view, $ops){
  $html = [
    'nav'=>'',
    'loader'=>'',
    'skin'=>'',
  ];

  
  $base = str_contains($ops->base,'192.168')  ? 'http://localhost:4444/'.$ops->prjfolder : $ops->base;
  $base = 'https://doom-wp.csskiller.es';
  $url = $base.'/wp-json/csskiller/v1/getskin';
  $data = [
    'url'         =>$view,
    'device'      => $ops->device,
    'preview'     => isset($ops->preview) ? true : false,
    'previewid'   => isset($ops->previewid) ? $ops->previewid : false,
    'pageid'   => isset($ops->pageid) ? $ops->pageid : false,
    'previewnonce'=> isset($ops->previewnonce) ? $ops->previewnonce : false,
  ];

  


  $options = [
      'http' => [
          'header' => "Content-type: application/x-www-form-urlencoded",
          'method' => 'POST',
          'content' => http_build_query($data),
      ],
  ];

  $ctx = stream_context_create($options);
  $fp = @fopen($url, 'rb', false, $ctx);
  if (!$fp)
  {
    $error = error_get_last();
    throw new Exception("Problem with $url: " . $error['message']);
  }


  foreach ($http_response_header as $header) {
    if (preg_match('#HTTP/\d+\.\d+ (\d+)#', $header, $matches)) {
        $http_code = intval($matches[1]);
        break;
    }
  }

  if ($http_code !== 200) {
      throw new Exception("HTTP request failed with code $http_code");
  }

  $response = @stream_get_contents($fp);
  if ($response === false) 
  {
    $error = error_get_last();
      throw new Exception("Problem reading data from $sUrl, $php_errormsg");
  }

  $html = json_decode($response,true);
  
  // $html['skin'] = 'error';

  $html['fields']['vid_css'] = [
            'alt'=>  'Test resp media',
            'type'=> 'vid',
            'url'=> '/video2.mp4',
            'w'=> 3840,
            'h'=> 2160,
            'sm'=> [
              'alt'=>  'Test resp media',
              'type'=> 'vid',
              'url'=> '/video1.mp4',
              'w'=>  1280,
              'h'=> 720,
            ]
          ];
          $html['fields']['im_css'] = [
            'alt'=>  'Test resp media',
            'type'=> 'img',
                'url'=> '/MUR.webp',
            'w'=> 2700,
            'h'=> 1800,
            'sm'=> [
              'alt'=>  'Test resp media',
              'type'=> 'img',
              'url'=> '/ses.png',
              'w'=>  429,
              'h'=> 447,
            ]
          ];
          $html['fields']['imvid_css'] = [
            'alt'=>  'Test resp media',
            'type'=> 'img',
                'url'=> '/MUR.webp',
            'w'=> 2700,
            'h'=> 1800,
            'sm'=> [
              'alt'=>  'Test resp media',
              'type'=> 'vid',
              'url'=> '/video1.mp4',
              'w'=>  1280,
              'h'=> 720,
            ]
          ];
          $html['fields']['vidim_css'] = [
            'alt'=>  'Test resp media',
            'type'=> 'vid',
            'url'=> '/video2.mp4',
            'w'=> 3840,
            'h'=> 2160,
            'sm'=> [
              'alt'=> 'Test resp media',
              'type'=> 'vid',
              'url'=> '/video1.mp4',
              'w'=>  1280,
              'h'=> 720,
            ]
          ];
          $html['fields']['vidclickposter_css'] = [
            'alt'=>  'Test resp media',
            'type'=> 'vid',
            'url'=> 'https://player.vimeo.com/progressive_redirect/download/882954112/rendition/1080p/reel_mubien_2023%20(1080p).mp4?loc=external&signature=7a3cf42a3caed1a818b3bb8b938e63af1a019a259fd88c0558a057556d6af056',
            'w'=> 3840,
            'h'=> 2160,
            'sm'=> [
              'alt'=> 'Test resp media',
              'type'=> 'vid',
              'url'=> '/video1.mp4',
              'w'=>  1280,
              'h'=> 720,
            ],
            'poster' =>[

              'alt'=>  'Test resp media',
              'type'=> 'img',
              'url'=> '/MUR.webp',
              'w'=> 3840,
              'h'=> 2160,
              'sm'=> [
                'alt'=>  'Test resp media',
                'type'=> 'vid',
                'url'=> '/video1.mp4',
                'w'=>  1280,
                'h'=> 720,
              ]
            ]
          ];


  $renderskin = '../pug/'.$html['skin'].'.pug';
  $renderskin = Phug::renderFile(
    $renderskin, 
    $html['fields']
  );
  $html['skin'] = htmlspecialchars($renderskin);
  
  // $html['skin']=$view;
  if($ops->first == 1){

    $html['nav']['ops'] = $html['ops'];
    $rendernav = '../pug/basic/nav.pug';
    $rendernav = Phug::renderFile(
      $rendernav, 
      $html['nav']
    );
    $html['nav'] = htmlspecialchars($rendernav);


    $html['loader']['ops'] = $ops;
    $renderloader = '../pug/basic/loader.pug';
    $renderloader = Phug::renderFile(
      $renderloader, 
      $html['loader']
    );
    $html['loader'] = htmlspecialchars($renderloader);

  }



  return $html;
}


function getPosts($view, $ops){

  // print_r($views);
  // print_r($ops);
  $html = [
    
    'skin'=>'loadposts',
  ];

  
  $base = $ops->base=='http://192.168.0.113:8888' ? 'http://localhost:4444/'.$ops->prjfolder : $ops->base;
  $base = 'https://doom-wp.csskiller.es';
  $url = $base.'/wp-json/csskiller/v1/getposts';

  $data = [
    'page'          => isset($ops->page) ? $ops->page : false,
    'perpage'       => isset($ops->perpage) ? $ops->perpage : false,
    'categories'    => isset($ops->categories) ? $ops->categories : false,
    'search'        => isset($ops->search) ? $ops->search : false,
    'type'      => isset($ops->type) ? $ops->type : 'post',
  ];

    


  $options = [
      'http' => [
          'header' => "Content-type: application/x-www-form-urlencoded",
          'method' => 'POST',
          'content' => http_build_query($data),
      ],
  ];

  $ctx = stream_context_create($options);
  $fp = @fopen($url, 'rb', false, $ctx);
  if (!$fp)
  {
      throw new Exception("Problem with $url, $php_errormsg");
  }

  $response = @stream_get_contents($fp);
  if ($response === false) 
  {
      throw new Exception("Problem reading data from $sUrl, $php_errormsg");
  }

  $html = json_decode($response,true);
  
  // $html['skin'] = 'error';
  

  


  return $html;
}


function sendForm($view, $ops){

  // print_r($views);
  // print_r($ops);
  $html = [
    
    'skin'=>'sendForm',
  ];

  
  $base = $base = str_contains($ops->base,'192.168') ? 'http://localhost:4444/'.$ops->prjfolder : $ops->base;
  $base = 'https://doom-wp.csskiller.es/';
  $url = $base.'/wp-json/csskiller/v1/sendform';
  $data = [
    'form'          => isset($ops->form) ? $ops->form : false,
    
  ];

    


  $options = [
      'http' => [
          'header' => "Content-type: application/x-www-form-urlencoded",
          'method' => 'POST',
          'content' => http_build_query($data),
      ],
  ];

  $ctx = stream_context_create($options);
  $fp = @fopen($url, 'rb', false, $ctx);
  if (!$fp)
  {
      throw new Exception("Problem with $url, $php_errormsg");
  }

  $response = @stream_get_contents($fp);
  if ($response === false) 
  {
      throw new Exception("Problem reading data from $sUrl, $php_errormsg");
  }

  $html = json_decode($response,true);
  
  // $html['skin'] = 'error';
  


  return $html;
}

?>
