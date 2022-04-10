<?php

 $servername = "db";
 $port = "3306";
 $db = "data";
 $conn = mysqli_connect($servername, $username, $password, $db, $port);
 
  if (!$conn) {
    echo 'connection error: ' . mysqli_connect_error();
  } else {
    echo 'connection réussi';
  }

  ?>