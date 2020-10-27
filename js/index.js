document.addEventListener("DOMContentLoaded", async function(e){
    
    eventData = new App(JSON.parse(localStorage.getItem('events')));
    console.log(eventData);


    cycle = new Cycle(5, 5);
    cycleDisplay();

})

function cycleDisplay(){ 

    cycle.i++    
    if (cycle.i > cycle.cycleMax){
        cycle.i = (cycle.cycleMax - cycle.cycleRange); 
    }
    
    document.getElementById("display").style.backgroundImage = "url(" + eventData.events[cycle.i].image + ")";

    document.getElementById("event_name").innerHTML = eventData.events[cycle.i].name;

    document.getElementById("event_startdate").innerHTML = eventData.events[cycle.i].startDatetime.replace("T", ", Kl ").slice(0, -3); 

    document.getElementById("event_location").innerHTML = eventData.events[cycle.i].venue + ",<br>" + eventData.events[cycle.i].address;

    document.getElementById("event_tickets").innerHTML = eventData.events[cycle.i].tickets + " biljetter kvar.";

    document.getElementById("to_event").href = "event.html?eventid=" + eventData.events[cycle.i].id;

    setTimeout(cycleDisplay, 5000);
}

class Cycle{
    constructor(cycleRange, cycleMax){
        this.cycleRange = cycleRange;
        this.cycleMax = cycleMax;
        this.i = (this.cycleMax - this.cycleRange);
    }
}