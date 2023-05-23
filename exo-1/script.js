let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
const celsius = kelvins - 273; // pour calculer la température en Celsius on soustrait 273 à la température kelvin.
const fahrenheits = celsius * (9/5) + 32; // pour calculer la empérature en Fahrenheits il faut multiplier la temperapour calculer la température en Fahrenheits il faut multiplier la température Celsius par 1.8 (9/5) et additionner 32.ture celsius par 1.8 (9/5) et additioner 32.

const fahrenheitsFloor = Math.floor(fahrenheits); // je déclare une variable et prend comme valeur la valeur de fahrenheits et il arondit grace à la méthode statique Math.floor().

console.log(fahrenheitsFloor);