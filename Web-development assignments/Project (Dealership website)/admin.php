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
        <title> Cars </title>
        <!--ajax-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        
        <!--bootstrap-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        
        <!--fontawesome-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        
        <!--css-->
        <link rel="stylesheet" href="css/admin.css" type="text/css" />
        <link rel="stylesheet" href="css/loadHeader.css" type="text/css" />
    </head>
    <body>
        <nav class="navbar navbar-expand-lg">
            <?=displayWebsiteName()?>
            <?=loadSkeleton()?>
            <?=displayNavButtons()?>
        </nav>

        <div class="jumbotron text-center">
            <h1 class="text-center"> Admin Page </h1>
<br>
            <div class= "row">
                <div  class="text-center col">
                    <button onclick="LogSum()" class ="btn btn-info text-center ">Get SUM</button>
                </div>
                
                <div action="" class="text-center col">
                    <button onclick="LogAVG()" class ="btn btn-info text-center ">Get AVG</button>
                </div>
        
        
                <div action="" class="text-center col">
                    <button onclick="LogCount()" class ="btn btn-info text-center ">Get COUNT</button>
                </div>
            </div>
        </div>
        <br>
        
        <div class=" text-center">
            <form action="addCars.php" class="text-center">
                <button class ="btn btn-primary text-center">Add New Car</button>
            </form>
        </div>
        <br><br>
    
        <div class= "row">
            <div class= "col"></div>
            <div class= "col-11" id="cars"></div>
            <div class= "col"></div>
        </div>
        
        <!--<div class="modal" id="confirmDelete" tabindex="-1" role="dialog">-->
        <!--    <div class="modal-dialog" role="document">-->
        <!--        <div class="modal-content">-->
        <!--            <div class="modal-header">-->
        <!--                <h5 class="modal-title">Error</h5>-->
        <!--                <button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
        <!--                    <span aria-hidden="true">&times;</span>-->
        <!--                </button>-->
        <!--            </div>-->
        <!--            <div class="modal-body">-->
        <!--                <p>An account is required to continue, please login or sign up.</p>-->
        <!--            </div>-->
        <!--            <div class="modal-footer">-->
        <!--                <button class="btn btn-success">Confirm</button>-->
        <!--                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>-->
        <!--            </div>-->
        <!--        </div>-->
        <!--    </div>-->
        <!--</div>-->
            
        <script type="text/javascript" src="js/admin.js"></script>
    </body>
</html>