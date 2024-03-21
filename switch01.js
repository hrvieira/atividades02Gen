const leia = require('readline-sync');

let qualProduto, produto, quantos, preco;

qualProduto = leia.questionInt("Qual produto deseja?\n");

switch(qualProduto) {
        case 1:
                produto = "Cachorro-Quente";
                preco = 10;
                break
        case 2:
                produto = "X-Salada";
                preco = 15;
                break
        case 3:
                produto = "X-Bacon";
                preco = 18;
                break
        case 4:
                produto = "Bauru";
                preco = 12;
                break
        case 5:
                produto = "Refrigerante";
                preco = 8;
                break
        case 6:
                produto = "Suco de laranja";
                preco = 13;
                break
        default:
                console.log("Produto não consta no menu.");
}

quantos = leia.questionInt("Quantos?");

let valorTotal = preco * quantos;

console.log(`Produto: ${produto}\nValor total: R$ ${valorTotal.toFixed(2)}`);