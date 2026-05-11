/*
    1) Faça um programa que receba a média de um aluno.
    Caso a média seja < 5 imprima "Reprovado"
    Caso a média seja >= 5 ou < 7 imprima "Recupersção"
    Caso a média seja >= 7 imprima "Aprovado"
    
        Exemplo:

            Entrada:
                5.5
            Saída:
                Recuperação    
*/

const {gets, print} = require('./funcoes-auxiliares-ex1')

const media = gets();

    if (media >= 0 && media < 5){
        print(`Média: ${media} - Reprovado`);
    } else if (media >= 5 && media < 7 ){
        print(`Média: ${media} - Recuperação`);
    } else if (media >= 7 && media <= 10) {
        print(`Média: ${media} - Aprovado`)
    } else {
        print(`${media} é um número invalido!`)
    }



/*
function resultadoMedia (media){
    if (media < 5){
        console.log(`Média: ${media} - Reprovado`);
    } else if (media >= 5 && media < 7 ){
        console.log(`Média: ${media} - Recuperação`);
    } else {
        console.log(`Média: ${media} - Aprovado`)
    }
}

resultadoMedia(7);

*/