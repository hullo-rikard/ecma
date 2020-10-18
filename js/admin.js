document.addEventListener('DOMContentLoaded', function(){

})


var allEvents = fetch("../data/events.json")
    .then(response => response.json())
    .then(json => {
        return json.events
    });

console.log(allEvents)