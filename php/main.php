<?php
$allowed_origins = [
  "http://localhost:1234",
  "http://192.168.0.113:1234",
  "http://192.168.68.113:1234"
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
  header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
}


require_once __DIR__ .'/vendor/autoload.php';



use Ahc\Env\Loader;

(new Loader)->load('../bd/.env', true , Loader::ENV | Loader::PUTENV);
$base = env('BASE_URL');
$URI = env('BASE_URL');
  
require_once 'wp.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $functionToCall = $_POST['functionToCall'];
  $views = json_decode($_POST['views']);
  $ops = json_decode($_POST['ops']);



  $ops->prjfolder = isset($prjfolder) ? $prjfolder : false;
  $ops->base = isset($base) ? $base : false;
  // print_r($views);
  // print_r('---');
  // print_r($ops);

  switch ($functionToCall) {
    case 'getSkin':
      $data = getSkin($views, $ops);
    break;
    case 'getPosts':
      $data = getPosts($views, $ops);
    break;
    case 'sendForm':
      $data = sendForm($views, $ops);
    break;
    // Agrega más casos aquí para otras funciones
    default:
        $data = array('error' => 'Función no definida');
  }

  header('Content-Type: application/json');
  echo json_encode($data);
}
