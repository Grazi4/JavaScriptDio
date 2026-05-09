/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprime no console o valor que será gasto para realizar esta viagem.

*/

const precoEtanol = 4.13;
const precoGasolina = 5.79;
const tipoCombustivel = 'Etanol';
const kmPorLitros = 15;
const distanciaEmKm = 150;

const gastoPorKm = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'gasolina') {
    const gastoGasolina = gastoPorKm * precoGasolina;
    console.log(gastoGasolina.toFixed(2));
} else {
    const gastoEtanol = gastoPorKm * precoEtanol;
    console.log(gastoEtanol.toFixed(2));
}
