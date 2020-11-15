<?php
    session_start();
    include 'loadHeader.php';
    
    //checks whether user has logged in
    if (!isset($_SESSION['adminName'])) {
        header('location: login.php'); //sends users to login screen if they haven't logged in
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title> Add Cars </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        
        <!--bootstrap-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        
        <!--fontawesome-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        
        <!--css-->
        <link rel="stylesheet" href="css/loadHeader.css" type="text/css" />
    </head>
    <body>
        <nav class="navbar navbar-expand-lg">
            <?=displayWebsiteName()?>
            <?=loadSkeleton()?>
            <?=displayNavButtons()?>
        </nav>
        
        <br>
        <div class="row ">
            <div class="col"></div>
            <div class="jumbotron col-8">
                <h1 class="display-4 text-center">Add New Car</h1>

                <div class="jumbotron">

                <form>
                    <h4 class="display-8">Car Information</h4>

                    <div class="form-group">
                        <label for="make">Make</label> <span id="makeError" class="addNew"></span>
                        <input type="text" class="form-control" id="make" >
                    </div>

                    <div class="form-group">
                        <label for="model">Model</label> <span id="modelError" class="addNew"></span>
                        <input type="text" class="form-control" id="model">
                    </div>

                    <div class="form-group">
                        <label for="year">Year</label> <span id="yearError" class="addNew"></span>
                        <input type="text" class="form-control" id="year">
                    </div>

                    <div class="form-group">
                        <label for="color">Color</label> <span id="colorError" class="addNew"></span>
                        <input type="text" class="form-control" id="color">
                    </div>

                    <div class="form-group">
                        <label for="type">Type</label> <span id="typeError" class="addNew"></span>
                        <input type="text" class="form-control" id="type">
                    </div>


                    <div class="form-group">
                        <label for="odometer">Odometer</label> <span id="odometerError" class="addNew"></span>
                        <input type="text" class="form-control" id="odometer">
                    </div>
      
                    <div class="form-group">
                        <label for="price">Price</label> <span id="priceError" class="addNew"></span>
                        <input type="text" class="form-control" id="price">
                    </div>
      
                    <div class="form-group">
                        <label for="image">Image</label> <span id="imageError" class="addNew"></span>
                        <input type="text" class="form-control" id="image">
                    </div>

                    Transmission <span id="transmissionError" class="addNew"></span>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="transmission" id="transmission1" value="option1">
                        <label class="form-check-label" for="autoRadio">Automatic</label>
                    </div>
                    
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="transmission" id="transmission2" value="option2">
                        <label class="form-check-label" for="manualRadio">Manual</label>
                    </div>
                    <br>

                    <button type="button" id="submitButton" type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
   
        <div class="col"></div>
        
        <form action="admin.php">
            <div class="modal" id="carAddedSuccessfully" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Success</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p id="addedCarName"></p>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-success">Go to admin</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Stay Here</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        
        
        <script type="text/javascript" src="js/addCars.js"></script>
    </body>
</html>