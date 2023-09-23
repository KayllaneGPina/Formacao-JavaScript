/*
    Refazendo o exercício 04 utilizando classes
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }
    
    classificacaoImc() {
        const imc = this.calcularImc();

        console.log(`${this.nome} tem ${this.peso}kg, ${this.altura}m de altura e seu IMC é ${imc}`);

        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        } else {
            return 'Obesidade grave';
        }
    }
}


const jose = new Pessoa('José', 80, 1.75);
jose.calcularImc();
console.log(jose.classificacaoImc());