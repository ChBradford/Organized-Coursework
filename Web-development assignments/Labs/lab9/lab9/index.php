<?php

 if (!empty($_FILES)) {

    print_r($_FILES);
    
    echo "Image size: " . $_FILES['myFile']['size'];
    
    if($_FILES['file']['size'] > 1000000)
    {
        $error = "File too large, must be smaller than 1MB";
        echo "<script type='text/javascript'>alert(<?php echo $error; ?>);</script>";
        unlink( $_FILES['myfile']['tmp_name']);
        
    }
    else
    move_uploaded_file( $_FILES['myFile']['tmp_name'], "gallery/" . $_FILES['myFile']['name']);

}


    function displayImagesUploaded() {

        $images = scandir("gallery"); //returns all file names within a folder
        
        //print_r($images);
        
        for ($i = 2; $i < count($images); $i++) {
            
            echo "<img src='gallery/$images[$i]' width='50' />";
            
        }//for
    
    }//function


?>


<!DOCTYPE html>
<html>
    <head>
        <title> Lab 9: File Upload </title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="css/styles.css" type="text/css" />
        <style>
            
            img { padding: 10px; }
            
            img:hover { width: 250px; }
            
        </style>
    </head>
    <body>
        
        <div class="jumbotron">
        <h1> Image Upload </h1>
        </div>
        
        <form  method="POST" enctype="multipart/form-data">
        
            <input type="file" name="myFile" />
            <button> Upload File! </button>
            
        </form>

        <hr>
        <h3> Images uploaded: </h3>
        
        <?= displayImagesUploaded() ?>
        
        
        <?php
        
        
        //$conn = dbConnection();
        
        ?>
    </body>
</html>