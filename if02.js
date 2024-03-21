const leia = require('readline-sync');

let num;

// num = 2;
// num = -3;
// num = -2;
// num = 3;
// num = 0;

num = leia.questionInt("Escolha um numero:\n");

if(num == 0) {
  console.log(`O numero escolhido é ${num}, podendo ser par ou neutro.`)
} else {
  if((num % 2) == 0){
    if(num > 0){
      console.log(`O numero ${num} é par e positivo.`)
    } else {
      console.log(`O numero ${num} é par e negativo.`)
    }
  } else if((num % 2) == 1) {
    console.log(`O numero ${num} é ímpar e positivo.`)
  } else if((num % 2) == -1){
    console.log(`O numero ${num} é ímpar e negativo.`)
  }
}