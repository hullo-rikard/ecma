document.addEventListener("DOMContentLoaded", function(e){
    
    eventData = new EventData()
    cycleDisplay();

})

function cycleDisplay(){
    
    
    //console.log("hej " + eventData.id);

    eventData.id++;
    if (eventData.id > 2){
        eventData.id = 0;
    }
    document.getElementById("display").style.backgroundImage = "url(" + eventData.images[eventData.id] + ")";
    setTimeout(cycleDisplay, 5000);
    


    //console.log("hej " + eventData.id);
}

class EventData{
    constructor(id = 0){
        //-----placeholder-----//
        this.id = id;
        this.images = ["https://cykelrundan.se/wp-content/uploads/2017/03/Concert-Event-14-1024x684.jpg",
                      "https://brannovardshus.se/wp-content/uploads/2016/09/julbord.jpg",
                      "https://tolvstockholm.se/wp-content/uploads/2019/04/tolvkonferensstockholm-1218x420.jpg"]
        //--------------------//
    }    
}