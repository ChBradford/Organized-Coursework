<?php
    
    include '../dbConnection.php';
    
    $conn = getDatabaseConnection('ottermart');
    
    $sql = "SELECT * FROM cars ORDER BY price DESC LIMIT 1";
    
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $record = $stmt->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode($record);
?>