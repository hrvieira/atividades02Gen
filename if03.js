const leia = require('readline-sync');

let nome, idade, primeiraVez, sexo, apto;

nome = leia.question("Digite o Nome do doador:\n");
idade = leia.questionInt("Digite a Idade do doador:\n");
primeiraVez = leia.keyInYNStrict('Primeira doação de sangue?\n');
sexo = leia.keyInSelect(["Homem", "Mulher"], "Qual o sexo?");

// nome = "João da Silva";
// idade = 62;
// primeiraVez = true;
// sexo = 0;

// nome = "Maria dos Anjos";
// idade = 50;
// primeiraVez = true;
// sexo = 1;

// nome = "Fábio Camões";
// idade = 14;
// primeiraVez = false;
// sexo = 0;

// nome = "Pedro Souza";
// idade = 68;
// primeiraVez = false;
// sexo = 0;

if(sexo == 0) {
  apto = "apto"
} else {
  apto = "apta"
}

if((idade >= 18 && idade <= 59) || (idade >= 60 && idade <= 69 && primeiraVez === false)) {
  console.log(`${nome} está ${apto} para doar sangue!`)
} else {
  console.log(`${nome} não está ${apto} para doar sangue!`)
}