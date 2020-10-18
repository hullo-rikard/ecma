/*
let eventTime = new Date("2020-10-22 11:11:23")
let now = new Date()
console.log("Event: "+eventTime)
console.log("Now: "+now)

if (eventTime > now) {
    console.log("the event has not passed")
}
*/

/*
console.log(Date.parse("0020-10-22 11:11:23"))
console.log(Date.parse(Date()))
*/

document.addEventListener('DOMContentLoaded', async function(){
    let now = new Date()
    let pastEvents = []
    let upcomingEvents = []
    let upcomingEventsDiv = document.getElementById('upcomingEvents')
    let pastEventsDiv = document.getElementById('pastEvents')

    let events = await fetchEvents()

    Object.keys(events).forEach(function(index) {
        let eventDate = new Date(events[index].startDatetime)
        if (eventDate < now) {
            pastEvents.push(events[index])
        }
        else {
            upcomingEvents.push(events[index])
        }
    });
    
    console.log(events)

    

    upcomingEvents.sort(function(a, b){return new Date(a.startDatetime) - new Date(b.startDatetime)});
    
    addEvents(upcomingEvents,upcomingEventsDiv)
    addEvents(pastEvents,pastEventsDiv)

    let sort = document.getElementById('sort')

    sort.addEventListener('change', function(){
        let dateRadio = document.getElementById('date')

        while (upcomingEventsDiv.childNodes.length) {
            upcomingEventsDiv.removeChild(upcomingEventsDiv.lastChild);
        }
        while (pastEventsDiv.childNodes.length) {
            pastEventsDiv.removeChild(pastEventsDiv.lastChild);
        }

        if (dateRadio.checked == true) {
            upcomingEvents.sort(function(a, b){return new Date(a.startDatetime) - new Date(b.startDatetime)});
            pastEvents.sort(function(a, b){return new Date(a.startDatetime) - new Date(b.startDatetime)});
            addEvents(upcomingEvents,upcomingEventsDiv)
            addEvents(pastEvents,pastEventsDiv)
        }
        else {
            upcomingEvents.sort(function(a, b){return a.name.localeCompare(b.name)});
            pastEvents.sort(function(a, b){return a.name.localeCompare(b.name)});
            addEvents(upcomingEvents,upcomingEventsDiv)
            addEvents(pastEvents,pastEventsDiv)
        }
    })

    let filter = document.getElementById('filter')
    let filteredCat = []
    filter.addEventListener('click', function(e){
        if (!e.target.classList.contains('filterChoice')) {
            return
        }

        if (!filteredCat.includes(e.target.innerHTML)) {
            e.target.classList.add('filtered')
            filteredCat.push(e.target.innerHTML)
        }
        else {
            e.target.classList.remove('filtered')
            filteredCat.splice(filteredCat.indexOf(e.target.innerHTML), 1)
        }

        while (upcomingEventsDiv.childNodes.length) {
            upcomingEventsDiv.removeChild(upcomingEventsDiv.lastChild);
        }
        while (pastEventsDiv.childNodes.length) {
            pastEventsDiv.removeChild(pastEventsDiv.lastChild);
        }

        
    })

})

async function fetchEvents() {
    let file = new Request('../data/events.json')
    let output = await fetch(file)
    .then(response => response.json())
    .then(data => {return data})
    return output.events
}

function addEvents(inputArray, outputDiv) {
    for (let event of inputArray) {
        let outerDiv = document.createElement('div')
        outerDiv.classList.add('event')

        let imageDiv = document.createElement('div')
        imageDiv.classList.add('thumbnail')
        let image = document.createElement('img')
        image.src = '../img/defaultEvent.jpg'
        imageDiv.appendChild(image)

        let infoDiv = document.createElement('div')

        let title = document.createElement('h2')
        title.innerHTML = event.name

        let address = document.createElement('p')
        address.innerHTML = event.address


        let date = document.createElement('h3')
        date.innerHTML = event.startDatetime

        infoDiv.appendChild(title)
        infoDiv.appendChild(date)
        infoDiv.appendChild(address)

        outerDiv.appendChild(imageDiv)
        outerDiv.appendChild(infoDiv)

        outputDiv.appendChild(outerDiv)
    }
}