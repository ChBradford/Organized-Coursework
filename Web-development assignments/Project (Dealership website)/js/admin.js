
function confirmDelete(){
    return confirm("Are you sure you want to delete this car?");
} // confirmDelete

function LogSum() {
    $.ajax({
        type: "GET",
        url: "api/getTotalLog.php",
        dataType: "json",
        success: function(data, status) {
            alert("Everything in your inventory costs $" + data);
        }
    }); // ajax
} // LogSum

function LogAVG() {
    $.ajax({
        type: "GET",
        url: "api/getAverageLog.php",
        dataType: "json",
        success: function(data, status) {
            alert("The average price of the cars in your inventory is $"+data)
        }
    }); // ajax
} // LogAVG

function LogCount() {
    $.ajax({
        type: "GET",
        url: "api/getCountLog.php",
        dataType: "json",
        success: function(data, status) {
            alert("You have "+data +" cars in the inventory");
        }
    }); // ajax
} // LogCount
              
$.ajax({
    type: "GET",
    url: "api/getAllCars.php",
    dataType: "json",
    success: function(data,status) {
        let htmlString = "";
        let i = 0;
        $("#images").html("");
        
        for (let rows=0; rows < data.length; rows++) {
            if(data[i] !=null){
                htmlString += "<div class='row'style='margin-bottom: 100px;' >";
            }
        
            for (let cols=0; cols < 5; cols++) {
                if(data[i] !=null){
                    carMake =  data[i]["make"];
                    carModel =  data[i]["model"];  
                    carType =  data[i]["type"];        
                    carYear =  data[i]["year"];
                    carColor =  data[i]["color"];
                    carTransmission =  data[i]["transmission"];
                    carOdometer =  data[i]["odometer"];
                    carPrice =  data[i]["price"];
                    carImage =  data[i]["image"];
                    
                    htmlString += "<div class='col card' >";
                    
                    htmlString += "<br><a class=\"btn btn-outline-primary\"  href='update.php?carId="+data[i]['carId']+"'> Update </a>" +
                                            "<form action='api/deleteCarAPI.php' method='post' onsubmit='return confirmDelete()'>"+
                                            "<input type='hidden' name='carId' value='"+ data[i]['carId'] + "'>" +
                                            "<button class=\"btn btn-outline-danger\">Delete</button></form>" ;
                    
                    htmlString +=   "<div> " + "Type: " + carType+ "</div>";
                    htmlString +=   "<div> " + "Make: " + carMake+ "</div>";
                    htmlString +=   "<div> " + "Model: " + carModel+ "</div>";
                    htmlString +=   "<div> " + "Year: " + carYear+ "</div>";
                    htmlString +=   "<div> " + "color: " + carColor+ "</div>";
                    htmlString +=   "<div> " + "Transmission: " + carTransmission+ "</div>";
                    htmlString +=   "<div> " + "Odometer: " + carOdometer+ "</div>";
                    htmlString +=   "<div> " + "Price: $" + carPrice+ "</div>";
                    htmlString +=  "<img class='rounded mx-auto d-block' src='"+ carImage+"' width='100%' >";
                    
                    htmlString += "</div >";
                
                }
                 i++;
            }//for
            
            htmlString += "</div>";
        }//for
        
        $("#cars").append(htmlString);
    }
});//ajax