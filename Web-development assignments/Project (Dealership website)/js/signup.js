
$("#login").on('click', function() {
    window.location.href = "login.php";
}) // login
            
$("#signup").on('click', function() {
    $("[name=first]").css('border-color', 'black');
    $("[name=last]").css('border-color', 'black');
    $("#username").css('border-color', 'black');
    $("#password").css('border-color', 'black');
    
    var error = false;
    
    if($("[name=first]").val() == ""){
        error = true;
        $("[name=first]").css('border-color', 'red');
    } 
    
    if($("[name=last]").val() == ""){
        error = true;
        $("[name=last]").css('border-color', 'red');
    } 
    
    if($("#username").val() == ""){
        error = true;
        $("#username").css('border-color', 'red');
    }  
    
    if($("#password").val().length < 6) {
        error = true;
        $("#password").css('border-color', 'red');
    }
    
    if(!error){
        $("#form").submit();
    }
}) // signup