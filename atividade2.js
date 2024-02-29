/*
Nome: Luís Eduardo Novaes Souza
Faça a média de 10 número (entrada via teclado) e exiba o resultado.
*/
console.clear();
var teclado = require('prompt-sync')();
var N1 = parseFloat(teclado("Digite NOTA 1: "));
var N2 = parseFloat(teclado("Digite NOTA 2: "));
var N3 = parseFloat(teclado("Digite NOTA 3: "));
var N4 = parseFloat(teclado("Digite NOTA 4: "));
var N5 = parseFloat(teclado("Digite NOTA 5: "));
var N6 = parseFloat(teclado("Digite NOTA 6: "));
var N7 = parseFloat(teclado("Digite NOTA 7: "));
var N8 = parseFloat(teclado("Digite NOTA 8: "));
var N9 = parseFloat(teclado("Digite NOTA 9: "));
var N10 = parseFloat(teclado("Digite NOTA 10: "));
var media = (N1 + N2 + N3 + N4 + N5 + N6 + N7 + N8 + N9 + N10) / 10;
console.log("M\u00E9dia \u00E9 ".concat(media));
