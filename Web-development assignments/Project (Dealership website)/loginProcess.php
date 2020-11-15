<?php

    session_start(); //starts or resumes an existing session

    include 'dbConnection.php';
    $conn = getDatabaseConnection("ottermart");
    
    $username = $_POST['username'];
    $password = sha1($_POST['password']);
    
    $namedParameters = array();
    $namedParameters[':username'] = $username;
    $namedParameters[':password'] = $password;
    
    $sql = "SELECT * FROM users WHERE username = :username AND password = :password";
    
    $stmt = $conn->prepare($sql);
    $stmt->execute($namedParameters);
    $record = $stmt->fetch(PDO::FETCH_ASSOC); //we are expecting ONLY one record, so we use fetch instead of fetchAll
    
    // print_r($record);
    
    if (empty($record)) {
        header('location: login.php'); //redirecting to a new file
        
        $_SESSION['valid'] = "false";
    }else if($record["admin"]){
        //echo $record[0]['firstName']; //using fetchAll
        //echo $record['firstName'] . " " . $record['lastName'] ; //using fetch
        
        $_SESSION['valid'] = "true";
        
        $_SESSION['adminName'] = $record['firstName'] . " " . $record['lastName'];
        $_SESSION['username'] = $record['userId'];
        header('location: admin.php'); //redirecting to a new file
    }else {
        $_SESSION['valid'] = "true";
        
        $_SESSION['user'] = $record['firstName'] . " " . $record['lastName'];
        $_SESSION['username'] = $record['userId'];
        header('location: index.php'); //redirecting to a new file
    }
?>