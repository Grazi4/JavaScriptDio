/* 1 - Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado. Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.

*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoPercurso(quilometros, precoCombustivel){
        const valorGasto = quilometros * this.gastoMedioPorKm * precoCombustivel;
        console.log(`Valor gasto para percorrer ${quilometros} km: R$ ${valorGasto.toFixed(2)}`);
        }
    }

    const carro1 = new Carro('Toyota', 'Vermelho', 1/12);
    carro1.calcularGastoPercurso(70, 5);

    const palio = new Carro ('Fiat', 'Prata', 1/10);
    palio.calcularGastoPercurso(70, 5);