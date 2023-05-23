// you can write js here
const myDate = new Date();

const week = "Nous sommes en pleine semaine aujourd'hui.";
const weekEnd = "Nous sommes en weekend aujourd'hui."

const dayOfWeek = myDate.getDay();

function isWeekend(date) {
    if (dayOfWeek >5){
        console.log(weekEnd);
    } else {
        console.log(week);
    }
}

console.log('exo-2');