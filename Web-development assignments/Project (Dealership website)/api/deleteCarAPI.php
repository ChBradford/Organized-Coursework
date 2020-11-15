<?php
session_start();

//checks whether user has logged in
if (!isset($_SESSION['adminName'])) {
    header('location: ../login.php'); //sends users to login screen if they haven't logged in
}

    include '../dbConnection.php';
    $conn = getDatabaseConnection("ottermart");

    $sql = "DELETE FROM `cars` WHERE `cars`.`carId` = " . $_POST['carId'];
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    
   // echo $sql;
    
    header("Location: ../admin.php");



?>