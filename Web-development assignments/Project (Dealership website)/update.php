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
        <title>Update Cars</title>
        
        <!--jquery-->
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
                <h1 class="display-4 text-center">Update Car</h1>
                <br><br>
                
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
        
                    <button  id="submitButton" type="button" class="btn btn-primary">Submit</button>
                </form>

            </div>
            
            <form action="admin.php">
                <div class="modal" id="updatedCar" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Success</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p id="addedCarName">The car has been updated.</p>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-success">Go to admin</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Stay Here</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            
            <div class="col"> </div>
        </div>
        
        <script>
            getCarInfo();
        
            function getCarInfo() {    
                $.ajax({
                    type: "GET",
                    url: "api/getCarInfo.php",
                    dataType: "json",
                    data : {
                        "carId": <?=$_GET['carId']?>
                    },
                    success: function(data, status) {
                
                        $("#make").val(data["make"]);
                        $("#model").val(data["model"]);
                        $("#year").val(data["year"]);
                        $("#type").val(data["type"]);
                        $("#price").val(data["price"]).change();
                        
                        if(data["transmission"] == "Automatic") {
                            $('#transmission1').click(); 
                        }
                        else if(data["transmission"] == "Manual") {
                            $('#transmission2').click(); 
                        }
                        
                        $("#odometer").val(data["odometer"]).change();
                        $("#image").val(data["image"]).change();
                        $("#price").val(data["price"]).change();
                        $("#color").val(data["color"]).change();
                    },
                    complete: function(data,status) { //optional, used for debugging purposes
                        // alert(status);
                    }
                }); // ajax
            } // getCarInfo

            $("#submitButton").on("click",function(){
                let transmission = "";
                let valid = true;
                
                if($("#transmission1").is(":checked")) {
                    transmission = "Automatic";
                }else  if($("#transmission2").is(":checked")) {
                    transmission = "Manual";
                }else {
                    valid = false;
                    $("#transmissionError").html("Transmission is required.").css('color', 'red');
                }
    
                if($("#image").val() === "") {
                    valid = false;
                    $("#imageError").html("Image is required.").css('color', 'red');
                }
                
                if($("#price").val() === "") {
                    valid = false;
                    $("#priceError").html("Price is required.").css('color', 'red');
                }
                
                if($("#odometer").val() === "") {
                    valid = false;
                    $("#odometerError").html("Odometer is a required.").css('color', 'red');
                }
                
                if($("#type").val() === "") {
                    valid = false;
                    $("#typeError").html("Type is a required.").css('color', 'red');
                }
                
                if($("#color").val() === "") {
                    valid = false;
                    $("#colorError").html("Color is a required.").css('color', 'red');
                }
                
                if($("#year").val() === "" || $("#year").val() < 1885 || $("#year") > 2020) {
                    valid = false;
                    $("#yearError").html("Valid year is between 1885 and 2020").css('color', 'red');
                }
                
                if($("#model").val() === "") {
                    valid = false;
                    $("#modelError").html("Model is a required.").css('color', 'red');
                }
                
                if($("#make").val() === "") {
                    valid = false;
                    $("#makeError").html("Make is a required.").css('color', 'red');
                }
                
                if(valid) {
                    $.ajax({
                    type: "GET",
                        url: "api/updateCarAPI.php",
                        data:{
                            "carId": <?=$_GET['carId']?>,
                            "make": $("#make").val(),
                            "model": $("#model").val(),
                            "year": $("#year").val(),
                            "type": $("#type").val(),
                            "transmission": transmission,
                            "odometer": $("#odometer").val(),
                            "image": $("#image").val(),
                            "color": $("#color").val(),
                            "price": $("#price").val()
                        },
                        success: function(data, status) {
                            $("#updatedCar").modal("show");
                        },
                        complete: function(data,status) { //optional, used for debugging purposes
                            // alert(status);
                        }
                    }); // ajax
                }
            }); // submitButton
        </script>
    </body>
</html>