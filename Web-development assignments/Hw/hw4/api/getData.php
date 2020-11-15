<?php
    include '../dbConnection.php';
    $conn = getDatabaseConnection("mapsData");
    
    
    $sql = "SELECT * FROM `data` ORDER BY `id` DESC"; 
    
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $records = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($records);
?>