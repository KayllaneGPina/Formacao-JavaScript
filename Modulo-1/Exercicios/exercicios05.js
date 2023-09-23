/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

const produto = 150;
const formaDePagamento = 'Acima de Duas Vezes';
const pagamentoAVistaNoDebito = produto - (produto * (10 / 100));
const pagamentoAVistaNoDinheiroOuPix = produto - (produto * (15 /100));
const pagamentoAcimaDeDuasVezes = produto * (1 + (10 / 100));

if (formaDePagamento === 'Débito'){
    console.log(pagamentoAVistaNoDebito)
} else if (formaDePagamento === 'Dinheiro' || formaDePagamento === 'Pix') {
    console.log (pagamentoAVistaNoDinheiroOuPix)
}else if (formaDePagamento === 'Duas vezes') {
    console.log (produto)
} else {
    console.log(pagamentoAcimaDeDuasVezes)
}
