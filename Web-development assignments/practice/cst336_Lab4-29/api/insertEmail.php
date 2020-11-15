<?php

include 'dbConnection.php';
    $conn = getDatabaseConnection("quizlab");
    
    $arr = array();
    
    $arr[":email"] = $_GET["email"];
    $arr[":score"] = $_GET["score"];
    $arr[":taken"] = $_GET["taken"];
    
    
  
   $sql = "INSERT INTO data ( `email`, `score`, `taken`) 
    VALUES (:email, :score, :taken)";
   
    $stmt = $conn->prepare($sql);
    $stmt->execute($arr);
    //$sql ="SELECT COUNT(1) totalproducts FROM om_product";
    //$stmt = $conn->prepare($sql);
    //$stmt->execute();
    $records = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($records);

?>