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

    let eventsFile = await fetchEvents()
    let events = eventsFile[Object.keys(eventsFile)[0]]

    Object.keys(events).reverse().forEach(function(index) {
        let eventDate = new Date(events[index].startDatetime)
        if (eventDate < now) {
            pastEvents.push(events[index])
        }
        else {
            upcomingEvents.push(events[index])
        }
    });
    addEvents(upcomingEvents,upcomingEventsDiv)
    addEvents(pastEvents,pastEventsDiv)


})

async function fetchEvents() {
    let file = new Request('../data/events.json')
    let output = await fetch(file)
    .then(response => response.json())
    .then(data => {return data})
    return output
}

function addEvents(inputArray, outputDiv) {
    for (let event of inputArray) {
        console.log(event)
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