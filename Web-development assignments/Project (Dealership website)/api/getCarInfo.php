<?php

    include '../dbConnection.php';
    $conn = getDatabaseConnection("ottermart");

    $carId = $_GET['carId'];
    
    $sql = "SELECT * FROM cars WHERE carId = $carId";
    
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $product = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($product);

?>