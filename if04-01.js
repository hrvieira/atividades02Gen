const leia = require('readline-sync');

// caracteristicas
let c1, c2, c3;

c1 = leia.question("vertebrado ou invertebrado?\n");

if (c1 === "vertebrado") {
  c2 = leia.question("ave ou mamifero?\n");

  if (c2 === "ave") {
    c3 = leia.question("carnivoro ou onivoro?\n");
    if (c3 === "carnivoro") {
      console.log("Águia")
    }
    else {
      console.log("Pomba")
    }
  } else {
    c3 = leia.question("onivoro ou herbivoro?\n");
    if (c3 === "onivoro") {
      console.log("Homem")
    }
    else {
      console.log("Vaca")
    }
  }
} else if (c1 === "invertebrado") {

  c2 = leia.question("inseto ou anelideo?\n");
  if (c2 === "inseto") {
    c3 = leia.question("hematofago ou herbivoro?\n");
    if (c3 === "hematofago") {
      console.log("Pulga");
    }
    else {
      console.log("Lagarta");
    }
  } else {
    c3 = leia.question("hematofago ou onivoro?\n");
    if (c3 === "hematofago") {
      console.log("Sanguessuga");
    }
    else {
      console.log("Minhoca");
    }
  }
}