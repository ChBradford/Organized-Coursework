<?php

    include '../dbConnection.php';
    $conn = getDatabaseConnection("ottermart");

    $coupon = $_GET['coupon'];
    $arr = array();
    
    $sql = "SELECT * FROM coupons WHERE couponCode = :coupon;";
    $arr[":coupon"] = $coupon;
    
    $stmt = $conn->prepare($sql);
    $stmt->execute($arr);
    $product = $stmt->fetch(PDO::FETCH_ASSOC);
    

    echo json_encode($product);

?>