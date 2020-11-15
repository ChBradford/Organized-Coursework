<?php
    include '../dbConnection.php';
    $conn = getDatabaseConnection("practice");
    
    $sql = "SELECT * FROM mp_product ORDER BY productPrice";
    
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
echo json_encode($records[rand(0, count($records) - 1)]);
?>