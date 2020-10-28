document.addEventListener("DOMContentLoaded", async function(e){

    //----------Hämtar data från local storage via klassen App i main.js-----------//
    
    eventData = new App(JSON.parse(localStorage.getItem('events')));

    //----------Ger räknaren ett initialvärde och kallar på cykel-funktionen-----------//

    counter = 0;
    cycleDisplay();

})

//----------Funktionen som byter ut text och bilder-----------//

function cycleDisplay(){ 

    counter++    
    if (counter == eventData.events.length){
        counter = 0; 
    }

    document.getElementById("display").style.backgroundImage = "url(" + eventData.events[counter].image + ")";

    document.getElementById("event_name").innerHTML = eventData.events[counter].name;

    document.getElementById("event_startdate").innerHTML = eventData.events[counter].startDatetime.replace("T", ", Kl ").slice(0, -3); 

    document.getElementById("event_location").innerHTML = eventData.events[counter].venue + ",<br>" + eventData.events[counter].address;

    document.getElementById("event_tickets").innerHTML = eventData.events[counter].tickets + " biljetter kvar.";

    document.getElementById("to_event").href = "event.html?eventid=" + eventData.events[counter].id;

    //----------Timer som kallar om funktionen var 5000:e milisekund-----------//

    setTimeout(cycleDisplay, 5000);
}