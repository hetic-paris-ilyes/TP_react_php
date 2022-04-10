<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: content-type, authorization');
header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');
require 'getDb.php';


$token = mysqli_query($conn, "SELECT token FROM users WHERE token = '".$_COOKIE[$_POST['username']]."'");
$users = mysqli_query($conn, "SELECT * FROM users WHERE token = '".$_COOKIE["123sd"]."'");

if ($_COOKIE["123sd"] == $_COOKIE["123sd"]){
    print_r(mysqli_fetch_array($users));

    echo json_encode(
       [ 
         "res" => mysqli_fetch_array($users),
       
       ]
       );

}

?>
