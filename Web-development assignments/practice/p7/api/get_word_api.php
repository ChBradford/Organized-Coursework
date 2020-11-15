<?php

//Gets random word from the api and returns its length and id.

include '../dbConnection.php';
$conn = getDatabaseConnection("hangman");

$randomNum = mt_rand(1, 7);
$sql = "SELECT word_id, length(word) length FROM words WHERE word_id = $randomNum";
$stmt = $conn -> prepare($sql);
$stmt->execute();
$record = $stmt->fetch(PDO::FETCH_ASSOC); 

echo json_encode($record);

?>