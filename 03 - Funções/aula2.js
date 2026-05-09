function escreverNome(nome){
    return 'Meu nome é ' + nome;
}


function verificarIdade(idade){
    if (idade >= 18){
        return (escreverNome('Nunes') + ' e tenho ' + idade + ' anos - ' + ' Sou maior de idade' )
    } else {
        return (escreverNome('Grazi') + ' e tenho ' + idade + ' anos - ' + ' Sou menor de idade')
    }
}

console.log(verificarIdade(27));
console.log(verificarIdade(15));