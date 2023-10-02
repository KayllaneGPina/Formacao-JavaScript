// const pessoa = {
//     idade: 21
// }

// const kayllane = {
//     nome: 'kayllane',
//     __proto__: pessoa
// }

// console.log(kayllane.idade)

function Pessoa(nome, idade) { //Funções quando começam com a primeira letra maiúscula significa que são funções construtoras
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}
const kayllane = new Pessoa('Kayllane', 21)
console.log(kayllane)

kayllane.falar()


// Mesma coisa da função de cima
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falar(){
    console.log(`Meu nome é ${this.nome}`)
    }
}