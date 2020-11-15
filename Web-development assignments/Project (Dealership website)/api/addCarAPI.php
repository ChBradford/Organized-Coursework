<?php

    include '../dbConnection.php';
    $conn = getDatabaseConnection("ottermart");
    
    $namedParameters = array();
    
    $namedParameters[":make"] = $_GET["make"];
    $namedParameters[":model"] = $_GET["model"];
    $namedParameters[":year"] = $_GET["year"];
    $namedParameters[":color"] = $_GET["color"];
    $namedParameters[":type"] = $_GET["type"];
    $namedParameters[":transmission"] = $_GET["transmission"];
    $namedParameters[":odometer"] = $_GET["odometer"];
    $namedParameters[":price"] = $_GET["price"];
    $namedParameters[":image"] = $_GET["image"];

    $sql = "INSERT INTO cars ( `make`, `model`, `year`, `color`, `type`, `transmission`, `odometer`, `price`, `image`) 
    VALUES (:make, :model, :year, :color, :type, :transmission, :odometer, :price, :image)";
   
    $stmt = $conn->prepare($sql);
    $stmt->execute($namedParameters);
    
    $sql ="SELECT COUNT(1) totalCars FROM cars";
    
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $records = $stmt->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode($records);
?>