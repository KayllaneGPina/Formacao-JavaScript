/*  Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor, e um gasto médio de combustível por kilometro rodade.
    Crie um método que dado a quantidade de kilometros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca,
        this.cor = cor,
        this.gastoMedioPorKm = gastoMedioPorKm
    }
    
    calcularGastoDePercurso(distancia, precoCombustivel) {
        const gasto = distancia *  this.gastoMedioPorKm * precoCombustivel;
        console.log(`Meu carro gasta ${gasto} por percurso.`); 
    }

    meuCarro() {
        console.log(`Meu carro é da marca ${this.marca}, tem a cor ${this.cor} e o preço do combustível é de ${this.gastoMedioPorKm} reais.`)
    }

}

const uno = new Carro('Fiat', 'Preto', 1/10);
uno.meuCarro();
uno.calcularGastoDePercurso(150, 5.79);

