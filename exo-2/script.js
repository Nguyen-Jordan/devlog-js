// you can write js here
const myDate = new Date();

const week = "Nous sommes en pleine semaine aujourd'hui.";
const weekEnd = "Nous sommes en weekend aujourd'hui."

const dayOfWeek = myDate.getDay();
const hour = myDate.getHours();



function isWeekend(date) {
    if (dayOfWeek > 5 || dayOfWeek == 5 && hour > 16) {
    console.log(weekEnd);
} else {
    console.log(week);
}
}

console.log(isWeekend(myDate));