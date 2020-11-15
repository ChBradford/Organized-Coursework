<?php
    session_start();
    
    session_destroy();
    
    header('location: login.php'); //taking user back to login screen
?>