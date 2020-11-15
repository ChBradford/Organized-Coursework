<?php
    include '../dbConnection.php';
    $conn = getDatabaseConnection("practice");
    
    $productId = $_GET['productId'];
    $sql = "SELECT * FROM mp_product
            WHERE productId = :pId";
            
    $np = array();
    $np[':pId'] = $productId;
    
    $stmt = $conn->prepare($sql);
    $stmt->execute($np);
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($records);
    
?>