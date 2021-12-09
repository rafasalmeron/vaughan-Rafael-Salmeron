// Exercícios de Interpretação de Código
// 1.
// a)
/*
Será impreso no console exatamente cada item dentro do objeto.
nome e seu apelido e seu indice e tbm o array completo.
*/

// 2.
// a)
/*
Aqui será impresso apenas cada nome de cada item dentro do array de objeto.
*/

// 3.
// a)
/*
Aqui irá filtrar o array, e só será imprimido os item dentro do array que não contenham
"Chijo" como apelido.
*/

// Exercícios de Escrita de Código
// 1.
// a) Crie um novo array que contenha apenas o nome dos doguinhos
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
const novoArrayNomes = pets.map((item) => {
    return item.nome;
});
console.log(novoArrayNomes);

// b) Crie um novo array apenas com os cachorros salsicha
const novoArraySalsicha = pets.filter((item) => {
    return item.raca === "Salsicha";
});
console.log(novoArraySalsicha);

// c) Crie um novo array que possuirá mensagens para enviar 
// para todos os clientes que são poodles. A mensagem deve ser:
// "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
const novoArrayPoodle = pets.filter((item) => {
    if (item.raca === "Poodle"){
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
    };
    return false;
});
// usei todas as referências dos exercícios de interpretação para
// Realizar o exercício acima.

// 2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
// a) Crie um novo array que contenha apenas o nome de cada item
const novosProdutos = produtos.map((item) => {
    return item.nome;
});
console.log(novosProdutos);

// b) Crie um novo array que contenha um objeto com o nome
// e o preço de cada item,
// aplicando 5% de desconto em todos eles
const nome_e_Preco = produtos.map(produto => {
    return {
        nome: produto.nome,
        preco: produto.preco * 0.95
    }   

});
console.log(nome_e_Preco);

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const categorias = produtos.filter((bebidas) => {
    if(bebidas.categoria === "Bebidas"){
        console.log(bebidas);
    };
    return false;
});

// d) Crie um novo array que contenha 
// apenas os objetos cujo nome contenha a palavra "Ypê"
const produtosYpe = produtos.filter((marcaYpe) => {
    return marcaYpe.nome.includes("Ypê");
});
console.log(produtosYpe);

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const vendaYpe = produtos.filter((produto) => {
    return produto.nome.includes("Ypê");
}).map((produto) => {
    return `Compre ${produto.nome} por ${produto.preco}`;
});
console.log(vendaYpe);

