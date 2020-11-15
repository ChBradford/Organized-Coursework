<?php
    session_start();
    include 'loadHeader.php';
?>

<!DOCTYPE html>
<html>
    <head>
        <title> Admin Login Screen </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        
        <link rel="stylesheet" href="css/login.css" type="text/css" />
        <link rel="stylesheet" href="css/loadHeader.css" type="text/css" />
    </head>
    
    <body>
        <nav class="navbar navbar-expand-lg">
            <?=displayWebsiteName()?>
            <?=loadSkeleton()?>
        </nav>
        
        <main>
            <div id="websiteImage">
                <img src="img/logo.png"></img>
            </div>
            <div id="loginSignUp">
                <form method="POST" action="signupProcess.php" id="form">
                    <h1>Sign Up</h1>
                    First Name: <br/>
                    <input type="text" class="form-control form-rounded" name="first"> <br/>
                    Last Name: <br/>
                    <input type="text" class="form-control form-rounded" name="last"> <br/>
                    Username: <br/>
                    <input type="text" class="form-control form-rounded" name="username" id="username"> <br/>
                    Password: <br/>
                    <input type="password" class="form-control form-rounded" name="password" id="password"> <br/>
                    
                    <button type="button" class="btn btn-outline-primary" id="login">Login</button>
                    <button type="button" class="btn btn-outline-primary" id="signup">Sign up</button>
                    <br><br><br>

                </form>
            </div>
        </main>
        
        <script type="text/javascript" src="js/signup.js"></script>
    </body>
</html>