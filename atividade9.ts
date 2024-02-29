console.clear();

let divisor : number = 2;
let dividendo : number = 20;
let resto: number = 0;

resto = dividendo % divisor;

if (resto == 0){
    console.log(`Número par!`)
}
else if (resto == 1){
    console.log(`Número ímpar!!`)
}
else{
    console.log(`Algo deu errado`)
}