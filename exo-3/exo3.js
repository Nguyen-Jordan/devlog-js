// you can write js here
let playerInput = prompt("Votre choix (Pierre, Feuille ou Ciseau) ?").toLowerCase();

function getPlayerChoice(playerInput){
    if(playerInput == 'pierre' || playerInput == 'feuille' || playerInput == 'ciseau'){
        console.log(playerInput);
        return playerInput;
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

function findWinner (getPlayerChoice, getComputerChoice){
    if (getPlayerChoice === getComputerChoice)
    {
        return "Tied";

    } else {
        if (getPlayerChoice === 'pierre'){
            if(getComputerChoice === 'ciseau'){
                return 'Won';
            } else {
                return 'Lost';
            }
        } else if (getPlayerChoice === 'feuille'){
            if(getComputerChoice === 'pierre'){
                return 'Won';
            } else {
                return 'Lost';
            }
        } else if (getPlayerChoice === 'ciseau'){
            if(getComputerChoice === 'feuille'){
                return 'Won';
            } else {
                return 'Lost';
            }
        } else {
            return "Error of choice: Refresh and try again!";
        }
    }
}

console.log();