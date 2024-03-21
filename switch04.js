const leia = require('readline-sync');

let codOperacao, operacao, valor, novoValor;
let saldo = 1000.00;

codOperacao = leia.questionInt("Código da operação:\n");

switch(codOperacao) {
      case 1:
            operacao = "Saldo";
            console.log(`Operação - ${operacao}\n\n${operacao}: R$ ${saldo.toFixed(2)}`)
            break
      case 2:
            operacao = "Saque";
            valor = leia.questionFloat("Qual o valor?\n");
            if(valor <= saldo){
                  novoValor = saldo - valor;
                  console.log(`Operação - ${operacao}\n\nNovo Saldo: R$ ${novoValor.toFixed(2)}`)
            } else {
                  console.log(`Operação - ${operacao}\n\nSaldo Insuficiente!`)
            }
            break
      case 3:
            operacao = "Depósito";
            valor = leia.questionFloat("Qual o valor?\n");
            novoValor = saldo + valor;
            console.log(`Operação - ${operacao}\n\nNovo Saldo: R$ ${novoValor.toFixed(2)}`)
            break
      default:
            console.log("Operação Inválida!");
}