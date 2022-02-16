// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============
/*
Afficher dans la console la touche cliquee
Afficher dans l'ecran
Concatener dans l'ecran
Trainter le cas du zero
Faire l'addition
Faire les autres operations
Traiter les decimaux
*/

function printTargetContentToConsole(event) {
    let screen = document.getElementsByClassName("calculator_display")[0];
    if (screen.textContent == "0") {
        screen.textContent = event.target.textContent;
    }
    else {
        screen.textContent = screen.textContent + event.target.textContent;
    }
}

window.addEventListener("load", () => {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", (event) => {
            console.log("")
        })
    }
})