
$("#submitButton").on("click", function(){
    $(".addNew").html("");
    
    let transmission = "";
    let valid = true;

    if($("#transmission1").is(":checked")) {
        transmission = "Automatic";
    }else if($("#transmission2").is(":checked")) {
        transmission = "Manual";
    }else {
        valid = false;
        $("#transmissionError").html("Transmission is required.").css('color', 'red');
    }
    
    if($("#image").val() === "") {
        valid = false;
        $("#imageError").html("Image is required.").css('color', 'red');
    }
    
    if($("#price").val() === "") {
        valid = false;
        $("#priceError").html("Price is required.").css('color', 'red');
    }
    
    if($("#odometer").val() === "") {
        valid = false;
        $("#odometerError").html("Odometer is a required.").css('color', 'red');
    }
    
    if($("#type").val() === "") {
        valid = false;
        $("#typeError").html("Type is a required.").css('color', 'red');
    }
    
    if($("#color").val() === "") {
        valid = false;
        $("#colorError").html("Color is a required.").css('color', 'red');
    }
    
    if($("#year").val() === "" || $("#year").val() < 1885 || $("#year") > 2020) {
        valid = false;
        $("#yearError").html("Valid year is between 1885 and 2020").css('color', 'red');
    }
    
    if($("#model").val() === "") {
        valid = false;
        $("#modelError").html("Model is a required.").css('color', 'red');
    }
    
    if($("#make").val() === "") {
        valid = false;
        $("#makeError").html("Make is a required.").css('color', 'red');
    }
    
    if(valid) {
        $(this).submit();
        $.ajax({
            type: "GET",
            url: "api/addCarAPI.php",
            dataType: "json",
            data : {
                "make": $("#make").val(),
                "model": $("#model").val(),
                "year": $("#year").val(),
                "color": $("#color").val(),
                "type": $("#type").val(),
                "transmission": transmission,
                "odometer": $("#odometer").val(),
                "price": $("#price").val(),
                "image": $("#image").val()
            },
            success: function(data, status) {
                $("#addedCarName").html($("#year").val() + " " + $("#make").val() + " " + $("#model").val() + " car has been added to the database.");
                $("#carAddedSuccessfully").modal("show");
            }
        }); // ajax
    }
});