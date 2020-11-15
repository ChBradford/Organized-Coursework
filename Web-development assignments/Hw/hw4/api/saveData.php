<?php

include '../dbConnection.php';
    $conn = getDatabaseConnection("mapsData");
    
    $arr = array();
    
    $arr[":longitude"] = $_GET["long"];
    $arr[":latitude"] = $_GET["lat"];
    $arr[":weather"] = $_GET["icon"];
    
  
   $sql = "INSERT INTO data ( `longitude`, `latitude`, `weather`) 
    VALUES (:longitude, :latitude, :weather)";
   
    $stmt = $conn->prepare($sql);
    $stmt->execute($arr);
    //$sql ="SELECT COUNT(1) totalproducts FROM om_product";
    //$stmt = $conn->prepare($sql);
    //$stmt->execute();
    $records = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($records);

?>