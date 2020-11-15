<?php
session_start();

//checks whether user has logged in
if (!isset($_SESSION['adminName'])) {
    
    exit;
    
}

    include '../dbConnection.php';
    $conn = getDatabaseConnection("ottermart");
    
    //$productId = $_GET['productId'];
    
    $sql = "UPDATE om_product
    SET productPrice = :productPrice,
    productName = :productName, 
    productDescription =  :productDescription, 
    productImage = :productImage,
    catId = :catId
    WHERE om_product.productId =  " .  $_GET['productId'];
    
    $arr = array();
    $arr[":productName"] = $_GET["productName"];
    $arr[":productDescription"] = $_GET["productDescription"];
    $arr[":productImage"] = $_GET["productImage"];
    $arr[":productPrice"] = $_GET["productPrice"];
    $arr[":catId"] = $_GET["catId"];
    
    $stmt = $conn->prepare($sql);
    $stmt->execute($arr);
    
?>