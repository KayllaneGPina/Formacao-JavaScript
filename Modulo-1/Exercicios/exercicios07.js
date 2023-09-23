// Refazer o exercício 05 escrevendo funcções

function calcularDesconto (valor, desconto){ 
    return valor - (valor * (desconto / 100));
}

function calcularJuros (valor, juros) {
    return valor + ( valor * (juros / 100));
}

const precoProduto = 100;
const formaDePagamento = 'Acima';

if (formaDePagamento === 'Débito') {
    console.log(calcularDesconto(precoProduto, 10));
} else if (formaDePagamento === 'Dinheiro' || formaDePagamento === 'Pix') {
    console.log(calcularDesconto(precoProduto, 15));
} else if (formaDePagamento === 'Duas Vezes') {
    console.log(precoProduto);
} else {
    console.log(calcularJuros(precoProduto, 10));
}


