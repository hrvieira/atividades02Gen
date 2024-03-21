const leia = require('readline-sync');

// caracteristicas
let c1, c2, c3;

c1 = leia.keyInSelect(["Vertebrado", "Invertebrado"], "Escolha: Vertebrado ou Invertebrado?\n");

if(c1 === 0) {
  c2 = leia.keyInSelect(["Ave", "Mamífero"], "Qual das caracteristicas?");

  if(c2 === 0){
    c3 = leia.keyInSelect(["Carnívoro","Onívoro"], "Qual das caracteristicas?");
    if(c3 === 0) {
      console.log("Águia")
    } 
    else {
      console.log("Pomba")
    }
  } 
  else if(c2 === 1) {
    c3 = leia.keyInSelect(["Onívoro","Herbívoro"], "Qual das caracteristicas?");
    if(c3 === 0) {
      console.log("Homem")
    } 
    else {
      console.log("Vaca")
    }
  }
  else {
    console.log("Saindo!")
  }
} 
else if(c1 === 1){
  c2 = leia.keyInSelect(["Inseto", "Anelídeo"], "Qual das caracteristicas?");
  if(c2 === 0) {
    c3 = leia.keyInSelect(["Hematófago","Herbívoro"], "Qual das caracteristicas?");
    if(c3 === 0) {
      console.log("Pulga");
    } 
    else {
      console.log("Lagarta");
    }
  } 
  else if(c2 === 1){
    c3 = leia.keyInSelect(["Hematófago","Onívoro"], "Qual das caracteristicas?");
    if(c3 === 0) {
      console.log("Sanguessuga");
    } 
    else {
      console.log("Minhoca");
    }
  }
  else {
    console.log("Saindo!");
  }
} 
else {
  console.log("Saindo!");
}