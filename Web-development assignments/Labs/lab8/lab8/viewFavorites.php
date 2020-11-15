<!DOCTYPE html>
<html>
    <head>
        <title> View Favorites </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <link href = "css/styles.css" rel="stylesheet" type = "text/css"/>
        
        <script>
        /*global $*/
            function displayFavorites(keywordLink) {
                
            // alert($(keywordLink).html());
            var keyword = $(keywordLink).html();
            //alert(keyword);
               
            $.ajax({
                method: "get",
                url: "api/favoritesAPI.php",
                dataType: "json",
                data: {
                "action": "favorites",
                "keyword": keyword
                },
                success: function(data, status) {
                    $("#favorites").html("");
                    data.forEach(function(i){
                        $("#favorites").append("<img width='250' src='" + i.imageURL+ "'> ");
                    });
                        
                        
                },
            });//ajax
            }
        
            $(document).ready(function(){
            
                $.ajax({
                    method: "get",
                       url: "api/favoritesAPI.php",
                  dataType: "json",
                      data: {
                             "action": "keyword",
                            },
                    success: function(data, status) {
                        data.forEach(function(i){
                             $("#keywords").append("<a class='favorites'  href='#'>" + i.keyword+ "</a> ");
                        });
                    },
                  });//ajax
                  $("#keywords").on("click", ".favorites", function(){
                      displayFavorites(this);
                  });
            });//documentReady
        </script>
    </head>
    <body>
          <br>
                <h1> Pixabay Image Search </h1>    
           <br><br>
            <div>
                <form action="index.html">
                    <button> Back to Search </button>
                </form>
            </div><br>
            <div id="keywords"></div>
            <div id="favorites"></div>
    </body>
</html>