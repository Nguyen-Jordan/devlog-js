// you can write js here
let playerInput = prompt("Votre choix (Pierre, Feuille ou Ciseau) ?").toLowerCase();

function getPlayerChoice(){
    if(playerInput === 'pierre' || playerInput === 'feuille' || playerInput === 'ciseau' || playerInput === 'bomb'){
        return playerInput;
    } else {
        console.log("Error of choice: Refresh and try again!")
    }
}

function getComputerChoice (){
    let result = Math.floor(Math.random() * 3);
    if (result === 0){
        return 'pierre';
    } else if (result === 1){
        return 'feuille';
    } else {
        return 'ciseau';
    }
}

function findWinner (playerChoice, computerChoice){
    if (playerChoice === computerChoice)
    {
        return "Tied";

    } else {
        if (playerChoice === 'pierre'){
            if(computerChoice === 'ciseau'){
                return 'Won';
            } else {
                return 'Lost';
            }
        } else if (playerChoice === 'feuille'){
            if(computerChoice === 'pierre'){
                return 'Won';
            } else {
                return 'Lost';
            }
        } else if (playerChoice === 'ciseau'){
            if(computerChoice === 'feuille'){
                return 'Won';
            } else {
                return 'Lost';
            }
        } else if (playerChoice === 'bomb'){
            return 'You win CHEATER';
        } else {
            return "Error of choice: Refresh and try again!";
        }
    }
}

function playGame(){
    let uChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log(uChoice);
    console.log(computerChoice);
    console.log(findWinner(uChoice, computerChoice));
}

playGame();