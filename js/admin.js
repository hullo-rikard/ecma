App.prototype.showEvents = function() {
    for (let event of this.events) {
        let div =  document.createElement('div')
            div.setAttribute('eventid', event.id)
            div.textContent = event.name
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
    let allInputs = document.querySelectorAll('input:not([type=file]), select, textarea')
    allInputs.forEach(element => {
        element.value = thisevent[element.name]
    })
    //TODO: handle image
}
App.prototype.showGuests = function(thisevent) {
    thisevent.members.guests.forEach((guest, key) => {
        let div =  document.createElement('div')
        let icon = document.createElement('div')
            icon.className = 'delete'
            icon.setAttribute('id', key)
            div.textContent = guest.name
            div.appendChild(icon)
            this.ui.guestsListDiv.appendChild(div)
    })
}
App.prototype.showAdmins = function(thisevent) {
    thisevent.members.admins.forEach((admin, key) => {
        let div =  document.createElement('div')
        let icon = document.createElement('div')
            icon.className = 'delete'
            icon.setAttribute('id', key)
            div.textContent = admin.username
            div.appendChild(icon)
            this.ui.adminsListDiv.appendChild(div)
    })
}
App.prototype.clearGuestsAndAdmins = function() {
    this.ui.guestsListDiv.innerHTML = ""
    this.ui.adminsListDiv.innerHTML = ""
}
App.prototype.isEditable = function(boolean) {
    this.clearGuestsAndAdmins()
    if(boolean){
        this.ui.createEvent.innerHTML = "Ändra event"
        this.ui.formButton.innerHTML = "Spara ändringar!"
    } else {
        this.ui.createEvent.innerHTML = "Skapa nytt event<br><span>(eller klicka på ett event till vänster för att ändra)</span>"
        this.ui.formButton.innerHTML = "Skapa event!"
        document.querySelector('#eventID').value = ""
        let allInputs = document.querySelectorAll('input:not([type=file]), select, textarea')
        allInputs.forEach(element => {
            element.value = ""
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {

    app.ui = {
        eventListDiv: document.querySelector('.eventList'),
        guestsListDiv: document.querySelector('.guestsList'),
        adminsListDiv: document.querySelector('.adminsList'),
        newEventBtn: document.querySelector('.newEvent'),
        createEvent: document.querySelector('.createEvent'),
        formButton: document.querySelector('form button')
    }

    app.showEvents()

    app.ui.eventListDiv.addEventListener('click', (event) => {
        if(event.target.getAttribute('eventid')){
            app.showEvent(event.target.getAttribute('eventid'))
        }
    })

    app.ui.newEventBtn.addEventListener('click', () => { 
        app.isEditable(false) 
    })

})