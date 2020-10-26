class App {
    constructor(events) {
        this.events = events;
    }
    getEventByEventID(ID){
        for (var i=0; i < this.events.length; i++) {
            if (this.events[i].id === parseInt(ID)) {
                let tempEvent = this.events[i]
                tempEvent.arrayKey = i
                return tempEvent;
            }
        }
    }
}

async function fetchEvents() { //TODO? Ska denna kastas in i classen App?
    let data = await fetch("../data/events.json")
    .then(response => response.json())
    .then(json => {
        return json.events
    })
    return data
}

let app

//TODO: HÄR FINNS EN BUGG!! Om datan hämtas från .json-filen så awaitar den inte resultatet......
document.addEventListener('DOMContentLoaded', async () => { //TODO? Ska if-satsen kastas in i classen App?
    if(localStorage.getItem('events')){
        app = new App(JSON.parse(localStorage.getItem('events')))
    } else {
        let fetchResult = await fetchEvents()
        localStorage.setItem('events', JSON.stringify(fetchResult)) //denna verkar dock fungera då den sätts i webbläsaren
        app = new App(JSON.parse(localStorage.getItem('events'))) //denna fungerar inte
        //app = new App(await fetchResult) //denna fungerar inte
    }
    console.log(app)
})




document.addEventListener('DOMContentLoaded', function(){
    addHeader()
    addFooter()
})

function addHeader() {
    let body = document.getElementsByTagName('body')[0]
    
    let pseudoDiv = document.createElement('div')
    let header = document.createElement('header')
    
    let icon = document.createElement('embed')
    icon.src = 'img/acme-events.svg'
    let iconDiv = document.createElement('div')
    iconDiv.id = 'head-icon-div'
    iconDiv.appendChild(icon)

    let start = document.createElement('a')
    start.innerHTML = 'Start'
    start.href = 'index.html'
    
    let event = document.createElement('a')
    event.innerHTML = 'Event'
    event.href = 'events.html'
    
    let about = document.createElement('a')
    about.innerHTML = 'Om oss'
    about.href = 'omoss.html'

    let navDiv = document.createElement('div')
    navDiv.id = 'nav-div'

    navDiv.appendChild(start)
    navDiv.appendChild(event)
    navDiv.appendChild(about)
    
    header.appendChild(pseudoDiv)
    header.appendChild(iconDiv)
    header.appendChild(navDiv)

    body.prepend(header)
}

function addFooter() {
    let body = document.getElementsByTagName('body')[0]
    let footer = document.createElement('footer')

    let icon = document.createElement('embed')
    icon.src = 'img/acme-events2.svg'
    let iconDiv =  document.createElement('div')
    iconDiv.id = 'foot-icon-div'
    iconDiv.appendChild(icon)
    
    let copyRightDiv = document.createElement('div')
    copyRightDiv.id = 'copy-div'
    let year = document.createElement('span')
    year.innerHTML = '© 2010 — 2020'
    let yearDiv = document.createElement('div')
    yearDiv.appendChild(year)
    copyRightDiv.appendChild(yearDiv)
    
    let acme = document.createElement('span')
    acme.innerHTML = 'ACME Events'
    let acmeDiv = document.createElement('div')
    acmeDiv.appendChild(acme)
    copyRightDiv.appendChild(acmeDiv)
    
    let admin = document.createElement('a')
    admin.innerHTML = 'Admin'
    admin.href = 'admin.html'
    let adminDiv = document.createElement('div')
    adminDiv.id = 'admin-div'
    adminDiv.appendChild(admin)

    footer.appendChild(iconDiv)
    footer.appendChild(copyRightDiv)
    footer.appendChild(adminDiv)

    body.appendChild(footer)
}