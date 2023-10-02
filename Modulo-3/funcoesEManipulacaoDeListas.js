// First Class Functions - Função First-class é quando suas funções são tratadas como qualquer outra variável
const foo = function () {
    console.log("foobar");
};
foo();


//Higher Order Functions -  Uma função que retorna uma função é chamada de Higher-Order Function
const sayHello = function () {
    return function () {
        console.log("Hello!")
    }
}

const myFunc = sayHello()
myFunc()

// Arrow Functions - ma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).
const minhaFuncao = () => 'teste'
console.log(minhaFuncao())

// Closures - Uma closure é a combinação de uma função com as referências ao estado que a circunda (o ambiente léxico). Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna. Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função.

function soma (x) {
    return function (y) {
        return x + y
    } 
}

const somaParcial = soma (10)

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))
console.log(somaParcial(50))

// Call - O método call() invoca uma função com um dado valor this e argumentos passados individualmente.
const pessoa1 = {
    nome: 'Kay',
    idade: 21
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

gritar.call(pessoa1, 'Olá')

// Apply - O método apply() chama uma função com um dado valor this e arguments providos como uma array (ou um objeto parecido com um array).
const pessoa2 = {
    nome: 'Kay',
    idade: 21
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa2, ['Olá'])

// Callbacks - Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
function adicao (x, y) {
    return x + y
}

function multiplicacao (x, y) {
    return x * y
}

function calculadora (x, operacao, y) {
    console.log(operacao(x, y))
}

calculadora(10, adicao, 20)
calculadora(10, multiplicacao, 20)

// ForEach - O forEach executa o callback fornecido uma vez para cada elemento da ordem com um valor atribuido. Ele não é invocado para propriedades de índices que foram deletados ou que não foram inicializados (por ex. em arrays esparsos).
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

lista.forEach((value) => {
    console.log(value)
})

// Filter - O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);
const result = words.filter((element) => {
    return element.length > 6
})

console.log(result);

// Map - O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
class Pessoa {
    constructor (name) {
        this.name = name
    }
}

const listaDePessoas = [new Pessoa('João'), new Pessoa('Maria'), new Pessoa('Pedro'), new Pessoa('Helena')]

const listaDeNomes = listaDePessoas.map((value) => value.name)

console.log(listaDeNomes)

//Reduce - O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
const lista2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somaDeTodosOsNumeros = lista2.reduce((previous, current) => {
    return previous + current
})

console.log(somaDeTodosOsNumeros)

//Join - O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
const lista3 = [1, 2, 3]

console.log(lista3.join('; '))
console.log(lista3.join('/ '))
console.log(lista3.join('. '))