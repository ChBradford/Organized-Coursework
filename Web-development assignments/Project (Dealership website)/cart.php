<?php
    session_start();
    include 'loadHeader.php';
    include 'dbConnection.php';
    
    function total(){
        $conn = getDatabaseConnection("ottermart");
        $userId = $_SESSION['username'];
        
        $sql = "SELECT SUM(cars.price) FROM cart INNER JOIN cars ON cart.carId = cars.carId WHERE userId = $userId";
        
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $record = $stmt->fetch(PDO::FETCH_ASSOC);
        
        echo $record["SUM(cars.price)"];
    } // total
    
    function makeCall() {
        $conn = getDatabaseConnection("ottermart");
        
        $userId = $_SESSION['username'];
        
        $sql = "SELECT * FROM cart INNER JOIN cars ON cart.carId = cars.carId LEFT JOIN (SELECT carId, COUNT(carId) as total
        FROM cart WHERE userId = $userId GROUP BY carId) A ON A.carId = cart.carId WHERE cart.userId = $userId";
        
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $record = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $dups = array();
    
        foreach($record as $key => $val) {
            
            if(!in_array($val["carId"], $dups)) {
                $dups[] = $val["carId"];
                
                echo "
                <tr id='" . $val["carId"] . "'>
                    <td class='table-img'><img src='" . $val["image"] . "' width='200'></td>
                    <td class='table-desc'>
                        <strong class='table-carName'>" . $val["year"] . " " . $val["make"] . " " . $val["model"] . "</strong> <br/><br/>
                        <strong>Mileage: </strong> " . $val["odometer"] . " <br/>
                        <strong>Transmission: </strong> " . $val["transmission"] . " <br/>
                        <strong>Color: </strong> " . $val["color"] . " <br/>
                    </td>
                    <td>
                        " . $val["total"] . " <br/>
                        <button class='btn btn-danger btn-sm removeOne' data-toggle='modal' data-target='#removeOneModal' value='" . $val["cartId"] . "'><span class='fas fa-minus'></span> Remove one</button> <br/> <br/>
                        <button class='btn btn-danger btn-sm removeAll' data-toggle='modal' data-target='#removeAllModal' value='" . $val["carId"] . "'><span class='fas fa-trash-alt'></span> Remove all</button>
                    </td>
                    <td class='table-price' >$" . $val["price"] . "</td>
                </tr>";
            }
            
        }
    } // makeCall
  
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title> Cart </title>
        <!--jquery-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        
        <!--bootstrap-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        
        <!--fontawesome-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        
        <!--css-->
        <link rel="stylesheet" href="css/cart.css" type="text/css" />
        <link rel="stylesheet" href="css/loadHeader.css" type="text/css" />
    </head>
    <body>
        <nav class="navbar navbar-expand-lg">
            <?=displayWebsiteName()?>
            <?=loadSkeleton()?>
            <?=displayNavButtons()?>
        </nav>
        <table>
            <tr>
                <th>Image</th>
                <th>Description</th>
                <th># of Cars</th>
                <th>Price</th>
            </tr>
            <?=makeCall()?>
            <tr>
                <th>Coupon:  <span class="form-group">
                    <input type="text" class="form-control" id="coupon">
                </th>
                <th></th>
                <th id="couponDiscount">  </th>
            </tr>
            <tr>
                <th>Total: </th>
                <th></th>
                <th></th>
                <th id = "tot"> $<?=total()?> </th>
            </tr>
        </table>
        <br><br><br>
        
        <div class="modal fade" id="removeOneModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">This action CANNOT be undone</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to remove one item?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                        <button type="button" class="btn btn-danger" id="removeTheItem">Yes</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="removeAllModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">This action CANNOT be undone</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" id="removeAllItems">
                        Are you sure you want to delete ALL items?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                        <button type="button" class="btn btn-danger" id="removeTheItems">Yes</button>
                    </div>
                </div>
            </div>
        </div>
        
        <script type="text/javascript" src="js/cart.js"></script>
    </body>
</html>
