/* 3) Elabore um algoritmo que calcule o valor final de um produto, considerando o valor original do produto e sua forma de pagamento. Use as seguintes condições:
1 - À vista Débito: 10% de desconto;
2 - À vista Dinheiro ou Pix: 15% de desconto;
3 - Em até 2x no cartão: preço normal de etiqueta sem juros;
4 - Acima de 2x no cartão: preço normal de etiqueta mais juros de 10%;
*/


const preco = 19.90;
const formaPagamento = 1;

if (formaPagamento === 1) {
    console.log ('O valor do produto é R$ ' + (preco - preco * 0.1).toFixed(2) + ' com 10% de desconto');
} else if (formaPagamento === 2) {
    console.log ('Ovalor do produto é R$' + (preco - preco * 0.15).toFixed(2) + 'com 15% de desconto');
} else if (formaPagamento === 3 ){
    console.log('O valor do produto é R$' + (preco.toFixed(2)) + ' em 2x sem juros, sem desconto');
} else {
    console.log('O valor do produto é R$' + (preco * 1.1).toFixed(2) + ' com 10% de juros');
}