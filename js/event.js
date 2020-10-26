document.addEventListener("DOMContentLoaded", function(e) {    

    
    let events = new Events();
    setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let id = parseInt(urlParams.get("eventid"));
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
        this.address = event.address;
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
        this.staff = event.members.staff;
        this.guests = event.members.guests;
        this.guestbook = event.guestbook;
        this.bookingBumber = event.bookingBumber;
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
        let date = document.querySelector(".date");
        let title = document.querySelector(".title");
        let category = document.querySelector(".category");
        let address = document.querySelector(".address");
        let infoText = document.querySelector(".infoText");
        let fulldate = document.querySelector(".fulldate");
        let guestBookName = document.getElementById("gbName");
        let guestBookInput = document.getElementById("gbEntry");
        let guestlist = document.querySelector(".guests");
        let stafflist = document.querySelector(".staff");
        let gbButton = document.querySelector(".gbButton");
        
        //// info material ////
        title.innerHTML = this.name;
        category.innerHTML = this.category;
        date.innerHTML = this.startDatetime.replace("T", ", Kl ").slice(0, -3);
        infoText.innerHTML = this.info;
        address.innerHTML = this.address;
        for (let guest of this.guests) {
            let name = document.createElement("p");
            name.innerHTML = guest.name;
            guestlist.appendChild(name);
        }
        for (let member of this.staff) {
            let name = document.createElement("p");
            name.innerHTML = member.name + " - " + member.role;
            stafflist.appendChild(name);
        }

        fulldate.innerHTML = this.startDatetime.replace("T", ", Kl ").slice(0, -3) + " – " + this.endDatetime.replace("T", ", Kl ").slice(0, -3);
        
        let availability = document.querySelector(".availStatus");     
        let ticketsButton = document.querySelector(".bookBtn"); 
        ticketsButton.addEventListener("click", this.bookTickets.bind(this));

        if (this.tickets - this.guests.length < 50 && this.tickets - this.guests.length > 0) {
            availability.innerHTML = "Fåtal biljetter kvar!!";
        } else if (this.tickets - this.guests.length < 0) {
            availability.innerHTML = "Slutsålt";
            ticketsButton.innerHTML = "Håll mig uppdaterad!";
        }
        
        guestBookName.value = localStorage.getItem('gbname');

        this.refreshGuestbook();
        gbButton.addEventListener("click", e => {
            guestBookInput.value = guestBookInput.value.trim();
                guestBookName.value = guestBookName.value.trim();
                if (guestBookName.value.length > 0 && guestBookInput.value.length > 0) {
                    this.updateGuestbook(guestBookName.value, guestBookInput.value);
                    this.refreshGuestbook();
                    
                    localStorage.setItem('gbname', guestBookName.value);

                    guestBookInput.value = "";
                } else {
                    alert("Vänligen fyll i både namn och meddelande för att skicka.")
                }
        });
        
    }
    updateGuestbook(name, entry) {
        let datetime = new Date().toISOString().slice(0, -5);
        this.guestbook.push({
            "namn": name,
            "message": entry,
            "datetime": datetime
        });
        console.log(this.guestbook);
    }
    refreshGuestbook() {
        let guestbook = document.querySelector(".messages");
        while (guestbook.firstChild) {
            guestbook.removeChild(guestbook.lastChild);
        }  
        for (let entry of this.guestbook) {
            let nameTime = document.createElement("p");
            let text = document.createElement("p");

            nameTime.innerHTML = entry.namn + "<br>" + entry.datetime.slice(0, -9);
            text.innerHTML = '"' + entry.message + '"';

            guestbook.appendChild(nameTime);
            guestbook.appendChild(text);
        }
        guestbook.scrollTop = guestbook.scrollHeight;
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
        let email = document.createElement("input");
        let button = document.createElement("button");
        let cancel = document.createElement("button");
        email.placeholder = "Email";
        email.required = true;
        button.innerHTML = "Skicka";
        button.type      = "submit";
        cancel.innerHTML = "Avbryt";
        cancel.type      = "submit";
        form.appendChild(email);
        form.appendChild(button);
        form.appendChild(cancel);
        let booking = false;
        
        //// in unavailable register email
        if (this.tickets - this.guests.length > 0) {
            booking = true;
            var number = document.createElement("input");
            var creditCard = document.createElement("input");
            number.type = "number";
            number.max  = this.tickets - this.guests.length;
            number.min  = 1;
            number.placeholder = "Antal biljetter"
            number.required = true;
            creditCard.placeholder = "Kreditkortsnummer";
            creditCard.required = true;
            form.insertBefore(creditCard, email);
            form.insertBefore(number, creditCard);
        }
        console.log(creditCard);
        
        form.onsubmit = (e) => {
            e.preventDefault();
            //// check that name is not only spaces 
            let trimmed = email.value.trim();
            if (trimmed.length > 0 && trimmed.includes("@")) { 
                if (booking) {

                    if (!isNaN(creditCard.value) && creditCard.value.length >= 15) {
                        let nextId = 1;
                        //TODO: spara ny json
                        let info = {
                            email: email,
                            creditCard: creditCard,
                            purchaseId: nextId
                        };
                        
                        //// store values 
                        localStorage.setItem("form", JSON.stringify(info));

                        form.remove();
                        let confirmDiv = document.createElement("div");
                        let confirm = document.createElement("p");
                        let button = document.createElement("button");
                        confirmDiv.className = "confirm";
                        confirm.innerHTML = "Dina biljetter är reserverade!!<br>En bokningsbekräftelse har skickats till din email."
                        button.innerHTML = "OK";
                        bookDiv.appendChild(confirmDiv);
                        confirmDiv.appendChild(confirm);
                        confirmDiv.appendChild(button);
                        button.addEventListener("click", e => {
                            bg.remove();
                        });
                        booking = false;
                        localStorage.setItem()

                    } else {
                        alert("PVänligen ange ett giltigt kortnummer");
                    }
                } else {
                    //TODO: store email
                    alert("Tack, vi meddelar dig om någon biljett dyker upp.");
                    bg.remove();
                }
            } else {
                alert("Vänligen ange en giltig emailadress.")
            }



            
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

