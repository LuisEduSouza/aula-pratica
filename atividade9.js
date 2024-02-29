console.clear();
var divisor = 2;
var dividendo = 20;
var resto = 0;
resto = dividendo % divisor;
if (resto == 0) {
    console.log("N\u00FAmero par!");
}
else if (resto == 1) {
    console.log("N\u00FAmero \u00EDmpar!!");
}
else {
    console.log("Algo deu errado");
}
