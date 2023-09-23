// Importando
const { gets, print } = require('./importacaoEExportacao');
// console.log(funcoes)
print(gets());

// Objeto Destructuring
const pessoa = {
    nome: 'Kayllane'
}

// Entre as chaves é o Destructuring
const { nome } = pessoa;
console.log(nome)