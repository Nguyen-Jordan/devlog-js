// you can write js here
let playerInput = prompt("Votre choix (Pierre, Feuille ou Ciseau) ?").toLowerCase();

function getPlayerChoice(playerInput){
    if(playerInput == 'pierre' || playerInput == 'feuille' || playerInput == 'ciseau'){
        console.log(playerInput);
    } else {
        console.log("Error : Refresh and try again!")
    }
}

console.log(getPlayerChoice(playerInput));