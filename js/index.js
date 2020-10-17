document.addEventListener("DOMContentLoaded", function(e){
    //addDisplay();

})

function addDisplay(){
    let body = document.getElementsByTagName("body")[0];

    let displayDiv = document.createElement("div");
    displayDiv.classList.add("display_div")



    body.appendChild(displayDiv);

    console.log("hej");
}