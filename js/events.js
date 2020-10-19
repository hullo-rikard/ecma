let filteredCategories = []

document.addEventListener('DOMContentLoaded', async function(){  
    let events = await fetchEvents()
    updateEvents(events)
    eventListeners(events)
})

async function fetchEvents() {
    let file = new Request('../data/events.json')
    let fetched = await fetch(file)
    .then(response => response.json())
    .then(data => {return data})
    return fetched.events
}

function updateEvents(events) {
    removeEvents()
    addEvents(sortEvents(events))
}

function sortEvents(events) {
    let dateRadio = document.getElementById('date')
    
    if (dateRadio.checked == true) {            
        events.sort(function(a, b){return new Date(a.startDatetime) - new Date(b.startDatetime)});
    }
    else {
        events.sort(function(a, b){return a.name.localeCompare(b.name)});
    }
    return events
}

function removeEvents() {
    let upcomingEventsDiv = document.getElementById('upcomingEvents')
    let pastEventsDiv = document.getElementById('pastEvents')

    while (upcomingEventsDiv.childNodes.length) {
        upcomingEventsDiv.removeChild(upcomingEventsDiv.lastChild);
    }
    while (pastEventsDiv.childNodes.length) {
        pastEventsDiv.removeChild(pastEventsDiv.lastChild);
    }
}

function addEvents(events) {
    let upcomingEventsDiv = document.getElementById('upcomingEvents')
    let pastEventsDiv = document.getElementById('pastEvents')
    let now = new Date()

    for (let event of events) {
        let eventLink = document.createElement('a')
        eventLink.href = "event.html?eventid={eventid}"

        let outerDiv = document.createElement('div')
        outerDiv.classList.add('event')
        outerDiv.setAttribute('category', event.category)
        
        if (filteredCategories.includes(event.category)){
            outerDiv.classList.add('hidden')
        }

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
        date.innerHTML = event.startDatetime.replace("T", ", Kl ").slice(0, -3)

        infoDiv.appendChild(title)
        infoDiv.appendChild(date)
        infoDiv.appendChild(address)

        outerDiv.appendChild(imageDiv)
        outerDiv.appendChild(infoDiv)

        eventLink.appendChild(outerDiv)

        let eventDate = new Date(event.startDatetime)

        if (eventDate > now) {
            upcomingEventsDiv.appendChild(eventLink)
        } else pastEventsDiv.appendChild(eventLink)
    }
}

function eventListeners(events) {
    let eventDivs = document.getElementsByClassName('event')
    let filter = document.getElementById('filter')
    let sort = document.getElementById('sort')
    
    sort.addEventListener('change', function(){
        updateEvents(events)
    })

    filter.addEventListener('click', function(e){
        if (!e.target.classList.contains('filterChoice')) {
            return
        }
        if (!e.target.classList.contains('filtered')) {
            filteredCategories.push(e.target.id)
            e.target.classList.add('filtered')

            for (let event of eventDivs) {
                if(event.getAttribute('category') == e.target.id) {
                    event.classList.add('hidden')
                }
            }
        }
        else {
            filteredCategories.splice(filteredCategories.indexOf(e.target.id), 1)
            e.target.classList.remove('filtered')
            
            for (let event of eventDivs) {
                if(event.getAttribute('category') == e.target.id) {
                    event.classList.remove('hidden')
                }
            }
        }
    })
}