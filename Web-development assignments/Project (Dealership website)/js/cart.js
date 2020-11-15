
var totalPrice = 0;
var discountAmount = 0;
var cartId;
var carId;

$("#removeTheItem").on('click', function() {
    $.ajax({
        method: "GET",
        url: "api/deleteFromCart.php",
        data: { 
            "cartId": cartId
        },
        success: function(data, status) {
            location.reload(true);
        }
    }); //ajax 
}) // removeTheItem
                      
$("#removeTheItems").on('click', function() {
    $.ajax({
        method: "GET",
        url: "api/deleteFromCart.php",
        data: { 
            "carId": carId
        },
        success: function(data, status) {
            location.reload(true);
        }
    }); //ajax 
}) // removeTheItems
                      
$(".removeOne").on('click', function() {
    cartId = $(this).val();
}) // removeOne
                    
$(".removeAll").on('click', function() {
    carId = $(this).val();
}) // removeAll

$( "#coupon" ).change(function() { //apply coupon code
    resetTotal()

    $.ajax({
        type: "GET",
        url: "api/applyCouponAPI.php",
        dataType: "json",
        data : {"coupon": $("#coupon").val()
        },
        success: function(data, status) {
            $( "#couponDiscount" ).html(data.discountAmount +"% Discount")
            discountAmount = data.discountAmount;

            if(data.discountAmount >0){
                $.ajax({
                    type: "GET",
                    url: "api/getTotalPrice.php",
                    dataType: "json",
                    success: function(data, status) {
                        totalPrice = data;
                        let undiscountedAmount = totalPrice;
                        let discount = discountAmount/100 * undiscountedAmount
                        let newTotal  = undiscountedAmount - discount
                        $( "#tot" ).html("$" + newTotal);
                    }
                }); // ajax
            }
            else {
                $( "#couponDiscount" ).html("")

            }
        
        
        }
    
    }); // ajax
    
    
    
    
    function resetTotal() {
      $( "#couponDiscount" ).html("")

    $.ajax({
        type: "GET",
        url: "api/getTotalPrice.php",
        dataType: "json",
        success: function(data, status) {
            totalPrice = data;
            $( "#tot" ).html("$" + totalPrice);
            
        }
    }); // ajax
    
    } // resetTotal
}); // coupon
