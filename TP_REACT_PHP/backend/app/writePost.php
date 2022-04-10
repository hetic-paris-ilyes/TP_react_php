<?php 

$token = str_replace('Basic ', '', getallheaders()['authorization']);

$data = [
    'message' => $_POST,
];

    
    
    if ($_POST["type"] == 'AddPost') {

        $sql = "INSERT INTO posts(title, content, author) VALUES('".$_POST['title']."','".$_POST['content']."','".$_POST['author']."')";
        $conn->query($sql);
}

?>