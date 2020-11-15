<?php

    include 'dbConnection.php';
    $conn = getDatabaseConnection("quizlab");
    
    $sql = "SELECT * FROM quiz ORDER BY email";
    
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC); //use fetch for one record, fetchAll for multiple
    
    echo json_encode($records);
?>