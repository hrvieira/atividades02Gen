const leia = require('readline-sync');

let num1, num2, codOperador, operador, resultado;

num1 = leia.questionFloat("Digite o 1º número:\n");
num2 = leia.questionFloat("Digite o 2º número:\n");
codOperador = leia.questionInt("Operação:\n");

switch(codOperador) {
      case 1:
            operador = "+";
            resultado = num1 + num2;
            break
      case 2:
            operador = "-";
            resultado = num1 - num2;
            break
      case 3:
            operador = "*";
            resultado = num1 * num2;
            break
      case 4:
            operador = "/";
            resultado = num1 / num2;
            break
      default:
            console.log("Operação Inválida!");
}

console.log(`${num1.toFixed(1)} ${operador} ${num2.toFixed(1)} = ${resultado.toFixed(1)}`);