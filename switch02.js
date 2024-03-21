const leia = require('readline-sync');

let nome, codCargo, cargo, percentual, salario;

nome = leia.question("Nome do colaborador:\n");

codCargo = leia.questionInt("Código do Cargo do Colaborador:\n");

salario = leia.questionFloat("Salário atual:\n");

switch(codCargo) {
      case 1:
            cargo = "Gerente";
            percentual = 1.1;
            break
      case 2:
            cargo = "Vendedor";
            percentual = 1.07;
            break
      case 3:
            cargo = "Supervisor";
            percentual = 1.09;
            break
      case 4:
            cargo = "Motorista";
            percentual = 1.06;
            break
      case 5:
            cargo = "Estoquista";
            percentual = 1.05;
            break
      case 6:
            cargo = "Técnico de TI";
            percentual = 1.08;
            break
      default:
            console.log("Cargo não foi encontrado.");
}

let novoSalario = salario * percentual;

console.log(`Nome do colaborador: ${nome}\nCargo: ${cargo}\nSalário: R$ ${novoSalario.toFixed(2)}`);