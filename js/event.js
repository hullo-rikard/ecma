document.addEventListener("DOMContentLoaded", function(e) {    
    let events = new Events();
    setTimeout(() => {
        console.log("timeout");
        events.displayEventById(1);;
    }, 100);
})

class Events {
    constructor() {
        this.events = [];
        this.getEvents();
    }
    async getEvents() {
        await fetch("data/events_copy.json")
        .then(response => response.json())
        .then(data => {
            for (let item of data.events) {
                this.events.push(new Event(item));
            }
        });
    }
    displayEventById(id) {
        let event = this.events.find(entry => entry.id == id);
        event.displayEvent();
    }
}

class Event {
    constructor(event) {
        this.id = event.id;
        this.name = event.name;
        this.info = event.info;
        this.address = event.address;
        this.venue = event.venue;
        this.startDatetime = event.startDatetime;
        this.endDatetime = event.endDatetime;
        this.tickets = event.tickets;
        this.category = event.category;
        this.image = event.image;
        this.displayingImg = event.image;
        this.images = event.images;
        this.members = event.members;
        this.admins = event.members.admins;
        this.guests = event.members.guests;
        this.guestbook = event.guestbook;
    }
    displayEvent() {
        let container = document.getElementsByTagName("main")[0];
        //// images ////
        let imgContainer = document.createElement("div");
        imgContainer.className = "imgContainer";
        container.appendChild(imgContainer);
        
        let img = document.createElement("div");
        img.className = "eventImg";
        img.style.backgroundImage = "url(" + this.image + ")";
        img.addEventListener("click", e => {
            this.popupImg(this.displayingImg);
        })
        imgContainer.appendChild(img);

        let imgBar = document.createElement("div");
        imgBar.className = "imgBar";
        imgContainer.appendChild(imgBar);
        for (let image of this.images) {
            let thumb = document.createElement("div");
            thumb.style.backgroundImage = "url(" + image + ")";
            thumb.className = "thumb";
            imgBar.appendChild(thumb);
            console.log(thumb);
            thumb.addEventListener("click", e => {
                img.style.backgroundImage = "url(" + image + ")";
                this.displayingImg = image;
            })
        }
        
        //// info containers////
        let infoSection = document.createElement("div");
        container.appendChild(infoSection);
        let infoTop = document.createElement("div");
        let info = document.createElement("div");
        let infoBottom = document.createElement("div");
        infoSection.className = "infoSection";
        infoTop.className = "infoTop";
        info.className = "info";
        infoBottom.className = "infoBottom";
        infoSection.appendChild(infoTop);
        infoSection.appendChild(info);
        infoSection.appendChild(infoBottom);

        //// info material ////
        let header = document.createElement("h1");
        header.innerHTML = this.name;
        infoTop.appendChild(header);
        console.log(header);

        let infoText = document.createElement("p");
        infoText.innerHTML = this.info;
        info.appendChild(infoText);

        let availability = document.createElement("p");        
        let ticketsButton = document.createElement("button");
        ticketsButton.innerHTML = "BOOK TICKETS"
        infoBottom.appendChild(availability);
        infoBottom.appendChild(ticketsButton);
        if (this.tickets - this.guests.length >= 50) {
            availability.innerHTML = "Tickets available!";
        } else if (this.tickets - this.guests.length < 50 && this.tickets - this.guests.length > 0) {
            availability.innerHTML = "Few tickets left!";
        } else {
            ticketsButton.remove();
            availability.innerHTML = "Sold out!";
            let notify = document.createElement("p");
            let email = document.createElement("input");
            let submit = document.createElement("button");
            notify.innerHTML = "Notify me if tickets become available:";
            email.placeholder = "Email";
            submit.innerHTML = "submit";
            submit.className = "notify"
            infoBottom.appendChild(notify);
            infoBottom.appendChild(email);
            infoBottom.appendChild(submit);

        }
        
    }
    popupImg(url) {
        let bg = document.createElement("div");
        bg.className = "popupBG";
        document.getElementsByTagName("body")[0].appendChild(bg);

        let image = document.createElement("img");
        image.src = url;
        image.className = "popupImg";
        bg.appendChild(image);

        bg.addEventListener("click", function(e) {
            this.remove();
        })
        console.log("popup");
    }

    
}

