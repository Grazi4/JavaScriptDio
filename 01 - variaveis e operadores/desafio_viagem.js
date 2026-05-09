/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combistível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

*/
const precoCombustivel = 5.79;
const kmPorLitros = 0.15;
const distanciaEmKm = 100;

const gasto = precoCombustivel * kmPorLitros * distanciaEmKm;

console.log(gasto.toFixed(2));