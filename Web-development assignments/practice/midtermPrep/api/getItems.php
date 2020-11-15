<?php
    include '../dbConnection.php';
    $conn = getDatabaseConnection("practice");
    
    $sql = "SELECT productId, productName, productPrice FROM mp_product ORDER BY productName";
    
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $records=$stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($records);
?>