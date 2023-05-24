// you can write js here

let input = "Turpentine and turtles";

const vowels = ['a','e','i','o','u'];

let resultArray = [];

for (let letter of input) {
    if (letter === vowels[vowels.indexOf(letter)]){
        console.log(letter);
    }
}