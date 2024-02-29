/*
Nome: Luís Eduardo Novaes Souza
4 - Converta a temperatura x (entrada manual) FAHRENHEIT para CELSIUS, Segue a formula 9/5 (°F - 32).
*/
console.clear();
var teclado3 = require('prompt-sync')();
var temperaturaF = parseFloat(teclado3("Digite Temperatura em FAHRENHEIT:"));
var convertidaC = (5 / 9) * (temperaturaF - 32);
console.log("A temperatura \u00E9 ".concat(temperaturaF, "\u00B0F e ").concat(convertidaC, "\u00B0C"));
