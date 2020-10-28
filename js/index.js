document.addEventListener("DOMContentLoaded", async function(e){

    //----------app hämtar data från local storage via klassen App i main.js-----------//


    //----------Ger räknaren ett initialvärde och kallar på cykel-funktionen-----------//

    counter = 0;
    cycleDisplay();

})

//----------Funktionen som byter ut text och bilder-----------//

function cycleDisplay(){ 

    counter++    
    if (counter == app.events.length){
        counter = 0; 
    }

    document.getElementById("display").style.backgroundImage = "url(" + app.events[counter].image + ")";

    document.getElementById("event_name").innerHTML = app.events[counter].name;

    document.getElementById("event_startdate").innerHTML = app.events[counter].startDatetime.replace("T", ", Kl ").slice(0, -3); 

    document.getElementById("event_location").innerHTML = app.events[counter].venue + ",<br>" + app.events[counter].address;

    document.getElementById("event_tickets").innerHTML = app.events[counter].tickets + " biljetter kvar.";

    document.getElementById("to_event").href = "event.html?eventid=" + app.events[counter].id;

    //----------Timer som kallar om funktionen var 5000:e milisekund-----------//

    setTimeout(cycleDisplay, 5000);
}