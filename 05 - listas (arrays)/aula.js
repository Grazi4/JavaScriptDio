
const alunos = ['João', 'Maria', 'Pedro', 'Ana'];

alunos.push('julia'); // Adiciona um elemento no final do array
alunos.unshift('Aurora'); // Adiciona um elemento no ínicio do array
alunos[4] = 'Joana'; // Altera o elemento do índice 4

console.log(alunos[5]);
console.log(alunos);
console.log(alunos.pop()); // Remove o último elemnto do array
console.log(alunos);
console.log(alunos.shift()); // Remove o primeiro elemnto do array
console.log(alunos);
console.log(alunos.length); // Retorna o tamanho do array
 