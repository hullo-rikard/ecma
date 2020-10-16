document.addEventListener('DOMContentLoaded', function(){
    addHeader()
    addFooter()
})
function addHeader() {
    let body = document.getElementsByTagName('body')[0]
    
    let pseudoDiv = document.createElement('div')
    let header = document.createElement('header')
    
    let icon = document.createElement('embed')
    icon.src = '/resources/img/acme-events.svg'
    let iconDiv = document.createElement('div')
    iconDiv.id = 'head-icon-div'
    iconDiv.appendChild(icon)

    let start = document.createElement('a')
    start.innerHTML = 'Start'
    start.href = '/../index.html'
    
    let event = document.createElement('a')
    event.innerHTML = 'Event'
    event.href = '/pages/event.html'
    
    let about = document.createElement('a')
    about.innerHTML = 'Om oss'
    about.href = '/pages/omoss.html'

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
    icon.src = '/resources/img/acme-events2.svg'
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
    admin.href = '/pages/admin.html'
    let adminDiv = document.createElement('div')
    adminDiv.id = 'admin-div'
    adminDiv.appendChild(admin)

    footer.appendChild(iconDiv)
    footer.appendChild(copyRightDiv)
    footer.appendChild(adminDiv)

    body.appendChild(footer)
}