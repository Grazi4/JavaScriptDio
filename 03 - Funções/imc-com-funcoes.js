function calcularIMC(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if (imc < 18.5) {
    console.log('IMC:' + imc.toFixed(2) + ' - Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
        return('IMC:' + imc.toFixed(2) + ' - Peso normal');
    } else if (imc >= 25 && imc < 30) {
        return('IMC:' + imc.toFixed(2) + ' - Acima do Peso');
    } else if (imc >= 30 && imc < 40) {
        return('IMC:' + imc.toFixed(2) + ' - Obeso');
    } else { 
        return('IMC:' + imc.toFixed(2) + ' - Obesidade Grave');
    }
}

// Main
(function (){
    const peso = 70.5;
    const altura = 1.75;

    const imc = calcularIMC(peso, altura);
    console.log(classificarImc(imc));
})();