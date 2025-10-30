<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "faculdade";

    //criar conexão
    $conn = new mysqli($servername, $username, $password, $dbname);


    //Verificar conexão
    if ($conn->connect_error)
    die("Conexão falhou");
?>