<?php
//Used to check the letter the user inputed in the form, and if the letter is in the word
//Should return an array of booleans as the api
include '../dbConnection.php';
$conn = getDatabaseConnection("hangman");
$wid1 = intval($_GET['wordId']);
$input = $_GET['letter'];

$sql = "select * from words where word id = $wid1";

$stmt = $conn->prepare($sql);
$stmt->execute();
$record = $stmt->fetch();

$word = $record['word'];
$l = str_split($word);
$array = array();

foreach($l as $char){
    if($char == $input){
        array_push($array,1);
    }
    else
        array_push($array,0);
}


echo json_encode($array);
?>