<?php
    
    $fortunes = array("Meet your partner halfway."
    ,"Run."
    ,"No snowflake in an avalanche will ever feel responsible."
    ,"Thanks for letting me out."
    ,"You'll be fine... maybe"
    ,"I'm just a cookie, what'd you expect?."
    ,"Help! I'm stuck in a Chinese bakery!"
    ,"Ask not what the cookie can do for you. Rather, ask what you can do for the cookie."
    ,"Hey! You can read~"
    ,"Ya know, these cookies should always be free..."
    ,"Three can keep a secret... if you get rid of two."
    , "404, jk"
    ,"You digitally ate my home!"
    ,"Avoid unneccesary gambles."
    ,"We know."
    ,"When you squeeze an orange, orange juice will come out. Why? It's an orange..."
    ,"That wasn't a cookie."
    ,"So if this isn't really a cookie, is this just a fortune telling service?"
    ,"You're about to finish reading a fortune cookie."
    , "Fortune not found."
    ,"Don't let statistics do a number on you."
    , "(╯°□°）╯︵ ┻━┻");
    
    
    echo json_encode($fortunes[rand(0,21)]);
?>