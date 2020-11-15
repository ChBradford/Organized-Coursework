<?php        

          include '../dbConnection.php';

        $conn = getDatabaseConnection("ottermart");

        $sql = "SELECT AVG(cars.price) FROM cars";
        
        
        
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $record = $stmt->fetch(PDO::FETCH_ASSOC);
        
        
         echo json_encode( $record["AVG(cars.price)"]);


        ?>