//this is only used to set some defualt events if localstorage is empty
let tempDataEvents = [
      {
        "id": 1,
        "name": "Daniels 😋 julbord",
        "address": "Gatan 1, 12030 Stockholm",
        "venue": "Huset A",
        "startDatetime": "2020-12-24T18:00:00",
        "endDatetime": "2020-12-24T21:00:00",
        "tickets": 132,
        "bookingNumber": 1000,
        "category": "Catering",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit velit. Aenean rutrum maximus libero nec ullamcorper. Praesent erat tortor, scelerisque non diam sed, tempus tempor dolor. Vestibulum non nunc vel enim malesuada accumsan nec eu purus. Sed tempus dui ante, id dapibus quam rhoncus id. Suspendisse et fringilla nunc. Pellentesque elementum, nisi non faucibus congue, augue enim vulputate erat, vel scelerisque ex augue quis ante. In hac habitasse platea dictumst. Vestibulum eget pharetra eros. Nam convallis odio nec neque tristique, ut auctor orci luctus. Aliquam vitae metus suscipit, consequat neque eget, vehicula nulla. Fusce in posuere nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tempor sapien aliquam eros bibendum semper. Integer ultricies risus eget eros imperdiet congue. Etiam ut ligula sed justo viverra fermentum eu ac arcu. Phasellus eleifend elit non ex dignissim hendrerit. Aliquam tempor tellus nec consequat ullamcorper. Aliquam at tincidunt lorem. Ut eu dui ac velit consequat dapibus. Phasellus imperdiet, lacus rhoncus convallis dictum, nulla arcu semper sem, eget scelerisque velit ligula nec risus. Ut eget lorem euismod, blandit turpis vitae, tempor tortor. In tincidunt porttitor luctus.",
        "image": "https://cdn1.tasteline.com/Julbord-samlingsbild-foto-Nurlan-Emir-1250-880x360.jpg",
        "images": [
            "https://www.babyhjalp.se/wp-content/uploads/2018/04/gravid-julbord-1024x575.jpg",
            "https://www.flygvapenmuseum.se/globalassets/bilder/konferens-och-event/julbord2018web-04.jpg",
            "https://receptfavoriter.se/sites/default/files/xjulbord_jul_recept_tag_65_980_0.jpg.pagespeed.ic.M3nnR5aPmX.jpg",
            "https://wragarden.se/wp-content/uploads/Julbord-180906-002.jpg"
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
            "staff": [
                {
                    "name": "Putte",
                    "role": "Projektkoordinator"
                },
                {
                    "name": "Torsten",
                    "role": "Evenemangsansvarig"
                },
                {
                    "name": "Kerstin",
                    "role": "Administratör"
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
                "datetime": "2020-10-22T11:11:23"
            },
            {
                "namn": "testperson2",
                "message": "tralallaallala",
                "datetime": "2020-10-22T11:12:23"
            }
        ]
        
      },
      {
        "id": 2,
        "name": "Julbord 2",
        "address": "Gatan 2, 12030 Stockholm",
        "venue": "Huset B",
        "startDatetime": "2020-12-23T17:00:00",
        "endDatetime": "2020-12-23T20:00:00",
        "tickets": 0,
        "bookingNumber": 2000,
        "category": "Catering",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit velit. Aenean rutrum maximus libero nec ullamcorper. Praesent erat tortor, scelerisque non diam sed, tempus tempor dolor. Vestibulum non nunc vel enim malesuada accumsan nec eu purus. Sed tempus dui ante, id dapibus quam rhoncus id. Suspendisse et fringilla nunc. Pellentesque elementum, nisi non faucibus congue, augue enim vulputate erat, vel scelerisque ex augue quis ante. In hac habitasse platea dictumst. Vestibulum eget pharetra eros. Nam convallis odio nec neque tristique, ut auctor orci luctus. Aliquam vitae metus suscipit, consequat neque eget, vehicula nulla. Fusce in posuere nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tempor sapien aliquam eros bibendum semper. Integer ultricies risus eget eros imperdiet congue. Etiam ut ligula sed justo viverra fermentum eu ac arcu. Phasellus eleifend elit non ex dignissim hendrerit. Aliquam tempor tellus nec consequat ullamcorper. Aliquam at tincidunt lorem. Ut eu dui ac velit consequat dapibus. Phasellus imperdiet, lacus rhoncus convallis dictum, nulla arcu semper sem, eget scelerisque velit ligula nec risus. Ut eget lorem euismod, blandit turpis vitae, tempor tortor. In tincidunt porttitor luctus.",
        "image": "https://wragarden.se/wp-content/uploads/Julbord-180906-002.jpg",
        "images": [
            "https://receptfavoriter.se/sites/default/files/xjulbord_jul_recept_tag_65_980_0.jpg.pagespeed.ic.M3nnR5aPmX.jpg",
            "https://wragarden.se/wp-content/uploads/Julbord-180906-002.jpg"
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
            "staff": [
                {
                    "name": "Putte",
                    "role": "Projektkoordinator"
                },
                {
                    "name": "Torsten",
                    "role": "Evenemangsansvarig"
                },
                {
                    "name": "Kerstin",
                    "role": "Administratör"
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
                "datetime": "2020-10-22T11:11:23"
            },
            {
                "namn": "testperson2",
                "message": "tralan jefleiruhelrif heröfh efkjne bf.kjweb föwehfi webföwefwel laal lala",
                "datetime": "2020-10-22T11:12:23"
            }
        ]
        
      },
      {
        "id": 3,
        "name": "Majas stämma 🎤",
        "address": "Gatan 3, 12030 Stockholm",
        "venue": "Huset C",
        "startDatetime": "2020-12-22T16:00:00",
        "endDatetime": "2020-12-22T19:00:00",
        "tickets": 152,
        "bookingNumber": 3000,
        "category": "Konserter",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit velit. Aenean rutrum maximus libero nec ullamcorper. Praesent erat tortor, scelerisque non diam sed, tempus tempor dolor. Vestibulum non nunc vel enim malesuada accumsan nec eu purus. Sed tempus dui ante, id dapibus quam rhoncus id. Suspendisse et fringilla nunc. Pellentesque elementum, nisi non faucibus congue, augue enim vulputate erat, vel scelerisque ex augue quis ante. In hac habitasse platea dictumst. Vestibulum eget pharetra eros. Nam convallis odio nec neque tristique, ut auctor orci luctus. Aliquam vitae metus suscipit, consequat neque eget, vehicula nulla. Fusce in posuere nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tempor sapien aliquam eros bibendum semper. Integer ultricies risus eget eros imperdiet congue. Etiam ut ligula sed justo viverra fermentum eu ac arcu. Phasellus eleifend elit non ex dignissim hendrerit. Aliquam tempor tellus nec consequat ullamcorper. Aliquam at tincidunt lorem. Ut eu dui ac velit consequat dapibus. Phasellus imperdiet, lacus rhoncus convallis dictum, nulla arcu semper sem, eget scelerisque velit ligula nec risus. Ut eget lorem euismod, blandit turpis vitae, tempor tortor. In tincidunt porttitor luctus.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Starhorse.jpg/1200px-Starhorse.jpg",
        "images": [
            "https://static.247tickets.com/o_1dpuip38017qa1e3k1rhs1r76a9ji.jpg",
            "https://img.youtube.com/vi/XN8UkYnsvn0/0.jpg"
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
            "staff": [
                {
                    "name": "Putte",
                    "role": "Projektkoordinator"
                },
                {
                    "name": "Torsten",
                    "role": "Evenemangsansvarig"
                },
                {
                    "name": "Kerstin",
                    "role": "Administratör"
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
                "datetime": "2020-10-22T11:11:23"
            },
            {
                "namn": "testperson2",
                "message": "tralallaallala",
                "datetime": "2020-10-22T11:12:23"
            }
        ]
        
      },
      {
        "id": 4,
        "name": "Winterburst",
        "address": "Gatan 4, 12030 Stockholm",
        "venue": "Huset D",
        "startDatetime": "2020-12-21T15:00:00",
        "endDatetime": "2020-12-21T18:00:00",
        "tickets": 162,
        "bookingNumber": 4000,
        "category": "Festivaler",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit velit. Aenean rutrum maximus libero nec ullamcorper. Praesent erat tortor, scelerisque non diam sed, tempus tempor dolor. Vestibulum non nunc vel enim malesuada accumsan nec eu purus. Sed tempus dui ante, id dapibus quam rhoncus id. Suspendisse et fringilla nunc. Pellentesque elementum, nisi non faucibus congue, augue enim vulputate erat, vel scelerisque ex augue quis ante. In hac habitasse platea dictumst. Vestibulum eget pharetra eros. Nam convallis odio nec neque tristique, ut auctor orci luctus. Aliquam vitae metus suscipit, consequat neque eget, vehicula nulla. Fusce in posuere nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tempor sapien aliquam eros bibendum semper. Integer ultricies risus eget eros imperdiet congue. Etiam ut ligula sed justo viverra fermentum eu ac arcu. Phasellus eleifend elit non ex dignissim hendrerit. Aliquam tempor tellus nec consequat ullamcorper. Aliquam at tincidunt lorem. Ut eu dui ac velit consequat dapibus. Phasellus imperdiet, lacus rhoncus convallis dictum, nulla arcu semper sem, eget scelerisque velit ligula nec risus. Ut eget lorem euismod, blandit turpis vitae, tempor tortor. In tincidunt porttitor luctus.",
        "image": "https://media.stubhubstatic.com/stubhub-catalog/d_defaultLogo.jpg/t_f-fs-0fv,q_auto:low,f_auto,c_fill,dpr_2.0,$w_750,$h_416/grouping/1498494/b7a1854668a06c4df3f7b23ec783588f",
        "images": [
            "https://coretours.se/wp-content/uploads/2019/11/8-anledningar-till-att-bes%C3%B6ka-Intents-Festival.jpg",
            "https://jonkopingsfesten.se/wp-content/uploads/2018/07/Figge_Flow-Festival.jpg",
            "https://images.prismic.io/statement/75318482-216d-4fdd-b03e-b4d8d966776d_statement-festival-2018.jpeg?auto=format%2Ccompress&rect=0%2C0%2C1200%2C630&w=1200&h=630&fit=max&q=50"
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
            "staff": [
                {
                    "name": "Putte",
                    "role": "Projektkoordinator"
                },
                {
                    "name": "Torsten",
                    "role": "Evenemangsansvarig"
                },
                {
                    "name": "Kerstin",
                    "role": "Administratör"
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
                "datetime": "2020-10-22T11:11:23"
            },
            {
                "namn": "testperson2",
                "message": "tralallaallala",
                "datetime": "2020-10-22T11:12:23"
            }
        ]
        
      },
      {
        "id": 5,
        "name": "Föreläsning Frontend 2",
        "address": "Gatan 5, 12030 Stockholm",
        "venue": "Huset E",
        "startDatetime": "2020-12-20T14:00:00",
        "endDatetime": "2020-12-20T17:00:00",
        "tickets": 172,
        "bookingNumber": 5000,
        "category": "Utbildningar",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit velit. Aenean rutrum maximus libero nec ullamcorper. Praesent erat tortor, scelerisque non diam sed, tempus tempor dolor. Vestibulum non nunc vel enim malesuada accumsan nec eu purus. Sed tempus dui ante, id dapibus quam rhoncus id. Suspendisse et fringilla nunc. Pellentesque elementum, nisi non faucibus congue, augue enim vulputate erat, vel scelerisque ex augue quis ante. In hac habitasse platea dictumst. Vestibulum eget pharetra eros. Nam convallis odio nec neque tristique, ut auctor orci luctus. Aliquam vitae metus suscipit, consequat neque eget, vehicula nulla. Fusce in posuere nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tempor sapien aliquam eros bibendum semper. Integer ultricies risus eget eros imperdiet congue. Etiam ut ligula sed justo viverra fermentum eu ac arcu. Phasellus eleifend elit non ex dignissim hendrerit. Aliquam tempor tellus nec consequat ullamcorper. Aliquam at tincidunt lorem. Ut eu dui ac velit consequat dapibus. Phasellus imperdiet, lacus rhoncus convallis dictum, nulla arcu semper sem, eget scelerisque velit ligula nec risus. Ut eget lorem euismod, blandit turpis vitae, tempor tortor. In tincidunt porttitor luctus.",
        "image": "https://louiseedlund.se/wp-content/uploads/2017/11/F%C3%B6rel%C3%A4sning.jpeg",
        "images": [
            "https://www.lsskonsultpalhammar.se/wp-content/uploads/2018/12/f%C3%B6rel%C3%A4sning_maria-1.jpg",
            "https://i2.wp.com/www.reconnect.se/wp-content/uploads/2015/04/utbildningfront-e1441882508856.png?resize=600%2C564"
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
            "staff": [
                {
                    "name": "Putte",
                    "role": "Projektkoordinator"
                },
                {
                    "name": "Torsten",
                    "role": "Evenemangsansvarig"
                },
                {
                    "name": "Kerstin",
                    "role": "Administratör"
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
                "datetime": "2020-10-22T11:11:23"
            },
            {
                "namn": "testperson2",
                "message": "tralallaallala",
                "datetime": "2020-10-22T11:12:23"
            }
        ]
        
      },
      {
        "id": 6,
        "name": "Bröllop Dino ❤️ Rikard",
        "address": "Gatan 6, 12030 Stockholm",
        "venue": "Huset F",
        "startDatetime": "2020-12-19T13:00:00",
        "endDatetime": "2020-12-19T16:00:00",
        "tickets": 182,
        "bookingNumber": 6000,
        "category": "Bröllop",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit velit. Aenean rutrum maximus libero nec ullamcorper. Praesent erat tortor, scelerisque non diam sed, tempus tempor dolor. Vestibulum non nunc vel enim malesuada accumsan nec eu purus. Sed tempus dui ante, id dapibus quam rhoncus id. Suspendisse et fringilla nunc. Pellentesque elementum, nisi non faucibus congue, augue enim vulputate erat, vel scelerisque ex augue quis ante. In hac habitasse platea dictumst. Vestibulum eget pharetra eros. Nam convallis odio nec neque tristique, ut auctor orci luctus. Aliquam vitae metus suscipit, consequat neque eget, vehicula nulla. Fusce in posuere nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tempor sapien aliquam eros bibendum semper. Integer ultricies risus eget eros imperdiet congue. Etiam ut ligula sed justo viverra fermentum eu ac arcu. Phasellus eleifend elit non ex dignissim hendrerit. Aliquam tempor tellus nec consequat ullamcorper. Aliquam at tincidunt lorem. Ut eu dui ac velit consequat dapibus. Phasellus imperdiet, lacus rhoncus convallis dictum, nulla arcu semper sem, eget scelerisque velit ligula nec risus. Ut eget lorem euismod, blandit turpis vitae, tempor tortor. In tincidunt porttitor luctus.",
        "image": "https://regionuppsala.se/contentassets/69dbdf9cc794478dac781eee8cde99e0/brollop.slottstrappen.fot.michael-jansson.jpg?width=450&height=400",
        "images": [
            "https://static.intercomassets.com/avatars/2123702/square_128/happy-rille-1558968707.jpg?1558968707",
            "https://media-exp1.licdn.com/dms/image/C4D03AQHLbmP5U97rbw/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=tvH5HPVPJrDMugV1htomA6vmJraYI8GrKUyrYQH_Q48"
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
            "staff": [
                {
                    "name": "Putte",
                    "role": "Projektkoordinator"
                },
                {
                    "name": "Torsten",
                    "role": "Evenemangsansvarig"
                },
                {
                    "name": "Kerstin",
                    "role": "Administratör"
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
                "datetime": "2020-10-22T11:11:23"
            },
            {
                "namn": "testperson2",
                "message": "tralallaallala",
                "datetime": "2020-10-22T11:12:23"
            }
        ]
        
      }
]

class App {
    constructor(events) {
        this.events = events;
    }
    getEventByEventID(ID){
        for (var i=0; i < this.events.length; i++) {
            if (this.events[i].id === parseInt(ID)) {
                let tempEvent = this.events[i]
                tempEvent.arrayKey = i
                return tempEvent;
            }
        }
    }
}

let app

document.addEventListener('DOMContentLoaded', () => { 
    if(localStorage.getItem('events')){
        app = new App(JSON.parse(localStorage.getItem('events')))
    } else {
        localStorage.setItem('events', JSON.stringify(tempDataEvents))
        app = new App(JSON.parse(localStorage.getItem('events'))) 
    }
})

document.addEventListener('DOMContentLoaded', function(){
    addHeader()
    addFooter()
})

function addHeader() {
    let body = document.getElementsByTagName('body')[0]
    
    let pseudoDiv = document.createElement('div')
    let header = document.createElement('header')
    
    let icon = document.createElement('embed')
    icon.src = 'img/acme-events.svg'
    let iconDiv = document.createElement('div')
    iconDiv.id = 'head-icon-div'
    iconDiv.appendChild(icon)

    let start = document.createElement('a')
    start.innerHTML = 'Start'
    start.href = 'index.html'
    
    let event = document.createElement('a')
    event.innerHTML = 'Event'
    event.href = 'events.html'
    
    let about = document.createElement('a')
    about.innerHTML = 'Om oss'
    about.href = 'omoss.html'

    let navDiv = document.createElement('div')
    navDiv.id = 'nav-div'

    navDiv.appendChild(start)
    navDiv.appendChild(event)
    navDiv.appendChild(about)
    
    header.appendChild(pseudoDiv)
    header.appendChild(iconDiv)
    header.appendChild(navDiv)

    body.prepend(header)
}

function addFooter() {
    let body = document.getElementsByTagName('body')[0]
    let footer = document.createElement('footer')

    let icon = document.createElement('embed')
    icon.src = 'img/acme-events2.svg'
    let iconDiv =  document.createElement('div')
    iconDiv.id = 'foot-icon-div'
    iconDiv.appendChild(icon)
    
    let copyRightDiv = document.createElement('div')
    copyRightDiv.id = 'copy-div'
    let year = document.createElement('span')
    year.innerHTML = '© 2010 — 2020'
    let yearDiv = document.createElement('div')
    yearDiv.appendChild(year)
    copyRightDiv.appendChild(yearDiv)
    
    let acme = document.createElement('span')
    acme.innerHTML = 'ACME Events'
    let acmeDiv = document.createElement('div')
    acmeDiv.appendChild(acme)
    copyRightDiv.appendChild(acmeDiv)
    
    let admin = document.createElement('a')
    admin.innerHTML = 'Admin'
    admin.href = 'admin.html'
    let adminDiv = document.createElement('div')
    adminDiv.id = 'admin-div'
    adminDiv.appendChild(admin)

    footer.appendChild(iconDiv)
    footer.appendChild(copyRightDiv)
    footer.appendChild(adminDiv)

    body.appendChild(footer)
}