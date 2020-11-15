<!DOCTYPE html>
<html>
    <head>
        <title> </title>
        
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

         <script>
                $.ajax({
                    type: "GET",
                    url: "../lab6/api/getCategories.php",
                    dataType: "json",
                    success: function(data, status) {
                        data.forEach(function(key) {
                            $("#catId").append("<option value=" + key["catId"] + ">" + key["catName"] + "</option>");
                        });
                        getProductInfo();
                    }
                }); 
                
                
                 
            function getProductInfo() {    
                $.ajax({
                    type: "GET",
                    url: "api/getProductInfo.php",
                    dataType: "json",
                    data:{"productId": <?=$_GET['productId']?>},
                    success: function(data, status) {
                         $("#productName").val(data["productName"]);
                         $("#productDescription").val(data["productDescription"]);
                         $("#productPrice").val(data["productPrice"]);
                         $("#productImage").val(data["productImage"]);
                         $("#catId").val(data["catId"]).change();
                    }
                });
                
            }    
                
                $(document).ready(function(){  
                    
                    $("#submitButton").on("click",function(){
                        
                        $.ajax({
                            type: "GET",
                            url: "api/updateProductAPI.php",
                            dataType: "json",
                            data:{"productId": <?=$_GET['productId']?>,
                                "productDescription": $("#productDescription").val(),
                                "productPrice": $("#productPrice").val(),
                                "productName": $("#productName").val(),
                                "catId": $("#catId").val(),
                                "productImage": $("#productImage").val()
    
                            },
                            success: function(data, status) {
                                //$("#updated").html("Product Updated");
                            }
                            
                        });//end
                        $("#updated").html("Product Updated");
                    });
                    
                });//documentReady
                
                </script>
        
        
    </head>
    <body>
    <h1> Update Product</h1>
    Enter Product Name:<input type="text" id = "productName" size="50">
    <br>
    Enter Product Description: <textarea id="productDescription" cols="40" rows="3"></textarea>
    <br>
    Product Image:<input type = "text" id = "productImage">
    <br/>
    Product Price: <input type="text" id="productPrice">
    <br/>
    Categories Name: <Select id = "catId">
    <Option> Select One </Option>
    </Select><br>
    
    <button id="submitButton">Update Product</button>
    
    <span id="updated"></span>
    
    
    
    
    
    
    
    </body>
</html>