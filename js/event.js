document.addEventListener("DOMContentLoaded", function(e) {
    let events = [
          {
            "id": 1,
            "name": "Julbord 1",
            "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget duis at tellus at urna condimentum mattis. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Neque aliquam vestibulum morbi blandit. Cursus sit amet dictum sit. Nec feugiat in fermentum posuere urna nec tincidunt. Tristique senectus et netus et malesuada fames ac turpis egestas. Vitae justo eget magna fermentum iaculis. Sit amet nisl purus in mollis nunc sed. Vel fringilla est ullamcorper eget. Cras sed felis eget velit aliquet sagittis id. Fermentum iaculis eu non diam. Laoreet id donec ultrices tincidunt arcu non. Sed sed risus pretium quam vulputate dignissim suspendisse. <br>Erat nam at lectus urna. Volutpat odio facilisis mauris sit amet massa vitae tortor. Vel risus commodo viverra maecenas accumsan. Sociis natoque penatibus et magnis dis parturient. Egestas quis ipsum suspendisse ultrices. Ut consequat semper viverra nam libero justo laoreet. Pellentesque diam volutpat commodo sed. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Id aliquet risus feugiat in. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Sit amet facilisis magna etiam tempor orci eu. Est placerat in egestas erat. Accumsan lacus vel facilisis volutpat est velit. Nam at lectus urna duis convallis. Viverra orci sagittis eu volutpat. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Diam quam nulla porttitor massa",
            "address": "Gatan 1, 12030 Stockholm",
            "venue": "Huset A",
            "startDatetime": "2020-12-24 18:00:00",
            "endDatetime": "2020-12-24 21:00:00",
            "tickets": 1,
            "category": "Catering",
            "image": "https://img.com/img.jpg",
            "images": [
                "https://img.com/img1.jpg",
                "https://img.com/img2.jpg"
            ],
            "members": {
                "admins": [
                    {
                        "username": "admin",
                        "password": "password"
                    },
                    {
                        "username": "micke",
                        "password": "password123"
                    }
                ],
                "guests": [
                    {
                        "name": "Maja",
                        "email": "maja@maja.com"
                    },
                    {
                        "name": "Daniel",
                        "email": "daniel@daniel.com"
                    },
                    {
                        "name": "Rikard",
                        "email": "rikard@rikard.com"
                    },
                    {
                        "name": "Dino",
                        "email": "dino@dino.com"
                    }
                ]
            },
            "guestbook": [
                {
                    "namn": "testperson",
                    "message": "tralalla",
                    "datetime": "2020-10-22 11:11:23"
                },
                {
                    "namn": "testperson2",
                    "message": "tralallaallala",
                    "datetime": "2020-10-22 11:12:23"
                }
            ]
            
          },
          {
            "id": 2,
            "name": "Julbord 2",
            "address": "Gatan 2, 12030 Stockholm",
            "venue": "Huset B",
            "startDatetime": "2020-12-23 18:00:00",
            "endDatetime": "2020-12-23 21:00:00",
            "tickets": 182,
            "category": "Catering",
            "image": "https://img.com/img.jpg",
            "images": [
                "https://img.com/img1.jpg",
                "https://img.com/img2.jpg"
            ],
            "members": {
                "admins": [
                    {
                        "username": "admin",
                        "password": "password"
                    },
                    {
                        "username": "micke",
                        "password": "password123"
                    }
                ],
                "guests": [
                    {
                        "name": "Maja",
                        "email": "maja@maja.com"
                    },
                    {
                        "name": "Daniel",
                        "email": "daniel@daniel.com"
                    },
                    {
                        "name": "Rikard",
                        "email": "rikard@rikard.com"
                    },
                    {
                        "name": "Dino",
                        "email": "dino@dino.com"
                    }
                ]
            },
            "guestbook": [
                {
                    "namn": "testperson",
                    "message": "tralalla",
                    "datetime": "2020-10-22 11:11:23"
                },
                {
                    "namn": "testperson2",
                    "message": "tralallaallala",
                    "datetime": "2020-10-22 11:12:23"
                }
            ]
            
          },
          {
            "id": 3,
            "name": "Julbord 3",
            "address": "Gatan 3, 12030 Stockholm",
            "venue": "Huset C",
            "startDatetime": "2020-12-22 18:00:00",
            "endDatetime": "2020-12-22 21:00:00",
            "tickets": 182,
            "category": "Catering",
            "image": "https://img.com/img.jpg",
            "images": [
                "https://img.com/img1.jpg",
                "https://img.com/img2.jpg"
            ],
            "members": {
                "admins": [
                    {
                        "username": "admin",
                        "password": "password"
                    },
                    {
                        "username": "micke",
                        "password": "password123"
                    }
                ],
                "guests": [
                    {
                        "name": "Maja",
                        "email": "maja@maja.com"
                    },
                    {
                        "name": "Daniel",
                        "email": "daniel@daniel.com"
                    },
                    {
                        "name": "Rikard",
                        "email": "rikard@rikard.com"
                    },
                    {
                        "name": "Dino",
                        "email": "dino@dino.com"
                    }
                ]
            },
            "guestbook": [
                {
                    "namn": "testperson",
                    "message": "tralalla",
                    "datetime": "2020-10-22 11:11:23"
                },
                {
                    "namn": "testperson2",
                    "message": "tralallaallala",
                    "datetime": "2020-10-22 11:12:23"
                }
            ]
            
          },
          {
            "id": 4,
            "name": "Julbord 4",
            "address": "Gatan 4, 12030 Stockholm",
            "venue": "Huset D",
            "startDatetime": "2020-12-21 18:00:00",
            "endDatetime": "2020-12-21 21:00:00",
            "tickets": 182,
            "category": "Catering",
            "image": "https://img.com/img.jpg",
            "images": [
                "https://img.com/img1.jpg",
                "https://img.com/img2.jpg"
            ],
            "members": {
                "admins": [
                    {
                        "username": "admin",
                        "password": "password"
                    },
                    {
                        "username": "micke",
                        "password": "password123"
                    }
                ],
                "guests": [
                    {
                        "name": "Maja",
                        "email": "maja@maja.com"
                    },
                    {
                        "name": "Daniel",
                        "email": "daniel@daniel.com"
                    },
                    {
                        "name": "Rikard",
                        "email": "rikard@rikard.com"
                    },
                    {
                        "name": "Dino",
                        "email": "dino@dino.com"
                    }
                ]
            },
            "guestbook": [
                {
                    "namn": "testperson",
                    "message": "tralalla",
                    "datetime": "2020-10-22 11:11:23"
                },
                {
                    "namn": "testperson2",
                    "message": "tralallaallala",
                    "datetime": "2020-10-22 11:12:23"
                }
            ]
            
          },
          {
            "id": 5,
            "name": "Julbord 5",
            "address": "Gatan 5, 12030 Stockholm",
            "venue": "Huset E",
            "startDatetime": "2020-12-20 18:00:00",
            "endDatetime": "2020-12-20 21:00:00",
            "tickets": 182,
            "category": "Catering",
            "image": "https://img.com/img.jpg",
            "images": [
                "https://img.com/img1.jpg",
                "https://img.com/img2.jpg"
            ],
            "members": {
                "admins": [
                    {
                        "username": "admin",
                        "password": "password"
                    },
                    {
                        "username": "micke",
                        "password": "password123"
                    }
                ],
                "guests": [
                    {
                        "name": "Maja",
                        "email": "maja@maja.com"
                    },
                    {
                        "name": "Daniel",
                        "email": "daniel@daniel.com"
                    },
                    {
                        "name": "Rikard",
                        "email": "rikard@rikard.com"
                    },
                    {
                        "name": "Dino",
                        "email": "dino@dino.com"
                    }
                ]
            },
            "guestbook": [
                {
                    "namn": "testperson",
                    "message": "tralalla",
                    "datetime": "2020-10-22 11:11:23"
                },
                {
                    "namn": "testperson2",
                    "message": "tralallaallala",
                    "datetime": "2020-10-22 11:12:23"
                }
            ]
            
          },
          {
            "id": 6,
            "name": "Julbord 6",
            "address": "Gatan 6, 12030 Stockholm",
            "venue": "Huset F",
            "startDatetime": "2020-12-19 18:00:00",
            "endDatetime": "2020-12-19 21:00:00",
            "tickets": 182,
            "category": "Catering",
            "image": "https://img.com/img.jpg",
            "images": [
                "https://img.com/img1.jpg",
                "https://img.com/img2.jpg"
            ],
            "members": {
                "admins": [
                    {
                        "username": "admin",
                        "password": "password"
                    },
                    {
                        "username": "micke",
                        "password": "password123"
                    }
                ],
                "guests": [
                    {
                        "name": "Maja",
                        "email": "maja@maja.com"
                    },
                    {
                        "name": "Daniel",
                        "email": "daniel@daniel.com"
                    },
                    {
                        "name": "Rikard",
                        "email": "rikard@rikard.com"
                    },
                    {
                        "name": "Dino",
                        "email": "dino@dino.com"
                    }
                ]
            },
            "guestbook": [
                {
                    "namn": "testperson",
                    "message": "tralalla",
                    "datetime": "2020-10-22 11:11:23"
                },
                {
                    "namn": "testperson2",
                    "message": "tralallaallala",
                    "datetime": "2020-10-22 11:12:23"
                }
            ]
            
          }
        ];
    new Event(events[0]);
})
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
        this.images = event.images;
        this.members = event.members;
        this.admins = event.members.admins;
        this.guests = event.members.guests;
        this.guestbook = event.guestbook;
        this.displayEvent();
    }
    displayEvent() {
        let container = document.getElementsByTagName("main")[0];
        //// image ////
        let img = document.createElement("div");
        img.className = "eventImg";
        // img.style.backgroundImage = this.image;
        container.appendChild(img);
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
}