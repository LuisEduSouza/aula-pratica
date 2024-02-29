/*
Nome: Luís Eduardo Novaes Souza
4 - Converta a temperatura x (entrada manual) FAHRENHEIT para CELSIUS, Segue a formula 9/5 (°F - 32).
*/
console.clear(); 
const teclado = require('prompt-sync')();
        
let temperaturaF : number = parseFloat(teclado(`Digite Temperatura em FAHRENHEIT:`));
let convertidaC: number = (5/9) * (temperaturaF - 32);

console.log(`A temperatura é ${temperaturaF}°F e ${convertidaC}°C`);