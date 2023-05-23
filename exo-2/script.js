// you can write js here
const isTesting = true;

const myDate = new Date();

const week = "Nous sommes en pleine semaine aujourd'hui.";
const weekEnd = "Nous sommes en weekend aujourd'hui."

const dayOfWeek = myDate.getDay();
const hour = myDate.getHours();

function isWeekend(date) {
    if (dayOfWeek > 5 || dayOfWeek == 0 || dayOfWeek == 5 && hour > 16 || dayOfWeek == 1 && hour < 9) {
        console.log(weekEnd);
    } else {
        console.log(week);
    }
}

function testing (){
    if (isTesting){
        const hour = prompt("Donner une heure (0 - 24)");
        const day = prompt("Donner un jour (1 - 31)");
        const month = prompt("Donner un mois en chiffre entier (1 - 12)") -1;
        const year = prompt("Donner une année")
        const myDate = new Date(year,month,day,hour);
    
        console.log(isWeekend(myDate));
    } else {
        console.log(isWeekend(myDate));
    }
}


console.log(testing(myDate));