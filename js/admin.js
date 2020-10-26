App.prototype.showEvents = function() {
    this.ui.eventListDiv.innerHTML = ""
    for (let event of this.events) {
        let div =  document.createElement('div')
        let icon = document.createElement('div')
            icon.className = 'delete'
            icon.setAttribute('id', event.id)
            div.setAttribute('eventid', event.id)
            div.textContent = event.name
            div.appendChild(icon)
        app.ui.eventListDiv.appendChild(div)
    }
}
App.prototype.showEvent = function(ID) {
    let thisevent = this.getEventByEventID(ID)
    this.fillForm(thisevent)
    this.showGuests(thisevent)
    this.showAdmins(thisevent)
}
App.prototype.fillForm = function(thisevent) {
    this.isEditable(true)
    let allInputs = document.querySelectorAll('form input:not([type=file]), form select, form textarea')
    allInputs.forEach(element => {
        element.value = thisevent[element.name]
    })
    let i = 0
    thisevent.images.forEach(element => {
        let input = document.createElement('input')
            input.setAttribute('type', 'test')
            input.setAttribute('name', 'images-'+i)
            input.setAttribute('id', 'images-'+i)
            input.setAttribute('class', 'images')
            input.setAttribute('value', element)
        document.querySelector('form').appendChild(input)
        i++
    })
    //TODO: handle multiple images
}
App.prototype.showGuests = function(thisevent) {
    this.ui.guestsListDiv.innerHTML = ""
    thisevent.members.guests.forEach((guest, key) => {
        let div =  document.createElement('div')
        let icon = document.createElement('div')
            icon.className = 'delete'
            icon.setAttribute('id', key)
            icon.setAttribute('eventid', thisevent.id)
            div.textContent = guest.name
            div.appendChild(icon)
        this.ui.guestsListDiv.appendChild(div)
    })
}
App.prototype.showAdmins = function(thisevent) {
    this.ui.adminsListDiv.innerHTML = ""
    thisevent.members.admins.forEach((admin, key) => {
        let div =  document.createElement('div')
        let icon = document.createElement('div')
            icon.className = 'delete'
            icon.setAttribute('id', key)
            icon.setAttribute('eventid', thisevent.id)
            div.textContent = admin.username
            div.appendChild(icon)
        this.ui.adminsListDiv.appendChild(div)
    })
}
App.prototype.isEditable = function(boolean) {
    let images = document.querySelectorAll('.images')
    images.forEach(element => {
        element.remove()
    })
    this.showEvents()
    if(boolean){
        this.ui.createEvent.innerHTML = "Ändra event"
        this.ui.formButton.innerHTML = "Spara ändringar!"
    } else {
        this.ui.createEvent.innerHTML = "Skapa nytt event<br><span>(eller klicka på ett event till vänster för att ändra)</span>"
        this.ui.formButton.innerHTML = "Skapa event!"
        document.querySelector('#id').value = ""
        let allInputs = document.querySelectorAll('input:not([type=file]), select, textarea')
        allInputs.forEach(element => {
            element.value = ""
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        console.log(app)

        app.ui = {
            eventListDiv: document.querySelector('.eventList'),
            guestsListDiv: document.querySelector('.guestsList'),
            adminsListDiv: document.querySelector('.adminsList'),
            newEventBtn: document.querySelector('.newEvent'),
            createEvent: document.querySelector('.createEvent'),
            formButton: document.querySelector('button.eventbtn'),
            guestAddBtn: document.querySelector('button.addGuest'),
            adminAddBtn: document.querySelector('button.addAdmin')
        }

        app.showEvents()

        //clickhandler: show/delete event
        app.ui.eventListDiv.addEventListener('click', (event) => {
            if(event.target.getAttribute('eventid')){
                app.showEvent(event.target.getAttribute('eventid'))
            }
            if(event.target.getAttribute('class') == 'delete'){
                deleteEvent(event.target.getAttribute('id'))
            }
        })
        //clickhandler: add/update event
        app.ui.formButton.addEventListener('click', (e) => {
            let eventID = document.querySelector('#id').value
            if(eventID){
                updateEvent(eventID)
            } else {
                addEvent()
            }
        })
        //clickhandler: delete guest
        app.ui.guestsListDiv.addEventListener('click', (event) => {
            if(event.target.getAttribute('class') == 'delete') {
                deleteGuest(event.target.getAttribute('id'), event.target.getAttribute('eventid'))
            }
        })
        //clickhandler: delete admin
        app.ui.adminsListDiv.addEventListener('click', (event) => {
            if(event.target.getAttribute('class') == 'delete') {
                deleteAdmin(event.target.getAttribute('id'), event.target.getAttribute('eventid'))
            }
        })
        //clickhandler: empty form
        app.ui.newEventBtn.addEventListener('click', () => { 
            app.isEditable(false) 
        })

    }, 100);

})

function addEvent(){ //TODO: make this oop
    let newEvent = {}
    let allInputs = document.querySelectorAll('input:not([id=id]), select, textarea')

    newEvent.id = (app.events[app.events.length-1].id)+1
    newEvent.images = []
    newEvent.members = {}
    newEvent.members.admins = []
    newEvent.members.guests = []
    newEvent.guestbook = []
    
    allInputs.forEach(element => {
        newEvent[element.name] = element.value
    })

    app.events.push(newEvent)
    localStorage.setItem('events', JSON.stringify(app.events))
    app.isEditable(false)
}
function updateEvent(eventID){ //TODO: make this oop
    let updateEvent = app.getEventByEventID(eventID)
    let allInputs = document.querySelectorAll('input:not([id=id]), select, textarea')
    app.events[updateEvent.arrayKey].images = []
    allInputs.forEach(element => {
        if(element.classList.contains('images')){
            if(element.value){
                app.events[updateEvent.arrayKey].images.push(element.value)
            }
        } else {
            app.events[updateEvent.arrayKey][element.name] = element.value
        }
        
    })
    localStorage.setItem('events', JSON.stringify(app.events))
    app.isEditable(false)
}
function deleteEvent(eventID){ //TODO: make this oop
    if (confirm('Vill du ta bort eventet?')) {
        arrayKey = app.getEventByEventID(eventID).arrayKey
        app.events.splice(arrayKey, 1)
        localStorage.setItem('events', JSON.stringify(app.events))
        app.showEvents()
    }
}
function deleteGuest(id, eventid){ //TODO: make this oop
    if (confirm('Vill du ta bort gästen?')) {
        let eventArrayKey = app.getEventByEventID(eventid).arrayKey
        app.events[eventArrayKey].members.guests.splice(id,1)
        localStorage.setItem('events', JSON.stringify(app.events))
        app.showGuests(app.events[eventArrayKey])
    }
}
function deleteAdmin(id, eventid){ //TODO: make this oop
    if (confirm('Vill du ta bort admin?')) {
        let eventArrayKey = app.getEventByEventID(eventid).arrayKey
        app.events[eventArrayKey].members.admins.splice(id,1)
        localStorage.setItem('events', JSON.stringify(app.events))
        app.showAdmins(app.events[eventArrayKey])
    }
}

function addGuest(){
    console.log('addGuest called!')
}
function addAdmin(){
    console.log('addAdmin called!')
}