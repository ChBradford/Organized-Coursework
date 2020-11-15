<?php
    session_start();
    include 'loadHeader.php';
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title> Cars </title>
        <!--jquery-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        
        <!--bootstrap-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        
        <!--fontawesome-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        
        <!--css-->
        <link rel="stylesheet" href="css/admin.css" type="text/css" />
        <script>
        

        </script>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg">
            <h1 id="websiteName">WEBSITE NAME HERE</h1>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.php">Home</a>
                    </li>
                    <?=isAdmin()?>
                </ul>
            </div>
            <?=displayNavButtons()?>
        </nav>

         <div class="jumbotron text-center">


    <!--    <form action="logout.php">-->
    <!--    <button class ="btn btn-danger text-center">Logout</button>-->
    <!--</form>-->
        <h1 class="text-center"> Cars - Admin Page </h1>



        <h4 class="text-center"> Welcome <?=$_SESSION['adminName']?>  <br>  <br>   
</h4>

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
    </body>
</html>