<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: content-type, authorization');
header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');

$servername = "db";
$port = "3306";
$db = "data";
$conn = mysqli_connect($servername, $username, $password, $db, $port);

require 'getDb.php';
require 'AddPost.php';
require 'login.php';
require 'getSession.php';
require 'getPost.php';
require 'getUsers.php';


if ($_POST["type"] == 'login') { 

    $usernamePw = mysqli_query($conn, "SELECT * FROM users WHERE username = '".$_POST['username']."' AND '".$_POST['password']."'");
    if(mysqli_num_rows($usernamePw)) {

        $username = mysqli_query($conn, 'SELECT username FROM users');
        $token = 'SELECT token FROM users';
        echo json_encode([
            'status' => 'succes',
            'username' => $username,
            'token' => $token
        ]);


    }
}

?>