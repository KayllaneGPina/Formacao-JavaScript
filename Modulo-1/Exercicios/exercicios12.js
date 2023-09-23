/*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior numero sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    89
*/

const { gets, print } = require('../importacaoEExportacao');

const entradas = gets();
let maiorValor = 0;

for (let i = 0; i < entradas; i++) {
    const numerosSorteado = gets();
    if(numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado;
    }
}

print(maiorValor)