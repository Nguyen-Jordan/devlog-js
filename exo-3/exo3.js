// you can write js here
let playerInput = prompt("Votre choix (Pierre, Feuille ou Ciseau) ?").toLowerCase();

function getPlayerChoice(playerInput){
    if(playerInput == 'pierre' || playerInput == 'feuille' || playerInput == 'ciseau'){
        console.log(playerInput);
    } else {
        console.log("Error of choice: Refresh and try again!")
    }
}

function getComputerChoice (){
    const result = Math.floor(Math.random() * 3);
    if (result === 0){
        return 'pierre';
    } else if (result === 1){
        return 'feuille';
    } else {
        return 'ciseau';
    }
}

console.log(getComputerChoice());