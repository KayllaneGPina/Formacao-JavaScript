/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
    1 - Preço do Etanol;
    2 - Preço da Gasolina;
    3 - O tipo de combustível que está no carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem
*/

const precoDoEtanol = 3.75;
const precoDaGasolina = 4.82;
const tipoCombustivel = 'Gasolina';
const gastoMedioDoLitroPorKm = 10;
const distanciaEmKm = 100;
const litrosConsumidos = distanciaEmKm / gastoMedioDoLitroPorKm;

if (tipoCombustivel === 'Etanol') {
    const valorGastoDoCombustivel = litrosConsumidos * precoDoEtanol;
    console.log(valorGastoDoCombustivel.toFixed(2))
} else {
    const valorGastoDoCombustivel = litrosConsumidos * precoDaGasolina;
    console.log(valorGastoDoCombustivel.toFixed(2))
}
