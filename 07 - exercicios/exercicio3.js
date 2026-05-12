
/* 3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realizar o calculo receba o valor bruto do sálario a ser transferido   e o adicional de benefícios.
O salário a ser transferido é calculado da seguinte maneira:

Valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos beneficios

Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que 2500.00 = 15.00%
*/

const {gets, print} = require('./funcoes-auxiliares-ex3')


const salarioBruto = gets(); 
const valorBeneficios = gets();

function calcularPercentual(valor, percentual){
    return (percentual / 100) * valor;
}

function pegarAliquota(salario){
    
    if (salario >= 0 && salario <= 1100){
        return 5;
    }
    else if(salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

const aliquotaImposto = pegarAliquota(salarioBruto);

const valorImposto = calcularPercentual(salarioBruto,aliquotaImposto);

const valorATransferir = salarioBruto - valorImposto + valorBeneficios;

print(valorATransferir);

