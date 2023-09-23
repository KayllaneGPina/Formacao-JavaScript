// Objetos são conjunto que possuem { "chave" : "valor" }
const pessoa = {
    nome: 'Kayllane Gomes Ferreira Pina',
    idade: 21,

    // Métodos de objetos
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

pessoa.altura = 1.61;

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.altura);

// delete pessoa.nome;
// console.log(pessoa);

pessoa.descrever();

// Reatribuindo o valor do nome
pessoa.nome = 'Kayllane';
pessoa.descrever();

// Acessando dinamicamente
const atributo = 'idade';
console.log(pessoa[atributo]);
console.log(pessoa['nome']);

// Classes e Instâncias
class Pessoa {
    nome;
    idade;
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

// Instância da classe pessoa
const kayllane = new Pessoa();
kayllane.nome = 'Kayllane G F Pina';
kayllane.idade = 21;
console.log(kayllane);
kayllane.descrever();

// Instâncias com Constructor
class Cachorro {
    nome;
    idade;
    raca;

    constructor(nome, idade, raca) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    descrever() {
        console.log(`Meu cachorro se chama ${this.nome}, tem ${this.idade} anos de idade e é da raça ${this.raca} `);
    }
}

const teca = new Cachorro('Teca', 10, 'SRD');
teca.descrever();

function compararCachorro(c1, c2) {
    if (c1.idade > c2.idade) {
        console.log(`O cachorro ${c1.nome} é mais velho que o cachorro ${c2.nome}`);
    } else if (c1.idade < c2.idade) {
        console.log(`O cachorro ${c2.nome} é mais velho que o cachorro ${c1.nome}`);
    } else {
        console.log(`O cachorro ${c1.nome} tem a mesma idade que o cachorro ${c2.nome}`);
    }
}

const tequinha = new Cachorro('Tequinha', 10, 'SRD');
const malandra = new Cachorro('Malandra', 0.6, 'SRD');

// Função recebendo objetos
compararCachorro(tequinha, malandra);