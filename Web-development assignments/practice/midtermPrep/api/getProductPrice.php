<?php
    include '../dbConnection.php';
    $conn = getDatabaseConnection("practice");
    
    $namedParameters = array();
    $sql = "SELECT * FROM mp_product WHERE 1";
    
    
    if (!empty($_GET['product'])) {
        $sql .= " AND productId = :productId";
        $namedParameters[":productId"] = $_GET['product'];
    }
    
    $stmt = $conn->prepare($sql);
    $stmt->execute($namedParameters);
    $records=$stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($records);
?>