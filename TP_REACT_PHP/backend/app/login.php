<?php 

$token = str_replace('Basic ', '', getallheaders()['authorization']);

$data = [
    'message' => $_POST,
    'token' => $token
];

if ($_POST["type"] == 'register') {
        $sql = "INSERT INTO users(username, password, token) VALUES('".$_POST['username']."','".$_POST['password']."','".$token."')";
        $conn->query($sql);
        setcookie($_POST['username'], $token);

        echo json_encode([
            "response" => "true",
            "token" => $token
        ]);
}

?>