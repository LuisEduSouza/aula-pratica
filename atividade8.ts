console.clear(); 
const teclado = require('prompt-sync')();

let x: number = 0
let contaAte: number = parseFloat(teclado(`Digite o valor do contador: `));

while(x != contaAte){
    console.log(`Contador está em ${x}`)
    x++;
}
