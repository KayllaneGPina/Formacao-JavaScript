// const alunos = ['Aluno1', 'Aluno2', 'Aluno3'];

// // Percorrendo um array em JavaScript
// for (let i = 0; i < alunos.length; i++){
//     console.log(alunos[i]);
// }

// // Adicionando e Removendo Itens
// alunos.push('Aluno3');
// alunos[4] = 'Aluno4';
// console.log(alunos);

// alunos.pop(); // Remove o último elemento
// console.log(alunos);

// alunos.shift(); // Remove o primeiro elemento
// console.log(alunos);


// Estrutura de Repetição
const notas = [];

notas.push(8)
notas.push(9.5)
notas.push(8.6)
notas.push(10)

let soma = 0

for (let index = 0; index < notas.length; index++) {
    const nota = notas[index];
    soma += nota;
}

const media = soma / notas.length;
console.log(media.toFixed(2))


// const nome = 'Kayllane G F Pina';
// console.log(nome.length);

// for (let index = 0; index < nome.length; index++) {
//     console.log(nome[index]);
// }