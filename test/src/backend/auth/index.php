<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json; charset=utf-8'); 

    // Database connection details 
    $servername = "127.0.0.1:3306";
    $username = "u565642650_scribe_user";
    $password = "Hyperstechs2.0_dbpass";
    $dbname = "u565642650_scribe_db";

    $conn = new mysqli($servername, $username, $password, $dbname);
    echo "connected successfully";

     // Check connection
     if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

?>