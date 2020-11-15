<?php

    include '../dbConnection.php';
    $conn = getDatabaseConnection("ottermart");
    
    $sql = "SELECT * FROM cars ORDER BY carId";
    
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC); //use fetch for one record, fetchAll for multiple
    
    echo json_encode($records);
?>