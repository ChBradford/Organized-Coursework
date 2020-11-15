<?php
session_start();

//checks whether user has logged in
if (!isset($_SESSION['adminName'])) {
    
    exit;
    
}

    include '../dbConnection.php';
    $conn = getDatabaseConnection("ottermart");
    
    $carId = $_GET['carId'];
    
    
    $arr = array();
    $arr[":make"] = $_GET["make"];
    $arr[":model"] = $_GET["model"];
    $arr[":type"] = $_GET["type"];
    $arr[":year"] = $_GET["year"];
    $arr[":color"] = $_GET["color"];
    $arr[":transmission"] = $_GET["transmission"];
    $arr[":odometer"] = $_GET["odometer"];
    $arr[":price"] = $_GET["price"];
    $arr[":year"] = $_GET["year"];
    $arr[":image"] = $_GET["image"];
    
    
    

    $sql = "UPDATE cars
    SET 
    price = :price,
    make = :make, 
    model =  :model, 
    type = :type,
    year = :year,
    color = :color,
    transmission = :transmission,
    price = :price,
    odometer = :odometer,
    image = :image
    WHERE cars.carId =  " .  $_GET['carId'];
    


    $stmt = $conn->prepare($sql);
    $stmt->execute($arr);
    
?>