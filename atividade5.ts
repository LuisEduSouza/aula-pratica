console.clear(); 
const teclado = require('prompt-sync')();

let idade : number = parseFloat(teclado(`Digite sua idade: `));

if ( idade >= 18 ) {
    console.log(`Você é maior de idade`);
}
else{
    console.log(`Você é menor de idade`);
}
