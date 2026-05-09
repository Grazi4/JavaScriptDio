/* 
   2 - Crie uma classe para representar pessoas. 
   Para cada pessoa teremos os atributos nome, peso e altura.
   As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
   Instancie uma pessoa chamada José, que tenha 70kg de peso e 1.75m de altura e peça para José dizer o valor do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return  this.peso / Math.pow(this.altura, 2);  
    }

    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return(`${this.nome} está abaixo do peso.`);
        } else if (imc >= 18.5 && imc < 25) {
            return(`${this.nome} está com peso normal.`);
        } else if (imc >= 25 && imc < 30) {
            return(`${this.nome} está com sobrepeso.`);
        } else if (imc >= 30 && imc < 40) {
            return(`${this.nome} está com obesidade.`);
        } else {
            return(`${this.nome} está com obesidade grave.`);
        }              
    }
    
}

const jose = new Pessoa('José', 80, 1.75);
console.log(jose.classificarImc());