document.addEventListener('DOMContentLoaded', async function(){

    const eventListDiv = document.querySelector('.eventList')
    const guestsListDiv = document.querySelector('.guestsList')
    const adminsListDiv = document.querySelector('.adminsList')

    let now = new Date()
    let guests = []
    let admins = []

    let events = await fetchEvents()

    showEvents(events, eventListDiv)

})

async function fetchEvents() {
    await fetch("../data/events.json")
    .then(response => response.json())
    .then(json => {
        console.log(json.events)
        return json.events
    });
}

function showEvents(events, outputElement){
    console.log(events, outputElement)
    events.forEach(event => {
        let div =  document.createElement('div')
        div.textContent = event.name
        outputElement.appendChild(div)
    })
}

function showEvent(eventID){
    //Show one event
    showGuests(eventID)
    showAdmins(eventID)
}
function showGuests(eventID){
    //Show event guests
}
function showAdmins(eventID){
    //Show event admins
}