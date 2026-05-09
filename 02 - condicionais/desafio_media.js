/* 1) Faça um algoritimo que dado as 3 notas tiradas por um aluni em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

Média = (nota1 + nota2 + nota3) / 3

Classificação:
- Média menor que 5, reprovado
- Média entre 5 e 7, recuperação
- Média acima de 7, aprovado

*/

const nota1 = 2;
const nota2 = 5;
const nota3 = 5;

const mediaNotas = (nota1 + nota2 + nota3) / 3;

if (mediaNotas < 5) {
    console.log('Média:' + mediaNotas.toFixed(2) + ' - Reprovado');
    } else if (mediaNotas >= 5 && mediaNotas <= 7) {
        console.log('Média:' + mediaNotas.toFixed(2) + ' - Recuperação');

    } else {
        console.log('Média:' + mediaNotas.toFixed(2) + ' - Aprovado');
    }