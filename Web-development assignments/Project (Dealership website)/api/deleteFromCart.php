<?php
    include '../dbConnection.php';
    session_start();
    
    $conn = getDatabaseConnection("ottermart");
    
    $cartId = $_GET['cartId'];
    $carId = $_GET['carId'];
    $userId = $_SESSION['username'];
    
    if(!empty($cartId)) {
        $sql = "DELETE FROM cart WHERE cart.cartId = $cartId";
    }else {
        $sql = "DELETE FROM cart WHERE cart.carId = $carId AND userId = $userId";
    }
    
    $stmt = $conn->prepare($sql);
    $stmt->execute();

?>