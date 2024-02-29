/*
Nome: Luís Eduardo Novaes Souza
3 – Converta a temperatura x (entrada manual) CELSIUS para FAHRENHEIT, Segue a formula (°C × 9/5) + 32.
*/
console.clear();
var teclado2 = require('prompt-sync')();
var temperaturaC = parseFloat(teclado2("Digite Temperatura em CELSIUS: "));
var fahrenheit = (temperaturaC * 9 / 5) + 32;
console.log("A temperatura \u00E9 ".concat(temperaturaC, "\u00B0C e ").concat(fahrenheit, "\u00B0F"));
