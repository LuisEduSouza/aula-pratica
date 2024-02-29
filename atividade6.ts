console.clear(); 
const teclado = require('prompt-sync')();

let idade: number = 0
let salario: number = 0
let totalPessoasNaCondicao: number = 0;
let pessoasContabilizadas: number = 1;

while(pessoasContabilizadas <= 4) {
    idade = parseInt(teclado(`Digite a idade do funcionário ${pessoasContabilizadas}: `));
    salario = parseFloat(teclado(`Digite o salário do funcionário ${pessoasContabilizadas}: `));
    console.log(``)

    if(idade < 30 && salario > 3000){
        totalPessoasNaCondicao++;
        pessoasContabilizadas++;
    }
    else{
        pessoasContabilizadas++;
    }
}

console.log(`O total de pessoas que atendem a condição é ${totalPessoasNaCondicao}`)
