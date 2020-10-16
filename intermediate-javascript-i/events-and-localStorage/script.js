/**********************
        Part 1
**********************/

/*
Add the necessary code to wait for the DOM to load to make sure that anything you manipulate inthe DOM
has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.
*/

window.onload = function() {
    // Replace the text "Change me" with "Hello World!".
    document.getElementById("change_heading").innerText = "Hello World";

    // When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.
    window.onload = function(){
        let section = document.querySelector("section");
        section.addEventListener("onmouseover", function(event){
            let selectedColor = document.querySelector('.selected');
            selectedColor.innerText = event.target.className;
        })
    }

    // Create a new div element.
    // document.createElement("div");
}

