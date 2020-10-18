//this function should maybe be in the main.js file
function getEventByEventID(eventsArray, ID){
    for (var i=0; i < eventsArray.length; i++) {
        if (eventsArray[i].id === ID) {
            return eventsArray[i];
        }
    }
}

document.addEventListener('DOMContentLoaded', async () => {

    const eventListDiv = document.querySelector('.eventList')
    const guestsListDiv = document.querySelector('.guestsList')
    const adminsListDiv = document.querySelector('.adminsList')

    let now = new Date()
    let guests = []
    let admins = []

    //TODO: check if localstorage is used

    let events = await fetchEvents()

    showEvents(events, eventListDiv)

    eventListDiv.addEventListener('click', (event) => {
        if(event.target.getAttribute('eventid')){
            let thisevent = getEventByEventID(events, parseInt(event.target.getAttribute('eventid')) )
            fillInputs(thisevent)
        }
    })
})


async function fetchEvents() {
    let data = await fetch("../data/events.json")
    .then(response => response.json())
    .then(json => {
        return json.events
    })
    return data
}

function showEvents(events, outputDiv){
    console.log(events)
    events.forEach(event => {
        let div =  document.createElement('div')
            div.setAttribute('eventid', event.id)
            div.textContent = event.name
        outputDiv.appendChild(div)
    })
}

function showEvent(eventID){
    console.log('showEvent() called!')
    //Show one event
    showGuests(eventID)
    showAdmins(eventID)
}
function showGuests(eventID){
    console.log('showGuests() called!')
    //Show event guests
}
function showAdmins(eventID){
    console.log('showAdmins() called!')
    //Show event admins
}

function fillInputs(thisevent) {
    let allInputs = document.querySelectorAll('input:not([type=file]), select')
    allInputs.forEach(element => {
        element.value = thisevent[element.name]
    })
    //TODO: handle textarea
    //TODO: handle image
}