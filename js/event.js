

document.addEventListener("DOMContentLoaded", function(e) {    

    setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let id = parseInt(urlParams.get("eventid"));
        app.displayEventById(id);
    }, 100);

})

App.prototype.displayEventById = function(id) {
    if (typeof id == "number") {
        let event = this.events.find(obj => obj.id == id);
        new Page(event).displayEvent();
    } else {
        this.events[0].displayEvent();
    }
}

App.prototype.updateStorage = function() {
    localStorage.setItem("events", JSON.stringify(this.events));
}


class Page {
    constructor(event) {
        this.id = event.id;
        this.name = event.name;
        this.description = event.description;
        this.address = event.address;
        this.startDatetime = event.startDatetime;
        this.endDatetime = event.endDatetime;
        this.tickets = event.tickets;
        this.category = event.category;
        this.members = event.members;
        this.guestbook = event.guestbook;
                
        this.browserTitle = document.querySelector("title");
        
        //// images ////
        this.img = document.querySelector(".eventImg");
        this.imgBar = document.querySelector(".imgBar");
        this.image = event.image;
        this.images = event.images; // we want all images here including big one
        this.images.push(this.image);
        this.displayingImg = event.image;

        //// info elements ////
        this.date = document.querySelector(".date");
        this.title = document.querySelector(".title");
        this.categoryBtn = document.querySelector(".category");
        this.addressP = document.querySelector(".address");
        this.infoText = document.querySelector(".infoText");
        this.fulldate = document.querySelector(".fulldate");
        this.guestlist = document.querySelector(".guests");
        this.stafflist = document.querySelector(".staff");

        //// tickets ////
        this.availability = document.querySelector(".availStatus");     
        this.ticketsButton = document.querySelector(".bookBtn"); 
        
        //// guestbook elements ////
        this.gbButton = document.querySelector(".gbButton");
        this.guestBookName = document.getElementById("gbName");
        this.guestBookInput = document.getElementById("gbEntry");
        this.guestbookDisplay = document.querySelector(".messages");

    }
    displayEvent() {
        //// images ////
        this.img.style.backgroundImage = "url(" + this.image + ")";
        this.img.addEventListener("click", e => {
            this.popupImg(this.displayingImg);
        })

        for (let image of this.images) {
            let thumb = document.createElement("div");
            thumb.style.backgroundImage = "url(" + image + ")";
            thumb.className = "thumb";
            this.imgBar.appendChild(thumb);
            thumb.addEventListener("click", e => {
                this.img.style.backgroundImage = "url(" + image + ")";
                this.displayingImg = image;
            })
        }

        //// info material ////
        this.browserTitle.textContent = 'ACME Event - '+this.name
        this.title.innerHTML = this.name;
        this.categoryBtn.innerHTML = this.category;
        this.date.innerHTML = this.startDatetime.replace("T", ", Kl ").slice(0, -3);
        this.infoText.innerHTML = this.description;
        this.addressP.innerHTML = this.address;

        this.refreshGuestList();

        if (this.members.staff.length > 0) {
            for (let member of this.members.staff) {
                let name = document.createElement("p");
                name.innerHTML = member.name + " - " + member.role;
                this.stafflist.appendChild(name);
            }
        }

        this.fulldate.innerHTML = this.startDatetime.replace("T", ", Kl ").slice(0, -3) + " – " + this.endDatetime.replace("T", ", Kl ").slice(0, -3);
        
        
        this.ticketsButton.addEventListener("click", this.bookTickets.bind(this));

        if (this.tickets - this.members.guests.length < 50 && this.tickets - this.members.guests.length > 0) {
            this.availability.innerHTML = "Fåtal biljetter kvar!!";
        } else if (this.tickets - this.members.guests.length < 0) {
            this.availability.innerHTML = "Slutsålt";
            this.ticketsButton.innerHTML = "Håll mig uppdaterad!";
        }
        
        this.guestBookName.value = localStorage.getItem('gbname');

        this.refreshGuestbook();
        this.gbButton.addEventListener("click", e => {
            this.guestBookInput.value = this.guestBookInput.value.trim();
            this.guestBookName.value = this.guestBookName.value.trim();
                if (this.guestBookName.value.length > 0 && this.guestBookInput.value.length > 0) {
                    this.updateGuestbook(this.guestBookName.value, this.guestBookInput.value);
                    this.refreshGuestbook();
                    
                    localStorage.setItem('gbname', this.guestBookName.value);

                    this.guestBookInput.value = "";
                } else {
                    alert("Vänligen fyll i både namn och meddelande för att skicka.")
                }
        });
        
    }


    //// Guestbook ////
    updateGuestbook(name, entry) {
        let datetime = new Date().toISOString().slice(0, -5);
        this.guestbook.push({
            "namn": name,
            "message": entry,
            "datetime": datetime
        });
        app.updateStorage();
    }

    refreshGuestbook() {
        while (this.guestbookDisplay.firstChild) {
            this.guestbookDisplay.removeChild(this.guestbookDisplay.lastChild);
        }  
        for (let entry of this.guestbook) {
            let nameTime = document.createElement("p");
            let text = document.createElement("p");

            nameTime.innerHTML = entry.namn + "<br>" + entry.datetime.slice(0, -9);
            text.innerHTML = '"' + entry.message + '"';

            this.guestbookDisplay.appendChild(nameTime);
            this.guestbookDisplay.appendChild(text);
        }
        this.guestbookDisplay.scrollTop = this.guestbookDisplay.scrollHeight;
    }

    //// Refresh guest list ////
    refreshGuestList() {
        while (this.guestlist.children.length > 1) {
            this.guestlist.removeChild(this.guestlist.lastChild);
        } 
        if (this.members.guests.length > 0) {
            for (let guest of this.members.guests) {
                let name = document.createElement("p");
                name.innerHTML = guest.name;
                this.guestlist.appendChild(name);
            }
        }
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

    //// book or notify button event ////
    bookTickets() {
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
        button.innerHTML = "Skicka";
        button.type      = "submit";
        cancel.innerHTML = "Avbryt";
        form.appendChild(email);
        form.appendChild(button);
        form.appendChild(cancel);
        let booking = false;
        
        //// if unavailable register email
        if (this.tickets - this.members.guests.length > 0) {
            booking = true;
            var name = document.createElement("input");
            var creditCard = document.createElement("input");
            if (localStorage.getItem("guest")) {
                let guest = localStorage.getItem("guest");
                guest = JSON.parse(guest);
                name.value = guest.name;
                email.value = guest.email;
            }
            name.placeholder = "Namn";
            name.required = true;
            email.required = true;
            creditCard.placeholder = "Kreditkortsnummer";
            creditCard.required = true;
            form.insertBefore(creditCard, button);
            form.insertBefore(name, email);
        }
        
        form.onsubmit = (e) => {
            e.preventDefault();
            //// check that name is not only spaces 
            let trimmed = email.value.trim();
            if (trimmed.length > 0 && trimmed.includes("@")) { 
                if (booking) {
                    if (!isNaN(creditCard.value) && creditCard.value.length >= 8) {

                        let guest = {
                            "name": name.value,
                            "email": email.value
                        }
                        

                        form.remove();
                        let confirmDiv = document.createElement("div");
                        let confirm = document.createElement("p");
                        let button = document.createElement("button");
                        confirmDiv.className = "confirm";
                        confirm.innerHTML = "Dina biljetter är reserverade!<br>Ditt bodningsnummer är: " + this.bookingNumber + "<br>En bokningsbekräftelse har skickats till din email."
                        button.innerHTML = "OK";
/*                         this.bookingNumber++;           //! why not working?
                        console.log(this.bookingNumber);            //  5001
                        console.log(app.events[4].bookingNumber);   //  5000 */
                        bookDiv.appendChild(confirmDiv);
                        confirmDiv.appendChild(confirm);
                        confirmDiv.appendChild(button);
                        button.addEventListener("click", e => {
                            bg.remove();
                        });

                        localStorage.setItem("guest", JSON.stringify(guest)); // save for form use
                        
                        this.members.guests.push(guest);
                        app.updateStorage(); // update events in localstorage
                        this.refreshGuestList();

                        booking = false; // reset current action status

                    } else {
                        alert("Vänligen ange ett giltigt kortnummer");
                    }
                } else {
                    //TODO: store email
                    localStorage.setItem("email", email.value);
                    alert("Tack, vi meddelar dig om någon biljett dyker upp.");
                    bg.remove();
                }
            } else {
                alert("Vänligen ange en giltig emailadress.")
            }
        }
        cancel.addEventListener("click", e => {
            e.preventDefault(); 
            bg.remove();
        });
        
    }
}
