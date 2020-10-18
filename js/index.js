document.addEventListener("DOMContentLoaded", function(e){
    addDisplay();

   

})

function addDisplay(){
     //-----placeholder-----//
     let id = 0;
     let images = ["https://cykelrundan.se/wp-content/uploads/2017/03/Concert-Event-14-1024x684.jpg",
                   "https://brannovardshus.se/wp-content/uploads/2016/09/julbord.jpg",
                   "https://tolvstockholm.se/wp-content/uploads/2019/04/tolvkonferensstockholm-1218x420.jpg"]
     //--------------------//

    id++;
    if (id > 2){
        id = 0;
    }
    document.getElementById("display").style.backgroundImage = "url(" + images[id] + ")";
    setInterval("addDisplay", 2000);
    


    console.log("hej " + id);
}