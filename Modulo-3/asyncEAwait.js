// Async e Await
const fs = require('fs')


async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile('tarefas.csv')
        const textoDoArquivo = arquivo.toString('utf-8')
        console.log(textoDoArquivo)
    }
    catch (error) {
        console.log(error)
    } finally {
        console.log('finalizou!')

    }
}

buscarArquivo()