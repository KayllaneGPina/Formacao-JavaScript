// Promise  -é um proxy para um valor não necessariamente conhecido quando a promise é criada. Ele permite que você associe manipuladores ao valor de sucesso ou motivo de falha de uma ação assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promise para fornecer o valor em algum momento no futuro.

const promessaNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000)
})

console.log('Pausa')

promessaNumeroQualquer
    .then((value) => {
        console.log(value)
    }).catch((error) => {
        console.log(error)
    }).finally(() => {
        console.log('finalizou')
    })


// Manipulando Arquivos através de promisses
const fs = require('fs')

const promesaDaLeituraDoArquivo = fs.promises.readFile('tarefas.csv')

promesaDaLeituraDoArquivo
    .then((arquivo) => {
        console.log(arquivo.toString('utf8'))
    })
    .catch((error) => {
        console.log('Deu ruim!', error)
    })


