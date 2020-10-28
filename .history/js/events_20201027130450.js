
class Eventlist {
    constructor(eventlist) {
        this.events = eventlist
        this.filter = {
            memory: [],
            add(input) {
                this.memory.push(input)
            },
            remove(input) {
                this.memory.splice(this.memory.indexOf(input), 1)
            }
        }
        this.div = {
            upcoming: document.getElementById('upcomingEvents'),
            past: document.getElementById('pastEvents'),
            filter: document.getElementById('filter'),
            sort: document.getElementById('sort')
        }
        this.updateEvents()
        this.eventListeners()
    }

    updateEvents() {
        this.removeEvents(this.div.upcoming, this.div.past)
        this.addEvents(this.sortEvents(this.events))
    }

    removeEvents(upcoming, past) {
        while (upcoming.childNodes.length) {
            upcoming.removeChild(upcoming.lastChild);
        }
        while (past.childNodes.length) {
            past.removeChild(past.lastChild);
        }
    }

    sortEvents(events) {
        let dateRadio = document.getElementById('date')
        
        if (dateRadio.checked == true) {            
            events.sort(function(a, b){return new Date(a.startDatetime) - new Date(b.startDatetime)});
        }
        else {
            events.sort(function(a, b){return a.name.localeCompare(b.name)});
        }
        return events
    }

    addEvents(events) {
        let now = new Date()
    
        for (let event of events) {
            let eventDate = new Date(event.startDatetime)
    
            if (eventDate > now) {
                this.div.upcoming.appendChild(assembleEventNode(event, this.filter.memory))
            } else this.div.past.appendChild(assembleEventNode(event, this.filter.memory))
    
            function assembleEventNode(event, filterMemory) {
                let eventLink = Object.assign(document.createElement('a'),{href:'event.html?eventid=' + event.id})
                let wrapper = Object.assign(document.createElement('div'),{classList:'event'})
                wrapper.setAttribute('category', event.category)
        
                let imageDiv = Object.assign(document.createElement('div'),{classList:'thumbnail'})
                let image = Object.assign(document.createElement('img'),{src: event.image})
                imageDiv.appendChild(image)
        
                let infoDiv = document.createElement('div')
                let title = Object.assign(document.createElement('h2'),{innerHTML: event.name})
                let address = Object.assign(document.createElement('p'),{innerHTML: event.address})
                let date = Object.assign(document.createElement('h3'),{innerHTML: event.startDatetime.replace("T", ", Kl ").slice(0, -3)})
        
                infoDiv.appendChild(title)
                infoDiv.appendChild(date)
                infoDiv.appendChild(address)
                
                wrapper.appendChild(imageDiv)
                wrapper.appendChild(infoDiv)
                                
                eventLink.appendChild(wrapper)
                
                if (filterMemory.includes(event.category)){
                    eventLink.classList.add('hidden')
                }
    
                return eventLink
            }
        }
    }

    eventListeners() {
        let eventDivs = document.getElementsByClassName('event')
        
        this.div.sort.addEventListener('change', () => {
            this.updateEvents()
        })
    
        this.div.filter.addEventListener('click', (e) => {
            if (!isCategory()) {
                return
            }
            
            if (!isFiltered()) {
                this.filter.add(e.target.id)
                e.target.classList.add('filtered')
    
                for (let event of eventDivs) {
                    hideCategoryEvent(event)
                }
            }
            else {
                this.filter.remove(e.target.id)
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
                    event.parentNode.classList.add('hidden')
                }
            }
            function unhideCategoryEvent(event) {
                if(event.getAttribute('category') == e.target.id) {
                    event.parentNode.classList.remove('hidden')
                }
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', async function(){  
    let eventList = new Eventlist(await fetchEvents())
    console.log(app.events)
})

async function fetchEvents() {
    let file = new Request('../data/events.json')
    let fetched = await fetch(file)
    .then(response => response.json())
    .then(data => {return data})
    return fetched.events
}