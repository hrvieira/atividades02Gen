const leia = require('readline-sync');

let a,b,c,soma,resposta;

// a = 2;
// b = 4;
// c = 5;

// a = 2;
// b = 2;
// c = 5;

// a = 2;
// b = 2;
// c = 4;

a = leia.questionInt("Qual o valor de A?\n");
b = leia.questionInt("Qual o valor de B?\n");
c = leia.questionInt("Qual o valor de C?\n");

soma = a + b;

if(soma > c){
  resposta = "maior que";
} else if(soma < c){
  resposta = "menor que";
} else {
  resposta = "igual a";
}

console.log(`O valor de "A + B" é ${resposta} "C".`);