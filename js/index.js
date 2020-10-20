document.addEventListener("DOMContentLoaded", async function(e){
    
    eventData = new EventData();
    await eventData.fetchEvents();

    cycle = new Cycle(2, 2);
    cycleDisplay();

})

function cycleDisplay(){ 

    cycle.i++    
    if (cycle.i > cycle.cycleMax){
        cycle.i = (cycle.cycleMax - cycle.cycleRange); 
    }
    
    document.getElementById("display").style.backgroundImage = "url(" + eventData.images[cycle.i] + ")";
    //setTimeout(cycleDisplay, 5000);
    


    console.log("eventData.id[cycle.i] = " + eventData.id[cycle.i]);
    console.log("heventData.name[cycle.i] = " + eventData.name[cycle.i]);
    console.log("cycle.i = " + cycle.i)
}

class EventData{
    constructor(){
        this.events = []; 
        this.id = [];
        this.name = [];
        //-----placeholder-----//        
        this.images = ["https://cykelrundan.se/wp-content/uploads/2017/03/Concert-Event-14-1024x684.jpg",
                       "https://resources.mynewsdesk.com/image/upload/c_limit,dpr_2.625,f_auto,h_700,q_auto,w_360/kzygi5xu9ta3gtdijmig.jpg",
                       "https://tolvstockholm.se/wp-content/uploads/2019/04/tolvkonferensstockholm-1218x420.jpg"]
        //--------------------//       
    }   
    
    async fetchEvents() {
        await fetch("./data/events.json")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.events.length; i++) {
                this.events.push(data.events[i]);
                this.id.push(data.events[i].id);
                this.name.push(data.events[i].name);
            }
        });        

        console.log(this.events);
        console.log(this.id);
        console.log(this.name);
    }
}

class Cycle{
    constructor(cycleRange, cycleMax){
        this.cycleRange = cycleRange;
        this.cycleMax = cycleMax;
        this.i = (this.cycleMax - this.cycleRange);
    }
}