document.addEventListener("DOMContentLoaded", async function(e){
    
    eventData = new App(JSON.parse(localStorage.getItem('events')));
    console.log(eventData);

    counter = 0;
    cycleDisplay();

})

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

    setTimeout(cycleDisplay, 5000);
}