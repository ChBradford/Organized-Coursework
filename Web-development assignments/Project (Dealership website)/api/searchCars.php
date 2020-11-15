<?php
    include '../dbConnection.php';
    
    $conn = getDatabaseConnection("ottermart");
    
    $q = $_GET['search'];
    $tr = $_GET['transmission'];
    $ty = $_GET['type'];
    
    $namedParameters = array();
    
    $sql = "SELECT * FROM cars WHERE 1"; //Retrieves ALL records
    
    if (!empty($q)) { //user entered a product keyword
        $sql .=  " AND (make LIKE :search OR model LIKE :search OR year LIKE :search)";
        $namedParameters[":search"] = "%$q%";
    }
    
    if(!empty($tr)) {
        $sql .=  " AND transmission = :transmission";
        $namedParameters[":transmission"] = $tr;
    }
    
    if(!empty($ty)) {
        $sql .=  " AND type = :type";
        $namedParameters[":type"] = $ty;
    }
    
    $stmt = $conn -> prepare($sql);  //$connection MUST be previously initialized
    $stmt->execute($namedParameters);
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC); //use fetch for one record, fetchAll for multiple
    
    echo json_encode($records);

?>