// Cours 8 de Codecademy

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log(joeInfo.garage);

console.log('----------------------------------');

let team = {};

team.players = [];
team.games = [];

team.players.push(
    {
        firstName: "LeBron",
        lastName: "James",
        age: 38
    },{
        firstName: "Anthony",
        lastName: "Davis",
        age: 30
    },{
        firstName: "Austin",
        lastName: "Reaves",
        age: 24
    },{
        firstName: "Jarred",
        lastName: "Vanderbilt",
        age: 24
    },{
        firstName: "D'Angelo",
        lastName: "Russell",
        age: 27
    }
);

team.games.push(
    {
        opponent: "Nuggets",
        teamPoints: 111,
        opponentPoints: 113
    },{
        opponent: "Warriors",
        teamPoints: 106,
        opponentPoints: 121
    },{
        opponent: "grizzlies",
        teamPoints: 111,
        opponentPoints: 101
    },{
        opponent: "Clippers",
        teamPoints: 125,
        opponentPoints: 118
    },{
        opponent: "Rockets",
        teamPoints: 134,
        opponentPoints: 109
    },{
        opponent: "Jazz",
        teamPoints: 135,
        opponentPoints: 133
    }
)

team.addPlayers = function(fName, lName, ageP) {
    team.players.push({firstName: fName, lastName: lName, age: ageP})
}

console.log()