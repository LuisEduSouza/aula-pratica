/*
Nome: Luís Eduardo Novaes Souza
3 – Converta a temperatura x (entrada manual) CELSIUS para FAHRENHEIT, Segue a formula (°C × 9/5) + 32.
*/
console.clear(); 
const teclado = require('prompt-sync')();

let temperaturaC : number = parseFloat(teclado(`Digite Temperatura em CELSIUS: `));
let fahrenheit: number = (temperaturaC * 9/5) + 32;

console.log(`A temperatura é ${temperaturaC}°C e ${fahrenheit}°F`);