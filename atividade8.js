console.clear();
var teclado = require('prompt-sync')();
var x = 0;
var contaAte = parseFloat(teclado("Digite o valor do contador: "));
while (x != contaAte) {
    console.log("Contador est\u00E1 em ".concat(x));
    x++;
}
