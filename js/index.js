document.addEventListener("DOMContentLoaded", async function(e){
    
    eventData = new EventData();
    await eventData.fetchEvents();

    cycle = new Cycle(5, 5);
    cycleDisplay();

})

function cycleDisplay(){ 

    cycle.i++    
    if (cycle.i > cycle.cycleMax){
        cycle.i = (cycle.cycleMax - cycle.cycleRange); 
    }
    
    document.getElementById("display").style.backgroundImage = "url(" + eventData.images[cycle.i] + ")";

    document.getElementById("event_name").innerHTML = eventData.name[cycle.i];

    document.getElementById("event_startdate").innerHTML = eventData.startDate[cycle.i].replace("T", ", Kl ").slice(0, -3); 

    document.getElementById("event_location").innerHTML = eventData.venue[cycle.i] + ",<br>" + eventData.address[cycle.i];

    document.getElementById("event_tickets").innerHTML = eventData.tickets[cycle.i] + " biljetter kvar.";

    document.getElementById("to_event").href = "event.html?eventid=" + eventData.id[cycle.i];

    setTimeout(cycleDisplay, 5000);
}

class EventData{
    constructor(){
        this.id = [];
        this.name = [];
        this.address = [];
        this.venue = [];
        this.startDate = [];
        this.tickets = [];
        this.images = [];    
    }   
    
    async fetchEvents() {
        await fetch("./data/events.json")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.events.length; i++) {
                this.id.push(data.events[i].id);
                this.name.push(data.events[i].name);
                this.address.push(data.events[i].address);
                this.venue.push(data.events[i].venue);
                this.startDate.push(data.events[i].startDatetime);
                this.tickets.push(data.events[i].tickets);
                this.images.push(data.events[i].image);
            }
        });        
    }
}

class Cycle{
    constructor(cycleRange, cycleMax){
        this.cycleRange = cycleRange;
        this.cycleMax = cycleMax;
        this.i = (this.cycleMax - this.cycleRange);
    }
}