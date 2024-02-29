/*
Nome: Luís Eduardo Novaes Souza
Faça a média de 10 número (entrada via teclado) e exiba o resultado.
*/

console.clear(); 
const teclado = require('prompt-sync')();

let N1 : number = parseFloat(teclado(`Digite NOTA 1: `));
let N2 : number = parseFloat(teclado(`Digite NOTA 2: `));
let N3 : number = parseFloat(teclado(`Digite NOTA 3: `));
let N4 : number = parseFloat(teclado(`Digite NOTA 4: `));
let N5 : number = parseFloat(teclado(`Digite NOTA 5: `));
let N6 : number = parseFloat(teclado(`Digite NOTA 6: `));
let N7 : number = parseFloat(teclado(`Digite NOTA 7: `));
let N8 : number = parseFloat(teclado(`Digite NOTA 8: `));
let N9 : number = parseFloat(teclado(`Digite NOTA 9: `));
let N10 : number = parseFloat(teclado(`Digite NOTA 10: `));

let media: number = (N1 + N2 + N3 + N4 + N5 + N6 + N7 + N8 + N9 + N10) / 10;
console.log(`Média é ${media}`);