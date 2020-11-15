<?php        
    session_start();

            include '../dbConnection.php';

        $conn = getDatabaseConnection("ottermart");
        $userId = $_SESSION['username'];
        
        $sql = "SELECT SUM(cars.price) FROM cart INNER JOIN cars ON cart.carId = cars.carId WHERE userId = $userId";
        
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $record = $stmt->fetch(PDO::FETCH_ASSOC);
        
        
         echo json_encode( $record["SUM(cars.price)"]);


        ?>