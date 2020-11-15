<?php
    $lucky = array(rand(1,99)); 
    while($i<5){
    $num = rand(1,99);
    if(!in_array($num,$lucky)){ // ensuring the same digit does not come up twice
        $lucky[] = $num + ",";
    } 
    $i++;
    }
    
    echo json_encode($lucky);

?>