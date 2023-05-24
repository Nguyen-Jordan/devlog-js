// you can write js here

let input = "Turpentine and turtles";

const vowels = ['a','e','i','o','u'];

let resultArray = [];

for (let letter of input) {
    for (let index of vowels) {
        if (letter === index){
            resultArray.push(letter);
        }
    }
}

console.log((resultArray.join("")).toUpperCase());