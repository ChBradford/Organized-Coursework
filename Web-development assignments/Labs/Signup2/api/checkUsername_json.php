<?php
header('Access-Control-Allow-Origin: *');

//******
//This Web API checks whether a username exists in the "usernames" array
//It returns the data in JSON format
//******

$usernames = array("eeny", "meeny", "miny", "maria", "john");
$username = array();

if(in_array(strtolower($_GET['username']), $usernames)) {
    $username['available'] = false;
}
else {
    $username['available'] = true;
}

echo json_encode($username);

?>