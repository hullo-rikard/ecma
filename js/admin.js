function isEditable(boolean){
    clearGuestsAndAdmins()
    if(boolean){
        document.querySelector('.createEvent').innerHTML = "Ändra event"
        document.querySelector('form button').innerHTML = "Spara ändringar!"
    } else {
        document.querySelector('.createEvent').innerHTML = "Skapa nytt event<br><span>(eller klicka på ett event till vänster för att ändra)</span>"
        document.querySelector('form button').innerHTML = "Skapa event!"
        document.querySelector('#eventID').value = ""
        let allInputs = document.querySelectorAll('input:not([type=file]), select, textarea')
        allInputs.forEach(element => {
            element.value = ""
        })
    }
}
function clearGuestsAndAdmins(){
    document.querySelector('.guestsList').innerHTML = ""
    document.querySelector('.adminsList').innerHTML = ""
}

document.addEventListener('DOMContentLoaded', async () => {

    const ui = {
        eventListDiv: document.querySelector('.eventList'),
        guestsListDiv: document.querySelector('.guestsList'),
        adminsListDiv: document.querySelector('.adminsList'),
        newEventBtn: document.querySelector('.newEvent'),
    }

    const eventListDiv = document.querySelector('.eventList')
    const guestsListDiv = document.querySelector('.guestsList')
    const adminsListDiv = document.querySelector('.adminsList')
    const newEventBtn = document.querySelector('.newEvent')

    //TODO: check if localstorage is used

    let events = await fetchEvents()

    showEvents(events, ui)

    eventListDiv.addEventListener('click', (event) => {
        if(event.target.getAttribute('eventid')){
            let thisevent = getEventByEventID(events, parseInt(event.target.getAttribute('eventid')))
            showEvent(thisevent, ui)
            console.log(thisevent)
        }
    })
    newEventBtn.addEventListener('click', () => { isEditable(false) })
})



async function fetchEvents() {
    let data = await fetch("../data/events.json")
    .then(response => response.json())
    .then(json => {
        return json.events
    })
    return data
}

function showEvents(events, ui){
    events.forEach(event => {
        let div =  document.createElement('div')
            div.setAttribute('eventid', event.id)
            div.textContent = event.name
        ui.eventListDiv.appendChild(div)
    })
}

function showEvent(thisevent, ui){
    //Show one event
    fillForm(thisevent, ui)
    showGuests(thisevent, ui)
    showAdmins(thisevent, ui)
}
function showGuests(thisevent, ui){
    thisevent.members.guests.forEach((guest, key) => {
        let div =  document.createElement('div')
        let icon = document.createElement('div')
            icon.className = 'delete'
            icon.setAttribute('id', key)
            div.textContent = guest.name
            div.appendChild(icon)
            ui.guestsListDiv.appendChild(div)
    })
}
function showAdmins(thisevent, ui){
    thisevent.members.admins.forEach((admin, key) => {
        let div =  document.createElement('div')
        let icon = document.createElement('div')
            icon.className = 'delete'
            icon.setAttribute('id', key)
            div.textContent = admin.username
            div.appendChild(icon)
            ui.adminsListDiv.appendChild(div)
    })
}
function fillForm(thisevent, ui) {
    isEditable(true)
    let allInputs = document.querySelectorAll('input:not([type=file]), select, textarea')
    allInputs.forEach(element => {
        element.value = thisevent[element.name]
    })
    //TODO: handle image
}



//this function should maybe be in the main.js file
function getEventByEventID(eventsArray, ID){
    for (var i=0; i < eventsArray.length; i++) {
        if (eventsArray[i].id === ID) {
            return eventsArray[i];
        }
    }
}

class Event {
    constructor(event) {
        this.id = event.id;
        this.name = event.name;
        this.info = event.description;
        this.address = event.address;
        this.venue = event.venue;
        this.startDatetime = event.startDatetime;
        this.endDatetime = event.endDatetime;
        this.tickets = event.tickets;
        this.category = event.category;
        this.image = event.image;
        this.displayingImg = event.image;
        this.images = event.images;
        this.admins = event.members.admins;
        this.guests = event.members.guests;
        this.guestbook = event.guestbook;
    }
}