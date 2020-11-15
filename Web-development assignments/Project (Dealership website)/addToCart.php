<?php

    session_start();
    include 'dbConnection.php';
    
    $conn = getDatabaseConnection("ottermart");
    $carId = $_POST['carId'];
    $userId = $_SESSION['username'];
    $sql = "INSERT INTO cart (userId, carId) VALUES ($userId, $carId);";
    
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    
    header('location: ' . $_POST['sender'])
?>