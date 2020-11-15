<?php

session_start();

session_destroy();

header('location: login.html'); //taking user back to login screen


?>