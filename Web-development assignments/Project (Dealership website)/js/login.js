
$("#signup").on('click', function() {
    window.location.href = "signup.php";
})

if(valid == false) {
    $("#error").html("Username or password are incorrect.").css('color', 'red');
}