// Funções gets e print
// Exercicio 12
const entradas = [5, 50, 10, 98,23,]
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor
}

function print(texto) {
    console.log(texto)
}


// Exportando para o main
module.exports = { gets, print}