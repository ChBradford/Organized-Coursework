<?php
header('Access-Control-Allow-Origin: *');

//******
//This Web API returns whether a username is included in an Array
//It uses plain text to output the data
//******

//echo $_GET['username'];

$usernames = array("eeny", "meeny");
$usernaames[] = "miny";  //adding a new element at the end of the array
array_push($usernames, "maria", "john");

//print_r($usernames)

//Checking whether a username is included within the "$usernames" array
if(in_array(strtolower($_GET['username']), $usernames)) {
    echo "Not Available!";
    
}
else{
    echo "Available!";
}
?>