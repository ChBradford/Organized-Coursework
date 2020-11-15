<?php
session_start();

//checks whether user has logged in
if (!isset($_SESSION['adminName'])) {
    
    header('location: login.html'); //sends users to login screen if they haven't logged in
    
}

?>
<!DOCTYPE html>
<html>
    <head>
        <title> Ottermart - Admin Section </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        
        <script>
        
            function confirmDelete(){
                
                return confirm("Are you sure you want to delete this product?");
                
            }
            
            function openModal(){
                $('#productModal').modal("show"); //opens the modal
            }
            
            $(document).ready(function(){
                
                //Gets first 10 products from the database and displays them
                $.ajax({

                    type: "GET",
                    url: "../lab6/api/getProducts.php",
                    dataType: "json",
                    success: function(data,status) {
                      //alert(data[0].productName);
                      data.forEach(function(product){
                          $("#products").append("<div class='row'>" + 
                                                "<div class='col1'>" + 
                                                "<a class=\"btn btn-primary\"  href='update.php?productId="+product.productId+"'> Update </a>" +
                                                //"[<a href='delete.php?productId="+product.productId+"'> Delete </a>]" +
                                                "<form action='delete.php' method='post' onsubmit='return confirmDelete()'>"+
                                                "<input type='hidden' name='productId' value='"+ product.productId + "'>" +
                                                "<button class=\"btn btn-outline-danger\">Delete</button></form>" +
                                                "<a target='productIframe' onclick='openModal()' href='productInfo.php?productId="+product.productId+"'> " + product.productName + "</a></div>"+
                                                "<div class='col2'>"+"$" + product.productPrice + "</div>"+
                                                "</div><br>");
                      })
                    },
                    complete: function(data,status) { //optional, used for debugging purposes
                    //alert(status);
                    }
                    
                });//ajax
                
               
                
            });//documentReady
            
        </script>
        
        
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
     

        <style>
        
            .row  { display:flex; }
        
            .col1 { width:350px; }
            
            form { display: inline-block; }
            
            #products {
                 margin: 35px;
            }

        </style>   
        
        
         <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        
    </head>
    <body>

        <h1> Ottermart - Admin Section </h1>

        Welcome <?=$_SESSION['adminName']?>
        
    <br><hr><br>
    
    <form action="addProducts.php">
        <button>Add New Product</button>
    </form>
    
    <form action="logout.php">
        <button>Logout</button>
    </form>
    
    <br><br>
    
     <div id="products"></div>
     
     
   <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Product Info</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <iframe name="productIframe"  width="400" height="400"></iframe>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


    </body>
</html>