console.clear();
var teclado = require("prompt-sync")();
var divisor = 2;
var dividendo = parseFloat(teclado("Digite um n\u00FAmero: "));
var resto = 0;
resto = dividendo % divisor;
if (resto == 0) {
    console.log("N\u00FAmero ".concat(dividendo, " \u00E9 par!!"));
}
else if (resto == 1) {
    console.log("N\u00FAmero ".concat(dividendo, " \u00E9 \u00EDmpar!!"));
}
else {
    console.log("Algo deu errado");
}
