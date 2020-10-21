document.addEventListener("DOMContentLoaded", function(e) {    

    
    let events = new Events();
    setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let id = parseInt(urlParams.get("id"));
        console.log(typeof id);
        events.displayEventById(id);
    }, 100);


})

class Events {
    constructor() {
        this.events = [];
        this.getEvents();
    }
    async getEvents() {
        await fetch("data/events.json") // data/events.json
        .then(response => response.json())
        .then(data => {
            for (let item of data.events) {
                this.events.push(new Event(item));
            }
        });
    }
    displayEventById(id) {
        if (typeof id == "number") {
            let event = this.events.find(entry => entry.id == id);
            event.displayEvent();
        } else {
            this.events[0].displayEvent();
        }
    }
}

class Event {
    constructor(event) {
        this.id = event.id;
        this.name = event.name;
        this.info = event.description; // description
        this.address = event.address;
        this.venue = event.venue;
        this.startDatetime = event.startDatetime;
        this.endDatetime = event.endDatetime;
        this.tickets = event.tickets;
        this.category = event.category;
        this.image = event.image;
        this.displayingImg = event.image;
        this.images = event.images;
        this.images.push(this.image);
        this.members = event.members;
        this.admins = event.members.admins;
        this.guests = event.members.guests;
        this.guestbook = event.guestbook;
    }
    displayEvent() {
        //// images ////
        let img = document.querySelector(".eventImg");
        console.log(img);
        img.style.backgroundImage = "url(" + this.image + ")";
        img.addEventListener("click", e => {
            this.popupImg(this.displayingImg);
        })

        let imgBar = document.querySelector(".imgBar");
        for (let image of this.images) {
            let thumb = document.createElement("div");
            thumb.style.backgroundImage = "url(" + image + ")";
            thumb.className = "thumb";
            imgBar.appendChild(thumb);
            thumb.addEventListener("click", e => {
                img.style.backgroundImage = "url(" + image + ")";
                this.displayingImg = image;
            })
        }
        
        //// info containers////
        let infoSection = document.getElementById("infoSection");
        let infoTop = infoSection.firstElementChild;
        let info = infoSection.children[1];
        let infoBottom = infoSection.children[2];

        //// info material ////
        let header = infoTop.firstElementChild;
        header.innerHTML = this.name;

        let infoText = info.firstElementChild;
        infoText.innerHTML = this.info;

        let availability = infoBottom.firstElementChild;     
        let bookDiv = infoBottom.children[1];  
        let ticketsButton = bookDiv.firstElementChild;
        ticketsButton.addEventListener("click", this.bookTickets.bind(this));

        if (this.tickets - this.guests.length < 50 && this.tickets - this.guests.length > 0) {
            availability.innerHTML = "Few tickets left!";
        } else if (this.tickets - this.guests.length < 0) {
            availability.innerHTML = "Sold out!";
            let notifyDiv = document.createElement("div");
            let notify = document.createElement("p");
            let email = document.createElement("input");
            notify.innerHTML = "Notify me if tickets become available:";
            email.placeholder = "Email";
            ticketsButton.innerHTML = "submit";
            ticketsButton.className = "notify";

            bookDiv.insertBefore(notifyDiv, ticketsButton);
            notifyDiv.appendChild(notify);
            notifyDiv.appendChild(email);
            // container.appendChild(submit);

        }
        
    }
    bookTickets() {
        //TODO: popup book tickets
        let bg = document.createElement("div");
        bg.className = "popupBG";
        document.getElementsByTagName("body")[0].appendChild(bg);
        let bookDiv = document.createElement("div");
        bookDiv.className = "bookDiv";
        bg.appendChild(bookDiv);

        let form = document.createElement("form");
        bookDiv.appendChild(form);
        let number = document.createElement("input");
        let email = document.createElement("input");
        let creditCard = document.createElement("input");
        let button = document.createElement("button");
        let cancel = document.createElement("button");
        
        number.type = "number";
        number.max  = this.tickets - this.guests.length;
        number.min  = 1;
        number.placeholder = "Number of tickets"
        number.required = true;
        email.placeholder = "Email";
        email.required = true;
        creditCard.placeholder = "Credit card number";
        creditCard.required = true;
        button.innerHTML = "Book tickets";
        button.type      = "submit";
        cancel.innerHTML = "Cancel";
        cancel.type      = "submit";

        
        form.appendChild(number);
        form.appendChild(email);
        form.appendChild(creditCard);
        form.appendChild(button);
        form.appendChild(cancel);

        form.onsubmit = (e) => {
            e.preventDefault();
            //// check that name is not only spaces 
            let trimmed = email.value.trim();
            if (trimmed.length > 0 && tryParse(creditCard.value) && creditCard.value.length >= 15) { 
                let nextId = 1;
                let info = {
                    event: this.name,
                    id: this.id,

                    creditCard: creditCard,
                    purchaseId: nextId
                };

                //// store values 
                localStorage.setItem("form", JSON.stringify(info));

                this.startQuiz(info); //// START QUIZ 
            } else {
                alert("Please check your info again")
            }
            form.remove();
            let confirmDiv = document.createElement("div");
            let confirm = document.createElement("p");
            let button = document.createElement("button");
            confirmDiv.className = "confirm";
            confirm.innerHTML = "A confirmation has been sent to your email. Thank you for your purchase."
            button.innerHTML = "OK";
            bookDiv.appendChild(confirmDiv);
            confirmDiv.appendChild(confirm);
            confirmDiv.appendChild(button);
            button.addEventListener("click", e => {
                bg.remove();
            })
        }

        cancel.addEventListener("click", e => {
            bg.remove();
        });
        
    }

    //// when click on large image ////
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
    }

    
}

