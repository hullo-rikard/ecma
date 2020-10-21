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
        let eventDate = new Date(event.startDatetime)

        if (eventDate > now) {
            upcomingEventsDiv.appendChild(assembleEventNode(event))
        } else pastEventsDiv.appendChild(assembleEventNode(event))

        function assembleEventNode(event) {
            let eventLink = Object.assign(document.createElement('a'),{href:'event.html?eventid={eventid}'})
            let outerDiv = Object.assign(document.createElement('div'),{classList:'event'})
            outerDiv.setAttribute('category', event.category)
    
            let imageDiv = Object.assign(document.createElement('div'),{classList:'thumbnail'})
            let image = Object.assign(document.createElement('img'),{src:'../img/defaultEvent.jpg'})
            imageDiv.appendChild(image)
    
            let infoDiv = document.createElement('div')
            let title = Object.assign(document.createElement('h2'),{innerHTML: event.name})
            let address = Object.assign(document.createElement('p'),{innerHTML: event.address})
            let date = Object.assign(document.createElement('h3'),{innerHTML: event.startDatetime.replace("T", ", Kl ").slice(0, -3)})
    
            infoDiv.appendChild(title)
            infoDiv.appendChild(date)
            infoDiv.appendChild(address)
            
            outerDiv.appendChild(imageDiv)
            outerDiv.appendChild(infoDiv)
            
            if (filteredCategories.includes(event.category)){
                outerDiv.classList.add('hidden')
            }

            eventLink.appendChild(outerDiv)

            return eventLink
        }
    }
}

function eventListeners(events) {
    let eventDivs = document.getElementsByClassName('event')
    let filterDiv = document.getElementById('filter')
    let sortDiv = document.getElementById('sort')
    
    sortDiv.addEventListener('change', function(){
        updateEvents(events)
    })

    filterDiv.addEventListener('click', function(e){
        if (!isCategory()) {
            return
        }
        
        if (!isFiltered()) {
            filteredCategories.push(e.target.id)
            e.target.classList.add('filtered')

            for (let event of eventDivs) {
                hideCategoryEvent(event)
            }
        }
        else {
            filteredCategories.splice(filteredCategories.indexOf(e.target.id), 1)
            e.target.classList.remove('filtered')
            
            for (let event of eventDivs) {
                unhideCategoryEvent(event)
            }
        }
        function isCategory() {
            if(e.target.classList.contains('filterChoice')) {
                return true
            }
        }
        function isFiltered() {
            if(e.target.classList.contains('filtered')) {
                return true
            }
        }
        function hideCategoryEvent(event) {
            if(event.getAttribute('category') == e.target.id) {
                event.classList.add('hidden')
            }
        }
        function unhideCategoryEvent(event) {
            if(event.getAttribute('category') == e.target.id) {
                event.classList.remove('hidden')
            }
        }
    })
}